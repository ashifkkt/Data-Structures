//O(n^2) 

function maxSubArray(nums,num){
    if(nums.length < num){
        return null
    }
    var max=-Infinity;
    for(let i=0;i<nums.length -num+1;i++){
        var temp=0;
        for (let j=0;j<num;j++){
            temp += nums[i+j];
        }
        if(temp > max){
            max = temp;
        }

        console.log(max,temp)
    }
    return max
}

