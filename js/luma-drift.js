(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // content.ts
  var GARDENS = [
    { id: "wander", label: "Wander", detail: "a little of everything", tone: "sun" },
    { id: "colors", label: "Colors", detail: "red, pink, teal, brown", tone: "coral" },
    { id: "numbers", label: "Numbers", detail: "count to ten, find up to twenty", tone: "sky" },
    { id: "shapes", label: "Shapes", detail: "circle, star, hexagon, moon", tone: "lilac" },
    { id: "letters", label: "Letters", detail: "A to Z, big and small", tone: "leaf" }
  ];
  var PRAISE = ["Yes!", "Lovely!", "Great job!", "Brilliant!", "Super!", "Yay!", "You got it!", "Wonderful!", "Shiny!", "Well done!"];
  var MISS = ["Try again!", "Nearly!", "Almost!", "Have another go!", "So close!", "Oops, try again!"];
  var LESSONS = ["colors", "numbers", "shapes", "letters"];
  var COLORS = [
    { id: "red", name: "red", tone: "coral", hex: "#ff4d4d" },
    { id: "yellow", name: "yellow", tone: "sun", hex: "#ffd23f" },
    { id: "blue", name: "blue", tone: "sky", hex: "#3d8bff" },
    { id: "green", name: "green", tone: "leaf", hex: "#4cc94c" },
    { id: "purple", name: "purple", tone: "lilac", hex: "#9b5cff" },
    { id: "orange", name: "orange", tone: "peach", hex: "#ff8a2a" },
    { id: "pink", name: "pink", tone: "coral", hex: "#ff8fcf" },
    { id: "brown", name: "brown", tone: "peach", hex: "#9a5b34" },
    { id: "teal", name: "teal", tone: "sky", hex: "#1fc7b5" },
    { id: "white", name: "white", tone: "cream", hex: "#fbf7f0" },
    { id: "black", name: "black", tone: "cream", hex: "#23202a" }
  ];
  var SHAPES = [
    { id: "circle", name: "circle" },
    { id: "square", name: "square" },
    { id: "triangle", name: "triangle" },
    { id: "star", name: "star" },
    { id: "heart", name: "heart" },
    { id: "diamond", name: "diamond" },
    { id: "oval", name: "oval" },
    { id: "rectangle", name: "rectangle" },
    { id: "moon", name: "moon" },
    { id: "pentagon", name: "pentagon" },
    { id: "hexagon", name: "hexagon" },
    { id: "octagon", name: "octagon" }
  ];
  var LETTERS = [
    { ch: "A", word: "ant" },
    { ch: "B", word: "bird" },
    { ch: "C", word: "cat" },
    { ch: "D", word: "dog" },
    { ch: "E", word: "egg" },
    { ch: "F", word: "fish" },
    { ch: "G", word: "goat" },
    { ch: "H", word: "hat" },
    { ch: "I", word: "igloo" },
    { ch: "J", word: "jam" },
    { ch: "K", word: "kite" },
    { ch: "L", word: "leaf" },
    { ch: "M", word: "moon" },
    { ch: "N", word: "nest" },
    { ch: "O", word: "owl" },
    { ch: "P", word: "pig" },
    { ch: "Q", word: "queen" },
    { ch: "R", word: "rain" },
    { ch: "S", word: "sun" },
    { ch: "T", word: "tree" },
    { ch: "U", word: "umbrella" },
    { ch: "V", word: "van" },
    { ch: "W", word: "wave" },
    { ch: "X", word: "xylophone" },
    { ch: "Y", word: "yarn" },
    { ch: "Z", word: "zebra" }
  ];
  var LOOKALIKE = {
    b: ["d", "p", "q"],
    d: ["b", "q", "p"],
    p: ["q", "b", "d"],
    q: ["p", "d", "b"],
    m: ["n", "w"],
    n: ["m", "u", "h"],
    u: ["n", "v"],
    w: ["m", "v"],
    i: ["l", "j"],
    l: ["i", "t"],
    h: ["n", "b"],
    a: ["o", "e"],
    e: ["a", "c"],
    c: ["e", "o"]
  };
  var WORDS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty"
  ];
  var REALM_SKY = {
    colors: {
      deep: [42, 16, 28],
      washes: [
        [255, 107, 107],
        [255, 200, 87],
        [255, 154, 98]
      ]
    },
    numbers: {
      deep: [10, 32, 48],
      washes: [
        [92, 200, 255],
        [125, 222, 122],
        [255, 244, 228]
      ]
    },
    shapes: {
      deep: [32, 16, 52],
      washes: [
        [201, 160, 255],
        [255, 200, 87],
        [255, 143, 184]
      ]
    },
    letters: {
      deep: [14, 38, 30],
      washes: [
        [125, 222, 122],
        [255, 200, 87],
        [92, 200, 255]
      ]
    }
  };
  function sample(arr, n) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const swap = copy[i];
      copy[i] = copy[j];
      copy[j] = swap;
    }
    return copy.slice(0, n);
  }
  function shuffle(arr) {
    return sample(arr, arr.length);
  }
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function bubbleCount(level) {
    return level < 2 ? 5 : level < 4 ? 6 : level < 6 ? 7 : 8;
  }
  function build(lesson, level, count) {
    var _a;
    if (lesson === "colors") {
      const pool2 = level < 1 ? COLORS.slice(0, 6) : COLORS;
      const picks = sample(pool2, Math.min(count, pool2.length));
      const answer2 = pick(picks);
      return {
        lesson,
        kicker: "Color",
        title: answer2.name,
        tone: answer2.tone,
        hint: `find the ${answer2.name} bubble`,
        answerKey: answer2.id,
        targets: shuffle(picks.map((c) => ({ kind: "color", hex: c.hex, correct: c.id === answer2.id })))
      };
    }
    if (lesson === "numbers") {
      const numeral = level >= 3 && Math.random() < 0.5;
      const max = numeral ? level >= 4 ? 20 : 15 : level < 1 ? 5 : level < 2 ? 7 : 10;
      const answer2 = 1 + Math.floor(Math.random() * max);
      const all = Array.from({ length: max }, (_, i) => i + 1).filter((n) => n !== answer2);
      const near = all.filter((n) => Math.abs(n - answer2) <= (numeral ? 4 : 3));
      const need2 = count - 1;
      const rest = sample(near, Math.min(need2, near.length));
      if (rest.length < need2) rest.push(...sample(all.filter((n) => !rest.includes(n)), need2 - rest.length));
      const nums = shuffle([answer2, ...rest]);
      return {
        lesson,
        kicker: numeral ? "Find the number" : "How many dots?",
        title: String(answer2),
        tone: numeral ? "sky" : "cream",
        hint: numeral ? `find the number ${WORDS[answer2]}` : `find the bubble with ${WORDS[answer2]} ${answer2 === 1 ? "dot" : "dots"}`,
        answerKey: `${numeral ? "f" : "n"}${answer2}`,
        targets: nums.map((n) => ({ kind: "number", n, numeral, correct: n === answer2 }))
      };
    }
    if (lesson === "shapes") {
      const pool2 = level < 1 ? SHAPES.slice(0, 6) : level < 2 ? SHAPES.slice(0, 9) : SHAPES;
      const picks = sample(pool2, Math.min(count, pool2.length));
      const answer2 = pick(picks);
      return {
        lesson,
        kicker: "Shape",
        title: answer2.name,
        tone: "cream",
        hint: `find the ${answer2.name}`,
        answerKey: answer2.id,
        targets: shuffle(picks.map((s) => ({ kind: "shape", shape: s.id, correct: s.id === answer2.id })))
      };
    }
    const pool = level < 1 ? LETTERS.slice(0, 13) : LETTERS;
    const answer = pick(pool);
    const small = level >= 2 && Math.random() < (level >= 3 ? 0.6 : 0.35);
    const index = LETTERS.findIndex((l) => l.ch === answer.ch);
    const need = count - 1;
    let chars;
    if (small) {
      const lower = answer.ch.toLowerCase();
      const tricky = sample((_a = LOOKALIKE[lower]) != null ? _a : [], Math.min(2, need));
      const near = LETTERS.map((l) => l.ch.toLowerCase()).filter(
        (c, i) => c !== lower && !tricky.includes(c) && Math.abs(i - index) <= 6
      );
      chars = [...tricky, ...sample(near, need - tricky.length)];
    } else {
      const near = LETTERS.filter((_, i) => i !== index && Math.abs(i - index) <= 6).map((l) => l.ch);
      chars = sample(near, need);
    }
    const shown = small ? answer.ch.toLowerCase() : answer.ch;
    return {
      lesson,
      kicker: small ? "Small letter" : "Letter",
      title: small ? `${answer.ch}` : answer.ch,
      tone: small ? "leaf" : "cream",
      hint: small ? `find the small ${answer.ch}, like in ${answer.word}` : `find ${answer.ch}, like in ${answer.word}`,
      answerKey: shown,
      targets: shuffle([shown, ...chars]).map((ch) => ({ kind: "letter", ch, correct: ch === shown }))
    };
  }
  function makeRound(lesson, prevKey, level = 0, count = 4) {
    let round = build(lesson, level, count);
    for (let i = 0; i < 5 && round.answerKey === prevKey; i++) round = build(lesson, level, count);
    return round;
  }
  function dotPositions(n) {
    var _a;
    const DICE = {
      1: [[0, 0]],
      2: [[-1, -1], [1, 1]],
      3: [[-1, -1], [0, 0], [1, 1]],
      4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
      5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]]
    };
    if (n <= 5) return (_a = DICE[n]) != null ? _a : DICE[1];
    const pts = [];
    for (let i = 0; i < n; i++) {
      const row = i < 5 ? 0 : 1;
      const col = i % 5;
      pts.push([(col - 2) * 0.5, row === 0 ? -0.55 : 0.55]);
    }
    return pts;
  }

  // audio.ts
  function ctor() {
    if (typeof window === "undefined") return null;
    if (typeof AudioContext !== "undefined") return AudioContext;
    const legacy = window.webkitAudioContext;
    return legacy != null ? legacy : null;
  }
  function impulse(ctx, seconds, decay) {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      let lp = 0;
      for (let i = 0; i < length; i++) {
        const p = i / length;
        const env = Math.pow(1 - p, decay);
        const smooth = 0.25 + p * 0.7;
        lp += (Math.random() * 2 - 1 - lp) * (1 - smooth);
        data[i] = lp * env * (i < ctx.sampleRate * 6e-3 ? i / (ctx.sampleRate * 6e-3) : 1);
      }
    }
    return buffer;
  }
  function makePanner(ctx) {
    return typeof ctx.createStereoPanner === "function" ? ctx.createStereoPanner() : ctx.createGain();
  }
  function noiseBuffer(ctx, seconds) {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }
  function isIOS() {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent || "";
    return /iP(hone|ad|od)/.test(ua) || /Macintosh/.test(ua) && (navigator.maxTouchPoints || 0) > 1;
  }
  function silentWavUrl() {
    const rate = 8e3;
    const n = rate;
    const bytes = new Uint8Array(44 + n);
    const dv = new DataView(bytes.buffer);
    const str = (o, t) => {
      for (let i = 0; i < t.length; i++) bytes[o + i] = t.charCodeAt(i);
    };
    str(0, "RIFF");
    dv.setUint32(4, 36 + n, true);
    str(8, "WAVE");
    str(12, "fmt ");
    dv.setUint32(16, 16, true);
    dv.setUint16(20, 1, true);
    dv.setUint16(22, 1, true);
    dv.setUint32(24, rate, true);
    dv.setUint32(28, rate, true);
    dv.setUint16(32, 1, true);
    dv.setUint16(34, 8, true);
    str(36, "data");
    dv.setUint32(40, n, true);
    for (let i = 44; i < bytes.length; i++) bytes[i] = 128;
    let bin = "";
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return "data:audio/wav;base64," + btoa(bin);
  }
  var SoftAudio = class {
    constructor() {
      __publicField(this, "ctx", null);
      __publicField(this, "g", null);
      __publicField(this, "enabled", true);
      __publicField(this, "primed", false);
      __publicField(this, "hidden", false);
      __publicField(this, "keepAlive", null);
      __publicField(this, "keepAlivePlaying", false);
      __publicField(this, "keepAlivePending", false);
      // ---------------------------------------------------------------------------
      // Generative background music.
      // Slow chords from one of six progressions (each in its own key) crossfade into each other;
      // after a progression finishes, the next one is picked (nudged by the garden and level).
      // On top: occasional soft pentatonic melody notes, and now and then a breath of wind or a shimmer.
      // ---------------------------------------------------------------------------
      __publicField(this, "padNodes", null);
      __publicField(this, "padTimer", null);
      __publicField(this, "mood", { garden: 0, level: 0 });
      __publicField(this, "prog", 0);
      __publicField(this, "chordI", 0);
      __publicField(this, "nextChord", 0);
      __publicField(this, "nextNote", 0);
      __publicField(this, "nextTexture", 0);
    }
    /** Build the mixing graph on any context (a live one, or an offline one for testing). */
    attach(ctx, destination = ctx.destination) {
      const master = ctx.createGain();
      master.gain.value = this.enabled ? 1 : 0;
      const glue = ctx.createDynamicsCompressor();
      glue.threshold.value = -20;
      glue.knee.value = 14;
      glue.ratio.value = 3;
      glue.attack.value = 4e-3;
      glue.release.value = 0.25;
      const limiter = ctx.createDynamicsCompressor();
      limiter.threshold.value = -4;
      limiter.knee.value = 0;
      limiter.ratio.value = 20;
      limiter.attack.value = 1e-3;
      limiter.release.value = 0.12;
      const out = ctx.createGain();
      out.gain.value = 0.9;
      const bus = ctx.createGain();
      const music = ctx.createGain();
      const sfx = ctx.createGain();
      music.gain.value = 1;
      sfx.gain.value = 0.95;
      const send = ctx.createGain();
      send.gain.value = 1;
      const verb = ctx.createConvolver();
      verb.buffer = impulse(ctx, 2.6, 2.6);
      const wet = ctx.createGain();
      wet.gain.value = 0.42;
      sfx.connect(bus);
      music.connect(bus);
      send.connect(verb);
      verb.connect(wet);
      wet.connect(bus);
      music.connect(send);
      bus.connect(glue);
      glue.connect(limiter);
      limiter.connect(out);
      out.connect(master);
      master.connect(destination);
      this.g = { ctx, master, music, sfx, send, noise: noiseBuffer(ctx, 1) };
      return this.g;
    }
    /**
     * iOS only lets sound start inside a real tap. Call this from touch/click handlers.
     * It creates the audio engine on the first tap, plays one silent sample (the classic iOS unlock),
     * and resumes it if the system suspended it.
     */
    unlock() {
      try {
        const nav = navigator;
        if (nav.audioSession && nav.audioSession.type !== "playback") nav.audioSession.type = "playback";
      } catch (e) {
      }
      this.startKeepAlive();
      const Ctor = ctor();
      if (!Ctor) return;
      if (!this.ctx) {
        try {
          this.ctx = new Ctor({ latencyHint: "interactive" });
        } catch (e) {
          try {
            this.ctx = new Ctor();
          } catch (e2) {
            return;
          }
        }
        this.attach(this.ctx);
        this.startPad();
      }
      if (!this.primed || this.ctx.state !== "running") {
        try {
          const b = this.ctx.createBuffer(1, 1, 22050);
          const s = this.ctx.createBufferSource();
          s.buffer = b;
          s.connect(this.ctx.destination);
          s.start(0);
          this.primed = true;
        } catch (e) {
        }
      }
      if (!this.hidden && this.ctx.state !== "running") {
        try {
          void this.ctx.resume().catch(() => void 0);
        } catch (e) {
        }
      }
    }
    startKeepAlive() {
      if (!isIOS() || this.hidden || typeof Audio === "undefined") return;
      try {
        if (!this.keepAlive) {
          const el = new Audio();
          el.src = silentWavUrl();
          el.loop = true;
          el.preload = "auto";
          el.setAttribute("playsinline", "");
          el.setAttribute("webkit-playsinline", "");
          el.setAttribute("x-webkit-airplay", "deny");
          el.disableRemotePlayback = true;
          el.addEventListener("playing", () => this.keepAlivePlaying = true);
          el.addEventListener("pause", () => this.keepAlivePlaying = false);
          this.keepAlive = el;
        }
        if (this.keepAlivePlaying || this.keepAlivePending) return;
        const p = this.keepAlive.play();
        if (p && typeof p.then === "function") {
          this.keepAlivePending = true;
          p.then(
            () => {
              this.keepAlivePending = false;
              this.keepAlivePlaying = true;
            },
            () => this.keepAlivePending = false
          );
        }
      } catch (e) {
      }
    }
    /** True when a tap has created the sound engine but the browser still hasn't let it play. */
    get needsTap() {
      return this.enabled && !this.hidden && !!this.ctx && this.ctx.state !== "running";
    }
    /** For tests / diagnostics. */
    get state() {
      return this.ctx ? this.ctx.state : "none";
    }
    get mediaKeepAlive() {
      return this.keepAlivePlaying;
    }
    /** Is sound actually running (after the first tap)? */
    get running() {
      return !!this.ctx && this.ctx.state === "running";
    }
    resume() {
      this.hidden = false;
      if (this.ctx && this.ctx.state !== "running") {
        try {
          void this.ctx.resume().catch(() => void 0);
        } catch (e) {
        }
      }
      if (this.keepAlive && !this.keepAlivePlaying) {
        try {
          const p = this.keepAlive.play();
          if (p && typeof p.then === "function") p.catch(() => void 0);
        } catch (e) {
        }
      }
    }
    /** App went to the background: stop all sound (and stop scheduling music) until it comes back. */
    suspend() {
      this.hidden = true;
      if (this.keepAlive) {
        try {
          this.keepAlive.pause();
        } catch (e) {
        }
      }
      if (this.ctx && this.ctx.state === "running") void this.ctx.suspend().catch(() => void 0);
    }
    setEnabled(on) {
      this.enabled = on;
      if (!this.g) return;
      this.g.master.gain.setTargetAtTime(on ? 1 : 0, this.g.ctx.currentTime, 0.08);
    }
    get isEnabled() {
      return this.enabled;
    }
    /** New bubbles float in: two soft, quiet bells. */
    appear() {
      this.bell(440, 1.1, 0.03, 0, 0.35);
      this.bell(659.25, 1.3, 0.016, 0.06, 0.35);
    }
    /** Kept for older callers. */
    pop() {
      this.appear();
    }
    bump() {
      this.miss();
    }
    /** Right answer: a crisp bubble burst, a warm bell chord, a little rising sparkle. */
    success() {
      if (!this.live()) return;
      this.snap(0, 0.7, 3400, 1300, 0.045);
      this.plip(4e-3, 520, 1500, 0.36);
      const chord = [293.66, 440, 587.33, 739.99];
      chord.forEach((f, i) => this.bell(f, 1.9, i === 0 ? 0.06 : 0.05, 0.03 + i * 0.012, 0.55));
      [880, 1174.66, 1479.98, 1760].forEach((f, i) => this.bell(f, 0.7, 0.032, 0.1 + i * 0.065, 0.6));
      for (let i = 0; i < 6; i++) {
        const f = 2200 + Math.random() * 2400;
        this.tone(f, 0.25, "sine", 0.01, 0.18 + Math.random() * 0.45, 4e-3, 0.8);
      }
    }
    /** Wrong answer: a muffled little pop and a soft falling "boo-doo". Clear, never harsh. */
    miss() {
      if (!this.live()) return;
      this.snap(0, 0.3, 900, 420, 0.05);
      this.glide(392, 277.18, 0.3, "sine", 0.1, 0.01, 0.18, 1400);
      this.glide(277.18, 196, 0.42, "sine", 0.085, 0.17, 0.18, 1100);
      this.glide(146.83, 110, 0.55, "triangle", 0.03, 0.02, 0.1, 700);
    }
    live() {
      return this.enabled && !!this.g;
    }
    /** Bell: fundamental plus a few soft, slightly inharmonic partials. */
    bell(freq, dur, gain, delay = 0, wet = 0.5) {
      this.tone(freq, dur, "sine", gain, delay, 6e-3, wet);
      this.tone(freq * 2, dur * 0.6, "sine", gain * 0.22, delay, 4e-3, wet);
      this.tone(freq * 2.76, dur * 0.35, "sine", gain * 0.08, delay, 3e-3, wet);
      this.tone(freq * 5.4, dur * 0.15, "sine", gain * 0.03, delay, 2e-3, wet);
    }
    tone(freq, dur, type, gain, delay, attack, wet) {
      const g = this.g;
      if (!this.live() || !g || gain <= 0) return;
      const t = g.ctx.currentTime + delay;
      const osc = g.ctx.createOscillator();
      const env = g.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      env.gain.setValueAtTime(1e-4, t);
      env.gain.exponentialRampToValueAtTime(gain, t + attack);
      env.gain.exponentialRampToValueAtTime(1e-4, t + dur);
      osc.connect(env);
      this.route(env, wet);
      osc.start(t);
      osc.stop(t + dur + 0.05);
      osc.onended = () => {
        osc.disconnect();
        env.disconnect();
      };
    }
    glide(from, to, dur, type, gain, delay, wet, cutoff) {
      const g = this.g;
      if (!this.live() || !g) return;
      const t = g.ctx.currentTime + delay;
      const osc = g.ctx.createOscillator();
      const lp = g.ctx.createBiquadFilter();
      const env = g.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(from, t);
      osc.frequency.exponentialRampToValueAtTime(to, t + dur * 0.8);
      lp.type = "lowpass";
      lp.frequency.value = cutoff;
      env.gain.setValueAtTime(1e-4, t);
      env.gain.exponentialRampToValueAtTime(gain, t + 0.015);
      env.gain.setTargetAtTime(1e-4, t + dur * 0.45, dur * 0.22);
      osc.connect(lp);
      lp.connect(env);
      this.route(env, wet);
      osc.start(t);
      osc.stop(t + dur * 1.6);
      osc.onended = () => {
        osc.disconnect();
        lp.disconnect();
        env.disconnect();
      };
    }
    /** Filtered-noise transient: the "snap" of a bubble skin breaking. */
    snap(delay, gain, fromHz, toHz, dur) {
      const g = this.g;
      if (!this.live() || !g) return;
      const t = g.ctx.currentTime + delay;
      const src = g.ctx.createBufferSource();
      src.buffer = g.noise;
      const bp = g.ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.Q.value = 1.4;
      bp.frequency.setValueAtTime(fromHz, t);
      bp.frequency.exponentialRampToValueAtTime(toHz, t + dur);
      const env = g.ctx.createGain();
      env.gain.setValueAtTime(1e-4, t);
      env.gain.exponentialRampToValueAtTime(gain, t + 15e-4);
      env.gain.exponentialRampToValueAtTime(1e-4, t + dur);
      src.connect(bp);
      bp.connect(env);
      this.route(env, 0.25);
      src.start(t, Math.random() * 0.5);
      src.stop(t + dur + 0.02);
      src.onended = () => {
        src.disconnect();
        bp.disconnect();
        env.disconnect();
      };
    }
    /** The round "plip" of a bubble: a sine whose pitch flicks upward very fast. */
    plip(delay, from, to, gain) {
      const g = this.g;
      if (!this.live() || !g) return;
      const t = g.ctx.currentTime + delay;
      const osc = g.ctx.createOscillator();
      const env = g.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(from, t);
      osc.frequency.exponentialRampToValueAtTime(to, t + 0.035);
      env.gain.setValueAtTime(1e-4, t);
      env.gain.exponentialRampToValueAtTime(gain, t + 3e-3);
      env.gain.exponentialRampToValueAtTime(1e-4, t + 0.09);
      osc.connect(env);
      this.route(env, 0.3);
      osc.start(t);
      osc.stop(t + 0.12);
      osc.onended = () => {
        osc.disconnect();
        env.disconnect();
      };
    }
    route(node, wet) {
      const g = this.g;
      node.connect(g.sfx);
      if (wet > 0) {
        const s = g.ctx.createGain();
        s.gain.value = wet;
        node.connect(s);
        s.connect(g.send);
      }
    }
    /** Level up: the happy pop, then a bright little fanfare climbing up. */
    levelUp() {
      if (!this.live()) return;
      this.success();
      [587.33, 739.99, 880, 1174.66, 1479.98].forEach((f, i) => this.bell(f, 1.2, 0.04, 0.32 + i * 0.09, 0.6));
      this.bell(1760, 2.2, 0.03, 0.8, 0.8);
      for (let i = 0; i < 10; i++) this.tone(2600 + Math.random() * 2600, 0.3, "sine", 9e-3, 0.4 + Math.random() * 0.9, 4e-3, 0.9);
    }
    /** Game over: three soft, slow falling bells and a warm low note. Calm, not sad. */
    gameOver() {
      if (!this.live()) return;
      this.snap(0, 0.2, 800, 400, 0.05);
      [659.25, 554.37, 440].forEach((f, i) => this.bell(f, 1.8, 0.045, 0.05 + i * 0.32, 0.7));
      this.bell(293.66, 3, 0.04, 1.05, 0.8);
      this.glide(146.83, 146.83, 2.6, "sine", 0.05, 1, 0.4, 600);
    }
    stopPad() {
      if (this.padTimer) clearInterval(this.padTimer);
      this.padTimer = null;
    }
    /** Called when the garden or level changes, so the music shifts with it (at the next progression). */
    setMood(garden, level) {
      this.mood = { garden: Math.max(0, garden), level: Math.max(0, level) };
      if (this.padNodes && this.g) {
        const f = 720 + Math.min(this.mood.level, 6) * 45;
        this.padNodes.filter.frequency.setTargetAtTime(f, this.g.ctx.currentTime, 4);
      }
    }
    startPad() {
      const g = this.g;
      if (!g || this.padNodes) return;
      const ctx = g.ctx;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 760;
      filter.Q.value = 0.35;
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.05;
      lfoGain.gain.value = 240;
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      const mix = ctx.createGain();
      mix.gain.setValueAtTime(1e-4, ctx.currentTime);
      mix.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 3);
      filter.connect(mix);
      mix.connect(g.music);
      this.padNodes = { filter };
      this.prog = Math.floor(Math.random() * PROGRESSIONS.length);
      this.chordI = 0;
      this.nextChord = ctx.currentTime + 0.05;
      this.nextNote = ctx.currentTime + 4;
      this.nextTexture = ctx.currentTime + 12 + Math.random() * 10;
      this.pump(ctx.currentTime + 8);
      if (typeof window !== "undefined" && !("startRendering" in ctx)) {
        this.padTimer = setInterval(() => this.pump(ctx.currentTime + 8), 1e3);
      }
    }
    /** Schedule everything that should start before `until` (seconds, in audio-clock time). */
    pump(until) {
      const g = this.g;
      if (!g || !this.padNodes || this.hidden) return;
      const now = g.ctx.currentTime;
      if (this.nextChord < now - 1) this.nextChord = now + 0.5;
      if (this.nextNote < now - 1) this.nextNote = now + 2;
      if (this.nextTexture < now - 1) this.nextTexture = now + 10;
      while (this.nextChord < until) {
        const p = PROGRESSIONS[this.prog];
        const len = 9 + Math.random() * 3;
        this.chord(p.chords[this.chordI], this.nextChord, len);
        this.nextChord += len;
        this.chordI += 1;
        if (this.chordI >= p.chords.length) {
          this.chordI = 0;
          const step = 1 + (this.mood.garden + this.mood.level) % 3 + (Math.random() < 0.3 ? 1 : 0);
          this.prog = (this.prog + step) % PROGRESSIONS.length;
        }
      }
      while (this.nextNote < until) {
        if (Math.random() < 0.65) this.melodyNote(this.nextNote);
        this.nextNote += 1.8 + Math.random() * 4.2;
      }
      while (this.nextTexture < until) {
        if (Math.random() < 0.5) this.wind(this.nextTexture);
        else this.shimmer(this.nextTexture);
        this.nextTexture += 18 + Math.random() * 26;
      }
    }
    chord(notes, at, len) {
      const g = this.g;
      const ctx = g.ctx;
      const fadeIn = 3.2;
      const fadeOut = 4.5;
      notes.forEach((m, i) => {
        const f = 440 * Math.pow(2, (m - 69) / 12);
        const level = i === 0 ? 0.021 : 0.012 - i * 7e-4;
        for (const detune of [-7, 5]) {
          const osc = ctx.createOscillator();
          const env = ctx.createGain();
          osc.type = "sine";
          osc.frequency.value = f;
          osc.detune.value = detune;
          env.gain.setValueAtTime(1e-4, at);
          env.gain.exponentialRampToValueAtTime(level, at + fadeIn);
          env.gain.setValueAtTime(level, at + len);
          env.gain.exponentialRampToValueAtTime(1e-4, at + len + fadeOut);
          osc.connect(env);
          env.connect(this.padNodes.filter);
          osc.start(at);
          osc.stop(at + len + fadeOut + 0.1);
          osc.onended = () => {
            osc.disconnect();
            env.disconnect();
          };
        }
      });
    }
    melodyNote(at) {
      const g = this.g;
      const ctx = g.ctx;
      const p = PROGRESSIONS[this.prog];
      const steps = [0, 2, 4, 7, 9];
      const m = p.key + (Math.random() < 0.7 ? 12 : 24) + steps[Math.floor(Math.random() * steps.length)];
      const f = 440 * Math.pow(2, (m - 69) / 12);
      const gain = 0.011 + Math.random() * 6e-3;
      for (const [mult, gm, d] of [
        [1, 1, 2.8],
        [2, 0.18, 1.4],
        [3, 0.05, 0.7]
      ]) {
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = f * mult;
        env.gain.setValueAtTime(1e-4, at);
        env.gain.exponentialRampToValueAtTime(gain * gm, at + 0.03);
        env.gain.exponentialRampToValueAtTime(1e-4, at + d);
        osc.connect(env);
        env.connect(g.music);
        const s = ctx.createGain();
        s.gain.value = 0.9;
        env.connect(s);
        s.connect(g.send);
        osc.start(at);
        osc.stop(at + d + 0.1);
        osc.onended = () => {
          osc.disconnect();
          env.disconnect();
          s.disconnect();
        };
      }
    }
    /** A soft breath of wind: filtered noise that swells and sweeps for a few seconds. */
    wind(at) {
      const g = this.g;
      const ctx = g.ctx;
      const dur = 6 + Math.random() * 4;
      const src = ctx.createBufferSource();
      src.buffer = g.noise;
      src.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.Q.value = 0.8;
      bp.frequency.setValueAtTime(380, at);
      bp.frequency.exponentialRampToValueAtTime(1100 + Math.random() * 500, at + dur * 0.5);
      bp.frequency.exponentialRampToValueAtTime(420, at + dur);
      const env = ctx.createGain();
      env.gain.setValueAtTime(1e-4, at);
      env.gain.exponentialRampToValueAtTime(0.022, at + dur * 0.45);
      env.gain.exponentialRampToValueAtTime(1e-4, at + dur);
      const pan = makePanner(ctx);
      if ("pan" in pan) {
        pan.pan.setValueAtTime(-0.6, at);
        pan.pan.linearRampToValueAtTime(0.6, at + dur);
      }
      src.connect(bp);
      bp.connect(env);
      env.connect(pan);
      pan.connect(g.music);
      src.start(at);
      src.stop(at + dur + 0.1);
      src.onended = () => {
        src.disconnect();
        bp.disconnect();
        env.disconnect();
        pan.disconnect();
      };
    }
    /** A shimmer: a few very high, very quiet bell tones that twinkle across the stereo field. */
    shimmer(at) {
      const g = this.g;
      const ctx = g.ctx;
      const p = PROGRESSIONS[this.prog];
      const steps = [0, 4, 7, 12, 14];
      for (let i = 0; i < 7; i++) {
        const m = p.key + 24 + steps[i % steps.length];
        const t = at + i * (0.18 + Math.random() * 0.25);
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        const pan = makePanner(ctx);
        osc.type = "sine";
        osc.frequency.value = 440 * Math.pow(2, (m - 69) / 12);
        if ("pan" in pan) pan.pan.value = Math.random() * 1.6 - 0.8;
        env.gain.setValueAtTime(1e-4, t);
        env.gain.exponentialRampToValueAtTime(45e-4, t + 0.02);
        env.gain.exponentialRampToValueAtTime(1e-4, t + 1.6);
        osc.connect(env);
        env.connect(pan);
        pan.connect(g.send);
        pan.connect(g.music);
        osc.start(t);
        osc.stop(t + 1.7);
        osc.onended = () => {
          osc.disconnect();
          env.disconnect();
          pan.disconnect();
        };
      }
    }
  };
  var v = (root, shape) => shape.map((s) => root + s);
  var MAJ9 = [0, 7, 11, 14, 16];
  var MIN9 = [0, 7, 10, 14, 15];
  var ADD9 = [0, 7, 12, 14, 16];
  var SUS2 = [0, 7, 12, 14, 19];
  var PROGRESSIONS = [
    { key: 62, chords: [v(50, MAJ9), v(47, MIN9), v(43, MAJ9), v(45, SUS2)] },
    // D
    { key: 65, chords: [v(41, MAJ9), v(50, MIN9), v(46, MAJ9), v(48, SUS2)] },
    // F
    { key: 63, chords: [v(51, ADD9), v(48, MIN9), v(44, MAJ9), v(46, ADD9)] },
    // Eb
    { key: 67, chords: [v(43, ADD9), v(52, MIN9), v(48, MAJ9), v(50, SUS2)] },
    // G
    { key: 69, chords: [v(45, MAJ9), v(42, MIN9), v(50, MAJ9), v(52, SUS2)] },
    // A
    { key: 60, chords: [v(48, MAJ9), v(45, MIN9), v(41, MAJ9), v(43, SUS2)] }
    // C
  ];
  var audio = new SoftAudio();
  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") audio.resume();
      else audio.suspend();
    });
    window.addEventListener("pagehide", () => audio.suspend());
    window.addEventListener("pageshow", () => {
      if (document.visibilityState === "visible") audio.resume();
    });
    const kick = () => audio.unlock();
    for (const ev of ["touchstart", "touchend", "pointerdown", "pointerup", "mousedown", "click", "keydown"])
      document.addEventListener(ev, kick, { capture: true, passive: true });
    window.addEventListener("focus", () => {
      if (document.visibilityState === "visible") audio.resume();
    });
  }

  // engine.ts
  var DUST_TINTS = [
    [255, 236, 190],
    [255, 182, 120],
    [255, 128, 140],
    [130, 210, 255],
    [205, 165, 255]
  ];
  var DUST_WEIGHTS = [0.46, 0.2, 0.11, 0.13, 0.1];
  var MOTES = 720;
  var BALL = 24;
  var STEP = 1 / 60;
  var LEVEL_KEY = "luma-drift-levels-v1";
  var TRAIL = 56;
  var PIPS = 4;
  var LIVES = 3;
  var WRONG_DWELL = 0.2;
  var KEY_LEFT = /* @__PURE__ */ new Set(["ArrowLeft", "KeyA"]);
  var KEY_RIGHT = /* @__PURE__ */ new Set(["ArrowRight", "KeyD"]);
  var KEY_UP = /* @__PURE__ */ new Set(["ArrowUp", "KeyW"]);
  var KEY_DOWN = /* @__PURE__ */ new Set(["ArrowDown", "KeyS"]);
  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }
  function roundRectPath(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function rgbOf(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  function rgba(c, a) {
    return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
  }
  var LumaEngine = class {
    constructor(canvas, hooks) {
      __publicField(this, "canvas", canvas);
      __publicField(this, "hooks", hooks);
      __publicField(this, "ctx");
      __publicField(this, "raf", 0);
      __publicField(this, "acc", 0);
      __publicField(this, "last", 0);
      __publicField(this, "running", false);
      __publicField(this, "w", 0);
      __publicField(this, "h", 0);
      __publicField(this, "dpr", 1);
      __publicField(this, "time", 0);
      __publicField(this, "reduced", false);
      __publicField(this, "placed", false);
      __publicField(this, "scene", "hub");
      __publicField(this, "realm", "wander");
      __publicField(this, "lesson", "colors");
      __publicField(this, "round", null);
      __publicField(this, "prevKey", "");
      __publicField(this, "targets", []);
      __publicField(this, "mode", "live");
      __publicField(this, "misses", 0);
      __publicField(this, "score", 0);
      __publicField(this, "msgKind", "good");
      __publicField(this, "levelUp", false);
      __publicField(this, "overT", 0);
      /** Only one wrong bubble per drag counts as a miss, so brushing past bubbles can't end the game. */
      __publicField(this, "missedThisDrag", false);
      __publicField(this, "celebrate", 0);
      __publicField(this, "lock", 0);
      __publicField(this, "filled", 0);
      __publicField(this, "praise", "");
      __publicField(this, "pulse", 0);
      __publicField(this, "player", { x: 0, y: 0, vx: 0, vy: 0 });
      __publicField(this, "aimX", 0);
      __publicField(this, "aimY", 0);
      __publicField(this, "holding", false);
      __publicField(this, "pointerId", null);
      __publicField(this, "downX", 0);
      __publicField(this, "downY", 0);
      __publicField(this, "moved", 0);
      __publicField(this, "px", 0);
      __publicField(this, "py", 0);
      __publicField(this, "swoop", null);
      __publicField(this, "heading", 0);
      __publicField(this, "grabbed", false);
      __publicField(this, "coasting", false);
      __publicField(this, "fingerX", 0);
      __publicField(this, "fingerY", 0);
      __publicField(this, "keys", /* @__PURE__ */ new Set());
      __publicField(this, "trailX", new Float32Array(TRAIL));
      __publicField(this, "trailY", new Float32Array(TRAIL));
      __publicField(this, "trailI", 0);
      __publicField(this, "particles", Array.from({ length: 260 }, () => ({
        star: false,
        spin: 0,
        on: false,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        life: 0,
        max: 1,
        r: 2,
        cr: 255,
        cg: 220,
        cb: 140
      })));
      __publicField(this, "rings", Array.from({ length: 8 }, () => ({
        on: false,
        x: 0,
        y: 0,
        life: 1,
        cr: 255,
        cg: 210,
        cb: 120
      })));
      __publicField(this, "motes", Array.from({ length: MOTES }, () => ({
        on: false,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        life: 0,
        max: 1,
        r: 1,
        c: 0,
        seed: 0,
        puff: false
      })));
      __publicField(this, "bubbleR", 48);
      __publicField(this, "solved", { colors: 0, numbers: 0, shapes: 0, letters: 0 });
      __publicField(this, "moteNext", 0);
      __publicField(this, "moteAcc", 0);
      __publicField(this, "lastBallX", 0);
      __publicField(this, "lastBallY", 0);
      __publicField(this, "sprites", null);
      __publicField(this, "dust", Array.from({ length: 84 }, () => ({
        x: Math.random(),
        y: Math.random(),
        s: 0.2 + Math.random() * 0.8,
        r: 0.45 + Math.random() * 1.7,
        p: Math.random() * Math.PI * 2,
        hue: Math.random()
      })));
      __publicField(this, "deep", [26, 18, 40]);
      __publicField(this, "deepTo", [26, 18, 40]);
      __publicField(this, "washes", [
        [255, 200, 87],
        [255, 107, 107],
        [92, 200, 255]
      ]);
      __publicField(this, "washesTo", [
        [255, 200, 87],
        [255, 107, 107],
        [92, 200, 255]
      ]);
      __publicField(this, "hubLesson", 0);
      __publicField(this, "hubT", 0);
      __publicField(this, "mq", null);
      __publicField(this, "onMq", () => {
        var _a;
        this.reduced = !!((_a = this.mq) == null ? void 0 : _a.matches);
      });
      __publicField(this, "onResize", () => this.resize());
      /** Pause drawing while the app is in the background; pick up smoothly when it comes back. */
      __publicField(this, "onVisible", () => {
        if (document.visibilityState === "hidden") {
          this.paused = true;
          cancelAnimationFrame(this.raf);
          this.holding = false;
          this.pointerId = null;
        } else if (this.paused && this.running) {
          this.paused = false;
          this.last = performance.now();
          this.acc = 0;
          this.raf = requestAnimationFrame((t) => this.frame(t));
        }
      });
      __publicField(this, "paused", false);
      /** Adaptive quality: 2 = full, 1 = lighter, 0 = lightest (for old or busy devices). */
      __publicField(this, "quality", 2);
      __publicField(this, "slowT", 0);
      __publicField(this, "fastT", 0);
      __publicField(this, "dprCap", 2);
      __publicField(this, "onDown", (e) => this.pointerDown(e));
      __publicField(this, "onMove", (e) => this.pointerMove(e));
      __publicField(this, "onUp", (e) => this.pointerUp(e));
      __publicField(this, "onKeyDown", (e) => this.key(e, true));
      __publicField(this, "onKeyUp", (e) => this.key(e, false));
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas is not available");
      this.ctx = ctx;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }
    start() {
      this.loadLevels();
      this.mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.reduced = this.mq.matches;
      if (this.mq.addEventListener) this.mq.addEventListener("change", this.onMq);
      else if (this.mq.addListener) this.mq.addListener(this.onMq);
      window.addEventListener("resize", this.onResize);
      window.addEventListener("orientationchange", this.onResize);
      document.addEventListener("visibilitychange", this.onVisible);
      window.addEventListener("pointerdown", this.onDown);
      window.addEventListener("pointermove", this.onMove);
      window.addEventListener("pointerup", this.onUp);
      window.addEventListener("pointercancel", this.onUp);
      window.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("keyup", this.onKeyUp);
      this.resize();
      this.applySky("numbers", true);
      this.running = true;
      this.last = performance.now();
      this.raf = requestAnimationFrame((t) => this.frame(t));
    }
    stop() {
      var _a;
      this.running = false;
      cancelAnimationFrame(this.raf);
      if ((_a = this.mq) == null ? void 0 : _a.removeEventListener) this.mq.removeEventListener("change", this.onMq);
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("orientationchange", this.onResize);
      document.removeEventListener("visibilitychange", this.onVisible);
      window.removeEventListener("pointerdown", this.onDown);
      window.removeEventListener("pointermove", this.onMove);
      window.removeEventListener("pointerup", this.onUp);
      window.removeEventListener("pointercancel", this.onUp);
      window.removeEventListener("keydown", this.onKeyDown);
      window.removeEventListener("keyup", this.onKeyUp);
    }
    unlock() {
      audio.unlock();
    }
    begin(realm) {
      audio.unlock();
      this.scene = "play";
      this.realm = realm;
      this.lesson = realm === "wander" ? "colors" : realm;
      this.filled = this.solved[this.lesson] % PIPS;
      this.praise = "";
      this.mode = "live";
      this.misses = 0;
      this.score = 0;
      this.levelUp = false;
      audio.setMood(LESSONS.indexOf(this.lesson), this.level(this.lesson));
      this.prevKey = "";
      this.swoop = null;
      this.applySky(this.lesson, false);
      this.spawn();
      this.lock = 0.4;
    }
    /** Play again after a game over: same garden, fresh hearts and score. */
    restart() {
      this.begin(this.realm);
    }
    hub() {
      this.scene = "hub";
      this.misses = 0;
      this.targets = [];
      this.round = null;
      this.mode = "live";
      this.swoop = null;
      this.praise = "";
    }
    frame(now) {
      if (!this.running || this.paused) return;
      const raw = (now - this.last) / 1e3;
      const dt = Math.min(0.1, raw);
      this.adapt(raw);
      this.last = now;
      this.acc += dt;
      let steps = 0;
      while (this.acc >= STEP && steps < 5) {
        this.sim(STEP);
        this.acc -= STEP;
        steps += 1;
      }
      this.draw();
      this.raf = requestAnimationFrame((t) => this.frame(t));
    }
    /**
     * Watch how long frames take. If the device keeps missing 60fps (older iPhones/iPads), step quality
     * down: fewer dust specks, then a lower canvas resolution. If it has lots of headroom again, step back up.
     */
    adapt(raw) {
      if (raw <= 0 || raw > 0.25) return;
      if (raw > 1 / 45) {
        this.slowT += raw;
        this.fastT = 0;
      } else {
        this.fastT += raw;
        this.slowT = Math.max(0, this.slowT - raw * 0.5);
      }
      if (this.slowT > 2 && this.quality > 0) {
        this.quality -= 1;
        this.slowT = 0;
        this.dprCap = this.quality === 2 ? 2 : this.quality === 1 ? 1.5 : 1;
        this.resize();
      } else if (this.fastT > 20 && this.quality < 2) {
        this.quality += 1;
        this.fastT = 0;
        this.dprCap = this.quality === 2 ? 2 : 1.5;
        this.resize();
      }
    }
    resize() {
      const rect = this.canvas.getBoundingClientRect();
      this.w = rect.width;
      this.h = rect.height;
      this.dpr = Math.min(window.devicePixelRatio || 1, this.dprCap);
      this.canvas.width = Math.max(1, Math.round(this.w * this.dpr));
      this.canvas.height = Math.max(1, Math.round(this.h * this.dpr));
      if (!this.placed && this.w > 0 && this.h > 0) {
        this.player.x = this.w / 2;
        this.player.y = this.h * 0.9;
        this.aimX = this.player.x;
        this.aimY = this.player.y;
        this.fillTrail();
        this.lastBallX = this.player.x;
        this.lastBallY = this.player.y;
        this.placed = true;
      } else {
        this.player.x = clamp(this.player.x, 24, Math.max(24, this.w - 24));
        this.player.y = clamp(this.player.y, 24, Math.max(24, this.h - 24));
        this.aimX = clamp(this.aimX, 24, Math.max(24, this.w - 24));
        this.aimY = clamp(this.aimY, 24, Math.max(24, this.h - 24));
      }
    }
    glideTo(tx, ty, dt, rate, maxSpeed) {
      const dx = tx - this.player.x;
      const dy = ty - this.player.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 0.4) {
        this.player.x = tx;
        this.player.y = ty;
        this.player.vx *= Math.exp(-18 * dt);
        this.player.vy *= Math.exp(-18 * dt);
        return;
      }
      const k = 1 - Math.exp(-rate * dt);
      const step = Math.min(dist * k, maxSpeed * dt);
      const prevX = this.player.x;
      const prevY = this.player.y;
      this.player.x += dx / dist * step;
      this.player.y += dy / dist * step;
      const blend = 1 - Math.exp(-22 * dt);
      this.player.vx += ((this.player.x - prevX) / dt - this.player.vx) * blend;
      this.player.vy += ((this.player.y - prevY) / dt - this.player.vy) * blend;
    }
    contain() {
      const pad = 14;
      if (this.player.x < pad) {
        this.player.x = pad;
        if (this.player.vx < 0) this.player.vx *= -0.25;
      } else if (this.player.x > this.w - pad) {
        this.player.x = this.w - pad;
        if (this.player.vx > 0) this.player.vx *= -0.25;
      }
      if (this.player.y < pad) {
        this.player.y = pad;
        if (this.player.vy < 0) this.player.vy *= -0.25;
      } else if (this.player.y > this.h - pad) {
        this.player.y = this.h - pad;
        if (this.player.vy > 0) this.player.vy *= -0.25;
      }
    }
    fillTrail() {
      for (let i = 0; i < TRAIL; i++) {
        this.trailX[i] = this.player.x;
        this.trailY[i] = this.player.y;
      }
    }
    sim(dt) {
      this.time += dt;
      this.lock = Math.max(0, this.lock - dt);
      this.driftSky(dt);
      let kx = 0;
      let ky = 0;
      for (const code of this.keys) {
        if (KEY_LEFT.has(code)) kx -= 1;
        if (KEY_RIGHT.has(code)) kx += 1;
        if (KEY_UP.has(code)) ky -= 1;
        if (KEY_DOWN.has(code)) ky += 1;
      }
      if ((kx !== 0 || ky !== 0) && !this.holding) {
        this.grabbed = true;
        this.aimX = clamp(this.aimX + kx * 340 * dt, 28, this.w - 28);
        this.aimY = clamp(this.aimY + ky * 340 * dt, 28, this.h - 28);
      }
      if (this.scene === "hub" && !this.grabbed && !this.holding && !this.coasting) {
        const sweep = this.reduced ? this.time * 0.2 : this.time * 0.32;
        this.aimX = this.w * 0.5 + Math.cos(sweep) * Math.min(this.w * 0.28, 150);
        this.aimY = this.h * 0.62 + Math.sin(sweep * 0.8) * Math.min(this.h * 0.12, 70);
      }
      if (this.holding) {
        this.coasting = false;
        this.glideTo(this.fingerX, this.fingerY, dt, 60, 3600);
      } else if (this.swoop && this.mode === "live") {
        this.coasting = false;
        this.glideTo(this.swoop.x, this.swoop.y, dt, 8, 760);
      } else if ((kx !== 0 || ky !== 0) && !this.holding) {
        this.coasting = false;
        this.glideTo(this.aimX, this.aimY, dt, 10, 420);
      } else if (this.coasting) {
        const drag = Math.exp(-3.4 * dt);
        this.player.vx *= drag;
        this.player.vy *= drag;
        this.player.x += this.player.vx * dt;
        this.player.y += this.player.vy * dt;
        if (Math.hypot(this.player.vx, this.player.vy) < 28) {
          this.coasting = false;
          this.player.vx = 0;
          this.player.vy = 0;
          this.aimX = this.player.x;
          this.aimY = this.player.y;
        }
      } else if (this.scene === "hub" && !this.grabbed) {
        this.glideTo(this.aimX, this.aimY, dt, 3.2, 220);
      } else {
        this.player.vx *= Math.exp(-8 * dt);
        this.player.vy *= Math.exp(-8 * dt);
        this.player.x += this.player.vx * dt;
        this.player.y += this.player.vy * dt;
      }
      this.contain();
      const speed = Math.hypot(this.player.vx, this.player.vy);
      if (speed > 24) {
        const target = Math.atan2(this.player.vy, this.player.vx);
        let turn = target - this.heading;
        if (turn > Math.PI) turn -= Math.PI * 2;
        if (turn < -Math.PI) turn += Math.PI * 2;
        this.heading += turn * (1 - Math.exp(-14 * dt));
      }
      this.trailI = (this.trailI + 1) % TRAIL;
      this.trailX[this.trailI] = this.player.x;
      this.trailY[this.trailI] = this.player.y;
      this.simMotes(dt);
      for (const t of this.targets) {
        const amp = this.reduced ? Math.min(3, t.amp) : t.amp * 0.78;
        const flutter = this.reduced ? 0 : t.amp * 0.22;
        t.shy = Math.max(0, t.shy - dt);
        t.pop = Math.min(1, t.pop + dt * 2.4);
        const orbit = this.time * 0.62 + t.phase;
        t.x = t.hx + Math.cos(orbit) * amp + Math.sin(this.time * 1.35 + t.phase) * flutter;
        t.y = t.hy + Math.sin(orbit * 0.86) * amp * 0.92 + Math.cos(this.time * 1.05 + t.phase) * flutter;
      }
      if (this.mode === "over") {
        this.overT += dt;
      } else if (this.mode === "celebrate") {
        this.celebrate += dt;
        const dur = this.levelUp ? 1.5 : 0.82;
        if (this.celebrate > dur) this.finishCelebrate();
      } else if (this.scene === "play" && this.lock <= 0) {
        if (this.holding) {
          let hit = null;
          for (const t of this.targets) {
            if (t.shy > 0 || !this.overlaps(t)) {
              t.touch = 0;
              continue;
            }
            if (t.correct) hit = t;
            else {
              t.touch += dt;
              if (t.touch >= WRONG_DWELL && !hit) hit = t;
            }
          }
          if (hit) this.catch(hit);
        } else if (this.swoop && this.swoop.shy <= 0 && this.overlaps(this.swoop)) {
          this.catch(this.swoop);
        }
      }
      for (const p of this.particles) {
        if (!p.on) continue;
        p.life -= dt;
        if (p.life <= 0) {
          p.on = false;
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 18 * dt;
        p.vx *= 1 - 1.4 * dt;
      }
      for (const ring of this.rings) {
        if (!ring.on) continue;
        ring.life += dt / 0.7;
        if (ring.life >= 1) ring.on = false;
      }
      if (this.scene === "hub") {
        this.hubT += dt;
        const span = this.reduced ? 14 : 8;
        if (this.hubT > span) {
          this.hubT = 0;
          this.hubLesson = (this.hubLesson + 1) % LESSONS.length;
          this.applySky(LESSONS[this.hubLesson], true);
        }
      }
    }
    finishCelebrate() {
      if (this.levelUp) {
        this.levelUp = false;
        if (this.realm === "wander") {
          const i = LESSONS.indexOf(this.lesson);
          this.lesson = LESSONS[(i + 1) % LESSONS.length];
          this.applySky(this.lesson, true);
        }
        audio.setMood(LESSONS.indexOf(this.lesson), this.level(this.lesson));
      }
      this.filled = this.solved[this.lesson] % PIPS;
      this.mode = "live";
      this.spawn();
      this.lock = 0.35;
    }
    /** Level for a lesson: goes up by one every 4 right answers in that garden (saved on this device). */
    level(lesson) {
      return Math.floor(this.solved[lesson] / 4);
    }
    loadLevels() {
      try {
        const raw = JSON.parse(localStorage.getItem(LEVEL_KEY) || "{}");
        for (const l of LESSONS) {
          const v2 = raw[l];
          if (typeof v2 === "number" && isFinite(v2) && v2 >= 0) this.solved[l] = Math.min(Math.floor(v2), 1e5);
        }
      } catch (e) {
      }
    }
    saveLevels() {
      try {
        localStorage.setItem(LEVEL_KEY, JSON.stringify(this.solved));
      } catch (e) {
      }
    }
    spawn() {
      if (this.w < 2 || this.h < 2) {
        requestAnimationFrame(() => {
          if (this.running && this.scene === "play" && this.targets.length === 0) this.spawn();
        });
        return;
      }
      const level = this.level(this.lesson);
      const want = Math.min(bubbleCount(level), this.w < 520 || this.h < 520 ? 6 : 8);
      const layout = this.placeMany(want);
      const round = makeRound(this.lesson, this.prevKey, level, layout.pts.length);
      this.prevKey = round.answerKey;
      this.round = round;
      this.bubbleR = layout.r;
      this.targets = round.targets.map((spec, i) => {
        var _a;
        const spot = (_a = layout.pts[i]) != null ? _a : { x: this.w / 2, y: this.h / 2 };
        return {
          hx: spot.x,
          hy: spot.y,
          x: spot.x,
          y: spot.y,
          phase: Math.random() * Math.PI * 2,
          amp: layout.wobble,
          shy: 0,
          pop: 0.12,
          correct: spec.correct,
          spec,
          touch: 0
        };
      });
      this.swoop = null;
      audio.appear();
      this.emit();
      const area = this.playArea();
      if (this.targets.some((t) => t.y - this.bubbleR - t.amp < area.top || t.y + this.bubbleR + t.amp > area.bot)) {
        const again = this.placeMany(this.targets.length);
        if (again.pts.length === this.targets.length) {
          this.bubbleR = again.r;
          this.targets.forEach((t, i) => {
            t.hx = t.x = again.pts[i].x;
            t.hy = t.y = again.pts[i].y;
            t.amp = again.wobble;
          });
        }
      }
    }
    radius() {
      return this.bubbleR;
    }
    /** The free area for bubbles: below the question text, above the progress dots. */
    playArea() {
      const short = this.h < 520;
      let top = short ? this.h * 0.4 : Math.min(this.h * 0.36, 250);
      let bot = this.h - (short ? 30 : 56);
      const hint = typeof document !== "undefined" ? document.getElementById("hint") : null;
      const dots = typeof document !== "undefined" ? document.querySelector(".progress") : null;
      const hb = hint ? hint.getBoundingClientRect() : null;
      const db = dots ? dots.getBoundingClientRect() : null;
      if (hb && hb.height > 0 && hb.bottom < this.h * 0.6) top = Math.max(top, hb.bottom + 8);
      if (db && db.height > 0 && db.top > this.h * 0.6) bot = Math.min(bot, db.top - 6);
      const width = Math.min(this.w - 24, 820);
      const left = (this.w - width) / 2;
      return { left, right: left + width, top, bot };
    }
    /**
     * Spread n bubbles out so they never touch, even while they bob about.
     * Uses "best candidate" sampling (each new bubble goes where it is furthest from the others);
     * if they can't fit, the bubbles shrink a little, and as a last resort one fewer is shown.
     */
    placeMany(n) {
      const area = this.playArea();
      const short = this.h < 520;
      const base = clamp(this.w < 520 && !short ? this.w * 0.118 : Math.min(this.w, this.h) * (short ? 0.09 : 0.105), 34, this.w >= 700 && this.h >= 900 ? 92 : 66);
      for (let count = n; count >= 3; count--) {
        for (let r2 = base; r2 >= 30; r2 *= 0.93) {
          const wobble = this.reduced ? 3 : Math.min(24, r2 * 0.38);
          const pad = r2 + wobble + 6;
          const minD = 2 * (r2 * 1.08 + wobble) + 10;
          const x0 = area.left + pad;
          const x1 = area.right - pad;
          const y0 = area.top + pad;
          const y1 = area.bot - pad;
          if (x1 <= x0 || y1 <= y0) continue;
          for (let attempt = 0; attempt < 6; attempt++) {
            const pts2 = [];
            for (let k = 0; k < count; k++) {
              let best = null;
              let bestD = -1;
              for (let c = 0; c < 40; c++) {
                const p = { x: x0 + Math.random() * (x1 - x0), y: y0 + Math.random() * (y1 - y0) };
                let d = Infinity;
                for (const q of pts2) d = Math.min(d, Math.hypot(p.x - q.x, p.y - q.y));
                d = Math.min(d, (Math.hypot(p.x - this.player.x, p.y - this.player.y) - (r2 + 40)) * 2 + minD);
                if (d > bestD) {
                  bestD = d;
                  best = p;
                }
              }
              if (!best || bestD < minD) break;
              pts2.push(best);
            }
            if (pts2.length === count) return { pts: pts2, r: r2, wobble };
          }
        }
      }
      const r = 30;
      const cols = Math.max(2, Math.floor((area.right - area.left) / (r * 2.6)));
      const pts = Array.from({ length: Math.min(n, 4) }, (_, i) => ({
        x: area.left + r * 2.6 * (i % cols + 0.5),
        y: area.top + r * 1.5 + Math.floor(i / cols) * r * 2.6
      }));
      return { pts, r, wobble: 3 };
    }
    overlaps(t) {
      const reach = 18 + this.radius() * 0.78;
      const dx = t.x - this.player.x;
      const dy = t.y - this.player.y;
      return dx * dx + dy * dy < reach * reach;
    }
    catch(t) {
      if (this.lock > 0 || this.mode !== "live" || this.scene !== "play" || t.shy > 0) return;
      this.swoop = null;
      if (!t.correct) {
        t.shy = 0.6;
        this.retreat(t);
        this.lock = 0.25;
        if (this.holding && this.missedThisDrag) return;
        if (this.holding) this.missedThisDrag = true;
        this.lock = 0.6;
        this.misses += 1;
        this.pulse += 1;
        this.msgKind = "miss";
        if (this.misses >= LIVES) {
          this.gameOver();
          return;
        }
        const left = LIVES - this.misses;
        this.praise = left === 1 ? "Last heart. You can do it!" : MISS[this.pulse % MISS.length];
        audio.miss();
        this.emit();
        return;
      }
      this.mode = "celebrate";
      this.celebrate = 0;
      this.misses = 0;
      this.score += 1;
      this.pulse += 1;
      const before = this.level(this.lesson);
      this.solved[this.lesson] += 1;
      this.saveLevels();
      const after = this.level(this.lesson);
      this.levelUp = after > before;
      this.filled = this.levelUp ? PIPS : this.solved[this.lesson] % PIPS;
      this.msgKind = this.levelUp ? "level" : "good";
      this.praise = this.levelUp ? `Level ${after + 1}!` : PRAISE[this.pulse % PRAISE.length];
      this.burst(t);
      if (this.levelUp) {
        this.starBurst(t.x, t.y);
        audio.levelUp();
      } else audio.success();
      this.hooks.onCorrect();
      this.emit();
    }
    gameOver() {
      this.mode = "over";
      this.overT = 0;
      this.swoop = null;
      this.praise = "";
      audio.gameOver();
      this.emit();
    }
    /** A shower of little gold stars for a level up. */
    starBurst(x, y) {
      const count = this.reduced ? 12 : 46;
      let spawned = 0;
      const golds = [
        [255, 214, 90],
        [255, 240, 180],
        [255, 170, 90],
        [255, 255, 255]
      ];
      for (const p of this.particles) {
        if (p.on) continue;
        const a = spawned / count * Math.PI * 2 + Math.random() * 0.3;
        const sp = 120 + Math.random() * 260;
        const c = golds[spawned % golds.length];
        p.on = true;
        p.star = true;
        p.spin = (Math.random() - 0.5) * 8;
        p.x = x;
        p.y = y;
        p.vx = Math.cos(a) * sp;
        p.vy = Math.sin(a) * sp - 60;
        p.life = 1.1 + Math.random() * 0.8;
        p.max = p.life;
        p.r = 5 + Math.random() * 7;
        p.cr = c[0];
        p.cg = c[1];
        p.cb = c[2];
        spawned += 1;
        if (spawned >= count) break;
      }
      for (let k = 0; k < 2; k++) {
        const ring = this.rings.find((r) => !r.on);
        if (!ring) break;
        ring.on = true;
        ring.x = x;
        ring.y = y;
        ring.life = -k * 0.25;
        ring.cr = 255;
        ring.cg = 214;
        ring.cb = 110;
      }
    }
    retreat(t) {
      const ang = Math.atan2(t.y - this.player.y, t.x - this.player.x);
      const area = this.playArea();
      const pad = this.bubbleR + t.amp + 6;
      const nx = clamp(t.hx + Math.cos(ang) * 36, area.left + pad, area.right - pad);
      const ny = clamp(t.hy + Math.sin(ang) * 28, area.top + pad, area.bot - pad);
      const minD = 2 * (this.bubbleR * 1.08 + t.amp) + 10;
      const clear = this.targets.every((o) => o === t || Math.hypot(o.hx - nx, o.hy - ny) >= minD);
      if (clear) {
        t.hx = nx;
        t.hy = ny;
      }
    }
    burst(t) {
      const col = this.targetColor(t);
      const count = this.reduced ? 8 : 28;
      let spawned = 0;
      for (const p of this.particles) {
        if (p.on) continue;
        const a = Math.random() * Math.PI * 2;
        const sp = 40 + Math.random() * 160;
        p.on = true;
        p.star = false;
        p.x = t.x;
        p.y = t.y;
        p.vx = Math.cos(a) * sp;
        p.vy = Math.sin(a) * sp - 30;
        p.life = 0.45 + Math.random() * 0.45;
        p.max = p.life;
        p.r = 2 + Math.random() * 4;
        p.cr = col[0];
        p.cg = col[1];
        p.cb = col[2];
        spawned += 1;
        if (spawned >= count) break;
      }
      for (const ring of this.rings) {
        if (ring.on) continue;
        ring.on = true;
        ring.x = t.x;
        ring.y = t.y;
        ring.life = 0;
        ring.cr = col[0];
        ring.cg = col[1];
        ring.cb = col[2];
        break;
      }
    }
    targetColor(t) {
      if (t.spec.kind === "color") return rgbOf(t.spec.hex);
      return [255, 214, 150];
    }
    applySky(lesson, _soft) {
      const sky = REALM_SKY[lesson];
      this.deepTo = sky.deep;
      this.washesTo = sky.washes.map((c) => [...c]);
    }
    driftSky(dt) {
      const k = 1 - Math.exp(-dt * 0.85);
      for (let i = 0; i < 3; i++) this.deep[i] = lerp(this.deep[i], this.deepTo[i], k);
      for (let w = 0; w < 3; w++) {
        const dest = this.washesTo[w];
        const cur = this.washes[w];
        if (!dest || !cur) continue;
        for (let i = 0; i < 3; i++) cur[i] = lerp(cur[i], dest[i], k);
      }
    }
    emit() {
      var _a, _b, _c, _d;
      const round = this.round;
      this.hooks.onHud({
        kicker: (_a = round == null ? void 0 : round.kicker) != null ? _a : "",
        title: (_b = round == null ? void 0 : round.title) != null ? _b : "",
        tone: (_c = round == null ? void 0 : round.tone) != null ? _c : "cream",
        hint: (_d = round == null ? void 0 : round.hint) != null ? _d : "",
        filled: this.filled,
        total: PIPS,
        praise: this.praise,
        pulse: this.pulse,
        msgKind: this.msgKind,
        lives: LIVES - this.misses,
        maxLives: LIVES,
        level: this.level(this.lesson) + 1,
        over: this.mode === "over",
        score: this.score
      });
    }
    isUi(target) {
      return target instanceof Element && !!target.closest("button, a");
    }
    local(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.px = e.clientX - rect.left;
      this.py = e.clientY - rect.top;
    }
    pointerDown(e) {
      if (this.isUi(e.target)) return;
      if (e.button !== 0) return;
      audio.unlock();
      this.grabbed = true;
      this.coasting = false;
      this.pointerId = e.pointerId;
      this.holding = true;
      this.missedThisDrag = false;
      this.moved = 0;
      this.local(e);
      this.fingerX = clamp(this.px, 16, this.w - 16);
      this.fingerY = clamp(this.py, 16, this.h - 16);
      this.downX = this.px;
      this.downY = this.py;
      this.aimX = clamp(this.px, 20, this.w - 20);
      this.aimY = clamp(this.py, 20, this.h - 20);
      this.swoop = null;
    }
    pointerMove(e) {
      if (!this.holding || e.pointerId !== this.pointerId) return;
      this.local(e);
      this.fingerX = clamp(this.px, 16, this.w - 16);
      this.fingerY = clamp(this.py, 16, this.h - 16);
      this.moved += Math.hypot(e.movementX, e.movementY);
      this.aimX = this.fingerX;
      this.aimY = this.fingerY;
    }
    pointerUp(e) {
      if (!this.holding || this.pointerId !== null && e.pointerId !== this.pointerId) return;
      this.local(e);
      this.holding = false;
      this.pointerId = null;
      const travel = Math.hypot(this.px - this.downX, this.py - this.downY);
      if (travel > 18 || this.moved > 18) {
        this.coasting = true;
        return;
      }
      if (this.scene !== "play" || this.mode !== "live") return;
      const r = this.radius() * 2.2;
      let best = null;
      let bestD = r * r;
      for (const t of this.targets) {
        if (t.shy > 0) continue;
        const dx = t.x - this.px;
        const dy = t.y - this.py;
        const d = dx * dx + dy * dy;
        if (d < bestD) {
          best = t;
          bestD = d;
        }
      }
      if (!best) return;
      if (this.overlaps(best)) this.catch(best);
      else this.swoop = best;
    }
    key(e, down) {
      const steer = KEY_LEFT.has(e.code) || KEY_RIGHT.has(e.code) || KEY_UP.has(e.code) || KEY_DOWN.has(e.code);
      if (!steer) return;
      e.preventDefault();
      if (down) this.keys.add(e.code);
      else this.keys.delete(e.code);
      if (down) audio.unlock();
    }
    draw() {
      const ctx = this.ctx;
      const w = this.w;
      const h = this.h;
      if (w < 2 || h < 2) return;
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = rgba(this.deep, 1);
      ctx.fillRect(0, 0, w, h);
      const t = this.reduced ? this.time * 0.35 : this.time;
      const span = Math.max(w, h);
      const pulse = (speed, phase) => this.reduced ? 1 : 0.82 + Math.sin(t * speed + phase) * 0.18;
      const orbs = [
        { x: w * 0.5 + Math.cos(t * 0.17) * w * 0.22, y: h * 0.36 + Math.sin(t * 0.21) * h * 0.12, r: span * 0.52, c: this.vivid(this.washes[0]), a: 0.55 * pulse(0.35, 0) },
        { x: w * 0.18 + Math.sin(t * 0.15) * w * 0.1, y: h * 0.72 + Math.cos(t * 0.12) * h * 0.08, r: span * 0.42, c: this.vivid(this.washes[1]), a: 0.44 * pulse(0.28, 1.2) },
        { x: w * 0.84 + Math.cos(t * 0.11 + 1) * w * 0.08, y: h * 0.26 + Math.sin(t * 0.16) * h * 0.1, r: span * 0.38, c: this.vivid(this.washes[2]), a: 0.42 * pulse(0.31, 2.1) },
        { x: w * 0.62 + Math.sin(t * 0.23) * w * 0.16, y: h * 0.58 + Math.cos(t * 0.19) * h * 0.1, r: span * 0.28, c: this.vivid(this.washes[0]), a: 0.29 * pulse(0.44, 0.6) },
        { x: w * 0.32 + Math.cos(t * 0.27 + 2) * w * 0.12, y: h * 0.18 + Math.sin(t * 0.14) * h * 0.06, r: span * 0.24, c: this.vivid(this.washes[2]), a: 0.26 * pulse(0.5, 2.8) }
      ];
      ctx.globalCompositeOperation = "lighter";
      for (const orb of orbs) this.blob(orb.x, orb.y, orb.r, orb.c, orb.a);
      if (!this.reduced && this.quality > 0) {
        this.drawAurora(w, h, t);
        this.drawMilky(w, h, t);
      }
      ctx.globalCompositeOperation = "source-over";
      const vig = ctx.createRadialGradient(w / 2, h * 0.45, h * 0.15, w / 2, h * 0.5, h * 0.78);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(6,3,12,0.38)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);
      for (const d of this.dust) {
        const x = (d.x + t * 0.012 * d.s) % 1 * w;
        const y = (d.y + Math.sin(t * 0.35 + d.p) * 0.02 + 1) % 1 * h;
        const twinkle = 0.2 + (Math.sin(t * (0.9 + d.s) + d.p) * 0.5 + 0.5) * 0.8;
        ctx.globalAlpha = this.reduced ? 0.35 : twinkle;
        const hue = d.hue;
        ctx.fillStyle = hue > 0.72 ? "#d7ecff" : hue > 0.42 ? "#fff4e4" : "#ffd9a0";
        ctx.beginPath();
        ctx.arc(x, y, d.r * (this.reduced ? 1 : 0.8 + twinkle), 0, Math.PI * 2);
        ctx.fill();
        if (!this.reduced && d.s > 0.72) {
          ctx.globalAlpha = twinkle * 0.55;
          ctx.strokeStyle = "#fff4e4";
          ctx.lineWidth = 1;
          const arm = 3 + d.r * 3.2 * twinkle;
          ctx.beginPath();
          ctx.moveTo(x - arm, y);
          ctx.lineTo(x + arm, y);
          ctx.moveTo(x, y - arm);
          ctx.lineTo(x, y + arm);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      for (const target of this.targets) this.drawTarget(target);
      for (const ring of this.rings) {
        if (!ring.on) continue;
        ctx.beginPath();
        if (ring.life < 0) continue;
        ctx.arc(ring.x, ring.y, 18 + ring.life * 120, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ring.cr},${ring.cg},${ring.cb},${1 - ring.life})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      this.drawComet();
      for (const p of this.particles) {
        if (!p.on) continue;
        const a = Math.max(0, p.life / p.max);
        ctx.fillStyle = `rgba(${p.cr},${p.cg},${p.cb},${a})`;
        ctx.beginPath();
        if (p.star) {
          const rot = p.spin * (p.max - p.life);
          for (let i = 0; i < 10; i++) {
            const rad = i % 2 === 0 ? p.r : p.r * 0.45;
            const ang = rot - Math.PI / 2 + i * Math.PI / 5;
            if (i === 0) ctx.moveTo(p.x + Math.cos(ang) * rad, p.y + Math.sin(ang) * rad);
            else ctx.lineTo(p.x + Math.cos(ang) * rad, p.y + Math.sin(ang) * rad);
          }
          ctx.closePath();
        } else ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    drawAurora(w, h, t) {
      const ctx = this.ctx;
      const span = Math.max(w, h);
      ctx.save();
      ctx.translate(w * 0.5, h * 0.4);
      ctx.rotate(Math.sin(t * 0.08) * 0.55 + t * 0.045);
      ctx.scale(1.15, 0.32);
      this.blob(Math.sin(t * 0.3) * 30, 0, span * 0.7, this.vivid(this.washes[1]), 0.34);
      ctx.restore();
      ctx.save();
      ctx.translate(w * 0.48, h * 0.66);
      ctx.rotate(-t * 0.06 + 0.4);
      ctx.scale(1.05, 0.24);
      this.blob(Math.cos(t * 0.22) * 50, 0, span * 0.62, this.vivid(this.washes[0]), 0.26);
      ctx.restore();
    }
    vivid(c) {
      return [
        clamp(c[0] + (c[0] - 128) * 0.3, 0, 255),
        clamp(c[1] + (c[1] - 128) * 0.3, 0, 255),
        clamp(c[2] + (c[2] - 128) * 0.3, 0, 255)
      ];
    }
    blob(x, y, r, c, a) {
      const g = this.ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rgba(c, a));
      g.addColorStop(1, rgba(c, 0));
      this.ctx.fillStyle = g;
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, Math.PI * 2);
      this.ctx.fill();
    }
    drawMilky(w, h, t) {
      const ctx = this.ctx;
      const span = Math.max(w, h);
      ctx.save();
      ctx.translate(w * 0.52, h * 0.48);
      ctx.rotate(-0.55 + Math.sin(t * 0.04) * 0.06);
      ctx.scale(1.35, 0.16);
      this.blob(Math.sin(t * 0.1) * 20, 0, span * 0.62, [236, 214, 255], 0.26);
      ctx.restore();
      ctx.save();
      ctx.translate(w * 0.4, h * 0.58);
      ctx.rotate(-0.5);
      ctx.scale(0.9, 0.1);
      this.blob(0, 0, span * 0.4, [255, 186, 110], 0.16);
      ctx.restore();
    }
    // ---------------------------------------------------------------------------
    // The light: a swirling ball of plasma with a real particle dust tail.
    // ---------------------------------------------------------------------------
    pickTint() {
      let roll = Math.random();
      for (let i = 0; i < DUST_WEIGHTS.length; i++) {
        roll -= DUST_WEIGHTS[i];
        if (roll <= 0) return i;
      }
      return 0;
    }
    /** Spawn dust from the ball and move every speck. Runs at a fixed 60 steps a second. */
    simMotes(dt) {
      const px = this.player.x;
      const py = this.player.y;
      const vx = this.player.vx;
      const vy = this.player.vy;
      const speed = Math.hypot(vx, vy);
      const reduced = this.reduced;
      const q = this.quality === 2 ? 1 : this.quality === 1 ? 0.55 : 0.3;
      const rate = (reduced ? 14 + Math.min(speed, 1400) * 0.06 : 80 + Math.min(speed, 1800) * 0.7) * q;
      this.moteAcc += rate * dt;
      let n = Math.floor(this.moteAcc);
      this.moteAcc -= n;
      if (n > 40) n = 40;
      const ux = speed > 1 ? vx / speed : 0;
      const uy = speed > 1 ? vy / speed : 0;
      for (let k = 0; k < n; k++) {
        const m = this.motes[this.moteNext];
        this.moteNext = (this.moteNext + 1) % MOTES;
        const s = (k + Math.random()) / n;
        const sx = lerp(this.lastBallX, px, s);
        const sy = lerp(this.lastBallY, py, s);
        const a = Math.random() * Math.PI * 2;
        const rr = Math.sqrt(Math.random()) * BALL * 0.75;
        const puff = !reduced && Math.random() < 0.1;
        const kick = 6 + Math.random() * (reduced ? 10 : 34);
        const inherit = 0.08 + Math.random() * 0.28;
        m.on = true;
        m.x = sx + Math.cos(a) * rr;
        m.y = sy + Math.sin(a) * rr;
        const side = (Math.random() - 0.5) * 2 * (10 + speed * 0.05);
        m.vx = vx * inherit + Math.cos(a) * kick - uy * side - ux * speed * 0.04;
        m.vy = vy * inherit + Math.sin(a) * kick + ux * side - uy * speed * 0.04;
        m.max = reduced ? 0.45 + Math.random() * 0.4 : puff ? 0.7 + Math.random() * 0.7 : 0.7 + Math.random() * 1.7;
        m.life = m.max;
        m.r = puff ? 5 + Math.random() * 7 : 0.45 + Math.pow(Math.random(), 2.2) * 2.3;
        m.c = puff ? Math.random() < 0.6 ? 0 : this.pickTint() : this.pickTint();
        m.seed = Math.random() * 100;
        m.puff = puff;
      }
      this.lastBallX = px;
      this.lastBallY = py;
      const drag = Math.exp(-(reduced ? 3 : 1.5) * dt);
      const t = this.time;
      for (const m of this.motes) {
        if (!m.on) continue;
        m.life -= dt;
        if (m.life <= 0) {
          m.on = false;
          continue;
        }
        m.vx *= drag;
        m.vy *= drag;
        if (!reduced) {
          m.vx += Math.sin(m.y * 0.019 + t * 1.1 + m.seed) * 26 * dt;
          m.vy += Math.cos(m.x * 0.017 - t * 0.9 + m.seed * 1.7) * 26 * dt;
          m.vy -= 5 * dt;
        }
        m.x += m.vx * dt;
        m.y += m.vy * dt;
      }
    }
    makeSprite(size, stops) {
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const g = c.getContext("2d");
      const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      for (const [o, col] of stops) grad.addColorStop(o, col);
      g.fillStyle = grad;
      g.fillRect(0, 0, size, size);
      return c;
    }
    ensureSprites() {
      if (this.sprites) return this.sprites;
      const speck = DUST_TINTS.map(
        (c) => this.makeSprite(32, [
          [0, "rgba(255,255,255,1)"],
          [0.14, rgba(c, 1)],
          [0.32, rgba(c, 0.38)],
          [0.62, rgba(c, 0.08)],
          [1, rgba(c, 0)]
        ])
      );
      const puff = DUST_TINTS.map(
        (c) => this.makeSprite(64, [
          [0, rgba(c, 0.5)],
          [0.4, rgba(c, 0.18)],
          [1, rgba(c, 0)]
        ])
      );
      const halo = this.makeSprite(256, [
        [0, "rgba(255,220,160,0.6)"],
        [0.12, "rgba(255,200,130,0.5)"],
        [0.24, "rgba(255,170,110,0.3)"],
        [0.45, "rgba(255,140,120,0.14)"],
        [0.7, "rgba(150,120,255,0.05)"],
        [1, "rgba(120,100,255,0)"]
      ]);
      this.sprites = { speck, puff, halo };
      return this.sprites;
    }
    drawComet() {
      const speed = Math.hypot(this.player.vx, this.player.vy);
      this.drawDustTail();
      this.drawSwirl(this.player.x, this.player.y, speed);
      if (this.holding) this.blob(this.fingerX, this.fingerY, 18, [255, 236, 210], 0.18);
    }
    drawDustTail() {
      const ctx = this.ctx;
      const sp = this.ensureSprites();
      const t = this.time;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const m of this.motes) {
        if (!m.on) continue;
        const u = m.life / m.max;
        const fadeIn = Math.min(1, (1 - u) * 10);
        let a = fadeIn * Math.pow(u, 1.25);
        if (m.puff) {
          a *= 0.55;
          const size2 = m.r * (1.6 - u * 0.6) * 2;
          ctx.globalAlpha = a;
          ctx.drawImage(sp.puff[m.c], m.x - size2 / 2, m.y - size2 / 2, size2, size2);
          continue;
        }
        a *= this.reduced ? 0.9 : 0.72 + 0.28 * Math.sin(t * 11 + m.seed * 7);
        if (a < 0.02) continue;
        const size = Math.max(1.2, m.r * (0.35 + 0.65 * u) * 5);
        ctx.globalAlpha = Math.min(1, a);
        ctx.drawImage(sp.speck[m.c], m.x - size / 2, m.y - size / 2, size, size);
      }
      ctx.restore();
    }
    drawSwirl(x, y, speed) {
      const ctx = this.ctx;
      const sp = this.ensureSprites();
      const time = this.reduced ? this.time * 0.25 : this.time;
      const pulse = this.reduced ? 1 : 0.94 + Math.sin(this.time * 2.6) * 0.06;
      const R = BALL * pulse;
      const ux = speed > 1 ? this.player.vx / speed : 0;
      const uy = speed > 1 ? this.player.vy / speed : 0;
      const lean = Math.min(speed / 900, 1);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const halo = R * 7.4 * (1 + lean * 0.12);
      ctx.globalAlpha = 0.5;
      ctx.drawImage(sp.halo, x - halo / 2, y - halo / 2, halo, halo);
      if (lean > 0.05) {
        const back = R * 1.6 * lean;
        const h2 = halo * 0.75;
        ctx.globalAlpha = 0.3 * lean;
        ctx.drawImage(sp.halo, x - ux * back - h2 / 2, y - uy * back - h2 / 2, h2, h2);
      }
      ctx.globalAlpha = 1;
      ctx.translate(x, y);
      ctx.globalCompositeOperation = "source-over";
      const body = ctx.createRadialGradient(-R * 0.25, -R * 0.3, R * 0.1, 0, 0, R * 1.08);
      body.addColorStop(0, "rgba(255,214,150,0.75)");
      body.addColorStop(0.55, "rgba(255,140,90,0.55)");
      body.addColorStop(0.88, "rgba(190,80,160,0.5)");
      body.addColorStop(1, "rgba(120,80,220,0.15)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.02, 0, Math.PI * 2);
      ctx.clip();
      ctx.lineCap = "round";
      const arms = [
        { sp: 1.6, ph: 0, tint: [255, 200, 70], len: 3.4 },
        { sp: 1.6, ph: Math.PI, tint: [255, 120, 70], len: 3 },
        { sp: -1.15, ph: 1.1, tint: [80, 190, 255], len: 2.6 },
        { sp: -1.15, ph: 4.2, tint: [255, 80, 150], len: 2.8 },
        { sp: 2.3, ph: 2.4, tint: [180, 120, 255], len: 2.2 },
        { sp: 0.9, ph: 5.3, tint: [255, 245, 210], len: 3.8 }
      ];
      for (let i = 0; i < arms.length; i++) {
        const arm = arms[i];
        const base = time * arm.sp + arm.ph;
        const wob = Math.sin(time * 1.7 + i * 1.3) * 0.5;
        ctx.beginPath();
        const steps = 14;
        for (let s = 0; s <= steps; s++) {
          const f = s / steps;
          const rad = R * (0.08 + f * 0.95);
          const ang = base + f * (arm.len + wob) * Math.sign(arm.sp);
          const px = Math.cos(ang) * rad;
          const py = Math.sin(ang) * rad;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = rgba(arm.tint, 0.38);
        ctx.lineWidth = R * 0.3;
        ctx.stroke();
        ctx.globalCompositeOperation = "screen";
        ctx.strokeStyle = rgba(arm.tint, 0.95);
        ctx.lineWidth = R * 0.1;
        ctx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        const a = time * (2.1 - i * 0.5) + i * 2.1;
        const rr = R * (0.42 + Math.sin(time * 1.3 + i) * 0.14);
        ctx.globalCompositeOperation = "screen";
        this.blob(Math.cos(a) * rr, Math.sin(a) * rr, R * 0.4, DUST_TINTS[(i + 1) % DUST_TINTS.length], 0.5);
      }
      ctx.restore();
      ctx.globalCompositeOperation = "lighter";
      const core = ctx.createRadialGradient(0, 0, 0, 0, 0, R * 0.52);
      core.addColorStop(0, "rgba(255,255,255,1)");
      core.addColorStop(0.3, "rgba(255,248,225,0.9)");
      core.addColorStop(0.65, "rgba(255,210,120,0.4)");
      core.addColorStop(1, "rgba(255,180,90,0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(0, 0, R * 0.52, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.02, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,240,215,0.28)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, R * 0.9, Math.PI * 1.05, Math.PI * 1.45);
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.globalCompositeOperation = "lighter";
      const flare = R * (2.3 + (this.reduced ? 0 : Math.sin(this.time * 3.1) * 0.35));
      ctx.rotate(this.reduced ? 0.4 : this.time * 0.25);
      ctx.globalAlpha = 0.45;
      for (let i = 0; i < 2; i++) {
        const g = ctx.createLinearGradient(-flare, 0, flare, 0);
        g.addColorStop(0, "rgba(255,240,210,0)");
        g.addColorStop(0.5, "rgba(255,250,240,0.9)");
        g.addColorStop(1, "rgba(255,240,210,0)");
        ctx.fillStyle = g;
        ctx.fillRect(-flare, -0.9, flare * 2, 1.8);
        ctx.rotate(Math.PI / 2);
      }
      ctx.restore();
    }
    drawTarget(t) {
      const ctx = this.ctx;
      const pop = this.ease(t.pop);
      const shy = t.shy > 0 ? 0.72 : 1;
      let fade = shy;
      let grow = pop;
      if (this.mode === "over") fade *= 1 - Math.min(1, this.overT / 0.8);
      if (this.mode === "celebrate") {
        const u = Math.min(1, this.celebrate / 0.7);
        fade *= 1 - u;
        if (t.correct) grow *= 1 + u * 0.35;
      }
      const wob = t.shy > 0 ? Math.sin(t.shy * 46) * 6 : 0;
      const x = t.x + wob;
      const y = t.y;
      const breathe = this.reduced ? 1 : 1 + Math.sin(this.time * 1.7 + t.phase) * 0.06;
      const r = this.radius() * grow * breathe;
      const shine = this.time * 1.15 + t.phase;
      ctx.save();
      ctx.globalAlpha = Math.max(0, fade);
      ctx.translate(x, y);
      ctx.fillStyle = "rgba(4, 2, 12, 0.32)";
      ctx.beginPath();
      ctx.ellipse(3, r * 0.78, r * 0.7, r * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      if (t.spec.kind === "shape") {
        this.glass(r, [255, 226, 186], true, shine);
        ctx.save();
        ctx.scale(0.56, 0.56);
        this.fillShape(t.spec.shape, r);
        ctx.restore();
      } else if (t.spec.kind === "color") {
        this.glass(r, rgbOf(t.spec.hex), false, shine);
      } else {
        this.glass(r, [176, 214, 255], true, shine);
        if (t.spec.kind === "number") {
          if (t.spec.numeral) this.drawLetter(String(t.spec.n), r);
          else this.drawDots(t.spec.n, r);
        } else this.drawLetter(t.spec.ch, r);
      }
      ctx.restore();
    }
    ease(p) {
      const c = clamp(p, 0, 1);
      return 1 - Math.pow(1 - c, 3);
    }
    glass(r, tint, clear, shine) {
      const ctx = this.ctx;
      const hx = Math.cos(shine) * 0.34;
      const hy = Math.sin(shine) * 0.28 - 0.12;
      this.blob(0, 0, r * 1.35, tint, clear ? 0.22 : 0.36);
      const body = ctx.createRadialGradient(-r * 0.25, -r * 0.32, r * 0.05, 0, r * 0.1, r);
      if (clear) {
        body.addColorStop(0, "rgba(255,255,255,0.2)");
        body.addColorStop(0.42, "rgba(255,255,255,0.05)");
        body.addColorStop(0.78, rgba(tint, 0.2));
        body.addColorStop(1, rgba(tint, 0.8));
      } else {
        body.addColorStop(0, "rgba(255,255,255,0.78)");
        body.addColorStop(0.18, rgba(tint, 0.72));
        body.addColorStop(0.62, rgba(tint, 0.95));
        body.addColorStop(0.88, rgba([tint[0] * 0.55, tint[1] * 0.5, tint[2] * 0.55], 1));
        body.addColorStop(1, "rgba(255,255,255,0.62)");
      }
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.9, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.97, Math.PI * 0.85, Math.PI * 1.7);
      ctx.strokeStyle = "rgba(255,255,255,0.78)";
      ctx.lineWidth = Math.max(2.5, r * 0.07);
      ctx.stroke();
      const glint = ctx.createRadialGradient(hx * r, hy * r, 0, hx * r, hy * r, r * 0.42);
      glint.addColorStop(0, "rgba(255,255,255,0.95)");
      glint.addColorStop(0.45, "rgba(255,255,255,0.28)");
      glint.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = glint;
      ctx.beginPath();
      ctx.ellipse(hx * r, hy * r, r * 0.26, r * 0.15, shine, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.beginPath();
      ctx.arc(r * 0.32, r * 0.28, r * 0.055, 0, Math.PI * 2);
      ctx.fill();
      const fresnel = ctx.createRadialGradient(0, 0, r * 0.62, 0, 0, r);
      fresnel.addColorStop(0, "rgba(255,255,255,0)");
      fresnel.addColorStop(0.78, "rgba(255,255,255,0)");
      fresnel.addColorStop(0.92, clear ? "rgba(210,230,255,0.28)" : rgba(tint, 0.35));
      fresnel.addColorStop(1, "rgba(255,255,255,0.9)");
      ctx.fillStyle = fresnel;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(r * 0.02, 0, r * 0.96, Math.PI * 1.1, Math.PI * 1.55);
      ctx.strokeStyle = "rgba(130, 200, 255, 0.55)";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(-r * 0.02, 0, r * 0.96, Math.PI * 0.05, Math.PI * 0.45);
      ctx.strokeStyle = "rgba(255, 150, 130, 0.4)";
      ctx.stroke();
    }
    drawDots(n, r) {
      const ctx = this.ctx;
      ctx.fillStyle = "#1a1228";
      const many = n > 5;
      const spread = r * (many ? 0.6 : 0.36);
      const dot = many ? Math.max(3.6, r * 0.11) : Math.max(4, r * 0.1);
      for (const [dx, dy] of dotPositions(n)) {
        ctx.beginPath();
        ctx.arc(dx * spread, dy * spread, dot, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    drawLetter(ch, r) {
      const ctx = this.ctx;
      ctx.fillStyle = "#1a1228";
      const lower = ch.length === 1 && ch !== ch.toUpperCase();
      const size = ch.length > 1 ? r * 0.86 : lower ? r * 1.22 : r * 1.05;
      ctx.font = `600 ${Math.round(size)}px Fredoka, "Baloo 2", Nunito, system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(ch, 0, r * 0.06);
    }
    fillShape(shape, r) {
      const ctx = this.ctx;
      const g = ctx.createRadialGradient(-r * 0.25, -r * 0.35, r * 0.1, 0, 0, r);
      g.addColorStop(0, "#fffaf3");
      g.addColorStop(0.62, "#ffe3b0");
      g.addColorStop(1, "#f0b45c");
      ctx.fillStyle = g;
      ctx.beginPath();
      this.traceShape(shape, r);
      ctx.fill();
    }
    traceShape(shape, r) {
      const ctx = this.ctx;
      if (shape === "circle") {
        ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2);
        return;
      }
      if (shape === "square") {
        const s = r * 0.78;
        roundRectPath(ctx, -s, -s, s * 2, s * 2, r * 0.22);
        return;
      }
      if (shape === "triangle") {
        ctx.moveTo(0, -r * 0.98);
        ctx.lineTo(r * 0.98, r * 0.78);
        ctx.lineTo(-r * 0.98, r * 0.78);
        ctx.closePath();
        return;
      }
      if (shape === "diamond") {
        ctx.moveTo(0, -r);
        ctx.lineTo(r * 0.78, 0);
        ctx.lineTo(0, r);
        ctx.lineTo(-r * 0.78, 0);
        ctx.closePath();
        return;
      }
      if (shape === "star") {
        const inner = r * 0.42;
        for (let i = 0; i < 10; i++) {
          const rad = i % 2 === 0 ? r : inner;
          const a = -Math.PI / 2 + i * Math.PI / 5;
          const px = Math.cos(a) * rad;
          const py = Math.sin(a) * rad;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        return;
      }
      if (shape === "oval") {
        ctx.ellipse(0, 0, r * 0.62, r * 0.95, 0, 0, Math.PI * 2);
        return;
      }
      if (shape === "rectangle") {
        roundRectPath(ctx, -r * 0.98, -r * 0.56, r * 1.96, r * 1.12, r * 0.14);
        return;
      }
      if (shape === "pentagon" || shape === "hexagon" || shape === "octagon") {
        const sides = shape === "pentagon" ? 5 : shape === "hexagon" ? 6 : 8;
        const start = -Math.PI / 2 + (shape === "octagon" ? Math.PI / 8 : 0);
        for (let i = 0; i < sides; i++) {
          const a = start + i * Math.PI * 2 / sides;
          const px = Math.cos(a) * r * 0.98;
          const py = Math.sin(a) * r * 0.98;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        return;
      }
      if (shape === "moon") {
        const r1 = r * 0.95;
        const r2 = r * 0.8;
        const d = r * 0.5;
        const ix = (d * d + r1 * r1 - r2 * r2) / (2 * d);
        const iy = Math.sqrt(Math.max(0, r1 * r1 - ix * ix));
        const a1 = Math.atan2(iy, ix);
        const a2 = Math.atan2(iy, ix - d);
        ctx.save();
        ctx.rotate(-0.5);
        ctx.arc(0, 0, r1, a1, Math.PI * 2 - a1, false);
        ctx.arc(d, 0, r2, -a2, a2, true);
        ctx.closePath();
        ctx.restore();
        return;
      }
      ctx.moveTo(0, r * 0.72);
      ctx.bezierCurveTo(-r * 1.15, r * 0.05, -r * 0.72, -r * 0.78, 0, -r * 0.28);
      ctx.bezierCurveTo(r * 0.72, -r * 0.78, r * 1.15, r * 0.05, 0, r * 0.72);
      ctx.closePath();
    }
  };

  // save.ts
  var KEY = "luma-drift-v1";
  var MUTE_MEMORY_MS = 12 * 60 * 60 * 1e3;
  var emptySave = { version: 1, lights: 0, sound: true };
  function readSave() {
    if (typeof window === "undefined") return emptySave;
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return emptySave;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return emptySave;
      return {
        version: 1,
        lights: typeof parsed.lights === "number" && isFinite(parsed.lights) && parsed.lights >= 0 ? Math.min(Math.floor(parsed.lights), 1e7) : 0,
        sound: !(parsed.sound === false && typeof parsed.mutedAt === "number" && isFinite(parsed.mutedAt) && Date.now() - parsed.mutedAt >= 0 && Date.now() - parsed.mutedAt < MUTE_MEMORY_MS),
        mutedAt: typeof parsed.mutedAt === "number" ? parsed.mutedAt : void 0
      };
    } catch (e) {
      return emptySave;
    }
  }
  function writeSave(save) {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(KEY, JSON.stringify(save));
    } catch (e) {
    }
  }

  // main.ts
  var ICON_HOME = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>';
  var ICON_ON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.4 18.4a9 9 0 0 0 0-12.7"/></svg>';
  var ICON_OFF = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>';
  var HEART = '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 4.5 6.6 4.5c2.1 0 3.6 1.2 4.4 2.6.8-1.4 2.3-2.6 4.4-2.6 3.7 0 5.7 3.9 4.2 7.3C19.5 16.4 12 21 12 21z"/></svg>';
  var MSG_MS = 2e3;
  var FADE_MS = 600;
  var $ = (sel) => document.querySelector(sel);
  function bouncy(el, text) {
    el.textContent = "";
    [...text].forEach((ch, i) => {
      const s = document.createElement("span");
      s.className = ch === " " ? "sp" : "bl";
      s.textContent = ch === " " ? "\xA0" : ch;
      s.style.setProperty("--i", String(i));
      el.appendChild(s);
    });
  }
  function boot() {
    const canvas = $("#sky");
    const homeBtn = $("#home");
    const soundBtn = $("#sound");
    const hubEl = $("#hub");
    const playEl = $("#play");
    const ring = $("#orbit");
    const foot = $("#foot");
    const kicker = $("#kicker");
    const title = $("#title");
    const hint = $("#hint");
    const praiseBox = $("#praise");
    const pips = $("#pips");
    const live = $("#live");
    const hearts = $("#hearts");
    const levelBadge = $("#level");
    const overEl = $("#gameover");
    const overScore = $("#over-score");
    const againBtn = $("#again");
    const overHome = $("#over-home");
    let msgTimer = 0;
    const saved = readSave();
    let lights = saved.lights;
    let sound = saved.sound;
    let mutedAt = sound ? void 0 : saved.mutedAt;
    let phase = "hub";
    let lastPulse = -1;
    audio.setEnabled(sound);
    bouncy($("#logo-a"), "Luma");
    bouncy($("#logo-b"), "Drift");
    const renderFoot = () => {
      foot.textContent = lights > 0 ? `${lights} ${lights === 1 ? "light" : "lights"} found so far \u2728` : "Tap a bubble to start";
    };
    const renderSound = () => {
      soundBtn.innerHTML = sound ? ICON_ON : ICON_OFF;
      soundBtn.setAttribute("aria-label", sound ? "Turn sound off" : "Turn sound on");
      soundBtn.setAttribute("aria-pressed", String(sound));
    };
    homeBtn.innerHTML = ICON_HOME;
    const soundHint = document.getElementById("sound-hint");
    let hintTimer = 0;
    const checkSound = () => {
      if (!soundHint) return;
      window.clearTimeout(hintTimer);
      hintTimer = window.setTimeout(() => {
        soundHint.hidden = !audio.needsTap;
      }, 700);
    };
    for (const ev of ["touchend", "click", "keydown"]) document.addEventListener(ev, checkSound, { passive: true });
    document.addEventListener("visibilitychange", checkSound);
    const renderHud = (hud) => {
      if (phase !== "play") return;
      kicker.textContent = hud.kicker;
      if (title.dataset.text !== hud.title) {
        title.dataset.text = hud.title;
        bouncy(title, hud.title);
        title.classList.remove("pop");
        void title.offsetWidth;
        title.classList.add("pop");
      }
      title.className = title.className.replace(/\btone-\w+/g, "").trim() + ` tone-${hud.tone}`;
      hint.textContent = hud.hint;
      if (hud.praise && hud.pulse !== lastPulse) {
        lastPulse = hud.pulse;
        const p = document.createElement("p");
        p.className = `praise praise-${hud.msgKind}`;
        p.dataset.born = String(performance.now());
        p.textContent = hud.msgKind === "level" ? `\u2B50 ${hud.praise} \u2B50` : hud.praise;
        praiseBox.replaceChildren(p);
        window.clearTimeout(msgTimer);
        msgTimer = window.setTimeout(() => p.remove(), MSG_MS + FADE_MS);
      }
      hearts.replaceChildren(
        ...Array.from({ length: hud.maxLives }, (_, i) => {
          const s = document.createElement("span");
          s.className = i < hud.lives ? "heart" : "heart lost";
          s.innerHTML = HEART;
          return s;
        })
      );
      hearts.setAttribute("aria-label", `${hud.lives} of ${hud.maxLives} hearts left`);
      levelBadge.textContent = `Level ${hud.level}`;
      if (hud.over && overEl.hidden) {
        overScore.textContent = hud.score === 0 ? "Let's try again!" : `You found ${hud.score} ${hud.score === 1 ? "light" : "lights"}!`;
        overEl.hidden = false;
        praiseBox.replaceChildren();
        window.setTimeout(() => againBtn.focus({ preventScroll: true }), 50);
      } else if (!hud.over) {
        overEl.hidden = true;
      }
      pips.replaceChildren(
        ...Array.from({ length: hud.total }, (_, i) => {
          const s = document.createElement("span");
          s.className = i < hud.filled ? "pip on" : "pip";
          return s;
        })
      );
      live.textContent = hud.over ? `Game over. ${overScore.textContent}` : `${hud.kicker}. ${hud.title}. ${hud.hint}. ${hud.praise}`;
    };
    const engine = new LumaEngine(canvas, {
      onCorrect: () => {
        lights += 1;
        writeSave({ version: 1, lights, sound, mutedAt });
        renderFoot();
      },
      onHud: renderHud
    });
    const setPhase = (next) => {
      phase = next;
      hubEl.hidden = next !== "hub";
      playEl.hidden = next !== "play";
      homeBtn.hidden = next !== "play";
      hearts.hidden = next !== "play";
      overEl.hidden = true;
      praiseBox.replaceChildren();
      if (next === "hub") {
        live.textContent = "";
        title.dataset.text = "";
      }
    };
    const enter = (realm) => {
      setPhase("play");
      engine.begin(realm);
    };
    GARDENS.forEach((g, i) => {
      const slot = document.createElement("div");
      slot.className = "orbit-slot";
      slot.style.transform = `rotate(${i * 72}deg) translateY(calc(-1 * var(--orbit)))`;
      const unspin = document.createElement("div");
      unspin.className = "orbit-unspin";
      const upright = document.createElement("div");
      upright.className = "orbit-upright";
      upright.style.transform = `rotate(${-i * 72}deg)`;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `galaxy galaxy-${g.id}`;
      btn.setAttribute("aria-label", `${g.label}. ${g.detail}`);
      btn.style.setProperty("--i", String(i));
      const name = document.createElement("span");
      name.className = "galaxy-name";
      name.textContent = g.label;
      btn.appendChild(name);
      btn.addEventListener("click", () => enter(g.id));
      upright.appendChild(btn);
      unspin.appendChild(upright);
      slot.appendChild(unspin);
      ring.appendChild(slot);
    });
    const goHome = () => {
      engine.hub();
      setPhase("hub");
    };
    homeBtn.addEventListener("click", goHome);
    overHome.addEventListener("click", goHome);
    againBtn.addEventListener("click", () => {
      overEl.hidden = true;
      praiseBox.replaceChildren();
      engine.restart();
    });
    soundBtn.addEventListener("click", () => {
      sound = !sound;
      audio.unlock();
      audio.setEnabled(sound);
      mutedAt = sound ? void 0 : Date.now();
      writeSave({ version: 1, lights, sound, mutedAt });
      renderSound();
    });
    renderFoot();
    renderSound();
    setPhase("hub");
    engine.start();
    window.__luma = engine;
    window.__LumaAudio = SoftAudio;
    window.__lumaSound = audio;
  }
  document.addEventListener("gesturestart", (e) => e.preventDefault(), { passive: false });
  var lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    (e) => {
      const now = Date.now();
      if (now - lastTouchEnd < 350 && !(e.target instanceof Element && e.target.closest("button"))) e.preventDefault();
      lastTouchEnd = now;
    },
    { passive: false }
  );
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  var fontReady = document.fonts ? Promise.race([document.fonts.load('600 40px "Fredoka"'), new Promise((r) => setTimeout(r, 1500))]) : Promise.resolve();
  fontReady.then(boot, boot);
})();
