const path = require('path');

const getImagePaths = text => text.split('\n')
	.map(line => line.match(/<img..*?src="(.+?)".*?>/))
	.filter(match => match)
	.map(match => match[1]);

module.exports = function (source) {
	return '';
};
