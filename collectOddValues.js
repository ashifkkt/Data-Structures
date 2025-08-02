// function collectOddValues(arr){
//     let result=[];
//     function helper(helperArray){
//         if(helperArray.length === 0){
//             return
//         }
//         if(helperArray[0] % 2 !==0){
//             result.push(helperArray[0])
//         }
//         helper(helperArray.slice(1))
//     }
//     helper(arr)
//     return result
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

// function collectEvenValues(arr){
//     let result=[];

//     function helper(helperArray){
//         if(helperArray.length === 0){
//             return
//         }
//         if(helperArray[0] %2 ===0){
//             result.push(helperArray[0])
//         }
//         helper(helperArray.slice(1))
//     }
//     helper(arr)
//     return result
// }

// console.log(collectEvenValues([1,2,3,4,5,6,7,8,9,10]))

// function collectEvenValues(arr){
//     let newArr=[];
//     if(arr.length === 0) {
//         return newArr
//     }
//     if(arr[0] % 2===0){
//         newArr.push(arr[0])
//     }
//     newArr=newArr.concat(collectEvenValues(arr.slice(1)))
//     return newArr
// }

// console.log(collectEvenValues([1,2,3,4,5,6]))


function collectOddValues(arr){
    let resultArray=[];
    if (arr.length ===0 ) return resultArray

    if(arr[0] %2 !== 0){
        resultArray.push(arr[0])
    }
    resultArray=resultArray.concat(collectOddValues(arr.slice(1)))
    return resultArray
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))