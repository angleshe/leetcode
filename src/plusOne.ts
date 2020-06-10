/**
 * @description 由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * @author angle
 * @date 2020-06-10
 * @export
 * @param {number[]} digits 非负整数数组
 * @returns {number[]}
 */
export function plusOne(digits: number[]): number[] {
  for (let i: number = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        return [1].concat(digits);
      }
    } else {
      digits[i] += 1;
      return digits;
    }
  }
  return digits;
}
