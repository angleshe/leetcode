import assert from 'power-assert';
import { findSubstringInWraproundString } from '../findSubstringInWraproundString';

describe('src/findSubstringInWraproundString', () => {
  describe('findSubstringInWraproundString', () => {
    it('a', () => assert.strictEqual(findSubstringInWraproundString('a'), 1));
    it('cac', () => assert.strictEqual(findSubstringInWraproundString('cac'), 2));
    it('zab', () => assert.strictEqual(findSubstringInWraproundString('zab'), 6));
  });
});
