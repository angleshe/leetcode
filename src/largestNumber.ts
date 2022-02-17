/**
 * @description 排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数
 * @author angle
 * @date 17/02/2022
 * @export
 * @param {number[]} nums
 * @return {*}  {string}
 */
export function largestNumber(nums: number[]): string {
  const strArr = nums.map<string>((num) => num.toString());
  strArr.sort((a, b) => {
    const str1 = a + b;
    const str2 = b + a;
    if (str1 === str2) {
      return 0;
    }
    if (str1 > str2) {
      return -1;
    }

    return 1;
  });
  const res = strArr.join('');
  if (res.startsWith('0')) {
    return '0';
  }
  return res;
}
