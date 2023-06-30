import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "../src/tests";


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

test('Caesar Cipher', () => {
    expect(caesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6});
})