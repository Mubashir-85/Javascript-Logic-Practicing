// write a function that tells if the given number is prime or not
function isPrime(num) {
  let result = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
    }
  }
  return result;
}
// console.log(isPrime(2));
console.log(isPrime(5));

// write a function to count the words in a sentence.

function countTheWords(sentence) {
  sentence = sentence.trim();
  let splittedSentence = sentence.split(" ");
  let emptyElement = splittedSentence.filter((ele) => ele !== "");

  return emptyElement.length;
}
console.log("This is a sentence:", countTheWords("This is a  sentence"));
console.log("what is the date today:", countTheWords("what is the date today"));
