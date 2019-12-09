/**
 * @description 判断一个整数是否是回文数
 * @author angle
 * @date 2019-12-09
 * @export
 * @param {number} x 判断的数
 * @returns {boolean} 是否为回文数
 */
export function isPalindrome (x: number): boolean {
  if (x < 0) {
    return false
  } else if (x < 10) {
    return true
  } else {
    let num: number = x
    let newNum: number = 0
    while (num) {
      newNum = newNum * 10 + num % 10
      num = Math.floor(num / 10)
    }
    return newNum === x
  }
}
