/** Global Image Path */
imgHost = typeof imgHost != 'undefined' ? imgHost : '//adi.vcmedia.vn/adt/cpc/';


/**
 *----------------------------------------------------------------------
 * ADMICRO BOXAPP LIB
 *----------------------------------------------------------------------
 *
 * Packages and functions:
 *    html:
 *            + addCss ( css, name, override )
 *            + removeCss ( name )
 *    dom:
 *            + addEvent ( element, eventName, func )
 *            + removeEvent ( element, eventName, func )
 *            + addClass ( element, className )
 *            + removeClass ( element, className )
 *            + getCss ( element, field )
 *    effect:
 *            + fadeOut ( element, options )
 *            + fadeIn ( element, options )
 *            + moveX ( element, left, options )
 *            + moveY ( element, top, options )
 *            + resizeW ( element, width, options )
 *            + resizeH ( element, height, options )
 *            + pagination
 *            + carousel
 *    util:
 *            + getTransparent ( element )
 *            + setTransparent ( element, value )
 *            + inArray ( needle, haystack, strict )
 *            + shuffle ( array );
 *
 *    html5:
 *            + <boolean> isVideoSupported()
 *
 *    plugin
 *            + flash
 *                + <boolean> enable
 */
var admBoxappLib = new function () {
    var n = this;
    this.html = new function () {
        this.addCss = function (a, b, d) {
            var e = document.getElementsByTagName("head")[0], m = null;
            if (void 0 != b)for (var f = e.getElementsByTagName("style"), c = 0, h = f.length; c < h; ++c)if (f[c].getAttribute("name") == b)if (d) {
                m = f[c];
                break
            } else return !1;
            null == m && (m = document.createElement("style"), m.type = "text/css", b && m.setAttribute("name", b), e.appendChild(m));
            m.styleSheet ? m.styleSheet.cssText = a : (m.innerHTML = "", a = document.createTextNode(a), m.appendChild(a));
            return !0
        };
        this.removeCss = function (a) {
            for (var b = document.head, d = b.getElementsByTagName("style"), e = 0, m = d.length; e < m; ++e)if (d[e].getAttribute("name") == a)return b.removeChild(d[e]), !0;
            return !1
        }
    };
    this.dom = new function () {
        this.addEvent = function (a, b, d) {
            "string" == typeof a && (a = document.getElementById(a));
            return a.addEventListener ? (a.addEventListener(b, d), !0) : a.attachEvent ? a.attachEvent("on" + b, d) : !1
        };
        this.removeEvent = function (a, b, d) {
            "string" == typeof a && (a = document.getElementById(a));
            return a.removeEventListener ? (a.removeEventListener(b,
                d), !0) : a.detachEvent ? a.detachEvent("on" + b, d) : !1
        };
        this.addClass = function (a, b) {
            "string" == typeof a && (a = document.getElementById(a));
            var d = a.className || "";
            if ("" == d)return a.className = b, !0;
            var e = d.split(" ");
            if (n.util.inArray(b, e))return !1;
            a.className = d + " " + b;
            return !0
        };
        this.removeClass = function (a, b) {
            "string" == typeof a && (a = document.getElementById(a));
            for (var d = (a.className || "").split(" "), e = 0, m = d.length; e < m; ++e)if (d[e] == b)return d.splice(e, 1), a.className = d.join(" "), !0;
            return !1
        };
        this.getCss = function (a, b) {
            "string" == typeof a && (a = document.getElementById(a));
            return window.getComputedStyle ? window.getComputedStyle(a).getPropertyValue(b) : a.currentStyle ? a.currentStyle[b] : null
        }
    };
    this.effect = new function () {
        this.fadeOut = function (a, b) {
            "string" == typeof a && (a = document.getElementById(a));
            var d = 0, e = -1, m = null, f = null, c = null;
            b && (d = b.fadeOutTo || 0, e = b.duration || -1, m = b.onStart || null, f = b.onProcess || null, c = b.onFinish || null);
            a.effectFadeTimer && window.clearTimeout(a.effectFadeTimer);
            var h = n.util.getTransparent(a), l = h - d;
            if (!(0 >= l)) {
                m &&
                m();
                if (0 > e)var g = h, p = function () {
                    g -= 0.05;
                    g <= d ? (n.util.setTransparent(a, d), 0 == d && (a.style.display = "none"), c && c(), a.effectFadeTimer = null) : (n.util.setTransparent(a, g), f && f((h - g) / (h - d)), a.effectFadeTimer = window.setTimeout(p, 10))
                }; else var q = (new Date).getTime(), p = function () {
                    var b = ((new Date).getTime() - q) / e, g = h - b * l;
                    g <= d ? (n.util.setTransparent(a, d), 0 == d && (a.style.display = "none"), c && c(), a.effectFadeTimer = null) : (n.util.setTransparent(a, g), f && f(b), a.effectFadeTimer = window.setTimeout(p, 10))
                };
                p()
            }
        };
        this.fadeIn =
            function (a, b) {
                "string" == typeof a && (a = document.getElementById(a));
                var d = 1, e = -1, m = null, f = null, c = null;
                b && (d = b.fadeInTo || 1, e = b.duration || -1, m = b.onStart || null, f = b.onProcess || null, c = b.onFinish || null);
                a.effectFadeTimer && window.clearTimeout(a.effectFadeTimer);
                var h = n.util.getTransparent(a), l = d - h;
                if (!(0 >= l)) {
                    if ("none" == a.style.display || "none" == n.dom.getCss(a, "display"))n.util.setTransparent(a, 0), a.style.display = "block";
                    m && m();
                    if (0 > e)var g = h, p = function () {
                        g += 0.05;
                        g >= d ? (n.util.setTransparent(a, d), c && c(), a.effectFadeTimer =
                            null) : (n.util.setTransparent(a, g), f && f((g - h) / (d - h)), a.effectFadeTimer = window.setTimeout(p, 10))
                    }; else var q = (new Date).getTime(), p = function () {
                        var b = ((new Date).getTime() - q) / e, g = h + b * l;
                        g >= d ? (n.util.setTransparent(a, d), c && c(), a.effectFadeTimer = null) : (n.util.setTransparent(a, g), f && f(b), a.effectFadeTimer = window.setTimeout(p, 10))
                    };
                    p()
                }
            };
        this.moveX = function (a, b, d) {
            "string" == typeof a && (a = document.getElementById(a));
            var e = -1, m = null, f = null, c = null;
            d && (e = d.duration || -1, m = d.onStart || null, f = d.onProcess || null, c =
                d.onFinish || null);
            a.effectMoveXTimer && window.clearTimeout(a.effectMoveXTimer);
            m && m();
            var h = parseInt(a.style.left || n.dom.getCss(a, "left")) || 0, l = b - h;
            if (0 != l) {
                if (0 > e)var g = h, p = function () {
                    g = 0 > l ? g - 5 : g + 5;
                    0 < l && g >= b || 0 > l && g <= b ? (a.style.left = b + "px", c && c(), a.effectMoveXTimer = null) : (a.style.left = "" + g + "px", f && f((g - h) / l), a.effectMoveXTimer = window.setTimeout(p, 10))
                }; else var q = (new Date).getTime(), p = function () {
                    var d = ((new Date).getTime() - q) / e, g = h + d * l;
                    0 < l && g >= b || 0 > l && g <= b ? (a.style.left = b + "px", c && c(), a.effectMoveXTimer =
                        null) : (a.style.left = "" + g + "px", f && f(d), a.effectMoveXTimer = window.setTimeout(p, 10))
                };
                p()
            }
        };
        this.resizeW = function (a, b, d) {
            "string" == typeof a && (a = document.getElementById(a));
            var e = -1, m = null, f = null, c = null;
            d && (e = d.duration || -1, m = d.onStart || null, f = d.onProcess || null, c = d.onFinish || null);
            a.effectResizeWTimer && window.clearTimeout(a.effectResizeWTimer);
            m && m();
            var h = parseInt(a.style.width || n.dom.getCss(a, "width")) || 0, l = b - h;
            if (0 != l) {
                if (0 > e)var g = h, p = function () {
                    g = 0 > l ? g - 5 : g + 5;
                    0 < l && g >= b || 0 > l && g <= b ? (a.style.width = b +
                        "px", c && c(), a.effectResizeWTimer = null) : (a.style.width = "" + g + "px", f && f((g - h) / l), a.effectResizeWTimer = window.setTimeout(p, 10))
                }; else var q = (new Date).getTime(), p = function () {
                    var d = ((new Date).getTime() - q) / e, g = h + d * l;
                    0 < l && g >= b || 0 > l && g <= b ? (a.style.width = b + "px", c && c(), a.effectResizeWTimer = null) : (a.style.width = "" + g + "px", f && f(d), a.effectResizeWTimer = window.setTimeout(p, 10))
                };
                p()
            }
        };
        this.resizeH = function (a, b, d) {
            "string" == typeof a && (a = document.getElementById(a));
            var e = -1, m = null, f = null, c = null;
            d && (e = d.duration || -1, m = d.onStart || null, f = d.onProcess || null, c = d.onFinish || null);
            a.effectResizeHTimer && window.clearTimeout(a.effectResizeHTimer);
            m && m();
            var h = parseInt(a.style.height || n.dom.getCss(a, "height")) || 0, l = b - h;
            if (0 != l) {
                if (0 > e)var g = h, p = function () {
                    g = 0 > l ? g - 5 : g + 5;
                    0 < l && g >= b || 0 > l && g <= b ? (a.style.height = b + "px", c && c(), a.effectResizeHTimer = null) : (a.style.height = "" + g + "px", f && f((g - b) / l), a.effectResizeHTimer = window.setTimeout(p, 10))
                }; else var q = (new Date).getTime(), p = function () {
                    var d = ((new Date).getTime() - q) / e, g = h + d * l;
                    0 <
                    l && g >= b || 0 > l && g <= b ? (a.style.height = b + "px", c && c(), a.effectResizeHTimer = null) : (a.style.height = "" + g + "px", f && f(d), a.effectResizeHTimer = window.setTimeout(p, 10))
                };
                p()
            }
        };
        this.moveY = function (a, b, d) {
            "string" == typeof a && (a = document.getElementById(a));
            var e = 200, m = null, f = null, c = null;
            d && (e = d.duration || 200, m = d.onStart || null, f = d.onProcess || null, c = d.onFinish || null);
            a.effectMoveYTimer && window.clearTimeout(a.effectMoveYTimer);
            m && m();
            var h = parseInt(a.style.top || n.dom.getCss(a, "top")) || 0, l = b - h;
            if (0 != l) {
                if (0 > e)var g =
                    h, p = function () {
                    g = 0 > l ? g - 5 : g + 5;
                    0 < l && g >= b || 0 > l && g <= b ? (a.style.top = b + "px", c && c(), a.effectMoveYTimer = null) : (a.style.top = "" + g + "px", f && f((g - h) / l), a.effectMoveYTimer = window.setTimeout(p, 10))
                }; else var q = (new Date).getTime(), p = function () {
                    var d = ((new Date).getTime() - q) / e, g = h + d * l;
                    0 < l && g >= b || 0 > l && g <= b ? (a.style.top = b + "px", c && c(), a.effectMoveYTimer = null) : (a.style.top = "" + g + "px", f && f(d), a.effectMoveYTimer = window.setTimeout(p, 10))
                };
                p()
            }
        };
        this.pagination = new function () {
            this.create = function (a, b, d, e) {
                "string" == typeof a &&
                (a = document.getElementById(a));
                var m = 0, f = !0, c = !0, h = "";
                e && (m = e.startPage || 0, c = void 0 !== e.repeat ? e.repeat : !0, f = void 0 !== e.direction ? e.direction : !0, h = e.defaultEffect || null);
                e = a.children;
                n.html.addCss(".admBoxappPagination { position:relative; overflow:hidden; } .admBoxappPaginationItem { position:absolute; top:0px; left:0px; width:100%; height:100%; overflow:hidden; z-index:1; display:none; } ", "admBoxappPagination");
                n.dom.addClass(a, "admBoxappPagination");
                for (var l = 0, g = e.length; l < g; ++l)n.dom.addClass(e[l],
                    "admBoxappPaginationItem");
                a.setAttribute("curPage", m);
                a.setAttribute("repeat", c ? 1 : 0);
                a.setAttribute("direction", f ? 1 : 0);
                a.setAttribute("defaultEffect", h);
                a.setAttribute("width", b);
                a.setAttribute("height", d);
                e[m].style.display = "block";
                e[m].style.zIndex = 2
            };
            this.go = function (a, b, d, e) {
                "string" == typeof a && (a = document.getElementById(a));
                var m = a.getAttribute("curPage");
                if (b == m)return !1;
                if (0 > b) {
                    b = "0" == a.getAttribute("repeat") ? !1 : !0;
                    if (!1 == b)return;
                    b = a.children.length - 1
                } else if (b >= a.children.length) {
                    b = "0" ==
                    a.getAttribute("repeat") ? !1 : !0;
                    if (!1 == b)return;
                    b = 0
                }
                d || (d = a.getAttribute("defaultEffect"));
                if ("random" == d) {
                    d = ["none", "fade", "slide", "flip", "fly"];
                    var f = Math.floor(1E3 * Math.random() % d.length);
                    d = d[f]
                }
                var f = 0 == a.getAttribute("direction") ? !1 : !0, c = a.children[m], h = a.children[b];
                switch (d) {
                    case "fade":
                        n.effect.fadeOut(c, {
                            onFinish: function () {
                                c.style.display = "none";
                                c.style.zIndex = 1;
                                n.util.setTransparent(c, 1)
                            }
                        });
                        n.effect.fadeIn(h, {
                            onFinish: function () {
                                h.style.zIndex = 2
                            }
                        });
                        break;
                    case "slide":
                        e = e ? e.direction : b > m ?
                            f ? "rl" : "bt" : f ? "lr" : "tb";
                        if ("lr" == e) {
                            var l = a.getAttribute("width");
                            n.effect.moveX(c, l, {
                                duration: 300, onFinish: function () {
                                    c.style.display = "none";
                                    c.style.left = "0px";
                                    c.style.zIndex = 1
                                }
                            });
                            n.effect.moveX(h, 0, {
                                duration: 300, onStart: function () {
                                    h.style.left = -l + "px";
                                    h.style.display = "block";
                                    h.style.zIndex = 2
                                }
                            })
                        } else if ("rl" == e)l = a.getAttribute("width"), n.effect.moveX(c, -l, {
                            duration: 300,
                            onStart: function () {
                                c.style.zIndex = 1
                            },
                            onFinish: function () {
                                c.style.display = "none";
                                c.style.left = "0px";
                                c.style.zIndex = 1
                            }
                        }), n.effect.moveX(h,
                            0, {
                                duration: 300, onStart: function () {
                                    h.style.left = l + "px";
                                    h.style.display = "block";
                                    h.style.zIndex = 2
                                }
                            }); else if ("bt" == e) {
                            var g = a.getAttribute("height");
                            n.effect.moveY(c, -g, {
                                duration: 300, onFinish: function () {
                                    c.style.display = "none";
                                    c.style.top = "0px";
                                    c.style.zIndex = 1
                                }
                            });
                            n.effect.moveY(h, 0, {
                                duration: 300, onStart: function () {
                                    h.style.top = g + "px";
                                    h.style.zIndex = 2;
                                    h.style.display = "block"
                                }
                            })
                        } else g = a.getAttribute("height"), n.effect.moveY(c, g, {
                            duration: 300, onFinish: function () {
                                c.style.display = "none";
                                c.style.top = "0px";
                                c.style.zIndex = 1
                            }
                        }), n.effect.moveY(h, 0, {
                            duration: 300, onStart: function () {
                                h.style.top = -g + "px";
                                h.style.zIndex = 2;
                                h.style.display = "block"
                            }
                        });
                        break;
                    case "flip":
                        e = e ? e.direction : b > m ? f ? "rl" : "bt" : f ? "lr" : "tb";
                        "lr" == e ? (l = a.getAttribute("width"), n.effect.fadeOut(c, {
                            duration: 300,
                            onStart: function () {
                                c.style.zIndex = 1
                            },
                            onFinish: function () {
                                n.util.setTransparent(c, 1)
                            }
                        }), n.effect.moveX(h, 0, {
                            duration: 300, onStart: function () {
                                h.style.left = -l + "px";
                                h.style.zIndex = 2;
                                h.style.display = "block"
                            }
                        })) : "rl" == e ? (l = a.getAttribute("width"),
                            n.effect.fadeOut(c, {
                                duration: 300, onStart: function () {
                                    c.style.zIndex = 1
                                }, onFinish: function () {
                                    n.util.setTransparent(c, 1)
                                }
                            }), n.effect.moveX(h, 0, {
                            duration: 300, onStart: function () {
                                h.style.left = l + "px";
                                h.style.zIndex = 2;
                                h.style.display = "block"
                            }
                        })) : "bt" == e ? (g = a.getAttribute("height"), n.effect.fadeOut(c, {
                            duration: 300,
                            onStart: function () {
                                c.style.zIndex = 1
                            },
                            onFinish: function () {
                                n.util.setTransparent(c, 1)
                            }
                        }), n.effect.moveY(h, 0, {
                            duration: 300, onStart: function () {
                                h.style.top = g + "px";
                                h.style.zIndex = 2;
                                h.style.display = "block"
                            }
                        })) :
                            (g = a.getAttribute("height"), n.effect.fadeOut(c, {
                                duration: 300, onStart: function () {
                                    c.style.zIndex = 1
                                }, onFinish: function () {
                                    n.util.setTransparent(c, 1)
                                }
                            }), n.effect.moveY(h, 0, {
                                duration: 300, onStart: function () {
                                    h.style.top = -g + "px";
                                    h.style.zIndex = 2;
                                    h.style.display = "block"
                                }
                            }));
                        break;
                    case "fly":
                        e = e ? e.direction : b > m ? f ? "rl" : "bt" : f ? "lr" : "tb";
                        "lr" == e ? (l = a.getAttribute("width"), h.style.display = "block", n.effect.fadeOut(c, {
                            duration: 300,
                            onFinish: function () {
                                n.util.setTransparent(c, 1)
                            }
                        }), n.effect.moveX(c, l, {
                            duration: 300,
                            onFinish: function () {
                                h.style.zIndex = 2;
                                c.style.zIndex = 1;
                                c.style.left = "0px"
                            }
                        })) : "rl" == e ? (l = a.getAttribute("width"), h.style.display = "block", n.effect.fadeOut(c, {
                            duration: 300,
                            onFinish: function () {
                                n.util.setTransparent(c, 1)
                            }
                        }), n.effect.moveX(c, -l, {
                            duration: 300, onFinish: function () {
                                c.style.left = "0px";
                                c.style.zIndex = 1;
                                h.style.zIndex = 2
                            }
                        })) : "bt" == e ? (g = a.getAttribute("height"), h.style.display = "block", n.effect.fadeOut(c, {
                            duration: 300,
                            onFinish: function () {
                                n.util.setTransparent(c, 1)
                            }
                        }), n.effect.moveY(c, -g, {
                            duration: 300,
                            onFinish: function () {
                                h.style.zIndex = 2;
                                c.style.zIndex = 1;
                                c.style.top = "0px"
                            }
                        })) : (g = a.getAttribute("height"), h.style.display = "block", n.effect.fadeOut(c, {
                            duration: 300,
                            onFinish: function () {
                                n.util.setTransparent(c, 1)
                            }
                        }), n.effect.moveY(c, g, {
                            duration: 300, onFinish: function () {
                                c.style.top = "0px";
                                c.style.zIndex = 1;
                                h.style.zIndex = 2
                            }
                        }));
                        break;
                    default:
                        c.style.zIndex = 1, h.style.zIndex = 2, c.style.display = "none", h.style.display = "block"
                }
                a.setAttribute("curPage", b)
            };
            this.prev = function (a, b, d) {
                "string" == typeof a && (a = document.getElementById(a));
                var e = parseInt(a.getAttribute("curPage")), e = --e;
                return this.go(a, e, b, d)
            };
            this.next = function (a, b, d) {
                "string" == typeof a && (a = document.getElementById(a));
                var e = parseInt(a.getAttribute("curPage")), e = ++e;
                return this.go(a, e, b, d)
            };
            this.getCurrentPage = function (a) {
                "string" == typeof a && (a = document.getElementById(a));
                return a.getAttribute("curPage")
            }
        };
        this.carousel = new function () {
            this.create = function (a, b, d, e, m) {
                "string" == typeof a && (a = document.getElementById(a));
                var f = 0, c = !0, h = !0, l = 0;
                m && (f = m.startItem || 0, c = void 0 !==
                m.direction ? m.direction : !0, h = void 0 !== m.repeat ? m.repeat : !0, l = m.separatorSize || 0);
                n.html.addCss(".admBoxappCarousel { position:relative; overflow:hidden; } .admBoxappCarouselContainer { position:absolute; top:0px; left:0px; );", "admBoxappCarousel");
                n.dom.addClass(a, "admBoxappCarousel");
                n.dom.addClass(a.children[0], "admBoxappCarouselContainer");
                a.setAttribute("curItem", f);
                a.setAttribute("repeat", h ? 1 : 0);
                a.setAttribute("direction", c ? 1 : 0);
                a.setAttribute("carouselSize", b);
                a.setAttribute("itemSize", d);
                a.setAttribute("numItems",
                    e);
                a.setAttribute("separatorSize", l);
                a = a.children[0];
                c ? a.style.left = "0px" : a.style.top = "0px"
            };
            this.go = function (a, b) {
                "string" == typeof a && (a = document.getElementById(a));
                var d = a.getAttribute("curItem");
                if (b == d)return !1;
                var e = a.getAttribute("numItems");
                if (0 > b) {
                    d = "0" == a.getAttribute("repeat") ? !1 : !0;
                    if (!1 == d)return !1;
                    b = e - 1
                } else if (b >= e) {
                    d = "0" == a.getAttribute("repeat") ? !1 : !0;
                    if (!1 == d)return !1;
                    b = 0
                }
                var d = "0" == a.getAttribute("direction") ? !1 : !0, m = a.getAttribute("carouselSize"), f = a.getAttribute("itemSize"), e =
                    a.getAttribute("numItems"), c = a.getAttribute("separatorSize"), e = e * f + (e - 1) * c - m, f = b * f + b * c, f = f > e ? -e : -f;
                d ? n.effect.moveX(a.children[0], f, {duration: 200}) : n.effect.moveY(a.children[0], f, {duration: 200});
                a.setAttribute("curItem", b);
                return !0
            };
            this.prev = function (a) {
                "string" == typeof a && (a = document.getElementById(a));
                var b = parseInt(a.getAttribute("curItem"));
                return this.go(a, b - 1)
            };
            this.next = function (a) {
                "string" == typeof a && (a = document.getElementById(a));
                var b = parseInt(a.getAttribute("curItem"));
                return this.go(a,
                    b + 1)
            };
            this.getCurrentItem = function (a) {
                "string" == typeof a && (a = document.getElementById(a));
                return a.getAttribute("curItem")
            }
        }
    };
    this.util = new function () {
        this.getTransparent = function (a) {
            "string" == typeof a && (a = document.getElementById(a));
            return "none" == a.style.display || "none" == n.dom.getCss(a, "display") ? 0 : void 0 != a.style.opacity ? (a = parseFloat(a.style.opacity), isNaN(a) ? 1 : a) : void 0 != a.style.filter ? (a = a.style.filter.toLowerCase().match(/opacity=[\d.]+/)) ? (a = a[0].substr(8), a = parseFloat(a), isNaN(a) ? 1 : a) : 1 : null
        };
        this.setTransparent = function (a, b) {
            "string" == typeof a && (a = document.getElementById(a));
            a.style.opacity = b;
            a.style.filter = "alpha(opacity=" + 100 * b + ")"
        };
        this.inArray = function (a, b, d) {
            if (d)for (k in b) {
                if (b[k] === a)return !0
            } else for (k in b)if (b[k] == a)return !0;
            return !1
        };
        this.shuffle = function (a) {
            for (i = 1; i < a.length; ++i) {
                var b = Math.round(Math.random() * i), d = a[b];
                a[b] = a[i];
                a[i] = d
            }
        };
        this.toArray = function (a) {
            var b = [];
            for (k in a)b.push(a[k]);
            return b
        };
        this.getDomainFromString = function (a) {
            a = a.match(/:\/\/[^\/]*/);
            return null ==
            a || 0 == a.length ? "" : a[0].substr(3)
        }
    };
    this.html5 = new function () {
        this.isVideoSupported = function () {
            return !!document.createElement("video").play
        }
    };
    this.plugin = new function () {
        this.flash = new function () {
            this.enable = (new function () {
                var a, b, d, e, m, f = this;
                f.installed = !1;
                f.raw = "";
                f.major = -1;
                f.minor = -1;
                f.revision = -1;
                f.revisionStr = "";
                var c = [{
                    name: "ShockwaveFlash.ShockwaveFlash.7", version: function (a) {
                        return h(a)
                    }
                }, {
                    name: "ShockwaveFlash.ShockwaveFlash.6", version: function (a) {
                        var b = "6.0.r21";
                        try {
                            a.AllowScriptAccess =
                                "always", b = h(a)
                        } catch (c) {
                        }
                        return b
                    }
                }, {
                    name: "ShockwaveFlash.ShockwaveFlash", version: function (a) {
                        return h(a)
                    }
                }], h = function (a) {
                    var b = -1;
                    try {
                        b = a.GetVariable("$version")
                    } catch (c) {
                    }
                    return b
                };
                f.majorAtLeast = function (a) {
                    return f.major >= a
                };
                f.minorAtLeast = function (a) {
                    return f.minor >= a
                };
                f.revisionAtLeast = function (a) {
                    return f.revision >= a
                };
                f.versionAtLeast = function (a) {
                    var b = [f.major, f.minor, f.revision], c = Math.min(b.length, arguments.length);
                    for (i = 0; i < c; i++)if (b[i] >= arguments[i]) {
                        if (!(i + 1 < c && b[i] == arguments[i]))return !0
                    } else return !1
                };
                if (navigator.plugins && 0 < navigator.plugins.length) {
                    if ((c = navigator.mimeTypes) && c["application/x-shockwave-flash"] && c["application/x-shockwave-flash"].enabledPlugin && c["application/x-shockwave-flash"].enabledPlugin.description) {
                        var l = c["application/x-shockwave-flash"].enabledPlugin.description, g = l, c = g.split(/ +/), l = c[2].split(/\./), c = c[3];
                        a = g;
                        b = parseInt(l[0], 10);
                        d = parseInt(l[1], 10);
                        e = c;
                        m = parseInt(c.replace(/[a-zA-Z]/g, ""), 10) || f.revision;
                        f.raw = a;
                        f.major = b;
                        f.minor = d;
                        f.revisionStr = e;
                        f.revision = m;
                        f.installed = !0
                    }
                } else if (-1 == navigator.appVersion.indexOf("Mac") && window.execScript)for (l = -1, g = 0; g < c.length && -1 == l; g++) {
                    a = -1;
                    try {
                        a = new ActiveXObject(c[g].name)
                    } catch (n) {
                        a = {activeXError: !0}
                    }
                    a.activeXError || (f.installed = !0, l = c[g].version(a), -1 != l && (a = l, e = a.split(","), b = parseInt(e[0].split(" ")[1], 10), d = parseInt(e[1], 10), m = parseInt(e[2], 10), e = e[2], f.raw = a.replace("Shockwave Flash ", ""), f.major = b, f.minor = d, f.revision = m, f.revisionStr = e))
                }
            }).installed
        }
    }
};

