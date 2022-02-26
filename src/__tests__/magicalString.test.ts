import assert from 'power-assert';
import { magicalString } from '../magicalString';

describe('src/magicalString', () => {
  describe('magicalString', () => {
    it('6', () => assert.strictEqual(magicalString(6), 3));
    it('1', () => assert.strictEqual(magicalString(1), 1));
    it('7', () => assert.strictEqual(magicalString(7), 4));
  });
});
