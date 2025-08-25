var mi = Object.defineProperty;
var pi = (n, e, t) => e in n ? mi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Zt = (n, e, t) => (pi(n, typeof e != "symbol" ? e + "" : e, t), t);
function $() {
}
function V(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Al(n) {
  return n();
}
function un() {
  return /* @__PURE__ */ Object.create(null);
}
function de(n) {
  n.forEach(Al);
}
function ge(n) {
  return typeof n == "function";
}
function re(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function _i(n) {
  return Object.keys(n).length === 0;
}
function bi(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return $;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ut(n, e, t) {
  n.$$.on_destroy.push(bi(e, t));
}
function te(n, e, t, l) {
  if (n) {
    const i = yl(n, e, t, l);
    return n[0](i);
  }
}
function yl(n, e, t, l) {
  return n[1] && l ? V(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function ne(n, e, t, l) {
  if (n[2] && l) {
    const i = n[2](l(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], s = Math.max(e.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        r[a] = e.dirty[a] | i[a];
      return r;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function le(n, e, t, l, i, r) {
  if (i) {
    const s = yl(e, t, l, r);
    n.p(s, i);
  }
}
function ie(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function De(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function ue(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function ln(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function xt(n, e, t) {
  return n.set(t), e;
}
function J(n) {
  return n && ge(n.destroy) ? n.destroy : $;
}
const vi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function B(n, e) {
  n.appendChild(e);
}
function O(n, e, t) {
  n.insertBefore(e, t || null);
}
function P(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function At(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function F(n) {
  return document.createElement(n);
}
function Be(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Le(n) {
  return document.createTextNode(n);
}
function Z() {
  return Le(" ");
}
function ke() {
  return Le("");
}
function z(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function M(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ci = ["width", "height"];
function ee(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Ci.indexOf(l) === -1 ? n[l] = e[l] : M(n, l, e[l]);
}
function cn(n, e) {
  for (const t in e)
    M(n, t, e[t]);
}
function Ii(n, e) {
  Object.keys(e).forEach((t) => {
    Ai(n, t, e[t]);
  });
}
function Ai(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : M(n, e, t);
}
function Ct(n) {
  return /-/.test(n) ? Ii : ee;
}
function yi(n) {
  return Array.from(n.childNodes);
}
function Fe(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function fn(n, e) {
  n.value = e ?? "";
}
function Tt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function rt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Li(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Ot(n, e) {
  return new n(e);
}
let It;
function bt(n) {
  It = n;
}
function Se() {
  if (!It)
    throw new Error("Function called outside component initialization");
  return It;
}
function Ge(n) {
  Se().$$.on_mount.push(n);
}
function yt(n) {
  Se().$$.on_destroy.push(n);
}
function Nt() {
  const n = Se();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = Li(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return i.slice().forEach((s) => {
        s.call(n, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function Re(n, e) {
  return Se().$$.context.set(n, e), e;
}
function Pe(n) {
  return Se().$$.context.get(n);
}
function Ut(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ot = [], x = [];
let ct = [];
const $t = [], Ll = /* @__PURE__ */ Promise.resolve();
let en = !1;
function kl() {
  en || (en = !0, Ll.then(Sl));
}
function ki() {
  return kl(), Ll;
}
function tn(n) {
  ct.push(n);
}
function Xe(n) {
  $t.push(n);
}
const zt = /* @__PURE__ */ new Set();
let at = 0;
function Sl() {
  if (at !== 0)
    return;
  const n = It;
  do {
    try {
      for (; at < ot.length; ) {
        const e = ot[at];
        at++, bt(e), Si(e.$$);
      }
    } catch (e) {
      throw ot.length = 0, at = 0, e;
    }
    for (bt(null), ot.length = 0, at = 0; x.length; )
      x.pop()();
    for (let e = 0; e < ct.length; e += 1) {
      const t = ct[e];
      zt.has(t) || (zt.add(t), t());
    }
    ct.length = 0;
  } while (ot.length);
  for (; $t.length; )
    $t.pop()();
  en = !1, zt.clear(), bt(n);
}
function Si(n) {
  if (n.fragment !== null) {
    n.update(), de(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(tn);
  }
}
function wi(n) {
  const e = [], t = [];
  ct.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), ct = e;
}
const Mt = /* @__PURE__ */ new Set();
let lt;
function ce() {
  lt = {
    r: 0,
    c: [],
    p: lt
    // parent group
  };
}
function fe() {
  lt.r || de(lt.c), lt = lt.p;
}
function k(n, e) {
  n && n.i && (Mt.delete(n), n.i(e));
}
function R(n, e, t, l) {
  if (n && n.o) {
    if (Mt.has(n))
      return;
    Mt.add(n), lt.c.push(() => {
      Mt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function je(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Ei(n, e) {
  R(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Ri(n, e, t, l, i, r, s, a, o, u, c, f) {
  let d = n.length, m = r.length, _ = d;
  const b = {};
  for (; _--; )
    b[n[_].key] = _;
  const p = [], w = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), A = [];
  for (_ = m; _--; ) {
    const h = f(i, r, _), S = t(h);
    let G = s.get(S);
    G ? A.push(() => G.p(h, e)) : (G = u(S, h), G.c()), w.set(S, p[_] = G), S in b && I.set(S, Math.abs(_ - b[S]));
  }
  const g = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function E(h) {
    k(h, 1), h.m(a, c), s.set(h.key, h), c = h.first, m--;
  }
  for (; d && m; ) {
    const h = p[m - 1], S = n[d - 1], G = h.key, T = S.key;
    h === S ? (c = h.first, d--, m--) : w.has(T) ? !s.has(G) || g.has(G) ? E(h) : L.has(T) ? d-- : I.get(G) > I.get(T) ? (L.add(G), E(h)) : (g.add(T), d--) : (o(S, s), d--);
  }
  for (; d--; ) {
    const h = n[d];
    w.has(h.key) || o(h, s);
  }
  for (; m; )
    E(p[m - 1]);
  return de(A), p;
}
function ae(n, e) {
  const t = {}, l = {}, i = { $$scope: 1 };
  let r = n.length;
  for (; r--; ) {
    const s = n[r], a = e[r];
    if (a) {
      for (const o in s)
        o in a || (l[o] = 1);
      for (const o in a)
        i[o] || (t[o] = a[o], i[o] = 1);
      n[r] = a;
    } else
      for (const o in s)
        i[o] = 1;
  }
  for (const s in l)
    s in t || (t[s] = void 0);
  return t;
}
function Ae(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Ye(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function K(n) {
  n && n.c();
}
function X(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), tn(() => {
    const r = n.$$.on_mount.map(Al).filter(ge);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : de(r), n.$$.on_mount = [];
  }), i.forEach(tn);
}
function Y(n, e) {
  const t = n.$$;
  t.fragment !== null && (wi(t.after_update), de(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Hi(n, e) {
  n.$$.dirty[0] === -1 && (ot.push(n), kl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function se(n, e, t, l, i, r, s = null, a = [-1]) {
  const o = It;
  bt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: $,
    not_equal: i,
    bound: un(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: un(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...m) => {
    const _ = m.length ? m[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = _) && (!u.skip_bound && u.bound[f] && u.bound[f](_), c && Hi(n, f)), d;
  }) : [], u.update(), c = !0, de(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = yi(e.target);
      u.fragment && u.fragment.l(f), f.forEach(P);
    } else
      u.fragment && u.fragment.c();
    e.intro && k(n.$$.fragment), X(n, e.target, e.anchor), Sl();
  }
  bt(o);
}
class oe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Y(this, 1), this.$destroy = $;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ge(t))
      return $;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const i = l.indexOf(t);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !_i(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Di = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Di);
const wl = "archive-explorer", El = "0.0.1";
var nn = function(n, e) {
  return nn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, nn(n, e);
};
function dt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  nn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Te.apply(this, arguments);
};
function rn(n, e, t, l) {
  function i(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function a(c) {
      try {
        u(l.next(c));
      } catch (f) {
        s(f);
      }
    }
    function o(c) {
      try {
        u(l.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? r(c.value) : i(c.value).then(a, o);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function Ti(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, l, i, r, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = a(0), s.throw = a(1), s.return = a(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (l)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (t = 0)), t; )
      try {
        if (l = 1, i && (r = u[0] & 2 ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done)
          return r;
        switch (i = 0, r && (u = [u[0] & 2, r.value]), u[0]) {
          case 0:
          case 1:
            r = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!r || u[1] > r[0] && u[1] < r[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < r[1]) {
              t.label = r[1], r = u;
              break;
            }
            if (r && t.label < r[2]) {
              t.label = r[2], t.ops.push(u);
              break;
            }
            r[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = e.call(n, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        l = r = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Ke(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], l = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && l >= n.length && (n = void 0), { value: n && n[l++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Q(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function pe(n, e, t, l = { bubbles: !0 }, i = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, l), { detail: t }));
  if (n == null || n.dispatchEvent(r), i && e.startsWith("SMUI")) {
    const s = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, l), { detail: t }));
    n == null || n.dispatchEvent(s), s.defaultPrevented && r.preventDefault();
  }
  return r;
}
function ft(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i], s = r.indexOf("$");
    s !== -1 && e.indexOf(r.substring(0, s + 1)) !== -1 || e.indexOf(r) === -1 && (l[r] = n[r]);
  }
  return l;
}
const dn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Mi = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Me(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let s = i, a = () => {
    };
    return e ? a = e(s, r) : t.push([s, r]), s.match(dn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', s), () => {
      a();
    };
  };
  function l(i) {
    const r = n.$$.callbacks[i.type];
    r && r.slice().forEach((s) => s.call(this, i));
  }
  return (i) => {
    const r = [], s = {};
    e = (a, o) => {
      let u = a, c = o, f = !1;
      const d = u.match(dn), m = u.match(Mi), _ = d || m;
      if (u.match(/^SMUI:\w+:/)) {
        const w = u.split(":");
        let I = "";
        for (let A = 0; A < w.length; A++)
          I += A === w.length - 1 ? ":" + w[A] : w[A].split("-").map((g) => g.slice(0, 1).toUpperCase() + g.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${I.split("$")[0]}.`), u = I;
      }
      if (_) {
        const w = u.split(d ? ":" : "$");
        u = w[0];
        const I = w.slice(1).reduce((A, g) => (A[g] = !0, A), {});
        I.passive && (f = f || {}, f.passive = !0), I.nonpassive && (f = f || {}, f.passive = !1), I.capture && (f = f || {}, f.capture = !0), I.once && (f = f || {}, f.once = !0), I.preventDefault && (c = Pi(c)), I.stopPropagation && (c = Oi(c)), I.stopImmediatePropagation && (c = Ui(c)), I.self && (c = Bi(i, c)), I.trusted && (c = Fi(c));
      }
      const b = hn(i, u, c, f), p = () => {
        b();
        const w = r.indexOf(p);
        w > -1 && r.splice(w, 1);
      };
      return r.push(p), u in s || (s[u] = hn(i, u, l)), p;
    };
    for (let a = 0; a < t.length; a++)
      e(t[a][0], t[a][1]);
    return {
      destroy: () => {
        for (let a = 0; a < r.length; a++)
          r[a]();
        for (let a of Object.entries(s))
          a[1]();
      }
    };
  };
}
function hn(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function Pi(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Oi(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Ui(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Bi(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Fi(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ee(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.substring(0, e.length) === e && (l[r.substring(e.length)] = n[r]);
  }
  return l;
}
function ye(n, e) {
  let t = [];
  if (e)
    for (let l = 0; l < e.length; l++) {
      const i = e[l], r = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? t.push(r(n, i[1])) : t.push(r(n));
    }
  return {
    update(l) {
      if ((l && l.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (l)
        for (let i = 0; i < l.length; i++) {
          const r = t[i];
          if (r && r.update) {
            const s = l[i];
            Array.isArray(s) && s.length > 1 ? r.update(s[1]) : r.update();
          }
        }
    },
    destroy() {
      for (let l = 0; l < t.length; l++) {
        const i = t[l];
        i && i.destroy && i.destroy();
      }
    }
  };
}
var Rt;
function Gi(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Rt;
  if (typeof Rt == "boolean" && !e)
    return Rt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || s, e || (Rt = l), l;
}
function Ni(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var l = e.x, i = e.y, r = l + t.left, s = i + t.top, a, o;
  if (n.type === "touchstart") {
    var u = n;
    a = u.changedTouches[0].pageX - r, o = u.changedTouches[0].pageY - s;
  } else {
    var c = n;
    a = c.pageX - r, o = c.pageY - s;
  }
  return { x: a, y: o };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ht = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
  }()
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Vi(n) {
  return n === void 0 && (n = window), ji(n) ? { passive: !0 } : !1;
}
function ji(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, l = function() {
    };
    n.document.addEventListener("test", l, t), n.document.removeEventListener("test", l, t);
  } catch {
    e = !1;
  }
  return e;
}
const Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Vi
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Wi(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Hl(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Hl(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function qi(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Wi,
  estimateScrollWidth: qi,
  matches: Hl
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Zi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, zi = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, gn = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var mn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], pn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ht = [], Xi = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return l.activationAnimationHasEnded = !1, l.activationTimer = 0, l.fgDeactivationRemovalTimer = 0, l.fgScale = "0", l.frame = { width: 0, height: 0 }, l.initialSize = 0, l.layoutFrame = 0, l.maxRadius = 0, l.unboundedCoords = { left: 0, top: 0 }, l.activationState = l.defaultActivationState(), l.activationTimerCallback = function() {
        l.activationAnimationHasEnded = !0, l.runDeactivationUXLogicIfReady();
      }, l.activateHandler = function(i) {
        l.activateImpl(i);
      }, l.deactivateHandler = function() {
        l.deactivateImpl();
      }, l.focusHandler = function() {
        l.handleFocus();
      }, l.blurHandler = function() {
        l.handleBlur();
      }, l.resizeHandler = function() {
        l.layout();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this, l = this.supportsPressRipple();
      if (this.registerRootHandlers(l), l) {
        var i = e.cssClasses, r = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(r), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var l = e.cssClasses, i = l.ROOT, r = l.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(i), t.adapter.removeClass(r), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var l = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(t) {
      var l, i;
      if (t) {
        try {
          for (var r = Ke(mn), s = r.next(); !s.done; s = r.next()) {
            var a = s.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            s && !s.done && (i = r.return) && i.call(r);
          } finally {
            if (l)
              throw l.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var l, i;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var r = Ke(pn), s = r.next(); !s.done; s = r.next()) {
            var a = s.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            s && !s.done && (i = r.return) && i.call(r);
          } finally {
            if (l)
              throw l.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, l;
      try {
        for (var i = Ke(mn), r = i.next(); !r.done; r = i.next()) {
          var s = r.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          r && !r.done && (l = i.return) && l.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, l;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Ke(pn), r = i.next(); !r.done; r = i.next()) {
          var s = r.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          r && !r.done && (l = i.return) && l.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, l = e.strings, i = Object.keys(l);
      i.forEach(function(r) {
        r.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(l[r], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var l = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var r = this.previousActivationEvent, s = r && t !== void 0 && r.type !== t.type;
          if (!s) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var a = t !== void 0 && Ht.length > 0 && Ht.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ht.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ht = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, l = e.strings, i = l.VAR_FG_TRANSLATE_START, r = l.VAR_FG_TRANSLATE_END, s = e.cssClasses, a = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), m = d.startPoint, _ = d.endPoint;
        c = m.x + "px, " + m.y + "px", f = _.x + "px, " + _.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = Ni(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, r = {
        x: r.x - this.initialSize / 2,
        y: r.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: r, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, l = e.cssClasses.FG_DEACTIVATION, i = this.activationState, r = i.hasDeactivationUXRun, s = i.isActivated, a = r || !s;
      a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(l), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(l);
      }, gn.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, l = this.activationState;
      if (l.isActivated) {
        var i = Te({}, l);
        l.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(i), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var l = t.wasActivatedByPointer, i = t.wasElementMadeActive;
      (l || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var l = Math.max(this.frame.height, this.frame.width), i = function() {
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? l : i();
      var r = Math.floor(l * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, l = t.VAR_FG_SIZE, i = t.VAR_LEFT, r = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(l, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(r, this.unboundedCoords.top + "px"));
    }, e;
  }(ht)
);
const { applyPassive: Dt } = Rl, { matches: Yi } = Dl;
function vt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: a, eventTarget: o, activeTarget: u, addClass: c = (_) => n.classList.add(_), removeClass: f = (_) => n.classList.remove(_), addStyle: d = (_, b) => n.style.setProperty(_, b), initPromise: m = Promise.resolve() } = {}) {
  let _, b = Pe("SMUI:addLayoutListener"), p, w = s, I = o, A = u;
  function g() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && w !== s && (w = s, s ? _.activate() : s === !1 && _.deactivate()), e && !_ ? (_ = new Xi({
      addClass: c,
      browserSupportsCssVars: () => Gi(window),
      computeBoundingRect: () => (a || n).getBoundingClientRect(),
      containsEventTarget: (E) => n.contains(E),
      deregisterDocumentInteractionHandler: (E, h) => document.documentElement.removeEventListener(E, h, Dt()),
      deregisterInteractionHandler: (E, h) => (o || n).removeEventListener(E, h, Dt()),
      deregisterResizeHandler: (E) => window.removeEventListener("resize", E),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? Yi(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (E, h) => document.documentElement.addEventListener(E, h, Dt()),
      registerInteractionHandler: (E, h) => (o || n).addEventListener(E, h, Dt()),
      registerResizeHandler: (E) => window.addEventListener("resize", E),
      removeClass: f,
      updateCssVariable: d
    }), m.then(() => {
      _ && (_.init(), _.setUnbounded(l));
    })) : _ && !e && m.then(() => {
      _ && (_.destroy(), _ = void 0);
    }), _ && (I !== o || A !== u) && (I = o, A = u, _.destroy(), requestAnimationFrame(() => {
      _ && (_.init(), _.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  g(), b && (p = b(L));
  function L() {
    _ && _.layout();
  }
  return {
    update(E) {
      ({
        ripple: e,
        surface: t,
        unbounded: l,
        disabled: i,
        color: r,
        active: s,
        rippleElement: a,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => n.classList.add(h), removeClass: (h) => n.classList.remove(h), addStyle: (h, S) => n.style.setProperty(h, S), initPromise: Promise.resolve() }, E)), g();
    },
    destroy() {
      _ && (_.destroy(), _ = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Ki(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Xt(n)
  );
  return {
    c() {
      i && i.c(), t = ke();
    },
    m(r, s) {
      i && i.m(r, s), O(r, t, s), l = !0;
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? re(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Xt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, s) : (i = Xt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (k(i, r), l = !0);
    },
    o(r) {
      R(i, r), l = !1;
    },
    d(r) {
      r && P(t), i && i.d(r);
    }
  };
}
function Ji(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Yt(n)
  );
  return {
    c() {
      l && l.c(), t = ke();
    },
    m(i, r) {
      l && l.m(i, r), O(i, t, r);
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? re(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = Yt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Yt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: $,
    o: $,
    d(i) {
      i && P(t), l && l.d(i);
    }
  };
}
function Qi(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = te(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let o = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = V(u, o[c]);
  return {
    c() {
      e = Be("svg"), a && a.c(), cn(e, u);
    },
    m(c, f) {
      O(c, e, f), a && a.m(e, null), n[9](e), l = !0, i || (r = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && le(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? ne(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ie(
          /*$$scope*/
          c[7]
        ),
        null
      ), cn(e, u = ae(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && ge(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (k(a, c), l = !0);
    },
    o(c) {
      R(a, c), l = !1;
    },
    d(c) {
      c && P(e), a && a.d(c), n[9](null), i = !1, de(r);
    }
  };
}
function Xt(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = te(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let o = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = V(u, o[c]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), a && a.c(), Ct(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      O(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && le(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? ne(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ie(
          /*$$scope*/
          c[7]
        ),
        null
      ), Ct(
        /*tag*/
        c[1]
      )(e, u = ae(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && ge(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (k(a, c), l = !0);
    },
    o(c) {
      R(a, c), l = !1;
    },
    d(c) {
      c && P(e), a && a.d(c), n[11](null), i = !1, de(r);
    }
  };
}
function Yt(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], s = {};
  for (let a = 0; a < r.length; a += 1)
    s = V(s, r[a]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), Ct(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(a, o) {
      O(a, e, o), n[10](e), l || (i = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(a, o) {
      Ct(
        /*tag*/
        a[1]
      )(e, s = ae(r, [o & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && ge(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    d(a) {
      a && P(e), n[10](null), l = !1, de(i);
    }
  };
}
function xi(n) {
  let e, t, l, i;
  const r = [Qi, Ji, Ki], s = [];
  function a(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ke();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), R(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      R(t), i = !1;
    },
    d(o) {
      o && P(l), s[e].d(o);
    }
  };
}
function $i(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ue(e, i), { $$slots: s = {}, $$scope: a } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Me(Se());
  let f;
  function d() {
    return f;
  }
  function m(p) {
    x[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function _(p) {
    x[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function b(p) {
    x[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  return n.$$set = (p) => {
    e = V(V({}, e), De(p)), t(5, r = ue(e, i)), "use" in p && t(0, o = p.use), "tag" in p && t(1, u = p.tag), "$$scope" in p && t(7, a = p.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*tag*/
    2 && t(3, l = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ].indexOf(u) > -1);
  }, [
    o,
    u,
    f,
    l,
    c,
    r,
    d,
    a,
    s,
    m,
    _,
    b
  ];
}
class Bt extends oe {
  constructor(e) {
    super(), se(this, e, $i, xi, re, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const st = [];
function Pt(n, e = $) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (re(n, a) && (n = a, t)) {
      const o = !st.length;
      for (const u of l)
        u[1](), st.push(u, n);
      if (o) {
        for (let u = 0; u < st.length; u += 2)
          st[u][0](st[u + 1]);
        st.length = 0;
      }
    }
  }
  function r(a) {
    i(a(n));
  }
  function s(a, o = $) {
    const u = [a, o];
    return l.add(u), l.size === 1 && (t = e(i, r) || $), a(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
function er(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[3],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, [r]) {
      l && l.p && (!e || r & /*$$scope*/
      8) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? ne(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : ie(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function tr(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: a } = e;
  const o = Pt(a);
  return ut(n, o, (u) => t(5, l = u)), Re(s, o), yt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, s = u.key), "value" in u && t(2, a = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && xt(o, l = a, l);
  }, [o, s, a, r, i];
}
class Ft extends oe {
  constructor(e) {
    super(), se(this, e, tr, er, re, { key: 1, value: 2 });
  }
}
function _n(n) {
  let e;
  return {
    c() {
      e = F("div"), M(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function nr(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = te(
    r,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let a = (
    /*touch*/
    n[6] && _n()
  );
  return {
    c() {
      e = F("div"), t = Z(), s && s.c(), a && a.c(), l = ke(), M(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      O(o, e, u), O(o, t, u), s && s.m(o, u), a && a.m(o, u), O(o, l, u), i = !0;
    },
    p(o, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && le(
        s,
        r,
        o,
        /*$$scope*/
        o[30],
        i ? ne(
          r,
          /*$$scope*/
          o[30],
          u,
          null
        ) : ie(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? a || (a = _n(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    i(o) {
      i || (k(s, o), i = !0);
    },
    o(o) {
      R(s, o), i = !1;
    },
    d(o) {
      o && (P(e), P(t), P(l)), s && s.d(o), a && a.d(o);
    }
  };
}
function lr(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          vt,
          {
            ripple: (
              /*ripple*/
              n[3]
            ),
            unbounded: !1,
            color: (
              /*color*/
              n[4]
            ),
            disabled: !!/*$$restProps*/
            n[23].disabled,
            addClass: (
              /*addClass*/
              n[19]
            ),
            removeClass: (
              /*removeClass*/
              n[20]
            ),
            addStyle: (
              /*addStyle*/
              n[21]
            )
          }
        ],
        /*forwardEvents*/
        n[17],
        .../*use*/
        n[0]
      ]
    },
    {
      class: Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button": !0,
        "mdc-button--raised": (
          /*variant*/
          n[5] === "raised"
        ),
        "mdc-button--unelevated": (
          /*variant*/
          n[5] === "unelevated"
        ),
        "mdc-button--outlined": (
          /*variant*/
          n[5] === "outlined"
        ),
        "smui-button--color-secondary": (
          /*color*/
          n[4] === "secondary"
        ),
        "mdc-button--touch": (
          /*touch*/
          n[6]
        ),
        "mdc-card__action": (
          /*context*/
          n[18] === "card:action"
        ),
        "mdc-card__action--button": (
          /*context*/
          n[18] === "card:action"
        ),
        "mdc-dialog__button": (
          /*context*/
          n[18] === "dialog:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          n[18] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          n[18] === "top-app-bar:action"
        ),
        "mdc-snackbar__action": (
          /*context*/
          n[18] === "snackbar:actions"
        ),
        "mdc-banner__secondary-action": (
          /*context*/
          n[18] === "banner" && /*secondary*/
          n[8]
        ),
        "mdc-banner__primary-action": (
          /*context*/
          n[18] === "banner" && !/*secondary*/
          n[8]
        ),
        "mdc-tooltip__action": (
          /*context*/
          n[18] === "tooltip:rich-actions"
        ),
        .../*internalClasses*/
        n[12]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[13]
      ).map(Kt).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*actionProp*/
    n[16],
    /*defaultProp*/
    n[15],
    /*secondaryProp*/
    n[14],
    { href: (
      /*href*/
      n[7]
    ) },
    /*$$restProps*/
    n[23]
  ];
  var r = (
    /*component*/
    n[9]
  );
  function s(a, o) {
    let u = {
      $$slots: { default: [nr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = V(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = V(u, ae(i, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        a[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            vt,
            {
              ripple: (
                /*ripple*/
                a[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                a[4]
              ),
              disabled: !!/*$$restProps*/
              a[23].disabled,
              addClass: (
                /*addClass*/
                a[19]
              ),
              removeClass: (
                /*removeClass*/
                a[20]
              ),
              addStyle: (
                /*addStyle*/
                a[21]
              )
            }
          ],
          /*forwardEvents*/
          a[17],
          .../*use*/
          a[0]
        ]
      },
      o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: Q({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            a[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            a[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            a[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            a[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            a[6]
          ),
          "mdc-card__action": (
            /*context*/
            a[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            a[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            a[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            a[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            a[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            a[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            a[18] === "banner" && /*secondary*/
            a[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            a[18] === "banner" && !/*secondary*/
            a[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            a[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          a[12]
        })
      },
      o[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          a[13]
        ).map(Kt).concat([
          /*style*/
          a[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Ae(
        /*actionProp*/
        a[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Ae(
        /*defaultProp*/
        a[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Ae(
        /*secondaryProp*/
        a[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        a[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Ae(
        /*$$restProps*/
        a[23]
      )
    ]))), { props: u };
  }
  return r && (e = Ot(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && K(e.$$.fragment), t = ke();
    },
    m(a, o) {
      e && X(e, a, o), O(a, t, o), l = !0;
    },
    p(a, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      a[9])) {
        if (e) {
          ce();
          const u = e;
          R(u.$$.fragment, 1, 0, () => {
            Y(u, 1);
          }), fe();
        }
        r ? (e = Ot(r, s(a, o)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), K(e.$$.fragment), k(e.$$.fragment, 1), X(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? ae(i, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            a[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                vt,
                {
                  ripple: (
                    /*ripple*/
                    a[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    a[4]
                  ),
                  disabled: !!/*$$restProps*/
                  a[23].disabled,
                  addClass: (
                    /*addClass*/
                    a[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    a[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    a[21]
                  )
                }
              ],
              /*forwardEvents*/
              a[17],
              .../*use*/
              a[0]
            ]
          },
          o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: Q({
              [
                /*className*/
                a[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                a[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                a[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                a[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                a[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                a[6]
              ),
              "mdc-card__action": (
                /*context*/
                a[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                a[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                a[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                a[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                a[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                a[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                a[18] === "banner" && /*secondary*/
                a[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                a[18] === "banner" && !/*secondary*/
                a[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                a[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              a[12]
            })
          },
          o[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              a[13]
            ).map(Kt).concat([
              /*style*/
              a[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Ae(
            /*actionProp*/
            a[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Ae(
            /*defaultProp*/
            a[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Ae(
            /*secondaryProp*/
            a[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            a[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Ae(
            /*$$restProps*/
            a[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && k(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && R(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && P(t), n[29](null), e && Y(e, a);
    }
  };
}
const Kt = ([n, e]) => `${n}: ${e};`;
function ir(n, e, t) {
  let l, i, r;
  const s = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ];
  let a = ue(e, s), { $$slots: o = {}, $$scope: u } = e;
  const c = Me(Se());
  let { use: f = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: _ = !0 } = e, { color: b = "primary" } = e, { variant: p = "text" } = e, { touch: w = !1 } = e, { href: I = void 0 } = e, { action: A = "close" } = e, { defaultAction: g = !1 } = e, { secondary: L = !1 } = e, E, h = {}, S = {}, G = Pe("SMUI:button:context"), { component: T = Bt } = e, { tag: y = T === Bt ? I == null ? "button" : "a" : void 0 } = e, U = a.disabled;
  Re("SMUI:label:context", "button"), Re("SMUI:icon:context", "button");
  function H(v) {
    h[v] || t(12, h[v] = !0, h);
  }
  function q(v) {
    (!(v in h) || h[v]) && t(12, h[v] = !1, h);
  }
  function ve(v, N) {
    S[v] != N && (N === "" || N == null ? (delete S[v], t(13, S)) : t(13, S[v] = N, S));
  }
  function Ce() {
    G === "banner" && pe(_e(), L ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function _e() {
    return E.getElement();
  }
  function j(v) {
    x[v ? "unshift" : "push"](() => {
      E = v, t(11, E);
    });
  }
  return n.$$set = (v) => {
    t(31, e = V(V({}, e), De(v))), t(23, a = ue(e, s)), "use" in v && t(0, f = v.use), "class" in v && t(1, d = v.class), "style" in v && t(2, m = v.style), "ripple" in v && t(3, _ = v.ripple), "color" in v && t(4, b = v.color), "variant" in v && t(5, p = v.variant), "touch" in v && t(6, w = v.touch), "href" in v && t(7, I = v.href), "action" in v && t(24, A = v.action), "defaultAction" in v && t(25, g = v.defaultAction), "secondary" in v && t(8, L = v.secondary), "component" in v && t(9, T = v.component), "tag" in v && t(10, y = v.tag), "$$scope" in v && t(30, u = v.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = G === "dialog:action" && A != null ? { "data-mdc-dialog-action": A } : { action: e.action }), t(15, i = G === "dialog:action" && g ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = G === "banner" ? {} : { secondary: e.secondary }), U !== a.disabled) {
      if (E) {
        const v = _e();
        "blur" in v && v.blur();
      }
      t(27, U = a.disabled);
    }
  }, e = De(e), [
    f,
    d,
    m,
    _,
    b,
    p,
    w,
    I,
    L,
    T,
    y,
    E,
    h,
    S,
    r,
    i,
    l,
    c,
    G,
    H,
    q,
    ve,
    Ce,
    a,
    A,
    g,
    _e,
    U,
    o,
    j,
    u
  ];
}
class Gt extends oe {
  constructor(e) {
    super(), se(
      this,
      e,
      ir,
      lr,
      re,
      {
        use: 0,
        class: 1,
        style: 2,
        ripple: 3,
        color: 4,
        variant: 5,
        touch: 6,
        href: 7,
        action: 24,
        defaultAction: 25,
        secondary: 8,
        component: 9,
        tag: 10,
        getElement: 26
      },
      null,
      [-1, -1]
    );
  }
  get getElement() {
    return this.$$.ctx[26];
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var rr = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ar = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(t) {
      var l = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.float = function(t) {
      var l = e.cssClasses, i = l.LABEL_FLOAT_ABOVE, r = l.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(r));
    }, e.prototype.setRequired = function(t) {
      var l = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(ht)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var tt = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var sr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(tt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(tt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(tt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(tt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(tt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(tt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(ht)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var or = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, bn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, ur = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      return n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return or;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ur;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(t) {
      var l = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += bn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(ht)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Jt = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, fr = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, vn = {
  LABEL_SCALE: 0.75
}, dr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], hr = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Cn = ["mousedown", "touchstart"], In = ["click", "keydown"], gr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return i.isFocused = !1, i.receivedUserInput = !1, i.valid = !0, i.useNativeValidation = !0, i.validateOnValueChange = !0, i.helperText = l.helperText, i.characterCounter = l.characterCounter, i.leadingIcon = l.leadingIcon, i.trailingIcon = l.trailingIcon, i.inputFocusHandler = function() {
        i.activateFocus();
      }, i.inputBlurHandler = function() {
        i.deactivateFocus();
      }, i.inputInputHandler = function() {
        i.handleInput();
      }, i.setPointerXOffset = function(r) {
        i.setTransformOrigin(r);
      }, i.textFieldInteractionHandler = function() {
        i.handleTextFieldInteraction();
      }, i.validationAttributeChangeHandler = function(r) {
        i.handleValidationAttributeChange(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return hr.indexOf(t) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t, l, i, r;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Ke(Cn), a = s.next(); !a.done; a = s.next()) {
          var o = a.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = Ke(In), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          c && !c.done && (r = u.return) && r.call(u);
        } finally {
          if (i)
            throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, l, i, r;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Ke(Cn), a = s.next(); !a.done; a = s.next()) {
          var o = a.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = Ke(In), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          c && !c.done && (r = u.return) && r.call(u);
        } finally {
          if (i)
            throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var l = this;
      t.some(function(i) {
        return dr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var l = this.adapter.getLabelWidth() * vn.LABEL_SCALE;
          this.adapter.notchOutline(l);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var l = t.touches, i = l ? l[0] : t, r = i.target.getBoundingClientRect(), s = i.clientX - r.left;
        this.adapter.setLineRippleTransformOrigin(s);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var l = this.isValid();
        this.styleValidity(l);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var l = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(l);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var l = this.getNativeInput().maxLength;
        if (l === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, l);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var l = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(l) : this.adapter.addClass(l), this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var r = this.helperText.isVisible(), s = this.helperText.getId();
        r && s ? this.adapter.setInputAttr(Jt.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Jt.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var l = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.styleDisabled = function(t) {
      var l = e.cssClasses, i = l.DISABLED, r = l.INVALID;
      t ? (this.adapter.addClass(i), this.adapter.removeClass(r)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var l = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(ht)
);
function mr(n) {
  let e, t, l, i, r, s, a, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = te(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = Q({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          n[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          n[1]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: l = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(yn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    {
      for: i = /*forId*/
      n[5] || /*inputProps*/
      (n[11] ? (
        /*inputProps*/
        n[11].id
      ) : void 0)
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let m = 0; m < f.length; m += 1)
    d = V(d, f[m]);
  return {
    c() {
      e = F("label"), c && c.c(), ee(e, d);
    },
    m(m, _) {
      O(m, e, _), c && c.m(e, null), n[24](e), s = !0, a || (o = [
        J(r = ye.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        J(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(m, _) {
      c && c.p && (!s || _ & /*$$scope*/
      2097152) && le(
        c,
        u,
        m,
        /*$$scope*/
        m[21],
        s ? ne(
          u,
          /*$$scope*/
          m[21],
          _,
          null
        ) : ie(
          /*$$scope*/
          m[21]
        ),
        null
      ), ee(e, d = ae(f, [
        (!s || _ & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = Q({
          [
            /*className*/
            m[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            m[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            m[1]
          ),
          .../*internalClasses*/
          m[8]
        }))) && { class: t },
        (!s || _ & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          m[9]
        ).map(yn).concat([
          /*style*/
          m[4]
        ]).join(" "))) && { style: l },
        (!s || _ & /*forId*/
        32 && i !== (i = /*forId*/
        m[5] || /*inputProps*/
        (m[11] ? (
          /*inputProps*/
          m[11].id
        ) : void 0))) && { for: i },
        _ & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), r && ge(r.update) && _ & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        m[2]
      );
    },
    i(m) {
      s || (k(c, m), s = !0);
    },
    o(m) {
      R(c, m), s = !1;
    },
    d(m) {
      m && P(e), c && c.d(m), n[24](null), a = !1, de(o);
    }
  };
}
function pr(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = te(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = Q({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          n[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          n[1]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: l = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(An).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = V(f, c[d]);
  return {
    c() {
      e = F("span"), u && u.c(), ee(e, f);
    },
    m(d, m) {
      O(d, e, m), u && u.m(e, null), n[23](e), r = !0, s || (a = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        J(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(d, m) {
      u && u.p && (!r || m & /*$$scope*/
      2097152) && le(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        r ? ne(
          o,
          /*$$scope*/
          d[21],
          m,
          null
        ) : ie(
          /*$$scope*/
          d[21]
        ),
        null
      ), ee(e, f = ae(c, [
        (!r || m & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = Q({
          [
            /*className*/
            d[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            d[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            d[1]
          ),
          .../*internalClasses*/
          d[8]
        }))) && { class: t },
        (!r || m & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(An).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: l },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), i && ge(i.update) && m & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      r || (k(u, d), r = !0);
    },
    o(d) {
      R(u, d), r = !1;
    },
    d(d) {
      d && P(e), u && u.d(d), n[23](null), s = !1, de(a);
    }
  };
}
function _r(n) {
  let e, t, l, i;
  const r = [pr, mr], s = [];
  function a(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ke();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), R(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      R(t), i = !1;
    },
    d(o) {
      o && P(l), s[e].d(o);
    }
  };
}
const An = ([n, e]) => `${n}: ${e};`, yn = ([n, e]) => `${n}: ${e};`;
function br(n, e, t) {
  const l = [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  var a;
  const o = Me(Se());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: m = !1 } = e, { required: _ = !1 } = e, { wrapped: b = !1 } = e, p, w, I = {}, A = {}, g = (a = Pe("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, L = m, E = _;
  Ge(() => {
    t(18, w = new ar({
      addClass: h,
      removeClass: S,
      getWidth: () => {
        var v, N;
        const me = ve(), be = me.cloneNode(!0);
        (v = me.parentNode) === null || v === void 0 || v.appendChild(be), be.classList.add("smui-floating-label--remove-transition"), be.classList.add("smui-floating-label--force-size"), be.classList.remove("mdc-floating-label--float-above");
        const Oe = be.scrollWidth;
        return (N = me.parentNode) === null || N === void 0 || N.removeChild(be), Oe;
      },
      registerInteractionHandler: (v, N) => ve().addEventListener(v, N),
      deregisterInteractionHandler: (v, N) => ve().removeEventListener(v, N)
    }));
    const j = {
      get element() {
        return ve();
      },
      addStyle: G,
      removeStyle: T
    };
    return pe(p, "SMUIFloatingLabel:mount", j), w.init(), () => {
      pe(p, "SMUIFloatingLabel:unmount", j), w.destroy();
    };
  });
  function h(j) {
    I[j] || t(8, I[j] = !0, I);
  }
  function S(j) {
    (!(j in I) || I[j]) && t(8, I[j] = !1, I);
  }
  function G(j, v) {
    A[j] != v && (v === "" || v == null ? (delete A[j], t(9, A)) : t(9, A[j] = v, A));
  }
  function T(j) {
    j in A && (delete A[j], t(9, A));
  }
  function y(j) {
    w.shake(j);
  }
  function U(j) {
    t(0, m = j);
  }
  function H(j) {
    t(1, _ = j);
  }
  function q() {
    return w.getWidth();
  }
  function ve() {
    return p;
  }
  function Ce(j) {
    x[j ? "unshift" : "push"](() => {
      p = j, t(7, p);
    });
  }
  function _e(j) {
    x[j ? "unshift" : "push"](() => {
      p = j, t(7, p);
    });
  }
  return n.$$set = (j) => {
    e = V(V({}, e), De(j)), t(12, i = ue(e, l)), "use" in j && t(2, u = j.use), "class" in j && t(3, c = j.class), "style" in j && t(4, f = j.style), "for" in j && t(5, d = j.for), "floatAbove" in j && t(0, m = j.floatAbove), "required" in j && t(1, _ = j.required), "wrapped" in j && t(6, b = j.wrapped), "$$scope" in j && t(21, s = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && w && L !== m && (t(19, L = m), w.float(m)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && w && E !== _ && (t(20, E = _), w.setRequired(_));
  }, [
    m,
    _,
    u,
    c,
    f,
    d,
    b,
    p,
    I,
    A,
    o,
    g,
    i,
    y,
    U,
    H,
    q,
    ve,
    w,
    L,
    E,
    s,
    r,
    Ce,
    _e
  ];
}
class Tl extends oe {
  constructor(e) {
    super(), se(this, e, br, _r, re, {
      use: 2,
      class: 3,
      style: 4,
      for: 5,
      floatAbove: 0,
      required: 1,
      wrapped: 6,
      shake: 13,
      float: 14,
      setRequired: 15,
      getWidth: 16,
      getElement: 17
    });
  }
  get shake() {
    return this.$$.ctx[13];
  }
  get float() {
    return this.$$.ctx[14];
  }
  get setRequired() {
    return this.$$.ctx[15];
  }
  get getWidth() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
function vr(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-line-ripple": !0,
        "mdc-line-ripple--active": (
          /*active*/
          n[3]
        ),
        .../*internalClasses*/
        n[5]
      })
    },
    {
      style: l = Object.entries(
        /*internalStyles*/
        n[6]
      ).map(Ln).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = V(o, a[u]);
  return {
    c() {
      e = F("div"), ee(e, o);
    },
    m(u, c) {
      O(u, e, c), n[13](e), r || (s = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], r = !0);
    },
    p(u, [c]) {
      ee(e, o = ae(a, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = Q({
          [
            /*className*/
            u[1]
          ]: !0,
          "mdc-line-ripple": !0,
          "mdc-line-ripple--active": (
            /*active*/
            u[3]
          ),
          .../*internalClasses*/
          u[5]
        })) && { class: t },
        c & /*internalStyles, style*/
        68 && l !== (l = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(Ln).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: l },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), i && ge(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && P(e), n[13](null), r = !1, de(s);
    }
  };
}
const Ln = ([n, e]) => `${n}: ${e};`;
function Cr(n, e, t) {
  const l = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let i = ue(e, l);
  const r = Me(Se());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, m = {};
  Ge(() => (f = new sr({
    addClass: b,
    removeClass: p,
    hasClass: _,
    setStyle: w,
    registerEventHandler: (h, S) => L().addEventListener(h, S),
    deregisterEventHandler: (h, S) => L().removeEventListener(h, S)
  }), f.init(), () => {
    f.destroy();
  }));
  function _(h) {
    return h in d ? d[h] : L().classList.contains(h);
  }
  function b(h) {
    d[h] || t(5, d[h] = !0, d);
  }
  function p(h) {
    (!(h in d) || d[h]) && t(5, d[h] = !1, d);
  }
  function w(h, S) {
    m[h] != S && (S === "" || S == null ? (delete m[h], t(6, m)) : t(6, m[h] = S, m));
  }
  function I() {
    f.activate();
  }
  function A() {
    f.deactivate();
  }
  function g(h) {
    f.setRippleCenter(h);
  }
  function L() {
    return c;
  }
  function E(h) {
    x[h ? "unshift" : "push"](() => {
      c = h, t(4, c);
    });
  }
  return n.$$set = (h) => {
    e = V(V({}, e), De(h)), t(8, i = ue(e, l)), "use" in h && t(0, s = h.use), "class" in h && t(1, a = h.class), "style" in h && t(2, o = h.style), "active" in h && t(3, u = h.active);
  }, [
    s,
    a,
    o,
    u,
    c,
    d,
    m,
    r,
    i,
    I,
    A,
    g,
    L,
    E
  ];
}
class Ir extends oe {
  constructor(e) {
    super(), se(this, e, Cr, vr, re, {
      use: 0,
      class: 1,
      style: 2,
      active: 3,
      activate: 9,
      deactivate: 10,
      setRippleCenter: 11,
      getElement: 12
    });
  }
  get activate() {
    return this.$$.ctx[9];
  }
  get deactivate() {
    return this.$$.ctx[10];
  }
  get setRippleCenter() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
function kn(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[15].default
  ), r = te(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = F("div"), r && r.c(), M(e, "class", "mdc-notched-outline__notch"), M(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Sn).join(" "));
    },
    m(s, a) {
      O(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, a) {
      r && r.p && (!l || a & /*$$scope*/
      16384) && le(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? ne(
          i,
          /*$$scope*/
          s[14],
          a,
          null
        ) : ie(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!l || a & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        s[7]
      ).map(Sn).join(" "))) && M(e, "style", t);
    },
    i(s) {
      l || (k(r, s), l = !0);
    },
    o(s) {
      R(r, s), l = !1;
    },
    d(s) {
      s && P(e), r && r.d(s);
    }
  };
}
function Ar(n) {
  let e, t, l, i, r, s, a, o, u, c, f = !/*noLabel*/
  n[3] && kn(n), d = [
    {
      class: s = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-notched-outline": !0,
        "mdc-notched-outline--notched": (
          /*notched*/
          n[2]
        ),
        "mdc-notched-outline--no-label": (
          /*noLabel*/
          n[3]
        ),
        .../*internalClasses*/
        n[6]
      })
    },
    /*$$restProps*/
    n[10]
  ], m = {};
  for (let _ = 0; _ < d.length; _ += 1)
    m = V(m, d[_]);
  return {
    c() {
      e = F("div"), t = F("div"), l = Z(), f && f.c(), i = Z(), r = F("div"), M(t, "class", "mdc-notched-outline__leading"), M(r, "class", "mdc-notched-outline__trailing"), ee(e, m);
    },
    m(_, b) {
      O(_, e, b), B(e, t), B(e, l), f && f.m(e, null), B(e, i), B(e, r), n[16](e), o = !0, u || (c = [
        J(a = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        z(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        z(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(_, [b]) {
      /*noLabel*/
      _[3] ? f && (ce(), R(f, 1, 1, () => {
        f = null;
      }), fe()) : f ? (f.p(_, b), b & /*noLabel*/
      8 && k(f, 1)) : (f = kn(_), f.c(), k(f, 1), f.m(e, i)), ee(e, m = ae(d, [
        (!o || b & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = Q({
          [
            /*className*/
            _[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            _[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            _[3]
          ),
          .../*internalClasses*/
          _[6]
        }))) && { class: s },
        b & /*$$restProps*/
        1024 && /*$$restProps*/
        _[10]
      ])), a && ge(a.update) && b & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      o || (k(f), o = !0);
    },
    o(_) {
      R(f), o = !1;
    },
    d(_) {
      _ && P(e), f && f.d(), n[16](null), u = !1, de(c);
    }
  };
}
const Sn = ([n, e]) => `${n}: ${e};`;
function yr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Me(Se());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, m, _, b = {}, p = {};
  Ge(() => (m = new cr({
    addClass: I,
    removeClass: A,
    setNotchWidthProperty: (y) => g("width", y + "px"),
    removeNotchWidthProperty: () => L("width")
  }), m.init(), () => {
    m.destroy();
  }));
  function w(y) {
    t(4, _ = y.detail);
  }
  function I(y) {
    b[y] || t(6, b[y] = !0, b);
  }
  function A(y) {
    (!(y in b) || b[y]) && t(6, b[y] = !1, b);
  }
  function g(y, U) {
    p[y] != U && (U === "" || U == null ? (delete p[y], t(7, p)) : t(7, p[y] = U, p));
  }
  function L(y) {
    y in p && (delete p[y], t(7, p));
  }
  function E(y) {
    m.notch(y);
  }
  function h() {
    m.closeNotch();
  }
  function S() {
    return d;
  }
  function G(y) {
    x[y ? "unshift" : "push"](() => {
      d = y, t(5, d);
    });
  }
  const T = () => t(4, _ = void 0);
  return n.$$set = (y) => {
    e = V(V({}, e), De(y)), t(10, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "notched" in y && t(2, c = y.notched), "noLabel" in y && t(3, f = y.noLabel), "$$scope" in y && t(14, s = y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (_ ? (_.addStyle("transition-duration", "0s"), I("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      _ && _.removeStyle("transition-duration");
    })) : A("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    _,
    d,
    b,
    p,
    a,
    w,
    i,
    E,
    h,
    S,
    s,
    r,
    G,
    T
  ];
}
class Lr extends oe {
  constructor(e) {
    super(), se(this, e, yr, Ar, re, {
      use: 0,
      class: 1,
      notched: 2,
      noLabel: 3,
      notch: 11,
      closeNotch: 12,
      getElement: 13
    });
  }
  get notch() {
    return this.$$.ctx[11];
  }
  get closeNotch() {
    return this.$$.ctx[12];
  }
  get getElement() {
    return this.$$.ctx[13];
  }
}
function kr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r & /*$$scope*/
      8192) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? ne(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : ie(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Sr(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[8],
        .../*use*/
        n[0]
      ]
    },
    {
      class: Q({
        [
          /*className*/
          n[1]
        ]: !0,
        [
          /*smuiClass*/
          n[6]
        ]: !0,
        .../*smuiClassMap*/
        n[5]
      })
    },
    /*props*/
    n[7],
    /*$$restProps*/
    n[9]
  ];
  var r = (
    /*component*/
    n[2]
  );
  function s(a, o) {
    let u = {
      $$slots: { default: [kr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = V(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = V(u, ae(i, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        a[3]
      ) },
      o & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          a[8],
          .../*use*/
          a[0]
        ]
      },
      o & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Q({
          [
            /*className*/
            a[1]
          ]: !0,
          [
            /*smuiClass*/
            a[6]
          ]: !0,
          .../*smuiClassMap*/
          a[5]
        })
      },
      o & /*props*/
      128 && Ae(
        /*props*/
        a[7]
      ),
      o & /*$$restProps*/
      512 && Ae(
        /*$$restProps*/
        a[9]
      )
    ]))), { props: u };
  }
  return r && (e = Ot(r, s(n)), n[12](e)), {
    c() {
      e && K(e.$$.fragment), t = ke();
    },
    m(a, o) {
      e && X(e, a, o), O(a, t, o), l = !0;
    },
    p(a, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      a[2])) {
        if (e) {
          ce();
          const u = e;
          R(u.$$.fragment, 1, 0, () => {
            Y(u, 1);
          }), fe();
        }
        r ? (e = Ot(r, s(a, o)), a[12](e), K(e.$$.fragment), k(e.$$.fragment, 1), X(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? ae(i, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            a[3]
          ) },
          o & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              a[8],
              .../*use*/
              a[0]
            ]
          },
          o & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Q({
              [
                /*className*/
                a[1]
              ]: !0,
              [
                /*smuiClass*/
                a[6]
              ]: !0,
              .../*smuiClassMap*/
              a[5]
            })
          },
          o & /*props*/
          128 && Ae(
            /*props*/
            a[7]
          ),
          o & /*$$restProps*/
          512 && Ae(
            /*$$restProps*/
            a[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && k(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && R(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && P(t), n[12](null), e && Y(e, a);
    }
  };
}
const Ze = {
  component: Bt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function wr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e, { use: a = [] } = e, { class: o = "" } = e, u;
  const c = Ze.class, f = {}, d = [], m = Ze.contexts, _ = Ze.props;
  let { component: b = Ze.component } = e, { tag: p = b === Bt ? Ze.tag : void 0 } = e;
  Object.entries(Ze.classMap).forEach(([g, L]) => {
    const E = Pe(L);
    E && "subscribe" in E && d.push(E.subscribe((h) => {
      t(5, f[g] = h, f);
    }));
  });
  const w = Me(Se());
  for (let g in m)
    m.hasOwnProperty(g) && Re(g, m[g]);
  yt(() => {
    for (const g of d)
      g();
  });
  function I() {
    return u.getElement();
  }
  function A(g) {
    x[g ? "unshift" : "push"](() => {
      u = g, t(4, u);
    });
  }
  return n.$$set = (g) => {
    e = V(V({}, e), De(g)), t(9, i = ue(e, l)), "use" in g && t(0, a = g.use), "class" in g && t(1, o = g.class), "component" in g && t(2, b = g.component), "tag" in g && t(3, p = g.tag), "$$scope" in g && t(13, s = g.$$scope);
  }, [
    a,
    o,
    b,
    p,
    u,
    f,
    c,
    _,
    w,
    i,
    I,
    r,
    A,
    s
  ];
}
class Er extends oe {
  constructor(e) {
    super(), se(this, e, wr, Sr, re, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 10
    });
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
const wn = Object.assign({}, Ze);
function He(n) {
  return new Proxy(Er, {
    construct: function(e, t) {
      return Object.assign(Ze, wn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Ze, wn, n), e[t];
    }
  });
}
const Rr = He({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Hr = He({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Dr = He({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Tr(n) {
  let e, t, l, i, r, s = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    { type: (
      /*type*/
      n[2]
    ) },
    { placeholder: (
      /*placeholder*/
      n[3]
    ) },
    /*valueProp*/
    n[4],
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[10]
  ], a = {};
  for (let o = 0; o < s.length; o += 1)
    a = V(a, s[o]);
  return {
    c() {
      e = F("input"), ee(e, a);
    },
    m(o, u) {
      O(o, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        z(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        z(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        z(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        z(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], i = !0);
    },
    p(o, [u]) {
      ee(e, a = ae(s, [
        u & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            o[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
        u & /*type*/
        4 && { type: (
          /*type*/
          o[2]
        ) },
        u & /*placeholder*/
        8 && { placeholder: (
          /*placeholder*/
          o[3]
        ) },
        u & /*valueProp*/
        16 && /*valueProp*/
        o[4],
        u & /*internalAttrs*/
        64 && /*internalAttrs*/
        o[6],
        u & /*$$restProps*/
        1024 && /*$$restProps*/
        o[10]
      ])), l && ge(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: $,
    o: $,
    d(o) {
      o && P(e), n[26](null), i = !1, de(r);
    }
  };
}
function Mr(n) {
  return n === "" ? Number.NaN : +n;
}
function Pr(n, e, t) {
  const l = [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let i = ue(e, l);
  const r = Me(Se());
  let s = () => {
  };
  function a(v) {
    return v === s;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const m = a(d);
  m && (d = "");
  let { files: _ = null } = e, { dirty: b = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: w = !0 } = e, { emptyValueNull: I = d === null } = e;
  m && I && (d = null);
  let { emptyValueUndefined: A = d === void 0 } = e;
  m && A && (d = void 0);
  let g, L = {}, E = {};
  Ge(() => {
    w && t(14, p = g.matches(":invalid"));
  });
  function h(v) {
    if (c === "file") {
      t(12, _ = v.currentTarget.files);
      return;
    }
    if (v.currentTarget.value === "" && I) {
      t(11, d = null);
      return;
    }
    if (v.currentTarget.value === "" && A) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = Mr(v.currentTarget.value));
        break;
      default:
        t(11, d = v.currentTarget.value);
        break;
    }
  }
  function S(v) {
    (c === "file" || c === "range") && h(v), t(13, b = !0), w && t(14, p = g.matches(":invalid"));
  }
  function G(v) {
    var N;
    return v in L ? (N = L[v]) !== null && N !== void 0 ? N : null : q().getAttribute(v);
  }
  function T(v, N) {
    L[v] !== N && t(6, L[v] = N, L);
  }
  function y(v) {
    (!(v in L) || L[v] != null) && t(6, L[v] = void 0, L);
  }
  function U() {
    q().focus();
  }
  function H() {
    q().blur();
  }
  function q() {
    return g;
  }
  function ve(v) {
    Ut.call(this, n, v);
  }
  function Ce(v) {
    Ut.call(this, n, v);
  }
  function _e(v) {
    x[v ? "unshift" : "push"](() => {
      g = v, t(5, g);
    });
  }
  const j = (v) => c !== "file" && h(v);
  return n.$$set = (v) => {
    e = V(V({}, e), De(v)), t(10, i = ue(e, l)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "type" in v && t(2, c = v.type), "placeholder" in v && t(3, f = v.placeholder), "value" in v && t(11, d = v.value), "files" in v && t(12, _ = v.files), "dirty" in v && t(13, b = v.dirty), "invalid" in v && t(14, p = v.invalid), "updateInvalid" in v && t(15, w = v.updateInvalid), "emptyValueNull" in v && t(16, I = v.emptyValueNull), "emptyValueUndefined" in v && t(17, A = v.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete E.value, t(4, E), t(2, c), t(11, d)) : t(4, E.value = d ?? "", E));
  }, [
    o,
    u,
    c,
    f,
    E,
    g,
    L,
    r,
    h,
    S,
    i,
    d,
    _,
    b,
    p,
    w,
    I,
    A,
    G,
    T,
    y,
    U,
    H,
    q,
    ve,
    Ce,
    _e,
    j
  ];
}
class Or extends oe {
  constructor(e) {
    super(), se(this, e, Pr, Tr, re, {
      use: 0,
      class: 1,
      type: 2,
      placeholder: 3,
      value: 11,
      files: 12,
      dirty: 13,
      invalid: 14,
      updateInvalid: 15,
      emptyValueNull: 16,
      emptyValueUndefined: 17,
      getAttr: 18,
      addAttr: 19,
      removeAttr: 20,
      focus: 21,
      blur: 22,
      getElement: 23
    });
  }
  get getAttr() {
    return this.$$.ctx[18];
  }
  get addAttr() {
    return this.$$.ctx[19];
  }
  get removeAttr() {
    return this.$$.ctx[20];
  }
  get focus() {
    return this.$$.ctx[21];
  }
  get blur() {
    return this.$$.ctx[22];
  }
  get getElement() {
    return this.$$.ctx[23];
  }
}
function Ur(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = Q({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    {
      style: l = `${/*resizable*/
      n[4] ? "" : "resize: none; "}${/*style*/
      n[3]}`
    },
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[9]
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = V(o, a[u]);
  return {
    c() {
      e = F("textarea"), ee(e, o);
    },
    m(u, c) {
      O(u, e, c), e.autofocus && e.focus(), n[21](e), fn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        J(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        z(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        z(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        z(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        z(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], r = !0);
    },
    p(u, [c]) {
      ee(e, o = ae(a, [
        c & /*className*/
        4 && t !== (t = Q({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
        c & /*resizable, style*/
        24 && l !== (l = `${/*resizable*/
        u[4] ? "" : "resize: none; "}${/*style*/
        u[3]}`) && { style: l },
        c & /*internalAttrs*/
        64 && /*internalAttrs*/
        u[6],
        c & /*$$restProps*/
        512 && /*$$restProps*/
        u[9]
      ])), i && ge(i.update) && c & /*use*/
      2 && i.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && fn(
        e,
        /*value*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && P(e), n[21](null), r = !1, de(s);
    }
  };
}
function Br(n, e, t) {
  const l = [
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "resizable",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let i = ue(e, l);
  const r = Me(Se());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: m = !0 } = e, _, b = {};
  Ge(() => {
    d && t(11, f = _.matches(":invalid"));
  });
  function p() {
    t(10, c = !0), d && t(11, f = _.matches(":invalid"));
  }
  function w(y) {
    var U;
    return y in b ? (U = b[y]) !== null && U !== void 0 ? U : null : E().getAttribute(y);
  }
  function I(y, U) {
    b[y] !== U && t(6, b[y] = U, b);
  }
  function A(y) {
    (!(y in b) || b[y] != null) && t(6, b[y] = void 0, b);
  }
  function g() {
    E().focus();
  }
  function L() {
    E().blur();
  }
  function E() {
    return _;
  }
  function h(y) {
    Ut.call(this, n, y);
  }
  function S(y) {
    Ut.call(this, n, y);
  }
  function G(y) {
    x[y ? "unshift" : "push"](() => {
      _ = y, t(5, _);
    });
  }
  function T() {
    u = this.value, t(0, u);
  }
  return n.$$set = (y) => {
    e = V(V({}, e), De(y)), t(9, i = ue(e, l)), "use" in y && t(1, s = y.use), "class" in y && t(2, a = y.class), "style" in y && t(3, o = y.style), "value" in y && t(0, u = y.value), "dirty" in y && t(10, c = y.dirty), "invalid" in y && t(11, f = y.invalid), "updateInvalid" in y && t(12, d = y.updateInvalid), "resizable" in y && t(4, m = y.resizable);
  }, [
    u,
    s,
    a,
    o,
    m,
    _,
    b,
    r,
    p,
    i,
    c,
    f,
    d,
    w,
    I,
    A,
    g,
    L,
    E,
    h,
    S,
    G,
    T
  ];
}
class Fr extends oe {
  constructor(e) {
    super(), se(this, e, Br, Ur, re, {
      use: 1,
      class: 2,
      style: 3,
      value: 0,
      dirty: 10,
      invalid: 11,
      updateInvalid: 12,
      resizable: 4,
      getAttr: 13,
      addAttr: 14,
      removeAttr: 15,
      focus: 16,
      blur: 17,
      getElement: 18
    });
  }
  get getAttr() {
    return this.$$.ctx[13];
  }
  get addAttr() {
    return this.$$.ctx[14];
  }
  get removeAttr() {
    return this.$$.ctx[15];
  }
  get focus() {
    return this.$$.ctx[16];
  }
  get blur() {
    return this.$$.ctx[17];
  }
  get getElement() {
    return this.$$.ctx[18];
  }
}
const Gr = (n) => ({}), En = (n) => ({}), Nr = (n) => ({}), Rn = (n) => ({}), Vr = (n) => ({}), Hn = (n) => ({}), jr = (n) => ({}), Dn = (n) => ({}), Wr = (n) => ({}), Tn = (n) => ({}), qr = (n) => ({}), Mn = (n) => ({}), Zr = (n) => ({}), Pn = (n) => ({}), zr = (n) => ({}), On = (n) => ({}), Xr = (n) => ({}), Un = (n) => ({}), Yr = (n) => ({}), Bn = (n) => ({}), Kr = (n) => ({}), Fn = (n) => ({}), Jr = (n) => ({}), Gn = (n) => ({});
function Qr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, m, _;
  const b = (
    /*#slots*/
    n[56].label
  ), p = te(
    b,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  l = new Ft({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [$r] },
      $$scope: { ctx: n }
    }
  });
  const w = (
    /*#slots*/
    n[56].default
  ), I = te(
    w,
    n,
    /*$$scope*/
    n[87],
    null
  );
  s = new Ft({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [ea] },
      $$scope: { ctx: n }
    }
  });
  const A = (
    /*#slots*/
    n[56].ripple
  ), g = te(
    A,
    n,
    /*$$scope*/
    n[87],
    Rn
  );
  let L = [
    {
      class: o = Q({
        [
          /*className*/
          n[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          n[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          n[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          n[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          n[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          n[15] === "standard" && !/*textarea*/
          n[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          n[16] || !/*$$slots*/
          n[47].label
        ),
        "mdc-text-field--with-leading-icon": (
          /*$$slots*/
          n[47].leadingIcon
        ),
        "mdc-text-field--with-trailing-icon": (
          /*$$slots*/
          n[47].trailingIcon
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          n[1]
        ),
        .../*internalClasses*/
        n[25]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        n[26]
      ).map(Jn).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    ft(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], E = {};
  for (let h = 0; h < L.length; h += 1)
    E = V(E, L[h]);
  return {
    c() {
      e = F("div"), p && p.c(), t = Z(), K(l.$$.fragment), i = Z(), I && I.c(), r = Z(), K(s.$$.fragment), a = Z(), g && g.c(), ee(e, E);
    },
    m(h, S) {
      O(h, e, S), p && p.m(e, null), B(e, t), X(l, e, null), B(e, i), I && I.m(e, null), B(e, r), X(s, e, null), B(e, a), g && g.m(e, null), n[82](e), d = !0, m || (_ = [
        J(c = vt.call(null, e, {
          ripple: (
            /*ripple*/
            n[11]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[43]
          ),
          removeClass: (
            /*removeClass*/
            n[44]
          ),
          addStyle: (
            /*addStyle*/
            n[45]
          )
        })),
        J(f = ye.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        J(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], m = !0);
    },
    p(h, S) {
      p && p.p && (!d || S[2] & /*$$scope*/
      33554432) && le(
        p,
        b,
        h,
        /*$$scope*/
        h[87],
        d ? ne(
          b,
          /*$$scope*/
          h[87],
          S,
          Wr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        Tn
      );
      const G = {};
      S[2] & /*$$scope*/
      33554432 && (G.$$scope = { dirty: S, ctx: h }), l.$set(G), I && I.p && (!d || S[2] & /*$$scope*/
      33554432) && le(
        I,
        w,
        h,
        /*$$scope*/
        h[87],
        d ? ne(
          w,
          /*$$scope*/
          h[87],
          S,
          null
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const T = {};
      S[2] & /*$$scope*/
      33554432 && (T.$$scope = { dirty: S, ctx: h }), s.$set(T), g && g.p && (!d || S[2] & /*$$scope*/
      33554432) && le(
        g,
        A,
        h,
        /*$$scope*/
        h[87],
        d ? ne(
          A,
          /*$$scope*/
          h[87],
          S,
          Nr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        Rn
      ), ee(e, E = ae(L, [
        (!d || S[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | S[1] & /*$$slots*/
        65536 && o !== (o = Q({
          [
            /*className*/
            h[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            h[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            h[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            h[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            h[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            h[15] === "standard" && !/*textarea*/
            h[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            h[16] || !/*$$slots*/
            h[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            h[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            h[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            h[1]
          ),
          .../*internalClasses*/
          h[25]
        }))) && { class: o },
        (!d || S[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(Jn).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        S[1] & /*$$restProps*/
        32768 && ft(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && ge(c.update) && S[0] & /*ripple*/
      2048 && c.update.call(null, {
        ripple: (
          /*ripple*/
          h[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          h[43]
        ),
        removeClass: (
          /*removeClass*/
          h[44]
        ),
        addStyle: (
          /*addStyle*/
          h[45]
        )
      }), f && ge(f.update) && S[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (k(p, h), k(l.$$.fragment, h), k(I, h), k(s.$$.fragment, h), k(g, h), d = !0);
    },
    o(h) {
      R(p, h), R(l.$$.fragment, h), R(I, h), R(s.$$.fragment, h), R(g, h), d = !1;
    },
    d(h) {
      h && P(e), p && p.d(h), Y(l), I && I.d(h), Y(s), g && g.d(h), n[82](null), m = !1, de(_);
    }
  };
}
function xr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, m, _, b, p, w, I, A = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Nn(n), g = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && Wn(n)
  );
  i = new Ft({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ia] },
      $$scope: { ctx: n }
    }
  });
  const L = (
    /*#slots*/
    n[56].default
  ), E = te(
    L,
    n,
    /*$$scope*/
    n[87],
    null
  ), h = [aa, ra], S = [];
  function G(H, q) {
    return (
      /*textarea*/
      H[14] && typeof /*value*/
      H[0] == "string" ? 0 : 1
    );
  }
  a = G(n), o = S[a] = h[a](n), c = new Ft({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [ua] },
      $$scope: { ctx: n }
    }
  });
  let T = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Xn(n), y = [
    {
      class: d = Q({
        [
          /*className*/
          n[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          n[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          n[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          n[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          n[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          n[15] === "standard" && !/*textarea*/
          n[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          n[16] || /*label*/
          n[17] == null && !/*$$slots*/
          n[47].label
        ),
        "mdc-text-field--label-floating": (
          /*focused*/
          n[28] || /*value*/
          n[0] != null && /*value*/
          n[0] !== ""
        ),
        "mdc-text-field--with-leading-icon": (
          /*isUninitializedValue*/
          n[35](
            /*withLeadingIcon*/
            n[22]
          ) ? (
            /*$$slots*/
            n[47].leadingIcon
          ) : (
            /*withLeadingIcon*/
            n[22]
          )
        ),
        "mdc-text-field--with-trailing-icon": (
          /*isUninitializedValue*/
          n[35](
            /*withTrailingIcon*/
            n[23]
          ) ? (
            /*$$slots*/
            n[47].trailingIcon
          ) : (
            /*withTrailingIcon*/
            n[23]
          )
        ),
        "mdc-text-field--with-internal-counter": (
          /*textarea*/
          n[14] && /*$$slots*/
          n[47].internalCounter
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          n[1]
        ),
        .../*internalClasses*/
        n[25]
      })
    },
    {
      style: m = Object.entries(
        /*internalStyles*/
        n[26]
      ).map(Kn).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    {
      for: (
        /* suppress a11y warning, since this is wrapped */
        void 0
      )
    },
    ft(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], U = {};
  for (let H = 0; H < y.length; H += 1)
    U = V(U, y[H]);
  return {
    c() {
      e = F("label"), A && A.c(), t = Z(), g && g.c(), l = Z(), K(i.$$.fragment), r = Z(), E && E.c(), s = Z(), o.c(), u = Z(), K(c.$$.fragment), f = Z(), T && T.c(), ee(e, U);
    },
    m(H, q) {
      O(H, e, q), A && A.m(e, null), B(e, t), g && g.m(e, null), B(e, l), X(i, e, null), B(e, r), E && E.m(e, null), B(e, s), S[a].m(e, null), B(e, u), X(c, e, null), B(e, f), T && T.m(e, null), n[78](e), p = !0, w || (I = [
        J(_ = vt.call(null, e, {
          ripple: !/*textarea*/
          n[14] && /*variant*/
          n[15] === "filled",
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[43]
          ),
          removeClass: (
            /*removeClass*/
            n[44]
          ),
          addStyle: (
            /*addStyle*/
            n[45]
          ),
          eventTarget: (
            /*inputElement*/
            n[33]
          ),
          activeTarget: (
            /*inputElement*/
            n[33]
          ),
          initPromise: (
            /*initPromise*/
            n[37]
          )
        })),
        J(b = ye.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        J(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        z(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        z(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], w = !0);
    },
    p(H, q) {
      !/*textarea*/
      H[14] && /*variant*/
      H[15] !== "outlined" ? A ? (A.p(H, q), q[0] & /*textarea, variant*/
      49152 && k(A, 1)) : (A = Nn(H), A.c(), k(A, 1), A.m(e, t)) : A && (ce(), R(A, 1, 1, () => {
        A = null;
      }), fe()), /*textarea*/
      H[14] || /*variant*/
      H[15] === "outlined" ? g ? (g.p(H, q), q[0] & /*textarea, variant*/
      49152 && k(g, 1)) : (g = Wn(H), g.c(), k(g, 1), g.m(e, l)) : g && (ce(), R(g, 1, 1, () => {
        g = null;
      }), fe());
      const ve = {};
      q[2] & /*$$scope*/
      33554432 && (ve.$$scope = { dirty: q, ctx: H }), i.$set(ve), E && E.p && (!p || q[2] & /*$$scope*/
      33554432) && le(
        E,
        L,
        H,
        /*$$scope*/
        H[87],
        p ? ne(
          L,
          /*$$scope*/
          H[87],
          q,
          null
        ) : ie(
          /*$$scope*/
          H[87]
        ),
        null
      );
      let Ce = a;
      a = G(H), a === Ce ? S[a].p(H, q) : (ce(), R(S[Ce], 1, 1, () => {
        S[Ce] = null;
      }), fe(), o = S[a], o ? o.p(H, q) : (o = S[a] = h[a](H), o.c()), k(o, 1), o.m(e, u));
      const _e = {};
      q[2] & /*$$scope*/
      33554432 && (_e.$$scope = { dirty: q, ctx: H }), c.$set(_e), !/*textarea*/
      H[14] && /*variant*/
      H[15] !== "outlined" && /*ripple*/
      H[11] ? T ? (T.p(H, q), q[0] & /*textarea, variant, ripple*/
      51200 && k(T, 1)) : (T = Xn(H), T.c(), k(T, 1), T.m(e, null)) : T && (ce(), R(T, 1, 1, () => {
        T = null;
      }), fe()), ee(e, U = ae(y, [
        (!p || q[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | q[1] & /*$$slots*/
        65536 && d !== (d = Q({
          [
            /*className*/
            H[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            H[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            H[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            H[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            H[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            H[15] === "standard" && !/*textarea*/
            H[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            H[16] || /*label*/
            H[17] == null && !/*$$slots*/
            H[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            H[28] || /*value*/
            H[0] != null && /*value*/
            H[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            H[35](
              /*withLeadingIcon*/
              H[22]
            ) ? (
              /*$$slots*/
              H[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              H[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            H[35](
              /*withTrailingIcon*/
              H[23]
            ) ? (
              /*$$slots*/
              H[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              H[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            H[14] && /*$$slots*/
            H[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            H[1]
          ),
          .../*internalClasses*/
          H[25]
        }))) && { class: d },
        (!p || q[0] & /*internalStyles, style*/
        67109888 && m !== (m = Object.entries(
          /*internalStyles*/
          H[26]
        ).map(Kn).concat([
          /*style*/
          H[10]
        ]).join(" "))) && { style: m },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        q[1] & /*$$restProps*/
        32768 && ft(
          /*$$restProps*/
          H[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), _ && ge(_.update) && q[0] & /*textarea, variant*/
      49152 | q[1] & /*inputElement*/
      4 && _.update.call(null, {
        ripple: !/*textarea*/
        H[14] && /*variant*/
        H[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          H[43]
        ),
        removeClass: (
          /*removeClass*/
          H[44]
        ),
        addStyle: (
          /*addStyle*/
          H[45]
        ),
        eventTarget: (
          /*inputElement*/
          H[33]
        ),
        activeTarget: (
          /*inputElement*/
          H[33]
        ),
        initPromise: (
          /*initPromise*/
          H[37]
        )
      }), b && ge(b.update) && q[0] & /*use*/
      256 && b.update.call(
        null,
        /*use*/
        H[8]
      );
    },
    i(H) {
      p || (k(A), k(g), k(i.$$.fragment, H), k(E, H), k(o), k(c.$$.fragment, H), k(T), p = !0);
    },
    o(H) {
      R(A), R(g), R(i.$$.fragment, H), R(E, H), R(o), R(c.$$.fragment, H), R(T), p = !1;
    },
    d(H) {
      H && P(e), A && A.d(), g && g.d(), Y(i), E && E.d(H), S[a].d(), Y(c), T && T.d(), n[78](null), w = !1, de(I);
    }
  };
}
function $r(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[87],
    Dn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          jr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Dn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ea(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[87],
    Hn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          Vr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Hn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Nn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && Vn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && jn(n);
  return {
    c() {
      i && i.c(), e = Z(), r && r.c(), t = ke();
    },
    m(s, a) {
      i && i.m(s, a), O(s, e, a), r && r.m(s, a), O(s, t, a), l = !0;
    },
    p(s, a) {
      /*variant*/
      s[15] === "filled" ? i || (i = Vn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      s[16] && /*label*/
      (s[17] != null || /*$$slots*/
      s[47].label) ? r ? (r.p(s, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && k(r, 1)) : (r = jn(s), r.c(), k(r, 1), r.m(t.parentNode, t)) : r && (ce(), R(r, 1, 1, () => {
        r = null;
      }), fe());
    },
    i(s) {
      l || (k(r), l = !0);
    },
    o(s) {
      R(r), l = !1;
    },
    d(s) {
      s && (P(e), P(t)), i && i.d(s), r && r.d(s);
    }
  };
}
function Vn(n) {
  let e;
  return {
    c() {
      e = F("span"), M(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function jn(n) {
  let e, t;
  const l = [
    {
      floatAbove: (
        /*focused*/
        n[28] || /*value*/
        n[0] != null && /*value*/
        n[0] !== "" && (typeof /*value*/
        n[0] != "number" || !isNaN(
          /*value*/
          n[0]
        ))
      )
    },
    { required: (
      /*required*/
      n[13]
    ) },
    { wrapped: !0 },
    Ee(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [ta] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = V(i, l[r]);
  return e = new Tl({ props: i }), n[57](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? ae(l, [
        s[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            r[28] || /*value*/
            r[0] != null && /*value*/
            r[0] !== "" && (typeof /*value*/
            r[0] != "number" || !isNaN(
              /*value*/
              r[0]
            ))
          )
        },
        s[0] & /*required*/
        8192 && { required: (
          /*required*/
          r[13]
        ) },
        l[2],
        s[1] & /*$$restProps*/
        32768 && Ae(Ee(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      s[0] & /*label*/
      131072 | s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      R(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), Y(e, r);
    }
  };
}
function ta(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, l;
  const i = (
    /*#slots*/
    n[56].label
  ), r = te(
    i,
    n,
    /*$$scope*/
    n[87],
    Gn
  );
  return {
    c() {
      t = Le(e), r && r.c();
    },
    m(s, a) {
      O(s, t, a), r && r.m(s, a), l = !0;
    },
    p(s, a) {
      (!l || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && Fe(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && le(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? ne(
          i,
          /*$$scope*/
          s[87],
          a,
          Jr
        ) : ie(
          /*$$scope*/
          s[87]
        ),
        Gn
      );
    },
    i(s) {
      l || (k(r, s), l = !0);
    },
    o(s) {
      R(r, s), l = !1;
    },
    d(s) {
      s && P(t), r && r.d(s);
    }
  };
}
function Wn(n) {
  let e, t;
  const l = [
    {
      noLabel: (
        /*noLabel*/
        n[16] || /*label*/
        n[17] == null && !/*$$slots*/
        n[47].label
      )
    },
    Ee(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [la] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = V(i, l[r]);
  return e = new Lr({ props: i }), n[59](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots, $$restProps*/
      98304 ? ae(l, [
        s[0] & /*noLabel, label*/
        196608 | s[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            r[16] || /*label*/
            r[17] == null && !/*$$slots*/
            r[47].label
          )
        },
        s[1] & /*$$restProps*/
        32768 && Ae(Ee(
          /*$$restProps*/
          r[46],
          "outline$"
        ))
      ]) : {};
      s[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | s[1] & /*$$restProps, $$slots*/
      98304 | s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      R(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), Y(e, r);
    }
  };
}
function qn(n) {
  let e, t;
  const l = [
    {
      floatAbove: (
        /*focused*/
        n[28] || /*value*/
        n[0] != null && /*value*/
        n[0] !== "" && (typeof /*value*/
        n[0] != "number" || !isNaN(
          /*value*/
          n[0]
        ))
      )
    },
    { required: (
      /*required*/
      n[13]
    ) },
    { wrapped: !0 },
    Ee(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [na] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = V(i, l[r]);
  return e = new Tl({ props: i }), n[58](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? ae(l, [
        s[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            r[28] || /*value*/
            r[0] != null && /*value*/
            r[0] !== "" && (typeof /*value*/
            r[0] != "number" || !isNaN(
              /*value*/
              r[0]
            ))
          )
        },
        s[0] & /*required*/
        8192 && { required: (
          /*required*/
          r[13]
        ) },
        l[2],
        s[1] & /*$$restProps*/
        32768 && Ae(Ee(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      s[0] & /*label*/
      131072 | s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      R(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), Y(e, r);
    }
  };
}
function na(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, l;
  const i = (
    /*#slots*/
    n[56].label
  ), r = te(
    i,
    n,
    /*$$scope*/
    n[87],
    Fn
  );
  return {
    c() {
      t = Le(e), r && r.c();
    },
    m(s, a) {
      O(s, t, a), r && r.m(s, a), l = !0;
    },
    p(s, a) {
      (!l || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && Fe(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && le(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? ne(
          i,
          /*$$scope*/
          s[87],
          a,
          Kr
        ) : ie(
          /*$$scope*/
          s[87]
        ),
        Fn
      );
    },
    i(s) {
      l || (k(r, s), l = !0);
    },
    o(s) {
      R(r, s), l = !1;
    },
    d(s) {
      s && P(t), r && r.d(s);
    }
  };
}
function la(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && qn(n);
  return {
    c() {
      l && l.c(), e = ke();
    },
    m(i, r) {
      l && l.m(i, r), O(i, e, r), t = !0;
    },
    p(i, r) {
      !/*noLabel*/
      i[16] && /*label*/
      (i[17] != null || /*$$slots*/
      i[47].label) ? l ? (l.p(i, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && k(l, 1)) : (l = qn(i), l.c(), k(l, 1), l.m(e.parentNode, e)) : l && (ce(), R(l, 1, 1, () => {
        l = null;
      }), fe());
    },
    i(i) {
      t || (k(l), t = !0);
    },
    o(i) {
      R(l), t = !1;
    },
    d(i) {
      i && P(e), l && l.d(i);
    }
  };
}
function ia(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          Yr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Bn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ra(n) {
  let e, t, l, i, r, s, a, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = te(
    f,
    n,
    /*$$scope*/
    n[87],
    On
  );
  let m = (
    /*prefix*/
    n[20] != null && Zn(n)
  );
  const _ = [
    { type: (
      /*type*/
      n[18]
    ) },
    { disabled: (
      /*disabled*/
      n[12]
    ) },
    { required: (
      /*required*/
      n[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      n[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      n[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      n[27]
    ) },
    /*noLabel*/
    n[16] && /*label*/
    n[17] != null ? { placeholder: (
      /*label*/
      n[17]
    ) } : {},
    Ee(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function b(h) {
    n[69](h);
  }
  function p(h) {
    n[70](h);
  }
  function w(h) {
    n[71](h);
  }
  function I(h) {
    n[72](h);
  }
  let A = {};
  for (let h = 0; h < _.length; h += 1)
    A = V(A, _[h]);
  /*value*/
  n[0] !== void 0 && (A.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (A.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (A.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (A.invalid = /*invalid*/
  n[1]), l = new Or({ props: A }), n[68](l), x.push(() => Ye(l, "value", b)), x.push(() => Ye(l, "files", p)), x.push(() => Ye(l, "dirty", w)), x.push(() => Ye(l, "invalid", I)), l.$on(
    "blur",
    /*blur_handler_2*/
    n[73]
  ), l.$on(
    "focus",
    /*focus_handler_2*/
    n[74]
  ), l.$on(
    "blur",
    /*blur_handler_3*/
    n[75]
  ), l.$on(
    "focus",
    /*focus_handler_3*/
    n[76]
  );
  let g = (
    /*suffix*/
    n[21] != null && zn(n)
  );
  const L = (
    /*#slots*/
    n[56].suffix
  ), E = te(
    L,
    n,
    /*$$scope*/
    n[87],
    Pn
  );
  return {
    c() {
      d && d.c(), e = Z(), m && m.c(), t = Z(), K(l.$$.fragment), o = Z(), g && g.c(), u = Z(), E && E.c();
    },
    m(h, S) {
      d && d.m(h, S), O(h, e, S), m && m.m(h, S), O(h, t, S), X(l, h, S), O(h, o, S), g && g.m(h, S), O(h, u, S), E && E.m(h, S), c = !0;
    },
    p(h, S) {
      d && d.p && (!c || S[2] & /*$$scope*/
      33554432) && le(
        d,
        f,
        h,
        /*$$scope*/
        h[87],
        c ? ne(
          f,
          /*$$scope*/
          h[87],
          S,
          zr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        On
      ), /*prefix*/
      h[20] != null ? m ? (m.p(h, S), S[0] & /*prefix*/
      1048576 && k(m, 1)) : (m = Zn(h), m.c(), k(m, 1), m.m(t.parentNode, t)) : m && (ce(), R(m, 1, 1, () => {
        m = null;
      }), fe());
      const G = S[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | S[1] & /*$$restProps*/
      32768 ? ae(_, [
        S[0] & /*type*/
        262144 && { type: (
          /*type*/
          h[18]
        ) },
        S[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          h[12]
        ) },
        S[0] & /*required*/
        8192 && { required: (
          /*required*/
          h[13]
        ) },
        S[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          h[19]
        ) },
        S[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          h[27]
        ) },
        S[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          h[27]
        ) },
        S[0] & /*noLabel, label*/
        196608 && Ae(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        S[1] & /*$$restProps*/
        32768 && Ae(Ee(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !i && S[0] & /*value*/
      1 && (i = !0, G.value = /*value*/
      h[0], Xe(() => i = !1)), !r && S[0] & /*files*/
      8 && (r = !0, G.files = /*files*/
      h[3], Xe(() => r = !1)), !s && S[0] & /*dirty*/
      16 && (s = !0, G.dirty = /*dirty*/
      h[4], Xe(() => s = !1)), !a && S[0] & /*invalid*/
      2 && (a = !0, G.invalid = /*invalid*/
      h[1], Xe(() => a = !1)), l.$set(G), /*suffix*/
      h[21] != null ? g ? (g.p(h, S), S[0] & /*suffix*/
      2097152 && k(g, 1)) : (g = zn(h), g.c(), k(g, 1), g.m(u.parentNode, u)) : g && (ce(), R(g, 1, 1, () => {
        g = null;
      }), fe()), E && E.p && (!c || S[2] & /*$$scope*/
      33554432) && le(
        E,
        L,
        h,
        /*$$scope*/
        h[87],
        c ? ne(
          L,
          /*$$scope*/
          h[87],
          S,
          Zr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        Pn
      );
    },
    i(h) {
      c || (k(d, h), k(m), k(l.$$.fragment, h), k(g), k(E, h), c = !0);
    },
    o(h) {
      R(d, h), R(m), R(l.$$.fragment, h), R(g), R(E, h), c = !1;
    },
    d(h) {
      h && (P(e), P(t), P(o), P(u)), d && d.d(h), m && m.d(h), n[68](null), Y(l, h), g && g.d(h), E && E.d(h);
    }
  };
}
function aa(n) {
  let e, t, l, i, r, s, a, o;
  const u = [
    { disabled: (
      /*disabled*/
      n[12]
    ) },
    { required: (
      /*required*/
      n[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      n[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      n[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      n[27]
    ) },
    Ee(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function c(p) {
    n[61](p);
  }
  function f(p) {
    n[62](p);
  }
  function d(p) {
    n[63](p);
  }
  let m = {};
  for (let p = 0; p < u.length; p += 1)
    m = V(m, u[p]);
  /*value*/
  n[0] !== void 0 && (m.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (m.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (m.invalid = /*invalid*/
  n[1]), t = new Fr({ props: m }), n[60](t), x.push(() => Ye(t, "value", c)), x.push(() => Ye(t, "dirty", f)), x.push(() => Ye(t, "invalid", d)), t.$on(
    "blur",
    /*blur_handler*/
    n[64]
  ), t.$on(
    "focus",
    /*focus_handler*/
    n[65]
  ), t.$on(
    "blur",
    /*blur_handler_1*/
    n[66]
  ), t.$on(
    "focus",
    /*focus_handler_1*/
    n[67]
  );
  const _ = (
    /*#slots*/
    n[56].internalCounter
  ), b = te(
    _,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  return {
    c() {
      e = F("span"), K(t.$$.fragment), s = Z(), b && b.c(), M(e, "class", a = Q({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(p, w) {
      O(p, e, w), X(t, e, null), B(e, s), b && b.m(e, null), o = !0;
    },
    p(p, w) {
      const I = w[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | w[1] & /*$$restProps*/
      32768 ? ae(u, [
        w[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        w[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        w[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        w[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        w[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        w[1] & /*$$restProps*/
        32768 && Ae(Ee(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !l && w[0] & /*value*/
      1 && (l = !0, I.value = /*value*/
      p[0], Xe(() => l = !1)), !i && w[0] & /*dirty*/
      16 && (i = !0, I.dirty = /*dirty*/
      p[4], Xe(() => i = !1)), !r && w[0] & /*invalid*/
      2 && (r = !0, I.invalid = /*invalid*/
      p[1], Xe(() => r = !1)), t.$set(I), b && b.p && (!o || w[2] & /*$$scope*/
      33554432) && le(
        b,
        _,
        p,
        /*$$scope*/
        p[87],
        o ? ne(
          _,
          /*$$scope*/
          p[87],
          w,
          Xr
        ) : ie(
          /*$$scope*/
          p[87]
        ),
        Un
      ), (!o || w[1] & /*$$restProps*/
      32768 && a !== (a = Q({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && M(e, "class", a);
    },
    i(p) {
      o || (k(t.$$.fragment, p), k(b, p), o = !0);
    },
    o(p) {
      R(t.$$.fragment, p), R(b, p), o = !1;
    },
    d(p) {
      p && P(e), n[60](null), Y(t), b && b.d(p);
    }
  };
}
function Zn(n) {
  let e, t;
  return e = new Hr({
    props: {
      $$slots: { default: [sa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function sa(n) {
  let e;
  return {
    c() {
      e = Le(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      O(t, e, l);
    },
    p(t, l) {
      l[0] & /*prefix*/
      1048576 && Fe(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && P(e);
    }
  };
}
function zn(n) {
  let e, t;
  return e = new Dr({
    props: {
      $$slots: { default: [oa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*suffix*/
      2097152 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function oa(n) {
  let e;
  return {
    c() {
      e = Le(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      O(t, e, l);
    },
    p(t, l) {
      l[0] & /*suffix*/
      2097152 && Fe(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && P(e);
    }
  };
}
function ua(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[87],
    Mn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          qr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Mn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Xn(n) {
  let e, t;
  const l = [Ee(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = V(i, l[r]);
  return e = new Ir({ props: i }), n[77](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? ae(l, [Ae(Ee(
        /*$$restProps*/
        r[46],
        "ripple$"
      ))]) : {};
      e.$set(a);
    },
    i(r) {
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      R(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), Y(e, r);
    }
  };
}
function Yn(n) {
  let e, t;
  const l = [Ee(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [ca] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = V(i, l[r]);
  return e = new Rr({ props: i }), e.$on(
    "SMUITextfieldHelperText:id",
    /*handleHelperTextId*/
    n[41]
  ), e.$on(
    "SMUITextfieldHelperText:mount",
    /*handleHelperTextMount*/
    n[42]
  ), e.$on(
    "SMUITextfieldHelperText:unmount",
    /*SMUITextfieldHelperText_unmount_handler*/
    n[85]
  ), e.$on(
    "SMUITextfieldCharacterCounter:mount",
    /*handleCharacterCounterMount*/
    n[40]
  ), e.$on(
    "SMUITextfieldCharacterCounter:unmount",
    /*SMUITextfieldCharacterCounter_unmount_handler_1*/
    n[86]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? ae(l, [Ae(Ee(
        /*$$restProps*/
        r[46],
        "helperLine$"
      ))]) : {};
      s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      R(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Y(e, r);
    }
  };
}
function ca(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[87],
    En
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          Gr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        En
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function fa(n) {
  let e, t, l, i, r;
  const s = [xr, Qr], a = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = a[e] = s[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Yn(n)
  );
  return {
    c() {
      t.c(), l = Z(), u && u.c(), i = ke();
    },
    m(c, f) {
      a[e].m(c, f), O(c, l, f), u && u.m(c, f), O(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && k(u, 1)) : (u = Yn(c), u.c(), k(u, 1), u.m(i.parentNode, i)) : u && (ce(), R(u, 1, 1, () => {
        u = null;
      }), fe());
    },
    i(c) {
      r || (k(t), k(u), r = !0);
    },
    o(c) {
      R(t), R(u), r = !1;
    },
    d(c) {
      c && (P(l), P(i)), a[e].d(c), u && u.d(c);
    }
  };
}
const Kn = ([n, e]) => `${n}: ${e};`, Jn = ([n, e]) => `${n}: ${e};`;
function da(n, e, t) {
  let l;
  const i = [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "focus",
    "blur",
    "layout",
    "getElement"
  ];
  let r = ue(e, i), { $$slots: s = {}, $$scope: a } = e;
  const o = ln(s), { applyPassive: u } = Rl, c = Me(Se());
  let f = () => {
  };
  function d(C) {
    return C === f;
  }
  let { use: m = [] } = e, { class: _ = "" } = e, { style: b = "" } = e, { ripple: p = !0 } = e, { disabled: w = !1 } = e, { required: I = !1 } = e, { textarea: A = !1 } = e, { variant: g = A ? "outlined" : "standard" } = e, { noLabel: L = !1 } = e, { label: E = void 0 } = e, { type: h = "text" } = e, { value: S = r.input$emptyValueUndefined ? void 0 : f } = e, { files: G = f } = e;
  const T = !d(S) || !d(G);
  d(S) && (S = void 0), d(G) && (G = null);
  let { invalid: y = f } = e, { updateInvalid: U = d(y) } = e;
  d(y) && (y = !1);
  let { dirty: H = !1 } = e, { prefix: q = void 0 } = e, { suffix: ve = void 0 } = e, { validateOnValueChange: Ce = U } = e, { useNativeValidation: _e = U } = e, { withLeadingIcon: j = f } = e, { withTrailingIcon: v = f } = e, { input: N = void 0 } = e, { floatingLabel: me = void 0 } = e, { lineRipple: be = void 0 } = e, { notchedOutline: Oe = void 0 } = e, Ne, he, Ve = {}, ze = {}, Je, Qe = !1, Lt = Pe("SMUI:addLayoutListener"), gt, mt, We = new Promise((C) => mt = C), xe, $e, it, et, pt = S;
  Lt && (gt = Lt(sn)), Ge(() => {
    if (t(54, he = new gr(
      {
        // getRootAdapterMethods_
        addClass: St,
        removeClass: wt,
        hasClass: _t,
        registerTextFieldInteractionHandler: (C, Ie) => Et().addEventListener(C, Ie),
        deregisterTextFieldInteractionHandler: (C, Ie) => Et().removeEventListener(C, Ie),
        registerValidationAttributeChangeHandler: (C) => {
          const Ie = (Wt) => Wt.map((qt) => qt.attributeName).filter((qt) => qt), on = new MutationObserver((Wt) => {
            _e && C(Ie(Wt));
          }), gi = { attributes: !0 };
          return N && on.observe(N.getElement(), gi), on;
        },
        deregisterValidationAttributeChangeHandler: (C) => {
          C.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var C;
          return (C = N == null ? void 0 : N.getElement()) !== null && C !== void 0 ? C : null;
        },
        setInputAttr: (C, Ie) => {
          N == null || N.addAttr(C, Ie);
        },
        removeInputAttr: (C) => {
          N == null || N.removeAttr(C);
        },
        isFocused: () => document.activeElement === (N == null ? void 0 : N.getElement()),
        registerInputInteractionHandler: (C, Ie) => {
          N == null || N.getElement().addEventListener(C, Ie, u());
        },
        deregisterInputInteractionHandler: (C, Ie) => {
          N == null || N.getElement().removeEventListener(C, Ie, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (C) => me && me.float(C),
        getLabelWidth: () => me ? me.getWidth() : 0,
        hasLabel: () => !!me,
        shakeLabel: (C) => me && me.shake(C),
        setLabelRequired: (C) => me && me.setRequired(C),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => be && be.activate(),
        deactivateLineRipple: () => be && be.deactivate(),
        setLineRippleTransformOrigin: (C) => be && be.setRippleCenter(C),
        // getOutlineAdapterMethods_
        closeOutline: () => Oe && Oe.closeNotch(),
        hasOutline: () => !!Oe,
        notchOutline: (C) => Oe && Oe.notch(C)
      },
      {
        get helperText() {
          return it;
        },
        get characterCounter() {
          return et;
        },
        get leadingIcon() {
          return xe;
        },
        get trailingIcon() {
          return $e;
        }
      }
    )), T) {
      if (N == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      he.init();
    } else
      ki().then(() => {
        if (N == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        he.init();
      });
    return mt(), () => {
      he.destroy();
    };
  }), yt(() => {
    gt && gt();
  });
  function jt(C) {
    t(29, xe = C.detail);
  }
  function D(C) {
    t(30, $e = C.detail);
  }
  function W(C) {
    t(32, et = C.detail);
  }
  function we(C) {
    t(27, Je = C.detail);
  }
  function kt(C) {
    t(31, it = C.detail);
  }
  function _t(C) {
    var Ie;
    return C in Ve ? (Ie = Ve[C]) !== null && Ie !== void 0 ? Ie : null : Et().classList.contains(C);
  }
  function St(C) {
    Ve[C] || t(25, Ve[C] = !0, Ve);
  }
  function wt(C) {
    (!(C in Ve) || Ve[C]) && t(25, Ve[C] = !1, Ve);
  }
  function Ol(C, Ie) {
    ze[C] != Ie && (Ie === "" || Ie == null ? (delete ze[C], t(26, ze)) : t(26, ze[C] = Ie, ze));
  }
  function Ul() {
    N == null || N.focus();
  }
  function Bl() {
    N == null || N.blur();
  }
  function sn() {
    if (he) {
      const C = he.shouldFloat;
      he.notchOutline(C);
    }
  }
  function Et() {
    return Ne;
  }
  function Fl(C) {
    x[C ? "unshift" : "push"](() => {
      me = C, t(5, me);
    });
  }
  function Gl(C) {
    x[C ? "unshift" : "push"](() => {
      me = C, t(5, me);
    });
  }
  function Nl(C) {
    x[C ? "unshift" : "push"](() => {
      Oe = C, t(7, Oe);
    });
  }
  function Vl(C) {
    x[C ? "unshift" : "push"](() => {
      N = C, t(2, N);
    });
  }
  function jl(C) {
    S = C, t(0, S);
  }
  function Wl(C) {
    H = C, t(4, H);
  }
  function ql(C) {
    y = C, t(1, y), t(54, he), t(19, U);
  }
  const Zl = () => t(28, Qe = !1), zl = () => t(28, Qe = !0), Xl = (C) => pe(Ne, "blur", C), Yl = (C) => pe(Ne, "focus", C);
  function Kl(C) {
    x[C ? "unshift" : "push"](() => {
      N = C, t(2, N);
    });
  }
  function Jl(C) {
    S = C, t(0, S);
  }
  function Ql(C) {
    G = C, t(3, G);
  }
  function xl(C) {
    H = C, t(4, H);
  }
  function $l(C) {
    y = C, t(1, y), t(54, he), t(19, U);
  }
  const ei = () => t(28, Qe = !1), ti = () => t(28, Qe = !0), ni = (C) => pe(Ne, "blur", C), li = (C) => pe(Ne, "focus", C);
  function ii(C) {
    x[C ? "unshift" : "push"](() => {
      be = C, t(6, be);
    });
  }
  function ri(C) {
    x[C ? "unshift" : "push"](() => {
      Ne = C, t(24, Ne);
    });
  }
  const ai = () => t(29, xe = void 0), si = () => t(30, $e = void 0), oi = () => t(32, et = void 0);
  function ui(C) {
    x[C ? "unshift" : "push"](() => {
      Ne = C, t(24, Ne);
    });
  }
  const ci = () => t(29, xe = void 0), fi = () => t(30, $e = void 0), di = () => {
    t(27, Je = void 0), t(31, it = void 0);
  }, hi = () => t(32, et = void 0);
  return n.$$set = (C) => {
    e = V(V({}, e), De(C)), t(46, r = ue(e, i)), "use" in C && t(8, m = C.use), "class" in C && t(9, _ = C.class), "style" in C && t(10, b = C.style), "ripple" in C && t(11, p = C.ripple), "disabled" in C && t(12, w = C.disabled), "required" in C && t(13, I = C.required), "textarea" in C && t(14, A = C.textarea), "variant" in C && t(15, g = C.variant), "noLabel" in C && t(16, L = C.noLabel), "label" in C && t(17, E = C.label), "type" in C && t(18, h = C.type), "value" in C && t(0, S = C.value), "files" in C && t(3, G = C.files), "invalid" in C && t(1, y = C.invalid), "updateInvalid" in C && t(19, U = C.updateInvalid), "dirty" in C && t(4, H = C.dirty), "prefix" in C && t(20, q = C.prefix), "suffix" in C && t(21, ve = C.suffix), "validateOnValueChange" in C && t(48, Ce = C.validateOnValueChange), "useNativeValidation" in C && t(49, _e = C.useNativeValidation), "withLeadingIcon" in C && t(22, j = C.withLeadingIcon), "withTrailingIcon" in C && t(23, v = C.withTrailingIcon), "input" in C && t(2, N = C.input), "floatingLabel" in C && t(5, me = C.floatingLabel), "lineRipple" in C && t(6, be = C.lineRipple), "notchedOutline" in C && t(7, Oe = C.notchedOutline), "$$scope" in C && t(87, a = C.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = N && N.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && he && he.isValid() !== !y && (U ? t(1, y = !he.isValid()) : he.setValid(!y)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && he && he.getValidateOnValueChange() !== Ce && he.setValidateOnValueChange(d(Ce) ? !1 : Ce), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && he && he.setUseNativeValidation(d(_e) ? !0 : _e), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && he && he.setDisabled(w), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && he && T && pt !== S) {
      t(55, pt = S);
      const C = `${S}`;
      he.getValue() !== C && he.setValue(C);
    }
  }, [
    S,
    y,
    N,
    G,
    H,
    me,
    be,
    Oe,
    m,
    _,
    b,
    p,
    w,
    I,
    A,
    g,
    L,
    E,
    h,
    U,
    q,
    ve,
    j,
    v,
    Ne,
    Ve,
    ze,
    Je,
    Qe,
    xe,
    $e,
    it,
    et,
    l,
    c,
    d,
    T,
    We,
    jt,
    D,
    W,
    we,
    kt,
    St,
    wt,
    Ol,
    r,
    o,
    Ce,
    _e,
    Ul,
    Bl,
    sn,
    Et,
    he,
    pt,
    s,
    Fl,
    Gl,
    Nl,
    Vl,
    jl,
    Wl,
    ql,
    Zl,
    zl,
    Xl,
    Yl,
    Kl,
    Jl,
    Ql,
    xl,
    $l,
    ei,
    ti,
    ni,
    li,
    ii,
    ri,
    ai,
    si,
    oi,
    ui,
    ci,
    fi,
    di,
    hi,
    a
  ];
}
class ha extends oe {
  constructor(e) {
    super(), se(
      this,
      e,
      da,
      fa,
      re,
      {
        use: 8,
        class: 9,
        style: 10,
        ripple: 11,
        disabled: 12,
        required: 13,
        textarea: 14,
        variant: 15,
        noLabel: 16,
        label: 17,
        type: 18,
        value: 0,
        files: 3,
        invalid: 1,
        updateInvalid: 19,
        dirty: 4,
        prefix: 20,
        suffix: 21,
        validateOnValueChange: 48,
        useNativeValidation: 49,
        withLeadingIcon: 22,
        withTrailingIcon: 23,
        input: 2,
        floatingLabel: 5,
        lineRipple: 6,
        notchedOutline: 7,
        focus: 50,
        blur: 51,
        layout: 52,
        getElement: 53
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[50];
  }
  get blur() {
    return this.$$.ctx[51];
  }
  get layout() {
    return this.$$.ctx[52];
  }
  get getElement() {
    return this.$$.ctx[53];
  }
}
He({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
He({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
He({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function ga(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[8].default
  ), o = te(
    a,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list-item__graphic": !0,
        "mdc-menu__selection-group-icon": (
          /*menuSelectionGroup*/
          n[4]
        )
      })
    },
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = V(c, u[f]);
  return {
    c() {
      e = F("span"), o && o.c(), ee(e, c);
    },
    m(f, d) {
      O(f, e, d), o && o.m(e, null), n[9](e), i = !0, r || (s = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      128) && le(
        o,
        a,
        f,
        /*$$scope*/
        f[7],
        i ? ne(
          a,
          /*$$scope*/
          f[7],
          d,
          null
        ) : ie(
          /*$$scope*/
          f[7]
        ),
        null
      ), ee(e, c = ae(u, [
        (!i || d & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            f[4]
          )
        }))) && { class: t },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), l && ge(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (k(o, f), i = !0);
    },
    o(f) {
      R(o, f), i = !1;
    },
    d(f) {
      f && P(e), o && o.d(f), n[9](null), r = !1, de(s);
    }
  };
}
function ma(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Me(Se());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = Pe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function m(_) {
    x[_ ? "unshift" : "push"](() => {
      c = _, t(2, c);
    });
  }
  return n.$$set = (_) => {
    e = V(V({}, e), De(_)), t(5, i = ue(e, l)), "use" in _ && t(0, o = _.use), "class" in _ && t(1, u = _.class), "$$scope" in _ && t(7, s = _.$$scope);
  }, [
    o,
    u,
    c,
    a,
    f,
    i,
    d,
    s,
    r,
    m
  ];
}
class pa extends oe {
  constructor(e) {
    super(), se(this, e, ma, ga, re, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
He({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
He({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
He({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
He({
  class: "mdc-menu__selection-group-icon",
  component: pa
});
He({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
He({
  class: "mdc-dialog__title",
  tag: "h2"
});
He({
  class: "mdc-dialog__content",
  tag: "div"
});
He({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
He({
  class: "smui-paper__content",
  tag: "div"
});
He({
  class: "smui-paper__title",
  tag: "h5"
});
He({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function _a(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = te(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = F("span"), i && i.c(), M(e, "class", "oscd-icon");
    },
    m(r, s) {
      O(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && le(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? ne(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : ie(
          /*$$scope*/
          r[0]
        ),
        null
      );
    },
    i(r) {
      t || (k(i, r), t = !0);
    },
    o(r) {
      R(i, r), t = !1;
    },
    d(r) {
      r && P(e), i && i.d(r);
    }
  };
}
function ba(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class an extends oe {
  constructor(e) {
    super(), se(this, e, ba, _a, re, {});
  }
}
function va(n) {
  let e, t;
  return {
    c() {
      e = Be("svg"), t = Be("path"), M(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), M(e, "xmlns", "http://www.w3.org/2000/svg"), M(e, "viewBox", "0 -960 960 960"), M(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && M(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && P(e);
    }
  };
}
function Ca(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [va] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ia(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Aa extends oe {
  constructor(e) {
    super(), se(this, e, Ia, Ca, re, { svgStyles: 0 });
  }
}
function ya(n) {
  let e, t;
  return {
    c() {
      e = Be("svg"), t = Be("path"), M(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), M(e, "xmlns", "http://www.w3.org/2000/svg"), M(e, "viewBox", "0 -960 960 960"), M(e, "width", "24"), M(e, "height", "24"), M(e, "fill", "#004552");
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && P(e);
    }
  };
}
class La extends oe {
  constructor(e) {
    super(), se(this, e, null, ya, re, {});
  }
}
function ka(n) {
  let e, t;
  return {
    c() {
      e = Be("svg"), t = Be("path"), M(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), M(e, "xmlns", "http://www.w3.org/2000/svg"), M(e, "height", "24px"), M(e, "viewBox", "0 -960 960 960"), M(e, "width", "24px"), M(e, "fill", "#004552");
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && P(e);
    }
  };
}
class Sa extends oe {
  constructor(e) {
    super(), se(this, e, null, ka, re, {});
  }
}
function wa(n) {
  let e, t;
  return {
    c() {
      e = Be("svg"), t = Be("path"), M(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), M(e, "xmlns", "http://www.w3.org/2000/svg"), M(e, "height", "24px"), M(e, "viewBox", "0 -960 960 960"), M(e, "width", "24px"), M(e, "fill", "#004552");
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && P(e);
    }
  };
}
class Ea extends oe {
  constructor(e) {
    super(), se(this, e, null, wa, re, {});
  }
}
function Ra(n) {
  let e, t;
  return {
    c() {
      e = Be("svg"), t = Be("path"), M(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), M(e, "xmlns", "http://www.w3.org/2000/svg"), M(e, "viewBox", "0 -960 960 960"), M(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && M(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && P(e);
    }
  };
}
function Ha(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Ra] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Da(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ta extends oe {
  constructor(e) {
    super(), se(this, e, Da, Ha, re, { svgStyles: 0 });
  }
}
function Ma(n) {
  let e, t;
  return {
    c() {
      e = Be("svg"), t = Be("path"), M(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), M(e, "xmlns", "http://www.w3.org/2000/svg"), M(e, "viewBox", "0 -960 960 960"), M(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && M(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && P(e);
    }
  };
}
function Pa(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Ma] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Oa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ua extends oe {
  constructor(e) {
    super(), se(this, e, Oa, Pa, re, { svgStyles: 0 });
  }
}
function Ba(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[7].default
  ), s = te(
    r,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      e = F("span"), s && s.c(), Tt(e, "display", "inline-block");
    },
    m(a, o) {
      O(a, e, o), s && s.m(e, null), n[8](e), t = !0, l || (i = [
        z(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[1]
        ),
        z(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[2]
        )
      ], l = !0);
    },
    p(a, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      64) && le(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        t ? ne(
          r,
          /*$$scope*/
          a[6],
          o,
          null
        ) : ie(
          /*$$scope*/
          a[6]
        ),
        null
      );
    },
    i(a) {
      t || (k(s, a), t = !0);
    },
    o(a) {
      R(s, a), t = !1;
    },
    d(a) {
      a && P(e), s && s.d(a), n[8](null), l = !1, de(i);
    }
  };
}
function Fa(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { hoverDelay: s = 300 } = e, { hideDelay: a = 500 } = e, o, u, c, f, d = { left: 0, top: 0, width: 0 };
  function m() {
    clearTimeout(u), d = c.getBoundingClientRect(), o = setTimeout(
      () => {
        b();
      },
      s
    );
  }
  function _() {
    clearTimeout(o), u = setTimeout(
      () => {
        p();
      },
      a
    );
  }
  function b() {
    p(), f = document.createElement("div"), f.setAttribute("role", "tooltip"), f.textContent = r, Object.assign(f.style, {
      position: "fixed",
      left: `${d.left + d.width / 2}px`,
      top: `${d.top - 8}px`,
      transform: "translate(-50%, -100%)",
      zIndex: "9999",
      background: "#222",
      opacity: "0.9",
      color: "#fff",
      padding: "4px 12px",
      borderRadius: "4px",
      fontSize: "0.8rem",
      fontFamily: "Roboto, Arial, sans-serif",
      boxShadow: "0px 3px 6px rgba(0,0,0,0.16), 0px 1.5px 3px rgba(0,0,0,0.23)",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      letterSpacing: "0.01em",
      lineHeight: "1.4",
      userSelect: "none"
    }), document.body.appendChild(f);
  }
  function p() {
    f && f.parentNode && (f.parentNode.removeChild(f), f = null);
  }
  yt(() => {
    clearTimeout(o), clearTimeout(u), p();
  });
  function w(I) {
    x[I ? "unshift" : "push"](() => {
      c = I, t(0, c);
    });
  }
  return n.$$set = (I) => {
    "content" in I && t(3, r = I.content), "hoverDelay" in I && t(4, s = I.hoverDelay), "hideDelay" in I && t(5, a = I.hideDelay), "$$scope" in I && t(6, i = I.$$scope);
  }, [
    c,
    m,
    _,
    r,
    s,
    a,
    i,
    l,
    w
  ];
}
class Ga extends oe {
  constructor(e) {
    super(), se(this, e, Fa, Ba, re, { content: 3, hoverDelay: 4, hideDelay: 5 });
  }
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qe = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Qn = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, nt = {
  ARIA_SELECTED: Qn.ARIA_SELECTED,
  ARIA_SORT: Qn.ARIA_SORT
}, Ue;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Ue || (Ue = {}));
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Na = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      return n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassAtRowIndex: function() {
          },
          getAttributeByHeaderCellIndex: function() {
            return "";
          },
          getHeaderCellCount: function() {
            return 0;
          },
          getHeaderCellElements: function() {
            return [];
          },
          getRowCount: function() {
            return 0;
          },
          getRowElements: function() {
            return [];
          },
          getRowIdAtIndex: function() {
            return "";
          },
          getRowIndexByChildElement: function() {
            return 0;
          },
          getSelectedRowCount: function() {
            return 0;
          },
          getTableContainerHeight: function() {
            return 0;
          },
          getTableHeaderHeight: function() {
            return 0;
          },
          isCheckboxAtRowIndexChecked: function() {
            return !1;
          },
          isHeaderRowCheckboxChecked: function() {
            return !1;
          },
          isRowsSelectable: function() {
            return !1;
          },
          notifyRowSelectionChanged: function() {
          },
          notifySelectedAll: function() {
          },
          notifySortAction: function() {
          },
          notifyUnselectedAll: function() {
          },
          notifyRowClick: function() {
          },
          registerHeaderRowCheckbox: function() {
          },
          registerRowCheckboxes: function() {
          },
          removeClass: function() {
          },
          removeClassAtRowIndex: function() {
          },
          removeClassNameByHeaderCellIndex: function() {
          },
          setAttributeAtRowIndex: function() {
          },
          setAttributeByHeaderCellIndex: function() {
          },
          setClassNameByHeaderCellIndex: function() {
          },
          setHeaderRowCheckboxChecked: function() {
          },
          setHeaderRowCheckboxIndeterminate: function() {
          },
          setProgressIndicatorStyles: function() {
          },
          setRowCheckboxCheckedAtIndex: function() {
          },
          setSortStatusLabelByHeaderCellIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
    }, e.prototype.layoutAsync = function() {
      return rn(this, void 0, void 0, function() {
        return Ti(this, function(t) {
          switch (t.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return t.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              t.sent(), this.setHeaderRowCheckboxState(), t.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, e.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, e.prototype.setSelectedRowIds = function(t) {
      for (var l = 0; l < this.adapter.getRowCount(); l++) {
        var i = this.adapter.getRowIdAtIndex(l), r = !1;
        i && t.indexOf(i) >= 0 && (r = !0), this.adapter.setRowCheckboxCheckedAtIndex(l, r), this.selectRowAtIndex(l, r);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var t = [], l = 0; l < this.adapter.getRowCount(); l++)
        t.push(this.adapter.getRowIdAtIndex(l));
      return t;
    }, e.prototype.getSelectedRowIds = function() {
      for (var t = [], l = 0; l < this.adapter.getRowCount(); l++)
        this.adapter.isCheckboxAtRowIndexChecked(l) && t.push(this.adapter.getRowIdAtIndex(l));
      return t;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var t = this.adapter.isHeaderRowCheckboxChecked(), l = 0; l < this.adapter.getRowCount(); l++)
        this.adapter.setRowCheckboxCheckedAtIndex(l, t), this.selectRowAtIndex(l, t);
      t ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(t) {
      var l = this.adapter.getRowIndexByChildElement(t.target);
      if (l !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(l);
        this.selectRowAtIndex(l, i), this.setHeaderRowCheckboxState();
        var r = this.adapter.getRowIdAtIndex(l);
        this.adapter.notifyRowSelectionChanged({ rowId: r, rowIndex: l, selected: i });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var l = t.columnId, i = t.columnIndex, r = t.headerCell, s = 0; s < this.adapter.getHeaderCellCount(); s++)
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, qe.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, nt.ARIA_SORT, Ue.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, Ue.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, qe.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(i, nt.ARIA_SORT), o = Ue.NONE;
      a === Ue.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Ue.DESCENDING), o = Ue.DESCENDING) : a === Ue.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Ue.ASCENDING), o = Ue.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Ue.ASCENDING), o = Ue.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
        columnId: l,
        columnIndex: i,
        headerCell: r,
        sortValue: o
      });
    }, e.prototype.handleRowClick = function(t) {
      var l = t.rowId, i = t.row;
      this.adapter.notifyRowClick({
        rowId: l,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var t = this.adapter.getTableHeaderHeight(), l = this.adapter.getTableContainerHeight() - t, i = t;
      this.adapter.setProgressIndicatorStyles({
        height: l + "px",
        top: i + "px"
      }), this.adapter.addClass(qe.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(qe.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, qe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, qe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "false"));
    }, e;
  }(ht)
);
const Va = (n) => ({}), xn = (n) => ({}), ja = (n) => ({}), $n = (n) => ({});
function el(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), a = te(
    s,
    n,
    /*$$scope*/
    n[35],
    $n
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = Z(), a && a.c(), M(t, "class", "mdc-data-table__scrim"), M(e, "class", "mdc-data-table__progress-indicator"), M(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(tl).join(" "));
    },
    m(o, u) {
      O(o, e, u), B(e, t), B(e, l), a && a.m(e, null), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      16) && le(
        a,
        s,
        o,
        /*$$scope*/
        o[35],
        r ? ne(
          s,
          /*$$scope*/
          o[35],
          u,
          ja
        ) : ie(
          /*$$scope*/
          o[35]
        ),
        $n
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(tl).join(" "))) && M(e, "style", i);
    },
    i(o) {
      r || (k(a, o), r = !0);
    },
    o(o) {
      R(a, o), r = !1;
    },
    d(o) {
      o && P(e), a && a.d(o);
    }
  };
}
function Wa(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, m, _;
  const b = (
    /*#slots*/
    n[36].default
  ), p = te(
    b,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let w = [
    {
      class: i = Q({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ee(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], I = {};
  for (let T = 0; T < w.length; T += 1)
    I = V(I, w[T]);
  let A = [
    {
      class: s = Q({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ee(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], g = {};
  for (let T = 0; T < A.length; T += 1)
    g = V(g, A[T]);
  let L = (
    /*$$slots*/
    n[24].progress && el(n)
  );
  const E = (
    /*#slots*/
    n[36].paginate
  ), h = te(
    E,
    n,
    /*$$scope*/
    n[35],
    xn
  );
  let S = [
    {
      class: c = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": (
          /*stickyHeader*/
          n[2]
        ),
        .../*internalClasses*/
        n[12]
      })
    },
    ft(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], G = {};
  for (let T = 0; T < S.length; T += 1)
    G = V(G, S[T]);
  return {
    c() {
      e = F("div"), t = F("div"), l = F("table"), p && p.c(), o = Z(), L && L.c(), u = Z(), h && h.c(), ee(l, I), ee(t, g), ee(e, G);
    },
    m(T, y) {
      O(T, e, y), B(e, t), B(t, l), p && p.m(l, null), n[37](t), B(e, o), L && L.m(e, null), B(e, u), h && h.m(e, null), n[38](e), d = !0, m || (_ = [
        J(r = ye.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        J(a = ye.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        J(f = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        z(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        z(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        z(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        z(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        z(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        z(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        z(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        z(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        z(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], m = !0);
    },
    p(T, y) {
      p && p.p && (!d || y[1] & /*$$scope*/
      16) && le(
        p,
        b,
        T,
        /*$$scope*/
        T[35],
        d ? ne(
          b,
          /*$$scope*/
          T[35],
          y,
          null
        ) : ie(
          /*$$scope*/
          T[35]
        ),
        null
      ), ee(l, I = ae(w, [
        (!d || y[0] & /*table$class*/
        64 && i !== (i = Q({
          [
            /*table$class*/
            T[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        y[0] & /*$$restProps*/
        33554432 && Ee(
          /*$$restProps*/
          T[25],
          "table$"
        )
      ])), r && ge(r.update) && y[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        T[5]
      ), ee(t, g = ae(A, [
        (!d || y[0] & /*container$class*/
        16 && s !== (s = Q({
          [
            /*container$class*/
            T[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        y[0] & /*$$restProps*/
        33554432 && Ee(
          /*$$restProps*/
          T[25],
          "container$"
        )
      ])), a && ge(a.update) && y[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        T[3]
      ), /*$$slots*/
      T[24].progress ? L ? (L.p(T, y), y[0] & /*$$slots*/
      16777216 && k(L, 1)) : (L = el(T), L.c(), k(L, 1), L.m(e, u)) : L && (ce(), R(L, 1, 1, () => {
        L = null;
      }), fe()), h && h.p && (!d || y[1] & /*$$scope*/
      16) && le(
        h,
        E,
        T,
        /*$$scope*/
        T[35],
        d ? ne(
          E,
          /*$$scope*/
          T[35],
          y,
          Va
        ) : ie(
          /*$$scope*/
          T[35]
        ),
        xn
      ), ee(e, G = ae(S, [
        (!d || y[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = Q({
          [
            /*className*/
            T[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            T[2]
          ),
          .../*internalClasses*/
          T[12]
        }))) && { class: c },
        y[0] & /*$$restProps*/
        33554432 && ft(
          /*$$restProps*/
          T[25],
          ["container$", "table$"]
        )
      ])), f && ge(f.update) && y[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        T[0]
      );
    },
    i(T) {
      d || (k(p, T), k(L), k(h, T), d = !0);
    },
    o(T) {
      R(p, T), R(L), R(h, T), d = !1;
    },
    d(T) {
      T && P(e), p && p.d(T), n[37](null), L && L.d(), h && h.d(T), n[38](null), m = !1, de(_);
    }
  };
}
const tl = ([n, e]) => `${n}: ${e};`;
function qa(n, e, t) {
  const l = [
    "use",
    "class",
    "stickyHeader",
    "sortable",
    "sort",
    "sortDirection",
    "sortAscendingAriaLabel",
    "sortDescendingAriaLabel",
    "container$use",
    "container$class",
    "table$use",
    "table$class",
    "layout",
    "getElement"
  ];
  let i = ue(e, l), r, s, a, { $$slots: o = {}, $$scope: u } = e;
  const c = ln(o), { closest: f } = Dl, d = Me(Se());
  let { use: m = [] } = e, { class: _ = "" } = e, { stickyHeader: b = !1 } = e, { sortable: p = !1 } = e, { sort: w = null } = e, { sortDirection: I = "ascending" } = e, { sortAscendingAriaLabel: A = "sorted, ascending" } = e, { sortDescendingAriaLabel: g = "sorted, descending" } = e, { container$use: L = [] } = e, { container$class: E = "" } = e, { table$use: h = [] } = e, { table$class: S = "" } = e, G, T, y, U, H, q = {}, ve = { height: "auto", top: "initial" }, Ce = Pe("SMUI:addLayoutListener"), _e, j = !1, v = Pt(!1);
  ut(n, v, (D) => t(34, r = D));
  let N = Pt(w);
  ut(n, N, (D) => t(45, a = D));
  let me = Pt(I);
  ut(n, me, (D) => t(44, s = D)), Re("SMUI:checkbox:context", "data-table"), Re("SMUI:linear-progress:context", "data-table"), Re("SMUI:linear-progress:closed", v), Re("SMUI:data-table:sortable", p), Re("SMUI:data-table:sort", N), Re("SMUI:data-table:sortDirection", me), Re("SMUI:data-table:sortAscendingAriaLabel", A), Re("SMUI:data-table:sortDescendingAriaLabel", g), Ce && (_e = Ce(mt));
  let be;
  Ge(() => (t(7, T = new Na({
    addClass: Ve,
    removeClass: ze,
    getHeaderCellElements: () => {
      var D;
      return (D = U == null ? void 0 : U.cells.map((W) => W.element)) !== null && D !== void 0 ? D : [];
    },
    getHeaderCellCount: () => {
      var D;
      return (D = U == null ? void 0 : U.cells.length) !== null && D !== void 0 ? D : 0;
    },
    getAttributeByHeaderCellIndex: (D, W) => {
      var we;
      return (we = U == null ? void 0 : U.orderedCells[D].getAttr(W)) !== null && we !== void 0 ? we : null;
    },
    setAttributeByHeaderCellIndex: (D, W, we) => {
      U == null || U.orderedCells[D].addAttr(W, we);
    },
    setClassNameByHeaderCellIndex: (D, W) => {
      U == null || U.orderedCells[D].addClass(W);
    },
    removeClassNameByHeaderCellIndex: (D, W) => {
      U == null || U.orderedCells[D].removeClass(W);
    },
    notifySortAction: (D) => {
      t(26, w = D.columnId), t(27, I = D.sortValue), pe(We(), "SMUIDataTable:sorted", D, void 0, !0);
    },
    getTableContainerHeight: () => y.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const D = We().querySelector(".mdc-data-table__header-row");
      if (!D)
        throw new Error("MDCDataTable: Table header element not found.");
      return D.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (D) => {
      t(13, ve = D);
    },
    addClassAtRowIndex: (D, W) => {
      H == null || H.orderedRows[D].addClass(W);
    },
    getRowCount: () => {
      var D;
      return (D = H == null ? void 0 : H.rows.length) !== null && D !== void 0 ? D : 0;
    },
    getRowElements: () => {
      var D;
      return (D = H == null ? void 0 : H.rows.map((W) => W.element)) !== null && D !== void 0 ? D : [];
    },
    getRowIdAtIndex: (D) => {
      var W;
      return (W = H == null ? void 0 : H.orderedRows[D].rowId) !== null && W !== void 0 ? W : null;
    },
    getRowIndexByChildElement: (D) => {
      var W;
      return (W = H == null ? void 0 : H.orderedRows.map((we) => we.element).indexOf(f(D, ".mdc-data-table__row"))) !== null && W !== void 0 ? W : -1;
    },
    getSelectedRowCount: () => {
      var D;
      return (D = H == null ? void 0 : H.rows.filter((W) => W.selected).length) !== null && D !== void 0 ? D : 0;
    },
    isCheckboxAtRowIndexChecked: (D) => {
      const W = H == null ? void 0 : H.orderedRows[D].checkbox;
      return W ? W.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const D = U == null ? void 0 : U.checkbox;
      return D ? D.checked : !1;
    },
    isRowsSelectable: () => !!We().querySelector(".mdc-data-table__row-checkbox") || !!We().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (D) => {
      const W = H == null ? void 0 : H.orderedRows[D.rowIndex];
      W && pe(
        We(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: W.element,
          rowId: W.rowId,
          rowIndex: D.rowIndex,
          selected: D.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Je(!1), pe(We(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Je(!1), pe(We(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (D) => {
      pe(We(), "SMUIDataTable:rowClick", D, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (D, W) => {
      H == null || H.orderedRows[D].removeClass(W);
    },
    setAttributeAtRowIndex: (D, W, we) => {
      H == null || H.orderedRows[D].addAttr(W, we);
    },
    setHeaderRowCheckboxChecked: (D) => {
      const W = U == null ? void 0 : U.checkbox;
      W && (W.checked = D);
    },
    setHeaderRowCheckboxIndeterminate: Je,
    setRowCheckboxCheckedAtIndex: (D, W) => {
      const we = H == null ? void 0 : H.orderedRows[D].checkbox;
      we && (we.checked = W);
    },
    setSortStatusLabelByHeaderCellIndex: (D, W) => {
    }
    // Handled automatically.
  })), T.init(), T.layout(), t(14, j = !0), () => {
    T.destroy();
  })), yt(() => {
    _e && _e();
  });
  function Oe(D) {
    t(10, U = D.detail);
  }
  function Ne(D) {
    t(11, H = D.detail);
  }
  function he(D) {
    T && T.handleRowCheckboxChange(D);
  }
  function Ve(D) {
    q[D] || t(12, q[D] = !0, q);
  }
  function ze(D) {
    (!(D in q) || q[D]) && t(12, q[D] = !1, q);
  }
  function Je(D) {
    const W = U == null ? void 0 : U.checkbox;
    W && (W.indeterminate = D);
  }
  function Qe(D) {
    if (!T || !D.detail.target)
      return;
    const W = f(D.detail.target, ".mdc-data-table__header-cell--with-sort");
    W && gt(W);
  }
  function Lt(D) {
    if (!T || !D.detail.target)
      return;
    const W = f(D.detail.target, ".mdc-data-table__row");
    W && T && T.handleRowClick({ rowId: D.detail.rowId, row: W });
  }
  function gt(D) {
    var W, we;
    const kt = (W = U == null ? void 0 : U.orderedCells) !== null && W !== void 0 ? W : [], _t = kt.map((wt) => wt.element).indexOf(D);
    if (_t === -1)
      return;
    const St = (we = kt[_t].columnId) !== null && we !== void 0 ? we : null;
    T.handleSortAction({ columnId: St, columnIndex: _t, headerCell: D });
  }
  function mt() {
    return T.layout();
  }
  function We() {
    return G;
  }
  function xe(D) {
    x[D ? "unshift" : "push"](() => {
      y = D, t(9, y);
    });
  }
  function $e(D) {
    x[D ? "unshift" : "push"](() => {
      G = D, t(8, G);
    });
  }
  const it = () => T && j && T.layout(), et = () => t(10, U = void 0), pt = () => t(11, H = void 0), jt = () => T && T.handleHeaderRowCheckboxChange();
  return n.$$set = (D) => {
    e = V(V({}, e), De(D)), t(25, i = ue(e, l)), "use" in D && t(0, m = D.use), "class" in D && t(1, _ = D.class), "stickyHeader" in D && t(2, b = D.stickyHeader), "sortable" in D && t(28, p = D.sortable), "sort" in D && t(26, w = D.sort), "sortDirection" in D && t(27, I = D.sortDirection), "sortAscendingAriaLabel" in D && t(29, A = D.sortAscendingAriaLabel), "sortDescendingAriaLabel" in D && t(30, g = D.sortDescendingAriaLabel), "container$use" in D && t(3, L = D.container$use), "container$class" in D && t(4, E = D.container$class), "table$use" in D && t(5, h = D.table$use), "table$class" in D && t(6, S = D.table$class), "$$scope" in D && t(35, u = D.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && xt(N, a = w, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && xt(me, s = I, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && T && be !== r && (t(33, be = r), r ? T.hideProgress() : T.showProgress());
  }, [
    m,
    _,
    b,
    L,
    E,
    h,
    S,
    T,
    G,
    y,
    U,
    H,
    q,
    ve,
    j,
    d,
    v,
    N,
    me,
    Oe,
    Ne,
    he,
    Qe,
    Lt,
    c,
    i,
    w,
    I,
    p,
    A,
    g,
    mt,
    We,
    be,
    r,
    u,
    o,
    xe,
    $e,
    it,
    et,
    pt,
    jt
  ];
}
class Za extends oe {
  constructor(e) {
    super(), se(
      this,
      e,
      qa,
      Wa,
      re,
      {
        use: 0,
        class: 1,
        stickyHeader: 2,
        sortable: 28,
        sort: 26,
        sortDirection: 27,
        sortAscendingAriaLabel: 29,
        sortDescendingAriaLabel: 30,
        container$use: 3,
        container$class: 4,
        table$use: 5,
        table$class: 6,
        layout: 31,
        getElement: 32
      },
      null,
      [-1, -1]
    );
  }
  get layout() {
    return this.$$.ctx[31];
  }
  get getElement() {
    return this.$$.ctx[32];
  }
}
function za(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), a = te(
    s,
    n,
    /*$$scope*/
    n[9],
    null
  );
  let o = [
    /*$$restProps*/
    n[7]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = V(u, o[c]);
  return {
    c() {
      e = F("thead"), a && a.c(), ee(e, u);
    },
    m(c, f) {
      O(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        z(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        z(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        z(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        z(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(c, [f]) {
      a && a.p && (!l || f & /*$$scope*/
      512) && le(
        a,
        s,
        c,
        /*$$scope*/
        c[9],
        l ? ne(
          s,
          /*$$scope*/
          c[9],
          f,
          null
        ) : ie(
          /*$$scope*/
          c[9]
        ),
        null
      ), ee(e, u = ae(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && ge(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (k(a, c), l = !0);
    },
    o(c) {
      R(a, c), l = !1;
    },
    d(c) {
      c && P(e), a && a.d(c), n[11](null), i = !1, de(r);
    }
  };
}
function Xa(n, e, t) {
  const l = ["use", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Me(Se());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Re("SMUI:data-table:row:header", !0), Ge(() => {
    const g = {
      get cells() {
        return f;
      },
      get orderedCells() {
        return p();
      },
      get checkbox() {
        return c;
      }
    };
    return pe(w(), "SMUIDataTableHeader:mount", g), () => {
      pe(w(), "SMUIDataTableHeader:unmount", g);
    };
  });
  function m(g) {
    t(2, c = g.detail);
  }
  function _(g) {
    f.push(g.detail), d.set(g.detail.element, g.detail), g.stopPropagation();
  }
  function b(g) {
    const L = f.indexOf(g.detail);
    L !== -1 && (f.splice(L, 1), f = f), d.delete(g.detail.element), g.stopPropagation();
  }
  function p() {
    return [...w().querySelectorAll(".mdc-data-table__header-cell")].map((g) => d.get(g)).filter((g) => g && g._smui_data_table_header_cell_accessor);
  }
  function w() {
    return u;
  }
  function I(g) {
    x[g ? "unshift" : "push"](() => {
      u = g, t(1, u);
    });
  }
  const A = () => t(2, c = void 0);
  return n.$$set = (g) => {
    e = V(V({}, e), De(g)), t(7, i = ue(e, l)), "use" in g && t(0, o = g.use), "$$scope" in g && t(9, s = g.$$scope);
  }, [
    o,
    u,
    c,
    a,
    m,
    _,
    b,
    i,
    w,
    s,
    r,
    I,
    A
  ];
}
class Ya extends oe {
  constructor(e) {
    super(), se(this, e, Xa, za, re, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Ka(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[9].default
  ), o = te(
    a,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__content": !0
      })
    },
    /*$$restProps*/
    n[6]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = V(c, u[f]);
  return {
    c() {
      e = F("tbody"), o && o.c(), ee(e, c);
    },
    m(f, d) {
      O(f, e, d), o && o.m(e, null), n[10](e), i = !0, r || (s = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        z(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        z(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      256) && le(
        o,
        a,
        f,
        /*$$scope*/
        f[8],
        i ? ne(
          a,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ie(
          /*$$scope*/
          f[8]
        ),
        null
      ), ee(e, c = ae(u, [
        (!i || d & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), l && ge(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (k(o, f), i = !0);
    },
    o(f) {
      R(o, f), i = !1;
    },
    d(f) {
      f && P(e), o && o.d(f), n[10](null), r = !1, de(s);
    }
  };
}
function Ja(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Me(Se());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Re("SMUI:data-table:row:header", !1), Ge(() => {
    const I = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return b();
      }
    };
    return pe(p(), "SMUIDataTableBody:mount", I), () => {
      pe(p(), "SMUIDataTableBody:unmount", I);
    };
  });
  function m(I) {
    f.push(I.detail), d.set(I.detail.element, I.detail), I.stopPropagation();
  }
  function _(I) {
    const A = f.indexOf(I.detail);
    A !== -1 && (f.splice(A, 1), f = f), d.delete(I.detail.element), I.stopPropagation();
  }
  function b() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((I) => d.get(I)).filter((I) => I && I._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function w(I) {
    x[I ? "unshift" : "push"](() => {
      c = I, t(2, c);
    });
  }
  return n.$$set = (I) => {
    e = V(V({}, e), De(I)), t(6, i = ue(e, l)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "$$scope" in I && t(8, s = I.$$scope);
  }, [
    o,
    u,
    c,
    a,
    m,
    _,
    i,
    p,
    s,
    r,
    w
  ];
}
class Qa extends oe {
  constructor(e) {
    super(), se(this, e, Ja, Ka, re, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function xa(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[15].default
  ), u = te(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__header-row": (
          /*header*/
          n[7]
        ),
        "mdc-data-table__row": !/*header*/
        n[7],
        "mdc-data-table__row--selected": !/*header*/
        n[7] && /*checkbox*/
        n[3] && /*checkbox*/
        n[3].checked,
        .../*internalClasses*/
        n[4]
      })
    },
    {
      "aria-selected": l = /*checkbox*/
      n[3] ? (
        /*checkbox*/
        n[3].checked ? "true" : "false"
      ) : void 0
    },
    /*internalAttrs*/
    n[5],
    /*$$restProps*/
    n[11]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = V(f, c[d]);
  return {
    c() {
      e = F("tr"), u && u.c(), ee(e, f);
    },
    m(d, m) {
      O(d, e, m), u && u.m(e, null), n[16](e), r = !0, s || (a = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        z(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        z(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        z(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], s = !0);
    },
    p(d, [m]) {
      u && u.p && (!r || m & /*$$scope*/
      16384) && le(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        r ? ne(
          o,
          /*$$scope*/
          d[14],
          m,
          null
        ) : ie(
          /*$$scope*/
          d[14]
        ),
        null
      ), ee(e, f = ae(c, [
        (!r || m & /*className, checkbox, internalClasses*/
        26 && t !== (t = Q({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__header-row": (
            /*header*/
            d[7]
          ),
          "mdc-data-table__row": !/*header*/
          d[7],
          "mdc-data-table__row--selected": !/*header*/
          d[7] && /*checkbox*/
          d[3] && /*checkbox*/
          d[3].checked,
          .../*internalClasses*/
          d[4]
        }))) && { class: t },
        (!r || m & /*checkbox*/
        8 && l !== (l = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": l },
        m & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        m & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), i && ge(i.update) && m & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (k(u, d), r = !0);
    },
    o(d) {
      R(u, d), r = !1;
    },
    d(d) {
      d && P(e), u && u.d(d), n[16](null), s = !1, de(a);
    }
  };
}
let $a = 0;
function es(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Me(Se());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + $a++ } = e, f, d, m = {}, _ = {}, b = Pe("SMUI:data-table:row:header");
  Ge(() => {
    const y = b ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return h();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
      },
      get selected() {
        var U;
        return (U = d && d.checked) !== null && U !== void 0 ? U : !1;
      },
      addClass: w,
      removeClass: I,
      getAttr: A,
      addAttr: g
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return h();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var U;
        return (U = d && d.checked) !== null && U !== void 0 ? U : !1;
      },
      addClass: w,
      removeClass: I,
      getAttr: A,
      addAttr: g
    };
    return pe(h(), "SMUIDataTableRow:mount", y), () => {
      pe(h(), "SMUIDataTableRow:unmount", y);
    };
  });
  function p(y) {
    t(3, d = y.detail);
  }
  function w(y) {
    m[y] || t(4, m[y] = !0, m);
  }
  function I(y) {
    (!(y in m) || m[y]) && t(4, m[y] = !1, m);
  }
  function A(y) {
    var U;
    return y in _ ? (U = _[y]) !== null && U !== void 0 ? U : null : h().getAttribute(y);
  }
  function g(y, U) {
    _[y] !== U && t(5, _[y] = U, _);
  }
  function L(y) {
    pe(h(), "SMUIDataTableHeader:click", y);
  }
  function E(y) {
    pe(h(), "SMUIDataTableRow:click", { rowId: c, target: y.target });
  }
  function h() {
    return f;
  }
  function S(y) {
    x[y ? "unshift" : "push"](() => {
      f = y, t(2, f);
    });
  }
  const G = (y) => b ? L(y) : E(y), T = () => t(3, d = void 0);
  return n.$$set = (y) => {
    e = V(V({}, e), De(y)), t(11, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "rowId" in y && t(12, c = y.rowId), "$$scope" in y && t(14, s = y.$$scope);
  }, [
    o,
    u,
    f,
    d,
    m,
    _,
    a,
    b,
    p,
    L,
    E,
    i,
    c,
    h,
    s,
    r,
    S,
    G,
    T
  ];
}
class Ml extends oe {
  constructor(e) {
    super(), se(this, e, es, xa, re, {
      use: 0,
      class: 1,
      rowId: 12,
      getElement: 13
    });
  }
  get getElement() {
    return this.$$.ctx[13];
  }
}
function ts(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[22].default
  ), o = te(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__cell": !0,
        "mdc-data-table__cell--numeric": (
          /*numeric*/
          n[2]
        ),
        "mdc-data-table__cell--checkbox": (
          /*checkbox*/
          n[3]
        ),
        .../*internalClasses*/
        n[7]
      })
    },
    /*internalAttrs*/
    n[8],
    /*$$restProps*/
    n[19]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = V(c, u[f]);
  return {
    c() {
      e = F("td"), o && o.c(), ee(e, c);
    },
    m(f, d) {
      O(f, e, d), o && o.m(e, null), n[25](e), i = !0, r || (s = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        z(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], r = !0);
    },
    p(f, d) {
      o && o.p && (!i || d & /*$$scope*/
      2097152) && le(
        o,
        a,
        f,
        /*$$scope*/
        f[21],
        i ? ne(
          a,
          /*$$scope*/
          f[21],
          d,
          null
        ) : ie(
          /*$$scope*/
          f[21]
        ),
        null
      ), ee(e, c = ae(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = Q({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__cell": !0,
          "mdc-data-table__cell--numeric": (
            /*numeric*/
            f[2]
          ),
          "mdc-data-table__cell--checkbox": (
            /*checkbox*/
            f[3]
          ),
          .../*internalClasses*/
          f[7]
        }))) && { class: t },
        d & /*internalAttrs*/
        256 && /*internalAttrs*/
        f[8],
        d & /*$$restProps*/
        524288 && /*$$restProps*/
        f[19]
      ])), l && ge(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (k(o, f), i = !0);
    },
    o(f) {
      R(o, f), i = !1;
    },
    d(f) {
      f && P(e), o && o.d(f), n[25](null), r = !1, de(s);
    }
  };
}
function ns(n) {
  let e, t, l, i, r, s, a, o, u;
  const c = [is, ls], f = [];
  function d(b, p) {
    return (
      /*sortable*/
      b[5] ? 0 : 1
    );
  }
  t = d(n), l = f[t] = c[t](n);
  let m = [
    {
      class: i = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__header-cell": !0,
        "mdc-data-table__header-cell--numeric": (
          /*numeric*/
          n[2]
        ),
        "mdc-data-table__header-cell--checkbox": (
          /*checkbox*/
          n[3]
        ),
        "mdc-data-table__header-cell--with-sort": (
          /*sortable*/
          n[5]
        ),
        "mdc-data-table__header-cell--sorted": (
          /*sortable*/
          n[5] && /*$sort*/
          n[9] === /*columnId*/
          n[4]
        ),
        .../*internalClasses*/
        n[7]
      })
    },
    { role: "columnheader" },
    { scope: "col" },
    { "data-column-id": (
      /*columnId*/
      n[4]
    ) },
    {
      "aria-sort": r = /*sortable*/
      n[5] ? (
        /*$sort*/
        n[9] === /*columnId*/
        n[4] ? (
          /*$sortDirection*/
          n[10]
        ) : "none"
      ) : void 0
    },
    /*internalAttrs*/
    n[8],
    /*$$restProps*/
    n[19]
  ], _ = {};
  for (let b = 0; b < m.length; b += 1)
    _ = V(_, m[b]);
  return {
    c() {
      e = F("th"), l.c(), ee(e, _);
    },
    m(b, p) {
      O(b, e, p), f[t].m(e, null), n[23](e), a = !0, o || (u = [
        J(s = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        z(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(b, p) {
      let w = t;
      t = d(b), t === w ? f[t].p(b, p) : (ce(), R(f[w], 1, 1, () => {
        f[w] = null;
      }), fe(), l = f[t], l ? l.p(b, p) : (l = f[t] = c[t](b), l.c()), k(l, 1), l.m(e, null)), ee(e, _ = ae(m, [
        (!a || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = Q({
          [
            /*className*/
            b[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            b[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            b[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            b[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            b[5] && /*$sort*/
            b[9] === /*columnId*/
            b[4]
          ),
          .../*internalClasses*/
          b[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!a || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          b[4]
        ) },
        (!a || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        b[5] ? (
          /*$sort*/
          b[9] === /*columnId*/
          b[4] ? (
            /*$sortDirection*/
            b[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        b[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        b[19]
      ])), s && ge(s.update) && p & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      a || (k(l), a = !0);
    },
    o(b) {
      R(l), a = !1;
    },
    d(b) {
      b && P(e), f[t].d(), n[23](null), o = !1, de(u);
    }
  };
}
function ls(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r & /*$$scope*/
      2097152) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? ne(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : ie(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function is(n) {
  let e, t, l, i = (
    /*$sort*/
    (n[9] === /*columnId*/
    n[4] ? (
      /*$sortDirection*/
      n[10] === "ascending" ? (
        /*sortAscendingAriaLabel*/
        n[15]
      ) : (
        /*sortDescendingAriaLabel*/
        n[16]
      )
    ) : "") + ""
  ), r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = te(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = F("div"), u && u.c(), t = Z(), l = F("div"), r = Le(i), M(l, "class", "mdc-data-table__sort-status-label"), M(l, "aria-hidden", "true"), M(l, "id", s = /*columnId*/
      n[4] + "-status-label"), M(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      O(c, e, f), u && u.m(e, null), B(e, t), B(e, l), B(l, r), a = !0;
    },
    p(c, f) {
      u && u.p && (!a || f & /*$$scope*/
      2097152) && le(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        a ? ne(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : ie(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!a || f & /*$sort, columnId, $sortDirection*/
      1552) && i !== (i = /*$sort*/
      (c[9] === /*columnId*/
      c[4] ? (
        /*$sortDirection*/
        c[10] === "ascending" ? (
          /*sortAscendingAriaLabel*/
          c[15]
        ) : (
          /*sortDescendingAriaLabel*/
          c[16]
        )
      ) : "") + "") && Fe(r, i), (!a || f & /*columnId*/
      16 && s !== (s = /*columnId*/
      c[4] + "-status-label")) && M(l, "id", s);
    },
    i(c) {
      a || (k(u, c), a = !0);
    },
    o(c) {
      R(u, c), a = !1;
    },
    d(c) {
      c && P(e), u && u.d(c);
    }
  };
}
function rs(n) {
  let e, t, l, i;
  const r = [ns, ts], s = [];
  function a(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ke();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      R(t), i = !1;
    },
    d(o) {
      o && P(l), s[e].d(o);
    }
  };
}
let as = 0;
function ss(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ue(e, l), r, s, { $$slots: a = {}, $$scope: o } = e;
  const u = Me(Se());
  let c = Pe("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: m = !1 } = e, { checkbox: _ = !1 } = e, { columnId: b = c ? "SMUI-data-table-column-" + as++ : "SMUI-data-table-unused" } = e, { sortable: p = Pe("SMUI:data-table:sortable") } = e, w, I = {}, A = {}, g = Pe("SMUI:data-table:sort");
  ut(n, g, (v) => t(9, r = v));
  let L = Pe("SMUI:data-table:sortDirection");
  ut(n, L, (v) => t(10, s = v));
  let E = Pe("SMUI:data-table:sortAscendingAriaLabel"), h = Pe("SMUI:data-table:sortDescendingAriaLabel");
  p && (Re("SMUI:label:context", "data-table:sortable-header-cell"), Re("SMUI:icon-button:context", "data-table:sortable-header-cell"), Re("SMUI:icon-button:aria-describedby", b + "-status-label")), Ge(() => {
    const v = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return q();
      },
      get columnId() {
        return b;
      },
      addClass: S,
      removeClass: G,
      getAttr: T,
      addAttr: y
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return q();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: G,
      getAttr: T,
      addAttr: y
    };
    return pe(q(), "SMUIDataTableCell:mount", v), () => {
      pe(q(), "SMUIDataTableCell:unmount", v);
    };
  });
  function S(v) {
    I[v] || t(7, I[v] = !0, I);
  }
  function G(v) {
    (!(v in I) || I[v]) && t(7, I[v] = !1, I);
  }
  function T(v) {
    var N;
    return v in A ? (N = A[v]) !== null && N !== void 0 ? N : null : q().getAttribute(v);
  }
  function y(v, N) {
    A[v] !== N && t(8, A[v] = N, A);
  }
  function U(v) {
    pe(q(), "SMUIDataTableHeaderCheckbox:change", v);
  }
  function H(v) {
    pe(q(), "SMUIDataTableBodyCheckbox:change", v);
  }
  function q() {
    return w;
  }
  function ve(v) {
    x[v ? "unshift" : "push"](() => {
      w = v, t(6, w);
    });
  }
  const Ce = (v) => _ && U(v);
  function _e(v) {
    x[v ? "unshift" : "push"](() => {
      w = v, t(6, w);
    });
  }
  const j = (v) => _ && H(v);
  return n.$$set = (v) => {
    e = V(V({}, e), De(v)), t(19, i = ue(e, l)), "use" in v && t(0, f = v.use), "class" in v && t(1, d = v.class), "numeric" in v && t(2, m = v.numeric), "checkbox" in v && t(3, _ = v.checkbox), "columnId" in v && t(4, b = v.columnId), "sortable" in v && t(5, p = v.sortable), "$$scope" in v && t(21, o = v.$$scope);
  }, [
    f,
    d,
    m,
    _,
    b,
    p,
    w,
    I,
    A,
    r,
    s,
    u,
    c,
    g,
    L,
    E,
    h,
    U,
    H,
    i,
    q,
    o,
    a,
    ve,
    Ce,
    _e,
    j
  ];
}
class Vt extends oe {
  constructor(e) {
    super(), se(this, e, ss, rs, re, {
      use: 0,
      class: 1,
      numeric: 2,
      checkbox: 3,
      columnId: 4,
      sortable: 5,
      getElement: 20
    });
  }
  get getElement() {
    return this.$$.ctx[20];
  }
}
const { Boolean: Pl } = vi;
function nl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const os = (n) => ({ item: n & /*items*/
1 }), ll = (n) => ({ item: (
  /*item*/
  n[17]
) });
function il(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function rl(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function us(n) {
  let e, t;
  return e = new Za({
    props: {
      style: "width: 100%;",
      $$slots: { default: [Cs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns, headerBg*/
      17379 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function cs(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = Le(
        /*emptyText*/
        n[4]
      ), M(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && Fe(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: $,
    o: $,
    d(l) {
      l && P(e);
    }
  };
}
function fs(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = Le(
        /*errorMsg*/
        n[3]
      ), M(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      O(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && Fe(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: $,
    o: $,
    d(l) {
      l && P(e);
    }
  };
}
function ds(n) {
  let e;
  return {
    c() {
      e = F("p"), e.textContent = "Loading…", M(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      O(t, e, l);
    },
    p: $,
    i: $,
    o: $,
    d(t) {
      t && P(e);
    }
  };
}
function hs(n) {
  let e = (
    /*col*/
    n[20].header + ""
  ), t;
  return {
    c() {
      t = Le(e);
    },
    m(l, i) {
      O(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[20].header + "") && Fe(t, e);
    },
    d(l) {
      l && P(t);
    }
  };
}
function al(n) {
  let e, t;
  return e = new Vt({
    props: {
      header: !0,
      style: [
        /*col*/
        n[20].width ? `width:${/*col*/
        n[20].width}` : "",
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : ""
      ].filter(Boolean).join(";"),
      $$slots: { default: [hs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*columns, headerBg*/
      66 && (r.style = [
        /*col*/
        l[20].width ? `width:${/*col*/
        l[20].width}` : "",
        /*headerBg*/
        l[6] ? `background-color:${/*headerBg*/
        l[6]}` : ""
      ].filter(Boolean).join(";")), i & /*$$scope, columns*/
      16386 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function sl(n) {
  let e, t;
  return e = new Vt({
    props: {
      header: !0,
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*headerBg*/
      64 && (r.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function gs(n) {
  let e, t, l, i = je(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = al(rl(n, i, o));
  const s = (o) => R(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && sl(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = Z(), a && a.c(), t = ke();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      O(o, e, u), a && a.m(o, u), O(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = je(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = rl(o, i, c);
          r[c] ? (r[c].p(f, u), k(r[c], 1)) : (r[c] = al(f), r[c].c(), k(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ce(), c = i.length; c < r.length; c += 1)
          s(c);
        fe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && k(a, 1)) : (a = sl(o), a.c(), k(a, 1), a.m(t.parentNode, t)) : a && (ce(), R(a, 1, 1, () => {
        a = null;
      }), fe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          k(r[u]);
        k(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Pl);
      for (let u = 0; u < r.length; u += 1)
        R(r[u]);
      R(a), l = !1;
    },
    d(o) {
      o && (P(e), P(t)), At(r, o), a && a.d(o);
    }
  };
}
function ms(n) {
  let e, t;
  return e = new Ml({
    props: {
      $$slots: { default: [gs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function ps(n) {
  var l;
  let e = (
    /*item*/
    (((l = n[17]) == null ? void 0 : l[
      /*col*/
      n[20].key
    ]) ?? "") + ""
  ), t;
  return {
    c() {
      t = Le(e);
    },
    m(i, r) {
      O(i, t, r);
    },
    p(i, r) {
      var s;
      r & /*items, columns*/
      3 && e !== (e = /*item*/
      (((s = i[17]) == null ? void 0 : s[
        /*col*/
        i[20].key
      ]) ?? "") + "") && Fe(t, e);
    },
    d(i) {
      i && P(t);
    }
  };
}
function ol(n) {
  let e, t;
  return e = new Vt({
    props: {
      $$slots: { default: [ps] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, columns*/
      16387 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function ul(n) {
  let e, t;
  return e = new Vt({
    props: {
      numeric: !0,
      $$slots: { default: [_s] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items*/
      16385 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function _s(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[14],
    ll
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r & /*$$scope, items*/
      16385) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? ne(
          t,
          /*$$scope*/
          i[14],
          r,
          os
        ) : ie(
          /*$$scope*/
          i[14]
        ),
        ll
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function bs(n) {
  let e, t, l, i = je(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = ol(il(n, i, o));
  const s = (o) => R(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && ul(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = Z(), a && a.c(), t = Z();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      O(o, e, u), a && a.m(o, u), O(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = je(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = il(o, i, c);
          r[c] ? (r[c].p(f, u), k(r[c], 1)) : (r[c] = ol(f), r[c].c(), k(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ce(), c = i.length; c < r.length; c += 1)
          s(c);
        fe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && k(a, 1)) : (a = ul(o), a.c(), k(a, 1), a.m(t.parentNode, t)) : a && (ce(), R(a, 1, 1, () => {
        a = null;
      }), fe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          k(r[u]);
        k(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Pl);
      for (let u = 0; u < r.length; u += 1)
        R(r[u]);
      R(a), l = !1;
    },
    d(o) {
      o && (P(e), P(t)), At(r, o), a && a.d(o);
    }
  };
}
function cl(n, e) {
  let t, l, i;
  function r() {
    return (
      /*mouseenter_handler*/
      e[12](
        /*item*/
        e[17],
        /*i*/
        e[19]
      )
    );
  }
  return l = new Ml({
    props: {
      style: [
        /*rowBg*/
        e[7] ? `background-color:${/*rowBg*/
        e[7]}` : "",
        /*hoveredRow*/
        e[8] === /*getRowId*/
        e[5](
          /*item*/
          e[17],
          /*i*/
          e[19]
        ) ? "background-color:#D9D800" : ""
      ].filter(Boolean).join(";"),
      $$slots: { default: [bs] },
      $$scope: { ctx: e }
    }
  }), l.$on("mouseenter", r), l.$on(
    "mouseleave",
    /*mouseleave_handler*/
    e[13]
  ), {
    key: n,
    first: null,
    c() {
      t = ke(), K(l.$$.fragment), this.first = t;
    },
    m(s, a) {
      O(s, t, a), X(l, s, a), i = !0;
    },
    p(s, a) {
      e = s;
      const o = {};
      a & /*rowBg, hoveredRow, getRowId, items*/
      417 && (o.style = [
        /*rowBg*/
        e[7] ? `background-color:${/*rowBg*/
        e[7]}` : "",
        /*hoveredRow*/
        e[8] === /*getRowId*/
        e[5](
          /*item*/
          e[17],
          /*i*/
          e[19]
        ) ? "background-color:#D9D800" : ""
      ].filter(Boolean).join(";")), a & /*$$scope, items, slotHasActions, columns*/
      16899 && (o.$$scope = { dirty: a, ctx: e }), l.$set(o);
    },
    i(s) {
      i || (k(l.$$.fragment, s), i = !0);
    },
    o(s) {
      R(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), Y(l, s);
    }
  };
}
function vs(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = je(
    /*items*/
    n[0]
  );
  const s = (a) => (
    /*getRowId*/
    a[5](
      /*item*/
      a[17],
      /*i*/
      a[19]
    )
  );
  for (let a = 0; a < r.length; a += 1) {
    let o = nl(n, r, a), u = s(o);
    t.set(u, e[a] = cl(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      l = ke();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      O(a, l, o), i = !0;
    },
    p(a, o) {
      o & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = je(
        /*items*/
        a[0]
      ), ce(), e = Ri(e, o, s, 1, a, r, t, l.parentNode, Ei, cl, l, nl), fe());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < r.length; o += 1)
          k(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        R(e[o]);
      i = !1;
    },
    d(a) {
      a && P(l);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function Cs(n) {
  let e, t, l, i;
  return e = new Ya({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [ms] },
      $$scope: { ctx: n }
    }
  }), l = new Qa({
    props: {
      $$slots: { default: [vs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment), t = Z(), K(l.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), O(r, t, s), X(l, r, s), i = !0;
    },
    p(r, s) {
      const a = {};
      s & /*headerBg*/
      64 && (a.style = /*headerBg*/
      r[6] ? `background-color:${/*headerBg*/
      r[6]}` : void 0), s & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
      const o = {};
      s & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns*/
      17315 && (o.$$scope = { dirty: s, ctx: r }), l.$set(o);
    },
    i(r) {
      i || (k(e.$$.fragment, r), k(l.$$.fragment, r), i = !0);
    },
    o(r) {
      R(e.$$.fragment, r), R(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && P(t), Y(e, r), Y(l, r);
    }
  };
}
function Is(n) {
  let e, t, l, i;
  const r = [ds, fs, cs, us], s = [];
  function a(o, u) {
    return (
      /*loading*/
      o[2] ? 0 : (
        /*errorMsg*/
        o[3] ? 1 : !/*items*/
        o[0] || /*items*/
        o[0].length === 0 ? 2 : 3
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ke();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), R(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      R(t), i = !1;
    },
    d(o) {
      o && P(l), s[e].d(o);
    }
  };
}
function As(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = ln(i);
  let { items: a = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (g, L) => {
    var E, h;
    return (h = g && ((E = g.id) !== null && E !== void 0 ? E : g.key)) !== null && h !== void 0 ? h : L;
  } } = e, { headerBg: m = null } = e, { rowBg: _ = null } = e, b = null;
  const p = s;
  let { hasActions: w = !1 } = e;
  const I = (g, L) => t(8, b = d(g, L)), A = () => t(8, b = null);
  return n.$$set = (g) => {
    "items" in g && t(0, a = g.items), "columns" in g && t(1, o = g.columns), "loading" in g && t(2, u = g.loading), "errorMsg" in g && t(3, c = g.errorMsg), "emptyText" in g && t(4, f = g.emptyText), "getRowId" in g && t(5, d = g.getRowId), "headerBg" in g && t(6, m = g.headerBg), "rowBg" in g && t(7, _ = g.rowBg), "hasActions" in g && t(10, w = g.hasActions), "$$scope" in g && t(14, r = g.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = w || !!(p != null && p.actions));
  }, [
    a,
    o,
    u,
    c,
    f,
    d,
    m,
    _,
    b,
    l,
    w,
    i,
    I,
    A,
    r
  ];
}
class ys extends oe {
  constructor(e) {
    super(), se(this, e, As, Is, re, {
      items: 0,
      columns: 1,
      loading: 2,
      errorMsg: 3,
      emptyText: 4,
      getRowId: 5,
      headerBg: 6,
      rowBg: 7,
      hasActions: 10
    });
  }
}
function fl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function dl(n) {
  let e, t = (
    /*crumb*/
    n[5].secondaryLabel + ""
  ), l;
  return {
    c() {
      e = F("span"), l = Le(t), M(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      O(i, e, r), B(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && Fe(l, t);
    },
    d(i) {
      i && P(e);
    }
  };
}
function hl(n) {
  let e;
  return {
    c() {
      e = F("span"), e.textContent = "chevron_right", M(e, "class", "material-icons separator svelte-1ngm2be");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function gl(n) {
  let e, t, l, i = (
    /*crumb*/
    n[5].label + ""
  ), r, s, a, o, u, c, f, d, m = (
    /*crumb*/
    n[5].secondaryLabel && dl(n)
  );
  function _() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7]
      )
    );
  }
  let b = (
    /*i*/
    n[7] < /*breadcrumbs*/
    n[0].length - 1 && hl()
  );
  return {
    c() {
      e = F("div"), t = F("span"), l = F("span"), r = Le(i), s = Z(), m && m.c(), u = Z(), b && b.c(), c = Z(), M(l, "class", "label svelte-1ngm2be"), M(t, "class", a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), M(t, "aria-current", o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), M(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(p, w) {
      O(p, e, w), B(e, t), B(t, l), B(l, r), B(t, s), m && m.m(t, null), B(e, u), b && b.m(e, null), B(e, c), f || (d = z(t, "click", _), f = !0);
    },
    p(p, w) {
      n = p, w & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && Fe(r, i), /*crumb*/
      n[5].secondaryLabel ? m ? m.p(n, w) : (m = dl(n), m.c(), m.m(t, null)) : m && (m.d(1), m = null), w & /*breadcrumbs, activeIndex*/
      3 && a !== (a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && M(t, "class", a), w & /*activeIndex*/
      2 && o !== (o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && M(t, "aria-current", o), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? b || (b = hl(), b.c(), b.m(e, c)) : b && (b.d(1), b = null);
    },
    d(p) {
      p && P(e), m && m.d(), b && b.d(), f = !1, d();
    }
  };
}
function Ls(n) {
  let e, t = je(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = gl(fl(n, t, i));
  return {
    c() {
      e = F("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      M(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      O(i, e, r);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = je(
          /*breadcrumbs*/
          i[0]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = fl(i, t, s);
          l[s] ? l[s].p(a, r) : (l[s] = gl(a), l[s].c(), l[s].m(e, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    i: $,
    o: $,
    d(i) {
      i && P(e), At(l, i);
    }
  };
}
function ks(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = Nt(), s = (o) => {
    l[o].enabled && o !== i && r("click", { index: o });
  }, a = (o) => s(o);
  return n.$$set = (o) => {
    "breadcrumbs" in o && t(0, l = o.breadcrumbs), "activeIndex" in o && t(1, i = o.activeIndex);
  }, [l, i, s, a];
}
class Ss extends oe {
  constructor(e) {
    super(), se(this, e, ks, Ls, re, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const ws = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
ws.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Es(n) {
  let e;
  return {
    c() {
      e = Le("CONTINUE");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function Rs(n) {
  let e;
  return {
    c() {
      e = Le("ADD NEW PROCESS");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function Hs(n) {
  let e, t, l, i, r, s, a, o;
  t = new Aa({
    props: {
      svgStyles: "fill: #002B37; width: 100%; height: 100%;"
    }
  });
  function u() {
    return (
      /*click_handler_1*/
      n[13](
        /*item*/
        n[16]
      )
    );
  }
  r = new Ta({
    props: {
      svgStyles: "fill: #002B37; width: 100%; height: 100%;"
    }
  });
  function c() {
    return (
      /*click_handler_2*/
      n[14](
        /*item*/
        n[16]
      )
    );
  }
  return {
    c() {
      e = F("button"), K(t.$$.fragment), l = Z(), i = F("button"), K(r.$$.fragment), M(e, "type", "button"), M(e, "class", "icon svelte-wxofq2"), M(e, "aria-label", "View process"), M(i, "type", "button"), M(i, "class", "icon svelte-wxofq2"), M(i, "aria-label", "Start process");
    },
    m(f, d) {
      O(f, e, d), X(t, e, null), O(f, l, d), O(f, i, d), X(r, i, null), s = !0, a || (o = [
        z(e, "click", u),
        z(i, "click", c)
      ], a = !0);
    },
    p(f, d) {
      n = f;
    },
    i(f) {
      s || (k(t.$$.fragment, f), k(r.$$.fragment, f), s = !0);
    },
    o(f) {
      R(t.$$.fragment, f), R(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (P(e), P(l), P(i)), Y(t), Y(r), a = !1, de(o);
    }
  };
}
function Ds(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, m, _, b, p, w;
  i = new Ua({}), o = new Gt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [Es] },
      $$scope: { ctx: n }
    }
  }), o.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function I(g) {
    n[12](g);
  }
  let A = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (A.value = /*searchQuery*/
    n[2]), f = new ha({ props: A }), x.push(() => Ye(f, "value", I)), _ = new Gt({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [Rs] },
        $$scope: { ctx: n }
      }
    }), _.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), p = new ys({
      props: {
        items: (
          /*filteredRows*/
          n[3]
        ),
        columns: (
          /*columns*/
          n[6]
        ),
        loading: (
          /*loading*/
          n[0]
        ),
        errorMsg: (
          /*errorMsg*/
          n[1]
        ),
        emptyText: "No processes available.",
        hasActions: !0,
        headerBg: "#DAE3E6",
        rowBg: "#ffffff",
        $$slots: {
          actions: [
            Hs,
            ({ item: g }) => ({ 16: g }),
            ({ item: g }) => g ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = F("div"), t = F("div"), l = F("div"), K(i.$$.fragment), r = Z(), s = F("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, a = Z(), K(o.$$.fragment), u = Z(), c = F("div"), K(f.$$.fragment), m = Z(), K(_.$$.fragment), b = Z(), K(p.$$.fragment), M(s, "class", "svelte-wxofq2"), M(l, "class", "process-banner__info svelte-wxofq2"), M(t, "class", "process-banner svelte-wxofq2"), M(c, "class", "process-toolbar svelte-wxofq2"), M(e, "class", "processes svelte-wxofq2");
      },
      m(g, L) {
        O(g, e, L), B(e, t), B(t, l), X(i, l, null), B(l, r), B(l, s), B(t, a), X(o, t, null), B(e, u), B(e, c), X(f, c, null), B(c, m), X(_, c, null), B(e, b), X(p, e, null), w = !0;
      },
      p(g, [L]) {
        const E = {};
        L & /*$$scope*/
        131072 && (E.$$scope = { dirty: L, ctx: g }), o.$set(E);
        const h = {};
        !d && L & /*searchQuery*/
        4 && (d = !0, h.value = /*searchQuery*/
        g[2], Xe(() => d = !1)), f.$set(h);
        const S = {};
        L & /*$$scope*/
        131072 && (S.$$scope = { dirty: L, ctx: g }), _.$set(S);
        const G = {};
        L & /*filteredRows*/
        8 && (G.items = /*filteredRows*/
        g[3]), L & /*loading*/
        1 && (G.loading = /*loading*/
        g[0]), L & /*errorMsg*/
        2 && (G.errorMsg = /*errorMsg*/
        g[1]), L & /*$$scope, item*/
        196608 && (G.$$scope = { dirty: L, ctx: g }), p.$set(G);
      },
      i(g) {
        w || (k(i.$$.fragment, g), k(o.$$.fragment, g), k(f.$$.fragment, g), k(_.$$.fragment, g), k(p.$$.fragment, g), w = !0);
      },
      o(g) {
        R(i.$$.fragment, g), R(o.$$.fragment, g), R(f.$$.fragment, g), R(_.$$.fragment, g), R(p.$$.fragment, g), w = !1;
      },
      d(g) {
        g && P(e), Y(i), Y(o), Y(f), Y(_), Y(p);
      }
    }
  );
}
function Ts(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: a = !1 } = e, { errorMsg: o = "" } = e;
  const u = Nt(), c = (A) => u("start", A), f = (A) => u("view", A);
  let d = "";
  const m = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], _ = () => {
    console.log("Add new process clicked");
  }, b = () => console.log("Continue Process");
  function p(A) {
    d = A, t(2, d);
  }
  const w = (A) => f(A), I = (A) => c(A);
  return n.$$set = (A) => {
    "processes" in A && t(8, s = A.processes), "loading" in A && t(0, a = A.loading), "errorMsg" in A && t(1, o = A.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((A) => Object.assign(Object.assign({}, A), { displayName: A.name || A.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((A) => {
      var g;
      return ((g = A.displayName) !== null && g !== void 0 ? g : "").toLowerCase().includes(l);
    }) : i);
  }, [
    a,
    o,
    d,
    r,
    c,
    f,
    m,
    _,
    s,
    i,
    l,
    b,
    p,
    w,
    I
  ];
}
class Ms extends oe {
  constructor(e) {
    super(), se(this, e, Ts, Ds, re, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function ml(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l[10] = t, l;
}
function Ps(n) {
  let e;
  return {
    c() {
      e = Le("START PROCESS");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function Os(n) {
  let e;
  return {
    c() {
      e = Le("EDIT");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function pl(n) {
  let e, t, l, i, r, s = (
    /*plugin*/
    n[8].name + ""
  ), a, o;
  return {
    c() {
      e = F("div"), t = F("span"), t.textContent = `${/*i*/
      n[10] + 1}.`, l = Z(), i = F("div"), r = F("span"), a = Le(s), o = Z(), M(t, "class", "plugin__index svelte-1476d65"), M(r, "class", "plugin-item__name svelte-1476d65"), M(i, "class", "plugin-item svelte-1476d65"), M(e, "class", "plugin svelte-1476d65");
    },
    m(u, c) {
      O(u, e, c), B(e, t), B(e, l), B(e, i), B(i, r), B(r, a), B(e, o);
    },
    p(u, c) {
      c & /*plugins*/
      2 && s !== (s = /*plugin*/
      u[8].name + "") && Fe(a, s);
    },
    d(u) {
      u && P(e);
    }
  };
}
function Us(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, m;
  l = new Ss({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[2]
      ),
      activeIndex: 1
    }
  }), l.$on(
    "click",
    /*onCrumbClick*/
    n[3]
  ), r = new Gt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
      disabled: !/*proc*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [Ps] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*start*/
    n[4]
  ), f = new Gt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      "aria-label": "Edit process",
      $$slots: { default: [Os] },
      $$scope: { ctx: n }
    }
  });
  let _ = je(
    /*plugins*/
    n[1]
  ), b = [];
  for (let p = 0; p < _.length; p += 1)
    b[p] = pl(ml(n, _, p));
  return {
    c() {
      e = F("div"), t = F("div"), K(l.$$.fragment), i = Z(), K(r.$$.fragment), s = Z(), a = F("div"), o = F("div"), u = F("p"), u.textContent = "Process", c = Z(), K(f.$$.fragment), d = Z();
      for (let p = 0; p < b.length; p += 1)
        b[p].c();
      M(t, "class", "header svelte-1476d65"), M(u, "class", "svelte-1476d65"), M(o, "class", "plugins-list__header svelte-1476d65"), M(a, "class", "plugins-list svelte-1476d65"), M(e, "class", "page-content svelte-1476d65");
    },
    m(p, w) {
      O(p, e, w), B(e, t), X(l, t, null), B(t, i), X(r, t, null), B(e, s), B(e, a), B(a, o), B(o, u), B(o, c), X(f, o, null), B(a, d);
      for (let I = 0; I < b.length; I += 1)
        b[I] && b[I].m(a, null);
      m = !0;
    },
    p(p, [w]) {
      const I = {};
      w & /*breadcrumbs*/
      4 && (I.breadcrumbs = /*breadcrumbs*/
      p[2]), l.$set(I);
      const A = {};
      w & /*proc*/
      1 && (A.disabled = !/*proc*/
      p[0]), w & /*$$scope*/
      2048 && (A.$$scope = { dirty: w, ctx: p }), r.$set(A);
      const g = {};
      if (w & /*$$scope*/
      2048 && (g.$$scope = { dirty: w, ctx: p }), f.$set(g), w & /*plugins*/
      2) {
        _ = je(
          /*plugins*/
          p[1]
        );
        let L;
        for (L = 0; L < _.length; L += 1) {
          const E = ml(p, _, L);
          b[L] ? b[L].p(E, w) : (b[L] = pl(E), b[L].c(), b[L].m(a, null));
        }
        for (; L < b.length; L += 1)
          b[L].d(1);
        b.length = _.length;
      }
    },
    i(p) {
      m || (k(l.$$.fragment, p), k(r.$$.fragment, p), k(f.$$.fragment, p), m = !0);
    },
    o(p) {
      R(l.$$.fragment, p), R(r.$$.fragment, p), R(f.$$.fragment, p), m = !1;
    },
    d(p) {
      p && P(e), Y(l), Y(r), Y(f), At(b, p);
    }
  };
}
function Bs(n, e, t) {
  let l, i;
  var r, s;
  let { proc: a = null } = e;
  const o = Nt(), u = (f) => {
    f.detail.index === 0 && o("back");
  }, c = () => {
    a && o("start", a);
  };
  return n.$$set = (f) => {
    "proc" in f && t(0, a = f.proc);
  }, n.$$.update = () => {
    n.$$.dirty & /*proc, _a*/
    33 && t(2, l = [
      {
        label: "Engineering-Wizard",
        enabled: !0
      },
      {
        label: t(5, r = a == null ? void 0 : a.name) !== null && r !== void 0 ? r : "—",
        enabled: !1
      }
    ]), n.$$.dirty & /*proc, _b*/
    65 && t(1, i = t(6, s = a == null ? void 0 : a.plugins) !== null && s !== void 0 ? s : []);
  }, [a, i, l, u, c, r, s];
}
class Fs extends oe {
  constructor(e) {
    super(), se(this, e, Bs, Us, re, { proc: 0 });
  }
}
function _l(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Gs(n) {
  let e = (
    /*i*/
    n[20] + 1 + ""
  ), t;
  return {
    c() {
      t = Le(e);
    },
    m(l, i) {
      O(l, t, i);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && P(t);
    }
  };
}
function Ns(n) {
  let e, t, l, i;
  const r = [Ws, js, Vs], s = [];
  function a(o, u) {
    return (
      /*pluginStatus*/
      o[3][
        /*plugin*/
        o[18].id
      ] === "check" ? 0 : (
        /*pluginStatus*/
        o[3][
          /*plugin*/
          o[18].id
        ] === "error" ? 1 : 2
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ke();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = a(o), e !== c && (ce(), R(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t || (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      R(t), i = !1;
    },
    d(o) {
      o && P(l), s[e].d(o);
    }
  };
}
function Vs(n) {
  let e, t;
  return e = new Ea({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function js(n) {
  let e, t;
  return e = new Sa({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ws(n) {
  let e, t;
  return e = new La({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function qs(n) {
  let e, t, l, i, r, s, a;
  const o = [Ns, Gs], u = [];
  function c(d, m) {
    return m & /*visited, plugins, tagName*/
    52 && (t = null), t == null && (t = !!/*visited*/
    (d[5].includes(
      /*plugin*/
      d[18].id
    ) && /*plugin*/
    d[18].id !== /*tagName*/
    d[4])), t ? 0 : 1;
  }
  l = c(n, -1), i = u[l] = o[l](n);
  function f() {
    return (
      /*click_handler*/
      n[12](
        /*plugin*/
        n[18]
      )
    );
  }
  return {
    c() {
      e = F("button"), i.c(), M(e, "class", "svelte-1xq5awa"), rt(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), rt(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), rt(
        e,
        "visited",
        /*visited*/
        n[5].includes(
          /*plugin*/
          n[18].id
        ) && /*plugin*/
        n[18].id !== /*tagName*/
        n[4]
      );
    },
    m(d, m) {
      O(d, e, m), u[l].m(e, null), r = !0, s || (a = z(e, "click", f), s = !0);
    },
    p(d, m) {
      n = d;
      let _ = l;
      l = c(n, m), l === _ ? u[l].p(n, m) : (ce(), R(u[_], 1, 1, () => {
        u[_] = null;
      }), fe(), i = u[l], i ? i.p(n, m) : (i = u[l] = o[l](n), i.c()), k(i, 1), i.m(e, null)), (!r || m & /*visited, plugins*/
      36) && rt(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), (!r || m & /*plugins, tagName*/
      20) && rt(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), (!r || m & /*visited, plugins, tagName*/
      52) && rt(
        e,
        "visited",
        /*visited*/
        n[5].includes(
          /*plugin*/
          n[18].id
        ) && /*plugin*/
        n[18].id !== /*tagName*/
        n[4]
      );
    },
    i(d) {
      r || (k(i), r = !0);
    },
    o(d) {
      R(i), r = !1;
    },
    d(d) {
      d && P(e), u[l].d(), s = !1, a();
    }
  };
}
function bl(n) {
  let e;
  return {
    c() {
      e = F("div"), M(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function vl(n) {
  let e, t, l, i, r = (
    /*plugin*/
    n[18].name + ""
  ), s, a, o, u;
  t = new Ga({
    props: {
      text: (
        /*tooltipText*/
        n[6][
          /*plugin*/
          n[18].id
        ]
      ),
      position: "bottom",
      $$slots: { default: [qs] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && bl()
  );
  return {
    c() {
      e = F("div"), K(t.$$.fragment), l = Z(), i = F("p"), s = Le(r), a = Z(), c && c.c(), o = ke(), M(i, "class", "svelte-1xq5awa"), M(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(f, d) {
      O(f, e, d), X(t, e, null), B(e, l), B(e, i), B(i, s), O(f, a, d), c && c.m(f, d), O(f, o, d), u = !0;
    },
    p(f, d) {
      const m = {};
      d & /*tooltipText, plugins*/
      68 && (m.text = /*tooltipText*/
      f[6][
        /*plugin*/
        f[18].id
      ]), d & /*$$scope, visited, plugins, tagName, pluginStatus*/
      2097212 && (m.$$scope = { dirty: d, ctx: f }), t.$set(m), (!u || d & /*plugins*/
      4) && r !== (r = /*plugin*/
      f[18].name + "") && Fe(s, r), /*i*/
      f[20] < /*plugins*/
      f[2].length - 1 ? c || (c = bl(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (k(t.$$.fragment, f), u = !0);
    },
    o(f) {
      R(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (P(e), P(a), P(o)), Y(t), c && c.d(f);
    }
  };
}
function Cl(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && Qt(n)
  );
  return {
    c() {
      l && l.c(), t = ke();
    },
    m(i, r) {
      l && l.m(i, r), O(i, t, r);
    },
    p(i, r) {
      /*tagName*/
      i[4] ? e ? re(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = Qt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Qt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && P(t), l && l.d(i);
    }
  };
}
function Qt(n) {
  let e, t, l, i;
  return {
    c() {
      e = F(
        /*tagName*/
        n[4]
      ), Ct(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(r, s) {
      O(r, e, s), l || (i = J(t = Xs.call(null, e, {
        doc: (
          /*doc*/
          n[0]
        ),
        editCount: (
          /*editCount*/
          n[1]
        )
      })), l = !0);
    },
    p(r, s) {
      t && ge(t.update) && s & /*doc, editCount*/
      3 && t.update.call(null, {
        doc: (
          /*doc*/
          r[0]
        ),
        editCount: (
          /*editCount*/
          r[1]
        )
      });
    },
    d(r) {
      r && P(e), l = !1, i();
    }
  };
}
function Zs(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, m, _, b, p, w, I = je(
    /*plugins*/
    n[2]
  ), A = [];
  for (let E = 0; E < I.length; E += 1)
    A[E] = vl(_l(n, I, E));
  const g = (E) => R(A[E], 1, 1, () => {
    A[E] = null;
  });
  let L = (
    /*tagName*/
    n[4] && Cl(n)
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = F("button"), l.textContent = "exit", i = Z(), r = F("p"), r.textContent = "Plugin Flow", s = Z(), a = F("div");
      for (let E = 0; E < A.length; E += 1)
        A[E].c();
      o = Z(), u = F("div"), c = F("button"), c.textContent = "Back", f = Z(), d = F("button"), d.textContent = "Next", m = Z(), L && L.c(), _ = ke(), M(l, "class", "back-button svelte-1xq5awa"), M(r, "class", "plugin-flow-title svelte-1xq5awa"), Tt(t, "display", "flex"), Tt(t, "align-items", "center"), Tt(t, "gap", "0.5rem"), M(t, "class", "svelte-1xq5awa"), M(a, "class", "plugin-steps svelte-1xq5awa"), M(c, "class", "back-button svelte-1xq5awa"), M(d, "class", "next-button svelte-1xq5awa"), M(u, "class", "stepper-navigation svelte-1xq5awa"), M(e, "class", "stepper svelte-1xq5awa");
    },
    m(E, h) {
      O(E, e, h), B(e, t), B(t, l), B(t, i), B(t, r), B(e, s), B(e, a);
      for (let S = 0; S < A.length; S += 1)
        A[S] && A[S].m(a, null);
      B(e, o), B(e, u), B(u, c), B(u, f), B(u, d), O(E, m, h), L && L.m(E, h), O(E, _, h), b = !0, p || (w = [
        z(
          l,
          "click",
          /*exitWorkflow*/
          n[10]
        ),
        z(
          c,
          "click",
          /*previousPlugin*/
          n[9]
        ),
        z(
          d,
          "click",
          /*nextPlugin*/
          n[8]
        )
      ], p = !0);
    },
    p(E, [h]) {
      if (h & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      252) {
        I = je(
          /*plugins*/
          E[2]
        );
        let S;
        for (S = 0; S < I.length; S += 1) {
          const G = _l(E, I, S);
          A[S] ? (A[S].p(G, h), k(A[S], 1)) : (A[S] = vl(G), A[S].c(), k(A[S], 1), A[S].m(a, null));
        }
        for (ce(), S = I.length; S < A.length; S += 1)
          g(S);
        fe();
      }
      /*tagName*/
      E[4] ? L ? L.p(E, h) : (L = Cl(E), L.c(), L.m(_.parentNode, _)) : L && (L.d(1), L = null);
    },
    i(E) {
      if (!b) {
        for (let h = 0; h < I.length; h += 1)
          k(A[h]);
        b = !0;
      }
    },
    o(E) {
      A = A.filter(Boolean);
      for (let h = 0; h < A.length; h += 1)
        R(A[h]);
      b = !1;
    },
    d(E) {
      E && (P(e), P(m), P(_)), At(A, E), L && L.d(E), p = !1, de(w);
    }
  };
}
function zs() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Xs(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Ys(n, e, t) {
  let l, { doc: i } = e, { editCount: r = -1 } = e, { host: s } = e, { plugins: a = [] } = e, o = null, u = [];
  const c = ["check", "warning", "error"];
  let f = {};
  const d = Nt();
  function m(g) {
    var L;
    (L = zs()) === null || L === void 0 || L.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: g },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  function _(g) {
    return rn(this, void 0, void 0, function* () {
      const L = yield import(g.src);
      if (customElements.get(g.id) || customElements.define(g.id, L.default), t(4, o = g.id), !u.includes(g.id)) {
        t(5, u = [...u, g.id]);
        const E = a.findIndex((h) => h.id === g.id);
        t(3, f = Object.assign(Object.assign({}, f), {
          [g.id]: c[E % c.length]
        }));
      }
    });
  }
  function b() {
    w(1);
  }
  function p() {
    w(-1);
  }
  function w(g) {
    const L = a.findIndex((E) => E.id === o);
    _(a[(L + g + a.length) % a.length]);
  }
  Ge(() => {
    a.length && _(a[0]), m(!1);
  });
  function I() {
    m(!0), d("exit");
  }
  const A = (g) => _(g);
  return n.$$set = (g) => {
    "doc" in g && t(0, i = g.doc), "editCount" in g && t(1, r = g.editCount), "host" in g && t(11, s = g.host), "plugins" in g && t(2, a = g.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = a.reduce(
      (g, L) => {
        const E = f[L.id];
        return g[L.id] = E === "error" ? `Resolve errors in ${L.name}` : E === "warning" ? `Check warnings for ${L.name}` : `Load the ${L.name} editor`, g;
      },
      {}
    ));
  }, [
    i,
    r,
    a,
    f,
    o,
    u,
    l,
    _,
    b,
    p,
    I,
    s,
    A
  ];
}
class Ks extends oe {
  constructor(e) {
    super(), se(this, e, Ys, Zs, re, {
      doc: 0,
      editCount: 1,
      host: 11,
      plugins: 2
    });
  }
}
function Js(n) {
  let e, t;
  return e = new Ms({
    props: {
      processes: (
        /*processes*/
        n[3]
      ),
      loading: (
        /*loading*/
        n[6]
      ),
      errorMsg: (
        /*errorMsg*/
        n[7]
      )
    }
  }), e.$on(
    "view",
    /*onView*/
    n[8]
  ), e.$on(
    "start",
    /*onStart*/
    n[9]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*processes*/
      8 && (r.processes = /*processes*/
      l[3]), i & /*loading*/
      64 && (r.loading = /*loading*/
      l[6]), i & /*errorMsg*/
      128 && (r.errorMsg = /*errorMsg*/
      l[7]), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Qs(n) {
  let e, t;
  return e = new Fs({ props: { proc: (
    /*selected*/
    n[4]
  ) } }), e.$on(
    "back",
    /*goBack*/
    n[10]
  ), e.$on(
    "start",
    /*onStart*/
    n[9]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selected*/
      16 && (r.proc = /*selected*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function xs(n) {
  let e, t;
  return e = new Ks({
    props: {
      doc: (
        /*doc*/
        n[0]
      ),
      editCount: (
        /*editCount*/
        n[1]
      ),
      host: (
        /*host*/
        n[2]
      ),
      plugins: (
        /*running*/
        n[5].plugins
      )
    }
  }), e.$on(
    "exit",
    /*exitWorkflow*/
    n[11]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*doc*/
      1 && (r.doc = /*doc*/
      l[0]), i & /*editCount*/
      2 && (r.editCount = /*editCount*/
      l[1]), i & /*host*/
      4 && (r.host = /*host*/
      l[2]), i & /*running*/
      32 && (r.plugins = /*running*/
      l[5].plugins), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function $s(n) {
  let e, t, l, i;
  const r = [xs, Qs, Js], s = [];
  function a(o, u) {
    return (
      /*running*/
      o[5] ? 0 : (
        /*selected*/
        o[4] ? 1 : 2
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ke();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), R(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      R(t), i = !1;
    },
    d(o) {
      o && P(l), s[e].d(o);
    }
  };
}
function eo(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], a = null, o = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+VGVtcGxhdGUgR2VuZXJhdG9yPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKPCEtLSAgPHByb2Nlc3M+LS0+CjwhLS0gICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMjwvaWQ+LS0+CjwhLS0gICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+LS0+CjwhLS0gICAgPG5hbWU+U3RhbmRhcmQgUHJvY2VzcyAyPC9uYW1lPi0tPgo8IS0tICAgIDxkZXNjcmlwdGlvbj4tLT4KPCEtLSAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHktLT4KPCEtLSAgICA8L2Rlc2NyaXB0aW9uPi0tPgoKPCEtLSAgICA8cGx1Z2lucy1zZXF1ZW5jZT4tLT4KPCEtLSAgICAgIDxwbHVnaW4+LS0+CjwhLS0gICAgICAgIDxpZD5lbmdpbmVlcmluZy13aXphcmQ8L2lkPi0tPgo8IS0tICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPi0tPgo8IS0tICAgICAgICA8c3JjPi0tPgo8IS0tICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc3Vic3RhdGlvbi5qcy0tPgo8IS0tICAgICAgICA8L3NyYz4tLT4KPCEtLSAgICAgIDwvcGx1Z2luPi0tPgoKPCEtLSAgICAgIDxwbHVnaW4+LS0+CjwhLS0gICAgICAgIDxpZD54eXotZWRpdG9yPC9pZD4tLT4KPCEtLSAgICAgICAgPG5hbWU+WFlaPC9uYW1lPi0tPgo8IS0tICAgICAgICA8c3JjPi0tPgo8IS0tICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMveHl6LmpzLS0+CjwhLS0gICAgICAgIDwvc3JjPi0tPgo8IS0tICAgICAgPC9wbHVnaW4+LS0+Cgo8IS0tICAgICAgPHBsdWdpbj4tLT4KPCEtLSAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPi0tPgo8IS0tICAgICAgICA8bmFtZT5OZXR3b3JrIEV4cGxvcmVyPC9uYW1lPi0tPgo8IS0tICAgICAgICA8c3JjPi0tPgo8IS0tICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcy0tPgo8IS0tICAgICAgICA8L3NyYz4tLT4KPCEtLSAgICAgIDwvcGx1Z2luPi0tPgo8IS0tICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4tLT4KPCEtLSAgPC9wcm9jZXNzPi0tPgoKPCEtLSAgPHByb2Nlc3M+LS0+CjwhLS0gICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+LS0+CjwhLS0gICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+LS0+CjwhLS0gICAgPG5hbWU+U3RhbmRhcmQgUHJvY2VzcyAzPC9uYW1lPi0tPgo8IS0tICAgIDxkZXNjcmlwdGlvbj4tLT4KPCEtLSAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHktLT4KPCEtLSAgICA8L2Rlc2NyaXB0aW9uPi0tPgoKPCEtLSAgICA8cGx1Z2lucy1zZXF1ZW5jZT4tLT4KPCEtLSAgICAgIDxwbHVnaW4+LS0+CjwhLS0gICAgICAgIDxpZD5lbmdpbmVlcmluZy13aXphcmQ8L2lkPi0tPgo8IS0tICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPi0tPgo8IS0tICAgICAgICA8c3JjPi0tPgo8IS0tICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc3Vic3RhdGlvbi5qcy0tPgo8IS0tICAgICAgICA8L3NyYz4tLT4KPCEtLSAgICAgIDwvcGx1Z2luPi0tPgoKPCEtLSAgICAgIDxwbHVnaW4+LS0+CjwhLS0gICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4tLT4KPCEtLSAgICAgICAgPG5hbWU+U2l0aXBlPC9uYW1lPi0tPgo8IS0tICAgICAgICA8c3JjPi0tPgo8IS0tICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzLS0+CjwhLS0gICAgICAgIDwvc3JjPi0tPgo8IS0tICAgICAgPC9wbHVnaW4+LS0+Cgo8IS0tICAgICAgPHBsdWdpbj4tLT4KPCEtLSAgICAgICAgPGlkPnN1YnN0YXRpb24tZXhwbG9yZXI8L2lkPi0tPgo8IS0tICAgICAgICA8bmFtZT5JRUQ8L25hbWU+LS0+CjwhLS0gICAgICAgIDxzcmM+LS0+CjwhLS0gICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMtLT4KPCEtLSAgICAgICAgPC9zcmM+LS0+CjwhLS0gICAgICA8L3BsdWdpbj4tLT4KPCEtLSAgICA8L3BsdWdpbnMtc2VxdWVuY2U+LS0+CjwhLS0gIDwvcHJvY2Vzcz4tLT4KPC9wcm9jZXNzZXM+Cg==", import.meta.url).href, d = (g) => {
    var L, E;
    return (E = (L = g == null ? void 0 : g.textContent) === null || L === void 0 ? void 0 : L.trim()) !== null && E !== void 0 ? E : "";
  }, m = (g) => Array.from(g.getElementsByTagName("process")).map((L) => {
    const E = Array.from(L.querySelectorAll("plugins-sequence > plugin")).map((h) => ({
      id: d(h.querySelector("id")),
      name: d(h.querySelector("name")),
      src: d(h.querySelector("src"))
    }));
    return {
      id: d(L.querySelector(":scope > id")),
      version: d(L.querySelector(":scope > version")),
      name: d(L.querySelector(":scope > name")),
      description: d(L.querySelector(":scope > description")),
      plugins: E
    };
  });
  function _() {
    return rn(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = "");
      try {
        const g = yield fetch(f, { cache: "no-cache" });
        if (!g.ok)
          throw new Error(`HTTP ${g.status}`);
        const L = new DOMParser().parseFromString(yield g.text(), "application/xml");
        if (L.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = m(L));
      } catch (g) {
        t(3, s = []), t(7, c = g.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ge(_);
  function b(g) {
    t(5, o = g), t(4, a = null);
  }
  function p(g) {
    t(4, a = g.detail);
  }
  function w(g) {
    b(g.detail);
  }
  function I() {
    t(4, a = null);
  }
  function A() {
    t(5, o = null), t(4, a = null);
  }
  return n.$$set = (g) => {
    "doc" in g && t(0, l = g.doc), "editCount" in g && t(1, i = g.editCount), "host" in g && t(2, r = g.host);
  }, [
    l,
    i,
    r,
    s,
    a,
    o,
    u,
    c,
    p,
    w,
    I,
    A
  ];
}
class to extends oe {
  constructor(e) {
    super(), se(this, e, eo, $s, re, { doc: 0, editCount: 1, host: 2 });
  }
}
function Il(n) {
  let e, t;
  return e = new to({
    props: {
      doc: (
        /*doc*/
        n[0]
      ),
      editCount: (
        /*editCount*/
        n[2]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*doc*/
      1 && (r.doc = /*doc*/
      l[0]), i & /*editCount*/
      4 && (r.editCount = /*editCount*/
      l[2]), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function no(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Il(n)
  );
  return {
    c() {
      s && s.c(), e = Z(), t = F("input"), l = Z(), i = F("input"), M(t, "type", "hidden"), M(t, "name", "package-name"), t.value = wl, M(i, "type", "hidden"), M(i, "name", "package-version"), i.value = El;
    },
    m(a, o) {
      s && s.m(a, o), O(a, e, o), O(a, t, o), O(a, l, o), O(a, i, o), r = !0;
    },
    p(a, [o]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? s ? (s.p(a, o), o & /*doc, dev*/
      3 && k(s, 1)) : (s = Il(a), s.c(), k(s, 1), s.m(e.parentNode, e)) : s && (ce(), R(s, 1, 1, () => {
        s = null;
      }), fe());
    },
    i(a) {
      r || (k(s), r = !0);
    },
    o(a) {
      R(s), r = !1;
    },
    d(a) {
      a && (P(e), P(t), P(l), P(i)), s && s.d(a);
    }
  };
}
function lo(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class io extends oe {
  constructor(e) {
    super(), se(this, e, lo, no, re, { doc: 0, dev: 1, editCount: 2 });
  }
}
class oo extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new io({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = ro();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  get doc() {
    return this._doc;
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function ro() {
  const n = `${wl}-v${El}-style`, e = ao(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function ao() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  oo as default
};
