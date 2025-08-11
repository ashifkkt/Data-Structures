function selectionSort(arr){
    for (let i=0;i<arr.length;i++){
        let lowest=i;
        for (let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[lowest]){
                lowest=j
            }
        }
        if(i !== lowest){
            console.log("Swapping started");
        [arr[i],arr[lowest]]=[arr[lowest],arr[i]]
        }
        console.log("Swapped" ,arr)
    }
    return arr
}

console.log(selectionSort([100,89,91,87,42]))