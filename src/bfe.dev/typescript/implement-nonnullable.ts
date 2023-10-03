/* https://bigfrontend.dev/typescript/NonNullable */

export type MyNonNullable<T> = T extends null | undefined ? never : T;
