// 🧠 Palindrome String
// Difficulty: easy
// Given a string s, return true if it reads the same backward as forward, otherwise false.
//
// Example:
// Input: "madam" → Output: true
// Input: "racecar" → Output: true
// Input: "hello" → Output: false

export default function isPalindrome(...args: any[]): any {
    // TODO: Implement your solution here
    const srcString = args[0]
    const length = srcString.length
    let count = 0;
    console.log('Running isPalindrome with args :=== >  ', srcString,length)
    //  r a c e c a r
    for (let i = 0; i < length - 1; i++) {
        for (let j = length - 1 - i; j >= 0; j--) {
            //console.log('isPalindrome  ',i, ' --',j)
            if (srcString[i] === srcString[j] && i < j) {
                count++;
                console.log('isPalindrome  ',i, ' --',j)
            }
        }
    }
    const checkingNum =  Math.floor(length / 2)

    console.log('Running isPalindrome with args :=== >  ', checkingNum)

    return checkingNum === count;
}
