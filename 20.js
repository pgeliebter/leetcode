/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

so my input would be like '(({}}))' which is false

Off top of my head we can use flags on an array
[(,(,{,(,}]

so define function take in (string) {
  set array empty
  loop through string and push each char into array
    if we encounter an end char then compare previous (i-1) and see if it matches
    if match then pop
    if no match return false
  if array is not empty return false
}
*/

function correctBrackets(s) {
  let array = [];
  let pointer = 0;
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    array.push(e);

    switch (e) {
      case '}':
        if (array[pointer - 1] === '{') {
          array.pop();
          array.pop();
          pointer -= 2;
          break;
        } else {
          return 'me1';
        }

      case ')':
        if (array[pointer - 1] === '(') {
          array.pop();
          array.pop();
          pointer -= 2;
          break;
        } else {
          return 'me2';
        }
      case ']':
        if (array[pointer - 1] === '[') {
          array.pop();
          array.pop();
          pointer -= 2;
          break;
        } else {
          return 'me3';
        }
    }
    pointer += 1;
  }

  if (array.length != 0) {
    return false;
  }
  return true;
}

console.log(correctBrackets('(]'));
