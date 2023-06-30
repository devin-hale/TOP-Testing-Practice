import { capitalize, reverseString, calculator } from "../src/tests";


test('Capitalizes first letter', () => {
    expect(capitalize('bobby')).toBe('Bobby');
});

test('Reverses a string', () => {
    expect(reverseString('Hank')).toBe('knaH');
})

test('Calculator Oject', () => {
    expect(calculator.add(10,10)).toBe(20);
    expect(calculator.subtract(10,10)).toBe(0);
    expect(calculator.divide(10,10)).toBe(1);
    expect(calculator.multiply(10,10)).toBe(100);
})