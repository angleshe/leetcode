/**
 * @description 移除num数中的k位数字,以字符串形式返回这个最小的数字
 * @author angle
 * @date 2021-11-16
 * @export
 * @param {string} num
 * @param {number} k
 * @returns {string}
 */
export function removeKdigits(num: string, k: number): string {
  let res: string = '';
  let remain: number = num.length - k;
  for (let i: number = 0; i < num.length; i++) {
    while (
      res.length &&
      num.length - i > remain &&
      num.charCodeAt(i) < res.charCodeAt(res.length - 1)
    ) {
      res = res.substr(0, res.length - 1);
      remain++;
    }
    if (remain) {
      res += num[i];
      remain--;
    }
  }
  while (res.startsWith('0')) {
    res = res.substr(1);
  }
  return res.length ? res : '0';
}
