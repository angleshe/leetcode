interface IListNode {
  key: number;
  value: number;
  next: IListNode | null;
  prev: IListNode | null;
}
/**
 * @description LRU (最近最少使用) 缓存机制
 * @author angle
 * @date 2020-09-27
 * @export
 * @class LRUCache
 */
export class LRUCache {
  private listNodeHead: IListNode | null = null;
  private listNodeEnd: IListNode | null = null;
  private map: Map<number, IListNode> = new Map<number, IListNode>();
  private cacheSize: number;
  private size: number = 0;

  constructor(capacity: number) {
    this.cacheSize = capacity;
  }
  /**
   * @description 获取缓存中的值
   * @author angle
   * @date 2020-09-27
   * @param {number} key
   * @returns {number}
   * @memberof LRUCache
   */
  get(key: number): number {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      if (this.listNodeHead !== node) {
        if (this.listNodeEnd === node) {
          this.listNodeEnd = node.prev;
        }
        node.prev!.next = node.next;
        if (node.next) {
          node.next.prev = node.prev;
        }
        node.next = this.listNodeHead;
        this.listNodeHead!.prev = node;
        node.prev = null;
        this.listNodeHead = node;
      }
      return node.value;
    }
    return -1;
  }
  /**
   * @description 写入缓存中
   * @author angle
   * @date 2020-09-27
   * @param {number} key
   * @param {number} value
   * @memberof LRUCache
   */
  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const item = this.map.get(key)!;
      item.value = value;
      this.get(key);
    } else {
      if (this.size >= this.cacheSize) {
        this.map.delete(this.listNodeEnd!.key);
        this.listNodeEnd = this.listNodeEnd!.prev;
        if (this.listNodeEnd) {
          this.listNodeEnd.next = null;
        }
        this.size--;
      }
      const temp = this.listNodeHead;
      this.listNodeHead = {
        key,
        value,
        prev: null,
        next: temp
      };
      if (temp) {
        temp.prev = this.listNodeHead;
      }
      if (this.listNodeEnd === null) {
        this.listNodeEnd = this.listNodeHead;
      }
      this.map.set(key, this.listNodeHead);
      this.size++;
    }
  }
}
