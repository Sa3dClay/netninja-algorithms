const countPaths = (m, n, memo = {}) => {
  if (m === 1 || n === 1) return 1;

  const key = `${m},${n}`;

  if (memo[key]) return memo[key];

  memo[key] = countPaths(m - 1, n) + countPaths(m, n - 1);

  return memo[key];
};

let countPathsStartTime = performance.now();

console.log("🚀 ~ countPathsStartTime(3, 3):", countPaths(3, 3)); // 6
console.log("🚀 ~ countPathsStartTime(4, 5):", countPaths(4, 5)); // 20
console.log("🚀 ~ countPathsStartTime(6, 6):", countPaths(6, 6)); // 252

console.log("countPathsPerformance", performance.now() - countPathsStartTime);
