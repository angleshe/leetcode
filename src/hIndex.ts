/**
 * @description 计算出研究者的 h 指数。
 * @author angle
 * @date 2021-02-08
 * @export
 * @param {number[]} citations
 * @returns {number} 总共有 h 篇论文分别被引用了至少 h 次。且其余的 N - h 篇论文每篇被引用次数 不超过 h 次
 */
export function hIndex(citations: number[]): number {
  const counts: number[] = Array(citations.length).fill(0);
  citations.forEach((item) => {
    counts[Math.min(citations.length - 1, item - 1)]++;
  });
  let k: number = counts.length - 1;
  for (let i: number = counts[k] + 1; i <= k + 1; i += counts[k]) {
    k--;
  }
  return k + 1;
}
