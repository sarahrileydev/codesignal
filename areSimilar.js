// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
  //     if they already match return true
  if (a.toString() == b.toString()) {
    return true;
  }

  let c = [];
  let d = [];

  for (let i = 0; i < a.length; i++) {
    //         if they are not equal, we want to put them in the new array to see if they can be swapped to match
    if (a[i] != b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  d = d.reverse();
  if (c.length === 2 && c.toString() == d.toString()) {
    return true;
  }
  return false;
}

areSimilar([1, 2, 3], [2, 1, 3]);
