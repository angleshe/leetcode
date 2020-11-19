/**
 * @description 学完所有课程所安排的学习顺序
 * @author angle
 * @date 2020-11-19
 * @export
 * @param {number} numCourses 0 到 numCourse-1门课程
 * @param {number[][]} prerequisites 在选修某些课程之前需要一些先修课程
 * @returns {number[]}
 */
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const indegrees: number[] = Array<number>(numCourses).fill(0);
  const adjacency: Map<number, number[]> = new Map<number, number[]>();
  const res: number[] = [];
  for (let i: number = 0; i < prerequisites.length; i++) {
    indegrees[prerequisites[i][0]]++;
    if (adjacency.has(prerequisites[i][1])) {
      adjacency.get(prerequisites[i][1])!.push(prerequisites[i][0]);
    } else {
      adjacency.set(prerequisites[i][1], [prerequisites[i][0]]);
    }
  }
  const queue: number[] = [];
  for (let i: number = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const target = queue.shift()!;
    res.push(target);
    if (adjacency.has(target)) {
      adjacency.get(target)!.forEach((item) => {
        if (--indegrees[item] === 0) {
          queue.push(item);
        }
      });
    }
  }

  return res.length === numCourses ? res : [];
}
