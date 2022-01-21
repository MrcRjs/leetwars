class Solution {
public:
  int searchInsert(vector<int> &nums, int target) {
    int right = nums.size() - 1;
    int left = 0;
    int pivot;
    while (left <= right) {
      pivot = ((right - left) >> 1) + left;

      if (nums[pivot] == target) {
        return pivot;
      } else if (nums[pivot] > target) {
        right = pivot - 1;
      } else {
        left = pivot + 1;
      }
    }
    return left;
  }
};
