const anagram = require('./anagram');

test('Does the function exist', () => {
    expect(anagram).toBeDefined()
});

test('Check if it is function', () => {
    expect(typeof anagram).toEqual('function')
})

test('cinema is iceman',() => {
    expect(anagram('cinema','iceman')).toBeTruthy();
});

test('Ram is rmar##',() => {
    expect(anagram('Ram','mar##')).toBeTruthy()
});

test('Ram is not ramm',() => {
    expect(anagram('Ram','ramm')).toBeFalsy()
})