/* https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

Constraints:

1 <= n <= 8 */

export function generateParenthesis(n: number): string[] {
    if (n < 1) {
        return [];
    }

    const result: string[] = [];
    const backtracking = (value: string, left: number, right: number) => {
        if (value.length === 2 * n) {
            result.push(value);

            return;
        }
        if (left < n) {
            backtracking(value + '(', left + 1, right);
        }
        if (left > right) {
            backtracking(value + ')', left, right + 1);
        }
    };

    backtracking('', 0, 0);

    return result;
}
