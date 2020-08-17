// __tests__/user-test.js
jest.mock('../request');

//import * as user from '../user';
const {getUserName} = require('../user');

// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return getUserName(4).then(data => expect(data).toEqual('Mark'));
});

it('works with resolves', () => {
    expect.assertions(1);
    return expect(getUserName(5)).resolves.toEqual('Paul');
});

// Testing for async errors using Promise.catch. 
it('tests error with promises', () => {
    expect.assertions(1);
    return getUserName(2).catch(e =>
        expect(e).toEqual({
            error: 'User with 2 not found.',
        }),
    );
});

// Or using async/await.
it('tests error with async/await', async () => {
    expect.assertions(1);
    try {
        await getUserName(1);
    } catch (e) {
        expect(e).toEqual({
            error: 'User with 1 not found.',
        });
    }
});

// Testing for async errors using `.rejects`.
it('tests error with rejects', () => {
    expect.assertions(1);
    return expect(getUserName(3)).rejects.toEqual({
        error: 'User with 3 not found.',
    });
});

// Or using async/await with `.rejects`.
it('tests error with async/await and rejects', async () => {
    expect.assertions(1);
    await expect(getUserName(3)).rejects.toEqual({
        error: 'User with 3 not found.',
    });
});