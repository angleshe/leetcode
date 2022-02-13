/**
 * @description 返回s中唯一的p的非空子串的数量
 * @author angle
 * @date 2022-02-13
 * @export
 * @param {string} p
 * @returns {number}
 */
export function findSubstringInWraproundString(p: string): number {
  const map = new Map<string, number>();
  p = '^' + p;
  if (p.length) {
    let pre: number = 0;
    let res: number = 0;
    for (let i = 1; i < p.length; i++) {
      const diff = p.charCodeAt(i) - p.charCodeAt(i - 1);
      if (diff === 1 || diff === -25) {
        pre++;
      } else {
        pre = 1;
      }
      if (map.has(p[i])) {
        map.set(p[i], Math.max(map.get(p[i])!, pre));
      } else {
        map.set(p[i], pre);
      }
    }
    map.forEach((value) => (res += value));
    return res;
  }
  return 0;
}
