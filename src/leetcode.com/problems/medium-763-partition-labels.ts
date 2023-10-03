/* https://leetcode.com/problems/partition-labels/

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:

Input: s = "eccbbbbdec"
Output: [10]

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters. */

export function partitionLabels(value: string): number[] {
    if (!value.length) {
        return [];
    }

    const last = new Map<string, number>();

    for (let i = 0; i < value.length; i++) {
        last.set(value[i]!, i);
    }

    const result: number[] = [];
    let count = 0;
    let max = 0;

    for (let i = 0; i < value.length; i++) {
        count++;
        max = Math.max(max, last.get(value[i]!)!);

        if (i === max) {
            result.push(count);
            count = 0;
        }
    }

    return result;
}
