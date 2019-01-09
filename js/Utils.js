/* global define */
define(function () {

    class Utils {

        constructor() {
            this.scrollWidth = this.calculateScrollWidth();
            this.generateModalStyle();
        }

        calculateScrollWidth() {
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            // needed for WinJS apps
            outer.style.msOverflowStyle = "scrollbar";

            document.body.appendChild(outer);

            var widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";

            // add innerdiv
            var inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);

            var widthWithScroll = inner.offsetWidth;

            // remove divs
            outer.parentNode.removeChild(outer);

            return widthNoScroll - widthWithScroll;
        }

        isDesktop() {
            return window.matchMedia("(min-width: 1280px)").matches;
        }

        throttle(callback, limit) {
            var wait = false;
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

        generateModalStyle() {
            document.body.insertAdjacentHTML("beforeend", `<style>body.__modal{border-right: ${this.scrollWidth}px transparent solid}</style>`);
        }
    }

    return new Utils();
});