import { addTwoPromises } from '../easy-2723-add-two-promises.ts';

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
});

it('should return a new promise which resolve the sum of two numbers from given promises', () => {
    expect.assertions(2);

    const one = new Promise<number>(resolve => setTimeout(() => resolve(10), 10101));
    const two = new Promise<number>(resolve => setTimeout(() => resolve(5), 101));
    const promise = addTwoPromises(one, two);

    jest.runAllTimers();
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    expect(promise).resolves.toBe(15);
    expect(setTimeout).toHaveBeenCalledTimes(2);
});
