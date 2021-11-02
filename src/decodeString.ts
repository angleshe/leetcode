type DecodeType = {
  count: number;
  content: string;
};
/**
 * @description 返回一个经过编码的字符串解码后的字符串
 * @author angle
 * @date 2021-11-02
 * @export
 * @param {string} s
 * @returns {string}
 */
export function decodeString(s: string): string {
  const stack: DecodeType[] = [
    {
      count: 1,
      content: ''
    }
  ];
  const zeroCode = '0'.charCodeAt(0);
  let count: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    const num = s.charCodeAt(i) - zeroCode;
    if (num >= 0 && num <= 9) {
      count = 10 * count + num;
    } else if (s[i] === '[') {
      stack.push({
        content: '',
        count
      });
      count = 0;
    } else if (s[i] === ']') {
      const decode = stack.pop()!;
      let content: string = '';
      for (let j: number = 0; j < decode.count; j++) {
        content += decode.content;
      }
      stack[stack.length - 1].content += content;
    } else {
      stack[stack.length - 1].content += s[i];
    }
  }
  return stack[0].content;
}
