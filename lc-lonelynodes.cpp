/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
#include <queue>
class Solution {
public:
  bool hasSingleChild(TreeNode *root);

  TreeNode *getSingleChild(TreeNode *root);

  vector<int> getLonelyNodes(TreeNode *root) {
    vector<int> lonelynodes;
    queue<TreeNode *> nodeQ;
    nodeQ.push(root);
    while (nodeQ.size()) {
      TreeNode *current = nodeQ.front();
      nodeQ.pop();

      if (hasSingleChild(current)) {
        lonelynodes.push_back(getSingleChild(current)->val);
      }

      if (current->left) {
        nodeQ.push(current->left);
      }

      if (current->right) {
        nodeQ.push(current->right);
      }
    };

    return lonelynodes;
  }
};

bool Solution::hasSingleChild(TreeNode *root) {
  return (!root->left && root->right) || (root->left && !root->right);
};

TreeNode *Solution::getSingleChild(TreeNode *root) {
  return root->left ? root->left : root->right;
};
