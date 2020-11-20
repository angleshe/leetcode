class Trie {
  public next: Array<Trie | null> = Array(26).fill(null);
  public isEnd: boolean = false;
}
/**
 * @description 字典
 * @author angle
 * @date 2020-11-20
 * @export
 * @class WordDictionary
 */
export class WordDictionary {
  private wordMap = new Trie();
  /**
   * @description 添加单词
   * @author angle
   * @date 2020-11-20
   * @param {string} word
   * @memberof WordDictionary
   */
  addWord(word: string): void {
    let target: Trie = this.wordMap;
    for (let i: number = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (!target.next[index]) {
        target.next[index] = new Trie();
      }
      target = target.next[index]!;
    }
    target.isEnd = true;
  }

  private isInTrie(trie: Trie, word: string, wordIndex: number): boolean {
    if (wordIndex === word.length) {
      return trie.isEnd;
    }
    if (word[wordIndex] !== '.') {
      const index = word.charCodeAt(wordIndex) - 'a'.charCodeAt(0);
      if (!trie.next[index]) {
        return false;
      }
      return this.isInTrie(trie.next[index]!, word, wordIndex + 1);
    }
    return trie.next
      .filter((item) => item)
      .some((item) => this.isInTrie(item!, word, wordIndex + 1));
  }

  /**
   * @description 搜索单词
   * @author angle
   * @date 2020-11-20
   * @param {string} word
   * @returns {boolean}
   * @memberof WordDictionary
   */
  search(word: string): boolean {
    return this.isInTrie(this.wordMap, word, 0);
  }
}
