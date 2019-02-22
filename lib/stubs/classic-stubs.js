const FnTypes = require('./internal/function-return-types.json');
const MockCharacter = require('../mock-data/');
const MockCircle = require('../mock-data/');
const MockItemStats = require('../mock-data/');
const MockLine = require('../mock-data/');
const MockMap = require('../mock-data/');
const MockMonster = require('../mock-data/');
const MockPlayer = require('../mock-data/');
const MockSocket = require('../mock-data/');


/**
 * Returns a function stub.
 *
 * @param {*} returnValue - Value the stub will return.
 * @returns {function} a function that returns its argument.
 */
function buildStubFn(returnValue) {
    return () => returnValue;
}

// Map each Adventure Land type to a function that returns a specific value.
const typeToFnMap = {
    '*': buildStubFn(true),
    '{ string, string }': buildStubFn({ abc: 'xyz' }),
    'Character|Monster|Player': buildStubFn(MockCharacter),
    Boolean: buildStubFn(true),
    Character: buildStubFn(MockCharacter),
    Circle: buildStubFn(MockCircle),
    ItemStats: buildStubFn(MockItemStats),
    Line: buildStubFn(MockLine),
    Map: buildStubFn(MockMap),
    Monster: buildStubFn(MockMonster),
    Number: buildStubFn(42),
    Player: buildStubFn(MockPlayer),
    Socket: buildStubFn(MockSocket),
    undefined: () => {},
};

// Stub public Adventure Land functions so each randomly returns one of its possible values.
const classicFnKeys = Object.keys(FnTypes);
const classicFnValues = Object.values(FnTypes).map(type => typeToFnMap[type]);
const classicFns = classicFnKeys.reduce((fns, key, idx) => {
    return Object.assign(fns, { [key]: classicFnValues[idx] });
}, {});


module.exports = classicFns;
