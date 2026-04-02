// Write a function 

function degreeToFahrenheit(degree){
    let fahrenheit = (degree * 9/5) + 32;
    fahrenheit = Math.round(fahrenheit)
    return fahrenheit; 
}
console.log(degreeToFahrenheit(27));
console.log(degreeToFahrenheit(34));

// Write a function to swap numbers with or without third variable.

{let a = 6;
let b = 5;

let c = a; 
a = b;
b = c;
console.log(a,b);}

// 2nd way
let a = 6;
let b = 5;

a = a + b;
b = a - b;
a = a - b
console.log(a,b);
