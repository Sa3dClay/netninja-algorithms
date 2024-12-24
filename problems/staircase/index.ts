// Problem: How many distinct ways can you climb a staircase with n steps, taking 1 or 2 steps?
// Formula: ways(n) = ways(n-1) + ways(n-2)

// Time complexity: exponential O(2^n)
// Space complexity: linear O(n)
const countStaircaseWaysRecursive = (n) => {
  // base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  // recursive
  return (
    countStaircaseWaysRecursive(n - 1) + countStaircaseWaysRecursive(n - 2)
  );
};

let recursiveAlgorithmStartTime = performance.now();
console.log("countStaircaseWaysRecursive(1): ", countStaircaseWaysRecursive(1)); // expects to get 1 ([1])
console.log("countStaircaseWaysRecursive(2): ", countStaircaseWaysRecursive(2)); // expects to get 2 ([1,1], [2])
console.log("countStaircaseWaysRecursive(3): ", countStaircaseWaysRecursive(3)); // expects to get 3 ([1,1,1], [1,2], [2,1])
console.log("countStaircaseWaysRecursive(4): ", countStaircaseWaysRecursive(4)); // expects to get 5
console.log("countStaircaseWaysRecursive(5): ", countStaircaseWaysRecursive(5)); // expects to get 8
console.log(
  "recursiveAlgorithmTimeTaken",
  performance.now() - recursiveAlgorithmStartTime
);

// Time complexity: exponential O(n)
// Space complexity: linear O(1)
const countStaircaseWaysLinear = (n) => {
  // base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  // linear
  let waysToPreviousStep = 2; // (n-1)
  let waysToTwoStepsBack = 1; // (n-2)
  let totalWays = 0;

  for (let i = 3; i <= n; i++) {
    totalWays = waysToPreviousStep + waysToTwoStepsBack;

    waysToTwoStepsBack = waysToPreviousStep;
    waysToPreviousStep = totalWays;
  }

  return totalWays;
};

let linearAlgorithmStartTime = performance.now();
console.log("countStaircaseWaysLinear(1): ", countStaircaseWaysLinear(1)); // expects to get 1 ([1])
console.log("countStaircaseWaysLinear(2): ", countStaircaseWaysLinear(2)); // expects to get 2 ([1,1], [2])
console.log("countStaircaseWaysLinear(3): ", countStaircaseWaysLinear(3)); // expects to get 3 ([1,1,1], [1,2], [2,1])
console.log("countStaircaseWaysLinear(4): ", countStaircaseWaysLinear(4)); // expects to get 5
console.log("countStaircaseWaysLinear(5): ", countStaircaseWaysLinear(5)); // expects to get 8
console.log(
  "linearAlgorithmTimeTaken",
  performance.now() - linearAlgorithmStartTime
);
