!function (e) {
  var a = {};

  function t(i) {
    if (a[i]) return a[i].exports;
    var s = a[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(s.exports, s, s.exports, t), s.l = !0, s.exports;
  }

  t.m = e, t.c = a, t.d = function (e, a, i) {
    t.o(e, a) || Object.defineProperty(e, a, {
      enumerable: !0,
      get: i
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, a) {
    if (1 & a && (e = t(e)), 8 & a) return e;
    if (4 & a && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (t.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & a && "string" != typeof e) for (var s in e) t.d(i, s, function (a) {
      return e[a];
    }.bind(null, s));
    return i;
  }, t.n = function (e) {
    var a = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(a, "a", a), a;
  }, t.o = function (e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }, t.p = "", t(t.s = 3);
}([function (e, a, t) {
  var i;
  void 0 === (i = function () {
    return class {
      activate(e) {
        throw new Error("Should be implemented");
      }

    };
  }.call(a, t, a, e)) || (e.exports = i);
}, function (e, a, t) {
  var i;
  void 0 === (i = function () {
    return new class {
      constructor() {
        this.scrollWidth = this.calculateScrollWidth(), this.generateModalStyle();
      }

      calculateScrollWidth() {
        var e = document.createElement("div");
        e.style.visibility = "hidden", e.style.width = "100px", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
        var a = e.offsetWidth;
        e.style.overflow = "scroll";
        var t = document.createElement("div");
        t.style.width = "100%", e.appendChild(t);
        var i = t.offsetWidth;
        return e.parentNode.removeChild(e), a - i;
      }

      isDesktop() {
        return window.matchMedia("(min-width: 1280px)").matches;
      }

      throttle(e, a) {
        var t = !1;
        return function () {
          t || (e.apply(null, arguments), t = !0, setTimeout(function () {
            t = !1;
          }, a));
        };
      }

      generateModalStyle() {
        document.body.insertAdjacentHTML("beforeend", `<style>body.__modal{border-right: ${this.scrollWidth}px transparent solid}</style>`);
      }

    }();
  }.call(a, t, a, e)) || (e.exports = i);
}, function (e, a, t) {
  !function () {
    "use strict";

    var e,
        a,
        t = function (a, s) {
      function r(e) {
        return Math.floor(e);
      }

      function n() {
        var e = x.params.autoplay,
            a = x.slides.eq(x.activeIndex);
        a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || x.params.autoplay), x.autoplayTimeoutId = setTimeout(function () {
          x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? s.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x));
        }, e);
      }

      function o(a, t) {
        var i = e(a.target);
        if (!i.is(t)) if ("string" == typeof t) i = i.parents(t);else if (t.nodeType) {
          var s;
          return i.parents().each(function (e, a) {
            a === t && (s = t);
          }), s ? t : void 0;
        }
        if (0 !== i.length) return i[0];
      }

      function l(e, a) {
        a = a || {};
        var t = new (window.MutationObserver || window.WebkitMutationObserver)(function (e) {
          e.forEach(function (e) {
            x.onResize(!0), x.emit("onObserverUpdate", x, e);
          });
        });
        t.observe(e, {
          attributes: void 0 === a.attributes || a.attributes,
          childList: void 0 === a.childList || a.childList,
          characterData: void 0 === a.characterData || a.characterData
        }), x.observers.push(t);
      }

      function d(e) {
        e.originalEvent && (e = e.originalEvent);
        var a = e.keyCode || e.charCode;
        if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === a || !x.isHorizontal() && 40 === a)) return !1;
        if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === a || !x.isHorizontal() && 38 === a)) return !1;

        if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
          if (37 === a || 39 === a || 38 === a || 40 === a) {
            var t = !1;
            if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;
            var i = {
              left: window.pageXOffset,
              top: window.pageYOffset
            },
                s = window.innerWidth,
                r = window.innerHeight,
                n = x.container.offset();
            x.rtl && (n.left = n.left - x.container[0].scrollLeft);

            for (var o = [[n.left, n.top], [n.left + x.width, n.top], [n.left, n.top + x.height], [n.left + x.width, n.top + x.height]], l = 0; l < o.length; l++) {
              var d = o[l];
              d[0] >= i.left && d[0] <= i.left + s && d[1] >= i.top && d[1] <= i.top + r && (t = !0);
            }

            if (!t) return;
          }

          x.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !x.rtl || 37 === a && x.rtl) && x.slideNext(), (37 === a && !x.rtl || 39 === a && x.rtl) && x.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && x.slideNext(), 38 === a && x.slidePrev()), x.emit("onKeyPress", x, a);
        }
      }

      function p(e) {
        e.originalEvent && (e = e.originalEvent);

        var a = 0,
            t = x.rtl ? -1 : 1,
            i = function (e) {
          var a = 0,
              t = 0,
              i = 0,
              s = 0;
          return "detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = t, t = 0), i = 10 * a, s = 10 * t, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !a && (a = i < 1 ? -1 : 1), s && !t && (t = s < 1 ? -1 : 1), {
            spinX: a,
            spinY: t,
            pixelX: i,
            pixelY: s
          };
        }(e);

        if (x.params.mousewheelForceToAxis) {
          if (x.isHorizontal()) {
            if (!(Math.abs(i.pixelX) > Math.abs(i.pixelY))) return;
            a = i.pixelX * t;
          } else {
            if (!(Math.abs(i.pixelY) > Math.abs(i.pixelX))) return;
            a = i.pixelY;
          }
        } else a = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * t : -i.pixelY;

        if (0 !== a) {
          if (x.params.mousewheelInvert && (a = -a), x.params.freeMode) {
            var s = x.getWrapperTranslate() + a * x.params.mousewheelSensitivity,
                r = x.isBeginning,
                n = x.isEnd;
            if (s >= x.minTranslate() && (s = x.minTranslate()), s <= x.maxTranslate() && (s = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(s), x.updateProgress(), x.updateActiveIndex(), (!r && x.isBeginning || !n && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function () {
              x.slideReset();
            }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === s || s === x.maxTranslate()) return;
          } else {
            if (new window.Date().getTime() - x.mousewheel.lastScrollTime > 60) if (a < 0) {
              if (x.isEnd && !x.params.loop || x.animating) {
                if (x.params.mousewheelReleaseOnEdges) return !0;
              } else x.slideNext(), x.emit("onScroll", x, e);
            } else if (x.isBeginning && !x.params.loop || x.animating) {
              if (x.params.mousewheelReleaseOnEdges) return !0;
            } else x.slidePrev(), x.emit("onScroll", x, e);
            x.mousewheel.lastScrollTime = new window.Date().getTime();
          }

          return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
        }
      }

      function u(a, t) {
        a = e(a);
        var i,
            s,
            r,
            n = x.rtl ? -1 : 1;
        i = a.attr("data-swiper-parallax") || "0", s = a.attr("data-swiper-parallax-x"), r = a.attr("data-swiper-parallax-y"), s || r ? (s = s || "0", r = r || "0") : x.isHorizontal() ? (s = i, r = "0") : (r = i, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * n + "%" : s * t * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", a.transform("translate3d(" + s + ", " + r + ",0px)");
      }

      function c(e) {
        return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
      }

      if (!(this instanceof t)) return new t(a, s);
      var m = {
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        autoplay: !1,
        autoplayDisableOnInteraction: !0,
        autoplayStopOnLast: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        },
        flip: {
          slideShadows: !0,
          limitRotation: !0
        },
        cube: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        },
        fade: {
          crossFade: !1
        },
        parallax: !1,
        zoom: !1,
        zoomMax: 3,
        zoomMin: 1,
        zoomToggle: !0,
        scrollbar: null,
        scrollbarHide: !0,
        scrollbarDraggable: !1,
        scrollbarSnapOnRelease: !1,
        keyboardControl: !1,
        mousewheelControl: !1,
        mousewheelReleaseOnEdges: !1,
        mousewheelInvert: !1,
        mousewheelForceToAxis: !1,
        mousewheelSensitivity: 1,
        mousewheelEventsTarged: "container",
        hashnav: !1,
        hashnavWatchState: !1,
        history: !1,
        replaceState: !1,
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        onlyExternal: !1,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        pagination: null,
        paginationElement: "span",
        paginationClickable: !1,
        paginationHide: !1,
        paginationBulletRender: null,
        paginationProgressRender: null,
        paginationFractionRender: null,
        paginationCustomRender: null,
        paginationType: "bullets",
        resistance: !0,
        resistanceRatio: .85,
        nextButton: null,
        prevButton: null,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        lazyLoading: !1,
        lazyLoadingInPrevNext: !1,
        lazyLoadingInPrevNextAmount: 1,
        lazyLoadingOnTransitionStart: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        control: void 0,
        controlInverse: !1,
        controlBy: "slide",
        normalizeSlideIndex: !0,
        allowSwipeToPrev: !0,
        allowSwipeToNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        buttonDisabledClass: "swiper-button-disabled",
        paginationCurrentClass: "swiper-pagination-current",
        paginationTotalClass: "swiper-pagination-total",
        paginationHiddenClass: "swiper-pagination-hidden",
        paginationProgressbarClass: "swiper-pagination-progressbar",
        paginationClickableClass: "swiper-pagination-clickable",
        paginationModifierClass: "swiper-pagination-",
        lazyLoadingClass: "swiper-lazy",
        lazyStatusLoadingClass: "swiper-lazy-loading",
        lazyStatusLoadedClass: "swiper-lazy-loaded",
        lazyPreloaderClass: "swiper-lazy-preloader",
        notificationClass: "swiper-notification",
        preloaderClass: "preloader",
        zoomContainerClass: "swiper-zoom-container",
        observer: !1,
        observeParents: !1,
        a11y: !1,
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        runCallbacksOnInit: !0
      },
          h = s && s.virtualTranslate;
      s = s || {};
      var g = {};

      for (var f in s) if ("object" != typeof s[f] || null === s[f] || s[f].nodeType || s[f] === window || s[f] === document || void 0 !== i && s[f] instanceof i || "undefined" != typeof jQuery && s[f] instanceof jQuery) g[f] = s[f];else for (var v in g[f] = {}, s[f]) g[f][v] = s[f][v];

      for (var w in m) if (void 0 === s[w]) s[w] = m[w];else if ("object" == typeof s[w]) for (var y in m[w]) void 0 === s[w][y] && (s[w][y] = m[w][y]);

      var x = this;

      if (x.params = s, x.originalParams = g, x.classNames = [], void 0 !== e && void 0 !== i && (e = i), (void 0 !== e || (e = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i)) && (x.$ = e, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function () {
        if (!x.params.breakpoints) return !1;
        var e,
            a = !1,
            t = [];

        for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && t.push(e);

        t.sort(function (e, a) {
          return parseInt(e, 10) > parseInt(a, 10);
        });

        for (var i = 0; i < t.length; i++) (e = t[i]) >= window.innerWidth && !a && (a = e);

        return a || "max";
      }, x.setBreakpoint = function () {
        var e = x.getActiveBreakpoint();

        if (e && x.currentBreakpoint !== e) {
          var a = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
              t = x.params.loop && a.slidesPerView !== x.params.slidesPerView;

          for (var i in a) x.params[i] = a[i];

          x.currentBreakpoint = e, t && x.destroyLoop && x.reLoop(!0);
        }
      }, x.params.breakpoints && x.setBreakpoint(), x.container = e(a), 0 !== x.container.length)) {
        if (x.container.length > 1) {
          var b = [];
          return x.container.each(function () {
            b.push(new t(this, s));
          }), b;
        }

        x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push(x.params.containerModifierClass + x.params.direction), x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"), x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect), "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, void 0 === h && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = e(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function () {
          return "horizontal" === x.params.direction;
        }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"), x.device.android && x.classNames.push(x.params.containerModifierClass + "android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function () {
          x.params.allowSwipeToNext = !1, !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor();
        }, x.lockSwipeToPrev = function () {
          x.params.allowSwipeToPrev = !1, !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor();
        }, x.lockSwipes = function () {
          x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1, x.params.grabCursor && x.unsetGrabCursor();
        }, x.unlockSwipeToNext = function () {
          x.params.allowSwipeToNext = !0, !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor();
        }, x.unlockSwipeToPrev = function () {
          x.params.allowSwipeToPrev = !0, !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor();
        }, x.unlockSwipes = function () {
          x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0, x.params.grabCursor && x.setGrabCursor();
        }, x.setGrabCursor = function (e) {
          x.container[0].style.cursor = "move", x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", x.container[0].style.cursor = e ? "grabbing" : "grab";
        }, x.unsetGrabCursor = function () {
          x.container[0].style.cursor = "";
        }, x.params.grabCursor && x.setGrabCursor(), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function (e, a, t, i, s, r) {
          function n() {
            r && r();
          }

          var o;
          e.complete && s ? n() : a ? ((o = new window.Image()).onload = n, o.onerror = n, i && (o.sizes = i), t && (o.srcset = t), a && (o.src = a)) : n();
        }, x.preloadImages = function () {
          function e() {
            null != x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)));
          }

          x.imagesToLoad = x.container.find("img");

          for (var a = 0; a < x.imagesToLoad.length; a++) x.loadImage(x.imagesToLoad[a], x.imagesToLoad[a].currentSrc || x.imagesToLoad[a].getAttribute("src"), x.imagesToLoad[a].srcset || x.imagesToLoad[a].getAttribute("srcset"), x.imagesToLoad[a].sizes || x.imagesToLoad[a].getAttribute("sizes"), !0, e);
        }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function () {
          return void 0 === x.autoplayTimeoutId && !!x.params.autoplay && !x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void n());
        }, x.stopAutoplay = function (e) {
          x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x));
        }, x.pauseAutoplay = function (e) {
          x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, n()) : x.wrapper.transitionEnd(function () {
            x && (x.autoplayPaused = !1, x.autoplaying ? n() : x.stopAutoplay());
          }));
        }, x.minTranslate = function () {
          return -x.snapGrid[0];
        }, x.maxTranslate = function () {
          return -x.snapGrid[x.snapGrid.length - 1];
        }, x.updateAutoHeight = function () {
          var e,
              a = [],
              t = 0;
          if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1) for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
            var i = x.activeIndex + e;
            if (i > x.slides.length) break;
            a.push(x.slides.eq(i)[0]);
          } else a.push(x.slides.eq(x.activeIndex)[0]);

          for (e = 0; e < a.length; e++) if (void 0 !== a[e]) {
            var s = a[e].offsetHeight;
            t = s > t ? s : t;
          }

          t && x.wrapper.css("height", t + "px");
        }, x.updateContainerSize = function () {
          var e, a;
          e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth, a = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === a && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), a = a - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = a, x.size = x.isHorizontal() ? x.width : x.height);
        }, x.updateSlidesSize = function () {
          x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];
          var e,
              a = x.params.spaceBetween,
              t = -x.params.slidesOffsetBefore,
              i = 0,
              s = 0;

          if (void 0 !== x.size) {
            var n;
            "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * x.size), x.virtualSize = -a, x.rtl ? x.slides.css({
              marginLeft: "",
              marginTop: ""
            }) : x.slides.css({
              marginRight: "",
              marginBottom: ""
            }), x.params.slidesPerColumn > 1 && (n = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (n = Math.max(n, x.params.slidesPerView * x.params.slidesPerColumn)));
            var o,
                l,
                d = x.params.slidesPerColumn,
                p = n / d,
                u = p - (x.params.slidesPerColumn * p - x.slides.length);

            for (e = 0; e < x.slides.length; e++) {
              o = 0;
              var c,
                  m,
                  h,
                  g = x.slides.eq(e);
              if (x.params.slidesPerColumn > 1) "column" === x.params.slidesPerColumnFill ? (h = e - (m = Math.floor(e / d)) * d, (m > u || m === u && h === d - 1) && ++h >= d && (h = 0, m++), c = m + h * n / d, g.css({
                "-webkit-box-ordinal-group": c,
                "-moz-box-ordinal-group": c,
                "-ms-flex-order": c,
                "-webkit-order": c,
                order: c
              })) : m = e - (h = Math.floor(e / p)) * p, g.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h);
              "none" !== g.css("display") && ("auto" === x.params.slidesPerView ? (o = x.isHorizontal() ? g.outerWidth(!0) : g.outerHeight(!0), x.params.roundLengths && (o = r(o))) : (o = (x.size - (x.params.slidesPerView - 1) * a) / x.params.slidesPerView, x.params.roundLengths && (o = r(o)), x.isHorizontal() ? x.slides[e].style.width = o + "px" : x.slides[e].style.height = o + "px"), x.slides[e].swiperSlideSize = o, x.slidesSizesGrid.push(o), x.params.centeredSlides ? (t = t + o / 2 + i / 2 + a, 0 === i && 0 !== e && (t = t - x.size / 2 - a), 0 === e && (t = t - x.size / 2 - a), Math.abs(t) < .001 && (t = 0), s % x.params.slidesPerGroup == 0 && x.snapGrid.push(t), x.slidesGrid.push(t)) : (s % x.params.slidesPerGroup == 0 && x.snapGrid.push(t), x.slidesGrid.push(t), t = t + o + a), x.virtualSize += o + a, i = o, s++);
            }

            if (x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter, x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
              width: x.virtualSize + x.params.spaceBetween + "px"
            }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
              width: x.virtualSize + x.params.spaceBetween + "px"
            }) : x.wrapper.css({
              height: x.virtualSize + x.params.spaceBetween + "px"
            })), x.params.slidesPerColumn > 1 && (x.virtualSize = (o + x.params.spaceBetween) * n, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({
              width: x.virtualSize + x.params.spaceBetween + "px"
            }) : x.wrapper.css({
              height: x.virtualSize + x.params.spaceBetween + "px"
            }), x.params.centeredSlides)) {
              for (l = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && l.push(x.snapGrid[e]);

              x.snapGrid = l;
            }

            if (!x.params.centeredSlides) {
              for (l = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && l.push(x.snapGrid[e]);

              x.snapGrid = l, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size);
            }

            0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
              marginLeft: a + "px"
            }) : x.slides.css({
              marginRight: a + "px"
            }) : x.slides.css({
              marginBottom: a + "px"
            })), x.params.watchSlidesProgress && x.updateSlidesOffset();
          }
        }, x.updateSlidesOffset = function () {
          for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop;
        }, x.currentSlidesPerView = function () {
          var e,
              a,
              t = 1;

          if (x.params.centeredSlides) {
            var i,
                s = x.slides[x.activeIndex].swiperSlideSize;

            for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slides[e] && !i && (t++, (s += x.slides[e].swiperSlideSize) > x.size && (i = !0));

            for (a = x.activeIndex - 1; a >= 0; a--) x.slides[a] && !i && (t++, (s += x.slides[a].swiperSlideSize) > x.size && (i = !0));
          } else for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && t++;

          return t;
        }, x.updateSlidesProgress = function (e) {
          if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
            void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
            var a = -e;
            x.rtl && (a = e), x.slides.removeClass(x.params.slideVisibleClass);

            for (var t = 0; t < x.slides.length; t++) {
              var i = x.slides[t],
                  s = (a + (x.params.centeredSlides ? x.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + x.params.spaceBetween);

              if (x.params.watchSlidesVisibility) {
                var r = -(a - i.swiperSlideOffset),
                    n = r + x.slidesSizesGrid[t];
                (r >= 0 && r < x.size || n > 0 && n <= x.size || r <= 0 && n >= x.size) && x.slides.eq(t).addClass(x.params.slideVisibleClass);
              }

              i.progress = x.rtl ? -s : s;
            }
          }
        }, x.updateProgress = function (e) {
          void 0 === e && (e = x.translate || 0);
          var a = x.maxTranslate() - x.minTranslate(),
              t = x.isBeginning,
              i = x.isEnd;
          0 === a ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / a, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !t && x.emit("onReachBeginning", x), x.isEnd && !i && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress);
        }, x.updateActiveIndex = function () {
          var e,
              a,
              t,
              i = x.rtl ? x.translate : -x.translate;

          for (a = 0; a < x.slidesGrid.length; a++) void 0 !== x.slidesGrid[a + 1] ? i >= x.slidesGrid[a] && i < x.slidesGrid[a + 1] - (x.slidesGrid[a + 1] - x.slidesGrid[a]) / 2 ? e = a : i >= x.slidesGrid[a] && i < x.slidesGrid[a + 1] && (e = a + 1) : i >= x.slidesGrid[a] && (e = a);

          x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (t = Math.floor(e / x.params.slidesPerGroup)) >= x.snapGrid.length && (t = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = t, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses(), x.updateRealIndex());
        }, x.updateRealIndex = function () {
          x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10);
        }, x.updateClasses = function () {
          x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
          var a = x.slides.eq(x.activeIndex);
          a.addClass(x.params.slideActiveClass), s.loop && (a.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
          var t = a.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
          x.params.loop && 0 === t.length && (t = x.slides.eq(0)).addClass(x.params.slideNextClass);
          var i = a.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);

          if (x.params.loop && 0 === i.length && (i = x.slides.eq(-1)).addClass(x.params.slidePrevClass), s.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), i.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && x.paginationContainer.length > 0) {
            var r,
                n = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;

            if (x.params.loop ? ((r = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup)) > x.slides.length - 1 - 2 * x.loopedSlides && (r -= x.slides.length - 2 * x.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== x.params.paginationType && (r = n + r)) : r = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function () {
              e(this).index() === r && e(this).addClass(x.params.bulletActiveClass);
            }) : x.bullets.eq(r).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(r + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(n)), "progress" === x.params.paginationType) {
              var o = (r + 1) / n,
                  l = o,
                  d = 1;
              x.isHorizontal() || (d = o, l = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + d + ")").transition(x.params.speed);
            }

            "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, r + 1, n)), x.emit("onPaginationRendered", x, x.paginationContainer[0]));
          }

          x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))));
        }, x.updatePagination = function () {
          if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
            var e = "";

            if ("bullets" === x.params.paginationType) {
              for (var a = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, t = 0; t < a; t++) e += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, t, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";

              x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination();
            }

            "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0]);
          }
        }, x.update = function (e) {
          function a() {
            x.rtl, x.translate, t = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(t), x.updateActiveIndex(), x.updateClasses();
          }

          var t;
          x && (x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), e ? (x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (a(), x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || a()) : x.params.autoHeight && x.updateAutoHeight());
        }, x.onResize = function (e) {
          x.params.onBeforeResize && x.params.onBeforeResize(x), x.params.breakpoints && x.setBreakpoint();
          var a = x.params.allowSwipeToPrev,
              t = x.params.allowSwipeToNext;
          x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
          var i = !1;

          if (x.params.freeMode) {
            var s = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
            x.setWrapperTranslate(s), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight();
          } else x.updateClasses(), i = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);

          x.params.lazyLoading && !i && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = a, x.params.allowSwipeToNext = t, x.params.onAfterResize && x.params.onAfterResize(x);
        }, x.touchEventsDesktop = {
          start: "mousedown",
          move: "mousemove",
          end: "mouseup"
        }, window.navigator.pointerEnabled ? x.touchEventsDesktop = {
          start: "pointerdown",
          move: "pointermove",
          end: "pointerup"
        } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
          start: "MSPointerDown",
          move: "MSPointerMove",
          end: "MSPointerUp"
        }), x.touchEvents = {
          start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
          move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
          end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
        }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function (e) {
          var a = e ? "off" : "on",
              t = e ? "removeEventListener" : "addEventListener",
              i = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
              r = x.support.touch ? i : document,
              n = !!x.params.nested;
          if (x.browser.ie) i[t](x.touchEvents.start, x.onTouchStart, !1), r[t](x.touchEvents.move, x.onTouchMove, n), r[t](x.touchEvents.end, x.onTouchEnd, !1);else {
            if (x.support.touch) {
              var o = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              i[t](x.touchEvents.start, x.onTouchStart, o), i[t](x.touchEvents.move, x.onTouchMove, n), i[t](x.touchEvents.end, x.onTouchEnd, o);
            }

            (s.simulateTouch && !x.device.ios && !x.device.android || s.simulateTouch && !x.support.touch && x.device.ios) && (i[t]("mousedown", x.onTouchStart, !1), document[t]("mousemove", x.onTouchMove, n), document[t]("mouseup", x.onTouchEnd, !1));
          }
          window[t]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[a]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[a]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[a]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[a]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[a]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[a]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && i[t]("click", x.preventClicks, !0);
        }, x.attachEvents = function () {
          x.initEvents();
        }, x.detachEvents = function () {
          x.initEvents(!0);
        }, x.allowClick = !0, x.preventClicks = function (e) {
          x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        }, x.onClickNext = function (e) {
          e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext();
        }, x.onClickPrev = function (e) {
          e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev();
        }, x.onClickIndex = function (a) {
          a.preventDefault();
          var t = e(this).index() * x.params.slidesPerGroup;
          x.params.loop && (t += x.loopedSlides), x.slideTo(t);
        }, x.updateClickedSlide = function (a) {
          var t = o(a, "." + x.params.slideClass),
              i = !1;
          if (t) for (var s = 0; s < x.slides.length; s++) x.slides[s] === t && (i = !0);
          if (!t || !i) return x.clickedSlide = void 0, void (x.clickedIndex = void 0);

          if (x.clickedSlide = t, x.clickedIndex = e(t).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
            var r,
                n = x.clickedIndex,
                l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;

            if (x.params.loop) {
              if (x.animating) return;
              r = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10), x.params.centeredSlides ? n < x.loopedSlides - l / 2 || n > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(), n = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                x.slideTo(n);
              }, 0)) : x.slideTo(n) : n > x.slides.length - l ? (x.fixLoop(), n = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                x.slideTo(n);
              }, 0)) : x.slideTo(n);
            } else x.slideTo(n);
          }
        };
        var T,
            S,
            C,
            z,
            M,
            E,
            P,
            I,
            k,
            L,
            D,
            H,
            B = "input, select, textarea, button, video",
            A = Date.now(),
            G = [];

        for (var O in x.animating = !1, x.touches = {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        }, x.onTouchStart = function (a) {
          if (a.originalEvent && (a = a.originalEvent), (D = "touchstart" === a.type) || !("which" in a) || 3 !== a.which) {
            if (x.params.noSwiping && o(a, "." + x.params.noSwipingClass)) return void (x.allowClick = !0);

            if (!x.params.swipeHandler || o(a, x.params.swipeHandler)) {
              var t = x.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                  i = x.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;

              if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && t <= x.params.iOSEdgeSwipeThreshold)) {
                if (T = !0, S = !1, C = !0, M = void 0, H = void 0, x.touches.startX = t, x.touches.startY = i, z = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (I = !1), "touchstart" !== a.type) {
                  var s = !0;
                  e(a.target).is(B) && (s = !1), document.activeElement && e(document.activeElement).is(B) && document.activeElement.blur(), s && a.preventDefault();
                }

                x.emit("onTouchStart", x, a);
              }
            }
          }
        }, x.onTouchMove = function (a) {
          if (a.originalEvent && (a = a.originalEvent), !D || "mousemove" !== a.type) {
            if (a.preventedByNestedSwiper) return x.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void (x.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
            if (x.params.onlyExternal) return x.allowClick = !1, void (T && (x.touches.startX = x.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, x.touches.startY = x.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, z = Date.now()));
            if (D && x.params.touchReleaseOnEdges && !x.params.loop) if (x.isHorizontal()) {
              if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return;
            } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;
            if (D && document.activeElement && a.target === document.activeElement && e(a.target).is(B)) return S = !0, void (x.allowClick = !1);

            if (C && x.emit("onTouchMove", x, a), !(a.targetTouches && a.targetTouches.length > 1)) {
              var t;
              if (x.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, x.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, void 0 === M) x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? M = !1 : (t = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, M = x.isHorizontal() ? t > x.params.touchAngle : 90 - t > x.params.touchAngle);

              if (M && x.emit("onTouchMoveOpposite", x, a), void 0 === H && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (H = !0)), T) {
                if (M) return void (T = !1);

                if (H) {
                  x.allowClick = !1, x.emit("onSliderMove", x, a), a.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && a.stopPropagation(), S || (s.loop && x.fixLoop(), P = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), L = !1, !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)), S = !0;
                  var i = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                  i *= x.params.touchRatio, x.rtl && (i = -i), x.swipeDirection = i > 0 ? "prev" : "next", E = i + P;
                  var r = !0;

                  if (i > 0 && E > x.minTranslate() ? (r = !1, x.params.resistance && (E = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + P + i, x.params.resistanceRatio))) : i < 0 && E < x.maxTranslate() && (r = !1, x.params.resistance && (E = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - P - i, x.params.resistanceRatio))), r && (a.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && E < P && (E = P), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && E > P && (E = P), x.params.threshold > 0) {
                    if (!(Math.abs(i) > x.params.threshold || I)) return void (E = P);
                    if (!I) return I = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, E = P, void (x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY);
                  }

                  x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === G.length && G.push({
                    position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                    time: z
                  }), G.push({
                    position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                    time: new window.Date().getTime()
                  })), x.updateProgress(E), x.setWrapperTranslate(E));
                }
              }
            }
          }
        }, x.onTouchEnd = function (a) {
          if (a.originalEvent && (a = a.originalEvent), C && x.emit("onTouchEnd", x, a), C = !1, T) {
            x.params.grabCursor && S && T && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
            var t,
                i = Date.now(),
                s = i - z;
            if (x.allowClick && (x.updateClickedSlide(a), x.emit("onTap", x, a), s < 300 && i - A > 300 && (k && clearTimeout(k), k = setTimeout(function () {
              x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(a.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, a));
            }, 300)), s < 300 && i - A < 300 && (k && clearTimeout(k), x.emit("onDoubleTap", x, a))), A = Date.now(), setTimeout(function () {
              x && (x.allowClick = !0);
            }, 0), !T || !S || !x.swipeDirection || 0 === x.touches.diff || E === P) return void (T = S = !1);

            if (T = S = !1, t = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -E, x.params.freeMode) {
              if (t < -x.minTranslate()) return void x.slideTo(x.activeIndex);
              if (t > -x.maxTranslate()) return void (x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));

              if (x.params.freeModeMomentum) {
                if (G.length > 1) {
                  var r = G.pop(),
                      n = G.pop(),
                      o = r.position - n.position,
                      l = r.time - n.time;
                  x.velocity = o / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (l > 150 || new window.Date().getTime() - r.time > 300) && (x.velocity = 0);
                } else x.velocity = 0;

                x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio, G.length = 0;
                var d = 1e3 * x.params.freeModeMomentumRatio,
                    p = x.velocity * d,
                    u = x.translate + p;
                x.rtl && (u = -u);
                var c,
                    m = !1,
                    h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                if (u < x.maxTranslate()) x.params.freeModeMomentumBounce ? (u + x.maxTranslate() < -h && (u = x.maxTranslate() - h), c = x.maxTranslate(), m = !0, L = !0) : u = x.maxTranslate();else if (u > x.minTranslate()) x.params.freeModeMomentumBounce ? (u - x.minTranslate() > h && (u = x.minTranslate() + h), c = x.minTranslate(), m = !0, L = !0) : u = x.minTranslate();else if (x.params.freeModeSticky) {
                  var g,
                      f = 0;

                  for (f = 0; f < x.snapGrid.length; f += 1) if (x.snapGrid[f] > -u) {
                    g = f;
                    break;
                  }

                  u = Math.abs(x.snapGrid[g] - u) < Math.abs(x.snapGrid[g - 1] - u) || "next" === x.swipeDirection ? x.snapGrid[g] : x.snapGrid[g - 1], x.rtl || (u = -u);
                }
                if (0 !== x.velocity) d = x.rtl ? Math.abs((-u - x.translate) / x.velocity) : Math.abs((u - x.translate) / x.velocity);else if (x.params.freeModeSticky) return void x.slideReset();
                x.params.freeModeMomentumBounce && m ? (x.updateProgress(c), x.setWrapperTransition(d), x.setWrapperTranslate(u), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function () {
                  x && L && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(c), x.wrapper.transitionEnd(function () {
                    x && x.onTransitionEnd();
                  }));
                })) : x.velocity ? (x.updateProgress(u), x.setWrapperTransition(d), x.setWrapperTranslate(u), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                  x && x.onTransitionEnd();
                }))) : x.updateProgress(u), x.updateActiveIndex();
              }

              return void ((!x.params.freeModeMomentum || s >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()));
            }

            var v,
                w = 0,
                y = x.slidesSizesGrid[0];

            for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup) void 0 !== x.slidesGrid[v + x.params.slidesPerGroup] ? t >= x.slidesGrid[v] && t < x.slidesGrid[v + x.params.slidesPerGroup] && (w = v, y = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : t >= x.slidesGrid[v] && (w = v, y = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);

            var b = (t - x.slidesGrid[w]) / y;

            if (s > x.params.longSwipesMs) {
              if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
              "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(w + x.params.slidesPerGroup) : x.slideTo(w)), "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(w + x.params.slidesPerGroup) : x.slideTo(w));
            } else {
              if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
              "next" === x.swipeDirection && x.slideTo(w + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(w);
            }
          }
        }, x._slideTo = function (e, a) {
          return x.slideTo(e, a, !0, !0);
        }, x.slideTo = function (e, a, t, i) {
          void 0 === t && (t = !0), void 0 === e && (e = 0), e < 0 && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
          var s = -x.snapGrid[x.snapIndex];
          if (x.params.autoplay && x.autoplaying && (i || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(a) : x.stopAutoplay()), x.updateProgress(s), x.params.normalizeSlideIndex) for (var r = 0; r < x.slidesGrid.length; r++) -Math.floor(100 * s) >= Math.floor(100 * x.slidesGrid[r]) && (e = r);
          return !(!x.params.allowSwipeToNext && s < x.translate && s < x.minTranslate() || !x.params.allowSwipeToPrev && s > x.translate && s > x.maxTranslate() && (x.activeIndex || 0) !== e || (void 0 === a && (a = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -s === x.translate || !x.rtl && s === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(s), 1) : (x.updateClasses(), x.onTransitionStart(t), 0 === a || x.browser.lteIE9 ? (x.setWrapperTranslate(s), x.setWrapperTransition(0), x.onTransitionEnd(t)) : (x.setWrapperTranslate(s), x.setWrapperTransition(a), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
            x && x.onTransitionEnd(t);
          }))), 0)));
        }, x.onTransitionStart = function (e) {
          void 0 === e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)));
        }, x.onTransitionEnd = function (e) {
          x.animating = !1, x.setWrapperTransition(0), void 0 === e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex), x.params.hashnav && x.hashnav && x.hashnav.setHash();
        }, x.slideNext = function (e, a, t) {
          return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex + x.params.slidesPerGroup, a, e, t)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, a, e, t);
        }, x._slideNext = function (e) {
          return x.slideNext(!0, e, !0);
        }, x.slidePrev = function (e, a, t) {
          return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex - 1, a, e, t)) : x.slideTo(x.activeIndex - 1, a, e, t);
        }, x._slidePrev = function (e) {
          return x.slidePrev(!0, e, !0);
        }, x.slideReset = function (e, a, t) {
          return x.slideTo(x.activeIndex, a, e);
        }, x.disableTouchControl = function () {
          return x.params.onlyExternal = !0, !0;
        }, x.enableTouchControl = function () {
          return x.params.onlyExternal = !1, !0;
        }, x.setWrapperTransition = function (e, a) {
          x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, a), x.emit("onSetTransition", x, e);
        }, x.setWrapperTranslate = function (e, a, t) {
          var i = 0,
              s = 0;
          x.isHorizontal() ? i = x.rtl ? -e : e : s = e, x.params.roundLengths && (i = r(i), s = r(s)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + i + "px, " + s + "px, 0px)") : x.wrapper.transform("translate(" + i + "px, " + s + "px)")), x.translate = x.isHorizontal() ? i : s;
          var n = x.maxTranslate() - x.minTranslate();
          (0 === n ? 0 : (e - x.minTranslate()) / n) !== x.progress && x.updateProgress(e), a && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, t), x.emit("onSetTranslate", x, x.translate);
        }, x.getTranslate = function (e, a) {
          var t, i, s, r;
          return void 0 === a && (a = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((i = s.transform || s.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
            return e.replace(",", ".");
          }).join(", ")), r = new window.WebKitCSSMatrix("none" === i ? "" : i)) : t = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === a && (i = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (i = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), x.rtl && i && (i = -i), i || 0);
        }, x.getWrapperTranslate = function (e) {
          return void 0 === e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e);
        }, x.observers = [], x.initObservers = function () {
          if (x.params.observeParents) for (var e = x.container.parents(), a = 0; a < e.length; a++) l(e[a]);
          l(x.container[0], {
            childList: !1
          }), l(x.wrapper[0], {
            attributes: !1
          });
        }, x.disconnectObservers = function () {
          for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();

          x.observers = [];
        }, x.createLoop = function () {
          x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
          var a = x.wrapper.children("." + x.params.slideClass);
          "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = a.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > a.length && (x.loopedSlides = a.length);
          var t,
              i = [],
              s = [];

          for (a.each(function (t, r) {
            var n = e(this);
            t < x.loopedSlides && s.push(r), t < a.length && t >= a.length - x.loopedSlides && i.push(r), n.attr("data-swiper-slide-index", t);
          }), t = 0; t < s.length; t++) x.wrapper.append(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));

          for (t = i.length - 1; t >= 0; t--) x.wrapper.prepend(e(i[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
        }, x.destroyLoop = function () {
          x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index");
        }, x.reLoop = function (e) {
          var a = x.activeIndex - x.loopedSlides;
          x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(a + x.loopedSlides, 0, !1);
        }, x.fixLoop = function () {
          var e;
          x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0));
        }, x.appendSlide = function (e) {
          if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length) for (var a = 0; a < e.length; a++) e[a] && x.wrapper.append(e[a]);else x.wrapper.append(e);
          x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0);
        }, x.prependSlide = function (e) {
          x.params.loop && x.destroyLoop();
          var a = x.activeIndex + 1;

          if ("object" == typeof e && e.length) {
            for (var t = 0; t < e.length; t++) e[t] && x.wrapper.prepend(e[t]);

            a = x.activeIndex + e.length;
          } else x.wrapper.prepend(e);

          x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(a, 0, !1);
        }, x.removeSlide = function (e) {
          x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
          var a,
              t = x.activeIndex;

          if ("object" == typeof e && e.length) {
            for (var i = 0; i < e.length; i++) a = e[i], x.slides[a] && x.slides.eq(a).remove(), a < t && t--;

            t = Math.max(t, 0);
          } else a = e, x.slides[a] && x.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);

          x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(t + x.loopedSlides, 0, !1) : x.slideTo(t, 0, !1);
        }, x.removeAllSlides = function () {
          for (var e = [], a = 0; a < x.slides.length; a++) e.push(a);

          x.removeSlide(e);
        }, x.effects = {
          fade: {
            setTranslate: function () {
              for (var e = 0; e < x.slides.length; e++) {
                var a = x.slides.eq(e),
                    t = -a[0].swiperSlideOffset;
                x.params.virtualTranslate || (t -= x.translate);
                var i = 0;
                x.isHorizontal() || (i = t, t = 0);
                var s = x.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                a.css({
                  opacity: s
                }).transform("translate3d(" + t + "px, " + i + "px, 0px)");
              }
            },
            setTransition: function (e) {
              if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                var a = !1;
                x.slides.transitionEnd(function () {
                  if (!a && x) {
                    a = !0, x.animating = !1;

                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) x.wrapper.trigger(e[t]);
                  }
                });
              }
            }
          },
          flip: {
            setTranslate: function () {
              for (var a = 0; a < x.slides.length; a++) {
                var t = x.slides.eq(a),
                    i = t[0].progress;
                x.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                var s = -180 * i,
                    r = 0,
                    n = -t[0].swiperSlideOffset,
                    o = 0;

                if (x.isHorizontal() ? x.rtl && (s = -s) : (o = n, n = 0, r = -s, s = 0), t[0].style.zIndex = -Math.abs(Math.round(i)) + x.slides.length, x.params.flip.slideShadows) {
                  var l = x.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                      d = x.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                  0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), t.append(l)), 0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(d)), l.length && (l[0].style.opacity = Math.max(-i, 0)), d.length && (d[0].style.opacity = Math.max(i, 0));
                }

                t.transform("translate3d(" + n + "px, " + o + "px, 0px) rotateX(" + r + "deg) rotateY(" + s + "deg)");
              }
            },
            setTransition: function (a) {
              if (x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), x.params.virtualTranslate && 0 !== a) {
                var t = !1;
                x.slides.eq(x.activeIndex).transitionEnd(function () {
                  if (!t && x && e(this).hasClass(x.params.slideActiveClass)) {
                    t = !0, x.animating = !1;

                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < a.length; i++) x.wrapper.trigger(a[i]);
                  }
                });
              }
            }
          },
          cube: {
            setTranslate: function () {
              var a,
                  t = 0;
              x.params.cube.shadow && (x.isHorizontal() ? (0 === (a = x.wrapper.find(".swiper-cube-shadow")).length && (a = e('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(a)), a.css({
                height: x.width + "px"
              })) : 0 === (a = x.container.find(".swiper-cube-shadow")).length && (a = e('<div class="swiper-cube-shadow"></div>'), x.container.append(a)));

              for (var i = 0; i < x.slides.length; i++) {
                var s = x.slides.eq(i),
                    r = 90 * i,
                    n = Math.floor(r / 360);
                x.rtl && (r = -r, n = Math.floor(-r / 360));
                var o = Math.max(Math.min(s[0].progress, 1), -1),
                    l = 0,
                    d = 0,
                    p = 0;
                i % 4 == 0 ? (l = 4 * -n * x.size, p = 0) : (i - 1) % 4 == 0 ? (l = 0, p = 4 * -n * x.size) : (i - 2) % 4 == 0 ? (l = x.size + 4 * n * x.size, p = x.size) : (i - 3) % 4 == 0 && (l = -x.size, p = 3 * x.size + 4 * x.size * n), x.rtl && (l = -l), x.isHorizontal() || (d = l, l = 0);
                var u = "rotateX(" + (x.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (x.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + d + "px, " + p + "px)";

                if (o <= 1 && o > -1 && (t = 90 * i + 90 * o, x.rtl && (t = 90 * -i - 90 * o)), s.transform(u), x.params.cube.slideShadows) {
                  var c = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                      m = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                  0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), s.append(c)), 0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
                }
              }

              if (x.wrapper.css({
                "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                "transform-origin": "50% 50% -" + x.size / 2 + "px"
              }), x.params.cube.shadow) if (x.isHorizontal()) a.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");else {
                var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                    g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                    f = x.params.cube.shadowScale,
                    v = x.params.cube.shadowScale / g,
                    w = x.params.cube.shadowOffset;
                a.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + w) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)");
              }
              var y = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
              x.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (x.isHorizontal() ? 0 : t) + "deg) rotateY(" + (x.isHorizontal() ? -t : 0) + "deg)");
            },
            setTransition: function (e) {
              x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e);
            }
          },
          coverflow: {
            setTranslate: function () {
              for (var a = x.translate, t = x.isHorizontal() ? -a + x.width / 2 : -a + x.height / 2, i = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, s = x.params.coverflow.depth, r = 0, n = x.slides.length; r < n; r++) {
                var o = x.slides.eq(r),
                    l = x.slidesSizesGrid[r],
                    d = (t - o[0].swiperSlideOffset - l / 2) / l * x.params.coverflow.modifier,
                    p = x.isHorizontal() ? i * d : 0,
                    u = x.isHorizontal() ? 0 : i * d,
                    c = -s * Math.abs(d),
                    m = x.isHorizontal() ? 0 : x.params.coverflow.stretch * d,
                    h = x.isHorizontal() ? x.params.coverflow.stretch * d : 0;
                Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(c) < .001 && (c = 0), Math.abs(p) < .001 && (p = 0), Math.abs(u) < .001 && (u = 0);
                var g = "translate3d(" + h + "px," + m + "px," + c + "px)  rotateX(" + u + "deg) rotateY(" + p + "deg)";

                if (o.transform(g), o[0].style.zIndex = 1 - Math.abs(Math.round(d)), x.params.coverflow.slideShadows) {
                  var f = x.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                      v = x.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                  0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), o.append(f)), 0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(v)), f.length && (f[0].style.opacity = d > 0 ? d : 0), v.length && (v[0].style.opacity = -d > 0 ? -d : 0);
                }
              }

              x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = t + "px 50%");
            },
            setTransition: function (e) {
              x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            }
          }
        }, x.lazy = {
          initialImageLoaded: !1,
          loadImageInSlide: function (a, t) {
            if (void 0 !== a && (void 0 === t && (t = !0), 0 !== x.slides.length)) {
              var i = x.slides.eq(a),
                  s = i.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
              !i.hasClass(x.params.lazyLoadingClass) || i.hasClass(x.params.lazyStatusLoadedClass) || i.hasClass(x.params.lazyStatusLoadingClass) || (s = s.add(i[0])), 0 !== s.length && s.each(function () {
                var a = e(this);
                a.addClass(x.params.lazyStatusLoadingClass);
                var s = a.attr("data-background"),
                    r = a.attr("data-src"),
                    n = a.attr("data-srcset"),
                    o = a.attr("data-sizes");
                x.loadImage(a[0], r || s, n, o, !1, function () {
                  if (null != x && x) {
                    if (s ? (a.css("background-image", 'url("' + s + '")'), a.removeAttr("data-background")) : (n && (a.attr("srcset", n), a.removeAttr("data-srcset")), o && (a.attr("sizes", o), a.removeAttr("data-sizes")), r && (a.attr("src", r), a.removeAttr("data-src"))), a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), i.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && t) {
                      var e = i.attr("data-swiper-slide-index");

                      if (i.hasClass(x.params.slideDuplicateClass)) {
                        var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                        x.lazy.loadImageInSlide(l.index(), !1);
                      } else {
                        var d = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                        x.lazy.loadImageInSlide(d.index(), !1);
                      }
                    }

                    x.emit("onLazyImageReady", x, i[0], a[0]);
                  }
                }), x.emit("onLazyImageLoad", x, i[0], a[0]);
              });
            }
          },
          load: function () {
            var a,
                t = x.params.slidesPerView;
            if ("auto" === t && (t = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function () {
              x.lazy.loadImageInSlide(e(this).index());
            });else if (t > 1) for (a = x.activeIndex; a < x.activeIndex + t; a++) x.slides[a] && x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);
            if (x.params.lazyLoadingInPrevNext) if (t > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
              var i = x.params.lazyLoadingInPrevNextAmount,
                  s = t,
                  r = Math.min(x.activeIndex + s + Math.max(i, s), x.slides.length),
                  n = Math.max(x.activeIndex - Math.max(s, i), 0);

              for (a = x.activeIndex + t; a < r; a++) x.slides[a] && x.lazy.loadImageInSlide(a);

              for (a = n; a < x.activeIndex; a++) x.slides[a] && x.lazy.loadImageInSlide(a);
            } else {
              var o = x.wrapper.children("." + x.params.slideNextClass);
              o.length > 0 && x.lazy.loadImageInSlide(o.index());
              var l = x.wrapper.children("." + x.params.slidePrevClass);
              l.length > 0 && x.lazy.loadImageInSlide(l.index());
            }
          },
          onTransitionStart: function () {
            x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load();
          },
          onTransitionEnd: function () {
            x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load();
          }
        }, x.scrollbar = {
          isTouched: !1,
          setDragPosition: function (e) {
            var a = x.scrollbar,
                t = (x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.track.offset()[x.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                i = -x.minTranslate() * a.moveDivider,
                s = -x.maxTranslate() * a.moveDivider;
            t < i ? t = i : t > s && (t = s), t = -t / a.moveDivider, x.updateProgress(t), x.setWrapperTranslate(t, !0);
          },
          dragStart: function (e) {
            var a = x.scrollbar;
            a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), x.params.scrollbarHide && a.track.css("opacity", 1), x.wrapper.transition(100), a.drag.transition(100), x.emit("onScrollbarDragStart", x);
          },
          dragMove: function (e) {
            var a = x.scrollbar;
            a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), x.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), x.emit("onScrollbarDragMove", x));
          },
          dragEnd: function (e) {
            var a = x.scrollbar;
            a.isTouched && (a.isTouched = !1, x.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
              a.track.css("opacity", 0), a.track.transition(400);
            }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset());
          },
          draggableEvents: !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop,
          enableDraggable: function () {
            var a = x.scrollbar,
                t = x.support.touch ? a.track : document;
            e(a.track).on(a.draggableEvents.start, a.dragStart), e(t).on(a.draggableEvents.move, a.dragMove), e(t).on(a.draggableEvents.end, a.dragEnd);
          },
          disableDraggable: function () {
            var a = x.scrollbar,
                t = x.support.touch ? a.track : document;
            e(a.track).off(a.draggableEvents.start, a.dragStart), e(t).off(a.draggableEvents.move, a.dragMove), e(t).off(a.draggableEvents.end, a.dragEnd);
          },
          set: function () {
            if (x.params.scrollbar) {
              var a = x.scrollbar;
              a.track = e(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && a.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (a.track = x.container.find(x.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = x.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = x.size / x.virtualSize, a.moveDivider = a.divider * (a.trackSize / x.size), a.dragSize = a.trackSize * a.divider, x.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", x.params.scrollbarHide && (a.track[0].style.opacity = 0);
            }
          },
          setTranslate: function () {
            if (x.params.scrollbar) {
              var e,
                  a = x.scrollbar,
                  t = (x.translate, a.dragSize);
              e = (a.trackSize - a.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e) > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (x.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), x.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
                a.track[0].style.opacity = 0, a.track.transition(400);
              }, 1e3));
            }
          },
          setTransition: function (e) {
            x.params.scrollbar && x.scrollbar.drag.transition(e);
          }
        }, x.controller = {
          LinearSpline: function (e, a) {
            var t,
                i,
                s = function () {
              var e, a, t;
              return function (i, s) {
                for (a = -1, e = i.length; e - a > 1;) i[t = e + a >> 1] <= s ? a = t : e = t;

                return e;
              };
            }();

            this.x = e, this.y = a, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function (e) {
              return e ? (i = s(this.x, e), t = i - 1, (e - this.x[t]) * (this.y[i] - this.y[t]) / (this.x[i] - this.x[t]) + this.y[t]) : 0;
            };
          },
          getInterpolateFunction: function (e) {
            x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid));
          },
          setTranslate: function (e, a) {
            function i(a) {
              e = a.rtl && "horizontal" === a.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(a), r = -x.controller.spline.interpolate(-e)), r && "container" !== x.params.controlBy || (s = (a.maxTranslate() - a.minTranslate()) / (x.maxTranslate() - x.minTranslate()), r = (e - x.minTranslate()) * s + a.minTranslate()), x.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, x), a.updateActiveIndex();
            }

            var s,
                r,
                n = x.params.control;
            if (Array.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && i(n[o]);else n instanceof t && a !== n && i(n);
          },
          setTransition: function (e, a) {
            function i(a) {
              a.setWrapperTransition(e, x), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
                r && (a.params.loop && "slide" === x.params.controlBy && a.fixLoop(), a.onTransitionEnd());
              }));
            }

            var s,
                r = x.params.control;
            if (Array.isArray(r)) for (s = 0; s < r.length; s++) r[s] !== a && r[s] instanceof t && i(r[s]);else r instanceof t && a !== r && i(r);
          }
        }, x.hashnav = {
          onHashCange: function (e, a) {
            var t = document.location.hash.replace("#", "");
            t !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + t + '"]').index());
          },
          attachEvents: function (a) {
            var t = a ? "off" : "on";
            e(window)[t]("hashchange", x.hashnav.onHashCange);
          },
          setHash: function () {
            if (x.hashnav.initialized && x.params.hashnav) if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || !1);else {
              var e = x.slides.eq(x.activeIndex),
                  a = e.attr("data-hash") || e.attr("data-history");
              document.location.hash = a || "";
            }
          },
          init: function () {
            if (x.params.hashnav && !x.params.history) {
              x.hashnav.initialized = !0;
              var e = document.location.hash.replace("#", "");
              if (e) for (var a = 0, t = x.slides.length; a < t; a++) {
                var i = x.slides.eq(a);

                if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(x.params.slideDuplicateClass)) {
                  var s = i.index();
                  x.slideTo(s, 0, x.params.runCallbacksOnInit, !0);
                }
              }
              x.params.hashnavWatchState && x.hashnav.attachEvents();
            }
          },
          destroy: function () {
            x.params.hashnavWatchState && x.hashnav.attachEvents(!0);
          }
        }, x.history = {
          init: function () {
            if (x.params.history) {
              if (!window.history || !window.history.pushState) return x.params.history = !1, void (x.params.hashnav = !0);
              x.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
            }
          },
          setHistoryPopState: function () {
            x.history.paths = x.history.getPathValues(), x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1);
          },
          getPathValues: function () {
            var e = window.location.pathname.slice(1).split("/"),
                a = e.length;
            return {
              key: e[a - 2],
              value: e[a - 1]
            };
          },
          setHistory: function (e, a) {
            if (x.history.initialized && x.params.history) {
              var t = x.slides.eq(a),
                  i = this.slugify(t.attr("data-history"));
              window.location.pathname.includes(e) || (i = e + "/" + i), x.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i);
            }
          },
          slugify: function (e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
          },
          scrollToSlide: function (e, a, t) {
            if (a) for (var i = 0, s = x.slides.length; i < s; i++) {
              var r = x.slides.eq(i);

              if (this.slugify(r.attr("data-history")) === a && !r.hasClass(x.params.slideDuplicateClass)) {
                var n = r.index();
                x.slideTo(n, e, t);
              }
            } else x.slideTo(0, e, t);
          }
        }, x.disableKeyboardControl = function () {
          x.params.keyboardControl = !1, e(document).off("keydown", d);
        }, x.enableKeyboardControl = function () {
          x.params.keyboardControl = !0, e(document).on("keydown", d);
        }, x.mousewheel = {
          event: !1,
          lastScrollTime: new window.Date().getTime()
        }, x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var e = "onwheel" in document;

          if (!e) {
            var a = document.createElement("div");
            a.setAttribute("onwheel", "return;"), e = "function" == typeof a.onwheel;
          }

          return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e;
        }() ? "wheel" : "mousewheel"), x.disableMousewheelControl = function () {
          if (!x.mousewheel.event) return !1;
          var a = x.container;
          return "container" !== x.params.mousewheelEventsTarged && (a = e(x.params.mousewheelEventsTarged)), a.off(x.mousewheel.event, p), x.params.mousewheelControl = !1, !0;
        }, x.enableMousewheelControl = function () {
          if (!x.mousewheel.event) return !1;
          var a = x.container;
          return "container" !== x.params.mousewheelEventsTarged && (a = e(x.params.mousewheelEventsTarged)), a.on(x.mousewheel.event, p), x.params.mousewheelControl = !0, !0;
        }, x.parallax = {
          setTranslate: function () {
            x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              u(this, x.progress);
            }), x.slides.each(function () {
              var a = e(this);
              a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                u(this, Math.min(Math.max(a[0].progress, -1), 1));
              });
            });
          },
          setTransition: function (a) {
            void 0 === a && (a = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var t = e(this),
                  i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
              0 === a && (i = 0), t.transition(i);
            });
          }
        }, x.zoom = {
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            slide: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            image: void 0,
            imageWrap: void 0,
            zoomMax: x.params.zoomMax
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          },
          getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var a = e.targetTouches[0].pageX,
                t = e.targetTouches[0].pageY,
                i = e.targetTouches[1].pageX,
                s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - a, 2) + Math.pow(s - t, 2));
          },
          onGestureStart: function (a) {
            var t = x.zoom;

            if (!x.support.gestures) {
              if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2) return;
              t.gesture.scaleStart = t.getDistanceBetweenTouches(a);
            }

            t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this), 0 === t.gesture.slide.length && (t.gesture.slide = x.slides.eq(x.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + x.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), t.isScaling = !0) : t.gesture.image = void 0;
          },
          onGestureChange: function (e) {
            var a = x.zoom;

            if (!x.support.gestures) {
              if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
              a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
            }

            a.gesture.image && 0 !== a.gesture.image.length && (x.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < x.params.zoomMin && (a.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
          },
          onGestureEnd: function (e) {
            var a = x.zoom;
            !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), x.params.zoomMin), a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0));
          },
          onTouchStart: function (e, a) {
            var t = e.zoom;
            t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY));
          },
          onTouchMove: function (e) {
            var a = x.zoom;

            if (a.gesture.image && 0 !== a.gesture.image.length && (x.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
              a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = x.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = x.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), x.rtl && (a.image.startX = -a.image.startX), x.rtl && (a.image.startY = -a.image.startY));
              var t = a.image.width * a.scale,
                  i = a.image.height * a.scale;

              if (!(t < a.gesture.slideWidth && i < a.gesture.slideHeight)) {
                if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - i / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                  if (x.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void (a.image.isTouched = !1);
                  if (!x.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void (a.image.isTouched = !1);
                }

                e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
              }
            }
          },
          onTouchEnd: function (e, a) {
            var t = e.zoom;

            if (t.gesture.image && 0 !== t.gesture.image.length) {
              if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void (t.image.isMoved = !1);
              t.image.isTouched = !1, t.image.isMoved = !1;
              var i = 300,
                  s = 300,
                  r = t.velocity.x * i,
                  n = t.image.currentX + r,
                  o = t.velocity.y * s,
                  l = t.image.currentY + o;
              0 !== t.velocity.x && (i = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (s = Math.abs((l - t.image.currentY) / t.velocity.y));
              var d = Math.max(i, s);
              t.image.currentX = n, t.image.currentY = l;
              var p = t.image.width * t.scale,
                  u = t.image.height * t.scale;
              t.image.minX = Math.min(t.gesture.slideWidth / 2 - p / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(d).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
            }
          },
          onTransitionEnd: function (e) {
            var a = e.zoom;
            a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1);
          },
          toggleZoom: function (a, t) {
            var i,
                s,
                r,
                n,
                o,
                l,
                d,
                p,
                u,
                c,
                m,
                h,
                g,
                f,
                v,
                w,
                y = a.zoom;
            (y.gesture.slide || (y.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + a.params.zoomContainerClass)), y.gesture.image && 0 !== y.gesture.image.length) && (void 0 === y.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = y.image.touchesStart.x, s = y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, t ? (v = y.gesture.slide[0].offsetWidth, w = y.gesture.slide[0].offsetHeight, r = y.gesture.slide.offset().left + v / 2 - i, n = y.gesture.slide.offset().top + w / 2 - s, d = y.gesture.image[0].offsetWidth, p = y.gesture.image[0].offsetHeight, u = d * y.scale, c = p * y.scale, g = -(m = Math.min(v / 2 - u / 2, 0)), f = -(h = Math.min(w / 2 - c / 2, 0)), (o = r * y.scale) < m && (o = m), o > g && (o = g), (l = n * y.scale) < h && (l = h), l > f && (l = f)) : (o = 0, l = 0), y.gesture.imageWrap.transition(300).transform("translate3d(" + o + "px, " + l + "px,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")));
          },
          attachEvents: function (a) {
            var t = a ? "off" : "on";

            if (x.params.zoom) {
              var i = (x.slides, !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                passive: !0,
                capture: !1
              });
              x.support.gestures ? (x.slides[t]("gesturestart", x.zoom.onGestureStart, i), x.slides[t]("gesturechange", x.zoom.onGestureChange, i), x.slides[t]("gestureend", x.zoom.onGestureEnd, i)) : "touchstart" === x.touchEvents.start && (x.slides[t](x.touchEvents.start, x.zoom.onGestureStart, i), x.slides[t](x.touchEvents.move, x.zoom.onGestureChange, i), x.slides[t](x.touchEvents.end, x.zoom.onGestureEnd, i)), x[t]("touchStart", x.zoom.onTouchStart), x.slides.each(function (a, i) {
                e(i).find("." + x.params.zoomContainerClass).length > 0 && e(i)[t](x.touchEvents.move, x.zoom.onTouchMove);
              }), x[t]("touchEnd", x.zoom.onTouchEnd), x[t]("transitionEnd", x.zoom.onTransitionEnd), x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom);
            }
          },
          init: function () {
            x.zoom.attachEvents();
          },
          destroy: function () {
            x.zoom.attachEvents(!0);
          }
        }, x._plugins = [], x.plugins) {
          var X = x.plugins[O](x, x.params[O]);
          X && x._plugins.push(X);
        }

        return x.callPlugins = function (e) {
          for (var a = 0; a < x._plugins.length; a++) e in x._plugins[a] && x._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }, x.emitterEventListeners = {}, x.emit = function (e) {
          var a;
          if (x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), x.emitterEventListeners[e]) for (a = 0; a < x.emitterEventListeners[e].length; a++) x.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }, x.on = function (e, a) {
          return e = c(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(a), x;
        }, x.off = function (e, a) {
          var t;
          if (e = c(e), void 0 === a) return x.emitterEventListeners[e] = [], x;

          if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
            for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t] === a && x.emitterEventListeners[e].splice(t, 1);

            return x;
          }
        }, x.once = function (e, a) {
          e = c(e);

          var t = function () {
            a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, t);
          };

          return x.on(e, t), x;
        }, x.a11y = {
          makeFocusable: function (e) {
            return e.attr("tabIndex", "0"), e;
          },
          addRole: function (e, a) {
            return e.attr("role", a), e;
          },
          addLabel: function (e, a) {
            return e.attr("aria-label", a), e;
          },
          disable: function (e) {
            return e.attr("aria-disabled", !0), e;
          },
          enable: function (e) {
            return e.attr("aria-disabled", !1), e;
          },
          onEnterKey: function (a) {
            13 === a.keyCode && (e(a.target).is(x.params.nextButton) ? (x.onClickNext(a), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(a.target).is(x.params.prevButton) && (x.onClickPrev(a), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), e(a.target).is("." + x.params.bulletClass) && e(a.target)[0].click());
          },
          liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
          notify: function (e) {
            var a = x.a11y.liveRegion;
            0 !== a.length && (a.html(""), a.html(e));
          },
          init: function () {
            x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), e(x.container).append(x.a11y.liveRegion);
          },
          initPagination: function () {
            x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function () {
              var a = e(this);
              x.a11y.makeFocusable(a), x.a11y.addRole(a, "button"), x.a11y.addLabel(a, x.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
            });
          },
          destroy: function () {
            x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove();
          }
        }, x.init = function () {
          x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.zoom && x.zoom && x.zoom.init(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState), x.params.history && x.history && x.history.init(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x);
        }, x.cleanupStyles = function () {
          x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"));
        }, x.destroy = function (e, a) {
          x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), a && x.cleanupStyles(), x.disconnectObservers(), x.params.zoom && x.zoom && x.zoom.destroy(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState), x.params.hashnav && x.hashnav && x.hashnav.destroy(), x.emit("onDestroy"), !1 !== e && (x = null);
        }, x.init(), x;
      }
    };

    t.prototype = {
      isSafari: function () {
        var e = window.navigator.userAgent.toLowerCase();
        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
      }(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
      isArray: function (e) {
        return "[object Array]" === Object.prototype.toString.apply(e);
      },
      browser: {
        ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
        lteIE9: function () {
          var e = document.createElement("div");
          return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length;
        }()
      },
      device: function () {
        var e = window.navigator.userAgent,
            a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            t = e.match(/(iPad).*OS\s([\d_]+)/),
            i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            s = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        return {
          ios: t || s || i,
          android: a
        };
      }(),
      support: {
        touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
        transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
          var e = document.createElement("div").style;
          return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
        }(),
        flexbox: function () {
          for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) if (a[t] in e) return !0;
        }(),
        observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
        passiveListener: function () {
          var e = !1;

          try {
            var a = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              }
            });
            window.addEventListener("testPassiveListener", null, a);
          } catch (e) {}

          return e;
        }(),
        gestures: "ongesturestart" in window
      },
      plugins: {}
    };

    for (var i = function () {
      var e = function (e) {
        var a = 0;

        for (a = 0; a < e.length; a++) this[a] = e[a];

        return this.length = e.length, this;
      },
          a = function (a, t) {
        var i = [],
            s = 0;
        if (a && !t && a instanceof e) return a;
        if (a) if ("string" == typeof a) {
          var r,
              n,
              o = a.trim();

          if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
            var l = "div";

            for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = a, s = 0; s < n.childNodes.length; s++) i.push(n.childNodes[s]);
          } else for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], s = 0; s < r.length; s++) r[s] && i.push(r[s]);
        } else if (a.nodeType || a === window || a === document) i.push(a);else if (a.length > 0 && a[0].nodeType) for (s = 0; s < a.length; s++) i.push(a[s]);
        return new e(i);
      };

      return e.prototype = {
        addClass: function (e) {
          if (void 0 === e) return this;

          for (var a = e.split(" "), t = 0; t < a.length; t++) for (var i = 0; i < this.length; i++) this[i].classList.add(a[t]);

          return this;
        },
        removeClass: function (e) {
          for (var a = e.split(" "), t = 0; t < a.length; t++) for (var i = 0; i < this.length; i++) this[i].classList.remove(a[t]);

          return this;
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
          for (var a = e.split(" "), t = 0; t < a.length; t++) for (var i = 0; i < this.length; i++) this[i].classList.toggle(a[t]);

          return this;
        },
        attr: function (e, a) {
          if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

          for (var t = 0; t < this.length; t++) if (2 === arguments.length) this[t].setAttribute(e, a);else for (var i in e) this[t][i] = e[i], this[t].setAttribute(i, e[i]);

          return this;
        },
        removeAttr: function (e) {
          for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);

          return this;
        },
        data: function (e, a) {
          if (void 0 !== a) {
            for (var t = 0; t < this.length; t++) {
              var i = this[t];
              i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = a;
            }

            return this;
          }

          if (this[0]) {
            var s = this[0].getAttribute("data-" + e);
            return s || (this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0);
          }
        },
        transform: function (e) {
          for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
          }

          return this;
        },
        transition: function (e) {
          "string" != typeof e && (e += "ms");

          for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
          }

          return this;
        },
        on: function (e, t, i, s) {
          function r(e) {
            var s = e.target;
            if (a(s).is(t)) i.call(s, e);else for (var r = a(s).parents(), n = 0; n < r.length; n++) a(r[n]).is(t) && i.call(r[n], e);
          }

          var n,
              o,
              l = e.split(" ");

          for (n = 0; n < this.length; n++) if ("function" == typeof t || !1 === t) for ("function" == typeof t && (i = arguments[1], s = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], i, s);else for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({
            listener: i,
            liveListener: r
          }), this[n].addEventListener(l[o], r, s);

          return this;
        },
        off: function (e, a, t, i) {
          for (var s = e.split(" "), r = 0; r < s.length; r++) for (var n = 0; n < this.length; n++) if ("function" == typeof a || !1 === a) "function" == typeof a && (t = arguments[1], i = arguments[2] || !1), this[n].removeEventListener(s[r], t, i);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(s[r], this[n].dom7LiveListeners[o].liveListener, i);

          return this;
        },
        once: function (e, a, t, i) {
          var s = this;
          "function" == typeof a && (a = !1, t = arguments[1], i = arguments[2]), s.on(e, a, function r(n) {
            t(n), s.off(e, a, r, i);
          }, i);
        },
        trigger: function (e, a) {
          for (var t = 0; t < this.length; t++) {
            var i;

            try {
              i = new window.CustomEvent(e, {
                detail: a,
                bubbles: !0,
                cancelable: !0
              });
            } catch (t) {
              (i = document.createEvent("Event")).initEvent(e, !0, !0), i.detail = a;
            }

            this[t].dispatchEvent(i);
          }

          return this;
        },
        transitionEnd: function (e) {
          function a(r) {
            if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t++) s.off(i[t], a);
          }

          var t,
              i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
              s = this;
          if (e) for (t = 0; t < i.length; t++) s.on(i[t], a);
          return this;
        },
        width: function () {
          return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
        },
        outerWidth: function (e) {
          return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
        },
        height: function () {
          return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
        },
        outerHeight: function (e) {
          return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
        },
        offset: function () {
          if (this.length > 0) {
            var e = this[0],
                a = e.getBoundingClientRect(),
                t = document.body,
                i = e.clientTop || t.clientTop || 0,
                s = e.clientLeft || t.clientLeft || 0,
                r = window.pageYOffset || e.scrollTop,
                n = window.pageXOffset || e.scrollLeft;
            return {
              top: a.top + r - i,
              left: a.left + n - s
            };
          }

          return null;
        },
        css: function (e, a) {
          var t;

          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (t = 0; t < this.length; t++) for (var i in e) this[t].style[i] = e[i];

              return this;
            }

            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
          }

          if (2 === arguments.length && "string" == typeof e) {
            for (t = 0; t < this.length; t++) this[t].style[e] = a;

            return this;
          }

          return this;
        },
        each: function (e) {
          for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);

          return this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

          for (var a = 0; a < this.length; a++) this[a].innerHTML = e;

          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

          for (var a = 0; a < this.length; a++) this[a].textContent = e;

          return this;
        },
        is: function (t) {
          if (!this[0]) return !1;
          var i, s;

          if ("string" == typeof t) {
            var r = this[0];
            if (r === document) return t === document;
            if (r === window) return t === window;
            if (r.matches) return r.matches(t);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
            if (r.mozMatchesSelector) return r.mozMatchesSelector(t);
            if (r.msMatchesSelector) return r.msMatchesSelector(t);

            for (i = a(t), s = 0; s < i.length; s++) if (i[s] === this[0]) return !0;

            return !1;
          }

          if (t === document) return this[0] === document;
          if (t === window) return this[0] === window;

          if (t.nodeType || t instanceof e) {
            for (i = t.nodeType ? [t] : t, s = 0; s < i.length; s++) if (i[s] === this[0]) return !0;

            return !1;
          }

          return !1;
        },
        index: function () {
          if (this[0]) {
            for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;

            return a;
          }
        },
        eq: function (a) {
          if (void 0 === a) return this;
          var t,
              i = this.length;
          return a > i - 1 ? new e([]) : a < 0 ? new e((t = i + a) < 0 ? [] : [this[t]]) : new e([this[a]]);
        },
        append: function (a) {
          var t, i;

          for (t = 0; t < this.length; t++) if ("string" == typeof a) {
            var s = document.createElement("div");

            for (s.innerHTML = a; s.firstChild;) this[t].appendChild(s.firstChild);
          } else if (a instanceof e) for (i = 0; i < a.length; i++) this[t].appendChild(a[i]);else this[t].appendChild(a);

          return this;
        },
        prepend: function (a) {
          var t, i;

          for (t = 0; t < this.length; t++) if ("string" == typeof a) {
            var s = document.createElement("div");

            for (s.innerHTML = a, i = s.childNodes.length - 1; i >= 0; i--) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
          } else if (a instanceof e) for (i = 0; i < a.length; i++) this[t].insertBefore(a[i], this[t].childNodes[0]);else this[t].insertBefore(a, this[t].childNodes[0]);

          return this;
        },
        insertBefore: function (e) {
          for (var t = a(e), i = 0; i < this.length; i++) if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0]);else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[i].cloneNode(!0), t[s]);
        },
        insertAfter: function (e) {
          for (var t = a(e), i = 0; i < this.length; i++) if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0].nextSibling);else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[i].cloneNode(!0), t[s].nextSibling);
        },
        next: function (t) {
          return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
        },
        nextAll: function (t) {
          var i = [],
              s = this[0];
          if (!s) return new e([]);

          for (; s.nextElementSibling;) {
            var r = s.nextElementSibling;
            t ? a(r).is(t) && i.push(r) : i.push(r), s = r;
          }

          return new e(i);
        },
        prev: function (t) {
          return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
        },
        prevAll: function (t) {
          var i = [],
              s = this[0];
          if (!s) return new e([]);

          for (; s.previousElementSibling;) {
            var r = s.previousElementSibling;
            t ? a(r).is(t) && i.push(r) : i.push(r), s = r;
          }

          return new e(i);
        },
        parent: function (e) {
          for (var t = [], i = 0; i < this.length; i++) e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode);

          return a(a.unique(t));
        },
        parents: function (e) {
          for (var t = [], i = 0; i < this.length; i++) for (var s = this[i].parentNode; s;) e ? a(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;

          return a(a.unique(t));
        },
        find: function (a) {
          for (var t = [], i = 0; i < this.length; i++) for (var s = this[i].querySelectorAll(a), r = 0; r < s.length; r++) t.push(s[r]);

          return new e(t);
        },
        children: function (t) {
          for (var i = [], s = 0; s < this.length; s++) for (var r = this[s].childNodes, n = 0; n < r.length; n++) t ? 1 === r[n].nodeType && a(r[n]).is(t) && i.push(r[n]) : 1 === r[n].nodeType && i.push(r[n]);

          return new e(a.unique(i));
        },
        remove: function () {
          for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);

          return this;
        },
        add: function () {
          var e,
              t,
              i = this;

          for (e = 0; e < arguments.length; e++) {
            var s = a(arguments[e]);

            for (t = 0; t < s.length; t++) i[i.length] = s[t], i.length++;
          }

          return i;
        }
      }, a.fn = e.prototype, a.unique = function (e) {
        for (var a = [], t = 0; t < e.length; t++) -1 === a.indexOf(e[t]) && a.push(e[t]);

        return a;
      }, a;
    }(), s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && function (e) {
      e.fn.swiper = function (a) {
        var i;
        return e(this).each(function () {
          var e = new t(this, a);
          i || (i = e);
        }), i;
      };
    }(window[s[r]]);

    (a = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i) && ("transitionEnd" in a.fn || (a.fn.transitionEnd = function (e) {
      function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t++) s.off(i[t], a);
      }

      var t,
          i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
          s = this;
      if (e) for (t = 0; t < i.length; t++) s.on(i[t], a);
      return this;
    }), "transform" in a.fn || (a.fn.transform = function (e) {
      for (var a = 0; a < this.length; a++) {
        var t = this[a].style;
        t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
      }

      return this;
    }), "transition" in a.fn || (a.fn.transition = function (e) {
      "string" != typeof e && (e += "ms");

      for (var a = 0; a < this.length; a++) {
        var t = this[a].style;
        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
      }

      return this;
    }), "outerWidth" in a.fn || (a.fn.outerWidth = function (e) {
      return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
    })), window.Swiper = t;
  }(), e.exports = window.Swiper;
}, function (e, a, t) {
  const i = document.getElementsByClassName("js-hook");
  Array.prototype.slice.call(i).forEach(e => {
    const a = e.getAttribute("data-module");

    if (a) {
      a.split(" ").forEach(a => {
        new (t(4)("./" + a + ".js"))().activate(e);
      });
    }
  });
}, function (e, a, t) {
  var i = {
    "./AbstractModule.js": 0,
    "./Grid.js": 5,
    "./ScrollTo.js": 6,
    "./Slider.js": 7,
    "./swiper.min.js": 2
  };

  function s(e) {
    var a = r(e);
    return t(a);
  }

  function r(e) {
    var a = i[e];

    if (!(a + 1)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t;
    }

    return a;
  }

  s.keys = function () {
    return Object.keys(i);
  }, s.resolve = r, e.exports = s, s.id = 4;
}, function (e, a, t) {
  var i, s;
  i = [t(0)], void 0 === (s = function (e) {
    return class extends e {
      handleEvent(e) {
        "keydown" === e.type && ";" == e.key && (e.ctrlKey || e.metaKey) && document.documentElement.classList.toggle("grid");
      }

      activate(e) {
        document.addEventListener("keydown", this);
      }

    };
  }.apply(a, i)) || (e.exports = s);
}, function (e, a, t) {
  var i, s;
  i = [t(0), t(1)], void 0 === (s = function (e, a) {
    return class extends e {
      animate(e, a) {
        const t = this,
              i = window.pageYOffset,
              s = new Date().getTime(),
              r = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
              n = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
              o = Math.round(r - e < n ? r - n : e);
        if ("requestAnimationFrame" in window == 0) return window.scroll(0, o), void (window.location.hash = a);
        !function e() {
          const r = new Date().getTime(),
                n = Math.min(1, (r - s) / t.duration),
                l = (d = n) < .5 ? 4 * d * d * d : (d - 1) * (2 * d - 2) * (2 * d - 2) + 1;
          var d;
          window.scroll(0, Math.ceil(l * (o - i) + i)), window.pageYOffset !== o ? requestAnimationFrame(e) : window.location.hash = a;
        }();
      }

      getPosition(e) {
        for (var a = 0, t = 0, i = e; i;) a += i.offsetLeft - i.scrollLeft + i.clientLeft, t += i.offsetTop - i.scrollTop + i.clientTop, i = i.offsetParent;

        return {
          x: a,
          y: t
        };
      }

      clickHandler(e) {
        e.preventDefault();
        var a = e.target.getAttribute("href").substr(1),
            t = 0,
            i = "";
        a && (t = this.getPosition(document.getElementById(a)).y, i = a), this.animate(t, i);
      }

      scrollHandler() {
        if (a.isDesktop()) {
          var e = this.column.getBoundingClientRect().bottom,
              t = this.lastColumnElement.getBoundingClientRect(),
              i = window.scrollY > window.innerHeight;
          this.lastColumnElement && (i = i && t.bottom < window.innerHeight - this.rectLimit);
          var s = e > window.innerHeight - this.rectLimit;
          s && this.lastColumnElement && (s = e > t.bottom), this.scrollTopElement.classList.toggle("__active", i), this.scrollTopElement.classList.toggle("__fixed", s);
        }
      }

      activate(e) {
        this.duration = 300, this.rectLimit = 30, this.boundClick = this.clickHandler.bind(this), this.boundScroll = this.scrollHandler.bind(this), this.scrollTopElement = e.querySelector(".js-scroll-top"), this.column = e.querySelector(".info-section_aside"), this.lastColumnElement = this.column.lastElementChild, this.scrollTopElement && this.column && (window.addEventListener("scroll", a.throttle(this.boundScroll, 30), !1), window.addEventListener("resize", a.throttle(this.boundScroll, 30), !1)), Array.prototype.slice.call(document.getElementsByTagName("A")).filter(e => {
          const a = e.getAttribute("href");
          return a && 0 === a.indexOf("#");
        }).forEach(e => {
          e.addEventListener("click", this.boundClick, !1);
        });
      }

    };
  }.apply(a, i)) || (e.exports = s);
}, function (e, a, t) {
  var i, s;
  i = [t(2), t(0), t(1)], void 0 === (s = function (e, a, t) {
    return class extends a {
      resizeHandler() {
        this.swiper.onResize();
      }

      activate(a) {
        this.element = a, this.swiper = new e(a, {
          pagination: ".swiper-pagination",
          slidesPerView: 1,
          paginationClickable: !0,
          spaceBetween: 0,
          autoplay: 5e3,
          loop: !0,
          lazyLoading: !0,
          lazyLoadingInPrevNext: !0,
          lazyLoadingOnTransitionStart: !0
        }), this.boundResizeHandler = this.resizeHandler.bind(this), window.addEventListener("resize", t.throttle(this.boundResizeHandler, 30), !1), window.addEventListener("load", t.throttle(this.boundResizeHandler, 30), !1);
      }

    };
  }.apply(a, i)) || (e.exports = s);
}]);