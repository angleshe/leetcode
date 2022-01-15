/**
 * @description 返回平面上所有回旋镖的数量
 * @author angle
 * @date 2022-01-15
 * @export
 * @param {number[][]} points
 * @returns {number}
 */
export function numberOfBoomerangs(points: number[][]): number {
  let res: number = 0;
  for (let i = 0; i < points.length; i++) {
    const distMap = new Map<number, number>();
    for (let j = 0; j < points.length; j++) {
      if (j !== i) {
        const dist = (points[j][0] - points[i][0]) ** 2 + (points[j][1] - points[i][1]) ** 2;
        distMap.set(dist, (distMap.get(dist) ?? 0) + 1);
      }
    }
    // eslint-disable-next-line no-loop-func
    distMap.forEach((value) => {
      res += value * (value - 1);
    });
  }
  return res;
}
