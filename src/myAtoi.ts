const INT32MAX: number = Math.pow(2, 31) - 1
const INT32MIN: number = -Math.pow(2, 31)
/**
 * @description 其能将字符串转换成整数
 * @author angle
 * @date 2019-12-07
 * @export
 * @param {string} str 待转换的字符串
 * @returns {number} 转换后的数字
 */
export function myAtoi(str: string): number {
  // let res: number = parseInt(str, 10)
  // if (isNaN(res)) {
  //   return 0
  // } else if (res > INT32MAX) {
  //   return INT32MAX
  // } else if (res < INT32MIN) {
  //   return INT32MIN
  // }
  let numStrArr: RegExpMatchArray | null = str.trim().match(/^(\+|-)?\d+/)
  if (!numStrArr) {
    return 0
  } else {
    let res: number = Number(numStrArr[0])
    if (res > INT32MAX) {
      return INT32MAX
    } else if (res < INT32MIN) {
      return INT32MIN
    }
    return res
  }
}
