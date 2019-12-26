// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
  let compareArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    let diff = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (diff >= 0) {
      compareArr.push(diff);
    }
  }
  return Math.max.apply(null, compareArr);
}

arrayMaximalAdjacentDifference([1, 1, 1, 1]);