/**
 * Gan them chuoi UTMxxx vao url
 * Ktra url neu chua co ca 3 truong utm_source, utm_medium, utm_campaign thi gan them chuoi utm vao url
 *
 * E.g:
 *        utm string: utm_source=Admicro&utm_medium=BoxApp&utm_campaign=BoxAppCampaign
 *
 * @par <string> url
 * @par <string> utm
 * @return <string> url co chua tml
 */
function admUtilAppendUTM(url, utm) {
    // ko dung utm
    if (utm == undefined)
        return url;

    // ktra neu url co chua utm_source | utm_medium | utm_campaign thi bo qua
    var reg = /(\?|&)(utm_source|utm_medium|utm_campaign)=/;
    var hasUTM = reg.test(url);

    if (hasUTM)
        return url;

    // append utm to url
    var ch = url.indexOf('?') >= 0 ? '&' : '?';

    return url + ch + utm;
}


/**
 *----------------------------------------------------------------------
 * ADMICRO ZONE
 *----------------------------------------------------------------------
 *
 * Class: AdmZone
 */
function AdmZones() {
    this.element = null;

    /** [Bỏ] Backup cho code cũ */
    this.InitScript = function () {
    }

    /**
     * Khởi tạo và vẽ zone
     *
     * @par <object> data: dữ liệu của zone
     * @par optional <DOM Element | string> element: element hoặc element id,
     *                    element sẽ chứa nội dung zone. Nếu tham số bị bỏ qua,
     *                    zone sẽ tự động vẽ vào vị trị hiện tại
     */
    this.OnLoaded = function (data, element) {
        // xử lý và đưa tham số element về dạng "DOM Element"
        // nếu element bị bỏ qua thì theo id mặc định
        // nếu ko có thì tự vẽ vào vị trí hiện tại
        if (element == undefined) {
            var defaultElementId = 'appzone';

            // lấy theo id mặc định
            element = document.getElementById(defaultElementId);

            // hoặc vẽ ở vị trí hiện tại
            if (!element) {
                element = defaultElementId;
                document.write('<div id="' + defaultElementId + '"></div>');
            }
        }

        element = typeof element == 'string' ? document.getElementById(element) : element;
        this.element = element;

        // Chọn lấy một banner từ zone data
        var bannerData = this._chooseBanner(data);

        // nếu ko chọn được banner thì kết thúc
        if (bannerData == null) {
            // log
            element.innerHTML = '<!-- Khong chon duoc banner nao tu zone data -->';

            // exit
            return;
        }

        // thực hiện vẽ khung zone
        this._draw(element, data);

        // tạo banner và vẽ khung banner và zone
        var banner = new AdmBoxapp300x250Banner(this, bannerData, element);

        // gọi sự kiện banner hoàn thành
        if (banner.onFinished)
            banner.onFinished();
    };

    /**
     * Chọn lấy một banner từ zone data
     *
     * @par <array> data: zone data
     * @return <array> banner data, null nếu ko chọn được
     */
    this._chooseBanner = function (data) {
        return data;
    };

    /**
     * Thực hiện vẽ khung zone
     *
     * @par <DOMElement> element: element chứa nội dung zone
     * @par <Object> data: dữ liệu của zone
     */
    this._draw = function (element, data) {
        // Currently, nothing to do...
    }
}


