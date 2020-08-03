import { TreeNode } from '../model/TreeNode';

function buildTreeHandler(
  preorder: number[],
  pStart: number,
  pEnd: number,
  inorder: number[],
  iStart: number,
  iEnd: number,
  pMap: Record<number, number>
): TreeNode | null {
  if (pStart === pEnd) {
    return null;
  }
  const tree: TreeNode = new TreeNode(preorder[pStart]);
  const leftNum: number = pMap[preorder[pStart]] - iStart;
  tree.left = buildTreeHandler(
    preorder,
    pStart + 1,
    pStart + leftNum + 1,
    inorder,
    iStart,
    pMap[preorder[pStart]],
    pMap
  );
  tree.right = buildTreeHandler(
    preorder,
    pStart + leftNum + 1,
    pEnd,
    inorder,
    pMap[preorder[pStart]] + 1,
    iEnd,
    pMap
  );
  return tree;
}

/**
 * @description 根据一棵树的前序遍历与中序遍历构造二叉树。
 * @author angle
 * @date 2020-08-03
 * @export
 * @param {number[]} preorder 前序遍历
 * @param {number[]} inorder 中序遍历
 * @returns {(TreeNode | null)}
 */
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return buildTreeHandler(
    preorder,
    0,
    preorder.length,
    inorder,
    0,
    inorder.length,
    inorder.reduce<Record<number, number>>((prev, curr, index) => {
      prev[curr] = index;
      return prev;
    }, {})
  );
}
