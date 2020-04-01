const functions = require('./functions');

/**
 * beforeEach will run before each test condition and afterEach will run after each test condition
 */
// beforeEach(() => initializeDatabase());
// afterEach(() => closeDatabase());
/**
 * As the name suggest the function "beforeAll" will be called before each test condition.
 */
// beforeAll(() => initializeDatabase());
// afterAll(() => closeDatabase());


// const initializeDatabase = () => console.log('Database initialized....')
// const closeDatabase = () => console.log('Database closed....')

/**
 * describe is used to run test on some selected test conditions.
 */
const nameCheck = () => console.log('Checking Names......')
describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff')
    })
    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen')
    })
})


test('2 + 2 equals 4', () => {
    expect(functions.add(2,2)).toBe(4);
    expect(functions.add(2,2)).toBeGreaterThan(3);
    expect(functions.add(2,2)).toBeGreaterThanOrEqual(3.5);
    expect(functions.add(2,2)).toBeLessThan(5);
    expect(functions.add(2,2)).toBeLessThanOrEqual(4.5);
    expect(functions.add(2,2)).toEqual(4);
})

test('2 + 2 not equals 5', () => {
    expect(functions.add(2,2)).not.toBe(5)
});

test('Check if null', () => {
    expect(functions.isNull()).toBeNull()
});

test('Check the vlaue', () => {
    expect(functions.checkValue(2)).toBeTruthy();
});

test('Create User', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Prashant',
        lastName: 'Kumar'
    })
});

test('Regex match', () => {
    expect('teaM').toMatch(/M/i);
});

test('Array related contain',()=>{
    let userArray = ['Ram','Shyam','admin'];
    expect(userArray).toContain('admin')
});
/**
 * When you are dealing with async data then u need to have both assertions and return statement.
 */
test('Async req',() => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

//Async Await
test('Async Await', async () => {
    expect.assertions(1);
    let data = await functions.fetchUser();
    expect(data.name).toMatch('Leanne Graham')
})