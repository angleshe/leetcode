import { myAtoi } from '../myAtoi';
import assert from 'assert';

describe('src/myAtoi', () => {
  describe('myAiot()', () => {
    it('42', () => {
      assert.strictEqual(myAtoi('42'), 42);
    });
    it('   -42', () => {
      assert.strictEqual(myAtoi('   -42'), -42);
    });
    it('4193 with words', () => {
      assert.strictEqual(myAtoi('4193 with words'), 4193);
    });
    it('-91283472332', () => {
      assert.strictEqual(myAtoi('-91283472332'), -2147483648);
    });
    it('words and 987', () => {
      assert.strictEqual(myAtoi('words and 987'), 0);
    });
  });
});
