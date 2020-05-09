import assert from 'power-assert';
import { multiply } from '../multiply';

describe('src/multiply', () => {
  describe('multiply', () => {
    it('2, 3', () => {
      assert.strictEqual(multiply('2', '3'), '6');
    });
    it('123, 456', () => {
      assert.strictEqual(multiply('123', '456'), '56088');
    });
    it('6, 501', () => {
      assert.strictEqual(multiply('6', '501'), '3006');
    });
    it('9133, 0', () => {
      assert.strictEqual(multiply('9133', '0'), '0');
    });
  });
});
