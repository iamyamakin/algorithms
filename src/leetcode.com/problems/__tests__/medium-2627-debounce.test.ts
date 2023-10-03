import { debounce } from '../medium-2627-debounce.ts';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it("shouldn't immediately emit the first call", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn(1);
    expect(mockFn).not.toHaveBeenCalled();
});

it('should cancel previous call', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 50);

    debouncedFn(1);
    expect(mockFn).not.toHaveBeenCalled();
    jest.advanceTimersByTime(25);
    debouncedFn(2);
    debouncedFn(3);
    jest.advanceTimersByTime(25);
    expect(mockFn).not.toHaveBeenCalled();
    jest.advanceTimersByTime(25);
    expect(mockFn).toHaveBeenCalledWith(3);
    expect(mockFn).toHaveBeenCalledTimes(1);
});
