// =============================================================================
// AGC Seismic Pro — Seismic Brace Data
// CBC 2025 · ASCE 7-22
// =============================================================================

// PDF page numbers for key sections (1-based OPM page numbers)
export const OPM_PAGES = {
  // Seismic Brace Tables — Individually Suspended Steel Pipe
  "B1.0":   { pdf: 155, label: "Steel Pipe Solid Bracing Fp=0.25g Opt1 (40'/80'/80')" },
  "B1.0.1": { pdf: 156, label: "Steel Pipe Solid Bracing Fp=0.25g Opt3 (20'/20'/20')" },
  "B1.1":   { pdf: 157, label: "Steel Pipe Solid Bracing Fp=0.5g Opt1 (30'/60'/60')" },
  "B1.1.1": { pdf: 158, label: "Steel Pipe Solid Bracing Fp=0.5g Opt3 (10'/20'/20')" },
  "B1.2":   { pdf: 159, label: "Steel Pipe Solid Bracing Fp=1.0g Opt1 (40'/40'/40')" },
  "B1.2.1": { pdf: 160, label: "Steel Pipe Solid Bracing Fp=1.0g Opt3 (20'/20'/20')" },
  // Cable Bracing — Steel
  "B1.3":   { pdf: 161, label: "Steel Pipe Cable Bracing Fp=0.25g Opt1 (40'/80'/80')" },
  "B1.4":   { pdf: 162, label: "Steel Pipe Cable Bracing Fp=0.5g Opt1 (30'/60'/60')" },
  "B1.5":   { pdf: 163, label: "Steel Pipe Cable Bracing Fp=1.0g Opt1 (40'/40'/40')" },
  // Cast Iron — Solid
  "B1.6":   { pdf: 164, label: "Cast Iron Solid Bracing Fp=0.25g Opt1 (40'/80'/80')" },
  "B1.7":   { pdf: 165, label: "Cast Iron Solid Bracing Fp=0.5g Opt1 (30'/60'/60')" },
  "B1.8":   { pdf: 166, label: "Cast Iron Solid Bracing Fp=1.0g Opt1 (40'/40'/40')" },
  // Cast Iron — Cable
  "B1.9":   { pdf: 167, label: "Cast Iron Cable Bracing Fp=0.25g Opt1 (40'/80'/80')" },
  "B1.10":  { pdf: 168, label: "Cast Iron Cable Bracing Fp=0.5g Opt1 (30'/60'/60')" },
  "B1.11":  { pdf: 169, label: "Cast Iron Cable Bracing Fp=1.0g Opt1 (40'/40'/40')" },
  // Trapeze — Solid Bracing
  "B1.12":  { pdf: 170, label: "Trapeze Solid Bracing Fp=0.25g Opt1 (40'/80'/80')" },
  "B1.12.1":{ pdf: 171, label: "Trapeze Solid Bracing Fp=0.25g Opt3 (20'/40'/40')" },
  "B1.13":  { pdf: 172, label: "Trapeze Solid Bracing Fp=0.5g Opt1 (30'/60'/60')" },
  "B1.13.1":{ pdf: 173, label: "Trapeze Solid Bracing Fp=0.5g Opt3 (10'/20'/20')" },
  "B1.14":  { pdf: 174, label: "Trapeze Solid Bracing Fp=1.0g Opt1 (20'/40'/40')" },
  "B1.14.1":{ pdf: 175, label: "Trapeze Solid Bracing Fp=1.0g Opt3 (10'/20'/20')" },
  // Trapeze — Cable Standard
  "B1.15":  { pdf: 176, label: "Trapeze Cable Std Bracing Fp=0.25g Opt1 (40'/80'/80')" },
  "B1.16":  { pdf: 177, label: "Trapeze Cable Std Bracing Fp=0.5g Opt1 (30'/60'/60')" },
  "B1.17":  { pdf: 178, label: "Trapeze Cable Std Bracing Fp=1.0g Opt1 (20'/40'/40')" },
  // Trapeze — Cable X-Pattern
  "B1.18":  { pdf: 179, label: "Trapeze Cable X-Pattern Fp=0.25g Opt1 (40')" },
  "B1.19":  { pdf: 180, label: "Trapeze Cable X-Pattern Fp=0.5g Opt1 (30')" },
  "B1.20":  { pdf: 181, label: "Trapeze Cable X-Pattern Fp=1.0g Opt1 (20')" },
  // Design Procedure
  "A11.0":  { pdf: 50,  label: "Piping Design Procedure" },
  "A10.0":  { pdf: 37,  label: "Design General Notes / Force Equations" },
  "A0.4":   { pdf: 10,  label: "Expansion Anchor Test Values" },

  // ---- Individually Hung Solid — Kit Details (C1.xx) ----
  "C1.10":  { pdf: 215, label: "Individually Hung Solid — 2\" Pipe Trans Brace" },
  "C1.11":  { pdf: 216, label: "Individually Hung Solid — 2\" Pipe Long Brace" },
  "C1.12":  { pdf: 217, label: "Individually Hung Solid — 2\" Pipe All-Dir Brace" },
  "C1.20":  { pdf: 218, label: "Individually Hung Solid — 2.5\"/3\" Pipe Trans Brace" },
  "C1.21":  { pdf: 219, label: "Individually Hung Solid — 2.5\"/3\" Pipe Long Brace" },
  "C1.22":  { pdf: 220, label: "Individually Hung Solid — 2.5\"/3\" Pipe All-Dir Brace" },
  "C1.30":  { pdf: 221, label: "Individually Hung Solid — 4\"/5\" Pipe Trans Brace" },
  "C1.31":  { pdf: 222, label: "Individually Hung Solid — 4\" Pipe Trans Alt" },
  "C1.32":  { pdf: 223, label: "Individually Hung Solid — 4\"/5\" Pipe Long Brace" },
  "C1.33":  { pdf: 224, label: "Individually Hung Solid — 4\" Pipe Long Alt" },
  "C1.34":  { pdf: 225, label: "Individually Hung Solid — 4\"/5\" Pipe All-Dir Brace" },
  "C1.35":  { pdf: 226, label: "Individually Hung Solid — 4\" Pipe All-Dir Alt" },
  "C1.40":  { pdf: 227, label: "Individually Hung Solid — 6\"/8\" Pipe Trans Brace" },
  "C1.41":  { pdf: 228, label: "Individually Hung Solid — 6\" Pipe Trans Alt" },
  "C1.42":  { pdf: 229, label: "Individually Hung Solid — 6\"/8\" Pipe Long Alt" },
  "C1.43":  { pdf: 230, label: "Individually Hung Solid — 6\" Pipe Long Brace" },
  "C1.44":  { pdf: 231, label: "Individually Hung Solid — 6\"/8\" Pipe All-Dir Alt" },
  "C1.45":  { pdf: 232, label: "Individually Hung Solid — 6\" Pipe All-Dir Brace" },
  "C1.46":  { pdf: 233, label: "Individually Hung Solid — 8\"+  Pipe Trans Brace" },
  "C1.47":  { pdf: 234, label: "Individually Hung Solid — 8\"+ Pipe Long Brace" },
  "C1.48":  { pdf: 235, label: "Individually Hung Solid — 8\"+ Pipe All-Dir Brace" },
  "C1.48.1":{ pdf: 236, label: "Individually Hung Solid — 8\"+ Pipe All-Dir Alt" },
  "C1.50":  { pdf: 239, label: "Individually Hung Solid — 10\"/12\" Pipe Trans Brace" },
  "C1.51":  { pdf: 240, label: "Individually Hung Solid — 10\"/12\" Pipe Long Brace" },
  "C1.52":  { pdf: 241, label: "Individually Hung Solid — 10\"/12\" Pipe All-Dir Brace" },
  "C1.63":  { pdf: 245, label: "Individually Hung Solid — 16\" Pipe Trans Alt" },
  "C1.64":  { pdf: 246, label: "Individually Hung Solid — Large Pipe Long" },
  "C1.70":  { pdf: 249, label: "Individually Hung Solid — Large Pipe Trans" },
  "C1.72":  { pdf: 251, label: "Individually Hung Solid — Large Pipe All-Dir" },
  "C1.75":  { pdf: 253, label: "Individually Hung Solid — Large Pipe All-Dir Alt" },

  // ---- Individually Hung Cable — Kit Details (C2.xx) ----
  "C2.10":  { pdf: 254, label: "Individually Hung Cable — 2\" Pipe Trans Brace" },
  "C2.11":  { pdf: 255, label: "Individually Hung Cable — 2\" Pipe Long Brace" },
  "C2.12":  { pdf: 256, label: "Individually Hung Cable — 2\" Pipe All-Dir Brace" },
  "C2.20":  { pdf: 257, label: "Individually Hung Cable — 2.5\"/3\" Pipe Trans Brace" },
  "C2.21":  { pdf: 258, label: "Individually Hung Cable — 2.5\"/3\" Pipe Long Brace" },
  "C2.22":  { pdf: 259, label: "Individually Hung Cable — 2.5\"/3\" Pipe All-Dir Brace" },
  "C2.30":  { pdf: 260, label: "Individually Hung Cable — 4\"/5\" Pipe Trans Brace" },
  "C2.31":  { pdf: 261, label: "Individually Hung Cable — 4\"/5\" Pipe Long Brace" },
  "C2.32":  { pdf: 262, label: "Individually Hung Cable — 4\"/5\" Pipe All-Dir Brace" },
  "C2.40":  { pdf: 263, label: "Individually Hung Cable — 6\"+ Pipe Trans Brace" },
  "C2.41":  { pdf: 264, label: "Individually Hung Cable — 6\"+ Pipe Long Brace" },
  "C2.42":  { pdf: 265, label: "Individually Hung Cable — 6\"+ Pipe All-Dir Brace" },
  "C3.10":  { pdf: 269, label: "Individually Hung — Wall Attachment Details" },

  // ---- Trapeze Solid — Kit Details (F1.xx) ----
  "F1.10":  { pdf: 379, label: "Trapeze Solid — Light Load Trans Brace" },
  "F1.11":  { pdf: 380, label: "Trapeze Solid — Light Load Long Brace" },
  "F1.12":  { pdf: 381, label: "Trapeze Solid — Light Load All-Dir Brace" },
  "F1.20":  { pdf: 382, label: "Trapeze Solid — Medium Load Trans Brace" },
  "F1.21":  { pdf: 383, label: "Trapeze Solid — Medium Load Long Brace" },
  "F1.22":  { pdf: 384, label: "Trapeze Solid — Medium Load All-Dir Brace" },
  "F1.30":  { pdf: 385, label: "Trapeze Solid — Heavier Load Trans Brace" },
  "F1.31":  { pdf: 386, label: "Trapeze Solid — Heavier Load Long Brace" },
  "F1.32":  { pdf: 387, label: "Trapeze Solid — Heavier Load All-Dir Brace" },
  "F1.33":  { pdf: 388, label: "Trapeze Solid — Heavy Load Trans Brace" },
  "F1.34":  { pdf: 389, label: "Trapeze Solid — Heavy Load Long Brace" },
  "F1.35":  { pdf: 390, label: "Trapeze Solid — Heavy Load All-Dir Brace" },
  "F1.43":  { pdf: 394, label: "Trapeze Solid — Alt Trans Brace" },
  "F1.44":  { pdf: 395, label: "Trapeze Solid — Alt Long Brace" },
  "F1.45":  { pdf: 396, label: "Trapeze Solid — Alt All-Dir Brace" },
  "F1.50":  { pdf: 397, label: "Trapeze Solid — Large Load Trans Brace" },
  "F1.51":  { pdf: 398, label: "Trapeze Solid — Large Load Long Brace" },
  "F1.52":  { pdf: 399, label: "Trapeze Solid — Large Load All-Dir Brace" },
  "F1.55":  { pdf: 402, label: "Trapeze Solid — Large Load All-Dir Alt" },
  "F1.60":  { pdf: 403, label: "Trapeze Solid — Extra Large Load Trans" },
  "F1.61":  { pdf: 404, label: "Trapeze Solid — Extra Large Load Long" },
  "F1.62":  { pdf: 405, label: "Trapeze Solid — Extra Large Load All-Dir" },
  "F1.70":  { pdf: 406, label: "Trapeze Solid — Max Load Trans" },
  "F1.71":  { pdf: 407, label: "Trapeze Solid — Max Load Long" },
  "F1.72":  { pdf: 408, label: "Trapeze Solid — Max Load All-Dir" },
  "F1.73":  { pdf: 409, label: "Trapeze Solid — Max Load Trans Alt" },
  "F1.74":  { pdf: 410, label: "Trapeze Solid — Max Load Long Alt" },

  // ---- Trapeze Cable Standard (F2.xx) ----
  "F2.10":  { pdf: 412, label: "Trapeze Cable Std — Light Load" },
  "F2.11":  { pdf: 413, label: "Trapeze Cable Std — Light Load Long" },
  "F2.12":  { pdf: 414, label: "Trapeze Cable Std — Light Load All-Dir" },
  "F2.20":  { pdf: 415, label: "Trapeze Cable Std — Medium Load" },
  "F2.21":  { pdf: 416, label: "Trapeze Cable Std — Medium Load Long" },
  "F2.22":  { pdf: 417, label: "Trapeze Cable Std — Medium Load All-Dir" },
  "F2.40":  { pdf: 421, label: "Trapeze Cable Std — Heavy Load" },
  "F2.41":  { pdf: 422, label: "Trapeze Cable Std — Heavy Load Long" },
  "F2.42":  { pdf: 423, label: "Trapeze Cable Std — Heavy Load All-Dir" },

  // ---- Trapeze Cable X-Pattern (F3.xx) ----
  "F3.10":  { pdf: 424, label: "Trapeze Cable X-Pattern — Light Load" },
  "F3.11":  { pdf: 425, label: "Trapeze Cable X-Pattern — Medium Load" },
  "F3.12":  { pdf: 426, label: "Trapeze Cable X-Pattern — Heavier Load" },
  "F3.13":  { pdf: 427, label: "Trapeze Cable X-Pattern — Heavy Load" },
  "F4.10":  { pdf: 428, label: "Trapeze — Wall Attachment Details" },

  // ---- Hanger Structure Attachments (M-section, p.434+) ----
  "M0.00":  { pdf: 434, label: "Hanger — Designation & Attachment Notes" },
  "M1.10":  { pdf: 435, label: "Hanger Attachment — To Concrete Slab / Beam" },

  // ---- Brace Bracket Structure Attachments (N-section, p.602+) ----
  // N-series codes (e.g. "63D") = anchor size prefix + load capacity letter
  // (see N0.00 table: 63=5/8", D=250 lbs max horizontal)
  "N0.00":  { pdf: 602, label: "Brace Bracket — Designation & Attachment Notes" },

  // Cast-in-Place Concrete (N1.xx) — p.603–638
  "N1.10":  { pdf: 603, label: "Brace Bracket — Cast-In Insert Anchor (CIP Concrete)" },
  "N1.14":  { pdf: 606, label: "Brace Bracket — To Cast-in-Place Concrete Slab / Beam / Wall (Standard)" },
  "N1.15":  { pdf: 607, label: "Brace Bracket — Hilti KB-TZ Expansion Anchor (CIP Concrete, 1 Anchor)" },
  "N1.16":  { pdf: 611, label: "Brace Bracket — Dewalt Power-Stud+ SD1 Expansion Anchor (CIP Concrete, 1 Anchor)" },
  "N1.17":  { pdf: 619, label: "Brace Bracket — Dewalt Power-Stud+ SD2 Expansion Anchor (CIP Concrete, 1 Anchor)" },
  "N1.18":  { pdf: 623, label: "Brace Bracket — Concrete Screw Anchor (CIP Concrete, 1 Screw)" },
  "N1.19":  { pdf: 637, label: "Brace Bracket — Caddy CRLW Threaded Rod Anchor (CIP Concrete)" },

  // Concrete-Filled Metal Deck (N2.xx) — p.639–714
  "N2.10":  { pdf: 639, label: "Brace Bracket — MW-PAL-A-MD Power-Actuated Anchor (Conc-Filled Deck)" },
  "N2.11":  { pdf: 640, label: "Brace Bracket — To Concrete-Filled Metal Deck (Standard)" },
  "N2.12":  { pdf: 645, label: "Brace Bracket — Hilti KB-TZ Expansion Anchor (Conc-Filled Deck, 1 Anchor)" },
  "N2.13":  { pdf: 653, label: "Brace Bracket — Dewalt Power-Stud+ SD1 Anchor (Conc-Filled Deck, 1 Anchor)" },
  "N2.14":  { pdf: 680, label: "Brace Bracket — Dewalt Power-Stud+ SD2 Anchor (Conc-Filled Deck, 1 Anchor)" },
  "N2.15":  { pdf: 688, label: "Brace Bracket — Concrete Screw Anchor (Conc-Filled Deck, 1 Screw)" },
  "N2.16":  { pdf: 700, label: "Brace Bracket — Hilti KCM-MD Drive Anchor (Conc-Filled Deck)" },
  "N2.17":  { pdf: 702, label: "Brace Bracket — Bang-It+ Powder-Actuated Anchor (Conc-Filled Deck)" },

  // Structural Steel (N3.xx) — p.715–724
  "N3.11":  { pdf: 715, label: "Brace Bracket — Self-Drilling Fasteners to Steel Beam / Open-Web Truss" },
  "N3.13":  { pdf: 717, label: "Brace Bracket — Welded to Structural Steel Beam" },
  "N3.14":  { pdf: 718, label: "Brace Bracket — Beam Clamp to Steel Beam (Type 1)" },
  "N3.15":  { pdf: 719, label: "Brace Bracket — Beam Clamp to Steel Beam (Type 2)" },
  "N3.30":  { pdf: 721, label: "Brace Bracket — To Steel Beam (Concrete-Filled Deck)" },

  // CMU / Masonry Wall (N5.xx)
  "N5.10":  { pdf: 726, label: "Brace Bracket — To CMU Wall" },

  // Metal Stud Wall (N6.xx)
  "N6.10":  { pdf: 728, label: "Brace Bracket — To Full-Height Metal Stud Wall" },

  // Unfilled Metal Deck (N7.xx)
  "N7.10":  { pdf: 730, label: "Brace Bracket — To Non-Concrete-Filled Metal Deck" },
};

