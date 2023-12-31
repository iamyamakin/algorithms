/* https://leetcode.com/problems/convert-object-to-json-string/

Given an object, return a valid JSON string of that object. You may assume the object only includes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.

Example 1:

Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation:
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().

Example 2:

Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.

Example 3:

Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
Explanation:
Objects and arrays can include other objects and arrays.

Example 4:

Input: object = true
Output: true
Explanation:
Primitive types are valid inputs.

Constraints:

object includes strings, integers, booleans, arrays, objects, and null
1 <= JSON.stringify(object).length <= 10^5
maxNestingLevel <= 1000
all strings will only contain alphanumeric characters */

export function jsonStringify(data: unknown): string {
    if (typeof data === 'string') {
        return `"${data}"`;
    }
    if (data === null || (!Array.isArray(data) && typeof data !== 'object')) {
        return String(data);
    }

    const result: string[] = [];
    const isArray = Array.isArray(data);

    for (const key of Object.keys(data)) {
        result.push(
            isArray
                ? jsonStringify(data[key as keyof typeof data])
                : `"${key}":${jsonStringify(data[key as keyof typeof data])}`,
        );
    }

    return isArray ? `[${result.join(',')}]` : `{${result.join(',')}}`;
}
