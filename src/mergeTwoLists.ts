import { override, autobind } from 'core-decorators';
/**
 * @description 链表项
 * @author angle
 * @date 2019-12-25
 * @export
 * @class ListNode
 */
export class ListNode extends Object {
  /**
   * @description 链表值
   * @type {number}
   * @memberof ListNode
   */
  public val: number;
  /**
   * @description 链表下一位
   * @type {(null | ListNode)}
   * @memberof ListNode
   */
  public next: null | ListNode;
  /**
   *Creates an instance of ListNode.
   * @author angle
   * @date 2019-12-25
   * @param {number} val 链表项
   * @memberof ListNode
   */
  constructor(val: number) {
    super();
    this.val = val;
    this.next = null;
  }
  /**
   * @description 重写toString方法
   * @author angle
   * @date 2019-12-25
   * @returns {string} 链表内容
   * @memberof ListNode
   */
  @autobind
  @override
  public toString(): string {
    let res: string = this.val.toString();
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let node: ListNode | null = this;
    while (node.next !== null) {
      res += `->${node.next.val.toString()}`;
      node = node.next;
    }
    return res;
  }
  /**
   * @description 批量创建链表
   * @author angle
   * @date 2019-12-25
   * @static
   * @param {string} initStr 初始化数据
   * @returns {(ListNode | undefined)} 链表
   * @memberof ListNode
   */
  static creatList(initStr: string): ListNode | undefined {
    let res: undefined | ListNode;
    if (initStr) {
      let nodeItem: undefined | ListNode;
      const valArr: number[] = initStr.split('->').map<number>((item) => parseFloat(item));
      valArr.forEach((item: number) => {
        if (res === undefined || nodeItem === undefined) {
          res = new ListNode(item);
          nodeItem = res;
        } else {
          nodeItem.next = new ListNode(item);
          nodeItem = nodeItem?.next;
        }
      });
    }
    return res;
  }
}
/**
 * @description 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @author angle
 * @date 2019-12-25
 * @export
 * @param {ListNode} l1 链表1
 * @param {ListNode} l2 链表2
 * @returns {ListNode} 合并后链表
 */
export function mergeTwoLists(
  l1: ListNode | undefined,
  l2: ListNode | undefined
): ListNode | undefined {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  const res: ListNode = l1.val > l2.val ? l2 : l1;
  let mainList: ListNode = res;
  let otherList: ListNode | null = l1.val > l2.val ? l1 : l2;
  while (mainList.next !== null) {
    if (mainList.next.val > otherList.val) {
      [mainList.next, otherList] = [otherList, mainList.next];
    }
    mainList = mainList.next;
  }
  mainList.next = otherList;
  return res;
}
