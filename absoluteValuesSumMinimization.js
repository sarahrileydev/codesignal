// Dylan Israel

function absoluteValuesSumMinimization(a) {
  //     looking for the median number
  return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

absoluteValuesSumMinimization([2, 4, 7]);
