import { TreeNode } from '../model/TreeNode';

/**
 * @description 判断两个树是否在结构上相同，并且节点具有相同的值
 * @author angle
 * @date 2020-07-27
 * @export
 * @param {(TreeNode | null)} p
 * @param {(TreeNode | null)} q
 * @returns {boolean}
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  } else if (!p || !q) {
    return false;
  }
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
}
