import assert from 'power-assert';
import { Trie } from '../Trie';

describe('src/Trie', () => {
  describe('Trie', () => {
    const trie: Trie = new Trie();
    trie.insert('apple');
    const hasApple = trie.search('apple');
    const hasApp = trie.search('app');
    const hasAppStartWith = trie.startsWith('app');
    trie.insert('app');
    const hasApp2 = trie.search('app');
    it('hasApple', () => assert.ok(hasApple));
    it('hasApp', () => assert.ok(!hasApp));
    it('hasAppStartWith', () => assert.ok(hasAppStartWith));
    it('hasApp2', () => assert.ok(hasApp2));
  });
});
