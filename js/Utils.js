/* global define */
define(function () {

    class Utils {

        throttle(callback, limit) {
            let wait = false;
            return function () {
                if (!wait) {
                    callback.apply(null, arguments);
                    wait = true;
                    setTimeout(function () {
                        wait = false;
                    }, limit);
                }
            }
        }
    }

    return new Utils();
});