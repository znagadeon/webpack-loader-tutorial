const axios = require('axios');

const getLinks = text => text.split('\n')
    .map(line => line.match(/[^!]\[.*\]\((.+)\)/))
    .filter(match => match)
    .map(match => match[1]);

module.exports = function (source) {
    const callback = this.async();

    const links = getLinks(source);
    const promises = links.map(link => axios({
        method: 'GET',
        url: link,
        timeout: 300,
    }));

    Promise.all(promises).then(() => {
        callback(null, source);
    });
};
