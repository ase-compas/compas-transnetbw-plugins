var Ui = Object.defineProperty;
var Oi = (n, e, t) => e in n ? Ui(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Xt = (n, e, t) => (Oi(n, typeof e != "symbol" ? e + "" : e, t), t);
function Q() {
}
function z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Nl(n) {
  return n();
}
function fn() {
  return /* @__PURE__ */ Object.create(null);
}
function he(n) {
  n.forEach(Nl);
}
function _e(n) {
  return typeof n == "function";
}
function J(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Wi(n) {
  return Object.keys(n).length === 0;
}
function Bi(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return Q;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ft(n, e, t) {
  n.$$.on_destroy.push(Bi(e, t));
}
function re(n, e, t, l) {
  if (n) {
    const i = ql(n, e, t, l);
    return n[0](i);
  }
}
function ql(n, e, t, l) {
  return n[1] && l ? z(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function se(n, e, t, l) {
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
function ae(n, e, t, l, i, r) {
  if (i) {
    const s = ql(e, t, l, r);
    n.p(s, i);
  }
}
function oe(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Te(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function de(n, e) {
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
  return n && _e(n.destroy) ? n.destroy : Q;
}
const Zi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
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
function U(n) {
  return document.createElement(n);
}
function Ee(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ne(n) {
  return document.createTextNode(n);
}
function W() {
  return ne(" ");
}
function ye() {
  return ne("");
}
function K(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function I(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ni = ["width", "height"];
function ie(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Ni.indexOf(l) === -1 ? n[l] = e[l] : I(n, l, e[l]);
}
function dn(n, e) {
  for (const t in e)
    I(n, t, e[t]);
}
function qi(n, e) {
  Object.keys(e).forEach((t) => {
    Vi(n, t, e[t]);
  });
}
function Vi(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : I(n, e, t);
}
function St(n) {
  return /-/.test(n) ? qi : ie;
}
function ji(n) {
  return Array.from(n.childNodes);
}
function be(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function gn(n, e) {
  n.value = e ?? "";
}
function Yt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function je(n, e, t) {
  n.classList.toggle(e, !!t);
}
function zi(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Ut(n, e) {
  return new n(e);
}
let Lt;
function yt(n) {
  Lt = n;
}
function Re() {
  if (!Lt)
    throw new Error("Function called outside component initialization");
  return Lt;
}
function Ze(n) {
  Re().$$.on_mount.push(n);
}
function Zt(n) {
  Re().$$.on_destroy.push(n);
}
function ze() {
  const n = Re();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = zi(
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
function He(n, e) {
  return Re().$$.context.set(n, e), e;
}
function We(n) {
  return Re().$$.context.get(n);
}
function Ot(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ct = [], le = [];
let dt = [];
const nn = [], Vl = /* @__PURE__ */ Promise.resolve();
let ln = !1;
function jl() {
  ln || (ln = !0, Vl.then(zl));
}
function Xi() {
  return jl(), Vl;
}
function rn(n) {
  dt.push(n);
}
function Qe(n) {
  nn.push(n);
}
const Kt = /* @__PURE__ */ new Set();
let ot = 0;
function zl() {
  if (ot !== 0)
    return;
  const n = Lt;
  do {
    try {
      for (; ot < ct.length; ) {
        const e = ct[ot];
        ot++, yt(e), Yi(e.$$);
      }
    } catch (e) {
      throw ct.length = 0, ot = 0, e;
    }
    for (yt(null), ct.length = 0, ot = 0; le.length; )
      le.pop()();
    for (let e = 0; e < dt.length; e += 1) {
      const t = dt[e];
      Kt.has(t) || (Kt.add(t), t());
    }
    dt.length = 0;
  } while (ct.length);
  for (; nn.length; )
    nn.pop()();
  ln = !1, Kt.clear(), yt(n);
}
function Yi(n) {
  if (n.fragment !== null) {
    n.update(), he(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(rn);
  }
}
function Ki(n) {
  const e = [], t = [];
  dt.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), dt = e;
}
const Gt = /* @__PURE__ */ new Set();
let st;
function ue() {
  st = {
    r: 0,
    c: [],
    p: st
    // parent group
  };
}
function ce() {
  st.r || he(st.c), st = st.p;
}
function C(n, e) {
  n && n.i && (Gt.delete(n), n.i(e));
}
function S(n, e, t, l) {
  if (n && n.o) {
    if (Gt.has(n))
      return;
    Gt.add(n), st.c.push(() => {
      Gt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Ae(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Qi(n, e) {
  S(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Ji(n, e, t, l, i, r, s, o, a, u, c, f) {
  let d = n.length, g = r.length, p = d;
  const h = {};
  for (; p--; )
    h[n[p].key] = p;
  const b = [], R = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), L = [];
  for (p = g; p--; ) {
    const m = f(i, r, p), E = t(m);
    let B = s.get(E);
    B ? L.push(() => B.p(m, e)) : (B = u(E, m), B.c()), R.set(E, b[p] = B), E in h && y.set(E, Math.abs(p - h[E]));
  }
  const _ = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
  function v(m) {
    C(m, 1), m.m(o, c), s.set(m.key, m), c = m.first, g--;
  }
  for (; d && g; ) {
    const m = b[g - 1], E = n[d - 1], B = m.key, G = E.key;
    m === E ? (c = m.first, d--, g--) : R.has(G) ? !s.has(B) || _.has(B) ? v(m) : F.has(G) ? d-- : y.get(B) > y.get(G) ? (F.add(B), v(m)) : (_.add(G), d--) : (a(E, s), d--);
  }
  for (; d--; ) {
    const m = n[d];
    R.has(m.key) || a(m, s);
  }
  for (; g; )
    v(b[g - 1]);
  return he(L), b;
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
function Se(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Je(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function V(n) {
  n && n.c();
}
function N(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), rn(() => {
    const r = n.$$.on_mount.map(Nl).filter(_e);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : he(r), n.$$.on_mount = [];
  }), i.forEach(rn);
}
function q(n, e) {
  const t = n.$$;
  t.fragment !== null && (Ki(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function $i(n, e) {
  n.$$.dirty[0] === -1 && (ct.push(n), jl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $(n, e, t, l, i, r, s = null, o = [-1]) {
  const a = Lt;
  yt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Q,
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
    const p = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = p) && (!u.skip_bound && u.bound[f] && u.bound[f](p), c && $i(n, f)), d;
  }) : [], u.update(), c = !0, he(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = ji(e.target);
      u.fragment && u.fragment.l(f), f.forEach(H);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), N(n, e.target, e.anchor), zl();
  }
  yt(a);
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
    q(this, 1), this.$destroy = Q;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!_e(t))
      return Q;
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
    this.$$set && !Wi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const xi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xi);
const Xl = "archive-explorer", Yl = "0.0.1";
var sn = function(n, e) {
  return sn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, sn(n, e);
};
function pt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  sn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ge = function() {
  return Ge = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ge.apply(this, arguments);
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
function er(n, e) {
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
function te(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Ie(n, e, t, l = { bubbles: !0 }, i = !1) {
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
function mt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i], s = r.indexOf("$");
    s !== -1 && e.indexOf(r.substring(0, s + 1)) !== -1 || e.indexOf(r) === -1 && (l[r] = n[r]);
  }
  return l;
}
const mn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, tr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ue(n) {
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
      const d = u.match(mn), g = u.match(tr), p = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const R = u.split(":");
        let y = "";
        for (let L = 0; L < R.length; L++)
          y += L === R.length - 1 ? ":" + R[L] : R[L].split("-").map((_) => _.slice(0, 1).toUpperCase() + _.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${y.split("$")[0]}.`), u = y;
      }
      if (p) {
        const R = u.split(d ? ":" : "$");
        u = R[0];
        const y = R.slice(1).reduce((L, _) => (L[_] = !0, L), {});
        y.passive && (f = f || {}, f.passive = !0), y.nonpassive && (f = f || {}, f.passive = !1), y.capture && (f = f || {}, f.capture = !0), y.once && (f = f || {}, f.once = !0), y.preventDefault && (c = nr(c)), y.stopPropagation && (c = lr(c)), y.stopImmediatePropagation && (c = ir(c)), y.self && (c = rr(i, c)), y.trusted && (c = sr(c));
      }
      const h = hn(i, u, c, f), b = () => {
        h();
        const R = r.indexOf(b);
        R > -1 && r.splice(R, 1);
      };
      return r.push(b), u in s || (s[u] = hn(i, u, l)), b;
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
function nr(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function lr(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function ir(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function rr(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function sr(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function De(n, e) {
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
function ar(n, e) {
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
function or(n, e, t) {
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
function ur(n) {
  return n === void 0 && (n = window), cr(n) ? { passive: !0 } : !1;
}
function cr(n) {
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
const Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ur
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
function fr(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Ql(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ql(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function dr(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: fr,
  estimateScrollWidth: dr,
  matches: Ql
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
var gr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, mr = {
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
], Tt = [], hr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      var l = n.call(this, Ge(Ge({}, e.defaultAdapter), t)) || this;
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
        return gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mr;
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
          for (var r = $e(_n), s = r.next(); !s.done; s = r.next()) {
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
          for (var r = $e(bn), s = r.next(); !s.done; s = r.next()) {
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
        for (var i = $e(_n), r = i.next(); !r.done; r = i.next()) {
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
        for (var i = $e(bn), r = i.next(); !r.done; r = i.next()) {
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
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, p = d.endPoint;
        c = g.x + "px, " + g.y + "px", f = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = or(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
        var i = Ge({}, l);
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
const { applyPassive: Ft } = Kl, { matches: pr } = Jl;
function kt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: o, eventTarget: a, activeTarget: u, addClass: c = (p) => n.classList.add(p), removeClass: f = (p) => n.classList.remove(p), addStyle: d = (p, h) => n.style.setProperty(p, h), initPromise: g = Promise.resolve() } = {}) {
  let p, h = We("SMUI:addLayoutListener"), b, R = s, y = a, L = u;
  function _() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && R !== s && (R = s, s ? p.activate() : s === !1 && p.deactivate()), e && !p ? (p = new hr({
      addClass: c,
      browserSupportsCssVars: () => ar(window),
      computeBoundingRect: () => (o || n).getBoundingClientRect(),
      containsEventTarget: (v) => n.contains(v),
      deregisterDocumentInteractionHandler: (v, m) => document.documentElement.removeEventListener(v, m, Ft()),
      deregisterInteractionHandler: (v, m) => (a || n).removeEventListener(v, m, Ft()),
      deregisterResizeHandler: (v) => window.removeEventListener("resize", v),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? pr(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (v, m) => document.documentElement.addEventListener(v, m, Ft()),
      registerInteractionHandler: (v, m) => (a || n).addEventListener(v, m, Ft()),
      registerResizeHandler: (v) => window.addEventListener("resize", v),
      removeClass: f,
      updateCssVariable: d
    }), g.then(() => {
      p && (p.init(), p.setUnbounded(l));
    })) : p && !e && g.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (y !== a || L !== u) && (y = a, L = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  _(), h && (b = h(F));
  function F() {
    p && p.layout();
  }
  return {
    update(v) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (m) => n.classList.add(m), removeClass: (m) => n.classList.remove(m), addStyle: (m, E) => n.style.setProperty(m, E), initPromise: Promise.resolve() }, v)), _();
    },
    destroy() {
      p && (p.destroy(), p = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), b && b();
    }
  };
}
function _r(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Qt(n)
  );
  return {
    c() {
      i && i.c(), t = ye();
    },
    m(r, s) {
      i && i.m(r, s), M(r, t, s), l = !0;
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? J(
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
      S(i, r), l = !1;
    },
    d(r) {
      r && H(t), i && i.d(r);
    }
  };
}
function br(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Jt(n)
  );
  return {
    c() {
      l && l.c(), t = ye();
    },
    m(i, r) {
      l && l.m(i, r), M(i, t, r);
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? J(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = Jt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Jt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: Q,
    o: Q,
    d(i) {
      i && H(t), l && l.d(i);
    }
  };
}
function vr(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), o = re(
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
      e = Ee("svg"), o && o.c(), dn(e, u);
    },
    m(c, f) {
      M(c, e, f), o && o.m(e, null), n[9](e), l = !0, i || (r = [
        ee(t = Le.call(
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
      128) && ae(
        o,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? se(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), dn(e, u = fe(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && _e(t.update) && f & /*use*/
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
      S(o, c), l = !1;
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
  ), o = re(
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
      e = U(
        /*tag*/
        n[1]
      ), o && o.c(), St(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      M(c, e, f), o && o.m(e, null), n[11](e), l = !0, i || (r = [
        ee(t = Le.call(
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
      128) && ae(
        o,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? se(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), St(
        /*tag*/
        c[1]
      )(e, u = fe(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && _e(t.update) && f & /*use*/
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
      S(o, c), l = !1;
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
      e = U(
        /*tag*/
        n[1]
      ), St(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(o, a) {
      M(o, e, a), n[10](e), l || (i = [
        ee(t = Le.call(
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
      o[5]])), t && _e(t.update) && a & /*use*/
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
function Cr(n) {
  let e, t, l, i;
  const r = [vr, br, _r], s = [];
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
      t.c(), l = ye();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (ue(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ce(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      S(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function Ir(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = de(e, i), { $$slots: s = {}, $$scope: o } = e, { use: a = [] } = e, { tag: u } = e;
  const c = Ue(Re());
  let f;
  function d() {
    return f;
  }
  function g(b) {
    le[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  function p(b) {
    le[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  function h(b) {
    le[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  return n.$$set = (b) => {
    e = z(z({}, e), Te(b)), t(5, r = de(e, i)), "use" in b && t(0, a = b.use), "tag" in b && t(1, u = b.tag), "$$scope" in b && t(7, o = b.$$scope);
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
    p,
    h
  ];
}
class Wt extends x {
  constructor(e) {
    super(), $(this, e, Ir, Cr, J, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const ut = [];
function wt(n, e = Q) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(o) {
    if (J(n, o) && (n = o, t)) {
      const a = !ut.length;
      for (const u of l)
        u[1](), ut.push(u, n);
      if (a) {
        for (let u = 0; u < ut.length; u += 2)
          ut[u][0](ut[u + 1]);
        ut.length = 0;
      }
    }
  }
  function r(o) {
    i(o(n));
  }
  function s(o, a = Q) {
    const u = [o, a];
    return l.add(u), l.size === 1 && (t = e(i, r) || Q), o(n), () => {
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
  ), l = re(
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
      8) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? se(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : oe(
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
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function yr(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: o } = e;
  const a = wt(o);
  return ft(n, a, (u) => t(5, l = u)), He(s, a), Zt(() => {
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
    super(), $(this, e, yr, Ar, J, { key: 1, value: 2 });
  }
}
function vn(n) {
  let e;
  return {
    c() {
      e = U("div"), I(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function kr(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = re(
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
      e = U("div"), t = W(), s && s.c(), o && o.c(), l = ye(), I(e, "class", "mdc-button__ripple");
    },
    m(a, u) {
      M(a, e, u), M(a, t, u), s && s.m(a, u), o && o.m(a, u), M(a, l, u), i = !0;
    },
    p(a, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && ae(
        s,
        r,
        a,
        /*$$scope*/
        a[30],
        i ? se(
          r,
          /*$$scope*/
          a[30],
          u,
          null
        ) : oe(
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
      S(s, a), i = !1;
    },
    d(a) {
      a && (H(e), H(t), H(l)), s && s.d(a), o && o.d(a);
    }
  };
}
function wr(n) {
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
      $$slots: { default: [kr] },
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
      65536 && Se(
        /*actionProp*/
        o[16]
      ),
      a[0] & /*defaultProp*/
      32768 && Se(
        /*defaultProp*/
        o[15]
      ),
      a[0] & /*secondaryProp*/
      16384 && Se(
        /*secondaryProp*/
        o[14]
      ),
      a[0] & /*href*/
      128 && { href: (
        /*href*/
        o[7]
      ) },
      a[0] & /*$$restProps*/
      8388608 && Se(
        /*$$restProps*/
        o[23]
      )
    ]))), { props: u };
  }
  return r && (e = Ut(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && V(e.$$.fragment), t = ye();
    },
    m(o, a) {
      e && N(e, o, a), M(o, t, a), l = !0;
    },
    p(o, a) {
      if (a[0] & /*component*/
      512 && r !== (r = /*component*/
      o[9])) {
        if (e) {
          ue();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            q(u, 1);
          }), ce();
        }
        r ? (e = Ut(r, s(o, a)), o[29](e), e.$on(
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
          65536 && Se(
            /*actionProp*/
            o[16]
          ),
          a[0] & /*defaultProp*/
          32768 && Se(
            /*defaultProp*/
            o[15]
          ),
          a[0] & /*secondaryProp*/
          16384 && Se(
            /*secondaryProp*/
            o[14]
          ),
          a[0] & /*href*/
          128 && { href: (
            /*href*/
            o[7]
          ) },
          a[0] & /*$$restProps*/
          8388608 && Se(
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
      e && S(e.$$.fragment, o), l = !1;
    },
    d(o) {
      o && H(t), n[29](null), e && q(e, o);
    }
  };
}
const $t = ([n, e]) => `${n}: ${e};`;
function Sr(n, e, t) {
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
  let o = de(e, s), { $$slots: a = {}, $$scope: u } = e;
  const c = Ue(Re());
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: p = !0 } = e, { color: h = "primary" } = e, { variant: b = "text" } = e, { touch: R = !1 } = e, { href: y = void 0 } = e, { action: L = "close" } = e, { defaultAction: _ = !1 } = e, { secondary: F = !1 } = e, v, m = {}, E = {}, B = We("SMUI:button:context"), { component: G = Wt } = e, { tag: k = G === Wt ? y == null ? "button" : "a" : void 0 } = e, O = o.disabled;
  He("SMUI:label:context", "button"), He("SMUI:icon:context", "button");
  function D(A) {
    m[A] || t(12, m[A] = !0, m);
  }
  function X(A) {
    (!(A in m) || m[A]) && t(12, m[A] = !1, m);
  }
  function ke(A, Z) {
    E[A] != Z && (Z === "" || Z == null ? (delete E[A], t(13, E)) : t(13, E[A] = Z, E));
  }
  function Ce() {
    B === "banner" && Ie(pe(), F ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function pe() {
    return v.getElement();
  }
  function j(A) {
    le[A ? "unshift" : "push"](() => {
      v = A, t(11, v);
    });
  }
  return n.$$set = (A) => {
    t(31, e = z(z({}, e), Te(A))), t(23, o = de(e, s)), "use" in A && t(0, f = A.use), "class" in A && t(1, d = A.class), "style" in A && t(2, g = A.style), "ripple" in A && t(3, p = A.ripple), "color" in A && t(4, h = A.color), "variant" in A && t(5, b = A.variant), "touch" in A && t(6, R = A.touch), "href" in A && t(7, y = A.href), "action" in A && t(24, L = A.action), "defaultAction" in A && t(25, _ = A.defaultAction), "secondary" in A && t(8, F = A.secondary), "component" in A && t(9, G = A.component), "tag" in A && t(10, k = A.tag), "$$scope" in A && t(30, u = A.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = B === "dialog:action" && L != null ? { "data-mdc-dialog-action": L } : { action: e.action }), t(15, i = B === "dialog:action" && _ ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = B === "banner" ? {} : { secondary: e.secondary }), O !== o.disabled) {
      if (v) {
        const A = pe();
        "blur" in A && A.blur();
      }
      t(27, O = o.disabled);
    }
  }, e = Te(e), [
    f,
    d,
    g,
    p,
    h,
    b,
    R,
    y,
    F,
    G,
    k,
    v,
    m,
    E,
    r,
    i,
    l,
    c,
    B,
    D,
    X,
    ke,
    Ce,
    o,
    L,
    _,
    pe,
    O,
    a,
    j,
    u
  ];
}
class ht extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Sr,
      wr,
      J,
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
var Lr = {
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
var Rr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      var l = n.call(this, Ge(Ge({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Lr;
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
var it = {
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
var Er = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      var l = n.call(this, Ge(Ge({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return it;
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
      this.adapter.removeClass(it.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(it.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(it.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(it.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(it.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(it.LINE_RIPPLE_DEACTIVATING));
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
var Pr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Cn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Dr = {
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
var Hr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      return n.call(this, Ge(Ge({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Dr;
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
}, Mr = {
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
}, Tr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Fr = [
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
var An = ["mousedown", "touchstart"], yn = ["click", "keydown"], Gr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, Ge(Ge({}, e.defaultAdapter), t)) || this;
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
        return Mr;
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
        return Fr.indexOf(t) >= 0;
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
        for (var s = $e(An), o = s.next(); !o.done; o = s.next()) {
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
        for (var u = $e(yn), c = u.next(); !c.done; c = u.next()) {
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
        for (var s = $e(An), o = s.next(); !o.done; o = s.next()) {
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
        for (var u = $e(yn), c = u.next(); !c.done; c = u.next()) {
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
        return Tr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
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
  }(_t)
);
function Ur(n) {
  let e, t, l, i, r, s, o, a;
  const u = (
    /*#slots*/
    n[22].default
  ), c = re(
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
      e = U("label"), c && c.c(), ie(e, d);
    },
    m(g, p) {
      M(g, e, p), c && c.m(e, null), n[24](e), s = !0, o || (a = [
        ee(r = Le.call(
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
    p(g, p) {
      c && c.p && (!s || p & /*$$scope*/
      2097152) && ae(
        c,
        u,
        g,
        /*$$scope*/
        g[21],
        s ? se(
          u,
          /*$$scope*/
          g[21],
          p,
          null
        ) : oe(
          /*$$scope*/
          g[21]
        ),
        null
      ), ie(e, d = fe(f, [
        (!s || p & /*className, floatAbove, required, internalClasses*/
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
        (!s || p & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(wn).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: l },
        (!s || p & /*forId*/
        32 && i !== (i = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: i },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), r && _e(r.update) && p & /*use*/
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
      S(c, g), s = !1;
    },
    d(g) {
      g && H(e), c && c.d(g), n[24](null), o = !1, he(a);
    }
  };
}
function Or(n) {
  let e, t, l, i, r, s, o;
  const a = (
    /*#slots*/
    n[22].default
  ), u = re(
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
      e = U("span"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[23](e), r = !0, s || (o = [
        ee(i = Le.call(
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
      2097152) && ae(
        u,
        a,
        d,
        /*$$scope*/
        d[21],
        r ? se(
          a,
          /*$$scope*/
          d[21],
          g,
          null
        ) : oe(
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
      ])), i && _e(i.update) && g & /*use*/
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
      S(u, d), r = !1;
    },
    d(d) {
      d && H(e), u && u.d(d), n[23](null), s = !1, he(o);
    }
  };
}
function Wr(n) {
  let e, t, l, i;
  const r = [Or, Ur], s = [];
  function o(a, u) {
    return (
      /*wrapped*/
      a[6] ? 0 : 1
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ye();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (ue(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ce(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      S(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
const kn = ([n, e]) => `${n}: ${e};`, wn = ([n, e]) => `${n}: ${e};`;
function Br(n, e, t) {
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
  let i = de(e, l), { $$slots: r = {}, $$scope: s } = e;
  var o;
  const a = Ue(Re());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: p = !1 } = e, { wrapped: h = !1 } = e, b, R, y = {}, L = {}, _ = (o = We("SMUI:generic:input:props")) !== null && o !== void 0 ? o : {}, F = g, v = p;
  Ze(() => {
    t(18, R = new Rr({
      addClass: m,
      removeClass: E,
      getWidth: () => {
        var A, Z;
        const ge = ke(), ve = ge.cloneNode(!0);
        (A = ge.parentNode) === null || A === void 0 || A.appendChild(ve), ve.classList.add("smui-floating-label--remove-transition"), ve.classList.add("smui-floating-label--force-size"), ve.classList.remove("mdc-floating-label--float-above");
        const Fe = ve.scrollWidth;
        return (Z = ge.parentNode) === null || Z === void 0 || Z.removeChild(ve), Fe;
      },
      registerInteractionHandler: (A, Z) => ke().addEventListener(A, Z),
      deregisterInteractionHandler: (A, Z) => ke().removeEventListener(A, Z)
    }));
    const j = {
      get element() {
        return ke();
      },
      addStyle: B,
      removeStyle: G
    };
    return Ie(b, "SMUIFloatingLabel:mount", j), R.init(), () => {
      Ie(b, "SMUIFloatingLabel:unmount", j), R.destroy();
    };
  });
  function m(j) {
    y[j] || t(8, y[j] = !0, y);
  }
  function E(j) {
    (!(j in y) || y[j]) && t(8, y[j] = !1, y);
  }
  function B(j, A) {
    L[j] != A && (A === "" || A == null ? (delete L[j], t(9, L)) : t(9, L[j] = A, L));
  }
  function G(j) {
    j in L && (delete L[j], t(9, L));
  }
  function k(j) {
    R.shake(j);
  }
  function O(j) {
    t(0, g = j);
  }
  function D(j) {
    t(1, p = j);
  }
  function X() {
    return R.getWidth();
  }
  function ke() {
    return b;
  }
  function Ce(j) {
    le[j ? "unshift" : "push"](() => {
      b = j, t(7, b);
    });
  }
  function pe(j) {
    le[j ? "unshift" : "push"](() => {
      b = j, t(7, b);
    });
  }
  return n.$$set = (j) => {
    e = z(z({}, e), Te(j)), t(12, i = de(e, l)), "use" in j && t(2, u = j.use), "class" in j && t(3, c = j.class), "style" in j && t(4, f = j.style), "for" in j && t(5, d = j.for), "floatAbove" in j && t(0, g = j.floatAbove), "required" in j && t(1, p = j.required), "wrapped" in j && t(6, h = j.wrapped), "$$scope" in j && t(21, s = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && R && F !== g && (t(19, F = g), R.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && R && v !== p && (t(20, v = p), R.setRequired(p));
  }, [
    g,
    p,
    u,
    c,
    f,
    d,
    h,
    b,
    y,
    L,
    a,
    _,
    i,
    k,
    O,
    D,
    X,
    ke,
    R,
    F,
    v,
    s,
    r,
    Ce,
    pe
  ];
}
class $l extends x {
  constructor(e) {
    super(), $(this, e, Br, Wr, J, {
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
function Zr(n) {
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
      e = U("div"), ie(e, a);
    },
    m(u, c) {
      M(u, e, c), n[13](e), r || (s = [
        ee(i = Le.call(
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
      ])), i && _e(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Q,
    o: Q,
    d(u) {
      u && H(e), n[13](null), r = !1, he(s);
    }
  };
}
const Sn = ([n, e]) => `${n}: ${e};`;
function Nr(n, e, t) {
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
  let i = de(e, l);
  const r = Ue(Re());
  let { use: s = [] } = e, { class: o = "" } = e, { style: a = "" } = e, { active: u = !1 } = e, c, f, d = {}, g = {};
  Ze(() => (f = new Er({
    addClass: h,
    removeClass: b,
    hasClass: p,
    setStyle: R,
    registerEventHandler: (m, E) => F().addEventListener(m, E),
    deregisterEventHandler: (m, E) => F().removeEventListener(m, E)
  }), f.init(), () => {
    f.destroy();
  }));
  function p(m) {
    return m in d ? d[m] : F().classList.contains(m);
  }
  function h(m) {
    d[m] || t(5, d[m] = !0, d);
  }
  function b(m) {
    (!(m in d) || d[m]) && t(5, d[m] = !1, d);
  }
  function R(m, E) {
    g[m] != E && (E === "" || E == null ? (delete g[m], t(6, g)) : t(6, g[m] = E, g));
  }
  function y() {
    f.activate();
  }
  function L() {
    f.deactivate();
  }
  function _(m) {
    f.setRippleCenter(m);
  }
  function F() {
    return c;
  }
  function v(m) {
    le[m ? "unshift" : "push"](() => {
      c = m, t(4, c);
    });
  }
  return n.$$set = (m) => {
    e = z(z({}, e), Te(m)), t(8, i = de(e, l)), "use" in m && t(0, s = m.use), "class" in m && t(1, o = m.class), "style" in m && t(2, a = m.style), "active" in m && t(3, u = m.active);
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
    y,
    L,
    _,
    F,
    v
  ];
}
class qr extends x {
  constructor(e) {
    super(), $(this, e, Nr, Zr, J, {
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
  ), r = re(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = U("div"), r && r.c(), I(e, "class", "mdc-notched-outline__notch"), I(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Rn).join(" "));
    },
    m(s, o) {
      M(s, e, o), r && r.m(e, null), l = !0;
    },
    p(s, o) {
      r && r.p && (!l || o & /*$$scope*/
      16384) && ae(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? se(
          i,
          /*$$scope*/
          s[14],
          o,
          null
        ) : oe(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!l || o & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        s[7]
      ).map(Rn).join(" "))) && I(e, "style", t);
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      S(r, s), l = !1;
    },
    d(s) {
      s && H(e), r && r.d(s);
    }
  };
}
function Vr(n) {
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
  for (let p = 0; p < d.length; p += 1)
    g = z(g, d[p]);
  return {
    c() {
      e = U("div"), t = U("div"), l = W(), f && f.c(), i = W(), r = U("div"), I(t, "class", "mdc-notched-outline__leading"), I(r, "class", "mdc-notched-outline__trailing"), ie(e, g);
    },
    m(p, h) {
      M(p, e, h), P(e, t), P(e, l), f && f.m(e, null), P(e, i), P(e, r), n[16](e), a = !0, u || (c = [
        ee(o = Le.call(
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
    p(p, [h]) {
      /*noLabel*/
      p[3] ? f && (ue(), S(f, 1, 1, () => {
        f = null;
      }), ce()) : f ? (f.p(p, h), h & /*noLabel*/
      8 && C(f, 1)) : (f = Ln(p), f.c(), C(f, 1), f.m(e, i)), ie(e, g = fe(d, [
        (!a || h & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = te({
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
        }))) && { class: s },
        h & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), o && _e(o.update) && h & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      a || (C(f), a = !0);
    },
    o(p) {
      S(f), a = !1;
    },
    d(p) {
      p && H(e), f && f.d(), n[16](null), u = !1, he(c);
    }
  };
}
const Rn = ([n, e]) => `${n}: ${e};`;
function jr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = de(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = Ue(Re());
  let { use: a = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, p, h = {}, b = {};
  Ze(() => (g = new Hr({
    addClass: y,
    removeClass: L,
    setNotchWidthProperty: (k) => _("width", k + "px"),
    removeNotchWidthProperty: () => F("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function R(k) {
    t(4, p = k.detail);
  }
  function y(k) {
    h[k] || t(6, h[k] = !0, h);
  }
  function L(k) {
    (!(k in h) || h[k]) && t(6, h[k] = !1, h);
  }
  function _(k, O) {
    b[k] != O && (O === "" || O == null ? (delete b[k], t(7, b)) : t(7, b[k] = O, b));
  }
  function F(k) {
    k in b && (delete b[k], t(7, b));
  }
  function v(k) {
    g.notch(k);
  }
  function m() {
    g.closeNotch();
  }
  function E() {
    return d;
  }
  function B(k) {
    le[k ? "unshift" : "push"](() => {
      d = k, t(5, d);
    });
  }
  const G = () => t(4, p = void 0);
  return n.$$set = (k) => {
    e = z(z({}, e), Te(k)), t(10, i = de(e, l)), "use" in k && t(0, a = k.use), "class" in k && t(1, u = k.class), "notched" in k && t(2, c = k.notched), "noLabel" in k && t(3, f = k.noLabel), "$$scope" in k && t(14, s = k.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (p ? (p.addStyle("transition-duration", "0s"), y("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      p && p.removeStyle("transition-duration");
    })) : L("mdc-notched-outline--upgraded"));
  }, [
    a,
    u,
    c,
    f,
    p,
    d,
    h,
    b,
    o,
    R,
    i,
    v,
    m,
    E,
    s,
    r,
    B,
    G
  ];
}
class zr extends x {
  constructor(e) {
    super(), $(this, e, jr, Vr, J, {
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
function Xr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = re(
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
      8192) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? se(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : oe(
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
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Yr(n) {
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
      $$slots: { default: [Xr] },
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
      128 && Se(
        /*props*/
        o[7]
      ),
      a & /*$$restProps*/
      512 && Se(
        /*$$restProps*/
        o[9]
      )
    ]))), { props: u };
  }
  return r && (e = Ut(r, s(n)), n[12](e)), {
    c() {
      e && V(e.$$.fragment), t = ye();
    },
    m(o, a) {
      e && N(e, o, a), M(o, t, a), l = !0;
    },
    p(o, [a]) {
      if (a & /*component*/
      4 && r !== (r = /*component*/
      o[2])) {
        if (e) {
          ue();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            q(u, 1);
          }), ce();
        }
        r ? (e = Ut(r, s(o, a)), o[12](e), V(e.$$.fragment), C(e.$$.fragment, 1), N(e, t.parentNode, t)) : e = null;
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
          128 && Se(
            /*props*/
            o[7]
          ),
          a & /*$$restProps*/
          512 && Se(
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
      e && S(e.$$.fragment, o), l = !1;
    },
    d(o) {
      o && H(t), n[12](null), e && q(e, o);
    }
  };
}
const Ye = {
  component: Wt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Kr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = de(e, l), { $$slots: r = {}, $$scope: s } = e, { use: o = [] } = e, { class: a = "" } = e, u;
  const c = Ye.class, f = {}, d = [], g = Ye.contexts, p = Ye.props;
  let { component: h = Ye.component } = e, { tag: b = h === Wt ? Ye.tag : void 0 } = e;
  Object.entries(Ye.classMap).forEach(([_, F]) => {
    const v = We(F);
    v && "subscribe" in v && d.push(v.subscribe((m) => {
      t(5, f[_] = m, f);
    }));
  });
  const R = Ue(Re());
  for (let _ in g)
    g.hasOwnProperty(_) && He(_, g[_]);
  Zt(() => {
    for (const _ of d)
      _();
  });
  function y() {
    return u.getElement();
  }
  function L(_) {
    le[_ ? "unshift" : "push"](() => {
      u = _, t(4, u);
    });
  }
  return n.$$set = (_) => {
    e = z(z({}, e), Te(_)), t(9, i = de(e, l)), "use" in _ && t(0, o = _.use), "class" in _ && t(1, a = _.class), "component" in _ && t(2, h = _.component), "tag" in _ && t(3, b = _.tag), "$$scope" in _ && t(13, s = _.$$scope);
  }, [
    o,
    a,
    h,
    b,
    u,
    f,
    c,
    p,
    R,
    i,
    y,
    r,
    L,
    s
  ];
}
class Qr extends x {
  constructor(e) {
    super(), $(this, e, Kr, Yr, J, {
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
const En = Object.assign({}, Ye);
function Me(n) {
  return new Proxy(Qr, {
    construct: function(e, t) {
      return Object.assign(Ye, En, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Ye, En, n), e[t];
    }
  });
}
const Jr = Me({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), $r = Me({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), xr = Me({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function es(n) {
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
      e = U("input"), ie(e, o);
    },
    m(a, u) {
      M(a, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        ee(l = Le.call(
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
      ])), l && _e(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i: Q,
    o: Q,
    d(a) {
      a && H(e), n[26](null), i = !1, he(r);
    }
  };
}
function ts(n) {
  return n === "" ? Number.NaN : +n;
}
function ns(n, e, t) {
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
  let i = de(e, l);
  const r = Ue(Re());
  let s = () => {
  };
  function o(A) {
    return A === s;
  }
  let { use: a = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const g = o(d);
  g && (d = "");
  let { files: p = null } = e, { dirty: h = !1 } = e, { invalid: b = !1 } = e, { updateInvalid: R = !0 } = e, { emptyValueNull: y = d === null } = e;
  g && y && (d = null);
  let { emptyValueUndefined: L = d === void 0 } = e;
  g && L && (d = void 0);
  let _, F = {}, v = {};
  Ze(() => {
    R && t(14, b = _.matches(":invalid"));
  });
  function m(A) {
    if (c === "file") {
      t(12, p = A.currentTarget.files);
      return;
    }
    if (A.currentTarget.value === "" && y) {
      t(11, d = null);
      return;
    }
    if (A.currentTarget.value === "" && L) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = ts(A.currentTarget.value));
        break;
      default:
        t(11, d = A.currentTarget.value);
        break;
    }
  }
  function E(A) {
    (c === "file" || c === "range") && m(A), t(13, h = !0), R && t(14, b = _.matches(":invalid"));
  }
  function B(A) {
    var Z;
    return A in F ? (Z = F[A]) !== null && Z !== void 0 ? Z : null : X().getAttribute(A);
  }
  function G(A, Z) {
    F[A] !== Z && t(6, F[A] = Z, F);
  }
  function k(A) {
    (!(A in F) || F[A] != null) && t(6, F[A] = void 0, F);
  }
  function O() {
    X().focus();
  }
  function D() {
    X().blur();
  }
  function X() {
    return _;
  }
  function ke(A) {
    Ot.call(this, n, A);
  }
  function Ce(A) {
    Ot.call(this, n, A);
  }
  function pe(A) {
    le[A ? "unshift" : "push"](() => {
      _ = A, t(5, _);
    });
  }
  const j = (A) => c !== "file" && m(A);
  return n.$$set = (A) => {
    e = z(z({}, e), Te(A)), t(10, i = de(e, l)), "use" in A && t(0, a = A.use), "class" in A && t(1, u = A.class), "type" in A && t(2, c = A.type), "placeholder" in A && t(3, f = A.placeholder), "value" in A && t(11, d = A.value), "files" in A && t(12, p = A.files), "dirty" in A && t(13, h = A.dirty), "invalid" in A && t(14, b = A.invalid), "updateInvalid" in A && t(15, R = A.updateInvalid), "emptyValueNull" in A && t(16, y = A.emptyValueNull), "emptyValueUndefined" in A && t(17, L = A.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete v.value, t(4, v), t(2, c), t(11, d)) : t(4, v.value = d ?? "", v));
  }, [
    a,
    u,
    c,
    f,
    v,
    _,
    F,
    r,
    m,
    E,
    i,
    d,
    p,
    h,
    b,
    R,
    y,
    L,
    B,
    G,
    k,
    O,
    D,
    X,
    ke,
    Ce,
    pe,
    j
  ];
}
class ls extends x {
  constructor(e) {
    super(), $(this, e, ns, es, J, {
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
function is(n) {
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
      e = U("textarea"), ie(e, a);
    },
    m(u, c) {
      M(u, e, c), e.autofocus && e.focus(), n[21](e), gn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        ee(i = Le.call(
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
      ])), i && _e(i.update) && c & /*use*/
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
    i: Q,
    o: Q,
    d(u) {
      u && H(e), n[21](null), r = !1, he(s);
    }
  };
}
function rs(n, e, t) {
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
  let i = de(e, l);
  const r = Ue(Re());
  let { use: s = [] } = e, { class: o = "" } = e, { style: a = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, p, h = {};
  Ze(() => {
    d && t(11, f = p.matches(":invalid"));
  });
  function b() {
    t(10, c = !0), d && t(11, f = p.matches(":invalid"));
  }
  function R(k) {
    var O;
    return k in h ? (O = h[k]) !== null && O !== void 0 ? O : null : v().getAttribute(k);
  }
  function y(k, O) {
    h[k] !== O && t(6, h[k] = O, h);
  }
  function L(k) {
    (!(k in h) || h[k] != null) && t(6, h[k] = void 0, h);
  }
  function _() {
    v().focus();
  }
  function F() {
    v().blur();
  }
  function v() {
    return p;
  }
  function m(k) {
    Ot.call(this, n, k);
  }
  function E(k) {
    Ot.call(this, n, k);
  }
  function B(k) {
    le[k ? "unshift" : "push"](() => {
      p = k, t(5, p);
    });
  }
  function G() {
    u = this.value, t(0, u);
  }
  return n.$$set = (k) => {
    e = z(z({}, e), Te(k)), t(9, i = de(e, l)), "use" in k && t(1, s = k.use), "class" in k && t(2, o = k.class), "style" in k && t(3, a = k.style), "value" in k && t(0, u = k.value), "dirty" in k && t(10, c = k.dirty), "invalid" in k && t(11, f = k.invalid), "updateInvalid" in k && t(12, d = k.updateInvalid), "resizable" in k && t(4, g = k.resizable);
  }, [
    u,
    s,
    o,
    a,
    g,
    p,
    h,
    r,
    b,
    i,
    c,
    f,
    d,
    R,
    y,
    L,
    _,
    F,
    v,
    m,
    E,
    B,
    G
  ];
}
class ss extends x {
  constructor(e) {
    super(), $(this, e, rs, is, J, {
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
const as = (n) => ({}), Pn = (n) => ({}), os = (n) => ({}), Dn = (n) => ({}), us = (n) => ({}), Hn = (n) => ({}), cs = (n) => ({}), Mn = (n) => ({}), fs = (n) => ({}), Tn = (n) => ({}), ds = (n) => ({}), Fn = (n) => ({}), gs = (n) => ({}), Gn = (n) => ({}), ms = (n) => ({}), Un = (n) => ({}), hs = (n) => ({}), On = (n) => ({}), ps = (n) => ({}), Wn = (n) => ({}), _s = (n) => ({}), Bn = (n) => ({}), bs = (n) => ({}), Zn = (n) => ({});
function vs(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, p;
  const h = (
    /*#slots*/
    n[56].label
  ), b = re(
    h,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  l = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Is] },
      $$scope: { ctx: n }
    }
  });
  const R = (
    /*#slots*/
    n[56].default
  ), y = re(
    R,
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
  const L = (
    /*#slots*/
    n[56].ripple
  ), _ = re(
    L,
    n,
    /*$$scope*/
    n[87],
    Dn
  );
  let F = [
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
    mt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], v = {};
  for (let m = 0; m < F.length; m += 1)
    v = z(v, F[m]);
  return {
    c() {
      e = U("div"), b && b.c(), t = W(), V(l.$$.fragment), i = W(), y && y.c(), r = W(), V(s.$$.fragment), o = W(), _ && _.c(), ie(e, v);
    },
    m(m, E) {
      M(m, e, E), b && b.m(e, null), P(e, t), N(l, e, null), P(e, i), y && y.m(e, null), P(e, r), N(s, e, null), P(e, o), _ && _.m(e, null), n[82](e), d = !0, g || (p = [
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
        ee(f = Le.call(
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
    p(m, E) {
      b && b.p && (!d || E[2] & /*$$scope*/
      33554432) && ae(
        b,
        h,
        m,
        /*$$scope*/
        m[87],
        d ? se(
          h,
          /*$$scope*/
          m[87],
          E,
          fs
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Tn
      );
      const B = {};
      E[2] & /*$$scope*/
      33554432 && (B.$$scope = { dirty: E, ctx: m }), l.$set(B), y && y.p && (!d || E[2] & /*$$scope*/
      33554432) && ae(
        y,
        R,
        m,
        /*$$scope*/
        m[87],
        d ? se(
          R,
          /*$$scope*/
          m[87],
          E,
          null
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        null
      );
      const G = {};
      E[2] & /*$$scope*/
      33554432 && (G.$$scope = { dirty: E, ctx: m }), s.$set(G), _ && _.p && (!d || E[2] & /*$$scope*/
      33554432) && ae(
        _,
        L,
        m,
        /*$$scope*/
        m[87],
        d ? se(
          L,
          /*$$scope*/
          m[87],
          E,
          os
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Dn
      ), ie(e, v = fe(F, [
        (!d || E[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | E[1] & /*$$slots*/
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
        (!d || E[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          m[26]
        ).map($n).concat([
          /*style*/
          m[10]
        ]).join(" "))) && { style: u },
        E[1] & /*$$restProps*/
        32768 && mt(
          /*$$restProps*/
          m[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && _e(c.update) && E[0] & /*ripple*/
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
      }), f && _e(f.update) && E[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        m[8]
      );
    },
    i(m) {
      d || (C(b, m), C(l.$$.fragment, m), C(y, m), C(s.$$.fragment, m), C(_, m), d = !0);
    },
    o(m) {
      S(b, m), S(l.$$.fragment, m), S(y, m), S(s.$$.fragment, m), S(_, m), d = !1;
    },
    d(m) {
      m && H(e), b && b.d(m), q(l), y && y.d(m), q(s), _ && _.d(m), n[82](null), g = !1, he(p);
    }
  };
}
function Cs(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, p, h, b, R, y, L = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Nn(n), _ = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && jn(n)
  );
  i = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Ss] },
      $$scope: { ctx: n }
    }
  });
  const F = (
    /*#slots*/
    n[56].default
  ), v = re(
    F,
    n,
    /*$$scope*/
    n[87],
    null
  ), m = [Rs, Ls], E = [];
  function B(D, X) {
    return (
      /*textarea*/
      D[14] && typeof /*value*/
      D[0] == "string" ? 0 : 1
    );
  }
  o = B(n), a = E[o] = m[o](n), c = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Ds] },
      $$scope: { ctx: n }
    }
  });
  let G = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Kn(n), k = [
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
    mt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], O = {};
  for (let D = 0; D < k.length; D += 1)
    O = z(O, k[D]);
  return {
    c() {
      e = U("label"), L && L.c(), t = W(), _ && _.c(), l = W(), V(i.$$.fragment), r = W(), v && v.c(), s = W(), a.c(), u = W(), V(c.$$.fragment), f = W(), G && G.c(), ie(e, O);
    },
    m(D, X) {
      M(D, e, X), L && L.m(e, null), P(e, t), _ && _.m(e, null), P(e, l), N(i, e, null), P(e, r), v && v.m(e, null), P(e, s), E[o].m(e, null), P(e, u), N(c, e, null), P(e, f), G && G.m(e, null), n[78](e), b = !0, R || (y = [
        ee(p = kt.call(null, e, {
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
        ee(h = Le.call(
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
      ], R = !0);
    },
    p(D, X) {
      !/*textarea*/
      D[14] && /*variant*/
      D[15] !== "outlined" ? L ? (L.p(D, X), X[0] & /*textarea, variant*/
      49152 && C(L, 1)) : (L = Nn(D), L.c(), C(L, 1), L.m(e, t)) : L && (ue(), S(L, 1, 1, () => {
        L = null;
      }), ce()), /*textarea*/
      D[14] || /*variant*/
      D[15] === "outlined" ? _ ? (_.p(D, X), X[0] & /*textarea, variant*/
      49152 && C(_, 1)) : (_ = jn(D), _.c(), C(_, 1), _.m(e, l)) : _ && (ue(), S(_, 1, 1, () => {
        _ = null;
      }), ce());
      const ke = {};
      X[2] & /*$$scope*/
      33554432 && (ke.$$scope = { dirty: X, ctx: D }), i.$set(ke), v && v.p && (!b || X[2] & /*$$scope*/
      33554432) && ae(
        v,
        F,
        D,
        /*$$scope*/
        D[87],
        b ? se(
          F,
          /*$$scope*/
          D[87],
          X,
          null
        ) : oe(
          /*$$scope*/
          D[87]
        ),
        null
      );
      let Ce = o;
      o = B(D), o === Ce ? E[o].p(D, X) : (ue(), S(E[Ce], 1, 1, () => {
        E[Ce] = null;
      }), ce(), a = E[o], a ? a.p(D, X) : (a = E[o] = m[o](D), a.c()), C(a, 1), a.m(e, u));
      const pe = {};
      X[2] & /*$$scope*/
      33554432 && (pe.$$scope = { dirty: X, ctx: D }), c.$set(pe), !/*textarea*/
      D[14] && /*variant*/
      D[15] !== "outlined" && /*ripple*/
      D[11] ? G ? (G.p(D, X), X[0] & /*textarea, variant, ripple*/
      51200 && C(G, 1)) : (G = Kn(D), G.c(), C(G, 1), G.m(e, null)) : G && (ue(), S(G, 1, 1, () => {
        G = null;
      }), ce()), ie(e, O = fe(k, [
        (!b || X[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | X[1] & /*$$slots*/
        65536 && d !== (d = te({
          [
            /*className*/
            D[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            D[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            D[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            D[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            D[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            D[15] === "standard" && !/*textarea*/
            D[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            D[16] || /*label*/
            D[17] == null && !/*$$slots*/
            D[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            D[28] || /*value*/
            D[0] != null && /*value*/
            D[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            D[35](
              /*withLeadingIcon*/
              D[22]
            ) ? (
              /*$$slots*/
              D[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              D[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            D[35](
              /*withTrailingIcon*/
              D[23]
            ) ? (
              /*$$slots*/
              D[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              D[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            D[14] && /*$$slots*/
            D[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            D[1]
          ),
          .../*internalClasses*/
          D[25]
        }))) && { class: d },
        (!b || X[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          D[26]
        ).map(Jn).concat([
          /*style*/
          D[10]
        ]).join(" "))) && { style: g },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        X[1] & /*$$restProps*/
        32768 && mt(
          /*$$restProps*/
          D[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), p && _e(p.update) && X[0] & /*textarea, variant*/
      49152 | X[1] & /*inputElement*/
      4 && p.update.call(null, {
        ripple: !/*textarea*/
        D[14] && /*variant*/
        D[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          D[43]
        ),
        removeClass: (
          /*removeClass*/
          D[44]
        ),
        addStyle: (
          /*addStyle*/
          D[45]
        ),
        eventTarget: (
          /*inputElement*/
          D[33]
        ),
        activeTarget: (
          /*inputElement*/
          D[33]
        ),
        initPromise: (
          /*initPromise*/
          D[37]
        )
      }), h && _e(h.update) && X[0] & /*use*/
      256 && h.update.call(
        null,
        /*use*/
        D[8]
      );
    },
    i(D) {
      b || (C(L), C(_), C(i.$$.fragment, D), C(v, D), C(a), C(c.$$.fragment, D), C(G), b = !0);
    },
    o(D) {
      S(L), S(_), S(i.$$.fragment, D), S(v, D), S(a), S(c.$$.fragment, D), S(G), b = !1;
    },
    d(D) {
      D && H(e), L && L.d(), _ && _.d(), q(i), v && v.d(D), E[o].d(), q(c), G && G.d(), n[78](null), R = !1, he(y);
    }
  };
}
function Is(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          cs
        ) : oe(
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
      S(l, i), e = !1;
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
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          us
        ) : oe(
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
      S(l, i), e = !1;
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
      i && i.c(), e = W(), r && r.c(), t = ye();
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
      65536 && C(r, 1)) : (r = Vn(s), r.c(), C(r, 1), r.m(t.parentNode, t)) : r && (ue(), S(r, 1, 1, () => {
        r = null;
      }), ce());
    },
    i(s) {
      l || (C(r), l = !0);
    },
    o(s) {
      S(r), l = !1;
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
      e = U("span"), I(e, "class", "mdc-text-field__ripple");
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
    De(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [ys] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new $l({ props: i }), n[57](e), {
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
        32768 && Se(De(
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), q(e, r);
    }
  };
}
function ys(n) {
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
  ), r = re(
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
      )) + "") && be(t, e), r && r.p && (!l || o[2] & /*$$scope*/
      33554432) && ae(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? se(
          i,
          /*$$scope*/
          s[87],
          o,
          bs
        ) : oe(
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
      S(r, s), l = !1;
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
    De(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [ws] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new zr({ props: i }), n[59](e), {
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
        32768 && Se(De(
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
      S(e.$$.fragment, r), t = !1;
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
    De(
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
  return e = new $l({ props: i }), n[58](e), {
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
        32768 && Se(De(
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), q(e, r);
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
  ), r = re(
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
      )) + "") && be(t, e), r && r.p && (!l || o[2] & /*$$scope*/
      33554432) && ae(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? se(
          i,
          /*$$scope*/
          s[87],
          o,
          _s
        ) : oe(
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
      S(r, s), l = !1;
    },
    d(s) {
      s && H(t), r && r.d(s);
    }
  };
}
function ws(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && zn(n);
  return {
    c() {
      l && l.c(), e = ye();
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
      65536 && C(l, 1)) : (l = zn(i), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (ue(), S(l, 1, 1, () => {
        l = null;
      }), ce());
    },
    i(i) {
      t || (C(l), t = !0);
    },
    o(i) {
      S(l), t = !1;
    },
    d(i) {
      i && H(e), l && l.d(i);
    }
  };
}
function Ss(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          ps
        ) : oe(
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
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ls(n) {
  let e, t, l, i, r, s, o, a, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = re(
    f,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  let g = (
    /*prefix*/
    n[20] != null && Xn(n)
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
    De(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function h(m) {
    n[69](m);
  }
  function b(m) {
    n[70](m);
  }
  function R(m) {
    n[71](m);
  }
  function y(m) {
    n[72](m);
  }
  let L = {};
  for (let m = 0; m < p.length; m += 1)
    L = z(L, p[m]);
  /*value*/
  n[0] !== void 0 && (L.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (L.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (L.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (L.invalid = /*invalid*/
  n[1]), l = new ls({ props: L }), n[68](l), le.push(() => Je(l, "value", h)), le.push(() => Je(l, "files", b)), le.push(() => Je(l, "dirty", R)), le.push(() => Je(l, "invalid", y)), l.$on(
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
  let _ = (
    /*suffix*/
    n[21] != null && Yn(n)
  );
  const F = (
    /*#slots*/
    n[56].suffix
  ), v = re(
    F,
    n,
    /*$$scope*/
    n[87],
    Gn
  );
  return {
    c() {
      d && d.c(), e = W(), g && g.c(), t = W(), V(l.$$.fragment), a = W(), _ && _.c(), u = W(), v && v.c();
    },
    m(m, E) {
      d && d.m(m, E), M(m, e, E), g && g.m(m, E), M(m, t, E), N(l, m, E), M(m, a, E), _ && _.m(m, E), M(m, u, E), v && v.m(m, E), c = !0;
    },
    p(m, E) {
      d && d.p && (!c || E[2] & /*$$scope*/
      33554432) && ae(
        d,
        f,
        m,
        /*$$scope*/
        m[87],
        c ? se(
          f,
          /*$$scope*/
          m[87],
          E,
          ms
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Un
      ), /*prefix*/
      m[20] != null ? g ? (g.p(m, E), E[0] & /*prefix*/
      1048576 && C(g, 1)) : (g = Xn(m), g.c(), C(g, 1), g.m(t.parentNode, t)) : g && (ue(), S(g, 1, 1, () => {
        g = null;
      }), ce());
      const B = E[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | E[1] & /*$$restProps*/
      32768 ? fe(p, [
        E[0] & /*type*/
        262144 && { type: (
          /*type*/
          m[18]
        ) },
        E[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          m[12]
        ) },
        E[0] & /*required*/
        8192 && { required: (
          /*required*/
          m[13]
        ) },
        E[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          m[19]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          m[27]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          m[27]
        ) },
        E[0] & /*noLabel, label*/
        196608 && Se(
          /*noLabel*/
          m[16] && /*label*/
          m[17] != null ? { placeholder: (
            /*label*/
            m[17]
          ) } : {}
        ),
        E[1] & /*$$restProps*/
        32768 && Se(De(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && E[0] & /*value*/
      1 && (i = !0, B.value = /*value*/
      m[0], Qe(() => i = !1)), !r && E[0] & /*files*/
      8 && (r = !0, B.files = /*files*/
      m[3], Qe(() => r = !1)), !s && E[0] & /*dirty*/
      16 && (s = !0, B.dirty = /*dirty*/
      m[4], Qe(() => s = !1)), !o && E[0] & /*invalid*/
      2 && (o = !0, B.invalid = /*invalid*/
      m[1], Qe(() => o = !1)), l.$set(B), /*suffix*/
      m[21] != null ? _ ? (_.p(m, E), E[0] & /*suffix*/
      2097152 && C(_, 1)) : (_ = Yn(m), _.c(), C(_, 1), _.m(u.parentNode, u)) : _ && (ue(), S(_, 1, 1, () => {
        _ = null;
      }), ce()), v && v.p && (!c || E[2] & /*$$scope*/
      33554432) && ae(
        v,
        F,
        m,
        /*$$scope*/
        m[87],
        c ? se(
          F,
          /*$$scope*/
          m[87],
          E,
          gs
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Gn
      );
    },
    i(m) {
      c || (C(d, m), C(g), C(l.$$.fragment, m), C(_), C(v, m), c = !0);
    },
    o(m) {
      S(d, m), S(g), S(l.$$.fragment, m), S(_), S(v, m), c = !1;
    },
    d(m) {
      m && (H(e), H(t), H(a), H(u)), d && d.d(m), g && g.d(m), n[68](null), q(l, m), _ && _.d(m), v && v.d(m);
    }
  };
}
function Rs(n) {
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
    De(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function c(b) {
    n[61](b);
  }
  function f(b) {
    n[62](b);
  }
  function d(b) {
    n[63](b);
  }
  let g = {};
  for (let b = 0; b < u.length; b += 1)
    g = z(g, u[b]);
  /*value*/
  n[0] !== void 0 && (g.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (g.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (g.invalid = /*invalid*/
  n[1]), t = new ss({ props: g }), n[60](t), le.push(() => Je(t, "value", c)), le.push(() => Je(t, "dirty", f)), le.push(() => Je(t, "invalid", d)), t.$on(
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
  ), h = re(
    p,
    n,
    /*$$scope*/
    n[87],
    On
  );
  return {
    c() {
      e = U("span"), V(t.$$.fragment), s = W(), h && h.c(), I(e, "class", o = te({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(b, R) {
      M(b, e, R), N(t, e, null), P(e, s), h && h.m(e, null), a = !0;
    },
    p(b, R) {
      const y = R[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | R[1] & /*$$restProps*/
      32768 ? fe(u, [
        R[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          b[12]
        ) },
        R[0] & /*required*/
        8192 && { required: (
          /*required*/
          b[13]
        ) },
        R[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          b[19]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          b[27]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          b[27]
        ) },
        R[1] & /*$$restProps*/
        32768 && Se(De(
          /*$$restProps*/
          b[46],
          "input$"
        ))
      ]) : {};
      !l && R[0] & /*value*/
      1 && (l = !0, y.value = /*value*/
      b[0], Qe(() => l = !1)), !i && R[0] & /*dirty*/
      16 && (i = !0, y.dirty = /*dirty*/
      b[4], Qe(() => i = !1)), !r && R[0] & /*invalid*/
      2 && (r = !0, y.invalid = /*invalid*/
      b[1], Qe(() => r = !1)), t.$set(y), h && h.p && (!a || R[2] & /*$$scope*/
      33554432) && ae(
        h,
        p,
        b,
        /*$$scope*/
        b[87],
        a ? se(
          p,
          /*$$scope*/
          b[87],
          R,
          hs
        ) : oe(
          /*$$scope*/
          b[87]
        ),
        On
      ), (!a || R[1] & /*$$restProps*/
      32768 && o !== (o = te({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        b[46]) || /*$$restProps*/
        b[46].input$resizable
      }))) && I(e, "class", o);
    },
    i(b) {
      a || (C(t.$$.fragment, b), C(h, b), a = !0);
    },
    o(b) {
      S(t.$$.fragment, b), S(h, b), a = !1;
    },
    d(b) {
      b && H(e), n[60](null), q(t), h && h.d(b);
    }
  };
}
function Xn(n) {
  let e, t;
  return e = new $r({
    props: {
      $$slots: { default: [Es] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Es(n) {
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
      1048576 && be(
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
  return e = new xr({
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
      S(e.$$.fragment, l), t = !1;
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
      2097152 && be(
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
function Ds(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          ds
        ) : oe(
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
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Kn(n) {
  let e, t;
  const l = [De(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new qr({ props: i }), n[77](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const o = s[1] & /*$$restProps*/
      32768 ? fe(l, [Se(De(
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), q(e, r);
    }
  };
}
function Qn(n) {
  let e, t;
  const l = [De(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [Hs] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = z(i, l[r]);
  return e = new Jr({ props: i }), e.$on(
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
      32768 ? fe(l, [Se(De(
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      q(e, r);
    }
  };
}
function Hs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          as
        ) : oe(
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
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ms(n) {
  let e, t, l, i, r;
  const s = [Cs, vs], o = [];
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
      t.c(), l = W(), u && u.c(), i = ye();
    },
    m(c, f) {
      o[e].m(c, f), M(c, l, f), u && u.m(c, f), M(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Qn(c), u.c(), C(u, 1), u.m(i.parentNode, i)) : u && (ue(), S(u, 1, 1, () => {
        u = null;
      }), ce());
    },
    i(c) {
      r || (C(t), C(u), r = !0);
    },
    o(c) {
      S(t), S(u), r = !1;
    },
    d(c) {
      c && (H(l), H(i)), o[e].d(c), u && u.d(c);
    }
  };
}
const Jn = ([n, e]) => `${n}: ${e};`, $n = ([n, e]) => `${n}: ${e};`;
function Ts(n, e, t) {
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
  let r = de(e, i), { $$slots: s = {}, $$scope: o } = e;
  const a = an(s), { applyPassive: u } = Kl, c = Ue(Re());
  let f = () => {
  };
  function d(w) {
    return w === f;
  }
  let { use: g = [] } = e, { class: p = "" } = e, { style: h = "" } = e, { ripple: b = !0 } = e, { disabled: R = !1 } = e, { required: y = !1 } = e, { textarea: L = !1 } = e, { variant: _ = L ? "outlined" : "standard" } = e, { noLabel: F = !1 } = e, { label: v = void 0 } = e, { type: m = "text" } = e, { value: E = r.input$emptyValueUndefined ? void 0 : f } = e, { files: B = f } = e;
  const G = !d(E) || !d(B);
  d(E) && (E = void 0), d(B) && (B = null);
  let { invalid: k = f } = e, { updateInvalid: O = d(k) } = e;
  d(k) && (k = !1);
  let { dirty: D = !1 } = e, { prefix: X = void 0 } = e, { suffix: ke = void 0 } = e, { validateOnValueChange: Ce = O } = e, { useNativeValidation: pe = O } = e, { withLeadingIcon: j = f } = e, { withTrailingIcon: A = f } = e, { input: Z = void 0 } = e, { floatingLabel: ge = void 0 } = e, { lineRipple: ve = void 0 } = e, { notchedOutline: Fe = void 0 } = e, Oe, me, Ne = {}, Ke = {}, xe, et = !1, Rt = We("SMUI:addLayoutListener"), vt, Ct, qe = new Promise((w) => Ct = w), tt, nt, at, lt, It = E;
  Rt && (vt = Rt(un)), Ze(() => {
    if (t(54, me = new Gr(
      {
        // getRootAdapterMethods_
        addClass: Pt,
        removeClass: Dt,
        hasClass: At,
        registerTextFieldInteractionHandler: (w, we) => Ht().addEventListener(w, we),
        deregisterTextFieldInteractionHandler: (w, we) => Ht().removeEventListener(w, we),
        registerValidationAttributeChangeHandler: (w) => {
          const we = (jt) => jt.map((zt) => zt.attributeName).filter((zt) => zt), cn = new MutationObserver((jt) => {
            pe && w(we(jt));
          }), Gi = { attributes: !0 };
          return Z && cn.observe(Z.getElement(), Gi), cn;
        },
        deregisterValidationAttributeChangeHandler: (w) => {
          w.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var w;
          return (w = Z == null ? void 0 : Z.getElement()) !== null && w !== void 0 ? w : null;
        },
        setInputAttr: (w, we) => {
          Z == null || Z.addAttr(w, we);
        },
        removeInputAttr: (w) => {
          Z == null || Z.removeAttr(w);
        },
        isFocused: () => document.activeElement === (Z == null ? void 0 : Z.getElement()),
        registerInputInteractionHandler: (w, we) => {
          Z == null || Z.getElement().addEventListener(w, we, u());
        },
        deregisterInputInteractionHandler: (w, we) => {
          Z == null || Z.getElement().removeEventListener(w, we, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (w) => ge && ge.float(w),
        getLabelWidth: () => ge ? ge.getWidth() : 0,
        hasLabel: () => !!ge,
        shakeLabel: (w) => ge && ge.shake(w),
        setLabelRequired: (w) => ge && ge.setRequired(w),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => ve && ve.activate(),
        deactivateLineRipple: () => ve && ve.deactivate(),
        setLineRippleTransformOrigin: (w) => ve && ve.setRippleCenter(w),
        // getOutlineAdapterMethods_
        closeOutline: () => Fe && Fe.closeNotch(),
        hasOutline: () => !!Fe,
        notchOutline: (w) => Fe && Fe.notch(w)
      },
      {
        get helperText() {
          return at;
        },
        get characterCounter() {
          return lt;
        },
        get leadingIcon() {
          return tt;
        },
        get trailingIcon() {
          return nt;
        }
      }
    )), G) {
      if (Z == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      me.init();
    } else
      Xi().then(() => {
        if (Z == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        me.init();
      });
    return Ct(), () => {
      me.destroy();
    };
  }), Zt(() => {
    vt && vt();
  });
  function Vt(w) {
    t(29, tt = w.detail);
  }
  function T(w) {
    t(30, nt = w.detail);
  }
  function Y(w) {
    t(32, lt = w.detail);
  }
  function Pe(w) {
    t(27, xe = w.detail);
  }
  function Et(w) {
    t(31, at = w.detail);
  }
  function At(w) {
    var we;
    return w in Ne ? (we = Ne[w]) !== null && we !== void 0 ? we : null : Ht().classList.contains(w);
  }
  function Pt(w) {
    Ne[w] || t(25, Ne[w] = !0, Ne);
  }
  function Dt(w) {
    (!(w in Ne) || Ne[w]) && t(25, Ne[w] = !1, Ne);
  }
  function li(w, we) {
    Ke[w] != we && (we === "" || we == null ? (delete Ke[w], t(26, Ke)) : t(26, Ke[w] = we, Ke));
  }
  function ii() {
    Z == null || Z.focus();
  }
  function ri() {
    Z == null || Z.blur();
  }
  function un() {
    if (me) {
      const w = me.shouldFloat;
      me.notchOutline(w);
    }
  }
  function Ht() {
    return Oe;
  }
  function si(w) {
    le[w ? "unshift" : "push"](() => {
      ge = w, t(5, ge);
    });
  }
  function ai(w) {
    le[w ? "unshift" : "push"](() => {
      ge = w, t(5, ge);
    });
  }
  function oi(w) {
    le[w ? "unshift" : "push"](() => {
      Fe = w, t(7, Fe);
    });
  }
  function ui(w) {
    le[w ? "unshift" : "push"](() => {
      Z = w, t(2, Z);
    });
  }
  function ci(w) {
    E = w, t(0, E);
  }
  function fi(w) {
    D = w, t(4, D);
  }
  function di(w) {
    k = w, t(1, k), t(54, me), t(19, O);
  }
  const gi = () => t(28, et = !1), mi = () => t(28, et = !0), hi = (w) => Ie(Oe, "blur", w), pi = (w) => Ie(Oe, "focus", w);
  function _i(w) {
    le[w ? "unshift" : "push"](() => {
      Z = w, t(2, Z);
    });
  }
  function bi(w) {
    E = w, t(0, E);
  }
  function vi(w) {
    B = w, t(3, B);
  }
  function Ci(w) {
    D = w, t(4, D);
  }
  function Ii(w) {
    k = w, t(1, k), t(54, me), t(19, O);
  }
  const Ai = () => t(28, et = !1), yi = () => t(28, et = !0), ki = (w) => Ie(Oe, "blur", w), wi = (w) => Ie(Oe, "focus", w);
  function Si(w) {
    le[w ? "unshift" : "push"](() => {
      ve = w, t(6, ve);
    });
  }
  function Li(w) {
    le[w ? "unshift" : "push"](() => {
      Oe = w, t(24, Oe);
    });
  }
  const Ri = () => t(29, tt = void 0), Ei = () => t(30, nt = void 0), Pi = () => t(32, lt = void 0);
  function Di(w) {
    le[w ? "unshift" : "push"](() => {
      Oe = w, t(24, Oe);
    });
  }
  const Hi = () => t(29, tt = void 0), Mi = () => t(30, nt = void 0), Ti = () => {
    t(27, xe = void 0), t(31, at = void 0);
  }, Fi = () => t(32, lt = void 0);
  return n.$$set = (w) => {
    e = z(z({}, e), Te(w)), t(46, r = de(e, i)), "use" in w && t(8, g = w.use), "class" in w && t(9, p = w.class), "style" in w && t(10, h = w.style), "ripple" in w && t(11, b = w.ripple), "disabled" in w && t(12, R = w.disabled), "required" in w && t(13, y = w.required), "textarea" in w && t(14, L = w.textarea), "variant" in w && t(15, _ = w.variant), "noLabel" in w && t(16, F = w.noLabel), "label" in w && t(17, v = w.label), "type" in w && t(18, m = w.type), "value" in w && t(0, E = w.value), "files" in w && t(3, B = w.files), "invalid" in w && t(1, k = w.invalid), "updateInvalid" in w && t(19, O = w.updateInvalid), "dirty" in w && t(4, D = w.dirty), "prefix" in w && t(20, X = w.prefix), "suffix" in w && t(21, ke = w.suffix), "validateOnValueChange" in w && t(48, Ce = w.validateOnValueChange), "useNativeValidation" in w && t(49, pe = w.useNativeValidation), "withLeadingIcon" in w && t(22, j = w.withLeadingIcon), "withTrailingIcon" in w && t(23, A = w.withTrailingIcon), "input" in w && t(2, Z = w.input), "floatingLabel" in w && t(5, ge = w.floatingLabel), "lineRipple" in w && t(6, ve = w.lineRipple), "notchedOutline" in w && t(7, Fe = w.notchedOutline), "$$scope" in w && t(87, o = w.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = Z && Z.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && me && me.isValid() !== !k && (O ? t(1, k = !me.isValid()) : me.setValid(!k)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && me && me.getValidateOnValueChange() !== Ce && me.setValidateOnValueChange(d(Ce) ? !1 : Ce), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && me && me.setUseNativeValidation(d(pe) ? !0 : pe), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && me && me.setDisabled(R), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && me && G && It !== E) {
      t(55, It = E);
      const w = `${E}`;
      me.getValue() !== w && me.setValue(w);
    }
  }, [
    E,
    k,
    Z,
    B,
    D,
    ge,
    ve,
    Fe,
    g,
    p,
    h,
    b,
    R,
    y,
    L,
    _,
    F,
    v,
    m,
    O,
    X,
    ke,
    j,
    A,
    Oe,
    Ne,
    Ke,
    xe,
    et,
    tt,
    nt,
    at,
    lt,
    l,
    c,
    d,
    G,
    qe,
    Vt,
    T,
    Y,
    Pe,
    Et,
    Pt,
    Dt,
    li,
    r,
    a,
    Ce,
    pe,
    ii,
    ri,
    un,
    Ht,
    me,
    It,
    s,
    si,
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
    Ai,
    yi,
    ki,
    wi,
    Si,
    Li,
    Ri,
    Ei,
    Pi,
    Di,
    Hi,
    Mi,
    Ti,
    Fi,
    o
  ];
}
class Fs extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      Ts,
      Ms,
      J,
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
function Gs(n) {
  let e, t, l, i, r, s;
  const o = (
    /*#slots*/
    n[8].default
  ), a = re(
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
      e = U("span"), a && a.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), a && a.m(e, null), n[9](e), i = !0, r || (s = [
        ee(l = Le.call(
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
      128) && ae(
        a,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? se(
          o,
          /*$$scope*/
          f[7],
          d,
          null
        ) : oe(
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
      ])), l && _e(l.update) && d & /*use*/
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
      S(a, f), i = !1;
    },
    d(f) {
      f && H(e), a && a.d(f), n[9](null), r = !1, he(s);
    }
  };
}
function Us(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = de(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = Ue(Re());
  let { use: a = [] } = e, { class: u = "" } = e, c, f = We("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function g(p) {
    le[p ? "unshift" : "push"](() => {
      c = p, t(2, c);
    });
  }
  return n.$$set = (p) => {
    e = z(z({}, e), Te(p)), t(5, i = de(e, l)), "use" in p && t(0, a = p.use), "class" in p && t(1, u = p.class), "$$scope" in p && t(7, s = p.$$scope);
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
class Os extends x {
  constructor(e) {
    super(), $(this, e, Us, Gs, J, { use: 0, class: 1, getElement: 6 });
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
  component: Os
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
function Ws(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = re(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = U("span"), i && i.c(), I(e, "class", "oscd-icon");
    },
    m(r, s) {
      M(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && ae(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? se(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : oe(
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
      S(i, r), t = !1;
    },
    d(r) {
      r && H(e), i && i.d(r);
    }
  };
}
function Bs(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class bt extends x {
  constructor(e) {
    super(), $(this, e, Bs, Ws, J, {});
  }
}
function Zs(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), I(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && I(
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
function Ns(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Zs] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function qs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Vs extends x {
  constructor(e) {
    super(), $(this, e, qs, Ns, J, { svgStyles: 0 });
  }
}
function js(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "viewBox", "0 -960 960 960"), I(
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
      1 && I(
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
function zs(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [js] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Xs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ys extends x {
  constructor(e) {
    super(), $(this, e, Xs, zs, J, { svgStyles: 0 });
  }
}
function Ks(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "viewBox", "0 -960 960 960"), I(e, "width", "24"), I(e, "height", "24"), I(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: Q,
    i: Q,
    o: Q,
    d(l) {
      l && H(e);
    }
  };
}
class Qs extends x {
  constructor(e) {
    super(), $(this, e, null, Ks, J, {});
  }
}
function Js(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "height", "24px"), I(e, "viewBox", "0 -960 960 960"), I(e, "width", "24px"), I(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: Q,
    i: Q,
    o: Q,
    d(l) {
      l && H(e);
    }
  };
}
class $s extends x {
  constructor(e) {
    super(), $(this, e, null, Js, J, {});
  }
}
function xs(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "height", "24px"), I(e, "viewBox", "0 -960 960 960"), I(e, "width", "24px"), I(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: Q,
    i: Q,
    o: Q,
    d(l) {
      l && H(e);
    }
  };
}
class ea extends x {
  constructor(e) {
    super(), $(this, e, null, xs, J, {});
  }
}
function ta(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "viewBox", "0 -960 960 960"), I(
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
      1 && I(
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
function na(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [ta] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
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
    super(), $(this, e, la, na, J, { svgStyles: 0 });
  }
}
function ra(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "viewBox", "0 -960 960 960"), I(
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
      1 && I(
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
function sa(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [ra] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
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
    super(), $(this, e, aa, sa, J, { svgStyles: 0 });
  }
}
function ua(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "height", "24px"), I(e, "viewBox", "0 -960 960 960"), I(e, "width", "24px"), I(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p: Q,
    d(l) {
      l && H(e);
    }
  };
}
function ca(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [ua] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function fa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class da extends x {
  constructor(e) {
    super(), $(this, e, fa, ca, J, { svgStyles: 0 });
  }
}
function ga(n) {
  let e, t;
  return {
    c() {
      e = Ee("svg"), t = Ee("path"), I(t, "d", "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"), I(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && I(
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
function ma(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [ga] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ha(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class pa extends x {
  constructor(e) {
    super(), $(this, e, ha, ma, J, { svgStyles: 0 });
  }
}
function xn(n) {
  let e, t, l;
  return {
    c() {
      e = U("span"), t = ne(
        /*content*/
        n[0]
      ), I(
        e,
        "id",
        /*id*/
        n[2]
      ), I(e, "role", "tooltip"), I(e, "class", l = "bubble " + /*side*/
      n[1] + " svelte-h101gz");
    },
    m(i, r) {
      M(i, e, r), P(e, t);
    },
    p(i, r) {
      r & /*content*/
      1 && be(
        t,
        /*content*/
        i[0]
      ), r & /*side*/
      2 && l !== (l = "bubble " + /*side*/
      i[1] + " svelte-h101gz") && I(e, "class", l);
    },
    d(i) {
      i && H(e);
    }
  };
}
function _a(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[4].default
  ), s = re(
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
      e = U("span"), s && s.c(), t = W(), o && o.c(), I(e, "class", "tt svelte-h101gz"), I(e, "tabindex", "0"), I(e, "aria-describedby", l = /*content*/
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
      8) && ae(
        s,
        r,
        a,
        /*$$scope*/
        a[3],
        i ? se(
          r,
          /*$$scope*/
          a[3],
          u,
          null
        ) : oe(
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
      ) : void 0)) && I(e, "aria-describedby", l);
    },
    i(a) {
      i || (C(s, a), i = !0);
    },
    o(a) {
      S(s, a), i = !1;
    },
    d(a) {
      a && H(e), s && s.d(a), o && o.d();
    }
  };
}
function ba(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { side: s = "top" } = e;
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  return n.$$set = (a) => {
    "content" in a && t(0, r = a.content), "side" in a && t(1, s = a.side), "$$scope" in a && t(3, i = a.$$scope);
  }, [r, s, o, i, l];
}
class va extends x {
  constructor(e) {
    super(), $(this, e, ba, _a, J, { content: 0, side: 1 });
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
var Xe = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, el = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, rt = {
  ARIA_SELECTED: el.ARIA_SELECTED,
  ARIA_SORT: el.ARIA_SORT
}, Be;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Be || (Be = {}));
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
var Ca = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      return n.call(this, Ge(Ge({}, e.defaultAdapter), t)) || this;
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
        return er(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, Xe.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, Xe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, rt.ARIA_SORT, Be.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, Be.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Xe.HEADER_CELL_SORTED);
      var o = this.adapter.getAttributeByHeaderCellIndex(i, rt.ARIA_SORT), a = Be.NONE;
      o === Be.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Xe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rt.ARIA_SORT, Be.DESCENDING), a = Be.DESCENDING) : o === Be.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Xe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rt.ARIA_SORT, Be.ASCENDING), a = Be.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, rt.ARIA_SORT, Be.ASCENDING), a = Be.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, a), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(Xe.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Xe.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, Xe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, rt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Xe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, rt.ARIA_SELECTED, "false"));
    }, e;
  }(_t)
);
const Ia = (n) => ({}), tl = (n) => ({}), Aa = (n) => ({}), nl = (n) => ({});
function ll(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), o = re(
    s,
    n,
    /*$$scope*/
    n[35],
    nl
  );
  return {
    c() {
      e = U("div"), t = U("div"), l = W(), o && o.c(), I(t, "class", "mdc-data-table__scrim"), I(e, "class", "mdc-data-table__progress-indicator"), I(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(il).join(" "));
    },
    m(a, u) {
      M(a, e, u), P(e, t), P(e, l), o && o.m(e, null), r = !0;
    },
    p(a, u) {
      o && o.p && (!r || u[1] & /*$$scope*/
      16) && ae(
        o,
        s,
        a,
        /*$$scope*/
        a[35],
        r ? se(
          s,
          /*$$scope*/
          a[35],
          u,
          Aa
        ) : oe(
          /*$$scope*/
          a[35]
        ),
        nl
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        a[13]
      ).map(il).join(" "))) && I(e, "style", i);
    },
    i(a) {
      r || (C(o, a), r = !0);
    },
    o(a) {
      S(o, a), r = !1;
    },
    d(a) {
      a && H(e), o && o.d(a);
    }
  };
}
function ya(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, p;
  const h = (
    /*#slots*/
    n[36].default
  ), b = re(
    h,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let R = [
    {
      class: i = te({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    De(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], y = {};
  for (let G = 0; G < R.length; G += 1)
    y = z(y, R[G]);
  let L = [
    {
      class: s = te({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    De(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], _ = {};
  for (let G = 0; G < L.length; G += 1)
    _ = z(_, L[G]);
  let F = (
    /*$$slots*/
    n[24].progress && ll(n)
  );
  const v = (
    /*#slots*/
    n[36].paginate
  ), m = re(
    v,
    n,
    /*$$scope*/
    n[35],
    tl
  );
  let E = [
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
    mt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], B = {};
  for (let G = 0; G < E.length; G += 1)
    B = z(B, E[G]);
  return {
    c() {
      e = U("div"), t = U("div"), l = U("table"), b && b.c(), a = W(), F && F.c(), u = W(), m && m.c(), ie(l, y), ie(t, _), ie(e, B);
    },
    m(G, k) {
      M(G, e, k), P(e, t), P(t, l), b && b.m(l, null), n[37](t), P(e, a), F && F.m(e, null), P(e, u), m && m.m(e, null), n[38](e), d = !0, g || (p = [
        ee(r = Le.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        ee(o = Le.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        ee(f = Le.call(
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
    p(G, k) {
      b && b.p && (!d || k[1] & /*$$scope*/
      16) && ae(
        b,
        h,
        G,
        /*$$scope*/
        G[35],
        d ? se(
          h,
          /*$$scope*/
          G[35],
          k,
          null
        ) : oe(
          /*$$scope*/
          G[35]
        ),
        null
      ), ie(l, y = fe(R, [
        (!d || k[0] & /*table$class*/
        64 && i !== (i = te({
          [
            /*table$class*/
            G[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        k[0] & /*$$restProps*/
        33554432 && De(
          /*$$restProps*/
          G[25],
          "table$"
        )
      ])), r && _e(r.update) && k[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        G[5]
      ), ie(t, _ = fe(L, [
        (!d || k[0] & /*container$class*/
        16 && s !== (s = te({
          [
            /*container$class*/
            G[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        k[0] & /*$$restProps*/
        33554432 && De(
          /*$$restProps*/
          G[25],
          "container$"
        )
      ])), o && _e(o.update) && k[0] & /*container$use*/
      8 && o.update.call(
        null,
        /*container$use*/
        G[3]
      ), /*$$slots*/
      G[24].progress ? F ? (F.p(G, k), k[0] & /*$$slots*/
      16777216 && C(F, 1)) : (F = ll(G), F.c(), C(F, 1), F.m(e, u)) : F && (ue(), S(F, 1, 1, () => {
        F = null;
      }), ce()), m && m.p && (!d || k[1] & /*$$scope*/
      16) && ae(
        m,
        v,
        G,
        /*$$scope*/
        G[35],
        d ? se(
          v,
          /*$$scope*/
          G[35],
          k,
          Ia
        ) : oe(
          /*$$scope*/
          G[35]
        ),
        tl
      ), ie(e, B = fe(E, [
        (!d || k[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = te({
          [
            /*className*/
            G[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            G[2]
          ),
          .../*internalClasses*/
          G[12]
        }))) && { class: c },
        k[0] & /*$$restProps*/
        33554432 && mt(
          /*$$restProps*/
          G[25],
          ["container$", "table$"]
        )
      ])), f && _e(f.update) && k[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        G[0]
      );
    },
    i(G) {
      d || (C(b, G), C(F), C(m, G), d = !0);
    },
    o(G) {
      S(b, G), S(F), S(m, G), d = !1;
    },
    d(G) {
      G && H(e), b && b.d(G), n[37](null), F && F.d(), m && m.d(G), n[38](null), g = !1, he(p);
    }
  };
}
const il = ([n, e]) => `${n}: ${e};`;
function ka(n, e, t) {
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
  let i = de(e, l), r, s, o, { $$slots: a = {}, $$scope: u } = e;
  const c = an(a), { closest: f } = Jl, d = Ue(Re());
  let { use: g = [] } = e, { class: p = "" } = e, { stickyHeader: h = !1 } = e, { sortable: b = !1 } = e, { sort: R = null } = e, { sortDirection: y = "ascending" } = e, { sortAscendingAriaLabel: L = "sorted, ascending" } = e, { sortDescendingAriaLabel: _ = "sorted, descending" } = e, { container$use: F = [] } = e, { container$class: v = "" } = e, { table$use: m = [] } = e, { table$class: E = "" } = e, B, G, k, O, D, X = {}, ke = { height: "auto", top: "initial" }, Ce = We("SMUI:addLayoutListener"), pe, j = !1, A = wt(!1);
  ft(n, A, (T) => t(34, r = T));
  let Z = wt(R);
  ft(n, Z, (T) => t(45, o = T));
  let ge = wt(y);
  ft(n, ge, (T) => t(44, s = T)), He("SMUI:checkbox:context", "data-table"), He("SMUI:linear-progress:context", "data-table"), He("SMUI:linear-progress:closed", A), He("SMUI:data-table:sortable", b), He("SMUI:data-table:sort", Z), He("SMUI:data-table:sortDirection", ge), He("SMUI:data-table:sortAscendingAriaLabel", L), He("SMUI:data-table:sortDescendingAriaLabel", _), Ce && (pe = Ce(Ct));
  let ve;
  Ze(() => (t(7, G = new Ca({
    addClass: Ne,
    removeClass: Ke,
    getHeaderCellElements: () => {
      var T;
      return (T = O == null ? void 0 : O.cells.map((Y) => Y.element)) !== null && T !== void 0 ? T : [];
    },
    getHeaderCellCount: () => {
      var T;
      return (T = O == null ? void 0 : O.cells.length) !== null && T !== void 0 ? T : 0;
    },
    getAttributeByHeaderCellIndex: (T, Y) => {
      var Pe;
      return (Pe = O == null ? void 0 : O.orderedCells[T].getAttr(Y)) !== null && Pe !== void 0 ? Pe : null;
    },
    setAttributeByHeaderCellIndex: (T, Y, Pe) => {
      O == null || O.orderedCells[T].addAttr(Y, Pe);
    },
    setClassNameByHeaderCellIndex: (T, Y) => {
      O == null || O.orderedCells[T].addClass(Y);
    },
    removeClassNameByHeaderCellIndex: (T, Y) => {
      O == null || O.orderedCells[T].removeClass(Y);
    },
    notifySortAction: (T) => {
      t(26, R = T.columnId), t(27, y = T.sortValue), Ie(qe(), "SMUIDataTable:sorted", T, void 0, !0);
    },
    getTableContainerHeight: () => k.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const T = qe().querySelector(".mdc-data-table__header-row");
      if (!T)
        throw new Error("MDCDataTable: Table header element not found.");
      return T.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (T) => {
      t(13, ke = T);
    },
    addClassAtRowIndex: (T, Y) => {
      D == null || D.orderedRows[T].addClass(Y);
    },
    getRowCount: () => {
      var T;
      return (T = D == null ? void 0 : D.rows.length) !== null && T !== void 0 ? T : 0;
    },
    getRowElements: () => {
      var T;
      return (T = D == null ? void 0 : D.rows.map((Y) => Y.element)) !== null && T !== void 0 ? T : [];
    },
    getRowIdAtIndex: (T) => {
      var Y;
      return (Y = D == null ? void 0 : D.orderedRows[T].rowId) !== null && Y !== void 0 ? Y : null;
    },
    getRowIndexByChildElement: (T) => {
      var Y;
      return (Y = D == null ? void 0 : D.orderedRows.map((Pe) => Pe.element).indexOf(f(T, ".mdc-data-table__row"))) !== null && Y !== void 0 ? Y : -1;
    },
    getSelectedRowCount: () => {
      var T;
      return (T = D == null ? void 0 : D.rows.filter((Y) => Y.selected).length) !== null && T !== void 0 ? T : 0;
    },
    isCheckboxAtRowIndexChecked: (T) => {
      const Y = D == null ? void 0 : D.orderedRows[T].checkbox;
      return Y ? Y.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const T = O == null ? void 0 : O.checkbox;
      return T ? T.checked : !1;
    },
    isRowsSelectable: () => !!qe().querySelector(".mdc-data-table__row-checkbox") || !!qe().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (T) => {
      const Y = D == null ? void 0 : D.orderedRows[T.rowIndex];
      Y && Ie(
        qe(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: Y.element,
          rowId: Y.rowId,
          rowIndex: T.rowIndex,
          selected: T.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      xe(!1), Ie(qe(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      xe(!1), Ie(qe(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (T) => {
      Ie(qe(), "SMUIDataTable:rowClick", T, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (T, Y) => {
      D == null || D.orderedRows[T].removeClass(Y);
    },
    setAttributeAtRowIndex: (T, Y, Pe) => {
      D == null || D.orderedRows[T].addAttr(Y, Pe);
    },
    setHeaderRowCheckboxChecked: (T) => {
      const Y = O == null ? void 0 : O.checkbox;
      Y && (Y.checked = T);
    },
    setHeaderRowCheckboxIndeterminate: xe,
    setRowCheckboxCheckedAtIndex: (T, Y) => {
      const Pe = D == null ? void 0 : D.orderedRows[T].checkbox;
      Pe && (Pe.checked = Y);
    },
    setSortStatusLabelByHeaderCellIndex: (T, Y) => {
    }
    // Handled automatically.
  })), G.init(), G.layout(), t(14, j = !0), () => {
    G.destroy();
  })), Zt(() => {
    pe && pe();
  });
  function Fe(T) {
    t(10, O = T.detail);
  }
  function Oe(T) {
    t(11, D = T.detail);
  }
  function me(T) {
    G && G.handleRowCheckboxChange(T);
  }
  function Ne(T) {
    X[T] || t(12, X[T] = !0, X);
  }
  function Ke(T) {
    (!(T in X) || X[T]) && t(12, X[T] = !1, X);
  }
  function xe(T) {
    const Y = O == null ? void 0 : O.checkbox;
    Y && (Y.indeterminate = T);
  }
  function et(T) {
    if (!G || !T.detail.target)
      return;
    const Y = f(T.detail.target, ".mdc-data-table__header-cell--with-sort");
    Y && vt(Y);
  }
  function Rt(T) {
    if (!G || !T.detail.target)
      return;
    const Y = f(T.detail.target, ".mdc-data-table__row");
    Y && G && G.handleRowClick({ rowId: T.detail.rowId, row: Y });
  }
  function vt(T) {
    var Y, Pe;
    const Et = (Y = O == null ? void 0 : O.orderedCells) !== null && Y !== void 0 ? Y : [], At = Et.map((Dt) => Dt.element).indexOf(T);
    if (At === -1)
      return;
    const Pt = (Pe = Et[At].columnId) !== null && Pe !== void 0 ? Pe : null;
    G.handleSortAction({ columnId: Pt, columnIndex: At, headerCell: T });
  }
  function Ct() {
    return G.layout();
  }
  function qe() {
    return B;
  }
  function tt(T) {
    le[T ? "unshift" : "push"](() => {
      k = T, t(9, k);
    });
  }
  function nt(T) {
    le[T ? "unshift" : "push"](() => {
      B = T, t(8, B);
    });
  }
  const at = () => G && j && G.layout(), lt = () => t(10, O = void 0), It = () => t(11, D = void 0), Vt = () => G && G.handleHeaderRowCheckboxChange();
  return n.$$set = (T) => {
    e = z(z({}, e), Te(T)), t(25, i = de(e, l)), "use" in T && t(0, g = T.use), "class" in T && t(1, p = T.class), "stickyHeader" in T && t(2, h = T.stickyHeader), "sortable" in T && t(28, b = T.sortable), "sort" in T && t(26, R = T.sort), "sortDirection" in T && t(27, y = T.sortDirection), "sortAscendingAriaLabel" in T && t(29, L = T.sortAscendingAriaLabel), "sortDescendingAriaLabel" in T && t(30, _ = T.sortDescendingAriaLabel), "container$use" in T && t(3, F = T.container$use), "container$class" in T && t(4, v = T.container$class), "table$use" in T && t(5, m = T.table$use), "table$class" in T && t(6, E = T.table$class), "$$scope" in T && t(35, u = T.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && tn(Z, o = R, o), n.$$.dirty[0] & /*sortDirection*/
    134217728 && tn(ge, s = y, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && G && ve !== r && (t(33, ve = r), r ? G.hideProgress() : G.showProgress());
  }, [
    g,
    p,
    h,
    F,
    v,
    m,
    E,
    G,
    B,
    k,
    O,
    D,
    X,
    ke,
    j,
    d,
    A,
    Z,
    ge,
    Fe,
    Oe,
    me,
    et,
    Rt,
    c,
    i,
    R,
    y,
    b,
    L,
    _,
    Ct,
    qe,
    ve,
    r,
    u,
    a,
    tt,
    nt,
    at,
    lt,
    It,
    Vt
  ];
}
class wa extends x {
  constructor(e) {
    super(), $(
      this,
      e,
      ka,
      ya,
      J,
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
function Sa(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), o = re(
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
      e = U("thead"), o && o.c(), ie(e, u);
    },
    m(c, f) {
      M(c, e, f), o && o.m(e, null), n[11](e), l = !0, i || (r = [
        ee(t = Le.call(
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
      512) && ae(
        o,
        s,
        c,
        /*$$scope*/
        c[9],
        l ? se(
          s,
          /*$$scope*/
          c[9],
          f,
          null
        ) : oe(
          /*$$scope*/
          c[9]
        ),
        null
      ), ie(e, u = fe(a, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && _e(t.update) && f & /*use*/
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
      S(o, c), l = !1;
    },
    d(c) {
      c && H(e), o && o.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function La(n, e, t) {
  const l = ["use", "getElement"];
  let i = de(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = Ue(Re());
  let { use: a = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !0), Ze(() => {
    const _ = {
      get cells() {
        return f;
      },
      get orderedCells() {
        return b();
      },
      get checkbox() {
        return c;
      }
    };
    return Ie(R(), "SMUIDataTableHeader:mount", _), () => {
      Ie(R(), "SMUIDataTableHeader:unmount", _);
    };
  });
  function g(_) {
    t(2, c = _.detail);
  }
  function p(_) {
    f.push(_.detail), d.set(_.detail.element, _.detail), _.stopPropagation();
  }
  function h(_) {
    const F = f.indexOf(_.detail);
    F !== -1 && (f.splice(F, 1), f = f), d.delete(_.detail.element), _.stopPropagation();
  }
  function b() {
    return [...R().querySelectorAll(".mdc-data-table__header-cell")].map((_) => d.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function R() {
    return u;
  }
  function y(_) {
    le[_ ? "unshift" : "push"](() => {
      u = _, t(1, u);
    });
  }
  const L = () => t(2, c = void 0);
  return n.$$set = (_) => {
    e = z(z({}, e), Te(_)), t(7, i = de(e, l)), "use" in _ && t(0, a = _.use), "$$scope" in _ && t(9, s = _.$$scope);
  }, [
    a,
    u,
    c,
    o,
    g,
    p,
    h,
    i,
    R,
    s,
    r,
    y,
    L
  ];
}
class Ra extends x {
  constructor(e) {
    super(), $(this, e, La, Sa, J, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Ea(n) {
  let e, t, l, i, r, s;
  const o = (
    /*#slots*/
    n[9].default
  ), a = re(
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
      e = U("tbody"), a && a.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), a && a.m(e, null), n[10](e), i = !0, r || (s = [
        ee(l = Le.call(
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
      256) && ae(
        a,
        o,
        f,
        /*$$scope*/
        f[8],
        i ? se(
          o,
          /*$$scope*/
          f[8],
          d,
          null
        ) : oe(
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
      ])), l && _e(l.update) && d & /*use*/
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
      S(a, f), i = !1;
    },
    d(f) {
      f && H(e), a && a.d(f), n[10](null), r = !1, he(s);
    }
  };
}
function Pa(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = de(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = Ue(Re());
  let { use: a = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !1), Ze(() => {
    const y = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return h();
      }
    };
    return Ie(b(), "SMUIDataTableBody:mount", y), () => {
      Ie(b(), "SMUIDataTableBody:unmount", y);
    };
  });
  function g(y) {
    f.push(y.detail), d.set(y.detail.element, y.detail), y.stopPropagation();
  }
  function p(y) {
    const L = f.indexOf(y.detail);
    L !== -1 && (f.splice(L, 1), f = f), d.delete(y.detail.element), y.stopPropagation();
  }
  function h() {
    return [...b().querySelectorAll(".mdc-data-table__row")].map((y) => d.get(y)).filter((y) => y && y._smui_data_table_row_accessor);
  }
  function b() {
    return c;
  }
  function R(y) {
    le[y ? "unshift" : "push"](() => {
      c = y, t(2, c);
    });
  }
  return n.$$set = (y) => {
    e = z(z({}, e), Te(y)), t(6, i = de(e, l)), "use" in y && t(0, a = y.use), "class" in y && t(1, u = y.class), "$$scope" in y && t(8, s = y.$$scope);
  }, [
    a,
    u,
    c,
    o,
    g,
    p,
    i,
    b,
    s,
    r,
    R
  ];
}
class Da extends x {
  constructor(e) {
    super(), $(this, e, Pa, Ea, J, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Ha(n) {
  let e, t, l, i, r, s, o;
  const a = (
    /*#slots*/
    n[15].default
  ), u = re(
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
      e = U("tr"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[16](e), r = !0, s || (o = [
        ee(i = Le.call(
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
      16384) && ae(
        u,
        a,
        d,
        /*$$scope*/
        d[14],
        r ? se(
          a,
          /*$$scope*/
          d[14],
          g,
          null
        ) : oe(
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
      ])), i && _e(i.update) && g & /*use*/
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
      S(u, d), r = !1;
    },
    d(d) {
      d && H(e), u && u.d(d), n[16](null), s = !1, he(o);
    }
  };
}
let Ma = 0;
function Ta(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = de(e, l), { $$slots: r = {}, $$scope: s } = e;
  const o = Ue(Re());
  let { use: a = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Ma++ } = e, f, d, g = {}, p = {}, h = We("SMUI:data-table:row:header");
  Ze(() => {
    const k = h ? {
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
        var O;
        return (O = d && d.checked) !== null && O !== void 0 ? O : !1;
      },
      addClass: R,
      removeClass: y,
      getAttr: L,
      addAttr: _
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
        var O;
        return (O = d && d.checked) !== null && O !== void 0 ? O : !1;
      },
      addClass: R,
      removeClass: y,
      getAttr: L,
      addAttr: _
    };
    return Ie(m(), "SMUIDataTableRow:mount", k), () => {
      Ie(m(), "SMUIDataTableRow:unmount", k);
    };
  });
  function b(k) {
    t(3, d = k.detail);
  }
  function R(k) {
    g[k] || t(4, g[k] = !0, g);
  }
  function y(k) {
    (!(k in g) || g[k]) && t(4, g[k] = !1, g);
  }
  function L(k) {
    var O;
    return k in p ? (O = p[k]) !== null && O !== void 0 ? O : null : m().getAttribute(k);
  }
  function _(k, O) {
    p[k] !== O && t(5, p[k] = O, p);
  }
  function F(k) {
    Ie(m(), "SMUIDataTableHeader:click", k);
  }
  function v(k) {
    Ie(m(), "SMUIDataTableRow:click", { rowId: c, target: k.target });
  }
  function m() {
    return f;
  }
  function E(k) {
    le[k ? "unshift" : "push"](() => {
      f = k, t(2, f);
    });
  }
  const B = (k) => h ? F(k) : v(k), G = () => t(3, d = void 0);
  return n.$$set = (k) => {
    e = z(z({}, e), Te(k)), t(11, i = de(e, l)), "use" in k && t(0, a = k.use), "class" in k && t(1, u = k.class), "rowId" in k && t(12, c = k.rowId), "$$scope" in k && t(14, s = k.$$scope);
  }, [
    a,
    u,
    f,
    d,
    g,
    p,
    o,
    h,
    b,
    F,
    v,
    i,
    c,
    m,
    s,
    r,
    E,
    B,
    G
  ];
}
class xl extends x {
  constructor(e) {
    super(), $(this, e, Ta, Ha, J, {
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
function Fa(n) {
  let e, t, l, i, r, s;
  const o = (
    /*#slots*/
    n[22].default
  ), a = re(
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
      e = U("td"), a && a.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), a && a.m(e, null), n[25](e), i = !0, r || (s = [
        ee(l = Le.call(
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
      2097152) && ae(
        a,
        o,
        f,
        /*$$scope*/
        f[21],
        i ? se(
          o,
          /*$$scope*/
          f[21],
          d,
          null
        ) : oe(
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
      ])), l && _e(l.update) && d & /*use*/
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
      S(a, f), i = !1;
    },
    d(f) {
      f && H(e), a && a.d(f), n[25](null), r = !1, he(s);
    }
  };
}
function Ga(n) {
  let e, t, l, i, r, s, o, a, u;
  const c = [Oa, Ua], f = [];
  function d(h, b) {
    return (
      /*sortable*/
      h[5] ? 0 : 1
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
  ], p = {};
  for (let h = 0; h < g.length; h += 1)
    p = z(p, g[h]);
  return {
    c() {
      e = U("th"), l.c(), ie(e, p);
    },
    m(h, b) {
      M(h, e, b), f[t].m(e, null), n[23](e), o = !0, a || (u = [
        ee(s = Le.call(
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
    p(h, b) {
      let R = t;
      t = d(h), t === R ? f[t].p(h, b) : (ue(), S(f[R], 1, 1, () => {
        f[R] = null;
      }), ce(), l = f[t], l ? l.p(h, b) : (l = f[t] = c[t](h), l.c()), C(l, 1), l.m(e, null)), ie(e, p = fe(g, [
        (!o || b & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = te({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            h[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            h[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            h[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            h[5] && /*$sort*/
            h[9] === /*columnId*/
            h[4]
          ),
          .../*internalClasses*/
          h[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!o || b & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          h[4]
        ) },
        (!o || b & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        h[5] ? (
          /*$sort*/
          h[9] === /*columnId*/
          h[4] ? (
            /*$sortDirection*/
            h[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        b & /*internalAttrs*/
        256 && /*internalAttrs*/
        h[8],
        b & /*$$restProps*/
        524288 && /*$$restProps*/
        h[19]
      ])), s && _e(s.update) && b & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      o || (C(l), o = !0);
    },
    o(h) {
      S(l), o = !1;
    },
    d(h) {
      h && H(e), f[t].d(), n[23](null), a = !1, he(u);
    }
  };
}
function Ua(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = re(
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
      2097152) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? se(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : oe(
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
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Oa(n) {
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
  ), u = re(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = U("div"), u && u.c(), t = W(), l = U("div"), r = ne(i), I(l, "class", "mdc-data-table__sort-status-label"), I(l, "aria-hidden", "true"), I(l, "id", s = /*columnId*/
      n[4] + "-status-label"), I(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      M(c, e, f), u && u.m(e, null), P(e, t), P(e, l), P(l, r), o = !0;
    },
    p(c, f) {
      u && u.p && (!o || f & /*$$scope*/
      2097152) && ae(
        u,
        a,
        c,
        /*$$scope*/
        c[21],
        o ? se(
          a,
          /*$$scope*/
          c[21],
          f,
          null
        ) : oe(
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
      ) : "") + "") && be(r, i), (!o || f & /*columnId*/
      16 && s !== (s = /*columnId*/
      c[4] + "-status-label")) && I(l, "id", s);
    },
    i(c) {
      o || (C(u, c), o = !0);
    },
    o(c) {
      S(u, c), o = !1;
    },
    d(c) {
      c && H(e), u && u.d(c);
    }
  };
}
function Wa(n) {
  let e, t, l, i;
  const r = [Ga, Fa], s = [];
  function o(a, u) {
    return (
      /*header*/
      a[12] ? 0 : 1
    );
  }
  return e = o(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = ye();
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
      S(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
let Ba = 0;
function Za(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = de(e, l), r, s, { $$slots: o = {}, $$scope: a } = e;
  const u = Ue(Re());
  let c = We("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: p = !1 } = e, { columnId: h = c ? "SMUI-data-table-column-" + Ba++ : "SMUI-data-table-unused" } = e, { sortable: b = We("SMUI:data-table:sortable") } = e, R, y = {}, L = {}, _ = We("SMUI:data-table:sort");
  ft(n, _, (A) => t(9, r = A));
  let F = We("SMUI:data-table:sortDirection");
  ft(n, F, (A) => t(10, s = A));
  let v = We("SMUI:data-table:sortAscendingAriaLabel"), m = We("SMUI:data-table:sortDescendingAriaLabel");
  b && (He("SMUI:label:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:aria-describedby", h + "-status-label")), Ze(() => {
    const A = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return h;
      },
      addClass: E,
      removeClass: B,
      getAttr: G,
      addAttr: k
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: E,
      removeClass: B,
      getAttr: G,
      addAttr: k
    };
    return Ie(X(), "SMUIDataTableCell:mount", A), () => {
      Ie(X(), "SMUIDataTableCell:unmount", A);
    };
  });
  function E(A) {
    y[A] || t(7, y[A] = !0, y);
  }
  function B(A) {
    (!(A in y) || y[A]) && t(7, y[A] = !1, y);
  }
  function G(A) {
    var Z;
    return A in L ? (Z = L[A]) !== null && Z !== void 0 ? Z : null : X().getAttribute(A);
  }
  function k(A, Z) {
    L[A] !== Z && t(8, L[A] = Z, L);
  }
  function O(A) {
    Ie(X(), "SMUIDataTableHeaderCheckbox:change", A);
  }
  function D(A) {
    Ie(X(), "SMUIDataTableBodyCheckbox:change", A);
  }
  function X() {
    return R;
  }
  function ke(A) {
    le[A ? "unshift" : "push"](() => {
      R = A, t(6, R);
    });
  }
  const Ce = (A) => p && O(A);
  function pe(A) {
    le[A ? "unshift" : "push"](() => {
      R = A, t(6, R);
    });
  }
  const j = (A) => p && D(A);
  return n.$$set = (A) => {
    e = z(z({}, e), Te(A)), t(19, i = de(e, l)), "use" in A && t(0, f = A.use), "class" in A && t(1, d = A.class), "numeric" in A && t(2, g = A.numeric), "checkbox" in A && t(3, p = A.checkbox), "columnId" in A && t(4, h = A.columnId), "sortable" in A && t(5, b = A.sortable), "$$scope" in A && t(21, a = A.$$scope);
  }, [
    f,
    d,
    g,
    p,
    h,
    b,
    R,
    y,
    L,
    r,
    s,
    u,
    c,
    _,
    F,
    v,
    m,
    O,
    D,
    i,
    X,
    a,
    o,
    ke,
    Ce,
    pe,
    j
  ];
}
class qt extends x {
  constructor(e) {
    super(), $(this, e, Za, Wa, J, {
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
const { Boolean: ei } = Zi;
function rl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const Na = (n) => ({ item: n & /*items*/
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
function qa(n) {
  let e, t;
  return e = new wa({
    props: {
      style: "width: 100%;",
      $$slots: { default: [eo] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Va(n) {
  let e, t;
  return {
    c() {
      e = U("p"), t = ne(
        /*emptyText*/
        n[4]
      ), I(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && be(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: Q,
    o: Q,
    d(l) {
      l && H(e);
    }
  };
}
function ja(n) {
  let e, t;
  return {
    c() {
      e = U("p"), t = ne(
        /*errorMsg*/
        n[3]
      ), I(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && be(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: Q,
    o: Q,
    d(l) {
      l && H(e);
    }
  };
}
function za(n) {
  let e;
  return {
    c() {
      e = U("p"), e.textContent = "Loading…", I(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      M(t, e, l);
    },
    p: Q,
    i: Q,
    o: Q,
    d(t) {
      t && H(e);
    }
  };
}
function Xa(n) {
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
      l[20].header + "") && be(t, e);
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
      $$slots: { default: [Xa] },
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
      S(e.$$.fragment, l), t = !1;
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ya(n) {
  let e, t, l, i = Ae(
    /*columns*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = ul(ol(n, i, a));
  const s = (a) => S(r[a], 1, 1, () => {
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
      e = W(), o && o.c(), t = ye();
    },
    m(a, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(a, u);
      M(a, e, u), o && o.m(a, u), M(a, t, u), l = !0;
    },
    p(a, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = Ae(
          /*columns*/
          a[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = ol(a, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = ul(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ue(), c = i.length; c < r.length; c += 1)
          s(c);
        ce();
      }
      /*slotHasActions*/
      a[9] ? o ? (o.p(a, u), u & /*slotHasActions*/
      512 && C(o, 1)) : (o = cl(a), o.c(), C(o, 1), o.m(t.parentNode, t)) : o && (ue(), S(o, 1, 1, () => {
        o = null;
      }), ce());
    },
    i(a) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(o), l = !0;
      }
    },
    o(a) {
      r = r.filter(ei);
      for (let u = 0; u < r.length; u += 1)
        S(r[u]);
      S(o), l = !1;
    },
    d(a) {
      a && (H(e), H(t)), Ve(r, a), o && o.d(a);
    }
  };
}
function Ka(n) {
  let e, t;
  return e = new xl({
    props: {
      $$slots: { default: [Ya] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Qa(n) {
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
      ]) ?? "") + "") && be(t, e);
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
      $$slots: { default: [Qa] },
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
      S(e.$$.fragment, l), t = !1;
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
      $$slots: { default: [Ja] },
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ja(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = re(
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
      16385) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? se(
          t,
          /*$$scope*/
          i[14],
          r,
          Na
        ) : oe(
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
      S(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function $a(n) {
  let e, t, l, i = Ae(
    /*columns*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = fl(al(n, i, a));
  const s = (a) => S(r[a], 1, 1, () => {
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
      e = W(), o && o.c(), t = W();
    },
    m(a, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(a, u);
      M(a, e, u), o && o.m(a, u), M(a, t, u), l = !0;
    },
    p(a, u) {
      if (u & /*items, columns*/
      3) {
        i = Ae(
          /*columns*/
          a[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = al(a, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = fl(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ue(), c = i.length; c < r.length; c += 1)
          s(c);
        ce();
      }
      /*slotHasActions*/
      a[9] ? o ? (o.p(a, u), u & /*slotHasActions*/
      512 && C(o, 1)) : (o = dl(a), o.c(), C(o, 1), o.m(t.parentNode, t)) : o && (ue(), S(o, 1, 1, () => {
        o = null;
      }), ce());
    },
    i(a) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(o), l = !0;
      }
    },
    o(a) {
      r = r.filter(ei);
      for (let u = 0; u < r.length; u += 1)
        S(r[u]);
      S(o), l = !1;
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
  return l = new xl({
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
      $$slots: { default: [$a] },
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
      t = ye(), V(l.$$.fragment), this.first = t;
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
      S(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), q(l, s);
    }
  };
}
function xa(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = Ae(
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
      l = ye();
    },
    m(o, a) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(o, a);
      M(o, l, a), i = !0;
    },
    p(o, a) {
      a & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = Ae(
        /*items*/
        o[0]
      ), ue(), e = Ji(e, a, s, 1, o, r, t, l.parentNode, Qi, gl, l, rl), ce());
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
        S(e[a]);
      i = !1;
    },
    d(o) {
      o && H(l);
      for (let a = 0; a < e.length; a += 1)
        e[a].d(o);
    }
  };
}
function eo(n) {
  let e, t, l, i;
  return e = new Ra({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [Ka] },
      $$scope: { ctx: n }
    }
  }), l = new Da({
    props: {
      $$slots: { default: [xa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment), t = W(), V(l.$$.fragment);
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
      S(e.$$.fragment, r), S(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && H(t), q(e, r), q(l, r);
    }
  };
}
function to(n) {
  let e, t, l, i;
  const r = [za, ja, Va, qa], s = [];
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
      t.c(), l = ye();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (ue(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ce(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      S(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function no(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = an(i);
  let { items: o = [] } = e, { columns: a = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (_, F) => {
    var v, m;
    return (m = _ && ((v = _.id) !== null && v !== void 0 ? v : _.key)) !== null && m !== void 0 ? m : F;
  } } = e, { headerBg: g = null } = e, { rowBg: p = null } = e, h = null;
  const b = s;
  let { hasActions: R = !1 } = e;
  const y = (_, F) => t(8, h = d(_, F)), L = () => t(8, h = null);
  return n.$$set = (_) => {
    "items" in _ && t(0, o = _.items), "columns" in _ && t(1, a = _.columns), "loading" in _ && t(2, u = _.loading), "errorMsg" in _ && t(3, c = _.errorMsg), "emptyText" in _ && t(4, f = _.emptyText), "getRowId" in _ && t(5, d = _.getRowId), "headerBg" in _ && t(6, g = _.headerBg), "rowBg" in _ && t(7, p = _.rowBg), "hasActions" in _ && t(10, R = _.hasActions), "$$scope" in _ && t(14, r = _.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = R || !!(b != null && b.actions));
  }, [
    o,
    a,
    u,
    c,
    f,
    d,
    g,
    p,
    h,
    l,
    R,
    i,
    y,
    L,
    r
  ];
}
class lo extends x {
  constructor(e) {
    super(), $(this, e, no, to, J, {
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
      e = U("span"), l = ne(t), I(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r), P(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && be(l, t);
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
      e = U("span"), e.textContent = "chevron_right", I(e, "class", "material-icons separator svelte-1ngm2be");
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
  function p() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7]
      )
    );
  }
  let h = (
    /*i*/
    n[7] < /*breadcrumbs*/
    n[0].length - 1 && pl()
  );
  return {
    c() {
      e = U("div"), t = U("span"), l = U("span"), r = ne(i), s = W(), g && g.c(), u = W(), h && h.c(), c = W(), I(l, "class", "label svelte-1ngm2be"), I(t, "class", o = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), I(t, "aria-current", a = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), I(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(b, R) {
      M(b, e, R), P(e, t), P(t, l), P(l, r), P(t, s), g && g.m(t, null), P(e, u), h && h.m(e, null), P(e, c), f || (d = K(t, "click", p), f = !0);
    },
    p(b, R) {
      n = b, R & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && be(r, i), /*crumb*/
      n[5].secondaryLabel ? g ? g.p(n, R) : (g = hl(n), g.c(), g.m(t, null)) : g && (g.d(1), g = null), R & /*breadcrumbs, activeIndex*/
      3 && o !== (o = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && I(t, "class", o), R & /*activeIndex*/
      2 && a !== (a = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && I(t, "aria-current", a), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? h || (h = pl(), h.c(), h.m(e, c)) : h && (h.d(1), h = null);
    },
    d(b) {
      b && H(e), g && g.d(), h && h.d(), f = !1, d();
    }
  };
}
function io(n) {
  let e, t = Ae(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = _l(ml(n, t, i));
  return {
    c() {
      e = U("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      I(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = Ae(
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
    i: Q,
    o: Q,
    d(i) {
      i && H(e), Ve(l, i);
    }
  };
}
function ro(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = ze(), s = (a) => {
    l[a].enabled && a !== i && r("click", { index: a });
  }, o = (a) => s(a);
  return n.$$set = (a) => {
    "breadcrumbs" in a && t(0, l = a.breadcrumbs), "activeIndex" in a && t(1, i = a.activeIndex);
  }, [l, i, s, o];
}
class on extends x {
  constructor(e) {
    super(), $(this, e, ro, io, J, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const so = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
so.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function ao(n) {
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
function oo(n) {
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
function uo(n) {
  let e, t, l, i, r, s, o, a;
  t = new Ys({
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
  r = new ia({
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
      e = U("button"), V(t.$$.fragment), l = W(), i = U("button"), V(r.$$.fragment), I(e, "type", "button"), I(e, "class", "icon svelte-wxofq2"), I(e, "aria-label", "View process"), I(i, "type", "button"), I(i, "class", "icon svelte-wxofq2"), I(i, "aria-label", "Start process");
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
      S(t.$$.fragment, f), S(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (H(e), H(l), H(i)), q(t), q(r), o = !1, he(a);
    }
  };
}
function co(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, p, h, b, R;
  i = new oa({}), a = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [ao] },
      $$scope: { ctx: n }
    }
  }), a.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function y(_) {
    n[12](_);
  }
  let L = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (L.value = /*searchQuery*/
    n[2]), f = new Fs({ props: L }), le.push(() => Je(f, "value", y)), p = new ht({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [oo] },
        $$scope: { ctx: n }
      }
    }), p.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), b = new lo({
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
            uo,
            ({ item: _ }) => ({ 16: _ }),
            ({ item: _ }) => _ ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = U("div"), t = U("div"), l = U("div"), V(i.$$.fragment), r = W(), s = U("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, o = W(), V(a.$$.fragment), u = W(), c = U("div"), V(f.$$.fragment), g = W(), V(p.$$.fragment), h = W(), V(b.$$.fragment), I(s, "class", "svelte-wxofq2"), I(l, "class", "process-banner__info svelte-wxofq2"), I(t, "class", "process-banner svelte-wxofq2"), I(c, "class", "process-toolbar svelte-wxofq2"), I(e, "class", "processes svelte-wxofq2");
      },
      m(_, F) {
        M(_, e, F), P(e, t), P(t, l), N(i, l, null), P(l, r), P(l, s), P(t, o), N(a, t, null), P(e, u), P(e, c), N(f, c, null), P(c, g), N(p, c, null), P(e, h), N(b, e, null), R = !0;
      },
      p(_, [F]) {
        const v = {};
        F & /*$$scope*/
        131072 && (v.$$scope = { dirty: F, ctx: _ }), a.$set(v);
        const m = {};
        !d && F & /*searchQuery*/
        4 && (d = !0, m.value = /*searchQuery*/
        _[2], Qe(() => d = !1)), f.$set(m);
        const E = {};
        F & /*$$scope*/
        131072 && (E.$$scope = { dirty: F, ctx: _ }), p.$set(E);
        const B = {};
        F & /*filteredRows*/
        8 && (B.items = /*filteredRows*/
        _[3]), F & /*loading*/
        1 && (B.loading = /*loading*/
        _[0]), F & /*errorMsg*/
        2 && (B.errorMsg = /*errorMsg*/
        _[1]), F & /*$$scope, item*/
        196608 && (B.$$scope = { dirty: F, ctx: _ }), b.$set(B);
      },
      i(_) {
        R || (C(i.$$.fragment, _), C(a.$$.fragment, _), C(f.$$.fragment, _), C(p.$$.fragment, _), C(b.$$.fragment, _), R = !0);
      },
      o(_) {
        S(i.$$.fragment, _), S(a.$$.fragment, _), S(f.$$.fragment, _), S(p.$$.fragment, _), S(b.$$.fragment, _), R = !1;
      },
      d(_) {
        _ && H(e), q(i), q(a), q(f), q(p), q(b);
      }
    }
  );
}
function fo(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: o = !1 } = e, { errorMsg: a = "" } = e;
  const u = ze(), c = (L) => u("start", L), f = (L) => u("view", L);
  let d = "";
  const g = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], p = () => {
    console.log("Add new process clicked");
  }, h = () => console.log("Continue Process");
  function b(L) {
    d = L, t(2, d);
  }
  const R = (L) => f(L), y = (L) => c(L);
  return n.$$set = (L) => {
    "processes" in L && t(8, s = L.processes), "loading" in L && t(0, o = L.loading), "errorMsg" in L && t(1, a = L.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((L) => Object.assign(Object.assign({}, L), { displayName: L.name || L.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((L) => {
      var _;
      return ((_ = L.displayName) !== null && _ !== void 0 ? _ : "").toLowerCase().includes(l);
    }) : i);
  }, [
    o,
    a,
    d,
    r,
    c,
    f,
    g,
    p,
    s,
    i,
    l,
    h,
    b,
    R,
    y
  ];
}
class go extends x {
  constructor(e) {
    super(), $(this, e, fo, co, J, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function bl(n, e, t) {
  const l = n.slice();
  return l[7] = e[t], l[9] = t, l;
}
function mo(n) {
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
    p: Q,
    i: Q,
    o: Q,
    d(l) {
      l && H(t);
    }
  };
}
function ho(n) {
  let e, t, l, i;
  const r = [vo, bo, _o, po], s = [];
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
      t.c(), l = ye();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, u) {
      let c = e;
      e = o(a), e !== c && (ue(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ce(), t = s[e], t || (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      S(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function po(n) {
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
    i: Q,
    o: Q,
    d(l) {
      l && H(t);
    }
  };
}
function _o(n) {
  let e, t;
  return e = new ea({}), {
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function bo(n) {
  let e, t;
  return e = new $s({}), {
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function vo(n) {
  let e, t;
  return e = new Qs({}), {
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Co(n) {
  let e, t, l, i, r, s, o, a;
  const u = [ho, mo], c = [];
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
      e = U("button"), i.c(), I(e, "aria-current", r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0), je(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), je(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), je(
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
      M(g, e, p), c[l].m(e, null), s = !0, o || (a = K(e, "click", d), o = !0);
    },
    p(g, p) {
      n = g;
      let h = l;
      l = f(n, p), l === h ? c[l].p(n, p) : (ue(), S(c[h], 1, 1, () => {
        c[h] = null;
      }), ce(), i = c[l], i ? i.p(n, p) : (i = c[l] = u[l](n), i.c()), C(i, 1), i.m(e, null)), (!s || p & /*items, currentId*/
      5 && r !== (r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0)) && I(e, "aria-current", r), (!s || p & /*visited, items*/
      3) && je(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), (!s || p & /*items, currentId*/
      5) && je(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), (!s || p & /*visited, items, currentId*/
      7) && je(
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
      S(i), s = !1;
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
      e = U("div"), I(e, "class", "step-line svelte-swalin"), I(e, "aria-hidden", "true");
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
  t = new va({
    props: {
      content: (
        /*tooltipMap*/
        n[4][
          /*item*/
          n[7].id
        ] ?? ""
      ),
      side: "bottom",
      $$slots: { default: [Co] },
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
      e = U("div"), V(t.$$.fragment), l = W(), i = U("p"), s = ne(r), o = W(), c && c.c(), a = ye(), I(e, "class", "step svelte-swalin");
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
      f[7].label + "") && be(s, r), /*i*/
      f[9] < /*items*/
      f[0].length - 1 ? c || (c = vl(), c.c(), c.m(a.parentNode, a)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (C(t.$$.fragment, f), u = !0);
    },
    o(f) {
      S(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (H(e), H(o), H(a)), q(t), c && c.d(f);
    }
  };
}
function Io(n) {
  let e, t, l = Ae(
    /*items*/
    n[0]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = Cl(bl(n, l, s));
  const r = (s) => S(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = U("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      I(e, "class", "steps svelte-swalin");
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
        l = Ae(
          /*items*/
          s[0]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const u = bl(s, l, a);
          i[a] ? (i[a].p(u, o), C(i[a], 1)) : (i[a] = Cl(u), i[a].c(), C(i[a], 1), i[a].m(e, null));
        }
        for (ue(), a = l.length; a < i.length; a += 1)
          r(a);
        ce();
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
        S(i[o]);
      t = !1;
    },
    d(s) {
      s && H(e), Ve(i, s);
    }
  };
}
function Ao(n, e, t) {
  let { items: l = [] } = e, { visited: i = [] } = e, { currentId: r = null } = e, { status: s = {} } = e, { tooltipMap: o = {} } = e;
  const a = ze(), u = (c) => a("select", c.id);
  return n.$$set = (c) => {
    "items" in c && t(0, l = c.items), "visited" in c && t(1, i = c.visited), "currentId" in c && t(2, r = c.currentId), "status" in c && t(3, s = c.status), "tooltipMap" in c && t(4, o = c.tooltipMap);
  }, [l, i, r, s, o, a, u];
}
class ti extends x {
  constructor(e) {
    super(), $(this, e, Ao, Io, J, {
      items: 0,
      visited: 1,
      currentId: 2,
      status: 3,
      tooltipMap: 4
    });
  }
}
function yo(n) {
  let e, t;
  return e = new ti({
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ko(n, e, t) {
  const l = ze(), i = [
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
class wo extends x {
  constructor(e) {
    super(), $(this, e, ko, yo, J, { currentId: 0, visited: 1 });
  }
}
function So(n) {
  let e, t, l, i, r, s, o, a, u, c, f;
  return l = new da({}), {
    c() {
      e = U("div"), t = U("button"), V(l.$$.fragment), i = W(), r = U("span"), r.textContent = "Back to Overview", s = W(), o = U("span"), a = ne(
        /*title*/
        n[0]
      ), I(o, "class", "back-container__title svelte-1p6ln66"), I(t, "type", "button"), I(t, "class", "back-container svelte-1p6ln66"), Yt(e, "display", "flex"), Yt(e, "align-items", "center"), Yt(e, "gap", "0.5rem");
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
      1) && be(
        a,
        /*title*/
        d[0]
      );
    },
    i(d) {
      u || (C(l.$$.fragment, d), u = !0);
    },
    o(d) {
      S(l.$$.fragment, d), u = !1;
    },
    d(d) {
      d && H(e), q(l), c = !1, f();
    }
  };
}
function Lo(n, e, t) {
  let { title: l = "Engineering Wizard" } = e;
  const i = ze();
  function r() {
    i("back");
  }
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title);
  }, [l, r];
}
class ni extends x {
  constructor(e) {
    super(), $(this, e, Lo, So, J, { title: 0 });
  }
}
function Il(n, e, t) {
  const l = n.slice();
  return l[3] = e[t], l[5] = t, l;
}
function Al(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l;
}
function Ro(n) {
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
function yl(n) {
  let e, t, l = (
    /*plugin*/
    n[6].name + ""
  ), i, r;
  return {
    c() {
      e = U("div"), t = U("span"), i = ne(l), r = W(), I(t, "class", "plugin-item__name svelte-siq5x1"), I(e, "class", "plugin-item svelte-siq5x1");
    },
    m(s, o) {
      M(s, e, o), P(e, t), P(t, i), P(e, r);
    },
    p(s, o) {
      o & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      s[6].name + "") && be(i, l);
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
  ), o, a, u, c, f = Ae(
    /*group*/
    n[3].plugins
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = yl(Al(n, f, g));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("span"), l.textContent = `${/*i*/
      n[5] + 1}.`, i = W(), r = U("span"), o = ne(s), a = W(), u = U("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      c = W(), I(l, "class", "plugin__index svelte-siq5x1"), I(r, "class", "plugin__title svelte-siq5x1"), I(t, "class", "plugin__group-title svelte-siq5x1"), I(u, "class", "plugin__items svelte-siq5x1"), I(e, "class", "plugin svelte-siq5x1");
    },
    m(g, p) {
      M(g, e, p), P(e, t), P(t, l), P(t, i), P(t, r), P(r, o), P(e, a), P(e, u);
      for (let h = 0; h < d.length; h += 1)
        d[h] && d[h].m(u, null);
      P(e, c);
    },
    p(g, p) {
      if (p & /*pluginGroups*/
      1 && s !== (s = /*group*/
      g[3].title + "") && be(o, s), p & /*pluginGroups*/
      1) {
        f = Ae(
          /*group*/
          g[3].plugins
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const b = Al(g, f, h);
          d[h] ? d[h].p(b, p) : (d[h] = yl(b), d[h].c(), d[h].m(u, null));
        }
        for (; h < d.length; h += 1)
          d[h].d(1);
        d.length = f.length;
      }
    },
    d(g) {
      g && H(e), Ve(d, g);
    }
  };
}
function Eo(n) {
  let e, t, l, i, r, s, o;
  r = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      $$slots: { default: [Ro] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*requestEdit*/
    n[1]
  );
  let a = Ae(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let c = 0; c < a.length; c += 1)
    u[c] = kl(Il(n, a, c));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("p"), l.textContent = "Process", i = W(), V(r.$$.fragment), s = W();
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      I(l, "class", "svelte-siq5x1"), I(t, "class", "plugins-list__header svelte-siq5x1"), I(e, "class", "plugins-list svelte-siq5x1");
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
        a = Ae(
          /*pluginGroups*/
          c[0]
        );
        let g;
        for (g = 0; g < a.length; g += 1) {
          const p = Il(c, a, g);
          u[g] ? u[g].p(p, f) : (u[g] = kl(p), u[g].c(), u[g].m(e, null));
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
      S(r.$$.fragment, c), o = !1;
    },
    d(c) {
      c && H(e), q(r), Ve(u, c);
    }
  };
}
function Po(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = ze(), r = () => i("editRequested");
  return n.$$set = (s) => {
    "pluginGroups" in s && t(0, l = s.pluginGroups);
  }, [l, r];
}
class Do extends x {
  constructor(e) {
    super(), $(this, e, Po, Eo, J, { pluginGroups: 0 });
  }
}
function Ho(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function Mo(n) {
  var e;
  return (e = n == null ? void 0 : n.pluginGroups) != null && e.length ? n.pluginGroups : [{ title: "Process", plugins: (n == null ? void 0 : n.plugins) ?? [] }];
}
function To() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function Fo(n) {
  var e;
  (e = To()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function Go(n) {
  if (!customElements.get(n.id)) {
    const e = await import(
      /* @vite-ignore */
      n.src
    );
    customElements.define(n.id, e.default);
  }
}
async function Uo(n) {
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
const gt = wt(!0);
gt.subscribe((n) => {
  Fo(n);
});
function wl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Sl(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l[10] = t, l;
}
function Oo(n) {
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
  let e, t, l, i, r, s, o, a = (
    /*plugin*/
    n[8].name + ""
  ), u, c, f, d;
  function g() {
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
      e = U("div"), t = U("button"), l = U("span"), l.textContent = "−", s = W(), o = U("span"), u = ne(a), c = W(), I(l, "aria-hidden", "true"), I(l, "class", "plugin-item__minus svelte-qk2r5z"), I(t, "class", "plugin-item__remove svelte-qk2r5z"), I(t, "aria-label", i = `Remove ${/*plugin*/
      n[8].name}`), I(t, "title", r = `Remove ${/*plugin*/
      n[8].name}`), I(o, "class", "plugin-item__name svelte-qk2r5z"), I(e, "class", "plugin-item svelte-qk2r5z");
    },
    m(p, h) {
      M(p, e, h), P(e, t), P(t, l), P(e, s), P(e, o), P(o, u), P(e, c), f || (d = K(t, "click", g), f = !0);
    },
    p(p, h) {
      n = p, h & /*pluginGroups*/
      1 && i !== (i = `Remove ${/*plugin*/
      n[8].name}`) && I(t, "aria-label", i), h & /*pluginGroups*/
      1 && r !== (r = `Remove ${/*plugin*/
      n[8].name}`) && I(t, "title", r), h & /*pluginGroups*/
      1 && a !== (a = /*plugin*/
      n[8].name + "") && be(u, a);
    },
    d(p) {
      p && H(e), f = !1, d();
    }
  };
}
function Rl(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[5].title + ""
  ), o, a, u, c, f = Ae(
    /*group*/
    n[5].plugins
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = Ll(Sl(n, f, g));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("span"), l.textContent = `${/*i*/
      n[7] + 1}.`, i = W(), r = U("span"), o = ne(s), a = W(), u = U("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      c = W(), I(l, "class", "plugin__index svelte-qk2r5z"), I(r, "class", "plugin__title svelte-qk2r5z"), I(t, "class", "plugin__group-title svelte-qk2r5z"), I(u, "class", "plugin__items svelte-qk2r5z"), I(e, "class", "plugin svelte-qk2r5z");
    },
    m(g, p) {
      M(g, e, p), P(e, t), P(t, l), P(t, i), P(t, r), P(r, o), P(e, a), P(e, u);
      for (let h = 0; h < d.length; h += 1)
        d[h] && d[h].m(u, null);
      P(e, c);
    },
    p(g, p) {
      if (p & /*pluginGroups*/
      1 && s !== (s = /*group*/
      g[5].title + "") && be(o, s), p & /*pluginGroups, removeOne*/
      5) {
        f = Ae(
          /*group*/
          g[5].plugins
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const b = Sl(g, f, h);
          d[h] ? d[h].p(b, p) : (d[h] = Ll(b), d[h].c(), d[h].m(u, null));
        }
        for (; h < d.length; h += 1)
          d[h].d(1);
        d.length = f.length;
      }
    },
    d(g) {
      g && H(e), Ve(d, g);
    }
  };
}
function Wo(n) {
  let e, t, l, i, r, s, o;
  r = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Remove all plugins",
      $$slots: { default: [Oo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*removeAllPlugins*/
    n[1]
  );
  let a = Ae(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let c = 0; c < a.length; c += 1)
    u[c] = Rl(wl(n, a, c));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("p"), l.textContent = "Process", i = W(), V(r.$$.fragment), s = W();
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      I(l, "class", "svelte-qk2r5z"), I(t, "class", "plugins-list__header svelte-qk2r5z"), I(e, "class", "plugins-list svelte-qk2r5z");
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
      2048 && (d.$$scope = { dirty: f, ctx: c }), r.$set(d), f & /*pluginGroups, removeOne*/
      5) {
        a = Ae(
          /*pluginGroups*/
          c[0]
        );
        let g;
        for (g = 0; g < a.length; g += 1) {
          const p = wl(c, a, g);
          u[g] ? u[g].p(p, f) : (u[g] = Rl(p), u[g].c(), u[g].m(e, null));
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
      S(r.$$.fragment, c), o = !1;
    },
    d(c) {
      c && H(e), q(r), Ve(u, c);
    }
  };
}
function Bo(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = ze(), r = () => i("removeAllPlugins"), s = (a, u) => {
    const c = l[a], f = c.plugins[u];
    i("removePlugin", { groupIndex: a, pluginIndex: u, group: c, plugin: f });
  }, o = (a, u) => s(a, u);
  return n.$$set = (a) => {
    "pluginGroups" in a && t(0, l = a.pluginGroups);
  }, [l, r, s, o];
}
class Zo extends x {
  constructor(e) {
    super(), $(this, e, Bo, Wo, J, { pluginGroups: 0 });
  }
}
function No(n) {
  let e, t;
  return e = new Zo({
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function qo(n, e, t) {
  let { pluginGroups: l = [] } = e, { proc: i = null } = e;
  const r = (o) => console.log("remove all plugins", o), s = (o) => console.log("remove one", o.detail);
  return n.$$set = (o) => {
    "pluginGroups" in o && t(0, l = o.pluginGroups), "proc" in o && t(1, i = o.proc);
  }, [l, i, r, s];
}
class Vo extends x {
  constructor(e) {
    super(), $(this, e, qo, No, J, { pluginGroups: 0, proc: 1 });
  }
}
const jo = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc3VibmV0LWFkZHJlc3M8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+Z3NlLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+R1NFIENvbnRyb2wgQmxvY2tzIENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWdzZS1jb25maWc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+c212LWNvbmZpZy0wMDM8L2lkPgogICAgPG5hbWU+U01WIENvbnRyb2wgQmxvY2tzIENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXNtdi1jb25maWc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cgo=", zo = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWllZC1uYW1lLWZvcm1hdDwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5hcC1jb25maWctMDAyPC9pZD4KICAgIDxuYW1lPkFjY2VzcyBQb2ludCBDb25maWd1cmF0aW9uPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", Xo = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cgo=", Yo = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXJlcXVpcmVkLWlucHV0czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1uYW1pbmctMDAyPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIE5hbWluZyBDb252ZW50aW9uPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctY29tcGF0LTAwMzwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBDb21wYXRpYmlsaXR5PC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
function El(n, e, t) {
  const l = n.slice();
  return l[19] = e[t], l;
}
function Pl(n, e, t) {
  const l = n.slice();
  return l[22] = e[t], l[24] = t, l;
}
function Dl(n, e, t) {
  const l = n.slice();
  return l[25] = e[t], l[27] = t, l;
}
function Hl(n) {
  let e, t = Ae(
    /*group*/
    n[22].plugins
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = Ml(Dl(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = ye();
    },
    m(i, r) {
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(i, r);
      M(i, e, r);
    },
    p(i, r) {
      if (r & /*selectedIdx, activePluginIdx, selectPlugin, pluginGroups*/
      519) {
        t = Ae(
          /*group*/
          i[22].plugins
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const o = Dl(i, t, s);
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
    n[25].name + ""
  ), i, r, s, o;
  function a() {
    return (
      /*click_handler_1*/
      n[16](
        /*gIdx*/
        n[24],
        /*idx*/
        n[27]
      )
    );
  }
  return {
    c() {
      e = U("button"), t = U("span"), i = ne(l), r = W(), I(e, "type", "button"), I(e, "class", "validation-groups__plugin svelte-1e18b37"), je(
        e,
        "active",
        /*gIdx*/
        n[24] === /*selectedIdx*/
        n[1] && /*idx*/
        n[27] === /*activePluginIdx*/
        n[2]
      );
    },
    m(u, c) {
      M(u, e, c), P(e, t), P(t, i), P(e, r), s || (o = K(e, "click", a), s = !0);
    },
    p(u, c) {
      n = u, c & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      n[25].name + "") && be(i, l), c & /*selectedIdx, activePluginIdx*/
      6 && je(
        e,
        "active",
        /*gIdx*/
        n[24] === /*selectedIdx*/
        n[1] && /*idx*/
        n[27] === /*activePluginIdx*/
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
    n[22].title + ""
  ), i, r, s, o, a, u;
  function c() {
    return (
      /*click_handler*/
      n[15](
        /*gIdx*/
        n[24]
      )
    );
  }
  let f = (
    /*gIdx*/
    n[24] === /*selectedIdx*/
    n[1] && Hl(n)
  );
  return {
    c() {
      e = U("div"), t = U("button"), i = ne(l), s = W(), f && f.c(), o = W(), I(t, "type", "button"), I(t, "class", "validation-groups__group-title svelte-1e18b37"), I(t, "aria-pressed", r = /*gIdx*/
      n[24] === /*selectedIdx*/
      n[1]), I(e, "class", "validation-groups__group svelte-1e18b37"), je(
        e,
        "expanded",
        /*gIdx*/
        n[24] === /*selectedIdx*/
        n[1]
      );
    },
    m(d, g) {
      M(d, e, g), P(e, t), P(t, i), P(e, s), f && f.m(e, null), P(e, o), a || (u = K(t, "click", c), a = !0);
    },
    p(d, g) {
      n = d, g & /*pluginGroups*/
      1 && l !== (l = /*group*/
      n[22].title + "") && be(i, l), g & /*selectedIdx*/
      2 && r !== (r = /*gIdx*/
      n[24] === /*selectedIdx*/
      n[1]) && I(t, "aria-pressed", r), /*gIdx*/
      n[24] === /*selectedIdx*/
      n[1] ? f ? f.p(n, g) : (f = Hl(n), f.c(), f.m(e, o)) : f && (f.d(1), f = null), g & /*selectedIdx*/
      2 && je(
        e,
        "expanded",
        /*gIdx*/
        n[24] === /*selectedIdx*/
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
  const r = [$o, Jo, Qo, Ko], s = [];
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
      t.c(), l = ye();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, u) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (ue(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ce(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      S(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function Ko(n) {
  let e, t, l = Ae(
    /*validationEntries*/
    n[7]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = Ul(El(n, l, s));
  const r = (s) => S(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = U("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      I(e, "class", "validation-xml-list svelte-1e18b37");
    },
    m(s, o) {
      M(s, e, o);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(e, null);
      t = !0;
    },
    p(s, o) {
      if (o & /*validationEntries*/
      128) {
        l = Ae(
          /*validationEntries*/
          s[7]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const u = El(s, l, a);
          i[a] ? (i[a].p(u, o), C(i[a], 1)) : (i[a] = Ul(u), i[a].c(), C(i[a], 1), i[a].m(e, null));
        }
        for (ue(), a = l.length; a < i.length; a += 1)
          r(a);
        ce();
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
        S(i[o]);
      t = !1;
    },
    d(s) {
      s && H(e), Ve(i, s);
    }
  };
}
function Qo(n) {
  let e, t, l, i = (
    /*currentPlugin*/
    n[3].name + ""
  ), r, s, o, a, u;
  return {
    c() {
      e = U("div"), t = U("h4"), l = ne("XML for: "), r = ne(i), s = W(), o = U("div"), a = U("pre"), u = ne(
        /*xmlText*/
        n[4]
      ), I(t, "class", "xml-viewer__title svelte-1e18b37"), I(a, "class", "svelte-1e18b37"), I(o, "class", "xml-viewer__box svelte-1e18b37"), I(e, "class", "xml-viewer svelte-1e18b37");
    },
    m(c, f) {
      M(c, e, f), P(e, t), P(t, l), P(t, r), P(e, s), P(e, o), P(o, a), P(a, u);
    },
    p(c, f) {
      f & /*currentPlugin*/
      8 && i !== (i = /*currentPlugin*/
      c[3].name + "") && be(r, i), f & /*xmlText*/
      16 && be(
        u,
        /*xmlText*/
        c[4]
      );
    },
    i: Q,
    o: Q,
    d(c) {
      c && H(e);
    }
  };
}
function Jo(n) {
  let e, t;
  return {
    c() {
      e = U("p"), t = ne(
        /*xmlError*/
        n[6]
      ), I(e, "class", "error svelte-1e18b37");
    },
    m(l, i) {
      M(l, e, i), P(e, t);
    },
    p(l, i) {
      i & /*xmlError*/
      64 && be(
        t,
        /*xmlError*/
        l[6]
      );
    },
    i: Q,
    o: Q,
    d(l) {
      l && H(e);
    }
  };
}
function $o(n) {
  let e;
  return {
    c() {
      e = U("p"), e.textContent = "Loading…";
    },
    m(t, l) {
      M(t, e, l);
    },
    p: Q,
    i: Q,
    o: Q,
    d(t) {
      t && H(e);
    }
  };
}
function Gl(n) {
  let e, t = (
    /*validationEntry*/
    n[19].description + ""
  ), l;
  return {
    c() {
      e = U("span"), l = ne(t), I(e, "class", "validation-xml-container__description svelte-1e18b37");
    },
    m(i, r) {
      M(i, e, r), P(e, l);
    },
    p(i, r) {
      r & /*validationEntries*/
      128 && t !== (t = /*validationEntry*/
      i[19].description + "") && be(l, t);
    },
    d(i) {
      i && H(e);
    }
  };
}
function Ul(n) {
  let e, t, l, i = (
    /*validationEntry*/
    n[19].name + ""
  ), r, s, o, a, u, c, f, d, g, p, h, b = (
    /*validationEntry*/
    n[19].xml + ""
  ), R, y, L, _ = (
    /*validationEntry*/
    n[19].description && Gl(n)
  );
  return u = new Vs({ props: { svgStyles: "fill: #FF203A" } }), f = new pa({ props: { svgStyles: "fill: #004552" } }), {
    c() {
      e = U("div"), t = U("div"), l = U("span"), r = ne(i), s = W(), _ && _.c(), o = W(), a = U("div"), V(u.$$.fragment), c = W(), V(f.$$.fragment), d = W(), g = U("div"), p = U("div"), h = U("pre"), R = ne(b), y = W(), I(l, "class", "validation-xml-container__name svelte-1e18b37"), I(a, "class", "validaton-xml-container__actions svelte-1e18b37"), I(t, "class", "validation-xml-container__meta svelte-1e18b37"), I(h, "class", "svelte-1e18b37"), I(p, "class", "xml-viewer__box svelte-1e18b37"), I(g, "class", "xml-viewer svelte-1e18b37"), I(e, "class", "validation-xml-container svelte-1e18b37");
    },
    m(F, v) {
      M(F, e, v), P(e, t), P(t, l), P(l, r), P(t, s), _ && _.m(t, null), P(t, o), P(t, a), N(u, a, null), P(a, c), N(f, a, null), P(e, d), P(e, g), P(g, p), P(p, h), P(h, R), P(e, y), L = !0;
    },
    p(F, v) {
      (!L || v & /*validationEntries*/
      128) && i !== (i = /*validationEntry*/
      F[19].name + "") && be(r, i), /*validationEntry*/
      F[19].description ? _ ? _.p(F, v) : (_ = Gl(F), _.c(), _.m(t, o)) : _ && (_.d(1), _ = null), (!L || v & /*validationEntries*/
      128) && b !== (b = /*validationEntry*/
      F[19].xml + "") && be(R, b);
    },
    i(F) {
      L || (C(u.$$.fragment, F), C(f.$$.fragment, F), L = !0);
    },
    o(F) {
      S(u.$$.fragment, F), S(f.$$.fragment, F), L = !1;
    },
    d(F) {
      F && H(e), _ && _.d(), q(u), q(f);
    }
  };
}
function xo(n) {
  let e, t, l, i, r = Ae(
    /*pluginGroups*/
    n[0]
  ), s = [];
  for (let a = 0; a < r.length; a += 1)
    s[a] = Tl(Pl(n, r, a));
  let o = (
    /*currentPlugin*/
    n[3] && Fl(n)
  );
  return {
    c() {
      e = U("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      t = W(), o && o.c(), l = ye(), I(e, "class", "validation-groups svelte-1e18b37");
    },
    m(a, u) {
      M(a, e, u);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      M(a, t, u), o && o.m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      if (u & /*selectedIdx, pluginGroups, activePluginIdx, selectPlugin, selectGroup*/
      775) {
        r = Ae(
          /*pluginGroups*/
          a[0]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const f = Pl(a, r, c);
          s[c] ? s[c].p(f, u) : (s[c] = Tl(f), s[c].c(), s[c].m(e, null));
        }
        for (; c < s.length; c += 1)
          s[c].d(1);
        s.length = r.length;
      }
      /*currentPlugin*/
      a[3] ? o ? (o.p(a, u), u & /*currentPlugin*/
      8 && C(o, 1)) : (o = Fl(a), o.c(), C(o, 1), o.m(l.parentNode, l)) : o && (ue(), S(o, 1, 1, () => {
        o = null;
      }), ce());
    },
    i(a) {
      i || (C(o), i = !0);
    },
    o(a) {
      S(o), i = !1;
    },
    d(a) {
      a && (H(e), H(t), H(l)), Ve(s, a), o && o.d(a);
    }
  };
}
function eu(n, e, t) {
  let l, i, r;
  var s, o, a;
  let { pluginGroups: u = [] } = e, c = null, f = null, d = "", g = !1, p = "", h = null, b = [];
  function R(v) {
    return Nt(this, void 0, void 0, function* () {
      t(5, g = !0), t(6, p = ""), t(4, d = ""), t(7, b = []), h == null || h.abort(), h = new AbortController();
      try {
        const m = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": jo, "../../assets/validations/ied-editor.xml": zo, "../../assets/validations/substation-explorer.xml": Xo, "../../assets/validations/template-generator.xml": Yo }))[`../../assets/validations/${v}.xml`], import.meta.url).href, E = yield fetch(m, {
          cache: "no-cache",
          signal: h.signal
        });
        if (!E.ok) {
          if (E.status === 404) {
            t(4, d = "(No XML found for this plugin.)");
            return;
          }
          throw new Error(`HTTP ${E.status}`);
        }
        t(4, d = yield E.text());
        const G = new DOMParser().parseFromString(d, "application/xml");
        if (G.querySelector("parsererror"))
          throw new Error("Invalid XML format.");
        const O = new XMLSerializer(), D = Array.from(G.getElementsByTagName("validation"));
        t(7, b = D.map((X, ke) => {
          var Ce, pe, j, A, Z, ge, ve;
          const Fe = ((Ce = X.getAttribute("name")) === null || Ce === void 0 ? void 0 : Ce.trim()) || ((pe = X.getAttribute("id")) === null || pe === void 0 ? void 0 : pe.trim()) || ((A = (j = X.querySelector("name")) === null || j === void 0 ? void 0 : j.textContent) === null || A === void 0 ? void 0 : A.trim()) || `Validation ${ke + 1}`, Oe = ((Z = X.getAttribute("description")) === null || Z === void 0 ? void 0 : Z.trim()) || ((ve = (ge = X.querySelector("description")) === null || ge === void 0 ? void 0 : ge.textContent) === null || ve === void 0 ? void 0 : ve.trim()) || void 0, me = O.serializeToString(X);
          return { name: Fe, description: Oe, xml: me };
        }));
      } catch (m) {
        if ((m == null ? void 0 : m.name) === "AbortError")
          return;
        t(6, p = (m == null ? void 0 : m.message) || "Failed to load XML.");
      } finally {
        t(5, g = !1);
      }
    });
  }
  function y(v) {
    var m;
    const E = u[v];
    t(1, c = v), t(2, f = !((m = E == null ? void 0 : E.plugins) === null || m === void 0) && m.length ? 0 : null);
  }
  function L(v, m) {
    t(1, c = v), t(2, f = m);
  }
  const _ = (v) => y(v), F = (v, m) => L(v, m);
  return n.$$set = (v) => {
    "pluginGroups" in v && t(0, u = v.pluginGroups);
  }, n.$$.update = () => {
    n.$$.dirty & /*pluginGroups, selectedIdx, _a, _b*/
    3075 && u != null && u.length && (c == null || c >= u.length) && (t(1, c = 0), t(2, f = !(t(11, o = t(10, s = u[0]) === null || s === void 0 ? void 0 : s.plugins) === null || o === void 0) && o.length ? 0 : null)), n.$$.dirty & /*selectedIdx, pluginGroups*/
    3 && t(14, l = c != null ? u[c] : null), n.$$.dirty & /*currentGroup, activePluginIdx*/
    16388 && t(3, i = l && f != null ? l.plugins[f] : null), n.$$.dirty & /*currentPlugin, _c*/
    4104 && t(13, r = t(12, a = i == null ? void 0 : i.id) !== null && a !== void 0 ? a : null), n.$$.dirty & /*currentPluginId*/
    8192 && r && R(r);
  }, [
    u,
    c,
    f,
    i,
    d,
    g,
    p,
    b,
    y,
    L,
    s,
    o,
    a,
    r,
    l,
    _,
    F
  ];
}
class tu extends x {
  constructor(e) {
    super(), $(this, e, eu, xo, J, { pluginGroups: 0 });
  }
}
function nu(n) {
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
  ), r = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [iu] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*startProcess*/
    n[9]
  ), o = new Do({
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
      e = U("div"), t = U("div"), V(l.$$.fragment), i = W(), V(r.$$.fragment), s = W(), V(o.$$.fragment), I(t, "class", "header svelte-evkqad"), I(e, "class", "step-content svelte-evkqad");
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
      S(l.$$.fragment, u), S(r.$$.fragment, u), S(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && H(e), q(l), q(r), q(o);
    }
  };
}
function lu(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, p, h, b, R, y;
  t = new ni({}), t.$on(
    "back",
    /*exitEditing*/
    n[11]
  ), i = new wo({
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
  const L = [su, ru], _ = [];
  function F(v, m) {
    return (
      /*currentStepId*/
      v[2] === "process-definition" ? 0 : 1
    );
  }
  return p = F(n), h = _[p] = L[p](n), {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), r = W(), s = U("div"), o = U("button"), a = ne("Back"), u = W(), c = U("button"), f = ne("Next"), d = W(), g = U("div"), h.c(), I(o, "type", "button"), I(o, "class", "btn btn--back svelte-evkqad"), o.disabled = /*isAtFirstStep*/
      n[5], I(o, "aria-label", "Previous step"), I(c, "type", "button"), I(c, "class", "btn btn--next svelte-evkqad"), c.disabled = /*isAtLastStep*/
      n[6], I(c, "aria-label", "Next step"), I(s, "class", "stepper-navigation svelte-evkqad"), I(e, "class", "stepper svelte-evkqad"), I(g, "class", "step-content svelte-evkqad");
    },
    m(v, m) {
      M(v, e, m), N(t, e, null), P(e, l), N(i, e, null), P(e, r), P(e, s), P(s, o), P(o, a), P(s, u), P(s, c), P(c, f), M(v, d, m), M(v, g, m), _[p].m(g, null), b = !0, R || (y = [
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
      ], R = !0);
    },
    p(v, m) {
      const E = {};
      m & /*currentStepId*/
      4 && (E.currentId = /*currentStepId*/
      v[2]), m & /*visitedSteps*/
      16 && (E.visited = /*visitedSteps*/
      v[4]), i.$set(E), (!b || m & /*isAtFirstStep*/
      32) && (o.disabled = /*isAtFirstStep*/
      v[5]), (!b || m & /*isAtLastStep*/
      64) && (c.disabled = /*isAtLastStep*/
      v[6]);
      let B = p;
      p = F(v), p === B ? _[p].p(v, m) : (ue(), S(_[B], 1, 1, () => {
        _[B] = null;
      }), ce(), h = _[p], h ? h.p(v, m) : (h = _[p] = L[p](v), h.c()), C(h, 1), h.m(g, null));
    },
    i(v) {
      b || (C(t.$$.fragment, v), C(i.$$.fragment, v), C(h), b = !0);
    },
    o(v) {
      S(t.$$.fragment, v), S(i.$$.fragment, v), S(h), b = !1;
    },
    d(v) {
      v && (H(e), H(d), H(g)), q(t), q(i), _[p].d(), R = !1, he(y);
    }
  };
}
function iu(n) {
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
function ru(n) {
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
  ), i = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Add validation",
      $$slots: { default: [au] },
      $$scope: { ctx: n }
    }
  }), i.$on("click", Ol), s = new tu({
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
  }), s.$on("addValidation", Ol), s.$on(
    "breadcrumbClick",
    /*handleBreadcrumbClick*/
    n[8]
  ), {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), r = W(), V(s.$$.fragment), I(e, "class", "header svelte-evkqad");
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
      S(t.$$.fragment, a), S(i.$$.fragment, a), S(s.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (H(e), H(r)), q(t), q(i), q(s, a);
    }
  };
}
function su(n) {
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
  ), i = new Vo({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), I(e, "class", "header svelte-evkqad");
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
      S(t.$$.fragment, s), S(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && (H(e), H(l)), q(t), q(i, s);
    }
  };
}
function au(n) {
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
function ou(n) {
  let e, t, l, i;
  const r = [lu, nu], s = [];
  function o(a, u) {
    return (
      /*isEditing*/
      a[1] ? 0 : 1
    );
  }
  return t = o(n), l = s[t] = r[t](n), {
    c() {
      e = U("div"), l.c(), I(e, "class", "page-content svelte-evkqad");
    },
    m(a, u) {
      M(a, e, u), s[t].m(e, null), i = !0;
    },
    p(a, [u]) {
      let c = t;
      t = o(a), t === c ? s[t].p(a, u) : (ue(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ce(), l = s[t], l ? l.p(a, u) : (l = s[t] = r[t](a), l.c()), C(l, 1), l.m(e, null));
    },
    i(a) {
      i || (C(l), i = !0);
    },
    o(a) {
      S(l), i = !1;
    },
    d(a) {
      a && H(e), s[t].d();
    }
  };
}
function Ol() {
  alert("Add New Validation clicked!");
}
function uu(n, e, t) {
  let l, i, r, { currentProcess: s = null } = e;
  const o = ["process-definition", "validator-configuration"], a = ze();
  let u = !1, c = 0, f = o[0], d = [], g = [];
  function p(v) {
    v.detail.index === 0 && (gt.set(!0), a("back"));
  }
  function h() {
    s && a("start", s);
  }
  function b() {
    t(1, u = !0), gt.set(!1), t(15, c = 0), t(4, g = []);
  }
  function R() {
    t(1, u = !1), gt.set(!0), a("back");
  }
  function y(v) {
    const m = o.indexOf(v.detail);
    m !== -1 && t(15, c = m);
  }
  function L(v) {
    g.includes(v) || t(4, g = [...g, v]);
  }
  function _() {
    i || (L(f), t(15, c += 1), a("next"));
  }
  function F() {
    l || (t(15, c -= 1), a("previous"));
  }
  return n.$$set = (v) => {
    "currentProcess" in v && t(0, s = v.currentProcess);
  }, n.$$.update = () => {
    n.$$.dirty & /*currentStepIndex*/
    32768 && t(2, f = o[c]), n.$$.dirty & /*currentStepIndex*/
    32768 && t(5, l = c === 0), n.$$.dirty & /*currentStepIndex*/
    32768 && t(6, i = c === o.length - 1), n.$$.dirty & /*currentProcess, isEditing*/
    3 && t(7, r = Ho(s, { edit: u })), n.$$.dirty & /*currentProcess*/
    1 && t(3, d = Mo(s));
  }, [
    s,
    u,
    f,
    d,
    g,
    l,
    i,
    r,
    p,
    h,
    b,
    R,
    y,
    _,
    F,
    c
  ];
}
class cu extends x {
  constructor(e) {
    super(), $(this, e, uu, ou, J, { currentProcess: 0 });
  }
}
function fu(n) {
  let e, t;
  return e = new ti({
    props: {
      items: (
        /*plugins*/
        n[0].map(Wl)
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
      l[0].map(Wl)), i & /*visited*/
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
const Wl = (n) => ({ id: n.id, label: n.name });
function du(n, e, t) {
  let l, { plugins: i = [] } = e, { visited: r = [] } = e, { currentId: s = null } = e, { pluginStatus: o = {} } = e;
  const a = ze(), u = (c) => {
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
class gu extends x {
  constructor(e) {
    super(), $(this, e, du, fu, J, {
      plugins: 0,
      visited: 1,
      currentId: 2,
      pluginStatus: 3
    });
  }
}
function Bl(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && en(n)
  );
  return {
    c() {
      l && l.c(), t = ye();
    },
    m(i, r) {
      l && l.m(i, r), M(i, t, r);
    },
    p(i, r) {
      /*tagName*/
      i[4] ? e ? J(
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
      e = U(
        /*tagName*/
        n[4]
      ), St(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-uyxnge" });
    },
    m(r, s) {
      M(r, e, s), l || (i = ee(t = hu.call(null, e, {
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
      t && _e(t.update) && s & /*doc, editCount*/
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
function mu(n) {
  let e, t, l, i, r, s, o, a, u, c, f, d, g, p;
  t = new ni({}), t.$on(
    "back",
    /*exitWorkflow*/
    n[9]
  ), i = new gu({
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
  let h = (
    /*tagName*/
    n[4] && Bl(n)
  );
  return {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), r = W(), s = U("div"), o = U("button"), o.textContent = "Back", a = W(), u = U("button"), u.textContent = "Next", c = W(), h && h.c(), f = ye(), I(o, "class", "back-button svelte-uyxnge"), I(u, "class", "next-button svelte-uyxnge"), I(s, "class", "stepper-navigation svelte-uyxnge"), I(e, "class", "stepper svelte-uyxnge");
    },
    m(b, R) {
      M(b, e, R), N(t, e, null), P(e, l), N(i, e, null), P(e, r), P(e, s), P(s, o), P(s, a), P(s, u), M(b, c, R), h && h.m(b, R), M(b, f, R), d = !0, g || (p = [
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
    p(b, [R]) {
      const y = {};
      R & /*plugins*/
      4 && (y.plugins = /*plugins*/
      b[2]), R & /*visited*/
      32 && (y.visited = /*visited*/
      b[5]), R & /*tagName*/
      16 && (y.currentId = /*tagName*/
      b[4]), R & /*pluginStatus*/
      8 && (y.pluginStatus = /*pluginStatus*/
      b[3]), i.$set(y), /*tagName*/
      b[4] ? h ? h.p(b, R) : (h = Bl(b), h.c(), h.m(f.parentNode, f)) : h && (h.d(1), h = null);
    },
    i(b) {
      d || (C(t.$$.fragment, b), C(i.$$.fragment, b), d = !0);
    },
    o(b) {
      S(t.$$.fragment, b), S(i.$$.fragment, b), d = !1;
    },
    d(b) {
      b && (H(e), H(c), H(f)), q(t), q(i), h && h.d(b), g = !1, he(p);
    }
  };
}
function hu(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function pu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, { plugins: s = [] } = e, o = null, a = [];
  const u = ["check", "warning", "error"];
  let c = {};
  const f = ze();
  function d(y) {
    return Nt(this, void 0, void 0, function* () {
      if (yield Go(y), t(4, o = y.id), !a.includes(y.id)) {
        t(5, a = [...a, y.id]);
        const L = s.findIndex((_) => _.id === y.id);
        t(3, c = Object.assign(Object.assign({}, c), {
          [y.id]: u[L % u.length]
        }));
      }
    });
  }
  function g() {
    h(1);
  }
  function p() {
    h(-1);
  }
  function h(y) {
    const L = s.findIndex((_) => _.id === o);
    d(s[(L + y + s.length) % s.length]);
  }
  Ze(() => {
    s.length && (Uo(s).catch(console.error), d(s[0])), gt.set(!1);
  });
  function b() {
    gt.set(!0), f("exit");
  }
  const R = (y) => d(y.detail);
  return n.$$set = (y) => {
    "doc" in y && t(0, l = y.doc), "editCount" in y && t(1, i = y.editCount), "host" in y && t(10, r = y.host), "plugins" in y && t(2, s = y.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && s.reduce(
      (y, L) => {
        const _ = c[L.id];
        return y[L.id] = _ ?? "", y;
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
    p,
    b,
    r,
    R
  ];
}
class _u extends x {
  constructor(e) {
    super(), $(this, e, pu, mu, J, {
      doc: 0,
      editCount: 1,
      host: 10,
      plugins: 2
    });
  }
}
function bu(n) {
  let e, t;
  return e = new go({
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function vu(n) {
  let e, t;
  return e = new cu({
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Cu(n) {
  let e, t;
  return e = new _u({
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Iu(n) {
  let e, t, l, i;
  const r = [Cu, vu, bu], s = [];
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
      t.c(), l = ye();
    },
    m(a, u) {
      s[e].m(a, u), M(a, l, u), i = !0;
    },
    p(a, [u]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, u) : (ue(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ce(), t = s[e], t ? t.p(a, u) : (t = s[e] = r[e](a), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (C(t), i = !0);
    },
    o(a) {
      S(t), i = !1;
    },
    d(a) {
      a && H(l), s[e].d(a);
    }
  };
}
function Au(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], o = null, a = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGF0YTwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLWV4cGxvcmVyPC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnN0YXRpb248L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (v) => {
    var m, E;
    return (E = (m = v == null ? void 0 : v.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && E !== void 0 ? E : "";
  }, g = (v) => ({
    id: d(v.querySelector("id")),
    name: d(v.querySelector("name")),
    src: d(v.querySelector("src"))
  }), p = (v) => Array.from(v.querySelectorAll("process")).map((m) => {
    const E = Array.from(m.querySelectorAll("plugins-sequence > group")), B = E.length ? E.map((k) => ({
      title: d(k.querySelector(":scope > title")),
      plugins: Array.from(k.querySelectorAll(":scope > plugin")).map(g)
    })) : void 0, G = B ? B.flatMap((k) => k.plugins) : Array.from(m.querySelectorAll("plugins-sequence > plugin")).map(g);
    return {
      id: d(m.querySelector(":scope > id")),
      version: d(m.querySelector(":scope > version")),
      name: d(m.querySelector(":scope > name")),
      description: d(m.querySelector(":scope > description")),
      plugins: G,
      pluginGroups: B
    };
  });
  let h = null;
  function b() {
    return Nt(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = ""), h == null || h.abort(), h = new AbortController();
      try {
        const v = yield fetch(f, {
          cache: "no-cache",
          signal: h.signal
        });
        if (!v.ok)
          throw new Error(`HTTP ${v.status}`);
        const m = yield v.text(), E = new DOMParser().parseFromString(m, "application/xml");
        if (E.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = p(E));
      } catch (v) {
        if ((v == null ? void 0 : v.name) === "AbortError")
          return;
        t(3, s = []), t(7, c = v.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ze(() => (b(), () => h == null ? void 0 : h.abort()));
  function R(v) {
    t(5, a = v), t(4, o = null);
  }
  function y(v) {
    t(4, o = v.detail);
  }
  function L(v) {
    R(v.detail);
  }
  function _() {
    t(4, o = null);
  }
  function F() {
    t(5, a = null), t(4, o = null);
  }
  return n.$$set = (v) => {
    "doc" in v && t(0, l = v.doc), "editCount" in v && t(1, i = v.editCount), "host" in v && t(2, r = v.host);
  }, [
    l,
    i,
    r,
    s,
    o,
    a,
    u,
    c,
    y,
    L,
    _,
    F
  ];
}
class yu extends x {
  constructor(e) {
    super(), $(this, e, Au, Iu, J, { doc: 0, editCount: 1, host: 2 });
  }
}
function Zl(n) {
  let e, t;
  return e = new yu({
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
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ku(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Zl(n)
  );
  return {
    c() {
      s && s.c(), e = W(), t = U("input"), l = W(), i = U("input"), I(t, "type", "hidden"), I(t, "name", "package-name"), t.value = Xl, I(i, "type", "hidden"), I(i, "name", "package-version"), i.value = Yl;
    },
    m(o, a) {
      s && s.m(o, a), M(o, e, a), M(o, t, a), M(o, l, a), M(o, i, a), r = !0;
    },
    p(o, [a]) {
      /*doc*/
      o[0] || /*dev*/
      o[1] ? s ? (s.p(o, a), a & /*doc, dev*/
      3 && C(s, 1)) : (s = Zl(o), s.c(), C(s, 1), s.m(e.parentNode, e)) : s && (ue(), S(s, 1, 1, () => {
        s = null;
      }), ce());
    },
    i(o) {
      r || (C(s), r = !0);
    },
    o(o) {
      S(s), r = !1;
    },
    d(o) {
      o && (H(e), H(t), H(l), H(i)), s && s.d(o);
    }
  };
}
function wu(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class Su extends x {
  constructor(e) {
    super(), $(this, e, wu, ku, J, { doc: 0, dev: 1, editCount: 2 });
  }
}
class Pu extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Su({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = Lu();
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
function Lu() {
  const n = `${Xl}-v${Yl}-style`, e = Ru(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Ru() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Pu as default
};
