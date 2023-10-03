import '../easy-2796-repeat-string.ts';

it('should return a repeated string once', () => {
    expect('abc'.replicate(1)).toBe('abc');
});

it('should return a repeated string two times', () => {
    expect('abc'.replicate(2)).toBe('abcabc');
});

it('should return a repeated string three times', () => {
    expect('abc'.replicate(3)).toBe('abcabcabc');
});

it('should return an empty string', () => {
    expect('abc'.replicate(-1)).toBe('');
    expect('abc'.replicate(0)).toBe('');
});
