const marked = require('marked');

module.exports = function (source) {
	return marked(source, this.query);
};
