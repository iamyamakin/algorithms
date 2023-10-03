import { deepMerge } from '../medium-2755-deep-merge-of-two-objects.ts';

it('should overwrite the json primitives in the target value with the source value', () => {
    expect(deepMerge('a', 'b')).toBe('b');
    expect(deepMerge(100, 200)).toBe(200);
    expect(deepMerge(true, false)).toBe(false);
    expect(deepMerge(null, 'null')).toBe('null');
});

it('should return an object with all the keys that exist on either object', () => {
    expect(deepMerge({ a: 1, b: { c: { d: 2 }, e: 3 } }, { aa: 10, bb: { cc: { dd: 20 }, ee: 30 } })).toStrictEqual({
        a: 1,
        aa: 10,
        b: { c: { d: 2 }, e: 3 },
        bb: { cc: { dd: 20 }, ee: 30 },
    });
});

it('should return an object in which the source value overwrites the target value if both objects have the same key', () => {
    expect(deepMerge({ a: 1, b: { c: 2, f: 200 }, d: [3, [4, 5]] }, { b: { c: 20 }, d: [30, [40]] })).toStrictEqual({
        a: 1,
        b: { c: 20, f: 200 },
        d: [30, [40, 5]],
    });
});

it('should return the same length as the longer array', () => {
    expect(Object.keys(deepMerge([1], [2, 3]) as number[]).length).toBe(2);
});

it('should return an array in which the source value overwrites the target value if both arrays have the same index', () => {
    expect(deepMerge([1, [2, 3], 4, [[5, 6]]], [1, [22], 44, [[55]]])).toStrictEqual([1, [22, 3], 44, [[55, 6]]]);
});
