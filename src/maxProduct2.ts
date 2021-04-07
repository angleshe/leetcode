/* eslint-disable no-bitwise */
/**
 * @description 找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。
 * @author angle
 * @date 2021-04-07
 * @export
 * @param {string[]} words
 * @returns {number}
 */
export function maxProduct(words: string[]): number {
  const masks: number[] = words.map<number>((word) => {
    let mask: number = 0;
    for (let i: number = 0; i < word.length; i++) {
      mask |= 1 << (word.charCodeAt(i) - 'a'.charCodeAt(0));
    }
    return mask;
  });

  let res: number = 0;
  for (let i: number = 0; i < words.length - 1; i++) {
    for (let j: number = i + 1; j < words.length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }
  return res;
}
