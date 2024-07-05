"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [158], {
        158: function(e, t, n) {
            n.d(t, {
                default: function() {
                    return o.a
                }
            });
            var r = n(8630),
                o = n.n(r)
        },
        4901: function(e, t, n) {
            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(2368), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8630: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return j
                }
            });
            let r = n(5163),
                o = n(6063),
                l = r._(n(4617)),
                u = n(5827),
                f = n(8446),
                a = n(5348),
                i = n(1943),
                c = n(2711),
                s = n(4170),
                d = n(3817),
                p = n(735),
                y = n(4901),
                b = n(9070),
                h = n(5610),
                v = new Set;

            function g(e, t, n, r, o, l) {
                if ("undefined" != typeof window && (l || (0, f.isLocalURL)(t))) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (v.has(o)) return;
                        v.add(o)
                    }
                    Promise.resolve(l ? e.prefetch(t, o) : e.prefetch(t, n, r)).catch(e => {})
                }
            }

            function _(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let j = l.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: v,
                    children: j,
                    prefetch: m = null,
                    passHref: C,
                    replace: k,
                    shallow: M,
                    scroll: P,
                    locale: O,
                    onClick: E,
                    onMouseEnter: L,
                    onTouchStart: x,
                    legacyBehavior: w = !1,
                    ...R
                } = e;
                n = j, w && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let I = l.default.useContext(s.RouterContext),
                    T = l.default.useContext(d.AppRouterContext),
                    S = null != I ? I : T,
                    U = !I,
                    K = !1 !== m,
                    A = null === m ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: D,
                        as: N
                    } = l.default.useMemo(() => {
                        if (!I) {
                            let e = _(a);
                            return {
                                href: e,
                                as: v ? _(v) : e
                            }
                        }
                        let [e, t] = (0, u.resolveHref)(I, a, !0);
                        return {
                            href: e,
                            as: v ? (0, u.resolveHref)(I, v) : t || e
                        }
                    }, [I, a, v]),
                    H = l.default.useRef(D),
                    q = l.default.useRef(N);
                w && (r = l.default.Children.only(n));
                let z = w ? r && "object" == typeof r && r.ref : t,
                    [B, F, G] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    J = l.default.useCallback(e => {
                        (q.current !== N || H.current !== D) && (G(), q.current = N, H.current = D), B(e), z && ("function" == typeof z ? z(e) : "object" == typeof z && (z.current = e))
                    }, [N, z, D, G, B]);
                l.default.useEffect(() => {
                    S && F && K && g(S, D, N, {
                        locale: O
                    }, {
                        kind: A
                    }, U)
                }, [N, D, F, O, K, null == I ? void 0 : I.locale, S, U, A]);
                let Q = {
                    ref: J,
                    onClick(e) {
                        w || "function" != typeof E || E(e), w && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), S && !e.defaultPrevented && function(e, t, n, r, o, u, a, i, c) {
                            let {
                                nodeName: s
                            } = e.currentTarget;
                            if ("A" === s.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let d = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: u,
                                    locale: i,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? l.default.startTransition(d) : d()
                        }(e, S, D, N, k, M, P, O, U)
                    },
                    onMouseEnter(e) {
                        w || "function" != typeof L || L(e), w && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), S && (K || !U) && g(S, D, N, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, U)
                    },
                    onTouchStart(e) {
                        w || "function" != typeof x || x(e), w && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), S && (K || !U) && g(S, D, N, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, U)
                    }
                };
                if ((0, i.isAbsoluteUrl)(N)) Q.href = N;
                else if (!w || C || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== O ? O : null == I ? void 0 : I.locale,
                        t = (null == I ? void 0 : I.isLocaleDomain) && (0, y.getDomainLocale)(N, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                    Q.href = t || (0, b.addBasePath)((0, c.addLocale)(N, e, null == I ? void 0 : I.defaultLocale))
                }
                return w ? l.default.cloneElement(r, Q) : (0, o.jsx)("a", { ...R,
                    ...Q,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        735: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(4617),
                o = n(4599),
                l = "function" == typeof IntersectionObserver,
                u = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, i = a || !l, [c, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (l) {
                        if (i || c) return;
                        let e = d.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: l
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = u.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), u.set(n, t), t
                            }(n);
                            return l.set(e, t), o.observe(e),
                                function() {
                                    if (l.delete(e), o.unobserve(e), 0 === l.size) {
                                        o.disconnect(), u.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [i, n, t, c, d.current]), [p, c, (0, r.useCallback)(() => {
                    s(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        }
    }
]);