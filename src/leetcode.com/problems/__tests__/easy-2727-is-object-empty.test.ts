import { isEmpty } from '../easy-2727-is-object-empty.ts';

it('should return true for the empty object', () => {
    expect(isEmpty({})).toBeTrue();
    /* eslint-disable-next-line */
    expect(isEmpty(Object.create(null))).toBeTrue();
});

it('should return false for the non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBeFalse();
});

it('should return true for the empty array', () => {
    expect(isEmpty([])).toBeTrue();
});

it('should return false for the non-empty array', () => {
    expect(isEmpty([false])).toBeFalse();
    expect(isEmpty([undefined])).toBeFalse();
    expect(isEmpty([null])).toBeFalse();
    expect(isEmpty([0])).toBeFalse();
    expect(isEmpty([-0])).toBeFalse();
    expect(isEmpty([0n])).toBeFalse();
    expect(isEmpty([NaN])).toBeFalse();
    expect(isEmpty([''])).toBeFalse();
});
