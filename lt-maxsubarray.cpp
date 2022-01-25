class Solution {
public:
    int maxSubArrayLen(vector<int>& nums, int k) {
        unsigned int n = nums.size();
        int prefixSum = 0;
        int longestSubarr = 0;
        unordered_map<int, int> indices;
        
        for (int i = 0; i < n; i++) {
            prefixSum += nums[i];

            if (prefixSum == k) {
                longestSubarr = i + 1;
            }
            
            // if the sum  is not defined
            if (indices.find(prefixSum - k) != indices.end()) {
                longestSubarr = max(longestSubarr, i - indices[prefixSum - k]);
            }

            if (indices.find(prefixSum) == indices.end()) {
                indices[prefixSum] = i;
            }
        }
        
        return longestSubarr;
    }
};
