// __mocks__/request.js
const users = {
    4: {name: 'Mark'},
    5: {name: 'Paul'},
  };
  
  exports.request = (url) => {
    return new Promise((resolve, reject) => {
      const userID = parseInt(url.substr('https://jsonplaceholder.typicode.com/users/'.length), 10);
      process.nextTick(() =>
        users[userID]
          ? resolve(users[userID])
          : reject({
              error: 'User with ' + userID + ' not found.',
            }),
      );
    });
  }