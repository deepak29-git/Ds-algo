const searchIndex=(arr,num)=>{
    let min=0;
    let max=arr.length-1;
    for(let i=0;i<arr.length;i++){
        let mid=Math.floor((min+max)/2)
        console.log("min"+min,"max"+max+"mid"+mid)
        if(arr[mid]<num){
            min=mid+1
        }else if(arr[mid]>num){
            max=mid-1
        }else{
            return mid
        }
    }
return -1
}
const result=searchIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7)
console.log(result)

// complexity binary search o (log(n))