// =============================================================================
// CODE-MANDATED MAXIMUM HANGER SPACING
// Sources: CPC 2022 §313, NFPA 13-2022 §9.1, CMC 2022 / SMACNA,
//          CEC 2023 (NEC 2023) Articles 344 / 342 / 358 / 392
// Returns { spacing (ft), code (string), note (string) }
// =============================================================================
export function getCodeHangerSpacing(material, pipeSize) {
  const size = Number(pipeSize)
  switch (material) {
    // ── Plumbing (CPC 2022 Table 3-7) ─────────────────────────────────────
    case 'steel':
      return size <= 12
        ? { spacing: 10, code: 'CPC 2022 §313', note: 'Steel pipe ≤12″' }
        : { spacing: 12, code: 'CPC 2022 §313', note: 'Steel pipe ≥14″' }
    case 'castIron':
      return { spacing: 5, code: 'CPC 2022 §313', note: 'Cast iron — max 5 ft or at each joint' }
    case 'copperTypeK':
    case 'copperWithInsulation':
      return size <= 1.25
        ? { spacing: 6,  code: 'CPC 2022 §313', note: 'Copper ≤1¼″ — 6 ft max' }
        : { spacing: 10, code: 'CPC 2022 §313', note: 'Copper ≥1½″ — 10 ft max' }
    // ── Fire Protection (NFPA 13-2022 §9.1) ───────────────────────────────
    case 'fireSprinkler_sch10':
    case 'fireSprinkler_sch40':
      return { spacing: 12, code: 'NFPA 13-2022 §9.1', note: 'Fire sprinkler steel pipe — 12 ft max' }
    // ── Mechanical Ductwork (CMC 2022 / SMACNA HVAC Duct Const. Std.) ─────
    case 'roundDuct':
      return size <= 6
        ? { spacing: 8,  code: 'CMC 2022 / SMACNA', note: 'Round duct ≤6″ dia. — 8 ft max' }
        : { spacing: 10, code: 'CMC 2022 / SMACNA', note: 'Round duct >6″ dia. — 10 ft max' }
    case 'rectDuct':
      return { spacing: 8, code: 'CMC 2022 / SMACNA', note: 'Rectangular duct — 8 ft max' }
    // ── Electrical (CEC 2023 / NEC 2023) ──────────────────────────────────
    case 'rmc':
      return { spacing: 10, code: 'CEC 2023 §344.30', note: 'Rigid Metal Conduit — 10 ft max' }
    case 'imc':
      return { spacing: 10, code: 'CEC 2023 §342.30', note: 'Intermediate Metal Conduit — 10 ft max' }
    case 'emt':
      return { spacing: 10, code: 'CEC 2023 §358.30', note: 'Electrical Metallic Tubing — 10 ft max' }
    case 'cableTray':
      return { spacing: 12, code: 'CEC 2023 §392.30', note: 'Cable tray — 12 ft max' }
    // ── Default ───────────────────────────────────────────────────────────
    default:
      return { spacing: 10, code: 'General', note: '10 ft max (default)' }
  }
}

