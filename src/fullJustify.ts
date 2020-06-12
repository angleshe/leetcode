/**
 * @description 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本,要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 * @author angle
 * @date 2020-06-12
 * @export
 * @param {string[]} words 单词表
 * @param {number} maxWidth 最大长度
 * @returns {string[]} 合成列表
 */
export function fullJustify(words: string[], maxWidth: number): string[] {
  const res: string[] = [];
  let strArray: string[] = [];
  let strLength: number = 0;
  for (let i: number = 0; i < words.length; i++) {
    if (strLength === 0) {
      strArray = [words[i]];
      strLength += words[i].length;
    } else {
      strArray.push(words[i]);
      strLength += 1 + words[i].length;
    }
    if (i === words.length - 1) {
      res.push(strArray.join(' ') + ''.padEnd(maxWidth - strLength, ' '));
    } else if (strLength + 1 + words[i + 1].length > maxWidth) {
      if (strArray.length === 1) {
        res.push(strArray[0] + ''.padEnd(maxWidth - strArray[0].length, ' '));
      } else {
        const averTrimLength: number = Math.floor((maxWidth - strLength) / (strArray.length - 1));
        const remCount: number = (maxWidth - strLength) % (strArray.length - 1);
        res.push(
          strArray.reduce<string>((prev, curr, index, arr) => {
            if (index === arr.length - 1) {
              return prev + curr;
            }
            return (
              prev +
              curr +
              ''.padEnd(index < remCount ? averTrimLength + 2 : averTrimLength + 1, ' ')
            );
          }, '')
        );
      }
      strLength = 0;
    }
  }
  return res;
}
