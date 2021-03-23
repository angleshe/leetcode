/**
 * @description 找到所有的最小高度树并按 任意顺序 返回它们的根节点标签列表。
 * @author angle
 * @date 2021-03-23
 * @export
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number[]}
 */
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (edges.length === 1) {
    return edges[0];
  }
  if (n === 1) {
    return [0];
  }
  const map = Array.from<number[], number[]>(Array<number[]>(n), () => []);
  const degree = Array<number>(n).fill(0);
  edges.forEach((item) => {
    map[item[0]].push(item[1]);
    map[item[1]].push(item[0]);
    degree[item[0]]++;
    degree[item[1]]++;
  });
  const queue = degree.reduce<number[]>((prev, curr, index) => {
    if (curr === 1) {
      prev.push(index);
    }
    return prev;
  }, []);
  let res: number[] = [];
  while (queue.length) {
    res = [];
    for (let i: number = queue.length - 1; i >= 0; i--) {
      const target = queue.shift()!;
      res.push(target);
      map[target].forEach((item) => {
        if (--degree[item] === 1) {
          queue.push(item);
        }
      });
    }
  }
  return res;
}
