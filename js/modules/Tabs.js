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

            this.body.innerHTML = '';
        }

        showTab(index) {
            this.links[index].classList.add('__active');
            this.tabs[index].classList.add('__active');
            this.body.appendChild(this.tabs[index].cloneNode(true));
            this.active = index;
        }

        handleEvent(e) {
            if (e.type === 'click') {
                const index = this.links.indexOf(e.target);
                if (index !== -1) {
                    this.hideAll();
                    if (this.active !== index) {
                        this.showTab(index);
                    } else {
                        this.active = -1;
                    }
                }
            }
        }

        activate(element) {
            this.links = Array.from(element.getElementsByClassName('js-link'));
            this.tabs = Array.from(element.getElementsByClassName('js-tab'));
            this.body = element.querySelector('.item_info-tabs-body');
            this.active = -1;

            element.addEventListener('click', this);
        }
    }

    return Tabs;
});
