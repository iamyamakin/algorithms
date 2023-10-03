/* https://bigfrontend.dev/typescript/ConstructorParameters */

/* eslint-disable @typescript-eslint/no-explicit-any */
export type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (
    ...args: infer U
) => any
    ? U
    : never;
