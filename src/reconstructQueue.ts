/**
 * @description 返回的队列应该格式化为数组
 * @author angle
 * @date 2021-11-22
 * @export
 * @param {number[][]} people
 * @returns {number[][]}
 */
export function reconstructQueue(people: number[][]): number[][] {
  return people
    .sort((itemA, itemB) => (itemA[0] === itemB[0] ? itemA[1] - itemB[1] : itemB[0] - itemA[0]))
    .reduce<number[][]>((prev, curr) => {
      prev.splice(curr[1], 0, curr);
      return prev;
    }, []);
}
