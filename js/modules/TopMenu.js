/* global define */
define([
    './AbstractModule'
], function (
    AbstractModule,
) {
    const MENU_ITEM_CLASSNAME = 'js-nav-dropdown';
    const HOVER_CLASS = '__hover';

    /**
     * @class
     * @extends AbstractModule
     */
    class TopMenu extends AbstractModule {

        hideAll() {
            const hoverItems = this.element.getElementsByClassName(MENU_ITEM_CLASSNAME + ' ' + HOVER_CLASS);

            Array.from(hoverItems).forEach((item) => {
                item.classList.remove('__hover');
            });
        }

        handleEvent(event) {
            switch (event.type.toLowerCase()) {
                case 'mouseenter':
                    this.hideAll();
                    event.currentTarget.classList.add('__hover');
                    break;
                case 'mouseleave':
                    this.hideAll();

                    break;
                }
        }

        activate(element) {
            this.element = element;

            const menuItems = element.getElementsByClassName(MENU_ITEM_CLASSNAME);
            Array.from(menuItems).forEach((item) => {
                item.addEventListener('mouseenter', this);
            });

            element.addEventListener('mouseleave', this);
        }
    }

    return TopMenu;
});