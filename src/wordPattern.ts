/**
 * @description 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * @author angle
 * @date 2021-03-02
 * @export
 * @param {string} pattern
 * @param {string} s
 * @returns {boolean}
 */
export function wordPattern(pattern: string, s: string): boolean {
  const sArr = s.split(' ');
  if (pattern.length !== sArr.length) {
    return false;
  }
  const positiveMap: Map<string, string> = new Map<string, string>();
  const reverseMap: Map<string, string> = new Map<string, string>();
  for (let i: number = 0; i < pattern.length; i++) {
    if (positiveMap.has(pattern[i]) && positiveMap.get(pattern[i]) !== sArr[i]) {
      return false;
    }
    if (reverseMap.has(sArr[i]) && reverseMap.get(sArr[i]) !== pattern[i]) {
      return false;
    }
    positiveMap.set(pattern[i], sArr[i]);
    reverseMap.set(sArr[i], pattern[i]);
  }

  return true;
}
