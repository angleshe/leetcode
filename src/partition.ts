import { ListNode } from '../model/ListNode';

export function partition(head: ListNode<number> | null, x: number): ListNode<number> | null {
  if (head) {
    const res: ListNode<number> = new ListNode(0);
    res.next = head;
    head = null;
    let target: ListNode<number> = res;
    while (target.next) {
      if (head === null && target.next.val >= x) {
        head = target;
      }
      if (head && target.next.val < x) {
        const list1: ListNode<number> = target.next;
        const list2: ListNode<number> | null = head.next;
        target.next = list1.next;
        head.next = list1;
        list1.next = list2;
        head = head.next;
      } else {
        target = target.next;
      }
    }
    return res.next;
  }
  return null;
}
