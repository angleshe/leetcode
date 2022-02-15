function rand7(): number {
  return Math.floor(7 * Math.random()) + 1;
}
/**
 * @description 生成 [1,10] 范围内的均匀随机整数
 * @author angle
 * @date 15/02/2022
 * @export
 * @return {*}  {number}
 */
export function rand10(): number {
  let num = (rand7() - 1) * 7 + rand7();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (num <= 40) {
      return 1 + (num % 10);
    }
    num = (num - 40 - 1) * 7 + rand7();
    if (num <= 60) {
      return 1 + (num % 10);
    }
    num = (num - 60 - 1) * 7 + rand7();
    if (num <= 20) {
      return 1 + (num % 10);
    }
  }
}
