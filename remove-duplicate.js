const removeDuplicate = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === result[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(arr[i]);
    }
  }
  return result;
};
const result = removeDuplicate([1, 2, 2, 3, 3, 4, 4, 5, 4, 5, 6, 6, 7]);
console.log(result);
