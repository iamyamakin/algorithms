import { throttle } from '../medium-2676-throttle.ts';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should immediately emit the first call', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
});

it('should call a fn with the latest arguments provided during the delay period', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn(1);
    jest.advanceTimersByTime(50);
    throttledFn(2);
    expect(mockFn).toHaveBeenCalledWith(1);
    jest.advanceTimersByTime(25);
    throttledFn(3);
    expect(mockFn).toHaveBeenCalledWith(1);
    jest.advanceTimersByTime(50);
    expect(mockFn).toHaveBeenCalledWith(3);
    throttledFn(4);
    jest.advanceTimersByTime(175);
    expect(mockFn).toHaveBeenCalledWith(4);
    throttledFn(5);
    expect(mockFn).toHaveBeenCalledWith(5);
    expect(mockFn).toHaveBeenCalledTimes(4);
});
