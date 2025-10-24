// 🧠 Two Sum
// Difficulty: easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// Example:
// Input: nums = [2,7,11,15], target = 9 → Output: [0,1]
// Input: nums = [3,2,4], target = 6 → Output: [1,2]

export default function twoSum(...args: any[]): any {

    let nums = args[0];
    let sum = args[1];
    let sumArr= []
    console.log('Running twoSum with args:', nums,' --  ',sum)
    //11,15,2,3,7,4
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            //console.log('twoSum:', i,' --  ',j)
            if (nums[i] + nums[j] === sum) {
                sumArr = [i,j]

                console.log('sumArr  ======>  ',sumArr,'from: ', nums[i], nums[j])
                return sumArr
            }
        }

    }





  return null
}
