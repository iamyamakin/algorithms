/* https://bigfrontend.dev/typescript/implement-Pick-T-K */

export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
