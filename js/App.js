"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function s(i) {
    if (t[i]) return t[i].exports;
    var l = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(l.exports, l, l.exports, s), l.l = !0, l.exports;
  }

  s.m = e, s.c = t, s.d = function (e, t, i) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (s.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var l in e) {
      s.d(i, l, function (t) {
        return e[t];
      }.bind(null, l));
    }
    return i;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 2);
}([function (e, t, s) {
  var i;
  void 0 === (i = function () {
    return (
      /*#__PURE__*/
      function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        _createClass(_class, [{
          key: "activate",
          value: function activate(e) {
            throw new Error("Should be implemented");
          }
        }]);

        return _class;
      }()
    );
  }.call(t, s, t, e)) || (e.exports = i);
}, function (e, t, s) {
  var i;

  e.exports = function e(t, s, l) {
    function o(r, a) {
      if (!s[r]) {
        if (!t[r]) {
          var d = "function" == typeof i && i;
          if (!a && d) return i(r, !0);
          if (n) return n(r, !0);
          var u = new Error("Cannot find module '" + r + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var c = s[r] = {
          exports: {}
        };
        t[r][0].call(c.exports, function (e) {
          var s = t[r][1][e];
          return o(s || e);
        }, c, c.exports, e, t, s, l);
      }

      return s[r].exports;
    }

    for (var n = "function" == typeof i && i, r = 0; r < l.length; r++) {
      o(l[r]);
    }

    return o;
  }({
    1: [function (e, t, s) {
      !function (e, t) {
        if (void 0 !== s) t(s);else {
          var i = {
            exports: {}
          };
          t(i.exports), e.lgUtils = i.exports;
        }
      }(this, function (e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = {
          getAttribute: function getAttribute(e, t) {
            return e[t];
          },
          setAttribute: function setAttribute(e, t, s) {
            e[t] = s;
          },
          wrap: function wrap(e, t) {
            if (e) {
              var s = document.createElement("div");
              s.className = t, e.parentNode.insertBefore(s, e), e.parentNode.removeChild(e), s.appendChild(e);
            }
          },
          addClass: function addClass(e, t) {
            e && (e.classList ? e.classList.add(t) : e.className += " " + t);
          },
          removeClass: function removeClass(e, t) {
            e && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
          },
          hasClass: function hasClass(e, t) {
            return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
          },
          setVendor: function setVendor(e, t, s) {
            e && (e.style[t.charAt(0).toLowerCase() + t.slice(1)] = s, e.style["webkit" + t] = s, e.style["moz" + t] = s, e.style["ms" + t] = s, e.style["o" + t] = s);
          },
          trigger: function trigger(e, t) {
            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;

            if (e) {
              var i = new CustomEvent(t, {
                detail: s
              });
              e.dispatchEvent(i);
            }
          },
          Listener: {
            uid: 0
          },
          on: function on(e, s, i) {
            var l = this;
            e && s.split(" ").forEach(function (s) {
              var o = l.getAttribute(e, "lg-event-uid") || "";
              t.Listener.uid++, o += "&" + t.Listener.uid, l.setAttribute(e, "lg-event-uid", o), t.Listener[s + t.Listener.uid] = i, e.addEventListener(s.split(".")[0], i, !1);
            });
          },
          off: function off(e, s) {
            if (e) {
              var i = this.getAttribute(e, "lg-event-uid");

              if (i) {
                i = i.split("&");

                for (var l = 0; l < i.length; l++) {
                  if (i[l]) {
                    var o = s + i[l];
                    if ("." === o.substring(0, 1)) for (var n in t.Listener) {
                      t.Listener.hasOwnProperty(n) && n.split(".").indexOf(o.split(".")[1]) > -1 && (e.removeEventListener(n.split(".")[0], t.Listener[n]), this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&" + i[l], "")), delete t.Listener[n]);
                    } else e.removeEventListener(o.split(".")[0], t.Listener[o]), this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&" + i[l], "")), delete t.Listener[o];
                  }
                }
              }
            }
          },
          param: function param(e) {
            return Object.keys(e).map(function (t) {
              return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
            }).join("&");
          }
        };
        e.default = t;
      });
    }, {}],
    2: [function (e, t, s) {
      var i, l;
      i = this, l = function l(e) {
        "use strict";

        var t,
            s = (t = e) && t.__esModule ? t : {
          default: t
        },
            i = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];

            for (var i in s) {
              Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
            }
          }

          return e;
        };

        !function () {
          if ("function" == typeof window.CustomEvent) return !1;

          function e(e, t) {
            t = t || {
              bubbles: !1,
              cancelable: !1,
              detail: void 0
            };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
          }

          e.prototype = window.Event.prototype, window.CustomEvent = e;
        }(), window.utils = s.default, window.lgData = {
          uid: 0
        }, window.lgModules = {};
        var l = {
          mode: "lg-slide",
          cssEasing: "ease",
          easing: "linear",
          speed: 600,
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 150,
          hideBarsDelay: 6e3,
          useLeft: !1,
          closable: !0,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          controls: !0,
          slideEndAnimatoin: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 1,
          showAfterLoad: !0,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: !1,
          iframeMaxWidth: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          galleryId: 1
        };

        function o(e, t) {
          if (this.el = e, this.s = i({}, l, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this;
        }

        o.prototype.init = function () {
          var e = this;
          e.s.preload > e.items.length && (e.s.preload = e.items.length);
          var t = window.location.hash;
          if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), s.default.addClass(document.body, "lg-from-hash"), s.default.hasClass(document.body, "lg-on") || (s.default.addClass(document.body, "lg-on"), setTimeout(function () {
            e.build(e.index);
          }))), e.s.dynamic) s.default.trigger(this.el, "onBeforeOpen"), e.index = e.s.index || 0, s.default.hasClass(document.body, "lg-on") || (s.default.addClass(document.body, "lg-on"), setTimeout(function () {
            e.build(e.index);
          }));else for (var i = 0; i < e.items.length; i++) {
            !function (t) {
              s.default.on(e.items[t], "click.lgcustom", function (i) {
                i.preventDefault(), s.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, s.default.hasClass(document.body, "lg-on") || (e.build(e.index), s.default.addClass(document.body, "lg-on"));
              });
            }(i);
          }
        }, o.prototype.build = function (e) {
          var t = this;

          for (var i in t.structure(), window.lgModules) {
            t.modules[i] = new window.lgModules[i](t.el);
          }

          t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout(function () {
            t.enableDrag(), t.enableSwipe();
          }, 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), s.default.trigger(t.el, "onAfterOpen"), s.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function () {
            s.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function () {
              s.default.addClass(t.outer, "lg-hide-items");
            }, t.s.hideBarsDelay);
          });
        }, o.prototype.structure = function () {
          var e,
              t = "",
              i = "",
              l = 0,
              o = "",
              n = this;

          for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), s.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), l = 0; l < this.items.length; l++) {
            t += '<div class="lg-item"></div>';
          }

          if (this.s.controls && this.items.length > 1 && (i = '<div class="lg-actions"><div class="lg-prev" data-mouse-title="Назад">' + this.s.prevHtml + '</div><div class="lg-next" data-mouse-title="Вперед">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div class="lg-sub-html"></div>'), e = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + i + o + "</div></div>", document.body.insertAdjacentHTML("beforeend", e), this.outer = document.querySelector(".lg-outer"), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (s.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : s.default.addClass(this.outer, "lg-use-css3"), n.setTop(), s.default.on(window, "resize.lg orientationchange.lg", function () {
            setTimeout(function () {
              n.setTop();
            }, 100);
          }), s.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? s.default.addClass(this.outer, "lg-css3") : (s.default.addClass(this.outer, "lg-css"), this.s.speed = 0), s.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && s.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && s.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) {
            var r = this.outer.querySelector(".lg-inner");
            s.default.setVendor(r, "TransitionTimingFunction", this.s.cssEasing), s.default.setVendor(r, "TransitionDuration", this.s.speed + "ms");
          }

          setTimeout(function () {
            s.default.addClass(document.querySelector(".lg-backdrop"), "in");
          }), setTimeout(function () {
            s.default.addClass(n.outer, "lg-visible");
          }, this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        }, o.prototype.setTop = function () {
          if ("100%" !== this.s.height) {
            var e = window.innerHeight,
                t = (e - parseInt(this.s.height, 10)) / 2,
                s = this.outer.querySelector(".lg");
            e >= parseInt(this.s.height, 10) ? s.style.top = t + "px" : s.style.top = "0px";
          }
        }, o.prototype.doCss = function () {
          return !!function () {
            var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                t = document.documentElement,
                s = 0;

            for (s = 0; s < e.length; s++) {
              if (e[s] in t.style) return !0;
            }
          }();
        }, o.prototype.isVideo = function (e, t) {
          var s;
          if (s = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && s) return {
            html5: !0
          };
          var i = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
              l = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
              o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
              n = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
          return i ? {
            youtube: i
          } : l ? {
            vimeo: l
          } : o ? {
            dailymotion: o
          } : n ? {
            vk: n
          } : void 0;
        }, o.prototype.counter = function () {
          this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>");
        }, o.prototype.addHtml = function (e) {
          var t,
              i = null;

          if (this.s.dynamic ? i = this.s.dynamicEl[e].subHtml : (t = this.items[e], i = t.getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !i && (i = t.getAttribute("title")) && t.querySelector("img") && (i = t.querySelector("img").getAttribute("alt"))), null != i) {
            var l = i.substring(0, 1);
            "." !== l && "#" !== l || (i = this.s.subHtmlSelectorRelative && !this.s.dynamic ? t.querySelector(i).innerHTML : document.querySelector(i).innerHTML);
          } else i = "";

          ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = i : this.___slide[e].insertAdjacentHTML("beforeend", i), null != i && ("" === i ? s.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : s.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), s.default.trigger(this.el, "onAfterAppendSubHtml", {
            index: e
          });
        }, o.prototype.preload = function (e) {
          var t = 1,
              s = 1;

          for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++) {
            this.loadContent(e + t, !1, 0);
          }

          for (s = 1; s <= this.s.preload && !(e - s < 0); s++) {
            this.loadContent(e - s, !1, 0);
          }
        }, o.prototype.loadContent = function (e, t, i) {
          var l,
              o,
              n,
              r,
              a,
              d,
              u = this,
              c = !1,
              h = function h(e) {
            for (var t = [], s = [], i = 0; i < e.length; i++) {
              var l = e[i].split(" ");
              "" === l[0] && l.splice(0, 1), s.push(l[0]), t.push(l[1]);
            }

            for (var n = window.innerWidth, r = 0; r < t.length; r++) {
              if (parseInt(t[r], 10) > n) {
                o = s[r];
                break;
              }
            }
          };

          if (u.s.dynamic) {
            if (u.s.dynamicEl[e].poster && (c = !0, n = u.s.dynamicEl[e].poster), d = u.s.dynamicEl[e].html, o = u.s.dynamicEl[e].src, u.s.dynamicEl[e].responsive) {
              var g = u.s.dynamicEl[e].responsive.split(",");
              h(g);
            }

            r = u.s.dynamicEl[e].srcset, a = u.s.dynamicEl[e].sizes;
          } else {
            if (u.items[e].getAttribute("data-poster") && (c = !0, n = u.items[e].getAttribute("data-poster")), d = u.items[e].getAttribute("data-html"), o = u.items[e].getAttribute("href") || u.items[e].getAttribute("data-src"), u.items[e].getAttribute("data-responsive")) {
              var f = u.items[e].getAttribute("data-responsive").split(",");
              h(f);
            }

            r = u.items[e].getAttribute("data-srcset"), a = u.items[e].getAttribute("data-sizes");
          }

          var m = !1;
          u.s.dynamic ? u.s.dynamicEl[e].iframe && (m = !0) : "true" === u.items[e].getAttribute("data-iframe") && (m = !0);
          var p = u.isVideo(o, e);

          if (!s.default.hasClass(u.___slide[e], "lg-loaded")) {
            if (m) u.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + u.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + o + '"  allowfullscreen="true"></iframe></div></div>');else if (c) {
              var v = "";
              v = p && p.youtube ? "lg-has-youtube" : p && p.vimeo ? "lg-has-vimeo" : "lg-has-html5", u.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + v + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + n + '" /></div></div>');
            } else p ? (u.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), s.default.trigger(u.el, "hasVideo", {
              index: e,
              src: o,
              html: d
            })) : u.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + o + '" /></div>');

            if (s.default.trigger(u.el, "onAferAppendSlide", {
              index: e
            }), l = u.___slide[e].querySelector(".lg-object"), a && l.setAttribute("sizes", a), r) {
              l.setAttribute("srcset", r);

              try {
                picturefill({
                  elements: [l[0]]
                });
              } catch (e) {
                console.error("Make sure you have included Picturefill version 2");
              }
            }

            ".lg-sub-html" !== this.s.appendSubHtmlTo && u.addHtml(e), s.default.addClass(u.___slide[e], "lg-loaded");
          }

          s.default.on(u.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () {
            var t = 0;
            i && !s.default.hasClass(document.body, "lg-from-hash") && (t = i), setTimeout(function () {
              s.default.addClass(u.___slide[e], "lg-complete"), s.default.trigger(u.el, "onSlideItemLoad", {
                index: e,
                delay: i || 0
              });
            }, t);
          }), p && p.html5 && !c && s.default.addClass(u.___slide[e], "lg-complete"), !0 === t && (s.default.hasClass(u.___slide[e], "lg-complete") ? u.preload(e) : s.default.on(u.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () {
            u.preload(e);
          }));
        }, o.prototype.slide = function (e, t, i) {
          for (var l = 0, o = 0; o < this.___slide.length; o++) {
            if (s.default.hasClass(this.___slide[o], "lg-current")) {
              l = o;
              break;
            }
          }

          var n = this;

          if (!n.lGalleryOn || l !== e) {
            var r = this.___slide.length,
                a = n.lGalleryOn ? this.s.speed : 0,
                d = !1,
                u = !1;

            if (!n.lgBusy) {
              var c;

              if (this.s.download && ((c = n.s.dynamic ? !1 !== n.s.dynamicEl[e].downloadUrl && (n.s.dynamicEl[e].downloadUrl || n.s.dynamicEl[e].src) : "false" !== n.items[e].getAttribute("data-download-url") && (n.items[e].getAttribute("data-download-url") || n.items[e].getAttribute("href") || n.items[e].getAttribute("data-src"))) ? (document.getElementById("lg-download").setAttribute("href", c), s.default.removeClass(n.outer, "lg-hide-download")) : s.default.addClass(n.outer, "lg-hide-download")), s.default.trigger(n.el, "onBeforeSlide", {
                prevIndex: l,
                index: e,
                fromTouch: t,
                fromThumb: i
              }), n.lgBusy = !0, clearTimeout(n.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
                n.addHtml(e);
              }, a), this.arrowDisable(e), t) {
                var h = e - 1,
                    g = e + 1;
                0 === e && l === r - 1 ? (g = 0, h = r - 1) : e === r - 1 && 0 === l && (g = 0, h = r - 1), s.default.removeClass(n.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), s.default.removeClass(n.outer.querySelector(".lg-current"), "lg-current"), s.default.removeClass(n.outer.querySelector(".lg-next-slide"), "lg-next-slide"), s.default.addClass(n.___slide[h], "lg-prev-slide"), s.default.addClass(n.___slide[g], "lg-next-slide"), s.default.addClass(n.___slide[e], "lg-current");
              } else {
                s.default.addClass(n.outer, "lg-no-trans");

                for (var f = 0; f < this.___slide.length; f++) {
                  s.default.removeClass(this.___slide[f], "lg-prev-slide"), s.default.removeClass(this.___slide[f], "lg-next-slide");
                }

                e < l ? (u = !0, 0 !== e || l !== r - 1 || i || (u = !1, d = !0)) : e > l && (d = !0, e !== r - 1 || 0 !== l || i || (u = !0, d = !1)), u ? (s.default.addClass(this.___slide[e], "lg-prev-slide"), s.default.addClass(this.___slide[l], "lg-next-slide")) : d && (s.default.addClass(this.___slide[e], "lg-next-slide"), s.default.addClass(this.___slide[l], "lg-prev-slide")), setTimeout(function () {
                  s.default.removeClass(n.outer.querySelector(".lg-current"), "lg-current"), s.default.addClass(n.___slide[e], "lg-current"), s.default.removeClass(n.outer, "lg-no-trans");
                }, 50);
              }

              n.lGalleryOn ? (setTimeout(function () {
                n.loadContent(e, !0, 0);
              }, this.s.speed + 50), setTimeout(function () {
                n.lgBusy = !1, s.default.trigger(n.el, "onAfterSlide", {
                  prevIndex: l,
                  index: e,
                  fromTouch: t,
                  fromThumb: i
                });
              }, this.s.speed)) : (n.loadContent(e, !0, n.s.backdropDuration), n.lgBusy = !1, s.default.trigger(n.el, "onAfterSlide", {
                prevIndex: l,
                index: e,
                fromTouch: t,
                fromThumb: i
              })), n.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1);
            }
          }
        }, o.prototype.goToNextSlide = function (e) {
          var t = this;
          t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, s.default.trigger(t.el, "onBeforeNextSlide", {
            index: t.index
          }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, s.default.trigger(t.el, "onBeforeNextSlide", {
            index: t.index
          }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (s.default.addClass(t.outer, "lg-right-end"), setTimeout(function () {
            s.default.removeClass(t.outer, "lg-right-end");
          }, 400)));
        }, o.prototype.goToPrevSlide = function (e) {
          var t = this;
          t.lgBusy || (t.index > 0 ? (t.index--, s.default.trigger(t.el, "onBeforePrevSlide", {
            index: t.index,
            fromTouch: e
          }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, s.default.trigger(t.el, "onBeforePrevSlide", {
            index: t.index,
            fromTouch: e
          }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (s.default.addClass(t.outer, "lg-left-end"), setTimeout(function () {
            s.default.removeClass(t.outer, "lg-left-end");
          }, 400)));
        }, o.prototype.keyPress = function () {
          var e = this;
          this.items.length > 1 && s.default.on(window, "keyup.lg", function (t) {
            e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
          }), s.default.on(window, "keydown.lg", function (t) {
            !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), s.default.hasClass(e.outer, "lg-thumb-open") ? s.default.removeClass(e.outer, "lg-thumb-open") : e.destroy());
          });
        }, o.prototype.arrow = function () {
          var e = this;
          s.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function () {
            e.goToPrevSlide();
          }), s.default.on(this.outer.querySelector(".lg-next"), "click.lg", function () {
            e.goToNextSlide();
          });
        }, o.prototype.arrowDisable = function (e) {
          if (!this.s.loop && this.s.hideControlOnEnd) {
            var t = this.outer.querySelector(".lg-next"),
                i = this.outer.querySelector(".lg-prev");
            e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), s.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), s.default.addClass(t, "disabled")), e > 0 ? (i.removeAttribute("disabled"), s.default.removeClass(i, "disabled")) : (i.setAttribute("disabled", "disabled"), s.default.addClass(i, "disabled"));
          }
        }, o.prototype.setTranslate = function (e, t, i) {
          this.s.useLeft ? e.style.left = t : s.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + i + "px, 0px)");
        }, o.prototype.touchMove = function (e, t) {
          var i = t - e;
          Math.abs(i) > 15 && (s.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], i, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + i, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + i, 0));
        }, o.prototype.touchEnd = function (e) {
          var t = this;
          "lg-slide" !== t.s.mode && s.default.addClass(t.outer, "lg-slide");

          for (var i = 0; i < this.___slide.length; i++) {
            s.default.hasClass(this.___slide[i], "lg-current") || s.default.hasClass(this.___slide[i], "lg-prev-slide") || s.default.hasClass(this.___slide[i], "lg-next-slide") || (this.___slide[i].style.opacity = "0");
          }

          setTimeout(function () {
            s.default.removeClass(t.outer, "lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && s.default.trigger(t.el, "onSlideClick");

            for (var i = 0; i < t.___slide.length; i++) {
              t.___slide[i].removeAttribute("style");
            }
          }), setTimeout(function () {
            s.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || s.default.removeClass(t.outer, "lg-slide");
          }, t.s.speed + 100);
        }, o.prototype.enableSwipe = function () {
          var e = this,
              t = 0,
              i = 0,
              l = !1;

          if (e.s.enableSwipe && e.isTouch && e.doCss()) {
            for (var o = 0; o < e.___slide.length; o++) {
              s.default.on(e.___slide[o], "touchstart.lg", function (i) {
                s.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (i.preventDefault(), e.manageSwipeClass(), t = i.targetTouches[0].pageX);
              });
            }

            for (var n = 0; n < e.___slide.length; n++) {
              s.default.on(e.___slide[n], "touchmove.lg", function (o) {
                s.default.hasClass(e.outer, "lg-zoomed") || (o.preventDefault(), i = o.targetTouches[0].pageX, e.touchMove(t, i), l = !0);
              });
            }

            for (var r = 0; r < e.___slide.length; r++) {
              s.default.on(e.___slide[r], "touchend.lg", function () {
                s.default.hasClass(e.outer, "lg-zoomed") || (l ? (l = !1, e.touchEnd(i - t)) : s.default.trigger(e.el, "onSlideClick"));
              });
            }
          }
        }, o.prototype.enableDrag = function () {
          var e = this,
              t = 0,
              i = 0,
              l = !1,
              o = !1;

          if (e.s.enableDrag && !e.isTouch && e.doCss()) {
            for (var n = 0; n < e.___slide.length; n++) {
              s.default.on(e.___slide[n], "mousedown.lg", function (i) {
                s.default.hasClass(e.outer, "lg-zoomed") || (s.default.hasClass(i.target, "lg-object") || s.default.hasClass(i.target, "lg-video-play")) && (i.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = i.pageX, l = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, s.default.removeClass(e.outer, "lg-grab"), s.default.addClass(e.outer, "lg-grabbing"), s.default.trigger(e.el, "onDragstart")));
              });
            }

            s.default.on(window, "mousemove.lg", function (n) {
              l && (o = !0, i = n.pageX, e.touchMove(t, i), s.default.trigger(e.el, "onDragmove"));
            }), s.default.on(window, "mouseup.lg", function (n) {
              o ? (o = !1, e.touchEnd(i - t), s.default.trigger(e.el, "onDragend")) : (s.default.hasClass(n.target, "lg-object") || s.default.hasClass(n.target, "lg-video-play")) && s.default.trigger(e.el, "onSlideClick"), l && (l = !1, s.default.removeClass(e.outer, "lg-grabbing"), s.default.addClass(e.outer, "lg-grab"));
            });
          }
        }, o.prototype.manageSwipeClass = function () {
          var e = this.index + 1,
              t = this.index - 1,
              i = this.___slide.length;
          this.s.loop && (0 === this.index ? t = i - 1 : this.index === i - 1 && (e = 0));

          for (var l = 0; l < this.___slide.length; l++) {
            s.default.removeClass(this.___slide[l], "lg-next-slide"), s.default.removeClass(this.___slide[l], "lg-prev-slide");
          }

          t > -1 && s.default.addClass(this.___slide[t], "lg-prev-slide"), s.default.addClass(this.___slide[e], "lg-next-slide");
        }, o.prototype.mousewheel = function () {
          var e = this;
          s.default.on(e.outer, "mousewheel.lg", function (t) {
            t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault());
          });
        }, o.prototype.closeGallery = function () {
          var e = this,
              t = !1;
          s.default.on(this.outer.querySelector(".lg-close"), "click.lg", function () {
            e.destroy();
          }), e.s.closable && (s.default.on(e.outer, "mousedown.lg", function (e) {
            t = !!(s.default.hasClass(e.target, "lg-outer") || s.default.hasClass(e.target, "lg-item") || s.default.hasClass(e.target, "lg-img-wrap"));
          }), s.default.on(e.outer, "mouseup.lg", function (i) {
            (s.default.hasClass(i.target, "lg-outer") || s.default.hasClass(i.target, "lg-item") || s.default.hasClass(i.target, "lg-img-wrap") && t) && (s.default.hasClass(e.outer, "lg-dragging") || e.destroy());
          }));
        }, o.prototype.destroy = function (e) {
          var t = this;

          if (e || s.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) {
            if (!t.s.dynamic) for (var i = 0; i < this.items.length; i++) {
              s.default.off(this.items[i], ".lg"), s.default.off(this.items[i], ".lgcustom");
            }
            var l = t.el.getAttribute("lg-uid");
            delete window.lgData[l], t.el.removeAttribute("lg-uid");
          }

          for (var o in s.default.off(this.el, ".lgtm"), window.lgModules) {
            t.modules[o] && t.modules[o].destroy(e);
          }

          this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, s.default.off(window, ".lg"), s.default.removeClass(document.body, "lg-on"), s.default.removeClass(document.body, "lg-from-hash"), t.outer && s.default.removeClass(t.outer, "lg-visible"), s.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout(function () {
            try {
              t.outer && t.outer.parentNode.removeChild(t.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || s.default.trigger(t.el, "onCloseAfter");
            } catch (e) {}
          }, t.s.backdropDuration + 50);
        }, window.lightGallery = function (e, t) {
          if (e) try {
            if (e.getAttribute("lg-uid")) try {
              window.lgData[e.getAttribute("lg-uid")].init();
            } catch (e) {
              console.error("lightGallery has not initiated properly");
            } else {
              var s = "lg" + window.lgData.uid++;
              window.lgData[s] = new o(e, t), e.setAttribute("lg-uid", s);
            }
          } catch (e) {
            console.error("lightGallery has not initiated properly");
          }
        };
      }, void 0 !== s ? l(e("./lg-utils")) : (l(i.lgUtils), i.lightgallery = {});
    }, {
      "./lg-utils": 1
    }]
  }, {}, [2])(2);
}, function (e, t, s) {
  var i = document.getElementsByClassName("js-hook");
  Array.prototype.slice.call(i).forEach(function (e) {
    var t = e.getAttribute("data-module");

    if (t) {
      t.split(" ").forEach(function (t) {
        new (s(3)("./" + t + ".js"))().activate(e);
      });
    }
  });
}, function (e, t, s) {
  var i = {
    "./AbstractModule.js": 0,
    "./Gallery.js": 4,
    "./Grid.js": 5,
    "./ImageAlign.js": 6,
    "./MouseTitle.js": 7,
    "./ScrollTo.js": 9,
    "./Tabs.js": 10,
    "./TopMenu.js": 11,
    "./lightgallery.js": 1
  };

  function l(e) {
    var t = o(e);
    return s(t);
  }

  function o(e) {
    var t = i[e];

    if (!(t + 1)) {
      var s = new Error("Cannot find module '" + e + "'");
      throw s.code = "MODULE_NOT_FOUND", s;
    }

    return t;
  }

  l.keys = function () {
    return Object.keys(i);
  }, l.resolve = o, e.exports = l, l.id = 3;
}, function (e, t, s) {
  var i, l;
  i = [s(1), s(0)], void 0 === (l = function (e, t) {
    return (
      /*#__PURE__*/
      function (_t) {
        _inherits(_class2, _t);

        function _class2() {
          _classCallCheck(this, _class2);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
        }

        _createClass(_class2, [{
          key: "activate",
          value: function activate(e) {
            window.lightGallery(e, {
              counter: !1
            });
          }
        }]);

        return _class2;
      }(t)
    );
  }.apply(t, i)) || (e.exports = l);
}, function (e, t, s) {
  var i, l;
  i = [s(0)], void 0 === (l = function (e) {
    return (
      /*#__PURE__*/
      function (_e) {
        _inherits(_class3, _e);

        function _class3() {
          _classCallCheck(this, _class3);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class3).apply(this, arguments));
        }

        _createClass(_class3, [{
          key: "handleEvent",
          value: function handleEvent(e) {
            "keydown" === e.type && ";" == e.key && (e.ctrlKey || e.metaKey) && document.documentElement.classList.toggle("show-grid");
          }
        }, {
          key: "activate",
          value: function activate(e) {
            document.addEventListener("keydown", this);
          }
        }]);

        return _class3;
      }(e)
    );
  }.apply(t, i)) || (e.exports = l);
}, function (e, t, s) {
  var i, l;
  i = [s(0)], void 0 === (l = function (e) {
    var t = 10;
    return (
      /*#__PURE__*/
      function (_e2) {
        _inherits(_class4, _e2);

        function _class4() {
          _classCallCheck(this, _class4);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class4).apply(this, arguments));
        }

        _createClass(_class4, [{
          key: "align",
          value: function align(e, s) {
            var i = s.clientHeight,
                l = Math.ceil(i / t) * t - i;
            e.style.marginBottom = "".concat(l, "px");
          }
        }, {
          key: "findImageElement",
          value: function findImageElement(e, t) {
            for (; e;) {
              if ("img" === e.tagName.toLowerCase()) return t(e);
              e = e.firstElementChild;
            }
          }
        }, {
          key: "activate",
          value: function activate(e) {
            var _this = this;

            this.findImageElement(e, function (t) {
              t.complete ? _this.align(e, t) : t.onload = _this.align.bind(_this, e, t);
            });
          }
        }]);

        return _class4;
      }(e)
    );
  }.apply(t, i)) || (e.exports = l);
}, function (e, t, s) {
  var i, l;
  i = [s(0), s(8)], void 0 === (l = function (e, t) {
    return (
      /*#__PURE__*/
      function (_e3) {
        _inherits(_class5, _e3);

        function _class5() {
          _classCallCheck(this, _class5);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class5).apply(this, arguments));
        }

        _createClass(_class5, [{
          key: "findClosestTitle",
          value: function findClosestTitle(e) {
            do {
              if (e.hasAttribute("data-mouse-title")) return e.getAttribute("data-mouse-title");
            } while (e = e.parentElement);

            return null;
          }
        }, {
          key: "changeTitle",
          value: function changeTitle() {
            var _this2 = this;

            var e = this.findClosestTitle(this.titleSourceNode);
            e !== this.title && (this.title = e, this.titleNode.innerHeight, this.titleNode.classList.add("__hide"), this.title && setTimeout(function () {
              _this2.titleNode.innerText = _this2.title, _this2.titleNode.innerHeight, _this2.titleNode.classList.remove("__hide");
            }, 200));
          }
        }, {
          key: "handleMouseMove",
          value: function handleMouseMove(e) {
            e.target !== this.titleSourceNode && (this.titleSourceNode = e.target, this.throttledChangeTitle()), this.title && (this.titleNode.classList.toggle("__left", e.clientX > window.innerWidth / 2), this.titleNode.classList.toggle("__top", e.clientY > window.innerHeight / 2), this.titleNode.style = "top: ".concat(e.clientY, "px; left: ").concat(e.clientX, "px;"));
          }
        }, {
          key: "activate",
          value: function activate(e) {
            t.isTouch() || (this.title = null, this.titleSourceNode = null, this.titleNode = document.createElement("div"), this.titleNode.className = "mouse-title", this.throttledChangeTitle = t.throttle(this.changeTitle, 10, this), document.body.appendChild(this.titleNode), document.addEventListener("mousemove", this.handleMouseMove.bind(this)));
          }
        }]);

        return _class5;
      }(e)
    );
  }.apply(t, i)) || (e.exports = l);
}, function (e, t, s) {
  var i;
  void 0 === (i = function () {
    return new (
    /*#__PURE__*/
    function () {
      function _class6() {
        _classCallCheck(this, _class6);
      }

      _createClass(_class6, [{
        key: "isTouch",
        value: function isTouch() {
          return "ontouchstart" in window;
        }
      }, {
        key: "throttle",
        value: function throttle(e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var i = !1;
          return function () {
            i || (e.apply(s, arguments), i = !0, setTimeout(function () {
              i = !1;
            }, t));
          };
        }
      }]);

      return _class6;
    }())();
  }.call(t, s, t, e)) || (e.exports = i);
}, function (e, t, s) {
  var i, l;
  i = [s(0)], void 0 === (l = function (e) {
    var t = 300;
    return (
      /*#__PURE__*/
      function (_e4) {
        _inherits(_class7, _e4);

        function _class7() {
          _classCallCheck(this, _class7);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class7).apply(this, arguments));
        }

        _createClass(_class7, [{
          key: "animate",
          value: function animate(e) {
            var s = window.pageYOffset,
                i = new Date().getTime(),
                l = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
                o = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
                n = Math.round(l - e < o ? l - o : e);
            "requestAnimationFrame" in window != 0 ? function e() {
              if (window.pageYOffset <= n) return;
              var l = new Date().getTime(),
                  o = Math.min(1, (l - i) / t),
                  r = (a = o) < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
              var a;
              window.scroll(0, Math.ceil(r * (n - s) + s)), requestAnimationFrame(e);
            }() : window.scroll(0, n);
          }
        }, {
          key: "clickHandler",
          value: function clickHandler(e) {
            e.preventDefault(), this.animate(0);
          }
        }, {
          key: "activate",
          value: function activate(e) {
            e.addEventListener("click", this.clickHandler.bind(this));
          }
        }]);

        return _class7;
      }(e)
    );
  }.apply(t, i)) || (e.exports = l);
}, function (e, t, s) {
  var i, l;
  i = [s(0)], void 0 === (l = function (e) {
    return (
      /*#__PURE__*/
      function (_e5) {
        _inherits(_class8, _e5);

        function _class8() {
          _classCallCheck(this, _class8);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class8).apply(this, arguments));
        }

        _createClass(_class8, [{
          key: "hideAll",
          value: function hideAll() {
            this.links.forEach(function (e) {
              e.classList.remove("__active");
            }), this.tabs.forEach(function (e) {
              e.classList.remove("__active");
            });
          }
        }, {
          key: "showTab",
          value: function showTab(e) {
            this.links[e].classList.add("__active"), this.tabs[e].classList.add("__active");
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(e) {
            if ("click" === e.type) {
              var _t2 = this.links.indexOf(e.target);

              -1 !== _t2 && (this.hideAll(), this.showTab(_t2));
            }
          }
        }, {
          key: "activate",
          value: function activate(e) {
            this.links = Array.from(e.getElementsByClassName("js-link")), this.tabs = Array.from(e.getElementsByClassName("js-tab")), this.showTab(0), e.addEventListener("click", this);
          }
        }]);

        return _class8;
      }(e)
    );
  }.apply(t, i)) || (e.exports = l);
}, function (e, t, s) {
  var i, l;
  i = [s(0)], void 0 === (l = function (e) {
    var t = "js-nav-dropdown",
        s = "__hover";
    return (
      /*#__PURE__*/
      function (_e6) {
        _inherits(_class9, _e6);

        function _class9() {
          _classCallCheck(this, _class9);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class9).apply(this, arguments));
        }

        _createClass(_class9, [{
          key: "getScrollStyle",
          value: function getScrollStyle() {
            var e = document.createElement("div");
            e.className = "scroll-width-test";
            var t = document.createElement("style");
            t.innerHTML = ".scroll-width-test {overflow-y: scroll;width:50px;height:50px;position:absolute;left:-9999px}", e.appendChild(t), document.body.appendChild(e);
            var s = e.offsetWidth - e.clientWidth;
            document.body.removeChild(e);
            var i = document.createElement("style");
            i.innerHTML = "body.lg-on, body.lg-on .scroll-padding { padding-right: ".concat(s, "px } "), document.body.appendChild(i);
          }
        }, {
          key: "hideAll",
          value: function hideAll() {
            var e = this.element.getElementsByClassName(t + " " + s);
            Array.from(e).forEach(function (e) {
              e.classList.remove("__hover");
            });
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(e) {
            switch (e.type.toLowerCase()) {
              case "mouseenter":
                this.hideAll(), e.currentTarget.classList.add("__hover");
                break;

              case "click":
                e.target.classList.contains("nav_title") && (e.preventDefault(), this.menuWrapper.classList.add("__open"), e.currentTarget.classList.add("__hover"));
                break;

              case "mouseleave":
                this.hideAll();
            }
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.element.classList.toggle("__open"), this.closeMenuWrapper(), this.hideAll(), document.body.classList.toggle("lg-on", this.element.classList.contains("__open"));
          }
        }, {
          key: "closeMenuWrapper",
          value: function closeMenuWrapper() {
            this.menuWrapper.classList.remove("__open"), this.hideAll();
          }
        }, {
          key: "openSearch",
          value: function openSearch() {
            this.searchWrapper.classList.add("__open"), this.searchInput.focus();
          }
        }, {
          key: "closeSearch",
          value: function closeSearch() {
            this.searchWrapper.classList.remove("__open");
          }
        }, {
          key: "activate",
          value: function activate(e) {
            var _this3 = this;

            this.element = e, this.menuWrapper = e.querySelector(".nav_menu"), this.searchWrapper = e.querySelector(".nav_search"), this.searchInput = e.querySelector(".nav_search-input"), this.getScrollStyle();
            var s = e.getElementsByClassName(t);
            Array.from(s).forEach(function (e) {
              e.addEventListener("click", _this3);
            }), e.querySelector(".nav_open-button").addEventListener("click", this.toggleMenu.bind(this)), e.querySelector(".top-menu_overlay").addEventListener("click", this.toggleMenu.bind(this)), e.querySelector(".nav_back").addEventListener("click", this.closeMenuWrapper.bind(this)), e.querySelector(".js-search-open").addEventListener("click", this.openSearch.bind(this)), e.querySelector(".js-search-close").addEventListener("click", this.closeSearch.bind(this));
          }
        }]);

        return _class9;
      }(e)
    );
  }.apply(t, i)) || (e.exports = l);
}]);