import { TreeNode } from '../model/TreeNode';

/**
 * @description 二叉树前序遍历。
 * @author angle
 * @date 2020-09-23
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[]}
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root) {
    const nodeArr: TreeNode[] = [root];
    while (nodeArr.length) {
      const target: TreeNode = nodeArr.pop()!;
      res.push(target.val);
      if (target.right) {
        nodeArr.push(target.right);
      }
      if (target.left) {
        nodeArr.push(target.left);
      }
    }
  }
  return res;
}
