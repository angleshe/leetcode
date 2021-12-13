/* eslint-disable no-bitwise */
function dfs(
  heights: number[][],
  x: number,
  y: number,
  map: number[][],
  type: 'p' | 'x',
  res: number[][]
): void {
  const bit = type === 'p' ? 1 : 2;
  if (!(map[x][y] & bit)) {
    map[x][y] |= bit;
    if (map[x][y] & 4) {
      res.push([x, y]);
    } else {
      map[x][y] |= 4;
    }
    const pos: number[][] = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];
    pos.forEach(([xPos, yPos]) => {
      const newX = x + xPos;
      const newY = y + yPos;
      if (
        newX >= 0 &&
        newX < heights.length &&
        newY >= 0 &&
        newY < heights[0].length &&
        heights[newX][newY] >= heights[x][y]
      ) {
        dfs(heights, newX, newY, map, type, res);
      }
    });
  }
}

/**
 * @description 找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标
 * @author angle
 * @date 2021-12-13
 * @export
 * @param {number[][]} heights
 * @returns {number[][]}
 */
export function pacificAtlantic(heights: number[][]): number[][] {
  const res: number[][] = [];
  if (heights.length) {
    const map: number[][] = Array.from(Array(heights.length), () =>
      Array(heights[0].length).fill(0)
    );
    for (let i = 0; i < heights.length; i++) {
      dfs(heights, i, 0, map, 'p', res);
      dfs(heights, i, heights[0].length - 1, map, 'x', res);
    }
    for (let i = 0; i < heights[0].length; i++) {
      dfs(heights, 0, i, map, 'p', res);
      dfs(heights, heights.length - 1, i, map, 'x', res);
    }
  }
  return res;
}
