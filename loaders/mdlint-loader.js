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
    }).catch(err => {
        // warning을 뱉을 때
        this.emitWarning(new Error('Dead link found!'));
        callback(null, source);

        // error를 뱉을 때
        // this.emitError(new Error('Dead link found!'));
        // callback(err);
    });
};
