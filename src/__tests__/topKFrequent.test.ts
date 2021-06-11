import assert from 'power-assert';
import { topKFrequent } from '../topKFrequent';

describe('src/topKFrequent', () => {
  describe('topKFrequent', () => {
    it('[1,1,1,2,2,3], 2', () =>
      assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [2, 1]));
    it('[1], 1', () => assert.deepStrictEqual(topKFrequent([1], 1), [1]));
  });
});
