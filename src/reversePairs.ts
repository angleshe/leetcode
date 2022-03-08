// function mergeSort(nums: number[], left: number, right: number): number {
//   if (right !== left) {
//     // eslint-disable-next-line no-bitwise
//     let mid: number = left + ((right - left) >> 1);
//     const leftCount = mergeSort(nums, left, mid);
//     const rightCount = mergeSort(nums, mid + 1, right);
//     let res: number = leftCount + rightCount;

//     let i: number = left;
//     let j: number = mid + 1;
//     while (i <= mid && j <= right) {
//       if (nums[i] > 2 * nums[j]) {
//         res += mid - i + 1;
//         j++;
//       } else {
//         i++;
//       }
//     }
//     // let j: number = right;
//     // for (let i = mid; i >= left; i--) {
//     //   while (j > mid) {
//     //     if (nums[i] > 2 * nums[j]) {
//     //       res += j - mid;
//     //       break;
//     //     }
//     //     j--;
//     //   }
//     // }

//     j = mid + 1;
//     while (left <= mid && j <= right) {
//       if (nums[left] > nums[j]) {
//         nums.splice(left, 0, nums.splice(j, 1)[0]);
//         mid++;
//         j++;
//       }
//       left++;
//     }
//     return res;
//   }
//   return 0;
// }

/**
 * @description 返回给定数组中的重要翻转对的数量
 * @author angle
 * @date 2022-03-07
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function reversePairs(nums: number[]): number {
  let res: number = 0;
  function mergeSort(left: number, right: number): void {
    if (right !== left) {
      // eslint-disable-next-line no-bitwise
      const mid: number = left + ((right - left) >> 1);
      mergeSort(left, mid);
      mergeSort(mid + 1, right);

      let i: number = left;
      let j: number = mid + 1;
      while (i <= mid && j <= right) {
        if (nums[i] > 2 * nums[j]) {
          res += mid - i + 1;
          j++;
        } else {
          i++;
        }
      }
      // let j: number = right;
      // for (let i = mid; i >= left; i--) {
      //   while (j > mid) {
      //     if (nums[i] > 2 * nums[j]) {
      //       res += j - mid;
      //       break;
      //     }
      //     j--;
      //   }
      // }

      // j = mid + 1;
      // while (left <= mid && j <= right) {
      //   if (nums[left] > nums[j]) {
      //     nums.splice(left, 0, nums.splice(j, 1)[0]);
      //     mid++;
      //     j++;
      //   }
      //   left++;
      // }
      i = left;
      j = mid + 1;
      const temp = new Array(right - left + 1);
      let index: number = 0;
      while (i <= mid && j <= right) {
        if (nums[i] < nums[j]) {
          temp[index] = nums[i];
          index++;
          i++;
        } else {
          temp[index] = nums[j];
          index++;
          j++;
        }
      }
      while (i <= mid) {
        temp[index] = nums[i];
        index++;
        i++;
      }
      while (j <= right) {
        temp[index] = nums[j];
        index++;
        j++;
      }
      for (let i = left, k = 0; i <= right; i++, k++) {
        nums[i] = temp[k];
      }
    }
  }
  if (nums.length) {
    mergeSort(0, nums.length - 1);
  }
  return res;
}
