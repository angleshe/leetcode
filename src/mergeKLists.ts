/**
 * @description 链表节点
 * @author angle
 * @date 2019-12-27
 * @export
 * @class ListNode
 */
export class ListNode {
  /**
   * @description 链表值
   * @type {number}
   * @memberof ListNode
   */
  public val: number;
  /**
   * @description 链表下一位
   * @type {(ListNode | null)}
   * @memberof ListNode
   */
  public next: ListNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
  /**
   * @description 链表toString方法
   * @author angle
   * @date 2019-12-27
   * @returns {string} 链表值
   * @memberof ListNode
   */
  public toString(): string {
    let res: string = this.val.toString();
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let pos: ListNode = this;
    while (pos.next !== null) {
      res += `->${pos.next.val}`;
      pos = pos.next;
    }
    return res;
  }
  /**
   * @description 创建链表
   * @author angle
   * @date 2019-12-27
   * @static
   * @param {string} initStr 初始化值
   * @returns {(ListNode | undefined)} 链表
   * @memberof ListNode
   */
  public static createList(initStr: string): ListNode | undefined {
    if (initStr.trim() === '') {
      return undefined;
    }
    let res: ListNode | undefined;
    let node: ListNode | undefined;
    initStr.split('->').forEach((item) => {
      if (node === undefined) {
        res = new ListNode(parseFloat(item));
        node = res;
      } else {
        node.next = new ListNode(parseFloat(item));
        node = node.next;
      }
    });
    return res;
  }
}
/**
 * @description 合并 k 个排序链表，返回合并后的排序链表。
 * @author angle
 * @date 2019-12-27
 * @export
 * @param {(Array<ListNode | null>)} lists 链表数组
 * @returns {(ListNode | null)} 合成后的链表
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }
  let res: ListNode | null = null;
  let node: ListNode | undefined;
  let nodeIndex: number = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) {
      if (res === null) {
        res = lists[i];
        nodeIndex = i;
      } else if ((lists[i] as ListNode).val < res.val) {
        res = lists[i];
        nodeIndex = i;
      }
    }
  }
  node = res as ListNode;
  // eslint-disable-next-line no-loop-func
  while (!lists.every((item, index) => index === nodeIndex || item === null)) {
    for (let i = 0; i < lists.length; i++) {
      if (
        lists[i] !== null &&
        (lists[i] as ListNode).val < (node.next === null ? Infinity : node.next.val)
      ) {
        lists[nodeIndex] = node.next;
        node.next = lists[i];
        nodeIndex = i;
      }
    }
    node = node.next as ListNode;
  }
  return res;
}
