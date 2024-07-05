(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13], {
        6477: function(t, e, a) {
            "use strict";
            a.d(e, {
                Z: function() {
                    return d
                }
            });
            var n = a(6063),
                o = a(7965),
                s = a.n(o),
                i = a(4673),
                r = a.n(i),
                c = a(4617);
            let l = r().bind(s());

            function d() {
                let [t, e] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    let t = () => {
                        window.scrollY > 100 ? e(!0) : e(!1)
                    };
                    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t)
                }, []), t && (0, n.jsx)("button", {
                    className: l("top-button"),
                    onClick: () => {
                        window.scrollTo({
                            top: 0
                        })
                    },
                    children: "Top"
                })
            }
        },
        3057: function(t, e, a) {
            "use strict";
            a.d(e, {
                O: function() {
                    return E
                },
                Y: function() {
                    return g
                }
            });
            var n = a(6063),
                o = a(4673),
                s = a.n(o),
                i = a(9920),
                r = a.n(i),
                c = a(9167),
                l = a(4202),
                d = a(2228);
            a(2147);
            var v = a(1356),
                u = a(6998),
                m = a(3773),
                _ = a(9745),
                h = a(158),
                p = a(6477);
            let C = s().bind(r()),
                x = [{
                    id: "relay-event",
                    text: "릴레이 이벤트",
                    url: "/"
                }, {
                    id: "avatar-maker",
                    text: "추억의 아바타 만들기",
                    url: "/avatar"
                }];

            function g() {
                var t, e, a, o, s, i;
                let {
                    isMobile: r
                } = (0, l.dD)(), {
                    detailId: g,
                    openContestDetail: w,
                    closeContestDetail: j,
                    moveContestDetail: y
                } = (0, l.pG)(), {
                    contentsListData: b,
                    isContentsListLoading: N
                } = (0, l.OM)(), k = t => {
                    let {
                        children: e,
                        className: a
                    } = t;
                    return r ? (0, n.jsx)(d.tq, {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                        centeredSlides: !0,
                        className: C("avatar-container", a),
                        children: e
                    }) : (0, n.jsx)("div", {
                        className: C("avatar-container", a),
                        children: e
                    })
                }, A = (null == b ? void 0 : null === (t = b.daily) || void 0 === t ? void 0 : t.length) === 3, f = (null == b ? void 0 : null === (e = b.weekly) || void 0 === e ? void 0 : e.length) === 3, L = A && f, M = !L && (A || f);
                if (b) return (0, n.jsxs)("div", {
                    className: C("container"),
                    children: [(0, n.jsx)(p.Z, {}), (0, n.jsx)(c.Hn, {
                        sharingUrl: "https://enter.nexon.com/30th/avatar-contest",
                        className: C("floating-container"),
                        mobileFixedTop: 16,
                        sharingA2S: {
                            object: "Contest_Main",
                            name: "Floating_Share"
                        },
                        children: x.map(t => (0, n.jsx)(_.Z, {
                            "data-a2s-web-obj": "Contest_Main",
                            "data-a2s-option-name": "Floting",
                            "data-a2s-option-value": t.text,
                            "data-a2s-option-pagecode": "65478",
                            children: (0, n.jsx)(h.default, {
                                className: C("anchor"),
                                href: t.url,
                                target: "_blank",
                                children: t.text
                            })
                        }, t.id))
                    }), !N && (0, n.jsxs)("div", {
                        className: C("contest-container"),
                        children: [(0, n.jsx)("header", {
                            className: C("contest-header"),
                            children: "베스트 드레서 콘테스트"
                        }), (0, n.jsx)("div", {
                            className: C("glitter")
                        }), (0, n.jsxs)("div", {
                            className: C("contest-bg-mo", L && "two-section", M && "one-section"),
                            children: [A && (0, n.jsxs)("div", {
                                className: C("daily-top3-container"),
                                children: [(0, n.jsx)("div", {
                                    className: C("daily-top3-title"),
                                    children: "DAILY 추천 TOP3"
                                }), (0, n.jsx)(k, {
                                    children: null == b ? void 0 : null === (a = b.daily) || void 0 === a ? void 0 : a.map((t, e) => (0, n.jsx)(d.o5, {
                                        className: C("avatar-card-container"),
                                        children: (0, n.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Contest_Main",
                                            "data-a2s-option-name": "Daily",
                                            "data-a2s-option-pagecode": "65478",
                                            "data-a2s-option-value": e + 1,
                                            children: (0, n.jsx)(c.C4, {
                                                type: ["first", "second", "third"][e],
                                                title: t.title,
                                                image: t.thumbnailUrl,
                                                nickname: t.nickName,
                                                like: t.emotionLikeCount,
                                                onClick: () => w(t.contentId)
                                            })
                                        })
                                    }, t.contentId))
                                })]
                            }), f && (0, n.jsxs)("div", {
                                className: C("weekly-top3-container"),
                                children: [(0, n.jsx)("div", {
                                    className: C("weekly-top3-title"),
                                    children: "WEEKLY 추천 TOP3"
                                }), (0, n.jsx)(k, {
                                    children: null == b ? void 0 : null === (o = b.weekly) || void 0 === o ? void 0 : o.map((t, e) => (0, n.jsx)(d.o5, {
                                        className: C("avatar-card-container"),
                                        children: (0, n.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Contest_Main",
                                            "data-a2s-option-name": "Weekly",
                                            "data-a2s-option-pagecode": "65478",
                                            "data-a2s-option-value": e + 1,
                                            children: (0, n.jsx)(c.C4, {
                                                type: ["first", "second", "third"][e],
                                                title: t.title,
                                                image: t.thumbnailUrl,
                                                nickname: t.nickName,
                                                like: t.emotionLikeCount,
                                                onClick: () => w(t.contentId)
                                            })
                                        })
                                    }, t.contentId))
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: C("random-codi-container"),
                            children: [(0, n.jsx)("div", {
                                className: C("random-codi-title"),
                                children: "이런 코디도 있어요"
                            }), (null == b ? void 0 : null === (s = b.today) || void 0 === s ? void 0 : s.length) > 0 ? (0, n.jsx)(k, {
                                className: C("random-codi-list"),
                                children: null == b ? void 0 : null === (i = b.today) || void 0 === i ? void 0 : i.map((t, e) => (0, n.jsx)(d.o5, {
                                    className: C("avatar-card-container"),
                                    children: (0, n.jsx)(_.Z, {
                                        "data-a2s-web-obj": "Contest_Main",
                                        "data-a2s-option-name": "Random",
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, n.jsx)(c.C4, {
                                            type: "common",
                                            title: t.title,
                                            image: t.thumbnailUrl,
                                            nickname: t.nickName,
                                            like: t.emotionLikeCount,
                                            onClick: () => w(t.contentId)
                                        })
                                    })
                                }, t.contentId))
                            }) : (0, n.jsx)(c.YT, {
                                type: "CONTEST"
                            })]
                        }), (0, n.jsx)(_.Z, {
                            "data-a2s-web-obj": "Contest_Main",
                            "data-a2s-option-name": "Recommend",
                            "data-a2s-option-pagecode": "65478",
                            children: (0, n.jsx)(h.default, {
                                className: C("recommend-codi-button"),
                                href: "/avatar-contest/items",
                                children: "코디 추천하러 가기"
                            })
                        }), (0, n.jsx)("ul", {
                            className: C("codi-notice"),
                            children: (0, n.jsx)("li", {
                                children: "부적절한 닉네임, 코디 제목 및 설명 등이 확인될 경우 제출한 콘테스트 참여작이 삭제될 수 있으며, 삭제 시 재참여할 수 없습니다."
                            })
                        })]
                    }), g && (0, n.jsx)(u.Z, {
                        id: g,
                        categoryId: (0, m.W)(),
                        onClose: j,
                        moveContestDetail: y
                    }, g), (0, n.jsx)(v.Z, {})]
                })
            }
            var w = a(1991),
                j = a.n(w),
                y = a(4617),
                b = a(589),
                N = a(3962),
                k = a(1280),
                A = a(5145),
                f = a(218),
                L = a.n(f);
            let M = s().bind(j()),
                T = [{
                    type: "RECENT",
                    text: "최신순",
                    a2sValue: "최신"
                }, {
                    type: "POPULAR",
                    text: "추천순",
                    a2sValue: "추천"
                }];

            function E() {
                var t, e, a, o, s, i, r, d, C, x;
                let {
                    mutate: g
                } = (0, N.kY)(), {
                    isMobile: w
                } = (0, l.dD)(), j = (0, b.useRouter)(), f = (0, b.usePathname)(), E = (0, b.useSearchParams)(), S = (0, y.useRef)([]), I = L()().month() + 1, O = (0, y.useMemo)(() => [...I >= 8 ? [{
                    type: "8",
                    text: "8월",
                    a2sValue: "8"
                }] : [], {
                    type: "7",
                    text: "7월",
                    a2sValue: "7"
                }], [I]), [Z, P] = (0, y.useState)({
                    page: 1,
                    keywordType: "title",
                    feedType: "RECENT",
                    sortType: "RECENT",
                    month: O[0].type,
                    keyword: ""
                }), [R, Y] = (0, y.useState)(""), {
                    detailId: D,
                    openContestDetail: U,
                    closeContestDetail: V,
                    moveContestDetail: q
                } = (0, l.pG)(), {
                    data: W,
                    isLoading: z,
                    mutate: G
                } = (0, N.ZP)(["contestList", Z], async () => {
                    try {
                        let {
                            keyword: t,
                            feedType: e,
                            sortType: a,
                            month: n,
                            page: o
                        } = Z, s = (0, m.W)(n);
                        return await (0, k.V)().getContents({
                            page: o,
                            size: 9,
                            feedType: t ? "CONTENT" : e,
                            sortType: a,
                            keyword: t,
                            categoryId: s
                        })
                    } catch (t) {
                        console.log(t)
                    }
                }, {
                    revalidateIfStale: !0
                });
                (0, y.useEffect)(() => {
                    let t = Number(E.get("page")) || 1,
                        e = E.get("keywordType") || "title",
                        a = E.get("feedType") || "RECENT",
                        n = E.get("sortType") || "RECENT",
                        o = E.get("month") || O[0].type,
                        s = E.get("keyword") || "";
                    Y(s), P({
                        page: t,
                        keywordType: e,
                        feedType: a,
                        sortType: n,
                        month: o,
                        keyword: s
                    })
                }, [I, O, E]);
                let {
                    pageInfo: B
                } = (null == W ? void 0 : W.data) || {}, F = Math.ceil((null == B ? void 0 : B.totalCount) / (null == B ? void 0 : B.size)), H = t => {
                    let {
                        name: e,
                        value: a
                    } = t, n = new URLSearchParams(E.toString());
                    return "page" !== e && n.set("page", "1"), "feedType" === e && a && n.set("sortType", {
                        RECENT: "RECENT",
                        POPULAR: "EMOTION_COUNT"
                    }[a]), n.set(e, a), j.push("".concat(f, "?").concat(n.toString()))
                }, J = async () => 0 == R.length ? await A.lp.openMessage({
                    messages: ["검색어를 입력해 주세요."]
                }) : R.length < 2 ? await A.lp.openMessage({
                    messages: ["검색어는 2자 이상 입력해 주세요."]
                }) : void H({
                    name: "keyword",
                    value: R
                }), K = async t => {
                    var e, a;
                    if (!(null === (a = window.inface) || void 0 === a ? void 0 : null === (e = a.auth) || void 0 === e ? void 0 : e.isSignedIn())) return await A.lp.openMessage({
                        messages: ["로그인 후 추천할 수 있습니다."]
                    }), window.inface.auth.gotoSignIn();
                    let {
                        userContentEmotion: n,
                        contentId: o,
                        nickName: s
                    } = t;
                    if (n) return await A.lp.openMessage({
                        messages: ["이미 추천한 코디입니다.", "코디당 1회만 추천할 수 있습니다."]
                    });
                    try {
                        await (0, k.V)().addEmotion({
                            contentId: o
                        }), await A.lp.openMessage({
                            messages: ["".concat(s, "님의 코디를 추천하였습니다.")]
                        }), g(t => Array.isArray(t) && "contestList" === t[0], void 0)
                    } catch (t) {
                        console.error(t)
                    }
                };
                return (0, n.jsxs)("div", {
                    className: M("container"),
                    children: [(0, n.jsx)(p.Z, {}), (0, n.jsx)(h.default, {
                        className: M("goto-contest-main"),
                        href: "/avatar-contest",
                        children: "이전으로"
                    }), (0, n.jsx)("div", {
                        className: M("contest-container"),
                        children: (0, n.jsxs)("div", {
                            className: M("contest-wrapper"),
                            children: [(0, n.jsx)("div", {
                                className: M("contest-title"),
                                children: "콘테스트 참여 코디"
                            }), (0, n.jsx)("div", {
                                className: M("contest-light")
                            }), (0, n.jsxs)("div", {
                                className: M("contest-search-wrap"),
                                children: [(0, n.jsx)("div", {
                                    ref: t => S.current[0] = t,
                                    className: M("dropdown-wrapper", "search-select-month"),
                                    children: (0, n.jsx)(c.Lt, {
                                        containerElement: S.current[0],
                                        name: "month",
                                        list: O,
                                        currentValue: Z.month,
                                        onClickDropdown: H,
                                        a2sObj: "Contest_List",
                                        a2sName: "Month"
                                    })
                                }), (0, n.jsxs)("div", {
                                    ref: t => S.current[1] = t,
                                    className: M("search-bar"),
                                    children: [(0, n.jsx)("input", {
                                        className: M("search-bar-input"),
                                        type: "text",
                                        name: "search",
                                        value: R,
                                        placeholder: "제목 + 내용",
                                        onChange: t => {
                                            let {
                                                value: e
                                            } = t.target;
                                            Y(e), e || H({
                                                name: "keyword",
                                                value: ""
                                            })
                                        },
                                        onKeyDown: t => {
                                            "Enter" === t.key && J()
                                        }
                                    }), (0, n.jsxs)("div", {
                                        className: M("search-button-container"),
                                        children: [R && (0, n.jsx)("button", {
                                            className: M("search-delete-button"),
                                            onClick: () => {
                                                Y(""), H({
                                                    name: "keyword",
                                                    value: ""
                                                })
                                            }
                                        }), (0, n.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Contest_List",
                                            "data-a2s-option-name": "Search",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, n.jsx)("button", {
                                                className: M("search-bar-button"),
                                                onClick: J
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    ref: t => S.current[2] = t,
                                    className: M("dropdown-wrapper", "search-select-sort"),
                                    children: (0, n.jsx)(c.Lt, {
                                        containerElement: S.current[2],
                                        name: "feedType",
                                        list: T,
                                        currentValue: Z.feedType,
                                        onClickDropdown: H,
                                        a2sObj: "Contest_List",
                                        a2sName: "Sort"
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: M("contest-body"),
                                children: !z && (0, n.jsxs)(n.Fragment, {
                                    children: [!R && (null == W ? void 0 : null === (e = W.data) || void 0 === e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.length) === 0 && (0, n.jsx)(c.YT, {
                                        type: "CONTEST"
                                    }), R && (null == W ? void 0 : null === (o = W.data) || void 0 === o ? void 0 : null === (a = o.data) || void 0 === a ? void 0 : a.length) === 0 && (0, n.jsx)(c.YT, {
                                        type: "SEARCH"
                                    }), (null == W ? void 0 : null === (i = W.data) || void 0 === i ? void 0 : null === (s = i.data) || void 0 === s ? void 0 : s.length) > 0 && (0, n.jsx)("div", {
                                        className: M("contents-contents"),
                                        children: (0, n.jsx)("div", {
                                            className: M("contest-card-list"),
                                            children: null == W ? void 0 : null === (d = W.data) || void 0 === d ? void 0 : null === (r = d.data) || void 0 === r ? void 0 : r.map(t => (0, n.jsxs)("div", {
                                                className: M("contest-card"),
                                                children: [(0, n.jsx)(_.Z, {
                                                    "data-a2s-web-obj": "Contest_List",
                                                    "data-a2s-option-name": "Avatar",
                                                    "data-a2s-option-value": t.contentId,
                                                    "data-a2s-option-pagecode": "65478",
                                                    children: (0, n.jsx)(c.C4, {
                                                        type: "common",
                                                        title: t.title,
                                                        image: t.thumbnailUrl,
                                                        nickname: t.nickName,
                                                        like: t.emotionLikeCount,
                                                        onClick: () => U(t.contentId)
                                                    })
                                                }), (0, n.jsx)(_.Z, {
                                                    "data-a2s-web-obj": "Contest_List",
                                                    "data-a2s-option-name": "List",
                                                    "data-a2s-option-type": "Recommend",
                                                    "data-a2s-option-value": t.contentId,
                                                    "data-a2s-option-pagecode": "65478",
                                                    children: (0, n.jsx)("button", {
                                                        className: M("contest-card-recommend"),
                                                        onClick: () => K(t)
                                                    })
                                                })]
                                            }, t.contentId))
                                        })
                                    })]
                                })
                            }), (null == W ? void 0 : null === (x = W.data) || void 0 === x ? void 0 : null === (C = x.data) || void 0 === C ? void 0 : C.length) > 0 && (0, n.jsx)(c.tl, {
                                currentPage: Z.page,
                                pageInterval: w ? 5 : 10,
                                totalPage: F,
                                onClickPage: t => {
                                    H({
                                        name: "page",
                                        value: t.toString()
                                    }), window.scrollTo(0, 0)
                                }
                            })]
                        })
                    }), D && (0, n.jsx)(u.Z, {
                        id: D,
                        categoryId: (0, m.W)(Z.month),
                        onClose: V,
                        moveContestDetail: q,
                        mutateContestList: G
                    }, D), (0, n.jsx)(v.Z, {})]
                })
            }
        },
        6413: function(t, e, a) {
            "use strict";
            var n = a(4617),
                o = a(8254);
            e.Z = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        baseScale: e = 1,
                        changeScale: a = .75,
                        targetViewportWidth: s = 1e3
                    } = t;
                (0, n.useEffect)(() => {
                    let t = !1,
                        n = function() {
                            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                let {
                                    forceToBase: o = !1
                                } = n, s = document.querySelector("meta[name=viewport]");
                                if (t) {
                                    t = !1;
                                    return
                                }
                                let i = [() => window.innerWidth < 360, () => {
                                    let {
                                        navigator: t
                                    } = window;
                                    return t.userAgent.includes("SM-F")
                                }].some(t => t());
                                i && (t = !0);
                                let r = i ? a : e,
                                    c = o ? e : r;
                                s.setAttribute("content", "width=device-width, initial-scale=".concat(c, ", maximum-scale=").concat(c, ", minimum-scale=").concat(c, ", user-scalable=no"))
                            } catch (t) {
                                o.Tb(t)
                            }
                        };
                    return n(), window.addEventListener("resize", n), () => {
                        window.removeEventListener("resize", n), n({
                            forceToBase: !0
                        })
                    }
                }, [e, a, s])
            }
        },
        7965: function(t) {
            t.exports = {
                "top-button": "TopButton_top-button__4s0dE"
            }
        },
        1991: function(t) {
            t.exports = {
                container: "AvatarContestList_container__670G7",
                "goto-contest-main": "AvatarContestList_goto-contest-main__ODuSE",
                "contest-container": "AvatarContestList_contest-container__x6CJH",
                "contest-wrapper": "AvatarContestList_contest-wrapper__pi5cP",
                "contest-title": "AvatarContestList_contest-title__CPNmT",
                "contest-light": "AvatarContestList_contest-light__WJvnO",
                "contest-header": "AvatarContestList_contest-header__EhMgx",
                "contest-body": "AvatarContestList_contest-body__aYT0M",
                "contents-contents": "AvatarContestList_contents-contents__Mozzr",
                "contest-search-wrap": "AvatarContestList_contest-search-wrap__h3ZOu",
                "contest-search-right-container": "AvatarContestList_contest-search-right-container__xAbYY",
                "dropdown-wrapper": "AvatarContestList_dropdown-wrapper___I_gq",
                "search-select-month": "AvatarContestList_search-select-month__WungJ",
                "search-bar": "AvatarContestList_search-bar__9D6aM",
                "search-bar-input": "AvatarContestList_search-bar-input__uWT5L",
                "search-select-keyword": "AvatarContestList_search-select-keyword__VYGc1",
                "search-button-container": "AvatarContestList_search-button-container__g8Tmk",
                "search-delete-button": "AvatarContestList_search-delete-button__qCtcn",
                "search-bar-button": "AvatarContestList_search-bar-button__COPi_",
                "search-select-sort": "AvatarContestList_search-select-sort__xXH6G",
                "contest-card-list": "AvatarContestList_contest-card-list__WASBO",
                "contest-card": "AvatarContestList_contest-card__oroqT",
                "contest-card-recommend": "AvatarContestList_contest-card-recommend__0e_Uq"
            }
        },
        9920: function(t) {
            t.exports = {
                container: "AvatarContestMain_container__eOqZt",
                "floating-container": "AvatarContestMain_floating-container__tuEEN",
                anchor: "AvatarContestMain_anchor__TxhOJ",
                on: "AvatarContestMain_on__kVLJk",
                "contest-container": "AvatarContestMain_contest-container__d3LMQ",
                "two-section": "AvatarContestMain_two-section__HvMr_",
                glitter: "AvatarContestMain_glitter__dYXwL",
                "one-section": "AvatarContestMain_one-section__Cb_Iq",
                "contest-header": "AvatarContestMain_contest-header__a0dyo",
                "contest-bg-mo": "AvatarContestMain_contest-bg-mo__uxxXj",
                "weekly-top3-container": "AvatarContestMain_weekly-top3-container__wEu5G",
                "daily-top3-container": "AvatarContestMain_daily-top3-container__La8U3",
                "daily-top3-title": "AvatarContestMain_daily-top3-title__aMBmc",
                "weekly-top3-title": "AvatarContestMain_weekly-top3-title__cKA6t",
                "random-codi-container": "AvatarContestMain_random-codi-container__wvUsZ",
                "random-codi-title": "AvatarContestMain_random-codi-title__MllTw",
                "random-codi-list": "AvatarContestMain_random-codi-list__M_rft",
                "avatar-container": "AvatarContestMain_avatar-container__Su87k",
                "avatar-card-container": "AvatarContestMain_avatar-card-container__qjCfK",
                "recommend-codi-button": "AvatarContestMain_recommend-codi-button__soIP_",
                "codi-notice": "AvatarContestMain_codi-notice__hfDqu"
            }
        }
    }
]);