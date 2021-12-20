import assert from 'power-assert';
import { characterReplacement } from '../characterReplacement';

describe('src/characterReplacement', () => {
  describe('characterReplacement', () => {
    it('ABAB, 2', () => assert.strictEqual(characterReplacement('ABAB', 2), 4));
    it('AABABBA, 1', () => assert.strictEqual(characterReplacement('AABABBA', 1), 4));
  });
});
