const joi = require('joi');

const envVarsSchema = joi.object({
    DB: joi.string().valid(['Database_Name']).required(),
    DB_URI: joi.string().valid(['DB_URL']).required(),
  }).unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  db: envVars.DB,
  dbURI: envVars.DB_URI,
  connectionString: `mongodb://${envVars.DB_URI}/${envVars.DB}`,
};

module.exports = config;