/**
 * @description 二维平面上计算出两个由直线构成的矩形重叠后形成的总面积
 * @author angle
 * @date 2020-12-28
 * @export
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @returns {number}
 */
export function computeArea(
  A: number,
  B: number,
  C: number,
  D: number,
  E: number,
  F: number,
  G: number,
  H: number
): number {
  if (A > E) {
    return computeArea(E, F, G, H, A, B, C, D);
  }

  if (B >= H || D <= F || C <= E) {
    return (C - A) * (D - B) + (G - E) * (H - F);
  }

  const up = Math.min(D, H);
  const down = Math.max(B, F);
  const left = E;
  const right = Math.min(C, G);

  return (C - A) * (D - B) + (G - E) * (H - F) - (up - down) * (right - left);
}
