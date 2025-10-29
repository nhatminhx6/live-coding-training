// 🧠 Move Zeroes
// Difficulty: medium
// Given an integer array nums, move all 0s to the end while maintaining the relative order of the non-zero elements.
//
// Example:
// Input: [0,1,0,3,12] → Output: [1,3,12,0,0]
// Input: [0] → Output: [0]

export default function moveZeroes(...args: any[]): any {
    // TODO: Implement your solution here
    let nums = [0, 1, 0, 3, 12]//args[0];
    console.log('Running moveZeroes with args:', nums)

    //[0, 1, 0, 3, 12]
    let j = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            let tmp = nums[i];
            nums[i] = nums[nums.length - 1 - j];
            nums[j] = tmp;
            j++

        }
    }
    //
    // let j=0;
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]!==0){
    //
    //         let tmp = nums[i];
    //         nums[i] = nums[j];
    //         nums[j] = tmp;
    //
    //         j++;
    //     }
    // }


    console.log('Running moveZeroes with args:', nums)


    return null
}

//            console.log('Running moveZeroes with args:',j, ' ||| tmp:', tmp, ' -- nums[i]: ',nums[i], ' -- nums[j]:',nums[j], ' ==>  ', nums)