// function charCount(str){
// var object={};
//     for (var char of str)  {
//         if(isAlphaNumeric(char)) {
//          char= char.toLowerCase();
//             object[char] = ++object[char] || 1;
//         }

//     }
// return object

// }

// function isAlphaNumeric(str){
// var char=str.charCodeAt(0);
//     if (!(char > 47 && char < 58)
//         && 
//         (char > 64 && char < 91 )
//         && 
//         (char > 96 && char < 123)
//         ){
//         return false }
//     return true
        
    
// }

// console.log(charCount("hello 123"));


function charCount(str){
    let output={};
    for (let char of str){
        char=char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            output[char] = ++output[char] || 1;
        }
    }
    return output
}

console.log(charCount("hello 123"));