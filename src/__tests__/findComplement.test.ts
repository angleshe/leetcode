import assert from 'power-assert';
import { findComplement } from '../findComplement';

describe('src/findComplement', () => {
  describe('findComplement', () => {
    it('5', () => assert.strictEqual(findComplement(5), 2));
    it('1', () => assert.strictEqual(findComplement(1), 0));
  });
});
