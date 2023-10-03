import { delayAll } from '../easy-2821-delay-the-resolution-of-each-promise.ts';

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should resolves after a delay', async () => {
    expect.assertions(7);

    const mockFns = [jest.fn(() => 'one'), jest.fn(() => 'two')];
    const fns = mockFns.map(fn => () => Promise.resolve().then(fn));
    const delay = 10101;
    const promise = Promise.all(delayAll(fns, delay).map(fn => fn()));

    expect(mockFns[0]).not.toHaveBeenCalled();
    expect(mockFns[1]).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(delay);
    expect(mockFns[0]).toHaveBeenCalled();
    expect(mockFns[1]).toHaveBeenCalled();
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    expect(promise).resolves.toStrictEqual(['one', 'two']);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), delay);
});
