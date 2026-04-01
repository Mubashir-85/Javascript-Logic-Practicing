console.log("Hello World!");

// write a function that takes the sum of two numbers 
function sum(a , b){
    const sum = a + b;
    console.log("Sum of two numbers: ",sum);
}
sum(5,8);

function areaOfReactangle(length, width){
    const area = length * width;
    console.log("Area of a Rectangle: ",area);
}
areaOfReactangle(10, 18);


function evenOrOdd(num){
    if(num % 2 == 0){
        console.log("Number is Even")
    }
    else{
        console.log("Number is Odd")
    }
}
evenOrOdd(4);
// Write a function to find out the smallest number among three numbers
function smallestNumber(x,y,z){
    if(x < y && x < z){
        console.log("Smallest Number is:",x);
    }
    else if(y<x && y<z){
        console.log("Smallest Number is:",y);
    }
    else{
        console.log("Smallest Number is:",z);
    }
    console.log("Smallest Number is:",x)
}
smallestNumber(3,6,1);
smallestNumber(-515,549,-548);
smallestNumber(458,-1,-6);
smallestNumber(3,3,3);

let arr = [5,2,8,1,6];
let sorting = arr.sort();
let max = Math.max(...arr);
console.log("Max:", max);

console.log("Sorting",sorting);  // Throw sorting array will convert in sequence wise

let min = [540,658,861];
let MinNumber = Math.min(...min);
console.log("Smallest number:",MinNumber);
