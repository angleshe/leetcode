export function findLUSlength(strs: string[]): number {
  let res: number = -1;
  for (let i = 0; i < strs.length; i++) {
    const target = strs[i];
    if (
      target.length > res &&
      strs.every((str, index) => {
        return index === i || target.length > str.length || !isSubStr(target, str);
      })
    ) {
      res = target.length;
    }
  }

  return res;
}

function isSubStr(str1: string, str2: string): boolean {
  let sl1: number = 0;
  let sl2: number = 0;

  while (sl1 < str1.length && sl2 < str2.length) {
    if (str1[sl1] === str2[sl2]) {
      sl1++;
    }
    sl2++;
  }

  return sl1 === str1.length;
}
