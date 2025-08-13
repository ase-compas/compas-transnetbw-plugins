var Nn = Object.defineProperty;
var Zn = (n, e, t) => e in n ? Nn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var At = (n, e, t) => (Zn(n, typeof e != "symbol" ? e + "" : e, t), t);
function z() {
}
function Z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function vn(n) {
  return n();
}
function Pt() {
  return /* @__PURE__ */ Object.create(null);
}
function le(n) {
  n.forEach(vn);
}
function re(n) {
  return typeof n == "function";
}
function K(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Wn(n) {
  return Object.keys(n).length === 0;
}
function zn(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return z;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function nt(n, e, t) {
  n.$$.on_destroy.push(zn(e, t));
}
function ce(n, e, t, l) {
  if (n) {
    const i = An(n, e, t, l);
    return n[0](i);
  }
}
function An(n, e, t, l) {
  return n[1] && l ? Z(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function de(n, e, t, l) {
  if (n[2] && l) {
    const i = n[2](l(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const a = [], r = Math.max(e.dirty.length, i.length);
      for (let s = 0; s < r; s += 1)
        a[s] = e.dirty[s] | i[s];
      return a;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function fe(n, e, t, l, i, a) {
  if (i) {
    const r = An(e, t, l, a);
    n.p(r, i);
  }
}
function me(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Oe(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function $(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function In(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Nt(n, e, t) {
  return n.set(t), e;
}
function x(n) {
  return n && re(n.destroy) ? n.destroy : z;
}
const Fn = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function O(n, e) {
  n.appendChild(e);
}
function M(n, e, t) {
  n.insertBefore(e, t || null);
}
function E(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Lt(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function B(n) {
  return document.createElement(n);
}
function je(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ae(n) {
  return document.createTextNode(n);
}
function F() {
  return ae(" ");
}
function be() {
  return ae("");
}
function q(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function k(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const jn = ["width", "height"];
function ie(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && jn.indexOf(l) === -1 ? n[l] = e[l] : k(n, l, e[l]);
}
function gt(n, e) {
  for (const t in e)
    k(n, t, e[t]);
}
function qn(n, e) {
  Object.keys(e).forEach((t) => {
    Vn(n, t, e[t]);
  });
}
function Vn(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : k(n, e, t);
}
function it(n) {
  return /-/.test(n) ? qn : ie;
}
function Xn(n) {
  return Array.from(n.childNodes);
}
function ye(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function ft(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function Ye(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Yn(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function $e(n, e) {
  return new n(e);
}
let st;
function lt(n) {
  st = n;
}
function ve() {
  if (!st)
    throw new Error("Function called outside component initialization");
  return st;
}
function Xe(n) {
  ve().$$.on_mount.push(n);
}
function ht(n) {
  ve().$$.on_destroy.push(n);
}
function Bt() {
  const n = ve();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const a = Yn(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return i.slice().forEach((r) => {
        r.call(n, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
function Ie(n, e) {
  return ve().$$.context.set(n, e), e;
}
function Ee(n) {
  return ve().$$.context.get(n);
}
const Qe = [], ue = [];
let xe = [];
const Zt = [], Jn = /* @__PURE__ */ Promise.resolve();
let Dt = !1;
function Kn() {
  Dt || (Dt = !0, Jn.then(yn));
}
function Mt(n) {
  xe.push(n);
}
const It = /* @__PURE__ */ new Set();
let Je = 0;
function yn() {
  if (Je !== 0)
    return;
  const n = st;
  do {
    try {
      for (; Je < Qe.length; ) {
        const e = Qe[Je];
        Je++, lt(e), Qn(e.$$);
      }
    } catch (e) {
      throw Qe.length = 0, Je = 0, e;
    }
    for (lt(null), Qe.length = 0, Je = 0; ue.length; )
      ue.pop()();
    for (let e = 0; e < xe.length; e += 1) {
      const t = xe[e];
      It.has(t) || (It.add(t), t());
    }
    xe.length = 0;
  } while (Qe.length);
  for (; Zt.length; )
    Zt.pop()();
  Dt = !1, It.clear(), lt(n);
}
function Qn(n) {
  if (n.fragment !== null) {
    n.update(), le(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Mt);
  }
}
function xn(n) {
  const e = [], t = [];
  xe.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), xe = e;
}
const mt = /* @__PURE__ */ new Set();
let Ve;
function ge() {
  Ve = {
    r: 0,
    c: [],
    p: Ve
    // parent group
  };
}
function he() {
  Ve.r || le(Ve.c), Ve = Ve.p;
}
function w(n, e) {
  n && n.i && (mt.delete(n), n.i(e));
}
function D(n, e, t, l) {
  if (n && n.o) {
    if (mt.has(n))
      return;
    mt.add(n), Ve.c.push(() => {
      mt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Ge(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function $n(n, e) {
  n.d(1), e.delete(n.key);
}
function el(n, e) {
  D(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function wn(n, e, t, l, i, a, r, s, o, u, c, d) {
  let f = n.length, h = a.length, p = f;
  const A = {};
  for (; p--; )
    A[n[p].key] = p;
  const _ = [], v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = [];
  for (p = h; p--; ) {
    const y = d(i, a, p), G = t(y);
    let W = r.get(G);
    W ? m.push(() => W.p(y, e)) : (W = u(G, y), W.c()), v.set(G, _[p] = W), G in A && g.set(G, Math.abs(p - A[G]));
  }
  const C = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function R(y) {
    w(y, 1), y.m(s, c), r.set(y.key, y), c = y.first, h--;
  }
  for (; f && h; ) {
    const y = _[h - 1], G = n[f - 1], W = y.key, I = G.key;
    y === G ? (c = y.first, f--, h--) : v.has(I) ? !r.has(W) || C.has(W) ? R(y) : L.has(I) ? f-- : g.get(W) > g.get(I) ? (L.add(W), R(y)) : (C.add(I), f--) : (o(G, r), f--);
  }
  for (; f--; ) {
    const y = n[f];
    v.has(y.key) || o(y, r);
  }
  for (; h; )
    R(_[h - 1]);
  return le(m), _;
}
function oe(n, e) {
  const t = {}, l = {}, i = { $$scope: 1 };
  let a = n.length;
  for (; a--; ) {
    const r = n[a], s = e[a];
    if (s) {
      for (const o in r)
        o in s || (l[o] = 1);
      for (const o in s)
        i[o] || (t[o] = s[o], i[o] = 1);
      n[a] = s;
    } else
      for (const o in r)
        i[o] = 1;
  }
  for (const r in l)
    r in t || (t[r] = void 0);
  return t;
}
function De(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Y(n) {
  n && n.c();
}
function V(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), Mt(() => {
    const a = n.$$.on_mount.map(vn).filter(re);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : le(a), n.$$.on_mount = [];
  }), i.forEach(Mt);
}
function X(n, e) {
  const t = n.$$;
  t.fragment !== null && (xn(t.after_update), le(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function tl(n, e) {
  n.$$.dirty[0] === -1 && (Qe.push(n), Kn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(n, e, t, l, i, a, r = null, s = [-1]) {
  const o = st;
  lt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: z,
    not_equal: i,
    bound: Pt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Pt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  r && r(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (d, f, ...h) => {
    const p = h.length ? h[0] : f;
    return u.ctx && i(u.ctx[d], u.ctx[d] = p) && (!u.skip_bound && u.bound[d] && u.bound[d](p), c && tl(n, d)), f;
  }) : [], u.update(), c = !0, le(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Xn(e.target);
      u.fragment && u.fragment.l(d), d.forEach(E);
    } else
      u.fragment && u.fragment.c();
    e.intro && w(n.$$.fragment), V(n, e.target, e.anchor), yn();
  }
  lt(o);
}
class te {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    At(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    At(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    X(this, 1), this.$destroy = z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!re(t))
      return z;
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
    this.$$set && !Wn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const nl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nl);
const kn = "archive-explorer", Sn = "0.0.1";
var Ht = function(n, e) {
  return Ht = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, Ht(n, e);
};
function Ot(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ht(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Fe = function() {
  return Fe = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Fe.apply(this, arguments);
};
function Tt(n, e, t, l) {
  function i(a) {
    return a instanceof t ? a : new t(function(r) {
      r(a);
    });
  }
  return new (t || (t = Promise))(function(a, r) {
    function s(c) {
      try {
        u(l.next(c));
      } catch (d) {
        r(d);
      }
    }
    function o(c) {
      try {
        u(l.throw(c));
      } catch (d) {
        r(d);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, o);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function ll(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, l, i, a, r = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return r.next = s(0), r.throw = s(1), r.return = s(2), typeof Symbol == "function" && (r[Symbol.iterator] = function() {
    return this;
  }), r;
  function s(u) {
    return function(c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (l)
      throw new TypeError("Generator is already executing.");
    for (; r && (r = 0, u[0] && (t = 0)), t; )
      try {
        if (l = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
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
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = e.call(n, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        l = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function at(n) {
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
function se(n, e, t, l = { bubbles: !0 }, i = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const a = new CustomEvent(e, Object.assign(Object.assign({}, l), { detail: t }));
  if (n == null || n.dispatchEvent(a), i && e.startsWith("SMUI")) {
    const r = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, l), { detail: t }));
    n == null || n.dispatchEvent(r), r.defaultPrevented && a.preventDefault();
  }
  return a;
}
function Wt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i], r = a.indexOf("$");
    r !== -1 && e.indexOf(a.substring(0, r + 1)) !== -1 || e.indexOf(a) === -1 && (l[a] = n[a]);
  }
  return l;
}
const zt = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, il = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Te(n) {
  let e, t = [];
  n.$on = (i, a) => {
    let r = i, s = () => {
    };
    return e ? s = e(r, a) : t.push([r, a]), r.match(zt) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', r), () => {
      s();
    };
  };
  function l(i) {
    const a = n.$$.callbacks[i.type];
    a && a.slice().forEach((r) => r.call(this, i));
  }
  return (i) => {
    const a = [], r = {};
    e = (s, o) => {
      let u = s, c = o, d = !1;
      const f = u.match(zt), h = u.match(il), p = f || h;
      if (u.match(/^SMUI:\w+:/)) {
        const v = u.split(":");
        let g = "";
        for (let m = 0; m < v.length; m++)
          g += m === v.length - 1 ? ":" + v[m] : v[m].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${g.split("$")[0]}.`), u = g;
      }
      if (p) {
        const v = u.split(f ? ":" : "$");
        u = v[0];
        const g = v.slice(1).reduce((m, C) => (m[C] = !0, m), {});
        g.passive && (d = d || {}, d.passive = !0), g.nonpassive && (d = d || {}, d.passive = !1), g.capture && (d = d || {}, d.capture = !0), g.once && (d = d || {}, d.once = !0), g.preventDefault && (c = sl(c)), g.stopPropagation && (c = al(c)), g.stopImmediatePropagation && (c = ol(c)), g.self && (c = rl(i, c)), g.trusted && (c = ul(c));
      }
      const A = Ft(i, u, c, d), _ = () => {
        A();
        const v = a.indexOf(_);
        v > -1 && a.splice(v, 1);
      };
      return a.push(_), u in r || (r[u] = Ft(i, u, l)), _;
    };
    for (let s = 0; s < t.length; s++)
      e(t[s][0], t[s][1]);
    return {
      destroy: () => {
        for (let s = 0; s < a.length; s++)
          a[s]();
        for (let s of Object.entries(r))
          s[1]();
      }
    };
  };
}
function Ft(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function sl(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function al(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function ol(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function rl(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function ul(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function ot(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    a.substring(0, e.length) === e && (l[a.substring(e.length)] = n[a]);
  }
  return l;
}
function He(n, e) {
  let t = [];
  if (e)
    for (let l = 0; l < e.length; l++) {
      const i = e[l], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? t.push(a(n, i[1])) : t.push(a(n));
    }
  return {
    update(l) {
      if ((l && l.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (l)
        for (let i = 0; i < l.length; i++) {
          const a = t[i];
          if (a && a.update) {
            const r = l[i];
            Array.isArray(r) && r.length > 1 ? a.update(r[1]) : a.update();
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
var rt;
function cl(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = rt;
  if (typeof rt == "boolean" && !e)
    return rt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), r = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = a || r, e || (rt = l), l;
}
function dl(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var l = e.x, i = e.y, a = l + t.left, r = i + t.top, s, o;
  if (n.type === "touchstart") {
    var u = n;
    s = u.changedTouches[0].pageX - a, o = u.changedTouches[0].pageY - r;
  } else {
    var c = n;
    s = c.pageX - a, o = c.pageY - r;
  }
  return { x: s, y: o };
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
var Ut = (
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
function fl(n) {
  return n === void 0 && (n = window), ml(n) ? { passive: !0 } : !1;
}
function ml(n) {
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
const gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: fl
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
function hl(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Rn(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Rn(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function bl(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: hl,
  estimateScrollWidth: bl,
  matches: Rn
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
var _l = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, pl = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, jt = {
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
var qt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Vt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ut = [], Cl = (
  /** @class */
  function(n) {
    Ot(e, n);
    function e(t) {
      var l = n.call(this, Fe(Fe({}, e.defaultAdapter), t)) || this;
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
        return _l;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jt;
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
        var i = e.cssClasses, a = i.ROOT, r = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(r), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var l = e.cssClasses, i = l.ROOT, a = l.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(i), t.adapter.removeClass(a), t.removeCssVars();
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
          for (var a = at(qt), r = a.next(); !r.done; r = a.next()) {
            var s = r.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            r && !r.done && (i = a.return) && i.call(a);
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
          for (var a = at(Vt), r = a.next(); !r.done; r = a.next()) {
            var s = r.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            r && !r.done && (i = a.return) && i.call(a);
          } finally {
            if (l)
              throw l.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, l;
      try {
        for (var i = at(qt), a = i.next(); !a.done; a = i.next()) {
          var r = a.value;
          this.adapter.deregisterInteractionHandler(r, this.activateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          a && !a.done && (l = i.return) && l.call(i);
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
        for (var i = at(Vt), a = i.next(); !a.done; a = i.next()) {
          var r = a.value;
          this.adapter.deregisterDocumentInteractionHandler(r, this.deactivateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          a && !a.done && (l = i.return) && l.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, l = e.strings, i = Object.keys(l);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(l[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var l = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, r = a && t !== void 0 && a.type !== t.type;
          if (!r) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var s = t !== void 0 && ut.length > 0 && ut.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ut.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ut = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, l = e.strings, i = l.VAR_FG_TRANSLATE_START, a = l.VAR_FG_TRANSLATE_END, r = e.cssClasses, s = r.FG_DEACTIVATION, o = r.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), h = f.startPoint, p = f.endPoint;
        c = h.x + "px, " + h.y + "px", d = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = dl(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var r = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: r };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, l = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, r = i.isActivated, s = a || !r;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(l), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(l);
      }, jt.FG_DEACTIVATION_MS));
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
        var i = Fe({}, l);
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
        var r = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return r + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? l : i();
      var a = Math.floor(l * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, l = t.VAR_FG_SIZE, i = t.VAR_LEFT, a = t.VAR_TOP, r = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(l, this.initialSize + "px"), this.adapter.updateCssVariable(r, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Ut)
);
const { applyPassive: ct } = gl, { matches: vl } = En;
function yt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: a, active: r, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (p) => n.classList.add(p), removeClass: d = (p) => n.classList.remove(p), addStyle: f = (p, A) => n.style.setProperty(p, A), initPromise: h = Promise.resolve() } = {}) {
  let p, A = Ee("SMUI:addLayoutListener"), _, v = r, g = o, m = u;
  function C() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : a === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), p && v !== r && (v = r, r ? p.activate() : r === !1 && p.deactivate()), e && !p ? (p = new Cl({
      addClass: c,
      browserSupportsCssVars: () => cl(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (R) => n.contains(R),
      deregisterDocumentInteractionHandler: (R, y) => document.documentElement.removeEventListener(R, y, ct()),
      deregisterInteractionHandler: (R, y) => (o || n).removeEventListener(R, y, ct()),
      deregisterResizeHandler: (R) => window.removeEventListener("resize", R),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => r ?? vl(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (R, y) => document.documentElement.addEventListener(R, y, ct()),
      registerInteractionHandler: (R, y) => (o || n).addEventListener(R, y, ct()),
      registerResizeHandler: (R) => window.addEventListener("resize", R),
      removeClass: d,
      updateCssVariable: f
    }), h.then(() => {
      p && (p.init(), p.setUnbounded(l));
    })) : p && !e && h.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (g !== o || m !== u) && (g = o, m = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  C(), A && (_ = A(L));
  function L() {
    p && p.layout();
  }
  return {
    update(R) {
      ({
        ripple: e,
        surface: t,
        unbounded: l,
        disabled: i,
        color: a,
        active: r,
        rippleElement: s,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: d,
        addStyle: f,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (y) => n.classList.add(y), removeClass: (y) => n.classList.remove(y), addStyle: (y, G) => n.style.setProperty(y, G), initPromise: Promise.resolve() }, R)), C();
    },
    destroy() {
      p && (p.destroy(), p = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function Al(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = ce(
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
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a & /*$$scope*/
      8192) && fe(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? de(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : me(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      D(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Il(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[6],
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
        "mdc-button__icon": (
          /*context*/
          n[8] === "button"
        ),
        "mdc-fab__icon": (
          /*context*/
          n[8] === "fab"
        ),
        "mdc-icon-button__icon": (
          /*context*/
          n[8] === "icon-button"
        ),
        "mdc-icon-button__icon--on": (
          /*context*/
          n[8] === "icon-button" && /*on*/
          n[2]
        ),
        "mdc-tab__icon": (
          /*context*/
          n[8] === "tab"
        ),
        "mdc-banner__icon": (
          /*context*/
          n[8] === "banner"
        ),
        "mdc-segmented-button__icon": (
          /*context*/
          n[8] === "segmented-button"
        )
      })
    },
    { "aria-hidden": "true" },
    /*svg*/
    n[7] ? { focusable: "false", tabindex: "-1" } : {},
    /*$$restProps*/
    n[9]
  ];
  var a = (
    /*component*/
    n[3]
  );
  function r(s, o) {
    let u = {
      $$slots: { default: [Al] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < i.length; c += 1)
      u = Z(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (u = Z(u, oe(i, [
      o & /*tag*/
      16 && { tag: (
        /*tag*/
        s[4]
      ) },
      o & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          s[6],
          .../*use*/
          s[0]
        ]
      },
      o & /*className, context, on*/
      262 && {
        class: Q({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-button__icon": (
            /*context*/
            s[8] === "button"
          ),
          "mdc-fab__icon": (
            /*context*/
            s[8] === "fab"
          ),
          "mdc-icon-button__icon": (
            /*context*/
            s[8] === "icon-button"
          ),
          "mdc-icon-button__icon--on": (
            /*context*/
            s[8] === "icon-button" && /*on*/
            s[2]
          ),
          "mdc-tab__icon": (
            /*context*/
            s[8] === "tab"
          ),
          "mdc-banner__icon": (
            /*context*/
            s[8] === "banner"
          ),
          "mdc-segmented-button__icon": (
            /*context*/
            s[8] === "segmented-button"
          )
        })
      },
      i[3],
      o & /*svg*/
      128 && De(
        /*svg*/
        s[7] ? { focusable: "false", tabindex: "-1" } : {}
      ),
      o & /*$$restProps*/
      512 && De(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return a && (e = $e(a, r(n)), n[12](e)), {
    c() {
      e && Y(e.$$.fragment), t = be();
    },
    m(s, o) {
      e && V(e, s, o), M(s, t, o), l = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      8 && a !== (a = /*component*/
      s[3])) {
        if (e) {
          ge();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            X(u, 1);
          }), he();
        }
        a ? (e = $e(a, r(s, o)), s[12](e), Y(e.$$.fragment), w(e.$$.fragment, 1), V(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? oe(i, [
          o & /*tag*/
          16 && { tag: (
            /*tag*/
            s[4]
          ) },
          o & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              s[6],
              .../*use*/
              s[0]
            ]
          },
          o & /*className, context, on*/
          262 && {
            class: Q({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-button__icon": (
                /*context*/
                s[8] === "button"
              ),
              "mdc-fab__icon": (
                /*context*/
                s[8] === "fab"
              ),
              "mdc-icon-button__icon": (
                /*context*/
                s[8] === "icon-button"
              ),
              "mdc-icon-button__icon--on": (
                /*context*/
                s[8] === "icon-button" && /*on*/
                s[2]
              ),
              "mdc-tab__icon": (
                /*context*/
                s[8] === "tab"
              ),
              "mdc-banner__icon": (
                /*context*/
                s[8] === "banner"
              ),
              "mdc-segmented-button__icon": (
                /*context*/
                s[8] === "segmented-button"
              )
            })
          },
          i[3],
          o & /*svg*/
          128 && De(
            /*svg*/
            s[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          o & /*$$restProps*/
          512 && De(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      l || (e && w(e.$$.fragment, s), l = !0);
    },
    o(s) {
      e && D(e.$$.fragment, s), l = !1;
    },
    d(s) {
      s && E(t), n[12](null), e && X(e, s);
    }
  };
}
function yl(n, e, t) {
  const l = ["use", "class", "on", "component", "tag", "getElement"];
  let i = $(e, l), { $$slots: a = {}, $$scope: r } = e;
  const s = Te(ve());
  let { use: o = [] } = e, { class: u = "" } = e, { on: c = !1 } = e, d, { component: f = et } = e, { tag: h = f === et ? "i" : void 0 } = e;
  const p = f === Ll, A = Ee("SMUI:icon:context");
  function _() {
    return d.getElement();
  }
  function v(g) {
    ue[g ? "unshift" : "push"](() => {
      d = g, t(5, d);
    });
  }
  return n.$$set = (g) => {
    e = Z(Z({}, e), Oe(g)), t(9, i = $(e, l)), "use" in g && t(0, o = g.use), "class" in g && t(1, u = g.class), "on" in g && t(2, c = g.on), "component" in g && t(3, f = g.component), "tag" in g && t(4, h = g.tag), "$$scope" in g && t(13, r = g.$$scope);
  }, [
    o,
    u,
    c,
    f,
    h,
    d,
    s,
    p,
    A,
    i,
    _,
    a,
    v,
    r
  ];
}
class wl extends te {
  constructor(e) {
    super(), ee(this, e, yl, Il, K, {
      use: 0,
      class: 1,
      on: 2,
      component: 3,
      tag: 4,
      getElement: 10
    });
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
function kl(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && wt(n)
  );
  return {
    c() {
      i && i.c(), t = be();
    },
    m(a, r) {
      i && i.m(a, r), M(a, t, r), l = !0;
    },
    p(a, r) {
      /*tag*/
      a[1] ? e ? K(
        e,
        /*tag*/
        a[1]
      ) ? (i.d(1), i = wt(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : i.p(a, r) : (i = wt(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      a[1]);
    },
    i(a) {
      l || (w(i, a), l = !0);
    },
    o(a) {
      D(i, a), l = !1;
    },
    d(a) {
      a && E(t), i && i.d(a);
    }
  };
}
function Sl(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && kt(n)
  );
  return {
    c() {
      l && l.c(), t = be();
    },
    m(i, a) {
      l && l.m(i, a), M(i, t, a);
    },
    p(i, a) {
      /*tag*/
      i[1] ? e ? K(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = kt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, a) : (l = kt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: z,
    o: z,
    d(i) {
      i && E(t), l && l.d(i);
    }
  };
}
function Rl(n) {
  let e, t, l, i, a;
  const r = (
    /*#slots*/
    n[8].default
  ), s = ce(
    r,
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
    u = Z(u, o[c]);
  return {
    c() {
      e = je("svg"), s && s.c(), gt(e, u);
    },
    m(c, d) {
      M(c, e, d), s && s.m(e, null), n[9](e), l = !0, i || (a = [
        x(t = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, d) {
      s && s.p && (!l || d & /*$$scope*/
      128) && fe(
        s,
        r,
        c,
        /*$$scope*/
        c[7],
        l ? de(
          r,
          /*$$scope*/
          c[7],
          d,
          null
        ) : me(
          /*$$scope*/
          c[7]
        ),
        null
      ), gt(e, u = oe(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && re(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (w(s, c), l = !0);
    },
    o(c) {
      D(s, c), l = !1;
    },
    d(c) {
      c && E(e), s && s.d(c), n[9](null), i = !1, le(a);
    }
  };
}
function wt(n) {
  let e, t, l, i, a;
  const r = (
    /*#slots*/
    n[8].default
  ), s = ce(
    r,
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
    u = Z(u, o[c]);
  return {
    c() {
      e = B(
        /*tag*/
        n[1]
      ), s && s.c(), it(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      M(c, e, d), s && s.m(e, null), n[11](e), l = !0, i || (a = [
        x(t = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, d) {
      s && s.p && (!l || d & /*$$scope*/
      128) && fe(
        s,
        r,
        c,
        /*$$scope*/
        c[7],
        l ? de(
          r,
          /*$$scope*/
          c[7],
          d,
          null
        ) : me(
          /*$$scope*/
          c[7]
        ),
        null
      ), it(
        /*tag*/
        c[1]
      )(e, u = oe(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && re(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (w(s, c), l = !0);
    },
    o(c) {
      D(s, c), l = !1;
    },
    d(c) {
      c && E(e), s && s.d(c), n[11](null), i = !1, le(a);
    }
  };
}
function kt(n) {
  let e, t, l, i, a = [
    /*$$restProps*/
    n[5]
  ], r = {};
  for (let s = 0; s < a.length; s += 1)
    r = Z(r, a[s]);
  return {
    c() {
      e = B(
        /*tag*/
        n[1]
      ), it(
        /*tag*/
        n[1]
      )(e, r);
    },
    m(s, o) {
      M(s, e, o), n[10](e), l || (i = [
        x(t = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(s, o) {
      it(
        /*tag*/
        s[1]
      )(e, r = oe(a, [o & /*$$restProps*/
      32 && /*$$restProps*/
      s[5]])), t && re(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    d(s) {
      s && E(e), n[10](null), l = !1, le(i);
    }
  };
}
function El(n) {
  let e, t, l, i;
  const a = [Rl, Sl, kl], r = [];
  function s(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = s(n), t = r[e] = a[e](n), {
    c() {
      t.c(), l = be();
    },
    m(o, u) {
      r[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? r[e].p(o, u) : (ge(), D(r[c], 1, 1, () => {
        r[c] = null;
      }), he(), t = r[e], t ? t.p(o, u) : (t = r[e] = a[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      D(t), i = !1;
    },
    d(o) {
      o && E(l), r[e].d(o);
    }
  };
}
function Dl(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let a = $(e, i), { $$slots: r = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Te(ve());
  let d;
  function f() {
    return d;
  }
  function h(_) {
    ue[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  function p(_) {
    ue[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  function A(_) {
    ue[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  return n.$$set = (_) => {
    e = Z(Z({}, e), Oe(_)), t(5, a = $(e, i)), "use" in _ && t(0, o = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, s = _.$$scope);
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
    d,
    l,
    c,
    a,
    f,
    s,
    r,
    h,
    p,
    A
  ];
}
class et extends te {
  constructor(e) {
    super(), ee(this, e, Dl, El, K, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Ml(n) {
  let e, t, l, i, a;
  const r = (
    /*#slots*/
    n[6].default
  ), s = ce(
    r,
    n,
    /*$$scope*/
    n[5],
    null
  );
  let o = [
    /*$$restProps*/
    n[3]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = Z(u, o[c]);
  return {
    c() {
      e = je("svg"), s && s.c(), gt(e, u);
    },
    m(c, d) {
      M(c, e, d), s && s.m(e, null), n[7](e), l = !0, i || (a = [
        x(t = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[2].call(null, e)
        )
      ], i = !0);
    },
    p(c, [d]) {
      s && s.p && (!l || d & /*$$scope*/
      32) && fe(
        s,
        r,
        c,
        /*$$scope*/
        c[5],
        l ? de(
          r,
          /*$$scope*/
          c[5],
          d,
          null
        ) : me(
          /*$$scope*/
          c[5]
        ),
        null
      ), gt(e, u = oe(o, [d & /*$$restProps*/
      8 && /*$$restProps*/
      c[3]])), t && re(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (w(s, c), l = !0);
    },
    o(c) {
      D(s, c), l = !1;
    },
    d(c) {
      c && E(e), s && s.d(c), n[7](null), i = !1, le(a);
    }
  };
}
function Hl(n, e, t) {
  const l = ["use", "getElement"];
  let i = $(e, l), { $$slots: a = {}, $$scope: r } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: s = [] } = e;
  const o = Te(ve());
  let u;
  function c() {
    return u;
  }
  function d(f) {
    ue[f ? "unshift" : "push"](() => {
      u = f, t(1, u);
    });
  }
  return n.$$set = (f) => {
    e = Z(Z({}, e), Oe(f)), t(3, i = $(e, l)), "use" in f && t(0, s = f.use), "$$scope" in f && t(5, r = f.$$scope);
  }, [
    s,
    u,
    o,
    i,
    c,
    r,
    a,
    d
  ];
}
class Ll extends te {
  constructor(e) {
    super(), ee(this, e, Hl, Ml, K, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
const Ke = [];
function St(n, e = z) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(s) {
    if (K(n, s) && (n = s, t)) {
      const o = !Ke.length;
      for (const u of l)
        u[1](), Ke.push(u, n);
      if (o) {
        for (let u = 0; u < Ke.length; u += 2)
          Ke[u][0](Ke[u + 1]);
        Ke.length = 0;
      }
    }
  }
  function a(s) {
    i(s(n));
  }
  function r(s, o = z) {
    const u = [s, o];
    return l.add(u), l.size === 1 && (t = e(i, a) || z), s(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: r };
}
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
var dt = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Ze = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
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
var Bl = (
  /** @class */
  function(n) {
    Ot(e, n);
    function e(t) {
      var l = n.call(this, Fe(Fe({}, e.defaultAdapter), t)) || this;
      return l.hasToggledAriaLabel = !1, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ze;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          notifyChange: function() {
          },
          removeClass: function() {
          },
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this.adapter.getAttr(Ze.DATA_ARIA_LABEL_ON), l = this.adapter.getAttr(Ze.DATA_ARIA_LABEL_OFF);
      if (t && l) {
        if (this.adapter.getAttr(Ze.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Ze.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(dt.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(dt.ICON_BUTTON_ON) : this.adapter.removeClass(dt.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var l = t ? this.adapter.getAttr(Ze.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Ze.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Ze.ARIA_LABEL, l || "");
      } else
        this.adapter.setAttr(Ze.ARIA_PRESSED, "" + t);
    }, e;
  }(Ut)
);
function Xt(n) {
  let e;
  return {
    c() {
      e = B("div"), k(e, "class", "mdc-icon-button__touch");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && E(e);
    }
  };
}
function Ol(n) {
  let e, t, l, i;
  const a = (
    /*#slots*/
    n[33].default
  ), r = ce(
    a,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let s = (
    /*touch*/
    n[8] && Xt()
  );
  return {
    c() {
      e = B("div"), t = F(), r && r.c(), s && s.c(), l = be(), k(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      M(o, e, u), M(o, t, u), r && r.m(o, u), s && s.m(o, u), M(o, l, u), i = !0;
    },
    p(o, u) {
      r && r.p && (!i || u[1] & /*$$scope*/
      64) && fe(
        r,
        a,
        o,
        /*$$scope*/
        o[37],
        i ? de(
          a,
          /*$$scope*/
          o[37],
          u,
          null
        ) : me(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? s || (s = Xt(), s.c(), s.m(l.parentNode, l)) : s && (s.d(1), s = null);
    },
    i(o) {
      i || (w(r, o), i = !0);
    },
    o(o) {
      D(r, o), i = !1;
    },
    d(o) {
      o && (E(e), E(t), E(l)), r && r.d(o), s && s.d(o);
    }
  };
}
function Tl(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          yt,
          {
            ripple: (
              /*ripple*/
              n[4]
            ),
            unbounded: !0,
            color: (
              /*color*/
              n[5]
            ),
            disabled: !!/*$$restProps*/
            n[29].disabled,
            addClass: (
              /*addClass*/
              n[26]
            ),
            removeClass: (
              /*removeClass*/
              n[27]
            ),
            addStyle: (
              /*addStyle*/
              n[28]
            )
          }
        ],
        /*forwardEvents*/
        n[22],
        .../*use*/
        n[1]
      ]
    },
    {
      class: Q({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-icon-button": !0,
        "mdc-icon-button--on": !/*isUninitializedValue*/
        n[23](
          /*pressed*/
          n[0]
        ) && /*pressed*/
        n[0],
        "mdc-icon-button--touch": (
          /*touch*/
          n[8]
        ),
        "mdc-icon-button--display-flex": (
          /*displayFlex*/
          n[9]
        ),
        "smui-icon-button--size-button": (
          /*size*/
          n[10] === "button"
        ),
        "smui-icon-button--size-mini": (
          /*size*/
          n[10] === "mini"
        ),
        "mdc-icon-button--reduced-size": (
          /*size*/
          n[10] === "mini" || /*size*/
          n[10] === "button"
        ),
        "mdc-card__action": (
          /*context*/
          n[24] === "card:action"
        ),
        "mdc-card__action--icon": (
          /*context*/
          n[24] === "card:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          n[24] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          n[24] === "top-app-bar:action"
        ),
        "mdc-snackbar__dismiss": (
          /*context*/
          n[24] === "snackbar:actions"
        ),
        "mdc-data-table__pagination-button": (
          /*context*/
          n[24] === "data-table:pagination"
        ),
        "mdc-data-table__sort-icon-button": (
          /*context*/
          n[24] === "data-table:sortable-header-cell"
        ),
        "mdc-dialog__close": (
          /*context*/
          (n[24] === "dialog:header" || /*context*/
          n[24] === "dialog:sheet") && /*action*/
          n[12] === "close"
        ),
        .../*internalClasses*/
        n[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[19]
      ).map(Rt).concat([
        /*style*/
        n[3]
      ]).join(" ")
    },
    {
      "aria-pressed": /*isUninitializedValue*/ n[23](
        /*pressed*/
        n[0]
      ) ? null : (
        /*pressed*/
        n[0] ? "true" : "false"
      )
    },
    {
      "aria-label": (
        /*pressed*/
        n[0] ? (
          /*ariaLabelOn*/
          n[6]
        ) : (
          /*ariaLabelOff*/
          n[7]
        )
      )
    },
    {
      "data-aria-label-on": (
        /*ariaLabelOn*/
        n[6]
      )
    },
    {
      "data-aria-label-off": (
        /*ariaLabelOff*/
        n[7]
      )
    },
    {
      "aria-describedby": (
        /*ariaDescribedby*/
        n[25]
      )
    },
    { href: (
      /*href*/
      n[11]
    ) },
    /*actionProp*/
    n[21],
    /*internalAttrs*/
    n[20],
    /*$$restProps*/
    n[29]
  ];
  var a = (
    /*component*/
    n[13]
  );
  function r(s, o) {
    let u = {
      $$slots: { default: [Ol] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < i.length; c += 1)
      u = Z(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = Z(u, oe(i, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        s[14]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            yt,
            {
              ripple: (
                /*ripple*/
                s[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                s[5]
              ),
              disabled: !!/*$$restProps*/
              s[29].disabled,
              addClass: (
                /*addClass*/
                s[26]
              ),
              removeClass: (
                /*removeClass*/
                s[27]
              ),
              addStyle: (
                /*addStyle*/
                s[28]
              )
            }
          ],
          /*forwardEvents*/
          s[22],
          .../*use*/
          s[1]
        ]
      },
      o[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: Q({
          [
            /*className*/
            s[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          s[23](
            /*pressed*/
            s[0]
          ) && /*pressed*/
          s[0],
          "mdc-icon-button--touch": (
            /*touch*/
            s[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            s[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            s[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            s[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            s[10] === "mini" || /*size*/
            s[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            s[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            s[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            s[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            s[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            s[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            s[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            s[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (s[24] === "dialog:header" || /*context*/
            s[24] === "dialog:sheet") && /*action*/
            s[12] === "close"
          ),
          .../*internalClasses*/
          s[18]
        })
      },
      o[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          s[19]
        ).map(Rt).concat([
          /*style*/
          s[3]
        ]).join(" ")
      },
      o[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ s[23](
          /*pressed*/
          s[0]
        ) ? null : (
          /*pressed*/
          s[0] ? "true" : "false"
        )
      },
      o[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          s[0] ? (
            /*ariaLabelOn*/
            s[6]
          ) : (
            /*ariaLabelOff*/
            s[7]
          )
        )
      },
      o[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          s[6]
        )
      },
      o[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          s[7]
        )
      },
      o[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          s[25]
        )
      },
      o[0] & /*href*/
      2048 && { href: (
        /*href*/
        s[11]
      ) },
      o[0] & /*actionProp*/
      2097152 && De(
        /*actionProp*/
        s[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && De(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && De(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return a && (e = $e(a, r(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && Y(e.$$.fragment), t = be();
    },
    m(s, o) {
      e && V(e, s, o), M(s, t, o), l = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && a !== (a = /*component*/
      s[13])) {
        if (e) {
          ge();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            X(u, 1);
          }), he();
        }
        a ? (e = $e(a, r(s, o)), s[34](e), e.$on(
          "click",
          /*click_handler*/
          s[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          s[36]
        ), Y(e.$$.fragment), w(e.$$.fragment, 1), V(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? oe(i, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            s[14]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                yt,
                {
                  ripple: (
                    /*ripple*/
                    s[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    s[5]
                  ),
                  disabled: !!/*$$restProps*/
                  s[29].disabled,
                  addClass: (
                    /*addClass*/
                    s[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    s[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    s[28]
                  )
                }
              ],
              /*forwardEvents*/
              s[22],
              .../*use*/
              s[1]
            ]
          },
          o[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: Q({
              [
                /*className*/
                s[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              s[23](
                /*pressed*/
                s[0]
              ) && /*pressed*/
              s[0],
              "mdc-icon-button--touch": (
                /*touch*/
                s[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                s[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                s[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                s[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                s[10] === "mini" || /*size*/
                s[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                s[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                s[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                s[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                s[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                s[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                s[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                s[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (s[24] === "dialog:header" || /*context*/
                s[24] === "dialog:sheet") && /*action*/
                s[12] === "close"
              ),
              .../*internalClasses*/
              s[18]
            })
          },
          o[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              s[19]
            ).map(Rt).concat([
              /*style*/
              s[3]
            ]).join(" ")
          },
          o[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ s[23](
              /*pressed*/
              s[0]
            ) ? null : (
              /*pressed*/
              s[0] ? "true" : "false"
            )
          },
          o[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              s[0] ? (
                /*ariaLabelOn*/
                s[6]
              ) : (
                /*ariaLabelOff*/
                s[7]
              )
            )
          },
          o[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              s[6]
            )
          },
          o[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              s[7]
            )
          },
          o[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              s[25]
            )
          },
          o[0] & /*href*/
          2048 && { href: (
            /*href*/
            s[11]
          ) },
          o[0] & /*actionProp*/
          2097152 && De(
            /*actionProp*/
            s[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && De(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && De(
            /*$$restProps*/
            s[29]
          )
        ]) : {};
        o[0] & /*touch*/
        256 | o[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      l || (e && w(e.$$.fragment, s), l = !0);
    },
    o(s) {
      e && D(e.$$.fragment, s), l = !1;
    },
    d(s) {
      s && E(t), n[34](null), e && X(e, s);
    }
  };
}
const Rt = ([n, e]) => `${n}: ${e};`;
function Ul(n, e, t) {
  let l;
  const i = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "tag",
    "getElement"
  ];
  let a = $(e, i), { $$slots: r = {}, $$scope: s } = e;
  const o = Te(ve());
  let u = () => {
  };
  function c(H) {
    return H === u;
  }
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: p = !0 } = e, { color: A = void 0 } = e, { toggle: _ = !1 } = e, { pressed: v = u } = e, { ariaLabelOn: g = void 0 } = e, { ariaLabelOff: m = void 0 } = e, { touch: C = !1 } = e, { displayFlex: L = !0 } = e, { size: R = "normal" } = e, { href: y = void 0 } = e, { action: G = void 0 } = e, W, I, S = {}, T = {}, N = {}, j = Ee("SMUI:icon-button:context"), we = Ee("SMUI:icon-button:aria-describedby"), { component: ke = et } = e, { tag: Le = ke === et ? y == null ? "button" : "a" : void 0 } = e, Ae = a.disabled;
  Ie("SMUI:icon:context", "icon-button");
  let U = null;
  ht(() => {
    I && I.destroy();
  });
  function pe(H) {
    return H in S ? S[H] : Pe().classList.contains(H);
  }
  function Ue(H) {
    S[H] || t(18, S[H] = !0, S);
  }
  function Be(H) {
    (!(H in S) || S[H]) && t(18, S[H] = !1, S);
  }
  function Se(H, Re) {
    T[H] != Re && (Re === "" || Re == null ? (delete T[H], t(19, T)) : t(19, T[H] = Re, T));
  }
  function J(H) {
    var Re;
    return H in N ? (Re = N[H]) !== null && Re !== void 0 ? Re : null : Pe().getAttribute(H);
  }
  function ne(H, Re) {
    N[H] !== Re && t(20, N[H] = Re, N);
  }
  function _t(H) {
    t(0, v = H.isOn);
  }
  function Pe() {
    return W.getElement();
  }
  function tt(H) {
    ue[H ? "unshift" : "push"](() => {
      W = H, t(16, W);
    });
  }
  const pt = () => I && I.handleClick(), Ct = () => j === "top-app-bar:navigation" && se(Pe(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (H) => {
    e = Z(Z({}, e), Oe(H)), t(29, a = $(e, i)), "use" in H && t(1, d = H.use), "class" in H && t(2, f = H.class), "style" in H && t(3, h = H.style), "ripple" in H && t(4, p = H.ripple), "color" in H && t(5, A = H.color), "toggle" in H && t(30, _ = H.toggle), "pressed" in H && t(0, v = H.pressed), "ariaLabelOn" in H && t(6, g = H.ariaLabelOn), "ariaLabelOff" in H && t(7, m = H.ariaLabelOff), "touch" in H && t(8, C = H.touch), "displayFlex" in H && t(9, L = H.displayFlex), "size" in H && t(10, R = H.size), "href" in H && t(11, y = H.href), "action" in H && t(12, G = H.action), "component" in H && t(13, ke = H.component), "tag" in H && t(14, Le = H.tag), "$$scope" in H && t(37, s = H.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, l = (() => {
      if (j === "data-table:pagination")
        switch (G) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      else
        return j === "dialog:header" || j === "dialog:sheet" ? { "data-mdc-dialog-action": G } : { action: G };
    })()), Ae !== a.disabled) {
      if (W) {
        const H = Pe();
        "blur" in H && H.blur();
      }
      t(31, Ae = a.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && W && Pe() && _ !== U && (_ && !I ? (t(17, I = new Bl({
      addClass: Ue,
      hasClass: pe,
      notifyChange: (H) => {
        _t(H), se(Pe(), "SMUIIconButtonToggle:change", H, void 0, !0);
      },
      removeClass: Be,
      getAttr: J,
      setAttr: ne
    })), I.init()) : !_ && I && (I.destroy(), t(17, I = void 0), t(18, S = {}), t(20, N = {})), t(32, U = _)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && I && !c(v) && I.isOn() !== v && I.toggle(v);
  }, [
    v,
    d,
    f,
    h,
    p,
    A,
    g,
    m,
    C,
    L,
    R,
    y,
    G,
    ke,
    Le,
    Pe,
    W,
    I,
    S,
    T,
    N,
    l,
    o,
    c,
    j,
    we,
    Ue,
    Be,
    Se,
    a,
    _,
    Ae,
    U,
    r,
    tt,
    pt,
    Ct,
    s
  ];
}
class Gl extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      Ul,
      Tl,
      K,
      {
        use: 1,
        class: 2,
        style: 3,
        ripple: 4,
        color: 5,
        toggle: 30,
        pressed: 0,
        ariaLabelOn: 6,
        ariaLabelOff: 7,
        touch: 8,
        displayFlex: 9,
        size: 10,
        href: 11,
        action: 12,
        component: 13,
        tag: 14,
        getElement: 15
      },
      null,
      [-1, -1]
    );
  }
  get getElement() {
    return this.$$.ctx[15];
  }
}
function Pl(n) {
  let e;
  return {
    c() {
      e = ae(
        /*icon*/
        n[1]
      );
    },
    m(t, l) {
      M(t, e, l);
    },
    p(t, l) {
      l & /*icon*/
      2 && ye(
        e,
        /*icon*/
        t[1]
      );
    },
    d(t) {
      t && E(e);
    }
  };
}
function Nl(n) {
  let e, t;
  return e = new wl({
    props: {
      class: "material-icons",
      $$slots: { default: [Pl] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, icon*/
      10 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function Zl(n) {
  let e, t;
  return e = new Gl({
    props: {
      disabled: (
        /*disabled*/
        n[2]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Nl] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    re(
      /*callback*/
      n[0]
    ) && n[0].apply(this, arguments);
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, [i]) {
      n = l;
      const a = {};
      i & /*disabled*/
      4 && (a.disabled = /*disabled*/
      n[2]), i & /*$$scope, icon*/
      10 && (a.$$scope = { dirty: i, ctx: n }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function Wl(n, e, t) {
  let { callback: l = () => {
  } } = e, { icon: i = "" } = e, { disabled: a = !1 } = e;
  return n.$$set = (r) => {
    "callback" in r && t(0, l = r.callback), "icon" in r && t(1, i = r.icon), "disabled" in r && t(2, a = r.disabled);
  }, [l, i, a];
}
class Yt extends te {
  constructor(e) {
    super(), ee(this, e, Wl, Zl, K, { callback: 0, icon: 1, disabled: 2 });
  }
}
function zl(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = ce(
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
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a & /*$$scope*/
      8192) && fe(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? de(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : me(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      D(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Fl(n) {
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
  var a = (
    /*component*/
    n[2]
  );
  function r(s, o) {
    let u = {
      $$slots: { default: [zl] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < i.length; c += 1)
      u = Z(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = Z(u, oe(i, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        s[3]
      ) },
      o & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          s[8],
          .../*use*/
          s[0]
        ]
      },
      o & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Q({
          [
            /*className*/
            s[1]
          ]: !0,
          [
            /*smuiClass*/
            s[6]
          ]: !0,
          .../*smuiClassMap*/
          s[5]
        })
      },
      o & /*props*/
      128 && De(
        /*props*/
        s[7]
      ),
      o & /*$$restProps*/
      512 && De(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return a && (e = $e(a, r(n)), n[12](e)), {
    c() {
      e && Y(e.$$.fragment), t = be();
    },
    m(s, o) {
      e && V(e, s, o), M(s, t, o), l = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && a !== (a = /*component*/
      s[2])) {
        if (e) {
          ge();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            X(u, 1);
          }), he();
        }
        a ? (e = $e(a, r(s, o)), s[12](e), Y(e.$$.fragment), w(e.$$.fragment, 1), V(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? oe(i, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            s[3]
          ) },
          o & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              s[8],
              .../*use*/
              s[0]
            ]
          },
          o & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Q({
              [
                /*className*/
                s[1]
              ]: !0,
              [
                /*smuiClass*/
                s[6]
              ]: !0,
              .../*smuiClassMap*/
              s[5]
            })
          },
          o & /*props*/
          128 && De(
            /*props*/
            s[7]
          ),
          o & /*$$restProps*/
          512 && De(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      l || (e && w(e.$$.fragment, s), l = !0);
    },
    o(s) {
      e && D(e.$$.fragment, s), l = !1;
    },
    d(s) {
      s && E(t), n[12](null), e && X(e, s);
    }
  };
}
const ze = {
  component: et,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function jl(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = $(e, l), { $$slots: a = {}, $$scope: r } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = ze.class, d = {}, f = [], h = ze.contexts, p = ze.props;
  let { component: A = ze.component } = e, { tag: _ = A === et ? ze.tag : void 0 } = e;
  Object.entries(ze.classMap).forEach(([C, L]) => {
    const R = Ee(L);
    R && "subscribe" in R && f.push(R.subscribe((y) => {
      t(5, d[C] = y, d);
    }));
  });
  const v = Te(ve());
  for (let C in h)
    h.hasOwnProperty(C) && Ie(C, h[C]);
  ht(() => {
    for (const C of f)
      C();
  });
  function g() {
    return u.getElement();
  }
  function m(C) {
    ue[C ? "unshift" : "push"](() => {
      u = C, t(4, u);
    });
  }
  return n.$$set = (C) => {
    e = Z(Z({}, e), Oe(C)), t(9, i = $(e, l)), "use" in C && t(0, s = C.use), "class" in C && t(1, o = C.class), "component" in C && t(2, A = C.component), "tag" in C && t(3, _ = C.tag), "$$scope" in C && t(13, r = C.$$scope);
  }, [
    s,
    o,
    A,
    _,
    u,
    d,
    c,
    p,
    v,
    i,
    g,
    a,
    m,
    r
  ];
}
class ql extends te {
  constructor(e) {
    super(), ee(this, e, jl, Fl, K, {
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
const Jt = Object.assign({}, ze);
function _e(n) {
  return new Proxy(ql, {
    construct: function(e, t) {
      return Object.assign(ze, Jt, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(ze, Jt, n), e[t];
    }
  });
}
_e({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
_e({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
_e({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
_e({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
_e({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
_e({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Vl(n) {
  let e, t, l, i, a, r;
  const s = (
    /*#slots*/
    n[8].default
  ), o = ce(
    s,
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
  for (let d = 0; d < u.length; d += 1)
    c = Z(c, u[d]);
  return {
    c() {
      e = B("span"), o && o.c(), ie(e, c);
    },
    m(d, f) {
      M(d, e, f), o && o.m(e, null), n[9](e), i = !0, a || (r = [
        x(l = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], a = !0);
    },
    p(d, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      128) && fe(
        o,
        s,
        d,
        /*$$scope*/
        d[7],
        i ? de(
          s,
          /*$$scope*/
          d[7],
          f,
          null
        ) : me(
          /*$$scope*/
          d[7]
        ),
        null
      ), ie(e, c = oe(u, [
        (!i || f & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            d[4]
          )
        }))) && { class: t },
        f & /*$$restProps*/
        32 && /*$$restProps*/
        d[5]
      ])), l && re(l.update) && f & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      i || (w(o, d), i = !0);
    },
    o(d) {
      D(o, d), i = !1;
    },
    d(d) {
      d && E(e), o && o.d(d), n[9](null), a = !1, le(r);
    }
  };
}
function Xl(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = $(e, l), { $$slots: a = {}, $$scope: r } = e;
  const s = Te(ve());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = Ee("SMUI:list:graphic:menu-selection-group");
  function f() {
    return c;
  }
  function h(p) {
    ue[p ? "unshift" : "push"](() => {
      c = p, t(2, c);
    });
  }
  return n.$$set = (p) => {
    e = Z(Z({}, e), Oe(p)), t(5, i = $(e, l)), "use" in p && t(0, o = p.use), "class" in p && t(1, u = p.class), "$$scope" in p && t(7, r = p.$$scope);
  }, [
    o,
    u,
    c,
    s,
    d,
    i,
    f,
    r,
    a,
    h
  ];
}
class Yl extends te {
  constructor(e) {
    super(), ee(this, e, Xl, Vl, K, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
_e({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
_e({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
_e({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
_e({
  class: "mdc-menu__selection-group-icon",
  component: Yl
});
_e({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
_e({
  class: "mdc-dialog__title",
  tag: "h2"
});
_e({
  class: "mdc-dialog__content",
  tag: "div"
});
_e({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
_e({
  class: "smui-paper__content",
  tag: "div"
});
_e({
  class: "smui-paper__title",
  tag: "h5"
});
_e({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Jl(n) {
  let e, t;
  return {
    c() {
      e = je("svg"), t = je("path"), k(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), k(e, "xmlns", "http://www.w3.org/2000/svg"), k(e, "viewBox", "0 -960 960 960"), k(e, "width", "24"), k(e, "height", "24"), k(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), O(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(l) {
      l && E(e);
    }
  };
}
class Kl extends te {
  constructor(e) {
    super(), ee(this, e, null, Jl, K, {});
  }
}
function Ql(n) {
  let e, t;
  return {
    c() {
      e = je("svg"), t = je("path"), k(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), k(e, "xmlns", "http://www.w3.org/2000/svg"), k(e, "height", "24px"), k(e, "viewBox", "0 -960 960 960"), k(e, "width", "24px"), k(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), O(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(l) {
      l && E(e);
    }
  };
}
class xl extends te {
  constructor(e) {
    super(), ee(this, e, null, Ql, K, {});
  }
}
function $l(n) {
  let e, t;
  return {
    c() {
      e = je("svg"), t = je("path"), k(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), k(e, "xmlns", "http://www.w3.org/2000/svg"), k(e, "height", "24px"), k(e, "viewBox", "0 -960 960 960"), k(e, "width", "24px"), k(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), O(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(l) {
      l && E(e);
    }
  };
}
class ei extends te {
  constructor(e) {
    super(), ee(this, e, null, $l, K, {});
  }
}
function ti(n) {
  let e, t, l, i;
  const a = (
    /*#slots*/
    n[7].default
  ), r = ce(
    a,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      e = B("span"), r && r.c(), ft(e, "display", "inline-block");
    },
    m(s, o) {
      M(s, e, o), r && r.m(e, null), n[8](e), t = !0, l || (i = [
        q(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[1]
        ),
        q(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[2]
        )
      ], l = !0);
    },
    p(s, [o]) {
      r && r.p && (!t || o & /*$$scope*/
      64) && fe(
        r,
        a,
        s,
        /*$$scope*/
        s[6],
        t ? de(
          a,
          /*$$scope*/
          s[6],
          o,
          null
        ) : me(
          /*$$scope*/
          s[6]
        ),
        null
      );
    },
    i(s) {
      t || (w(r, s), t = !0);
    },
    o(s) {
      D(r, s), t = !1;
    },
    d(s) {
      s && E(e), r && r.d(s), n[8](null), l = !1, le(i);
    }
  };
}
function ni(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: a = "" } = e, { hoverDelay: r = 300 } = e, { hideDelay: s = 500 } = e, o, u, c, d, f = { left: 0, top: 0, width: 0 };
  function h() {
    clearTimeout(u), f = c.getBoundingClientRect(), o = setTimeout(
      () => {
        A();
      },
      r
    );
  }
  function p() {
    clearTimeout(o), u = setTimeout(
      () => {
        _();
      },
      s
    );
  }
  function A() {
    _(), d = document.createElement("div"), d.setAttribute("role", "tooltip"), d.textContent = a, Object.assign(d.style, {
      position: "fixed",
      left: `${f.left + f.width / 2}px`,
      top: `${f.top - 8}px`,
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
    }), document.body.appendChild(d);
  }
  function _() {
    d && d.parentNode && (d.parentNode.removeChild(d), d = null);
  }
  ht(() => {
    clearTimeout(o), clearTimeout(u), _();
  });
  function v(g) {
    ue[g ? "unshift" : "push"](() => {
      c = g, t(0, c);
    });
  }
  return n.$$set = (g) => {
    "content" in g && t(3, a = g.content), "hoverDelay" in g && t(4, r = g.hoverDelay), "hideDelay" in g && t(5, s = g.hideDelay), "$$scope" in g && t(6, i = g.$$scope);
  }, [
    c,
    h,
    p,
    a,
    r,
    s,
    i,
    l,
    v
  ];
}
class li extends te {
  constructor(e) {
    super(), ee(this, e, ni, ti, K, { content: 3, hoverDelay: 4, hideDelay: 5 });
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
var We = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Kt = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, qe = {
  ARIA_SELECTED: Kt.ARIA_SELECTED,
  ARIA_SORT: Kt.ARIA_SORT
}, Me;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Me || (Me = {}));
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
var ii = (
  /** @class */
  function(n) {
    Ot(e, n);
    function e(t) {
      return n.call(this, Fe(Fe({}, e.defaultAdapter), t)) || this;
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
      return Tt(this, void 0, void 0, function() {
        return ll(this, function(t) {
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
        var i = this.adapter.getRowIdAtIndex(l), a = !1;
        i && t.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(l, a), this.selectRowAtIndex(l, a);
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
        var a = this.adapter.getRowIdAtIndex(l);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: l, selected: i });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var l = t.columnId, i = t.columnIndex, a = t.headerCell, r = 0; r < this.adapter.getHeaderCellCount(); r++)
        r !== i && (this.adapter.removeClassNameByHeaderCellIndex(r, We.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(r, We.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, qe.ARIA_SORT, Me.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(r, Me.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, We.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(i, qe.ARIA_SORT), o = Me.NONE;
      s === Me.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, We.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, qe.ARIA_SORT, Me.DESCENDING), o = Me.DESCENDING) : s === Me.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, We.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, qe.ARIA_SORT, Me.ASCENDING), o = Me.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, qe.ARIA_SORT, Me.ASCENDING), o = Me.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
        columnId: l,
        columnIndex: i,
        headerCell: a,
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
      }), this.adapter.addClass(We.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(We.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, We.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, qe.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, We.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, qe.ARIA_SELECTED, "false"));
    }, e;
  }(Ut)
);
const si = (n) => ({}), Qt = (n) => ({}), ai = (n) => ({}), xt = (n) => ({});
function $t(n) {
  let e, t, l, i, a;
  const r = (
    /*#slots*/
    n[36].progress
  ), s = ce(
    r,
    n,
    /*$$scope*/
    n[35],
    xt
  );
  return {
    c() {
      e = B("div"), t = B("div"), l = F(), s && s.c(), k(t, "class", "mdc-data-table__scrim"), k(e, "class", "mdc-data-table__progress-indicator"), k(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(en).join(" "));
    },
    m(o, u) {
      M(o, e, u), O(e, t), O(e, l), s && s.m(e, null), a = !0;
    },
    p(o, u) {
      s && s.p && (!a || u[1] & /*$$scope*/
      16) && fe(
        s,
        r,
        o,
        /*$$scope*/
        o[35],
        a ? de(
          r,
          /*$$scope*/
          o[35],
          u,
          ai
        ) : me(
          /*$$scope*/
          o[35]
        ),
        xt
      ), (!a || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(en).join(" "))) && k(e, "style", i);
    },
    i(o) {
      a || (w(s, o), a = !0);
    },
    o(o) {
      D(s, o), a = !1;
    },
    d(o) {
      o && E(e), s && s.d(o);
    }
  };
}
function oi(n) {
  let e, t, l, i, a, r, s, o, u, c, d, f, h, p;
  const A = (
    /*#slots*/
    n[36].default
  ), _ = ce(
    A,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let v = [
    {
      class: i = Q({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    ot(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], g = {};
  for (let I = 0; I < v.length; I += 1)
    g = Z(g, v[I]);
  let m = [
    {
      class: r = Q({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    ot(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], C = {};
  for (let I = 0; I < m.length; I += 1)
    C = Z(C, m[I]);
  let L = (
    /*$$slots*/
    n[24].progress && $t(n)
  );
  const R = (
    /*#slots*/
    n[36].paginate
  ), y = ce(
    R,
    n,
    /*$$scope*/
    n[35],
    Qt
  );
  let G = [
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
    Wt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], W = {};
  for (let I = 0; I < G.length; I += 1)
    W = Z(W, G[I]);
  return {
    c() {
      e = B("div"), t = B("div"), l = B("table"), _ && _.c(), o = F(), L && L.c(), u = F(), y && y.c(), ie(l, g), ie(t, C), ie(e, W);
    },
    m(I, S) {
      M(I, e, S), O(e, t), O(t, l), _ && _.m(l, null), n[37](t), O(e, o), L && L.m(e, null), O(e, u), y && y.m(e, null), n[38](e), f = !0, h || (p = [
        x(a = He.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        x(s = He.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        x(d = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        q(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        q(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        q(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        q(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        q(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        q(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        q(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        q(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        q(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], h = !0);
    },
    p(I, S) {
      _ && _.p && (!f || S[1] & /*$$scope*/
      16) && fe(
        _,
        A,
        I,
        /*$$scope*/
        I[35],
        f ? de(
          A,
          /*$$scope*/
          I[35],
          S,
          null
        ) : me(
          /*$$scope*/
          I[35]
        ),
        null
      ), ie(l, g = oe(v, [
        (!f || S[0] & /*table$class*/
        64 && i !== (i = Q({
          [
            /*table$class*/
            I[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        S[0] & /*$$restProps*/
        33554432 && ot(
          /*$$restProps*/
          I[25],
          "table$"
        )
      ])), a && re(a.update) && S[0] & /*table$use*/
      32 && a.update.call(
        null,
        /*table$use*/
        I[5]
      ), ie(t, C = oe(m, [
        (!f || S[0] & /*container$class*/
        16 && r !== (r = Q({
          [
            /*container$class*/
            I[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: r },
        S[0] & /*$$restProps*/
        33554432 && ot(
          /*$$restProps*/
          I[25],
          "container$"
        )
      ])), s && re(s.update) && S[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        I[3]
      ), /*$$slots*/
      I[24].progress ? L ? (L.p(I, S), S[0] & /*$$slots*/
      16777216 && w(L, 1)) : (L = $t(I), L.c(), w(L, 1), L.m(e, u)) : L && (ge(), D(L, 1, 1, () => {
        L = null;
      }), he()), y && y.p && (!f || S[1] & /*$$scope*/
      16) && fe(
        y,
        R,
        I,
        /*$$scope*/
        I[35],
        f ? de(
          R,
          /*$$scope*/
          I[35],
          S,
          si
        ) : me(
          /*$$scope*/
          I[35]
        ),
        Qt
      ), ie(e, W = oe(G, [
        (!f || S[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = Q({
          [
            /*className*/
            I[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            I[2]
          ),
          .../*internalClasses*/
          I[12]
        }))) && { class: c },
        S[0] & /*$$restProps*/
        33554432 && Wt(
          /*$$restProps*/
          I[25],
          ["container$", "table$"]
        )
      ])), d && re(d.update) && S[0] & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        I[0]
      );
    },
    i(I) {
      f || (w(_, I), w(L), w(y, I), f = !0);
    },
    o(I) {
      D(_, I), D(L), D(y, I), f = !1;
    },
    d(I) {
      I && E(e), _ && _.d(I), n[37](null), L && L.d(), y && y.d(I), n[38](null), h = !1, le(p);
    }
  };
}
const en = ([n, e]) => `${n}: ${e};`;
function ri(n, e, t) {
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
  let i = $(e, l), a, r, s, { $$slots: o = {}, $$scope: u } = e;
  const c = In(o), { closest: d } = En, f = Te(ve());
  let { use: h = [] } = e, { class: p = "" } = e, { stickyHeader: A = !1 } = e, { sortable: _ = !1 } = e, { sort: v = null } = e, { sortDirection: g = "ascending" } = e, { sortAscendingAriaLabel: m = "sorted, ascending" } = e, { sortDescendingAriaLabel: C = "sorted, descending" } = e, { container$use: L = [] } = e, { container$class: R = "" } = e, { table$use: y = [] } = e, { table$class: G = "" } = e, W, I, S, T, N, j = {}, we = { height: "auto", top: "initial" }, ke = Ee("SMUI:addLayoutListener"), Le, Ae = !1, U = St(!1);
  nt(n, U, (b) => t(34, a = b));
  let pe = St(v);
  nt(n, pe, (b) => t(45, s = b));
  let Ue = St(g);
  nt(n, Ue, (b) => t(44, r = b)), Ie("SMUI:checkbox:context", "data-table"), Ie("SMUI:linear-progress:context", "data-table"), Ie("SMUI:linear-progress:closed", U), Ie("SMUI:data-table:sortable", _), Ie("SMUI:data-table:sort", pe), Ie("SMUI:data-table:sortDirection", Ue), Ie("SMUI:data-table:sortAscendingAriaLabel", m), Ie("SMUI:data-table:sortDescendingAriaLabel", C), ke && (Le = ke(Re));
  let Be;
  Xe(() => (t(7, I = new ii({
    addClass: _t,
    removeClass: Pe,
    getHeaderCellElements: () => {
      var b;
      return (b = T == null ? void 0 : T.cells.map((P) => P.element)) !== null && b !== void 0 ? b : [];
    },
    getHeaderCellCount: () => {
      var b;
      return (b = T == null ? void 0 : T.cells.length) !== null && b !== void 0 ? b : 0;
    },
    getAttributeByHeaderCellIndex: (b, P) => {
      var Ce;
      return (Ce = T == null ? void 0 : T.orderedCells[b].getAttr(P)) !== null && Ce !== void 0 ? Ce : null;
    },
    setAttributeByHeaderCellIndex: (b, P, Ce) => {
      T == null || T.orderedCells[b].addAttr(P, Ce);
    },
    setClassNameByHeaderCellIndex: (b, P) => {
      T == null || T.orderedCells[b].addClass(P);
    },
    removeClassNameByHeaderCellIndex: (b, P) => {
      T == null || T.orderedCells[b].removeClass(P);
    },
    notifySortAction: (b) => {
      t(26, v = b.columnId), t(27, g = b.sortValue), se(Ne(), "SMUIDataTable:sorted", b, void 0, !0);
    },
    getTableContainerHeight: () => S.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const b = Ne().querySelector(".mdc-data-table__header-row");
      if (!b)
        throw new Error("MDCDataTable: Table header element not found.");
      return b.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (b) => {
      t(13, we = b);
    },
    addClassAtRowIndex: (b, P) => {
      N == null || N.orderedRows[b].addClass(P);
    },
    getRowCount: () => {
      var b;
      return (b = N == null ? void 0 : N.rows.length) !== null && b !== void 0 ? b : 0;
    },
    getRowElements: () => {
      var b;
      return (b = N == null ? void 0 : N.rows.map((P) => P.element)) !== null && b !== void 0 ? b : [];
    },
    getRowIdAtIndex: (b) => {
      var P;
      return (P = N == null ? void 0 : N.orderedRows[b].rowId) !== null && P !== void 0 ? P : null;
    },
    getRowIndexByChildElement: (b) => {
      var P;
      return (P = N == null ? void 0 : N.orderedRows.map((Ce) => Ce.element).indexOf(d(b, ".mdc-data-table__row"))) !== null && P !== void 0 ? P : -1;
    },
    getSelectedRowCount: () => {
      var b;
      return (b = N == null ? void 0 : N.rows.filter((P) => P.selected).length) !== null && b !== void 0 ? b : 0;
    },
    isCheckboxAtRowIndexChecked: (b) => {
      const P = N == null ? void 0 : N.orderedRows[b].checkbox;
      return P ? P.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const b = T == null ? void 0 : T.checkbox;
      return b ? b.checked : !1;
    },
    isRowsSelectable: () => !!Ne().querySelector(".mdc-data-table__row-checkbox") || !!Ne().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (b) => {
      const P = N == null ? void 0 : N.orderedRows[b.rowIndex];
      P && se(
        Ne(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: P.element,
          rowId: P.rowId,
          rowIndex: b.rowIndex,
          selected: b.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      tt(!1), se(Ne(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      tt(!1), se(Ne(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (b) => {
      se(Ne(), "SMUIDataTable:rowClick", b, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (b, P) => {
      N == null || N.orderedRows[b].removeClass(P);
    },
    setAttributeAtRowIndex: (b, P, Ce) => {
      N == null || N.orderedRows[b].addAttr(P, Ce);
    },
    setHeaderRowCheckboxChecked: (b) => {
      const P = T == null ? void 0 : T.checkbox;
      P && (P.checked = b);
    },
    setHeaderRowCheckboxIndeterminate: tt,
    setRowCheckboxCheckedAtIndex: (b, P) => {
      const Ce = N == null ? void 0 : N.orderedRows[b].checkbox;
      Ce && (Ce.checked = P);
    },
    setSortStatusLabelByHeaderCellIndex: (b, P) => {
    }
    // Handled automatically.
  })), I.init(), I.layout(), t(14, Ae = !0), () => {
    I.destroy();
  })), ht(() => {
    Le && Le();
  });
  function Se(b) {
    t(10, T = b.detail);
  }
  function J(b) {
    t(11, N = b.detail);
  }
  function ne(b) {
    I && I.handleRowCheckboxChange(b);
  }
  function _t(b) {
    j[b] || t(12, j[b] = !0, j);
  }
  function Pe(b) {
    (!(b in j) || j[b]) && t(12, j[b] = !1, j);
  }
  function tt(b) {
    const P = T == null ? void 0 : T.checkbox;
    P && (P.indeterminate = b);
  }
  function pt(b) {
    if (!I || !b.detail.target)
      return;
    const P = d(b.detail.target, ".mdc-data-table__header-cell--with-sort");
    P && H(P);
  }
  function Ct(b) {
    if (!I || !b.detail.target)
      return;
    const P = d(b.detail.target, ".mdc-data-table__row");
    P && I && I.handleRowClick({ rowId: b.detail.rowId, row: P });
  }
  function H(b) {
    var P, Ce;
    const Gt = (P = T == null ? void 0 : T.orderedCells) !== null && P !== void 0 ? P : [], vt = Gt.map((Pn) => Pn.element).indexOf(b);
    if (vt === -1)
      return;
    const Gn = (Ce = Gt[vt].columnId) !== null && Ce !== void 0 ? Ce : null;
    I.handleSortAction({ columnId: Gn, columnIndex: vt, headerCell: b });
  }
  function Re() {
    return I.layout();
  }
  function Ne() {
    return W;
  }
  function Hn(b) {
    ue[b ? "unshift" : "push"](() => {
      S = b, t(9, S);
    });
  }
  function Ln(b) {
    ue[b ? "unshift" : "push"](() => {
      W = b, t(8, W);
    });
  }
  const Bn = () => I && Ae && I.layout(), On = () => t(10, T = void 0), Tn = () => t(11, N = void 0), Un = () => I && I.handleHeaderRowCheckboxChange();
  return n.$$set = (b) => {
    e = Z(Z({}, e), Oe(b)), t(25, i = $(e, l)), "use" in b && t(0, h = b.use), "class" in b && t(1, p = b.class), "stickyHeader" in b && t(2, A = b.stickyHeader), "sortable" in b && t(28, _ = b.sortable), "sort" in b && t(26, v = b.sort), "sortDirection" in b && t(27, g = b.sortDirection), "sortAscendingAriaLabel" in b && t(29, m = b.sortAscendingAriaLabel), "sortDescendingAriaLabel" in b && t(30, C = b.sortDescendingAriaLabel), "container$use" in b && t(3, L = b.container$use), "container$class" in b && t(4, R = b.container$class), "table$use" in b && t(5, y = b.table$use), "table$class" in b && t(6, G = b.table$class), "$$scope" in b && t(35, u = b.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Nt(pe, s = v, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Nt(Ue, r = g, r), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && I && Be !== a && (t(33, Be = a), a ? I.hideProgress() : I.showProgress());
  }, [
    h,
    p,
    A,
    L,
    R,
    y,
    G,
    I,
    W,
    S,
    T,
    N,
    j,
    we,
    Ae,
    f,
    U,
    pe,
    Ue,
    Se,
    J,
    ne,
    pt,
    Ct,
    c,
    i,
    v,
    g,
    _,
    m,
    C,
    Re,
    Ne,
    Be,
    a,
    u,
    o,
    Hn,
    Ln,
    Bn,
    On,
    Tn,
    Un
  ];
}
class ui extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      ri,
      oi,
      K,
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
function ci(n) {
  let e, t, l, i, a;
  const r = (
    /*#slots*/
    n[10].default
  ), s = ce(
    r,
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
    u = Z(u, o[c]);
  return {
    c() {
      e = B("thead"), s && s.c(), ie(e, u);
    },
    m(c, d) {
      M(c, e, d), s && s.m(e, null), n[11](e), l = !0, i || (a = [
        x(t = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        q(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        q(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        q(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        q(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(c, [d]) {
      s && s.p && (!l || d & /*$$scope*/
      512) && fe(
        s,
        r,
        c,
        /*$$scope*/
        c[9],
        l ? de(
          r,
          /*$$scope*/
          c[9],
          d,
          null
        ) : me(
          /*$$scope*/
          c[9]
        ),
        null
      ), ie(e, u = oe(o, [d & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && re(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (w(s, c), l = !0);
    },
    o(c) {
      D(s, c), l = !1;
    },
    d(c) {
      c && E(e), s && s.d(c), n[11](null), i = !1, le(a);
    }
  };
}
function di(n, e, t) {
  const l = ["use", "getElement"];
  let i = $(e, l), { $$slots: a = {}, $$scope: r } = e;
  const s = Te(ve());
  let { use: o = [] } = e, u, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  Ie("SMUI:data-table:row:header", !0), Xe(() => {
    const C = {
      get cells() {
        return d;
      },
      get orderedCells() {
        return _();
      },
      get checkbox() {
        return c;
      }
    };
    return se(v(), "SMUIDataTableHeader:mount", C), () => {
      se(v(), "SMUIDataTableHeader:unmount", C);
    };
  });
  function h(C) {
    t(2, c = C.detail);
  }
  function p(C) {
    d.push(C.detail), f.set(C.detail.element, C.detail), C.stopPropagation();
  }
  function A(C) {
    const L = d.indexOf(C.detail);
    L !== -1 && (d.splice(L, 1), d = d), f.delete(C.detail.element), C.stopPropagation();
  }
  function _() {
    return [...v().querySelectorAll(".mdc-data-table__header-cell")].map((C) => f.get(C)).filter((C) => C && C._smui_data_table_header_cell_accessor);
  }
  function v() {
    return u;
  }
  function g(C) {
    ue[C ? "unshift" : "push"](() => {
      u = C, t(1, u);
    });
  }
  const m = () => t(2, c = void 0);
  return n.$$set = (C) => {
    e = Z(Z({}, e), Oe(C)), t(7, i = $(e, l)), "use" in C && t(0, o = C.use), "$$scope" in C && t(9, r = C.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    p,
    A,
    i,
    v,
    r,
    a,
    g,
    m
  ];
}
class fi extends te {
  constructor(e) {
    super(), ee(this, e, di, ci, K, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function mi(n) {
  let e, t, l, i, a, r;
  const s = (
    /*#slots*/
    n[9].default
  ), o = ce(
    s,
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
  for (let d = 0; d < u.length; d += 1)
    c = Z(c, u[d]);
  return {
    c() {
      e = B("tbody"), o && o.c(), ie(e, c);
    },
    m(d, f) {
      M(d, e, f), o && o.m(e, null), n[10](e), i = !0, a || (r = [
        x(l = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        q(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        q(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], a = !0);
    },
    p(d, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      256) && fe(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        i ? de(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : me(
          /*$$scope*/
          d[8]
        ),
        null
      ), ie(e, c = oe(u, [
        (!i || f & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        d[6]
      ])), l && re(l.update) && f & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      i || (w(o, d), i = !0);
    },
    o(d) {
      D(o, d), i = !1;
    },
    d(d) {
      d && E(e), o && o.d(d), n[10](null), a = !1, le(r);
    }
  };
}
function gi(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = $(e, l), { $$slots: a = {}, $$scope: r } = e;
  const s = Te(ve());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  Ie("SMUI:data-table:row:header", !1), Xe(() => {
    const g = {
      get rows() {
        return d;
      },
      get orderedRows() {
        return A();
      }
    };
    return se(_(), "SMUIDataTableBody:mount", g), () => {
      se(_(), "SMUIDataTableBody:unmount", g);
    };
  });
  function h(g) {
    d.push(g.detail), f.set(g.detail.element, g.detail), g.stopPropagation();
  }
  function p(g) {
    const m = d.indexOf(g.detail);
    m !== -1 && (d.splice(m, 1), d = d), f.delete(g.detail.element), g.stopPropagation();
  }
  function A() {
    return [..._().querySelectorAll(".mdc-data-table__row")].map((g) => f.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function _() {
    return c;
  }
  function v(g) {
    ue[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  return n.$$set = (g) => {
    e = Z(Z({}, e), Oe(g)), t(6, i = $(e, l)), "use" in g && t(0, o = g.use), "class" in g && t(1, u = g.class), "$$scope" in g && t(8, r = g.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    p,
    i,
    _,
    r,
    a,
    v
  ];
}
class hi extends te {
  constructor(e) {
    super(), ee(this, e, gi, mi, K, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function bi(n) {
  let e, t, l, i, a, r, s;
  const o = (
    /*#slots*/
    n[15].default
  ), u = ce(
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
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = Z(d, c[f]);
  return {
    c() {
      e = B("tr"), u && u.c(), ie(e, d);
    },
    m(f, h) {
      M(f, e, h), u && u.m(e, null), n[16](e), a = !0, r || (s = [
        x(i = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        q(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        q(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        q(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], r = !0);
    },
    p(f, [h]) {
      u && u.p && (!a || h & /*$$scope*/
      16384) && fe(
        u,
        o,
        f,
        /*$$scope*/
        f[14],
        a ? de(
          o,
          /*$$scope*/
          f[14],
          h,
          null
        ) : me(
          /*$$scope*/
          f[14]
        ),
        null
      ), ie(e, d = oe(c, [
        (!a || h & /*className, checkbox, internalClasses*/
        26 && t !== (t = Q({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__header-row": (
            /*header*/
            f[7]
          ),
          "mdc-data-table__row": !/*header*/
          f[7],
          "mdc-data-table__row--selected": !/*header*/
          f[7] && /*checkbox*/
          f[3] && /*checkbox*/
          f[3].checked,
          .../*internalClasses*/
          f[4]
        }))) && { class: t },
        (!a || h & /*checkbox*/
        8 && l !== (l = /*checkbox*/
        f[3] ? (
          /*checkbox*/
          f[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": l },
        h & /*internalAttrs*/
        32 && /*internalAttrs*/
        f[5],
        h & /*$$restProps*/
        2048 && /*$$restProps*/
        f[11]
      ])), i && re(i.update) && h & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      a || (w(u, f), a = !0);
    },
    o(f) {
      D(u, f), a = !1;
    },
    d(f) {
      f && E(e), u && u.d(f), n[16](null), r = !1, le(s);
    }
  };
}
let _i = 0;
function pi(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = $(e, l), { $$slots: a = {}, $$scope: r } = e;
  const s = Te(ve());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + _i++ } = e, d, f, h = {}, p = {}, A = Ee("SMUI:data-table:row:header");
  Xe(() => {
    const S = A ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return y();
      },
      get checkbox() {
        return f;
      },
      get rowId() {
      },
      get selected() {
        var T;
        return (T = f && f.checked) !== null && T !== void 0 ? T : !1;
      },
      addClass: v,
      removeClass: g,
      getAttr: m,
      addAttr: C
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return y();
      },
      get checkbox() {
        return f;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var T;
        return (T = f && f.checked) !== null && T !== void 0 ? T : !1;
      },
      addClass: v,
      removeClass: g,
      getAttr: m,
      addAttr: C
    };
    return se(y(), "SMUIDataTableRow:mount", S), () => {
      se(y(), "SMUIDataTableRow:unmount", S);
    };
  });
  function _(S) {
    t(3, f = S.detail);
  }
  function v(S) {
    h[S] || t(4, h[S] = !0, h);
  }
  function g(S) {
    (!(S in h) || h[S]) && t(4, h[S] = !1, h);
  }
  function m(S) {
    var T;
    return S in p ? (T = p[S]) !== null && T !== void 0 ? T : null : y().getAttribute(S);
  }
  function C(S, T) {
    p[S] !== T && t(5, p[S] = T, p);
  }
  function L(S) {
    se(y(), "SMUIDataTableHeader:click", S);
  }
  function R(S) {
    se(y(), "SMUIDataTableRow:click", { rowId: c, target: S.target });
  }
  function y() {
    return d;
  }
  function G(S) {
    ue[S ? "unshift" : "push"](() => {
      d = S, t(2, d);
    });
  }
  const W = (S) => A ? L(S) : R(S), I = () => t(3, f = void 0);
  return n.$$set = (S) => {
    e = Z(Z({}, e), Oe(S)), t(11, i = $(e, l)), "use" in S && t(0, o = S.use), "class" in S && t(1, u = S.class), "rowId" in S && t(12, c = S.rowId), "$$scope" in S && t(14, r = S.$$scope);
  }, [
    o,
    u,
    d,
    f,
    h,
    p,
    s,
    A,
    _,
    L,
    R,
    i,
    c,
    y,
    r,
    a,
    G,
    W,
    I
  ];
}
class Dn extends te {
  constructor(e) {
    super(), ee(this, e, pi, bi, K, {
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
function Ci(n) {
  let e, t, l, i, a, r;
  const s = (
    /*#slots*/
    n[22].default
  ), o = ce(
    s,
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
  for (let d = 0; d < u.length; d += 1)
    c = Z(c, u[d]);
  return {
    c() {
      e = B("td"), o && o.c(), ie(e, c);
    },
    m(d, f) {
      M(d, e, f), o && o.m(e, null), n[25](e), i = !0, a || (r = [
        x(l = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        q(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], a = !0);
    },
    p(d, f) {
      o && o.p && (!i || f & /*$$scope*/
      2097152) && fe(
        o,
        s,
        d,
        /*$$scope*/
        d[21],
        i ? de(
          s,
          /*$$scope*/
          d[21],
          f,
          null
        ) : me(
          /*$$scope*/
          d[21]
        ),
        null
      ), ie(e, c = oe(u, [
        (!i || f & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = Q({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__cell": !0,
          "mdc-data-table__cell--numeric": (
            /*numeric*/
            d[2]
          ),
          "mdc-data-table__cell--checkbox": (
            /*checkbox*/
            d[3]
          ),
          .../*internalClasses*/
          d[7]
        }))) && { class: t },
        f & /*internalAttrs*/
        256 && /*internalAttrs*/
        d[8],
        f & /*$$restProps*/
        524288 && /*$$restProps*/
        d[19]
      ])), l && re(l.update) && f & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      i || (w(o, d), i = !0);
    },
    o(d) {
      D(o, d), i = !1;
    },
    d(d) {
      d && E(e), o && o.d(d), n[25](null), a = !1, le(r);
    }
  };
}
function vi(n) {
  let e, t, l, i, a, r, s, o, u;
  const c = [Ii, Ai], d = [];
  function f(A, _) {
    return (
      /*sortable*/
      A[5] ? 0 : 1
    );
  }
  t = f(n), l = d[t] = c[t](n);
  let h = [
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
      "aria-sort": a = /*sortable*/
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
  ], p = {};
  for (let A = 0; A < h.length; A += 1)
    p = Z(p, h[A]);
  return {
    c() {
      e = B("th"), l.c(), ie(e, p);
    },
    m(A, _) {
      M(A, e, _), d[t].m(e, null), n[23](e), s = !0, o || (u = [
        x(r = He.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        q(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(A, _) {
      let v = t;
      t = f(A), t === v ? d[t].p(A, _) : (ge(), D(d[v], 1, 1, () => {
        d[v] = null;
      }), he(), l = d[t], l ? l.p(A, _) : (l = d[t] = c[t](A), l.c()), w(l, 1), l.m(e, null)), ie(e, p = oe(h, [
        (!s || _ & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = Q({
          [
            /*className*/
            A[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            A[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            A[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            A[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            A[5] && /*$sort*/
            A[9] === /*columnId*/
            A[4]
          ),
          .../*internalClasses*/
          A[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!s || _ & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          A[4]
        ) },
        (!s || _ & /*sortable, $sort, columnId, $sortDirection*/
        1584 && a !== (a = /*sortable*/
        A[5] ? (
          /*$sort*/
          A[9] === /*columnId*/
          A[4] ? (
            /*$sortDirection*/
            A[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": a },
        _ & /*internalAttrs*/
        256 && /*internalAttrs*/
        A[8],
        _ & /*$$restProps*/
        524288 && /*$$restProps*/
        A[19]
      ])), r && re(r.update) && _ & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        A[0]
      );
    },
    i(A) {
      s || (w(l), s = !0);
    },
    o(A) {
      D(l), s = !1;
    },
    d(A) {
      A && E(e), d[t].d(), n[23](null), o = !1, le(u);
    }
  };
}
function Ai(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = ce(
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
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a & /*$$scope*/
      2097152) && fe(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? de(
          t,
          /*$$scope*/
          i[21],
          a,
          null
        ) : me(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      D(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ii(n) {
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
  ), a, r, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ce(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = B("div"), u && u.c(), t = F(), l = B("div"), a = ae(i), k(l, "class", "mdc-data-table__sort-status-label"), k(l, "aria-hidden", "true"), k(l, "id", r = /*columnId*/
      n[4] + "-status-label"), k(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, d) {
      M(c, e, d), u && u.m(e, null), O(e, t), O(e, l), O(l, a), s = !0;
    },
    p(c, d) {
      u && u.p && (!s || d & /*$$scope*/
      2097152) && fe(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        s ? de(
          o,
          /*$$scope*/
          c[21],
          d,
          null
        ) : me(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!s || d & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && ye(a, i), (!s || d & /*columnId*/
      16 && r !== (r = /*columnId*/
      c[4] + "-status-label")) && k(l, "id", r);
    },
    i(c) {
      s || (w(u, c), s = !0);
    },
    o(c) {
      D(u, c), s = !1;
    },
    d(c) {
      c && E(e), u && u.d(c);
    }
  };
}
function yi(n) {
  let e, t, l, i;
  const a = [vi, Ci], r = [];
  function s(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = s(n), t = r[e] = a[e](n), {
    c() {
      t.c(), l = be();
    },
    m(o, u) {
      r[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      D(t), i = !1;
    },
    d(o) {
      o && E(l), r[e].d(o);
    }
  };
}
let wi = 0;
function ki(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = $(e, l), a, r, { $$slots: s = {}, $$scope: o } = e;
  const u = Te(ve());
  let c = Ee("SMUI:data-table:row:header"), { use: d = [] } = e, { class: f = "" } = e, { numeric: h = !1 } = e, { checkbox: p = !1 } = e, { columnId: A = c ? "SMUI-data-table-column-" + wi++ : "SMUI-data-table-unused" } = e, { sortable: _ = Ee("SMUI:data-table:sortable") } = e, v, g = {}, m = {}, C = Ee("SMUI:data-table:sort");
  nt(n, C, (U) => t(9, a = U));
  let L = Ee("SMUI:data-table:sortDirection");
  nt(n, L, (U) => t(10, r = U));
  let R = Ee("SMUI:data-table:sortAscendingAriaLabel"), y = Ee("SMUI:data-table:sortDescendingAriaLabel");
  _ && (Ie("SMUI:label:context", "data-table:sortable-header-cell"), Ie("SMUI:icon-button:context", "data-table:sortable-header-cell"), Ie("SMUI:icon-button:aria-describedby", A + "-status-label")), Xe(() => {
    const U = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return j();
      },
      get columnId() {
        return A;
      },
      addClass: G,
      removeClass: W,
      getAttr: I,
      addAttr: S
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return j();
      },
      get columnId() {
      },
      addClass: G,
      removeClass: W,
      getAttr: I,
      addAttr: S
    };
    return se(j(), "SMUIDataTableCell:mount", U), () => {
      se(j(), "SMUIDataTableCell:unmount", U);
    };
  });
  function G(U) {
    g[U] || t(7, g[U] = !0, g);
  }
  function W(U) {
    (!(U in g) || g[U]) && t(7, g[U] = !1, g);
  }
  function I(U) {
    var pe;
    return U in m ? (pe = m[U]) !== null && pe !== void 0 ? pe : null : j().getAttribute(U);
  }
  function S(U, pe) {
    m[U] !== pe && t(8, m[U] = pe, m);
  }
  function T(U) {
    se(j(), "SMUIDataTableHeaderCheckbox:change", U);
  }
  function N(U) {
    se(j(), "SMUIDataTableBodyCheckbox:change", U);
  }
  function j() {
    return v;
  }
  function we(U) {
    ue[U ? "unshift" : "push"](() => {
      v = U, t(6, v);
    });
  }
  const ke = (U) => p && T(U);
  function Le(U) {
    ue[U ? "unshift" : "push"](() => {
      v = U, t(6, v);
    });
  }
  const Ae = (U) => p && N(U);
  return n.$$set = (U) => {
    e = Z(Z({}, e), Oe(U)), t(19, i = $(e, l)), "use" in U && t(0, d = U.use), "class" in U && t(1, f = U.class), "numeric" in U && t(2, h = U.numeric), "checkbox" in U && t(3, p = U.checkbox), "columnId" in U && t(4, A = U.columnId), "sortable" in U && t(5, _ = U.sortable), "$$scope" in U && t(21, o = U.$$scope);
  }, [
    d,
    f,
    h,
    p,
    A,
    _,
    v,
    g,
    m,
    a,
    r,
    u,
    c,
    C,
    L,
    R,
    y,
    T,
    N,
    i,
    j,
    o,
    s,
    we,
    ke,
    Le,
    Ae
  ];
}
class bt extends te {
  constructor(e) {
    super(), ee(this, e, ki, yi, K, {
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
const { Boolean: Mn } = Fn;
function tn(n, e, t) {
  const l = n.slice();
  return l[14] = e[t], l[16] = t, l;
}
const Si = (n) => ({ item: n & /*items*/
1 }), nn = (n) => ({ item: (
  /*item*/
  n[14]
) });
function ln(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l;
}
function sn(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l;
}
function Ri(n) {
  let e, t;
  return e = new ui({
    props: {
      style: "width: 100%;",
      $$slots: { default: [Pi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, items, rowBg, slotHasActions, columns, headerBg*/
      2499 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function Ei(n) {
  let e, t;
  return {
    c() {
      e = B("p"), t = ae(
        /*emptyText*/
        n[4]
      ), k(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), O(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && ye(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: z,
    o: z,
    d(l) {
      l && E(e);
    }
  };
}
function Di(n) {
  let e, t;
  return {
    c() {
      e = B("p"), t = ae(
        /*errorMsg*/
        n[3]
      ), k(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), O(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && ye(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: z,
    o: z,
    d(l) {
      l && E(e);
    }
  };
}
function Mi(n) {
  let e;
  return {
    c() {
      e = B("p"), e.textContent = "Loading…", k(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      M(t, e, l);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && E(e);
    }
  };
}
function Hi(n) {
  let e = (
    /*col*/
    n[17].header + ""
  ), t;
  return {
    c() {
      t = ae(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[17].header + "") && ye(t, e);
    },
    d(l) {
      l && E(t);
    }
  };
}
function an(n) {
  let e, t;
  return e = new bt({
    props: {
      header: !0,
      style: [
        /*col*/
        n[17].width ? `width:${/*col*/
        n[17].width}` : "",
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : ""
      ].filter(Boolean).join(";"),
      $$slots: { default: [Hi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*columns, headerBg*/
      66 && (a.style = [
        /*col*/
        l[17].width ? `width:${/*col*/
        l[17].width}` : "",
        /*headerBg*/
        l[6] ? `background-color:${/*headerBg*/
        l[6]}` : ""
      ].filter(Boolean).join(";")), i & /*$$scope, columns*/
      2050 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function on(n) {
  let e, t;
  return e = new bt({
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
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*headerBg*/
      64 && (a.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function Li(n) {
  let e, t, l, i = Ge(
    /*columns*/
    n[1]
  ), a = [];
  for (let o = 0; o < i.length; o += 1)
    a[o] = an(sn(n, i, o));
  const r = (o) => D(a[o], 1, 1, () => {
    a[o] = null;
  });
  let s = (
    /*slotHasActions*/
    n[8] && on(n)
  );
  return {
    c() {
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      e = F(), s && s.c(), t = be();
    },
    m(o, u) {
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(o, u);
      M(o, e, u), s && s.m(o, u), M(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = Ge(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = sn(o, i, c);
          a[c] ? (a[c].p(d, u), w(a[c], 1)) : (a[c] = an(d), a[c].c(), w(a[c], 1), a[c].m(e.parentNode, e));
        }
        for (ge(), c = i.length; c < a.length; c += 1)
          r(c);
        he();
      }
      /*slotHasActions*/
      o[8] ? s ? (s.p(o, u), u & /*slotHasActions*/
      256 && w(s, 1)) : (s = on(o), s.c(), w(s, 1), s.m(t.parentNode, t)) : s && (ge(), D(s, 1, 1, () => {
        s = null;
      }), he());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          w(a[u]);
        w(s), l = !0;
      }
    },
    o(o) {
      a = a.filter(Mn);
      for (let u = 0; u < a.length; u += 1)
        D(a[u]);
      D(s), l = !1;
    },
    d(o) {
      o && (E(e), E(t)), Lt(a, o), s && s.d(o);
    }
  };
}
function Bi(n) {
  let e, t;
  return e = new Dn({
    props: {
      $$slots: { default: [Li] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      2370 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function Oi(n) {
  var l;
  let e = (
    /*item*/
    (((l = n[14]) == null ? void 0 : l[
      /*col*/
      n[17].key
    ]) ?? "") + ""
  ), t;
  return {
    c() {
      t = ae(e);
    },
    m(i, a) {
      M(i, t, a);
    },
    p(i, a) {
      var r;
      a & /*items, columns*/
      3 && e !== (e = /*item*/
      (((r = i[14]) == null ? void 0 : r[
        /*col*/
        i[17].key
      ]) ?? "") + "") && ye(t, e);
    },
    d(i) {
      i && E(t);
    }
  };
}
function rn(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Oi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, items, columns*/
      2051 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function un(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Ti] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, items*/
      2049 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function Ti(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].actions
  ), l = ce(
    t,
    n,
    /*$$scope*/
    n[11],
    nn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a & /*$$scope, items*/
      2049) && fe(
        l,
        t,
        i,
        /*$$scope*/
        i[11],
        e ? de(
          t,
          /*$$scope*/
          i[11],
          a,
          Si
        ) : me(
          /*$$scope*/
          i[11]
        ),
        nn
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      D(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ui(n) {
  let e, t, l, i = Ge(
    /*columns*/
    n[1]
  ), a = [];
  for (let o = 0; o < i.length; o += 1)
    a[o] = rn(ln(n, i, o));
  const r = (o) => D(a[o], 1, 1, () => {
    a[o] = null;
  });
  let s = (
    /*slotHasActions*/
    n[8] && un(n)
  );
  return {
    c() {
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      e = F(), s && s.c(), t = F();
    },
    m(o, u) {
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(o, u);
      M(o, e, u), s && s.m(o, u), M(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = Ge(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = ln(o, i, c);
          a[c] ? (a[c].p(d, u), w(a[c], 1)) : (a[c] = rn(d), a[c].c(), w(a[c], 1), a[c].m(e.parentNode, e));
        }
        for (ge(), c = i.length; c < a.length; c += 1)
          r(c);
        he();
      }
      /*slotHasActions*/
      o[8] ? s ? (s.p(o, u), u & /*slotHasActions*/
      256 && w(s, 1)) : (s = un(o), s.c(), w(s, 1), s.m(t.parentNode, t)) : s && (ge(), D(s, 1, 1, () => {
        s = null;
      }), he());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          w(a[u]);
        w(s), l = !0;
      }
    },
    o(o) {
      a = a.filter(Mn);
      for (let u = 0; u < a.length; u += 1)
        D(a[u]);
      D(s), l = !1;
    },
    d(o) {
      o && (E(e), E(t)), Lt(a, o), s && s.d(o);
    }
  };
}
function cn(n, e) {
  let t, l, i;
  return l = new Dn({
    props: {
      style: (
        /*rowBg*/
        e[7] ? `background-color:${/*rowBg*/
        e[7]}` : void 0
      ),
      $$slots: { default: [Ui] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = be(), Y(l.$$.fragment), this.first = t;
    },
    m(a, r) {
      M(a, t, r), V(l, a, r), i = !0;
    },
    p(a, r) {
      e = a;
      const s = {};
      r & /*rowBg*/
      128 && (s.style = /*rowBg*/
      e[7] ? `background-color:${/*rowBg*/
      e[7]}` : void 0), r & /*$$scope, items, slotHasActions, columns*/
      2307 && (s.$$scope = { dirty: r, ctx: e }), l.$set(s);
    },
    i(a) {
      i || (w(l.$$.fragment, a), i = !0);
    },
    o(a) {
      D(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && E(t), X(l, a);
    }
  };
}
function Gi(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, a = Ge(
    /*items*/
    n[0]
  );
  const r = (s) => (
    /*getRowId*/
    s[5](
      /*item*/
      s[14],
      /*i*/
      s[16]
    )
  );
  for (let s = 0; s < a.length; s += 1) {
    let o = tn(n, a, s), u = r(o);
    t.set(u, e[s] = cn(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      l = be();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      M(s, l, o), i = !0;
    },
    p(s, o) {
      o & /*rowBg, undefined, $$scope, items, slotHasActions, columns, getRowId*/
      2467 && (a = Ge(
        /*items*/
        s[0]
      ), ge(), e = wn(e, o, r, 1, s, a, t, l.parentNode, el, cn, l, tn), he());
    },
    i(s) {
      if (!i) {
        for (let o = 0; o < a.length; o += 1)
          w(e[o]);
        i = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        D(e[o]);
      i = !1;
    },
    d(s) {
      s && E(l);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Pi(n) {
  let e, t, l, i;
  return e = new fi({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [Bi] },
      $$scope: { ctx: n }
    }
  }), l = new hi({
    props: {
      $$slots: { default: [Gi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment), t = F(), Y(l.$$.fragment);
    },
    m(a, r) {
      V(e, a, r), M(a, t, r), V(l, a, r), i = !0;
    },
    p(a, r) {
      const s = {};
      r & /*headerBg*/
      64 && (s.style = /*headerBg*/
      a[6] ? `background-color:${/*headerBg*/
      a[6]}` : void 0), r & /*$$scope, headerBg, slotHasActions, columns*/
      2370 && (s.$$scope = { dirty: r, ctx: a }), e.$set(s);
      const o = {};
      r & /*$$scope, items, rowBg, slotHasActions, columns*/
      2435 && (o.$$scope = { dirty: r, ctx: a }), l.$set(o);
    },
    i(a) {
      i || (w(e.$$.fragment, a), w(l.$$.fragment, a), i = !0);
    },
    o(a) {
      D(e.$$.fragment, a), D(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && E(t), X(e, a), X(l, a);
    }
  };
}
function Ni(n) {
  let e, t, l, i;
  const a = [Mi, Di, Ei, Ri], r = [];
  function s(o, u) {
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
  return e = s(n), t = r[e] = a[e](n), {
    c() {
      t.c(), l = be();
    },
    m(o, u) {
      r[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? r[e].p(o, u) : (ge(), D(r[c], 1, 1, () => {
        r[c] = null;
      }), he(), t = r[e], t ? t.p(o, u) : (t = r[e] = a[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      D(t), i = !1;
    },
    d(o) {
      o && E(l), r[e].d(o);
    }
  };
}
function Zi(n, e, t) {
  let l, { $$slots: i = {}, $$scope: a } = e;
  const r = In(i);
  let { items: s = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: d = "Nothing to show." } = e, { getRowId: f = (v, g) => {
    var m, C;
    return (C = v && ((m = v.id) !== null && m !== void 0 ? m : v.key)) !== null && C !== void 0 ? C : g;
  } } = e, { headerBg: h = null } = e, { rowBg: p = null } = e;
  const A = r;
  let { hasActions: _ = !1 } = e;
  return n.$$set = (v) => {
    "items" in v && t(0, s = v.items), "columns" in v && t(1, o = v.columns), "loading" in v && t(2, u = v.loading), "errorMsg" in v && t(3, c = v.errorMsg), "emptyText" in v && t(4, d = v.emptyText), "getRowId" in v && t(5, f = v.getRowId), "headerBg" in v && t(6, h = v.headerBg), "rowBg" in v && t(7, p = v.rowBg), "hasActions" in v && t(9, _ = v.hasActions), "$$scope" in v && t(11, a = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    512 && t(8, l = _ || !!(A != null && A.actions));
  }, [
    s,
    o,
    u,
    c,
    d,
    f,
    h,
    p,
    l,
    _,
    i,
    a
  ];
}
class Wi extends te {
  constructor(e) {
    super(), ee(this, e, Zi, Ni, K, {
      items: 0,
      columns: 1,
      loading: 2,
      errorMsg: 3,
      emptyText: 4,
      getRowId: 5,
      headerBg: 6,
      rowBg: 7,
      hasActions: 9
    });
  }
}
const zi = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
zi.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Fi(n) {
  let e, t, l, i;
  function a() {
    return (
      /*func*/
      n[7](
        /*item*/
        n[10]
      )
    );
  }
  e = new Yt({
    props: {
      icon: "visibility",
      callback: a,
      outlined: !0
    }
  });
  function r() {
    return (
      /*func_1*/
      n[8](
        /*item*/
        n[10]
      )
    );
  }
  return l = new Yt({
    props: {
      icon: "play_circle",
      callback: r,
      outlined: !0
    }
  }), {
    c() {
      Y(e.$$.fragment), t = F(), Y(l.$$.fragment);
    },
    m(s, o) {
      V(e, s, o), M(s, t, o), V(l, s, o), i = !0;
    },
    p(s, o) {
      n = s;
      const u = {};
      o & /*item*/
      1024 && (u.callback = a), e.$set(u);
      const c = {};
      o & /*item*/
      1024 && (c.callback = r), l.$set(c);
    },
    i(s) {
      i || (w(e.$$.fragment, s), w(l.$$.fragment, s), i = !0);
    },
    o(s) {
      D(e.$$.fragment, s), D(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(t), X(e, s), X(l, s);
    }
  };
}
function ji(n) {
  let e, t;
  return e = new Wi({
    props: {
      items: (
        /*rows*/
        n[2]
      ),
      columns: (
        /*columns*/
        n[5]
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
          Fi,
          ({ item: l }) => ({ 10: l }),
          ({ item: l }) => l ? 1024 : 0
        ]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, [i]) {
      const a = {};
      i & /*rows*/
      4 && (a.items = /*rows*/
      l[2]), i & /*loading*/
      1 && (a.loading = /*loading*/
      l[0]), i & /*errorMsg*/
      2 && (a.errorMsg = /*errorMsg*/
      l[1]), i & /*$$scope, item*/
      3072 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function qi(n, e, t) {
  let l, { processes: i = [] } = e, { loading: a = !1 } = e, { errorMsg: r = "" } = e;
  const s = Bt(), o = (h) => s("start", h), u = (h) => s("view", h), c = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], d = (h) => u(h), f = (h) => o(h);
  return n.$$set = (h) => {
    "processes" in h && t(6, i = h.processes), "loading" in h && t(0, a = h.loading), "errorMsg" in h && t(1, r = h.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*processes*/
    64 && t(2, l = (i ?? []).map((h) => Object.assign(Object.assign({}, h), { displayName: h.name || h.id })));
  }, [
    a,
    r,
    l,
    o,
    u,
    c,
    i,
    d,
    f
  ];
}
class Vi extends te {
  constructor(e) {
    super(), ee(this, e, qi, ji, K, { processes: 6, loading: 0, errorMsg: 1 });
  }
}
function dn(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Xi(n) {
  let e, t, l, i, a, r, s = (
    /*proc*/
    n[0].id + ""
  ), o, u, c, d, f, h = (
    /*proc*/
    n[0].name + ""
  ), p, A, _, v, g, m = (
    /*proc*/
    n[0].version + ""
  ), C, L, R, y, G, W = (
    /*proc*/
    n[0].description + ""
  ), I, S, T, N, j, we, ke, Le, Ae, U, pe;
  function Ue(J, ne) {
    return !/*proc*/
    J[0].plugins || /*proc*/
    J[0].plugins.length === 0 ? Ki : Ji;
  }
  let Be = Ue(n), Se = Be(n);
  return {
    c() {
      e = B("h1"), e.textContent = "Process Details", t = F(), l = B("div"), i = B("div"), a = B("span"), a.textContent = "ID", r = B("span"), o = ae(s), u = F(), c = B("div"), d = B("span"), d.textContent = "Name", f = B("span"), p = ae(h), A = F(), _ = B("div"), v = B("span"), v.textContent = "Version", g = B("span"), C = ae(m), L = F(), R = B("div"), y = B("span"), y.textContent = "Description", G = B("span"), I = ae(W), S = F(), T = B("h2"), T.textContent = "Plugins", N = F(), Se.c(), j = F(), we = B("div"), ke = B("button"), ke.textContent = "Back", Le = F(), Ae = B("button"), Ae.textContent = "START PROCESS", k(e, "class", "title svelte-1qn566t"), k(a, "class", "label svelte-1qn566t"), k(r, "class", "value svelte-1qn566t"), k(i, "class", "row svelte-1qn566t"), k(d, "class", "label svelte-1qn566t"), k(f, "class", "value svelte-1qn566t"), k(c, "class", "row svelte-1qn566t"), k(v, "class", "label svelte-1qn566t"), k(g, "class", "value svelte-1qn566t"), k(_, "class", "row svelte-1qn566t"), k(y, "class", "label svelte-1qn566t"), k(G, "class", "value svelte-1qn566t"), k(R, "class", "row svelte-1qn566t"), k(l, "class", "card svelte-1qn566t"), k(T, "class", "subtitle svelte-1qn566t"), k(ke, "class", "btn svelte-1qn566t"), k(Ae, "class", "btn primary svelte-1qn566t"), k(we, "class", "actions svelte-1qn566t");
    },
    m(J, ne) {
      M(J, e, ne), M(J, t, ne), M(J, l, ne), O(l, i), O(i, a), O(i, r), O(r, o), O(l, u), O(l, c), O(c, d), O(c, f), O(f, p), O(l, A), O(l, _), O(_, v), O(_, g), O(g, C), O(l, L), O(l, R), O(R, y), O(R, G), O(G, I), M(J, S, ne), M(J, T, ne), M(J, N, ne), Se.m(J, ne), M(J, j, ne), M(J, we, ne), O(we, ke), O(we, Le), O(we, Ae), U || (pe = [
        q(
          ke,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        q(
          Ae,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], U = !0);
    },
    p(J, ne) {
      ne & /*proc*/
      1 && s !== (s = /*proc*/
      J[0].id + "") && ye(o, s), ne & /*proc*/
      1 && h !== (h = /*proc*/
      J[0].name + "") && ye(p, h), ne & /*proc*/
      1 && m !== (m = /*proc*/
      J[0].version + "") && ye(C, m), ne & /*proc*/
      1 && W !== (W = /*proc*/
      J[0].description + "") && ye(I, W), Be === (Be = Ue(J)) && Se ? Se.p(J, ne) : (Se.d(1), Se = Be(J), Se && (Se.c(), Se.m(j.parentNode, j)));
    },
    d(J) {
      J && (E(e), E(t), E(l), E(S), E(T), E(N), E(j), E(we)), Se.d(J), U = !1, le(pe);
    }
  };
}
function Yi(n) {
  let e, t, l, i, a, r;
  return {
    c() {
      e = B("div"), t = B("p"), t.textContent = "No process selected.", l = F(), i = B("button"), i.textContent = "Back to list", k(t, "class", "svelte-1qn566t"), k(i, "class", "btn svelte-1qn566t"), k(e, "class", "empty-state svelte-1qn566t");
    },
    m(s, o) {
      M(s, e, o), O(e, t), O(e, l), O(e, i), a || (r = q(
        i,
        "click",
        /*click_handler*/
        n[2]
      ), a = !0);
    },
    p: z,
    d(s) {
      s && E(e), a = !1, r();
    }
  };
}
function Ji(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), i = Ge(
    /*proc*/
    n[0].plugins
  );
  const a = (r) => (
    /*pl*/
    r[5].id
  );
  for (let r = 0; r < i.length; r += 1) {
    let s = dn(n, i, r), o = a(s);
    l.set(o, t[r] = gn(o, s));
  }
  return {
    c() {
      e = B("ol");
      for (let r = 0; r < t.length; r += 1)
        t[r].c();
      k(e, "class", "plugins-list svelte-1qn566t");
    },
    m(r, s) {
      M(r, e, s);
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(e, null);
    },
    p(r, s) {
      s & /*proc*/
      1 && (i = Ge(
        /*proc*/
        r[0].plugins
      ), t = wn(t, s, a, 1, r, i, l, e, $n, gn, null, dn));
    },
    d(r) {
      r && E(e);
      for (let s = 0; s < t.length; s += 1)
        t[s].d();
    }
  };
}
function Ki(n) {
  let e;
  return {
    c() {
      e = B("p"), e.textContent = "No plugins defined for this process.", k(e, "class", "muted svelte-1qn566t");
    },
    m(t, l) {
      M(t, e, l);
    },
    p: z,
    d(t) {
      t && E(e);
    }
  };
}
function fn(n) {
  let e, t = (
    /*pl*/
    n[5].type + ""
  ), l;
  return {
    c() {
      e = B("p"), l = ae(t), k(e, "class", "plugin-type svelte-1qn566t");
    },
    m(i, a) {
      M(i, e, a), O(e, l);
    },
    p(i, a) {
      a & /*proc*/
      1 && t !== (t = /*pl*/
      i[5].type + "") && ye(l, t);
    },
    d(i) {
      i && E(e);
    }
  };
}
function mn(n) {
  let e, t = (
    /*pl*/
    n[5].description + ""
  ), l;
  return {
    c() {
      e = B("p"), l = ae(t), k(e, "class", "description svelte-1qn566t");
    },
    m(i, a) {
      M(i, e, a), O(e, l);
    },
    p(i, a) {
      a & /*proc*/
      1 && t !== (t = /*pl*/
      i[5].description + "") && ye(l, t);
    },
    d(i) {
      i && E(e);
    }
  };
}
function gn(n, e) {
  let t, l, i, a = (
    /*i*/
    e[7] + 1 + ""
  ), r, s, o, u, c, d = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), f, h, p, A, _ = (
    /*pl*/
    e[5].type && fn(e)
  ), v = (
    /*pl*/
    e[5].description && mn(e)
  );
  return {
    key: n,
    first: null,
    c() {
      t = B("li"), l = B("div"), i = B("span"), r = ae(a), s = ae("."), o = F(), u = B("div"), c = B("p"), f = ae(d), h = F(), _ && _.c(), p = F(), v && v.c(), A = F(), k(i, "class", "order svelte-1qn566t"), k(c, "class", "plugin-name svelte-1qn566t"), k(u, "class", "svelte-1qn566t"), k(l, "class", "plugin-header svelte-1qn566t"), k(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(g, m) {
      M(g, t, m), O(t, l), O(l, i), O(i, r), O(i, s), O(l, o), O(l, u), O(u, c), O(c, f), O(u, h), _ && _.m(u, null), O(t, p), v && v.m(t, null), O(t, A);
    },
    p(g, m) {
      e = g, m & /*proc*/
      1 && a !== (a = /*i*/
      e[7] + 1 + "") && ye(r, a), m & /*proc*/
      1 && d !== (d = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && ye(f, d), /*pl*/
      e[5].type ? _ ? _.p(e, m) : (_ = fn(e), _.c(), _.m(u, null)) : _ && (_.d(1), _ = null), /*pl*/
      e[5].description ? v ? v.p(e, m) : (v = mn(e), v.c(), v.m(t, A)) : v && (v.d(1), v = null);
    },
    d(g) {
      g && E(t), _ && _.d(), v && v.d();
    }
  };
}
function Qi(n) {
  let e;
  function t(a, r) {
    return (
      /*proc*/
      a[0] ? Xi : Yi
    );
  }
  let l = t(n), i = l(n);
  return {
    c() {
      e = B("div"), i.c(), k(e, "class", "container svelte-1qn566t");
    },
    m(a, r) {
      M(a, e, r), i.m(e, null);
    },
    p(a, [r]) {
      l === (l = t(a)) && i ? i.p(a, r) : (i.d(1), i = l(a), i && (i.c(), i.m(e, null)));
    },
    i: z,
    o: z,
    d(a) {
      a && E(e), i.d();
    }
  };
}
function xi(n, e, t) {
  let { proc: l = null } = e;
  const i = Bt(), a = () => i("back"), r = () => i("back"), s = () => i("start", l);
  return n.$$set = (o) => {
    "proc" in o && t(0, l = o.proc);
  }, [l, i, a, r, s];
}
class $i extends te {
  constructor(e) {
    super(), ee(this, e, xi, Qi, K, { proc: 0 });
  }
}
function hn(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function es(n) {
  let e = (
    /*i*/
    n[20] + 1 + ""
  ), t;
  return {
    c() {
      t = ae(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    p: z,
    i: z,
    o: z,
    d(l) {
      l && E(t);
    }
  };
}
function ts(n) {
  let e, t, l, i;
  const a = [is, ls, ns], r = [];
  function s(o, u) {
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
  return e = s(n), t = r[e] = a[e](n), {
    c() {
      t.c(), l = be();
    },
    m(o, u) {
      r[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (ge(), D(r[c], 1, 1, () => {
        r[c] = null;
      }), he(), t = r[e], t || (t = r[e] = a[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      D(t), i = !1;
    },
    d(o) {
      o && E(l), r[e].d(o);
    }
  };
}
function ns(n) {
  let e, t;
  return e = new ei({}), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function ls(n) {
  let e, t;
  return e = new xl({}), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function is(n) {
  let e, t;
  return e = new Kl({}), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function ss(n) {
  let e, t, l, i, a, r, s;
  const o = [ts, es], u = [];
  function c(f, h) {
    return h & /*visited, plugins, tagName*/
    52 && (t = null), t == null && (t = !!/*visited*/
    (f[5].includes(
      /*plugin*/
      f[18].id
    ) && /*plugin*/
    f[18].id !== /*tagName*/
    f[4])), t ? 0 : 1;
  }
  l = c(n, -1), i = u[l] = o[l](n);
  function d() {
    return (
      /*click_handler_1*/
      n[13](
        /*plugin*/
        n[18]
      )
    );
  }
  return {
    c() {
      e = B("button"), i.c(), k(e, "class", "svelte-1xq5awa"), Ye(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), Ye(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), Ye(
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
    m(f, h) {
      M(f, e, h), u[l].m(e, null), a = !0, r || (s = q(e, "click", d), r = !0);
    },
    p(f, h) {
      n = f;
      let p = l;
      l = c(n, h), l === p ? u[l].p(n, h) : (ge(), D(u[p], 1, 1, () => {
        u[p] = null;
      }), he(), i = u[l], i ? i.p(n, h) : (i = u[l] = o[l](n), i.c()), w(i, 1), i.m(e, null)), (!a || h & /*visited, plugins*/
      36) && Ye(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), (!a || h & /*plugins, tagName*/
      20) && Ye(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), (!a || h & /*visited, plugins, tagName*/
      52) && Ye(
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
    i(f) {
      a || (w(i), a = !0);
    },
    o(f) {
      D(i), a = !1;
    },
    d(f) {
      f && E(e), u[l].d(), r = !1, s();
    }
  };
}
function bn(n) {
  let e;
  return {
    c() {
      e = B("div"), k(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && E(e);
    }
  };
}
function _n(n) {
  let e, t, l, i, a = (
    /*plugin*/
    n[18].name + ""
  ), r, s, o, u;
  t = new li({
    props: {
      text: (
        /*tooltipText*/
        n[6][
          /*plugin*/
          n[18].id
        ]
      ),
      position: "bottom",
      $$slots: { default: [ss] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && bn()
  );
  return {
    c() {
      e = B("div"), Y(t.$$.fragment), l = F(), i = B("p"), r = ae(a), s = F(), c && c.c(), o = be(), k(i, "class", "svelte-1xq5awa"), k(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(d, f) {
      M(d, e, f), V(t, e, null), O(e, l), O(e, i), O(i, r), M(d, s, f), c && c.m(d, f), M(d, o, f), u = !0;
    },
    p(d, f) {
      const h = {};
      f & /*tooltipText, plugins*/
      68 && (h.text = /*tooltipText*/
      d[6][
        /*plugin*/
        d[18].id
      ]), f & /*$$scope, visited, plugins, tagName, pluginStatus*/
      2097212 && (h.$$scope = { dirty: f, ctx: d }), t.$set(h), (!u || f & /*plugins*/
      4) && a !== (a = /*plugin*/
      d[18].name + "") && ye(r, a), /*i*/
      d[20] < /*plugins*/
      d[2].length - 1 ? c || (c = bn(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(d) {
      u || (w(t.$$.fragment, d), u = !0);
    },
    o(d) {
      D(t.$$.fragment, d), u = !1;
    },
    d(d) {
      d && (E(e), E(s), E(o)), X(t), c && c.d(d);
    }
  };
}
function pn(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && Et(n)
  );
  return {
    c() {
      l && l.c(), t = be();
    },
    m(i, a) {
      l && l.m(i, a), M(i, t, a);
    },
    p(i, a) {
      /*tagName*/
      i[4] ? e ? K(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = Et(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, a) : (l = Et(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && E(t), l && l.d(i);
    }
  };
}
function Et(n) {
  let e, t, l, i;
  return {
    c() {
      e = B(
        /*tagName*/
        n[4]
      ), it(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(a, r) {
      M(a, e, r), l || (i = x(t = rs.call(null, e, {
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
    p(a, r) {
      t && re(t.update) && r & /*doc, editCount*/
      3 && t.update.call(null, {
        doc: (
          /*doc*/
          a[0]
        ),
        editCount: (
          /*editCount*/
          a[1]
        )
      });
    },
    d(a) {
      a && E(e), l = !1, i();
    }
  };
}
function as(n) {
  let e, t, l, i, a, r, s, o, u, c, d, f, h, p, A, _, v, g = Ge(
    /*plugins*/
    n[2]
  ), m = [];
  for (let R = 0; R < g.length; R += 1)
    m[R] = _n(hn(n, g, R));
  const C = (R) => D(m[R], 1, 1, () => {
    m[R] = null;
  });
  let L = (
    /*tagName*/
    n[4] && pn(n)
  );
  return {
    c() {
      e = B("div"), t = B("div"), l = B("button"), l.textContent = "exit", i = F(), a = B("p"), a.textContent = "Plugin Flow", r = F(), s = B("div");
      for (let R = 0; R < m.length; R += 1)
        m[R].c();
      o = F(), u = B("div"), c = B("button"), c.textContent = "Back", d = F(), f = B("button"), f.textContent = "Next", h = F(), L && L.c(), p = be(), k(l, "class", "back-button svelte-1xq5awa"), k(a, "class", "plugin-flow-title svelte-1xq5awa"), ft(t, "display", "flex"), ft(t, "align-items", "center"), ft(t, "gap", "0.5rem"), k(t, "class", "svelte-1xq5awa"), k(s, "class", "plugin-steps svelte-1xq5awa"), k(c, "class", "back-button svelte-1xq5awa"), k(f, "class", "next-button svelte-1xq5awa"), k(u, "class", "stepper-navigation svelte-1xq5awa"), k(e, "class", "stepper svelte-1xq5awa");
    },
    m(R, y) {
      M(R, e, y), O(e, t), O(t, l), O(t, i), O(t, a), O(e, r), O(e, s);
      for (let G = 0; G < m.length; G += 1)
        m[G] && m[G].m(s, null);
      O(e, o), O(e, u), O(u, c), O(u, d), O(u, f), M(R, h, y), L && L.m(R, y), M(R, p, y), A = !0, _ || (v = [
        q(
          l,
          "click",
          /*click_handler*/
          n[12]
        ),
        q(
          c,
          "click",
          /*previousPlugin*/
          n[10]
        ),
        q(
          f,
          "click",
          /*nextPlugin*/
          n[9]
        )
      ], _ = !0);
    },
    p(R, [y]) {
      if (y & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      380) {
        g = Ge(
          /*plugins*/
          R[2]
        );
        let G;
        for (G = 0; G < g.length; G += 1) {
          const W = hn(R, g, G);
          m[G] ? (m[G].p(W, y), w(m[G], 1)) : (m[G] = _n(W), m[G].c(), w(m[G], 1), m[G].m(s, null));
        }
        for (ge(), G = g.length; G < m.length; G += 1)
          C(G);
        he();
      }
      /*tagName*/
      R[4] ? L ? L.p(R, y) : (L = pn(R), L.c(), L.m(p.parentNode, p)) : L && (L.d(1), L = null);
    },
    i(R) {
      if (!A) {
        for (let y = 0; y < g.length; y += 1)
          w(m[y]);
        A = !0;
      }
    },
    o(R) {
      m = m.filter(Boolean);
      for (let y = 0; y < m.length; y += 1)
        D(m[y]);
      A = !1;
    },
    d(R) {
      R && (E(e), E(h), E(p)), Lt(m, R), L && L.d(R), _ = !1, le(v);
    }
  };
}
function os() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function rs(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function us(n, e, t) {
  let l, { doc: i } = e, { editCount: a = -1 } = e, { host: r } = e, { plugins: s = [] } = e, o = null, u = [];
  const c = ["check", "warning", "error"];
  let d = {};
  Bt();
  function f(m) {
    var C;
    (C = os()) === null || C === void 0 || C.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: m },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  function h(m) {
    return Tt(this, void 0, void 0, function* () {
      const C = yield import(m.src);
      if (customElements.get(m.id) || customElements.define(m.id, C.default), t(4, o = m.id), !u.includes(m.id)) {
        t(5, u = [...u, m.id]);
        const L = s.findIndex((R) => R.id === m.id);
        t(3, d = Object.assign(Object.assign({}, d), {
          [m.id]: c[L % c.length]
        }));
      }
    });
  }
  function p() {
    _(1);
  }
  function A() {
    _(-1);
  }
  function _(m) {
    const C = s.findIndex((L) => L.id === o);
    h(s[(C + m + s.length) % s.length]);
  }
  Xe(() => {
    s.length && h(s[0]), f(!1);
  });
  const v = () => f(!0), g = (m) => h(m);
  return n.$$set = (m) => {
    "doc" in m && t(0, i = m.doc), "editCount" in m && t(1, a = m.editCount), "host" in m && t(11, r = m.host), "plugins" in m && t(2, s = m.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = s.reduce(
      (m, C) => {
        const L = d[C.id];
        return m[C.id] = L === "error" ? `Resolve errors in ${C.name}` : L === "warning" ? `Check warnings for ${C.name}` : `Load the ${C.name} editor`, m;
      },
      {}
    ));
  }, [
    i,
    a,
    s,
    d,
    o,
    u,
    l,
    f,
    h,
    p,
    A,
    r,
    v,
    g
  ];
}
class cs extends te {
  constructor(e) {
    super(), ee(this, e, us, as, K, {
      doc: 0,
      editCount: 1,
      host: 11,
      plugins: 2
    });
  }
}
function ds(n) {
  let e, t;
  return e = new Vi({
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
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*processes*/
      8 && (a.processes = /*processes*/
      l[3]), i & /*loading*/
      64 && (a.loading = /*loading*/
      l[6]), i & /*errorMsg*/
      128 && (a.errorMsg = /*errorMsg*/
      l[7]), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function fs(n) {
  let e, t;
  return e = new $i({ props: { proc: (
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
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*selected*/
      16 && (a.proc = /*selected*/
      l[4]), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function ms(n) {
  let e, t;
  return e = new cs({
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
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*doc*/
      1 && (a.doc = /*doc*/
      l[0]), i & /*editCount*/
      2 && (a.editCount = /*editCount*/
      l[1]), i & /*host*/
      4 && (a.host = /*host*/
      l[2]), i & /*running*/
      32 && (a.plugins = /*running*/
      l[5].plugins), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function gs(n) {
  let e, t, l, i;
  const a = [ms, fs, ds], r = [];
  function s(o, u) {
    return (
      /*running*/
      o[5] ? 0 : (
        /*selected*/
        o[4] ? 1 : 2
      )
    );
  }
  return e = s(n), t = r[e] = a[e](n), {
    c() {
      t.c(), l = be();
    },
    m(o, u) {
      r[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? r[e].p(o, u) : (ge(), D(r[c], 1, 1, () => {
        r[c] = null;
      }), he(), t = r[e], t ? t.p(o, u) : (t = r[e] = a[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      D(t), i = !1;
    },
    d(o) {
      o && E(l), r[e].d(o);
    }
  };
}
function hs(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: a } = e, r = [], s = null, o = null, u = !0, c = "";
  const d = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+eHl6LWVkaXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3h5ei5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPgogICAgICAgIDxuYW1lPk5ldHdvcmsgRXhwbG9yZXI8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CgogIDxwcm9jZXNzPgogICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+CiAgICA8dmVyc2lvbj4wLjAuMTwvdmVyc2lvbj4KICAgIDxuYW1lPlN0YW5kYXJkIFByb2Nlc3MgMzwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj4KICAgICAgVGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seQogICAgPC9kZXNjcmlwdGlvbj4KCiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+ZW5naW5lZXJpbmctd2l6YXJkPC9pZD4KICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CgogICAgICA8cGx1Z2luPgogICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5TaXRpcGU8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, f = (m) => {
    var C, L;
    return (L = (C = m == null ? void 0 : m.textContent) === null || C === void 0 ? void 0 : C.trim()) !== null && L !== void 0 ? L : "";
  }, h = (m) => Array.from(m.getElementsByTagName("process")).map((C) => {
    const L = Array.from(C.querySelectorAll("plugins-sequence > plugin")).map((R) => ({
      id: f(R.querySelector("id")),
      name: f(R.querySelector("name")),
      src: f(R.querySelector("src"))
    }));
    return {
      id: f(C.querySelector(":scope > id")),
      version: f(C.querySelector(":scope > version")),
      name: f(C.querySelector(":scope > name")),
      description: f(C.querySelector(":scope > description")),
      plugins: L
    };
  });
  function p() {
    return Tt(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = "");
      try {
        const m = yield fetch(d, { cache: "no-cache" });
        if (!m.ok)
          throw new Error(`HTTP ${m.status}`);
        const C = new DOMParser().parseFromString(yield m.text(), "application/xml");
        if (C.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, r = h(C));
      } catch (m) {
        t(3, r = []), t(7, c = m.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Xe(p);
  function A(m) {
    t(5, o = m), t(4, s = null);
  }
  function _(m) {
    t(4, s = m.detail);
  }
  function v(m) {
    A(m.detail);
  }
  function g() {
    t(4, s = null);
  }
  return n.$$set = (m) => {
    "doc" in m && t(0, l = m.doc), "editCount" in m && t(1, i = m.editCount), "host" in m && t(2, a = m.host);
  }, [
    l,
    i,
    a,
    r,
    s,
    o,
    u,
    c,
    _,
    v,
    g
  ];
}
class bs extends te {
  constructor(e) {
    super(), ee(this, e, hs, gs, K, { doc: 0, editCount: 1, host: 2 });
  }
}
function Cn(n) {
  let e, t;
  return e = new bs({
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
      Y(e.$$.fragment);
    },
    m(l, i) {
      V(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*doc*/
      1 && (a.doc = /*doc*/
      l[0]), i & /*editCount*/
      4 && (a.editCount = /*editCount*/
      l[2]), e.$set(a);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      D(e.$$.fragment, l), t = !1;
    },
    d(l) {
      X(e, l);
    }
  };
}
function _s(n) {
  let e, t, l, i, a, r = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Cn(n)
  );
  return {
    c() {
      r && r.c(), e = F(), t = B("input"), l = F(), i = B("input"), k(t, "type", "hidden"), k(t, "name", "package-name"), t.value = kn, k(i, "type", "hidden"), k(i, "name", "package-version"), i.value = Sn;
    },
    m(s, o) {
      r && r.m(s, o), M(s, e, o), M(s, t, o), M(s, l, o), M(s, i, o), a = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? r ? (r.p(s, o), o & /*doc, dev*/
      3 && w(r, 1)) : (r = Cn(s), r.c(), w(r, 1), r.m(e.parentNode, e)) : r && (ge(), D(r, 1, 1, () => {
        r = null;
      }), he());
    },
    i(s) {
      a || (w(r), a = !0);
    },
    o(s) {
      D(r), a = !1;
    },
    d(s) {
      s && (E(e), E(t), E(l), E(i)), r && r.d(s);
    }
  };
}
function ps(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: a = 0 } = e;
  return console.log("editcount", a), n.$$set = (r) => {
    "doc" in r && t(0, l = r.doc), "dev" in r && t(1, i = r.dev), "editCount" in r && t(2, a = r.editCount);
  }, [l, i, a];
}
class Cs extends te {
  constructor(e) {
    super(), ee(this, e, ps, _s, K, { doc: 0, dev: 1, editCount: 2 });
  }
}
class ys extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Cs({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = vs();
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
function vs() {
  const n = `${kn}-v${Sn}-style`, e = As(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function As() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  ys as default
};
