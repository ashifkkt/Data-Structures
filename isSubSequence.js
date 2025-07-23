function isSubSequence(str1,str2){
    if(str1.length ===0 || str2.length ===0){
        return null
    }
    let i=0,j=0;
    while(j < str2.length){
        if(str1[i] === str2[j]){
            i++
        }
        if(str1.length === i){
            return true
        }
        j++
    }
    return false
}


console.log(isSubSequence("abc","acdb"))