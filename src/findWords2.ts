/**
 * @description 返回可以使用在美式键盘同一行的字母打印出来的单词
 * @author angle
 * @date 2022-03-15
 * @export
 * @param {string[]} words
 * @returns {string[]}
 */
export function findWords(words: string[]): string[] {
  const charsSetArr = [
    new Set('qwertyuiop'.split('')),
    new Set('asdfghjkl'.split('')),
    new Set('zxcvbnm'.split(''))
  ];
  return words.filter((word) => {
    let charsSetIndex: number = 0;
    return Array.prototype.every.call(word.toLowerCase(), (char, i) => {
      const index: number = charsSetArr.findIndex((set) => set.has(char));
      if (i === 0) {
        charsSetIndex = index;
        return true;
      }
      return charsSetIndex === index;
    });
  });
}
