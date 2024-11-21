import { _Node } from '../model/_Node';

export function preorder(root: _Node | null): number[] {
  function dfs(node: _Node | null, res: number[]): void {
    if (!node) {
      return;
    }
    res.push(node.val);
    node.children.forEach((child) => dfs(child, res));
  }
  const res: number[] = [];
  dfs(root, res);
  return res;
}
