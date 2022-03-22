/**
 * @description 转化为 7 进制
 * @author angle
 * @date 2022-03-22
 * @export
 * @param {number} num
 * @returns {string}
 */
export function convertToBase7(num: number): string {
  let target: number = num >= 0 ? num : -num;
  let res: string = '';

  if (target) {
    while (target) {
      res = (target % 7) + res;
      target = Math.floor(target / 7);
    }
    return num >= 0 ? res : `-${res}`;
  }

  return '0';
}
