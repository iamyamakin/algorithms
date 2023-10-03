import { generateParenthesis } from '../medium-22-generate-parentheses.ts';

it('should return an empty array', () => {
    expect(generateParenthesis(0)).toStrictEqual([]);
    expect(generateParenthesis(-1)).toStrictEqual([]);
});

it('should return an array of parenthesis', () => {
    expect(generateParenthesis(1)).toStrictEqual(['()']);
    expect(generateParenthesis(2)).toStrictEqual(['(())', '()()']);
    expect(generateParenthesis(3)).toStrictEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});
