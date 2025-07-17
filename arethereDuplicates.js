function arethereDuplicates(...items){
    let counter = {};
    for (let item of items){
        
        counter[item]=(counter[item] || 0) +1
    }

    for (let key in counter){
        if(counter[key] > 1){
            return true
        }
    }
    return false
}

console.log(arethereDuplicates(1,2,3,4));