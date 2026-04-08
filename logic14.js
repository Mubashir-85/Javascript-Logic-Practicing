function isStrongPass(pass) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  const specialChar = "!@";

  let lowercaseChecker = false;
  let uppercaseChecker = false;
  let numbercaseChecker = false;
  let specialCharChecker = false;

  if (pass.length < 8) {
    return false;
  }
  for (let char of pass) {
    if (lowerCase.includes(char)) {
      lowercaseChecker = true;
    } else if (uppercase.includes(char)) {
      uppercaseChecker = true;
    } else if (number.includes(char)) {
      numbercaseChecker = true;
    } else if (specialChar.includes(char)) {
      specialCharChecker = true;
    }
  }
  if (
    numbercaseChecker &&
    uppercaseChecker &&
    numbercaseChecker &&
    specialCharChecker
  ) {
    return true;
  } else return false;
}
console.log(isStrongPass("Mubashir@1"));
