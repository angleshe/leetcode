import assert from 'power-assert';
import { findRepeatedDnaSequences } from '../findRepeatedDnaSequences';

describe('src/findRepeatedDnaSequences', () => {
  describe('findRepeatedDnaSequences', () => {
    it('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', () =>
      assert.deepStrictEqual(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'), [
        'AAAAACCCCC',
        'CCCCCAAAAA'
      ]));
  });
});
