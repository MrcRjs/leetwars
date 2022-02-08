class Solution {
public:
    int lengthOfLongestSubstringTwoDistinct(string s) {
        int n = s.length();
        if (n < 3) {
            return n;
        }

        int left = 0
        int right = 0;
        map<char, int> hashmap;
        int maxLen = 2;
        while (right < n) {
            hashmap[s[right]] = right;
            right++;

            if (hashmap.size() == 3) {
                int delIdx = INT_MAX;
                for (pair<char, int> element : hashmap) {
                    delIdx = min(delIdx, element.second);
                }
                hashmap.erase(s[delIdx]);
                left = delIdx + 1;
            }
            maxLen = max(maxLen, right - left);
        }
        return maxLen;
    }
};
