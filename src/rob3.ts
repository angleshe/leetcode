import { TreeNode } from '../model/TreeNode';

function handleRob(root: TreeNode | null): [number, number] {
  if (root) {
    const left = handleRob(root.left);
    const right = handleRob(root.right);
    const selected = root.val + left[0] + right[0];
    const unSelected = Math.max(...left) + Math.max(...right);
    return [unSelected, selected];
  }
  return [0, 0];
}
/**
 * @description 触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * @author angle
 * @date 2021-05-24
 * @export
 * @param {(TreeNode | null)} root 每个房屋存放金额,如果相邻节点的房屋在同一晚上被小偷闯入，系统会自动报警。
 * @returns {number}
 */
export function rob(root: TreeNode | null): number {
  return Math.max(...handleRob(root));
}
