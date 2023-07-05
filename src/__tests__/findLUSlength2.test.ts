import assert from 'power-assert';
import { findLUSlength } from '../findLUSlength2';

describe('src/findLUSlength2', () => {
  describe('findLUSlength', () => {
    it('["aba","cdc","eae"]', () => assert.equal(findLUSlength(['aba', 'cdc', 'eae']), 3));
    it('["aaa","aaa","aa"]', () => assert.equal(findLUSlength(['aaa', 'aaa', 'aa']), -1));
  });
});
