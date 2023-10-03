import { Calculator } from '../easy-2726-calculator-with-method-chaining.ts';

it('should provide a result operation', () => {
    expect(new Calculator(5).getResult()).toBe(5);
});

it('should provide an arithmetic addition operation', () => {
    expect(new Calculator(5).add(15).getResult()).toBe(20);
});

it('should provide an arithmetic subtraction operation', () => {
    expect(new Calculator(5).subtract(5).getResult()).toBe(0);
});

it('should provide an arithmetic multiplication operation', () => {
    expect(new Calculator(5).multiply(5).getResult()).toBe(25);
});

it('should provide an arithmetic division operation', () => {
    expect(new Calculator(8).divide(2).getResult()).toBe(4);
});

it('should be thrown an error when divide by zero', () => {
    expect(() => {
        new Calculator(5).divide(0);
    }).toThrow(new Error('Division by zero is not allowed'));
});

it('should provide an arithmetic exponentiation operation', () => {
    expect(new Calculator(3).power(3).getResult()).toBe(27);
});
