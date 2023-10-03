/* https://leetcode.com/problems/array-upper-bound/

Write code that enhances all arrays such that you can call the upperBound() method on any array and it will return the last index of a given target number. nums is a sorted ascending array of numbers that may contain duplicates. If the target number is not found in the array, return -1.

Example 1:

Input: nums = [3,4,5], target = 5
Output: 2
Explanation: Last index of target value is 2

Example 2:

Input: nums = [1,4,5], target = 2
Output: -1
Explanation: Because there is no digit 2 in the array, return -1.

Example 3:

Input: nums = [3,4,6,6,6,6,7], target = 6
Output: 5
Explanation: Last index of target value is 5

Constraints:

1 <= nums.length <= 10^4
-10^4 <= nums[i], target <= 10^4
nums is sorted in ascending order. */

declare global {
    /* eslint-disable-next-line */
    interface Array<T> {
        upperBound(target: number): number;
    }
}

Array.prototype.upperBound = function (target: number): number {
    let i = this.length;

    while (i--) {
        if (this[i] === target) {
            return i;
        }
    }

    return -1;
};
