import { ListNode } from '../model/ListNode';

/**
 * @description 判断一个链表是否为回文链表
 * @author angle
 * @date 2021-01-15
 * @export
 * @param {(ListNode | null)} head
 * @returns {boolean}
 */
export function isPalindrome(head: ListNode | null): boolean {
  if (head) {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let pre: ListNode | null = head;
    let prepre: ListNode | null = null;
    while (fast && fast.next) {
      pre = slow;
      slow = slow!.next;
      fast = fast.next.next;
      pre!.next = prepre;
      prepre = pre;
    }
    if (fast) {
      slow = slow!.next;
    }
    while (slow && pre) {
      if (slow.val !== pre.val) {
        return false;
      }
      slow = slow.next;
      pre = pre.next;
    }
  }
  return true;
}
