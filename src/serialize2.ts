/* eslint-disable no-bitwise */
import { TreeNode } from '../model/TreeNode';

function numberToString(num: number): string {
  const codeArr: number[] = [];
  for (let i = 0; i < 4; i++) {
    codeArr.unshift(num & 0xff);
    num >>= 8;
  }
  return String.fromCharCode(...codeArr);
}

function stringToNumber(str: string[]): number {
  let num: number = 0;
  for (let i = 0; i < 4; i++) {
    num = (num << 8) | str[i].charCodeAt(0);
  }
  return num;
}

function preorder(root: TreeNode | null, str: string = ''): string {
  if (root) {
    str += numberToString(root.val);
    str = preorder(root.left, str);
    str = preorder(root.right, str);
  }
  return str;
}

function helper(data: string[], min: number = -1, max: number = Infinity): TreeNode | null {
  if (data.length) {
    const targetNum = stringToNumber(data);
    if (targetNum > min && targetNum < max) {
      data.splice(0, 4);
      const node = new TreeNode(targetNum);
      node.left = helper(data, min, targetNum);
      node.right = helper(data, targetNum, max);
      return node;
    }
  }
  return null;
}
/**
 * @description 序列化二叉搜索树
 * @author angle
 * @date 2022-01-17
 * @export
 * @param {(TreeNode | null)} root
 * @returns {string}
 */
export function serialize(root: TreeNode | null): string {
  return preorder(root);
}

/**
 * @description 反序列化二叉搜索树
 * @author angle
 * @date 2022-01-17
 * @export
 * @param {string} data
 * @returns {(TreeNode | null)}
 */
export function deserialize(data: string): TreeNode | null {
  return helper(data.split(''));
}
