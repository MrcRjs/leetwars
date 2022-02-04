class Solution {
public:
    string stringShift(string s, vector<vector<int>>& shift) {
        int clockwise = 0;
        for (auto move : shift) {
            if(move[0] == 1){
                move[1] = -move[1];
            }
            clockwise += move[1];
        }
        if(clockwise == 0){
            return s;
        }
        else if(clockwise > 0){
            clockwise = clockwise % s.length();
            return s.substr(clockwise) + s.substr(0, clockwise);
        }
        else {
            clockwise = abs(clockwise) % s.length();
            return  s.substr(s.length() - clockwise) + s.substr(0, s.length() - clockwise);
        }
    }
};
