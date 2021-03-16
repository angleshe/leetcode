export function add(num1: string, num2: string): string {
  let l1 = num1.length - 1;
  let l2 = num2.length - 1;
  let carry: number = 0;
  let res: string = '';
  while (l1 >= 0 || l2 >= 0 || carry) {
    const n1 = l1 >= 0 ? parseInt(num1[l1--]) : 0;
    const n2 = l2 >= 0 ? parseInt(num2[l2--]) : 0;
    const sum = n1 + n2 + carry;
    res = (sum % 10).toString() + res;
    if (sum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
  }

  return res;
}
function dfs(num: string, i: number, j: number, k: number): boolean {
  if ((num[i] === '0' && j - i > 1) || (num[j] === '0' && k - j > 1)) {
    return false;
  }
  const num1 = num.substring(i, j);
  const num2 = num.substring(j, k);
  const res = add(num1, num2);
  const resStr = num.substr(k, res.length);
  if (res === resStr) {
    if (k + resStr.length === num.length) {
      return true;
    }
    return dfs(num, j, k, k + resStr.length);
  }
  return false;
}
/**
 * @description 判断是否数字可以形成累加序列
 * @author angle
 * @date 2021-03-16
 * @export
 * @param {string} num
 * @returns {boolean}
 */
export function isAdditiveNumber(num: string): boolean {
  for (let i: number = 1; i < num.length - 1; i++) {
    for (let j: number = i + 1; j < num.length; j++) {
      if (dfs(num, 0, i, j)) {
        return true;
      }
    }
  }
  return false;
}
