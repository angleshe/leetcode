interface INode {
  char: string;
  count: number;
  next?: INode;
  prev?: INode;
}
/**
 * @description 将字符串里的字符按照出现的频率降序排列
 * @author angle
 * @date 2022-01-19
 * @export
 * @param {string} s
 * @returns {string}
 */
export function frequencySort(s: string): string {
  const map = new Map<string, INode>();
  const head: INode = {
    char: '',
    count: 0
  };
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const targetNode = map.get(s[i])!;
      targetNode.count++;
      while (targetNode.next && targetNode.count > targetNode.next.count) {
        const prevNode = targetNode.next;
        targetNode.next = prevNode.next;
        if (targetNode.next) {
          targetNode.next.prev = targetNode;
        }
        targetNode.prev!.next = prevNode;
        prevNode.prev = targetNode.prev;
        prevNode.next = targetNode;
        targetNode.prev = prevNode;
      }
    } else {
      const targetNode: INode = {
        char: s[i],
        count: 1
      };
      targetNode.next = head.next;
      if (head.next) {
        head.next.prev = targetNode;
      }
      head.next = targetNode;
      targetNode.prev = head;
      map.set(s[i], targetNode);
    }
  }
  let res: string = '';
  let target = head.next;
  while (target) {
    res = target.char + res;
    if (--target.count === 0) {
      target = target.next;
    }
  }

  return res;
}
