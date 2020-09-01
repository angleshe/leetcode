/**
 * @description 检查两个字符串是否相差一个字符
 * @author angle
 * @date 2020-09-01
 * @export
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
export function transformCheck(str1: string, str2: string): boolean {
  let differences: number = 0;
  for (let i: number = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i] && differences > 0) {
      return false;
    }
    if (str1[i] !== str2[i]) {
      differences++;
    }
  }
  return true;
}
/**
 * @description 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度
 * @author angle
 * @date 2020-09-01
 * @export
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @returns {number}
 */
export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  if (wordList.includes(endWord)) {
    const map: Map<string, string[]> = new Map<string, string[]>();
    const cost: Map<string, number> = new Map<string, number>();
    const arr: string[] = wordList.includes(beginWord) ? wordList : [beginWord, ...wordList];
    for (let i: number = 0; i < arr.length - 1; i++) {
      cost.set(arr[i], arr[i] === beginWord ? 0 : Infinity);
      for (let j: number = i + 1; j < arr.length; j++) {
        if (transformCheck(arr[i], arr[j])) {
          map.set(arr[i], map.has(arr[i]) ? map.get(arr[i])!.concat([arr[j]]) : [arr[j]]);
          map.set(arr[j], map.has(arr[j]) ? map.get(arr[j])!.concat([arr[i]]) : [arr[i]]);
        }
      }
    }
    cost.set(arr[arr.length - 1], arr[arr.length - 1] === beginWord ? 0 : Infinity);

    const path: string[][] = [[beginWord]];
    while (path.length) {
      const curPath: string[] = path.shift()!;
      const target: string = curPath[curPath.length - 1];
      if (target === endWord) {
        return curPath.length;
      }
      const itemArr = map.get(target);
      if (itemArr) {
        for (let i: number = 0; i < itemArr.length; i++) {
          const itemCost: number = cost.get(target)! + 1;
          if (cost.get(itemArr[i])! >= itemCost) {
            path.push(curPath.concat(itemArr[i]));
            cost.set(itemArr[i], itemCost);
          }
        }
      }
    }
  }
  return 0;
}
