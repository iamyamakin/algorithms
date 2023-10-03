/* https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'. */

export function isValid(value: string): boolean {
    if (!value.length || value.length % 2 !== 0) {
        return false;
    }
    const parentheses = new Map<string, string>([
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
    ]);
    const stack: string[] = [];

    for (const char of value) {
        if (parentheses.has(char)) {
            stack.push(char);
            continue;
        }
        if (char !== parentheses.get(stack.pop()!)) {
            return false;
        }
    }

    return stack.length === 0;
}
