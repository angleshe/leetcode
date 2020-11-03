import { TreeNode } from '../model/TreeNode';
/**
 * @description 照从顶部到底部的顺序，返回从右侧所能看到的节点值
 * @author angle
 * @date 2020-11-03
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[]}
 */
export function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root) {
    let treeArr: TreeNode[] = [root];
    while (treeArr.length) {
      res.push(treeArr[treeArr.length - 1].val);
      treeArr = treeArr.reduce<TreeNode[]>((prev, curr) => {
        if (curr.left) {
          prev.push(curr.left);
        }
        if (curr.right) {
          prev.push(curr.right);
        }
        return prev;
      }, []);
    }
  }
  return res;
}
