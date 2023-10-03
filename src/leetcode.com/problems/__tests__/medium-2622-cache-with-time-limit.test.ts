import { TimeLimitedCache } from '../medium-2622-cache-with-time-limit.ts';

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should allow getting and setting key-value pairs', () => {
    const cache = new TimeLimitedCache();

    cache.set(1, 42, 10101);
    expect(cache.get(1)).toBe(42);
});

it('should return true if the same un-expired key already exist and false otherwise', () => {
    const cache = new TimeLimitedCache();

    expect(cache.set(1, 42, 10101)).toBe(false);
    expect(cache.set(1, 42, 10101)).toBe(true);
    expect(cache.set(2, 50, 10101)).toBe(false);
});

it('should return an associated value if an un-expired key exists and -1 otherwise', () => {
    const cache = new TimeLimitedCache();

    expect(cache.get(1)).toBe(-1);
    cache.set(1, 42, 10101);
    jest.advanceTimersByTime(10100);
    expect(cache.get(1)).toBe(42);
    cache.set(1, 50, 100);
    jest.advanceTimersByTime(1);
    expect(cache.get(1)).toBe(50);
    jest.advanceTimersByTime(100);
    expect(cache.get(1)).toBe(-1);
});

it('should return a count of un-expired keys', () => {
    const cache = new TimeLimitedCache();

    expect(cache.count()).toBe(0);
    cache.set(1, 42, 10101);
    cache.set(2, 50, 101);
    expect(cache.count()).toBe(2);
    jest.advanceTimersByTime(100);
    expect(cache.count()).toBe(2);
    jest.advanceTimersByTime(1);
    expect(cache.count()).toBe(1);
    jest.advanceTimersByTime(9999);
    expect(cache.count()).toBe(1);
    jest.advanceTimersByTime(1);
    expect(cache.count()).toBe(0);
});
