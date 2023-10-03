import '../medium-2624-snail-traversal.ts';

it("should return empty array when a given array doesn't match with rowsCount * colsCount", () => {
    expect([].snail(0, 0)).toStrictEqual([]);
    expect([1, 2].snail(2, 0)).toStrictEqual([]);
    expect([1, 2].snail(0, 2)).toStrictEqual([]);
    expect([1, 2, 3].snail(1, 2)).toStrictEqual([]);
    expect([1, 2, 3].snail(2, 1)).toStrictEqual([]);
    expect([1, 2, 3].snail(1, 4)).toStrictEqual([]);
    expect([1, 2, 3].snail(4, 1)).toStrictEqual([]);
});

it('should return one row', () => {
    expect([1, 2, 3].snail(1, 3)).toStrictEqual([[1, 2, 3]]);
});

it('should return one column', () => {
    expect([1, 2, 3].snail(3, 1)).toStrictEqual([[1], [2], [3]]);
});

it('should return snail traversal order: top-bottom, next right column, bottom-top', () => {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].snail(5, 4)).toStrictEqual([
        [1, 10, 11, 20],
        [2, 9, 12, 19],
        [3, 8, 13, 18],
        [4, 7, 14, 17],
        [5, 6, 15, 16],
    ]);
});
