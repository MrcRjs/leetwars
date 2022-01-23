
class Solution {
public:
  vector<int> sortedSquares(vector<int> &nums) {

    int total = nums.size();
    vector<int> res(total);
    int left = 0;
    int right = total - 1;

    for (int i = total - 1; i >= 0; i--) {
      int square;
      if (abs(nums[left]) < abs(nums[right])) {
        square = nums[right];
        right--;
      } else {
        square = nums[left];
        left++;
      }
      res[i] = pow(square, 2);
    }
    return res;
  }
};
