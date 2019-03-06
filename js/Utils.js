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
    }

    return new Utils();
});