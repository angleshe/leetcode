import assert from 'power-assert';
import { firstUniqChar } from '../firstUniqChar';

describe('src/firstUniqChar', () => {
  describe('firstUniqChar', () => {
    it('leetcode', () => assert.strictEqual(firstUniqChar('leetcode'), 0));
    it('loveleetcode', () => assert.strictEqual(firstUniqChar('loveleetcode'), 2));
  });
});
