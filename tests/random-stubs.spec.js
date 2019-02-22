const FnTypes = require('../lib/stubs/internal/function-return-types.json');
const AdventureLandTestHelpers = require('../lib/');

const SUITE_NAME = '[Random Stubs]';


/**
 * It should have an equal number of functions and stubs based on those functions.
 *
 * @param {function[]} stubs
 * @param {object.<string, string>} fnTypes
 */
function testStubCount(stubs, fnTypes) {
    const isEqual = Object.keys(stubs).length === Object.keys(fnTypes).length;

    if (!isEqual) {
        console.log(`${SUITE_NAME}[Stub Count] FAIL: There are a different number of stubs than expected.`);
        process.exit(1);
    }
}

/**
 * It should map a stub function to all base function names.
 *
 * @param {function[]} stubs
 * @param {object.<string, string>} fnTypes
 */
function testStubType(stubs, fnTypes) {
    const isTrue = Object.keys(fnTypes)
        .map(fnName => stubs[fnName])
        .map(stub => typeof stub === 'function')
        .filter(isFunction => !isFunction)
        .length === 0;

    if (!isTrue) {
        console.log(`${SUITE_NAME}[Stub Type] FAIL: Some stubs were not functions.`);
        process.exit(1);
    }
}

/**
 * It should return a truthy value for all stubs of a return type other than "undefined".
 *
 * @param {function[]} stubs
 * @param {object.<string, string>} fnTypes
 */
function testStubForTruthyValue(stubs, fnTypes) {
    const isTrue = Object.keys(fnTypes)
        .filter(fnName => fnTypes[fnName] !== 'undefined')
        .map(fnName => stubs[fnName])
        .map(fn => {
            for (let i = 0; i < 100; i++) {
                if (fn()) return true;
            }
        }).filter(isTruthy => !isTruthy)
        .length === 0;

    if (!isTrue) {
        console.log(`${SUITE_NAME}[Truthy Values] FAIL: Stubs did not all return truthy values.`);
        process.exit(1);
    }
}

/**
 * Run tests.
 */
function testSuite() {
    const stubs = AdventureLandTestHelpers.stubs.random;

    [
        testStubCount,
        testStubType,
        testStubForTruthyValue,
    ].forEach(fn => {
        fn(stubs, FnTypes);
    });

    console.log(`${SUITE_NAME} PASS: All tests pass!`);
}


module.exports = testSuite;
