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

module.exports = { copyAndPush, getName, capitalizeAndFilter };