/**
 * @description 最大公约数
 * @author angle
 * @date 2020-09-30
 * @export
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}
/**
 * @description 最多有多少个点在同一条直线上
 * @author angle
 * @date 2020-09-30
 * @export
 * @param {number[][]} points
 * @returns {number}
 */
export function maxPoints(points: number[][]): number {
  if (points.length < 3) {
    return points.length;
  }
  let res: number = 0;
  for (let i: number = 0; i < points.length - 1; i++) {
    let duplicate = 1;
    let max: number = 0;
    const map = new Map<string, number>();
    for (let j: number = i + 1; j < points.length; j++) {
      let x: number = points[j][0] - points[i][0];
      let y: number = points[j][1] - points[i][1];
      if (!x && !y) {
        duplicate++;
      } else {
        const gcdNum: number = gcd(x, y);
        x /= gcdNum;
        y /= gcdNum;
        const key: string = `${x}@${y}`;
        const n = (map.get(key) ?? 0) + 1;
        map.set(key, n);
        max = Math.max(max, n);
      }
    }
    res = Math.max(res, max + duplicate);
  }
  return res;
}
