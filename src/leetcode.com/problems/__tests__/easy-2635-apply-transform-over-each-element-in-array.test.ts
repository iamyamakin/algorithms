import { map } from '../easy-2635-apply-transform-over-each-element-in-array.ts';

it('should return a new array with a transformation applied to each element', () => {
    const fn = (n: number | undefined): number | undefined => {
        if (typeof n === 'number' && Number.isInteger(n)) {
            return n * 10;
        }

        return 404;
    };

    expect(map([-2, -1, 0, 1, 2, NaN], fn)).toStrictEqual([-20, -10, 0, 10, 20, 404]);
});

it('should return a new array without mutation the input array', () => {
    const original = [-2, -1, 0, 1, 2];

    expect(map(original, (n: number | undefined): number | undefined => n)).not.toBe(original);
});

it('should return an empty array when the given array is empty', () => {
    expect(map([], () => 404)).toStrictEqual([]);
});
