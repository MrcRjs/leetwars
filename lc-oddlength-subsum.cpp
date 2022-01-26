class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {
        int sum = 0;
        int arrSize = arr.size();
        int subArrLength = 1;
        while(subArrLength <= arrSize) {
            int start = 0;
            while(start + subArrLength <= arrSize) {
                for(int i = start; i < subArrLength + start; i++) {
                    sum += arr[i];
                }
                start++;
            }
            subArrLength += 2;
        }
        return sum;
    }
};
