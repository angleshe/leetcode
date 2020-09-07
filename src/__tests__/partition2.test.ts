import assert from 'power-assert';
import { partition } from '../partition2';

describe('src/partition2', () => {
  describe('partition', () => {
    it('aab', () => {
      assert.deepStrictEqual(partition('aab'), [
        ['a', 'a', 'b'],
        ['aa', 'b']
      ]);
    });
  });
});
