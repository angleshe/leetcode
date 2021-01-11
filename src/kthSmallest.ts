import { TreeNode } from '../model/TreeNode';

/**
 * @description 查找二叉搜索树第 k 个最小的元素
 * @author angle
 * @date 2021-01-11
 * @export
 * @param {(TreeNode | null)} root
 * @param {number} k
 * @returns {number}
 */
export function kthSmallest(root: TreeNode | null, k: number): number {
  if (root) {
    let target: TreeNode | null = root;
    const stack: TreeNode[] = [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
      while (target) {
        stack.push(target);
        target = target.left;
      }
      const tmp = stack.pop()!;
      if (--k === 0) {
        return tmp.val;
      }
      target = tmp.right;
    }
  }
  return -1;
}
