/**
 *  Time complexity: O(N)
 * Space complexity: O(1)
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
    res = []
    for(let i = 0; i<nums.length;i++){
        idxToNegate = Math.abs(nums[i]) - 1
        if (nums[idxToNegate] > 0) {
           nums[idxToNegate] =  -nums[idxToNegate]
        }
    }

     for(let i = 0; i<nums.length;i++){
        if (nums[i] > 0) {
            res.push(i+1)
        }
     }

    return res
        
    
};
