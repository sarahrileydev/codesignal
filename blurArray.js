// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// Dylan Israel solution

function boxBlur(image) {
  let count = 0;
  let sum = 0;
  let blurArray = [];

  for (let y = 0; y < image.length - 2; y++) {
    let line = [];
    for (let x = 0; x < image[y].length - 2; x++) {
      let sum = 0;

      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
        }
      }
      line.push(Math.floor(sum / 9));
    }
    blurArray.push(line);
  }
  return blurArray;
}
