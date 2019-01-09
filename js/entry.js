/* global require */
const hooks = document.getElementsByClassName('js-hook');
Array.prototype.slice.call(hooks).forEach((hookNode) => {
    const hookName = hookNode.getAttribute('data-module');
    if (hookName) {
        const hookNames = hookName.split(' ');
        hookNames.forEach((name) => {
            const Module = require('./modules/' + name + '.js');
            const instance = new Module();
            instance.activate(hookNode);
        });
    }
});