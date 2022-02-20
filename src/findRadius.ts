/**
 * @description 返回可以覆盖所有房屋的最小加热半径
 * @author angle
 * @date 2022-02-20
 * @export
 * @param {number[]} houses
 * @param {number[]} heaters
 * @returns {number}
 */
export function findRadius(houses: number[], heaters: number[]): number {
  heaters.sort((a, b) => a - b);
  let res: number = 0;

  houses.forEach((house) => {
    if (house <= heaters[0]) {
      res = Math.max(res, heaters[0] - house);
    } else if (house >= heaters[heaters.length - 1]) {
      res = Math.max(res, house - heaters[heaters.length - 1]);
    } else {
      let left: number = 0;
      let right: number = heaters.length - 1;
      while (right - left > 1) {
        // eslint-disable-next-line no-bitwise
        const mid = left + ((right - left) >> 1);
        if (heaters[mid] > house) {
          right = mid;
        } else if (heaters[mid] === house) {
          break;
        } else {
          left = mid;
        }
      }
      if (right - left === 1) {
        res = Math.max(res, Math.min(heaters[right] - house, house - heaters[left]));
      }
    }
  });

  return res;
}
