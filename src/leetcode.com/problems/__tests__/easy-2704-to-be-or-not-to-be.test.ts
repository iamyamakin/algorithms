import * as helper from '../easy-2704-to-be-or-not-to-be.ts';

it('should return true if the two values are equal each other', () => {
    const value: unknown[] = [];

    expect(helper.expect(value).toBe(value)).toBeTrue();
});

it('should return true if the two values are not equal each other', () => {
    expect(helper.expect([]).notToBe([])).toBeTrue();
});

it('should be the same behavior as for the === operator: various coercions should not work', () => {
    expect(helper.expect('').notToBe(false)).toBeTrue();
});

it('should be the same behavior as for the === operator: NaN is not equal to NaN', () => {
    expect(helper.expect(NaN).notToBe(NaN)).toBeTrue();
});

it('should be the same behavior as for the === operator: -0 is equal to +0', () => {
    expect(helper.expect(-0).toBe(+0)).toBeTrue();
});
