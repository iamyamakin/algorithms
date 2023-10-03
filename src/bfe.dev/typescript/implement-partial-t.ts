/* https://bigfrontend.dev/typescript/implement-partial-t */

export type MyPartial<T> = {
    [K in keyof T]?: T[K];
};
