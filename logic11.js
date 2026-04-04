// revise this problem 2 - 3 times

function pyramid(num){
    for(let i = 1; i<= num; i++){
        let line = "";
        for(let space = 1; space <=num - i; space++){
            line += " ";
        }
        for(let count = 1; count <= i; count++){
            line += count;
        }
        for(let reverse = i - 1; reverse>=1; reverse--){
            line += reverse
        }
        console.log(line);
        
    }

}
pyramid(5)

function countCharacter(str){
    str = str.toLowerCase()
    console.log(str);
    
    let result = {};
    for(let i = 0 ; i< str.length; i++){
        if(!result[str[i]]){
            result[str[i]] = 0
        }
         result[str[i]] =  result[str[i]] + 1
    }
    return result

}
console.log(countCharacter("shaikh Mubashir"))