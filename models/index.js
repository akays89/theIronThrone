const User = require('./User');
const Character = require('./Character');

// User.hasOne(Character, {
//   foreignKey: 'id'
// });

// Character.hasMany(User, {
//   foreignKey: 'id'
// });

module.exports = { User, Character };