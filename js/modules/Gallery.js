/* global define */
define([
    './jquery-3.3.1',
    './simple-lightbox',
    '../Utils',
    './AbstractModule',
], function (
    jquery,
    simpleLightbox,
    utils,
    AbstractModule
) {

    /**
     * @class
     * @extends AbstractModule
     */
    class Gallery extends AbstractModule {
        activate(element) {
            jquery(element).find('[data-src]').simpleLightbox({
                sourceAttr: 'data-src',
                swipeClose: false,
                showCounter: false,
                docClose: false,
                disableScroll: false,
                navText: [
                    '<div class="sl-cover" data-mouse-title="Назад"></div>',
                    '<div class="sl-cover" data-mouse-title="Вперед"></div>',
                ],
                closeText: '<span class="scroll-padding">Закрыть</span>',
                history: false,
                nav: !utils.isTouch()
            });
        }
    }

    return Gallery;
});