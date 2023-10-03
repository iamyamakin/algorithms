import { ArrayWrapper } from '../easy-2695-array-wrapper.ts';

it('should return a sum of all elements when instances are added together', () => {
    const obj1 = new ArrayWrapper([1, 2]);
    const obj2 = new ArrayWrapper([3, 4]);

    expect(obj1.valueOf() + obj2.valueOf()).toBe(10);
});

it('should return 0 when empty instances are added together', () => {
    const obj1 = new ArrayWrapper([]);
    const obj2 = new ArrayWrapper([]);

    expect(obj1.valueOf() + obj2.valueOf()).toBe(0);
});

it('should return a comma separated string surrounded by brackets when the String function is called ', () => {
    const obj = new ArrayWrapper([1, 2, 3, 4, 5]);

    expect(String(obj)).toBe('[1,2,3,4,5]');
});

it('should return a empty string surrounded by brackets when the String function is called for the empty instance', () => {
    const obj = new ArrayWrapper([]);

    expect(String(obj)).toBe('[]');
});
