import '../easy-2804-array-prototype-foreach.ts';

afterEach(() => {
    jest.restoreAllMocks();
});

it('should execute a callback on each element', () => {
    const mockFn = jest.fn((x, i) => `${i}:${x}`);

    const items = ['a', 'b', 'c'];

    items.forEach(mockFn);

    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn.mock.results[0]?.value).toEqual('0:a');
    expect(mockFn.mock.results[1]?.value).toEqual('1:b');
    expect(mockFn.mock.results[2]?.value).toEqual('2:c');
});
