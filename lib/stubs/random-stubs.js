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
 * Wrap a function within a closure to defer its execution.
 *
 * @param {function} fn - Function to be deferred.
 * @param {...any} args - Arguments for the deferred function.
 * @returns {function} a closure that defers execution of its interior function.
 */
function defer(fn, ...args) {
    return () => fn(...args);
}

/**
 * Get a random argument given to the function.
 *
 * @param {...any} args - Arguments used as the set from which to draw a random member.
 * @returns {any} a random argument given to the function.
 */
function getRandomArg(...args) {
    return args[Math.round(Math.random() * (args.length - 1))];
}

/**
 * Get a random number.
 *
 * @param {number} max - The maximum value this integer can take.
 * @param {boolean} isInteger - Whether the value is a floating point or an integer.
 * @returns {number} a random real number.
 */
function getRandomNumber(max, isInteger) {
    return isInteger ? Math.round(Math.random() * max) : Math.random() * max;
}

/**
 * Get a list of 100 random numbers, each with a value anywhere from 1 to 1000.
 *
 * @returns {number[]} a list containing 100 random real numbers.
 */
function getRandomNumbers() {
    const max = 1 + Math.floor(new Date().getUTCMilliseconds()); // [1, 1000]
    const emptyArray = Array.apply(null, new Array(100));
    return emptyArray.map(() => getRandomNumber(max, Math.round(Math.random())));
}

/**
 * Get a list of all basic types.
 *
 * @returns {any[]} any of the basic types.
 */
function getBasicTypes() {
    return [undefined, null, true, false, {}, [], 'Adventure Land MMORPG', getRandomNumber(100)];
}

/**
 * Get a list of all advanced class types.
 *
 * @returns {any[]} any of the advanced class types.
 */
function getClassTypes() {
    return [MockCharacter, MockCircle, MockItemStats, MockLine, MockMap, MockMonster,
        MockPlayer, MockSocket].map(type => JSON.parse(JSON.stringify(type)));
}

/**
 * Builds a deferred function that returns a random argument.
 *
 * @returns {function} a deferred function that returns a random argument.
 */
const buildRandomFn =
    defer.bind(null, getRandomArg);

// Map each Adventure Land type to a function that randomly returns one of its possible values.
const typeToFnMap = {
    '*': buildRandomFn(...getBasicTypes(), ...getClassTypes()),
    '{ string, string }': buildRandomFn({ abc: 'xyz' }, getRandomArg(null, undefined)),
    'Character|Monster|Player': buildRandomFn(MockCharacter, MockMonster, MockPlayer, getRandomArg(null, undefined)),
    Boolean: buildRandomFn(true, false),
    Character: buildRandomFn(MockCharacter, getRandomArg(null, undefined)),
    Circle: buildRandomFn(MockCircle, getRandomArg(null, undefined)),
    ItemStats: buildRandomFn(MockItemStats, getRandomArg(null, undefined)),
    Line: buildRandomFn(MockLine, getRandomArg(null, undefined)),
    Map: buildRandomFn(MockMap, getRandomArg(null, undefined)),
    Monster: buildRandomFn(MockMonster, getRandomArg(null, undefined)),
    Number: buildRandomFn(...getRandomNumbers()),
    Player: buildRandomFn(MockPlayer, getRandomArg(null, undefined)),
    Socket: buildRandomFn(MockSocket, getRandomArg(null, undefined)),
    undefined: () => {},
};

// Stub public Adventure Land functions so each randomly returns one of its possible values.
const randomFnKeys = Object.keys(FnTypes);
const randomFnValues = Object.values(FnTypes).map(type => typeToFnMap[type]);
const randomFns = randomFnKeys.reduce((fns, key, idx) => {
    return Object.assign(fns, { [key]: randomFnValues[idx] });
}, {});


module.exports = randomFns;