/**
 *----------------------------------------------------------------------
 * ADMICRO BOXAPP 300x250
 *----------------------------------------------------------------------
 */
function AdmBoxapp300x250Banner(zone, data, element) {
    /**
     * @const constant <string> banner image path
     */
    this._IMG_PATH_ = imgHost + 'adsapp/template/300x250/';

    /**
     * @const <array> skins: một số skin được định nghĩa sẵn
     */
    var _SKINS_ = {
        "9": {
            "tabBtsColor": ["#2b2729", "#edb509"], // normal selected
            "borderColor": "#f00"
        },
        "10": {
            "tabBtsColor": ["#2b2729", "#e83c8d"],
            "borderColor": "#55BAF9"
        },
        "11": {
            "tabBtsColor": ["#2b2729", "#eab385"],
            "borderColor": "#71AA1B"
        },
        "12": {
            "tabBtsColor": ["#2b2729", "#366a9c"],
            "borderColor": "#F26A2F"
        },
        "13": {
            "tabBtsColor": ["#2b2729", "#8b589e"],
            "borderColor": "#8F5EA3"
        },
        "14": {
            "tabBtsColor": ["#2b2729", "#ff6600"],
            "borderColor": "#379078"
        },
        "15": {
            "tabBtsColor": ["#2b2729", "#2b2729"],
            "borderColor": "#E5B82F"
        },
        "16": {
            "tabBtsColor": ["#2b2729", "#2b2729"],
            "borderColor": "#DE2690"
        },
        "17": {
            "tabBtsColor": ["#2b2729", "#018b76"],
            "borderColor": "#E4B087"
        },
        "18": {
            "tabBtsColor": ["#2b2729", "#e12633"],
            "borderColor": "#4B6E9E"
        },
        "19": {
            "tabBtsColor": ["#2b2729", "#00a4e1"],
            "borderColor": "#4B6E9E"
        },
        "20": {
            "tabBtsColor": ["#2b2729", "#ff6600"],
            "borderColor": "#4B6E9E"
        }
    };


    /**
     * @var <AdmZone>: zone quản lý banner
     */
    this.zone;

    /**
     * @var <DOM Element> element sẽ chứa nội dung banner
     */
    this.element;

    /**
     * @var <int> banner id
     */
    this.id;

    /**
     * @var <array> rawData: dữ liệu chưa xử lý, được lấy từ data trả về
     */
    this.rawData;

    /**
     * @var <array Module>: danh sách các module chạy trong banner
     */
    this.modules = new Array();

    /**
     * @par <object> skin: đối tượng quản lý skin
     */
    this.skin = {
        // <boolean> useBuiltIn: true=use built-in skin, false=user customize
        "useBuiltIn": false,
        // <string> imgPath: path to skin image directory
        "imgPath": null,
        // <array[string]> bgImages: bgImage of each tabs
        "bgImages": null,
        // <string> btBtsBgImage: background image of tab buttons (using css Sprite)
        "tabBtsBgImage": null,
        // <array[string]> tabBtsColor: text color of tab buttons,
        // first item is normal color, second item is active/hover color
        "tabBtsColor": null,
        // <string> borderColor: border color
        "borderColor": null
    };

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor method
     *
     * @par <AdmZone>: zone quản lý banner
     * @par <Object> data: dữ liệu banner
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung banner
     */
    this.__constructor = function (zone, data, element) {
        // xử lý và đưa tham số element về dạng "DOM Element"
        if (typeof element == 'string')
            element = document.getElementById(element);

        this.element = element;

        // set properties
        this.zone = zone;
        this.id = data.id;
        this.rawData = data;

        this.idPrefix = 'admBoxapp300x250Banner' + this.id;
        this.cssPrefix = 'admBoxapp300x250Banner' + this.id;

        // gán UTMxxx vào link click
        data.click = admUtilAppendUTM(data.click, data.keyword);

        // ktra sử dụng built-in skin hay user customize
        var skinCode = null;
        var moduleTitles = null;

        if (data.skin) {
            var arrSkin = data.skin.split('|||');
            var intSkin = arrSkin.shift();

            if (isNaN(parseInt(intSkin))) {
                skinCode = null;
            }
            else {
                skinCode = intSkin;
                moduleTitles = arrSkin;
            }
        }

        // khởi tạo skin
        if (skinCode != null) {
            ++skinCode; // fix tam thoi de ko phai doi lai thu muc anh

            this.skin['useBuiltIn'] = true;
            this.skin['imgPath'] = this._IMG_PATH_ + 'skin' + skinCode + '/';
            this.skin['borderColor'] = _SKINS_[skinCode].borderColor;
            this.skin['tabBtsColor'] = _SKINS_[skinCode].tabBtsColor;
            this.skin['tabBtsBgImage'] = this._IMG_PATH_ + "skin" + skinCode + "/bgBtTabs.png";
            this.skin['bgImages'] = [
                this._IMG_PATH_ + "skin" + skinCode + "/bg.jpg",
                this._IMG_PATH_ + "skin" + skinCode + "/bg.jpg",
                this._IMG_PATH_ + "skin" + skinCode + "/bg.jpg"
            ];
        }
        else {
            this.skin['useBuiltIn'] = false;
            this.skin['imgPath'] = this._IMG_PATH_ + 'skinDefault/';
            this.skin['bgImages'] = [];
            this.skin['borderColor'] = 'transparent';
            this.skin['tabBtsBgImage'] = null;
            this.skin['tabBtsColor'] = null;
        }

        // khởi tạo modules
        var moduleOrders = data.order.split(',');

        for (var i = 0, len = moduleOrders.length; i < len; ++i) {
            var formatAndIndex = moduleOrders[i];
            var moduleData = data.items[formatAndIndex];
            var moduleTitle = null;
            var moduleOption = null;

            if (skinCode == null) {
                moduleTitle = '';

                moduleOption = moduleData.shift();
                this.skin['bgImages'][i] = moduleOption.background;
            }
            else {
                moduleTitle = moduleTitles[i];
            }

            this.modules[i] = {
                'format': formatAndIndex.replace(/\:[0-9]/, ''),
                'title': moduleTitle,
                'data': moduleData,
                'option': moduleOption
            };
        }

        // get default module
        var defaultModule = data.fix == 1 ? Math.floor(Math.random() * this.modules.length) : 0;
        element.setAttribute('curModule', defaultModule);

        // ve khung banner
        this._draw(data, element);
    };

    /**
     * Vẽ khung banner
     *
     * @par <Object> data: dữ liệu banner
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung banner
     */
    this._draw = function (data, element) {
        var logo = data.logo;

        // ------------ build css -----------------
        var css
            = '.' + this.cssPrefix + '{ background:no-repeat; width:300px; height:250px; margin:0px; padding:0px; position:relative; text-align:left; }'

                // top panel
            + '.' + this.cssPrefix + 'TopPl{ position:absolute; top:0; left:0; height:40px; width:100%; padding:0; overflow:hidden; }'
            + '.' + this.cssPrefix + 'Logo{' + (this.skin.useBuiltIn ? ' background:url("' + data.logo + '") left center no-repeat;' : '') + ' display:block; height:30px; width:100px; position:absolute; left:5px; top:5px; border:none; outline:none; }'
            + '.' + this.cssPrefix + 'Manufacturer{ position:absolute; right:0; top:0; width:28px; height:13px; background: url("' + this._IMG_PATH_ + 'bgManufacturerShort.png") left no-repeat; } '

                // tab panel
            + '.' + this.cssPrefix + 'TabPl{ position:absolute; top:13px; left:110px; height:27px; }'
            + '.' + this.cssPrefix + 'TabButton,'
            + '.' + this.cssPrefix + 'TabButton:hover,'
            + '.' + this.cssPrefix + 'TabButtonSelected{' + (this.skin.useBuiltIn ? 'background:url("' + this.skin['tabBtsBgImage'] + '") left top no-repeat; color:' + this.skin['tabBtsColor'][0] + ' !important; ' : '') + ' display:block; float: left;width:90px; height:100%; margin:0 5px 0 0; font:normal 11px/27px arial, tahoma; overflow:hidden; text-align:center; text-decoration:none !important; }'
            + '.' + this.cssPrefix + 'TabButton:hover,'
            + '.' + this.cssPrefix + 'TabButtonSelected,'
            + '.' + this.cssPrefix + 'TabButtonSelected:hover{ ' + (this.skin.useBuiltIn ? 'background:url("' + this.skin['tabBtsBgImage'] + '") left bottom no-repeat; color:' + this.skin['tabBtsColor'][1] + ' !important; font-weight:bold; text-decoration:none !important;' : '') + '}'

                // center panel
            + '.' + this.cssPrefix + 'ContentPl{ position:absolute; top:40px; left:5px; height:195px; width:290px; overflow:hidden; }'
            + '.' + this.cssPrefix + 'Module{ position:absolute; top:0; left:0px; height:100%; width: 100%; display:none; } '

                // bottom panel
            + '.' + this.cssPrefix + 'BottomPl{ position: absolute; left:0; bottom:0; width:100%; height:15px; }'
            + '.' + this.cssPrefix + 'Website,'
            + '.' + this.cssPrefix + 'Website:hover{ position:absolute; left:5px; top:0; color:#FFF !important; font:normal 10px/15px tahoma; text-decoration:none !important; } '
            + '.' + this.cssPrefix + 'Pagination { position:absolute; top:0; right:5px; }'
            + '.' + this.cssPrefix + 'Pagination div { display:none; }'
            + '.' + this.cssPrefix + 'Pagination a,'
            + '.' + this.cssPrefix + 'Pagination a:hover{ background-image:url("' + this.skin['imgPath'] + 'pagination.png"); background-repeat:no-repeat; display:block; height:7px; float:left; text-decoration:none; margin:3px 3px 0 0; }'
            + '.' + this.cssPrefix + 'PrevPage,'
            + '.' + this.cssPrefix + 'PrevPage:hover{ background-position: 0 -14px; width:5px; }'
            + '.' + this.cssPrefix + 'NextPage,'
            + '.' + this.cssPrefix + 'NextPage:hover{ background-position:0 -21px; width:5px; }'
            + '.' + this.cssPrefix + 'Page{ background-position:0 0px; width:7px; }'
            + '.' + this.cssPrefix + 'Page:hover,'
            + '.' + this.cssPrefix + 'PageSelected{ background-position:0 -7px; width:7px; }'
            + '.' + this.cssPrefix + 'PageSelected{ cursor:default; }'

                // Popup dialog
            + '.' + this.cssPrefix + 'PopupOverlay{ background:#000; opacity:0.3; filter:alpha(opacity=30); position:absolute; top:0; left:0; width:100%; height:100%; z-index:10; display:none; }'
            + '.' + this.cssPrefix + 'PopupPl{ background: #FFF; border:1px solid gray; position: absolute; top:0; right:0; width:100%; height:100%; z-index:11; display: none; }'
            + '.' + this.cssPrefix + 'PopupContent{ background:#000; display: block; position: absolute; left: 4px; top: 4px; bottom: 4px; right: 4px; }'
            + '.' + this.cssPrefix + 'PopupBtClose{ background:no-repeat scroll 0 0 rgba(0, 0, 0, 0); background-position: 0px -130px; display: block;position: absolute;top: 4px;right: 4px;height: 36px;width: 36px; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);

        // add class "admBoxapp300x250Banner" to element
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // --------------------- draw html ----------------------
        var html

            // top panel: logo
            = '<div class="' + this.cssPrefix + 'TopPl">'
            + '<a class="' + this.cssPrefix + 'Logo" href="' + data.click + '" target="_blank"></a>'
            + '<a class="' + this.cssPrefix + 'Manufacturer" title="Ads by Admicro" href="http://boxapp.admicro.vn/" target="_blank"></a>'
            + '</div>'

                // tab buttons panel
            + '<div class="' + this.cssPrefix + 'TabPl">';

        for (i = 0; i < this.modules.length; ++i) {
            html
                += '<a href="javascript:void(0);" class="' + this.cssPrefix + 'TabButton">' + this.modules[i].title + '</a>';
        }

        html
            += '<a style="clear:both; display:none;"></a>'
            + '</div>'

                // content panel
            + '<div class="' + this.cssPrefix + 'ContentPl">';

        for (i = 0; i < this.modules.length; ++i) {
            html
                += '<div class="' + this.cssPrefix + 'Module"></div>';
        }

        html
            += '</div>'

                // bottom panel: partner link + pagination
            + '<div class="' + this.cssPrefix + 'BottomPl">'
            + '<a class="' + this.cssPrefix + 'Website" href="' + data.click + '" target="_blank" ' + (this.skin.flag ? '' : 'style="height:100%; width:90%;"') + ' >'
            + (this.skin.flag ? admBoxappLib.util.getDomainFromString(data.click) : '')
            + '</a>'
            + '<div class="' + this.cssPrefix + 'Pagination">';

        for (i = 0; i < this.modules.length; ++i) {
            html
                += '<div></div>';
        }

        html
            += '</div>'
            + '</div>';

        // Popup dialog
        html
            += '<div class="' + this.cssPrefix + 'PopupOverlay"></div>'
            + '<div class="' + this.cssPrefix + 'PopupPl" >'
            + '<div class="' + this.cssPrefix + 'PopupContent"></div>'
            + '<a class="' + this.cssPrefix + 'PopupBtClose" href="javascript:void(0);"></a>'
            + '</div>';

        element.innerHTML = html;
    };

    this.onFinished = function () {
        var _this = this;

        // add events mouseout, mouseover to manufacturer logo
        var manufacturer = this.element.children[0].children[1];

        manufacturer.onmouseover = function () {
            // mouse over
            admBoxappLib.effect.resizeW(manufacturer, 97, {
                'onStart': function () {
                    manufacturer.style.backgroundImage = "url('" + _this._IMG_PATH_ + "bgManufacturerLong.png')";
                }
            });
        };

        manufacturer.onmouseout = function () {
            // mouse out
            admBoxappLib.effect.resizeW(manufacturer, 28, {
                'onFinish': function () {
                    manufacturer.style.backgroundImage = "url('" + _this._IMG_PATH_ + "bgManufacturerShort.png')";
                }
            });
        };

        // add click event to tab buttons
        var tabButtons = this.element.children[1].children;

        for (var i = 0, len = tabButtons.length - 1; i < len; ++i) {
            (function (i) {
                tabButtons[i].onclick = function () {
                    // change to module ith
                    _this._selectModule(i);

                    // clear default action
                    return false;
                };
            })(i);
        }

        // run default module
        var moduleContainers = this.element.children[2].children;
        var paginationContainers = this.element.children[3].children[1].children;
        var defaultModule = this.element.getAttribute('curModule');

        this.element.style.backgroundImage = "url('" + this.skin['bgImages'][defaultModule] + "')";
        tabButtons[defaultModule].className = this.cssPrefix + 'TabButtonSelected';
        moduleContainers[defaultModule].style.display = 'block';
        paginationContainers[defaultModule].style.display = 'block';

        var moduleClassName = 'AdmBoxapp300x250F' + this.modules[defaultModule].format + 'Module'
        var module = new window[moduleClassName](this, this.modules[defaultModule].data, moduleContainers[defaultModule], paginationContainers[defaultModule], defaultModule, this.modules[defaultModule].option);

        // gọi sự kiện module hoàn thành
        if (module.onFinished)
            module.onFinished();

        // gọi sự kiện module start
        if (module.onStart)
            module.onStart();

        // save
        this.modules[defaultModule] = module;
    };

    /**
     * Change tab
     *
     * @par <int> index
     */
    this._selectModule = function (index) {
        // get current module
        var curModule = this.element.getAttribute('curModule');

        // if index is current tab, nothing to do
        if (index == curModule)
            return false;

        // get containers
        var tabButtons = this.element.children[1].children;
        var moduleContainers = this.element.children[2].children;

        // change module background
        this.element.style.backgroundImage = "url('" + this.skin['bgImages'][index] + "')";

        // change tab button
        tabButtons[curModule].className = '' + this.cssPrefix + 'TabButton';
        tabButtons[index].className = '' + this.cssPrefix + 'TabButtonSelected';

        // change pagination
        var paginationContainers = this.element.children[3].children[1].children;
        paginationContainers[curModule].style.display = 'none';
        paginationContainers[index].style.display = 'block';

        // hide and stop current module
        if (this.modules[curModule].onStop)
            this.modules[curModule].onStop();

        admBoxappLib.effect.fadeOut(moduleContainers[curModule]);

        // show new module
        admBoxappLib.effect.fadeIn(moduleContainers[index]);

        // create module if not exists
        if (moduleContainers[index].innerHTML == '') {
            var moduleClassName = 'AdmBoxapp300x250F' + this.modules[index].format + 'Module'
            var module = new window[moduleClassName](this, this.modules[index].data, moduleContainers[index], paginationContainers[index], index, this.modules[index].option);

            // gọi sự kiện module hoàn thành
            if (module.onFinished)
                module.onFinished();

            // gọi sự kiện module start
            if (module.onStart)
                module.onStart();

            // save
            this.modules[index] = module;
        }
        else {
            // call onstart
            if (this.modules[index].onStart)
                this.modules[index].onStart();
        }

        // save current tab
        element.setAttribute('curModule', index);
    };

    /**
     * Open popup dialog
     *
     * Options:
     *        + event <function> void onFinished(): call on dialog open finish
     *        + event <function> boolean onClose(): call on dialog before close, true: dialog will close, false: dialog don't close
     *        + <int> minHeight: dialog reduce heigth to minHeight and close, default 0
     *        + <int> minWidth: dialog reduce width to minWidth and close, default 0
     *        + option <string> skin: skin name, hex color code exclude #, eg. 2B60DE, 8D38C9, ...
     *
     * @par <string> content: dialog content
     * @par <int> width: dialog width
     * @par <int> height: dialog height
     * @par optional <array> options
     */
    this.openPopup = function (content, width, height, options) {
        var EFFECT_DURATION = 120;
        var SKIN_PATH = 'http://adnetwork.admicro.vn/box-app/images/template/v17/';

        var _this = this;

        // valid options
        var onFinished = null;
        var onClose = null;
        var minWidth = 0;
        var minHeight = 0;
        var skin = 'FFFFFF';

        if (options != undefined) {
            if (options['onFinished']) onFinished = options['onFinished'];
            if (options['onClose']) onClose = options['onClose'];
            if (options['minHeight']) minHeight = options['minHeight'];
            if (options['minWidth']) minWidth = options['minWidth'];
            if (options['skin']) skin = options['skin'];
        }

        // increase banner zIndex to above other banner
        this.element.style.zIndex = '100000000';

        // show overlay
        var overlay = this.element.children[4];
        overlay.style.backgroundColor = '#' + skin;
        overlay.style.display = 'block';

        // setting dialog
        var dialog = this.element.children[5];
        dialog.style.borderColor = '#' + skin;
        dialog.style.display = 'block';
        admBoxappLib.util.setTransparent(dialog, 1);

        // setting content
        var container = dialog.children[0];

        // setting button close
        var btClose = dialog.children[1];
        btClose.style.backgroundImage = 'url("' + SKIN_PATH + skin + '.png")';
        btClose.onclick = function () {
            // call onclose event
            if (onClose && onClose() === false)
                return;

            // close dialog using effect
            admBoxappLib.effect.fadeOut(dialog, {'duration': EFFECT_DURATION});
            admBoxappLib.effect.resizeH(dialog, minHeight, {'duration': EFFECT_DURATION});
            admBoxappLib.effect.resizeW(dialog, minWidth, {
                'duration': EFFECT_DURATION, 'onFinish': function () {
                    // hide
                    dialog.style.display = 'none';

                    // clear content
                    container.innerHTML = '';

                    // hide overlay
                    overlay.style.display = 'none';

                    // restore orginal banner zIndex
                    _this.element.style.zIndex = 'inherit';
                }
            });
        };

        // show dialog using effect
        admBoxappLib.effect.resizeH(dialog, height + 10, {'duration': EFFECT_DURATION});
        admBoxappLib.effect.resizeW(dialog, width + 10, {
            'duration': EFFECT_DURATION, 'onFinish': function () {
                // draw into popup
                container.innerHTML = content;
            }
        });
    };


    // Call constructor method
    this.__constructor(zone, data, element);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x385) FORMAT 6
 *----------------------------------------------------------------------
 *
 * Module: pr
 */
