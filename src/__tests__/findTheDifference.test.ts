import assert from 'power-assert';
import { findTheDifference } from '../findTheDifference';

describe('src/findTheDifference', () => {
  describe('findTheDifference', () => {
    it('abcd, abcde', () => assert.strictEqual(findTheDifference('abcd', 'abcde'), 'e'));
    it(', y', () => assert.strictEqual(findTheDifference('', 'y'), 'y'));
    it('a, aa', () => assert.strictEqual(findTheDifference('a', 'aa'), 'a'));
    it('ae, aea', () => assert.strictEqual(findTheDifference('ae', 'aea'), 'a'));
  });
});
