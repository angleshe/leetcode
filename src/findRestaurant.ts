export function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = list1.reduce<Record<string, number>>((m, v, i) => {
    m[v] = i;
    return m;
  }, {});

  let indexCount: number = Infinity;

  let res: string[] = [];

  list2.forEach((v, i) => {
    if (map[v] !== undefined) {
      const count = map[v] + i;
      if (count === indexCount) {
        res.push(v);
      } else if (count < indexCount) {
        indexCount = count;
        res = [v];
      }
    }
  });
  return res;
}
