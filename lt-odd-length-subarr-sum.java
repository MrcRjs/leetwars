class Solution {
    public int sumOddLengthSubarrays(int[] arr) {
        int n = arr.length;
        int subArrLen = 1;
        int sum = 0;
        while(subArrLen <= n){
            int right = subArrLen;
            while (right <= n) {
                for(int i = right - subArrLen; i < right; i++) {
                    sum += arr[i];
                }
                right++;
            }
            subArrLen += 2;
        }
        return sum;
    }
}
