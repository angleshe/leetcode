/**
 * @description 猜数字
 * @author angle
 * @date 2021-03-09
 * @export
 * @param {string} secret
 * @param {string} guess
 * @returns {string}
 */
export function getHint(secret: string, guess: string): string {
  const arr = Array<number>(10).fill(0);
  let bulls: number = 0;
  for (let i: number = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      arr[parseInt(secret[i])]++;
      arr[parseInt(guess[i])]--;
    }
  }
  const count = arr.reduce((prev, curr) => (curr > 0 ? prev + curr : prev), 0);
  const cows = secret.length - count - bulls;
  return `${bulls}A${cows}B`;
}