// =============================================================================
// PIPE WEIGHTS (lbs/ft) from Pipe Loads spreadsheets
// =============================================================================
export const PIPE_WEIGHTS = {
  steel: {
    2: 6.2, 2.5: 9.1, 3: 12.1, 4: 18.3, 5: 26.6, 6: 34.8,
    8: 55.1, 10: 80.2, 12: 109, 14: 122, 16: 150, 18: 185,
    20: 218, 24: 290, 30: 374,
  },
  castIron: {
    2: 5.1, 3: 8.4, 4: 13, 5: 18, 6: 23.4, 8: 36.1, 10: 50.5, 12: 84.2,
  },
  copperTypeK: {
    0.5: 0.8, 0.75: 0.83, 1: 1.18, 1.25: 2.11, 1.5: 2.11,
    2: 3.37, 2.5: 4.92, 3: 6.96, 4: 11.57, 6: 25.07, 8: 45.4,
  },
  copperWithInsulation: {
    0.5: 0.95, 0.75: 1.01, 1: 1.4, 1.25: 2.36, 1.5: 2.36,
    2: 3.68, 2.5: 5.25, 3: 3.0, 4: 12.65, 6: 26.52, 8: 47.18,
  },
  fireSprinkler_sch10: {
    1: 1.7, 1.25: 2.3, 1.5: 2.7, 2: 3.7, 2.5: 5.8, 3: 7.6,
    4: 10.8, 6: 19.0, 8: 28.6,
  },
  fireSprinkler_sch40: {
    1: 2.3, 1.25: 2.7, 1.5: 3.0, 2: 5.8, 2.5: 7.7, 3: 10.3,
    4: 15.0, 6: 28.6, 8: 43.4, 10: 60.0, 12: 84.0,
  },
};

// =============================================================================
// B-TABLE DATA: Individually Suspended Pipe — Solid Bracing
// Keys: pipeMaterial (steel|castIron), fp (0.25|0.5|1.0), option (1|2|3)
// Each row: { size, plf, supportSpacing, trans, long, allDir,
//             hangerTrans, hangerLong, hangerAllDir, braceTrans, braceLongAllDir }
// =============================================================================

