class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        if (points.size() == 0) {
            return 0;
        }

        sort(begin(points), end(points), [](const vector<int> &o1, const vector<int> &o2) {
            return (o1[1] < o2[1]);
        });

        int arrows = 1;
        int start, end, firstEnd = points[0][1];
        for (auto p : points) {
            start = p[0];
            end = p[1];
            if (firstEnd < start) {
                arrows++;
                firstEnd = end;
            }
        }
        return arrows;
    }
};
