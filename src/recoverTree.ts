import { TreeNode } from '../model/TreeNode';

/**
 * @description 二叉搜索树中的两个节点被错误地交换,请在不改变其结构的情况下，恢复这棵树
 * @author angle
 * @date 2020-07-26
 * @export
 * @param {(TreeNode | null)} root
 * @returns {void}
 */
export function recoverTree(root: TreeNode | null): void {
  if (root) {
    const stack: Array<{
      node: TreeNode;
      leftStatus: boolean;
    }> = [
      {
        node: root,
        leftStatus: false
      }
    ];
    let errorHeadNode: TreeNode | null = null;
    let errorEndNode: TreeNode | null = null;

    while (stack.length) {
      const target: TreeNode = stack[stack.length - 1].node;
      let nextNode: TreeNode | null;
      if (stack[stack.length - 1].leftStatus) {
        stack.pop();
        if (errorEndNode === null) {
          if (errorHeadNode === null || errorHeadNode.val < target.val) {
            errorHeadNode = target;
          } else {
            errorEndNode = target;
          }
        } else {
          if (errorEndNode.val > target.val) {
            [errorHeadNode!.val, target.val] = [target.val, errorHeadNode!.val];
            return;
          }
        }
        nextNode = target.right;
      } else {
        stack[stack.length - 1].leftStatus = true;
        nextNode = target.left;
      }
      if (nextNode) {
        stack.push({
          leftStatus: false,
          node: nextNode
        });
      }
    }
    [errorHeadNode!.val, errorEndNode!.val] = [errorEndNode!.val, errorHeadNode!.val];
  }
}
