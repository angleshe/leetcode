/**
 * @description 使用长度为 n 的数组 answer 返回获奖
 * @author angle
 * @date 2022-03-23
 * @export
 * @param {number[]} score
 * @returns {string[]}
 */
export function findRelativeRanks(score: number[]): string[] {
  const map = new Map<number, string>();
  [...score]
    .sort((a, b) => b - a)
    .forEach((item, index) => {
      let value: string = (index + 1).toString();

      if (index === 0) {
        value = 'Gold Medal';
      } else if (index === 1) {
        value = 'Silver Medal';
      } else if (index === 2) {
        value = 'Bronze Medal';
      }
      map.set(item, value);
    });
  return score.map<string>((item) => map.get(item)!);
}
