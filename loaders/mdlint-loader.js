const axios = require('axios');

const getLinks = text => text.split('\n')
    .map(line => line.match(/[^!]\[.*\]\((.+)\)/))
    .filter(match => match)
    .map(match => match[1]);

module.exports = function (source) {
    return '';
};
