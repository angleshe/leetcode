import { TreeNode } from '../model/TreeNode';

/**
 * @description 计算二叉树的层数
 * @author angle
 * @date 2020-12-25
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
function countLevel(root: TreeNode | null): number {
  let res: number = 0;
  while (root) {
    res++;
    root = root.left;
  }
  return res;
}
/**
 * @description 求出完全二叉树的节点个数
 * @author angle
 * @date 2020-12-25
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
export function countNodes(root: TreeNode | null): number {
  if (root) {
    const left: number = countLevel(root.left);
    const right: number = countLevel(root.right);
    if (left === right) {
      // eslint-disable-next-line no-bitwise
      return countNodes(root.right) + (1 << left);
    }
    // eslint-disable-next-line no-bitwise
    return countNodes(root.left) + (1 << right);
  }
  return 0;
}
