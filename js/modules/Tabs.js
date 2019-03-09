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
    class Tabs extends AbstractModule {

        hideAll() {
            this.links.forEach((link) => {
                link.classList.remove('__active');
            });

            this.tabs.forEach((tab) => {
                tab.classList.remove('__active');
            });
        }

        showTab(index) {
            this.links[index].classList.add('__active');
            this.tabs[index].classList.add('__active');
        }

        handleEvent(e) {
            if (e.type === 'click') {
                const index = this.links.indexOf(e.target);
                if (index !== -1) {
                    this.hideAll();
                    this.showTab(index);
                }
            }
        }

        activate(element) {
            this.links = Array.from(element.getElementsByClassName('js-link'));
            this.tabs = Array.from(element.getElementsByClassName('js-tab'));
            this.showTab(0);

            element.addEventListener('click', this);
        }
    }

    return Tabs;
});