const arr=[1,9,2,87,121]
const names=["add","bbaa","Dark fantacy","Ashif","Bradman"]


function compare(num1,num2){
    return num2-num1
}

function strCompare(str1,str2){
    return str1.length - str2.length
}



console.log(names.sort(strCompare))