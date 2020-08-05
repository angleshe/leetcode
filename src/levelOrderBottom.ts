import { TreeNode } from '../model/TreeNode';

/**
 * @description 二叉树节点值自底向上的层次遍历
 * @author angle
 * @date 2020-08-05
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[][]}
 */
export function levelOrderBottom(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (root) {
    let treeArr: TreeNode[] = [root];
    while (treeArr.length) {
      const nextArr: TreeNode[] = [];
      const valArr: number[] = [];
      for (let i: number = 0; i < treeArr.length; i++) {
        valArr.push(treeArr[i].val);
        if (treeArr[i].left) {
          nextArr.push(treeArr[i].left!);
        }
        if (treeArr[i].right) {
          nextArr.push(treeArr[i].right!);
        }
      }
      res.splice(0, 0, valArr);
      treeArr = nextArr;
    }
  }
  return res;
}
