import { EventEmitter } from '../medium-2694-event-emitter.ts';

it('should return an empty array if there are no callbacks subscribed to the given event', () => {
    const emitter = new EventEmitter();

    emitter.subscribe('event', () => 'callback');
    expect(emitter.emit('another-event')).toStrictEqual([]);
});

it('should execute callbaks in the order in which they were registered', () => {
    const emitter = new EventEmitter();

    emitter.subscribe('event', () => 1);
    emitter.subscribe('event', () => 3);
    emitter.subscribe('event', () => 5);
    expect(emitter.emit('event')).toStrictEqual([1, 3, 5]);
});

it('the emit method should be able to accept an optional array of arguments', () => {
    const emitter = new EventEmitter();

    emitter.subscribe('event', () => 1);
    emitter.subscribe('event', (x: number, y: number): number => x + y);
    expect(emitter.emit('event', [1, 9])).toStrictEqual([1, 10]);
});

it('the subscribe method should return an unsubscribe method', () => {
    const emitter = new EventEmitter();
    const a = emitter.subscribe('event', () => 'a');
    const b = emitter.subscribe('event', () => 'b');

    expect(emitter.emit('event')).toStrictEqual(['a', 'b']);
    expect(a.unsubscribe()).toBeUndefined();
    expect(emitter.emit('event')).toStrictEqual(['b']);
    expect(b.unsubscribe()).toBeUndefined();
    expect(emitter.emit('event')).toStrictEqual([]);
});
