__arCPM4K = void 0 != window.__arCPM4K ? __arCPM4K : [];
_arAdmNotShow = void 0 != window._arAdmNotShow ? _arAdmNotShow : [];
function AdmBoxapp300x600(a, b, c, e) {
    c = c || window;
    var d = this, h = null, g = null, f = null, l = null, m = function (a, b) {
        var e = c.document;
        admBoxappLib.util.addStyle("." + g + "{text-align:left;}", g);
        admBoxappLib.util.addStyle("." + f + "{}", f);
        var h = '<div class="' + g + " " + f + '" id="' + f + '"></div>';
        e.getElementById(b).innerHTML = h;
        new c.AdmBoxappBanner300x600(a, f, d);
        a.id == l && admBoxappLib.util.centrelize(f)
    }, p = function (a) {
        if (h == AdmBoxapp300x600.ENVIRONMENT_TOOL)return a;
        if ((l = admBoxappLib.util.getSearch("i", c.document.referrer)) && !admBoxappLib.util.inArray(l, _arAdmNotShow))for (var b in a.NORMAL)for (var e in a.NORMAL[b])if (a.NORMAL[b][e].id == l)return a.NORMAL[b][e];
        b = [];
        e = {};
        for (var d in a.CAMPLOCA) {
            var f = "," + a.CAMPLOCA[d] + ",", g = /,[1|2|3],[1|2|3],[1|2|3],/g;
            if (",," == f || ",0," == f || g.test(f))e[d] = a.NORMAL[d]; else if (c.ADS_CHECKER) {
                var g = "," + c.ADS_CHECKER.getStorage("__R") + ",", m = "," + c.ADS_CHECKER.getStorage("__RC") + ",";
                if (-1 != f.indexOf(g) || -1 != f.indexOf(m))e[d] = a.NORMAL[d]
            }
        }
        for (var n in e) {
            a = e[n];
            d = [];
            f = admBoxappLib.util.isIpad();
            g = void 0;
            for (g in a)if (m = a[g], !(admBoxappLib.util.inArray(m.id, __arCPM4K) || admBoxappLib.util.inArray(m.id, _arAdmNotShow) || void 0 !== m.no_hide && 1 != m.no_hide && null != admBoxappLib.storage.get("CTR" + g))) {
                var p = "," + m.l + ",", q = /,[1|2|3],[1|2|3],[1|2|3],/g;
                if (",," != p && ",0," != p && !q.test(p))if (c.ADS_CHECKER) {
                    var q = "," + c.ADS_CHECKER.getStorage("__R") + ",", u = "," + c.ADS_CHECKER.getStorage("__RC") + ",";
                    if (-1 == p.indexOf(q) && -1 == p.indexOf(u))continue
                } else continue;
                m.list_citys && -1 == ("," + m.list_citys + ",").indexOf("," +
                    c.ADS_City + ",") || m.gender && 0 != m.gender && m.gender != c.ADS_Gender || m.age && -1 == ("," + m.age + ",").indexOf("," + c.ADS_Age + ",") || m.re && -1 == ("," + m.re + ",").indexOf("," + c.ADS_UserInfo + ",") || 1 == m.ipadrun && f || d.push(m)
            }
            b = b.concat(d)
        }
        if (0 == b.length)return null;
        if (1 == b.length)return b[0];
        n = b;
        for (e = n.length - 1; 0 <= e; --e)for (a = n[e].weight - 2; 0 <= a; --a)n.push(n[e]);
        admBoxappLib.util.shuffle(n);
        r(b);
        return b[0]
    }, r = function (a) {
        if (c.localStorage) {
            for (var b = localStorage.getItem("admBoxappPubs"), e = 0; e < a.length; ++e) {
                var d = a[e];
                if (void 0 == d.retargetingValue) {
                    var f = 9999999;
                    if (d.retargeting)for (var g = d.retargeting.split(","), h = 0; h < g.length; ++h) {
                        var l = ("," + b + ",").indexOf("," + g[h] + ",");
                        0 <= l && l < f && (f = l)
                    }
                    d.retargetingValue = f
                }
            }
            a.sort(function (a, b) {
                return a.retargetingValue > b.retargetingValue ? 1 : -1
            })
        }
    }, n = function (a, e) {
        h == AdmBoxapp300x600.ENVIRONMENT_TOOL && (c.document.getElementById(b).style.display = "none", alert("Error:\n   - " + a + "\n\nSee Console for more information."), console.log(e))
    }, q = function (b) {
        var c = "//adi.vcmedia.vn/adt/cpc/adsapp/" +
            b.path;
        a.TYPE && (b.type = a.TYPE);
        b.background = b.background ? b.background.split("|||") : [];
        if (h == AdmBoxapp300x600.ENVIRONMENT_SITE) {
            for (var e = 0; e < b.background.length; ++e)b.background[e] = c + b.background[e];
            b.linkclick && (b.click = b.linkclick);
            var d = [], f;
            for (f in b.items) {
                var g = b.items[f], e = parseInt(f.substr(1)) || -1;
                g.key = e;
                d.push(g)
            }
            b.items = d;
            for (e = 0; e < d.length; ++e)g = d[e], g.flash && (g.flash = c + g.flash), g.image && (g.image = c + g.image)
        } else a.items = a.Items;
        d = [];
        for (f in b.aitems)g = b.aitems[f], e = parseInt(f.substr(1)) || -1, g.key = e, d.push(g);
        b.aitems = d;
        if (h == AdmBoxapp300x600.ENVIRONMENT_SITE)for (e = 0; e < d.length; ++e)g = d[e], g.image && (g.image = c + g.image)
    };
    this.getId = function () {
        return a.ZONEID || null
    };
    this.getEnvironment = function () {
        return h
    };
    this.getWindow = function () {
        return c
    };
    (function () {
        h = a.NORMAL ? AdmBoxapp300x600.ENVIRONMENT_SITE : AdmBoxapp300x600.ENVIRONMENT_TOOL;
        void 0 == e && (e = n);
        g = "admBoxapp300x600";
        f = "appzone" + (a.ZONEID || 0);
        var d = p(a);
        if (null == d)throw Error("No banner to show");
        _arAdmNotShow.push(d.id);
        q(d);
        c.AdmBoxappBanner300x600 ?
            (m(d, b), __arCPM4K.push(d.id), _arAdmNotShow.push(d.id)) : admBoxappLib.util.loadJs("//admicro1.vcmedia.vn/core/boxapp/300x600/AdmBoxappBanner300x600.js", {
            onFinish: function () {
                try {
                    m(d, b), __arCPM4K.push(d.id), _arAdmNotShow.push(d.id)
                } catch (a) {
                    e(a.message, a.stack)
                }
            }, onError: function () {
                e('Core "AdmBoxappBanner300x600" not ready', '[AdmBoxapp300x600.__constructor] Can\'t load core "AdmBoxappBanner300x600" at "//admicro1.vcmedia.vn/core/boxapp/300x600/AdmBoxappBanner300x600.js".')
            }
        });
        admBoxappLib.util.loadJs("//admicro1.vcmedia.vn/core/boxapp/etc/retargeting/read.js")
    })()
}
AdmBoxapp300x600.ENVIRONMENT_SITE = 1;
AdmBoxapp300x600.ENVIRONMENT_TOOL = 2;
admBoxappLib = window.admBoxappLib || {PREFIX: "admBoxappLib"};
admBoxappLib.util = admBoxappLib.util || {
        getBrowserName: function () {
            var a = navigator.userAgent, b = null;
            -1 != a.indexOf("Firefox") ? b = "Firefox" : -1 != a.indexOf("Chrome") ? b = "Chrome" : -1 != a.indexOf("MSIE") ? b = "Internet Explorer" : -1 != a.indexOf("Opera") ? b = "Opera" : -1 != a.indexOf("Safari") && (b = "Safari");
            return b
        }, getBrowserVersion: function () {
            var a = navigator.userAgent, b = null, c, e;
            -1 != (c = a.indexOf("Firefox")) ? b = a.substring(c + 8) : -1 != (c = a.indexOf("MSIE")) ? b = a.substring(c + 5) : -1 != (c = a.indexOf("Chrome")) ? b = a.substring(c + 7) : -1 !=
            (c = a.indexOf("Opera")) ? (b = a.substring(c + 6), -1 != (c = a.indexOf("Version")) && (b = a.substring(c + 8))) : -1 != (c = a.indexOf("Safari")) && (b = a.substring(c + 7), -1 != (c = a.indexOf("Version")) && (b = a.substring(c + 8)));
            b && (-1 != (e = b.indexOf(";")) && (b = b.substring(0, e)), -1 != (e = b.indexOf(" ")) && (b = b.substring(0, e)));
            return b
        }, getOsName: function () {
            var a = null;
            -1 != navigator.appVersion.indexOf("Win") ? a = "Windows" : -1 != navigator.appVersion.indexOf("Mac") ? a = "MacOS" : -1 != navigator.appVersion.indexOf("Linux") ? a = "Linux" : -1 != navigator.appVersion.indexOf("X11") &&
            (a = "UNIX");
            return a
        }, isFlashSupported: function () {
            var a, b, c, e = !1, d = -1, h = [{
                name: "ShockwaveFlash.ShockwaveFlash.7", version: function (a) {
                    return g(a)
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash.6", version: function (a) {
                    var b = "6.0.r21";
                    try {
                        a.AllowScriptAccess = "always", b = g(a)
                    } catch (c) {
                    }
                    return b
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash", version: function (a) {
                    return g(a)
                }
            }], g = function (a) {
                var b = -1;
                try {
                    b = a.GetVariable("$version")
                } catch (c) {
                }
                return b
            };
            if (navigator.plugins && 0 < navigator.plugins.length) {
                if ((h = navigator.mimeTypes) &&
                    h["application/x-shockwave-flash"] && h["application/x-shockwave-flash"].enabledPlugin && h["application/x-shockwave-flash"].enabledPlugin.description) {
                    var f = h["application/x-shockwave-flash"].enabledPlugin.description, l = f, h = l.split(/ +/), f = h[2].split(/\\./), h = h[3];
                    a = l;
                    parseInt(f[0], 10);
                    parseInt(f[1], 10);
                    b = h;
                    d = c = parseInt(h.replace(/[a-zA-Z]/g, ""), 10) || d;
                    e = !0
                }
            } else if (-1 == navigator.appVersion.indexOf("Mac") && window.execScript)for (f = -1, l = 0; l < h.length && -1 == f; l++) {
                a = -1;
                try {
                    a = new ActiveXObject(h[l].name)
                } catch (m) {
                    a =
                    {activeXError: !0}
                }
                a.activeXError || (e = !0, f = h[l].version(a), -1 != f && (a = f, b = a.split(","), parseInt(b[0].split(" ")[1], 10), parseInt(b[1], 10), c = parseInt(b[2], 10), b = b[2], a.replace("Shockwave Flash ", ""), d = c))
            }
            return e
        }, isHTML5Supported: function () {
            return !!document.createElement("video").play
        }, isCSS3Supported: function () {
            var a = ["-webkit-", "-moz-", "-ms-", "-o-", "-khtml-"], b = document.createElement("div");
            if ("box-shadow"in b.style)return !0;
            for (var c = 0; c < a.length; ++c)if (a[c] + "box-shadow"in b.style)return !0;
            return !1
        },
        random: function (a, b) {
            void 0 === b && (b = 0);
            void 0 === a && (a = Number.MAX_SAFE_INTEGER || Number.MAX_VALUE);
            var c = Math.random() * (a - b);
            return b + Math.floor(c)
        }, shuffle: function (a, b) {
            var c;
            if (b) {
                var e = a.length;
                c = Array(e);
                for (var d = 0; d < e; ++d)c[d] = a[d]
            } else c = a;
            for (d = 1; d < c.length; ++d) {
                var e = Math.round(Math.random() * d), h = c[e];
                c[e] = c[d];
                c[d] = h
            }
            return c
        }, inArray: function (a, b, c) {
            if (c)for (k in b) {
                if (b[k] === a)return !0
            } else for (k in b)if (b[k] == a)return !0;
            return !1
        }, arrayUnique: function (a) {
            for (var b = [], c = 0; c < a.length; ++c)admBoxappLib.util.inArray(a[c],
                b) || b.push(a[c]);
            return b
        }, areSameArrays: function (a, b, c) {
            for (var e = 0; e < a.length; ++e)if (!admBoxappLib.util.inArray(a[e], b, c))return !1;
            for (e = 0; e < b.length; ++e)if (!admBoxappLib.util.inArray(b[e], a, c))return !1;
            return !0
        }, toArray: function (a) {
            var b = [];
            for (k in a)b.push(a[k]);
            return b
        }, getSearch: function (a) {
            for (var b = location.search.substr(1).split("&"), c = 0; c < b.length; ++c) {
                var e = b[c].split("=");
                if (e[0] == a)return decodeURIComponent(e[1])
            }
            return null
        }, getHash: function (a) {
            for (var b = location.hash.substr(1).split("&"),
                     c = 0; c < b.length; ++c) {
                var e = b[c].split("=");
                if (e[0] == a)return decodeURIComponent(e[1])
            }
            return null
        }, getDomainFromString: function (a) {
            a = a.match(/:\/\/[^\/]*/);
            return null == a || 0 == a.length ? "" : a[0].substr(3)
        }, getThumb: function (a, b) {
            void 0 == b && (b = "thumb_");
            var c = a.split("/");
            if (1 == c.length)return b + a;
            var e = c.length;
            c[e - 1] = b + c[e - 1];
            return c.join("/")
        }, appendUTM: function (a, b) {
            if (!b || /(\?|&)(utm_source|utm_medium|utm_campaign)=/.test(a))return a;
            var c = 0 <= a.indexOf("?") ? "&" : "?";
            return a + c + b
        }, loadCss: function (a,
                              b) {
            var c = null, e = null;
            b && (c = b.onFinish, e = b.onError);
            var d = document.createElement("link");
            c && (d.onload = c);
            e && (d.onerror = e);
            d.setAttribute("rel", "stylesheet");
            d.setAttribute("type", "text/css");
            d.setAttribute("href", a);
            (document.head || document.getElementsByTagName("head")[0]).appendChild(d)
        }, loadJs: function (a, b) {
            var c = null, e = null;
            b && (c = b.onFinish, e = b.onError);
            var d = document.createElement("script");
            c && (d.onload = c);
            e && (d.onerror = e);
            d.setAttribute("type", "text/javascript");
            d.setAttribute("src", a);
            (document.body ||
            document.getElementsByTagName("body")[0]).appendChild(d)
        }, getUrlDir: function () {
            var a = location.pathname;
            0 <= location.pathname.indexOf(".") ? (a = location.pathname.lastIndexOf("/"), a = location.pathname.substr(0, a)) : a = location.pathname;
            "/" != a.charAt(a.length - 1) && (a += "/");
            return location.origin + location.port + a
        }, addStyle: function (a, b, c) {
            b = void 0 == b ? null : "" + b;
            if (void 0 == c)c = 1; else switch (c = c.toLowerCase(), c) {
                case "overwrite":
                    c = 2;
                    break;
                case "append":
                    c = 3;
                    break;
                default:
                    c = 1
            }
            var e = document.head || document.getElementsByTagName("head")[0],
                d = null;
            if (null != b)for (var h = e.getElementsByTagName("style"), g = 0, f = h.length; g < f; ++g)if (h[g].getAttribute("name") == b) {
                if (1 == c)return !0;
                d = h[g];
                break
            }
            null == d && (d = document.createElement("style"), d.type = "text/css", b && d.setAttribute("name", b), e.appendChild(d), c = 2);
            d.styleSheet ? d.styleSheet.cssText = 2 == c ? a : d.styleSheet.cssText + a : (2 == c && (d.innerHTML = ""), a = document.createTextNode(a), d.appendChild(a));
            return !0
        }, removeStyle: function (a) {
            a = "" + a;
            for (var b = (document.head || document.getElementsByTagName("head")[0]).getElementsByTagName("style"),
                     c = 0, e = b.length; c < e; ++c)if (b[c].getAttribute("name") == a)return b[c].remove(), !0;
            return !1
        }, addEvent: function (a, b, c) {
            return a.addEventListener ? (a.addEventListener(b, c), !0) : a.attachEvent ? (a.attachEvent("on" + b, c), !0) : !1
        }, removeEvent: function (a, b, c) {
            return a.removeEventListener ? (a.removeEventListener(b, c), !0) : a.detachEvent ? (a.detachEvent("on" + b, c), !0) : !1
        }, addClassName: function (a, b) {
            var c = a.className || "";
            if ("" == c)a.className = b; else {
                var e = c.split(" ");
                admBoxappLib.util.inArray(b, e) || (a.className = c + " " + b)
            }
        },
        removeClassName: function (a, b) {
            for (var c = a.className || "", e = c.split(" "), d = 0, h = e.length; d < h; ++d)e[d] == b && (e[d] = null);
            c = "";
            d = 0;
            for (h = e.length; d < h; ++d)null !== e[d] && (c += " " + e[d]);
            a.className = c.substr(1)
        }, getCss: function (a, b) {
            return window.getComputedStyle ? window.getComputedStyle(a).getPropertyValue(b) : a.currentStyle ? a.currentStyle[b] : null
        }, getElementTop: function (a) {
            if (a.getBoundingClientRect) {
                var b = admBoxappLib.util.getScrollTop();
                a = a.getBoundingClientRect();
                return b + a.top
            }
            for (b = 0; a;)b += a.offsetTop, a =
                a.offsetParent;
            return b
        }, getElementLeft: function (a) {
            if (a.getBoundingClientRect) {
                var b = admBoxappLib.util.getScrollLeft();
                a = a.getBoundingClientRect();
                return b + a.left
            }
            for (b = 0; a;)b += a.offsetLeft, a = a.offsetParent;
            return b
        }, getElementHeight: function (a) {
            return a.offsetHeight || 0
        }, getElementWidth: function (a) {
            return a.offsetWidth
        }, getViewportSize: function () {
            var a = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
            return [a.clientWidth, a.clientHeight]
        }, getContentSize: function () {
            var a = Math.max(document.body.scrollWidth,
                document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth, 0), b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight, 0);
            return [a, b]
        }, getScrollTop: function () {
            var a = document.body.scrollTop;
            0 == a && (a = window.pageYOffset ? window.pageYOffset : document.body.parentElement ?
                document.body.parentElement.scrollTop : 0);
            return a
        }, getScrollLeft: function () {
            var a = document.body.scrollLeft;
            0 == a && (a = window.pageXOffset ? window.pageXOffset : document.body.parentElement ? document.body.parentElement.scrollLeft : 0);
            return a
        }, scrollTo: function (a, b) {
            var c = window;
            b || (b = 400);
            var e = admBoxappLib.util.getScrollTop(), d = a > e ? 1 : -1, h = (a - e) / b * 10, g = e;
            clearTimeout(admBoxappLib.util.scrollTo.timer);
            e != a && function () {
                g += h;
                g * d >= a * d ? c.scrollTo(0, a) : (c.scrollTo(0, g), admBoxappLib.util.scrollTo.timer = setTimeout(arguments.callee,
                    10))
            }()
        }, centrelize: function (a, b) {
            var c = window.document;
            "string" == typeof a && (a = c.getElementById(a));
            var c = admBoxappLib.util.getElementTop(a), e = admBoxappLib.util.getElementHeight(a), d = admBoxappLib.util.getViewportSize()[1];
            admBoxappLib.util.scrollTo(d > e ? c - (d - e) / 2 : c, b)
        }, htmlSpecialChars: function (a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }, sendLogging: function (a) {
            (new Image).src = a
        }, sendLogging3rd: function (a) {
            window.__admTracki3Rd ?
                __admTracki3Rd(a) : admBoxappLib.util.sendLogging(a)
        }, onTrue: function (a, b, c) {
            var e = 100, d = "string" == typeof a;
            c && (e = c.interval || 100);
            (function () {
                (d ? window[a] : a()) ? b() : setTimeout(arguments.callee, e)
            })()
        }, isIpad: function () {
            return void 0 !== window.ontouchstart
        }
    };
