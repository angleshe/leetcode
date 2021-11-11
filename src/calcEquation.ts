/**
 * @description 返回所有问题答案
 * @author angle
 * @date 2021-11-11
 * @export
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @returns {number[]}
 */
export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const parents: Record<string, string> = {};
  const weights: Record<string, number> = {};
  const set = new Set<string>();

  function findRoot(item: string): string {
    if (parents[item]) {
      const origin = parents[item];
      parents[item] = findRoot(parents[item]);
      weights[item] *= weights[origin] ?? 1;
      return parents[item];
    }
    return item;
  }
  for (let i: number = 0; i < equations.length; i++) {
    const [val1, val2] = equations[i];
    set.add(val1);
    set.add(val2);
    const value = values[i];
    const [val1Root, val2Root] = [findRoot(val1), findRoot(val2)];

    if (val1Root !== val2Root) {
      parents[val2Root] = val1Root;
      weights[val2Root] = ((weights[val1] ?? 1) * value) / (weights[val2] ?? 1);
    }
  }

  return queries.map<number>(([val1, val2]) => {
    const [val1Root, val2Root] = [findRoot(val1), findRoot(val2)];
    return set.has(val1) && set.has(val2) && val1Root === val2Root
      ? Math.round(((weights[val2] ?? 1) / (weights[val1] ?? 1)) * 100000) / 100000
      : -1;
  });
}
