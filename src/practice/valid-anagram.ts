// 🧠 Valid Anagram
// Difficulty: easy
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// Example:
// Input: s = "anagram", t = "nagaram" → Output: true
// Input: s = "rat", t = "car" → Output: false

export default function isAnagram(...args: any[]): any {
  // TODO: Implement your solution here

    let chars = args[0]
    let reverseString = ''
    for (let i = chars.length; i >= 1; i--) {
        reverseString = reverseString + chars[i]
        console.log('chars[i] --  ',chars[i])
    }

    console.log('Running isAnagram with chars:',chars, reverseString)

  return reverseString != chars
}
