/**
 * @description 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引
 * @author angle
 * @date 2021-10-20
 * @export
 * @param {string} s
 * @returns {number}
 */
export function firstUniqChar(s: string): number {
  const queue: string[] = [];
  const hash: Record<string, number> = {};
  for (let i: number = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = i;
      queue.push(s[i]);
    } else if (hash[s[i]] !== undefined) {
      hash[s[i]] = -1;
      if (queue[0] === s[i]) {
        while (queue.length && hash[queue[0]] === -1) {
          queue.shift();
        }
      }
    }
  }
  return queue.length ? hash[queue[0]] : -1;
}
