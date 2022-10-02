/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

join array and then add one then split


*/
var plusOne = function (digits) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += 1;
    return digits;
  }
  let num = BigInt(digits.join(''));
  num++;
  let newDigits = [];
  for (let thing of num.toString()) {
    newDigits.push(parseInt(thing));
  }
  return newDigits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

console.log(plusOne([9]));
