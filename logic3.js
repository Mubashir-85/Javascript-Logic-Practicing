function isLeapYear(a){
    if(a % 4 ===0){
        return true;
    }
    return false;
}
console.log(isLeapYear(2024))


// 2nd way
function LeapYear(a){
    return a % 4 === 0;
}
console.log(LeapYear(2023))

// Write a function to calculate the sum of digits of a given number
function sum(num){
    if(num < 1 || typeof num !== "number"){
        throw new Error("Number should be in Positive ");
    }
    else if( !Number.isInteger(num)){
        throw new Error("Number shouldn't be in decimal")
    }
    
    let numAsString = num.toString();
    let splittedString = numAsString.split('');
    let sum = 0;
    splittedString.forEach(num =>{
        sum += parseInt(num)
    })
    return sum
    
}
console.log(sum(12))
console.log(sum(12))
console.log(sum(4568))
// console.log(sum(1.2))

function sum2(num){
    let number = num;
    let sumOfDigit = 0;
    while (number){
        let lastDigit = number % 10;
        number = Math.floor(number / 10)
        sumOfDigit += lastDigit 
       
    }
    return sumOfDigit
}
console.log(sum2(12))