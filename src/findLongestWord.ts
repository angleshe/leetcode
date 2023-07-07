export function findLongestWord(s: string, dictionary: string[]): string {
  return dictionary.reduce<string>((res, current) => {
    if (s.length >= current.length && res.length <= current.length && isSubString(s, current)) {
      if (res.length < current.length || current < res) {
        return current;
      }
    }
    return res;
  }, '');
}

function isSubString(str1: string, str2: string): boolean {
  let sl1: number = 0;
  let sl2: number = 0;

  while (sl1 < str1.length && sl2 < str2.length) {
    if (str1[sl1] === str2[sl2]) {
      sl2++;
    }
    sl1++;
  }

  return sl2 === str2.length;
}
