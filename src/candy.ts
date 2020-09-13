/**
 * @description 老师给这些孩子分发糖果 每个孩子至少分配到 1 个糖果  相邻的孩子中，评分高的孩子必须获得更多的糖果。
 * @author angle
 * @date 2020-09-14
 * @export
 * @param {number[]} ratings
 * @returns {number}
 */
export function candy(ratings: number[]): number {
  if (ratings.length) {
    let res: number = 1;
    const arr: number[] = [1];
    for (let i: number = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
        arr.push(arr[i - 1] + 1);
        res += arr[i];
      } else if (arr[i - 1] === 1) {
        let target: number = i;
        arr.push(1);
        res += 1;
        while (
          ratings[target] < ratings[target - 1] &&
          arr[target] >= arr[target - 1] &&
          target >= 1
        ) {
          arr[target - 1] = arr[target] + 1;
          res += 1;
          target--;
        }
      } else {
        arr.push(1);
        res += 1;
      }
    }
    return res;
  }
  return 0;
}
