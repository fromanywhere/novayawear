/* global define */
define(function () {

    class Utils {

        isTouch() {
            return ('ontouchstart' in window);
        }

        throttle(callback, limit, ctx = null) {
            let wait = false;
            return function () {
                if (!wait) {
                    callback.apply(ctx, arguments);
                    wait = true;
                    setTimeout(function () {
                        wait = false;
                    }, limit);
                }
            }
        }

        activate(root) {
            const hooks = root.getElementsByClassName('js-hook');
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
        }
    }

    return new Utils();
});
