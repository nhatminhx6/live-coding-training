// 🧠 Reverse a String
// Difficulty: easy
// Given a string s, return the string reversed.
//
// Example:
// Input: "hello" → Output: "olleh"
// Input: "ab" → Output: "ba"
// Input: "" → Output: ""

export default function reverseString(...args: any[]): any {
  // TODO: Implement your solution here
    let outputString = ''
    let str = args[0]
  //console.log('Running reverseString with args:', str)

    for (let i = str.length -1; i >=0; i--) {
        console.log('Char ==> ',str[i])
        outputString = outputString + str[i]
    }

    console.log('Running reverseString with args:', outputString)


    return outputString
}
