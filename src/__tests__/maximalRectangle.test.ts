import assert from 'power-assert';
import { maximalRectangle } from '../maximalRectangle';
import { showContent } from '../utils';

describe('src/maximalRectangle', () => {
  describe('maximalRectangle', () => {
    const test1: string[][] = [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0']
    ];
    it(showContent(test1), () => {
      assert.strictEqual(maximalRectangle(test1), 6);
    });
  });
});
