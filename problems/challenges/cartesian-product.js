const cartesianProduct = (arr1, arr2) => {
  const arr3 = [];

  arr1.forEach((e1) => {
    arr2.forEach((e2) => {
      arr3.push([e1, e2]);
    });
  });

  return arr3;
};

console.log(cartesianProduct(["a", "b"], [1, 2, 3]));

/*
arr1 = [a, b], arr2 = [1, 2, 3]
arr3 = [
  [a, 1], [a, 2], [a, 3],
  [b, 1], [b, 2], [b, 3]
]

sol1:
a, 1
a, 2
a, 3
... N^2
*/
