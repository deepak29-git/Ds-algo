const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        let temp;
        
        if(i!==min){
            temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr
}
const result=selectionSort([5,2,6,1,4,3])
console.log(result)