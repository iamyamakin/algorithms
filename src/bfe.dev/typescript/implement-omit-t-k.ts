/* https://bigfrontend.dev/typescript/implement-omit-t-k */

export type MyOmit<T, K extends string | number | symbol> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
