const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, default: '' },
  secondName: { type: String, default: '' },
  email: { type: String, default: '' },
  age: { type: Number, default: 0 }
});

module.exports = Mongoose.model('User', UserSchema);
