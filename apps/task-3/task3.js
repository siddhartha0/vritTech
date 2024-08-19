function longestConsecutiveChain(nums) {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let length = 1;

    while (nums.includes(currentNum + 1)) {
      length++;
      currentNum++;
    }

    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

const nums = [10, 5, 6, 1, 3, 2];
console.log(longestConsecutiveChain(nums));

// space complexity = o(n2)
// time complexity=o(1)
