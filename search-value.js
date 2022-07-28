const users = [
  {
    userName: "deepak",
    city: "ujjain",
  },
  {
    userName: "tushar",
    city: "indore",
  },
  {
    userName: "raju",
    city: "bhopal",
  },
];
const isitemExist = (arr, value) => {
  for (let items of arr) {
    if (items.userName === value) {
      return true;
    }
  }
  return false;
};

const result = isitemExist(users, "deepak");
console.log(result);