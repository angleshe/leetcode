import { TreeNode } from '../model/TreeNode';

function dfs(
  node: TreeNode | null,
  targetSum: number,
  prefixCountMap: Map<number, number>,
  prefixCount: number
): number {
  if (node) {
    prefixCount += node.val;
    let res: number = 0;
    const target = prefixCount - targetSum;
    if (prefixCountMap.has(target)) {
      res = prefixCountMap.get(target)!;
    }
    if (prefixCountMap.has(prefixCount)) {
      prefixCountMap.set(prefixCount, prefixCountMap.get(prefixCount)! + 1);
    } else {
      prefixCountMap.set(prefixCount, 1);
    }
    res += dfs(node.left, targetSum, prefixCountMap, prefixCount);
    res += dfs(node.right, targetSum, prefixCountMap, prefixCount);

    prefixCountMap.set(prefixCount, prefixCountMap.get(prefixCount)! - 1);
    return res;
  }
  return 0;
}
/**
 * @description 二叉树里节点值之和等于targetSum的路径 的数目
 * @author angle
 * @date 2022-01-05
 * @export
 * @param {(TreeNode | null)} root
 * @param {number} targetSum
 * @returns {number}
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefixCountMap = new Map<number, number>();
  prefixCountMap.set(0, 1);
  return dfs(root, targetSum, prefixCountMap, 0);
}
