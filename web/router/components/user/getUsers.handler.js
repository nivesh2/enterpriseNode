const co = require('co');

const { userDAO } = rootRequire('commons').DAO;


function* logic({ context }) {
  try {
    const _userDAO = userDAO();
    const query = {};
    return yield _userDAO.find(query);
  } catch (e) {
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