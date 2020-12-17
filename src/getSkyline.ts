/**
 * @description 按顺序插入值
 * @author angle
 * @date 2020-12-17
 * @export
 * @param {number[]} list
 * @param {number} insertNum
 */
export function insertList(list: number[], insertNum: number): void {
  if (list.length) {
    let left: number = 0;
    let right: number = list.length - 1;
    if (list[left] >= insertNum) {
      list.splice(0, 0, insertNum);
    } else if (list[right] <= insertNum) {
      list.push(insertNum);
    } else {
      while (right - left > 1) {
        const mid: number = left + Math.floor((right - left) / 2);
        if (list[mid] === insertNum) {
          left = mid;
          break;
        } else if (list[mid] < insertNum) {
          left = mid;
        } else {
          right = mid;
        }
      }
      list.splice(left + 1, 0, insertNum);
    }
  } else {
    list.push(insertNum);
  }
}
/**
 * @description 计算筑物形成的天际线
 * @author angle
 * @date 2020-12-17
 * @export
 * @param {number[][]} buildings
 * @returns {number[][]}
 */
export function getSkyline(buildings: number[][]): number[][] {
  const h: Array<[number, number]> = buildings
    .reduce<Array<[number, number]>>((prev, curr) => {
      prev.push([curr[0], -curr[2]]);
      prev.push([curr[1], curr[2]]);
      return prev;
    }, [])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let prev = 0;
  let curr = 0;
  const m: number[] = [0];
  const res: number[][] = [];
  h.forEach((item) => {
    if (item[1] < 0) {
      insertList(m, -item[1]);
    } else {
      m.splice(
        m.findIndex((num) => num === item[1]),
        1
      );
    }
    curr = m[m.length - 1];
    if (curr !== prev) {
      res.push([item[0], curr]);
      prev = curr;
    }
  });
  return res;
}
