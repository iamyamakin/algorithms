import { areDeeplyEqual } from '../medium-2628-json-deep-equal.ts';

it('should checks primitives by ===', () => {
    expect(areDeeplyEqual('0', 0)).toBeFalse();

    expect(areDeeplyEqual(true, true)).toBeTrue();
    expect(areDeeplyEqual(false, false)).toBeTrue();
    expect(areDeeplyEqual(undefined, undefined)).toBeTrue();
    expect(areDeeplyEqual(null, null)).toBeTrue();
    expect(areDeeplyEqual(0, 0)).toBeTrue();
    expect(areDeeplyEqual(+0, -0)).toBeTrue();
    expect(areDeeplyEqual(0n, -0n)).toBeTrue();
    expect(areDeeplyEqual('str', 'str')).toBeTrue();

    const symbol = Symbol();

    expect(areDeeplyEqual(symbol, symbol)).toBeTrue();
});

it('should checks nested objects and nested arrays', () => {
    expect(areDeeplyEqual({ a: [1, { b: 2, c: [3, { d: 4 }] }] }, { a: [1, { b: 2, c: [3, { d: 4 }] }] })).toBeTrue();
    expect(areDeeplyEqual({ a: [1, { b: 2, c: [3, { d: 4 }] }] }, { a: [1, { b: 2, c: [3, { d: 5 }] }] })).toBeFalse();
});

it('should return true when two objects are identical but have a different ordering of keys', () => {
    expect(areDeeplyEqual({ a: [1, 2, 3], b: false }, { b: false, a: [1, 2, 3] })).toBeTrue();
});

it('should return false when the array of numbers is compared with the array of strings', () => {
    expect(areDeeplyEqual({ a: [1, 2, 3] }, { a: ['1', '2', '3'] })).toBeFalse();
});
