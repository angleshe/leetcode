import assert from 'power-assert';
import { wordPattern } from '../wordPattern';

describe('src/wordPattern', () => {
  describe('wordPattern', () => {
    it('abba, dog cat cat dog', () => assert.ok(wordPattern('abba', 'dog cat cat dog')));
    it('abba, dog cat cat fish', () => assert.ok(!wordPattern('abba', 'dog cat cat fish')));
    it('aaaa, dog cat cat dog', () => assert.ok(!wordPattern('aaaa', 'dog cat cat dog')));
    it('abba, dog dog dog dog', () => assert.ok(!wordPattern('abba', 'dog dog dog dog')));
  });
});
