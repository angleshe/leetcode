/**
 * @description 计算两数相除的结果,循环的部分括在括号内
 * @author angle
 * @date 2020-10-15
 * @export
 * @param {number} numerator
 * @param {number} denominator
 * @returns {string}
 */
export function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator) {
    let fraction: string = '';
    if (numerator < 0 !== denominator < 0) {
      fraction += '-';
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    fraction += Math.floor(numerator / denominator);
    let remainder = numerator % denominator;
    if (remainder) {
      fraction += '.';
      const map: Map<number, number> = new Map<number, number>();
      while (remainder) {
        if (map.has(remainder)) {
          const index = map.get(remainder)!;
          fraction = `${fraction.slice(0, index)}(${fraction.slice(index)})`;
          break;
        }
        map.set(remainder, fraction.length);
        remainder *= 10;
        fraction += Math.floor(remainder / denominator);
        remainder %= denominator;
      }
    }
    return fraction;
  }
  return '0';
}
