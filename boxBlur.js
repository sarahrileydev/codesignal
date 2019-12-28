function boxBlur(image) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image.length; j++) {
      sum += image[i][j];
    }
  }
  return sum;
}

boxBlur([
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1]
]);