admBoxappLib.storage = admBoxappLib.storage || new function () {
        var a = admBoxappLib.PREFIX + "Storage", b = {};
        this.get = function (a, c) {
            void 0 === c && (c = null);
            return void 0 === b[a] ? c : b[a].value
        };
        this.set = function (a, d, h) {
            void 0 == b[a] ? (void 0 === h && (h = 3250368E7), b[a] = {
                value: d,
                expire: h
            }) : (b[a].value = d, void 0 !== h && (b[a].expire = h));
            c()
        };
        this.remove = function (a) {
            delete b[a];
            c()
        };
        var c = function () {
            if (!window.localStorage)return !1;
            var c = window.JSON ? c = JSON.stringify(b) : "";
            localStorage.setItem(a, c)
        };
        (function () {
            if (!window.localStorage)return !1;
            var c = localStorage.getItem(a);
            b = window.JSON ? JSON.parse(c) || {} : {};
            var c = (new Date).getTime(), d;
            for (d in b)b[d].expire < c && delete b[d]
        })()
    };
admBoxappLib.effect = admBoxappLib.effect || {
        TIME_RESOLUTION: 10, fade: function (a, b, c) {
            var e = 200, d = null, h = null;
            c && (e = c.duration || 200, d = c.onStart || null, h = c.onFinish || null);
            a.effectFadeTimer && window.clearTimeout(a.effectFadeTimer);
            var g;
            "none" == a.style.display || "hidden" == a.style.visibility || "none" == admBoxappLib.util.getCss(a, "display") || "hidden" == admBoxappLib.util.getCss(a, "visibility") ? g = 0 : void 0 != a.style.opacity ? (c = parseFloat(a.style.opacity), g = isNaN(c) ? 1 : c) : void 0 != a.style.filter ? (c = a.style.filter.toLowerCase().match(/opacity=[\d.]+/)) ?
                (c = c[0].substr(8), c = parseFloat(c), g = isNaN(c) ? 1 : c) : g = 1 : g = 1;
            if (b != g) {
                d && d();
                0 == g && (a.style.opacity = 0, a.style.filter = "alpha(opacity=0)", a.style.display = "block");
                var f = b - g, l = f * admBoxappLib.effect.TIME_RESOLUTION / e;
                (function () {
                    g += l;
                    (0 < f ? g >= b : g <= b) ? (a.style.opacity = b, a.style.filter = "alpha(opacity=" + 100 * b + ")", 0 == b && (a.style.display = "none"), h && h(), a = a.effectFadeTimer = null) : (a.style.opacity = g, a.style.filter = "alpha(opacity=" + 100 * g + ")", a.effectFadeTimer = window.setTimeout(arguments.callee, admBoxappLib.effect.TIME_RESOLUTION))
                })()
            }
        },
        move: function (a, b, c, e) {
            var d = 200, h = "left", g = "top", f = null, l = null;
            e && (d = e.duration || 200, h = e.propX || "left", g = e.propY || "top", f = e.onStart || null, l = e.onFinish || null);
            a.effectMoveTimer && window.clearTimeout(a.effectMoveTimer);
            if (null != b && null == c) {
                var m = parseInt(a.style[h] || admBoxappLib.util.getCss(a, h)) || 0;
                if (m != b) {
                    f && f();
                    var p = b - m, r = p * admBoxappLib.effect.TIME_RESOLUTION / d;
                    (function () {
                        m += r;
                        (0 < p ? m >= b : m <= b) ? (a.style[h] = b + "px", l && l(), a = a.effectMoveTimer = null) : (a.style[h] = m + "px", a.effectMoveTimer = window.setTimeout(arguments.callee,
                            admBoxappLib.effect.TIME_RESOLUTION))
                    })()
                }
            } else if (null == b && null != c) {
                var n = parseInt(a.style[g] || admBoxappLib.util.getCss(a, g)) || 0;
                if (n != c) {
                    f && f();
                    var q = c - n, t = q * admBoxappLib.effect.TIME_RESOLUTION / d;
                    (function () {
                        n += t;
                        (0 < q ? n >= c : n <= c) ? (a.style[g] = c + "px", l && l(), a = a.effectMoveTimer = null) : (a.style[g] = n + "px", a.effectMoveTimer = window.setTimeout(arguments.callee, admBoxappLib.effect.TIME_RESOLUTION))
                    })()
                }
            } else null != b && null != c && (m = parseInt(a.style[h] || admBoxappLib.util.getCss(a, h)) || 0, n = parseInt(a.style[g] ||
                    admBoxappLib.util.getCss(a, g)) || 0, m != b || n != c) && (f && f(), p = b - m, q = c - n, r = p * admBoxappLib.effect.TIME_RESOLUTION / d, t = q * admBoxappLib.effect.TIME_RESOLUTION / d, function () {
                m += r;
                n += t;
                (Math.abs(p) > Math.abs(q) ? 0 < p ? m >= b : m <= b : 0 < q ? n >= c : n <= c) ? (a.style[h] = b + "px", a.style[g] = c + "px", l && l(), a = a.effectMoveTimer = null) : (a.style[h] = m + "px", a.style[g] = n + "px", a.effectMoveTimer = window.setTimeout(arguments.callee, admBoxappLib.effect.TIME_RESOLUTION))
            }())
        }, resize: function (a, b, c, e) {
            var d = 200, h = "width", g = "height", f = null, l = null;
            e &&
            (d = e.duration || 200, h = e.propW || "width", g = e.propH || "height", f = e.onStart || null, l = e.onFinish || null);
            a.effectResizeTimer && window.clearTimeout(a.effectResizeTimer);
            if (null != b && null == c) {
                var m = parseInt(a.style[h] || admBoxappLib.util.getCss(a, h)) || 0;
                if (m != b) {
                    f && f();
                    var p = b - m, r = p * admBoxappLib.effect.TIME_RESOLUTION / d;
                    (function () {
                        m += r;
                        (0 < p ? m >= b : m <= b) ? (a.style[h] = b + "px", l && l(), a = a.effectResizeTimer = null) : (a.style[h] = m + "px", a.effectResizeTimer = window.setTimeout(arguments.callee, admBoxappLib.effect.TIME_RESOLUTION))
                    })()
                }
            } else if (null ==
                b && null != c) {
                var n = parseInt(a.style[g] || admBoxappLib.util.getCss(a, g)) || 0;
                if (n != c) {
                    f && f();
                    var q = c - n, t = q * admBoxappLib.effect.TIME_RESOLUTION / d;
                    (function () {
                        n += t;
                        (0 < q ? n >= c : n <= c) ? (a.style[g] = c + "px", l && l(), a = a.effectResizeTimer = null) : (a.style[g] = n + "px", a.effectResizeTimer = window.setTimeout(arguments.callee, admBoxappLib.effect.TIME_RESOLUTION))
                    })()
                }
            } else null != b && null != c && (m = parseInt(a.style[h] || admBoxappLib.util.getCss(a, h)) || 0, n = parseInt(a.style[g] || admBoxappLib.util.getCss(a, g)) || 0, m != b || n != c) && (f && f(),
                p = b - m, q = c - n, r = p * admBoxappLib.effect.TIME_RESOLUTION / d, t = q * admBoxappLib.effect.TIME_RESOLUTION / d, function () {
                m += r;
                n += t;
                (Math.abs(p) > Math.abs(q) ? 0 < p ? m >= b : m <= b : 0 < q ? n >= c : n <= c) ? (a.style[h] = b + "px", a.style[g] = c + "px", l && l(), a = a.effectResizeTimer = null) : (a.style[h] = m + "px", a.style[g] = n + "px", a.effectResizeTimer = window.setTimeout(arguments.callee, admBoxappLib.effect.TIME_RESOLUTION))
            }())
        }, pagination: new function () {
            var a = admBoxappLib.PREFIX + "Pagination";
            this.create = function (b, c, e, d) {
                var h = 0, g = !0, f = "", l = 200, m = "h";
                d && (h = d.start || 0, g = void 0 !== d.repeat ? d.repeat : !0, f = d.effect || "", l = d.duration || 200, m = d.direction || "h");
                admBoxappLib.util.addStyle("." + a + "{ position:relative; overflow:hidden; } ." + a + "Item{ position:absolute; top:0px; left:0px; width:100%; height:100%; overflow:hidden; z-index:1; display:none; }", a);
                admBoxappLib.util.addClassName(b, a);
                d = 0;
                for (var p = b.children.length; d < p; ++d)admBoxappLib.util.addClassName(b.children[d], a + "Item");
                b.setAttribute("width", c);
                b.setAttribute("height", e);
                b.setAttribute("curPage",
                    h);
                b.setAttribute("repeat", g ? 1 : 0);
                b.setAttribute("effect", f);
                b.setAttribute("duration", l);
                b.setAttribute("direction", m);
                b.children[h].style.display = "block";
                b.children[h].style.zIndex = 2
            };
            this.go = function (a, c, e) {
                var d = a.getAttribute("curPage");
                if (c == d)return !1;
                if (0 > c) {
                    c = "0" == a.getAttribute("repeat") ? !1 : !0;
                    if (0 == c)return;
                    c = a.children.length - 1
                } else if (c >= a.children.length) {
                    c = "0" == a.getAttribute("repeat") ? !1 : !0;
                    if (0 == c)return;
                    c = 0
                }
                var h = e && void 0 != e.effect ? e.effect : a.getAttribute("effect");
                if ("random" ==
                    h)var g = ["none", "fade", "slide", "flip", "fly"], h = Math.floor(Math.random() * g.length), h = g[h];
                g = e && void 0 != e.duration ? e.duration : a.getAttribute("duration");
                e = e && void 0 != e.direction ? e.direction : "h" == a.getAttribute("direction") ? c > d ? "rl" : "lr" : c > d ? "bt" : "tb";
                var f = a.children[d], l = a.children[c];
                switch (h) {
                    case "fade":
                        admBoxappLib.effect.fade(f, 0, {
                            duration: g, onFinish: function () {
                                f.style.display = "none";
                                f.style.zIndex = 1;
                                f.style.opacity = 1;
                                f.style.filter = "alpha(opacity=100)"
                            }
                        });
                        admBoxappLib.effect.fade(l, 1, {
                            duration: g,
                            onFinish: function () {
                                l.style.zIndex = 2
                            }
                        });
                        break;
                    case "slide":
                        "lr" == e ? (d = a.getAttribute("width"), admBoxappLib.effect.move(f, d, null, {
                            duration: g,
                            onFinish: function () {
                                f.style.display = "none";
                                f.style.left = "0px";
                                f.style.zIndex = 1
                            }
                        }), l.style.left = -d + "px", l.style.display = "block", l.style.zIndex = 2, admBoxappLib.effect.move(l, 0, null, {duration: g})) : "rl" == e ? (d = a.getAttribute("width"), f.style.zIndex = 1, admBoxappLib.effect.move(f, -d, null, {
                            duration: g, onFinish: function () {
                                f.style.display = "none";
                                f.style.left = "0px";
                                f.style.zIndex =
                                    1
                            }
                        }), l.style.zIndex = 2, l.style.left = d + "px", l.style.display = "block", admBoxappLib.effect.move(l, 0, null, {duration: g})) : ("bt" == e ? (d = a.getAttribute("height"), admBoxappLib.effect.move(f, null, -d, {
                            duration: g,
                            onFinish: function () {
                                f.style.display = "none";
                                f.style.top = "0px";
                                f.style.zIndex = 1
                            }
                        }), l.style.top = d + "px") : (d = a.getAttribute("height"), admBoxappLib.effect.move(f, null, d, {
                            duration: g,
                            onFinish: function () {
                                f.style.display = "none";
                                f.style.top = "0px";
                                f.style.zIndex = 1
                            }
                        }), l.style.top = -d + "px"), l.style.zIndex = 2, l.style.display =
                            "block", admBoxappLib.effect.move(l, null, 0, {duration: g}));
                        break;
                    case "flip":
                        "lr" == e ? (d = a.getAttribute("width"), f.style.zIndex = 1, admBoxappLib.effect.fade(f, 0, {
                            duration: g,
                            onFinish: function () {
                                f.style.opacity = 1;
                                f.style.filter = "alpha(opacity=100)"
                            }
                        }), l.style.left = -d + "px", l.style.zIndex = 2, l.style.display = "block", admBoxappLib.effect.move(l, 0, null, {duration: g})) : "rl" == e ? (d = a.getAttribute("width"), f.style.zIndex = 1, admBoxappLib.effect.fade(f, 0, {
                            duration: g, onFinish: function () {
                                f.style.opacity = 1;
                                f.style.filter =
                                    "alpha(opacity=100)"
                            }
                        }), l.style.left = d + "px", l.style.zIndex = 2, l.style.display = "block", admBoxappLib.effect.move(l, 0, null, {duration: g})) : ("bt" == e ? (d = a.getAttribute("height"), f.style.zIndex = 1, admBoxappLib.effect.fade(f, 0, {
                            duration: g,
                            onFinish: function () {
                                f.style.opacity = 1;
                                f.style.filter = "alpha(opacity=100)"
                            }
                        }), l.style.top = d + "px") : (d = a.getAttribute("height"), f.style.zIndex = 1, admBoxappLib.effect.fade(f, 0, {
                            duration: g,
                            onFinish: function () {
                                f.style.opacity = 1;
                                f.style.filter = "alpha(opacity=100)"
                            }
                        }), l.style.top =
                            -d + "px"), l.style.zIndex = 2, l.style.display = "block", admBoxappLib.effect.move(l, null, 0, {duration: g}));
                        break;
                    case "fly":
                        "lr" == e ? (d = a.getAttribute("width"), l.style.display = "block", admBoxappLib.effect.fade(f, 0, {
                            duration: g,
                            onFinish: function () {
                                f.style.opacity = 1;
                                f.style.filter = "alpha(opacity=100)"
                            }
                        }), admBoxappLib.effect.move(f, d, null, {
                            duration: g, onFinish: function () {
                                l.style.zIndex = 2;
                                f.style.zIndex = 1;
                                f.style.left = "0px"
                            }
                        })) : "rl" == e ? (d = a.getAttribute("width"), l.style.display = "block", admBoxappLib.effect.fade(f,
                            0, {
                                duration: g, onFinish: function () {
                                    f.style.opacity = 1;
                                    f.style.filter = "alpha(opacity=100)"
                                }
                            }), admBoxappLib.effect.move(f, -d, null, {
                            duration: g, onFinish: function () {
                                f.style.left = "0px";
                                f.style.zIndex = 1;
                                l.style.zIndex = 2
                            }
                        })) : "bt" == e ? (d = a.getAttribute("height"), l.style.display = "block", admBoxappLib.effect.fade(f, 0, {
                            duration: g,
                            onFinish: function () {
                                f.style.opacity = 1;
                                f.style.filter = "alpha(opacity=100)"
                            }
                        }), admBoxappLib.effect.move(f, null, -d, {
                            duration: g, onFinish: function () {
                                l.style.zIndex = 2;
                                f.style.zIndex = 1;
                                f.style.top =
                                    "0px"
                            }
                        })) : (d = a.getAttribute("height"), l.style.display = "block", admBoxappLib.effect.fade(f, 0, {
                            duration: g,
                            onFinish: function () {
                                f.style.opacity = 1;
                                f.style.filter = "alpha(opacity=100)"
                            }
                        }), admBoxappLib.effect.move(f, null, d, {
                            duration: g, onFinish: function () {
                                f.style.top = "0px";
                                f.style.zIndex = 1;
                                l.style.zIndex = 2
                            }
                        }));
                        break;
                    default:
                        f.style.zIndex = 1, l.style.zIndex = 2, f.style.display = "none", l.style.display = "block"
                }
                a.setAttribute("curPage", c)
            };
            this.prev = function (a, c) {
                var e = parseInt(a.getAttribute("curPage")), e = --e;
                return this.go(a,
                    e, c)
            };
            this.next = function (a, c) {
                var e = parseInt(a.getAttribute("curPage")), e = ++e;
                return this.go(a, e, c)
            };
            this.getCurrentPage = function (a) {
                "string" == typeof a && (a = document.getElementById(a));
                a = a.getAttribute("curPage");
                return parseInt(a)
            }
        }, carousel: new function () {
            var a = admBoxappLib.PREFIX + "Carousel";
            this.create = function (b, c, e, d, h) {
                var g = 0, f = !0, l = 200, m = "h", p = 0, r = !1;
                h && (g = h.start || 0, f = void 0 !== h.repeat ? h.repeat : !0, l = h.duration || 200, m = h.direction || "h", p = h.separatorSize || 0, r = void 0 !== h.outerSeparator ? h.outerSeparator :
                    !1);
                admBoxappLib.util.addStyle("." + a + "{ position:relative; overflow:hidden; }." + a + "Ctn{ position:absolute; top:0px; left:0px; white-space:nowrap; )", a);
                admBoxappLib.util.addClassName(b, a);
                admBoxappLib.util.addClassName(b.children[0], a + "Ctn");
                b.setAttribute("curItem", g);
                b.setAttribute("repeat", f ? 1 : 0);
                b.setAttribute("duration", l);
                b.setAttribute("direction", m);
                b.setAttribute("carouselSize", c);
                b.setAttribute("itemSize", e);
                b.setAttribute("numItems", d);
                b.setAttribute("separatorSize", p);
                b.setAttribute("outerSeparator",
                    r ? 1 : 0);
                b = b.children[0];
                "h" == m ? b.style.left = "0px" : b.style.top = "0px"
            };
            this.go = function (a, c, e) {
                var d = a.getAttribute("curItem");
                if (c == d)return !1;
                d = a.getAttribute("numItems");
                if (0 > c) {
                    c = "0" == a.getAttribute("repeat") ? !1 : !0;
                    if (0 == c)return !1;
                    c = d - 1
                } else if (c >= d) {
                    c = "0" == a.getAttribute("repeat") ? !1 : !0;
                    if (0 == c)return !1;
                    c = 0
                }
                e = e && void 0 != e.duration ? e.duration : a.getAttribute("duration");
                var h = a.getAttribute("direction"), g = a.getAttribute("carouselSize"), f = a.getAttribute("itemSize"), l = a.getAttribute("separatorSize"),
                    m = 1 == a.getAttribute("outerSeparator"), g = m ? Math.round((g - l) / (f + l)) : Math.round((g + l) / (f + l)), p = Math.ceil(g / 2) - 1, d = c <= p ? 0 : c > d - (g - p) ? d - g : c - p, d = -(f * d + l * (m ? d + 1 : d));
                "h" == h ? admBoxappLib.effect.move(a.children[0], d, null, {duration: e}) : admBoxappLib.effect.move(a.children[0], null, d, {duration: e});
                a.setAttribute("curItem", c);
                return !0
            };
            this.prev = function (a, c) {
                var e = parseInt(a.getAttribute("curItem"));
                return this.go(a, e - 1, c)
            };
            this.next = function (a, c) {
                var e = parseInt(a.getAttribute("curItem"));
                return this.go(a, e + 1, c)
            };
            this.getCurrentItem = function (a) {
                a = a.getAttribute("curItem");
                return parseInt(a)
            }
        }, scrollTo: function (a, b) {
            var c = admBoxappLib.effect.TIME_RESOLUTION, e = window, d = 200, h = null;
            b && (d = b.duration || d, h = b.onFinish || null);
            var g = admBoxappLib.util.getScrollTop(), f = a > g ? 1 : -1, l = (a - g) / d * c, m = g;
            clearTimeout(admBoxappLib.effect.scrollTo.timer);
            (function () {
                m += l;
                m * f >= a * f ? (e.scrollTo(0, a), h && h()) : (e.scrollTo(0, m), admBoxappLib.effect.scrollTo.timer = setTimeout(arguments.callee, c))
            })()
        }, scrollToCenter: function (a, b) {
            var c = 200,
                e = null;
            b && (c = b.duration || c, e = b.onFinish || null);
            var d = admBoxappLib.util.getElementTop(a), h = admBoxappLib.util.getElementHeight(a), g = admBoxappLib.util.getViewportSize()[1];
            admBoxappLib.effect.scrollTo(g > h ? d - (g - h) / 2 : d, {duration: c, onFinish: e})
        }
    };