import { TreeNode } from '../model/TreeNode';
/**
 * @description 中序遍历二叉树
 * @author angle
 * @date 2020-07-21
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number[]}
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root) {
    const stack: {
      node: TreeNode;
      leftStatus: boolean;
    }[] = [
      {
        node: root,
        leftStatus: false
      }
    ];
    while (stack.length) {
      if (stack[stack.length - 1].leftStatus) {
        res.push(stack[stack.length - 1].node.val);
        const target: TreeNode = stack.pop()!.node;
        if (target.right) {
          stack.push({
            node: target.right,
            leftStatus: false
          });
        }
      } else {
        stack[stack.length - 1].leftStatus = true;
        if (stack[stack.length - 1].node.left !== null) {
          const node: TreeNode = stack[stack.length - 1].node.left!;
          stack.push({
            node,
            leftStatus: false
          });
        }
      }
    }
  }
  return res;
}
