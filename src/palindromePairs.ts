export function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }
  return true;
}
/**
 * @description 找出所有 不同 的索引对 (i, j)使words[i] + words[j]接成回文串
 * @author angle
 * @date 2021-05-19
 * @export
 * @param {string[]} words
 * @returns {number[][]}
 */
export function palindromePairs(words: string[]): number[][] {
  const map = new Map<string, number>();
  words.forEach((word, index) => {
    map.set(
      word
        .split('')
        .reverse()
        .join(''),
      index
    );
  });
  const res: number[][] = [];
  words.forEach((word, index) => {
    for (let i: number = 0; i < word.length; i++) {
      const leftStr = word.substring(0, i);
      const rightStr = word.substring(i);
      if (isPalindrome(leftStr) && map.has(rightStr)) {
        const ind = map.get(rightStr)!;
        if (ind !== index) {
          res.push([ind, index]);
        }
      }
      if (isPalindrome(rightStr) && map.has(leftStr)) {
        const ind = map.get(leftStr)!;
        if (ind !== index) {
          res.push([index, ind]);
          if (leftStr === '') {
            res.push([ind, index]);
          }
        }
      }
    }
  });
  return res;
}
