import '../easy-2785-next-day.ts';

it('should return the next day after the end of month', () => {
    const date = new Date('2020-08-31');

    expect(date.nextDay()).toBe('2020-09-01');
});

it('should return the next day after the end of year', () => {
    const date = new Date('2020-12-31');

    expect(date.nextDay()).toBe('2021-01-01');
});

it('should return the next day after the end of February in a leap year', () => {
    const leapYear = new Date('2020-02-28');

    expect(leapYear.nextDay()).toBe('2020-02-29');

    const notLeapYear = new Date('2021-02-28');

    expect(notLeapYear.nextDay()).toBe('2021-03-01');
});
