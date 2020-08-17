// user.js
//import request from './request';
const {request} = require('./request');

exports.getUserName = (userID) => {
    return request('https://jsonplaceholder.typicode.com/users/' + userID).then(user => user.name);
}
