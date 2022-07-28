const checkSquare = (arr1, arr2) => {
  let map1 = {};
  let map2 = {};
  for (let count of arr1) {
    map1[count] = (map1[count] || 0) + 1;
  }
  for (let item of arr2) {
    map2[item] = (map2[item] || 0) + 1;
  }


  for (let key in map1) {
    console.log(!map2[key],"ffdafdsf")
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }

  }

  return true;
};

const result = checkSquare([1, 2, 2, 4], [1, 16, 4, 4]);
console.log(result);
