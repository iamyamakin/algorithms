import { compose } from '../easy-2629-function-composition.ts';

it('should return the result of evaluation an array of functions from right to left', () => {
    const fn = compose([x => x + 1, x => x * x, x => 2 * x]);

    expect(fn(5)).toBe(101);
});

it('should return the same integer as the input if the list of functions is empty', () => {
    const fn = compose([]);

    expect(fn(5)).toBe(5);
});