export const INDIV_SOLID_TABLES = {
  steel: {
    0.25: {
      1: {
        tableRef: "B1.0",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 2,    plf: 6.2,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2.5,  plf: 9.1,  supportSpacing: 11, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50E", hangerAllDir: "50F", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 3,    plf: 12.1, supportSpacing: 12, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50G", hangerAllDir: "50G", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 4,    plf: 18.3, supportSpacing: 14, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63G", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 5,    plf: 26.6, supportSpacing: 16, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63K", hangerLong: "63L", hangerAllDir: "63M", braceTrans: "63E", braceLongAllDir: "63G" },
          { size: 6,    plf: 34.8, supportSpacing: 17, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "75L", hangerLong: "75M", hangerAllDir: "75N", braceTrans: "63F", braceLongAllDir: "75J" },
          { size: 8,    plf: 55.1, supportSpacing: 19, trans: "C1.40", long: "C1.47", allDir: "C1.48", hangerTrans: "75P", hangerLong: "75Q", hangerAllDir: "75Q", braceTrans: "63G", braceLongAllDir: "75L" },
          { size: 10,   plf: 80.2, supportSpacing: 20, trans: "C1.41", long: "C1.47", allDir: "C1.48", hangerTrans: "75Q", hangerLong: "75R", hangerAllDir: "75R", braceTrans: "75J", braceLongAllDir: "75N" },
        ],
      },
      3: {
        tableRef: "B1.0.1",
        spacing: { trans: 20, long: 20, allDir: 20 },
        rows: [
          { size: 2,    plf: 6.2,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5,  plf: 9.1,  supportSpacing: 11, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50D", hangerAllDir: "50D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 3,    plf: 12.1, supportSpacing: 12, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50E", hangerAllDir: "50E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 4,    plf: 18.3, supportSpacing: 14, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63F", hangerLong: "63F", hangerAllDir: "63G", braceTrans: "63B", braceLongAllDir: "63B" },
          { size: 5,    plf: 26.6, supportSpacing: 16, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63J", hangerLong: "63J", hangerAllDir: "63J", braceTrans: "63C", braceLongAllDir: "63C" },
          { size: 6,    plf: 34.8, supportSpacing: 17, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75K", hangerLong: "75K", hangerAllDir: "75L", braceTrans: "63D", braceLongAllDir: "63D" },
          { size: 8,    plf: 55.1, supportSpacing: 19, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75N", hangerLong: "75N", hangerAllDir: "75N", braceTrans: "63E", braceLongAllDir: "63E" },
          { size: 10,   plf: 80.2, supportSpacing: 20, trans: "C1.50", long: "C1.51", allDir: "C1.52", hangerTrans: "88Q", hangerLong: "88Q", hangerAllDir: "88Q", braceTrans: "63F", braceLongAllDir: "63F" },
          { size: 12,   plf: 109,  supportSpacing: 20, trans: "C1.50", long: "C1.51", allDir: "C1.52", hangerTrans: "88R", hangerLong: "88R", hangerAllDir: "88R", braceTrans: "63G", braceLongAllDir: "63G" },
          { size: 14,   plf: 122,  supportSpacing: 20, trans: "C1.46", long: "C1.47", allDir: "C1.48", hangerTrans: "75R", hangerLong: "75R", hangerAllDir: "75R", braceTrans: "75H", braceLongAllDir: "75H" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.1",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 2,   plf: 6.2,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 2.5, plf: 9.1,  supportSpacing: 11, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50F", hangerAllDir: "50G", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 3,   plf: 12.1, supportSpacing: 12, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50F", hangerLong: "50H", hangerAllDir: "50J", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 4,   plf: 18.3, supportSpacing: 14, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63H", hangerLong: "63K", hangerAllDir: "63L", braceTrans: "63E", braceLongAllDir: "63G" },
          { size: 5,   plf: 26.6, supportSpacing: 16, trans: "C1.30", long: "C1.33", allDir: "C1.45", hangerTrans: "63K", hangerLong: "63M", hangerAllDir: "75N", braceTrans: "63F", braceLongAllDir: "63J" },
          { size: 6,   plf: 34.8, supportSpacing: 17, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "75M", hangerLong: "75N", hangerAllDir: "75P", braceTrans: "63G", braceLongAllDir: "75L" },
          { size: 8,   plf: 55.1, supportSpacing: 10, trans: "C1.41", long: "C1.47", allDir: "C1.48", hangerTrans: "75P", hangerLong: "75Q", hangerAllDir: "75R", braceTrans: "75K", braceLongAllDir: "75N" },
          { size: 10,  plf: 80.2, supportSpacing: 20, trans: "C1.46", long: "C1.47", allDir: "C1.48.1", hangerTrans: "75Q", hangerLong: "75R", hangerAllDir: "75S", braceTrans: "75L", braceLongAllDir: "75P" },
        ],
      },
      3: {
        tableRef: "B1.1.1",
        spacing: { trans: 10, long: 20, allDir: 20 },
        rows: [
          { size: 2,   plf: 6.2,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5, plf: 9.1,  supportSpacing: 11, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50D", hangerAllDir: "50E", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 3,   plf: 12.1, supportSpacing: 12, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50E", hangerAllDir: "50F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 4,   plf: 18.3, supportSpacing: 14, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63F", hangerLong: "63G", hangerAllDir: "63H", braceTrans: "63B", braceLongAllDir: "63D" },
          { size: 5,   plf: 26.6, supportSpacing: 16, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63J", hangerLong: "63K", hangerAllDir: "63K", braceTrans: "63C", braceLongAllDir: "63E" },
          { size: 6,   plf: 34.8, supportSpacing: 17, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75K", hangerLong: "75L", hangerAllDir: "75M", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 8,   plf: 55.1, supportSpacing: 19, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75N", hangerLong: "75P", hangerAllDir: "75P", braceTrans: "63E", braceLongAllDir: "63G" },
          { size: 10,  plf: 80.2, supportSpacing: 20, trans: "C1.50", long: "C1.43", allDir: "C1.45", hangerTrans: "88Q", hangerLong: "75Q", hangerAllDir: "75Q", braceTrans: "63F", braceLongAllDir: "75J" },
          { size: 12,  plf: 109,  supportSpacing: 20, trans: "C1.50", long: "C1.43", allDir: "C1.45", hangerTrans: "88R", hangerLong: "75R", hangerAllDir: "75R", braceTrans: "63G", braceLongAllDir: "75L" },
          { size: 14,  plf: 122,  supportSpacing: 20, trans: "C1.46", long: "C1.47", allDir: "C1.48", hangerTrans: "75R", hangerLong: "75R", hangerAllDir: "75S", braceTrans: "75H", braceLongAllDir: "75M" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.2",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 2,   plf: 6.2,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38E", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50E", braceLongAllDir: "50E" },
          { size: 2.5, plf: 9.1,  supportSpacing: 11, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50G", hangerLong: "50G", hangerAllDir: "50H", braceTrans: "50F", braceLongAllDir: "50F" },
          { size: 3,   plf: 12.1, supportSpacing: 12, trans: "C1.30", long: "C1.21", allDir: "C1.22", hangerTrans: "63J", hangerLong: "50J", hangerAllDir: "50K", braceTrans: "63G", braceLongAllDir: "50G" },
          { size: 4,   plf: 18.3, supportSpacing: 14, trans: "C1.31", long: "C1.33", allDir: "C1.35", hangerTrans: "63L", hangerLong: "63L", hangerAllDir: "63M", braceTrans: "63J", braceLongAllDir: "63J" },
          { size: 5,   plf: 26.6, supportSpacing: 16, trans: "C1.41", long: "C1.33", allDir: "C1.45", hangerTrans: "75N", hangerLong: "63N", hangerAllDir: "75P", braceTrans: "75L", braceLongAllDir: "63L" },
          { size: 6,   plf: 34.8, supportSpacing: 17, trans: "C1.46", long: "C1.47", allDir: "C1.48", hangerTrans: "75P", hangerLong: "75P", hangerAllDir: "75Q", braceTrans: "75M", braceLongAllDir: "75M" },
          { size: 8,   plf: 55.1, supportSpacing: 19, trans: "C1.46", long: "C1.47", allDir: "C1.48.1", hangerTrans: "75R", hangerLong: "75R", hangerAllDir: "75R", braceTrans: "75P", braceLongAllDir: "75P" },
          { size: 10,  plf: 80.2, supportSpacing: 20, trans: "C1.70", long: "C1.64", allDir: "C1.75", hangerTrans: "125S", hangerLong: "100S", hangerAllDir: "125S", braceTrans: "125Q", braceLongAllDir: "100Q" },
        ],
      },
      3: {
        tableRef: "B1.2.1",
        spacing: { trans: 20, long: 20, allDir: 20 },
        rows: [
          { size: 2,   plf: 6.2,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50C", braceLongAllDir: "50C" },
          { size: 2.5, plf: 9.1,  supportSpacing: 11, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50E", hangerAllDir: "50F", braceTrans: "50D", braceLongAllDir: "50D" },
          { size: 3,   plf: 12.1, supportSpacing: 12, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50G", hangerLong: "50G", hangerAllDir: "50G", braceTrans: "50E", braceLongAllDir: "50E" },
          { size: 4,   plf: 18.3, supportSpacing: 14, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63J", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63F", braceLongAllDir: "63F" },
          { size: 5,   plf: 26.6, supportSpacing: 16, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63L", hangerLong: "63L", hangerAllDir: "63M", braceTrans: "63G", braceLongAllDir: "63G" },
          { size: 6,   plf: 34.8, supportSpacing: 17, trans: "C1.41", long: "C1.43", allDir: "C1.45", hangerTrans: "75M", hangerLong: "75M", hangerAllDir: "75N", braceTrans: "75J", braceLongAllDir: "75J" },
          { size: 8,   plf: 55.1, supportSpacing: 19, trans: "C1.46", long: "C1.47", allDir: "C1.48", hangerTrans: "75Q", hangerLong: "75Q", hangerAllDir: "75Q", braceTrans: "75L", braceLongAllDir: "75L" },
          { size: 10,  plf: 80.2, supportSpacing: 20, trans: "C1.46", long: "C1.47", allDir: "C1.48", hangerTrans: "75R", hangerLong: "75R", hangerAllDir: "75R", braceTrans: "75N", braceLongAllDir: "75N" },
          { size: 12,  plf: 109,  supportSpacing: 20, trans: "C1.46", long: "C1.47", allDir: "C1.48.1", hangerTrans: "75S", hangerLong: "75S", hangerAllDir: "75S", braceTrans: "75P", braceLongAllDir: "75P" },
          { size: 14,  plf: 122,  supportSpacing: 20, trans: "C1.46", long: "C1.47", allDir: "C1.48.1", hangerTrans: "75S", hangerLong: "75S", hangerAllDir: "75S", braceTrans: "75Q", braceLongAllDir: "75Q" },
        ],
      },
    },
  },
  // ── Copper Type K (individually hung, solid brace) ───────────────────────
  // Methodology: hardware selected by W×L (PLF × support_spacing) comparison
  // to AGC OPM B-table steel rows (same connection details — C1.xx are
  // diameter-based and material-agnostic).
  // Support spacing: ≤1.25" → 6 ft (CPC 2022 §313); ≥1.5" → 10 ft.
  // Brace spacing options match steel B-table geometry (same N/C hardware).
  copperTypeK: {
    0.25: {
      1: {
        tableRef: "B1.0",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50E", hangerAllDir: "50F", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50E", hangerLong: "50G", hangerAllDir: "50G", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "63G", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C1.40", long: "C1.47", allDir: "C1.48", hangerTrans: "75L", hangerLong: "75M", hangerAllDir: "75N", braceTrans: "63F", braceLongAllDir: "75J" },
        ],
      },
      3: {
        tableRef: "B1.0.1",
        spacing: { trans: 20, long: 20, allDir: 20 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38B", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38B", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38B", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50D", hangerAllDir: "50E", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50E", hangerLong: "50E", hangerAllDir: "50G", braceTrans: "50B", braceLongAllDir: "50C" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "63F", hangerLong: "63J", hangerAllDir: "63J", braceTrans: "63C", braceLongAllDir: "63D" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75K", hangerLong: "75L", hangerAllDir: "75M", braceTrans: "63E", braceLongAllDir: "63G" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.1",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38C", hangerLong: "38E", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50F", hangerAllDir: "50G", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50F", hangerLong: "50H", hangerAllDir: "50J", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "63H", hangerLong: "63K", hangerAllDir: "63L", braceTrans: "63E", braceLongAllDir: "63G" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C1.40", long: "C1.47", allDir: "C1.48", hangerTrans: "75M", hangerLong: "75N", hangerAllDir: "75P", braceTrans: "63G", braceLongAllDir: "75L" },
        ],
      },
      3: {
        tableRef: "B1.1.1",
        spacing: { trans: 10, long: 20, allDir: 20 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38C", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38D", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50E", hangerAllDir: "50F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50F", hangerLong: "50F", hangerAllDir: "50H", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "63H", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75L", hangerLong: "75N", hangerAllDir: "75N", braceTrans: "63F", braceLongAllDir: "75J" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.2",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38E", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38E", hangerLong: "38F", hangerAllDir: "38G", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50G", hangerLong: "50G", hangerAllDir: "50H", braceTrans: "50E", braceLongAllDir: "50F" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63J", hangerLong: "50J", hangerAllDir: "50K", braceTrans: "63G", braceLongAllDir: "50G" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "63L", hangerLong: "63M", hangerAllDir: "75N", braceTrans: "63J", braceLongAllDir: "63L" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C1.40", long: "C1.47", allDir: "C1.48", hangerTrans: "75P", hangerLong: "75P", hangerAllDir: "75Q", braceTrans: "75M", braceLongAllDir: "75N" },
        ],
      },
      3: {
        tableRef: "B1.2.1",
        spacing: { trans: 20, long: 20, allDir: 20 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38E", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50G", hangerLong: "50G", hangerAllDir: "50G", braceTrans: "50E", braceLongAllDir: "50E" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63J", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63F", braceLongAllDir: "63F" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "63K", hangerLong: "63L", hangerAllDir: "63M", braceTrans: "63G", braceLongAllDir: "63J" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75N", hangerLong: "75P", hangerAllDir: "75P", braceTrans: "75L", braceLongAllDir: "75L" },
        ],
      },
    },
  },
  // Copper w/ Insulation — same bracket routing; slightly heavier PLF
  copperWithInsulation: {
    0.25: {
      1: {
        tableRef: "B1.0",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50E", hangerAllDir: "50F", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50E", hangerLong: "50G", hangerAllDir: "50G", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "63G", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C1.40", long: "C1.47", allDir: "C1.48", hangerTrans: "75L", hangerLong: "75M", hangerAllDir: "75N", braceTrans: "63F", braceLongAllDir: "75J" },
        ],
      },
      3: {
        tableRef: "B1.0.1",
        spacing: { trans: 20, long: 20, allDir: 20 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38B", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38B", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50D", hangerAllDir: "50F", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50E", hangerLong: "50F", hangerAllDir: "50G", braceTrans: "50B", braceLongAllDir: "50C" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "63G", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63D", braceLongAllDir: "63E" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75L", hangerLong: "75M", hangerAllDir: "75N", braceTrans: "63F", braceLongAllDir: "75J" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.1",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50F", hangerAllDir: "50H", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50F", hangerLong: "50H", hangerAllDir: "50J", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "63H", hangerLong: "63K", hangerAllDir: "63M", braceTrans: "63E", braceLongAllDir: "63H" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C1.40", long: "C1.47", allDir: "C1.48", hangerTrans: "75M", hangerLong: "75N", hangerAllDir: "75P", braceTrans: "63G", braceLongAllDir: "75M" },
        ],
      },
      3: {
        tableRef: "B1.1.1",
        spacing: { trans: 10, long: 20, allDir: 20 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38B", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38C", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50E", hangerLong: "50F", hangerAllDir: "50F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "50F", hangerLong: "50G", hangerAllDir: "50H", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "63H", hangerLong: "63K", hangerAllDir: "63L", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75M", hangerLong: "75N", hangerAllDir: "75P", braceTrans: "63F", braceLongAllDir: "75K" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.2",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38E", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38E", hangerLong: "38F", hangerAllDir: "38F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38F", hangerLong: "38G", hangerAllDir: "38G", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50G", hangerLong: "50H", hangerAllDir: "50J", braceTrans: "50E", braceLongAllDir: "50F" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63J", hangerLong: "50J", hangerAllDir: "50K", braceTrans: "63G", braceLongAllDir: "50H" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C1.40", long: "C1.43", allDir: "C1.45", hangerTrans: "63M", hangerLong: "63N", hangerAllDir: "75P", braceTrans: "63K", braceLongAllDir: "63M" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C1.40", long: "C1.47", allDir: "C1.48", hangerTrans: "75P", hangerLong: "75Q", hangerAllDir: "75Q", braceTrans: "75N", braceLongAllDir: "75P" },
        ],
      },
      3: {
        tableRef: "B1.2.1",
        spacing: { trans: 20, long: 20, allDir: 20 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50A" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38E", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38D", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50A", braceLongAllDir: "50C" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "38E", hangerLong: "38F", hangerAllDir: "38G", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50G", hangerLong: "50H", hangerAllDir: "50H", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63J", hangerLong: "63K", hangerAllDir: "63L", braceTrans: "63F", braceLongAllDir: "63G" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "63L", hangerLong: "63M", hangerAllDir: "63N", braceTrans: "63H", braceLongAllDir: "63K" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C1.40", long: "C1.42", allDir: "C1.44", hangerTrans: "75P", hangerLong: "75Q", hangerAllDir: "75Q", braceTrans: "75M", braceLongAllDir: "75N" },
        ],
      },
    },
  },
  castIron: {
    0.25: {
      1: {
        tableRef: "B1.6",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 2, plf: 5.1,  supportSpacing: 8, trans: "C1.10", long: "C1.11", allDir: "C1.12", hangerTrans: "38B", hangerLong: "38C", hangerAllDir: "38D", braceTrans: "50A", braceLongAllDir: "50B" },
          { size: 3, plf: 8.4,  supportSpacing: 8, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50E", hangerAllDir: "50E", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 4, plf: 13,   supportSpacing: 8, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63E", hangerLong: "63F", hangerAllDir: "63G", braceTrans: "63C", braceLongAllDir: "63E" },
          { size: 5, plf: 18,   supportSpacing: 8, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63F", hangerLong: "63G", hangerAllDir: "63J", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 6, plf: 23.4, supportSpacing: 8, trans: "C1.40", long: "C1.51", allDir: "C1.52", hangerTrans: "75K", hangerLong: "88J", hangerAllDir: "88K", braceTrans: "63D", braceLongAllDir: "63G" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.7",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 2, plf: 5.1,  supportSpacing: 8, trans: "C1.20", long: "C1.11", allDir: "C1.12", hangerTrans: "50C", hangerLong: "38D", hangerAllDir: "38E", braceTrans: "50B", braceLongAllDir: "50C" },
          { size: 3, plf: 8.4,  supportSpacing: 8, trans: "C1.20", long: "C1.21", allDir: "C1.22", hangerTrans: "50D", hangerLong: "50F", hangerAllDir: "50G", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 4, plf: 13,   supportSpacing: 8, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63E", hangerLong: "63G", hangerAllDir: "63J", braceTrans: "63D", braceLongAllDir: "63F" },
          { size: 5, plf: 18,   supportSpacing: 8, trans: "C1.30", long: "C1.32", allDir: "C1.34", hangerTrans: "63G", hangerLong: "63J", hangerAllDir: "63K", braceTrans: "63E", braceLongAllDir: "63G" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.8",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 2, plf: 5.1, supportSpacing: 8, trans: "C1.20", long: "C1.11", allDir: "C1.12", hangerTrans: "50C", hangerLong: "38E", hangerAllDir: "38F", braceTrans: "50D", braceLongAllDir: "50D" },
          { size: 3, plf: 8.4, supportSpacing: 8, trans: "C1.40", long: "C1.21", allDir: "C1.22", hangerTrans: "75F", hangerLong: "50F", hangerAllDir: "50H", braceTrans: "63E", braceLongAllDir: "50E" },
        ],
      },
    },
  },
};

// =============================================================================
// B-TABLE DATA: Individually Suspended Pipe — Cable Bracing (Standard)
// =============================================================================
export const INDIV_CABLE_TABLES = {
  steel: {
    0.25: {
      1: {
        tableRef: "B1.3",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 2,   plf: 6.2,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38A", braceLongAllDir: "38C" },
          { size: 2.5, plf: 9.1,  supportSpacing: 11, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 3,   plf: 12.1, supportSpacing: 12, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50D", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 4,   plf: 18.3, supportSpacing: 14, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63F", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 5,   plf: 26.6, supportSpacing: 16, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63H", braceTrans: "50E", braceLongAllDir: "50G" },
          { size: 6,   plf: 34.8, supportSpacing: 17, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75J", braceTrans: "63F", braceLongAllDir: "63J" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.4",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 2,   plf: 6.2,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38B", braceLongAllDir: "38D" },
          { size: 2.5, plf: 9.1,  supportSpacing: 11, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 3,   plf: 12.1, supportSpacing: 12, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50D", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 4,   plf: 18.3, supportSpacing: 14, trans: "C2.30", long: "C2.41", allDir: "C2.42", hangerConn: "63F", braceTrans: "50E", braceLongAllDir: "63G" },
          { size: 5,   plf: 26.6, supportSpacing: 16, trans: "C2.30", long: "C2.41", allDir: "C2.42", hangerConn: "63H", braceTrans: "50F", braceLongAllDir: "63J" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.5",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 2,   plf: 6.2,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38E", braceLongAllDir: "38E" },
          { size: 2.5, plf: 9.1,  supportSpacing: 11, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50F", braceLongAllDir: "50F" },
          { size: 3,   plf: 12.1, supportSpacing: 12, trans: "C2.30", long: "C2.21", allDir: "C2.22", hangerConn: "63D", braceTrans: "50G", braceLongAllDir: "50G" },
          { size: 4,   plf: 18.3, supportSpacing: 14, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75F", braceTrans: "63J", braceLongAllDir: "63J" },
        ],
      },
    },
  },
  // Copper Type K cable brace — same W×L bracket method as solid
  copperTypeK: {
    0.25: {
      1: {
        tableRef: "B1.3",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38A" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38A" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38C" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "38B", braceTrans: "38B", braceLongAllDir: "38C" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "50D", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "63F", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75J", braceTrans: "63F", braceLongAllDir: "63J" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.4",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38C" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38B", braceLongAllDir: "38C" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38B", braceLongAllDir: "38D" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "38B", braceTrans: "38C", braceLongAllDir: "38D" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "50D", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "63F", braceTrans: "50E", braceLongAllDir: "63G" },
          { size: 8,    plf: 45.4,  supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75J", braceTrans: "63F", braceLongAllDir: "63J" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.5",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 0.5,  plf: 0.80,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38B", braceLongAllDir: "38C" },
          { size: 0.75, plf: 0.83,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38B", braceLongAllDir: "38C" },
          { size: 1,    plf: 1.18,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38C", braceLongAllDir: "38D" },
          { size: 1.25, plf: 2.11,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38D", braceLongAllDir: "38D" },
          { size: 1.5,  plf: 2.11,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38D", braceLongAllDir: "38E" },
          { size: 2,    plf: 3.37,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38E", braceLongAllDir: "38F" },
          { size: 2.5,  plf: 4.92,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "38C", braceTrans: "50E", braceLongAllDir: "50E" },
          { size: 3,    plf: 6.96,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50F", braceLongAllDir: "50G" },
          { size: 4,    plf: 11.57, supportSpacing: 10, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63D", braceTrans: "50G", braceLongAllDir: "50H" },
          { size: 6,    plf: 25.07, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75F", braceTrans: "63J", braceLongAllDir: "63J" },
        ],
      },
    },
  },
  // Copper w/ Insulation — cable brace (slightly heavier than Type K)
  copperWithInsulation: {
    0.25: {
      1: {
        tableRef: "B1.3",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38A" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38C" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38A", braceLongAllDir: "38C" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "38B", braceTrans: "38B", braceLongAllDir: "38D" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50B", braceLongAllDir: "50D" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "50D", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "63F", braceTrans: "50D", braceLongAllDir: "63G" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75J", braceTrans: "63F", braceLongAllDir: "63K" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.4",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38C" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38B", braceLongAllDir: "38C" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38B", braceLongAllDir: "38D" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38B", braceLongAllDir: "38D" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "38B", braceTrans: "38C", braceLongAllDir: "38E" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50C", braceLongAllDir: "50F" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "50D", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "63H", braceTrans: "50E", braceLongAllDir: "63H" },
          { size: 8,    plf: 47.18, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75J", braceTrans: "63G", braceLongAllDir: "63K" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.5",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 0.5,  plf: 0.95,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38C", braceLongAllDir: "38C" },
          { size: 0.75, plf: 1.01,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38C", braceLongAllDir: "38D" },
          { size: 1,    plf: 1.40,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38D", braceLongAllDir: "38E" },
          { size: 1.25, plf: 2.36,  supportSpacing: 6,  trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38D", braceLongAllDir: "38E" },
          { size: 1.5,  plf: 2.36,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38E", braceLongAllDir: "38F" },
          { size: 2,    plf: 3.68,  supportSpacing: 10, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38B", braceTrans: "38F", braceLongAllDir: "38G" },
          { size: 2.5,  plf: 5.25,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "38C", braceTrans: "50F", braceLongAllDir: "50F" },
          { size: 3,    plf: 7.50,  supportSpacing: 10, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50C", braceTrans: "50G", braceLongAllDir: "50G" },
          { size: 4,    plf: 12.65, supportSpacing: 10, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63D", braceTrans: "50G", braceLongAllDir: "50J" },
          { size: 6,    plf: 26.52, supportSpacing: 10, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75F", braceTrans: "63J", braceLongAllDir: "63K" },
        ],
      },
    },
  },
  castIron: {
    0.25: {
      1: {
        tableRef: "B1.9",
        spacing: { trans: 40, long: 80, allDir: 80 },
        rows: [
          { size: 2, plf: 5.1,  supportSpacing: 8, trans: "C2.10", long: "C2.11", allDir: "C2.12", hangerConn: "38A", braceTrans: "38A", braceLongAllDir: "38B" },
          { size: 3, plf: 8.4,  supportSpacing: 8, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50B", braceTrans: "50B", braceLongAllDir: "50C" },
          { size: 4, plf: 13,   supportSpacing: 8, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63C", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 5, plf: 18,   supportSpacing: 8, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63D", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 6, plf: 23.4, supportSpacing: 8, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75E", braceTrans: "63D", braceLongAllDir: "63G" },
        ],
      },
    },
    0.5: {
      1: {
        tableRef: "B1.10",
        spacing: { trans: 30, long: 60, allDir: 60 },
        rows: [
          { size: 2, plf: 5.1,  supportSpacing: 8, trans: "C2.20", long: "C2.11", allDir: "C2.12", hangerConn: "50A", braceTrans: "50B", braceLongAllDir: "38C" },
          { size: 3, plf: 8.4,  supportSpacing: 8, trans: "C2.20", long: "C2.21", allDir: "C2.22", hangerConn: "50B", braceTrans: "50C", braceLongAllDir: "50E" },
          { size: 4, plf: 13,   supportSpacing: 8, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63C", braceTrans: "50D", braceLongAllDir: "50F" },
          { size: 5, plf: 18,   supportSpacing: 8, trans: "C2.30", long: "C2.31", allDir: "C2.32", hangerConn: "63D", braceTrans: "50E", braceLongAllDir: "50G" },
          { size: 6, plf: 23.4, supportSpacing: 8, trans: "C2.40", long: "C2.41", allDir: "C2.42", hangerConn: "75E", braceTrans: "63F", braceLongAllDir: "63J" },
        ],
      },
    },
    1.0: {
      1: {
        tableRef: "B1.11",
        spacing: { trans: 40, long: 40, allDir: 40 },
        rows: [
          { size: 2, plf: 5.1, supportSpacing: 8, trans: "C2.20", long: "C2.11", allDir: "C2.12", hangerConn: "50A", braceTrans: "50D", braceLongAllDir: "38D" },
          { size: 3, plf: 8.4, supportSpacing: 8, trans: "C2.40", long: "C2.21", allDir: "C2.22", hangerConn: "75B", braceTrans: "63E", braceLongAllDir: "50E" },
        ],
      },
    },
  },
};

// =============================================================================
// B-TABLE DATA: Trapeze Supported — Solid Bracing
// Rows keyed by piping/conduit weight (lbs/ft)
// =============================================================================
export const TRAPEZE_SOLID_TABLES = {
  0.25: {
    1: {
      tableRef: "B1.12",
      spacing: { trans: 40, long: 80, allDir: 80 },
      rows: [
        { weight: 10,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38D", hangerAllDir: "38F", braceType: "50B" },
        { weight: 20,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38F", hangerAllDir: "38J", braceType: "50D" },
        { weight: 30,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38G", hangerAllDir: "38L", braceType: "50E" },
        { weight: 40,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50J", hangerAllDir: "50M", braceType: "50F" },
        { weight: 50,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50K", hangerAllDir: "50N", braceType: "50G" },
        { weight: 60,  trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63L", hangerAllDir: "63P", braceType: "63H" },
        { weight: 70,  trans: "F1.33", long: "F1.34", allDir: "F1.35", hangerTrans: "63M", hangerAllDir: "63Q", braceType: "63J" },
        { weight: 80,  trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63M", hangerAllDir: "75Q", braceType: "63J" },
        { weight: 90,  trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63N", hangerAllDir: "75Q", braceType: "63K" },
        { weight: 100, trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63N", hangerAllDir: "75R", braceType: "63L" },
        { weight: 150, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75Q", hangerAllDir: "75S", braceType: "75M" },
        { weight: 200, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75R", hangerAllDir: "75S", braceType: "75P" },
      ],
    },
    3: {
      tableRef: "B1.12.1",
      spacing: { trans: 20, long: 40, allDir: 40 },
      rows: [
        { weight: 10,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38C", hangerAllDir: "38D", braceType: "50A" },
        { weight: 20,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38E", hangerAllDir: "38G", braceType: "50B" },
        { weight: 30,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38F", hangerAllDir: "38H", braceType: "50C" },
        { weight: 40,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50G", hangerAllDir: "50K", braceType: "50D" },
        { weight: 50,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50J", hangerAllDir: "50L", braceType: "50E" },
        { weight: 60,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50J", hangerAllDir: "50M", braceType: "50E" },
        { weight: 70,  trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63K", hangerAllDir: "63N", braceType: "63F" },
        { weight: 80,  trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63L", hangerAllDir: "63N", braceType: "63F" },
        { weight: 90,  trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63M", hangerAllDir: "63P", braceType: "63G" },
        { weight: 100, trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63M", hangerAllDir: "63P", braceType: "63G" },
        { weight: 150, trans: "F1.43", long: "F1.44", allDir: "F1.45", hangerTrans: "75P", hangerAllDir: "75Q", braceType: "75J" },
        { weight: 200, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75Q", hangerAllDir: "75R", braceType: "75L" },
        { weight: 300, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75R", hangerAllDir: "75S", braceType: "75M" },
        { weight: 400, trans: "F1.60", long: "F1.61", allDir: "F1.62", hangerTrans: "100S", hangerAllDir: "100T", braceType: "125P" },
      ],
    },
  },
  0.5: {
    1: {
      tableRef: "B1.13",
      spacing: { trans: 30, long: 60, allDir: 60 },
      rows: [
        { weight: 10,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38D", hangerAllDir: "38G", braceType: "50C" },
        { weight: 20,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38G", hangerAllDir: "38L", braceType: "50E" },
        { weight: 30,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50J", hangerAllDir: "50M", braceType: "50G" },
        { weight: 40,  trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63K", hangerAllDir: "63P", braceType: "63H" },
        { weight: 50,  trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63L", hangerAllDir: "75Q", braceType: "63J" },
        { weight: 60,  trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63M", hangerAllDir: "75Q", braceType: "63K" },
        { weight: 70,  trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63N", hangerAllDir: "75R", braceType: "63L" },
        { weight: 80,  trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75N", hangerAllDir: "75R", braceType: "75L" },
        { weight: 90,  trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75P", hangerAllDir: "75R", braceType: "75M" },
        { weight: 100, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75P", hangerAllDir: "75S", braceType: "75M" },
        { weight: 150, trans: "F1.50", long: "F1.51", allDir: "F1.55", hangerTrans: "75R", hangerAllDir: "75T", braceType: "75P" },
        { weight: 200, trans: "F1.50", long: "F1.51", allDir: "F1.72", hangerTrans: "75R", hangerAllDir: "125T", braceType: "75Q" },
      ],
    },
    3: {
      tableRef: "B1.13.1",
      spacing: { trans: 10, long: 20, allDir: 20 },
      rows: [
        { weight: 10,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38C", hangerAllDir: "38D", braceType: "50A" },
        { weight: 20,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38E", hangerAllDir: "38G", braceType: "50B" },
        { weight: 30,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38F", hangerAllDir: "38H", braceType: "50C" },
        { weight: 40,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50G", hangerAllDir: "50K", braceType: "50D" },
        { weight: 50,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50J", hangerAllDir: "50L", braceType: "50E" },
        { weight: 100, trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63M", hangerAllDir: "63P", braceType: "63G" },
        { weight: 150, trans: "F1.43", long: "F1.44", allDir: "F1.45", hangerTrans: "75P", hangerAllDir: "75Q", braceType: "75J" },
        { weight: 200, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75Q", hangerAllDir: "75R", braceType: "75L" },
      ],
    },
  },
  1.0: {
    1: {
      tableRef: "B1.14",
      spacing: { trans: 20, long: 40, allDir: 40 },
      rows: [
        { weight: 10,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38E", hangerAllDir: "38H", braceType: "50D" },
        { weight: 20,  trans: "F1.10", long: "F1.11", allDir: "F1.22", hangerTrans: "38H", hangerAllDir: "50M", braceType: "50F" },
        { weight: 30,  trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63K", hangerAllDir: "63N", braceType: "63H" },
        { weight: 40,  trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63L", hangerAllDir: "75Q", braceType: "63J" },
        { weight: 50,  trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63M", hangerAllDir: "75Q", braceType: "63L" },
        { weight: 60,  trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75N", hangerAllDir: "75R", braceType: "75L" },
        { weight: 70,  trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75P", hangerAllDir: "75R", braceType: "75M" },
        { weight: 80,  trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75P", hangerAllDir: "75S", braceType: "75N" },
        { weight: 90,  trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75Q", hangerAllDir: "75S", braceType: "75N" },
        { weight: 100, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75Q", hangerAllDir: "75S", braceType: "75P" },
        { weight: 150, trans: "F1.50", long: "F1.51", allDir: "F1.72", hangerTrans: "75R", hangerAllDir: "125T", braceType: "75Q" },
        { weight: 200, trans: "F1.70", long: "F1.71", allDir: "—",     hangerTrans: "125S", hangerAllDir: "125R", braceType: "—" },
      ],
    },
    3: {
      tableRef: "B1.14.1",
      spacing: { trans: 10, long: 20, allDir: 20 },
      rows: [
        { weight: 10,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38D", hangerAllDir: "38F", braceType: "50B" },
        { weight: 20,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38F", hangerAllDir: "38J", braceType: "50D" },
        { weight: 30,  trans: "F1.10", long: "F1.11", allDir: "F1.12", hangerTrans: "38G", hangerAllDir: "38L", braceType: "50E" },
        { weight: 40,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50J", hangerAllDir: "50M", braceType: "50F" },
        { weight: 50,  trans: "F1.20", long: "F1.21", allDir: "F1.22", hangerTrans: "50K", hangerAllDir: "50N", braceType: "50G" },
        { weight: 60,  trans: "F1.30", long: "F1.31", allDir: "F1.32", hangerTrans: "63L", hangerAllDir: "63P", braceType: "63H" },
        { weight: 100, trans: "F1.33", long: "F1.34", allDir: "F1.45", hangerTrans: "63N", hangerAllDir: "75R", braceType: "63L" },
        { weight: 150, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75Q", hangerAllDir: "75S", braceType: "75M" },
        { weight: 200, trans: "F1.50", long: "F1.51", allDir: "F1.52", hangerTrans: "75R", hangerAllDir: "75S", braceType: "75P" },
      ],
    },
  },
};

// =============================================================================
// B-TABLE DATA: Trapeze Supported — Cable Standard Bracing
// =============================================================================
export const TRAPEZE_CABLE_STD_TABLES = {
  0.25: {
    1: {
      tableRef: "B1.15",
      spacing: { trans: 40, long: 80, allDir: 80 },
      rows: [
        { weight: 10, trans: "F2.10", long: "F2.11", allDir: "F2.12", hangerTrans: "38B", hangerAllDir: "38B" },
        { weight: 20, trans: "F2.10", long: "F2.11", allDir: "F2.12", hangerTrans: "38D", hangerAllDir: "38D" },
        { weight: 30, trans: "F2.20", long: "F2.21", allDir: "F2.22", hangerTrans: "50E", hangerAllDir: "50E" },
        { weight: 40, trans: "F2.20", long: "F2.21", allDir: "F2.22", hangerTrans: "50F", hangerAllDir: "50F" },
        { weight: 50, trans: "F2.20", long: "F2.21", allDir: "F2.22", hangerTrans: "50G", hangerAllDir: "50G" },
        { weight: 60, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75G", hangerAllDir: "63H" },
        { weight: 70, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75H", hangerAllDir: "63J" },
        { weight: 80, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75J", hangerAllDir: "63J" },
        { weight: 90, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75J", hangerAllDir: "63K" },
      ],
    },
  },
  0.5: {
    1: {
      tableRef: "B1.16",
      spacing: { trans: 30, long: 60, allDir: 60 },
      rows: [
        { weight: 10, trans: "F2.10", long: "F2.11", allDir: "F2.12", hangerTrans: "38B", hangerAllDir: "38C" },
        { weight: 20, trans: "F2.20", long: "F2.21", allDir: "F2.22", hangerTrans: "50D", hangerAllDir: "50E" },
        { weight: 30, trans: "F2.20", long: "F2.21", allDir: "F2.22", hangerTrans: "50E", hangerAllDir: "50G" },
        { weight: 40, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75F", hangerAllDir: "63H" },
        { weight: 50, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75G", hangerAllDir: "63J" },
        { weight: 60, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75G", hangerAllDir: "63K" },
      ],
    },
  },
  1.0: {
    1: {
      tableRef: "B1.17",
      spacing: { trans: 20, long: 40, allDir: 40 },
      rows: [
        { weight: 10, trans: "F2.10", long: "F2.11", allDir: "F2.12", hangerTrans: "38B", hangerAllDir: "38D" },
        { weight: 20, trans: "F2.20", long: "F2.21", allDir: "F2.22", hangerTrans: "50D", hangerAllDir: "50F" },
        { weight: 30, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75E", hangerAllDir: "63H" },
        { weight: 40, trans: "F2.40", long: "F2.41", allDir: "F2.42", hangerTrans: "75F", hangerAllDir: "63J" },
      ],
    },
  },
};

// =============================================================================
// B-TABLE DATA: Trapeze Supported — Cable X-Pattern Bracing
// =============================================================================
export const TRAPEZE_CABLE_X_TABLES = {
  0.25: {
    1: {
      tableRef: "B1.18",
      spacing: { trans: 40, long: "—", allDir: "—" },
      rows: [
        { weight: 10, kitDetail: "F3.10", hangerAttach: "38C", braceAttach: "38B" },
        { weight: 20, kitDetail: "F3.10", hangerAttach: "38E", braceAttach: "38D" },
        { weight: 30, kitDetail: "F3.11", hangerAttach: "50F", braceAttach: "50E" },
        { weight: 40, kitDetail: "F3.11", hangerAttach: "50G", braceAttach: "50F" },
        { weight: 50, kitDetail: "F3.11", hangerAttach: "50H", braceAttach: "50G" },
        { weight: 60, kitDetail: "F3.13", hangerAttach: "75J", braceAttach: "63H" },
        { weight: 70, kitDetail: "F3.13", hangerAttach: "75K", braceAttach: "63J" },
        { weight: 80, kitDetail: "F3.13", hangerAttach: "75L", braceAttach: "63J" },
        { weight: 90, kitDetail: "F3.13", hangerAttach: "75L", braceAttach: "63K" },
      ],
    },
  },
  0.5: {
    1: {
      tableRef: "B1.19",
      spacing: { trans: 30, long: "—", allDir: "—" },
      rows: [
        { weight: 10, kitDetail: "F3.10", hangerAttach: "38C", braceAttach: "38C" },
        { weight: 20, kitDetail: "F3.11", hangerAttach: "50E", braceAttach: "50E" },
        { weight: 30, kitDetail: "F3.11", hangerAttach: "50F", braceAttach: "50G" },
        { weight: 40, kitDetail: "F3.13", hangerAttach: "75G", braceAttach: "63H" },
        { weight: 50, kitDetail: "F3.13", hangerAttach: "75H", braceAttach: "63J" },
        { weight: 60, kitDetail: "F3.13", hangerAttach: "75J", braceAttach: "63K" },
      ],
    },
  },
  1.0: {
    1: {
      tableRef: "B1.20",
      spacing: { trans: 20, long: "—", allDir: "—" },
      rows: [
        { weight: 10, kitDetail: "F3.10", hangerAttach: "38C", braceAttach: "38D" },
        { weight: 20, kitDetail: "F3.11", hangerAttach: "50E", braceAttach: "50F" },
        { weight: 30, kitDetail: "F3.13", hangerAttach: "75F", braceAttach: "63H" },
        { weight: 40, kitDetail: "F3.13", hangerAttach: "75G", braceAttach: "63J" },
      ],
    },
  },
};

// =============================================================================
// ROD SIZE DECODER — designation prefix → rod diameter
// =============================================================================
export const ROD_SIZE_MAP = {
  "38": '3/8"',
  "50": '1/2"',
  "63": '5/8"',
  "75": '3/4"',
  "88": '7/8"',
  "100": '1"',
  "125": '1-1/4"',
};

export function getRodSize(designation) {
  if (!designation || designation === "—") return "—";
  for (const [prefix, size] of Object.entries(ROD_SIZE_MAP)) {
    if (designation.startsWith(prefix)) return size;
  }
  return "See schedule";
}

// =============================================================================
// HELPER: Brace-to-Structure Attachment Options by Structure Type
// Returns array of { key, label, icon, pdf, note } for each viable method.
// Primary method is always first; alternates follow in recommended order.
// =============================================================================
export function getBraceAttachmentOptions(structure) {
  switch (structure) {
    case 'concrete':
      return [
        { key: 'N1.14', label: 'Standard 1-Anchor Bracket',         icon: '🏗',  pdf: 606, note: 'N1.14 — Drilled & epoxy/expansion to CIP slab/beam/wall (primary)' },
        { key: 'N1.10', label: 'Cast-In Insert',                     icon: '🔩',  pdf: 603, note: 'N1.10 — Pre-placed cast-in insert anchor (preferred for new construction)' },
        { key: 'N1.15', label: 'Hilti KB-TZ Expansion Anchor',       icon: '⚓',  pdf: 607, note: 'N1.15 — Torque-controlled expansion anchor, 1 anchor per bracket' },
        { key: 'N1.16', label: 'Dewalt Power-Stud+ SD1',             icon: '⚓',  pdf: 611, note: 'N1.16 — Stud anchor SD1 type, 1 anchor per bracket' },
        { key: 'N1.17', label: 'Dewalt Power-Stud+ SD2',             icon: '⚓',  pdf: 619, note: 'N1.17 — Stud anchor SD2 type, 1 anchor per bracket' },
        { key: 'N1.18', label: 'Concrete Screw Anchor',               icon: '🔧',  pdf: 623, note: 'N1.18 — Screw anchor (e.g. Tapcon/Titen HD), 1 screw per bracket' },
        { key: 'N1.19', label: 'Caddy CRLW Anchor',                   icon: '🔩',  pdf: 637, note: 'N1.19 — Caddy CRLW threaded rod anchor into CIP concrete' },
      ]
    case 'concreteSlab':
      return [
        { key: 'N2.11', label: 'Standard 1-Anchor Bracket',          icon: '🏗',  pdf: 640, note: 'N2.11 — Drilled expansion anchor into concrete topping (primary)' },
        { key: 'N2.10', label: 'MW-PAL-A-MD Actuated Anchor',         icon: '💥',  pdf: 639, note: 'N2.10 — MW power-actuated anchor through deck into concrete' },
        { key: 'N2.12', label: 'Hilti KB-TZ Expansion Anchor',        icon: '⚓',  pdf: 645, note: 'N2.12 — Torque-controlled expansion anchor, 1 anchor per bracket' },
        { key: 'N2.13', label: 'Dewalt Power-Stud+ SD1',              icon: '⚓',  pdf: 653, note: 'N2.13 — Stud anchor SD1 type, 1 anchor per bracket' },
        { key: 'N2.14', label: 'Dewalt Power-Stud+ SD2',              icon: '⚓',  pdf: 680, note: 'N2.14 — Stud anchor SD2 type, 1 anchor per bracket' },
        { key: 'N2.15', label: 'Concrete Screw Anchor',                icon: '🔧',  pdf: 688, note: 'N2.15 — Screw anchor into concrete topping over metal deck' },
        { key: 'N2.16', label: 'Hilti KCM-MD Drive Anchor',            icon: '🔩',  pdf: 700, note: 'N2.16 — Hilti KCM-MD cast-in-deck direct anchor' },
        { key: 'N2.17', label: 'Bang-It+ Powder-Actuated Anchor',      icon: '💥',  pdf: 702, note: 'N2.17 — Bang-It+ PA anchor through deck into concrete topping' },
      ]
    case 'steel':
      return [
        { key: 'N3.11', label: 'Self-Drilling Fasteners (Primary)',    icon: '🔩',  pdf: 715, note: 'N3.11 — Self-drilling fasteners to steel beam or open-web truss' },
        { key: 'N3.13', label: 'Welded Connection',                    icon: '⚡',  pdf: 717, note: 'N3.13 — Bracket welded directly to structural steel beam' },
        { key: 'N3.14', label: 'Beam Clamp — Type 1',                  icon: '🔧',  pdf: 718, note: 'N3.14 — Clamp-on bracket to steel beam lower flange' },
        { key: 'N3.15', label: 'Beam Clamp — Type 2',                  icon: '🔧',  pdf: 719, note: 'N3.15 — Alternate clamp-on bracket configuration' },
      ]
    case 'metalDeck':
      return [
        { key: 'N7.10', label: 'Non-Conc-Filled Metal Deck',           icon: '🏗',  pdf: 730, note: 'N7.10 — Bracket to non-concrete-filled (bare) metal deck' },
      ]
    case 'wood':
      return [
        { key: 'N0.00', label: 'Wood Structure — General Notes',       icon: '🪵',  pdf: 602, note: 'N0.00 — Lag bolt / through-bolt per general N-section notes' },
      ]
    default:
      return [
        { key: 'N0.00', label: 'Brace Bracket Designation Table',      icon: '📋',  pdf: 602, note: 'N0.00 — General notes and anchor designation table' },
      ]
  }
}

// =============================================================================
// HELPER: Find closest trapeze table row by total weight
// =============================================================================
export function findTrapezeRow(rows, weight) {
  // Find first row where weight <= row.weight
  const sorted = [...rows].sort((a, b) => a.weight - b.weight);
  return sorted.find(r => weight <= r.weight) || sorted[sorted.length - 1];
}

// =============================================================================
// HELPER: Seismic force selection from Fp value
// =============================================================================
export function selectFpTier(fpValue) {
  if (fpValue <= 0.25) return 0.25;
  if (fpValue <= 0.5) return 0.5;
  return 1.0;
}
