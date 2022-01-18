import { TreeNode } from '../model/TreeNode';

/**
 * @description 删除二叉搜索树中的 key 对应的节点
 * @author angle
 * @date 2022-01-18
 * @export
 * @param {(TreeNode | null)} root
 * @param {number} key
 * @returns {(TreeNode | null)}
 */
export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const head = new TreeNode(0);
  let target = head;
  let childKey: 'left' | 'right' = 'left';
  head.left = root;
  while (target[childKey]) {
    const child = target[childKey]!;
    if (child.val < key) {
      childKey = 'right';
    } else if (child.val > key) {
      childKey = 'left';
    } else {
      if (child.left && !child.right) {
        target[childKey] = child.left;
      } else if (!child.left && child.right) {
        target[childKey] = child.right;
      } else {
        target[childKey] = child.right;
        if (child.right) {
          target = child.right;
          while (target.left) {
            target = target.left;
          }
          target.left = child.left;
        }
      }
      break;
    }
    target = child;
  }
  return head.left;
}
