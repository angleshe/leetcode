import assert from 'power-assert';
import { isAnagram } from '../isAnagram';

describe('src/isAnagram', () => {
  describe('isAnagram', () => {
    it('anagram, nagaram', () => assert.ok(isAnagram('anagram', 'nagaram')));
    it('rat, car', () => assert.ok(!isAnagram('rat', 'car')));
  });
});
