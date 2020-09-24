import { TreeNode } from '../model/TreeNode';

type NodeItemType = {
  node: TreeNode;
  status: boolean;
};
/**
 * @description 二叉树后序遍历
 * @author angle
 * @date 2020-09-24
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[]}
 */
export function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root) {
    const nodeArray: NodeItemType[] = [
      {
        node: root,
        status: false
      }
    ];
    while (nodeArray.length) {
      let target: TreeNode;
      if (nodeArray[nodeArray.length - 1].status) {
        target = nodeArray.pop()!.node;
        res.push(target.val);
      } else {
        nodeArray[nodeArray.length - 1].status = true;
        target = nodeArray[nodeArray.length - 1].node;
        if (target.right) {
          nodeArray.push({
            node: target.right,
            status: false
          });
        }
        if (target.left) {
          nodeArray.push({
            node: target.left,
            status: false
          });
        }
      }
    }
  }
  return res;
}
