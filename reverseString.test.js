const reverseString = require('./reverseString');

test('Check if the function exist', () => {
    expect(reverseString).toBeDefined();
});

test('String Reverse', () => {
    expect(reverseString('hello')).toEqual('olleh');
})

test('String reverse wit upper case', () => {
    expect(reverseString('Hello')).toEqual('olleh');
})