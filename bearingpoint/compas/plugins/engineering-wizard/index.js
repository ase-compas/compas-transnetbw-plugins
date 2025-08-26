var yi = Object.defineProperty;
var Ai = (n, e, t) => e in n ? yi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Zt = (n, e, t) => (Ai(n, typeof e != "symbol" ? e + "" : e, t), t);
function $() {
}
function G(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Ll(n) {
  return n();
}
function fn() {
  return /* @__PURE__ */ Object.create(null);
}
function de(n) {
  n.forEach(Ll);
}
function me(n) {
  return typeof n == "function";
}
function Q(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ki(n) {
  return Object.keys(n).length === 0;
}
function wi(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return $;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ft(n, e, t) {
  n.$$.on_destroy.push(wi(e, t));
}
function ie(n, e, t, l) {
  if (n) {
    const i = El(n, e, t, l);
    return n[0](i);
  }
}
function El(n, e, t, l) {
  return n[1] && l ? G(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function re(n, e, t, l) {
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
function se(n, e, t, l, i, r) {
  if (i) {
    const s = El(e, t, l, r);
    n.p(s, i);
  }
}
function ae(n) {
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
function sn(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function en(n, e, t) {
  return n.set(t), e;
}
function J(n) {
  return n && me(n.destroy) ? n.destroy : $;
}
const Si = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function F(n, e) {
  n.appendChild(e);
}
function O(n, e, t) {
  n.insertBefore(e, t || null);
}
function T(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function mt(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function P(n) {
  return document.createElement(n);
}
function Oe(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function pe(n) {
  return document.createTextNode(n);
}
function V() {
  return pe(" ");
}
function Ce() {
  return pe("");
}
function Y(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function R(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Li = ["width", "height"];
function le(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Li.indexOf(l) === -1 ? n[l] = e[l] : R(n, l, e[l]);
}
function cn(n, e) {
  for (const t in e)
    R(n, t, e[t]);
}
function Ei(n, e) {
  Object.keys(e).forEach((t) => {
    Ri(n, t, e[t]);
  });
}
function Ri(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : R(n, e, t);
}
function kt(n) {
  return /-/.test(n) ? Ei : le;
}
function Hi(n) {
  return Array.from(n.childNodes);
}
function Me(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function dn(n, e) {
  n.value = e ?? "";
}
function Xt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function st(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Di(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Ut(n, e) {
  return new n(e);
}
let wt;
function It(n) {
  wt = n;
}
function Se() {
  if (!wt)
    throw new Error("Function called outside component initialization");
  return wt;
}
function Ne(n) {
  Se().$$.on_mount.push(n);
}
function Nt(n) {
  Se().$$.on_destroy.push(n);
}
function Ze() {
  const n = Se();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = Di(
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
function Fe(n) {
  return Se().$$.context.get(n);
}
function Ft(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ut = [], ee = [];
let ct = [];
const tn = [], Rl = /* @__PURE__ */ Promise.resolve();
let nn = !1;
function Hl() {
  nn || (nn = !0, Rl.then(Dl));
}
function Mi() {
  return Hl(), Rl;
}
function ln(n) {
  ct.push(n);
}
function Ke(n) {
  tn.push(n);
}
const Kt = /* @__PURE__ */ new Set();
let at = 0;
function Dl() {
  if (at !== 0)
    return;
  const n = wt;
  do {
    try {
      for (; at < ut.length; ) {
        const e = ut[at];
        at++, It(e), Ti(e.$$);
      }
    } catch (e) {
      throw ut.length = 0, at = 0, e;
    }
    for (It(null), ut.length = 0, at = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < ct.length; e += 1) {
      const t = ct[e];
      Kt.has(t) || (Kt.add(t), t());
    }
    ct.length = 0;
  } while (ut.length);
  for (; tn.length; )
    tn.pop()();
  nn = !1, Kt.clear(), It(n);
}
function Ti(n) {
  if (n.fragment !== null) {
    n.update(), de(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ln);
  }
}
function Oi(n) {
  const e = [], t = [];
  ct.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), ct = e;
}
const Ot = /* @__PURE__ */ new Set();
let it;
function fe() {
  it = {
    r: 0,
    c: [],
    p: it
    // parent group
  };
}
function ce() {
  it.r || de(it.c), it = it.p;
}
function A(n, e) {
  n && n.i && (Ot.delete(n), n.i(e));
}
function S(n, e, t, l) {
  if (n && n.o) {
    if (Ot.has(n))
      return;
    Ot.add(n), it.c.push(() => {
      Ot.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Be(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Ui(n, e) {
  S(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Fi(n, e, t, l, i, r, s, a, o, u, f, c) {
  let d = n.length, h = r.length, b = d;
  const p = {};
  for (; b--; )
    p[n[b].key] = b;
  const _ = [], k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), w = [];
  for (b = h; b--; ) {
    const m = c(i, r, b), L = t(m);
    let q = s.get(L);
    q ? w.push(() => q.p(m, e)) : (q = u(L, m), q.c()), k.set(L, _[b] = q), L in p && v.set(L, Math.abs(b - p[L]));
  }
  const g = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set();
  function H(m) {
    A(m, 1), m.m(a, f), s.set(m.key, m), f = m.first, h--;
  }
  for (; d && h; ) {
    const m = _[h - 1], L = n[d - 1], q = m.key, M = L.key;
    m === L ? (f = m.first, d--, h--) : k.has(M) ? !s.has(q) || g.has(q) ? H(m) : U.has(M) ? d-- : v.get(q) > v.get(M) ? (U.add(q), H(m)) : (g.add(M), d--) : (o(L, s), d--);
  }
  for (; d--; ) {
    const m = n[d];
    k.has(m.key) || o(m, s);
  }
  for (; h; )
    H(_[h - 1]);
  return de(w), _;
}
function oe(n, e) {
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
function ke(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Ye(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function Z(n) {
  n && n.c();
}
function z(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), ln(() => {
    const r = n.$$.on_mount.map(Ll).filter(me);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : de(r), n.$$.on_mount = [];
  }), i.forEach(ln);
}
function W(n, e) {
  const t = n.$$;
  t.fragment !== null && (Oi(t.after_update), de(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Bi(n, e) {
  n.$$.dirty[0] === -1 && (ut.push(n), Hl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function te(n, e, t, l, i, r, s = null, a = [-1]) {
  const o = wt;
  It(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: $,
    not_equal: i,
    bound: fn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: fn(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(u.root);
  let f = !1;
  if (u.ctx = t ? t(n, e.props || {}, (c, d, ...h) => {
    const b = h.length ? h[0] : d;
    return u.ctx && i(u.ctx[c], u.ctx[c] = b) && (!u.skip_bound && u.bound[c] && u.bound[c](b), f && Bi(n, c)), d;
  }) : [], u.update(), f = !0, de(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Hi(e.target);
      u.fragment && u.fragment.l(c), c.forEach(T);
    } else
      u.fragment && u.fragment.c();
    e.intro && A(n.$$.fragment), z(n, e.target, e.anchor), Dl();
  }
  It(o);
}
class ne {
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
    W(this, 1), this.$destroy = $;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!me(t))
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
    this.$$set && !ki(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Pi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pi);
const Ml = "archive-explorer", Tl = "0.0.1";
var rn = function(n, e) {
  return rn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, rn(n, e);
};
function gt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  rn(n, e);
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
function an(n, e, t, l) {
  function i(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function a(f) {
      try {
        u(l.next(f));
      } catch (c) {
        s(c);
      }
    }
    function o(f) {
      try {
        u(l.throw(f));
      } catch (c) {
        s(c);
      }
    }
    function u(f) {
      f.done ? r(f.value) : i(f.value).then(a, o);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function qi(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, l, i, r, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = a(0), s.throw = a(1), s.return = a(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(f) {
      return o([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        l = r = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Je(n) {
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
function x(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function _e(n, e, t, l = { bubbles: !0 }, i = !1) {
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
function ht(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i], s = r.indexOf("$");
    s !== -1 && e.indexOf(r.substring(0, s + 1)) !== -1 || e.indexOf(r) === -1 && (l[r] = n[r]);
  }
  return l;
}
const hn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Ni = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ue(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let s = i, a = () => {
    };
    return e ? a = e(s, r) : t.push([s, r]), s.match(hn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', s), () => {
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
      let u = a, f = o, c = !1;
      const d = u.match(hn), h = u.match(Ni), b = d || h;
      if (u.match(/^SMUI:\w+:/)) {
        const k = u.split(":");
        let v = "";
        for (let w = 0; w < k.length; w++)
          v += w === k.length - 1 ? ":" + k[w] : k[w].split("-").map((g) => g.slice(0, 1).toUpperCase() + g.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (b) {
        const k = u.split(d ? ":" : "$");
        u = k[0];
        const v = k.slice(1).reduce((w, g) => (w[g] = !0, w), {});
        v.passive && (c = c || {}, c.passive = !0), v.nonpassive && (c = c || {}, c.passive = !1), v.capture && (c = c || {}, c.capture = !0), v.once && (c = c || {}, c.once = !0), v.preventDefault && (f = Gi(f)), v.stopPropagation && (f = Vi(f)), v.stopImmediatePropagation && (f = ji(f)), v.self && (f = zi(i, f)), v.trusted && (f = Wi(f));
      }
      const p = mn(i, u, f, c), _ = () => {
        p();
        const k = r.indexOf(_);
        k > -1 && r.splice(k, 1);
      };
      return r.push(_), u in s || (s[u] = mn(i, u, l)), _;
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
function mn(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function Gi(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Vi(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function ji(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function zi(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Wi(n) {
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
function we(n, e) {
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
var Dt;
function Zi(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Dt;
  if (typeof Dt == "boolean" && !e)
    return Dt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || s, e || (Dt = l), l;
}
function Xi(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var l = e.x, i = e.y, r = l + t.left, s = i + t.top, a, o;
  if (n.type === "touchstart") {
    var u = n;
    a = u.changedTouches[0].pageX - r, o = u.changedTouches[0].pageY - s;
  } else {
    var f = n;
    a = f.pageX - r, o = f.pageY - s;
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
var _t = (
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
function Ki(n) {
  return n === void 0 && (n = window), Yi(n) ? { passive: !0 } : !1;
}
function Yi(n) {
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
const Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ki
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
function Ji(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Ul(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ul(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Qi(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ji,
  estimateScrollWidth: Qi,
  matches: Ul
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
var xi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, $i = {
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
var _n = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], pn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Mt = [], er = (
  /** @class */
  function(n) {
    gt(e, n);
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
        return xi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $i;
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
          for (var r = Je(_n), s = r.next(); !s.done; s = r.next()) {
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
          for (var r = Je(pn), s = r.next(); !s.done; s = r.next()) {
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
        for (var i = Je(_n), r = i.next(); !r.done; r = i.next()) {
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
        for (var i = Je(pn), r = i.next(); !r.done; r = i.next()) {
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
            var a = t !== void 0 && Mt.length > 0 && Mt.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Mt.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Mt = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, l = e.strings, i = l.VAR_FG_TRANSLATE_START, r = l.VAR_FG_TRANSLATE_END, s = e.cssClasses, a = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), h = d.startPoint, b = d.endPoint;
        f = h.x + "px, " + h.y + "px", c = b.x + "px, " + b.y + "px";
      }
      this.adapter.updateCssVariable(i, f), this.adapter.updateCssVariable(r, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = Xi(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
  }(_t)
);
const { applyPassive: Tt } = Ol, { matches: tr } = Fl;
function yt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: a, eventTarget: o, activeTarget: u, addClass: f = (b) => n.classList.add(b), removeClass: c = (b) => n.classList.remove(b), addStyle: d = (b, p) => n.style.setProperty(b, p), initPromise: h = Promise.resolve() } = {}) {
  let b, p = Fe("SMUI:addLayoutListener"), _, k = s, v = o, w = u;
  function g() {
    t ? (f("mdc-ripple-surface"), r === "primary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : r === "secondary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : (c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary"))) : (c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), b && k !== s && (k = s, s ? b.activate() : s === !1 && b.deactivate()), e && !b ? (b = new er({
      addClass: f,
      browserSupportsCssVars: () => Zi(window),
      computeBoundingRect: () => (a || n).getBoundingClientRect(),
      containsEventTarget: (H) => n.contains(H),
      deregisterDocumentInteractionHandler: (H, m) => document.documentElement.removeEventListener(H, m, Tt()),
      deregisterInteractionHandler: (H, m) => (o || n).removeEventListener(H, m, Tt()),
      deregisterResizeHandler: (H) => window.removeEventListener("resize", H),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? tr(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (H, m) => document.documentElement.addEventListener(H, m, Tt()),
      registerInteractionHandler: (H, m) => (o || n).addEventListener(H, m, Tt()),
      registerResizeHandler: (H) => window.addEventListener("resize", H),
      removeClass: c,
      updateCssVariable: d
    }), h.then(() => {
      b && (b.init(), b.setUnbounded(l));
    })) : b && !e && h.then(() => {
      b && (b.destroy(), b = void 0);
    }), b && (v !== o || w !== u) && (v = o, w = u, b.destroy(), requestAnimationFrame(() => {
      b && (b.init(), b.setUnbounded(l));
    })), !e && l && f("mdc-ripple-upgraded--unbounded");
  }
  g(), p && (_ = p(U));
  function U() {
    b && b.layout();
  }
  return {
    update(H) {
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
        addClass: f,
        removeClass: c,
        addStyle: d,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (m) => n.classList.add(m), removeClass: (m) => n.classList.remove(m), addStyle: (m, L) => n.style.setProperty(m, L), initPromise: Promise.resolve() }, H)), g();
    },
    destroy() {
      b && (b.destroy(), b = void 0, c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function nr(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Yt(n)
  );
  return {
    c() {
      i && i.c(), t = Ce();
    },
    m(r, s) {
      i && i.m(r, s), O(r, t, s), l = !0;
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? Q(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Yt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, s) : (i = Yt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (A(i, r), l = !0);
    },
    o(r) {
      S(i, r), l = !1;
    },
    d(r) {
      r && T(t), i && i.d(r);
    }
  };
}
function lr(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Jt(n)
  );
  return {
    c() {
      l && l.c(), t = Ce();
    },
    m(i, r) {
      l && l.m(i, r), O(i, t, r);
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? Q(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = Jt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Jt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: $,
    o: $,
    d(i) {
      i && T(t), l && l.d(i);
    }
  };
}
function ir(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = ie(
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
  for (let f = 0; f < o.length; f += 1)
    u = G(u, o[f]);
  return {
    c() {
      e = Oe("svg"), a && a.c(), cn(e, u);
    },
    m(f, c) {
      O(f, e, c), a && a.m(e, null), n[9](e), l = !0, i || (r = [
        J(t = we.call(
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
    p(f, c) {
      a && a.p && (!l || c & /*$$scope*/
      128) && se(
        a,
        s,
        f,
        /*$$scope*/
        f[7],
        l ? re(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : ae(
          /*$$scope*/
          f[7]
        ),
        null
      ), cn(e, u = oe(o, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && me(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (A(a, f), l = !0);
    },
    o(f) {
      S(a, f), l = !1;
    },
    d(f) {
      f && T(e), a && a.d(f), n[9](null), i = !1, de(r);
    }
  };
}
function Yt(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = ie(
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
  for (let f = 0; f < o.length; f += 1)
    u = G(u, o[f]);
  return {
    c() {
      e = P(
        /*tag*/
        n[1]
      ), a && a.c(), kt(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(f, c) {
      O(f, e, c), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        J(t = we.call(
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
    p(f, c) {
      a && a.p && (!l || c & /*$$scope*/
      128) && se(
        a,
        s,
        f,
        /*$$scope*/
        f[7],
        l ? re(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : ae(
          /*$$scope*/
          f[7]
        ),
        null
      ), kt(
        /*tag*/
        f[1]
      )(e, u = oe(o, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && me(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (A(a, f), l = !0);
    },
    o(f) {
      S(a, f), l = !1;
    },
    d(f) {
      f && T(e), a && a.d(f), n[11](null), i = !1, de(r);
    }
  };
}
function Jt(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], s = {};
  for (let a = 0; a < r.length; a += 1)
    s = G(s, r[a]);
  return {
    c() {
      e = P(
        /*tag*/
        n[1]
      ), kt(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(a, o) {
      O(a, e, o), n[10](e), l || (i = [
        J(t = we.call(
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
      kt(
        /*tag*/
        a[1]
      )(e, s = oe(r, [o & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && me(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    d(a) {
      a && T(e), n[10](null), l = !1, de(i);
    }
  };
}
function rr(n) {
  let e, t, l, i;
  const r = [ir, lr, nr], s = [];
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
      t.c(), l = Ce();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? s[e].p(o, u) : (fe(), S(s[f], 1, 1, () => {
        s[f] = null;
      }), ce(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), A(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (A(t), i = !0);
    },
    o(o) {
      S(t), i = !1;
    },
    d(o) {
      o && T(l), s[e].d(o);
    }
  };
}
function sr(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ue(e, i), { $$slots: s = {}, $$scope: a } = e, { use: o = [] } = e, { tag: u } = e;
  const f = Ue(Se());
  let c;
  function d() {
    return c;
  }
  function h(_) {
    ee[_ ? "unshift" : "push"](() => {
      c = _, t(2, c);
    });
  }
  function b(_) {
    ee[_ ? "unshift" : "push"](() => {
      c = _, t(2, c);
    });
  }
  function p(_) {
    ee[_ ? "unshift" : "push"](() => {
      c = _, t(2, c);
    });
  }
  return n.$$set = (_) => {
    e = G(G({}, e), De(_)), t(5, r = ue(e, i)), "use" in _ && t(0, o = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, a = _.$$scope);
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
    c,
    l,
    f,
    r,
    d,
    a,
    s,
    h,
    b,
    p
  ];
}
class Bt extends ne {
  constructor(e) {
    super(), te(this, e, sr, rr, Q, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const ot = [];
function At(n, e = $) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (Q(n, a) && (n = a, t)) {
      const o = !ot.length;
      for (const u of l)
        u[1](), ot.push(u, n);
      if (o) {
        for (let u = 0; u < ot.length; u += 2)
          ot[u][0](ot[u + 1]);
        ot.length = 0;
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
function ar(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = ie(
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
      8) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? re(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : ae(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function or(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: a } = e;
  const o = At(a);
  return ft(n, o, (u) => t(5, l = u)), Re(s, o), Nt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, s = u.key), "value" in u && t(2, a = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && en(o, l = a, l);
  }, [o, s, a, r, i];
}
class Pt extends ne {
  constructor(e) {
    super(), te(this, e, or, ar, Q, { key: 1, value: 2 });
  }
}
function bn(n) {
  let e;
  return {
    c() {
      e = P("div"), R(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function ur(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = ie(
    r,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let a = (
    /*touch*/
    n[6] && bn()
  );
  return {
    c() {
      e = P("div"), t = V(), s && s.c(), a && a.c(), l = Ce(), R(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      O(o, e, u), O(o, t, u), s && s.m(o, u), a && a.m(o, u), O(o, l, u), i = !0;
    },
    p(o, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && se(
        s,
        r,
        o,
        /*$$scope*/
        o[30],
        i ? re(
          r,
          /*$$scope*/
          o[30],
          u,
          null
        ) : ae(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? a || (a = bn(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    i(o) {
      i || (A(s, o), i = !0);
    },
    o(o) {
      S(s, o), i = !1;
    },
    d(o) {
      o && (T(e), T(t), T(l)), s && s.d(o), a && a.d(o);
    }
  };
}
function fr(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          yt,
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
      class: x({
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
      ).map(Qt).concat([
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
      $$slots: { default: [ur] },
      $$scope: { ctx: a }
    };
    for (let f = 0; f < i.length; f += 1)
      u = G(u, i[f]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = G(u, oe(i, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        a[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            yt,
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
        class: x({
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
        ).map(Qt).concat([
          /*style*/
          a[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && ke(
        /*actionProp*/
        a[16]
      ),
      o[0] & /*defaultProp*/
      32768 && ke(
        /*defaultProp*/
        a[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && ke(
        /*secondaryProp*/
        a[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        a[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && ke(
        /*$$restProps*/
        a[23]
      )
    ]))), { props: u };
  }
  return r && (e = Ut(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && Z(e.$$.fragment), t = Ce();
    },
    m(a, o) {
      e && z(e, a, o), O(a, t, o), l = !0;
    },
    p(a, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      a[9])) {
        if (e) {
          fe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            W(u, 1);
          }), ce();
        }
        r ? (e = Ut(r, s(a, o)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), Z(e.$$.fragment), A(e.$$.fragment, 1), z(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? oe(i, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            a[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                yt,
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
            class: x({
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
            ).map(Qt).concat([
              /*style*/
              a[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && ke(
            /*actionProp*/
            a[16]
          ),
          o[0] & /*defaultProp*/
          32768 && ke(
            /*defaultProp*/
            a[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && ke(
            /*secondaryProp*/
            a[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            a[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && ke(
            /*$$restProps*/
            a[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && A(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && S(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && T(t), n[29](null), e && W(e, a);
    }
  };
}
const Qt = ([n, e]) => `${n}: ${e};`;
function cr(n, e, t) {
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
  const f = Ue(Se());
  let { use: c = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: b = !0 } = e, { color: p = "primary" } = e, { variant: _ = "text" } = e, { touch: k = !1 } = e, { href: v = void 0 } = e, { action: w = "close" } = e, { defaultAction: g = !1 } = e, { secondary: U = !1 } = e, H, m = {}, L = {}, q = Fe("SMUI:button:context"), { component: M = Bt } = e, { tag: y = M === Bt ? v == null ? "button" : "a" : void 0 } = e, B = a.disabled;
  Re("SMUI:label:context", "button"), Re("SMUI:icon:context", "button");
  function E(C) {
    m[C] || t(12, m[C] = !0, m);
  }
  function K(C) {
    (!(C in m) || m[C]) && t(12, m[C] = !1, m);
  }
  function Ie(C, N) {
    L[C] != N && (N === "" || N == null ? (delete L[C], t(13, L)) : t(13, L[C] = N, L));
  }
  function ye() {
    q === "banner" && _e(be(), U ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function be() {
    return H.getElement();
  }
  function j(C) {
    ee[C ? "unshift" : "push"](() => {
      H = C, t(11, H);
    });
  }
  return n.$$set = (C) => {
    t(31, e = G(G({}, e), De(C))), t(23, a = ue(e, s)), "use" in C && t(0, c = C.use), "class" in C && t(1, d = C.class), "style" in C && t(2, h = C.style), "ripple" in C && t(3, b = C.ripple), "color" in C && t(4, p = C.color), "variant" in C && t(5, _ = C.variant), "touch" in C && t(6, k = C.touch), "href" in C && t(7, v = C.href), "action" in C && t(24, w = C.action), "defaultAction" in C && t(25, g = C.defaultAction), "secondary" in C && t(8, U = C.secondary), "component" in C && t(9, M = C.component), "tag" in C && t(10, y = C.tag), "$$scope" in C && t(30, u = C.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = q === "dialog:action" && w != null ? { "data-mdc-dialog-action": w } : { action: e.action }), t(15, i = q === "dialog:action" && g ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = q === "banner" ? {} : { secondary: e.secondary }), B !== a.disabled) {
      if (H) {
        const C = be();
        "blur" in C && C.blur();
      }
      t(27, B = a.disabled);
    }
  }, e = De(e), [
    c,
    d,
    h,
    b,
    p,
    _,
    k,
    v,
    U,
    M,
    y,
    H,
    m,
    L,
    r,
    i,
    l,
    f,
    q,
    E,
    K,
    Ie,
    ye,
    a,
    w,
    g,
    be,
    B,
    o,
    j,
    u
  ];
}
class qt extends ne {
  constructor(e) {
    super(), te(
      this,
      e,
      cr,
      fr,
      Q,
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
var dr = {
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
var hr = (
  /** @class */
  function(n) {
    gt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dr;
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
  }(_t)
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
var nt = {
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
var mr = (
  /** @class */
  function(n) {
    gt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nt;
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
      this.adapter.removeClass(nt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(nt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(nt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(nt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(nt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(nt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(_t)
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
var gr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, vn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, _r = {
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
var pr = (
  /** @class */
  function(n) {
    gt(e, n);
    function e(t) {
      return n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return vn;
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
      t > 0 && (t += vn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(_t)
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
var xt = {
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
}, br = {
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
}, Cn = {
  LABEL_SCALE: 0.75
}, vr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Cr = [
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
var In = ["mousedown", "touchstart"], yn = ["click", "keydown"], Ir = (
  /** @class */
  function(n) {
    gt(e, n);
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
        return br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Cr.indexOf(t) >= 0;
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
        for (var s = Je(In), a = s.next(); !a.done; a = s.next()) {
          var o = a.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          a && !a.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = Je(yn), f = u.next(); !f.done; f = u.next()) {
          var o = f.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          f && !f.done && (r = u.return) && r.call(u);
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
        for (var s = Je(In), a = s.next(); !a.done; a = s.next()) {
          var o = a.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          a && !a.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = Je(yn), f = u.next(); !f.done; f = u.next()) {
          var o = f.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          f && !f.done && (r = u.return) && r.call(u);
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
        return vr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var l = this.adapter.getLabelWidth() * Cn.LABEL_SCALE;
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
        r && s ? this.adapter.setInputAttr(xt.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(xt.ARIA_DESCRIBEDBY);
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
  }(_t)
);
function yr(n) {
  let e, t, l, i, r, s, a, o;
  const u = (
    /*#slots*/
    n[22].default
  ), f = ie(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = x({
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
      ).map(kn).concat([
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
  for (let h = 0; h < c.length; h += 1)
    d = G(d, c[h]);
  return {
    c() {
      e = P("label"), f && f.c(), le(e, d);
    },
    m(h, b) {
      O(h, e, b), f && f.m(e, null), n[24](e), s = !0, a || (o = [
        J(r = we.call(
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
    p(h, b) {
      f && f.p && (!s || b & /*$$scope*/
      2097152) && se(
        f,
        u,
        h,
        /*$$scope*/
        h[21],
        s ? re(
          u,
          /*$$scope*/
          h[21],
          b,
          null
        ) : ae(
          /*$$scope*/
          h[21]
        ),
        null
      ), le(e, d = oe(c, [
        (!s || b & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = x({
          [
            /*className*/
            h[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            h[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            h[1]
          ),
          .../*internalClasses*/
          h[8]
        }))) && { class: t },
        (!s || b & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          h[9]
        ).map(kn).concat([
          /*style*/
          h[4]
        ]).join(" "))) && { style: l },
        (!s || b & /*forId*/
        32 && i !== (i = /*forId*/
        h[5] || /*inputProps*/
        (h[11] ? (
          /*inputProps*/
          h[11].id
        ) : void 0))) && { for: i },
        b & /*$$restProps*/
        4096 && /*$$restProps*/
        h[12]
      ])), r && me(r.update) && b & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      s || (A(f, h), s = !0);
    },
    o(h) {
      S(f, h), s = !1;
    },
    d(h) {
      h && T(e), f && f.d(h), n[24](null), a = !1, de(o);
    }
  };
}
function Ar(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ie(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = x({
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
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = G(c, f[d]);
  return {
    c() {
      e = P("span"), u && u.c(), le(e, c);
    },
    m(d, h) {
      O(d, e, h), u && u.m(e, null), n[23](e), r = !0, s || (a = [
        J(i = we.call(
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
    p(d, h) {
      u && u.p && (!r || h & /*$$scope*/
      2097152) && se(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        r ? re(
          o,
          /*$$scope*/
          d[21],
          h,
          null
        ) : ae(
          /*$$scope*/
          d[21]
        ),
        null
      ), le(e, c = oe(f, [
        (!r || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = x({
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
        (!r || h & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(An).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: l },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), i && me(i.update) && h & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      r || (A(u, d), r = !0);
    },
    o(d) {
      S(u, d), r = !1;
    },
    d(d) {
      d && T(e), u && u.d(d), n[23](null), s = !1, de(a);
    }
  };
}
function kr(n) {
  let e, t, l, i;
  const r = [Ar, yr], s = [];
  function a(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ce();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? s[e].p(o, u) : (fe(), S(s[f], 1, 1, () => {
        s[f] = null;
      }), ce(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), A(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (A(t), i = !0);
    },
    o(o) {
      S(t), i = !1;
    },
    d(o) {
      o && T(l), s[e].d(o);
    }
  };
}
const An = ([n, e]) => `${n}: ${e};`, kn = ([n, e]) => `${n}: ${e};`;
function wr(n, e, t) {
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
  const o = Ue(Se());
  let { use: u = [] } = e, { class: f = "" } = e, { style: c = "" } = e, { for: d = void 0 } = e, { floatAbove: h = !1 } = e, { required: b = !1 } = e, { wrapped: p = !1 } = e, _, k, v = {}, w = {}, g = (a = Fe("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, U = h, H = b;
  Ne(() => {
    t(18, k = new hr({
      addClass: m,
      removeClass: L,
      getWidth: () => {
        var C, N;
        const ge = Ie(), ve = ge.cloneNode(!0);
        (C = ge.parentNode) === null || C === void 0 || C.appendChild(ve), ve.classList.add("smui-floating-label--remove-transition"), ve.classList.add("smui-floating-label--force-size"), ve.classList.remove("mdc-floating-label--float-above");
        const Pe = ve.scrollWidth;
        return (N = ge.parentNode) === null || N === void 0 || N.removeChild(ve), Pe;
      },
      registerInteractionHandler: (C, N) => Ie().addEventListener(C, N),
      deregisterInteractionHandler: (C, N) => Ie().removeEventListener(C, N)
    }));
    const j = {
      get element() {
        return Ie();
      },
      addStyle: q,
      removeStyle: M
    };
    return _e(_, "SMUIFloatingLabel:mount", j), k.init(), () => {
      _e(_, "SMUIFloatingLabel:unmount", j), k.destroy();
    };
  });
  function m(j) {
    v[j] || t(8, v[j] = !0, v);
  }
  function L(j) {
    (!(j in v) || v[j]) && t(8, v[j] = !1, v);
  }
  function q(j, C) {
    w[j] != C && (C === "" || C == null ? (delete w[j], t(9, w)) : t(9, w[j] = C, w));
  }
  function M(j) {
    j in w && (delete w[j], t(9, w));
  }
  function y(j) {
    k.shake(j);
  }
  function B(j) {
    t(0, h = j);
  }
  function E(j) {
    t(1, b = j);
  }
  function K() {
    return k.getWidth();
  }
  function Ie() {
    return _;
  }
  function ye(j) {
    ee[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  function be(j) {
    ee[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  return n.$$set = (j) => {
    e = G(G({}, e), De(j)), t(12, i = ue(e, l)), "use" in j && t(2, u = j.use), "class" in j && t(3, f = j.class), "style" in j && t(4, c = j.style), "for" in j && t(5, d = j.for), "floatAbove" in j && t(0, h = j.floatAbove), "required" in j && t(1, b = j.required), "wrapped" in j && t(6, p = j.wrapped), "$$scope" in j && t(21, s = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && k && U !== h && (t(19, U = h), k.float(h)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && k && H !== b && (t(20, H = b), k.setRequired(b));
  }, [
    h,
    b,
    u,
    f,
    c,
    d,
    p,
    _,
    v,
    w,
    o,
    g,
    i,
    y,
    B,
    E,
    K,
    Ie,
    k,
    U,
    H,
    s,
    r,
    ye,
    be
  ];
}
class Bl extends ne {
  constructor(e) {
    super(), te(this, e, wr, kr, Q, {
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
function Sr(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = x({
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
      ).map(wn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = G(o, a[u]);
  return {
    c() {
      e = P("div"), le(e, o);
    },
    m(u, f) {
      O(u, e, f), n[13](e), r || (s = [
        J(i = we.call(
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
    p(u, [f]) {
      le(e, o = oe(a, [
        f & /*className, active, internalClasses*/
        42 && t !== (t = x({
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
        f & /*internalStyles, style*/
        68 && l !== (l = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(wn).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: l },
        f & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), i && me(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && T(e), n[13](null), r = !1, de(s);
    }
  };
}
const wn = ([n, e]) => `${n}: ${e};`;
function Lr(n, e, t) {
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
  const r = Ue(Se());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, f, c, d = {}, h = {};
  Ne(() => (c = new mr({
    addClass: p,
    removeClass: _,
    hasClass: b,
    setStyle: k,
    registerEventHandler: (m, L) => U().addEventListener(m, L),
    deregisterEventHandler: (m, L) => U().removeEventListener(m, L)
  }), c.init(), () => {
    c.destroy();
  }));
  function b(m) {
    return m in d ? d[m] : U().classList.contains(m);
  }
  function p(m) {
    d[m] || t(5, d[m] = !0, d);
  }
  function _(m) {
    (!(m in d) || d[m]) && t(5, d[m] = !1, d);
  }
  function k(m, L) {
    h[m] != L && (L === "" || L == null ? (delete h[m], t(6, h)) : t(6, h[m] = L, h));
  }
  function v() {
    c.activate();
  }
  function w() {
    c.deactivate();
  }
  function g(m) {
    c.setRippleCenter(m);
  }
  function U() {
    return f;
  }
  function H(m) {
    ee[m ? "unshift" : "push"](() => {
      f = m, t(4, f);
    });
  }
  return n.$$set = (m) => {
    e = G(G({}, e), De(m)), t(8, i = ue(e, l)), "use" in m && t(0, s = m.use), "class" in m && t(1, a = m.class), "style" in m && t(2, o = m.style), "active" in m && t(3, u = m.active);
  }, [
    s,
    a,
    o,
    u,
    f,
    d,
    h,
    r,
    i,
    v,
    w,
    g,
    U,
    H
  ];
}
class Er extends ne {
  constructor(e) {
    super(), te(this, e, Lr, Sr, Q, {
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
function Sn(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[15].default
  ), r = ie(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = P("div"), r && r.c(), R(e, "class", "mdc-notched-outline__notch"), R(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Ln).join(" "));
    },
    m(s, a) {
      O(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, a) {
      r && r.p && (!l || a & /*$$scope*/
      16384) && se(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? re(
          i,
          /*$$scope*/
          s[14],
          a,
          null
        ) : ae(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!l || a & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        s[7]
      ).map(Ln).join(" "))) && R(e, "style", t);
    },
    i(s) {
      l || (A(r, s), l = !0);
    },
    o(s) {
      S(r, s), l = !1;
    },
    d(s) {
      s && T(e), r && r.d(s);
    }
  };
}
function Rr(n) {
  let e, t, l, i, r, s, a, o, u, f, c = !/*noLabel*/
  n[3] && Sn(n), d = [
    {
      class: s = x({
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
  ], h = {};
  for (let b = 0; b < d.length; b += 1)
    h = G(h, d[b]);
  return {
    c() {
      e = P("div"), t = P("div"), l = V(), c && c.c(), i = V(), r = P("div"), R(t, "class", "mdc-notched-outline__leading"), R(r, "class", "mdc-notched-outline__trailing"), le(e, h);
    },
    m(b, p) {
      O(b, e, p), F(e, t), F(e, l), c && c.m(e, null), F(e, i), F(e, r), n[16](e), o = !0, u || (f = [
        J(a = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        Y(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        Y(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(b, [p]) {
      /*noLabel*/
      b[3] ? c && (fe(), S(c, 1, 1, () => {
        c = null;
      }), ce()) : c ? (c.p(b, p), p & /*noLabel*/
      8 && A(c, 1)) : (c = Sn(b), c.c(), A(c, 1), c.m(e, i)), le(e, h = oe(d, [
        (!o || p & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = x({
          [
            /*className*/
            b[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            b[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            b[3]
          ),
          .../*internalClasses*/
          b[6]
        }))) && { class: s },
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        b[10]
      ])), a && me(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      o || (A(c), o = !0);
    },
    o(b) {
      S(c), o = !1;
    },
    d(b) {
      b && T(e), c && c.d(), n[16](null), u = !1, de(f);
    }
  };
}
const Ln = ([n, e]) => `${n}: ${e};`;
function Hr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ue(Se());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: f = !1 } = e, { noLabel: c = !1 } = e, d, h, b, p = {}, _ = {};
  Ne(() => (h = new pr({
    addClass: v,
    removeClass: w,
    setNotchWidthProperty: (y) => g("width", y + "px"),
    removeNotchWidthProperty: () => U("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function k(y) {
    t(4, b = y.detail);
  }
  function v(y) {
    p[y] || t(6, p[y] = !0, p);
  }
  function w(y) {
    (!(y in p) || p[y]) && t(6, p[y] = !1, p);
  }
  function g(y, B) {
    _[y] != B && (B === "" || B == null ? (delete _[y], t(7, _)) : t(7, _[y] = B, _));
  }
  function U(y) {
    y in _ && (delete _[y], t(7, _));
  }
  function H(y) {
    h.notch(y);
  }
  function m() {
    h.closeNotch();
  }
  function L() {
    return d;
  }
  function q(y) {
    ee[y ? "unshift" : "push"](() => {
      d = y, t(5, d);
    });
  }
  const M = () => t(4, b = void 0);
  return n.$$set = (y) => {
    e = G(G({}, e), De(y)), t(10, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "notched" in y && t(2, f = y.notched), "noLabel" in y && t(3, c = y.noLabel), "$$scope" in y && t(14, s = y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (b ? (b.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      b && b.removeStyle("transition-duration");
    })) : w("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    f,
    c,
    b,
    d,
    p,
    _,
    a,
    k,
    i,
    H,
    m,
    L,
    s,
    r,
    q,
    M
  ];
}
class Dr extends ne {
  constructor(e) {
    super(), te(this, e, Hr, Rr, Q, {
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
function Mr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = ie(
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
      8192) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? re(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : ae(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Tr(n) {
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
      class: x({
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
      $$slots: { default: [Mr] },
      $$scope: { ctx: a }
    };
    for (let f = 0; f < i.length; f += 1)
      u = G(u, i[f]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = G(u, oe(i, [
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
        class: x({
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
      128 && ke(
        /*props*/
        a[7]
      ),
      o & /*$$restProps*/
      512 && ke(
        /*$$restProps*/
        a[9]
      )
    ]))), { props: u };
  }
  return r && (e = Ut(r, s(n)), n[12](e)), {
    c() {
      e && Z(e.$$.fragment), t = Ce();
    },
    m(a, o) {
      e && z(e, a, o), O(a, t, o), l = !0;
    },
    p(a, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      a[2])) {
        if (e) {
          fe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            W(u, 1);
          }), ce();
        }
        r ? (e = Ut(r, s(a, o)), a[12](e), Z(e.$$.fragment), A(e.$$.fragment, 1), z(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? oe(i, [
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
            class: x({
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
          128 && ke(
            /*props*/
            a[7]
          ),
          o & /*$$restProps*/
          512 && ke(
            /*$$restProps*/
            a[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && A(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && S(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && T(t), n[12](null), e && W(e, a);
    }
  };
}
const We = {
  component: Bt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Or(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e, { use: a = [] } = e, { class: o = "" } = e, u;
  const f = We.class, c = {}, d = [], h = We.contexts, b = We.props;
  let { component: p = We.component } = e, { tag: _ = p === Bt ? We.tag : void 0 } = e;
  Object.entries(We.classMap).forEach(([g, U]) => {
    const H = Fe(U);
    H && "subscribe" in H && d.push(H.subscribe((m) => {
      t(5, c[g] = m, c);
    }));
  });
  const k = Ue(Se());
  for (let g in h)
    h.hasOwnProperty(g) && Re(g, h[g]);
  Nt(() => {
    for (const g of d)
      g();
  });
  function v() {
    return u.getElement();
  }
  function w(g) {
    ee[g ? "unshift" : "push"](() => {
      u = g, t(4, u);
    });
  }
  return n.$$set = (g) => {
    e = G(G({}, e), De(g)), t(9, i = ue(e, l)), "use" in g && t(0, a = g.use), "class" in g && t(1, o = g.class), "component" in g && t(2, p = g.component), "tag" in g && t(3, _ = g.tag), "$$scope" in g && t(13, s = g.$$scope);
  }, [
    a,
    o,
    p,
    _,
    u,
    c,
    f,
    b,
    k,
    i,
    v,
    r,
    w,
    s
  ];
}
class Ur extends ne {
  constructor(e) {
    super(), te(this, e, Or, Tr, Q, {
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
const En = Object.assign({}, We);
function He(n) {
  return new Proxy(Ur, {
    construct: function(e, t) {
      return Object.assign(We, En, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(We, En, n), e[t];
    }
  });
}
const Fr = He({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Br = He({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Pr = He({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function qr(n) {
  let e, t, l, i, r, s = [
    {
      class: t = x({
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
    a = G(a, s[o]);
  return {
    c() {
      e = P("input"), le(e, a);
    },
    m(o, u) {
      O(o, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        J(l = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        Y(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        Y(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        Y(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        Y(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], i = !0);
    },
    p(o, [u]) {
      le(e, a = oe(s, [
        u & /*className*/
        2 && t !== (t = x({
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
      ])), l && me(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: $,
    o: $,
    d(o) {
      o && T(e), n[26](null), i = !1, de(r);
    }
  };
}
function Nr(n) {
  return n === "" ? Number.NaN : +n;
}
function Gr(n, e, t) {
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
  const r = Ue(Se());
  let s = () => {
  };
  function a(C) {
    return C === s;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: f = "text" } = e, { placeholder: c = " " } = e, { value: d = s } = e;
  const h = a(d);
  h && (d = "");
  let { files: b = null } = e, { dirty: p = !1 } = e, { invalid: _ = !1 } = e, { updateInvalid: k = !0 } = e, { emptyValueNull: v = d === null } = e;
  h && v && (d = null);
  let { emptyValueUndefined: w = d === void 0 } = e;
  h && w && (d = void 0);
  let g, U = {}, H = {};
  Ne(() => {
    k && t(14, _ = g.matches(":invalid"));
  });
  function m(C) {
    if (f === "file") {
      t(12, b = C.currentTarget.files);
      return;
    }
    if (C.currentTarget.value === "" && v) {
      t(11, d = null);
      return;
    }
    if (C.currentTarget.value === "" && w) {
      t(11, d = void 0);
      return;
    }
    switch (f) {
      case "number":
      case "range":
        t(11, d = Nr(C.currentTarget.value));
        break;
      default:
        t(11, d = C.currentTarget.value);
        break;
    }
  }
  function L(C) {
    (f === "file" || f === "range") && m(C), t(13, p = !0), k && t(14, _ = g.matches(":invalid"));
  }
  function q(C) {
    var N;
    return C in U ? (N = U[C]) !== null && N !== void 0 ? N : null : K().getAttribute(C);
  }
  function M(C, N) {
    U[C] !== N && t(6, U[C] = N, U);
  }
  function y(C) {
    (!(C in U) || U[C] != null) && t(6, U[C] = void 0, U);
  }
  function B() {
    K().focus();
  }
  function E() {
    K().blur();
  }
  function K() {
    return g;
  }
  function Ie(C) {
    Ft.call(this, n, C);
  }
  function ye(C) {
    Ft.call(this, n, C);
  }
  function be(C) {
    ee[C ? "unshift" : "push"](() => {
      g = C, t(5, g);
    });
  }
  const j = (C) => f !== "file" && m(C);
  return n.$$set = (C) => {
    e = G(G({}, e), De(C)), t(10, i = ue(e, l)), "use" in C && t(0, o = C.use), "class" in C && t(1, u = C.class), "type" in C && t(2, f = C.type), "placeholder" in C && t(3, c = C.placeholder), "value" in C && t(11, d = C.value), "files" in C && t(12, b = C.files), "dirty" in C && t(13, p = C.dirty), "invalid" in C && t(14, _ = C.invalid), "updateInvalid" in C && t(15, k = C.updateInvalid), "emptyValueNull" in C && t(16, v = C.emptyValueNull), "emptyValueUndefined" in C && t(17, w = C.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (f === "file" ? (delete H.value, t(4, H), t(2, f), t(11, d)) : t(4, H.value = d ?? "", H));
  }, [
    o,
    u,
    f,
    c,
    H,
    g,
    U,
    r,
    m,
    L,
    i,
    d,
    b,
    p,
    _,
    k,
    v,
    w,
    q,
    M,
    y,
    B,
    E,
    K,
    Ie,
    ye,
    be,
    j
  ];
}
class Vr extends ne {
  constructor(e) {
    super(), te(this, e, Gr, qr, Q, {
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
function jr(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = x({
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
    o = G(o, a[u]);
  return {
    c() {
      e = P("textarea"), le(e, o);
    },
    m(u, f) {
      O(u, e, f), e.autofocus && e.focus(), n[21](e), dn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        J(i = we.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        J(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        Y(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        Y(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        Y(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        Y(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], r = !0);
    },
    p(u, [f]) {
      le(e, o = oe(a, [
        f & /*className*/
        4 && t !== (t = x({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
        f & /*resizable, style*/
        24 && l !== (l = `${/*resizable*/
        u[4] ? "" : "resize: none; "}${/*style*/
        u[3]}`) && { style: l },
        f & /*internalAttrs*/
        64 && /*internalAttrs*/
        u[6],
        f & /*$$restProps*/
        512 && /*$$restProps*/
        u[9]
      ])), i && me(i.update) && f & /*use*/
      2 && i.update.call(
        null,
        /*use*/
        u[1]
      ), f & /*value*/
      1 && dn(
        e,
        /*value*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && T(e), n[21](null), r = !1, de(s);
    }
  };
}
function zr(n, e, t) {
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
  const r = Ue(Se());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: f = !1 } = e, { invalid: c = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: h = !0 } = e, b, p = {};
  Ne(() => {
    d && t(11, c = b.matches(":invalid"));
  });
  function _() {
    t(10, f = !0), d && t(11, c = b.matches(":invalid"));
  }
  function k(y) {
    var B;
    return y in p ? (B = p[y]) !== null && B !== void 0 ? B : null : H().getAttribute(y);
  }
  function v(y, B) {
    p[y] !== B && t(6, p[y] = B, p);
  }
  function w(y) {
    (!(y in p) || p[y] != null) && t(6, p[y] = void 0, p);
  }
  function g() {
    H().focus();
  }
  function U() {
    H().blur();
  }
  function H() {
    return b;
  }
  function m(y) {
    Ft.call(this, n, y);
  }
  function L(y) {
    Ft.call(this, n, y);
  }
  function q(y) {
    ee[y ? "unshift" : "push"](() => {
      b = y, t(5, b);
    });
  }
  function M() {
    u = this.value, t(0, u);
  }
  return n.$$set = (y) => {
    e = G(G({}, e), De(y)), t(9, i = ue(e, l)), "use" in y && t(1, s = y.use), "class" in y && t(2, a = y.class), "style" in y && t(3, o = y.style), "value" in y && t(0, u = y.value), "dirty" in y && t(10, f = y.dirty), "invalid" in y && t(11, c = y.invalid), "updateInvalid" in y && t(12, d = y.updateInvalid), "resizable" in y && t(4, h = y.resizable);
  }, [
    u,
    s,
    a,
    o,
    h,
    b,
    p,
    r,
    _,
    i,
    f,
    c,
    d,
    k,
    v,
    w,
    g,
    U,
    H,
    m,
    L,
    q,
    M
  ];
}
class Wr extends ne {
  constructor(e) {
    super(), te(this, e, zr, jr, Q, {
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
const Zr = (n) => ({}), Rn = (n) => ({}), Xr = (n) => ({}), Hn = (n) => ({}), Kr = (n) => ({}), Dn = (n) => ({}), Yr = (n) => ({}), Mn = (n) => ({}), Jr = (n) => ({}), Tn = (n) => ({}), Qr = (n) => ({}), On = (n) => ({}), xr = (n) => ({}), Un = (n) => ({}), $r = (n) => ({}), Fn = (n) => ({}), es = (n) => ({}), Bn = (n) => ({}), ts = (n) => ({}), Pn = (n) => ({}), ns = (n) => ({}), qn = (n) => ({}), ls = (n) => ({}), Nn = (n) => ({});
function is(n) {
  let e, t, l, i, r, s, a, o, u, f, c, d, h, b;
  const p = (
    /*#slots*/
    n[56].label
  ), _ = ie(
    p,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  l = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ss] },
      $$scope: { ctx: n }
    }
  });
  const k = (
    /*#slots*/
    n[56].default
  ), v = ie(
    k,
    n,
    /*$$scope*/
    n[87],
    null
  );
  s = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [as] },
      $$scope: { ctx: n }
    }
  });
  const w = (
    /*#slots*/
    n[56].ripple
  ), g = ie(
    w,
    n,
    /*$$scope*/
    n[87],
    Hn
  );
  let U = [
    {
      class: o = x({
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
      ).map(Qn).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    ht(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], H = {};
  for (let m = 0; m < U.length; m += 1)
    H = G(H, U[m]);
  return {
    c() {
      e = P("div"), _ && _.c(), t = V(), Z(l.$$.fragment), i = V(), v && v.c(), r = V(), Z(s.$$.fragment), a = V(), g && g.c(), le(e, H);
    },
    m(m, L) {
      O(m, e, L), _ && _.m(e, null), F(e, t), z(l, e, null), F(e, i), v && v.m(e, null), F(e, r), z(s, e, null), F(e, a), g && g.m(e, null), n[82](e), d = !0, h || (b = [
        J(f = yt.call(null, e, {
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
        J(c = we.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        J(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], h = !0);
    },
    p(m, L) {
      _ && _.p && (!d || L[2] & /*$$scope*/
      33554432) && se(
        _,
        p,
        m,
        /*$$scope*/
        m[87],
        d ? re(
          p,
          /*$$scope*/
          m[87],
          L,
          Jr
        ) : ae(
          /*$$scope*/
          m[87]
        ),
        Tn
      );
      const q = {};
      L[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: L, ctx: m }), l.$set(q), v && v.p && (!d || L[2] & /*$$scope*/
      33554432) && se(
        v,
        k,
        m,
        /*$$scope*/
        m[87],
        d ? re(
          k,
          /*$$scope*/
          m[87],
          L,
          null
        ) : ae(
          /*$$scope*/
          m[87]
        ),
        null
      );
      const M = {};
      L[2] & /*$$scope*/
      33554432 && (M.$$scope = { dirty: L, ctx: m }), s.$set(M), g && g.p && (!d || L[2] & /*$$scope*/
      33554432) && se(
        g,
        w,
        m,
        /*$$scope*/
        m[87],
        d ? re(
          w,
          /*$$scope*/
          m[87],
          L,
          Xr
        ) : ae(
          /*$$scope*/
          m[87]
        ),
        Hn
      ), le(e, H = oe(U, [
        (!d || L[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | L[1] & /*$$slots*/
        65536 && o !== (o = x({
          [
            /*className*/
            m[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            m[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            m[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            m[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            m[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            m[15] === "standard" && !/*textarea*/
            m[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            m[16] || !/*$$slots*/
            m[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            m[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            m[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            m[1]
          ),
          .../*internalClasses*/
          m[25]
        }))) && { class: o },
        (!d || L[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          m[26]
        ).map(Qn).concat([
          /*style*/
          m[10]
        ]).join(" "))) && { style: u },
        L[1] & /*$$restProps*/
        32768 && ht(
          /*$$restProps*/
          m[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), f && me(f.update) && L[0] & /*ripple*/
      2048 && f.update.call(null, {
        ripple: (
          /*ripple*/
          m[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          m[43]
        ),
        removeClass: (
          /*removeClass*/
          m[44]
        ),
        addStyle: (
          /*addStyle*/
          m[45]
        )
      }), c && me(c.update) && L[0] & /*use*/
      256 && c.update.call(
        null,
        /*use*/
        m[8]
      );
    },
    i(m) {
      d || (A(_, m), A(l.$$.fragment, m), A(v, m), A(s.$$.fragment, m), A(g, m), d = !0);
    },
    o(m) {
      S(_, m), S(l.$$.fragment, m), S(v, m), S(s.$$.fragment, m), S(g, m), d = !1;
    },
    d(m) {
      m && T(e), _ && _.d(m), W(l), v && v.d(m), W(s), g && g.d(m), n[82](null), h = !1, de(b);
    }
  };
}
function rs(n) {
  let e, t, l, i, r, s, a, o, u, f, c, d, h, b, p, _, k, v, w = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Gn(n), g = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && zn(n)
  );
  i = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [cs] },
      $$scope: { ctx: n }
    }
  });
  const U = (
    /*#slots*/
    n[56].default
  ), H = ie(
    U,
    n,
    /*$$scope*/
    n[87],
    null
  ), m = [hs, ds], L = [];
  function q(E, K) {
    return (
      /*textarea*/
      E[14] && typeof /*value*/
      E[0] == "string" ? 0 : 1
    );
  }
  a = q(n), o = L[a] = m[a](n), f = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [_s] },
      $$scope: { ctx: n }
    }
  });
  let M = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Kn(n), y = [
    {
      class: d = x({
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
      style: h = Object.entries(
        /*internalStyles*/
        n[26]
      ).map(Jn).concat([
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
    ht(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], B = {};
  for (let E = 0; E < y.length; E += 1)
    B = G(B, y[E]);
  return {
    c() {
      e = P("label"), w && w.c(), t = V(), g && g.c(), l = V(), Z(i.$$.fragment), r = V(), H && H.c(), s = V(), o.c(), u = V(), Z(f.$$.fragment), c = V(), M && M.c(), le(e, B);
    },
    m(E, K) {
      O(E, e, K), w && w.m(e, null), F(e, t), g && g.m(e, null), F(e, l), z(i, e, null), F(e, r), H && H.m(e, null), F(e, s), L[a].m(e, null), F(e, u), z(f, e, null), F(e, c), M && M.m(e, null), n[78](e), _ = !0, k || (v = [
        J(b = yt.call(null, e, {
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
        J(p = we.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        J(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        Y(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        Y(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], k = !0);
    },
    p(E, K) {
      !/*textarea*/
      E[14] && /*variant*/
      E[15] !== "outlined" ? w ? (w.p(E, K), K[0] & /*textarea, variant*/
      49152 && A(w, 1)) : (w = Gn(E), w.c(), A(w, 1), w.m(e, t)) : w && (fe(), S(w, 1, 1, () => {
        w = null;
      }), ce()), /*textarea*/
      E[14] || /*variant*/
      E[15] === "outlined" ? g ? (g.p(E, K), K[0] & /*textarea, variant*/
      49152 && A(g, 1)) : (g = zn(E), g.c(), A(g, 1), g.m(e, l)) : g && (fe(), S(g, 1, 1, () => {
        g = null;
      }), ce());
      const Ie = {};
      K[2] & /*$$scope*/
      33554432 && (Ie.$$scope = { dirty: K, ctx: E }), i.$set(Ie), H && H.p && (!_ || K[2] & /*$$scope*/
      33554432) && se(
        H,
        U,
        E,
        /*$$scope*/
        E[87],
        _ ? re(
          U,
          /*$$scope*/
          E[87],
          K,
          null
        ) : ae(
          /*$$scope*/
          E[87]
        ),
        null
      );
      let ye = a;
      a = q(E), a === ye ? L[a].p(E, K) : (fe(), S(L[ye], 1, 1, () => {
        L[ye] = null;
      }), ce(), o = L[a], o ? o.p(E, K) : (o = L[a] = m[a](E), o.c()), A(o, 1), o.m(e, u));
      const be = {};
      K[2] & /*$$scope*/
      33554432 && (be.$$scope = { dirty: K, ctx: E }), f.$set(be), !/*textarea*/
      E[14] && /*variant*/
      E[15] !== "outlined" && /*ripple*/
      E[11] ? M ? (M.p(E, K), K[0] & /*textarea, variant, ripple*/
      51200 && A(M, 1)) : (M = Kn(E), M.c(), A(M, 1), M.m(e, null)) : M && (fe(), S(M, 1, 1, () => {
        M = null;
      }), ce()), le(e, B = oe(y, [
        (!_ || K[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | K[1] & /*$$slots*/
        65536 && d !== (d = x({
          [
            /*className*/
            E[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            E[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            E[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            E[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            E[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            E[15] === "standard" && !/*textarea*/
            E[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            E[16] || /*label*/
            E[17] == null && !/*$$slots*/
            E[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            E[28] || /*value*/
            E[0] != null && /*value*/
            E[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            E[35](
              /*withLeadingIcon*/
              E[22]
            ) ? (
              /*$$slots*/
              E[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              E[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            E[35](
              /*withTrailingIcon*/
              E[23]
            ) ? (
              /*$$slots*/
              E[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              E[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            E[14] && /*$$slots*/
            E[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            E[1]
          ),
          .../*internalClasses*/
          E[25]
        }))) && { class: d },
        (!_ || K[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          E[26]
        ).map(Jn).concat([
          /*style*/
          E[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        K[1] & /*$$restProps*/
        32768 && ht(
          /*$$restProps*/
          E[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), b && me(b.update) && K[0] & /*textarea, variant*/
      49152 | K[1] & /*inputElement*/
      4 && b.update.call(null, {
        ripple: !/*textarea*/
        E[14] && /*variant*/
        E[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          E[43]
        ),
        removeClass: (
          /*removeClass*/
          E[44]
        ),
        addStyle: (
          /*addStyle*/
          E[45]
        ),
        eventTarget: (
          /*inputElement*/
          E[33]
        ),
        activeTarget: (
          /*inputElement*/
          E[33]
        ),
        initPromise: (
          /*initPromise*/
          E[37]
        )
      }), p && me(p.update) && K[0] & /*use*/
      256 && p.update.call(
        null,
        /*use*/
        E[8]
      );
    },
    i(E) {
      _ || (A(w), A(g), A(i.$$.fragment, E), A(H, E), A(o), A(f.$$.fragment, E), A(M), _ = !0);
    },
    o(E) {
      S(w), S(g), S(i.$$.fragment, E), S(H, E), S(o), S(f.$$.fragment, E), S(M), _ = !1;
    },
    d(E) {
      E && T(e), w && w.d(), g && g.d(), W(i), H && H.d(E), L[a].d(), W(f), M && M.d(), n[78](null), k = !1, de(v);
    }
  };
}
function ss(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = ie(
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
      33554432) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? re(
          t,
          /*$$scope*/
          i[87],
          r,
          Yr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Mn
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function as(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ie(
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
      33554432) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? re(
          t,
          /*$$scope*/
          i[87],
          r,
          Kr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Dn
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Gn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && Vn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && jn(n);
  return {
    c() {
      i && i.c(), e = V(), r && r.c(), t = Ce();
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
      65536 && A(r, 1)) : (r = jn(s), r.c(), A(r, 1), r.m(t.parentNode, t)) : r && (fe(), S(r, 1, 1, () => {
        r = null;
      }), ce());
    },
    i(s) {
      l || (A(r), l = !0);
    },
    o(s) {
      S(r), l = !1;
    },
    d(s) {
      s && (T(e), T(t)), i && i.d(s), r && r.d(s);
    }
  };
}
function Vn(n) {
  let e;
  return {
    c() {
      e = P("span"), R(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
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
    $$slots: { default: [os] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = G(i, l[r]);
  return e = new Bl({ props: i }), n[57](e), {
    c() {
      Z(e.$$.fragment);
    },
    m(r, s) {
      z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? oe(l, [
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
        32768 && ke(Ee(
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
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), W(e, r);
    }
  };
}
function os(n) {
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
  ), r = ie(
    i,
    n,
    /*$$scope*/
    n[87],
    Nn
  );
  return {
    c() {
      t = pe(e), r && r.c();
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
      )) + "") && Me(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && se(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? re(
          i,
          /*$$scope*/
          s[87],
          a,
          ls
        ) : ae(
          /*$$scope*/
          s[87]
        ),
        Nn
      );
    },
    i(s) {
      l || (A(r, s), l = !0);
    },
    o(s) {
      S(r, s), l = !1;
    },
    d(s) {
      s && T(t), r && r.d(s);
    }
  };
}
function zn(n) {
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
    $$slots: { default: [fs] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = G(i, l[r]);
  return e = new Dr({ props: i }), n[59](e), {
    c() {
      Z(e.$$.fragment);
    },
    m(r, s) {
      z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots, $$restProps*/
      98304 ? oe(l, [
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
        32768 && ke(Ee(
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
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), W(e, r);
    }
  };
}
function Wn(n) {
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
    $$slots: { default: [us] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = G(i, l[r]);
  return e = new Bl({ props: i }), n[58](e), {
    c() {
      Z(e.$$.fragment);
    },
    m(r, s) {
      z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? oe(l, [
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
        32768 && ke(Ee(
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
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), W(e, r);
    }
  };
}
function us(n) {
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
  ), r = ie(
    i,
    n,
    /*$$scope*/
    n[87],
    qn
  );
  return {
    c() {
      t = pe(e), r && r.c();
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
      )) + "") && Me(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && se(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? re(
          i,
          /*$$scope*/
          s[87],
          a,
          ns
        ) : ae(
          /*$$scope*/
          s[87]
        ),
        qn
      );
    },
    i(s) {
      l || (A(r, s), l = !0);
    },
    o(s) {
      S(r, s), l = !1;
    },
    d(s) {
      s && T(t), r && r.d(s);
    }
  };
}
function fs(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Wn(n);
  return {
    c() {
      l && l.c(), e = Ce();
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
      65536 && A(l, 1)) : (l = Wn(i), l.c(), A(l, 1), l.m(e.parentNode, e)) : l && (fe(), S(l, 1, 1, () => {
        l = null;
      }), ce());
    },
    i(i) {
      t || (A(l), t = !0);
    },
    o(i) {
      S(l), t = !1;
    },
    d(i) {
      i && T(e), l && l.d(i);
    }
  };
}
function cs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = ie(
    t,
    n,
    /*$$scope*/
    n[87],
    Pn
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
      33554432) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? re(
          t,
          /*$$scope*/
          i[87],
          r,
          ts
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Pn
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ds(n) {
  let e, t, l, i, r, s, a, o, u, f;
  const c = (
    /*#slots*/
    n[56].prefix
  ), d = ie(
    c,
    n,
    /*$$scope*/
    n[87],
    Fn
  );
  let h = (
    /*prefix*/
    n[20] != null && Zn(n)
  );
  const b = [
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
  function p(m) {
    n[69](m);
  }
  function _(m) {
    n[70](m);
  }
  function k(m) {
    n[71](m);
  }
  function v(m) {
    n[72](m);
  }
  let w = {};
  for (let m = 0; m < b.length; m += 1)
    w = G(w, b[m]);
  /*value*/
  n[0] !== void 0 && (w.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (w.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (w.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (w.invalid = /*invalid*/
  n[1]), l = new Vr({ props: w }), n[68](l), ee.push(() => Ye(l, "value", p)), ee.push(() => Ye(l, "files", _)), ee.push(() => Ye(l, "dirty", k)), ee.push(() => Ye(l, "invalid", v)), l.$on(
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
    n[21] != null && Xn(n)
  );
  const U = (
    /*#slots*/
    n[56].suffix
  ), H = ie(
    U,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  return {
    c() {
      d && d.c(), e = V(), h && h.c(), t = V(), Z(l.$$.fragment), o = V(), g && g.c(), u = V(), H && H.c();
    },
    m(m, L) {
      d && d.m(m, L), O(m, e, L), h && h.m(m, L), O(m, t, L), z(l, m, L), O(m, o, L), g && g.m(m, L), O(m, u, L), H && H.m(m, L), f = !0;
    },
    p(m, L) {
      d && d.p && (!f || L[2] & /*$$scope*/
      33554432) && se(
        d,
        c,
        m,
        /*$$scope*/
        m[87],
        f ? re(
          c,
          /*$$scope*/
          m[87],
          L,
          $r
        ) : ae(
          /*$$scope*/
          m[87]
        ),
        Fn
      ), /*prefix*/
      m[20] != null ? h ? (h.p(m, L), L[0] & /*prefix*/
      1048576 && A(h, 1)) : (h = Zn(m), h.c(), A(h, 1), h.m(t.parentNode, t)) : h && (fe(), S(h, 1, 1, () => {
        h = null;
      }), ce());
      const q = L[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | L[1] & /*$$restProps*/
      32768 ? oe(b, [
        L[0] & /*type*/
        262144 && { type: (
          /*type*/
          m[18]
        ) },
        L[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          m[12]
        ) },
        L[0] & /*required*/
        8192 && { required: (
          /*required*/
          m[13]
        ) },
        L[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          m[19]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          m[27]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          m[27]
        ) },
        L[0] & /*noLabel, label*/
        196608 && ke(
          /*noLabel*/
          m[16] && /*label*/
          m[17] != null ? { placeholder: (
            /*label*/
            m[17]
          ) } : {}
        ),
        L[1] & /*$$restProps*/
        32768 && ke(Ee(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && L[0] & /*value*/
      1 && (i = !0, q.value = /*value*/
      m[0], Ke(() => i = !1)), !r && L[0] & /*files*/
      8 && (r = !0, q.files = /*files*/
      m[3], Ke(() => r = !1)), !s && L[0] & /*dirty*/
      16 && (s = !0, q.dirty = /*dirty*/
      m[4], Ke(() => s = !1)), !a && L[0] & /*invalid*/
      2 && (a = !0, q.invalid = /*invalid*/
      m[1], Ke(() => a = !1)), l.$set(q), /*suffix*/
      m[21] != null ? g ? (g.p(m, L), L[0] & /*suffix*/
      2097152 && A(g, 1)) : (g = Xn(m), g.c(), A(g, 1), g.m(u.parentNode, u)) : g && (fe(), S(g, 1, 1, () => {
        g = null;
      }), ce()), H && H.p && (!f || L[2] & /*$$scope*/
      33554432) && se(
        H,
        U,
        m,
        /*$$scope*/
        m[87],
        f ? re(
          U,
          /*$$scope*/
          m[87],
          L,
          xr
        ) : ae(
          /*$$scope*/
          m[87]
        ),
        Un
      );
    },
    i(m) {
      f || (A(d, m), A(h), A(l.$$.fragment, m), A(g), A(H, m), f = !0);
    },
    o(m) {
      S(d, m), S(h), S(l.$$.fragment, m), S(g), S(H, m), f = !1;
    },
    d(m) {
      m && (T(e), T(t), T(o), T(u)), d && d.d(m), h && h.d(m), n[68](null), W(l, m), g && g.d(m), H && H.d(m);
    }
  };
}
function hs(n) {
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
  function f(_) {
    n[61](_);
  }
  function c(_) {
    n[62](_);
  }
  function d(_) {
    n[63](_);
  }
  let h = {};
  for (let _ = 0; _ < u.length; _ += 1)
    h = G(h, u[_]);
  /*value*/
  n[0] !== void 0 && (h.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (h.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (h.invalid = /*invalid*/
  n[1]), t = new Wr({ props: h }), n[60](t), ee.push(() => Ye(t, "value", f)), ee.push(() => Ye(t, "dirty", c)), ee.push(() => Ye(t, "invalid", d)), t.$on(
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
  const b = (
    /*#slots*/
    n[56].internalCounter
  ), p = ie(
    b,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  return {
    c() {
      e = P("span"), Z(t.$$.fragment), s = V(), p && p.c(), R(e, "class", a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(_, k) {
      O(_, e, k), z(t, e, null), F(e, s), p && p.m(e, null), o = !0;
    },
    p(_, k) {
      const v = k[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | k[1] & /*$$restProps*/
      32768 ? oe(u, [
        k[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          _[12]
        ) },
        k[0] & /*required*/
        8192 && { required: (
          /*required*/
          _[13]
        ) },
        k[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          _[19]
        ) },
        k[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          _[27]
        ) },
        k[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          _[27]
        ) },
        k[1] & /*$$restProps*/
        32768 && ke(Ee(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !l && k[0] & /*value*/
      1 && (l = !0, v.value = /*value*/
      _[0], Ke(() => l = !1)), !i && k[0] & /*dirty*/
      16 && (i = !0, v.dirty = /*dirty*/
      _[4], Ke(() => i = !1)), !r && k[0] & /*invalid*/
      2 && (r = !0, v.invalid = /*invalid*/
      _[1], Ke(() => r = !1)), t.$set(v), p && p.p && (!o || k[2] & /*$$scope*/
      33554432) && se(
        p,
        b,
        _,
        /*$$scope*/
        _[87],
        o ? re(
          b,
          /*$$scope*/
          _[87],
          k,
          es
        ) : ae(
          /*$$scope*/
          _[87]
        ),
        Bn
      ), (!o || k[1] & /*$$restProps*/
      32768 && a !== (a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        _[46]) || /*$$restProps*/
        _[46].input$resizable
      }))) && R(e, "class", a);
    },
    i(_) {
      o || (A(t.$$.fragment, _), A(p, _), o = !0);
    },
    o(_) {
      S(t.$$.fragment, _), S(p, _), o = !1;
    },
    d(_) {
      _ && T(e), n[60](null), W(t), p && p.d(_);
    }
  };
}
function Zn(n) {
  let e, t;
  return e = new Br({
    props: {
      $$slots: { default: [ms] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function ms(n) {
  let e;
  return {
    c() {
      e = pe(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      O(t, e, l);
    },
    p(t, l) {
      l[0] & /*prefix*/
      1048576 && Me(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && T(e);
    }
  };
}
function Xn(n) {
  let e, t;
  return e = new Pr({
    props: {
      $$slots: { default: [gs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*suffix*/
      2097152 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function gs(n) {
  let e;
  return {
    c() {
      e = pe(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      O(t, e, l);
    },
    p(t, l) {
      l[0] & /*suffix*/
      2097152 && Me(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && T(e);
    }
  };
}
function _s(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ie(
    t,
    n,
    /*$$scope*/
    n[87],
    On
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
      33554432) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? re(
          t,
          /*$$scope*/
          i[87],
          r,
          Qr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        On
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Kn(n) {
  let e, t;
  const l = [Ee(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = G(i, l[r]);
  return e = new Er({ props: i }), n[77](e), {
    c() {
      Z(e.$$.fragment);
    },
    m(r, s) {
      z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? oe(l, [ke(Ee(
        /*$$restProps*/
        r[46],
        "ripple$"
      ))]) : {};
      e.$set(a);
    },
    i(r) {
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), W(e, r);
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
    $$slots: { default: [ps] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = G(i, l[r]);
  return e = new Fr({ props: i }), e.$on(
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
      Z(e.$$.fragment);
    },
    m(r, s) {
      z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? oe(l, [ke(Ee(
        /*$$restProps*/
        r[46],
        "helperLine$"
      ))]) : {};
      s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      W(e, r);
    }
  };
}
function ps(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = ie(
    t,
    n,
    /*$$scope*/
    n[87],
    Rn
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
      33554432) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? re(
          t,
          /*$$scope*/
          i[87],
          r,
          Zr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Rn
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function bs(n) {
  let e, t, l, i, r;
  const s = [rs, is], a = [];
  function o(f, c) {
    return (
      /*valued*/
      f[36] ? 0 : 1
    );
  }
  e = o(n), t = a[e] = s[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Yn(n)
  );
  return {
    c() {
      t.c(), l = V(), u && u.c(), i = Ce();
    },
    m(f, c) {
      a[e].m(f, c), O(f, l, c), u && u.m(f, c), O(f, i, c), r = !0;
    },
    p(f, c) {
      t.p(f, c), /*$$slots*/
      f[47].helper ? u ? (u.p(f, c), c[1] & /*$$slots*/
      65536 && A(u, 1)) : (u = Yn(f), u.c(), A(u, 1), u.m(i.parentNode, i)) : u && (fe(), S(u, 1, 1, () => {
        u = null;
      }), ce());
    },
    i(f) {
      r || (A(t), A(u), r = !0);
    },
    o(f) {
      S(t), S(u), r = !1;
    },
    d(f) {
      f && (T(l), T(i)), a[e].d(f), u && u.d(f);
    }
  };
}
const Jn = ([n, e]) => `${n}: ${e};`, Qn = ([n, e]) => `${n}: ${e};`;
function vs(n, e, t) {
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
  const o = sn(s), { applyPassive: u } = Ol, f = Ue(Se());
  let c = () => {
  };
  function d(I) {
    return I === c;
  }
  let { use: h = [] } = e, { class: b = "" } = e, { style: p = "" } = e, { ripple: _ = !0 } = e, { disabled: k = !1 } = e, { required: v = !1 } = e, { textarea: w = !1 } = e, { variant: g = w ? "outlined" : "standard" } = e, { noLabel: U = !1 } = e, { label: H = void 0 } = e, { type: m = "text" } = e, { value: L = r.input$emptyValueUndefined ? void 0 : c } = e, { files: q = c } = e;
  const M = !d(L) || !d(q);
  d(L) && (L = void 0), d(q) && (q = null);
  let { invalid: y = c } = e, { updateInvalid: B = d(y) } = e;
  d(y) && (y = !1);
  let { dirty: E = !1 } = e, { prefix: K = void 0 } = e, { suffix: Ie = void 0 } = e, { validateOnValueChange: ye = B } = e, { useNativeValidation: be = B } = e, { withLeadingIcon: j = c } = e, { withTrailingIcon: C = c } = e, { input: N = void 0 } = e, { floatingLabel: ge = void 0 } = e, { lineRipple: ve = void 0 } = e, { notchedOutline: Pe = void 0 } = e, Ge, he, Ve = {}, Xe = {}, Qe, xe = !1, St = Fe("SMUI:addLayoutListener"), pt, bt, je = new Promise((I) => bt = I), $e, et, rt, tt, vt = L;
  St && (pt = St(on)), Ne(() => {
    if (t(54, he = new Ir(
      {
        // getRootAdapterMethods_
        addClass: Et,
        removeClass: Rt,
        hasClass: Ct,
        registerTextFieldInteractionHandler: (I, Ae) => Ht().addEventListener(I, Ae),
        deregisterTextFieldInteractionHandler: (I, Ae) => Ht().removeEventListener(I, Ae),
        registerValidationAttributeChangeHandler: (I) => {
          const Ae = (zt) => zt.map((Wt) => Wt.attributeName).filter((Wt) => Wt), un = new MutationObserver((zt) => {
            be && I(Ae(zt));
          }), Ii = { attributes: !0 };
          return N && un.observe(N.getElement(), Ii), un;
        },
        deregisterValidationAttributeChangeHandler: (I) => {
          I.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var I;
          return (I = N == null ? void 0 : N.getElement()) !== null && I !== void 0 ? I : null;
        },
        setInputAttr: (I, Ae) => {
          N == null || N.addAttr(I, Ae);
        },
        removeInputAttr: (I) => {
          N == null || N.removeAttr(I);
        },
        isFocused: () => document.activeElement === (N == null ? void 0 : N.getElement()),
        registerInputInteractionHandler: (I, Ae) => {
          N == null || N.getElement().addEventListener(I, Ae, u());
        },
        deregisterInputInteractionHandler: (I, Ae) => {
          N == null || N.getElement().removeEventListener(I, Ae, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (I) => ge && ge.float(I),
        getLabelWidth: () => ge ? ge.getWidth() : 0,
        hasLabel: () => !!ge,
        shakeLabel: (I) => ge && ge.shake(I),
        setLabelRequired: (I) => ge && ge.setRequired(I),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => ve && ve.activate(),
        deactivateLineRipple: () => ve && ve.deactivate(),
        setLineRippleTransformOrigin: (I) => ve && ve.setRippleCenter(I),
        // getOutlineAdapterMethods_
        closeOutline: () => Pe && Pe.closeNotch(),
        hasOutline: () => !!Pe,
        notchOutline: (I) => Pe && Pe.notch(I)
      },
      {
        get helperText() {
          return rt;
        },
        get characterCounter() {
          return tt;
        },
        get leadingIcon() {
          return $e;
        },
        get trailingIcon() {
          return et;
        }
      }
    )), M) {
      if (N == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      he.init();
    } else
      Mi().then(() => {
        if (N == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        he.init();
      });
    return bt(), () => {
      he.destroy();
    };
  }), Nt(() => {
    pt && pt();
  });
  function jt(I) {
    t(29, $e = I.detail);
  }
  function D(I) {
    t(30, et = I.detail);
  }
  function X(I) {
    t(32, tt = I.detail);
  }
  function Le(I) {
    t(27, Qe = I.detail);
  }
  function Lt(I) {
    t(31, rt = I.detail);
  }
  function Ct(I) {
    var Ae;
    return I in Ve ? (Ae = Ve[I]) !== null && Ae !== void 0 ? Ae : null : Ht().classList.contains(I);
  }
  function Et(I) {
    Ve[I] || t(25, Ve[I] = !0, Ve);
  }
  function Rt(I) {
    (!(I in Ve) || Ve[I]) && t(25, Ve[I] = !1, Ve);
  }
  function Vl(I, Ae) {
    Xe[I] != Ae && (Ae === "" || Ae == null ? (delete Xe[I], t(26, Xe)) : t(26, Xe[I] = Ae, Xe));
  }
  function jl() {
    N == null || N.focus();
  }
  function zl() {
    N == null || N.blur();
  }
  function on() {
    if (he) {
      const I = he.shouldFloat;
      he.notchOutline(I);
    }
  }
  function Ht() {
    return Ge;
  }
  function Wl(I) {
    ee[I ? "unshift" : "push"](() => {
      ge = I, t(5, ge);
    });
  }
  function Zl(I) {
    ee[I ? "unshift" : "push"](() => {
      ge = I, t(5, ge);
    });
  }
  function Xl(I) {
    ee[I ? "unshift" : "push"](() => {
      Pe = I, t(7, Pe);
    });
  }
  function Kl(I) {
    ee[I ? "unshift" : "push"](() => {
      N = I, t(2, N);
    });
  }
  function Yl(I) {
    L = I, t(0, L);
  }
  function Jl(I) {
    E = I, t(4, E);
  }
  function Ql(I) {
    y = I, t(1, y), t(54, he), t(19, B);
  }
  const xl = () => t(28, xe = !1), $l = () => t(28, xe = !0), ei = (I) => _e(Ge, "blur", I), ti = (I) => _e(Ge, "focus", I);
  function ni(I) {
    ee[I ? "unshift" : "push"](() => {
      N = I, t(2, N);
    });
  }
  function li(I) {
    L = I, t(0, L);
  }
  function ii(I) {
    q = I, t(3, q);
  }
  function ri(I) {
    E = I, t(4, E);
  }
  function si(I) {
    y = I, t(1, y), t(54, he), t(19, B);
  }
  const ai = () => t(28, xe = !1), oi = () => t(28, xe = !0), ui = (I) => _e(Ge, "blur", I), fi = (I) => _e(Ge, "focus", I);
  function ci(I) {
    ee[I ? "unshift" : "push"](() => {
      ve = I, t(6, ve);
    });
  }
  function di(I) {
    ee[I ? "unshift" : "push"](() => {
      Ge = I, t(24, Ge);
    });
  }
  const hi = () => t(29, $e = void 0), mi = () => t(30, et = void 0), gi = () => t(32, tt = void 0);
  function _i(I) {
    ee[I ? "unshift" : "push"](() => {
      Ge = I, t(24, Ge);
    });
  }
  const pi = () => t(29, $e = void 0), bi = () => t(30, et = void 0), vi = () => {
    t(27, Qe = void 0), t(31, rt = void 0);
  }, Ci = () => t(32, tt = void 0);
  return n.$$set = (I) => {
    e = G(G({}, e), De(I)), t(46, r = ue(e, i)), "use" in I && t(8, h = I.use), "class" in I && t(9, b = I.class), "style" in I && t(10, p = I.style), "ripple" in I && t(11, _ = I.ripple), "disabled" in I && t(12, k = I.disabled), "required" in I && t(13, v = I.required), "textarea" in I && t(14, w = I.textarea), "variant" in I && t(15, g = I.variant), "noLabel" in I && t(16, U = I.noLabel), "label" in I && t(17, H = I.label), "type" in I && t(18, m = I.type), "value" in I && t(0, L = I.value), "files" in I && t(3, q = I.files), "invalid" in I && t(1, y = I.invalid), "updateInvalid" in I && t(19, B = I.updateInvalid), "dirty" in I && t(4, E = I.dirty), "prefix" in I && t(20, K = I.prefix), "suffix" in I && t(21, Ie = I.suffix), "validateOnValueChange" in I && t(48, ye = I.validateOnValueChange), "useNativeValidation" in I && t(49, be = I.useNativeValidation), "withLeadingIcon" in I && t(22, j = I.withLeadingIcon), "withTrailingIcon" in I && t(23, C = I.withTrailingIcon), "input" in I && t(2, N = I.input), "floatingLabel" in I && t(5, ge = I.floatingLabel), "lineRipple" in I && t(6, ve = I.lineRipple), "notchedOutline" in I && t(7, Pe = I.notchedOutline), "$$scope" in I && t(87, a = I.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = N && N.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && he && he.isValid() !== !y && (B ? t(1, y = !he.isValid()) : he.setValid(!y)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && he && he.getValidateOnValueChange() !== ye && he.setValidateOnValueChange(d(ye) ? !1 : ye), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && he && he.setUseNativeValidation(d(be) ? !0 : be), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && he && he.setDisabled(k), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && he && M && vt !== L) {
      t(55, vt = L);
      const I = `${L}`;
      he.getValue() !== I && he.setValue(I);
    }
  }, [
    L,
    y,
    N,
    q,
    E,
    ge,
    ve,
    Pe,
    h,
    b,
    p,
    _,
    k,
    v,
    w,
    g,
    U,
    H,
    m,
    B,
    K,
    Ie,
    j,
    C,
    Ge,
    Ve,
    Xe,
    Qe,
    xe,
    $e,
    et,
    rt,
    tt,
    l,
    f,
    d,
    M,
    je,
    jt,
    D,
    X,
    Le,
    Lt,
    Et,
    Rt,
    Vl,
    r,
    o,
    ye,
    be,
    jl,
    zl,
    on,
    Ht,
    he,
    vt,
    s,
    Wl,
    Zl,
    Xl,
    Kl,
    Yl,
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
    si,
    ai,
    oi,
    ui,
    fi,
    ci,
    di,
    hi,
    mi,
    gi,
    _i,
    pi,
    bi,
    vi,
    Ci,
    a
  ];
}
class Cs extends ne {
  constructor(e) {
    super(), te(
      this,
      e,
      vs,
      bs,
      Q,
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
function Is(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[8].default
  ), o = ie(
    a,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = x({
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
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = G(f, u[c]);
  return {
    c() {
      e = P("span"), o && o.c(), le(e, f);
    },
    m(c, d) {
      O(c, e, d), o && o.m(e, null), n[9](e), i = !0, r || (s = [
        J(l = we.call(
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
    p(c, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      128) && se(
        o,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? re(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : ae(
          /*$$scope*/
          c[7]
        ),
        null
      ), le(e, f = oe(u, [
        (!i || d & /*className*/
        2 && t !== (t = x({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            c[4]
          )
        }))) && { class: t },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        c[5]
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(o, c), i = !0);
    },
    o(c) {
      S(o, c), i = !1;
    },
    d(c) {
      c && T(e), o && o.d(c), n[9](null), r = !1, de(s);
    }
  };
}
function ys(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ue(Se());
  let { use: o = [] } = e, { class: u = "" } = e, f, c = Fe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return f;
  }
  function h(b) {
    ee[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  return n.$$set = (b) => {
    e = G(G({}, e), De(b)), t(5, i = ue(e, l)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "$$scope" in b && t(7, s = b.$$scope);
  }, [
    o,
    u,
    f,
    a,
    c,
    i,
    d,
    s,
    r,
    h
  ];
}
class As extends ne {
  constructor(e) {
    super(), te(this, e, ys, Is, Q, { use: 0, class: 1, getElement: 6 });
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
  component: As
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
function ks(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = ie(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = P("span"), i && i.c(), R(e, "class", "oscd-icon");
    },
    m(r, s) {
      O(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && se(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? re(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : ae(
          /*$$scope*/
          r[0]
        ),
        null
      );
    },
    i(r) {
      t || (A(i, r), t = !0);
    },
    o(r) {
      S(i, r), t = !1;
    },
    d(r) {
      r && T(e), i && i.d(r);
    }
  };
}
function ws(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class Gt extends ne {
  constructor(e) {
    super(), te(this, e, ws, ks, Q, {});
  }
}
function Ss(n) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), R(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), R(e, "xmlns", "http://www.w3.org/2000/svg"), R(e, "viewBox", "0 -960 960 960"), R(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && R(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && T(e);
    }
  };
}
function Ls(n) {
  let e, t;
  return e = new Gt({
    props: {
      $$slots: { default: [Ss] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Es(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Rs extends ne {
  constructor(e) {
    super(), te(this, e, Es, Ls, Q, { svgStyles: 0 });
  }
}
function Hs(n) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), R(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), R(e, "xmlns", "http://www.w3.org/2000/svg"), R(e, "viewBox", "0 -960 960 960"), R(e, "width", "24"), R(e, "height", "24"), R(e, "fill", "#004552");
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && T(e);
    }
  };
}
class Ds extends ne {
  constructor(e) {
    super(), te(this, e, null, Hs, Q, {});
  }
}
function Ms(n) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), R(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), R(e, "xmlns", "http://www.w3.org/2000/svg"), R(e, "height", "24px"), R(e, "viewBox", "0 -960 960 960"), R(e, "width", "24px"), R(e, "fill", "#004552");
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && T(e);
    }
  };
}
class Ts extends ne {
  constructor(e) {
    super(), te(this, e, null, Ms, Q, {});
  }
}
function Os(n) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), R(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), R(e, "xmlns", "http://www.w3.org/2000/svg"), R(e, "height", "24px"), R(e, "viewBox", "0 -960 960 960"), R(e, "width", "24px"), R(e, "fill", "#004552");
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && T(e);
    }
  };
}
class Us extends ne {
  constructor(e) {
    super(), te(this, e, null, Os, Q, {});
  }
}
function Fs(n) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), R(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), R(e, "xmlns", "http://www.w3.org/2000/svg"), R(e, "viewBox", "0 -960 960 960"), R(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && R(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && T(e);
    }
  };
}
function Bs(n) {
  let e, t;
  return e = new Gt({
    props: {
      $$slots: { default: [Fs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Ps(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class qs extends ne {
  constructor(e) {
    super(), te(this, e, Ps, Bs, Q, { svgStyles: 0 });
  }
}
function Ns(n) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), R(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), R(e, "xmlns", "http://www.w3.org/2000/svg"), R(e, "viewBox", "0 -960 960 960"), R(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && R(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && T(e);
    }
  };
}
function Gs(n) {
  let e, t;
  return e = new Gt({
    props: {
      $$slots: { default: [Ns] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Vs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class js extends ne {
  constructor(e) {
    super(), te(this, e, Vs, Gs, Q, { svgStyles: 0 });
  }
}
function zs(n) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), R(t, "d", "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"), R(e, "xmlns", "http://www.w3.org/2000/svg"), R(e, "height", "24px"), R(e, "viewBox", "0 -960 960 960"), R(e, "width", "24px"), R(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p: $,
    d(l) {
      l && T(e);
    }
  };
}
function Ws(n) {
  let e, t;
  return e = new Gt({
    props: {
      $$slots: { default: [zs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope*/
      2 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Zs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Xs extends ne {
  constructor(e) {
    super(), te(this, e, Zs, Ws, Q, { svgStyles: 0 });
  }
}
function xn(n) {
  let e, t, l;
  return {
    c() {
      e = P("span"), t = pe(
        /*content*/
        n[0]
      ), R(
        e,
        "id",
        /*id*/
        n[2]
      ), R(e, "role", "tooltip"), R(e, "class", l = "bubble " + /*side*/
      n[1] + " svelte-h101gz");
    },
    m(i, r) {
      O(i, e, r), F(e, t);
    },
    p(i, r) {
      r & /*content*/
      1 && Me(
        t,
        /*content*/
        i[0]
      ), r & /*side*/
      2 && l !== (l = "bubble " + /*side*/
      i[1] + " svelte-h101gz") && R(e, "class", l);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Ks(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[4].default
  ), s = ie(
    r,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let a = (
    /*content*/
    n[0] && xn(n)
  );
  return {
    c() {
      e = P("span"), s && s.c(), t = V(), a && a.c(), R(e, "class", "tt svelte-h101gz"), R(e, "tabindex", "0"), R(e, "aria-describedby", l = /*content*/
      n[0] ? (
        /*id*/
        n[2]
      ) : void 0);
    },
    m(o, u) {
      O(o, e, u), s && s.m(e, null), F(e, t), a && a.m(e, null), i = !0;
    },
    p(o, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      8) && se(
        s,
        r,
        o,
        /*$$scope*/
        o[3],
        i ? re(
          r,
          /*$$scope*/
          o[3],
          u,
          null
        ) : ae(
          /*$$scope*/
          o[3]
        ),
        null
      ), /*content*/
      o[0] ? a ? a.p(o, u) : (a = xn(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), (!i || u & /*content*/
      1 && l !== (l = /*content*/
      o[0] ? (
        /*id*/
        o[2]
      ) : void 0)) && R(e, "aria-describedby", l);
    },
    i(o) {
      i || (A(s, o), i = !0);
    },
    o(o) {
      S(s, o), i = !1;
    },
    d(o) {
      o && T(e), s && s.d(o), a && a.d();
    }
  };
}
function Ys(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { side: s = "top" } = e;
  const a = `tt-${Math.random().toString(36).slice(2)}`;
  return n.$$set = (o) => {
    "content" in o && t(0, r = o.content), "side" in o && t(1, s = o.side), "$$scope" in o && t(3, i = o.$$scope);
  }, [r, s, a, i, l];
}
class Js extends ne {
  constructor(e) {
    super(), te(this, e, Ys, Ks, Q, { content: 0, side: 1 });
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
var ze = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, $n = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, lt = {
  ARIA_SELECTED: $n.ARIA_SELECTED,
  ARIA_SORT: $n.ARIA_SORT
}, qe;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(qe || (qe = {}));
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
var Qs = (
  /** @class */
  function(n) {
    gt(e, n);
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
      return an(this, void 0, void 0, function() {
        return qi(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, ze.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, lt.ARIA_SORT, qe.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, qe.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, ze.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(i, lt.ARIA_SORT), o = qe.NONE;
      a === qe.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, lt.ARIA_SORT, qe.DESCENDING), o = qe.DESCENDING) : a === qe.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, lt.ARIA_SORT, qe.ASCENDING), o = qe.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, lt.ARIA_SORT, qe.ASCENDING), o = qe.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(ze.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ze.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, ze.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, lt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, ze.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, lt.ARIA_SELECTED, "false"));
    }, e;
  }(_t)
);
const xs = (n) => ({}), el = (n) => ({}), $s = (n) => ({}), tl = (n) => ({});
function nl(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), a = ie(
    s,
    n,
    /*$$scope*/
    n[35],
    tl
  );
  return {
    c() {
      e = P("div"), t = P("div"), l = V(), a && a.c(), R(t, "class", "mdc-data-table__scrim"), R(e, "class", "mdc-data-table__progress-indicator"), R(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(ll).join(" "));
    },
    m(o, u) {
      O(o, e, u), F(e, t), F(e, l), a && a.m(e, null), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      16) && se(
        a,
        s,
        o,
        /*$$scope*/
        o[35],
        r ? re(
          s,
          /*$$scope*/
          o[35],
          u,
          $s
        ) : ae(
          /*$$scope*/
          o[35]
        ),
        tl
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(ll).join(" "))) && R(e, "style", i);
    },
    i(o) {
      r || (A(a, o), r = !0);
    },
    o(o) {
      S(a, o), r = !1;
    },
    d(o) {
      o && T(e), a && a.d(o);
    }
  };
}
function ea(n) {
  let e, t, l, i, r, s, a, o, u, f, c, d, h, b;
  const p = (
    /*#slots*/
    n[36].default
  ), _ = ie(
    p,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let k = [
    {
      class: i = x({
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
  ], v = {};
  for (let M = 0; M < k.length; M += 1)
    v = G(v, k[M]);
  let w = [
    {
      class: s = x({
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
  for (let M = 0; M < w.length; M += 1)
    g = G(g, w[M]);
  let U = (
    /*$$slots*/
    n[24].progress && nl(n)
  );
  const H = (
    /*#slots*/
    n[36].paginate
  ), m = ie(
    H,
    n,
    /*$$scope*/
    n[35],
    el
  );
  let L = [
    {
      class: f = x({
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
    ht(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], q = {};
  for (let M = 0; M < L.length; M += 1)
    q = G(q, L[M]);
  return {
    c() {
      e = P("div"), t = P("div"), l = P("table"), _ && _.c(), o = V(), U && U.c(), u = V(), m && m.c(), le(l, v), le(t, g), le(e, q);
    },
    m(M, y) {
      O(M, e, y), F(e, t), F(t, l), _ && _.m(l, null), n[37](t), F(e, o), U && U.m(e, null), F(e, u), m && m.m(e, null), n[38](e), d = !0, h || (b = [
        J(r = we.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        J(a = we.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        J(c = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        Y(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        Y(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        Y(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        Y(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        Y(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        Y(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        Y(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        Y(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        Y(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], h = !0);
    },
    p(M, y) {
      _ && _.p && (!d || y[1] & /*$$scope*/
      16) && se(
        _,
        p,
        M,
        /*$$scope*/
        M[35],
        d ? re(
          p,
          /*$$scope*/
          M[35],
          y,
          null
        ) : ae(
          /*$$scope*/
          M[35]
        ),
        null
      ), le(l, v = oe(k, [
        (!d || y[0] & /*table$class*/
        64 && i !== (i = x({
          [
            /*table$class*/
            M[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        y[0] & /*$$restProps*/
        33554432 && Ee(
          /*$$restProps*/
          M[25],
          "table$"
        )
      ])), r && me(r.update) && y[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        M[5]
      ), le(t, g = oe(w, [
        (!d || y[0] & /*container$class*/
        16 && s !== (s = x({
          [
            /*container$class*/
            M[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        y[0] & /*$$restProps*/
        33554432 && Ee(
          /*$$restProps*/
          M[25],
          "container$"
        )
      ])), a && me(a.update) && y[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        M[3]
      ), /*$$slots*/
      M[24].progress ? U ? (U.p(M, y), y[0] & /*$$slots*/
      16777216 && A(U, 1)) : (U = nl(M), U.c(), A(U, 1), U.m(e, u)) : U && (fe(), S(U, 1, 1, () => {
        U = null;
      }), ce()), m && m.p && (!d || y[1] & /*$$scope*/
      16) && se(
        m,
        H,
        M,
        /*$$scope*/
        M[35],
        d ? re(
          H,
          /*$$scope*/
          M[35],
          y,
          xs
        ) : ae(
          /*$$scope*/
          M[35]
        ),
        el
      ), le(e, q = oe(L, [
        (!d || y[0] & /*className, stickyHeader, internalClasses*/
        4102 && f !== (f = x({
          [
            /*className*/
            M[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            M[2]
          ),
          .../*internalClasses*/
          M[12]
        }))) && { class: f },
        y[0] & /*$$restProps*/
        33554432 && ht(
          /*$$restProps*/
          M[25],
          ["container$", "table$"]
        )
      ])), c && me(c.update) && y[0] & /*use*/
      1 && c.update.call(
        null,
        /*use*/
        M[0]
      );
    },
    i(M) {
      d || (A(_, M), A(U), A(m, M), d = !0);
    },
    o(M) {
      S(_, M), S(U), S(m, M), d = !1;
    },
    d(M) {
      M && T(e), _ && _.d(M), n[37](null), U && U.d(), m && m.d(M), n[38](null), h = !1, de(b);
    }
  };
}
const ll = ([n, e]) => `${n}: ${e};`;
function ta(n, e, t) {
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
  const f = sn(o), { closest: c } = Fl, d = Ue(Se());
  let { use: h = [] } = e, { class: b = "" } = e, { stickyHeader: p = !1 } = e, { sortable: _ = !1 } = e, { sort: k = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: w = "sorted, ascending" } = e, { sortDescendingAriaLabel: g = "sorted, descending" } = e, { container$use: U = [] } = e, { container$class: H = "" } = e, { table$use: m = [] } = e, { table$class: L = "" } = e, q, M, y, B, E, K = {}, Ie = { height: "auto", top: "initial" }, ye = Fe("SMUI:addLayoutListener"), be, j = !1, C = At(!1);
  ft(n, C, (D) => t(34, r = D));
  let N = At(k);
  ft(n, N, (D) => t(45, a = D));
  let ge = At(v);
  ft(n, ge, (D) => t(44, s = D)), Re("SMUI:checkbox:context", "data-table"), Re("SMUI:linear-progress:context", "data-table"), Re("SMUI:linear-progress:closed", C), Re("SMUI:data-table:sortable", _), Re("SMUI:data-table:sort", N), Re("SMUI:data-table:sortDirection", ge), Re("SMUI:data-table:sortAscendingAriaLabel", w), Re("SMUI:data-table:sortDescendingAriaLabel", g), ye && (be = ye(bt));
  let ve;
  Ne(() => (t(7, M = new Qs({
    addClass: Ve,
    removeClass: Xe,
    getHeaderCellElements: () => {
      var D;
      return (D = B == null ? void 0 : B.cells.map((X) => X.element)) !== null && D !== void 0 ? D : [];
    },
    getHeaderCellCount: () => {
      var D;
      return (D = B == null ? void 0 : B.cells.length) !== null && D !== void 0 ? D : 0;
    },
    getAttributeByHeaderCellIndex: (D, X) => {
      var Le;
      return (Le = B == null ? void 0 : B.orderedCells[D].getAttr(X)) !== null && Le !== void 0 ? Le : null;
    },
    setAttributeByHeaderCellIndex: (D, X, Le) => {
      B == null || B.orderedCells[D].addAttr(X, Le);
    },
    setClassNameByHeaderCellIndex: (D, X) => {
      B == null || B.orderedCells[D].addClass(X);
    },
    removeClassNameByHeaderCellIndex: (D, X) => {
      B == null || B.orderedCells[D].removeClass(X);
    },
    notifySortAction: (D) => {
      t(26, k = D.columnId), t(27, v = D.sortValue), _e(je(), "SMUIDataTable:sorted", D, void 0, !0);
    },
    getTableContainerHeight: () => y.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const D = je().querySelector(".mdc-data-table__header-row");
      if (!D)
        throw new Error("MDCDataTable: Table header element not found.");
      return D.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (D) => {
      t(13, Ie = D);
    },
    addClassAtRowIndex: (D, X) => {
      E == null || E.orderedRows[D].addClass(X);
    },
    getRowCount: () => {
      var D;
      return (D = E == null ? void 0 : E.rows.length) !== null && D !== void 0 ? D : 0;
    },
    getRowElements: () => {
      var D;
      return (D = E == null ? void 0 : E.rows.map((X) => X.element)) !== null && D !== void 0 ? D : [];
    },
    getRowIdAtIndex: (D) => {
      var X;
      return (X = E == null ? void 0 : E.orderedRows[D].rowId) !== null && X !== void 0 ? X : null;
    },
    getRowIndexByChildElement: (D) => {
      var X;
      return (X = E == null ? void 0 : E.orderedRows.map((Le) => Le.element).indexOf(c(D, ".mdc-data-table__row"))) !== null && X !== void 0 ? X : -1;
    },
    getSelectedRowCount: () => {
      var D;
      return (D = E == null ? void 0 : E.rows.filter((X) => X.selected).length) !== null && D !== void 0 ? D : 0;
    },
    isCheckboxAtRowIndexChecked: (D) => {
      const X = E == null ? void 0 : E.orderedRows[D].checkbox;
      return X ? X.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const D = B == null ? void 0 : B.checkbox;
      return D ? D.checked : !1;
    },
    isRowsSelectable: () => !!je().querySelector(".mdc-data-table__row-checkbox") || !!je().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (D) => {
      const X = E == null ? void 0 : E.orderedRows[D.rowIndex];
      X && _e(
        je(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: X.element,
          rowId: X.rowId,
          rowIndex: D.rowIndex,
          selected: D.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Qe(!1), _e(je(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Qe(!1), _e(je(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (D) => {
      _e(je(), "SMUIDataTable:rowClick", D, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (D, X) => {
      E == null || E.orderedRows[D].removeClass(X);
    },
    setAttributeAtRowIndex: (D, X, Le) => {
      E == null || E.orderedRows[D].addAttr(X, Le);
    },
    setHeaderRowCheckboxChecked: (D) => {
      const X = B == null ? void 0 : B.checkbox;
      X && (X.checked = D);
    },
    setHeaderRowCheckboxIndeterminate: Qe,
    setRowCheckboxCheckedAtIndex: (D, X) => {
      const Le = E == null ? void 0 : E.orderedRows[D].checkbox;
      Le && (Le.checked = X);
    },
    setSortStatusLabelByHeaderCellIndex: (D, X) => {
    }
    // Handled automatically.
  })), M.init(), M.layout(), t(14, j = !0), () => {
    M.destroy();
  })), Nt(() => {
    be && be();
  });
  function Pe(D) {
    t(10, B = D.detail);
  }
  function Ge(D) {
    t(11, E = D.detail);
  }
  function he(D) {
    M && M.handleRowCheckboxChange(D);
  }
  function Ve(D) {
    K[D] || t(12, K[D] = !0, K);
  }
  function Xe(D) {
    (!(D in K) || K[D]) && t(12, K[D] = !1, K);
  }
  function Qe(D) {
    const X = B == null ? void 0 : B.checkbox;
    X && (X.indeterminate = D);
  }
  function xe(D) {
    if (!M || !D.detail.target)
      return;
    const X = c(D.detail.target, ".mdc-data-table__header-cell--with-sort");
    X && pt(X);
  }
  function St(D) {
    if (!M || !D.detail.target)
      return;
    const X = c(D.detail.target, ".mdc-data-table__row");
    X && M && M.handleRowClick({ rowId: D.detail.rowId, row: X });
  }
  function pt(D) {
    var X, Le;
    const Lt = (X = B == null ? void 0 : B.orderedCells) !== null && X !== void 0 ? X : [], Ct = Lt.map((Rt) => Rt.element).indexOf(D);
    if (Ct === -1)
      return;
    const Et = (Le = Lt[Ct].columnId) !== null && Le !== void 0 ? Le : null;
    M.handleSortAction({ columnId: Et, columnIndex: Ct, headerCell: D });
  }
  function bt() {
    return M.layout();
  }
  function je() {
    return q;
  }
  function $e(D) {
    ee[D ? "unshift" : "push"](() => {
      y = D, t(9, y);
    });
  }
  function et(D) {
    ee[D ? "unshift" : "push"](() => {
      q = D, t(8, q);
    });
  }
  const rt = () => M && j && M.layout(), tt = () => t(10, B = void 0), vt = () => t(11, E = void 0), jt = () => M && M.handleHeaderRowCheckboxChange();
  return n.$$set = (D) => {
    e = G(G({}, e), De(D)), t(25, i = ue(e, l)), "use" in D && t(0, h = D.use), "class" in D && t(1, b = D.class), "stickyHeader" in D && t(2, p = D.stickyHeader), "sortable" in D && t(28, _ = D.sortable), "sort" in D && t(26, k = D.sort), "sortDirection" in D && t(27, v = D.sortDirection), "sortAscendingAriaLabel" in D && t(29, w = D.sortAscendingAriaLabel), "sortDescendingAriaLabel" in D && t(30, g = D.sortDescendingAriaLabel), "container$use" in D && t(3, U = D.container$use), "container$class" in D && t(4, H = D.container$class), "table$use" in D && t(5, m = D.table$use), "table$class" in D && t(6, L = D.table$class), "$$scope" in D && t(35, u = D.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && en(N, a = k, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && en(ge, s = v, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && f.progress && M && ve !== r && (t(33, ve = r), r ? M.hideProgress() : M.showProgress());
  }, [
    h,
    b,
    p,
    U,
    H,
    m,
    L,
    M,
    q,
    y,
    B,
    E,
    K,
    Ie,
    j,
    d,
    C,
    N,
    ge,
    Pe,
    Ge,
    he,
    xe,
    St,
    f,
    i,
    k,
    v,
    _,
    w,
    g,
    bt,
    je,
    ve,
    r,
    u,
    o,
    $e,
    et,
    rt,
    tt,
    vt,
    jt
  ];
}
class na extends ne {
  constructor(e) {
    super(), te(
      this,
      e,
      ta,
      ea,
      Q,
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
function la(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), a = ie(
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
  for (let f = 0; f < o.length; f += 1)
    u = G(u, o[f]);
  return {
    c() {
      e = P("thead"), a && a.c(), le(e, u);
    },
    m(f, c) {
      O(f, e, c), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        J(t = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        Y(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        Y(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        Y(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        Y(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(f, [c]) {
      a && a.p && (!l || c & /*$$scope*/
      512) && se(
        a,
        s,
        f,
        /*$$scope*/
        f[9],
        l ? re(
          s,
          /*$$scope*/
          f[9],
          c,
          null
        ) : ae(
          /*$$scope*/
          f[9]
        ),
        null
      ), le(e, u = oe(o, [c & /*$$restProps*/
      128 && /*$$restProps*/
      f[7]])), t && me(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (A(a, f), l = !0);
    },
    o(f) {
      S(a, f), l = !1;
    },
    d(f) {
      f && T(e), a && a.d(f), n[11](null), i = !1, de(r);
    }
  };
}
function ia(n, e, t) {
  const l = ["use", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ue(Se());
  let { use: o = [] } = e, u, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  Re("SMUI:data-table:row:header", !0), Ne(() => {
    const g = {
      get cells() {
        return c;
      },
      get orderedCells() {
        return _();
      },
      get checkbox() {
        return f;
      }
    };
    return _e(k(), "SMUIDataTableHeader:mount", g), () => {
      _e(k(), "SMUIDataTableHeader:unmount", g);
    };
  });
  function h(g) {
    t(2, f = g.detail);
  }
  function b(g) {
    c.push(g.detail), d.set(g.detail.element, g.detail), g.stopPropagation();
  }
  function p(g) {
    const U = c.indexOf(g.detail);
    U !== -1 && (c.splice(U, 1), c = c), d.delete(g.detail.element), g.stopPropagation();
  }
  function _() {
    return [...k().querySelectorAll(".mdc-data-table__header-cell")].map((g) => d.get(g)).filter((g) => g && g._smui_data_table_header_cell_accessor);
  }
  function k() {
    return u;
  }
  function v(g) {
    ee[g ? "unshift" : "push"](() => {
      u = g, t(1, u);
    });
  }
  const w = () => t(2, f = void 0);
  return n.$$set = (g) => {
    e = G(G({}, e), De(g)), t(7, i = ue(e, l)), "use" in g && t(0, o = g.use), "$$scope" in g && t(9, s = g.$$scope);
  }, [
    o,
    u,
    f,
    a,
    h,
    b,
    p,
    i,
    k,
    s,
    r,
    v,
    w
  ];
}
class ra extends ne {
  constructor(e) {
    super(), te(this, e, ia, la, Q, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function sa(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[9].default
  ), o = ie(
    a,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = x({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__content": !0
      })
    },
    /*$$restProps*/
    n[6]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = G(f, u[c]);
  return {
    c() {
      e = P("tbody"), o && o.c(), le(e, f);
    },
    m(c, d) {
      O(c, e, d), o && o.m(e, null), n[10](e), i = !0, r || (s = [
        J(l = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        Y(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        Y(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], r = !0);
    },
    p(c, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      256) && se(
        o,
        a,
        c,
        /*$$scope*/
        c[8],
        i ? re(
          a,
          /*$$scope*/
          c[8],
          d,
          null
        ) : ae(
          /*$$scope*/
          c[8]
        ),
        null
      ), le(e, f = oe(u, [
        (!i || d & /*className*/
        2 && t !== (t = x({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(o, c), i = !0);
    },
    o(c) {
      S(o, c), i = !1;
    },
    d(c) {
      c && T(e), o && o.d(c), n[10](null), r = !1, de(s);
    }
  };
}
function aa(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ue(Se());
  let { use: o = [] } = e, { class: u = "" } = e, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  Re("SMUI:data-table:row:header", !1), Ne(() => {
    const v = {
      get rows() {
        return c;
      },
      get orderedRows() {
        return p();
      }
    };
    return _e(_(), "SMUIDataTableBody:mount", v), () => {
      _e(_(), "SMUIDataTableBody:unmount", v);
    };
  });
  function h(v) {
    c.push(v.detail), d.set(v.detail.element, v.detail), v.stopPropagation();
  }
  function b(v) {
    const w = c.indexOf(v.detail);
    w !== -1 && (c.splice(w, 1), c = c), d.delete(v.detail.element), v.stopPropagation();
  }
  function p() {
    return [..._().querySelectorAll(".mdc-data-table__row")].map((v) => d.get(v)).filter((v) => v && v._smui_data_table_row_accessor);
  }
  function _() {
    return f;
  }
  function k(v) {
    ee[v ? "unshift" : "push"](() => {
      f = v, t(2, f);
    });
  }
  return n.$$set = (v) => {
    e = G(G({}, e), De(v)), t(6, i = ue(e, l)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "$$scope" in v && t(8, s = v.$$scope);
  }, [
    o,
    u,
    f,
    a,
    h,
    b,
    i,
    _,
    s,
    r,
    k
  ];
}
class oa extends ne {
  constructor(e) {
    super(), te(this, e, aa, sa, Q, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function ua(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[15].default
  ), u = ie(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let f = [
    {
      class: t = x({
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
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = G(c, f[d]);
  return {
    c() {
      e = P("tr"), u && u.c(), le(e, c);
    },
    m(d, h) {
      O(d, e, h), u && u.m(e, null), n[16](e), r = !0, s || (a = [
        J(i = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        Y(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        Y(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        Y(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], s = !0);
    },
    p(d, [h]) {
      u && u.p && (!r || h & /*$$scope*/
      16384) && se(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        r ? re(
          o,
          /*$$scope*/
          d[14],
          h,
          null
        ) : ae(
          /*$$scope*/
          d[14]
        ),
        null
      ), le(e, c = oe(f, [
        (!r || h & /*className, checkbox, internalClasses*/
        26 && t !== (t = x({
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
        (!r || h & /*checkbox*/
        8 && l !== (l = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": l },
        h & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        h & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), i && me(i.update) && h & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (A(u, d), r = !0);
    },
    o(d) {
      S(u, d), r = !1;
    },
    d(d) {
      d && T(e), u && u.d(d), n[16](null), s = !1, de(a);
    }
  };
}
let fa = 0;
function ca(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ue(Se());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: f = "SMUI-data-table-row-" + fa++ } = e, c, d, h = {}, b = {}, p = Fe("SMUI:data-table:row:header");
  Ne(() => {
    const y = p ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return m();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
      },
      get selected() {
        var B;
        return (B = d && d.checked) !== null && B !== void 0 ? B : !1;
      },
      addClass: k,
      removeClass: v,
      getAttr: w,
      addAttr: g
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return m();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return f;
      },
      get selected() {
        var B;
        return (B = d && d.checked) !== null && B !== void 0 ? B : !1;
      },
      addClass: k,
      removeClass: v,
      getAttr: w,
      addAttr: g
    };
    return _e(m(), "SMUIDataTableRow:mount", y), () => {
      _e(m(), "SMUIDataTableRow:unmount", y);
    };
  });
  function _(y) {
    t(3, d = y.detail);
  }
  function k(y) {
    h[y] || t(4, h[y] = !0, h);
  }
  function v(y) {
    (!(y in h) || h[y]) && t(4, h[y] = !1, h);
  }
  function w(y) {
    var B;
    return y in b ? (B = b[y]) !== null && B !== void 0 ? B : null : m().getAttribute(y);
  }
  function g(y, B) {
    b[y] !== B && t(5, b[y] = B, b);
  }
  function U(y) {
    _e(m(), "SMUIDataTableHeader:click", y);
  }
  function H(y) {
    _e(m(), "SMUIDataTableRow:click", { rowId: f, target: y.target });
  }
  function m() {
    return c;
  }
  function L(y) {
    ee[y ? "unshift" : "push"](() => {
      c = y, t(2, c);
    });
  }
  const q = (y) => p ? U(y) : H(y), M = () => t(3, d = void 0);
  return n.$$set = (y) => {
    e = G(G({}, e), De(y)), t(11, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "rowId" in y && t(12, f = y.rowId), "$$scope" in y && t(14, s = y.$$scope);
  }, [
    o,
    u,
    c,
    d,
    h,
    b,
    a,
    p,
    _,
    U,
    H,
    i,
    f,
    m,
    s,
    r,
    L,
    q,
    M
  ];
}
class Pl extends ne {
  constructor(e) {
    super(), te(this, e, ca, ua, Q, {
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
function da(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[22].default
  ), o = ie(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = x({
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
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = G(f, u[c]);
  return {
    c() {
      e = P("td"), o && o.c(), le(e, f);
    },
    m(c, d) {
      O(c, e, d), o && o.m(e, null), n[25](e), i = !0, r || (s = [
        J(l = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        Y(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], r = !0);
    },
    p(c, d) {
      o && o.p && (!i || d & /*$$scope*/
      2097152) && se(
        o,
        a,
        c,
        /*$$scope*/
        c[21],
        i ? re(
          a,
          /*$$scope*/
          c[21],
          d,
          null
        ) : ae(
          /*$$scope*/
          c[21]
        ),
        null
      ), le(e, f = oe(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = x({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-data-table__cell": !0,
          "mdc-data-table__cell--numeric": (
            /*numeric*/
            c[2]
          ),
          "mdc-data-table__cell--checkbox": (
            /*checkbox*/
            c[3]
          ),
          .../*internalClasses*/
          c[7]
        }))) && { class: t },
        d & /*internalAttrs*/
        256 && /*internalAttrs*/
        c[8],
        d & /*$$restProps*/
        524288 && /*$$restProps*/
        c[19]
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(o, c), i = !0);
    },
    o(c) {
      S(o, c), i = !1;
    },
    d(c) {
      c && T(e), o && o.d(c), n[25](null), r = !1, de(s);
    }
  };
}
function ha(n) {
  let e, t, l, i, r, s, a, o, u;
  const f = [ga, ma], c = [];
  function d(p, _) {
    return (
      /*sortable*/
      p[5] ? 0 : 1
    );
  }
  t = d(n), l = c[t] = f[t](n);
  let h = [
    {
      class: i = x({
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
  ], b = {};
  for (let p = 0; p < h.length; p += 1)
    b = G(b, h[p]);
  return {
    c() {
      e = P("th"), l.c(), le(e, b);
    },
    m(p, _) {
      O(p, e, _), c[t].m(e, null), n[23](e), a = !0, o || (u = [
        J(s = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        Y(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(p, _) {
      let k = t;
      t = d(p), t === k ? c[t].p(p, _) : (fe(), S(c[k], 1, 1, () => {
        c[k] = null;
      }), ce(), l = c[t], l ? l.p(p, _) : (l = c[t] = f[t](p), l.c()), A(l, 1), l.m(e, null)), le(e, b = oe(h, [
        (!a || _ & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = x({
          [
            /*className*/
            p[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            p[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            p[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            p[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            p[5] && /*$sort*/
            p[9] === /*columnId*/
            p[4]
          ),
          .../*internalClasses*/
          p[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!a || _ & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          p[4]
        ) },
        (!a || _ & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        p[5] ? (
          /*$sort*/
          p[9] === /*columnId*/
          p[4] ? (
            /*$sortDirection*/
            p[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        _ & /*internalAttrs*/
        256 && /*internalAttrs*/
        p[8],
        _ & /*$$restProps*/
        524288 && /*$$restProps*/
        p[19]
      ])), s && me(s.update) && _ & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      a || (A(l), a = !0);
    },
    o(p) {
      S(l), a = !1;
    },
    d(p) {
      p && T(e), c[t].d(), n[23](null), o = !1, de(u);
    }
  };
}
function ma(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = ie(
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
      2097152) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? re(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : ae(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ga(n) {
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
  ), u = ie(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = P("div"), u && u.c(), t = V(), l = P("div"), r = pe(i), R(l, "class", "mdc-data-table__sort-status-label"), R(l, "aria-hidden", "true"), R(l, "id", s = /*columnId*/
      n[4] + "-status-label"), R(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(f, c) {
      O(f, e, c), u && u.m(e, null), F(e, t), F(e, l), F(l, r), a = !0;
    },
    p(f, c) {
      u && u.p && (!a || c & /*$$scope*/
      2097152) && se(
        u,
        o,
        f,
        /*$$scope*/
        f[21],
        a ? re(
          o,
          /*$$scope*/
          f[21],
          c,
          null
        ) : ae(
          /*$$scope*/
          f[21]
        ),
        null
      ), (!a || c & /*$sort, columnId, $sortDirection*/
      1552) && i !== (i = /*$sort*/
      (f[9] === /*columnId*/
      f[4] ? (
        /*$sortDirection*/
        f[10] === "ascending" ? (
          /*sortAscendingAriaLabel*/
          f[15]
        ) : (
          /*sortDescendingAriaLabel*/
          f[16]
        )
      ) : "") + "") && Me(r, i), (!a || c & /*columnId*/
      16 && s !== (s = /*columnId*/
      f[4] + "-status-label")) && R(l, "id", s);
    },
    i(f) {
      a || (A(u, f), a = !0);
    },
    o(f) {
      S(u, f), a = !1;
    },
    d(f) {
      f && T(e), u && u.d(f);
    }
  };
}
function _a(n) {
  let e, t, l, i;
  const r = [ha, da], s = [];
  function a(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ce();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (A(t), i = !0);
    },
    o(o) {
      S(t), i = !1;
    },
    d(o) {
      o && T(l), s[e].d(o);
    }
  };
}
let pa = 0;
function ba(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ue(e, l), r, s, { $$slots: a = {}, $$scope: o } = e;
  const u = Ue(Se());
  let f = Fe("SMUI:data-table:row:header"), { use: c = [] } = e, { class: d = "" } = e, { numeric: h = !1 } = e, { checkbox: b = !1 } = e, { columnId: p = f ? "SMUI-data-table-column-" + pa++ : "SMUI-data-table-unused" } = e, { sortable: _ = Fe("SMUI:data-table:sortable") } = e, k, v = {}, w = {}, g = Fe("SMUI:data-table:sort");
  ft(n, g, (C) => t(9, r = C));
  let U = Fe("SMUI:data-table:sortDirection");
  ft(n, U, (C) => t(10, s = C));
  let H = Fe("SMUI:data-table:sortAscendingAriaLabel"), m = Fe("SMUI:data-table:sortDescendingAriaLabel");
  _ && (Re("SMUI:label:context", "data-table:sortable-header-cell"), Re("SMUI:icon-button:context", "data-table:sortable-header-cell"), Re("SMUI:icon-button:aria-describedby", p + "-status-label")), Ne(() => {
    const C = f ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return K();
      },
      get columnId() {
        return p;
      },
      addClass: L,
      removeClass: q,
      getAttr: M,
      addAttr: y
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return K();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: q,
      getAttr: M,
      addAttr: y
    };
    return _e(K(), "SMUIDataTableCell:mount", C), () => {
      _e(K(), "SMUIDataTableCell:unmount", C);
    };
  });
  function L(C) {
    v[C] || t(7, v[C] = !0, v);
  }
  function q(C) {
    (!(C in v) || v[C]) && t(7, v[C] = !1, v);
  }
  function M(C) {
    var N;
    return C in w ? (N = w[C]) !== null && N !== void 0 ? N : null : K().getAttribute(C);
  }
  function y(C, N) {
    w[C] !== N && t(8, w[C] = N, w);
  }
  function B(C) {
    _e(K(), "SMUIDataTableHeaderCheckbox:change", C);
  }
  function E(C) {
    _e(K(), "SMUIDataTableBodyCheckbox:change", C);
  }
  function K() {
    return k;
  }
  function Ie(C) {
    ee[C ? "unshift" : "push"](() => {
      k = C, t(6, k);
    });
  }
  const ye = (C) => b && B(C);
  function be(C) {
    ee[C ? "unshift" : "push"](() => {
      k = C, t(6, k);
    });
  }
  const j = (C) => b && E(C);
  return n.$$set = (C) => {
    e = G(G({}, e), De(C)), t(19, i = ue(e, l)), "use" in C && t(0, c = C.use), "class" in C && t(1, d = C.class), "numeric" in C && t(2, h = C.numeric), "checkbox" in C && t(3, b = C.checkbox), "columnId" in C && t(4, p = C.columnId), "sortable" in C && t(5, _ = C.sortable), "$$scope" in C && t(21, o = C.$$scope);
  }, [
    c,
    d,
    h,
    b,
    p,
    _,
    k,
    v,
    w,
    r,
    s,
    u,
    f,
    g,
    U,
    H,
    m,
    B,
    E,
    i,
    K,
    o,
    a,
    Ie,
    ye,
    be,
    j
  ];
}
class Vt extends ne {
  constructor(e) {
    super(), te(this, e, ba, _a, Q, {
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
const { Boolean: ql } = Si;
function il(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const va = (n) => ({ item: n & /*items*/
1 }), rl = (n) => ({ item: (
  /*item*/
  n[17]
) });
function sl(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function al(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function Ca(n) {
  let e, t;
  return e = new na({
    props: {
      style: "width: 100%;",
      $$slots: { default: [Da] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns, headerBg*/
      17379 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Ia(n) {
  let e, t;
  return {
    c() {
      e = P("p"), t = pe(
        /*emptyText*/
        n[4]
      ), R(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && Me(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: $,
    o: $,
    d(l) {
      l && T(e);
    }
  };
}
function ya(n) {
  let e, t;
  return {
    c() {
      e = P("p"), t = pe(
        /*errorMsg*/
        n[3]
      ), R(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      O(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && Me(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: $,
    o: $,
    d(l) {
      l && T(e);
    }
  };
}
function Aa(n) {
  let e;
  return {
    c() {
      e = P("p"), e.textContent = "Loading…", R(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      O(t, e, l);
    },
    p: $,
    i: $,
    o: $,
    d(t) {
      t && T(e);
    }
  };
}
function ka(n) {
  let e = (
    /*col*/
    n[20].header + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(l, i) {
      O(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[20].header + "") && Me(t, e);
    },
    d(l) {
      l && T(t);
    }
  };
}
function ol(n) {
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
      $$slots: { default: [ka] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function ul(n) {
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
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*headerBg*/
      64 && (r.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function wa(n) {
  let e, t, l, i = Be(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = ol(al(n, i, o));
  const s = (o) => S(r[o], 1, 1, () => {
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
      e = V(), a && a.c(), t = Ce();
    },
    m(o, u) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, u);
      O(o, e, u), a && a.m(o, u), O(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = Be(
          /*columns*/
          o[1]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = al(o, i, f);
          r[f] ? (r[f].p(c, u), A(r[f], 1)) : (r[f] = ol(c), r[f].c(), A(r[f], 1), r[f].m(e.parentNode, e));
        }
        for (fe(), f = i.length; f < r.length; f += 1)
          s(f);
        ce();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && A(a, 1)) : (a = ul(o), a.c(), A(a, 1), a.m(t.parentNode, t)) : a && (fe(), S(a, 1, 1, () => {
        a = null;
      }), ce());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          A(r[u]);
        A(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(ql);
      for (let u = 0; u < r.length; u += 1)
        S(r[u]);
      S(a), l = !1;
    },
    d(o) {
      o && (T(e), T(t)), mt(r, o), a && a.d(o);
    }
  };
}
function Sa(n) {
  let e, t;
  return e = new Pl({
    props: {
      $$slots: { default: [wa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function La(n) {
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
      t = pe(e);
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
      ]) ?? "") + "") && Me(t, e);
    },
    d(i) {
      i && T(t);
    }
  };
}
function fl(n) {
  let e, t;
  return e = new Vt({
    props: {
      $$slots: { default: [La] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, columns*/
      16387 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function cl(n) {
  let e, t;
  return e = new Vt({
    props: {
      numeric: !0,
      $$slots: { default: [Ea] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items*/
      16385 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Ea(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = ie(
    t,
    n,
    /*$$scope*/
    n[14],
    rl
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
      16385) && se(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? re(
          t,
          /*$$scope*/
          i[14],
          r,
          va
        ) : ae(
          /*$$scope*/
          i[14]
        ),
        rl
      );
    },
    i(i) {
      e || (A(l, i), e = !0);
    },
    o(i) {
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ra(n) {
  let e, t, l, i = Be(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = fl(sl(n, i, o));
  const s = (o) => S(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && cl(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = V(), a && a.c(), t = V();
    },
    m(o, u) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, u);
      O(o, e, u), a && a.m(o, u), O(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = Be(
          /*columns*/
          o[1]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = sl(o, i, f);
          r[f] ? (r[f].p(c, u), A(r[f], 1)) : (r[f] = fl(c), r[f].c(), A(r[f], 1), r[f].m(e.parentNode, e));
        }
        for (fe(), f = i.length; f < r.length; f += 1)
          s(f);
        ce();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && A(a, 1)) : (a = cl(o), a.c(), A(a, 1), a.m(t.parentNode, t)) : a && (fe(), S(a, 1, 1, () => {
        a = null;
      }), ce());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          A(r[u]);
        A(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(ql);
      for (let u = 0; u < r.length; u += 1)
        S(r[u]);
      S(a), l = !1;
    },
    d(o) {
      o && (T(e), T(t)), mt(r, o), a && a.d(o);
    }
  };
}
function dl(n, e) {
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
  return l = new Pl({
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
      $$slots: { default: [Ra] },
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
      t = Ce(), Z(l.$$.fragment), this.first = t;
    },
    m(s, a) {
      O(s, t, a), z(l, s, a), i = !0;
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
      i || (A(l.$$.fragment, s), i = !0);
    },
    o(s) {
      S(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && T(t), W(l, s);
    }
  };
}
function Ha(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = Be(
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
    let o = il(n, r, a), u = s(o);
    t.set(u, e[a] = dl(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      l = Ce();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      O(a, l, o), i = !0;
    },
    p(a, o) {
      o & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = Be(
        /*items*/
        a[0]
      ), fe(), e = Fi(e, o, s, 1, a, r, t, l.parentNode, Ui, dl, l, il), ce());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < r.length; o += 1)
          A(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      i = !1;
    },
    d(a) {
      a && T(l);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function Da(n) {
  let e, t, l, i;
  return e = new ra({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [Sa] },
      $$scope: { ctx: n }
    }
  }), l = new oa({
    props: {
      $$slots: { default: [Ha] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Z(e.$$.fragment), t = V(), Z(l.$$.fragment);
    },
    m(r, s) {
      z(e, r, s), O(r, t, s), z(l, r, s), i = !0;
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
      i || (A(e.$$.fragment, r), A(l.$$.fragment, r), i = !0);
    },
    o(r) {
      S(e.$$.fragment, r), S(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && T(t), W(e, r), W(l, r);
    }
  };
}
function Ma(n) {
  let e, t, l, i;
  const r = [Aa, ya, Ia, Ca], s = [];
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
      t.c(), l = Ce();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? s[e].p(o, u) : (fe(), S(s[f], 1, 1, () => {
        s[f] = null;
      }), ce(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), A(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (A(t), i = !0);
    },
    o(o) {
      S(t), i = !1;
    },
    d(o) {
      o && T(l), s[e].d(o);
    }
  };
}
function Ta(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = sn(i);
  let { items: a = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: f = "" } = e, { emptyText: c = "Nothing to show." } = e, { getRowId: d = (g, U) => {
    var H, m;
    return (m = g && ((H = g.id) !== null && H !== void 0 ? H : g.key)) !== null && m !== void 0 ? m : U;
  } } = e, { headerBg: h = null } = e, { rowBg: b = null } = e, p = null;
  const _ = s;
  let { hasActions: k = !1 } = e;
  const v = (g, U) => t(8, p = d(g, U)), w = () => t(8, p = null);
  return n.$$set = (g) => {
    "items" in g && t(0, a = g.items), "columns" in g && t(1, o = g.columns), "loading" in g && t(2, u = g.loading), "errorMsg" in g && t(3, f = g.errorMsg), "emptyText" in g && t(4, c = g.emptyText), "getRowId" in g && t(5, d = g.getRowId), "headerBg" in g && t(6, h = g.headerBg), "rowBg" in g && t(7, b = g.rowBg), "hasActions" in g && t(10, k = g.hasActions), "$$scope" in g && t(14, r = g.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = k || !!(_ != null && _.actions));
  }, [
    a,
    o,
    u,
    f,
    c,
    d,
    h,
    b,
    p,
    l,
    k,
    i,
    v,
    w,
    r
  ];
}
class Oa extends ne {
  constructor(e) {
    super(), te(this, e, Ta, Ma, Q, {
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
function hl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function ml(n) {
  let e, t = (
    /*crumb*/
    n[5].secondaryLabel + ""
  ), l;
  return {
    c() {
      e = P("span"), l = pe(t), R(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      O(i, e, r), F(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && Me(l, t);
    },
    d(i) {
      i && T(e);
    }
  };
}
function gl(n) {
  let e;
  return {
    c() {
      e = P("span"), e.textContent = "chevron_right", R(e, "class", "material-icons separator svelte-1ngm2be");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function _l(n) {
  let e, t, l, i = (
    /*crumb*/
    n[5].label + ""
  ), r, s, a, o, u, f, c, d, h = (
    /*crumb*/
    n[5].secondaryLabel && ml(n)
  );
  function b() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7]
      )
    );
  }
  let p = (
    /*i*/
    n[7] < /*breadcrumbs*/
    n[0].length - 1 && gl()
  );
  return {
    c() {
      e = P("div"), t = P("span"), l = P("span"), r = pe(i), s = V(), h && h.c(), u = V(), p && p.c(), f = V(), R(l, "class", "label svelte-1ngm2be"), R(t, "class", a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), R(t, "aria-current", o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), R(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(_, k) {
      O(_, e, k), F(e, t), F(t, l), F(l, r), F(t, s), h && h.m(t, null), F(e, u), p && p.m(e, null), F(e, f), c || (d = Y(t, "click", b), c = !0);
    },
    p(_, k) {
      n = _, k & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && Me(r, i), /*crumb*/
      n[5].secondaryLabel ? h ? h.p(n, k) : (h = ml(n), h.c(), h.m(t, null)) : h && (h.d(1), h = null), k & /*breadcrumbs, activeIndex*/
      3 && a !== (a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && R(t, "class", a), k & /*activeIndex*/
      2 && o !== (o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && R(t, "aria-current", o), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? p || (p = gl(), p.c(), p.m(e, f)) : p && (p.d(1), p = null);
    },
    d(_) {
      _ && T(e), h && h.d(), p && p.d(), c = !1, d();
    }
  };
}
function Ua(n) {
  let e, t = Be(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = _l(hl(n, t, i));
  return {
    c() {
      e = P("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      R(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      O(i, e, r);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = Be(
          /*breadcrumbs*/
          i[0]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = hl(i, t, s);
          l[s] ? l[s].p(a, r) : (l[s] = _l(a), l[s].c(), l[s].m(e, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    i: $,
    o: $,
    d(i) {
      i && T(e), mt(l, i);
    }
  };
}
function Fa(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = Ze(), s = (o) => {
    l[o].enabled && o !== i && r("click", { index: o });
  }, a = (o) => s(o);
  return n.$$set = (o) => {
    "breadcrumbs" in o && t(0, l = o.breadcrumbs), "activeIndex" in o && t(1, i = o.activeIndex);
  }, [l, i, s, a];
}
class Ba extends ne {
  constructor(e) {
    super(), te(this, e, Fa, Ua, Q, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const Pa = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Pa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function qa(n) {
  let e;
  return {
    c() {
      e = pe("CONTINUE");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Na(n) {
  let e;
  return {
    c() {
      e = pe("ADD NEW PROCESS");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Ga(n) {
  let e, t, l, i, r, s, a, o;
  t = new Rs({
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
  r = new qs({
    props: {
      svgStyles: "fill: #002B37; width: 100%; height: 100%;"
    }
  });
  function f() {
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
      e = P("button"), Z(t.$$.fragment), l = V(), i = P("button"), Z(r.$$.fragment), R(e, "type", "button"), R(e, "class", "icon svelte-wxofq2"), R(e, "aria-label", "View process"), R(i, "type", "button"), R(i, "class", "icon svelte-wxofq2"), R(i, "aria-label", "Start process");
    },
    m(c, d) {
      O(c, e, d), z(t, e, null), O(c, l, d), O(c, i, d), z(r, i, null), s = !0, a || (o = [
        Y(e, "click", u),
        Y(i, "click", f)
      ], a = !0);
    },
    p(c, d) {
      n = c;
    },
    i(c) {
      s || (A(t.$$.fragment, c), A(r.$$.fragment, c), s = !0);
    },
    o(c) {
      S(t.$$.fragment, c), S(r.$$.fragment, c), s = !1;
    },
    d(c) {
      c && (T(e), T(l), T(i)), W(t), W(r), a = !1, de(o);
    }
  };
}
function Va(n) {
  let e, t, l, i, r, s, a, o, u, f, c, d, h, b, p, _, k;
  i = new js({}), o = new qt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [qa] },
      $$scope: { ctx: n }
    }
  }), o.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function v(g) {
    n[12](g);
  }
  let w = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (w.value = /*searchQuery*/
    n[2]), c = new Cs({ props: w }), ee.push(() => Ye(c, "value", v)), b = new qt({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [Na] },
        $$scope: { ctx: n }
      }
    }), b.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), _ = new Oa({
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
            Ga,
            ({ item: g }) => ({ 16: g }),
            ({ item: g }) => g ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = P("div"), t = P("div"), l = P("div"), Z(i.$$.fragment), r = V(), s = P("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, a = V(), Z(o.$$.fragment), u = V(), f = P("div"), Z(c.$$.fragment), h = V(), Z(b.$$.fragment), p = V(), Z(_.$$.fragment), R(s, "class", "svelte-wxofq2"), R(l, "class", "process-banner__info svelte-wxofq2"), R(t, "class", "process-banner svelte-wxofq2"), R(f, "class", "process-toolbar svelte-wxofq2"), R(e, "class", "processes svelte-wxofq2");
      },
      m(g, U) {
        O(g, e, U), F(e, t), F(t, l), z(i, l, null), F(l, r), F(l, s), F(t, a), z(o, t, null), F(e, u), F(e, f), z(c, f, null), F(f, h), z(b, f, null), F(e, p), z(_, e, null), k = !0;
      },
      p(g, [U]) {
        const H = {};
        U & /*$$scope*/
        131072 && (H.$$scope = { dirty: U, ctx: g }), o.$set(H);
        const m = {};
        !d && U & /*searchQuery*/
        4 && (d = !0, m.value = /*searchQuery*/
        g[2], Ke(() => d = !1)), c.$set(m);
        const L = {};
        U & /*$$scope*/
        131072 && (L.$$scope = { dirty: U, ctx: g }), b.$set(L);
        const q = {};
        U & /*filteredRows*/
        8 && (q.items = /*filteredRows*/
        g[3]), U & /*loading*/
        1 && (q.loading = /*loading*/
        g[0]), U & /*errorMsg*/
        2 && (q.errorMsg = /*errorMsg*/
        g[1]), U & /*$$scope, item*/
        196608 && (q.$$scope = { dirty: U, ctx: g }), _.$set(q);
      },
      i(g) {
        k || (A(i.$$.fragment, g), A(o.$$.fragment, g), A(c.$$.fragment, g), A(b.$$.fragment, g), A(_.$$.fragment, g), k = !0);
      },
      o(g) {
        S(i.$$.fragment, g), S(o.$$.fragment, g), S(c.$$.fragment, g), S(b.$$.fragment, g), S(_.$$.fragment, g), k = !1;
      },
      d(g) {
        g && T(e), W(i), W(o), W(c), W(b), W(_);
      }
    }
  );
}
function ja(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: a = !1 } = e, { errorMsg: o = "" } = e;
  const u = Ze(), f = (w) => u("start", w), c = (w) => u("view", w);
  let d = "";
  const h = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], b = () => {
    console.log("Add new process clicked");
  }, p = () => console.log("Continue Process");
  function _(w) {
    d = w, t(2, d);
  }
  const k = (w) => c(w), v = (w) => f(w);
  return n.$$set = (w) => {
    "processes" in w && t(8, s = w.processes), "loading" in w && t(0, a = w.loading), "errorMsg" in w && t(1, o = w.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((w) => Object.assign(Object.assign({}, w), { displayName: w.name || w.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((w) => {
      var g;
      return ((g = w.displayName) !== null && g !== void 0 ? g : "").toLowerCase().includes(l);
    }) : i);
  }, [
    a,
    o,
    d,
    r,
    f,
    c,
    h,
    b,
    s,
    i,
    l,
    p,
    _,
    k,
    v
  ];
}
class za extends ne {
  constructor(e) {
    super(), te(this, e, ja, Va, Q, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function pl(n, e, t) {
  const l = n.slice();
  return l[7] = e[t], l[9] = t, l;
}
function Wa(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(l, i) {
      O(l, t, i);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && T(t);
    }
  };
}
function Za(n) {
  let e, t, l, i;
  const r = [Ja, Ya, Ka, Xa], s = [];
  function a(o, u) {
    return (
      /*status*/
      o[3][
        /*item*/
        o[7].id
      ] === "check" ? 0 : (
        /*status*/
        o[3][
          /*item*/
          o[7].id
        ] === "error" ? 1 : (
          /*status*/
          o[3][
            /*item*/
            o[7].id
          ] === "warning" ? 2 : 3
        )
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ce();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, u) {
      let f = e;
      e = a(o), e !== f && (fe(), S(s[f], 1, 1, () => {
        s[f] = null;
      }), ce(), t = s[e], t || (t = s[e] = r[e](o), t.c()), A(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (A(t), i = !0);
    },
    o(o) {
      S(t), i = !1;
    },
    d(o) {
      o && T(l), s[e].d(o);
    }
  };
}
function Xa(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(l, i) {
      O(l, t, i);
    },
    i: $,
    o: $,
    d(l) {
      l && T(t);
    }
  };
}
function Ka(n) {
  let e, t;
  return e = new Us({}), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Ya(n) {
  let e, t;
  return e = new Ts({}), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Ja(n) {
  let e, t;
  return e = new Ds({}), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Qa(n) {
  let e, t, l, i, r, s, a, o;
  const u = [Za, Wa], f = [];
  function c(h, b) {
    return b & /*visited, items, currentId*/
    7 && (t = null), t == null && (t = !!/*visited*/
    (h[1].includes(
      /*item*/
      h[7].id
    ) && /*item*/
    h[7].id !== /*currentId*/
    h[2])), t ? 0 : 1;
  }
  l = c(n, -1), i = f[l] = u[l](n);
  function d() {
    return (
      /*click_handler*/
      n[6](
        /*item*/
        n[7]
      )
    );
  }
  return {
    c() {
      e = P("button"), i.c(), R(e, "aria-current", r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0), st(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), st(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), st(
        e,
        "visited",
        /*visited*/
        n[1].includes(
          /*item*/
          n[7].id
        ) && /*item*/
        n[7].id !== /*currentId*/
        n[2]
      );
    },
    m(h, b) {
      O(h, e, b), f[l].m(e, null), s = !0, a || (o = Y(e, "click", d), a = !0);
    },
    p(h, b) {
      n = h;
      let p = l;
      l = c(n, b), l === p ? f[l].p(n, b) : (fe(), S(f[p], 1, 1, () => {
        f[p] = null;
      }), ce(), i = f[l], i ? i.p(n, b) : (i = f[l] = u[l](n), i.c()), A(i, 1), i.m(e, null)), (!s || b & /*items, currentId*/
      5 && r !== (r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0)) && R(e, "aria-current", r), (!s || b & /*visited, items*/
      3) && st(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), (!s || b & /*items, currentId*/
      5) && st(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), (!s || b & /*visited, items, currentId*/
      7) && st(
        e,
        "visited",
        /*visited*/
        n[1].includes(
          /*item*/
          n[7].id
        ) && /*item*/
        n[7].id !== /*currentId*/
        n[2]
      );
    },
    i(h) {
      s || (A(i), s = !0);
    },
    o(h) {
      S(i), s = !1;
    },
    d(h) {
      h && T(e), f[l].d(), a = !1, o();
    }
  };
}
function bl(n) {
  let e;
  return {
    c() {
      e = P("div"), R(e, "class", "step-line svelte-swalin"), R(e, "aria-hidden", "true");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function vl(n) {
  let e, t, l, i, r = (
    /*item*/
    n[7].label + ""
  ), s, a, o, u;
  t = new Js({
    props: {
      content: (
        /*tooltipMap*/
        n[4][
          /*item*/
          n[7].id
        ] ?? ""
      ),
      side: "bottom",
      $$slots: { default: [Qa] },
      $$scope: { ctx: n }
    }
  });
  let f = (
    /*i*/
    n[9] < /*items*/
    n[0].length - 1 && bl()
  );
  return {
    c() {
      e = P("div"), Z(t.$$.fragment), l = V(), i = P("p"), s = pe(r), a = V(), f && f.c(), o = Ce(), R(e, "class", "step svelte-swalin");
    },
    m(c, d) {
      O(c, e, d), z(t, e, null), F(e, l), F(e, i), F(i, s), O(c, a, d), f && f.m(c, d), O(c, o, d), u = !0;
    },
    p(c, d) {
      const h = {};
      d & /*tooltipMap, items*/
      17 && (h.content = /*tooltipMap*/
      c[4][
        /*item*/
        c[7].id
      ] ?? ""), d & /*$$scope, items, currentId, visited, status*/
      1039 && (h.$$scope = { dirty: d, ctx: c }), t.$set(h), (!u || d & /*items*/
      1) && r !== (r = /*item*/
      c[7].label + "") && Me(s, r), /*i*/
      c[9] < /*items*/
      c[0].length - 1 ? f || (f = bl(), f.c(), f.m(o.parentNode, o)) : f && (f.d(1), f = null);
    },
    i(c) {
      u || (A(t.$$.fragment, c), u = !0);
    },
    o(c) {
      S(t.$$.fragment, c), u = !1;
    },
    d(c) {
      c && (T(e), T(a), T(o)), W(t), f && f.d(c);
    }
  };
}
function xa(n) {
  let e, t, l = Be(
    /*items*/
    n[0]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = vl(pl(n, l, s));
  const r = (s) => S(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = P("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      R(e, "class", "steps svelte-swalin");
    },
    m(s, a) {
      O(s, e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      t = !0;
    },
    p(s, [a]) {
      if (a & /*items, tooltipMap, currentId, undefined, visited, dispatch, status*/
      63) {
        l = Be(
          /*items*/
          s[0]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = pl(s, l, o);
          i[o] ? (i[o].p(u, a), A(i[o], 1)) : (i[o] = vl(u), i[o].c(), A(i[o], 1), i[o].m(e, null));
        }
        for (fe(), o = l.length; o < i.length; o += 1)
          r(o);
        ce();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < l.length; a += 1)
          A(i[a]);
        t = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        S(i[a]);
      t = !1;
    },
    d(s) {
      s && T(e), mt(i, s);
    }
  };
}
function $a(n, e, t) {
  let { items: l = [] } = e, { visited: i = [] } = e, { currentId: r = null } = e, { status: s = {} } = e, { tooltipMap: a = {} } = e;
  const o = Ze(), u = (f) => o("select", f.id);
  return n.$$set = (f) => {
    "items" in f && t(0, l = f.items), "visited" in f && t(1, i = f.visited), "currentId" in f && t(2, r = f.currentId), "status" in f && t(3, s = f.status), "tooltipMap" in f && t(4, a = f.tooltipMap);
  }, [l, i, r, s, a, o, u];
}
class Nl extends ne {
  constructor(e) {
    super(), te(this, e, $a, xa, Q, {
      items: 0,
      visited: 1,
      currentId: 2,
      status: 3,
      tooltipMap: 4
    });
  }
}
function eo(n) {
  let e, t;
  return e = new Nl({
    props: {
      items: (
        /*items*/
        n[2]
      ),
      visited: (
        /*visited*/
        n[1]
      ),
      currentId: (
        /*currentId*/
        n[0]
      ),
      status: {},
      tooltipMap: {}
    }
  }), e.$on(
    "select",
    /*onSelect*/
    n[3]
  ), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*visited*/
      2 && (r.visited = /*visited*/
      l[1]), i & /*currentId*/
      1 && (r.currentId = /*currentId*/
      l[0]), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function to(n, e, t) {
  const l = Ze(), i = [
    {
      id: "process-definition",
      label: "Process Definition"
    },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let { currentId: r = null } = e, { visited: s = [] } = e;
  const a = (o) => l("select", o.detail);
  return n.$$set = (o) => {
    "currentId" in o && t(0, r = o.currentId), "visited" in o && t(1, s = o.visited);
  }, [r, s, i, a];
}
class no extends ne {
  constructor(e) {
    super(), te(this, e, to, eo, Q, { currentId: 0, visited: 1 });
  }
}
function lo(n) {
  let e, t, l, i, r, s, a, o, u, f, c;
  return l = new Xs({}), {
    c() {
      e = P("div"), t = P("button"), Z(l.$$.fragment), i = V(), r = P("span"), r.textContent = "Back to Overview", s = V(), a = P("span"), o = pe(
        /*title*/
        n[0]
      ), R(a, "class", "back-container__title svelte-1p6ln66"), R(t, "type", "button"), R(t, "class", "back-container svelte-1p6ln66"), Xt(e, "display", "flex"), Xt(e, "align-items", "center"), Xt(e, "gap", "0.5rem");
    },
    m(d, h) {
      O(d, e, h), F(e, t), z(l, t, null), F(t, i), F(t, r), F(t, s), F(t, a), F(a, o), u = !0, f || (c = Y(
        t,
        "click",
        /*onBack*/
        n[1]
      ), f = !0);
    },
    p(d, [h]) {
      (!u || h & /*title*/
      1) && Me(
        o,
        /*title*/
        d[0]
      );
    },
    i(d) {
      u || (A(l.$$.fragment, d), u = !0);
    },
    o(d) {
      S(l.$$.fragment, d), u = !1;
    },
    d(d) {
      d && T(e), W(l), f = !1, c();
    }
  };
}
function io(n, e, t) {
  let { title: l = "Engineering Wizard" } = e;
  const i = Ze();
  function r() {
    i("back");
  }
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title);
  }, [l, r];
}
class Gl extends ne {
  constructor(e) {
    super(), te(this, e, io, lo, Q, { title: 0 });
  }
}
function Cl(n, e, t) {
  const l = n.slice();
  return l[3] = e[t], l[5] = t, l;
}
function Il(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l;
}
function ro(n) {
  let e;
  return {
    c() {
      e = pe("EDIT");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function yl(n) {
  let e, t, l = (
    /*plugin*/
    n[6].name + ""
  ), i, r;
  return {
    c() {
      e = P("div"), t = P("span"), i = pe(l), r = V(), R(t, "class", "plugin-item__name svelte-siq5x1"), R(e, "class", "plugin-item svelte-siq5x1");
    },
    m(s, a) {
      O(s, e, a), F(e, t), F(t, i), F(e, r);
    },
    p(s, a) {
      a & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      s[6].name + "") && Me(i, l);
    },
    d(s) {
      s && T(e);
    }
  };
}
function Al(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[3].title + ""
  ), a, o, u, f, c = Be(
    /*group*/
    n[3].plugins
  ), d = [];
  for (let h = 0; h < c.length; h += 1)
    d[h] = yl(Il(n, c, h));
  return {
    c() {
      e = P("div"), t = P("div"), l = P("span"), l.textContent = `${/*i*/
      n[5] + 1}.`, i = V(), r = P("span"), a = pe(s), o = V(), u = P("div");
      for (let h = 0; h < d.length; h += 1)
        d[h].c();
      f = V(), R(l, "class", "plugin__index svelte-siq5x1"), R(r, "class", "plugin__title svelte-siq5x1"), R(t, "class", "plugin__group-title svelte-siq5x1"), R(u, "class", "plugin__items svelte-siq5x1"), R(e, "class", "plugin svelte-siq5x1");
    },
    m(h, b) {
      O(h, e, b), F(e, t), F(t, l), F(t, i), F(t, r), F(r, a), F(e, o), F(e, u);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(u, null);
      F(e, f);
    },
    p(h, b) {
      if (b & /*pluginGroups*/
      1 && s !== (s = /*group*/
      h[3].title + "") && Me(a, s), b & /*pluginGroups*/
      1) {
        c = Be(
          /*group*/
          h[3].plugins
        );
        let p;
        for (p = 0; p < c.length; p += 1) {
          const _ = Il(h, c, p);
          d[p] ? d[p].p(_, b) : (d[p] = yl(_), d[p].c(), d[p].m(u, null));
        }
        for (; p < d.length; p += 1)
          d[p].d(1);
        d.length = c.length;
      }
    },
    d(h) {
      h && T(e), mt(d, h);
    }
  };
}
function so(n) {
  let e, t, l, i, r, s, a;
  r = new qt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      $$slots: { default: [ro] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*edit*/
    n[1]
  );
  let o = Be(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let f = 0; f < o.length; f += 1)
    u[f] = Al(Cl(n, o, f));
  return {
    c() {
      e = P("div"), t = P("div"), l = P("p"), l.textContent = "Process", i = V(), Z(r.$$.fragment), s = V();
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      R(l, "class", "svelte-siq5x1"), R(t, "class", "plugins-list__header svelte-siq5x1"), R(e, "class", "plugins-list svelte-siq5x1");
    },
    m(f, c) {
      O(f, e, c), F(e, t), F(t, l), F(t, i), z(r, t, null), F(e, s);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      a = !0;
    },
    p(f, [c]) {
      const d = {};
      if (c & /*$$scope*/
      512 && (d.$$scope = { dirty: c, ctx: f }), r.$set(d), c & /*pluginGroups*/
      1) {
        o = Be(
          /*pluginGroups*/
          f[0]
        );
        let h;
        for (h = 0; h < o.length; h += 1) {
          const b = Cl(f, o, h);
          u[h] ? u[h].p(b, c) : (u[h] = Al(b), u[h].c(), u[h].m(e, null));
        }
        for (; h < u.length; h += 1)
          u[h].d(1);
        u.length = o.length;
      }
    },
    i(f) {
      a || (A(r.$$.fragment, f), a = !0);
    },
    o(f) {
      S(r.$$.fragment, f), a = !1;
    },
    d(f) {
      f && T(e), W(r), mt(u, f);
    }
  };
}
function ao(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = Ze(), r = () => i("edit");
  return n.$$set = (s) => {
    "pluginGroups" in s && t(0, l = s.pluginGroups);
  }, [l, r];
}
class oo extends ne {
  constructor(e) {
    super(), te(this, e, ao, so, Q, { pluginGroups: 0 });
  }
}
function uo(n) {
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: (n == null ? void 0 : n.name) ?? "—", enabled: !1 }
  ];
}
function fo(n) {
  var e;
  return (e = n == null ? void 0 : n.pluginGroups) != null && e.length ? n.pluginGroups : [{ title: "Process", plugins: (n == null ? void 0 : n.plugins) ?? [] }];
}
function co() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function ho(n) {
  var e;
  (e = co()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function mo(n) {
  if (!customElements.get(n.id)) {
    const e = await import(
      /* @vite-ignore */
      n.src
    );
    customElements.define(n.id, e.default);
  }
}
async function go(n) {
  await Promise.all(
    n.map(async (e) => {
      try {
        if (!customElements.get(e.id)) {
          const t = await import(
            /* @vite-ignore */
            e.src
          );
          customElements.define(e.id, t.default);
        }
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const dt = At(!0);
dt.subscribe((n) => {
  ho(n);
});
function _o(n) {
  let e, t, l, i, r, s, a, o;
  return l = new Ba({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[5]
      ),
      activeIndex: 1
    }
  }), l.$on(
    "click",
    /*onCrumbClick*/
    n[6]
  ), r = new qt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*proc*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [bo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*start*/
    n[7]
  ), a = new oo({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[2]
    ) }
  }), a.$on(
    "edit",
    /*enterEditMode*/
    n[8]
  ), {
    c() {
      e = P("div"), t = P("div"), Z(l.$$.fragment), i = V(), Z(r.$$.fragment), s = V(), Z(a.$$.fragment), R(t, "class", "header svelte-1mdwtvr"), R(e, "class", "step-content svelte-1mdwtvr");
    },
    m(u, f) {
      O(u, e, f), F(e, t), z(l, t, null), F(t, i), z(r, t, null), F(e, s), z(a, e, null), o = !0;
    },
    p(u, f) {
      const c = {};
      f & /*breadcrumbs*/
      32 && (c.breadcrumbs = /*breadcrumbs*/
      u[5]), l.$set(c);
      const d = {};
      f & /*proc*/
      1 && (d.disabled = !/*proc*/
      u[0]), f & /*$$scope*/
      131072 && (d.$$scope = { dirty: f, ctx: u }), r.$set(d);
      const h = {};
      f & /*pluginGroups*/
      4 && (h.pluginGroups = /*pluginGroups*/
      u[2]), a.$set(h);
    },
    i(u) {
      o || (A(l.$$.fragment, u), A(r.$$.fragment, u), A(a.$$.fragment, u), o = !0);
    },
    o(u) {
      S(l.$$.fragment, u), S(r.$$.fragment, u), S(a.$$.fragment, u), o = !1;
    },
    d(u) {
      u && T(e), W(l), W(r), W(a);
    }
  };
}
function po(n) {
  let e, t, l, i, r, s, a, o, u, f, c, d, h, b;
  t = new Gl({}), t.$on(
    "back",
    /*exitWorkflow*/
    n[9]
  ), i = new no({
    props: {
      currentId: (
        /*currentId*/
        n[4]
      ),
      visited: (
        /*visited*/
        n[3]
      )
    }
  }), i.$on(
    "select",
    /*onStepSelect*/
    n[10]
  );
  function p(v, w) {
    if (
      /*currentId*/
      v[4] === "process-definition"
    )
      return Co;
    if (
      /*currentId*/
      v[4] === "validator-configuration"
    )
      return vo;
  }
  let _ = p(n), k = _ && _(n);
  return {
    c() {
      e = P("div"), Z(t.$$.fragment), l = V(), Z(i.$$.fragment), r = V(), s = P("div"), a = P("button"), a.textContent = "Back", o = V(), u = P("button"), u.textContent = "Next", f = V(), k && k.c(), c = Ce(), R(a, "type", "button"), R(a, "class", "btn btn--back svelte-1mdwtvr"), R(a, "aria-label", "Previous step"), R(u, "type", "button"), R(u, "class", "btn btn--next svelte-1mdwtvr"), R(u, "aria-label", "Next step"), R(s, "class", "stepper-navigation svelte-1mdwtvr"), R(e, "class", "stepper svelte-1mdwtvr");
    },
    m(v, w) {
      O(v, e, w), z(t, e, null), F(e, l), z(i, e, null), F(e, r), F(e, s), F(s, a), F(s, o), F(s, u), O(v, f, w), k && k.m(v, w), O(v, c, w), d = !0, h || (b = [
        Y(
          a,
          "click",
          /*previousStep*/
          n[12]
        ),
        Y(
          u,
          "click",
          /*nextStep*/
          n[11]
        )
      ], h = !0);
    },
    p(v, w) {
      const g = {};
      w & /*currentId*/
      16 && (g.currentId = /*currentId*/
      v[4]), w & /*visited*/
      8 && (g.visited = /*visited*/
      v[3]), i.$set(g), _ !== (_ = p(v)) && (k && k.d(1), k = _ && _(v), k && (k.c(), k.m(c.parentNode, c)));
    },
    i(v) {
      d || (A(t.$$.fragment, v), A(i.$$.fragment, v), d = !0);
    },
    o(v) {
      S(t.$$.fragment, v), S(i.$$.fragment, v), d = !1;
    },
    d(v) {
      v && (T(e), T(f), T(c)), W(t), W(i), k && k.d(v), h = !1, de(b);
    }
  };
}
function bo(n) {
  let e;
  return {
    c() {
      e = pe("START PROCESS");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function vo(n) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Text b", R(e, "class", "step-content svelte-1mdwtvr");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Co(n) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Text a", R(e, "class", "step-content svelte-1mdwtvr");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Io(n) {
  let e, t, l, i;
  const r = [po, _o], s = [];
  function a(o, u) {
    return (
      /*isEditMode*/
      o[1] ? 0 : 1
    );
  }
  return t = a(n), l = s[t] = r[t](n), {
    c() {
      e = P("div"), l.c(), R(e, "class", "page-content svelte-1mdwtvr");
    },
    m(o, u) {
      O(o, e, u), s[t].m(e, null), i = !0;
    },
    p(o, [u]) {
      let f = t;
      t = a(o), t === f ? s[t].p(o, u) : (fe(), S(s[f], 1, 1, () => {
        s[f] = null;
      }), ce(), l = s[t], l ? l.p(o, u) : (l = s[t] = r[t](o), l.c()), A(l, 1), l.m(e, null));
    },
    i(o) {
      i || (A(l), i = !0);
    },
    o(o) {
      S(l), i = !1;
    },
    d(o) {
      o && T(e), s[t].d();
    }
  };
}
function yo(n, e, t) {
  let l, i;
  var r;
  let { proc: s = null } = e;
  const a = Ze();
  let o = !1;
  function u(g) {
    dt.set(!0), g.detail.index === 0 && a("back");
  }
  function f() {
    s && a("start", s);
  }
  let c = [];
  function d() {
    t(1, o = !0), dt.set(!1), t(14, p = 0), t(3, _ = []);
  }
  function h() {
    t(1, o = !1), dt.set(!0), a("back");
  }
  const b = ["process-definition", "validator-configuration"];
  let p = 0, _ = [];
  const k = (g) => {
    const U = b.indexOf(g.detail);
    U !== -1 && t(14, p = U);
  }, v = () => {
    if (p < b.length - 1) {
      const g = b[p];
      _.includes(g) || t(3, _ = [..._, g]), t(14, p = p + 1);
    }
    a("next");
  }, w = () => {
    p > 0 && t(14, p = p - 1), a("previous");
  };
  return n.$$set = (g) => {
    "proc" in g && t(0, s = g.proc);
  }, n.$$.update = () => {
    n.$$.dirty & /*proc*/
    1 && t(5, l = uo(s)), n.$$.dirty & /*proc*/
    1 && t(2, c = fo(s)), n.$$.dirty & /*currentStepIndex, _a*/
    24576 && t(4, i = t(13, r = b[p]) !== null && r !== void 0 ? r : null);
  }, [
    s,
    o,
    c,
    _,
    i,
    l,
    u,
    f,
    d,
    h,
    k,
    v,
    w,
    r,
    p
  ];
}
class Ao extends ne {
  constructor(e) {
    super(), te(this, e, yo, Io, Q, { proc: 0 });
  }
}
function ko(n) {
  let e, t;
  return e = new Nl({
    props: {
      items: (
        /*plugins*/
        n[0].map(kl)
      ),
      visited: (
        /*visited*/
        n[1]
      ),
      currentId: (
        /*currentId*/
        n[2]
      ),
      status: (
        /*pluginStatus*/
        n[3]
      ),
      tooltipMap: (
        /*tooltipText*/
        n[4]
      )
    }
  }), e.$on(
    "select",
    /*onSelect*/
    n[5]
  ), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*plugins*/
      1 && (r.items = /*plugins*/
      l[0].map(kl)), i & /*visited*/
      2 && (r.visited = /*visited*/
      l[1]), i & /*currentId*/
      4 && (r.currentId = /*currentId*/
      l[2]), i & /*pluginStatus*/
      8 && (r.status = /*pluginStatus*/
      l[3]), i & /*tooltipText*/
      16 && (r.tooltipMap = /*tooltipText*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
const kl = (n) => ({ id: n.id, label: n.name });
function wo(n, e, t) {
  let l, { plugins: i = [] } = e, { visited: r = [] } = e, { currentId: s = null } = e, { pluginStatus: a = {} } = e;
  const o = Ze(), u = (f) => {
    const c = i.find((d) => d.id === f.detail);
    c && o("select", c);
  };
  return n.$$set = (f) => {
    "plugins" in f && t(0, i = f.plugins), "visited" in f && t(1, r = f.visited), "currentId" in f && t(2, s = f.currentId), "pluginStatus" in f && t(3, a = f.pluginStatus);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    9 && t(4, l = i.reduce(
      (f, c) => {
        const d = a[c.id];
        return f[c.id] = d ?? "", f;
      },
      {}
    ));
  }, [i, r, s, a, l, u];
}
class So extends ne {
  constructor(e) {
    super(), te(this, e, wo, ko, Q, {
      plugins: 0,
      visited: 1,
      currentId: 2,
      pluginStatus: 3
    });
  }
}
function wl(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && $t(n)
  );
  return {
    c() {
      l && l.c(), t = Ce();
    },
    m(i, r) {
      l && l.m(i, r), O(i, t, r);
    },
    p(i, r) {
      /*tagName*/
      i[4] ? e ? Q(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = $t(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = $t(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && T(t), l && l.d(i);
    }
  };
}
function $t(n) {
  let e, t, l, i;
  return {
    c() {
      e = P(
        /*tagName*/
        n[4]
      ), kt(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-uyxnge" });
    },
    m(r, s) {
      O(r, e, s), l || (i = J(t = Eo.call(null, e, {
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
      t && me(t.update) && s & /*doc, editCount*/
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
      r && T(e), l = !1, i();
    }
  };
}
function Lo(n) {
  let e, t, l, i, r, s, a, o, u, f, c, d, h, b;
  t = new Gl({}), t.$on(
    "back",
    /*exitWorkflow*/
    n[9]
  ), i = new So({
    props: {
      plugins: (
        /*plugins*/
        n[2]
      ),
      visited: (
        /*visited*/
        n[5]
      ),
      currentId: (
        /*tagName*/
        n[4]
      ),
      pluginStatus: (
        /*pluginStatus*/
        n[3]
      )
    }
  }), i.$on(
    "select",
    /*select_handler*/
    n[11]
  );
  let p = (
    /*tagName*/
    n[4] && wl(n)
  );
  return {
    c() {
      e = P("div"), Z(t.$$.fragment), l = V(), Z(i.$$.fragment), r = V(), s = P("div"), a = P("button"), a.textContent = "Back", o = V(), u = P("button"), u.textContent = "Next", f = V(), p && p.c(), c = Ce(), R(a, "class", "back-button svelte-uyxnge"), R(u, "class", "next-button svelte-uyxnge"), R(s, "class", "stepper-navigation svelte-uyxnge"), R(e, "class", "stepper svelte-uyxnge");
    },
    m(_, k) {
      O(_, e, k), z(t, e, null), F(e, l), z(i, e, null), F(e, r), F(e, s), F(s, a), F(s, o), F(s, u), O(_, f, k), p && p.m(_, k), O(_, c, k), d = !0, h || (b = [
        Y(
          a,
          "click",
          /*previousPlugin*/
          n[8]
        ),
        Y(
          u,
          "click",
          /*nextPlugin*/
          n[7]
        )
      ], h = !0);
    },
    p(_, [k]) {
      const v = {};
      k & /*plugins*/
      4 && (v.plugins = /*plugins*/
      _[2]), k & /*visited*/
      32 && (v.visited = /*visited*/
      _[5]), k & /*tagName*/
      16 && (v.currentId = /*tagName*/
      _[4]), k & /*pluginStatus*/
      8 && (v.pluginStatus = /*pluginStatus*/
      _[3]), i.$set(v), /*tagName*/
      _[4] ? p ? p.p(_, k) : (p = wl(_), p.c(), p.m(c.parentNode, c)) : p && (p.d(1), p = null);
    },
    i(_) {
      d || (A(t.$$.fragment, _), A(i.$$.fragment, _), d = !0);
    },
    o(_) {
      S(t.$$.fragment, _), S(i.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && (T(e), T(f), T(c)), W(t), W(i), p && p.d(_), h = !1, de(b);
    }
  };
}
function Eo(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Ro(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, { plugins: s = [] } = e, a = null, o = [];
  const u = ["check", "warning", "error"];
  let f = {};
  const c = Ze();
  function d(v) {
    return an(this, void 0, void 0, function* () {
      if (yield mo(v), t(4, a = v.id), !o.includes(v.id)) {
        t(5, o = [...o, v.id]);
        const w = s.findIndex((g) => g.id === v.id);
        t(3, f = Object.assign(Object.assign({}, f), {
          [v.id]: u[w % u.length]
        }));
      }
    });
  }
  function h() {
    p(1);
  }
  function b() {
    p(-1);
  }
  function p(v) {
    const w = s.findIndex((g) => g.id === a);
    d(s[(w + v + s.length) % s.length]);
  }
  Ne(() => {
    s.length && (go(s).catch(console.error), d(s[0])), dt.set(!1);
  });
  function _() {
    dt.set(!0), c("exit");
  }
  const k = (v) => d(v.detail);
  return n.$$set = (v) => {
    "doc" in v && t(0, l = v.doc), "editCount" in v && t(1, i = v.editCount), "host" in v && t(10, r = v.host), "plugins" in v && t(2, s = v.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && s.reduce(
      (v, w) => {
        const g = f[w.id];
        return v[w.id] = g ?? "", v;
      },
      {}
    );
  }, [
    l,
    i,
    s,
    f,
    a,
    o,
    d,
    h,
    b,
    _,
    r,
    k
  ];
}
class Ho extends ne {
  constructor(e) {
    super(), te(this, e, Ro, Lo, Q, {
      doc: 0,
      editCount: 1,
      host: 10,
      plugins: 2
    });
  }
}
function Do(n) {
  let e, t;
  return e = new za({
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
    /*handleView*/
    n[8]
  ), e.$on(
    "start",
    /*handleStart*/
    n[9]
  ), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Mo(n) {
  let e, t;
  return e = new Ao({ props: { proc: (
    /*selected*/
    n[4]
  ) } }), e.$on(
    "back",
    /*goBack*/
    n[10]
  ), e.$on(
    "start",
    /*handleStart*/
    n[9]
  ), {
    c() {
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selected*/
      16 && (r.proc = /*selected*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function To(n) {
  let e, t;
  return e = new Ho({
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
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Oo(n) {
  let e, t, l, i;
  const r = [To, Mo, Do], s = [];
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
      t.c(), l = Ce();
    },
    m(o, u) {
      s[e].m(o, u), O(o, l, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? s[e].p(o, u) : (fe(), S(s[f], 1, 1, () => {
        s[f] = null;
      }), ce(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), A(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (A(t), i = !0);
    },
    o(o) {
      S(t), i = !1;
    },
    d(o) {
      o && T(l), s[e].d(o);
    }
  };
}
function Uo(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], a = null, o = null, u = !0, f = "";
  const c = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGF0YTwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5lbmdpbmVlcmluZy13aXphcmQ8L2lkPgogICAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc3Vic3RhdGlvbi5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbm5lY3Rpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5JRUQ8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yPC9pZD4KICAgICAgICAgIDxuYW1lPlRlbXBsYXRlIEdlbmVyYXRvcjwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdGVtcGxhdGUtZ2VuZXJhdG9yL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgIDwvZ3JvdXA+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+Q29tbXVuaWNhdGlvbjwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5jb21tdW5pY2F0aW9uLWVkaXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (H) => {
    var m, L;
    return (L = (m = H == null ? void 0 : H.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && L !== void 0 ? L : "";
  }, h = (H) => ({
    id: d(H.querySelector("id")),
    name: d(H.querySelector("name")),
    src: d(H.querySelector("src"))
  }), b = (H) => Array.from(H.querySelectorAll("process")).map((m) => {
    const L = Array.from(m.querySelectorAll("plugins-sequence > group")), q = L.length ? L.map((y) => ({
      title: d(y.querySelector(":scope > title")),
      plugins: Array.from(y.querySelectorAll(":scope > plugin")).map(h)
    })) : void 0, M = q ? q.flatMap((y) => y.plugins) : Array.from(m.querySelectorAll("plugins-sequence > plugin")).map(h);
    return {
      id: d(m.querySelector(":scope > id")),
      version: d(m.querySelector(":scope > version")),
      name: d(m.querySelector(":scope > name")),
      description: d(m.querySelector(":scope > description")),
      plugins: M,
      pluginGroups: q
    };
  });
  let p = null;
  function _() {
    return an(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, f = ""), p == null || p.abort(), p = new AbortController();
      try {
        const H = yield fetch(c, {
          cache: "no-cache",
          signal: p.signal
        });
        if (!H.ok)
          throw new Error(`HTTP ${H.status}`);
        const m = yield H.text(), L = new DOMParser().parseFromString(m, "application/xml");
        if (L.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = b(L));
      } catch (H) {
        if ((H == null ? void 0 : H.name) === "AbortError")
          return;
        t(3, s = []), t(7, f = H.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ne(() => (_(), () => p == null ? void 0 : p.abort()));
  function k(H) {
    t(5, o = H), t(4, a = null);
  }
  function v(H) {
    t(4, a = H.detail);
  }
  function w(H) {
    k(H.detail);
  }
  function g() {
    t(4, a = null);
  }
  function U() {
    t(5, o = null), t(4, a = null);
  }
  return n.$$set = (H) => {
    "doc" in H && t(0, l = H.doc), "editCount" in H && t(1, i = H.editCount), "host" in H && t(2, r = H.host);
  }, [
    l,
    i,
    r,
    s,
    a,
    o,
    u,
    f,
    v,
    w,
    g,
    U
  ];
}
class Fo extends ne {
  constructor(e) {
    super(), te(this, e, Uo, Oo, Q, { doc: 0, editCount: 1, host: 2 });
  }
}
function Sl(n) {
  let e, t;
  return e = new Fo({
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
      Z(e.$$.fragment);
    },
    m(l, i) {
      z(e, l, i), t = !0;
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      W(e, l);
    }
  };
}
function Bo(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Sl(n)
  );
  return {
    c() {
      s && s.c(), e = V(), t = P("input"), l = V(), i = P("input"), R(t, "type", "hidden"), R(t, "name", "package-name"), t.value = Ml, R(i, "type", "hidden"), R(i, "name", "package-version"), i.value = Tl;
    },
    m(a, o) {
      s && s.m(a, o), O(a, e, o), O(a, t, o), O(a, l, o), O(a, i, o), r = !0;
    },
    p(a, [o]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? s ? (s.p(a, o), o & /*doc, dev*/
      3 && A(s, 1)) : (s = Sl(a), s.c(), A(s, 1), s.m(e.parentNode, e)) : s && (fe(), S(s, 1, 1, () => {
        s = null;
      }), ce());
    },
    i(a) {
      r || (A(s), r = !0);
    },
    o(a) {
      S(s), r = !1;
    },
    d(a) {
      a && (T(e), T(t), T(l), T(i)), s && s.d(a);
    }
  };
}
function Po(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class qo extends ne {
  constructor(e) {
    super(), te(this, e, Po, Bo, Q, { doc: 0, dev: 1, editCount: 2 });
  }
}
class jo extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new qo({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = No();
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
function No() {
  const n = `${Ml}-v${Tl}-style`, e = Go(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Go() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  jo as default
};
