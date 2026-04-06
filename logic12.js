function isAlphabeticalOrder(str){
    str = str.replace(/ /g, '')
    str = str.toLowerCase();
    for(let i = 0; i < str.length -1; i++){
        if(str[i] >  str[i + 1]){
            return false
        }
    }
    return true
}
console.log(isAlphabeticalOrder("aAcdef g"))

function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    const obj1 = {};
    for(let char of str1){
        if(!obj1[char]){
            obj1[char] = 0
        }
        obj1[char] = obj1[char] + 1
    }
    const obj2 = {};
    for(let char of str2){
        if(!obj2[char]){
            obj2[char] = 0
        }
        obj2[char] = obj2[char] + 1
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }
        // console.log(key);
        
    }
    return true

}
console.log(isAnagram("thing","night"))
console.log(isAnagram("thin1g","night1"))