class Solution {
public:
  int minSwaps(vector<int> &data) {
    int dsize = data.size();
    int ones = 0;
    for (int n = 0; n < dsize; n++) {
      if (data[n]) {
        ones++;
      }
    }
    int l = 0, r = 0, maxOnes = 0, countOnesSub = 0;

    while (r < dsize) {

      countOnesSub += data[r];
      r++;

      if (r - l > ones) {
        countOnesSub -= data[l];
        l++;
      }
      maxOnes = maxOnes > countOnesSub ? maxOnes : countOnesSub;
    }
    return ones - maxOnes;
  }
};
