import { once } from '../easy-2666-allow-one-function-call.ts';

afterEach(() => {
    jest.restoreAllMocks();
});

it('should call once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
});

it('should return result from the function in the first time', () => {
    const onceFn = once(() => 'once');

    expect(onceFn()).toBe('once');
});

it('should return undefined subsequent time it is called', () => {
    const onceFn = once(() => 'once');

    onceFn();

    expect(onceFn()).toBeUndefined();
    expect(onceFn()).toBeUndefined();
});
