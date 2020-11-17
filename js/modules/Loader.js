/* global define */
define([
    './AbstractModule',
    '../Utils'
], function (
    AbstractModule,
    utils
) {

    const VIEWPORT_COEFFICIENT = 2;

    /**
     * @class
     * @extends AbstractModule
     */
    class Loader extends AbstractModule {

        createStub() {
            const stub = document.createElement('div');
            stub.className = "loader";
            stub.innerHTML = '<i class="dot"></i><i class="dot"></i><i class="dot"></i>';
            return stub;
        }

        setStub() {
            if (this.loading) {
                this.element.appendChild(this.stub);
            } else {
                this.element.removeChild(this.stub);
            }
        }

        request() {
            this.loading = true;
            this.setStub();

            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                let tmpElement = document.createElement('div');
                tmpElement.innerHTML = xhr.responseText;

                const listItems = tmpElement.children;

                [...listItems].forEach((item) => {
                    this.element.appendChild(item);
                    utils.activate(item);

                });

                tmpElement = null;

                this.loading = false;
                this.setStub();
            };
            
            xhr.onerror = () => {
                this.loading = false;
                this.hasMore = false;
                this.setStub();
            };

            xhr.open("GET", this.url);
            xhr.send();
        }

        scrollHandler() {
            if (this.hasMore && !this.loading) {
                if (this.element.getBoundingClientRect().bottom < (window.innerHeight * VIEWPORT_COEFFICIENT)) {
                    this.request();
                }
            }
        }

        activate(element) {
            this.element = element;
            this.hasMore = true;
            this.loading = false;
            this.url = element.getAttribute('data-url');

            this.stub = this.createStub();

            window.addEventListener('scroll', utils.throttle(this.scrollHandler, 100, this));
        }
    }

    return Loader;
});
