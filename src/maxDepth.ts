import { TreeNode } from '../model/TreeNode';

/**
 * @description 计算二叉树最大深度
 * @author angle
 * @date 2020-07-31
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
export function maxDepth(root: TreeNode | null): number {
  let res: number = 0;
  if (root) {
    let treeArr: TreeNode[] = [root];
    while (treeArr.length) {
      const nextArr: TreeNode[] = [];
      for (let i: number = 0; i < treeArr.length; i++) {
        if (treeArr[i].left !== null) {
          nextArr.push(treeArr[i].left!);
        }
        if (treeArr[i].right !== null) {
          nextArr.push(treeArr[i].right!);
        }
      }
      treeArr = nextArr;
      res++;
    }
  }
  return res;
}
