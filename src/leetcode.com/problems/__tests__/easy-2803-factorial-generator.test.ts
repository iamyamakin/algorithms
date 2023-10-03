import { factorial } from '../easy-2803-factorial-generator.ts';

it('should return the factorial sequence', () => {
    const gen = factorial(5);

    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(6);
    expect(gen.next().value).toBe(24);
    expect(gen.next().value).toBe(120);
});

it('should return 1 when function called with the n is equal to 0', () => {
    const gen = factorial(0);

    expect(gen.next().value).toBe(1);
});

it('should return error when function called with the n is less than 0', () => {
    const gen = factorial(-1);

    expect(() => {
        gen.next();
    }).toThrow(new Error('N should be a non-negative integer'));
});
