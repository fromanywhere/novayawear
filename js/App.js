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

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  var o;
  void 0 === (o = function () {
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
  }.call(t, n, t, e)) || (e.exports = o);
}, function (e, t, n) {
  var o = document.getElementsByClassName("js-hook");
  Array.prototype.slice.call(o).forEach(function (e) {
    var t = e.getAttribute("data-module");

    if (t) {
      t.split(" ").forEach(function (t) {
        new (n(2)("./" + t + ".js"))().activate(e);
      });
    }
  });
}, function (e, t, n) {
  var o = {
    "./AbstractModule.js": 0,
    "./Grid.js": 3,
    "./ScrollTo.js": 4,
    "./TopMenu.js": 5,
    "./VerticalGridAligner.js": 6
  };

  function r(e) {
    var t = i(e);
    return n(t);
  }

  function i(e) {
    var t = o[e];

    if (!(t + 1)) {
      var n = new Error("Cannot find module '" + e + "'");
      throw n.code = "MODULE_NOT_FOUND", n;
    }

    return t;
  }

  r.keys = function () {
    return Object.keys(o);
  }, r.resolve = i, e.exports = r, r.id = 2;
}, function (e, t, n) {
  var o, r;
  o = [n(0)], void 0 === (r = function (e) {
    return (
      /*#__PURE__*/
      function (_e) {
        _inherits(_class2, _e);

        function _class2() {
          _classCallCheck(this, _class2);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
        }

        _createClass(_class2, [{
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

        return _class2;
      }(e)
    );
  }.apply(t, o)) || (e.exports = r);
}, function (e, t, n) {
  var o, r;
  o = [n(0)], void 0 === (r = function (e) {
    var t = 300;
    return (
      /*#__PURE__*/
      function (_e2) {
        _inherits(_class3, _e2);

        function _class3() {
          _classCallCheck(this, _class3);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class3).apply(this, arguments));
        }

        _createClass(_class3, [{
          key: "animate",
          value: function animate(e) {
            var n = window.pageYOffset,
                o = new Date().getTime(),
                r = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
                i = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
                a = Math.round(r - e < i ? r - i : e);
            "requestAnimationFrame" in window != 0 ? function e() {
              if (window.pageYOffset <= a) return;
              var r = new Date().getTime(),
                  i = Math.min(1, (r - o) / t),
                  s = (c = i) < .5 ? 4 * c * c * c : (c - 1) * (2 * c - 2) * (2 * c - 2) + 1;
              var c;
              window.scroll(0, Math.ceil(s * (a - n) + n)), requestAnimationFrame(e);
            }() : window.scroll(0, a);
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

        return _class3;
      }(e)
    );
  }.apply(t, o)) || (e.exports = r);
}, function (e, t, n) {
  var o, r;
  o = [n(0)], void 0 === (r = function (e) {
    var t = "js-nav-dropdown",
        n = "__hover";
    return (
      /*#__PURE__*/
      function (_e3) {
        _inherits(_class4, _e3);

        function _class4() {
          _classCallCheck(this, _class4);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class4).apply(this, arguments));
        }

        _createClass(_class4, [{
          key: "hideAll",
          value: function hideAll() {
            var e = this.element.getElementsByClassName(t + " " + n);
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

              case "mouseleave":
                this.hideAll();
            }
          }
        }, {
          key: "activate",
          value: function activate(e) {
            var _this = this;

            this.element = e;
            var n = e.getElementsByClassName(t);
            Array.from(n).forEach(function (e) {
              e.addEventListener("mouseenter", _this);
            }), e.addEventListener("mouseleave", this);
          }
        }]);

        return _class4;
      }(e)
    );
  }.apply(t, o)) || (e.exports = r);
}, function (e, t, n) {
  var o, r;
  o = [n(0)], void 0 === (r = function (e) {
    var t = 10;
    return (
      /*#__PURE__*/
      function (_e4) {
        _inherits(_class5, _e4);

        function _class5() {
          _classCallCheck(this, _class5);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class5).apply(this, arguments));
        }

        _createClass(_class5, [{
          key: "align",
          value: function align(e, n) {
            var o = n.clientHeight,
                r = Math.ceil(o / t) * t - o;
            e.style.marginBottom = "".concat(r, "px");
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
            var _this2 = this;

            this.findImageElement(e, function (t) {
              t.complete ? _this2.align(e, t) : t.onload = _this2.align.bind(_this2, e, t);
            });
          }
        }]);

        return _class5;
      }(e)
    );
  }.apply(t, o)) || (e.exports = r);
}]);