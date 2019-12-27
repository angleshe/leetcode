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
}
