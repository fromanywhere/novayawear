/* global define */
define([
    './AbstractModule'
], function (
    AbstractModule
) {

    /**
     * @class
     * @extends AbstractModule
     */
    class Grid extends AbstractModule {

        handleEvent(e) {
            if (e.type === 'keydown' && e.key == ';' && (e.ctrlKey || e.metaKey)) {
                document.documentElement.classList.toggle('grid');
            }
        }

        activate(element) {
            document.addEventListener('keydown', this)
        }
    }

    return Grid;
});