/* global define */
define([
    './AbstractModule'
], function (
    AbstractModule
) {
    const LINE_HEIGHT = 10;
    const isObjectFitSupported = window.CSS && window.CSS.supports('object-fit', 'cover');
    const items = [];

    /**
     * @class
     * @extends AbstractModule
     */
    class ImageAlign extends AbstractModule {
        constructor() {
            super();
            this.ratio = NaN;
        }

        align() {
            if (isObjectFitSupported) {
                const width = this.image.clientWidth;
                if (isNaN(this.ratio)) {
                    this.ratio = this.image.clientHeight / width;
                }

                const height = this.ratio * width;
                const correctedHeight = Math.ceil(height / LINE_HEIGHT) * LINE_HEIGHT;
                this.image.style.height = `${correctedHeight}px`;
            }
            this.image.classList.add('image-loaded');
        }
        
        register() {
            this.align();
            items.push(this);
        }

        activate(element) {
            while (element) {
                if (element.tagName.toLowerCase() === 'video') {
                    this.image = element;
                    this.register();
                    return;
                }
                if (element.tagName.toLowerCase() === 'img') {
                    this.image = element;
                    if (element.complete) {
                        this.register();
                    } else {
                        element.onload = this.register.bind(this);
                    }
                    return;
                }
                element = element.firstElementChild;
            }
        }
    }

    window.addEventListener('resize', () => {
        items.forEach((item) => item.align());
    });

    return ImageAlign;
});
