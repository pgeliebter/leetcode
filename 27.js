var removeElement = function (nums, val) {
  let nextIndex = nums.indexOf(val);
  while (nextIndex != -1) {
    nums.splice(nextIndex, 1);
    nextIndex = nums.indexOf(val);
  }
  return nums.length;
};
