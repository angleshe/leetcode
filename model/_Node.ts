export class _Node<T = number> {
  public val: T;
  public children: _Node<T>[];

  constructor(val: T, children: _Node<T>[] = []) {
    this.val = val;
    this.children = children;
  }

  static createNumberNode(arr: [number, null, ...Array<number | null>]): _Node {
    function dfs(arr: Array<number | null>, index: number, nodeArr: _Node[]): void {
      if (index < arr.length && nodeArr.length) {
        const nextNodeArr: _Node[] = [];
        for (let i = 0; i < nodeArr.length; i++) {
          while (index < arr.length && arr[index] !== null) {
            const node = new _Node(arr[index] as number);
            nodeArr[i].children.push(node);
            nextNodeArr.push(node);
            index++;
          }

          if (index >= arr.length) {
            break;
          } else {
            index++;
          }
        }
        dfs(arr, index, nextNodeArr);
      }
    }
    const [first, _, ...other] = arr;
    const node = new _Node(first);
    dfs(other, 0, [node]);
    return node;
  }

  toArray(): (T | null)[] {
    function dfs(nodeArr: (_Node<T> | null)[], res: (T | null)[]): void {
      if (nodeArr.length === 0) {
        return;
      }
      const nextNodeArr: (_Node<T> | null)[] = [];
      nodeArr.forEach((node) => {
        if (node) {
          res.push(node.val);
          nextNodeArr.push(...node.children);
          nextNodeArr.push(null);
        } else {
          res.push(node);
        }
      });
      dfs(nextNodeArr, res);
    }

    function deleteNull(arr: (T | null)[]): void {
      while (arr[arr.length - 1] === null) {
        arr.pop();
      }
    }

    const res: (T | null)[] = [];
    dfs([this, null], res);
    deleteNull(res);
    return res;
  }
}
