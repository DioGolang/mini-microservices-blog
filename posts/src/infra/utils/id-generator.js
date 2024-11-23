const { randomBytes } = require('crypto');

module.exports = function idGenerator () {
    return randomBytes(4).toString('hex');
};