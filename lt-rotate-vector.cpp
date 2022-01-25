class Solution {
public:
  void rotate(vector<int> &nums, int k) {
    int n = nums.size();

    vector<int> arr(n);
    // Rotate by k
    for (int i = 0; i < n; i++) {
      arr[(i + k) % n] = nums[i];
    }
    // Copy
    for (int i = 0; i < n; i++) {
      nums[i] = arr[i];
    }
  }
};
