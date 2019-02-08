/* global define */
define([
    './AbstractModule'
], function (
    AbstractModule
) {
    const LINE_HEIGHT = 10;

    /**
     * @class
     * @extends AbstractModule
     */
    class ImageAlign extends AbstractModule {
        align(element, image) {
            const height = image.clientHeight;
            const correctedHeight = Math.ceil(height / LINE_HEIGHT) * LINE_HEIGHT;
            const diff = correctedHeight - height;
            element.style.marginBottom = `${diff}px`;
        }

        findImageElement(image, callback) {
            while (image) {
                if (image.tagName.toLowerCase() === 'img') {
                    return callback(image);
                }
                image = image.firstElementChild;
            }
        }

        activate(element) {
            this.findImageElement(element, (image) => {
                if (image.complete) {
                    this.align(element, image);
                } else {
                    image.onload = this.align.bind(this, element, image);
                }
            });
        }
    }

    return ImageAlign;
});