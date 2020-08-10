import { TreeNode } from '../model/TreeNode';

function recur(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const left: number = recur(root.left);
  if (left === -1) {
    return -1;
  }
  const right: number = recur(root.right);
  if (right === -1) {
    return -1;
  }
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}
/**
 * @description 判断二叉树是否是高度平衡的二叉树
 * @author angle
 * @date 2020-08-10
 * @export
 * @param {(TreeNode | null)} root
 * @returns {boolean}
 */
export function isBalanced(root: TreeNode | null): boolean {
  return recur(root) !== -1;
}
