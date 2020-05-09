/**
 * @description 求非负整数字符串 num1 和 num2乘积
 * @author angle
 * @date 2020-05-09
 * @export
 * @param {string} num1 非负整数字符串
 * @param {string} num2 非负整数字符串
 * @returns {string} 乘积
 */
export function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let resArr: number[] = [0];
  for (let i: number = num1.length - 1; i >= 0; i--) {
    const num: number = parseInt(num1[i]);

    for (let j: number = num2.length - 1; j >= 0; j--) {
      const z: number = resArr.length - 1 - (num1.length - 1 - i) - (num2.length - 1 - j);
      if (z >= 0 && z < resArr.length) {
        const sum = num * parseInt(num2[j]) + resArr[z];
        resArr[z] = 0;
        const sumArr: string[] = sum.toString().split('');
        let bit: number = 0;
        let k: number = sumArr.length - 1;
        while (k >= 0 || bit !== 0) {
          const index: number = z - sumArr.length + 1 + k;
          if (index < 0) {
            const count: number = parseInt(sumArr[k] ?? 0) + bit;
            bit = Math.floor(count / 10);
            resArr = [count % 10].concat(resArr);
          } else {
            const count: number = parseInt(sumArr[k] ?? 0) + bit + resArr[index];
            bit = Math.floor(count / 10);
            resArr.splice(index, 1, count % 10);
          }
          k--;
        }
      } else {
        const sum = num * parseInt(num2[j]);
        if (sum > 9) {
          resArr = [Math.floor(sum / 10), sum % 10].concat(resArr);
        } else {
          resArr = [sum].concat(resArr);
        }
      }
    }
  }
  return resArr.join('');
}
