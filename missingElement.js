function missingElement(num1,num2){
    let numCounter1={};
    for (let num of num1){
        numCounter1[num]=(numCounter1[num] || 0) +1
    }

    for (let num of num2){
        numCounter1[num]=(numCounter1[num] || 0) -1
    }

    for (let key in numCounter1){
       
        if(numCounter1[key] !==0 ){
            return key
        }
    }
}
nums1=[1, 2, 3, 4, 5]
nums2=[3, 1, 5, 4]

console.log(missingElement(nums1,nums2))