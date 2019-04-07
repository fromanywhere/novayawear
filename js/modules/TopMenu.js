/* global define */
define([
    './AbstractModule'
], function (
    AbstractModule,
) {
    const MENU_ITEM_CLASSNAME = 'js-nav-dropdown';
    const HOVER_CLASS = '__hover';
    const WIDE_NAV_MQ = window.matchMedia('(min-width: 1000px)');

    /**
     * @class
     * @extends AbstractModule
     */
    class TopMenu extends AbstractModule {

        getScrollStyle() {

            const div = document.createElement('div');
            div.className='scroll-width-test';
            const style = document.createElement('style');
            style.innerHTML = '.scroll-width-test {overflow-y: scroll;width:50px;height:50px;position:absolute;left:-9999px}';

            div.appendChild(style);
            document.body.appendChild(div);
            const scrollWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);

            const scrollStyle = document.createElement('style');
            scrollStyle.innerHTML = `html.has-lightbox, html.has-lightbox .scroll-padding { padding-right: ${scrollWidth}px } `;
            document.body.appendChild(scrollStyle);
        }

        hideAll() {
            const hoverItems = this.element.getElementsByClassName(MENU_ITEM_CLASSNAME + ' ' + HOVER_CLASS);

            Array.from(hoverItems).forEach((item) => {
                item.classList.remove('__hover');
            });
        }

        handleEvent(event) {
            switch (event.type.toLowerCase()) {
                case 'mouseenter':
                    if (WIDE_NAV_MQ.matches) {
                        this.hideAll();
                        event.currentTarget.classList.add('__hover');
                    }
                    break;
                case 'click':
                    if (event.target.classList.contains('nav_title') && !WIDE_NAV_MQ.matches) {
                        event.preventDefault();
                        this.menuWrapper.classList.add('__open');
                        event.currentTarget.classList.add('__hover');
                    }
                    break;
                case 'mouseleave':
                    if (WIDE_NAV_MQ.matches) {
                        this.hideAll();
                    }
                    this.disableCartBlock();

                    break;
                }
        }

        disableCartBlock() {
            this.element.classList.remove('__block');
        }

        toggleMenu() {
            this.element.classList.toggle('__open');
            this.closeMenuWrapper();
            this.hideAll();
            this.disableCartBlock();
            document.documentElement.classList.toggle('has-lightbox', this.element.classList.contains('__open'));
        }

        closeAll() {
            if (!this.element.classList.contains('__open')) {
                return;
            }

            this.element.classList.remove('__open');
            this.closeMenuWrapper();
            this.closeSearch();
            this.hideAll();
            this.disableCartBlock();
            document.documentElement.classList.remove('has-lightbox');
        }

        closeMenuWrapper() {
            this.menuWrapper.classList.remove('__open');
            this.hideAll();
        }

        openSearch() {
            this.searchWrapper.classList.add('__open');
            this.searchInput.focus();
        }

        closeSearch() {
            this.searchWrapper.classList.remove('__open');
            this.element.classList.add('__block');
        }

        formKeyboardHandler(e) {
            const code = e.code;

            switch(code) {
                case 'Escape':
                    this.closeSearch();
                    break;
            }
        }

        activate(element) {
            this.element = element;
            this.menuWrapper = element.querySelector('.nav_menu');
            this.searchWrapper = element.querySelector('.nav_search');
            this.searchInput = element.querySelector('.nav_search-input');

            this.getScrollStyle();

            const menuItems = element.getElementsByClassName(MENU_ITEM_CLASSNAME);
            Array.from(menuItems).forEach((item) => {
                item.addEventListener('mouseenter', this);
                item.addEventListener('mouseleave', this);
                item.addEventListener('click', this);
            });

            window.addEventListener('resize', this.closeAll.bind(this));

            element.querySelector('.nav_open-button').addEventListener('click', this.toggleMenu.bind(this));
            element.querySelector('.top-menu_overlay').addEventListener('click', this.closeAll.bind(this));
            element.querySelector('.nav_back').addEventListener('click', this.closeMenuWrapper.bind(this));

            element.querySelector('.js-search-open').addEventListener('click', this.openSearch.bind(this));
            element.querySelector('.js-search-close').addEventListener('click', this.closeSearch.bind(this));

            this.searchInput.addEventListener('keyup', this.formKeyboardHandler.bind(this));
        }
    }

    return TopMenu;
});