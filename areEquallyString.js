// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (
    (yourLeft === friendsLeft || yourLeft === friendsRight) &&
    (yourRight === friendsLeft || yourRight === friendsRight)
  ) {
    return true;
  }
  return false;
}
