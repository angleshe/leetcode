import { TreeNode } from '../model/TreeNode';

export function findBottomLeftValue(root: TreeNode | null): number {
  let res: number = 0;
  if (root) {
    const queue: TreeNode[] = [root];
    while (queue.length) {
      res = queue[0].val;
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const target = queue.shift()!;
        if (target.left) {
          queue.push(target.left);
        }
        if (target.right) {
          queue.push(target.right);
        }
      }
    }
  }
  return res;
}
