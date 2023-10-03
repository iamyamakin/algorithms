import { invertObject } from '../easy-2822-inversion-of-object.ts';

it('should return an object where values from the incoming object become keys and keys become values', () => {
    expect(invertObject({ a: '1', b: '2', c: '3' })).toStrictEqual({ 1: 'a', 2: 'b', 3: 'c' });
});

it('should handle duplicate values from the incoming object', () => {
    expect(invertObject({ a: '1', b: '1', c: '1' })).toStrictEqual({ 1: ['a', 'b', 'c'] });
});

it('should return an object when the incoming object is array', () => {
    expect(invertObject(['1', '2', '3'])).toStrictEqual({ 1: '0', 2: '1', 3: '2' });
});

it('should return an empty object when the incoming object is empty', () => {
    expect(invertObject({})).toStrictEqual({});
});
