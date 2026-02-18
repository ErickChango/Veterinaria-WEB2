const r = new RegExp('^(?=.[A-Za-z])(?=.\\d)[A-Za-z\\d]{8,}$');
console.log('Testing regex: ^(?=.[A-Za-z])(?=.\\d)[A-Za-z\\d]{8,}$');
console.log('a1abcdef:', r.test('a1abcdef'));
console.log('1aabcdef:', r.test('1aabcdef'));
console.log('valid123:', r.test('valid123'));
console.log('A1bcdefg:', r.test('A1bcdefg'));
