import { TreeNode } from '../model/TreeNode';

/**
 * @description 计算二叉树的层数
 * @author angle
 * @date 2020-12-25
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
function countLevel(root: TreeNode | null): number {
  if (root) {
    let res: number = 1;
    let target: TreeNode = root;
    while (target.left) {
      res++;
      target = target.left;
    }
    return res;
  }
  return 0;
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
      return countLevel(root.left) + (1 << left);
    }
    // eslint-disable-next-line no-bitwise
    return countLevel(root.right) + (1 << right);
  }
  return 0;
}
