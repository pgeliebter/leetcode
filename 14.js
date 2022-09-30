/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

HASHMAP!!!
I will use a hashmap to store the position of letter
O(N) I can loop through each letter position and see if it matches (worst cast scenario it is O(N * shortest word))
I like it

initiate letter pointer to 0
initiate new empty string
set new empty string to first letter of first string
run for letter in array[0.split()]{
  if run helper function returns false return false{
  }
  add one to pointer index run loop again
}
helper function (take in array and pointer index) {
 Loop through incoming array with index {
  compare each words first letter using pointer index to first letter of new string also using pointer index
  if not equal {
    return new string sliced to pointer string i-1
  }
}
*/
function longestPrefix(array) {
  let pointer = 0;
  let string = '';

  if (array.length === 0) {
    return array[0];
  }
  for (let letter of array[0].split('')) {
    string += array[0][pointer];

    if (!helperFunction(array, pointer, letter)) {
      if (string.length === 1) {
        return '';
      }

      return string.slice(0, pointer);
    }
    pointer += 1;
  }
  return string;
}
function helperFunction(array, pointer, letter) {
  for (let word of array) {
    if (letter != word[pointer]) {
      return false;
    }
  }
  return true;
}

console.log(
  longestPrefix(['flower', 'flow', 'flight'])
  // longestPrefix(['', ''])
);
console.log(longestPrefix(['flower', 'flower', 'flower', 'flower']));
