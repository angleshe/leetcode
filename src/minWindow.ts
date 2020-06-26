/**
 * @description 请在字符串 S 里面找出：包含 T 所有字符的最小子串
 * @author angle
 * @date 2020-06-26
 * @export
 * @param {string} s
 * @param {string} t
 * @returns {string} 最小子串
 */
export function minWindow(s: string, t: string): string {
  const hash: Record<string, number> = {};
  const windows: Record<string, number> = {};
  let keyCount: number = 0;
  let res: string = '';
  if (s && t && t.length <= s.length) {
    for (let i: number = 0; i < t.length; i++) {
      if (hash[t[i]]) {
        hash[t[i]]++;
      } else {
        hash[t[i]] = 1;
        keyCount++;
      }
    }
    let left: number = 0;
    let right: number = -1;
    let valid: number = 0;
    while (left < s.length) {
      if (hash[s[left]]) {
        right = left + 1;
        windows[s[left]] = 1;
        if (hash[s[left]] === 1) {
          if (keyCount === 1) {
            return t;
          }
          valid++;
        }
        break;
      }
      left++;
    }
    while (right < s.length) {
      if (hash[s[right]]) {
        windows[s[right]] = windows[s[right]] ? windows[s[right]] + 1 : 1;
        if (hash[s[right]] === windows[s[right]]) {
          valid++;
          if (valid === keyCount) {
            while (left < right) {
              if (hash[s[left]] && --windows[s[left]] < hash[s[left]]) {
                if (!res || res.length > right - left + 1) {
                  res = s.slice(left, right + 1);
                }
                valid--;
                left++;
                break;
              }
              left++;
            }
          }
        }
      }
      right++;
    }
  }

  return res;
}
