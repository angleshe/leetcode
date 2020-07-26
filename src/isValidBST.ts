import { TreeNode } from '../model/TreeNode';

export function isValidBST(root: TreeNode | null): boolean {
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
    let num: number | undefined;
    while (stack.length) {
      const target: TreeNode = stack[stack.length - 1].node;
      if (stack[stack.length - 1].leftStatus) {
        stack.pop();
        if (num === undefined || num < target.val) {
          num = target.val;
        } else {
          return false;
        }
        if (target.right) {
          stack.push({
            node: target.right,
            leftStatus: false
          });
        }
      } else {
        stack[stack.length - 1].leftStatus = true;
        if (target.left) {
          stack.push({
            node: target.left,
            leftStatus: false
          });
        }
      }
    }
  }
  return true;
}
