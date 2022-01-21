// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int right = n;
        while(isBadVersion(right)) {
            // cout << right << endl;
            right--;
        }
        return right < n ? right + 1 : right;
    }
};
