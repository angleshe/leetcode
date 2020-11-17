/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * @description 前缀树
 * @author angle
 * @date 2020-11-17
 * @export
 * @class Trie
 */
export class Trie {
  private next: (Trie | null)[] = Array<Trie | null>(26).fill(null);
  private isEnd: boolean = false;

  /**
   * @description 插入
   * @author angle
   * @date 2020-11-17
   * @param {string} word
   * @memberof Trie
   */
  insert(word: string): void {
    let target: Trie = this;
    for (let i: number = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (target.next[index] === null) {
        target.next[index] = new Trie();
      }
      target = target.next[index]!;
    }
    target.isEnd = true;
  }
  /**
   * @description 查询
   * @author angle
   * @date 2020-11-17
   * @param {string} word
   * @returns {boolean}
   * @memberof Trie
   */
  search(word: string): boolean {
    let target: Trie = this;
    for (let i: number = 0; i < word.length; i++) {
      const index: number = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (target.next[index]) {
        target = target.next[index]!;
      } else {
        return false;
      }
    }
    return target.isEnd;
  }

  /**
   * @description 查询前缀
   * @author angle
   * @date 2020-11-17
   * @param {string} prefix
   * @returns {boolean}
   * @memberof Trie
   */
  startsWith(prefix: string): boolean {
    let target: Trie = this;
    for (let i: number = 0; i < prefix.length; i++) {
      const index: number = prefix.charCodeAt(i) - 'a'.charCodeAt(0);
      if (target.next[index]) {
        target = target.next[index]!;
      } else {
        return false;
      }
    }
    return true;
  }
}
