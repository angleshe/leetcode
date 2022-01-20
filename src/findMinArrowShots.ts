/**
 * @description 引爆所有气球所必须射出的最小弓箭数。
 * @author angle
 * @date 2022-01-20
 * @export
 * @param {number[][]} points
 * @returns {number}
 */
export function findMinArrowShots(points: number[][]): number {
  if (points.length) {
    const pointsArr = points.sort((a, b) => a[0] - b[0]);
    let res: number = 1;
    let endPoint = pointsArr[0][1];
    for (let i = 1; i < pointsArr.length; i++) {
      if (pointsArr[i][0] > endPoint) {
        endPoint = pointsArr[i][1];
        res++;
      } else if (pointsArr[i][1] < endPoint) {
        endPoint = pointsArr[i][1];
      }
    }
    return res;
  }
  return 0;
}
