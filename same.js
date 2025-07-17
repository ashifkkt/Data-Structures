// function same(arr1,arr2) {
//     if (arr1.length !== arr2.length){
//         return false;
//     }

//     for (let i=0;i<arr1.length;i++){
//         for (let j=0;j<arr2.length;j++){
//             if(arr1[i] ** 2 === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false


// }

// console.log(same([1,2,2],[4,4,1]));

function same(array1,array2){
    if(array1.length !== array2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of array1) {
        frequencyCounter1[val] =(frequencyCounter1[val] || 0) + 1;
    }
    for (let val of array2) {
        frequencyCounter2[val] =(frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1){
        if(!(key **2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key **2]){
            return false
        }
    }
    return true
    
}

console.log(same([1,2,2],[4,1]));