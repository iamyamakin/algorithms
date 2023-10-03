import '../easy-2774-array-upper-bound.ts';

it('should return -1 if the target number is not found', () => {
    expect([0, 1, 2].upperBound(5)).toBe(-1);
});

it('should return the last index of a given target number', () => {
    expect([-1, 0, -1, 0, -1].upperBound(-1)).toBe(4);
});
