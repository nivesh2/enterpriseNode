const getUsers = require('./getUsers.handler');
const postUsers = require('./postUsers.handler');

/**
 * Mounts component specific routes,
 * along with there respective route handlers
 * @param {object} router
 */
module.exports = (router) => {
  router.get('/user', getUsers);
  router.post('/user', postUsers);
};