import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// OPM reference PDF is now bundled inside the project at data/
// Same path used by the Vercel serverless function (api/opm-pages.js)
const OPM_PATH = join(process.cwd(), 'data', 'OPM-0043-13.pdf')

// Dev-server plugin: POST /api/opm-pages { pages: [221, 223, ...] }
// Mirrors the Vercel serverless function so local dev works identically.
// Uses pdf-lib (already a project dependency) — no Python required.
function opmPagesPlugin() {
  return {
    name: 'opm-pages-server',
    configureServer(server) {
      server.middlewares.use('/api/opm-pages', async (req, res, next) => {
        if (req.method !== 'POST') return next()

        // Collect request body
        let body = ''
        for await (const chunk of req) body += chunk

        let pages
        try {
          pages = JSON.parse(body).pages
          if (!Array.isArray(pages) || pages.length === 0) throw new Error('empty')
        } catch {
          res.writeHead(400, { 'Content-Type': 'text/plain' })
          res.end('Expected JSON body: { pages: [number, ...] }')
          return
        }

        try {
          // pdf-lib works in Node.js — same library used in the browser bundle
          const { PDFDocument } = await import('pdf-lib')
          const opmBytes = readFileSync(OPM_PATH)
          const srcDoc   = await PDFDocument.load(opmBytes, { ignoreEncryption: true })
          const destDoc  = await PDFDocument.create()
          const copied   = await destDoc.copyPages(srcDoc, pages.map(p => p - 1))
          copied.forEach(p => destDoc.addPage(p))
          const out = await destDoc.save()

          res.writeHead(200, { 'Content-Type': 'application/pdf' })
          res.end(Buffer.from(out))
        } catch (err) {
          console.error('[opm-pages]', err.message)
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end(err.message)
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), opmPagesPlugin()],
  test: {
    environment: 'node',
    include: ['src/__tests__/**/*.test.js'],
    reporters: ['verbose'],
  },
})
