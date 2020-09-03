function getName(object) {
    return object['name'];
}

function copyAndPush(array) {
    return [...array, 4];
}
module.exports = { copyAndPush, getName };