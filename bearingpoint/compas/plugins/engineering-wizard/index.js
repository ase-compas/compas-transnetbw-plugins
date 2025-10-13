var Ui = Object.defineProperty;
var Oi = (n, e, t) => e in n ? Ui(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Yt = (n, e, t) => (Oi(n, typeof e != "symbol" ? e + "" : e, t), t);
function K() {
}
function q(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function jl(n) {
  return n();
}
function dn() {
  return /* @__PURE__ */ Object.create(null);
}
function he(n) {
  n.forEach(jl);
}
function pe(n) {
  return typeof n == "function";
}
function Q(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Ni(n) {
  return Object.keys(n).length === 0;
}
function Vi(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return K;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ht(n, e, t) {
  n.$$.on_destroy.push(Vi(e, t));
}
function ae(n, e, t, l) {
  if (n) {
    const i = ql(n, e, t, l);
    return n[0](i);
  }
}
function ql(n, e, t, l) {
  return n[1] && l ? q(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function oe(n, e, t, l) {
  if (n[2] && l) {
    const i = n[2](l(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], a = Math.max(e.dirty.length, i.length);
      for (let s = 0; s < a; s += 1)
        r[s] = e.dirty[s] | i[s];
      return r;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function ue(n, e, t, l, i, r) {
  if (i) {
    const a = ql(e, t, l, r);
    n.p(a, i);
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
function Fe(n) {
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
function on(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function nn(n, e, t) {
  return n.set(t), e;
}
function te(n) {
  return n && pe(n.destroy) ? n.destroy : K;
}
const zi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function G(n, e) {
  n.appendChild(e);
}
function P(n, e, t) {
  n.insertBefore(e, t || null);
}
function D(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ze(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function F(n) {
  return document.createElement(n);
}
function Ae(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function le(n) {
  return document.createTextNode(n);
}
function U() {
  return le(" ");
}
function ve() {
  return le("");
}
function Y(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function ji(n) {
  return function(e) {
    e.target === this && n.call(this, e);
  };
}
function v(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const qi = ["width", "height"];
function se(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && qi.indexOf(l) === -1 ? n[l] = e[l] : v(n, l, e[l]);
}
function gn(n, e) {
  for (const t in e)
    v(n, t, e[t]);
}
function Xi(n, e) {
  Object.keys(e).forEach((t) => {
    Yi(n, t, e[t]);
  });
}
function Yi(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : v(n, e, t);
}
function Lt(n) {
  return /-/.test(n) ? Xi : se;
}
function Ji(n) {
  return Array.from(n.childNodes);
}
function _e(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function mn(n, e) {
  n.value = e ?? "";
}
function Jt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function qe(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Qi(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function bt(n, e) {
  return new n(e);
}
let Et;
function St(n) {
  Et = n;
}
function Ee() {
  if (!Et)
    throw new Error("Function called outside component initialization");
  return Et;
}
function Oe(n) {
  Ee().$$.on_mount.push(n);
}
function ct(n) {
  Ee().$$.on_destroy.push(n);
}
function Ye() {
  const n = Ee();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = Qi(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return i.slice().forEach((a) => {
        a.call(n, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function Pe(n, e) {
  return Ee().$$.context.set(n, e), e;
}
function Ue(n) {
  return Ee().$$.context.get(n);
}
function Bt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const mt = [], ee = [];
let pt = [];
const ln = [], Xl = /* @__PURE__ */ Promise.resolve();
let rn = !1;
function Yl() {
  rn || (rn = !0, Xl.then(Jl));
}
function Ki() {
  return Yl(), Xl;
}
function sn(n) {
  pt.push(n);
}
function xe(n) {
  ln.push(n);
}
const Qt = /* @__PURE__ */ new Set();
let dt = 0;
function Jl() {
  if (dt !== 0)
    return;
  const n = Et;
  do {
    try {
      for (; dt < mt.length; ) {
        const e = mt[dt];
        dt++, St(e), $i(e.$$);
      }
    } catch (e) {
      throw mt.length = 0, dt = 0, e;
    }
    for (St(null), mt.length = 0, dt = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < pt.length; e += 1) {
      const t = pt[e];
      Qt.has(t) || (Qt.add(t), t());
    }
    pt.length = 0;
  } while (mt.length);
  for (; ln.length; )
    ln.pop()();
  rn = !1, Qt.clear(), St(n);
}
function $i(n) {
  if (n.fragment !== null) {
    n.update(), he(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(sn);
  }
}
function xi(n) {
  const e = [], t = [];
  pt.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), pt = e;
}
const Wt = /* @__PURE__ */ new Set();
let ot;
function ie() {
  ot = {
    r: 0,
    c: [],
    p: ot
    // parent group
  };
}
function re() {
  ot.r || he(ot.c), ot = ot.p;
}
function C(n, e) {
  n && n.i && (Wt.delete(n), n.i(e));
}
function y(n, e, t, l) {
  if (n && n.o) {
    if (Wt.has(n))
      return;
    Wt.add(n), ot.c.push(() => {
      Wt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function ye(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function er(n, e) {
  y(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function tr(n, e, t, l, i, r, a, s, o, u, c, f) {
  let d = n.length, g = r.length, p = d;
  const b = {};
  for (; p--; )
    b[n[p].key] = p;
  const _ = [], k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), I = [];
  for (p = g; p--; ) {
    const h = f(i, r, p), R = t(h);
    let B = a.get(R);
    B ? I.push(() => B.p(h, e)) : (B = u(R, h), B.c()), k.set(R, _[p] = B), R in b && H.set(R, Math.abs(p - b[R]));
  }
  const m = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function E(h) {
    C(h, 1), h.m(s, c), a.set(h.key, h), c = h.first, g--;
  }
  for (; d && g; ) {
    const h = _[g - 1], R = n[d - 1], B = h.key, M = R.key;
    h === R ? (c = h.first, d--, g--) : k.has(M) ? !a.has(B) || m.has(B) ? E(h) : L.has(M) ? d-- : H.get(B) > H.get(M) ? (L.add(B), E(h)) : (m.add(M), d--) : (o(R, a), d--);
  }
  for (; d--; ) {
    const h = n[d];
    k.has(h.key) || o(h, a);
  }
  for (; g; )
    E(_[g - 1]);
  return he(I), _;
}
function fe(n, e) {
  const t = {}, l = {}, i = { $$scope: 1 };
  let r = n.length;
  for (; r--; ) {
    const a = n[r], s = e[r];
    if (s) {
      for (const o in a)
        o in s || (l[o] = 1);
      for (const o in s)
        i[o] || (t[o] = s[o], i[o] = 1);
      n[r] = s;
    } else
      for (const o in a)
        i[o] = 1;
  }
  for (const a in l)
    a in t || (t[a] = void 0);
  return t;
}
function we(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Xe(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function V(n) {
  n && n.c();
}
function O(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), sn(() => {
    const r = n.$$.on_mount.map(jl).filter(pe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : he(r), n.$$.on_mount = [];
  }), i.forEach(sn);
}
function N(n, e) {
  const t = n.$$;
  t.fragment !== null && (xi(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function nr(n, e) {
  n.$$.dirty[0] === -1 && (mt.push(n), Yl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $(n, e, t, l, i, r, a = null, s = [-1]) {
  const o = Et;
  St(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: K,
    not_equal: i,
    bound: dn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: dn(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...g) => {
    const p = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = p) && (!u.skip_bound && u.bound[f] && u.bound[f](p), c && nr(n, f)), d;
  }) : [], u.update(), c = !0, he(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Ji(e.target);
      u.fragment && u.fragment.l(f), f.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), O(n, e.target, e.anchor), Jl();
  }
  St(o);
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
    Yt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Yt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    N(this, 1), this.$destroy = K;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!pe(t))
      return K;
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
    this.$$set && !Ni(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const lr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(lr);
const Ql = "archive-explorer", Kl = "0.0.1";
var an = function(n, e) {
  return an = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, an(n, e);
};
function Ct(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  an(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var We = function() {
  return We = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, We.apply(this, arguments);
};
function Nt(n, e, t, l) {
  function i(r) {
    return r instanceof t ? r : new t(function(a) {
      a(r);
    });
  }
  return new (t || (t = Promise))(function(r, a) {
    function s(c) {
      try {
        u(l.next(c));
      } catch (f) {
        a(f);
      }
    }
    function o(c) {
      try {
        u(l.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? r(c.value) : i(c.value).then(s, o);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function ir(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, l, i, r, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = s(0), a.throw = s(1), a.return = s(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (l)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (t = 0)), t; )
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
function ne(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Ie(n, e, t, l = { bubbles: !0 }, i = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, l), { detail: t }));
  if (n == null || n.dispatchEvent(r), i && e.startsWith("SMUI")) {
    const a = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, l), { detail: t }));
    n == null || n.dispatchEvent(a), a.defaultPrevented && r.preventDefault();
  }
  return r;
}
function _t(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i], a = r.indexOf("$");
    a !== -1 && e.indexOf(r.substring(0, a + 1)) !== -1 || e.indexOf(r) === -1 && (l[r] = n[r]);
  }
  return l;
}
const hn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, rr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Be(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let a = i, s = () => {
    };
    return e ? s = e(a, r) : t.push([a, r]), a.match(hn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
      s();
    };
  };
  function l(i) {
    const r = n.$$.callbacks[i.type];
    r && r.slice().forEach((a) => a.call(this, i));
  }
  return (i) => {
    const r = [], a = {};
    e = (s, o) => {
      let u = s, c = o, f = !1;
      const d = u.match(hn), g = u.match(rr), p = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const k = u.split(":");
        let H = "";
        for (let I = 0; I < k.length; I++)
          H += I === k.length - 1 ? ":" + k[I] : k[I].split("-").map((m) => m.slice(0, 1).toUpperCase() + m.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${H.split("$")[0]}.`), u = H;
      }
      if (p) {
        const k = u.split(d ? ":" : "$");
        u = k[0];
        const H = k.slice(1).reduce((I, m) => (I[m] = !0, I), {});
        H.passive && (f = f || {}, f.passive = !0), H.nonpassive && (f = f || {}, f.passive = !1), H.capture && (f = f || {}, f.capture = !0), H.once && (f = f || {}, f.once = !0), H.preventDefault && (c = sr(c)), H.stopPropagation && (c = ar(c)), H.stopImmediatePropagation && (c = or(c)), H.self && (c = ur(i, c)), H.trusted && (c = cr(c));
      }
      const b = pn(i, u, c, f), _ = () => {
        b();
        const k = r.indexOf(_);
        k > -1 && r.splice(k, 1);
      };
      return r.push(_), u in a || (a[u] = pn(i, u, l)), _;
    };
    for (let s = 0; s < t.length; s++)
      e(t[s][0], t[s][1]);
    return {
      destroy: () => {
        for (let s = 0; s < r.length; s++)
          r[s]();
        for (let s of Object.entries(a))
          s[1]();
      }
    };
  };
}
function pn(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function sr(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function ar(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function or(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function ur(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function cr(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ge(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.substring(0, e.length) === e && (l[r.substring(e.length)] = n[r]);
  }
  return l;
}
function Le(n, e) {
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
            const a = l[i];
            Array.isArray(a) && a.length > 1 ? r.update(a[1]) : r.update();
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
var Tt;
function fr(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Tt;
  if (typeof Tt == "boolean" && !e)
    return Tt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), a = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || a, e || (Tt = l), l;
}
function dr(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var l = e.x, i = e.y, r = l + t.left, a = i + t.top, s, o;
  if (n.type === "touchstart") {
    var u = n;
    s = u.changedTouches[0].pageX - r, o = u.changedTouches[0].pageY - a;
  } else {
    var c = n;
    s = c.pageX - r, o = c.pageY - a;
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
var It = (
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
function gr(n) {
  return n === void 0 && (n = window), mr(n) ? { passive: !0 } : !1;
}
function mr(n) {
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
const $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: gr
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
function hr(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (xl(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function xl(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function pr(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: hr,
  estimateScrollWidth: pr,
  matches: xl
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
var br = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, _r = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, bn = {
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
], vn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Zt = [], vr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var l = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _r;
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
        var i = e.cssClasses, r = i.ROOT, a = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(r), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
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
          for (var r = et(_n), a = r.next(); !a.done; a = r.next()) {
            var s = a.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            a && !a.done && (i = r.return) && i.call(r);
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
          for (var r = et(vn), a = r.next(); !a.done; a = r.next()) {
            var s = a.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            a && !a.done && (i = r.return) && i.call(r);
          } finally {
            if (l)
              throw l.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, l;
      try {
        for (var i = et(_n), r = i.next(); !r.done; r = i.next()) {
          var a = r.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (s) {
        t = { error: s };
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
        for (var i = et(vn), r = i.next(); !r.done; r = i.next()) {
          var a = r.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (s) {
        t = { error: s };
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
          var r = this.previousActivationEvent, a = r && t !== void 0 && r.type !== t.type;
          if (!a) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var s = t !== void 0 && Zt.length > 0 && Zt.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Zt.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Zt = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, l = e.strings, i = l.VAR_FG_TRANSLATE_START, r = l.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, p = d.endPoint;
        c = g.x + "px, " + g.y + "px", f = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = dr(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, r = {
        x: r.x - this.initialSize / 2,
        y: r.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: r, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, l = e.cssClasses.FG_DEACTIVATION, i = this.activationState, r = i.hasDeactivationUXRun, a = i.isActivated, s = r || !a;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(l), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(l);
      }, bn.FG_DEACTIVATION_MS));
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
        var i = We({}, l);
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
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? l : i();
      var r = Math.floor(l * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, l = t.VAR_FG_SIZE, i = t.VAR_LEFT, r = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(l, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(r, this.unboundedCoords.top + "px"));
    }, e;
  }(It)
);
const { applyPassive: Ft } = $l, { matches: Cr } = ei;
function Rt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: a, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (p) => n.classList.add(p), removeClass: f = (p) => n.classList.remove(p), addStyle: d = (p, b) => n.style.setProperty(p, b), initPromise: g = Promise.resolve() } = {}) {
  let p, b = Ue("SMUI:addLayoutListener"), _, k = a, H = o, I = u;
  function m() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && k !== a && (k = a, a ? p.activate() : a === !1 && p.deactivate()), e && !p ? (p = new vr({
      addClass: c,
      browserSupportsCssVars: () => fr(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (E) => n.contains(E),
      deregisterDocumentInteractionHandler: (E, h) => document.documentElement.removeEventListener(E, h, Ft()),
      deregisterInteractionHandler: (E, h) => (o || n).removeEventListener(E, h, Ft()),
      deregisterResizeHandler: (E) => window.removeEventListener("resize", E),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? Cr(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (E, h) => document.documentElement.addEventListener(E, h, Ft()),
      registerInteractionHandler: (E, h) => (o || n).addEventListener(E, h, Ft()),
      registerResizeHandler: (E) => window.addEventListener("resize", E),
      removeClass: f,
      updateCssVariable: d
    }), g.then(() => {
      p && (p.init(), p.setUnbounded(l));
    })) : p && !e && g.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (H !== o || I !== u) && (H = o, I = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  m(), b && (_ = b(L));
  function L() {
    p && p.layout();
  }
  return {
    update(E) {
      ({
        ripple: e,
        surface: t,
        unbounded: l,
        disabled: i,
        color: r,
        active: a,
        rippleElement: s,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => n.classList.add(h), removeClass: (h) => n.classList.remove(h), addStyle: (h, R) => n.style.setProperty(h, R), initPromise: Promise.resolve() }, E)), m();
    },
    destroy() {
      p && (p.destroy(), p = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function Ir(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Kt(n)
  );
  return {
    c() {
      i && i.c(), t = ve();
    },
    m(r, a) {
      i && i.m(r, a), P(r, t, a), l = !0;
    },
    p(r, a) {
      /*tag*/
      r[1] ? e ? Q(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Kt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, a) : (i = Kt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (C(i, r), l = !0);
    },
    o(r) {
      y(i, r), l = !1;
    },
    d(r) {
      r && D(t), i && i.d(r);
    }
  };
}
function yr(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && $t(n)
  );
  return {
    c() {
      l && l.c(), t = ve();
    },
    m(i, r) {
      l && l.m(i, r), P(i, t, r);
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? Q(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = $t(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = $t(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: K,
    o: K,
    d(i) {
      i && D(t), l && l.d(i);
    }
  };
}
function Ar(n) {
  let e, t, l, i, r;
  const a = (
    /*#slots*/
    n[8].default
  ), s = ae(
    a,
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
    u = q(u, o[c]);
  return {
    c() {
      e = Ae("svg"), s && s.c(), gn(e, u);
    },
    m(c, f) {
      P(c, e, f), s && s.m(e, null), n[9](e), l = !0, i || (r = [
        te(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      s && s.p && (!l || f & /*$$scope*/
      128) && ue(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        l ? oe(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[7]
        ),
        null
      ), gn(e, u = fe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(s, c), l = !0);
    },
    o(c) {
      y(s, c), l = !1;
    },
    d(c) {
      c && D(e), s && s.d(c), n[9](null), i = !1, he(r);
    }
  };
}
function Kt(n) {
  let e, t, l, i, r;
  const a = (
    /*#slots*/
    n[8].default
  ), s = ae(
    a,
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
    u = q(u, o[c]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), s && s.c(), Lt(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      P(c, e, f), s && s.m(e, null), n[11](e), l = !0, i || (r = [
        te(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      s && s.p && (!l || f & /*$$scope*/
      128) && ue(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        l ? oe(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[7]
        ),
        null
      ), Lt(
        /*tag*/
        c[1]
      )(e, u = fe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(s, c), l = !0);
    },
    o(c) {
      y(s, c), l = !1;
    },
    d(c) {
      c && D(e), s && s.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function $t(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let s = 0; s < r.length; s += 1)
    a = q(a, r[s]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), Lt(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(s, o) {
      P(s, e, o), n[10](e), l || (i = [
        te(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(s, o) {
      Lt(
        /*tag*/
        s[1]
      )(e, a = fe(r, [o & /*$$restProps*/
      32 && /*$$restProps*/
      s[5]])), t && pe(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    d(s) {
      s && D(e), n[10](null), l = !1, he(i);
    }
  };
}
function kr(n) {
  let e, t, l, i;
  const r = [Ar, yr, Ir], a = [];
  function s(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), l = ve();
    },
    m(o, u) {
      a[e].m(o, u), P(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (ie(), y(a[c], 1, 1, () => {
        a[c] = null;
      }), re(), t = a[e], t ? t.p(o, u) : (t = a[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      y(t), i = !1;
    },
    d(o) {
      o && D(l), a[e].d(o);
    }
  };
}
function wr(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ge(e, i), { $$slots: a = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Be(Ee());
  let f;
  function d() {
    return f;
  }
  function g(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function p(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function b(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  return n.$$set = (_) => {
    e = q(q({}, e), Fe(_)), t(5, r = ge(e, i)), "use" in _ && t(0, o = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, s = _.$$scope);
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
    s,
    a,
    g,
    p,
    b
  ];
}
class Ut extends x {
  constructor(e) {
    super(), $(this, e, wr, kr, Q, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const gt = [];
function ut(n, e = K) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(s) {
    if (Q(n, s) && (n = s, t)) {
      const o = !gt.length;
      for (const u of l)
        u[1](), gt.push(u, n);
      if (o) {
        for (let u = 0; u < gt.length; u += 2)
          gt[u][0](gt[u + 1]);
        gt.length = 0;
      }
    }
  }
  function r(s) {
    i(s(n));
  }
  function a(s, o = K) {
    const u = [s, o];
    return l.add(u), l.size === 1 && (t = e(i, r) || K), s(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: r, subscribe: a };
}
function Sr(n) {
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
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Rr(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: a } = e, { value: s } = e;
  const o = ut(s);
  return ht(n, o, (u) => t(5, l = u)), Pe(a, o), ct(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, a = u.key), "value" in u && t(2, s = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && nn(o, l = s, l);
  }, [o, a, s, r, i];
}
class Ot extends x {
  constructor(e) {
    super(), $(this, e, Rr, Sr, Q, { key: 1, value: 2 });
  }
}
function Cn(n) {
  let e;
  return {
    c() {
      e = F("div"), v(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Lr(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), a = ae(
    r,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let s = (
    /*touch*/
    n[6] && Cn()
  );
  return {
    c() {
      e = F("div"), t = U(), a && a.c(), s && s.c(), l = ve(), v(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      P(o, e, u), P(o, t, u), a && a.m(o, u), s && s.m(o, u), P(o, l, u), i = !0;
    },
    p(o, u) {
      a && a.p && (!i || u[0] & /*$$scope*/
      1073741824) && ue(
        a,
        r,
        o,
        /*$$scope*/
        o[30],
        i ? oe(
          r,
          /*$$scope*/
          o[30],
          u,
          null
        ) : ce(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? s || (s = Cn(), s.c(), s.m(l.parentNode, l)) : s && (s.d(1), s = null);
    },
    i(o) {
      i || (C(a, o), i = !0);
    },
    o(o) {
      y(a, o), i = !1;
    },
    d(o) {
      o && (D(e), D(t), D(l)), a && a.d(o), s && s.d(o);
    }
  };
}
function Er(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          Rt,
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
      class: ne({
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
      ).map(xt).concat([
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
  function a(s, o) {
    let u = {
      $$slots: { default: [Lr] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < i.length; c += 1)
      u = q(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = q(u, fe(i, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        s[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            Rt,
            {
              ripple: (
                /*ripple*/
                s[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                s[4]
              ),
              disabled: !!/*$$restProps*/
              s[23].disabled,
              addClass: (
                /*addClass*/
                s[19]
              ),
              removeClass: (
                /*removeClass*/
                s[20]
              ),
              addStyle: (
                /*addStyle*/
                s[21]
              )
            }
          ],
          /*forwardEvents*/
          s[17],
          .../*use*/
          s[0]
        ]
      },
      o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: ne({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            s[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            s[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            s[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            s[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            s[6]
          ),
          "mdc-card__action": (
            /*context*/
            s[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            s[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            s[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            s[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            s[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            s[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            s[18] === "banner" && /*secondary*/
            s[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            s[18] === "banner" && !/*secondary*/
            s[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            s[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          s[12]
        })
      },
      o[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          s[13]
        ).map(xt).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && we(
        /*actionProp*/
        s[16]
      ),
      o[0] & /*defaultProp*/
      32768 && we(
        /*defaultProp*/
        s[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && we(
        /*secondaryProp*/
        s[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        s[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && we(
        /*$$restProps*/
        s[23]
      )
    ]))), { props: u };
  }
  return r && (e = bt(r, a(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && V(e.$$.fragment), t = ve();
    },
    m(s, o) {
      e && O(e, s, o), P(s, t, o), l = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      s[9])) {
        if (e) {
          ie();
          const u = e;
          y(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), re();
        }
        r ? (e = bt(r, a(s, o)), s[29](e), e.$on(
          "click",
          /*handleClick*/
          s[22]
        ), V(e.$$.fragment), C(e.$$.fragment, 1), O(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? fe(i, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            s[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                Rt,
                {
                  ripple: (
                    /*ripple*/
                    s[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    s[4]
                  ),
                  disabled: !!/*$$restProps*/
                  s[23].disabled,
                  addClass: (
                    /*addClass*/
                    s[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    s[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    s[21]
                  )
                }
              ],
              /*forwardEvents*/
              s[17],
              .../*use*/
              s[0]
            ]
          },
          o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: ne({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                s[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                s[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                s[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                s[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                s[6]
              ),
              "mdc-card__action": (
                /*context*/
                s[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                s[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                s[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                s[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                s[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                s[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                s[18] === "banner" && /*secondary*/
                s[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                s[18] === "banner" && !/*secondary*/
                s[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                s[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              s[12]
            })
          },
          o[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              s[13]
            ).map(xt).concat([
              /*style*/
              s[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && we(
            /*actionProp*/
            s[16]
          ),
          o[0] & /*defaultProp*/
          32768 && we(
            /*defaultProp*/
            s[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && we(
            /*secondaryProp*/
            s[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            s[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && we(
            /*$$restProps*/
            s[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      l || (e && C(e.$$.fragment, s), l = !0);
    },
    o(s) {
      e && y(e.$$.fragment, s), l = !1;
    },
    d(s) {
      s && D(t), n[29](null), e && N(e, s);
    }
  };
}
const xt = ([n, e]) => `${n}: ${e};`;
function Hr(n, e, t) {
  let l, i, r;
  const a = [
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
  let s = ge(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = Be(Ee());
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: p = !0 } = e, { color: b = "primary" } = e, { variant: _ = "text" } = e, { touch: k = !1 } = e, { href: H = void 0 } = e, { action: I = "close" } = e, { defaultAction: m = !1 } = e, { secondary: L = !1 } = e, E, h = {}, R = {}, B = Ue("SMUI:button:context"), { component: M = Ut } = e, { tag: A = M === Ut ? H == null ? "button" : "a" : void 0 } = e, W = s.disabled;
  Pe("SMUI:label:context", "button"), Pe("SMUI:icon:context", "button");
  function T(w) {
    h[w] || t(12, h[w] = !0, h);
  }
  function X(w) {
    (!(w in h) || h[w]) && t(12, h[w] = !1, h);
  }
  function Se(w, z) {
    R[w] != z && (z === "" || z == null ? (delete R[w], t(13, R)) : t(13, R[w] = z, R));
  }
  function ke() {
    B === "banner" && Ie(Ce(), L ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function Ce() {
    return E.getElement();
  }
  function j(w) {
    ee[w ? "unshift" : "push"](() => {
      E = w, t(11, E);
    });
  }
  return n.$$set = (w) => {
    t(31, e = q(q({}, e), Fe(w))), t(23, s = ge(e, a)), "use" in w && t(0, f = w.use), "class" in w && t(1, d = w.class), "style" in w && t(2, g = w.style), "ripple" in w && t(3, p = w.ripple), "color" in w && t(4, b = w.color), "variant" in w && t(5, _ = w.variant), "touch" in w && t(6, k = w.touch), "href" in w && t(7, H = w.href), "action" in w && t(24, I = w.action), "defaultAction" in w && t(25, m = w.defaultAction), "secondary" in w && t(8, L = w.secondary), "component" in w && t(9, M = w.component), "tag" in w && t(10, A = w.tag), "$$scope" in w && t(30, u = w.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = B === "dialog:action" && I != null ? { "data-mdc-dialog-action": I } : { action: e.action }), t(15, i = B === "dialog:action" && m ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = B === "banner" ? {} : { secondary: e.secondary }), W !== s.disabled) {
      if (E) {
        const w = Ce();
        "blur" in w && w.blur();
      }
      t(27, W = s.disabled);
    }
  }, e = Fe(e), [
    f,
    d,
    g,
    p,
    b,
    _,
    k,
    H,
    L,
    M,
    A,
    E,
    h,
    R,
    r,
    i,
    l,
    c,
    B,
    T,
    X,
    Se,
    ke,
    s,
    I,
    m,
    Ce,
    W,
    o,
    j,
    u
  ];
}
class vt extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Hr,
      Er,
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
var Gr = {
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
var Dr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var l = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gr;
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
  }(It)
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
var Pr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var l = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
  }(It)
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
var Mr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, In = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Tr = {
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
var Zr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return In;
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
      t > 0 && (t += In.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(It)
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
var en = {
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
}, Fr = {
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
}, Wr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Br = [
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
var An = ["mousedown", "touchstart"], kn = ["click", "keydown"], Ur = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return Fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return en;
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
        return Br.indexOf(t) >= 0;
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
        for (var a = et(An), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          s && !s.done && (l = a.return) && l.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = et(kn), c = u.next(); !c.done; c = u.next()) {
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
        for (var a = et(An), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          s && !s.done && (l = a.return) && l.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = et(kn), c = u.next(); !c.done; c = u.next()) {
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
        return Wr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
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
        var l = t.touches, i = l ? l[0] : t, r = i.target.getBoundingClientRect(), a = i.clientX - r.left;
        this.adapter.setLineRippleTransformOrigin(a);
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
        var r = this.helperText.isVisible(), a = this.helperText.getId();
        r && a ? this.adapter.setInputAttr(en.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(en.ARIA_DESCRIBEDBY);
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
  }(It)
);
function Or(n) {
  let e, t, l, i, r, a, s, o;
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
      class: t = ne({
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
    d = q(d, f[g]);
  return {
    c() {
      e = F("label"), c && c.c(), se(e, d);
    },
    m(g, p) {
      P(g, e, p), c && c.m(e, null), n[24](e), a = !0, s || (o = [
        te(r = Le.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        te(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(g, p) {
      c && c.p && (!a || p & /*$$scope*/
      2097152) && ue(
        c,
        u,
        g,
        /*$$scope*/
        g[21],
        a ? oe(
          u,
          /*$$scope*/
          g[21],
          p,
          null
        ) : ce(
          /*$$scope*/
          g[21]
        ),
        null
      ), se(e, d = fe(f, [
        (!a || p & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = ne({
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
        (!a || p & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(Sn).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: l },
        (!a || p & /*forId*/
        32 && i !== (i = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: i },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), r && pe(r.update) && p & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        g[2]
      );
    },
    i(g) {
      a || (C(c, g), a = !0);
    },
    o(g) {
      y(c, g), a = !1;
    },
    d(g) {
      g && D(e), c && c.d(g), n[24](null), s = !1, he(o);
    }
  };
}
function Nr(n) {
  let e, t, l, i, r, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ae(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = ne({
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
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = q(f, c[d]);
  return {
    c() {
      e = F("span"), u && u.c(), se(e, f);
    },
    m(d, g) {
      P(d, e, g), u && u.m(e, null), n[23](e), r = !0, a || (s = [
        te(i = Le.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        te(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(d, g) {
      u && u.p && (!r || g & /*$$scope*/
      2097152) && ue(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        r ? oe(
          o,
          /*$$scope*/
          d[21],
          g,
          null
        ) : ce(
          /*$$scope*/
          d[21]
        ),
        null
      ), se(e, f = fe(c, [
        (!r || g & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = ne({
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
        ).map(wn).concat([
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
      y(u, d), r = !1;
    },
    d(d) {
      d && D(e), u && u.d(d), n[23](null), a = !1, he(s);
    }
  };
}
function Vr(n) {
  let e, t, l, i;
  const r = [Nr, Or], a = [];
  function s(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), l = ve();
    },
    m(o, u) {
      a[e].m(o, u), P(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (ie(), y(a[c], 1, 1, () => {
        a[c] = null;
      }), re(), t = a[e], t ? t.p(o, u) : (t = a[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      y(t), i = !1;
    },
    d(o) {
      o && D(l), a[e].d(o);
    }
  };
}
const wn = ([n, e]) => `${n}: ${e};`, Sn = ([n, e]) => `${n}: ${e};`;
function zr(n, e, t) {
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
  let i = ge(e, l), { $$slots: r = {}, $$scope: a } = e;
  var s;
  const o = Be(Ee());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: p = !1 } = e, { wrapped: b = !1 } = e, _, k, H = {}, I = {}, m = (s = Ue("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, L = g, E = p;
  Oe(() => {
    t(18, k = new Dr({
      addClass: h,
      removeClass: R,
      getWidth: () => {
        var w, z;
        const me = Se(), be = me.cloneNode(!0);
        (w = me.parentNode) === null || w === void 0 || w.appendChild(be), be.classList.add("smui-floating-label--remove-transition"), be.classList.add("smui-floating-label--force-size"), be.classList.remove("mdc-floating-label--float-above");
        const De = be.scrollWidth;
        return (z = me.parentNode) === null || z === void 0 || z.removeChild(be), De;
      },
      registerInteractionHandler: (w, z) => Se().addEventListener(w, z),
      deregisterInteractionHandler: (w, z) => Se().removeEventListener(w, z)
    }));
    const j = {
      get element() {
        return Se();
      },
      addStyle: B,
      removeStyle: M
    };
    return Ie(_, "SMUIFloatingLabel:mount", j), k.init(), () => {
      Ie(_, "SMUIFloatingLabel:unmount", j), k.destroy();
    };
  });
  function h(j) {
    H[j] || t(8, H[j] = !0, H);
  }
  function R(j) {
    (!(j in H) || H[j]) && t(8, H[j] = !1, H);
  }
  function B(j, w) {
    I[j] != w && (w === "" || w == null ? (delete I[j], t(9, I)) : t(9, I[j] = w, I));
  }
  function M(j) {
    j in I && (delete I[j], t(9, I));
  }
  function A(j) {
    k.shake(j);
  }
  function W(j) {
    t(0, g = j);
  }
  function T(j) {
    t(1, p = j);
  }
  function X() {
    return k.getWidth();
  }
  function Se() {
    return _;
  }
  function ke(j) {
    ee[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  function Ce(j) {
    ee[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  return n.$$set = (j) => {
    e = q(q({}, e), Fe(j)), t(12, i = ge(e, l)), "use" in j && t(2, u = j.use), "class" in j && t(3, c = j.class), "style" in j && t(4, f = j.style), "for" in j && t(5, d = j.for), "floatAbove" in j && t(0, g = j.floatAbove), "required" in j && t(1, p = j.required), "wrapped" in j && t(6, b = j.wrapped), "$$scope" in j && t(21, a = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && k && L !== g && (t(19, L = g), k.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && k && E !== p && (t(20, E = p), k.setRequired(p));
  }, [
    g,
    p,
    u,
    c,
    f,
    d,
    b,
    _,
    H,
    I,
    o,
    m,
    i,
    A,
    W,
    T,
    X,
    Se,
    k,
    L,
    E,
    a,
    r,
    ke,
    Ce
  ];
}
class ti extends x {
  constructor(e) {
    super(), $(this, e, zr, Vr, Q, {
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
function jr(n) {
  let e, t, l, i, r, a, s = [
    {
      class: t = ne({
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
      ).map(Rn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = q(o, s[u]);
  return {
    c() {
      e = F("div"), se(e, o);
    },
    m(u, c) {
      P(u, e, c), n[13](e), r || (a = [
        te(i = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], r = !0);
    },
    p(u, [c]) {
      se(e, o = fe(s, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = ne({
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
        ).map(Rn).concat([
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
    i: K,
    o: K,
    d(u) {
      u && D(e), n[13](null), r = !1, he(a);
    }
  };
}
const Rn = ([n, e]) => `${n}: ${e};`;
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
  const r = Be(Ee());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, g = {};
  Oe(() => (f = new Pr({
    addClass: b,
    removeClass: _,
    hasClass: p,
    setStyle: k,
    registerEventHandler: (h, R) => L().addEventListener(h, R),
    deregisterEventHandler: (h, R) => L().removeEventListener(h, R)
  }), f.init(), () => {
    f.destroy();
  }));
  function p(h) {
    return h in d ? d[h] : L().classList.contains(h);
  }
  function b(h) {
    d[h] || t(5, d[h] = !0, d);
  }
  function _(h) {
    (!(h in d) || d[h]) && t(5, d[h] = !1, d);
  }
  function k(h, R) {
    g[h] != R && (R === "" || R == null ? (delete g[h], t(6, g)) : t(6, g[h] = R, g));
  }
  function H() {
    f.activate();
  }
  function I() {
    f.deactivate();
  }
  function m(h) {
    f.setRippleCenter(h);
  }
  function L() {
    return c;
  }
  function E(h) {
    ee[h ? "unshift" : "push"](() => {
      c = h, t(4, c);
    });
  }
  return n.$$set = (h) => {
    e = q(q({}, e), Fe(h)), t(8, i = ge(e, l)), "use" in h && t(0, a = h.use), "class" in h && t(1, s = h.class), "style" in h && t(2, o = h.style), "active" in h && t(3, u = h.active);
  }, [
    a,
    s,
    o,
    u,
    c,
    d,
    g,
    r,
    i,
    H,
    I,
    m,
    L,
    E
  ];
}
class Xr extends x {
  constructor(e) {
    super(), $(this, e, qr, jr, Q, {
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
      e = F("div"), r && r.c(), v(e, "class", "mdc-notched-outline__notch"), v(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(En).join(" "));
    },
    m(a, s) {
      P(a, e, s), r && r.m(e, null), l = !0;
    },
    p(a, s) {
      r && r.p && (!l || s & /*$$scope*/
      16384) && ue(
        r,
        i,
        a,
        /*$$scope*/
        a[14],
        l ? oe(
          i,
          /*$$scope*/
          a[14],
          s,
          null
        ) : ce(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!l || s & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(En).join(" "))) && v(e, "style", t);
    },
    i(a) {
      l || (C(r, a), l = !0);
    },
    o(a) {
      y(r, a), l = !1;
    },
    d(a) {
      a && D(e), r && r.d(a);
    }
  };
}
function Yr(n) {
  let e, t, l, i, r, a, s, o, u, c, f = !/*noLabel*/
  n[3] && Ln(n), d = [
    {
      class: a = ne({
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
  for (let p = 0; p < d.length; p += 1)
    g = q(g, d[p]);
  return {
    c() {
      e = F("div"), t = F("div"), l = U(), f && f.c(), i = U(), r = F("div"), v(t, "class", "mdc-notched-outline__leading"), v(r, "class", "mdc-notched-outline__trailing"), se(e, g);
    },
    m(p, b) {
      P(p, e, b), G(e, t), G(e, l), f && f.m(e, null), G(e, i), G(e, r), n[16](e), o = !0, u || (c = [
        te(s = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
    p(p, [b]) {
      /*noLabel*/
      p[3] ? f && (ie(), y(f, 1, 1, () => {
        f = null;
      }), re()) : f ? (f.p(p, b), b & /*noLabel*/
      8 && C(f, 1)) : (f = Ln(p), f.c(), C(f, 1), f.m(e, i)), se(e, g = fe(d, [
        (!o || b & /*className, notched, noLabel, internalClasses*/
        78 && a !== (a = ne({
          [
            /*className*/
            p[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            p[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            p[3]
          ),
          .../*internalClasses*/
          p[6]
        }))) && { class: a },
        b & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), s && pe(s.update) && b & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (C(f), o = !0);
    },
    o(p) {
      y(f), o = !1;
    },
    d(p) {
      p && D(e), f && f.d(), n[16](null), u = !1, he(c);
    }
  };
}
const En = ([n, e]) => `${n}: ${e};`;
function Jr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: a } = e;
  const s = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, p, b = {}, _ = {};
  Oe(() => (g = new Zr({
    addClass: H,
    removeClass: I,
    setNotchWidthProperty: (A) => m("width", A + "px"),
    removeNotchWidthProperty: () => L("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function k(A) {
    t(4, p = A.detail);
  }
  function H(A) {
    b[A] || t(6, b[A] = !0, b);
  }
  function I(A) {
    (!(A in b) || b[A]) && t(6, b[A] = !1, b);
  }
  function m(A, W) {
    _[A] != W && (W === "" || W == null ? (delete _[A], t(7, _)) : t(7, _[A] = W, _));
  }
  function L(A) {
    A in _ && (delete _[A], t(7, _));
  }
  function E(A) {
    g.notch(A);
  }
  function h() {
    g.closeNotch();
  }
  function R() {
    return d;
  }
  function B(A) {
    ee[A ? "unshift" : "push"](() => {
      d = A, t(5, d);
    });
  }
  const M = () => t(4, p = void 0);
  return n.$$set = (A) => {
    e = q(q({}, e), Fe(A)), t(10, i = ge(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "notched" in A && t(2, c = A.notched), "noLabel" in A && t(3, f = A.noLabel), "$$scope" in A && t(14, a = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (p ? (p.addStyle("transition-duration", "0s"), H("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      p && p.removeStyle("transition-duration");
    })) : I("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    p,
    d,
    b,
    _,
    s,
    k,
    i,
    E,
    h,
    R,
    a,
    r,
    B,
    M
  ];
}
class Qr extends x {
  constructor(e) {
    super(), $(this, e, Jr, Yr, Q, {
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
function Kr(n) {
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
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function $r(n) {
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
      class: ne({
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
  function a(s, o) {
    let u = {
      $$slots: { default: [Kr] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < i.length; c += 1)
      u = q(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = q(u, fe(i, [
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
        class: ne({
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
      128 && we(
        /*props*/
        s[7]
      ),
      o & /*$$restProps*/
      512 && we(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return r && (e = bt(r, a(n)), n[12](e)), {
    c() {
      e && V(e.$$.fragment), t = ve();
    },
    m(s, o) {
      e && O(e, s, o), P(s, t, o), l = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      s[2])) {
        if (e) {
          ie();
          const u = e;
          y(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), re();
        }
        r ? (e = bt(r, a(s, o)), s[12](e), V(e.$$.fragment), C(e.$$.fragment, 1), O(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? fe(i, [
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
            class: ne({
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
          128 && we(
            /*props*/
            s[7]
          ),
          o & /*$$restProps*/
          512 && we(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      l || (e && C(e.$$.fragment, s), l = !0);
    },
    o(s) {
      e && y(e.$$.fragment, s), l = !1;
    },
    d(s) {
      s && D(t), n[12](null), e && N(e, s);
    }
  };
}
const $e = {
  component: Ut,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function xr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: a } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = $e.class, f = {}, d = [], g = $e.contexts, p = $e.props;
  let { component: b = $e.component } = e, { tag: _ = b === Ut ? $e.tag : void 0 } = e;
  Object.entries($e.classMap).forEach(([m, L]) => {
    const E = Ue(L);
    E && "subscribe" in E && d.push(E.subscribe((h) => {
      t(5, f[m] = h, f);
    }));
  });
  const k = Be(Ee());
  for (let m in g)
    g.hasOwnProperty(m) && Pe(m, g[m]);
  ct(() => {
    for (const m of d)
      m();
  });
  function H() {
    return u.getElement();
  }
  function I(m) {
    ee[m ? "unshift" : "push"](() => {
      u = m, t(4, u);
    });
  }
  return n.$$set = (m) => {
    e = q(q({}, e), Fe(m)), t(9, i = ge(e, l)), "use" in m && t(0, s = m.use), "class" in m && t(1, o = m.class), "component" in m && t(2, b = m.component), "tag" in m && t(3, _ = m.tag), "$$scope" in m && t(13, a = m.$$scope);
  }, [
    s,
    o,
    b,
    _,
    u,
    f,
    c,
    p,
    k,
    i,
    H,
    r,
    I,
    a
  ];
}
class es extends x {
  constructor(e) {
    super(), $(this, e, xr, $r, Q, {
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
const Hn = Object.assign({}, $e);
function Me(n) {
  return new Proxy(es, {
    construct: function(e, t) {
      return Object.assign($e, Hn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign($e, Hn, n), e[t];
    }
  });
}
const ts = Me({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), ns = Me({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), ls = Me({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function is(n) {
  let e, t, l, i, r, a = [
    {
      class: t = ne({
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
  ], s = {};
  for (let o = 0; o < a.length; o += 1)
    s = q(s, a[o]);
  return {
    c() {
      e = F("input"), se(e, s);
    },
    m(o, u) {
      P(o, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        te(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
      se(e, s = fe(a, [
        u & /*className*/
        2 && t !== (t = ne({
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
      ])), l && pe(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: K,
    o: K,
    d(o) {
      o && D(e), n[26](null), i = !1, he(r);
    }
  };
}
function rs(n) {
  return n === "" ? Number.NaN : +n;
}
function ss(n, e, t) {
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
  const r = Be(Ee());
  let a = () => {
  };
  function s(w) {
    return w === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = a } = e;
  const g = s(d);
  g && (d = "");
  let { files: p = null } = e, { dirty: b = !1 } = e, { invalid: _ = !1 } = e, { updateInvalid: k = !0 } = e, { emptyValueNull: H = d === null } = e;
  g && H && (d = null);
  let { emptyValueUndefined: I = d === void 0 } = e;
  g && I && (d = void 0);
  let m, L = {}, E = {};
  Oe(() => {
    k && t(14, _ = m.matches(":invalid"));
  });
  function h(w) {
    if (c === "file") {
      t(12, p = w.currentTarget.files);
      return;
    }
    if (w.currentTarget.value === "" && H) {
      t(11, d = null);
      return;
    }
    if (w.currentTarget.value === "" && I) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = rs(w.currentTarget.value));
        break;
      default:
        t(11, d = w.currentTarget.value);
        break;
    }
  }
  function R(w) {
    (c === "file" || c === "range") && h(w), t(13, b = !0), k && t(14, _ = m.matches(":invalid"));
  }
  function B(w) {
    var z;
    return w in L ? (z = L[w]) !== null && z !== void 0 ? z : null : X().getAttribute(w);
  }
  function M(w, z) {
    L[w] !== z && t(6, L[w] = z, L);
  }
  function A(w) {
    (!(w in L) || L[w] != null) && t(6, L[w] = void 0, L);
  }
  function W() {
    X().focus();
  }
  function T() {
    X().blur();
  }
  function X() {
    return m;
  }
  function Se(w) {
    Bt.call(this, n, w);
  }
  function ke(w) {
    Bt.call(this, n, w);
  }
  function Ce(w) {
    ee[w ? "unshift" : "push"](() => {
      m = w, t(5, m);
    });
  }
  const j = (w) => c !== "file" && h(w);
  return n.$$set = (w) => {
    e = q(q({}, e), Fe(w)), t(10, i = ge(e, l)), "use" in w && t(0, o = w.use), "class" in w && t(1, u = w.class), "type" in w && t(2, c = w.type), "placeholder" in w && t(3, f = w.placeholder), "value" in w && t(11, d = w.value), "files" in w && t(12, p = w.files), "dirty" in w && t(13, b = w.dirty), "invalid" in w && t(14, _ = w.invalid), "updateInvalid" in w && t(15, k = w.updateInvalid), "emptyValueNull" in w && t(16, H = w.emptyValueNull), "emptyValueUndefined" in w && t(17, I = w.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete E.value, t(4, E), t(2, c), t(11, d)) : t(4, E.value = d ?? "", E));
  }, [
    o,
    u,
    c,
    f,
    E,
    m,
    L,
    r,
    h,
    R,
    i,
    d,
    p,
    b,
    _,
    k,
    H,
    I,
    B,
    M,
    A,
    W,
    T,
    X,
    Se,
    ke,
    Ce,
    j
  ];
}
class as extends x {
  constructor(e) {
    super(), $(this, e, ss, is, Q, {
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
function os(n) {
  let e, t, l, i, r, a, s = [
    {
      class: t = ne({
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
  for (let u = 0; u < s.length; u += 1)
    o = q(o, s[u]);
  return {
    c() {
      e = F("textarea"), se(e, o);
    },
    m(u, c) {
      P(u, e, c), e.autofocus && e.focus(), n[21](e), mn(
        e,
        /*value*/
        n[0]
      ), r || (a = [
        te(i = Le.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        te(
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
    p(u, [c]) {
      se(e, o = fe(s, [
        c & /*className*/
        4 && t !== (t = ne({
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
      1 && mn(
        e,
        /*value*/
        u[0]
      );
    },
    i: K,
    o: K,
    d(u) {
      u && D(e), n[21](null), r = !1, he(a);
    }
  };
}
function us(n, e, t) {
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
  const r = Be(Ee());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, p, b = {};
  Oe(() => {
    d && t(11, f = p.matches(":invalid"));
  });
  function _() {
    t(10, c = !0), d && t(11, f = p.matches(":invalid"));
  }
  function k(A) {
    var W;
    return A in b ? (W = b[A]) !== null && W !== void 0 ? W : null : E().getAttribute(A);
  }
  function H(A, W) {
    b[A] !== W && t(6, b[A] = W, b);
  }
  function I(A) {
    (!(A in b) || b[A] != null) && t(6, b[A] = void 0, b);
  }
  function m() {
    E().focus();
  }
  function L() {
    E().blur();
  }
  function E() {
    return p;
  }
  function h(A) {
    Bt.call(this, n, A);
  }
  function R(A) {
    Bt.call(this, n, A);
  }
  function B(A) {
    ee[A ? "unshift" : "push"](() => {
      p = A, t(5, p);
    });
  }
  function M() {
    u = this.value, t(0, u);
  }
  return n.$$set = (A) => {
    e = q(q({}, e), Fe(A)), t(9, i = ge(e, l)), "use" in A && t(1, a = A.use), "class" in A && t(2, s = A.class), "style" in A && t(3, o = A.style), "value" in A && t(0, u = A.value), "dirty" in A && t(10, c = A.dirty), "invalid" in A && t(11, f = A.invalid), "updateInvalid" in A && t(12, d = A.updateInvalid), "resizable" in A && t(4, g = A.resizable);
  }, [
    u,
    a,
    s,
    o,
    g,
    p,
    b,
    r,
    _,
    i,
    c,
    f,
    d,
    k,
    H,
    I,
    m,
    L,
    E,
    h,
    R,
    B,
    M
  ];
}
class cs extends x {
  constructor(e) {
    super(), $(this, e, us, os, Q, {
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
const fs = (n) => ({}), Gn = (n) => ({}), ds = (n) => ({}), Dn = (n) => ({}), gs = (n) => ({}), Pn = (n) => ({}), ms = (n) => ({}), Mn = (n) => ({}), hs = (n) => ({}), Tn = (n) => ({}), ps = (n) => ({}), Zn = (n) => ({}), bs = (n) => ({}), Fn = (n) => ({}), _s = (n) => ({}), Wn = (n) => ({}), vs = (n) => ({}), Bn = (n) => ({}), Cs = (n) => ({}), Un = (n) => ({}), Is = (n) => ({}), On = (n) => ({}), ys = (n) => ({}), Nn = (n) => ({});
function As(n) {
  let e, t, l, i, r, a, s, o, u, c, f, d, g, p;
  const b = (
    /*#slots*/
    n[56].label
  ), _ = ae(
    b,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  l = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ws] },
      $$scope: { ctx: n }
    }
  });
  const k = (
    /*#slots*/
    n[56].default
  ), H = ae(
    k,
    n,
    /*$$scope*/
    n[87],
    null
  );
  a = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Ss] },
      $$scope: { ctx: n }
    }
  });
  const I = (
    /*#slots*/
    n[56].ripple
  ), m = ae(
    I,
    n,
    /*$$scope*/
    n[87],
    Dn
  );
  let L = [
    {
      class: o = ne({
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
      ).map(xn).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    _t(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], E = {};
  for (let h = 0; h < L.length; h += 1)
    E = q(E, L[h]);
  return {
    c() {
      e = F("div"), _ && _.c(), t = U(), V(l.$$.fragment), i = U(), H && H.c(), r = U(), V(a.$$.fragment), s = U(), m && m.c(), se(e, E);
    },
    m(h, R) {
      P(h, e, R), _ && _.m(e, null), G(e, t), O(l, e, null), G(e, i), H && H.m(e, null), G(e, r), O(a, e, null), G(e, s), m && m.m(e, null), n[82](e), d = !0, g || (p = [
        te(c = Rt.call(null, e, {
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
        te(f = Le.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        te(
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
      ], g = !0);
    },
    p(h, R) {
      _ && _.p && (!d || R[2] & /*$$scope*/
      33554432) && ue(
        _,
        b,
        h,
        /*$$scope*/
        h[87],
        d ? oe(
          b,
          /*$$scope*/
          h[87],
          R,
          hs
        ) : ce(
          /*$$scope*/
          h[87]
        ),
        Tn
      );
      const B = {};
      R[2] & /*$$scope*/
      33554432 && (B.$$scope = { dirty: R, ctx: h }), l.$set(B), H && H.p && (!d || R[2] & /*$$scope*/
      33554432) && ue(
        H,
        k,
        h,
        /*$$scope*/
        h[87],
        d ? oe(
          k,
          /*$$scope*/
          h[87],
          R,
          null
        ) : ce(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const M = {};
      R[2] & /*$$scope*/
      33554432 && (M.$$scope = { dirty: R, ctx: h }), a.$set(M), m && m.p && (!d || R[2] & /*$$scope*/
      33554432) && ue(
        m,
        I,
        h,
        /*$$scope*/
        h[87],
        d ? oe(
          I,
          /*$$scope*/
          h[87],
          R,
          ds
        ) : ce(
          /*$$scope*/
          h[87]
        ),
        Dn
      ), se(e, E = fe(L, [
        (!d || R[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | R[1] & /*$$slots*/
        65536 && o !== (o = ne({
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
        (!d || R[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(xn).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        R[1] & /*$$restProps*/
        32768 && _t(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && pe(c.update) && R[0] & /*ripple*/
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
      }), f && pe(f.update) && R[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (C(_, h), C(l.$$.fragment, h), C(H, h), C(a.$$.fragment, h), C(m, h), d = !0);
    },
    o(h) {
      y(_, h), y(l.$$.fragment, h), y(H, h), y(a.$$.fragment, h), y(m, h), d = !1;
    },
    d(h) {
      h && D(e), _ && _.d(h), N(l), H && H.d(h), N(a), m && m.d(h), n[82](null), g = !1, he(p);
    }
  };
}
function ks(n) {
  let e, t, l, i, r, a, s, o, u, c, f, d, g, p, b, _, k, H, I = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Vn(n), m = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && qn(n)
  );
  i = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Hs] },
      $$scope: { ctx: n }
    }
  });
  const L = (
    /*#slots*/
    n[56].default
  ), E = ae(
    L,
    n,
    /*$$scope*/
    n[87],
    null
  ), h = [Ds, Gs], R = [];
  function B(T, X) {
    return (
      /*textarea*/
      T[14] && typeof /*value*/
      T[0] == "string" ? 0 : 1
    );
  }
  s = B(n), o = R[s] = h[s](n), c = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Ts] },
      $$scope: { ctx: n }
    }
  });
  let M = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Qn(n), A = [
    {
      class: d = ne({
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
    _t(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], W = {};
  for (let T = 0; T < A.length; T += 1)
    W = q(W, A[T]);
  return {
    c() {
      e = F("label"), I && I.c(), t = U(), m && m.c(), l = U(), V(i.$$.fragment), r = U(), E && E.c(), a = U(), o.c(), u = U(), V(c.$$.fragment), f = U(), M && M.c(), se(e, W);
    },
    m(T, X) {
      P(T, e, X), I && I.m(e, null), G(e, t), m && m.m(e, null), G(e, l), O(i, e, null), G(e, r), E && E.m(e, null), G(e, a), R[s].m(e, null), G(e, u), O(c, e, null), G(e, f), M && M.m(e, null), n[78](e), _ = !0, k || (H = [
        te(p = Rt.call(null, e, {
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
        te(b = Le.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        te(
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
    p(T, X) {
      !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" ? I ? (I.p(T, X), X[0] & /*textarea, variant*/
      49152 && C(I, 1)) : (I = Vn(T), I.c(), C(I, 1), I.m(e, t)) : I && (ie(), y(I, 1, 1, () => {
        I = null;
      }), re()), /*textarea*/
      T[14] || /*variant*/
      T[15] === "outlined" ? m ? (m.p(T, X), X[0] & /*textarea, variant*/
      49152 && C(m, 1)) : (m = qn(T), m.c(), C(m, 1), m.m(e, l)) : m && (ie(), y(m, 1, 1, () => {
        m = null;
      }), re());
      const Se = {};
      X[2] & /*$$scope*/
      33554432 && (Se.$$scope = { dirty: X, ctx: T }), i.$set(Se), E && E.p && (!_ || X[2] & /*$$scope*/
      33554432) && ue(
        E,
        L,
        T,
        /*$$scope*/
        T[87],
        _ ? oe(
          L,
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
      let ke = s;
      s = B(T), s === ke ? R[s].p(T, X) : (ie(), y(R[ke], 1, 1, () => {
        R[ke] = null;
      }), re(), o = R[s], o ? o.p(T, X) : (o = R[s] = h[s](T), o.c()), C(o, 1), o.m(e, u));
      const Ce = {};
      X[2] & /*$$scope*/
      33554432 && (Ce.$$scope = { dirty: X, ctx: T }), c.$set(Ce), !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" && /*ripple*/
      T[11] ? M ? (M.p(T, X), X[0] & /*textarea, variant, ripple*/
      51200 && C(M, 1)) : (M = Qn(T), M.c(), C(M, 1), M.m(e, null)) : M && (ie(), y(M, 1, 1, () => {
        M = null;
      }), re()), se(e, W = fe(A, [
        (!_ || X[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | X[1] & /*$$slots*/
        65536 && d !== (d = ne({
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
        ).map($n).concat([
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
        32768 && _t(
          /*$$restProps*/
          T[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), p && pe(p.update) && X[0] & /*textarea, variant*/
      49152 | X[1] & /*inputElement*/
      4 && p.update.call(null, {
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
      }), b && pe(b.update) && X[0] & /*use*/
      256 && b.update.call(
        null,
        /*use*/
        T[8]
      );
    },
    i(T) {
      _ || (C(I), C(m), C(i.$$.fragment, T), C(E, T), C(o), C(c.$$.fragment, T), C(M), _ = !0);
    },
    o(T) {
      y(I), y(m), y(i.$$.fragment, T), y(E, T), y(o), y(c.$$.fragment, T), y(M), _ = !1;
    },
    d(T) {
      T && D(e), I && I.d(), m && m.d(), N(i), E && E.d(T), R[s].d(), N(c), M && M.d(), n[78](null), k = !1, he(H);
    }
  };
}
function ws(n) {
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
          ms
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
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ss(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ae(
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
        Pn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Vn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && zn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && jn(n);
  return {
    c() {
      i && i.c(), e = U(), r && r.c(), t = ve();
    },
    m(a, s) {
      i && i.m(a, s), P(a, e, s), r && r.m(a, s), P(a, t, s), l = !0;
    },
    p(a, s) {
      /*variant*/
      a[15] === "filled" ? i || (i = zn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? r ? (r.p(a, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && C(r, 1)) : (r = jn(a), r.c(), C(r, 1), r.m(t.parentNode, t)) : r && (ie(), y(r, 1, 1, () => {
        r = null;
      }), re());
    },
    i(a) {
      l || (C(r), l = !0);
    },
    o(a) {
      y(r), l = !1;
    },
    d(a) {
      a && (D(e), D(t)), i && i.d(a), r && r.d(a);
    }
  };
}
function zn(n) {
  let e;
  return {
    c() {
      e = F("span"), v(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
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
    Ge(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Rs] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new ti({ props: i }), n[57](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, a) {
      O(e, r, a), t = !0;
    },
    p(r, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? fe(l, [
        a[0] & /*focused, value*/
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
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          r[13]
        ) },
        l[2],
        a[1] & /*$$restProps*/
        32768 && we(Ge(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: r }), e.$set(s);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      y(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), N(e, r);
    }
  };
}
function Rs(n) {
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
    Nn
  );
  return {
    c() {
      t = le(e), r && r.c();
    },
    m(a, s) {
      P(a, t, s), r && r.m(a, s), l = !0;
    },
    p(a, s) {
      (!l || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && _e(t, e), r && r.p && (!l || s[2] & /*$$scope*/
      33554432) && ue(
        r,
        i,
        a,
        /*$$scope*/
        a[87],
        l ? oe(
          i,
          /*$$scope*/
          a[87],
          s,
          ys
        ) : ce(
          /*$$scope*/
          a[87]
        ),
        Nn
      );
    },
    i(a) {
      l || (C(r, a), l = !0);
    },
    o(a) {
      y(r, a), l = !1;
    },
    d(a) {
      a && D(t), r && r.d(a);
    }
  };
}
function qn(n) {
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
    Ge(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [Es] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new Qr({ props: i }), n[59](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, a) {
      O(e, r, a), t = !0;
    },
    p(r, a) {
      const s = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? fe(l, [
        a[0] & /*noLabel, label*/
        196608 | a[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            r[16] || /*label*/
            r[17] == null && !/*$$slots*/
            r[47].label
          )
        },
        a[1] & /*$$restProps*/
        32768 && we(Ge(
          /*$$restProps*/
          r[46],
          "outline$"
        ))
      ]) : {};
      a[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | a[1] & /*$$restProps, $$slots*/
      98304 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: r }), e.$set(s);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      y(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), N(e, r);
    }
  };
}
function Xn(n) {
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
    Ge(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Ls] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new ti({ props: i }), n[58](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, a) {
      O(e, r, a), t = !0;
    },
    p(r, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? fe(l, [
        a[0] & /*focused, value*/
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
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          r[13]
        ) },
        l[2],
        a[1] & /*$$restProps*/
        32768 && we(Ge(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: r }), e.$set(s);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      y(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), N(e, r);
    }
  };
}
function Ls(n) {
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
    On
  );
  return {
    c() {
      t = le(e), r && r.c();
    },
    m(a, s) {
      P(a, t, s), r && r.m(a, s), l = !0;
    },
    p(a, s) {
      (!l || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && _e(t, e), r && r.p && (!l || s[2] & /*$$scope*/
      33554432) && ue(
        r,
        i,
        a,
        /*$$scope*/
        a[87],
        l ? oe(
          i,
          /*$$scope*/
          a[87],
          s,
          Is
        ) : ce(
          /*$$scope*/
          a[87]
        ),
        On
      );
    },
    i(a) {
      l || (C(r, a), l = !0);
    },
    o(a) {
      y(r, a), l = !1;
    },
    d(a) {
      a && D(t), r && r.d(a);
    }
  };
}
function Es(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Xn(n);
  return {
    c() {
      l && l.c(), e = ve();
    },
    m(i, r) {
      l && l.m(i, r), P(i, e, r), t = !0;
    },
    p(i, r) {
      !/*noLabel*/
      i[16] && /*label*/
      (i[17] != null || /*$$slots*/
      i[47].label) ? l ? (l.p(i, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && C(l, 1)) : (l = Xn(i), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (ie(), y(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(i) {
      t || (C(l), t = !0);
    },
    o(i) {
      y(l), t = !1;
    },
    d(i) {
      i && D(e), l && l.d(i);
    }
  };
}
function Hs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = ae(
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
          Cs
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Un
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Gs(n) {
  let e, t, l, i, r, a, s, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = ae(
    f,
    n,
    /*$$scope*/
    n[87],
    Wn
  );
  let g = (
    /*prefix*/
    n[20] != null && Yn(n)
  );
  const p = [
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
    Ge(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function b(h) {
    n[69](h);
  }
  function _(h) {
    n[70](h);
  }
  function k(h) {
    n[71](h);
  }
  function H(h) {
    n[72](h);
  }
  let I = {};
  for (let h = 0; h < p.length; h += 1)
    I = q(I, p[h]);
  /*value*/
  n[0] !== void 0 && (I.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (I.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (I.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (I.invalid = /*invalid*/
  n[1]), l = new as({ props: I }), n[68](l), ee.push(() => Xe(l, "value", b)), ee.push(() => Xe(l, "files", _)), ee.push(() => Xe(l, "dirty", k)), ee.push(() => Xe(l, "invalid", H)), l.$on(
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
  let m = (
    /*suffix*/
    n[21] != null && Jn(n)
  );
  const L = (
    /*#slots*/
    n[56].suffix
  ), E = ae(
    L,
    n,
    /*$$scope*/
    n[87],
    Fn
  );
  return {
    c() {
      d && d.c(), e = U(), g && g.c(), t = U(), V(l.$$.fragment), o = U(), m && m.c(), u = U(), E && E.c();
    },
    m(h, R) {
      d && d.m(h, R), P(h, e, R), g && g.m(h, R), P(h, t, R), O(l, h, R), P(h, o, R), m && m.m(h, R), P(h, u, R), E && E.m(h, R), c = !0;
    },
    p(h, R) {
      d && d.p && (!c || R[2] & /*$$scope*/
      33554432) && ue(
        d,
        f,
        h,
        /*$$scope*/
        h[87],
        c ? oe(
          f,
          /*$$scope*/
          h[87],
          R,
          _s
        ) : ce(
          /*$$scope*/
          h[87]
        ),
        Wn
      ), /*prefix*/
      h[20] != null ? g ? (g.p(h, R), R[0] & /*prefix*/
      1048576 && C(g, 1)) : (g = Yn(h), g.c(), C(g, 1), g.m(t.parentNode, t)) : g && (ie(), y(g, 1, 1, () => {
        g = null;
      }), re());
      const B = R[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | R[1] & /*$$restProps*/
      32768 ? fe(p, [
        R[0] & /*type*/
        262144 && { type: (
          /*type*/
          h[18]
        ) },
        R[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          h[12]
        ) },
        R[0] & /*required*/
        8192 && { required: (
          /*required*/
          h[13]
        ) },
        R[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          h[19]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          h[27]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          h[27]
        ) },
        R[0] & /*noLabel, label*/
        196608 && we(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        R[1] & /*$$restProps*/
        32768 && we(Ge(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !i && R[0] & /*value*/
      1 && (i = !0, B.value = /*value*/
      h[0], xe(() => i = !1)), !r && R[0] & /*files*/
      8 && (r = !0, B.files = /*files*/
      h[3], xe(() => r = !1)), !a && R[0] & /*dirty*/
      16 && (a = !0, B.dirty = /*dirty*/
      h[4], xe(() => a = !1)), !s && R[0] & /*invalid*/
      2 && (s = !0, B.invalid = /*invalid*/
      h[1], xe(() => s = !1)), l.$set(B), /*suffix*/
      h[21] != null ? m ? (m.p(h, R), R[0] & /*suffix*/
      2097152 && C(m, 1)) : (m = Jn(h), m.c(), C(m, 1), m.m(u.parentNode, u)) : m && (ie(), y(m, 1, 1, () => {
        m = null;
      }), re()), E && E.p && (!c || R[2] & /*$$scope*/
      33554432) && ue(
        E,
        L,
        h,
        /*$$scope*/
        h[87],
        c ? oe(
          L,
          /*$$scope*/
          h[87],
          R,
          bs
        ) : ce(
          /*$$scope*/
          h[87]
        ),
        Fn
      );
    },
    i(h) {
      c || (C(d, h), C(g), C(l.$$.fragment, h), C(m), C(E, h), c = !0);
    },
    o(h) {
      y(d, h), y(g), y(l.$$.fragment, h), y(m), y(E, h), c = !1;
    },
    d(h) {
      h && (D(e), D(t), D(o), D(u)), d && d.d(h), g && g.d(h), n[68](null), N(l, h), m && m.d(h), E && E.d(h);
    }
  };
}
function Ds(n) {
  let e, t, l, i, r, a, s, o;
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
    Ge(
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
    g = q(g, u[_]);
  /*value*/
  n[0] !== void 0 && (g.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (g.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (g.invalid = /*invalid*/
  n[1]), t = new cs({ props: g }), n[60](t), ee.push(() => Xe(t, "value", c)), ee.push(() => Xe(t, "dirty", f)), ee.push(() => Xe(t, "invalid", d)), t.$on(
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
  const p = (
    /*#slots*/
    n[56].internalCounter
  ), b = ae(
    p,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  return {
    c() {
      e = F("span"), V(t.$$.fragment), a = U(), b && b.c(), v(e, "class", s = ne({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(_, k) {
      P(_, e, k), O(t, e, null), G(e, a), b && b.m(e, null), o = !0;
    },
    p(_, k) {
      const H = k[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | k[1] & /*$$restProps*/
      32768 ? fe(u, [
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
        32768 && we(Ge(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !l && k[0] & /*value*/
      1 && (l = !0, H.value = /*value*/
      _[0], xe(() => l = !1)), !i && k[0] & /*dirty*/
      16 && (i = !0, H.dirty = /*dirty*/
      _[4], xe(() => i = !1)), !r && k[0] & /*invalid*/
      2 && (r = !0, H.invalid = /*invalid*/
      _[1], xe(() => r = !1)), t.$set(H), b && b.p && (!o || k[2] & /*$$scope*/
      33554432) && ue(
        b,
        p,
        _,
        /*$$scope*/
        _[87],
        o ? oe(
          p,
          /*$$scope*/
          _[87],
          k,
          vs
        ) : ce(
          /*$$scope*/
          _[87]
        ),
        Bn
      ), (!o || k[1] & /*$$restProps*/
      32768 && s !== (s = ne({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        _[46]) || /*$$restProps*/
        _[46].input$resizable
      }))) && v(e, "class", s);
    },
    i(_) {
      o || (C(t.$$.fragment, _), C(b, _), o = !0);
    },
    o(_) {
      y(t.$$.fragment, _), y(b, _), o = !1;
    },
    d(_) {
      _ && D(e), n[60](null), N(t), b && b.d(_);
    }
  };
}
function Yn(n) {
  let e, t;
  return e = new ns({
    props: {
      $$slots: { default: [Ps] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Ps(n) {
  let e;
  return {
    c() {
      e = le(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      P(t, e, l);
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
      t && D(e);
    }
  };
}
function Jn(n) {
  let e, t;
  return e = new ls({
    props: {
      $$slots: { default: [Ms] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Ms(n) {
  let e;
  return {
    c() {
      e = le(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      P(t, e, l);
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
      t && D(e);
    }
  };
}
function Ts(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Zn
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
          ps
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Zn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Qn(n) {
  let e, t;
  const l = [Ge(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new Xr({ props: i }), n[77](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, a) {
      O(e, r, a), t = !0;
    },
    p(r, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? fe(l, [we(Ge(
        /*$$restProps*/
        r[46],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      y(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), N(e, r);
    }
  };
}
function Kn(n) {
  let e, t;
  const l = [Ge(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [Zs] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new ts({ props: i }), e.$on(
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
    m(r, a) {
      O(e, r, a), t = !0;
    },
    p(r, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? fe(l, [we(Ge(
        /*$$restProps*/
        r[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: r }), e.$set(s);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      y(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Zs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Gn
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
        Gn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Fs(n) {
  let e, t, l, i, r;
  const a = [ks, As], s = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = s[e] = a[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Kn(n)
  );
  return {
    c() {
      t.c(), l = U(), u && u.c(), i = ve();
    },
    m(c, f) {
      s[e].m(c, f), P(c, l, f), u && u.m(c, f), P(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Kn(c), u.c(), C(u, 1), u.m(i.parentNode, i)) : u && (ie(), y(u, 1, 1, () => {
        u = null;
      }), re());
    },
    i(c) {
      r || (C(t), C(u), r = !0);
    },
    o(c) {
      y(t), y(u), r = !1;
    },
    d(c) {
      c && (D(l), D(i)), s[e].d(c), u && u.d(c);
    }
  };
}
const $n = ([n, e]) => `${n}: ${e};`, xn = ([n, e]) => `${n}: ${e};`;
function Ws(n, e, t) {
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
  let r = ge(e, i), { $$slots: a = {}, $$scope: s } = e;
  const o = on(a), { applyPassive: u } = $l, c = Be(Ee());
  let f = () => {
  };
  function d(S) {
    return S === f;
  }
  let { use: g = [] } = e, { class: p = "" } = e, { style: b = "" } = e, { ripple: _ = !0 } = e, { disabled: k = !1 } = e, { required: H = !1 } = e, { textarea: I = !1 } = e, { variant: m = I ? "outlined" : "standard" } = e, { noLabel: L = !1 } = e, { label: E = void 0 } = e, { type: h = "text" } = e, { value: R = r.input$emptyValueUndefined ? void 0 : f } = e, { files: B = f } = e;
  const M = !d(R) || !d(B);
  d(R) && (R = void 0), d(B) && (B = null);
  let { invalid: A = f } = e, { updateInvalid: W = d(A) } = e;
  d(A) && (A = !1);
  let { dirty: T = !1 } = e, { prefix: X = void 0 } = e, { suffix: Se = void 0 } = e, { validateOnValueChange: ke = W } = e, { useNativeValidation: Ce = W } = e, { withLeadingIcon: j = f } = e, { withTrailingIcon: w = f } = e, { input: z = void 0 } = e, { floatingLabel: me = void 0 } = e, { lineRipple: be = void 0 } = e, { notchedOutline: De = void 0 } = e, Te, de, Ze = {}, je = {}, Je, Qe = !1, Ht = Ue("SMUI:addLayoutListener"), yt, At, Ve = new Promise((S) => At = S), lt, it, ft, rt, kt = R;
  Ht && (yt = Ht(cn)), Oe(() => {
    if (t(54, de = new Ur(
      {
        // getRootAdapterMethods_
        addClass: Dt,
        removeClass: Pt,
        hasClass: wt,
        registerTextFieldInteractionHandler: (S, Re) => Mt().addEventListener(S, Re),
        deregisterTextFieldInteractionHandler: (S, Re) => Mt().removeEventListener(S, Re),
        registerValidationAttributeChangeHandler: (S) => {
          const Re = (qt) => qt.map((Xt) => Xt.attributeName).filter((Xt) => Xt), fn = new MutationObserver((qt) => {
            Ce && S(Re(qt));
          }), Bi = { attributes: !0 };
          return z && fn.observe(z.getElement(), Bi), fn;
        },
        deregisterValidationAttributeChangeHandler: (S) => {
          S.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var S;
          return (S = z == null ? void 0 : z.getElement()) !== null && S !== void 0 ? S : null;
        },
        setInputAttr: (S, Re) => {
          z == null || z.addAttr(S, Re);
        },
        removeInputAttr: (S) => {
          z == null || z.removeAttr(S);
        },
        isFocused: () => document.activeElement === (z == null ? void 0 : z.getElement()),
        registerInputInteractionHandler: (S, Re) => {
          z == null || z.getElement().addEventListener(S, Re, u());
        },
        deregisterInputInteractionHandler: (S, Re) => {
          z == null || z.getElement().removeEventListener(S, Re, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (S) => me && me.float(S),
        getLabelWidth: () => me ? me.getWidth() : 0,
        hasLabel: () => !!me,
        shakeLabel: (S) => me && me.shake(S),
        setLabelRequired: (S) => me && me.setRequired(S),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => be && be.activate(),
        deactivateLineRipple: () => be && be.deactivate(),
        setLineRippleTransformOrigin: (S) => be && be.setRippleCenter(S),
        // getOutlineAdapterMethods_
        closeOutline: () => De && De.closeNotch(),
        hasOutline: () => !!De,
        notchOutline: (S) => De && De.notch(S)
      },
      {
        get helperText() {
          return ft;
        },
        get characterCounter() {
          return rt;
        },
        get leadingIcon() {
          return lt;
        },
        get trailingIcon() {
          return it;
        }
      }
    )), M) {
      if (z == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      de.init();
    } else
      Ki().then(() => {
        if (z == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        de.init();
      });
    return At(), () => {
      de.destroy();
    };
  }), ct(() => {
    yt && yt();
  });
  function jt(S) {
    t(29, lt = S.detail);
  }
  function Z(S) {
    t(30, it = S.detail);
  }
  function J(S) {
    t(32, rt = S.detail);
  }
  function He(S) {
    t(27, Je = S.detail);
  }
  function Gt(S) {
    t(31, ft = S.detail);
  }
  function wt(S) {
    var Re;
    return S in Ze ? (Re = Ze[S]) !== null && Re !== void 0 ? Re : null : Mt().classList.contains(S);
  }
  function Dt(S) {
    Ze[S] || t(25, Ze[S] = !0, Ze);
  }
  function Pt(S) {
    (!(S in Ze) || Ze[S]) && t(25, Ze[S] = !1, Ze);
  }
  function si(S, Re) {
    je[S] != Re && (Re === "" || Re == null ? (delete je[S], t(26, je)) : t(26, je[S] = Re, je));
  }
  function ai() {
    z == null || z.focus();
  }
  function oi() {
    z == null || z.blur();
  }
  function cn() {
    if (de) {
      const S = de.shouldFloat;
      de.notchOutline(S);
    }
  }
  function Mt() {
    return Te;
  }
  function ui(S) {
    ee[S ? "unshift" : "push"](() => {
      me = S, t(5, me);
    });
  }
  function ci(S) {
    ee[S ? "unshift" : "push"](() => {
      me = S, t(5, me);
    });
  }
  function fi(S) {
    ee[S ? "unshift" : "push"](() => {
      De = S, t(7, De);
    });
  }
  function di(S) {
    ee[S ? "unshift" : "push"](() => {
      z = S, t(2, z);
    });
  }
  function gi(S) {
    R = S, t(0, R);
  }
  function mi(S) {
    T = S, t(4, T);
  }
  function hi(S) {
    A = S, t(1, A), t(54, de), t(19, W);
  }
  const pi = () => t(28, Qe = !1), bi = () => t(28, Qe = !0), _i = (S) => Ie(Te, "blur", S), vi = (S) => Ie(Te, "focus", S);
  function Ci(S) {
    ee[S ? "unshift" : "push"](() => {
      z = S, t(2, z);
    });
  }
  function Ii(S) {
    R = S, t(0, R);
  }
  function yi(S) {
    B = S, t(3, B);
  }
  function Ai(S) {
    T = S, t(4, T);
  }
  function ki(S) {
    A = S, t(1, A), t(54, de), t(19, W);
  }
  const wi = () => t(28, Qe = !1), Si = () => t(28, Qe = !0), Ri = (S) => Ie(Te, "blur", S), Li = (S) => Ie(Te, "focus", S);
  function Ei(S) {
    ee[S ? "unshift" : "push"](() => {
      be = S, t(6, be);
    });
  }
  function Hi(S) {
    ee[S ? "unshift" : "push"](() => {
      Te = S, t(24, Te);
    });
  }
  const Gi = () => t(29, lt = void 0), Di = () => t(30, it = void 0), Pi = () => t(32, rt = void 0);
  function Mi(S) {
    ee[S ? "unshift" : "push"](() => {
      Te = S, t(24, Te);
    });
  }
  const Ti = () => t(29, lt = void 0), Zi = () => t(30, it = void 0), Fi = () => {
    t(27, Je = void 0), t(31, ft = void 0);
  }, Wi = () => t(32, rt = void 0);
  return n.$$set = (S) => {
    e = q(q({}, e), Fe(S)), t(46, r = ge(e, i)), "use" in S && t(8, g = S.use), "class" in S && t(9, p = S.class), "style" in S && t(10, b = S.style), "ripple" in S && t(11, _ = S.ripple), "disabled" in S && t(12, k = S.disabled), "required" in S && t(13, H = S.required), "textarea" in S && t(14, I = S.textarea), "variant" in S && t(15, m = S.variant), "noLabel" in S && t(16, L = S.noLabel), "label" in S && t(17, E = S.label), "type" in S && t(18, h = S.type), "value" in S && t(0, R = S.value), "files" in S && t(3, B = S.files), "invalid" in S && t(1, A = S.invalid), "updateInvalid" in S && t(19, W = S.updateInvalid), "dirty" in S && t(4, T = S.dirty), "prefix" in S && t(20, X = S.prefix), "suffix" in S && t(21, Se = S.suffix), "validateOnValueChange" in S && t(48, ke = S.validateOnValueChange), "useNativeValidation" in S && t(49, Ce = S.useNativeValidation), "withLeadingIcon" in S && t(22, j = S.withLeadingIcon), "withTrailingIcon" in S && t(23, w = S.withTrailingIcon), "input" in S && t(2, z = S.input), "floatingLabel" in S && t(5, me = S.floatingLabel), "lineRipple" in S && t(6, be = S.lineRipple), "notchedOutline" in S && t(7, De = S.notchedOutline), "$$scope" in S && t(87, s = S.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = z && z.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && de && de.isValid() !== !A && (W ? t(1, A = !de.isValid()) : de.setValid(!A)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && de && de.getValidateOnValueChange() !== ke && de.setValidateOnValueChange(d(ke) ? !1 : ke), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && de && de.setUseNativeValidation(d(Ce) ? !0 : Ce), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && de && de.setDisabled(k), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && de && M && kt !== R) {
      t(55, kt = R);
      const S = `${R}`;
      de.getValue() !== S && de.setValue(S);
    }
  }, [
    R,
    A,
    z,
    B,
    T,
    me,
    be,
    De,
    g,
    p,
    b,
    _,
    k,
    H,
    I,
    m,
    L,
    E,
    h,
    W,
    X,
    Se,
    j,
    w,
    Te,
    Ze,
    je,
    Je,
    Qe,
    lt,
    it,
    ft,
    rt,
    l,
    c,
    d,
    M,
    Ve,
    jt,
    Z,
    J,
    He,
    Gt,
    Dt,
    Pt,
    si,
    r,
    o,
    ke,
    Ce,
    ai,
    oi,
    cn,
    Mt,
    de,
    kt,
    a,
    ui,
    ci,
    fi,
    di,
    gi,
    mi,
    hi,
    pi,
    bi,
    _i,
    vi,
    Ci,
    Ii,
    yi,
    Ai,
    ki,
    wi,
    Si,
    Ri,
    Li,
    Ei,
    Hi,
    Gi,
    Di,
    Pi,
    Mi,
    Ti,
    Zi,
    Fi,
    Wi,
    s
  ];
}
class Bs extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Ws,
      Fs,
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
Me({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Me({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Me({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Us(n) {
  let e, t, l, i, r, a;
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
  let u = [
    {
      class: t = ne({
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
    c = q(c, u[f]);
  return {
    c() {
      e = F("span"), o && o.c(), se(e, c);
    },
    m(f, d) {
      P(f, e, d), o && o.m(e, null), n[9](e), i = !0, r || (a = [
        te(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      128) && ue(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        i ? oe(
          s,
          /*$$scope*/
          f[7],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[7]
        ),
        null
      ), se(e, c = fe(u, [
        (!i || d & /*className*/
        2 && t !== (t = ne({
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
      i || (C(o, f), i = !0);
    },
    o(f) {
      y(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[9](null), r = !1, he(a);
    }
  };
}
function Os(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: a } = e;
  const s = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = Ue("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function g(p) {
    ee[p ? "unshift" : "push"](() => {
      c = p, t(2, c);
    });
  }
  return n.$$set = (p) => {
    e = q(q({}, e), Fe(p)), t(5, i = ge(e, l)), "use" in p && t(0, o = p.use), "class" in p && t(1, u = p.class), "$$scope" in p && t(7, a = p.$$scope);
  }, [
    o,
    u,
    c,
    s,
    f,
    i,
    d,
    a,
    r,
    g
  ];
}
class Ns extends x {
  constructor(e) {
    super(), $(this, e, Os, Us, Q, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Me({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Me({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Me({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Me({
  class: "mdc-menu__selection-group-icon",
  component: Ns
});
Me({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Me({
  class: "mdc-dialog__title",
  tag: "h2"
});
Me({
  class: "mdc-dialog__content",
  tag: "div"
});
Me({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
const Vt = ut({
  component: null,
  props: {},
  isOpen: !1
});
function el(n) {
  let e, t, l, i;
  const r = [
    /*dialogData*/
    n[0].props
  ];
  function a(u) {
    n[2](u);
  }
  var s = (
    /*dialogData*/
    n[0].component
  );
  function o(u, c) {
    let f = {};
    for (let d = 0; d < r.length; d += 1)
      f = q(f, r[d]);
    return c !== void 0 && c & /*dialogData*/
    1 && (f = q(f, fe(r, [we(
      /*dialogData*/
      u[0].props
    )]))), /*isOpen*/
    u[1] !== void 0 && (f.open = /*isOpen*/
    u[1]), { props: f };
  }
  return s && (e = bt(s, o(n)), ee.push(() => Xe(e, "open", a))), {
    c() {
      e && V(e.$$.fragment), l = ve();
    },
    m(u, c) {
      e && O(e, u, c), P(u, l, c), i = !0;
    },
    p(u, c) {
      if (c & /*dialogData*/
      1 && s !== (s = /*dialogData*/
      u[0].component)) {
        if (e) {
          ie();
          const f = e;
          y(f.$$.fragment, 1, 0, () => {
            N(f, 1);
          }), re();
        }
        s ? (e = bt(s, o(u, c)), ee.push(() => Xe(e, "open", a)), V(e.$$.fragment), C(e.$$.fragment, 1), O(e, l.parentNode, l)) : e = null;
      } else if (s) {
        const f = c & /*dialogData*/
        1 ? fe(r, [we(
          /*dialogData*/
          u[0].props
        )]) : {};
        !t && c & /*isOpen*/
        2 && (t = !0, f.open = /*isOpen*/
        u[1], xe(() => t = !1)), e.$set(f);
      }
    },
    i(u) {
      i || (e && C(e.$$.fragment, u), i = !0);
    },
    o(u) {
      e && y(e.$$.fragment, u), i = !1;
    },
    d(u) {
      u && D(l), e && N(e, u);
    }
  };
}
function Vs(n) {
  let e, t, l = (
    /*dialogData*/
    n[0].isOpen && /*dialogData*/
    n[0].component && el(n)
  );
  return {
    c() {
      l && l.c(), e = ve();
    },
    m(i, r) {
      l && l.m(i, r), P(i, e, r), t = !0;
    },
    p(i, [r]) {
      /*dialogData*/
      i[0].isOpen && /*dialogData*/
      i[0].component ? l ? (l.p(i, r), r & /*dialogData*/
      1 && C(l, 1)) : (l = el(i), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (ie(), y(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(i) {
      t || (C(l), t = !0);
    },
    o(i) {
      y(l), t = !1;
    },
    d(i) {
      i && D(e), l && l.d(i);
    }
  };
}
function zs(n, e, t) {
  let l, i = !1;
  const r = Vt.subscribe((s) => {
    t(0, l = s), t(1, i = s.isOpen);
  });
  Oe(() => () => r());
  function a(s) {
    i = s, t(1, i);
  }
  return [l, i, a];
}
class js extends x {
  constructor(e) {
    super(), $(this, e, zs, Vs, Q, {});
  }
}
function qs(n, e = {}) {
  return new Promise((t) => {
    Vt.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function Xs(n, e) {
  Vt.update((t) => {
    var l;
    return (l = t.resolve) == null || l.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function Ys(n) {
  Vt.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
Me({
  class: "smui-paper__content",
  tag: "div"
});
Me({
  class: "smui-paper__title",
  tag: "h5"
});
Me({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Js(n) {
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
      e = F("span"), i && i.c(), v(e, "class", "oscd-icon");
    },
    m(r, a) {
      P(r, e, a), i && i.m(e, null), t = !0;
    },
    p(r, [a]) {
      i && i.p && (!t || a & /*$$scope*/
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
          a,
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
      y(i, r), t = !1;
    },
    d(r) {
      r && D(e), i && i.d(r);
    }
  };
}
function Qs(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class nt extends x {
  constructor(e) {
    super(), $(this, e, Qs, Js, Q, {});
  }
}
function Ks(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M200-440v-80h560v80H200Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
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
      l && D(e);
    }
  };
}
function $s(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [Ks] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function xs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ea extends x {
  constructor(e) {
    super(), $(this, e, xs, $s, Q, { svgStyles: 0 });
  }
}
function ta(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
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
      l && D(e);
    }
  };
}
function na(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [ta] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function la(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ia extends x {
  constructor(e) {
    super(), $(this, e, la, na, Q, { svgStyles: 0 });
  }
}
function ra(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      P(l, e, i), G(e, t);
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
      l && D(e);
    }
  };
}
function sa(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [ra] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function aa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class oa extends x {
  constructor(e) {
    super(), $(this, e, aa, sa, Q, { svgStyles: 0 });
  }
}
function ua(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24"), v(e, "height", "24"), v(e, "fill", "#004552");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
    },
    p: K,
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
class ca extends x {
  constructor(e) {
    super(), $(this, e, null, ua, Q, {});
  }
}
function fa(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#004552");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
    },
    p: K,
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
class da extends x {
  constructor(e) {
    super(), $(this, e, null, fa, Q, {});
  }
}
function ga(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(
        e,
        "height",
        /*size*/
        n[0]
      ), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "width",
        /*size*/
        n[0]
      ), v(
        e,
        "fill",
        /*fill*/
        n[1]
      );
    },
    m(l, i) {
      P(l, e, i), G(e, t);
    },
    p(l, [i]) {
      i & /*size*/
      1 && v(
        e,
        "height",
        /*size*/
        l[0]
      ), i & /*size*/
      1 && v(
        e,
        "width",
        /*size*/
        l[0]
      ), i & /*fill*/
      2 && v(
        e,
        "fill",
        /*fill*/
        l[1]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function ma(n, e, t) {
  let { size: l = "24px" } = e, { fill: i = "#004552" } = e;
  return n.$$set = (r) => {
    "size" in r && t(0, l = r.size), "fill" in r && t(1, i = r.fill);
  }, [l, i];
}
class ha extends x {
  constructor(e) {
    super(), $(this, e, ma, ga, Q, { size: 0, fill: 1 });
  }
}
function pa(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      P(l, e, i), G(e, t);
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
      l && D(e);
    }
  };
}
function ba(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [pa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function _a(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class va extends x {
  constructor(e) {
    super(), $(this, e, _a, ba, Q, { svgStyles: 0 });
  }
}
function Ca(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      P(l, e, i), G(e, t);
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
      l && D(e);
    }
  };
}
function Ia(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [Ca] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function ya(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Aa extends x {
  constructor(e) {
    super(), $(this, e, ya, Ia, Q, { svgStyles: 0 });
  }
}
function ka(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
    },
    p: K,
    d(l) {
      l && D(e);
    }
  };
}
function wa(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [ka] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Sa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ra extends x {
  constructor(e) {
    super(), $(this, e, Sa, wa, Q, { svgStyles: 0 });
  }
}
function La(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
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
      l && D(e);
    }
  };
}
function Ea(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [La] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Ha(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ga extends x {
  constructor(e) {
    super(), $(this, e, Ha, Ea, Q, { svgStyles: 0 });
  }
}
function Da(n) {
  let e, t;
  return {
    c() {
      e = Ae("svg"), t = Ae("path"), v(t, "d", "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
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
      l && D(e);
    }
  };
}
function Pa(n) {
  let e, t;
  return e = new nt({
    props: {
      $$slots: { default: [Da] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Ma(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ta extends x {
  constructor(e) {
    super(), $(this, e, Ma, Pa, Q, { svgStyles: 0 });
  }
}
function Za(n) {
  let e, t, l, i, r;
  const a = (
    /*#slots*/
    n[14].default
  ), s = ae(
    a,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      e = F("span"), s && s.c(), v(e, "tabindex", "0"), v(e, "aria-describedby", t = /*content*/
      n[0] ? (
        /*id*/
        n[2]
      ) : void 0);
    },
    m(o, u) {
      P(o, e, u), s && s.m(e, null), n[15](e), l = !0, i || (r = [
        Y(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[3]
        ),
        Y(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[4]
        )
      ], i = !0);
    },
    p(o, [u]) {
      s && s.p && (!l || u & /*$$scope*/
      8192) && ue(
        s,
        a,
        o,
        /*$$scope*/
        o[13],
        l ? oe(
          a,
          /*$$scope*/
          o[13],
          u,
          null
        ) : ce(
          /*$$scope*/
          o[13]
        ),
        null
      ), (!l || u & /*content*/
      1 && t !== (t = /*content*/
      o[0] ? (
        /*id*/
        o[2]
      ) : void 0)) && v(e, "aria-describedby", t);
    },
    i(o) {
      l || (C(s, o), l = !0);
    },
    o(o) {
      y(s, o), l = !1;
    },
    d(o) {
      o && D(e), s && s.d(o), n[15](null), i = !1, he(r);
    }
  };
}
function Fa(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { side: a = "top" } = e, { hoverDelay: s = 0 } = e, { transitionDuration: o = 80 } = e;
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let c = null, f = null, d = null, g = null, p = !1, b = null;
  function _() {
    r && (s > 0 ? t(12, b = setTimeout(() => t(11, p = !0), s)) : t(11, p = !0));
  }
  function k() {
    b && clearTimeout(b), t(11, p = !1);
  }
  function H() {
    if (!f || !g || !c)
      return;
    const m = c.getBoundingClientRect(), L = g.getBoundingClientRect();
    let E = 0, h = 0;
    const R = 8;
    switch (a) {
      case "top":
        E = m.top - L.height - R, h = m.left + m.width / 2 - L.width / 2;
        break;
      case "bottom":
        E = m.bottom + R, h = m.left + m.width / 2 - L.width / 2;
        break;
      case "left":
        E = m.top + m.height / 2 - L.height / 2, h = m.left - L.width - R;
        break;
      case "right":
        E = m.top + m.height / 2 - L.height / 2, h = m.right + R;
        break;
    }
    t(8, f.style.top = `${E + window.scrollY}px`, f), t(8, f.style.left = `${h + window.scrollX}px`, f);
  }
  function I(m) {
    ee[m ? "unshift" : "push"](() => {
      c = m, t(1, c);
    });
  }
  return n.$$set = (m) => {
    "content" in m && t(0, r = m.content), "side" in m && t(5, a = m.side), "hoverDelay" in m && t(6, s = m.hoverDelay), "transitionDuration" in m && t(7, o = m.transitionDuration), "$$scope" in m && t(13, i = m.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*show, content, tooltipEl, transitionDuration, shadow, side, bubbleEl, hoverTimeout*/
    8097 && p && r) {
      if (!f) {
        t(8, f = document.createElement("div")), t(8, f.style.position = "absolute", f), t(8, f.style.zIndex = "9999", f), t(8, f.style.pointerEvents = "none", f), t(8, f.style.opacity = "0", f), t(8, f.style.transition = `opacity ${o}ms ease`, f), t(8, f.id = u, f), f.setAttribute("role", "tooltip"), document.body.appendChild(f), t(9, d = f.attachShadow({ mode: "open" }));
        const m = document.createElement("style");
        m.textContent = `
        .bubble {
          --pad-y: 6px;
          --pad-x: 10px;
          --radius: 4px;
          background: #000;
          color: #fff;
          font-size: 0.85rem;
          line-height: 1.2;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0,0,0,.25);
          pointer-events: none;
          position: relative;
          transition: none;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        }
        .bubble::after {
          content: "";
          position: absolute;
          background: #000;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after {
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.bottom::after {
          left: 50%;
          top: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.left::after {
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
        .bubble.right::after {
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
      `, d.appendChild(m), t(10, g = document.createElement("div")), t(10, g.className = `bubble ${a}`, g), t(10, g.innerHTML = r, g), d.appendChild(g);
        const L = new MutationObserver(() => {
          p && H();
        });
        L.observe(document.body, { childList: !0, subtree: !0 }), ct(() => {
          L.disconnect(), f && f.parentNode && f.parentNode.removeChild(f), t(8, f = null), t(10, g = null), t(9, d = null), b && clearTimeout(b);
        });
      }
      t(8, f.style.opacity = "1", f), H();
    }
    n.$$.dirty & /*show, tooltipEl, transitionDuration*/
    2432 && !p && f && (t(8, f.style.opacity = "0", f), setTimeout(
      () => {
        f && f.parentNode && f.parentNode.removeChild(f), t(8, f = null), t(10, g = null), t(9, d = null);
      },
      o
    )), n.$$.dirty & /*bubbleEl, side, content*/
    1057 && g && (t(10, g.className = `bubble ${a}`, g), t(10, g.innerHTML = r, g));
  }, [
    r,
    c,
    u,
    _,
    k,
    a,
    s,
    o,
    f,
    d,
    g,
    p,
    b,
    i,
    l,
    I
  ];
}
class Wa extends x {
  constructor(e) {
    super(), $(this, e, Fa, Za, Q, {
      content: 0,
      side: 5,
      hoverDelay: 6,
      transitionDuration: 7
    });
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
}, at = {
  ARIA_SELECTED: tl.ARIA_SELECTED,
  ARIA_SORT: tl.ARIA_SORT
}, Ne;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Ne || (Ne = {}));
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
var Ba = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return ir(this, function(t) {
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
      for (var l = t.columnId, i = t.columnIndex, r = t.headerCell, a = 0; a < this.adapter.getHeaderCellCount(); a++)
        a !== i && (this.adapter.removeClassNameByHeaderCellIndex(a, Ke.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, Ke.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, at.ARIA_SORT, Ne.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Ne.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Ke.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(i, at.ARIA_SORT), o = Ne.NONE;
      s === Ne.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Ke.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, at.ARIA_SORT, Ne.DESCENDING), o = Ne.DESCENDING) : s === Ne.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Ke.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, at.ARIA_SORT, Ne.ASCENDING), o = Ne.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, at.ARIA_SORT, Ne.ASCENDING), o = Ne.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(Ke.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Ke.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, Ke.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, at.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Ke.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, at.ARIA_SELECTED, "false"));
    }, e;
  }(It)
);
const Ua = (n) => ({}), nl = (n) => ({}), Oa = (n) => ({}), ll = (n) => ({});
function il(n) {
  let e, t, l, i, r;
  const a = (
    /*#slots*/
    n[36].progress
  ), s = ae(
    a,
    n,
    /*$$scope*/
    n[35],
    ll
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = U(), s && s.c(), v(t, "class", "mdc-data-table__scrim"), v(e, "class", "mdc-data-table__progress-indicator"), v(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(rl).join(" "));
    },
    m(o, u) {
      P(o, e, u), G(e, t), G(e, l), s && s.m(e, null), r = !0;
    },
    p(o, u) {
      s && s.p && (!r || u[1] & /*$$scope*/
      16) && ue(
        s,
        a,
        o,
        /*$$scope*/
        o[35],
        r ? oe(
          a,
          /*$$scope*/
          o[35],
          u,
          Oa
        ) : ce(
          /*$$scope*/
          o[35]
        ),
        ll
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(rl).join(" "))) && v(e, "style", i);
    },
    i(o) {
      r || (C(s, o), r = !0);
    },
    o(o) {
      y(s, o), r = !1;
    },
    d(o) {
      o && D(e), s && s.d(o);
    }
  };
}
function Na(n) {
  let e, t, l, i, r, a, s, o, u, c, f, d, g, p;
  const b = (
    /*#slots*/
    n[36].default
  ), _ = ae(
    b,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let k = [
    {
      class: i = ne({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ge(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], H = {};
  for (let M = 0; M < k.length; M += 1)
    H = q(H, k[M]);
  let I = [
    {
      class: a = ne({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ge(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], m = {};
  for (let M = 0; M < I.length; M += 1)
    m = q(m, I[M]);
  let L = (
    /*$$slots*/
    n[24].progress && il(n)
  );
  const E = (
    /*#slots*/
    n[36].paginate
  ), h = ae(
    E,
    n,
    /*$$scope*/
    n[35],
    nl
  );
  let R = [
    {
      class: c = ne({
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
    _t(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], B = {};
  for (let M = 0; M < R.length; M += 1)
    B = q(B, R[M]);
  return {
    c() {
      e = F("div"), t = F("div"), l = F("table"), _ && _.c(), o = U(), L && L.c(), u = U(), h && h.c(), se(l, H), se(t, m), se(e, B);
    },
    m(M, A) {
      P(M, e, A), G(e, t), G(t, l), _ && _.m(l, null), n[37](t), G(e, o), L && L.m(e, null), G(e, u), h && h.m(e, null), n[38](e), d = !0, g || (p = [
        te(r = Le.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        te(s = Le.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        te(f = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
      ], g = !0);
    },
    p(M, A) {
      _ && _.p && (!d || A[1] & /*$$scope*/
      16) && ue(
        _,
        b,
        M,
        /*$$scope*/
        M[35],
        d ? oe(
          b,
          /*$$scope*/
          M[35],
          A,
          null
        ) : ce(
          /*$$scope*/
          M[35]
        ),
        null
      ), se(l, H = fe(k, [
        (!d || A[0] & /*table$class*/
        64 && i !== (i = ne({
          [
            /*table$class*/
            M[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        A[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          M[25],
          "table$"
        )
      ])), r && pe(r.update) && A[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        M[5]
      ), se(t, m = fe(I, [
        (!d || A[0] & /*container$class*/
        16 && a !== (a = ne({
          [
            /*container$class*/
            M[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        A[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          M[25],
          "container$"
        )
      ])), s && pe(s.update) && A[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        M[3]
      ), /*$$slots*/
      M[24].progress ? L ? (L.p(M, A), A[0] & /*$$slots*/
      16777216 && C(L, 1)) : (L = il(M), L.c(), C(L, 1), L.m(e, u)) : L && (ie(), y(L, 1, 1, () => {
        L = null;
      }), re()), h && h.p && (!d || A[1] & /*$$scope*/
      16) && ue(
        h,
        E,
        M,
        /*$$scope*/
        M[35],
        d ? oe(
          E,
          /*$$scope*/
          M[35],
          A,
          Ua
        ) : ce(
          /*$$scope*/
          M[35]
        ),
        nl
      ), se(e, B = fe(R, [
        (!d || A[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = ne({
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
        }))) && { class: c },
        A[0] & /*$$restProps*/
        33554432 && _t(
          /*$$restProps*/
          M[25],
          ["container$", "table$"]
        )
      ])), f && pe(f.update) && A[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        M[0]
      );
    },
    i(M) {
      d || (C(_, M), C(L), C(h, M), d = !0);
    },
    o(M) {
      y(_, M), y(L), y(h, M), d = !1;
    },
    d(M) {
      M && D(e), _ && _.d(M), n[37](null), L && L.d(), h && h.d(M), n[38](null), g = !1, he(p);
    }
  };
}
const rl = ([n, e]) => `${n}: ${e};`;
function Va(n, e, t) {
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
  let i = ge(e, l), r, a, s, { $$slots: o = {}, $$scope: u } = e;
  const c = on(o), { closest: f } = ei, d = Be(Ee());
  let { use: g = [] } = e, { class: p = "" } = e, { stickyHeader: b = !1 } = e, { sortable: _ = !1 } = e, { sort: k = null } = e, { sortDirection: H = "ascending" } = e, { sortAscendingAriaLabel: I = "sorted, ascending" } = e, { sortDescendingAriaLabel: m = "sorted, descending" } = e, { container$use: L = [] } = e, { container$class: E = "" } = e, { table$use: h = [] } = e, { table$class: R = "" } = e, B, M, A, W, T, X = {}, Se = { height: "auto", top: "initial" }, ke = Ue("SMUI:addLayoutListener"), Ce, j = !1, w = ut(!1);
  ht(n, w, (Z) => t(34, r = Z));
  let z = ut(k);
  ht(n, z, (Z) => t(45, s = Z));
  let me = ut(H);
  ht(n, me, (Z) => t(44, a = Z)), Pe("SMUI:checkbox:context", "data-table"), Pe("SMUI:linear-progress:context", "data-table"), Pe("SMUI:linear-progress:closed", w), Pe("SMUI:data-table:sortable", _), Pe("SMUI:data-table:sort", z), Pe("SMUI:data-table:sortDirection", me), Pe("SMUI:data-table:sortAscendingAriaLabel", I), Pe("SMUI:data-table:sortDescendingAriaLabel", m), ke && (Ce = ke(At));
  let be;
  Oe(() => (t(7, M = new Ba({
    addClass: Ze,
    removeClass: je,
    getHeaderCellElements: () => {
      var Z;
      return (Z = W == null ? void 0 : W.cells.map((J) => J.element)) !== null && Z !== void 0 ? Z : [];
    },
    getHeaderCellCount: () => {
      var Z;
      return (Z = W == null ? void 0 : W.cells.length) !== null && Z !== void 0 ? Z : 0;
    },
    getAttributeByHeaderCellIndex: (Z, J) => {
      var He;
      return (He = W == null ? void 0 : W.orderedCells[Z].getAttr(J)) !== null && He !== void 0 ? He : null;
    },
    setAttributeByHeaderCellIndex: (Z, J, He) => {
      W == null || W.orderedCells[Z].addAttr(J, He);
    },
    setClassNameByHeaderCellIndex: (Z, J) => {
      W == null || W.orderedCells[Z].addClass(J);
    },
    removeClassNameByHeaderCellIndex: (Z, J) => {
      W == null || W.orderedCells[Z].removeClass(J);
    },
    notifySortAction: (Z) => {
      t(26, k = Z.columnId), t(27, H = Z.sortValue), Ie(Ve(), "SMUIDataTable:sorted", Z, void 0, !0);
    },
    getTableContainerHeight: () => A.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const Z = Ve().querySelector(".mdc-data-table__header-row");
      if (!Z)
        throw new Error("MDCDataTable: Table header element not found.");
      return Z.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (Z) => {
      t(13, Se = Z);
    },
    addClassAtRowIndex: (Z, J) => {
      T == null || T.orderedRows[Z].addClass(J);
    },
    getRowCount: () => {
      var Z;
      return (Z = T == null ? void 0 : T.rows.length) !== null && Z !== void 0 ? Z : 0;
    },
    getRowElements: () => {
      var Z;
      return (Z = T == null ? void 0 : T.rows.map((J) => J.element)) !== null && Z !== void 0 ? Z : [];
    },
    getRowIdAtIndex: (Z) => {
      var J;
      return (J = T == null ? void 0 : T.orderedRows[Z].rowId) !== null && J !== void 0 ? J : null;
    },
    getRowIndexByChildElement: (Z) => {
      var J;
      return (J = T == null ? void 0 : T.orderedRows.map((He) => He.element).indexOf(f(Z, ".mdc-data-table__row"))) !== null && J !== void 0 ? J : -1;
    },
    getSelectedRowCount: () => {
      var Z;
      return (Z = T == null ? void 0 : T.rows.filter((J) => J.selected).length) !== null && Z !== void 0 ? Z : 0;
    },
    isCheckboxAtRowIndexChecked: (Z) => {
      const J = T == null ? void 0 : T.orderedRows[Z].checkbox;
      return J ? J.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const Z = W == null ? void 0 : W.checkbox;
      return Z ? Z.checked : !1;
    },
    isRowsSelectable: () => !!Ve().querySelector(".mdc-data-table__row-checkbox") || !!Ve().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (Z) => {
      const J = T == null ? void 0 : T.orderedRows[Z.rowIndex];
      J && Ie(
        Ve(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: J.element,
          rowId: J.rowId,
          rowIndex: Z.rowIndex,
          selected: Z.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Je(!1), Ie(Ve(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Je(!1), Ie(Ve(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (Z) => {
      Ie(Ve(), "SMUIDataTable:rowClick", Z, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (Z, J) => {
      T == null || T.orderedRows[Z].removeClass(J);
    },
    setAttributeAtRowIndex: (Z, J, He) => {
      T == null || T.orderedRows[Z].addAttr(J, He);
    },
    setHeaderRowCheckboxChecked: (Z) => {
      const J = W == null ? void 0 : W.checkbox;
      J && (J.checked = Z);
    },
    setHeaderRowCheckboxIndeterminate: Je,
    setRowCheckboxCheckedAtIndex: (Z, J) => {
      const He = T == null ? void 0 : T.orderedRows[Z].checkbox;
      He && (He.checked = J);
    },
    setSortStatusLabelByHeaderCellIndex: (Z, J) => {
    }
    // Handled automatically.
  })), M.init(), M.layout(), t(14, j = !0), () => {
    M.destroy();
  })), ct(() => {
    Ce && Ce();
  });
  function De(Z) {
    t(10, W = Z.detail);
  }
  function Te(Z) {
    t(11, T = Z.detail);
  }
  function de(Z) {
    M && M.handleRowCheckboxChange(Z);
  }
  function Ze(Z) {
    X[Z] || t(12, X[Z] = !0, X);
  }
  function je(Z) {
    (!(Z in X) || X[Z]) && t(12, X[Z] = !1, X);
  }
  function Je(Z) {
    const J = W == null ? void 0 : W.checkbox;
    J && (J.indeterminate = Z);
  }
  function Qe(Z) {
    if (!M || !Z.detail.target)
      return;
    const J = f(Z.detail.target, ".mdc-data-table__header-cell--with-sort");
    J && yt(J);
  }
  function Ht(Z) {
    if (!M || !Z.detail.target)
      return;
    const J = f(Z.detail.target, ".mdc-data-table__row");
    J && M && M.handleRowClick({ rowId: Z.detail.rowId, row: J });
  }
  function yt(Z) {
    var J, He;
    const Gt = (J = W == null ? void 0 : W.orderedCells) !== null && J !== void 0 ? J : [], wt = Gt.map((Pt) => Pt.element).indexOf(Z);
    if (wt === -1)
      return;
    const Dt = (He = Gt[wt].columnId) !== null && He !== void 0 ? He : null;
    M.handleSortAction({ columnId: Dt, columnIndex: wt, headerCell: Z });
  }
  function At() {
    return M.layout();
  }
  function Ve() {
    return B;
  }
  function lt(Z) {
    ee[Z ? "unshift" : "push"](() => {
      A = Z, t(9, A);
    });
  }
  function it(Z) {
    ee[Z ? "unshift" : "push"](() => {
      B = Z, t(8, B);
    });
  }
  const ft = () => M && j && M.layout(), rt = () => t(10, W = void 0), kt = () => t(11, T = void 0), jt = () => M && M.handleHeaderRowCheckboxChange();
  return n.$$set = (Z) => {
    e = q(q({}, e), Fe(Z)), t(25, i = ge(e, l)), "use" in Z && t(0, g = Z.use), "class" in Z && t(1, p = Z.class), "stickyHeader" in Z && t(2, b = Z.stickyHeader), "sortable" in Z && t(28, _ = Z.sortable), "sort" in Z && t(26, k = Z.sort), "sortDirection" in Z && t(27, H = Z.sortDirection), "sortAscendingAriaLabel" in Z && t(29, I = Z.sortAscendingAriaLabel), "sortDescendingAriaLabel" in Z && t(30, m = Z.sortDescendingAriaLabel), "container$use" in Z && t(3, L = Z.container$use), "container$class" in Z && t(4, E = Z.container$class), "table$use" in Z && t(5, h = Z.table$use), "table$class" in Z && t(6, R = Z.table$class), "$$scope" in Z && t(35, u = Z.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && nn(z, s = k, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && nn(me, a = H, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && M && be !== r && (t(33, be = r), r ? M.hideProgress() : M.showProgress());
  }, [
    g,
    p,
    b,
    L,
    E,
    h,
    R,
    M,
    B,
    A,
    W,
    T,
    X,
    Se,
    j,
    d,
    w,
    z,
    me,
    De,
    Te,
    de,
    Qe,
    Ht,
    c,
    i,
    k,
    H,
    _,
    I,
    m,
    At,
    Ve,
    be,
    r,
    u,
    o,
    lt,
    it,
    ft,
    rt,
    kt,
    jt
  ];
}
class za extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Va,
      Na,
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
function ja(n) {
  let e, t, l, i, r;
  const a = (
    /*#slots*/
    n[10].default
  ), s = ae(
    a,
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
    u = q(u, o[c]);
  return {
    c() {
      e = F("thead"), s && s.c(), se(e, u);
    },
    m(c, f) {
      P(c, e, f), s && s.m(e, null), n[11](e), l = !0, i || (r = [
        te(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
    p(c, [f]) {
      s && s.p && (!l || f & /*$$scope*/
      512) && ue(
        s,
        a,
        c,
        /*$$scope*/
        c[9],
        l ? oe(
          a,
          /*$$scope*/
          c[9],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[9]
        ),
        null
      ), se(e, u = fe(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(s, c), l = !0);
    },
    o(c) {
      y(s, c), l = !1;
    },
    d(c) {
      c && D(e), s && s.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function qa(n, e, t) {
  const l = ["use", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: a } = e;
  const s = Be(Ee());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Pe("SMUI:data-table:row:header", !0), Oe(() => {
    const m = {
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
    return Ie(k(), "SMUIDataTableHeader:mount", m), () => {
      Ie(k(), "SMUIDataTableHeader:unmount", m);
    };
  });
  function g(m) {
    t(2, c = m.detail);
  }
  function p(m) {
    f.push(m.detail), d.set(m.detail.element, m.detail), m.stopPropagation();
  }
  function b(m) {
    const L = f.indexOf(m.detail);
    L !== -1 && (f.splice(L, 1), f = f), d.delete(m.detail.element), m.stopPropagation();
  }
  function _() {
    return [...k().querySelectorAll(".mdc-data-table__header-cell")].map((m) => d.get(m)).filter((m) => m && m._smui_data_table_header_cell_accessor);
  }
  function k() {
    return u;
  }
  function H(m) {
    ee[m ? "unshift" : "push"](() => {
      u = m, t(1, u);
    });
  }
  const I = () => t(2, c = void 0);
  return n.$$set = (m) => {
    e = q(q({}, e), Fe(m)), t(7, i = ge(e, l)), "use" in m && t(0, o = m.use), "$$scope" in m && t(9, a = m.$$scope);
  }, [
    o,
    u,
    c,
    s,
    g,
    p,
    b,
    i,
    k,
    a,
    r,
    H,
    I
  ];
}
class Xa extends x {
  constructor(e) {
    super(), $(this, e, qa, ja, Q, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Ya(n) {
  let e, t, l, i, r, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = ae(
    s,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = ne({
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
    c = q(c, u[f]);
  return {
    c() {
      e = F("tbody"), o && o.c(), se(e, c);
    },
    m(f, d) {
      P(f, e, d), o && o.m(e, null), n[10](e), i = !0, r || (a = [
        te(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      256) && ue(
        o,
        s,
        f,
        /*$$scope*/
        f[8],
        i ? oe(
          s,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[8]
        ),
        null
      ), se(e, c = fe(u, [
        (!i || d & /*className*/
        2 && t !== (t = ne({
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
      i || (C(o, f), i = !0);
    },
    o(f) {
      y(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[10](null), r = !1, he(a);
    }
  };
}
function Ja(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: a } = e;
  const s = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Pe("SMUI:data-table:row:header", !1), Oe(() => {
    const H = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return b();
      }
    };
    return Ie(_(), "SMUIDataTableBody:mount", H), () => {
      Ie(_(), "SMUIDataTableBody:unmount", H);
    };
  });
  function g(H) {
    f.push(H.detail), d.set(H.detail.element, H.detail), H.stopPropagation();
  }
  function p(H) {
    const I = f.indexOf(H.detail);
    I !== -1 && (f.splice(I, 1), f = f), d.delete(H.detail.element), H.stopPropagation();
  }
  function b() {
    return [..._().querySelectorAll(".mdc-data-table__row")].map((H) => d.get(H)).filter((H) => H && H._smui_data_table_row_accessor);
  }
  function _() {
    return c;
  }
  function k(H) {
    ee[H ? "unshift" : "push"](() => {
      c = H, t(2, c);
    });
  }
  return n.$$set = (H) => {
    e = q(q({}, e), Fe(H)), t(6, i = ge(e, l)), "use" in H && t(0, o = H.use), "class" in H && t(1, u = H.class), "$$scope" in H && t(8, a = H.$$scope);
  }, [
    o,
    u,
    c,
    s,
    g,
    p,
    i,
    _,
    a,
    r,
    k
  ];
}
class Qa extends x {
  constructor(e) {
    super(), $(this, e, Ja, Ya, Q, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Ka(n) {
  let e, t, l, i, r, a, s;
  const o = (
    /*#slots*/
    n[15].default
  ), u = ae(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = ne({
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
    f = q(f, c[d]);
  return {
    c() {
      e = F("tr"), u && u.c(), se(e, f);
    },
    m(d, g) {
      P(d, e, g), u && u.m(e, null), n[16](e), r = !0, a || (s = [
        te(i = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
      ], a = !0);
    },
    p(d, [g]) {
      u && u.p && (!r || g & /*$$scope*/
      16384) && ue(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        r ? oe(
          o,
          /*$$scope*/
          d[14],
          g,
          null
        ) : ce(
          /*$$scope*/
          d[14]
        ),
        null
      ), se(e, f = fe(c, [
        (!r || g & /*className, checkbox, internalClasses*/
        26 && t !== (t = ne({
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
      y(u, d), r = !1;
    },
    d(d) {
      d && D(e), u && u.d(d), n[16](null), a = !1, he(s);
    }
  };
}
let $a = 0;
function xa(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: a } = e;
  const s = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + $a++ } = e, f, d, g = {}, p = {}, b = Ue("SMUI:data-table:row:header");
  Oe(() => {
    const A = b ? {
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
        var W;
        return (W = d && d.checked) !== null && W !== void 0 ? W : !1;
      },
      addClass: k,
      removeClass: H,
      getAttr: I,
      addAttr: m
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
        var W;
        return (W = d && d.checked) !== null && W !== void 0 ? W : !1;
      },
      addClass: k,
      removeClass: H,
      getAttr: I,
      addAttr: m
    };
    return Ie(h(), "SMUIDataTableRow:mount", A), () => {
      Ie(h(), "SMUIDataTableRow:unmount", A);
    };
  });
  function _(A) {
    t(3, d = A.detail);
  }
  function k(A) {
    g[A] || t(4, g[A] = !0, g);
  }
  function H(A) {
    (!(A in g) || g[A]) && t(4, g[A] = !1, g);
  }
  function I(A) {
    var W;
    return A in p ? (W = p[A]) !== null && W !== void 0 ? W : null : h().getAttribute(A);
  }
  function m(A, W) {
    p[A] !== W && t(5, p[A] = W, p);
  }
  function L(A) {
    Ie(h(), "SMUIDataTableHeader:click", A);
  }
  function E(A) {
    Ie(h(), "SMUIDataTableRow:click", { rowId: c, target: A.target });
  }
  function h() {
    return f;
  }
  function R(A) {
    ee[A ? "unshift" : "push"](() => {
      f = A, t(2, f);
    });
  }
  const B = (A) => b ? L(A) : E(A), M = () => t(3, d = void 0);
  return n.$$set = (A) => {
    e = q(q({}, e), Fe(A)), t(11, i = ge(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "rowId" in A && t(12, c = A.rowId), "$$scope" in A && t(14, a = A.$$scope);
  }, [
    o,
    u,
    f,
    d,
    g,
    p,
    s,
    b,
    _,
    L,
    E,
    i,
    c,
    h,
    a,
    r,
    R,
    B,
    M
  ];
}
class ni extends x {
  constructor(e) {
    super(), $(this, e, xa, Ka, Q, {
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
function eo(n) {
  let e, t, l, i, r, a;
  const s = (
    /*#slots*/
    n[22].default
  ), o = ae(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = ne({
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
    c = q(c, u[f]);
  return {
    c() {
      e = F("td"), o && o.c(), se(e, c);
    },
    m(f, d) {
      P(f, e, d), o && o.m(e, null), n[25](e), i = !0, r || (a = [
        te(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
    p(f, d) {
      o && o.p && (!i || d & /*$$scope*/
      2097152) && ue(
        o,
        s,
        f,
        /*$$scope*/
        f[21],
        i ? oe(
          s,
          /*$$scope*/
          f[21],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[21]
        ),
        null
      ), se(e, c = fe(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = ne({
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
      i || (C(o, f), i = !0);
    },
    o(f) {
      y(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[25](null), r = !1, he(a);
    }
  };
}
function to(n) {
  let e, t, l, i, r, a, s, o, u;
  const c = [lo, no], f = [];
  function d(b, _) {
    return (
      /*sortable*/
      b[5] ? 0 : 1
    );
  }
  t = d(n), l = f[t] = c[t](n);
  let g = [
    {
      class: i = ne({
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
  ], p = {};
  for (let b = 0; b < g.length; b += 1)
    p = q(p, g[b]);
  return {
    c() {
      e = F("th"), l.c(), se(e, p);
    },
    m(b, _) {
      P(b, e, _), f[t].m(e, null), n[23](e), s = !0, o || (u = [
        te(a = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        te(
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
    p(b, _) {
      let k = t;
      t = d(b), t === k ? f[t].p(b, _) : (ie(), y(f[k], 1, 1, () => {
        f[k] = null;
      }), re(), l = f[t], l ? l.p(b, _) : (l = f[t] = c[t](b), l.c()), C(l, 1), l.m(e, null)), se(e, p = fe(g, [
        (!s || _ & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = ne({
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
        (!s || _ & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          b[4]
        ) },
        (!s || _ & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        b[5] ? (
          /*$sort*/
          b[9] === /*columnId*/
          b[4] ? (
            /*$sortDirection*/
            b[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        _ & /*internalAttrs*/
        256 && /*internalAttrs*/
        b[8],
        _ & /*$$restProps*/
        524288 && /*$$restProps*/
        b[19]
      ])), a && pe(a.update) && _ & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      s || (C(l), s = !0);
    },
    o(b) {
      y(l), s = !1;
    },
    d(b) {
      b && D(e), f[t].d(), n[23](null), o = !1, he(u);
    }
  };
}
function no(n) {
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
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function lo(n) {
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
  ), r, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ae(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = F("div"), u && u.c(), t = U(), l = F("div"), r = le(i), v(l, "class", "mdc-data-table__sort-status-label"), v(l, "aria-hidden", "true"), v(l, "id", a = /*columnId*/
      n[4] + "-status-label"), v(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      P(c, e, f), u && u.m(e, null), G(e, t), G(e, l), G(l, r), s = !0;
    },
    p(c, f) {
      u && u.p && (!s || f & /*$$scope*/
      2097152) && ue(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        s ? oe(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!s || f & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && _e(r, i), (!s || f & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && v(l, "id", a);
    },
    i(c) {
      s || (C(u, c), s = !0);
    },
    o(c) {
      y(u, c), s = !1;
    },
    d(c) {
      c && D(e), u && u.d(c);
    }
  };
}
function io(n) {
  let e, t, l, i;
  const r = [to, eo], a = [];
  function s(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), l = ve();
    },
    m(o, u) {
      a[e].m(o, u), P(o, l, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      y(t), i = !1;
    },
    d(o) {
      o && D(l), a[e].d(o);
    }
  };
}
let ro = 0;
function so(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ge(e, l), r, a, { $$slots: s = {}, $$scope: o } = e;
  const u = Be(Ee());
  let c = Ue("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: p = !1 } = e, { columnId: b = c ? "SMUI-data-table-column-" + ro++ : "SMUI-data-table-unused" } = e, { sortable: _ = Ue("SMUI:data-table:sortable") } = e, k, H = {}, I = {}, m = Ue("SMUI:data-table:sort");
  ht(n, m, (w) => t(9, r = w));
  let L = Ue("SMUI:data-table:sortDirection");
  ht(n, L, (w) => t(10, a = w));
  let E = Ue("SMUI:data-table:sortAscendingAriaLabel"), h = Ue("SMUI:data-table:sortDescendingAriaLabel");
  _ && (Pe("SMUI:label:context", "data-table:sortable-header-cell"), Pe("SMUI:icon-button:context", "data-table:sortable-header-cell"), Pe("SMUI:icon-button:aria-describedby", b + "-status-label")), Oe(() => {
    const w = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return b;
      },
      addClass: R,
      removeClass: B,
      getAttr: M,
      addAttr: A
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: R,
      removeClass: B,
      getAttr: M,
      addAttr: A
    };
    return Ie(X(), "SMUIDataTableCell:mount", w), () => {
      Ie(X(), "SMUIDataTableCell:unmount", w);
    };
  });
  function R(w) {
    H[w] || t(7, H[w] = !0, H);
  }
  function B(w) {
    (!(w in H) || H[w]) && t(7, H[w] = !1, H);
  }
  function M(w) {
    var z;
    return w in I ? (z = I[w]) !== null && z !== void 0 ? z : null : X().getAttribute(w);
  }
  function A(w, z) {
    I[w] !== z && t(8, I[w] = z, I);
  }
  function W(w) {
    Ie(X(), "SMUIDataTableHeaderCheckbox:change", w);
  }
  function T(w) {
    Ie(X(), "SMUIDataTableBodyCheckbox:change", w);
  }
  function X() {
    return k;
  }
  function Se(w) {
    ee[w ? "unshift" : "push"](() => {
      k = w, t(6, k);
    });
  }
  const ke = (w) => p && W(w);
  function Ce(w) {
    ee[w ? "unshift" : "push"](() => {
      k = w, t(6, k);
    });
  }
  const j = (w) => p && T(w);
  return n.$$set = (w) => {
    e = q(q({}, e), Fe(w)), t(19, i = ge(e, l)), "use" in w && t(0, f = w.use), "class" in w && t(1, d = w.class), "numeric" in w && t(2, g = w.numeric), "checkbox" in w && t(3, p = w.checkbox), "columnId" in w && t(4, b = w.columnId), "sortable" in w && t(5, _ = w.sortable), "$$scope" in w && t(21, o = w.$$scope);
  }, [
    f,
    d,
    g,
    p,
    b,
    _,
    k,
    H,
    I,
    r,
    a,
    u,
    c,
    m,
    L,
    E,
    h,
    W,
    T,
    i,
    X,
    o,
    s,
    Se,
    ke,
    Ce,
    j
  ];
}
class zt extends x {
  constructor(e) {
    super(), $(this, e, so, io, Q, {
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
const { Boolean: li } = zi;
function sl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const ao = (n) => ({ item: n & /*items*/
1 }), al = (n) => ({ item: (
  /*item*/
  n[17]
) });
function ol(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function ul(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function oo(n) {
  let e, t;
  return e = new za({
    props: {
      style: "width: 100%;",
      $$slots: { default: [Co] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function uo(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = le(
        /*emptyText*/
        n[4]
      ), v(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && _e(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function co(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = le(
        /*errorMsg*/
        n[3]
      ), v(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && _e(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function fo(n) {
  let e;
  return {
    c() {
      e = F("p"), e.textContent = "Loading…", v(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      P(t, e, l);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && D(e);
    }
  };
}
function go(n) {
  let e = (
    /*col*/
    n[20].header + ""
  ), t;
  return {
    c() {
      t = le(e);
    },
    m(l, i) {
      P(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[20].header + "") && _e(t, e);
    },
    d(l) {
      l && D(t);
    }
  };
}
function cl(n) {
  let e, t;
  return e = new zt({
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
      $$slots: { default: [go] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function fl(n) {
  let e, t;
  return e = new zt({
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
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function mo(n) {
  let e, t, l, i = ye(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = cl(ul(n, i, o));
  const a = (o) => y(r[o], 1, 1, () => {
    r[o] = null;
  });
  let s = (
    /*slotHasActions*/
    n[9] && fl(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = U(), s && s.c(), t = ve();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      P(o, e, u), s && s.m(o, u), P(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = ye(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = ul(o, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = cl(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ie(), c = i.length; c < r.length; c += 1)
          a(c);
        re();
      }
      /*slotHasActions*/
      o[9] ? s ? (s.p(o, u), u & /*slotHasActions*/
      512 && C(s, 1)) : (s = fl(o), s.c(), C(s, 1), s.m(t.parentNode, t)) : s && (ie(), y(s, 1, 1, () => {
        s = null;
      }), re());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(s), l = !0;
      }
    },
    o(o) {
      r = r.filter(li);
      for (let u = 0; u < r.length; u += 1)
        y(r[u]);
      y(s), l = !1;
    },
    d(o) {
      o && (D(e), D(t)), ze(r, o), s && s.d(o);
    }
  };
}
function ho(n) {
  let e, t;
  return e = new ni({
    props: {
      $$slots: { default: [mo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function po(n) {
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
      t = le(e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      var a;
      r & /*items, columns*/
      3 && e !== (e = /*item*/
      (((a = i[17]) == null ? void 0 : a[
        /*col*/
        i[20].key
      ]) ?? "") + "") && _e(t, e);
    },
    d(i) {
      i && D(t);
    }
  };
}
function dl(n) {
  let e, t;
  return e = new zt({
    props: {
      $$slots: { default: [po] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function gl(n) {
  let e, t;
  return e = new zt({
    props: {
      numeric: !0,
      $$slots: { default: [bo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function bo(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[14],
    al
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
          ao
        ) : ce(
          /*$$scope*/
          i[14]
        ),
        al
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      y(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function _o(n) {
  let e, t, l, i = ye(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = dl(ol(n, i, o));
  const a = (o) => y(r[o], 1, 1, () => {
    r[o] = null;
  });
  let s = (
    /*slotHasActions*/
    n[9] && gl(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = U(), s && s.c(), t = U();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      P(o, e, u), s && s.m(o, u), P(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = ye(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = ol(o, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = dl(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ie(), c = i.length; c < r.length; c += 1)
          a(c);
        re();
      }
      /*slotHasActions*/
      o[9] ? s ? (s.p(o, u), u & /*slotHasActions*/
      512 && C(s, 1)) : (s = gl(o), s.c(), C(s, 1), s.m(t.parentNode, t)) : s && (ie(), y(s, 1, 1, () => {
        s = null;
      }), re());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(s), l = !0;
      }
    },
    o(o) {
      r = r.filter(li);
      for (let u = 0; u < r.length; u += 1)
        y(r[u]);
      y(s), l = !1;
    },
    d(o) {
      o && (D(e), D(t)), ze(r, o), s && s.d(o);
    }
  };
}
function ml(n, e) {
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
  return l = new ni({
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
      $$slots: { default: [_o] },
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
      t = ve(), V(l.$$.fragment), this.first = t;
    },
    m(a, s) {
      P(a, t, s), O(l, a, s), i = !0;
    },
    p(a, s) {
      e = a;
      const o = {};
      s & /*rowBg, hoveredRow, getRowId, items*/
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
      ].filter(Boolean).join(";")), s & /*$$scope, items, slotHasActions, columns*/
      16899 && (o.$$scope = { dirty: s, ctx: e }), l.$set(o);
    },
    i(a) {
      i || (C(l.$$.fragment, a), i = !0);
    },
    o(a) {
      y(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && D(t), N(l, a);
    }
  };
}
function vo(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = ye(
    /*items*/
    n[0]
  );
  const a = (s) => (
    /*getRowId*/
    s[5](
      /*item*/
      s[17],
      /*i*/
      s[19]
    )
  );
  for (let s = 0; s < r.length; s += 1) {
    let o = sl(n, r, s), u = a(o);
    t.set(u, e[s] = ml(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      l = ve();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      P(s, l, o), i = !0;
    },
    p(s, o) {
      o & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = ye(
        /*items*/
        s[0]
      ), ie(), e = tr(e, o, a, 1, s, r, t, l.parentNode, er, ml, l, sl), re());
    },
    i(s) {
      if (!i) {
        for (let o = 0; o < r.length; o += 1)
          C(e[o]);
        i = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        y(e[o]);
      i = !1;
    },
    d(s) {
      s && D(l);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Co(n) {
  let e, t, l, i;
  return e = new Xa({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [ho] },
      $$scope: { ctx: n }
    }
  }), l = new Qa({
    props: {
      $$slots: { default: [vo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment), t = U(), V(l.$$.fragment);
    },
    m(r, a) {
      O(e, r, a), P(r, t, a), O(l, r, a), i = !0;
    },
    p(r, a) {
      const s = {};
      a & /*headerBg*/
      64 && (s.style = /*headerBg*/
      r[6] ? `background-color:${/*headerBg*/
      r[6]}` : void 0), a & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (s.$$scope = { dirty: a, ctx: r }), e.$set(s);
      const o = {};
      a & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns*/
      17315 && (o.$$scope = { dirty: a, ctx: r }), l.$set(o);
    },
    i(r) {
      i || (C(e.$$.fragment, r), C(l.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), y(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && D(t), N(e, r), N(l, r);
    }
  };
}
function Io(n) {
  let e, t, l, i;
  const r = [fo, co, uo, oo], a = [];
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
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), l = ve();
    },
    m(o, u) {
      a[e].m(o, u), P(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (ie(), y(a[c], 1, 1, () => {
        a[c] = null;
      }), re(), t = a[e], t ? t.p(o, u) : (t = a[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      y(t), i = !1;
    },
    d(o) {
      o && D(l), a[e].d(o);
    }
  };
}
function yo(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const a = on(i);
  let { items: s = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (m, L) => {
    var E, h;
    return (h = m && ((E = m.id) !== null && E !== void 0 ? E : m.key)) !== null && h !== void 0 ? h : L;
  } } = e, { headerBg: g = null } = e, { rowBg: p = null } = e, b = null;
  const _ = a;
  let { hasActions: k = !1 } = e;
  const H = (m, L) => t(8, b = d(m, L)), I = () => t(8, b = null);
  return n.$$set = (m) => {
    "items" in m && t(0, s = m.items), "columns" in m && t(1, o = m.columns), "loading" in m && t(2, u = m.loading), "errorMsg" in m && t(3, c = m.errorMsg), "emptyText" in m && t(4, f = m.emptyText), "getRowId" in m && t(5, d = m.getRowId), "headerBg" in m && t(6, g = m.headerBg), "rowBg" in m && t(7, p = m.rowBg), "hasActions" in m && t(10, k = m.hasActions), "$$scope" in m && t(14, r = m.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = k || !!(_ != null && _.actions));
  }, [
    s,
    o,
    u,
    c,
    f,
    d,
    g,
    p,
    b,
    l,
    k,
    i,
    H,
    I,
    r
  ];
}
class Ao extends x {
  constructor(e) {
    super(), $(this, e, yo, Io, Q, {
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
function pl(n) {
  let e, t = (
    /*crumb*/
    n[5].secondaryLabel + ""
  ), l;
  return {
    c() {
      e = F("span"), l = le(t), v(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      P(i, e, r), G(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && _e(l, t);
    },
    d(i) {
      i && D(e);
    }
  };
}
function bl(n) {
  let e;
  return {
    c() {
      e = F("span"), e.textContent = "chevron_right", v(e, "class", "material-icons separator svelte-1ngm2be");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function _l(n) {
  let e, t, l, i = (
    /*crumb*/
    n[5].label + ""
  ), r, a, s, o, u, c, f, d, g = (
    /*crumb*/
    n[5].secondaryLabel && pl(n)
  );
  function p() {
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
    n[0].length - 1 && bl()
  );
  return {
    c() {
      e = F("div"), t = F("span"), l = F("span"), r = le(i), a = U(), g && g.c(), u = U(), b && b.c(), c = U(), v(l, "class", "label svelte-1ngm2be"), v(t, "class", s = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), v(t, "aria-current", o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), v(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(_, k) {
      P(_, e, k), G(e, t), G(t, l), G(l, r), G(t, a), g && g.m(t, null), G(e, u), b && b.m(e, null), G(e, c), f || (d = Y(t, "click", p), f = !0);
    },
    p(_, k) {
      n = _, k & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && _e(r, i), /*crumb*/
      n[5].secondaryLabel ? g ? g.p(n, k) : (g = pl(n), g.c(), g.m(t, null)) : g && (g.d(1), g = null), k & /*breadcrumbs, activeIndex*/
      3 && s !== (s = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && v(t, "class", s), k & /*activeIndex*/
      2 && o !== (o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && v(t, "aria-current", o), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? b || (b = bl(), b.c(), b.m(e, c)) : b && (b.d(1), b = null);
    },
    d(_) {
      _ && D(e), g && g.d(), b && b.d(), f = !1, d();
    }
  };
}
function ko(n) {
  let e, t = ye(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = _l(hl(n, t, i));
  return {
    c() {
      e = F("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      v(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      P(i, e, r);
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = ye(
          /*breadcrumbs*/
          i[0]
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const s = hl(i, t, a);
          l[a] ? l[a].p(s, r) : (l[a] = _l(s), l[a].c(), l[a].m(e, null));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = t.length;
      }
    },
    i: K,
    o: K,
    d(i) {
      i && D(e), ze(l, i);
    }
  };
}
function wo(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = Ye(), a = (o) => {
    l[o].enabled && o !== i && r("click", { index: o });
  }, s = (o) => a(o);
  return n.$$set = (o) => {
    "breadcrumbs" in o && t(0, l = o.breadcrumbs), "activeIndex" in o && t(1, i = o.activeIndex);
  }, [l, i, a, s];
}
class un extends x {
  constructor(e) {
    super(), $(this, e, wo, ko, Q, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const So = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
So.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
const Ro = ut([]);
Ro.subscribe;
function Lo(n) {
  let e;
  return {
    c() {
      e = le("CONTINUE");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Eo(n) {
  let e;
  return {
    c() {
      e = le("ADD NEW PROCESS");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Ho(n) {
  let e, t, l, i, r, a, s, o;
  t = new oa({
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
  r = new va({
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
      e = F("button"), V(t.$$.fragment), l = U(), i = F("button"), V(r.$$.fragment), v(e, "type", "button"), v(e, "class", "icon svelte-14c7zel"), v(e, "aria-label", "View process"), v(i, "type", "button"), v(i, "class", "icon svelte-14c7zel"), v(i, "aria-label", "Start process");
    },
    m(f, d) {
      P(f, e, d), O(t, e, null), P(f, l, d), P(f, i, d), O(r, i, null), a = !0, s || (o = [
        Y(e, "click", u),
        Y(i, "click", c)
      ], s = !0);
    },
    p(f, d) {
      n = f;
    },
    i(f) {
      a || (C(t.$$.fragment, f), C(r.$$.fragment, f), a = !0);
    },
    o(f) {
      y(t.$$.fragment, f), y(r.$$.fragment, f), a = !1;
    },
    d(f) {
      f && (D(e), D(l), D(i)), N(t), N(r), s = !1, he(o);
    }
  };
}
function Go(n) {
  let e, t, l, i, r, a, s, o, u, c, f, d, g, p, b, _, k;
  i = new Aa({}), o = new vt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [Lo] },
      $$scope: { ctx: n }
    }
  }), o.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function H(m) {
    n[12](m);
  }
  let I = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (I.value = /*searchQuery*/
    n[2]), f = new Bs({ props: I }), ee.push(() => Xe(f, "value", H)), p = new vt({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [Eo] },
        $$scope: { ctx: n }
      }
    }), p.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), _ = new Ao({
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
            Ho,
            ({ item: m }) => ({ 16: m }),
            ({ item: m }) => m ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = F("div"), t = F("div"), l = F("div"), V(i.$$.fragment), r = U(), a = F("span"), a.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, s = U(), V(o.$$.fragment), u = U(), c = F("div"), V(f.$$.fragment), g = U(), V(p.$$.fragment), b = U(), V(_.$$.fragment), v(a, "class", "svelte-14c7zel"), v(l, "class", "process-banner__info svelte-14c7zel"), v(t, "class", "process-banner svelte-14c7zel"), v(c, "class", "process-toolbar svelte-14c7zel"), v(e, "class", "processes svelte-14c7zel");
      },
      m(m, L) {
        P(m, e, L), G(e, t), G(t, l), O(i, l, null), G(l, r), G(l, a), G(t, s), O(o, t, null), G(e, u), G(e, c), O(f, c, null), G(c, g), O(p, c, null), G(e, b), O(_, e, null), k = !0;
      },
      p(m, [L]) {
        const E = {};
        L & /*$$scope*/
        131072 && (E.$$scope = { dirty: L, ctx: m }), o.$set(E);
        const h = {};
        !d && L & /*searchQuery*/
        4 && (d = !0, h.value = /*searchQuery*/
        m[2], xe(() => d = !1)), f.$set(h);
        const R = {};
        L & /*$$scope*/
        131072 && (R.$$scope = { dirty: L, ctx: m }), p.$set(R);
        const B = {};
        L & /*filteredRows*/
        8 && (B.items = /*filteredRows*/
        m[3]), L & /*loading*/
        1 && (B.loading = /*loading*/
        m[0]), L & /*errorMsg*/
        2 && (B.errorMsg = /*errorMsg*/
        m[1]), L & /*$$scope, item*/
        196608 && (B.$$scope = { dirty: L, ctx: m }), _.$set(B);
      },
      i(m) {
        k || (C(i.$$.fragment, m), C(o.$$.fragment, m), C(f.$$.fragment, m), C(p.$$.fragment, m), C(_.$$.fragment, m), k = !0);
      },
      o(m) {
        y(i.$$.fragment, m), y(o.$$.fragment, m), y(f.$$.fragment, m), y(p.$$.fragment, m), y(_.$$.fragment, m), k = !1;
      },
      d(m) {
        m && D(e), N(i), N(o), N(f), N(p), N(_);
      }
    }
  );
}
function Do(n, e, t) {
  let l, i, r, { processes: a = [] } = e, { loading: s = !1 } = e, { errorMsg: o = "" } = e;
  const u = Ye(), c = (I) => u("start", I), f = (I) => u("view", I);
  let d = "";
  const g = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], p = () => {
    console.log("Add new process clicked");
  }, b = () => console.log("Continue Process");
  function _(I) {
    d = I, t(2, d);
  }
  const k = (I) => f(I), H = (I) => c(I);
  return n.$$set = (I) => {
    "processes" in I && t(8, a = I.processes), "loading" in I && t(0, s = I.loading), "errorMsg" in I && t(1, o = I.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (a ?? []).map((I) => Object.assign(Object.assign({}, I), { displayName: I.name || I.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((I) => {
      var m;
      return ((m = I.displayName) !== null && m !== void 0 ? m : "").toLowerCase().includes(l);
    }) : i);
  }, [
    s,
    o,
    d,
    r,
    c,
    f,
    g,
    p,
    a,
    i,
    l,
    b,
    _,
    k,
    H
  ];
}
class Po extends x {
  constructor(e) {
    super(), $(this, e, Do, Go, Q, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function vl(n, e, t) {
  const l = n.slice();
  return l[7] = e[t], l[9] = t, l;
}
function Mo(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = le(e);
    },
    m(l, i) {
      P(l, t, i);
    },
    p: K,
    i: K,
    o: K,
    d(l) {
      l && D(t);
    }
  };
}
function To(n) {
  let e, t, l, i;
  const r = [Bo, Wo, Fo, Zo], a = [];
  function s(o, u) {
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
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), l = ve();
    },
    m(o, u) {
      a[e].m(o, u), P(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (ie(), y(a[c], 1, 1, () => {
        a[c] = null;
      }), re(), t = a[e], t || (t = a[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      y(t), i = !1;
    },
    d(o) {
      o && D(l), a[e].d(o);
    }
  };
}
function Zo(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = le(e);
    },
    m(l, i) {
      P(l, t, i);
    },
    i: K,
    o: K,
    d(l) {
      l && D(t);
    }
  };
}
function Fo(n) {
  let e, t;
  return e = new ha({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Wo(n) {
  let e, t;
  return e = new da({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Bo(n) {
  let e, t;
  return e = new ca({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Uo(n) {
  let e, t, l, i, r, a, s, o;
  const u = [To, Mo], c = [];
  function f(g, p) {
    return p & /*visited, items, currentId*/
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
      e = F("button"), i.c(), v(e, "aria-current", r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0), qe(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), qe(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), qe(
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
    m(g, p) {
      P(g, e, p), c[l].m(e, null), a = !0, s || (o = Y(e, "click", d), s = !0);
    },
    p(g, p) {
      n = g;
      let b = l;
      l = f(n, p), l === b ? c[l].p(n, p) : (ie(), y(c[b], 1, 1, () => {
        c[b] = null;
      }), re(), i = c[l], i ? i.p(n, p) : (i = c[l] = u[l](n), i.c()), C(i, 1), i.m(e, null)), (!a || p & /*items, currentId*/
      5 && r !== (r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0)) && v(e, "aria-current", r), (!a || p & /*visited, items*/
      3) && qe(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), (!a || p & /*items, currentId*/
      5) && qe(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), (!a || p & /*visited, items, currentId*/
      7) && qe(
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
      a || (C(i), a = !0);
    },
    o(g) {
      y(i), a = !1;
    },
    d(g) {
      g && D(e), c[l].d(), s = !1, o();
    }
  };
}
function Cl(n) {
  let e;
  return {
    c() {
      e = F("div"), v(e, "class", "step-line svelte-swalin"), v(e, "aria-hidden", "true");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Il(n) {
  let e, t, l, i, r = (
    /*item*/
    n[7].label + ""
  ), a, s, o, u;
  t = new Wa({
    props: {
      content: (
        /*tooltipMap*/
        n[4][
          /*item*/
          n[7].id
        ] ?? ""
      ),
      side: "bottom",
      $$slots: { default: [Uo] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[9] < /*items*/
    n[0].length - 1 && Cl()
  );
  return {
    c() {
      e = F("div"), V(t.$$.fragment), l = U(), i = F("p"), a = le(r), s = U(), c && c.c(), o = ve(), v(e, "class", "step svelte-swalin");
    },
    m(f, d) {
      P(f, e, d), O(t, e, null), G(e, l), G(e, i), G(i, a), P(f, s, d), c && c.m(f, d), P(f, o, d), u = !0;
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
      f[7].label + "") && _e(a, r), /*i*/
      f[9] < /*items*/
      f[0].length - 1 ? c || (c = Cl(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (C(t.$$.fragment, f), u = !0);
    },
    o(f) {
      y(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (D(e), D(s), D(o)), N(t), c && c.d(f);
    }
  };
}
function Oo(n) {
  let e, t, l = ye(
    /*items*/
    n[0]
  ), i = [];
  for (let a = 0; a < l.length; a += 1)
    i[a] = Il(vl(n, l, a));
  const r = (a) => y(i[a], 1, 1, () => {
    i[a] = null;
  });
  return {
    c() {
      e = F("div");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      v(e, "class", "steps svelte-swalin");
    },
    m(a, s) {
      P(a, e, s);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      t = !0;
    },
    p(a, [s]) {
      if (s & /*items, tooltipMap, currentId, undefined, visited, dispatch, status*/
      63) {
        l = ye(
          /*items*/
          a[0]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = vl(a, l, o);
          i[o] ? (i[o].p(u, s), C(i[o], 1)) : (i[o] = Il(u), i[o].c(), C(i[o], 1), i[o].m(e, null));
        }
        for (ie(), o = l.length; o < i.length; o += 1)
          r(o);
        re();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < l.length; s += 1)
          C(i[s]);
        t = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        y(i[s]);
      t = !1;
    },
    d(a) {
      a && D(e), ze(i, a);
    }
  };
}
function No(n, e, t) {
  let { items: l = [] } = e, { visited: i = [] } = e, { currentId: r = null } = e, { status: a = {} } = e, { tooltipMap: s = {} } = e;
  const o = Ye(), u = (c) => o("select", c.id);
  return n.$$set = (c) => {
    "items" in c && t(0, l = c.items), "visited" in c && t(1, i = c.visited), "currentId" in c && t(2, r = c.currentId), "status" in c && t(3, a = c.status), "tooltipMap" in c && t(4, s = c.tooltipMap);
  }, [l, i, r, a, s, o, u];
}
class ii extends x {
  constructor(e) {
    super(), $(this, e, No, Oo, Q, {
      items: 0,
      visited: 1,
      currentId: 2,
      status: 3,
      tooltipMap: 4
    });
  }
}
function Vo(n) {
  let e, t;
  return e = new ii({
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
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function zo(n, e, t) {
  const l = Ye(), i = [
    {
      id: "process-definition",
      label: "Process Definition"
    },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let { currentId: r = null } = e, { visited: a = [] } = e;
  const s = (o) => l("select", o.detail);
  return n.$$set = (o) => {
    "currentId" in o && t(0, r = o.currentId), "visited" in o && t(1, a = o.visited);
  }, [r, a, i, s];
}
class jo extends x {
  constructor(e) {
    super(), $(this, e, zo, Vo, Q, { currentId: 0, visited: 1 });
  }
}
function qo(n) {
  let e, t, l, i, r, a, s, o, u, c, f;
  return l = new Ra({}), {
    c() {
      e = F("div"), t = F("button"), V(l.$$.fragment), i = U(), r = F("span"), r.textContent = "Back to Overview", a = U(), s = F("span"), o = le(
        /*title*/
        n[0]
      ), v(s, "class", "back-container__title svelte-1p6ln66"), v(t, "type", "button"), v(t, "class", "back-container svelte-1p6ln66"), Jt(e, "display", "flex"), Jt(e, "align-items", "center"), Jt(e, "gap", "0.5rem");
    },
    m(d, g) {
      P(d, e, g), G(e, t), O(l, t, null), G(t, i), G(t, r), G(t, a), G(t, s), G(s, o), u = !0, c || (f = Y(
        t,
        "click",
        /*onBack*/
        n[1]
      ), c = !0);
    },
    p(d, [g]) {
      (!u || g & /*title*/
      1) && _e(
        o,
        /*title*/
        d[0]
      );
    },
    i(d) {
      u || (C(l.$$.fragment, d), u = !0);
    },
    o(d) {
      y(l.$$.fragment, d), u = !1;
    },
    d(d) {
      d && D(e), N(l), c = !1, f();
    }
  };
}
function Xo(n, e, t) {
  let { title: l = "Engineering Wizard" } = e;
  const i = Ye();
  function r() {
    i("back");
  }
  return n.$$set = (a) => {
    "title" in a && t(0, l = a.title);
  }, [l, r];
}
class ri extends x {
  constructor(e) {
    super(), $(this, e, Xo, qo, Q, { title: 0 });
  }
}
function yl(n, e, t) {
  const l = n.slice();
  return l[3] = e[t], l[5] = t, l;
}
function Al(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l;
}
function Yo(n) {
  let e;
  return {
    c() {
      e = le("EDIT");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function kl(n) {
  let e, t, l = (
    /*plugin*/
    n[6].name + ""
  ), i, r;
  return {
    c() {
      e = F("div"), t = F("span"), i = le(l), r = U(), v(t, "class", "plugin-item__name svelte-siq5x1"), v(e, "class", "plugin-item svelte-siq5x1");
    },
    m(a, s) {
      P(a, e, s), G(e, t), G(t, i), G(e, r);
    },
    p(a, s) {
      s & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      a[6].name + "") && _e(i, l);
    },
    d(a) {
      a && D(e);
    }
  };
}
function wl(n) {
  let e, t, l, i, r, a = (
    /*group*/
    n[3].title + ""
  ), s, o, u, c, f = ye(
    /*group*/
    n[3].plugins
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = kl(Al(n, f, g));
  return {
    c() {
      e = F("div"), t = F("div"), l = F("span"), l.textContent = `${/*i*/
      n[5] + 1}.`, i = U(), r = F("span"), s = le(a), o = U(), u = F("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      c = U(), v(l, "class", "plugin__index svelte-siq5x1"), v(r, "class", "plugin__title svelte-siq5x1"), v(t, "class", "plugin__group-title svelte-siq5x1"), v(u, "class", "plugin__items svelte-siq5x1"), v(e, "class", "plugin svelte-siq5x1");
    },
    m(g, p) {
      P(g, e, p), G(e, t), G(t, l), G(t, i), G(t, r), G(r, s), G(e, o), G(e, u);
      for (let b = 0; b < d.length; b += 1)
        d[b] && d[b].m(u, null);
      G(e, c);
    },
    p(g, p) {
      if (p & /*pluginGroups*/
      1 && a !== (a = /*group*/
      g[3].title + "") && _e(s, a), p & /*pluginGroups*/
      1) {
        f = ye(
          /*group*/
          g[3].plugins
        );
        let b;
        for (b = 0; b < f.length; b += 1) {
          const _ = Al(g, f, b);
          d[b] ? d[b].p(_, p) : (d[b] = kl(_), d[b].c(), d[b].m(u, null));
        }
        for (; b < d.length; b += 1)
          d[b].d(1);
        d.length = f.length;
      }
    },
    d(g) {
      g && D(e), ze(d, g);
    }
  };
}
function Jo(n) {
  let e, t, l, i, r, a, s;
  r = new vt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      $$slots: { default: [Yo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*requestEdit*/
    n[1]
  );
  let o = ye(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let c = 0; c < o.length; c += 1)
    u[c] = wl(yl(n, o, c));
  return {
    c() {
      e = F("div"), t = F("div"), l = F("p"), l.textContent = "Process", i = U(), V(r.$$.fragment), a = U();
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      v(l, "class", "svelte-siq5x1"), v(t, "class", "plugins-list__header svelte-siq5x1"), v(e, "class", "plugins-list svelte-siq5x1");
    },
    m(c, f) {
      P(c, e, f), G(e, t), G(t, l), G(t, i), O(r, t, null), G(e, a);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      s = !0;
    },
    p(c, [f]) {
      const d = {};
      if (f & /*$$scope*/
      512 && (d.$$scope = { dirty: f, ctx: c }), r.$set(d), f & /*pluginGroups*/
      1) {
        o = ye(
          /*pluginGroups*/
          c[0]
        );
        let g;
        for (g = 0; g < o.length; g += 1) {
          const p = yl(c, o, g);
          u[g] ? u[g].p(p, f) : (u[g] = wl(p), u[g].c(), u[g].m(e, null));
        }
        for (; g < u.length; g += 1)
          u[g].d(1);
        u.length = o.length;
      }
    },
    i(c) {
      s || (C(r.$$.fragment, c), s = !0);
    },
    o(c) {
      y(r.$$.fragment, c), s = !1;
    },
    d(c) {
      c && D(e), N(r), ze(u, c);
    }
  };
}
function Qo(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = Ye(), r = () => i("editRequested");
  return n.$$set = (a) => {
    "pluginGroups" in a && t(0, l = a.pluginGroups);
  }, [l, r];
}
class Ko extends x {
  constructor(e) {
    super(), $(this, e, Qo, Jo, Q, { pluginGroups: 0 });
  }
}
function $o(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function xo(n) {
  var e;
  return (e = n == null ? void 0 : n.pluginGroups) != null && e.length ? n.pluginGroups : [{ title: "Process", plugins: (n == null ? void 0 : n.plugins) ?? [] }];
}
function eu() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function tu(n) {
  var e;
  (e = eu()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function nu(n) {
  if (!customElements.get(n.id)) {
    const e = await import(
      /* @vite-ignore */
      n.src
    );
    customElements.define(n.id, e.default);
  }
}
async function lu(n) {
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
const tt = ut(!0);
tt.subscribe((n) => {
  tu(n);
});
function Sl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Rl(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l[10] = t, l;
}
function iu(n) {
  let e;
  return {
    c() {
      e = le("REMOVE ALL");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Ll(n) {
  let e, t, l = (
    /*plugin*/
    n[8].name + ""
  ), i, r, a, s, o, u, c, f;
  s = new ea({ props: { svgStyles: "fill: #FF203A" } });
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
      e = F("div"), t = F("span"), i = le(l), r = U(), a = F("button"), V(s.$$.fragment), o = U(), v(t, "class", "plugin-item__name svelte-12ozoaz"), v(a, "type", "button"), v(a, "class", "plugin-item__remove svelte-12ozoaz"), v(e, "class", "plugin-item svelte-12ozoaz");
    },
    m(g, p) {
      P(g, e, p), G(e, t), G(t, i), G(e, r), G(e, a), O(s, a, null), G(e, o), u = !0, c || (f = Y(a, "click", d), c = !0);
    },
    p(g, p) {
      n = g, (!u || p & /*pluginGroups*/
      1) && l !== (l = /*plugin*/
      n[8].name + "") && _e(i, l);
    },
    i(g) {
      u || (C(s.$$.fragment, g), u = !0);
    },
    o(g) {
      y(s.$$.fragment, g), u = !1;
    },
    d(g) {
      g && D(e), N(s), c = !1, f();
    }
  };
}
function El(n) {
  let e, t, l, i, r, a = (
    /*group*/
    n[5].title + ""
  ), s, o, u, c, f, d = ye(
    /*group*/
    n[5].plugins
  ), g = [];
  for (let b = 0; b < d.length; b += 1)
    g[b] = Ll(Rl(n, d, b));
  const p = (b) => y(g[b], 1, 1, () => {
    g[b] = null;
  });
  return {
    c() {
      e = F("div"), t = F("div"), l = F("span"), l.textContent = `${/*i*/
      n[7] + 1}.`, i = U(), r = F("span"), s = le(a), o = U(), u = F("div");
      for (let b = 0; b < g.length; b += 1)
        g[b].c();
      c = U(), v(l, "class", "plugin__index svelte-12ozoaz"), v(r, "class", "plugin__title svelte-12ozoaz"), v(t, "class", "plugin__group-title svelte-12ozoaz"), v(u, "class", "plugin__items svelte-12ozoaz"), v(e, "class", "plugin svelte-12ozoaz");
    },
    m(b, _) {
      P(b, e, _), G(e, t), G(t, l), G(t, i), G(t, r), G(r, s), G(e, o), G(e, u);
      for (let k = 0; k < g.length; k += 1)
        g[k] && g[k].m(u, null);
      G(e, c), f = !0;
    },
    p(b, _) {
      if ((!f || _ & /*pluginGroups*/
      1) && a !== (a = /*group*/
      b[5].title + "") && _e(s, a), _ & /*removeOne, pluginGroups*/
      5) {
        d = ye(
          /*group*/
          b[5].plugins
        );
        let k;
        for (k = 0; k < d.length; k += 1) {
          const H = Rl(b, d, k);
          g[k] ? (g[k].p(H, _), C(g[k], 1)) : (g[k] = Ll(H), g[k].c(), C(g[k], 1), g[k].m(u, null));
        }
        for (ie(), k = d.length; k < g.length; k += 1)
          p(k);
        re();
      }
    },
    i(b) {
      if (!f) {
        for (let _ = 0; _ < d.length; _ += 1)
          C(g[_]);
        f = !0;
      }
    },
    o(b) {
      g = g.filter(Boolean);
      for (let _ = 0; _ < g.length; _ += 1)
        y(g[_]);
      f = !1;
    },
    d(b) {
      b && D(e), ze(g, b);
    }
  };
}
function ru(n) {
  let e, t, l, i, r, a, s;
  r = new vt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #FF203A; --mdc-theme-on-primary: var(--on-brand)",
      "aria-label": "Remove all plugins",
      $$slots: { default: [iu] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*removeAllPlugins*/
    n[1]
  );
  let o = ye(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let f = 0; f < o.length; f += 1)
    u[f] = El(Sl(n, o, f));
  const c = (f) => y(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      e = F("div"), t = F("div"), l = F("p"), l.textContent = "Process", i = U(), V(r.$$.fragment), a = U();
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      v(l, "class", "svelte-12ozoaz"), v(t, "class", "plugins-list__header svelte-12ozoaz"), v(e, "class", "plugins-list svelte-12ozoaz");
    },
    m(f, d) {
      P(f, e, d), G(e, t), G(t, l), G(t, i), O(r, t, null), G(e, a);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(e, null);
      s = !0;
    },
    p(f, [d]) {
      const g = {};
      if (d & /*$$scope*/
      2048 && (g.$$scope = { dirty: d, ctx: f }), r.$set(g), d & /*pluginGroups, removeOne*/
      5) {
        o = ye(
          /*pluginGroups*/
          f[0]
        );
        let p;
        for (p = 0; p < o.length; p += 1) {
          const b = Sl(f, o, p);
          u[p] ? (u[p].p(b, d), C(u[p], 1)) : (u[p] = El(b), u[p].c(), C(u[p], 1), u[p].m(e, null));
        }
        for (ie(), p = o.length; p < u.length; p += 1)
          c(p);
        re();
      }
    },
    i(f) {
      if (!s) {
        C(r.$$.fragment, f);
        for (let d = 0; d < o.length; d += 1)
          C(u[d]);
        s = !0;
      }
    },
    o(f) {
      y(r.$$.fragment, f), u = u.filter(Boolean);
      for (let d = 0; d < u.length; d += 1)
        y(u[d]);
      s = !1;
    },
    d(f) {
      f && D(e), N(r), ze(u, f);
    }
  };
}
function su(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = Ye(), r = () => i("removeAllPlugins"), a = (o, u) => {
    const c = l[o], f = c.plugins[u];
    i("removePlugin", { groupIndex: o, pluginIndex: u, group: c, plugin: f });
  }, s = (o, u) => a(o, u);
  return n.$$set = (o) => {
    "pluginGroups" in o && t(0, l = o.pluginGroups);
  }, [l, r, a, s];
}
class au extends x {
  constructor(e) {
    super(), $(this, e, su, ru, Q, { pluginGroups: 0 });
  }
}
function ou(n) {
  let e, t;
  return e = new au({
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
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function uu(n, e, t) {
  let { pluginGroups: l = [] } = e, { proc: i = null } = e;
  const r = (s) => console.log("remove all plugins", s), a = (s) => console.log("remove one", s.detail);
  return n.$$set = (s) => {
    "pluginGroups" in s && t(0, l = s.pluginGroups), "proc" in s && t(1, i = s.proc);
  }, [l, i, r, a];
}
class cu extends x {
  constructor(e) {
    super(), $(this, e, uu, ou, Q, { pluginGroups: 0, proc: 1 });
  }
}
const fu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", du = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyBJRUQgbmFtZXMgZm9sbG93IHRoZSBuYW1pbmcgY29udmVudGlvbiwgYWxsb3dlZCBjaGFyYWN0ZXJzLCBhbmQgdW5pcXVlbmVzcyB3aXRoaW4gdGhlIHByb2plY3QuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2staWVkLW5hbWUtZm9ybWF0PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmFwLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+QWNjZXNzIFBvaW50IENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgQWNjZXNzUG9pbnQgZWxlbWVudHMgaGF2ZSByZXF1aXJlZCBhdHRyaWJ1dGVzIGFuZCB2YWxpZCByZWZlcmVuY2VzIHRvIHNlcnZlci9zZXJ2aWNlcy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPlZhbGlkYXRlcyBsb2dpY2FsIG5vZGVzIGFyZSBjb3JyZWN0bHkgYXNzaWduZWQgd2l0aCB2YWxpZCBsbkNsYXNzL2xuSW5zdCBjb21iaW5hdGlvbnMgYW5kIHJlcXVpcmVkIExOcyBhcmUgcHJlc2VudC48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", gu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyB2b2x0YWdlIGxldmVsIG5hbWVzIGFyZSB1bmlxdWUgd2l0aGluIHRoZSBzdWJzdGF0aW9uLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmFsaWRhdGVzIGJheSBuYW1lcyBmb2xsb3cgdGhlIG5hbWluZyBjb252ZW50aW9uIGFuZCBhcmUgdW5pcXVlIHdpdGhpbiB0aGVpciB2b2x0YWdlIGxldmVsLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cg==", mu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgYWxsIHJlcXVpcmVkIHRlbXBsYXRlIGlucHV0IGZpZWxkcyBhcmUgcHJvdmlkZWQgYW5kIG5vbi1lbXB0eS48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1yZXF1aXJlZC1pbnB1dHM8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctbmFtaW5nLTAwMjwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBOYW1pbmcgQ29udmVudGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIHRlbXBsYXRlIG5hbWVzIGZvbGxvdyB0aGUgZGVmaW5lZCBuYW1pbmcgY29udmVudGlvbiBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXRlbXBsYXRlLW5hbWluZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1jb21wYXQtMDAzPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIENvbXBhdGliaWxpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+Q2hlY2tzIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBzZWxlY3RlZCBwcm9maWxlcyBvciB2ZXJzaW9ucy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
function Hl(n, e, t) {
  const l = n.slice();
  return l[23] = e[t], l[25] = t, l;
}
function Gl(n, e, t) {
  const l = n.slice();
  return l[26] = e[t], l[28] = t, l;
}
function Dl(n, e, t) {
  const l = n.slice();
  return l[29] = e[t], l[25] = t, l;
}
function Pl(n) {
  let e, t = ye(
    /*group*/
    n[26].plugins
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = Ml(Dl(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = ve();
    },
    m(i, r) {
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(i, r);
      P(i, e, r);
    },
    p(i, r) {
      if (r & /*selectedIdx, activePluginIdx, selectPlugin, pluginGroups*/
      1031) {
        t = ye(
          /*group*/
          i[26].plugins
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const s = Dl(i, t, a);
          l[a] ? l[a].p(s, r) : (l[a] = Ml(s), l[a].c(), l[a].m(e.parentNode, e));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && D(e), ze(l, i);
    }
  };
}
function Ml(n) {
  let e, t, l = (
    /*plugin*/
    n[29].name + ""
  ), i, r, a, s;
  function o() {
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
      e = F("button"), t = F("span"), i = le(l), r = U(), v(e, "type", "button"), v(e, "class", "validation-groups__plugin svelte-1t9loaq"), qe(
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
      P(u, e, c), G(e, t), G(t, i), G(e, r), a || (s = Y(e, "click", o), a = !0);
    },
    p(u, c) {
      n = u, c & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      n[29].name + "") && _e(i, l), c & /*selectedIdx, activePluginIdx*/
      6 && qe(
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
      u && D(e), a = !1, s();
    }
  };
}
function Tl(n) {
  let e, t, l = (
    /*group*/
    n[26].title + ""
  ), i, r, a, s, o, u;
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
    n[1] && Pl(n)
  );
  return {
    c() {
      e = F("div"), t = F("button"), i = le(l), a = U(), f && f.c(), s = U(), v(t, "type", "button"), v(t, "class", "validation-groups__group-title svelte-1t9loaq"), v(t, "aria-pressed", r = /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1]), v(e, "class", "validation-groups__group svelte-1t9loaq"), qe(
        e,
        "expanded",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1]
      );
    },
    m(d, g) {
      P(d, e, g), G(e, t), G(t, i), G(e, a), f && f.m(e, null), G(e, s), o || (u = Y(t, "click", c), o = !0);
    },
    p(d, g) {
      n = d, g & /*pluginGroups*/
      1 && l !== (l = /*group*/
      n[26].title + "") && _e(i, l), g & /*selectedIdx*/
      2 && r !== (r = /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1]) && v(t, "aria-pressed", r), /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1] ? f ? f.p(n, g) : (f = Pl(n), f.c(), f.m(e, s)) : f && (f.d(1), f = null), g & /*selectedIdx*/
      2 && qe(
        e,
        "expanded",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1]
      );
    },
    d(d) {
      d && D(e), f && f.d(), o = !1, u();
    }
  };
}
function Zl(n) {
  let e, t, l, i;
  const r = [_u, bu, pu, hu], a = [];
  function s(o, u) {
    return (
      /*loadingXml*/
      o[5] ? 0 : (
        /*xmlError*/
        o[6] ? 1 : (
          /*validationEntries*/
          o[7].length === 0 ? 2 : 3
        )
      )
    );
  }
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), l = ve();
    },
    m(o, u) {
      a[e].m(o, u), P(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (ie(), y(a[c], 1, 1, () => {
        a[c] = null;
      }), re(), t = a[e], t ? t.p(o, u) : (t = a[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      y(t), i = !1;
    },
    d(o) {
      o && D(l), a[e].d(o);
    }
  };
}
function hu(n) {
  let e, t, l = ye(
    /*validationEntries*/
    n[7]
  ), i = [];
  for (let a = 0; a < l.length; a += 1)
    i[a] = Bl(Hl(n, l, a));
  const r = (a) => y(i[a], 1, 1, () => {
    i[a] = null;
  });
  return {
    c() {
      e = F("div");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      v(e, "class", "validation-xml-list svelte-1t9loaq");
    },
    m(a, s) {
      P(a, e, s);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      t = !0;
    },
    p(a, s) {
      if (s & /*validationEntries, openSet, toggleEntry*/
      2432) {
        l = ye(
          /*validationEntries*/
          a[7]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = Hl(a, l, o);
          i[o] ? (i[o].p(u, s), C(i[o], 1)) : (i[o] = Bl(u), i[o].c(), C(i[o], 1), i[o].m(e, null));
        }
        for (ie(), o = l.length; o < i.length; o += 1)
          r(o);
        re();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < l.length; s += 1)
          C(i[s]);
        t = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        y(i[s]);
      t = !1;
    },
    d(a) {
      a && D(e), ze(i, a);
    }
  };
}
function pu(n) {
  let e, t, l, i = (
    /*currentPlugin*/
    n[3].name + ""
  ), r, a, s, o, u;
  return {
    c() {
      e = F("div"), t = F("h4"), l = le("XML for: "), r = le(i), a = U(), s = F("div"), o = F("pre"), u = le(
        /*xmlText*/
        n[4]
      ), v(t, "class", "xml-viewer__title svelte-1t9loaq"), v(o, "class", "svelte-1t9loaq"), v(s, "class", "xml-viewer__box svelte-1t9loaq"), v(e, "class", "xml-viewer svelte-1t9loaq");
    },
    m(c, f) {
      P(c, e, f), G(e, t), G(t, l), G(t, r), G(e, a), G(e, s), G(s, o), G(o, u);
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
    i: K,
    o: K,
    d(c) {
      c && D(e);
    }
  };
}
function bu(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = le(
        /*xmlError*/
        n[6]
      ), v(e, "class", "error svelte-1t9loaq");
    },
    m(l, i) {
      P(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*xmlError*/
      64 && _e(
        t,
        /*xmlError*/
        l[6]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function _u(n) {
  let e;
  return {
    c() {
      e = F("p"), e.textContent = "Loading…";
    },
    m(t, l) {
      P(t, e, l);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && D(e);
    }
  };
}
function Fl(n) {
  let e, t = (
    /*validationEntry*/
    n[23].description + ""
  ), l;
  return {
    c() {
      e = F("span"), l = le(t), v(e, "class", "validation-xml-container__description svelte-1t9loaq");
    },
    m(i, r) {
      P(i, e, r), G(e, l);
    },
    p(i, r) {
      r & /*validationEntries*/
      128 && t !== (t = /*validationEntry*/
      i[23].description + "") && _e(l, t);
    },
    d(i) {
      i && D(e);
    }
  };
}
function vu(n) {
  let e, t, l, i, r;
  t = new Ta({ props: { svgStyles: "fill: #004552" } });
  function a() {
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
      e = F("button"), V(t.$$.fragment), v(e, "type", "button"), v(e, "class", "toggle-btn svelte-1t9loaq"), v(e, "aria-expanded", "false"), v(e, "title", "Expand");
    },
    m(s, o) {
      P(s, e, o), O(t, e, null), l = !0, i || (r = Y(e, "click", a), i = !0);
    },
    p(s, o) {
      n = s;
    },
    i(s) {
      l || (C(t.$$.fragment, s), l = !0);
    },
    o(s) {
      y(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && D(e), N(t), i = !1, r();
    }
  };
}
function Cu(n) {
  let e, t, l, i, r;
  t = new Ga({ props: { svgStyles: "fill: #004552" } });
  function a() {
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
      e = F("button"), V(t.$$.fragment), v(e, "type", "button"), v(e, "class", "toggle-btn svelte-1t9loaq"), v(e, "aria-expanded", "true"), v(e, "title", "Collapse");
    },
    m(s, o) {
      P(s, e, o), O(t, e, null), l = !0, i || (r = Y(e, "click", a), i = !0);
    },
    p(s, o) {
      n = s;
    },
    i(s) {
      l || (C(t.$$.fragment, s), l = !0);
    },
    o(s) {
      y(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && D(e), N(t), i = !1, r();
    }
  };
}
function Wl(n) {
  let e, t, l, i = (
    /*validationEntry*/
    n[23].xml + ""
  ), r;
  return {
    c() {
      e = F("div"), t = F("div"), l = F("pre"), r = le(i), v(l, "class", "svelte-1t9loaq"), v(t, "class", "xml-viewer__box svelte-1t9loaq"), v(e, "class", "xml-viewer svelte-1t9loaq");
    },
    m(a, s) {
      P(a, e, s), G(e, t), G(t, l), G(l, r);
    },
    p(a, s) {
      s & /*validationEntries*/
      128 && i !== (i = /*validationEntry*/
      a[23].xml + "") && _e(r, i);
    },
    d(a) {
      a && D(e);
    }
  };
}
function Bl(n) {
  let e, t, l, i = (
    /*validationEntry*/
    n[23].name + ""
  ), r, a, s, o, u, c, f, d, g, p, b, _ = (
    /*openSet*/
    n[8].has(
      /*idx*/
      n[25]
    )
  ), k, H, I = (
    /*validationEntry*/
    n[23].description && Fl(n)
  );
  c = new ia({ props: { svgStyles: "fill: #FF203A" } });
  const m = [Cu, vu], L = [];
  function E(R, B) {
    return B & /*openSet*/
    256 && (d = null), d == null && (d = !!/*openSet*/
    R[8].has(
      /*idx*/
      R[25]
    )), d ? 0 : 1;
  }
  g = E(n, -1), p = L[g] = m[g](n);
  let h = _ && Wl(n);
  return {
    c() {
      e = F("div"), t = F("div"), l = F("span"), r = le(i), a = U(), I && I.c(), s = U(), o = F("div"), u = F("button"), V(c.$$.fragment), f = U(), p.c(), b = U(), h && h.c(), k = U(), v(l, "class", "validation-xml-container__name svelte-1t9loaq"), v(u, "type", "button"), v(u, "class", "delete-btn svelte-1t9loaq"), v(u, "title", "Remove"), v(o, "class", "validaton-xml-container__actions svelte-1t9loaq"), v(t, "class", "validation-xml-container__meta svelte-1t9loaq"), v(e, "class", "validation-xml-container svelte-1t9loaq");
    },
    m(R, B) {
      P(R, e, B), G(e, t), G(t, l), G(l, r), G(t, a), I && I.m(t, null), G(t, s), G(t, o), G(o, u), O(c, u, null), G(o, f), L[g].m(o, null), G(e, b), h && h.m(e, null), G(e, k), H = !0;
    },
    p(R, B) {
      (!H || B & /*validationEntries*/
      128) && i !== (i = /*validationEntry*/
      R[23].name + "") && _e(r, i), /*validationEntry*/
      R[23].description ? I ? I.p(R, B) : (I = Fl(R), I.c(), I.m(t, s)) : I && (I.d(1), I = null);
      let M = g;
      g = E(R, B), g === M ? L[g].p(R, B) : (ie(), y(L[M], 1, 1, () => {
        L[M] = null;
      }), re(), p = L[g], p ? p.p(R, B) : (p = L[g] = m[g](R), p.c()), C(p, 1), p.m(o, null)), B & /*openSet*/
      256 && (_ = /*openSet*/
      R[8].has(
        /*idx*/
        R[25]
      )), _ ? h ? h.p(R, B) : (h = Wl(R), h.c(), h.m(e, k)) : h && (h.d(1), h = null);
    },
    i(R) {
      H || (C(c.$$.fragment, R), C(p), H = !0);
    },
    o(R) {
      y(c.$$.fragment, R), y(p), H = !1;
    },
    d(R) {
      R && D(e), I && I.d(), N(c), L[g].d(), h && h.d();
    }
  };
}
function Iu(n) {
  let e, t, l, i, r = ye(
    /*pluginGroups*/
    n[0]
  ), a = [];
  for (let o = 0; o < r.length; o += 1)
    a[o] = Tl(Gl(n, r, o));
  let s = (
    /*currentPlugin*/
    n[3] && Zl(n)
  );
  return {
    c() {
      e = F("div");
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      t = U(), s && s.c(), l = ve(), v(e, "class", "validation-groups svelte-1t9loaq");
    },
    m(o, u) {
      P(o, e, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(e, null);
      P(o, t, u), s && s.m(o, u), P(o, l, u), i = !0;
    },
    p(o, [u]) {
      if (u & /*selectedIdx, pluginGroups, activePluginIdx, selectPlugin, selectGroup*/
      1543) {
        r = ye(
          /*pluginGroups*/
          o[0]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const f = Gl(o, r, c);
          a[c] ? a[c].p(f, u) : (a[c] = Tl(f), a[c].c(), a[c].m(e, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = r.length;
      }
      /*currentPlugin*/
      o[3] ? s ? (s.p(o, u), u & /*currentPlugin*/
      8 && C(s, 1)) : (s = Zl(o), s.c(), C(s, 1), s.m(l.parentNode, l)) : s && (ie(), y(s, 1, 1, () => {
        s = null;
      }), re());
    },
    i(o) {
      i || (C(s), i = !0);
    },
    o(o) {
      y(s), i = !1;
    },
    d(o) {
      o && (D(e), D(t), D(l)), ze(a, o), s && s.d(o);
    }
  };
}
function yu(n, e, t) {
  let l, i, r;
  var a, s, o;
  let { pluginGroups: u = [] } = e, c = null, f = null, d = "", g = !1, p = "", b = null, _ = [], k = /* @__PURE__ */ new Set();
  function H(M) {
    return Nt(this, void 0, void 0, function* () {
      t(5, g = !0), t(6, p = ""), t(4, d = ""), t(7, _ = []), t(8, k = /* @__PURE__ */ new Set()), b == null || b.abort(), b = new AbortController();
      try {
        const A = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": fu, "../../assets/validations/ied-editor.xml": du, "../../assets/validations/substation-explorer.xml": gu, "../../assets/validations/template-generator.xml": mu }))[`../../assets/validations/${M}.xml`], import.meta.url).href, W = yield fetch(A, {
          cache: "no-cache",
          signal: b.signal
        });
        if (!W.ok) {
          if (W.status === 404) {
            t(4, d = "(No XML found for this plugin.)");
            return;
          }
          throw new Error(`HTTP ${W.status}`);
        }
        t(4, d = yield W.text());
        const X = new DOMParser().parseFromString(d, "application/xml");
        if (X.querySelector("parsererror"))
          throw new Error("Invalid XML format.");
        const ke = new XMLSerializer(), Ce = Array.from(X.getElementsByTagName("validation"));
        t(7, _ = Ce.map((j, w) => {
          var z, me, be, De, Te, de, Ze;
          const je = ((z = j.getAttribute("name")) === null || z === void 0 ? void 0 : z.trim()) || ((me = j.getAttribute("id")) === null || me === void 0 ? void 0 : me.trim()) || ((De = (be = j.querySelector("name")) === null || be === void 0 ? void 0 : be.textContent) === null || De === void 0 ? void 0 : De.trim()) || `Validation ${w + 1}`, Je = ((Te = j.getAttribute("description")) === null || Te === void 0 ? void 0 : Te.trim()) || ((Ze = (de = j.querySelector("description")) === null || de === void 0 ? void 0 : de.textContent) === null || Ze === void 0 ? void 0 : Ze.trim()) || void 0, Qe = ke.serializeToString(j);
          return { name: je, description: Je, xml: Qe };
        })), t(8, k = /* @__PURE__ */ new Set());
      } catch (A) {
        if ((A == null ? void 0 : A.name) === "AbortError")
          return;
        t(6, p = (A == null ? void 0 : A.message) || "Failed to load XML.");
      } finally {
        t(5, g = !1);
      }
    });
  }
  function I(M) {
    var A;
    const W = u[M];
    t(1, c = M), t(2, f = !((A = W == null ? void 0 : W.plugins) === null || A === void 0) && A.length ? 0 : null);
  }
  function m(M, A) {
    t(1, c = M), t(2, f = A);
  }
  function L(M) {
    k.has(M) ? k.delete(M) : k.add(M), t(8, k = new Set(k));
  }
  const E = (M) => I(M), h = (M, A) => m(M, A), R = (M) => L(M), B = (M) => L(M);
  return n.$$set = (M) => {
    "pluginGroups" in M && t(0, u = M.pluginGroups);
  }, n.$$.update = () => {
    n.$$.dirty & /*pluginGroups, selectedIdx, _a, _b*/
    12291 && u != null && u.length && (c == null || c >= u.length) && (t(1, c = 0), t(2, f = !(t(13, s = t(12, a = u[0]) === null || a === void 0 ? void 0 : a.plugins) === null || s === void 0) && s.length ? 0 : null)), n.$$.dirty & /*selectedIdx, pluginGroups*/
    3 && t(16, l = c != null ? u[c] : null), n.$$.dirty & /*currentGroup, activePluginIdx*/
    65540 && t(3, i = l && f != null ? l.plugins[f] : null), n.$$.dirty & /*currentPlugin, _c*/
    16392 && t(15, r = t(14, o = i == null ? void 0 : i.id) !== null && o !== void 0 ? o : null), n.$$.dirty & /*currentPluginId*/
    32768 && r && H(r);
  }, [
    u,
    c,
    f,
    i,
    d,
    g,
    p,
    _,
    k,
    I,
    m,
    L,
    a,
    s,
    o,
    r,
    l,
    E,
    h,
    R,
    B
  ];
}
class Au extends x {
  constructor(e) {
    super(), $(this, e, yu, Iu, Q, { pluginGroups: 0 });
  }
}
function ku(n) {
  let e, t, l, i, r, a, s, o;
  return l = new un({
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
  ), r = new vt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [Su] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*startProcess*/
    n[9]
  ), s = new Ko({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), s.$on(
    "editRequested",
    /*startEditing*/
    n[10]
  ), {
    c() {
      e = F("div"), t = F("div"), V(l.$$.fragment), i = U(), V(r.$$.fragment), a = U(), V(s.$$.fragment), v(t, "class", "header svelte-evkqad"), v(e, "class", "step-content svelte-evkqad");
    },
    m(u, c) {
      P(u, e, c), G(e, t), O(l, t, null), G(t, i), O(r, t, null), G(e, a), O(s, e, null), o = !0;
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
      u[3]), s.$set(g);
    },
    i(u) {
      o || (C(l.$$.fragment, u), C(r.$$.fragment, u), C(s.$$.fragment, u), o = !0);
    },
    o(u) {
      y(l.$$.fragment, u), y(r.$$.fragment, u), y(s.$$.fragment, u), o = !1;
    },
    d(u) {
      u && D(e), N(l), N(r), N(s);
    }
  };
}
function wu(n) {
  let e, t, l, i, r, a, s, o, u, c, f, d, g, p, b, _, k, H;
  t = new ri({}), t.$on(
    "back",
    /*exitEditing*/
    n[11]
  ), i = new jo({
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
  const I = [Lu, Ru], m = [];
  function L(E, h) {
    return (
      /*currentStepId*/
      E[2] === "process-definition" ? 0 : (
        /*currentStepId*/
        E[2] === "validator-configuration" ? 1 : -1
      )
    );
  }
  return ~(p = L(n)) && (b = m[p] = I[p](n)), {
    c() {
      e = F("div"), V(t.$$.fragment), l = U(), V(i.$$.fragment), r = U(), a = F("div"), s = F("button"), o = le("Back"), u = U(), c = F("button"), f = le("Next"), d = U(), g = F("div"), b && b.c(), v(s, "type", "button"), v(s, "class", "btn btn--back svelte-evkqad"), s.disabled = /*isAtFirstStep*/
      n[5], v(s, "aria-label", "Previous step"), v(c, "type", "button"), v(c, "class", "btn btn--next svelte-evkqad"), c.disabled = /*isAtLastStep*/
      n[6], v(c, "aria-label", "Next step"), v(a, "class", "stepper-navigation svelte-evkqad"), v(e, "class", "stepper svelte-evkqad"), v(g, "class", "step-content svelte-evkqad");
    },
    m(E, h) {
      P(E, e, h), O(t, e, null), G(e, l), O(i, e, null), G(e, r), G(e, a), G(a, s), G(s, o), G(a, u), G(a, c), G(c, f), P(E, d, h), P(E, g, h), ~p && m[p].m(g, null), _ = !0, k || (H = [
        Y(
          s,
          "click",
          /*goToPreviousStep*/
          n[14]
        ),
        Y(
          c,
          "click",
          /*goToNextStep*/
          n[13]
        )
      ], k = !0);
    },
    p(E, h) {
      const R = {};
      h & /*currentStepId*/
      4 && (R.currentId = /*currentStepId*/
      E[2]), h & /*visitedSteps*/
      16 && (R.visited = /*visitedSteps*/
      E[4]), i.$set(R), (!_ || h & /*isAtFirstStep*/
      32) && (s.disabled = /*isAtFirstStep*/
      E[5]), (!_ || h & /*isAtLastStep*/
      64) && (c.disabled = /*isAtLastStep*/
      E[6]);
      let B = p;
      p = L(E), p === B ? ~p && m[p].p(E, h) : (b && (ie(), y(m[B], 1, 1, () => {
        m[B] = null;
      }), re()), ~p ? (b = m[p], b ? b.p(E, h) : (b = m[p] = I[p](E), b.c()), C(b, 1), b.m(g, null)) : b = null);
    },
    i(E) {
      _ || (C(t.$$.fragment, E), C(i.$$.fragment, E), C(b), _ = !0);
    },
    o(E) {
      y(t.$$.fragment, E), y(i.$$.fragment, E), y(b), _ = !1;
    },
    d(E) {
      E && (D(e), D(d), D(g)), N(t), N(i), ~p && m[p].d(), k = !1, he(H);
    }
  };
}
function Su(n) {
  let e;
  return {
    c() {
      e = le("START PROCESS");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Ru(n) {
  let e, t, l, i, r, a, s;
  return t = new un({
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
  ), i = new vt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Add validation",
      $$slots: { default: [Eu] },
      $$scope: { ctx: n }
    }
  }), i.$on("click", Ul), a = new Au({
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
  }), a.$on("addValidation", Ul), a.$on(
    "breadcrumbClick",
    /*handleBreadcrumbClick*/
    n[8]
  ), {
    c() {
      e = F("div"), V(t.$$.fragment), l = U(), V(i.$$.fragment), r = U(), V(a.$$.fragment), v(e, "class", "header svelte-evkqad");
    },
    m(o, u) {
      P(o, e, u), O(t, e, null), G(e, l), O(i, e, null), P(o, r, u), O(a, o, u), s = !0;
    },
    p(o, u) {
      const c = {};
      u & /*breadcrumbs*/
      128 && (c.breadcrumbs = /*breadcrumbs*/
      o[7]), t.$set(c);
      const f = {};
      u & /*currentProcess*/
      1 && (f.disabled = !/*currentProcess*/
      o[0]), u & /*$$scope*/
      524288 && (f.$$scope = { dirty: u, ctx: o }), i.$set(f);
      const d = {};
      u & /*pluginGroups*/
      8 && (d.pluginGroups = /*pluginGroups*/
      o[3]), u & /*currentProcess*/
      1 && (d.currentProcess = /*currentProcess*/
      o[0]), u & /*breadcrumbs*/
      128 && (d.breadcrumbs = /*breadcrumbs*/
      o[7]), a.$set(d);
    },
    i(o) {
      s || (C(t.$$.fragment, o), C(i.$$.fragment, o), C(a.$$.fragment, o), s = !0);
    },
    o(o) {
      y(t.$$.fragment, o), y(i.$$.fragment, o), y(a.$$.fragment, o), s = !1;
    },
    d(o) {
      o && (D(e), D(r)), N(t), N(i), N(a, o);
    }
  };
}
function Lu(n) {
  let e, t, l, i, r;
  return t = new un({
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
  ), i = new cu({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), {
    c() {
      e = F("div"), V(t.$$.fragment), l = U(), V(i.$$.fragment), v(e, "class", "header svelte-evkqad");
    },
    m(a, s) {
      P(a, e, s), O(t, e, null), P(a, l, s), O(i, a, s), r = !0;
    },
    p(a, s) {
      const o = {};
      s & /*breadcrumbs*/
      128 && (o.breadcrumbs = /*breadcrumbs*/
      a[7]), t.$set(o);
      const u = {};
      s & /*pluginGroups*/
      8 && (u.pluginGroups = /*pluginGroups*/
      a[3]), i.$set(u);
    },
    i(a) {
      r || (C(t.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      y(t.$$.fragment, a), y(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && (D(e), D(l)), N(t), N(i, a);
    }
  };
}
function Eu(n) {
  let e;
  return {
    c() {
      e = le("ADD NEW VALIDATION");
    },
    m(t, l) {
      P(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Hu(n) {
  let e, t, l, i;
  const r = [wu, ku], a = [];
  function s(o, u) {
    return (
      /*isEditing*/
      o[1] ? 0 : 1
    );
  }
  return t = s(n), l = a[t] = r[t](n), {
    c() {
      e = F("div"), l.c(), v(e, "class", "page-content svelte-evkqad");
    },
    m(o, u) {
      P(o, e, u), a[t].m(e, null), i = !0;
    },
    p(o, [u]) {
      let c = t;
      t = s(o), t === c ? a[t].p(o, u) : (ie(), y(a[c], 1, 1, () => {
        a[c] = null;
      }), re(), l = a[t], l ? l.p(o, u) : (l = a[t] = r[t](o), l.c()), C(l, 1), l.m(e, null));
    },
    i(o) {
      i || (C(l), i = !0);
    },
    o(o) {
      y(l), i = !1;
    },
    d(o) {
      o && D(e), a[t].d();
    }
  };
}
function Ul() {
  alert("Add New Validation clicked!");
}
function Gu(n, e, t) {
  let l, i, r, { currentProcess: a = null } = e;
  const s = ["process-definition", "validator-configuration"], o = Ye();
  let u = !1, c = 0, f = s[0], d = [], g = [];
  function p(E) {
    E.detail.index === 0 && (tt.set(!0), o("back"));
  }
  function b() {
    a && o("start", a);
  }
  function _() {
    t(1, u = !0), tt.set(!1), t(15, c = 0), t(4, g = []);
  }
  function k() {
    t(1, u = !1), tt.set(!0), o("back");
  }
  function H(E) {
    const h = s.indexOf(E.detail);
    h !== -1 && t(15, c = h);
  }
  function I(E) {
    g.includes(E) || t(4, g = [...g, E]);
  }
  function m() {
    i || (I(f), t(15, c += 1), o("next"));
  }
  function L() {
    l || (t(15, c -= 1), o("previous"));
  }
  return n.$$set = (E) => {
    "currentProcess" in E && t(0, a = E.currentProcess);
  }, n.$$.update = () => {
    n.$$.dirty & /*currentStepIndex*/
    32768 && t(2, f = s[c]), n.$$.dirty & /*currentStepIndex*/
    32768 && t(5, l = c === 0), n.$$.dirty & /*currentStepIndex*/
    32768 && t(6, i = c === s.length - 1), n.$$.dirty & /*currentProcess, isEditing*/
    3 && t(7, r = $o(a, { edit: u })), n.$$.dirty & /*currentProcess*/
    1 && t(3, d = xo(a));
  }, [
    a,
    u,
    f,
    d,
    g,
    l,
    i,
    r,
    p,
    b,
    _,
    k,
    H,
    m,
    L,
    c
  ];
}
class Du extends x {
  constructor(e) {
    super(), $(this, e, Gu, Hu, Q, { currentProcess: 0 });
  }
}
function Pu(n) {
  let e, t;
  return e = new ii({
    props: {
      items: (
        /*plugins*/
        n[0].map(Ol)
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
      O(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*plugins*/
      1 && (r.items = /*plugins*/
      l[0].map(Ol)), i & /*visited*/
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
const Ol = (n) => ({ id: n.id, label: n.name });
function Mu(n, e, t) {
  let l, { plugins: i = [] } = e, { visited: r = [] } = e, { currentId: a = null } = e, { pluginStatus: s = {} } = e;
  const o = Ye(), u = (c) => {
    const f = i.find((d) => d.id === c.detail);
    f && o("select", f);
  };
  return n.$$set = (c) => {
    "plugins" in c && t(0, i = c.plugins), "visited" in c && t(1, r = c.visited), "currentId" in c && t(2, a = c.currentId), "pluginStatus" in c && t(3, s = c.pluginStatus);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    9 && t(4, l = i.reduce(
      (c, f) => {
        const d = s[f.id];
        return c[f.id] = d ?? "", c;
      },
      {}
    ));
  }, [i, r, a, s, l, u];
}
class Tu extends x {
  constructor(e) {
    super(), $(this, e, Mu, Pu, Q, {
      plugins: 0,
      visited: 1,
      currentId: 2,
      pluginStatus: 3
    });
  }
}
function Nl(n) {
  let e, t = (
    /*tagName*/
    n[3]
  ), l = (
    /*tagName*/
    n[3] && tn(n)
  );
  return {
    c() {
      e = F("div"), l && l.c(), v(e, "class", "plugin-container svelte-178enya");
    },
    m(i, r) {
      P(i, e, r), l && l.m(e, null);
    },
    p(i, r) {
      /*tagName*/
      i[3] ? t ? Q(
        t,
        /*tagName*/
        i[3]
      ) ? (l.d(1), l = tn(i), t = /*tagName*/
      i[3], l.c(), l.m(e, null)) : l.p(i, r) : (l = tn(i), t = /*tagName*/
      i[3], l.c(), l.m(e, null)) : t && (l.d(1), l = null, t = /*tagName*/
      i[3]);
    },
    d(i) {
      i && D(e), l && l.d(i);
    }
  };
}
function tn(n) {
  let e, t, l, i;
  return {
    c() {
      e = F(
        /*tagName*/
        n[3]
      ), Lt(
        /*tagName*/
        n[3]
      )(e, { class: "svelte-178enya" });
    },
    m(r, a) {
      P(r, e, a), l || (i = te(t = Fu.call(null, e, {
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
    p(r, a) {
      t && pe(t.update) && a & /*doc, editCount*/
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
      r && D(e), l = !1, i();
    }
  };
}
function Zu(n) {
  let e, t, l, i, r, a, s, o, u, c, f, d, g, p, b, _, k, H;
  t = new ri({}), t.$on(
    "back",
    /*exitWorkflow*/
    n[9]
  ), i = new Tu({
    props: {
      plugins: (
        /*plugins*/
        n[2]
      ),
      visited: (
        /*visited*/
        n[4]
      ),
      currentId: (
        /*tagName*/
        n[3]
      ),
      pluginStatus: (
        /*pluginStatus*/
        n[5]
      )
    }
  }), i.$on(
    "select",
    /*select_handler*/
    n[12]
  );
  let I = (
    /*tagName*/
    n[3] && Nl(n)
  );
  return {
    c() {
      e = F("div"), V(t.$$.fragment), l = U(), V(i.$$.fragment), r = U(), a = F("div"), s = F("button"), o = le("Back"), c = U(), f = F("button"), d = le("Next"), p = U(), I && I.c(), b = ve(), v(s, "type", "button"), v(s, "class", "back-button svelte-178enya"), v(s, "aria-label", "Previous plugin"), s.disabled = u = !/*plugins*/
      n[2].length, v(f, "type", "button"), v(f, "class", "next-button svelte-178enya"), v(f, "aria-label", "Next plugin"), f.disabled = g = !/*plugins*/
      n[2].length, v(a, "class", "stepper-navigation svelte-178enya"), v(e, "class", "stepper svelte-178enya");
    },
    m(m, L) {
      P(m, e, L), O(t, e, null), G(e, l), O(i, e, null), G(e, r), G(e, a), G(a, s), G(s, o), G(a, c), G(a, f), G(f, d), P(m, p, L), I && I.m(m, L), P(m, b, L), _ = !0, k || (H = [
        Y(
          s,
          "click",
          /*previousPlugin*/
          n[8]
        ),
        Y(
          f,
          "click",
          /*nextPlugin*/
          n[7]
        )
      ], k = !0);
    },
    p(m, [L]) {
      const E = {};
      L & /*plugins*/
      4 && (E.plugins = /*plugins*/
      m[2]), L & /*visited*/
      16 && (E.visited = /*visited*/
      m[4]), L & /*tagName*/
      8 && (E.currentId = /*tagName*/
      m[3]), L & /*pluginStatus*/
      32 && (E.pluginStatus = /*pluginStatus*/
      m[5]), i.$set(E), (!_ || L & /*plugins*/
      4 && u !== (u = !/*plugins*/
      m[2].length)) && (s.disabled = u), (!_ || L & /*plugins*/
      4 && g !== (g = !/*plugins*/
      m[2].length)) && (f.disabled = g), /*tagName*/
      m[3] ? I ? I.p(m, L) : (I = Nl(m), I.c(), I.m(b.parentNode, b)) : I && (I.d(1), I = null);
    },
    i(m) {
      _ || (C(t.$$.fragment, m), C(i.$$.fragment, m), _ = !0);
    },
    o(m) {
      y(t.$$.fragment, m), y(i.$$.fragment, m), _ = !1;
    },
    d(m) {
      m && (D(e), D(p), D(b)), N(t), N(i), I && I.d(m), k = !1, he(H);
    }
  };
}
function Fu(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Wu(n, e, t) {
  let l, { doc: i } = e, { editCount: r = -1 } = e, { host: a } = e, { plugins: s = [] } = e;
  const o = ["check", "warning", "error"];
  let u = null, c = [], f = {};
  const d = Ye();
  function g(I) {
    return Nt(this, void 0, void 0, function* () {
      if (I && (yield nu(I), t(3, u = I.id), !c.includes(I.id))) {
        t(4, c = [...c, I.id]);
        const m = s.findIndex((L) => L.id === I.id);
        t(5, f = Object.assign(Object.assign({}, f), {
          [I.id]: o[m % o.length]
        }));
      }
    });
  }
  function p(I) {
    if (!s.length)
      return;
    const m = l < 0 ? 0 : (l + I + s.length) % s.length;
    g(s[m]);
  }
  function b() {
    p(1);
  }
  function _() {
    p(-1);
  }
  Oe(() => {
    s.length && lu(s).catch(console.error), tt.set(!1);
  }), ct(() => {
    tt.set(!0);
  });
  function k() {
    tt.set(!0), d("exit");
  }
  const H = (I) => g(I.detail);
  return n.$$set = (I) => {
    "doc" in I && t(0, i = I.doc), "editCount" in I && t(1, r = I.editCount), "host" in I && t(10, a = I.host), "plugins" in I && t(2, s = I.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*tagName, plugins*/
    12 && t(11, l = u ? s.findIndex((I) => I.id === u) : -1), n.$$.dirty & /*plugins, currentIndex, tagName*/
    2060 && s.length && (l === -1 || !s.some((I) => I.id === u)) && g(s[0]);
  }, [
    i,
    r,
    s,
    u,
    c,
    f,
    g,
    b,
    _,
    k,
    a,
    l,
    H
  ];
}
class Bu extends x {
  constructor(e) {
    super(), $(this, e, Wu, Zu, Q, {
      doc: 0,
      editCount: 1,
      host: 10,
      plugins: 2
    });
  }
}
function Vl(n) {
  let e, t, l, i, r, a, s, o;
  return r = new Bu({
    props: {
      doc: (
        /*doc*/
        n[1]
      ),
      editCount: (
        /*editCount*/
        n[2]
      ),
      host: (
        /*host*/
        n[3]
      ),
      plugins: (
        /*plugins*/
        n[4]
      )
    }
  }), r.$on(
    "exit",
    /*onChildExit*/
    n[7]
  ), {
    c() {
      e = F("div"), t = F("div"), l = F("h2"), l.textContent = "Engineering Workflow", i = U(), V(r.$$.fragment), v(l, "id", "ewf-title"), v(l, "class", "sr-only svelte-if64uc"), v(t, "class", "ewf-dialog-panel svelte-if64uc"), v(t, "role", "document"), v(e, "class", "ewf-dialog-backdrop svelte-if64uc"), v(e, "role", "dialog"), v(e, "aria-modal", "true"), v(e, "aria-labelledby", "ewf-title"), v(e, "tabindex", "-1");
    },
    m(u, c) {
      P(u, e, c), G(e, t), G(t, l), G(t, i), O(r, t, null), n[9](e), a = !0, s || (o = Y(e, "click", ji(
        /*onBackdropClick*/
        n[6]
      )), s = !0);
    },
    p(u, c) {
      const f = {};
      c & /*doc*/
      2 && (f.doc = /*doc*/
      u[1]), c & /*editCount*/
      4 && (f.editCount = /*editCount*/
      u[2]), c & /*host*/
      8 && (f.host = /*host*/
      u[3]), c & /*plugins*/
      16 && (f.plugins = /*plugins*/
      u[4]), r.$set(f);
    },
    i(u) {
      a || (C(r.$$.fragment, u), a = !0);
    },
    o(u) {
      y(r.$$.fragment, u), a = !1;
    },
    d(u) {
      u && D(e), N(r), n[9](null), s = !1, o();
    }
  };
}
function Uu(n) {
  let e, t, l = (
    /*open*/
    n[0] && Vl(n)
  );
  return {
    c() {
      l && l.c(), e = ve();
    },
    m(i, r) {
      l && l.m(i, r), P(i, e, r), t = !0;
    },
    p(i, [r]) {
      /*open*/
      i[0] ? l ? (l.p(i, r), r & /*open*/
      1 && C(l, 1)) : (l = Vl(i), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (ie(), y(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(i) {
      t || (C(l), t = !0);
    },
    o(i) {
      y(l), t = !1;
    },
    d(i) {
      i && D(e), l && l.d(i);
    }
  };
}
function Ou(n, e, t) {
  let { open: l } = e, { doc: i } = e, { editCount: r = -1 } = e, { host: a } = e, { plugins: s = [] } = e, o = !1, u, c = null;
  const f = (b) => {
    o || (o = !0, tt.set(!0), Xs(b));
  }, d = () => f("exit"), g = () => f("exit");
  function p(b) {
    ee[b ? "unshift" : "push"](() => {
      c = b, t(5, c);
    });
  }
  return n.$$set = (b) => {
    "open" in b && t(0, l = b.open), "doc" in b && t(1, i = b.doc), "editCount" in b && t(2, r = b.editCount), "host" in b && t(3, a = b.host), "plugins" in b && t(4, s = b.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*open, prevOpen, backdropEl*/
    289 && l !== u && (t(8, u = l), l ? (o = !1, c == null || c.focus()) : f("cancel"));
  }, [
    l,
    i,
    r,
    a,
    s,
    c,
    d,
    g,
    u,
    p
  ];
}
class Nu extends x {
  constructor(e) {
    super(), $(this, e, Ou, Uu, Q, {
      open: 0,
      doc: 1,
      editCount: 2,
      host: 3,
      plugins: 4
    });
  }
}
function Vu(n) {
  let e, t;
  return e = new Po({
    props: {
      processes: (
        /*processes*/
        n[0]
      ),
      loading: (
        /*loading*/
        n[2]
      ),
      errorMsg: (
        /*errorMsg*/
        n[3]
      )
    }
  }), e.$on(
    "view",
    /*handleView*/
    n[4]
  ), e.$on(
    "start",
    /*handleStart*/
    n[5]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*processes*/
      1 && (r.processes = /*processes*/
      l[0]), i & /*loading*/
      4 && (r.loading = /*loading*/
      l[2]), i & /*errorMsg*/
      8 && (r.errorMsg = /*errorMsg*/
      l[3]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function zu(n) {
  let e, t;
  return e = new Du({
    props: { currentProcess: (
      /*selected*/
      n[1]
    ) }
  }), e.$on(
    "back",
    /*goBack*/
    n[6]
  ), e.$on(
    "start",
    /*handleStart*/
    n[5]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      O(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selected*/
      2 && (r.currentProcess = /*selected*/
      l[1]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function ju(n) {
  let e, t, l, i, r, a;
  e = new js({});
  const s = [zu, Vu], o = [];
  function u(c, f) {
    return (
      /*selected*/
      c[1] ? 0 : 1
    );
  }
  return l = u(n), i = o[l] = s[l](n), {
    c() {
      V(e.$$.fragment), t = U(), i.c(), r = ve();
    },
    m(c, f) {
      O(e, c, f), P(c, t, f), o[l].m(c, f), P(c, r, f), a = !0;
    },
    p(c, [f]) {
      let d = l;
      l = u(c), l === d ? o[l].p(c, f) : (ie(), y(o[d], 1, 1, () => {
        o[d] = null;
      }), re(), i = o[l], i ? i.p(c, f) : (i = o[l] = s[l](c), i.c()), C(i, 1), i.m(r.parentNode, r));
    },
    i(c) {
      a || (C(e.$$.fragment, c), C(i), a = !0);
    },
    o(c) {
      y(e.$$.fragment, c), y(i), a = !1;
    },
    d(c) {
      c && (D(t), D(r)), N(e, c), o[l].d(c);
    }
  };
}
function qu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, a = [], s = null, o = !0, u = "";
  const c = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGF0YTwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLWV4cGxvcmVyPC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnN0YXRpb248L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, f = (m) => {
    var L, E;
    return (E = (L = m == null ? void 0 : m.textContent) === null || L === void 0 ? void 0 : L.trim()) !== null && E !== void 0 ? E : "";
  }, d = (m) => ({
    id: f(m.querySelector("id")),
    name: f(m.querySelector("name")),
    src: f(m.querySelector("src"))
  }), g = (m) => Array.from(m.querySelectorAll("process")).map((L) => {
    const E = Array.from(L.querySelectorAll("plugins-sequence > group")), h = E.length ? E.map((B) => ({
      title: f(B.querySelector(":scope > title")),
      plugins: Array.from(B.querySelectorAll(":scope > plugin")).map(d)
    })) : void 0, R = h ? h.flatMap((B) => B.plugins) : Array.from(L.querySelectorAll("plugins-sequence > plugin")).map(d);
    return {
      id: f(L.querySelector(":scope > id")),
      version: f(L.querySelector(":scope > version")),
      name: f(L.querySelector(":scope > name")),
      description: f(L.querySelector(":scope > description")),
      plugins: R,
      pluginGroups: h
    };
  });
  let p = null;
  function b() {
    return Nt(this, void 0, void 0, function* () {
      t(2, o = !0), t(3, u = "");
      const m = new AbortController();
      p == null || p.abort(), p = m;
      try {
        const L = yield fetch(c, {
          cache: "no-cache",
          signal: m.signal
        });
        if (!L.ok)
          throw new Error(`HTTP ${L.status}`);
        const E = yield L.text(), h = new DOMParser().parseFromString(E, "application/xml");
        if (h.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        if (m !== p)
          return;
        t(0, a = g(h));
      } catch (L) {
        if ((L == null ? void 0 : L.name) === "AbortError")
          return;
        t(0, a = []), t(3, u = L.message || "Failed to load processes.");
      } finally {
        m === p && t(2, o = !1);
      }
    });
  }
  Oe(b), ct(() => p == null ? void 0 : p.abort());
  function _(m) {
    qs(Nu, {
      doc: l,
      editCount: i,
      host: r,
      plugins: m.plugins
    }), t(1, s = null);
  }
  function k(m) {
    t(1, s = m.detail);
  }
  function H(m) {
    _(m.detail);
  }
  function I() {
    t(1, s = null);
  }
  return n.$$set = (m) => {
    "doc" in m && t(7, l = m.doc), "editCount" in m && t(8, i = m.editCount), "host" in m && t(9, r = m.host);
  }, n.$$.update = () => {
    n.$$.dirty & /*editCount, doc*/
    384 && Ys({ editCount: i, doc: l });
  }, [
    a,
    s,
    o,
    u,
    k,
    H,
    I,
    l,
    i,
    r
  ];
}
class Xu extends x {
  constructor(e) {
    super(), $(this, e, qu, ju, Q, { doc: 7, editCount: 8, host: 9 });
  }
}
function zl(n) {
  let e, t;
  return e = new Xu({
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
      O(e, l, i), t = !0;
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
      y(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Yu(n) {
  let e, t, l, i, r, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && zl(n)
  );
  return {
    c() {
      a && a.c(), e = U(), t = F("input"), l = U(), i = F("input"), v(t, "type", "hidden"), v(t, "name", "package-name"), t.value = Ql, v(i, "type", "hidden"), v(i, "name", "package-version"), i.value = Kl;
    },
    m(s, o) {
      a && a.m(s, o), P(s, e, o), P(s, t, o), P(s, l, o), P(s, i, o), r = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? a ? (a.p(s, o), o & /*doc, dev*/
      3 && C(a, 1)) : (a = zl(s), a.c(), C(a, 1), a.m(e.parentNode, e)) : a && (ie(), y(a, 1, 1, () => {
        a = null;
      }), re());
    },
    i(s) {
      r || (C(a), r = !0);
    },
    o(s) {
      y(a), r = !1;
    },
    d(s) {
      s && (D(e), D(t), D(l), D(i)), a && a.d(s);
    }
  };
}
function Ju(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (a) => {
    "doc" in a && t(0, l = a.doc), "dev" in a && t(1, i = a.dev), "editCount" in a && t(2, r = a.editCount);
  }, [l, i, r];
}
class Qu extends x {
  constructor(e) {
    super(), $(this, e, Ju, Yu, Q, { doc: 0, dev: 1, editCount: 2 });
  }
}
class ec extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Qu({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = Ku();
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
function Ku() {
  const n = `${Ql}-v${Kl}-style`, e = $u(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function $u() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  ec as default
};
