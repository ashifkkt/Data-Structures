function countZeroes(nums){
    let freqCoun={};
    for (let num of nums ){
        freqCoun[num] =(freqCoun[num] || 0) +1;
    }
    for (let key in freqCoun){
        if (key === 0){
            console.log(key)
            return freqCoun[key]
        }
    }

}               



console.log(countZeroes([1,1,0,0,0,1]))