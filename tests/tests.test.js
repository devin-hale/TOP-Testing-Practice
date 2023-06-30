import { capitalize } from "../src/tests";


test('Capitalizes first letter', () => {
    expect(capitalize('bobby')).toBe('Bobby');
})