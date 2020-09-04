function getName(object) {
    return object['name'];
}

function copyAndPush(array) {
    return [...array, 4];
}

function capitalizeAndFilter(array) {
    const upperCase = array.map(string => string.toUpperCase()).filter(fWord => fWord.charAt(0) !== 'f');

    return upperCase.filter(fWord => fWord.charAt(0) !== 'F');
}

const fetchQuote = async () => {
    const fetch = require('node-fetch');
    const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
    const data = await response.json();

    return data[0];
};

module.exports = { copyAndPush, getName, capitalizeAndFilter, fetchQuote };