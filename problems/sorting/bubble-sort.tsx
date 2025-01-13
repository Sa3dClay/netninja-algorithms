const bubbleSort = (arr) => {
  let sortedUntil = 0;

  for (let i = arr.length - 1; i > 0; i--) {
    if (sortedUntil >= i) break;

    console.log("starting upper loop with limit:", i);

    for (let j = sortedUntil; j < i; j++) {
      console.log("starting inner from index:", j);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        sortedUntil = j + 1;
      }
    }
  }

  return arr;
};

console.log("bubbleSort:", bubbleSort([1, 2, 3, 4, 5, 7, 6]));
console.log("bubbleSort:", bubbleSort([1, 2, 3, 5, 4, 7, 6]));
console.log("bubbleSort:", bubbleSort([1, 3, 2, 5, 4, 7, 6]));
console.log("bubbleSort:", bubbleSort([1, 7, 6, 5, 4, 3, 2]));
console.log("bubbleSort:", bubbleSort([1, 2, 7, 6, 5, 4, 3]));
console.log("bubbleSort:", bubbleSort([1, 2, 3, 7, 6, 5, 4]));
console.log("bubbleSort:", bubbleSort([1, 2, 3, 4, 7, 6, 5]));
