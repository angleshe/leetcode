/**
 * @description 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @author angle
 * @date 2019-11-19
 * @param {string} s
 * @returns {string}
 */
export function longestPalindrome (s: string): string {
  let res: string = ''
  if (s.length === 1) {
    res = s
  } else if (s.length > 1) {
    // res = s.charAt(0)
    // for (let i = 0; i < s.length - 1; i++) {
    //   for (let j = i + 1; j < s.length; j++) {
    //     let testStr: string = s.slice(i, j + 1)
    //     if (testStr.length > res.length && valid(testStr)) {
    //       res = testStr
    //     }
    //   }
    // }
    let sArr: string[] = s.split('')
    let resArr: string [] = sArr.slice(0, 1)
    for (let i: number = 0; i < sArr.length - 1; i++) {
      let strArr1: string[] = []
      let strArr2: string[] = []
      if (i !== 0) {
        strArr1 = centerSpread(sArr, i, i)
      }
      strArr2 = centerSpread(sArr, i, i + 1)
      if (strArr1.length > strArr2.length) {
        if (strArr1.length > resArr.length) {
          resArr = strArr1
        }
      } else {
        if (strArr2.length > resArr.length) {
          resArr = strArr2
        }
      }
    }
    res = resArr.join('')
  }
  return res;
}
/**
 * @description 是否是回文
 * @author angle
 * @date 2019-11-19
 * @export
 * @param {string} s
 * @returns {boolean}
 */
export function valid (s: string): boolean {
  return s.split('').reverse().join('') === s
}
/**
 * @description 中心扩散查找最大回文数组
 * @author angle
 * @date 2019-11-21
 * @export
 * @param {string[]} strArr 目标数组
 * @param {number} left 中心左索引
 * @param {number} right 中心右索引
 * @returns {string[]} 最大回文数组
 */
export function centerSpread (strArr: string[], left: number, right: number): string[] {
  while (left >= 0 && right < strArr.length) {
    if (strArr[left] === strArr[right]) {
      left--;
      right++;
    } else {
      break;
    }
  }
  return left + 1 === right ? [] : strArr.slice(left + 1, right);
}
