export function insert(intervals: number[][], newInterval: number[]): number[][] {
  let minIndex: number = intervals.length;
  let maxIndex: number = -1;

  for (let i: number = 0; i < intervals.length; i++) {
    if (minIndex === intervals.length && newInterval[0] <= intervals[i][1]) {
      minIndex = i;
    }
    if (newInterval[1] >= intervals[i][0]) {
      maxIndex = i;
    }
  }
  if (minIndex === intervals.length) {
    intervals.push(newInterval);
  } else {
    intervals.splice(
      minIndex,
      maxIndex - minIndex + 1,
      newInterval[1] < intervals[minIndex][0]
        ? newInterval
        : [
            Math.min(newInterval[0], intervals[minIndex][0]),
            Math.max(newInterval[1], intervals[maxIndex][1])
          ]
    );
  }
  return intervals;
}
