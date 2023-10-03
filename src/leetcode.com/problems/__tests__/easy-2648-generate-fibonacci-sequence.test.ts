import { fibGenerator } from '../easy-2648-generate-fibonacci-sequence.ts';

it('should return the fibonacci sequence', () => {
    const gen = fibGenerator();

    expect(gen.next().value).toBe(0);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(3);
    expect(gen.next().value).toBe(5);
    expect(gen.next().value).toBe(8);
    expect(gen.next().value).toBe(13);
    expect(gen.next().value).toBe(21);
});
