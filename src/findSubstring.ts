/**
 * @description 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * @author angle
 * @date 2020-01-08
 * @export
 * @param {string} s 字符串
 * @param {string[]} words 长度相同的单词
 * @returns {number[]} 所有单词串联形成的子串的起始位置
 */
export function findSubstring(s: string, words: string[]): number[] {
  if (words.length === 0) {
    return [];
  }
  const wordLength: number = words[0].length;
  const substringLength: number = words.length * wordLength;
  const res: number[] = [];
  if (s.length >= substringLength) {
    const wordMap: Record<string, number> = words.reduce<Record<string, number>>((prev, curr) => {
      if (prev[curr] === undefined) {
        prev[curr] = 1;
      } else {
        prev[curr]++;
      }
      return prev;
    }, {});
    for (let ini: number = 0; ini < wordLength; ini++) {
      let i: number = ini;
      let subWordMap: Record<string, number[]> = {};
      while (i <= s.length - substringLength) {
        let j: number = 0;
        while (j < words.length) {
          const key: string = s.substr(i + j * wordLength, wordLength);
          if (!wordMap[key]) {
            i += j * wordLength;
            subWordMap = {};
            break;
          } else {
            if (subWordMap[key]) {
              subWordMap[key].push(j);
              if (subWordMap[key].length > wordMap[key]) {
                const target: number = subWordMap[key].shift() as number;
                i += (target + 1) * wordLength;
                j -= target + 1;
                // eslint-disable-next-line no-loop-func
                Object.keys(subWordMap).forEach((key) => {
                  subWordMap[key] = subWordMap[key].reduce<number[]>((prev, curr) => {
                    curr -= target + 1;
                    if (curr >= 0) {
                      prev.push(curr);
                    }
                    return prev;
                  }, []);
                });
              }
            } else {
              subWordMap[key] = [j];
            }
            if (j === words.length - 1) {
              res.push(i);
              j--;
              i += wordLength;
              // eslint-disable-next-line no-loop-func
              Object.keys(subWordMap).forEach((key) => {
                subWordMap[key] = subWordMap[key].reduce<number[]>((prev, curr) => {
                  if (curr !== 0) {
                    prev.push(curr - 1);
                  }
                  return prev;
                }, []);
              });
            }
          }
          j++;
        }
        i += wordLength;
        subWordMap = {};
      }
    }
  }
  return res;
}
