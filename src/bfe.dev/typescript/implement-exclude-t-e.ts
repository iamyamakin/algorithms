/* https://bigfrontend.dev/typescript/implement-exclude-t-e */

export type MyExclude<T, K> = T extends K ? (K extends T ? never : T) : T;
