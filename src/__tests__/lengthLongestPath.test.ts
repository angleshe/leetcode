import assert from 'power-assert';
import { lengthLongestPath } from '../lengthLongestPath';

describe('src/lengthLongestPath', () => {
  describe('lengthLongestPath', () => {
    it('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext', () =>
      assert.strictEqual(lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'), 20));
    it('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext', () =>
      assert.strictEqual(
        lengthLongestPath(
          'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
        ),
        32
      ));
    it('a', () => assert.strictEqual(lengthLongestPath('a'), 0));
  });
  it('a\n\tb.txt\na2\n\tb2.txt', () =>
    assert.strictEqual(lengthLongestPath('a\n\tb.txt\na2\n\tb2.txt'), 9));
});
