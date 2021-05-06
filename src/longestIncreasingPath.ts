const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];
/**
 * @description 找出整数矩阵最长递增路径 的长度
 * @author angle
 * @date 2021-05-06
 * @export
 * @param {number[][]} matrix
 * @returns {number}
 */
export function longestIncreasingPath(matrix: number[][]): number {
  let res: number = 0;
  if (matrix.length) {
    const outDegrees: number[][] = [];
    const queue: Array<[number, number]> = [];

    for (let i: number = 0; i < matrix.length; i++) {
      const arr: number[] = [];
      for (let j: number = 0; j < matrix[i].length; j++) {
        const count = dirs.reduce<number>((prev, curr) => {
          const row = i + curr[0];
          const col = j + curr[1];
          if (
            row >= 0 &&
            row < matrix.length &&
            col >= 0 &&
            col < matrix[0].length &&
            matrix[row][col] > matrix[i][j]
          ) {
            prev++;
          }
          return prev;
        }, 0);
        arr.push(count);
        if (count === 0) {
          queue.push([i, j]);
        }
      }
      outDegrees.push(arr);
    }

    while (queue.length) {
      res++;
      const len = queue.length;
      for (let i: number = 0; i < len; i++) {
        const [row, col] = queue.shift()!;
        dirs.forEach((dir) => {
          const newRow = row + dir[0];
          const newCol = col + dir[1];
          if (
            newRow >= 0 &&
            newRow < matrix.length &&
            newCol >= 0 &&
            newCol < matrix[0].length &&
            matrix[row][col] > matrix[newRow][newCol] &&
            --outDegrees[newRow][newCol] === 0
          ) {
            queue.push([newRow, newCol]);
          }
        });
      }
    }
  }
  return res;
}
