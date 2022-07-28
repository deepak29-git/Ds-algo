const maxOccurance=(str)=>{
    const splitStr=str.split("");
    let map={};
    for(let element of splitStr){
        if(map[element]){
            map[element]+=1
        }else {
            map[element]=1
        }
    }
    let max=1;
    let char=str[0]
    for(let key in map){
        if(map[key]>max){
            max=map[key];
            char=key
        }
    }
return char
}
const res=maxOccurance("hello worldddddd");
console.log(res)