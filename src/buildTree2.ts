import { TreeNode } from '../model/TreeNode';

function buildTreeHandler(
  iMap: Record<number, number>,
  iStart: number,
  iEnd: number,
  postorder: number[],
  pStart: number,
  pEnd: number
): TreeNode | null {
  if (pStart === pEnd) {
    return null;
  }
  const tree: TreeNode = new TreeNode(postorder[pEnd - 1]);
  const rightNum: number = iEnd - iMap[postorder[pEnd - 1]] - 1;
  tree.left = buildTreeHandler(
    iMap,
    iStart,
    iMap[postorder[pEnd - 1]],
    postorder,
    pStart,
    pEnd - rightNum - 1
  );
  tree.right = buildTreeHandler(
    iMap,
    iMap[postorder[pEnd - 1]] + 1,
    iEnd,
    postorder,
    pEnd - rightNum - 1,
    pEnd - 1
  );
  return tree;
}

/**
 * @description 根据一棵树的中序遍历与后序遍历构造二叉树
 * @author angle
 * @date 2020-08-04
 * @export
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @returns {(TreeNode | null)}
 */
export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  return buildTreeHandler(
    inorder.reduce<Record<number, number>>((prev, curr, index) => {
      prev[curr] = index;
      return prev;
    }, {}),
    0,
    inorder.length,
    postorder,
    0,
    postorder.length
  );
}
