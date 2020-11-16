/**
 * @description 判断是否可能完成所有课程的学习
 * @author angle
 * @date 2020-11-16
 * @export
 * @param {number} numCourses 0 到 numCourse-1门课程
 * @param {number[][]} prerequisites 在选修某些课程之前需要一些先修课程
 * @returns {boolean}
 */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const indegrees: number[] = Array<number>(numCourses).fill(0);
  const adjacency: Map<number, number[]> = new Map<number, number[]>();
  prerequisites.forEach((item) => {
    indegrees[item[0]]++;
    if (adjacency.has(item[1])) {
      const arr = adjacency.get(item[1])!;
      arr.push(item[0]);
    } else {
      adjacency.set(item[1], [item[0]]);
    }
  });
  const queue: number[] = [];
  indegrees.forEach((item, index) => {
    if (item === 0) {
      queue.push(index);
    }
  });
  while (queue.length) {
    const target = queue.shift()!;
    numCourses--;
    adjacency.get(target)?.forEach((item) => {
      if (--indegrees[item] === 0) {
        queue.push(item);
      }
    });
  }
  return !numCourses;
}
