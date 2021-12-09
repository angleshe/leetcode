const zeroCode: number = '0'.charCodeAt(0);
export function addStrings(num1: string, num2: string): string {
  let i: number = 0;
  let bit: number = 0;
  let res: string = '';
  while (i < num1.length || i < num2.length || bit !== 0) {
    const count =
      (i < num1.length ? num1.charCodeAt(num1.length - 1 - i) - zeroCode : 0) +
      (i < num2.length ? num2.charCodeAt(num2.length - 1 - i) - zeroCode : 0) +
      bit;
    bit = count > 9 ? 1 : 0;
    res = `${count > 9 ? count - 10 : count}${res}`;
    i++;
  }
  return res ? res : '0';
}
