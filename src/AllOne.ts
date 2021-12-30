class Node {
  value: number;
  key: string;
  next?: Node;
  prev?: Node;
  up?: Node;
  down?: Node;

  constructor(key: string, value: number) {
    this.key = key;
    this.value = value;
  }
}
class HNodeList {
  pseudoHead: Node;
  pseudoTail: Node;

  constructor() {
    this.pseudoHead = new Node('', -Infinity);
    this.pseudoTail = new Node('', Infinity);
    this.pseudoHead.next = this.pseudoTail;
    this.pseudoTail.prev = this.pseudoHead;
  }
  insert(prevNode: Node, node: Node, nextNode: Node): void {
    if (prevNode.value === node.value) {
      prevNode.prev!.next = node;
      node.prev = prevNode.prev;
      node.next = nextNode;
      nextNode.prev = node;
      node.down = prevNode;
      prevNode.up = node;
      prevNode.next = undefined;
      prevNode.prev = undefined;
    } else if (nextNode.value === node.value) {
      prevNode.next = node;
      node.prev = prevNode;
      node.next = nextNode.next;
      nextNode.next!.prev = node;
      node.down = nextNode;
      nextNode.up = node;
      nextNode.next = undefined;
      nextNode.prev = undefined;
    } else {
      prevNode.next = node;
      node.prev = prevNode;
      node.next = nextNode;
      nextNode.prev = node;
    }
  }

  remove(node: Node): void {
    const prevNode = node.prev!;
    const nextNode = node.next!;

    if (node.down) {
      prevNode.next = node.down;
      node.down.prev = prevNode;
      nextNode.prev = node.down;
      node.down.next = nextNode;
    } else {
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    node.prev = undefined;
    node.next = undefined;
  }
}

class VNodeList {
  pseudoTop: Node;
  pseudoBottom: Node;
  size: number;

  constructor(value: number) {
    this.pseudoTop = new Node('', value);
    this.pseudoBottom = new Node('', value);
    this.pseudoTop.down = this.pseudoBottom;
    this.pseudoBottom.up = this.pseudoTop;
    this.size = 0;
  }

  insert(node: Node): void {
    const head = this.pseudoTop.down!;
    this.pseudoTop.down = node;
    node.up = this.pseudoTop;
    node.down = head;
    head.up = node;
    this.size++;
  }

  remove(node: Node): void {
    node.up!.down = node.down;
    node.down!.up = node.up;
    if (--this.size === 0) {
      node.up = undefined;
      node.down = undefined;
    }
  }
}

/**
 * @description 全 O(1) 的数据结构
 * @author angle
 * @date 2021-12-30
 * @export
 * @class AllOne
 */
export class AllOne {
  private nodeMap: Map<string, Node>;
  private vListMap: Map<number, VNodeList>;
  private hList: HNodeList;
  constructor() {
    this.nodeMap = new Map();
    this.vListMap = new Map();
    this.hList = new HNodeList();
  }

  private remove(node: Node): void {
    const vList = this.vListMap.get(node.value)!;
    vList.remove(node);
    if (!vList.size) {
      this.vListMap.delete(node.value);
    }
    if (node.next) {
      this.hList.remove(node);
    }
  }

  private insert(prevNode: Node, node: Node, nextNode: Node): void {
    if (this.vListMap.has(node.value)) {
      const vList = this.vListMap.get(node.value)!;
      vList.insert(node);
    } else {
      const vList = new VNodeList(node.value);
      vList.insert(node);
      this.vListMap.set(node.value, vList);
    }
    this.hList.insert(prevNode, node, nextNode);
  }

  /**
   * @description  插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串
   * @author angle
   * @date 2021-12-30
   * @param {string} key
   * @memberof AllOne
   */
  inc(key: string): void {
    if (this.nodeMap.has(key)) {
      const node = this.nodeMap.get(key)!;
      let vList = this.vListMap.get(node.value)!;
      const prevNode = vList.pseudoTop.down!.prev!;
      const nextNode = vList.pseudoTop.down!.next!;
      this.remove(node);
      node.value++;
      if (this.vListMap.has(node.value - 1)) {
        vList = this.vListMap.get(node.value - 1)!;
        this.insert(vList.pseudoTop.down!, node, nextNode);
      } else {
        this.insert(prevNode, node, nextNode);
      }
    } else {
      const node = new Node(key, 1);
      this.nodeMap.set(key, node);
      this.insert(this.hList.pseudoHead, node, this.hList.pseudoHead.next!);
    }
  }
  /**
   * @description 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否则使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。
   * @author angle
   * @date 2021-12-30
   * @param {string} key
   * @memberof AllOne
   */
  dec(key: string): void {
    if (this.nodeMap.has(key)) {
      const node = this.nodeMap.get(key)!;
      let vList = this.vListMap.get(node.value)!;
      const prevNode = vList.pseudoTop.down!.prev!;
      const nextNode = vList.pseudoTop.down!.next!;
      this.remove(node);

      if (--node.value) {
        if (this.vListMap.has(node.value + 1)) {
          vList = this.vListMap.get(node.value + 1)!;
          this.insert(prevNode, node, vList.pseudoTop.down!);
        } else {
          this.insert(prevNode, node, nextNode);
        }
      } else {
        this.nodeMap.delete(key);
      }
    }
  }
  /**
   * @description 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串""
   * @author angle
   * @date 2021-12-30
   * @returns {string}
   * @memberof AllOne
   */
  getMaxKey(): string {
    return this.hList.pseudoTail.prev!.key;
  }
  /**
   * @description 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串""
   * @author angle
   * @date 2021-12-30
   * @returns {string}
   * @memberof AllOne
   */
  getMinKey(): string {
    return this.hList.pseudoHead.next!.key;
  }
}
