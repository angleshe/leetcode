type HeapItemType = {
  value: number;
  x: number;
  y: number;
};
/**
 * @description 找到每行和每列元素均按升序排序矩阵中第 k 小的元素
 * @author angle
 * @date 2021-09-27
 * @export
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */
export function kthSmallest(matrix: number[][], k: number): number {
  const len = matrix.length;
  const heap: Array<HeapItemType> = matrix[0].map<HeapItemType>((value, x) => ({ value, x, y: 0 }));
  for (let i = 0; i < k - 1; i++) {
    const target = heap.shift()!;
    if (heap.length) {
      heap.unshift(heap.pop()!);
      let j = 0;
      while (j < heap.length) {
        const childLeftIndex = 2 * j + 1;
        const childRightIndex = childLeftIndex + 1;
        if (childLeftIndex < heap.length) {
          const childLeft = heap[childLeftIndex].value;
          const childRight = childRightIndex < heap.length ? heap[childRightIndex].value : Infinity;

          if (heap[j].value <= childLeft && heap[j].value <= childRight) {
            break;
          }
          const targetIndex: number = childRight < childLeft ? childRightIndex : childLeftIndex;
          [heap[j], heap[targetIndex]] = [heap[targetIndex], heap[j]];
          j = targetIndex;
        } else {
          break;
        }
      }
    }
    const targetY = target.y + 1;
    if (targetY < len) {
      heap.push({
        value: matrix[targetY][target.x],
        x: target.x,
        y: targetY
      });
      let j = heap.length - 1;
      let targetIndex = Math.floor((j - 1) / 2);

      while (targetIndex >= 0 && heap[targetIndex].value > heap[j].value) {
        [heap[targetIndex], heap[j]] = [heap[j], heap[targetIndex]];
        j = targetIndex;
        targetIndex = Math.floor((j - 1) / 2);
      }
    }
  }
  return heap.shift()!.value;
}
