function addBorder(picture) {
  //     add the "*" to the sides
  for (let i = 0; i < picture.length; i++) {
    picture[i] = "*" + picture[i] + "*";
  }
// add the string of "*" to the top and bottom
  let width = picture[0].length;
  let string = "*".repeat(width);
  picture.push(string);
  picture.unshift(string);

  return picture;
}

addBorder(["abc", "ded"]);
