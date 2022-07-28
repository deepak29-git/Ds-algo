const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let isSwaped;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwaped = true;
      }
    }
    if (!isSwaped) {
      break;
    }
  }
  return arr;
};
const res = bubbleSort([4, 2, 6, 1, 3, 5]);
console.log(res);
