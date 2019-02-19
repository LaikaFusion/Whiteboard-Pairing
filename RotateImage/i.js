const rotateImage = arr => {
  for(i=0; i < arr.length; i++){
    for (let index = 0; index < arr.length; index++) {
      arr[i][index] = arr[index][  arr.length - 1 -i]
    }
  }
  return arr
};

console.log(rotateImage([
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
]));
