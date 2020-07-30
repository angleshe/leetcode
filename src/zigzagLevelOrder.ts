import { TreeNode } from '../model/TreeNode';

/**
 * @description 锯齿形层次遍历二叉树
 * @author angle
 * @date 2020-07-30
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[][]}
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (root) {
    let treeArr: TreeNode[] = [root];
    while (treeArr.length) {
      const nextArr: TreeNode[] = [];
      const valArr: number[] = [];
      for (let i: number = 0; i < treeArr.length; i++) {
        valArr.push(treeArr[res.length % 2 === 0 ? i : treeArr.length - 1 - i].val);
        if (treeArr[i].left) {
          nextArr.push(treeArr[i].left!);
        }
        if (treeArr[i].right) {
          nextArr.push(treeArr[i].right!);
        }
      }
      res.push(valArr);
      treeArr = nextArr;
    }
  }
  return res;
}
