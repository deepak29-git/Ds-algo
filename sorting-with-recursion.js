let newArr = [];
let i = 0;
let j = 0;

const isSorting = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const recursiveSorting = (arr) => {
  if (isSorting(arr)) {
    newArr = arr;
    return;
  } else if (arr[i] < arr[j]) {
    i++;
    j++;
    recursiveSorting(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    recursiveSorting(arr);
  }
};

recursiveSorting([2, 4, 3, 1, 5, 8, 6, 9, 7]);
console.log(newArr);
