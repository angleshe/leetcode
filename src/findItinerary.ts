function dfs(node: string, res: string[], ticketMap: Map<string, string[]>): void {
  const nextArr = ticketMap.get(node);
  while (nextArr && nextArr.length) {
    const next = nextArr.shift()!;
    dfs(next, res, ticketMap);
  }
  res.unshift(node);
}
/**
 * @description 重新安排行程
 * @author angle
 * @date 2021-05-12
 * @export
 * @param {string[][]} tickets
 * @returns {string[]}
 */
export function findItinerary(tickets: string[][]): string[] {
  const map = new Map<string, string[]>();

  tickets.forEach(([from, to]) => {
    let arr: string[] = [];
    if (map.has(from)) {
      arr = map.get(from)!;
    } else {
      map.set(from, arr);
    }
    arr.push(to);
  });

  map.forEach((arr, key) => {
    map.set(key, arr.sort());
  });

  const res: string[] = [];
  dfs('JFK', res, map);
  return res;
}
