const assert = require('assert');

let Schema = null;

function init() {
  const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

  /*
  UserSchema.pre('save', () => {

  });
  */
  return UserSchema;
}

module.exports = (schema) => {
  assert.ok(schema);
  Schema = schema;
  return init();
};