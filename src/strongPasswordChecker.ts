const zeroCode = '0'.charCodeAt(0);
const nineCode = '9'.charCodeAt(0);
const aCode = 'a'.charCodeAt(0);
const zCode = 'z'.charCodeAt(0);
const ACode = 'A'.charCodeAt(0);
const ZCode = 'Z'.charCodeAt(0);
/**
 * @description 返回将password修改到满足强密码条件需要的最少修改步数
 * @author angle
 * @date 2021-12-15
 * @export
 * @param {string} password
 * @returns {number}
 */
export function strongPasswordChecker(password: string): number {
  const mod = [0, 0, 0];
  let repeatCount: number = 0;
  let ruleCount: number = 0;
  const rule = {
    hasNumber: false,
    hasLowercase: false,
    hasCapital: false
  };
  let i: number = 0;
  while (i < password.length) {
    const charCode = password.charCodeAt(i);
    if (!rule.hasNumber && charCode >= zeroCode && charCode <= nineCode) {
      rule.hasNumber = true;
      ruleCount++;
    } else if (!rule.hasLowercase && charCode >= aCode && charCode <= zCode) {
      rule.hasLowercase = true;
      ruleCount++;
    } else if (!rule.hasCapital && charCode >= ACode && charCode <= ZCode) {
      rule.hasCapital = true;
      ruleCount++;
    }
    const target = password[i];
    let count = 1;
    while (target === password[++i]) {
      count++;
    }
    if (count > 2) {
      repeatCount += Math.floor(count / 3);
      mod[count % 3]++;
    }
  }
  const missingType = Math.max(0, 3 - ruleCount);
  if (password.length < 6) {
    return Math.max(missingType, 6 - password.length);
  }
  if (password.length <= 20) {
    return Math.max(repeatCount, missingType);
  }

  let deleteCount = password.length - 20;
  if (deleteCount < mod[0]) {
    return Math.max(missingType, repeatCount - deleteCount) + deleteCount;
  }

  repeatCount -= mod[0];
  deleteCount -= mod[0];

  if (deleteCount < mod[1] * 2) {
    return Math.max(missingType, repeatCount - Math.floor(deleteCount / 2)) + password.length - 20;
  }

  repeatCount -= mod[1];
  deleteCount -= 2 * mod[1];

  return Math.max(missingType, repeatCount - Math.floor(deleteCount / 3)) + password.length - 20;
}
