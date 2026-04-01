// Write a function to check if a given string is a palindrome or not
function string(str){
    let splittedstring = str.split('')
    let reverse = splittedstring.reverse()
    let join = reverse.join('');
    if(str == join){
         return true
    }
    return false
    
}
console.log("1st Function");

console.log(string("level"))
console.log(string("12321"))
console.log(string("madam"))

function isPalindrome(str){
    if(typeof str !== "string"){
        throw new Error("Input should be string");
    }
    for(let i = 0; i <= str.length /  2; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
        }
        return true
        
    }
}
console.log("2nd function")
console.log(isPalindrome("madam"));
console.log(isPalindrome("12321"));

console.log("calci");

// Write a function to calculate the power of a number using a loop
function calculator(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Input should be Number")
    }
    else if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Input should be Pure number")
    }
    let multiply = 1;
    for(let i = 1; i<=b; i++){
        multiply *= a
           
    }
    return multiply;
}
// console.log(calculator(5,5.3))
console.log(calculator(5,4))
console.log(calculator(2,3))

// let number = (1,2);
// let power = Math.pow([...number])
// console.log(power)