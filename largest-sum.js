const findLargestSum=(arr,num)=>{
    let totalNum=arr.length-num+1
    if(num>arr.length){
        throw new Error("max limit exceed")
    }else{
        let max=0;
        for(let i=0;i<totalNum;i++){
            let temp=0;
            for(let j=0;j<num;j++){
                temp+=arr[i+j]
            }
            if(temp>max){
                max=temp
            }
        }
        return max
    }
}

const result = findLargestSum([1,2,3,4,3,5,4,6,7,8],4)
console.log(result)