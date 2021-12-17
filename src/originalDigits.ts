const map: Record<string, number> = {
  z: 0,
  o: 1,
  w: 2,
  r: 3,
  u: 4,
  f: 5,
  x: 6,
  v: 7,
  g: 8,
  i: 9
};
/**
 * @description 按升序返回原始的数字
 * @author angle
 * @date 2021-12-17
 * @export
 * @param {string} s
 * @returns {string}
 */
export function originalDigits(s: string): string {
  const counts = Array<number>(10).fill(0);
  for (let i: number = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      counts[map[s[i]]]++;
    }
  }
  counts[1] -= counts[0] + counts[2] + counts[4];
  counts[3] -= counts[0] + counts[4];
  counts[5] -= counts[4];
  counts[7] -= counts[5];
  counts[9] -= counts[5] + counts[6] + counts[8];

  return counts.reduce<string>((prev, curr, index) => {
    return curr === 0
      ? prev
      : prev +
          Array<string>(curr)
            .fill(index.toString())
            .join('');
  }, '');
}
