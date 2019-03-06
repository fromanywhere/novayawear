/* global define */
define([
    './lightgallery',
    './AbstractModule'
], function (
    lightGallery,
    AbstractModule
) {

    /**
     * @class
     * @extends AbstractModule
     */
    class Gallery extends AbstractModule {
        activate(element) {
            window.lightGallery(element, {
                counter: false
            });
        }
    }

    return Gallery;
});