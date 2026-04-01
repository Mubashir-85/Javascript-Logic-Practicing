// write a funciton to find out the average of a given numbers

function averageOfNumber(num){
    // console.log(num)
    let sum = 0;
    num.forEach(element=>{
            sum += element
        })
    let result = sum / num.length;
    return result  
}
console.log(averageOfNumber([1,2,4]))
console.log(averageOfNumber([1,2,7,14]))

// 2nd way
console.log("2nd way");

function averageOfNumber2(num){
    let sum  = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
    let result = sum / num.length 
    return result
}
console.log(averageOfNumber2([1,2,4]))
console.log(averageOfNumber([1,2,7,14]))


// Write a function that calculates and print the simple interest on  a loan amount
console.log("Finding out the simple interest on a loan amount");

function simpleInterest(num1,num2,num3){
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number"){
        throw new Error("Inputs should be in numbers")
    }
    console.log(num1,num2,num3);
    let multiply = num1 * num2 * num3;
    let divide = multiply / 100;
    let result = divide;
    result = result.toFixed(2)
    return result

    

}
console.log(simpleInterest(1000,5,1))
console.log(simpleInterest(20000,10,5))

