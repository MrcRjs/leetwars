class Solution {
    public int maxSubArrayLen(int[] nums, int k) {
        int prefixSum = 0;
        int longestSubarray = 0;
        HashMap<Integer, Integer> indices = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];
            
            if(prefixSum == k) {
                longestSubarray = i + 1;
            }
            
            if(indices.containsKey(prefixSum - k)) {
                longestSubarray = Math.max(longestSubarray, i - indices.get(prefixSum - k));
            }
            
            if(!indices.containsKey(prefixSum)) {
                indices.put(prefixSum, i);
            }
        }
        return longestSubarray;
    }
}
