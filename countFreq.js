function countFreq(nums){
    let numsCount={};
    for (let num of nums){
        numsCount[num]=(numsCount[num] || 0)+1;
    }
    let top=0;
    let item=0;
    for (let key in numsCount){
        if (numsCount[key] > top){
            top=numsCount[key]
            item=key
        } 

    }
    return item
    
}

let nums=[1,2,2,3,4,5,4,3,3,3]
console.log(countFreq(nums))