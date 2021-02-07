const to19: string[] = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
];
const tens: string[] = [
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
];

const others: string[] = ['Thousand', 'Million', 'Billion'];

function formatNumber(num: number): string[] {
  if (num === 0) {
    return [];
  }
  if (num < 20) {
    return [to19[num - 1]];
  }
  if (num < 100) {
    return [tens[Math.floor(num / 10) - 2]].concat(formatNumber(num % 10));
  }
  if (num < 1000) {
    return [to19[Math.floor(num / 100) - 1], 'Hundred'].concat(formatNumber(num % 100));
  }
  for (let i: number = 0; i < others.length; i++) {
    if (num < 1000 ** (i + 2)) {
      return formatNumber(Math.floor(num / 1000 ** (i + 1))).concat(
        [others[i]],
        formatNumber(num % 1000 ** (i + 1))
      );
    }
  }
  return [];
}
/**
 * @description 将非负整数 num 转换为其对应的英文表示。
 * @author angle
 * @date 2021-02-07
 * @export
 * @param {number} num
 * @returns {string}
 */
export function numberToWords(num: number): string {
  if (num === 0) {
    return 'Zero';
  }
  return formatNumber(num).join(' ');
}
