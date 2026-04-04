// Write a funciton to check whether the number is ArmStrong number or not 

function isArmStrongNumber(num) {
  let number = num;
  const digits = [];
  while(number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    digits.push(lastDigit);
  }
  let length = digits.length;
  let sum = 0;
  digits.forEach((ele) => {
    sum += Math.pow(ele, length);
  });

  if(sum === num){
    return true;
  }
  return false;
}
console.log(isArmStrongNumber(153));
console.log(isArmStrongNumber(152));



function fizzbuzz(num){
  // let fizz = "Fizz"
  // let Buzz = "Buzz"
  // let Fizzbuzz = "Fizzbuzz"
  let result = 0;
  for(let i = 1; i<= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("Fizzbuzz");
    }
    else if(i % 3 ===0){
      console.log("Fizz")
    }
    else if(i % 5 === 0){
      console.log("Buzz")
    }
    else{
      console.log(i)
    }
    // result += i
  }
  // return result
}
fizzbuzz(36)
