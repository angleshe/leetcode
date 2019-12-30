/**
 * @description 链表节点
 * @author angle
 * @date 2019-12-27
 * @export
 * @class ListNode
 */
export class ListNode<T> {
  /**
   * @description 链表值
   * @type {T}
   * @memberof ListNode
   */
  public val: T;
  /**
   * @description 链表下一位
   * @type {(ListNode | null)}
   * @memberof ListNode
   */
  public next: ListNode<T> | null = null;
  constructor(val: T) {
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
    let res: string = '' + this.val;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let pos: ListNode<T> = this;
    while (pos.next !== null) {
      res += `->${pos.next.val}`;
      pos = pos.next;
    }
    return res;
  }
  /**
   * @description 创建链表
   * @author angle
   * @date 2019-12-30
   * @static
   * @param {string} initStr 初始化值
   * @returns {(ListNode<number> | undefined)} 链表
   * @memberof ListNode
   */
  public static createList(initStr: string): ListNode<number> | undefined {
    if (initStr.trim() === '') {
      return undefined;
    }
    let res: ListNode<number> | undefined;
    let node: ListNode<number> | undefined;
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
