const isPalinDrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // one line solution
  // return cleanStr === cleanStr.split("").reverse().join("");

  // two pointers solution
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalinDrome("A man, a plan, a canal: Panama"));
console.log(isPalinDrome("hello"));
