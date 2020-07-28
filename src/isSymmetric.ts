import { TreeNode } from '../model/TreeNode';

/**
 * @description 检查二叉树是否是镜像对称的
 * @author angle
 * @date 2020-07-28
 * @export
 * @param {(TreeNode | null)} root
 * @returns {boolean}
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  let valArr: Array<TreeNode | null> = [root];
  while (valArr.length) {
    const len: number = (valArr.length - 1) / 2;
    const nextArr: Array<TreeNode | null> = [];
    for (let i: number = 0; i < valArr.length; i++) {
      if (i < len && valArr[i]?.val !== valArr[valArr.length - 1 - i]?.val) {
        return false;
      }
      if (valArr[i]) {
        nextArr.push(valArr[i]!.left, valArr[i]!.right);
      }
    }
    valArr = nextArr;
  }
  return true;
}
