/* global define */
define([
    './AbstractModule',
    '../Utils'
], function (
    AbstractModule,
    utils
) {

    /**
     * @class
     * @extends AbstractModule
     */
    class MouseTitle extends AbstractModule {

        findClosestTitle(element) {

            do {
                if (element.hasAttribute('data-mouse-title')) {
                    return element.getAttribute('data-mouse-title');
                }
            } while (element = element.parentElement);

            return null;
        }

        changeTitle() {
            const title = this.findClosestTitle(this.titleSourceNode);

            if (title !== this.title) {
                this.title = title;
                this.titleNode.innerHeight;
                this.titleNode.classList.add('__hide');

                if (this.title) {
                    setTimeout(() => {                      
                        this.titleNode.innerText = this.title;
                        this.titleNode.innerHeight;
                        this.titleNode.classList.remove('__hide');
                    }, 200);
                }
            }
        }

        handleMouseMove(e) {
            if (e.target !== this.titleSourceNode) {
                this.titleSourceNode = e.target;
                this.throttledChangeTitle();
            }

            if (this.title) {
                this.titleNode.classList.toggle('__left', e.clientX > window.innerWidth / 2);
                this.titleNode.classList.toggle('__top', e.clientY > window.innerHeight / 2);

                this.titleNode.style = `top: ${e.clientY}px; left: ${e.clientX}px;`;
            }
        }

        activate(element) {
            if (utils.isTouch()) {
                return;
            }

            this.title = null;
            this.titleSourceNode = null;

            this.titleNode = document.createElement('div');
            this.titleNode.className = 'mouse-title';

            this.throttledChangeTitle = utils.throttle(this.changeTitle, 10, this);

            document.body.appendChild(this.titleNode);
            document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        }
    }

    return MouseTitle;
});