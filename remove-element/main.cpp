#include <iostream>
#include <vector>

class Solution {
public:
    int removeElement(std::vector<int>& nums, int val) {
        for (int i = 0; i < nums.size(); i++)
        {
            if(nums[i] == val ){
                nums.erase(nums.begin() + i);
                i--;
            }
        }
        return nums.size();
    }
};

int main() {
	std::vector <int> v1 = {1,2,3,3,4,0,5,4,5,6,6};
	Solution sol = *new Solution();
	sol.removeElement(v1, 3);

	for (int & v : v1) {
        std::cout << v << std::endl;
    }

	return 0;
}