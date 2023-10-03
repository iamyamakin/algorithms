import { createCounter } from '../easy-2620-counter.ts';

it('should return min value when given value goes beyond the min boundary value', () => {
    const counter = createCounter(-11, { min: -10, max: 10, maxCalls: 10 });

    expect(counter()).toBe(-10);
});

it('should return max value when given value goes beyond the max boundary value', () => {
    const counter = createCounter(11, { min: -10, max: 10, maxCalls: 10 });

    expect(counter()).toBe(10);
});

it('should return the same value as the given value on every call when the maxCalls is 0', () => {
    const counter = createCounter(5, { min: -10, max: 10, maxCalls: 0 });

    expect(counter()).toBe(5);
    expect(counter()).toBe(5);
});

it('should return 1 more than the previous value every subsequent time it is called', () => {
    const counter = createCounter(-2);

    expect(counter()).toBe(-2);
    expect(counter()).toBe(-1);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
});
