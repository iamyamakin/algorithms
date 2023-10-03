import { createHelloWorld } from '../easy-2667-create-hello-world-function.ts';

it("should return 'Hello world' when function called without arguments", () => {
    expect(createHelloWorld()()).toBe('Hello World');
});

it("should return 'Hello world' when function called with one argument", () => {
    expect(createHelloWorld()('test')).toBe('Hello World');
});

it("should return 'Hello world' when function called with two arguments", () => {
    expect(createHelloWorld()(null, 'test')).toBe('Hello World');
});
