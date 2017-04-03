// const assert = require('assert');

const MODEL = rootRequire('models').User;
const DAO = require('./DAO'); // return constructor function.

function UserDAO() {
  this.Model = MODEL;
  // this.clientId = clientId;
}


// Prototypal Inheritance
UserDAO.prototype = new DAO();
module.exports = function () {
  // assert.ok(clientId, 'clientId is empty');
  return new UserDAO();
};