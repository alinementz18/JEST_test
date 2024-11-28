
const isPalindrome = require('./palindromo');

describe('Função isPalindrome', () => {
    test('reconhece palíndromos simples', () => {
        expect(isPalindrome('ana')).toBe(true);
        expect(isPalindrome('arara')).toBe(true);
    });

    test('reconhece palíndromos com letras maiúsculas e minúsculas', () => {
        expect(isPalindrome('Ana')).toBe(true);
        expect(isPalindrome('ArAra')).toBe(true);
    });

    test('reconhece palíndromos com espaços e pontuação', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
        expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    test('previne strings vazias, nulas ou inválidas', () => {
        expect(isPalindrome(null)).toBe(false);
        expect(isPalindrome('')).toBe(false);
        expect(isPalindrome(12321)).toBe(false); // Não é string
    });

    test('informa quando não é um palíndromo', () => {
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('world')).toBe(false);
    });
});

