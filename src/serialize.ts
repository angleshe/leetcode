import { TreeNode } from '../model/TreeNode';

/**
 * @description 二叉树序列化
 * @author angle
 * @date 2021-03-08
 * @export
 * @param {(TreeNode | null)} root
 * @returns {string}
 */
export function serialize(root: TreeNode | null): string {
  return root ? `${root.val},${serialize(root.left)},${serialize(root.right)}` : 'n';
}

/**
 * @description 反序列化
 * @author angle
 * @date 2021-03-08
 * @export
 * @param {string} data
 * @returns {(TreeNode | null)}
 */
export function deserialize(data: string): TreeNode | null {
  const arr = data.split(',');
  function buildTree(): TreeNode | null {
    const target = arr.shift()!;
    if (target === 'n') {
      return null;
    }
    const tree = new TreeNode(parseFloat(target));
    tree.left = buildTree();
    tree.right = buildTree();
    return tree;
  }
  if (arr.length) {
    return buildTree();
  }
  return null;
}
