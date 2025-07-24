function checkDifference(arr,val){
    let left=0;
    let right=arr.length -1;
    for( left;left<arr.length;left++){
        console.log(arr[left],arr[right])
        if(arr[left] - arr[right] === val || arr[right] - arr[left] === val ){
            return true
        }
        else {
          
            right --;
        }
    }
      
    return false
}


console.log(checkDifference([0,1,3,4,6],-2))