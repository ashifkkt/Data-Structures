function isSameFrequency(num1,num2){

    let str1=num1.toString();
    let str2=num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1={}
    let frequencyCounter2={}

    for (let num of str1){
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) +1;
    }
    for (let num of str2){
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) +1;
    }
    for (let key in frequencyCounter1){
        if (!(key in frequencyCounter2)){
            return false
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true


}

console.log(isSameFrequency(1234,3125));