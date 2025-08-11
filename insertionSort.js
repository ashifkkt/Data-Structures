function insertionSort(arr){
    for (let i=1;i<arr.length;i++){
        let currentVal=arr[i];
        for (var j=i-1; j >=0 && arr[j] > currentVal;j--){
            arr[j+1] =arr[j];
            console.log(arr)

        }
        arr[j+1]=currentVal
    }
    return arr
}

console.log(insertionSort([9,3,2,6,4,1]))