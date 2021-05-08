/**
 * @description 验证以逗号分隔的序列是否是正确的二叉树的前序序列化
 * @author angle
 * @date 2021-05-08
 * @export
 * @param {string} preorder
 * @returns {boolean}
 */
export function isValidSerialization(preorder: string): boolean {
  if (preorder === '#') {
    return true;
  }
  const preorderArr = preorder.split(',');
  let inDegree = 0;
  let outDegree = 0;
  for (let i: number = 0; i < preorderArr.length; i++) {
    if (i === 0 && preorderArr[i] === '#') {
      return false;
    }
    if (preorderArr[i] !== '#') {
      outDegree += 2;
    }
    if (i !== 0) {
      inDegree++;
    }
    if (i !== preorderArr.length - 1 && inDegree >= outDegree) {
      return false;
    }
  }
  return inDegree === outDegree;
}
