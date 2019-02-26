function minJumps(arr, n=arr.length) {
  if(n===0 || arr[0]===0){
    return "Infinity"
  }
  let count = 0;
  let curID = 0;

  while(curID !== arr.length -1 ){
    for(i)


    count++;
  }


  return count;
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));  // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9]));  // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1]));  // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));  // should print 4