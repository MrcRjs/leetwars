// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int right = n;
        int left = 1;
        int pivot;
        while(left < right) {
            pivot = ((right - left) >> 1) + left;
            // Its on the left side, we reduce right
            if(isBadVersion(pivot)) {
                right = pivot;
            }
            // Its on the right side we reduce left
            else {
                left = pivot + 1;
            }

        }

        return left;
    }
};
