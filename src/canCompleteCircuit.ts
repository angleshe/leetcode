/**
 * @description 油箱容量无限的的汽车,返回可以绕环路行驶一周发时加油站的编号, 否则返回 -1
 * @author angle
 * @date 2020-09-11
 * @export
 * @param {number[]} gas 第 i 个加油站有汽油
 * @param {number[]} cost 第 i 个加油站开往第 i+1 个加油站需要消耗汽油
 * @returns {number}
 */
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const difference: number[] = [];
  let surplus: number = 0;
  let res: number = 0;
  let target: number = 0;

  while (res < gas.length) {
    let isCheck: boolean = true;
    if (difference.length > target) {
      surplus += difference[target];
    } else {
      const val: number = gas[target] - cost[target];
      difference.push(val);
      surplus += val;
    }

    while (surplus < 0) {
      surplus -= difference[res++];
      isCheck = false;
    }

    if (target === gas.length - 1) {
      target = 0;
    } else {
      target++;
    }
    if (isCheck && target === res) {
      return res;
    }
  }
  return -1;
}
