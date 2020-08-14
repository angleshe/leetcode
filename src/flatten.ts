import { TreeNode } from '../model/TreeNode';
/**
 * @description 原地将二叉树展开为一个单链表
 * @author angle
 * @date 2020-08-14
 * @export
 * @param {(TreeNode | null)} root
 */
export function flatten(root: TreeNode | null): void {
  if (root) {
    const list: TreeNode[] = [root];
    let target: TreeNode = new TreeNode();
    while (list.length) {
      const current: TreeNode = list.shift()!;
      if (current.right) {
        list.splice(0, 0, current.right);
      }
      if (current.left) {
        list.splice(0, 0, current.left);
      }
      target.right = current;
      target.left = null;
      target = target.right;
    }
  }
}
