export class Node {
  val: boolean;
  isLeaf: boolean;
  topLeft: Node | null;
  topRight: Node | null;
  bottomLeft: Node | null;
  bottomRight: Node | null;

  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: Node,
    topRight?: Node,
    bottomLeft?: Node,
    bottomRight?: Node
  ) {
    this.val = val ?? false;
    this.isLeaf = isLeaf ?? false;
    this.topLeft = topLeft ?? null;
    this.topRight = topRight ?? null;
    this.bottomLeft = bottomLeft ?? null;
    this.bottomRight = bottomRight ?? null;
  }

  toArray(): Array<[number, number] | null> {
    if (this.isLeaf) {
      return [[1, this.val ? 1 : 0]];
    }
    let stack: Node[] = [this];
    const res: Array<[number, number] | null> = [[0, this.val ? 1 : 0]];
    const names: Array<keyof Node> = ['bottomRight', 'bottomLeft', 'topRight', 'topLeft'];
    while (stack.length) {
      const nodeArr: Node[] = [];
      const resArr: Array<[number, number] | null> = [];
      for (let i = stack.length - 1; i >= 0; i--) {
        // eslint-disable-next-line no-loop-func
        names.forEach((key) => {
          const target = stack[i][key] as Node | null;
          if (target !== null) {
            resArr.unshift([target.isLeaf ? 1 : 0, target.val ? 1 : 0]);
            if (target.isLeaf === false || nodeArr.length !== 0) {
              nodeArr.unshift(target);
            }
          } else {
            resArr.unshift(null);
          }
        });
      }
      stack = nodeArr;
      res.push(...resArr);
    }

    return res;
  }
}
function helper(...nodeArr: [Node, Node, Node, Node]): Node {
  if (
    nodeArr.every(
      (node, index) => node.isLeaf && (index === 0 || node.val === nodeArr[index - 1].val)
    )
  ) {
    return new Node(nodeArr[0].val, true);
  }
  return new Node(true, false, ...nodeArr);
}
function dfs(grid: number[][], x: number, y: number, length: number): Node {
  if (length === 1) {
    return new Node(grid[x][y] === 1, true);
  }
  const newLength = length / 2;
  return helper(
    dfs(grid, x, y, newLength),
    dfs(grid, x, y + newLength, newLength),
    dfs(grid, x + newLength, y, newLength),
    dfs(grid, x + newLength, y + newLength, newLength)
  );
}
/**
 * @description 返回能表示矩阵的四叉树的根结点
 * @author angle
 * @date 2021-12-22
 * @export
 * @param {number[][]} grid
 * @returns {(Node | null)}
 */
export function construct(grid: number[][]): Node | null {
  return grid.length ? dfs(grid, 0, 0, grid.length) : null;
}
