class Solution {
public:
  int canCompleteCircuit(vector<int> &gas, vector<int> &cost) {
    int n = gas.size();

    int total = 0;
    int current = 0;
    int start = 0;
    for (int i = 0; i < n; i++) {
      total += gas[i] - cost[i];
      current += gas[i] - cost[i];
      // Not enough gas
      if (current < 0) {
        // Set next gas station
        start = i + 1;
        current = 0;
      }
    }
    return total >= 0 ? start : -1;
  }
};
