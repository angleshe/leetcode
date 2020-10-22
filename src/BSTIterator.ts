import { TreeNode } from '../model/TreeNode';

/**
 * @description 二叉搜索树迭代器
 * @author angle
 * @date 2020-10-22
 * @export
 * @class BSTIterator
 */
export class BSTIterator {
  private treeStack: TreeNode[] = [];

  private leftmostInorder(root: TreeNode | null): void {
    while (root) {
      this.treeStack.push(root);
      root = root.left;
    }
  }

  constructor(root: TreeNode | null) {
    this.leftmostInorder(root);
  }

  /**
   * @description 下一个最小的数。
   * @author angle
   * @date 2020-10-22
   * @returns {number}
   * @memberof BSTIterator
   */
  next(): number {
    const node: TreeNode = this.treeStack.pop()!;
    this.leftmostInorder(node.right);
    return node.val;
  }
  /**
   * @description 是否有下一位
   * @author angle
   * @date 2020-10-22
   * @returns {boolean}
   * @memberof BSTIterator
   */
  hasNext(): boolean {
    return !!this.treeStack.length;
  }
}
