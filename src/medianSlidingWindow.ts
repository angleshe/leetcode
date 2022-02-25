class Heap {
  private data: number[];
  private compareFn: (a: number, b: number) => boolean;

  get length(): number {
    return this.data.length;
  }

  get top(): number {
    return this.data?.[0] ?? 0;
  }

  private heapUp(): void {
    let target = this.length - 1;
    while (target) {
      // eslint-disable-next-line no-bitwise
      const parentIndex = (target - 1) >> 1;
      if (this.compareFn(this.data[target], this.data[parentIndex])) {
        [this.data[parentIndex], this.data[target]] = [this.data[target], this.data[parentIndex]];
        target = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapDown(): void {
    let target = 0;
    const len = this.length;
    // eslint-disable-next-line no-bitwise
    const max = (len - 1) >> 1;
    while (target <= max) {
      const leftChildIndex = target * 2 + 1;
      const rightChildIndex = leftChildIndex + 1;
      if (rightChildIndex < len) {
        if (this.compareFn(this.data[leftChildIndex], this.data[rightChildIndex])) {
          if (this.compareFn(this.data[leftChildIndex], this.data[target])) {
            [this.data[leftChildIndex], this.data[target]] = [
              this.data[target],
              this.data[leftChildIndex]
            ];
            target = leftChildIndex;
          } else {
            break;
          }
        } else if (this.compareFn(this.data[rightChildIndex], this.data[target])) {
          [this.data[rightChildIndex], this.data[target]] = [
            this.data[target],
            this.data[rightChildIndex]
          ];
          target = rightChildIndex;
        } else {
          break;
        }
      } else if (this.compareFn(this.data[leftChildIndex], this.data[target])) {
        [this.data[leftChildIndex], this.data[target]] = [
          this.data[target],
          this.data[leftChildIndex]
        ];
        target = leftChildIndex;
      } else {
        break;
      }
    }
  }

  constructor(compareFn: (a: number, b: number) => boolean) {
    this.compareFn = compareFn;
    this.data = [];
  }

  pop(): number {
    if (this.length) {
      const res = this.data.shift()!;
      if (this.length) {
        this.data.unshift(this.data.pop()!);
        this.heapDown();
      }
      return res;
    }
    throw 'Heap is empty';
  }

  insert(num: number): void {
    this.data.push(num);
    this.heapUp();
  }
}

/**
 * @description 找出每次窗口移动后得到的新窗口中元素的中位数
 * @author angle
 * @date 2022-02-25
 * @export
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function medianSlidingWindow(nums: number[], k: number): number[] {
  const maxHeap = new Heap((a, b) => a > b);
  const minHeap = new Heap((a, b) => a < b);
  let maxHeapSize: number = 0;
  let minHeapSize: number = 0;
  const delayed = new Map<number, number>();

  function prune(heap: Heap): void {
    while (heap.length) {
      if (delayed.has(heap.top)) {
        const key = heap.pop();
        const count = delayed.get(key)!;
        if (count === 1) {
          delayed.delete(key);
        } else {
          delayed.set(key, count - 1);
        }
      } else {
        break;
      }
    }
  }

  function makeBalance(): void {
    if (maxHeapSize - minHeapSize > 1) {
      minHeap.insert(maxHeap.pop());
      maxHeapSize--;
      minHeapSize++;
      prune(maxHeap);
    } else if (minHeapSize > maxHeapSize) {
      maxHeap.insert(minHeap.pop());
      minHeapSize--;
      maxHeapSize++;
      prune(minHeap);
    }
  }

  function insert(num: number): void {
    if (maxHeap.length === 0 || maxHeap.top < num) {
      minHeap.insert(num);
      minHeapSize++;
    } else {
      maxHeap.insert(num);
      maxHeapSize++;
    }
    makeBalance();
  }

  function erase(num: number): void {
    if (delayed.has(num)) {
      delayed.set(num, delayed.get(num)! + 1);
    } else {
      delayed.set(num, 1);
    }
    if (maxHeap.top < num) {
      minHeapSize--;
      if (num === minHeap.top) {
        prune(minHeap);
      }
    } else {
      maxHeapSize--;
      if (num === maxHeap.top) {
        prune(maxHeap);
      }
    }
  }

  function getMedian(): number {
    return k % 2 ? maxHeap.top : (maxHeap.top + minHeap.top) / 2;
  }
  const res: number[] = [];
  for (let i = 0; i < k; i++) {
    insert(nums[i]);
  }

  res.push(getMedian());
  for (let i = k; i < nums.length; i++) {
    erase(nums[i - k]);
    insert(nums[i]);
    res.push(getMedian());
  }

  return res;
}
