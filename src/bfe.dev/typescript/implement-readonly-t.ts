/* https://bigfrontend.dev/typescript/implement-readonly-t */

export type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};
