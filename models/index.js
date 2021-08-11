const User = require('./User');
const Character = require('./Character');

Character.BelongsTo(User, {
  foreignKey: 'char_num'
});

module.exports = { User, Character };