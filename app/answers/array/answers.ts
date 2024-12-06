const hasDuplicate = (nums: number[]) => {
  const hash: Record<string, number> = {};
  for (let i = 0; i <= nums.length; i++) {
    if (hash[nums[i]]) return true;
    hash[nums[i]] = 1;
  }
  return false;
};

const isAnagram = (s: string, t: string) => {
  if (s.length !== t.length) {
    return false;
  }

  const sSort = s.split("").sort().join();
  const tSort = t.split("").sort().join();
  return sSort == tSort;
};

export { hasDuplicate, isAnagram };
