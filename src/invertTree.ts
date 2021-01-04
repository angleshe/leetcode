import { TreeNode } from '../model/TreeNode';

/**
 * @description 翻转一棵二叉树。
 * @author angle
 * @date 2021-01-04
 * @export
 * @param {(TreeNode | null)} root
 * @returns {(TreeNode | null)}
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root) {
    const tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
  }
  return root;
}
