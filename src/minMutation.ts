const modeArr = ['A', 'C', 'G', 'T'];
function bfs(
  stSet: Set<string>,
  end: string,
  bankSet: Set<string>,
  cacheSet: Set<string>,
  len: number
): number {
  if (stSet.size) {
    const nextSet = new Set<string>();
    for (const str of stSet) {
      for (let i = 0; i < str.length; i++) {
        for (const mode of modeArr) {
          if (str[i] !== mode) {
            const newStr = str.substring(0, i) + mode + str.substring(i + 1);
            if (newStr === end) {
              return len + 1;
            }
            if (bankSet.has(newStr) && !cacheSet.has(newStr)) {
              nextSet.add(newStr);
              cacheSet.add(newStr);
            }
          }
        }
      }
    }
    return bfs(nextSet, end, bankSet, cacheSet, len + 1);
  }
  return -1;
}

/**
 * @description 找出能够使起始基因序列变化为目标基因序列所需的最少变化次数。如果无法实现目标变化，请返回 -1
 * @author angle
 * @date 2021-12-31
 * @export
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @returns {number}
 */
export function minMutation(start: string, end: string, bank: string[]): number {
  const bankSet: Set<string> = new Set(bank);
  if (bankSet.has(end)) {
    return bfs(new Set([start]), end, bankSet, new Set(), 0);
  }
  return -1;
}
