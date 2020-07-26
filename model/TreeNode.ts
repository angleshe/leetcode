export class TreeNode<T = number> {
  public val: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    val: T = 0 as any,
    left: TreeNode<T> | null = null,
    right: TreeNode<T> | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  public static createdNumberTree(data: Array<number | null>): TreeNode<number> | null {
    let head: TreeNode<number> | null = null;
    let i: number = 0;
    const list: TreeNode[] = [];
    while (i < data.length) {
      if (i === 0 && data[i] !== null) {
        head = new TreeNode(data[i++]!);
        list.push(head);
      } else if (list.length) {
        const len = list.length;
        for (let j: number = 0; j < 2 * len && i < data.length; j++) {
          const index: number = Math.floor(j / 2);
          if (data[i] !== null) {
            const val: TreeNode = new TreeNode(data[i]!);
            list[index][j % 2 === 0 ? 'left' : 'right'] = val;
            list.push(val);
          }
          i++;
        }
        list.splice(0, len);
      } else {
        break;
      }
    }
    return head;
  }

  public toString(): Array<T | null> {
    const res: Array<T | null> = [this.val];
    const list: TreeNode<T>[] = [this];
    while (list.length) {
      if (list[0].left) {
        list.push(list[0].left);
        res.push(list[0].left.val);
      } else {
        res.push(null);
      }
      if (list[0].right) {
        list.push(list[0].right);
        res.push(list[0].right.val);
      } else {
        res.push(null);
      }
      list.splice(0, 1);
    }
    while (res.length && !res[res.length - 1]) {
      res.pop();
    }
    return res;
  }
}
