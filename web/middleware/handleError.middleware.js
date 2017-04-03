const {
  ValidationError,
  ApplicationError,
  AuthorizationError,
  PageNotFound,
} = rootRequire('commons').ERROR;

function errorHelper(err) {
  const obj = {
    status: 0,
    error: {
      name: err.name,
      message: err.message,
      errorResponse: {},
    },
  };

  if (err instanceof ValidationError) {
    obj.status = 400; // Bad Request
  } else if (err instanceof AuthorizationError) {
    obj.status = 401; // Unauthorised
  } else if (err instanceof ApplicationError) {
    obj.status = 500; // Internal Server Error
  } else if (err instanceof PageNotFound) {
    obj.status = 404;
  } else {
    obj.status = 500;
  }

  return obj;
}

module.exports = function (app) {
  // Error: 404
  app.use((req, res, next) => {
    next(new PageNotFound('Invalid Endpoint'));
  });

  app.use((err, req, res, next) => {
    const { error, status } = errorHelper(err);
    res.status(status || 500).json({
      success: false,
      error,
    });
  });
};