import { reduce } from '../easy-2626-array-reduce-transformation.ts';

it('should reduce the array using the reducer function', () => {
    const sum = (accum: number, value: number): number => accum + value;

    expect(reduce([1, 2, 3, 4], sum, 100)).toBe(110);
});

it('should return the initial value when the array is empty', () => {
    const diff = (accum: number, value: number): number => accum - value;

    expect(reduce([], diff, 100)).toBe(100);
});
