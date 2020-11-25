interface ITrie {
  isEnd: boolean;
  next: Array<ITrie | null>;
}

const positions: [number, number][] = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

function dfs(
  board: string[][],
  res: string[],
  x: number,
  y: number,
  trie: ITrie,
  path: string
): void {
  if (trie.isEnd) {
    res.push(path);
    trie.isEnd = false;
  } else if (y < board.length && y >= 0 && x < board[y].length && x >= 0 && board[y][x] !== '.') {
    const index: number = board[y][x].charCodeAt(0) - 'a'.charCodeAt(0);
    if (trie.next[index]) {
      const c = board[y][x];
      path += c;
      board[y][x] = '.';
      positions.forEach((item) => {
        dfs(board, res, x + item[0], y + item[1], trie.next[index]!, path);
      });
      board[y][x] = c;
    }
  }
}
/**
 * @description 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。
 * @author angle
 * @date 2020-11-25
 * @export
 * @param {string[][]} board
 * @param {string[]} words
 * @returns {string[]}
 */
export function findWords(board: string[][], words: string[]): string[] {
  const trie: ITrie = {
    isEnd: false,
    next: Array<ITrie | null>(26).fill(null)
  };
  words.forEach((item) => {
    let target: ITrie = trie;
    for (let i: number = 0; i < item.length; i++) {
      const index: number = item.charCodeAt(i) - 'a'.charCodeAt(0);
      if (!target.next[index]) {
        target.next[index] = {
          isEnd: false,
          next: Array<ITrie | null>(26).fill(null)
        };
      }
      target = target.next[index]!;
    }
    target.isEnd = true;
  });
  const res: string[] = [];
  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      dfs(board, res, j, i, trie, '');
    }
  }
  return res;
}
