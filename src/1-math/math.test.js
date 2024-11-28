const { multiplicar } = require('./math');

test ('multiplicar dois números positivos', () => {
    expect(multiplicar(2,3)).toBe(6);
});

test ('multiplicador por zero', () => {
    expect(multiplicar(5, 0)).toBe(0);
});