/* global define */
define([
    './AbstractModule',
    '../Utils'
], function (
    AbstractModule,
    utils
) {

    /**
     * @class
     * @extends AbstractModule
     */
    class ScrollTo extends AbstractModule {

        animate(destinationOffset, hash) {
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
                window.location.hash = hash;
                return;
            }

            function easeInOutCubic (t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            }

            function scroll() {
                const now = new Date().getTime();
                const time = Math.min(1, ((now - startTime) / scrollTo.duration));
                const timeFunction = easeInOutCubic(time);
                window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

                if (window.pageYOffset === destinationOffsetToScroll) {
                    window.location.hash = hash;
                    return;
                }

                requestAnimationFrame(scroll);
            }

            scroll();
        }

        getPosition(elem) {
            var xPosition = 0;
            var yPosition = 0;
            var element = elem;

            while(element) {
                xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
            }

            return {
                x: xPosition,
                y: yPosition
            };
        }

        clickHandler(e) {
            e.preventDefault();
            var targetSelector = e.target.getAttribute('href').substr(1);
            var top = 0;
            var hash = "";
            if (targetSelector) {
                top = this.getPosition(document.getElementById(targetSelector)).y;
                hash = targetSelector;
            }
            this.animate(top, hash);
        }

        scrollHandler() {
            if (utils.isDesktop()) {
                var columnRectBottom = this.column.getBoundingClientRect().bottom;
                var contentRect= this.lastColumnElement.getBoundingClientRect();

                var isActive = window.scrollY > window.innerHeight;
                if (this.lastColumnElement) {
                    isActive = isActive && contentRect.bottom < (window.innerHeight - this.rectLimit);
                }

                var isFixed = columnRectBottom > window.innerHeight - this.rectLimit;
                if (isFixed && this.lastColumnElement) {
                    isFixed = columnRectBottom > contentRect.bottom;
                }

                this.scrollTopElement.classList.toggle('__active', isActive);
                this.scrollTopElement.classList.toggle('__fixed', isFixed);
            }
        }

        activate(element) {
            this.duration = 300;
            this.rectLimit = 30;
            this.boundClick = this.clickHandler.bind(this);
            this.boundScroll = this.scrollHandler.bind(this);
            this.scrollTopElement = element.querySelector('.js-scroll-top');
            this.column = element.querySelector('.info-section_aside');
            this.lastColumnElement = this.column.lastElementChild;
            if (this.scrollTopElement && this.column) {
                window.addEventListener('scroll', utils.throttle(this.boundScroll, 30), false);
                window.addEventListener('resize', utils.throttle(this.boundScroll, 30), false);
            }

            Array.prototype.slice.call(document.getElementsByTagName("A"))
                .filter((linkTag) => {
                    const href = linkTag.getAttribute('href');
                    return href && href.indexOf('#') === 0
                })
                .forEach((linkTag) => {
                    linkTag.addEventListener('click', this.boundClick, false);
                });
        }

    }

    return ScrollTo;
});