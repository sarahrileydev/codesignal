// Dylan Israel recursive solution

function reverseInParentheses(s) {
    // as long as the string includes a starting parentheses (base case)
    // 
  if (s.includes('(')){
      return reverseInParentheses(subReverse(s));
  }
  return s;
}

function subReverse(s){
  // this gets the substring between the parentheses
  let regexp = /\(([^()]*)\)/i;
  let subStr = regexp.exec(s)[1];
  subStr = subStr.split("").reverse().join("");
  
  
  return s.replace(regexp, subStr)
}