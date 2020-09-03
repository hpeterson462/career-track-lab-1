const { getName } = require('./functions.js');

describe('get name function', () => {
    it('return the name of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const getSpot = getName(spot, 'name');

        expect(getSpot).toEqual('spot');

        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        const getCharacter = getName(character, 'name');

        expect(getCharacter).toEqual('Aang');
    });
});

