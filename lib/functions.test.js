const { getName, copyAndPush } = require('./functions.js');

describe('get name function', () => {
    it('return the name of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const getSpotName = getName(spot);

        expect(getSpotName).toEqual('spot');

        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        const getCharacter = getName(character);

        expect(getCharacter).toEqual('Aang');
    });
});

describe('copy and push', () => {
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3];
        const array = copyAndPush(numbers, 4);

        expect(array).toEqual([1, 2, 3, 4]);

        expect(numbers).toEqual([1, 2, 3]);
    });
});

