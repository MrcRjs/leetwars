class Solution {
public:
  vector<string> findRepeatedDnaSequences(string s) {
    int DNA_SIZE = 10;
    if (s.length() < DNA_SIZE) {
      return {};
    }

    vector<string> result;
    map<string, int> dna;
    for (int i = 0; i < s.length() - DNA_SIZE + 1; i++) {
      string current = s.substr(i, DNA_SIZE);
      if (dna[current]) {
        if (dna[current] == 1) {
          result.push_back(current);
        }
        dna[current]++;
      } else {
        dna[current] = 1;
      }
    }

    return result;
  }
};
