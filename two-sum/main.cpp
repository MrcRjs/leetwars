#include <iostream>
#include <vector>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {

        for(int i = 0; i < nums.size(); i++){
            for(int j = i + 1; j < nums.size(); j++){
                if(nums[i] + nums[j] == target) {
                    return std::vector<int> {i, j};
                }
            }
        }

        return std::vector<int> (0,0);
    }
};

int main() {
    Solution s1;
    std::vector <int> nums = {3,2,4};
    int target = 6;

    std::vector <int> result = s1.twoSum(nums, target);
    std::cout << "[" << result[0] << " , "<< result[1] << "]" << std::endl;
    return 0;
}