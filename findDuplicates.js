function findAllDuplicates(nums){
    let counter={};
    let output=[];
    for (let num of nums){
        counter[num]=(counter[num] || 0) +1;
        
        
    }
    for (let key in counter){
        if(counter[key] >1){
            output.push (+key);
        }
    }
    return output
  
}

console.log(findAllDuplicates([1,2,3,4,5,6,5,1,2,2,3]))