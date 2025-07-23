function averagePair(nums,target){
    if (nums.length ===0) {
        return null;
    }
    let left =0;
    let right=nums.length-1;
    while(left < right){
        let avg=(nums[right] + nums[left] ) / 2;
        if (avg === target){
            return true
        }
        else if (avg < target){
            left++
        }
        else{
            right--
        }

    }
    return false
}

console.log(averagePair([1,0,3,4,5,6], 4.1))