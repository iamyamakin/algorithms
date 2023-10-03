import { memoize } from '../medium-2623-memoize.ts';

it('should return a cached value', () => {
    const mockFn = jest.fn((x: number, y: number): number => x + y);
    const memoized = memoize(mockFn);

    memoized(5, 10);
    memoized(5, 10);
    memoized(10, 5);
    expect(memoized(5, 10)).toBe(15);
    expect(mockFn).toHaveBeenCalledTimes(2);
});
