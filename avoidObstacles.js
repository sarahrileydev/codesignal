function avoidObstacles(inputArray) {

  inputArray = inputArray.sort((a,b) => {
      return a-b;
  });
  
  let lastArrayVal = inputArray[inputArray.length - 1];
  for(let i = 1; i <= lastArrayVal+1; i++){
      if(inputArray.every((element) => {
          return element % i != 0
      })){
          return i;
      }
  }
}
