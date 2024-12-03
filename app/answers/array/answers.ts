const hasDuplicate = (nums: number[]) => {
  const hash: Record<string, number> = {};
  for (let i = 0; i <= nums.length; i++) {
    if (hash[nums[i]]) return true;
    hash[nums[i]] = 1;
  }
  return false;
};

export { hasDuplicate };
