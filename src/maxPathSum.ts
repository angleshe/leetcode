import { TreeNode } from '../model/TreeNode';

/**
 * @description 返回非空二叉树从树中任意节点出发，达到任意节点最大路径和
 * @author angle
 * @date 2020-08-25
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
export function maxPathSum(root: TreeNode | null): number {
  let res: number = -Infinity;
  function dfs(root: TreeNode): number {
    const left: number = Math.max(root.left ? dfs(root.left) : 0, 0);
    const right: number = Math.max(root.right ? dfs(root.right) : 0, 0);
    res = Math.max(res, root.val + left + right);
    return root.val + Math.max(left, right);
  }
  if (root) {
    dfs(root);
    return res;
  }
  return 0;
}
