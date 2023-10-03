/* https://bigfrontend.dev/typescript/implement-required-t */

export type MyRequired<T> = {
    [K in keyof T]-?: T[K];
};
