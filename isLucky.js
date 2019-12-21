function isLucky(n) {
  let arr = Array.from(n.toString(10));

  let sumFirstHalf = 0;
  let sumSecondHalf = 0;
  let half = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
    if (i < half) {
      sumFirstHalf += arr[i] * 1;
    }
    if (i >= half) {
      sumSecondHalf += arr[i] * 1;
    }
  }

  if (sumFirstHalf === sumSecondHalf) {

    return true;
  } else {

    return false;
  }
}

console.log(isLucky(1230));
