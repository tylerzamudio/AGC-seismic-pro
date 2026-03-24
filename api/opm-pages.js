/**
 * Vercel Serverless Function: POST /api/opm-pages
 *
 * Extracts one or more pages from the bundled OPM reference PDF and returns
 * them as a single PDF binary. Used by the browser to:
 *   1. Embed detail drawings in the exported schedule PDF (via pdf-lib merge)
 *   2. Open a single detail drawing in a new browser tab on demand
 *
 * Request body (JSON): { pages: number[] }   — 1-based OPM page numbers
 * Response:            application/pdf binary
 *
 * No Python, no external dependencies — pure Node.js + pdf-lib.
 */

import { PDFDocument } from 'pdf-lib'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// OPM PDF is bundled with the function via vercel.json "includeFiles": "data/**"
const OPM_PATH = join(process.cwd(), 'data', 'OPM-0043-13.pdf')

// Cache the raw bytes across warm invocations (serverless container reuse)
let _opmBytes = null
function getOpmBytes() {
  if (!_opmBytes) _opmBytes = readFileSync(OPM_PATH)
  return _opmBytes
}

export default async function handler(req, res) {
  // CORS headers so the browser SPA can call this from any origin during dev
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  // Vercel auto-parses JSON bodies — req.body is already an object
  const { pages } = req.body ?? {}

  if (!Array.isArray(pages) || pages.length === 0) {
    res.status(400).json({ error: '`pages` must be a non-empty array of 1-based page numbers' })
    return
  }

  if (pages.some(p => typeof p !== 'number' || p < 1 || !Number.isInteger(p))) {
    res.status(400).json({ error: 'All page numbers must be positive integers' })
    return
  }

  try {
    const opmBytes = getOpmBytes()
    const srcDoc   = await PDFDocument.load(opmBytes, { ignoreEncryption: true })
    const destDoc  = await PDFDocument.create()

    // Convert 1-based page numbers to 0-based indices
    const indices = pages.map(p => p - 1)
    const copied  = await destDoc.copyPagesFrom(srcDoc, indices)
    copied.forEach(p => destDoc.addPage(p))

    const pdfBytes = await destDoc.save()

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Length', pdfBytes.byteLength)
    res.status(200).send(Buffer.from(pdfBytes))
  } catch (err) {
    console.error('[api/opm-pages]', err)
    res.status(500).json({ error: err.message })
  }
}
