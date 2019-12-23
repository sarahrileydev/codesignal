// function palindromeRearranging(inputString) {
//   let arr = Array.from(inputString);
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (inputString.match(arr[i])) {
//       count++;
//     }
//   }
//   if (count % 2== 0 ||count % 2 ==1) {
//     return true;
//   }
//   return false;
// }

// palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc");

// Dylan Israel solution
function palindromeRearranging(inputString) {
  let charArray = inputString.split("");

  let letterObject = {};

  for (let i = 0; i < charArray.length; i++) {
    if (!letterObject.hasOwnProperty(charArray[i])) {
      letterObject[charArray[i]] = 1;
    } else {
      letterObject[charArray[i]]++;
    }
  }
  let oddCount = 0;
  for (val in letterObject) {
    if (letterObject[val] % 2 != 0) {
      oddCount++;
    }
  }
  return oddCount > 1 ? false : true;
}
