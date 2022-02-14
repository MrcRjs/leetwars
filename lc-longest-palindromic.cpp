class Solution {
public:
  string longestPalindrome(string s) {
    if (s.size() == 0) {
      return "";
    }
    if (s.size() == 1) {
      return s;
    }
    int start = 0;
    int end = 0;

    for (int i = 0; i < s.size(); i++) {
      // Verify centers of 1 and 2 letters, expand
      int singleC = expandCenter(s, i, i);
      int doubleC = expandCenter(s, i, i + 1);
      if (maxLen > end - start) {
        start = i - (maxLen - 1) / 2;
        end = i + maxLen / 2;
      }
    }

    return s.substr(start, end - start + 1);
  }

private:
  int expandCenter(string s, int left, int right) {
    int L = left;
    int R = right;
    while (L >= 0 && R < s.size() && s[L] == s[R]) {
      L--;
      R++;
    }

    return R - L - 1;
  }
};
