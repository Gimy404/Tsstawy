(function(sttc) {
    'use strict';
    var aa = {};
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var p = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ca(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function da(a) {
        return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa)
    }
    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0;

    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ja(a, b, c) {
        ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
        return ja.apply(null, arguments)
    }

    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ma(a, b, c) {
        a = a.split(".");
        c = c || p;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function na(a) {
        return a
    };
    let oa = (new Date).getTime();

    function pa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function qa(a, b) {
        let c = 0;
        a = pa(String(a)).split(".");
        b = pa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = ra(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ra(0 == e[2].length, 0 == f[2].length) || ra(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function ra(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var sa, ua = ba("CLOSURE_FLAGS"),
        va = ua && ua[610401301];
    sa = null != va ? va : !1;

    function wa() {
        var a = p.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var xa;
    const ya = p.navigator;
    xa = ya ? ya.userAgentData || null : null;

    function za(a) {
        return sa ? xa ? xa.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function q(a) {
        return -1 != wa().indexOf(a)
    };

    function Aa() {
        return sa ? !!xa && 0 < xa.brands.length : !1
    }

    function Ba() {
        return Aa() ? !1 : q("Trident") || q("MSIE")
    }

    function Ca() {
        return Aa() ? za("Microsoft Edge") : q("Edg/")
    }

    function Da() {
        !q("Safari") || Ea() || (Aa() ? 0 : q("Coast")) || (Aa() ? 0 : q("Opera")) || (Aa() ? 0 : q("Edge")) || Ca() || Aa() && za("Opera")
    }

    function Ea() {
        return Aa() ? za("Chromium") : (q("Chrome") || q("CriOS")) && !(Aa() ? 0 : q("Edge")) || q("Silk")
    }

    function Fa(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Ga() {
        var a = wa();
        if (Ba()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Fa(b);
        return (Aa() ? 0 : q("Opera")) ? a(["Version",
            "Opera"
        ]) : (Aa() ? 0 : q("Edge")) ? a(["Edge"]) : Ca() ? a(["Edg"]) : q("Silk") ? a(["Silk"]) : Ea() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ha(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ia(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ja(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ka(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function La(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ma(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Na(a, b) {
        return 0 <= Ha(a, b)
    }

    function Oa(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Pa(a) {
        Pa[" "](a);
        return a
    }
    Pa[" "] = function() {};
    var Qa = Ba();
    !q("Android") || Ea();
    Ea();
    Da();
    var Ra = null;

    function Sa(a) {
        var b = [];
        Ua(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ua(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Ra[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Va();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Va() {
        if (!Ra) {
            Ra = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Ra[f] && (Ra[f] = e)
                }
        }
    };
    var Wa = "undefined" != typeof structuredClone;
    let Xa = 0,
        Ya = 0;

    function Za(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        if (b) {
            b = c;
            c = ~a;
            b ? b = ~b + 1 : c += 1;
            const [d, e] = [b, c];
            a = e;
            c = d
        }
        Xa = c >>> 0;
        Ya = a >>> 0
    }

    function $a() {
        var a = Xa,
            b = Ya;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, 2097151 >= b ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };

    function ab(a) {
        return Array.prototype.slice.call(a)
    };
    var r = Symbol(),
        bb = Symbol();

    function u(a, b, c) {
        return c ? a | b : a & ~b
    }
    var x = (a, b) => {
        a[r] = b;
        return a
    };

    function cb(a) {
        a[r] |= 32;
        return a
    }

    function db(a, b) {
        x(b, (a | 0) & -14591)
    }

    function eb(a, b) {
        x(b, (a | 34) & -14557)
    }

    function fb(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var gb = {},
        hb = {};

    function ib(a) {
        return !(!a || "object" !== typeof a || a.g !== hb)
    }

    function jb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let kb;

    function lb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[r] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        x(a, d | 1);
        return !0
    }
    var mb;
    const nb = [];
    x(nb, 55);
    mb = Object.freeze(nb);

    function ob(a) {
        if (a & 2) throw Error();
    }
    class pb {}
    class qb {}
    Object.freeze(new pb);
    Object.freeze(new qb);
    let rb;

    function sb(a) {
        if (rb) throw Error("");
        rb = a
    }

    function tb(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        if (rb) try {
            rb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
        return a
    };

    function ub(a) {
        if (null != a && "boolean" !== typeof a) {
            var b = typeof a;
            throw Error(`Expected boolean but got ${"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);
        }
        return a
    }
    const vb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function wb(a) {
        const b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : vb.test(a)
    }

    function xb(a) {
        if (null != a) {
            if (!Number.isFinite(a)) throw tb("enum");
            a |= 0
        }
        return a
    }

    function yb(a) {
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function zb(a) {
        if ("number" !== typeof a) throw tb("int32");
        if (!Number.isFinite(a)) throw tb("int32");
        return a | 0
    }

    function Ab(a) {
        return null == a ? a : zb(a)
    }

    function Bb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function Cb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Db(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }

    function Eb(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Za(a);
            var b = Xa,
                c = Ya;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Fb(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        Db(a) || (16 > a.length ? Za(Number(a)) : (a = BigInt(a), Xa = Number(a & BigInt(4294967295)) >>> 0, Ya = Number(a >> BigInt(32) & BigInt(4294967295))), a = $a());
        return a
    }

    function Gb(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function Hb(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function Ib(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Jb(a, b, c, d) {
        if (null != a && "object" === typeof a && a.ma === gb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? (a = b[bb]) ? b = a : (a = new b, d = a.A, d[r] |= 34, b = b[bb] = a) : b = new b : b = void 0, b;
        let e = c = a[r] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && x(a, e);
        return new b(a)
    };
    let Kb;

    function Lb(a, b) {
        Kb = b;
        a = new a(b);
        Kb = void 0;
        return a
    };

    function Mb(a, b) {
        return Nb(b)
    }

    function Nb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (lb(a, void 0, 0)) return
                    } else if (null != a && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function Ob(a, b, c) {
        a = ab(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Pb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = lb(a, void 0, 0) ? void 0 : e && (a[r] | 0) & 2 ? a : Qb(a, b, c, void 0 !== d, e);
            else if (jb(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Pb(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Qb(a, b, c, d, e) {
        const f = d || c ? a[r] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = ab(a);
        for (let g = 0; g < a.length; g++) a[g] = Pb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Rb(a) {
        return a.ma === gb ? Sb(a, Qb(a.A, Rb, void 0, void 0, !1), !0) : null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Tb(a) {
        return a.ma === gb ? a.toJSON() : Nb(a)
    }
    var Ub = Wa ? structuredClone : a => Qb(a, Rb, void 0, void 0, !1);

    function Vb(a, b, c = eb) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[r] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? x(a, (d | 34) & -12293) : Qb(a, Vb, d & 4 ? eb : c, !0, !0)
            }
            a.ma === gb && (c = a.A, d = c[r], a = d & 2 ? a : Lb(a.constructor, Wb(c, d, !0)));
            return a
        }
    }

    function Wb(a, b, c) {
        const d = c || b & 2 ? eb : db,
            e = !!(b & 32);
        a = Ob(a, b, f => Vb(f, e, d));
        a[r] = a[r] | 32 | (c ? 2 : 0);
        return a
    }

    function Xb(a) {
        const b = a.A,
            c = b[r];
        return c & 2 ? Lb(a.constructor, Wb(b, c, !1)) : a
    };

    function Yb(a, b) {
        a = a.A;
        return Zb(a, a[r], b)
    }

    function Zb(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= fb(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function y(a, b, c) {
        const d = a.A;
        let e = d[r];
        ob(e);
        B(d, e, b, c);
        return a
    }

    function B(a, b, c, d, e) {
        const f = fb(b);
        if (c >= f || e) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == d) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && x(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function $b(a, b, c) {
        return void 0 !== ac(a, b, c, !1)
    }

    function bc(a, b) {
        a = Yb(a, b);
        return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0
    }

    function cc(a, b, c) {
        a = a.A;
        let d = a[r];
        const e = 2 & d ? 1 : 2;
        let f = dc(a, d, b);
        var g = f[r] | 0;
        if (!(4 & g)) {
            if (4 & g || Object.isFrozen(f)) f = ab(f), g = ec(g, d, !1), d = B(a, d, b, f);
            var h = 0;
            let k = 0;
            for (; h < f.length; h++) {
                const l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g = fc(g, d);
            g = u(g, 20, !0);
            g = u(g, 4096, !1);
            g = u(g, 8192, !1);
            x(f, g);
            2 & g && Object.freeze(f)
        }
        gc(g) || (c = g, (h = 1 === e) ? g = u(g, 2, !0) : g = u(g, 32, !1), g !== c && x(f, g), h && Object.freeze(f));
        2 === e && gc(g) && (f = ab(f), g = ec(g, d, !1), x(f, g), B(a, d, b, f));
        return f
    }

    function dc(a, b, c) {
        a = Zb(a, b, c);
        return Array.isArray(a) ? a : mb
    }

    function fc(a, b) {
        var c = !1;
        0 === a && (a = ec(a, b, c));
        return a = u(a, 1, !0)
    }

    function gc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function hc(a, b, c, d) {
        const e = a.A;
        let f = e[r];
        ob(f);
        if (null == c) return B(e, f, b), a;
        let g = c[r] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && !1;
        if (!(4 & g))
            for (g = 21, k && (c = ab(c), h = 0, g = ec(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = ab(c), h = 0, g = ec(g, f, !0));
        g !== h && x(c, g);
        B(e, f, b, c);
        return a
    }

    function C(a, b, c, d) {
        const e = a.A;
        let f = e[r];
        ob(f);
        B(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }

    function ic(a, b, c, d) {
        const e = a.A;
        let f = e[r];
        ob(f);
        (c = jc(e, f, c)) && c !== b && null != d && (f = B(e, f, c));
        B(e, f, b, d);
        return a
    }

    function kc(a, b, c) {
        a = a.A;
        return jc(a, a[r], b) === c ? c : -1
    }

    function lc(a, b) {
        a = a.A;
        return jc(a, a[r], b)
    }

    function jc(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != Zb(a, b, f) && (0 !== d && (b = B(a, b, d)), d = f)
        }
        return d
    }

    function mc(a) {
        var b = nc;
        a = a.A;
        let c = a[r];
        ob(c);
        const d = Zb(a, c, 3);
        b = Xb(Jb(d, b, !0, c));
        d !== b && B(a, c, 3, b);
        return b
    }

    function ac(a, b, c, d) {
        a = a.A;
        let e = a[r];
        const f = Zb(a, e, c, d);
        b = Jb(f, b, !1, e);
        b !== f && null != b && B(a, e, c, b, d);
        return b
    }

    function D(a, b, c) {
        b = ac(a, b, c, !1);
        if (null == b) return b;
        a = a.A;
        let d = a[r];
        if (!(d & 2)) {
            const e = Xb(b);
            e !== b && (b = e, B(a, d, c, b, !1))
        }
        return b
    }

    function E(a, b, c) {
        a = a.A;
        var d = a[r],
            e = d,
            f = !(2 & d),
            g = !!(2 & e),
            h = g ? 1 : 2;
        d = 1 === h;
        h = 2 === h;
        f && (f = !g);
        g = dc(a, e, c);
        var k = g[r] | 0;
        const l = !!(4 & k);
        if (!l) {
            k = fc(k, e);
            var m = g,
                n = e;
            const t = !!(2 & k);
            t && (n = u(n, 2, !0));
            let v = !t,
                w = !0,
                A = 0,
                z = 0;
            for (; A < m.length; A++) {
                const F = Jb(m[A], b, !1, n);
                if (F instanceof b) {
                    if (!t) {
                        const J = !!((F.A[r] | 0) & 2);
                        v && (v = !J);
                        w && (w = J)
                    }
                    m[z++] = F
                }
            }
            z < A && (m.length = z);
            k = u(k, 4, !0);
            k = u(k, 16, w);
            k = u(k, 8, v);
            x(m, k);
            t && Object.freeze(m)
        }
        b = !!(8 & k) || d && !g.length;
        if (f && !b) {
            gc(k) && (g = ab(g), k = ec(k, e, !1), e = B(a, e, c, g));
            b =
                g;
            f = k;
            for (m = 0; m < b.length; m++) k = b[m], n = Xb(k), k !== n && (b[m] = n);
            f = u(f, 8, !0);
            f = u(f, 16, !b.length);
            x(b, f);
            k = f
        }
        gc(k) || (b = k, d ? k = u(k, !g.length || 16 & k && (!l || 32 & k) ? 2 : 2048, !0) : k = u(k, 32, !1), k !== b && x(g, k), d && Object.freeze(g));
        h && gc(k) && (g = ab(g), k = ec(k, e, !1), x(g, k), B(a, e, c, g));
        return g
    }

    function oc(a, b, c) {
        null == c && (c = void 0);
        return y(a, b, c)
    }

    function pc(a, b, c, d) {
        null == d && (d = void 0);
        return ic(a, b, c, d)
    }

    function qc(a, b, c) {
        const d = a.A;
        let e = d[r];
        ob(e);
        if (null == c) return B(d, e, b), a;
        let f = c[r] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c);
        let l = !0,
            m = !0;
        for (let t = 0; t < c.length; t++) {
            var n = c[t];
            h || (n = !!((n.A[r] | 0) & 2), l && (l = !n), m && (m = n))
        }
        h || (f = u(f, 5, !0), f = u(f, 8, l), f = u(f, 16, m));
        k && f !== g && (c = ab(c), g = 0, f = ec(f, e, !0));
        f !== g && x(c, f);
        B(d, e, b, c);
        return a
    }

    function ec(a, b, c) {
        a = u(a, 2, !!(2 & b));
        a = u(a, 32, !!(32 & b) && c);
        return a = u(a, 2048, !1)
    }

    function G(a, b) {
        return Bb(Yb(a, b))
    }

    function rc(a, b) {
        a = Yb(a, b);
        var c;
        null == a ? c = a : wb(a) ? "number" === typeof a ? c = Eb(a) : c = Fb(a) : c = void 0;
        return c
    }

    function H(a, b) {
        return Ib(Yb(a, b))
    }

    function I(a, b) {
        return yb(Yb(a, b))
    }

    function sc(a) {
        return a ? ? 0
    }

    function K(a, b, c = !1) {
        return bc(a, b) ? ? c
    }

    function tc(a, b) {
        return sc(rc(a, b))
    }

    function uc(a, b) {
        a = a.A;
        let c = a[r];
        const d = Zb(a, c, b);
        var e = null == d || "number" === typeof d ? d : "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && B(a, c, b, e);
        return e ? ? 0
    }

    function L(a, b) {
        return H(a, b) ? ? ""
    }

    function M(a, b) {
        return sc(I(a, b))
    }

    function vc(a, b, c, d) {
        return D(a, b, kc(a, d, c))
    }

    function wc(a, b, c) {
        if (null != c) {
            var d = !!d;
            if (!wb(c)) throw tb("int64");
            "string" === typeof c ? c = Fb(c) : d ? (c = Math.trunc(c), Number.isSafeInteger(c) ? c = String(c) : (d = String(c), Db(d) ? c = d : (Za(c), c = $a()))) : c = Eb(c)
        }
        return C(a, b, c, "0")
    }

    function xc(a, b) {
        var c = performance.now();
        if (null != c && "number" !== typeof c) throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        C(a, b, c, 0)
    }

    function yc(a, b, c) {
        return C(a, b, Hb(c), "")
    };
    var N = class {
        constructor(a) {
            a: {
                null == a && (a = Kb);Kb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[r] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, jb(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                x(a, b)
            }
            this.A = a
        }
        toJSON() {
            return kb ? Sb(this, this.A, !1) : Sb(this, Qb(this.A, Tb, void 0, void 0, !1), !0)
        }
    };
    N.prototype.ma = gb;

    function Sb(a, b, c) {
        const d = a.constructor.u,
            e = (c ? a.A : b)[r];
        a = b.length;
        if (!a) return b;
        let f, g;
        if (jb(c = b[a - 1])) {
            a: {
                var h = c;
                let m = {},
                    n = !1;
                for (var k in h) {
                    if (!Object.prototype.hasOwnProperty.call(h, k)) continue;
                    let t = h[k];
                    if (Array.isArray(t)) {
                        let v = t;
                        if (lb(t, d, +k) || ib(t) && 0 === t.size) t = null;
                        t != v && (n = !0)
                    }
                    null != t ? m[k] = t : n = !0
                }
                if (n) {
                    for (var l in m) {
                        h = m;
                        break a
                    }
                    h = null
                }
            }
            h != c && (f = !0);a--
        }
        for (k = +!!(e & 512) - 1; 0 < a; a--) {
            l = a - 1;
            c = b[l];
            l -= k;
            if (!(null == c || lb(c, d, l) || ib(c) && 0 === c.size)) break;
            g = !0
        }
        if (!f && !g) return b;
        b = Array.prototype.slice.call(b,
            0, a);
        h && b.push(h);
        return b
    }

    function zc(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[r] |= 128;
        return Lb(a, cb(b))
    };

    function Ac(a, b) {
        const c = Bc;
        Bc = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    let Bc = void 0;
    const Cc = a => null !== a && void 0 !== a;

    function Ec(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Lb(a, cb(b))
            }
            return b
        }
    };
    var Fc = class extends N {};
    var Gc = class extends N {};
    Gc.u = [2, 3, 4];
    var O = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Hc = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Ic = class {
            constructor(a) {
                this.g = a;
                this.defaultValue = ""
            }
        },
        Jc = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Kc = new O(203);

    function Lc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Mc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Nc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function Oc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Pc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };
    var P = a => {
        var b = "Aa";
        if (a.Aa && a.hasOwnProperty(b)) return a.Aa;
        b = new a;
        return a.Aa = b
    };
    var Qc = class {
        constructor() {
            const a = {};
            this.i = (b, c) => null != a[b] ? a[b] : c;
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.h = (b, c) => null != a[b] ? a[b] : c;
            this.s = () => {}
        }
    };

    function Q(a) {
        return P(Qc).i(a.g, a.defaultValue)
    }

    function Rc(a) {
        return P(Qc).j(a.g, a.defaultValue)
    };

    function Sc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Tc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Uc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Vc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var Wc;
    var Xc = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    };

    function Yc(a, b) {
        a = Zc.exec($c(a).toString());
        var c = a[3] || "";
        return ad(a[1] + bd("?", a[2] || "", b) + bd("#", c))
    }

    function $c(a) {
        return a instanceof Xc && a.constructor === Xc ? a.h : "type_error:TrustedResourceUrl"
    }
    var Zc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        cd = {};

    function ad(a) {
        if (void 0 === Wc) {
            var b = null;
            var c = p.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (d) {
                    p.console && p.console.error(d.message)
                }
                Wc = b
            } else Wc = b
        }
        a = (b = Wc) ? b.createScriptURL(a) : a;
        return new Xc(a, cd)
    }

    function bd(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var dd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };

    function ed(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function fd(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function gd(a) {
        this.g = a || p.document || document
    }
    gd.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function hd() {
        return sa && xa ? xa.mobile : !id() && (q("iPod") || q("iPhone") || q("Android") || q("IEMobile"))
    }

    function id() {
        return sa && xa ? !xa.mobile && (q("iPad") || q("Android") || q("Silk")) : q("iPad") || q("Android") && !q("Mobile") || q("Silk")
    };
    var jd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        kd = /#|$/;

    function ld(a, b) {
        var c = a.search(kd);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var md = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

    function nd(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const od = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function pd(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Pa(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function qd(a) {
        return pd(a.top) ? a.top : null
    }

    function rd(a, b) {
        const c = sd("SCRIPT", a);
        c.src = $c(b);
        (void 0) ? .tc || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function td(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function ud() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function vd(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function wd(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var xd = /^([0-9.]+)px$/,
        yd = /^(-?[0-9.]{1,30})$/;

    function zd(a) {
        if (!yd.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function R(a) {
        return (a = xd.exec(a)) ? +a[1] : null
    }
    var Ad = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        Bd = Mc(() => hd() ? 2 : id() ? 1 : 0),
        Cd = a => {
            vd({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let Dd = [];
    const Ed = () => {
        const a = Dd;
        Dd = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function Fd() {
        var a = P(Qc).h(Gd.g, Gd.defaultValue),
            b = S.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = sd("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }
    var Hd = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Id = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Hd(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Kd = a => {
            var b = Jd;
            "complete" === b.readyState || "interactive" === b.readyState ? (Dd.push(a), 1 == Dd.length && (window.Promise ? Promise.resolve().then(Ed) : window.setImmediate ? setImmediate(Ed) : setTimeout(Ed, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function sd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Ld(a, b, c = null, d = !1, e = !1) {
        Md(a, b, c, d, e)
    }

    function Md(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = sd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Ha(h, f);
                    0 <= k && Array.prototype.splice.call(h, k, 1)
                }
                Pc(f, "load", g);
                Pc(f, "error", g)
            };
            Oc(f, "load", g);
            Oc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Pd = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            vd(a, (d, e) => {
                if (d || 0 === d) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            Od(c)
        },
        Od = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ld(b, a, void 0, !1, !1)
        };
    let Qd = null;
    var Jd = document,
        S = window;

    function Rd(a) {
        this.g = a || {
            cookie: ""
        }
    }
    Rd.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.uc, g = c.wc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Ab);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Rd.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = pa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Rd.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Rd.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            Ab: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Sd(a, b = window) {
        if (K(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function Td(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    };

    function Ud(a, ...b) {
        if (0 === b.length) return ad(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return ad(c)
    };
    let Vd = null;
    var Wd = (a, b = []) => {
        let c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Vd) {
                Vd = !1;
                try {
                    const d = qd(p);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Vd = !0);
                    Td(p) ? .getItem("google_logging") && (Vd = !0)
                } catch (d) {}
            }
            a = Vd
        }
        a && rd(p.document, Ud `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Xd(a = p) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Yd(a = Xd()) {
        return a ? pd(a.master) ? a.master : null : null
    };
    var Zd = a => {
            a = Yd(Xd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        $d = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        ae = () => {
            if (!S) return !1;
            try {
                return !(!S.navigator.standalone && !S.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        be = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    class ce {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var de = a => !!(a.error && a.meta && a.id);
    const ee = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var fe = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        ge = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.Za = !!c;
                this.depth = null
            }
        };
    let he = null;

    function ie() {
        if (null === he) {
            he = "";
            try {
                let a = "";
                try {
                    a = p.top.location.hash
                } catch (b) {
                    a = p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    he = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return he
    };

    function je() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ke() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    };
    var le = class {
        constructor(a, b) {
            var c = ke() || je();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const me = p.performance,
        ne = !!(me && me.mark && me.measure && me.clearMarks),
        oe = Mc(() => {
            var a;
            if (a = ne) a = ie(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function pe(a) {
        a && me && oe() && (me.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), me.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function qe(a) {
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (oe() && Ia(a.h, pe), a.h.length = 0)
    }
    class re {
        constructor(a) {
            this.h = [];
            this.i = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = oe() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new le(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            me && oe() && me.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (ke() || je()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                me && oe() && me.mark(b);
                !this.g || 2048 < this.h.length ||
                    this.h.push(a)
            }
        }
    };

    function se(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function te(a, b, c, d, e) {
        const f = [];
        vd(a, function(g, h) {
            (g = ue(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ue(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(ue(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(te(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ve(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function we(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = ve(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = te(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class xe {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function ye(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    var Ae = class {
        constructor(a, b, c = null) {
            this.B = a;
            this.C = b;
            this.h = c;
            this.g = null;
            this.i = !1;
            this.s = this.J
        }
        hb(a) {
            this.s = a
        }
        Da(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        ea(a, b, c) {
            let d, e;
            try {
                this.h && this.h.g ? (e = this.h.start(a.toString(), 3), d = b(), this.h.end(e)) : d = b()
            } catch (f) {
                b = this.C;
                try {
                    pe(e), b = this.s(a, new ce(f, {
                        message: ye(f)
                    }), void 0, c)
                } catch (g) {
                    this.J(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        oa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        J(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Ta = new xe;
                var g = Ta;
                g.g.push(1);
                g.h[1] = se("context", a);
                de(b) || (b = new ce(b, {
                    message: ye(b)
                }));
                if (b.msg) {
                    let ka = b.msg;
                    null == ka.substring && (ka = `b/320546888 ${typeof ka} ${ka}`);
                    g = Ta;
                    var h = ka.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = se("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (ka) {}
                if (d) try {
                    d(b)
                } catch (ka) {}
                d = Ta;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = p;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (pd(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new ge(m || "", l));
                    try {
                        d = l.parent
                    } catch (ka) {
                        d =
                            null
                    }
                } while (d && l != d);
                for (let ka = 0, Zf = k.length - 1; ka <= Zf; ++ka) k[ka].depth = Zf - ka;
                l = p;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.Za = !0)
                    }
                var t = k;
                let Dc = new ge(p.location.href, p, !1);
                l = null;
                const Nd = t.length - 1;
                for (n = Nd; 0 <= n; --n) {
                    var v = t[n];
                    !l && ee.test(v.url) && (l = v);
                    if (v.url && !v.Za) {
                        Dc = v;
                        break
                    }
                }
                v = null;
                const Xj = t.length && t[Nd].url;
                0 != Dc.depth && Xj && (v = t[Nd]);
                f = new fe(Dc, v);
                if (f.h) {
                    t =
                        Ta;
                    var w = f.h.url || "";
                    t.g.push(4);
                    t.h[4] = se("top", w)
                }
                var A = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var z = f.g.url.match(jd),
                        F = z[1],
                        J = z[3],
                        ta = z[4];
                    w = "";
                    F && (w += F + ":");
                    J && (w += "//", w += J, ta && (w += ":" + ta));
                    var $f = w
                } else $f = "";
                F = Ta;
                A = [A, {
                    url: $f
                }];
                F.g.push(5);
                F.h[5] = A;
                ze(this.B, e, Ta, this.i, c)
            } catch (Ta) {
                try {
                    ze(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: ye(Ta),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (Dc) {}
            }
            return this.C
        }
        Y(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var Be = a => "string" === typeof a,
        Ce = a => void 0 === a;
    var De = class extends N {};
    De.u = [2, 8];
    var Ee = [3, 4, 5],
        Fe = [6, 7];

    function Ge(a) {
        return null != a ? !a : a
    }

    function He(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Ie(a, b) {
        var c = E(a, De, 2);
        if (!c.length) return Je(a, b);
        a = M(a, 1);
        if (1 === a) return Ge(Ie(c[0], b));
        c = Ka(c, d => () => Ie(d, b));
        switch (a) {
            case 2:
                return He(c, !1);
            case 3:
                return He(c, !0)
        }
    }

    function Je(a, b) {
        const c = lc(a, Ee);
        a: {
            switch (c) {
                case 3:
                    var d = M(a, kc(a, Ee, 3));
                    break a;
                case 4:
                    d = M(a, kc(a, Ee, 4));
                    break a;
                case 5:
                    d = M(a, kc(a, Ee, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = cc(a, 8, Ib);
                var f = b(...e)
            } catch (g) {
                return
            }
            e = M(a, 1);
            if (4 === e) return !!f;
            if (5 === e) return null != f;
            if (12 === e) a = L(a, kc(a, Fe, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = uc(a, kc(a, Fe, 6));
                        break a;
                    case 5:
                        a = L(a, kc(a, Fe, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === e) return f === a;
                if (9 === e) return null != f && 0 === qa(String(f), a);
                if (null != f) switch (e) {
                    case 7:
                        return f <
                            a;
                    case 8:
                        return f > a;
                    case 12:
                        return Be(a) && Be(f) && (new RegExp(a)).test(f);
                    case 10:
                        return null != f && -1 === qa(String(f), a);
                    case 11:
                        return null != f && 1 === qa(String(f), a)
                }
            }
        }
    }

    function Ke(a, b) {
        return !a || !(!b || !Ie(a, b))
    };
    var Le = class extends N {};
    Le.u = [4];
    var Me = class extends N {
        getValue() {
            return D(this, Le, 2)
        }
    };
    var Ne = class extends N {},
        Oe = Ec(Ne);
    Ne.u = [5];
    var Pe = [1, 2, 3, 6, 7];
    var Qe = class extends N {
        constructor() {
            super()
        }
    };

    function Re(a, b) {
        try {
            const c = d => [{
                [d.Ea]: d.Ba
            }];
            return JSON.stringify([a.filter(d => d.la).map(c), b.toJSON(), a.filter(d => !d.la).map(c)])
        } catch (c) {
            return Se(c, b), ""
        }
    }

    function Se(a, b) {
        try {
            Pd({
                m: ye(a instanceof Error ? a : Error(String(a))),
                b: M(b, 1) || null,
                v: L(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Te = class {
        constructor(a, b) {
            var c = new Qe;
            a = C(c, 1, xb(a), 0);
            b = yc(a, 2, b);
            a = b.A;
            c = a[r];
            this.i = c & 2 ? b : Lb(b.constructor, Wb(a, c, !0))
        }
    };
    var Ue = class extends N {
        constructor() {
            super()
        }
    };
    Ue.u = [2];
    var Ve = class extends N {
        constructor() {
            super()
        }
        getValue() {
            return M(this, 1)
        }
    };
    var We = class extends N {
        constructor() {
            super()
        }
        getWidth() {
            return tc(this, 1)
        }
        getHeight() {
            return tc(this, 2)
        }
    };
    var Xe = class extends N {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 4)
        }
    };
    var nc = class extends N {};
    var Ye = class extends N {};
    var Ze = class extends N {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    };
    var $e = class extends N {};

    function af(a) {
        var b = new bf;
        return C(b, 1, xb(a), 0)
    }
    var bf = class extends N {
        constructor() {
            super()
        }
    };
    var cf = class extends N {
            constructor() {
                super()
            }
        },
        df = [4, 5, 6, 8, 9, 10, 11, 12];
    var ef = class extends N {
        constructor() {
            super()
        }
    };

    function ff(a, b) {
        return C(a, 1, xb(b), 0)
    }

    function gf(a, b) {
        return C(a, 2, xb(b), 0)
    }
    var hf = class extends N {
        constructor() {
            super()
        }
    };
    var jf = class extends N {
            constructor() {
                super()
            }
        },
        kf = [1, 2];

    function lf(a, b) {
        return oc(a, 1, b)
    }

    function mf(a, b) {
        return qc(a, 2, b)
    }

    function nf(a, b) {
        return hc(a, 4, b, zb)
    }

    function of (a, b) {
        return qc(a, 5, b)
    }

    function pf(a, b) {
        return C(a, 6, xb(b), 0)
    }
    var qf = class extends N {
        constructor() {
            super()
        }
    };
    qf.u = [2, 4, 5];
    var rf = class extends N {
        constructor() {
            super()
        }
    };
    rf.u = [5];
    var sf = [1, 2, 3, 4];
    var tf = class extends N {
        constructor() {
            super()
        }
    };
    tf.u = [2, 3];

    function uf(a) {
        var b = new vf;
        return pc(b, 4, wf, a)
    }
    var vf = class extends N {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return tc(this, 2)
            }
        },
        wf = [4, 5, 7, 8];
    var xf = class extends N {
        constructor() {
            super()
        }
    };
    var yf = class extends N {
        constructor() {
            super()
        }
    };
    yf.u = [4, 5];
    var zf = class extends N {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return tc(this, 1)
        }
    };
    zf.u = [2];
    var Af = class extends N {
            constructor() {
                super()
            }
        },
        Bf = [4, 6];
    class Cf extends Te {
        constructor() {
            super(...arguments)
        }
    }

    function Df(a, ...b) {
        Ef(a, ...b.map(c => ({
            la: !0,
            Ea: 3,
            Ba: c.toJSON()
        })))
    }

    function Ff(a, ...b) {
        Ef(a, ...b.map(c => ({
            la: !0,
            Ea: 4,
            Ba: c.toJSON()
        })))
    }

    function Gf(a, ...b) {
        Ef(a, ...b.map(c => ({
            la: !0,
            Ea: 7,
            Ba: c.toJSON()
        })))
    }
    var Hf = class extends Cf {};
    var If = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Ef(a, ...b) {
        try {
            a.C && 65536 <= Re(a.g.concat(b), a.i).length && Jf(a), a.j && !a.s && (a.s = !0, Kf(a.j, () => {
                Jf(a)
            })), a.g.push(...b), a.g.length >= a.B && Jf(a), a.g.length && null === a.h && (a.h = setTimeout(() => {
                Jf(a)
            }, a.H))
        } catch (c) {
            Se(c, a.i)
        }
    }

    function Jf(a) {
        null !== a.h && (clearTimeout(a.h), a.h = null);
        if (a.g.length) {
            var b = Re(a.g, a.i);
            a.D("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Lf = class extends Hf {
            constructor(a, b, c, d, e, f) {
                super(a, b);
                this.D = If;
                this.H = c;
                this.B = d;
                this.C = e;
                this.j = f;
                this.g = [];
                this.h = null;
                this.s = !1
            }
        },
        Mf = class extends Lf {
            constructor(a, b, c = 1E3, d = 100, e = !1, f) {
                super(a, b, c, d, e && !0, f)
            }
        };

    function Nf(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = wc(b, 1, c);
        c = Id(window);
        b = wc(b, 2, c);
        return wc(b, 6, a.s)
    }

    function Of(a, b, c, d, e, f) {
        if (a.i) {
            var g = gf(ff(new hf, b), c);
            b = pf(mf(lf( of (nf(new qf, d), e), g), a.g.slice()), f);
            b = uf(b);
            Ff(a.h, Nf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(h => M(h, 1) === M(g, 1) && M(h, 2) === c)) a.g.push(g), 100 < a.g.length && a.g.shift()
        }
    }

    function Pf(a, b, c, d) {
        if (a.i && a.j) {
            var e = new tf;
            b = qc(e, 2, b);
            c = qc(b, 3, c);
            d && C(c, 1, Ab(d), 0);
            d = new vf;
            d = pc(d, 7, wf, c);
            Ff(a.h, Nf(a, d))
        }
    }

    function Qf(a, b, c, d) {
        if (a.i) {
            var e = new ef;
            b = y(e, 1, Ab(b));
            c = y(b, 2, Ab(c));
            d = y(c, 3, xb(d));
            c = new vf;
            d = pc(c, 8, wf, d);
            Ff(a.h, Nf(a, d))
        }
    }
    var Rf = class {
        constructor(a, b, c, d = new Mf(6, "unknown", b)) {
            this.s = a;
            this.j = c;
            this.h = d;
            this.g = [];
            this.i = 0 < a && ud() < 1 / a
        }
    };
    var Sf = class {
        constructor() {
            this.I = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var Tf = /^true$/.test("false");

    function Uf(a, b) {
        switch (b) {
            case 1:
                return M(a, kc(a, Pe, 1));
            case 2:
                return M(a, kc(a, Pe, 2));
            case 3:
                return M(a, kc(a, Pe, 3));
            case 6:
                return M(a, kc(a, Pe, 6));
            default:
                return null
        }
    }

    function Vf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return K(a, 1);
            case 7:
                return L(a, 3);
            case 2:
                return uc(a, 2);
            case 3:
                return L(a, 3);
            case 6:
                return cc(a, 4, Ib);
            default:
                return null
        }
    }
    const Wf = Mc(() => {
        if (!Tf) return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage
            } catch {
                b = null
            }
            if (b = b ? .getItem("GGDFSSK")) return JSON.parse(b)
        } catch {}
        return {}
    });

    function Xf(a, b, c, d = 0) {
        P(Yf).i[d] = P(Yf).i[d] ? .add(b) ? ? (new Set).add(b);
        const e = Wf();
        if (null != e[b]) return e[b];
        b = ag(d)[b];
        if (!b) return c;
        b = Oe(JSON.stringify(b));
        b = bg(b);
        a = Vf(b, a);
        return null != a ? a : c
    }

    function bg(a) {
        const b = P(Sf).I;
        if (b) {
            const c = Ma(E(a, Me, 5), d => Ke(D(d, De, 1), b));
            if (c) return c.getValue() ? ? null
        }
        return D(a, Le, 4) ? ? null
    }
    class Yf {
        constructor() {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new Map
        }
    }

    function cg(a, b = !1, c) {
        return !!Xf(1, a, b, c)
    }

    function dg(a, b = 0, c) {
        a = Number(Xf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function eg(a, b = "", c) {
        a = Xf(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function fg(a, b = [], c) {
        a = Xf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function ag(a) {
        return P(Yf).h[a] || (P(Yf).h[a] = {})
    }

    function gg(a, b) {
        const c = ag(b);
        vd(a, (d, e) => c[e] = d)
    }

    function hg(a, b, c, d, e = !1) {
        const f = [],
            g = [];
        Ia(b, h => {
            const k = ag(h);
            Ia(a, l => {
                var m = lc(l, Pe);
                const n = Uf(l, m);
                if (n) {
                    var t = P(Yf).g.get(h) ? .get(n) ? .slice(0) ? ? [];
                    a: {
                        const v = new rf;
                        switch (m) {
                            case 1:
                                ic(v, 1, sf, xb(n));
                                break;
                            case 2:
                                ic(v, 2, sf, xb(n));
                                break;
                            case 3:
                                ic(v, 3, sf, xb(n));
                                break;
                            case 6:
                                ic(v, 4, sf, xb(n));
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        hc(v, 5, t, zb);m = v
                    }
                    if (t = m) t = !!P(Yf).i[h] ? .has(n);
                    t && f.push(m);
                    if (t = m) t = !!P(Yf).g.get(h) ? .has(n);
                    t && g.push(m);
                    e || (m = P(Yf), m.g.has(h) || m.g.set(h, new Map), m.g.get(h).has(n) || m.g.get(h).set(n, []), d && m.g.get(h).get(n).push(d));
                    k[n] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && Pf(c, f, g, d ? ? void 0)
    }

    function ig(a, b) {
        const c = ag(b);
        Ia(a, d => {
            var e = Oe(JSON.stringify(d));
            const f = lc(e, Pe);
            (e = Uf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function jg() {
        return Ka(Object.keys(P(Yf).h), a => Number(a))
    }

    function kg(a) {
        Na(P(Yf).j, a) || gg(ag(4), a)
    };

    function T(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function lg(a, b, c) {
        return b[a] || c
    }

    function mg(a) {
        T(5, cg, a);
        T(6, dg, a);
        T(7, eg, a);
        T(8, fg, a);
        T(13, ig, a);
        T(15, kg, a)
    }

    function ng(a) {
        T(4, b => {
            P(Sf).I = b
        }, a);
        T(9, (b, c) => {
            var d = P(Sf);
            null == d.I[3][b] && (d.I[3][b] = c)
        }, a);
        T(10, (b, c) => {
            var d = P(Sf);
            null == d.I[4][b] && (d.I[4][b] = c)
        }, a);
        T(11, (b, c) => {
            var d = P(Sf);
            null == d.I[5][b] && (d.I[5][b] = c)
        }, a);
        T(14, b => {
            var c = P(Sf);
            for (const d of [3, 4, 5]) Object.assign(c.I[d], b[d])
        }, a)
    }

    function og(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function pg(a, b, c) {
        a.i = lg(1, b, () => {});
        a.j = (d, e) => lg(2, b, () => [])(d, c, e);
        a.g = () => lg(3, b, () => [])(c);
        a.h = d => {
            lg(16, b, () => {})(d, c)
        }
    }
    class qg {
        i() {}
        h() {}
        j() {
            return []
        }
        g() {
            return []
        }
    };

    function ze(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof xe ? f = c : (f = new xe, vd(c, (h, k) => {
                var l = f;
                const m = l.j++;
                h = se(k, h);
                l.g.push(m);
                l.h[m] = h
            }));
            const g = we(f, "/pagead/gen_204?id=" + b + "&");
            g && Ld(p, g)
        } catch (f) {}
    }

    function rg(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class sg {
        constructor() {
            this.g = Math.random()
        }
    };
    let tg, ug;
    const vg = new re(window);
    (a => {
        tg = a ? ? new sg;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        rg(tg, window.google_srt);
        ug = new Ae(tg, !0, vg);
        ug.Da(() => {});
        ug.j(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || qe(vg) : vg.g && Oc(window, "load", () => {
            window.google_measure_js_timing || qe(vg)
        })
    })();
    var wg = {
        Zb: 0,
        Yb: 1,
        Vb: 2,
        Qb: 3,
        Wb: 4,
        Rb: 5,
        Xb: 6,
        Tb: 7,
        Ub: 8,
        Pb: 9,
        Sb: 10,
        ac: 11
    };
    var xg = {
        dc: 0,
        ec: 1,
        bc: 2
    };

    function yg(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }
    var Bg = class {
        constructor() {
            this.h = new zg(this);
            this.g = 0
        }
        resolve(a) {
            yg(this);
            this.g = 1;
            this.j = a;
            Ag(this.h)
        }
    };

    function Ag(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var zg = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.h) throw Error("Then functions already set.");
            this.h = a;
            this.i = b;
            Ag(this)
        }
    };
    const Cg = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Cg(Ja(this.g, a))
        }
        apply(a) {
            return new Cg(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new Cg(b)
        }
    };

    function Dg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const Fg = class {
        constructor() {
            this.g = {};
            this.h = {}
        }
        set(a, b) {
            const c = Eg(a);
            this.g[c] = b;
            this.h[c] = a
        }
        get(a, b) {
            a = Eg(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.h = {}
        }
    };

    function Eg(a) {
        return a instanceof Object ? String(da(a)) : a + ""
    };

    function Gg(a) {
        return new Hg({
            value: a
        }, null)
    }

    function Ig(a) {
        return new Hg(null, a)
    }

    function Jg(a) {
        try {
            return Gg(a())
        } catch (b) {
            return Ig(b)
        }
    }

    function Kg(a) {
        return null != a.g ? a.getValue() : null
    }

    function Lg(a, b) {
        null != a.g && b(a.getValue());
        return a
    }

    function Mg(a, b) {
        null != a.g || b(a.h);
        return a
    }
    class Hg {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()), a instanceof Hg ? a : Gg(a)) : this
        }
    };
    const Ng = class {
        constructor(a) {
            this.g = new Fg;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.g.g[Eg(a)]
        }
    };
    class Og {
        constructor() {
            this.g = new Fg
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Ng, this.g.set(a, c));
            c.add(b)
        }
    };
    var U = class extends N {
        getId() {
            return H(this, 3)
        }
    };
    U.u = [4];
    class Pg {
        constructor({
            mb: a,
            hc: b,
            sc: c,
            Eb: d
        }) {
            this.g = b;
            this.j = new Cg(a || []);
            this.i = d;
            this.h = c
        }
    };
    const Rg = a => {
            const b = [],
                c = a.j;
            c && c.g.length && b.push({
                V: "a",
                da: Qg(c)
            });
            null != a.g && b.push({
                V: "as",
                da: a.g
            });
            null != a.h && b.push({
                V: "i",
                da: String(a.h)
            });
            null != a.i && b.push({
                V: "rp",
                da: String(a.i)
            });
            b.sort(function(d, e) {
                return d.V.localeCompare(e.V)
            });
            b.unshift({
                V: "t",
                da: "aa"
            });
            return b
        },
        Qg = a => {
            a = a.g.slice(0).map(Sg);
            a = JSON.stringify(a);
            return wd(a)
        },
        Sg = a => {
            const b = {};
            null != H(a, 7) && (b.q = H(a, 7));
            null != G(a, 2) && (b.o = G(a, 2));
            null != G(a, 5) && (b.p = G(a, 5));
            return b
        };
    var Tg = class extends N {
        setLocation(a) {
            return y(this, 1, xb(a))
        }
    };

    function Ug(a) {
        const b = [].slice.call(arguments).filter(Lc(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Wa || []);
            d = Object.assign(d, e.gb)
        });
        return new Vg(c, d)
    }

    function Wg(a) {
        switch (a) {
            case 1:
                return new Vg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Vg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Vg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Vg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Xg(a) {
        if (null == a) var b = null;
        else {
            var c = Rg(a);
            a = [];
            for (b of c) c = String(b.da), a.push(b.V + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new Vg(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Vg {
        constructor(a, b) {
            this.Wa = a;
            this.gb = b
        }
    };
    const Yg = new Vg(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Zg = Ec(class extends N {});
    var $g = class extends N {};
    var ah = class extends N {};
    var bh = class extends N {};
    bh.u = [6, 7, 9, 10, 11];
    var ch = class extends N {};
    var dh = class extends N {
        constructor() {
            super()
        }
    };
    dh.u = [1];

    function eh(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };
    var fh = new O(1271),
        gh = new O(1322),
        hh = new Hc(1130, 100),
        ih = new Ic(14),
        jh = new O(1247, !0),
        kh = new O(1319),
        lh = new O(1272),
        mh = new O(316),
        nh = new O(1207, !0),
        oh = new O(313),
        ph = new O(369),
        qh = new O(1289),
        rh = new O(1302),
        sh = new O(1318),
        th = new O(217),
        uh = new Ic(1307),
        vh = new Hc(579884443),
        wh = new Jc(556791602, "1 2 4 6 8 16".split(" ")),
        xh = new O(579884441),
        yh = new Hc(579884442),
        zh = new O(561639567),
        Ah = new O(506914611),
        Bh = new O(506852289),
        Ch = new O(1120),
        Dh = new O(567362967, !0),
        Eh = new O(45615403, !0),
        Fh = new Hc(1079, 5),
        Gh =
        new O(10009, !0),
        Gd = new Jc(1934, ["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ]),
        Hh = new O(84);

    function Ih(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        eh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Jh(a, b) {
        const c = e => {
                e = Kh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Kh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Lh(a.previousSibling, c),
                    ha: e => Lh(e.previousSibling, c),
                    na: 0
                };
            case 2:
                return {
                    init: Lh(a.lastChild, c),
                    ha: e => Lh(e.previousSibling, c),
                    na: 0
                };
            case 3:
                return {
                    init: Lh(a.nextSibling, d),
                    ha: e => Lh(e.nextSibling, d),
                    na: 3
                };
            case 1:
                return {
                    init: Lh(a.firstChild, d),
                    ha: e => Lh(e.nextSibling, d),
                    na: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Kh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Lh(a, b) {
        return a && b(a) ? a : null
    };
    var Mh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Nh = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Oh(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Ph(a) {
        return Oh(a).clientWidth
    };

    function Qh(a, b) {
        do {
            const c = td(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Rh(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = R(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }

    function Sh(a, b) {
        return !((yd.test(b.google_ad_width) || xd.test(a.style.width)) && (yd.test(b.google_ad_height) || xd.test(a.style.height)))
    }

    function Th(a, b) {
        return (a = Uh(a, b)) ? a.y : 0
    }

    function Uh(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function Vh(a, b, c, d, e) {
        if (a !== a.top) return qd(a) ? 3 : 16;
        if (!(488 > Ph(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        const f = Ph(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" !== e.google_full_width_responsive) a: {
                c = b.parentElement;
                for (b = Ph(a); c; c = c.parentElement)
                    if ((d = td(c, a)) && (e = R(d.width)) && !(e >= b) && "visible" !== d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Wh(a, b, c, d) {
        const e = Vh(b, c, a, .3, d);
        !0 !== e ? a = e : "true" === d.google_full_width_responsive || Qh(c, b) ? (b = Ph(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Xh(a, b, c) {
        a = a.style;
        "rtl" === b ? a.marginRight = c : a.marginLeft = c
    }

    function Yh(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = td(b, a)
            } catch (d) {}
            return !c || "none" !== c.display && !("absolute" === c.position && ("hidden" === c.visibility || "collapse" === c.visibility))
        }
        return !1
    }

    function Zh(a, b, c) {
        a = Uh(b, a);
        return "rtl" === c ? -a.x : a.x
    }

    function $h(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = td(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            Xh(b, c, "0px");
            d.width = `${Ph(a)}px`;
            if (0 !== Zh(a, b, c)) {
                Xh(b, c, "0px");
                var e = Zh(a, b, c);
                Xh(b, c, `${-1*e}px`);
                a = Zh(a, b, c);
                0 !== a && a !== e && Xh(b, c, `${e/(a-e)*e}px`)
            }
            d.zIndex = "30"
        }
    };
    var ai = class {
        constructor(a, b) {
            this.U = a;
            this.i = b
        }
        height() {
            return this.i
        }
        g(a) {
            return 300 < a && 300 < this.i ? this.U : Math.min(1200, Math.round(a))
        }
        h() {}
    };
    var bi = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = td(a, b)) && e[c] && d(e[c]) || null
        },
        ci = a => b => b.U <= a,
        fi = (a, b, c, d) => {
            const e = a && di(c, b),
                f = ei(b, d);
            return g => !(e && g.height() >= f)
        },
        gi = a => b => b.height() <= a,
        di = (a, b) => Th(a, b) < Oh(b).clientHeight - 100,
        hi = (a, b) => {
            var c = bi(b, a, "height", R);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = bi(b, a, "height", R);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && R(b.style.height)) && (c = Math.min(c, d)), (d = bi(b, a, "maxHeight", R)) && (c =
                Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const ei = (a, b) => {
        const c = 0 == $d(a);
        return b && c ? Math.max(250, 2 * Oh(a).clientHeight / 3) : 250
    };
    var ii = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_xz: !0
    };
    const ji = RegExp("(^| )adsbygoogle($| )");

    function ki(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = ed(d.property);
            a[e] = d.value
        }
    };
    var li = class extends N {};
    var mi = class extends N {};
    var ni = class extends N {
        g() {
            return bc(this, 23)
        }
    };
    var oi = class extends N {};
    var pi = class extends N {};
    var qi = class extends N {};
    var ri = class extends N {};
    var si = class extends N {};
    var ti = class extends N {
            getName() {
                return H(this, 4)
            }
        },
        ui = [1, 2, 3];
    var vi = class extends N {};
    vi.u = [2, 5, 6, 11];
    var wi = class extends N {};
    var yi = class extends N {
            g() {
                return vc(this, wi, 2, xi)
            }
        },
        xi = [1, 2];
    var zi = class extends N {
        g() {
            return D(this, yi, 3)
        }
    };
    zi.u = [1, 4];
    var Ai = class extends N {},
        Bi = Ec(Ai);
    Ai.u = [1, 2, 5, 7];

    function Ci(a) {
        var b = [];
        Dg(a.getElementsByTagName("p"), function(c) {
            100 <= Di(c) && b.push(c)
        });
        return b
    }

    function Di(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Dg(a.childNodes, function(c) {
            b += Di(c)
        });
        return b
    }

    function Ei(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Fi(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Gi = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.j)
            } catch (f) {}
            if (!b.length) return [];
            a = Oa(b);
            a = Fi(this, a);
            "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.i) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Ci(a[c]),
                        e = this.i;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.j,
                occurrenceIndex: this.h,
                paragraphIndex: this.i,
                ignoreMode: this.g
            })
        }
    };
    class Hi {
        constructor() {
            var a = Ud `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.s = Math.random();
            this.h = this.J;
            this.B = a
        }
        Da(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        hb(a) {
            this.h = a
        }
        J(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.s : Math.random()) > c) return !1;
            de(b) || (b = new ce(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            p.google_js_errors = p.google_js_errors || [];
            p.google_js_errors.push(b);
            p.error_rep_loaded || (rd(p.document, this.B), p.error_rep_loaded = !0);
            return !1
        }
        ea(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.h(a, d, .01, c, "jserror")) throw d;
            }
        }
        oa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        Y(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    const Ii = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Ji = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = ke();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Ii({
                        label: a.toString(),
                        value: h,
                        duration: (ke() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Ki = (a, b) => Ji(a, b, (c, d) => {
            (new Hi).J(c, d)
        }, void 0, !1);

    function Li(a, b, c) {
        return Ji(a, b, void 0, c, !0).apply()
    }

    function Mi(a) {
        if (!a) return null;
        var b = H(a, 7);
        if (H(a, 1) || a.getId() || 0 < cc(a, 4, Ib).length) {
            var c = H(a, 3),
                d = H(a, 1),
                e = cc(a, 4, Ib);
            b = G(a, 2);
            var f = G(a, 5);
            a = Ni(I(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Ei(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Ei(e[c]);
            b = (e = g) ? new Gi(e, b, f, a) : null
        } else b = b ? new Gi(b, G(a, 2), G(a, 5), Ni(I(a, 6))) : null;
        return b
    }
    var Oi = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ni(a) {
        return null == a ? a : Oi[a]
    }
    var Pi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Qi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Ri(a) {
        a = Qi(a);
        return a.optimization = a.optimization || {}
    };
    var Si = a => {
        switch (I(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = D(a, U, 1), null == b ? b = null : (a = I(a, 2), b = null == a ? null : new Pg({
                    mb: [b],
                    Eb: a
                }));
                return null != b ? Gg(b) : Ig(Error("Missing dimension when creating placement id"));
            case 3:
                return Ig(Error("Missing dimension when creating placement id"));
            default:
                return Ig(Error("Invalid type: " + I(a, 8)))
        }
    };
    var Ti = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Ui(a, b) {
        const c = new Og,
            d = new Ng;
        b.forEach(e => {
            if (vc(e, ri, 1, ui)) {
                e = vc(e, ri, 1, ui);
                if (D(e, $g, 1) && D(D(e, $g, 1), U, 1) && D(e, $g, 2) && D(D(e, $g, 2), U, 1)) {
                    const g = Vi(a, D(D(e, $g, 1), U, 1)),
                        h = Vi(a, D(D(e, $g, 2), U, 1));
                    if (g && h)
                        for (var f of Ti({
                                anchor: g,
                                position: I(D(e, $g, 1), 2)
                            }, {
                                anchor: h,
                                position: I(D(e, $g, 2), 2)
                            })) c.set(da(f.anchor), f.position)
                }
                D(e, $g, 3) && D(D(e, $g, 3), U, 1) && (f = Vi(a, D(D(e, $g, 3), U, 1))) && c.set(da(f), I(D(e, $g, 3), 2))
            } else vc(e, si, 2, ui) ? Wi(a, vc(e, si, 2, ui), c) : vc(e, qi, 3, ui) && Xi(a, vc(e, qi, 3, ui), d)
        });
        return new Yi(c,
            d)
    }
    class Yi {
        constructor(a, b) {
            this.h = a;
            this.g = b
        }
    }
    const Wi = (a, b, c) => {
            D(b, $g, 2) ? (b = D(b, $g, 2), (a = Vi(a, D(b, U, 1))) && c.set(da(a), I(b, 2))) : D(b, U, 1) && (a = Zi(a, D(b, U, 1))) && a.forEach(d => {
                d = da(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Xi = (a, b, c) => {
            D(b, U, 1) && (a = Zi(a, D(b, U, 1))) && a.forEach(d => {
                c.add(da(d))
            })
        },
        Vi = (a, b) => (a = Zi(a, b)) && 0 < a.length ? a[0] : null,
        Zi = (a, b) => (b = Mi(b)) ? b.query(a) : null;
    class V extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    };
    let $i, W;
    const aj = new re(p);
    var bj = a => {
        null != a && (p.google_measure_js_timing = a);
        p.google_measure_js_timing || qe(aj)
    };
    ((a, b = !0) => {
        $i = a || new sg;
        "number" !== typeof p.google_srt && (p.google_srt = Math.random());
        rg($i, p.google_srt);
        W = new Ae($i, b, aj);
        W.j(!0);
        "complete" == p.document.readyState ? bj() : aj.g && Oc(p, "load", () => {
            bj()
        })
    })();
    var cj = (a, b, c) => W.ea(a, b, c),
        dj = (a, b, c) => {
            const d = P(qg).g();
            !b.eid && d.length && (b.eid = d.toString());
            ze($i, a, b, !0, c)
        },
        ej = (a, b) => {
            W.Y(a, b)
        },
        fj = (a, b, c, d) => {
            let e;
            de(b) ? e = b.msg || ye(b.error) : e = ye(b);
            return 0 == e.indexOf("TagError") ? ((b instanceof ce ? b.error : b).pbr = !0, !1) : W.J(a, b, c, d)
        };
    var gj = class {
        constructor() {
            this.g = Hd();
            this.h = 0
        }
    };

    function hj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (ij(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function jj(a) {
        a = kj(a);
        return a.has("all") || a.has("after")
    }

    function lj(a) {
        a = kj(a);
        return a.has("all") || a.has("before")
    }

    function kj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function ij(a) {
        const b = kj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var mj = class {
        constructor() {
            this.g = new Set;
            this.h = new gj
        }
    };

    function nj(a, b) {
        if (!a) return !1;
        a = td(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function oj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function pj(a) {
        return !!a.nextSibling || !!a.parentNode && pj(a.parentNode)
    };

    function qj(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const rj = a => {
        const b = qj(a);
        return b ? Ja(Ka(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var sj = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };

    function tj(a, b) {
        if (a.j) return !0;
        a.j = !0;
        const c = E(a.i, bh, 1);
        a.h = 0;
        const d = uj(a.D);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? Zg(f) : null
        } catch (n) {
            g = null
        }
        f = null !== g && K(g, 2, !1);
        g = Qi(e);
        f && (g.eatf = !0, Wd(7, [!0, 0, !1]));
        b: {
            var h = {
                    ub: !1,
                    vb: !1
                },
                k = Oa(e.document.querySelectorAll(".google-auto-placed"));
            const n = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
                t = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var l = (rj(e) || Oa(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Oa(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const v = Oa(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                w = Oa(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                A = Oa(e.document.querySelectorAll("div.googlepublisherpluginad")),
                z = Oa(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let F = [].concat(Oa(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Oa(e.document.querySelectorAll("body ins.adsbygoogle")));f = [];
            for (const [J, ta] of [
                    [h.mc, k],
                    [h.ub, n],
                    [h.qc, t],
                    [h.nc, l],
                    [h.rc, v],
                    [h.lc, w],
                    [h.oc, A],
                    [h.vb, z]
                ]) !1 === J ? f = f.concat(ta) : F = F.concat(ta);h = sj(F);f = sj(f);h = h.slice(0);
            for (m of f)
                for (f = 0; f < h.length; f++)(m.contains(h[f]) || h[f].contains(m)) &&
                    h.splice(f, 1);
            var m = h;e = Oh(e).clientHeight;
            for (f = 0; f < m.length; f++)
                if (!(m[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e) return !0;
        e = new Ng([2]);
        for (g = 0; g < c.length; g++) {
            m = a;
            h = c[g];
            f = g;
            l = b;
            if (D(h, Tg, 4) && e.contains(I(D(h, Tg, 4), 1)) && 1 === I(h, 8) && vj(h, d)) {
                m.h++;
                if (l = wj(m, h, l, d)) k = Qi(m.g), k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0), D(h, U, 1) && null != G(D(h, U, 1), 5) && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ : k.numPostPlacementsPlaced = 1), null == k.placed && (k.placed = []),
                    k.numAutoAdsPlaced++, k.placed.push({
                        index: f,
                        element: l.ga
                    }), Wd(7, [!1, m.h, !0]);
                m = l
            } else m = null;
            if (m) return !0
        }
        Wd(7, [!1, a.h, !1]);
        return !1
    }

    function wj(a, b, c, d) {
        if (!vj(b, d) || 1 != I(b, 8)) return null;
        d = D(b, U, 1);
        if (!d) return null;
        d = Mi(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = I(b, 2);
        e = Pi[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = nj(oj(d), f);
                        break a;
                    case 3:
                        f = nj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = nj(g ? 1 == g.nodeType ? g : oj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !pj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !eh(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.B;
            f = I(b, 2);
            g = c.h;
            var h = da(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(da(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(da(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.C;
            g = I(b, 2);
            a: switch (g) {
                case 1:
                    f = jj(d.previousElementSibling) || lj(d);
                    break a;
                case 4:
                    f = jj(d) || lj(d.nextElementSibling);
                    break a;
                case 2:
                    f = lj(d.firstElementChild);
                    break a;
                case 3:
                    f = jj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g = hj(c, d, g);
            c = c.h;
            dj("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.h++,
                dvc: Bd()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = D(b, ah, 3);
        c = {};
        f && (c.jb = H(f, 1), c.Ua = H(f, 2), c.pb = !!bc(f, 3));
        f = D(b, Tg, 4) && I(D(b, Tg, 4), 2) ? I(D(b, Tg, 4), 2) : null;
        f = Wg(f);
        g = null != G(b, 12) ? G(b, 12) : null;
        g = null == g ? null : new Vg(null, {
            google_ml_rank: g
        });
        b = xj(a, b);
        b = Ug(a.s, f, g, b);
        f = a.g;
        a = a.H;
        h = f.document;
        var k = c.pb || !1;
        g = fd((new gd(h)).g, "DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.Db && ki(k, c.Db);
        h = fd((new gd(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.jb && (k.marginTop = c.jb);
        c.Ua && (k.marginBottom = c.Ua);
        c.lb && ki(k, c.lb);
        g.appendChild(h);
        c = {
            ya: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Wa) c.ya.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.ya;
                if (Q(oh)) {
                    {
                        const A = Jh(d, e);
                        if (A.init) {
                            var n =
                                A.init;
                            for (d = n; d = A.ha(d);) n = d;
                            var t = {
                                anchor: n,
                                position: A.na
                            }
                        } else t = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] = 0;
                    Ih(m, t.anchor, t.position)
                } else Ih(m, d, e);
                b: {
                    var v = c.ga;v.dataset.adsbygoogleStatus = "reserved";v.className += " adsbygoogle-noablate";m = {
                        element: v
                    };
                    var w = b && b.gb;
                    if (v.hasAttribute("data-pub-vars")) {
                        try {
                            w = JSON.parse(v.getAttribute("data-pub-vars"))
                        } catch (A) {
                            break b
                        }
                        v.removeAttribute("data-pub-vars")
                    }
                    w && (m.params = w);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (A) {
                (v = c.ya) && v.parentNode &&
                    (w = v.parentNode, w.removeChild(v), eh(w) && (w.style.display = w.getAttribute("data-init-display") || "none"));
                v = !1;
                break a
            }
            v = !0
        }
        return v ? c : null
    }

    function xj(a, b) {
        return Kg(Mg(Si(b).map(Xg), c => {
            Qi(a.g).exception = c
        }))
    }
    const yj = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.H = b;
            this.i = c;
            this.s = e || null;
            (this.D = d) ? (a = a.document, d = E(d, ti, 5), d = Ui(a, d)) : d = Ui(a.document, []);
            this.B = d;
            this.C = new mj;
            this.h = 0;
            this.j = !1
        }
    };

    function uj(a) {
        const b = {};
        a && cc(a, 6, yb).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function vj(a, b) {
        return a && $b(a, Tg, 4) && b[I(D(a, Tg, 4), 2)] ? !1 : !0
    };
    var zj = Ec(class extends N {});

    function Aj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Jg(() => zj(c)) : Gg(null)
    };

    function Bj() {
        if (Cj) return Cj;
        var a = Yd() || window;
        const b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Cj = b : a.google_persistent_state_async = Cj = new Dj
    }

    function Ej(a, b, c) {
        b = Fj[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Gj(a, b, c) {
        return Ej(a, b, () => c)
    }

    function Hj(a, b, c) {
        a.S[Fj[b] || `google_ps_${b}`] = c
    }

    function Ij(a, b) {
        Hj(a, 38, b)
    }
    var Dj = class {
            constructor() {
                this.S = {}
            }
        },
        Cj = null;
    const Fj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Jj(a) {
        var b = new Kj;
        return y(b, 5, ub(a))
    }
    var Kj = class extends N {
        constructor() {
            super()
        }
    };
    Kj.u = [10];

    function Lj() {
        this.s = this.s;
        this.i = this.i
    }
    Lj.prototype.s = !1;

    function Mj(a, b) {
        a.s ? b() : (a.i || (a.i = []), a.i.push(b))
    };
    const Nj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Oj(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Nj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Pd({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Pj(a) {
        if (a.g) return a.g;
        a.g = Ad(a.h, "__tcfapiLocator");
        return a.g
    }

    function Qj(a) {
        return "function" === typeof a.h.__tcfapi || null != Pj(a)
    }

    function Rj(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Pj(a)) {
            Sj(a);
            const e = ++a.H;
            a.C[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Sj(a) {
        a.j || (a.j = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Oc(a.h, "message", a.j))
    }
    class Tj extends Lj {
        constructor(a) {
            var b = {};
            super();
            this.h = a;
            this.g = null;
            this.C = {};
            this.H = 0;
            this.D = b.timeoutMs ? ? 500;
            this.B = b.ic ? ? !1;
            this.j = null
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.B
            };
            const c = Nc(() => a(b));
            let d = 0; - 1 !== this.D && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.D));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Nj(b), b.internalBlockOnErrors = this.B, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState =
                    3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Rj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Rj(this, "removeEventListener", null, a.listenerId)
        }
    };
    var Zj = ({
            l: a,
            R: b,
            timeoutMs: c,
            ca: d,
            ia: e = !1,
            ja: f = !1
        }) => {
            b = Uj({
                l: a,
                R: b,
                ia: e,
                ja: f
            });
            null != b.g || "tcunav" != b.h.message ? d(b) : Vj(a, c).then(g => g.map(Wj)).then(g => g.map(h => Yj(a, h))).then(d)
        },
        Uj = ({
            l: a,
            R: b,
            ia: c = !1,
            ja: d = !1
        }) => {
            if (!ak({
                    l: a,
                    R: b,
                    ia: c,
                    ja: d
                })) return Yj(a, Jj(!0));
            b = Bj();
            return (b = Gj(b, 24)) ? Yj(a, Wj(b)) : Ig(Error("tcunav"))
        };

    function ak({
        l: a,
        R: b,
        ia: c,
        ja: d
    }) {
        if (!(d = !d && Qj(new Tj(a)))) {
            if (c = !c) {
                if (b) {
                    a = Aj(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != I(a, 1)) b: switch (a = I(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.J(806, a.h, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Vj(a, b) {
        return Promise.race([bk(), ck(a, b)])
    }

    function bk() {
        return (new Promise(a => {
            var b = Bj();
            a = {
                resolve: a
            };
            const c = Gj(b, 25, []);
            c.push(a);
            Hj(b, 25, c)
        })).then(dk)
    }

    function ck(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, Ig(Error("tcto")))
        })
    }

    function dk(a) {
        return a ? Gg(a) : Ig(Error("tcnull"))
    }

    function Wj(a) {
        var b = {};
        if (Oj(a))
            if (!1 === a.gdprApplies) a = !0;
            else if ("tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b.jc || "string" !== typeof a.tcString || !a.tcString.length) a = !b.kc;
        else {
            b: {
                if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                    b = b["755"];
                    break b
                }
                b = void 0
            }
            0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
        }
        else a = !1;
        return Jj(a)
    }

    function Yj(a, b) {
        return (a = Sd(b, a)) ? Gg(a) : Ig(Error("unav"))
    };
    var ek = class extends N {};
    ek.u = [1, 2, 3];
    var fk = class extends N {};
    fk.u = [1, 2, 3];
    var gk = class extends N {
        g() {
            return D(this, ek, 2)
        }
        h() {
            return D(this, fk, 3)
        }
    };
    const hk = class {
        constructor(a) {
            this.exception = a
        }
    };

    function ik(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            Qi(e.g);
            E(e.i, bh, 1);
            d.call(c, new hk(b))
        } catch (f) {
            a = a.h, b = f, yg(a), a.g = 2, a.i = b, Ag(a.h)
        }
    }
    var jk = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.h = c
        }
        start() {
            this.j()
        }
        j() {
            try {
                switch (this.i.document.readyState) {
                    case "complete":
                    case "interactive":
                        tj(this.g, !0);
                        ik(this);
                        break;
                    default:
                        tj(this.g, !1) ? ik(this) : this.i.setTimeout(ja(this.j, this), 100)
                }
            } catch (a) {
                ik(this, a)
            }
        }
    };
    var kk = class extends N {
        constructor() {
            super()
        }
        getVersion() {
            return sc(G(this, 2))
        }
    };
    kk.u = [3];

    function lk(a) {
        return Sa(0 !== a.length % 4 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function mk(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function nk(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function ok(a) {
        var b = lk(a),
            c = mk(b.slice(0, 6));
        a = mk(b.slice(6, 12));
        var d = new kk;
        c = C(d, 1, Ab(c), 0);
        a = C(c, 2, Ab(a), 0);
        b = b.slice(12);
        c = mk(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === mk(e[0]);
            e = e.slice(1);
            var g = pk(e, b),
                h = 0 === d.length ? 0 : d[d.length - 1];
            h = nk(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = pk(e, b);
                g = nk(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (0 <
            e.length) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return hc(a, 3, d, zb)
    }

    function pk(a, b) {
        const c = a.indexOf("11");
        if (-1 === c) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var qk = "a".charCodeAt(),
        rk = Uc(wg),
        sk = Uc(xg);

    function tk() {
        var a = new uk;
        return wc(a, 1, 0)
    }

    function vk(a) {
        const b = tc(a, 1);
        a = sc(G(a, 2));
        return new Date(1E3 * b + a / 1E6)
    }
    var uk = class extends N {};

    function wk(a, b) {
        if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function xk(a) {
        let b = wk(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!wk(a, 1),
                e = wk(a, 16);
            if (d)
                for (d = wk(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function yk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (wk(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function zk(a) {
        const b = wk(a, 16);
        return !0 === !!wk(a, 1) ? (a = xk(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : yk(a, b)
    }
    class Ak {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.h = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var Ck = a => {
        try {
            var b = Sa(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new Ak(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = wk(c, 12);
            b.cmpVersion = wk(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = wk(c, 6);
            b.isServiceSpecific = !!wk(c, 1);
            b.useNonStandardStacks = !!wk(c, 1);
            b.specialFeatureOptins = Bk(yk(c, 12, sk), sk);
            b.purpose = {
                consents: Bk(yk(c, 24, rk), rk),
                legitimateInterests: Bk(yk(c, 24, rk), rk)
            };
            b.purposeOneTreatment = !!wk(c, 1);
            b.publisherCC = String.fromCharCode(qk + wk(c, 6)) + String.fromCharCode(qk +
                wk(c, 6));
            b.vendor = {
                consents: Bk(zk(c), null),
                legitimateInterests: Bk(zk(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const Bk = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var Dk = class extends N {
        g() {
            return null != H(this, 2)
        }
    };
    var Ek = class extends N {
        g() {
            return null != H(this, 2)
        }
    };
    var Fk = class extends N {};
    var Gk = class extends N {},
        Hk = Ec(Gk);
    Gk.u = [7];

    function Ik(a) {
        a = Jk(a);
        try {
            var b = a ? Hk(a) : null
        } catch (c) {
            b = null
        }
        return b ? D(b, Fk, 4) || null : null
    }

    function Jk(a) {
        a = (new Rd(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function Kk(a) {
        a.__uspapiPostMessageReady || Lk(new Mk(a))
    }

    function Lk(a) {
        a.g = b => {
            const c = "string" === typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && "getUSPData" === e.command && a.l.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var Mk = class {
        constructor(a) {
            this.l = a;
            this.g = null
        }
    };
    Uc(wg).map(a => Number(a));
    Uc(xg).map(a => Number(a));

    function Nk(a) {
        a.__tcfapiPostMessageReady || Ok(new Pk(a))
    }

    function Ok(a) {
        a.h = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    }
    var Pk = class {
        constructor(a) {
            this.g = a;
            this.h = null
        }
    };
    var Qk = class extends N {};
    var Rk = class extends N {
            g() {
                return null != H(this, 1)
            }
        },
        Sk = Ec(Rk);
    Rk.u = [2];

    function Tk(a, b) {
        function c(l) {
            if (10 > l.length) return null;
            var m = f(l.slice(0, 4));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }

        function d(l) {
            if (10 > l.length) return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }

        function e(l) {
            if (12 > l.length) return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(8, 12));
            l = h(l);
            return "1" + m + l + "N"
        }

        function f(l) {
            const m = [];
            let n = 0;
            for (let t = 0; t < l.length / 2; t++) m.push(mk(l.slice(n, n + 2))), n += 2;
            return m
        }

        function g(l) {
            return l.every(m => 1 === m) ?
                "Y" : "N"
        }

        function h(l) {
            return l.some(m => 1 === m) ? "Y" : "N"
        }
        if (0 === a.length) return null;
        a = a.split(".");
        if (2 < a.length) return null;
        a = lk(a[0]);
        const k = mk(a.slice(0, 6));
        a = a.slice(6);
        if (1 !== k) return null;
        switch (b) {
            case 8:
                return c(a);
            case 10:
            case 12:
            case 9:
                return d(a);
            case 11:
                return e(a);
            default:
                return null
        }
    };
    var Uk = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = sd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function Vk() {
        if (S === S.top && !S.__uspapi && !S.frames.__uspapiLocator) {
            var a = new Wk;
            Xk(a);
            Yk(a)
        }
    }

    function Xk(a) {
        !a.j || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Uk(a.g, "__uspapiLocator"), ma("__uspapi", (...b) => Zk(a, ...b), a.g), Kk(a.g))
    }

    function Yk(a) {
        !a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Uk(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], ma("__tcfapi", (...b) => $k(a, ...b), a.g), Nk(a.g))
    }

    function Zk(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.j
        }, !0)
    }

    function al(a) {
        if (!a ? .g() || 0 === L(a, 1).length || 0 == E(a, Qk, 2).length) return null;
        const b = L(a, 1);
        let c;
        try {
            var d = ok(b.split("~")[0]);
            c = b.includes("~") ? b.split("~").slice(1) : []
        } catch (e) {
            return null
        }
        a = E(a, Qk, 2).reduce((e, f) => tc(bl(e), 1) > tc(bl(f), 1) ? e : f);
        d = cc(d, 3, Bb).indexOf(sc(G(a, 1)));
        return -1 === d || d >= c.length ? null : {
            uspString: Tk(c[d], sc(G(a, 1))),
            xa: vk(bl(a))
        }
    }

    function cl(a) {
        a = a.find(b => 13 === M(b, 1));
        if (a ? .g()) try {
            return Sk(L(a, 2))
        } catch (b) {}
        return null
    }

    function bl(a) {
        return $b(a, uk, 2) ? D(a, uk, 2) : tk()
    }

    function $k(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && (2.2 < c || 1 >= c)) d(null, !1);
            else switch (c = a.g.__tcfapiEventListeners, b) {
                case "getTCData":
                    d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.2",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d) - 1;
                    a.h ? (e = Ck(a.h), e.addtlConsent = null != a.i ? a.i : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", null != b && (e.listenerId = b), a = e) : a = null;
                    d(a, !0);
                    break;
                case "removeEventListener":
                    c[e] ?
                        (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }
    class Wk {
        constructor() {
            var a = S;
            this.g = a;
            var b = Jk(this.g.document);
            try {
                var c = b ? Hk(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = D(b, Ek, 5) || null, b = E(b, Dk, 7), b = cl(b ? ? []), c = {
                Va: c,
                Ya: b
            }) : c = {
                Va: null,
                Ya: null
            };
            b = c;
            c = al(b.Ya);
            b = b.Va;
            if (b ? .g() && 0 !== L(b, 2).length) {
                var d = $b(b, uk, 1) ? D(b, uk, 1) : tk();
                b = {
                    uspString: L(b, 2),
                    xa: vk(d)
                }
            } else b = null;
            this.j = b && c ? c.xa > b.xa ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.h = (c = Ik(a.document)) && null != H(c, 1) ? L(c, 1) : null;
            this.i = (a = Ik(a.document)) && null != H(a, 2) ? L(a, 2) : null
        }
    };
    const dl = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function el(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        dj("ama", b, .01)
    }

    function fl(a) {
        const b = {};
        vd(dl, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function gl(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function hl(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function il(a) {
        a = cc(a, 2, yb);
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    }

    function jl(a, b) {
        a = hl(gl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = wd(a),
            d = kl(a);
        return b.find(e => {
            if ($b(e, pi, 7)) {
                var f = D(e, pi, 7);
                f = Cb(Yb(f, 1))
            } else f = Cb(Yb(e, 1));
            e = $b(e, pi, 7) ? I(D(e, pi, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function kl(a) {
        const b = {};
        for (;;) {
            b[wd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var ll = a => {
        a = D(a, oi, 3);
        return !a || rc(a, 1) <= Date.now() ? !1 : !0
    };

    function ml(a) {
        if (Q(mh)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Bi(b) : null
        } catch (d) {
            c = null
        }
        return c
    };
    var nl = class extends N {
        g() {
            return D(this, gk, 2)
        }
        h() {
            return K(this, 3)
        }
    };
    var ol = class extends N {
        g() {
            return cc(this, 1, Ib)
        }
        h() {
            return D(this, nl, 2)
        }
    };
    ol.u = [1];
    var pl = class extends N {
        getId() {
            return sc(G(this, 1))
        }
    };
    pl.u = [2];
    var ql = class extends N {};
    ql.u = [2];
    var rl = class extends N {};
    rl.u = [2];
    var sl = class extends N {
        g() {
            return tc(this, 2)
        }
        h() {
            return tc(this, 4)
        }
        i() {
            return K(this, 3)
        }
    };
    var tl = class extends N {};
    tl.u = [1, 4, 2, 3];
    var vl = class extends N {
        h() {
            return vc(this, nl, 13, ul)
        }
        j() {
            return void 0 !== ac(this, nl, kc(this, ul, 13))
        }
        g() {
            return vc(this, ol, 14, ul)
        }
        i() {
            return void 0 !== ac(this, ol, kc(this, ul, 14))
        }
    };
    vl.u = [19];
    var ul = [13, 14];
    let wl = void 0;

    function xl(a) {
        Ac(wl, Ce);
        wl = a
    };

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function yl(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Sa: !0,
            Jb: b,
            ua: a.ablation_viewport_offset
        } : null
    }

    function zl(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Al(a) {
        X(S).allow_second_reactive_tag = a
    }

    function Bl() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Cl(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? Dl(a)
    }

    function Dl(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const El = [2, 7, 1];
    var Hl = (a, b, c = "", d = null) => 1 === b && Fl(c, d) ? !0 : Gl(a, c, e => La(E(e, Fc, 2), f => I(f, 1) === b)),
        Fl = (a, b) => b ? b.j() ? K(b.h(), 1) : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a ? K(b.g().h(), 1) : !1 : !1,
        Il = (a, b) => {
            b = sc(G(b, 18)); - 1 !== b && (a.tmod = b)
        },
        Kl = a => {
            const b = qd(S) || S;
            return Jl(b, a) ? !0 : Gl(S, "", c => La(cc(c, 3, yb), d => d === a))
        };

    function Jl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Na(a.split(","), b.toString())
    }

    function Gl(a, b, c) {
        a = qd(a) || a;
        const d = Ll(a);
        b && (b = be(String(b)));
        return Tc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Ll(a) {
        a = Ml(a);
        const b = {};
        vd(a, (c, d) => {
            try {
                const e = new Gc(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Ml = a => {
        Ac(wl, Cc);
        a = Uj({
            l: a,
            R: wl
        });
        return null != a.g ? Nl(a.getValue()) : {}
    };

    function Nl(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Sc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Ol(a) {
        dj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Pl = a => {
            dj("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        Ql = (a, b) => {
            if (Cl(p)) return El;
            if (b ? .j()) {
                var c = L(b.h(), 9);
                b = b ? .h() ? .g() ? .h();
                if (!a || c != a || !b) return El;
                Pl(!1);
                return cc(b, 3, yb)
            }
            if (b ? .i()) {
                c = b ? .g() ? .g();
                if (!c || 1 !== c.length || !a || c[0] !== a || L(b, 17) != p.location.host) return El;
                a = b ? .g() ? .h() ? .g() ? .h();
                if (!a) return El;
                Pl(!0);
                return cc(a, 3, yb)
            }
            return El
        };
    var Rl = (a, b) => {
        const c = [];
        a = Ql(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    };

    function Sl(a, b, c, d) {
        Tl(new Ul(a, b, c, d))
    }

    function Tl(a) {
        Mg(Lg(Uj({
            l: a.l,
            R: K(a.g, 6)
        }), b => {
            Vl(a, b, !0)
        }), () => {
            Wl(a)
        })
    }

    function Vl(a, b, c) {
        Mg(Lg(Xl(b), d => {
            Yl("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                el(d, {
                    lserr: 1
                })
            }
            c ? Wl(a) : a.h(null, null)
        })
    }

    function Wl(a) {
        Mg(Lg(Zl(a), b => {
            a.h(b, {
                fromPABGSettings: !0
            })
        }), () => {
            $l(a)
        })
    }

    function Xl(a) {
        return (a = (a = ml(a)) ? ll(a) ? a : null : null) ? Gg(a) : Ig(Error("invlocst"))
    }

    function Zl(a) {
        if (Cl(a.l) && !K(a.g, 22)) return Ig(Error("invtag"));
        a: {
            var b = a.l;
            var c = a.i;a = a.g;
            if (a ? .j())(b = a ? .h() ? .g() ? .g()) && (0 < E(b, bh, 1).length || Q(nh) && 0 < E(b, ch, 3).length) ? Ol(!1) : b = null;
            else {
                if (a ? .i()) {
                    const d = a ? .g() ? .g(),
                        e = a ? .g() ? .h() ? .g() ? .g();
                    if (d && 1 === d.length && d[0] === c && e && (0 < E(e, bh, 1).length || Q(nh) && 0 < E(e, ch, 3).length) && L(a, 17) === b.location.host) {
                        Ol(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Ai, a = E(b, bh, 1), c = qc(c, 1, a), a = E(b, vi, 2), c = qc(c, 7, a), Q(nh) && 0 < E(b, ch, 3).length && (a = new dh, b = E(b, ch, 3), b = qc(a,
            1, b), oc(c, 6, b)), b = Gg(c)) : b = Ig(Error("invtag"));
        return b
    }

    function $l(a) {
        Zj({
            l: a.l,
            R: K(a.g, 6),
            timeoutMs: 50,
            ca: b => {
                am(a, b)
            }
        })
    }

    function am(a, b) {
        Mg(Lg(b, c => {
            Vl(a, c, !1)
        }), c => {
            Yl(c.message);
            a.h(null, null)
        })
    }

    function Yl(a) {
        dj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Ul {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.i = c;
            this.h = d
        }
    };
    var dm = (a, b, c, d) => {
        try {
            const e = jl(a, E(c, vi, 7));
            if (e && il(e)) {
                H(e, 4) && (d = Ug(d, new Vg(null, {
                    google_package: H(e, 4)
                })));
                const f = new yj(a, b, c, e, d);
                Li(1E3, () => {
                    var g = new Bg;
                    (new jk(a, f, g)).start();
                    return g.h
                }, a).then(la(bm, a), la(cm, a))
            }
        } catch (e) {
            el(a, {
                atf: -1
            })
        }
    };
    const bm = a => {
            el(a, {
                atf: 1
            })
        },
        cm = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            el(a, {
                atf: 0
            })
        };

    function em(a) {
        a.easpi = Q(Ch);
        Q(zh) || (a.asla = .4, a.asaa = -1);
        a.asro = Q(Ah);
        Q(Bh) && (a.sugawps = !0);
        const b = P(Qc).h(wh.g, wh.defaultValue);
        b.length && (a.seiel = b.join("~"));
        Q(xh) && (a.slmct = Rc(yh), a.samct = Rc(vh))
    };

    function fm(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = gm(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function gm(a) {
        let b = "";
        vd(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    Qa || Da();
    class hm {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function im() {
        const {
            promise: a,
            resolve: b
        } = new hm;
        return {
            promise: a,
            resolve: b
        }
    };

    function jm(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = im();
        b[a] = d;
        c();
        return d
    }

    function km(a, b, c) {
        return jm(a, b, () => {
            rd(b.document, c)
        }).promise
    };

    function lm() {
        const a = {};
        P(Qc).g(ih.g, ih.defaultValue) && (a.bust = P(Qc).g(ih.g, ih.defaultValue));
        var b = Bj();
        b = Gj(b, 38, "");
        "" !== b && (a.sbust = b);
        return a
    }
    const mm = new Map([
        [2, 7],
        [3, 1],
        [4, 3],
        [5, 12]
    ]);

    function nm(a, b, c) {
        c = Yc(c, lm());
        if (1 === a) return {
            vc: rd(b.document, c),
            Ta: new Promise(() => {})
        };
        if (mm.has(a)) return {
            Ta: km(mm.get(a), b, c)
        };
        throw Error(`Unexpected chunkId: ${a}`);
    };

    function om(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new pm;
        return a.google_reactive_ads_global_state
    }
    class pm {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new qm;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var qm = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var sm = a => {
        if (p.google_apltlad) return null;
        var b = rm(a) && 1 === (p.top == p ? 0 : pd(p.top) ? 1 : 2);
        if (p !== p.top && !b || !a.google_ad_client) return null;
        p.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        vd(a, (d, e) => {
            ii[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        em(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function rm(a) {
        let b = Q(rh);
        "aa" === a.google_loader_used && (b || (b = Q(sh)));
        return b
    };

    function tm(a, b) {
        X(S).ama_ran_on_page || Li(1001, () => {
            um(new vm(a, b))
        }, p)
    }

    function um(a) {
        Sl(a.l, a.h, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(S).ama_ran_on_page || b && wm(d, e, b, c)
        })
    }
    class vm {
        constructor(a, b) {
            this.l = p;
            this.g = a;
            this.h = b
        }
    }

    function wm(a, b, c, d) {
        d && (Qi(a).configSourceInAbg = d);
        $b(c, zi, 24) && (d = Ri(a), d.availableAbg = !0, d.ablationFromStorage = !!D(c, zi, 24) ? .g() ? .g());
        if (ca(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            if (!jl(a, E(c, vi, 7))) {
                dj("amaait", {
                    value: "true"
                });
                return
            }
            dj("amaait", {
                value: "false"
            })
        }
        X(S).ama_ran_on_page = !0;
        D(c, ni, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        var e = D(c, mi, 13);
        e && 1 === I(e, 1) ? (d = 0, (e = D(e, li, 6)) && G(e, 3) && (d = G(e, 3) || 0), zl(a, d)) : D(c, zi, 24) ? .g() ? .g() && (Ri(a).ablatingThisPageview = !0, zl(a, 1));
        Wd(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = fl(ca(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = Ug(Yg, new Vg(null, b));
        cj(782, () => {
            dm(a, f, c, g)
        })
    };

    function xm(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            tb: a,
            Lb: d
        }
    };

    function ym({
        va: a,
        Ca: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var zm = {
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        Am = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Bm = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        Cm = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function Dm(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !ae() ? Am : Bm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = Cm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    var Em = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Fm(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };
    var Gm = class extends N {
        constructor() {
            super()
        }
        getVersion() {
            return L(this, 2)
        }
    };

    function Hm(a, b) {
        return y(a, 2, Hb(b))
    }

    function Im(a, b) {
        return y(a, 3, Hb(b))
    }

    function Jm(a, b) {
        return y(a, 4, Hb(b))
    }

    function Km(a, b) {
        return y(a, 5, Hb(b))
    }

    function Lm(a, b) {
        return y(a, 9, Hb(b))
    }

    function Mm(a, b) {
        return qc(a, 10, b)
    }

    function Nm(a, b) {
        return y(a, 11, ub(b))
    }

    function Om(a, b) {
        return y(a, 1, Hb(b))
    }

    function Pm(a, b) {
        return y(a, 7, ub(b))
    }
    var Qm = class extends N {
        constructor() {
            super()
        }
    };
    Qm.u = [10, 6];
    const Rm = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Sm() {
        var a = S;
        if ("function" !== typeof a.navigator ? .userAgentData ? .getHighEntropyValues) return null;
        const b = a.google_tag_data ? ? (a.google_tag_data = {});
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Rm).then(c => {
            b.uach ? ? (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Tm(a) {
        return Nm(Mm(Km(Hm(Om(Jm(Pm(Lm(Im(new Qm, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new Gm;
            c = y(c, 1, Hb(b.brand));
            return y(c, 2, Hb(b.version))
        }) || []), a.wow64 || !1)
    }

    function Um() {
        return Sm() ? .then(a => Tm(a)) ? ? null
    };

    function Vm(a, b) {
        b.google_ad_host || (a = Dl(a)) && (b.google_ad_host = a)
    }

    function Wm(a, b, c = "") {
        S.google_sa_queue || (S.google_sa_queue = [], S.google_process_slots = W.oa(215, () => {
            Xm(S.google_sa_queue)
        }), a = Ym(c, a, b), nm(1, S, a))
    }

    function Xm(a) {
        const b = a.shift();
        "function" === typeof b && W.ea(216, b);
        a.length && p.setTimeout(W.oa(215, () => {
            Xm(a)
        }), 0)
    }

    function Zm(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }

    function Ym(a, b, c) {
        var d = S;
        b = K(c, 4) ? b.Fb : b.Gb;
        a: {
            if (K(c, 4)) {
                if (a = a || Dm(d)) {
                    a = Q(gh) ? be(a) : a;
                    d = Q(Eh) ? {
                        client: a,
                        plah: d.location.host,
                        aplac: Q(Eh).toString()
                    } : {
                        client: a,
                        plah: d.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        return Yc(b, d)
    }

    function $m(a) {
        a: {
            var b = [p.top];
            var c = [];
            let e = 0,
                f;
            for (; f = b[e++];) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    Qd = d;
                    break a
                }
            } catch (g) {}
            Qd = null
        }
        if (Qd) return null;d = sd("IFRAME");d.id = "google_esf";d.name = "google_esf";b = a.Ob;c = P(Qc).g(uh.g, uh.defaultValue);
        "inhead" === c ? b = a.Mb : "nohtml" === c && (b = a.Nb);Q(qh) && (b = Yc(b, {
            hello: "world"
        }));d.src = $c(b).toString();d.style.display = "none";
        return d
    }

    function an(a, b, c, d) {
        const {
            tb: e,
            Lb: f
        } = xm(a, b);
        c.appendChild(f);
        bn(a, c, b);
        c = b.google_start_time ? ? oa;
        const g = (new Date).getTime();
        b.google_lrv = ym({
            va: "m202402150101",
            Ca: L(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        Zm(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) &&
            W.Y(911, h)
        })
    }

    function bn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Em[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = wd(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const m = h[l];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g =
                    ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && 25 > d; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = wd(b + e.join()).toString()
        }
    }

    function cn() {
        var a = qd(p);
        a && (a = om(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function dn() {
        const a = Um();
        null != a && a.then(b => {
            a: {
                kb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Mb);
                    break a
                } finally {
                    kb = !1
                }
                c = void 0
            }
            S.google_user_agent_client_hint = c
        });
        Fd()
    };

    function en(a) {
        return b => !!(b.fa & a)
    }
    class Y extends ai {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.fa = c;
            this.xb = d
        }
        pa() {
            return this.fa
        }
        h(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    };
    const fn = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        gn = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        hn = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function jn(a) {
        var b = 0;
        a.P && b++;
        a.K && b++;
        a.L && b++;
        if (3 > b) return {
            N: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.P.split(",");
        const c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            N: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            N: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                N: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                N: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            L: d,
            K: e,
            bb: b
        }
    }

    function kn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    const ln = Pa("script");
    class mn {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, n = null) {
            this.B = a;
            this.ba = b;
            this.fa = c;
            this.g = d;
            this.X = e;
            this.h = f;
            this.i = g;
            this.C = h;
            this.D = k;
            this.j = l;
            this.s = m;
            this.H = n
        }
        size() {
            return this.ba
        }
    };
    const nn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var on = class extends ai {
        g(a) {
            return Math.min(1200, Math.max(this.U, Math.round(a)))
        }
    };

    function pn(a, b) {
        qn(a, b);
        if ("pedestal" === b.google_content_recommendation_ui_type) return new mn(9, new on(a, Math.floor(a * b.google_phwr)));
        var c = hd();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * fn.mobile_banner_image_sidebyside + gn.mobile_banner_image_sidebyside) + 96), a = {
            aa: a,
            Z: c,
            K: 1,
            L: 12,
            P: "mobile_banner_image_sidebyside"
        }) : (a = kn(a), a = {
            aa: a.width,
            Z: a.height,
            K: 1,
            L: 13,
            P: "image_sidebyside"
        }) : (a = kn(a), a = {
            aa: a.width,
            Z: a.height,
            K: 4,
            L: 2,
            P: "image_stacked"
        });
        rn(b, a);
        return new mn(9, new on(a.aa, a.Z))
    }

    function sn(a, b) {
        qn(a, b);
        var c = jn({
            L: b.google_content_recommendation_rows_num,
            K: b.google_content_recommendation_columns_num,
            P: b.google_content_recommendation_ui_type
        });
        if (c.N) a = {
            aa: 0,
            Z: 0,
            K: 0,
            L: 0,
            P: "image_stacked",
            N: c.N
        };
        else {
            var d = 2 === c.bb.length && 468 <= a ? 1 : 0;
            var e = c.bb[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = hn[e];
            let g = c.K[d];
            for (; a / g < f && 1 < g;) g--;
            f = g;
            d = c.L[d];
            c = Math.floor(((a - 8 * f - 8) / f * fn[e] + gn[e]) * d + 8 * d + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    Hb: `Calculated slot width is too large: ${a}`
                } :
                1500 < c ? {
                    width: 0,
                    height: 0,
                    Hb: `Calculated slot height is too large: ${c}`
                } : {
                    width: a,
                    height: c
                };
            a = {
                aa: a.width,
                Z: a.height,
                K: f,
                L: d,
                P: e
            }
        }
        if (a.N) throw new V(a.N);
        rn(b, a);
        return new mn(9, new on(a.aa, a.Z))
    }

    function qn(a, b) {
        if (0 >= a) throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }

    function rn(a, b) {
        a.google_content_recommendation_ui_type = b.P;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    };
    class tn extends ai {
        g() {
            return this.U
        }
        h(a, b, c) {
            $h(a, c);
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    };
    const un = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var vn = class extends ai {
            g() {
                return Math.min(1200, this.U)
            }
        },
        wn = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = Vh(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = Ph(b))
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const k = g.parentElement.childNodes;
                                for (let l = 0; l < k.length; ++l) {
                                    const m = k[l];
                                    if (m !== g && Yh(b, m)) break b
                                }
                                g = g.parentElement;
                                g.style.width = "100%";
                                g.style.height = "auto"
                            }
                        }
                        $h(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new V("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new mn(11, new ai(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b = null;
                if (!b) throw new V("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new V("Invalid height: height=" + f);
                if (50 > f) throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new V("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new mn(11, new ai(a, f))
            }
            d = un[f];
            if (!d) throw new V("Invalid data-ad-layout value: " + f);
            c = di(c, b);
            b = Ph(b);
            b = "in-article" !== f ||
                c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new mn(11, "in-article" == f ? new vn(a, b) : new ai(a, b))
        };

    function xn(a) {
        return b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function yn(a, b) {
        var c = zn.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (null == b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        zn = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    var Bn = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                F: a,
                G: 1
            } : "autorelaxed" === b && e.google_full_width_responsive || An(b) || e.google_ad_resize ? (b = Wh(a, c, d, e), c = !0 !== b ? {
                F: a,
                G: b
            } : {
                F: Ph(c) || a,
                G: !0
            }) : c = {
                F: a,
                G: 2
            };
            const {
                F: f,
                G: g
            } = c;
            return !0 !== g ? {
                F: a,
                G: g
            } : d.parentElement ? {
                F: f,
                G: g
            } : {
                F: a,
                G: g
            }
        },
        En = (a, b, c, d, e) => {
            const {
                F: f,
                G: g
            } = cj(247, () => Bn(a, b, c, d, e));
            var h = !0 === g;
            const k = R(d.style.width),
                l = R(d.style.height),
                {
                    W: m,
                    T: n,
                    pa: t,
                    ab: v
                } = Cn(f, b, c, d, e, h);
            h = Dn(b, t);
            var w;
            const A = (w = bi(d, c, "marginLeft", R)) ? w + "px" :
                "",
                z = (w = bi(d, c, "marginRight", R)) ? w + "px" : "";
            w = bi(d, c, "zIndex") || "";
            return new mn(h, m, t, null, v, g, n, A, z, l, k, w)
        },
        An = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        Cn = (a, b, c, d, e, f) => {
            b = Fn(c, a, b);
            let g;
            var h = !1;
            let k = !1;
            var l = 488 > Ph(c);
            if (l) {
                g = Qh(d, c);
                var m = di(d, c);
                h = !m && g;
                k = m && g
            }
            m = [ci(a), en(b)];
            m.push(fi(l, c, d, k));
            null != e.google_max_responsive_height && m.push(gi(e.google_max_responsive_height));
            l = [w => !w.xb];
            if (h || k) h = hi(c, d), l.push(gi(h));
            let n = yn(xn(m), xn(l));
            if (!n) throw new V("No slot size for availableWidth=" +
                a);
            const {
                W: t,
                T: v
            } = cj(248, () => {
                var w;
                a: if (f) {
                    if (e.gfwrnh && (w = R(e.gfwrnh))) {
                        w = {
                            W: new tn(a, w),
                            T: !0
                        };
                        break a
                    }
                    w = a / 1.2;
                    var A = Math;
                    var z = A.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var F = Infinity;
                    else {
                        F = d;
                        let ta = Infinity;
                        do {
                            var J = bi(F, c, "height", R);
                            J && (ta = Math.min(ta, J));
                            (J = bi(F, c, "maxHeight", R)) && (ta = Math.min(ta, J))
                        } while ((F = F.parentElement) && "HTML" != F.tagName);
                        F = ta
                    }
                    A = z.call(A, w, F);
                    if (A < .5 * w || 100 > A) A = w;
                    w = {
                        W: new tn(a, Math.floor(A)),
                        T: A < w ? 102 : !0
                    }
                } else w = {
                    W: n,
                    T: 100
                };
                return w
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                W: Gn(a, c, d, t, e),
                T: !1,
                pa: b,
                ab: g
            } : {
                W: t,
                T: v,
                pa: b,
                ab: g
            }
        };
    const Dn = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        Fn = (a, b, c) => {
            if ("auto" == c) c = Math.min(1200, Ph(a)), b = .25 >= b / c ? 4 : 3;
            else {
                b = 0;
                for (const d in Mh) - 1 !== c.indexOf(d) && (b |= Mh[d])
            }
            return b
        },
        Gn = (a, b, c, d, e) => {
            const f = e.google_ad_height || bi(c, b, "height", R);
            b = wn(a, b, c, f, e).size();
            return b.U * b.height() > a * d.height() ? new Y(b.U, b.height(), 1) : d
        };
    var Hn = (a, b, c, d, e) => {
        var f;
        (f = Ph(b)) ? 488 > Ph(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, $h(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        const {
            F: g,
            G: h
        } = f;
        if (!0 !== h || a == g) return new mn(12, new ai(a, d), null, null, !0, h, 100);
        const {
            W: k,
            T: l,
            pa: m
        } = Cn(g, "auto", b, c, e, !0);
        return new mn(1, k, m, 2, !0, h, l)
    };
    var Jn = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" === c) {
                a: {
                    if ("pedestal" !== b.google_content_recommendation_ui_type)
                        for (const d of nn)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (An(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (In(b), 1);
            if (27 === b.google_reactive_ad_format) return In(b), 1
        },
        Ln = (a, b, c, d, e = !1) => {
            var f = b.offsetWidth || (c.google_ad_resize || e) && bi(b, d, "width",
                R) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            e = (e = Kn(a, f, b, c, d)) ? e : En(f, c.google_ad_format, d, b, c);
            e.size().h(d, c, b);
            null != e.fa && (c.google_responsive_formats = e.fa);
            null != e.X && (c.google_safe_for_responsive_override = e.X);
            null != e.h && (!0 === e.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.h));
            null != e.i && !0 !== e.i && (c.gfwrnher = e.i);
            d = e.s || c.google_ad_width;
            null != d && (c.google_resizing_width = d);
            d = e.j || c.google_ad_height;
            null != d && (c.google_resizing_height =
                d);
            d = e.size().g(f);
            const g = e.size().height();
            c.google_ad_width = d;
            c.google_ad_height = g;
            var h = e.size();
            f = h.g(f) + "x" + h.height();
            c.google_ad_format = f;
            c.google_responsive_auto_format = e.B;
            null != e.g && (c.armr = e.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === e.h && (c.gfwrnh = e.size().height() + "px");
            null != e.C && (c.gfwroml = e.C);
            null != e.D && (c.gfwromr = e.D);
            null != e.j && (c.gfwroh = e.j);
            null != e.s && (c.gfwrow = e.s);
            null != e.H && (c.gfwroz = e.H);
            f = qd(window) || window;
            fm(f.location,
                "google_responsive_dummy_ad") && (Na([1, 2, 3, 4, 5, 6, 7, 8], e.B) || 1 === e.g) && 2 !== e.g && (f = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${ln}>window.top.postMessage('${f}', '*'); 
          </${ln}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
            1 != a && (a = e.size().height(), b.style.height = a + "px")
        };
    const Kn = (a, b, c, d, e) => {
            const f = d.google_ad_height || bi(c, e, "height", R);
            switch (a) {
                case 5:
                    const {
                        F: g,
                        G: h
                    } = cj(247, () => Bn(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && $h(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return pn(g, d);
                case 9:
                    return sn(b, d);
                case 8:
                    return wn(b, e, c, f, d);
                case 10:
                    return Hn(b, e, c, f, d)
            }
        },
        In = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Mn(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };

    function Nn(a, b) {
        var c = qd(b);
        if (c) {
            c = Ph(c);
            const d = td(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function On(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function Pn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = ld(c, "client");
            d && (b.google_ad_client = On("google_ad_client", d));
            (c = ld(c, "host")) && (b.google_ad_host = On("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = pa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = On(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Qn(a) {
        if (a = Xd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Rn(a, b, c, d) {
        Pn(a, b);
        if (c.document && c.document.body && !Jn(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Nn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Em[e + "x" + g];
                let h = f;
                if (e) {
                    const k = Fm(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                Mn(b, 4)
            }
        }
        if (488 > Ph(c)) {
            f = qd(c) || c;
            (g =
                a.offsetWidth) || (g = bi(a, c, "width", R));
            g = g || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = fm(f.location, "google_responsive_slot_preview") || Q(th) || Hl(f, 1, e, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Jn(c, b) || Sh(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = td(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Na(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = Vh(c, a, g, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (Mn(b, 1), d = !0) : d = !1
        } else d = !1;
        if (g = Jn(c, b)) Ln(g, a, b, c, d);
        else {
            if (Sh(a, b)) {
                if (d = td(a, c)) a.style.width = d.width, a.style.height = d.height, Rh(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Qn(c)
            } else Rh(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Ln(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Wh(a.offsetWidth || parseInt(a.style.width,
                10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Sn(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && pd(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function Kf(a, b, c = 0) {
        0 < a.g.size || Tn(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }

    function Un(a, b, c, d) {
        Oc(b, c, d);
        Mj(a, () => Pc(b, c, d))
    }

    function Vn(a, b) {
        1 !== a.h && (a.h = 1, 0 < a.g.size && Wn(a, b))
    }

    function Tn(a) {
        a.l.document.visibilityState ? Un(a, a.l.document, "visibilitychange", b => {
            "hidden" === a.l.document.visibilityState && Vn(a, b);
            "visible" === a.l.document.visibilityState && (a.h = 0)
        }) : "onpagehide" in a.l ? (Un(a, a.l, "pagehide", b => {
            Vn(a, b)
        }), Un(a, a.l, "pageshow", () => {
            a.h = 0
        })) : Un(a, a.l, "beforeunload", b => {
            Vn(a, b)
        })
    }

    function Wn(a, b) {
        for (let c = 9; 0 <= c; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var Xn = class extends Lj {
        constructor(a) {
            super();
            this.l = a;
            this.h = 0;
            this.g = new Map
        }
    };
    async function Yn(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function Zn(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = Id(a.l)
    }

    function $n(a) {
        const b = a.g.wpc;
        return null !== b && "" !== b ? b : a.g.wpc = Dm(a.l)
    }

    function ao(a, b) {
        var c = new cf;
        var d = Zn(a);
        c = wc(c, 1, d);
        d = $n(a);
        c = yc(c, 2, d);
        c = wc(c, 3, a.g.sd);
        return wc(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function bo(a) {
        await Yn(a.l, () => !(!Zn(a) || !$n(a)))
    }

    function co(a) {
        var b = P(eo);
        if (b.i) {
            var c = b.B;
            a(c);
            b.g.psi = c.toJSON()
        }
    }

    function fo(a) {
        Q(kh) && Kf(a.j, () => {
            var b = ao(a);
            b = pc(b, 12, df, a.C);
            a.i && !a.g.le.includes(3) && (a.g.le.push(3), Gf(a.h, b))
        }, 9)
    }

    function go(a) {
        const b = new Ze;
        Q(jh) ? yc(b, 1, a.s) : yc(b, 1, a.l ? .document ? .URL);
        Kf(a.j, () => {
            oc(b, 2, a.B);
            wc(b, 3, a.g.tar);
            var c = a.h;
            var d = ao(a);
            d = pc(d, 8, df, b);
            Gf(c, d)
        }, 9)
    }
    async function ho(a) {
        var b = P(eo);
        if (b.i && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await bo(b);
            var d = new Xe;
            a = C(d, 5, ub(a), !1);
            d = new We;
            d = wc(d, 1, Oh(b.l).scrollWidth);
            d = wc(d, 2, Oh(b.l).scrollHeight);
            a = oc(a, 2, d);
            d = new We;
            var e = Ph(b.l);
            d = wc(d, 1, e);
            d = wc(d, 2, Oh(b.l).clientHeight);
            a = oc(a, 1, d);
            Q(jh) ? yc(a, 4, b.s) : yc(a, 4, b.l ? .document ? .URL);
            d = Sn(b.l);
            0 !== d && (e = new Ve, d = y(e, 1, xb(d)), oc(a, 3, d));
            d = b.h;
            c = ao(b, c);
            c = pc(c, 4, df, a);
            Gf(d, c);
            fo(b);
            go(b)
        }
    }
    async function io(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await bo(a);
            var e = a.h;
            a = ao(a, d);
            d = new Ue;
            b = C(d, 1, xb(b), 0);
            c = hc(b, 2, c, zb);
            c = pc(a, 9, df, c);
            Gf(e, c)
        }
    }
    async function jo(a, b) {
        await bo(a);
        var c = a.h;
        a = ao(a);
        a = wc(a, 3, 1);
        b = pc(a, 10, df, b);
        Gf(c, b)
    }
    var eo = class {
        constructor(a, b) {
            this.l = Yd() || window;
            this.j = b ? ? new Xn(this.l);
            this.h = a ? ? new Mf(2, "m202402150101", 100, 100, !0, this.j);
            this.g = Ej(Bj(), 33, () => {
                const c = Rc(hh);
                return {
                    sd: c,
                    ssp: 0 < c && ud() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get i() {
            return this.g.ssp
        }
        get s() {
            return this.g.cu
        }
        set s(a) {
            this.g.cu = a
        }
        get B() {
            return cj(1178, () => zc(Ye, Ub(this.g.psi || []))) || new Ye
        }
        get C() {
            return cj(1227, () => zc($e, Ub(this.g.cc || []))) || new $e
        }
    };

    function ko() {
        var a = window;
        return "on" === p.google_adtest || "on" === p.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && 0 < b) || [] : []
    };

    function lo(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function mo(a) {
        var b = S.document;
        if (b.currentScript) return lo(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === lo(c, a)) return 0;
        return 1
    };

    function no(a, b) {
        return {
            [3]: {
                [55]: () => 0 === a,
                [23]: c => Hl(S, Number(c)),
                [24]: c => Kl(Number(c)),
                [61]: () => K(b, 6),
                [63]: () => K(b, 6) || ".google.ch" === L(b, 8)
            },
            [4]: {},
            [5]: {
                [6]: () => L(b, 15)
            }
        }
    };

    function oo(a = p) {
        return a.ggeac || (a.ggeac = {})
    };

    function po(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function qo(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function ro(a, b) {
        try {
            const d = a.split(".");
            a = p;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var so = {
        [3]: {
            [8]: a => {
                try {
                    return null != ba(a)
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ba(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Na(P(qg).g(), Number(a)),
            [27]: a => {
                a = ro(a, "boolean");
                return void 0 !== a ? a : void 0
            },
            [60]: a => {
                try {
                    return !!p.document.querySelector(a)
                } catch {}
            },
            [69]: a => po(a, p.document),
            [70]: a => qo(a, p.document)
        },
        [4]: {
            [3]: () => Bd(),
            [6]: a => {
                a = ro(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = ro(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };

    function to(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                ib: h,
                eb: k,
                fb: l
            } = e[e.length - 1];
            c.set(d, h + k * l)
        }
        for (const f of b)
            for (const g of E(f, ql, 2))
                if (0 !== E(g, pl, 2).length) {
                    b = sc(Cb(Yb(g, 8)));
                    M(g, 4) && !M(g, 13) && (b = c.get(M(g, 4)) ? ? 0, d = sc(Cb(Yb(g, 1))) * E(g, pl, 2).length, c.set(M(g, 4), b + d));
                    d = [];
                    for (e = 0; e < E(g, pl, 2).length; e++) {
                        const h = {
                            ib: b,
                            eb: sc(Cb(Yb(g, 1))),
                            fb: E(g, pl, 2).length,
                            Bb: e,
                            Xa: M(f, 1),
                            qa: g,
                            O: E(g, pl, 2)[e]
                        };
                        d.push(h)
                    }
                    uo(a[2], M(g, 10), d) || uo(a[1], M(g, 4), d) || uo(a[0], E(g, pl, 2)[0].getId(),
                        d)
                }
        return a
    }

    function uo(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function vo(a = ud()) {
        return b => wd(`${b} + ${a}`) % 1E3
    };
    const wo = [12, 13, 20];

    function xo(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function yo(a, b, c, d) {
        const e = [];
        var f;
        if (f = 9 !== b) a.j[b] ? f = !0 : (a.j[b] = !0, f = !1);
        if (f) return Of(a.M, b, c, e, [], 4), e;
        f = wo.includes(b);
        const g = [],
            h = P(Sf).I,
            k = [];
        for (const t of [0, 1, 2])
            for (const [v, w] of a.ka[t].entries()) {
                var l = v,
                    m = w;
                const A = new jf;
                var n = m.filter(z => z.Xa === b && !!a.h[z.O.getId()] && Ke(D(z.qa, De, 3), h) && Ke(D(z.O, De, 3), h));
                if (n.length)
                    for (const z of n) k.push(z.O);
                else if (!a.za && (2 === t ? (n = d[1], ic(A, 2, kf, xb(l))) : n = d[0], l = n ? .(String(l)) ? ? (2 === t && 1 === M(m[0].qa, 11) ? void 0 : d[0](String(l))), void 0 !== l)) {
                    for (const z of m)
                        if (z.Xa ===
                            b) {
                            m = l - z.ib;
                            n = z.eb;
                            const F = z.fb,
                                J = z.Bb;
                            0 <= m && m < n * F && m % F === J && Ke(D(z.qa, De, 3), h) && Ke(D(z.O, De, 3), h) && (m = M(z.qa, 13), 0 !== m && void 0 !== m && (n = a.i[String(m)], void 0 !== n && n !== z.O.getId() ? Qf(a.M, a.i[String(m)], z.O.getId(), m) : a.i[String(m)] = z.O.getId()), k.push(z.O))
                        }
                    0 !== lc(A, kf) && (C(A, 3, Ab(l), 0), g.push(A))
                }
            }
        for (const t of k) d = t.getId(), e.push(d), xo(a, d, f ? 4 : c), hg(E(t, Ne, 2), f ? jg() : [c], a.M, d);
        Of(a.M, b, c, e, g, 1);
        return e
    }

    function zo(a, b) {
        b = b.map(c => new rl(c)).filter(c => !wo.includes(M(c, 1)));
        a.ka = to(a.ka, b)
    }

    function Ao(a, b) {
        T(1, c => {
            a.h[c] = !0
        }, b);
        T(2, (c, d, e) => yo(a, c, d, e), b);
        T(3, c => (a.g[c] || []).concat(a.g[4]), b);
        T(12, c => void zo(a, c), b);
        T(16, (c, d) => void xo(a, c, d), b)
    }
    var Bo = class {
        constructor(a, b, c, {
            za: d = !1,
            xc: e = []
        } = {}) {
            this.ka = a;
            this.M = c;
            this.j = {};
            this.za = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            this.i = {};
            if (a = ie()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.h[a] = !0)
            }
            for (const f of e) this.h[f] = !0
        }
    };

    function Co(a, b) {
        a.g = lg(14, b, () => {})
    }
    class Do {
        constructor() {
            this.g = () => {}
        }
    }

    function Eo(a) {
        P(Do).g(a)
    };

    function Fo({
        sb: a,
        I: b,
        config: c,
        nb: d = oo(),
        ob: e = 0,
        M: f = new Rf(D(a, sl, 5) ? .g() ? ? 0, D(a, sl, 5) ? .h() ? ? 0, D(a, sl, 5) ? .i() ? ? !1),
        ka: g = to({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, E(a, rl, 2))
    }) {
        d.hasOwnProperty("init-done") ? (lg(12, d, () => {})(E(a, rl, 2).map(h => h.toJSON())), lg(13, d, () => {})(E(a, Ne, 1).map(h => h.toJSON()), e), b && lg(14, d, () => {})(b), Go(e, d)) : (Ao(new Bo(g, e, f, c), d), mg(d), ng(d), og(d), Go(e, d), hg(E(a, Ne, 1), [e], f, void 0, !0), Tf = Tf || !(!c || !c.wb), Eo(so), b && Eo(b))
    }

    function Go(a, b = oo()) {
        pg(P(qg), b, a);
        Ho(b, a);
        Co(P(Do), b);
        P(Qc).s()
    }

    function Ho(a, b) {
        const c = P(Qc);
        c.i = (d, e) => lg(5, a, () => !1)(d, e, b);
        c.j = (d, e) => lg(6, a, () => 0)(d, e, b);
        c.g = (d, e) => lg(7, a, () => "")(d, e, b);
        c.h = (d, e) => lg(8, a, () => [])(d, e, b);
        c.s = () => {
            lg(15, a, () => {})(b)
        }
    };

    function Io(a, b) {
        b = {
            [0]: vo(Id(b).toString())
        };
        b = P(qg).j(a, b);
        ug.Y(1085, io(P(eo), a, b))
    }

    function Jo(a, b, c) {
        var d = X(a);
        if (d.plle) Go(1, oo(a));
        else {
            d.plle = !0;
            d = D(b, tl, 12);
            var e = K(b, 9);
            Fo({
                sb: d,
                I: no(c, b),
                config: {
                    za: e && !!a.google_disable_experiments,
                    wb: e
                },
                nb: oo(a),
                ob: 1
            });
            if (c = L(b, 15)) c = Number(c), P(qg).i(c);
            for (const f of cc(b, 19, Bb)) P(qg).h(f);
            Io(12, a);
            Io(10, a);
            a = qd(a) || a;
            fm(a.location, "google_mc_lab") && P(qg).h(44738307);
            fm(a.location, "google_auto_storify_swipeable") && P(qg).h(44773747);
            fm(a.location, "google_auto_storify_scrollable") && P(qg).h(44773746)
        }
    };

    function Ko(a) {
        W.Da(b => {
            b.shv = String(a);
            b.mjsv = ym({
                va: "m202402150101",
                Ca: a
            });
            const c = P(qg).g(),
                d = ko();
            b.eid = c.concat(d).join(",")
        })
    };

    function Lo(a) {
        var b = W;
        try {
            return Ac(a, Be), new vl(JSON.parse(a))
        } catch (c) {
            b.J(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new vl
    };

    function Mo(a) {
        if (a.g) return a.g;
        a.B && a.B(a.h) ? a.g = a.h : a.g = Ad(a.h, a.D);
        return a.g ? ? null
    }
    var No = class extends Lj {
        constructor(a, b, c) {
            super();
            this.D = b;
            this.B = c;
            this.C = new Map;
            this.j = new Map;
            this.h = a
        }
    };
    const Oo = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.ca({
                    wa: c ? ? void 0,
                    rb: d ? void 0 : 2
                })
            })
        },
        Po = {
            yb: a => a.ca,
            zb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Cb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    wa: b.returnValue ? ? void 0,
                    rb: b.success ? void 0 : 2
                })
            }
        };
    var Qo = class extends Lj {
        constructor() {
            var a = S;
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new No(a, "__uspapiLocator", b => "function" === typeof b.__uspapi);
            this.caller.C.set("getDataWithCallback", Oo);
            this.caller.j.set("getDataWithCallback", Po)
        }
    };
    var Ro = Ec(class extends N {});
    const So = (a, b) => {
            const c = {
                cb: d => {
                    d = Ro(d);
                    b.ca({
                        wa: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        To = {
            yb: a => a.ca,
            zb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Cb: (a, b) => {
                a({
                    wa: b
                })
            }
        };
    var Uo = class extends Lj {
        constructor() {
            var a = S;
            super();
            this.g = this.h = !1;
            this.caller = new No(a, "googlefcPresent");
            this.caller.C.set("getDataWithCallback", So);
            this.caller.j.set("getDataWithCallback", To)
        }
    };
    var Vo = a => {
        Oc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };

    function Wo(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Xo(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function Yo() {
        const a = new Set,
            b = qj();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function Zo(a) {
        a = a.id;
        return null != a && (Yo().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function $o(a, b, c) {
        if (!a.sources) return !1;
        switch (ap(a)) {
            case 2:
                const d = bp(a);
                if (d) return c.some(f => cp(d, f));
                break;
            case 1:
                const e = dp(a);
                if (e) return b.some(f => cp(e, f))
        }
        return !1
    }

    function ap(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function dp(a) {
        return ep(a, b => b.currentRect)
    }

    function bp(a) {
        return ep(a, b => b.previousRect)
    }

    function ep(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function cp(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function fp() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(Zo),
            b = [...Yo()].map(c => document.getElementById(c)).filter(c => null !== c);
        gp = window.scrollX;
        hp = window.scrollY;
        return ip = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function jp() {
        var a = new kp;
        if (Q(Kc)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.kb.qb && b.push("event");
                for (const c of b) b = {
                    type: c,
                    buffered: !0
                }, "event" === c && (b.durationThreshold = 40), lp(a).observe(b);
                mp(a)
            }
        }
    }

    function np(a, b) {
        const c = gp !== window.scrollX || hp !== window.scrollY ? [] : ip,
            d = fp();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                op(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Ka = Math.floor(b.renderTime || b.loadTime);
                a.Ja = b.size;
                break;
            case "first-input":
                b = e;
                a.Ga = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ha = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || pp(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.H = Math.max(a.H, b);
                a.sa += 1;
                break;
            case "event":
                pp(a, e);
                break;
            default:
                nd(b, void 0)
        }
    }

    function lp(a) {
        a.M || (a.M = new PerformanceObserver(Ki(640, b => {
            np(a, b)
        })));
        return a.M
    }

    function mp(a) {
        const b = Ki(641, () => {
                var d = document;
                2 === (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && qp(a)
            }),
            c = Ki(641, () => void qp(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Fa = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            lp(a).disconnect()
        }
    }

    function qp(a) {
        if (!a.Na) {
            a.Na = !0;
            lp(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Xo("cls", a.C), b += Xo("mls", a.X), b += Wo("nls", a.ra), window.LayoutShiftAttribution && (b += Xo("cas", a.s), b += Wo("nas", a.Ma), b += Xo("was", a.Ra)), b += Xo("wls", a.ta), b += Xo("tls", a.Qa));
            window.LargestContentfulPaint && (b += Wo("lcp", a.Ka), b += Wo("lcps", a.Ja));
            window.PerformanceEventTiming && a.Ha && (b += Wo("fid", a.Ga));
            window.PerformanceLongTaskTiming && (b += Wo("cbt", a.B),
                b += Wo("mbt", a.H), b += Wo("nlt", a.sa));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Zo(c) && d++;
            b += Wo("nif", d);
            b += Wo("ifi", $d(window));
            c = P(qg).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${p===p.top?1:0}`;
            b += a.Pa ? `&${"qqid"}=${encodeURIComponent(a.Pa)}` : Wo("pvsid", Id(p));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.M ? a.Ia : performance.interactionCount || 0) / 50));
            0 <= c && (c = a.g[c].latency, 0 <= c && (b += Wo("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Fa()
        }
    }

    function op(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.C += Number(b.value);
            Number(b.value) > a.X && (a.X = Number(b.value));
            a.ra += 1;
            if (c = $o(b, c, d)) a.s += b.value, a.Ma++;
            if (5E3 < b.startTime - a.La || 1E3 < b.startTime - a.Oa) a.La = b.startTime, a.h = 0, a.i = 0;
            a.Oa = b.startTime;
            a.h += b.value;
            c && (a.i += b.value);
            a.h > a.ta && (a.ta = a.h, a.Ra = a.i, a.Qa = b.startTime + b.duration)
        }
    }

    function pp(a, b) {
        rp(a, b);
        const c = a.g[a.g.length - 1],
            d = a.D[b.interactionId];
        if (d || 10 > a.g.length || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.D[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.D[e.id]
        })
    }

    function rp(a, b) {
        b.interactionId && (a.ba = Math.min(a.ba, b.interactionId), a.j = Math.max(a.j, b.interactionId), a.Ia = a.j ? (a.j - a.ba) / 7 + 1 : 0)
    }
    var kp = class {
            constructor() {
                var a = {
                    qb: Q(Dh)
                };
                this.i = this.h = this.ra = this.X = this.C = 0;
                this.Oa = this.La = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.D = {};
                this.Ia = 0;
                this.ba = Infinity;
                this.Ga = this.Ja = this.Ka = this.Ma = this.Ra = this.s = this.Qa = this.ta = this.j = 0;
                this.Ha = !1;
                this.sa = this.H = this.B = 0;
                this.M = null;
                this.Na = !1;
                this.Fa = () => {};
                const b = document.querySelector("[data-google-query-id]");
                this.Pa = b ? b.getAttribute("data-google-query-id") : null;
                this.kb = a
            }
        },
        gp, hp, ip = [];
    let sp = null;
    const tp = [],
        up = new Map;
    let vp = -1;

    function wp(a) {
        return ji.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function xp(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        yp(a, b, c)
    }

    function yp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Rn);
        var e = b.google_reactive_ads_config;
        e || Rn(a, b, d, c);
        Vm(d, b);
        if (!zp(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(S).page_contains_reactive_tag && !X(S).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Al(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(S).page_contains_reactive_tag = !0;
                Al(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Zd(d);
            vd(zm, (f, g) => {
                b[g] = b[g] || d[g]
            });
            "sd" !== b.google_loader_used && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = 1 === (X(S).first_tag_on_page || 0);
            cj(164, () => {
                an(d, b, a, c)
            })
        }
    }

    function zp(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = yl(c);
        if (f && f.Sa && "on" !== b.google_adtest && !e) {
            e = Th(a, c);
            const g = Oh(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.ua || f.ua && (e || 0) >= f.ua) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = da(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Jb && (null !== zd(a.getAttribute("width")) &&
                a.setAttribute("width", "0"), null !== zd(a.getAttribute("height")) && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = td(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Ap(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (wp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }

    function Bp(a, b, c) {
        if (a && "shift" in a) {
            co(e => {
                uc(mc(e), 2) || (e = mc(e), xc(e, 2))
            });
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    Cp(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function Dp() {
        const a = sd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Cd(a);
        return a
    }

    function Ep(a, b) {
        const c = {},
            d = Rl(a.google_ad_client, b);
        vd(Nh, (g, h) => {
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        ca(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = Dp();
        Jd.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(S).pause_ad_requests;
        xp(e, f, b);
        co(g => {
            uc(mc(g), 6) || (g = mc(g), xc(g, 6))
        })
    }

    function Fp(a, b) {
        om(p).wasPlaTagProcessed = !0;
        const c = () => {
                Ep(a, b)
            },
            d = p.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) Ep(a, b);
        else {
            const e = Nc(W.oa(191, c));
            Oc(d, "DOMContentLoaded", e);
            null != p.MutationObserver && (new p.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Cp(a, b, c) {
        const d = {};
        cj(165, () => {
            Gp(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Hp(a) {
        delete a.google_checked_head;
        vd(a, (b, c) => {
            ii[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function Ip(a, b) {
        var c = S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) Jp(c);
            else {
                co(g => {
                    g = mc(g);
                    C(g, 7, ub(!0), !1)
                });
                var e = {};
                Pn(c, e);
                Hp(e);
                var f = Vc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                "bottom" ===
                e.google_overlays && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                S.adsbygoogle || (S.adsbygoogle = []);
                d = S.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.h() ? .h() ? Kp(f, a) : Vo(() => {
                    Kp(f, a)
                })
            }
        }
    }

    function Jp(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = ld(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Lp(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function Gp(a, b, c, d) {
        if (null == a) throw new V("push() called with no parameters.");
        co(f => {
            uc(mc(f), 3) || (f = mc(f), xc(f, 3))
        });
        d.i() && Mp(a, d.g().g(), L(d, 2));
        var e = Lp(a);
        if (0 !== e)
            if (d = Bl(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = oa), null == sp) Np(a), tp.push(a);
            else if (3 === e) {
            const f = sp;
            cj(787, () => {
                f.handleAdConfig(a)
            })
        } else ej(730, sp.handleAdBreak(a));
        else {
            oa = (new Date).getTime();
            Wm(c, d, Op(a));
            Pp();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" ===
                        typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) co(f => {
                uc(mc(f), 4) || (f = mc(f), xc(f, 4))
            }), Qp(a, d);
            else if ((e = a.params) && vd(e, (f, g) => {
                    b[g] = f
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Rp(a.element);
                Pn(e, b);
                c = X(p).head_tag_slot_vars || {};
                vd(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") &&
                    !X(p).head_tag_slot_vars) throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new V("Ad client is missing from the slot.");
                if (c = 0 === (X(S).first_tag_on_page || 0) && sm(b)) co(f => {
                    uc(mc(f), 5) || (f = mc(f), xc(f, 5))
                }), Sp(c);
                0 === (X(S).first_tag_on_page || 0) && (X(S).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(S).pause_ad_requests;
                xp(e, b, d)
            }
        }
    }
    let Tp = !1;

    function Mp(a, b, c) {
        Tp || (Tp = !0, a = Op(a) || Dm(S), dj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function Op(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Pp() {
        if (Q(ph)) {
            var a = yl(S);
            if (!(a = a && a.Sa)) {
                a = S;
                try {
                    var b = a.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? ml(b) : null;
                a = !(b && ll(b) && b)
            }
            a || zl(S, 1)
        }
    }

    function Sp(a) {
        Kd(() => {
            om(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        })
    }

    function Qp(a, b) {
        0 === (X(S).first_tag_on_page || 0) && (X(S).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(p);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        tm(a, b);
        Fp(a, b)
    }

    function Rp(a) {
        if (a) {
            if (!wp(a) && (a.id ? a = Ap(a.id) : a = null, !a)) throw new V("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new V("'element' is not a good DOM element.");
        } else if (a = Ap(), !a) throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Up() {
        var a = new Tj(S),
            b = new Qo,
            c = new Uo,
            d = S.__cmp ? 1 : 0;
        a = Qj(a) ? 1 : 0;
        b = Mo(b.caller) ? 1 : 0;
        c.h || (c.g = !!Mo(c.caller), c.h = !0);
        c = c.g;
        dj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function Vp(a) {
        var b = Bj();
        Hj(b, 26, !!Number(a))
    }

    function Wp(a) {
        Number(a) ? X(S).pause_ad_requests = !0 : (X(S).pause_ad_requests = !1, a = () => {
            if (!X(S).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                S.dispatchEvent(c)
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function Xp(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function Kp(a, b) {
        b = nm(2, p, b.Ib).Ta.then(c => {
            null == sp && (c.init(a), sp = c, Yp(c))
        });
        W.Y(723, b);
        b.finally(() => {
            tp.length = 0;
            dj("slotcar", {
                event: "api_ld",
                time: Date.now() - oa,
                time_pr: Date.now() - vp
            });
            Q(Gh) && jo(P(eo), af(23))
        })
    }

    function Yp(a) {
        for (const [c, d] of up) {
            var b = c;
            const e = d; - 1 !== e && (p.clearTimeout(e), up.delete(b))
        }
        for (b = 0; b < tp.length; b++) {
            if (up.has(b)) continue;
            const c = tp[b],
                d = Lp(c);
            cj(723, () => {
                if (3 === d) a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.Y(730, e)
                }
            })
        }
    }

    function Np(a) {
        var b = tp.length;
        if (2 === Lp(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone; - 1 === vp && (vp = Date.now());
            var d = p.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), up.set(b, -1), dj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }), Q(Gh) && jo(P(eo), af(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, 1E3 * Rc(Fh));
            up.set(b, d)
        }
    }

    function Zp() {
        var a = S.document,
            b = Ud `https://googleads.g.doubleclick.net`;
        const c = a.createElement("LINK");
        c.crossOrigin = "";
        a: {
            if (b instanceof Xc) c.href = $c(b).toString();
            else {
                if (-1 === od.indexOf("preconnect")) throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
                b instanceof dd ? b = b instanceof dd && b.constructor === dd ? b.g : "type_error:SafeUrl" : b = md.test(b) ? b : void 0;
                if (void 0 === b) break a;
                c.href = b
            }
            c.rel = "preconnect"
        }
        a.head.appendChild(c)
    };
    (function(a, b, c, d = () => {}) {
        W.hb(fj);
        cj(166, () => {
            const e = new Mf(2, a);
            try {
                sb(n => {
                    var t = new Af;
                    var v = new zf;
                    try {
                        var w = Id(window);
                        wc(v, 1, w)
                    } catch (J) {}
                    try {
                        var A = P(qg).g();
                        hc(v, 2, A, zb)
                    } catch (J) {}
                    try {
                        yc(v, 3, window.document.URL)
                    } catch (J) {}
                    t = oc(t, 2, v);
                    v = new yf;
                    v = C(v, 1, xb(1191), 0);
                    try {
                        var z = Be(n ? .name) ? n.name : "Unknown error";
                        yc(v, 2, z)
                    } catch (J) {}
                    try {
                        var F = Be(n ? .message) ? n.message : `Caught ${n}`;
                        yc(v, 3, F)
                    } catch (J) {}
                    try {
                        const J = Be(n ? .stack) ? n.stack : Error().stack;
                        J && hc(v, 4, J.split(/\n\s*/), Gb)
                    } catch (J) {}
                    n = oc(t, 1,
                        v);
                    z = new xf;
                    try {
                        yc(z, 1, "m202402150101")
                    } catch {}
                    pc(n, 6, Bf, z);
                    wc(n, 5, 1);
                    Df(e, n)
                })
            } catch (n) {}
            const f = Lo(b);
            Ko(L(f, 2));
            xl(K(f, 6));
            Ij(Bj(), L(f, 24));
            d();
            Wd(16, [1, f.toJSON()]);
            var g = Yd(Xd(S)) || S;
            const h = c(ym({
                va: a,
                Ca: L(f, 2)
            }), f);
            var k = null === S.document.currentScript ? 1 : mo(h.Kb);
            Il(g, f);
            Jo(g, f, k);
            Q(fh) && Zp();
            co(n => {
                var t = sc(G(n, 1)) + 1;
                C(n, 1, Ab(t), 0);
                S.top === S && (t = sc(G(n, 2)) + 1, C(n, 2, Ab(t), 0));
                uc(mc(n), 1) || (n = mc(n), xc(n, 1))
            });
            ej(1086, ho(0 === k));
            if (!Ba() || 0 <= qa(Ga(), 11)) {
                bj(Q(Hh));
                dn();
                Vk();
                try {
                    jp()
                } catch {}
                cn();
                Ip(h, f);
                g = window;
                k = g.adsbygoogle;
                if (!k || !k.loaded) {
                    dj("new_abg_tag", {
                        value: `${K(f,16)}`,
                        host_v: `${K(f,22)}`,
                        frequency: .01
                    }, .01);
                    Up();
                    var l = {
                        push: n => {
                            Cp(n, h, f)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(l, "requestNonPersonalizedAds", {
                            set: Vp
                        }), Object.defineProperty(l, "pauseAdRequests", {
                            set: Wp
                        }), Object.defineProperty(l, "onload", {
                            set: Xp
                        })
                    } catch {}
                    if (k)
                        for (var m of ["requestNonPersonalizedAds", "pauseAdRequests"]) void 0 !== k[m] && (l[m] = k[m]);
                    Bp(k, h, f);
                    g.adsbygoogle = l;
                    k && (l.onload = k.onload);
                    Q(lh) || (m = $m(h)) && document.documentElement.appendChild(m)
                }
            }
        })
    })("m202402150101",
        "undefined" === typeof sttc ? void 0 : sttc,
        function(a, b) {
            const c = 2012 < sc(G(b, 1)) ? `_fy${sc(G(b,1))}` : "",
                d = L(b, 3);
            b = L(b, 2);
            Ud `data:text/javascript,//show_ads_impl_preview.js`;
            return {
                Ib: Ud `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
                Gb: Ud `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl${c}.js`,
                Fb: Ud `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl_with_ama${c}.js`,
                Ob: Ud `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
                Mb: Ud `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_inhead${c}.html`,
                Nb: Ud `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_nohtml${c}.html`,
                Kb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
            }
        });
}).call(this, "[2021,\"r20240215\",\"r20190131\",null,null,null,null,\".google.com.eg\",null,null,null,[[[1310,null,null,[1]],[1277,null,null,[1]],[1308,null,null,[1]],[1316,null,null,[1]],[1275,null,null,[1]],[1311,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[1317,null,null,[1]],[1319,null,null,[1]],[null,1224,null,[null,0.01]],[1312,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[1268,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1285,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1315,null,null,[1]],[null,1072,null,[null,0.75]],[null,572636916,null,[null,25]],[null,595730437,null,[null,800]],[null,566560958,null,[null,30000]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\"]],null,556791602],[561639568,null,null,[1]],[600455847,null,null,[1]],[null,572636915,null,[null,150]],[null,595645509,null,[null,0.3]],[561639564,null,null,[1]],[600847635,null,null,[1]],[null,561668774,null,[null,0.1]],[600719280,null,null,[1]],[null,469675170,null,[null,30000]],[160889229,null,null,[1]],[586386407,null,null,[1]],[573506525,null,null,[1]],[573506524,null,null,[1]],[586643641,null,null,[1]],[567362967,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[45615403,null,null,[1]],[10012,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[null,550718588,null,[null,250]],[588918521,null,null,[1]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510],[44804781],[44806359]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31078995],[31078996,[[45545710,null,null,[1]],[45459826,null,null,[1]],[531007060,null,null,[1]],[45545724,null,null,[1]],[45430975,null,null,[1]],[531582260,null,null,[1]]]]]],[10,[[31079964],[31079965]]],[50,[[31080649],[31080650,[[null,592337179,null,[null,1]]]]]],[1000,[[31081078,[[null,null,14,[null,null,\"31081078\"]]],[6,null,null,null,6,null,\"31081078\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081079,[[null,null,14,[null,null,\"31081079\"]]],[6,null,null,null,6,null,\"31081079\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31081080],[31081081,[[596652146,null,null,[1]]]],[31081082,[[596652146,null,null,[1]],[603378945,null,null,[1]]]]]],[1000,[[31081134,[[null,null,14,[null,null,\"31081134\"]]],[6,null,null,null,6,null,\"31081134\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081135,[[null,null,14,[null,null,\"31081135\"]]],[6,null,null,null,6,null,\"31081135\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31081136],[31081137,[[555237685,null,null,[]]]]]],[200,[[31081140],[31081141,[[561639567,null,null,[1]]]]]],[10,[[31081142],[31081143,[[1290,null,null,[1]]]]]],[10,[[31081152],[31081153,[[1282,null,null,[1]]]]]],[1000,[[31081168,[[null,null,14,[null,null,\"31081168\"]]],[6,null,null,null,6,null,\"31081168\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081169,[[null,null,14,[null,null,\"31081169\"]]],[6,null,null,null,6,null,\"31081169\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[200,[[31081186],[31081187,[[603359027,null,null,[1]]]]]],[1000,[[31081219,[[null,null,14,[null,null,\"31081219\"]]],[6,null,null,null,6,null,\"31081219\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081220,[[null,null,14,[null,null,\"31081220\"]]],[6,null,null,null,6,null,\"31081220\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[200,[[31081221],[31081222,[[10013,null,null,[1]]]]]],[200,[[31081223],[31081224,[[598633105,null,null,[1]]]]]],[1000,[[31081233,[[null,null,14,[null,null,\"31081233\"]]],[6,null,null,null,6,null,\"31081233\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081234,[[null,null,14,[null,null,\"31081234\"]]],[6,null,null,null,6,null,\"31081234\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[1,[[42532360],[42532361,[[1260,null,null,[1]],[1291,null,null,[1]]]]],null,90],[1,[[42532362],[42532363]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[1,[[44795552],[44795553,[[1260,null,null,[1]]]]],null,90],[1,[[44795554],[44795555]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[1000,[[44802674,[[506852289,null,null,[1]]],[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"]]],[4,null,55]],[50,[[44809003,[[1289,null,null,[1]]]],[44809004,[[1289,null,null,[1]],[null,null,1307,[null,null,\"inhead\"]]]],[44809005,[[1289,null,null,[1]],[null,null,1307,[null,null,\"nohtml\"]]]]]],[50,[[95320376,[[1309,null,null,[1]]]],[95320377,[[null,null,null,[null,null,null,[\"en\",\"de\",\"fr\"]],null,1273],[1309,null,null,[1]]]],[95320378,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ja\"]],null,1273],[1309,null,null,[1]]]]],null,75],[50,[[95321957,[[null,null,null,[null,null,null,[\"en\",\"de\",\"es\"]],null,1273],[1309,null,null,[1]]]],[95321958,[[null,null,null,[null,null,null,[\"en\",\"de\",\"vi\"]],null,1273],[1309,null,null,[1]]]],[95321963,[[1309,null,null,[1]]]]],null,75],[50,[[95322180,[[null,null,null,[null,null,null,[\"en\",\"de\",\"pt\"]],null,1273],[1309,null,null,[1]]]],[95322181,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ar\"]],null,1273],[1309,null,null,[1]]]],[95322182,[[null,null,null,[null,null,null,[\"en\",\"de\",\"hi\"]],null,1273],[1309,null,null,[1]]]],[95322183,[[null,null,null,[null,null,null,[\"en\",\"de\",\"it\"]],null,1273],[1309,null,null,[1]]]],[95322184,[[null,null,null,[null,null,null,[\"en\",\"de\",\"pl\"]],null,1273],[1309,null,null,[1]]]],[95322195,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ko\"]],null,1273],[1309,null,null,[1]]]],[95322329,[[1309,null,null,[1]]]]],null,75],[100,[[95322433],[95322434]]],[50,[[95322745],[95322746,[[1271,null,null,[1]]]],[95322747,[[1272,null,null,[1]]]],[95322748,[[1271,null,null,[1]],[1272,null,null,[1]]]]]],[50,[[95323739],[95323740,[[1302,null,null,[1]]]],[95323741,[[1318,null,null,[1]]]]]],[50,[[95323760,[[1309,null,null,[1]]]],[95323761,[[null,null,null,[null,null,null,[\"en\",\"de\",\"nl\"]],null,1273],[1309,null,null,[1]]]]],null,75],[1,[[95324297],[95324298]]],[500,[[95324580],[95324581,[[null,561668774,null,[]]]]],[2,[[4,null,55],[1,[[12,null,null,null,4,null,\"Firefox|FxiOS\",[\"navigator.userAgent\"]]]]]]],[250,[[95325066],[95325067,[[null,547455356,null,[null,20]]]],[95325068,[[null,547455356,null,[null,30]]]],[95325069,[[null,547455356,null,[null,40]]]]],[4,null,55]]]],[17,[[10,[[31080990],[31080991,[[595827158,null,null,[1]]]]],null,null,null,null,null,null,null,149],[100,[[95320868],[95320869,[[597181299,null,null,[1]],[1120,null,null,[1]]]],[95320870,[[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,133],[50,[[95321865],[95321866,[[566279275,null,null,[1]]]],[95321867,[[566279276,null,null,[1]]]],[95321868,[[566279275,null,null,[1]],[566279276,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,145],[3,[[95322388,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]],[95322389,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]],[95322390,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]],[95322391,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]]],null,null,null,null,null,null,null,144],[1,[[95322397],[95322398,[[null,595645509,null,[null,0.2]]]],[95322399,[[null,595645509,null,[null,0.4]]]]],[4,null,55],null,null,null,null,null,null,140],[10,[[95322897],[95322898]],null,null,null,null,32,null,null,142,1],[500,[[95324154],[95324155,[[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]]]]],[4,null,55],null,null,null,null,null,null,147],[500,[[95324160],[95324161,[[595118932,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,148],[50,[[95324429],[95324430,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324431,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324432,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324433,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324434,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324435,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]]],[4,null,55],null,null,null,null,500,null,146],[100,[[95325076],[95325077,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"17\"]],null,556791602]]],[95325078,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"18\"]],null,556791602]]],[95325079,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"19\"]],null,556791602]]],[95325080,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"20\"]],null,556791602]]]],[4,null,55],null,null,null,null,null,null,146]]],[11,[[1000,[[31081083,null,[4,null,6,null,null,null,null,[\"31081080\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31081084,null,[4,null,6,null,null,null,null,[\"31081081\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31081085,null,[4,null,6,null,null,null,null,[\"31081082\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18]]]],null,null,[null,1000,1,1000]],null,null,\"31081234\",null,null,1202477914,[44759876,44759927,44808397]]");