import { cancellable } from '../easy-2715-timeout-cancellation.ts';

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should be cancelable', () => {
    let pass = true;
    const fn = () => {
        pass = false;
    };
    const cancelTimer = cancellable(fn, [], 10101);

    cancelTimer(0);

    expect(pass).toBeTrue();
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);
});

it('should be work', () => {
    let pass = true;
    const fn = () => {
        pass = false;
    };

    cancellable(fn, [null], 10101);
    jest.runAllTimers();

    expect(pass).toBeFalse();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10101, null);
});
