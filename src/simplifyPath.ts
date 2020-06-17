/**
 * @description 转化规范Unix风格绝对路径
 * @author angle
 * @date 2020-06-17
 * @export
 * @param {string} path 不规范路径
 * @returns {string} 转换后路径
 */
export function simplifyPath(path: string): string {
  const pathArr: string[] = [];
  let i: number = 0;
  let pathName: string = '';
  while (i < path.length) {
    if (path[i] !== '/') {
      pathName += path[i];
    }
    if ((path[i] === '/' || i === path.length - 1) && pathName) {
      if (pathName === '..') {
        pathArr.pop();
      } else if (pathName !== '.') {
        pathArr.push(pathName);
      }
      pathName = '';
    }
    i++;
  }
  return `/${pathArr.join('/')}`;
}
