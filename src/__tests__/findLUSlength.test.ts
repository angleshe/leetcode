import assert from 'power-assert';
import { findLUSlength } from '../findLUSlength';

describe('src/findLUSlength', () => {
  describe('findLUSklength', () => {
    it('aba, cdc', () => assert.equal(findLUSlength('aba', 'cbc'), 3));
    it('aaa, bbb', () => assert.equal(findLUSlength('aaa', 'bbb'), 3));
    it('aaa, aaa', () => assert.equal(findLUSlength('aaa', 'aaa'), -1));
  });
});
