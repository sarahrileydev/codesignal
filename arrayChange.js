function arrayChange(inputArray) {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      // keep track of the difference
      count += (inputArray[i - 1] + 1) - inputArray[i];
      // make the change
      inputArray[i] = inputArray[i - 1] + 1;
    }
  }
  return count;
}

arrayChange([1, 1, 1]);
