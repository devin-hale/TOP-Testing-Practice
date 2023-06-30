import { capitalize, reverseString } from "../src/tests";


test('Capitalizes first letter', () => {
    expect(capitalize('bobby')).toBe('Bobby');
});

test('Reverses a string', () => {
    expect(reverseString('Hank')).toBe('knaH');
})