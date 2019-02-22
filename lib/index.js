const MockData = require('./mock-data/');
const ClassicStubs = require('./stubs/classic-stubs.js');
const RandomStubs = require('./stubs/random-stubs.js');
const Inject = require('./utilities/inject.js');


module.exports = {
    injectIntoScope: Inject,
    mocks: {
        data: MockData,
    },
    stubs: {
        classic: ClassicStubs,
        random: RandomStubs,
    },
};
