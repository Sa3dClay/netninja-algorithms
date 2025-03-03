const findGCD = (a, b) => {
  if (b === 0) return a;

  return findGCD(b, a % b);
};

console.log(findGCD(27, 9));
console.log(findGCD(27, 6));
console.log(findGCD(27, 3));
