var Ui = Object.defineProperty;
var Wi = (n, e, t) => e in n ? Ui(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Xt = (n, e, t) => (Wi(n, typeof e != "symbol" ? e + "" : e, t), t);
function J() {
}
function z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function ql(n) {
  return n();
}
function fn() {
  return /* @__PURE__ */ Object.create(null);
}
function he(n) {
  n.forEach(ql);
}
function pe(n) {
  return typeof n == "function";
}
function Q(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Bi(n) {
  return Object.keys(n).length === 0;
}
function Zi(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return J;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function dt(n, e, t) {
  n.$$.on_destroy.push(Zi(e, t));
}
function ae(n, e, t, l) {
  if (n) {
    const i = Vl(n, e, t, l);
    return n[0](i);
  }
}
function Vl(n, e, t, l) {
  return n[1] && l ? z(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function oe(n, e, t, l) {
  if (n[2] && l) {
    const i = n[2](l(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], s = Math.max(e.dirty.length, i.length);
      for (let o = 0; o < s; o += 1)
        r[o] = e.dirty[o] | i[o];
      return r;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function ue(n, e, t, l, i, r) {
  if (i) {
    const s = Vl(e, t, l, r);
    n.p(s, i);
  }
}
function ce(n) {
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
function ge(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function an(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function tn(n, e, t) {
  return n.set(t), e;
}
function ee(n) {
  return n && pe(n.destroy) ? n.destroy : J;
}
const Ni = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function P(n, e) {
  n.appendChild(e);
}
function M(n, e, t) {
  n.insertBefore(e, t || null);
}
function H(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Ve(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function G(n) {
  return document.createElement(n);
}
function ye(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ne(n) {
  return document.createTextNode(n);
}
function B() {
  return ne(" ");
}
function Ae() {
  return ne("");
}
function K(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function v(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const qi = ["width", "height"];
function ie(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && qi.indexOf(l) === -1 ? n[l] = e[l] : v(n, l, e[l]);
}
function dn(n, e) {
  for (const t in e)
    v(n, t, e[t]);
}
function Vi(n, e) {
  Object.keys(e).forEach((t) => {
    ji(n, t, e[t]);
  });
}
function ji(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : v(n, e, t);
}
function St(n) {
  return /-/.test(n) ? Vi : ie;
}
function zi(n) {
  return Array.from(n.childNodes);
}
function _e(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function gn(n, e) {
  n.value = e ?? "";
}
function Yt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function ze(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Xi(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Ot(n, e) {
  return new n(e);
}
let Lt;
function At(n) {
  Lt = n;
}
function Ee() {
  if (!Lt)
    throw new Error("Function called outside component initialization");
  return Lt;
}
function Ne(n) {
  Ee().$$.on_mount.push(n);
}
function Zt(n) {
  Ee().$$.on_destroy.push(n);
}
function Xe() {
  const n = Ee();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = Xi(
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
function Me(n, e) {
  return Ee().$$.context.set(n, e), e;
}
function Be(n) {
  return Ee().$$.context.get(n);
}
function Ut(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ft = [], le = [];
let gt = [];
const nn = [], jl = /* @__PURE__ */ Promise.resolve();
let ln = !1;
function zl() {
  ln || (ln = !0, jl.then(Xl));
}
function Yi() {
  return zl(), jl;
}
function rn(n) {
  gt.push(n);
}
function $e(n) {
  nn.push(n);
}
const Kt = /* @__PURE__ */ new Set();
let ut = 0;
function Xl() {
  if (ut !== 0)
    return;
  const n = Lt;
  do {
    try {
      for (; ut < ft.length; ) {
        const e = ft[ut];
        ut++, At(e), Ki(e.$$);
      }
    } catch (e) {
      throw ft.length = 0, ut = 0, e;
    }
    for (At(null), ft.length = 0, ut = 0; le.length; )
      le.pop()();
    for (let e = 0; e < gt.length; e += 1) {
      const t = gt[e];
      Kt.has(t) || (Kt.add(t), t());
    }
    gt.length = 0;
  } while (ft.length);
  for (; nn.length; )
    nn.pop()();
  ln = !1, Kt.clear(), At(n);
}
function Ki(n) {
  if (n.fragment !== null) {
    n.update(), he(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(rn);
  }
}
function Qi(n) {
  const e = [], t = [];
  gt.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), gt = e;
}
const Gt = /* @__PURE__ */ new Set();
let at;
function re() {
  at = {
    r: 0,
    c: [],
    p: at
    // parent group
  };
}
function se() {
  at.r || he(at.c), at = at.p;
}
function C(n, e) {
  n && n.i && (Gt.delete(n), n.i(e));
}
function k(n, e, t, l) {
  if (n && n.o) {
    if (Gt.has(n))
      return;
    Gt.add(n), at.c.push(() => {
      Gt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Ie(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Ji(n, e) {
  k(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function $i(n, e, t, l, i, r, s, o, a, u, c, f) {
  let d = n.length, g = r.length, h = d;
  const p = {};
  for (; h--; )
    p[n[h].key] = h;
  const _ = [], y = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), E = [];
  for (h = g; h--; ) {
    const m = f(i, r, h), L = t(m);
    let W = s.get(L);
    W ? E.push(() => W.p(m, e)) : (W = u(L, m), W.c()), y.set(L, _[h] = W), L in p && A.set(L, Math.abs(h - p[L]));
  }
  const b = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
  function S(m) {
    C(m, 1), m.m(o, c), s.set(m.key, m), c = m.first, g--;
  }
  for (; d && g; ) {
    const m = _[g - 1], L = n[d - 1], W = m.key, D = L.key;
    m === L ? (c = m.first, d--, g--) : y.has(D) ? !s.has(W) || b.has(W) ? S(m) : O.has(D) ? d-- : A.get(W) > A.get(D) ? (O.add(W), S(m)) : (b.add(D), d--) : (a(L, s), d--);
  }
  for (; d--; ) {
    const m = n[d];
    y.has(m.key) || a(m, s);
  }
  for (; g; )
    S(_[g - 1]);
  return he(E), _;
}
function fe(n, e) {
  const t = {}, l = {}, i = { $$scope: 1 };
  let r = n.length;
  for (; r--; ) {
    const s = n[r], o = e[r];
    if (o) {
      for (const a in s)
        a in o || (l[a] = 1);
      for (const a in o)
        i[a] || (t[a] = o[a], i[a] = 1);
      n[r] = o;
    } else
      for (const a in s)
        i[a] = 1;
  }
  for (const s in l)
    s in t || (t[s] = void 0);
  return t;
}
function Le(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function xe(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function V(n) {
  n && n.c();
}
function N(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), rn(() => {
    const r = n.$$.on_mount.map(ql).filter(pe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : he(r), n.$$.on_mount = [];
  }), i.forEach(rn);
}
function q(n, e) {
  const t = n.$$;
  t.fragment !== null && (Qi(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xi(n, e) {
  n.$$.dirty[0] === -1 && (ft.push(n), zl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $(n, e, t, l, i, r, s = null, o = [-1]) {
  const a = Lt;
  At(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: J,
    not_equal: i,
    bound: fn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: fn(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...g) => {
    const h = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), c && xi(n, f)), d;
  }) : [], u.update(), c = !0, he(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = zi(e.target);
      u.fragment && u.fragment.l(f), f.forEach(H);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), N(n, e.target, e.anchor), Xl();
  }
  At(a);
}
class x {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Xt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Xt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    q(this, 1), this.$destroy = J;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!pe(t))
      return J;
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
    this.$$set && !Bi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const er = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(er);
const Yl = "archive-explorer", Kl = "0.0.1";
var sn = function(n, e) {
  return sn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, sn(n, e);
};
function _t(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  sn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ue = function() {
  return Ue = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ue.apply(this, arguments);
};
function Nt(n, e, t, l) {
  function i(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function o(c) {
      try {
        u(l.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(l.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? r(c.value) : i(c.value).then(o, a);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function tr(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, l, i, r, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = o(0), s.throw = o(1), s.return = o(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(u) {
    return function(c) {
      return a([u, c]);
    };
  }
  function a(u) {
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
function et(n) {
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
function te(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Ce(n, e, t, l = { bubbles: !0 }, i = !1) {
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
const mn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, nr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function We(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let s = i, o = () => {
    };
    return e ? o = e(s, r) : t.push([s, r]), s.match(mn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', s), () => {
      o();
    };
  };
  function l(i) {
    const r = n.$$.callbacks[i.type];
    r && r.slice().forEach((s) => s.call(this, i));
  }
  return (i) => {
    const r = [], s = {};
    e = (o, a) => {
      let u = o, c = a, f = !1;
      const d = u.match(mn), g = u.match(nr), h = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const y = u.split(":");
        let A = "";
        for (let E = 0; E < y.length; E++)
          A += E === y.length - 1 ? ":" + y[E] : y[E].split("-").map((b) => b.slice(0, 1).toUpperCase() + b.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${A.split("$")[0]}.`), u = A;
      }
      if (h) {
        const y = u.split(d ? ":" : "$");
        u = y[0];
        const A = y.slice(1).reduce((E, b) => (E[b] = !0, E), {});
        A.passive && (f = f || {}, f.passive = !0), A.nonpassive && (f = f || {}, f.passive = !1), A.capture && (f = f || {}, f.capture = !0), A.once && (f = f || {}, f.once = !0), A.preventDefault && (c = lr(c)), A.stopPropagation && (c = ir(c)), A.stopImmediatePropagation && (c = rr(c)), A.self && (c = sr(i, c)), A.trusted && (c = ar(c));
      }
      const p = hn(i, u, c, f), _ = () => {
        p();
        const y = r.indexOf(_);
        y > -1 && r.splice(y, 1);
      };
      return r.push(_), u in s || (s[u] = hn(i, u, l)), _;
    };
    for (let o = 0; o < t.length; o++)
      e(t[o][0], t[o][1]);
    return {
      destroy: () => {
        for (let o = 0; o < r.length; o++)
          r[o]();
        for (let o of Object.entries(s))
          o[1]();
      }
    };
  };
}
function hn(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function lr(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function ir(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function rr(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function sr(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function ar(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Pe(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.substring(0, e.length) === e && (l[r.substring(e.length)] = n[r]);
  }
  return l;
}
function Re(n, e) {
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
var Mt;
function or(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Mt;
  if (typeof Mt == "boolean" && !e)
    return Mt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || s, e || (Mt = l), l;
}
function ur(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var l = e.x, i = e.y, r = l + t.left, s = i + t.top, o, a;
  if (n.type === "touchstart") {
    var u = n;
    o = u.changedTouches[0].pageX - r, a = u.changedTouches[0].pageY - s;
  } else {
    var c = n;
    o = c.pageX - r, a = c.pageY - s;
  }
  return { x: o, y: a };
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
var bt = (
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
function cr(n) {
  return n === void 0 && (n = window), fr(n) ? { passive: !0 } : !1;
}
function fr(n) {
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
const Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: cr
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
function dr(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Jl(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Jl(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function gr(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: dr,
  estimateScrollWidth: gr,
  matches: Jl
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
var mr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, hr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, pn = {
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
], bn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Tt = [], pr = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      var l = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
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
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pn;
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
          for (var r = et(_n), s = r.next(); !s.done; s = r.next()) {
            var o = s.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (a) {
          l = { error: a };
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
          for (var r = et(bn), s = r.next(); !s.done; s = r.next()) {
            var o = s.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (a) {
          l = { error: a };
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
        for (var i = et(_n), r = i.next(); !r.done; r = i.next()) {
          var s = r.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (o) {
        t = { error: o };
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
        for (var i = et(bn), r = i.next(); !r.done; r = i.next()) {
          var s = r.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (o) {
        t = { error: o };
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
            var o = t !== void 0 && Tt.length > 0 && Tt.some(function(a) {
              return l.adapter.containsEventTarget(a);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Tt.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Tt = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, l = e.strings, i = l.VAR_FG_TRANSLATE_START, r = l.VAR_FG_TRANSLATE_END, s = e.cssClasses, o = s.FG_DEACTIVATION, a = s.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, h = d.endPoint;
        c = g.x + "px, " + g.y + "px", f = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = ur(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
      var t = this, l = e.cssClasses.FG_DEACTIVATION, i = this.activationState, r = i.hasDeactivationUXRun, s = i.isActivated, o = r || !s;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(l), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(l);
      }, pn.FG_DEACTIVATION_MS));
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
        var i = Ue({}, l);
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
  }(bt)
);
const { applyPassive: Ft } = Ql, { matches: _r } = $l;
function kt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: o, eventTarget: a, activeTarget: u, addClass: c = (h) => n.classList.add(h), removeClass: f = (h) => n.classList.remove(h), addStyle: d = (h, p) => n.style.setProperty(h, p), initPromise: g = Promise.resolve() } = {}) {
  let h, p = Be("SMUI:addLayoutListener"), _, y = s, A = a, E = u;
  function b() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), h && y !== s && (y = s, s ? h.activate() : s === !1 && h.deactivate()), e && !h ? (h = new pr({
      addClass: c,
      browserSupportsCssVars: () => or(window),
      computeBoundingRect: () => (o || n).getBoundingClientRect(),
      containsEventTarget: (S) => n.contains(S),
      deregisterDocumentInteractionHandler: (S, m) => document.documentElement.removeEventListener(S, m, Ft()),
      deregisterInteractionHandler: (S, m) => (a || n).removeEventListener(S, m, Ft()),
      deregisterResizeHandler: (S) => window.removeEventListener("resize", S),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? _r(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (S, m) => document.documentElement.addEventListener(S, m, Ft()),
      registerInteractionHandler: (S, m) => (a || n).addEventListener(S, m, Ft()),
      registerResizeHandler: (S) => window.addEventListener("resize", S),
      removeClass: f,
      updateCssVariable: d
    }), g.then(() => {
      h && (h.init(), h.setUnbounded(l));
    })) : h && !e && g.then(() => {
      h && (h.destroy(), h = void 0);
    }), h && (A !== a || E !== u) && (A = a, E = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  b(), p && (_ = p(O));
  function O() {
    h && h.layout();
  }
  return {
    update(S) {
      ({
        ripple: e,
        surface: t,
        unbounded: l,
        disabled: i,
        color: r,
        active: s,
        rippleElement: o,
        eventTarget: a,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (m) => n.classList.add(m), removeClass: (m) => n.classList.remove(m), addStyle: (m, L) => n.style.setProperty(m, L), initPromise: Promise.resolve() }, S)), b();
    },
    destroy() {
      h && (h.destroy(), h = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function br(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Qt(n)
  );
  return {
    c() {
      i && i.c(), t = Ae();
    },
    m(r, s) {
      i && i.m(r, s), M(r, t, s), l = !0;
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? Q(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Qt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, s) : (i = Qt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (C(i, r), l = !0);
    },
    o(r) {
      k(i, r), l = !1;
    },
    d(r) {
      r && H(t), i && i.d(r);
    }
  };
}
function vr(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Jt(n)
  );
  return {
    c() {
      l && l.c(), t = Ae();
    },
    m(i, r) {
      l && l.m(i, r), M(i, t, r);
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
    i: J,
    o: J,
    d(i) {
      i && H(t), l && l.d(i);
    }
  };
}
function Cr(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), o = ae(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let a = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = z(u, a[c]);
  return {
    c() {
      e = ye("svg"), o && o.c(), dn(e, u);
    },
    m(c, f) {
      M(c, e, f), o && o.m(e, null), n[9](e), l = !0, i || (r = [
        ee(t = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      o && o.p && (!l || f & /*$$scope*/
      128) && ue(
        o,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? oe(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[7]
        ),
        null
      ), dn(e, u = fe(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(o, c), l = !0);
    },
    o(c) {
      k(o, c), l = !1;
    },
    d(c) {
      c && H(e), o && o.d(c), n[9](null), i = !1, he(r);
    }
  };
}
function Qt(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), o = ae(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let a = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = z(u, a[c]);
  return {
    c() {
      e = G(
        /*tag*/
        n[1]
      ), o && o.c(), St(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      M(c, e, f), o && o.m(e, null), n[11](e), l = !0, i || (r = [
        ee(t = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      o && o.p && (!l || f & /*$$scope*/
      128) && ue(
        o,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? oe(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[7]
        ),
        null
      ), St(
        /*tag*/
        c[1]
      )(e, u = fe(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(o, c), l = !0);
    },
    o(c) {
      k(o, c), l = !1;
    },
    d(c) {
      c && H(e), o && o.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function Jt(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], s = {};
  for (let o = 0; o < r.length; o += 1)
    s = z(s, r[o]);
  return {
    c() {
      e = G(
        /*tag*/
        n[1]
      ), St(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(o, a) {
      M(o, e, a), n[10](e), l || (i = [
        ee(t = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(o, a) {
      St(
        /*tag*/
        o[1]
      )(e, s = fe(r, [a & /*$$restProps*/
      32 && /*$$restProps*/
      o[5]])), t && pe(t.update) && a & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    d(o) {
      o && H(e), n[10](null), l = !1, he(i);
    }
  };
}
function Ir(n) {
  let e, t, l, i;
  const r = [Cr, vr, br], s = [];
  function o(a, u) {
    return (
      /*tag*/
      a[1] === "svg" ? 0 : (
        /*selfClosing*/
        a[3] ? 1 : 2
      )
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (re(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      k(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function yr(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: o } = e, { use: a = [] } = e, { tag: u } = e;
  const c = We(Ee());
  let f;
  function d() {
    return f;
  }
  function g(_) {
    le[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function h(_) {
    le[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function p(_) {
    le[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  return n.$$set = (_) => {
    e = z(z({}, e), Oe(_)), t(5, r = ge(e, i)), "use" in _ && t(0, a = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, o = _.$$scope);
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
    a,
    u,
    f,
    l,
    c,
    r,
    d,
    o,
    s,
    g,
    h,
    p
  ];
}
class Wt extends x {
  constructor(e) {
    super(), $(this, e, yr, Ir, Q, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const ct = [];
function wt(n, e = J) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(o) {
    if (Q(n, o) && (n = o, t)) {
      const a = !ct.length;
      for (const u of l)
        u[1](), ct.push(u, n);
      if (a) {
        for (let u = 0; u < ct.length; u += 2)
          ct[u][0](ct[u + 1]);
        ct.length = 0;
      }
    }
  }
  function r(o) {
    i(o(n));
  }
  function s(o, a = J) {
    const u = [o, a];
    return l.add(u), l.size === 1 && (t = e(i, r) || J), o(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
function Ar(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = ae(
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
      8) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? oe(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : ce(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function kr(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: o } = e;
  const a = wt(o);
  return dt(n, a, (u) => t(5, l = u)), Me(s, a), Zt(() => {
    a.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, s = u.key), "value" in u && t(2, o = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && tn(a, l = o, l);
  }, [a, s, o, r, i];
}
class Bt extends x {
  constructor(e) {
    super(), $(this, e, kr, Ar, Q, { key: 1, value: 2 });
  }
}
function vn(n) {
  let e;
  return {
    c() {
      e = G("div"), v(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function wr(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = ae(
    r,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let o = (
    /*touch*/
    n[6] && vn()
  );
  return {
    c() {
      e = G("div"), t = B(), s && s.c(), o && o.c(), l = Ae(), v(e, "class", "mdc-button__ripple");
    },
    m(a, u) {
      M(a, e, u), M(a, t, u), s && s.m(a, u), o && o.m(a, u), M(a, l, u), i = !0;
    },
    p(a, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && ue(
        s,
        r,
        a,
        /*$$scope*/
        a[30],
        i ? oe(
          r,
          /*$$scope*/
          a[30],
          u,
          null
        ) : ce(
          /*$$scope*/
          a[30]
        ),
        null
      ), /*touch*/
      a[6] ? o || (o = vn(), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (C(s, a), i = !0);
    },
    o(a) {
      k(s, a), i = !1;
    },
    d(a) {
      a && (H(e), H(t), H(l)), s && s.d(a), o && o.d(a);
    }
  };
}
function Sr(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          kt,
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
      class: te({
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
      ).map($t).concat([
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
  function s(o, a) {
    let u = {
      $$slots: { default: [wr] },
      $$scope: { ctx: o }
    };
    for (let c = 0; c < i.length; c += 1)
      u = z(u, i[c]);
    return a !== void 0 && a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = z(u, fe(i, [
      a[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        o[10]
      ) },
      a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            kt,
            {
              ripple: (
                /*ripple*/
                o[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                o[4]
              ),
              disabled: !!/*$$restProps*/
              o[23].disabled,
              addClass: (
                /*addClass*/
                o[19]
              ),
              removeClass: (
                /*removeClass*/
                o[20]
              ),
              addStyle: (
                /*addStyle*/
                o[21]
              )
            }
          ],
          /*forwardEvents*/
          o[17],
          .../*use*/
          o[0]
        ]
      },
      a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: te({
          [
            /*className*/
            o[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            o[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            o[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            o[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            o[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            o[6]
          ),
          "mdc-card__action": (
            /*context*/
            o[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            o[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            o[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            o[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            o[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            o[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            o[18] === "banner" && /*secondary*/
            o[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            o[18] === "banner" && !/*secondary*/
            o[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            o[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          o[12]
        })
      },
      a[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          o[13]
        ).map($t).concat([
          /*style*/
          o[2]
        ]).join(" ")
      },
      a[0] & /*actionProp*/
      65536 && Le(
        /*actionProp*/
        o[16]
      ),
      a[0] & /*defaultProp*/
      32768 && Le(
        /*defaultProp*/
        o[15]
      ),
      a[0] & /*secondaryProp*/
      16384 && Le(
        /*secondaryProp*/
        o[14]
      ),
      a[0] & /*href*/
      128 && { href: (
        /*href*/
        o[7]
      ) },
      a[0] & /*$$restProps*/
      8388608 && Le(
        /*$$restProps*/
        o[23]
      )
    ]))), { props: u };
  }
  return r && (e = Ot(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && V(e.$$.fragment), t = Ae();
    },
    m(o, a) {
      e && N(e, o, a), M(o, t, a), l = !0;
    },
    p(o, a) {
      if (a[0] & /*component*/
      512 && r !== (r = /*component*/
      o[9])) {
        if (e) {
          re();
          const u = e;
          k(u.$$.fragment, 1, 0, () => {
            q(u, 1);
          }), se();
        }
        r ? (e = Ot(r, s(o, a)), o[29](e), e.$on(
          "click",
          /*handleClick*/
          o[22]
        ), V(e.$$.fragment), C(e.$$.fragment, 1), N(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? fe(i, [
          a[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            o[10]
          ) },
          a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                kt,
                {
                  ripple: (
                    /*ripple*/
                    o[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    o[4]
                  ),
                  disabled: !!/*$$restProps*/
                  o[23].disabled,
                  addClass: (
                    /*addClass*/
                    o[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    o[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    o[21]
                  )
                }
              ],
              /*forwardEvents*/
              o[17],
              .../*use*/
              o[0]
            ]
          },
          a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: te({
              [
                /*className*/
                o[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                o[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                o[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                o[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                o[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                o[6]
              ),
              "mdc-card__action": (
                /*context*/
                o[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                o[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                o[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                o[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                o[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                o[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                o[18] === "banner" && /*secondary*/
                o[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                o[18] === "banner" && !/*secondary*/
                o[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                o[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              o[12]
            })
          },
          a[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              o[13]
            ).map($t).concat([
              /*style*/
              o[2]
            ]).join(" ")
          },
          a[0] & /*actionProp*/
          65536 && Le(
            /*actionProp*/
            o[16]
          ),
          a[0] & /*defaultProp*/
          32768 && Le(
            /*defaultProp*/
            o[15]
          ),
          a[0] & /*secondaryProp*/
          16384 && Le(
            /*secondaryProp*/
            o[14]
          ),
          a[0] & /*href*/
          128 && { href: (
            /*href*/
            o[7]
          ) },
          a[0] & /*$$restProps*/
          8388608 && Le(
            /*$$restProps*/
            o[23]
          )
        ]) : {};
        a[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: a, ctx: o }), e.$set(u);
      }
    },
    i(o) {
      l || (e && C(e.$$.fragment, o), l = !0);
    },
    o(o) {
      e && k(e.$$.fragment, o), l = !1;
    },
    d(o) {
      o && H(t), n[29](null), e && q(e, o);
    }
  };
}
const $t = ([n, e]) => `${n}: ${e};`;
function Lr(n, e, t) {
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
  let o = ge(e, s), { $$slots: a = {}, $$scope: u } = e;
  const c = We(Ee());
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: h = !0 } = e, { color: p = "primary" } = e, { variant: _ = "text" } = e, { touch: y = !1 } = e, { href: A = void 0 } = e, { action: E = "close" } = e, { defaultAction: b = !1 } = e, { secondary: O = !1 } = e, S, m = {}, L = {}, W = Be("SMUI:button:context"), { component: D = Wt } = e, { tag: I = D === Wt ? A == null ? "button" : "a" : void 0 } = e, U = o.disabled;
  Me("SMUI:label:context", "button"), Me("SMUI:icon:context", "button");
  function T(w) {
    m[w] || t(12, m[w] = !0, m);
  }
  function X(w) {
    (!(w in m) || m[w]) && t(12, m[w] = !1, m);
  }
  function we(w, Z) {
    L[w] != Z && (Z === "" || Z == null ? (delete L[w], t(13, L)) : t(13, L[w] = Z, L));
  }
  function ke() {
    W === "banner" && Ce(ve(), O ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function ve() {
    return S.getElement();
  }
  function j(w) {
    le[w ? "unshift" : "push"](() => {
      S = w, t(11, S);
    });
  }
  return n.$$set = (w) => {
    t(31, e = z(z({}, e), Oe(w))), t(23, o = ge(e, s)), "use" in w && t(0, f = w.use), "class" in w && t(1, d = w.class), "style" in w && t(2, g = w.style), "ripple" in w && t(3, h = w.ripple), "color" in w && t(4, p = w.color), "variant" in w && t(5, _ = w.variant), "touch" in w && t(6, y = w.touch), "href" in w && t(7, A = w.href), "action" in w && t(24, E = w.action), "defaultAction" in w && t(25, b = w.defaultAction), "secondary" in w && t(8, O = w.secondary), "component" in w && t(9, D = w.component), "tag" in w && t(10, I = w.tag), "$$scope" in w && t(30, u = w.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = W === "dialog:action" && E != null ? { "data-mdc-dialog-action": E } : { action: e.action }), t(15, i = W === "dialog:action" && b ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = W === "banner" ? {} : { secondary: e.secondary }), U !== o.disabled) {
      if (S) {
        const w = ve();
        "blur" in w && w.blur();
      }
      t(27, U = o.disabled);
    }
  }, e = Oe(e), [
    f,
    d,
    g,
    h,
    p,
    _,
    y,
    A,
    O,
    D,
    I,
    S,
    m,
    L,
    r,
    i,
    l,
    c,
    W,
    T,
    X,
    we,
    ke,
    o,
    E,
    b,
    ve,
    U,
    a,
    j,
    u
  ];
}
class pt extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Lr,
      Sr,
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
var Rr = {
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
var Er = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      var l = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Rr;
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
  }(bt)
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
var rt = {
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
var Dr = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      var l = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rt;
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
      this.adapter.removeClass(rt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(rt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(rt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(rt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(rt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(rt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(bt)
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
var Pr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Cn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Hr = {
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
var Mr = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      return n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Cn;
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
      t > 0 && (t += Cn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(bt)
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
}, Tr = {
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
}, In = {
  LABEL_SCALE: 0.75
}, Fr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Gr = [
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
var yn = ["mousedown", "touchstart"], An = ["click", "keydown"], Or = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
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
        return Tr;
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
        return In;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Gr.indexOf(t) >= 0;
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
        for (var s = et(yn), o = s.next(); !o.done; o = s.next()) {
          var a = o.value;
          this.adapter.registerInputInteractionHandler(a, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          o && !o.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = et(An), c = u.next(); !c.done; c = u.next()) {
          var a = c.value;
          this.adapter.registerTextFieldInteractionHandler(a, this.textFieldInteractionHandler);
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
        for (var s = et(yn), o = s.next(); !o.done; o = s.next()) {
          var a = o.value;
          this.adapter.deregisterInputInteractionHandler(a, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          o && !o.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = et(An), c = u.next(); !c.done; c = u.next()) {
          var a = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(a, this.textFieldInteractionHandler);
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
        return Fr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var l = this.adapter.getLabelWidth() * In.LABEL_SCALE;
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
  }(bt)
);
function Ur(n) {
  let e, t, l, i, r, s, o, a;
  const u = (
    /*#slots*/
    n[22].default
  ), c = ae(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = te({
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
      ).map(wn).concat([
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
  for (let g = 0; g < f.length; g += 1)
    d = z(d, f[g]);
  return {
    c() {
      e = G("label"), c && c.c(), ie(e, d);
    },
    m(g, h) {
      M(g, e, h), c && c.m(e, null), n[24](e), s = !0, o || (a = [
        ee(r = Re.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ee(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], o = !0);
    },
    p(g, h) {
      c && c.p && (!s || h & /*$$scope*/
      2097152) && ue(
        c,
        u,
        g,
        /*$$scope*/
        g[21],
        s ? oe(
          u,
          /*$$scope*/
          g[21],
          h,
          null
        ) : ce(
          /*$$scope*/
          g[21]
        ),
        null
      ), ie(e, d = fe(f, [
        (!s || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = te({
          [
            /*className*/
            g[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            g[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            g[1]
          ),
          .../*internalClasses*/
          g[8]
        }))) && { class: t },
        (!s || h & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(wn).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: l },
        (!s || h & /*forId*/
        32 && i !== (i = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), r && pe(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        g[2]
      );
    },
    i(g) {
      s || (C(c, g), s = !0);
    },
    o(g) {
      k(c, g), s = !1;
    },
    d(g) {
      g && H(e), c && c.d(g), n[24](null), o = !1, he(a);
    }
  };
}
function Wr(n) {
  let e, t, l, i, r, s, o;
  const a = (
    /*#slots*/
    n[22].default
  ), u = ae(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = te({
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
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = z(f, c[d]);
  return {
    c() {
      e = G("span"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[23](e), r = !0, s || (o = [
        ee(i = Re.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ee(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(d, g) {
      u && u.p && (!r || g & /*$$scope*/
      2097152) && ue(
        u,
        a,
        d,
        /*$$scope*/
        d[21],
        r ? oe(
          a,
          /*$$scope*/
          d[21],
          g,
          null
        ) : ce(
          /*$$scope*/
          d[21]
        ),
        null
      ), ie(e, f = fe(c, [
        (!r || g & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = te({
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
        (!r || g & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(kn).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: l },
        g & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), i && pe(i.update) && g & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      r || (C(u, d), r = !0);
    },
    o(d) {
      k(u, d), r = !1;
    },
    d(d) {
      d && H(e), u && u.d(d), n[23](null), s = !1, he(o);
    }
  };
}
function Br(n) {
  let e, t, l, i;
  const r = [Wr, Ur], s = [];
  function o(a, u) {
    return (
      /*wrapped*/
      a[6] ? 0 : 1
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (re(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      k(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
const kn = ([n, e]) => `${n}: ${e};`, wn = ([n, e]) => `${n}: ${e};`;
function Zr(n, e, t) {
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
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  var o;
  const a = We(Ee());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: h = !1 } = e, { wrapped: p = !1 } = e, _, y, A = {}, E = {}, b = (o = Be("SMUI:generic:input:props")) !== null && o !== void 0 ? o : {}, O = g, S = h;
  Ne(() => {
    t(18, y = new Er({
      addClass: m,
      removeClass: L,
      getWidth: () => {
        var w, Z;
        const me = we(), be = me.cloneNode(!0);
        (w = me.parentNode) === null || w === void 0 || w.appendChild(be), be.classList.add("smui-floating-label--remove-transition"), be.classList.add("smui-floating-label--force-size"), be.classList.remove("mdc-floating-label--float-above");
        const He = be.scrollWidth;
        return (Z = me.parentNode) === null || Z === void 0 || Z.removeChild(be), He;
      },
      registerInteractionHandler: (w, Z) => we().addEventListener(w, Z),
      deregisterInteractionHandler: (w, Z) => we().removeEventListener(w, Z)
    }));
    const j = {
      get element() {
        return we();
      },
      addStyle: W,
      removeStyle: D
    };
    return Ce(_, "SMUIFloatingLabel:mount", j), y.init(), () => {
      Ce(_, "SMUIFloatingLabel:unmount", j), y.destroy();
    };
  });
  function m(j) {
    A[j] || t(8, A[j] = !0, A);
  }
  function L(j) {
    (!(j in A) || A[j]) && t(8, A[j] = !1, A);
  }
  function W(j, w) {
    E[j] != w && (w === "" || w == null ? (delete E[j], t(9, E)) : t(9, E[j] = w, E));
  }
  function D(j) {
    j in E && (delete E[j], t(9, E));
  }
  function I(j) {
    y.shake(j);
  }
  function U(j) {
    t(0, g = j);
  }
  function T(j) {
    t(1, h = j);
  }
  function X() {
    return y.getWidth();
  }
  function we() {
    return _;
  }
  function ke(j) {
    le[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  function ve(j) {
    le[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  return n.$$set = (j) => {
    e = z(z({}, e), Oe(j)), t(12, i = ge(e, l)), "use" in j && t(2, u = j.use), "class" in j && t(3, c = j.class), "style" in j && t(4, f = j.style), "for" in j && t(5, d = j.for), "floatAbove" in j && t(0, g = j.floatAbove), "required" in j && t(1, h = j.required), "wrapped" in j && t(6, p = j.wrapped), "$$scope" in j && t(21, s = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && y && O !== g && (t(19, O = g), y.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && y && S !== h && (t(20, S = h), y.setRequired(h));
  }, [
    g,
    h,
    u,
    c,
    f,
    d,
    p,
    _,
    A,
    E,
    a,
    b,
    i,
    I,
    U,
    T,
    X,
    we,
    y,
    O,
    S,
    s,
    r,
    ke,
    ve
  ];
}
class xl extends x {
  constructor(e) {
    super(), $(this, e, Zr, Br, Q, {
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
function Nr(n) {
  let e, t, l, i, r, s, o = [
    {
      class: t = te({
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
      ).map(Sn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], a = {};
  for (let u = 0; u < o.length; u += 1)
    a = z(a, o[u]);
  return {
    c() {
      e = G("div"), ie(e, a);
    },
    m(u, c) {
      M(u, e, c), n[13](e), r || (s = [
        ee(i = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], r = !0);
    },
    p(u, [c]) {
      ie(e, a = fe(o, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = te({
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
        ).map(Sn).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: l },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), i && pe(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: J,
    o: J,
    d(u) {
      u && H(e), n[13](null), r = !1, he(s);
    }
  };
}
const Sn = ([n, e]) => `${n}: ${e};`;
function qr(n, e, t) {
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
  let i = ge(e, l);
  const r = We(Ee());
  let { use: s = [] } = e, { class: o = "" } = e, { style: a = "" } = e, { active: u = !1 } = e, c, f, d = {}, g = {};
  Ne(() => (f = new Dr({
    addClass: p,
    removeClass: _,
    hasClass: h,
    setStyle: y,
    registerEventHandler: (m, L) => O().addEventListener(m, L),
    deregisterEventHandler: (m, L) => O().removeEventListener(m, L)
  }), f.init(), () => {
    f.destroy();
  }));
  function h(m) {
    return m in d ? d[m] : O().classList.contains(m);
  }
  function p(m) {
    d[m] || t(5, d[m] = !0, d);
  }
  function _(m) {
    (!(m in d) || d[m]) && t(5, d[m] = !1, d);
  }
  function y(m, L) {
    g[m] != L && (L === "" || L == null ? (delete g[m], t(6, g)) : t(6, g[m] = L, g));
  }
  function A() {
    f.activate();
  }
  function E() {
    f.deactivate();
  }
  function b(m) {
    f.setRippleCenter(m);
  }
  function O() {
    return c;
  }
  function S(m) {
    le[m ? "unshift" : "push"](() => {
      c = m, t(4, c);
    });
  }
  return n.$$set = (m) => {
    e = z(z({}, e), Oe(m)), t(8, i = ge(e, l)), "use" in m && t(0, s = m.use), "class" in m && t(1, o = m.class), "style" in m && t(2, a = m.style), "active" in m && t(3, u = m.active);
  }, [
    s,
    o,
    a,
    u,
    c,
    d,
    g,
    r,
    i,
    A,
    E,
    b,
    O,
    S
  ];
}
class Vr extends x {
  constructor(e) {
    super(), $(this, e, qr, Nr, Q, {
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
function Ln(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[15].default
  ), r = ae(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = G("div"), r && r.c(), v(e, "class", "mdc-notched-outline__notch"), v(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Rn).join(" "));
    },
    m(s, o) {
      M(s, e, o), r && r.m(e, null), l = !0;
    },
    p(s, o) {
      r && r.p && (!l || o & /*$$scope*/
      16384) && ue(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? oe(
          i,
          /*$$scope*/
          s[14],
          o,
          null
        ) : ce(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!l || o & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        s[7]
      ).map(Rn).join(" "))) && v(e, "style", t);
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      k(r, s), l = !1;
    },
    d(s) {
      s && H(e), r && r.d(s);
    }
  };
}
function jr(n) {
  let e, t, l, i, r, s, o, a, u, c, f = !/*noLabel*/
  n[3] && Ln(n), d = [
    {
      class: s = te({
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
  ], g = {};
  for (let h = 0; h < d.length; h += 1)
    g = z(g, d[h]);
  return {
    c() {
      e = G("div"), t = G("div"), l = B(), f && f.c(), i = B(), r = G("div"), v(t, "class", "mdc-notched-outline__leading"), v(r, "class", "mdc-notched-outline__trailing"), ie(e, g);
    },
    m(h, p) {
      M(h, e, p), P(e, t), P(e, l), f && f.m(e, null), P(e, i), P(e, r), n[16](e), a = !0, u || (c = [
        ee(o = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        K(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        K(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(h, [p]) {
      /*noLabel*/
      h[3] ? f && (re(), k(f, 1, 1, () => {
        f = null;
      }), se()) : f ? (f.p(h, p), p & /*noLabel*/
      8 && C(f, 1)) : (f = Ln(h), f.c(), C(f, 1), f.m(e, i)), ie(e, g = fe(d, [
        (!a || p & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = te({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            h[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            h[3]
          ),
          .../*internalClasses*/
          h[6]
        }))) && { class: s },
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        h[10]
      ])), o && pe(o.update) && p & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (C(f), a = !0);
    },
    o(h) {
      k(f), a = !1;
    },
    d(h) {
      h && H(e), f && f.d(), n[16](null), u = !1, he(c);
    }
  };
}
const Rn = ([n, e]) => `${n}: ${e};`;
function zr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = We(Ee());
  let { use: a = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, h, p = {}, _ = {};
  Ne(() => (g = new Mr({
    addClass: A,
    removeClass: E,
    setNotchWidthProperty: (I) => b("width", I + "px"),
    removeNotchWidthProperty: () => O("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function y(I) {
    t(4, h = I.detail);
  }
  function A(I) {
    p[I] || t(6, p[I] = !0, p);
  }
  function E(I) {
    (!(I in p) || p[I]) && t(6, p[I] = !1, p);
  }
  function b(I, U) {
    _[I] != U && (U === "" || U == null ? (delete _[I], t(7, _)) : t(7, _[I] = U, _));
  }
  function O(I) {
    I in _ && (delete _[I], t(7, _));
  }
  function S(I) {
    g.notch(I);
  }
  function m() {
    g.closeNotch();
  }
  function L() {
    return d;
  }
  function W(I) {
    le[I ? "unshift" : "push"](() => {
      d = I, t(5, d);
    });
  }
  const D = () => t(4, h = void 0);
  return n.$$set = (I) => {
    e = z(z({}, e), Oe(I)), t(10, i = ge(e, l)), "use" in I && t(0, a = I.use), "class" in I && t(1, u = I.class), "notched" in I && t(2, c = I.notched), "noLabel" in I && t(3, f = I.noLabel), "$$scope" in I && t(14, s = I.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (h ? (h.addStyle("transition-duration", "0s"), A("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      h && h.removeStyle("transition-duration");
    })) : E("mdc-notched-outline--upgraded"));
  }, [
    a,
    u,
    c,
    f,
    h,
    d,
    p,
    _,
    o,
    y,
    i,
    S,
    m,
    L,
    s,
    r,
    W,
    D
  ];
}
class Xr extends x {
  constructor(e) {
    super(), $(this, e, zr, jr, Q, {
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
function Yr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = ae(
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
      8192) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? oe(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : ce(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Kr(n) {
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
      class: te({
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
  function s(o, a) {
    let u = {
      $$slots: { default: [Yr] },
      $$scope: { ctx: o }
    };
    for (let c = 0; c < i.length; c += 1)
      u = z(u, i[c]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = z(u, fe(i, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        o[3]
      ) },
      a & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          o[8],
          .../*use*/
          o[0]
        ]
      },
      a & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: te({
          [
            /*className*/
            o[1]
          ]: !0,
          [
            /*smuiClass*/
            o[6]
          ]: !0,
          .../*smuiClassMap*/
          o[5]
        })
      },
      a & /*props*/
      128 && Le(
        /*props*/
        o[7]
      ),
      a & /*$$restProps*/
      512 && Le(
        /*$$restProps*/
        o[9]
      )
    ]))), { props: u };
  }
  return r && (e = Ot(r, s(n)), n[12](e)), {
    c() {
      e && V(e.$$.fragment), t = Ae();
    },
    m(o, a) {
      e && N(e, o, a), M(o, t, a), l = !0;
    },
    p(o, [a]) {
      if (a & /*component*/
      4 && r !== (r = /*component*/
      o[2])) {
        if (e) {
          re();
          const u = e;
          k(u.$$.fragment, 1, 0, () => {
            q(u, 1);
          }), se();
        }
        r ? (e = Ot(r, s(o, a)), o[12](e), V(e.$$.fragment), C(e.$$.fragment, 1), N(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? fe(i, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            o[3]
          ) },
          a & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              o[8],
              .../*use*/
              o[0]
            ]
          },
          a & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: te({
              [
                /*className*/
                o[1]
              ]: !0,
              [
                /*smuiClass*/
                o[6]
              ]: !0,
              .../*smuiClassMap*/
              o[5]
            })
          },
          a & /*props*/
          128 && Le(
            /*props*/
            o[7]
          ),
          a & /*$$restProps*/
          512 && Le(
            /*$$restProps*/
            o[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (u.$$scope = { dirty: a, ctx: o }), e.$set(u);
      }
    },
    i(o) {
      l || (e && C(e.$$.fragment, o), l = !0);
    },
    o(o) {
      e && k(e.$$.fragment, o), l = !1;
    },
    d(o) {
      o && H(t), n[12](null), e && q(e, o);
    }
  };
}
const Je = {
  component: Wt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Qr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e, { use: o = [] } = e, { class: a = "" } = e, u;
  const c = Je.class, f = {}, d = [], g = Je.contexts, h = Je.props;
  let { component: p = Je.component } = e, { tag: _ = p === Wt ? Je.tag : void 0 } = e;
  Object.entries(Je.classMap).forEach(([b, O]) => {
    const S = Be(O);
    S && "subscribe" in S && d.push(S.subscribe((m) => {
      t(5, f[b] = m, f);
    }));
  });
  const y = We(Ee());
  for (let b in g)
    g.hasOwnProperty(b) && Me(b, g[b]);
  Zt(() => {
    for (const b of d)
      b();
  });
  function A() {
    return u.getElement();
  }
  function E(b) {
    le[b ? "unshift" : "push"](() => {
      u = b, t(4, u);
    });
  }
  return n.$$set = (b) => {
    e = z(z({}, e), Oe(b)), t(9, i = ge(e, l)), "use" in b && t(0, o = b.use), "class" in b && t(1, a = b.class), "component" in b && t(2, p = b.component), "tag" in b && t(3, _ = b.tag), "$$scope" in b && t(13, s = b.$$scope);
  }, [
    o,
    a,
    p,
    _,
    u,
    f,
    c,
    h,
    y,
    i,
    A,
    r,
    E,
    s
  ];
}
class Jr extends x {
  constructor(e) {
    super(), $(this, e, Qr, Kr, Q, {
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
const En = Object.assign({}, Je);
function Te(n) {
  return new Proxy(Jr, {
    construct: function(e, t) {
      return Object.assign(Je, En, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Je, En, n), e[t];
    }
  });
}
const $r = Te({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), xr = Te({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), es = Te({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function ts(n) {
  let e, t, l, i, r, s = [
    {
      class: t = te({
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
  ], o = {};
  for (let a = 0; a < s.length; a += 1)
    o = z(o, s[a]);
  return {
    c() {
      e = G("input"), ie(e, o);
    },
    m(a, u) {
      M(a, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        ee(l = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        K(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        K(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        K(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        K(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], i = !0);
    },
    p(a, [u]) {
      ie(e, o = fe(s, [
        u & /*className*/
        2 && t !== (t = te({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
        u & /*type*/
        4 && { type: (
          /*type*/
          a[2]
        ) },
        u & /*placeholder*/
        8 && { placeholder: (
          /*placeholder*/
          a[3]
        ) },
        u & /*valueProp*/
        16 && /*valueProp*/
        a[4],
        u & /*internalAttrs*/
        64 && /*internalAttrs*/
        a[6],
        u & /*$$restProps*/
        1024 && /*$$restProps*/
        a[10]
      ])), l && pe(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i: J,
    o: J,
    d(a) {
      a && H(e), n[26](null), i = !1, he(r);
    }
  };
}
function ns(n) {
  return n === "" ? Number.NaN : +n;
}
function ls(n, e, t) {
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
  let i = ge(e, l);
  const r = We(Ee());
  let s = () => {
  };
  function o(w) {
    return w === s;
  }
  let { use: a = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const g = o(d);
  g && (d = "");
  let { files: h = null } = e, { dirty: p = !1 } = e, { invalid: _ = !1 } = e, { updateInvalid: y = !0 } = e, { emptyValueNull: A = d === null } = e;
  g && A && (d = null);
  let { emptyValueUndefined: E = d === void 0 } = e;
  g && E && (d = void 0);
  let b, O = {}, S = {};
  Ne(() => {
    y && t(14, _ = b.matches(":invalid"));
  });
  function m(w) {
    if (c === "file") {
      t(12, h = w.currentTarget.files);
      return;
    }
    if (w.currentTarget.value === "" && A) {
      t(11, d = null);
      return;
    }
    if (w.currentTarget.value === "" && E) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = ns(w.currentTarget.value));
        break;
      default:
        t(11, d = w.currentTarget.value);
        break;
    }
  }
  function L(w) {
    (c === "file" || c === "range") && m(w), t(13, p = !0), y && t(14, _ = b.matches(":invalid"));
  }
  function W(w) {
    var Z;
    return w in O ? (Z = O[w]) !== null && Z !== void 0 ? Z : null : X().getAttribute(w);
  }
  function D(w, Z) {
    O[w] !== Z && t(6, O[w] = Z, O);
  }
  function I(w) {
    (!(w in O) || O[w] != null) && t(6, O[w] = void 0, O);
  }
  function U() {
    X().focus();
  }
  function T() {
    X().blur();
  }
  function X() {
    return b;
  }
  function we(w) {
    Ut.call(this, n, w);
  }
  function ke(w) {
    Ut.call(this, n, w);
  }
  function ve(w) {
    le[w ? "unshift" : "push"](() => {
      b = w, t(5, b);
    });
  }
  const j = (w) => c !== "file" && m(w);
  return n.$$set = (w) => {
    e = z(z({}, e), Oe(w)), t(10, i = ge(e, l)), "use" in w && t(0, a = w.use), "class" in w && t(1, u = w.class), "type" in w && t(2, c = w.type), "placeholder" in w && t(3, f = w.placeholder), "value" in w && t(11, d = w.value), "files" in w && t(12, h = w.files), "dirty" in w && t(13, p = w.dirty), "invalid" in w && t(14, _ = w.invalid), "updateInvalid" in w && t(15, y = w.updateInvalid), "emptyValueNull" in w && t(16, A = w.emptyValueNull), "emptyValueUndefined" in w && t(17, E = w.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete S.value, t(4, S), t(2, c), t(11, d)) : t(4, S.value = d ?? "", S));
  }, [
    a,
    u,
    c,
    f,
    S,
    b,
    O,
    r,
    m,
    L,
    i,
    d,
    h,
    p,
    _,
    y,
    A,
    E,
    W,
    D,
    I,
    U,
    T,
    X,
    we,
    ke,
    ve,
    j
  ];
}
class is extends x {
  constructor(e) {
    super(), $(this, e, ls, ts, Q, {
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
function rs(n) {
  let e, t, l, i, r, s, o = [
    {
      class: t = te({
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
  ], a = {};
  for (let u = 0; u < o.length; u += 1)
    a = z(a, o[u]);
  return {
    c() {
      e = G("textarea"), ie(e, a);
    },
    m(u, c) {
      M(u, e, c), e.autofocus && e.focus(), n[21](e), gn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        ee(i = Re.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        K(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        K(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        K(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        K(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], r = !0);
    },
    p(u, [c]) {
      ie(e, a = fe(o, [
        c & /*className*/
        4 && t !== (t = te({
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
      ])), i && pe(i.update) && c & /*use*/
      2 && i.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && gn(
        e,
        /*value*/
        u[0]
      );
    },
    i: J,
    o: J,
    d(u) {
      u && H(e), n[21](null), r = !1, he(s);
    }
  };
}
function ss(n, e, t) {
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
  let i = ge(e, l);
  const r = We(Ee());
  let { use: s = [] } = e, { class: o = "" } = e, { style: a = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, h, p = {};
  Ne(() => {
    d && t(11, f = h.matches(":invalid"));
  });
  function _() {
    t(10, c = !0), d && t(11, f = h.matches(":invalid"));
  }
  function y(I) {
    var U;
    return I in p ? (U = p[I]) !== null && U !== void 0 ? U : null : S().getAttribute(I);
  }
  function A(I, U) {
    p[I] !== U && t(6, p[I] = U, p);
  }
  function E(I) {
    (!(I in p) || p[I] != null) && t(6, p[I] = void 0, p);
  }
  function b() {
    S().focus();
  }
  function O() {
    S().blur();
  }
  function S() {
    return h;
  }
  function m(I) {
    Ut.call(this, n, I);
  }
  function L(I) {
    Ut.call(this, n, I);
  }
  function W(I) {
    le[I ? "unshift" : "push"](() => {
      h = I, t(5, h);
    });
  }
  function D() {
    u = this.value, t(0, u);
  }
  return n.$$set = (I) => {
    e = z(z({}, e), Oe(I)), t(9, i = ge(e, l)), "use" in I && t(1, s = I.use), "class" in I && t(2, o = I.class), "style" in I && t(3, a = I.style), "value" in I && t(0, u = I.value), "dirty" in I && t(10, c = I.dirty), "invalid" in I && t(11, f = I.invalid), "updateInvalid" in I && t(12, d = I.updateInvalid), "resizable" in I && t(4, g = I.resizable);
  }, [
    u,
    s,
    o,
    a,
    g,
    h,
    p,
    r,
    _,
    i,
    c,
    f,
    d,
    y,
    A,
    E,
    b,
    O,
    S,
    m,
    L,
    W,
    D
  ];
}
class as extends x {
  constructor(e) {
    super(), $(this, e, ss, rs, Q, {
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
const os = (n) => ({}), Dn = (n) => ({}), us = (n) => ({}), Pn = (n) => ({}), cs = (n) => ({}), Hn = (n) => ({}), fs = (n) => ({}), Mn = (n) => ({}), ds = (n) => ({}), Tn = (n) => ({}), gs = (n) => ({}), Fn = (n) => ({}), ms = (n) => ({}), Gn = (n) => ({}), hs = (n) => ({}), On = (n) => ({}), ps = (n) => ({}), Un = (n) => ({}), _s = (n) => ({}), Wn = (n) => ({}), bs = (n) => ({}), Bn = (n) => ({}), vs = (n) => ({}), Zn = (n) => ({});
function Cs(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, h;
  const p = (
    /*#slots*/
    n[56].label
  ), _ = ae(
    p,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  l = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ys] },
      $$scope: { ctx: n }
    }
  });
  const y = (
    /*#slots*/
    n[56].default
  ), A = ae(
    y,
    n,
    /*$$scope*/
    n[87],
    null
  );
  s = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [As] },
      $$scope: { ctx: n }
    }
  });
  const E = (
    /*#slots*/
    n[56].ripple
  ), b = ae(
    E,
    n,
    /*$$scope*/
    n[87],
    Pn
  );
  let O = [
    {
      class: a = te({
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
      ).map($n).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    ht(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], S = {};
  for (let m = 0; m < O.length; m += 1)
    S = z(S, O[m]);
  return {
    c() {
      e = G("div"), _ && _.c(), t = B(), V(l.$$.fragment), i = B(), A && A.c(), r = B(), V(s.$$.fragment), o = B(), b && b.c(), ie(e, S);
    },
    m(m, L) {
      M(m, e, L), _ && _.m(e, null), P(e, t), N(l, e, null), P(e, i), A && A.m(e, null), P(e, r), N(s, e, null), P(e, o), b && b.m(e, null), n[82](e), d = !0, g || (h = [
        ee(c = kt.call(null, e, {
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
        ee(f = Re.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ee(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], g = !0);
    },
    p(m, L) {
      _ && _.p && (!d || L[2] & /*$$scope*/
      33554432) && ue(
        _,
        p,
        m,
        /*$$scope*/
        m[87],
        d ? oe(
          p,
          /*$$scope*/
          m[87],
          L,
          ds
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        Tn
      );
      const W = {};
      L[2] & /*$$scope*/
      33554432 && (W.$$scope = { dirty: L, ctx: m }), l.$set(W), A && A.p && (!d || L[2] & /*$$scope*/
      33554432) && ue(
        A,
        y,
        m,
        /*$$scope*/
        m[87],
        d ? oe(
          y,
          /*$$scope*/
          m[87],
          L,
          null
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        null
      );
      const D = {};
      L[2] & /*$$scope*/
      33554432 && (D.$$scope = { dirty: L, ctx: m }), s.$set(D), b && b.p && (!d || L[2] & /*$$scope*/
      33554432) && ue(
        b,
        E,
        m,
        /*$$scope*/
        m[87],
        d ? oe(
          E,
          /*$$scope*/
          m[87],
          L,
          us
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        Pn
      ), ie(e, S = fe(O, [
        (!d || L[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | L[1] & /*$$slots*/
        65536 && a !== (a = te({
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
        }))) && { class: a },
        (!d || L[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          m[26]
        ).map($n).concat([
          /*style*/
          m[10]
        ]).join(" "))) && { style: u },
        L[1] & /*$$restProps*/
        32768 && ht(
          /*$$restProps*/
          m[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && pe(c.update) && L[0] & /*ripple*/
      2048 && c.update.call(null, {
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
      }), f && pe(f.update) && L[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        m[8]
      );
    },
    i(m) {
      d || (C(_, m), C(l.$$.fragment, m), C(A, m), C(s.$$.fragment, m), C(b, m), d = !0);
    },
    o(m) {
      k(_, m), k(l.$$.fragment, m), k(A, m), k(s.$$.fragment, m), k(b, m), d = !1;
    },
    d(m) {
      m && H(e), _ && _.d(m), q(l), A && A.d(m), q(s), b && b.d(m), n[82](null), g = !1, he(h);
    }
  };
}
function Is(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, h, p, _, y, A, E = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Nn(n), b = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && jn(n)
  );
  i = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Ls] },
      $$scope: { ctx: n }
    }
  });
  const O = (
    /*#slots*/
    n[56].default
  ), S = ae(
    O,
    n,
    /*$$scope*/
    n[87],
    null
  ), m = [Es, Rs], L = [];
  function W(T, X) {
    return (
      /*textarea*/
      T[14] && typeof /*value*/
      T[0] == "string" ? 0 : 1
    );
  }
  o = W(n), a = L[o] = m[o](n), c = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Hs] },
      $$scope: { ctx: n }
    }
  });
  let D = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Kn(n), I = [
    {
      class: d = te({
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
      style: g = Object.entries(
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
  ], U = {};
  for (let T = 0; T < I.length; T += 1)
    U = z(U, I[T]);
  return {
    c() {
      e = G("label"), E && E.c(), t = B(), b && b.c(), l = B(), V(i.$$.fragment), r = B(), S && S.c(), s = B(), a.c(), u = B(), V(c.$$.fragment), f = B(), D && D.c(), ie(e, U);
    },
    m(T, X) {
      M(T, e, X), E && E.m(e, null), P(e, t), b && b.m(e, null), P(e, l), N(i, e, null), P(e, r), S && S.m(e, null), P(e, s), L[o].m(e, null), P(e, u), N(c, e, null), P(e, f), D && D.m(e, null), n[78](e), _ = !0, y || (A = [
        ee(h = kt.call(null, e, {
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
        ee(p = Re.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ee(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        K(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        K(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], y = !0);
    },
    p(T, X) {
      !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" ? E ? (E.p(T, X), X[0] & /*textarea, variant*/
      49152 && C(E, 1)) : (E = Nn(T), E.c(), C(E, 1), E.m(e, t)) : E && (re(), k(E, 1, 1, () => {
        E = null;
      }), se()), /*textarea*/
      T[14] || /*variant*/
      T[15] === "outlined" ? b ? (b.p(T, X), X[0] & /*textarea, variant*/
      49152 && C(b, 1)) : (b = jn(T), b.c(), C(b, 1), b.m(e, l)) : b && (re(), k(b, 1, 1, () => {
        b = null;
      }), se());
      const we = {};
      X[2] & /*$$scope*/
      33554432 && (we.$$scope = { dirty: X, ctx: T }), i.$set(we), S && S.p && (!_ || X[2] & /*$$scope*/
      33554432) && ue(
        S,
        O,
        T,
        /*$$scope*/
        T[87],
        _ ? oe(
          O,
          /*$$scope*/
          T[87],
          X,
          null
        ) : ce(
          /*$$scope*/
          T[87]
        ),
        null
      );
      let ke = o;
      o = W(T), o === ke ? L[o].p(T, X) : (re(), k(L[ke], 1, 1, () => {
        L[ke] = null;
      }), se(), a = L[o], a ? a.p(T, X) : (a = L[o] = m[o](T), a.c()), C(a, 1), a.m(e, u));
      const ve = {};
      X[2] & /*$$scope*/
      33554432 && (ve.$$scope = { dirty: X, ctx: T }), c.$set(ve), !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" && /*ripple*/
      T[11] ? D ? (D.p(T, X), X[0] & /*textarea, variant, ripple*/
      51200 && C(D, 1)) : (D = Kn(T), D.c(), C(D, 1), D.m(e, null)) : D && (re(), k(D, 1, 1, () => {
        D = null;
      }), se()), ie(e, U = fe(I, [
        (!_ || X[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | X[1] & /*$$slots*/
        65536 && d !== (d = te({
          [
            /*className*/
            T[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            T[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            T[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            T[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            T[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            T[15] === "standard" && !/*textarea*/
            T[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            T[16] || /*label*/
            T[17] == null && !/*$$slots*/
            T[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            T[28] || /*value*/
            T[0] != null && /*value*/
            T[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            T[35](
              /*withLeadingIcon*/
              T[22]
            ) ? (
              /*$$slots*/
              T[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              T[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            T[35](
              /*withTrailingIcon*/
              T[23]
            ) ? (
              /*$$slots*/
              T[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              T[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            T[14] && /*$$slots*/
            T[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            T[1]
          ),
          .../*internalClasses*/
          T[25]
        }))) && { class: d },
        (!_ || X[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          T[26]
        ).map(Jn).concat([
          /*style*/
          T[10]
        ]).join(" "))) && { style: g },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        X[1] & /*$$restProps*/
        32768 && ht(
          /*$$restProps*/
          T[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), h && pe(h.update) && X[0] & /*textarea, variant*/
      49152 | X[1] & /*inputElement*/
      4 && h.update.call(null, {
        ripple: !/*textarea*/
        T[14] && /*variant*/
        T[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          T[43]
        ),
        removeClass: (
          /*removeClass*/
          T[44]
        ),
        addStyle: (
          /*addStyle*/
          T[45]
        ),
        eventTarget: (
          /*inputElement*/
          T[33]
        ),
        activeTarget: (
          /*inputElement*/
          T[33]
        ),
        initPromise: (
          /*initPromise*/
          T[37]
        )
      }), p && pe(p.update) && X[0] & /*use*/
      256 && p.update.call(
        null,
        /*use*/
        T[8]
      );
    },
    i(T) {
      _ || (C(E), C(b), C(i.$$.fragment, T), C(S, T), C(a), C(c.$$.fragment, T), C(D), _ = !0);
    },
    o(T) {
      k(E), k(b), k(i.$$.fragment, T), k(S, T), k(a), k(c.$$.fragment, T), k(D), _ = !1;
    },
    d(T) {
      T && H(e), E && E.d(), b && b.d(), q(i), S && S.d(T), L[o].d(), q(c), D && D.d(), n[78](null), y = !1, he(A);
    }
  };
}
function ys(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = ae(
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
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          fs
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Mn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function As(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ae(
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
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          cs
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Hn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Nn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && qn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Vn(n);
  return {
    c() {
      i && i.c(), e = B(), r && r.c(), t = Ae();
    },
    m(s, o) {
      i && i.m(s, o), M(s, e, o), r && r.m(s, o), M(s, t, o), l = !0;
    },
    p(s, o) {
      /*variant*/
      s[15] === "filled" ? i || (i = qn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      s[16] && /*label*/
      (s[17] != null || /*$$slots*/
      s[47].label) ? r ? (r.p(s, o), o[0] & /*noLabel, label*/
      196608 | o[1] & /*$$slots*/
      65536 && C(r, 1)) : (r = Vn(s), r.c(), C(r, 1), r.m(t.parentNode, t)) : r && (re(), k(r, 1, 1, () => {
        r = null;
      }), se());
    },
    i(s) {
      l || (C(r), l = !0);
    },
    o(s) {
      k(r), l = !1;
    },
    d(s) {
      s && (H(e), H(t)), i && i.d(s), r && r.d(s);
    }
  };
}
function qn(n) {
  let e;
  return {
    c() {
      e = G("span"), v(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Vn(n) {
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
    Pe(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [ks] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new xl({ props: i }), n[57](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const o = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? fe(l, [
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
        32768 && Le(Pe(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      s[0] & /*label*/
      131072 | s[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: s, ctx: r }), e.$set(o);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      k(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), q(e, r);
    }
  };
}
function ks(n) {
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
  ), r = ae(
    i,
    n,
    /*$$scope*/
    n[87],
    Zn
  );
  return {
    c() {
      t = ne(e), r && r.c();
    },
    m(s, o) {
      M(s, t, o), r && r.m(s, o), l = !0;
    },
    p(s, o) {
      (!l || o[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && _e(t, e), r && r.p && (!l || o[2] & /*$$scope*/
      33554432) && ue(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? oe(
          i,
          /*$$scope*/
          s[87],
          o,
          vs
        ) : ce(
          /*$$scope*/
          s[87]
        ),
        Zn
      );
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      k(r, s), l = !1;
    },
    d(s) {
      s && H(t), r && r.d(s);
    }
  };
}
function jn(n) {
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
    Pe(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [Ss] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new Xr({ props: i }), n[59](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const o = s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots, $$restProps*/
      98304 ? fe(l, [
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
        32768 && Le(Pe(
          /*$$restProps*/
          r[46],
          "outline$"
        ))
      ]) : {};
      s[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | s[1] & /*$$restProps, $$slots*/
      98304 | s[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: s, ctx: r }), e.$set(o);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      k(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), q(e, r);
    }
  };
}
function zn(n) {
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
    Pe(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [ws] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new xl({ props: i }), n[58](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const o = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? fe(l, [
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
        32768 && Le(Pe(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      s[0] & /*label*/
      131072 | s[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: s, ctx: r }), e.$set(o);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      k(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), q(e, r);
    }
  };
}
function ws(n) {
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
  ), r = ae(
    i,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  return {
    c() {
      t = ne(e), r && r.c();
    },
    m(s, o) {
      M(s, t, o), r && r.m(s, o), l = !0;
    },
    p(s, o) {
      (!l || o[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && _e(t, e), r && r.p && (!l || o[2] & /*$$scope*/
      33554432) && ue(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? oe(
          i,
          /*$$scope*/
          s[87],
          o,
          bs
        ) : ce(
          /*$$scope*/
          s[87]
        ),
        Bn
      );
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      k(r, s), l = !1;
    },
    d(s) {
      s && H(t), r && r.d(s);
    }
  };
}
function Ss(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && zn(n);
  return {
    c() {
      l && l.c(), e = Ae();
    },
    m(i, r) {
      l && l.m(i, r), M(i, e, r), t = !0;
    },
    p(i, r) {
      !/*noLabel*/
      i[16] && /*label*/
      (i[17] != null || /*$$slots*/
      i[47].label) ? l ? (l.p(i, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && C(l, 1)) : (l = zn(i), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (re(), k(l, 1, 1, () => {
        l = null;
      }), se());
    },
    i(i) {
      t || (C(l), t = !0);
    },
    o(i) {
      k(l), t = !1;
    },
    d(i) {
      i && H(e), l && l.d(i);
    }
  };
}
function Ls(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Wn
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
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          _s
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Wn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Rs(n) {
  let e, t, l, i, r, s, o, a, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = ae(
    f,
    n,
    /*$$scope*/
    n[87],
    On
  );
  let g = (
    /*prefix*/
    n[20] != null && Xn(n)
  );
  const h = [
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
    Pe(
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
  function y(m) {
    n[71](m);
  }
  function A(m) {
    n[72](m);
  }
  let E = {};
  for (let m = 0; m < h.length; m += 1)
    E = z(E, h[m]);
  /*value*/
  n[0] !== void 0 && (E.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (E.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (E.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (E.invalid = /*invalid*/
  n[1]), l = new is({ props: E }), n[68](l), le.push(() => xe(l, "value", p)), le.push(() => xe(l, "files", _)), le.push(() => xe(l, "dirty", y)), le.push(() => xe(l, "invalid", A)), l.$on(
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
  let b = (
    /*suffix*/
    n[21] != null && Yn(n)
  );
  const O = (
    /*#slots*/
    n[56].suffix
  ), S = ae(
    O,
    n,
    /*$$scope*/
    n[87],
    Gn
  );
  return {
    c() {
      d && d.c(), e = B(), g && g.c(), t = B(), V(l.$$.fragment), a = B(), b && b.c(), u = B(), S && S.c();
    },
    m(m, L) {
      d && d.m(m, L), M(m, e, L), g && g.m(m, L), M(m, t, L), N(l, m, L), M(m, a, L), b && b.m(m, L), M(m, u, L), S && S.m(m, L), c = !0;
    },
    p(m, L) {
      d && d.p && (!c || L[2] & /*$$scope*/
      33554432) && ue(
        d,
        f,
        m,
        /*$$scope*/
        m[87],
        c ? oe(
          f,
          /*$$scope*/
          m[87],
          L,
          hs
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        On
      ), /*prefix*/
      m[20] != null ? g ? (g.p(m, L), L[0] & /*prefix*/
      1048576 && C(g, 1)) : (g = Xn(m), g.c(), C(g, 1), g.m(t.parentNode, t)) : g && (re(), k(g, 1, 1, () => {
        g = null;
      }), se());
      const W = L[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | L[1] & /*$$restProps*/
      32768 ? fe(h, [
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
        196608 && Le(
          /*noLabel*/
          m[16] && /*label*/
          m[17] != null ? { placeholder: (
            /*label*/
            m[17]
          ) } : {}
        ),
        L[1] & /*$$restProps*/
        32768 && Le(Pe(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && L[0] & /*value*/
      1 && (i = !0, W.value = /*value*/
      m[0], $e(() => i = !1)), !r && L[0] & /*files*/
      8 && (r = !0, W.files = /*files*/
      m[3], $e(() => r = !1)), !s && L[0] & /*dirty*/
      16 && (s = !0, W.dirty = /*dirty*/
      m[4], $e(() => s = !1)), !o && L[0] & /*invalid*/
      2 && (o = !0, W.invalid = /*invalid*/
      m[1], $e(() => o = !1)), l.$set(W), /*suffix*/
      m[21] != null ? b ? (b.p(m, L), L[0] & /*suffix*/
      2097152 && C(b, 1)) : (b = Yn(m), b.c(), C(b, 1), b.m(u.parentNode, u)) : b && (re(), k(b, 1, 1, () => {
        b = null;
      }), se()), S && S.p && (!c || L[2] & /*$$scope*/
      33554432) && ue(
        S,
        O,
        m,
        /*$$scope*/
        m[87],
        c ? oe(
          O,
          /*$$scope*/
          m[87],
          L,
          ms
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        Gn
      );
    },
    i(m) {
      c || (C(d, m), C(g), C(l.$$.fragment, m), C(b), C(S, m), c = !0);
    },
    o(m) {
      k(d, m), k(g), k(l.$$.fragment, m), k(b), k(S, m), c = !1;
    },
    d(m) {
      m && (H(e), H(t), H(a), H(u)), d && d.d(m), g && g.d(m), n[68](null), q(l, m), b && b.d(m), S && S.d(m);
    }
  };
}
function Es(n) {
  let e, t, l, i, r, s, o, a;
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
    Pe(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function c(_) {
    n[61](_);
  }
  function f(_) {
    n[62](_);
  }
  function d(_) {
    n[63](_);
  }
  let g = {};
  for (let _ = 0; _ < u.length; _ += 1)
    g = z(g, u[_]);
  /*value*/
  n[0] !== void 0 && (g.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (g.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (g.invalid = /*invalid*/
  n[1]), t = new as({ props: g }), n[60](t), le.push(() => xe(t, "value", c)), le.push(() => xe(t, "dirty", f)), le.push(() => xe(t, "invalid", d)), t.$on(
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
  const h = (
    /*#slots*/
    n[56].internalCounter
  ), p = ae(
    h,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  return {
    c() {
      e = G("span"), V(t.$$.fragment), s = B(), p && p.c(), v(e, "class", o = te({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(_, y) {
      M(_, e, y), N(t, e, null), P(e, s), p && p.m(e, null), a = !0;
    },
    p(_, y) {
      const A = y[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | y[1] & /*$$restProps*/
      32768 ? fe(u, [
        y[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          _[12]
        ) },
        y[0] & /*required*/
        8192 && { required: (
          /*required*/
          _[13]
        ) },
        y[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          _[19]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          _[27]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          _[27]
        ) },
        y[1] & /*$$restProps*/
        32768 && Le(Pe(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !l && y[0] & /*value*/
      1 && (l = !0, A.value = /*value*/
      _[0], $e(() => l = !1)), !i && y[0] & /*dirty*/
      16 && (i = !0, A.dirty = /*dirty*/
      _[4], $e(() => i = !1)), !r && y[0] & /*invalid*/
      2 && (r = !0, A.invalid = /*invalid*/
      _[1], $e(() => r = !1)), t.$set(A), p && p.p && (!a || y[2] & /*$$scope*/
      33554432) && ue(
        p,
        h,
        _,
        /*$$scope*/
        _[87],
        a ? oe(
          h,
          /*$$scope*/
          _[87],
          y,
          ps
        ) : ce(
          /*$$scope*/
          _[87]
        ),
        Un
      ), (!a || y[1] & /*$$restProps*/
      32768 && o !== (o = te({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        _[46]) || /*$$restProps*/
        _[46].input$resizable
      }))) && v(e, "class", o);
    },
    i(_) {
      a || (C(t.$$.fragment, _), C(p, _), a = !0);
    },
    o(_) {
      k(t.$$.fragment, _), k(p, _), a = !1;
    },
    d(_) {
      _ && H(e), n[60](null), q(t), p && p.d(_);
    }
  };
}
function Xn(n) {
  let e, t;
  return e = new xr({
    props: {
      $$slots: { default: [Ds] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ds(n) {
  let e;
  return {
    c() {
      e = ne(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      M(t, e, l);
    },
    p(t, l) {
      l[0] & /*prefix*/
      1048576 && _e(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && H(e);
    }
  };
}
function Yn(n) {
  let e, t;
  return e = new es({
    props: {
      $$slots: { default: [Ps] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*suffix*/
      2097152 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ps(n) {
  let e;
  return {
    c() {
      e = ne(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      M(t, e, l);
    },
    p(t, l) {
      l[0] & /*suffix*/
      2097152 && _e(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && H(e);
    }
  };
}
function Hs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Fn
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
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          gs
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Fn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Kn(n) {
  let e, t;
  const l = [Pe(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new Vr({ props: i }), n[77](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const o = s[1] & /*$$restProps*/
      32768 ? fe(l, [Le(Pe(
        /*$$restProps*/
        r[46],
        "ripple$"
      ))]) : {};
      e.$set(o);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      k(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), q(e, r);
    }
  };
}
function Qn(n) {
  let e, t;
  const l = [Pe(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [Ms] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new $r({ props: i }), e.$on(
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
      V(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const o = s[1] & /*$$restProps*/
      32768 ? fe(l, [Le(Pe(
        /*$$restProps*/
        r[46],
        "helperLine$"
      ))]) : {};
      s[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: s, ctx: r }), e.$set(o);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      k(e.$$.fragment, r), t = !1;
    },
    d(r) {
      q(e, r);
    }
  };
}
function Ms(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = ae(
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
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          os
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Dn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ts(n) {
  let e, t, l, i, r;
  const s = [Is, Cs], o = [];
  function a(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = a(n), t = o[e] = s[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Qn(n)
  );
  return {
    c() {
      t.c(), l = B(), u && u.c(), i = Ae();
    },
    m(c, f) {
      o[e].m(c, f), M(c, l, f), u && u.m(c, f), M(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Qn(c), u.c(), C(u, 1), u.m(i.parentNode, i)) : u && (re(), k(u, 1, 1, () => {
        u = null;
      }), se());
    },
    i(c) {
      r || (C(t), C(u), r = !0);
    },
    o(c) {
      k(t), k(u), r = !1;
    },
    d(c) {
      c && (H(l), H(i)), o[e].d(c), u && u.d(c);
    }
  };
}
const Jn = ([n, e]) => `${n}: ${e};`, $n = ([n, e]) => `${n}: ${e};`;
function Fs(n, e, t) {
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
  let r = ge(e, i), { $$slots: s = {}, $$scope: o } = e;
  const a = an(s), { applyPassive: u } = Ql, c = We(Ee());
  let f = () => {
  };
  function d(R) {
    return R === f;
  }
  let { use: g = [] } = e, { class: h = "" } = e, { style: p = "" } = e, { ripple: _ = !0 } = e, { disabled: y = !1 } = e, { required: A = !1 } = e, { textarea: E = !1 } = e, { variant: b = E ? "outlined" : "standard" } = e, { noLabel: O = !1 } = e, { label: S = void 0 } = e, { type: m = "text" } = e, { value: L = r.input$emptyValueUndefined ? void 0 : f } = e, { files: W = f } = e;
  const D = !d(L) || !d(W);
  d(L) && (L = void 0), d(W) && (W = null);
  let { invalid: I = f } = e, { updateInvalid: U = d(I) } = e;
  d(I) && (I = !1);
  let { dirty: T = !1 } = e, { prefix: X = void 0 } = e, { suffix: we = void 0 } = e, { validateOnValueChange: ke = U } = e, { useNativeValidation: ve = U } = e, { withLeadingIcon: j = f } = e, { withTrailingIcon: w = f } = e, { input: Z = void 0 } = e, { floatingLabel: me = void 0 } = e, { lineRipple: be = void 0 } = e, { notchedOutline: He = void 0 } = e, Fe, de, Ge = {}, je = {}, Ye, Ke = !1, Rt = Be("SMUI:addLayoutListener"), vt, Ct, qe = new Promise((R) => Ct = R), nt, lt, ot, it, It = L;
  Rt && (vt = Rt(un)), Ne(() => {
    if (t(54, de = new Or(
      {
        // getRootAdapterMethods_
        addClass: Dt,
        removeClass: Pt,
        hasClass: yt,
        registerTextFieldInteractionHandler: (R, Se) => Ht().addEventListener(R, Se),
        deregisterTextFieldInteractionHandler: (R, Se) => Ht().removeEventListener(R, Se),
        registerValidationAttributeChangeHandler: (R) => {
          const Se = (jt) => jt.map((zt) => zt.attributeName).filter((zt) => zt), cn = new MutationObserver((jt) => {
            ve && R(Se(jt));
          }), Oi = { attributes: !0 };
          return Z && cn.observe(Z.getElement(), Oi), cn;
        },
        deregisterValidationAttributeChangeHandler: (R) => {
          R.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var R;
          return (R = Z == null ? void 0 : Z.getElement()) !== null && R !== void 0 ? R : null;
        },
        setInputAttr: (R, Se) => {
          Z == null || Z.addAttr(R, Se);
        },
        removeInputAttr: (R) => {
          Z == null || Z.removeAttr(R);
        },
        isFocused: () => document.activeElement === (Z == null ? void 0 : Z.getElement()),
        registerInputInteractionHandler: (R, Se) => {
          Z == null || Z.getElement().addEventListener(R, Se, u());
        },
        deregisterInputInteractionHandler: (R, Se) => {
          Z == null || Z.getElement().removeEventListener(R, Se, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (R) => me && me.float(R),
        getLabelWidth: () => me ? me.getWidth() : 0,
        hasLabel: () => !!me,
        shakeLabel: (R) => me && me.shake(R),
        setLabelRequired: (R) => me && me.setRequired(R),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => be && be.activate(),
        deactivateLineRipple: () => be && be.deactivate(),
        setLineRippleTransformOrigin: (R) => be && be.setRippleCenter(R),
        // getOutlineAdapterMethods_
        closeOutline: () => He && He.closeNotch(),
        hasOutline: () => !!He,
        notchOutline: (R) => He && He.notch(R)
      },
      {
        get helperText() {
          return ot;
        },
        get characterCounter() {
          return it;
        },
        get leadingIcon() {
          return nt;
        },
        get trailingIcon() {
          return lt;
        }
      }
    )), D) {
      if (Z == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      de.init();
    } else
      Yi().then(() => {
        if (Z == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        de.init();
      });
    return Ct(), () => {
      de.destroy();
    };
  }), Zt(() => {
    vt && vt();
  });
  function Vt(R) {
    t(29, nt = R.detail);
  }
  function F(R) {
    t(30, lt = R.detail);
  }
  function Y(R) {
    t(32, it = R.detail);
  }
  function De(R) {
    t(27, Ye = R.detail);
  }
  function Et(R) {
    t(31, ot = R.detail);
  }
  function yt(R) {
    var Se;
    return R in Ge ? (Se = Ge[R]) !== null && Se !== void 0 ? Se : null : Ht().classList.contains(R);
  }
  function Dt(R) {
    Ge[R] || t(25, Ge[R] = !0, Ge);
  }
  function Pt(R) {
    (!(R in Ge) || Ge[R]) && t(25, Ge[R] = !1, Ge);
  }
  function ii(R, Se) {
    je[R] != Se && (Se === "" || Se == null ? (delete je[R], t(26, je)) : t(26, je[R] = Se, je));
  }
  function ri() {
    Z == null || Z.focus();
  }
  function si() {
    Z == null || Z.blur();
  }
  function un() {
    if (de) {
      const R = de.shouldFloat;
      de.notchOutline(R);
    }
  }
  function Ht() {
    return Fe;
  }
  function ai(R) {
    le[R ? "unshift" : "push"](() => {
      me = R, t(5, me);
    });
  }
  function oi(R) {
    le[R ? "unshift" : "push"](() => {
      me = R, t(5, me);
    });
  }
  function ui(R) {
    le[R ? "unshift" : "push"](() => {
      He = R, t(7, He);
    });
  }
  function ci(R) {
    le[R ? "unshift" : "push"](() => {
      Z = R, t(2, Z);
    });
  }
  function fi(R) {
    L = R, t(0, L);
  }
  function di(R) {
    T = R, t(4, T);
  }
  function gi(R) {
    I = R, t(1, I), t(54, de), t(19, U);
  }
  const mi = () => t(28, Ke = !1), hi = () => t(28, Ke = !0), pi = (R) => Ce(Fe, "blur", R), _i = (R) => Ce(Fe, "focus", R);
  function bi(R) {
    le[R ? "unshift" : "push"](() => {
      Z = R, t(2, Z);
    });
  }
  function vi(R) {
    L = R, t(0, L);
  }
  function Ci(R) {
    W = R, t(3, W);
  }
  function Ii(R) {
    T = R, t(4, T);
  }
  function yi(R) {
    I = R, t(1, I), t(54, de), t(19, U);
  }
  const Ai = () => t(28, Ke = !1), ki = () => t(28, Ke = !0), wi = (R) => Ce(Fe, "blur", R), Si = (R) => Ce(Fe, "focus", R);
  function Li(R) {
    le[R ? "unshift" : "push"](() => {
      be = R, t(6, be);
    });
  }
  function Ri(R) {
    le[R ? "unshift" : "push"](() => {
      Fe = R, t(24, Fe);
    });
  }
  const Ei = () => t(29, nt = void 0), Di = () => t(30, lt = void 0), Pi = () => t(32, it = void 0);
  function Hi(R) {
    le[R ? "unshift" : "push"](() => {
      Fe = R, t(24, Fe);
    });
  }
  const Mi = () => t(29, nt = void 0), Ti = () => t(30, lt = void 0), Fi = () => {
    t(27, Ye = void 0), t(31, ot = void 0);
  }, Gi = () => t(32, it = void 0);
  return n.$$set = (R) => {
    e = z(z({}, e), Oe(R)), t(46, r = ge(e, i)), "use" in R && t(8, g = R.use), "class" in R && t(9, h = R.class), "style" in R && t(10, p = R.style), "ripple" in R && t(11, _ = R.ripple), "disabled" in R && t(12, y = R.disabled), "required" in R && t(13, A = R.required), "textarea" in R && t(14, E = R.textarea), "variant" in R && t(15, b = R.variant), "noLabel" in R && t(16, O = R.noLabel), "label" in R && t(17, S = R.label), "type" in R && t(18, m = R.type), "value" in R && t(0, L = R.value), "files" in R && t(3, W = R.files), "invalid" in R && t(1, I = R.invalid), "updateInvalid" in R && t(19, U = R.updateInvalid), "dirty" in R && t(4, T = R.dirty), "prefix" in R && t(20, X = R.prefix), "suffix" in R && t(21, we = R.suffix), "validateOnValueChange" in R && t(48, ke = R.validateOnValueChange), "useNativeValidation" in R && t(49, ve = R.useNativeValidation), "withLeadingIcon" in R && t(22, j = R.withLeadingIcon), "withTrailingIcon" in R && t(23, w = R.withTrailingIcon), "input" in R && t(2, Z = R.input), "floatingLabel" in R && t(5, me = R.floatingLabel), "lineRipple" in R && t(6, be = R.lineRipple), "notchedOutline" in R && t(7, He = R.notchedOutline), "$$scope" in R && t(87, o = R.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = Z && Z.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && de && de.isValid() !== !I && (U ? t(1, I = !de.isValid()) : de.setValid(!I)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && de && de.getValidateOnValueChange() !== ke && de.setValidateOnValueChange(d(ke) ? !1 : ke), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && de && de.setUseNativeValidation(d(ve) ? !0 : ve), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && de && de.setDisabled(y), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && de && D && It !== L) {
      t(55, It = L);
      const R = `${L}`;
      de.getValue() !== R && de.setValue(R);
    }
  }, [
    L,
    I,
    Z,
    W,
    T,
    me,
    be,
    He,
    g,
    h,
    p,
    _,
    y,
    A,
    E,
    b,
    O,
    S,
    m,
    U,
    X,
    we,
    j,
    w,
    Fe,
    Ge,
    je,
    Ye,
    Ke,
    nt,
    lt,
    ot,
    it,
    l,
    c,
    d,
    D,
    qe,
    Vt,
    F,
    Y,
    De,
    Et,
    Dt,
    Pt,
    ii,
    r,
    a,
    ke,
    ve,
    ri,
    si,
    un,
    Ht,
    de,
    It,
    s,
    ai,
    oi,
    ui,
    ci,
    fi,
    di,
    gi,
    mi,
    hi,
    pi,
    _i,
    bi,
    vi,
    Ci,
    Ii,
    yi,
    Ai,
    ki,
    wi,
    Si,
    Li,
    Ri,
    Ei,
    Di,
    Pi,
    Hi,
    Mi,
    Ti,
    Fi,
    Gi,
    o
  ];
}
class Gs extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Fs,
      Ts,
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
Te({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Te({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Te({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Os(n) {
  let e, t, l, i, r, s;
  const o = (
    /*#slots*/
    n[8].default
  ), a = ae(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = te({
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
    c = z(c, u[f]);
  return {
    c() {
      e = G("span"), a && a.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), a && a.m(e, null), n[9](e), i = !0, r || (s = [
        ee(l = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], r = !0);
    },
    p(f, [d]) {
      a && a.p && (!i || d & /*$$scope*/
      128) && ue(
        a,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? oe(
          o,
          /*$$scope*/
          f[7],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[7]
        ),
        null
      ), ie(e, c = fe(u, [
        (!i || d & /*className*/
        2 && t !== (t = te({
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
      ])), l && pe(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(a, f), i = !0);
    },
    o(f) {
      k(a, f), i = !1;
    },
    d(f) {
      f && H(e), a && a.d(f), n[9](null), r = !1, he(s);
    }
  };
}
function Us(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = We(Ee());
  let { use: a = [] } = e, { class: u = "" } = e, c, f = Be("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function g(h) {
    le[h ? "unshift" : "push"](() => {
      c = h, t(2, c);
    });
  }
  return n.$$set = (h) => {
    e = z(z({}, e), Oe(h)), t(5, i = ge(e, l)), "use" in h && t(0, a = h.use), "class" in h && t(1, u = h.class), "$$scope" in h && t(7, s = h.$$scope);
  }, [
    a,
    u,
    c,
    o,
    f,
    i,
    d,
    s,
    r,
    g
  ];
}
class Ws extends x {
  constructor(e) {
    super(), $(this, e, Us, Os, Q, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Te({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Te({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Te({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Te({
  class: "mdc-menu__selection-group-icon",
  component: Ws
});
Te({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Te({
  class: "mdc-dialog__title",
  tag: "h2"
});
Te({
  class: "mdc-dialog__content",
  tag: "div"
});
Te({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
Te({
  class: "smui-paper__content",
  tag: "div"
});
Te({
  class: "smui-paper__title",
  tag: "h5"
});
Te({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Bs(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = ae(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = G("span"), i && i.c(), v(e, "class", "oscd-icon");
    },
    m(r, s) {
      M(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && ue(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? oe(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : ce(
          /*$$scope*/
          r[0]
        ),
        null
      );
    },
    i(r) {
      t || (C(i, r), t = !0);
    },
    o(r) {
      k(i, r), t = !1;
    },
    d(r) {
      r && H(e), i && i.d(r);
    }
  };
}
function Zs(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class tt extends x {
  constructor(e) {
    super(), $(this, e, Zs, Bs, Q, {});
  }
}
function Ns(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M200-440v-80h560v80H200Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && H(e);
    }
  };
}
function qs(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [Ns] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Vs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class js extends x {
  constructor(e) {
    super(), $(this, e, Vs, qs, Q, { svgStyles: 0 });
  }
}
function zs(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && H(e);
    }
  };
}
function Xs(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [zs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ys(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ks extends x {
  constructor(e) {
    super(), $(this, e, Ys, Xs, Q, { svgStyles: 0 });
  }
}
function Qs(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && H(e);
    }
  };
}
function Js(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [Qs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function $s(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class xs extends x {
  constructor(e) {
    super(), $(this, e, $s, Js, Q, { svgStyles: 0 });
  }
}
function ea(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24"), v(e, "height", "24"), v(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: J,
    i: J,
    o: J,
    d(l) {
      l && H(e);
    }
  };
}
class ta extends x {
  constructor(e) {
    super(), $(this, e, null, ea, Q, {});
  }
}
function na(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: J,
    i: J,
    o: J,
    d(l) {
      l && H(e);
    }
  };
}
class la extends x {
  constructor(e) {
    super(), $(this, e, null, na, Q, {});
  }
}
function ia(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: J,
    i: J,
    o: J,
    d(l) {
      l && H(e);
    }
  };
}
class ra extends x {
  constructor(e) {
    super(), $(this, e, null, ia, Q, {});
  }
}
function sa(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && H(e);
    }
  };
}
function aa(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [sa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function oa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ua extends x {
  constructor(e) {
    super(), $(this, e, oa, aa, Q, { svgStyles: 0 });
  }
}
function ca(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && H(e);
    }
  };
}
function fa(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [ca] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function da(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ga extends x {
  constructor(e) {
    super(), $(this, e, da, fa, Q, { svgStyles: 0 });
  }
}
function ma(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: J,
    d(l) {
      l && H(e);
    }
  };
}
function ha(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [ma] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope*/
      2 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function pa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class _a extends x {
  constructor(e) {
    super(), $(this, e, pa, ha, Q, { svgStyles: 0 });
  }
}
function ba(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && H(e);
    }
  };
}
function va(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [ba] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ca(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ia extends x {
  constructor(e) {
    super(), $(this, e, Ca, va, Q, { svgStyles: 0 });
  }
}
function ya(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && H(e);
    }
  };
}
function Aa(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [ya] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ka(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class wa extends x {
  constructor(e) {
    super(), $(this, e, ka, Aa, Q, { svgStyles: 0 });
  }
}
function xn(n) {
  let e, t, l;
  return {
    c() {
      e = G("span"), t = ne(
        /*content*/
        n[0]
      ), v(
        e,
        "id",
        /*id*/
        n[2]
      ), v(e, "role", "tooltip"), v(e, "class", l = "bubble " + /*side*/
      n[1] + " svelte-h101gz");
    },
    m(i, r) {
      M(i, e, r), P(e, t);
    },
    p(i, r) {
      r & /*content*/
      1 && _e(
        t,
        /*content*/
        i[0]
      ), r & /*side*/
      2 && l !== (l = "bubble " + /*side*/
      i[1] + " svelte-h101gz") && v(e, "class", l);
    },
    d(i) {
      i && H(e);
    }
  };
}
function Sa(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[4].default
  ), s = ae(
    r,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let o = (
    /*content*/
    n[0] && xn(n)
  );
  return {
    c() {
      e = G("span"), s && s.c(), t = B(), o && o.c(), v(e, "class", "tt svelte-h101gz"), v(e, "tabindex", "0"), v(e, "aria-describedby", l = /*content*/
      n[0] ? (
        /*id*/
        n[2]
      ) : void 0);
    },
    m(a, u) {
      M(a, e, u), s && s.m(e, null), P(e, t), o && o.m(e, null), i = !0;
    },
    p(a, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      8) && ue(
        s,
        r,
        a,
        /*$$scope*/
        a[3],
        i ? oe(
          r,
          /*$$scope*/
          a[3],
          u,
          null
        ) : ce(
          /*$$scope*/
          a[3]
        ),
        null
      ), /*content*/
      a[0] ? o ? o.p(a, u) : (o = xn(a), o.c(), o.m(e, null)) : o && (o.d(1), o = null), (!i || u & /*content*/
      1 && l !== (l = /*content*/
      a[0] ? (
        /*id*/
        a[2]
      ) : void 0)) && v(e, "aria-describedby", l);
    },
    i(a) {
      i || (C(s, a), i = !0);
    },
    o(a) {
      k(s, a), i = !1;
    },
    d(a) {
      a && H(e), s && s.d(a), o && o.d();
    }
  };
}
function La(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { side: s = "top" } = e;
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  return n.$$set = (a) => {
    "content" in a && t(0, r = a.content), "side" in a && t(1, s = a.side), "$$scope" in a && t(3, i = a.$$scope);
  }, [r, s, o, i, l];
}
class Ra extends x {
  constructor(e) {
    super(), $(this, e, La, Sa, Q, { content: 0, side: 1 });
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
var Qe = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, el = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, st = {
  ARIA_SELECTED: el.ARIA_SELECTED,
  ARIA_SORT: el.ARIA_SORT
}, Ze;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Ze || (Ze = {}));
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
var Ea = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      return n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
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
      return Nt(this, void 0, void 0, function() {
        return tr(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, Qe.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, Qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, st.ARIA_SORT, Ze.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, Ze.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Qe.HEADER_CELL_SORTED);
      var o = this.adapter.getAttributeByHeaderCellIndex(i, st.ARIA_SORT), a = Ze.NONE;
      o === Ze.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, st.ARIA_SORT, Ze.DESCENDING), a = Ze.DESCENDING) : o === Ze.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, st.ARIA_SORT, Ze.ASCENDING), a = Ze.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, st.ARIA_SORT, Ze.ASCENDING), a = Ze.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, a), this.adapter.notifySortAction({
        columnId: l,
        columnIndex: i,
        headerCell: r,
        sortValue: a
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
      }), this.adapter.addClass(Qe.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Qe.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, Qe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, st.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Qe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, st.ARIA_SELECTED, "false"));
    }, e;
  }(bt)
);
const Da = (n) => ({}), tl = (n) => ({}), Pa = (n) => ({}), nl = (n) => ({});
function ll(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), o = ae(
    s,
    n,
    /*$$scope*/
    n[35],
    nl
  );
  return {
    c() {
      e = G("div"), t = G("div"), l = B(), o && o.c(), v(t, "class", "mdc-data-table__scrim"), v(e, "class", "mdc-data-table__progress-indicator"), v(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(il).join(" "));
    },
    m(a, u) {
      M(a, e, u), P(e, t), P(e, l), o && o.m(e, null), r = !0;
    },
    p(a, u) {
      o && o.p && (!r || u[1] & /*$$scope*/
      16) && ue(
        o,
        s,
        a,
        /*$$scope*/
        a[35],
        r ? oe(
          s,
          /*$$scope*/
          a[35],
          u,
          Pa
        ) : ce(
          /*$$scope*/
          a[35]
        ),
        nl
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        a[13]
      ).map(il).join(" "))) && v(e, "style", i);
    },
    i(a) {
      r || (C(o, a), r = !0);
    },
    o(a) {
      k(o, a), r = !1;
    },
    d(a) {
      a && H(e), o && o.d(a);
    }
  };
}
function Ha(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, h;
  const p = (
    /*#slots*/
    n[36].default
  ), _ = ae(
    p,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let y = [
    {
      class: i = te({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], A = {};
  for (let D = 0; D < y.length; D += 1)
    A = z(A, y[D]);
  let E = [
    {
      class: s = te({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], b = {};
  for (let D = 0; D < E.length; D += 1)
    b = z(b, E[D]);
  let O = (
    /*$$slots*/
    n[24].progress && ll(n)
  );
  const S = (
    /*#slots*/
    n[36].paginate
  ), m = ae(
    S,
    n,
    /*$$scope*/
    n[35],
    tl
  );
  let L = [
    {
      class: c = te({
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
  ], W = {};
  for (let D = 0; D < L.length; D += 1)
    W = z(W, L[D]);
  return {
    c() {
      e = G("div"), t = G("div"), l = G("table"), _ && _.c(), a = B(), O && O.c(), u = B(), m && m.c(), ie(l, A), ie(t, b), ie(e, W);
    },
    m(D, I) {
      M(D, e, I), P(e, t), P(t, l), _ && _.m(l, null), n[37](t), P(e, a), O && O.m(e, null), P(e, u), m && m.m(e, null), n[38](e), d = !0, g || (h = [
        ee(r = Re.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        ee(o = Re.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        ee(f = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        K(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        K(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        K(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        K(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        K(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        K(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        K(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        K(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        K(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], g = !0);
    },
    p(D, I) {
      _ && _.p && (!d || I[1] & /*$$scope*/
      16) && ue(
        _,
        p,
        D,
        /*$$scope*/
        D[35],
        d ? oe(
          p,
          /*$$scope*/
          D[35],
          I,
          null
        ) : ce(
          /*$$scope*/
          D[35]
        ),
        null
      ), ie(l, A = fe(y, [
        (!d || I[0] & /*table$class*/
        64 && i !== (i = te({
          [
            /*table$class*/
            D[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        I[0] & /*$$restProps*/
        33554432 && Pe(
          /*$$restProps*/
          D[25],
          "table$"
        )
      ])), r && pe(r.update) && I[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        D[5]
      ), ie(t, b = fe(E, [
        (!d || I[0] & /*container$class*/
        16 && s !== (s = te({
          [
            /*container$class*/
            D[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        I[0] & /*$$restProps*/
        33554432 && Pe(
          /*$$restProps*/
          D[25],
          "container$"
        )
      ])), o && pe(o.update) && I[0] & /*container$use*/
      8 && o.update.call(
        null,
        /*container$use*/
        D[3]
      ), /*$$slots*/
      D[24].progress ? O ? (O.p(D, I), I[0] & /*$$slots*/
      16777216 && C(O, 1)) : (O = ll(D), O.c(), C(O, 1), O.m(e, u)) : O && (re(), k(O, 1, 1, () => {
        O = null;
      }), se()), m && m.p && (!d || I[1] & /*$$scope*/
      16) && ue(
        m,
        S,
        D,
        /*$$scope*/
        D[35],
        d ? oe(
          S,
          /*$$scope*/
          D[35],
          I,
          Da
        ) : ce(
          /*$$scope*/
          D[35]
        ),
        tl
      ), ie(e, W = fe(L, [
        (!d || I[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = te({
          [
            /*className*/
            D[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            D[2]
          ),
          .../*internalClasses*/
          D[12]
        }))) && { class: c },
        I[0] & /*$$restProps*/
        33554432 && ht(
          /*$$restProps*/
          D[25],
          ["container$", "table$"]
        )
      ])), f && pe(f.update) && I[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        D[0]
      );
    },
    i(D) {
      d || (C(_, D), C(O), C(m, D), d = !0);
    },
    o(D) {
      k(_, D), k(O), k(m, D), d = !1;
    },
    d(D) {
      D && H(e), _ && _.d(D), n[37](null), O && O.d(), m && m.d(D), n[38](null), g = !1, he(h);
    }
  };
}
const il = ([n, e]) => `${n}: ${e};`;
function Ma(n, e, t) {
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
  let i = ge(e, l), r, s, o, { $$slots: a = {}, $$scope: u } = e;
  const c = an(a), { closest: f } = $l, d = We(Ee());
  let { use: g = [] } = e, { class: h = "" } = e, { stickyHeader: p = !1 } = e, { sortable: _ = !1 } = e, { sort: y = null } = e, { sortDirection: A = "ascending" } = e, { sortAscendingAriaLabel: E = "sorted, ascending" } = e, { sortDescendingAriaLabel: b = "sorted, descending" } = e, { container$use: O = [] } = e, { container$class: S = "" } = e, { table$use: m = [] } = e, { table$class: L = "" } = e, W, D, I, U, T, X = {}, we = { height: "auto", top: "initial" }, ke = Be("SMUI:addLayoutListener"), ve, j = !1, w = wt(!1);
  dt(n, w, (F) => t(34, r = F));
  let Z = wt(y);
  dt(n, Z, (F) => t(45, o = F));
  let me = wt(A);
  dt(n, me, (F) => t(44, s = F)), Me("SMUI:checkbox:context", "data-table"), Me("SMUI:linear-progress:context", "data-table"), Me("SMUI:linear-progress:closed", w), Me("SMUI:data-table:sortable", _), Me("SMUI:data-table:sort", Z), Me("SMUI:data-table:sortDirection", me), Me("SMUI:data-table:sortAscendingAriaLabel", E), Me("SMUI:data-table:sortDescendingAriaLabel", b), ke && (ve = ke(Ct));
  let be;
  Ne(() => (t(7, D = new Ea({
    addClass: Ge,
    removeClass: je,
    getHeaderCellElements: () => {
      var F;
      return (F = U == null ? void 0 : U.cells.map((Y) => Y.element)) !== null && F !== void 0 ? F : [];
    },
    getHeaderCellCount: () => {
      var F;
      return (F = U == null ? void 0 : U.cells.length) !== null && F !== void 0 ? F : 0;
    },
    getAttributeByHeaderCellIndex: (F, Y) => {
      var De;
      return (De = U == null ? void 0 : U.orderedCells[F].getAttr(Y)) !== null && De !== void 0 ? De : null;
    },
    setAttributeByHeaderCellIndex: (F, Y, De) => {
      U == null || U.orderedCells[F].addAttr(Y, De);
    },
    setClassNameByHeaderCellIndex: (F, Y) => {
      U == null || U.orderedCells[F].addClass(Y);
    },
    removeClassNameByHeaderCellIndex: (F, Y) => {
      U == null || U.orderedCells[F].removeClass(Y);
    },
    notifySortAction: (F) => {
      t(26, y = F.columnId), t(27, A = F.sortValue), Ce(qe(), "SMUIDataTable:sorted", F, void 0, !0);
    },
    getTableContainerHeight: () => I.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const F = qe().querySelector(".mdc-data-table__header-row");
      if (!F)
        throw new Error("MDCDataTable: Table header element not found.");
      return F.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (F) => {
      t(13, we = F);
    },
    addClassAtRowIndex: (F, Y) => {
      T == null || T.orderedRows[F].addClass(Y);
    },
    getRowCount: () => {
      var F;
      return (F = T == null ? void 0 : T.rows.length) !== null && F !== void 0 ? F : 0;
    },
    getRowElements: () => {
      var F;
      return (F = T == null ? void 0 : T.rows.map((Y) => Y.element)) !== null && F !== void 0 ? F : [];
    },
    getRowIdAtIndex: (F) => {
      var Y;
      return (Y = T == null ? void 0 : T.orderedRows[F].rowId) !== null && Y !== void 0 ? Y : null;
    },
    getRowIndexByChildElement: (F) => {
      var Y;
      return (Y = T == null ? void 0 : T.orderedRows.map((De) => De.element).indexOf(f(F, ".mdc-data-table__row"))) !== null && Y !== void 0 ? Y : -1;
    },
    getSelectedRowCount: () => {
      var F;
      return (F = T == null ? void 0 : T.rows.filter((Y) => Y.selected).length) !== null && F !== void 0 ? F : 0;
    },
    isCheckboxAtRowIndexChecked: (F) => {
      const Y = T == null ? void 0 : T.orderedRows[F].checkbox;
      return Y ? Y.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const F = U == null ? void 0 : U.checkbox;
      return F ? F.checked : !1;
    },
    isRowsSelectable: () => !!qe().querySelector(".mdc-data-table__row-checkbox") || !!qe().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (F) => {
      const Y = T == null ? void 0 : T.orderedRows[F.rowIndex];
      Y && Ce(
        qe(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: Y.element,
          rowId: Y.rowId,
          rowIndex: F.rowIndex,
          selected: F.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Ye(!1), Ce(qe(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Ye(!1), Ce(qe(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (F) => {
      Ce(qe(), "SMUIDataTable:rowClick", F, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (F, Y) => {
      T == null || T.orderedRows[F].removeClass(Y);
    },
    setAttributeAtRowIndex: (F, Y, De) => {
      T == null || T.orderedRows[F].addAttr(Y, De);
    },
    setHeaderRowCheckboxChecked: (F) => {
      const Y = U == null ? void 0 : U.checkbox;
      Y && (Y.checked = F);
    },
    setHeaderRowCheckboxIndeterminate: Ye,
    setRowCheckboxCheckedAtIndex: (F, Y) => {
      const De = T == null ? void 0 : T.orderedRows[F].checkbox;
      De && (De.checked = Y);
    },
    setSortStatusLabelByHeaderCellIndex: (F, Y) => {
    }
    // Handled automatically.
  })), D.init(), D.layout(), t(14, j = !0), () => {
    D.destroy();
  })), Zt(() => {
    ve && ve();
  });
  function He(F) {
    t(10, U = F.detail);
  }
  function Fe(F) {
    t(11, T = F.detail);
  }
  function de(F) {
    D && D.handleRowCheckboxChange(F);
  }
  function Ge(F) {
    X[F] || t(12, X[F] = !0, X);
  }
  function je(F) {
    (!(F in X) || X[F]) && t(12, X[F] = !1, X);
  }
  function Ye(F) {
    const Y = U == null ? void 0 : U.checkbox;
    Y && (Y.indeterminate = F);
  }
  function Ke(F) {
    if (!D || !F.detail.target)
      return;
    const Y = f(F.detail.target, ".mdc-data-table__header-cell--with-sort");
    Y && vt(Y);
  }
  function Rt(F) {
    if (!D || !F.detail.target)
      return;
    const Y = f(F.detail.target, ".mdc-data-table__row");
    Y && D && D.handleRowClick({ rowId: F.detail.rowId, row: Y });
  }
  function vt(F) {
    var Y, De;
    const Et = (Y = U == null ? void 0 : U.orderedCells) !== null && Y !== void 0 ? Y : [], yt = Et.map((Pt) => Pt.element).indexOf(F);
    if (yt === -1)
      return;
    const Dt = (De = Et[yt].columnId) !== null && De !== void 0 ? De : null;
    D.handleSortAction({ columnId: Dt, columnIndex: yt, headerCell: F });
  }
  function Ct() {
    return D.layout();
  }
  function qe() {
    return W;
  }
  function nt(F) {
    le[F ? "unshift" : "push"](() => {
      I = F, t(9, I);
    });
  }
  function lt(F) {
    le[F ? "unshift" : "push"](() => {
      W = F, t(8, W);
    });
  }
  const ot = () => D && j && D.layout(), it = () => t(10, U = void 0), It = () => t(11, T = void 0), Vt = () => D && D.handleHeaderRowCheckboxChange();
  return n.$$set = (F) => {
    e = z(z({}, e), Oe(F)), t(25, i = ge(e, l)), "use" in F && t(0, g = F.use), "class" in F && t(1, h = F.class), "stickyHeader" in F && t(2, p = F.stickyHeader), "sortable" in F && t(28, _ = F.sortable), "sort" in F && t(26, y = F.sort), "sortDirection" in F && t(27, A = F.sortDirection), "sortAscendingAriaLabel" in F && t(29, E = F.sortAscendingAriaLabel), "sortDescendingAriaLabel" in F && t(30, b = F.sortDescendingAriaLabel), "container$use" in F && t(3, O = F.container$use), "container$class" in F && t(4, S = F.container$class), "table$use" in F && t(5, m = F.table$use), "table$class" in F && t(6, L = F.table$class), "$$scope" in F && t(35, u = F.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && tn(Z, o = y, o), n.$$.dirty[0] & /*sortDirection*/
    134217728 && tn(me, s = A, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && D && be !== r && (t(33, be = r), r ? D.hideProgress() : D.showProgress());
  }, [
    g,
    h,
    p,
    O,
    S,
    m,
    L,
    D,
    W,
    I,
    U,
    T,
    X,
    we,
    j,
    d,
    w,
    Z,
    me,
    He,
    Fe,
    de,
    Ke,
    Rt,
    c,
    i,
    y,
    A,
    _,
    E,
    b,
    Ct,
    qe,
    be,
    r,
    u,
    a,
    nt,
    lt,
    ot,
    it,
    It,
    Vt
  ];
}
class Ta extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Ma,
      Ha,
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
function Fa(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), o = ae(
    s,
    n,
    /*$$scope*/
    n[9],
    null
  );
  let a = [
    /*$$restProps*/
    n[7]
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = z(u, a[c]);
  return {
    c() {
      e = G("thead"), o && o.c(), ie(e, u);
    },
    m(c, f) {
      M(c, e, f), o && o.m(e, null), n[11](e), l = !0, i || (r = [
        ee(t = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        K(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        K(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        K(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        K(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(c, [f]) {
      o && o.p && (!l || f & /*$$scope*/
      512) && ue(
        o,
        s,
        c,
        /*$$scope*/
        c[9],
        l ? oe(
          s,
          /*$$scope*/
          c[9],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[9]
        ),
        null
      ), ie(e, u = fe(a, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(o, c), l = !0);
    },
    o(c) {
      k(o, c), l = !1;
    },
    d(c) {
      c && H(e), o && o.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function Ga(n, e, t) {
  const l = ["use", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = We(Ee());
  let { use: a = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Me("SMUI:data-table:row:header", !0), Ne(() => {
    const b = {
      get cells() {
        return f;
      },
      get orderedCells() {
        return _();
      },
      get checkbox() {
        return c;
      }
    };
    return Ce(y(), "SMUIDataTableHeader:mount", b), () => {
      Ce(y(), "SMUIDataTableHeader:unmount", b);
    };
  });
  function g(b) {
    t(2, c = b.detail);
  }
  function h(b) {
    f.push(b.detail), d.set(b.detail.element, b.detail), b.stopPropagation();
  }
  function p(b) {
    const O = f.indexOf(b.detail);
    O !== -1 && (f.splice(O, 1), f = f), d.delete(b.detail.element), b.stopPropagation();
  }
  function _() {
    return [...y().querySelectorAll(".mdc-data-table__header-cell")].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_header_cell_accessor);
  }
  function y() {
    return u;
  }
  function A(b) {
    le[b ? "unshift" : "push"](() => {
      u = b, t(1, u);
    });
  }
  const E = () => t(2, c = void 0);
  return n.$$set = (b) => {
    e = z(z({}, e), Oe(b)), t(7, i = ge(e, l)), "use" in b && t(0, a = b.use), "$$scope" in b && t(9, s = b.$$scope);
  }, [
    a,
    u,
    c,
    o,
    g,
    h,
    p,
    i,
    y,
    s,
    r,
    A,
    E
  ];
}
class Oa extends x {
  constructor(e) {
    super(), $(this, e, Ga, Fa, Q, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Ua(n) {
  let e, t, l, i, r, s;
  const o = (
    /*#slots*/
    n[9].default
  ), a = ae(
    o,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = te({
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
    c = z(c, u[f]);
  return {
    c() {
      e = G("tbody"), a && a.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), a && a.m(e, null), n[10](e), i = !0, r || (s = [
        ee(l = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        K(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        K(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], r = !0);
    },
    p(f, [d]) {
      a && a.p && (!i || d & /*$$scope*/
      256) && ue(
        a,
        o,
        f,
        /*$$scope*/
        f[8],
        i ? oe(
          o,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[8]
        ),
        null
      ), ie(e, c = fe(u, [
        (!i || d & /*className*/
        2 && t !== (t = te({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), l && pe(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(a, f), i = !0);
    },
    o(f) {
      k(a, f), i = !1;
    },
    d(f) {
      f && H(e), a && a.d(f), n[10](null), r = !1, he(s);
    }
  };
}
function Wa(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = We(Ee());
  let { use: a = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Me("SMUI:data-table:row:header", !1), Ne(() => {
    const A = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return p();
      }
    };
    return Ce(_(), "SMUIDataTableBody:mount", A), () => {
      Ce(_(), "SMUIDataTableBody:unmount", A);
    };
  });
  function g(A) {
    f.push(A.detail), d.set(A.detail.element, A.detail), A.stopPropagation();
  }
  function h(A) {
    const E = f.indexOf(A.detail);
    E !== -1 && (f.splice(E, 1), f = f), d.delete(A.detail.element), A.stopPropagation();
  }
  function p() {
    return [..._().querySelectorAll(".mdc-data-table__row")].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_row_accessor);
  }
  function _() {
    return c;
  }
  function y(A) {
    le[A ? "unshift" : "push"](() => {
      c = A, t(2, c);
    });
  }
  return n.$$set = (A) => {
    e = z(z({}, e), Oe(A)), t(6, i = ge(e, l)), "use" in A && t(0, a = A.use), "class" in A && t(1, u = A.class), "$$scope" in A && t(8, s = A.$$scope);
  }, [
    a,
    u,
    c,
    o,
    g,
    h,
    i,
    _,
    s,
    r,
    y
  ];
}
class Ba extends x {
  constructor(e) {
    super(), $(this, e, Wa, Ua, Q, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Za(n) {
  let e, t, l, i, r, s, o;
  const a = (
    /*#slots*/
    n[15].default
  ), u = ae(
    a,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = te({
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
    f = z(f, c[d]);
  return {
    c() {
      e = G("tr"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[16](e), r = !0, s || (o = [
        ee(i = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        K(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        K(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        K(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], s = !0);
    },
    p(d, [g]) {
      u && u.p && (!r || g & /*$$scope*/
      16384) && ue(
        u,
        a,
        d,
        /*$$scope*/
        d[14],
        r ? oe(
          a,
          /*$$scope*/
          d[14],
          g,
          null
        ) : ce(
          /*$$scope*/
          d[14]
        ),
        null
      ), ie(e, f = fe(c, [
        (!r || g & /*className, checkbox, internalClasses*/
        26 && t !== (t = te({
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
        (!r || g & /*checkbox*/
        8 && l !== (l = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": l },
        g & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        g & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), i && pe(i.update) && g & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (C(u, d), r = !0);
    },
    o(d) {
      k(u, d), r = !1;
    },
    d(d) {
      d && H(e), u && u.d(d), n[16](null), s = !1, he(o);
    }
  };
}
let Na = 0;
function qa(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = We(Ee());
  let { use: a = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Na++ } = e, f, d, g = {}, h = {}, p = Be("SMUI:data-table:row:header");
  Ne(() => {
    const I = p ? {
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
        var U;
        return (U = d && d.checked) !== null && U !== void 0 ? U : !1;
      },
      addClass: y,
      removeClass: A,
      getAttr: E,
      addAttr: b
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return m();
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
      addClass: y,
      removeClass: A,
      getAttr: E,
      addAttr: b
    };
    return Ce(m(), "SMUIDataTableRow:mount", I), () => {
      Ce(m(), "SMUIDataTableRow:unmount", I);
    };
  });
  function _(I) {
    t(3, d = I.detail);
  }
  function y(I) {
    g[I] || t(4, g[I] = !0, g);
  }
  function A(I) {
    (!(I in g) || g[I]) && t(4, g[I] = !1, g);
  }
  function E(I) {
    var U;
    return I in h ? (U = h[I]) !== null && U !== void 0 ? U : null : m().getAttribute(I);
  }
  function b(I, U) {
    h[I] !== U && t(5, h[I] = U, h);
  }
  function O(I) {
    Ce(m(), "SMUIDataTableHeader:click", I);
  }
  function S(I) {
    Ce(m(), "SMUIDataTableRow:click", { rowId: c, target: I.target });
  }
  function m() {
    return f;
  }
  function L(I) {
    le[I ? "unshift" : "push"](() => {
      f = I, t(2, f);
    });
  }
  const W = (I) => p ? O(I) : S(I), D = () => t(3, d = void 0);
  return n.$$set = (I) => {
    e = z(z({}, e), Oe(I)), t(11, i = ge(e, l)), "use" in I && t(0, a = I.use), "class" in I && t(1, u = I.class), "rowId" in I && t(12, c = I.rowId), "$$scope" in I && t(14, s = I.$$scope);
  }, [
    a,
    u,
    f,
    d,
    g,
    h,
    o,
    p,
    _,
    O,
    S,
    i,
    c,
    m,
    s,
    r,
    L,
    W,
    D
  ];
}
class ei extends x {
  constructor(e) {
    super(), $(this, e, qa, Za, Q, {
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
function Va(n) {
  let e, t, l, i, r, s;
  const o = (
    /*#slots*/
    n[22].default
  ), a = ae(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = te({
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
    c = z(c, u[f]);
  return {
    c() {
      e = G("td"), a && a.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), a && a.m(e, null), n[25](e), i = !0, r || (s = [
        ee(l = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        K(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], r = !0);
    },
    p(f, d) {
      a && a.p && (!i || d & /*$$scope*/
      2097152) && ue(
        a,
        o,
        f,
        /*$$scope*/
        f[21],
        i ? oe(
          o,
          /*$$scope*/
          f[21],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[21]
        ),
        null
      ), ie(e, c = fe(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = te({
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
      ])), l && pe(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(a, f), i = !0);
    },
    o(f) {
      k(a, f), i = !1;
    },
    d(f) {
      f && H(e), a && a.d(f), n[25](null), r = !1, he(s);
    }
  };
}
function ja(n) {
  let e, t, l, i, r, s, o, a, u;
  const c = [Xa, za], f = [];
  function d(p, _) {
    return (
      /*sortable*/
      p[5] ? 0 : 1
    );
  }
  t = d(n), l = f[t] = c[t](n);
  let g = [
    {
      class: i = te({
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
  ], h = {};
  for (let p = 0; p < g.length; p += 1)
    h = z(h, g[p]);
  return {
    c() {
      e = G("th"), l.c(), ie(e, h);
    },
    m(p, _) {
      M(p, e, _), f[t].m(e, null), n[23](e), o = !0, a || (u = [
        ee(s = Re.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        K(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], a = !0);
    },
    p(p, _) {
      let y = t;
      t = d(p), t === y ? f[t].p(p, _) : (re(), k(f[y], 1, 1, () => {
        f[y] = null;
      }), se(), l = f[t], l ? l.p(p, _) : (l = f[t] = c[t](p), l.c()), C(l, 1), l.m(e, null)), ie(e, h = fe(g, [
        (!o || _ & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = te({
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
        (!o || _ & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          p[4]
        ) },
        (!o || _ & /*sortable, $sort, columnId, $sortDirection*/
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
      ])), s && pe(s.update) && _ & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (C(l), o = !0);
    },
    o(p) {
      k(l), o = !1;
    },
    d(p) {
      p && H(e), f[t].d(), n[23](null), a = !1, he(u);
    }
  };
}
function za(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = ae(
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
      2097152) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? oe(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : ce(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Xa(n) {
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
  ), r, s, o;
  const a = (
    /*#slots*/
    n[22].default
  ), u = ae(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = G("div"), u && u.c(), t = B(), l = G("div"), r = ne(i), v(l, "class", "mdc-data-table__sort-status-label"), v(l, "aria-hidden", "true"), v(l, "id", s = /*columnId*/
      n[4] + "-status-label"), v(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      M(c, e, f), u && u.m(e, null), P(e, t), P(e, l), P(l, r), o = !0;
    },
    p(c, f) {
      u && u.p && (!o || f & /*$$scope*/
      2097152) && ue(
        u,
        a,
        c,
        /*$$scope*/
        c[21],
        o ? oe(
          a,
          /*$$scope*/
          c[21],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!o || f & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && _e(r, i), (!o || f & /*columnId*/
      16 && s !== (s = /*columnId*/
      c[4] + "-status-label")) && v(l, "id", s);
    },
    i(c) {
      o || (C(u, c), o = !0);
    },
    o(c) {
      k(u, c), o = !1;
    },
    d(c) {
      c && H(e), u && u.d(c);
    }
  };
}
function Ya(n) {
  let e, t, l, i;
  const r = [ja, Va], s = [];
  function o(a, u) {
    return (
      /*header*/
      a[12] ? 0 : 1
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      t.p(a, u);
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      k(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
let Ka = 0;
function Qa(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ge(e, l), r, s, { $$slots: o = {}, $$scope: a } = e;
  const u = We(Ee());
  let c = Be("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: h = !1 } = e, { columnId: p = c ? "SMUI-data-table-column-" + Ka++ : "SMUI-data-table-unused" } = e, { sortable: _ = Be("SMUI:data-table:sortable") } = e, y, A = {}, E = {}, b = Be("SMUI:data-table:sort");
  dt(n, b, (w) => t(9, r = w));
  let O = Be("SMUI:data-table:sortDirection");
  dt(n, O, (w) => t(10, s = w));
  let S = Be("SMUI:data-table:sortAscendingAriaLabel"), m = Be("SMUI:data-table:sortDescendingAriaLabel");
  _ && (Me("SMUI:label:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:aria-describedby", p + "-status-label")), Ne(() => {
    const w = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return p;
      },
      addClass: L,
      removeClass: W,
      getAttr: D,
      addAttr: I
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: W,
      getAttr: D,
      addAttr: I
    };
    return Ce(X(), "SMUIDataTableCell:mount", w), () => {
      Ce(X(), "SMUIDataTableCell:unmount", w);
    };
  });
  function L(w) {
    A[w] || t(7, A[w] = !0, A);
  }
  function W(w) {
    (!(w in A) || A[w]) && t(7, A[w] = !1, A);
  }
  function D(w) {
    var Z;
    return w in E ? (Z = E[w]) !== null && Z !== void 0 ? Z : null : X().getAttribute(w);
  }
  function I(w, Z) {
    E[w] !== Z && t(8, E[w] = Z, E);
  }
  function U(w) {
    Ce(X(), "SMUIDataTableHeaderCheckbox:change", w);
  }
  function T(w) {
    Ce(X(), "SMUIDataTableBodyCheckbox:change", w);
  }
  function X() {
    return y;
  }
  function we(w) {
    le[w ? "unshift" : "push"](() => {
      y = w, t(6, y);
    });
  }
  const ke = (w) => h && U(w);
  function ve(w) {
    le[w ? "unshift" : "push"](() => {
      y = w, t(6, y);
    });
  }
  const j = (w) => h && T(w);
  return n.$$set = (w) => {
    e = z(z({}, e), Oe(w)), t(19, i = ge(e, l)), "use" in w && t(0, f = w.use), "class" in w && t(1, d = w.class), "numeric" in w && t(2, g = w.numeric), "checkbox" in w && t(3, h = w.checkbox), "columnId" in w && t(4, p = w.columnId), "sortable" in w && t(5, _ = w.sortable), "$$scope" in w && t(21, a = w.$$scope);
  }, [
    f,
    d,
    g,
    h,
    p,
    _,
    y,
    A,
    E,
    r,
    s,
    u,
    c,
    b,
    O,
    S,
    m,
    U,
    T,
    i,
    X,
    a,
    o,
    we,
    ke,
    ve,
    j
  ];
}
class qt extends x {
  constructor(e) {
    super(), $(this, e, Qa, Ya, Q, {
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
const { Boolean: ti } = Ni;
function rl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const Ja = (n) => ({ item: n & /*items*/
1 }), sl = (n) => ({ item: (
  /*item*/
  n[17]
) });
function al(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function ol(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function $a(n) {
  let e, t;
  return e = new Ta({
    props: {
      style: "width: 100%;",
      $$slots: { default: [uo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns, headerBg*/
      17379 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function xa(n) {
  let e, t;
  return {
    c() {
      e = G("p"), t = ne(
        /*emptyText*/
        n[4]
      ), v(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && _e(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: J,
    o: J,
    d(l) {
      l && H(e);
    }
  };
}
function eo(n) {
  let e, t;
  return {
    c() {
      e = G("p"), t = ne(
        /*errorMsg*/
        n[3]
      ), v(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && _e(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: J,
    o: J,
    d(l) {
      l && H(e);
    }
  };
}
function to(n) {
  let e;
  return {
    c() {
      e = G("p"), e.textContent = "Loading…", v(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      M(t, e, l);
    },
    p: J,
    i: J,
    o: J,
    d(t) {
      t && H(e);
    }
  };
}
function no(n) {
  let e = (
    /*col*/
    n[20].header + ""
  ), t;
  return {
    c() {
      t = ne(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[20].header + "") && _e(t, e);
    },
    d(l) {
      l && H(t);
    }
  };
}
function ul(n) {
  let e, t;
  return e = new qt({
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
      $$slots: { default: [no] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function cl(n) {
  let e, t;
  return e = new qt({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*headerBg*/
      64 && (r.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function lo(n) {
  let e, t, l, i = Ie(
    /*columns*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = ul(ol(n, i, a));
  const s = (a) => k(r[a], 1, 1, () => {
    r[a] = null;
  });
  let o = (
    /*slotHasActions*/
    n[9] && cl(n)
  );
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = B(), o && o.c(), t = Ae();
    },
    m(a, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(a, u);
      M(a, e, u), o && o.m(a, u), M(a, t, u), l = !0;
    },
    p(a, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = Ie(
          /*columns*/
          a[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = ol(a, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = ul(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (re(), c = i.length; c < r.length; c += 1)
          s(c);
        se();
      }
      /*slotHasActions*/
      a[9] ? o ? (o.p(a, u), u & /*slotHasActions*/
      512 && C(o, 1)) : (o = cl(a), o.c(), C(o, 1), o.m(t.parentNode, t)) : o && (re(), k(o, 1, 1, () => {
        o = null;
      }), se());
    },
    i(a) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(o), l = !0;
      }
    },
    o(a) {
      r = r.filter(ti);
      for (let u = 0; u < r.length; u += 1)
        k(r[u]);
      k(o), l = !1;
    },
    d(a) {
      a && (H(e), H(t)), Ve(r, a), o && o.d(a);
    }
  };
}
function io(n) {
  let e, t;
  return e = new ei({
    props: {
      $$slots: { default: [lo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ro(n) {
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
      t = ne(e);
    },
    m(i, r) {
      M(i, t, r);
    },
    p(i, r) {
      var s;
      r & /*items, columns*/
      3 && e !== (e = /*item*/
      (((s = i[17]) == null ? void 0 : s[
        /*col*/
        i[20].key
      ]) ?? "") + "") && _e(t, e);
    },
    d(i) {
      i && H(t);
    }
  };
}
function fl(n) {
  let e, t;
  return e = new qt({
    props: {
      $$slots: { default: [ro] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, columns*/
      16387 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function dl(n) {
  let e, t;
  return e = new qt({
    props: {
      numeric: !0,
      $$slots: { default: [so] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items*/
      16385 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function so(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[14],
    sl
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
      16385) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? oe(
          t,
          /*$$scope*/
          i[14],
          r,
          Ja
        ) : ce(
          /*$$scope*/
          i[14]
        ),
        sl
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      k(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ao(n) {
  let e, t, l, i = Ie(
    /*columns*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = fl(al(n, i, a));
  const s = (a) => k(r[a], 1, 1, () => {
    r[a] = null;
  });
  let o = (
    /*slotHasActions*/
    n[9] && dl(n)
  );
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = B(), o && o.c(), t = B();
    },
    m(a, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(a, u);
      M(a, e, u), o && o.m(a, u), M(a, t, u), l = !0;
    },
    p(a, u) {
      if (u & /*items, columns*/
      3) {
        i = Ie(
          /*columns*/
          a[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = al(a, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = fl(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (re(), c = i.length; c < r.length; c += 1)
          s(c);
        se();
      }
      /*slotHasActions*/
      a[9] ? o ? (o.p(a, u), u & /*slotHasActions*/
      512 && C(o, 1)) : (o = dl(a), o.c(), C(o, 1), o.m(t.parentNode, t)) : o && (re(), k(o, 1, 1, () => {
        o = null;
      }), se());
    },
    i(a) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(o), l = !0;
      }
    },
    o(a) {
      r = r.filter(ti);
      for (let u = 0; u < r.length; u += 1)
        k(r[u]);
      k(o), l = !1;
    },
    d(a) {
      a && (H(e), H(t)), Ve(r, a), o && o.d(a);
    }
  };
}
function gl(n, e) {
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
  return l = new ei({
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
      $$slots: { default: [ao] },
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
      t = Ae(), V(l.$$.fragment), this.first = t;
    },
    m(s, o) {
      M(s, t, o), N(l, s, o), i = !0;
    },
    p(s, o) {
      e = s;
      const a = {};
      o & /*rowBg, hoveredRow, getRowId, items*/
      417 && (a.style = [
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
      ].filter(Boolean).join(";")), o & /*$$scope, items, slotHasActions, columns*/
      16899 && (a.$$scope = { dirty: o, ctx: e }), l.$set(a);
    },
    i(s) {
      i || (C(l.$$.fragment, s), i = !0);
    },
    o(s) {
      k(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), q(l, s);
    }
  };
}
function oo(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = Ie(
    /*items*/
    n[0]
  );
  const s = (o) => (
    /*getRowId*/
    o[5](
      /*item*/
      o[17],
      /*i*/
      o[19]
    )
  );
  for (let o = 0; o < r.length; o += 1) {
    let a = rl(n, r, o), u = s(a);
    t.set(u, e[o] = gl(u, a));
  }
  return {
    c() {
      for (let o = 0; o < e.length; o += 1)
        e[o].c();
      l = Ae();
    },
    m(o, a) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(o, a);
      M(o, l, a), i = !0;
    },
    p(o, a) {
      a & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = Ie(
        /*items*/
        o[0]
      ), re(), e = $i(e, a, s, 1, o, r, t, l.parentNode, Ji, gl, l, rl), se());
    },
    i(o) {
      if (!i) {
        for (let a = 0; a < r.length; a += 1)
          C(e[a]);
        i = !0;
      }
    },
    o(o) {
      for (let a = 0; a < e.length; a += 1)
        k(e[a]);
      i = !1;
    },
    d(o) {
      o && H(l);
      for (let a = 0; a < e.length; a += 1)
        e[a].d(o);
    }
  };
}
function uo(n) {
  let e, t, l, i;
  return e = new Oa({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [io] },
      $$scope: { ctx: n }
    }
  }), l = new Ba({
    props: {
      $$slots: { default: [oo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment), t = B(), V(l.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), M(r, t, s), N(l, r, s), i = !0;
    },
    p(r, s) {
      const o = {};
      s & /*headerBg*/
      64 && (o.style = /*headerBg*/
      r[6] ? `background-color:${/*headerBg*/
      r[6]}` : void 0), s & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (o.$$scope = { dirty: s, ctx: r }), e.$set(o);
      const a = {};
      s & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns*/
      17315 && (a.$$scope = { dirty: s, ctx: r }), l.$set(a);
    },
    i(r) {
      i || (C(e.$$.fragment, r), C(l.$$.fragment, r), i = !0);
    },
    o(r) {
      k(e.$$.fragment, r), k(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && H(t), q(e, r), q(l, r);
    }
  };
}
function co(n) {
  let e, t, l, i;
  const r = [to, eo, xa, $a], s = [];
  function o(a, u) {
    return (
      /*loading*/
      a[2] ? 0 : (
        /*errorMsg*/
        a[3] ? 1 : !/*items*/
        a[0] || /*items*/
        a[0].length === 0 ? 2 : 3
      )
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (re(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      k(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function fo(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = an(i);
  let { items: o = [] } = e, { columns: a = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (b, O) => {
    var S, m;
    return (m = b && ((S = b.id) !== null && S !== void 0 ? S : b.key)) !== null && m !== void 0 ? m : O;
  } } = e, { headerBg: g = null } = e, { rowBg: h = null } = e, p = null;
  const _ = s;
  let { hasActions: y = !1 } = e;
  const A = (b, O) => t(8, p = d(b, O)), E = () => t(8, p = null);
  return n.$$set = (b) => {
    "items" in b && t(0, o = b.items), "columns" in b && t(1, a = b.columns), "loading" in b && t(2, u = b.loading), "errorMsg" in b && t(3, c = b.errorMsg), "emptyText" in b && t(4, f = b.emptyText), "getRowId" in b && t(5, d = b.getRowId), "headerBg" in b && t(6, g = b.headerBg), "rowBg" in b && t(7, h = b.rowBg), "hasActions" in b && t(10, y = b.hasActions), "$$scope" in b && t(14, r = b.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = y || !!(_ != null && _.actions));
  }, [
    o,
    a,
    u,
    c,
    f,
    d,
    g,
    h,
    p,
    l,
    y,
    i,
    A,
    E,
    r
  ];
}
class go extends x {
  constructor(e) {
    super(), $(this, e, fo, co, Q, {
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
function ml(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function hl(n) {
  let e, t = (
    /*crumb*/
    n[5].secondaryLabel + ""
  ), l;
  return {
    c() {
      e = G("span"), l = ne(t), v(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r), P(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && _e(l, t);
    },
    d(i) {
      i && H(e);
    }
  };
}
function pl(n) {
  let e;
  return {
    c() {
      e = G("span"), e.textContent = "chevron_right", v(e, "class", "material-icons separator svelte-1ngm2be");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function _l(n) {
  let e, t, l, i = (
    /*crumb*/
    n[5].label + ""
  ), r, s, o, a, u, c, f, d, g = (
    /*crumb*/
    n[5].secondaryLabel && hl(n)
  );
  function h() {
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
    n[0].length - 1 && pl()
  );
  return {
    c() {
      e = G("div"), t = G("span"), l = G("span"), r = ne(i), s = B(), g && g.c(), u = B(), p && p.c(), c = B(), v(l, "class", "label svelte-1ngm2be"), v(t, "class", o = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), v(t, "aria-current", a = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), v(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(_, y) {
      M(_, e, y), P(e, t), P(t, l), P(l, r), P(t, s), g && g.m(t, null), P(e, u), p && p.m(e, null), P(e, c), f || (d = K(t, "click", h), f = !0);
    },
    p(_, y) {
      n = _, y & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && _e(r, i), /*crumb*/
      n[5].secondaryLabel ? g ? g.p(n, y) : (g = hl(n), g.c(), g.m(t, null)) : g && (g.d(1), g = null), y & /*breadcrumbs, activeIndex*/
      3 && o !== (o = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && v(t, "class", o), y & /*activeIndex*/
      2 && a !== (a = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && v(t, "aria-current", a), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? p || (p = pl(), p.c(), p.m(e, c)) : p && (p.d(1), p = null);
    },
    d(_) {
      _ && H(e), g && g.d(), p && p.d(), f = !1, d();
    }
  };
}
function mo(n) {
  let e, t = Ie(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = _l(ml(n, t, i));
  return {
    c() {
      e = G("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      v(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = Ie(
          /*breadcrumbs*/
          i[0]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const o = ml(i, t, s);
          l[s] ? l[s].p(o, r) : (l[s] = _l(o), l[s].c(), l[s].m(e, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    i: J,
    o: J,
    d(i) {
      i && H(e), Ve(l, i);
    }
  };
}
function ho(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = Xe(), s = (a) => {
    l[a].enabled && a !== i && r("click", { index: a });
  }, o = (a) => s(a);
  return n.$$set = (a) => {
    "breadcrumbs" in a && t(0, l = a.breadcrumbs), "activeIndex" in a && t(1, i = a.activeIndex);
  }, [l, i, s, o];
}
class on extends x {
  constructor(e) {
    super(), $(this, e, ho, mo, Q, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const po = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
po.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function _o(n) {
  let e;
  return {
    c() {
      e = ne("CONTINUE");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function bo(n) {
  let e;
  return {
    c() {
      e = ne("ADD NEW PROCESS");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function vo(n) {
  let e, t, l, i, r, s, o, a;
  t = new xs({
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
  r = new ua({
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
      e = G("button"), V(t.$$.fragment), l = B(), i = G("button"), V(r.$$.fragment), v(e, "type", "button"), v(e, "class", "icon svelte-wxofq2"), v(e, "aria-label", "View process"), v(i, "type", "button"), v(i, "class", "icon svelte-wxofq2"), v(i, "aria-label", "Start process");
    },
    m(f, d) {
      M(f, e, d), N(t, e, null), M(f, l, d), M(f, i, d), N(r, i, null), s = !0, o || (a = [
        K(e, "click", u),
        K(i, "click", c)
      ], o = !0);
    },
    p(f, d) {
      n = f;
    },
    i(f) {
      s || (C(t.$$.fragment, f), C(r.$$.fragment, f), s = !0);
    },
    o(f) {
      k(t.$$.fragment, f), k(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (H(e), H(l), H(i)), q(t), q(r), o = !1, he(a);
    }
  };
}
function Co(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, h, p, _, y;
  i = new ga({}), a = new pt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [_o] },
      $$scope: { ctx: n }
    }
  }), a.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function A(b) {
    n[12](b);
  }
  let E = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (E.value = /*searchQuery*/
    n[2]), f = new Gs({ props: E }), le.push(() => xe(f, "value", A)), h = new pt({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [bo] },
        $$scope: { ctx: n }
      }
    }), h.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), _ = new go({
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
            vo,
            ({ item: b }) => ({ 16: b }),
            ({ item: b }) => b ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = G("div"), t = G("div"), l = G("div"), V(i.$$.fragment), r = B(), s = G("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, o = B(), V(a.$$.fragment), u = B(), c = G("div"), V(f.$$.fragment), g = B(), V(h.$$.fragment), p = B(), V(_.$$.fragment), v(s, "class", "svelte-wxofq2"), v(l, "class", "process-banner__info svelte-wxofq2"), v(t, "class", "process-banner svelte-wxofq2"), v(c, "class", "process-toolbar svelte-wxofq2"), v(e, "class", "processes svelte-wxofq2");
      },
      m(b, O) {
        M(b, e, O), P(e, t), P(t, l), N(i, l, null), P(l, r), P(l, s), P(t, o), N(a, t, null), P(e, u), P(e, c), N(f, c, null), P(c, g), N(h, c, null), P(e, p), N(_, e, null), y = !0;
      },
      p(b, [O]) {
        const S = {};
        O & /*$$scope*/
        131072 && (S.$$scope = { dirty: O, ctx: b }), a.$set(S);
        const m = {};
        !d && O & /*searchQuery*/
        4 && (d = !0, m.value = /*searchQuery*/
        b[2], $e(() => d = !1)), f.$set(m);
        const L = {};
        O & /*$$scope*/
        131072 && (L.$$scope = { dirty: O, ctx: b }), h.$set(L);
        const W = {};
        O & /*filteredRows*/
        8 && (W.items = /*filteredRows*/
        b[3]), O & /*loading*/
        1 && (W.loading = /*loading*/
        b[0]), O & /*errorMsg*/
        2 && (W.errorMsg = /*errorMsg*/
        b[1]), O & /*$$scope, item*/
        196608 && (W.$$scope = { dirty: O, ctx: b }), _.$set(W);
      },
      i(b) {
        y || (C(i.$$.fragment, b), C(a.$$.fragment, b), C(f.$$.fragment, b), C(h.$$.fragment, b), C(_.$$.fragment, b), y = !0);
      },
      o(b) {
        k(i.$$.fragment, b), k(a.$$.fragment, b), k(f.$$.fragment, b), k(h.$$.fragment, b), k(_.$$.fragment, b), y = !1;
      },
      d(b) {
        b && H(e), q(i), q(a), q(f), q(h), q(_);
      }
    }
  );
}
function Io(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: o = !1 } = e, { errorMsg: a = "" } = e;
  const u = Xe(), c = (E) => u("start", E), f = (E) => u("view", E);
  let d = "";
  const g = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], h = () => {
    console.log("Add new process clicked");
  }, p = () => console.log("Continue Process");
  function _(E) {
    d = E, t(2, d);
  }
  const y = (E) => f(E), A = (E) => c(E);
  return n.$$set = (E) => {
    "processes" in E && t(8, s = E.processes), "loading" in E && t(0, o = E.loading), "errorMsg" in E && t(1, a = E.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((E) => Object.assign(Object.assign({}, E), { displayName: E.name || E.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((E) => {
      var b;
      return ((b = E.displayName) !== null && b !== void 0 ? b : "").toLowerCase().includes(l);
    }) : i);
  }, [
    o,
    a,
    d,
    r,
    c,
    f,
    g,
    h,
    s,
    i,
    l,
    p,
    _,
    y,
    A
  ];
}
class yo extends x {
  constructor(e) {
    super(), $(this, e, Io, Co, Q, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function bl(n, e, t) {
  const l = n.slice();
  return l[7] = e[t], l[9] = t, l;
}
function Ao(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = ne(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    p: J,
    i: J,
    o: J,
    d(l) {
      l && H(t);
    }
  };
}
function ko(n) {
  let e, t, l, i;
  const r = [Ro, Lo, So, wo], s = [];
  function o(a, u) {
    return (
      /*status*/
      a[3][
        /*item*/
        a[7].id
      ] === "check" ? 0 : (
        /*status*/
        a[3][
          /*item*/
          a[7].id
        ] === "error" ? 1 : (
          /*status*/
          a[3][
            /*item*/
            a[7].id
          ] === "warning" ? 2 : 3
        )
      )
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, u) {
      let c = e;
      e = o(a), e !== c && (re(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t || (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      k(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function wo(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = ne(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    i: J,
    o: J,
    d(l) {
      l && H(t);
    }
  };
}
function So(n) {
  let e, t;
  return e = new ra({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Lo(n) {
  let e, t;
  return e = new la({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ro(n) {
  let e, t;
  return e = new ta({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Eo(n) {
  let e, t, l, i, r, s, o, a;
  const u = [ko, Ao], c = [];
  function f(g, h) {
    return h & /*visited, items, currentId*/
    7 && (t = null), t == null && (t = !!/*visited*/
    (g[1].includes(
      /*item*/
      g[7].id
    ) && /*item*/
    g[7].id !== /*currentId*/
    g[2])), t ? 0 : 1;
  }
  l = f(n, -1), i = c[l] = u[l](n);
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
      e = G("button"), i.c(), v(e, "aria-current", r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0), ze(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), ze(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), ze(
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
    m(g, h) {
      M(g, e, h), c[l].m(e, null), s = !0, o || (a = K(e, "click", d), o = !0);
    },
    p(g, h) {
      n = g;
      let p = l;
      l = f(n, h), l === p ? c[l].p(n, h) : (re(), k(c[p], 1, 1, () => {
        c[p] = null;
      }), se(), i = c[l], i ? i.p(n, h) : (i = c[l] = u[l](n), i.c()), C(i, 1), i.m(e, null)), (!s || h & /*items, currentId*/
      5 && r !== (r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0)) && v(e, "aria-current", r), (!s || h & /*visited, items*/
      3) && ze(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), (!s || h & /*items, currentId*/
      5) && ze(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), (!s || h & /*visited, items, currentId*/
      7) && ze(
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
    i(g) {
      s || (C(i), s = !0);
    },
    o(g) {
      k(i), s = !1;
    },
    d(g) {
      g && H(e), c[l].d(), o = !1, a();
    }
  };
}
function vl(n) {
  let e;
  return {
    c() {
      e = G("div"), v(e, "class", "step-line svelte-swalin"), v(e, "aria-hidden", "true");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Cl(n) {
  let e, t, l, i, r = (
    /*item*/
    n[7].label + ""
  ), s, o, a, u;
  t = new Ra({
    props: {
      content: (
        /*tooltipMap*/
        n[4][
          /*item*/
          n[7].id
        ] ?? ""
      ),
      side: "bottom",
      $$slots: { default: [Eo] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[9] < /*items*/
    n[0].length - 1 && vl()
  );
  return {
    c() {
      e = G("div"), V(t.$$.fragment), l = B(), i = G("p"), s = ne(r), o = B(), c && c.c(), a = Ae(), v(e, "class", "step svelte-swalin");
    },
    m(f, d) {
      M(f, e, d), N(t, e, null), P(e, l), P(e, i), P(i, s), M(f, o, d), c && c.m(f, d), M(f, a, d), u = !0;
    },
    p(f, d) {
      const g = {};
      d & /*tooltipMap, items*/
      17 && (g.content = /*tooltipMap*/
      f[4][
        /*item*/
        f[7].id
      ] ?? ""), d & /*$$scope, items, currentId, visited, status*/
      1039 && (g.$$scope = { dirty: d, ctx: f }), t.$set(g), (!u || d & /*items*/
      1) && r !== (r = /*item*/
      f[7].label + "") && _e(s, r), /*i*/
      f[9] < /*items*/
      f[0].length - 1 ? c || (c = vl(), c.c(), c.m(a.parentNode, a)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (C(t.$$.fragment, f), u = !0);
    },
    o(f) {
      k(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (H(e), H(o), H(a)), q(t), c && c.d(f);
    }
  };
}
function Do(n) {
  let e, t, l = Ie(
    /*items*/
    n[0]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = Cl(bl(n, l, s));
  const r = (s) => k(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = G("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      v(e, "class", "steps svelte-swalin");
    },
    m(s, o) {
      M(s, e, o);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(e, null);
      t = !0;
    },
    p(s, [o]) {
      if (o & /*items, tooltipMap, currentId, undefined, visited, dispatch, status*/
      63) {
        l = Ie(
          /*items*/
          s[0]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const u = bl(s, l, a);
          i[a] ? (i[a].p(u, o), C(i[a], 1)) : (i[a] = Cl(u), i[a].c(), C(i[a], 1), i[a].m(e, null));
        }
        for (re(), a = l.length; a < i.length; a += 1)
          r(a);
        se();
      }
    },
    i(s) {
      if (!t) {
        for (let o = 0; o < l.length; o += 1)
          C(i[o]);
        t = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        k(i[o]);
      t = !1;
    },
    d(s) {
      s && H(e), Ve(i, s);
    }
  };
}
function Po(n, e, t) {
  let { items: l = [] } = e, { visited: i = [] } = e, { currentId: r = null } = e, { status: s = {} } = e, { tooltipMap: o = {} } = e;
  const a = Xe(), u = (c) => a("select", c.id);
  return n.$$set = (c) => {
    "items" in c && t(0, l = c.items), "visited" in c && t(1, i = c.visited), "currentId" in c && t(2, r = c.currentId), "status" in c && t(3, s = c.status), "tooltipMap" in c && t(4, o = c.tooltipMap);
  }, [l, i, r, s, o, a, u];
}
class ni extends x {
  constructor(e) {
    super(), $(this, e, Po, Do, Q, {
      items: 0,
      visited: 1,
      currentId: 2,
      status: 3,
      tooltipMap: 4
    });
  }
}
function Ho(n) {
  let e, t;
  return e = new ni({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Mo(n, e, t) {
  const l = Xe(), i = [
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
  const o = (a) => l("select", a.detail);
  return n.$$set = (a) => {
    "currentId" in a && t(0, r = a.currentId), "visited" in a && t(1, s = a.visited);
  }, [r, s, i, o];
}
class To extends x {
  constructor(e) {
    super(), $(this, e, Mo, Ho, Q, { currentId: 0, visited: 1 });
  }
}
function Fo(n) {
  let e, t, l, i, r, s, o, a, u, c, f;
  return l = new _a({}), {
    c() {
      e = G("div"), t = G("button"), V(l.$$.fragment), i = B(), r = G("span"), r.textContent = "Back to Overview", s = B(), o = G("span"), a = ne(
        /*title*/
        n[0]
      ), v(o, "class", "back-container__title svelte-1p6ln66"), v(t, "type", "button"), v(t, "class", "back-container svelte-1p6ln66"), Yt(e, "display", "flex"), Yt(e, "align-items", "center"), Yt(e, "gap", "0.5rem");
    },
    m(d, g) {
      M(d, e, g), P(e, t), N(l, t, null), P(t, i), P(t, r), P(t, s), P(t, o), P(o, a), u = !0, c || (f = K(
        t,
        "click",
        /*onBack*/
        n[1]
      ), c = !0);
    },
    p(d, [g]) {
      (!u || g & /*title*/
      1) && _e(
        a,
        /*title*/
        d[0]
      );
    },
    i(d) {
      u || (C(l.$$.fragment, d), u = !0);
    },
    o(d) {
      k(l.$$.fragment, d), u = !1;
    },
    d(d) {
      d && H(e), q(l), c = !1, f();
    }
  };
}
function Go(n, e, t) {
  let { title: l = "Engineering Wizard" } = e;
  const i = Xe();
  function r() {
    i("back");
  }
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title);
  }, [l, r];
}
class li extends x {
  constructor(e) {
    super(), $(this, e, Go, Fo, Q, { title: 0 });
  }
}
function Il(n, e, t) {
  const l = n.slice();
  return l[3] = e[t], l[5] = t, l;
}
function yl(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l;
}
function Oo(n) {
  let e;
  return {
    c() {
      e = ne("EDIT");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Al(n) {
  let e, t, l = (
    /*plugin*/
    n[6].name + ""
  ), i, r;
  return {
    c() {
      e = G("div"), t = G("span"), i = ne(l), r = B(), v(t, "class", "plugin-item__name svelte-siq5x1"), v(e, "class", "plugin-item svelte-siq5x1");
    },
    m(s, o) {
      M(s, e, o), P(e, t), P(t, i), P(e, r);
    },
    p(s, o) {
      o & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      s[6].name + "") && _e(i, l);
    },
    d(s) {
      s && H(e);
    }
  };
}
function kl(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[3].title + ""
  ), o, a, u, c, f = Ie(
    /*group*/
    n[3].plugins
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = Al(yl(n, f, g));
  return {
    c() {
      e = G("div"), t = G("div"), l = G("span"), l.textContent = `${/*i*/
      n[5] + 1}.`, i = B(), r = G("span"), o = ne(s), a = B(), u = G("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      c = B(), v(l, "class", "plugin__index svelte-siq5x1"), v(r, "class", "plugin__title svelte-siq5x1"), v(t, "class", "plugin__group-title svelte-siq5x1"), v(u, "class", "plugin__items svelte-siq5x1"), v(e, "class", "plugin svelte-siq5x1");
    },
    m(g, h) {
      M(g, e, h), P(e, t), P(t, l), P(t, i), P(t, r), P(r, o), P(e, a), P(e, u);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(u, null);
      P(e, c);
    },
    p(g, h) {
      if (h & /*pluginGroups*/
      1 && s !== (s = /*group*/
      g[3].title + "") && _e(o, s), h & /*pluginGroups*/
      1) {
        f = Ie(
          /*group*/
          g[3].plugins
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const _ = yl(g, f, p);
          d[p] ? d[p].p(_, h) : (d[p] = Al(_), d[p].c(), d[p].m(u, null));
        }
        for (; p < d.length; p += 1)
          d[p].d(1);
        d.length = f.length;
      }
    },
    d(g) {
      g && H(e), Ve(d, g);
    }
  };
}
function Uo(n) {
  let e, t, l, i, r, s, o;
  r = new pt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      $$slots: { default: [Oo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*requestEdit*/
    n[1]
  );
  let a = Ie(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let c = 0; c < a.length; c += 1)
    u[c] = kl(Il(n, a, c));
  return {
    c() {
      e = G("div"), t = G("div"), l = G("p"), l.textContent = "Process", i = B(), V(r.$$.fragment), s = B();
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      v(l, "class", "svelte-siq5x1"), v(t, "class", "plugins-list__header svelte-siq5x1"), v(e, "class", "plugins-list svelte-siq5x1");
    },
    m(c, f) {
      M(c, e, f), P(e, t), P(t, l), P(t, i), N(r, t, null), P(e, s);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      o = !0;
    },
    p(c, [f]) {
      const d = {};
      if (f & /*$$scope*/
      512 && (d.$$scope = { dirty: f, ctx: c }), r.$set(d), f & /*pluginGroups*/
      1) {
        a = Ie(
          /*pluginGroups*/
          c[0]
        );
        let g;
        for (g = 0; g < a.length; g += 1) {
          const h = Il(c, a, g);
          u[g] ? u[g].p(h, f) : (u[g] = kl(h), u[g].c(), u[g].m(e, null));
        }
        for (; g < u.length; g += 1)
          u[g].d(1);
        u.length = a.length;
      }
    },
    i(c) {
      o || (C(r.$$.fragment, c), o = !0);
    },
    o(c) {
      k(r.$$.fragment, c), o = !1;
    },
    d(c) {
      c && H(e), q(r), Ve(u, c);
    }
  };
}
function Wo(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = Xe(), r = () => i("editRequested");
  return n.$$set = (s) => {
    "pluginGroups" in s && t(0, l = s.pluginGroups);
  }, [l, r];
}
class Bo extends x {
  constructor(e) {
    super(), $(this, e, Wo, Uo, Q, { pluginGroups: 0 });
  }
}
function Zo(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function No(n) {
  var e;
  return (e = n == null ? void 0 : n.pluginGroups) != null && e.length ? n.pluginGroups : [{ title: "Process", plugins: (n == null ? void 0 : n.plugins) ?? [] }];
}
function qo() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function Vo(n) {
  var e;
  (e = qo()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function jo(n) {
  if (!customElements.get(n.id)) {
    const e = await import(
      /* @vite-ignore */
      n.src
    );
    customElements.define(n.id, e.default);
  }
}
async function zo(n) {
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
const mt = wt(!0);
mt.subscribe((n) => {
  Vo(n);
});
function wl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Sl(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l[10] = t, l;
}
function Xo(n) {
  let e;
  return {
    c() {
      e = ne("REMOVE ALL");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Ll(n) {
  let e, t, l = (
    /*plugin*/
    n[8].name + ""
  ), i, r, s, o, a, u, c, f;
  o = new js({ props: { svgStyles: "fill: #FF203A" } });
  function d() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7],
        /*j*/
        n[10]
      )
    );
  }
  return {
    c() {
      e = G("div"), t = G("span"), i = ne(l), r = B(), s = G("button"), V(o.$$.fragment), a = B(), v(t, "class", "plugin-item__name svelte-12ozoaz"), v(s, "type", "button"), v(s, "class", "plugin-item__remove svelte-12ozoaz"), v(e, "class", "plugin-item svelte-12ozoaz");
    },
    m(g, h) {
      M(g, e, h), P(e, t), P(t, i), P(e, r), P(e, s), N(o, s, null), P(e, a), u = !0, c || (f = K(s, "click", d), c = !0);
    },
    p(g, h) {
      n = g, (!u || h & /*pluginGroups*/
      1) && l !== (l = /*plugin*/
      n[8].name + "") && _e(i, l);
    },
    i(g) {
      u || (C(o.$$.fragment, g), u = !0);
    },
    o(g) {
      k(o.$$.fragment, g), u = !1;
    },
    d(g) {
      g && H(e), q(o), c = !1, f();
    }
  };
}
function Rl(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[5].title + ""
  ), o, a, u, c, f, d = Ie(
    /*group*/
    n[5].plugins
  ), g = [];
  for (let p = 0; p < d.length; p += 1)
    g[p] = Ll(Sl(n, d, p));
  const h = (p) => k(g[p], 1, 1, () => {
    g[p] = null;
  });
  return {
    c() {
      e = G("div"), t = G("div"), l = G("span"), l.textContent = `${/*i*/
      n[7] + 1}.`, i = B(), r = G("span"), o = ne(s), a = B(), u = G("div");
      for (let p = 0; p < g.length; p += 1)
        g[p].c();
      c = B(), v(l, "class", "plugin__index svelte-12ozoaz"), v(r, "class", "plugin__title svelte-12ozoaz"), v(t, "class", "plugin__group-title svelte-12ozoaz"), v(u, "class", "plugin__items svelte-12ozoaz"), v(e, "class", "plugin svelte-12ozoaz");
    },
    m(p, _) {
      M(p, e, _), P(e, t), P(t, l), P(t, i), P(t, r), P(r, o), P(e, a), P(e, u);
      for (let y = 0; y < g.length; y += 1)
        g[y] && g[y].m(u, null);
      P(e, c), f = !0;
    },
    p(p, _) {
      if ((!f || _ & /*pluginGroups*/
      1) && s !== (s = /*group*/
      p[5].title + "") && _e(o, s), _ & /*removeOne, pluginGroups*/
      5) {
        d = Ie(
          /*group*/
          p[5].plugins
        );
        let y;
        for (y = 0; y < d.length; y += 1) {
          const A = Sl(p, d, y);
          g[y] ? (g[y].p(A, _), C(g[y], 1)) : (g[y] = Ll(A), g[y].c(), C(g[y], 1), g[y].m(u, null));
        }
        for (re(), y = d.length; y < g.length; y += 1)
          h(y);
        se();
      }
    },
    i(p) {
      if (!f) {
        for (let _ = 0; _ < d.length; _ += 1)
          C(g[_]);
        f = !0;
      }
    },
    o(p) {
      g = g.filter(Boolean);
      for (let _ = 0; _ < g.length; _ += 1)
        k(g[_]);
      f = !1;
    },
    d(p) {
      p && H(e), Ve(g, p);
    }
  };
}
function Yo(n) {
  let e, t, l, i, r, s, o;
  r = new pt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #FF203A; --mdc-theme-on-primary: var(--on-brand)",
      "aria-label": "Remove all plugins",
      $$slots: { default: [Xo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*removeAllPlugins*/
    n[1]
  );
  let a = Ie(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let f = 0; f < a.length; f += 1)
    u[f] = Rl(wl(n, a, f));
  const c = (f) => k(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      e = G("div"), t = G("div"), l = G("p"), l.textContent = "Process", i = B(), V(r.$$.fragment), s = B();
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      v(l, "class", "svelte-12ozoaz"), v(t, "class", "plugins-list__header svelte-12ozoaz"), v(e, "class", "plugins-list svelte-12ozoaz");
    },
    m(f, d) {
      M(f, e, d), P(e, t), P(t, l), P(t, i), N(r, t, null), P(e, s);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(e, null);
      o = !0;
    },
    p(f, [d]) {
      const g = {};
      if (d & /*$$scope*/
      2048 && (g.$$scope = { dirty: d, ctx: f }), r.$set(g), d & /*pluginGroups, removeOne*/
      5) {
        a = Ie(
          /*pluginGroups*/
          f[0]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const p = wl(f, a, h);
          u[h] ? (u[h].p(p, d), C(u[h], 1)) : (u[h] = Rl(p), u[h].c(), C(u[h], 1), u[h].m(e, null));
        }
        for (re(), h = a.length; h < u.length; h += 1)
          c(h);
        se();
      }
    },
    i(f) {
      if (!o) {
        C(r.$$.fragment, f);
        for (let d = 0; d < a.length; d += 1)
          C(u[d]);
        o = !0;
      }
    },
    o(f) {
      k(r.$$.fragment, f), u = u.filter(Boolean);
      for (let d = 0; d < u.length; d += 1)
        k(u[d]);
      o = !1;
    },
    d(f) {
      f && H(e), q(r), Ve(u, f);
    }
  };
}
function Ko(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = Xe(), r = () => i("removeAllPlugins"), s = (a, u) => {
    const c = l[a], f = c.plugins[u];
    i("removePlugin", { groupIndex: a, pluginIndex: u, group: c, plugin: f });
  }, o = (a, u) => s(a, u);
  return n.$$set = (a) => {
    "pluginGroups" in a && t(0, l = a.pluginGroups);
  }, [l, r, s, o];
}
class Qo extends x {
  constructor(e) {
    super(), $(this, e, Ko, Yo, Q, { pluginGroups: 0 });
  }
}
function Jo(n) {
  let e, t;
  return e = new Qo({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[0]
    ) }
  }), e.$on(
    "removeAllPlugins",
    /*removeAllPlugins_handler*/
    n[2]
  ), e.$on(
    "removePlugin",
    /*removePlugin_handler*/
    n[3]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*pluginGroups*/
      1 && (r.pluginGroups = /*pluginGroups*/
      l[0]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function $o(n, e, t) {
  let { pluginGroups: l = [] } = e, { proc: i = null } = e;
  const r = (o) => console.log("remove all plugins", o), s = (o) => console.log("remove one", o.detail);
  return n.$$set = (o) => {
    "pluginGroups" in o && t(0, l = o.pluginGroups), "proc" in o && t(1, i = o.proc);
  }, [l, i, r, s];
}
class xo extends x {
  constructor(e) {
    super(), $(this, e, $o, Jo, Q, { pluginGroups: 0, proc: 1 });
  }
}
const eu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc3VibmV0LWFkZHJlc3M8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+Z3NlLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+R1NFIENvbnRyb2wgQmxvY2tzIENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWdzZS1jb25maWc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+c212LWNvbmZpZy0wMDM8L2lkPgogICAgPG5hbWU+U01WIENvbnRyb2wgQmxvY2tzIENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXNtdi1jb25maWc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cgo=", tu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWllZC1uYW1lLWZvcm1hdDwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5hcC1jb25maWctMDAyPC9pZD4KICAgIDxuYW1lPkFjY2VzcyBQb2ludCBDb25maWd1cmF0aW9uPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", nu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cgo=", lu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXJlcXVpcmVkLWlucHV0czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1uYW1pbmctMDAyPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIE5hbWluZyBDb252ZW50aW9uPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctY29tcGF0LTAwMzwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBDb21wYXRpYmlsaXR5PC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
function El(n, e, t) {
  const l = n.slice();
  return l[23] = e[t], l[25] = t, l;
}
function Dl(n, e, t) {
  const l = n.slice();
  return l[26] = e[t], l[28] = t, l;
}
function Pl(n, e, t) {
  const l = n.slice();
  return l[29] = e[t], l[25] = t, l;
}
function Hl(n) {
  let e, t = Ie(
    /*group*/
    n[26].plugins
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = Ml(Pl(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = Ae();
    },
    m(i, r) {
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(i, r);
      M(i, e, r);
    },
    p(i, r) {
      if (r & /*selectedIdx, activePluginIdx, selectPlugin, pluginGroups*/
      1031) {
        t = Ie(
          /*group*/
          i[26].plugins
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const o = Pl(i, t, s);
          l[s] ? l[s].p(o, r) : (l[s] = Ml(o), l[s].c(), l[s].m(e.parentNode, e));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && H(e), Ve(l, i);
    }
  };
}
function Ml(n) {
  let e, t, l = (
    /*plugin*/
    n[29].name + ""
  ), i, r, s, o;
  function a() {
    return (
      /*click_handler_1*/
      n[18](
        /*gIdx*/
        n[28],
        /*idx*/
        n[25]
      )
    );
  }
  return {
    c() {
      e = G("button"), t = G("span"), i = ne(l), r = B(), v(e, "type", "button"), v(e, "class", "validation-groups__plugin svelte-1t9loaq"), ze(
        e,
        "active",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1] && /*idx*/
        n[25] === /*activePluginIdx*/
        n[2]
      );
    },
    m(u, c) {
      M(u, e, c), P(e, t), P(t, i), P(e, r), s || (o = K(e, "click", a), s = !0);
    },
    p(u, c) {
      n = u, c & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      n[29].name + "") && _e(i, l), c & /*selectedIdx, activePluginIdx*/
      6 && ze(
        e,
        "active",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1] && /*idx*/
        n[25] === /*activePluginIdx*/
        n[2]
      );
    },
    d(u) {
      u && H(e), s = !1, o();
    }
  };
}
function Tl(n) {
  let e, t, l = (
    /*group*/
    n[26].title + ""
  ), i, r, s, o, a, u;
  function c() {
    return (
      /*click_handler*/
      n[17](
        /*gIdx*/
        n[28]
      )
    );
  }
  let f = (
    /*gIdx*/
    n[28] === /*selectedIdx*/
    n[1] && Hl(n)
  );
  return {
    c() {
      e = G("div"), t = G("button"), i = ne(l), s = B(), f && f.c(), o = B(), v(t, "type", "button"), v(t, "class", "validation-groups__group-title svelte-1t9loaq"), v(t, "aria-pressed", r = /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1]), v(e, "class", "validation-groups__group svelte-1t9loaq"), ze(
        e,
        "expanded",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1]
      );
    },
    m(d, g) {
      M(d, e, g), P(e, t), P(t, i), P(e, s), f && f.m(e, null), P(e, o), a || (u = K(t, "click", c), a = !0);
    },
    p(d, g) {
      n = d, g & /*pluginGroups*/
      1 && l !== (l = /*group*/
      n[26].title + "") && _e(i, l), g & /*selectedIdx*/
      2 && r !== (r = /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1]) && v(t, "aria-pressed", r), /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1] ? f ? f.p(n, g) : (f = Hl(n), f.c(), f.m(e, o)) : f && (f.d(1), f = null), g & /*selectedIdx*/
      2 && ze(
        e,
        "expanded",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1]
      );
    },
    d(d) {
      d && H(e), f && f.d(), a = !1, u();
    }
  };
}
function Fl(n) {
  let e, t, l, i;
  const r = [au, su, ru, iu], s = [];
  function o(a, u) {
    return (
      /*loadingXml*/
      a[5] ? 0 : (
        /*xmlError*/
        a[6] ? 1 : (
          /*validationEntries*/
          a[7].length === 0 ? 2 : 3
        )
      )
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, u) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (re(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      k(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function iu(n) {
  let e, t, l = Ie(
    /*validationEntries*/
    n[7]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = Ul(El(n, l, s));
  const r = (s) => k(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = G("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      v(e, "class", "validation-xml-list svelte-1t9loaq");
    },
    m(s, o) {
      M(s, e, o);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(e, null);
      t = !0;
    },
    p(s, o) {
      if (o & /*validationEntries, openSet, toggleEntry*/
      2432) {
        l = Ie(
          /*validationEntries*/
          s[7]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const u = El(s, l, a);
          i[a] ? (i[a].p(u, o), C(i[a], 1)) : (i[a] = Ul(u), i[a].c(), C(i[a], 1), i[a].m(e, null));
        }
        for (re(), a = l.length; a < i.length; a += 1)
          r(a);
        se();
      }
    },
    i(s) {
      if (!t) {
        for (let o = 0; o < l.length; o += 1)
          C(i[o]);
        t = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1)
        k(i[o]);
      t = !1;
    },
    d(s) {
      s && H(e), Ve(i, s);
    }
  };
}
function ru(n) {
  let e, t, l, i = (
    /*currentPlugin*/
    n[3].name + ""
  ), r, s, o, a, u;
  return {
    c() {
      e = G("div"), t = G("h4"), l = ne("XML for: "), r = ne(i), s = B(), o = G("div"), a = G("pre"), u = ne(
        /*xmlText*/
        n[4]
      ), v(t, "class", "xml-viewer__title svelte-1t9loaq"), v(a, "class", "svelte-1t9loaq"), v(o, "class", "xml-viewer__box svelte-1t9loaq"), v(e, "class", "xml-viewer svelte-1t9loaq");
    },
    m(c, f) {
      M(c, e, f), P(e, t), P(t, l), P(t, r), P(e, s), P(e, o), P(o, a), P(a, u);
    },
    p(c, f) {
      f & /*currentPlugin*/
      8 && i !== (i = /*currentPlugin*/
      c[3].name + "") && _e(r, i), f & /*xmlText*/
      16 && _e(
        u,
        /*xmlText*/
        c[4]
      );
    },
    i: J,
    o: J,
    d(c) {
      c && H(e);
    }
  };
}
function su(n) {
  let e, t;
  return {
    c() {
      e = G("p"), t = ne(
        /*xmlError*/
        n[6]
      ), v(e, "class", "error svelte-1t9loaq");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*xmlError*/
      64 && _e(
        t,
        /*xmlError*/
        l[6]
      );
    },
    i: J,
    o: J,
    d(l) {
      l && H(e);
    }
  };
}
function au(n) {
  let e;
  return {
    c() {
      e = G("p"), e.textContent = "Loading…";
    },
    m(t, l) {
      M(t, e, l);
    },
    p: J,
    i: J,
    o: J,
    d(t) {
      t && H(e);
    }
  };
}
function Gl(n) {
  let e, t = (
    /*validationEntry*/
    n[23].description + ""
  ), l;
  return {
    c() {
      e = G("span"), l = ne(t), v(e, "class", "validation-xml-container__description svelte-1t9loaq");
    },
    m(i, r) {
      M(i, e, r), P(e, l);
    },
    p(i, r) {
      r & /*validationEntries*/
      128 && t !== (t = /*validationEntry*/
      i[23].description + "") && _e(l, t);
    },
    d(i) {
      i && H(e);
    }
  };
}
function ou(n) {
  let e, t, l, i, r;
  t = new wa({ props: { svgStyles: "fill: #004552" } });
  function s() {
    return (
      /*click_handler_3*/
      n[20](
        /*idx*/
        n[25]
      )
    );
  }
  return {
    c() {
      e = G("button"), V(t.$$.fragment), v(e, "type", "button"), v(e, "class", "toggle-btn svelte-1t9loaq"), v(e, "aria-expanded", "false"), v(e, "title", "Expand");
    },
    m(o, a) {
      M(o, e, a), N(t, e, null), l = !0, i || (r = K(e, "click", s), i = !0);
    },
    p(o, a) {
      n = o;
    },
    i(o) {
      l || (C(t.$$.fragment, o), l = !0);
    },
    o(o) {
      k(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && H(e), q(t), i = !1, r();
    }
  };
}
function uu(n) {
  let e, t, l, i, r;
  t = new Ia({ props: { svgStyles: "fill: #004552" } });
  function s() {
    return (
      /*click_handler_2*/
      n[19](
        /*idx*/
        n[25]
      )
    );
  }
  return {
    c() {
      e = G("button"), V(t.$$.fragment), v(e, "type", "button"), v(e, "class", "toggle-btn svelte-1t9loaq"), v(e, "aria-expanded", "true"), v(e, "title", "Collapse");
    },
    m(o, a) {
      M(o, e, a), N(t, e, null), l = !0, i || (r = K(e, "click", s), i = !0);
    },
    p(o, a) {
      n = o;
    },
    i(o) {
      l || (C(t.$$.fragment, o), l = !0);
    },
    o(o) {
      k(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && H(e), q(t), i = !1, r();
    }
  };
}
function Ol(n) {
  let e, t, l, i = (
    /*validationEntry*/
    n[23].xml + ""
  ), r;
  return {
    c() {
      e = G("div"), t = G("div"), l = G("pre"), r = ne(i), v(l, "class", "svelte-1t9loaq"), v(t, "class", "xml-viewer__box svelte-1t9loaq"), v(e, "class", "xml-viewer svelte-1t9loaq");
    },
    m(s, o) {
      M(s, e, o), P(e, t), P(t, l), P(l, r);
    },
    p(s, o) {
      o & /*validationEntries*/
      128 && i !== (i = /*validationEntry*/
      s[23].xml + "") && _e(r, i);
    },
    d(s) {
      s && H(e);
    }
  };
}
function Ul(n) {
  let e, t, l, i = (
    /*validationEntry*/
    n[23].name + ""
  ), r, s, o, a, u, c, f, d, g, h, p, _ = (
    /*openSet*/
    n[8].has(
      /*idx*/
      n[25]
    )
  ), y, A, E = (
    /*validationEntry*/
    n[23].description && Gl(n)
  );
  c = new Ks({ props: { svgStyles: "fill: #FF203A" } });
  const b = [uu, ou], O = [];
  function S(L, W) {
    return W & /*openSet*/
    256 && (d = null), d == null && (d = !!/*openSet*/
    L[8].has(
      /*idx*/
      L[25]
    )), d ? 0 : 1;
  }
  g = S(n, -1), h = O[g] = b[g](n);
  let m = _ && Ol(n);
  return {
    c() {
      e = G("div"), t = G("div"), l = G("span"), r = ne(i), s = B(), E && E.c(), o = B(), a = G("div"), u = G("button"), V(c.$$.fragment), f = B(), h.c(), p = B(), m && m.c(), y = B(), v(l, "class", "validation-xml-container__name svelte-1t9loaq"), v(u, "type", "button"), v(u, "class", "delete-btn svelte-1t9loaq"), v(u, "title", "Remove"), v(a, "class", "validaton-xml-container__actions svelte-1t9loaq"), v(t, "class", "validation-xml-container__meta svelte-1t9loaq"), v(e, "class", "validation-xml-container svelte-1t9loaq");
    },
    m(L, W) {
      M(L, e, W), P(e, t), P(t, l), P(l, r), P(t, s), E && E.m(t, null), P(t, o), P(t, a), P(a, u), N(c, u, null), P(a, f), O[g].m(a, null), P(e, p), m && m.m(e, null), P(e, y), A = !0;
    },
    p(L, W) {
      (!A || W & /*validationEntries*/
      128) && i !== (i = /*validationEntry*/
      L[23].name + "") && _e(r, i), /*validationEntry*/
      L[23].description ? E ? E.p(L, W) : (E = Gl(L), E.c(), E.m(t, o)) : E && (E.d(1), E = null);
      let D = g;
      g = S(L, W), g === D ? O[g].p(L, W) : (re(), k(O[D], 1, 1, () => {
        O[D] = null;
      }), se(), h = O[g], h ? h.p(L, W) : (h = O[g] = b[g](L), h.c()), C(h, 1), h.m(a, null)), W & /*openSet*/
      256 && (_ = /*openSet*/
      L[8].has(
        /*idx*/
        L[25]
      )), _ ? m ? m.p(L, W) : (m = Ol(L), m.c(), m.m(e, y)) : m && (m.d(1), m = null);
    },
    i(L) {
      A || (C(c.$$.fragment, L), C(h), A = !0);
    },
    o(L) {
      k(c.$$.fragment, L), k(h), A = !1;
    },
    d(L) {
      L && H(e), E && E.d(), q(c), O[g].d(), m && m.d();
    }
  };
}
function cu(n) {
  let e, t, l, i, r = Ie(
    /*pluginGroups*/
    n[0]
  ), s = [];
  for (let a = 0; a < r.length; a += 1)
    s[a] = Tl(Dl(n, r, a));
  let o = (
    /*currentPlugin*/
    n[3] && Fl(n)
  );
  return {
    c() {
      e = G("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      t = B(), o && o.c(), l = Ae(), v(e, "class", "validation-groups svelte-1t9loaq");
    },
    m(a, u) {
      M(a, e, u);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      M(a, t, u), o && o.m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      if (u & /*selectedIdx, pluginGroups, activePluginIdx, selectPlugin, selectGroup*/
      1543) {
        r = Ie(
          /*pluginGroups*/
          a[0]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const f = Dl(a, r, c);
          s[c] ? s[c].p(f, u) : (s[c] = Tl(f), s[c].c(), s[c].m(e, null));
        }
        for (; c < s.length; c += 1)
          s[c].d(1);
        s.length = r.length;
      }
      /*currentPlugin*/
      a[3] ? o ? (o.p(a, u), u & /*currentPlugin*/
      8 && C(o, 1)) : (o = Fl(a), o.c(), C(o, 1), o.m(l.parentNode, l)) : o && (re(), k(o, 1, 1, () => {
        o = null;
      }), se());
    },
    i(a) {
      i || (C(o), i = !0);
    },
    o(a) {
      k(o), i = !1;
    },
    d(a) {
      a && (H(e), H(t), H(l)), Ve(s, a), o && o.d(a);
    }
  };
}
function fu(n, e, t) {
  let l, i, r;
  var s, o, a;
  let { pluginGroups: u = [] } = e, c = null, f = null, d = "", g = !1, h = "", p = null, _ = [], y = /* @__PURE__ */ new Set();
  function A(D) {
    return Nt(this, void 0, void 0, function* () {
      t(5, g = !0), t(6, h = ""), t(4, d = ""), t(7, _ = []), t(8, y = /* @__PURE__ */ new Set()), p == null || p.abort(), p = new AbortController();
      try {
        const I = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": eu, "../../assets/validations/ied-editor.xml": tu, "../../assets/validations/substation-explorer.xml": nu, "../../assets/validations/template-generator.xml": lu }))[`../../assets/validations/${D}.xml`], import.meta.url).href, U = yield fetch(I, {
          cache: "no-cache",
          signal: p.signal
        });
        if (!U.ok) {
          if (U.status === 404) {
            t(4, d = "(No XML found for this plugin.)");
            return;
          }
          throw new Error(`HTTP ${U.status}`);
        }
        t(4, d = yield U.text());
        const X = new DOMParser().parseFromString(d, "application/xml");
        if (X.querySelector("parsererror"))
          throw new Error("Invalid XML format.");
        const ke = new XMLSerializer(), ve = Array.from(X.getElementsByTagName("validation"));
        t(7, _ = ve.map((j, w) => {
          var Z, me, be, He, Fe, de, Ge;
          const je = ((Z = j.getAttribute("name")) === null || Z === void 0 ? void 0 : Z.trim()) || ((me = j.getAttribute("id")) === null || me === void 0 ? void 0 : me.trim()) || ((He = (be = j.querySelector("name")) === null || be === void 0 ? void 0 : be.textContent) === null || He === void 0 ? void 0 : He.trim()) || `Validation ${w + 1}`, Ye = ((Fe = j.getAttribute("description")) === null || Fe === void 0 ? void 0 : Fe.trim()) || ((Ge = (de = j.querySelector("description")) === null || de === void 0 ? void 0 : de.textContent) === null || Ge === void 0 ? void 0 : Ge.trim()) || void 0, Ke = ke.serializeToString(j);
          return { name: je, description: Ye, xml: Ke };
        })), t(8, y = /* @__PURE__ */ new Set());
      } catch (I) {
        if ((I == null ? void 0 : I.name) === "AbortError")
          return;
        t(6, h = (I == null ? void 0 : I.message) || "Failed to load XML.");
      } finally {
        t(5, g = !1);
      }
    });
  }
  function E(D) {
    var I;
    const U = u[D];
    t(1, c = D), t(2, f = !((I = U == null ? void 0 : U.plugins) === null || I === void 0) && I.length ? 0 : null);
  }
  function b(D, I) {
    t(1, c = D), t(2, f = I);
  }
  function O(D) {
    y.has(D) ? y.delete(D) : y.add(D), t(8, y = new Set(y));
  }
  const S = (D) => E(D), m = (D, I) => b(D, I), L = (D) => O(D), W = (D) => O(D);
  return n.$$set = (D) => {
    "pluginGroups" in D && t(0, u = D.pluginGroups);
  }, n.$$.update = () => {
    n.$$.dirty & /*pluginGroups, selectedIdx, _a, _b*/
    12291 && u != null && u.length && (c == null || c >= u.length) && (t(1, c = 0), t(2, f = !(t(13, o = t(12, s = u[0]) === null || s === void 0 ? void 0 : s.plugins) === null || o === void 0) && o.length ? 0 : null)), n.$$.dirty & /*selectedIdx, pluginGroups*/
    3 && t(16, l = c != null ? u[c] : null), n.$$.dirty & /*currentGroup, activePluginIdx*/
    65540 && t(3, i = l && f != null ? l.plugins[f] : null), n.$$.dirty & /*currentPlugin, _c*/
    16392 && t(15, r = t(14, a = i == null ? void 0 : i.id) !== null && a !== void 0 ? a : null), n.$$.dirty & /*currentPluginId*/
    32768 && r && A(r);
  }, [
    u,
    c,
    f,
    i,
    d,
    g,
    h,
    _,
    y,
    E,
    b,
    O,
    s,
    o,
    a,
    r,
    l,
    S,
    m,
    L,
    W
  ];
}
class du extends x {
  constructor(e) {
    super(), $(this, e, fu, cu, Q, { pluginGroups: 0 });
  }
}
function gu(n) {
  let e, t, l, i, r, s, o, a;
  return l = new on({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeIndex: 1
    }
  }), l.$on(
    "click",
    /*handleBreadcrumbClick*/
    n[8]
  ), r = new pt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [hu] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*startProcess*/
    n[9]
  ), o = new Bo({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), o.$on(
    "editRequested",
    /*startEditing*/
    n[10]
  ), {
    c() {
      e = G("div"), t = G("div"), V(l.$$.fragment), i = B(), V(r.$$.fragment), s = B(), V(o.$$.fragment), v(t, "class", "header svelte-evkqad"), v(e, "class", "step-content svelte-evkqad");
    },
    m(u, c) {
      M(u, e, c), P(e, t), N(l, t, null), P(t, i), N(r, t, null), P(e, s), N(o, e, null), a = !0;
    },
    p(u, c) {
      const f = {};
      c & /*breadcrumbs*/
      128 && (f.breadcrumbs = /*breadcrumbs*/
      u[7]), l.$set(f);
      const d = {};
      c & /*currentProcess*/
      1 && (d.disabled = !/*currentProcess*/
      u[0]), c & /*$$scope*/
      524288 && (d.$$scope = { dirty: c, ctx: u }), r.$set(d);
      const g = {};
      c & /*pluginGroups*/
      8 && (g.pluginGroups = /*pluginGroups*/
      u[3]), o.$set(g);
    },
    i(u) {
      a || (C(l.$$.fragment, u), C(r.$$.fragment, u), C(o.$$.fragment, u), a = !0);
    },
    o(u) {
      k(l.$$.fragment, u), k(r.$$.fragment, u), k(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && H(e), q(l), q(r), q(o);
    }
  };
}
function mu(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, h, p, _, y, A;
  t = new li({}), t.$on(
    "back",
    /*exitEditing*/
    n[11]
  ), i = new To({
    props: {
      currentId: (
        /*currentStepId*/
        n[2]
      ),
      visited: (
        /*visitedSteps*/
        n[4]
      )
    }
  }), i.$on(
    "select",
    /*handleStepSelect*/
    n[12]
  );
  const E = [_u, pu], b = [];
  function O(S, m) {
    return (
      /*currentStepId*/
      S[2] === "process-definition" ? 0 : 1
    );
  }
  return h = O(n), p = b[h] = E[h](n), {
    c() {
      e = G("div"), V(t.$$.fragment), l = B(), V(i.$$.fragment), r = B(), s = G("div"), o = G("button"), a = ne("Back"), u = B(), c = G("button"), f = ne("Next"), d = B(), g = G("div"), p.c(), v(o, "type", "button"), v(o, "class", "btn btn--back svelte-evkqad"), o.disabled = /*isAtFirstStep*/
      n[5], v(o, "aria-label", "Previous step"), v(c, "type", "button"), v(c, "class", "btn btn--next svelte-evkqad"), c.disabled = /*isAtLastStep*/
      n[6], v(c, "aria-label", "Next step"), v(s, "class", "stepper-navigation svelte-evkqad"), v(e, "class", "stepper svelte-evkqad"), v(g, "class", "step-content svelte-evkqad");
    },
    m(S, m) {
      M(S, e, m), N(t, e, null), P(e, l), N(i, e, null), P(e, r), P(e, s), P(s, o), P(o, a), P(s, u), P(s, c), P(c, f), M(S, d, m), M(S, g, m), b[h].m(g, null), _ = !0, y || (A = [
        K(
          o,
          "click",
          /*goToPreviousStep*/
          n[14]
        ),
        K(
          c,
          "click",
          /*goToNextStep*/
          n[13]
        )
      ], y = !0);
    },
    p(S, m) {
      const L = {};
      m & /*currentStepId*/
      4 && (L.currentId = /*currentStepId*/
      S[2]), m & /*visitedSteps*/
      16 && (L.visited = /*visitedSteps*/
      S[4]), i.$set(L), (!_ || m & /*isAtFirstStep*/
      32) && (o.disabled = /*isAtFirstStep*/
      S[5]), (!_ || m & /*isAtLastStep*/
      64) && (c.disabled = /*isAtLastStep*/
      S[6]);
      let W = h;
      h = O(S), h === W ? b[h].p(S, m) : (re(), k(b[W], 1, 1, () => {
        b[W] = null;
      }), se(), p = b[h], p ? p.p(S, m) : (p = b[h] = E[h](S), p.c()), C(p, 1), p.m(g, null));
    },
    i(S) {
      _ || (C(t.$$.fragment, S), C(i.$$.fragment, S), C(p), _ = !0);
    },
    o(S) {
      k(t.$$.fragment, S), k(i.$$.fragment, S), k(p), _ = !1;
    },
    d(S) {
      S && (H(e), H(d), H(g)), q(t), q(i), b[h].d(), y = !1, he(A);
    }
  };
}
function hu(n) {
  let e;
  return {
    c() {
      e = ne("START PROCESS");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function pu(n) {
  let e, t, l, i, r, s, o;
  return t = new on({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeIndex: 2
    }
  }), t.$on(
    "click",
    /*handleBreadcrumbClick*/
    n[8]
  ), i = new pt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Add validation",
      $$slots: { default: [bu] },
      $$scope: { ctx: n }
    }
  }), i.$on("click", Wl), s = new du({
    props: {
      pluginGroups: (
        /*pluginGroups*/
        n[3]
      ),
      currentProcess: (
        /*currentProcess*/
        n[0]
      ),
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeBreadcrumbIndex: 2
    }
  }), s.$on("addValidation", Wl), s.$on(
    "breadcrumbClick",
    /*handleBreadcrumbClick*/
    n[8]
  ), {
    c() {
      e = G("div"), V(t.$$.fragment), l = B(), V(i.$$.fragment), r = B(), V(s.$$.fragment), v(e, "class", "header svelte-evkqad");
    },
    m(a, u) {
      M(a, e, u), N(t, e, null), P(e, l), N(i, e, null), M(a, r, u), N(s, a, u), o = !0;
    },
    p(a, u) {
      const c = {};
      u & /*breadcrumbs*/
      128 && (c.breadcrumbs = /*breadcrumbs*/
      a[7]), t.$set(c);
      const f = {};
      u & /*currentProcess*/
      1 && (f.disabled = !/*currentProcess*/
      a[0]), u & /*$$scope*/
      524288 && (f.$$scope = { dirty: u, ctx: a }), i.$set(f);
      const d = {};
      u & /*pluginGroups*/
      8 && (d.pluginGroups = /*pluginGroups*/
      a[3]), u & /*currentProcess*/
      1 && (d.currentProcess = /*currentProcess*/
      a[0]), u & /*breadcrumbs*/
      128 && (d.breadcrumbs = /*breadcrumbs*/
      a[7]), s.$set(d);
    },
    i(a) {
      o || (C(t.$$.fragment, a), C(i.$$.fragment, a), C(s.$$.fragment, a), o = !0);
    },
    o(a) {
      k(t.$$.fragment, a), k(i.$$.fragment, a), k(s.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (H(e), H(r)), q(t), q(i), q(s, a);
    }
  };
}
function _u(n) {
  let e, t, l, i, r;
  return t = new on({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeIndex: 1
    }
  }), t.$on(
    "click",
    /*handleBreadcrumbClick*/
    n[8]
  ), i = new xo({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), {
    c() {
      e = G("div"), V(t.$$.fragment), l = B(), V(i.$$.fragment), v(e, "class", "header svelte-evkqad");
    },
    m(s, o) {
      M(s, e, o), N(t, e, null), M(s, l, o), N(i, s, o), r = !0;
    },
    p(s, o) {
      const a = {};
      o & /*breadcrumbs*/
      128 && (a.breadcrumbs = /*breadcrumbs*/
      s[7]), t.$set(a);
      const u = {};
      o & /*pluginGroups*/
      8 && (u.pluginGroups = /*pluginGroups*/
      s[3]), i.$set(u);
    },
    i(s) {
      r || (C(t.$$.fragment, s), C(i.$$.fragment, s), r = !0);
    },
    o(s) {
      k(t.$$.fragment, s), k(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && (H(e), H(l)), q(t), q(i, s);
    }
  };
}
function bu(n) {
  let e;
  return {
    c() {
      e = ne("ADD NEW VALIDATION");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function vu(n) {
  let e, t, l, i;
  const r = [mu, gu], s = [];
  function o(a, u) {
    return (
      /*isEditing*/
      a[1] ? 0 : 1
    );
  }
  return t = o(n), l = s[t] = r[t](n), {
    c() {
      e = G("div"), l.c(), v(e, "class", "page-content svelte-evkqad");
    },
    m(a, u) {
      M(a, e, u), s[t].m(e, null), i = !0;
    },
    p(a, [u]) {
      let c = t;
      t = o(a), t === c ? s[t].p(a, u) : (re(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), l = s[t], l ? l.p(a, u) : (l = s[t] = r[t](a), l.c()), C(l, 1), l.m(e, null));
    },
    i(a) {
      i || (C(l), i = !0);
    },
    o(a) {
      k(l), i = !1;
    },
    d(a) {
      a && H(e), s[t].d();
    }
  };
}
function Wl() {
  alert("Add New Validation clicked!");
}
function Cu(n, e, t) {
  let l, i, r, { currentProcess: s = null } = e;
  const o = ["process-definition", "validator-configuration"], a = Xe();
  let u = !1, c = 0, f = o[0], d = [], g = [];
  function h(S) {
    S.detail.index === 0 && (mt.set(!0), a("back"));
  }
  function p() {
    s && a("start", s);
  }
  function _() {
    t(1, u = !0), mt.set(!1), t(15, c = 0), t(4, g = []);
  }
  function y() {
    t(1, u = !1), mt.set(!0), a("back");
  }
  function A(S) {
    const m = o.indexOf(S.detail);
    m !== -1 && t(15, c = m);
  }
  function E(S) {
    g.includes(S) || t(4, g = [...g, S]);
  }
  function b() {
    i || (E(f), t(15, c += 1), a("next"));
  }
  function O() {
    l || (t(15, c -= 1), a("previous"));
  }
  return n.$$set = (S) => {
    "currentProcess" in S && t(0, s = S.currentProcess);
  }, n.$$.update = () => {
    n.$$.dirty & /*currentStepIndex*/
    32768 && t(2, f = o[c]), n.$$.dirty & /*currentStepIndex*/
    32768 && t(5, l = c === 0), n.$$.dirty & /*currentStepIndex*/
    32768 && t(6, i = c === o.length - 1), n.$$.dirty & /*currentProcess, isEditing*/
    3 && t(7, r = Zo(s, { edit: u })), n.$$.dirty & /*currentProcess*/
    1 && t(3, d = No(s));
  }, [
    s,
    u,
    f,
    d,
    g,
    l,
    i,
    r,
    h,
    p,
    _,
    y,
    A,
    b,
    O,
    c
  ];
}
class Iu extends x {
  constructor(e) {
    super(), $(this, e, Cu, vu, Q, { currentProcess: 0 });
  }
}
function yu(n) {
  let e, t;
  return e = new ni({
    props: {
      items: (
        /*plugins*/
        n[0].map(Bl)
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
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*plugins*/
      1 && (r.items = /*plugins*/
      l[0].map(Bl)), i & /*visited*/
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
const Bl = (n) => ({ id: n.id, label: n.name });
function Au(n, e, t) {
  let l, { plugins: i = [] } = e, { visited: r = [] } = e, { currentId: s = null } = e, { pluginStatus: o = {} } = e;
  const a = Xe(), u = (c) => {
    const f = i.find((d) => d.id === c.detail);
    f && a("select", f);
  };
  return n.$$set = (c) => {
    "plugins" in c && t(0, i = c.plugins), "visited" in c && t(1, r = c.visited), "currentId" in c && t(2, s = c.currentId), "pluginStatus" in c && t(3, o = c.pluginStatus);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    9 && t(4, l = i.reduce(
      (c, f) => {
        const d = o[f.id];
        return c[f.id] = d ?? "", c;
      },
      {}
    ));
  }, [i, r, s, o, l, u];
}
class ku extends x {
  constructor(e) {
    super(), $(this, e, Au, yu, Q, {
      plugins: 0,
      visited: 1,
      currentId: 2,
      pluginStatus: 3
    });
  }
}
function Zl(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && en(n)
  );
  return {
    c() {
      l && l.c(), t = Ae();
    },
    m(i, r) {
      l && l.m(i, r), M(i, t, r);
    },
    p(i, r) {
      /*tagName*/
      i[4] ? e ? Q(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = en(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = en(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && H(t), l && l.d(i);
    }
  };
}
function en(n) {
  let e, t, l, i;
  return {
    c() {
      e = G(
        /*tagName*/
        n[4]
      ), St(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-uyxnge" });
    },
    m(r, s) {
      M(r, e, s), l || (i = ee(t = Su.call(null, e, {
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
      t && pe(t.update) && s & /*doc, editCount*/
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
      r && H(e), l = !1, i();
    }
  };
}
function wu(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, h;
  t = new li({}), t.$on(
    "back",
    /*exitWorkflow*/
    n[9]
  ), i = new ku({
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
    n[4] && Zl(n)
  );
  return {
    c() {
      e = G("div"), V(t.$$.fragment), l = B(), V(i.$$.fragment), r = B(), s = G("div"), o = G("button"), o.textContent = "Back", a = B(), u = G("button"), u.textContent = "Next", c = B(), p && p.c(), f = Ae(), v(o, "class", "back-button svelte-uyxnge"), v(u, "class", "next-button svelte-uyxnge"), v(s, "class", "stepper-navigation svelte-uyxnge"), v(e, "class", "stepper svelte-uyxnge");
    },
    m(_, y) {
      M(_, e, y), N(t, e, null), P(e, l), N(i, e, null), P(e, r), P(e, s), P(s, o), P(s, a), P(s, u), M(_, c, y), p && p.m(_, y), M(_, f, y), d = !0, g || (h = [
        K(
          o,
          "click",
          /*previousPlugin*/
          n[8]
        ),
        K(
          u,
          "click",
          /*nextPlugin*/
          n[7]
        )
      ], g = !0);
    },
    p(_, [y]) {
      const A = {};
      y & /*plugins*/
      4 && (A.plugins = /*plugins*/
      _[2]), y & /*visited*/
      32 && (A.visited = /*visited*/
      _[5]), y & /*tagName*/
      16 && (A.currentId = /*tagName*/
      _[4]), y & /*pluginStatus*/
      8 && (A.pluginStatus = /*pluginStatus*/
      _[3]), i.$set(A), /*tagName*/
      _[4] ? p ? p.p(_, y) : (p = Zl(_), p.c(), p.m(f.parentNode, f)) : p && (p.d(1), p = null);
    },
    i(_) {
      d || (C(t.$$.fragment, _), C(i.$$.fragment, _), d = !0);
    },
    o(_) {
      k(t.$$.fragment, _), k(i.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && (H(e), H(c), H(f)), q(t), q(i), p && p.d(_), g = !1, he(h);
    }
  };
}
function Su(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Lu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, { plugins: s = [] } = e, o = null, a = [];
  const u = ["check", "warning", "error"];
  let c = {};
  const f = Xe();
  function d(A) {
    return Nt(this, void 0, void 0, function* () {
      if (yield jo(A), t(4, o = A.id), !a.includes(A.id)) {
        t(5, a = [...a, A.id]);
        const E = s.findIndex((b) => b.id === A.id);
        t(3, c = Object.assign(Object.assign({}, c), {
          [A.id]: u[E % u.length]
        }));
      }
    });
  }
  function g() {
    p(1);
  }
  function h() {
    p(-1);
  }
  function p(A) {
    const E = s.findIndex((b) => b.id === o);
    d(s[(E + A + s.length) % s.length]);
  }
  Ne(() => {
    s.length && (zo(s).catch(console.error), d(s[0])), mt.set(!1);
  });
  function _() {
    mt.set(!0), f("exit");
  }
  const y = (A) => d(A.detail);
  return n.$$set = (A) => {
    "doc" in A && t(0, l = A.doc), "editCount" in A && t(1, i = A.editCount), "host" in A && t(10, r = A.host), "plugins" in A && t(2, s = A.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && s.reduce(
      (A, E) => {
        const b = c[E.id];
        return A[E.id] = b ?? "", A;
      },
      {}
    );
  }, [
    l,
    i,
    s,
    c,
    o,
    a,
    d,
    g,
    h,
    _,
    r,
    y
  ];
}
class Ru extends x {
  constructor(e) {
    super(), $(this, e, Lu, wu, Q, {
      doc: 0,
      editCount: 1,
      host: 10,
      plugins: 2
    });
  }
}
function Eu(n) {
  let e, t;
  return e = new yo({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Du(n) {
  let e, t;
  return e = new Iu({
    props: { currentProcess: (
      /*selected*/
      n[4]
    ) }
  }), e.$on(
    "back",
    /*goBack*/
    n[10]
  ), e.$on(
    "start",
    /*handleStart*/
    n[9]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selected*/
      16 && (r.currentProcess = /*selected*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Pu(n) {
  let e, t;
  return e = new Ru({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Hu(n) {
  let e, t, l, i;
  const r = [Pu, Du, Eu], s = [];
  function o(a, u) {
    return (
      /*running*/
      a[5] ? 0 : (
        /*selected*/
        a[4] ? 1 : 2
      )
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (re(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      k(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function Mu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], o = null, a = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGF0YTwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLWV4cGxvcmVyPC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnN0YXRpb248L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (S) => {
    var m, L;
    return (L = (m = S == null ? void 0 : S.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && L !== void 0 ? L : "";
  }, g = (S) => ({
    id: d(S.querySelector("id")),
    name: d(S.querySelector("name")),
    src: d(S.querySelector("src"))
  }), h = (S) => Array.from(S.querySelectorAll("process")).map((m) => {
    const L = Array.from(m.querySelectorAll("plugins-sequence > group")), W = L.length ? L.map((I) => ({
      title: d(I.querySelector(":scope > title")),
      plugins: Array.from(I.querySelectorAll(":scope > plugin")).map(g)
    })) : void 0, D = W ? W.flatMap((I) => I.plugins) : Array.from(m.querySelectorAll("plugins-sequence > plugin")).map(g);
    return {
      id: d(m.querySelector(":scope > id")),
      version: d(m.querySelector(":scope > version")),
      name: d(m.querySelector(":scope > name")),
      description: d(m.querySelector(":scope > description")),
      plugins: D,
      pluginGroups: W
    };
  });
  let p = null;
  function _() {
    return Nt(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = ""), p == null || p.abort(), p = new AbortController();
      try {
        const S = yield fetch(f, {
          cache: "no-cache",
          signal: p.signal
        });
        if (!S.ok)
          throw new Error(`HTTP ${S.status}`);
        const m = yield S.text(), L = new DOMParser().parseFromString(m, "application/xml");
        if (L.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = h(L));
      } catch (S) {
        if ((S == null ? void 0 : S.name) === "AbortError")
          return;
        t(3, s = []), t(7, c = S.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ne(() => (_(), () => p == null ? void 0 : p.abort()));
  function y(S) {
    t(5, a = S), t(4, o = null);
  }
  function A(S) {
    t(4, o = S.detail);
  }
  function E(S) {
    y(S.detail);
  }
  function b() {
    t(4, o = null);
  }
  function O() {
    t(5, a = null), t(4, o = null);
  }
  return n.$$set = (S) => {
    "doc" in S && t(0, l = S.doc), "editCount" in S && t(1, i = S.editCount), "host" in S && t(2, r = S.host);
  }, [
    l,
    i,
    r,
    s,
    o,
    a,
    u,
    c,
    A,
    E,
    b,
    O
  ];
}
class Tu extends x {
  constructor(e) {
    super(), $(this, e, Mu, Hu, Q, { doc: 0, editCount: 1, host: 2 });
  }
}
function Nl(n) {
  let e, t;
  return e = new Tu({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      k(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Fu(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Nl(n)
  );
  return {
    c() {
      s && s.c(), e = B(), t = G("input"), l = B(), i = G("input"), v(t, "type", "hidden"), v(t, "name", "package-name"), t.value = Yl, v(i, "type", "hidden"), v(i, "name", "package-version"), i.value = Kl;
    },
    m(o, a) {
      s && s.m(o, a), M(o, e, a), M(o, t, a), M(o, l, a), M(o, i, a), r = !0;
    },
    p(o, [a]) {
      /*doc*/
      o[0] || /*dev*/
      o[1] ? s ? (s.p(o, a), a & /*doc, dev*/
      3 && C(s, 1)) : (s = Nl(o), s.c(), C(s, 1), s.m(e.parentNode, e)) : s && (re(), k(s, 1, 1, () => {
        s = null;
      }), se());
    },
    i(o) {
      r || (C(s), r = !0);
    },
    o(o) {
      k(s), r = !1;
    },
    d(o) {
      o && (H(e), H(t), H(l), H(i)), s && s.d(o);
    }
  };
}
function Gu(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class Ou extends x {
  constructor(e) {
    super(), $(this, e, Gu, Fu, Q, { doc: 0, dev: 1, editCount: 2 });
  }
}
class Zu extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Ou({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = Uu();
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
function Uu() {
  const n = `${Yl}-v${Kl}-style`, e = Wu(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Wu() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Zu as default
};
