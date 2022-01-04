/**
 * @description 寻找右区间
 * @author angle
 * @date 2022-01-04
 * @export
 * @param {number[][]} intervals
 * @returns {number[]}
 */
export function findRightInterval(intervals: number[][]): number[] {
  type DataType = {
    index: number;
    value: number[];
  };
  const res = new Array<number>(intervals.length).fill(-1);
  const dataArr = intervals.map<DataType>((value, index) => ({ value, index }));
  const startArr = dataArr.sort((a, b) => a.value[0] - b.value[0]);
  const endArr = [...dataArr].sort((a, b) => a.value[1] - b.value[1]);
  let startIndex: number = 0;
  for (let i = 0; i < endArr.length; i++) {
    const { index, value } = endArr[i];
    while (startIndex < startArr.length && startArr[startIndex].value[0] < value[1]) {
      startIndex++;
    }
    res[index] = startIndex < startArr.length ? startArr[startIndex].index : -1;
  }
  return res;
}
