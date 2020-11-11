const marked = require('marked');

module.exports = function (source) {
	return `module.exports = \`${marked(source, this.query)}\``;
};
