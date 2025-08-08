function bubbleSort(nums){
  var noSwaps;
    for (let i=nums.length-1;i>=0;i--){
      noSwaps=true;
      for (let j=0;j<=i-1;j++){
       if(nums[j] > nums[j+1]){
        [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
        noSwaps=false
       }
      }
      if(noSwaps) break;
    }
    return nums
}

console.log(bubbleSort([10,2,1,6,4,3]))