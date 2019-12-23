/**
 * @description 链表
 * @author angle
 * @date 2019-12-23
 * @export
 * @interface IListNode
 */
export interface IListNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  val: any;
  next: IListNode | null;
}
/**
 * @description 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * @author angle
 * @date 2019-12-23
 * @export
 * @param {IListNode} head 链表头
 * @param {number} n 删除倒数节点
 * @returns {(IListNode | null)} 删除后链表头
 */
export function removeNthFromEnd(head: IListNode, n: number): IListNode | null {
  // const listArr: IListNode[] = [];
  // let item: IListNode | null = head;
  // while (item !== null) {
  //   listArr.push(item);
  //   item = item.next;
  // }
  // const l: number = listArr.length - n - 1;
  // if (l < 0) {
  //   return head.next;
  // }
  // const r: number = l + 2;
  // if (r >= listArr.length) {
  //   listArr[listArr.length - 2].next = null;
  // } else {
  //   listArr[l].next = listArr[r];
  // }
  // return head;
  let lItem: IListNode = {
    val: undefined,
    next: head
  };
  let rItem: IListNode | null = lItem;
  for (let i = 0; i <= n; i++) {
    rItem = (rItem as IListNode).next;
  }
  if (rItem !== null) {
    while (rItem !== null) {
      lItem = lItem.next as IListNode;
      rItem = rItem.next;
    }
    lItem.next = (lItem.next as IListNode).next;
    return head;
  }
  return head.next;
}

/**
 * @description 创建链表
 * @author angle
 * @date 2019-12-23
 * @export
 * @param {string} str 初始化链表数据
 * @returns {(IListNode | null)} 返回链表
 */
export function createList(str: string): IListNode | null {
  if (str) {
    let res: IListNode | null = null;
    let pos: IListNode = {
      val: undefined,
      next: null
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    str.split('->').forEach((item: any) => {
      if (res === null) {
        res = {
          val: item,
          next: null
        };
        pos = res;
      } else {
        pos.next = {
          val: item,
          next: null
        };
        pos = pos.next;
      }
    });
    return res;
  }
  return null;
}
/**
 * @description 显示链表
 * @author angle
 * @date 2019-12-23
 * @export
 * @param {(IListNode | null)} listNode 要显示的链表
 * @returns {string} 显示的字符串
 */
export function showListNode(listNode: IListNode | null): string {
  let res: string = '';
  while (listNode !== null) {
    res += res === '' ? listNode.val : `->${listNode.val}`;
    listNode = listNode.next;
  }
  return res;
}
