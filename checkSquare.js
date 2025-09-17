function checkSquare(num1,num2){
    let frequencyCounter1={};
    let frequencyCounter2={};
    for (let num of num1){
        frequencyCounter1[num]=(frequencyCounter1[num] || 0) +1 ;
    }

    for (let num of num2){
        frequencyCounter2[num]=(frequencyCounter2[num] || 0) +1;
    }
    for (let key in frequencyCounter1){
        if(! (key**2 in frequencyCounter2)) return false;
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false
    }
    return true
}

let num1=[1,2,3,4,5,6]
let num2=[1,9,4,16,36,25]

console.log(checkSquare(num1,num2))