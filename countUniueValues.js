function countUniqueValues(nums) {
    let counter={};
    for (let num of nums){
        counter[num] =(counter[num] || 0) +1;
    }
    return Object.keys(counter).length
}


console.log(countUniqueValues([]));