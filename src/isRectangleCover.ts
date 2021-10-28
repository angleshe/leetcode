/**
 * @description 判断N个与坐标轴对齐的矩形是否能精确地覆盖一个矩形区域
 * @author angle
 * @date 2021-10-28
 * @export
 * @param {number[][]} rectangles
 * @returns {boolean}
 */
export function isRectangleCover(rectangles: number[][]): boolean {
  const rectangleCover: [number, number, number, number] = [
    Infinity,
    Infinity,
    -Infinity,
    -Infinity
  ];
  let area: number = 0;
  const pointSet = new Set<string>();
  for (let i: number = 0; i < rectangles.length; i++) {
    const [x1, y1, x2, y2] = rectangles[i];
    area += (x2 - x1) * (y1 - y2);
    rectangleCover[0] = Math.min(rectangleCover[0], x1);
    rectangleCover[1] = Math.min(rectangleCover[1], y1);
    rectangleCover[2] = Math.max(rectangleCover[2], x2);
    rectangleCover[3] = Math.max(rectangleCover[3], y2);
    const pointArr = [`${x1},${y2}`, `${x2},${y2}`, `${x2},${y1}`, `${x1},${y1}`];
    pointArr.forEach((point) =>
      pointSet.has(point) ? pointSet.delete(point) : pointSet.add(point)
    );
  }
  const [x1, y1, x2, y2] = rectangleCover;

  return (
    pointSet.size === 4 &&
    area === (x2 - x1) * (y1 - y2) &&
    [`${x1},${y2}`, `${x2},${y2}`, `${x2},${y1}`, `${x1},${y1}`].every((point) =>
      pointSet.has(point)
    )
  );
}
