// function countDown(num){
//     if (num === 0) {
//         return 0
//     }
//     console.log(num)
//     num --
//     countDown(num)
// }


// countDown(10)

// function sumRange(num) {
//     if (num ===1) return 1
//      return num + sumRange(num-1)
// }

// console.log(sumRange(100))

// function factorial(num){
//     if (num === 1) return 1
//     return num*factorial(num-1)
// }

// console.log(factorial(5))


function productOfArray(arr){
    if (arr.length ===0) {
        return 1
    }
    return arr[0]*productOfArray(arr.slice(1))
}
console.log(productOfArray([1,2,3,]))