function AdmBoxapp300x250F6Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x385Banner> banner
     */
    this.banner = null;

    this.element = null;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        this.banner = banner;
        this.element = element;

        // xu ly tham so element
        if (typeof element == 'string')
            element = document.getElementById(element);

        // xu ly tham so pagination
        if (typeof pagination == 'string')
            pagination = document.getElementById(pagination);

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF6';
        this.idPrefix = banner.idPrefix + 'ModuleF6';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        // ---------------------- build css ----------------------
        var arrColor = this.banner.skin.useBuiltIn
            ? data.shift().color.split('/')
            : options.color.split('/');

        var css
            = '.' + this.cssPrefix + 'Sapo{ height:127px; overflow:hidden; text-align:left; text-decoration:none; }'
            + '.' + this.cssPrefix + 'Thumb{ display:block; float:left; border:0 none; outline:0 none; width:110px; height:110px; margin:5px 0 0 10px; }'
            + '.' + this.cssPrefix + 'Desc{ float:right; width:160px; margin:5px 0 0 0; }'
            + '.' + this.cssPrefix + 'ItemTitle{  }'
            + '.' + this.cssPrefix + 'ItemTitle a{ font:bold 12px/16px Tahoma; text-decoration:none; }'
            + '.' + this.cssPrefix + 'ItemDesc{ margin-top:3px; }'
            + '.' + this.cssPrefix + 'ItemDesc a{ font:normal 12px/16px Tahoma; text-decoration:none; }'

            + '.' + this.cssPrefix + 'ItemPr{ display:block; overflow:hidden; height:22px; font: bold 12px/22px Tahoma; text-align:left; text-decoration:none; padding: 0 0 0 10px; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- sắp xếp để hiện thị ngẫu nhiên ----------------------
        //admBoxappLib.util.shuffle( data );

        // ---------------------- draw html ----------------------
        var html = '';

        // draw first item
        html
            += '<div class="' + this.cssPrefix + 'Sapo">'
            + '<a class="' + this.cssPrefix + 'Thumb" href="' + data[0].click + '" target="_blank">'
            + '<img src="' + data[0].image + '" width="100%" height="100%" border="none" />'
            + '</a>'
            + '<div class="' + this.cssPrefix + 'Desc">'
            + '<div class="' + this.cssPrefix + 'ItemTitle">'
            + '<a href="' + data[0].click + '" target="_blank" style="color:' + arrColor[0] + '">' + data[0].title + '</a>'
            + '</div>'
            + '<div class="' + this.cssPrefix + 'ItemDesc">'
            + '<a href="' + data[0].click + '" target="_blank" style="color:' + arrColor[1] + '">' + data[0].desc + '</a>'
            + '</div>'
            + '</div>'
            + '</div>';

        // draw three item next
        for (var i = 1; i < 4 && i < data.length; i++) {
            html
                += '<a class="' + this.cssPrefix + 'ItemPr" href="' + data[i]['click'] + '" target="_blank" style="color:' + arrColor[2] + '; clear:both;">'
                + data[i]['title']
                + '</a>';
        }

        element.innerHTML = html;
    };

    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x385) FORMAT 8
 *----------------------------------------------------------------------
 *
 * Module: embed code
 */
