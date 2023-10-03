import { objDiff } from '../medium-2700-differences-between-two-objects.ts';

it('should return an empty object when keys added or removed', () => {
    expect(objDiff({}, { a: 1, b: 2 })).toStrictEqual({});
});

it('should return an object with changed keys', () => {
    expect(objDiff({ a: 1, b: [], c: { d: null, e: 101 } }, { a: 2, b: [], c: { d: 2, e: 101 } })).toStrictEqual({
        a: [1, 2],
        c: { d: [null, 2] },
    });
});

it('should return an object with changed keys of the array and the nested array', () => {
    expect(objDiff({ a: [1, [2, 3, 4]] }, { a: [10, [20]] })).toStrictEqual({
        a: {
            0: [1, 10],
            1: {
                0: [2, 20],
            },
        },
    });
});

it('should return an object with diff between the object and the array', () => {
    expect(objDiff({ a: { b: 2 } }, { a: [20] })).toStrictEqual({
        a: [{ b: 2 }, [20]],
    });
});

it('should return an object with diff between the empty object and the empty array', () => {
    expect(objDiff({ a: { b: [] } }, { a: { b: {} } })).toStrictEqual({ a: { b: [[], {}] } });
});

it('should return an empty object when two objects are identical but have a different ordering of keys', () => {
    expect(objDiff({ a: [1, 2, 3], b: false }, { b: false, a: [1, 2, 3] })).toStrictEqual({});
});
