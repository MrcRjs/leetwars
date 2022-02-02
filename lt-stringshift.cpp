class Solution {
public:
    string stringShift(string s, vector<vector<int>>& shift) {

        if(shift.size() == 0) {
            return s;
        }
        
        int totalShift = 0;
        for(auto sh: shift){
            if(sh[0] == 0) {
                totalShift -= sh[1];
            } else {
                totalShift += sh[1];
            }
        }

        cout << totalShift << endl;
        if(totalShift % s.size() == 0) {
            return s;
        }
        
        // shift right
        else if(totalShift > 0) {
            int totalMove = totalShift % s.size();
            return s.substr(s.size() - totalMove) + s.substr(0, s.size() - totalMove);
        }
        
        // shift left
        else if(totalShift < 0){
            int totalMove = (-totalShift) % s.size();
            cout << "left "<< totalMove << endl;
            return  s.substr(totalMove) + s.substr(0, totalMove);
        }
        
        return s;
    }
};
