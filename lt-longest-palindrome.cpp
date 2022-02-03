class Solution {
public:
    int longestPalindrome(string s) {
        int count = 0;
        for(int i = 0; i < s.size(); i++) {
            if(s[i]!='-'){
                size_t found = s.find(s[i], i + 1);
                if(found!=std::string::npos){
                    s.replace(i, 1, "-");
                    s.replace(found, 1, "-");
                    count+=2;
                
                }
            }
        }
        return (count) < s.size() ? count + 1 : count;
    }
};
