/* global define */
define(function () {

    /**
     * @class
     */
    class AbstractModule {

        /**
         * @abstract
         * @param {HTMLElement} element — activation root node
         */
        activate(element) {
            throw new Error('Should be implemented');
        }
    }

    return AbstractModule;
});