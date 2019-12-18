/**
 * @description 数组中是是否带有共同前缀
 * @author angle
 * @date 2019-12-18
 * @export
 * @param {string[]} strs 数组
 * @param {string} prefix 前缀
 * @returns {boolean} 是否带有共同前缀
 */
export function isCommonPrefix(strs: string[], prefix: string): boolean {
  return !prefix || strs.every((item: string) => item.startsWith(prefix));
}

/**
 * @description 获取数组最短长度的索引
 * @author angle
 * @date 2019-12-18
 * @export
 * @param {string[]} arr 数组
 * @returns {number} 最短长度的索引
 */
export function getMinLengthForIndex(arr: string[]): number {
  let res: number = 0;
  if (!arr.length) {
    return -1;
  }
  arr.forEach((item: string, index: number) => {
    if (item.length < arr[res].length) {
      res = index;
    }
  });
  return res;
}
/**
 * @description 查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * @author angle
 * @date 2019-12-18
 * @export
 * @param {string[]} strs 字符串数组
 * @returns {string} 最长前缀
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  } else if (strs.length === 1) {
    return strs[0];
  }
  const str: string = strs.splice(getMinLengthForIndex(strs), 1)[0];
  if (isCommonPrefix(strs, str)) {
    return str;
  }
  let oldIndex: number = 0;
  let end: number = Math.floor((str.length - 1 - oldIndex) / 2);
  while (oldIndex !== end) {
    if (isCommonPrefix(strs, str.substring(0, end + 1))) {
      [oldIndex, end] = [
        end,
        end + Math.floor(((end > oldIndex ? str.length : oldIndex) - end) / 2)
      ];
    } else {
      [oldIndex, end] = [end, end - Math.floor((end - (end > oldIndex ? oldIndex : 0)) / 2)];
    }
  }
  return end <= 1 && !isCommonPrefix(strs, str.substring(0, 1))
    ? ''
    : str.substring(0, Math.max(end, 1));

  // let start: number = 0;

  // const res: string = '';
  // for (let i: number = 0; i < strs[0].length; i++) {
  //   if (strArr.every((item: string) => item[i] && item[i] === strs[0][i])) {
  //     res += strs[0][i];
  //   } else {
  //     break;
  //   }
  // }
  // return res;
}
