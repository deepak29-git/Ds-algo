const findSumOfZeroPair = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

const result = findSumOfZeroPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
