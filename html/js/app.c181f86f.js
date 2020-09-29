(function(t) {
    function e(e) {
        for (var a, r, s = e[0], c = e[1], u = e[2], l = 0, d = []; l < s.length; l++) r = s[l],
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]),
        i[r] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        p && p(e);
        while (d.length) d.shift()();
        return o.push.apply(o, u || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], a = !0, r = 1; r < n.length; r++) {
                var s = n[r];
                0 !== i[s] && (a = !1)
            }
            a && (o.splice(e--, 1), t = c(c.s = n[0]))
        }
        return t
    }
    var a = {},
    r = {
        app: 0
    },
    i = {
        app: 0
    },
    o = [];
    function s(t) {
        return c.p + "js/" + ({} [t] || t) + "." + {
            "chunk-15443bef": "44eb7724",
            "chunk-17907b12": "dbf8ac0a",
            "chunk-1e508f45": "8368e612",
            "chunk-2d0b1fd8": "293fcba5",
            "chunk-2d207ecb": "a774a6b0",
            "chunk-3faf0d6f": "0c604913",
            "chunk-86bbcc0a": "6ae19413",
            "chunk-ebd8d1ea": "998e3c2d",
            "chunk-350f7b12": "129628f6",
            "chunk-3790e25e": "cc4b7ce9",
            "chunk-3a017ba2": "b651b484",
            "chunk-40bcd0de": "4fb3cc2a",
            "chunk-6bc2fd7e": "06095e61",
            "chunk-6e633168": "c973c517",
            "chunk-812a165c": "fd5ba8d0",
            "chunk-81504130": "bd7f6db2"
        } [t] + ".js"
    }
    function c(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, c),
        n.l = !0,
        n.exports
    }
    c.e = function(t) {
        var e = [],
        n = {
            "chunk-15443bef": 1,
            "chunk-17907b12": 1,
            "chunk-1e508f45": 1,
            "chunk-3faf0d6f": 1,
            "chunk-86bbcc0a": 1,
            "chunk-ebd8d1ea": 1,
            "chunk-350f7b12": 1,
            "chunk-3790e25e": 1,
            "chunk-3a017ba2": 1,
            "chunk-40bcd0de": 1,
            "chunk-6bc2fd7e": 1,
            "chunk-6e633168": 1,
            "chunk-812a165c": 1,
            "chunk-81504130": 1
        };
        r[t] ? e.push(r[t]) : 0 !== r[t] && n[t] && e.push(r[t] = new Promise((function(e, n) {
            for (var a = "css/" + ({} [t] || t) + "." + {
                "chunk-15443bef": "30dfa412",
                "chunk-17907b12": "a0e03105",
                "chunk-1e508f45": "79001659",
                "chunk-2d0b1fd8": "31d6cfe0",
                "chunk-2d207ecb": "31d6cfe0",
                "chunk-3faf0d6f": "f616fa96",
                "chunk-86bbcc0a": "56bacae4",
                "chunk-ebd8d1ea": "d77a1d02",
                "chunk-350f7b12": "50b61ea3",
                "chunk-3790e25e": "0d900d84",
                "chunk-3a017ba2": "49f9cc7f",
                "chunk-40bcd0de": "592fb117",
                "chunk-6bc2fd7e": "26da2421",
                "chunk-6e633168": "1497f976",
                "chunk-812a165c": "48406acb",
                "chunk-81504130": "6ff72645"
            } [t] + ".css", i = c.p + a, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var u = o[s],
                l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === a || l === i)) return e()
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
                u = d[s],
                l = u.getAttribute("data-href");
                if (l === a || l === i) return e()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet",
            p.type = "text/css",
            p.onload = e,
            p.onerror = function(e) {
                var a = e && e.target && e.target.src || i,
                o = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = a,
                delete r[t],
                p.parentNode.removeChild(p),
                n(o)
            },
            p.href = i;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p)
        })).then((function() {
            r[t] = 0
        })));
        var a = i[t];
        if (0 !== a) if (a) e.push(a[2]);
        else {
            var o = new Promise((function(e, n) {
                a = i[t] = [e, n]
            }));
            e.push(a[2] = o);
            var u, l = document.createElement("script");
            l.charset = "utf-8",
            l.timeout = 120,
            c.nc && l.setAttribute("nonce", c.nc),
            l.src = s(t);
            var d = new Error;
            u = function(e) {
                l.onerror = l.onload = null,
                clearTimeout(p);
                var n = i[t];
                if (0 !== n) {
                    if (n) {
                        var a = e && ("load" === e.type ? "missing": e.type),
                        r = e && e.target && e.target.src;
                        d.message = "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")",
                        d.name = "ChunkLoadError",
                        d.type = a,
                        d.request = r,
                        n[1](d)
                    }
                    i[t] = void 0
                }
            };
            var p = setTimeout((function() {
                u({
                    type: "timeout",
                    target: l
                })
            }), 12e4);
            l.onerror = l.onload = u,
            document.head.appendChild(l)
        }
        return Promise.all(e)
    },
    c.m = t,
    c.c = a,
    c.d = function(t, e, n) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    },
    c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    c.t = function(t, e) {
        if (1 & e && (t = c(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var a in t) c.d(n, a,
        function(e) {
            return t[e]
        }.bind(null, a));
        return n
    },
    c.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t["default"]
        }: function() {
            return t
        };
        return c.d(e, "a", e),
        e
    },
    c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    c.p = "",
    c.oe = function(t) {
        throw console.error(t),
        t
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = u.push.bind(u);
    u.push = e,
    u = u.slice();
    for (var d = 0; d < u.length; d++) e(u[d]);
    var p = l;
    o.push([0, "chunk-vendors"]),
    n()
})({
    0 : function(t, e, n) {
        t.exports = n("56d7")
    },
    "058a": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAJyklEQVR4Xu2dj9HWNgzGrQlaJihMUJigdILCBMAEpRMUJiidoDABMEFhgsIEhQlKJ1DvocpdMLbjxH8kJ87dewf3JU5s/SxLsi2Tm9elW4AuXftZeTcBuDgEE4AJwMVb4OLVnxpgAnDxFrh49acGmABcvAUuXv2pASYAF2+Bi1d/aoAJwPlbgJm/dc5975y7KT9U+q5X83fOuU/yw7/fExH+f+rrtBqAmX8SIUPQtw9K8YNz7o38Xp8RiFMBwMwQ9gPn3D3nHHp97eu5c+4VEb2uXbBWeacAgJkh9IcBtd6qXaEZnhDRi1Yv6FXu0ABIj/+tQMWXtjNA+IWIXpUWpPX8kACIUfeHqPq9bffROQfBLRcMvWW4gJH43d4CxUZ4RETrcg8U0/+R4QCQXv8yc4z/d2XEvSEiWPebFzPDaIQ9sfy+2Xzofw8C2gB2wjDXUAAwM9T944zWfeucWwy2YleOmWFUwsaAZ7F14b0Aofi9Wy+q8fchABCVD+FDCKkLRhmMsyaqmJkxRDwRTyP1HdA0P44AgXkARPh/bhh66PEQPHz25peAgJ7+Q+JlQ0BgGoBM4UPdPmsu9cALmBkaCe+O2QjmIbAOACz9mNqHNX8v17BrBYhoA7iBCDWHLtMQmAWAmdGzfo406ntY6FbGWNFUgCA2JCB6eL8VhCXlmgRArG64eqHLlPDXH8jMsAsQlQxdakNVChBzAIhK/Svi55sV/tLIzAxNEHMX72gPWT4MFgFAz4ff7V8Y829bUfuxXiXDAbyRkE3wjojulKjs2s+aAmBD9ZvrPQkIEC+A8RfyDkwNBdYA+Hu1YGPdvqYaLacXJmBGhPCWFU1mBgDxqeH2+RdW5hxd0JEjq2b3JOyBp0SEiKL6ZQmAWO8fRvX70hSDFvXyLzNawAQACXX5loj8tXvqvWbPByRcQ0wfq88cWgEg5j9jQqVLfH+PUPfcm9ACJjwCdQDEbfrnTGN/YCiIAQ5jsMnMZS6kFgCAzx+K+plQkbkNmbovMcSpezcWAIjF/G9YcZUqQQDDz48LYKl5KOhV45VZZVgAAGFf380b3vjLHQaISFUGqi9HIzEzB1A14ydndaOMmxJxDlU3VxUAWeCJ1T7+Nbz1H9AAcGdDdb2vuaxcG4CYAajaKzI69KFbLGo7bQAQDv3Vb03tcfGQdDMeYma4fP6+A9XhbgKQIbhatzAzglr+qiFVg9ciAB+JCNOpp7smAJ5ImTk0BKj2iJbUTQDyAPhERDdaCkKr7AlAHgDuxEZgyAZQjQZq2wBY8//VIpATA4BJLz9xxaW9gFhw5IyBIAg+NOt5aQBg7YdWzKhGx1rYCFajnqpDgMwFhGbJXhDR1k7gFnJqVmbE48H7VNcEWAAgtJHiAxHdaiYNhYIjHoB6zMMCAMFwsHbPqMlIYtWTuqazAADWAmBNgH+pGkeVAQh6O8459VVP6gCIHRCaJDnNMMDMoUUvqLr6qicrACDvD1LA+Jd6DynVBAnrX139o25WAIi5g8NrAWbGIpDQ3gYTrq4JAGQYiG2rHlYLJHq/uvW/aDZLAMSMQTPbqPYOB8wc2+5mBmozAIgWiG2gMJtiJQZFIsWNmd5vxgZYGlG2UQ2xrz6lDTbyHJia5zClAUQLxAJD+LOpxgtBIGlmYfiF0tWbsPzX320OAIEgNG+OP8EeAARZOX/3jtml92/kN0Le4pvWdjtZBQC9B8GhUIoVkxBIz8fahlgyC5NL3U0CIFogtlZg0QTwo01sHd9Q+/he9U2gMe1mFgCBIBZDX+qD/MBPS1V3yfPMjGSWsFtiR9SYG/fN2wDrD0zsqVtugxboflhD5qEVpoVvzg1M+NRbmgCPohf+3sPIyuj1+B7zwh8GgNVwkMrMvdgGuKc6CNLjkQEUoG1tXBlmKtu0DeBrBDG2EC2MZeZeP/L5xBDnHDaaHD69Q84fxCbWnKPo4Oo91Nztu9eeGQoA0QQwtiDcnONb1nYCbIXPp4MSEQ6Y+OoSwLB5E64cfnuydyCPMdLXq+b8OT0ASwVlpg0gHDnla287pe5Hr4c3onJoRWlFhtMAgWEBi0kwLuec7FXaXv7zOKPocckQU/uD9pY3NAASesVQAC+hVzpZ9Hj09uejqfsQHMMBsLLGF8NsL/RH78d5wZiWVs/uebQCQwMggkfUDSq/xcHQ6/ZBL4fBiN/n08NHVvMpYMxrgEqCX46LhYXuW+lwEdezi0jhethtrNk7e5RlFoACwS/HxSIGgEWlJiaMegjzyDtMAiAuHqZWtyJuS53Rw2GYZZ8PfKSxzviMKQCk1yNrWM75wOjp6OXPrC4QGQEYMwDs6PWLGwbBX2asbgWTCQBkdm0rkgbBI+hyKjeslWBzy1UHgJlTx8Mu9fhdwq2zx+dKNvM+NQAyF1RgggWzayYXgWa2senbVADIPBUcc/o5xqDpBk59nOwfQCgbsYnqaxhyGqY7ABnCx1iPadVT++/M7O+IVlnt3BWADOGbPxs4p1fl3BPJGdAdgm4ATOF/iQUzw64JrWzqCkEXADKEP8QCypyenXtPYAhYP9oNguYATOHHkUgcKomHumyL7wFALD8OKnm5nu/jsAEBhgnshWwW/2gKwEaQ5/LCX2DQhKAZAInMmLPnB0aFDQiw/OxRrn2x574mAGwkSDjtgRB7Gj507wYETdLKVAdgY4/8Zfz8ozBsQFB9i3kLAGJp0UwmSDgqqFbPideEKGgoRlA9bV5VABK+LYR/d07q5GGzkSup6r7DagAIuUiLFlqxazZBQp5I+t+VyDGIj6k2FNQEIJbibRp9B/lJpJrD2scfDxb7xWNVAEj0fqj+22fYQVOjsfeWIe2KYFBo/2OVgyZqARBL7VZ1vNrbgGe4P5EhpUogrRYAodOwptVficDImcMovTjdfDEAiaDP7P31AGh24EQNAGLGX5UxqlIbDl8MM4cO1yo+dLIGAKGM2O+JqNd27eGFm1OBRISwaBgoAkACFqFz/6bfnyPVHfckhtqi/MmlAFzm5M8dsmpya+LksaLOVgpA0P0769m/TSS7o9CIHVDkDpYCEDrmxdSBCDva1/ytLY6fLwUglNZ9hn4boRRZZFM0QzgBaCSsFsXGVlmVDLktAJgBoBbSd85ZBIADdZ0AXAiAUHRqAtAOAKTGe+kXrzkEhMLA1RYrNGrHYYuNrBQqMrpLbQCs/kFmjwfOOSRqQs7cmcGjIWJejmQkr0T+hMMbR4oAaFjPWXSnFpgAdGpoq6+ZAFiVTKfvmgB0amirr5kAWJVMp++aAHRqaKuvmQBYlUyn75oAdGpoq6+ZAFiVTKfvmgB0amirr5kAWJVMp++aAHRqaKuv+Q9SWAa9NOkGAwAAAABJRU5ErkJggg=="
    },
    "0828": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return o
        })),
        n.d(e, "a", (function() {
            return s
        })),
        n.d(e, "e", (function() {
            return c
        })),
        n.d(e, "c", (function() {
            return u
        })),
        n.d(e, "d", (function() {
            return l
        }));
        n("5ab2"),
        n("163d"),
        n("f548"),
        n("9e76"),
        n("e10e");
        var a = n("ce3c");
        n("6d57"),
        n("9a33");
        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach((function(e) {
                    Object(a["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        function o(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
            try {
                var n = e.split("?"),
                a = "";
                if (! (n.length > 1)) return t ? void 0 : {};
                a = n[1];
                var r = a.split("&"),
                i = {};
                return r.forEach((function(t) {
                    var e = t.split("=");
                    i[e[0]] = decodeURI(e[1])
                })),
                t ? i[t] : i
            } catch(o) {
                return t ? "": {}
            }
        }
        function s(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            a = o(void 0, e),
            r = e.split("?")[0],
            s = i(i({},
            a), t),
            c = [];
            if (Object.keys(s).forEach((function(t) {
                void 0 !== s[t] && "" !== s[t] && c.push("".concat(t, "=").concat(s[t]))
            })), !n) return "".concat(r, "?").concat(c.join("&"));
            window.location = c.length > 0 ? "".concat(r, "?").concat(c.join("&")) : r
        }
        function c(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
            return t.length > e ? "".concat(t.substr(0, e - 3), "...") : t
        }
        function u(t, e, n) {
            var a = document.createElement("div");
            a.innerHTML = t;
            var r = a.innerHTML.split("\n");
            return r.forEach((function(t) {
                var a = t.match(/\[\d+:\d+.\d+\]/g);
                a && a.forEach((function(r) {
                    var i = r.replace(/\[|\]/g, "").split(":"),
                    o = t.replace(a.join(""), "").replace(/\/\//, "");
                    if (o) {
                        var s = Number(6e4 * i[0]) + 1e3 * Number(i[1]);
                        n[s] = n[s] || {},
                        n[s][e] = o
                    }
                }))
            })),
            n
        }
        var l = function(t) {
            return t > 1e7 ? "".concat(Number(t / 1e6).toFixed(1), "m") : t > 1e3 ? "".concat(Number(t / 1e3).toFixed(1), "k") : t
        }
    },
    "091b": function(t, e, n) {
        "use strict";
        var a = n("496b"),
        r = n.n(a);
        r.a
    },
    1426 : function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        n("9a33"),
        n("47e7"),
        n("cc57"),
        n("f548");
        var a = n("9be7"),
        r = n.n(a),
        i = n("3f0b");
        function o(t, e) {
            var n, a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            l = window,
            d = "application/octet-stream",
            p = s || d,
            f = t,
            m = t,
            g = document.createElement("a"),
            h = function(t) {
                return String(t)
            },
            b = l.Blob || l.MozBlob || l.WebKitBlob || h,
            y = e || "download";
            b = b.call ? b.bind(l) : Blob;
            if ("true" === String(this) && (f = [f, p], p = f[0], f = f[1]), m && m.length < 2048 && (g.href = m, -1 !== g.href.indexOf(m))) {
                var v = new XMLHttpRequest;
                return v.open("GET", m, !0),
                v.responseType = "arraybuffer",
                v.onload = function(t) {
                    if (200 === t.currentTarget.status) {
                        var e = t.target.response;
                        if (("163" !== c.platform || !c.qqId) && c && c.al && c.al.picUrl) try {
                            var n = new XMLHttpRequest;
                            n.open("GET", c.al.picUrl.replace(/http(s|):\/\/y\.gtimg\.cn/, "http://".concat(window.location.host, "/qqImg")).replace("300x300", "500x500"), !0),
                            n.responseType = "arraybuffer",
                            n.onload = function(a) {
                                try {
                                    if (200 === a.currentTarget.status) {
                                        var s = new r.a(t.target.response);
                                        s.setFrame("TIT2", c.name).setFrame("TPE1", c.ar.map((function(t) {
                                            return t.name
                                        }))).setFrame("TALB", c.al.name).setFrame("TRCK", c.trackNo || "").setFrame("APIC", {
                                            type: 3,
                                            data: n.response,
                                            description: c.al.name
                                        }),
                                        c.publishTime && s.setFrame("TYER", Object(i["a"])(c.publishTime).str("YYYY")),
                                        s.addTag(),
                                        e = s.arrayBuffer
                                    }
                                } catch(l) {
                                    console.log("DOWN ERR: ", l)
                                }
                                setTimeout((function() {
                                    u.success && u.success(),
                                    o(e, y, d)
                                }), 10)
                            },
                            n.send()
                        } catch(a) {
                            u.success && u.success(),
                            o(e, y, d)
                        } else u.success && u.success(),
                        o(e, y, d)
                    }
                    u.error && u.error()
                },
                v.addEventListener("progress", (function(t) {
                    if (t.lengthComputable) {
                        var e = t.loaded / t.total;
                        u.progress && u.progress(e, t.loaded, t.total)
                    }
                })),
                setTimeout((function() {
                    v.send()
                }), 0),
                u.init && u.init(v),
                v
            }
            if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(f)) {
                if (! (f.length > 2096103.424 && b !== h)) return navigator.msSaveBlob ? navigator.msSaveBlob(S(f), y) : P(f);
                f = S(f),
                p = f.type || d
            } else if (/([\x80-\xff])/.test(f)) {
                var w = 0,
                O = new Uint8Array(f.length),
                _ = O.length;
                for (w; w < _; ++w) O[w] = f.charCodeAt(w);
                f = new b([O], {
                    type: p
                })
            }
            function S(t) {
                var e = t.split(/[:;,]/),
                n = e[1],
                a = "base64" == e[2] ? atob: decodeURIComponent,
                r = a(e.pop()),
                i = r.length,
                o = 0,
                s = new Uint8Array(i);
                for (o; o < i; ++o) s[o] = r.charCodeAt(o);
                return new b([s], {
                    type: n
                })
            }
            function P(t, e) {
                if ("download" in g) return g.href = t,
                g.setAttribute("download", y),
                g.className = "download-js-link",
                g.innerHTML = "downloading...",
                g.style.display = "none",
                document.body.appendChild(g),
                setTimeout((function() {
                    g.click(),
                    document.body.removeChild(g),
                    !0 === e && setTimeout((function() {
                        l.URL.revokeObjectURL(g.href)
                    }), 250)
                }), 66),
                !0;
                if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) return /^data:/.test(t) && (t = "data:" + t.replace(/^data:([\w\/\-\+]+)/, d)),
                window.open(t) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = t),
                !0;
                var n = document.createElement("iframe");
                document.body.appendChild(n),
                !e && /^data:/.test(t) && (t = "data:" + t.replace(/^data:([\w\/\-\+]+)/, d)),
                n.src = t,
                setTimeout((function() {
                    document.body.removeChild(n)
                }), 333)
            }
            if (n = f instanceof b ? f: new b([f], {
                type: p
            }), navigator.msSaveBlob) return navigator.msSaveBlob(n, y);
            if (l.URL) P(l.URL.createObjectURL(n), !0);
            else {
                if ("string" === typeof n || n.constructor === h) try {
                    return P("data:" + p + ";base64," + l.btoa(n))
                } catch(A) {
                    return P("data:" + p + "," + encodeURIComponent(n))
                }
                a = new FileReader,
                a.onload = function(t) {
                    P(this.result)
                },
                a.readAsDataURL(n)
            }
            return ! 0
        }
    },
    3058 : function(t, e, n) {
        "use strict";
        var a = n("51c5"),
        r = n.n(a);
        r.a
    },
    "3f0b": function(t, e, n) {
        "use strict";
        n("6f84"),
        n("f548");
        var a = n("f8dd"),
        r = (n("163d"), n("2b45"), n("42e1")),
        i = function(t) {
            return t = t.toString(),
            t[1] ? t: "0".concat(t)
        },
        o = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
            n = arguments.length > 1 ? arguments[1] : void 0,
            o = e;
            try {
                if (n && "string" === typeof n) {
                    var s = [],
                    c = [["YYYY", "YY"], ["MM", "M"], ["DD", "D"], ["HH", "H"], ["mm", "m"], ["ss", "s"]],
                    u = 0;
                    while (u < 8) n.indexOf(c[u][0]) > -1 ? s.push(Number(e.substr(n.indexOf(c[u][0]), c[u][0].length))) : n.indexOf(c[u][1]) > -1 ? (s.push(Number(e.substr(n.indexOf(c[u][1]), c[u][1].length))), "YY" === n.indexOf(c[u]) && (s[0] = Number("20" + e.substr(n.indexOf("YY"), 2))), "yy" === n.indexOf(c[u]) && (s[0] = Number("20" + e.substr(n.indexOf("yy"), 2)))) : u += 6,
                    u++;
                    s[1] ? s[1]--:s[1] = 0,
                    o = Object(a["a"])(Date, s)
                }
            } catch(d) {
                o = new Date
            }
            var l = new Date(o);
            return l.str = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "YYYY-MM-DD",
                e = t;
                return e = e.replace("YYYY", l.year).replace("yyyy", l.year).replace("YY", String(l.year).substr( - 2)).replace("yy", String(l.year).substr( - 2)).replace("MM", i(l.month)).replace("M", l.month).replace("DD", i(l.date)).replace("dd", i(l.date)).replace("D", l.date).replace("d", l.date).replace("HH", i(l.hour)).replace("H", l.hour).replace("mm", i(l.minute)).replace("m", l.minute).replace("ss", i(l.second)).replace("s", l.second),
                e
            },
            l.to = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t(),
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "str",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = e.time - l.time > 0,
                o = e - l,
                s = [Object(r["a"])(o / 31536e6, 0, i ? -1 : 1), e.str() === l.str() ? 0 : Object(r["a"])(12 * (e.year - l.year) + e.month - l.month + (e.date - l.date > 0 ? .5 : -.5), 0, i ? -1 : 1), Object(r["a"])(o / 864e5, 0, i ? -1 : 1), Object(r["a"])(o / 36e5, 0, i ? -1 : 1), Object(r["a"])(o / 6e4, 0, i ? -1 : 1), Object(r["a"])(o / 1e3, 0, i ? -1 : 1), o];
                if ("str" === n) {
                    var c = a,
                    u = ["年", "个月", "天", "小时", "分钟", "秒", "毫秒"];
                    while (void 0 !== s[c]) s[c] && (s = "".concat(Math.abs(s[c])).concat(u[c]).concat(i ? "后": "前"), c += 10),
                    c += 1;
                    "string" !== typeof s && (s = "刚刚")
                } else if ("num" === n) return [s[a]] * (i ? -1 : 1);
                return s
            },
            l.year = l.getFullYear(),
            l.month = l.getMonth() + 1,
            l.date = l.getDate(),
            l.hour = l.getHours(),
            l.minute = l.getMinutes(),
            l.second = l.getSeconds(),
            l.time = l.getTime(),
            l.day = [{
                cn: "星期天",
                en: "Sunday",
                short: "日",
                value: 0
            },
            {
                cn: "星期一",
                en: "Monday",
                short: "一",
                value: 1
            },
            {
                cn: "星期二",
                en: "Tuesday",
                short: "二",
                value: 2
            },
            {
                cn: "星期三",
                en: "Wednesday",
                short: "三",
                value: 3
            },
            {
                cn: "星期四",
                en: "Thursday",
                short: "四",
                value: 4
            },
            {
                cn: "星期五",
                en: "Friday",
                short: "五",
                value: 5
            },
            {
                cn: "星期六",
                en: "Saturday",
                short: "六",
                value: 6
            }][l.getDay()],
            l.todayStart = new Date(l.year, l.month - 1, l.date).getTime(),
            l.todayEnd = new Date(l.year, l.month - 1, l.date + 1).getTime() - 1,
            l.week = function() {
                var e = (l.date - l.day.value) / 7;
                return e <= 0 ? t([l.year, l.month, 1]).from( - 1).week() : "".concat(l.str("yyyyMM")).concat(Math.round(e + .49))
            },
            l.dateObj = new Date(l.time),
            l.from = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "D",
                r = [l.year, l.month - 1, l.date, l.hour, l.minute, l.second],
                i = "YMDHms";
                return i.indexOf(n) < 0 ? l: (r[i.indexOf(n)] += e, t(Object(a["a"])(Date, r)))
            },
            l
        };
        e["a"] = o
    },
    "42e1": function(t, e, n) {
        "use strict";
        n("163d");
        var a = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            t = Number(t || 0);
            var a = .499999999;
            return Number((t + n * a).toFixed(e))
        };
        e["a"] = a
    },
    "496b": function(t, e, n) {},
    "517b": function(t, e, n) {},
    "51c5": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e44b"),
        n("6648"),
        n("5f54"),
        n("f0e6");
        var a = n("0261"),
        r = function() {
            var t = this,
            e = t.$createElement,
            a = t._self._c || e;
            return a("div", {
                class: "mode-" + t.mode,
                attrs: {
                    id: "app"
                }
            },
            [a("img", {
                staticClass: "app-bg",
                attrs: {
                    src: n("6e0e"),
                    alt: ""
                }
            }), a("img", {
                attrs: {
                    id: "play-music-bg",
                    alt: ""
                }
            }), a("canvas", {
                attrs: {
                    width: t.pageWidth,
                    height: t.pageHeight,
                    id: "music-data-canvas"
                }
            }), a("div", {
                staticClass: "main-container"
            },
            [t.showCover ? a("div", {
                staticStyle: {
                    display: "inline-block",
                    width: "60%"
                }
            },
            [a("Playing")], 1) : t._e(), a("router-view"), a("PageLeft"), a("Player"), a("Operation")], 1)])
        },
        i = [],
        o = (n("5ab2"), n("6d57"), n("e10e"), n("9a33"), n("9e76"), n("ce3c")),
        s = n("aa67"),
        c = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "player-container"
            },
            [t.showControl && t.playNow && t.playNow.id ? n("div", [n("div", {
                staticClass: "control-btn"
            },
            [n("div", {
                staticClass: "inline-block"
            },
            [n("i", {
                staticClass: "icon-shangyishou1 iconfont",
                on: {
                    click: function(e) {
                        return t.cutSong("playPrev")
                    }
                }
            })]), t.playing ? t._e() : n("div", {
                staticClass: "inline-block"
            },
            [n("i", {
                staticClass: "iconfont icon-bofang",
                on: {
                    click: function(e) {
                        return t.updatePlayingStatus(!0)
                    }
                }
            })]), t.playing ? n("div", {
                staticClass: "inline-block"
            },
            [n("i", {
                staticClass: "iconfont icon-zanting1",
                staticStyle: {
                    "font-size": "34px"
                },
                on: {
                    click: function(e) {
                        return t.updatePlayingStatus(!1)
                    }
                }
            })]) : t._e(), n("div", {
                staticClass: "inline-block"
            },
            [n("i", {
                staticClass: "icon-xiayishou1 iconfont",
                on: {
                    click: function(e) {
                        return t.cutSong("playNext")
                    }
                }
            })])]), n("div", {
                staticClass: "inline-block progress-container"
            },
            [n("div", {
                staticClass: "song-info"
            },
            [t.loading ? n("i", {
                staticClass: "el-icon-loading mr_10"
            }) : t._e(), n("span", {
                staticClass: "player-song-title pointer",
                on: {
                    click: function(e) {
                        return t.goTo("#/")
                    }
                }
            },
            [t._v(t._s(t.playNow.name))]), n("span", {
                staticClass: "player-song-singer pl_20 pointer"
            },
            t._l(t.playNow.ar, (function(e) {
                return n("a", {
                    key: e.id,
                    attrs: {
                        href: t.changeUrlQuery({
                            id: e.id,
                            mid: e.mid,
                            from: t.playNow.platform
                        },
                        "#/singer", !1)
                    }
                },
                [t._v(t._s(e.name) + " ")])
            })), 0), t.favSongMap[t.playNow.platform] ? n("span", {
                class: t.favSongMap[t.playNow.platform][t.playNow.aId] ? "iconfont icon-like iconfont": "iconfont icon-unlike",
                staticStyle: {
                    "margin-left": "25px",
                    cursor: "pointer"
                },
                on: {
                    click: function(e) {
                        return t.likeMusic(t.playNow.aId)
                    }
                }
            }) : t._e()]), n("div", {
                staticClass: "play-time"
            },
            [n("span", [t._v("\n          " + t._s(t.formatTooltip(t.currentTime)) + "\n          /\n          " + t._s(t.formatTooltip(t.playerInfo.duration)) + "\n        ")])]), n("div", {
                staticClass: "progress",
                attrs: {
                    id: "player-progress"
                }
            },
            [n("el-slider", {
                attrs: {
                    "format-tooltip": t.formatTooltip,
                    max: t.playerInfo.duration || 1
                },
                on: {
                    change: function(e) {
                        return t.playerDom.currentTime = e
                    }
                },
                model: {
                    value: t.currentTime,
                    callback: function(e) {
                        t.currentTime = e
                    },
                    expression: "currentTime"
                }
            })], 1)]), n("div", {
                staticClass: "other-control inline-block"
            },
            [n("div", {
                staticClass: "volume-control",
                on: {
                    mouseleave: function(e) {
                        t.showVolume = !1
                    }
                }
            },
            [t.showVolume ? n("div", {
                staticClass: "volume-slider-container",
                on: {
                    mouseleave: function(e) {
                        t.showVolume = !1
                    },
                    mouseover: function(e) {
                        t.showVolume = !0
                    }
                }
            },
            [n("div", {
                staticClass: "volume-slider"
            },
            [n("el-slider", {
                attrs: {
                    vertical: !0,
                    height: "80px",
                    max: 100
                },
                on: {
                    input: t.changeVolume
                },
                model: {
                    value: t.volume,
                    callback: function(e) {
                        t.volume = e
                    },
                    expression: "volume"
                }
            })], 1)]) : t._e(), n("i", {
                staticClass: "iconfont icon-volume",
                on: {
                    mouseover: function(e) {
                        t.showVolume = !0
                    }
                }
            })]), n("div", {
                staticClass: "order-control",
                on: {
                    mouseleave: function(e) {
                        t.showOrder = !1
                    }
                }
            },
            [t.showOrder ? n("div", {
                staticClass: "order-list-container",
                on: {
                    mouseleave: function(e) {
                        t.showOrder = !1
                    },
                    mouseover: function(e) {
                        t.showOrder = !0
                    }
                }
            },
            [n("div", {
                staticClass: "order-list"
            },
            t._l(t.orderList, (function(e) {
                return t.orderType !== e ? n("div", {
                    key: "order-" + e,
                    on: {
                        click: function(n) {
                            return t.changeOrderType(e)
                        }
                    }
                },
                [n("i", {
                    class: "iconfont icon-" + e
                })]) : t._e()
            })), 0)]) : t._e(), n("div", {
                staticClass: "now-order-type",
                on: {
                    mouseover: function(e) {
                        t.showOrder = !0
                    }
                }
            },
            [n("i", {
                class: "iconfont icon-" + t.orderType
            })])]), n("el-tooltip", {
                staticClass: "item",
                attrs: {
                    effect: "dark",
                    content: "下载",
                    placement: "top"
                }
            },
            [n("div", {
                staticClass: "inline-block ml_5 pd_5"
            },
            [n("span", {
                on: {
                    click: function(e) {
                        return t.down(t.playNow.aId)
                    }
                }
            },
            [n("i", {
                staticClass: "iconfont icon-download ft_16 pointer"
            })])])]), n("el-tooltip", {
                staticClass: "item",
                attrs: {
                    effect: "dark",
                    content: "添加到歌单",
                    placement: "top"
                }
            },
            ["migu" !== t.playNow.platform ? n("div", {
                staticClass: "inline-block ml_5 pd_5"
            },
            [n("span", {
                on: {
                    click: function(e) {
                        return t.playlistTracks(t.playNow.aId, "add", "ADD_SONG_2_LIST")
                    }
                }
            },
            [n("i", {
                staticClass: "iconfont icon-add ft_16 pointer"
            })])]) : t._e()]), n("input", {
                attrs: {
                    id: "cp-share-input"
                },
                domProps: {
                    value: t.changeUrlQuery({
                        shareId: t.playNow.id,
                        from: t.playNow.platform,
                        shareCid: t.playNow.cid
                    },
                    "http://music.900109.xyz:88/#/", !1)
                }
            }), n("el-tooltip", {
                staticClass: "item",
                attrs: {
                    effect: "dark",
                    content: "正在播放",
                    placement: "top"
                }
            },
            [n("div", {
                staticClass: "inline-block ml_5 pd_5",
                on: {
                    click: function(e) {
                        return t.goTo("#/playlist/detail?id=playing")
                    }
                }
            },
            [n("span", [n("i", {
                staticClass: "iconfont icon-list ft_16 pointer"
            })])])]), n("div", {
                staticClass: "more-control",
                on: {
                    mouseleave: function(e) {
                        t.showMore = !1
                    }
                }
            },
            [t.showMore ? n("div", {
                staticClass: "more-list-container",
                on: {
                    mouseleave: function(e) {
                        t.showMore = !1
                    },
                    mouseover: function(e) {
                        t.showMore = !0
                    }
                }
            },
            [n("div", {
                staticClass: "more-list"
            },
            t._l(t.moreList, (function(e) {
                return n("div", {
                    on: {
                        click: function(n) {
                            return t.handleClickMore(e.key)
                        }
                    }
                },
                [n("i", {
                    class: "iconfont icon-" + e.key
                }), n("span", {
                    staticStyle: {
                        "padding-left": "5px"
                    }
                },
                [t._v(t._s(e.text))])])
            })), 0)]) : t._e(), n("div", {
                staticClass: "ml_10",
                on: {
                    mouseover: function(e) {
                        t.showMore = !0
                    }
                }
            },
            [n("i", {
                staticClass: "iconfont icon-more"
            })]), t.showRateSlider ? n("div", {
                staticClass: "rate-slider",
                on: {
                    mouseleave: function(e) {
                        t.showRateSlider = !1
                    }
                }
            },
            [n("el-slider", {
                attrs: {
                    max: 3,
                    min: .3,
                    step: .1
                },
                on: {
                    input: function(e) {
                        return t.playerDom.playbackRate = e
                    }
                },
                model: {
                    value: t.rate,
                    callback: function(e) {
                        t.rate = e
                    },
                    expression: "rate"
                }
            })], 1) : t._e()]), n("div", {
                staticClass: "back-container"
            },
            [n("a", {
                staticClass: "iconfont icon-feedback",
                attrs: {
                    href: "#/feedback"
                }
            }), n("div", {
                staticClass: "back-icon pointer",
                on: {
                    click: t.goBack
                }
            },
            [n("i", {
                staticClass: "iconfont icon-arrow-left"
            }), t._v("\n          BACK\n        ")])])], 1)]) : t._e(), n("audio", {
                attrs: {
                    id: "m-player",
                    crossOrigin: "anonymous",
                    src: t.playingUrl || "",
                    controls: ""
                }
            })])
        },
        u = [],
        l = (n("f548"), n("163d"), n("cc57"), n("6a61"), n("cf7f")),
        d = n("42e1"),
        p = n("9f3a"),
        f = n("ceb6"),
        m = n("0828"),
        g = n("f7f9"),
        h = n("5748"),
        b = {
            delDuplicate: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = [].concat(Object(h["a"])(t), Object(h["a"])(e)),
                a = [];
                return n.forEach((function(t) {
                    a.indexOf(t) < 0 && a.push(t)
                })),
                a
            },
            delDuplicateObj: function(t, e) {
                var n = [],
                a = [];
                return t.forEach((function(t) {
                    if ("object" === Object(g["a"])(t)) {
                        for (var r = t,
                        i = 0; i < e.length; i += 1) r = r[e[i]]; - 1 === n.indexOf(r) && (n.push(r), a.push(t))
                    }
                })),
                a
            },
            objToArr: function(t) {
                var e = [];
                return Object.keys(t).forEach((function(n) {
                    e.push(t[n])
                })),
                e
            },
            hasDuplicate: function(t, e) {
                return 0 !== b.getDuplicate(t, e).length
            },
            getDuplicate: function(t, e) {
                var n = [];
                return t.forEach((function(t) {
                    e.indexOf(t) > -1 && n.push(t)
                })),
                n
            }
        },
        y = b,
        v = (n("6f84"), n("47e7"), n("1462")),
        w = n("a340"),
        O = function() {
            function t() {
                Object(v["a"])(this, t),
                Object(o["a"])(this, "fftSize", 256),
                Object(o["a"])(this, "musicDataArray", new Uint8Array(0)),
                Object(o["a"])(this, "otherData", {}),
                Object(o["a"])(this, "drawMusicStyle", "rect"),
                Object(o["a"])(this, "drawMusicType", 1);
                var e = document.getElementById("music-data-canvas");
                this.ctx = e.getContext("2d");
                var n = window.AudioContext || window.webkitAudioContext,
                a = new n;
                window.actx = a;
                var r = a.createAnalyser();
                r.fftSize = this.fftSize;
                var i = a.createMediaElementSource(window.pDom);
                i.connect(r),
                r.connect(a.destination),
                setTimeout((function() {
                    return window.actx.resume()
                }), 5e3),
                this.playerAnalyser = r,
                window.playerAnalyser = r;
                var c = r.frequencyBinCount;
                this.musicDataArray = new Uint8Array(c),
                this.drawType = s["a"].get("drawMusicStyle"),
                this.quadraticCurve = this.quadraticCurve.bind(this)
            }
            return Object(w["a"])(t, [{
                key: "quadraticCurve",
                value: function(t) {
                    var e, n, a = t.x,
                    r = void 0 === a ? [] : a,
                    i = t.y,
                    o = void 0 === i ? [] : i,
                    s = t.strokeStyle,
                    c = t.lineWidth,
                    u = this.ctx,
                    l = 0,
                    d = 0,
                    p = [],
                    f = [];
                    return u.beginPath(),
                    u.strokeStyle = s,
                    u.lineWidth = c,
                    r.forEach((function(t, a) {
                        switch (e = (l + t) / 2, n = (d + o[a]) / 2, a) {
                        case 0:
                            break;
                        case 1:
                            u.beginPath(),
                            u.moveTo(e, n);
                            break;
                        default:
                            u.quadraticCurveTo(l, d, e, n);
                            break
                        }
                        l = t,
                        d = o[a],
                        e,
                        n,
                        e === e && (p.push(e), f.push(n))
                    })),
                    u.stroke(),
                    {
                        x: p,
                        y: f
                    }
                }
            },
            {
                key: "drawLines",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.strokeStyle,
                    a = e.lineWidth,
                    r = this.ctx;
                    t.forEach((function(t) {
                        var e = t.x,
                        i = t.y,
                        o = t.x1,
                        s = t.y1,
                        c = t.strokeStyle,
                        u = t.lineWidth;
                        r.strokeStyle = c || n,
                        r.lineWidth = u || a,
                        r.beginPath(),
                        r.moveTo(e, i),
                        r.lineTo(o, s),
                        r.stroke()
                    }))
                }
            },
            {
                key: "drawMusicRect",
                value: function() {
                    var t, e = this,
                    n = this.ctx,
                    a = this.pageHeight;
                    this.nowData.forEach((function(r, i) {
                        var o = e.getDrawData(i, ["x", "y", "w", "h"]),
                        s = o.x,
                        c = o.y,
                        u = o.w,
                        l = o.h;
                        0 === i && (t = n.createLinearGradient(s, a, s, a / 2), t.addColorStop(0, "#409EFF33"), t.addColorStop(1, "#5cB87a33"), n.fillStyle = t),
                        n.fillRect(s, c, u, l)
                    }))
                }
            },
            {
                key: "drawMusicParticle",
                value: function() {
                    var t = this.otherData,
                    e = this.nowData,
                    n = this.pageWidth,
                    a = this.pageHeight,
                    r = this.fftSize,
                    i = this.ctx;
                    t.musicParticleList = t.musicParticleList || [];
                    var o = t.musicParticleList;
                    o.forEach((function(t) {
                        return t.move()
                    })),
                    e.map((function(t, e) {
                        t > 0 && Math.random() < .02 && o.push(new _({
                            pageWidth: n,
                            pageHeight: a,
                            fftSize: r,
                            value: t,
                            i: e,
                            ctx: i
                        }))
                    })),
                    t.musicParticleList = o.filter((function(t) {
                        return ! t.disappear
                    }))
                }
            },
            {
                key: "drawMusicLine",
                value: function() {
                    var t = this,
                    e = this.quadraticCurve,
                    n = [],
                    a = [],
                    r = [],
                    i = [];
                    this.nowData.forEach((function(e, o) {
                        var s = t.getDrawData(o, ["x", "y1", "y2"]),
                        c = s.x,
                        u = s.y,
                        l = s.y1,
                        d = s.y2;
                        n.push(u),
                        a.push(l),
                        r.push(d),
                        i.push(c)
                    })),
                    e({
                        x: i,
                        y: n,
                        lineWidth: 8,
                        strokeStyle: "#409EFF33"
                    }),
                    e({
                        x: i,
                        y: a,
                        lineWidth: 3,
                        strokeStyle: "#5cB87a33"
                    }),
                    e({
                        x: i,
                        y: r,
                        lineWidth: 5,
                        strokeStyle: "#E6A23C33"
                    })
                }
            },
            {
                key: "drawMusicCircle",
                value: function() {
                    var t, e = this,
                    n = this.nowData,
                    a = this.pageWidth,
                    r = this.pageHeight,
                    i = this.ctx,
                    o = this.fftSize,
                    s = [];
                    n.forEach((function(n, c) {
                        var u = e.getDrawData(c, ["a", "r", "h"]),
                        l = u.a,
                        d = u.r,
                        p = u.h;
                        0 === c && (t = i.createRadialGradient(a / 2, r / 2, 0, a / 2, r / 2, 1.2 * d), t.addColorStop(0, "#409EFF00"), t.addColorStop(.5, "#409EFF66"), t.addColorStop(1, "#5cB87a66")),
                        d *= .8,
                        l > Math.PI || l < 0 || (s.push({
                            x: a / 2 + Math.sin(l) * (d - 10 - p / 20),
                            y: r / 2 - Math.cos(l) * (d - 10 - p / 20),
                            x1: a / 2 + Math.sin(l) * (d + p / 6),
                            y1: r / 2 - Math.cos(l) * (d + p / 6)
                        }), l > 0 && l < Math.PI && s.push({
                            x: a / 2 - Math.sin(l) * (d - 10 - p / 20),
                            y: r / 2 - Math.cos(l) * (d - 10 - p / 20),
                            x1: a / 2 - Math.sin(l) * (d + p / 6),
                            y1: r / 2 - Math.cos(l) * (d + p / 6)
                        }), l === Math.PI && e.drawLines(s, {
                            lineWidth: 384 / (o / 2),
                            strokeStyle: t
                        }))
                    }))
                }
            },
            {
                key: "drawMusicCircle2",
                value: function() {
                    var t, e = this,
                    n = this.nowData,
                    a = this.fftSize,
                    r = this.pageWidth,
                    i = this.pageHeight,
                    o = this.ctx,
                    s = [];
                    n.forEach((function(n, c) {
                        var u = e.getDrawData(c, ["r", "a", "h"]),
                        l = u.r,
                        d = u.a;
                        u.h;
                        if (l *= .8 * (1 - c / (a / 2)) * (1 - c / (a / 2)), d *= 4, !(d > 4 * Math.PI || d < 0)) {
                            if (d > 0 && d < 4 * Math.PI) {
                                var p = {
                                    x: r / 2 + Math.sin(d) * (l + 2 + n / 256 * l),
                                    y: i / 2 - Math.cos(d) * (l + 2 + n / 256 * l),
                                    x1: r / 2 + Math.sin(d) * l,
                                    y1: i / 2 - Math.cos(d) * l,
                                    lineWidth: Math.max(4 * Math.PI * l / (a / 2), 1)
                                };
                                t = o.createLinearGradient(p.x, p.y, p.x1, p.y1),
                                t.addColorStop(1, "#409EFF66"),
                                t.addColorStop(0, "#5cB87a66"),
                                p.strokeStyle = t,
                                s.push(p)
                            }
                            d === 4 * Math.PI && (t = o.createRadialGradient(r / 2, i / 2, 0, r / 2, i / 2, 1.5 * l), t.addColorStop(0, "#409EFF00"), t.addColorStop(.5, "#409EFF66"), t.addColorStop(1, "#5cB87a66"), e.drawLines(s, {
                                strokeStyle: t
                            }))
                        }
                    }))
                }
            },
            {
                key: "getDrawData",
                value: function(t, e) {
                    var n = this.fftSize / 2,
                    a = this.nowData[t],
                    r = this.pageWidth,
                    i = this.pageHeight,
                    o = this.drawMusicType,
                    s = {},
                    c = function(t, e) {
                        if (0 === t) return 0;
                        var n = t + 30 * Math.random() - e;
                        return n < 0 ? 0 : n > 255 ? 255 : n
                    };
                    return e.forEach((function(e) {
                        switch (e) {
                        case "x":
                            s[e] = r * t / n;
                            break;
                        case "y":
                            s[e] = i - 80 - a / 256 * i / 2;
                            break;
                        case "y1":
                            s[e] = i - 80 - c(a, 12) / 256 * i / 2;
                            break;
                        case "y2":
                            s[e] = i - 80 - c(a, 18) / 256 * i / 2;
                            break;
                        case "w":
                            s[e] = .9 * r / n;
                            break;
                        case "h":
                            s[e] = a / 256 * i / 2;
                            break;
                        case "a":
                            var u = Math.PI / (n / 4 * 3);
                            s[e] = {
                                1 : u * t,
                                2 : u * (t - n / 8)
                            } [o];
                            break;
                        case "r":
                            s[e] = i / 4;
                            break
                        }
                    })),
                    s
                }
            },
            {
                key: "draw",
                value: function() {
                    this.pageWidth = window.innerWidth,
                    this.pageHeight = window.innerHeight;
                    var t = this.ctx,
                    e = this.pageWidth,
                    n = this.pageHeight;
                    if ("0" !== s["a"].get("showDrawMusic")) {
                        var a = this.musicDataArray,
                        r = this.playerAnalyser;
                        r.getByteFrequencyData(a);
                        var i = s["a"].get("drawMusicType"),
                        o = s["a"].get("drawMusicStyle");
                        this.drawMusicType = i,
                        this.drawMusicStyle !== o && (this.drawMusicStyle = o, this.otherData = {}),
                        this.nowData = Object(h["a"])(a);
                        var c = this.nowData;
                        2 === Number(i) && (this.nowData = [].concat(Object(h["a"])(c.reverse()), Object(h["a"])(c.reverse())).filter((function(t, e) {
                            return e % 2
                        }))),
                        t.clearRect(0, 0, e, n);
                        var u = {
                            rect: "drawMusicRect",
                            line: "drawMusicLine",
                            circle: "drawMusicCircle",
                            circle2: "drawMusicCircle2",
                            particle: "drawMusicParticle",
                            line2: "drawMusicLine2"
                        } [this.drawMusicStyle] || "drawMusicRect";
                        this[u]()
                    } else t.clearRect(0, 0, e, n)
                }
            }]),
            t
        } (),
        _ = function() {
            function t(e) {
                var n = e.pageWidth,
                a = e.pageHeight,
                r = e.fftSize,
                i = e.value,
                s = e.ctx,
                c = e.i;
                Object(v["a"])(this, t),
                Object(o["a"])(this, "disappear", !1),
                this.data = {
                    x: n * c / (r / 2),
                    y: a,
                    r: 5 * Math.random() + i / 256 * 7,
                    t: i / 256 * 100,
                    vx: 5 * Math.random() - 3,
                    tx: Math.random() > .5,
                    vy: 2 * Math.random() + 2,
                    type: "particle"
                },
                this.ctx = s,
                this.draw()
            }
            return Object(w["a"])(t, [{
                key: "move",
                value: function() {
                    var t = this.data;
                    t.t < 1 || t.r < 2 ? this.disappear = !0 : (t.x += t.vx, t.y -= t.vy, t.t = Math.min(t.t - .4, .99 * t.t), t.r *= .99, Math.abs(t.vx) > 3 && (t.tx = !t.tx), t.vx += .1 * (2 * Number(t.tx) - 1), this.draw())
                }
            },
            {
                key: "draw",
                value: function() {
                    var t = this.ctx,
                    e = this.data;
                    t.lineCap = "butt",
                    t.beginPath(),
                    t.arc(e.x, e.y, e.r, 0, 2 * Math.PI),
                    t.fillStyle = "rgba(255,255,255,".concat(e.t / 100, ")"),
                    t.fill()
                }
            }]),
            t
        } ();
        n("1426");
        function S(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function P(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var A = {
            name: "PlayerPage",
            data: function() {
                return {
                    playerDom: null,
                    currentTime: 0,
                    volume: 0,
                    rate: 1,
                    stopUpdateCurrent: !1,
                    showVolume: !1,
                    showOrder: !1,
                    showMore: !1,
                    showRateSlider: !1,
                    orderList: ["suiji", "danquxunhuan", "liebiao"],
                    orderType: s["a"].get("orderType"),
                    showControl: !Object(m["b"])("hideControl"),
                    playerInfo: {
                        current: 0,
                        duration: 0
                    },
                    playingId: 0,
                    playingPlatform: "",
                    listId: 0,
                    keys: [],
                    errorId: "",
                    playingUrl: "",
                    isUpdating: !1,
                    moreList: [{
                        key: "share",
                        text: "分享"
                    },
                    {
                        key: "down-lyric",
                        text: "歌词"
                    },
                    {
                        key: "home",
                        text: "歌词"
                    },
                    {
                        key: "adjust",
                        text: "倍速"
                    }]
                }
            },
            computed: P({},
            Object(p["b"])({
                playNow: "getPlaying",
                playing: "isPlaying",
                downloading: "isDownloading",
                loading: "isLoading",
                allSongs: "getAllSongs",
                radioInfo: "getRadioInfo",
                userList: "getUserList",
                allList: "getAllList",
                user: "getUser",
                playingListId: "getPlayingListId",
                isPersonFM: "isPersonFM",
                playingList: "getPlayingList",
                mode: "getMode",
                favSongMap: "getFavSongMap"
            })),
            watch: {
                playNow: function() {
                    var t = Object(l["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a, r, i, o, c, u, l, p, m, g, h, b, y, v, w, O, _, S, P, A, E, L, k, I, C, M, j, x, D, N = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                if (n = this.listId, a = this.playingId, r = this.playerInfo, i = this.isPersonFM, o = this.playingList, c = this.playingPlatform, u = this.isUpdating, l = this.pDom, p = e.id, m = e.lyric, g = e.name, h = e.comments, e.mid, b = e.songid, e.cId, y = e.br, v = e.pUrl, w = e.aId, e.platform, O = e.qqId, _ = e.miguId, S = e.al, P = void 0 === S ? {}: S, A = e.ar, E = void 0 === A ? [] : A, L = e.url, k = this.$store.dispatch, I = s["a"].get("listenSize") || "128", !u) {
                                    t.next = 9;
                                    break
                                }
                                return t.abrupt("return");
                            case 9:
                                if ("mediaSession" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
                                    title: g,
                                    artist: E.map((function(t) {
                                        return t.name
                                    })).join("/"),
                                    album: P.name,
                                    artwork: [{
                                        src: P.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg",
                                        sizes: "96x96"
                                    },
                                    {
                                        src: P.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg",
                                        sizes: "128x128"
                                    },
                                    {
                                        src: P.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg",
                                        sizes: "192x192"
                                    },
                                    {
                                        src: P.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg",
                                        sizes: "256x256"
                                    },
                                    {
                                        src: P.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg",
                                        sizes: "384x384"
                                    },
                                    {
                                        src: P.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg",
                                        sizes: "512x512"
                                    }]
                                })), v === this.playingUrl && this.playingUrl || !L) {
                                    t.next = 33;
                                    break
                                }
                                if (k("setLoading", !0), this.isUpdating = !0, C = {
                                    128 : 128e3,
                                    320 : 32e4,
                                    flac: 96e4
                                } [I], M = L, j = y, !(v && Number(y) === C || "128" === I)) {
                                    t.next = 20;
                                    break
                                }
                                M = v || L,
                                j = C,
                                t.next = 26;
                                break;
                            case 20:
                                if (!O && !_) {
                                    t.next = 26;
                                    break
                                }
                                return t.next = 23,
                                Object(f["g"])(w, I);
                            case 23:
                                x = t.sent,
                                M = x.url || L,
                                j = x.br;
                            case 26:
                                return this.isUpdating = !1,
                                this.playingUrl = M,
                                l && l.pause(),
                                t.next = 31,
                                k("updateSongDetail", {
                                    pUrl: M,
                                    br: j,
                                    id: p,
                                    aId: w
                                });
                            case 31:
                                return setTimeout((function() {
                                    N.playing && N.playerDom.play()
                                }), 1),
                                t.abrupt("return");
                            case 33:
                                if (this.playingUrl || setTimeout((function() {
                                    N.playingUrl || N.cutSong("playNext")
                                }), 1e3), i && o.index >= o.raw.length - 2 && this.getPersonFM(), String(p) !== String(a)) {
                                    t.next = 37;
                                    break
                                }
                                return t.abrupt("return");
                            case 37:
                                r.current > 0 && "163" === c && (D = ("daily" === n ? "": n) || "", D || (D = this.allSongs["163_".concat(a)].al.id), Object(f["c"])({
                                    api: "SCROBBLE",
                                    data: {
                                        id: a,
                                        sourceid: String(D).replace("".concat(c, "_"), ""),
                                        time: Object(d["a"])(r.current)
                                    }
                                })),
                                k("updatePlayingPercent", 0),
                                document.title = g,
                                this.currentTime = 0,
                                this.playingId = p,
                                this.playingPlatform = e.platform || "163",
                                this.listId = this.playingListId;
                                try {
                                    document.getElementById("play-music-bg").src = "".concat(this.allSongs[w].al.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg", "?param=1440y1440")
                                } catch(T) {
                                    document.getElementById("play-music-bg").src = "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg"
                                }
                                if (e.miguId && this.playing && setTimeout((function() {
                                    N.playerDom.play()
                                }), 1), m || Object(f["o"])(w), h) {
                                    t.next = 55;
                                    break
                                }
                                t.t0 = e.platform,
                                t.next = "qq" === t.t0 ? 51 : "migu" === t.t0 ? 53 : 54;
                                break;
                            case 51:
                                return Object(f["c"])({
                                    api:
                                    "QQ_GET_COMMENT",
                                    data: {
                                        id: b
                                    }
                                }).then((function(t) {
                                    var e = {
                                        hot: Object(f["k"])(t.data.hotComment.commentlist),
                                        latest: Object(f["k"])(t.data.comment.commentlist),
                                        total: t.data.comment.commenttotal,
                                        offset: 20
                                    };
                                    k("updateSongDetail", {
                                        comments: e,
                                        aId: w
                                    })
                                })),
                                t.abrupt("break", 55);
                            case 53:
                                return t.abrupt("break", 55);
                            case 54:
                                Object(f["c"])({
                                    api:
                                    "MUSIC_COMMENTS",
                                    data: {
                                        offset: 0,
                                        limit: 20,
                                        id: p
                                    }
                                }).then((function(t) {
                                    var e = {
                                        hot: t.hotComments || [],
                                        latest: t.comments || [],
                                        total: t.total,
                                        offset: 20
                                    };
                                    k("updateSongDetail", {
                                        id: p,
                                        comments: e,
                                        aId: w
                                    })
                                }));
                            case 55:
                            case "end":
                                return t.stop()
                            }
                        }), t, this)
                    })));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                } ()
            },
            mounted: function() {
                var t = this;
                window.UPDARE_PLAYING_STATUS = this.updatePlayingStatus,
                this.playerDom = document.getElementById("m-player"),
                this.playerDom.volume = s["a"].get("volume") || 1,
                this.volume = 100 * (s["a"].get("volume") || 1);
                var e = this.playerDom;
                window.pDom = e;
                var n = document.getElementsByClassName("el-slider__button el-tooltip")[0],
                a = this.$store.dispatch;
                if (window.onhashchange = function() {
                    return t.showControl = !Object(m["b"])("hideControl")
                },
                (window.AudioContext || window.webkitAudioContext) && "0" !== s["a"].get("useAudioContext")) {
                    this.drawMusic = new O;
                    var r = function e() {
                        t.drawMusic.draw(),
                        window.requestAnimationFrame(e)
                    };
                    window.requestAnimationFrame(r)
                }
                e.oncanplaythrough = function() {
                    t.playingUrl === t.playNow.pUrl && (a("setLoading", !1), t.playing && e.play()),
                    t.playerInfo = {
                        duration: e.duration,
                        current: 0
                    },
                    a("updatePlayingPercent", 0)
                },
                e.onerror = function(n) {
                    var r = t.playNow,
                    i = r.id,
                    o = r.aId;
                    if (i) {
                        if (t.errorId === i) return t.cutSong("playNext");
                        switch (t.errorId = i, a("setLoading", !0), setTimeout((function() {
                            e.error && t.cutSong("playNext")
                        }), 5e4), t.playNow.platform) {
                        case "qq":
                        case "migu":
                            a("updateSongDetail", {
                                id: i,
                                purl: "",
                                aId: o
                            });
                            break;
                        default:
                            Object(f["c"])({
                                api:
                                "SONG_URL",
                                data: {
                                    id: i
                                }
                            }).then((function(e) {
                                var n = e.data[0],
                                r = n.url,
                                s = n.br;
                                if (!r) return t.cutSong("playNext");
                                a("updateSongDetail", {
                                    url: r,
                                    br: s,
                                    id: i,
                                    pUrl: r,
                                    aId: o
                                })
                            }))
                        }
                    }
                },
                "mediaSession" in navigator && (navigator.mediaSession.setActionHandler("play", (function() {
                    return t.updatePlayingStatus(!0)
                })), navigator.mediaSession.setActionHandler("pause", (function() {
                    return t.updatePlayingStatus(!1)
                })), navigator.mediaSession.setActionHandler("previoustrack", (function() {
                    return t.cutSong("playPrev")
                })), navigator.mediaSession.setActionHandler("nexttrack", (function() {
                    return t.cutSong("playNext")
                }))),
                e.onended = function() {
                    "danquxunhuan" !== t.orderType ? a("playNext") : e.play()
                },
                e.ontimeupdate = function() { ! t.stopUpdateCurrent && (t.currentTime = t.playNow.url ? e.currentTime: 0),
                    t.playerInfo = {
                        current: t.currentTime,
                        duration: e.duration
                    },
                    a("updatePlayingPercent", t.playerInfo.current / t.playerInfo.duration)
                },
                n && (n.onmousedown = function() {
                    return t.stopUpdateCurrent = !0
                }),
                window.onkeydown = function(e) {
                    var n = e.keyCode,
                    a = e.target,
                    r = e.ctrlKey,
                    i = e.altKey,
                    o = e.shiftKey;
                    if (! (["textarea", "input"].indexOf(a.nodeName.toLowerCase()) > -1)) {
                        var c = s["a"].get("key_code_map", !0),
                        u = [];
                        r && u.push("ctrl"),
                        i && u.push("alt"),
                        o && u.push("shiftKey"),
                        -1 === [16, 17, 18].indexOf(n) && u.push(n);
                        var l = 100 * s["a"].get("volume");
                        switch (u.join("-")) {
                        case c.VOLUME_DOWN:
                            return l = Math.max(l - 5, 0),
                            t.changeVolume(l),
                            t.$message.info("音量调至".concat(Object(d["a"])(l, 0), "%")),
                            !1;
                        case c.VOLUME_UP:
                            return l = Math.min(l + 5, 100),
                            t.changeVolume(l),
                            t.$message.info("音量调至".concat(Object(d["a"])(l, 0), "%")),
                            !1;
                        case c.PLAY_PREV:
                            return t.cutSong("playPrev"),
                            !1;
                        case c.PLAY_NEXT:
                            return t.cutSong("playNext"),
                            !1;
                        case c.PLAY:
                            return t.updatePlayingStatus(!t.playing),
                            !1;
                        case c.TO_SIMPLE || "ctrl-83": return window.location = "#/simple",
                            !1;
                        case c.QUIT_SIMPLE || "27": return "simple" === t.mode && (window.location = "#/"),
                            !1
                        }
                    }
                },
                window.onkeypress = window.onkeydown,
                window.onkeyup = function(e) {
                    var n = e.keyCode;
                    t.keys = t.keys.filter((function(t) {
                        return t !== n
                    }))
                }
            },
            methods: {
                formatTooltip: function(t) {
                    return "".concat(Object(d["a"])(t / 60, 0, -1), ":").concat(Object(d["a"])(t % 60, 0) < 10 ? "0".concat(Object(d["a"])(t % 60, 0)) : Object(d["a"])(t % 60, 0))
                },
                changeVolume: function(t) {
                    this.playerDom.volume = t / 100,
                    this.volume = Object(d["a"])(t, 0),
                    s["a"].set("volume", t / 100)
                },
                changeOrderType: function(t) {
                    this.orderType = t,
                    s["a"].set("orderType", t),
                    this.$store.dispatch("updateRandomHistory")
                },
                updatePlayingStatus: function(t) {
                    "play" === t && window.actx && window.actx.resume(),
                    this.playerDom[["pause", "play"][Number(t)]](),
                    this.$store.dispatch("updatePlayingStatus", t)
                },
                cutSong: function(t) {
                    window.actx && window.actx.resume(),
                    this.$store.dispatch(t)
                },
                down: f["e"],
                likeMusic: f["m"],
                goTo: function(t) {
                    window.location = t
                },
                playlistTracks: function(t, e, n) {
                    window.event.stopPropagation(),
                    this.$store.dispatch("setOperation", {
                        data: {
                            tracks: t,
                            op: e
                        },
                        type: n
                    })
                },
                goBack: function() {
                    history.back( - 1)
                },
                getPersonFM: function(t) {
                    var e = this;
                    Object(f["h"])().then((function(n) {
                        var a = n.map((function(t) {
                            return t.id
                        }));
                        e.$store.dispatch("setPersonFM", a),
                        y.hasDuplicate(a, e.playingList.raw) && !t && e.getPersonFM(!0)
                    }))
                },
                copyUrl: function() {
                    var t = document.getElementById("cp-share-input");
                    t.select(),
                    document.execCommand("Copy"),
                    this.$message.success("复制链接成功，去分享吧")
                },
                changeUrlQuery: m["a"],
                handleClickMore: function(t) {
                    var e = this.playNow;
                    switch (t) {
                    case "share":
                        this.copyUrl();
                        break;
                    case "down-lyric":
                        Object(f["d"])(e);
                        break;
                    case "home":
                        window.location = "#/";
                        break;
                    case "adjust":
                        this.showMore = !1,
                        this.showRateSlider = !0;
                        break
                    }
                }
            }
        },
        E = A,
        L = (n("74c9"), n("9ca4")),
        k = Object(L["a"])(E, c, u, !1, null, null, null),
        I = k.exports,
        C = function() {
            var t = this,
            e = t.$createElement,
            a = t._self._c || e;
            return a("div", {
                staticClass: "page-left-nav"
            },
            [a("div", {
                staticClass: "left-nav-bg"
            }), a("div", {
                staticClass: "avatar nav-line"
            },
            [t.user.avatarUrl ? a("img", {
                staticClass: "avatar-img iconfont",
                attrs: {
                    src: t.user.avatarUrl
                },
                on: {
                    click: t.goToUser
                }
            }) : t._e(), t.user.avatarUrl ? t._e() : a("img", {
                staticClass: "avatar-img iconfont",
                attrs: {
                    src: n("058a")
                },
                on: {
                    click: t.goToUser
                }
            }), a("div", {
                staticClass: "icon-text",
                on: {
                    click: t.goToUser
                }
            },
            [t._v(t._s(t.user.userId ? t.user.nickname: "来登录呀"))])]), t._m(0), t._m(1), t._m(2), a("div", {
                staticClass: "nav-line"
            },
            [a("a", {
                attrs: {
                    href: "#/download"
                }
            },
            [a("el-badge", {
                staticClass: "item",
                attrs: {
                    value: t.downloadInfo.count,
                    hidden: 0 === t.downloadInfo.count
                }
            },
            [a("i", {
                staticClass: "iconfont icon-down"
            })]), a("div", {
                staticClass: "icon-text"
            },
            [t._v("下载")])], 1)]), t._m(3), t._m(4), t._m(5)])
        },
        M = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "nav-line"
            },
            [n("a", {
                attrs: {
                    href: "#/search"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-search"
            }), n("div", {
                staticClass: "icon-text"
            },
            [t._v("寻觅")])])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "nav-line"
            },
            [n("a", {
                attrs: {
                    href: "#/playlist"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-playlist"
            }), n("div", {
                staticClass: "icon-text"
            },
            [t._v("歌单")])])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "nav-line"
            },
            [n("a", {
                attrs: {
                    href: "#/recommend"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-recommend"
            }), n("div", {
                staticClass: "icon-text"
            },
            [t._v("推荐")])])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "nav-line nav-mode-simple"
            },
            [n("a", {
                attrs: {
                    href: "#/simple"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-windmill"
            }), n("div", {
                staticClass: "icon-text"
            },
            [t._v("极简")])])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "nav-line"
            },
            [n("a", {
                attrs: {
                    href: "#/setting"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-setting"
            }), n("div", {
                staticClass: "icon-text"
            },
            [t._v("设置")])])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "nav-line"
            },
            [n("a", {
                attrs: {
                    href: "#/about"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-version"
            }), n("div", {
                staticClass: "icon-text"
            },
            [t._v("关于")])])])
        }];
        function j(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function x(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? j(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var D = {
            name: "PageLeft",
            computed: x({},
            Object(p["b"])({
                user: "getUser",
                downloadInfo: "getDownloadInfo",
                mode: "getMode"
            })),
            created: function() {},
            methods: {
                goToUser: function() {
                    if ("simple" === this.mode) return window.location = "#/";
                    window.location = "#/user"
                }
            }
        },
        N = D,
        T = (n("091b"), Object(L["a"])(N, C, M, !1, null, null, null)),
        U = T.exports,
        Q = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return t.playNow && t.playNow.id ? n("div", {
                staticClass: "playnow-container"
            },
            [t.playNow.al && t.playNow.al.picUrl ? n("div", {
                staticClass: "progress-container"
            },
            [n("el-progress", {
                staticStyle: {
                    opacity: "0.5",
                    position: "absolute",
                    top: "10px",
                    left: "10px"
                },
                attrs: {
                    width: 280,
                    color: "#409EFFCC",
                    "stroke-width": 10,
                    type: "circle",
                    percentage: 100 * (t.percent || 0),
                    "show-text": !1
                }
            }), n("img", {
                class: "progress-cover playing-" + (!t.loading && t.playing),
                attrs: {
                    src: (t.playNow.al.picUrl || "http://p2.music.126.net/ftPcA5oCeIQxhiNmEpmtKw==/109951163926974610.jpg") + "?param=300y300",
                    alt: ""
                }
            })], 1) : t._e(), n("div", {
                staticClass: "song-info"
            },
            [n("div", {
                staticClass: "info-line"
            },
            [t._m(0), n("div", {
                staticClass: "info-val"
            },
            [t._v("\n        " + t._s(t.playNow.name) + "\n        "), t.playNow.br ? n("span", {
                staticClass: "info-br"
            },
            [t._v(t._s(t.getBr(t.playNow.br)))]) : t._e(), n("i", {
                class: "pl_10 iconfont icon-" + (t.playNow.platform || "163"),
                staticStyle: {
                    "vertical-align": "-1px"
                }
            })])]), n("div", {
                staticClass: "info-line"
            },
            [t._m(1), n("div", {
                staticClass: "info-val"
            },
            t._l(t.playNow.ar, (function(e) {
                return n("a", {
                    key: e.id,
                    attrs: {
                        href: t.changeUrlQuery({
                            id: e.id,
                            from: t.playNow.platform,
                            mid: e.mid
                        },
                        "#/singer", !1)
                    }
                },
                [t._v(t._s(e.name) + " ")])
            })), 0)]), n("div", {
                staticClass: "info-line"
            },
            [t._m(2), t.playNow.al && t.playNow.al.name ? n("div", {
                staticClass: "info-val"
            },
            [n("a", {
                attrs: {
                    href: t.changeUrlQuery({
                        id: t.playNow.al.id,
                        mid: t.playNow.al.mid,
                        from: t.playNow.platform
                    },
                    "#/album", !1)
                }
            },
            [t._v(t._s(t.playNow.al.name))])]) : t._e()]), n("div", {
                staticClass: "btn-group"
            },
            [t._m(3), "migu" !== t.playNow.platform ? n("a", {
                staticClass: "btn-group-href",
                attrs: {
                    href: "#/comment"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-comment"
            }), t.playNow.comments ? n("span", {
                staticClass: "pl_10 ft_12"
            },
            [t._v(t._s(t.numberHandle(t.playNow.comments.total)))]) : t._e()]) : t._e(), t.playNow.mvId ? n("a", {
                staticClass: "btn-group-href",
                attrs: {
                    href: t.changeUrlQuery({
                        id: t.playNow.mvId,
                        from: t.playNow.platform
                    },
                    "#/mv", !1)
                }
            },
            [n("i", {
                staticClass: "iconfont icon-mv"
            })]) : t._e()])])]) : t._e()
        },
        R = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "info-label"
            },
            [n("i", {
                staticClass: "iconfont icon-song"
            })])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "info-label"
            },
            [n("i", {
                staticClass: "iconfont icon-singer"
            })])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "info-label"
            },
            [n("i", {
                staticClass: "iconfont icon-album"
            })])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("a", {
                staticClass: "btn-group-href",
                attrs: {
                    href: "#/"
                }
            },
            [n("i", {
                staticClass: "iconfont icon-lyric"
            })])
        }];
        function G(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function B(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? G(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var q = {
            name: "Playing",
            computed: B({},
            Object(p["b"])({
                playNow: "getPlaying",
                percent: "getPlayingPercent",
                playing: "isPlaying",
                loading: "isLoading",
                allSongs: "getAllSongs"
            })),
            methods: {
                numberHandle: function(t) {
                    return t > 1e3 ? "".concat(Number(t / 1e3).toFixed(1), "k") : t
                },
                getBr: function(t) {
                    return t > 32e4 ? "无损": "".concat(parseInt(t / 1e3), "k")
                },
                changeUrlQuery: m["a"]
            }
        },
        F = q,
        V = (n("3058"), Object(L["a"])(F, Q, R, !1, null, "869e8450", null)),
        Y = V.exports,
        H = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "operation-dialog-container"
            },
            [n("el-dialog", {
                attrs: {
                    title: "删除",
                    visible: t.showDelSong,
                    width: "30%"
                },
                on: {
                    "update:visible": function(e) {
                        t.showDelSong = e
                    }
                }
            },
            [n("span", [t._v("从歌单中删除？")]), n("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            },
            [n("el-button", {
                on: {
                    click: function(e) {
                        return t.handelPlayList(!1)
                    }
                }
            },
            [t._v("取 消")]), n("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        return t.handelPlayList(!0)
                    }
                }
            },
            [t._v("确 定")])], 1)]), n("el-dialog", {
                attrs: {
                    title: "添加到 " + (t.add2ListId ? t.showList.obj[t.add2ListId].name: ""),
                    visible: t.showAddSong,
                    width: "30%"
                },
                on: {
                    "update:visible": function(e) {
                        t.showAddSong = e
                    }
                }
            },
            [n("div", {
                staticClass: "add-2-list hide-scroll"
            },
            t._l(t.showList.mine, (function(e, a) {
                return n("div", {
                    key: "list-" + a,
                    class: "list-item " + (t.add2ListId === a && "selected"),
                    on: {
                        click: function(e) {
                            t.add2ListId = a
                        }
                    }
                },
                [t._v("\n        " + t._s(t.showList.obj[a].name) + "\n      ")])
            })), 0), n("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            },
            [n("el-button", {
                on: {
                    click: function(e) {
                        return t.handelPlayList(!1)
                    }
                }
            },
            [t._v("取 消")]), n("el-button", {
                attrs: {
                    type: "primary",
                    disabled: !t.add2ListId
                },
                on: {
                    click: function(e) {
                        return t.handelPlayList(!0)
                    }
                }
            },
            [t._v("确 定")])], 1)])], 1)
        },
        W = [];
        function $(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function z(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? $(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var K = {
            name: "Operation",
            data: function() {
                return {
                    showDelSong: !1,
                    showAddSong: !1,
                    add2ListId: "",
                    showList: {}
                }
            },
            computed: z({},
            Object(p["b"])({
                operation: "getOperation",
                userList: "getUserList",
                qUserList: "getQUserList",
                allList: "getAllList",
                user: "getUser",
                allSongs: "getAllSongs"
            })),
            watch: {
                operation: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.data,
                    n = t.type;
                    if (e) {
                        var a = this.allSongs[e.tracks].platform,
                        r = this.user;
                        switch (this.platform = a, a) {
                        case "qq":
                            if ("1" !== s["a"].get("haveQCookie")) return this.$message.warning("请先去设置页设置好 Cookie");
                            break;
                        case "163":
                            if (!r || !r.userId) return this.$message.warning("请先登录");
                            break;
                        default:
                            return
                        }
                        switch (n) {
                        case "DEL_SONG":
                            this.showDelSong = !0;
                            break;
                        case "ADD_SONG_2_LIST":
                            this.showList = this.userList[a],
                            this.showAddSong = !0;
                            break
                        }
                    }
                }
            },
            methods: {
                clearOperation: function() {
                    this.showDelSong = !1,
                    this.showAddSong = !1,
                    this.add2ListId = "",
                    this.$store.dispatch("setOperation", {})
                },
                handelPlayList: function() {
                    var t = Object(l["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a, r, i, o, s, c, u, l, d, p, m, g = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                            case 0:
                                this.add2ListId = this.add2ListId || this.operation.data.pid,
                                n = this.platform,
                                a = this.add2ListId,
                                r = this.operation,
                                i = this.userList,
                                o = this.allSongs,
                                s = this.allList,
                                c = r.type,
                                u = r.data,
                                e && (l = z({},
                                u), d = "PLAYLIST_TRACKS", "ADD_SONG_2_LIST" === c && (l.pid = a), l.pid = l.pid.replace("".concat(n, "_"), ""), l.tracks = l.tracks.replace("".concat(n, "_"), ""), "qq" === n && (d = "ADD_SONG_2_LIST" === c ? "QQ_SONG_LIST_ADD": "QQ_SONG_LIST_REMOVE", l.dirid = i.qq.obj["qq_".concat(l.pid)].dirid, l.mid = l.tracks, l.id = o[u.tracks].songid), p = {
                                    qq: "操作失败",
                                    163 : "操作失败：可能是歌曲下架了"
                                } [n], m = function() {
                                    g.$message.success("操作成功！");
                                    var t = s[a] || [];
                                    "ADD_SONG_2_LIST" === r.type ? t.unshift(r.data.tracks) : "DEL_SONG" === r.type && (t = t.filter((function(t) {
                                        return t !== r.data.tracks
                                    }))),
                                    g.$store.dispatch("updateList", {
                                        songs: t,
                                        listId: a
                                    })
                                },
                                Object(f["c"])({
                                    api: d,
                                    data: l
                                }).then((function(t) {
                                    return m()
                                }), (function(t) {
                                    var e = p;
                                    if ("163" === n) {
                                        if (t.data.body && 200 === t.data.body.code) return m();
                                        e = t.data.message || t.data.body && t.data.body.message || e
                                    }
                                    g.$message.error(e)
                                }))),
                                this.clearOperation();
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        }), t, this)
                    })));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                } ()
            }
        },
        J = K,
        X = (n("7e6d"), Object(L["a"])(J, H, W, !1, null, "4de05a01", null)),
        Z = X.exports,
        tt = n("f503");
        function et(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function nt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? et(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var at = {
            name: "App",
            components: {
                Player: I,
                PageLeft: U,
                Playing: Y,
                Operation: Z
            },
            data: function() {
                return {
                    defaultActive: "/",
                    pageWidth: window.innerWidth,
                    pageHeight: window.innerHeight
                }
            },
            computed: nt({},
            Object(p["b"])({
                allSongs: "getAllSongs",
                showCover: "isShowCoverImg",
                mode: "getMode"
            })),
            created: function() {
                window.VUE_APP = this,
                window.QUERY_QQ_TIMES = 1,
                s["a"].set("haveQCookie", "0");
                var t = document.cookie.match(/\suin=([^;]+)(;|$)/);
                t = t ? t[1] : "";
                var e = window.location.href.match(/q=(\d+)/);
                t = e ? e[1] : t,
                window.location.href.indexOf("q=") > -1 && (document.cookie = "uin=".concat(t), window.location = "http://".concat(window.location.host, "/#/")),
                t && "0" !== (s["a"].get("openSetQCookie") || "0") && Object(f["f"])(t),
                Object(f["n"])(),
                /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && this.$store.dispatch("updateMode", "mobile"),
                this.defaultActive = window.location.hash.split("/")[1];
                navigator.userAgent.toLowerCase(),
                /macintosh|mac os x/i.test(navigator.userAgent);
                s["a"].setDefault({
                    listen_size: "size320",
                    down_size: "high",
                    down_high: "sizeflac",
                    volume: 1,
                    download_info: JSON.stringify({
                        count: 0,
                        list: []
                    }),
                    orderType: "liebiao",
                    key_code_map: JSON.stringify({
                        PLAY_NEXT: "39",
                        PLAY_PREV: "37",
                        VOLUME_UP: "38",
                        VOLUME_DOWN: "40",
                        PLAY: "32",
                        QUIT_SIMPLE: "27",
                        TO_SIMPLE: ""
                    }),
                    openSetQCookie: 0,
                    showDrawMusic: "1",
                    drawMusicType: 1,
                    downMusicName: "0",
                    SHOW_SIMPLE_COVER: 1,
                    PLAY_MUSIC_FROM_PLAYLIST: "1",
                    PLAY_MUSIC_FROM_LIST: "0"
                }),
                this.$store.dispatch("updateDownload", {
                    status: "abortAll"
                }),
                Object(tt["b"])("newInfo")
            },
            mounted: function() {
                var t = this;
                window.onresize = function() {
                    t.pageWidth = window.innerWidth,
                    t.pageHeight = window.innerHeight
                }
            },
            methods: {}
        },
        rt = at,
        it = (n("5c0b"), Object(L["a"])(rt, r, i, !1, null, null, null)),
        ot = it.exports,
        st = n("3211"),
        ct = function() {
            return Promise.all([n.e("chunk-2d207ecb"), n.e("chunk-ebd8d1ea")]).then(n.bind(null, "1511"))
        },
        ut = function() {
            return Promise.all([n.e("chunk-2d207ecb"), n.e("chunk-3faf0d6f")]).then(n.bind(null, "2d3b"))
        },
        lt = function() {
            return n.e("chunk-3790e25e").then(n.bind(null, "fddd"))
        },
        dt = function() {
            return n.e("chunk-6e633168").then(n.bind(null, "c2f4"))
        },
        pt = function() {
            return n.e("chunk-15443bef").then(n.bind(null, "7f43"))
        },
        ft = function() {
            return Promise.all([n.e("chunk-2d207ecb"), n.e("chunk-86bbcc0a")]).then(n.bind(null, "2d0c"))
        },
        mt = function() {
            return n.e("chunk-40bcd0de").then(n.bind(null, "fff8"))
        },
        gt = function() {
            return n.e("chunk-812a165c").then(n.bind(null, "ee18"))
        },
        ht = function() {
            return n.e("chunk-17907b12").then(n.bind(null, "f820"))
        },
        bt = function() {
            return n.e("chunk-3a017ba2").then(n.bind(null, "3971"))
        },
        yt = function() {
            return n.e("chunk-2d0b1fd8").then(n.bind(null, "21cf"))
        },
        vt = function() {
            return n.e("chunk-6bc2fd7e").then(n.bind(null, "f138"))
        },
        wt = function() {
            return n.e("chunk-350f7b12").then(n.bind(null, "c5fc"))
        },
        Ot = function() {
            return n.e("chunk-81504130").then(n.bind(null, "4ef5"))
        },
        _t = function() {
            return n.e("chunk-1e508f45").then(n.bind(null, "6e7a"))
        };
        a["default"].use(st["a"]);
        var St = new st["a"]({
            routes: [{
                path: "/simple",
                name: "simple",
                component: vt
            },
            {
                path: "/setQCookie",
                name: "setQCookie",
                component: yt
            },
            {
                path: "/singer",
                name: "singer",
                component: pt
            },
            {
                path: "/recommend",
                name: "recommend",
                component: lt
            },
            {
                path: "/comment",
                name: "comment",
                component: ft
            },
            {
                path: "/",
                name: "lyric",
                component: mt
            },
            {
                path: "/user",
                name: "user",
                component: ct
            },
            {
                path: "/playlist/detail",
                name: "playlistdetail",
                component: dt,
                meta: {
                    title: ""
                }
            },
            {
                path: "/playlist",
                name: "playlist",
                component: lt,
                meta: {
                    title: "我的歌单"
                }
            },
            {
                path: "/search",
                name: "search",
                component: ut,
                meta: {
                    title: "搜索"
                }
            },
            {
                path: "/album",
                name: "album",
                component: gt
            },
            {
                path: "/about",
                name: "About",
                component: ht
            },
            {
                path: "/download",
                name: "Download",
                component: bt
            },
            {
                path: "/mv",
                name: "Mv",
                component: wt
            },
            {
                path: "/setting",
                name: "Setting",
                component: Ot
            },
            {
                path: "/feedback",
                name: "Feedback",
                component: _t
            }]
        });
        St.beforeEach((function(t, e, n) {
            var a = window.VUE_APP;
            if (!a || !a.$store) return n();
            var r = a.$store.dispatch;
            switch (["Simple", "Mv"].forEach((function(e) {
                t.name !== e && a.$store.getters.getMode === e.toLowerCase() && r("updateMode", "")
            })), t.name) {
            case "user":
            case "Download":
            case "About":
            case "Mv":
            case "Feedback":
                r("updateShowCover", !1);
                break;
            default:
                r("updateShowCover", !0)
            }
            n()
        }));
        var Pt, At = St,
        Et = (n("3880"), n("b705")),
        Lt = n.n(Et),
        kt = (n("8aa9"), {
            mode: "",
            allSongs: {},
            allList: {},
            user: {},
            userList: {},
            qUserList: {
                list: [],
                obj: {}
            },
            recommendList: {},
            search: {
                type: 0,
                total: 0,
                pageNo: 1,
                keywords: "",
                platform: "163"
            },
            playingList: {
                raw: [],
                trueList: [],
                random: [],
                history: [],
                index: 0,
                map: {}
            },
            playNow: {
                al: {},
                ar: []
            },
            playingPercent: 0,
            showCoverImg: !0,
            playingListId: "",
            heartMode: !1,
            operation: {},
            playing: !1,
            playerInfo: {
                duration: 0,
                current: 0,
                paused: !0
            },
            commentInfo: {
                type: 0,
                id: 0,
                val: "",
                title: "",
                open: !1
            },
            loading: !1,
            downloadInfo: s["a"].get("download_info", !0, JSON.stringify({
                count: 0,
                list: []
            })),
            isPersonFM: !1,
            favSongMap: {
                163 : {},
                qq: {}
            }
        }),
        It = (n("e697"), n("9dd9"), n("c0c3"), "SET_OPERATION"),
        Ct = "SET_RECOMMEND_LIST",
        Mt = "SET_LOADING",
        jt = "QUERY_163_LIST",
        xt = "UPDATE_LIST",
        Dt = "SET_USER",
        Nt = "SET_USER_LIST",
        Tt = "UPDATE_SEARCH",
        Ut = "UPDATE_PLAYING_LIST",
        Qt = "UPDATE_RANDOM_LIST",
        Rt = "UPDATE_PLAYING_PERCENT",
        Gt = "UPDATE_SHOW_COVER",
        Bt = "CHANGE_SEARCH_QUERY",
        qt = "CHANGE_SHOW_COMMENT",
        Ft = "SHOW_DOWN_SETTING",
        Vt = "UPDATE_SHOW_LIST",
        Yt = "UPDATE_ALL_SONGS",
        Ht = "SEARCH_MUSIC",
        Wt = "UPDATE_RANDOM_HISTORY",
        $t = "UPDATE_PLAYER_INFO",
        zt = "SET_DOWNLOADING",
        Kt = "UPDATE_SONG_DETAIL",
        Jt = "PLAY_NEXT",
        Xt = "PLAY_PREV",
        Zt = "UPDATE_PLAYING_STATUS",
        te = "UPDATE_PLAY_NOW",
        ee = "UPDATE_COMMENT_INFO",
        ne = "UPDATE_DOWNLOAD",
        ae = "PERSON_FM",
        re = "UPDATE_Q_USER_LIST",
        ie = "UPDATE_MODE",
        oe = "UPDATE_FAV_SONG_MAP";
        n("7103");
        function se(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function ce(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? se(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var ue = (Pt = {},
        Object(o["a"])(Pt, It, (function(t, e) {
            t.operation = e
        })), Object(o["a"])(Pt, Dt, (function(t, e) {
            t.user = e
        })), Object(o["a"])(Pt, Tt, (function(t, e) {
            t.search = ce(ce({},
            t.search), e)
        })), Object(o["a"])(Pt, Rt, (function(t, e) {
            t.playingPercent = e,
            t.downloading = !1
        })), Object(o["a"])(Pt, jt, (function(t, e) {
            var n = t.allList,
            a = e.songs,
            r = void 0 === a ? [] : a,
            i = e.more,
            o = void 0 !== i && i,
            s = e.listId;
            s && (n[s] = o ? [].concat(Object(h["a"])(n[s]), Object(h["a"])(r)) : r, t.allList = ce({},
            n))
        })), Object(o["a"])(Pt, xt, (function(t, e) {
            var n = t.allList,
            a = e.songs,
            r = void 0 === a ? [] : a,
            i = e.more,
            o = void 0 !== i && i,
            s = e.listId;
            s && (n[s] = o ? [].concat(Object(h["a"])(n[s]), Object(h["a"])(r)) : r, t.allList = ce({},
            n))
        })), Object(o["a"])(Pt, Nt, (function(t, e) {
            t.userList = ce(ce({},
            t.userList), e)
        })), Object(o["a"])(Pt, Ct, (function(t, e) {
            t.recommendList = ce(ce({},
            t.recommendList), e)
        })), Object(o["a"])(Pt, Bt, (function(t, e) {
            t.searchQuery = ce(ce({},
            t.searchQuery), e)
        })), Object(o["a"])(Pt, qt, (function(t) {
            t.showComment = !t.showComment
        })), Object(o["a"])(Pt, Vt, (function(t, e) {
            e.more ? t.showList = [].concat(Object(h["a"])(t.showList), Object(h["a"])(e.list)) : t.showList = e.list,
            e.dissid && (t.sysSongs[e.dissid] = t.showList)
        })), Object(o["a"])(Pt, Yt, (function(t, e) {
            var n = t.allSongs,
            a = t.playNow,
            r = t.playingList,
            i = (a.platform, a.aId);
            t.allSongs = ce(ce({},
            t.allSongs), e),
            a.aId && JSON.stringify(a) !== JSON.stringify(n[i]) && (t.playNow = n[i]),
            y.hasDuplicate(Object.keys(e), r.raw.join(",").split(",")) && (r.trueList = r.raw.filter((function(e) {
                return t.allSongs[e] && t.allSongs[e].pUrl
            })), window.VUE_APP.$store.dispatch("updateRandomList"))
        })), Object(o["a"])(Pt, Ht, (function(t, e) {
            var n = e.search,
            a = t.userList,
            r = a.selected,
            i = r.songs || [],
            o = new RegExp(n.replace(/\s/g, ""), "i");
            t.showList = i.filter((function(t) {
                return t.name.replace(/\s/g, "").match(o) || t.ar.map((function(t) {
                    return t.name
                })).join("").replace(/\s/g, "").match(o) || t.al.name.replace(/\s/g, "").match(o)
            }))
        })), Object(o["a"])(Pt, Xt, (function(t) {
            var e = t.playingList,
            n = t.allSongs,
            a = t.playNow,
            r = e.history,
            i = e.index,
            o = e.trueList,
            c = e.random,
            u = a.aId,
            l = s["a"].get("orderType");
            if (i > 0) {
                if (e.index -= 1, !r[e.index] || !n[r[e.index]]) return;
                return t.playNow = n[r[e.index]]
            }
            var d = 0,
            p = "suiji" === l ? c: o;
            d = p.indexOf(u),
            d -= 1,
            -1 === d && (d = p.length - 1),
            p[d] && n[p[d]] && (t.playNow = n[p[d]], t.playingList.history.unshift(t.playNow.aId))
        })), Object(o["a"])(Pt, Jt, (function(t) {
            var e = t.playingList,
            n = t.allSongs,
            a = t.playNow,
            r = s["a"].get("orderType"),
            i = e.history,
            o = e.index,
            c = e.trueList,
            u = e.random,
            l = a.aId;
            if (e.index += 1, o < i.length - 1) return t.playNow = n[i[e.index]];
            e.history[e.history.length - 1] !== l && e.history.push(l);
            var d = 0;
            if (1 === c.length) return window.VUE_APP.$message.info("还是这首！"),
            void window.pDom.play();
            switch (r) {
            case "suiji":
                return d = u.indexOf(l),
                d += 1,
                d === c.length && (d = 0),
                d !== c.length - 1 && 0 !== d || window.VUE_APP.$store.dispatch("updateRandomList"),
                t.playNow = n[u[d]];
            default:
                return d = c.indexOf(l),
                d += 1,
                d === c.length && (d = 0),
                t.playNow = n[c[d]]
            }
        })), Object(o["a"])(Pt, Wt, (function(t, e) {
            t.randomHistory = e || {
                list: [],
                index: -1
            }
        })), Object(o["a"])(Pt, $t, (function(t, e) {
            t.playerInfo = ce(ce({},
            t.playerInfo), e)
        })), Object(o["a"])(Pt, zt, (function(t, e) {
            t.downloading = e
        })), Object(o["a"])(Pt, Kt, (function(t, e) {
            var n = e.aId;
            t.allSongs[n] = ce(ce({},
            t.allSongs[n] || {}), e),
            t.playNow && n !== t.playNow.aId || (t.playNow = t.allSongs[n]),
            t.allSongs = ce({},
            t.allSongs),
            t.playingList.raw.indexOf(e) > -1 && (t.playingList.trueList = t.playingList.raw.filter((function(e) {
                return t.allSongs[e].pUrl
            })), window.VUE_APP.$store.dispatch("updateRandomList"))
        })), Object(o["a"])(Pt, Zt, (function(t, e) {
            t.playing = e
        })), Object(o["a"])(Pt, te, (function(t, e) {
            var n = t.playingList,
            a = t.playNow;
            t.isPersonFM;
            e && (a.aId && (n.history.push(a.aId), n.index += 1), t.playNow = e)
        })), Object(o["a"])(Pt, Ut, (function(t, e) {
            var n = e.list,
            a = e.more,
            r = e.listId,
            i = e.heart,
            o = void 0 !== i && i,
            s = t.playingList,
            c = t.allSongs;
            a ? s.raw = [].concat(Object(h["a"])(s.raw), Object(h["a"])(n)) : (s.raw = n, s.history = [], s.index = 0),
            t.isPersonFM = !1,
            t.playingListId = r,
            t.heartMode = o,
            s.raw = y.delDuplicate(s.raw),
            s.trueList = s.raw.filter((function(t) {
                return c[t] && c[t].pUrl
            })),
            window.VUE_APP.$store.dispatch("updateRandomList")
        })), Object(o["a"])(Pt, Qt, (function(t) {
            for (var e, n = t.playingList,
            a = t.playNow,
            r = Object(h["a"])(n.trueList), i = {},
            o = r.length, s = o - 1; s > 1; s--) {
                var c = Math.floor(Math.random() * s);
                e = r[c],
                r[c] = r[s],
                r[s] = e,
                i[e] = !0
            }
            var u = r.indexOf(a.aId);
            u >= 0 && (e = r[0], r[0] = r[u], r[u] = e),
            n.random = Object(h["a"])(r),
            n.map = i
        })), Object(o["a"])(Pt, Gt, (function(t, e) {
            t.showCoverImg = e
        })), Object(o["a"])(Pt, ee, (function(t, e) {
            t.commentInfo = e
        })), Object(o["a"])(Pt, ne, (function(t, e) {
            if (e) {
                var n = e.id,
                a = e.aId,
                r = e.p,
                i = e.l,
                o = e.t,
                c = e.ajax,
                u = e.status,
                l = e.errMsg,
                p = e.name,
                f = e.songId,
                m = e.br,
                g = e.from,
                h = e.songCid,
                b = e.song,
                y = t.downloadInfo,
                v = y.list.find((function(t) {
                    return t.id === n
                })),
                w = (new Date).getTime();
                switch (u) {
                case "init":
                    y.list.unshift({
                        status:
                        u,
                        from: g,
                        aId: a,
                        id: n,
                        startTime: w,
                        ajax: c,
                        name: p,
                        songId: f,
                        songCid: h,
                        br: m,
                        song: b
                    }),
                    y.count++;
                    break;
                case "initError":
                    y.list.unshift({
                        status:
                        "error",
                        from: g,
                        aId: a,
                        id: n,
                        errMsg: l,
                        name: p,
                        song: b,
                        songId: f,
                        songCid: h,
                        br: m,
                        startTime: w,
                        endTime: w
                    });
                    break;
                case "success":
                    v.status = "success",
                    v.endTime = w,
                    delete v.ajax,
                    delete v.p,
                    delete v.t,
                    delete v.l;
                    break;
                case "error":
                    v.errMsg = l || "未知错误",
                    v.endTime = w,
                    delete v.ajax,
                    delete v.p,
                    delete v.t,
                    delete v.l;
                    break;
                case "progress":
                    v.p = Object(d["a"])(100 * r, 2),
                    v.t = o,
                    v.l = i,
                    v.status = "progress";
                    break;
                case "clear":
                    y.list = y.list.filter((function(t) {
                        return ["init", "progress"].indexOf(t.status) > 0
                    }));
                    break;
                case "clearError":
                    y.list = y.list.filter((function(t) {
                        return "error" !== t.status
                    }));
                    break;
                case "abort":
                    v.ajax && v.ajax.abort && v.ajax.abort(),
                    v.errMsg = "主动结束",
                    v.endTime = w,
                    v.status = "error",
                    delete v.ajax,
                    delete v.p,
                    delete v.t,
                    delete v.l;
                    break;
                case "abortAll":
                    y.list.forEach((function(t) { ["init", "progress"].indexOf(t.status) >= 0 && (t.ajax && t.ajax.abort && t.ajax.abort(), t.errMsg = "主动结束", t.status = "error", t.endTime = w, delete t.ajax, delete t.p, delete t.t, delete t.l)
                    }));
                    break;
                default:
                    break
                }
                y.count = y.list.filter((function(t) {
                    return ["init", "progress"].indexOf(t.status) > -1
                })).length,
                s["a"].set("download_info", y, !0),
                t.downloadInfo = ce({},
                y)
            } else {
                var O = s["a"].get("download_info", !0);
                O.count = 0,
                O.list.forEach((function(t) {
                    "progress" === t.status && (t.status = "error", t.errMsg = "下载被中断了", delete t.ajax, delete t.p, delete t.t, delete t.l)
                })),
                t.downloadInfo = O
            }
        })), Object(o["a"])(Pt, ae, (function(t, e) {
            var n = t.playingList;
            if (t.isPersonFM) {
                var a = y.delDuplicate(n.raw || [], e);
                n.raw = a,
                n.trueList = a,
                n.random = a
            } else n.raw = e,
            n.history = [],
            n.index = 0,
            n.random = e,
            n.trueList = e;
            t.playingListId = "",
            t.isPersonFM = !0
        })), Object(o["a"])(Pt, re, (function(t, e) {
            t.qUserList = e
        })), Object(o["a"])(Pt, ie, (function(t, e) {
            t.mode = e
        })), Object(o["a"])(Pt, Mt, (function(t, e) {
            t.loading = e
        })), Object(o["a"])(Pt, oe, (function(t, e) {
            t.favSongMap = ce(ce({},
            t.favSongMap), e)
        })), Pt),
        le = {
            getMode: function(t) {
                return t.mode
            },
            getQUserList: function(t) {
                return t.qUserList
            },
            isHearMode: function(t) {
                return t.heartMode
            },
            getPlayingList: function(t) {
                return t.playingList
            },
            getPlayingListId: function(t) {
                return t.playingListId
            },
            getOperation: function(t) {
                return t.operation
            },
            getUser: function(t) {
                return t.user
            },
            getUserList: function(t) {
                return t.userList
            },
            getSearch: function(t) {
                return t.search
            },
            getAllList: function(t) {
                return t.allList
            },
            getRecommendList: function(t) {
                return t.recommendList
            },
            getPlayingPercent: function(t) {
                return t.playingPercent
            },
            getRadioInfo: function(t) {
                return t.radioInfo
            },
            getAllSongs: function(t) {
                return t.allSongs
            },
            isDownloading: function(t) {
                return t.downloading
            },
            getPlaying: function(t) {
                return t.playNow
            },
            isPlaying: function(t) {
                return t.playing
            },
            isLoading: function(t) {
                return t.loading
            },
            isShowCoverImg: function(t) {
                return t.showCoverImg
            },
            getCommentInfo: function(t) {
                return t.commentInfo
            },
            getDownloadInfo: function(t) {
                return t.downloadInfo
            },
            isPersonFM: function(t) {
                return t.isPersonFM
            },
            getFavSongMap: function(t) {
                return t.favSongMap
            }
        },
        de = {
            setOperation: function(t, e) {
                var n = t.commit;
                n(It, e)
            },
            setRecommendList: function(t, e) {
                var n = t.commit;
                n(Ct, e)
            },
            setUser: function(t, e) {
                var n = t.commit;
                n(Dt, e)
            },
            query163List: function(t, e) {
                var n = t.commit;
                n(jt, e)
            },
            updateList: function(t, e) {
                var n = t.commit;
                n(xt, e)
            },
            setUserList: function(t, e) {
                var n = t.commit;
                n(Nt, e)
            },
            updateSearch: function(t, e) {
                var n = t.commit;
                n(Tt, e)
            },
            updatePlayingList: function(t, e) {
                var n = t.commit;
                n(Ut, e)
            },
            updateRandomList: function(t) {
                var e = t.commit;
                e(Qt)
            },
            updatePlayingPercent: function(t, e) {
                var n = t.commit;
                n(Rt, e)
            },
            updateShowCover: function(t, e) {
                var n = t.commit;
                n(Gt, e)
            },
            updateDownSettingDialog: function(t, e) {
                var n = t.commit;
                n(Ft, e)
            },
            updateRandomHistory: function(t, e) {
                var n = t.commit;
                n(Wt, e)
            },
            setDownLoading: function(t, e) {
                var n = t.commit;
                n(zt, e)
            },
            updateSongDetail: function(t, e) {
                var n = t.commit;
                n(Kt, e)
            },
            playPrev: function(t) {
                var e = t.commit;
                e(Xt)
            },
            playNext: function(t) {
                var e = t.commit;
                e(Jt)
            },
            updatePlayNow: function(t, e) {
                var n = t.commit;
                n(te, e)
            },
            updateAllSongs: function(t, e) {
                var n = t.commit;
                n(Yt, e)
            },
            updatePlayingStatus: function(t, e) {
                var n = t.commit;
                n(Zt, e)
            },
            updateCommentInfo: function(t, e) {
                var n = t.commit;
                n(ee, e)
            },
            updateDownload: function(t, e) {
                var n = t.commit;
                n(ne, e)
            },
            setPersonFM: function(t, e) {
                var n = t.commit;
                n(ae, e)
            },
            updateQUserList: function(t, e) {
                var n = t.commit;
                n(re, e)
            },
            updateMode: function(t, e) {
                var n = t.commit;
                n(ie, e)
            },
            setLoading: function(t, e) {
                var n = t.commit;
                n(Mt, e)
            },
            updateFavSongMap: function(t, e) {
                var n = t.commit;
                n(oe, e)
            }
        };
        a["default"].use(p["a"]);
        var pe = new p["a"].Store({
            state: kt,
            mutations: ue,
            getters: le,
            actions: de
        });
        a["default"].use(Lt.a, {
            size: "small"
        }),
        new a["default"]({
            store: pe,
            router: At,
            render: function(t) {
                return t(ot)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, e, n) {
        "use strict";
        var a = n("517b"),
        r = n.n(a);
        r.a
    },
    "6e0e": function(t, e, n) {
        t.exports = n.p + "img/bg-1.f8d895b2.png"
    },
    "74c9": function(t, e, n) {
        "use strict";
        var a = n("f650"),
        r = n.n(a);
        r.a
    },
    "7e6d": function(t, e, n) {
        "use strict";
        var a = n("c141"),
        r = n.n(a);
        r.a
    },
    "8aa9": function(t, e, n) {},
    aa67: function(t, e, n) {
        "use strict";
        n("e10e");
        var a = n("f7f9"),
        r = (n("6d57"), window.localStorage),
        i = {
            get: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if ("string" === typeof t) {
                    var a = r.getItem(t) || n;
                    return e && (a = JSON.parse(a)),
                    a
                }
                var o = {};
                return t.forEach((function(t) {
                    o[t] = i.get(t, e, n)
                })),
                o
            },
            set: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("object" === Object(a["a"])(t)) Object.keys(t).forEach((function(n) {
                    i.set(n, t[n], e)
                }));
                else if ("string" === typeof t) {
                    var o = e;
                    n && (o = JSON.stringify(o)),
                    r.setItem(t, o)
                }
            },
            setDefault: function(t, e) {
                "object" === Object(a["a"])(t) ? Object.keys(t).forEach((function(e) {
                    return i.setDefault(e, t[e])
                })) : "string" === typeof t && (i.get(t) || i.set(t, e))
            }
        };
        e["a"] = i
    },
    c141: function(t, e, n) {},
    ceb6: function(t, e, n) {
        "use strict";
        n.d(e, "n", (function() {
            return b
        })),
        n.d(e, "j", (function() {
            return v
        })),
        n.d(e, "a", (function() {
            return w
        })),
        n.d(e, "i", (function() {
            return _
        })),
        n.d(e, "p", (function() {
            return S
        })),
        n.d(e, "l", (function() {
            return A
        })),
        n.d(e, "m", (function() {
            return E
        })),
        n.d(e, "g", (function() {
            return L
        })),
        n.d(e, "e", (function() {
            return k
        })),
        n.d(e, "d", (function() {
            return I
        })),
        n.d(e, "h", (function() {
            return M
        })),
        n.d(e, "k", (function() {
            return j
        })),
        n.d(e, "f", (function() {
            return x
        })),
        n.d(e, "b", (function() {
            return D
        })),
        n.d(e, "o", (function() {
            return N
        }));
        n("5ab2"),
        n("4fd7"),
        n("e697"),
        n("de78"),
        n("cc57"),
        n("9a33");
        var a = n("5748"),
        r = (n("163d"), n("f548"), n("ce3c")),
        i = (n("9e76"), n("6a61"), n("cf7f")),
        o = (n("6d57"), n("e10e"), {
            SEARCH: "/apiMix/search",
            LYRIC: "/apiMix/lyric",
            ALBUM: "/apiMix/album",
            BATCH_URL: "/apiMix/url/batch",
            PLAYLIST: "/apiMix/playlist",
            USER_PLAYLIST: "/apiMix/playlist/user",
            DAILY_PLAYLIST: "/apiMix/playlist/daily",
            RECOMMEND_PLAYLIST: "/apiMix/playlist/recommend",
            SINGER_INFO: "/apiMix/singer",
            SINGER_ALBUM: "/apiMix/singer/album",
            SINGER_SIM: "/apiMix/singer/sim",
            SINGER_SONG: "/apiMix/singer/song",
            SONG_INFO: "/apiMix/song",
            SONG_RECORD: "/apiMix/song/record",
            SINGLE_URL: "/apiMix/url",
            SONG_FIND: "/apiMix/song/find",
            GET_HEART_MODE: "/apiMix/playlist/heart",
            MV: "/apiMix/mv",
            "163_SEARCH": "/api/search",
            "163_LOGIN_PHONE": "/api/login/cellphone",
            "163_LOGOUT": "/api/logout",
            "163_LOGIN_EMAIL": "/api/login",
            LOGIN_STATUS: "/api/login/status",
            USER_LIST: "/api/user/playlist",
            LIST_DETAIL: "/api/playlist/detail",
            SONG_DETAIL: "/api/song/detail",
            SONG_URL: "/api/song/url",
            GET_LYRIC: "/api/lyric",
            CAPTCH_SENT: "/api/captch/sent",
            CAPTCH_VERIFY: "/api/captch/verify",
            GET_USER_DETAIL: "/api/user/detail",
            MUSIC_COMMENTS: "/api/comment/music",
            GET_QQ_VKEY: "//u.y.qq.com/cgi-bin/musicu.fcg?callback=jQuery331015138042840240584_1544498679284&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%225339940689%22%2C%22songmid%22%3A%5B%220039MnYb0qxYhV%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%22%22%2C%22platform%22%3A%2220%22%7D%7D%7D&jsonpCallback=getQQMusicUrl&callback=getQQMusicUrl&_=1544498679292",
            DAILY_RECOMMEND_SONGS: "/api/recommend/songs",
            DAILY_RECOMMEND_LIST: "/api/recommend/resource",
            RECOMMEND_LIST: "/api/personalized",
            LIKE_MUSIC: "/api/like",
            LIKE_COMMENT: "/api/comment/like",
            PLAYLIST_TRACKS: "/api/playlist/tracks",
            GET_SINGER_DESC: "/api/artist/desc",
            GET_SINGER_SONGS: "/api/artists",
            GET_SINGER_ALBUMS: "/api/artist/album",
            GET_ALBUM: "/api/album",
            COMMENT: "/api/comment",
            SIMI_ARTIST: "/api/simi/artist",
            SCROBBLE: "/api/scrobble",
            GET_USER_RECORD: "/api/user/record",
            GET_FOLLOWS: "/api/user/follows",
            GET_FOLLOWEDS: "/api/user/followeds",
            GET_DJ_CATE_LIST: "/api/dj/catelist",
            GET_DJ_RECOMMEND: "/api/dj/recommend/type",
            GET_DJ_DETAIL: "/api/dj/detail",
            GET_DJ_SONGS: "api/dj/program",
            GET_PERSON_FM: "api/personal_fm",
            GET_MV_INFO: "api/mv/detail",
            GET_SIMI_MV: "api/simi/mv",
            SUBSCRIBE_PLAYLIST: "api/playlist/subscribe",
            QQ_SEARCH: "apiQ/search",
            QQ_VKEY: "apiQ/vkey",
            QQ_LYRIC: "apiQ/lyric",
            QQ_GET_COMMENT: "apiQ/comment",
            QQ_GET_URLS: "apiQ/song/urls",
            QQ_SONG_FIND: "apiQ/song/find",
            QQ_SONG_FINDS: "apiQ/song/finds",
            QQ_SET_COOKIE: "apiQ/user/setCookie",
            QQ_USER_DETAIL: "apiQ/user/detail",
            QQ_LIST_DETAIL: "apiQ/songlist",
            QQ_SINGER_DESC: "apiQ/singer/desc",
            QQ_SINGER_SIM: "apiQ/singer/sim",
            QQ_SINGER_SONGS: "apiQ/singer/songs",
            QQ_SINGER_ALBUMS: "apiQ/singer/album",
            QQ_ALBUM: "apiQ/album",
            QQ_ALBUM_SONGS: "apiQ/album/songs",
            QQ_SONG_DETAIL: "apiQ/song",
            QQ_MV_INFO: "apiQ/mv",
            QQ_MV_URL: "apiQ/mv/url",
            QQ_DOWN_URL: "apiQ/song/url",
            QQ_RECOMMEND_PLAYLIST: "apiQ/recommend/playlist",
            QQ_GET_COOKIE: "apiQ/user/getCookie",
            QQ_SONG_LIST_MAP: "apiQ/songlist/map",
            QQ_USER_SONG_LIST: "apiQ/user/songlist",
            QQ_SONG_LIST_ADD: "apiQ/songlist/add",
            QQ_SONG_LIST_REMOVE: "apiQ/songlist/remove",
            QQ_COMMENT_LIKE: "apiQ/comment/like",
            QQ_COMMENT_DELETE: "apiQ/comment/del",
            QQ_COMMENT_SEND: "apiQ/comment/send",
            QQ_COLLECTED_SONGLIST: "apiQ/user/collect/songlist",
            QQ_COLLECT_SONGLIST: "apiQ/songlist/collect",
            MIGU_SEARCH: "apiM/search",
            MIGU_URL_GET: "apiM/song/url",
            MIGU_LYRIC: "apiM/lyric",
            MIGU_SINGER_DESC: "apiM/singer/desc",
            MIGU_SINGER_SONGS: "apiM/singer/songs",
            MIGU_SINGER_ALBUMS: "apiM/singer/albums",
            MIGU_ALBUM: "apiM/album",
            MIGU_SONG_INFO: "apiM/song",
            MIGU_PLAYLIST: "apiM/playlist",
            MIGU_RECOMMEND_PLAYLIST: "apiM/recommend/playlist",
            COMMON_GET_FEEDBACK: "apiQ/feedback",
            COMMON_ADD_FEEDBACK: "apiQ/feedback/add",
            COMMON_DELETE_FEEDBACK: "apiQ/feedback/delete",
            163 : "//music.900109.xyz:88/neapi/index.php",
            QQ_SONG_INFO: "//u.y.qq.com/cgi-bin/musicu.fcg",
            QQ_LIST: "//c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg",
            QQ_USER_LIST_DETAIL: "//music.900109.xyz:88/apiQ/getQQListDetail.php",
            QQ_GET_LYRIC: "//music.900109.xyz:88/apiQ/getQQLyricNew.php",
            QQ_RADIO_INFO: "//u.y.qq.com/cgi-bin/musicu.fcg"
        }),
        s = o,
        c = n("aa67"),
        u = n("0828"),
        l = n("1426"),
        d = n("3f0b"),
        p = n("82ae"),
        f = n.n(p);
        function m(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                n.push.apply(n, a)
            }
            return n
        }
        function g(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(n), !0).forEach((function(e) {
                    Object(r["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        f.a.interceptors.response.use((function(t) {
            if (!t.status || 200 != t.status || !t.data || "error" != t.data.status) return t
        }), (function(t) {
            var e = t.config && t.config.url;
            return e ? e.indexOf("/api/login/status") > -1 ? Promise.reject({}) : e.indexOf("/api/user/record") > -1 ? window.VUE_APP.$message.warning("ta 不公开听歌排行哟") : e.indexOf("/api/simi/artist") > -1 ? window.VUE_APP.$message.warning("登录后可查看相似歌手") : Promise.reject(t.response.data) : {
                code: 500
            }
        }));
        var h = function(t, e) {
            var n = t;
            "string" === typeof t && (n = {
                api: t
            });
            var a = n,
            r = a.method,
            i = void 0 === r ? "get": r,
            o = a.api,
            c = a.data,
            u = void 0 === c ? {}: c;
            u._t = t.cache ? 0 : (new Date).getTime(),
            u._p = u._p || e;
            var l = s[o];
            return l += "get" === i ? "?".concat(Object.keys(u).map((function(t) {
                return "".concat(t, "=").concat(encodeURI(u[t]))
            })).join("&")) : "?_t=" + u._t,
            f()({
                method: i,
                url: "" + l,
                data: u,
                headers: {
                    "Host-Check": btoa(Object(d["a"])().str("YYYYMMDD"))
                }
            }).then((function(t) {
                if (t.data = t.data || {},
                200 === t.data.code || 100 === t.data.result) return t.data;
                if (400 !== t.data.result) throw {
                    data: t.data
                };
                window.VUE_APP.$message.error(t.data.data || t.data.errMsg)
            }), (function(t) { (t.msg || t.message) && window.VUE_APP.$message.error(t.msg || t.message)
            }))
        },
        b = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t() {
                var e, n, a, r, i, o, s, l, d, p, f, m, g, b, w, S;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return e = window.VUE_APP,
                        n = e.$store.dispatch,
                        a = Object(u["b"])(),
                        r = a.shareId,
                        i = a.shareCid,
                        o = a.from,
                        s = void 0 === o ? "163": o,
                        O(),
                        r && h({
                            api: "SONG_INFO",
                            data: {
                                id: r,
                                cid: i,
                                _p: s
                            }
                        }).then((function(t) {
                            var e = t.data;
                            return A([e])
                        })).then((function(t) {
                            var a = e.$store.getters.getAllSongs;
                            t[0] && n("updatePlayNow", a[t[0]]),
                            n("updatePlayingList", {
                                list: t
                            })
                        })),
                        t.next = 7,
                        h("LOGIN_STATUS");
                    case 7:
                        return l = t.sent,
                        p = function() {
                            return h({
                                api: "RECOMMEND_PLAYLIST",
                                data: {
                                    login: 0,
                                    _p: 163
                                }
                            }).then((function(t) {
                                var e = t.data;
                                return e[0] && _(e[0].id, "163")
                            }))
                        },
                        l && (n("setUser", l.profile), d = l.profile.userId, p = function() {
                            return y("163")
                        },
                        c["a"].set("uid", d)),
                        t.next = 12,
                        p();
                    case 12:
                        if (f = t.sent, m = f.songs, g = f.listId, f.id, b = e.$store.getters.getAllSongs, r ? m.unshift(r) : n("updatePlayNow", b[m[0]]), n("updatePlayingList", {
                            list: m,
                            listId: g
                        }), !l) {
                            t.next = 25;
                            break
                        }
                        return t.next = 22,
                        v(d, "163");
                    case 22:
                        w = t.sent,
                        S = w.listIds,
                        S[0] && _(S[0], "163");
                    case 25:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function() {
                return t.apply(this, arguments)
            }
        } (),
        y = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e, n) {
                var a, r, i, o;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return a = window.VUE_APP,
                        r = a.$store.dispatch,
                        t.prev = 2,
                        t.next = 5,
                        h("DAILY_PLAYLIST", e);
                    case 5:
                        if (i = t.sent, i.data) {
                            t.next = 9;
                            break
                        }
                        return n || y(e, !0),
                        t.abrupt("return");
                    case 9:
                        return t.next = 11,
                        A(i.data);
                    case 11:
                        return t.t0 = t.sent,
                        t.t1 = "".concat(e, "_daily"),
                        o = {
                            songs: t.t0,
                            listId: t.t1
                        },
                        r("updateList", o),
                        t.abrupt("return", o);
                    case 18:
                        return t.prev = 18,
                        t.t2 = t["catch"](2),
                        console.log("获取日推失败 =。=", t.t2),
                        t.abrupt("return", {
                            songs: [],
                            listId: "".concat(e, "_daily")
                        });
                    case 22:
                    case "end":
                        return t.stop()
                    }
                }), t, null, [[2, 18]])
            })));
            return function(e, n) {
                return t.apply(this, arguments)
            }
        } (),
        v = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e, n) {
                var a, r, i, o, s, u, l, d, p, f, m;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        a = "",
                        r = 0,
                        t.t0 = n,
                        t.next = "163" === t.t0 ? 4 : "qq" === t.t0 ? 6 : 10;
                        break;
                    case 4:
                        return a = c["a"].get("uid"),
                        t.abrupt("break", 10);
                    case 6:
                        return i = document.cookie.match(/\suin=([^;]+)(;|$)/),
                        r = c["a"].get("haveQCookie") || "0",
                        a = i ? i[1] : "",
                        t.abrupt("break", 10);
                    case 10:
                        return o = String(a) === String(e),
                        s = VUE_APP.$store.getters.getUserList,
                        u = VUE_APP.$store.dispatch,
                        t.next = 15,
                        h({
                            api: "USER_PLAYLIST",
                            data: {
                                ownCookie: r,
                                id: e,
                                _p: n
                            }
                        });
                    case 15:
                        return l = t.sent,
                        d = l.data,
                        p = {},
                        f = {},
                        o && (s[n] = {
                            list: [],
                            favId: "",
                            favAId: "",
                            mine: {},
                            sub: {},
                            obj: {}
                        }),
                        m = d.map((function(t) {
                            return o && (s[n].obj[t.listId] = t, f[t.listId] = 1),
                            String(t.userId) === a && (p[t.listId] = 1, delete f[t.listId]),
                            t.listId
                        })),
                        o && d[0] && (s[n].list = m, s[n].favId = d[0].id, s[n].favListId = m[0], s[n].mine = p, s[n].sub = f, u("setUserList", g({},
                        s))),
                        t.abrupt("return", {
                            list: d,
                            listIds: m
                        });
                    case 22:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function(e, n) {
                return t.apply(this, arguments)
            }
        } (),
        w = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t() {
                var e, n;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        if (c["a"].set("haveQCookie", "0"), e = document.cookie.match(/(\s|^)uin=([^;]+)(;|$)/), e = e && e[2] ? e[2].replace(/\D/g, "") : null, e) {
                            t.next = 5;
                            break
                        }
                        return t.abrupt("return", {
                            success: !1,
                            message: "cookie 格式错误"
                        });
                    case 5:
                        return t.prev = 5,
                        t.next = 8,
                        h({
                            api: "QQ_SONG_LIST_MAP",
                            data: {
                                ownCookie: 1
                            }
                        });
                    case 8:
                        return n = t.sent,
                        c["a"].set("qqId", e),
                        c["a"].set("haveQCookie", "1"),
                        t.abrupt("return", {
                            success: !0,
                            data: n
                        });
                    case 14:
                        return t.prev = 14,
                        t.t0 = t["catch"](5),
                        t.abrupt("return", {
                            success: !1,
                            data: t.t0.data
                        });
                    case 17:
                    case "end":
                        return t.stop()
                    }
                }), t, null, [[5, 14]])
            })));
            return function() {
                return t.apply(this, arguments)
            }
        } (),
        O = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t() {
                var e, n, a, r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        if (e = c["a"].get("qqId"), e) {
                            t.next = 4;
                            break
                        }
                        return c["a"].set("haveQCookie", "0"),
                        t.abrupt("return");
                    case 4:
                        return t.next = 6,
                        w();
                    case 6:
                        n = t.sent,
                        a = window.VUE_APP.$store.dispatch,
                        n.success && n.data.data && (r = {},
                        Object.keys(n.data.data.mid || {}).forEach((function(t) {
                            return r["qq_".concat(t)] = 1
                        })), a("updateFavSongMap", {
                            qq: r
                        }), y("qq")),
                        v(e, "qq");
                    case 10:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function() {
                return t.apply(this, arguments)
            }
        } (),
        _ = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e, n) {
                var a, i, o, s, u, l;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return a = VUE_APP.$store.dispatch,
                        i = VUE_APP.$store.getters.getUserList,
                        {
                            163 : c["a"].get("uid"),
                            qq: c["a"].get("qqId")
                        } [n],
                        e = String(e).replace("".concat(n, "_"), ""),
                        t.next = 6,
                        h({
                            api: "PLAYLIST",
                            data: {
                                id: e,
                                _p: n
                            }
                        });
                    case 6:
                        return o = t.sent,
                        s = o.data,
                        u = void 0 === s ? {}: s,
                        l = {},
                        t.next = 12,
                        A(u.list || [], (function(t) {
                            return l[t.aId] = 1
                        }));
                    case 12:
                        return u.songs = t.sent,
                        u.listId = "".concat(n, "_").concat(e),
                        i[n] && i[n].favListId === u.listId && a("updateFavSongMap", Object(r["a"])({},
                        n, l)),
                        a("updateList", u),
                        t.abrupt("return", u);
                    case 17:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function(e, n) {
                return t.apply(this, arguments)
            }
        } (),
        S = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, i, o, s, c, u, l, d, p, f, m, g, b, y, v;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        if (n = e.keywords, i = e.type, o = void 0 === i ? 1 : i, s = e.pageNo, c = void 0 === s ? 1 : s, u = e.platform, l = window.VUE_APP, d = l.$store.dispatch, n) {
                            t.next = 5;
                            break
                        }
                        return t.abrupt("return", d("updateSearch", {
                            keywords: n,
                            type: o,
                            pageNo: c,
                            loading: !1,
                            songs: [],
                            artists: [],
                            total: 0
                        }));
                    case 5:
                        return t.prev = 5,
                        t.next = 8,
                        h({
                            api: "SEARCH",
                            data: {
                                key: n,
                                pageNo: c,
                                type: o,
                                _p: u
                            }
                        });
                    case 8:
                        if (f = t.sent, m = f.data, g = m.list, b = m.key, y = m.total, v = l.$store.getters.getSearch, Number(o)) {
                            t.next = 20;
                            break
                        }
                        return t.next = 17,
                        A(g);
                    case 17:
                        v.list = t.sent,
                        t.next = 21;
                        break;
                    case 20:
                        v.list = g;
                    case 21:
                        c > 1 && (v.list = [].concat(Object(a["a"])(v["".concat(b, "s")]), Object(a["a"])(v.list))),
                        d("updateSearch", (p = {
                            loading: !1
                        },
                        Object(r["a"])(p, "".concat(b, "s"), v.list), Object(r["a"])(p, "total", y), p)),
                        t.next = 28;
                        break;
                    case 25:
                        return t.prev = 25,
                        t.t0 = t["catch"](5),
                        t.abrupt("return", l.$message.error("搜索出错"));
                    case 28:
                    case "end":
                        return t.stop()
                    }
                }), t, null, [[5, 25]])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        } (),
        P = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e, n) {
                var a, r, i, o, s;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        h({
                            api: "BATCH_URL",
                            method: "post",
                            data: {
                                id: e,
                                _p: n
                            }
                        });
                    case 2:
                        a = t.sent,
                        r = {},
                        i = {},
                        o = window.VUE_APP,
                        s = o.$store.getters.getAllSongs,
                        e.split(",").forEach((function(t) {
                            var e = "".concat(n, "_").concat(t),
                            a = s["".concat(n, "_").concat(t)];
                            a && (i[e] = {
                                key: "".concat(a.name.replace(/\(|\)|（|）/g, " "), " ").concat(a.ar.map((function(t) {
                                    return t.name
                                })).join(" ")),
                                id: e,
                                duration: a.duration
                            })
                        })),
                        Object.keys(a.data).forEach((function(t) {
                            var e = "".concat(n, "_").concat(t);
                            delete i[e],
                            r[e] = g(g({},
                            s[e]), {},
                            {
                                br: 128e3,
                                url: a.data[t],
                                pUrl: a.data[t]
                            })
                        })),
                        Object.keys(i).length > 0 && h({
                            api: "SONG_FIND",
                            method: "post",
                            data: {
                                list: Object.values(i),
                                _p: n
                            }
                        }).then((function(t) {
                            var e = {};
                            Object.keys(t.data || {}).forEach((function(n) {
                                var a = t.data[n],
                                r = a.url,
                                i = a.bId,
                                o = a.bPlatform;
                                e[n] = g(g({},
                                s[n]), {},
                                {
                                    url: r,
                                    pUrl: r,
                                    bId: i,
                                    bPlatform: o,
                                    br: 128e3
                                })
                            })),
                            o.$store.dispatch("updateAllSongs", e)
                        })),
                        o.$store.dispatch("updateAllSongs", r);
                    case 11:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function(e, n) {
                return t.apply(this, arguments)
            }
        } (),
        A = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 ? arguments[1] : void 0;
            return new Promise((function(n, a) {
                var r = window.VUE_APP,
                i = {},
                o = r.$store.getters.getAllSongs,
                s = [],
                c = "";
                t.forEach((function(t) {
                    var n = "".concat(t.platform, "_").concat(t.id);
                    t.aId = n,
                    e && e(t),
                    o[n] && o[n].url || (i[n] = t, o[n] && o[n].url || t.url ? t.pUrl = o[n] && o[n].pUrl || t.url: s.push(t.id), c = t.platform)
                })),
                r.$store.dispatch("updateAllSongs", i);
                while (s.length > 0) P(s.splice( - 99).join(","), c || "163");
                n(t.map((function(t) {
                    return t.aId
                })))
            }))
        },
        E = function(t) {
            window.event && window.event.stopPropagation();
            var e = window.VUE_APP,
            n = e.$message,
            a = e.$store,
            r = a.getters,
            i = r.getFavSongMap,
            o = r.getAllList,
            s = r.getAllSongs,
            u = r.getUserList,
            l = r.getUser,
            d = s[t],
            p = d.mid,
            f = d.songid,
            m = d.id,
            g = d.platform,
            b = !Boolean(i[g][t]);
            if ("migu" === g) return e.$message.error("咪咕音乐暂不支持！");
            var y = function() {
                var t = u[g].favListId;
                return h({
                    api: "PLAYLIST_TRACKS",
                    data: {
                        tracks: m,
                        pid: t.replace("".concat(g, "_"), ""),
                        op: b ? "add": "del"
                    }
                }).
                catch((function(t) {
                    if (t.data && 200 === t.data.status) return t.data.body || t.data.data
                }))
            };
            if ("qq" === g) {
                if ("1" !== c["a"].get("haveQCookie")) return n.warning("没有 cookie ！");
                y = function() {
                    var t = {
                        dirid: 201,
                        mid: p,
                        id: f
                    },
                    e = b ? "QQ_SONG_LIST_ADD": "QQ_SONG_LIST_REMOVE";
                    return h({
                        api: e,
                        data: t
                    })
                }
            } else if (!l.userId) return n.warning("没有登陆！");
            y().then((function(e) {
                if ("163" === g && 200 !== e.code) return n.error("失败了！");
                var r = u[g].favListId,
                s = o[r];
                b ? (n.success("爱上！"), i[g][t] = 1, s && (s.unshift(t), a.dispatch("updateList", {
                    songs: s,
                    listId: r
                })), a.dispatch("updateFavSongMap", i)) : (n.success("爱过～"), i[g][t] = 0, a.dispatch("updateFavSongMap", i), s && a.dispatch("updateList", {
                    songs: s.filter((function(e) {
                        return e !== t
                    })),
                    listId: r
                }))
            }))
        },
        L = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, a) {
                var r, i, o, s, c, u, l;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        if (r = VUE_APP.$store.getters.getAllSongs, i = r[e] || a || {},
                        i.url) {
                            t.next = 4;
                            break
                        }
                        return t.abrupt("return", "");
                    case 4:
                        return o = (i.bId || e).replace("".concat(i.platform, "_"), ""),
                        s = i.url,
                        c = i.br || 128e3,
                        u = "mp3",
                        t.prev = 6,
                        t.next = 9,
                        h({
                            api: "SINGLE_URL",
                            data: {
                                id: o,
                                mediaId: i.mediaId,
                                br: n,
                                _p: i.bPlatform || i.platform
                            }
                        });
                    case 9:
                        l = t.sent,
                        l.data && l.data.url && (s = l.data.url, c = l.data.br, c > 32e4 && (u = "flac")),
                        t.next = 16;
                        break;
                    case 13:
                        t.prev = 13,
                        t.t0 = t["catch"](6),
                        console.log("获取url失败了 =.=", i.id, i.platform);
                    case 16:
                        return s = s.replace(/^(.+)qq.com/, "http://122.226.161.16/amobile.music.tc.qq.com"),
                        s = s.replace("freetyst.nf.migu.cn", "".concat(window.location.host, "/miguSongs")),
                        a && VUE_APP.$store.dispatch("updateSongDetail", {
                            url: s,
                            br: c,
                            aId: i.aId
                        }),
                        t.abrupt("return", {
                            url: s,
                            songEndType: u,
                            br: c
                        });
                    case 20:
                    case "end":
                        return t.stop()
                    }
                }), t, null, [[6, 13]])
            })));
            return function(e, n, a) {
                return t.apply(this, arguments)
            }
        } (),
        k = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, a, r) {
                var i, o, s, u, d, p, f, m, g, h, b, y, v, w, O;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        if (window.event && window.event.stopPropagation(), i = VUE_APP.$store.getters.getAllSongs, o = r || i[e], s = VUE_APP.$store.dispatch, o.url) {
                            t.next = 6;
                            break
                        }
                        return t.abrupt("return", VUE_APP.$message.warning("没有这首歌呀"));
                    case 6:
                        return u = o.cId,
                        t.next = 9,
                        L(e, c["a"].get("downSize") || "flac", o);
                    case 9:
                        if (d = t.sent, p = d.url, f = d.songEndType, m = d.br, g = "".concat((new Date).getTime()).concat(e), p.indexOf(".mp3") > -1 ? f = "mp3": p.indexOf(".flac") > -1 && (f = "flac"), h = ".".concat(f), b = c["a"].get(["repeatDown", "download_info", "downLyric"]), y = b.repeatDown, v = b.download_info, w = b.downLyric, h = n || C(o, h), v = JSON.parse(v), y || a) {
                            t.next = 24;
                            break
                        }
                        if (O = v.list.find((function(t) {
                            return t.songId === e && "success" === t.status
                        })), !O) {
                            t.next = 24;
                            break
                        }
                        return VUE_APP.$message.info("这首下载过啦，过滤掉了"),
                        t.abrupt("return", s("updateDownload", {
                            status: "initError",
                            errMsg: "重复下载，自动过滤",
                            from: O.from || "163",
                            id: g,
                            name: h,
                            songId: e,
                            songCid: u,
                            br: m
                        }));
                    case 24:
                        Object(l["a"])(p, h, null, o, {
                            init: function(t) {
                                VUE_APP.$message.success("加入下载中"),
                                s("updateDownload", {
                                    status: "init",
                                    from: o.from || "163",
                                    id: g,
                                    ajax: t,
                                    name: h,
                                    songId: e,
                                    br: m,
                                    songCid: u,
                                    song: o
                                })
                            },
                            success: function() {
                                "1" === w && I(o),
                                s("updateDownload", {
                                    status: "success",
                                    id: g
                                })
                            },
                            error: function() {
                                return s("updateDownload", {
                                    status: "error",
                                    id: g
                                })
                            },
                            progress: function(t, e, n) {
                                return s("updateDownload", {
                                    status: "progress",
                                    id: g,
                                    p: t,
                                    l: e,
                                    t: n
                                })
                            }
                        });
                    case 25:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function(e, n, a, r) {
                return t.apply(this, arguments)
            }
        } (),
        I = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, a, r, i, o, s;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        N(e.aId);
                    case 2:
                        if (n = VUE_APP.$store.getters.getAllSongs, a = n[e.aId] || e, r = a.rawLyric, r) {
                            t.next = 7;
                            break
                        }
                        return t.abrupt("return");
                    case 7:
                        "1" === c["a"].get("downLyricTrans") && a.rawTrans && (i = r.split("\n"), o = a.rawTrans.split("\n"), s = [], i.forEach((function(t) {
                            s.push(t);
                            var e = t.match(/\[\d+:\d+.\d+\]/);
                            if (e) {
                                var n = o.find((function(t) {
                                    return t.indexOf(e[0]) > -1
                                }));
                                n && s.push(n)
                            }
                        })), r = s.join("\n")),
                        Object(l["a"])(r, C(a, ".lrc"));
                    case 9:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        } (),
        C = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = (t.ar || []).map((function(t) {
                return t.name
            })).join("/"),
            a = "";
            switch (c["a"].get("downMusicName")) {
            case "1":
                a = "".concat(t.name, "-").concat(n).concat(e);
                break;
            case "2":
                a = "".concat(t.name).concat(e);
                break;
            default:
                a = "".concat(n, "-").concat(t.name).concat(e);
                break
            }
            return a
        },
        M = function() {
            return h("GET_PERSON_FM").then((function(t) {
                return A(t.data)
            }))
        },
        j = function(t) {
            return (t || []).map((function(t) {
                return {
                    commentId: t.commentid,
                    content: t.middlecommentcontent ? t.middlecommentcontent.map((function(t) {
                        return "回复 ".concat(t.replyednick, "：").concat((t.subcommentcontent || "").replace(/\\n/g, "<br/>"))
                    })).join(" //") : (t.rootcommentcontent || "").replace(/\\n/g, "<br/>"),
                    time: 1e3 * t.time,
                    canDelete: Boolean(t.enable_delete),
                    liked: 1 === Number(t.ispraise),
                    userId: t.encrypt_uin,
                    beReplied: t.middlecommentcontent ? [{
                        content: (t.rootcommentcontent || "").replace(/\\n/g, "<br/>"),
                        user: {
                            avatarUrl: "",
                            userId: t.rootcommentuin,
                            nickname: (t.rootcommentnick || "").replace("@", "")
                        }
                    }] : [],
                    user: {
                        userId: t.uin,
                        nickname: t.nick,
                        avatarUrl: t.avatarurl
                    },
                    likedCount: t.praisenum
                }
            }))
        },
        x = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, a;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        return c["a"].set("qqId", e),
                        t.next = 3,
                        h({
                            api: "QQ_GET_COOKIE",
                            data: {
                                id: e
                            }
                        });
                    case 3:
                        if (n = t.sent, !n || 100 !== n.result) {
                            t.next = 9;
                            break
                        }
                        return t.next = 7,
                        w();
                    case 7:
                        a = t.sent,
                        a.success ? VUE_APP.$message.success("获取 Cookie 成功") : VUE_APP.$message.error("Cookie 错误或过期");
                    case 9:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        } (),
        D = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, a, r, i, o, s;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        if (n = e.platform, a = e.id, r = e.listId, window.event.stopPropagation(), i = VUE_APP.$store.getters.getUserList, i[n]) {
                            t.next = 5;
                            break
                        }
                        return t.abrupt("return", VUE_APP.$message.error("未登陆或没有Cookie"));
                    case 5:
                        o = Boolean(i[n].sub[r]),
                        s = !1,
                        t.t0 = n,
                        t.next = "migu" === t.t0 ? 10 : "qq" === t.t0 ? 12 : "163" === t.t0 ? 22 : 32;
                        break;
                    case 10:
                        return VUE_APP.$message.warning("咪咕音乐暂不支持！"),
                        t.abrupt("return");
                    case 12:
                        return t.prev = 12,
                        t.next = 15,
                        h({
                            api: "QQ_COLLECT_SONGLIST",
                            data: {
                                id: a,
                                op: o ? 2 : 1
                            }
                        });
                    case 15:
                        s = !0,
                        t.next = 21;
                        break;
                    case 18:
                        return t.prev = 18,
                        t.t1 = t["catch"](12),
                        t.abrupt("return", VUE_APP.$message.error("收藏失败"));
                    case 21:
                        return t.abrupt("break", 32);
                    case 22:
                        return t.prev = 22,
                        t.next = 25,
                        h({
                            api: "SUBSCRIBE_PLAYLIST",
                            data: {
                                id: a,
                                t: Number(!o)
                            }
                        });
                    case 25:
                        s = !0,
                        t.next = 31;
                        break;
                    case 28:
                        return t.prev = 28,
                        t.t2 = t["catch"](22),
                        t.abrupt("return", VUE_APP.$message.error("收藏失败"));
                    case 31:
                        return t.abrupt("break", 32);
                    case 32:
                        s && (VUE_APP.$message.success("".concat(o ? "取消": "收藏", "成功！")), i[n].sub[r] = Number(!o), VUE_APP.$store.dispatch("setUserList", g({},
                        i)));
                    case 33:
                    case "end":
                        return t.stop()
                    }
                }), t, null, [[12, 18], [22, 28]])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        } (),
        N = function() {
            var t = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, a, r, i, o, s, c, l, d, p, f;
                return regeneratorRuntime.wrap((function(t) {
                    while (1) switch (t.prev = t.next) {
                    case 0:
                        if (n = VUE_APP.$store.getters.getAllSongs, a = n[e], r = a.id, i = a.mid, o = a.cId, s = a.platform, !a.lyricObj) {
                            t.next = 5;
                            break
                        }
                        return t.abrupt("return");
                    case 5:
                        return t.next = 7,
                        h({
                            api: "LYRIC",
                            data: {
                                id: {
                                    163 : r,
                                    qq: i,
                                    migu: o
                                } [s],
                                _p: s
                            }
                        }).
                        catch((function() {
                            return {
                                data: {
                                    lyric: "",
                                    trans: ""
                                }
                            }
                        }));
                    case 7:
                        c = t.sent,
                        l = c.data,
                        d = l.lyric,
                        p = l.trans,
                        f = {},
                        d && Object(u["c"])(d, "str", f),
                        p && Object(u["c"])(p, "trans", f),
                        !d && !p && (f = {
                            0 : {
                                str: "没有歌词哟，好好享受"
                            }
                        }),
                        VUE_APP.$store.dispatch("updateSongDetail", {
                            lyric: f,
                            aId: e,
                            rawLyric: d,
                            rawTrans: p
                        });
                    case 16:
                    case "end":
                        return t.stop()
                    }
                }), t)
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        } ();
        e["c"] = h
    },
    f503: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return r
        })),
        n.d(e, "a", (function() {
            return i
        }));
        n("163d");
        var a = n("aa67"),
        r = function(t) {
            var e = {
                4 : {
                    title: "新功能",
                    message: "搜索功能全面支持 QQ 音乐啦，vip 的拦截设置绕圈子暂时解决啦，更多内容前去关于了解",
                    type: "info",
                    duration: 2e4
                },
                2 : {
                    title: "tips",
                    message: "如果网易云寻不到想要的歌曲，就点下「企鹅」试试吧",
                    type: "info",
                    duration: 2e4
                },
                3 : {
                    title: "😫",
                    message: "由于qq音乐对 vip 音乐增加了拦截限制，所以目前无法再获取 vip 音乐的播放链接，请谅解",
                    type: "info",
                    duration: 2e4
                },
                5 : {
                    title: "新功能！！",
                    message: "🐧 音乐歌单全方面支持啦！去歌单页面，切到🐧tab，输入企鹅号就可以啦（需要企鹅音乐主页设为公开）",
                    type: "info",
                    duration: 2e4
                },
                6 : {
                    title: "看见音乐！",
                    message: "新增了音频图的显示，如果影响到了性能和流量请点左上角头像，关闭显示！",
                    type: "info",
                    duration: 2e4
                },
                7 : {
                    title: "咪咕音乐！",
                    message: "新增咪咕音乐的支持，搜索页面的最右侧！同样支持无损～",
                    type: "info",
                    duration: 2e4
                },
                8 : {
                    message: "反馈可以戳右下面👇",
                    type: "info",
                    duration: 2e4
                },
                9 : {
                    message: ""
                }
            },
            n = [{
                content: "",
                time: ""
            },
            {
                content: "反馈可以戳右下面👇",
                time: "20-01-09"
            },
            {
                content: "可以前往设置页，自行加入企鹅音乐Cookie啦，未来会支持更多操作",
                time: "20-01-31"
            },
            {
                content: "数据层面和接口重大重构！如果有什么bug及时反馈！",
                time: "20-05-17"
            },
            {
                content: "音频图大优化！windows 也不卡了！",
                time: "20-06-16"
            },
            {
                content: "如果无法播放可以尝试去设置页关闭先进模式",
                time: "20-07-07"
            },
            {
                content: "支持歌词下载 & 下载歌名格式选择，前往设置页查看！",
                time: "20-08-02"
            },
            {
                content: "会员 & 无版权歌曲替换回来啦！",
                time: "20-08-15"
            },
            {
                content: "chrome 播放控件支持（可以用系统快捷键 & 耳机切歌啦！）",
                time: "20-08-30"
            },
            {
                content: "获取 Cookie 的 chrome 插件更新啦，可以去设置页看看",
                time: "20-09-02"
            },
            {
                content: "支持加入正在播放 & 倍速 & 极简模式支持隐藏专辑封面",
                time: "20-09-15"
            },
            {
                content: "MV 回归 & 歌单详情长列表性能优化 & 音量调节改为单次5%",
                time: "20-09-18"
            }];
            if ("newInfo" === t) {
                var r = Number(a["a"].get("notify-new-index") || 0);
                return r < 10 && setTimeout((function() {
                    return o()
                }), 2e3),
                void(r < n.length - 1 && (a["a"].set("notify-new-index", n.length - 1), window.VUE_APP.$notify({
                    title: "有更新呀！",
                    message: n.slice(r + 1).map((function(t) {
                        return "".concat(t.content, " (").concat(t.time, ")")
                    })).slice( - 3).join("<br/>"),
                    duration: 2e4 * (n.length - r),
                    dangerouslyUseHTMLString: !0
                })))
            }
            a["a"].get("notify-".concat(t)) || (window.VUE_APP.$notify(e[t]), a["a"].set("notify-".concat(t), "1"))
        },
        i = {
            playMusic: function(t, e, n) {
                var r = window.VUE_APP.$store.state,
                i = r.allSongs,
                o = r.allList,
                s = r.playingList,
                c = window.VUE_APP.$store.dispatch,
                u = i[t];
                if (u.url) {
                    var l, d = n ? o[n] : e;
                    n && n.indexOf("playing") > -1 && (d = s.trueList),
                    c("updatePlayNow", u),
                    c("updatePlayingStatus", !0),
                    l = n ? Number(a["a"].get("PLAY_MUSIC_FROM_PLAYLIST")) ? {
                        list: d,
                        listId: n
                    }: {
                        list: [t],
                        more: !0
                    }: Number(a["a"].get("PLAY_MUSIC_FROM_LIST")) ? {
                        list: d
                    }: {
                        list: [t],
                        more: !0
                    },
                    c("updatePlayingList", l)
                }
            },
            playList: function(t) {
                var e = VUE_APP,
                n = e.$store,
                a = e.$message,
                r = (n.state, n.dispatch),
                i = n.state.allSongs,
                o = t.filter((function(t) {
                    return i[t].url
                }));
                if (!o.length) return a.warning("无可播放歌曲");
                r("updatePlayNow", i[o[0]]),
                r("updatePlayingList", {
                    list: o
                }),
                r("updatePlayingStatus", !0)
            },
            addPlaying: function(t) {
                var e = window.VUE_APP,
                n = e.$message,
                a = e.$store;
                window.event.stopPropagation(),
                a.dispatch("updatePlayingList", {
                    list: [t],
                    more: !0
                }),
                n.success("已加入播放列表！")
            },
            removePlaying: function(t) {
                window.event.stopPropagation();
                var e = window.VUE_APP,
                n = e.$store,
                a = e.$message,
                r = n.state,
                i = n.dispatch,
                o = r.playingList,
                s = r.playNow;
                t === s.aId && i("playNext"),
                i("updatePlayingList", {
                    list: o.raw.filter((function(e) {
                        return e !== t
                    }))
                }),
                a.success("移出播放列表！")
            }
        },
        o = function() {
            window.VUE_APP.$notify({
                title: "【重要更新】",
                message: "由于对正在播放列表的逻辑调整，现在点击歌曲可支持 播放当前列表 & 仅将点击歌曲加入播放列表，可前往设置页修改",
                duration: 1e6
            })
        }
    },
    f650: function(t, e, n) {}
});
//# sourceMappingURL=app.c181f86f.js.map
