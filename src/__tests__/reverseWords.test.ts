import assert from 'power-assert';
import { reverseWords } from '../reverseWords';

describe('src/reverseWords', () => {
  describe('reverseWords', () => {
    it('the sky is blue', () =>
      assert.strictEqual(reverseWords('the sky is blue'), 'blue is sky the'));
    it('  hello world!  ', () =>
      assert.strictEqual(reverseWords('  hello world!  '), 'world! hello'));
    it('a good   example', () =>
      assert.strictEqual(reverseWords('a good   example'), 'example good a'));
    it('  Bob    Loves  Alice   ', () =>
      assert.strictEqual(reverseWords('  Bob    Loves  Alice   '), 'Alice Loves Bob'));
    it('Alice does not even like bob', () =>
      assert.strictEqual(
        reverseWords('Alice does not even like bob'),
        'bob like even not does Alice'
      ));
  });
});
