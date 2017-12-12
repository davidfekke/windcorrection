
const mathd = require('../lib/mathd');

test('Get sign value in degrees for value 33', () => {
    expect(mathd.sin(33)).toBe(0.54464);
});