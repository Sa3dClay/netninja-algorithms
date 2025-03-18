const getLongestSubstring = (str) => {
  if (str.length < 1) return 0;

  let maxLength = 0;
  let start = 0;
  let charIndex = new Map();

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    let lastCharIndex = charIndex.get(char);

    if (lastCharIndex >= start) {
      start = lastCharIndex + 1;
    }

    charIndex.set(char, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(getLongestSubstring("book"));
console.log(getLongestSubstring("apple"));
console.log(getLongestSubstring("banana"));
console.log(getLongestSubstring("tomato"));
console.log(getLongestSubstring("strawberry"));