function AdmBoxapp300x250F8Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x385Banner> banner
     */
    this.banner = null;

    this.element = null;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        this.banner = banner;
        this.element = element;

        // xu ly tham so element
        if (typeof element == 'string')
            element = document.getElementById(element);

        // xu ly tham so pagination
        if (typeof pagination == 'string')
            pagination = document.getElementById(pagination);

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF8';
        this.idPrefix = banner.idPrefix + 'ModuleF8';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        // ---------------------- build css ----------------------
        var css
            = '.' + this.cssPrefix + '{ width:100%; height:100%; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var enableFlash = admBoxappLib.plugin.flash.enable;
        var item = data[0];
        var imageAlternateFlash = item.image != undefined && item.image != '' ? item.image : false;

        var html;

        if (!enableFlash && imageAlternateFlash) {
            html
                = '<a href="' + this.banner.allData.click + '" target="_blank" style="border:0; outline:0;">'
                + '<img src="' + imageAlternateFlash + '" width="100%" height="100%" />'
                + '</a>';
        }
        else {
            html
                = '<center>'
                + item.iframe
                + '</center>';
        }

        element.innerHTML = html;
    };

    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 23
 *----------------------------------------------------------------------
 *
 * Module hien thi 3 item tren mot trang
 */
function AdmBoxapp300x250F23Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x385Banner> banner
     */
    this.banner = null;

    this.element = null;
    this.pagination = null;

    this.numOfPages = 0;
    this.curPage = 0;

    /**
     * @var <int> autorun: id interval / timeout
     */
    this.autorun = null;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        this.banner = banner;
        this.element = element;
        this.pagination = pagination;

        // xu ly tham so element
        if (typeof element == 'string')
            element = document.getElementById(element);

        // xu ly tham so pagination
        if (typeof pagination == 'string')
            pagination = document.getElementById(pagination);

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF23';
        this.idPrefix = banner.idPrefix + 'ModuleF23';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        var numOfPages = Math.ceil(data.length / 3);
        this.numOfPages = numOfPages;

        // sắp xếp để hiện thị ngẫu nhiên
        admBoxappLib.util.shuffle(data);

        // gán UTMxxx vào link click
        for (i = 0; i < data.length; ++i) {
            data[i].click = admUtilAppendUTM(data[i].click, banner.rawData.keyword);
        }


        // ---------------------- build css ----------------------
        var css
            = '.' + this.cssPrefix + '{ position:relative; height:100%; }'
            + '.' + this.cssPrefix + 'SlidePage{ display:none; position:absolute; top:0; left:0; width:100%; height:100%; }'
            + '.' + this.cssPrefix + 'Separator{ height:1px; border-bottom:1px dotted #D5D5D5; margin:1px 0 2px 0; padding:0; }'
            + '.' + this.cssPrefix + 'Product{ display:block; position: relative; height:60px; width:284px; border:none; outline:none; margin:2px 0 0 3px; padding:0; text-align:left; overflow:hidden; }'
            + '.' + this.cssPrefix + 'ProductImage{ position:absolute; left:0; top:0; height:54px; width:76px; padding:3px 3px 3px 7px; background:url("' + this.banner.skin['imgPath'] + 'bgList3.png") center no-repeat; border:0; }'
            + '.' + this.cssPrefix + 'ProductTitle,'
            + '.' + this.cssPrefix + 'ProductTitle:hover{ font:bold 12px/16px tahoma; color:#333; text-decoration:none; display:block; margin:10px 0 0 0; padding:0; }'
            + '.' + this.cssPrefix + 'ProductPrice{ color:#333; font:bold 12px/16px "Times New Roman"; font-style:italic; display:block; margin:5px 0 0 0; padding:0; }'
            + '.' + this.cssPrefix + 'ProductPrice label{ color:#f00; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var html = '';

        // draw each page
        for (var p = 0; p < numOfPages; ++p) {
            html += '<div class="' + this.cssPrefix + 'SlidePage">';

            // draw each item on page
            for (i = p * 3, len = p * 3 + 3; i < len && i < data.length; ++i) {
                html
                    += '<a class="' + this.cssPrefix + 'Product" href="' + data[i].click + '" target="_blank">'
                    + '<img class="' + this.cssPrefix + 'ProductImage" src="' + data[i].image + '" />'
                    + '<div style="position:absolute; top:0; right:0; width:185px;">'
                    + '<span class="' + this.cssPrefix + 'ProductTitle">' + data[i].title + '</span>'
                    + ( data[i].price ? '<span class="' + this.cssPrefix + 'ProductPrice">Giá: <label>' + data[i].price + '</label></span>' : '' )
                    + '</div>'
                    + '</a>';

                // add separator
                if (i < len - 1) {
                    html += '<div class="' + this.cssPrefix + 'Separator"></div>';
                }
            }

            html += '</div>';
        }

        element.innerHTML = html;

        // ---------------------- draw pagination ----------------------
        if (numOfPages > 1) {
            var htmlPagination = '<a href="#" class="' + this.banner.cssPrefix + 'PrevPage"></a>';

            for (var i = 0; i < numOfPages; ++i)
                htmlPagination += '<a href="#" class="' + this.banner.cssPrefix + 'Page"></a>';

            htmlPagination += '<a href="#" class="' + this.banner.cssPrefix + 'NextPage"></a>';
            htmlPagination += '<a style="clear:both; display:none;"></a>';

            pagination.innerHTML = htmlPagination;
        }
    };

    this.onFinished = function () {
        var _this = this;
        this.curPage = 0;

        // tạo hiệu ứng chuyển trang
        if (this.numOfPages > 1) {
            admBoxappLib.effect.pagination.create(this.element, 290, 195, {'startPage': this.curPage});

            var btPages = this.pagination.children;
            btPages[this.curPage + 1].className = '' + this.banner.cssPrefix + 'PageSelected';

            // thêm sự kiện click vào nút pagination
            var btPages = this.pagination.children;

            btPages[0].onclick = function () {
                _this._goPage('prev');
                return false;
            };

            for (i = 1, len = btPages.length - 2; i < len; ++i) {
                (function (i) {
                    btPages[i].onclick = function () {
                        _this._goPage(i - 1);
                        return false;
                    };
                })(i);
            }

            btPages[btPages.length - 2].onclick = function () {
                _this._goPage('next');
                return false;
            };
        }
        else {
            this.element.children[0].style.display = 'block';
        }
    };

    this.onStart = function () {
        var _this = this;

        // start autorun
        if (this.numOfPages > 1) {
            this.autorun = window.setInterval(function () {
                _this._goPage('next');
            }, 10000);
        }
    };

    this.onStop = function () {
        // stop autorun
        if (this.autorun != null) {
            window.clearInterval(this.autorun);
            this.autorun = null;
        }
    };

    this._goPage = function (index) {
        if (index == this.curPage)
            return false;

        // thay doi trang
        switch (index) {
            case 'prev':
                index = this.curPage == 0 ? this.numOfPages - 1 : this.curPage - 1;
                admBoxappLib.effect.pagination.go(element, index, 'slide', {'direction': 'lr'});
                break;

            case 'next':
                index = this.curPage == this.numOfPages - 1 ? 0 : this.curPage + 1;
                admBoxappLib.effect.pagination.go(element, index, 'slide', {'direction': 'rl'});
                break;

            default:
                admBoxappLib.effect.pagination.go(element, index, 'slide');
        }

        // thay doi hieu ung nut pagination
        var btPages = this.pagination.children;
        btPages[this.curPage + 1].className = '' + this.banner.cssPrefix + 'Page';
        btPages[index + 1].className = '' + this.banner.cssPrefix + 'PageSelected';

        // save current page
        this.curPage = index;
    };

    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 24
 *----------------------------------------------------------------------
 *
 * Module hien thi 2 item tren mot trang
 */
