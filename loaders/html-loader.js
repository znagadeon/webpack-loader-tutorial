const path = require('path');

const getImagePaths = text => text.split('\n')
	.map(line => line.match(/<img..*?src="(.+?)".*?>/))
	.filter(match => match)
	.map(match => match[1]);

module.exports = function (source) {
	const images = getImagePaths(source);
	images.forEach(image => {
		this.emitFile(
			image,
			this.fs.readFileSync(path.join(this.resourcePath, '..', image)),
		);
	});

	return `module.exports = \`${source}\``;
};
