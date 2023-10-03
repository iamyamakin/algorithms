import { createObject } from '../easy-2794-create-object-from-two-arrays.ts';

it('should return an object where keys come from the first array and values come from the second array', () => {
    const keys = [false, undefined, null, 0, -0, 0n, NaN, ''];
    const values = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    expect(createObject(keys, values)).toStrictEqual({
        false: 'a',
        undefined: 'b',
        null: 'c',
        '0': 'd',
        NaN: 'g',
        '': 'h',
    });
});

it('should return an empty object when keys and arrays are empty', () => {
    expect(createObject([], [])).toBeEmptyObject();
});
