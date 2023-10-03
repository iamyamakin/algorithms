/* https://leetcode.com/problems/json-deep-equal/

Given two objects o1 and o2, check if they are deeply equal.

For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

Please solve it without using lodash's _.isEqual() function.

Example 1:

Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
Output: true
Explanation: The keys and values match exactly.

Example 2:

Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.

Example 3:

Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.

Example 4:

Input: o1 = true, o2 = false
Output: false
Explanation: true !== false

Constraints:

1 <= JSON.stringify(o1).length <= 10^5
1 <= JSON.stringify(o2).length <= 10^5
maxNestingDepth <= 1000 */

export function areDeeplyEqual(one: unknown, two: unknown): boolean {
    const stackOne = [one];
    const stackTwo = [two];

    while (stackOne.length) {
        one = stackOne.pop();
        two = stackTwo.pop();

        if (one === two) {
            continue;
        }
        if (one === null || two === null) {
            return one === two;
        }
        if (typeof one !== 'object' || typeof two !== 'object' || Array.isArray(one) !== Array.isArray(two)) {
            return false;
        }

        const oneKeys = Object.keys(one);
        const twoKeys = Object.keys(two);

        if (oneKeys.length !== twoKeys.length) {
            return false;
        }

        for (const key of oneKeys) {
            if (!Object.hasOwn(two, key)) {
                return false;
            }
            stackOne.push(one[key as keyof typeof one]);
            stackTwo.push(two[key as keyof typeof two]);
        }
    }

    return true;
}
