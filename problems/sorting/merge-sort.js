// Time complexity O(m + n)
// Space complexity O(m + n)
const mergeTwoArrays = (arrOne, arrTwo) => {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arrOne.length || j < arrTwo.length) {
    if (i >= arrOne.length) {
      merged.push(arrTwo[j]);
      j++;

      continue;
    }

    if (j >= arrTwo.length) {
      merged.push(arrOne[i]);
      i++;

      continue;
    }

    if (arrOne[i] < arrTwo[j]) {
      merged.push(arrOne[i]);
      i++;
    } else {
      merged.push(arrTwo[j]);
      j++;
    }
  }

  return merged;
};

console.log(
  "mergeTwoArrays([1, 3], [2, 5]) =>",
  mergeTwoArrays([1, 3], [2, 5])
);

// Total time complexity (log-linear) = O(n log n)
// Space complexity = O(n)
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));

  return mergeTwoArrays(left, right);
};

console.log("mergeSort([3, 1, 5, 2]) =>", mergeSort([3, 1, 5, 2]));
