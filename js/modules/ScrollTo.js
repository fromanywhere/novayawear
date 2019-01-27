/* global define */
define([
    './AbstractModule'
], function (
    AbstractModule,
) {

    const DURATION = 300;

    /**
     * @class
     * @extends AbstractModule
     */
    class ScrollTo extends AbstractModule {

        animate(destinationOffset) {
            const scrollTo = this;
            const start = window.pageYOffset;
            const startTime = new Date().getTime();
            const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

            const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight
                ? documentHeight - windowHeight
                : destinationOffset
            );

            if ('requestAnimationFrame' in window === false) {
                window.scroll(0, destinationOffsetToScroll);
                return;
            }

            function easeInOutCubic (t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            }

            function scroll() {
                const now = new Date().getTime();
                const time = Math.min(1, ((now - startTime) / DURATION));
                const timeFunction = easeInOutCubic(time);
                window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

                requestAnimationFrame(scroll);
            }

            scroll();
        }

        clickHandler(e) {
            e.preventDefault();
            this.animate(0);
        }

        activate(element) {
            element.addEventListener('click', this.clickHandler.bind(this))
        }

    }

    return ScrollTo;
});