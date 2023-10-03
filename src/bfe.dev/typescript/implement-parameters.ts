/* https://bigfrontend.dev/typescript/Parameters */

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type MyParameters<T extends (...args: any) => any> = T extends (...args: infer U) => unknown ? U : never;
