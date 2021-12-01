/**
 * @description Fizz Buzz
 * @author angle
 * @date 2021-12-01
 * @export
 * @param {number} n
 * @returns {string[]}
 */
export function fizzBuzz(n: number): string[] {
  const answer: string[] = [];
  for (let i = 1; i <= n; i++) {
    let str: string = '';
    if (i % 3 === 0) {
      str += 'Fizz';
    }
    if (i % 5 === 0) {
      str += 'Buzz';
    } else if (!str) {
      str = i.toString();
    }
    answer.push(str);
  }
  return answer;
}
