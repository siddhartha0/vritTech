function countSmall(nums) {
  let counts = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count = count + 1;
      }
    }
    counts.push(count);
  }
  return counts;
}

let nums = [15, 4, 6, 2, 1, 8];
console.log(countSmall(nums));
