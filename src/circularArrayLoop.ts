const MAX_STEP = 2000;
/**
 * @description 环形数组是否存在循环
 * @author angle
 * @date 27/01/2022
 * @export
 * @param {number[]} nums
 * @return {*}  {boolean}
 */
export function circularArrayLoop(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < MAX_STEP) {
      const flag = nums[i] > 0;
      const tag = MAX_STEP + i;
      let targetIndex: number = i;
      while (nums[targetIndex] < MAX_STEP) {
        const next =
          (((targetIndex + nums[targetIndex]) % nums.length) + nums.length) % nums.length;

        nums[targetIndex] = tag;

        if (targetIndex !== next && nums[next] === tag) {
          return true;
        }

        // eslint-disable-next-line no-bitwise
        if (Number(flag) ^ Number(nums[next] > 0)) {
          break;
        }

        targetIndex = next;
      }
    }
  }
  return false;
}
