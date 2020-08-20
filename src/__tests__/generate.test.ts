import assert from 'power-assert';
import { generate } from '../generate';

describe('src/generate', () => {
  describe('generate', () => {
    it('5', () => {
      assert.deepStrictEqual(generate(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
  });
});
