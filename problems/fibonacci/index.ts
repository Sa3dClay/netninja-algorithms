// Time complexity: exponential O(2^n) - naive
const naiveFibonacci = (num) => {
  if (num < 0) return 0;
  if (num === 1) return 1;

  return naiveFibonacci(num - 1) + naiveFibonacci(num - 2);
};

let naiveFibonacciStartTime = performance.now();
console.log("🚀 ~ naiveFibonacci(1):", naiveFibonacci(1)); // 1
console.log("🚀 ~ naiveFibonacci(2):", naiveFibonacci(2)); // 1
console.log("🚀 ~ naiveFibonacci(3):", naiveFibonacci(3)); // 2
console.log("🚀 ~ naiveFibonacci(4):", naiveFibonacci(4)); // 3
console.log("🚀 ~ naiveFibonacci(5):", naiveFibonacci(5)); // 5
console.log("🚀 ~ naiveFibonacci(5):", naiveFibonacci(6)); // 8
console.log(
  "naiveFibonacciStartTime",
  performance.now() - naiveFibonacciStartTime
);

// Time complexity: linear O(n) - memo
const memoFibonacci = (num, memo = {}) => {
  if (num in memo) return memo[num];

  if (num < 0) return 0;
  if (num === 1) return 1;

  memo[num] = memoFibonacci(num - 1, memo) + memoFibonacci(num - 2, memo);

  return memo[num];
};

let memoFibonacciStartTime = performance.now();
console.log("🚀 ~ memoFibonacci(1):", memoFibonacci(1)); // 1
console.log("🚀 ~ memoFibonacci(2):", memoFibonacci(2)); // 1
console.log("🚀 ~ memoFibonacci(3):", memoFibonacci(3)); // 2
console.log("🚀 ~ memoFibonacci(4):", memoFibonacci(4)); // 3
console.log("🚀 ~ memoFibonacci(5):", memoFibonacci(5)); // 5
console.log("🚀 ~ memoFibonacci(5):", memoFibonacci(6)); // 8
console.log(
  "memoFibonacciStartTime",
  performance.now() - memoFibonacciStartTime
);
