// Write a program to print the multiplication table of a given number up to a specified limit.

function table(num1 , num2){
    for(let i = 1; i<= num2; i++){
        console.log(`${num1} * ${i} = ${i * num1}`)
    } 

}
table(2,10)

// 2nd way
function table2(num1, num2){
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        throw new Error("Input shouldn't be in Number")
    }
    else if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw new Error("Input should be Number")
    }
    else if(num1 <= 0 || num2 <= 0){
        throw new Error("Input should be Positive")
    }
    for(let i = num1; i <= num2 * num1; i += num1){
        console.log(i);
        
    }
}
table2(4,10)
// table2(-4,10)

// Write a program to find the biggest number in an array.
console.log("Biggest Number");


function BiggestNumber(array){
    let biggestnumber = array[0];
    for(let i = 0; i < array.length; i++){
        // console.log(array[i])
        if(array[i] > biggestnumber){
            biggestnumber = array[i]
        }
        
    }
    return biggestnumber
    
    
}
console.log(BiggestNumber([1,2,8,6]))