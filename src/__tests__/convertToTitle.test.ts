import assert from 'power-assert';
import { convertToTitle } from '../convertToTitle';

describe('src/convertToTitle', () => {
  describe('convertToTitle', () => {
    it('1', () => assert.strictEqual(convertToTitle(1), 'A'));
    it('28', () => assert.strictEqual(convertToTitle(28), 'AB'));
    it('701', () => assert.strictEqual(convertToTitle(701), 'ZY'));
  });
});
