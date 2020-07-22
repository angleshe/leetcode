import { TreeNode } from '../model/TreeNode';

function getAns(start: number, end: number): Array<TreeNode | null> {
  const ans: Array<TreeNode | null> = [];
  if (start > end) {
    ans.push(null);
  } else if (start === end) {
    ans.push(new TreeNode(start));
  } else {
    for (let i: number = start; i <= end; i++) {
      const leftTree: Array<TreeNode | null> = getAns(start, i - 1);
      const rightTree: Array<TreeNode | null> = getAns(i + 1, end);
      leftTree.forEach((leftNode) => {
        rightTree.forEach((rightNode) => {
          ans.push(new TreeNode(i, leftNode, rightNode));
        });
      });
    }
  }
  return ans;
}

/**
 * @description 生成所有由 1 - n 为节点所组成的 二叉搜索树
 * @author angle
 * @date 2020-07-22
 * @export
 * @param {number} n
 * @returns {(Array<TreeNode | null>)}
 */
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) {
    return [];
  }
  return getAns(1, n);
}
