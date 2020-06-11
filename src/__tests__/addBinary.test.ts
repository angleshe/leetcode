import assert from 'power-assert';
import { addBinary } from '../addBinary';

describe('src/addBinary', () => {
  describe('addBinary', () => {
    it('11, 1', () => {
      assert.strictEqual(addBinary('11', '1'), '100');
    });
    it('1010, 1011', () => {
      assert.strictEqual(addBinary('1010', '1011'), '10101');
    });
    it('1111, 1111', () => {
      assert.strictEqual(addBinary('1111', '1111'), '11110');
    });
  });
});
