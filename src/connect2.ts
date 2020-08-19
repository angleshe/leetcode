import Node from '../model/Node';

/**
 * @description 填充二叉树的每个 next 指针，让这个指针指向其下一个右侧节点
 * @author angle
 * @date 2020-08-19
 * @export
 * @param {(Node | null)} root
 * @returns {(Node | null)}
 */
export function connect(root: Node | null): Node | null {
  let currentNode: Node | null = root;
  while (currentNode) {
    const dummy: Node = new Node();
    let tail: Node = dummy;
    while (currentNode) {
      if (currentNode.left) {
        tail.next = currentNode.left;
        tail = tail.next;
      }
      if (currentNode.right) {
        tail.next = currentNode.right;
        tail = tail.next;
      }
      currentNode = currentNode.next;
    }
    currentNode = dummy.next;
  }
  return root;
}
