/**
 * Oczekiwany format w nazwie testu: "[C1234] opis testu"
 */
export function extractCaseId(title) {
  const m = String(title).match(/\[C(\d+)\]/i);
  return m ? Number(m[1]) : null;
}
