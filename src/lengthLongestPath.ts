/**
 * @description 文件系统中 指向文件的最长绝对路径 的长度
 * @author angle
 * @date 2021-10-21
 * @export
 * @param {string} input
 * @returns {number}
 */
export function lengthLongestPath(input: string): number {
  let isFile: boolean = false;
  let name: string = '';
  let deep: number = 0;
  let length: number = 0;
  const sum: number[] = [];

  for (let i: number = 0; i < input.length; i++) {
    const isSymbol = input[i] === '\n' || input[i] === '\t';
    if (!isSymbol) {
      name += input[i];
      if (input[i] === '.') {
        isFile = true;
      }
    }

    if (i === input.length - 1 || isSymbol) {
      if (input[i] === '\t') {
        deep++;
      } else {
        if (isFile) {
          length = Math.max(length, (deep === 0 ? 0 : sum[deep - 1]) + name.length);
        } else {
          if (deep >= sum.length) {
            sum.push((deep === 0 ? 0 : sum[sum.length - 1]) + name.length + 1);
          } else {
            sum[deep] = (deep === 0 ? 0 : sum[deep - 1]) + name.length + 1;
          }
        }
        isFile = false;
        name = '';
        deep = 0;
      }
    }
  }

  return length;
}
