import { _Node } from '../model/_Node';

export function postorder(root: _Node | null): number[] {
  function dfs(node: _Node | null, res: number[]): void {
    if (!node) {
      return;
    }

    node.children.forEach((child) => dfs(child, res));
    res.push(node.val);
  }

  const res: number[] = [];
  dfs(root, res);
  return res;
}
