class Solution {
public:
  int search(vector<int> &nums, int target) {
    int right = nums.size() - 1;
    int left = 0;

    int pivot;
    while (left <= right) {
      // Size of nums divided by 2
      pivot = ((right - left) >> 1) + left;
      if (nums[pivot] == target) {
        return pivot;
      }
      // left
      else if (nums[pivot] > target) {
        right = pivot - 1;
      }
      // right
      else {
        left = pivot + 1;
      }
    }
    return -1;
  }
};
