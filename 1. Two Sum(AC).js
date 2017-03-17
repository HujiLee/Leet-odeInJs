/**
 * Created by Administrator on 2016/11/25 0025.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map;
    map = (function () {
        var map = {};
        var length = nums.length;
        for (var i = 0; i < length; i++) {
            if(!map[nums[i]]){
                map[nums[i]] = [i];
            }else {
                map[nums[i]].unshift(i);
            }

        }
        return map;
    })();
    var index1, index2;
    for (var i in map) {
        if (undefined !== map[target - i]) {
            if(target-i!=i){
                index1 = Math.min(map[i][0], map[target - i][0]);
                index2 = Math.max(map[i][0], map[target - i][0]);
                break;
            }else {
                index1 = Math.min(map[i][0],map[i][1]);
                index2 = Math.max(map[i][0],map[i][1]);
                break;
            }

        }
    }
    return [index1, index2];


};

/**
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 UPDATE (2016/2/13):
 The return format had been changed to zero-based indices. Please read the above updated description carefully.
 */
var nums =[3,4,4,2,4,5];
var target = 9;
console.log(twoSum(nums, target));