function AdmBoxapp300x250F24Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x385Banner> banner
     */
    this.banner = null;

    this.element = null;
    this.pagination = null;

    this.numOfPages = 0;
    this.curPage = 0;

    /**
     * @var <int> autorun: id interval / timeout
     */
    this.autorun = null;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        this.banner = banner;
        this.element = element;
        this.pagination = pagination;

        // xu ly tham so element
        if (typeof element == 'string')
            element = document.getElementById(element);

        // xu ly tham so pagination
        if (typeof pagination == 'string')
            pagination = document.getElementById(pagination);

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF24';
        this.idPrefix = banner.idPrefix + 'ModuleF24';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        var numOfPages = Math.ceil(data.length / 2);
        this.numOfPages = numOfPages;

        // sắp xếp để hiện thị ngẫu nhiên
        admBoxappLib.util.shuffle(data);

        // ---------------------- build css ----------------------
        var css
            = '.' + this.cssPrefix + '{ position:relative; height:100%; }'
            + '.' + this.cssPrefix + 'SlidePage{ display:none; position:absolute; top:0; left:0; width:100%; height:100%; }'
            + '.' + this.cssPrefix + 'Separator{ height:1px; border-bottom:1px dotted #D5D5D5; margin:3px 0 3px 0; padding:0; }'
            + '.' + this.cssPrefix + 'Product{ display:block; position: relative; height:90px; width:284px; border:none; outline:none; margin:3px 0 0 3px; padding:0; text-align:left; overflow:hidden; }'
            + '.' + this.cssPrefix + 'ProductImage{ position:absolute; left:0; top:0; border:0; height:90px; width:90px; padding:0; }'
            + '.' + this.cssPrefix + 'ProductTitle,'
            + '.' + this.cssPrefix + 'ProductTitle:hover{ font:bold 12px/16px tahoma; color:#333; text-decoration:none; display:block; margin:10px 0 0 0; padding:0; }'
            + '.' + this.cssPrefix + 'ProductPrice{ color:#333; font:bold 12px/16px "Times New Roman"; font-style:italic; display:block; margin:8px 0 0 0; padding:0; }'
            + '.' + this.cssPrefix + 'ProductPrice label{ color:#f00; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var html = '';

        // draw each page
        for (var p = 0; p < numOfPages; ++p) {
            html += '<div class="' + this.cssPrefix + 'SlidePage">';

            // draw each item on page
            for (i = p * 2, len = p * 2 + 2; i < len && i < data.length; ++i) {
                html
                    += '<a class="' + this.cssPrefix + 'Product" href="' + data[i].click + '" target="_blank">'
                    + '<img class="' + this.cssPrefix + 'ProductImage" src="' + data[i].image + '" />'
                    + '<div style="position:absolute; top:0; right:0; width:185px;">'
                    + '<span class="' + this.cssPrefix + 'ProductTitle">' + data[i].title + '</span>'
                    + ( data[i].price ? '<span class="' + this.cssPrefix + 'ProductPrice">Giá: <label>' + data[i].price + '</label></span>' : '' )
                    + '</div>'
                    + '</a>';

                // add separator
                if (i < len - 1) {
                    html += '<div class="' + this.cssPrefix + 'Separator"></div>';
                }
            }

            html += '</div>';
        }

        element.innerHTML = html;

        // ---------------------- draw pagination ----------------------
        if (numOfPages > 1) {
            var htmlPagination = '<a href="#" class="' + this.banner.cssPrefix + 'PrevPage"></a>';

            for (var i = 0; i < numOfPages; ++i)
                htmlPagination += '<a href="#" class="' + this.banner.cssPrefix + 'Page"></a>';

            htmlPagination += '<a href="#" class="' + this.banner.cssPrefix + 'NextPage"></a>';
            htmlPagination += '<a style="clear:both; display:none;"></a>';

            pagination.innerHTML = htmlPagination;
        }
    };

    this.onFinished = function () {
        var _this = this;
        this.curPage = 0;

        // tạo hiệu ứng chuyển trang
        if (this.numOfPages > 1) {
            admBoxappLib.effect.pagination.create(this.element, 290, 195, {'startPage': this.curPage});

            var btPages = this.pagination.children;
            btPages[this.curPage + 1].className = '' + this.banner.cssPrefix + 'PageSelected';

            // thêm sự kiện click vào nút pagination
            var btPages = this.pagination.children;

            btPages[0].onclick = function () {
                _this._goPage('prev');
                return false;
            };

            for (i = 1, len = btPages.length - 2; i < len; ++i) {
                (function (i) {
                    btPages[i].onclick = function () {
                        _this._goPage(i - 1);
                        return false;
                    };
                })(i);
            }

            btPages[btPages.length - 2].onclick = function () {
                _this._goPage('next');
                return false;
            };
        }
        else {
            this.element.children[0].style.display = 'block';
        }
    };

    this.onStart = function () {
        var _this = this;

        // start autorun
        if (this.numOfPages > 1) {
            this.autorun = window.setInterval(function () {
                _this._goPage('next');
            }, 10000);
        }
    };

    this.onStop = function () {
        // stop autorun
        if (this.autorun != null) {
            window.clearInterval(this.autorun);
            this.autorun = null;
        }
    };

    this._goPage = function (index) {
        if (index == this.curPage)
            return false;

        // thay doi trang
        switch (index) {
            case 'prev':
                index = this.curPage == 0 ? this.numOfPages - 1 : this.curPage - 1;
                admBoxappLib.effect.pagination.go(element, index, 'slide', {'direction': 'lr'});
                break;

            case 'next':
                index = this.curPage == this.numOfPages - 1 ? 0 : this.curPage + 1;
                admBoxappLib.effect.pagination.go(element, index, 'slide', {'direction': 'rl'});
                break;

            default:
                admBoxappLib.effect.pagination.go(element, index, 'slide');
        }

        // thay doi hieu ung nut pagination
        var btPages = this.pagination.children;
        btPages[this.curPage + 1].className = '' + this.banner.cssPrefix + 'Page';
        btPages[index + 1].className = '' + this.banner.cssPrefix + 'PageSelected';

        // save current page
        this.curPage = index;
    };

    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 25
 *----------------------------------------------------------------------
 *
 * Module: Gallary
 */
function AdmBoxapp300x250F25Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x385Banner> banner
     */
    this.banner = null;

    this.element = null;
    this.pagination = null;

    this.numOfPages = null;
    this.curPage = null;

    /**
     * @var <int> autorun: id interval / timeout
     */
    this.autorun = null;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        this.banner = banner;
        this.element = element;
        this.pagination = pagination;

        this.numOfPages = data.length;
        this.curPage = 0;

        // xu ly tham so element
        if (typeof element == 'string')
            element = document.getElementById(element);

        // xu ly tham so pagination
        if (typeof pagination == 'string')
            pagination = document.getElementById(pagination);

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF25';
        this.idPrefix = banner.idPrefix + 'ModuleF25';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        // sắp xếp để hiện thị ngẫu nhiên
        admBoxappLib.util.shuffle(data);

        // ---------------------- build css ----------------------
        var css
            = '.' + this.cssPrefix + '{ position:relative; height:100%; }'

            + '.' + this.cssPrefix + 'Item{ display:none; position:absolute; top:0; left:0; height:100%; width:100%; }'
            + '.' + this.cssPrefix + 'ItemImage{ position:absolute; top:0; left:0; height:100%; width:100%; z-index:0; } '

            + '.' + this.cssPrefix + 'Item div { position:absolute; left:0; bottom:0px; width:100%; background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZGQUQ0MzhFREUwMjExRTI4NzY1REY3N0QzOURDN0VEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZGQUQ0MzhGREUwMjExRTI4NzY1REY3N0QzOURDN0VEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkZBRDQzOENERTAyMTFFMjg3NjVERjc3RDM5REM3RUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkZBRDQzOERERTAyMTFFMjg3NjVERjc3RDM5REM3RUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7JyF0UAAAAD0lEQVR42mJgYGDYDBBgAAC4ALTWofH1AAAAAElFTkSuQmCC"); padding:5px; text-align:left;  }'
            + '.' + this.cssPrefix + 'Item h3,'
            + '.' + this.cssPrefix + 'Item span,'
            + '.' + this.cssPrefix + 'Item label{ color:#fff; font: bold 12px/16px arial; text-decoration:none; margin:0; padding:0; }'
            + '.' + this.cssPrefix + 'Item span, .admBoxapp300x250F25ModuleItem label { font-style:italic; } '
            + '.' + this.cssPrefix + 'Item label { color:#f00; } ';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var html = '';

        for (var i = 0; i < data.length; ++i) {
            html
                += '<div class="' + this.cssPrefix + 'Item">'
                + '<a href="' + data[i].click + '" target="_blank" style="border:none; outline:0;">'
                + '<img class="' + this.cssPrefix + 'ItemImage" src="' + data[i].image + '" />'
                + ( data[i].title || data[i].price ?
                '<div>'
                + ( data[i].title ? '<h3>' + data[i].title + '</h3>' : '' )
                + ( data[i].price ? '<span>Giá: <label>' + data[i].price + '</label></span>' : '' )
                + '</div>' : '' )
                + '</a>'
                + '</div>';

            html
                += '</div>';
        }

        element.innerHTML = html;

        // ---------------------- draw pagination ----------------------
        var htmlPagination = '<a href="#" class="' + this.banner.cssPrefix + 'PrevPage"></a>';

        for (var i = 0; i < data.length; ++i)
            htmlPagination += '<a href="#" class="' + this.banner.cssPrefix + 'Page"></a>';

        htmlPagination += '<a href="#" class="' + this.banner.cssPrefix + 'NextPage"></a>';
        htmlPagination += '<a style="clear:both; display:none;"></a>';

        pagination.innerHTML = htmlPagination;
    };

    this.onFinished = function () {
        var _this = this;

        // thêm sự kiện click vào nút pagination
        var btPages = this.pagination.children;

        btPages[0].onclick = function () {
            _this._goPage('prev');
            return false;
        };

        for (i = 1, len = btPages.length - 2; i < len; ++i) {
            (function (i) {
                btPages[i].onclick = function () {
                    _this._goPage(i - 1);
                    return false;
                };
            })(i);
        }

        btPages[btPages.length - 2].onclick = function () {
            _this._goPage('next');
            return false;
        };

        // tạo chức năng Pagination cho các item
        admBoxappLib.effect.pagination.create(this.element, 290, 195, {'startPage': this.curPage});

        // hiện thị item mặc định
        //this.element.children[this.curPage].style.display = 'block';
        btPages[this.curPage + 1].className = '' + this.banner.cssPrefix + 'PageSelected';
    };

    this.onStart = function () {
        // start autorun
        this._setAutorun(true);
    };

    this.onStop = function () {
        // stop autorun
        this._setAutorun(false);
    };

    /**
     * Thiết lập chế độ chạy tự động
     *
     * @par <boolean> value
     */
    this._setAutorun = function (value) {
        // enable
        if (value) {
            var _this = this;

            this.autorun = window.setInterval(function () {
                _this._goPage('next');
            }, 10000);
        }

        // disable
        else {
            if (this.autorun != null) {
                window.clearInterval(this.autorun);
                this.autorun = null;
            }
        }
    };

    /**
     * Show item at index
     *
     * @par <int> index
     */
    this._goPage = function (index) {
        if (index == this.curPage)
            return false;

        // thay doi trang
        var itemsContainer = this.element;

        switch (index) {
            case 'prev':
                index = this.curPage == 0 ? this.numOfPages - 1 : this.curPage - 1;
                admBoxappLib.effect.pagination.go(itemsContainer, index, 'flip', {'direction': 'lr'});
                break;

            case 'next':
                index = this.curPage == this.numOfPages - 1 ? 0 : this.curPage + 1;
                admBoxappLib.effect.pagination.go(itemsContainer, index, 'flip', {'direction': 'rl'});
                break;

            default:
                admBoxappLib.effect.pagination.go(itemsContainer, index, 'flip');
        }

        // thay doi hieu ung nut pagination
        var btPages = this.pagination.children;
        btPages[this.curPage + 1].className = '' + this.banner.cssPrefix + 'Page';
        btPages[index + 1].className = '' + this.banner.cssPrefix + 'PageSelected';

        // save current page
        this.curPage = index;
    };

    /**
     * Get image thumbnail
     * @par <string> imgUrl
     * @return <string>
     */
    this.getThumb = function (imgUrl) {
        var arrstr = imgUrl.split('/');

        if (arrstr.length == 1)
            return 'thumb_' + imgUrl;

        var len = arrstr.length;
        arrstr[len - 1] = 'thumb_' + arrstr[len - 1];
        return arrstr.join('/');
    };

    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 26
 *----------------------------------------------------------------------
 *
 * Contact Module
 *
 * Send Email Service:
 *    URL:
 *        http://boxapp.admicro.vn/ads/admMail
 *
 *    INPUT:
 *        Method: POST
 *        Parameters:
 *            - <string> subject: tieu de email
 *            - <string> content: noi dung email
 *            - <string> to: các email nhan, mỗi email cách nhau bởi dấu ;
 *                VD:
 *                    - dangmaihai@admicro.vn
 *                    - dangmaihai@admicro.vn; dangmaihai@vccorp.vn
 *            - <string> from: email gui
 *                VD:
 *                    - dangmaihai@admicro.vn
 *            - <string> fullname: ten nguoi gui
 *                VD:
 *                    - Mai Hai Dang
 *
 *    OUTPUT:
 *        Format: text/json
 *        Field:
 *            - <int> err: mã lỗi, 0 là ok, khác 0 là lỗi gì đó
 *            - <object> data: dữ liệu trả về
 *                VD:
 *                    - thành công:
 *                        {'err':0, 'data':true}
 *                    - loi gui mail:
 *                        {'err':1, 'data':'Email nhan ko ton tai'}
 */
