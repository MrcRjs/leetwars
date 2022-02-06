class Solution {
public:

    int missing(int idx, vector<int> nums) {
        return nums[idx] - nums[0] - idx;
    }
    int missingElement(vector<int>& nums, int k) {
        int n = nums.size();

        if(k > missing(n - 1, nums)) {
            return nums[n - 1] + k - missing(n - 1, nums);
        }

        int idx = 1;

        while(missing(idx, nums) < k) {
            idx++;
        }

        return nums[idx - 1] + k - missing(idx - 1, nums);
    }
};
