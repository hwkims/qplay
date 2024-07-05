(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [731], {
        2677: function(t) {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                i = "~";

            function s() {}

            function n(t, e, i) {
                this.fn = t, this.context = e, this.once = i || !1
            }

            function a(t, e, s, a, o) {
                if ("function" != typeof s) throw TypeError("The listener must be a function");
                var r = new n(s, a || t, o),
                    l = i ? i + e : e;
                return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], r] : t._events[l].push(r) : (t._events[l] = r, t._eventsCount++), t
            }

            function o(t, e) {
                0 == --t._eventsCount ? t._events = new s : delete t._events[e]
            }

            function r() {
                this._events = new s, this._eventsCount = 0
            }
            Object.create && (s.prototype = Object.create(null), new s().__proto__ || (i = !1)), r.prototype.eventNames = function() {
                var t, s, n = [];
                if (0 === this._eventsCount) return n;
                for (s in t = this._events) e.call(t, s) && n.push(i ? s.slice(1) : s);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }, r.prototype.listeners = function(t) {
                var e = i ? i + t : t,
                    s = this._events[e];
                if (!s) return [];
                if (s.fn) return [s.fn];
                for (var n = 0, a = s.length, o = Array(a); n < a; n++) o[n] = s[n].fn;
                return o
            }, r.prototype.listenerCount = function(t) {
                var e = i ? i + t : t,
                    s = this._events[e];
                return s ? s.fn ? 1 : s.length : 0
            }, r.prototype.emit = function(t, e, s, n, a, o) {
                var r = i ? i + t : t;
                if (!this._events[r]) return !1;
                var l, c, h = this._events[r],
                    u = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), u) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, e), !0;
                        case 3:
                            return h.fn.call(h.context, e, s), !0;
                        case 4:
                            return h.fn.call(h.context, e, s, n), !0;
                        case 5:
                            return h.fn.call(h.context, e, s, n, a), !0;
                        case 6:
                            return h.fn.call(h.context, e, s, n, a, o), !0
                    }
                    for (c = 1, l = Array(u - 1); c < u; c++) l[c - 1] = arguments[c];
                    h.fn.apply(h.context, l)
                } else {
                    var d, m = h.length;
                    for (c = 0; c < m; c++) switch (h[c].once && this.removeListener(t, h[c].fn, void 0, !0), u) {
                        case 1:
                            h[c].fn.call(h[c].context);
                            break;
                        case 2:
                            h[c].fn.call(h[c].context, e);
                            break;
                        case 3:
                            h[c].fn.call(h[c].context, e, s);
                            break;
                        case 4:
                            h[c].fn.call(h[c].context, e, s, n);
                            break;
                        default:
                            if (!l)
                                for (d = 1, l = Array(u - 1); d < u; d++) l[d - 1] = arguments[d];
                            h[c].fn.apply(h[c].context, l)
                    }
                }
                return !0
            }, r.prototype.on = function(t, e, i) {
                return a(this, t, e, i, !1)
            }, r.prototype.once = function(t, e, i) {
                return a(this, t, e, i, !0)
            }, r.prototype.removeListener = function(t, e, s, n) {
                var a = i ? i + t : t;
                if (!this._events[a]) return this;
                if (!e) return o(this, a), this;
                var r = this._events[a];
                if (r.fn) r.fn !== e || n && !r.once || s && r.context !== s || o(this, a);
                else {
                    for (var l = 0, c = [], h = r.length; l < h; l++)(r[l].fn !== e || n && !r[l].once || s && r[l].context !== s) && c.push(r[l]);
                    c.length ? this._events[a] = 1 === c.length ? c[0] : c : o(this, a)
                }
                return this
            }, r.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = i ? i + t : t, this._events[e] && o(this, e)) : (this._events = new s, this._eventsCount = 0), this
            }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, r.prefixed = i, r.EventEmitter = r, t.exports = r
        },
        7731: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return A
                }
            });
            var s = i(6063),
                n = i(4617),
                a = i(7516);
            class o extends a.Scene {
                preload() {
                    this.load.setPath("/30th/quiz/game"), this.load.image("start-background", "images/start-background.png"), this.load.image("character-select-background", "images/character-select-background.png"), this.load.spritesheet("character-select-button", "images/character-select-button.png", {
                        frameWidth: 74,
                        frameHeight: 38
                    }), this.load.image("background", "images/background.jpg"), this.load.image("board", "images/board.png"), this.load.image("result-cash-background", "images/result-cash-background.png"), this.load.image("result-no-cash-background", "images/result-no-cash-background.png"), this.load.image("character-1", "images/characters/1.png"), this.load.image("character-2", "images/characters/2.png"), this.load.image("character-3", "images/characters/3.png"), this.load.image("character-4", "images/characters/4.png"), this.load.image("2-choice-board", "images/choice/2-choice-board.png"), this.load.image("4-choice-board", "images/choice/4-choice-board.png"), this.load.spritesheet("choice-1", "images/choice/choice-1-sprite.png", {
                        frameWidth: 37,
                        frameHeight: 37
                    }), this.load.spritesheet("choice-2", "images/choice/choice-2-sprite.png", {
                        frameWidth: 37,
                        frameHeight: 37
                    }), this.load.spritesheet("choice-3", "images/choice/choice-3-sprite.png", {
                        frameWidth: 37,
                        frameHeight: 37
                    }), this.load.spritesheet("choice-4", "images/choice/choice-4-sprite.png", {
                        frameWidth: 37,
                        frameHeight: 37
                    }), this.load.spritesheet("choice-ox-1", "images/choice/choice-o-sprite.png", {
                        frameWidth: 59,
                        frameHeight: 37
                    }), this.load.spritesheet("choice-ox-2", "images/choice/choice-x-sprite.png", {
                        frameWidth: 59,
                        frameHeight: 37
                    }), this.load.spritesheet("skip-button", "images/skip-button.png", {
                        frameWidth: 55,
                        frameHeight: 24
                    }), this.load.spritesheet("skip-next-quiz-button", "images/skip-next-quiz-button.png", {
                        frameWidth: 89,
                        frameHeight: 66
                    }), this.load.spritesheet("sound-button", "images/sound-button-sprite.png", {
                        frameWidth: 59,
                        frameHeight: 42
                    }), this.load.spritesheet("exit-button", "images/exit-button-sprite.png", {
                        frameWidth: 101,
                        frameHeight: 32
                    }), this.load.spritesheet("game-start-button", "images/start-button-sprite.png", {
                        frameWidth: 159,
                        frameHeight: 69
                    }), this.load.spritesheet("game-restart-button", "images/restart-button-sprite.png", {
                        frameWidth: 84,
                        frameHeight: 32
                    }), this.load.spritesheet("big-o", "images/big-o-sprite.png", {
                        frameWidth: 161,
                        frameHeight: 177
                    }), this.load.spritesheet("big-x", "images/big-x-sprite.png", {
                        frameWidth: 161,
                        frameHeight: 177
                    }), this.load.spritesheet("small-o", "images/small-o-sprite.png", {
                        frameWidth: 65,
                        frameHeight: 171
                    }), this.load.spritesheet("small-x", "images/small-x-sprite.png", {
                        frameWidth: 65,
                        frameHeight: 171
                    }), this.load.spritesheet("answer-sign", "images/sign-sprite.png", {
                        frameWidth: 34,
                        frameHeight: 39
                    }), this.load.spritesheet("timer", "images/timer-sprite.png", {
                        frameWidth: 201,
                        frameHeight: 165
                    }), this.load.spritesheet("number", "images/number-sprite.png", {
                        frameWidth: 10,
                        frameHeight: 20
                    }), this.load.audio("background-music", "sounds/background.mp3"), this.load.audio("mouse-over", "sounds/mouse-over.mp3"), this.load.audio("mouse-down", "sounds/mouse-down.mp3"), this.load.audio("timer", "sounds/timer.mp3"), this.load.audio("correct-answer", "sounds/correct-answer.mp3"), this.load.audio("incorrect-answer", "sounds/incorrect-answer.mp3"), document.fonts.load("12px DungGeunMo")
                }
                create() {
                    this.anims.create({
                        key: "game-start-button-flikering",
                        frames: [{
                            key: "game-start-button",
                            frame: 0
                        }, {
                            key: "game-start-button",
                            frame: 4
                        }],
                        frameRate: 3,
                        repeat: -1,
                        yoyo: !0
                    }), this.anims.create({
                        key: "big-o",
                        frames: this.anims.generateFrameNumbers("big-o", {
                            start: 0,
                            end: 11
                        }),
                        frameRate: 10,
                        repeat: 0
                    }), this.anims.create({
                        key: "big-x",
                        frames: this.anims.generateFrameNumbers("big-x", {
                            start: 0,
                            end: 11
                        }),
                        frameRate: 10,
                        repeat: 0
                    }), this.anims.create({
                        key: "small-o",
                        frames: this.anims.generateFrameNumbers("small-o", {
                            start: 0,
                            end: 7
                        }),
                        frameRate: 10,
                        repeat: 0
                    }), this.anims.create({
                        key: "small-x",
                        frames: this.anims.generateFrameNumbers("small-x", {
                            start: 0,
                            end: 7
                        }),
                        frameRate: 10,
                        repeat: 0
                    }), this.anims.create({
                        key: "5-second-timer",
                        frames: this.anims.generateFrameNumbers("timer", {
                            start: 0,
                            end: 40
                        }),
                        frameRate: 8.2,
                        repeat: 0
                    }), this.anims.create({
                        key: "3-second-timer",
                        frames: this.anims.generateFrameNumbers("timer", {
                            start: 16,
                            end: 40
                        }),
                        frameRate: 25 / 3,
                        repeat: 0
                    }), this.preventDefaultFunctionKeys(), this.scene.start("start")
                }
                preventDefaultFunctionKeys() {
                    window.addEventListener("keydown", function(t) {
                        let {
                            key: e
                        } = t;
                        ("F1" === e || "F2" === e || "F3" === e || "F4" === e) && t.preventDefault()
                    })
                }
                constructor() {
                    super("preloader")
                }
            }
            let r = {
                    QUIZ_START: "quiz-start",
                    QUIZ_RESTART: "quiz-restart",
                    QUIZ_RESET: "quiz-reset",
                    GET_QUIZZES: "get-quizzes",
                    GET_QUIZZES_NOT_LOGGED_IN: "get-quizzes-not-logged-in",
                    CHECK_ANSWER: "check-answer",
                    HANDLE_CASH_ERROR: "handle-cash-error",
                    HANDLE_QUIZ_TIME_OUT: "handle-quiz-time-out",
                    MODAL_CLOSE: "modal-close"
                },
                l = new(i(2677)),
                c = {
                    isLoggedIn: !1,
                    isGiveCash: !1,
                    profile: null,
                    cashPaymentValidCode: 0
                },
                h = {
                    state: c,
                    setters: {
                        setIsGiveCash: t => {
                            c.isGiveCash = t
                        },
                        setIsLoggedIn: t => {
                            c.isLoggedIn = t
                        },
                        setProfile: t => {
                            c.profile = t
                        },
                        setCashPaymentValidCode: t => {
                            c.cashPaymentValidCode = t
                        }
                    }
                };
            class u extends Phaser.Scene {
                create() {
                    this.initialCanvas(), this.add.image(0, 0, "start-background").setOrigin(0, 0), this.gameStartButton = this.add.sprite(312, 168, "game-start-button", 0).setOrigin(0, 0).setInteractive({
                        useHandCursor: !0,
                        setTopOnly: !0
                    }), this.gameStartButton.play("game-start-button-flikering"), this.addGameStartButtonAnimation(), this.startButtonFlag = !1, h.setters.setIsGiveCash(!1), h.setters.setIsLoggedIn(!1), h.setters.setProfile(null), h.setters.setCashPaymentValidCode(0), l.on("response-".concat(r.QUIZ_START), t => {
                        let {
                            isLoggedIn: e,
                            isGiveCash: i,
                            profile: s
                        } = t;
                        this.startButtonFlag = !1, h.setters.setIsGiveCash(i), h.setters.setIsLoggedIn(e), h.setters.setProfile(s), this.scene.start("character-select")
                    }), l.on("response-".concat(r.MODAL_CLOSE), () => {
                        this.startButtonFlag = !1
                    }), this.events.once("shutdown", () => this.shutdown()), this.events.once("destroy", () => this.shutdown())
                }
                initialCanvas() {
                    let t = this.sys.game.canvas;
                    this.scale.resize(780, 474), this.cameras.main.setScroll(0, 0), this.cameras.main.setAngle(0), t.style.width = "", t.style.height = ""
                }
                addGameStartButtonAnimation() {
                    this.gameStartButton && (this.sys.game.canvas.addEventListener("touchend", t => {
                        t.preventDefault()
                    }), this.gameStartButton.on("pointerover", () => {
                        var t, e;
                        null === (t = this.gameStartButton) || void 0 === t || t.anims.stop(), null === (e = this.gameStartButton) || void 0 === e || e.setFrame(3)
                    }), this.gameStartButton.on("pointerout", () => {
                        var t, e;
                        null === (t = this.gameStartButton) || void 0 === t || t.play("game-start-button-flikering"), null === (e = this.gameStartButton) || void 0 === e || e.setFrame(0)
                    }), this.gameStartButton.on("pointerdown", () => {
                        var t;
                        null === (t = this.gameStartButton) || void 0 === t || t.setFrame(1)
                    }), this.gameStartButton.on("pointerup", () => {
                        var t;
                        this.startButtonFlag || (this.startButtonFlag = !0, l.emit(r.QUIZ_START), null === (t = this.gameStartButton) || void 0 === t || t.setFrame(0))
                    }))
                }
                shutdown() {
                    l.off("response-".concat(r.QUIZ_START)), l.off("response-".concat(r.MODAL_CLOSE))
                }
                constructor() {
                    super("start"), this.gameStartButton = null, this.startButtonFlag = !1
                }
            }
            let d = [{
                    dummy: !0,
                    nickname: "1",
                    score: 0,
                    currentSelectedOption: null,
                    avatar: null,
                    answerSign: null,
                    smallO: null,
                    smallX: null,
                    scoreText: null
                }, {
                    dummy: !0,
                    nickname: "2",
                    score: 0,
                    currentSelectedOption: null,
                    answerSign: null,
                    smallO: null,
                    smallX: null,
                    scoreText: null
                }, {
                    dummy: !0,
                    nickname: "3",
                    score: 0,
                    currentSelectedOption: null,
                    answerSign: null,
                    smallO: null,
                    smallX: null,
                    scoreText: null
                }, {
                    dummy: !0,
                    nickname: "4",
                    score: 0,
                    currentSelectedOption: null,
                    answerSign: null,
                    smallO: null,
                    smallX: null,
                    scoreText: null
                }],
                m = ["다오", "디지니", "배찌", "에띠", "모스", "우니", "케피", "마리드", "브로디", "네오", "핑크빈", "슬라임", "주황버섯", "예티", "돌의 정령", "람쥐왕", "왈숙", "넥슨30주년", "넥슨아사랑해", "넥뜐최고☆", "☆ziㄷh 넥돌이", "ziㄷh 넥순이☆", "넥슨OrOi"];
            var p = i(4290),
                g = i.n(p),
                v = i(1097);
            class b extends Phaser.Scene {
                create() {
                    var t, e;
                    (0, v.t)() && (this.resizeCallback = () => this.setCamera(), this.quizContainer = document.getElementById("quiz-container"), this.canvasContainer = document.getElementById("brain-quiz-container"), document.body.style.overflow = "hidden", null === (t = this.quizContainer) || void 0 === t || t.classList.add(g().quizMobileContainer), null === (e = this.canvasContainer) || void 0 === e || e.classList.add(g().canvasMobileContainer), this.scale.on("orientationchange", this.setCamera, this), window.addEventListener("resize", this.resizeCallback), this.setCamera(), this.resizeCanvas(), this.events.once("shutdown", () => this.shutdown()))
                }
                shutdown() {
                    var t, e;
                    document.body.style.overflow = "auto", document.body.classList.remove("modal-rotate"), null === (t = this.quizContainer) || void 0 === t || t.classList.remove(g().quizMobileContainer), null === (e = this.canvasContainer) || void 0 === e || e.classList.remove(g().canvasMobileContainer), this.scale.off("orientationchange"), window.removeEventListener("resize", this.resizeCallback)
                }
                isLandScape() {
                    return window.innerWidth > window.innerHeight
                }
                setCamera() {
                    this.cameras.main && (this.isLandScape() ? (document.body.classList.remove("modal-rotate"), this.scale.resize(780, 474), this.cameras.main.setScroll(0, 0), this.cameras.main.setAngle(0)) : (document.body.classList.add("modal-rotate"), this.scale.resize(474, 780), this.cameras.main.setScroll(150, -150), this.cameras.main.setAngle(90)), this.resizeCanvas())
                }
                resizeCanvas() {
                    let t = document.querySelector("canvas");
                    if (!t) return;
                    let e = window.innerWidth / window.innerHeight,
                        i = this.isLandScape() ? 780 / 474 : 474 / 780;
                    if (e < i) {
                        let e = .01 * window.innerWidth;
                        t.style.width = "".concat(100 * e, "px"), t.style.height = "".concat(window.innerWidth / i, "px")
                    } else {
                        let e = .01 * window.innerHeight;
                        t.style.height = "".concat(100 * e, "px"), t.style.width = "".concat(100 * e * i, "px")
                    }
                }
                constructor(t) {
                    super(t), this.quizContainer = null, this.canvasContainer = null, this.resizeCallback = () => {}
                }
            }
            class f extends b {
                create() {
                    super.create(), this.exitButton = this.add.sprite(671, 10, "exit-button").setOrigin(0, 0).setInteractive({
                        useHandCursor: !0
                    }), this.soundButton = this.add.sprite(714, 423, "sound-button").setOrigin(0, 0).setInteractive({
                        useHandCursor: !0
                    });
                    let t = this.sound.mute;
                    this.soundButton.setFrame(t ? 1 : 0), this.exitButton.on("pointerover", () => {
                        var t;
                        return null === (t = this.exitButton) || void 0 === t ? void 0 : t.setFrame(1)
                    }), this.exitButton.on("pointerout", () => {
                        var t;
                        return null === (t = this.exitButton) || void 0 === t ? void 0 : t.setFrame(0)
                    }), this.exitButton.on("pointerup", () => this.resetGame()), this.soundButton.on("pointerup", t => this.toggleSound(t)), l.on("response-".concat(r.QUIZ_RESET), () => {
                        this.resetGame()
                    })
                }
                resetGame() {
                    this.scene.stop("start"), this.scene.stop("character-select"), this.scene.stop("game"), this.scene.stop("result"), this.sound.stopAll(), this.scene.start("start")
                }
                isTouchEvent(t) {
                    return "touchend" === t.event.type || "touchstart" === t.event.type
                }
                toggleSound(t) {
                    this.soundButton && (this.isUnmute = !this.isUnmute, this.soundButton.setFrame(this.isUnmute ? 1 : 0), this.sound.mute = this.isUnmute)
                }
                shutdown() {
                    var t, e, i, s;
                    super.shutdown(), null === (t = this.exitButton) || void 0 === t || t.off("pointerover"), null === (e = this.exitButton) || void 0 === e || e.off("pointerout"), null === (i = this.exitButton) || void 0 === i || i.off("pointerup"), null === (s = this.soundButton) || void 0 === s || s.off("pointerup"), l.off("response-".concat(r.QUIZ_RESET))
                }
                constructor(t) {
                    super(t), this.exitButton = null, this.soundButton = null, this.isUnmute = !1
                }
            }
            var x = i(8605),
                y = i.n(x);
            class w extends f {
                create() {
                    this.sound.add("background-music", {
                        loop: !0
                    }).play(), this.add.image(0, 0, "character-select-background").setOrigin(0, 0), d.forEach((t, e) => {
                        this.add.image(73 + 171 * e, 171, "character-".concat(e + 1)).setOrigin(0, 0), this.selectButtons[e] = this.add.sprite(92 + 170 * e, 365, "character-select-button", 0).setOrigin(0, 0).setInteractive({
                            useHandCursor: !0,
                            setTopOnly: !0
                        }), this.selectButtons[e].on("pointerover", () => {
                            this.selectButtons[e].setFrame(1)
                        }), this.selectButtons[e].on("pointerout", () => {
                            this.selectButtons[e].setFrame(0)
                        }), this.selectButtons[e].on("pointerup", () => this.onClickPlayer(e))
                    }), super.create(), this.events.once("shutdown", () => this.shutdown()), this.events.once("destroy", () => this.shutdown())
                }
                onClickPlayer(t) {
                    let e = h.state.profile,
                        i = this.pickRandomNickname(d);
                    i[t].dummy = !1, e && (i[t].nickname = e.nexon_name), this.scene.start("game", {
                        players: i,
                        localPlayerIndex: t,
                        playIntro: !0
                    })
                }
                pickRandomNickname(t) {
                    let e = y()(t),
                        i = y()(m);
                    return e.forEach(t => {
                        let e = Math.floor(Math.random() * i.length);
                        t.nickname = i.splice(e, 1)[0]
                    }), e
                }
                shutdown() {
                    super.shutdown()
                }
                constructor() {
                    super("character-select"), this.selectButtons = []
                }
            }
            class S extends f {
                init(t) {
                    let {
                        players: e,
                        localPlayerIndex: i,
                        playIntro: s
                    } = t;
                    this.players = e, this.localPlayerIndex = i, this.playIntro = s
                }
                create() {
                    if (0 !== this.players.length) {
                        this.add.image(0, 0, "background").setOrigin(0, 0), this.board = this.add.image(385, 135, "board").setVisible(!1), this.descriptionText = this.add.text(390, 140, "", {
                            fontFamily: "DungGeunMo",
                            fontSize: "20px",
                            color: "#000",
                            wordWrap: {
                                width: 450
                            },
                            align: "center"
                        }).setOrigin(.5, .5), this.players.forEach((t, e) => {
                            let i = h.state.profile,
                                s = !t.dummy && i && t.nickname.length > 6 ? "".concat(t.nickname.slice(0, 6), "...") : t.nickname;
                            this.add.text(170 + 148 * e, 345, "".concat(s), {
                                fontFamily: "DungGeunMo",
                                fontSize: "12px",
                                color: t.dummy ? "#fff" : "yellow",
                                align: "center"
                            }).setOrigin(.5, .5), this.add.sprite(170 + 148 * e, 275, "character-".concat(e + 1)), t.answerSign = this.add.sprite(140 + 148 * e, 315, "answer-sign").setVisible(!1), t.scoreText = this.add.sprite(170 + 148 * e, 383, "number"), t.smallO = this.add.sprite(170 + 148 * e, 260, "small-o").setVisible(!1), t.smallX = this.add.sprite(170 + 148 * e, 260, "small-x").setVisible(!1), t.smallO.on("animationcomplete", () => {
                                var e;
                                null === (e = t.smallO) || void 0 === e || e.setVisible(!1)
                            }), t.smallX.on("animationcomplete", () => {
                                var e;
                                null === (e = t.smallX) || void 0 === e || e.setVisible(!1)
                            })
                        }), this.choice4Board = this.add.image(390, 429, "4-choice-board").setVisible(!1);
                        for (let t = 0; t < 4; t++) this.choiceNumbers[t] = this.add.sprite(328 + 42 * t, 424, "choice-".concat(t + 1)).setInteractive({
                            useHandCursor: !0,
                            setTopOnly: !0
                        }).setVisible(!1);
                        this.choice2Board = this.add.image(390, 429, "2-choice-board").setVisible(!1);
                        for (let t = 0; t < 2; t++) this.choiceOX[t] = this.add.sprite(353 + 77 * t, 424, "choice-ox-".concat(t + 1)).setInteractive({
                            useHandCursor: !0,
                            setTopOnly: !0
                        }).setVisible(!1);
                        this.bigO = this.add.sprite(390, 150, "big-o").setVisible(!1), this.bigX = this.add.sprite(390, 150, "big-x").setVisible(!1), this.timer = this.add.sprite(780, 474, "timer").setOrigin(1, 1).setVisible(!1), this.bigO.on("animationcomplete", () => {
                            var t;
                            null === (t = this.bigO) || void 0 === t || t.setVisible(!1)
                        }), this.bigX.on("animationcomplete", () => {
                            var t;
                            null === (t = this.bigX) || void 0 === t || t.setVisible(!1)
                        }), this.mouseOverSound = this.sound.add("mouse-over"), this.mouseDownSound = this.sound.add("mouse-down"), this.timerSound = this.sound.add("timer"), this.correctSound = this.sound.add("correct-answer"), this.incorrectSound = this.sound.add("incorrect-answer"), this.introSkipButton = this.add.sprite(560, 180, "skip-button").setOrigin(0, 0).setInteractive({
                            useHandCursor: !0,
                            setTopOnly: !0
                        }).setVisible(!1), this.introSkipButton.on("pointerover", () => {
                            var t;
                            (0, v.t)() || null === (t = this.introSkipButton) || void 0 === t || t.setFrame(1)
                        }), this.introSkipButton.on("pointerout", () => {
                            var t;
                            null === (t = this.introSkipButton) || void 0 === t || t.setFrame(0)
                        }), this.introSkipButton.on("pointerup", () => this.skipIntro()), this.restartButton = this.add.sprite(349, 180, "game-restart-button").setOrigin(0, 0).setInteractive({
                            useHandCursor: !0,
                            setTopOnly: !0
                        }).setVisible(!1), this.restartButton.on("pointerover", () => {
                            var t;
                            (0, v.t)() || null === (t = this.restartButton) || void 0 === t || t.setFrame(1)
                        }), this.restartButton.on("pointerout", () => {
                            var t;
                            null === (t = this.restartButton) || void 0 === t || t.setFrame(0)
                        }), this.restartButton.on("pointerup", () => {
                            let {
                                isGiveCash: t
                            } = h.state;
                            t ? l.emit(r.QUIZ_RESTART) : this.onClickRestart()
                        }), this.skipToNextQuizButton = this.add.sprite(673, 121, "skip-next-quiz-button").setOrigin(0, 0).setInteractive({
                            useHandCursor: !0,
                            setTopOnly: !0
                        }).setVisible(!1), this.skipToNextQuizButton.on("pointerover", () => {
                            var t;
                            (0, v.t)() || null === (t = this.skipToNextQuizButton) || void 0 === t || t.setFrame(1)
                        }), this.skipToNextQuizButton.on("pointerout", () => {
                            var t;
                            null === (t = this.skipToNextQuizButton) || void 0 === t || t.setFrame(0)
                        }), this.skipToNextQuizButton.on("pointerup", () => this.skipToNextQuiz()), l.on("response-".concat(r.QUIZ_RESTART), t => {
                            let {
                                giveCash: e
                            } = t;
                            h.setters.setIsGiveCash(e), this.onClickRestart()
                        }), l.once("response-".concat(r.GET_QUIZZES), t => {
                            let {
                                quizzes: e
                            } = t;
                            this.quizzes = e, this.gameStart()
                        }), l.once("response-".concat(r.GET_QUIZZES_NOT_LOGGED_IN), t => {
                            let {
                                quizzes: e
                            } = t;
                            this.quizzes = e, this.gameStart()
                        }), l.once("response-".concat(r.HANDLE_QUIZ_TIME_OUT), () => {
                            super.resetGame()
                        }), h.state.isLoggedIn ? l.emit(r.GET_QUIZZES, {
                            isGiveCash: h.state.isGiveCash
                        }) : l.emit(r.GET_QUIZZES_NOT_LOGGED_IN), super.create(), this.events.once("shutdown", () => this.shutdown()), this.events.once("destroy", () => this.shutdown())
                    }
                }
                async gameStart() {
                    var t, e, i, s, n, a, o;
                    if (this.playIntro && await this.gameIntro()) return;
                    null === (t = this.introSkipButton) || void 0 === t || t.setVisible(!1), null === (e = this.board) || void 0 === e || e.setVisible(!0), null === (i = this.descriptionText) || void 0 === i || i.setText("곧 퀴즈가 시작됩니다. 행운을 빌게요!"), null === (s = this.timer) || void 0 === s || s.setVisible(!0).play("3-second-timer"), null === (n = this.timerSound) || void 0 === n || n.play(), await this.waitForEvent({
                        delay: 3e3
                    }), null === (a = this.timer) || void 0 === a || a.setVisible(!1), null === (o = this.timerSound) || void 0 === o || o.stop();
                    let r = !0;
                    for (let t = 0; t < this.quizzes.length; t++) {
                        let e = await this.quizStart({
                            quizIndex: t
                        });
                        if (!1 === e) {
                            r = !1;
                            break
                        }
                        if (!e) return
                    }
                    r ? this.gameEnd() : this.incorrectAnswer()
                }
                async gameIntro() {
                    var t, e, i, s;
                    return this.playIntro = !0, await this.waitForEvent({
                        delay: 1e3
                    }), null === (t = this.introSkipButton) || void 0 === t || t.setVisible(!0), null === (e = this.board) || void 0 === e || e.setVisible(!0), !this.playIntro || (null === (i = this.descriptionText) || void 0 === i || i.setText("안녕하세요. 추억의 퀴즈퀴즈의 귀환 이벤트에 참여해주셔서 감사합니다."), await this.waitForEvent({
                        delay: 5e3
                    }), !this.playIntro || (null === (s = this.descriptionText) || void 0 === s || s.setText("정해진 시간 안에 퀴즈 3문제를 모두 맞혀보세요!\n\n퀴즈는 언제든 재도전할 수 있다는 점도 잊지 마세요!"), await this.waitForEvent({
                        delay: 5e3
                    }), !this.playIntro))
                }
                async quizStart(t) {
                    var e, i, s, n, a, o, r, l, c, u, d, m;
                    let {
                        quizIndex: p
                    } = t;
                    if (!this.board || !this.descriptionText) return;
                    let g = this.quizzes[p];
                    this.descriptionText.setText("[문제 ".concat(p + 1, "]\n").concat(g.quiz)).setOrigin(.5, 0).setStyle({
                        align: "left",
                        fontSize: "18px"
                    }).setVisible(!0), this.descriptionText.y = 0, this.board.setVisible(!0);
                    let v = this.makeOptions(g);
                    this.quizDuration = 18e3, this.setOptionSelectionEvent(v), this.makeDummyPlayersAnswer(g, this.quizDuration);
                    let b = () => this.resetTimersWhenTabActive();
                    document.addEventListener("visibilitychange", b), await this.waitForEvent({
                        delay: this.quizDuration - 5e3
                    }), this.quizDuration > 0 && (null === (n = this.timer) || void 0 === n || n.setVisible(!0).play("5-second-timer"), null === (a = this.timerSound) || void 0 === a || a.play(), await this.waitForEvent({
                        delay: 5e3
                    }), null === (o = this.timer) || void 0 === o || o.setVisible(!1)), document.removeEventListener("visibilitychange", b), this.timerEvents = [], null === (e = this.skipToNextQuizButton) || void 0 === e || e.setVisible(!1), this.disableOptionText(v);
                    let f = this.players[this.localPlayerIndex].currentSelectedOption,
                        x = g.answer;
                    if (h.state.isLoggedIn) {
                        let {
                            correct: t,
                            answer: e,
                            validCode: i
                        } = await this.checkAnswer({
                            quizNumber: g.number,
                            mySelection: f
                        });
                        x = Number(e), h.setters.setCashPaymentValidCode(i)
                    }
                    null === (i = this.problemAnswerContainer) || void 0 === i || i.remove(this.descriptionText);
                    let y = null === (s = g.options.find(t => {
                        let {
                            number: e
                        } = t;
                        return e === x
                    })) || void 0 === s ? void 0 : s.option;
                    this.descriptionText.setText("[정 답] 정답은 ".concat(y)).setStyle({
                        fontSize: "20px"
                    }).setVisible(!0), this.descriptionText.y = 130, this.players.forEach(t => {
                        var e, i;
                        let {
                            currentSelectedOption: s
                        } = t;
                        null !== s && ("OX" === g.quizType ? null === (e = t.answerSign) || void 0 === e || e.setFrame(s).setVisible(!0) : null === (i = t.answerSign) || void 0 === i || i.setFrame(s + 2).setVisible(!0))
                    }), await this.waitForEvent({
                        delay: 3e3
                    }), this.board.setVisible(!1), this.descriptionText.setVisible(!1), this.players.forEach(t => {
                        var e, i, s;
                        let {
                            currentSelectedOption: n
                        } = t;
                        n === x ? (t.score++, null === (e = t.scoreText) || void 0 === e || e.setFrame(t.score), null === (i = t.smallO) || void 0 === i || i.setVisible(!0).play("small-o")) : null === (s = t.smallX) || void 0 === s || s.setVisible(!0).play("small-x")
                    });
                    let w = x === f;
                    return w ? (null === (r = this.bigO) || void 0 === r || r.setVisible(!0), null === (l = this.bigO) || void 0 === l || l.play("big-o"), null === (c = this.correctSound) || void 0 === c || c.play()) : (null === (u = this.bigX) || void 0 === u || u.setVisible(!0), null === (d = this.bigX) || void 0 === d || d.play("big-x"), null === (m = this.incorrectSound) || void 0 === m || m.play()), await this.waitForEvent({
                        delay: 2e3
                    }), this.players.forEach(t => {
                        var e;
                        null === (e = t.answerSign) || void 0 === e || e.setFrame(0).setVisible(!1), t.currentSelectedOption = null
                    }), await this.waitForEvent({
                        delay: 3e3
                    }), w
                }
                async incorrectAnswer() {
                    this.descriptionText && this.board && this.restartButton && (this.descriptionText.setText("오답입니다.\n\n재시작 버튼을 누르면 퀴즈가 다시 시작됩니다.\n퀴즈는 3문제 정답을 모두 맞힐 때까지 계속 도전할 수 있습니다!").setStyle({
                        align: "center"
                    }).setVisible(!0), this.descriptionText.y = 50, this.board.setVisible(!0), this.restartButton.setVisible(!0))
                }
                skipIntro() {
                    this.playIntro = !1, this.gameStart()
                }
                onClickRestart() {
                    let t = this.players.map(t => ({ ...t,
                        score: 0,
                        currentSelectedOption: null,
                        avatar: null,
                        answerSign: null,
                        smallO: null,
                        smallX: null,
                        scoreText: null
                    }));
                    this.scene.restart({
                        players: t,
                        localPlayerIndex: this.localPlayerIndex,
                        playIntro: !1
                    })
                }
                async gameEnd() {
                    this.scene.start("result")
                }
                makeOptions(t) {
                    if (!this.descriptionText) return [];
                    let e = this.descriptionText.displayHeight + 20;
                    this.problemAnswerContainer = this.add.container(0, 0).add(this.descriptionText);
                    let i = this.add.container(0, 0),
                        s = t.options.map((s, n) => {
                            let a = this.add.text(0, e + 50 * Math.floor(n / 2), "[".concat(n + 1, "] ").concat(s.option), {
                                    fontFamily: "DungGeunMo",
                                    fontSize: "20px",
                                    color: "#000"
                                }),
                                o = new Phaser.Geom.Rectangle(-20, -20, a.width + 40, a.height + 40);
                            if (a.setInteractive({
                                    useHandCursor: !0,
                                    setTopOnly: !0,
                                    hitArea: o,
                                    hitAreaCallback: Phaser.Geom.Rectangle.Contains
                                }), i.add(a), n === t.options.length - 1) {
                                let t = Math.max(200, ...i.list.map((t, e) => e % 2 == 1 ? 0 : t.width));
                                i.list.forEach((e, i) => {
                                    i % 2 == 1 && (e.x = t + 10)
                                })
                            }
                            return {
                                optionText: a,
                                value: s.number
                            }
                        });
                    return this.problemAnswerContainer.add(i), this.setContainerVerticalCenter(this.problemAnswerContainer), this.setContainerHorizontalCenter(i), s
                }
                setOptionSelectionEvent(t) {
                    let e = this.players[this.localPlayerIndex],
                        i = (t, i) => {
                            var s;
                            e.currentSelectedOption !== i && (t.setColor("mediumblue"), null === (s = this.mouseOverSound) || void 0 === s || s.play())
                        },
                        s = (t, i) => {
                            e.currentSelectedOption !== i && t.setColor("black")
                        },
                        n = (i, s) => {
                            var n, a, o;
                            i.setColor("crimson"), e.currentSelectedOption = s, null === (n = e.answerSign) || void 0 === n || n.setVisible(!0), null === (a = this.mouseDownSound) || void 0 === a || a.play(), null === (o = this.skipToNextQuizButton) || void 0 === o || o.setVisible(!0), t.forEach(t => {
                                let {
                                    value: e,
                                    optionText: i
                                } = t;
                                e !== s && i.setColor("black")
                            })
                        };
                    t.forEach((t, e) => {
                        var a;
                        if (!this.descriptionText) return;
                        let {
                            optionText: o,
                            value: r
                        } = t;
                        o.setVisible(!0), o.setColor("black"), o.on("pointerover", () => i(o, r)), o.on("pointerout", () => s(o, r)), o.on("pointerdown", () => n(o, r)), null === (a = this.input.keyboard) || void 0 === a || a.on("keydown-F".concat(e + 1), t => {
                            n(o, r)
                        })
                    });
                    let a = t => {
                            var e;
                            (0, v.t)() || t.setFrame(3), null === (e = this.mouseOverSound) || void 0 === e || e.play()
                        },
                        o = t => {
                            (0, v.t)() || t.setFrame(0)
                        },
                        r = (e, i) => {
                            (0, v.t)() || e.setFrame(1);
                            let s = t[i];
                            n(s.optionText, s.value)
                        },
                        l = 4 === t.length,
                        c = l ? this.choice4Board : this.choice2Board,
                        h = l ? this.choiceNumbers : this.choiceOX;
                    null == c || c.setVisible(!0), h.forEach((t, e) => {
                        t.setVisible(!0), t.on("pointerover", () => a(t)), t.on("pointerup", () => a(t)), t.on("pointerout", () => o(t)), t.on("pointerdown", () => r(t, e))
                    })
                }
                disableOptionText(t) {
                    var e, i, s;
                    null === (e = this.descriptionText) || void 0 === e || e.setVisible(!1), t.forEach((t, e) => {
                        var i;
                        let {
                            optionText: s
                        } = t;
                        s.setVisible(!1), null === (i = this.input.keyboard) || void 0 === i || i.off("keydown-F".concat(e + 1))
                    }), null === (i = this.choice4Board) || void 0 === i || i.setVisible(!1), null === (s = this.choice2Board) || void 0 === s || s.setVisible(!1), [...this.choiceOX, ...this.choiceNumbers].forEach(t => {
                        t.setVisible(!1)
                    })
                }
                makeDummyPlayersAnswer(t, e) {
                    return Promise.all(this.players.map((i, s) => new Promise(async s => {
                        var n;
                        if (!1 === i.dummy) return s({});
                        await this.waitForEvent({
                            delay: Math.floor(Math.random() * e)
                        });
                        let a = t.options.length;
                        null === (n = i.answerSign) || void 0 === n || n.setFrame(0).setVisible(!0), i.currentSelectedOption = t.options[Math.floor(Math.random() * a)].number, s({})
                    })))
                }
                async checkAnswer(t) {
                    let {
                        quizNumber: e,
                        mySelection: i
                    } = t;
                    return new Promise(t => {
                        l.once("response-".concat(r.CHECK_ANSWER), e => {
                            let {
                                correct: i,
                                answer: s,
                                validCode: n
                            } = e;
                            t({
                                correct: i,
                                answer: s,
                                validCode: n
                            })
                        }), l.emit(r.CHECK_ANSWER, {
                            number: e,
                            answer: i
                        })
                    })
                }
                setContainerVerticalCenter(t) {
                    let e = 1 / 0,
                        i = -1 / 0;
                    t.list.forEach(t => {
                        if (t instanceof Phaser.GameObjects.Container) t.list.forEach(t => {
                            let s = t.y,
                                n = t.y + t.height;
                            e = Math.min(e, s), i = Math.max(i, n)
                        });
                        else {
                            let s = t.y,
                                n = t.y + t.height;
                            e = Math.min(e, s), i = Math.max(i, n)
                        }
                    });
                    let s = i - e;
                    t.y = 140 - s / 2
                }
                setContainerHorizontalCenter(t) {
                    let e = 1 / 0,
                        i = -1 / 0;
                    t.list.forEach(t => {
                        let s = t.x,
                            n = t.x + t.width;
                        e = Math.min(e, s), i = Math.max(i, n)
                    });
                    let s = i - e;
                    t.x = 390 - s / 2
                }
                async waitForEvent(t) {
                    let {
                        delay: e
                    } = t;
                    return new Promise(t => {
                        let i = this.time.addEvent({
                            delay: e,
                            callback: () => {
                                t(), i.remove()
                            },
                            callbackScope: this,
                            repeat: 0
                        });
                        this.timerEvents.push(i)
                    })
                }
                resetTimersWhenTabActive() {
                    if (document.hidden) this.inactiveTime = Date.now();
                    else {
                        let t = Date.now() - this.inactiveTime;
                        this.quizDuration = this.quizDuration - t, this.timerEvents.forEach(e => {
                            e.reset({
                                delay: e.delay - t,
                                callback: e.callback,
                                callbackScope: e.callbackScope,
                                loop: e.loop
                            })
                        })
                    }
                }
                skipToNextQuiz() {
                    var t;
                    null === (t = this.skipToNextQuizButton) || void 0 === t || t.setVisible(!1), this.quizDuration = 0, this.timerEvents.forEach(t => {
                        t.reset({
                            delay: 0,
                            callback: t.callback,
                            callbackScope: t.callbackScope,
                            loop: t.loop
                        })
                    })
                }
                shutdown() {
                    super.shutdown(), l.off("response-".concat(r.QUIZ_RESTART))
                }
                constructor() {
                    super("game"), this.quizzes = [], this.board = null, this.descriptionText = null, this.choice4Board = null, this.choice2Board = null, this.choiceNumbers = [], this.choiceOX = [], this.bigO = null, this.bigX = null, this.timer = null, this.localPlayerIndex = 0, this.players = [], this.mouseOverSound = null, this.mouseDownSound = null, this.timerSound = null, this.correctSound = null, this.incorrectSound = null, this.introSkipButton = null, this.restartButton = null, this.skipToNextQuizButton = null, this.playIntro = !0, this.timerEvents = [], this.inactiveTime = 0, this.quizDuration = 18e3, this.problemAnswerContainer = null
                }
            }
            var _ = i(9745);

            function T() {
                try {
                    var t, e, i, s, n;
                    let {
                        local_session_props: a = {}
                    } = null !== (n = null === (s = window) || void 0 === s ? void 0 : null === (i = s.inface) || void 0 === i ? void 0 : null === (e = i.auth) || void 0 === e ? void 0 : null === (t = e._user) || void 0 === t ? void 0 : t._profile) && void 0 !== n ? n : {}, {
                        identity_sn: o = -1,
                        main_atl: r = -1
                    } = a;
                    return {
                        identity_sn: o,
                        main_atl: r,
                        a2sUserInfoLog: "".concat(-1 !== o ? o : "").concat(-1 !== r ? ",ATL".concat(r) : "")
                    }
                } catch (t) {
                    return {
                        identity_sn: "",
                        main_atl: "",
                        a2sUserInfoLog: ""
                    }
                }
            }
            var E = i(1108);
            class k extends f {
                create() {
                    l.once("response-".concat(r.HANDLE_CASH_ERROR), () => {
                        super.resetGame()
                    });
                    let {
                        isLoggedIn: t,
                        isGiveCash: e,
                        cashPaymentValidCode: i
                    } = h.state, {
                        identity_sn: s,
                        a2sUserInfoLog: n
                    } = T();
                    (0, E.P)().quizSolveCompleteButton(), t && e ? 1 === i ? (this.add.image(0, 0, "result-cash-background").setOrigin(0, 0), (0, _.D)("Quiz", {
                        name: "Quiz_3_cash",
                        value: "".concat(s),
                        pagecode: "65478"
                    }), (0, E.P)().event1QuizGiveCashButton()) : l.emit(r.HANDLE_CASH_ERROR, {
                        errorCode: i
                    }) : ((0, _.D)("Quiz", {
                        name: "Quiz_3",
                        value: n,
                        pagecode: "65478"
                    }), this.add.image(0, 0, "result-no-cash-background").setOrigin(0, 0)), super.create()
                }
                constructor() {
                    super("result")
                }
            }
            var C = i(3708),
                O = i(4518),
                z = i(218),
                I = i.n(z),
                B = i(4202);
            let j = "brain-quiz-container",
                Q = {
                    physics: {
                        default: "arcade"
                    },
                    input: {
                        mouse: {
                            preventDefaultWheel: !1
                        },
                        touch: {
                            capture: !1
                        },
                        windowEvents: !1
                    },
                    type: Phaser.AUTO,
                    width: 780,
                    height: 474,
                    parent: j,
                    banner: !1,
                    scene: [o, u, w, S, k]
                };

            function A(t) {
                let {
                    className: e
                } = t;
                return ! function() {
                    let {
                        renderRecaptcha: t
                    } = (0, B.Z1)({
                        containerID: "google-recaptcha"
                    });
                    (0, n.useEffect)(() => {
                        function e() {
                            l.emit("response-".concat(r.MODAL_CLOSE))
                        }
                        return l.on(r.QUIZ_START, async () => {
                            (0, _.D)("Quiz", {
                                name: "Start",
                                pagecode: "65478"
                            }), (0, E.P)().quizStartButton();
                            try {
                                var t;
                                if (I()().isAfter("2024-07-01 00:00:00")) return await (0, C.OM)({
                                    content: "추억의 퀴즈퀴즈의 귀환 이벤트 기간이 종료되었습니다."
                                });
                                let i = inface.auth.isSignedIn();
                                if (!i) {
                                    let {
                                        confirm: t
                                    } = await (0, C.OM)({
                                        content: (0, s.jsxs)("div", {
                                            children: ["본인확인이 완료된 넥슨ID로 로그인하여 이벤트에 참여하시면 넥슨캐시 보상을 받을 수 있습니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                                children: "[퀴즈 풀기]"
                                            }), " 버튼을 클릭하여 로그인하지 않고", (0, s.jsx)("br", {}), "퀴즈를 풀 수 있습니다."]
                                        }),
                                        buttons: [(0, s.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Quiz",
                                            "data-a2s-option-name": "Non-Login_Start",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, s.jsx)(C.f1, {}, "btn-start")
                                        }, "a2s-1"), (0, s.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Quiz",
                                            "data-a2s-option-name": "Non-Login_Login",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, s.jsx)(C.TX, {}, "btn-login")
                                        }, "a2s-2")]
                                    });
                                    if (!t) return e();
                                    return l.emit("response-".concat(r.QUIZ_START), {
                                        isLoggedIn: i,
                                        isGiveCash: !1
                                    })
                                }
                                let n = await inface.auth.getProfile(),
                                    a = await (0, O.a)().checkRemainingDailyCash(),
                                    {
                                        data: o,
                                        code: c
                                    } = null == a ? void 0 : a.data;
                                if (2013 === c) return await (0, C.OM)({
                                    content: "추억의 퀴즈퀴즈의 귀환 이벤트 기간이 종료되었습니다."
                                }), e();
                                let {
                                    dayNexonCash: h
                                } = o;
                                if (!h) {
                                    let {
                                        confirm: t
                                    } = await (0, C.OM)({
                                        content: (0, s.jsxs)("div", {
                                            children: ["오늘 준비된 넥슨캐시가 모두 소진 되어", (0, s.jsx)("br", {}), "보상 지급이 마감되었습니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "이벤트 기간 동안 매일 오전 0시에 넥슨캐시 지급 금액이 갱신되니 다시 도전해보세요!", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                                children: "[퀴즈 풀기]"
                                            }), " 버튼을 클릭하여 보상 획득 없이", (0, s.jsx)("br", {}), "퀴즈를 풀 수 있습니다."]
                                        }),
                                        buttons: (0, s.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Quiz",
                                            "data-a2s-option-name": "Quiz_Start_Closing",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, s.jsx)(C.f1, {})
                                        })
                                    });
                                    if (!t) return e();
                                    return l.emit("response-".concat(r.QUIZ_START), {
                                        isLoggedIn: i,
                                        isGiveCash: !1,
                                        profile: n.local_profile_props
                                    })
                                }
                                if (1 === n.local_session_props.main_atl) {
                                    let {
                                        confirm: t
                                    } = await (0, C.OM)({
                                        content: (0, s.jsxs)("div", {
                                            children: ["본인확인이 완료되지 않은 넥슨ID입니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), " 본인확인이 완료된 넥슨ID로 로그인하여 이벤트에 참여하시면 넥슨캐시 보상을 받을 수 있습니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                                children: "[퀴즈 풀기]"
                                            }), " 버튼을 클릭하여 보상 획득 없이", (0, s.jsx)("br", {}), "퀴즈를 풀 수 있습니다."]
                                        }),
                                        buttons: [(0, s.jsx)(C.f1, {}, "btn-start"), (0, s.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Quiz",
                                            "data-a2s-option-name": "Identity_Verification",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, s.jsx)(C.Ep, {}, "btn-verify")
                                        }, "a2s-quiz-identity-verification")]
                                    });
                                    if (!t) return e();
                                    return l.emit("response-".concat(r.QUIZ_START), {
                                        isLoggedIn: i,
                                        isGiveCash: !1,
                                        profile: n.local_profile_props
                                    })
                                }
                                let u = await (0, O.a)().checkUserCashAcquisition(),
                                    {
                                        attendEvent: d
                                    } = null == u ? void 0 : null === (t = u.data) || void 0 === t ? void 0 : t.data;
                                if (d) {
                                    let {
                                        confirm: t
                                    } = await (0, C.OM)({
                                        content: (0, s.jsxs)("div", {
                                            children: ["이미 동일 명의 넥슨ID로", (0, s.jsx)("br", {}), "넥슨캐시 보상을 획득하셨습니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                                children: "[퀴즈 풀기]"
                                            }), " 버튼을 클릭하여 보상 획득 없이", (0, s.jsx)("br", {}), "퀴즈를 풀 수 있습니다."]
                                        }),
                                        buttons: (0, s.jsx)(_.Z, {
                                            "data-a2s-web-obj": "Quiz",
                                            "data-a2s-option-name": "Quiz_Start_Done",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, s.jsx)(C.f1, {})
                                        })
                                    });
                                    if (!t) return e();
                                    return l.emit("response-".concat(r.QUIZ_START), {
                                        isLoggedIn: i,
                                        isGiveCash: !1,
                                        profile: n.local_profile_props
                                    })
                                } {
                                    let {
                                        login_id: t
                                    } = n.local_profile_props, {
                                        confirm: a
                                    } = await (0, C.OM)({
                                        content: (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)(C.Hk, {
                                                account: t,
                                                userProfile: n
                                            }), "현재 로그인한 넥슨ID로 이벤트에 참여하며", (0, s.jsx)("br", {}), "퀴즈 성공 시 해당 넥슨ID로 넥슨캐시가 즉시 지급됩니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "넥슨캐시 보상은 넥슨ID 명의 당 1회만", (0, s.jsx)("br", {}), "획득할 수 있습니다."]
                                        }),
                                        buttons: [(0, s.jsx)(C.Lw, {}, "btn-cancel"), (0, s.jsx)(C.pu, {}, "btn-confirm")]
                                    });
                                    if (!a) return e();
                                    return l.emit("response-".concat(r.QUIZ_START), {
                                        isLoggedIn: i,
                                        isGiveCash: !0,
                                        profile: n.local_profile_props
                                    })
                                }
                            } catch (t) {
                                return (0, C.OM)({
                                    content: (0, s.jsx)("div", {
                                        children: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
                                    })
                                }), e()
                            }
                        }), l.on(r.QUIZ_RESTART, async () => {
                            var t;
                            let e = await (0, O.a)().checkRemainingDailyCash(),
                                {
                                    dayNexonCash: i
                                } = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.data;
                            if (i) return l.emit("response-".concat(r.QUIZ_RESTART), {
                                giveCash: !0
                            }); {
                                let {
                                    confirm: t
                                } = await (0, C.OM)({
                                    content: (0, s.jsxs)("div", {
                                        children: ["오늘 준비된 넥슨캐시가 모두 소진 되어", (0, s.jsx)("br", {}), "보상 지급이 마감되었습니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "이벤트 기간 동안 매일 오전 0시에 넥슨캐시 지급 금액이 갱신되니 다시 도전해보세요!", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                            children: "[퀴즈 풀기]"
                                        }), " 버튼을 클릭하여 보상 획득 없이", (0, s.jsx)("br", {}), "퀴즈를 풀 수 있습니다."]
                                    }),
                                    buttons: (0, s.jsx)(_.Z, {
                                        "data-a2s-web-obj": "Quiz",
                                        "data-a2s-option-name": "Quiz_Start_Closing",
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, s.jsx)(C.f1, {})
                                    })
                                });
                                return t ? l.emit("response-".concat(r.QUIZ_RESTART), {
                                    giveCash: !1
                                }) : l.emit("response-".concat(r.QUIZ_RESET))
                            }
                        }), l.on(r.GET_QUIZZES, async e => {
                            let {
                                isGiveCash: i
                            } = e;
                            try {
                                var n, a;
                                let {
                                    a2sUserInfoLog: e
                                } = T();
                                (0, _.D)("Quiz", {
                                    name: "Quiz_Start",
                                    value: e,
                                    pagecode: "65478"
                                });
                                let s = sessionStorage.getItem("token"),
                                    o = !1;
                                if (s && i || !i) {
                                    let t = await (0, O.a)().getQuizWithLogin({
                                            token: s
                                        }),
                                        {
                                            code: e
                                        } = null == t ? void 0 : t.data;
                                    if (2014 === e || 2015 === e) sessionStorage.removeItem("token"), o = !0;
                                    else if (0 === e) {
                                        let {
                                            quizList: e
                                        } = null == t ? void 0 : null === (n = t.data) || void 0 === n ? void 0 : n.data;
                                        return l.emit("response-".concat(r.GET_QUIZZES), {
                                            quizzes: e
                                        })
                                    } else throw "error"
                                }
                                if (!s && i || o) {
                                    let e = await t();
                                    sessionStorage.setItem("token", e);
                                    let i = await (0, O.a)().getQuizWithLogin({
                                            token: e
                                        }),
                                        {
                                            quizList: s
                                        } = null == i ? void 0 : null === (a = i.data) || void 0 === a ? void 0 : a.data;
                                    l.emit("response-".concat(r.GET_QUIZZES), {
                                        quizzes: s
                                    })
                                }
                            } catch (t) {
                                await (0, C.OM)({
                                    content: (0, s.jsx)("div", {
                                        children: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
                                    })
                                }), l.emit("response-".concat(r.QUIZ_RESET))
                            }
                        }), l.on(r.GET_QUIZZES_NOT_LOGGED_IN, async () => {
                            try {
                                var t;
                                let {
                                    a2sUserInfoLog: e
                                } = T();
                                (0, _.D)("Quiz", {
                                    name: "Quiz_Start",
                                    value: e,
                                    pagecode: "65478"
                                });
                                let i = await (0, O.a)().getQuizWithoutLogin(),
                                    {
                                        quizList: s
                                    } = null == i ? void 0 : null === (t = i.data) || void 0 === t ? void 0 : t.data;
                                l.emit("response-".concat(r.GET_QUIZZES_NOT_LOGGED_IN), {
                                    quizzes: s
                                })
                            } catch (t) {
                                return await (0, C.OM)({
                                    content: (0, s.jsx)("div", {
                                        children: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
                                    })
                                })
                            }
                        }), l.on(r.CHECK_ANSWER, async t => {
                            let {
                                number: e,
                                answer: i
                            } = t;
                            try {
                                let t = await (0, O.a)().checkQuizAnswer({
                                        answer: null === i ? "0" : i,
                                        number: e
                                    }),
                                    {
                                        data: n,
                                        code: a
                                    } = null == t ? void 0 : t.data;
                                if (2007 === a) return await (0, C.OM)({
                                    content: (0, s.jsxs)("div", {
                                        children: ["퀴즈 시작 후 일정 시간 동안 페이지를 벗어나 퀴즈가 종료되었습니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "퀴즈 START 버튼을 눌러 다시 퀴즈에 도전해주세요!"]
                                    })
                                }), l.emit("response-".concat(r.HANDLE_QUIZ_TIME_OUT));
                                let {
                                    correct: o,
                                    answer: c,
                                    validCode: h
                                } = n;
                                l.emit("response-".concat(r.CHECK_ANSWER), {
                                    correct: o,
                                    answer: c,
                                    validCode: h
                                })
                            } catch (t) {
                                return await (0, C.OM)({
                                    content: (0, s.jsx)("div", {
                                        children: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
                                    })
                                })
                            }
                        }), l.on(r.HANDLE_CASH_ERROR, async t => {
                            let {
                                errorCode: e
                            } = t;
                            return 4 === e ? ((0, _.D)("Quiz", {
                                name: "Closing_Alert",
                                pagecode: "65478"
                            }), await (0, C.OM)({
                                content: (0, s.jsxs)("div", {
                                    children: ["퀴즈 풀이 중 오늘 준비된 넥슨캐시가 모두 소진되어 보상 지급이 마감되었습니다.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "이벤트 기간 동안 매일 오전 0시에 넥슨캐시 지급 금액이 갱신되니 다시 도전해보세요!"]
                                })
                            })) : ((0, _.D)("Quiz", {
                                name: "Error_Alert",
                                pagecode: "65478"
                            }), await (0, C.OM)({
                                content: (0, s.jsxs)("div", {
                                    children: ["넥슨캐시 지급 도중 오류가 발생했습니다.", (0, s.jsx)("br", {}), "잠시 후 다시 시도해 주세요.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "이벤트 관련 문의는", " ", (0, s.jsx)("a", {
                                        style: {
                                            color: "#FFD600"
                                        },
                                        href: "https://cs.nexon.com/HelpBoard/Nexon?gamecode=345&category=74997&direct=direct",
                                        target: "_blank",
                                        children: "(▶게임문의 외 > 넥슨 30주년 이벤트 고객센터)"
                                    }), "를 이용해주시기 바랍니다."]
                                })
                            })), l.emit("response-".concat(r.HANDLE_CASH_ERROR))
                        }), () => {
                            l.off(r.QUIZ_START), l.off(r.QUIZ_RESTART), l.off(r.GET_QUIZZES), l.off(r.GET_QUIZZES_NOT_LOGGED_IN), l.off(r.CHECK_ANSWER), l.off(r.HANDLE_CASH_ERROR)
                        }
                    }, [])
                }(), (0, n.useEffect)(() => {
                    let t = null,
                        e = setTimeout(() => {
                            (t = new Phaser.Game(Q)).scene.start("preloader")
                        }, 1e3);
                    return () => {
                        clearTimeout(e), null == t || t.destroy(!0)
                    }
                }, []), (0, s.jsx)("div", {
                    id: j,
                    className: "".concat(e, " ").concat(g().container)
                })
            }
        },
        1097: function(t, e, i) {
            "use strict";
            i.d(e, {
                t: function() {
                    return o
                }
            });
            var s = i(6836),
                n = i.n(s);
            let a = () => navigator.maxTouchPoints > 0,
                o = () => {
                    try {
                        let t = new(n())().getDevice().type;
                        if (/mobile|tablet/.test(t)) return a();
                        return !1
                    } catch (t) {
                        return console.warn(t), !1
                    }
                }
        },
        4290: function(t) {
            t.exports = {
                container: "BrainQuiz_container__Yk_j9",
                quizMobileContainer: "BrainQuiz_quizMobileContainer__cypEW",
                canvasMobileContainer: "BrainQuiz_canvasMobileContainer__Zx30_"
            }
        }
    }
]);