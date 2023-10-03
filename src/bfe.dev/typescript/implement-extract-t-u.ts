/* https://bigfrontend.dev/typescript/implement-extract-t-u */

export type MyExtract<T, K> = T extends K ? (K extends T ? K : never) : never;
