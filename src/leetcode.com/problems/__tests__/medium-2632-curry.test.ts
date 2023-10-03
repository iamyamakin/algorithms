import { curry } from '../medium-2632-curry.ts';

it('should return a currying', () => {
    function sum(a: number, b: number, c: number): number {
        return a + b + c;
    }

    /* eslint-disable-next-line */
    expect(curry(sum)(1)(2)(3)).toBe(sum(1, 2, 3));
});

it('should be able to pass parameters in any way', () => {
    function sum(a: number, b: number, c: number): number {
        return a + b + c;
    }

    /* eslint-disable */
    expect(curry(sum)(1, 2, 3)).toBe(sum(1, 2, 3));
    expect(curry(sum)(1)(2, 3)).toBe(sum(1, 2, 3));
    expect(curry(sum)()()(1, 2, 3)).toBe(sum(1, 2, 3));
});
