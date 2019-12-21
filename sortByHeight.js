function sortByHeight(a) {

  let a2 = a;
  
  // create a new array that filters out all the -1 values and sorts the remaining values
  a2 = a2.filter((el)=> {
      if(el != -1){
          return el;
      }
  }).sort((a,b)=>{
      return a-b;
  });
  
  // insert the indexes of the new array back into the old array in order skipping over the -1 values
  let index = 0;
  for(let i = 0; i < a.length; i++){
      if( a[i] != -1){
          a[i] = a2[index];
          index++;
      }
  }
  
  return a;
}
