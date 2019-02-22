/**
 * Inject all functions from the given object into the given scope.
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 *
 * @param {object.<string, function>} functions - Functions to inject into the scope.
 * @param {object} scope - Scope in which to inject the functions.
 */
function injectIntoScope(functions, scope) {
    Object.keys(functions).forEach(fnName => {
        if (!scope[fnName] && typeof functions[fnName] === 'function') {
            Object.defineProperty(scope, fnName, {
                value: functions[fnName],
            });
        }
    });
}


module.exports = injectIntoScope;
