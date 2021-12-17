import assert from 'power-assert';
import { originalDigits } from '../originalDigits';

describe('src/originalDigits', () => {
  describe('originalDigits', () => {
    it('owoztneoer', () => assert.strictEqual(originalDigits('owoztneoer'), '012'));
    it('fviefuro', () => assert.strictEqual(originalDigits('fviefuro'), '45'));
    it('"egith"', () => assert.strictEqual(originalDigits('"egith"'), '8'));
  });
});
