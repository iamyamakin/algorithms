import { filter } from '../easy-2634-filter-elements-from-array.ts';

it('should return an array with elements from the input array for which the filtering function evaluates to a truthy value', () => {
    const fn = (n: number | undefined, index?: number): boolean => n === index;

    expect(filter([-2, -1, 0, 1, 4], fn)).toStrictEqual([4]);
});

it('should return an empty array when the given array is empty', () => {
    expect(filter([], () => true)).toStrictEqual([]);
});

it('should return an empty array when the filtering function always evaluates a falsy value', () => {
    const items = [0, 1, 2, 3, 4, 5];

    expect(filter(items, () => false)).toStrictEqual([]);
    expect(filter(items, () => Boolean(undefined))).toStrictEqual([]);
    expect(filter(items, () => Boolean(null))).toStrictEqual([]);
    expect(filter(items, () => Boolean(0))).toStrictEqual([]);
    expect(filter(items, () => Boolean(-0))).toStrictEqual([]);
    expect(filter(items, () => Boolean(0n))).toStrictEqual([]);
    expect(filter(items, () => Boolean(NaN))).toStrictEqual([]);
    expect(filter(items, () => Boolean(''))).toStrictEqual([]);
});
