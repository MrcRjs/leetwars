class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        vector<int> arr(2 * nums.size() + 1, -2);
        int n = nums.size();
        int maxn = 0;
        int count = 0;
        arr[n] = -1;
        for (int i = 0; i < n; i++) {
            // ===============
            cout << "[";
            for(int j = 0; j < arr.size(); j++){
                if(j == arr.size() - 1){
                    cout << arr[j];
                }
                else {
                    cout << arr[j] << ",";
                }
            }
            cout << "]" << endl;
            
            /// ==========
            
            count += (nums[i] == 0 ? -1 : 1);
            cout << "Count " << count << endl;
            if (arr[count + n] >= -1) {
                maxn = max(maxn, i - arr[count + n]);
                cout << "Maxn " << maxn << endl;
            } else {
                cout << "arr[" << count << "+" << n << "] = " << i << endl; 
                arr[count + n] = i;
            }

        }
        return maxn;
    }
};
