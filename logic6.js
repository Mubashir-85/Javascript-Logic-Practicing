function countVowelsAndConsonant(input){
    if(typeof input !== "string"){
        throw new Error("Input must be String")
    }
    input = input.toLowerCase();
    input = input.replace(/ /g,"");
    console.log(input)
    const vowels = "aeiou";
    const consonant = "bcdfghjklmnpqrstvwxyz"
    let vowelCount = 0;
    let consonentCount = 0;


    for(let i = 0; i <= input.length; i++){
        if(vowels.includes(input[i])){
            vowelCount++
        }
        else if(consonant.includes(input[i])){
            consonentCount++
        }
        
    }
    return {vowelCount , consonentCount}


}
// console.log(countVowelsAndConsonant(123))
console.log(countVowelsAndConsonant("mubashir"))

console.log(countVowelsAndConsonant("Hello WOrld"))


// write a function to find out the factors of a given number
console.log("Finding Factors of a given number")
function findFactor(number){
    if(number <= 0){
        throw new Error("Number should be Positive")
    }
    else if(!Number.isInteger(number)){
        throw new Error("Number shouldn't be in a Decimal")
    }
    console.log(number)
    let result = [];
    for(let i = 1; i<= number; i++){
        if(number % i == 0){
           result.push(i)
        }
        // console.log(i)
    }
    return result;
   

}
console.log(findFactor(35));
// console.log(findFactor(3.5));
// findFactor(35)
