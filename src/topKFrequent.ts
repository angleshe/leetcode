/* eslint-disable no-bitwise */
function siftUp(heap: Array<[number, number]>): void {
  let child: number = heap.length - 1;
  while (child >> 1 > 0 && heap[child][1] < heap[child >> 1][1]) {
    [heap[child], heap[child >> 1]] = [heap[child >> 1], heap[child]];
    child >>= 1;
  }
}

function siftDown(heap: Array<[number, number]>): void {
  let target: number = 1;
  while (target << 1 < heap.length) {
    let child: number = target << 1;
    if ((child | 1) < heap.length && heap[child][1] > heap[child | 1][1]) {
      child |= 1;
    }
    if (heap[target][1] > heap[child][1]) {
      [heap[target], heap[child]] = [heap[child], heap[target]];
      target = child;
    } else {
      break;
    }
  }
}

/**
 * @description 返回nums出现频率前 k 高的元素
 * @author angle
 * @date 2021-06-11
 * @export
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function topKFrequent(nums: number[], k: number): number[] {
  const numMap = new Map<number, number>();
  nums.forEach((num) => {
    numMap.set(num, (numMap.get(num) ?? 0) + 1);
  });

  const heap: Array<[number, number]> = [[0, 0]];
  let i: number = 0;
  numMap.forEach((value, key) => {
    if (i < k) {
      heap.push([key, value]);
      siftUp(heap);
    } else {
      if (value > heap[1][1]) {
        heap[1] = [key, value];
        siftDown(heap);
      }
    }
    i++;
  });

  const res: number[] = [];
  for (let j: number = 1; j < k + 1; j++) {
    res.push(heap[j][0]);
  }
  return res;
}