function AdmBoxapp300x250F26Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x385Banner> banner
     */
    this.banner = null;

    this.element = null;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        this.banner = banner;
        this.element = element;

        // xu ly tham so element
        if (typeof element == 'string')
            element = document.getElementById(element);

        // xu ly tham so pagination
        if (typeof pagination == 'string')
            pagination = document.getElementById(pagination);

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF26';
        this.idPrefix = banner.idPrefix + 'ModuleF26';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        // ---------------------- build css ----------------------
        var css
            = '.' + this.cssPrefix + '{ position:relative; height:100%; width:100%; }'
            + '.' + this.cssPrefix + 'Container{ position:absolute; top:0; left:0; bottom:0; right:0; margin:0px; padding:3px; }'
            + '.' + this.cssPrefix + 'Overlay{ position:absolute; top:0; left:0; bottom:0; right:0; display:none; background:#fff; color:#000; font:normal 16px/195px Arial; text-align:center; }'
            + '.' + this.cssPrefix + 'Container iframe{ border:none; display:block; height:100%; width:100%; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        // Nếu data là mảng thì lấy item đầu tiên, ko thi cu lay binh thuong
        data = data.length ? data[0] : data;

        var html
            // Iframe content form
            = '<div class="' + this.cssPrefix + 'Container">'
            + '<iframe src=""></iframe>'
            + '</div>'

                // sending status
            + '<div class="' + this.cssPrefix + 'Overlay">'
            + 'Cảm ơn bạn đã quan tâm.'
            + '</div>';

        element.innerHTML = html;

        // draw form into iframe
        var urlSendEmail = 'http://boxapp.admicro.vn/ads/admMail';

        var thisInstanceName = 'admBoxapp300x250F26Module' + data.key;
        window[thisInstanceName] = this;

        var input1 = {
            'label': 'Họ và tên',
            'regex': '^.{10,}$',
            'errmsg': 'Vui lòng nhập đúng họ và tên'
        };
        var input2 = {
            'label': 'Email',
            'regex': '^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$',
            'errmsg': 'Vui lòng nhập đúng email'
        };
        var input3 = {
            'label': 'Nội dung',
            'regex': '',
            'errmsg': 'Vui lòng nhập nội dung dài hơn'
        };
        var input4 = {
            'label': 'Gửi mail'
        };
        if (data.title) {
            var cond = window.JSON ? JSON.parse(data.title) : eval(data.title);
            if (cond.input1) input1 = cond.input1;
            if (cond.input2) input2 = cond.input2;
            if (cond.input3) input3 = cond.input3;
            if (cond.input4) input4 = cond.input4;
        }

        var iframe = element.children[0].children[0];
        var iframeDocument = iframe.contentDocument;
        iframeDocument.open();
        iframeDocument.write(
            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
            + '<html>'
            + '<head>'
            + '<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />'
            + '<style>'
            + 'html, body, form{ margin:0; padding:0; }'
            + 'input[type="submit"]{ background:url("' + this.banner.skin['imgPath'] + '/btSendEmail.png") center no-repeat; border:0; color:#FFF; font:bold 12px/30px arial; width:80px; height:30px; margin:7px 0 0 0; padding:0; }'
            + 'input[type="text"]{  }'
            + 'textarea{ height:50px; }'
            + 'input,textarea{ border:1px solid #D9D9D9; -webkit-border-radius:3px; -moz-border-radius:3px; border-radius:3px; color:#555; font:normal 12px/16px arial; margin:0 0 7px 0; padding:8px 5px 8px 5px; outline:none; display:block; width:270px; resize:none; }'
            + '</style>'
            + '<script type="text/javascript">'
            + 'function onSubmit(form) { return parent.' + thisInstanceName + '._onSendMail(form); }'
            + '</script>'
            + '</head>'

            + '<body>'
            + '<form action="' + urlSendEmail + '" method="GET" onsubmit="return onSubmit(this);">'
            + '<input type="text" name="fullname" placeholder="' + input1.label + '" regex="' + input1.regex + '" errmsg="' + input1.errmsg + '">'
            + '<input type="text" name="from" placeholder="' + input2.label + '" regex="' + input2.regex + '" errmsg="' + input2.errmsg + '">'
            + '<textarea name="content" placeholder="' + input3.label + '" regex="' + input3.regex + '" errmsg="' + input3.errmsg + '"></textarea>'
            + '<input type="submit" name="send" value="' + input4.label + '">'
            + '<input type="hidden" name="to" value="' + data.email + '" />'
            + '<input type="hidden" name="userAgent" value="AdmBoxapp300x250" />'
            + '<input type="hidden" name="bannerId" value="' + this.banner.id + '" />'
            + '<input type="hidden" name="key" value="' + ( moduleIndex * 10000 + parseInt(data.key) ) + '" />'
            + '<input type="hidden" name="domain" value="' + document.domain + '" />'
            + '</form>'
            + '</body>'
            + '</html>'
        );
        iframeDocument.close();
    };

    /**
     * Validate data before sending email
     *
     * @par <form tag> form
     * @return boolean
     */
    this._onSendMail = function (form) {
        // check name
        var strRegex1 = form.fullname.getAttribute('regex');
        if (strRegex1) {
            var reg = new RegExp(strRegex1);
            if (!reg.test(form.fullname.value)) {
                alert(form.fullname.getAttribute('errmsg'));
                form.fullname.focus();
                return false;
            }
        }

        // check email
        var strRegex2 = form.from.getAttribute('regex');
        if (strRegex2) {
            var reg = new RegExp(strRegex2);
            if (!reg.test(form.from.value)) {
                alert(form.from.getAttribute('errmsg'));
                form.from.focus();
                return false;
            }
        }

        // check content
        var strRegex3 = form.content.getAttribute('regex');
        if (strRegex3) {
            var reg = new RegExp(strRegex3, 'gi');
            if (!reg.test(form.content.value)) {
                alert(form.content.getAttribute('errmsg'));
                form.content.focus();
                return false;
            }
        }

        // show processing status
        this.element.children[1].style.display = 'block';
        this.element.children[0].style.display = 'none';

        // send
        return true;
    };

    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 30
 *----------------------------------------------------------------------
 *
 */
function AdmBoxapp300x250F30Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x250Banner>
     */
    this.banner;

    /**
     * @var <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     */
    this.element;

    /**
     * @var <int> index of module in banner, from 0
     */
    this.moduleIndex;

    /**
     * item data to draw
     */
    this.itemData;
    this.cfgColor;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        // Set properties
        this.banner = banner;
        this.element = element;
        this.moduleIndex = moduleIndex;

        if (banner.skin.useBuiltIn) {
            this.itemData = data[1];
            this.cfgColor = data[0].color;
        }
        else {
            this.itemData = data[0];
            this.cfgColor = options.color;
        }

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF30';
        this.idPrefix = banner.idPrefix + 'ModuleF30';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        // ---------------------- build css ----------------------
        var borderColor = this.cfgColor;
        var bgBtPlay = 'http://adnetwork.admicro.vn/box-app/images/template/v17/' + borderColor.substr(1) + '.png';

        var css
            = '.' + this.cssPrefix + 'Image{ position:absolute; left:0; top:0; width:100%; height:100%; cursor:pointer; }'
            + '.' + this.cssPrefix + 'Image img{ border:0; display:block; width:100%; height:100%; }'
            + '.' + this.cssPrefix + 'Image span{ display:block; position:absolute; left:114px; top:68px; width:60px; height:60px; background: url("' + bgBtPlay + '") 0 0 no-repeat; background-size:60px; border:0; outline:0; text-decoration:none !important; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var html = '';

        // image
        html
            += '<div class="' + this.cssPrefix + 'Image">'
            + (this.itemData.image ? '<img src="' + this.itemData.image + '" />' : '')
            + '<span></span>'
            + '</div>';

        element.innerHTML = html;
    };

    this.onFinished = function () {
        var _this = this;

        // add event to button Play
        var tag = this.element.children[0];
        tag.onclick = function () {
            _this._showLargerPlayer();
        };
    };

    this._showLargerPlayer = function () {
        var html = '';
        var item = this.itemData;
        var linkclick = this.banner.rawData.click;

        // check flash enable
        var enableFlash = admBoxappLib.plugin.flash.enable;
        var imageAlternateFlash = item.image_alt || item.image || null;

        // draw in flash mode
        if (enableFlash) {
            // get content container
            var checkY1 = /((http|https):\/\/)?(www\.)?(youtube\.com)(\/)?([a-zA-Z0-9\_\-\.]+)\/?/;
            var checkY2 = /((http|https):\/\/)?(www\.)?(youtu\.be)(\/)id-([a-zA-Z0-9\_\-\.]+)\/?/;
            var isyouTubeUrl = checkY1.test(item.url_video) || checkY2.test(item.url_video);
            var provider = isyouTubeUrl ? 'youtube' : 'http';

            var embed
                = '<object width="100%" height="100%" data="' + imgHost + 'adsapp/video/playerAds.swf?key=095eb1d71ed240a891a69d8c93c71d6e&amp;pname=mediaplayer.swf" onmousedown="appzone.clickIframe();" type="application/x-shockwave-flash">'
                + '<param value="high" name="quality">'
                + '<param value="transparent" name="wmode">'
                + '<param value="6.0.65.0" name="swfversion">'
                + '<param name="flashvars" value="config=' + imgHost + 'adsapp/video/config.xml&amp;autostart=true&amp;controlbar.idlehide=true&amp;controlbar=over&amp;videotag=true&amp;provider=' + provider + '&amp;file=' + item.url_video + '&amp;loadcolor.color=FF0000&amp;displayclick=link&amp;link=' + encodeURIComponent(linkclick) + '">'
                + '<a target="_blank" onclick="javascript:appzone.clickIframe();" href="' + item.url_video + '"></a>'
                + '</object>';

            html = embed;
        }

        // draw in HTML5 mode
        else if (admBoxappLib.html5.isVideoSupported()) {
            // Video youtube
            if (item.url_video.indexOf('www.youtube.com') >= 0) {
                var strs = item.url_video.split('=');
                var yVideoId = strs[1];

                html
                    = '<iframe src="//www.youtube.com/embed/' + yVideoId + '?autoplay=1&autohide=1&rel=0" style="margin:0; padding:0; border:0; width:100%; height:100%;" border="0"></iframe>'
            }

            // Normal video
            else {
                var url_video = item.url_video;

                html
                    = '<video width="100%" height="100%" controls>'
                    + '<source src="' + url_video + '" />'
                    + '</video>';
            }
        }

        // draw alternated image
        else {
            html
                = '<a href="' + this.banner.allData.click + '" target="_blank" style="border:0; outline:0;">'
                + '<img src="' + imageAlternateFlash + '" width="100%" height="100%" />'
                + '</a>';
        }

        // open dialog
        this.banner.openPopup(html, 552, 375, {
            'minHeight': 250,
            'minWidth': 300,
            'skin': this.cfgColor.substr(1)
        });
    }

    // call constructor method
    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 34
 *----------------------------------------------------------------------
 *
 * Include:
 *        - file flash (swf)
 *        - image alternate flash
 *        - link of image
 */
