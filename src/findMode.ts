import { TreeNode } from '../model/TreeNode';

/**
 * @description 找出并返回 BST中的所有众数
 * @author angle
 * @date 2022-03-16
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[]}
 */
export function findMode(root: TreeNode | null): number[] {
  let res: number[] = [];
  let prevNumber: number = -Infinity;
  let prevCount: number = -1;
  let maxCount: number = 0;
  let curr: TreeNode | null = root;
  let prev: TreeNode | null = null;

  function updateRes(val?: number): void {
    if (val === prevNumber) {
      prevCount++;
    } else {
      if (prevCount === maxCount) {
        res.push(prevNumber);
      } else if (prevCount > maxCount) {
        res = [prevNumber];
        maxCount = prevCount;
      }
      if (val !== undefined) {
        prevNumber = val;
        prevCount = 1;
      }
    }
  }

  while (curr) {
    if (curr.left) {
      prev = curr.left;
      while (prev.right && prev.right !== curr) {
        prev = prev.right;
      }
      if (prev.right) {
        prev.left = null;
        updateRes(curr.val);
        curr = curr.right;
      } else {
        prev.right = curr;
        curr = curr.left;
      }
    } else {
      updateRes(curr.val);
      curr = curr.right;
    }
  }

  updateRes();
  return res;
}
