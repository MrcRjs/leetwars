class Solution {
public:
  int fourSumCount(vector<int> &nums1, vector<int> &nums2, vector<int> &nums3,
                   vector<int> &nums4) {
    int count = 0;
    unordered_map<int, int> map;
    for (int n1 : nums1) {
      for (int n2 : nums2) {
        ++map[n1 + n2];
      }
    }

    for (int n3 : nums3) {
      for (int n4 : nums4) {
        auto it = map.find(-(n3 + n4));
        if (it != map.end()) {
          count += it->second;
        }
      }
    }
    return count;
  }
};
