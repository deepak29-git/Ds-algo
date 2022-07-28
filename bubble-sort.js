// const bubbleSort = (arr) => {
//   let temp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };
// const result = bubbleSort([9, 2, 4, 6, 1, 3, 5, 7, 8]);
// console.log(result);

// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], [arr[j + 1]]] = [arr[j + 1], [arr[j]]];
//       }
//     }
//   }
//   return arr;
// };

// const result = bubbleSort([9, 2, 4, 6, 1, 3, 5, 7, 8]);
// console.log(result);
