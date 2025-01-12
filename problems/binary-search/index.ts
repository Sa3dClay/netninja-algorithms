const binarySearch = (arr, value, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === value) return middle;

  if (arr[middle] < value) return binarySearch(arr, value, middle + 1, right);

  if (arr[middle] > value) return binarySearch(arr, value, left, middle - 1);
};

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(exampleArray, 8));

console.log(binarySearch(exampleArray, 2));

console.log(binarySearch(exampleArray, 10));
