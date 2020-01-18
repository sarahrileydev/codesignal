function commonCharacterCount(s1, s2) {
  //split strings into arrays
  s1 = s1.split("");
  s2 = s2.split("");

  let s1Object = {};
  let s2Object = {};

  for (let i = 0; i < s1.length; i++) {
    if (s1Object.hasOwnProperty(s1[i]) === false) {
      s1Object[s1[i]] = 1;
    } else {
      s1Object[s1[i]]++;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s2Object.hasOwnProperty(s2[i]) === false) {
      s2Object[s2[i]] = 1;
    } else {
      s2Object[s2[i]]++;
    }
  }

  let total = 0;
  for (let prop in s1Object) {
    if (s2Object.hasOwnProperty(prop) === true) {
      if (s2Object[prop] < s1Object[prop]) {
        total += s2Object[prop];
      } else {
        total += s1Object[prop];
      }
    }
  }

  return total;
}
