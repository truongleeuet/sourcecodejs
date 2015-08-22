/**
 * Created by Admin on 8/19/2015.
 */
function AdmBoxappBanner300x600(e, r, h) {
    var a = this, f, b, d, c = {}, g = function () {
            var c = h.getWindow(), g = c.document, l = e.background;
            admBoxappLib.util.addStyle("." + f + "{display:block; position:relative; width:300px; text-align:left; margin:0px; padding:0px;}." + f + 'Manufacturer {position:absolute; right:0; top:0; width:35px; height:17px; background: url("//adi.vcmedia.vn/adt/cpc/adsapp/template/300x385/bgManufacturerShort.png") left no-repeat;}.' + f + "Ctn {display:block; position:relative; height:100%; width:100%; background:#fff no-repeat center 0;}." +
                f + "Module {display:block; width:100%; height:600px;}." + f + "Addon {display:none; width:100%; height:300px;}." + f + "Popup {position:absolute; top:0; left:0; width:100%; height:100%; z-index:10; display:none;}." + f + "PopupOverlay {display:block; width:100%; height:100%; background:#000; opacity:0.3; filter:alpha(opacity=30);}." + f + "PopupCtn {display:block; background:transparent; border:1px solid transparent; position:absolute; top:0; right:0; width:100%; height:100%;}." + f + "PopupContent {display:block; position:absolute; left:4px; top:4px; bottom:4px; right:4px; overflow:hidden;}." +
                f + "PopupBtClose {background:no-repeat scroll 0 0 rgba(0, 0, 0, 0); background-position: 0px -130px; display:none; position: absolute;top:4px; right:3px;height: 36px;width: 36px;}", f);
            admBoxappLib.util.addStyle("." + b + 'Ctn {background-image:url("' + ((d ? l[1] || l[0] : l[0]) || "") + '");}.' + b + "Addon {" + (d ? "display:block;" : "") + "}", b);
            l = '<div class="' + f + " " + b + '" id="' + b + '"><div class="' + f + "Ctn " + b + 'Ctn" id="' + b + 'Ctn"><div class="' + f + "Module " + b + 'Module" id="' + b + 'Module"></div><div class="' + f + "Addon " + b + 'Addon" id="' +
                b + 'Addon"></div></div><a class="' + f + "Manufacturer " + b + 'Manufacturer" title="Ads by Admicro" href="http://boxapp.admicro.vn/" target="_blank"></a><div class="' + f + "Popup " + b + 'Popup" ><div class="' + f + "PopupOverlay " + b + 'PopupOverlay"></div><div class="' + f + "PopupCtn " + b + 'PopupCtn" ><div class="' + f + "PopupContent " + b + 'PopupContent"></div><a class="' + f + "PopupBtClose " + b + 'PopupBtClose" id="' + b + 'PopupBtClose" href="javascript:void(0);"></a></div></div></div>';
            g = g.getElementById(r);
            g.innerHTML = l;
            var n = g.children[0].children[1];
            n.onmouseover = function () {
                admBoxappLib.effect.resize(this, 125, null, {
                    onStart: function () {
                        n.style.backgroundImage = "url('//adi.vcmedia.vn/adt/cpc/adsapp/template/300x385/bgManufacturerLong.png')"
                    }
                })
            };
            n.onmouseout = function () {
                admBoxappLib.effect.resize(this, 35, null, {
                    onFinish: function () {
                        n.style.backgroundImage = "url('//adi.vcmedia.vn/adt/cpc/adsapp/template/300x385/bgManufacturerShort.png')"
                    }
                })
            };
            new c["AdmBoxappModule" + e.format](e, b + "Module", a);
            d && new c["AdmBoxappAddon" + e.addon_id](e.aitems, b + "Addon", a)
        },
        k = function (a) {
            if (!a.aitems || 0 == a.aitems.length)return !1;
            var b = h.getWindow();
            a = b.document;
            for (var d = b.AdmBoxapp300x600LimitTop || ["advZoneStickyTop", 0], b = b.AdmBoxapp300x600LimitBottom || ["adm_sticky_footer", "admStickyFooter", 0], c, f, e = 0; e < d.length; ++e) {
                if ("number" == typeof d[e]) {
                    c = d[e];
                    break
                }
                var g = a.getElementById(d[e]);
                if (g) {
                    c = admBoxappLib.util.getElementTop(g) + admBoxappLib.util.getElementHeight(g);
                    break
                }
            }
            for (e = 0; e < b.length; ++e) {
                if ("number" == typeof b[e]) {
                    f = admBoxappLib.util.getContentSize()[1] - b[e];
                    break
                }
                if (g =
                        a.getElementById(b[e])) {
                    f = admBoxappLib.util.getElementTop(g);
                    break
                }
            }
            return 900 <= f - c
        };
    this.openPopup = function (a, b, d, c) {
        var f = null, e = null, g = 0, k = 0, u = null;
        void 0 != c && (c.onFinish && (f = c.onFinish), c.onClose && (e = c.onClose), c.minHeight && (k = c.minHeight), c.minWidth && (g = c.minWidth), c.skin && (u = c.skin));
        var y = h.getWindow().document.getElementById(r).children[0], w = y.children[2];
        y.style.zIndex = "100000000";
        c = w.children[0];
        u && (c.style.backgroundColor = "#" + u);
        var v = w.children[1];
        v.style.width = g + "px";
        v.style.height = k +
            "px";
        u && (v.style.borderColor = "#" + u);
        u && (v.style.backgroundColor = "#FFF");
        var z = v.children[0];
        u && (z.style.backgroundColor = "#000");
        c = v.children[1];
        u && (c.style.backgroundImage = 'url("http://adnetwork.admicro.vn/box-app/images/template/v17/' + u + '.png")');
        u && (c.style.display = "block");
        c.onclick = function () {
            e && !1 === e() || (z.innerHTML = "", admBoxappLib.effect.fade(w, 0, {duration: 150}), admBoxappLib.effect.resize(v, g, k, {
                duration: 150,
                onFinish: function () {
                    y.style.zIndex = "inherit"
                }
            }))
        };
        admBoxappLib.effect.fade(w, 1, {duration: 150});
        admBoxappLib.effect.resize(v, b + 10, d + 10, {
            duration: 150, onFinish: function () {
                z.innerHTML = a;
                f && f()
            }
        })
    };
    this.closePopup = function () {
        h.getWindow().document.getElementById(b + "PopupBtClose").click()
    };
    this.onUserAction = function (b) {
        if (h.getEnvironment() == AdmBoxapp300x600.ENVIRONMENT_SITE) {
            b = a.getLogClick(null, b);
            admBoxappLib.util.sendLogging(b);
            if (b = e.click3rd)b = b.replace(/\[timestamp\]/ig, (new Date).getTime()), admBoxappLib.util.sendLogging3rd(b);
            1 != e.no_hide && (b = new Date, b.setHours(23), b.setMinutes(59), b.setSeconds(59),
                admBoxappLib.storage.set("CTR" + e.id, 1, b.getTime()))
        }
    };
    this.sendLogView = function () {
        for (var a = h.getWindow(), b = e.campaignid + ";" + e.id + ";-1", c = 0; c < e.items.length; ++c)b += "," + e.campaignid + ";" + e.id + ";" + e.items[c].key;
        if (d)for (var f = e.aitems, c = 0; c < f.length; ++c)b += "," + e.campaignid + ";" + e.id + ";" + f[c].key;
        a = "//lg.logging.admicro.vn/cpz?dmn=" + encodeURIComponent(document.URL || location.href) + "&ci=" + b + "&zid=" + h.getId() + "&tp=4" + (a.__AdmsendRandom || "");
        admBoxappLib.util.sendLogging(a);
        if (a = e.link3rd)a = a.replace(/\[timestamp\]/ig,
            (new Date).getTime()), admBoxappLib.util.sendLogging3rd(a)
    };
    this.getLogClick = function (a, b) {
        var c = h.getWindow();
        a || (a = "");
        b || (b = -1);
        return "//lg.logging.admicro.vn/cpx?dmn=" + encodeURIComponent(document.URL || location.href) + "&cmpg=" + e.campaignid + "&items=" + e.id + "&zid=" + h.getId() + "&cov=1&cid=" + b + "&re=" + encodeURIComponent(a) + "&tp=4" + (c.__AdmsendRandom || "")
    };
    this.appendUTM = function (a) {
        return admBoxappLib.util.appendUTM(a, e.keyword)
    };
    this.getZone = function () {
        return h
    };
    this.getId = function () {
        return e.id
    };
    this.getPrefixGroup =
        function () {
            return f
        };
    this.getPrefix = function () {
        return b
    };
    this.exportAPI = function (a, b) {
        c[a] = b
    };
    (function () {
        var t = h.getWindow(), m = t.document, l = e.id || 0;
        f = "admBoxappBanner300x600";
        b = "boxapp" + l;
        d = k(e);
        t["boxapp" + l] = c;
        g();
        e.c_css && admBoxappLib.util.addStyle(e.c_css);
        e.c_js && eval.call(t, e.c_js);
        a.exportAPI("click", a.onUserAction);
        if (h.getEnvironment() == AdmBoxapp300x600.ENVIRONMENT_SITE) {
            "cpm300x600" == e.type ? function () {
                var c = m.getElementById(b), d = admBoxappLib.util.getViewportSize()[1], f = admBoxappLib.util.getScrollTop(),
                    e = admBoxappLib.util.getElementTop(c), c = admBoxappLib.util.getElementHeight(c);
                if (e >= f && e <= f + d || e + c >= f && e + c <= f + d || e <= f && e + c >= f + d)a.sendLogView(); else return setTimeout(arguments.callee, 100), !1
            }() : a.sendLogView();
            try {
                __Admcounter(14)
            } catch (n) {
            }
        }
    })()
}
function AdmBoxappModule1(e, r, h) {
    var a;
    a = h.getPrefix() + "Mod";
    (function () {
        var f = h.getZone().getWindow().document, b = e.color.split("/");
        admBoxappLib.util.addStyle(".admBoxappMod1{display:block; position:relative; width:100%; height:600px;}.admBoxappMod1Link {display:block; height:50px; width:100%;}.admBoxappMod1Items {display:block; height:505px; margin-top:10px; padding-left:20px; padding-right:10px;}.admBoxappMod1Item12 {display:block; height:100px; overflow:hidden; text-decoration:none;}.admBoxappMod1TitleDesc {display:block; float:left; width:165px;}.admBoxappMod1Title {font:bold 12px/15px Tahoma;}.admBoxappMod1Desc {padding-top:5px; font:normal 11px/15px Tahoma;}.admBoxappMod1Img {display:block; float:right; width:105px; height:105px;}.admBoxappMod1Space1 {height:15px;}.admBoxappMod1Space2 {height:10px;}.admBoxappMod1Item34 {display:block; height:25px; font:bold 11px/25px Tahoma; text-decoration:none;}.admBoxappMod1Item5 {display:block; height:230px;}.admBoxappMod1LinkFt {display:block; height:35px; width:100%;}", "admBoxappMod1");
        admBoxappLib.util.addStyle("." + a + "Title {color:" + b[0] + ";}." + a + "Desc {color:" + b[1] + ";}." + a + "Item34 {color:" + b[2] + " !important;}", a);
        var b = h.appendUTM(e.click), d = e.items[0].key, c = h.appendUTM(e.items[0].click), g = e.items[0].title, k = e.items[0].desc, t = e.items[0].image, m = e.items[1].key, l = h.appendUTM(e.items[1].click), n = e.items[1].title, q = e.items[1].desc, p = e.items[1].image, x = e.items[2].key, A = h.appendUTM(e.items[2].click), u = e.items[2].title, y = e.items[3].key, w = h.appendUTM(e.items[3].click), b = '<div class="admBoxappMod1 ' +
            a + '" id="' + a + '"><a class="admBoxappMod1Link ' + a + 'Link" key="-1" href="' + b + '" target="_blank"></a><div class="admBoxappMod1Items ' + a + 'Items"><a class="admBoxappMod1Item12 ' + a + 'Item12" key="' + d + '" href="' + c + '" target="_blank"><div class="admBoxappMod1TitleDesc ' + a + 'TitleDesc"><div class="admBoxappMod1Title ' + a + 'Title">' + g + '</div><div class="admBoxappMod1Desc ' + a + 'Desc">' + k + '</div></div><img class="admBoxappMod1Img ' + a + 'Img" src="' + t + '" /><div style="clear:both"></div></a><div class="admBoxappMod1Space1 ' +
            a + 'Space1"></div><a class="admBoxappMod1Item12 ' + a + 'Item12" key="' + m + '" href="' + l + '" target="_blank"><div class="admBoxappMod1TitleDesc ' + a + 'TitleDesc"><div class="admBoxappMod1Title ' + a + 'Title">' + n + '</div><div class="admBoxappMod1Desc ' + a + 'Desc">' + q + '</div></div><img class="admBoxappMod1Img ' + a + 'Img" src="' + p + '" /><div style="clear:both"></div></a><div class="admBoxappMod1Space2 ' + a + 'Space2"></div><a class="admBoxappMod1Item34 ' + a + 'Item34" key="' + x + '" href="' + A + '" target="_blank">' + u + '</a><a class="admBoxappMod1Item34 ' +
            a + 'Item34" key="' + y + '" href="' + w + '" target="_blank">' + e.items[3].title + '</a><a class="admBoxappMod1Item5 ' + a + 'Item5" key="-1" href="' + b + '" target="_blank"></a></div><a class="admBoxappMod1LinkFt ' + a + 'LinkFt" key="-1" href="' + b + '" target="_blank"></a></div>', d = f.getElementById(r);
        d.innerHTML = b;
        f = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        b = d.getElementsByTagName("a");
        for (d = 0; d < b.length; ++d)b[d].getAttribute("key") && (b[d].onmousedown = f)
    })()
}
function AdmBoxappModule2(e, r, h) {
    var a;
    a = h.getPrefix() + "Mod";
    (function () {
        var f = h.getZone().getWindow().document;
        e.click = h.appendUTM(e.click);
        for (var b = 0; b < e.items.length; ++b) {
            var d = e.items[b];
            d.click = h.appendUTM(d.click)
        }
        admBoxappLib.util.addStyle('.admBoxappMod2{display:block; position:relative; width:100%; height:600px;}.admBoxappMod2Link {display:block; height:80px; width:100%;}.admBoxappMod2LinkFt {display:block; height:45px; width:100%;}.admBoxappMod2Gallery {display:block; position:relative; width:280px; height:180px; overflow:hidden; margin:0 auto; padding:0;}.admBoxappMod2Imgs {display:block; width:100%; height:100%;}.admBoxappMod2Img {}.admBoxappMod2Img img {display:block; width:100%; height:100%; border:0;}.admBoxappMod2Prev {display:block; position:absolute; top:0; left:0; width:20px; height:100%; background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUhJREFUeNpi/P//Px8DA8N0IDZjoBycAuJMRqChS6lkINxgkKG3GagMmEjV0NfXJ5yXlyf5+vVrZqoYeurUKc5169bxHzt2jPv48eNcFBt669YttqqqKokfP34wBQYGfvD09PyCSy1RYfr792/GsLAw2cePH7M5ODh86enpeUFRmP79+5exrKxMHGSghobGj7a2tpeE9BB0aWpqqtT58+e5xMTEfi9btuyJgIDAX4pj/9+/f4xg2xkZGZiYmP5TJUnNnDnzmbW19ZeXL1+yZmdnS4HCl2Lvg8CvX78YQ0NDZZ8+fcrm5OT0uaur6yXFiZ+Nje1/d3f3C35+/r/79u3jBUaWCD4XE51O1dTUfgENe8HBwfEPmAEEtm/fzoNLLQspOcrc3Px7QEDAx4cPH7JZWlp+oyhMSQU0K6VOUdlMcHlK9ZIfIMAARAiXdJi9c3AAAAAASUVORK5CYII=") center no-repeat; cursor:pointer; opacity:0.5; z-index:3;}.admBoxappMod2Next {display:block; position:absolute; top:0; right:0; width:20px; height:100%; background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNpi/P//PwMQ8AHxdCA2Y6AcnALiTEaowUupZCjccJjBtxmoDJjwSb569Yo5Ly9Psq+vT5iqBh87dowLiLnXr1/Pf/r0aQ6qGezl5fXF39//4/fv35mqq6sl79y5w0aswQTDGCRfXFwscejQIR45Oblfq1ateszCwvKfIheDbWZkZGhvb3+ppqb249GjR2xlZWXi//79o9zFMPDu3TvmmJgYWWCEshgZGX2bNWvWM4pcDANQ74Nd8efPH0aKgwIEfv/+zZidnS0FdC2rtbX1l5kzZz6jisHAFCF2/fp1Dmlp6V/d3d0vWVlZCUYeCyGXAg0S3rdvHy8/P/9fIPsFGxvbf4rT8datW3nWrVsnwMHB8a+tre0FMGX8IjpO8ElaWVl9Mzc3/6qoqPgLSH8nJecNTCFEDYNPUdncUzCDM6loOLgGAQgwAJFojZXaI7nGAAAAAElFTkSuQmCC") center no-repeat; cursor:pointer; opacity:0.5; z-index:3;}.admBoxappMod2Prev:hover, .admBoxappMod2Next:hover {opacity:initial;}.admBoxappMod2Prs {display:block; height:245px; margin:50px 0 0 0; padding-left:20px; padding-right:10px; overflow:hidden;}.admBoxappMod2Pr {display:block; height:50px; margin-bottom:15px; text-decoration:none;}.admBoxappMod2PrImg {display:block; float:left; width:50px; height:50px;}.admBoxappMod2PrTitle {display:block; float:left; width:200px; margin-left:5px; font:bold 11px/25px Tahoma;}',
            "admBoxappMod2");
        admBoxappLib.util.addStyle("." + a + "Pr {color:" + e.color + " !important;}", a);
        for (var c = e.items, g = e.click, d = '<div class="admBoxappMod2 ' + a + '" id="' + a + '"><a class="admBoxappMod2Link ' + a + 'Link" key="-1" href="' + g + '" target="_blank"></a><div class="admBoxappMod2Gallery ' + a + 'Gallery"><div class="admBoxappMod2Imgs ' + a + 'Imgs" id="' + a + 'Imgs">', b = 0, k = c.length - 4; b < k; ++b)d += '<div class=""><a class="admBoxappMod2Img ' + a + 'Img" key="' + c[b].key + '" href="' + c[b].click + '" target="_blank"><img src="' + c[b].image +
            '" /></a></div>';
        d += '</div><div class="admBoxappMod2Prev ' + a + 'Prev"></div><div class="admBoxappMod2Next ' + a + 'Next"></div></div><div class="admBoxappMod2Prs ' + a + 'Prs">';
        k = c.length;
        for (b = k - 4; b < k; ++b)d += '<a class="admBoxappMod2Pr ' + a + 'Pr" key="' + c[b].key + '" href="' + c[b].click + '" target="_blank"><img class="admBoxappMod2PrImg ' + a + 'PrImg" src="' + c[b].image + '" /><div class="admBoxappMod2PrTitle ' + a + 'PrTitle">' + c[b].title + "</div></a>";
        d += '</div><a class="admBoxappMod2LinkFt ' + a + 'LinkFt" key="-1" href="' +
            g + '" target="_blank"></a></div>';
        b = f.getElementById(r);
        b.innerHTML = d;
        f = b.children[0].children[1].children[0];
        d = b.children[0].children[1].children[1];
        c = b.children[0].children[1].children[2];
        admBoxappLib.effect.pagination.create(f, 280, 180, {effect: "fade"});
        d.onclick = function () {
            admBoxappLib.effect.pagination.prev(this.parentElement.children[0])
        };
        c.onclick = function () {
            admBoxappLib.effect.pagination.next(this.parentElement.children[0])
        };
        d = setInterval(function () {
                var b = document.getElementById(a + "Imgs");
                admBoxappLib.effect.pagination.next(b)
            },
            1E4);
        f.setAttribute("autoplayid", d);
        f = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        d = b.getElementsByTagName("a");
        for (b = 0; b < d.length; ++b)d[b].getAttribute("key") && (d[b].onmousedown = f)
    })()
}
function AdmBoxappModule3(e, r, h) {
    var a, f, b = function (b) {
        var c = h.getZone().getWindow().document, e = c.getElementById(f + "Gallery"), c = c.getElementById(f + "Thumb"), k = admBoxappLib.effect.pagination.getCurrentPage(e);
        switch (b) {
            case "prev":
                admBoxappLib.effect.pagination.prev(e, {direction: "lr"});
                b = admBoxappLib.effect.pagination.getCurrentPage(e);
                admBoxappLib.effect.carousel.go(c, b);
                break;
            case "next":
                admBoxappLib.effect.pagination.next(e, {direction: "rl"});
                b = admBoxappLib.effect.pagination.getCurrentPage(e);
                admBoxappLib.effect.carousel.go(c,
                    b);
                break;
            default:
                admBoxappLib.effect.pagination.go(e, b), admBoxappLib.effect.carousel.go(c, b)
        }
        c.children[0].children[k].className = a + "ThumbItem " + f + "ThumbItem";
        c.children[0].children[b].className = a + "ThumbItemSelected " + f + "ThumbItemSelected"
    };
    a = "admBoxappMod3";
    f = h.getPrefix() + "Mod";
    (function () {
        var d = h.getZone().getWindow().document;
        e.click = h.appendUTM(e.click);
        for (var c = 0; c < e.items.length; ++c) {
            var g = e.items[c];
            g.click && (g.click = h.appendUTM(g.click))
        }
        admBoxappLib.util.addStyle("." + a + "{display:block; position:relative; width:100%; height:600px;}." +
            a + "Link {display:block; height:80px; width:100%;}." + a + "LinkFt {display:block; height:30px; width:100%;}." + a + "Gallery {display:block; height:180px; width:280px; overflow:hidden; margin:0 auto; padding:0;}." + a + "GalleryItem {display:block; width:100%; height:100%; text-decoration:none;}." + a + "Img {display:block; width:100%; height:100%; border:0;}." + a + "Nav {display:block; height:60px; width:280px; margin:10px auto 0 auto;}." + a + 'NavPrev {display:block; float:left; height:100%; width:12px; margin:0; padding:0; background:url("data:image/gif;base64,R0lGODlhBgALAKIFAM/Pz8jIyNjY2NnZ2cvLy////wAAAAAAACH5BAEAAAUALAAAAAAGAAsAAAMTWKqzRWIRIqmaCwT3bOWYA3FDAgA7") center no-repeat; cursor:pointer;}.' +
            a + 'NavNext {display:block; float:left; height:100%; width:12px; margin:0; padding:0;  background:url("data:image/gif;base64,R0lGODlhBgALAKIFAM/Pz8jIyNjY2NnZ2cvLy////wAAAAAAACH5BAEAAAUALAAAAAAGAAsAAAMTOLUrxIs8KGGpMACG7/SMAylQAgA7") center no-repeat; cursor:pointer;}.' + a + "Thumb {display:block; float:left; height:100%; width:256px; margin:0; padding:0; overflow:hidden;}." + a + "ThumbItem {display:block; float:left; width:60px; height:100%; margin:0 5px 0 0; padding:0; cursor:pointer;}." + a + "ThumbItemSelected {display:block; float:left; width:56px; height:56px; margin:0 5px 0 0; padding:0; cursor:pointer; border:2px solid #888;}." +
            a + "ThumbImg {display:block; width:100%; height:100%;}." + a + "Embed {display:block; height:200px; width:280px; margin:40px auto 0 auto;}", a);
        for (var k = e.items, g = e.items.length - 1, t = e.items[g], m = h.appendUTM(e.click), l = '<div class="' + a + " " + f + '" id="' + f + '"><a class="' + a + "Link " + f + 'Link" key="-1" href="' + m + '" target="_blank"></a><div class="' + a + "Gallery " + f + 'Gallery" id="' + f + 'Gallery">', c = 0; c < g; ++c)l += '<div class=""><a class="' + a + "GalleryItem " + f + 'GalleryItem" key="' + k[c].key + '" href="' + k[c].click + '" target="_blank"><img class="' +
            a + "Img " + f + 'Img" src="' + k[c].image + '" /></a></div>';
        l += '</div><div class="' + a + "Nav " + f + 'Nav"><div class="' + a + "NavPrev " + f + 'NavPrev"></div><div class="' + a + "Thumb " + f + 'Thumb" id="' + f + 'Thumb"><div class="" style="width:' + 65 * g + 'px; height:100%;">';
        for (c = 0; c < g; ++c)l += '<div class="' + a + "ThumbItem " + f + 'ThumbItem" i="' + c + '"><img class="' + a + "ThumbImg " + f + 'ThumbImg" src="' + admBoxappLib.util.getThumb(k[c].image) + '" /></div>';
        l += '</div></div><div class="' + a + "NavNext " + f + 'NavNext"></div><div style="clear:both; width:0; height:0;"></div></div><div class="' +
            a + "Embed " + f + 'Embed">' + t.iframe + '</div><a class="' + a + "LinkFt " + f + 'LinkFt" key="-1" href="' + m + '" target="_blank"></a></div>';
        d = d.getElementById(r);
        d.innerHTML = l;
        l = d.children[0].children[1];
        admBoxappLib.effect.pagination.create(l, 280, 180, {effect: "slide"});
        admBoxappLib.effect.carousel.create(d.children[0].children[2].children[1], 256, 60, g, {separatorSize: 5});
        d.children[0].children[2].children[0].onclick = function () {
            b("prev")
        };
        d.children[0].children[2].children[2].onclick = function () {
            b("next")
        };
        g = d.children[0].children[2].children[1].children[0].children;
        for (c = 0; c < g.length; ++c)g[c].onclick = function () {
            var a = this.getAttribute("i");
            b(a)
        };
        c = setInterval(function () {
            b("next")
        }, 1E4);
        l.setAttribute("autoplayid", c);
        g = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        d = d.getElementsByTagName("a");
        for (c = 0; c < d.length; ++c)d[c].getAttribute("key") && (d[c].onmousedown = g)
    })()
}
function AdmBoxappModule4(e, r, h) {
    var a, f = function () {
        var a = e.items[3], d = a.e_embed, c = "2B60DE 3BB9FF 4CC417 7d7d7d 8D38C9 da1b22 FF00FF ff8800 ffff00".split(" ")[a.skin] || null, f = (a.title || "0x0").split("x"), a = parseInt(f[0]), f = parseInt(f[1]);
        h.openPopup(d, a, f, {minWidth: 300, minHeight: 600, skin: c})
    };
    a = h.getPrefix() + "Mod";
    (function () {
        var b = h.getZone().getWindow().document;
        e.click = h.appendUTM(e.click);
        for (var d = 0; d < e.items.length; ++d) {
            var c = e.items[d];
            c.click && (c.click = h.appendUTM(c.click))
        }
        d = e.color.split("/");
        admBoxappLib.util.addStyle(".admBoxappMod4{display:block; position:relative; width:100%; height:600px;}.admBoxappMod4Link {display:block; height:80px; width:100%;}.admBoxappMod4LinkFt {display:block; height:35px; width:100%; margin:5px 0 0 0; padding:0;}.admBoxappMod4Prs {display:block; height:200px; width:270px; margin:0 0 0 20px; padding:0; overflow:hidden;}.admBoxappMod4Pr {display:block; height:60px; margin-bottom:10px; overflow:hidden; text-decoration:none;}.admBoxappMod4PrImg {display:block; float:left; width:60px; height:60px;}.admBoxappMod4PrText {display:block; float:left; width:200px; height:100%; margin:0 0 0 10px; padding:0;}.admBoxappMod4PrTitle {display:block; font:bold 12px/15px Tahoma;}.admBoxappMod4PrDesc {display:block; font:normal 11px/15px Tahoma;}.admBoxappMod4Embed {display:block; height:220px; width:270px; margin:60px 0 0 20px; padding:0;\t}",
            "admBoxappMod4");
        admBoxappLib.util.addStyle("." + a + "PrTitle {color:" + d[0] + "}." + a + "PrDesc {color:" + d[1] + "}", a);
        for (var g = e.items, k = g[3], c = '<div class="admBoxappMod4 ' + a + '" id="' + a + '"><a class="admBoxappMod4Link ' + a + 'Link" key="-1" href="' + e.click + '" target="_blank"></a><div class="admBoxappMod4Prs ' + a + 'Prs">', d = 0; 3 > d; ++d)c += '<a class="admBoxappMod4Pr ' + a + 'Pr" key="' + g[d].key + '" href="' + g[d].click + '" target="_blank"><img class="admBoxappMod4PrImg ' + a + 'PrImg" src="' + g[d].image + '" /><div class="admBoxappMod4PrText ' +
            a + 'PrText"><div class="admBoxappMod4PrTitle ' + a + 'PrTitle">' + g[d].title + '</div><div class="admBoxappMod4PrDesc ' + a + 'PrDesc">' + g[d].desc + "</div></div></a>";
        c += '</div><div class="admBoxappMod4Embed ' + a + 'Embed">' + k.iframe + '</div><a class="admBoxappMod4LinkFt ' + a + 'LinkFt" key="-1" href="' + e.click + '" target="_blank"></a></div>';
        d = b.getElementById(r);
        d.innerHTML = c;
        b = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        c = d.getElementsByTagName("a");
        for (d = 0; d < c.length; ++d)c[d].getAttribute("key") &&
        (c[d].onmousedown = b);
        h.exportAPI("openPopup", f);
        h.exportAPI("closePopup", h.closePopup)
    })()
}
function AdmBoxappModule15(e, r, h) {
    var a, f, b = function (b) {
        var d = h.getZone().getWindow().document, e = d.getElementById(f + "Gallery"), d = d.getElementById(f + "Thumb"), t = admBoxappLib.effect.pagination.getCurrentPage(e);
        switch (b) {
            case "prev":
                admBoxappLib.effect.pagination.prev(e, {direction: "lr"});
                b = admBoxappLib.effect.pagination.getCurrentPage(e);
                admBoxappLib.effect.carousel.go(d, b);
                break;
            case "next":
                admBoxappLib.effect.pagination.next(e, {direction: "rl"});
                b = admBoxappLib.effect.pagination.getCurrentPage(e);
                admBoxappLib.effect.carousel.go(d,
                    b);
                break;
            default:
                admBoxappLib.effect.pagination.go(e, b), admBoxappLib.effect.carousel.go(d, b)
        }
        d.children[0].children[t].className = a + "ThumbItem " + f + "ThumbItem";
        d.children[0].children[b].className = a + "ThumbItemSelected " + f + "ThumbItemSelected"
    }, d = function () {
        var a = e.items, b = a[a.length - 1], a = b.e_embed, d = "2B60DE 3BB9FF 4CC417 7d7d7d 8D38C9 da1b22 FF00FF ff8800 ffff00".split(" ")[b.skin] || null, f = (b.title || "0x0").split("x"), b = parseInt(f[0]), f = parseInt(f[1]);
        h.openPopup(a, b, f, {minWidth: 300, minHeight: 600, skin: d})
    };
    a = "admBoxappMod15";
    f = h.getPrefix() + "Mod";
    (function () {
        var c = h.getZone().getWindow().document;
        e.click = h.appendUTM(e.click);
        admBoxappLib.util.addStyle("." + a + "{display:block; position:relative; width:100%; height:600px;}." + a + "Link {display:block; height:80px; width:100%;}." + a + "LinkFt {display:block; height:30px; width:100%;}." + a + "Gallery {display:block; height:180px; width:280px; overflow:hidden; margin:0 auto; padding:0;}." + a + "Nav {display:block; height:60px; width:280px; margin:10px auto 0 auto;}." +
            a + 'NavPrev {display:block; float:left; height:100%; width:12px; margin:0; padding:0; background:url("data:image/gif;base64,R0lGODlhBgALAKIFAM/Pz8jIyNjY2NnZ2cvLy////wAAAAAAACH5BAEAAAUALAAAAAAGAAsAAAMTWKqzRWIRIqmaCwT3bOWYA3FDAgA7") center no-repeat; cursor:pointer;}.' + a + 'NavNext {display:block; float:left; height:100%; width:12px; margin:0; padding:0;  background:url("data:image/gif;base64,R0lGODlhBgALAKIFAM/Pz8jIyNjY2NnZ2cvLy////wAAAAAAACH5BAEAAAUALAAAAAAGAAsAAAMTOLUrxIs8KGGpMACG7/SMAylQAgA7") center no-repeat; cursor:pointer;}.' +
            a + "Thumb {display:block; float:left; height:100%; width:256px; margin:0; padding:0; overflow:hidden;}." + a + "ThumbItem {display:block; float:left; width:60px; height:100%; margin:0 5px 0 0; padding:0; cursor:pointer;}." + a + "ThumbItemSelected {display:block; float:left; width:56px; height:56px; margin:0 5px 0 0; padding:0; cursor:pointer; border:2px solid #888;}." + a + "ThumbImg {display:block; width:100%; height:100%;}." + a + "Embed {display:block; height:200px; width:280px; margin:40px auto 0 auto;}", a);
        e.color && admBoxappLib.util.addStyle("." + f + "ThumbItemSelected {border-color:" + e.color + "}", f);
        for (var g = e.items, k = e.items.length - 1, t = e.items[k], m = h.appendUTM(e.click), l = '<div class="' + a + " " + f + '" id="' + f + '"><a class="' + a + "Link " + f + 'Link" key="-1" href="' + m + '" target="_blank"></a><div class="' + a + "Gallery " + f + 'Gallery" id="' + f + 'Gallery">', n = 0; n < k; ++n)l += '<div class="">' + g[n].iframe + "</div>";
        l += '</div><div class="' + a + "Nav " + f + 'Nav"><div class="' + a + "NavPrev " + f + 'NavPrev"></div><div class="' + a + "Thumb " + f +
            'Thumb" id="' + f + 'Thumb"><div class="" style="width:' + 65 * k + 'px; height:100%;">';
        for (n = 0; n < k; ++n)l += '<div class="' + a + "ThumbItem " + f + 'ThumbItem" i="' + n + '"><img class="' + a + "ThumbImg " + f + 'ThumbImg" src="' + g[n].image + '" /></div>';
        l += '</div></div><div class="' + a + "NavNext " + f + 'NavNext"></div><div style="clear:both; width:0; height:0;"></div></div><div class="' + a + "Embed " + f + 'Embed">' + t.iframe + '</div><a class="' + a + "LinkFt " + f + 'LinkFt" key="-1" href="' + m + '" target="_blank"></a></div>';
        c = c.getElementById(r);
        c.innerHTML = l;
        admBoxappLib.effect.pagination.create(c.children[0].children[1], 280, 180, {effect: "slide"});
        admBoxappLib.effect.carousel.create(c.children[0].children[2].children[1], 256, 60, k, {separatorSize: 5});
        c.children[0].children[2].children[0].onclick = function () {
            b("prev")
        };
        c.children[0].children[2].children[2].onclick = function () {
            b("next")
        };
        k = c.children[0].children[2].children[1].children[0].children;
        for (n = 0; n < k.length; ++n)k[n].onclick = function () {
            var a = this.getAttribute("i");
            b(a)
        };
        h.exportAPI("openPopup",
            d);
        h.exportAPI("closePopup", h.closePopup);
        k = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        l = c.getElementsByTagName("a");
        for (n = 0; n < l.length; ++n)l[n].getAttribute("key") && (l[n].onmousedown = k)
    })()
}
function AdmBoxappModule17(e, r, h) {
    var a, f, b, d, c = function (b) {
        var c = h.getZone().getWindow().document, d = c.getElementById(f + "Gallery"), c = c.getElementById(f + "Thumb"), e = admBoxappLib.effect.pagination.getCurrentPage(d);
        switch (b) {
            case "prev":
                admBoxappLib.effect.pagination.prev(d, {direction: "lr"});
                b = admBoxappLib.effect.pagination.getCurrentPage(d);
                admBoxappLib.effect.carousel.go(c, b);
                break;
            case "next":
                admBoxappLib.effect.pagination.next(d, {direction: "rl"});
                b = admBoxappLib.effect.pagination.getCurrentPage(d);
                admBoxappLib.effect.carousel.go(c, b);
                break;
            default:
                admBoxappLib.effect.pagination.go(d, b), admBoxappLib.effect.carousel.go(c, b)
        }
        c.children[0].children[e].className = a + "ThumbItem " + f + "ThumbItem";
        c.children[0].children[b].className = a + "ThumbItemSelected " + f + "ThumbItemSelected"
    }, g = function (a, f, g, k) {
        clearInterval(b);
        var q = admBoxappLib.util.isFlashSupported(), p = admBoxappLib.util.isHTML5Supported();
        k = e.click;
        q ? (f = /((http|https):\/\/)?(www\.)?(youtu\.be)(\/)id-([a-zA-Z0-9\_\-\.]+)\/?/, a = '<object width="100%" height="100%" data="//adi.vcmedia.vn/adt/cpc/adsapp/video/playerAds.swf?key=095eb1d71ed240a891a69d8c93c71d6e&amp;pname=mediaplayer.swf" type="application/x-shockwave-flash"><param value="high" name="quality"><param value="transparent" name="wmode"><param value="6.0.65.0" name="swfversion"><param name="flashvars" value="config=//adi.vcmedia.vn/adt/cpc/adsapp/video/config.xml&amp;autostart=true&amp;controlbar.idlehide=true&amp;controlbar=over&amp;videotag=true&amp;provider=' +
            (/((http|https):\/\/)?(www\.)?(youtube\.com)(\/)?([a-zA-Z0-9\_\-\.]+)\/?/.test(a) || f.test(a) ? "youtube" : "http") + "&amp;file=" + a + "&amp;loadcolor.color=FF0000&amp;displayclick=link&amp;link=" + encodeURIComponent(k) + '"><a target="_blank" href="' + a + '"></a></object>') : p ? a = 0 <= a.indexOf("www.youtube.com") ? '<iframe src="//www.youtube.com/embed/' + a.split("=")[1] + '?autoplay=1&autohide=1&rel=0" style="margin:0; padding:0; border:0; width:100%; height:100%;" border="0"></iframe>' : '<video width="100%" height="100%" controls><source src="' +
        a + '" /></video>' : (a = f || null, a = '<a href="' + k + '" target="_blank" style="display:block; width:100%; height:100%; border:0; outline:0;">' + (a ? '<img src="' + a + '" width="100%" height="100%" />' : "") + "</a>");
        h.openPopup(a, 595, 370, {
            minWidth: 300, minHeight: 600, skin: g, onClose: function () {
                b = setInterval(function () {
                    c("next")
                }, d)
            }
        })
    }, k = function (a) {
        var b = [], c;
        for (c in a) {
            var d = a[c], f = parseInt(c.substr(1)) || -1;
            d.key = f;
            b.push(d)
        }
        return b
    };
    a = "admBoxappMod17";
    f = h.getPrefix() + "Mod";
    e.items instanceof Array || (e.items = k(e.items));
    d = e.items[0].title || 1E4;
    (function () {
        var k = h.getZone().getWindow().document, m = e.items, l = "2B60DE 3BB9FF 4CC417 7d7d7d 8D38C9 da1b22 FF00FF ff8800 ffff00".split(" ")[m.shift().skin] || null, n = m.length, q = "//adi.vcmedia.vn/adt/cpc/zoneimages/adsapp/v17/" + l + ".png";
        e.click = h.appendUTM(e.click);
        for (var p = 0; p < e.items.length; ++p) {
            var x = e.items[p];
            x.click && (x.click = h.appendUTM(x.click))
        }
        admBoxappLib.util.addStyle("." + a + "{display:block; position:relative; width:100%; height:600px;}." + a + "Gallery {display:block; height:100%; width:100%; overflow:hidden; margin:0 auto; padding:0;}." +
            a + "GalleryItem {display:block; width:100%; height:100%; text-decoration:none;}." + a + "Img {display:block; width:100%; height:100%; border:0;}." + a + "Bt {display:block; position:absolute; top:227px; left:110px; width:77px; height:77px; background:no-repeat; background-position:0px 0px; cursor:pointer;}." + a + "Nav {display:block; position:absolute; height:60px; width:280px; bottom:10px; left:10px; z-index:10;}." + a + "NavPrev {display:block; float:left; height:18px; width:12px; margin:21px 0 0 0; padding:0; background:center no-repeat; background-position:0px -175px; cursor:pointer;}." +
            a + "NavNext {display:block; float:left; height:18px; width:12px; margin:21px 0 0 0; padding:0; background:center no-repeat; background-position:0px -203px; cursor:pointer;}." + a + "Thumb {display:block; float:left; height:100%; width:256px; margin:0; padding:0; overflow:hidden;}." + a + "ThumbItem {display:block; position:relative; float:left; width:56px; height:56px; border:2px solid; margin:0 5px 0 0; padding:0; cursor:pointer;}." + a + "ThumbItemSelected {display:block; position:relative; float:left; width:52px; height:52px; border:4px solid; margin:0 5px 0 0; padding:0; cursor:pointer;}." +
            a + "ThumbImg {display:block; width:100%; height:100%;}." + a + "ThumbVideo {display:block; position:absolute; top:-2px; right:-2px; width:33px; height:33px; background:no-repeat scroll 0 0 rgba(0, 0, 0, 0); background-position:0px -87px;}." + a + "Embed {display:block; height:200px; width:280px; margin:40px auto 0 auto;}", a);
        admBoxappLib.util.addStyle("." + f + 'ThumbVideo {background-image: url("' + q + '");}.' + f + "ThumbItem {border-color:#" + l + ";}." + f + "ThumbItemSelected {border-color:#" + l + ";}." + f + 'Bt {background-image: url("' +
            q + '");}.' + f + 'NavPrev {background-image: url("' + q + '");}.' + f + 'NavNext {background-image: url("' + q + '");}', f);
        q = '<div class="' + a + " " + f + '" id="' + f + '"><div class="' + a + "Gallery " + f + 'Gallery" id="' + f + 'Gallery">';
        for (p = 0; p < n; ++p)q += '<div class="">', q = m[p].click ? q + ('<a class="' + a + "GalleryItem " + f + 'GalleryItem" key="' + m[p].key + '" href="' + m[p].click + '" target="_blank"><img class="' + a + "Img " + f + 'Img" src="' + m[p].image + '" /></a>') : q + ('<div class="' + a + "GalleryItem " + f + 'GalleryItem" key="' + m[p].key + '" video="' + admBoxappLib.util.htmlSpecialChars(m[p].url_video) +
        '" image="' + admBoxappLib.util.htmlSpecialChars(m[p].image || "") + '" skin="' + l + '"><img class="' + a + "Img " + f + 'Img" src="' + m[p].image + '" /><div class="' + a + "Bt " + f + 'Bt"></div></div>'), q += "</div>";
        q += '</div><div class="' + a + "Nav " + f + 'Nav"><div class="' + a + "NavPrev " + f + 'NavPrev"></div><div class="' + a + "Thumb " + f + 'Thumb" id="' + f + 'Thumb"><div class="" style="width:' + 65 * n + 'px; height:100%;">';
        for (p = 0; p < n; ++p)q += '<div class="' + a + "ThumbItem " + f + 'ThumbItem" i="' + p + '"><img class="' + a + "ThumbImg " + f + 'ThumbImg" src="' +
            admBoxappLib.util.getThumb(m[p].image) + '" />', m[p].url_video && (q += '<div class="' + a + "ThumbVideo " + f + 'ThumbVideo"></div>'), q += "</div>";
        q += '</div></div><div class="' + a + "NavNext " + f + 'NavNext"></div><div style="clear:both; width:0; height:0;"></div></div></div>';
        m = k.getElementById(r);
        m.innerHTML = q;
        l = m.children[0].children[0];
        admBoxappLib.effect.pagination.create(l, 300, 600, {effect: "fade"});
        admBoxappLib.effect.carousel.create(m.children[0].children[1].children[1], 256, 60, n, {separatorSize: 5});
        m.children[0].children[1].children[0].onclick =
            function () {
                c("prev")
            };
        m.children[0].children[1].children[2].onclick = function () {
            c("next")
        };
        n = m.children[0].children[1].children[1].children[0].children;
        for (p = 0; p < n.length; ++p)n[p].onclick = function () {
            var a = this.getAttribute("i");
            c(a)
        };
        b = setInterval(function () {
            c("next")
        }, d);
        l.setAttribute("autoplayid", b);
        m.onmouseout = function () {
            admBoxappLib.effect.fade(this.children[0].children[1], 0)
        };
        m.onmouseover = function () {
            admBoxappLib.effect.fade(this.children[0].children[1], 1)
        };
        n = function () {
            var a = this.parentElement ||
                this.parentNode, b = a.getAttribute("video"), c = a.getAttribute("image"), d = a.getAttribute("skin"), a = a.getAttribute("key");
            g(b, c, d, a)
        };
        k = k.getElementsByClassName(f + "Bt");
        for (p = 0; p < k.length; ++p)k[p].onclick = n;
        k = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        n = m.getElementsByTagName("a");
        for (p = 0; p < n.length; ++p)n[p].getAttribute("key") && (n[p].onmousedown = k)
    })()
}
function AdmBoxappModule27(e, r, h) {
    var a;
    a = h.getPrefix() + "Mod";
    (function () {
        var f = h.getZone().getWindow().document;
        e.click = h.appendUTM(e.click);
        for (var b = 0; b < e.items.length; ++b) {
            var d = e.items[b];
            d.click && (d.click = h.appendUTM(d.click))
        }
        b = (e.color || "/").split("/");
        admBoxappLib.util.addStyle(".admBoxappMod27{display:block; position:relative; width:100%; height:600px;}.admBoxappMod27Space1 {display:block; height:38px; margin:0; padding:0;}.admBoxappMod27Box1 {display:block; width:280px; height:316px; margin:0 auto; padding:0; overflow:hidden;}.admBoxappMod27Box1ItemLarge {display:block; width:100%; height:106px; overflow:hidden; margin:5px 0 0 0; padding:0; text-decoration:none;}.admBoxappMod27Box1ItemLargeImg {display:block; float:left; width:100px; height:100px;}.admBoxappMod27Box1ItemLargeCtn {display:block; float:left; width:170px; height:100%; margin-left:10px;}.admBoxappMod27Box1ItemLargeTitle {display:block; margin-bottom:5px; font:bold 12px/15px Tahoma; color:#008F4F;}.admBoxappMod27Box1ItemLargeSapo {display:block; color:#000; font:normal 13px/17px Tahoma;}.admBoxappMod27Box1Item {display:block; height:30px; margin:0 0 0 10px; padding:0; overflow:hidden; font:bold 11px/30px Tahoma; color:#008F4F; text-decoration:none; white-space:nowrap;}.admBoxappMod27Box1Landing {display:block; color:#008F4F; font:bold 11px/16px Tahoma; text-decoration:none;}.admBoxappMod27Space2 {display:block; height:34px; margin:0; padding:0;}.admBoxappMod27Box2 {display:block; width:280px; height:auto; margin:0 auto; padding:0; overflow:hidden;}.admBoxappMod27Box2ItemLarge {display:block; width:100%; height:106px; overflow:hidden; margin:5px 0 0 0; padding:0; text-decoration:none;}.admBoxappMod27Box2ItemLargeImg {display:block; float:left; width:100px; height:100px;}.admBoxappMod27Box2ItemLargeCtn {display:block; float:left; width:170px; height:100%; margin-left:10px;}.admBoxappMod27Box2ItemLargeTitle {display:block; margin-bottom:5px; font:bold 12px/15px Tahoma; color:#D2232E;}.admBoxappMod27Box2ItemLargeSapo {display:block; color:#000; font:normal 13px/17px Tahoma;}.admBoxappMod27Box2Item {display:block; height:25px; margin:0 0 0 10px; padding:0; overflow:hidden; font:bold 11px/20px Tahoma; color:#D2232E; text-decoration:none; white-space:nowrap;}.admBoxappMod27Box2Landing {display:block; color:#D2232E; font:bold 11px/16px Tahoma; text-decoration:none;}",
            "admBoxappMod27");
        admBoxappLib.util.addStyle("." + a + "Box1ItemLargeTitle,." + a + "Box1Item,." + a + "Box1Landing {color:" + b[0] + " !important;}." + a + "Box2ItemLargeTitle,." + a + "Box2Item,." + a + "Box2Landing {color:" + b[1] + " !important;}", a);
        b = [e.items[0], e.items[1], e.items[2], e.items[3]];
        d = [e.items[4], e.items[5], e.items[6], e.items[7]];
        admBoxappLib.util.shuffle(b);
        admBoxappLib.util.shuffle(d);
        var c = b[0].click.match(/.*:\/\/(.[^/]+)/) || ["", ""], g = d[0].click.match(/.*:\/\/(.[^/]+)/) || ["", ""], b = '<div class="admBoxappMod27 ' +
            a + '" id="' + a + '"><div class="admBoxappMod27Space1 ' + a + 'Space1"></div><div class="admBoxappMod27Box1 ' + a + 'Box1"><a class="admBoxappMod27Box1ItemLarge ' + a + 'Box1ItemLarge" key="' + b[0].key + '" href="' + b[0].click + '" target="_blank"><img class="admBoxappMod27Box1ItemLargeImg ' + a + 'Box1ItemLargeImg" src="' + b[0].image + '" /><div class="admBoxappMod27Box1ItemLargeCtn ' + a + 'Box1ItemLargeCtn"><div class="admBoxappMod27Box1ItemLargeTitle ' + a + 'Box1ItemLargeTitle">' + b[0].title + '</div><div class="admBoxappMod27Box1ItemLargeSapo ' +
            a + 'Box1ItemLargeSapo">' + b[0].desc + '</div></div><div style="clear:both;"></div></a><a class="admBoxappMod27Box1ItemLarge ' + a + 'Box1ItemLarge" key="' + b[1].key + '" href="' + b[1].click + '" target="_blank"><img class="admBoxappMod27Box1ItemLargeImg ' + a + 'Box1ItemLargeImg" src="' + b[1].image + '" /><div class="admBoxappMod27Box1ItemLargeCtn ' + a + 'Box1ItemLargeCtn"><div class="admBoxappMod27Box1ItemLargeTitle ' + a + 'Box1ItemLargeTitle">' + b[1].title + '</div><div class="admBoxappMod27Box1ItemLargeSapo ' + a + 'Box1ItemLargeSapo">' +
            b[1].desc + '</div></div><div style="clear:both;"></div></a><a class="admBoxappMod27Box1Item ' + a + 'Box1Item" key="' + b[2].key + '" href="' + b[2].click + '" target="_blank">' + b[2].title + '</a><a class="admBoxappMod27Box1Item ' + a + 'Box1Item" key="' + b[3].key + '" href="' + b[3].click + '" target="_blank">' + b[3].title + '</a><a class="admBoxappMod27Box1Landing ' + a + 'Box1Landing" key="-1" href="' + c[0] + '" target="_blank">' + c[1] + '</a></div><div class="admBoxappMod27Space2 ' + a + 'Space2"></div><div class="admBoxappMod27Box2 ' +
            a + 'Box2"><a class="admBoxappMod27Box2ItemLarge ' + a + 'Box2ItemLarge" key="' + d[0].key + '" href="' + d[0].click + '" target="_blank"><img class="admBoxappMod27Box2ItemLargeImg ' + a + 'Box2ItemLargeImg" src="' + d[0].image + '" /><div class="admBoxappMod27Box2ItemLargeCtn ' + a + 'Box2ItemLargeCtn"><div class="admBoxappMod27Box2ItemLargeTitle ' + a + 'Box2ItemLargeTitle">' + d[0].title + '</div><div class="admBoxappMod27Box2ItemLargeSapo ' + a + 'Box2ItemLargeSapo">' + d[0].desc + '</div></div><div style="clear:both;"></div></a><a class="admBoxappMod27Box2Item ' +
            a + 'Box2Item" key="' + d[1].key + '" href="' + d[1].click + '" target="_blank">' + d[1].title + '</a><a class="admBoxappMod27Box2Item ' + a + 'Box2Item" key="' + d[2].key + '" href="' + d[2].click + '" target="_blank">' + d[2].title + '</a><a class="admBoxappMod27Box2Item ' + a + 'Box2Item" key="' + d[3].key + '" href="' + d[3].click + '" target="_blank">' + d[3].title + '</a><a class="admBoxappMod27Box2Landing ' + a + 'Box2Landing" key="-1" href="' + g[0] + '" target="_blank">' + g[1] + "</a></div></div>", d = f.getElementById(r);
        d.innerHTML = b;
        f = function () {
            var a =
                this.getAttribute("key");
            h.onUserAction(a)
        };
        d = d.getElementsByTagName("a");
        for (b = 0; b < d.length; ++b)d[b].getAttribute("key") && (d[b].onmousedown = f)
    })()
}
function AdmBoxappModule28(e, r, h) {
    var a, f, b = function (b) {
        var c = h.getZone().getWindow().document.getElementById(f), e = c.children[1], k = c.children[2], c = admBoxappLib.effect.pagination.getCurrentPage(e);
        switch (b) {
            case "prev":
                admBoxappLib.effect.pagination.prev(e, {effect: "slide", direction: "lr"});
                break;
            case "next":
                admBoxappLib.effect.pagination.next(e, {effect: "slide", direction: "rl"});
                break;
            default:
                admBoxappLib.effect.pagination.go(e, b, {effect: "slide"})
        }
        b = admBoxappLib.effect.pagination.getCurrentPage(e);
        e =
            k.children;
        e[c + 1].className = a + "Page " + f + "Page";
        e[b + 1].className = a + "PageSelected " + f + "PageSelected"
    };
    a = "admBoxappMod28";
    f = h.getPrefix() + "Mod";
    (function () {
        var d = h.getZone().getWindow().document, c = e.items;
        e.click = h.appendUTM(e.click);
        for (var g = 0; g < c.length; ++g)c[g].click = h.appendUTM(c[g].click);
        admBoxappLib.util.shuffle(c);
        var k = e.color.split("/"), g = k[0], k = k[1];
        admBoxappLib.util.addStyle("." + a + "{display:block; position:relative; width:100%; height:600px;}." + a + "Link {display:block; height:75px; width:100%; margin:0; padding:0;}." +
            a + "LinkFt {display:block; height:18px; width:100%; margin:0; padding:0;}." + a + "Ctn {display:block; height:506px; width:290px; overflow:hidden; margin:0 auto; padding:0;}." + a + "SlidePage {display:block; width:100%; height:100%;}." + a + "Product {display:block; position:relative; height:168px; width:100%; margin:0px; padding:0; border-bottom:1px dotted #D5D5D5; text-decoration:none;}." + a + "ProductImage {display:block; position:absolute; top:9px; left:3px; height:150px; width:150px;}." + a + "ProductText {position:absolute; top:9px; left:160px; width:130px; height:150px;}." +
            a + "ProductTitle {display:block; font:bold 12px/16px tahoma; color:#333; margin:0; padding:0;}." + a + "ProductDesc {display:block; font:normal 11px/16px tahoma; color:#666; margin:3px 0 0 0; padding:0;}." + a + 'ProductPrice {color:#333; font:bold 12px/16px "Times New Roman"; font-style:italic; display:block; float:left; margin:0; padding:0; }.' + a + "ProductPrice label {color:#f00; }." + a + "ProductBuy,." + a + 'ProductBuy:hover {display:block; float:left; background: url("data:image/gif;base64,R0lGODlhKwATANUAAAAAAP///8DT5ABdrABdqgBcqABbpgBapABZoQBXnwBWnABTlgBSlANfqwZfqAtkrzyCvjyBuwBVmQBRkQBQjgBOjABNiQBMhwBLhQBKgwBKgQNMhAZQiglQhTx1oDx0ncDP2/Pz8////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACIALAAAAAArABMAAAbDwJAA8hgYj8ikcrl8QATCBmFKrVqv2Cy1IYgUvuCweEwuiyMOg3rNbrvf8LbjQK/b7/i8Po/o+/+AgYKDggmGh4iJiouMiwqPkJGSk5SVlBKYmZqbnJ2enQuhoqOkpaanpgyqq6ytrq+wrxOztLW2t7i5uBS8vb6/wMHCwRXFxsfIycrLyhbOz9DR0tPU0xwX2Nna29zd3tscHhjj5OXm5+jp5h4gGxnv8PHy8/T18BsgISAfHRr+/wADChw4sMOHfEEAADs=") no-repeat scroll left top #005191; color:#FFF !important; font-family:Tahoma,Geneva,sans-serif; font-size:13px; height:19px; line-height:19px; overflow:hidden; text-align:center !important; text-decoration:none !important; text-transform:uppercase; width:43px;}.' +
            a + 'ProductPlus {display:block; float:left; margin:0 0 0 5px; padding:0 0 0 8px; background:url("data:image/gif;base64,R0lGODlhCQATAMQAAAAAAP////Pz8+/v7+jo6Ofn5+bm5sXFxcHBwb6+vr29vby8vLu7u7q6urm5ubi4uLe3t7a2trW1tbS0tLOzs7KysrGxsbCwsK+vr66urq2trf///wAAAAAAAAAAAAAAACH5BAEAABsALAAAAAAJABMAAAVMoCASB2MyooA0LJs6cPzGcPrceArtvDhEwKCgoJAYjwXHcbmYOJ/OAoNCrVIEg0Rly/VxuyKLeJy6mM8pjHqdyrjfqcjbnTI0NHhNCAA7") left center no-repeat; color:#FFF !important; text-decoration:none !important; height:19px; overflow:hidden; font:normal 13px/19px Tahoma; }.' +
            a + 'ProductPlus span {display:block; margin:0; padding:0 8px 0 0; background: #b1b1b1 url("data:image/gif;base64,R0lGODlhyAATAMQAAAAAAP///+jo6Obm5sXFxcHBwbu7u7q6urm5ubi4uLe3t7a2trW1tbS0tLOzs7KysrGxsbCwsK+vr66urq2trf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABUALAAAAADIABMAAAX/oCGOZGmeaKqubOu+cCzPKCEceK7vfO//wKBwSCwaj8jkr4BoOp/QqHRKrVqv2Kx2y+16v+CweEwum8OJtHrNbrvf8Lh8Tq/b7/i8Pq7o+/+AgYKDhIWGh4iJiouMjY6FC5GSk5SVlpeYmZqbnJ2en6ChopkMpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb65DcHCw8TFxsfIycrLzM3Oz9DR0skO1dbX2Nna29zd3t/g4eLj5OXm3Q/p6uvs7e7v8PHy8/T19vf4+fr7/P3+/wADCuwHoaDBgwgTKlzIsKHDhxAjSpxIsaLFhhEyatzIsaPHjyBDihxJsqTJkyhTVKoMKaGly5cwY8qcSbOmzZs4c+rcybOnz5oTggodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2qluoCC169gw4odS7as2bNo06pdy7at27dkDwwIAQA7") right center;}.' +
            a + "Pagination {display:none; position:absolute; bottom:0; right:0; height:18px; margin:0; padding:0 0 0 10px;}." + a + "Page,." + a + "PageSelected,." + a + "PagePrev,." + a + 'PageNext {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAcBAMAAABfbbi4AAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMAgDBcuGB7fPj164H1QwAAAFFJREFUeF5lyyEOgEAQQ9EPCZ5RWBwWEKsxCFBIJNwIzQlIT0kyI1ase/lNqdMMg3U9k9nIbXa5vMXabCuc+g52aeGVHpe3WKkA2oxQZtnKxw+p3g9nKaVHZgAAAABJRU5ErkJggg=="); background-repeat:no-repeat; display:block; height:7px; float:left; text-decoration:none; margin:5px 3px 0 0; cursor:pointer;}.' +
            a + "PagePrev,." + a + "PagePrev:hover {background-position: 0 -14px; width:5px;}." + a + "PageNext,." + a + "PageNext:hover{ background-position:0 -21px; width:5px; }." + a + "Page, ." + a + "Page:hover {background-position:0 0px; width:7px;}." + a + "PageSelected {background-position:0 -7px; width:7px; cursor:default;}", a);
        admBoxappLib.util.addStyle("." + f + "ProductTitle {color:" + g + ";}." + f + "ProductDesc {color:" + k + ";}", f);
        for (var t = Math.ceil(c.length / 3), m = '<div class="' + a + " " + f + '" id="' + f + '"><a class="' + a + "Link " + f + 'Link" key="-1" href="' +
            e.click + '" target="_blank"></a><div class="' + a + "Ctn " + f + 'Ctn" id="' + f + 'Ctn">', l = 0; l < t; ++l) {
            m += '<div class="' + a + "SlidePage " + f + 'SlidePage">';
            g = 3 * l;
            for (k = 3 * l + 3; g < k && g < c.length; ++g)m += '<a class="' + a + "Product " + f + 'Product" href="' + c[g].click + '" target="_blank" key="' + c[g].key + '"><img class="' + a + "ProductImage " + f + 'ProductImage" src="' + c[g].image + '" /><div class="' + a + "ProductText " + f + 'ProductText"><span class="' + a + "ProductTitle " + f + 'ProductTitle" href="' + c[g].click + '" target="_blank">' + c[g].title + '</span><p class="' +
                a + "ProductDesc " + f + 'ProductDesc">' + c[g].desc + '</p><div style="display:block; margin:5px 0 0 0; padding:0;">' + (c[g].price ? '<span class="' + a + "ProductPrice " + f + 'ProductPrice">Gi\u00e1: <label>' + c[g].price + "</label></span>" : "") + (c[g].plus ? '<div style="float:right;"><span class="' + a + "ProductBuy " + f + 'ProductBuy" href="' + c[g].click + '" target="_blank">Mua</span><span class="' + a + "ProductPlus " + f + 'ProductPlus"><span>' + c[g].plus + "</span></span></div>" : "") + '<div style="clear:both;"></div></div></div></a>';
            m +=
                "</div>"
        }
        m += '</div><div class="' + a + "Pagination " + f + 'Pagination"><div class="' + a + "PagePrev " + f + 'PagePrev"></div>';
        for (g = 0; g < t; ++g)m += '<div class="' + a + "Page " + f + 'Page"></div>';
        m += '<div class="' + a + "PageNext " + f + 'PageNext"></div></div><a class="' + a + "LinkFt " + f + 'LinkFt" key="-1" href="' + e.click + '" target="_blank"></a></div>';
        d = d.getElementById(r);
        d.innerHTML = m;
        if (1 < t) {
            admBoxappLib.effect.pagination.create(d.children[0].children[1], 290, 506, {effect: "slide"});
            g = d.children[0].children[2];
            g.style.display = "block";
            c = g.children;
            c[1].className = a + "PageSelected " + f + "PageSelected";
            c[0].onclick = function () {
                b("prev");
                return !1
            };
            g = 1;
            for (k = c.length - 1; g < k; ++g)(function (a, c) {
                a.onclick = function () {
                    b(c - 1);
                    return !1
                }
            })(c[g], g);
            c[c.length - 1].onclick = function () {
                b("next");
                return !1
            };
            g = setInterval(function () {
                b("next")
            }, 7E3);
            d.children[0].setAttribute("autoplay", g)
        }
        c = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        d = d.getElementsByTagName("a");
        for (g = 0; g < d.length; ++g)d[g].getAttribute("key") && (d[g].onmousedown = c)
    })()
}
function AdmBoxappModule40(e, r, h) {
    var a, f = function () {
        var b = h.getZone().getWindow().document.getElementById(a);
        b.getAttribute("key");
        var d = b.getAttribute("popupSize").split("x"), c = parseInt(d[0]), d = parseInt(d[1]), e = b.getAttribute("popupContent"), b = b.getAttribute("popupSkin") || null;
        h.openPopup(e, c, d, {minWidth: 300, minHeight: 600, skin: b})
    };
    a = h.getPrefix() + "Mod";
    (function () {
        var b = h.getZone().getWindow().document, d = e.items[0], c = d.title.split(";") || [], g = (c[0] || "300x600").split("x"), k = (c[1] || "0x0").trim(),
            t = "2B60DE 3BB9FF 4CC417 7d7d7d 8D38C9 da1b22 FF00FF ff8800 ffff00".split(" ")[d.skin] || null, m = d.e_embed || "";
        admBoxappLib.util.addStyle(".admBoxappMod40{display:block; position:relative; width:100%; height:" + g[1] + "px;}.admBoxappMod40Iframe {display:block; width:100%; height:100%; border:0px;}", "admBoxappMod40");
        g = d.iframe;
        c = g.substr(0, 10);
        d = '<div class="admBoxappMod40 ' + a + '" id="' + a + '" key="' + d.key + '" popupSize="' + k + '" popupContent="' + admBoxappLib.util.htmlSpecialChars(m) + '" popupSkin="' + (t || "") + '">';
        d = "iframe::::" == c ? d + ('<iframe class="admBoxappMod40Iframe ' + a + 'Iframe"></iframe>') : d + g;
        d += "</div>";
        b = b.getElementById(r);
        b.innerHTML = d;
        "iframe::::" == c && (d = g.substr(10), b = b.children[0].children[0].contentDocument, b.open(), b.write('<html><head><style>body {margin:0; padding:0; overflow:hidden; display:block; width:100%; height:100%;}</style><script type="text/javascript">appzone = boxapp' + h.getId() + " = parent.boxapp" + h.getId() + ";\x3c/script></head><body>" + d + "</body></html>"), b.close());
        h.exportAPI("openPopup",
            f);
        h.exportAPI("closePopup", h.closePopup)
    })()
}
function AdmBoxappAddon50(e, r, h) {
    var a;
    a = h.getPrefix() + "Addon50";
    h = h.getZone().getWindow().document;
    e = e[0];
    admBoxappLib.util.addStyle(".admBoxappAddon50{display:block; width:100%; height:100%;}", "admBoxappAddon50");
    a = '<div class="admBoxappAddon50 ' + a + '">' + e.iframe + "</div>";
    h.getElementById(r).innerHTML = a
}
function AdmBoxappAddon51(e, r, h) {
    var a;
    a = h.getPrefix() + "Addon51";
    (function () {
        for (var f = h.getZone().getWindow().document, b = 0; b < e.length; ++b)e[b].click = h.appendUTM(e[b].click);
        admBoxappLib.util.shuffle(e);
        var d = Math.ceil(e.length / 3);
        admBoxappLib.util.addStyle(".admBoxappAddon51{display:block; position:relative; width:100%; height:100%;}.admBoxappAddon51Nav {display:block; position:absolute; top:0; left:10px; width:280px; height:40px; }.admBoxappAddon51NavPrev{ display:block; position:absolute; top:10px; right:25px; width:20px; height:20px; cursor:pointer; }.admBoxappAddon51NavNext{ display:block; position:absolute; top:10px; right:0px; width:20px; height:20px; cursor:pointer; }.admBoxappAddon51Ctn{ display:block; position:absolute; top:45px; left:10px; width:280px; height:200px; }.admBoxappAddon51CtnSlidePage{ display:none; }.admBoxappAddon51Product{ display:block; position:relative; position:relative; width:100%; height:60px; overflow:hidden; margin-bottom:10px; }.admBoxappAddon51ProductImage{ position:absolute; top:0; left:0; width:60px; height:60px; }.admBoxappAddon51ProductInfo{ position:absolute; top:0; left:67px; right:0px; height:100%; }.admBoxappAddon51ProductTitle{ font:bold 12px/15px arial; color:#000;}.admBoxappAddon51ProductDesc{ font:normal 12px/15px arial; color:#333;}.admBoxappAddon51Link{ display:block; position:absolute; bottom:10px; left:10px; width:280px; height:25px; }",
            "admBoxappAddon51");
        admBoxappLib.util.addStyle("." + a + "Nav {" + (1 >= d ? "display:none;" : "") + "}", a);
        for (var c = '<div class="admBoxappAddon51 ' + a + '" id="' + a + '"><div class="admBoxappAddon51Nav ' + a + 'Nav"><div class="admBoxappAddon51NavPrev ' + a + 'NavPrev"></div><div class="admBoxappAddon51NavNext ' + a + 'NavNext"></div></div><div class="admBoxappAddon51Ctn ' + a + 'Ctn">', g = 0; g < d; ++g) {
            for (var c = c + ('<div class="admBoxappAddon51CtnSlidePage ' + a + 'CtnSlidePage">'), b = 3 * g, k = 3 * g + 3; b < k && b < e.length; ++b)c += '<a class="admBoxappAddon51Product ' +
                a + 'Product" key="' + e[b].key + '" href="' + e[b].click + '" target="_blank"><img class="admBoxappAddon51ProductImage ' + a + 'ProductImage" src="' + e[b].image + '" /><div class="admBoxappAddon51ProductInfo ' + a + 'ProductInfo"><div class="admBoxappAddon51ProductTitle ' + a + 'ProductTitle">' + (e[b].title || "") + '</div><div class="admBoxappAddon51ProductDesc ' + a + 'ProductDesc">' + (e[b].desc || "") + "</div></div></a>";
            c += "</div>"
        }
        c += "</div></div></div>";
        b = f.getElementById(r);
        b.innerHTML = c;
        1 < d ? (d = b.children[0].children[1], admBoxappLib.effect.pagination.create(d,
            280, 280, {effect: "slide"}), c = b.children[0].children[0].children[1], b.children[0].children[0].children[0].onclick = function () {
            var b = f.getElementById(a).children[1];
            admBoxappLib.effect.pagination.prev(b, {direction: "lr"})
        }, c.onclick = function () {
            var b = f.getElementById(a).children[1];
            admBoxappLib.effect.pagination.next(b, {direction: "rl"})
        }, c = setInterval(function () {
            var b = f.getElementById(a).children[1];
            admBoxappLib.effect.pagination.prev(b, {direction: "rl"})
        }, 7E3), d.setAttribute("autoplay", c)) : (d = b.children[0].children[1],
            d.children[0].style.display = "block");
        d = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        c = b.getElementsByTagName("a");
        for (b = 0; b < c.length; ++b)c[b].getAttribute("key") && (c[b].onmousedown = d)
    })()
}
function AdmBoxappAddon52(e, r, h) {
    var a;
    a = h.getPrefix() + "Addon52";
    (function () {
        for (var f = h.getZone().getWindow().document, b = 0; b < e.length; ++b)e[b].click = h.appendUTM(e[b].click);
        admBoxappLib.util.shuffle(e);
        admBoxappLib.util.addStyle('.admBoxappAddon52{display:block; position:relative; width:100%; height:100%;}.admBoxappAddon52Nav {display:block; position:absolute; top:235px; left:10px; width:280px; height:20px; z-index:10; }.admBoxappAddon52NavPrev {display:block; position:absolute; top:0px; left:118px; width:20px; height:20px; cursor:pointer; background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wYKBCYsOU5WhQAAAIRJREFUOMvtlL0KwCAMhC+l+MTqZBTEwbdOp0It9YfWLqUH2Y6PkEtCAAQTtWCyPgZkZqSUuj4ZKWaWXTnnlrcP897LUdba+8AzzBjTa2AqrA4MIRQwrfXQrKspE1GZnIwflEzusm04Qx+F8sraXEFbi72ODjrGCABQSsE5V/XR/w8fawOLTyNNqpNrtQAAAABJRU5ErkJggg==") center no-repeat;}.admBoxappAddon52NavNext {display:block; position:absolute; top:0px; left:142px; width:20px; height:20px; cursor:pointer; background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wYKBCcYAeGTcQAAAItJREFUOMvtlMEKxCAMRMeln6ziJQriwW8WYfZUsLBtzbbsoexAToZH4owaAMSNeuFmPQBYSoGIqKDcq1orV4kIj3qH2j/03nNUjPEaEACdc1ro+RpK6NS90Fq7gaaUPvZNx4bcPihjjN5l7XRfmXIC+3FsxmBPwrgcGRFCQO8drTXknKfMM///8LLeNdIpEV09oIUAAAAASUVORK5CYII=") center no-repeat;}.admBoxappAddon52Ctn {display:block; position:absolute; top:0px; left:10px; width:280px; height:255px; }.admBoxappAddon52Product {display:none; width:100%; height:100%; overflow:hidden; }.admBoxappAddon52ProductImage{ display:block; width:100%; height:100%; }', "admBoxappAddon52");
        for (var d = '<div class="admBoxappAddon52 ' + a + '" id="' + a + '"><div class="admBoxappAddon52Ctn ' + a + 'Ctn">', b = 0; b < e.length; ++b)d += '<a class="admBoxappAddon52Product ' + a + 'Product" key="' + e[b].key + '" href="' + e[b].click + '" target="_blank"><img class="admBoxappAddon52ProductImage ' + a + 'ProductImage" src="' + e[b].image + '" /></a>';
        d += '</div><div class="admBoxappAddon52Nav ' + a + 'Nav"><div class="admBoxappAddon52NavPrev ' + a + 'NavPrev"></div><div class="admBoxappAddon52NavNext ' + a + 'NavNext"></div></div></div>';
        b = f.getElementById(r);
        b.innerHTML = d;
        d = b.children[0].children[0];
        admBoxappLib.effect.pagination.create(d, 280, 280, {effect: "slide"});
        var c = b.children[0].children[1].children[1];
        b.children[0].children[1].children[0].onclick = function () {
            var b = f.getElementById(a).children[0];
            admBoxappLib.effect.pagination.prev(b, {direction: "lr"})
        };
        c.onclick = function () {
            var b = f.getElementById(a).children[0];
            admBoxappLib.effect.pagination.next(b, {direction: "rl"})
        };
        c = setInterval(function () {
            var b = f.getElementById(a).children[0];
            admBoxappLib.effect.pagination.prev(b,
                {direction: "rl"})
        }, 7E3);
        d.setAttribute("autoplay", c);
        d = function () {
            var a = this.getAttribute("key");
            h.onUserAction(a)
        };
        c = b.getElementsByTagName("a");
        for (b = 0; b < c.length; ++b)c[b].getAttribute("key") && (c[b].onmousedown = d)
    })()
};