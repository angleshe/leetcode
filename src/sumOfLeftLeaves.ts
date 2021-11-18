import { TreeNode } from '../model/TreeNode';

function isLeafNode(root: TreeNode): boolean {
  return !root.left && !root.right;
}
/**
 * @description 计算给定二叉树的所有左叶子之和。
 * @author angle
 * @date 2021-11-18
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root) {
    let res: number = 0;
    if (root.left) {
      res += isLeafNode(root.left) ? root.left.val : sumOfLeftLeaves(root.left);
    }
    if (root.right) {
      res += sumOfLeftLeaves(root.right);
    }
    return res;
  }
  return 0;
}
