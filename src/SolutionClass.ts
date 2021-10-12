import { ListNode } from '../model/ListNode';

export class Solution {
  private list: ListNode | null;

  constructor(head: ListNode | null) {
    this.list = head;
  }

  /**
   * @description 随机选择链表的一个节点值
   * @author angle
   * @date 2021-10-12
   * @returns {number}
   * @memberof Solution
   */
  getRandom(): number {
    let count: number = 0;
    let target = this.list;
    let res: number = NaN;
    while (target) {
      count++;
      const random = Math.floor(Math.random() * count);
      if (random === 0) {
        res = target.val;
      }
      target = target.next;
    }
    return res;
  }
}
