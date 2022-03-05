/**
 * @description 构造矩形
 * @author angle
 * @date 2022-03-05
 * @export
 * @param {number} area
 * @returns {number[]}
 */
export function constructRectangle(area: number): number[] {
  for (let i = Math.floor(Math.sqrt(area)); i > 0; i--) {
    if (area % i === 0) {
      return [area / i, i];
    }
  }
  return [];
}
