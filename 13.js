/*
part 1
I am writing a function that takes in (roman numerals)
I need set up a dictionary for value
I am going to start with solving non subtracion problems and then work on subtractions
I need an output variable
I need to loop through my values and get the corresponsing total {
  call the current letter from dictionary and add that to total
}
return the total

part 2
I can loop backwords through the number
and then at each stage compare if the current index is lower than the previous. If it is lower {
  then subtract instead of add
}
If it is not then add
*/

function romanToInt(s) {
  romanDictionary = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let i = s.length - 1;
  let output = romanDictionary[s[i]];
  i -= 1;
  while (i >= 0) {
    currentNum = romanDictionary[s[i]];
    let previousNum = romanDictionary[s[i + 1]];
    if (currentNum >= previousNum) {
      //true
      output += romanDictionary[s[i]];
    } else {
      output -= romanDictionary[s[i]];
    }
    i -= 1;
  }
  return output;
}

console.log(romanToInt('LVIII'), romanToInt('MCMXCIV'));
