import { diagonalSort } from '../medium-1329-sort-the-matrix-diagonally.ts';

it('should return an empty array when the given array or array of arrays is empty', () => {
    expect(diagonalSort([])).toStrictEqual([]);
    expect(diagonalSort([[]])).toStrictEqual([]);
});

it('should return sorted diagonals', () => {
    expect(
        diagonalSort([
            [7, 6, 1],
            [8, 5, 2],
            [9, 4, 3],
        ]),
    ).toStrictEqual([
        [3, 2, 1],
        [4, 5, 6],
        [9, 8, 7],
    ]);

    expect(
        diagonalSort([
            [12, 7, 6, 1],
            [11, 8, 5, 2],
            [10, 9, 4, 3],
        ]),
    ).toStrictEqual([
        [4, 3, 2, 1],
        [9, 8, 5, 6],
        [10, 11, 12, 7],
    ]);
});
