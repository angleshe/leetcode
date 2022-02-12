/**
 * @description 找出一个最大整数 m ，以满足 str = [str2, m] 可以从 str1 获得
 * @author angle
 * @date 2022-02-12
 * @export
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @returns {number}
 */
export function getMaxRepetitions(s1: string, n1: number, s2: string, n2: number): number {
  let index: number = 0;
  let s2Count: number = 0;
  const cache = new Map<number, [number, number]>();
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[j] === s2[index]) {
        if (index === s2.length - 1) {
          s2Count++;
          index = 0;
        } else {
          index++;
        }
      }
    }
    if (cache.has(index)) {
      const [startS1Index, startS2Count] = cache.get(index)!;
      const loopS1 = i - startS1Index;
      const loopS2 = s2Count - startS2Count;
      let endCount: number = 0;
      const residues = (n1 - (startS1Index + 1)) % loopS1;
      for (let i = 0; i < residues; i++) {
        for (let j = 0; j < s1.length; j++) {
          if (s1[j] === s2[index]) {
            if (index === s2.length - 1) {
              endCount++;
              index = 0;
            } else {
              index++;
            }
          }
        }
      }
      const count =
        startS2Count + Math.floor((n1 - (startS1Index + 1)) / loopS1) * loopS2 + endCount;
      return Math.floor(count / n2);
    }
    cache.set(index, [i, s2Count]);
  }
  return Math.floor(s2Count / n2);
}
