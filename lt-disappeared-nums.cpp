class Solution {
public:
  vector<int> findDisappearedNumbers(vector<int> &nums) {
    int n = nums.size() + 1;
    std::vector<bool> existingNums(n, false);
    int total = n;
    for (int i = 0; i < n - 1; i++) {
      existingNums[nums[i]] = true;
      total--;
    }

    std::vector<int> result;
    for (int i = 1; i < n; i++) {
      if (!existingNums[i]) {
        result.push_back(i);
      }
    }

    return result;
  }
};
