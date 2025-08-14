var pi = Object.defineProperty;
var vi = (n, e, t) => e in n ? pi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Zt = (n, e, t) => (vi(n, typeof e != "symbol" ? e + "" : e, t), t);
function te() {
}
function z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function kl(n) {
  return n();
}
function cn() {
  return /* @__PURE__ */ Object.create(null);
}
function Ae(n) {
  n.forEach(kl);
}
function Ie(n) {
  return typeof n == "function";
}
function fe(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Ci(n) {
  return Object.keys(n).length === 0;
}
function Ii(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return te;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function pt(n, e, t) {
  n.$$.on_destroy.push(Ii(e, t));
}
function le(n, e, t, l) {
  if (n) {
    const i = Ll(n, e, t, l);
    return n[0](i);
  }
}
function Ll(n, e, t, l) {
  return n[1] && l ? z(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function ie(n, e, t, l) {
  if (n[2] && l) {
    const i = n[2](l(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const a = [], o = Math.max(e.dirty.length, i.length);
      for (let r = 0; r < o; r += 1)
        a[r] = e.dirty[r] | i[r];
      return a;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function ae(n, e, t, l, i, a) {
  if (i) {
    const o = Ll(e, t, l, a);
    n.p(o, i);
  }
}
function re(n) {
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
function oe(n, e) {
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
function $t(n, e, t) {
  return n.set(t), e;
}
function $(n) {
  return n && Ie(n.destroy) ? n.destroy : te;
}
const Ai = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function F(n, e) {
  n.appendChild(e);
}
function T(n, e, t) {
  n.insertBefore(e, t || null);
}
function O(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function rn(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function P(n) {
  return document.createElement(n);
}
function tt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Le(n) {
  return document.createTextNode(n);
}
function Z() {
  return Le(" ");
}
function Se() {
  return Le("");
}
function X(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function B(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const yi = ["width", "height"];
function ue(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && yi.indexOf(l) === -1 ? n[l] = e[l] : B(n, l, e[l]);
}
function Pt(n, e) {
  for (const t in e)
    B(n, t, e[t]);
}
function ki(n, e) {
  Object.keys(e).forEach((t) => {
    Li(n, t, e[t]);
  });
}
function Li(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : B(n, e, t);
}
function Lt(n) {
  return /-/.test(n) ? ki : ue;
}
function Si(n) {
  return Array.from(n.childNodes);
}
function He(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function dn(n, e) {
  n.value = e ?? "";
}
function Ut(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function mt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Ei(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function nt(n, e) {
  return new n(e);
}
let St;
function kt(n) {
  St = n;
}
function Ee() {
  if (!St)
    throw new Error("Function called outside component initialization");
  return St;
}
function We(n) {
  Ee().$$.on_mount.push(n);
}
function It(n) {
  Ee().$$.on_destroy.push(n);
}
function sn() {
  const n = Ee();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const a = Ei(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return i.slice().forEach((o) => {
        o.call(n, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
function Oe(n, e) {
  return Ee().$$.context.set(n, e), e;
}
function Fe(n) {
  return Ee().$$.context.get(n);
}
function Nt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const _t = [], ee = [];
let vt = [];
const en = [], Sl = /* @__PURE__ */ Promise.resolve();
let tn = !1;
function El() {
  tn || (tn = !0, Sl.then(wl));
}
function wi() {
  return El(), Sl;
}
function nn(n) {
  vt.push(n);
}
function Qe(n) {
  en.push(n);
}
const qt = /* @__PURE__ */ new Set();
let gt = 0;
function wl() {
  if (gt !== 0)
    return;
  const n = St;
  do {
    try {
      for (; gt < _t.length; ) {
        const e = _t[gt];
        gt++, kt(e), Ri(e.$$);
      }
    } catch (e) {
      throw _t.length = 0, gt = 0, e;
    }
    for (kt(null), _t.length = 0, gt = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < vt.length; e += 1) {
      const t = vt[e];
      qt.has(t) || (qt.add(t), t());
    }
    vt.length = 0;
  } while (_t.length);
  for (; en.length; )
    en.pop()();
  tn = !1, qt.clear(), kt(n);
}
function Ri(n) {
  if (n.fragment !== null) {
    n.update(), Ae(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(nn);
  }
}
function Hi(n) {
  const e = [], t = [];
  vt.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), vt = e;
}
const Bt = /* @__PURE__ */ new Set();
let ut;
function pe() {
  ut = {
    r: 0,
    c: [],
    p: ut
    // parent group
  };
}
function ve() {
  ut.r || Ae(ut.c), ut = ut.p;
}
function S(n, e) {
  n && n.i && (Bt.delete(n), n.i(e));
}
function R(n, e, t, l) {
  if (n && n.o) {
    if (Bt.has(n))
      return;
    Bt.add(n), ut.c.push(() => {
      Bt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Ze(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Di(n, e) {
  n.d(1), e.delete(n.key);
}
function Mi(n, e) {
  R(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Rl(n, e, t, l, i, a, o, r, s, u, f, c) {
  let d = n.length, m = a.length, _ = d;
  const y = {};
  for (; _--; )
    y[n[_].key] = _;
  const g = [], v = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), p = [];
  for (_ = m; _--; ) {
    const h = c(i, a, _), L = t(h);
    let G = o.get(L);
    G ? p.push(() => G.p(h, e)) : (G = u(L, h), G.c()), v.set(L, g[_] = G), L in y && C.set(L, Math.abs(_ - y[L]));
  }
  const b = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function w(h) {
    S(h, 1), h.m(r, f), o.set(h.key, h), f = h.first, m--;
  }
  for (; d && m; ) {
    const h = g[m - 1], L = n[d - 1], G = h.key, H = L.key;
    h === L ? (f = h.first, d--, m--) : v.has(H) ? !o.has(G) || b.has(G) ? w(h) : M.has(H) ? d-- : C.get(G) > C.get(H) ? (M.add(G), w(h)) : (b.add(H), d--) : (s(L, o), d--);
  }
  for (; d--; ) {
    const h = n[d];
    v.has(h.key) || s(h, o);
  }
  for (; m; )
    w(g[m - 1]);
  return Ae(p), g;
}
function se(n, e) {
  const t = {}, l = {}, i = { $$scope: 1 };
  let a = n.length;
  for (; a--; ) {
    const o = n[a], r = e[a];
    if (r) {
      for (const s in o)
        s in r || (l[s] = 1);
      for (const s in r)
        i[s] || (t[s] = r[s], i[s] = 1);
      n[a] = r;
    } else
      for (const s in o)
        i[s] = 1;
  }
  for (const o in l)
    o in t || (t[o] = void 0);
  return t;
}
function me(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function xe(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function Q(n) {
  n && n.c();
}
function Y(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), nn(() => {
    const a = n.$$.on_mount.map(kl).filter(Ie);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : Ae(a), n.$$.on_mount = [];
  }), i.forEach(nn);
}
function K(n, e) {
  const t = n.$$;
  t.fragment !== null && (Hi(t.after_update), Ae(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Oi(n, e) {
  n.$$.dirty[0] === -1 && (_t.push(n), El(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ge(n, e, t, l, i, a, o = null, r = [-1]) {
  const s = St;
  kt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: te,
    not_equal: i,
    bound: cn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: cn(),
    dirty: r,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  o && o(u.root);
  let f = !1;
  if (u.ctx = t ? t(n, e.props || {}, (c, d, ...m) => {
    const _ = m.length ? m[0] : d;
    return u.ctx && i(u.ctx[c], u.ctx[c] = _) && (!u.skip_bound && u.bound[c] && u.bound[c](_), f && Oi(n, c)), d;
  }) : [], u.update(), f = !0, Ae(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Si(e.target);
      u.fragment && u.fragment.l(c), c.forEach(O);
    } else
      u.fragment && u.fragment.c();
    e.intro && S(n.$$.fragment), Y(n, e.target, e.anchor), wl();
  }
  kt(s);
}
class be {
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
    K(this, 1), this.$destroy = te;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ie(t))
      return te;
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
    this.$$set && !Ci(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ti = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ti);
const Hl = "archive-explorer", Dl = "0.0.1";
var ln = function(n, e) {
  return ln = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, ln(n, e);
};
function ft(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ln(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Pe = function() {
  return Pe = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Pe.apply(this, arguments);
};
function on(n, e, t, l) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function r(f) {
      try {
        u(l.next(f));
      } catch (c) {
        o(c);
      }
    }
    function s(f) {
      try {
        u(l.throw(f));
      } catch (c) {
        o(c);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(r, s);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function Ui(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, l, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = r(0), o.throw = r(1), o.return = r(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function r(u) {
    return function(f) {
      return s([u, f]);
    };
  }
  function s(u) {
    if (l)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; )
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        l = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function $e(n) {
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
function J(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function ke(n, e, t, l = { bubbles: !0 }, i = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const a = new CustomEvent(e, Object.assign(Object.assign({}, l), { detail: t }));
  if (n == null || n.dispatchEvent(a), i && e.startsWith("SMUI")) {
    const o = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, l), { detail: t }));
    n == null || n.dispatchEvent(o), o.defaultPrevented && a.preventDefault();
  }
  return a;
}
function Ct(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (l[a] = n[a]);
  }
  return l;
}
const hn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Bi = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ue(n) {
  let e, t = [];
  n.$on = (i, a) => {
    let o = i, r = () => {
    };
    return e ? r = e(o, a) : t.push([o, a]), o.match(hn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', o), () => {
      r();
    };
  };
  function l(i) {
    const a = n.$$.callbacks[i.type];
    a && a.slice().forEach((o) => o.call(this, i));
  }
  return (i) => {
    const a = [], o = {};
    e = (r, s) => {
      let u = r, f = s, c = !1;
      const d = u.match(hn), m = u.match(Bi), _ = d || m;
      if (u.match(/^SMUI:\w+:/)) {
        const v = u.split(":");
        let C = "";
        for (let p = 0; p < v.length; p++)
          C += p === v.length - 1 ? ":" + v[p] : v[p].split("-").map((b) => b.slice(0, 1).toUpperCase() + b.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${C.split("$")[0]}.`), u = C;
      }
      if (_) {
        const v = u.split(d ? ":" : "$");
        u = v[0];
        const C = v.slice(1).reduce((p, b) => (p[b] = !0, p), {});
        C.passive && (c = c || {}, c.passive = !0), C.nonpassive && (c = c || {}, c.passive = !1), C.capture && (c = c || {}, c.capture = !0), C.once && (c = c || {}, c.once = !0), C.preventDefault && (f = Fi(f)), C.stopPropagation && (f = Pi(f)), C.stopImmediatePropagation && (f = Ni(f)), C.self && (f = Gi(i, f)), C.trusted && (f = ji(f));
      }
      const y = mn(i, u, f, c), g = () => {
        y();
        const v = a.indexOf(g);
        v > -1 && a.splice(v, 1);
      };
      return a.push(g), u in o || (o[u] = mn(i, u, l)), g;
    };
    for (let r = 0; r < t.length; r++)
      e(t[r][0], t[r][1]);
    return {
      destroy: () => {
        for (let r = 0; r < a.length; r++)
          a[r]();
        for (let r of Object.entries(o))
          r[1]();
      }
    };
  };
}
function mn(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function Fi(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Pi(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Ni(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Gi(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function ji(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Te(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    a.substring(0, e.length) === e && (l[a.substring(e.length)] = n[a]);
  }
  return l;
}
function we(n, e) {
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
            const o = l[i];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
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
function zi(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Dt;
  if (typeof Dt == "boolean" && !e)
    return Dt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), o = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = a || o, e || (Dt = l), l;
}
function Wi(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var l = e.x, i = e.y, a = l + t.left, o = i + t.top, r, s;
  if (n.type === "touchstart") {
    var u = n;
    r = u.changedTouches[0].pageX - a, s = u.changedTouches[0].pageY - o;
  } else {
    var f = n;
    r = f.pageX - a, s = f.pageY - o;
  }
  return { x: r, y: s };
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
var ct = (
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
  return n === void 0 && (n = window), Zi(n) ? { passive: !0 } : !1;
}
function Zi(n) {
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
const Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function qi(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Ol(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ol(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Xi(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: qi,
  estimateScrollWidth: Xi,
  matches: Ol
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
var Yi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ki = {
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
var bn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], _n = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Mt = [], Ji = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var l = n.call(this, Pe(Pe({}, e.defaultAdapter), t)) || this;
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
        return Yi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ki;
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
        var i = e.cssClasses, a = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(o), t.layoutInternal());
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
          for (var a = $e(bn), o = a.next(); !o.done; o = a.next()) {
            var r = o.value;
            this.adapter.registerInteractionHandler(r, this.activateHandler);
          }
        } catch (s) {
          l = { error: s };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
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
          for (var a = $e(_n), o = a.next(); !o.done; o = a.next()) {
            var r = o.value;
            this.adapter.registerDocumentInteractionHandler(r, this.deactivateHandler);
          }
        } catch (s) {
          l = { error: s };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (l)
              throw l.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, l;
      try {
        for (var i = $e(bn), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (r) {
        t = { error: r };
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
        for (var i = $e(_n), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (r) {
        t = { error: r };
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
          var a = this.previousActivationEvent, o = a && t !== void 0 && a.type !== t.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var r = t !== void 0 && Mt.length > 0 && Mt.some(function(s) {
              return l.adapter.containsEventTarget(s);
            });
            if (r) {
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
      var t = this, l = e.strings, i = l.VAR_FG_TRANSLATE_START, a = l.VAR_FG_TRANSLATE_END, o = e.cssClasses, r = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), m = d.startPoint, _ = d.endPoint;
        f = m.x + "px, " + m.y + "px", c = _.x + "px, " + _.y + "px";
      }
      this.adapter.updateCssVariable(i, f), this.adapter.updateCssVariable(a, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = Wi(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, l = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, r = a || !o;
      r && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(l), this.fgDeactivationRemovalTimer = setTimeout(function() {
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
        var i = Pe({}, l);
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
        var o = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? l : i();
      var a = Math.floor(l * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, l = t.VAR_FG_SIZE, i = t.VAR_LEFT, a = t.VAR_TOP, o = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(l, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(ct)
);
const { applyPassive: Ot } = Ml, { matches: Qi } = Tl;
function et(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: a, active: o, rippleElement: r, eventTarget: s, activeTarget: u, addClass: f = (_) => n.classList.add(_), removeClass: c = (_) => n.classList.remove(_), addStyle: d = (_, y) => n.style.setProperty(_, y), initPromise: m = Promise.resolve() } = {}) {
  let _, y = Fe("SMUI:addLayoutListener"), g, v = o, C = s, p = u;
  function b() {
    t ? (f("mdc-ripple-surface"), a === "primary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : a === "secondary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : (c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary"))) : (c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), _ && v !== o && (v = o, o ? _.activate() : o === !1 && _.deactivate()), e && !_ ? (_ = new Ji({
      addClass: f,
      browserSupportsCssVars: () => zi(window),
      computeBoundingRect: () => (r || n).getBoundingClientRect(),
      containsEventTarget: (w) => n.contains(w),
      deregisterDocumentInteractionHandler: (w, h) => document.documentElement.removeEventListener(w, h, Ot()),
      deregisterInteractionHandler: (w, h) => (s || n).removeEventListener(w, h, Ot()),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => o ?? Qi(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (w, h) => document.documentElement.addEventListener(w, h, Ot()),
      registerInteractionHandler: (w, h) => (s || n).addEventListener(w, h, Ot()),
      registerResizeHandler: (w) => window.addEventListener("resize", w),
      removeClass: c,
      updateCssVariable: d
    }), m.then(() => {
      _ && (_.init(), _.setUnbounded(l));
    })) : _ && !e && m.then(() => {
      _ && (_.destroy(), _ = void 0);
    }), _ && (C !== s || p !== u) && (C = s, p = u, _.destroy(), requestAnimationFrame(() => {
      _ && (_.init(), _.setUnbounded(l));
    })), !e && l && f("mdc-ripple-upgraded--unbounded");
  }
  b(), y && (g = y(M));
  function M() {
    _ && _.layout();
  }
  return {
    update(w) {
      ({
        ripple: e,
        surface: t,
        unbounded: l,
        disabled: i,
        color: a,
        active: o,
        rippleElement: r,
        eventTarget: s,
        activeTarget: u,
        addClass: f,
        removeClass: c,
        addStyle: d,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => n.classList.add(h), removeClass: (h) => n.classList.remove(h), addStyle: (h, L) => n.style.setProperty(h, L), initPromise: Promise.resolve() }, w)), b();
    },
    destroy() {
      _ && (_.destroy(), _ = void 0, c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), g && g();
    }
  };
}
function xi(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = le(
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
      8192) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? ie(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : re(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function $i(n) {
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
      class: J({
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
  function o(r, s) {
    let u = {
      $$slots: { default: [xi] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < i.length; f += 1)
      u = z(u, i[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (u = z(u, se(i, [
      s & /*tag*/
      16 && { tag: (
        /*tag*/
        r[4]
      ) },
      s & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          r[6],
          .../*use*/
          r[0]
        ]
      },
      s & /*className, context, on*/
      262 && {
        class: J({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button__icon": (
            /*context*/
            r[8] === "button"
          ),
          "mdc-fab__icon": (
            /*context*/
            r[8] === "fab"
          ),
          "mdc-icon-button__icon": (
            /*context*/
            r[8] === "icon-button"
          ),
          "mdc-icon-button__icon--on": (
            /*context*/
            r[8] === "icon-button" && /*on*/
            r[2]
          ),
          "mdc-tab__icon": (
            /*context*/
            r[8] === "tab"
          ),
          "mdc-banner__icon": (
            /*context*/
            r[8] === "banner"
          ),
          "mdc-segmented-button__icon": (
            /*context*/
            r[8] === "segmented-button"
          )
        })
      },
      i[3],
      s & /*svg*/
      128 && me(
        /*svg*/
        r[7] ? { focusable: "false", tabindex: "-1" } : {}
      ),
      s & /*$$restProps*/
      512 && me(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: u };
  }
  return a && (e = nt(a, o(n)), n[12](e)), {
    c() {
      e && Q(e.$$.fragment), t = Se();
    },
    m(r, s) {
      e && Y(e, r, s), T(r, t, s), l = !0;
    },
    p(r, [s]) {
      if (s & /*component*/
      8 && a !== (a = /*component*/
      r[3])) {
        if (e) {
          pe();
          const u = e;
          R(u.$$.fragment, 1, 0, () => {
            K(u, 1);
          }), ve();
        }
        a ? (e = nt(a, o(r, s)), r[12](e), Q(e.$$.fragment), S(e.$$.fragment, 1), Y(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = s & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? se(i, [
          s & /*tag*/
          16 && { tag: (
            /*tag*/
            r[4]
          ) },
          s & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              r[6],
              .../*use*/
              r[0]
            ]
          },
          s & /*className, context, on*/
          262 && {
            class: J({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button__icon": (
                /*context*/
                r[8] === "button"
              ),
              "mdc-fab__icon": (
                /*context*/
                r[8] === "fab"
              ),
              "mdc-icon-button__icon": (
                /*context*/
                r[8] === "icon-button"
              ),
              "mdc-icon-button__icon--on": (
                /*context*/
                r[8] === "icon-button" && /*on*/
                r[2]
              ),
              "mdc-tab__icon": (
                /*context*/
                r[8] === "tab"
              ),
              "mdc-banner__icon": (
                /*context*/
                r[8] === "banner"
              ),
              "mdc-segmented-button__icon": (
                /*context*/
                r[8] === "segmented-button"
              )
            })
          },
          i[3],
          s & /*svg*/
          128 && me(
            /*svg*/
            r[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          s & /*$$restProps*/
          512 && me(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        s & /*$$scope*/
        8192 && (u.$$scope = { dirty: s, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      l || (e && S(e.$$.fragment, r), l = !0);
    },
    o(r) {
      e && R(e.$$.fragment, r), l = !1;
    },
    d(r) {
      r && O(t), n[12](null), e && K(e, r);
    }
  };
}
function ea(n, e, t) {
  const l = ["use", "class", "on", "component", "tag", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  const r = Ue(Ee());
  let { use: s = [] } = e, { class: u = "" } = e, { on: f = !1 } = e, c, { component: d = lt } = e, { tag: m = d === lt ? "i" : void 0 } = e;
  const _ = d === ua, y = Fe("SMUI:icon:context");
  function g() {
    return c.getElement();
  }
  function v(C) {
    ee[C ? "unshift" : "push"](() => {
      c = C, t(5, c);
    });
  }
  return n.$$set = (C) => {
    e = z(z({}, e), De(C)), t(9, i = oe(e, l)), "use" in C && t(0, s = C.use), "class" in C && t(1, u = C.class), "on" in C && t(2, f = C.on), "component" in C && t(3, d = C.component), "tag" in C && t(4, m = C.tag), "$$scope" in C && t(13, o = C.$$scope);
  }, [
    s,
    u,
    f,
    d,
    m,
    c,
    r,
    _,
    y,
    i,
    g,
    a,
    v,
    o
  ];
}
class ta extends be {
  constructor(e) {
    super(), ge(this, e, ea, $i, fe, {
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
function na(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Xt(n)
  );
  return {
    c() {
      i && i.c(), t = Se();
    },
    m(a, o) {
      i && i.m(a, o), T(a, t, o), l = !0;
    },
    p(a, o) {
      /*tag*/
      a[1] ? e ? fe(
        e,
        /*tag*/
        a[1]
      ) ? (i.d(1), i = Xt(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : i.p(a, o) : (i = Xt(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      a[1]);
    },
    i(a) {
      l || (S(i, a), l = !0);
    },
    o(a) {
      R(i, a), l = !1;
    },
    d(a) {
      a && O(t), i && i.d(a);
    }
  };
}
function la(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Yt(n)
  );
  return {
    c() {
      l && l.c(), t = Se();
    },
    m(i, a) {
      l && l.m(i, a), T(i, t, a);
    },
    p(i, a) {
      /*tag*/
      i[1] ? e ? fe(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = Yt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, a) : (l = Yt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: te,
    o: te,
    d(i) {
      i && O(t), l && l.d(i);
    }
  };
}
function ia(n) {
  let e, t, l, i, a;
  const o = (
    /*#slots*/
    n[8].default
  ), r = le(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let s = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = z(u, s[f]);
  return {
    c() {
      e = tt("svg"), r && r.c(), Pt(e, u);
    },
    m(f, c) {
      T(f, e, c), r && r.m(e, null), n[9](e), l = !0, i || (a = [
        $(t = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(f, c) {
      r && r.p && (!l || c & /*$$scope*/
      128) && ae(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        l ? ie(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : re(
          /*$$scope*/
          f[7]
        ),
        null
      ), Pt(e, u = se(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && Ie(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (S(r, f), l = !0);
    },
    o(f) {
      R(r, f), l = !1;
    },
    d(f) {
      f && O(e), r && r.d(f), n[9](null), i = !1, Ae(a);
    }
  };
}
function Xt(n) {
  let e, t, l, i, a;
  const o = (
    /*#slots*/
    n[8].default
  ), r = le(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let s = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = z(u, s[f]);
  return {
    c() {
      e = P(
        /*tag*/
        n[1]
      ), r && r.c(), Lt(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(f, c) {
      T(f, e, c), r && r.m(e, null), n[11](e), l = !0, i || (a = [
        $(t = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(f, c) {
      r && r.p && (!l || c & /*$$scope*/
      128) && ae(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        l ? ie(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : re(
          /*$$scope*/
          f[7]
        ),
        null
      ), Lt(
        /*tag*/
        f[1]
      )(e, u = se(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && Ie(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (S(r, f), l = !0);
    },
    o(f) {
      R(r, f), l = !1;
    },
    d(f) {
      f && O(e), r && r.d(f), n[11](null), i = !1, Ae(a);
    }
  };
}
function Yt(n) {
  let e, t, l, i, a = [
    /*$$restProps*/
    n[5]
  ], o = {};
  for (let r = 0; r < a.length; r += 1)
    o = z(o, a[r]);
  return {
    c() {
      e = P(
        /*tag*/
        n[1]
      ), Lt(
        /*tag*/
        n[1]
      )(e, o);
    },
    m(r, s) {
      T(r, e, s), n[10](e), l || (i = [
        $(t = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(r, s) {
      Lt(
        /*tag*/
        r[1]
      )(e, o = se(a, [s & /*$$restProps*/
      32 && /*$$restProps*/
      r[5]])), t && Ie(t.update) && s & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        r[0]
      );
    },
    d(r) {
      r && O(e), n[10](null), l = !1, Ae(i);
    }
  };
}
function aa(n) {
  let e, t, l, i;
  const a = [ia, la, na], o = [];
  function r(s, u) {
    return (
      /*tag*/
      s[1] === "svg" ? 0 : (
        /*selfClosing*/
        s[3] ? 1 : 2
      )
    );
  }
  return e = r(n), t = o[e] = a[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(s, u) {
      o[e].m(s, u), T(s, l, u), i = !0;
    },
    p(s, [u]) {
      let f = e;
      e = r(s), e === f ? o[e].p(s, u) : (pe(), R(o[f], 1, 1, () => {
        o[f] = null;
      }), ve(), t = o[e], t ? t.p(s, u) : (t = o[e] = a[e](s), t.c()), S(t, 1), t.m(l.parentNode, l));
    },
    i(s) {
      i || (S(t), i = !0);
    },
    o(s) {
      R(t), i = !1;
    },
    d(s) {
      s && O(l), o[e].d(s);
    }
  };
}
function ra(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let a = oe(e, i), { $$slots: o = {}, $$scope: r } = e, { use: s = [] } = e, { tag: u } = e;
  const f = Ue(Ee());
  let c;
  function d() {
    return c;
  }
  function m(g) {
    ee[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  function _(g) {
    ee[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  function y(g) {
    ee[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  return n.$$set = (g) => {
    e = z(z({}, e), De(g)), t(5, a = oe(e, i)), "use" in g && t(0, s = g.use), "tag" in g && t(1, u = g.tag), "$$scope" in g && t(7, r = g.$$scope);
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
    s,
    u,
    c,
    l,
    f,
    a,
    d,
    r,
    o,
    m,
    _,
    y
  ];
}
class lt extends be {
  constructor(e) {
    super(), ge(this, e, ra, aa, fe, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function sa(n) {
  let e, t, l, i, a;
  const o = (
    /*#slots*/
    n[6].default
  ), r = le(
    o,
    n,
    /*$$scope*/
    n[5],
    null
  );
  let s = [
    /*$$restProps*/
    n[3]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = z(u, s[f]);
  return {
    c() {
      e = tt("svg"), r && r.c(), Pt(e, u);
    },
    m(f, c) {
      T(f, e, c), r && r.m(e, null), n[7](e), l = !0, i || (a = [
        $(t = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[2].call(null, e)
        )
      ], i = !0);
    },
    p(f, [c]) {
      r && r.p && (!l || c & /*$$scope*/
      32) && ae(
        r,
        o,
        f,
        /*$$scope*/
        f[5],
        l ? ie(
          o,
          /*$$scope*/
          f[5],
          c,
          null
        ) : re(
          /*$$scope*/
          f[5]
        ),
        null
      ), Pt(e, u = se(s, [c & /*$$restProps*/
      8 && /*$$restProps*/
      f[3]])), t && Ie(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (S(r, f), l = !0);
    },
    o(f) {
      R(r, f), l = !1;
    },
    d(f) {
      f && O(e), r && r.d(f), n[7](null), i = !1, Ae(a);
    }
  };
}
function oa(n, e, t) {
  const l = ["use", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: r = [] } = e;
  const s = Ue(Ee());
  let u;
  function f() {
    return u;
  }
  function c(d) {
    ee[d ? "unshift" : "push"](() => {
      u = d, t(1, u);
    });
  }
  return n.$$set = (d) => {
    e = z(z({}, e), De(d)), t(3, i = oe(e, l)), "use" in d && t(0, r = d.use), "$$scope" in d && t(5, o = d.$$scope);
  }, [
    r,
    u,
    s,
    i,
    f,
    o,
    a,
    c
  ];
}
class ua extends be {
  constructor(e) {
    super(), ge(this, e, oa, sa, fe, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
const bt = [];
function Ft(n, e = te) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(r) {
    if (fe(n, r) && (n = r, t)) {
      const s = !bt.length;
      for (const u of l)
        u[1](), bt.push(u, n);
      if (s) {
        for (let u = 0; u < bt.length; u += 2)
          bt[u][0](bt[u + 1]);
        bt.length = 0;
      }
    }
  }
  function a(r) {
    i(r(n));
  }
  function o(r, s = te) {
    const u = [r, s];
    return l.add(u), l.size === 1 && (t = e(i, a) || te), r(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function fa(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = le(
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
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, [a]) {
      l && l.p && (!e || a & /*$$scope*/
      8) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? ie(
          t,
          /*$$scope*/
          i[3],
          a,
          null
        ) : re(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ca(n, e, t) {
  let l, { $$slots: i = {}, $$scope: a } = e, { key: o } = e, { value: r } = e;
  const s = Ft(r);
  return pt(n, s, (u) => t(5, l = u)), Oe(o, s), It(() => {
    s.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, o = u.key), "value" in u && t(2, r = u.value), "$$scope" in u && t(3, a = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && $t(s, l = r, l);
  }, [s, o, r, a, i];
}
class Gt extends be {
  constructor(e) {
    super(), ge(this, e, ca, fa, fe, { key: 1, value: 2 });
  }
}
function pn(n) {
  let e;
  return {
    c() {
      e = P("div"), B(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      T(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function da(n) {
  let e, t, l, i;
  const a = (
    /*#slots*/
    n[28].default
  ), o = le(
    a,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let r = (
    /*touch*/
    n[6] && pn()
  );
  return {
    c() {
      e = P("div"), t = Z(), o && o.c(), r && r.c(), l = Se(), B(e, "class", "mdc-button__ripple");
    },
    m(s, u) {
      T(s, e, u), T(s, t, u), o && o.m(s, u), r && r.m(s, u), T(s, l, u), i = !0;
    },
    p(s, u) {
      o && o.p && (!i || u[0] & /*$$scope*/
      1073741824) && ae(
        o,
        a,
        s,
        /*$$scope*/
        s[30],
        i ? ie(
          a,
          /*$$scope*/
          s[30],
          u,
          null
        ) : re(
          /*$$scope*/
          s[30]
        ),
        null
      ), /*touch*/
      s[6] ? r || (r = pn(), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null);
    },
    i(s) {
      i || (S(o, s), i = !0);
    },
    o(s) {
      R(o, s), i = !1;
    },
    d(s) {
      s && (O(e), O(t), O(l)), o && o.d(s), r && r.d(s);
    }
  };
}
function ha(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          et,
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
      class: J({
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
  var a = (
    /*component*/
    n[9]
  );
  function o(r, s) {
    let u = {
      $$slots: { default: [da] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < i.length; f += 1)
      u = z(u, i[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = z(u, se(i, [
      s[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        r[10]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            et,
            {
              ripple: (
                /*ripple*/
                r[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                r[4]
              ),
              disabled: !!/*$$restProps*/
              r[23].disabled,
              addClass: (
                /*addClass*/
                r[19]
              ),
              removeClass: (
                /*removeClass*/
                r[20]
              ),
              addStyle: (
                /*addStyle*/
                r[21]
              )
            }
          ],
          /*forwardEvents*/
          r[17],
          .../*use*/
          r[0]
        ]
      },
      s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: J({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            r[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            r[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            r[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            r[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            r[6]
          ),
          "mdc-card__action": (
            /*context*/
            r[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            r[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            r[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            r[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            r[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            r[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            r[18] === "banner" && /*secondary*/
            r[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            r[18] === "banner" && !/*secondary*/
            r[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            r[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          r[12]
        })
      },
      s[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          r[13]
        ).map(Kt).concat([
          /*style*/
          r[2]
        ]).join(" ")
      },
      s[0] & /*actionProp*/
      65536 && me(
        /*actionProp*/
        r[16]
      ),
      s[0] & /*defaultProp*/
      32768 && me(
        /*defaultProp*/
        r[15]
      ),
      s[0] & /*secondaryProp*/
      16384 && me(
        /*secondaryProp*/
        r[14]
      ),
      s[0] & /*href*/
      128 && { href: (
        /*href*/
        r[7]
      ) },
      s[0] & /*$$restProps*/
      8388608 && me(
        /*$$restProps*/
        r[23]
      )
    ]))), { props: u };
  }
  return a && (e = nt(a, o(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && Q(e.$$.fragment), t = Se();
    },
    m(r, s) {
      e && Y(e, r, s), T(r, t, s), l = !0;
    },
    p(r, s) {
      if (s[0] & /*component*/
      512 && a !== (a = /*component*/
      r[9])) {
        if (e) {
          pe();
          const u = e;
          R(u.$$.fragment, 1, 0, () => {
            K(u, 1);
          }), ve();
        }
        a ? (e = nt(a, o(r, s)), r[29](e), e.$on(
          "click",
          /*handleClick*/
          r[22]
        ), Q(e.$$.fragment), S(e.$$.fragment, 1), Y(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? se(i, [
          s[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            r[10]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                et,
                {
                  ripple: (
                    /*ripple*/
                    r[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    r[4]
                  ),
                  disabled: !!/*$$restProps*/
                  r[23].disabled,
                  addClass: (
                    /*addClass*/
                    r[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    r[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    r[21]
                  )
                }
              ],
              /*forwardEvents*/
              r[17],
              .../*use*/
              r[0]
            ]
          },
          s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: J({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                r[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                r[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                r[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                r[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                r[6]
              ),
              "mdc-card__action": (
                /*context*/
                r[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                r[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                r[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                r[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                r[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                r[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                r[18] === "banner" && /*secondary*/
                r[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                r[18] === "banner" && !/*secondary*/
                r[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                r[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              r[12]
            })
          },
          s[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              r[13]
            ).map(Kt).concat([
              /*style*/
              r[2]
            ]).join(" ")
          },
          s[0] & /*actionProp*/
          65536 && me(
            /*actionProp*/
            r[16]
          ),
          s[0] & /*defaultProp*/
          32768 && me(
            /*defaultProp*/
            r[15]
          ),
          s[0] & /*secondaryProp*/
          16384 && me(
            /*secondaryProp*/
            r[14]
          ),
          s[0] & /*href*/
          128 && { href: (
            /*href*/
            r[7]
          ) },
          s[0] & /*$$restProps*/
          8388608 && me(
            /*$$restProps*/
            r[23]
          )
        ]) : {};
        s[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: s, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      l || (e && S(e.$$.fragment, r), l = !0);
    },
    o(r) {
      e && R(e.$$.fragment, r), l = !1;
    },
    d(r) {
      r && O(t), n[29](null), e && K(e, r);
    }
  };
}
const Kt = ([n, e]) => `${n}: ${e};`;
function ma(n, e, t) {
  let l, i, a;
  const o = [
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
  let r = oe(e, o), { $$slots: s = {}, $$scope: u } = e;
  const f = Ue(Ee());
  let { use: c = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: _ = !0 } = e, { color: y = "primary" } = e, { variant: g = "text" } = e, { touch: v = !1 } = e, { href: C = void 0 } = e, { action: p = "close" } = e, { defaultAction: b = !1 } = e, { secondary: M = !1 } = e, w, h = {}, L = {}, G = Fe("SMUI:button:context"), { component: H = lt } = e, { tag: A = H === lt ? C == null ? "button" : "a" : void 0 } = e, U = r.disabled;
  Oe("SMUI:label:context", "button"), Oe("SMUI:icon:context", "button");
  function E(I) {
    h[I] || t(12, h[I] = !0, h);
  }
  function V(I) {
    (!(I in h) || h[I]) && t(12, h[I] = !1, h);
  }
  function ce(I, j) {
    L[I] != j && (j === "" || j == null ? (delete L[I], t(13, L)) : t(13, L[I] = j, L));
  }
  function de() {
    G === "banner" && ke(Ce(), M ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function Ce() {
    return w.getElement();
  }
  function W(I) {
    ee[I ? "unshift" : "push"](() => {
      w = I, t(11, w);
    });
  }
  return n.$$set = (I) => {
    t(31, e = z(z({}, e), De(I))), t(23, r = oe(e, o)), "use" in I && t(0, c = I.use), "class" in I && t(1, d = I.class), "style" in I && t(2, m = I.style), "ripple" in I && t(3, _ = I.ripple), "color" in I && t(4, y = I.color), "variant" in I && t(5, g = I.variant), "touch" in I && t(6, v = I.touch), "href" in I && t(7, C = I.href), "action" in I && t(24, p = I.action), "defaultAction" in I && t(25, b = I.defaultAction), "secondary" in I && t(8, M = I.secondary), "component" in I && t(9, H = I.component), "tag" in I && t(10, A = I.tag), "$$scope" in I && t(30, u = I.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = G === "dialog:action" && p != null ? { "data-mdc-dialog-action": p } : { action: e.action }), t(15, i = G === "dialog:action" && b ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, a = G === "banner" ? {} : { secondary: e.secondary }), U !== r.disabled) {
      if (w) {
        const I = Ce();
        "blur" in I && I.blur();
      }
      t(27, U = r.disabled);
    }
  }, e = De(e), [
    c,
    d,
    m,
    _,
    y,
    g,
    v,
    C,
    M,
    H,
    A,
    w,
    h,
    L,
    a,
    i,
    l,
    f,
    G,
    E,
    V,
    ce,
    de,
    r,
    p,
    b,
    Ce,
    U,
    s,
    W,
    u
  ];
}
class vn extends be {
  constructor(e) {
    super(), ge(
      this,
      e,
      ma,
      ha,
      fe,
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
var Tt = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Ye = {
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
var ga = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var l = n.call(this, Pe(Pe({}, e.defaultAdapter), t)) || this;
      return l.hasToggledAriaLabel = !1, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Tt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ye;
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
      var t = this.adapter.getAttr(Ye.DATA_ARIA_LABEL_ON), l = this.adapter.getAttr(Ye.DATA_ARIA_LABEL_OFF);
      if (t && l) {
        if (this.adapter.getAttr(Ye.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Ye.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Tt.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(Tt.ICON_BUTTON_ON) : this.adapter.removeClass(Tt.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var l = t ? this.adapter.getAttr(Ye.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Ye.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Ye.ARIA_LABEL, l || "");
      } else
        this.adapter.setAttr(Ye.ARIA_PRESSED, "" + t);
    }, e;
  }(ct)
);
function Cn(n) {
  let e;
  return {
    c() {
      e = P("div"), B(e, "class", "mdc-icon-button__touch");
    },
    m(t, l) {
      T(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function ba(n) {
  let e, t, l, i;
  const a = (
    /*#slots*/
    n[33].default
  ), o = le(
    a,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let r = (
    /*touch*/
    n[8] && Cn()
  );
  return {
    c() {
      e = P("div"), t = Z(), o && o.c(), r && r.c(), l = Se(), B(e, "class", "mdc-icon-button__ripple");
    },
    m(s, u) {
      T(s, e, u), T(s, t, u), o && o.m(s, u), r && r.m(s, u), T(s, l, u), i = !0;
    },
    p(s, u) {
      o && o.p && (!i || u[1] & /*$$scope*/
      64) && ae(
        o,
        a,
        s,
        /*$$scope*/
        s[37],
        i ? ie(
          a,
          /*$$scope*/
          s[37],
          u,
          null
        ) : re(
          /*$$scope*/
          s[37]
        ),
        null
      ), /*touch*/
      s[8] ? r || (r = Cn(), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null);
    },
    i(s) {
      i || (S(o, s), i = !0);
    },
    o(s) {
      R(o, s), i = !1;
    },
    d(s) {
      s && (O(e), O(t), O(l)), o && o.d(s), r && r.d(s);
    }
  };
}
function _a(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          et,
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
      class: J({
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
      ).map(Jt).concat([
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
  function o(r, s) {
    let u = {
      $$slots: { default: [ba] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < i.length; f += 1)
      u = z(u, i[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = z(u, se(i, [
      s[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        r[14]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            et,
            {
              ripple: (
                /*ripple*/
                r[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                r[5]
              ),
              disabled: !!/*$$restProps*/
              r[29].disabled,
              addClass: (
                /*addClass*/
                r[26]
              ),
              removeClass: (
                /*removeClass*/
                r[27]
              ),
              addStyle: (
                /*addStyle*/
                r[28]
              )
            }
          ],
          /*forwardEvents*/
          r[22],
          .../*use*/
          r[1]
        ]
      },
      s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: J({
          [
            /*className*/
            r[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          r[23](
            /*pressed*/
            r[0]
          ) && /*pressed*/
          r[0],
          "mdc-icon-button--touch": (
            /*touch*/
            r[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            r[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            r[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            r[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            r[10] === "mini" || /*size*/
            r[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            r[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            r[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            r[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            r[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            r[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            r[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            r[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (r[24] === "dialog:header" || /*context*/
            r[24] === "dialog:sheet") && /*action*/
            r[12] === "close"
          ),
          .../*internalClasses*/
          r[18]
        })
      },
      s[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          r[19]
        ).map(Jt).concat([
          /*style*/
          r[3]
        ]).join(" ")
      },
      s[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ r[23](
          /*pressed*/
          r[0]
        ) ? null : (
          /*pressed*/
          r[0] ? "true" : "false"
        )
      },
      s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          r[0] ? (
            /*ariaLabelOn*/
            r[6]
          ) : (
            /*ariaLabelOff*/
            r[7]
          )
        )
      },
      s[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          r[6]
        )
      },
      s[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          r[7]
        )
      },
      s[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          r[25]
        )
      },
      s[0] & /*href*/
      2048 && { href: (
        /*href*/
        r[11]
      ) },
      s[0] & /*actionProp*/
      2097152 && me(
        /*actionProp*/
        r[21]
      ),
      s[0] & /*internalAttrs*/
      1048576 && me(
        /*internalAttrs*/
        r[20]
      ),
      s[0] & /*$$restProps*/
      536870912 && me(
        /*$$restProps*/
        r[29]
      )
    ]))), { props: u };
  }
  return a && (e = nt(a, o(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && Q(e.$$.fragment), t = Se();
    },
    m(r, s) {
      e && Y(e, r, s), T(r, t, s), l = !0;
    },
    p(r, s) {
      if (s[0] & /*component*/
      8192 && a !== (a = /*component*/
      r[13])) {
        if (e) {
          pe();
          const u = e;
          R(u.$$.fragment, 1, 0, () => {
            K(u, 1);
          }), ve();
        }
        a ? (e = nt(a, o(r, s)), r[34](e), e.$on(
          "click",
          /*click_handler*/
          r[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          r[36]
        ), Q(e.$$.fragment), S(e.$$.fragment, 1), Y(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? se(i, [
          s[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            r[14]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                et,
                {
                  ripple: (
                    /*ripple*/
                    r[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    r[5]
                  ),
                  disabled: !!/*$$restProps*/
                  r[29].disabled,
                  addClass: (
                    /*addClass*/
                    r[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    r[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    r[28]
                  )
                }
              ],
              /*forwardEvents*/
              r[22],
              .../*use*/
              r[1]
            ]
          },
          s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: J({
              [
                /*className*/
                r[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              r[23](
                /*pressed*/
                r[0]
              ) && /*pressed*/
              r[0],
              "mdc-icon-button--touch": (
                /*touch*/
                r[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                r[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                r[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                r[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                r[10] === "mini" || /*size*/
                r[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                r[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                r[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                r[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                r[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                r[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                r[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                r[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (r[24] === "dialog:header" || /*context*/
                r[24] === "dialog:sheet") && /*action*/
                r[12] === "close"
              ),
              .../*internalClasses*/
              r[18]
            })
          },
          s[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              r[19]
            ).map(Jt).concat([
              /*style*/
              r[3]
            ]).join(" ")
          },
          s[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ r[23](
              /*pressed*/
              r[0]
            ) ? null : (
              /*pressed*/
              r[0] ? "true" : "false"
            )
          },
          s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              r[0] ? (
                /*ariaLabelOn*/
                r[6]
              ) : (
                /*ariaLabelOff*/
                r[7]
              )
            )
          },
          s[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              r[6]
            )
          },
          s[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              r[7]
            )
          },
          s[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              r[25]
            )
          },
          s[0] & /*href*/
          2048 && { href: (
            /*href*/
            r[11]
          ) },
          s[0] & /*actionProp*/
          2097152 && me(
            /*actionProp*/
            r[21]
          ),
          s[0] & /*internalAttrs*/
          1048576 && me(
            /*internalAttrs*/
            r[20]
          ),
          s[0] & /*$$restProps*/
          536870912 && me(
            /*$$restProps*/
            r[29]
          )
        ]) : {};
        s[0] & /*touch*/
        256 | s[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: s, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      l || (e && S(e.$$.fragment, r), l = !0);
    },
    o(r) {
      e && R(e.$$.fragment, r), l = !1;
    },
    d(r) {
      r && O(t), n[34](null), e && K(e, r);
    }
  };
}
const Jt = ([n, e]) => `${n}: ${e};`;
function pa(n, e, t) {
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
  let a = oe(e, i), { $$slots: o = {}, $$scope: r } = e;
  const s = Ue(Ee());
  let u = () => {
  };
  function f(N) {
    return N === u;
  }
  let { use: c = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: _ = !0 } = e, { color: y = void 0 } = e, { toggle: g = !1 } = e, { pressed: v = u } = e, { ariaLabelOn: C = void 0 } = e, { ariaLabelOff: p = void 0 } = e, { touch: b = !1 } = e, { displayFlex: M = !0 } = e, { size: w = "normal" } = e, { href: h = void 0 } = e, { action: L = void 0 } = e, G, H, A = {}, U = {}, E = {}, V = Fe("SMUI:icon-button:context"), ce = Fe("SMUI:icon-button:aria-describedby"), { component: de = lt } = e, { tag: Ce = de === lt ? h == null ? "button" : "a" : void 0 } = e, W = a.disabled;
  Oe("SMUI:icon:context", "icon-button");
  let I = null;
  It(() => {
    H && H.destroy();
  });
  function j(N) {
    return N in A ? A[N] : Ge().classList.contains(N);
  }
  function he(N) {
    A[N] || t(18, A[N] = !0, A);
  }
  function _e(N) {
    (!(N in A) || A[N]) && t(18, A[N] = !1, A);
  }
  function ye(N, Be) {
    U[N] != Be && (Be === "" || Be == null ? (delete U[N], t(19, U)) : t(19, U[N] = Be, U));
  }
  function ne(N) {
    var Be;
    return N in E ? (Be = E[N]) !== null && Be !== void 0 ? Be : null : Ge().getAttribute(N);
  }
  function x(N, Be) {
    E[N] !== Be && t(20, E[N] = Be, E);
  }
  function je(N) {
    t(0, v = N.isOn);
  }
  function Ge() {
    return G.getElement();
  }
  function qe(N) {
    ee[N ? "unshift" : "push"](() => {
      G = N, t(16, G);
    });
  }
  const Xe = () => H && H.handleClick(), dt = () => V === "top-app-bar:navigation" && ke(Ge(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (N) => {
    e = z(z({}, e), De(N)), t(29, a = oe(e, i)), "use" in N && t(1, c = N.use), "class" in N && t(2, d = N.class), "style" in N && t(3, m = N.style), "ripple" in N && t(4, _ = N.ripple), "color" in N && t(5, y = N.color), "toggle" in N && t(30, g = N.toggle), "pressed" in N && t(0, v = N.pressed), "ariaLabelOn" in N && t(6, C = N.ariaLabelOn), "ariaLabelOff" in N && t(7, p = N.ariaLabelOff), "touch" in N && t(8, b = N.touch), "displayFlex" in N && t(9, M = N.displayFlex), "size" in N && t(10, w = N.size), "href" in N && t(11, h = N.href), "action" in N && t(12, L = N.action), "component" in N && t(13, de = N.component), "tag" in N && t(14, Ce = N.tag), "$$scope" in N && t(37, r = N.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, l = (() => {
      if (V === "data-table:pagination")
        switch (L) {
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
        return V === "dialog:header" || V === "dialog:sheet" ? { "data-mdc-dialog-action": L } : { action: L };
    })()), W !== a.disabled) {
      if (G) {
        const N = Ge();
        "blur" in N && N.blur();
      }
      t(31, W = a.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && G && Ge() && g !== I && (g && !H ? (t(17, H = new ga({
      addClass: he,
      hasClass: j,
      notifyChange: (N) => {
        je(N), ke(Ge(), "SMUIIconButtonToggle:change", N, void 0, !0);
      },
      removeClass: _e,
      getAttr: ne,
      setAttr: x
    })), H.init()) : !g && H && (H.destroy(), t(17, H = void 0), t(18, A = {}), t(20, E = {})), t(32, I = g)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && H && !f(v) && H.isOn() !== v && H.toggle(v);
  }, [
    v,
    c,
    d,
    m,
    _,
    y,
    C,
    p,
    b,
    M,
    w,
    h,
    L,
    de,
    Ce,
    Ge,
    G,
    H,
    A,
    U,
    E,
    l,
    s,
    f,
    V,
    ce,
    he,
    _e,
    ye,
    a,
    g,
    W,
    I,
    o,
    qe,
    Xe,
    dt,
    r
  ];
}
class va extends be {
  constructor(e) {
    super(), ge(
      this,
      e,
      pa,
      _a,
      fe,
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
function Ca(n) {
  let e;
  return {
    c() {
      e = Le(
        /*icon*/
        n[1]
      );
    },
    m(t, l) {
      T(t, e, l);
    },
    p(t, l) {
      l & /*icon*/
      2 && He(
        e,
        /*icon*/
        t[1]
      );
    },
    d(t) {
      t && O(e);
    }
  };
}
function Ia(n) {
  let e, t;
  return e = new ta({
    props: {
      class: "material-icons",
      $$slots: { default: [Ca] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, icon*/
      10 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Aa(n) {
  let e, t;
  return e = new va({
    props: {
      disabled: (
        /*disabled*/
        n[2]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Ia] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    Ie(
      /*callback*/
      n[0]
    ) && n[0].apply(this, arguments);
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function ya(n, e, t) {
  let { callback: l = () => {
  } } = e, { icon: i = "" } = e, { disabled: a = !1 } = e;
  return n.$$set = (o) => {
    "callback" in o && t(0, l = o.callback), "icon" in o && t(1, i = o.icon), "disabled" in o && t(2, a = o.disabled);
  }, [l, i, a];
}
class In extends be {
  constructor(e) {
    super(), ge(this, e, ya, Aa, fe, { callback: 0, icon: 1, disabled: 2 });
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
var ka = {
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
var La = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var l = n.call(this, Pe(Pe({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ka;
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
      var l = e.cssClasses, i = l.LABEL_FLOAT_ABOVE, a = l.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(t) {
      var l = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(ct)
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
var st = {
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
var Sa = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var l = n.call(this, Pe(Pe({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return st;
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
      this.adapter.removeClass(st.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(st.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(st.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(st.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(st.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(st.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(ct)
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
var Ea = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, An = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, wa = {
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
var Ra = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      return n.call(this, Pe(Pe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ea;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return An;
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
      t > 0 && (t += An.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(ct)
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
var Qt = {
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
}, Ha = {
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
}, yn = {
  LABEL_SCALE: 0.75
}, Da = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Ma = [
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
var kn = ["mousedown", "touchstart"], Ln = ["click", "keydown"], Oa = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, Pe(Pe({}, e.defaultAdapter), t)) || this;
      return i.isFocused = !1, i.receivedUserInput = !1, i.valid = !0, i.useNativeValidation = !0, i.validateOnValueChange = !0, i.helperText = l.helperText, i.characterCounter = l.characterCounter, i.leadingIcon = l.leadingIcon, i.trailingIcon = l.trailingIcon, i.inputFocusHandler = function() {
        i.activateFocus();
      }, i.inputBlurHandler = function() {
        i.deactivateFocus();
      }, i.inputInputHandler = function() {
        i.handleInput();
      }, i.setPointerXOffset = function(a) {
        i.setTransformOrigin(a);
      }, i.textFieldInteractionHandler = function() {
        i.handleTextFieldInteraction();
      }, i.validationAttributeChangeHandler = function(a) {
        i.handleValidationAttributeChange(a);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ha;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Ma.indexOf(t) >= 0;
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
      var t, l, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = $e(kn), r = o.next(); !r.done; r = o.next()) {
          var s = r.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          r && !r.done && (l = o.return) && l.call(o);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = $e(Ln), f = u.next(); !f.done; f = u.next()) {
          var s = f.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          f && !f.done && (a = u.return) && a.call(u);
        } finally {
          if (i)
            throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, l, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = $e(kn), r = o.next(); !r.done; r = o.next()) {
          var s = r.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          r && !r.done && (l = o.return) && l.call(o);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = $e(Ln), f = u.next(); !f.done; f = u.next()) {
          var s = f.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          f && !f.done && (a = u.return) && a.call(u);
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
        return Da.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var l = this.adapter.getLabelWidth() * yn.LABEL_SCALE;
          this.adapter.notchOutline(l);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var l = t.touches, i = l ? l[0] : t, a = i.target.getBoundingClientRect(), o = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
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
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(Qt.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Qt.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var l = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.styleDisabled = function(t) {
      var l = e.cssClasses, i = l.DISABLED, a = l.INVALID;
      t ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
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
  }(ct)
);
function Ta(n) {
  let e, t, l, i, a, o, r, s;
  const u = (
    /*#slots*/
    n[22].default
  ), f = le(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = J({
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
      ).map(En).concat([
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
  for (let m = 0; m < c.length; m += 1)
    d = z(d, c[m]);
  return {
    c() {
      e = P("label"), f && f.c(), ue(e, d);
    },
    m(m, _) {
      T(m, e, _), f && f.m(e, null), n[24](e), o = !0, r || (s = [
        $(a = we.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        $(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], r = !0);
    },
    p(m, _) {
      f && f.p && (!o || _ & /*$$scope*/
      2097152) && ae(
        f,
        u,
        m,
        /*$$scope*/
        m[21],
        o ? ie(
          u,
          /*$$scope*/
          m[21],
          _,
          null
        ) : re(
          /*$$scope*/
          m[21]
        ),
        null
      ), ue(e, d = se(c, [
        (!o || _ & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = J({
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
        (!o || _ & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          m[9]
        ).map(En).concat([
          /*style*/
          m[4]
        ]).join(" "))) && { style: l },
        (!o || _ & /*forId*/
        32 && i !== (i = /*forId*/
        m[5] || /*inputProps*/
        (m[11] ? (
          /*inputProps*/
          m[11].id
        ) : void 0))) && { for: i },
        _ & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), a && Ie(a.update) && _ & /*use*/
      4 && a.update.call(
        null,
        /*use*/
        m[2]
      );
    },
    i(m) {
      o || (S(f, m), o = !0);
    },
    o(m) {
      R(f, m), o = !1;
    },
    d(m) {
      m && O(e), f && f.d(m), n[24](null), r = !1, Ae(s);
    }
  };
}
function Ua(n) {
  let e, t, l, i, a, o, r;
  const s = (
    /*#slots*/
    n[22].default
  ), u = le(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = J({
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
      ).map(Sn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = z(c, f[d]);
  return {
    c() {
      e = P("span"), u && u.c(), ue(e, c);
    },
    m(d, m) {
      T(d, e, m), u && u.m(e, null), n[23](e), a = !0, o || (r = [
        $(i = we.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        $(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], o = !0);
    },
    p(d, m) {
      u && u.p && (!a || m & /*$$scope*/
      2097152) && ae(
        u,
        s,
        d,
        /*$$scope*/
        d[21],
        a ? ie(
          s,
          /*$$scope*/
          d[21],
          m,
          null
        ) : re(
          /*$$scope*/
          d[21]
        ),
        null
      ), ue(e, c = se(f, [
        (!a || m & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = J({
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
        (!a || m & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(Sn).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: l },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), i && Ie(i.update) && m & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      a || (S(u, d), a = !0);
    },
    o(d) {
      R(u, d), a = !1;
    },
    d(d) {
      d && O(e), u && u.d(d), n[23](null), o = !1, Ae(r);
    }
  };
}
function Ba(n) {
  let e, t, l, i;
  const a = [Ua, Ta], o = [];
  function r(s, u) {
    return (
      /*wrapped*/
      s[6] ? 0 : 1
    );
  }
  return e = r(n), t = o[e] = a[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(s, u) {
      o[e].m(s, u), T(s, l, u), i = !0;
    },
    p(s, [u]) {
      let f = e;
      e = r(s), e === f ? o[e].p(s, u) : (pe(), R(o[f], 1, 1, () => {
        o[f] = null;
      }), ve(), t = o[e], t ? t.p(s, u) : (t = o[e] = a[e](s), t.c()), S(t, 1), t.m(l.parentNode, l));
    },
    i(s) {
      i || (S(t), i = !0);
    },
    o(s) {
      R(t), i = !1;
    },
    d(s) {
      s && O(l), o[e].d(s);
    }
  };
}
const Sn = ([n, e]) => `${n}: ${e};`, En = ([n, e]) => `${n}: ${e};`;
function Fa(n, e, t) {
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
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  var r;
  const s = Ue(Ee());
  let { use: u = [] } = e, { class: f = "" } = e, { style: c = "" } = e, { for: d = void 0 } = e, { floatAbove: m = !1 } = e, { required: _ = !1 } = e, { wrapped: y = !1 } = e, g, v, C = {}, p = {}, b = (r = Fe("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {}, M = m, w = _;
  We(() => {
    t(18, v = new La({
      addClass: h,
      removeClass: L,
      getWidth: () => {
        var I, j;
        const he = ce(), _e = he.cloneNode(!0);
        (I = he.parentNode) === null || I === void 0 || I.appendChild(_e), _e.classList.add("smui-floating-label--remove-transition"), _e.classList.add("smui-floating-label--force-size"), _e.classList.remove("mdc-floating-label--float-above");
        const ye = _e.scrollWidth;
        return (j = he.parentNode) === null || j === void 0 || j.removeChild(_e), ye;
      },
      registerInteractionHandler: (I, j) => ce().addEventListener(I, j),
      deregisterInteractionHandler: (I, j) => ce().removeEventListener(I, j)
    }));
    const W = {
      get element() {
        return ce();
      },
      addStyle: G,
      removeStyle: H
    };
    return ke(g, "SMUIFloatingLabel:mount", W), v.init(), () => {
      ke(g, "SMUIFloatingLabel:unmount", W), v.destroy();
    };
  });
  function h(W) {
    C[W] || t(8, C[W] = !0, C);
  }
  function L(W) {
    (!(W in C) || C[W]) && t(8, C[W] = !1, C);
  }
  function G(W, I) {
    p[W] != I && (I === "" || I == null ? (delete p[W], t(9, p)) : t(9, p[W] = I, p));
  }
  function H(W) {
    W in p && (delete p[W], t(9, p));
  }
  function A(W) {
    v.shake(W);
  }
  function U(W) {
    t(0, m = W);
  }
  function E(W) {
    t(1, _ = W);
  }
  function V() {
    return v.getWidth();
  }
  function ce() {
    return g;
  }
  function de(W) {
    ee[W ? "unshift" : "push"](() => {
      g = W, t(7, g);
    });
  }
  function Ce(W) {
    ee[W ? "unshift" : "push"](() => {
      g = W, t(7, g);
    });
  }
  return n.$$set = (W) => {
    e = z(z({}, e), De(W)), t(12, i = oe(e, l)), "use" in W && t(2, u = W.use), "class" in W && t(3, f = W.class), "style" in W && t(4, c = W.style), "for" in W && t(5, d = W.for), "floatAbove" in W && t(0, m = W.floatAbove), "required" in W && t(1, _ = W.required), "wrapped" in W && t(6, y = W.wrapped), "$$scope" in W && t(21, o = W.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && v && M !== m && (t(19, M = m), v.float(m)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && v && w !== _ && (t(20, w = _), v.setRequired(_));
  }, [
    m,
    _,
    u,
    f,
    c,
    d,
    y,
    g,
    C,
    p,
    s,
    b,
    i,
    A,
    U,
    E,
    V,
    ce,
    v,
    M,
    w,
    o,
    a,
    de,
    Ce
  ];
}
class Ul extends be {
  constructor(e) {
    super(), ge(this, e, Fa, Ba, fe, {
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
function Pa(n) {
  let e, t, l, i, a, o, r = [
    {
      class: t = J({
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
  ], s = {};
  for (let u = 0; u < r.length; u += 1)
    s = z(s, r[u]);
  return {
    c() {
      e = P("div"), ue(e, s);
    },
    m(u, f) {
      T(u, e, f), n[13](e), a || (o = [
        $(i = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], a = !0);
    },
    p(u, [f]) {
      ue(e, s = se(r, [
        f & /*className, active, internalClasses*/
        42 && t !== (t = J({
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
      ])), i && Ie(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: te,
    o: te,
    d(u) {
      u && O(e), n[13](null), a = !1, Ae(o);
    }
  };
}
const wn = ([n, e]) => `${n}: ${e};`;
function Na(n, e, t) {
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
  let i = oe(e, l);
  const a = Ue(Ee());
  let { use: o = [] } = e, { class: r = "" } = e, { style: s = "" } = e, { active: u = !1 } = e, f, c, d = {}, m = {};
  We(() => (c = new Sa({
    addClass: y,
    removeClass: g,
    hasClass: _,
    setStyle: v,
    registerEventHandler: (h, L) => M().addEventListener(h, L),
    deregisterEventHandler: (h, L) => M().removeEventListener(h, L)
  }), c.init(), () => {
    c.destroy();
  }));
  function _(h) {
    return h in d ? d[h] : M().classList.contains(h);
  }
  function y(h) {
    d[h] || t(5, d[h] = !0, d);
  }
  function g(h) {
    (!(h in d) || d[h]) && t(5, d[h] = !1, d);
  }
  function v(h, L) {
    m[h] != L && (L === "" || L == null ? (delete m[h], t(6, m)) : t(6, m[h] = L, m));
  }
  function C() {
    c.activate();
  }
  function p() {
    c.deactivate();
  }
  function b(h) {
    c.setRippleCenter(h);
  }
  function M() {
    return f;
  }
  function w(h) {
    ee[h ? "unshift" : "push"](() => {
      f = h, t(4, f);
    });
  }
  return n.$$set = (h) => {
    e = z(z({}, e), De(h)), t(8, i = oe(e, l)), "use" in h && t(0, o = h.use), "class" in h && t(1, r = h.class), "style" in h && t(2, s = h.style), "active" in h && t(3, u = h.active);
  }, [
    o,
    r,
    s,
    u,
    f,
    d,
    m,
    a,
    i,
    C,
    p,
    b,
    M,
    w
  ];
}
class Ga extends be {
  constructor(e) {
    super(), ge(this, e, Na, Pa, fe, {
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
function Rn(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[15].default
  ), a = le(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = P("div"), a && a.c(), B(e, "class", "mdc-notched-outline__notch"), B(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Hn).join(" "));
    },
    m(o, r) {
      T(o, e, r), a && a.m(e, null), l = !0;
    },
    p(o, r) {
      a && a.p && (!l || r & /*$$scope*/
      16384) && ae(
        a,
        i,
        o,
        /*$$scope*/
        o[14],
        l ? ie(
          i,
          /*$$scope*/
          o[14],
          r,
          null
        ) : re(
          /*$$scope*/
          o[14]
        ),
        null
      ), (!l || r & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        o[7]
      ).map(Hn).join(" "))) && B(e, "style", t);
    },
    i(o) {
      l || (S(a, o), l = !0);
    },
    o(o) {
      R(a, o), l = !1;
    },
    d(o) {
      o && O(e), a && a.d(o);
    }
  };
}
function ja(n) {
  let e, t, l, i, a, o, r, s, u, f, c = !/*noLabel*/
  n[3] && Rn(n), d = [
    {
      class: o = J({
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
    m = z(m, d[_]);
  return {
    c() {
      e = P("div"), t = P("div"), l = Z(), c && c.c(), i = Z(), a = P("div"), B(t, "class", "mdc-notched-outline__leading"), B(a, "class", "mdc-notched-outline__trailing"), ue(e, m);
    },
    m(_, y) {
      T(_, e, y), F(e, t), F(e, l), c && c.m(e, null), F(e, i), F(e, a), n[16](e), s = !0, u || (f = [
        $(r = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        X(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        X(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(_, [y]) {
      /*noLabel*/
      _[3] ? c && (pe(), R(c, 1, 1, () => {
        c = null;
      }), ve()) : c ? (c.p(_, y), y & /*noLabel*/
      8 && S(c, 1)) : (c = Rn(_), c.c(), S(c, 1), c.m(e, i)), ue(e, m = se(d, [
        (!s || y & /*className, notched, noLabel, internalClasses*/
        78 && o !== (o = J({
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
        }))) && { class: o },
        y & /*$$restProps*/
        1024 && /*$$restProps*/
        _[10]
      ])), r && Ie(r.update) && y & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      s || (S(c), s = !0);
    },
    o(_) {
      R(c), s = !1;
    },
    d(_) {
      _ && O(e), c && c.d(), n[16](null), u = !1, Ae(f);
    }
  };
}
const Hn = ([n, e]) => `${n}: ${e};`;
function za(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  const r = Ue(Ee());
  let { use: s = [] } = e, { class: u = "" } = e, { notched: f = !1 } = e, { noLabel: c = !1 } = e, d, m, _, y = {}, g = {};
  We(() => (m = new Ra({
    addClass: C,
    removeClass: p,
    setNotchWidthProperty: (A) => b("width", A + "px"),
    removeNotchWidthProperty: () => M("width")
  }), m.init(), () => {
    m.destroy();
  }));
  function v(A) {
    t(4, _ = A.detail);
  }
  function C(A) {
    y[A] || t(6, y[A] = !0, y);
  }
  function p(A) {
    (!(A in y) || y[A]) && t(6, y[A] = !1, y);
  }
  function b(A, U) {
    g[A] != U && (U === "" || U == null ? (delete g[A], t(7, g)) : t(7, g[A] = U, g));
  }
  function M(A) {
    A in g && (delete g[A], t(7, g));
  }
  function w(A) {
    m.notch(A);
  }
  function h() {
    m.closeNotch();
  }
  function L() {
    return d;
  }
  function G(A) {
    ee[A ? "unshift" : "push"](() => {
      d = A, t(5, d);
    });
  }
  const H = () => t(4, _ = void 0);
  return n.$$set = (A) => {
    e = z(z({}, e), De(A)), t(10, i = oe(e, l)), "use" in A && t(0, s = A.use), "class" in A && t(1, u = A.class), "notched" in A && t(2, f = A.notched), "noLabel" in A && t(3, c = A.noLabel), "$$scope" in A && t(14, o = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (_ ? (_.addStyle("transition-duration", "0s"), C("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      _ && _.removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"));
  }, [
    s,
    u,
    f,
    c,
    _,
    d,
    y,
    g,
    r,
    v,
    i,
    w,
    h,
    L,
    o,
    a,
    G,
    H
  ];
}
class Wa extends be {
  constructor(e) {
    super(), ge(this, e, za, ja, fe, {
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
function Va(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = le(
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
      8192) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? ie(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : re(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Za(n) {
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
      class: J({
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
  function o(r, s) {
    let u = {
      $$slots: { default: [Va] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < i.length; f += 1)
      u = z(u, i[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = z(u, se(i, [
      s & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      s & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          r[8],
          .../*use*/
          r[0]
        ]
      },
      s & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: J({
          [
            /*className*/
            r[1]
          ]: !0,
          [
            /*smuiClass*/
            r[6]
          ]: !0,
          .../*smuiClassMap*/
          r[5]
        })
      },
      s & /*props*/
      128 && me(
        /*props*/
        r[7]
      ),
      s & /*$$restProps*/
      512 && me(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: u };
  }
  return a && (e = nt(a, o(n)), n[12](e)), {
    c() {
      e && Q(e.$$.fragment), t = Se();
    },
    m(r, s) {
      e && Y(e, r, s), T(r, t, s), l = !0;
    },
    p(r, [s]) {
      if (s & /*component*/
      4 && a !== (a = /*component*/
      r[2])) {
        if (e) {
          pe();
          const u = e;
          R(u.$$.fragment, 1, 0, () => {
            K(u, 1);
          }), ve();
        }
        a ? (e = nt(a, o(r, s)), r[12](e), Q(e.$$.fragment), S(e.$$.fragment, 1), Y(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? se(i, [
          s & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          s & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              r[8],
              .../*use*/
              r[0]
            ]
          },
          s & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: J({
              [
                /*className*/
                r[1]
              ]: !0,
              [
                /*smuiClass*/
                r[6]
              ]: !0,
              .../*smuiClassMap*/
              r[5]
            })
          },
          s & /*props*/
          128 && me(
            /*props*/
            r[7]
          ),
          s & /*$$restProps*/
          512 && me(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        s & /*$$scope*/
        8192 && (u.$$scope = { dirty: s, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      l || (e && S(e.$$.fragment, r), l = !0);
    },
    o(r) {
      e && R(e.$$.fragment, r), l = !1;
    },
    d(r) {
      r && O(t), n[12](null), e && K(e, r);
    }
  };
}
const Je = {
  component: lt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function qa(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e, { use: r = [] } = e, { class: s = "" } = e, u;
  const f = Je.class, c = {}, d = [], m = Je.contexts, _ = Je.props;
  let { component: y = Je.component } = e, { tag: g = y === lt ? Je.tag : void 0 } = e;
  Object.entries(Je.classMap).forEach(([b, M]) => {
    const w = Fe(M);
    w && "subscribe" in w && d.push(w.subscribe((h) => {
      t(5, c[b] = h, c);
    }));
  });
  const v = Ue(Ee());
  for (let b in m)
    m.hasOwnProperty(b) && Oe(b, m[b]);
  It(() => {
    for (const b of d)
      b();
  });
  function C() {
    return u.getElement();
  }
  function p(b) {
    ee[b ? "unshift" : "push"](() => {
      u = b, t(4, u);
    });
  }
  return n.$$set = (b) => {
    e = z(z({}, e), De(b)), t(9, i = oe(e, l)), "use" in b && t(0, r = b.use), "class" in b && t(1, s = b.class), "component" in b && t(2, y = b.component), "tag" in b && t(3, g = b.tag), "$$scope" in b && t(13, o = b.$$scope);
  }, [
    r,
    s,
    y,
    g,
    u,
    c,
    f,
    _,
    v,
    i,
    C,
    a,
    p,
    o
  ];
}
class Xa extends be {
  constructor(e) {
    super(), ge(this, e, qa, Za, fe, {
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
const Dn = Object.assign({}, Je);
function Ne(n) {
  return new Proxy(Xa, {
    construct: function(e, t) {
      return Object.assign(Je, Dn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Je, Dn, n), e[t];
    }
  });
}
const Ya = Ne({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Ka = Ne({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Ja = Ne({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Qa(n) {
  let e, t, l, i, a, o = [
    {
      class: t = J({
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
  ], r = {};
  for (let s = 0; s < o.length; s += 1)
    r = z(r, o[s]);
  return {
    c() {
      e = P("input"), ue(e, r);
    },
    m(s, u) {
      T(s, e, u), e.autofocus && e.focus(), n[26](e), i || (a = [
        $(l = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        X(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        X(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        X(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        X(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], i = !0);
    },
    p(s, [u]) {
      ue(e, r = se(o, [
        u & /*className*/
        2 && t !== (t = J({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
        u & /*type*/
        4 && { type: (
          /*type*/
          s[2]
        ) },
        u & /*placeholder*/
        8 && { placeholder: (
          /*placeholder*/
          s[3]
        ) },
        u & /*valueProp*/
        16 && /*valueProp*/
        s[4],
        u & /*internalAttrs*/
        64 && /*internalAttrs*/
        s[6],
        u & /*$$restProps*/
        1024 && /*$$restProps*/
        s[10]
      ])), l && Ie(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    i: te,
    o: te,
    d(s) {
      s && O(e), n[26](null), i = !1, Ae(a);
    }
  };
}
function xa(n) {
  return n === "" ? Number.NaN : +n;
}
function $a(n, e, t) {
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
  let i = oe(e, l);
  const a = Ue(Ee());
  let o = () => {
  };
  function r(I) {
    return I === o;
  }
  let { use: s = [] } = e, { class: u = "" } = e, { type: f = "text" } = e, { placeholder: c = " " } = e, { value: d = o } = e;
  const m = r(d);
  m && (d = "");
  let { files: _ = null } = e, { dirty: y = !1 } = e, { invalid: g = !1 } = e, { updateInvalid: v = !0 } = e, { emptyValueNull: C = d === null } = e;
  m && C && (d = null);
  let { emptyValueUndefined: p = d === void 0 } = e;
  m && p && (d = void 0);
  let b, M = {}, w = {};
  We(() => {
    v && t(14, g = b.matches(":invalid"));
  });
  function h(I) {
    if (f === "file") {
      t(12, _ = I.currentTarget.files);
      return;
    }
    if (I.currentTarget.value === "" && C) {
      t(11, d = null);
      return;
    }
    if (I.currentTarget.value === "" && p) {
      t(11, d = void 0);
      return;
    }
    switch (f) {
      case "number":
      case "range":
        t(11, d = xa(I.currentTarget.value));
        break;
      default:
        t(11, d = I.currentTarget.value);
        break;
    }
  }
  function L(I) {
    (f === "file" || f === "range") && h(I), t(13, y = !0), v && t(14, g = b.matches(":invalid"));
  }
  function G(I) {
    var j;
    return I in M ? (j = M[I]) !== null && j !== void 0 ? j : null : V().getAttribute(I);
  }
  function H(I, j) {
    M[I] !== j && t(6, M[I] = j, M);
  }
  function A(I) {
    (!(I in M) || M[I] != null) && t(6, M[I] = void 0, M);
  }
  function U() {
    V().focus();
  }
  function E() {
    V().blur();
  }
  function V() {
    return b;
  }
  function ce(I) {
    Nt.call(this, n, I);
  }
  function de(I) {
    Nt.call(this, n, I);
  }
  function Ce(I) {
    ee[I ? "unshift" : "push"](() => {
      b = I, t(5, b);
    });
  }
  const W = (I) => f !== "file" && h(I);
  return n.$$set = (I) => {
    e = z(z({}, e), De(I)), t(10, i = oe(e, l)), "use" in I && t(0, s = I.use), "class" in I && t(1, u = I.class), "type" in I && t(2, f = I.type), "placeholder" in I && t(3, c = I.placeholder), "value" in I && t(11, d = I.value), "files" in I && t(12, _ = I.files), "dirty" in I && t(13, y = I.dirty), "invalid" in I && t(14, g = I.invalid), "updateInvalid" in I && t(15, v = I.updateInvalid), "emptyValueNull" in I && t(16, C = I.emptyValueNull), "emptyValueUndefined" in I && t(17, p = I.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (f === "file" ? (delete w.value, t(4, w), t(2, f), t(11, d)) : t(4, w.value = d ?? "", w));
  }, [
    s,
    u,
    f,
    c,
    w,
    b,
    M,
    a,
    h,
    L,
    i,
    d,
    _,
    y,
    g,
    v,
    C,
    p,
    G,
    H,
    A,
    U,
    E,
    V,
    ce,
    de,
    Ce,
    W
  ];
}
class er extends be {
  constructor(e) {
    super(), ge(this, e, $a, Qa, fe, {
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
function tr(n) {
  let e, t, l, i, a, o, r = [
    {
      class: t = J({
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
  ], s = {};
  for (let u = 0; u < r.length; u += 1)
    s = z(s, r[u]);
  return {
    c() {
      e = P("textarea"), ue(e, s);
    },
    m(u, f) {
      T(u, e, f), e.autofocus && e.focus(), n[21](e), dn(
        e,
        /*value*/
        n[0]
      ), a || (o = [
        $(i = we.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        $(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        X(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        X(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        X(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        X(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], a = !0);
    },
    p(u, [f]) {
      ue(e, s = se(r, [
        f & /*className*/
        4 && t !== (t = J({
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
      ])), i && Ie(i.update) && f & /*use*/
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
    i: te,
    o: te,
    d(u) {
      u && O(e), n[21](null), a = !1, Ae(o);
    }
  };
}
function nr(n, e, t) {
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
  let i = oe(e, l);
  const a = Ue(Ee());
  let { use: o = [] } = e, { class: r = "" } = e, { style: s = "" } = e, { value: u = "" } = e, { dirty: f = !1 } = e, { invalid: c = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: m = !0 } = e, _, y = {};
  We(() => {
    d && t(11, c = _.matches(":invalid"));
  });
  function g() {
    t(10, f = !0), d && t(11, c = _.matches(":invalid"));
  }
  function v(A) {
    var U;
    return A in y ? (U = y[A]) !== null && U !== void 0 ? U : null : w().getAttribute(A);
  }
  function C(A, U) {
    y[A] !== U && t(6, y[A] = U, y);
  }
  function p(A) {
    (!(A in y) || y[A] != null) && t(6, y[A] = void 0, y);
  }
  function b() {
    w().focus();
  }
  function M() {
    w().blur();
  }
  function w() {
    return _;
  }
  function h(A) {
    Nt.call(this, n, A);
  }
  function L(A) {
    Nt.call(this, n, A);
  }
  function G(A) {
    ee[A ? "unshift" : "push"](() => {
      _ = A, t(5, _);
    });
  }
  function H() {
    u = this.value, t(0, u);
  }
  return n.$$set = (A) => {
    e = z(z({}, e), De(A)), t(9, i = oe(e, l)), "use" in A && t(1, o = A.use), "class" in A && t(2, r = A.class), "style" in A && t(3, s = A.style), "value" in A && t(0, u = A.value), "dirty" in A && t(10, f = A.dirty), "invalid" in A && t(11, c = A.invalid), "updateInvalid" in A && t(12, d = A.updateInvalid), "resizable" in A && t(4, m = A.resizable);
  }, [
    u,
    o,
    r,
    s,
    m,
    _,
    y,
    a,
    g,
    i,
    f,
    c,
    d,
    v,
    C,
    p,
    b,
    M,
    w,
    h,
    L,
    G,
    H
  ];
}
class lr extends be {
  constructor(e) {
    super(), ge(this, e, nr, tr, fe, {
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
const ir = (n) => ({}), Mn = (n) => ({}), ar = (n) => ({}), On = (n) => ({}), rr = (n) => ({}), Tn = (n) => ({}), sr = (n) => ({}), Un = (n) => ({}), or = (n) => ({}), Bn = (n) => ({}), ur = (n) => ({}), Fn = (n) => ({}), fr = (n) => ({}), Pn = (n) => ({}), cr = (n) => ({}), Nn = (n) => ({}), dr = (n) => ({}), Gn = (n) => ({}), hr = (n) => ({}), jn = (n) => ({}), mr = (n) => ({}), zn = (n) => ({}), gr = (n) => ({}), Wn = (n) => ({});
function br(n) {
  let e, t, l, i, a, o, r, s, u, f, c, d, m, _;
  const y = (
    /*#slots*/
    n[56].label
  ), g = le(
    y,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  l = new Gt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [pr] },
      $$scope: { ctx: n }
    }
  });
  const v = (
    /*#slots*/
    n[56].default
  ), C = le(
    v,
    n,
    /*$$scope*/
    n[87],
    null
  );
  o = new Gt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [vr] },
      $$scope: { ctx: n }
    }
  });
  const p = (
    /*#slots*/
    n[56].ripple
  ), b = le(
    p,
    n,
    /*$$scope*/
    n[87],
    On
  );
  let M = [
    {
      class: s = J({
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
      ).map(el).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    Ct(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], w = {};
  for (let h = 0; h < M.length; h += 1)
    w = z(w, M[h]);
  return {
    c() {
      e = P("div"), g && g.c(), t = Z(), Q(l.$$.fragment), i = Z(), C && C.c(), a = Z(), Q(o.$$.fragment), r = Z(), b && b.c(), ue(e, w);
    },
    m(h, L) {
      T(h, e, L), g && g.m(e, null), F(e, t), Y(l, e, null), F(e, i), C && C.m(e, null), F(e, a), Y(o, e, null), F(e, r), b && b.m(e, null), n[82](e), d = !0, m || (_ = [
        $(f = et.call(null, e, {
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
        $(c = we.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        $(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        X(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        X(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        X(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        X(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], m = !0);
    },
    p(h, L) {
      g && g.p && (!d || L[2] & /*$$scope*/
      33554432) && ae(
        g,
        y,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          y,
          /*$$scope*/
          h[87],
          L,
          or
        ) : re(
          /*$$scope*/
          h[87]
        ),
        Bn
      );
      const G = {};
      L[2] & /*$$scope*/
      33554432 && (G.$$scope = { dirty: L, ctx: h }), l.$set(G), C && C.p && (!d || L[2] & /*$$scope*/
      33554432) && ae(
        C,
        v,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          v,
          /*$$scope*/
          h[87],
          L,
          null
        ) : re(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const H = {};
      L[2] & /*$$scope*/
      33554432 && (H.$$scope = { dirty: L, ctx: h }), o.$set(H), b && b.p && (!d || L[2] & /*$$scope*/
      33554432) && ae(
        b,
        p,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          p,
          /*$$scope*/
          h[87],
          L,
          ar
        ) : re(
          /*$$scope*/
          h[87]
        ),
        On
      ), ue(e, w = se(M, [
        (!d || L[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | L[1] & /*$$slots*/
        65536 && s !== (s = J({
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
        }))) && { class: s },
        (!d || L[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(el).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        L[1] & /*$$restProps*/
        32768 && Ct(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), f && Ie(f.update) && L[0] & /*ripple*/
      2048 && f.update.call(null, {
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
      }), c && Ie(c.update) && L[0] & /*use*/
      256 && c.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (S(g, h), S(l.$$.fragment, h), S(C, h), S(o.$$.fragment, h), S(b, h), d = !0);
    },
    o(h) {
      R(g, h), R(l.$$.fragment, h), R(C, h), R(o.$$.fragment, h), R(b, h), d = !1;
    },
    d(h) {
      h && O(e), g && g.d(h), K(l), C && C.d(h), K(o), b && b.d(h), n[82](null), m = !1, Ae(_);
    }
  };
}
function _r(n) {
  let e, t, l, i, a, o, r, s, u, f, c, d, m, _, y, g, v, C, p = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Vn(n), b = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && Xn(n)
  );
  i = new Gt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [yr] },
      $$scope: { ctx: n }
    }
  });
  const M = (
    /*#slots*/
    n[56].default
  ), w = le(
    M,
    n,
    /*$$scope*/
    n[87],
    null
  ), h = [Lr, kr], L = [];
  function G(E, V) {
    return (
      /*textarea*/
      E[14] && typeof /*value*/
      E[0] == "string" ? 0 : 1
    );
  }
  r = G(n), s = L[r] = h[r](n), f = new Gt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [wr] },
      $$scope: { ctx: n }
    }
  });
  let H = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Qn(n), A = [
    {
      class: d = J({
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
      ).map($n).concat([
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
    Ct(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], U = {};
  for (let E = 0; E < A.length; E += 1)
    U = z(U, A[E]);
  return {
    c() {
      e = P("label"), p && p.c(), t = Z(), b && b.c(), l = Z(), Q(i.$$.fragment), a = Z(), w && w.c(), o = Z(), s.c(), u = Z(), Q(f.$$.fragment), c = Z(), H && H.c(), ue(e, U);
    },
    m(E, V) {
      T(E, e, V), p && p.m(e, null), F(e, t), b && b.m(e, null), F(e, l), Y(i, e, null), F(e, a), w && w.m(e, null), F(e, o), L[r].m(e, null), F(e, u), Y(f, e, null), F(e, c), H && H.m(e, null), n[78](e), g = !0, v || (C = [
        $(_ = et.call(null, e, {
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
        $(y = we.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        $(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        X(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        X(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        X(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        X(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        X(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        X(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], v = !0);
    },
    p(E, V) {
      !/*textarea*/
      E[14] && /*variant*/
      E[15] !== "outlined" ? p ? (p.p(E, V), V[0] & /*textarea, variant*/
      49152 && S(p, 1)) : (p = Vn(E), p.c(), S(p, 1), p.m(e, t)) : p && (pe(), R(p, 1, 1, () => {
        p = null;
      }), ve()), /*textarea*/
      E[14] || /*variant*/
      E[15] === "outlined" ? b ? (b.p(E, V), V[0] & /*textarea, variant*/
      49152 && S(b, 1)) : (b = Xn(E), b.c(), S(b, 1), b.m(e, l)) : b && (pe(), R(b, 1, 1, () => {
        b = null;
      }), ve());
      const ce = {};
      V[2] & /*$$scope*/
      33554432 && (ce.$$scope = { dirty: V, ctx: E }), i.$set(ce), w && w.p && (!g || V[2] & /*$$scope*/
      33554432) && ae(
        w,
        M,
        E,
        /*$$scope*/
        E[87],
        g ? ie(
          M,
          /*$$scope*/
          E[87],
          V,
          null
        ) : re(
          /*$$scope*/
          E[87]
        ),
        null
      );
      let de = r;
      r = G(E), r === de ? L[r].p(E, V) : (pe(), R(L[de], 1, 1, () => {
        L[de] = null;
      }), ve(), s = L[r], s ? s.p(E, V) : (s = L[r] = h[r](E), s.c()), S(s, 1), s.m(e, u));
      const Ce = {};
      V[2] & /*$$scope*/
      33554432 && (Ce.$$scope = { dirty: V, ctx: E }), f.$set(Ce), !/*textarea*/
      E[14] && /*variant*/
      E[15] !== "outlined" && /*ripple*/
      E[11] ? H ? (H.p(E, V), V[0] & /*textarea, variant, ripple*/
      51200 && S(H, 1)) : (H = Qn(E), H.c(), S(H, 1), H.m(e, null)) : H && (pe(), R(H, 1, 1, () => {
        H = null;
      }), ve()), ue(e, U = se(A, [
        (!g || V[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | V[1] & /*$$slots*/
        65536 && d !== (d = J({
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
        (!g || V[0] & /*internalStyles, style*/
        67109888 && m !== (m = Object.entries(
          /*internalStyles*/
          E[26]
        ).map($n).concat([
          /*style*/
          E[10]
        ]).join(" "))) && { style: m },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        V[1] & /*$$restProps*/
        32768 && Ct(
          /*$$restProps*/
          E[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), _ && Ie(_.update) && V[0] & /*textarea, variant*/
      49152 | V[1] & /*inputElement*/
      4 && _.update.call(null, {
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
      }), y && Ie(y.update) && V[0] & /*use*/
      256 && y.update.call(
        null,
        /*use*/
        E[8]
      );
    },
    i(E) {
      g || (S(p), S(b), S(i.$$.fragment, E), S(w, E), S(s), S(f.$$.fragment, E), S(H), g = !0);
    },
    o(E) {
      R(p), R(b), R(i.$$.fragment, E), R(w, E), R(s), R(f.$$.fragment, E), R(H), g = !1;
    },
    d(E) {
      E && O(e), p && p.d(), b && b.d(), K(i), w && w.d(E), L[r].d(), K(f), H && H.d(), n[78](null), v = !1, Ae(C);
    }
  };
}
function pr(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  return {
    c() {
      l && l.c();
    },
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a[2] & /*$$scope*/
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          a,
          sr
        ) : re(
          /*$$scope*/
          i[87]
        ),
        Un
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function vr(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a[2] & /*$$scope*/
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          a,
          rr
        ) : re(
          /*$$scope*/
          i[87]
        ),
        Tn
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Vn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && Zn()
  ), a = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && qn(n);
  return {
    c() {
      i && i.c(), e = Z(), a && a.c(), t = Se();
    },
    m(o, r) {
      i && i.m(o, r), T(o, e, r), a && a.m(o, r), T(o, t, r), l = !0;
    },
    p(o, r) {
      /*variant*/
      o[15] === "filled" ? i || (i = Zn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      o[16] && /*label*/
      (o[17] != null || /*$$slots*/
      o[47].label) ? a ? (a.p(o, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && S(a, 1)) : (a = qn(o), a.c(), S(a, 1), a.m(t.parentNode, t)) : a && (pe(), R(a, 1, 1, () => {
        a = null;
      }), ve());
    },
    i(o) {
      l || (S(a), l = !0);
    },
    o(o) {
      R(a), l = !1;
    },
    d(o) {
      o && (O(e), O(t)), i && i.d(o), a && a.d(o);
    }
  };
}
function Zn(n) {
  let e;
  return {
    c() {
      e = P("span"), B(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      T(t, e, l);
    },
    d(t) {
      t && O(e);
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
    Te(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Cr] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < l.length; a += 1)
    i = z(i, l[a]);
  return e = new Ul({ props: i }), n[57](e), {
    c() {
      Q(e.$$.fragment);
    },
    m(a, o) {
      Y(e, a, o), t = !0;
    },
    p(a, o) {
      const r = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? se(l, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            a[28] || /*value*/
            a[0] != null && /*value*/
            a[0] !== "" && (typeof /*value*/
            a[0] != "number" || !isNaN(
              /*value*/
              a[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          a[13]
        ) },
        l[2],
        o[1] & /*$$restProps*/
        32768 && me(Te(
          /*$$restProps*/
          a[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (S(e.$$.fragment, a), t = !0);
    },
    o(a) {
      R(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[57](null), K(e, a);
    }
  };
}
function Cr(n) {
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
  ), a = le(
    i,
    n,
    /*$$scope*/
    n[87],
    Wn
  );
  return {
    c() {
      t = Le(e), a && a.c();
    },
    m(o, r) {
      T(o, t, r), a && a.m(o, r), l = !0;
    },
    p(o, r) {
      (!l || r[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && He(t, e), a && a.p && (!l || r[2] & /*$$scope*/
      33554432) && ae(
        a,
        i,
        o,
        /*$$scope*/
        o[87],
        l ? ie(
          i,
          /*$$scope*/
          o[87],
          r,
          gr
        ) : re(
          /*$$scope*/
          o[87]
        ),
        Wn
      );
    },
    i(o) {
      l || (S(a, o), l = !0);
    },
    o(o) {
      R(a, o), l = !1;
    },
    d(o) {
      o && O(t), a && a.d(o);
    }
  };
}
function Xn(n) {
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
    Te(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [Ar] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < l.length; a += 1)
    i = z(i, l[a]);
  return e = new Wa({ props: i }), n[59](e), {
    c() {
      Q(e.$$.fragment);
    },
    m(a, o) {
      Y(e, a, o), t = !0;
    },
    p(a, o) {
      const r = o[0] & /*noLabel, label*/
      196608 | o[1] & /*$$slots, $$restProps*/
      98304 ? se(l, [
        o[0] & /*noLabel, label*/
        196608 | o[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            a[16] || /*label*/
            a[17] == null && !/*$$slots*/
            a[47].label
          )
        },
        o[1] & /*$$restProps*/
        32768 && me(Te(
          /*$$restProps*/
          a[46],
          "outline$"
        ))
      ]) : {};
      o[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | o[1] & /*$$restProps, $$slots*/
      98304 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (S(e.$$.fragment, a), t = !0);
    },
    o(a) {
      R(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[59](null), K(e, a);
    }
  };
}
function Yn(n) {
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
    Te(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Ir] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < l.length; a += 1)
    i = z(i, l[a]);
  return e = new Ul({ props: i }), n[58](e), {
    c() {
      Q(e.$$.fragment);
    },
    m(a, o) {
      Y(e, a, o), t = !0;
    },
    p(a, o) {
      const r = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? se(l, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            a[28] || /*value*/
            a[0] != null && /*value*/
            a[0] !== "" && (typeof /*value*/
            a[0] != "number" || !isNaN(
              /*value*/
              a[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          a[13]
        ) },
        l[2],
        o[1] & /*$$restProps*/
        32768 && me(Te(
          /*$$restProps*/
          a[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (S(e.$$.fragment, a), t = !0);
    },
    o(a) {
      R(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[58](null), K(e, a);
    }
  };
}
function Ir(n) {
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
  ), a = le(
    i,
    n,
    /*$$scope*/
    n[87],
    zn
  );
  return {
    c() {
      t = Le(e), a && a.c();
    },
    m(o, r) {
      T(o, t, r), a && a.m(o, r), l = !0;
    },
    p(o, r) {
      (!l || r[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && He(t, e), a && a.p && (!l || r[2] & /*$$scope*/
      33554432) && ae(
        a,
        i,
        o,
        /*$$scope*/
        o[87],
        l ? ie(
          i,
          /*$$scope*/
          o[87],
          r,
          mr
        ) : re(
          /*$$scope*/
          o[87]
        ),
        zn
      );
    },
    i(o) {
      l || (S(a, o), l = !0);
    },
    o(o) {
      R(a, o), l = !1;
    },
    d(o) {
      o && O(t), a && a.d(o);
    }
  };
}
function Ar(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Yn(n);
  return {
    c() {
      l && l.c(), e = Se();
    },
    m(i, a) {
      l && l.m(i, a), T(i, e, a), t = !0;
    },
    p(i, a) {
      !/*noLabel*/
      i[16] && /*label*/
      (i[17] != null || /*$$slots*/
      i[47].label) ? l ? (l.p(i, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && S(l, 1)) : (l = Yn(i), l.c(), S(l, 1), l.m(e.parentNode, e)) : l && (pe(), R(l, 1, 1, () => {
        l = null;
      }), ve());
    },
    i(i) {
      t || (S(l), t = !0);
    },
    o(i) {
      R(l), t = !1;
    },
    d(i) {
      i && O(e), l && l.d(i);
    }
  };
}
function yr(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[87],
    jn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a[2] & /*$$scope*/
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          a,
          hr
        ) : re(
          /*$$scope*/
          i[87]
        ),
        jn
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function kr(n) {
  let e, t, l, i, a, o, r, s, u, f;
  const c = (
    /*#slots*/
    n[56].prefix
  ), d = le(
    c,
    n,
    /*$$scope*/
    n[87],
    Nn
  );
  let m = (
    /*prefix*/
    n[20] != null && Kn(n)
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
    Te(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function y(h) {
    n[69](h);
  }
  function g(h) {
    n[70](h);
  }
  function v(h) {
    n[71](h);
  }
  function C(h) {
    n[72](h);
  }
  let p = {};
  for (let h = 0; h < _.length; h += 1)
    p = z(p, _[h]);
  /*value*/
  n[0] !== void 0 && (p.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (p.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (p.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (p.invalid = /*invalid*/
  n[1]), l = new er({ props: p }), n[68](l), ee.push(() => xe(l, "value", y)), ee.push(() => xe(l, "files", g)), ee.push(() => xe(l, "dirty", v)), ee.push(() => xe(l, "invalid", C)), l.$on(
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
    n[21] != null && Jn(n)
  );
  const M = (
    /*#slots*/
    n[56].suffix
  ), w = le(
    M,
    n,
    /*$$scope*/
    n[87],
    Pn
  );
  return {
    c() {
      d && d.c(), e = Z(), m && m.c(), t = Z(), Q(l.$$.fragment), s = Z(), b && b.c(), u = Z(), w && w.c();
    },
    m(h, L) {
      d && d.m(h, L), T(h, e, L), m && m.m(h, L), T(h, t, L), Y(l, h, L), T(h, s, L), b && b.m(h, L), T(h, u, L), w && w.m(h, L), f = !0;
    },
    p(h, L) {
      d && d.p && (!f || L[2] & /*$$scope*/
      33554432) && ae(
        d,
        c,
        h,
        /*$$scope*/
        h[87],
        f ? ie(
          c,
          /*$$scope*/
          h[87],
          L,
          cr
        ) : re(
          /*$$scope*/
          h[87]
        ),
        Nn
      ), /*prefix*/
      h[20] != null ? m ? (m.p(h, L), L[0] & /*prefix*/
      1048576 && S(m, 1)) : (m = Kn(h), m.c(), S(m, 1), m.m(t.parentNode, t)) : m && (pe(), R(m, 1, 1, () => {
        m = null;
      }), ve());
      const G = L[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | L[1] & /*$$restProps*/
      32768 ? se(_, [
        L[0] & /*type*/
        262144 && { type: (
          /*type*/
          h[18]
        ) },
        L[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          h[12]
        ) },
        L[0] & /*required*/
        8192 && { required: (
          /*required*/
          h[13]
        ) },
        L[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          h[19]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          h[27]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          h[27]
        ) },
        L[0] & /*noLabel, label*/
        196608 && me(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        L[1] & /*$$restProps*/
        32768 && me(Te(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !i && L[0] & /*value*/
      1 && (i = !0, G.value = /*value*/
      h[0], Qe(() => i = !1)), !a && L[0] & /*files*/
      8 && (a = !0, G.files = /*files*/
      h[3], Qe(() => a = !1)), !o && L[0] & /*dirty*/
      16 && (o = !0, G.dirty = /*dirty*/
      h[4], Qe(() => o = !1)), !r && L[0] & /*invalid*/
      2 && (r = !0, G.invalid = /*invalid*/
      h[1], Qe(() => r = !1)), l.$set(G), /*suffix*/
      h[21] != null ? b ? (b.p(h, L), L[0] & /*suffix*/
      2097152 && S(b, 1)) : (b = Jn(h), b.c(), S(b, 1), b.m(u.parentNode, u)) : b && (pe(), R(b, 1, 1, () => {
        b = null;
      }), ve()), w && w.p && (!f || L[2] & /*$$scope*/
      33554432) && ae(
        w,
        M,
        h,
        /*$$scope*/
        h[87],
        f ? ie(
          M,
          /*$$scope*/
          h[87],
          L,
          fr
        ) : re(
          /*$$scope*/
          h[87]
        ),
        Pn
      );
    },
    i(h) {
      f || (S(d, h), S(m), S(l.$$.fragment, h), S(b), S(w, h), f = !0);
    },
    o(h) {
      R(d, h), R(m), R(l.$$.fragment, h), R(b), R(w, h), f = !1;
    },
    d(h) {
      h && (O(e), O(t), O(s), O(u)), d && d.d(h), m && m.d(h), n[68](null), K(l, h), b && b.d(h), w && w.d(h);
    }
  };
}
function Lr(n) {
  let e, t, l, i, a, o, r, s;
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
    Te(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function f(g) {
    n[61](g);
  }
  function c(g) {
    n[62](g);
  }
  function d(g) {
    n[63](g);
  }
  let m = {};
  for (let g = 0; g < u.length; g += 1)
    m = z(m, u[g]);
  /*value*/
  n[0] !== void 0 && (m.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (m.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (m.invalid = /*invalid*/
  n[1]), t = new lr({ props: m }), n[60](t), ee.push(() => xe(t, "value", f)), ee.push(() => xe(t, "dirty", c)), ee.push(() => xe(t, "invalid", d)), t.$on(
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
  ), y = le(
    _,
    n,
    /*$$scope*/
    n[87],
    Gn
  );
  return {
    c() {
      e = P("span"), Q(t.$$.fragment), o = Z(), y && y.c(), B(e, "class", r = J({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(g, v) {
      T(g, e, v), Y(t, e, null), F(e, o), y && y.m(e, null), s = !0;
    },
    p(g, v) {
      const C = v[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | v[1] & /*$$restProps*/
      32768 ? se(u, [
        v[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          g[12]
        ) },
        v[0] & /*required*/
        8192 && { required: (
          /*required*/
          g[13]
        ) },
        v[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          g[19]
        ) },
        v[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          g[27]
        ) },
        v[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          g[27]
        ) },
        v[1] & /*$$restProps*/
        32768 && me(Te(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !l && v[0] & /*value*/
      1 && (l = !0, C.value = /*value*/
      g[0], Qe(() => l = !1)), !i && v[0] & /*dirty*/
      16 && (i = !0, C.dirty = /*dirty*/
      g[4], Qe(() => i = !1)), !a && v[0] & /*invalid*/
      2 && (a = !0, C.invalid = /*invalid*/
      g[1], Qe(() => a = !1)), t.$set(C), y && y.p && (!s || v[2] & /*$$scope*/
      33554432) && ae(
        y,
        _,
        g,
        /*$$scope*/
        g[87],
        s ? ie(
          _,
          /*$$scope*/
          g[87],
          v,
          dr
        ) : re(
          /*$$scope*/
          g[87]
        ),
        Gn
      ), (!s || v[1] & /*$$restProps*/
      32768 && r !== (r = J({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        g[46]) || /*$$restProps*/
        g[46].input$resizable
      }))) && B(e, "class", r);
    },
    i(g) {
      s || (S(t.$$.fragment, g), S(y, g), s = !0);
    },
    o(g) {
      R(t.$$.fragment, g), R(y, g), s = !1;
    },
    d(g) {
      g && O(e), n[60](null), K(t), y && y.d(g);
    }
  };
}
function Kn(n) {
  let e, t;
  return e = new Ka({
    props: {
      $$slots: { default: [Sr] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Sr(n) {
  let e;
  return {
    c() {
      e = Le(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      T(t, e, l);
    },
    p(t, l) {
      l[0] & /*prefix*/
      1048576 && He(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && O(e);
    }
  };
}
function Jn(n) {
  let e, t;
  return e = new Ja({
    props: {
      $$slots: { default: [Er] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i[0] & /*suffix*/
      2097152 | i[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Er(n) {
  let e;
  return {
    c() {
      e = Le(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      T(t, e, l);
    },
    p(t, l) {
      l[0] & /*suffix*/
      2097152 && He(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && O(e);
    }
  };
}
function wr(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = le(
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
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a[2] & /*$$scope*/
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          a,
          ur
        ) : re(
          /*$$scope*/
          i[87]
        ),
        Fn
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Qn(n) {
  let e, t;
  const l = [Te(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let a = 0; a < l.length; a += 1)
    i = z(i, l[a]);
  return e = new Ga({ props: i }), n[77](e), {
    c() {
      Q(e.$$.fragment);
    },
    m(a, o) {
      Y(e, a, o), t = !0;
    },
    p(a, o) {
      const r = o[1] & /*$$restProps*/
      32768 ? se(l, [me(Te(
        /*$$restProps*/
        a[46],
        "ripple$"
      ))]) : {};
      e.$set(r);
    },
    i(a) {
      t || (S(e.$$.fragment, a), t = !0);
    },
    o(a) {
      R(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[77](null), K(e, a);
    }
  };
}
function xn(n) {
  let e, t;
  const l = [Te(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [Rr] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < l.length; a += 1)
    i = z(i, l[a]);
  return e = new Ya({ props: i }), e.$on(
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
      Q(e.$$.fragment);
    },
    m(a, o) {
      Y(e, a, o), t = !0;
    },
    p(a, o) {
      const r = o[1] & /*$$restProps*/
      32768 ? se(l, [me(Te(
        /*$$restProps*/
        a[46],
        "helperLine$"
      ))]) : {};
      o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (S(e.$$.fragment, a), t = !0);
    },
    o(a) {
      R(e.$$.fragment, a), t = !1;
    },
    d(a) {
      K(e, a);
    }
  };
}
function Rr(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = le(
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
    m(i, a) {
      l && l.m(i, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a[2] & /*$$scope*/
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          a,
          ir
        ) : re(
          /*$$scope*/
          i[87]
        ),
        Mn
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Hr(n) {
  let e, t, l, i, a;
  const o = [_r, br], r = [];
  function s(f, c) {
    return (
      /*valued*/
      f[36] ? 0 : 1
    );
  }
  e = s(n), t = r[e] = o[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && xn(n)
  );
  return {
    c() {
      t.c(), l = Z(), u && u.c(), i = Se();
    },
    m(f, c) {
      r[e].m(f, c), T(f, l, c), u && u.m(f, c), T(f, i, c), a = !0;
    },
    p(f, c) {
      t.p(f, c), /*$$slots*/
      f[47].helper ? u ? (u.p(f, c), c[1] & /*$$slots*/
      65536 && S(u, 1)) : (u = xn(f), u.c(), S(u, 1), u.m(i.parentNode, i)) : u && (pe(), R(u, 1, 1, () => {
        u = null;
      }), ve());
    },
    i(f) {
      a || (S(t), S(u), a = !0);
    },
    o(f) {
      R(t), R(u), a = !1;
    },
    d(f) {
      f && (O(l), O(i)), r[e].d(f), u && u.d(f);
    }
  };
}
const $n = ([n, e]) => `${n}: ${e};`, el = ([n, e]) => `${n}: ${e};`;
function Dr(n, e, t) {
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
  let a = oe(e, i), { $$slots: o = {}, $$scope: r } = e;
  const s = an(o), { applyPassive: u } = Ml, f = Ue(Ee());
  let c = () => {
  };
  function d(k) {
    return k === c;
  }
  let { use: m = [] } = e, { class: _ = "" } = e, { style: y = "" } = e, { ripple: g = !0 } = e, { disabled: v = !1 } = e, { required: C = !1 } = e, { textarea: p = !1 } = e, { variant: b = p ? "outlined" : "standard" } = e, { noLabel: M = !1 } = e, { label: w = void 0 } = e, { type: h = "text" } = e, { value: L = a.input$emptyValueUndefined ? void 0 : c } = e, { files: G = c } = e;
  const H = !d(L) || !d(G);
  d(L) && (L = void 0), d(G) && (G = null);
  let { invalid: A = c } = e, { updateInvalid: U = d(A) } = e;
  d(A) && (A = !1);
  let { dirty: E = !1 } = e, { prefix: V = void 0 } = e, { suffix: ce = void 0 } = e, { validateOnValueChange: de = U } = e, { useNativeValidation: Ce = U } = e, { withLeadingIcon: W = c } = e, { withTrailingIcon: I = c } = e, { input: j = void 0 } = e, { floatingLabel: he = void 0 } = e, { lineRipple: _e = void 0 } = e, { notchedOutline: ye = void 0 } = e, ne, x, je = {}, Ge = {}, qe, Xe = !1, dt = Fe("SMUI:addLayoutListener"), N, Be, Ve = new Promise((k) => Be = k), it, at, ht, rt, At = L;
  dt && (N = dt(un)), We(() => {
    if (t(54, x = new Oa(
      {
        // getRootAdapterMethods_
        addClass: wt,
        removeClass: Rt,
        hasClass: yt,
        registerTextFieldInteractionHandler: (k, Re) => Ht().addEventListener(k, Re),
        deregisterTextFieldInteractionHandler: (k, Re) => Ht().removeEventListener(k, Re),
        registerValidationAttributeChangeHandler: (k) => {
          const Re = (Wt) => Wt.map((Vt) => Vt.attributeName).filter((Vt) => Vt), fn = new MutationObserver((Wt) => {
            Ce && k(Re(Wt));
          }), _i = { attributes: !0 };
          return j && fn.observe(j.getElement(), _i), fn;
        },
        deregisterValidationAttributeChangeHandler: (k) => {
          k.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var k;
          return (k = j == null ? void 0 : j.getElement()) !== null && k !== void 0 ? k : null;
        },
        setInputAttr: (k, Re) => {
          j == null || j.addAttr(k, Re);
        },
        removeInputAttr: (k) => {
          j == null || j.removeAttr(k);
        },
        isFocused: () => document.activeElement === (j == null ? void 0 : j.getElement()),
        registerInputInteractionHandler: (k, Re) => {
          j == null || j.getElement().addEventListener(k, Re, u());
        },
        deregisterInputInteractionHandler: (k, Re) => {
          j == null || j.getElement().removeEventListener(k, Re, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (k) => he && he.float(k),
        getLabelWidth: () => he ? he.getWidth() : 0,
        hasLabel: () => !!he,
        shakeLabel: (k) => he && he.shake(k),
        setLabelRequired: (k) => he && he.setRequired(k),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => _e && _e.activate(),
        deactivateLineRipple: () => _e && _e.deactivate(),
        setLineRippleTransformOrigin: (k) => _e && _e.setRippleCenter(k),
        // getOutlineAdapterMethods_
        closeOutline: () => ye && ye.closeNotch(),
        hasOutline: () => !!ye,
        notchOutline: (k) => ye && ye.notch(k)
      },
      {
        get helperText() {
          return ht;
        },
        get characterCounter() {
          return rt;
        },
        get leadingIcon() {
          return it;
        },
        get trailingIcon() {
          return at;
        }
      }
    )), H) {
      if (j == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      x.init();
    } else
      wi().then(() => {
        if (j == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        x.init();
      });
    return Be(), () => {
      x.destroy();
    };
  }), It(() => {
    N && N();
  });
  function zt(k) {
    t(29, it = k.detail);
  }
  function D(k) {
    t(30, at = k.detail);
  }
  function q(k) {
    t(32, rt = k.detail);
  }
  function Me(k) {
    t(27, qe = k.detail);
  }
  function Et(k) {
    t(31, ht = k.detail);
  }
  function yt(k) {
    var Re;
    return k in je ? (Re = je[k]) !== null && Re !== void 0 ? Re : null : Ht().classList.contains(k);
  }
  function wt(k) {
    je[k] || t(25, je[k] = !0, je);
  }
  function Rt(k) {
    (!(k in je) || je[k]) && t(25, je[k] = !1, je);
  }
  function Pl(k, Re) {
    Ge[k] != Re && (Re === "" || Re == null ? (delete Ge[k], t(26, Ge)) : t(26, Ge[k] = Re, Ge));
  }
  function Nl() {
    j == null || j.focus();
  }
  function Gl() {
    j == null || j.blur();
  }
  function un() {
    if (x) {
      const k = x.shouldFloat;
      x.notchOutline(k);
    }
  }
  function Ht() {
    return ne;
  }
  function jl(k) {
    ee[k ? "unshift" : "push"](() => {
      he = k, t(5, he);
    });
  }
  function zl(k) {
    ee[k ? "unshift" : "push"](() => {
      he = k, t(5, he);
    });
  }
  function Wl(k) {
    ee[k ? "unshift" : "push"](() => {
      ye = k, t(7, ye);
    });
  }
  function Vl(k) {
    ee[k ? "unshift" : "push"](() => {
      j = k, t(2, j);
    });
  }
  function Zl(k) {
    L = k, t(0, L);
  }
  function ql(k) {
    E = k, t(4, E);
  }
  function Xl(k) {
    A = k, t(1, A), t(54, x), t(19, U);
  }
  const Yl = () => t(28, Xe = !1), Kl = () => t(28, Xe = !0), Jl = (k) => ke(ne, "blur", k), Ql = (k) => ke(ne, "focus", k);
  function xl(k) {
    ee[k ? "unshift" : "push"](() => {
      j = k, t(2, j);
    });
  }
  function $l(k) {
    L = k, t(0, L);
  }
  function ei(k) {
    G = k, t(3, G);
  }
  function ti(k) {
    E = k, t(4, E);
  }
  function ni(k) {
    A = k, t(1, A), t(54, x), t(19, U);
  }
  const li = () => t(28, Xe = !1), ii = () => t(28, Xe = !0), ai = (k) => ke(ne, "blur", k), ri = (k) => ke(ne, "focus", k);
  function si(k) {
    ee[k ? "unshift" : "push"](() => {
      _e = k, t(6, _e);
    });
  }
  function oi(k) {
    ee[k ? "unshift" : "push"](() => {
      ne = k, t(24, ne);
    });
  }
  const ui = () => t(29, it = void 0), fi = () => t(30, at = void 0), ci = () => t(32, rt = void 0);
  function di(k) {
    ee[k ? "unshift" : "push"](() => {
      ne = k, t(24, ne);
    });
  }
  const hi = () => t(29, it = void 0), mi = () => t(30, at = void 0), gi = () => {
    t(27, qe = void 0), t(31, ht = void 0);
  }, bi = () => t(32, rt = void 0);
  return n.$$set = (k) => {
    e = z(z({}, e), De(k)), t(46, a = oe(e, i)), "use" in k && t(8, m = k.use), "class" in k && t(9, _ = k.class), "style" in k && t(10, y = k.style), "ripple" in k && t(11, g = k.ripple), "disabled" in k && t(12, v = k.disabled), "required" in k && t(13, C = k.required), "textarea" in k && t(14, p = k.textarea), "variant" in k && t(15, b = k.variant), "noLabel" in k && t(16, M = k.noLabel), "label" in k && t(17, w = k.label), "type" in k && t(18, h = k.type), "value" in k && t(0, L = k.value), "files" in k && t(3, G = k.files), "invalid" in k && t(1, A = k.invalid), "updateInvalid" in k && t(19, U = k.updateInvalid), "dirty" in k && t(4, E = k.dirty), "prefix" in k && t(20, V = k.prefix), "suffix" in k && t(21, ce = k.suffix), "validateOnValueChange" in k && t(48, de = k.validateOnValueChange), "useNativeValidation" in k && t(49, Ce = k.useNativeValidation), "withLeadingIcon" in k && t(22, W = k.withLeadingIcon), "withTrailingIcon" in k && t(23, I = k.withTrailingIcon), "input" in k && t(2, j = k.input), "floatingLabel" in k && t(5, he = k.floatingLabel), "lineRipple" in k && t(6, _e = k.lineRipple), "notchedOutline" in k && t(7, ye = k.notchedOutline), "$$scope" in k && t(87, r = k.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = j && j.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && x && x.isValid() !== !A && (U ? t(1, A = !x.isValid()) : x.setValid(!A)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && x && x.getValidateOnValueChange() !== de && x.setValidateOnValueChange(d(de) ? !1 : de), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && x && x.setUseNativeValidation(d(Ce) ? !0 : Ce), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && x && x.setDisabled(v), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && x && H && At !== L) {
      t(55, At = L);
      const k = `${L}`;
      x.getValue() !== k && x.setValue(k);
    }
  }, [
    L,
    A,
    j,
    G,
    E,
    he,
    _e,
    ye,
    m,
    _,
    y,
    g,
    v,
    C,
    p,
    b,
    M,
    w,
    h,
    U,
    V,
    ce,
    W,
    I,
    ne,
    je,
    Ge,
    qe,
    Xe,
    it,
    at,
    ht,
    rt,
    l,
    f,
    d,
    H,
    Ve,
    zt,
    D,
    q,
    Me,
    Et,
    wt,
    Rt,
    Pl,
    a,
    s,
    de,
    Ce,
    Nl,
    Gl,
    un,
    Ht,
    x,
    At,
    o,
    jl,
    zl,
    Wl,
    Vl,
    Zl,
    ql,
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
    ai,
    ri,
    si,
    oi,
    ui,
    fi,
    ci,
    di,
    hi,
    mi,
    gi,
    bi,
    r
  ];
}
class Mr extends be {
  constructor(e) {
    super(), ge(
      this,
      e,
      Dr,
      Hr,
      fe,
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
Ne({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Ne({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Ne({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Or(n) {
  let e, t, l, i, a, o;
  const r = (
    /*#slots*/
    n[8].default
  ), s = le(
    r,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = J({
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
    f = z(f, u[c]);
  return {
    c() {
      e = P("span"), s && s.c(), ue(e, f);
    },
    m(c, d) {
      T(c, e, d), s && s.m(e, null), n[9](e), i = !0, a || (o = [
        $(l = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], a = !0);
    },
    p(c, [d]) {
      s && s.p && (!i || d & /*$$scope*/
      128) && ae(
        s,
        r,
        c,
        /*$$scope*/
        c[7],
        i ? ie(
          r,
          /*$$scope*/
          c[7],
          d,
          null
        ) : re(
          /*$$scope*/
          c[7]
        ),
        null
      ), ue(e, f = se(u, [
        (!i || d & /*className*/
        2 && t !== (t = J({
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
      ])), l && Ie(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (S(s, c), i = !0);
    },
    o(c) {
      R(s, c), i = !1;
    },
    d(c) {
      c && O(e), s && s.d(c), n[9](null), a = !1, Ae(o);
    }
  };
}
function Tr(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  const r = Ue(Ee());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = Fe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return f;
  }
  function m(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  return n.$$set = (_) => {
    e = z(z({}, e), De(_)), t(5, i = oe(e, l)), "use" in _ && t(0, s = _.use), "class" in _ && t(1, u = _.class), "$$scope" in _ && t(7, o = _.$$scope);
  }, [
    s,
    u,
    f,
    r,
    c,
    i,
    d,
    o,
    a,
    m
  ];
}
class Ur extends be {
  constructor(e) {
    super(), ge(this, e, Tr, Or, fe, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Ne({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Ne({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Ne({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Ne({
  class: "mdc-menu__selection-group-icon",
  component: Ur
});
Ne({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Ne({
  class: "mdc-dialog__title",
  tag: "h2"
});
Ne({
  class: "mdc-dialog__content",
  tag: "div"
});
Ne({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
Ne({
  class: "smui-paper__content",
  tag: "div"
});
Ne({
  class: "smui-paper__title",
  tag: "h5"
});
Ne({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Br(n) {
  let e, t;
  return {
    c() {
      e = tt("svg"), t = tt("path"), B(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 -960 960 960"), B(e, "width", "24"), B(e, "height", "24"), B(e, "fill", "#004552");
    },
    m(l, i) {
      T(l, e, i), F(e, t);
    },
    p: te,
    i: te,
    o: te,
    d(l) {
      l && O(e);
    }
  };
}
class Fr extends be {
  constructor(e) {
    super(), ge(this, e, null, Br, fe, {});
  }
}
function Pr(n) {
  let e, t;
  return {
    c() {
      e = tt("svg"), t = tt("path"), B(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "height", "24px"), B(e, "viewBox", "0 -960 960 960"), B(e, "width", "24px"), B(e, "fill", "#004552");
    },
    m(l, i) {
      T(l, e, i), F(e, t);
    },
    p: te,
    i: te,
    o: te,
    d(l) {
      l && O(e);
    }
  };
}
class Nr extends be {
  constructor(e) {
    super(), ge(this, e, null, Pr, fe, {});
  }
}
function Gr(n) {
  let e, t;
  return {
    c() {
      e = tt("svg"), t = tt("path"), B(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "height", "24px"), B(e, "viewBox", "0 -960 960 960"), B(e, "width", "24px"), B(e, "fill", "#004552");
    },
    m(l, i) {
      T(l, e, i), F(e, t);
    },
    p: te,
    i: te,
    o: te,
    d(l) {
      l && O(e);
    }
  };
}
class jr extends be {
  constructor(e) {
    super(), ge(this, e, null, Gr, fe, {});
  }
}
function zr(n) {
  let e, t, l, i;
  const a = (
    /*#slots*/
    n[7].default
  ), o = le(
    a,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      e = P("span"), o && o.c(), Ut(e, "display", "inline-block");
    },
    m(r, s) {
      T(r, e, s), o && o.m(e, null), n[8](e), t = !0, l || (i = [
        X(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[1]
        ),
        X(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[2]
        )
      ], l = !0);
    },
    p(r, [s]) {
      o && o.p && (!t || s & /*$$scope*/
      64) && ae(
        o,
        a,
        r,
        /*$$scope*/
        r[6],
        t ? ie(
          a,
          /*$$scope*/
          r[6],
          s,
          null
        ) : re(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      t || (S(o, r), t = !0);
    },
    o(r) {
      R(o, r), t = !1;
    },
    d(r) {
      r && O(e), o && o.d(r), n[8](null), l = !1, Ae(i);
    }
  };
}
function Wr(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: a = "" } = e, { hoverDelay: o = 300 } = e, { hideDelay: r = 500 } = e, s, u, f, c, d = { left: 0, top: 0, width: 0 };
  function m() {
    clearTimeout(u), d = f.getBoundingClientRect(), s = setTimeout(
      () => {
        y();
      },
      o
    );
  }
  function _() {
    clearTimeout(s), u = setTimeout(
      () => {
        g();
      },
      r
    );
  }
  function y() {
    g(), c = document.createElement("div"), c.setAttribute("role", "tooltip"), c.textContent = a, Object.assign(c.style, {
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
    }), document.body.appendChild(c);
  }
  function g() {
    c && c.parentNode && (c.parentNode.removeChild(c), c = null);
  }
  It(() => {
    clearTimeout(s), clearTimeout(u), g();
  });
  function v(C) {
    ee[C ? "unshift" : "push"](() => {
      f = C, t(0, f);
    });
  }
  return n.$$set = (C) => {
    "content" in C && t(3, a = C.content), "hoverDelay" in C && t(4, o = C.hoverDelay), "hideDelay" in C && t(5, r = C.hideDelay), "$$scope" in C && t(6, i = C.$$scope);
  }, [
    f,
    m,
    _,
    a,
    o,
    r,
    i,
    l,
    v
  ];
}
class Vr extends be {
  constructor(e) {
    super(), ge(this, e, Wr, zr, fe, { content: 3, hoverDelay: 4, hideDelay: 5 });
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
var Ke = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, tl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ot = {
  ARIA_SELECTED: tl.ARIA_SELECTED,
  ARIA_SORT: tl.ARIA_SORT
}, ze;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(ze || (ze = {}));
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
var Zr = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      return n.call(this, Pe(Pe({}, e.defaultAdapter), t)) || this;
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
      return on(this, void 0, void 0, function() {
        return Ui(this, function(t) {
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
      for (var l = t.columnId, i = t.columnIndex, a = t.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, Ke.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Ke.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, ot.ARIA_SORT, ze.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, ze.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Ke.HEADER_CELL_SORTED);
      var r = this.adapter.getAttributeByHeaderCellIndex(i, ot.ARIA_SORT), s = ze.NONE;
      r === ze.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Ke.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ot.ARIA_SORT, ze.DESCENDING), s = ze.DESCENDING) : r === ze.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Ke.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ot.ARIA_SORT, ze.ASCENDING), s = ze.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ot.ARIA_SORT, ze.ASCENDING), s = ze.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
        columnId: l,
        columnIndex: i,
        headerCell: a,
        sortValue: s
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
      }), this.adapter.addClass(Ke.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Ke.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, Ke.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ot.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Ke.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ot.ARIA_SELECTED, "false"));
    }, e;
  }(ct)
);
const qr = (n) => ({}), nl = (n) => ({}), Xr = (n) => ({}), ll = (n) => ({});
function il(n) {
  let e, t, l, i, a;
  const o = (
    /*#slots*/
    n[36].progress
  ), r = le(
    o,
    n,
    /*$$scope*/
    n[35],
    ll
  );
  return {
    c() {
      e = P("div"), t = P("div"), l = Z(), r && r.c(), B(t, "class", "mdc-data-table__scrim"), B(e, "class", "mdc-data-table__progress-indicator"), B(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(al).join(" "));
    },
    m(s, u) {
      T(s, e, u), F(e, t), F(e, l), r && r.m(e, null), a = !0;
    },
    p(s, u) {
      r && r.p && (!a || u[1] & /*$$scope*/
      16) && ae(
        r,
        o,
        s,
        /*$$scope*/
        s[35],
        a ? ie(
          o,
          /*$$scope*/
          s[35],
          u,
          Xr
        ) : re(
          /*$$scope*/
          s[35]
        ),
        ll
      ), (!a || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        s[13]
      ).map(al).join(" "))) && B(e, "style", i);
    },
    i(s) {
      a || (S(r, s), a = !0);
    },
    o(s) {
      R(r, s), a = !1;
    },
    d(s) {
      s && O(e), r && r.d(s);
    }
  };
}
function Yr(n) {
  let e, t, l, i, a, o, r, s, u, f, c, d, m, _;
  const y = (
    /*#slots*/
    n[36].default
  ), g = le(
    y,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let v = [
    {
      class: i = J({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Te(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], C = {};
  for (let H = 0; H < v.length; H += 1)
    C = z(C, v[H]);
  let p = [
    {
      class: o = J({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Te(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], b = {};
  for (let H = 0; H < p.length; H += 1)
    b = z(b, p[H]);
  let M = (
    /*$$slots*/
    n[24].progress && il(n)
  );
  const w = (
    /*#slots*/
    n[36].paginate
  ), h = le(
    w,
    n,
    /*$$scope*/
    n[35],
    nl
  );
  let L = [
    {
      class: f = J({
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
    Ct(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], G = {};
  for (let H = 0; H < L.length; H += 1)
    G = z(G, L[H]);
  return {
    c() {
      e = P("div"), t = P("div"), l = P("table"), g && g.c(), s = Z(), M && M.c(), u = Z(), h && h.c(), ue(l, C), ue(t, b), ue(e, G);
    },
    m(H, A) {
      T(H, e, A), F(e, t), F(t, l), g && g.m(l, null), n[37](t), F(e, s), M && M.m(e, null), F(e, u), h && h.m(e, null), n[38](e), d = !0, m || (_ = [
        $(a = we.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        $(r = we.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        $(c = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        X(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        X(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        X(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        X(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        X(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        X(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        X(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        X(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        X(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], m = !0);
    },
    p(H, A) {
      g && g.p && (!d || A[1] & /*$$scope*/
      16) && ae(
        g,
        y,
        H,
        /*$$scope*/
        H[35],
        d ? ie(
          y,
          /*$$scope*/
          H[35],
          A,
          null
        ) : re(
          /*$$scope*/
          H[35]
        ),
        null
      ), ue(l, C = se(v, [
        (!d || A[0] & /*table$class*/
        64 && i !== (i = J({
          [
            /*table$class*/
            H[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        A[0] & /*$$restProps*/
        33554432 && Te(
          /*$$restProps*/
          H[25],
          "table$"
        )
      ])), a && Ie(a.update) && A[0] & /*table$use*/
      32 && a.update.call(
        null,
        /*table$use*/
        H[5]
      ), ue(t, b = se(p, [
        (!d || A[0] & /*container$class*/
        16 && o !== (o = J({
          [
            /*container$class*/
            H[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: o },
        A[0] & /*$$restProps*/
        33554432 && Te(
          /*$$restProps*/
          H[25],
          "container$"
        )
      ])), r && Ie(r.update) && A[0] & /*container$use*/
      8 && r.update.call(
        null,
        /*container$use*/
        H[3]
      ), /*$$slots*/
      H[24].progress ? M ? (M.p(H, A), A[0] & /*$$slots*/
      16777216 && S(M, 1)) : (M = il(H), M.c(), S(M, 1), M.m(e, u)) : M && (pe(), R(M, 1, 1, () => {
        M = null;
      }), ve()), h && h.p && (!d || A[1] & /*$$scope*/
      16) && ae(
        h,
        w,
        H,
        /*$$scope*/
        H[35],
        d ? ie(
          w,
          /*$$scope*/
          H[35],
          A,
          qr
        ) : re(
          /*$$scope*/
          H[35]
        ),
        nl
      ), ue(e, G = se(L, [
        (!d || A[0] & /*className, stickyHeader, internalClasses*/
        4102 && f !== (f = J({
          [
            /*className*/
            H[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            H[2]
          ),
          .../*internalClasses*/
          H[12]
        }))) && { class: f },
        A[0] & /*$$restProps*/
        33554432 && Ct(
          /*$$restProps*/
          H[25],
          ["container$", "table$"]
        )
      ])), c && Ie(c.update) && A[0] & /*use*/
      1 && c.update.call(
        null,
        /*use*/
        H[0]
      );
    },
    i(H) {
      d || (S(g, H), S(M), S(h, H), d = !0);
    },
    o(H) {
      R(g, H), R(M), R(h, H), d = !1;
    },
    d(H) {
      H && O(e), g && g.d(H), n[37](null), M && M.d(), h && h.d(H), n[38](null), m = !1, Ae(_);
    }
  };
}
const al = ([n, e]) => `${n}: ${e};`;
function Kr(n, e, t) {
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
  let i = oe(e, l), a, o, r, { $$slots: s = {}, $$scope: u } = e;
  const f = an(s), { closest: c } = Tl, d = Ue(Ee());
  let { use: m = [] } = e, { class: _ = "" } = e, { stickyHeader: y = !1 } = e, { sortable: g = !1 } = e, { sort: v = null } = e, { sortDirection: C = "ascending" } = e, { sortAscendingAriaLabel: p = "sorted, ascending" } = e, { sortDescendingAriaLabel: b = "sorted, descending" } = e, { container$use: M = [] } = e, { container$class: w = "" } = e, { table$use: h = [] } = e, { table$class: L = "" } = e, G, H, A, U, E, V = {}, ce = { height: "auto", top: "initial" }, de = Fe("SMUI:addLayoutListener"), Ce, W = !1, I = Ft(!1);
  pt(n, I, (D) => t(34, a = D));
  let j = Ft(v);
  pt(n, j, (D) => t(45, r = D));
  let he = Ft(C);
  pt(n, he, (D) => t(44, o = D)), Oe("SMUI:checkbox:context", "data-table"), Oe("SMUI:linear-progress:context", "data-table"), Oe("SMUI:linear-progress:closed", I), Oe("SMUI:data-table:sortable", g), Oe("SMUI:data-table:sort", j), Oe("SMUI:data-table:sortDirection", he), Oe("SMUI:data-table:sortAscendingAriaLabel", p), Oe("SMUI:data-table:sortDescendingAriaLabel", b), de && (Ce = de(Be));
  let _e;
  We(() => (t(7, H = new Zr({
    addClass: je,
    removeClass: Ge,
    getHeaderCellElements: () => {
      var D;
      return (D = U == null ? void 0 : U.cells.map((q) => q.element)) !== null && D !== void 0 ? D : [];
    },
    getHeaderCellCount: () => {
      var D;
      return (D = U == null ? void 0 : U.cells.length) !== null && D !== void 0 ? D : 0;
    },
    getAttributeByHeaderCellIndex: (D, q) => {
      var Me;
      return (Me = U == null ? void 0 : U.orderedCells[D].getAttr(q)) !== null && Me !== void 0 ? Me : null;
    },
    setAttributeByHeaderCellIndex: (D, q, Me) => {
      U == null || U.orderedCells[D].addAttr(q, Me);
    },
    setClassNameByHeaderCellIndex: (D, q) => {
      U == null || U.orderedCells[D].addClass(q);
    },
    removeClassNameByHeaderCellIndex: (D, q) => {
      U == null || U.orderedCells[D].removeClass(q);
    },
    notifySortAction: (D) => {
      t(26, v = D.columnId), t(27, C = D.sortValue), ke(Ve(), "SMUIDataTable:sorted", D, void 0, !0);
    },
    getTableContainerHeight: () => A.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const D = Ve().querySelector(".mdc-data-table__header-row");
      if (!D)
        throw new Error("MDCDataTable: Table header element not found.");
      return D.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (D) => {
      t(13, ce = D);
    },
    addClassAtRowIndex: (D, q) => {
      E == null || E.orderedRows[D].addClass(q);
    },
    getRowCount: () => {
      var D;
      return (D = E == null ? void 0 : E.rows.length) !== null && D !== void 0 ? D : 0;
    },
    getRowElements: () => {
      var D;
      return (D = E == null ? void 0 : E.rows.map((q) => q.element)) !== null && D !== void 0 ? D : [];
    },
    getRowIdAtIndex: (D) => {
      var q;
      return (q = E == null ? void 0 : E.orderedRows[D].rowId) !== null && q !== void 0 ? q : null;
    },
    getRowIndexByChildElement: (D) => {
      var q;
      return (q = E == null ? void 0 : E.orderedRows.map((Me) => Me.element).indexOf(c(D, ".mdc-data-table__row"))) !== null && q !== void 0 ? q : -1;
    },
    getSelectedRowCount: () => {
      var D;
      return (D = E == null ? void 0 : E.rows.filter((q) => q.selected).length) !== null && D !== void 0 ? D : 0;
    },
    isCheckboxAtRowIndexChecked: (D) => {
      const q = E == null ? void 0 : E.orderedRows[D].checkbox;
      return q ? q.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const D = U == null ? void 0 : U.checkbox;
      return D ? D.checked : !1;
    },
    isRowsSelectable: () => !!Ve().querySelector(".mdc-data-table__row-checkbox") || !!Ve().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (D) => {
      const q = E == null ? void 0 : E.orderedRows[D.rowIndex];
      q && ke(
        Ve(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: q.element,
          rowId: q.rowId,
          rowIndex: D.rowIndex,
          selected: D.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      qe(!1), ke(Ve(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      qe(!1), ke(Ve(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (D) => {
      ke(Ve(), "SMUIDataTable:rowClick", D, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (D, q) => {
      E == null || E.orderedRows[D].removeClass(q);
    },
    setAttributeAtRowIndex: (D, q, Me) => {
      E == null || E.orderedRows[D].addAttr(q, Me);
    },
    setHeaderRowCheckboxChecked: (D) => {
      const q = U == null ? void 0 : U.checkbox;
      q && (q.checked = D);
    },
    setHeaderRowCheckboxIndeterminate: qe,
    setRowCheckboxCheckedAtIndex: (D, q) => {
      const Me = E == null ? void 0 : E.orderedRows[D].checkbox;
      Me && (Me.checked = q);
    },
    setSortStatusLabelByHeaderCellIndex: (D, q) => {
    }
    // Handled automatically.
  })), H.init(), H.layout(), t(14, W = !0), () => {
    H.destroy();
  })), It(() => {
    Ce && Ce();
  });
  function ye(D) {
    t(10, U = D.detail);
  }
  function ne(D) {
    t(11, E = D.detail);
  }
  function x(D) {
    H && H.handleRowCheckboxChange(D);
  }
  function je(D) {
    V[D] || t(12, V[D] = !0, V);
  }
  function Ge(D) {
    (!(D in V) || V[D]) && t(12, V[D] = !1, V);
  }
  function qe(D) {
    const q = U == null ? void 0 : U.checkbox;
    q && (q.indeterminate = D);
  }
  function Xe(D) {
    if (!H || !D.detail.target)
      return;
    const q = c(D.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && N(q);
  }
  function dt(D) {
    if (!H || !D.detail.target)
      return;
    const q = c(D.detail.target, ".mdc-data-table__row");
    q && H && H.handleRowClick({ rowId: D.detail.rowId, row: q });
  }
  function N(D) {
    var q, Me;
    const Et = (q = U == null ? void 0 : U.orderedCells) !== null && q !== void 0 ? q : [], yt = Et.map((Rt) => Rt.element).indexOf(D);
    if (yt === -1)
      return;
    const wt = (Me = Et[yt].columnId) !== null && Me !== void 0 ? Me : null;
    H.handleSortAction({ columnId: wt, columnIndex: yt, headerCell: D });
  }
  function Be() {
    return H.layout();
  }
  function Ve() {
    return G;
  }
  function it(D) {
    ee[D ? "unshift" : "push"](() => {
      A = D, t(9, A);
    });
  }
  function at(D) {
    ee[D ? "unshift" : "push"](() => {
      G = D, t(8, G);
    });
  }
  const ht = () => H && W && H.layout(), rt = () => t(10, U = void 0), At = () => t(11, E = void 0), zt = () => H && H.handleHeaderRowCheckboxChange();
  return n.$$set = (D) => {
    e = z(z({}, e), De(D)), t(25, i = oe(e, l)), "use" in D && t(0, m = D.use), "class" in D && t(1, _ = D.class), "stickyHeader" in D && t(2, y = D.stickyHeader), "sortable" in D && t(28, g = D.sortable), "sort" in D && t(26, v = D.sort), "sortDirection" in D && t(27, C = D.sortDirection), "sortAscendingAriaLabel" in D && t(29, p = D.sortAscendingAriaLabel), "sortDescendingAriaLabel" in D && t(30, b = D.sortDescendingAriaLabel), "container$use" in D && t(3, M = D.container$use), "container$class" in D && t(4, w = D.container$class), "table$use" in D && t(5, h = D.table$use), "table$class" in D && t(6, L = D.table$class), "$$scope" in D && t(35, u = D.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && $t(j, r = v, r), n.$$.dirty[0] & /*sortDirection*/
    134217728 && $t(he, o = C, o), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && f.progress && H && _e !== a && (t(33, _e = a), a ? H.hideProgress() : H.showProgress());
  }, [
    m,
    _,
    y,
    M,
    w,
    h,
    L,
    H,
    G,
    A,
    U,
    E,
    V,
    ce,
    W,
    d,
    I,
    j,
    he,
    ye,
    ne,
    x,
    Xe,
    dt,
    f,
    i,
    v,
    C,
    g,
    p,
    b,
    Be,
    Ve,
    _e,
    a,
    u,
    s,
    it,
    at,
    ht,
    rt,
    At,
    zt
  ];
}
class Jr extends be {
  constructor(e) {
    super(), ge(
      this,
      e,
      Kr,
      Yr,
      fe,
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
function Qr(n) {
  let e, t, l, i, a;
  const o = (
    /*#slots*/
    n[10].default
  ), r = le(
    o,
    n,
    /*$$scope*/
    n[9],
    null
  );
  let s = [
    /*$$restProps*/
    n[7]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = z(u, s[f]);
  return {
    c() {
      e = P("thead"), r && r.c(), ue(e, u);
    },
    m(f, c) {
      T(f, e, c), r && r.m(e, null), n[11](e), l = !0, i || (a = [
        $(t = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        X(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        X(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        X(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        X(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(f, [c]) {
      r && r.p && (!l || c & /*$$scope*/
      512) && ae(
        r,
        o,
        f,
        /*$$scope*/
        f[9],
        l ? ie(
          o,
          /*$$scope*/
          f[9],
          c,
          null
        ) : re(
          /*$$scope*/
          f[9]
        ),
        null
      ), ue(e, u = se(s, [c & /*$$restProps*/
      128 && /*$$restProps*/
      f[7]])), t && Ie(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (S(r, f), l = !0);
    },
    o(f) {
      R(r, f), l = !1;
    },
    d(f) {
      f && O(e), r && r.d(f), n[11](null), i = !1, Ae(a);
    }
  };
}
function xr(n, e, t) {
  const l = ["use", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  const r = Ue(Ee());
  let { use: s = [] } = e, u, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  Oe("SMUI:data-table:row:header", !0), We(() => {
    const b = {
      get cells() {
        return c;
      },
      get orderedCells() {
        return g();
      },
      get checkbox() {
        return f;
      }
    };
    return ke(v(), "SMUIDataTableHeader:mount", b), () => {
      ke(v(), "SMUIDataTableHeader:unmount", b);
    };
  });
  function m(b) {
    t(2, f = b.detail);
  }
  function _(b) {
    c.push(b.detail), d.set(b.detail.element, b.detail), b.stopPropagation();
  }
  function y(b) {
    const M = c.indexOf(b.detail);
    M !== -1 && (c.splice(M, 1), c = c), d.delete(b.detail.element), b.stopPropagation();
  }
  function g() {
    return [...v().querySelectorAll(".mdc-data-table__header-cell")].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_header_cell_accessor);
  }
  function v() {
    return u;
  }
  function C(b) {
    ee[b ? "unshift" : "push"](() => {
      u = b, t(1, u);
    });
  }
  const p = () => t(2, f = void 0);
  return n.$$set = (b) => {
    e = z(z({}, e), De(b)), t(7, i = oe(e, l)), "use" in b && t(0, s = b.use), "$$scope" in b && t(9, o = b.$$scope);
  }, [
    s,
    u,
    f,
    r,
    m,
    _,
    y,
    i,
    v,
    o,
    a,
    C,
    p
  ];
}
class $r extends be {
  constructor(e) {
    super(), ge(this, e, xr, Qr, fe, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function es(n) {
  let e, t, l, i, a, o;
  const r = (
    /*#slots*/
    n[9].default
  ), s = le(
    r,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = J({
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
    f = z(f, u[c]);
  return {
    c() {
      e = P("tbody"), s && s.c(), ue(e, f);
    },
    m(c, d) {
      T(c, e, d), s && s.m(e, null), n[10](e), i = !0, a || (o = [
        $(l = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        X(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        X(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], a = !0);
    },
    p(c, [d]) {
      s && s.p && (!i || d & /*$$scope*/
      256) && ae(
        s,
        r,
        c,
        /*$$scope*/
        c[8],
        i ? ie(
          r,
          /*$$scope*/
          c[8],
          d,
          null
        ) : re(
          /*$$scope*/
          c[8]
        ),
        null
      ), ue(e, f = se(u, [
        (!i || d & /*className*/
        2 && t !== (t = J({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), l && Ie(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (S(s, c), i = !0);
    },
    o(c) {
      R(s, c), i = !1;
    },
    d(c) {
      c && O(e), s && s.d(c), n[10](null), a = !1, Ae(o);
    }
  };
}
function ts(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  const r = Ue(Ee());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  Oe("SMUI:data-table:row:header", !1), We(() => {
    const C = {
      get rows() {
        return c;
      },
      get orderedRows() {
        return y();
      }
    };
    return ke(g(), "SMUIDataTableBody:mount", C), () => {
      ke(g(), "SMUIDataTableBody:unmount", C);
    };
  });
  function m(C) {
    c.push(C.detail), d.set(C.detail.element, C.detail), C.stopPropagation();
  }
  function _(C) {
    const p = c.indexOf(C.detail);
    p !== -1 && (c.splice(p, 1), c = c), d.delete(C.detail.element), C.stopPropagation();
  }
  function y() {
    return [...g().querySelectorAll(".mdc-data-table__row")].map((C) => d.get(C)).filter((C) => C && C._smui_data_table_row_accessor);
  }
  function g() {
    return f;
  }
  function v(C) {
    ee[C ? "unshift" : "push"](() => {
      f = C, t(2, f);
    });
  }
  return n.$$set = (C) => {
    e = z(z({}, e), De(C)), t(6, i = oe(e, l)), "use" in C && t(0, s = C.use), "class" in C && t(1, u = C.class), "$$scope" in C && t(8, o = C.$$scope);
  }, [
    s,
    u,
    f,
    r,
    m,
    _,
    i,
    g,
    o,
    a,
    v
  ];
}
class ns extends be {
  constructor(e) {
    super(), ge(this, e, ts, es, fe, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function ls(n) {
  let e, t, l, i, a, o, r;
  const s = (
    /*#slots*/
    n[15].default
  ), u = le(
    s,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let f = [
    {
      class: t = J({
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
    c = z(c, f[d]);
  return {
    c() {
      e = P("tr"), u && u.c(), ue(e, c);
    },
    m(d, m) {
      T(d, e, m), u && u.m(e, null), n[16](e), a = !0, o || (r = [
        $(i = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        X(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        X(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        X(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], o = !0);
    },
    p(d, [m]) {
      u && u.p && (!a || m & /*$$scope*/
      16384) && ae(
        u,
        s,
        d,
        /*$$scope*/
        d[14],
        a ? ie(
          s,
          /*$$scope*/
          d[14],
          m,
          null
        ) : re(
          /*$$scope*/
          d[14]
        ),
        null
      ), ue(e, c = se(f, [
        (!a || m & /*className, checkbox, internalClasses*/
        26 && t !== (t = J({
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
        (!a || m & /*checkbox*/
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
      ])), i && Ie(i.update) && m & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      a || (S(u, d), a = !0);
    },
    o(d) {
      R(u, d), a = !1;
    },
    d(d) {
      d && O(e), u && u.d(d), n[16](null), o = !1, Ae(r);
    }
  };
}
let is = 0;
function as(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = oe(e, l), { $$slots: a = {}, $$scope: o } = e;
  const r = Ue(Ee());
  let { use: s = [] } = e, { class: u = "" } = e, { rowId: f = "SMUI-data-table-row-" + is++ } = e, c, d, m = {}, _ = {}, y = Fe("SMUI:data-table:row:header");
  We(() => {
    const A = y ? {
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
      addClass: v,
      removeClass: C,
      getAttr: p,
      addAttr: b
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return h();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return f;
      },
      get selected() {
        var U;
        return (U = d && d.checked) !== null && U !== void 0 ? U : !1;
      },
      addClass: v,
      removeClass: C,
      getAttr: p,
      addAttr: b
    };
    return ke(h(), "SMUIDataTableRow:mount", A), () => {
      ke(h(), "SMUIDataTableRow:unmount", A);
    };
  });
  function g(A) {
    t(3, d = A.detail);
  }
  function v(A) {
    m[A] || t(4, m[A] = !0, m);
  }
  function C(A) {
    (!(A in m) || m[A]) && t(4, m[A] = !1, m);
  }
  function p(A) {
    var U;
    return A in _ ? (U = _[A]) !== null && U !== void 0 ? U : null : h().getAttribute(A);
  }
  function b(A, U) {
    _[A] !== U && t(5, _[A] = U, _);
  }
  function M(A) {
    ke(h(), "SMUIDataTableHeader:click", A);
  }
  function w(A) {
    ke(h(), "SMUIDataTableRow:click", { rowId: f, target: A.target });
  }
  function h() {
    return c;
  }
  function L(A) {
    ee[A ? "unshift" : "push"](() => {
      c = A, t(2, c);
    });
  }
  const G = (A) => y ? M(A) : w(A), H = () => t(3, d = void 0);
  return n.$$set = (A) => {
    e = z(z({}, e), De(A)), t(11, i = oe(e, l)), "use" in A && t(0, s = A.use), "class" in A && t(1, u = A.class), "rowId" in A && t(12, f = A.rowId), "$$scope" in A && t(14, o = A.$$scope);
  }, [
    s,
    u,
    c,
    d,
    m,
    _,
    r,
    y,
    g,
    M,
    w,
    i,
    f,
    h,
    o,
    a,
    L,
    G,
    H
  ];
}
class Bl extends be {
  constructor(e) {
    super(), ge(this, e, as, ls, fe, {
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
function rs(n) {
  let e, t, l, i, a, o;
  const r = (
    /*#slots*/
    n[22].default
  ), s = le(
    r,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = J({
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
    f = z(f, u[c]);
  return {
    c() {
      e = P("td"), s && s.c(), ue(e, f);
    },
    m(c, d) {
      T(c, e, d), s && s.m(e, null), n[25](e), i = !0, a || (o = [
        $(l = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        X(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], a = !0);
    },
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      2097152) && ae(
        s,
        r,
        c,
        /*$$scope*/
        c[21],
        i ? ie(
          r,
          /*$$scope*/
          c[21],
          d,
          null
        ) : re(
          /*$$scope*/
          c[21]
        ),
        null
      ), ue(e, f = se(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = J({
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
      ])), l && Ie(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (S(s, c), i = !0);
    },
    o(c) {
      R(s, c), i = !1;
    },
    d(c) {
      c && O(e), s && s.d(c), n[25](null), a = !1, Ae(o);
    }
  };
}
function ss(n) {
  let e, t, l, i, a, o, r, s, u;
  const f = [us, os], c = [];
  function d(y, g) {
    return (
      /*sortable*/
      y[5] ? 0 : 1
    );
  }
  t = d(n), l = c[t] = f[t](n);
  let m = [
    {
      class: i = J({
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
  ], _ = {};
  for (let y = 0; y < m.length; y += 1)
    _ = z(_, m[y]);
  return {
    c() {
      e = P("th"), l.c(), ue(e, _);
    },
    m(y, g) {
      T(y, e, g), c[t].m(e, null), n[23](e), r = !0, s || (u = [
        $(o = we.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        X(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], s = !0);
    },
    p(y, g) {
      let v = t;
      t = d(y), t === v ? c[t].p(y, g) : (pe(), R(c[v], 1, 1, () => {
        c[v] = null;
      }), ve(), l = c[t], l ? l.p(y, g) : (l = c[t] = f[t](y), l.c()), S(l, 1), l.m(e, null)), ue(e, _ = se(m, [
        (!r || g & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = J({
          [
            /*className*/
            y[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            y[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            y[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            y[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            y[5] && /*$sort*/
            y[9] === /*columnId*/
            y[4]
          ),
          .../*internalClasses*/
          y[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!r || g & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          y[4]
        ) },
        (!r || g & /*sortable, $sort, columnId, $sortDirection*/
        1584 && a !== (a = /*sortable*/
        y[5] ? (
          /*$sort*/
          y[9] === /*columnId*/
          y[4] ? (
            /*$sortDirection*/
            y[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": a },
        g & /*internalAttrs*/
        256 && /*internalAttrs*/
        y[8],
        g & /*$$restProps*/
        524288 && /*$$restProps*/
        y[19]
      ])), o && Ie(o.update) && g & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        y[0]
      );
    },
    i(y) {
      r || (S(l), r = !0);
    },
    o(y) {
      R(l), r = !1;
    },
    d(y) {
      y && O(e), c[t].d(), n[23](null), s = !1, Ae(u);
    }
  };
}
function os(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = le(
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
      2097152) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? ie(
          t,
          /*$$scope*/
          i[21],
          a,
          null
        ) : re(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function us(n) {
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
  ), a, o, r;
  const s = (
    /*#slots*/
    n[22].default
  ), u = le(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = P("div"), u && u.c(), t = Z(), l = P("div"), a = Le(i), B(l, "class", "mdc-data-table__sort-status-label"), B(l, "aria-hidden", "true"), B(l, "id", o = /*columnId*/
      n[4] + "-status-label"), B(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(f, c) {
      T(f, e, c), u && u.m(e, null), F(e, t), F(e, l), F(l, a), r = !0;
    },
    p(f, c) {
      u && u.p && (!r || c & /*$$scope*/
      2097152) && ae(
        u,
        s,
        f,
        /*$$scope*/
        f[21],
        r ? ie(
          s,
          /*$$scope*/
          f[21],
          c,
          null
        ) : re(
          /*$$scope*/
          f[21]
        ),
        null
      ), (!r || c & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && He(a, i), (!r || c & /*columnId*/
      16 && o !== (o = /*columnId*/
      f[4] + "-status-label")) && B(l, "id", o);
    },
    i(f) {
      r || (S(u, f), r = !0);
    },
    o(f) {
      R(u, f), r = !1;
    },
    d(f) {
      f && O(e), u && u.d(f);
    }
  };
}
function fs(n) {
  let e, t, l, i;
  const a = [ss, rs], o = [];
  function r(s, u) {
    return (
      /*header*/
      s[12] ? 0 : 1
    );
  }
  return e = r(n), t = o[e] = a[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(s, u) {
      o[e].m(s, u), T(s, l, u), i = !0;
    },
    p(s, [u]) {
      t.p(s, u);
    },
    i(s) {
      i || (S(t), i = !0);
    },
    o(s) {
      R(t), i = !1;
    },
    d(s) {
      s && O(l), o[e].d(s);
    }
  };
}
let cs = 0;
function ds(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = oe(e, l), a, o, { $$slots: r = {}, $$scope: s } = e;
  const u = Ue(Ee());
  let f = Fe("SMUI:data-table:row:header"), { use: c = [] } = e, { class: d = "" } = e, { numeric: m = !1 } = e, { checkbox: _ = !1 } = e, { columnId: y = f ? "SMUI-data-table-column-" + cs++ : "SMUI-data-table-unused" } = e, { sortable: g = Fe("SMUI:data-table:sortable") } = e, v, C = {}, p = {}, b = Fe("SMUI:data-table:sort");
  pt(n, b, (I) => t(9, a = I));
  let M = Fe("SMUI:data-table:sortDirection");
  pt(n, M, (I) => t(10, o = I));
  let w = Fe("SMUI:data-table:sortAscendingAriaLabel"), h = Fe("SMUI:data-table:sortDescendingAriaLabel");
  g && (Oe("SMUI:label:context", "data-table:sortable-header-cell"), Oe("SMUI:icon-button:context", "data-table:sortable-header-cell"), Oe("SMUI:icon-button:aria-describedby", y + "-status-label")), We(() => {
    const I = f ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return V();
      },
      get columnId() {
        return y;
      },
      addClass: L,
      removeClass: G,
      getAttr: H,
      addAttr: A
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return V();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: G,
      getAttr: H,
      addAttr: A
    };
    return ke(V(), "SMUIDataTableCell:mount", I), () => {
      ke(V(), "SMUIDataTableCell:unmount", I);
    };
  });
  function L(I) {
    C[I] || t(7, C[I] = !0, C);
  }
  function G(I) {
    (!(I in C) || C[I]) && t(7, C[I] = !1, C);
  }
  function H(I) {
    var j;
    return I in p ? (j = p[I]) !== null && j !== void 0 ? j : null : V().getAttribute(I);
  }
  function A(I, j) {
    p[I] !== j && t(8, p[I] = j, p);
  }
  function U(I) {
    ke(V(), "SMUIDataTableHeaderCheckbox:change", I);
  }
  function E(I) {
    ke(V(), "SMUIDataTableBodyCheckbox:change", I);
  }
  function V() {
    return v;
  }
  function ce(I) {
    ee[I ? "unshift" : "push"](() => {
      v = I, t(6, v);
    });
  }
  const de = (I) => _ && U(I);
  function Ce(I) {
    ee[I ? "unshift" : "push"](() => {
      v = I, t(6, v);
    });
  }
  const W = (I) => _ && E(I);
  return n.$$set = (I) => {
    e = z(z({}, e), De(I)), t(19, i = oe(e, l)), "use" in I && t(0, c = I.use), "class" in I && t(1, d = I.class), "numeric" in I && t(2, m = I.numeric), "checkbox" in I && t(3, _ = I.checkbox), "columnId" in I && t(4, y = I.columnId), "sortable" in I && t(5, g = I.sortable), "$$scope" in I && t(21, s = I.$$scope);
  }, [
    c,
    d,
    m,
    _,
    y,
    g,
    v,
    C,
    p,
    a,
    o,
    u,
    f,
    b,
    M,
    w,
    h,
    U,
    E,
    i,
    V,
    s,
    r,
    ce,
    de,
    Ce,
    W
  ];
}
class jt extends be {
  constructor(e) {
    super(), ge(this, e, ds, fs, fe, {
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
const { Boolean: Fl } = Ai;
function rl(n, e, t) {
  const l = n.slice();
  return l[14] = e[t], l[16] = t, l;
}
const hs = (n) => ({ item: n & /*items*/
1 }), sl = (n) => ({ item: (
  /*item*/
  n[14]
) });
function ol(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l;
}
function ul(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l;
}
function ms(n) {
  let e, t;
  return e = new Jr({
    props: {
      style: "width: 100%;",
      $$slots: { default: [Ls] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, items, rowBg, slotHasActions, columns, headerBg*/
      2499 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function gs(n) {
  let e, t;
  return {
    c() {
      e = P("p"), t = Le(
        /*emptyText*/
        n[4]
      ), B(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      T(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && He(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: te,
    o: te,
    d(l) {
      l && O(e);
    }
  };
}
function bs(n) {
  let e, t;
  return {
    c() {
      e = P("p"), t = Le(
        /*errorMsg*/
        n[3]
      ), B(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      T(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && He(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: te,
    o: te,
    d(l) {
      l && O(e);
    }
  };
}
function _s(n) {
  let e;
  return {
    c() {
      e = P("p"), e.textContent = "Loading…", B(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      T(t, e, l);
    },
    p: te,
    i: te,
    o: te,
    d(t) {
      t && O(e);
    }
  };
}
function ps(n) {
  let e = (
    /*col*/
    n[17].header + ""
  ), t;
  return {
    c() {
      t = Le(e);
    },
    m(l, i) {
      T(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[17].header + "") && He(t, e);
    },
    d(l) {
      l && O(t);
    }
  };
}
function fl(n) {
  let e, t;
  return e = new jt({
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
      $$slots: { default: [ps] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function cl(n) {
  let e, t;
  return e = new jt({
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
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*headerBg*/
      64 && (a.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function vs(n) {
  let e, t, l, i = Ze(
    /*columns*/
    n[1]
  ), a = [];
  for (let s = 0; s < i.length; s += 1)
    a[s] = fl(ul(n, i, s));
  const o = (s) => R(a[s], 1, 1, () => {
    a[s] = null;
  });
  let r = (
    /*slotHasActions*/
    n[8] && cl(n)
  );
  return {
    c() {
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
      e = Z(), r && r.c(), t = Se();
    },
    m(s, u) {
      for (let f = 0; f < a.length; f += 1)
        a[f] && a[f].m(s, u);
      T(s, e, u), r && r.m(s, u), T(s, t, u), l = !0;
    },
    p(s, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = Ze(
          /*columns*/
          s[1]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = ul(s, i, f);
          a[f] ? (a[f].p(c, u), S(a[f], 1)) : (a[f] = fl(c), a[f].c(), S(a[f], 1), a[f].m(e.parentNode, e));
        }
        for (pe(), f = i.length; f < a.length; f += 1)
          o(f);
        ve();
      }
      /*slotHasActions*/
      s[8] ? r ? (r.p(s, u), u & /*slotHasActions*/
      256 && S(r, 1)) : (r = cl(s), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (pe(), R(r, 1, 1, () => {
        r = null;
      }), ve());
    },
    i(s) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          S(a[u]);
        S(r), l = !0;
      }
    },
    o(s) {
      a = a.filter(Fl);
      for (let u = 0; u < a.length; u += 1)
        R(a[u]);
      R(r), l = !1;
    },
    d(s) {
      s && (O(e), O(t)), rn(a, s), r && r.d(s);
    }
  };
}
function Cs(n) {
  let e, t;
  return e = new Bl({
    props: {
      $$slots: { default: [vs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      2370 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Is(n) {
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
      t = Le(e);
    },
    m(i, a) {
      T(i, t, a);
    },
    p(i, a) {
      var o;
      a & /*items, columns*/
      3 && e !== (e = /*item*/
      (((o = i[14]) == null ? void 0 : o[
        /*col*/
        i[17].key
      ]) ?? "") + "") && He(t, e);
    },
    d(i) {
      i && O(t);
    }
  };
}
function dl(n) {
  let e, t;
  return e = new jt({
    props: {
      $$slots: { default: [Is] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, items, columns*/
      2051 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function hl(n) {
  let e, t;
  return e = new jt({
    props: {
      $$slots: { default: [As] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*$$scope, items*/
      2049 && (a.$$scope = { dirty: i, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function As(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].actions
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[11],
    sl
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
      2049) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[11],
        e ? ie(
          t,
          /*$$scope*/
          i[11],
          a,
          hs
        ) : re(
          /*$$scope*/
          i[11]
        ),
        sl
      );
    },
    i(i) {
      e || (S(l, i), e = !0);
    },
    o(i) {
      R(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ys(n) {
  let e, t, l, i = Ze(
    /*columns*/
    n[1]
  ), a = [];
  for (let s = 0; s < i.length; s += 1)
    a[s] = dl(ol(n, i, s));
  const o = (s) => R(a[s], 1, 1, () => {
    a[s] = null;
  });
  let r = (
    /*slotHasActions*/
    n[8] && hl(n)
  );
  return {
    c() {
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
      e = Z(), r && r.c(), t = Z();
    },
    m(s, u) {
      for (let f = 0; f < a.length; f += 1)
        a[f] && a[f].m(s, u);
      T(s, e, u), r && r.m(s, u), T(s, t, u), l = !0;
    },
    p(s, u) {
      if (u & /*items, columns*/
      3) {
        i = Ze(
          /*columns*/
          s[1]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = ol(s, i, f);
          a[f] ? (a[f].p(c, u), S(a[f], 1)) : (a[f] = dl(c), a[f].c(), S(a[f], 1), a[f].m(e.parentNode, e));
        }
        for (pe(), f = i.length; f < a.length; f += 1)
          o(f);
        ve();
      }
      /*slotHasActions*/
      s[8] ? r ? (r.p(s, u), u & /*slotHasActions*/
      256 && S(r, 1)) : (r = hl(s), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (pe(), R(r, 1, 1, () => {
        r = null;
      }), ve());
    },
    i(s) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          S(a[u]);
        S(r), l = !0;
      }
    },
    o(s) {
      a = a.filter(Fl);
      for (let u = 0; u < a.length; u += 1)
        R(a[u]);
      R(r), l = !1;
    },
    d(s) {
      s && (O(e), O(t)), rn(a, s), r && r.d(s);
    }
  };
}
function ml(n, e) {
  let t, l, i;
  return l = new Bl({
    props: {
      style: (
        /*rowBg*/
        e[7] ? `background-color:${/*rowBg*/
        e[7]}` : void 0
      ),
      $$slots: { default: [ys] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Se(), Q(l.$$.fragment), this.first = t;
    },
    m(a, o) {
      T(a, t, o), Y(l, a, o), i = !0;
    },
    p(a, o) {
      e = a;
      const r = {};
      o & /*rowBg*/
      128 && (r.style = /*rowBg*/
      e[7] ? `background-color:${/*rowBg*/
      e[7]}` : void 0), o & /*$$scope, items, slotHasActions, columns*/
      2307 && (r.$$scope = { dirty: o, ctx: e }), l.$set(r);
    },
    i(a) {
      i || (S(l.$$.fragment, a), i = !0);
    },
    o(a) {
      R(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && O(t), K(l, a);
    }
  };
}
function ks(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, a = Ze(
    /*items*/
    n[0]
  );
  const o = (r) => (
    /*getRowId*/
    r[5](
      /*item*/
      r[14],
      /*i*/
      r[16]
    )
  );
  for (let r = 0; r < a.length; r += 1) {
    let s = rl(n, a, r), u = o(s);
    t.set(u, e[r] = ml(u, s));
  }
  return {
    c() {
      for (let r = 0; r < e.length; r += 1)
        e[r].c();
      l = Se();
    },
    m(r, s) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(r, s);
      T(r, l, s), i = !0;
    },
    p(r, s) {
      s & /*rowBg, undefined, $$scope, items, slotHasActions, columns, getRowId*/
      2467 && (a = Ze(
        /*items*/
        r[0]
      ), pe(), e = Rl(e, s, o, 1, r, a, t, l.parentNode, Mi, ml, l, rl), ve());
    },
    i(r) {
      if (!i) {
        for (let s = 0; s < a.length; s += 1)
          S(e[s]);
        i = !0;
      }
    },
    o(r) {
      for (let s = 0; s < e.length; s += 1)
        R(e[s]);
      i = !1;
    },
    d(r) {
      r && O(l);
      for (let s = 0; s < e.length; s += 1)
        e[s].d(r);
    }
  };
}
function Ls(n) {
  let e, t, l, i;
  return e = new $r({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [Cs] },
      $$scope: { ctx: n }
    }
  }), l = new ns({
    props: {
      $$slots: { default: [ks] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Q(e.$$.fragment), t = Z(), Q(l.$$.fragment);
    },
    m(a, o) {
      Y(e, a, o), T(a, t, o), Y(l, a, o), i = !0;
    },
    p(a, o) {
      const r = {};
      o & /*headerBg*/
      64 && (r.style = /*headerBg*/
      a[6] ? `background-color:${/*headerBg*/
      a[6]}` : void 0), o & /*$$scope, headerBg, slotHasActions, columns*/
      2370 && (r.$$scope = { dirty: o, ctx: a }), e.$set(r);
      const s = {};
      o & /*$$scope, items, rowBg, slotHasActions, columns*/
      2435 && (s.$$scope = { dirty: o, ctx: a }), l.$set(s);
    },
    i(a) {
      i || (S(e.$$.fragment, a), S(l.$$.fragment, a), i = !0);
    },
    o(a) {
      R(e.$$.fragment, a), R(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && O(t), K(e, a), K(l, a);
    }
  };
}
function Ss(n) {
  let e, t, l, i;
  const a = [_s, bs, gs, ms], o = [];
  function r(s, u) {
    return (
      /*loading*/
      s[2] ? 0 : (
        /*errorMsg*/
        s[3] ? 1 : !/*items*/
        s[0] || /*items*/
        s[0].length === 0 ? 2 : 3
      )
    );
  }
  return e = r(n), t = o[e] = a[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(s, u) {
      o[e].m(s, u), T(s, l, u), i = !0;
    },
    p(s, [u]) {
      let f = e;
      e = r(s), e === f ? o[e].p(s, u) : (pe(), R(o[f], 1, 1, () => {
        o[f] = null;
      }), ve(), t = o[e], t ? t.p(s, u) : (t = o[e] = a[e](s), t.c()), S(t, 1), t.m(l.parentNode, l));
    },
    i(s) {
      i || (S(t), i = !0);
    },
    o(s) {
      R(t), i = !1;
    },
    d(s) {
      s && O(l), o[e].d(s);
    }
  };
}
function Es(n, e, t) {
  let l, { $$slots: i = {}, $$scope: a } = e;
  const o = an(i);
  let { items: r = [] } = e, { columns: s = [] } = e, { loading: u = !1 } = e, { errorMsg: f = "" } = e, { emptyText: c = "Nothing to show." } = e, { getRowId: d = (v, C) => {
    var p, b;
    return (b = v && ((p = v.id) !== null && p !== void 0 ? p : v.key)) !== null && b !== void 0 ? b : C;
  } } = e, { headerBg: m = null } = e, { rowBg: _ = null } = e;
  const y = o;
  let { hasActions: g = !1 } = e;
  return n.$$set = (v) => {
    "items" in v && t(0, r = v.items), "columns" in v && t(1, s = v.columns), "loading" in v && t(2, u = v.loading), "errorMsg" in v && t(3, f = v.errorMsg), "emptyText" in v && t(4, c = v.emptyText), "getRowId" in v && t(5, d = v.getRowId), "headerBg" in v && t(6, m = v.headerBg), "rowBg" in v && t(7, _ = v.rowBg), "hasActions" in v && t(9, g = v.hasActions), "$$scope" in v && t(11, a = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    512 && t(8, l = g || !!(y != null && y.actions));
  }, [
    r,
    s,
    u,
    f,
    c,
    d,
    m,
    _,
    l,
    g,
    i,
    a
  ];
}
class ws extends be {
  constructor(e) {
    super(), ge(this, e, Es, Ss, fe, {
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
const Rs = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Rs.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Hs(n) {
  let e;
  return {
    c() {
      e = Le("CONTINUE");
    },
    m(t, l) {
      T(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Ds(n) {
  let e;
  return {
    c() {
      e = Le("ADD NEW PROCESS");
    },
    m(t, l) {
      T(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Ms(n) {
  let e, t, l, i;
  function a() {
    return (
      /*func*/
      n[14](
        /*item*/
        n[17]
      )
    );
  }
  e = new In({
    props: {
      icon: "visibility",
      callback: a,
      outlined: !0
    }
  });
  function o() {
    return (
      /*func_1*/
      n[15](
        /*item*/
        n[17]
      )
    );
  }
  return l = new In({
    props: {
      icon: "play_circle",
      callback: o,
      outlined: !0
    }
  }), {
    c() {
      Q(e.$$.fragment), t = Z(), Q(l.$$.fragment);
    },
    m(r, s) {
      Y(e, r, s), T(r, t, s), Y(l, r, s), i = !0;
    },
    p(r, s) {
      n = r;
      const u = {};
      s & /*item*/
      131072 && (u.callback = a), e.$set(u);
      const f = {};
      s & /*item*/
      131072 && (f.callback = o), l.$set(f);
    },
    i(r) {
      i || (S(e.$$.fragment, r), S(l.$$.fragment, r), i = !0);
    },
    o(r) {
      R(e.$$.fragment, r), R(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && O(t), K(e, r), K(l, r);
    }
  };
}
function Os(n) {
  let e, t, l, i, a, o, r, s, u, f, c, d, m, _;
  a = new vn({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [Hs] },
      $$scope: { ctx: n }
    }
  }), a.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function y(v) {
    n[12](v);
  }
  let g = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (g.value = /*searchQuery*/
    n[2]), s = new Mr({ props: g }), ee.push(() => xe(s, "value", y)), s.$on(
      "keyup",
      /*keyup_handler*/
      n[13]
    ), c = new vn({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [Ds] },
        $$scope: { ctx: n }
      }
    }), c.$on(
      "click",
      /*handleAddNew*/
      n[8]
    ), m = new ws({
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
            Ms,
            ({ item: v }) => ({ 17: v }),
            ({ item: v }) => v ? 131072 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = P("div"), t = P("div"), l = P("span"), l.textContent = `A process “Process Name C” has already been started for the ---.scd.
      Would you like to continue where you left off?`, i = Z(), Q(a.$$.fragment), o = Z(), r = P("div"), Q(s.$$.fragment), f = Z(), Q(c.$$.fragment), d = Z(), Q(m.$$.fragment), B(l, "class", "svelte-a89h9"), B(t, "class", "process-banner svelte-a89h9"), B(r, "class", "process-toolbar svelte-a89h9"), B(e, "class", "processes svelte-a89h9");
      },
      m(v, C) {
        T(v, e, C), F(e, t), F(t, l), F(t, i), Y(a, t, null), F(e, o), F(e, r), Y(s, r, null), F(r, f), Y(c, r, null), F(e, d), Y(m, e, null), _ = !0;
      },
      p(v, [C]) {
        const p = {};
        C & /*$$scope*/
        262144 && (p.$$scope = { dirty: C, ctx: v }), a.$set(p);
        const b = {};
        !u && C & /*searchQuery*/
        4 && (u = !0, b.value = /*searchQuery*/
        v[2], Qe(() => u = !1)), s.$set(b);
        const M = {};
        C & /*$$scope*/
        262144 && (M.$$scope = { dirty: C, ctx: v }), c.$set(M);
        const w = {};
        C & /*filteredRows*/
        8 && (w.items = /*filteredRows*/
        v[3]), C & /*loading*/
        1 && (w.loading = /*loading*/
        v[0]), C & /*errorMsg*/
        2 && (w.errorMsg = /*errorMsg*/
        v[1]), C & /*$$scope, item*/
        393216 && (w.$$scope = { dirty: C, ctx: v }), m.$set(w);
      },
      i(v) {
        _ || (S(a.$$.fragment, v), S(s.$$.fragment, v), S(c.$$.fragment, v), S(m.$$.fragment, v), _ = !0);
      },
      o(v) {
        R(a.$$.fragment, v), R(s.$$.fragment, v), R(c.$$.fragment, v), R(m.$$.fragment, v), _ = !1;
      },
      d(v) {
        v && O(e), K(a), K(s), K(c), K(m);
      }
    }
  );
}
function Ts(n, e, t) {
  let l, i, { processes: a = [] } = e, { loading: o = !1 } = e, { errorMsg: r = "" } = e;
  const s = sn(), u = (b) => s("start", b), f = (b) => s("view", b);
  let c = "";
  const d = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], m = () => {
    console.log("Searching for:", c);
  }, _ = () => {
    console.log("Add new process clicked");
  }, y = () => console.log("Continue Process");
  function g(b) {
    c = b, t(2, c);
  }
  const v = (b) => b.key === "Enter" && m(), C = (b) => f(b), p = (b) => u(b);
  return n.$$set = (b) => {
    "processes" in b && t(9, a = b.processes), "loading" in b && t(0, o = b.loading), "errorMsg" in b && t(1, r = b.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = c.trim().toLowerCase()), n.$$.dirty & /*processes, searchLower*/
    1536 && t(3, i = (a ?? []).filter((b) => {
      var M;
      return ((M = b.name) !== null && M !== void 0 ? M : "").toLowerCase().includes(l);
    }).map((b) => Object.assign(Object.assign({}, b), { displayName: b.name || b.id })));
  }, [
    o,
    r,
    c,
    i,
    u,
    f,
    d,
    m,
    _,
    a,
    l,
    y,
    g,
    v,
    C,
    p
  ];
}
class Us extends be {
  constructor(e) {
    super(), ge(this, e, Ts, Os, fe, { processes: 9, loading: 0, errorMsg: 1 });
  }
}
function gl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Bs(n) {
  let e, t, l, i, a, o, r = (
    /*proc*/
    n[0].id + ""
  ), s, u, f, c, d, m = (
    /*proc*/
    n[0].name + ""
  ), _, y, g, v, C, p = (
    /*proc*/
    n[0].version + ""
  ), b, M, w, h, L, G = (
    /*proc*/
    n[0].description + ""
  ), H, A, U, E, V, ce, de, Ce, W, I, j;
  function he(ne, x) {
    return !/*proc*/
    ne[0].plugins || /*proc*/
    ne[0].plugins.length === 0 ? Ns : Ps;
  }
  let _e = he(n), ye = _e(n);
  return {
    c() {
      e = P("h1"), e.textContent = "Process Details", t = Z(), l = P("div"), i = P("div"), a = P("span"), a.textContent = "ID", o = P("span"), s = Le(r), u = Z(), f = P("div"), c = P("span"), c.textContent = "Name", d = P("span"), _ = Le(m), y = Z(), g = P("div"), v = P("span"), v.textContent = "Version", C = P("span"), b = Le(p), M = Z(), w = P("div"), h = P("span"), h.textContent = "Description", L = P("span"), H = Le(G), A = Z(), U = P("h2"), U.textContent = "Plugins", E = Z(), ye.c(), V = Z(), ce = P("div"), de = P("button"), de.textContent = "Back", Ce = Z(), W = P("button"), W.textContent = "START PROCESS", B(e, "class", "title svelte-1qn566t"), B(a, "class", "label svelte-1qn566t"), B(o, "class", "value svelte-1qn566t"), B(i, "class", "row svelte-1qn566t"), B(c, "class", "label svelte-1qn566t"), B(d, "class", "value svelte-1qn566t"), B(f, "class", "row svelte-1qn566t"), B(v, "class", "label svelte-1qn566t"), B(C, "class", "value svelte-1qn566t"), B(g, "class", "row svelte-1qn566t"), B(h, "class", "label svelte-1qn566t"), B(L, "class", "value svelte-1qn566t"), B(w, "class", "row svelte-1qn566t"), B(l, "class", "card svelte-1qn566t"), B(U, "class", "subtitle svelte-1qn566t"), B(de, "class", "btn svelte-1qn566t"), B(W, "class", "btn primary svelte-1qn566t"), B(ce, "class", "actions svelte-1qn566t");
    },
    m(ne, x) {
      T(ne, e, x), T(ne, t, x), T(ne, l, x), F(l, i), F(i, a), F(i, o), F(o, s), F(l, u), F(l, f), F(f, c), F(f, d), F(d, _), F(l, y), F(l, g), F(g, v), F(g, C), F(C, b), F(l, M), F(l, w), F(w, h), F(w, L), F(L, H), T(ne, A, x), T(ne, U, x), T(ne, E, x), ye.m(ne, x), T(ne, V, x), T(ne, ce, x), F(ce, de), F(ce, Ce), F(ce, W), I || (j = [
        X(
          de,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        X(
          W,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], I = !0);
    },
    p(ne, x) {
      x & /*proc*/
      1 && r !== (r = /*proc*/
      ne[0].id + "") && He(s, r), x & /*proc*/
      1 && m !== (m = /*proc*/
      ne[0].name + "") && He(_, m), x & /*proc*/
      1 && p !== (p = /*proc*/
      ne[0].version + "") && He(b, p), x & /*proc*/
      1 && G !== (G = /*proc*/
      ne[0].description + "") && He(H, G), _e === (_e = he(ne)) && ye ? ye.p(ne, x) : (ye.d(1), ye = _e(ne), ye && (ye.c(), ye.m(V.parentNode, V)));
    },
    d(ne) {
      ne && (O(e), O(t), O(l), O(A), O(U), O(E), O(V), O(ce)), ye.d(ne), I = !1, Ae(j);
    }
  };
}
function Fs(n) {
  let e, t, l, i, a, o;
  return {
    c() {
      e = P("div"), t = P("p"), t.textContent = "No process selected.", l = Z(), i = P("button"), i.textContent = "Back to list", B(t, "class", "svelte-1qn566t"), B(i, "class", "btn svelte-1qn566t"), B(e, "class", "empty-state svelte-1qn566t");
    },
    m(r, s) {
      T(r, e, s), F(e, t), F(e, l), F(e, i), a || (o = X(
        i,
        "click",
        /*click_handler*/
        n[2]
      ), a = !0);
    },
    p: te,
    d(r) {
      r && O(e), a = !1, o();
    }
  };
}
function Ps(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), i = Ze(
    /*proc*/
    n[0].plugins
  );
  const a = (o) => (
    /*pl*/
    o[5].id
  );
  for (let o = 0; o < i.length; o += 1) {
    let r = gl(n, i, o), s = a(r);
    l.set(s, t[o] = pl(s, r));
  }
  return {
    c() {
      e = P("ol");
      for (let o = 0; o < t.length; o += 1)
        t[o].c();
      B(e, "class", "plugins-list svelte-1qn566t");
    },
    m(o, r) {
      T(o, e, r);
      for (let s = 0; s < t.length; s += 1)
        t[s] && t[s].m(e, null);
    },
    p(o, r) {
      r & /*proc*/
      1 && (i = Ze(
        /*proc*/
        o[0].plugins
      ), t = Rl(t, r, a, 1, o, i, l, e, Di, pl, null, gl));
    },
    d(o) {
      o && O(e);
      for (let r = 0; r < t.length; r += 1)
        t[r].d();
    }
  };
}
function Ns(n) {
  let e;
  return {
    c() {
      e = P("p"), e.textContent = "No plugins defined for this process.", B(e, "class", "muted svelte-1qn566t");
    },
    m(t, l) {
      T(t, e, l);
    },
    p: te,
    d(t) {
      t && O(e);
    }
  };
}
function bl(n) {
  let e, t = (
    /*pl*/
    n[5].type + ""
  ), l;
  return {
    c() {
      e = P("p"), l = Le(t), B(e, "class", "plugin-type svelte-1qn566t");
    },
    m(i, a) {
      T(i, e, a), F(e, l);
    },
    p(i, a) {
      a & /*proc*/
      1 && t !== (t = /*pl*/
      i[5].type + "") && He(l, t);
    },
    d(i) {
      i && O(e);
    }
  };
}
function _l(n) {
  let e, t = (
    /*pl*/
    n[5].description + ""
  ), l;
  return {
    c() {
      e = P("p"), l = Le(t), B(e, "class", "description svelte-1qn566t");
    },
    m(i, a) {
      T(i, e, a), F(e, l);
    },
    p(i, a) {
      a & /*proc*/
      1 && t !== (t = /*pl*/
      i[5].description + "") && He(l, t);
    },
    d(i) {
      i && O(e);
    }
  };
}
function pl(n, e) {
  let t, l, i, a = (
    /*i*/
    e[7] + 1 + ""
  ), o, r, s, u, f, c = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), d, m, _, y, g = (
    /*pl*/
    e[5].type && bl(e)
  ), v = (
    /*pl*/
    e[5].description && _l(e)
  );
  return {
    key: n,
    first: null,
    c() {
      t = P("li"), l = P("div"), i = P("span"), o = Le(a), r = Le("."), s = Z(), u = P("div"), f = P("p"), d = Le(c), m = Z(), g && g.c(), _ = Z(), v && v.c(), y = Z(), B(i, "class", "order svelte-1qn566t"), B(f, "class", "plugin-name svelte-1qn566t"), B(u, "class", "svelte-1qn566t"), B(l, "class", "plugin-header svelte-1qn566t"), B(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(C, p) {
      T(C, t, p), F(t, l), F(l, i), F(i, o), F(i, r), F(l, s), F(l, u), F(u, f), F(f, d), F(u, m), g && g.m(u, null), F(t, _), v && v.m(t, null), F(t, y);
    },
    p(C, p) {
      e = C, p & /*proc*/
      1 && a !== (a = /*i*/
      e[7] + 1 + "") && He(o, a), p & /*proc*/
      1 && c !== (c = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && He(d, c), /*pl*/
      e[5].type ? g ? g.p(e, p) : (g = bl(e), g.c(), g.m(u, null)) : g && (g.d(1), g = null), /*pl*/
      e[5].description ? v ? v.p(e, p) : (v = _l(e), v.c(), v.m(t, y)) : v && (v.d(1), v = null);
    },
    d(C) {
      C && O(t), g && g.d(), v && v.d();
    }
  };
}
function Gs(n) {
  let e;
  function t(a, o) {
    return (
      /*proc*/
      a[0] ? Bs : Fs
    );
  }
  let l = t(n), i = l(n);
  return {
    c() {
      e = P("div"), i.c(), B(e, "class", "container svelte-1qn566t");
    },
    m(a, o) {
      T(a, e, o), i.m(e, null);
    },
    p(a, [o]) {
      l === (l = t(a)) && i ? i.p(a, o) : (i.d(1), i = l(a), i && (i.c(), i.m(e, null)));
    },
    i: te,
    o: te,
    d(a) {
      a && O(e), i.d();
    }
  };
}
function js(n, e, t) {
  let { proc: l = null } = e;
  const i = sn(), a = () => i("back"), o = () => i("back"), r = () => i("start", l);
  return n.$$set = (s) => {
    "proc" in s && t(0, l = s.proc);
  }, [l, i, a, o, r];
}
class zs extends be {
  constructor(e) {
    super(), ge(this, e, js, Gs, fe, { proc: 0 });
  }
}
function vl(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Ws(n) {
  let e = (
    /*i*/
    n[20] + 1 + ""
  ), t;
  return {
    c() {
      t = Le(e);
    },
    m(l, i) {
      T(l, t, i);
    },
    p: te,
    i: te,
    o: te,
    d(l) {
      l && O(t);
    }
  };
}
function Vs(n) {
  let e, t, l, i;
  const a = [Xs, qs, Zs], o = [];
  function r(s, u) {
    return (
      /*pluginStatus*/
      s[3][
        /*plugin*/
        s[18].id
      ] === "check" ? 0 : (
        /*pluginStatus*/
        s[3][
          /*plugin*/
          s[18].id
        ] === "error" ? 1 : 2
      )
    );
  }
  return e = r(n), t = o[e] = a[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(s, u) {
      o[e].m(s, u), T(s, l, u), i = !0;
    },
    p(s, u) {
      let f = e;
      e = r(s), e !== f && (pe(), R(o[f], 1, 1, () => {
        o[f] = null;
      }), ve(), t = o[e], t || (t = o[e] = a[e](s), t.c()), S(t, 1), t.m(l.parentNode, l));
    },
    i(s) {
      i || (S(t), i = !0);
    },
    o(s) {
      R(t), i = !1;
    },
    d(s) {
      s && O(l), o[e].d(s);
    }
  };
}
function Zs(n) {
  let e, t;
  return e = new jr({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function qs(n) {
  let e, t;
  return e = new Nr({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Xs(n) {
  let e, t;
  return e = new Fr({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Ys(n) {
  let e, t, l, i, a, o, r;
  const s = [Vs, Ws], u = [];
  function f(d, m) {
    return m & /*visited, plugins, tagName*/
    52 && (t = null), t == null && (t = !!/*visited*/
    (d[5].includes(
      /*plugin*/
      d[18].id
    ) && /*plugin*/
    d[18].id !== /*tagName*/
    d[4])), t ? 0 : 1;
  }
  l = f(n, -1), i = u[l] = s[l](n);
  function c() {
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
      e = P("button"), i.c(), B(e, "class", "svelte-1xq5awa"), mt(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), mt(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), mt(
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
      T(d, e, m), u[l].m(e, null), a = !0, o || (r = X(e, "click", c), o = !0);
    },
    p(d, m) {
      n = d;
      let _ = l;
      l = f(n, m), l === _ ? u[l].p(n, m) : (pe(), R(u[_], 1, 1, () => {
        u[_] = null;
      }), ve(), i = u[l], i ? i.p(n, m) : (i = u[l] = s[l](n), i.c()), S(i, 1), i.m(e, null)), (!a || m & /*visited, plugins*/
      36) && mt(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), (!a || m & /*plugins, tagName*/
      20) && mt(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), (!a || m & /*visited, plugins, tagName*/
      52) && mt(
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
      a || (S(i), a = !0);
    },
    o(d) {
      R(i), a = !1;
    },
    d(d) {
      d && O(e), u[l].d(), o = !1, r();
    }
  };
}
function Cl(n) {
  let e;
  return {
    c() {
      e = P("div"), B(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      T(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Il(n) {
  let e, t, l, i, a = (
    /*plugin*/
    n[18].name + ""
  ), o, r, s, u;
  t = new Vr({
    props: {
      text: (
        /*tooltipText*/
        n[6][
          /*plugin*/
          n[18].id
        ]
      ),
      position: "bottom",
      $$slots: { default: [Ys] },
      $$scope: { ctx: n }
    }
  });
  let f = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && Cl()
  );
  return {
    c() {
      e = P("div"), Q(t.$$.fragment), l = Z(), i = P("p"), o = Le(a), r = Z(), f && f.c(), s = Se(), B(i, "class", "svelte-1xq5awa"), B(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(c, d) {
      T(c, e, d), Y(t, e, null), F(e, l), F(e, i), F(i, o), T(c, r, d), f && f.m(c, d), T(c, s, d), u = !0;
    },
    p(c, d) {
      const m = {};
      d & /*tooltipText, plugins*/
      68 && (m.text = /*tooltipText*/
      c[6][
        /*plugin*/
        c[18].id
      ]), d & /*$$scope, visited, plugins, tagName, pluginStatus*/
      2097212 && (m.$$scope = { dirty: d, ctx: c }), t.$set(m), (!u || d & /*plugins*/
      4) && a !== (a = /*plugin*/
      c[18].name + "") && He(o, a), /*i*/
      c[20] < /*plugins*/
      c[2].length - 1 ? f || (f = Cl(), f.c(), f.m(s.parentNode, s)) : f && (f.d(1), f = null);
    },
    i(c) {
      u || (S(t.$$.fragment, c), u = !0);
    },
    o(c) {
      R(t.$$.fragment, c), u = !1;
    },
    d(c) {
      c && (O(e), O(r), O(s)), K(t), f && f.d(c);
    }
  };
}
function Al(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && xt(n)
  );
  return {
    c() {
      l && l.c(), t = Se();
    },
    m(i, a) {
      l && l.m(i, a), T(i, t, a);
    },
    p(i, a) {
      /*tagName*/
      i[4] ? e ? fe(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = xt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, a) : (l = xt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && O(t), l && l.d(i);
    }
  };
}
function xt(n) {
  let e, t, l, i;
  return {
    c() {
      e = P(
        /*tagName*/
        n[4]
      ), Lt(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(a, o) {
      T(a, e, o), l || (i = $(t = Qs.call(null, e, {
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
    p(a, o) {
      t && Ie(t.update) && o & /*doc, editCount*/
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
      a && O(e), l = !1, i();
    }
  };
}
function Ks(n) {
  let e, t, l, i, a, o, r, s, u, f, c, d, m, _, y, g, v, C = Ze(
    /*plugins*/
    n[2]
  ), p = [];
  for (let w = 0; w < C.length; w += 1)
    p[w] = Il(vl(n, C, w));
  const b = (w) => R(p[w], 1, 1, () => {
    p[w] = null;
  });
  let M = (
    /*tagName*/
    n[4] && Al(n)
  );
  return {
    c() {
      e = P("div"), t = P("div"), l = P("button"), l.textContent = "exit", i = Z(), a = P("p"), a.textContent = "Plugin Flow", o = Z(), r = P("div");
      for (let w = 0; w < p.length; w += 1)
        p[w].c();
      s = Z(), u = P("div"), f = P("button"), f.textContent = "Back", c = Z(), d = P("button"), d.textContent = "Next", m = Z(), M && M.c(), _ = Se(), B(l, "class", "back-button svelte-1xq5awa"), B(a, "class", "plugin-flow-title svelte-1xq5awa"), Ut(t, "display", "flex"), Ut(t, "align-items", "center"), Ut(t, "gap", "0.5rem"), B(t, "class", "svelte-1xq5awa"), B(r, "class", "plugin-steps svelte-1xq5awa"), B(f, "class", "back-button svelte-1xq5awa"), B(d, "class", "next-button svelte-1xq5awa"), B(u, "class", "stepper-navigation svelte-1xq5awa"), B(e, "class", "stepper svelte-1xq5awa");
    },
    m(w, h) {
      T(w, e, h), F(e, t), F(t, l), F(t, i), F(t, a), F(e, o), F(e, r);
      for (let L = 0; L < p.length; L += 1)
        p[L] && p[L].m(r, null);
      F(e, s), F(e, u), F(u, f), F(u, c), F(u, d), T(w, m, h), M && M.m(w, h), T(w, _, h), y = !0, g || (v = [
        X(
          l,
          "click",
          /*click_handler*/
          n[12]
        ),
        X(
          f,
          "click",
          /*previousPlugin*/
          n[10]
        ),
        X(
          d,
          "click",
          /*nextPlugin*/
          n[9]
        )
      ], g = !0);
    },
    p(w, [h]) {
      if (h & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      380) {
        C = Ze(
          /*plugins*/
          w[2]
        );
        let L;
        for (L = 0; L < C.length; L += 1) {
          const G = vl(w, C, L);
          p[L] ? (p[L].p(G, h), S(p[L], 1)) : (p[L] = Il(G), p[L].c(), S(p[L], 1), p[L].m(r, null));
        }
        for (pe(), L = C.length; L < p.length; L += 1)
          b(L);
        ve();
      }
      /*tagName*/
      w[4] ? M ? M.p(w, h) : (M = Al(w), M.c(), M.m(_.parentNode, _)) : M && (M.d(1), M = null);
    },
    i(w) {
      if (!y) {
        for (let h = 0; h < C.length; h += 1)
          S(p[h]);
        y = !0;
      }
    },
    o(w) {
      p = p.filter(Boolean);
      for (let h = 0; h < p.length; h += 1)
        R(p[h]);
      y = !1;
    },
    d(w) {
      w && (O(e), O(m), O(_)), rn(p, w), M && M.d(w), g = !1, Ae(v);
    }
  };
}
function Js() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Qs(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function xs(n, e, t) {
  let l, { doc: i } = e, { editCount: a = -1 } = e, { host: o } = e, { plugins: r = [] } = e, s = null, u = [];
  const f = ["check", "warning", "error"];
  let c = {};
  sn();
  function d(p) {
    var b;
    (b = Js()) === null || b === void 0 || b.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: p },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  function m(p) {
    return on(this, void 0, void 0, function* () {
      const b = yield import(p.src);
      if (customElements.get(p.id) || customElements.define(p.id, b.default), t(4, s = p.id), !u.includes(p.id)) {
        t(5, u = [...u, p.id]);
        const M = r.findIndex((w) => w.id === p.id);
        t(3, c = Object.assign(Object.assign({}, c), {
          [p.id]: f[M % f.length]
        }));
      }
    });
  }
  function _() {
    g(1);
  }
  function y() {
    g(-1);
  }
  function g(p) {
    const b = r.findIndex((M) => M.id === s);
    m(r[(b + p + r.length) % r.length]);
  }
  We(() => {
    r.length && m(r[0]), d(!1);
  });
  const v = () => d(!0), C = (p) => m(p);
  return n.$$set = (p) => {
    "doc" in p && t(0, i = p.doc), "editCount" in p && t(1, a = p.editCount), "host" in p && t(11, o = p.host), "plugins" in p && t(2, r = p.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = r.reduce(
      (p, b) => {
        const M = c[b.id];
        return p[b.id] = M === "error" ? `Resolve errors in ${b.name}` : M === "warning" ? `Check warnings for ${b.name}` : `Load the ${b.name} editor`, p;
      },
      {}
    ));
  }, [
    i,
    a,
    r,
    c,
    s,
    u,
    l,
    d,
    m,
    _,
    y,
    o,
    v,
    C
  ];
}
class $s extends be {
  constructor(e) {
    super(), ge(this, e, xs, Ks, fe, {
      doc: 0,
      editCount: 1,
      host: 11,
      plugins: 2
    });
  }
}
function eo(n) {
  let e, t;
  return e = new Us({
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
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function to(n) {
  let e, t;
  return e = new zs({ props: { proc: (
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
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const a = {};
      i & /*selected*/
      16 && (a.proc = /*selected*/
      l[4]), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function no(n) {
  let e, t;
  return e = new $s({
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
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function lo(n) {
  let e, t, l, i;
  const a = [no, to, eo], o = [];
  function r(s, u) {
    return (
      /*running*/
      s[5] ? 0 : (
        /*selected*/
        s[4] ? 1 : 2
      )
    );
  }
  return e = r(n), t = o[e] = a[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(s, u) {
      o[e].m(s, u), T(s, l, u), i = !0;
    },
    p(s, [u]) {
      let f = e;
      e = r(s), e === f ? o[e].p(s, u) : (pe(), R(o[f], 1, 1, () => {
        o[f] = null;
      }), ve(), t = o[e], t ? t.p(s, u) : (t = o[e] = a[e](s), t.c()), S(t, 1), t.m(l.parentNode, l));
    },
    i(s) {
      i || (S(t), i = !0);
    },
    o(s) {
      R(t), i = !1;
    },
    d(s) {
      s && O(l), o[e].d(s);
    }
  };
}
function io(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: a } = e, o = [], r = null, s = null, u = !0, f = "";
  const c = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+eHl6LWVkaXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3h5ei5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPgogICAgICAgIDxuYW1lPk5ldHdvcmsgRXhwbG9yZXI8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CgogIDxwcm9jZXNzPgogICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+CiAgICA8dmVyc2lvbj4wLjAuMTwvdmVyc2lvbj4KICAgIDxuYW1lPlN0YW5kYXJkIFByb2Nlc3MgMzwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj4KICAgICAgVGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seQogICAgPC9kZXNjcmlwdGlvbj4KCiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+ZW5naW5lZXJpbmctd2l6YXJkPC9pZD4KICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CgogICAgICA8cGx1Z2luPgogICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5TaXRpcGU8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (p) => {
    var b, M;
    return (M = (b = p == null ? void 0 : p.textContent) === null || b === void 0 ? void 0 : b.trim()) !== null && M !== void 0 ? M : "";
  }, m = (p) => Array.from(p.getElementsByTagName("process")).map((b) => {
    const M = Array.from(b.querySelectorAll("plugins-sequence > plugin")).map((w) => ({
      id: d(w.querySelector("id")),
      name: d(w.querySelector("name")),
      src: d(w.querySelector("src"))
    }));
    return {
      id: d(b.querySelector(":scope > id")),
      version: d(b.querySelector(":scope > version")),
      name: d(b.querySelector(":scope > name")),
      description: d(b.querySelector(":scope > description")),
      plugins: M
    };
  });
  function _() {
    return on(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, f = "");
      try {
        const p = yield fetch(c, { cache: "no-cache" });
        if (!p.ok)
          throw new Error(`HTTP ${p.status}`);
        const b = new DOMParser().parseFromString(yield p.text(), "application/xml");
        if (b.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, o = m(b));
      } catch (p) {
        t(3, o = []), t(7, f = p.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  We(_);
  function y(p) {
    t(5, s = p), t(4, r = null);
  }
  function g(p) {
    t(4, r = p.detail);
  }
  function v(p) {
    y(p.detail);
  }
  function C() {
    t(4, r = null);
  }
  return n.$$set = (p) => {
    "doc" in p && t(0, l = p.doc), "editCount" in p && t(1, i = p.editCount), "host" in p && t(2, a = p.host);
  }, [
    l,
    i,
    a,
    o,
    r,
    s,
    u,
    f,
    g,
    v,
    C
  ];
}
class ao extends be {
  constructor(e) {
    super(), ge(this, e, io, lo, fe, { doc: 0, editCount: 1, host: 2 });
  }
}
function yl(n) {
  let e, t;
  return e = new ao({
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
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      R(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function ro(n) {
  let e, t, l, i, a, o = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && yl(n)
  );
  return {
    c() {
      o && o.c(), e = Z(), t = P("input"), l = Z(), i = P("input"), B(t, "type", "hidden"), B(t, "name", "package-name"), t.value = Hl, B(i, "type", "hidden"), B(i, "name", "package-version"), i.value = Dl;
    },
    m(r, s) {
      o && o.m(r, s), T(r, e, s), T(r, t, s), T(r, l, s), T(r, i, s), a = !0;
    },
    p(r, [s]) {
      /*doc*/
      r[0] || /*dev*/
      r[1] ? o ? (o.p(r, s), s & /*doc, dev*/
      3 && S(o, 1)) : (o = yl(r), o.c(), S(o, 1), o.m(e.parentNode, e)) : o && (pe(), R(o, 1, 1, () => {
        o = null;
      }), ve());
    },
    i(r) {
      a || (S(o), a = !0);
    },
    o(r) {
      R(o), a = !1;
    },
    d(r) {
      r && (O(e), O(t), O(l), O(i)), o && o.d(r);
    }
  };
}
function so(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: a = 0 } = e;
  return console.log("editcount", a), n.$$set = (o) => {
    "doc" in o && t(0, l = o.doc), "dev" in o && t(1, i = o.dev), "editCount" in o && t(2, a = o.editCount);
  }, [l, i, a];
}
class oo extends be {
  constructor(e) {
    super(), ge(this, e, so, ro, fe, { doc: 0, dev: 1, editCount: 2 });
  }
}
class ho extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new oo({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = uo();
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
function uo() {
  const n = `${Hl}-v${Dl}-style`, e = fo(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function fo() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  ho as default
};
