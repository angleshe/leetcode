import { TreeNode } from '../model/TreeNode';

export function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (root) {
    let list: TreeNode[] = [root];
    while (list.length) {
      const levelValArr: number[] = [];
      const nextList: TreeNode[] = [];
      for (let i: number = 0; i < list.length; i++) {
        levelValArr.push(list[i].val);
        if (list[i].left) {
          nextList.push(list[i].left!);
        }
        if (list[i].right) {
          nextList.push(list[i].right!);
        }
      }
      list = nextList;
      res.push(levelValArr);
    }
  }
  return res;
}
