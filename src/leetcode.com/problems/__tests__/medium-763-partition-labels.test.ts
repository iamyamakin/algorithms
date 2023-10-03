import { partitionLabels } from '../medium-763-partition-labels.ts';

it('should return an array of integers representing the size of string parts', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).toStrictEqual([9, 7, 8]);
    expect(partitionLabels('eccbbbbdec')).toStrictEqual([10]);
});
