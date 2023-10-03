import { createCounter } from '../easy-2665-counter-ii.ts';

it('should return an incremented value for each call increment', () => {
    const n = createCounter(0);

    expect(n.increment()).toBe(1);
    expect(n.increment()).toBe(2);
});

it('should return a decremented value for each call decrement', () => {
    const n = createCounter(0);

    expect(n.decrement()).toBe(-1);
    expect(n.decrement()).toBe(-2);
});

it('should return a initial value for each call reset', () => {
    const n = createCounter(0);

    n.increment();
    n.increment();

    expect(n.reset()).toBe(0);

    n.decrement();
    n.decrement();

    expect(n.reset()).toBe(0);
});
