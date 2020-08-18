import Node from '../model/Node';

/**
 * @description 填充完美二叉树的每个 next 指针，让这个指针指向其下一个右侧节点
 * @author angle
 * @date 2020-08-18
 * @export
 * @param {Node} root
 * @returns {Node}
 */
export function connect(root: Node | null): Node | null {
  if (root) {
    let left: Node | null = root.left;
    let right: Node | null = root.right;
    while (left && right) {
      left.next = right;
      left = left.right;
      right = right.left;
    }
    if (root.left && root.right) {
      connect(root.left);
      connect(root.right);
    }
  }
  return root;
}
