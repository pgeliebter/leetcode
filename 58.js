var lengthOfLastWord = function (s) {
  if (s.length <= 1) {
    return 1;
  }
  let i = s.length - 1;
  let counter = 0;
  while (i >= 0) {
    if (s[i] === ' ' && counter === 0) {
      i--;
    } else if (s[i] === ' ' && counter > 0) {
      return counter;
    } else {
      counter++;
      i--;
    }
  }
  return counter;
};
