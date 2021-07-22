export function canMeasureWater(
  jug1Capacity: number,
  jug2Capacity: number,
  targetCapacity: number
): boolean {
  if (targetCapacity === 0) {
    return true;
  }
  if (jug1Capacity + jug2Capacity < targetCapacity) {
    return false;
  }
  const stateHash = new Set<string>();
  let queue: Array<[number, number]> = [[0, 0]];
  //
  function pushQueue(data: [number, number], targetQueue: Array<[number, number]>): boolean {
    const hashKey = data.join(',');
    if (!stateHash.has(hashKey)) {
      if (data[0] === targetCapacity) {
        return true;
      }
      if (data[1] === targetCapacity) {
        return true;
      }
      if (data[0] + data[1] === targetCapacity) {
        return true;
      }
      targetQueue.push(data);
      stateHash.add(hashKey);
    }
    return false;
  }
  //
  while (queue.length) {
    const nextQueue: Array<[number, number]> = [];
    if (
      queue.some((item) => {
        if (item[0] !== jug1Capacity && pushQueue([jug1Capacity, item[1]], nextQueue)) {
          return true;
        }
        if (item[1] !== jug2Capacity && pushQueue([item[0], jug2Capacity], nextQueue)) {
          return true;
        }
        const count = item[0] + item[1];
        if (item[0] !== 0) {
          if (pushQueue([0, item[1]], nextQueue)) {
            return true;
          }
          if (item[1] !== jug2Capacity) {
            if (
              count > jug2Capacity &&
              pushQueue([count - jug2Capacity, jug2Capacity], nextQueue)
            ) {
              return true;
            }
            if (count <= jug2Capacity && pushQueue([0, count], nextQueue)) {
              return true;
            }
          }
        }
        if (item[1] !== 0) {
          if (pushQueue([item[0], 0], nextQueue)) {
            return true;
          }
          if (item[0] !== jug1Capacity) {
            if (
              count > jug1Capacity &&
              pushQueue([jug1Capacity, count - jug1Capacity], nextQueue)
            ) {
              return true;
            }
            if (count <= jug1Capacity && pushQueue([count, 0], nextQueue)) {
              return true;
            }
          }
        }
        return false;
      })
    ) {
      return true;
    }
    queue = nextQueue;
  }
  return false;
}
