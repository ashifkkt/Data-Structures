function maxSum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) {
        return null
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum



}


console.log(maxSum([1, 2, 3, 4, 9, 10, 11], 2))