import { TreeNode } from '../model/TreeNode';

/**
 * @description 找到二叉搜索树中两个指定节点的最近公共祖先
 * @author angle
 * @date 2021-01-18
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
  let res: TreeNode | null = root;
  if (p && q) {
    while (res) {
      if (p.val < res.val && q.val < res.val) {
        res = res.left;
      } else if (p.val > res.val && q.val > res.val) {
        res = res.right;
      } else {
        return res;
      }
    }
  }
  return res;
}
