export function findRotateSteps(ring: string, key: string): number {
  const map: Record<string, number[]> = {};

  const len = ring.length;

  for (let i = 0; i < len; i++) {
    const s = ring[i];
    if (map[s]) {
      map[s].push(i);
    } else {
      map[s] = [i];
    }
  }

  return dfs(0, map, key, 0, len, new Map());
}

function dfs(
  index: number,
  ringMap: Record<string, number[]>,
  key: string,
  keyIndex: number,
  length: number,
  cache: Map<string, number>
): number {
  const cacheKey = `${index},${keyIndex}`;
  if (keyIndex === key.length) {
    return 0;
  }

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  const k = key[keyIndex];
  const indexs = ringMap[k];
  let res: number = Infinity;
  if (indexs) {
    indexs.forEach((targetIndex) => {
      const newSteps = getStep(index, targetIndex, length);
      const newRes = dfs(targetIndex, ringMap, key, keyIndex + 1, length, cache);
      res = Math.min(res, newSteps + newRes);
    });
  }

  cache.set(cacheKey, res);
  return res;
}

function getStep(index: number, targetIndex: number, length: number): number {
  const difference = Math.abs(targetIndex - index);
  return Math.min(difference, length - difference) + 1;
}
