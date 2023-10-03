import { jsonStringify } from '../medium-2633-convert-object-to-json-string.ts';

it('should return a string with JSON primitives: string, number, boolean, null', () => {
    expect(jsonStringify({ a: 'str', b: -0, c: false, d: null })).toBe('{"a":"str","b":0,"c":false,"d":null}');
    expect(jsonStringify('str')).toBe('"str"');
    expect(jsonStringify(-0)).toBe('0');
    expect(jsonStringify(false)).toBe('false');
    expect(jsonStringify(true)).toBe('true');
    expect(jsonStringify(null)).toBe('null');
});

it('should return a string with the order of keys as the order returned by Object.keys', () => {
    expect(jsonStringify({ z: 1, a: 2 })).toBe('{"z":1,"a":2}');
});

it('should return a string with the nested array and the nested object', () => {
    expect(jsonStringify({ a: { b: [{ c: 3 }, [1, 2]] } })).toBe('{"a":{"b":[{"c":3},[1,2]]}}');
});

it('should handling non-serializable values: undefined, float number, function, sparse array', () => {
    expect(jsonStringify(undefined)).toBe('undefined');
    expect(jsonStringify(0.33)).toBe('0.33');
    expect(jsonStringify(() => 'fn')).toBe("() => 'fn'");
    expect(jsonStringify(new Array(3))).toBe('[]');
});
