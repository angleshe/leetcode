import { TreeNode } from '../model/TreeNode';

/**
 * @description 找到二叉树中两个指定节点的最近公共祖先。
 * @author angle
 * @date 2021-01-19
 * @export
 * @param {(TreeNode | null)} root
 * @param {(TreeNode | null)} p
 * @param {(TreeNode | null)} q
 * @returns {(TreeNode | null)}
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root.val === p?.val || root.val === q?.val) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  return root;
}
