type TargetNode = { $ref: string };
export interface INodeObj {
  $id: string;
  val: number;
  left: INodeObj | TargetNode | null;
  right: INodeObj | TargetNode | null;
  next: INodeObj | TargetNode | null;
}

class Node {
  public val: number = 0;
  public left: Node | null = null;
  public right: Node | null = null;
  public next: Node | null = null;

  private static idMap: Map<string, Node> = new Map<string, Node>();
  private nodeMap: Map<Node, string> = new Map<Node, string>();
  private id: number = 1;

  constructor(
    val: number = 0,
    left: Node | null = null,
    right: Node | null = null,
    next: Node | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }

  public static createdNumberNode(data: INodeObj): Node {
    const node = new Node(data.val);
    Node.idMap.set(data.$id, node);
    node.left = Node.getNode(data.left);
    node.next = Node.getNode(data.next);
    node.right = Node.getNode(data.right);
    return node;
  }

  public toString(data: Node = this): INodeObj {
    const id: string = this.id.toString();
    this.id++;
    this.nodeMap.set(data, id);
    return {
      $id: id,
      left: this.getNodeObj(data.left),
      next: this.getNodeObj(data.next),
      right: this.getNodeObj(data.right),
      val: data.val
    };
  }

  private static getNode(data: INodeObj | TargetNode | null): Node | null {
    if (data === null) {
      return null;
    }
    if ((data as INodeObj).$id !== undefined) {
      return Node.createdNumberNode(data as INodeObj);
    }
    return Node.idMap.get((data as TargetNode).$ref) ?? null;
  }

  private getNodeObj(data: Node | null): INodeObj | TargetNode | null {
    if (data === null) {
      return null;
    }
    if (this.nodeMap.has(data)) {
      return { $ref: this.nodeMap.get(data)! };
    }
    return this.toString(data);
  }
}

export default Node;
