#include <iostream>
#include <vector>


class Solution {
public:
	static double findMedianSortedArrays(std::vector<int> &nums1, std::vector<int> &nums2) {
		if (nums1.empty()) {
			return getMedian(nums2);
		}
		if (nums2.empty()) {
			return getMedian(nums1);
		}

		std::vector<int> merged{mergeOrderedVectors(nums1, nums2)};
		return getMedian(merged);
	}

	static double getMedian(std::vector<int> &nums) {
		unsigned int half = nums.size() / 2;
		return nums.size() % 2 == 0 ? (nums[half] + nums[half - 1]) / 2.0 : nums[half];
	}

	static std::vector<int> mergeOrderedVectors(std::vector<int> &nums1, std::vector<int> &nums2) {
		std::vector<int> bigger = nums1.size() > nums2.size() ? nums1 : nums2;
		std::vector<int> smaller = nums2.size() < nums1.size() ? nums2 : nums1;

		unsigned short int biggerIndex = 0, smallerIndex = 0, mergedIndex = 0;

		std::vector<int> merged((smaller.size() + bigger.size()));

		unsigned int mgSize = merged.size();
		unsigned int smSize = smaller.size();
		unsigned int bgSize = bigger.size();

		for (unsigned int i = 0; i < mgSize; i++) {
			if (biggerIndex == bgSize || (smallerIndex < smSize && smaller[smallerIndex] < bigger[biggerIndex])) {
				merged[i] = smaller[smallerIndex];
				smallerIndex++;
			} else {
				merged[i] = bigger[biggerIndex];
				biggerIndex++;
			}
		}

		return merged;
	}
};

int main() {
	Solution s;
	std::vector<int> numbers1 = {1, 3};
	std::vector<int> numbers2 = {2};
	auto res = Solution::findMedianSortedArrays(numbers1, numbers2);
	std::cout << res << '\n';
	return 0;
}