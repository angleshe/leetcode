import { TreeNode } from '../model/TreeNode';

function sortedArrayToBSTHandler(nums: number[], start: number, end: number): TreeNode | null {
  if (start === end) {
    return null;
  }
  const mid: number = Math.floor(start + (end - start) / 2);
  const tree: TreeNode = new TreeNode(nums[mid]);
  tree.left = sortedArrayToBSTHandler(nums, start, mid);
  tree.right = sortedArrayToBSTHandler(nums, mid + 1, end);
  return tree;
}
/**
 * @description 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树
 * @author angle
 * @date 2020-08-06
 * @export
 * @param {number[]} nums
 * @returns {(TreeNode | null)}
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  return sortedArrayToBSTHandler(nums, 0, nums.length);
}
