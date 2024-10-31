/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const answer = target-nums[i];
    if (answer in map) {
        return [map[answer], i]
    }
    map[nums[i]] = i;
  }
};

var nums = [3, 2, 4],
  target = 6;
console.log(twoSum(nums, target));
