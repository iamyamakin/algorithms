import { sleep } from '../easy-2621-sleep.ts';

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should sleep for 10101ms time', async () => {
    expect.assertions(5);

    const mockFn = jest.fn();
    const ms = 10101;
    const promise = sleep(ms).then(mockFn);

    expect(mockFn).toHaveBeenCalledTimes(0);
    await jest.advanceTimersByTimeAsync(ms);
    expect(mockFn).toHaveBeenCalledTimes(1);
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    expect(promise).resolves.toBeUndefined();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10101);
});

it('should sleep for 0ms time if the given ms is negative number', async () => {
    expect.assertions(5);

    const mockFn = jest.fn();
    const promise = sleep(-404).then(mockFn);

    expect(mockFn).toHaveBeenCalledTimes(0);
    await jest.advanceTimersByTimeAsync(0);
    expect(mockFn).toHaveBeenCalledTimes(1);
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    expect(promise).resolves.toBeUndefined();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);
});
