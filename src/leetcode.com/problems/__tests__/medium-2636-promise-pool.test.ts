import { promisePool } from '../medium-2636-promise-pool.ts';

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should execute one function at a time', async () => {
    expect.assertions(10);

    const mockFns: { fn: () => void; delay: number }[] = [
        { fn: jest.fn(), delay: 300 },
        { fn: jest.fn(), delay: 400 },
        { fn: jest.fn(), delay: 200 },
    ];
    const fns = mockFns.map(obj => () => new Promise<void>(resolve => setTimeout(resolve, obj.delay)).then(obj.fn));
    const promise = promisePool(fns, 1);

    expect(mockFns[0]?.fn).not.toHaveBeenCalled();
    expect(mockFns[1]?.fn).not.toHaveBeenCalled();
    expect(mockFns[2]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(300);
    expect(mockFns[0]?.fn).toHaveBeenCalled();
    expect(mockFns[1]?.fn).not.toHaveBeenCalled();
    expect(mockFns[2]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(400);
    expect(mockFns[1]?.fn).toHaveBeenCalled();
    expect(mockFns[2]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(200);
    expect(mockFns[2]?.fn).toHaveBeenCalled();
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    expect(promise).resolves.toBeArray();
});

it('should executes two functions at a time', async () => {
    expect.assertions(10);

    const mockFns: { fn: () => void; delay: number }[] = [
        { fn: jest.fn(), delay: 300 },
        { fn: jest.fn(), delay: 400 },
        { fn: jest.fn(), delay: 200 },
    ];
    const fns = mockFns.map(obj => () => new Promise<void>(resolve => setTimeout(resolve, obj.delay)).then(obj.fn));
    const promise = promisePool(fns, 2);

    expect(mockFns[0]?.fn).not.toHaveBeenCalled();
    expect(mockFns[1]?.fn).not.toHaveBeenCalled();
    expect(mockFns[2]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(300);
    expect(mockFns[0]?.fn).toHaveBeenCalled();
    expect(mockFns[1]?.fn).not.toHaveBeenCalled();
    expect(mockFns[2]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(100);
    expect(mockFns[1]?.fn).toHaveBeenCalled();
    expect(mockFns[2]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(100);
    expect(mockFns[2]?.fn).toHaveBeenCalled();
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    expect(promise).resolves.toBeArray();
});

it('should executes all functions at a time', async () => {
    expect.assertions(10);

    const mockFns: { fn: () => void; delay: number }[] = [
        { fn: jest.fn(), delay: 300 },
        { fn: jest.fn(), delay: 400 },
        { fn: jest.fn(), delay: 200 },
    ];
    const fns = mockFns.map(obj => () => new Promise<void>(resolve => setTimeout(resolve, obj.delay)).then(obj.fn));
    const promise = promisePool(fns, mockFns.length);

    expect(mockFns[0]?.fn).not.toHaveBeenCalled();
    expect(mockFns[1]?.fn).not.toHaveBeenCalled();
    expect(mockFns[2]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(200);
    expect(mockFns[0]?.fn).not.toHaveBeenCalled();
    expect(mockFns[1]?.fn).not.toHaveBeenCalled();
    expect(mockFns[2]?.fn).toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(100);
    expect(mockFns[0]?.fn).toHaveBeenCalled();
    expect(mockFns[1]?.fn).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(100);
    expect(mockFns[1]?.fn).toHaveBeenCalled();
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    expect(promise).resolves.toBeArray();
});
