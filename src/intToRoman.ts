/**
 * @description 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 * @author angle
 * @date 2019-12-16
 * @export
 * @param {number} num 待转换的数字
 * @returns {string} 转换后的数字
 */
export function intToRoman(num: number): string {
  let res: string = '';
  // let count: number = Math.floor(num / 1000);
  // for (let i = 0; i < count; i++) {
  //   res += 'M';
  // }
  // num %= 1000;
  // if (num >= 900) {
  //   res += 'CM';
  //   num -= 900;
  // }
  // if (num >= 500) {
  //   res += 'D';
  //   num -= 500;
  // }
  // if (num >= 400) {
  //   res += 'CD';
  //   num -= 400;
  // }
  // count = Math.floor(num / 100);
  // for (let i = 0; i < count; i++) {
  //   res += 'C';
  // }
  // num %= 100;
  // if (num >= 90) {
  //   res += 'XC';
  //   num -= 90;
  // }
  // if (num >= 50) {
  //   res += 'L';
  //   num -= 50;
  // }
  // if (num >= 40) {
  //   res += 'XL';
  //   num -= 40;
  // }
  // count = Math.floor(num / 10);
  // for (let i = 0; i < count; i++) {
  //   res += 'X';
  // }
  // num %= 10;
  // if (num >= 9) {
  //   res += 'IX';
  //   num -= 9;
  // }
  // if (num >= 5) {
  //   res += 'V';
  //   num -= 5;
  // }
  // if (num >= 4) {
  //   res += 'IV';
  //   num -= 4;
  // }
  // for (let i = 0; i < num; i++) {
  //   res += 'I';
  // }
  const numberArr: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArr: string[] = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];
  for (let i = 0; i < numberArr.length; i++) {
    while (num >= numberArr[i]) {
      res += romanArr[i];
      num -= numberArr[i];
    }
  }
  return res;
}
