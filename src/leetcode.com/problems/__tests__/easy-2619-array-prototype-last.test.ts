import '../easy-2619-array-prototype-last.ts';

it('should return -1 when the array is empty', () => {
    expect([].last()).toBe(-1);
});

it('should return the last element from an array with one element', () => {
    expect([{}].last()).toBeEmptyObject();
});

it('should return the last element from an array with two elements', () => {
    expect(['first', null].last()).toBeNull();
});
