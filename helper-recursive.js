const findOdd = (arr) => {
  let result = [];
  const helperRecursive = (inputArr) => {
    if (inputArr.length === 0) {
      return;
    }
    if (inputArr[0] % 2 !== 0) {
      result.push(inputArr[0]);
    }
    helperRecursive(inputArr.slice(1));
  };
  helperRecursive(arr);

  return result;
};
const result = findOdd([1, 2, 3, 4, 5, 6, 7]);
console.log(result);
