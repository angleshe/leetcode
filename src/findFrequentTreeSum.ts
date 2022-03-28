import { TreeNode } from '../model/TreeNode';
/**
 * @description 请返回出现次数最多的子树元素和
 * @author angle
 * @date 2022-03-28
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[]}
 */
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  const map = new Map<number, number>();
  const res: number[] = [];
  let max = 0;
  function getSum(node: TreeNode | null): number {
    if (node) {
      const leftSum = getSum(node.left);
      const rightSum = getSum(node.right);
      const sum = leftSum + rightSum + node.val;
      const count = (map.get(sum) ?? 0) + 1;
      max = Math.max(count, max);
      map.set(sum, count);
      return sum;
    }
    return 0;
  }
  getSum(root);
  if (max) {
    map.forEach((value, key) => {
      if (value === max) {
        res.push(key);
      }
    });
  }
  return res;
}
