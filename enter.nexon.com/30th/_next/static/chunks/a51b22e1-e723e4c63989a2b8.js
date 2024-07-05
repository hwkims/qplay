"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [810], {
        654: function(e, t, r) {
            let n, s, i, o, a, l;
            r.d(t, {
                UH: function() {
                    return rw
                }
            });
            var c, u, d, h, p, m, f, y, g = r(4105),
                _ = r(7449),
                S = r(8254),
                v = r(6013),
                w = r(2764),
                b = r(8245),
                E = r(5566),
                k = r(3243),
                I = r(7746),
                M = r(8721),
                C = r(7874),
                R = r(5033),
                T = r(2598),
                x = r(7557),
                A = r(5240),
                D = r(1615),
                O = r(3608),
                N = r(8229),
                L = r(7319),
                P = r(8234),
                F = r(2693),
                B = r(5978),
                U = r(2082),
                z = r(8355),
                W = r(4068);
            let j = M.GLOBAL_OBJ,
                H = "sentryReplaySession",
                $ = "Unable to send Replay";

            function q(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let s = e[n],
                        i = e[n + 1];
                    if (n += 2, ("optionalAccess" === s || "optionalCall" === s) && null == r) return;
                    "access" === s || "optionalAccess" === s ? (t = r, r = i(r)) : ("call" === s || "optionalCall" === s) && (r = i((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }

            function K(e) {
                let t = q([e, "optionalAccess", e => e.host]);
                return q([t, "optionalAccess", e => e.shadowRoot]) === e
            }

            function V(e) {
                return "[object ShadowRoot]" === Object.prototype.toString.call(e)
            }

            function J(e) {
                try {
                    var t;
                    let r = e.rules || e.cssRules;
                    return r ? ((t = Array.from(r, Y).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t) : null
                } catch (e) {
                    return null
                }
            }

            function Y(e) {
                let t;
                if ("styleSheet" in e) try {
                    t = J(e.styleSheet) || function(e) {
                        let {
                            cssText: t
                        } = e;
                        if (t.split('"').length < 3) return t;
                        let r = ["@import", `url(${JSON.stringify(e.href)})`];
                        return "" === e.layerName ? r.push("layer") : e.layerName && r.push(`layer(${e.layerName})`), e.supportsText && r.push(`supports(${e.supportsText})`), e.media.length && r.push(e.media.mediaText), r.join(" ") + ";"
                    }(e)
                } catch (e) {} else if ("selectorText" in e && e.selectorText.includes(":")) return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
                return t || e.cssText
            }(c = f || (f = {}))[c.Document = 0] = "Document", c[c.DocumentType = 1] = "DocumentType", c[c.Element = 2] = "Element", c[c.Text = 3] = "Text", c[c.CDATA = 4] = "CDATA", c[c.Comment = 5] = "Comment";
            class G {
                constructor() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
                getId(e) {
                    var t;
                    return e ? (() => -1, null != (t = q([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id])) ? t : -1) : -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    let t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    let r = t.id;
                    this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    let r = this.getNode(e);
                    if (r) {
                        let e = this.nodeMetaMap.get(r);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function X({
                maskInputOptions: e,
                tagName: t,
                type: r
            }) {
                return "OPTION" === t && (t = "SELECT"), !!(e[t.toLowerCase()] || r && e[r] || "password" === r || "INPUT" === t && !r && e.text)
            }

            function Q({
                isMasked: e,
                element: t,
                value: r,
                maskInputFn: n
            }) {
                let s = r || "";
                return e ? (n && (s = n(s, t)), "*".repeat(s.length)) : s
            }

            function Z(e) {
                return e.toLowerCase()
            }

            function ee(e) {
                return e.toUpperCase()
            }
            let et = "__rrweb_original__";

            function er(e) {
                let t = e.type;
                return e.hasAttribute("data-rr-is-password") ? "password" : t ? Z(t) : null
            }

            function en(e, t, r) {
                return "INPUT" === t && ("radio" === r || "checkbox" === r) ? e.getAttribute("value") || "" : e.value
            }
            let es = 1,
                ei = RegExp("[^a-z0-9-_:]");

            function eo() {
                return es++
            }
            let ea = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                el = /^(?:[a-z+]+:)?\/\//i,
                ec = /^www\..*/i,
                eu = /^(data:)([^,]*),(.*)/i;

            function ed(e, t) {
                return (e || "").replace(ea, (e, r, n, s, i, o) => {
                    let a = n || i || o,
                        l = r || s || "";
                    if (!a) return e;
                    if (el.test(a) || ec.test(a) || eu.test(a)) return `url(${l}${a}${l})`;
                    if ("/" === a[0]) return `url(${l}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+a}${l})`;
                    let c = t.split("/"),
                        u = a.split("/");
                    for (let e of (c.pop(), u)) "." !== e && (".." === e ? c.pop() : c.push(e));
                    return `url(${l}${c.join("/")}${l})`
                })
            }
            let eh = /^[^ \t\n\r\u000c]+/,
                ep = /^[, \t\n\r\u000c]+/;

            function em(e, t) {
                if (!t || "" === t.trim()) return t;
                let r = e.createElement("a");
                return r.href = t, r.href
            }

            function ef() {
                let e = document.createElement("a");
                return e.href = "", e.href
            }

            function ey(e, t, r, n, s, i) {
                return n ? "src" !== r && ("href" !== r || "use" === t && "#" === n[0]) && ("xlink:href" !== r || "#" === n[0]) && ("background" !== r || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === r ? function(e, t) {
                    if ("" === t.trim()) return t;
                    let r = 0;

                    function n(e) {
                        let n;
                        let s = e.exec(t.substring(r));
                        return s ? (n = s[0], r += n.length, n) : ""
                    }
                    let s = [];
                    for (; n(ep), !(r >= t.length);) {
                        let i = n(eh);
                        if ("," === i.slice(-1)) i = em(e, i.substring(0, i.length - 1)), s.push(i);
                        else {
                            let n = "";
                            i = em(e, i);
                            let o = !1;
                            for (;;) {
                                let e = t.charAt(r);
                                if ("" === e) {
                                    s.push((i + n).trim());
                                    break
                                }
                                if (o) ")" === e && (o = !1);
                                else {
                                    if ("," === e) {
                                        r += 1, s.push((i + n).trim());
                                        break
                                    }
                                    "(" === e && (o = !0)
                                }
                                n += e, r += 1
                            }
                        }
                    }
                    return s.join(", ")
                }(e, n) : "style" === r ? ed(n, ef()) : "object" === t && "data" === r ? em(e, n) : "function" == typeof i ? i(r, n, s) : n : em(e, n) : n
            }

            function eg(e, t, r) {
                return ("video" === e || "audio" === e) && "autoplay" === t
            }

            function e_(e, t, r = 1 / 0, n = 0) {
                return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : e_(e.parentNode, t, r, n + 1)
            }

            function eS(e, t) {
                return r => {
                    if (null === r) return !1;
                    try {
                        if (e) {
                            if ("string" == typeof e) {
                                if (r.matches(`.${e}`)) return !0
                            } else if (function(e, t) {
                                    for (let r = e.classList.length; r--;) {
                                        let n = e.classList[r];
                                        if (t.test(n)) return !0
                                    }
                                    return !1
                                }(r, e)) return !0
                        }
                        if (t && r.matches(t)) return !0;
                        return !1
                    } catch (e) {
                        return !1
                    }
                }
            }

            function ev(e, t, r, n, s, i) {
                try {
                    let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                    if (null === o) return !1;
                    if ("INPUT" === o.tagName) {
                        let e = o.getAttribute("autocomplete");
                        if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
                    }
                    let a = -1,
                        l = -1;
                    if (i) {
                        if ((l = e_(o, eS(n, s))) < 0) return !0;
                        a = e_(o, eS(t, r), l >= 0 ? l : 1 / 0)
                    } else {
                        if ((a = e_(o, eS(t, r))) < 0) return !1;
                        l = e_(o, eS(n, s), a >= 0 ? a : 1 / 0)
                    }
                    return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!i
                } catch (e) {}
                return !!i
            }

            function ew(e) {
                return null == e ? "" : e.toLowerCase()
            }

            function eb(e, t) {
                let r;
                let {
                    doc: i,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    unblockSelector: c,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: m,
                    skipChild: y = !1,
                    inlineStylesheet: g = !0,
                    maskInputOptions: _ = {},
                    maskAttributeFn: S,
                    maskTextFn: v,
                    maskInputFn: w,
                    slimDOMOptions: b,
                    dataURLOptions: E = {},
                    inlineImages: k = !1,
                    recordCanvas: I = !1,
                    onSerialize: M,
                    onIframeLoad: C,
                    iframeLoadTimeout: R = 5e3,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: x = 5e3,
                    keepIframeSrcFn: A = () => !1,
                    newlyAddedElement: D = !1
                } = t, {
                    preserveWhiteSpace: O = !0
                } = t, N = function(e, t) {
                    let {
                        doc: r,
                        mirror: i,
                        blockClass: o,
                        blockSelector: a,
                        unblockSelector: l,
                        maskAllText: c,
                        maskAttributeFn: u,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: m,
                        inlineStylesheet: y,
                        maskInputOptions: g = {},
                        maskTextFn: _,
                        maskInputFn: S,
                        dataURLOptions: v = {},
                        inlineImages: w,
                        recordCanvas: b,
                        keepIframeSrcFn: E,
                        newlyAddedElement: k = !1
                    } = t, I = function(e, t) {
                        if (!t.hasNode(e)) return;
                        let r = t.getId(e);
                        return 1 === r ? void 0 : r
                    }(r, i);
                    switch (e.nodeType) {
                        case e.DOCUMENT_NODE:
                            if ("CSS1Compat" !== e.compatMode) return {
                                type: f.Document,
                                childNodes: [],
                                compatMode: e.compatMode
                            };
                            return {
                                type: f.Document,
                                childNodes: []
                            };
                        case e.DOCUMENT_TYPE_NODE:
                            return {
                                type: f.DocumentType,
                                name: e.name,
                                publicId: e.publicId,
                                systemId: e.systemId,
                                rootId: I
                            };
                        case e.ELEMENT_NODE:
                            return function(e, t) {
                                let r;
                                let {
                                    doc: i,
                                    blockClass: o,
                                    blockSelector: a,
                                    unblockSelector: l,
                                    inlineStylesheet: c,
                                    maskInputOptions: u = {},
                                    maskAttributeFn: d,
                                    maskInputFn: h,
                                    dataURLOptions: p = {},
                                    inlineImages: m,
                                    recordCanvas: y,
                                    keepIframeSrcFn: g,
                                    newlyAddedElement: _ = !1,
                                    rootId: S,
                                    maskAllText: v,
                                    maskTextClass: w,
                                    unmaskTextClass: b,
                                    maskTextSelector: E,
                                    unmaskTextSelector: k
                                } = t, I = function(e, t, r, n) {
                                    try {
                                        if (n && e.matches(n)) return !1;
                                        if ("string" == typeof t) {
                                            if (e.classList.contains(t)) return !0
                                        } else
                                            for (let r = e.classList.length; r--;) {
                                                let n = e.classList[r];
                                                if (t.test(n)) return !0
                                            }
                                        if (r) return e.matches(r)
                                    } catch (e) {}
                                    return !1
                                }(e, o, a, l), M = function(e) {
                                    if (e instanceof HTMLFormElement) return "form";
                                    let t = Z(e.tagName);
                                    return ei.test(t) ? "div" : t
                                }(e), C = {}, R = e.attributes.length;
                                for (let t = 0; t < R; t++) {
                                    let r = e.attributes[t];
                                    r.name && !eg(M, r.name, r.value) && (C[r.name] = ey(i, M, Z(r.name), r.value, e, d))
                                }
                                if ("link" === M && c) {
                                    let t = Array.from(i.styleSheets).find(t => t.href === e.href),
                                        r = null;
                                    t && (r = J(t)), r && (delete C.rel, delete C.href, C._cssText = ed(r, t.href))
                                }
                                if ("style" === M && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                    let t = J(e.sheet);
                                    t && (C._cssText = ed(t, ef()))
                                }
                                if ("input" === M || "textarea" === M || "select" === M || "option" === M) {
                                    let t = er(e),
                                        r = en(e, ee(M), t),
                                        n = e.checked;
                                    if ("submit" !== t && "button" !== t && r) {
                                        let n = ev(e, w, E, b, k, X({
                                            type: t,
                                            tagName: ee(M),
                                            maskInputOptions: u
                                        }));
                                        C.value = Q({
                                            isMasked: n,
                                            element: e,
                                            value: r,
                                            maskInputFn: h
                                        })
                                    }
                                    n && (C.checked = n)
                                }
                                if ("option" === M && (e.selected && !u.select ? C.selected = !0 : delete C.selected), "canvas" === M && y) {
                                    if ("2d" === e.__context) ! function(e) {
                                        let t = e.getContext("2d");
                                        if (!t) return !0;
                                        for (let r = 0; r < e.width; r += 50)
                                            for (let n = 0; n < e.height; n += 50) {
                                                let s = t.getImageData,
                                                    i = et in s ? s[et] : s;
                                                if (new Uint32Array(i.call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer).some(e => 0 !== e)) return !1
                                            }
                                        return !0
                                    }(e) && (C.rr_dataURL = e.toDataURL(p.type, p.quality));
                                    else if (!("__context" in e)) {
                                        let t = e.toDataURL(p.type, p.quality),
                                            r = document.createElement("canvas");
                                        r.width = e.width, r.height = e.height, t !== r.toDataURL(p.type, p.quality) && (C.rr_dataURL = t)
                                    }
                                }
                                if ("img" === M && m) {
                                    n || (s = (n = i.createElement("canvas")).getContext("2d"));
                                    let t = e.crossOrigin;
                                    e.crossOrigin = "anonymous";
                                    let r = () => {
                                        e.removeEventListener("load", r);
                                        try {
                                            n.width = e.naturalWidth, n.height = e.naturalHeight, s.drawImage(e, 0, 0), C.rr_dataURL = n.toDataURL(p.type, p.quality)
                                        } catch (t) {
                                            console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
                                        }
                                        t ? C.crossOrigin = t : e.removeAttribute("crossorigin")
                                    };
                                    e.complete && 0 !== e.naturalWidth ? r() : e.addEventListener("load", r)
                                }
                                if (("audio" === M || "video" === M) && (C.rr_mediaState = e.paused ? "paused" : "played", C.rr_mediaCurrentTime = e.currentTime), !_ && (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft), e.scrollTop && (C.rr_scrollTop = e.scrollTop)), I) {
                                    let {
                                        width: t,
                                        height: r
                                    } = e.getBoundingClientRect();
                                    C = {
                                        class: C.class,
                                        rr_width: `${t}px`,
                                        rr_height: `${r}px`
                                    }
                                }
                                "iframe" !== M || g(C.src) || (e.contentDocument || (C.rr_src = C.src), delete C.src);
                                try {
                                    customElements.get(M) && (r = !0)
                                } catch (e) {}
                                return {
                                    type: f.Element,
                                    tagName: M,
                                    attributes: C,
                                    childNodes: [],
                                    isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                                    needBlock: I,
                                    rootId: S,
                                    isCustom: r
                                }
                            }(e, {
                                doc: r,
                                blockClass: o,
                                blockSelector: a,
                                unblockSelector: l,
                                inlineStylesheet: y,
                                maskAttributeFn: u,
                                maskInputOptions: g,
                                maskInputFn: S,
                                dataURLOptions: v,
                                inlineImages: w,
                                recordCanvas: b,
                                keepIframeSrcFn: E,
                                newlyAddedElement: k,
                                rootId: I,
                                maskAllText: c,
                                maskTextClass: d,
                                unmaskTextClass: h,
                                maskTextSelector: p,
                                unmaskTextSelector: m
                            });
                        case e.TEXT_NODE:
                            return function(e, t) {
                                let {
                                    maskAllText: r,
                                    maskTextClass: n,
                                    unmaskTextClass: s,
                                    maskTextSelector: i,
                                    unmaskTextSelector: o,
                                    maskTextFn: a,
                                    maskInputOptions: l,
                                    maskInputFn: c,
                                    rootId: u
                                } = t, d = e.parentNode && e.parentNode.tagName, h = e.textContent, p = "STYLE" === d || void 0, m = "SCRIPT" === d || void 0, y = "TEXTAREA" === d || void 0;
                                if (p && h) {
                                    try {
                                        e.nextSibling || e.previousSibling || q([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (h = J(e.parentNode.sheet))
                                    } catch (t) {
                                        console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                    }
                                    h = ed(h, ef())
                                }
                                m && (h = "SCRIPT_PLACEHOLDER");
                                let g = ev(e, n, i, s, o, r);
                                return p || m || y || !h || !g || (h = a ? a(h) : h.replace(/[\S]/g, "*")), y && h && (l.textarea || g) && (h = c ? c(h, e.parentNode) : h.replace(/[\S]/g, "*")), "OPTION" === d && h && (h = Q({
                                    isMasked: ev(e, n, i, s, o, X({
                                        type: null,
                                        tagName: d,
                                        maskInputOptions: l
                                    })),
                                    element: e,
                                    value: h,
                                    maskInputFn: c
                                })), {
                                    type: f.Text,
                                    textContent: h || "",
                                    isStyle: p,
                                    rootId: u
                                }
                            }(e, {
                                maskAllText: c,
                                maskTextClass: d,
                                unmaskTextClass: h,
                                maskTextSelector: p,
                                unmaskTextSelector: m,
                                maskTextFn: _,
                                maskInputOptions: g,
                                maskInputFn: S,
                                rootId: I
                            });
                        case e.CDATA_SECTION_NODE:
                            return {
                                type: f.CDATA,
                                textContent: "",
                                rootId: I
                            };
                        case e.COMMENT_NODE:
                            return {
                                type: f.Comment,
                                textContent: e.textContent || "",
                                rootId: I
                            };
                        default:
                            return !1
                    }
                }(e, {
                    doc: i,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    maskAllText: u,
                    unblockSelector: c,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: m,
                    inlineStylesheet: g,
                    maskInputOptions: _,
                    maskAttributeFn: S,
                    maskTextFn: v,
                    maskInputFn: w,
                    dataURLOptions: E,
                    inlineImages: k,
                    recordCanvas: I,
                    keepIframeSrcFn: A,
                    newlyAddedElement: D
                });
                if (!N) return console.warn(e, "not serialized"), null;
                r = o.hasNode(e) ? o.getId(e) : ! function(e, t) {
                    if (t.comment && e.type === f.Comment) return !0;
                    if (e.type === f.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js")) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (ew(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ew(e.attributes.name) || "icon" === ew(e.attributes.rel) || "apple-touch-icon" === ew(e.attributes.rel) || "shortcut icon" === ew(e.attributes.rel)))) return !0;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && ew(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (ew(e.attributes.property).match(/^(og|twitter|fb):/) || ew(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === ew(e.attributes.name))) return !0;
                            if (t.headMetaRobots && ("robots" === ew(e.attributes.name) || "googlebot" === ew(e.attributes.name) || "bingbot" === ew(e.attributes.name))) return !0;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                            else if (t.headMetaAuthorship && ("author" === ew(e.attributes.name) || "generator" === ew(e.attributes.name) || "framework" === ew(e.attributes.name) || "publisher" === ew(e.attributes.name) || "progid" === ew(e.attributes.name) || ew(e.attributes.property).match(/^article:/) || ew(e.attributes.property).match(/^product:/))) return !0;
                            else if (t.headMetaVerification && ("google-site-verification" === ew(e.attributes.name) || "yandex-verification" === ew(e.attributes.name) || "csrf-token" === ew(e.attributes.name) || "p:domain_verify" === ew(e.attributes.name) || "verify-v1" === ew(e.attributes.name) || "verification" === ew(e.attributes.name) || "shopify-checkout-api-token" === ew(e.attributes.name))) return !0
                        }
                    }
                    return !1
                }(N, b) && (O || N.type !== f.Text || N.isStyle || N.textContent.replace(/^\s+|\s+$/gm, "").length) ? eo() : -2;
                let L = Object.assign(N, {
                    id: r
                });
                if (o.add(e, L), -2 === r) return null;
                M && M(e);
                let P = !y;
                if (L.type === f.Element) {
                    P = P && !L.needBlock, delete L.needBlock;
                    let t = e.shadowRoot;
                    t && V(t) && (L.isShadowHost = !0)
                }
                if ((L.type === f.Document || L.type === f.Element) && P) {
                    b.headWhitespace && L.type === f.Element && "head" === L.tagName && (O = !1);
                    let t = {
                        doc: i,
                        mirror: o,
                        blockClass: a,
                        blockSelector: l,
                        maskAllText: u,
                        unblockSelector: c,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: m,
                        skipChild: y,
                        inlineStylesheet: g,
                        maskInputOptions: _,
                        maskAttributeFn: S,
                        maskTextFn: v,
                        maskInputFn: w,
                        slimDOMOptions: b,
                        dataURLOptions: E,
                        inlineImages: k,
                        recordCanvas: I,
                        preserveWhiteSpace: O,
                        onSerialize: M,
                        onIframeLoad: C,
                        iframeLoadTimeout: R,
                        onStylesheetLoad: T,
                        stylesheetLoadTimeout: x,
                        keepIframeSrcFn: A
                    };
                    for (let r of Array.from(e.childNodes)) {
                        let e = eb(r, t);
                        e && L.childNodes.push(e)
                    }
                    if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                        for (let r of Array.from(e.shadowRoot.childNodes)) {
                            let n = eb(r, t);
                            n && (V(e.shadowRoot) && (n.isShadow = !0), L.childNodes.push(n))
                        }
                }
                return e.parentNode && K(e.parentNode) && V(e.parentNode) && (L.isShadow = !0), L.type === f.Element && "iframe" === L.tagName && function(e, t, r) {
                    let n;
                    let s = e.contentWindow;
                    if (!s) return;
                    let i = !1;
                    try {
                        n = s.document.readyState
                    } catch (e) {
                        return
                    }
                    if ("complete" !== n) {
                        let n = setTimeout(() => {
                            i || (t(), i = !0)
                        }, r);
                        e.addEventListener("load", () => {
                            clearTimeout(n), i = !0, t()
                        });
                        return
                    }
                    let o = "about:blank";
                    if (s.location.href !== o || e.src === o || "" === e.src) return setTimeout(t, 0), e.addEventListener("load", t);
                    e.addEventListener("load", t)
                }(e, () => {
                    let t = e.contentDocument;
                    if (t && C) {
                        let r = eb(t, {
                            doc: t,
                            mirror: o,
                            blockClass: a,
                            blockSelector: l,
                            unblockSelector: c,
                            maskAllText: u,
                            maskTextClass: d,
                            unmaskTextClass: h,
                            maskTextSelector: p,
                            unmaskTextSelector: m,
                            skipChild: !1,
                            inlineStylesheet: g,
                            maskInputOptions: _,
                            maskAttributeFn: S,
                            maskTextFn: v,
                            maskInputFn: w,
                            slimDOMOptions: b,
                            dataURLOptions: E,
                            inlineImages: k,
                            recordCanvas: I,
                            preserveWhiteSpace: O,
                            onSerialize: M,
                            onIframeLoad: C,
                            iframeLoadTimeout: R,
                            onStylesheetLoad: T,
                            stylesheetLoadTimeout: x,
                            keepIframeSrcFn: A
                        });
                        r && C(e, r)
                    }
                }, R), L.type === f.Element && "link" === L.tagName && "stylesheet" === L.attributes.rel && function(e, t, r) {
                    let n, s = !1;
                    try {
                        n = e.sheet
                    } catch (e) {
                        return
                    }
                    if (n) return;
                    let i = setTimeout(() => {
                        s || (t(), s = !0)
                    }, r);
                    e.addEventListener("load", () => {
                        clearTimeout(i), s = !0, t()
                    })
                }(e, () => {
                    if (T) {
                        let t = eb(e, {
                            doc: i,
                            mirror: o,
                            blockClass: a,
                            blockSelector: l,
                            unblockSelector: c,
                            maskAllText: u,
                            maskTextClass: d,
                            unmaskTextClass: h,
                            maskTextSelector: p,
                            unmaskTextSelector: m,
                            skipChild: !1,
                            inlineStylesheet: g,
                            maskInputOptions: _,
                            maskAttributeFn: S,
                            maskTextFn: v,
                            maskInputFn: w,
                            slimDOMOptions: b,
                            dataURLOptions: E,
                            inlineImages: k,
                            recordCanvas: I,
                            preserveWhiteSpace: O,
                            onSerialize: M,
                            onIframeLoad: C,
                            iframeLoadTimeout: R,
                            onStylesheetLoad: T,
                            stylesheetLoadTimeout: x,
                            keepIframeSrcFn: A
                        });
                        t && T(e, t)
                    }
                }, x), L
            }

            function eE(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let s = e[n],
                        i = e[n + 1];
                    if (n += 2, ("optionalAccess" === s || "optionalCall" === s) && null == r) return;
                    "access" === s || "optionalAccess" === s ? (t = r, r = i(r)) : ("call" === s || "optionalCall" === s) && (r = i((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }

            function ek(e, t, r = document) {
                let n = {
                    capture: !0,
                    passive: !0
                };
                return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n)
            }
            let eI = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                eM = {
                    map: {},
                    getId: () => (console.error(eI), -1),
                    getNode: () => (console.error(eI), null),
                    removeNodeFromMap() {
                        console.error(eI)
                    },
                    has: () => (console.error(eI), !1),
                    reset() {
                        console.error(eI)
                    }
                };

            function eC(e, t, r = {}) {
                let n = null,
                    s = 0;
                return function(...i) {
                    let o = Date.now();
                    s || !1 !== r.leading || (s = o);
                    let a = t - (o - s),
                        l = this;
                    a <= 0 || a > t ? (n && (clearTimeout(n), n = null), s = o, e.apply(l, i)) : n || !1 === r.trailing || (n = setTimeout(() => {
                        s = !1 === r.leading ? 0 : Date.now(), n = null, e.apply(l, i)
                    }, a))
                }
            }

            function eR(e, t, r) {
                try {
                    if (!(t in e)) return () => {};
                    let n = e[t],
                        s = r(n);
                    return "function" == typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: n
                        }
                    })), e[t] = s, () => {
                        e[t] = n
                    }
                } catch (e) {
                    return () => {}
                }
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (eM = new Proxy(eM, {
                get: (e, t, r) => ("map" === t && console.error(eI), Reflect.get(e, t, r))
            }));
            let eT = Date.now;

            function ex(e) {
                let t = e.document;
                return {
                    left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : eE([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || eE([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || eE([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                    top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : eE([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || eE([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || eE([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
                }
            }

            function eA() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function eD() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function eO(e, t, r, n, s) {
                if (!e) return !1;
                let i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                if (!i) return !1;
                let o = eS(t, r);
                if (!s) {
                    let e = n && i.matches(n);
                    return o(i) && !e
                }
                let a = e_(i, o),
                    l = -1;
                return !(a < 0) && (n && (l = e_(i, eS(null, n))), a > -1 && l < 0 || a < l)
            }

            function eN(e, t) {
                return -2 === t.getId(e)
            }

            function eL(e) {
                return !!e.changedTouches
            }

            function eP(e, t) {
                return !!("IFRAME" === e.nodeName && t.getMeta(e))
            }

            function eF(e, t) {
                return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
            }

            function eB(e) {
                return !!eE([e, "optionalAccess", e => e.shadowRoot])
            }
            /[1-9][0-9]{12}/.test(Date.now().toString()) || (eT = () => new Date().getTime());
            class eU {
                constructor() {
                    this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
                }
                getId(e) {
                    return (0, g.h)(this.styleIDMap.get(e), () => -1)
                }
                has(e) {
                    return this.styleIDMap.has(e)
                }
                add(e, t) {
                    let r;
                    return this.has(e) ? this.getId(e) : (r = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r)
                }
                getStyle(e) {
                    return this.idStyleMap.get(e) || null
                }
                reset() {
                    this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
                }
                generateId() {
                    return this.id++
                }
            }

            function ez(e) {
                let t = null;
                return eE([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
            }

            function eW(e) {
                let t = e.ownerDocument;
                return !!t && (t.contains(e) || function(e) {
                    let t = e.ownerDocument;
                    if (!t) return !1;
                    let r = function(e) {
                        let t, r = e;
                        for (; t = ez(r);) r = t;
                        return r
                    }(e);
                    return t.contains(r)
                }(e))
            }
            var ej = ((u = ej || {})[u.DomContentLoaded = 0] = "DomContentLoaded", u[u.Load = 1] = "Load", u[u.FullSnapshot = 2] = "FullSnapshot", u[u.IncrementalSnapshot = 3] = "IncrementalSnapshot", u[u.Meta = 4] = "Meta", u[u.Custom = 5] = "Custom", u[u.Plugin = 6] = "Plugin", u),
                eH = ((d = eH || {})[d.Mutation = 0] = "Mutation", d[d.MouseMove = 1] = "MouseMove", d[d.MouseInteraction = 2] = "MouseInteraction", d[d.Scroll = 3] = "Scroll", d[d.ViewportResize = 4] = "ViewportResize", d[d.Input = 5] = "Input", d[d.TouchMove = 6] = "TouchMove", d[d.MediaInteraction = 7] = "MediaInteraction", d[d.StyleSheetRule = 8] = "StyleSheetRule", d[d.CanvasMutation = 9] = "CanvasMutation", d[d.Font = 10] = "Font", d[d.Log = 11] = "Log", d[d.Drag = 12] = "Drag", d[d.StyleDeclaration = 13] = "StyleDeclaration", d[d.Selection = 14] = "Selection", d[d.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", d[d.CustomElement = 16] = "CustomElement", d),
                e$ = ((h = e$ || {})[h.MouseUp = 0] = "MouseUp", h[h.MouseDown = 1] = "MouseDown", h[h.Click = 2] = "Click", h[h.ContextMenu = 3] = "ContextMenu", h[h.DblClick = 4] = "DblClick", h[h.Focus = 5] = "Focus", h[h.Blur = 6] = "Blur", h[h.TouchStart = 7] = "TouchStart", h[h.TouchMove_Departed = 8] = "TouchMove_Departed", h[h.TouchEnd = 9] = "TouchEnd", h[h.TouchCancel = 10] = "TouchCancel", h),
                eq = ((p = eq || {})[p.Mouse = 0] = "Mouse", p[p.Pen = 1] = "Pen", p[p.Touch = 2] = "Touch", p);
            class eK {
                constructor() {
                    this.length = 0, this.head = null, this.tail = null
                }
                get(e) {
                    if (e >= this.length) throw Error("Position outside of list range");
                    let t = this.head;
                    for (let r = 0; r < e; r++) t = function(e) {
                        let t;
                        let r = e[0],
                            n = 1;
                        for (; n < e.length;) {
                            let s = e[n],
                                i = e[n + 1];
                            if (n += 2, ("optionalAccess" === s || "optionalCall" === s) && null == r) return;
                            "access" === s || "optionalAccess" === s ? (t = r, r = i(r)) : ("call" === s || "optionalCall" === s) && (r = i((...e) => r.call(t, ...e)), t = void 0)
                        }
                        return r
                    }([t, "optionalAccess", e => e.next]) || null;
                    return t
                }
                addNode(e) {
                    let t = {
                        value: e,
                        previous: null,
                        next: null
                    };
                    if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
                        let r = e.previousSibling.__ln.next;
                        t.next = r, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, r && (r.previous = t)
                    } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
                        let r = e.nextSibling.__ln.previous;
                        t.previous = r, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, r && (r.next = t)
                    } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                    null === t.next && (this.tail = t), this.length++
                }
                removeNode(e) {
                    let t = e.__ln;
                    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
                }
            }
            let eV = (e, t) => `${e}@${t}`;
            class eJ {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                        e.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let e = [],
                            t = new Set,
                            r = new eK,
                            n = e => {
                                let t = e,
                                    r = -2;
                                for (; - 2 === r;) r = (t = t && t.nextSibling) && this.mirror.getId(t);
                                return r
                            },
                            s = s => {
                                if (!s.parentNode || !eW(s)) return;
                                let i = K(s.parentNode) ? this.mirror.getId(ez(s)) : this.mirror.getId(s.parentNode),
                                    o = n(s);
                                if (-1 === i || -1 === o) return r.addNode(s);
                                let a = eb(s, {
                                    doc: this.doc,
                                    mirror: this.mirror,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    maskAllText: this.maskAllText,
                                    unblockSelector: this.unblockSelector,
                                    maskTextClass: this.maskTextClass,
                                    unmaskTextClass: this.unmaskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    unmaskTextSelector: this.unmaskTextSelector,
                                    skipChild: !0,
                                    newlyAddedElement: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskInputOptions: this.maskInputOptions,
                                    maskAttributeFn: this.maskAttributeFn,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    dataURLOptions: this.dataURLOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: e => {
                                        eP(e, this.mirror) && this.iframeManager.addIframe(e), eF(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), eB(s) && this.shadowDomManager.addShadowRoot(s.shadowRoot, this.doc)
                                    },
                                    onIframeLoad: (e, t) => {
                                        this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e)
                                    },
                                    onStylesheetLoad: (e, t) => {
                                        this.stylesheetManager.attachLinkElement(e, t)
                                    }
                                });
                                a && (e.push({
                                    parentId: i,
                                    nextId: o,
                                    node: a
                                }), t.add(a.id))
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (let e of this.movedSet)(!eG(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && s(e);
                        for (let e of this.addedSet) eX(this.droppedSet, e) || eG(this.removes, e, this.mirror) ? eX(this.movedSet, e) ? s(e) : this.droppedSet.add(e) : s(e);
                        let i = null;
                        for (; r.length;) {
                            let e = null;
                            if (i) {
                                let t = this.mirror.getId(i.value.parentNode),
                                    r = n(i.value); - 1 !== t && -1 !== r && (e = i)
                            }
                            if (!e) {
                                let t = r.tail;
                                for (; t;) {
                                    let r = t;
                                    if (t = t.previous, r) {
                                        let t = this.mirror.getId(r.value.parentNode);
                                        if (-1 === n(r.value)) continue;
                                        if (-1 !== t) {
                                            e = r;
                                            break
                                        } {
                                            let t = r.value;
                                            if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                let n = t.parentNode.host;
                                                if (-1 !== this.mirror.getId(n)) {
                                                    e = r;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (!e) {
                                for (; r.head;) r.removeNode(r.head.value);
                                break
                            }
                            i = e.previous, r.removeNode(e.value), s(e.value)
                        }
                        let o = {
                            texts: this.texts.map(e => ({
                                id: this.mirror.getId(e.node),
                                value: e.value
                            })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            attributes: this.attributes.map(e => {
                                let {
                                    attributes: t
                                } = e;
                                if ("string" == typeof t.style) {
                                    let r = JSON.stringify(e.styleDiff),
                                        n = JSON.stringify(e._unchangedStyles);
                                    r.length < t.style.length && (r + n).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                                }
                                return {
                                    id: this.mirror.getId(e.node),
                                    attributes: t
                                }
                            }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            removes: this.removes,
                            adds: e
                        };
                        (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o))
                    }, this.processMutation = e => {
                        let t;
                        if (!eN(e.target, this.mirror)) {
                            try {
                                t = document.implementation.createHTMLDocument()
                            } catch (e) {
                                t = this.doc
                            }
                            switch (e.type) {
                                case "characterData":
                                    {
                                        let t = e.target.textContent;eO(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                            value: ev(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t) : t.replace(/[\S]/g, "*") : t,
                                            node: e.target
                                        });
                                        break
                                    }
                                case "attributes":
                                    {
                                        let r = e.target,
                                            n = e.attributeName,
                                            s = e.target.getAttribute(n);
                                        if ("value" === n) {
                                            let t = er(r),
                                                n = r.tagName;
                                            s = en(r, n, t);
                                            let i = X({
                                                maskInputOptions: this.maskInputOptions,
                                                tagName: n,
                                                type: t
                                            });
                                            s = Q({
                                                isMasked: ev(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, i),
                                                element: r,
                                                value: s,
                                                maskInputFn: this.maskInputFn
                                            })
                                        }
                                        if (eO(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || s === e.oldValue) return;
                                        let i = this.attributes.find(t => t.node === e.target);
                                        if ("IFRAME" === r.tagName && "src" === n && !this.keepIframeSrcFn(s)) {
                                            if (r.contentDocument) return;
                                            n = "rr_src"
                                        }
                                        if (i || (i = {
                                                node: e.target,
                                                attributes: {},
                                                styleDiff: {},
                                                _unchangedStyles: {}
                                            }, this.attributes.push(i)), "type" === n && "INPUT" === r.tagName && "password" === (e.oldValue || "").toLowerCase() && r.setAttribute("data-rr-is-password", "true"), !eg(r.tagName, n) && (i.attributes[n] = ey(this.doc, Z(r.tagName), Z(n), s, r, this.maskAttributeFn), "style" === n)) {
                                            let n = t.createElement("span");
                                            for (let t of (e.oldValue && n.setAttribute("style", e.oldValue), Array.from(r.style))) {
                                                let e = r.style.getPropertyValue(t),
                                                    s = r.style.getPropertyPriority(t);
                                                e !== n.style.getPropertyValue(t) || s !== n.style.getPropertyPriority(t) ? "" === s ? i.styleDiff[t] = e : i.styleDiff[t] = [e, s] : i._unchangedStyles[t] = [e, s]
                                            }
                                            for (let e of Array.from(n.style)) "" === r.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                                        }
                                        break
                                    }
                                case "childList":
                                    if (eO(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                                    e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                                        let r = this.mirror.getId(t),
                                            n = K(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                        eO(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || eN(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (eY(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === r || function e(t, r) {
                                            if (K(t)) return !1;
                                            let n = r.getId(t);
                                            return !r.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, r))
                                        }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[eV(r, n)] ? eY(this.movedSet, t) : this.removes.push({
                                            parentId: n,
                                            id: r,
                                            isShadow: !!(K(e.target) && V(e.target)) || void 0
                                        })), this.mapRemoves.push(t))
                                    })
                            }
                        }
                    }, this.genAdds = (e, t) => {
                        if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                            if (this.mirror.hasNode(e)) {
                                if (eN(e, this.mirror)) return;
                                this.movedSet.add(e);
                                let r = null;
                                t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)), r && -1 !== r && (this.movedMap[eV(this.mirror.getId(e), r)] = !0)
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            !eO(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)), eB(e) && e.shadowRoot.childNodes.forEach(t => {
                                this.processedNodeManager.add(t, this), this.genAdds(t, e)
                            }))
                        }
                    }
                }
                init(e) {
                    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                        this[t] = e[t]
                    })
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
            }

            function eY(e, t) {
                e.delete(t), t.childNodes.forEach(t => eY(e, t))
            }

            function eG(e, t, r) {
                return 0 !== e.length && function e(t, r, n) {
                    let {
                        parentNode: s
                    } = r;
                    if (!s) return !1;
                    let i = n.getId(s);
                    return !!t.some(e => e.id === i) || e(t, s, n)
                }(e, t, r)
            }

            function eX(e, t) {
                return 0 !== e.size && function e(t, r) {
                    let {
                        parentNode: n
                    } = r;
                    return !!n && (!!t.has(n) || e(t, n))
                }(e, t)
            }
            let eQ = e => o ? (...t) => {
                try {
                    return e(...t)
                } catch (e) {
                    if (o && !0 === o(e)) return () => {};
                    throw e
                }
            } : e;

            function eZ(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let s = e[n],
                        i = e[n + 1];
                    if (n += 2, ("optionalAccess" === s || "optionalCall" === s) && null == r) return;
                    "access" === s || "optionalAccess" === s ? (t = r, r = i(r)) : ("call" === s || "optionalCall" === s) && (r = i((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }
            let e0 = [];

            function e1(e) {
                try {
                    if ("composedPath" in e) {
                        let t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0]
                } catch (e) {}
                return e && e.target
            }

            function e2(e, t) {
                let r = new eJ;
                e0.push(r), r.init(e);
                let n = window.MutationObserver || window.__rrMutationObserver,
                    s = eZ([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
                s && window[s] && (n = window[s]);
                let i = new n(eQ(t => {
                    e.onMutation && !1 === e.onMutation(t) || r.processMutations.bind(r)(t)
                }));
                return i.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), i
            }

            function e3({
                scrollCb: e,
                doc: t,
                mirror: r,
                blockClass: n,
                blockSelector: s,
                unblockSelector: i,
                sampling: o
            }) {
                return ek("scroll", eQ(eC(eQ(o => {
                    let a = e1(o);
                    if (!a || eO(a, n, s, i, !0)) return;
                    let l = r.getId(a);
                    if (a === t && t.defaultView) {
                        let r = ex(t.defaultView);
                        e({
                            id: l,
                            x: r.left,
                            y: r.top
                        })
                    } else e({
                        id: l,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
                }), o.scroll || 100)), t)
            }
            let e5 = ["INPUT", "TEXTAREA", "SELECT"],
                e8 = new WeakMap;

            function e6(e) {
                var t;
                return t = [], te("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || te("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || te("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || te("CSSConditionRule") && e.parentRule instanceof CSSConditionRule ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e)) : e.parentStyleSheet && t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)), t
            }

            function e4(e, t, r) {
                let n, s;
                return e ? (e.ownerNode ? n = t.getId(e.ownerNode) : s = r.getId(e), {
                    styleId: s,
                    id: n
                }) : {}
            }

            function e7({
                mirror: e,
                stylesheetManager: t
            }, r) {
                let n = null;
                n = "#document" === r.nodeName ? e.getId(r) : e.getId(r.host);
                let s = "#document" === r.nodeName ? eZ([r, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : eZ([r, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot]),
                    i = eZ([s, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(eZ([s, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
                return null !== n && -1 !== n && s && i ? (Object.defineProperty(r, "adoptedStyleSheets", {
                    configurable: i.configurable,
                    enumerable: i.enumerable,
                    get() {
                        return eZ([i, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                    },
                    set(e) {
                        let r = eZ([i, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                        if (null !== n && -1 !== n) try {
                            t.adoptStyleSheets(e, n)
                        } catch (e) {}
                        return r
                    }
                }), eQ(() => {
                    Object.defineProperty(r, "adoptedStyleSheets", {
                        configurable: i.configurable,
                        enumerable: i.enumerable,
                        get: i.get,
                        set: i.set
                    })
                })) : () => {}
            }

            function e9(e, t = {}) {
                let r = e.doc.defaultView;
                if (!r) return () => {};
                let n = e2(e, e.doc),
                    s = function({
                        mousemoveCb: e,
                        sampling: t,
                        doc: r,
                        mirror: n
                    }) {
                        let s;
                        if (!1 === t.mousemove) return () => {};
                        let i = "number" == typeof t.mousemove ? t.mousemove : 50,
                            o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                            a = [],
                            l = eC(eQ(t => {
                                let r = Date.now() - s;
                                e(a.map(e => (e.timeOffset -= r, e)), t), a = [], s = null
                            }), o),
                            c = eQ(eC(eQ(e => {
                                let t = e1(e),
                                    {
                                        clientX: r,
                                        clientY: i
                                    } = eL(e) ? e.changedTouches[0] : e;
                                s || (s = eT()), a.push({
                                    x: r,
                                    y: i,
                                    id: n.getId(t),
                                    timeOffset: eT() - s
                                }), l("undefined" != typeof DragEvent && e instanceof DragEvent ? eH.Drag : e instanceof MouseEvent ? eH.MouseMove : eH.TouchMove)
                            }), i, {
                                trailing: !1
                            })),
                            u = [ek("mousemove", c, r), ek("touchmove", c, r), ek("drag", c, r)];
                        return eQ(() => {
                            u.forEach(e => e())
                        })
                    }(e),
                    i = function({
                        mouseInteractionCb: e,
                        doc: t,
                        mirror: r,
                        blockClass: n,
                        blockSelector: s,
                        unblockSelector: i,
                        sampling: o
                    }) {
                        if (!1 === o.mouseInteraction) return () => {};
                        let a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                            l = [],
                            c = null,
                            u = t => o => {
                                let a = e1(o);
                                if (eO(a, n, s, i, !0)) return;
                                let l = null,
                                    u = t;
                                if ("pointerType" in o) {
                                    switch (o.pointerType) {
                                        case "mouse":
                                            l = eq.Mouse;
                                            break;
                                        case "touch":
                                            l = eq.Touch;
                                            break;
                                        case "pen":
                                            l = eq.Pen
                                    }
                                    l === eq.Touch ? e$[t] === e$.MouseDown ? u = "TouchStart" : e$[t] === e$.MouseUp && (u = "TouchEnd") : eq.Pen
                                } else eL(o) && (l = eq.Touch);
                                null !== l ? (c = l, (u.startsWith("Touch") && l === eq.Touch || u.startsWith("Mouse") && l === eq.Mouse) && (l = null)) : e$[t] === e$.Click && (l = c, c = null);
                                let d = eL(o) ? o.changedTouches[0] : o;
                                if (!d) return;
                                let h = r.getId(a),
                                    {
                                        clientX: p,
                                        clientY: m
                                    } = d;
                                eQ(e)({
                                    type: e$[u],
                                    id: h,
                                    x: p,
                                    y: m,
                                    ...null !== l && {
                                        pointerType: l
                                    }
                                })
                            };
                        return Object.keys(e$).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(e => {
                            let r = Z(e),
                                n = u(e);
                            if (window.PointerEvent) switch (e$[e]) {
                                case e$.MouseDown:
                                case e$.MouseUp:
                                    r = r.replace("mouse", "pointer");
                                    break;
                                case e$.TouchStart:
                                case e$.TouchEnd:
                                    return
                            }
                            l.push(ek(r, n, t))
                        }), eQ(() => {
                            l.forEach(e => e())
                        })
                    }(e),
                    o = e3(e),
                    a = function({
                        viewportResizeCb: e
                    }, {
                        win: t
                    }) {
                        let r = -1,
                            n = -1;
                        return ek("resize", eQ(eC(eQ(() => {
                            let t = eA(),
                                s = eD();
                            (r !== t || n !== s) && (e({
                                width: Number(s),
                                height: Number(t)
                            }), r = t, n = s)
                        }), 200)), t)
                    }(e, {
                        win: r
                    }),
                    l = function({
                        inputCb: e,
                        doc: t,
                        mirror: r,
                        blockClass: n,
                        blockSelector: s,
                        unblockSelector: i,
                        ignoreClass: o,
                        ignoreSelector: a,
                        maskInputOptions: l,
                        maskInputFn: c,
                        sampling: u,
                        userTriggeredOnInput: d,
                        maskTextClass: h,
                        unmaskTextClass: p,
                        maskTextSelector: m,
                        unmaskTextSelector: f
                    }) {
                        function y(e) {
                            let r = e1(e),
                                u = e.isTrusted,
                                y = r && ee(r.tagName);
                            if ("OPTION" === y && (r = r.parentElement), !r || !y || 0 > e5.indexOf(y) || eO(r, n, s, i, !0)) return;
                            let _ = r;
                            if (_.classList.contains(o) || a && _.matches(a)) return;
                            let S = er(r),
                                v = en(_, y, S),
                                w = !1,
                                b = X({
                                    maskInputOptions: l,
                                    tagName: y,
                                    type: S
                                }),
                                E = ev(r, h, m, p, f, b);
                            ("radio" === S || "checkbox" === S) && (w = r.checked), v = Q({
                                isMasked: E,
                                element: r,
                                value: v,
                                maskInputFn: c
                            }), g(r, d ? {
                                text: v,
                                isChecked: w,
                                userTriggered: u
                            } : {
                                text: v,
                                isChecked: w
                            });
                            let k = r.name;
                            "radio" === S && k && w && t.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach(e => {
                                if (e !== r) {
                                    let t = Q({
                                        isMasked: E,
                                        element: e,
                                        value: en(e, y, S),
                                        maskInputFn: c
                                    });
                                    g(e, d ? {
                                        text: t,
                                        isChecked: !w,
                                        userTriggered: !1
                                    } : {
                                        text: t,
                                        isChecked: !w
                                    })
                                }
                            })
                        }

                        function g(t, n) {
                            let s = e8.get(t);
                            if (!s || s.text !== n.text || s.isChecked !== n.isChecked) {
                                e8.set(t, n);
                                let s = r.getId(t);
                                eQ(e)({ ...n,
                                    id: s
                                })
                            }
                        }
                        let _ = ("last" === u.input ? ["change"] : ["input", "change"]).map(e => ek(e, eQ(y), t)),
                            S = t.defaultView;
                        if (!S) return () => {
                            _.forEach(e => e())
                        };
                        let v = S.Object.getOwnPropertyDescriptor(S.HTMLInputElement.prototype, "value"),
                            w = [
                                [S.HTMLInputElement.prototype, "value"],
                                [S.HTMLInputElement.prototype, "checked"],
                                [S.HTMLSelectElement.prototype, "value"],
                                [S.HTMLTextAreaElement.prototype, "value"],
                                [S.HTMLSelectElement.prototype, "selectedIndex"],
                                [S.HTMLOptionElement.prototype, "selected"]
                            ];
                        return v && v.set && _.push(...w.map(e => (function e(t, r, n, s, i = window) {
                            let o = i.Object.getOwnPropertyDescriptor(t, r);
                            return i.Object.defineProperty(t, r, s ? n : {
                                set(e) {
                                    setTimeout(() => {
                                        n.set.call(this, e)
                                    }, 0), o && o.set && o.set.call(this, e)
                                }
                            }), () => e(t, r, o || {}, !0)
                        })(e[0], e[1], {
                            set() {
                                eQ(y)({
                                    target: this,
                                    isTrusted: !1
                                })
                            }
                        }, !1, S))), eQ(() => {
                            _.forEach(e => e())
                        })
                    }(e),
                    c = function({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: r,
                        unblockSelector: n,
                        mirror: s,
                        sampling: i,
                        doc: o
                    }) {
                        let a = eQ(o => eC(eQ(i => {
                                let a = e1(i);
                                if (!a || eO(a, t, r, n, !0)) return;
                                let {
                                    currentTime: l,
                                    volume: c,
                                    muted: u,
                                    playbackRate: d
                                } = a;
                                e({
                                    type: o,
                                    id: s.getId(a),
                                    currentTime: l,
                                    volume: c,
                                    muted: u,
                                    playbackRate: d
                                })
                            }), i.media || 500)),
                            l = [ek("play", a(0), o), ek("pause", a(1), o), ek("seeked", a(2), o), ek("volumechange", a(3), o), ek("ratechange", a(4), o)];
                        return eQ(() => {
                            l.forEach(e => e())
                        })
                    }(e),
                    u = function({
                        styleSheetRuleCb: e,
                        mirror: t,
                        stylesheetManager: r
                    }, {
                        win: n
                    }) {
                        let s, i;
                        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                        let o = n.CSSStyleSheet.prototype.insertRule;
                        n.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                            apply: eQ((n, s, i) => {
                                let [o, a] = i, {
                                    id: l,
                                    styleId: c
                                } = e4(s, t, r.styleMirror);
                                return (l && -1 !== l || c && -1 !== c) && e({
                                    id: l,
                                    styleId: c,
                                    adds: [{
                                        rule: o,
                                        index: a
                                    }]
                                }), n.apply(s, i)
                            })
                        });
                        let a = n.CSSStyleSheet.prototype.deleteRule;
                        n.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                            apply: eQ((n, s, i) => {
                                let [o] = i, {
                                    id: a,
                                    styleId: l
                                } = e4(s, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    removes: [{
                                        index: o
                                    }]
                                }), n.apply(s, i)
                            })
                        }), n.CSSStyleSheet.prototype.replace && (s = n.CSSStyleSheet.prototype.replace, n.CSSStyleSheet.prototype.replace = new Proxy(s, {
                            apply: eQ((n, s, i) => {
                                let [o] = i, {
                                    id: a,
                                    styleId: l
                                } = e4(s, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    replace: o
                                }), n.apply(s, i)
                            })
                        })), n.CSSStyleSheet.prototype.replaceSync && (i = n.CSSStyleSheet.prototype.replaceSync, n.CSSStyleSheet.prototype.replaceSync = new Proxy(i, {
                            apply: eQ((n, s, i) => {
                                let [o] = i, {
                                    id: a,
                                    styleId: l
                                } = e4(s, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    replaceSync: o
                                }), n.apply(s, i)
                            })
                        }));
                        let l = {};
                        tt("CSSGroupingRule") ? l.CSSGroupingRule = n.CSSGroupingRule : (tt("CSSMediaRule") && (l.CSSMediaRule = n.CSSMediaRule), tt("CSSConditionRule") && (l.CSSConditionRule = n.CSSConditionRule), tt("CSSSupportsRule") && (l.CSSSupportsRule = n.CSSSupportsRule));
                        let c = {};
                        return Object.entries(l).forEach(([n, s]) => {
                            c[n] = {
                                insertRule: s.prototype.insertRule,
                                deleteRule: s.prototype.deleteRule
                            }, s.prototype.insertRule = new Proxy(c[n].insertRule, {
                                apply: eQ((n, s, i) => {
                                    let [o, a] = i, {
                                        id: l,
                                        styleId: c
                                    } = e4(s.parentStyleSheet, t, r.styleMirror);
                                    return (l && -1 !== l || c && -1 !== c) && e({
                                        id: l,
                                        styleId: c,
                                        adds: [{
                                            rule: o,
                                            index: [...e6(s), a || 0]
                                        }]
                                    }), n.apply(s, i)
                                })
                            }), s.prototype.deleteRule = new Proxy(c[n].deleteRule, {
                                apply: eQ((n, s, i) => {
                                    let [o] = i, {
                                        id: a,
                                        styleId: l
                                    } = e4(s.parentStyleSheet, t, r.styleMirror);
                                    return (a && -1 !== a || l && -1 !== l) && e({
                                        id: a,
                                        styleId: l,
                                        removes: [{
                                            index: [...e6(s), o]
                                        }]
                                    }), n.apply(s, i)
                                })
                            })
                        }), eQ(() => {
                            n.CSSStyleSheet.prototype.insertRule = o, n.CSSStyleSheet.prototype.deleteRule = a, s && (n.CSSStyleSheet.prototype.replace = s), i && (n.CSSStyleSheet.prototype.replaceSync = i), Object.entries(l).forEach(([e, t]) => {
                                t.prototype.insertRule = c[e].insertRule, t.prototype.deleteRule = c[e].deleteRule
                            })
                        })
                    }(e, {
                        win: r
                    }),
                    d = e7(e, e.doc),
                    h = function({
                        styleDeclarationCb: e,
                        mirror: t,
                        ignoreCSSAttributes: r,
                        stylesheetManager: n
                    }, {
                        win: s
                    }) {
                        let i = s.CSSStyleDeclaration.prototype.setProperty;
                        s.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
                            apply: eQ((s, o, a) => {
                                let [l, c, u] = a;
                                if (r.has(l)) return i.apply(o, [l, c, u]);
                                let {
                                    id: d,
                                    styleId: h
                                } = e4(eZ([o, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, n.styleMirror);
                                return (d && -1 !== d || h && -1 !== h) && e({
                                    id: d,
                                    styleId: h,
                                    set: {
                                        property: l,
                                        value: c,
                                        priority: u
                                    },
                                    index: e6(o.parentRule)
                                }), s.apply(o, a)
                            })
                        });
                        let o = s.CSSStyleDeclaration.prototype.removeProperty;
                        return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                            apply: eQ((s, i, a) => {
                                let [l] = a;
                                if (r.has(l)) return o.apply(i, [l]);
                                let {
                                    id: c,
                                    styleId: u
                                } = e4(eZ([i, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, n.styleMirror);
                                return (c && -1 !== c || u && -1 !== u) && e({
                                    id: c,
                                    styleId: u,
                                    remove: {
                                        property: l
                                    },
                                    index: e6(i.parentRule)
                                }), s.apply(i, a)
                            })
                        }), eQ(() => {
                            s.CSSStyleDeclaration.prototype.setProperty = i, s.CSSStyleDeclaration.prototype.removeProperty = o
                        })
                    }(e, {
                        win: r
                    }),
                    p = e.collectFonts ? function({
                        fontCb: e,
                        doc: t
                    }) {
                        let r = t.defaultView;
                        if (!r) return () => {};
                        let n = [],
                            s = new WeakMap,
                            i = r.FontFace;
                        r.FontFace = function(e, t, r) {
                            let n = new i(e, t, r);
                            return s.set(n, {
                                family: e,
                                buffer: "string" != typeof t,
                                descriptors: r,
                                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                            }), n
                        };
                        let o = eR(t.fonts, "add", function(t) {
                            return function(r) {
                                return setTimeout(eQ(() => {
                                    let t = s.get(r);
                                    t && (e(t), s.delete(r))
                                }), 0), t.apply(this, [r])
                            }
                        });
                        return n.push(() => {
                            r.FontFace = i
                        }), n.push(o), eQ(() => {
                            n.forEach(e => e())
                        })
                    }(e) : () => {},
                    m = function(e) {
                        let {
                            doc: t,
                            mirror: r,
                            blockClass: n,
                            blockSelector: s,
                            unblockSelector: i,
                            selectionCb: o
                        } = e, a = !0, l = eQ(() => {
                            let e = t.getSelection();
                            if (!e || a && eZ([e, "optionalAccess", e => e.isCollapsed])) return;
                            a = e.isCollapsed || !1;
                            let l = [],
                                c = e.rangeCount || 0;
                            for (let t = 0; t < c; t++) {
                                let {
                                    startContainer: o,
                                    startOffset: a,
                                    endContainer: c,
                                    endOffset: u
                                } = e.getRangeAt(t);
                                eO(o, n, s, i, !0) || eO(c, n, s, i, !0) || l.push({
                                    start: r.getId(o),
                                    startOffset: a,
                                    end: r.getId(c),
                                    endOffset: u
                                })
                            }
                            o({
                                ranges: l
                            })
                        });
                        return l(), ek("selectionchange", l)
                    }(e),
                    f = function({
                        doc: e,
                        customElementCb: t
                    }) {
                        let r = e.defaultView;
                        return r && r.customElements ? eR(r.customElements, "define", function(e) {
                            return function(r, n, s) {
                                try {
                                    t({
                                        define: {
                                            name: r
                                        }
                                    })
                                } catch (e) {}
                                return e.apply(this, [r, n, s])
                            }
                        }) : () => {}
                    }(e),
                    y = [];
                for (let t of e.plugins) y.push(t.observer(t.callback, r, t.options));
                return eQ(() => {
                    e0.forEach(e => e.reset()), n.disconnect(), s(), i(), o(), a(), l(), c(), u(), d(), h(), p(), m(), f(), y.forEach(e => e())
                })
            }

            function te(e) {
                return void 0 !== window[e]
            }

            function tt(e) {
                return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
            }
            class tr {
                constructor(e) {
                    this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
                }
                getId(e, t, r, n) {
                    let s = r || this.getIdToRemoteIdMap(e),
                        i = n || this.getRemoteIdToIdMap(e),
                        o = s.get(t);
                    return o || (o = this.generateIdFn(), s.set(t, o), i.set(o, t)), o
                }
                getIds(e, t) {
                    let r = this.getIdToRemoteIdMap(e),
                        n = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getId(e, t, r, n))
                }
                getRemoteId(e, t, r) {
                    let n = r || this.getRemoteIdToIdMap(e);
                    return "number" != typeof t ? t : n.get(t) || -1
                }
                getRemoteIds(e, t) {
                    let r = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getRemoteId(e, t, r))
                }
                reset(e) {
                    if (!e) {
                        this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                        return
                    }
                    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                }
                getIdToRemoteIdMap(e) {
                    let t = this.iframeIdToRemoteIdMap.get(e);
                    return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
                }
                getRemoteIdToIdMap(e) {
                    let t = this.iframeRemoteIdToIdMap.get(e);
                    return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
                }
            }

            function tn(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let s = e[n],
                        i = e[n + 1];
                    if (n += 2, ("optionalAccess" === s || "optionalCall" === s) && null == r) return;
                    "access" === s || "optionalAccess" === s ? (t = r, r = i(r)) : ("call" === s || "optionalCall" === s) && (r = i((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }
            class ts {
                constructor() {
                    this.crossOriginIframeMirror = new tr(eo), this.crossOriginIframeRootIdMap = new WeakMap
                }
                addIframe() {}
                addLoadListener() {}
                attachIframe() {}
            }
            class ti {
                constructor(e) {
                    this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new tr(eo), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new tr(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
                }
                addIframe(e) {
                    this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                }
                addLoadListener(e) {
                    this.loadListener = e
                }
                attachIframe(e, t) {
                    this.mutationCb({
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), tn([this, "access", e => e.loadListener, "optionalCall", t => t(e)]), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
                }
                handleMessage(e) {
                    if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
                    let t = this.crossOriginIframeMap.get(e.source);
                    if (!t) return;
                    let r = this.transformCrossOriginEvent(t, e.data.event);
                    r && this.wrappedEmit(r, e.data.isCheckout)
                }
                transformCrossOriginEvent(e, t) {
                    switch (t.type) {
                        case ej.FullSnapshot:
                            {
                                this.crossOriginIframeMirror.reset(e),
                                this.crossOriginIframeStyleMirror.reset(e),
                                this.replaceIdOnNode(t.data.node, e);
                                let r = t.data.node.id;
                                return this.crossOriginIframeRootIdMap.set(e, r),
                                this.patchRootIdOnNode(t.data.node, r),
                                {
                                    timestamp: t.timestamp,
                                    type: ej.IncrementalSnapshot,
                                    data: {
                                        source: eH.Mutation,
                                        adds: [{
                                            parentId: this.mirror.getId(e),
                                            nextId: null,
                                            node: t.data.node
                                        }],
                                        removes: [],
                                        texts: [],
                                        attributes: [],
                                        isAttachIframe: !0
                                    }
                                }
                            }
                        case ej.Meta:
                        case ej.Load:
                        case ej.DomContentLoaded:
                            break;
                        case ej.Plugin:
                            return t;
                        case ej.Custom:
                            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                        case ej.IncrementalSnapshot:
                            switch (t.data.source) {
                                case eH.Mutation:
                                    return t.data.adds.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                        let r = this.crossOriginIframeRootIdMap.get(e);
                                        r && this.patchRootIdOnNode(t.node, r)
                                    }), t.data.removes.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "id"])
                                    }), t.data.attributes.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t.data.texts.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eH.Drag:
                                case eH.TouchMove:
                                case eH.MouseMove:
                                    return t.data.positions.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eH.ViewportResize:
                                    return !1;
                                case eH.MediaInteraction:
                                case eH.MouseInteraction:
                                case eH.Scroll:
                                case eH.CanvasMutation:
                                case eH.Input:
                                    return this.replaceIds(t.data, e, ["id"]), t;
                                case eH.StyleSheetRule:
                                case eH.StyleDeclaration:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                                case eH.Font:
                                    return t;
                                case eH.Selection:
                                    return t.data.ranges.forEach(t => {
                                        this.replaceIds(t, e, ["start", "end"])
                                    }), t;
                                case eH.AdoptedStyleSheet:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), tn([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t(t => {
                                        this.replaceStyleIds(t, e, ["styleId"])
                                    })]), t
                            }
                    }
                    return !1
                }
                replace(e, t, r, n) {
                    for (let s of n)(Array.isArray(t[s]) || "number" == typeof t[s]) && (Array.isArray(t[s]) ? t[s] = e.getIds(r, t[s]) : t[s] = e.getId(r, t[s]));
                    return t
                }
                replaceIds(e, t, r) {
                    return this.replace(this.crossOriginIframeMirror, e, t, r)
                }
                replaceStyleIds(e, t, r) {
                    return this.replace(this.crossOriginIframeStyleMirror, e, t, r)
                }
                replaceIdOnNode(e, t) {
                    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
                        this.replaceIdOnNode(e, t)
                    })
                }
                patchRootIdOnNode(e, t) {
                    e.type === f.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
                        this.patchRootIdOnNode(e, t)
                    })
                }
            }
            class to {
                init() {}
                addShadowRoot() {}
                observeAttachShadow() {}
                reset() {}
            }
            class ta {
                constructor(e) {
                    this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
                }
                init() {
                    this.reset(), this.patchAttachShadow(Element, document)
                }
                addShadowRoot(e, t) {
                    if (!V(e) || this.shadowDoms.has(e)) return;
                    this.shadowDoms.add(e);
                    let r = e2({ ...this.bypassOptions,
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }, e);
                    this.restoreHandlers.push(() => r.disconnect()), this.restoreHandlers.push(e3({ ...this.bypassOptions,
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    })), setTimeout(() => {
                        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(e7({
                            mirror: this.mirror,
                            stylesheetManager: this.bypassOptions.stylesheetManager
                        }, e))
                    }, 0)
                }
                observeAttachShadow(e) {
                    e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
                }
                patchAttachShadow(e, t) {
                    let r = this;
                    this.restoreHandlers.push(eR(e.prototype, "attachShadow", function(e) {
                        return function(n) {
                            let s = e.call(this, n);
                            return this.shadowRoot && eW(this) && r.addShadowRoot(this.shadowRoot, t), s
                        }
                    }))
                }
                reset() {
                    this.restoreHandlers.forEach(e => {
                        try {
                            e()
                        } catch (e) {}
                    }), this.restoreHandlers = [], this.shadowDoms = new WeakSet
                }
            }
            class tl {
                reset() {}
                freeze() {}
                unfreeze() {}
                lock() {}
                unlock() {}
                snapshot() {}
            }
            class tc {
                constructor(e) {
                    this.trackedLinkElements = new WeakSet, this.styleMirror = new eU, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
                }
                attachLinkElement(e, t) {
                    "_cssText" in t.attributes && this.mutationCb({
                        adds: [],
                        removes: [],
                        texts: [],
                        attributes: [{
                            id: t.id,
                            attributes: t.attributes
                        }]
                    }), this.trackLinkElement(e)
                }
                trackLinkElement(e) {
                    this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                }
                adoptStyleSheets(e, t) {
                    if (0 === e.length) return;
                    let r = {
                            id: t,
                            styleIds: []
                        },
                        n = [];
                    for (let t of e) {
                        let e;
                        this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), n.push({
                            styleId: e,
                            rules: Array.from(t.rules || CSSRule, (e, t) => ({
                                rule: Y(e),
                                index: t
                            }))
                        })), r.styleIds.push(e)
                    }
                    n.length > 0 && (r.styles = n), this.adoptedStyleSheetCb(r)
                }
                reset() {
                    this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
                }
                trackStylesheetInLinkElement(e) {}
            }
            class tu {
                constructor() {
                    this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
                }
                periodicallyClear() {
                    ! function(...e) {
                        (function() {
                            if (i) return i;
                            let e = window.document,
                                t = window.requestAnimationFrame;
                            if (e && "function" == typeof e.createElement) try {
                                let r = e.createElement("iframe");
                                r.hidden = !0, e.head.appendChild(r);
                                let n = r.contentWindow;
                                n && n.requestAnimationFrame && (t = n.requestAnimationFrame), e.head.removeChild(r)
                            } catch (e) {}
                            return i = t.bind(window)
                        })()(...e)
                    }(() => {
                        this.clear(), this.loop && this.periodicallyClear()
                    })
                }
                inOtherBuffer(e, t) {
                    let r = this.nodeMap.get(e);
                    return r && Array.from(r).some(e => e !== t)
                }
                add(e, t) {
                    this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
                }
                clear() {
                    this.nodeMap = new WeakMap
                }
                destroy() {
                    this.loop = !1
                }
            }

            function td(e) {
                return e.timestamp = eT(), e
            }
            let th = new G;

            function tp(e = {}) {
                let t;
                let {
                    emit: r,
                    checkoutEveryNms: n,
                    checkoutEveryNth: s,
                    blockClass: i = "rr-block",
                    blockSelector: l = null,
                    unblockSelector: c = null,
                    ignoreClass: u = "rr-ignore",
                    ignoreSelector: d = null,
                    maskAllText: h = !1,
                    maskTextClass: p = "rr-mask",
                    unmaskTextClass: m = null,
                    maskTextSelector: f = null,
                    unmaskTextSelector: y = null,
                    inlineStylesheet: g = !0,
                    maskAllInputs: S,
                    maskInputOptions: v,
                    slimDOMOptions: w,
                    maskAttributeFn: b,
                    maskInputFn: E,
                    maskTextFn: k,
                    packFn: I,
                    sampling: M = {},
                    dataURLOptions: C = {},
                    mousemoveWait: R,
                    recordCanvas: T = !1,
                    recordCrossOriginIframes: x = !1,
                    recordAfter: A = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
                    userTriggeredOnInput: D = !1,
                    collectFonts: O = !1,
                    inlineImages: N = !1,
                    plugins: L,
                    keepIframeSrcFn: P = () => !1,
                    ignoreCSSAttributes: F = new Set([]),
                    errorHandler: B,
                    onMutation: U,
                    getCanvasManager: z
                } = e;
                o = B;
                let W = !x || window.parent === window,
                    j = !1;
                if (!W) try {
                    window.parent.document && (j = !1)
                } catch (e) {
                    j = !0
                }
                if (W && !r) throw Error("emit function is required");
                void 0 !== R && void 0 === M.mousemove && (M.mousemove = R), th.reset();
                let H = !0 === S ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        radio: !0,
                        checkbox: !0
                    } : void 0 !== v ? v : {},
                    $ = !0 === w || "all" === w ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === w,
                        headMetaDescKeywords: "all" === w
                    } : w || {};
                ! function(e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                        let t = e[0];
                        if (!(0 in e)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let q = 0,
                    K = e => {
                        for (let t of L || []) t.eventProcessor && (e = t.eventProcessor(e));
                        return I && !j && (e = I(e)), e
                    },
                    V = (e, i) => {
                        if ((0, _.x)([e0, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) && e.type !== ej.FullSnapshot && !(e.type === ej.IncrementalSnapshot && e.data.source === eH.Mutation) && e0.forEach(e => e.unfreeze()), W)(0, _.x)([r, "optionalCall", t => t(K(e), i)]);
                        else if (j) {
                            let t = {
                                type: "rrweb",
                                event: K(e),
                                origin: window.location.origin,
                                isCheckout: i
                            };
                            window.parent.postMessage(t, "*")
                        }
                        if (e.type === ej.FullSnapshot) t = e, q = 0;
                        else if (e.type === ej.IncrementalSnapshot) {
                            if (e.data.source === eH.Mutation && e.data.isAttachIframe) return;
                            q++;
                            let r = s && q >= s,
                                i = n && e.timestamp - t.timestamp > n;
                            (r || i) && en(!0)
                        }
                    },
                    J = e => {
                        V(td({
                            type: ej.IncrementalSnapshot,
                            data: {
                                source: eH.Mutation,
                                ...e
                            }
                        }))
                    },
                    Y = e => V(td({
                        type: ej.IncrementalSnapshot,
                        data: {
                            source: eH.Scroll,
                            ...e
                        }
                    })),
                    X = e => V(td({
                        type: ej.IncrementalSnapshot,
                        data: {
                            source: eH.CanvasMutation,
                            ...e
                        }
                    })),
                    Q = new tc({
                        mutationCb: J,
                        adoptedStyleSheetCb: e => V(td({
                            type: ej.IncrementalSnapshot,
                            data: {
                                source: eH.AdoptedStyleSheet,
                                ...e
                            }
                        }))
                    }),
                    Z = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new ts : new ti({
                        mirror: th,
                        mutationCb: J,
                        stylesheetManager: Q,
                        recordCrossOriginIframes: x,
                        wrappedEmit: V
                    });
                for (let e of L || []) e.getMirror && e.getMirror({
                    nodeMirror: th,
                    crossOriginIframeMirror: Z.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: Z.crossOriginIframeStyleMirror
                });
                let ee = new tu,
                    et = function(e, t) {
                        try {
                            return e ? e(t) : new tl
                        } catch (e) {
                            return console.warn("Unable to initialize CanvasManager"), new tl
                        }
                    }(z, {
                        mirror: th,
                        win: window,
                        mutationCb: e => V(td({
                            type: ej.IncrementalSnapshot,
                            data: {
                                source: eH.CanvasMutation,
                                ...e
                            }
                        })),
                        recordCanvas: T,
                        blockClass: i,
                        blockSelector: l,
                        unblockSelector: c,
                        sampling: M.canvas,
                        dataURLOptions: C,
                        errorHandler: B
                    }),
                    er = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new to : new ta({
                        mutationCb: J,
                        scrollCb: Y,
                        bypassOptions: {
                            onMutation: U,
                            blockClass: i,
                            blockSelector: l,
                            unblockSelector: c,
                            maskAllText: h,
                            maskTextClass: p,
                            unmaskTextClass: m,
                            maskTextSelector: f,
                            unmaskTextSelector: y,
                            inlineStylesheet: g,
                            maskInputOptions: H,
                            dataURLOptions: C,
                            maskAttributeFn: b,
                            maskTextFn: k,
                            maskInputFn: E,
                            recordCanvas: T,
                            inlineImages: N,
                            sampling: M,
                            slimDOMOptions: $,
                            iframeManager: Z,
                            stylesheetManager: Q,
                            canvasManager: et,
                            keepIframeSrcFn: P,
                            processedNodeManager: ee
                        },
                        mirror: th
                    }),
                    en = (e = !1) => {
                        V(td({
                            type: ej.Meta,
                            data: {
                                href: window.location.href,
                                width: eD(),
                                height: eA()
                            }
                        }), e), Q.reset(), er.init(), e0.forEach(e => e.lock());
                        let t = function(e, t) {
                            let {
                                mirror: r = new G,
                                blockClass: n = "rr-block",
                                blockSelector: s = null,
                                unblockSelector: i = null,
                                maskAllText: o = !1,
                                maskTextClass: a = "rr-mask",
                                unmaskTextClass: l = null,
                                maskTextSelector: c = null,
                                unmaskTextSelector: u = null,
                                inlineStylesheet: d = !0,
                                inlineImages: h = !1,
                                recordCanvas: p = !1,
                                maskAllInputs: m = !1,
                                maskAttributeFn: f,
                                maskTextFn: y,
                                maskInputFn: g,
                                slimDOM: _ = !1,
                                dataURLOptions: S,
                                preserveWhiteSpace: v,
                                onSerialize: w,
                                onIframeLoad: b,
                                iframeLoadTimeout: E,
                                onStylesheetLoad: k,
                                stylesheetLoadTimeout: I,
                                keepIframeSrcFn: M = () => !1
                            } = t || {};
                            return eb(e, {
                                doc: e,
                                mirror: r,
                                blockClass: n,
                                blockSelector: s,
                                unblockSelector: i,
                                maskAllText: o,
                                maskTextClass: a,
                                unmaskTextClass: l,
                                maskTextSelector: c,
                                unmaskTextSelector: u,
                                skipChild: !1,
                                inlineStylesheet: d,
                                maskInputOptions: !0 === m ? {
                                    color: !0,
                                    date: !0,
                                    "datetime-local": !0,
                                    email: !0,
                                    month: !0,
                                    number: !0,
                                    range: !0,
                                    search: !0,
                                    tel: !0,
                                    text: !0,
                                    time: !0,
                                    url: !0,
                                    week: !0,
                                    textarea: !0,
                                    select: !0
                                } : !1 === m ? {} : m,
                                maskAttributeFn: f,
                                maskTextFn: y,
                                maskInputFn: g,
                                slimDOMOptions: !0 === _ || "all" === _ ? {
                                    script: !0,
                                    comment: !0,
                                    headFavicon: !0,
                                    headWhitespace: !0,
                                    headMetaDescKeywords: "all" === _,
                                    headMetaSocial: !0,
                                    headMetaRobots: !0,
                                    headMetaHttpEquiv: !0,
                                    headMetaAuthorship: !0,
                                    headMetaVerification: !0
                                } : !1 === _ ? {} : _,
                                dataURLOptions: S,
                                inlineImages: h,
                                recordCanvas: p,
                                preserveWhiteSpace: v,
                                onSerialize: w,
                                onIframeLoad: b,
                                iframeLoadTimeout: E,
                                onStylesheetLoad: k,
                                stylesheetLoadTimeout: I,
                                keepIframeSrcFn: M,
                                newlyAddedElement: !1
                            })
                        }(document, {
                            mirror: th,
                            blockClass: i,
                            blockSelector: l,
                            unblockSelector: c,
                            maskAllText: h,
                            maskTextClass: p,
                            unmaskTextClass: m,
                            maskTextSelector: f,
                            unmaskTextSelector: y,
                            inlineStylesheet: g,
                            maskAllInputs: H,
                            maskAttributeFn: b,
                            maskInputFn: E,
                            maskTextFn: k,
                            slimDOM: $,
                            dataURLOptions: C,
                            recordCanvas: T,
                            inlineImages: N,
                            onSerialize: e => {
                                eP(e, th) && Z.addIframe(e), eF(e, th) && Q.trackLinkElement(e), eB(e) && er.addShadowRoot(e.shadowRoot, document)
                            },
                            onIframeLoad: (e, t) => {
                                Z.attachIframe(e, t), er.observeAttachShadow(e)
                            },
                            onStylesheetLoad: (e, t) => {
                                Q.attachLinkElement(e, t)
                            },
                            keepIframeSrcFn: P
                        });
                        if (!t) return console.warn("Failed to snapshot the document");
                        V(td({
                            type: ej.FullSnapshot,
                            data: {
                                node: t,
                                initialOffset: ex(window)
                            }
                        })), e0.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Q.adoptStyleSheets(document.adoptedStyleSheets, th.getId(document))
                    };
                a = en;
                try {
                    let e = [],
                        t = e => eQ(e9)({
                            onMutation: U,
                            mutationCb: J,
                            mousemoveCb: (e, t) => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e
                                }
                            })),
                            mouseInteractionCb: e => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: eH.MouseInteraction,
                                    ...e
                                }
                            })),
                            scrollCb: Y,
                            viewportResizeCb: e => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: eH.ViewportResize,
                                    ...e
                                }
                            })),
                            inputCb: e => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: eH.Input,
                                    ...e
                                }
                            })),
                            mediaInteractionCb: e => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: eH.MediaInteraction,
                                    ...e
                                }
                            })),
                            styleSheetRuleCb: e => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: eH.StyleSheetRule,
                                    ...e
                                }
                            })),
                            styleDeclarationCb: e => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: eH.StyleDeclaration,
                                    ...e
                                }
                            })),
                            canvasMutationCb: X,
                            fontCb: e => V(td({
                                type: ej.IncrementalSnapshot,
                                data: {
                                    source: eH.Font,
                                    ...e
                                }
                            })),
                            selectionCb: e => {
                                V(td({
                                    type: ej.IncrementalSnapshot,
                                    data: {
                                        source: eH.Selection,
                                        ...e
                                    }
                                }))
                            },
                            customElementCb: e => {
                                V(td({
                                    type: ej.IncrementalSnapshot,
                                    data: {
                                        source: eH.CustomElement,
                                        ...e
                                    }
                                }))
                            },
                            blockClass: i,
                            ignoreClass: u,
                            ignoreSelector: d,
                            maskAllText: h,
                            maskTextClass: p,
                            unmaskTextClass: m,
                            maskTextSelector: f,
                            unmaskTextSelector: y,
                            maskInputOptions: H,
                            inlineStylesheet: g,
                            sampling: M,
                            recordCanvas: T,
                            inlineImages: N,
                            userTriggeredOnInput: D,
                            collectFonts: O,
                            doc: e,
                            maskAttributeFn: b,
                            maskInputFn: E,
                            maskTextFn: k,
                            keepIframeSrcFn: P,
                            blockSelector: l,
                            unblockSelector: c,
                            slimDOMOptions: $,
                            dataURLOptions: C,
                            mirror: th,
                            iframeManager: Z,
                            stylesheetManager: Q,
                            shadowDomManager: er,
                            processedNodeManager: ee,
                            canvasManager: et,
                            ignoreCSSAttributes: F,
                            plugins: (0, _.x)([L, "optionalAccess", e => e.filter, "call", e => e(e => e.observer), "optionalAccess", e => e.map, "call", e => e(e => ({
                                observer: e.observer,
                                options: e.options,
                                callback: t => V(td({
                                    type: ej.Plugin,
                                    data: {
                                        plugin: e.name,
                                        payload: t
                                    }
                                }))
                            }))]) || []
                        }, {});
                    Z.addLoadListener(r => {
                        try {
                            e.push(t(r.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    });
                    let r = () => {
                        en(), e.push(t(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? r() : (e.push(ek("DOMContentLoaded", () => {
                        V(td({
                            type: ej.DomContentLoaded,
                            data: {}
                        })), "DOMContentLoaded" === A && r()
                    })), e.push(ek("load", () => {
                        V(td({
                            type: ej.Load,
                            data: {}
                        })), "load" === A && r()
                    }, window))), () => {
                        e.forEach(e => e()), ee.destroy(), a = void 0, o = void 0
                    }
                } catch (e) {
                    console.warn(e)
                }
            }

            function tm(e) {
                return e > 9999999999 ? e : 1e3 * e
            }

            function tf(e) {
                return e > 9999999999 ? e / 1e3 : e
            }

            function ty(e, t) {
                "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
                    type: ej.Custom,
                    timestamp: 1e3 * (t.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, C.Fv)(t, 10, 1e3)
                    }
                }), "console" === t.category)))
            }

            function tg(e) {
                return e.closest("button,a") || e
            }

            function t_(e) {
                let t = tS(e);
                return t && t instanceof Element ? tg(t) : t
            }

            function tS(e) {
                return "object" == typeof e && e && "target" in e ? e.target : e
            }
            tp.mirror = th, tp.takeFullSnapshot = function(e) {
                if (!a) throw Error("please take full snapshot after start recording");
                a(e)
            };
            class tv {
                constructor(e, t, r = ty) {
                    this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = r
                }
                addListeners() {
                    var e;
                    let t = (e = () => {
                        this._lastMutation = tb()
                    }, l || (l = [], (0, R.hl)(j, "open", function(e) {
                        return function(...t) {
                            if (l) try {
                                l.forEach(e => e())
                            } catch (e) {}
                            return e.apply(j, t)
                        }
                    })), l.push(e), () => {
                        let t = l ? l.indexOf(e) : -1;
                        t > -1 && l.splice(t, 1)
                    });
                    this._teardown = () => {
                        t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                    }
                }
                removeListeners() {
                    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                }
                handleClick(e, t) {
                    var r;
                    if (r = this._ignoreSelector, !tw.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || r && t.matches(r) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp)) return;
                    let n = {
                        timestamp: tf(e.timestamp),
                        clickBreadcrumb: e,
                        clickCount: 0,
                        node: t
                    };
                    this._clicks.some(e => e.node === n.node && 1 > Math.abs(e.timestamp - n.timestamp)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
                }
                registerMutation(e = Date.now()) {
                    this._lastMutation = tf(e)
                }
                registerScroll(e = Date.now()) {
                    this._lastScroll = tf(e)
                }
                registerClick(e) {
                    let t = tg(e);
                    this._handleMultiClick(t)
                }
                _handleMultiClick(e) {
                    this._getClicks(e).forEach(e => {
                        e.clickCount++
                    })
                }
                _getClicks(e) {
                    return this._clicks.filter(t => t.node === e)
                }
                _checkClicks() {
                    let e = [],
                        t = tb();
                    for (let r of (this._clicks.forEach(r => {
                            !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0), !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0), r.timestamp + this._timeout <= t && e.push(r)
                        }), e)) {
                        let e = this._clicks.indexOf(r);
                        e > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(e, 1))
                    }
                    this._clicks.length && this._scheduleCheckClicks()
                }
                _generateBreadcrumbs(e) {
                    let t = this._replay,
                        r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
                        n = e.mutationAfter && e.mutationAfter <= this._threshold,
                        {
                            clickCount: s,
                            clickBreadcrumb: i
                        } = e;
                    if (!r && !n) {
                        let r = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                            n = r < 1e3 * this._timeout ? "mutation" : "timeout",
                            o = {
                                type: "default",
                                message: i.message,
                                timestamp: i.timestamp,
                                category: "ui.slowClickDetected",
                                data: { ...i.data,
                                    url: j.location.href,
                                    route: t.getCurrentRoute(),
                                    timeAfterClickMs: r,
                                    endReason: n,
                                    clickCount: s || 1
                                }
                            };
                        this._addBreadcrumbEvent(t, o);
                        return
                    }
                    if (s > 1) {
                        let e = {
                            type: "default",
                            message: i.message,
                            timestamp: i.timestamp,
                            category: "ui.multiClick",
                            data: { ...i.data,
                                url: j.location.href,
                                route: t.getCurrentRoute(),
                                clickCount: s,
                                metric: !0
                            }
                        };
                        this._addBreadcrumbEvent(t, e)
                    }
                }
                _scheduleCheckClicks() {
                    this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
                }
            }
            let tw = ["A", "BUTTON", "INPUT"];

            function tb() {
                return Date.now() / 1e3
            }

            function tE(e) {
                return {
                    timestamp: Date.now() / 1e3,
                    type: "default",
                    ...e
                }
            }(m = y || (y = {}))[m.Document = 0] = "Document", m[m.DocumentType = 1] = "DocumentType", m[m.Element = 2] = "Element", m[m.Text = 3] = "Text", m[m.CDATA = 4] = "CDATA", m[m.Comment = 5] = "Comment";
            let tk = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]),
                tI = e => t => {
                    if (!e.isEnabled()) return;
                    let r = function(e) {
                        let {
                            target: t,
                            message: r
                        } = function(e) {
                            let t;
                            let r = "click" === e.name,
                                n = null;
                            try {
                                n = r ? t_(e.event) : tS(e.event), t = (0, T.Rt)(n, {
                                    maxStringLength: 200
                                }) || "<unknown>"
                            } catch (e) {
                                t = "<unknown>"
                            }
                            return {
                                target: n,
                                message: t
                            }
                        }(e);
                        return tE({
                            category: `ui.${e.name}`,
                            ...tM(t, r)
                        })
                    }(t);
                    if (!r) return;
                    let n = "click" === t.name,
                        s = n ? t.event : void 0;
                    n && e.clickDetector && s && s.target && !s.altKey && !s.metaKey && !s.ctrlKey && !s.shiftKey && function(e, t, r) {
                        e.handleClick(t, r)
                    }(e.clickDetector, r, t_(t.event)), ty(e, r)
                };

            function tM(e, t) {
                let r = tp.mirror.getId(e),
                    n = r && tp.mirror.getNode(r),
                    s = n && tp.mirror.getMeta(n),
                    i = s && s.type === y.Element ? s : null;
                return {
                    message: t,
                    data: i ? {
                        nodeId: r,
                        node: {
                            id: r,
                            tagName: i.tagName,
                            textContent: Array.from(i.childNodes).map(e => e.type === y.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                            attributes: function(e) {
                                let t = {};
                                for (let r in e)
                                    if (tk.has(r)) {
                                        let n = r;
                                        ("data-testid" === r || "data-test-id" === r) && (n = "testId"), t[n] = e[r]
                                    }
                                return t
                            }(i.attributes)
                        }
                    } : {}
                }
            }
            let tC = {
                resource: function(e) {
                    let {
                        entryType: t,
                        initiatorType: r,
                        name: n,
                        responseEnd: s,
                        startTime: i,
                        decodedBodySize: o,
                        encodedBodySize: a,
                        responseStatus: l,
                        transferSize: c
                    } = e;
                    return ["fetch", "xmlhttprequest"].includes(r) ? null : {
                        type: `${t}.${r}`,
                        start: tT(i),
                        end: tT(s),
                        name: n,
                        data: {
                            size: c,
                            statusCode: l,
                            decodedBodySize: o,
                            encodedBodySize: a
                        }
                    }
                },
                paint: function(e) {
                    let {
                        duration: t,
                        entryType: r,
                        name: n,
                        startTime: s
                    } = e, i = tT(s);
                    return {
                        type: r,
                        name: n,
                        start: i,
                        end: i + t,
                        data: void 0
                    }
                },
                navigation: function(e) {
                    let {
                        entryType: t,
                        name: r,
                        decodedBodySize: n,
                        duration: s,
                        domComplete: i,
                        encodedBodySize: o,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: l,
                        domInteractive: c,
                        loadEventStart: u,
                        loadEventEnd: d,
                        redirectCount: h,
                        startTime: p,
                        transferSize: m,
                        type: f
                    } = e;
                    return 0 === s ? null : {
                        type: `${t}.${f}`,
                        start: tT(p),
                        end: tT(i),
                        name: r,
                        data: {
                            size: m,
                            decodedBodySize: n,
                            encodedBodySize: o,
                            duration: s,
                            domInteractive: c,
                            domContentLoadedEventStart: a,
                            domContentLoadedEventEnd: l,
                            loadEventStart: u,
                            loadEventEnd: d,
                            domComplete: i,
                            redirectCount: h
                        }
                    }
                }
            };

            function tR(e) {
                return tC[e.entryType] ? tC[e.entryType](e) : null
            }

            function tT(e) {
                return ((x.Z1 || j.performance.timeOrigin) + e) / 1e3
            }
            class tx extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of 20000000.")
                }
            }
            class tA {
                constructor() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1
                }
                get hasEvents() {
                    return this.events.length > 0
                }
                get type() {
                    return "sync"
                }
                destroy() {
                    this.events = []
                }
                async addEvent(e) {
                    let t = JSON.stringify(e).length;
                    if (this._totalSize += t, this._totalSize > 2e7) throw new tx;
                    this.events.push(e)
                }
                finish() {
                    return new Promise(e => {
                        let t = this.events;
                        this.clear(), e(JSON.stringify(t))
                    })
                }
                clear() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1
                }
                getEarliestTimestamp() {
                    let e = this.events.map(e => e.timestamp).sort()[0];
                    return e ? tm(e) : null
                }
            }
            class tD {
                constructor(e) {
                    this._worker = e, this._id = 0
                }
                ensureReady() {
                    return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
                        this._worker.addEventListener("message", ({
                            data: r
                        }) => {
                            r.success ? e() : t()
                        }, {
                            once: !0
                        }), this._worker.addEventListener("error", e => {
                            t(e)
                        }, {
                            once: !0
                        })
                    })), this._ensureReadyPromise
                }
                destroy() {
                    this._worker.terminate()
                }
                postMessage(e, t) {
                    let r = this._getAndIncrementId();
                    return new Promise((n, s) => {
                        let i = ({
                            data: t
                        }) => {
                            if (t.method === e && t.id === r) {
                                if (this._worker.removeEventListener("message", i), !t.success) {
                                    s(Error("Error in compression worker"));
                                    return
                                }
                                n(t.response)
                            }
                        };
                        this._worker.addEventListener("message", i), this._worker.postMessage({
                            id: r,
                            method: e,
                            arg: t
                        })
                    })
                }
                _getAndIncrementId() {
                    return this._id++
                }
            }
            class tO {
                constructor(e) {
                    this._worker = new tD(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
                }
                get hasEvents() {
                    return !!this._earliestTimestamp
                }
                get type() {
                    return "worker"
                }
                ensureReady() {
                    return this._worker.ensureReady()
                }
                destroy() {
                    this._worker.destroy()
                }
                addEvent(e) {
                    let t = tm(e.timestamp);
                    (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                    let r = JSON.stringify(e);
                    return (this._totalSize += r.length, this._totalSize > 2e7) ? Promise.reject(new tx) : this._sendEventToWorker(r)
                }
                finish() {
                    return this._finishRequest()
                }
                clear() {
                    this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {})
                }
                getEarliestTimestamp() {
                    return this._earliestTimestamp
                }
                _sendEventToWorker(e) {
                    return this._worker.postMessage("addEvent", e)
                }
                async _finishRequest() {
                    let e = await this._worker.postMessage("finish");
                    return this._earliestTimestamp = null, this._totalSize = 0, e
                }
            }
            class tN {
                constructor(e) {
                    this._fallback = new tA, this._compression = new tO(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
                get type() {
                    return this._used.type
                }
                get hasEvents() {
                    return this._used.hasEvents
                }
                get hasCheckout() {
                    return this._used.hasCheckout
                }
                set hasCheckout(e) {
                    this._used.hasCheckout = e
                }
                destroy() {
                    this._fallback.destroy(), this._compression.destroy()
                }
                clear() {
                    return this._used.clear()
                }
                getEarliestTimestamp() {
                    return this._used.getEarliestTimestamp()
                }
                addEvent(e) {
                    return this._used.addEvent(e)
                }
                async finish() {
                    return await this.ensureWorkerIsLoaded(), this._used.finish()
                }
                ensureWorkerIsLoaded() {
                    return this._ensureWorkerIsLoadedPromise
                }
                async _ensureWorkerIsLoaded() {
                    try {
                        await this._compression.ensureReady()
                    } catch (e) {
                        return
                    }
                    await this._switchToCompressionWorker()
                }
                async _switchToCompressionWorker() {
                    let {
                        events: e,
                        hasCheckout: t
                    } = this._fallback, r = [];
                    for (let t of e) r.push(this._compression.addEvent(t));
                    this._compression.hasCheckout = t, this._used = this._compression;
                    try {
                        await Promise.all(r)
                    } catch (e) {}
                }
            }

            function tL() {
                try {
                    return "sessionStorage" in j && !!j.sessionStorage
                } catch (e) {
                    return !1
                }
            }

            function tP(e) {
                return void 0 !== e && Math.random() < e
            }

            function tF(e) {
                let t = Date.now(),
                    r = e.id || (0, D.DM)(),
                    n = e.started || t,
                    s = e.lastActivity || t;
                return {
                    id: r,
                    started: n,
                    lastActivity: s,
                    segmentId: e.segmentId || 0,
                    sampled: e.sampled,
                    previousSessionId: e.previousSessionId
                }
            }

            function tB(e) {
                if (tL()) try {
                    j.sessionStorage.setItem(H, JSON.stringify(e))
                } catch (e) {}
            }

            function tU({
                sessionSampleRate: e,
                allowBuffering: t,
                stickySession: r = !1
            }, {
                previousSessionId: n
            } = {}) {
                let s = tF({
                    sampled: tP(e) ? "session" : !!t && "buffer",
                    previousSessionId: n
                });
                return r && tB(s), s
            }

            function tz(e, t, r = +new Date) {
                return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= r
            }

            function tW(e, {
                maxReplayDuration: t,
                sessionIdleExpire: r,
                targetTime: n = Date.now()
            }) {
                return tz(e.started, t, n) || tz(e.lastActivity, r, n)
            }

            function tj(e, {
                sessionIdleExpire: t,
                maxReplayDuration: r
            }) {
                return !!tW(e, {
                    sessionIdleExpire: t,
                    maxReplayDuration: r
                }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
            }

            function tH({
                traceInternals: e,
                sessionIdleExpire: t,
                maxReplayDuration: r,
                previousSessionId: n
            }, s) {
                let i = s.stickySession && function(e) {
                    if (!tL()) return null;
                    try {
                        let e = j.sessionStorage.getItem(H);
                        if (!e) return null;
                        let t = JSON.parse(e);
                        return tF(t)
                    } catch (e) {
                        return null
                    }
                }(0);
                return i ? tj(i, {
                    sessionIdleExpire: t,
                    maxReplayDuration: r
                }) ? tU(s, {
                    previousSessionId: i.id
                }) : i : tU(s, {
                    previousSessionId: n
                })
            }

            function t$(e, t, r) {
                return !!tK(e, t) && (tq(e, t, r), !0)
            }
            async function tq(e, t, r) {
                if (!e.eventBuffer) return null;
                try {
                    r && "buffer" === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0);
                    let n = e.getOptions(),
                        s = function(e, t) {
                            try {
                                if ("function" == typeof t && e.type === ej.Custom) return t(e)
                            } catch (e) {
                                return null
                            }
                            return e
                        }(t, n.beforeAddRecordingEvent);
                    if (!s) return;
                    return await e.eventBuffer.addEvent(s)
                } catch (r) {
                    await e.stop({
                        reason: r && r instanceof tx ? "addEventSizeExceeded" : "addEvent"
                    });
                    let t = (0, S.s3)();
                    t && t.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function tK(e, t) {
                if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
                let r = tm(t.timestamp);
                return !(r + e.timeouts.sessionIdlePause < Date.now()) && (!(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (e.getOptions()._experiments.traceInternals, !1))
            }

            function tV(e) {
                return "transaction" === e.type
            }

            function tJ(e) {
                return "feedback" === e.type
            }

            function tY(e) {
                let t = function() {
                    let e = (0, S.s3)();
                    if (!e) return !1;
                    let t = e.getTransport();
                    return !!t && (t.send.__sentry__baseTransport__ || !1)
                }();
                return (r, n) => {
                    if (!e.isEnabled() || r.type && !tV(r)) return;
                    let s = n && n.statusCode;
                    if (!t || s && !(s < 200) && !(s >= 300)) {
                        if (tV(r)) {
                            ! function(e, t) {
                                let r = e.getContext();
                                t.contexts && t.contexts.trace && t.contexts.trace.trace_id && r.traceIds.size < 100 && r.traceIds.add(t.contexts.trace.trace_id)
                            }(e, r);
                            return
                        }! function(e, t) {
                            let r = e.getContext();
                            if (t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                            let {
                                beforeErrorSampling: n
                            } = e.getOptions();
                            ("function" != typeof n || n(t)) && setTimeout(() => {
                                e.sendBufferedReplayOrFlush()
                            })
                        }(e, r)
                    }
                }
            }

            function tG(e, t) {
                return t.map(({
                    type: t,
                    start: r,
                    end: n,
                    name: s,
                    data: i
                }) => {
                    let o = e.throttledAddEvent({
                        type: ej.Custom,
                        timestamp: r,
                        data: {
                            tag: "performanceSpan",
                            payload: {
                                op: t,
                                description: s,
                                startTimestamp: r,
                                endTimestamp: n,
                                data: i
                            }
                        }
                    });
                    return "string" == typeof o ? Promise.resolve(null) : o
                })
            }

            function tX(e, t) {
                var r;
                e.isEnabled() && null !== t && (r = t.name, (0, v.W)(r, (0, S.s3)()) || e.addUpdate(() => (tG(e, [t]), !0)))
            }

            function tQ(e, t) {
                if (e) try {
                    if ("string" == typeof e) return t.encode(e).length;
                    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
                    if (e instanceof FormData) {
                        let r = t6(e);
                        return t.encode(r).length
                    }
                    if (e instanceof Blob) return e.size;
                    if (e instanceof ArrayBuffer) return e.byteLength
                } catch (e) {}
            }

            function tZ(e) {
                if (!e) return;
                let t = parseInt(e, 10);
                return isNaN(t) ? void 0 : t
            }

            function t0(e) {
                try {
                    if ("string" == typeof e) return [e];
                    if (e instanceof URLSearchParams) return [e.toString()];
                    if (e instanceof FormData) return [t6(e)];
                    if (!e) return [void 0]
                } catch (e) {
                    return [void 0, "BODY_PARSE_ERROR"]
                }
                return [void 0, "UNPARSEABLE_BODY_TYPE"]
            }

            function t1(e, t) {
                if (!e) return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
                let r = { ...e._meta
                    },
                    n = r.warnings || [];
                return r.warnings = [...n, t], e._meta = r, e
            }

            function t2(e, t) {
                if (!t) return null;
                let {
                    startTimestamp: r,
                    endTimestamp: n,
                    url: s,
                    method: i,
                    statusCode: o,
                    request: a,
                    response: l
                } = t;
                return {
                    type: e,
                    start: r / 1e3,
                    end: n / 1e3,
                    name: s,
                    data: (0, R.Jr)({
                        method: i,
                        statusCode: o,
                        request: a,
                        response: l
                    })
                }
            }

            function t3(e) {
                return {
                    headers: {},
                    size: e,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function t5(e, t, r) {
                if (!t && 0 === Object.keys(e).length) return;
                if (!t) return {
                    headers: e
                };
                if (!r) return {
                    headers: e,
                    size: t
                };
                let n = {
                        headers: e,
                        size: t
                    },
                    {
                        body: s,
                        warnings: i
                    } = function(e) {
                        if (!e || "string" != typeof e) return {
                            body: e
                        };
                        let t = e.length > 15e4,
                            r = function(e) {
                                let t = e[0],
                                    r = e[e.length - 1];
                                return "[" === t && "]" === r || "{" === t && "}" === r
                            }(e);
                        if (t) {
                            let t = e.slice(0, 15e4);
                            return r ? {
                                body: t,
                                warnings: ["MAYBE_JSON_TRUNCATED"]
                            } : {
                                body: `${t}…`,
                                warnings: ["TEXT_TRUNCATED"]
                            }
                        }
                        if (r) try {
                            return {
                                body: JSON.parse(e)
                            }
                        } catch (e) {}
                        return {
                            body: e
                        }
                    }(r);
                return n.body = s, i && i.length > 0 && (n._meta = {
                    warnings: i
                }), n
            }

            function t8(e, t) {
                return Object.keys(e).reduce((r, n) => {
                    let s = n.toLowerCase();
                    return t.includes(s) && e[n] && (r[s] = e[n]), r
                }, {})
            }

            function t6(e) {
                return new URLSearchParams(e).toString()
            }

            function t4(e, t) {
                let r = function(e, t = j.document.baseURI) {
                    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(j.location.origin)) return e;
                    let r = new URL(e, t);
                    if (r.origin !== new URL(t).origin) return e;
                    let n = r.href;
                    return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n
                }(e);
                return (0, N.U0)(r, t)
            }
            async function t7(e, t, r) {
                try {
                    let n = await t9(e, t, r),
                        s = t2("resource.fetch", n);
                    tX(r.replay, s)
                } catch (e) {}
            }
            async function t9(e, t, r) {
                let n = Date.now(),
                    {
                        startTimestamp: s = n,
                        endTimestamp: i = n
                    } = t,
                    {
                        url: o,
                        method: a,
                        status_code: l = 0,
                        request_body_size: c,
                        response_body_size: u
                    } = e.data,
                    d = t4(o, r.networkDetailAllowUrls) && !t4(o, r.networkDetailDenyUrls);
                return {
                    startTimestamp: s,
                    endTimestamp: i,
                    url: o,
                    method: a,
                    statusCode: l,
                    request: d ? function({
                        networkCaptureBodies: e,
                        networkRequestHeaders: t
                    }, r, n) {
                        let s = r ? 1 === r.length && "string" != typeof r[0] ? rs(r[0], t) : 2 === r.length ? rs(r[1], t) : {} : {};
                        if (!e) return t5(s, n, void 0);
                        let [i, o] = t0(rr(r)), a = t5(s, n, i);
                        return o ? t1(a, o) : a
                    }(r, t.input, c) : t3(c),
                    response: await re(d, r, t.response, u)
                }
            }
            async function re(e, {
                networkCaptureBodies: t,
                textEncoder: r,
                networkResponseHeaders: n
            }, s, i) {
                if (!e && void 0 !== i) return t3(i);
                let o = s ? rn(s.headers, n) : {};
                if (!s || !t && void 0 !== i) return t5(o, i, void 0);
                let [a, l] = await rt(s), c = function(e, {
                    networkCaptureBodies: t,
                    textEncoder: r,
                    responseBodySize: n,
                    captureDetails: s,
                    headers: i
                }) {
                    try {
                        let o = e && e.length && void 0 === n ? tQ(e, r) : n;
                        if (!s) return t3(o);
                        if (t) return t5(i, o, e);
                        return t5(i, o, void 0)
                    } catch (e) {
                        return t5(i, n, void 0)
                    }
                }(a, {
                    networkCaptureBodies: t,
                    textEncoder: r,
                    responseBodySize: i,
                    captureDetails: e,
                    headers: o
                });
                return l ? t1(c, l) : c
            }
            async function rt(e) {
                let t = function(e) {
                    try {
                        return e.clone()
                    } catch (e) {}
                }(e);
                if (!t) return [void 0, "BODY_PARSE_ERROR"];
                try {
                    return [await new Promise((e, r) => {
                        let n = setTimeout(() => r(Error("Timeout while trying to read response body")), 500);
                        ri(t).then(t => e(t), e => r(e)).finally(() => clearTimeout(n))
                    })]
                } catch (e) {
                    return [void 0, "BODY_PARSE_ERROR"]
                }
            }

            function rr(e = []) {
                if (2 === e.length && "object" == typeof e[1]) return e[1].body
            }

            function rn(e, t) {
                let r = {};
                return t.forEach(t => {
                    e.get(t) && (r[t] = e.get(t))
                }), r
            }

            function rs(e, t) {
                if (!e) return {};
                let r = e.headers;
                return r ? r instanceof Headers ? rn(r, t) : Array.isArray(r) ? {} : t8(r, t) : {}
            }
            async function ri(e) {
                return await e.text()
            }
            async function ro(e, t, r) {
                try {
                    let n = function(e, t, r) {
                            let n = Date.now(),
                                {
                                    startTimestamp: s = n,
                                    endTimestamp: i = n,
                                    input: o,
                                    xhr: a
                                } = t,
                                {
                                    url: l,
                                    method: c,
                                    status_code: u = 0,
                                    request_body_size: d,
                                    response_body_size: h
                                } = e.data;
                            if (!l) return null;
                            if (!a || !t4(l, r.networkDetailAllowUrls) || t4(l, r.networkDetailDenyUrls)) {
                                let e = t3(d);
                                return {
                                    startTimestamp: s,
                                    endTimestamp: i,
                                    url: l,
                                    method: c,
                                    statusCode: u,
                                    request: e,
                                    response: t3(h)
                                }
                            }
                            let p = a[O.xU],
                                m = p ? t8(p.request_headers, r.networkRequestHeaders) : {},
                                f = t8(function(e) {
                                    let t = e.getAllResponseHeaders();
                                    return t ? t.split("\r\n").reduce((e, t) => {
                                        let [r, n] = t.split(": ");
                                        return e[r.toLowerCase()] = n, e
                                    }, {}) : {}
                                }(a), r.networkResponseHeaders),
                                [y, g] = r.networkCaptureBodies ? t0(o) : [void 0],
                                [_, S] = r.networkCaptureBodies ? function(e) {
                                    let t = [];
                                    try {
                                        return [e.responseText]
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    try {
                                        return function(e, t) {
                                            try {
                                                if ("string" == typeof e) return [e];
                                                if (e instanceof Document) return [e.body.outerHTML];
                                                if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                                                if (!e) return [void 0]
                                            } catch (e) {
                                                return [void 0, "BODY_PARSE_ERROR"]
                                            }
                                            return [void 0, "UNPARSEABLE_BODY_TYPE"]
                                        }(e.response, e.responseType)
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    return [void 0]
                                }(a) : [void 0],
                                v = t5(m, d, y),
                                w = t5(f, h, _);
                            return {
                                startTimestamp: s,
                                endTimestamp: i,
                                url: l,
                                method: c,
                                statusCode: u,
                                request: g ? t1(v, g) : v,
                                response: S ? t1(w, S) : w
                            }
                        }(e, t, r),
                        s = t2("resource.xhr", n);
                    tX(r.replay, s)
                } catch (e) {}
            }
            let ra = null,
                rl = e => t => {
                    if (!e.isEnabled()) return;
                    let r = function(e) {
                        let t = e.getLastBreadcrumb && e.getLastBreadcrumb();
                        return ra !== t && t ? (ra = t, !t.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.")) ? null : "console" === t.category ? function(e) {
                            let t = e.data && e.data.arguments;
                            if (!Array.isArray(t) || 0 === t.length) return tE(e);
                            let r = !1,
                                n = t.map(e => {
                                    if (!e) return e;
                                    if ("string" == typeof e) return e.length > 5e3 ? (r = !0, `${e.slice(0,5e3)}…`) : e;
                                    if ("object" == typeof e) try {
                                        let t = (0, C.Fv)(e, 7);
                                        if (JSON.stringify(t).length > 5e3) return r = !0, `${JSON.stringify(t,null,2).slice(0,5e3)}…`;
                                        return t
                                    } catch (e) {}
                                    return e
                                });
                            return tE({ ...e,
                                data: { ...e.data,
                                    arguments: n,
                                    ...r ? {
                                        _meta: {
                                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                                        }
                                    } : {}
                                }
                            })
                        }(t) : tE(t) : null
                    }(t);
                    r && ty(e, r)
                };
            async function rc(e) {
                try {
                    return Promise.all(tG(e, [function(e) {
                        let {
                            jsHeapSizeLimit: t,
                            totalJSHeapSize: r,
                            usedJSHeapSize: n
                        } = e, s = Date.now() / 1e3;
                        return {
                            type: "memory",
                            name: "memory",
                            start: s,
                            end: s,
                            data: {
                                memory: {
                                    jsHeapSizeLimit: t,
                                    totalJSHeapSize: r,
                                    usedJSHeapSize: n
                                }
                            }
                        }
                    }(j.performance.memory)]))
                } catch (e) {
                    return []
                }
            }
            async function ru({
                client: e,
                scope: t,
                replayId: r,
                event: n
            }) {
                let s = {
                    event_id: r,
                    integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                };
                e.emit && e.emit("preprocessEvent", n, s);
                let i = await (0, b.R)(e.getOptions(), n, s, t, e, (0, E.aF)());
                if (!i) return null;
                i.platform = i.platform || "javascript";
                let o = e.getSdkMetadata && e.getSdkMetadata(),
                    {
                        name: a,
                        version: l
                    } = o && o.sdk || {};
                return i.sdk = { ...i.sdk,
                    name: a || "sentry.javascript.unknown",
                    version: l || "0.0.0"
                }, i
            }
            async function rd({
                recordingData: e,
                replayId: t,
                segmentId: r,
                eventContext: n,
                timestamp: s,
                session: i
            }) {
                var o;
                let a;
                let l = function({
                        recordingData: e,
                        headers: t
                    }) {
                        let r;
                        let n = `${JSON.stringify(t)}
`;
                        if ("string" == typeof e) r = `${n}${e}`;
                        else {
                            let t = new TextEncoder().encode(n);
                            (r = new Uint8Array(t.length + e.length)).set(t), r.set(e, t.length)
                        }
                        return r
                    }({
                        recordingData: e,
                        headers: {
                            segment_id: r
                        }
                    }),
                    {
                        urls: c,
                        errorIds: u,
                        traceIds: d,
                        initialTimestamp: h
                    } = n,
                    p = (0, S.s3)(),
                    m = (0, S.nZ)(),
                    f = p && p.getTransport(),
                    y = p && p.getDsn();
                if (!p || !f || !y || !i.sampled) return;
                let g = {
                        type: "replay_event",
                        replay_start_timestamp: h / 1e3,
                        timestamp: s / 1e3,
                        error_ids: u,
                        trace_ids: d,
                        urls: c,
                        replay_id: t,
                        segment_id: r,
                        replay_type: i.sampled
                    },
                    _ = await ru({
                        scope: m,
                        client: p,
                        replayId: t,
                        event: g
                    });
                if (!_) {
                    p.recordDroppedEvent("event_processor", "replay", g);
                    return
                }
                delete _.sdkProcessingMetadata;
                let v = (o = p.getOptions().tunnel, (0, B.Jd)((0, B.Cd)(_, (0, B.HY)(_), o, y), [
                    [{
                        type: "replay_event"
                    }, _],
                    [{
                        type: "replay_recording",
                        length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
                    }, l]
                ]));
                try {
                    a = await f.send(v)
                } catch (t) {
                    let e = Error($);
                    try {
                        e.cause = t
                    } catch (e) {}
                    throw e
                }
                if (!a) return a;
                if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new rh(a.statusCode);
                let w = (0, U.WG)({}, a);
                if ((0, U.Q)(w, "replay")) throw new rp(w);
                return a
            }
            class rh extends Error {
                constructor(e) {
                    super(`Transport returned status code ${e}`)
                }
            }
            class rp extends Error {
                constructor(e) {
                    super("Rate limit hit"), this.rateLimits = e
                }
            }
            async function rm(e, t = {
                count: 0,
                interval: 5e3
            }) {
                let {
                    recordingData: r,
                    options: n
                } = e;
                if (r.length) try {
                    return await rd(e), !0
                } catch (r) {
                    if (r instanceof rh || r instanceof rp) throw r;
                    if ((0, S.v)("Replays", {
                            _retryCount: t.count
                        }), t.count >= 3) {
                        let e = Error(`${$} - max retries exceeded`);
                        try {
                            e.cause = r
                        } catch (e) {}
                        throw e
                    }
                    return t.interval *= ++t.count, new Promise((r, n) => {
                        setTimeout(async () => {
                            try {
                                await rm(e, t), r(!0)
                            } catch (e) {
                                n(e)
                            }
                        }, t.interval)
                    })
                }
            }
            let rf = "__THROTTLED";
            class ry {
                constructor({
                    options: e,
                    recordingOptions: t
                }) {
                    ry.prototype.__init.call(this), ry.prototype.__init2.call(this), ry.prototype.__init3.call(this), ry.prototype.__init4.call(this), ry.prototype.__init5.call(this), ry.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                        sessionIdlePause: 3e5,
                        sessionIdleExpire: 9e5
                    }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        initialTimestamp: Date.now(),
                        initialUrl: ""
                    }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, r) {
                        let n, s, i;
                        let o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;

                        function a() {
                            return l(), n = e()
                        }

                        function l() {
                            void 0 !== s && clearTimeout(s), void 0 !== i && clearTimeout(i), s = i = void 0
                        }

                        function c() {
                            return s && clearTimeout(s), s = setTimeout(a, t), o && void 0 === i && (i = setTimeout(a, o)), n
                        }
                        return c.cancel = l, c.flush = function() {
                            return void 0 !== s || void 0 !== i ? a() : n
                        }, c
                    }(() => this._flush(), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    }), this._throttledAddEvent = function(e, t, r) {
                        let n = new Map,
                            s = e => {
                                let t = e - 5;
                                n.forEach((e, r) => {
                                    r < t && n.delete(r)
                                })
                            },
                            i = () => [...n.values()].reduce((e, t) => e + t, 0),
                            o = !1;
                        return (...t) => {
                            let r = Math.floor(Date.now() / 1e3);
                            if (s(r), i() >= 300) {
                                let e = o;
                                return o = !0, e ? "__SKIPPED" : rf
                            }
                            o = !1;
                            let a = n.get(r) || 0;
                            return n.set(r, a + 1), e(...t)
                        }
                    }((e, t) => tK(this, e) ? tq(this, e, t) : Promise.resolve(null), 0, 0);
                    let {
                        slowClickTimeout: r,
                        slowClickIgnoreSelectors: n
                    } = this.getOptions(), s = r ? {
                        threshold: Math.min(3e3, r),
                        timeout: r,
                        scrollTimeout: 300,
                        ignoreSelector: n ? n.join(",") : ""
                    } : void 0;
                    s && (this.clickDetector = new tv(this, s))
                }
                getContext() {
                    return this._context
                }
                isEnabled() {
                    return this._isEnabled
                }
                isPaused() {
                    return this._isPaused
                }
                isRecordingCanvas() {
                    return !!this._canvas
                }
                getOptions() {
                    return this._options
                }
                initializeSampling(e) {
                    let {
                        errorSampleRate: t,
                        sessionSampleRate: r
                    } = this._options;
                    if (!(t <= 0) || !(r <= 0)) {
                        if (this._initializeSessionForSampling(e), !this.session) {
                            this._handleException(Error("Unable to initialize and create session"));
                            return
                        }!1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", this.recordingMode, this._options._experiments.traceInternals, this._initializeRecording())
                    }
                }
                start() {
                    if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
                    if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                    this._options._experiments.traceInternals;
                    let e = tH({
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        traceInternals: this._options._experiments.traceInternals
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 1,
                        allowBuffering: !1
                    });
                    this.session = e, this._initializeRecording()
                }
                startBuffering() {
                    if (this._isEnabled) throw Error("Replay recording is already in progress");
                    this._options._experiments.traceInternals;
                    let e = tH({
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration,
                        traceInternals: this._options._experiments.traceInternals
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 0,
                        allowBuffering: !0
                    });
                    this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                }
                startRecording() {
                    try {
                        var e;
                        let t;
                        let r = this._canvas;
                        this._stopRecording = tp({ ...this._recordingOptions,
                            ..."buffer" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            },
                            emit: (e = this, t = !1, (r, n) => {
                                if (!e.checkAndHandleExpiredSession()) return;
                                let s = n || !t;
                                t = !0, e.clickDetector && function(e, t) {
                                    try {
                                        if (3 !== t.type) return;
                                        let {
                                            source: r
                                        } = t.data;
                                        if (r === eH.Mutation && e.registerMutation(t.timestamp), r === eH.Scroll && e.registerScroll(t.timestamp), t.data.source === eH.MouseInteraction) {
                                            let {
                                                type: r,
                                                id: n
                                            } = t.data, s = tp.mirror.getNode(n);
                                            s instanceof HTMLElement && r === e$.Click && e.registerClick(s)
                                        }
                                    } catch (e) {}
                                }(e.clickDetector, r), e.addUpdate(() => {
                                    if ("buffer" === e.recordingMode && s && e.setInitialState(), !t$(e, r, s)) return !0;
                                    if (!s) return !1;
                                    if (s && e.session && 0 === e.session.segmentId && t$(e, function(e) {
                                            let t = e.getOptions();
                                            return {
                                                type: ej.Custom,
                                                timestamp: Date.now(),
                                                data: {
                                                    tag: "options",
                                                    payload: {
                                                        shouldRecordCanvas: e.isRecordingCanvas(),
                                                        sessionSampleRate: t.sessionSampleRate,
                                                        errorSampleRate: t.errorSampleRate,
                                                        useCompressionOption: t.useCompression,
                                                        blockAllMedia: t.blockAllMedia,
                                                        maskAllText: t.maskAllText,
                                                        maskAllInputs: t.maskAllInputs,
                                                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                        networkCaptureBodies: t.networkCaptureBodies,
                                                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                    }
                                                }
                                            }
                                        }(e), !1), e.session && e.session.previousSessionId) return !0;
                                    if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                                        let t = e.eventBuffer.getEarliestTimestamp();
                                        t && (e.getOptions()._experiments.traceInternals, e.session.started = t, e.getOptions().stickySession && tB(e.session))
                                    }
                                    return "session" === e.recordingMode && e.flush(), !0
                                })
                            }),
                            onMutation: this._onMutationHandler,
                            ...r ? {
                                recordCanvas: r.recordCanvas,
                                getCanvasManager: r.getCanvasManager,
                                sampling: r.sampling,
                                dataURLOptions: r.dataURLOptions
                            } : {}
                        })
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                stopRecording() {
                    try {
                        return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                    } catch (e) {
                        return this._handleException(e), !1
                    }
                }
                async stop({
                    forceFlush: e = !1,
                    reason: t
                } = {}) {
                    if (this._isEnabled) {
                        this._isEnabled = !1;
                        try {
                            this._options._experiments.traceInternals, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                                    force: !0
                                }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null,
                                function() {
                                    if (tL()) try {
                                        j.sessionStorage.removeItem(H)
                                    } catch (e) {}
                                }(), this.session = void 0
                        } catch (e) {
                            this._handleException(e)
                        }
                    }
                }
                pause() {
                    this._isPaused || (this._isPaused = !0, this.stopRecording(), this._options._experiments.traceInternals)
                }
                resume() {
                    this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), this._options._experiments.traceInternals)
                }
                async sendBufferedReplayOrFlush({
                    continueRecording: e = !0
                } = {}) {
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    let t = Date.now();
                    this._options._experiments.traceInternals, await this.flushImmediate();
                    let r = this.stopRecording();
                    e && r && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
                }
                addUpdate(e) {
                    let t = e();
                    "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
                }
                triggerUserActivity() {
                    if (this._updateUserActivity(), !this._stopRecording) {
                        if (!this._checkSession()) return;
                        this.resume();
                        return
                    }
                    this.checkAndHandleExpiredSession(), this._updateSessionActivity()
                }
                updateUserActivity() {
                    this._updateUserActivity(), this._updateSessionActivity()
                }
                conditionalFlush() {
                    return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                }
                flush() {
                    return this._debouncedFlush()
                }
                flushImmediate() {
                    return this._debouncedFlush(), this._debouncedFlush.flush()
                }
                cancelFlush() {
                    this._debouncedFlush.cancel()
                }
                getSessionId() {
                    return this.session && this.session.id
                }
                checkAndHandleExpiredSession() {
                    if (this._lastActivity && tz(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                        this.pause();
                        return
                    }
                    return !!this._checkSession()
                }
                setInitialState() {
                    let e = `${j.location.pathname}${j.location.hash}${j.location.search}`,
                        t = `${j.location.origin}${e}`;
                    this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
                }
                throttledAddEvent(e, t) {
                    let r = this._throttledAddEvent(e, t);
                    if (r === rf) {
                        let e = tE({
                            category: "replay.throttled"
                        });
                        this.addUpdate(() => !t$(this, {
                            type: 5,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e,
                                metric: !0
                            }
                        }))
                    }
                    return r
                }
                getCurrentRoute() {
                    let e = this.lastTransaction || (0, S.nZ)().getTransaction(),
                        t = (e && (0, k.XU)(e).data || {})[I.Zj];
                    if (e && t && ["route", "custom"].includes(t)) return (0, k.XU)(e).description
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                        useCompression: e,
                        workerUrl: t
                    }) {
                        if (e && window.Worker) {
                            let e = function(e) {
                                try {
                                    let t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                        let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                        return URL.createObjectURL(e)
                                    }());
                                    if (!t) return;
                                    let r = new Worker(t);
                                    return new tN(r)
                                } catch (e) {}
                            }(t);
                            if (e) return e
                        }
                        return new tA
                    }({
                        useCompression: this._options.useCompression,
                        workerUrl: this._options.workerUrl
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
                }
                _handleException(e) {}
                _initializeSessionForSampling(e) {
                    let t = this._options.errorSampleRate > 0,
                        r = tH({
                            sessionIdleExpire: this.timeouts.sessionIdleExpire,
                            maxReplayDuration: this._options.maxReplayDuration,
                            traceInternals: this._options._experiments.traceInternals,
                            previousSessionId: e
                        }, {
                            stickySession: this._options.stickySession,
                            sessionSampleRate: this._options.sessionSampleRate,
                            allowBuffering: t
                        });
                    this.session = r
                }
                _checkSession() {
                    if (!this.session) return !1;
                    let e = this.session;
                    return !tj(e, {
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration
                    }) || (this._refreshSession(e), !1)
                }
                async _refreshSession(e) {
                    this._isEnabled && (await this.stop({
                        reason: "refresh session"
                    }), this.initializeSampling(e.id))
                }
                _addListeners() {
                    try {
                        j.document.addEventListener("visibilitychange", this._handleVisibilityChange), j.addEventListener("blur", this._handleWindowBlur), j.addEventListener("focus", this._handleWindowFocus), j.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function(e) {
                            let t = (0, S.nZ)(),
                                r = (0, S.s3)();
                            t.addScopeListener(rl(e)), (0, P.O)(tI(e)), (0, F.a)(t => {
                                    if (!e.isEnabled()) return;
                                    let r = function(e) {
                                        let {
                                            from: t,
                                            to: r
                                        } = e, n = Date.now() / 1e3;
                                        return {
                                            type: "navigation.push",
                                            start: n,
                                            end: n,
                                            name: r,
                                            data: {
                                                previous: t
                                            }
                                        }
                                    }(t);
                                    null !== r && (e.getContext().urls.push(r.name), e.triggerUserActivity(), e.addUpdate(() => (tG(e, [r]), !1)))
                                }),
                                function(e) {
                                    let t = (0, S.s3)();
                                    try {
                                        let r = new TextEncoder,
                                            {
                                                networkDetailAllowUrls: n,
                                                networkDetailDenyUrls: s,
                                                networkCaptureBodies: i,
                                                networkRequestHeaders: o,
                                                networkResponseHeaders: a
                                            } = e.getOptions(),
                                            l = {
                                                replay: e,
                                                textEncoder: r,
                                                networkDetailAllowUrls: n,
                                                networkDetailDenyUrls: s,
                                                networkCaptureBodies: i,
                                                networkRequestHeaders: o,
                                                networkResponseHeaders: a
                                            };
                                        t && t.on ? t.on("beforeAddBreadcrumb", (e, t) => (function(e, t, r) {
                                            if (t.data) try {
                                                var n, s;
                                                "xhr" === t.category && (n = r) && n.xhr && (function(e, t, r) {
                                                    let {
                                                        xhr: n,
                                                        input: s
                                                    } = t;
                                                    if (!n) return;
                                                    let i = tQ(s, r.textEncoder),
                                                        o = n.getResponseHeader("content-length") ? tZ(n.getResponseHeader("content-length")) : function(e, t, r) {
                                                            try {
                                                                let n = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                                return tQ(n, r)
                                                            } catch (e) {
                                                                return
                                                            }
                                                        }(n.response, n.responseType, r.textEncoder);
                                                    void 0 !== i && (e.data.request_body_size = i), void 0 !== o && (e.data.response_body_size = o)
                                                }(t, r, e), ro(t, r, e)), "fetch" === t.category && (s = r) && s.response && (function(e, t, r) {
                                                    let {
                                                        input: n,
                                                        response: s
                                                    } = t, i = tQ(n ? rr(n) : void 0, r.textEncoder), o = s ? tZ(s.headers.get("content-length")) : void 0;
                                                    void 0 !== i && (e.data.request_body_size = i), void 0 !== o && (e.data.response_body_size = o)
                                                }(t, r, e), t7(t, r, e))
                                            } catch (e) {}
                                        })(l, e, t)) : ((0, L.U)(t => {
                                            e.isEnabled() && tX(e, function(e) {
                                                let {
                                                    startTimestamp: t,
                                                    endTimestamp: r,
                                                    fetchData: n,
                                                    response: s
                                                } = e;
                                                if (!r) return null;
                                                let {
                                                    method: i,
                                                    url: o
                                                } = n;
                                                return {
                                                    type: "resource.fetch",
                                                    start: t / 1e3,
                                                    end: r / 1e3,
                                                    name: o,
                                                    data: {
                                                        method: i,
                                                        statusCode: s ? s.status : void 0
                                                    }
                                                }
                                            }(t))
                                        }), (0, O.UK)(t => {
                                            e.isEnabled() && tX(e, function(e) {
                                                let {
                                                    startTimestamp: t,
                                                    endTimestamp: r,
                                                    xhr: n
                                                } = e, s = n[O.xU];
                                                if (!t || !r || !s) return null;
                                                let {
                                                    method: i,
                                                    url: o,
                                                    status_code: a
                                                } = s;
                                                return void 0 === o ? null : {
                                                    type: "resource.xhr",
                                                    name: o,
                                                    start: t / 1e3,
                                                    end: r / 1e3,
                                                    data: {
                                                        method: i,
                                                        statusCode: a
                                                    }
                                                }
                                            }(t))
                                        }))
                                    } catch (e) {}
                                }(e);
                            let n = function(e, t = !1) {
                                let r = t ? tY(e) : void 0;
                                return Object.assign((t, n) => e.isEnabled() ? "replay_event" === t.type ? (delete t.breadcrumbs, t) : (!t.type || tV(t) || tJ(t)) && e.checkAndHandleExpiredSession() ? tJ(t) ? (e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                                    type: ej.Custom,
                                    timestamp: 1e3 * t.timestamp,
                                    data: {
                                        tag: "breadcrumb",
                                        payload: {
                                            timestamp: t.timestamp,
                                            type: "default",
                                            category: "sentry.feedback",
                                            data: {
                                                feedbackId: t.event_id
                                            }
                                        }
                                    }
                                }), !1)), t) : !t.type && t.exception && t.exception.values && t.exception.values.length && n.originalException && n.originalException.__rrweb__ && !e.getOptions()._experiments.captureExceptions ? null : (("buffer" === e.recordingMode && t.message !== $ && t.exception && !t.type && tP(e.getOptions().errorSampleRate) || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                                    replayId: e.getSessionId()
                                }), r && r(t, {
                                    statusCode: 200
                                }), t) : t : t, {
                                    id: "Replay"
                                })
                            }(e, !(r && r.on));
                            r && r.addEventProcessor ? r.addEventProcessor(n) : (0, w.Q)(n), r && r.on && (r.on("beforeSendEvent", t => {
                                e.isEnabled() && !t.type && function(e, t) {
                                    let r = t.exception && t.exception.values && t.exception.values[0].value;
                                    "string" == typeof r && (r.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || r.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && ty(e, tE({
                                        category: "replay.hydrate-error"
                                    }))
                                }(e, t)
                            }), r.on("afterSendEvent", tY(e)), r.on("createDsc", t => {
                                let r = e.getSessionId();
                                r && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = r)
                            }), r.on("startTransaction", t => {
                                e.lastTransaction = t
                            }), r.on("finishTransaction", t => {
                                e.lastTransaction = t
                            }), r.on("beforeSendFeedback", (t, r) => {
                                let n = e.getSessionId();
                                r && r.includeReplay && e.isEnabled() && n && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = n)
                            }))
                        }(this), this._hasInitializedCoreListeners = !0)
                    } catch (e) {
                        this._handleException(e)
                    }
                    this._performanceCleanupCallback = function(e) {
                        function t(t) {
                            e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                        }

                        function r({
                            entries: e
                        }) {
                            e.forEach(t)
                        }
                        let n = [];
                        return ["navigation", "paint", "resource"].forEach(e => {
                            n.push((0, W._j)(e, r))
                        }), n.push((0, W.$A)(({
                            metric: t
                        }) => {
                            e.replayPerformanceEntries.push(function(e) {
                                let t = e.entries,
                                    r = t[t.length - 1],
                                    n = r ? r.element : void 0,
                                    s = e.value,
                                    i = tT(s);
                                return {
                                    type: "largest-contentful-paint",
                                    name: "largest-contentful-paint",
                                    start: i,
                                    end: i,
                                    data: {
                                        value: s,
                                        size: s,
                                        nodeId: n ? tp.mirror.getId(n) : void 0
                                    }
                                }
                            }(t))
                        })), () => {
                            n.forEach(e => e())
                        }
                    }(this)
                }
                _removeListeners() {
                    try {
                        j.document.removeEventListener("visibilitychange", this._handleVisibilityChange), j.removeEventListener("blur", this._handleWindowBlur), j.removeEventListener("focus", this._handleWindowFocus), j.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
                    } catch (e) {
                        this._handleException(e)
                    }
                }
                __init() {
                    this._handleVisibilityChange = () => {
                        "visible" === j.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }
                }
                __init2() {
                    this._handleWindowBlur = () => {
                        let e = tE({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(e)
                    }
                }
                __init3() {
                    this._handleWindowFocus = () => {
                        let e = tE({
                            category: "ui.focus"
                        });
                        this._doChangeToForegroundTasks(e)
                    }
                }
                __init4() {
                    this._handleKeyboardEvent = e => {
                        ! function(e, t) {
                            if (!e.isEnabled()) return;
                            e.updateUserActivity();
                            let r = function(e) {
                                var t;
                                let {
                                    metaKey: r,
                                    shiftKey: n,
                                    ctrlKey: s,
                                    altKey: i,
                                    key: o,
                                    target: a
                                } = e;
                                if (!a || "INPUT" === (t = a).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o) return null;
                                let l = r || s || i,
                                    c = 1 === o.length;
                                if (!l && c) return null;
                                let u = (0, T.Rt)(a, {
                                        maxStringLength: 200
                                    }) || "<unknown>",
                                    d = tM(a, u);
                                return tE({
                                    category: "ui.keyDown",
                                    message: u,
                                    data: { ...d.data,
                                        metaKey: r,
                                        shiftKey: n,
                                        ctrlKey: s,
                                        altKey: i,
                                        key: o
                                    }
                                })
                            }(t);
                            r && ty(e, r)
                        }(this, e)
                    }
                }
                _doChangeToBackgroundTasks(e) {
                    !this.session || tW(this.session, {
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire
                    }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush())
                }
                _doChangeToForegroundTasks(e) {
                    this.session && this.checkAndHandleExpiredSession() && e && this._createCustomBreadcrumb(e)
                }
                _updateUserActivity(e = Date.now()) {
                    this._lastActivity = e
                }
                _updateSessionActivity(e = Date.now()) {
                    this.session && (this.session.lastActivity = e, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(e) {
                    this.addUpdate(() => {
                        this.throttledAddEvent({
                            type: ej.Custom,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e
                            }
                        })
                    })
                }
                _addPerformanceEntries() {
                    let e = this.performanceEntries.map(tR).filter(Boolean).concat(this.replayPerformanceEntries);
                    return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(tG(this, e))
                }
                _clearContext() {
                    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                }
                _updateInitialTimestampFromEventBuffer() {
                    let {
                        session: e,
                        eventBuffer: t
                    } = this;
                    if (!e || !t || e.segmentId) return;
                    let r = t.getEarliestTimestamp();
                    r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r)
                }
                _popEventContext() {
                    let e = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds),
                        traceIds: Array.from(this._context.traceIds),
                        urls: this._context.urls
                    };
                    return this._clearContext(), e
                }
                async _runFlush() {
                    let e = this.getSessionId();
                    if (this.session && this.eventBuffer && e && (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents) && (await rc(this), this.eventBuffer && e === this.getSessionId())) try {
                        this._updateInitialTimestampFromEventBuffer();
                        let t = Date.now();
                        if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw Error("Session is too long, not sending replay");
                        let r = this._popEventContext(),
                            n = this.session.segmentId++;
                        this._maybeSaveSession();
                        let s = await this.eventBuffer.finish();
                        await rm({
                            replayId: e,
                            recordingData: s,
                            segmentId: n,
                            eventContext: r,
                            session: this.session,
                            options: this.getOptions(),
                            timestamp: t
                        })
                    } catch (t) {
                        this._handleException(t), this.stop({
                            reason: "sendReplay"
                        });
                        let e = (0, S.s3)();
                        e && e.recordDroppedEvent("send_error", "replay")
                    }
                }
                __init5() {
                    this._flush = async ({
                        force: e = !1
                    } = {}) => {
                        if (!this._isEnabled && !e || !this.checkAndHandleExpiredSession() || !this.session) return;
                        let t = this.session.started,
                            r = Date.now() - t;
                        this._debouncedFlush.cancel();
                        let n = r < this._options.minReplayDuration,
                            s = r > this._options.maxReplayDuration + 5e3;
                        if (n || s) {
                            this._options._experiments.traceInternals, n && this._debouncedFlush();
                            return
                        }
                        let i = this.eventBuffer;
                        if (i && 0 === this.session.segmentId && !i.hasCheckout && this._options._experiments.traceInternals, !this._flushLock) {
                            this._flushLock = this._runFlush(), await this._flushLock, this._flushLock = void 0;
                            return
                        }
                        try {
                            await this._flushLock
                        } catch (e) {} finally {
                            this._debouncedFlush()
                        }
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && tB(this.session)
                }
                __init6() {
                    this._onMutationHandler = e => {
                        let t = e.length,
                            r = this._options.mutationLimit,
                            n = this._options.mutationBreadcrumbLimit,
                            s = r && t > r;
                        if (t > n || s) {
                            let e = tE({
                                category: "replay.mutations",
                                data: {
                                    count: t,
                                    limit: s
                                }
                            });
                            this._createCustomBreadcrumb(e)
                        }
                        return !s || (this.stop({
                            reason: "mutationLimit",
                            forceFlush: "session" === this.recordingMode
                        }), !1)
                    }
                }
            }

            function rg(e, t, r, n) {
                let s = [...e, ..."string" == typeof n ? n.split(",") : [], ...t];
                return void 0 !== r && ("string" == typeof r && s.push(`.${r}`), (0, A.Cf)(() => {
                    console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")
                })), s.join(",")
            }
            let r_ = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                rS = ["content-length", "content-type", "accept"],
                rv = !1;
            class rw {
                static __initStatic() {
                    this.id = "Replay"
                }
                constructor({
                    flushMinDelay: e = 5e3,
                    flushMaxDelay: t = 5500,
                    minReplayDuration: r = 4999,
                    maxReplayDuration: n = 36e5,
                    stickySession: s = !0,
                    useCompression: i = !0,
                    workerUrl: o,
                    _experiments: a = {},
                    sessionSampleRate: l,
                    errorSampleRate: c,
                    maskAllText: u = !0,
                    maskAllInputs: d = !0,
                    blockAllMedia: h = !0,
                    mutationBreadcrumbLimit: p = 750,
                    mutationLimit: m = 1e4,
                    slowClickTimeout: f = 7e3,
                    slowClickIgnoreSelectors: y = [],
                    networkDetailAllowUrls: g = [],
                    networkDetailDenyUrls: _ = [],
                    networkCaptureBodies: S = !0,
                    networkRequestHeaders: v = [],
                    networkResponseHeaders: w = [],
                    mask: b = [],
                    maskAttributes: E = ["title", "placeholder"],
                    unmask: k = [],
                    block: I = [],
                    unblock: M = [],
                    ignore: C = [],
                    maskFn: R,
                    beforeAddRecordingEvent: T,
                    beforeErrorSampling: x,
                    blockClass: A,
                    blockSelector: D,
                    maskInputOptions: O,
                    maskTextClass: N,
                    maskTextSelector: L,
                    ignoreClass: P
                } = {}) {
                    this.name = rw.id;
                    let F = function({
                        mask: e,
                        unmask: t,
                        block: r,
                        unblock: n,
                        ignore: s,
                        blockClass: i,
                        blockSelector: o,
                        maskTextClass: a,
                        maskTextSelector: l,
                        ignoreClass: c
                    }) {
                        let u = {
                            maskTextSelector: rg(e, [".sentry-mask", "[data-sentry-mask]"], a, l),
                            unmaskTextSelector: rg(t, [".sentry-unmask", "[data-sentry-unmask]"]),
                            blockSelector: rg(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], i, o),
                            unblockSelector: rg(n, [".sentry-unblock", "[data-sentry-unblock]"]),
                            ignoreSelector: rg(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], c)
                        };
                        return i instanceof RegExp && (u.blockClass = i), a instanceof RegExp && (u.maskTextClass = a), u
                    }({
                        mask: b,
                        unmask: k,
                        block: I,
                        unblock: M,
                        ignore: C,
                        blockClass: A,
                        blockSelector: D,
                        maskTextClass: N,
                        maskTextSelector: L,
                        ignoreClass: P
                    });
                    if (this._recordingOptions = {
                            maskAllInputs: d,
                            maskAllText: u,
                            maskInputOptions: { ...O || {},
                                password: !0
                            },
                            maskTextFn: R,
                            maskInputFn: R,
                            maskAttributeFn: (e, t, r) => (function({
                                el: e,
                                key: t,
                                maskAttributes: r,
                                maskAllText: n,
                                privacyOptions: s,
                                value: i
                            }) {
                                return !n || s.unmaskTextSelector && e.matches(s.unmaskTextSelector) ? i : r.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? i.replace(/[\S]/g, "*") : i
                            })({
                                maskAttributes: E,
                                maskAllText: u,
                                privacyOptions: F,
                                key: e,
                                value: t,
                                el: r
                            }),
                            ...F,
                            slimDOMOptions: "all",
                            inlineStylesheet: !0,
                            inlineImages: !1,
                            collectFonts: !0,
                            errorHandler: e => {
                                try {
                                    e.__rrweb__ = !0
                                } catch (e) {}
                            }
                        }, this._initialOptions = {
                            flushMinDelay: e,
                            flushMaxDelay: t,
                            minReplayDuration: Math.min(r, 15e3),
                            maxReplayDuration: Math.min(n, 36e5),
                            stickySession: s,
                            sessionSampleRate: l,
                            errorSampleRate: c,
                            useCompression: i,
                            workerUrl: o,
                            blockAllMedia: h,
                            maskAllInputs: d,
                            maskAllText: u,
                            mutationBreadcrumbLimit: p,
                            mutationLimit: m,
                            slowClickTimeout: f,
                            slowClickIgnoreSelectors: y,
                            networkDetailAllowUrls: g,
                            networkDetailDenyUrls: _,
                            networkCaptureBodies: S,
                            networkRequestHeaders: rb(v),
                            networkResponseHeaders: rb(w),
                            beforeAddRecordingEvent: T,
                            beforeErrorSampling: x,
                            _experiments: a
                        }, "number" == typeof l && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${l} })`), this._initialOptions.sessionSampleRate = l), "number" == typeof c && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${c} })`), this._initialOptions.errorSampleRate = c), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${r_}` : r_), this._isInitialized && (0, z.j)()) throw Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
                get _isInitialized() {
                    return rv
                }
                set _isInitialized(e) {
                    rv = e
                }
                setupOnce() {
                    (0, z.j)() && (this._setup(), setTimeout(() => this._initialize()))
                }
                start() {
                    this._replay && this._replay.start()
                }
                startBuffering() {
                    this._replay && this._replay.startBuffering()
                }
                stop() {
                    return this._replay ? this._replay.stop({
                        forceFlush: "session" === this._replay.recordingMode
                    }) : Promise.resolve()
                }
                flush(e) {
                    return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve()
                }
                getReplayId() {
                    if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
                }
                _initialize() {
                    this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling())
                }
                _setup() {
                    let e = function(e) {
                        let t = (0, S.s3)(),
                            r = t && t.getOptions(),
                            n = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...(0, R.Jr)(e)
                            };
                        return r ? (null == e.sessionSampleRate && null == e.errorSampleRate && null == r.replaysSessionSampleRate && null == r.replaysOnErrorSampleRate && (0, A.Cf)(() => {
                            console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                        }), "number" == typeof r.replaysSessionSampleRate && (n.sessionSampleRate = r.replaysSessionSampleRate), "number" == typeof r.replaysOnErrorSampleRate && (n.errorSampleRate = r.replaysOnErrorSampleRate)) : (0, A.Cf)(() => {
                            console.warn("SDK client is not available.")
                        }), n
                    }(this._initialOptions);
                    this._replay = new ry({
                        options: e,
                        recordingOptions: this._recordingOptions
                    })
                }
                _maybeLoadFromReplayCanvasIntegration() {
                    try {
                        let e = (0, S.s3)().getIntegrationByName("ReplayCanvas");
                        if (!e) return;
                        this._replay._canvas = e.getOptions()
                    } catch (e) {}
                }
            }

            function rb(e) {
                return [...rS, ...e.map(e => e.toLowerCase())]
            }
            rw.__initStatic()
        }
    }
]);