import { sortBy } from '../easy-2724-sort-by.ts';

it('should return an sorted array in ascending ordery by iteratee over numbers', () => {
    const items = [2, -2, -1, 1, 0];
    const fn = (n: unknown): number => {
        if (typeof n === 'number' && Number.isInteger(n)) {
            return n;
        }

        return 0;
    };

    expect(sortBy(items, fn)).toStrictEqual([-2, -1, 0, 1, 2]);
});

it('should return an sorted array in ascending ordery by iteratee over object property', () => {
    const items = [{ x: 2 }, { x: -2 }, { x: -1 }, { x: 1 }, { x: 0 }];
    const fn = (item: { x?: number } = {}): number => {
        if (typeof item.x === 'number' && Number.isInteger(item.x)) {
            return item.x;
        }

        return 0;
    };

    expect(sortBy(items, fn)).toStrictEqual([{ x: -2 }, { x: -1 }, { x: 0 }, { x: 1 }, { x: 2 }]);
});

it('should return an empty array when the given array is empty', () => {
    const fn = (n: unknown): number => {
        if (typeof n === 'number' && Number.isInteger(n)) {
            return n;
        }

        return 0;
    };

    expect(sortBy([], fn)).toStrictEqual([]);
});
