// Write a function to reverse a string 

function str(){
    let a = "Hello World";
    let reverse = a.split("").reverse().join("");
    console.log(reverse)
};
str();

// 2nd way 
function ReverseAString(a){
    if(typeof a !== "string"){
        throw new Error("Only Strings are allowed")
    }
    let str = "";
    for(let i = a.length - 1 ; i >= 0; i--){
     str += a[i];
    }
    return str;
}
console.log(ReverseAString("mubashir"))
console.log(ReverseAString("mubashir@"))
// console.log(ReverseAString(123123))

// 3rd way
function ReverseStr(input){
    const splittedInput = input.split('');
    const reverse = splittedInput.reverse();
    const join = reverse.join('');
    console.log(join);
}
ReverseStr("Mubashir");



// Write a function to calculate a factorial of a given number

function factorial(num){
    if(num < 0 || typeof num !== "number"){
        throw new Error("num should be Positive Number")
    }
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
console.log("factorial")
console.log("4! =",factorial(4));
// console.log("3.14! =",factorial("3.14"));
console.log("3.14! =",factorial(3.14));
// console.log("-1! =",factorial(-1));

// 2nd way through Recursion
function factorial2(num){
     if(num < 0){
        throw new Error("num should be Positive Number")
    }
    if(num ===0 || num === 1)
        return 1;

    return num * factorial2(num -1);
    // returnn 4 * factorial2(3)
    // returnn 3 * fact orial2(2)
    // returnn 2 * fact orial2(1)

    // return 4 * 6 
    // return 3 * 2 
    // return 2 * 1 
}
console.log("Recursion")
console.log(factorial2(4));


console.log("Reverse");

function reverse(str){
    let string = ""
    for(let i = str.length - 1; i>= 0; i--){
        string += str[i]
    }
    return string
}
console.log(reverse("abc"))

function rever(a){
    let splite = a.split('');
    let reverse = splite.reverse();
    let join = reverse.join('');
    console.log(join);
}
rever("hiiii")