import '../medium-2631-group-by.ts';

it('should return a grouped version of the array', () => {
    expect([{ id: '1' }, { id: '1' }, { id: '2' }].groupBy(item => item.id)).toStrictEqual({
        '1': [{ id: '1' }, { id: '1' }],
        '2': [{ id: '2' }],
    });
    expect(
        [
            [1, 2, 3],
            [1, 3, 5],
            [1, 5, 9],
        ].groupBy(list => String(list[0])),
    ).toStrictEqual({
        '1': [
            [1, 2, 3],
            [1, 3, 5],
            [1, 5, 9],
        ],
    });
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(n => String(n > 5))).toStrictEqual({
        true: [6, 7, 8, 9, 10],
        false: [1, 2, 3, 4, 5],
    });
});
