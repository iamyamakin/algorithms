import { cancellable } from '../easy-2725-interval-cancellation.ts';

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should be cancelable', () => {
    let pass = true;
    let once = true;
    const fn = () => {
        if (once) {
            once = false;

            return;
        }
        pass = false;
    };
    const cancelTimer = cancellable(fn, [], 10101);

    cancelTimer(0);

    expect(pass).toBeTrue();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10101);
});

it('should be work', () => {
    let pass = true;
    const fn = () => {
        pass = false;
    };

    cancellable(fn, [null], 1001);
    jest.runOnlyPendingTimers();

    expect(pass).toBeFalse();
    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1001, null);
});
