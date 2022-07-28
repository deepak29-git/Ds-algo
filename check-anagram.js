const isAnagram=(string1,string2)=>{
    let counter={};
    if(string1.length!==string2.length){
        return false
    }
    for(let letters of string1){
        counter[letters]=(counter[letters] || 0)+1
    }
    for(let letter2 of string2){
        if(!counter[letter2]){
            return false
        }
        counter[letter2]-=1
    }
    return true
}

const result = isAnagram("eedpak","deepak");
console.log(result)

// time complexity o(n) linear