function AdmBoxapp300x250F34Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x250Banner>
     */
    this.banner;

    /**
     * @var <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     */
    this.element;

    /**
     * @var <int> index of module in banner, from 0
     */
    this.moduleIndex;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        // Set properties
        this.banner = banner;
        this.element = element;
        this.moduleIndex = moduleIndex;

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF34';
        this.idPrefix = banner.idPrefix + 'ModuleF34';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        data = data[0];

        // ---------------------- build css ----------------------

        var css
            = '.' + this.cssPrefix + '{ position:relative; height:200px; width:100% }'
            + '.admBoxapp300x250F34ModuleTab' + this.moduleIndex + '{ height:100%; width:100%; }';

        admBoxappLib.html.addCss(css);//admBoxappLib.html.addCss( css, this.cssPrefix );
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var html = '';

        // check flash enable
        var enableFlash = admBoxappLib.plugin.flash.enable;
        var flashUrl = data.flash;
        var imageAlternateFlash = data.image;
        var linkImage = data.click;

        if (enableFlash) {
            html
                += '<div class="admBoxapp300x250F34ModuleTab' + this.moduleIndex + '">'
                + '<embed src="' + flashUrl + '" alt="' + imageAlternateFlash + '" style="width:100%; height:100%;" wmode="transparent" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" quality="high" />';
            +'</div>';
        }
        else {
            html
                += '<div class="admBoxapp300x250F34ModuleTab' + this.moduleIndex + '">'
                + '<a href="' + linkImage + '" target="_blank">'
                + '<img src="' + imageAlternateFlash + '" border="0" width="100%" height="100%" />'
                + '</a>'
                + '</div>';
        }

        // html
        // 	+=	'<div class="' + this.cssPrefix + '">'
        // 	+	 	'<object data="' + flashUrl + '" width="100%" height="100%" type="application/x-shockwave-flash">' //onmousedown="appzone.clickIframe()"
        // 	+			'<param name="quality" value="high" />'
        // 	+			'<param name="wmode" value="transparent" />'
        // 	+			'<param name="swfversion" value="6.0.65.0" />'
        // 	+			'<a href="' + linkImage + '" target="_blank">' // onclick="javascript:appzone.clickIframe();"
        // 	+				'<img src="' + imageAlternateFlash + '" border="0" width="100%" height="100%" />'
        // 	+			'</a>'
        // 	+		'</object>'
        // 	+	'</div>';

        element.innerHTML = html;

    };


    // call constructor method
    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 36: FACEBOOK LIKEBOX
 *----------------------------------------------------------------------
 */
function AdmBoxapp300x250F36Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x250Banner>
     */
    this.banner;

    /**
     * @var <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     */
    this.element;

    /**
     * @var <int> index of module in banner, from 0
     */
    this.moduleIndex;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        // Set properties
        this.banner = banner;
        this.element = element;
        this.moduleIndex = moduleIndex;

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF36';
        this.idPrefix = banner.idPrefix + 'ModuleF36';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        data = data[0];

        // ---------------------- build css ----------------------

        var css
            = '.' + this.cssPrefix + '{}'
            + '.' + this.cssPrefix + 'Overlay{ position:absolute; top:0; left:0; width:100%; height:100%; background:#fff; opacity:0.01; filter:alpha(opacity=1); display:block; outline:none; }'
            + '.' + this.cssPrefix + 'Content{ position:absolute; top:0; left:0; width:100%; height:100%; }'
            + '.' + this.cssPrefix + 'Content iframe{ position:relative; width:100%; height:100%; border:none; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var regex = /([^&|?]+)?(.*)$/;
        var mat = regex.exec(data.click);
        var src = 'https://www.facebook.com/plugins/likebox.php?href=' + encodeURIComponent(mat[1]) + mat[2];

        var html
            = '<div class="' + this.cssPrefix + 'Content">'
            + '<iframe src="' + src + '"></iframe>'
            + '</div>';
        //+	'<a class="' + this.cssPrefix + 'Overlay"></a>';

        element.innerHTML = html;
    };


    // call constructor method
    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 38: GOOGLE MAP
 *----------------------------------------------------------------------
 */
function AdmBoxapp300x250F38Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x250Banner>
     */
    this.banner;

    /**
     * @var <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     */
    this.element;

    /**
     * @var <int> index of module in banner, from 0
     */
    this.moduleIndex;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        // Set properties
        this.banner = banner;
        this.element = element;
        this.moduleIndex = moduleIndex;

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF38';
        this.idPrefix = banner.idPrefix + 'ModuleF38';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        data = data[0];

        // ---------------------- build css ----------------------

        var css
            = '.' + this.cssPrefix + '{}'
            + '.' + this.cssPrefix + 'Overlay{ position:absolute; top:0; left:0; width:100%; height:100%; background:#fff; opacity:0.01; filter:alpha(opacity=1); display:block; outline:none; }'
            + '.' + this.cssPrefix + 'Content{ position:absolute; top:0; left:0; width:100%; height:100%; }'
            + '.' + this.cssPrefix + 'Content iframe{ position:relative; width:100%; height:100%; border:none; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- draw html ----------------------
        var src = data.click;

        var html
            = '<div class="' + this.cssPrefix + 'Content">'
            + '<iframe src="' + src + '"></iframe>'
            + '</div>';
        //+	'<a class="' + this.cssPrefix + 'Overlay"></a>';

        element.innerHTML = html;
    };


    // call constructor method
    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}


/**
 *----------------------------------------------------------------------
 * ADMICRO MODULE (300x250) FORMAT 42: FULL EMBED
 *----------------------------------------------------------------------
 */
function AdmBoxapp300x250F42Module(banner, data, element, pagination, moduleIndex, options) {
    /**
     * @var <AdmBoxapp300x250Banner>
     */
    this.banner;

    /**
     * @var <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     */
    this.element;

    /**
     * @var <int> index of module in banner, from 0
     */
    this.moduleIndex;

    /**
     * @var <string> cssPrefix: element class prefix
     */
    this.cssPrefix;

    /**
     * @var <string> idPrefix: element id prefix
     */
    this.idPrefix;


    /**
     * Constructor
     *
     * @par <AdmBoxapp300x385Banner>: banner quản lý module
     * @par <Object> data: dữ liệu module
     * @par <DOM Element | string> element: element hoặc element id, element sẽ chứa nội dung module
     * @par <DOM Element | string> pagination: pagination hoặc pagination id, element sẽ chứa nội dung phân trang
     * @par <int> moduleIndex: index of module, start from 0
     * @par <var> options: module options, depend on module type
     */
    this.__constructor = function (banner, data, element, pagination, moduleIndex, options) {
        // Set properties
        this.banner = banner;
        this.element = element;
        this.moduleIndex = moduleIndex;

        // set prefix
        this.cssPrefix = banner.cssPrefix + 'ModuleF42';
        this.idPrefix = banner.idPrefix + 'ModuleF42';

        // draw content
        this._draw(data, element, pagination);
    };

    this._draw = function (data, element, pagination) {
        // ---------------------- build css ----------------------

        var css
            = '.' + this.cssPrefix + '{ position:relative; width:300px; height:250px; }'
            + '.' + this.cssPrefix + 'Ctn{ position:absolute; top:0; left:0; width:100%; height:100%; }'
            + '.' + this.cssPrefix + 'Manufacturer{ position: absolute; right: 0; top: 0; width: 28px; height: 13px; background: url("' + imgHost + 'adsapp/template/300x250/bgManufacturerShort.png") left no-repeat; }';

        admBoxappLib.html.addCss(css, this.cssPrefix);
        admBoxappLib.dom.addClass(element, this.cssPrefix);

        // ---------------------- build html ----------------------
        // get item
        var item = this.banner.skin.useBuiltIn ? data[0] : this.banner.modules[this.moduleIndex].option;

        var drawMode = item.iframe.substr(0, 10);
        var iframeContent = null;

        var html
            = '<div class="' + this.cssPrefix + '">'
            + '<div class="' + this.cssPrefix + 'Ctn">';

        if (drawMode == "iframe::::") // iframe
        {
            iframeContent = item.iframe.substr(10);
            html += '<iframe style="width:100%; height:100%; border:0px"></iframe>';
        }
        else // html
        {
            html += item.iframe;
        }

        html
            += '</div>'
            + '<a class="' + this.cssPrefix + 'Manufacturer" title="Ads by Admicro" href="http://boxapp.admicro.vn/" target="_blank"></a>'
            + '</div>';

        this.banner.zone.element.className = '';
        this.banner.zone.element.innerHTML = html;

        // ---------------------- build event ----------------------

        // manufacturer
        var tag = this.banner.zone.element.children[0].children[1];

        tag.onmouseover = function () {
            // mouse over
            admBoxappLib.effect.resizeW(tag, 100, {
                'onStart': function () {
                    tag.style.backgroundImage = "url('" + imgHost + "adsapp/template/300x250/bgManufacturerLong.png')";
                }
            });
        };

        tag.onmouseout = function () {
            // mouse out
            admBoxappLib.effect.resizeW(tag, 28, {
                'onFinish': function () {
                    tag.style.backgroundImage = "url('" + imgHost + "adsapp/template/300x250/bgManufacturerShort.png')";
                }
            });
        };

        // draw iframe content
        if (iframeContent != null) {
            var ifrTag = this.banner.zone.element.children[0].children[0].children[0];
            var ifrDoc = ifrTag.contentDocument;
            ifrDoc.open();
            ifrDoc.write(
                '<html>'
                + '<head>'
                + '<style>'
                + 'body{ margin:0; padding:0; overflow:hidden; display:block; width:100%; height:100%; }'
                + '</style>'
                + '</head>'
                + '<body>'
                + iframeContent
                + '</body>'
                + '</html>'
            );
            ifrDoc.close();
        }
    };


    // call constructor method
    this.__constructor(banner, data, element, pagination, moduleIndex, options);
}