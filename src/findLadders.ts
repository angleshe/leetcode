/**
 * @description 检查两个字符串是否相差一个字符
 * @author angle
 * @date 2020-08-31
 * @export
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
export function transformCheck(str1: string, str2: string): boolean {
  let differences: number = 0;
  for (let i: number = 0; i < str1.length; i++) {
    if (differences === 1 && str1[i] !== str2[i]) {
      return false;
    } else if (str1[i] !== str2[i]) {
      differences++;
    }
  }
  return true;
}
/**
 * @description 给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列
 * @author angle
 * @date 2020-08-31
 * @export
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @returns {string[][]}
 */
export function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
  const res: string[][] = [];
  if (wordList.includes(endWord)) {
    const map: Map<string, string[]> = new Map<string, string[]>();
    const cost: Map<string, number> = new Map<string, number>();
    const arr: string[] = wordList.includes(beginWord) ? wordList : [beginWord, ...wordList];
    for (let i: number = 0; i < arr.length - 1; i++) {
      cost.set(arr[i], arr[i] === beginWord ? 0 : Infinity);
      for (let j: number = i + 1; j < arr.length; j++) {
        if (transformCheck(arr[i], arr[j])) {
          map.set(arr[i], map.has(arr[i]) ? map.get(arr[i])!.concat(arr[j]) : [arr[j]]);
          map.set(arr[j], map.has(arr[j]) ? map.get(arr[j])!.concat(arr[i]) : [arr[i]]);
        }
      }
    }
    cost.set(arr[arr.length - 1], arr[arr.length - 1] === beginWord ? 0 : Infinity);

    const queue: string[][] = [[beginWord]];
    while (queue.length) {
      const path: string[] = queue.shift()!;
      const target: string = path[path.length - 1];
      if (target === endWord) {
        res.push(path);
      } else {
        const edges = map.get(target);
        if (edges) {
          for (let i: number = 0; i < edges.length; i++) {
            const itemCost: number = cost.get(target)! + 1;
            if (cost.get(edges[i])! >= itemCost) {
              cost.set(edges[i], itemCost);
              queue.push(path.concat(edges[i]));
            }
          }
        }
      }
    }
  }
  return res;
}
