const getMinCoins = (coins, amount) => {
  const minCoins = new Array(amount + 1).fill(Infinity);
  minCoins[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  }

  console.log("🚀 ~ getMinCoins ~ minCoins:", minCoins);

  return minCoins[amount] === Infinity ? -1 : minCoins[amount];
};

console.log(getMinCoins([1, 20, 50], 60));
console.log(getMinCoins([1, 5, 20, 50], 88));
console.log(getMinCoins([1, 10, 20, 50], 99));
console.log(getMinCoins([1, 5, 10, 20, 50], 123));
