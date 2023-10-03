import { isValid } from '../easy-20-valid-parentheses.ts';

it('should return false', () => {
    expect(isValid('')).toBeFalse();
    expect(isValid('(')).toBeFalse();
    expect(isValid('((')).toBeFalse();
    expect(isValid('(]')).toBeFalse();
});

it('should return true', () => {
    expect(isValid('()')).toBeTrue();
    expect(isValid('()[]{}')).toBeTrue();
    expect(isValid('([{()[]{}}])')).toBeTrue();
});
