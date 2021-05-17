export function compareNum(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

export function compareStr(a, b) {
  if(a.toLowerCase() < b.toLowerCase()) return -1;
  if(a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
}
