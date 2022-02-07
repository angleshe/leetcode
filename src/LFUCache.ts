class Node {
  key: number | null;
  value: number;

  freq: number;

  prev: Node | null = null;

  next: Node | null = null;

  constructor(val: number, key: number | null = null) {
    this.value = val;
    this.key = key;
    this.freq = 1;
  }
}
/**
 * @description 最不经常使用缓存
 * @author angle
 * @date 07/02/2022
 * @export
 * @class LFUCache
 */
export class LFUCache {
  private capacity: number;

  private cache = new Map<number, Node>();

  private head: Node;

  private listLen: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = new Node(0);
    this.head.freq = 0;
  }

  private removeNode(node: Node): void {
    node.prev!.next = node.next;
    if (node.next) {
      node.next.prev = node.prev;
    }
  }

  private moveNode(node: Node): void {
    let target: Node = node;
    while (target.next && node.freq >= target.next.freq) {
      target = target.next;
    }
    if (target !== node) {
      this.removeNode(node);
      node.prev = target;
      node.next = target.next;
      target.next = node;
      if (node.next) {
        node.next.prev = node;
      }
    }
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.freq++;
      this.moveNode(node);
      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      node.freq++;
      this.moveNode(node);
    } else {
      if (this.listLen === this.capacity) {
        const target = this.head.next;
        if (target) {
          this.removeNode(target);
          this.cache.delete(target.key!);
          this.listLen--;
        }
      }
      if (this.capacity) {
        const node = new Node(value, key);
        node.next = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        if (node.next) {
          node.next.prev = node;
        }
        this.moveNode(node);
        this.cache.set(key, node);
        this.listLen++;
      }
    }
  }
}
