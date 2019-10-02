/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length === 0){
        return 0;
    }
    let idx = nums.indexOf(target);
    if (idx >= 0){
        return idx;
    } else {
        idx = 0;
        while (nums[idx] < target){
            idx++;
        }
        return idx;

    }
};

const arr = [2, 3, 5, 8];
const target = 7;
const result = searchInsert(arr,  target);
console.log(`${target} should be inserted at index ${result} on array [${arr}]`);