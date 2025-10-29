// 🧠 Merge Two Sorted Arrays
// Difficulty: easy
// ---------------------------------------------
// Merge two sorted arrays and return a new sorted array.
// ---------------------------------------------
// Examples:
// // [1,2,4] & [1,3,4] → [1,1,2,3,4,4]

export default function mergeTwoSorted(a: any, b: any) {

    //[1,2,4] & [1,3,4] → [1,1,2,3,4,4]

    console.log('MERA mergeTwoSorted ',a, b)
    let totalLength = a.length > b.length ? a.length : b.length
    let finalArr = []

    for (let i = 0; i < totalLength; i++) {
        console.log('MERA loop ==> ',i)
        if(a[i]){
            finalArr.push(a[i])
        }
        if(b[i]){
            finalArr.push(b[i])
        }
    }



    console.log('MERA mergeTwoSorted  finalArr  ==>  ',finalArr)
    return finalArr

    return null
}
