class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int left = 0;
        int n = nums.size();
        int right = 0;
        for(;right < n; right++) {
            if(nums[right] == 0) {
                k--;
            }
            
            if(k < 0){
                k+= 1 - nums[left];
                left++;
            }
        }
        return right - left;
    }
};
