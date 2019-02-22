const TestSuiteClassicStubs = require('./classic-stubs.spec.js');
const TestSuiteRandomStubs = require('./random-stubs.spec.js');
const TestSuiteGlobalNamespace = require('./global-namespace.test.js');

TestSuiteClassicStubs();
TestSuiteRandomStubs();
TestSuiteGlobalNamespace();

console.log(`[Adventure Land Test Helpers] PASS: All tests pass!`);
