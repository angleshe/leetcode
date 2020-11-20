import assert from 'power-assert';
import { WordDictionary } from '../WordDictionary';

describe('src/WordDictionary', () => {
  describe('WordDictionary', () => {
    const wordDictionary: WordDictionary = new WordDictionary();
    wordDictionary.addWord('bad');
    wordDictionary.addWord('dad');
    wordDictionary.addWord('mad');
    const test1 = wordDictionary.search('pad');
    const test2 = wordDictionary.search('bad');
    const test3 = wordDictionary.search('.ad');
    const test4 = wordDictionary.search('b..');
    it('has pad', () => assert.ok(!test1));
    it('has bad', () => assert.ok(test2));
    it('has .ad', () => assert.ok(test3));
    it('has b..', () => assert.ok(test4));
  });
});
