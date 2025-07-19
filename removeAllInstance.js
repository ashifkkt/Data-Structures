function removeAllInstance(nums,val) {
  let i=0;
  for(let j=0;j<nums.length;j++){
    if(nums[j] !==val){
        nums[i]=nums[j];
        i++

    }
  }
  console.log(nums)
  return i
}



console.log(removeAllInstance([2,2,3,4,3],3))