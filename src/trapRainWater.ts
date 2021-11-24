/* eslint-disable no-bitwise */
class Heap<T> {
  private heap: Array<T>;
  private compare: (a: T, b: T) => number;

  constructor(compareFn: (a: T, b: T) => number) {
    this.heap = [];
    this.compare = compareFn;
  }

  private siftUp(): void {
    let target = this.heap.length - 1;
    while (target > 0) {
      const parentIndex = (target - 1) >> 1;
      if (this.compare(this.heap[parentIndex], this.heap[target]) > 0) {
        [this.heap[parentIndex], this.heap[target]] = [this.heap[target], this.heap[parentIndex]];
        target = parentIndex;
      } else {
        break;
      }
    }
  }

  private siftDown(): void {
    let target = 0;
    const halfLength = this.heap.length >> 1;
    while (target < halfLength) {
      const leftChildIndex = (target << 1) + 1;
      const rightChildIndex = leftChildIndex + 1;

      if (this.compare(this.heap[target], this.heap[leftChildIndex]) > 0) {
        if (
          rightChildIndex < this.heap.length &&
          this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex]) > 0
        ) {
          [this.heap[target], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[target]
          ];
          target = rightChildIndex;
        } else {
          [this.heap[target], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[target]
          ];
          target = leftChildIndex;
        }
      } else if (
        rightChildIndex < this.heap.length &&
        this.compare(this.heap[target], this.heap[rightChildIndex]) > 0
      ) {
        [this.heap[target], this.heap[rightChildIndex]] = [
          this.heap[rightChildIndex],
          this.heap[target]
        ];
        target = rightChildIndex;
      } else {
        break;
      }
    }
  }

  add(data: T): void {
    this.heap.push(data);
    this.siftUp();
  }

  poll(): T | undefined {
    const res = this.heap.shift();
    if (this.heap.length) {
      this.heap.unshift(this.heap.pop()!);
      this.siftDown();
    }
    return res;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
/**
 * @description 计算图中形状最多能接多少体积的雨水
 * @author angle
 * @date 2021-11-24
 * @export
 * @param {number[][]} heightMap
 * @returns {number}
 */
export function trapRainWater(heightMap: number[][]): number {
  const rows = heightMap.length;
  let res: number = 0;
  if (rows !== 0) {
    const cols = heightMap[0].length;
    const vis: boolean[][] = Array.from(Array(rows), () => Array(cols).fill(false));
    const minHeap = new Heap<[number, number, number]>((a, b) => a[2] - b[2]);
    for (let i = 0; i < cols; i++) {
      minHeap.add([i, 0, heightMap[0][i]]);
      minHeap.add([i, rows - 1, heightMap[rows - 1][i]]);
      vis[0][i] = vis[rows - 1][i] = true;
    }

    for (let i = 1; i < rows - 1; i++) {
      minHeap.add([0, i, heightMap[i][0]]);
      minHeap.add([cols - 1, i, heightMap[i][cols - 1]]);
      vis[i][0] = vis[i][cols - 1] = true;
    }

    const posArr = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];

    while (!minHeap.isEmpty()) {
      const [x, y, h] = minHeap.poll()!;
      for (const pos of posArr) {
        const newX = x + pos[0];
        const newY = y + pos[1];
        if (newX >= 0 && newY >= 0 && newX < cols && newY < rows && !vis[newY][newX]) {
          if (heightMap[newY][newX] < h) {
            res += h - heightMap[newY][newX];
          }
          minHeap.add([newX, newY, Math.max(h, heightMap[newY][newX])]);
          vis[newY][newX] = true;
        }
      }
    }
  }
  return res;
}
