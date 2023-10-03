import { flat } from '../medium-2625-flatten-deeply-nested-array.ts';

it('should return an empty array if the given array is empty', () => {
    expect(flat([], 0)).toStrictEqual([]);
    expect(flat([], 1)).toStrictEqual([]);
    expect(flat([], 2)).toStrictEqual([]);
});

it('should return an original array if the depth is equal to 0', () => {
    const items = [1, [2, [3]]];

    expect(flat(items, 0)).toBe(items);
});

it('should return an original array if the depth is equal to 1', () => {
    const items = [1, [2, 3], [4, [5, 6], 7], [8, 9, 10]];

    expect(flat(items, 1)).toStrictEqual([1, 2, 3, 4, [5, 6], 7, 8, 9, 10]);
});

it('should return an original array if the depth is equal to 2', () => {
    const items = [1, [2, 3], [4, [5, 6], 7], [8, 9, 10]];

    expect(flat(items, 2)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
