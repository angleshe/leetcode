/**
 * @description 清除字符串前面的‘0’
 * @author angle
 * @date 2020-10-14
 * @export
 * @param {string} numStr
 * @returns {string}
 */
export function clearFrontZero(numStr: string): string {
  while (numStr.length > 1 && numStr.startsWith('0')) {
    numStr = numStr.substring(1);
  }
  return numStr;
}
/**
 * @description 比较两个字符串数的大小
 * @author angle
 * @date 2020-10-14
 * @export
 * @param {string} numStr1
 * @param {string} numStr2
 * @returns {number}
 */
export function compare(numStr1: string, numStr2: string): number {
  if (numStr1.length < numStr2.length) {
    return -1;
  }
  if (numStr1.length > numStr2.length) {
    return 1;
  }
  let i: number = 0;
  while (i < numStr1.length) {
    if (numStr1[i] < numStr2[i]) {
      return -1;
    }
    if (numStr1[i] > numStr2[i]) {
      return 1;
    }
    i++;
  }
  return 0;
}
/**
 * @description 比较两个版本号 version1 和 version2。
 * @author angle
 * @date 2020-10-14
 * @export
 * @param {string} version1
 * @param {string} version2
 * @returns {number}
 */
export function compareVersion(version1: string, version2: string): number {
  const version1s = version1.split('.');
  const version2s = version2.split('.');
  let i: number = 0;
  let j: number = 0;
  while (i < version1s.length || j < version2s.length) {
    const num1str: string = i >= version1s.length ? '0' : clearFrontZero(version1s[i++]);
    const num2str: string = j >= version2s.length ? '0' : clearFrontZero(version2s[j++]);
    const res = compare(num1str, num2str);
    if (res) {
      return res;
    }
  }
  return 0;
}
