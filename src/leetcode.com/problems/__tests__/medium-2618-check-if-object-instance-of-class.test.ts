import { checkIfInstanceOf } from '../medium-2618-check-if-object-instance-of-class.ts';

it('should return true when the given value is an instance of the given class', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBeTrue();
});

it('should return true when the given value is an instance of the given superclass', () => {
    class Animal {}
    class Dog extends Animal {}

    expect(checkIfInstanceOf(new Dog(), Animal)).toBeTrue();
});

it("should return true when the given primitive value has access to class's methods", () => {
    expect(checkIfInstanceOf(10, Number)).toBeTrue();
});

it('should return false when the given value and the given class match', () => {
    expect(checkIfInstanceOf(Date, Date)).toBeFalse();
});
