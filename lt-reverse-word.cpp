class Solution {
public:
  string reverseWords(string s) {
    int n = s.size();
    int wordStart = 0;
    for (int i = 0; i < n; i++) {
      // if current char is a space
      if (s.at(i) == ' ') {
        string reversed = reverseString(s.substr(wordStart, i - wordStart));
        s.replace(wordStart, i - wordStart, reversed);
        wordStart = i + 1;
      } else if (i == n - 1) {
        string reversed = reverseString(s.substr(wordStart, i - wordStart + 1));
        s.replace(wordStart, i - wordStart + 1, reversed);
      };
    }
    return s;
  }

  string reverseString(string s) {
    int n = s.size() - 1;
    for (int i = 0; i <= n / 2; i++) {
      char t = s[n - i];
      s[n - i] = s[i];
      s[i] = t;
    }
    return s;
  }
};
