import Node from '../model/MapNode';

/**
 * @description 深拷贝无向连通图
 * @author angle
 * @date 2020-09-10
 * @export
 * @param {(Node | null)} node
 * @returns {(Node | null)}
 */
export function cloneGraph(node: Node | null): Node | null {
  const map: Map<Node, Node> = new Map<Node, Node>();
  function dfs(targetNode: Node, current: Node): void {
    if (map.has(targetNode)) {
      current.neighbors.push(map.get(targetNode)!);
    } else {
      const newNode = new Node(targetNode.val);
      map.set(targetNode, newNode);
      for (const item of targetNode.neighbors) {
        dfs(item, newNode);
      }
      current.neighbors.push(newNode);
    }
  }
  if (node) {
    const res: Node = new Node(0);
    dfs(node, res);
    return res.neighbors[0];
  }
  return null;
}
