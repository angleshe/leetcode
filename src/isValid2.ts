const cdataPre = '[CDATA[';
const ACharCode = 'A'.charCodeAt(0);
const ZCharCode = 'Z'.charCodeAt(0);
export function isValid(code: string): boolean {
  let i: number = 0;
  const tagStack: string[] = [];
  while (i < code.length) {
    const char = code[i];
    if (char === '<') {
      if (i + 1 >= code.length) {
        return false;
      }
      const isCloseTag = code[i + 1] === '/';
      const isCdata = code[i + 1] === '!';
      if (isCdata) {
        i += 2;
        if (!tagStack.length || i + cdataPre.length >= code.length) {
          return false;
        }
        let j: number = 0;
        while (j < cdataPre.length && i + j < code.length) {
          if (cdataPre[j] === code[i + j]) {
            j++;
          } else {
            return false;
          }
        }
        let z = i + j;
        while (
          z + 2 < code.length &&
          !(code[z] === ']' && code[z + 1] === ']' && code[z + 2] === '>')
        ) {
          z++;
        }
        if (z + 2 < code.length && z !== i) {
          i = z + 3;
        } else {
          return false;
        }
      } else {
        i += isCloseTag ? 2 : 1;
        let tag: string = '';
        while (i < code.length && code[i] !== '>') {
          const charCode = code.charCodeAt(i);
          if (charCode >= ACharCode && charCode <= ZCharCode) {
            tag += code[i++];
          } else {
            return false;
          }
          if (tag.length > 9) {
            return false;
          }
        }

        if (i >= code.length || !tag.length) {
          return false;
        }
        if (isCloseTag) {
          if (tagStack.pop() !== tag) {
            return false;
          }

          if (tagStack.length === 0 && i !== code.length - 1) {
            return false;
          }
        } else {
          tagStack.push(tag);
        }

        i++;
      }
    } else {
      if (tagStack.length === 0) {
        return false;
      }
      i++;
    }
  }

  return tagStack.length === 0;
}
