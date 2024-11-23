export function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  let lCache: number = 0;
  function calc(a: number[], b: number[], c: number[]): boolean {
    const l1 = (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
    const l2 = (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2;
    const l3 = (c[0] - a[0]) ** 2 + (c[1] - a[1]) ** 2;
    const ok =
      (l1 === l2 && l1 + l2 === l3) ||
      (l2 === l3 && l2 + l3 === l1) ||
      (l1 === l3 && l1 + l3 === l2);
    if (!ok) {
      return false;
    }

    const l = Math.min(l1, l2);
    if (!l) {
      return false;
    }
    if (lCache !== 0 && l !== lCache) {
      return false;
    }
    lCache = l;
    return true;
  }

  return calc(p1, p2, p3) && calc(p2, p3, p4) && calc(p3, p4, p1) && calc(p4, p1, p2);
}
