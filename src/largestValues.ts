import { TreeNode } from '../model/TreeNode';

export function largestValues(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root) {
    let list: TreeNode[] = [root];
    while (list.length) {
      let maxNum = -Infinity;
      const nextList: TreeNode[] = [];

      for (let i = 0; i < list.length; i++) {
        const node = list[i];
        maxNum = Math.max(maxNum, node.val);
        if (node.left) {
          nextList.push(node.left);
        }

        if (node.right) {
          nextList.push(node.right);
        }
      }

      res.push(maxNum);
      list = nextList;
    }
  }

  return res;
}
