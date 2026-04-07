function isPerfectNumber(num){
    // console.log(num);
    let result =0;
    let perfectNumber = []
    for(let i = 1; i< num;i++){
        if(num % i ===0){
            perfectNumber.push(i)
        }
        // console.log(num % i === 0)
    }
    // console.log(perfectNumber)
    perfectNumber.forEach((d)=>{
        result+= d
    })
    if(result === num){
        return true
    }
    return false

}
console.log(isPerfectNumber(6))
console.log(isPerfectNumber(5))