//O(n^2) 

// function maxSubArray(nums,num){
//     if(nums.length < num){
//         return null
//     }
//     var max=-Infinity;
//     for(let i=0;i<nums.length -num+1;i++){
//         var temp=0;
//         for (let j=0;j<num;j++){
//             temp += nums[i+j];
//         }
//         if(temp > max){
//             max = temp;
//         }

//         console.log(max,temp)
//     }
//     return max
// }


function maxSubArray(arr,num){
    let maxSum=0;
    let tempSum=0;

    if(arr.length < num){
        return null
    }

    for(let i=0;i<num;i++){
        maxSum+= arr[i]
    }
    tempSum=maxSum;
    for(let i=num;i <arr.length;i++){
        tempSum=tempSum-arr[i -num] + arr[i];
        maxSum=Math.max(maxSum,tempSum)
        

    }
    return maxSum
}


console.log (maxSubArray([1,2,3,4,5,6,7],3))