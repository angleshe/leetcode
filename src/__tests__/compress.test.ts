import assert from 'power-assert';
import { compress } from '../compress';

describe('src/compress', () => {
  describe('compress', () => {
    it('["a","a","b","b","c","c","c"]', () =>
      assert.strictEqual(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']), 6));
    it('["a"]', () => assert.strictEqual(compress(['a']), 1));
    it('["a","b","b","b","b","b","b","b","b","b","b","b","b"]', () =>
      assert.strictEqual(
        compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']),
        4
      ));
  });
});
