import { capitalizeStr, reverseStr, calculator, caesarCipher, analyzeArray } from './features.js';

test('Capitalize', () => {
  expect(capitalizeStr("apple")).toBe("Apple");
  expect(capitalizeStr("mango")).toBe("Mango");
  expect(capitalizeStr("baNaNA")).toBe("BaNaNA");
  expect(capitalizeStr("grapes")).toBe("Grapes");
});

test('Reverse', () => {
  expect(reverseStr("apple")).toBe("elppa");
  expect(reverseStr("mango")).toBe("ognam");
  expect(reverseStr("BaNaNA")).toBe("ANaNaB");
  expect(reverseStr("mANGO")).toBe("OGNAm");
});

test('Calculator', () => {
  expect(calculator.add(3, 6)).toBe(9);
  expect(calculator.subtract(10, 5)).toBe(5);
  expect(calculator.multiply(6, 7)).toBe(42);
  expect(calculator.divide(16, 4)).toBe(4);
});

test('Caesar Cipher', () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("pqr", 1)).toBe("qrs");
  expect(caesarCipher("lmn", 1)).toBe("mno");
  expect(caesarCipher("abc", 2)).toBe("cde");
  expect(caesarCipher("pqr", 2)).toBe("rst");
  expect(caesarCipher("xyz", 1)).toBe("yza");
  expect(caesarCipher("xyz", 2)).toBe("zab");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("ABC", 1)).toBe("BCD");
  expect(caesarCipher("PQR", 1)).toBe("QRS");
  expect(caesarCipher("LMN", 1)).toBe("MNO");
  expect(caesarCipher("ABC", 2)).toBe("CDE");
  expect(caesarCipher("PQR", 2)).toBe("RST");
  expect(caesarCipher("XYZ", 1)).toBe("YZA");
  expect(caesarCipher("XYZ", 2)).toBe("ZAB");
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
  expect(caesarCipher("aBcPQr", 1)).toBe("bCdQRs");
  expect(caesarCipher("aBCpqR", 2)).toBe("cDErsT");
  expect(caesarCipher("YxZzXy", 1)).toBe("ZyAaYz");
  expect(caesarCipher("YxZzXy", 2)).toBe("AzBbZa");
  expect(caesarCipher("YxZzXy", 3)).toBe("BaCcAb");
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze Array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    'average': 3,
    'min': 1,
    'max': 5,
    'length': 5
  });
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});