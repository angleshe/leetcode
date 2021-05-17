/**
 * @description 判断逆时针数组所经过的路径是否相交
 * @author angle
 * @date 2021-05-17
 * @export
 * @param {number[]} distance
 * @returns {boolean}
 */
export function isSelfCrossing(distance: number[]): boolean {
  return distance.some((item, index) => {
    if (index < 3) {
      return false;
    }
    if (item >= distance[index - 2] && distance[index - 1] <= distance[index - 3]) {
      return true;
    }
    if (index > 3) {
      if (distance[index - 1] < distance[index - 3] && item >= distance[index - 2]) {
        return true;
      }
      if (
        distance[index - 1] === distance[index - 3] &&
        item >= distance[index - 2] - distance[index - 4]
      ) {
        return true;
      }
    }

    if (index > 4 && distance[index - 2] > distance[index - 4]) {
      if (
        distance[index - 1] < distance[index - 3] - distance[index - 5] &&
        item >= distance[index - 2]
      ) {
        return true;
      }
      if (
        distance[index - 1] >= distance[index - 3] - distance[index - 5] &&
        distance[index - 1] <= distance[index - 3] &&
        item >= distance[index - 2] - distance[index - 4]
      ) {
        return true;
      }
    }

    return false;
  });
}
