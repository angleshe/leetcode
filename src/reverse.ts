/**
 * @description 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * @author angle
 * @date 2019-12-06
 * @export
 * @param {number} x 待处理数
 * @returns {number} 已处理数
 */
export function reverse (x: number): number {
  let res: number = 0
  if (x) {
    let numArr = Math.abs(x).toString().split('')
    for (let i: number = 0; i < Math.floor(numArr.length / 2); i++) {
      [numArr[i], numArr[numArr.length - i - 1]] = [numArr[numArr.length - i - 1], numArr[i]]
    }
    res = parseInt(numArr.join(''), 10)
    if (x < 0) {
      res = -res
    }
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
      res = 0
    }
  }
  return res
}

// export function cleanHeadZreo
