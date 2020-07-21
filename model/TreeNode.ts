export class TreeNode<T = number> {
  public val: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(
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
    if (data.length && data[0] !== null) {
      head = new TreeNode(data[0]);
      const stack: {
        node: TreeNode;
        leftStatus: boolean;
      }[] = [
        {
          node: head,
          leftStatus: false
        }
      ];
      for (let i: number = 1; i < data.length; i++) {
        const target: TreeNode<number> | null =
          data[i] === null ? null : new TreeNode(data[i] as number);
        if (stack[stack.length - 1].leftStatus) {
          stack[stack.length - 1].node.right = target;
          stack.pop();
        } else {
          stack[stack.length - 1].node.left = target;
          stack[stack.length - 1].leftStatus = true;
        }
        if (target) {
          stack.push({
            node: target,
            leftStatus: false
          });
        }
      }
    }
    return head;
  }
}
