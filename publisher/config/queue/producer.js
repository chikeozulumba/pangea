const queue = require('./index');

module.exports = function (data, options = {}) {
  return queue.add(data, options);
}