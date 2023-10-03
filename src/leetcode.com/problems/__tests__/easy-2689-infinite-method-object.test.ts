import { createInfiniteObject } from '../easy-2690-infinite-method-object.ts';

it('should return method', () => {
    const obj = createInfiniteObject();

    expect(obj?.['!!!']).toBeFunction();
});

it('should return method name', () => {
    const obj = createInfiniteObject();

    expect(obj?.['.-0|^']?.()).toBe('.-0|^');
});
