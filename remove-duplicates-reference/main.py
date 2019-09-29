from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:

        current = None
        np = 0
        i = 0
        while i < len(nums):
            if  nums[i] != current:
                nums.insert(np,nums[i])
                current = nums[np]
                np += 1
                i+=2
            else:
                i+=1

        return np

if __name__ == '__main__':
    # Remove by reference
    s = Solution()
    numlist = [0,1,1,1,2,2,5,5,5,5,5,5,5,6,7]
    idx = s.removeDuplicates(numlist)
    print(numlist[:idx])
