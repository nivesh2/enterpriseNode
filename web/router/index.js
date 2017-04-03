const router = require('express').Router();

const { requestLogger, authorization } = rootRequire('./web').middleware;

/* mount all the components here
 * - order matters
 */
requestLogger(router);
require('./components/user')(router);
require('./components/tweet')(router);

module.exports = function (app) {
  // base route '/api/v1' for all components
  app.use('/api/v1', router);
};