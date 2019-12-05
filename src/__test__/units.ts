/**
 * @description 判断参数类型
 * @author angle
 * @date 2019-11-07
 * @param {*} param 判断的参数
 * @param {string} type 类型名
 * @returns {boolean} 是否是指定类型的参数
 */
function isType (param: any, type: string): boolean {
  return Object.prototype.toString.call(param) === `[object ${type}]`;
}
/**
 * @description 判断参数是否为Array
 * @author angle
 * @date 2019-11-07
 * @export
 * @param {*} param 测试参数
 * @returns {boolean} 是否为Array
 */
export function isArray (param: any): boolean {
  return isType(param, 'Array');
}

/**
 * @description 显示内容
 * @author angle
 * @date 2019-11-19
 * @param {*} content
 * @returns {string}
 */
export function showContent (content: any): string {
  let res: string = ''
  if (isArray(content)) {
    res = JSON.stringify(content)
  }
  return res
}
