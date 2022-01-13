import { ListNode } from '../model/ListNode';

/**
 * @description 将这两个链表相加会返回一个新的链表
 * @author angle
 * @date 2022-01-13
 * @export
 * @param {(TreeNode | null)} l1
 * @param {(TreeNode | null)} l2
 * @returns {(TreeNode | null)}
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const stack1: number[] = [];
  const stack2: number[] = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry: number = 0;
  let res: ListNode | null = null;
  while (stack1.length || stack2.length || carry) {
    const val1 = stack1.pop() ?? 0;
    const val2 = stack2.pop() ?? 0;
    let count = val1 + val2 + carry;
    if (count > 9) {
      carry = 1;
      count %= 10;
    } else {
      carry = 0;
    }
    const node = new ListNode(count);
    node.next = res;
    res = node;
  }
  return res;
}
