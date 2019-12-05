/**
 * @description 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * @author angle
 * @date 2019-12-05
 * @export
 * @param {string} s
 * @param {number} numRows
 * @returns {string}
 */
export function convert (s: string, numRows: number): string {
  if (numRows === 1) {
    return s
  } else {
    let resArr: string[] = []
    let sArr: string[] = s.split('')
    for (let i: number = 0; i < numRows; i++) {
      let index: number = i
      let j: number = 0
      while (index <= s.length - 1) {
        resArr.push(sArr[index])
        let step: number =  (j % 2 === 0 ? (numRows - i - 1) : i) * 2
        if (step) {
          index += step
          j += 1
        } else {
          index += ((j + 1) % 2 === 0 ? (numRows - i - 1) : i) * 2
          j+= 2
        }
      }
    }
    return resArr.join('')
  }
}
