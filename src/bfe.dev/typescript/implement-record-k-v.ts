/* https://bigfrontend.dev/typescript/implement-record-k-v */

export type MyRecord<T extends number | string | symbol, V> = {
    [K in T]: V;
};
