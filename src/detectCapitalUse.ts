const aCode = 'a'.charCodeAt(0);

export function detectCapitalUse(word: string): boolean {
  const charCode = word.charCodeAt(0);
  const firstCharIsLowerCase = charCode >= aCode;
  let secondCharIsLowerCase: boolean = false;

  for (let i = 1; i < word.length; i++) {
    const code = word.charCodeAt(i);
    const isLowerCase = code >= aCode;
    if (!isLowerCase && firstCharIsLowerCase) {
      return false;
    }

    if (i === 1) {
      secondCharIsLowerCase = isLowerCase;
    } else if ((secondCharIsLowerCase && !isLowerCase) || (!secondCharIsLowerCase && isLowerCase)) {
      return false;
    }
  }

  return true;
}
