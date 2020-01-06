// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z"
  ];
  let arr = inputString.toString();
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "z") {
      arr2.push("a");
    }
    for (let j = 0; j < letters.length; j++) {
      if (arr[i] === letters[j]) {
        arr2.push(letters[j + 1]);
      }
    }
  }
  return arr2.join("");
}
