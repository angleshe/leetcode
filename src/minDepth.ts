import { TreeNode } from '../model/TreeNode';

export function minDepth(root: TreeNode | null): number {
  let res: number = 0;
  if (root) {
    let list: TreeNode[] = [root];
    res = 1;
    while (list.length) {
      const nextList: TreeNode[] = [];
      for (let i: number = 0; i < list.length; i++) {
        if (list[i].left) {
          nextList.push(list[i].left!);
        }
        if (list[i].right) {
          nextList.push(list[i].right!);
        }
        if (!list[i].left && !list[i].right) {
          return res;
        }
      }
      res++;
      list = nextList;
    }
  }
  return res;
}
