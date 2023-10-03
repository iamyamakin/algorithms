import { chunk } from '../easy-2677-chunk-array.ts';

it('should return an array with chunked elements', () => {
    const items = ['a', 'b', 'c', 'd'];

    expect(chunk(items, 2)).toStrictEqual([
        ['a', 'b'],
        ['c', 'd'],
    ]);
});

it('should return an array where the last chunk is remaining elements', () => {
    const items = ['a', 'b', 'c', 'd', 'f'];

    expect(chunk(items, 3)).toStrictEqual([
        ['a', 'b', 'c'],
        ['d', 'f'],
    ]);
});

it('should return an empty array when the given array is empty', () => {
    expect(chunk([], 404)).toStrictEqual([]);
});

it('should return an empty array when the size is less than or equal to 0', () => {
    expect(chunk([1, 2, 3], -1)).toStrictEqual([]);
    expect(chunk([1, 2, 3], 0)).toStrictEqual([]);
});

it('should return an array with falsy elements that consists of subarrays each of length the size is equal to 1', () => {
    const items = [false, undefined, null, 0, -0, 0n, NaN, ''];

    expect(chunk(items, 1)).toStrictEqual([[false], [undefined], [null], [0], [-0], [0n], [NaN], ['']]);
});
