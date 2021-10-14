/**
 * @description 判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成
 * @author angle
 * @date 2021-10-14
 * @export
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length >= ransomNote.length) {
    const map = Array.prototype.reduce.call<
      string,
      [(prev: Record<string, number>, curr: string) => Record<string, number>, {}],
      Record<string, number>
    >(
      magazine,
      (prev, curr) => {
        if (prev[curr]) {
          prev[curr]++;
        } else {
          prev[curr] = 1;
        }
        return prev;
      },
      {}
    );
    for (let i: number = 0; i < ransomNote.length; i++) {
      if (map[ransomNote[i]]) {
        map[ransomNote[i]]--;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}
