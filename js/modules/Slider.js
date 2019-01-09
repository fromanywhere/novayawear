/* global define */
define([
    './swiper.min.js',
    './AbstractModule',
    '../Utils.js'
], function (
    Swiper,
    AbstractModule,
    utils
) {

    /**
     * @class
     * @extends AbstractModule
     */
    class Slider extends AbstractModule {

        resizeHandler() {
            this.swiper.onResize();
        }

        activate(element) {
            this.element = element;
            this.swiper = new Swiper(element, {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                autoplay: 5000,
                loop: true,
                lazyLoading: true,
                lazyLoadingInPrevNext: true,
                lazyLoadingOnTransitionStart: true
            });
            this.boundResizeHandler = this.resizeHandler.bind(this);

            window.addEventListener('resize', utils.throttle(this.boundResizeHandler, 30), false);
            window.addEventListener('load', utils.throttle(this.boundResizeHandler, 30), false);
        }
    }

    return Slider;
});