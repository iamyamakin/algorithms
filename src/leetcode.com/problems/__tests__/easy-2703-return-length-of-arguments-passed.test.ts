import { argumentsLength } from '../easy-2703-return-length-of-arguments-passed.ts';

it('should return a count of arguments passed to the function', () => {
    expect(argumentsLength([], {}, false, undefined, null, 0, -0, 0n, NaN, '', '0')).toBe(11);
});

it('should return 0 when the call function is empty', () => {
    expect(argumentsLength()).toBe(0);
});
