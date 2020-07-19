function dfs(s: string, res: string[], path: string[], index: number): void {
  if (index >= s.length || path.length === 4) {
    if (index === s.length && path.length === 4) {
      res.push(path.join('.'));
    }
  } else {
    if (s[index] !== '0') {
      for (let i: number = 1; i <= 3; i++) {
        if (index + i <= s.length) {
          const str: string = s.slice(index, index + i);
          if (parseInt(str) <= 255) {
            path.push(str);
            dfs(s, res, path, index + i);
            path.pop();
          }
        }
      }
    } else {
      path.push('0');
      dfs(s, res, path, index + 1);
      path.pop();
    }
  }
}
/**
 * @description 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * @author angle
 * @date 2020-07-20
 * @export
 * @param {string} s
 * @returns {string[]}
 */
export function restoreIpAddresses(s: string): string[] {
  const res: string[] = [];
  dfs(s, res, [], 0);
  return res;
}
