import assert from 'power-assert';
import { groupAnagrams } from '../groupAnagrams';

describe('src/groupAnagrams', () => {
  describe('groupAnagrams', () => {
    it('["eat", "tea", "tan", "ate", "nat", "bat"]', () => {
      assert.deepStrictEqual(
        [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
        groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
      );
    });
  });
});
