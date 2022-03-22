import assert from 'power-assert';
import { convertToBase7 } from '../convertToBase7';

describe('src/convertToBase7', () => {
  describe('convertToBase7', () => {
    it('100', () => assert.strictEqual(convertToBase7(100), '202'));
    it('-7', () => assert.strictEqual(convertToBase7(-7), '-10'));
    it('0', () => assert.strictEqual(convertToBase7(0), '0'));
  });
});
