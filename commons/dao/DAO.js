function findOne(query, projection = null) {
  // query.client = this.clientId;
  return this.Model.findOne(query, projection).exec();
}

function findById(id, projection) {
  return this.Model.findById(id, projection).exec();
}

function findByIdAndUpdate(id, updateObj) {
  return this.Model.findByIdAndUpdate(id, updateObj, { new: true }).exec();
}

function save(doc) {
  // doc.client = this.clientId;
  const document = new this.Model(doc);
  return document.save();
}

function find(query, projection = null) {
  // query.client = this.clientId;
  return this.Model.find(query, projection).exec();
}

function update(query, updateObject, options) {
  // query.client = this.clientId;
  return this.Model.update(query, updateObject, options).exec();
}

function count(query) {
  // query.client = this.clientId;
  return this.Model.count(query).exec();
}

function remove(query) {
  return this.Model.remove(query);
}

function findOneAndRemove(query) {
  return this.Model.findOneAndRemove(query);
}

function findByIdAndRemove(id) {
  return this.Model.findByIdAndRemove(id);
}

// Finally Returning Model instance for custom queries
function getModel() {
  return this.Model;
}

function batchInsert(batch, options) {
  return this.Model.collection.insert(batch, options);
}

// Constructor function
function DAO() {
  // assert.ok(model);
  // this.Model = model;
}

DAO.prototype = {
  find,
  findById,
  findByIdAndUpdate,
  findByIdAndRemove,
  findOne,
  findOneAndRemove,
  remove,
  update,
  count,
  save,
  getModel,
  batchInsert,
};

module.exports = DAO;