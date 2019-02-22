const FnTypes = require('../lib/stubs/internal/function-return-types.json');
const AdventureLandTestHelpers = require('../lib/');

const SUITE_NAME = '[Global Namespace]';
const { injectIntoScope } = AdventureLandTestHelpers;


/**
 * It should map all stub functions to the global namespace.
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with
 *
 * @param {function[]} stubs
 * @param {object.<string, string>} fnTypes
 */
function testStubTypeUsingWith(stubs) {
    with (stubs) {
        const isTrue = typeof accept_party_invite === 'function';

        if (!isTrue) {
            console.log(`${SUITE_NAME}[Stub Type With] FAIL: Not all stubs were added to global scope.`);
            process.exit(1);
        }
    }
}

/**
 * It should map all stub functions to the global namespace.
 *
 * @param {function[]} stubs
 * @param {object.<string, string>} fnTypes
 */
function testStubTypeUsingScope(stubs, fnTypes) {
    injectIntoScope(stubs, this);
    const isTrue = typeof accept_party_invite === 'function';

    if (!isTrue) {
        console.log(`${SUITE_NAME}[Stub Type Scope] FAIL: Not all stubs were added to global scope.`);
        process.exit(1);
    }
}


/**
 * Run tests.
 */
function testSuite() {
    const stubs = AdventureLandTestHelpers.stubs.classic;

    [
        testStubTypeUsingWith,
        testStubTypeUsingScope,
    ].forEach(fn => {
        fn(stubs, FnTypes);
    });

    console.log(`${SUITE_NAME} PASS: All tests pass!`);
}


module.exports = testSuite;
