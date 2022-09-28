/* 
I want to loop through and compare i and len-i and see if they are the same. If they are then continue on
exceptions = if length is 1 then return true, if length is odd then return true when get to middle point

set var to length
return true if length is one

loop through {
  and compare first and last
  then move in
}
*/

function palin(number) {
  let string = number.toString();
  let startingLength = string.length;
  if (startingLength == 1) return true;

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] != string[startingLength - 1]) {
      return false;
    }
    startingLength -= 1;
  }
  return true;
}
console.log(palin(121211));
