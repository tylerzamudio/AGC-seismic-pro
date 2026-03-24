/**
 * AGC Seismic Pro — Unit Tests
 * Covers: helper functions, data integrity, OPM page map, branding strings
 */

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, it, expect } from 'vitest'

import {
  getRodSize,
  findTrapezeRow,
  selectFpTier,
  OPM_PAGES,
  PIPE_WEIGHTS,
  ROD_SIZE_MAP,
  INDIV_SOLID_TABLES,
  INDIV_CABLE_TABLES,
  TRAPEZE_SOLID_TABLES,
  TRAPEZE_CABLE_STD_TABLES,
  TRAPEZE_CABLE_X_TABLES,
} from '../data/braceData.js'

// ─────────────────────────────────────────────────────────────────────────────
// 1. getRodSize()
// ─────────────────────────────────────────────────────────────────────────────
describe('getRodSize()', () => {
  it('returns 3/8" for 38-prefix designations', () => {
    expect(getRodSize('38A')).toBe('3/8"')
    expect(getRodSize('38C')).toBe('3/8"')
    expect(getRodSize('38F')).toBe('3/8"')
  })

  it('returns 1/2" for 50-prefix designations', () => {
    expect(getRodSize('50A')).toBe('1/2"')
    expect(getRodSize('50G')).toBe('1/2"')
  })

  it('returns 5/8" for 63-prefix designations', () => {
    expect(getRodSize('63B')).toBe('5/8"')
    expect(getRodSize('63M')).toBe('5/8"')
  })

  it('returns 3/4" for 75-prefix designations', () => {
    expect(getRodSize('75J')).toBe('3/4"')
    expect(getRodSize('75R')).toBe('3/4"')
  })

  it('returns 7/8" for 88-prefix designations', () => {
    expect(getRodSize('88J')).toBe('7/8"')
    expect(getRodSize('88Q')).toBe('7/8"')
  })

  it('returns 1" for 100-prefix designations', () => {
    expect(getRodSize('100S')).toBe('1"')
    expect(getRodSize('100Q')).toBe('1"')
  })

  it('returns 1-1/4" for 125-prefix designations', () => {
    expect(getRodSize('125S')).toBe('1-1/4"')
    expect(getRodSize('125Q')).toBe('1-1/4"')
  })

  it('returns "—" for null, undefined, or "—"', () => {
    expect(getRodSize(null)).toBe('—')
    expect(getRodSize(undefined)).toBe('—')
    expect(getRodSize('—')).toBe('—')
  })

  it('returns "See schedule" for unrecognised prefix', () => {
    expect(getRodSize('99X')).toBe('See schedule')
    expect(getRodSize('UNKNOWN')).toBe('See schedule')
  })

  it('ROD_SIZE_MAP covers all 7 standard rod sizes', () => {
    const expected = ['3/8"', '1/2"', '5/8"', '3/4"', '7/8"', '1"', '1-1/4"']
    expect(Object.values(ROD_SIZE_MAP)).toEqual(expected)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 2. selectFpTier()
// ─────────────────────────────────────────────────────────────────────────────
describe('selectFpTier()', () => {
  it('maps very low Fp to 0.25g tier', () => {
    expect(selectFpTier(0.1)).toBe(0.25)
    expect(selectFpTier(0.2)).toBe(0.25)
  })

  it('maps boundary 0.25g exactly to 0.25g tier', () => {
    expect(selectFpTier(0.25)).toBe(0.25)
  })

  it('maps values just above 0.25g to 0.5g tier', () => {
    expect(selectFpTier(0.26)).toBe(0.5)
    expect(selectFpTier(0.4)).toBe(0.5)
  })

  it('maps boundary 0.5g exactly to 0.5g tier', () => {
    expect(selectFpTier(0.5)).toBe(0.5)
  })

  it('maps values above 0.5g to 1.0g tier', () => {
    expect(selectFpTier(0.51)).toBe(1.0)
    expect(selectFpTier(1.0)).toBe(1.0)
    expect(selectFpTier(1.5)).toBe(1.0)
    expect(selectFpTier(2.0)).toBe(1.0)
    expect(selectFpTier(2.5)).toBe(1.0)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 3. findTrapezeRow()
// ─────────────────────────────────────────────────────────────────────────────
describe('findTrapezeRow()', () => {
  const rows = [
    { weight: 10 },
    { weight: 20 },
    { weight: 40 },
    { weight: 60 },
  ]

  it('returns first row when weight equals lowest entry', () => {
    expect(findTrapezeRow(rows, 10)).toEqual({ weight: 10 })
  })

  it('returns first row when weight is below all entries', () => {
    expect(findTrapezeRow(rows, 5)).toEqual({ weight: 10 })
  })

  it('returns next row up when weight falls between entries', () => {
    expect(findTrapezeRow(rows, 15)).toEqual({ weight: 20 })
    expect(findTrapezeRow(rows, 21)).toEqual({ weight: 40 })
  })

  it('returns exact row when weight matches exactly', () => {
    expect(findTrapezeRow(rows, 40)).toEqual({ weight: 40 })
  })

  it('returns heaviest row when weight exceeds all entries', () => {
    expect(findTrapezeRow(rows, 100)).toEqual({ weight: 60 })
  })

  it('handles unsorted input rows', () => {
    const unsorted = [{ weight: 40 }, { weight: 10 }, { weight: 20 }]
    expect(findTrapezeRow(unsorted, 15)).toEqual({ weight: 20 })
  })

  it('handles single-row table', () => {
    expect(findTrapezeRow([{ weight: 50 }], 10)).toEqual({ weight: 50 })
    expect(findTrapezeRow([{ weight: 50 }], 99)).toEqual({ weight: 50 })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 4. OPM_PAGES — page number map integrity
// ─────────────────────────────────────────────────────────────────────────────
describe('OPM_PAGES integrity', () => {
  const entries = Object.entries(OPM_PAGES)

  it('contains at least 100 detail code entries', () => {
    expect(entries.length).toBeGreaterThanOrEqual(100)
  })

  it('every entry has a positive integer pdf page number', () => {
    entries.forEach(([code, val]) => {
      expect(typeof val.pdf, `${code}.pdf should be a number`).toBe('number')
      expect(val.pdf, `${code}.pdf should be > 0`).toBeGreaterThan(0)
      expect(Number.isInteger(val.pdf), `${code}.pdf should be integer`).toBe(true)
    })
  })

  it('every entry has a non-empty label string', () => {
    entries.forEach(([code, val]) => {
      expect(typeof val.label, `${code}.label type`).toBe('string')
      expect(val.label.length, `${code}.label not empty`).toBeGreaterThan(0)
    })
  })

  it('all page numbers are within PDF range (1–838)', () => {
    entries.forEach(([code, val]) => {
      expect(val.pdf, `${code} page in range`).toBeGreaterThanOrEqual(1)
      expect(val.pdf, `${code} page in range`).toBeLessThanOrEqual(838)
    })
  })

  // Spot-check known correct page numbers from source OPM
  it('B-Table page numbers match source (spot check)', () => {
    expect(OPM_PAGES['B1.0'].pdf).toBe(155)   // Steel Solid 0.25g Opt1
    expect(OPM_PAGES['B1.1'].pdf).toBe(157)   // Steel Solid 0.5g Opt1
    expect(OPM_PAGES['B1.2'].pdf).toBe(159)   // Steel Solid 1.0g Opt1
    expect(OPM_PAGES['B1.6'].pdf).toBe(164)   // Cast Iron Solid 0.25g
    expect(OPM_PAGES['B1.12'].pdf).toBe(170)  // Trapeze Solid 0.25g
    expect(OPM_PAGES['B1.18'].pdf).toBe(179)  // Trapeze X-Pattern 0.25g
    expect(OPM_PAGES['B1.20'].pdf).toBe(181)  // Trapeze X-Pattern 1.0g
  })

  it('Kit detail page numbers match source (spot check)', () => {
    expect(OPM_PAGES['C1.10'].pdf).toBe(215)  // Solid 2" Trans
    expect(OPM_PAGES['C1.30'].pdf).toBe(221)  // Solid 4"/5" Trans
    expect(OPM_PAGES['C1.46'].pdf).toBe(233)  // Solid 8"+ Trans
    expect(OPM_PAGES['C2.10'].pdf).toBe(254)  // Cable 2" Trans
    expect(OPM_PAGES['F1.10'].pdf).toBe(379)  // Trapeze Solid Light Trans
    expect(OPM_PAGES['F2.10'].pdf).toBe(412)  // Trapeze Cable Std Light
    expect(OPM_PAGES['F3.10'].pdf).toBe(424)  // Trapeze X-Pattern Light
    expect(OPM_PAGES['F3.13'].pdf).toBe(427)  // Trapeze X-Pattern Heavy
  })

  it('Design procedure pages match source (spot check)', () => {
    expect(OPM_PAGES['A11.0'].pdf).toBe(50)
    expect(OPM_PAGES['A10.0'].pdf).toBe(37)
    expect(OPM_PAGES['A0.4'].pdf).toBe(10)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 5. PIPE_WEIGHTS — spreadsheet data integrity
// ─────────────────────────────────────────────────────────────────────────────
describe('PIPE_WEIGHTS integrity', () => {
  it('covers all required material types', () => {
    const materials = Object.keys(PIPE_WEIGHTS)
    expect(materials).toContain('steel')
    expect(materials).toContain('castIron')
    expect(materials).toContain('copperTypeK')
    expect(materials).toContain('copperWithInsulation')
    expect(materials).toContain('fireSprinkler_sch10')
    expect(materials).toContain('fireSprinkler_sch40')
  })

  it('all weight values are positive numbers', () => {
    Object.entries(PIPE_WEIGHTS).forEach(([mat, sizes]) => {
      Object.entries(sizes).forEach(([size, weight]) => {
        expect(typeof weight, `${mat} ${size}" weight is number`).toBe('number')
        expect(weight, `${mat} ${size}" weight > 0`).toBeGreaterThan(0)
      })
    })
  })

  // Spot-check values from Pipe Loads spreadsheet
  it('steel pipe weights match spreadsheet values', () => {
    expect(PIPE_WEIGHTS.steel[2]).toBe(6.2)
    expect(PIPE_WEIGHTS.steel[4]).toBe(18.3)
    expect(PIPE_WEIGHTS.steel[6]).toBe(34.8)
    expect(PIPE_WEIGHTS.steel[8]).toBe(55.1)
    expect(PIPE_WEIGHTS.steel[10]).toBe(80.2)
    expect(PIPE_WEIGHTS.steel[12]).toBe(109)
  })

  it('cast iron pipe weights match spreadsheet values', () => {
    expect(PIPE_WEIGHTS.castIron[2]).toBe(5.1)
    expect(PIPE_WEIGHTS.castIron[4]).toBe(13)
    expect(PIPE_WEIGHTS.castIron[6]).toBe(23.4)
    expect(PIPE_WEIGHTS.castIron[8]).toBe(36.1)
  })

  it('copper type K weights match spreadsheet values', () => {
    expect(PIPE_WEIGHTS.copperTypeK[1]).toBe(1.18)
    expect(PIPE_WEIGHTS.copperTypeK[2]).toBe(3.37)
    expect(PIPE_WEIGHTS.copperTypeK[4]).toBe(11.57)
  })

  it('larger steel pipe sizes are heavier than smaller ones (monotonic)', () => {
    const sizes = [2, 2.5, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30]
    for (let i = 1; i < sizes.length; i++) {
      expect(PIPE_WEIGHTS.steel[sizes[i]]).toBeGreaterThan(PIPE_WEIGHTS.steel[sizes[i - 1]])
    }
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 6. INDIV_SOLID_TABLES — structure & data accuracy
// ─────────────────────────────────────────────────────────────────────────────
describe('INDIV_SOLID_TABLES', () => {
  it('contains steel and castIron materials', () => {
    expect(INDIV_SOLID_TABLES).toHaveProperty('steel')
    expect(INDIV_SOLID_TABLES).toHaveProperty('castIron')
  })

  it('steel has all three Fp tiers', () => {
    expect(INDIV_SOLID_TABLES.steel).toHaveProperty('0.25')
    expect(INDIV_SOLID_TABLES.steel).toHaveProperty('0.5')
    expect(INDIV_SOLID_TABLES.steel).toHaveProperty('1')
  })

  it('steel has spacing option 1 and option 3 at each tier', () => {
    ;[0.25, 0.5, 1.0].forEach(fp => {
      expect(INDIV_SOLID_TABLES.steel[fp]).toHaveProperty('1')
      expect(INDIV_SOLID_TABLES.steel[fp]).toHaveProperty('3')
    })
  })

  it('each table has tableRef, spacing, and rows array', () => {
    ;[0.25, 0.5, 1.0].forEach(fp => {
      ;[1, 3].forEach(opt => {
        const t = INDIV_SOLID_TABLES.steel[fp]?.[opt]
        expect(t, `steel/${fp}/opt${opt} table exists`).toBeDefined()
        expect(typeof t.tableRef).toBe('string')
        expect(t.spacing).toHaveProperty('trans')
        expect(t.spacing).toHaveProperty('long')
        expect(t.spacing).toHaveProperty('allDir')
        expect(Array.isArray(t.rows)).toBe(true)
        expect(t.rows.length).toBeGreaterThan(0)
      })
    })
  })

  it('all rows have required solid-bracing fields', () => {
    const requiredFields = ['size', 'plf', 'supportSpacing', 'trans', 'long', 'allDir',
      'hangerTrans', 'hangerLong', 'hangerAllDir', 'braceTrans', 'braceLongAllDir']
    ;[0.25, 0.5, 1.0].forEach(fp => {
      ;[1, 3].forEach(opt => {
        INDIV_SOLID_TABLES.steel[fp]?.[opt]?.rows?.forEach((row, i) => {
          requiredFields.forEach(f => {
            expect(row, `steel/${fp}/opt${opt} row ${i} has ${f}`).toHaveProperty(f)
          })
        })
      })
    })
  })

  it('all detail codes in rows exist in OPM_PAGES', () => {
    const detailFields = ['trans', 'long', 'allDir']
    Object.entries(INDIV_SOLID_TABLES).forEach(([mat, tiers]) => {
      Object.entries(tiers).forEach(([fp, opts]) => {
        Object.entries(opts).forEach(([opt, table]) => {
          table.rows.forEach((row, i) => {
            detailFields.forEach(f => {
              const code = row[f]
              if (code && code !== '—') {
                expect(OPM_PAGES, `${mat}/${fp}/opt${opt} row${i} ${f}="${code}" in OPM_PAGES`)
                  .toHaveProperty(code)
              }
            })
          })
        })
      })
    })
  })

  it('all tableRefs exist in OPM_PAGES', () => {
    Object.entries(INDIV_SOLID_TABLES).forEach(([mat, tiers]) => {
      Object.entries(tiers).forEach(([fp, opts]) => {
        Object.entries(opts).forEach(([opt, table]) => {
          expect(OPM_PAGES, `${mat}/${fp}/opt${opt} tableRef "${table.tableRef}" in OPM_PAGES`)
            .toHaveProperty(table.tableRef)
        })
      })
    })
  })

  // Accuracy spot-checks against source OPM B-tables
  it('steel 4" Fp=0.5g Opt1: correct PLF, spacing, detail codes', () => {
    const row = INDIV_SOLID_TABLES.steel[0.5][1].rows.find(r => r.size === 4)
    expect(row.plf).toBe(18.3)
    expect(row.supportSpacing).toBe(14)
    expect(row.trans).toBe('C1.30')
    expect(row.long).toBe('C1.32')
    expect(row.allDir).toBe('C1.34')
    expect(INDIV_SOLID_TABLES.steel[0.5][1].spacing.trans).toBe(30)
    expect(INDIV_SOLID_TABLES.steel[0.5][1].spacing.long).toBe(60)
  })

  it('steel 6" Fp=1.0g Opt1: correct designations', () => {
    const row = INDIV_SOLID_TABLES.steel[1.0][1].rows.find(r => r.size === 6)
    expect(row.plf).toBe(34.8)
    expect(row.hangerTrans).toBe('75P')
    expect(row.braceTrans).toBe('75M')
    expect(getRodSize(row.hangerTrans)).toBe('3/4"')
  })

  it('castIron 4" Fp=0.5g: correct PLF and detail codes', () => {
    const row = INDIV_SOLID_TABLES.castIron[0.5][1].rows.find(r => r.size === 4)
    expect(row.plf).toBe(13)
    expect(row.trans).toBe('C1.30')
    expect(row.supportSpacing).toBe(8)
  })

  it('PLF values match PIPE_WEIGHTS for steel rows (individually hung)', () => {
    // For steel, PLF in table should match PIPE_WEIGHTS
    INDIV_SOLID_TABLES.steel[0.5][1].rows.forEach(row => {
      const weight = PIPE_WEIGHTS.steel[row.size]
      if (weight !== undefined) {
        expect(row.plf).toBe(weight)
      }
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 7. INDIV_CABLE_TABLES — structure & data accuracy
// ─────────────────────────────────────────────────────────────────────────────
describe('INDIV_CABLE_TABLES', () => {
  it('contains steel material with all three Fp tiers', () => {
    expect(INDIV_CABLE_TABLES.steel).toHaveProperty('0.25')
    expect(INDIV_CABLE_TABLES.steel).toHaveProperty('0.5')
    expect(INDIV_CABLE_TABLES.steel).toHaveProperty('1')
  })

  it('rows have cable-specific fields (hangerConn instead of 3 hanger fields)', () => {
    const row = INDIV_CABLE_TABLES.steel[0.5][1].rows[0]
    expect(row).toHaveProperty('hangerConn')
    expect(row).toHaveProperty('braceTrans')
    expect(row).toHaveProperty('braceLongAllDir')
  })

  it('all detail codes exist in OPM_PAGES', () => {
    const detailFields = ['trans', 'long', 'allDir']
    Object.entries(INDIV_CABLE_TABLES).forEach(([mat, tiers]) => {
      Object.entries(tiers).forEach(([fp, opts]) => {
        Object.entries(opts).forEach(([opt, table]) => {
          table.rows.forEach((row, i) => {
            detailFields.forEach(f => {
              const code = row[f]
              if (code && code !== '—') {
                expect(OPM_PAGES, `cable ${mat}/${fp}/opt${opt} row${i} ${f}="${code}"`)
                  .toHaveProperty(code)
              }
            })
          })
        })
      })
    })
  })

  it('steel 2" Fp=0.5g cable: correct detail codes', () => {
    const row = INDIV_CABLE_TABLES.steel[0.5][1].rows.find(r => r.size === 2)
    expect(row.trans).toBe('C2.10')
    expect(row.long).toBe('C2.11')
    expect(row.allDir).toBe('C2.12')
    expect(row.plf).toBe(6.2)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 8. TRAPEZE_SOLID_TABLES — structure & data accuracy
// ─────────────────────────────────────────────────────────────────────────────
describe('TRAPEZE_SOLID_TABLES', () => {
  it('has all three Fp tiers', () => {
    expect(TRAPEZE_SOLID_TABLES).toHaveProperty('0.25')
    expect(TRAPEZE_SOLID_TABLES).toHaveProperty('0.5')
    expect(TRAPEZE_SOLID_TABLES).toHaveProperty('1')
  })

  it('rows have trapeze-solid fields', () => {
    const row = TRAPEZE_SOLID_TABLES[0.5][1].rows[0]
    expect(row).toHaveProperty('weight')
    expect(row).toHaveProperty('trans')
    expect(row).toHaveProperty('long')
    expect(row).toHaveProperty('allDir')
    expect(row).toHaveProperty('hangerTrans')
    expect(row).toHaveProperty('hangerAllDir')
    expect(row).toHaveProperty('braceType')
  })

  it('all detail codes in trapeze solid rows exist in OPM_PAGES', () => {
    Object.entries(TRAPEZE_SOLID_TABLES).forEach(([fp, opts]) => {
      Object.entries(opts).forEach(([opt, table]) => {
        table.rows.forEach((row, i) => {
          ;['trans', 'long', 'allDir'].forEach(f => {
            const code = row[f]
            if (code && code !== '—') {
              expect(OPM_PAGES, `trapeze-solid/${fp}/opt${opt} row${i} ${f}="${code}"`)
                .toHaveProperty(code)
            }
          })
        })
      })
    })
  })

  it('weights are positive and rows are in ascending weight order', () => {
    ;[0.25, 0.5, 1.0].forEach(fp => {
      const rows = TRAPEZE_SOLID_TABLES[fp]?.[1]?.rows
      if (!rows) return
      rows.forEach(r => expect(r.weight).toBeGreaterThan(0))
      for (let i = 1; i < rows.length; i++) {
        expect(rows[i].weight).toBeGreaterThanOrEqual(rows[i - 1].weight)
      }
    })
  })

  it('Fp=0.5g Opt1: tableRef is B1.13 and spacing is 30/60/60', () => {
    const t = TRAPEZE_SOLID_TABLES[0.5][1]
    expect(t.tableRef).toBe('B1.13')
    expect(t.spacing.trans).toBe(30)
    expect(t.spacing.long).toBe(60)
    expect(t.spacing.allDir).toBe(60)
  })

  it('findTrapezeRow returns correct row for 40 lbs/ft at Fp=0.5g', () => {
    const rows = TRAPEZE_SOLID_TABLES[0.5][1].rows
    const row = findTrapezeRow(rows, 40)
    expect(row.weight).toBeGreaterThanOrEqual(40)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 9. TRAPEZE_CABLE_STD_TABLES — structure
// ─────────────────────────────────────────────────────────────────────────────
describe('TRAPEZE_CABLE_STD_TABLES', () => {
  it('has all three Fp tiers', () => {
    expect(TRAPEZE_CABLE_STD_TABLES).toHaveProperty('0.25')
    expect(TRAPEZE_CABLE_STD_TABLES).toHaveProperty('0.5')
    expect(TRAPEZE_CABLE_STD_TABLES).toHaveProperty('1')
  })

  it('rows have cable-std trapeze fields', () => {
    const row = TRAPEZE_CABLE_STD_TABLES[0.5][1].rows[0]
    expect(row).toHaveProperty('weight')
    expect(row).toHaveProperty('trans')
    expect(row).toHaveProperty('hangerTrans')
    expect(row).toHaveProperty('hangerAllDir')
  })

  it('all detail codes exist in OPM_PAGES', () => {
    Object.entries(TRAPEZE_CABLE_STD_TABLES).forEach(([fp, opts]) => {
      Object.entries(opts).forEach(([opt, table]) => {
        table.rows.forEach((row, i) => {
          ;['trans', 'long', 'allDir'].forEach(f => {
            const code = row[f]
            if (code && code !== '—') {
              expect(OPM_PAGES, `cable-std/${fp}/opt${opt} row${i} ${f}="${code}"`)
                .toHaveProperty(code)
            }
          })
        })
      })
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 10. TRAPEZE_CABLE_X_TABLES — structure & data accuracy
// ─────────────────────────────────────────────────────────────────────────────
describe('TRAPEZE_CABLE_X_TABLES', () => {
  it('has all three Fp tiers', () => {
    expect(TRAPEZE_CABLE_X_TABLES).toHaveProperty('0.25')
    expect(TRAPEZE_CABLE_X_TABLES).toHaveProperty('0.5')
    expect(TRAPEZE_CABLE_X_TABLES).toHaveProperty('1')
  })

  it('rows have X-pattern trapeze fields', () => {
    const row = TRAPEZE_CABLE_X_TABLES[0.25][1].rows[0]
    expect(row).toHaveProperty('weight')
    expect(row).toHaveProperty('kitDetail')
    expect(row).toHaveProperty('hangerAttach')
    expect(row).toHaveProperty('braceAttach')
  })

  it('all kitDetail codes exist in OPM_PAGES', () => {
    Object.entries(TRAPEZE_CABLE_X_TABLES).forEach(([fp, opts]) => {
      Object.entries(opts).forEach(([opt, table]) => {
        table.rows.forEach((row, i) => {
          const code = row.kitDetail
          if (code && code !== '—') {
            expect(OPM_PAGES, `X-pattern/${fp}/opt${opt} row${i} kitDetail="${code}"`)
              .toHaveProperty(code)
          }
        })
      })
    })
  })

  it('Fp=0.25g: row at 30 lbs/ft uses F3.11 detail', () => {
    const rows = TRAPEZE_CABLE_X_TABLES[0.25][1].rows
    const row = findTrapezeRow(rows, 30)
    expect(row.kitDetail).toBe('F3.11')
  })

  it('Fp=0.25g: row at 40 lbs/ft uses F3.11 detail (F3.13 starts at 60 lbs/ft)', () => {
    const rows = TRAPEZE_CABLE_X_TABLES[0.25][1].rows
    const row = findTrapezeRow(rows, 40)
    expect(row.kitDetail).toBe('F3.11')  // 0.25g table: F3.13 starts at 60 lbs/ft
  })

  it('Fp=0.25g: row at 60 lbs/ft uses F3.13 detail', () => {
    const rows = TRAPEZE_CABLE_X_TABLES[0.25][1].rows
    const row = findTrapezeRow(rows, 60)
    expect(row.kitDetail).toBe('F3.13')
  })

  it('Fp=0.5g: row at 40 lbs/ft uses F3.13 detail', () => {
    // 0.5g table is more conservative — F3.13 starts at 40 lbs/ft
    const rows = TRAPEZE_CABLE_X_TABLES[0.5][1].rows
    const row = findTrapezeRow(rows, 40)
    expect(row.kitDetail).toBe('F3.13')
  })

  it('Fp=1.0g Opt1: tableRef is B1.20, trans spacing is 20 ft', () => {
    const t = TRAPEZE_CABLE_X_TABLES[1.0][1]
    expect(t.tableRef).toBe('B1.20')
    expect(t.spacing.trans).toBe(20)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 11. End-to-end lookup simulation
// ─────────────────────────────────────────────────────────────────────────────
describe('End-to-end lookup simulation', () => {
  it('steel 4" individually hung solid at Fp=0.75g returns 1.0g tier data', () => {
    const fp = 0.75
    const tier = selectFpTier(fp)
    expect(tier).toBe(1.0)
    const table = INDIV_SOLID_TABLES.steel[tier][1]
    expect(table.tableRef).toBe('B1.2')
    const row = table.rows.find(r => r.size === 4)
    expect(row).toBeDefined()
    expect(row.plf).toBe(18.3)
    expect(getRodSize(row.hangerTrans)).toBe('5/8"') // 63-prefix
    expect(getRodSize(row.braceTrans)).toBe('5/8"')
    expect(OPM_PAGES[row.trans]).toBeDefined()
  })

  it('trapeze at 25 lbs/ft and Fp=0.5g selects row at or above 25 lbs/ft', () => {
    const tier = selectFpTier(0.5)
    const rows = TRAPEZE_SOLID_TABLES[tier][1].rows
    const row = findTrapezeRow(rows, 25)
    expect(row.weight).toBeGreaterThanOrEqual(25)
    expect(OPM_PAGES[row.trans]).toBeDefined()
  })

  it('X-pattern trapeze at 15 lbs/ft Fp=1.0g has valid page link', () => {
    const tier = selectFpTier(1.0)
    const rows = TRAPEZE_CABLE_X_TABLES[tier][1].rows
    const row = findTrapezeRow(rows, 15)
    expect(row).toBeDefined()
    expect(OPM_PAGES[row.kitDetail]).toBeDefined()
    expect(OPM_PAGES[row.kitDetail].pdf).toBeGreaterThan(0)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 12. Branding / code-reference string checks (source file smoke tests)
// ─────────────────────────────────────────────────────────────────────────────
describe('Branding & code reference strings', () => {
  const root = resolve(process.cwd(), 'src')

  function readSrc(relPath) {
    return readFileSync(resolve(root, relPath), 'utf-8')
  }

  it('Header.jsx shows CBC 2025 and ASCE 7-22', () => {
    const src = readSrc('components/Header.jsx')
    expect(src).toContain('CBC 2025')
    expect(src).toContain('ASCE 7-22')
  })

  it('Header.jsx has no stale CBC 2016 or ASCE 7-10 references', () => {
    const src = readSrc('components/Header.jsx')
    expect(src).not.toContain('CBC 2016')
    expect(src).not.toContain('ASCE 7-10')
  })

  it('App.jsx footer shows CBC 2025 and ASCE 7-22', () => {
    const src = readSrc('App.jsx')
    expect(src).toContain('CBC 2025')
    expect(src).toContain('ASCE 7-22')
  })

  it('ResultsTable.jsx has no user-visible "Mason West" text', () => {
    const src = readSrc('components/ResultsTable.jsx')
    // Variable name OPM_PATH is internal — check display strings only
    expect(src).not.toMatch(/Mason West/i)
  })

  it('ResultsTable.jsx has no user-visible "OPM-0043-13" in JSX text or title attributes', () => {
    const src = readSrc('components/ResultsTable.jsx')
    // The only allowed occurrence is the local file path variable declaration (OPM_PATH = '...OPM-0043-13.pdf')
    // Strip that constant declaration line, then check no display text remains
    const withoutPathVar = src.replace(/const OPM_PATH\s*=\s*'[^']*'/g, '')
    expect(withoutPathVar).not.toContain('OPM-0043-13')
  })

  it('Questionnaire.jsx has no "OPM" label text', () => {
    const src = readSrc('components/Questionnaire.jsx')
    // "OPM limit" and "OPM Brace Spacing" labels should be gone
    expect(src).not.toContain('OPM limit')
    expect(src).not.toContain('OPM Brace Spacing')
    expect(src).not.toContain('Max OPM')
  })

  it('exportPdf.js footer shows CBC 2025 and ASCE 7-22', () => {
    const src = readSrc('utils/exportPdf.js')
    expect(src).toContain('CBC 2025')
    expect(src).toContain('ASCE 7-22')
  })

  it('exportPdf.js has no Mason West or OSHPD in display strings', () => {
    const src = readSrc('utils/exportPdf.js')
    expect(src).not.toContain('Mason West')
    expect(src).not.toContain('OSHPD')
  })

  it('General Notes references ASCE 7-22 Table 13.6-1 (not 7-10 13.5-1)', () => {
    const results = readSrc('components/ResultsTable.jsx')
    const pdf = readSrc('utils/exportPdf.js')
    expect(results).toContain('ASCE 7-22')
    expect(results).toContain('13.6-1')
    expect(pdf).toContain('ASCE 7-22')
    expect(pdf).toContain('13.6-1')
    expect(results).not.toContain('7-10')
    expect(pdf).not.toContain('7-10')
  })
})
