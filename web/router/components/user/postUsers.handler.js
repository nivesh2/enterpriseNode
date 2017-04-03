const co = require('co');

const { userDAO } = rootRequire('commons').DAO;

function getUserObj(body) {
  return {
    name: body.name,
    email: body.email,
    password: body.password,
  };
}

function* logic({ body }) {
  try {
    const _userDAO = userDAO();
    const userObj = getUserObj(body);

    return yield _userDAO.save(userObj);
  } catch (e) {
    logger.error(e);
    throw e;
  }
}

function handler(req, res, next) {
  co(logic(req))
    .then((data) => {
      res.json({
        success: true,
        data,
      });
    })
    .catch(err => next(err));
}
module.exports = handler;