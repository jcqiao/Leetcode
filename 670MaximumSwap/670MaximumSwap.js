// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.

// Example 1:

// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
// Example 2:

// Input: num = 9973
// Output: 9973
// Explanation: No swap.

// Constraints:

// 0 <= num <= 108

function maximumSwap(num) {
  let numArr = num.toString().split("").map(Number);
  const maxIds = [];
  const n = numArr.length;
  maxIds[n - 1] = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    maxIds[i] = numArr[i] > numArr[maxIds[i + 1]] ? i : maxIds[i + 1];
  }
  console.log(maxIds, "maxIds");

  for (let i = 0; i < n; i++) {
    if (numArr[i] < numArr[maxIds[i]]) {
      let swapId = maxIds[i];
      [numArr[i], numArr[swapId]] = [numArr[swapId], numArr[i]];
      break;
    }
  }
  return Number(numArr.join(""));
}

const input = 9978;
console.log(maximumSwap(input));
