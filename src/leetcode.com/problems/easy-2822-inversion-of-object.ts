/* https://leetcode.com/problems/inversion-of-object/

Given an object obj, return an inverted object invertedObj.

The invertedObj should have the keys of obj as values and the values of obj as keys. It is guaranteed that the values in obj are only strings. The function should handle duplicates, meaning that if there are multiple keys in obj with the same value, the invertedObj should map the value to an array containing all corresponding keys.

Example 1:

Input: obj = {"a": "1", "b": "2", "c": "3", "d": "4"}
Output: invertedObj = {"1": "a", "2": "b", "3": "c", "4": "d"}
Explanation: The keys from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.

Example 2:

Input: obj = {"a": "1", "b": "2", "c": "2", "d": "4"}
Output: invertedObj = {"1": "a", "2": ["b", "c"], "4": "d"}
Explanation: There are two keys in obj with the same value, the invertedObj mapped the value to an array containing all corresponding keys.

Example 3:

Input: obj = ["1", "2", "3", "4"]
Output: invertedObj = {"1": "0", "2": "1", "3": "2", "4": "3"}
Explanation: Arrays are also objects therefore array has changed to an object and the keys (indices) from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.

Constraints:

obj is a valid JSON object
typeof obj[key] === "string"
2 <= JSON.stringify(obj).length <= 10^5 */

export function invertObject(
    obj: Record<string | number | symbol, string> | string[],
): Record<string, string | string[]> {
    const result: Record<string, string | string[]> = {};

    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            const newKey = String(obj[key]);

            if (Object.hasOwn(result, newKey)) {
                if (Array.isArray(result[newKey])) {
                    (result[newKey] as string[]).push(key);
                } else {
                    result[newKey] = [result[newKey] as string, key];
                }
            } else {
                result[newKey] = key;
            }
        }
    }

    return result;
}
