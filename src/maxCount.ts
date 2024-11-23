export function maxCount(m: number, n: number, ops: number[][]): number {
  const [a, b] = ops.reduce<[number, number]>(
    ([x1, y1], [x2, y2]) => [Math.min(x1, x2), Math.min(y1, y2)],
    [m, n]
  );
  return a * b;
}
