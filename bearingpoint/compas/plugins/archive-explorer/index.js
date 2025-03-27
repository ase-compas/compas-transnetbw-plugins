var so = Object.defineProperty;
var ao = (n, e, t) => e in n ? so(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var sr = (n, e, t) => (ao(n, typeof e != "symbol" ? e + "" : e, t), t), oo = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var Gt = (n, e, t) => (oo(n, e, "read from private field"), t ? t.call(n) : e.get(n)), ti = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
function Ze() {
}
function X(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function ca(n) {
  return n();
}
function Zr() {
  return /* @__PURE__ */ Object.create(null);
}
function Qe(n) {
  n.forEach(ca);
}
function pe(n) {
  return typeof n == "function";
}
function ge(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function uo(n) {
  return Object.keys(n).length === 0;
}
function fa(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return Ze;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Mr(n) {
  let e;
  return fa(n, (t) => e = t)(), e;
}
function rt(n, e, t) {
  n.$$.on_destroy.push(fa(e, t));
}
function Re(n, e, t, i) {
  if (n) {
    const r = da(n, e, t, i);
    return n[0](r);
  }
}
function da(n, e, t, i) {
  return n[1] && i ? X(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function ke(n, e, t, i) {
  if (n[2] && i) {
    const r = n[2](i(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], a = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < a; s += 1)
        l[s] = e.dirty[s] | r[s];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function De(n, e, t, i, r, l) {
  if (r) {
    const a = da(e, t, i, l);
    n.p(a, r);
  }
}
function Me(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function tt(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function me(n, e) {
  const t = {};
  e = new Set(e);
  for (const i in n)
    !e.has(i) && i[0] !== "$" && (t[i] = n[i]);
  return t;
}
function Fr(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Vt(n, e, t) {
  return n.set(t), e;
}
function de(n) {
  return n && pe(n.destroy) ? n.destroy : Ze;
}
const co = ["", !0, 1, "true", "contenteditable"], ha = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function Q(n, e) {
  n.appendChild(e);
}
function H(n, e, t) {
  n.insertBefore(e, t || null);
}
function P(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Ur(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function x(n) {
  return document.createElement(n);
}
function lt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ut(n) {
  return document.createTextNode(n);
}
function oe() {
  return ut(" ");
}
function qe() {
  return ut("");
}
function fe(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function F(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const fo = ["width", "height"];
function ce(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && fo.indexOf(i) === -1 ? n[i] = e[i] : F(n, i, e[i]);
}
function Qr(n, e) {
  for (const t in e)
    F(n, t, e[t]);
}
function ho(n, e) {
  Object.keys(e).forEach((t) => {
    mo(n, t, e[t]);
  });
}
function mo(n, e, t) {
  const i = e.toLowerCase();
  i in n ? n[i] = typeof n[i] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : F(n, e, t);
}
function Ei(n) {
  return /-/.test(n) ? ho : ce;
}
function ma(n) {
  return n === "" ? null : +n;
}
function po(n) {
  return Array.from(n.childNodes);
}
function vt(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function go(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function _o(n, e, t) {
  ~co.indexOf(t) ? go(n, e) : vt(n, e);
}
function Qt(n, e) {
  n.value = e ?? "";
}
function vr(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function kt(n, e) {
  return new n(e);
}
let oi;
function ai(n) {
  oi = n;
}
function et() {
  if (!oi)
    throw new Error("Function called outside component initialization");
  return oi;
}
function st(n) {
  et().$$.on_mount.push(n);
}
function xt(n) {
  et().$$.on_destroy.push(n);
}
function Ke(n, e) {
  return et().$$.context.set(n, e), e;
}
function ze(n) {
  return et().$$.context.get(n);
}
function Qn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Nn = [], se = [];
let Kn = [];
const Ar = [], pa = /* @__PURE__ */ Promise.resolve();
let yr = !1;
function ga() {
  yr || (yr = !0, pa.then(_a));
}
function Nr() {
  return ga(), pa;
}
function Cr(n) {
  Kn.push(n);
}
function mt(n) {
  Ar.push(n);
}
const ar = /* @__PURE__ */ new Set();
let Dn = 0;
function _a() {
  if (Dn !== 0)
    return;
  const n = oi;
  do {
    try {
      for (; Dn < Nn.length; ) {
        const e = Nn[Dn];
        Dn++, ai(e), bo(e.$$);
      }
    } catch (e) {
      throw Nn.length = 0, Dn = 0, e;
    }
    for (ai(null), Nn.length = 0, Dn = 0; se.length; )
      se.pop()();
    for (let e = 0; e < Kn.length; e += 1) {
      const t = Kn[e];
      ar.has(t) || (ar.add(t), t());
    }
    Kn.length = 0;
  } while (Nn.length);
  for (; Ar.length; )
    Ar.pop()();
  yr = !1, ar.clear(), ai(n);
}
function bo(n) {
  if (n.fragment !== null) {
    n.update(), Qe(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Cr);
  }
}
function Io(n) {
  const e = [], t = [];
  Kn.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Kn = e;
}
const Ci = /* @__PURE__ */ new Set();
let Cn;
function Ue() {
  Cn = {
    r: 0,
    c: [],
    p: Cn
    // parent group
  };
}
function Ne() {
  Cn.r || Qe(Cn.c), Cn = Cn.p;
}
function y(n, e) {
  n && n.i && (Ci.delete(n), n.i(e));
}
function E(n, e, t, i) {
  if (n && n.o) {
    if (Ci.has(n))
      return;
    Ci.add(n), Cn.c.push(() => {
      Ci.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else
    i && i();
}
function Dt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function hi(n, e) {
  E(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function mi(n, e, t, i, r, l, a, s, o, u, c, f) {
  let d = n.length, h = l.length, m = d;
  const _ = {};
  for (; m--; )
    _[n[m].key] = m;
  const p = [], A = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), T = [];
  for (m = h; m--; ) {
    const g = f(r, l, m), S = t(g);
    let B = a.get(S);
    B ? T.push(() => B.p(g, e)) : (B = u(S, g), B.c()), A.set(S, p[m] = B), S in _ && b.set(S, Math.abs(m - _[S]));
  }
  const C = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function R(g) {
    y(g, 1), g.m(s, c), a.set(g.key, g), c = g.first, h--;
  }
  for (; d && h; ) {
    const g = p[h - 1], S = n[d - 1], B = g.key, v = S.key;
    g === S ? (c = g.first, d--, h--) : A.has(v) ? !a.has(B) || C.has(B) ? R(g) : k.has(v) ? d-- : b.get(B) > b.get(v) ? (k.add(B), R(g)) : (C.add(v), d--) : (o(S, a), d--);
  }
  for (; d--; ) {
    const g = n[d];
    A.has(g.key) || o(g, a);
  }
  for (; h; )
    R(p[h - 1]);
  return Qe(T), p;
}
function he(n, e) {
  const t = {}, i = {}, r = { $$scope: 1 };
  let l = n.length;
  for (; l--; ) {
    const a = n[l], s = e[l];
    if (s) {
      for (const o in a)
        o in s || (i[o] = 1);
      for (const o in s)
        r[o] || (t[o] = s[o], r[o] = 1);
      n[l] = s;
    } else
      for (const o in a)
        r[o] = 1;
  }
  for (const a in i)
    a in t || (t[a] = void 0);
  return t;
}
function Le(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function pt(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function te(n) {
  n && n.c();
}
function $(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), Cr(() => {
    const l = n.$$.on_mount.map(ca).filter(pe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Qe(l), n.$$.on_mount = [];
  }), r.forEach(Cr);
}
function ee(n, e) {
  const t = n.$$;
  t.fragment !== null && (Io(t.after_update), Qe(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function vo(n, e) {
  n.$$.dirty[0] === -1 && (Nn.push(n), ga(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ae(n, e, t, i, r, l, a = null, s = [-1]) {
  const o = oi;
  ai(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Ze,
    not_equal: r,
    bound: Zr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Zr(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return u.ctx && r(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && vo(n, f)), d;
  }) : [], u.update(), c = !0, Qe(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = po(e.target);
      u.fragment && u.fragment.l(f), f.forEach(P);
    } else
      u.fragment && u.fragment.c();
    e.intro && y(n.$$.fragment), $(n, e.target, e.anchor), _a();
  }
  ai(o);
}
class ye {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    sr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    sr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ee(this, 1), this.$destroy = Ze;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!pe(t))
      return Ze;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !uo(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ao = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ao);
const ba = "archive-explorer", Ia = "0.0.1";
var Er = function(n, e) {
  return Er = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, Er(n, e);
};
function at(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Er(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var We = function() {
  return We = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, We.apply(this, arguments);
};
function wr(n, e, t, i) {
  function r(l) {
    return l instanceof t ? l : new t(function(a) {
      a(l);
    });
  }
  return new (t || (t = Promise))(function(l, a) {
    function s(c) {
      try {
        u(i.next(c));
      } catch (f) {
        a(f);
      }
    }
    function o(c) {
      try {
        u(i.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? l(c.value) : r(c.value).then(s, o);
    }
    u((i = i.apply(n, e || [])).next());
  });
}
function Pr(n, e) {
  var t = { label: 0, sent: function() {
    if (l[0] & 1)
      throw l[1];
    return l[1];
  }, trys: [], ops: [] }, i, r, l, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = s(0), a.throw = s(1), a.return = s(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (t = 0)), t; )
      try {
        if (i = 1, r && (l = u[0] & 2 ? r.return : u[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, u[1])).done)
          return l;
        switch (r = 0, l && (u = [u[0] & 2, l.value]), u[0]) {
          case 0:
          case 1:
            l = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, r = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (l = t.trys, !(l = l.length > 0 && l[l.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!l || u[1] > l[0] && u[1] < l[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < l[1]) {
              t.label = l[1], l = u;
              break;
            }
            if (l && t.label < l[2]) {
              t.label = l[2], t.ops.push(u);
              break;
            }
            l[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = e.call(n, t);
      } catch (c) {
        u = [6, c], r = 0;
      } finally {
        i = l = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Ct(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function mn(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var i = t.call(n), r, l = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      l.push(r.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return l;
}
function Tn(n, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, r = e.length, l; i < r; i++)
      (l || !(i in e)) && (l || (l = Array.prototype.slice.call(e, 0, i)), l[i] = e[i]);
  return n.concat(l || Array.prototype.slice.call(e));
}
function zn(n) {
  return this instanceof zn ? (this.v = n, this) : new zn(n);
}
function yo(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []), r, l = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function a(h) {
    return function(m) {
      return Promise.resolve(m).then(h, f);
    };
  }
  function s(h, m) {
    i[h] && (r[h] = function(_) {
      return new Promise(function(p, A) {
        l.push([h, _, p, A]) > 1 || o(h, _);
      });
    }, m && (r[h] = m(r[h])));
  }
  function o(h, m) {
    try {
      u(i[h](m));
    } catch (_) {
      d(l[0][3], _);
    }
  }
  function u(h) {
    h.value instanceof zn ? Promise.resolve(h.value.v).then(c, f) : d(l[0][2], h);
  }
  function c(h) {
    o("next", h);
  }
  function f(h) {
    o("throw", h);
  }
  function d(h, m) {
    h(m), l.shift(), l.length && o(l[0][0], l[0][1]);
  }
}
function Co(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator], t;
  return e ? e.call(n) : (n = typeof Ct == "function" ? Ct(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(l) {
    t[l] = n[l] && function(a) {
      return new Promise(function(s, o) {
        a = n[l](a), r(s, o, a.done, a.value);
      });
    };
  }
  function r(l, a, s, o) {
    Promise.resolve(o).then(function(u) {
      l({ value: u, done: s });
    }, a);
  }
}
function Eo(n, e = {}) {
  const t = e.priority || "polite", i = e.ownerDocument || document, r = i.querySelectorAll("[data-smui-dom-announce]");
  r.length && r.forEach((a) => {
    var s;
    (s = a.parentNode) === null || s === void 0 || s.removeChild(a);
  });
  const l = i.createElement("div");
  l.style.position = "absolute", l.style.top = "-9999px", l.style.left = "-9999px", l.style.height = "1px", l.style.overflow = "hidden", l.setAttribute("aria-atomic", "true"), l.setAttribute("aria-live", t), l.setAttribute("data-mdc-dom-announce", "true"), l.setAttribute("data-smui-dom-announce", "true"), i.body.appendChild(l), window.setTimeout(() => {
    l.textContent = n;
    const a = () => {
      l.textContent = "", l.removeEventListener("click", a);
    };
    l.addEventListener("click", a, { once: !0 });
  }, 100);
}
function re(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function be(n, e, t, i = { bubbles: !0 }, r = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const l = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  if (n == null || n.dispatchEvent(l), r && e.startsWith("SMUI")) {
    const a = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: t }));
    n == null || n.dispatchEvent(a), a.defaultPrevented && l.preventDefault();
  }
  return l;
}
function Jt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r], a = l.indexOf("$");
    a !== -1 && e.indexOf(l.substring(0, a + 1)) !== -1 || e.indexOf(l) === -1 && (i[l] = n[l]);
  }
  return i;
}
const Jr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, So = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function nt(n) {
  let e, t = [];
  n.$on = (r, l) => {
    let a = r, s = () => {
    };
    return e ? s = e(a, l) : t.push([a, l]), a.match(Jr) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
      s();
    };
  };
  function i(r) {
    const l = n.$$.callbacks[r.type];
    l && l.slice().forEach((a) => a.call(this, r));
  }
  return (r) => {
    const l = [], a = {};
    e = (s, o) => {
      let u = s, c = o, f = !1;
      const d = u.match(Jr), h = u.match(So), m = d || h;
      if (u.match(/^SMUI:\w+:/)) {
        const A = u.split(":");
        let b = "";
        for (let T = 0; T < A.length; T++)
          b += T === A.length - 1 ? ":" + A[T] : A[T].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${b.split("$")[0]}.`), u = b;
      }
      if (m) {
        const A = u.split(d ? ":" : "$");
        u = A[0];
        const b = A.slice(1).reduce((T, C) => (T[C] = !0, T), {});
        b.passive && (f = f || {}, f.passive = !0), b.nonpassive && (f = f || {}, f.passive = !1), b.capture && (f = f || {}, f.capture = !0), b.once && (f = f || {}, f.once = !0), b.preventDefault && (c = To(c)), b.stopPropagation && (c = Lo(c)), b.stopImmediatePropagation && (c = Oo(c)), b.self && (c = Ro(r, c)), b.trusted && (c = ko(c));
      }
      const _ = xr(r, u, c, f), p = () => {
        _();
        const A = l.indexOf(p);
        A > -1 && l.splice(A, 1);
      };
      return l.push(p), u in a || (a[u] = xr(r, u, i)), p;
    };
    for (let s = 0; s < t.length; s++)
      e(t[s][0], t[s][1]);
    return {
      destroy: () => {
        for (let s = 0; s < l.length; s++)
          l[s]();
        for (let s of Object.entries(a))
          s[1]();
      }
    };
  };
}
function xr(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function To(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Lo(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Oo(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Ro(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function ko(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ve(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r];
    l.substring(0, e.length) === e && (i[l.substring(e.length)] = n[l]);
  }
  return i;
}
function $e(n, e) {
  let t = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i], l = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? t.push(l(n, r[1])) : t.push(l(n));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const l = t[r];
          if (l && l.update) {
            const a = i[r];
            Array.isArray(a) && a.length > 1 ? l.update(a[1]) : l.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        r && r.destroy && r.destroy();
      }
    }
  };
}
var bi;
function va(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = bi;
  if (typeof bi == "boolean" && !e)
    return bi;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var l = t.supports("--css-vars", "yes"), a = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = l || a, e || (bi = i), i;
}
function Do(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, l = i + t.left, a = r + t.top, s, o;
  if (n.type === "touchstart") {
    var u = n;
    s = u.changedTouches[0].pageX - l, o = u.changedTouches[0].pageY - a;
  } else {
    var c = n;
    s = c.pageX - l, o = c.pageY - a;
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
var Et = (
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
var Ri = (
  /** @class */
  function() {
    function n(e, t) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, Tn([], mn(i))), this.foundation = t === void 0 ? this.getDefaultFoundation() : t, this.foundation.init(), this.initialSyncWithDOM();
    }
    return n.attachTo = function(e) {
      return new n(e, new Et({}));
    }, n.prototype.initialize = function() {
    }, n.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    }, n.prototype.initialSyncWithDOM = function() {
    }, n.prototype.destroy = function() {
      this.foundation.destroy();
    }, n.prototype.listen = function(e, t, i) {
      this.root.addEventListener(e, t, i);
    }, n.prototype.unlisten = function(e, t, i) {
      this.root.removeEventListener(e, t, i);
    }, n.prototype.emit = function(e, t, i) {
      i === void 0 && (i = !1);
      var r;
      typeof CustomEvent == "function" ? r = new CustomEvent(e, {
        bubbles: i,
        detail: t
      }) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, i, !1, t)), this.root.dispatchEvent(r);
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
function li(n) {
  return n === void 0 && (n = window), Mo(n) ? { passive: !0 } : !1;
}
function Mo(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    n.document.addEventListener("test", i, t), n.document.removeEventListener("test", i, t);
  } catch {
    e = !1;
  }
  return e;
}
const Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: li
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
function Fo(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Hr(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Hr(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Uo(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Fo,
  estimateScrollWidth: Uo,
  matches: Hr
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
var No = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, wo = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, $r = {
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
var el = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], tl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ii = [], Di = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(r) {
        i.activateImpl(r);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return No;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return wo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return $r;
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
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = e.cssClasses, l = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(l), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, l = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(l), t.removeCssVars();
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
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
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
      var i, r;
      if (t) {
        try {
          for (var l = Ct(el), a = l.next(); !a.done; a = l.next()) {
            var s = a.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            a && !a.done && (r = l.return) && r.call(l);
          } finally {
            if (i)
              throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var l = Ct(tl), a = l.next(); !a.done; a = l.next()) {
            var s = a.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            a && !a.done && (r = l.return) && r.call(l);
          } finally {
            if (i)
              throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var r = Ct(el), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = Ct(tl), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(l) {
        l.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[l], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var l = this.previousActivationEvent, a = l && t !== void 0 && l.type !== t.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var s = t !== void 0 && Ii.length > 0 && Ii.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ii.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ii = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, l = i.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), h = d.startPoint, m = d.endPoint;
        c = h.x + "px, " + h.y + "px", f = m.x + "px, " + m.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(l, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, l;
      r ? l = Do(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, l = {
        x: l.x - this.initialSize / 2,
        y: l.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: l, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, l = r.hasDeactivationUXRun, a = r.isActivated, s = l || !a;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, $r.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var r = We({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var l = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && l % 2 !== 0 ? this.initialSize = l - 1 : this.initialSize = l, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, r = t.VAR_LEFT, l = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(l, this.unboundedCoords.top + "px"));
    }, e;
  }(Et)
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
var Si = (
  /** @class */
  function(n) {
    at(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.disabled = !1, t;
    }
    return e.attachTo = function(t, i) {
      i === void 0 && (i = {
        isUnbounded: void 0
      });
      var r = new e(t);
      return i.isUnbounded !== void 0 && (r.unbounded = i.isUnbounded), r;
    }, e.createAdapter = function(t) {
      return {
        addClass: function(i) {
          return t.root.classList.add(i);
        },
        browserSupportsCssVars: function() {
          return va(window);
        },
        computeBoundingRect: function() {
          return t.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return t.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, li());
        },
        deregisterInteractionHandler: function(i, r) {
          return t.root.removeEventListener(i, r, li());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return Hr(t.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!t.disabled;
        },
        isUnbounded: function() {
          return !!t.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, li());
        },
        registerInteractionHandler: function(i, r) {
          return t.root.addEventListener(i, r, li());
        },
        registerResizeHandler: function(i) {
          return window.addEventListener("resize", i);
        },
        removeClass: function(i) {
          return t.root.classList.remove(i);
        },
        updateCssVariable: function(i, r) {
          return t.root.style.setProperty(i, r);
        }
      };
    }, Object.defineProperty(e.prototype, "unbounded", {
      get: function() {
        return !!this.isUnbounded;
      },
      set: function(t) {
        this.isUnbounded = !!t, this.setUnbounded();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.activate = function() {
      this.foundation.activate();
    }, e.prototype.deactivate = function() {
      this.foundation.deactivate();
    }, e.prototype.layout = function() {
      this.foundation.layout();
    }, e.prototype.getDefaultFoundation = function() {
      return new Di(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in t.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(Ri)
);
/**
 * @license
 * Copyright 2020 Google Inc.
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
var He = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, Mt = /* @__PURE__ */ new Set();
Mt.add(He.BACKSPACE);
Mt.add(He.ENTER);
Mt.add(He.SPACEBAR);
Mt.add(He.PAGE_UP);
Mt.add(He.PAGE_DOWN);
Mt.add(He.END);
Mt.add(He.HOME);
Mt.add(He.ARROW_LEFT);
Mt.add(He.ARROW_UP);
Mt.add(He.ARROW_RIGHT);
Mt.add(He.ARROW_DOWN);
Mt.add(He.DELETE);
Mt.add(He.ESCAPE);
Mt.add(He.TAB);
var wt = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, Ft = /* @__PURE__ */ new Map();
Ft.set(wt.BACKSPACE, He.BACKSPACE);
Ft.set(wt.ENTER, He.ENTER);
Ft.set(wt.SPACEBAR, He.SPACEBAR);
Ft.set(wt.PAGE_UP, He.PAGE_UP);
Ft.set(wt.PAGE_DOWN, He.PAGE_DOWN);
Ft.set(wt.END, He.END);
Ft.set(wt.HOME, He.HOME);
Ft.set(wt.ARROW_LEFT, He.ARROW_LEFT);
Ft.set(wt.ARROW_UP, He.ARROW_UP);
Ft.set(wt.ARROW_RIGHT, He.ARROW_RIGHT);
Ft.set(wt.ARROW_DOWN, He.ARROW_DOWN);
Ft.set(wt.DELETE, He.DELETE);
Ft.set(wt.ESCAPE, He.ESCAPE);
Ft.set(wt.TAB, He.TAB);
var an = /* @__PURE__ */ new Set();
an.add(He.PAGE_UP);
an.add(He.PAGE_DOWN);
an.add(He.END);
an.add(He.HOME);
an.add(He.ARROW_LEFT);
an.add(He.ARROW_UP);
an.add(He.ARROW_RIGHT);
an.add(He.ARROW_DOWN);
function ht(n) {
  var e = n.key;
  if (Mt.has(e))
    return e;
  var t = Ft.get(n.keyCode);
  return t || He.UNKNOWN;
}
function Po(n) {
  return an.has(ht(n));
}
const { applyPassive: vi } = Aa, { matches: Ho } = ki;
function Rt(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: l, active: a, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (m) => n.classList.add(m), removeClass: f = (m) => n.classList.remove(m), addStyle: d = (m, _) => n.style.setProperty(m, _), initPromise: h = Promise.resolve() } = {}) {
  let m, _ = ze("SMUI:addLayoutListener"), p, A = a, b = o, T = u;
  function C() {
    t ? (c("mdc-ripple-surface"), l === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : l === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), m && A !== a && (A = a, a ? m.activate() : a === !1 && m.deactivate()), e && !m ? (m = new Di({
      addClass: c,
      browserSupportsCssVars: () => va(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (R) => n.contains(R),
      deregisterDocumentInteractionHandler: (R, g) => document.documentElement.removeEventListener(R, g, vi()),
      deregisterInteractionHandler: (R, g) => (o || n).removeEventListener(R, g, vi()),
      deregisterResizeHandler: (R) => window.removeEventListener("resize", R),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? Ho(u || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (R, g) => document.documentElement.addEventListener(R, g, vi()),
      registerInteractionHandler: (R, g) => (o || n).addEventListener(R, g, vi()),
      registerResizeHandler: (R) => window.addEventListener("resize", R),
      removeClass: f,
      updateCssVariable: d
    }), h.then(() => {
      m && (m.init(), m.setUnbounded(i));
    })) : m && !e && h.then(() => {
      m && (m.destroy(), m = void 0);
    }), m && (b !== o || T !== u) && (b = o, T = u, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  C(), _ && (p = _(k));
  function k() {
    m && m.layout();
  }
  return {
    update(R) {
      ({
        ripple: e,
        surface: t,
        unbounded: i,
        disabled: r,
        color: l,
        active: a,
        rippleElement: s,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (g) => n.classList.add(g), removeClass: (g) => n.classList.remove(g), addStyle: (g, S) => n.style.setProperty(g, S), initPromise: Promise.resolve() }, R)), C();
    },
    destroy() {
      m && (m.destroy(), m = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Bo(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      4096) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? ke(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Vo(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[5],
        .../*use*/
        n[0]
      ]
    },
    {
      class: re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button__label": (
          /*context*/
          n[6] === "button"
        ),
        "mdc-fab__label": (
          /*context*/
          n[6] === "fab"
        ),
        "mdc-tab__text-label": (
          /*context*/
          n[6] === "tab"
        ),
        "mdc-image-list__label": (
          /*context*/
          n[6] === "image-list"
        ),
        "mdc-snackbar__label": (
          /*context*/
          n[6] === "snackbar"
        ),
        "mdc-banner__text": (
          /*context*/
          n[6] === "banner"
        ),
        "mdc-segmented-button__label": (
          /*context*/
          n[6] === "segmented-button"
        ),
        "mdc-data-table__pagination-rows-per-page-label": (
          /*context*/
          n[6] === "data-table:pagination"
        ),
        "mdc-data-table__header-cell-label": (
          /*context*/
          n[6] === "data-table:sortable-header-cell"
        )
      })
    },
    /*context*/
    n[6] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: (
      /*tabindex*/
      n[7]
    ) },
    /*$$restProps*/
    n[8]
  ];
  var l = (
    /*component*/
    n[2]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [Bo] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = X(u, he(r, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        s[3]
      ) },
      o & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          s[5],
          .../*use*/
          s[0]
        ]
      },
      o & /*className, context*/
      66 && {
        class: re({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            s[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            s[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            s[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            s[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            s[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            s[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            s[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            s[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            s[6] === "data-table:sortable-header-cell"
          )
        })
      },
      o & /*context*/
      64 && Le(
        /*context*/
        s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        s[7]
      ) },
      o & /*$$restProps*/
      256 && Le(
        /*$$restProps*/
        s[8]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[11](e)), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(s, o) {
      e && $(e, s, o), H(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Ue();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Ne();
        }
        l ? (e = kt(l, a(s, o)), s[11](e), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? he(r, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            s[3]
          ) },
          o & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              s[5],
              .../*use*/
              s[0]
            ]
          },
          o & /*className, context*/
          66 && {
            class: re({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                s[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                s[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                s[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                s[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                s[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                s[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                s[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                s[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                s[6] === "data-table:sortable-header-cell"
              )
            })
          },
          o & /*context*/
          64 && Le(
            /*context*/
            s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            s[7]
          ) },
          o & /*$$restProps*/
          256 && Le(
            /*$$restProps*/
            s[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && y(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), n[11](null), e && ee(e, s);
    }
  };
}
function jo(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: f = Nt } = e, { tag: d = f === Nt ? "span" : void 0 } = e;
  const h = ze("SMUI:label:context"), m = ze("SMUI:label:tabindex");
  function _() {
    return c.getElement();
  }
  function p(A) {
    se[A ? "unshift" : "push"](() => {
      c = A, t(4, c);
    });
  }
  return n.$$set = (A) => {
    e = X(X({}, e), tt(A)), t(8, r = me(e, i)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "component" in A && t(2, f = A.component), "tag" in A && t(3, d = A.tag), "$$scope" in A && t(12, a = A.$$scope);
  }, [
    o,
    u,
    f,
    d,
    c,
    s,
    h,
    m,
    r,
    _,
    l,
    p,
    a
  ];
}
class qo extends ye {
  constructor(e) {
    super(), Ae(this, e, jo, Vo, ge, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 9
    });
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
function Go(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i, r = (
    /*tag*/
    n[1] && or(n)
  );
  return {
    c() {
      r && r.c(), t = qe();
    },
    m(l, a) {
      r && r.m(l, a), H(l, t, a), i = !0;
    },
    p(l, a) {
      /*tag*/
      l[1] ? e ? ge(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = or(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : r.p(l, a) : (r = or(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      i || (y(r, l), i = !0);
    },
    o(l) {
      E(r, l), i = !1;
    },
    d(l) {
      l && P(t), r && r.d(l);
    }
  };
}
function Ko(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i = (
    /*tag*/
    n[1] && ur(n)
  );
  return {
    c() {
      i && i.c(), t = qe();
    },
    m(r, l) {
      i && i.m(r, l), H(r, t, l);
    },
    p(r, l) {
      /*tag*/
      r[1] ? e ? ge(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = ur(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, l) : (i = ur(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: Ze,
    o: Ze,
    d(r) {
      r && P(t), i && i.d(r);
    }
  };
}
function zo(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = Re(
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
    u = X(u, o[c]);
  return {
    c() {
      e = lt("svg"), s && s.c(), Qr(e, u);
    },
    m(c, f) {
      H(c, e, f), s && s.m(e, null), n[9](e), i = !0, r || (l = [
        de(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      s && s.p && (!i || f & /*$$scope*/
      128) && De(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? ke(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Me(
          /*$$scope*/
          c[7]
        ),
        null
      ), Qr(e, u = he(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (y(s, c), i = !0);
    },
    o(c) {
      E(s, c), i = !1;
    },
    d(c) {
      c && P(e), s && s.d(c), n[9](null), r = !1, Qe(l);
    }
  };
}
function or(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = Re(
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
    u = X(u, o[c]);
  return {
    c() {
      e = x(
        /*tag*/
        n[1]
      ), s && s.c(), Ei(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      H(c, e, f), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        de(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      s && s.p && (!i || f & /*$$scope*/
      128) && De(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? ke(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Me(
          /*$$scope*/
          c[7]
        ),
        null
      ), Ei(
        /*tag*/
        c[1]
      )(e, u = he(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (y(s, c), i = !0);
    },
    o(c) {
      E(s, c), i = !1;
    },
    d(c) {
      c && P(e), s && s.d(c), n[11](null), r = !1, Qe(l);
    }
  };
}
function ur(n) {
  let e, t, i, r, l = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let s = 0; s < l.length; s += 1)
    a = X(a, l[s]);
  return {
    c() {
      e = x(
        /*tag*/
        n[1]
      ), Ei(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(s, o) {
      H(s, e, o), n[10](e), i || (r = [
        de(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(s, o) {
      Ei(
        /*tag*/
        s[1]
      )(e, a = he(l, [o & /*$$restProps*/
      32 && /*$$restProps*/
      s[5]])), t && pe(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    d(s) {
      s && P(e), n[10](null), i = !1, Qe(r);
    }
  };
}
function Wo(n) {
  let e, t, i, r;
  const l = [zo, Ko, Go], a = [];
  function s(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ue(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), Ne(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), y(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
function Xo(n, e, t) {
  let i;
  const r = ["use", "tag", "getElement"];
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
  const c = nt(et());
  let f;
  function d() {
    return f;
  }
  function h(p) {
    se[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function m(p) {
    se[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function _(p) {
    se[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  return n.$$set = (p) => {
    e = X(X({}, e), tt(p)), t(5, l = me(e, r)), "use" in p && t(0, o = p.use), "tag" in p && t(1, u = p.tag), "$$scope" in p && t(7, s = p.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*tag*/
    2 && t(3, i = [
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
    i,
    c,
    l,
    d,
    s,
    a,
    h,
    m,
    _
  ];
}
class Nt extends ye {
  constructor(e) {
    super(), Ae(this, e, Xo, Wo, ge, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const Mn = [];
function yt(n, e = Ze) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function r(s) {
    if (ge(n, s) && (n = s, t)) {
      const o = !Mn.length;
      for (const u of i)
        u[1](), Mn.push(u, n);
      if (o) {
        for (let u = 0; u < Mn.length; u += 2)
          Mn[u][0](Mn[u + 1]);
        Mn.length = 0;
      }
    }
  }
  function l(s) {
    r(s(n));
  }
  function a(s, o = Ze) {
    const u = [s, o];
    return i.add(u), i.size === 1 && (t = e(r, l) || Ze), s(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: l, subscribe: a };
}
function Yo(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[3],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, [l]) {
      i && i.p && (!e || l & /*$$scope*/
      8) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[3],
        e ? ke(
          t,
          /*$$scope*/
          r[3],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Zo(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { key: a } = e, { value: s } = e;
  const o = yt(s);
  return rt(n, o, (u) => t(5, i = u)), Ke(a, o), xt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, a = u.key), "value" in u && t(2, s = u.value), "$$scope" in u && t(3, l = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Vt(o, i = s, i);
  }, [o, a, s, l, r];
}
class Jn extends ye {
  constructor(e) {
    super(), Ae(this, e, Zo, Yo, ge, { key: 1, value: 2 });
  }
}
function nl(n) {
  let e;
  return {
    c() {
      e = x("div"), F(e, "class", "mdc-button__touch");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function Qo(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[28].default
  ), a = Re(
    l,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let s = (
    /*touch*/
    n[6] && nl()
  );
  return {
    c() {
      e = x("div"), t = oe(), a && a.c(), s && s.c(), i = qe(), F(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      H(o, e, u), H(o, t, u), a && a.m(o, u), s && s.m(o, u), H(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && De(
        a,
        l,
        o,
        /*$$scope*/
        o[30],
        r ? ke(
          l,
          /*$$scope*/
          o[30],
          u,
          null
        ) : Me(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? s || (s = nl(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (y(a, o), r = !0);
    },
    o(o) {
      E(a, o), r = !1;
    },
    d(o) {
      o && (P(e), P(t), P(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Jo(n) {
  let e, t, i;
  const r = [
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
      class: re({
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
      ).map(cr).concat([
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
  var l = (
    /*component*/
    n[9]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [Qo] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = X(u, he(r, [
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
        class: re({
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
        ).map(cr).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Le(
        /*actionProp*/
        s[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Le(
        /*defaultProp*/
        s[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Le(
        /*secondaryProp*/
        s[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        s[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Le(
        /*$$restProps*/
        s[23]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(s, o) {
      e && $(e, s, o), H(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      512 && l !== (l = /*component*/
      s[9])) {
        if (e) {
          Ue();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Ne();
        }
        l ? (e = kt(l, a(s, o)), s[29](e), e.$on(
          "click",
          /*handleClick*/
          s[22]
        ), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? he(r, [
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
            class: re({
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
            ).map(cr).concat([
              /*style*/
              s[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Le(
            /*actionProp*/
            s[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Le(
            /*defaultProp*/
            s[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Le(
            /*secondaryProp*/
            s[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            s[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Le(
            /*$$restProps*/
            s[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && y(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), n[29](null), e && ee(e, s);
    }
  };
}
const cr = ([n, e]) => `${n}: ${e};`;
function xo(n, e, t) {
  let i, r, l;
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
  let s = me(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = nt(et());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = "primary" } = e, { variant: p = "text" } = e, { touch: A = !1 } = e, { href: b = void 0 } = e, { action: T = "close" } = e, { defaultAction: C = !1 } = e, { secondary: k = !1 } = e, R, g = {}, S = {}, B = ze("SMUI:button:context"), { component: v = Nt } = e, { tag: I = v === Nt ? b == null ? "button" : "a" : void 0 } = e, D = s.disabled;
  Ke("SMUI:label:context", "button"), Ke("SMUI:icon:context", "button");
  function O(L) {
    g[L] || t(12, g[L] = !0, g);
  }
  function U(L) {
    (!(L in g) || g[L]) && t(12, g[L] = !1, g);
  }
  function W(L, V) {
    S[L] != V && (V === "" || V == null ? (delete S[L], t(13, S)) : t(13, S[L] = V, S));
  }
  function q() {
    B === "banner" && be(z(), k ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function z() {
    return R.getElement();
  }
  function M(L) {
    se[L ? "unshift" : "push"](() => {
      R = L, t(11, R);
    });
  }
  return n.$$set = (L) => {
    t(31, e = X(X({}, e), tt(L))), t(23, s = me(e, a)), "use" in L && t(0, f = L.use), "class" in L && t(1, d = L.class), "style" in L && t(2, h = L.style), "ripple" in L && t(3, m = L.ripple), "color" in L && t(4, _ = L.color), "variant" in L && t(5, p = L.variant), "touch" in L && t(6, A = L.touch), "href" in L && t(7, b = L.href), "action" in L && t(24, T = L.action), "defaultAction" in L && t(25, C = L.defaultAction), "secondary" in L && t(8, k = L.secondary), "component" in L && t(9, v = L.component), "tag" in L && t(10, I = L.tag), "$$scope" in L && t(30, u = L.$$scope);
  }, n.$$.update = () => {
    if (t(16, i = B === "dialog:action" && T != null ? { "data-mdc-dialog-action": T } : { action: e.action }), t(15, r = B === "dialog:action" && C ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, l = B === "banner" ? {} : { secondary: e.secondary }), D !== s.disabled) {
      if (R) {
        const L = z();
        "blur" in L && L.blur();
      }
      t(27, D = s.disabled);
    }
  }, e = tt(e), [
    f,
    d,
    h,
    m,
    _,
    p,
    A,
    b,
    k,
    v,
    I,
    R,
    g,
    S,
    l,
    r,
    i,
    c,
    B,
    O,
    U,
    W,
    q,
    s,
    T,
    C,
    z,
    D,
    o,
    M,
    u
  ];
}
class $o extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      xo,
      Jo,
      ge,
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
function eu(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[5],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      32) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[5],
        e ? ke(
          t,
          /*$$scope*/
          r[5],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[5]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function tu(n) {
  let e, t;
  return e = new $o({
    props: {
      variant: (
        /*variant*/
        n[2]
      ),
      disabled: (
        /*disabled*/
        n[1]
      ),
      style: (
        /*isAbortAction*/
        n[3] ? "background-color: #ff3e00;" : void 0
      ),
      $$slots: { default: [eu] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      n[0]()
    ) && n[0]().apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      n = i;
      const l = {};
      r & /*variant*/
      4 && (l.variant = /*variant*/
      n[2]), r & /*disabled*/
      2 && (l.disabled = /*disabled*/
      n[1]), r & /*isAbortAction*/
      8 && (l.style = /*isAbortAction*/
      n[3] ? "background-color: #ff3e00;" : void 0), r & /*$$scope*/
      32 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function nu(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: l = () => {
  } } = e, { disabled: a = !1 } = e, { variant: s = "default" } = e, { isAbortAction: o = !1 } = e;
  return n.$$set = (u) => {
    "callback" in u && t(0, l = u.callback), "disabled" in u && t(1, a = u.disabled), "variant" in u && t(2, s = u.variant), "isAbortAction" in u && t(3, o = u.isAbortAction), "$$scope" in u && t(5, r = u.$$scope);
  }, [l, a, s, o, i, r];
}
class Br extends ye {
  constructor(e) {
    super(), Ae(this, e, nu, tu, ge, {
      callback: 0,
      disabled: 1,
      variant: 2,
      isAbortAction: 3
    });
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
var Ai = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, en = {
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
var iu = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ai;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return en;
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
      var t = this.adapter.getAttr(en.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(en.DATA_ARIA_LABEL_OFF);
      if (t && i) {
        if (this.adapter.getAttr(en.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(en.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ai.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(Ai.ICON_BUTTON_ON) : this.adapter.removeClass(Ai.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = t ? this.adapter.getAttr(en.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(en.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(en.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(en.ARIA_PRESSED, "" + t);
    }, e;
  }(Et)
);
function il(n) {
  let e;
  return {
    c() {
      e = x("div"), F(e, "class", "mdc-icon-button__touch");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function ru(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[33].default
  ), a = Re(
    l,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let s = (
    /*touch*/
    n[8] && il()
  );
  return {
    c() {
      e = x("div"), t = oe(), a && a.c(), s && s.c(), i = qe(), F(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      H(o, e, u), H(o, t, u), a && a.m(o, u), s && s.m(o, u), H(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && De(
        a,
        l,
        o,
        /*$$scope*/
        o[37],
        r ? ke(
          l,
          /*$$scope*/
          o[37],
          u,
          null
        ) : Me(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? s || (s = il(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (y(a, o), r = !0);
    },
    o(o) {
      E(a, o), r = !1;
    },
    d(o) {
      o && (P(e), P(t), P(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function lu(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          Rt,
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
      class: re({
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
      ).map(fr).concat([
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
  var l = (
    /*component*/
    n[13]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [ru] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = X(u, he(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        s[14]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            Rt,
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
        class: re({
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
        ).map(fr).concat([
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
      2097152 && Le(
        /*actionProp*/
        s[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && Le(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Le(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(s, o) {
      e && $(e, s, o), H(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Ue();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Ne();
        }
        l ? (e = kt(l, a(s, o)), s[34](e), e.$on(
          "click",
          /*click_handler*/
          s[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          s[36]
        ), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? he(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            s[14]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                Rt,
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
            class: re({
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
            ).map(fr).concat([
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
          2097152 && Le(
            /*actionProp*/
            s[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && Le(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Le(
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
      i || (e && y(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), n[34](null), e && ee(e, s);
    }
  };
}
const fr = ([n, e]) => `${n}: ${e};`;
function su(n, e, t) {
  let i;
  const r = [
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
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = nt(et());
  let u = () => {
  };
  function c(G) {
    return G === u;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = void 0 } = e, { toggle: p = !1 } = e, { pressed: A = u } = e, { ariaLabelOn: b = void 0 } = e, { ariaLabelOff: T = void 0 } = e, { touch: C = !1 } = e, { displayFlex: k = !0 } = e, { size: R = "normal" } = e, { href: g = void 0 } = e, { action: S = void 0 } = e, B, v, I = {}, D = {}, O = {}, U = ze("SMUI:icon-button:context"), W = ze("SMUI:icon-button:aria-describedby"), { component: q = Nt } = e, { tag: z = q === Nt ? g == null ? "button" : "a" : void 0 } = e, M = l.disabled;
  Ke("SMUI:icon:context", "icon-button");
  let L = null;
  xt(() => {
    v && v.destroy();
  });
  function V(G) {
    return G in I ? I[G] : Ce().classList.contains(G);
  }
  function ue(G) {
    I[G] || t(18, I[G] = !0, I);
  }
  function Fe(G) {
    (!(G in I) || I[G]) && t(18, I[G] = !1, I);
  }
  function Ie(G, Ge) {
    D[G] != Ge && (Ge === "" || Ge == null ? (delete D[G], t(19, D)) : t(19, D[G] = Ge, D));
  }
  function Ye(G) {
    var Ge;
    return G in O ? (Ge = O[G]) !== null && Ge !== void 0 ? Ge : null : Ce().getAttribute(G);
  }
  function K(G, Ge) {
    O[G] !== Ge && t(20, O[G] = Ge, O);
  }
  function J(G) {
    t(0, A = G.isOn);
  }
  function Ce() {
    return B.getElement();
  }
  function Ee(G) {
    se[G ? "unshift" : "push"](() => {
      B = G, t(16, B);
    });
  }
  const we = () => v && v.handleClick(), ie = () => U === "top-app-bar:navigation" && be(Ce(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (G) => {
    e = X(X({}, e), tt(G)), t(29, l = me(e, r)), "use" in G && t(1, f = G.use), "class" in G && t(2, d = G.class), "style" in G && t(3, h = G.style), "ripple" in G && t(4, m = G.ripple), "color" in G && t(5, _ = G.color), "toggle" in G && t(30, p = G.toggle), "pressed" in G && t(0, A = G.pressed), "ariaLabelOn" in G && t(6, b = G.ariaLabelOn), "ariaLabelOff" in G && t(7, T = G.ariaLabelOff), "touch" in G && t(8, C = G.touch), "displayFlex" in G && t(9, k = G.displayFlex), "size" in G && t(10, R = G.size), "href" in G && t(11, g = G.href), "action" in G && t(12, S = G.action), "component" in G && t(13, q = G.component), "tag" in G && t(14, z = G.tag), "$$scope" in G && t(37, s = G.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, i = (() => {
      if (U === "data-table:pagination")
        switch (S) {
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
        return U === "dialog:header" || U === "dialog:sheet" ? { "data-mdc-dialog-action": S } : { action: S };
    })()), M !== l.disabled) {
      if (B) {
        const G = Ce();
        "blur" in G && G.blur();
      }
      t(31, M = l.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && B && Ce() && p !== L && (p && !v ? (t(17, v = new iu({
      addClass: ue,
      hasClass: V,
      notifyChange: (G) => {
        J(G), be(Ce(), "SMUIIconButtonToggle:change", G, void 0, !0);
      },
      removeClass: Fe,
      getAttr: Ye,
      setAttr: K
    })), v.init()) : !p && v && (v.destroy(), t(17, v = void 0), t(18, I = {}), t(20, O = {})), t(32, L = p)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && v && !c(A) && v.isOn() !== A && v.toggle(A);
  }, [
    A,
    f,
    d,
    h,
    m,
    _,
    b,
    T,
    C,
    k,
    R,
    g,
    S,
    q,
    z,
    Ce,
    B,
    v,
    I,
    D,
    O,
    i,
    o,
    c,
    U,
    W,
    ue,
    Fe,
    Ie,
    l,
    p,
    M,
    L,
    a,
    Ee,
    we,
    ie,
    s
  ];
}
class au extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      su,
      lu,
      ge,
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
function ou(n) {
  let e;
  return {
    c() {
      e = ut(
        /*icon*/
        n[1]
      );
    },
    m(t, i) {
      H(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      2 && vt(
        e,
        /*icon*/
        t[1]
      );
    },
    i: Ze,
    o: Ze,
    d(t) {
      t && P(e);
    }
  };
}
function uu(n) {
  let e, t, i;
  var r = (
    /*iconComponent*/
    n[2]
  );
  function l(a, s) {
    return {
      props: { svgStyles: (
        /*iconStyles*/
        a[3]
      ) }
    };
  }
  return r && (e = kt(r, l(n))), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(a, s) {
      e && $(e, a, s), H(a, t, s), i = !0;
    },
    p(a, s) {
      if (s & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Ue();
          const o = e;
          E(o.$$.fragment, 1, 0, () => {
            ee(o, 1);
          }), Ne();
        }
        r ? (e = kt(r, l(a)), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const o = {};
        s & /*iconStyles*/
        8 && (o.svgStyles = /*iconStyles*/
        a[3]), e.$set(o);
      }
    },
    i(a) {
      i || (e && y(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && E(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && P(t), e && ee(e, a);
    }
  };
}
function cu(n) {
  let e, t, i, r;
  const l = [uu, ou], a = [];
  function s(o, u) {
    return (
      /*iconComponent*/
      o[2] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ue(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), Ne(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), y(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
function fu(n) {
  let e, t;
  return e = new au({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        n[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [cu] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      n[0]
    ) && n[0].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      n = i;
      const l = {};
      r & /*disabled*/
      16 && (l.disabled = /*disabled*/
      n[4]), r & /*$$scope, iconComponent, iconStyles, icon*/
      46 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function du(n, e, t) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: l = null } = e, { iconStyles: a = "" } = e, { disabled: s = !1 } = e;
  return n.$$set = (o) => {
    "callback" in o && t(0, i = o.callback), "icon" in o && t(1, r = o.icon), "iconComponent" in o && t(2, l = o.iconComponent), "iconStyles" in o && t(3, a = o.iconStyles), "disabled" in o && t(4, s = o.disabled);
  }, [i, r, l, a, s];
}
class hu extends ye {
  constructor(e) {
    super(), Ae(this, e, du, fu, ge, {
      callback: 0,
      icon: 1,
      iconComponent: 2,
      iconStyles: 3,
      disabled: 4
    });
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
var mu = {
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
var pu = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mu;
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
      var i = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(t) {
      var i = e.cssClasses, r = i.LABEL_FLOAT_ABOVE, l = i.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(l));
    }, e.prototype.setRequired = function(t) {
      var i = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(Et)
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
var In = {
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
var gu = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return In;
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
      this.adapter.removeClass(In.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(In.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(In.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(In.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(In.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(In.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Et)
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
var _u = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, rl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, bu = {
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
var Iu = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return _u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return rl;
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
      var i = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += rl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Et)
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
var dr = {
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
}, vu = {
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
}, ll = {
  LABEL_SCALE: 0.75
}, Au = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], yu = [
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
var sl = ["mousedown", "touchstart"], al = ["click", "keydown"], Cu = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = i.helperText, r.characterCounter = i.characterCounter, r.leadingIcon = i.leadingIcon, r.trailingIcon = i.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(l) {
        r.setTransformOrigin(l);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(l) {
        r.handleValidationAttributeChange(l);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return dr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ll;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return yu.indexOf(t) >= 0;
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
      var t, i, r, l;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = Ct(sl), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = Ct(al), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        r = { error: f };
      } finally {
        try {
          c && !c.done && (l = u.return) && l.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, i, r, l;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = Ct(sl), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = Ct(al), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        r = { error: f };
      } finally {
        try {
          c && !c.done && (l = u.return) && l.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var i = this;
      t.some(function(r) {
        return Au.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * ll.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = t.touches, r = i ? i[0] : t, l = r.target.getBoundingClientRect(), a = r.clientX - l.left;
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
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var i = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
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
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var i = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var l = this.helperText.isVisible(), a = this.helperText.getId();
        l && a ? this.adapter.setInputAttr(dr.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(dr.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var i = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(t) {
      var i = e.cssClasses, r = i.DISABLED, l = i.INVALID;
      t ? (this.adapter.addClass(r), this.adapter.removeClass(l)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var i = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
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
  }(Et)
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
var ol = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Eu = {
  ROOT: "mdc-text-field__icon"
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
var ul = ["click", "keydown"], Su = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ol;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Eu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          },
          removeAttr: function() {
          },
          setContent: function() {
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          notifyIconAction: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t, i;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var r = Ct(ul), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.registerInteractionHandler(a, this.interactionHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = Ct(ul), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.deregisterInteractionHandler(a, this.interactionHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", ol.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Et)
);
function Tu(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = Re(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = re({
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
      style: i = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(fl).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    {
      for: r = /*forId*/
      n[5] || /*inputProps*/
      (n[11] ? (
        /*inputProps*/
        n[11].id
      ) : void 0)
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let h = 0; h < f.length; h += 1)
    d = X(d, f[h]);
  return {
    c() {
      e = x("label"), c && c.c(), ce(e, d);
    },
    m(h, m) {
      H(h, e, m), c && c.m(e, null), n[24](e), a = !0, s || (o = [
        de(l = $e.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        de(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(h, m) {
      c && c.p && (!a || m & /*$$scope*/
      2097152) && De(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? ke(
          u,
          /*$$scope*/
          h[21],
          m,
          null
        ) : Me(
          /*$$scope*/
          h[21]
        ),
        null
      ), ce(e, d = he(f, [
        (!a || m & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = re({
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
        (!a || m & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          h[9]
        ).map(fl).concat([
          /*style*/
          h[4]
        ]).join(" "))) && { style: i },
        (!a || m & /*forId*/
        32 && r !== (r = /*forId*/
        h[5] || /*inputProps*/
        (h[11] ? (
          /*inputProps*/
          h[11].id
        ) : void 0))) && { for: r },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        h[12]
      ])), l && pe(l.update) && m & /*use*/
      4 && l.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      a || (y(c, h), a = !0);
    },
    o(h) {
      E(c, h), a = !1;
    },
    d(h) {
      h && P(e), c && c.d(h), n[24](null), s = !1, Qe(o);
    }
  };
}
function Lu(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = Re(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = re({
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
      style: i = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(cl).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = X(f, c[d]);
  return {
    c() {
      e = x("span"), u && u.c(), ce(e, f);
    },
    m(d, h) {
      H(d, e, h), u && u.m(e, null), n[23](e), l = !0, a || (s = [
        de(r = $e.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        de(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(d, h) {
      u && u.p && (!l || h & /*$$scope*/
      2097152) && De(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        l ? ke(
          o,
          /*$$scope*/
          d[21],
          h,
          null
        ) : Me(
          /*$$scope*/
          d[21]
        ),
        null
      ), ce(e, f = he(c, [
        (!l || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = re({
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
        (!l || h & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(cl).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), r && pe(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      l || (y(u, d), l = !0);
    },
    o(d) {
      E(u, d), l = !1;
    },
    d(d) {
      d && P(e), u && u.d(d), n[23](null), a = !1, Qe(s);
    }
  };
}
function Ou(n) {
  let e, t, i, r;
  const l = [Lu, Tu], a = [];
  function s(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ue(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), Ne(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), y(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
const cl = ([n, e]) => `${n}: ${e};`, fl = ([n, e]) => `${n}: ${e};`;
function Ru(n, e, t) {
  const i = [
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
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const o = nt(et());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: h = !1 } = e, { required: m = !1 } = e, { wrapped: _ = !1 } = e, p, A, b = {}, T = {}, C = (s = ze("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, k = h, R = m;
  st(() => {
    t(18, A = new pu({
      addClass: g,
      removeClass: S,
      getWidth: () => {
        var L, V;
        const ue = W(), Fe = ue.cloneNode(!0);
        (L = ue.parentNode) === null || L === void 0 || L.appendChild(Fe), Fe.classList.add("smui-floating-label--remove-transition"), Fe.classList.add("smui-floating-label--force-size"), Fe.classList.remove("mdc-floating-label--float-above");
        const Ie = Fe.scrollWidth;
        return (V = ue.parentNode) === null || V === void 0 || V.removeChild(Fe), Ie;
      },
      registerInteractionHandler: (L, V) => W().addEventListener(L, V),
      deregisterInteractionHandler: (L, V) => W().removeEventListener(L, V)
    }));
    const M = {
      get element() {
        return W();
      },
      addStyle: B,
      removeStyle: v
    };
    return be(p, "SMUIFloatingLabel:mount", M), A.init(), () => {
      be(p, "SMUIFloatingLabel:unmount", M), A.destroy();
    };
  });
  function g(M) {
    b[M] || t(8, b[M] = !0, b);
  }
  function S(M) {
    (!(M in b) || b[M]) && t(8, b[M] = !1, b);
  }
  function B(M, L) {
    T[M] != L && (L === "" || L == null ? (delete T[M], t(9, T)) : t(9, T[M] = L, T));
  }
  function v(M) {
    M in T && (delete T[M], t(9, T));
  }
  function I(M) {
    A.shake(M);
  }
  function D(M) {
    t(0, h = M);
  }
  function O(M) {
    t(1, m = M);
  }
  function U() {
    return A.getWidth();
  }
  function W() {
    return p;
  }
  function q(M) {
    se[M ? "unshift" : "push"](() => {
      p = M, t(7, p);
    });
  }
  function z(M) {
    se[M ? "unshift" : "push"](() => {
      p = M, t(7, p);
    });
  }
  return n.$$set = (M) => {
    e = X(X({}, e), tt(M)), t(12, r = me(e, i)), "use" in M && t(2, u = M.use), "class" in M && t(3, c = M.class), "style" in M && t(4, f = M.style), "for" in M && t(5, d = M.for), "floatAbove" in M && t(0, h = M.floatAbove), "required" in M && t(1, m = M.required), "wrapped" in M && t(6, _ = M.wrapped), "$$scope" in M && t(21, a = M.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && A && k !== h && (t(19, k = h), A.float(h)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && A && R !== m && (t(20, R = m), A.setRequired(m));
  }, [
    h,
    m,
    u,
    c,
    f,
    d,
    _,
    p,
    b,
    T,
    o,
    C,
    r,
    I,
    D,
    O,
    U,
    W,
    A,
    k,
    R,
    a,
    l,
    q,
    z
  ];
}
class Mi extends ye {
  constructor(e) {
    super(), Ae(this, e, Ru, Ou, ge, {
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
function ku(n) {
  let e, t, i, r, l, a, s = [
    {
      class: t = re({
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
      style: i = Object.entries(
        /*internalStyles*/
        n[6]
      ).map(dl).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = X(o, s[u]);
  return {
    c() {
      e = x("div"), ce(e, o);
    },
    m(u, c) {
      H(u, e, c), n[13](e), l || (a = [
        de(r = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], l = !0);
    },
    p(u, [c]) {
      ce(e, o = he(s, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = re({
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
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(dl).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && pe(r.update) && c & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Ze,
    o: Ze,
    d(u) {
      u && P(e), n[13](null), l = !1, Qe(a);
    }
  };
}
const dl = ([n, e]) => `${n}: ${e};`;
function Du(n, e, t) {
  const i = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let r = me(e, i);
  const l = nt(et());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, h = {};
  st(() => (f = new gu({
    addClass: _,
    removeClass: p,
    hasClass: m,
    setStyle: A,
    registerEventHandler: (g, S) => k().addEventListener(g, S),
    deregisterEventHandler: (g, S) => k().removeEventListener(g, S)
  }), f.init(), () => {
    f.destroy();
  }));
  function m(g) {
    return g in d ? d[g] : k().classList.contains(g);
  }
  function _(g) {
    d[g] || t(5, d[g] = !0, d);
  }
  function p(g) {
    (!(g in d) || d[g]) && t(5, d[g] = !1, d);
  }
  function A(g, S) {
    h[g] != S && (S === "" || S == null ? (delete h[g], t(6, h)) : t(6, h[g] = S, h));
  }
  function b() {
    f.activate();
  }
  function T() {
    f.deactivate();
  }
  function C(g) {
    f.setRippleCenter(g);
  }
  function k() {
    return c;
  }
  function R(g) {
    se[g ? "unshift" : "push"](() => {
      c = g, t(4, c);
    });
  }
  return n.$$set = (g) => {
    e = X(X({}, e), tt(g)), t(8, r = me(e, i)), "use" in g && t(0, a = g.use), "class" in g && t(1, s = g.class), "style" in g && t(2, o = g.style), "active" in g && t(3, u = g.active);
  }, [
    a,
    s,
    o,
    u,
    c,
    d,
    h,
    l,
    r,
    b,
    T,
    C,
    k,
    R
  ];
}
class ya extends ye {
  constructor(e) {
    super(), Ae(this, e, Du, ku, ge, {
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
function hl(n) {
  let e, t, i;
  const r = (
    /*#slots*/
    n[15].default
  ), l = Re(
    r,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = x("div"), l && l.c(), F(e, "class", "mdc-notched-outline__notch"), F(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(ml).join(" "));
    },
    m(a, s) {
      H(a, e, s), l && l.m(e, null), i = !0;
    },
    p(a, s) {
      l && l.p && (!i || s & /*$$scope*/
      16384) && De(
        l,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? ke(
          r,
          /*$$scope*/
          a[14],
          s,
          null
        ) : Me(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || s & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(ml).join(" "))) && F(e, "style", t);
    },
    i(a) {
      i || (y(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && P(e), l && l.d(a);
    }
  };
}
function Mu(n) {
  let e, t, i, r, l, a, s, o, u, c, f = !/*noLabel*/
  n[3] && hl(n), d = [
    {
      class: a = re({
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
  for (let m = 0; m < d.length; m += 1)
    h = X(h, d[m]);
  return {
    c() {
      e = x("div"), t = x("div"), i = oe(), f && f.c(), r = oe(), l = x("div"), F(t, "class", "mdc-notched-outline__leading"), F(l, "class", "mdc-notched-outline__trailing"), ce(e, h);
    },
    m(m, _) {
      H(m, e, _), Q(e, t), Q(e, i), f && f.m(e, null), Q(e, r), Q(e, l), n[16](e), o = !0, u || (c = [
        de(s = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        fe(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        fe(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(m, [_]) {
      /*noLabel*/
      m[3] ? f && (Ue(), E(f, 1, 1, () => {
        f = null;
      }), Ne()) : f ? (f.p(m, _), _ & /*noLabel*/
      8 && y(f, 1)) : (f = hl(m), f.c(), y(f, 1), f.m(e, r)), ce(e, h = he(d, [
        (!o || _ & /*className, notched, noLabel, internalClasses*/
        78 && a !== (a = re({
          [
            /*className*/
            m[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            m[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            m[3]
          ),
          .../*internalClasses*/
          m[6]
        }))) && { class: a },
        _ & /*$$restProps*/
        1024 && /*$$restProps*/
        m[10]
      ])), s && pe(s.update) && _ & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (y(f), o = !0);
    },
    o(m) {
      E(f), o = !1;
    },
    d(m) {
      m && P(e), f && f.d(), n[16](null), u = !1, Qe(c);
    }
  };
}
const ml = ([n, e]) => `${n}: ${e};`;
function Fu(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, h, m, _ = {}, p = {};
  st(() => (h = new Iu({
    addClass: b,
    removeClass: T,
    setNotchWidthProperty: (I) => C("width", I + "px"),
    removeNotchWidthProperty: () => k("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function A(I) {
    t(4, m = I.detail);
  }
  function b(I) {
    _[I] || t(6, _[I] = !0, _);
  }
  function T(I) {
    (!(I in _) || _[I]) && t(6, _[I] = !1, _);
  }
  function C(I, D) {
    p[I] != D && (D === "" || D == null ? (delete p[I], t(7, p)) : t(7, p[I] = D, p));
  }
  function k(I) {
    I in p && (delete p[I], t(7, p));
  }
  function R(I) {
    h.notch(I);
  }
  function g() {
    h.closeNotch();
  }
  function S() {
    return d;
  }
  function B(I) {
    se[I ? "unshift" : "push"](() => {
      d = I, t(5, d);
    });
  }
  const v = () => t(4, m = void 0);
  return n.$$set = (I) => {
    e = X(X({}, e), tt(I)), t(10, r = me(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "notched" in I && t(2, c = I.notched), "noLabel" in I && t(3, f = I.noLabel), "$$scope" in I && t(14, a = I.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (m ? (m.addStyle("transition-duration", "0s"), b("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      m && m.removeStyle("transition-duration");
    })) : T("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    m,
    d,
    _,
    p,
    s,
    A,
    r,
    R,
    g,
    S,
    a,
    l,
    B,
    v
  ];
}
class Ca extends ye {
  constructor(e) {
    super(), Ae(this, e, Fu, Mu, ge, {
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
function Uu(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      8192) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? ke(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Nu(n) {
  let e, t, i;
  const r = [
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
      class: re({
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
  var l = (
    /*component*/
    n[2]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [Uu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = X(u, he(r, [
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
        class: re({
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
      128 && Le(
        /*props*/
        s[7]
      ),
      o & /*$$restProps*/
      512 && Le(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[12](e)), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(s, o) {
      e && $(e, s, o), H(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Ue();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Ne();
        }
        l ? (e = kt(l, a(s, o)), s[12](e), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? he(r, [
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
            class: re({
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
          128 && Le(
            /*props*/
            s[7]
          ),
          o & /*$$restProps*/
          512 && Le(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && y(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), n[12](null), e && ee(e, s);
    }
  };
}
const ln = {
  component: Nt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function wu(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = ln.class, f = {}, d = [], h = ln.contexts, m = ln.props;
  let { component: _ = ln.component } = e, { tag: p = _ === Nt ? ln.tag : void 0 } = e;
  Object.entries(ln.classMap).forEach(([C, k]) => {
    const R = ze(k);
    R && "subscribe" in R && d.push(R.subscribe((g) => {
      t(5, f[C] = g, f);
    }));
  });
  const A = nt(et());
  for (let C in h)
    h.hasOwnProperty(C) && Ke(C, h[C]);
  xt(() => {
    for (const C of d)
      C();
  });
  function b() {
    return u.getElement();
  }
  function T(C) {
    se[C ? "unshift" : "push"](() => {
      u = C, t(4, u);
    });
  }
  return n.$$set = (C) => {
    e = X(X({}, e), tt(C)), t(9, r = me(e, i)), "use" in C && t(0, s = C.use), "class" in C && t(1, o = C.class), "component" in C && t(2, _ = C.component), "tag" in C && t(3, p = C.tag), "$$scope" in C && t(13, a = C.$$scope);
  }, [
    s,
    o,
    _,
    p,
    u,
    f,
    c,
    m,
    A,
    r,
    b,
    l,
    T,
    a
  ];
}
class Pu extends ye {
  constructor(e) {
    super(), Ae(this, e, wu, Nu, ge, {
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
const pl = Object.assign({}, ln);
function Lt(n) {
  return new Proxy(Pu, {
    construct: function(e, t) {
      return Object.assign(ln, pl, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(ln, pl, n), e[t];
    }
  });
}
const Hu = Lt({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Bu = Lt({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Vu = Lt({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function ju(n) {
  let e, t, i, r, l, a = [
    {
      class: t = re({
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
    s = X(s, a[o]);
  return {
    c() {
      e = x("input"), ce(e, s);
    },
    m(o, u) {
      H(o, e, u), e.autofocus && e.focus(), n[26](e), r || (l = [
        de(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        fe(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        fe(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        fe(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        fe(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], r = !0);
    },
    p(o, [u]) {
      ce(e, s = he(a, [
        u & /*className*/
        2 && t !== (t = re({
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
      ])), i && pe(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: Ze,
    o: Ze,
    d(o) {
      o && P(e), n[26](null), r = !1, Qe(l);
    }
  };
}
function qu(n) {
  return n === "" ? Number.NaN : +n;
}
function Gu(n, e, t) {
  const i = [
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
  let r = me(e, i);
  const l = nt(et());
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = a } = e;
  const h = s(d);
  h && (d = "");
  let { files: m = null } = e, { dirty: _ = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: A = !0 } = e, { emptyValueNull: b = d === null } = e;
  h && b && (d = null);
  let { emptyValueUndefined: T = d === void 0 } = e;
  h && T && (d = void 0);
  let C, k = {}, R = {};
  st(() => {
    A && t(14, p = C.matches(":invalid"));
  });
  function g(L) {
    if (c === "file") {
      t(12, m = L.currentTarget.files);
      return;
    }
    if (L.currentTarget.value === "" && b) {
      t(11, d = null);
      return;
    }
    if (L.currentTarget.value === "" && T) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = qu(L.currentTarget.value));
        break;
      default:
        t(11, d = L.currentTarget.value);
        break;
    }
  }
  function S(L) {
    (c === "file" || c === "range") && g(L), t(13, _ = !0), A && t(14, p = C.matches(":invalid"));
  }
  function B(L) {
    var V;
    return L in k ? (V = k[L]) !== null && V !== void 0 ? V : null : U().getAttribute(L);
  }
  function v(L, V) {
    k[L] !== V && t(6, k[L] = V, k);
  }
  function I(L) {
    (!(L in k) || k[L] != null) && t(6, k[L] = void 0, k);
  }
  function D() {
    U().focus();
  }
  function O() {
    U().blur();
  }
  function U() {
    return C;
  }
  function W(L) {
    Qn.call(this, n, L);
  }
  function q(L) {
    Qn.call(this, n, L);
  }
  function z(L) {
    se[L ? "unshift" : "push"](() => {
      C = L, t(5, C);
    });
  }
  const M = (L) => c !== "file" && g(L);
  return n.$$set = (L) => {
    e = X(X({}, e), tt(L)), t(10, r = me(e, i)), "use" in L && t(0, o = L.use), "class" in L && t(1, u = L.class), "type" in L && t(2, c = L.type), "placeholder" in L && t(3, f = L.placeholder), "value" in L && t(11, d = L.value), "files" in L && t(12, m = L.files), "dirty" in L && t(13, _ = L.dirty), "invalid" in L && t(14, p = L.invalid), "updateInvalid" in L && t(15, A = L.updateInvalid), "emptyValueNull" in L && t(16, b = L.emptyValueNull), "emptyValueUndefined" in L && t(17, T = L.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete R.value, t(4, R), t(2, c), t(11, d)) : t(4, R.value = d ?? "", R));
  }, [
    o,
    u,
    c,
    f,
    R,
    C,
    k,
    l,
    g,
    S,
    r,
    d,
    m,
    _,
    p,
    A,
    b,
    T,
    B,
    v,
    I,
    D,
    O,
    U,
    W,
    q,
    z,
    M
  ];
}
class Ku extends ye {
  constructor(e) {
    super(), Ae(this, e, Gu, ju, ge, {
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
function zu(n) {
  let e, t, i, r, l, a, s = [
    {
      class: t = re({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    {
      style: i = `${/*resizable*/
      n[4] ? "" : "resize: none; "}${/*style*/
      n[3]}`
    },
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[9]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = X(o, s[u]);
  return {
    c() {
      e = x("textarea"), ce(e, o);
    },
    m(u, c) {
      H(u, e, c), e.autofocus && e.focus(), n[21](e), Qt(
        e,
        /*value*/
        n[0]
      ), l || (a = [
        de(r = $e.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        de(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        fe(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        fe(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        fe(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        fe(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], l = !0);
    },
    p(u, [c]) {
      ce(e, o = he(s, [
        c & /*className*/
        4 && t !== (t = re({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
        c & /*resizable, style*/
        24 && i !== (i = `${/*resizable*/
        u[4] ? "" : "resize: none; "}${/*style*/
        u[3]}`) && { style: i },
        c & /*internalAttrs*/
        64 && /*internalAttrs*/
        u[6],
        c & /*$$restProps*/
        512 && /*$$restProps*/
        u[9]
      ])), r && pe(r.update) && c & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && Qt(
        e,
        /*value*/
        u[0]
      );
    },
    i: Ze,
    o: Ze,
    d(u) {
      u && P(e), n[21](null), l = !1, Qe(a);
    }
  };
}
function Wu(n, e, t) {
  const i = [
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
  let r = me(e, i);
  const l = nt(et());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: h = !0 } = e, m, _ = {};
  st(() => {
    d && t(11, f = m.matches(":invalid"));
  });
  function p() {
    t(10, c = !0), d && t(11, f = m.matches(":invalid"));
  }
  function A(I) {
    var D;
    return I in _ ? (D = _[I]) !== null && D !== void 0 ? D : null : R().getAttribute(I);
  }
  function b(I, D) {
    _[I] !== D && t(6, _[I] = D, _);
  }
  function T(I) {
    (!(I in _) || _[I] != null) && t(6, _[I] = void 0, _);
  }
  function C() {
    R().focus();
  }
  function k() {
    R().blur();
  }
  function R() {
    return m;
  }
  function g(I) {
    Qn.call(this, n, I);
  }
  function S(I) {
    Qn.call(this, n, I);
  }
  function B(I) {
    se[I ? "unshift" : "push"](() => {
      m = I, t(5, m);
    });
  }
  function v() {
    u = this.value, t(0, u);
  }
  return n.$$set = (I) => {
    e = X(X({}, e), tt(I)), t(9, r = me(e, i)), "use" in I && t(1, a = I.use), "class" in I && t(2, s = I.class), "style" in I && t(3, o = I.style), "value" in I && t(0, u = I.value), "dirty" in I && t(10, c = I.dirty), "invalid" in I && t(11, f = I.invalid), "updateInvalid" in I && t(12, d = I.updateInvalid), "resizable" in I && t(4, h = I.resizable);
  }, [
    u,
    a,
    s,
    o,
    h,
    m,
    _,
    l,
    p,
    r,
    c,
    f,
    d,
    A,
    b,
    T,
    C,
    k,
    R,
    g,
    S,
    B,
    v
  ];
}
class Xu extends ye {
  constructor(e) {
    super(), Ae(this, e, Wu, zu, ge, {
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
const Yu = (n) => ({}), gl = (n) => ({}), Zu = (n) => ({}), _l = (n) => ({}), Qu = (n) => ({}), bl = (n) => ({}), Ju = (n) => ({}), Il = (n) => ({}), xu = (n) => ({}), vl = (n) => ({}), $u = (n) => ({}), Al = (n) => ({}), ec = (n) => ({}), yl = (n) => ({}), tc = (n) => ({}), Cl = (n) => ({}), nc = (n) => ({}), El = (n) => ({}), ic = (n) => ({}), Sl = (n) => ({}), rc = (n) => ({}), Tl = (n) => ({}), lc = (n) => ({}), Ll = (n) => ({});
function sc(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m;
  const _ = (
    /*#slots*/
    n[56].label
  ), p = Re(
    _,
    n,
    /*$$scope*/
    n[87],
    vl
  );
  i = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [oc] },
      $$scope: { ctx: n }
    }
  });
  const A = (
    /*#slots*/
    n[56].default
  ), b = Re(
    A,
    n,
    /*$$scope*/
    n[87],
    null
  );
  a = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [uc] },
      $$scope: { ctx: n }
    }
  });
  const T = (
    /*#slots*/
    n[56].ripple
  ), C = Re(
    T,
    n,
    /*$$scope*/
    n[87],
    _l
  );
  let k = [
    {
      class: o = re({
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
      ).map(Hl).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    Jt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], R = {};
  for (let g = 0; g < k.length; g += 1)
    R = X(R, k[g]);
  return {
    c() {
      e = x("div"), p && p.c(), t = oe(), te(i.$$.fragment), r = oe(), b && b.c(), l = oe(), te(a.$$.fragment), s = oe(), C && C.c(), ce(e, R);
    },
    m(g, S) {
      H(g, e, S), p && p.m(e, null), Q(e, t), $(i, e, null), Q(e, r), b && b.m(e, null), Q(e, l), $(a, e, null), Q(e, s), C && C.m(e, null), n[82](e), d = !0, h || (m = [
        de(c = Rt.call(null, e, {
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
        de(f = $e.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        de(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        fe(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        fe(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        fe(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        fe(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], h = !0);
    },
    p(g, S) {
      p && p.p && (!d || S[2] & /*$$scope*/
      33554432) && De(
        p,
        _,
        g,
        /*$$scope*/
        g[87],
        d ? ke(
          _,
          /*$$scope*/
          g[87],
          S,
          xu
        ) : Me(
          /*$$scope*/
          g[87]
        ),
        vl
      );
      const B = {};
      S[2] & /*$$scope*/
      33554432 && (B.$$scope = { dirty: S, ctx: g }), i.$set(B), b && b.p && (!d || S[2] & /*$$scope*/
      33554432) && De(
        b,
        A,
        g,
        /*$$scope*/
        g[87],
        d ? ke(
          A,
          /*$$scope*/
          g[87],
          S,
          null
        ) : Me(
          /*$$scope*/
          g[87]
        ),
        null
      );
      const v = {};
      S[2] & /*$$scope*/
      33554432 && (v.$$scope = { dirty: S, ctx: g }), a.$set(v), C && C.p && (!d || S[2] & /*$$scope*/
      33554432) && De(
        C,
        T,
        g,
        /*$$scope*/
        g[87],
        d ? ke(
          T,
          /*$$scope*/
          g[87],
          S,
          Zu
        ) : Me(
          /*$$scope*/
          g[87]
        ),
        _l
      ), ce(e, R = he(k, [
        (!d || S[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | S[1] & /*$$slots*/
        65536 && o !== (o = re({
          [
            /*className*/
            g[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            g[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            g[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            g[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            g[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            g[15] === "standard" && !/*textarea*/
            g[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            g[16] || !/*$$slots*/
            g[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            g[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            g[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            g[1]
          ),
          .../*internalClasses*/
          g[25]
        }))) && { class: o },
        (!d || S[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          g[26]
        ).map(Hl).concat([
          /*style*/
          g[10]
        ]).join(" "))) && { style: u },
        S[1] & /*$$restProps*/
        32768 && Jt(
          /*$$restProps*/
          g[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && pe(c.update) && S[0] & /*ripple*/
      2048 && c.update.call(null, {
        ripple: (
          /*ripple*/
          g[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          g[43]
        ),
        removeClass: (
          /*removeClass*/
          g[44]
        ),
        addStyle: (
          /*addStyle*/
          g[45]
        )
      }), f && pe(f.update) && S[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        g[8]
      );
    },
    i(g) {
      d || (y(p, g), y(i.$$.fragment, g), y(b, g), y(a.$$.fragment, g), y(C, g), d = !0);
    },
    o(g) {
      E(p, g), E(i.$$.fragment, g), E(b, g), E(a.$$.fragment, g), E(C, g), d = !1;
    },
    d(g) {
      g && P(e), p && p.d(g), ee(i), b && b.d(g), ee(a), C && C.d(g), n[82](null), h = !1, Qe(m);
    }
  };
}
function ac(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, A, b, T = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Ol(n), C = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && Dl(n)
  );
  r = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [hc] },
      $$scope: { ctx: n }
    }
  });
  const k = (
    /*#slots*/
    n[56].default
  ), R = Re(
    k,
    n,
    /*$$scope*/
    n[87],
    null
  ), g = [pc, mc], S = [];
  function B(O, U) {
    return (
      /*textarea*/
      O[14] && typeof /*value*/
      O[0] == "string" ? 0 : 1
    );
  }
  s = B(n), o = S[s] = g[s](n), c = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [bc] },
      $$scope: { ctx: n }
    }
  });
  let v = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Nl(n), I = [
    {
      class: d = re({
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
      ).map(Pl).concat([
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
    Jt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], D = {};
  for (let O = 0; O < I.length; O += 1)
    D = X(D, I[O]);
  return {
    c() {
      e = x("label"), T && T.c(), t = oe(), C && C.c(), i = oe(), te(r.$$.fragment), l = oe(), R && R.c(), a = oe(), o.c(), u = oe(), te(c.$$.fragment), f = oe(), v && v.c(), ce(e, D);
    },
    m(O, U) {
      H(O, e, U), T && T.m(e, null), Q(e, t), C && C.m(e, null), Q(e, i), $(r, e, null), Q(e, l), R && R.m(e, null), Q(e, a), S[s].m(e, null), Q(e, u), $(c, e, null), Q(e, f), v && v.m(e, null), n[78](e), p = !0, A || (b = [
        de(m = Rt.call(null, e, {
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
        de(_ = $e.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        de(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        fe(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        fe(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        fe(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        fe(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        fe(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        fe(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], A = !0);
    },
    p(O, U) {
      !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" ? T ? (T.p(O, U), U[0] & /*textarea, variant*/
      49152 && y(T, 1)) : (T = Ol(O), T.c(), y(T, 1), T.m(e, t)) : T && (Ue(), E(T, 1, 1, () => {
        T = null;
      }), Ne()), /*textarea*/
      O[14] || /*variant*/
      O[15] === "outlined" ? C ? (C.p(O, U), U[0] & /*textarea, variant*/
      49152 && y(C, 1)) : (C = Dl(O), C.c(), y(C, 1), C.m(e, i)) : C && (Ue(), E(C, 1, 1, () => {
        C = null;
      }), Ne());
      const W = {};
      U[2] & /*$$scope*/
      33554432 && (W.$$scope = { dirty: U, ctx: O }), r.$set(W), R && R.p && (!p || U[2] & /*$$scope*/
      33554432) && De(
        R,
        k,
        O,
        /*$$scope*/
        O[87],
        p ? ke(
          k,
          /*$$scope*/
          O[87],
          U,
          null
        ) : Me(
          /*$$scope*/
          O[87]
        ),
        null
      );
      let q = s;
      s = B(O), s === q ? S[s].p(O, U) : (Ue(), E(S[q], 1, 1, () => {
        S[q] = null;
      }), Ne(), o = S[s], o ? o.p(O, U) : (o = S[s] = g[s](O), o.c()), y(o, 1), o.m(e, u));
      const z = {};
      U[2] & /*$$scope*/
      33554432 && (z.$$scope = { dirty: U, ctx: O }), c.$set(z), !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" && /*ripple*/
      O[11] ? v ? (v.p(O, U), U[0] & /*textarea, variant, ripple*/
      51200 && y(v, 1)) : (v = Nl(O), v.c(), y(v, 1), v.m(e, null)) : v && (Ue(), E(v, 1, 1, () => {
        v = null;
      }), Ne()), ce(e, D = he(I, [
        (!p || U[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | U[1] & /*$$slots*/
        65536 && d !== (d = re({
          [
            /*className*/
            O[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            O[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            O[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            O[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            O[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            O[15] === "standard" && !/*textarea*/
            O[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            O[16] || /*label*/
            O[17] == null && !/*$$slots*/
            O[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            O[28] || /*value*/
            O[0] != null && /*value*/
            O[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            O[35](
              /*withLeadingIcon*/
              O[22]
            ) ? (
              /*$$slots*/
              O[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              O[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            O[35](
              /*withTrailingIcon*/
              O[23]
            ) ? (
              /*$$slots*/
              O[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              O[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            O[14] && /*$$slots*/
            O[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            O[1]
          ),
          .../*internalClasses*/
          O[25]
        }))) && { class: d },
        (!p || U[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          O[26]
        ).map(Pl).concat([
          /*style*/
          O[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        U[1] & /*$$restProps*/
        32768 && Jt(
          /*$$restProps*/
          O[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), m && pe(m.update) && U[0] & /*textarea, variant*/
      49152 | U[1] & /*inputElement*/
      4 && m.update.call(null, {
        ripple: !/*textarea*/
        O[14] && /*variant*/
        O[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          O[43]
        ),
        removeClass: (
          /*removeClass*/
          O[44]
        ),
        addStyle: (
          /*addStyle*/
          O[45]
        ),
        eventTarget: (
          /*inputElement*/
          O[33]
        ),
        activeTarget: (
          /*inputElement*/
          O[33]
        ),
        initPromise: (
          /*initPromise*/
          O[37]
        )
      }), _ && pe(_.update) && U[0] & /*use*/
      256 && _.update.call(
        null,
        /*use*/
        O[8]
      );
    },
    i(O) {
      p || (y(T), y(C), y(r.$$.fragment, O), y(R, O), y(o), y(c.$$.fragment, O), y(v), p = !0);
    },
    o(O) {
      E(T), E(C), E(r.$$.fragment, O), E(R, O), E(o), E(c.$$.fragment, O), E(v), p = !1;
    },
    d(O) {
      O && P(e), T && T.d(), C && C.d(), ee(r), R && R.d(O), S[s].d(), ee(c), v && v.d(), n[78](null), A = !1, Qe(b);
    }
  };
}
function oc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[87],
    Il
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ke(
          t,
          /*$$scope*/
          r[87],
          l,
          Ju
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        Il
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function uc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[87],
    bl
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ke(
          t,
          /*$$scope*/
          r[87],
          l,
          Qu
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        bl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ol(n) {
  let e, t, i, r = (
    /*variant*/
    n[15] === "filled" && Rl()
  ), l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && kl(n);
  return {
    c() {
      r && r.c(), e = oe(), l && l.c(), t = qe();
    },
    m(a, s) {
      r && r.m(a, s), H(a, e, s), l && l.m(a, s), H(a, t, s), i = !0;
    },
    p(a, s) {
      /*variant*/
      a[15] === "filled" ? r || (r = Rl(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? l ? (l.p(a, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && y(l, 1)) : (l = kl(a), l.c(), y(l, 1), l.m(t.parentNode, t)) : l && (Ue(), E(l, 1, 1, () => {
        l = null;
      }), Ne());
    },
    i(a) {
      i || (y(l), i = !0);
    },
    o(a) {
      E(l), i = !1;
    },
    d(a) {
      a && (P(e), P(t)), r && r.d(a), l && l.d(a);
    }
  };
}
function Rl(n) {
  let e;
  return {
    c() {
      e = x("span"), F(e, "class", "mdc-text-field__ripple");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function kl(n) {
  let e, t;
  const i = [
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
    Ve(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [cc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Mi({ props: r }), n[57](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? he(i, [
        a[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            l[28] || /*value*/
            l[0] != null && /*value*/
            l[0] !== "" && (typeof /*value*/
            l[0] != "number" || !isNaN(
              /*value*/
              l[0]
            ))
          )
        },
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        a[1] & /*$$restProps*/
        32768 && Le(Ve(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[57](null), ee(e, l);
    }
  };
}
function cc(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[56].label
  ), l = Re(
    r,
    n,
    /*$$scope*/
    n[87],
    Ll
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      H(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && vt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && De(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ke(
          r,
          /*$$scope*/
          a[87],
          s,
          lc
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        Ll
      );
    },
    i(a) {
      i || (y(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && P(t), l && l.d(a);
    }
  };
}
function Dl(n) {
  let e, t;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        n[16] || /*label*/
        n[17] == null && !/*$$slots*/
        n[47].label
      )
    },
    Ve(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [dc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Ca({ props: r }), n[59](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? he(i, [
        a[0] & /*noLabel, label*/
        196608 | a[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            l[16] || /*label*/
            l[17] == null && !/*$$slots*/
            l[47].label
          )
        },
        a[1] & /*$$restProps*/
        32768 && Le(Ve(
          /*$$restProps*/
          l[46],
          "outline$"
        ))
      ]) : {};
      a[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | a[1] & /*$$restProps, $$slots*/
      98304 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[59](null), ee(e, l);
    }
  };
}
function Ml(n) {
  let e, t;
  const i = [
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
    Ve(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [fc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Mi({ props: r }), n[58](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? he(i, [
        a[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            l[28] || /*value*/
            l[0] != null && /*value*/
            l[0] !== "" && (typeof /*value*/
            l[0] != "number" || !isNaN(
              /*value*/
              l[0]
            ))
          )
        },
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        a[1] & /*$$restProps*/
        32768 && Le(Ve(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[58](null), ee(e, l);
    }
  };
}
function fc(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[56].label
  ), l = Re(
    r,
    n,
    /*$$scope*/
    n[87],
    Tl
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      H(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && vt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && De(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ke(
          r,
          /*$$scope*/
          a[87],
          s,
          rc
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        Tl
      );
    },
    i(a) {
      i || (y(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && P(t), l && l.d(a);
    }
  };
}
function dc(n) {
  let e, t, i = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Ml(n);
  return {
    c() {
      i && i.c(), e = qe();
    },
    m(r, l) {
      i && i.m(r, l), H(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && y(i, 1)) : (i = Ml(r), i.c(), y(i, 1), i.m(e.parentNode, e)) : i && (Ue(), E(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      t || (y(i), t = !0);
    },
    o(r) {
      E(i), t = !1;
    },
    d(r) {
      r && P(e), i && i.d(r);
    }
  };
}
function hc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[87],
    Sl
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ke(
          t,
          /*$$scope*/
          r[87],
          l,
          ic
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        Sl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function mc(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = Re(
    f,
    n,
    /*$$scope*/
    n[87],
    Cl
  );
  let h = (
    /*prefix*/
    n[20] != null && Fl(n)
  );
  const m = [
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
    Ve(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function _(g) {
    n[69](g);
  }
  function p(g) {
    n[70](g);
  }
  function A(g) {
    n[71](g);
  }
  function b(g) {
    n[72](g);
  }
  let T = {};
  for (let g = 0; g < m.length; g += 1)
    T = X(T, m[g]);
  /*value*/
  n[0] !== void 0 && (T.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (T.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (T.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (T.invalid = /*invalid*/
  n[1]), i = new Ku({ props: T }), n[68](i), se.push(() => pt(i, "value", _)), se.push(() => pt(i, "files", p)), se.push(() => pt(i, "dirty", A)), se.push(() => pt(i, "invalid", b)), i.$on(
    "blur",
    /*blur_handler_2*/
    n[73]
  ), i.$on(
    "focus",
    /*focus_handler_2*/
    n[74]
  ), i.$on(
    "blur",
    /*blur_handler_3*/
    n[75]
  ), i.$on(
    "focus",
    /*focus_handler_3*/
    n[76]
  );
  let C = (
    /*suffix*/
    n[21] != null && Ul(n)
  );
  const k = (
    /*#slots*/
    n[56].suffix
  ), R = Re(
    k,
    n,
    /*$$scope*/
    n[87],
    yl
  );
  return {
    c() {
      d && d.c(), e = oe(), h && h.c(), t = oe(), te(i.$$.fragment), o = oe(), C && C.c(), u = oe(), R && R.c();
    },
    m(g, S) {
      d && d.m(g, S), H(g, e, S), h && h.m(g, S), H(g, t, S), $(i, g, S), H(g, o, S), C && C.m(g, S), H(g, u, S), R && R.m(g, S), c = !0;
    },
    p(g, S) {
      d && d.p && (!c || S[2] & /*$$scope*/
      33554432) && De(
        d,
        f,
        g,
        /*$$scope*/
        g[87],
        c ? ke(
          f,
          /*$$scope*/
          g[87],
          S,
          tc
        ) : Me(
          /*$$scope*/
          g[87]
        ),
        Cl
      ), /*prefix*/
      g[20] != null ? h ? (h.p(g, S), S[0] & /*prefix*/
      1048576 && y(h, 1)) : (h = Fl(g), h.c(), y(h, 1), h.m(t.parentNode, t)) : h && (Ue(), E(h, 1, 1, () => {
        h = null;
      }), Ne());
      const B = S[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | S[1] & /*$$restProps*/
      32768 ? he(m, [
        S[0] & /*type*/
        262144 && { type: (
          /*type*/
          g[18]
        ) },
        S[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          g[12]
        ) },
        S[0] & /*required*/
        8192 && { required: (
          /*required*/
          g[13]
        ) },
        S[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          g[19]
        ) },
        S[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          g[27]
        ) },
        S[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          g[27]
        ) },
        S[0] & /*noLabel, label*/
        196608 && Le(
          /*noLabel*/
          g[16] && /*label*/
          g[17] != null ? { placeholder: (
            /*label*/
            g[17]
          ) } : {}
        ),
        S[1] & /*$$restProps*/
        32768 && Le(Ve(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !r && S[0] & /*value*/
      1 && (r = !0, B.value = /*value*/
      g[0], mt(() => r = !1)), !l && S[0] & /*files*/
      8 && (l = !0, B.files = /*files*/
      g[3], mt(() => l = !1)), !a && S[0] & /*dirty*/
      16 && (a = !0, B.dirty = /*dirty*/
      g[4], mt(() => a = !1)), !s && S[0] & /*invalid*/
      2 && (s = !0, B.invalid = /*invalid*/
      g[1], mt(() => s = !1)), i.$set(B), /*suffix*/
      g[21] != null ? C ? (C.p(g, S), S[0] & /*suffix*/
      2097152 && y(C, 1)) : (C = Ul(g), C.c(), y(C, 1), C.m(u.parentNode, u)) : C && (Ue(), E(C, 1, 1, () => {
        C = null;
      }), Ne()), R && R.p && (!c || S[2] & /*$$scope*/
      33554432) && De(
        R,
        k,
        g,
        /*$$scope*/
        g[87],
        c ? ke(
          k,
          /*$$scope*/
          g[87],
          S,
          ec
        ) : Me(
          /*$$scope*/
          g[87]
        ),
        yl
      );
    },
    i(g) {
      c || (y(d, g), y(h), y(i.$$.fragment, g), y(C), y(R, g), c = !0);
    },
    o(g) {
      E(d, g), E(h), E(i.$$.fragment, g), E(C), E(R, g), c = !1;
    },
    d(g) {
      g && (P(e), P(t), P(o), P(u)), d && d.d(g), h && h.d(g), n[68](null), ee(i, g), C && C.d(g), R && R.d(g);
    }
  };
}
function pc(n) {
  let e, t, i, r, l, a, s, o;
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
    Ve(
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
  let h = {};
  for (let p = 0; p < u.length; p += 1)
    h = X(h, u[p]);
  /*value*/
  n[0] !== void 0 && (h.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (h.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (h.invalid = /*invalid*/
  n[1]), t = new Xu({ props: h }), n[60](t), se.push(() => pt(t, "value", c)), se.push(() => pt(t, "dirty", f)), se.push(() => pt(t, "invalid", d)), t.$on(
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
  const m = (
    /*#slots*/
    n[56].internalCounter
  ), _ = Re(
    m,
    n,
    /*$$scope*/
    n[87],
    El
  );
  return {
    c() {
      e = x("span"), te(t.$$.fragment), a = oe(), _ && _.c(), F(e, "class", s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(p, A) {
      H(p, e, A), $(t, e, null), Q(e, a), _ && _.m(e, null), o = !0;
    },
    p(p, A) {
      const b = A[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | A[1] & /*$$restProps*/
      32768 ? he(u, [
        A[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        A[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        A[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        A[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        A[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        A[1] & /*$$restProps*/
        32768 && Le(Ve(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && A[0] & /*value*/
      1 && (i = !0, b.value = /*value*/
      p[0], mt(() => i = !1)), !r && A[0] & /*dirty*/
      16 && (r = !0, b.dirty = /*dirty*/
      p[4], mt(() => r = !1)), !l && A[0] & /*invalid*/
      2 && (l = !0, b.invalid = /*invalid*/
      p[1], mt(() => l = !1)), t.$set(b), _ && _.p && (!o || A[2] & /*$$scope*/
      33554432) && De(
        _,
        m,
        p,
        /*$$scope*/
        p[87],
        o ? ke(
          m,
          /*$$scope*/
          p[87],
          A,
          nc
        ) : Me(
          /*$$scope*/
          p[87]
        ),
        El
      ), (!o || A[1] & /*$$restProps*/
      32768 && s !== (s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && F(e, "class", s);
    },
    i(p) {
      o || (y(t.$$.fragment, p), y(_, p), o = !0);
    },
    o(p) {
      E(t.$$.fragment, p), E(_, p), o = !1;
    },
    d(p) {
      p && P(e), n[60](null), ee(t), _ && _.d(p);
    }
  };
}
function Fl(n) {
  let e, t;
  return e = new Bu({
    props: {
      $$slots: { default: [gc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function gc(n) {
  let e;
  return {
    c() {
      e = ut(
        /*prefix*/
        n[20]
      );
    },
    m(t, i) {
      H(t, e, i);
    },
    p(t, i) {
      i[0] & /*prefix*/
      1048576 && vt(
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
function Ul(n) {
  let e, t;
  return e = new Vu({
    props: {
      $$slots: { default: [_c] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function _c(n) {
  let e;
  return {
    c() {
      e = ut(
        /*suffix*/
        n[21]
      );
    },
    m(t, i) {
      H(t, e, i);
    },
    p(t, i) {
      i[0] & /*suffix*/
      2097152 && vt(
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
function bc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[87],
    Al
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ke(
          t,
          /*$$scope*/
          r[87],
          l,
          $u
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        Al
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Nl(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new ya({ props: r }), n[77](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? he(i, [Le(Ve(
        /*$$restProps*/
        l[46],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[77](null), ee(e, l);
    }
  };
}
function wl(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [Ic] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Hu({ props: r }), e.$on(
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
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? he(i, [Le(Ve(
        /*$$restProps*/
        l[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function Ic(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[87],
    gl
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ke(
          t,
          /*$$scope*/
          r[87],
          l,
          Yu
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        gl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vc(n) {
  let e, t, i, r, l;
  const a = [ac, sc], s = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = s[e] = a[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && wl(n)
  );
  return {
    c() {
      t.c(), i = oe(), u && u.c(), r = qe();
    },
    m(c, f) {
      s[e].m(c, f), H(c, i, f), u && u.m(c, f), H(c, r, f), l = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && y(u, 1)) : (u = wl(c), u.c(), y(u, 1), u.m(r.parentNode, r)) : u && (Ue(), E(u, 1, 1, () => {
        u = null;
      }), Ne());
    },
    i(c) {
      l || (y(t), y(u), l = !0);
    },
    o(c) {
      E(t), E(u), l = !1;
    },
    d(c) {
      c && (P(i), P(r)), s[e].d(c), u && u.d(c);
    }
  };
}
const Pl = ([n, e]) => `${n}: ${e};`, Hl = ([n, e]) => `${n}: ${e};`;
function Ac(n, e, t) {
  let i;
  const r = [
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
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = Fr(a), { applyPassive: u } = Aa, c = nt(et());
  let f = () => {
  };
  function d(N) {
    return N === f;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: _ = "" } = e, { ripple: p = !0 } = e, { disabled: A = !1 } = e, { required: b = !1 } = e, { textarea: T = !1 } = e, { variant: C = T ? "outlined" : "standard" } = e, { noLabel: k = !1 } = e, { label: R = void 0 } = e, { type: g = "text" } = e, { value: S = l.input$emptyValueUndefined ? void 0 : f } = e, { files: B = f } = e;
  const v = !d(S) || !d(B);
  d(S) && (S = void 0), d(B) && (B = null);
  let { invalid: I = f } = e, { updateInvalid: D = d(I) } = e;
  d(I) && (I = !1);
  let { dirty: O = !1 } = e, { prefix: U = void 0 } = e, { suffix: W = void 0 } = e, { validateOnValueChange: q = D } = e, { useNativeValidation: z = D } = e, { withLeadingIcon: M = f } = e, { withTrailingIcon: L = f } = e, { input: V = void 0 } = e, { floatingLabel: ue = void 0 } = e, { lineRipple: Fe = void 0 } = e, { notchedOutline: Ie = void 0 } = e, Ye, K, J = {}, Ce = {}, Ee, we = !1, ie = ze("SMUI:addLayoutListener"), G, Ge, Be = new Promise((N) => Ge = N), At, Z, Se, je, Pe = S;
  ie && (G = ie(Y)), st(() => {
    if (t(54, K = new Cu(
      {
        // getRootAdapterMethods_
        addClass: ot,
        removeClass: xe,
        hasClass: ct,
        registerTextFieldInteractionHandler: (N, dt) => _e().addEventListener(N, dt),
        deregisterTextFieldInteractionHandler: (N, dt) => _e().removeEventListener(N, dt),
        registerValidationAttributeChangeHandler: (N) => {
          const dt = ($n) => $n.map((ei) => ei.attributeName).filter((ei) => ei), _i = new MutationObserver(($n) => {
            z && N(dt($n));
          }), lr = { attributes: !0 };
          return V && _i.observe(V.getElement(), lr), _i;
        },
        deregisterValidationAttributeChangeHandler: (N) => {
          N.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var N;
          return (N = V == null ? void 0 : V.getElement()) !== null && N !== void 0 ? N : null;
        },
        setInputAttr: (N, dt) => {
          V == null || V.addAttr(N, dt);
        },
        removeInputAttr: (N) => {
          V == null || V.removeAttr(N);
        },
        isFocused: () => document.activeElement === (V == null ? void 0 : V.getElement()),
        registerInputInteractionHandler: (N, dt) => {
          V == null || V.getElement().addEventListener(N, dt, u());
        },
        deregisterInputInteractionHandler: (N, dt) => {
          V == null || V.getElement().removeEventListener(N, dt, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (N) => ue && ue.float(N),
        getLabelWidth: () => ue ? ue.getWidth() : 0,
        hasLabel: () => !!ue,
        shakeLabel: (N) => ue && ue.shake(N),
        setLabelRequired: (N) => ue && ue.setRequired(N),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Fe && Fe.activate(),
        deactivateLineRipple: () => Fe && Fe.deactivate(),
        setLineRippleTransformOrigin: (N) => Fe && Fe.setRippleCenter(N),
        // getOutlineAdapterMethods_
        closeOutline: () => Ie && Ie.closeNotch(),
        hasOutline: () => !!Ie,
        notchOutline: (N) => Ie && Ie.notch(N)
      },
      {
        get helperText() {
          return Se;
        },
        get characterCounter() {
          return je;
        },
        get leadingIcon() {
          return At;
        },
        get trailingIcon() {
          return Z;
        }
      }
    )), v) {
      if (V == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      K.init();
    } else
      Nr().then(() => {
        if (V == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        K.init();
      });
    return Ge(), () => {
      K.destroy();
    };
  }), xt(() => {
    G && G();
  });
  function St(N) {
    t(29, At = N.detail);
  }
  function j(N) {
    t(30, Z = N.detail);
  }
  function le(N) {
    t(32, je = N.detail);
  }
  function ne(N) {
    t(27, Ee = N.detail);
  }
  function Xe(N) {
    t(31, Se = N.detail);
  }
  function ct(N) {
    var dt;
    return N in J ? (dt = J[N]) !== null && dt !== void 0 ? dt : null : _e().classList.contains(N);
  }
  function ot(N) {
    J[N] || t(25, J[N] = !0, J);
  }
  function xe(N) {
    (!(N in J) || J[N]) && t(25, J[N] = !1, J);
  }
  function Te(N, dt) {
    Ce[N] != dt && (dt === "" || dt == null ? (delete Ce[N], t(26, Ce)) : t(26, Ce[N] = dt, Ce));
  }
  function ae() {
    V == null || V.focus();
  }
  function qt() {
    V == null || V.blur();
  }
  function Y() {
    if (K) {
      const N = K.shouldFloat;
      K.notchOutline(N);
    }
  }
  function _e() {
    return Ye;
  }
  function ve(N) {
    se[N ? "unshift" : "push"](() => {
      ue = N, t(5, ue);
    });
  }
  function it(N) {
    se[N ? "unshift" : "push"](() => {
      ue = N, t(5, ue);
    });
  }
  function $t(N) {
    se[N ? "unshift" : "push"](() => {
      Ie = N, t(7, Ie);
    });
  }
  function xn(N) {
    se[N ? "unshift" : "push"](() => {
      V = N, t(2, V);
    });
  }
  function Pi(N) {
    S = N, t(0, S);
  }
  function Hi(N) {
    O = N, t(4, O);
  }
  function Bi(N) {
    I = N, t(1, I), t(54, K), t(19, D);
  }
  const Vi = () => t(28, we = !1), ji = () => t(28, we = !0), Rn = (N) => be(Ye, "blur", N), qi = (N) => be(Ye, "focus", N);
  function pi(N) {
    se[N ? "unshift" : "push"](() => {
      V = N, t(2, V);
    });
  }
  function Gi(N) {
    S = N, t(0, S);
  }
  function gi(N) {
    B = N, t(3, B);
  }
  function kn(N) {
    O = N, t(4, O);
  }
  function Ki(N) {
    I = N, t(1, I), t(54, K), t(19, D);
  }
  const zi = () => t(28, we = !1), Wi = () => t(28, we = !0), Xi = (N) => be(Ye, "blur", N), Yi = (N) => be(Ye, "focus", N);
  function Zi(N) {
    se[N ? "unshift" : "push"](() => {
      Fe = N, t(6, Fe);
    });
  }
  function Qi(N) {
    se[N ? "unshift" : "push"](() => {
      Ye = N, t(24, Ye);
    });
  }
  const Ji = () => t(29, At = void 0), xi = () => t(30, Z = void 0), $i = () => t(32, je = void 0);
  function er(N) {
    se[N ? "unshift" : "push"](() => {
      Ye = N, t(24, Ye);
    });
  }
  const tr = () => t(29, At = void 0), nr = () => t(30, Z = void 0), ir = () => {
    t(27, Ee = void 0), t(31, Se = void 0);
  }, rr = () => t(32, je = void 0);
  return n.$$set = (N) => {
    e = X(X({}, e), tt(N)), t(46, l = me(e, r)), "use" in N && t(8, h = N.use), "class" in N && t(9, m = N.class), "style" in N && t(10, _ = N.style), "ripple" in N && t(11, p = N.ripple), "disabled" in N && t(12, A = N.disabled), "required" in N && t(13, b = N.required), "textarea" in N && t(14, T = N.textarea), "variant" in N && t(15, C = N.variant), "noLabel" in N && t(16, k = N.noLabel), "label" in N && t(17, R = N.label), "type" in N && t(18, g = N.type), "value" in N && t(0, S = N.value), "files" in N && t(3, B = N.files), "invalid" in N && t(1, I = N.invalid), "updateInvalid" in N && t(19, D = N.updateInvalid), "dirty" in N && t(4, O = N.dirty), "prefix" in N && t(20, U = N.prefix), "suffix" in N && t(21, W = N.suffix), "validateOnValueChange" in N && t(48, q = N.validateOnValueChange), "useNativeValidation" in N && t(49, z = N.useNativeValidation), "withLeadingIcon" in N && t(22, M = N.withLeadingIcon), "withTrailingIcon" in N && t(23, L = N.withTrailingIcon), "input" in N && t(2, V = N.input), "floatingLabel" in N && t(5, ue = N.floatingLabel), "lineRipple" in N && t(6, Fe = N.lineRipple), "notchedOutline" in N && t(7, Ie = N.notchedOutline), "$$scope" in N && t(87, s = N.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, i = V && V.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.isValid() !== !I && (D ? t(1, I = !K.isValid()) : K.setValid(!I)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && K && K.getValidateOnValueChange() !== q && K.setValidateOnValueChange(d(q) ? !1 : q), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && K && K.setUseNativeValidation(d(z) ? !0 : z), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.setDisabled(A), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && K && v && Pe !== S) {
      t(55, Pe = S);
      const N = `${S}`;
      K.getValue() !== N && K.setValue(N);
    }
  }, [
    S,
    I,
    V,
    B,
    O,
    ue,
    Fe,
    Ie,
    h,
    m,
    _,
    p,
    A,
    b,
    T,
    C,
    k,
    R,
    g,
    D,
    U,
    W,
    M,
    L,
    Ye,
    J,
    Ce,
    Ee,
    we,
    At,
    Z,
    Se,
    je,
    i,
    c,
    d,
    v,
    Be,
    St,
    j,
    le,
    ne,
    Xe,
    ot,
    xe,
    Te,
    l,
    o,
    q,
    z,
    ae,
    qt,
    Y,
    _e,
    K,
    Pe,
    a,
    ve,
    it,
    $t,
    xn,
    Pi,
    Hi,
    Bi,
    Vi,
    ji,
    Rn,
    qi,
    pi,
    Gi,
    gi,
    kn,
    Ki,
    zi,
    Wi,
    Xi,
    Yi,
    Zi,
    Qi,
    Ji,
    xi,
    $i,
    er,
    tr,
    nr,
    ir,
    rr,
    s
  ];
}
class Ea extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      Ac,
      vc,
      ge,
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
function yc(n) {
  let e;
  return {
    c() {
      e = ut(
        /*content*/
        n[7]
      );
    },
    m(t, i) {
      H(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      128 && vt(
        e,
        /*content*/
        t[7]
      );
    },
    i: Ze,
    o: Ze,
    d(t) {
      t && P(e);
    }
  };
}
function Cc(n) {
  let e;
  const t = (
    /*#slots*/
    n[15].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      16384) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[14],
        e ? ke(
          t,
          /*$$scope*/
          r[14],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ec(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const f = [Cc, yc], d = [];
  function h(p, A) {
    return (
      /*content*/
      p[7] == null ? 0 : 1
    );
  }
  t = h(n), i = d[t] = f[t](n);
  let m = [
    {
      class: r = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": (
          /*leading*/
          n[11]
        ),
        "mdc-text-field__icon--trailing": !/*leading*/
        n[11]
      })
    },
    {
      "aria-hidden": l = /*tabindex*/
      n[3] === -1 ? "true" : "false"
    },
    {
      "aria-disabled": a = /*role*/
      n[2] === "button" ? (
        /*disabled*/
        n[4] ? "true" : "false"
      ) : void 0
    },
    /*roleProps*/
    n[8],
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[12]
  ], _ = {};
  for (let p = 0; p < m.length; p += 1)
    _ = X(_, m[p]);
  return {
    c() {
      e = x("i"), i.c(), ce(e, _);
    },
    m(p, A) {
      H(p, e, A), d[t].m(e, null), n[16](e), o = !0, u || (c = [
        de(s = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], u = !0);
    },
    p(p, [A]) {
      let b = t;
      t = h(p), t === b ? d[t].p(p, A) : (Ue(), E(d[b], 1, 1, () => {
        d[b] = null;
      }), Ne(), i = d[t], i ? i.p(p, A) : (i = d[t] = f[t](p), i.c()), y(i, 1), i.m(e, null)), ce(e, _ = he(m, [
        (!o || A & /*className*/
        2 && r !== (r = re({
          [
            /*className*/
            p[1]
          ]: !0,
          "mdc-text-field__icon": !0,
          "mdc-text-field__icon--leading": (
            /*leading*/
            p[11]
          ),
          "mdc-text-field__icon--trailing": !/*leading*/
          p[11]
        }))) && { class: r },
        (!o || A & /*tabindex*/
        8 && l !== (l = /*tabindex*/
        p[3] === -1 ? "true" : "false")) && { "aria-hidden": l },
        (!o || A & /*role, disabled*/
        20 && a !== (a = /*role*/
        p[2] === "button" ? (
          /*disabled*/
          p[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": a },
        A & /*roleProps*/
        256 && /*roleProps*/
        p[8],
        A & /*internalAttrs*/
        64 && /*internalAttrs*/
        p[6],
        A & /*$$restProps*/
        4096 && /*$$restProps*/
        p[12]
      ])), s && pe(s.update) && A & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (y(i), o = !0);
    },
    o(p) {
      E(i), o = !1;
    },
    d(p) {
      p && P(e), d[t].d(), n[16](null), u = !1, Qe(c);
    }
  };
}
function Sc(n, e, t) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let l = me(e, r), a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(et());
  let { use: c = [] } = e, { class: f = "" } = e, { role: d = void 0 } = e, { tabindex: h = d === "button" ? 0 : -1 } = e, { disabled: m = !1 } = e, _, p, A = {};
  const b = ze("SMUI:textfield:icon:leading");
  rt(n, b, (v) => t(18, a = v));
  const T = a;
  let C;
  st(() => (p = new Su({
    getAttr: k,
    setAttr: R,
    removeAttr: g,
    setContent: (v) => {
      t(7, C = v);
    },
    registerInteractionHandler: (v, I) => S().addEventListener(v, I),
    deregisterInteractionHandler: (v, I) => S().removeEventListener(v, I),
    notifyIconAction: () => be(S(), "SMUITextField:icon", void 0, void 0, !0)
  }), be(
    S(),
    T ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    p
  ), p.init(), () => {
    be(
      S(),
      T ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      p
    ), p.destroy();
  }));
  function k(v) {
    var I;
    return v in A ? (I = A[v]) !== null && I !== void 0 ? I : null : S().getAttribute(v);
  }
  function R(v, I) {
    A[v] !== I && t(6, A[v] = I, A);
  }
  function g(v) {
    (!(v in A) || A[v] != null) && t(6, A[v] = void 0, A);
  }
  function S() {
    return _;
  }
  function B(v) {
    se[v ? "unshift" : "push"](() => {
      _ = v, t(5, _);
    });
  }
  return n.$$set = (v) => {
    e = X(X({}, e), tt(v)), t(12, l = me(e, r)), "use" in v && t(0, c = v.use), "class" in v && t(1, f = v.class), "role" in v && t(2, d = v.role), "tabindex" in v && t(3, h = v.tabindex), "disabled" in v && t(4, m = v.disabled), "$$scope" in v && t(14, o = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*role, tabindex*/
    12 && t(8, i = { role: d, tabindex: h });
  }, [
    c,
    f,
    d,
    h,
    m,
    _,
    A,
    C,
    i,
    u,
    b,
    T,
    l,
    S,
    o,
    s,
    B
  ];
}
class Tc extends ye {
  constructor(e) {
    super(), Ae(this, e, Sc, Ec, ge, {
      use: 0,
      class: 1,
      role: 2,
      tabindex: 3,
      disabled: 4,
      getElement: 13
    });
  }
  get getElement() {
    return this.$$.ctx[13];
  }
}
function Lc(n) {
  let e, t, i;
  function r(a) {
    n[6](a);
  }
  let l = {
    label: (
      /*label*/
      n[2]
    ),
    placeholder: (
      /*placeholder*/
      n[1]
    ),
    style: "width: 100%",
    variant: (
      /*variant*/
      n[4]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Ea({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        s & /*label*/
        4 && (o.label = /*label*/
        a[2]), s & /*placeholder*/
        2 && (o.placeholder = /*placeholder*/
        a[1]), s & /*variant*/
        16 && (o.variant = /*variant*/
        a[4]), !t && s & /*value*/
        1 && (t = !0, o.value = /*value*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        E(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Oc(n) {
  let e, t, i;
  function r(a) {
    n[5](a);
  }
  let l = {
    label: (
      /*label*/
      n[2]
    ),
    placeholder: (
      /*placeholder*/
      n[1]
    ),
    style: "width: 100%",
    variant: (
      /*variant*/
      n[4]
    ),
    $$slots: { leadingIcon: [kc] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Ea({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        s & /*label*/
        4 && (o.label = /*label*/
        a[2]), s & /*placeholder*/
        2 && (o.placeholder = /*placeholder*/
        a[1]), s & /*variant*/
        16 && (o.variant = /*variant*/
        a[4]), s & /*$$scope, icon*/
        136 && (o.$$scope = { dirty: s, ctx: a }), !t && s & /*value*/
        1 && (t = !0, o.value = /*value*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        E(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Rc(n) {
  let e;
  return {
    c() {
      e = ut(
        /*icon*/
        n[3]
      );
    },
    m(t, i) {
      H(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      8 && vt(
        e,
        /*icon*/
        t[3]
      );
    },
    d(t) {
      t && P(e);
    }
  };
}
function kc(n) {
  let e, t;
  return e = new Tc({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [Rc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, icon*/
      136 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Dc(n) {
  let e, t, i, r;
  const l = [Oc, Lc], a = [];
  function s(o, u) {
    return (
      /*icon*/
      o[3] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ue(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), Ne(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), y(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
function Mc(n, e, t) {
  let { placeholder: i = "" } = e, { label: r = "" } = e, { icon: l = "" } = e, { value: a = "" } = e, { variant: s = "standard" } = e;
  function o(c) {
    a = c, t(0, a);
  }
  function u(c) {
    a = c, t(0, a);
  }
  return n.$$set = (c) => {
    "placeholder" in c && t(1, i = c.placeholder), "label" in c && t(2, r = c.label), "icon" in c && t(3, l = c.icon), "value" in c && t(0, a = c.value), "variant" in c && t(4, s = c.variant);
  }, [
    a,
    i,
    r,
    l,
    s,
    o,
    u
  ];
}
class Fc extends ye {
  constructor(e) {
    super(), Ae(this, e, Mc, Dc, ge, {
      placeholder: 1,
      label: 2,
      icon: 3,
      value: 0,
      variant: 4
    });
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
var Uc = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Nc = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, ni = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, It;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(It || (It = {}));
var Sn;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Sn || (Sn = {}));
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
var un, tn, Je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
un = {}, un["" + Je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", un["" + Je.LIST_ITEM_CLASS] = "mdc-list-item", un["" + Je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", un["" + Je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", un["" + Je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", un["" + Je.ROOT] = "mdc-list";
var Fn = (tn = {}, tn["" + Je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", tn["" + Je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", tn["" + Je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", tn["" + Je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", tn["" + Je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", tn["" + Je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", tn["" + Je.ROOT] = "mdc-deprecated-list", tn), cn = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + Je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Je.LIST_ITEM_CLASS + ` a,
    .` + Fn[Je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Fn[Je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Je.LIST_ITEM_CLASS + ` a,
    .` + Je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Fn[Je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Fn[Je.LIST_ITEM_CLASS] + ` a,
    .` + Fn[Je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Fn[Je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, _t = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
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
var wc = ["input", "button", "textarea", "select"], Kt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    wc.indexOf(t) === -1 && n.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
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
function Pc() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Hc(n, e) {
  for (var t = /* @__PURE__ */ new Map(), i = 0; i < n; i++) {
    var r = e(i).trim();
    if (r) {
      var l = r[0].toLowerCase();
      t.has(l) || t.set(l, []), t.get(l).push({ text: r.toLowerCase(), index: i });
    }
  }
  return t.forEach(function(a) {
    a.sort(function(s, o) {
      return s.index - o.index;
    });
  }), t;
}
function Sr(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, l = n.focusedItemIndex, a = n.skipFocus, s = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Ta(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Bc(r, l, s, e) : o = Vc(r, s, e), o !== -1 && !a && i(o), o;
}
function Bc(n, e, t, i) {
  var r = i.typeaheadBuffer[0], l = n.get(r);
  if (!l)
    return -1;
  if (r === i.currentFirstChar && l[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % l.length;
    var a = l[i.sortedIndexCursor].index;
    if (!t(a))
      return a;
  }
  i.currentFirstChar = r;
  var s = -1, o;
  for (o = 0; o < l.length; o++)
    if (!t(l[o].index)) {
      s = o;
      break;
    }
  for (; o < l.length; o++)
    if (l[o].index > e && !t(l[o].index)) {
      s = o;
      break;
    }
  return s !== -1 ? (i.sortedIndexCursor = s, l[i.sortedIndexCursor].index) : -1;
}
function Vc(n, e, t) {
  var i = t.typeaheadBuffer[0], r = n.get(i);
  if (!r)
    return -1;
  var l = r[t.sortedIndexCursor];
  if (l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(l.index))
    return l.index;
  for (var a = (t.sortedIndexCursor + 1) % r.length, s = -1; a !== t.sortedIndexCursor; ) {
    var o = r[a], u = o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (u && c) {
      s = a;
      break;
    }
    a = (a + 1) % r.length;
  }
  return s !== -1 ? (t.sortedIndexCursor = s, r[t.sortedIndexCursor].index) : -1;
}
function Sa(n) {
  return n.typeaheadBuffer.length > 0;
}
function Ta(n) {
  n.typeaheadBuffer = "";
}
function Bl(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, l = n.focusItemAtIndex, a = n.sortedIndexByFirstChar, s = n.isItemAtIndexDisabled, o = ht(t) === "ArrowLeft", u = ht(t) === "ArrowUp", c = ht(t) === "ArrowRight", f = ht(t) === "ArrowDown", d = ht(t) === "Home", h = ht(t) === "End", m = ht(t) === "Enter", _ = ht(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || f || d || h || m)
    return -1;
  var p = !_ && t.key.length === 1;
  if (p) {
    Kt(t);
    var A = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return Sr(A, e);
  }
  if (!_)
    return -1;
  i && Kt(t);
  var b = i && Sa(e);
  if (b) {
    var A = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return Sr(A, e);
  }
  return -1;
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
function jc(n) {
  return n instanceof Array;
}
var qc = ["Alt", "Control", "Meta", "Shift"];
function Vl(n) {
  var e = new Set(n ? qc.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var Gc = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = _t.UNSET_INDEX, i.focusedItemIndex = _t.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Pc(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(t) {
      this.wrapFocus = t;
    }, e.prototype.setVerticalOrientation = function(t) {
      this.isVertical = t;
    }, e.prototype.setSingleSelection = function(t) {
      this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(t) {
      this.areDisabledItemsFocusable = t;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var t = this.getSelectedIndexFromDOM();
      if (t !== _t.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, Je.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = _t.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var l = this.adapter.listItemAtIndexHasClass(r, Je.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, Je.LIST_ITEM_ACTIVATED_CLASS);
        if (l || a) {
          t = r;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Sa(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, i) {
      i === void 0 && (i = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, i) : this.isRadioList ? this.setRadioAtIndex(t, i) : this.setSingleSelectionAtIndex(t, i));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var i = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, Je.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var l = this, a, s = ht(t) === "ArrowLeft", o = ht(t) === "ArrowUp", u = ht(t) === "ArrowRight", c = ht(t) === "ArrowDown", f = ht(t) === "Home", d = ht(t) === "End", h = ht(t) === "Enter", m = ht(t) === "Spacebar", _ = this.isVertical && c || !this.isVertical && u, p = this.isVertical && o || !this.isVertical && s, A = t.key === "A" || t.key === "a", b = Vl(t);
      if (this.adapter.isRootFocused()) {
        if ((p || d) && b([]))
          t.preventDefault(), this.focusLastElement();
        else if ((_ || f) && b([]))
          t.preventDefault(), this.focusFirstElement();
        else if (p && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var T = this.focusLastElement();
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (_ && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var T = this.focusFirstElement();
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(g) {
              l.focusItemAtIndex(g);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(g) {
              return l.isIndexDisabled(g);
            }
          };
          Bl(C, this.typeaheadState);
        }
        return;
      }
      var k = this.adapter.getFocusedElementIndex();
      if (!(k === -1 && (k = r, k < 0))) {
        if (_ && b([]))
          Kt(t), this.focusNextElement(k);
        else if (p && b([]))
          Kt(t), this.focusPrevElement(k);
        else if (_ && b(["Shift"]) && this.isCheckboxList) {
          Kt(t);
          var T = this.focusNextElement(k);
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (p && b(["Shift"]) && this.isCheckboxList) {
          Kt(t);
          var T = this.focusPrevElement(k);
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (f && b([]))
          Kt(t), this.focusFirstElement();
        else if (d && b([]))
          Kt(t), this.focusLastElement();
        else if (f && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Kt(t), this.isIndexDisabled(k))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, k, k);
        } else if (d && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Kt(t), this.isIndexDisabled(k))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(k, this.adapter.getListItemCount() - 1, k);
        } else if (A && b(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || m) && b([])) {
          if (i) {
            var R = t.target;
            if (R && R.tagName === "A" && h || (Kt(t), this.isIndexDisabled(k)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(k, !1), this.adapter.notifyAction(k));
          }
        } else if ((h || m) && b(["Shift"]) && this.isCheckboxList) {
          var R = t.target;
          if (R && R.tagName === "A" && h || (Kt(t), this.isIndexDisabled(k)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : k, k, k), this.adapter.notifyAction(k));
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(S) {
              l.focusItemAtIndex(S);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(S) {
              return l.isIndexDisabled(S);
            }
          };
          Bl(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var l, a = Vl(r);
      t !== _t.UNSET_INDEX && (this.isIndexDisabled(t) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, l = null;
      do {
        if (r++, r >= i)
          if (this.wrapFocus)
            r = 0;
          else
            return t;
        if (r === l)
          return -1;
        l = l ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusPrevElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, l = null;
      do {
        if (r--, r < 0)
          if (this.wrapFocus)
            r = i - 1;
          else
            return t;
        if (r === l)
          return -1;
        l = l ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, i) {
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, cn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, cn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = Je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, cn.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? cn.ARIA_CURRENT : cn.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== _t.UNSET_INDEX) {
        var l = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, l);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? cn.ARIA_SELECTED : cn.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, l = i.isUserInteraction ? new Set(r === _t.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), s = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = l == null ? void 0 : l.has(o), c = t.indexOf(o) >= 0;
        c !== u && s.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, a, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && s.length && this.adapter.notifySelectionChange(s);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var l = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), a = !(l != null && l.has(r)), s = mn([t, i].sort(), 2), o = s[0], u = s[1], c = this.getSelectionAttribute(), f = [], d = o; d <= u; d++)
        if (!this.isIndexDisabled(d)) {
          var h = l.has(d);
          a !== h && (f.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, a), this.adapter.setAttributeForElementIndex(d, c, "" + a), a ? l.add(d) : l.delete(d));
        }
      f.length && (this.selectedIndex = Tn([], mn(l)), this.adapter.notifySelectionChange(f));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === _t.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : jc(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
        return Math.min(t, i);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, i) {
      var r = this;
      if (i === void 0 && (i = !0), t instanceof Array) {
        if (!this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(l) {
          return r.isIndexInRange(l);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === _t.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var i = this.adapter.getListItemCount();
      return t >= 0 && t < i;
    }, e.prototype.setSelectedIndexOnAction = function(t, i) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, i), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, i) {
      var r = this.getSelectionAttribute(), l = this.adapter.isCheckboxCheckedAtIndex(t), a;
      i ? a = l : (a = !l, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, a)), this.adapter.setAttributeForElementIndex(t, r, a ? "true" : "false");
      var s = this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex.slice();
      a ? s.push(t) : s = s.filter(function(o) {
        return o !== t;
      }), this.selectedIndex = s;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, i) {
      var r = this.adapter.getListItemCount();
      if (t.length === r)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var l = [], a = 0; a < r; a++)
          (!this.isIndexDisabled(a) || t.indexOf(a) > -1) && l.push(a);
        this.setCheckboxAtIndex(l, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(t, i, r) {
      var l = this;
      r === void 0 && (r = !1);
      var a = {
        focusItemAtIndex: function(s) {
          l.focusItemAtIndex(s);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: r,
        isItemAtIndexDisabled: function(s) {
          return l.isIndexDisabled(s);
        }
      };
      return Sr(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Hc(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Ta(this.typeaheadState);
    }, e;
  }(Et)
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
var La = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Sn.TOP_START, i.originCorner = Sn.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Uc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Sn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
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
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = e.cssClasses, i = t.ROOT, r = t.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ It.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(t, i) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(i) ? i : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.setOpenBottomBias = function(t) {
      this.openBottomBias = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, ni.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var i = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, ni.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var i = t.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.keyCode, r = t.key, l = r === "Escape" || i === 27;
      l && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), l = this.hasBit(i, It.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, It.RIGHT) ? "right" : "left", s = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, f = u.surfaceSize, d = (t = {}, t[a] = s, t[l] = o, t);
      c.width / f.width > ni.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(a + " " + l), this.adapter.setPosition(d), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, It.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), l = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: r.width - t.right,
          bottom: r.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: l
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, l = i.anchorSize, a = i.surfaceSize, s = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, It.BOTTOM), u, c;
      o ? (u = r.top - s + this.anchorMargin.bottom, c = r.bottom - s - this.anchorMargin.bottom) : (u = r.top - s + this.anchorMargin.top, c = r.bottom - s + l.height - this.anchorMargin.top);
      var f = c - a.height > 0;
      !f && u > c + this.openBottomBias && (t = this.setBit(t, It.BOTTOM));
      var d = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, It.FLIP_RTL), m = this.hasBit(this.anchorCorner, It.RIGHT) || this.hasBit(t, It.RIGHT), _ = !1;
      d && h ? _ = !m : _ = m;
      var p, A;
      _ ? (p = r.left + l.width + this.anchorMargin.right, A = r.right - this.anchorMargin.right) : (p = r.left + this.anchorMargin.left, A = r.right + l.width - this.anchorMargin.left);
      var b = p - a.width > 0, T = A - a.width > 0, C = this.hasBit(t, It.FLIP_RTL) && this.hasBit(t, It.RIGHT);
      return T && C && d || !b && C ? t = this.unsetBit(t, It.RIGHT) : (b && _ && d || b && !_ && m || !T && p >= A) && (t = this.setBit(t, It.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, l = this.hasBit(t, It.BOTTOM), a = this.hasBit(this.anchorCorner, It.BOTTOM), s = e.numbers.MARGIN_TO_EDGE;
      return l ? (r = i.top + this.anchorMargin.top - s, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - s, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, It.RIGHT), l = this.hasBit(this.anchorCorner, It.RIGHT);
      if (r) {
        var a = l ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return l ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, It.BOTTOM), l = this.hasBit(this.anchorCorner, It.BOTTOM), a = 0;
      return r ? a = l ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = l ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, l = this.measurements, a = l.windowScroll, s = l.viewportDistance, o = l.surfaceSize, u = l.viewportSize, c = Object.keys(t);
      try {
        for (var f = Ct(c), d = f.next(); !d.done; d = f.next()) {
          var h = d.value, m = t[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            t[h] = (u.width - o.width) / 2;
            continue;
          }
          m += s[h], this.isFixedPosition || (h === "top" ? m += a.y : h === "bottom" ? m -= a.y : h === "left" ? m += a.x : m -= a.x), t[h] = m;
        }
      } catch (_) {
        i = { error: _ };
      } finally {
        try {
          d && !d.done && (r = f.return) && r.call(f);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, l = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || l) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, ni.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(Et)
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
var jl = {
  animation: {
    prefixed: "-webkit-animation",
    standard: "animation"
  },
  transform: {
    prefixed: "-webkit-transform",
    standard: "transform"
  },
  transition: {
    prefixed: "-webkit-transition",
    standard: "transition"
  }
};
function Kc(n) {
  return !!n.document && typeof n.document.createElement == "function";
}
function zc(n, e) {
  if (Kc(n) && e in jl) {
    var t = n.document.createElement("div"), i = jl[e], r = i.standard, l = i.prefixed, a = r in t.style;
    return a ? r : l;
  }
  return e;
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
var Wn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Un = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Wc = {
  FOCUS_ROOT_INDEX: -1
}, wn;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(wn || (wn = {}));
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
var Xc = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = wn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Wc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.key, r = t.keyCode, l = i === "Tab" || r === 9;
      l && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var i = this, r = this.adapter.getElementIndex(t);
      if (!(r < 0)) {
        this.adapter.notifySelected({ index: r });
        var l = this.adapter.getAttributeFromElementAtIndex(r, Un.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(l), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(t);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, La.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case wn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case wn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case wn.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Un.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Wn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Wn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Un.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Un.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Un.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), r = t >= 0 && t < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Et)
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
var ft = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, hr = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, vn = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
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
var Yc = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = vn.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ft;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
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
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(t, i, r) {
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === vn.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, i) {
      i === void 0 && (i = !1);
      var r = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return t !== vn.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(ft.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(ft.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(ft.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(ft.FOCUSED), r = t || i, l = this.adapter.hasClass(ft.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(l);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), i = t.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), i = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(i);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(ft.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(ft.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(ft.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(ft.FOCUSED))) {
        var i = ht(t) === He.ENTER, r = ht(t) === He.SPACEBAR, l = ht(t) === He.ARROW_UP, a = ht(t) === He.ARROW_DOWN, s = t.ctrlKey || t.metaKey;
        if (!s && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), t.preventDefault();
          return;
        }
        !i && !r && !l && !a || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(ft.FOCUSED);
        if (t) {
          var r = vn.LABEL_SCALE, l = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(l);
        } else
          i || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(ft.INVALID), this.adapter.removeMenuClass(ft.MENU_INVALID)) : (this.adapter.addClass(ft.INVALID), this.adapter.addMenuClass(ft.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(ft.REQUIRED) && !this.adapter.hasClass(ft.DISABLED) ? this.getSelectedIndex() !== vn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(ft.REQUIRED) : this.adapter.removeClass(ft.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Sn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ft.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ft.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ft.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(ft.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(hr.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(hr.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, vn.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Et)
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
var An = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, nn = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
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
var Zc = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return An;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
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
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr(An.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(nn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(nn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(nn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(nn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(nn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(nn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(nn.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(nn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), l = !t || r;
        if (l) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(An.ROLE) : this.adapter.setAttr(An.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(An.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(An.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(An.ARIA_HIDDEN, "true");
    }, e;
  }(Et)
);
const { document: Qc } = ha;
function Jc(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[34].default
  ), c = Re(
    u,
    n,
    /*$$scope*/
    n[33],
    null
  );
  let f = [
    {
      class: i = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": (
          /*fixed*/
          n[4]
        ),
        "mdc-menu-surface--open": (
          /*isStatic*/
          n[3]
        ),
        "smui-menu-surface--static": (
          /*isStatic*/
          n[3]
        ),
        "mdc-menu-surface--fullwidth": (
          /*fullWidth*/
          n[5]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: r = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(ql).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "dialog" },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let h = 0; h < f.length; h += 1)
    d = X(d, f[h]);
  return {
    c() {
      e = oe(), t = x("div"), c && c.c(), ce(t, d);
    },
    m(h, m) {
      H(h, e, m), H(h, t, m), c && c.m(t, null), n[35](t), a = !0, s || (o = [
        fe(
          Qc.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        de(l = $e.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[10].call(null, t)
        ),
        fe(t, "keydown", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleKeydown.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleKeydown.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        })
      ], s = !0);
    },
    p(h, m) {
      n = h, c && c.p && (!a || m[1] & /*$$scope*/
      4) && De(
        c,
        u,
        n,
        /*$$scope*/
        n[33],
        a ? ke(
          u,
          /*$$scope*/
          n[33],
          m,
          null
        ) : Me(
          /*$$scope*/
          n[33]
        ),
        null
      ), ce(t, d = he(f, [
        (!a || m[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/
        314 && i !== (i = re({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-menu-surface": !0,
          "mdc-menu-surface--fixed": (
            /*fixed*/
            n[4]
          ),
          "mdc-menu-surface--open": (
            /*isStatic*/
            n[3]
          ),
          "smui-menu-surface--static": (
            /*isStatic*/
            n[3]
          ),
          "mdc-menu-surface--fullwidth": (
            /*fullWidth*/
            n[5]
          ),
          .../*internalClasses*/
          n[8]
        }))) && { class: i },
        (!a || m[0] & /*internalStyles, style*/
        516 && r !== (r = Object.entries(
          /*internalStyles*/
          n[9]
        ).map(ql).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: r },
        { role: "dialog" },
        m[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        n[12]
      ])), l && pe(l.update) && m[0] & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(h) {
      a || (y(c, h), a = !0);
    },
    o(h) {
      E(c, h), a = !1;
    },
    d(h) {
      h && (P(e), P(t)), c && c.d(h), n[35](null), s = !1, Qe(o);
    }
  };
}
const ql = ([n, e]) => `${n}: ${e};`;
function xc(n, e, t) {
  const i = [
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "isOpen",
    "setOpen",
    "setAbsolutePosition",
    "setIsHoisted",
    "isFixed",
    "getElement"
  ];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s, o, u;
  const c = nt(et());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { static: m = !1 } = e, { anchor: _ = !0 } = e, { fixed: p = !1 } = e, { open: A = m } = e, { managed: b = !1 } = e, { fullWidth: T = !1 } = e, { quickOpen: C = !1 } = e, { anchorElement: k = void 0 } = e, { anchorCorner: R = void 0 } = e, { anchorMargin: g = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: S = 0 } = e, { horizontallyCenteredOnViewport: B = !1 } = e, { openBottomBias: v = 0 } = e, { neverRestoreFocus: I = !1 } = e, D, O, U = {}, W = {}, q;
  Ke("SMUI:list:role", "menu"), Ke("SMUI:list:item:role", "menuitem");
  const z = Sn;
  st(() => (t(7, O = new La({
    addClass: L,
    removeClass: V,
    hasClass: M,
    hasAnchor: () => !!k,
    notifyClose: () => {
      b || t(13, A = m), A || be(D, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      b || t(13, A = m), A || be(D, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      b || t(13, A = !0), A && be(D, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      A || be(D, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (G) => D.contains(G),
    isRtl: () => getComputedStyle(D).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (G) => {
      t(9, W["transform-origin"] = G, W);
    },
    isFocused: () => document.activeElement === D,
    saveFocus: () => {
      var G;
      q = (G = document.activeElement) !== null && G !== void 0 ? G : void 0;
    },
    restoreFocus: () => {
      !I && (!D || D.contains(document.activeElement)) && q && document.contains(q) && "focus" in q && q.focus();
    },
    getInnerDimensions: () => ({
      width: D.offsetWidth,
      height: D.offsetHeight
    }),
    getAnchorDimensions: () => k ? k.getBoundingClientRect() : null,
    getWindowDimensions: () => ({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    getBodyDimensions: () => ({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }),
    getWindowScroll: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset
    }),
    setPosition: (G) => {
      t(9, W.left = "left" in G ? `${G.left}px` : "", W), t(9, W.right = "right" in G ? `${G.right}px` : "", W), t(9, W.top = "top" in G ? `${G.top}px` : "", W), t(9, W.bottom = "bottom" in G ? `${G.bottom}px` : "", W);
    },
    setMaxHeight: (G) => {
      t(9, W["max-height"] = G, W);
    }
  })), be(D, "SMUIMenuSurface:mount", {
    get open() {
      return A;
    },
    set open(G) {
      t(13, A = G);
    },
    closeProgrammatic: ue
  }), O.init(), () => {
    var G;
    const Ge = O.isHoistedElement;
    O.destroy(), Ge && ((G = D.parentNode) === null || G === void 0 || G.removeChild(D));
  })), xt(() => {
    var ie;
    _ && D && ((ie = D.parentElement) === null || ie === void 0 || ie.classList.remove("mdc-menu-surface--anchor"));
  });
  function M(ie) {
    return ie in U ? U[ie] : Ee().classList.contains(ie);
  }
  function L(ie) {
    U[ie] || t(8, U[ie] = !0, U);
  }
  function V(ie) {
    (!(ie in U) || U[ie]) && t(8, U[ie] = !1, U);
  }
  function ue(ie) {
    O.close(ie), t(13, A = !1);
  }
  function Fe(ie) {
    O && A && !b && O.handleBodyClick(ie);
  }
  function Ie() {
    return A;
  }
  function Ye(ie) {
    t(13, A = ie);
  }
  function K(ie, G) {
    return O.setAbsolutePosition(ie, G);
  }
  function J(ie) {
    return O.setIsHoisted(ie);
  }
  function Ce() {
    return O.isFixed();
  }
  function Ee() {
    return D;
  }
  function we(ie) {
    se[ie ? "unshift" : "push"](() => {
      D = ie, t(6, D);
    });
  }
  return n.$$set = (ie) => {
    e = X(X({}, e), tt(ie)), t(12, r = me(e, i)), "use" in ie && t(0, f = ie.use), "class" in ie && t(1, d = ie.class), "style" in ie && t(2, h = ie.style), "static" in ie && t(3, m = ie.static), "anchor" in ie && t(15, _ = ie.anchor), "fixed" in ie && t(4, p = ie.fixed), "open" in ie && t(13, A = ie.open), "managed" in ie && t(16, b = ie.managed), "fullWidth" in ie && t(5, T = ie.fullWidth), "quickOpen" in ie && t(17, C = ie.quickOpen), "anchorElement" in ie && t(14, k = ie.anchorElement), "anchorCorner" in ie && t(18, R = ie.anchorCorner), "anchorMargin" in ie && t(19, g = ie.anchorMargin), "maxHeight" in ie && t(20, S = ie.maxHeight), "horizontallyCenteredOnViewport" in ie && t(21, B = ie.horizontallyCenteredOnViewport), "openBottomBias" in ie && t(22, v = ie.openBottomBias), "neverRestoreFocus" in ie && t(23, I = ie.neverRestoreFocus), "$$scope" in ie && t(33, a = ie.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && D && _ && !(!(t(30, s = D.parentElement) === null || s === void 0) && s.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = D.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, k = t(32, u = D.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && O && O.isOpen() !== A && (A ? O.open() : O.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && O && O.setQuickOpen(C), n.$$.dirty[0] & /*instance, fixed*/
    144 && O && O.setFixedPosition(p), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && O && O.setMaxHeight(S), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && O && O.setIsHorizontallyCenteredOnViewport(B), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && O && R != null && (typeof R == "string" ? O.setAnchorCorner(z[R]) : O.setAnchorCorner(R)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && O && O.setAnchorMargin(g), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && O && O.setOpenBottomBias(v);
  }, [
    f,
    d,
    h,
    m,
    p,
    T,
    D,
    O,
    U,
    W,
    c,
    Fe,
    r,
    A,
    k,
    _,
    b,
    C,
    R,
    g,
    S,
    B,
    v,
    I,
    Ie,
    Ye,
    K,
    J,
    Ce,
    Ee,
    s,
    o,
    u,
    a,
    l,
    we
  ];
}
class $c extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      xc,
      Jc,
      ge,
      {
        use: 0,
        class: 1,
        style: 2,
        static: 3,
        anchor: 15,
        fixed: 4,
        open: 13,
        managed: 16,
        fullWidth: 5,
        quickOpen: 17,
        anchorElement: 14,
        anchorCorner: 18,
        anchorMargin: 19,
        maxHeight: 20,
        horizontallyCenteredOnViewport: 21,
        openBottomBias: 22,
        neverRestoreFocus: 23,
        isOpen: 24,
        setOpen: 25,
        setAbsolutePosition: 26,
        setIsHoisted: 27,
        isFixed: 28,
        getElement: 29
      },
      null,
      [-1, -1]
    );
  }
  get isOpen() {
    return this.$$.ctx[24];
  }
  get setOpen() {
    return this.$$.ctx[25];
  }
  get setAbsolutePosition() {
    return this.$$.ctx[26];
  }
  get setIsHoisted() {
    return this.$$.ctx[27];
  }
  get isFixed() {
    return this.$$.ctx[28];
  }
  get getElement() {
    return this.$$.ctx[29];
  }
}
function ef(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function tf(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[22],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      4194304) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[22],
        e ? ke(
          t,
          /*$$scope*/
          r[22],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[22]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function nf(n) {
  let e, t, i;
  const r = [
    { use: (
      /*usePass*/
      n[5]
    ) },
    {
      class: re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-menu": !0
      })
    },
    /*$$restProps*/
    n[9]
  ];
  function l(s) {
    n[19](s);
  }
  let a = {
    $$slots: { default: [tf] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = X(a, r[s]);
  return (
    /*open*/
    n[0] !== void 0 && (a.open = /*open*/
    n[0]), e = new $c({ props: a }), n[18](e), se.push(() => pt(e, "open", l)), e.$on(
      "SMUIMenuSurface:mount",
      /*handleMenuSurfaceAccessor*/
      n[7]
    ), e.$on(
      "SMUIList:mount",
      /*handleListAccessor*/
      n[8]
    ), e.$on(
      "SMUIMenuSurface:opened",
      /*SMUIMenuSurface_opened_handler*/
      n[20]
    ), e.$on(
      "keydown",
      /*handleKeydown*/
      n[6]
    ), e.$on(
      "SMUIList:action",
      /*SMUIList_action_handler*/
      n[21]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(s, o) {
        $(e, s, o), i = !0;
      },
      p(s, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? he(r, [
          o & /*usePass*/
          32 && { use: (
            /*usePass*/
            s[5]
          ) },
          o & /*className*/
          2 && {
            class: re({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-menu": !0
            })
          },
          o & /*$$restProps*/
          512 && Le(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: s }), !t && o & /*open*/
        1 && (t = !0, u.open = /*open*/
        s[0], mt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (y(e.$$.fragment, s), i = !0);
      },
      o(s) {
        E(e.$$.fragment, s), i = !1;
      },
      d(s) {
        n[18](null), ee(e, s);
      }
    }
  );
}
function rf(n, e, t) {
  let i;
  const r = [
    "use",
    "class",
    "open",
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getMenuSurface",
    "getElement"
  ];
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  const { closest: o } = ki, u = nt(et());
  let { use: c = [] } = e, { class: f = "" } = e, { open: d = !1 } = e, h, m, _, p;
  st(() => (t(3, m = new Xc({
    addClassToElementAtIndex: (U, W) => {
      p.addClassForElementIndex(U, W);
    },
    removeClassFromElementAtIndex: (U, W) => {
      p.removeClassForElementIndex(U, W);
    },
    addAttributeToElementAtIndex: (U, W, q) => {
      p.setAttributeForElementIndex(U, W, q);
    },
    removeAttributeFromElementAtIndex: (U, W) => {
      p.removeAttributeForElementIndex(U, W);
    },
    getAttributeFromElementAtIndex: (U, W) => p.getAttributeFromElementIndex(U, W),
    elementContainsClass: (U, W) => U.classList.contains(W),
    closeSurface: (U) => {
      _.closeProgrammatic(U), be(B(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (U) => p.getOrderedList().map((W) => W.element).indexOf(U),
    notifySelected: (U) => be(
      B(),
      "SMUIMenu:selected",
      {
        index: U.index,
        item: p.getOrderedList()[U.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => p.items.length,
    focusItemAtIndex: (U) => p.focusItemAtIndex(U),
    focusListRoot: () => "focus" in p.element && p.element.focus(),
    isSelectableItemAtIndex: (U) => !!o(p.getOrderedList()[U].element, `.${Wn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (U) => {
      const W = p.getOrderedList(), q = o(W[U].element, `.${Wn.MENU_SELECTION_GROUP}`), z = q == null ? void 0 : q.querySelector(`.${Wn.MENU_SELECTED_LIST_ITEM}`);
      return z ? W.map((M) => M.element).indexOf(z) : -1;
    }
  })), be(B(), "SMUIMenu:mount", m), m.init(), () => {
    m.destroy();
  }));
  function A(U) {
    m && m.handleKeydown(U);
  }
  function b(U) {
    _ || (_ = U.detail);
  }
  function T(U) {
    p || t(4, p = U.detail);
  }
  function C() {
    return d;
  }
  function k(U) {
    t(0, d = U);
  }
  function R(U) {
    m.setDefaultFocusState(U);
  }
  function g() {
    return m.getSelectedIndex();
  }
  function S() {
    return h;
  }
  function B() {
    return h.getElement();
  }
  function v(U) {
    se[U ? "unshift" : "push"](() => {
      h = U, t(2, h);
    });
  }
  function I(U) {
    d = U, t(0, d);
  }
  const D = () => m && m.handleMenuSurfaceOpened(), O = (U) => m && m.handleItemAction(p.getOrderedList()[U.detail.index].element);
  return n.$$set = (U) => {
    e = X(X({}, e), tt(U)), t(9, l = me(e, r)), "use" in U && t(10, c = U.use), "class" in U && t(1, f = U.class), "open" in U && t(0, d = U.open), "$$scope" in U && t(22, s = U.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    1024 && t(5, i = [u, ...c]);
  }, [
    d,
    f,
    h,
    m,
    p,
    i,
    A,
    b,
    T,
    l,
    c,
    C,
    k,
    R,
    g,
    S,
    B,
    a,
    v,
    I,
    D,
    O,
    s
  ];
}
class lf extends ye {
  constructor(e) {
    super(), Ae(this, e, rf, nf, ge, {
      use: 10,
      class: 1,
      open: 0,
      isOpen: 11,
      setOpen: 12,
      setDefaultFocusState: 13,
      getSelectedIndex: 14,
      getMenuSurface: 15,
      getElement: 16
    });
  }
  get isOpen() {
    return this.$$.ctx[11];
  }
  get setOpen() {
    return this.$$.ctx[12];
  }
  get setDefaultFocusState() {
    return this.$$.ctx[13];
  }
  get getSelectedIndex() {
    return this.$$.ctx[14];
  }
  get getMenuSurface() {
    return this.$$.ctx[15];
  }
  get getElement() {
    return this.$$.ctx[16];
  }
}
function sf(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[44],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[1] & /*$$scope*/
      8192) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[44],
        e ? ke(
          t,
          /*$$scope*/
          r[44],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[44]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function af(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[13]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[16],
        .../*use*/
        n[0]
      ]
    },
    {
      class: re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list": !0,
        "mdc-deprecated-list--non-interactive": (
          /*nonInteractive*/
          n[2]
        ),
        "mdc-deprecated-list--dense": (
          /*dense*/
          n[3]
        ),
        "mdc-deprecated-list--textual-list": (
          /*textualList*/
          n[4]
        ),
        "mdc-deprecated-list--avatar-list": (
          /*avatarList*/
          n[5] || /*selectionDialog*/
          n[17]
        ),
        "mdc-deprecated-list--icon-list": (
          /*iconList*/
          n[6]
        ),
        "mdc-deprecated-list--image-list": (
          /*imageList*/
          n[7]
        ),
        "mdc-deprecated-list--thumbnail-list": (
          /*thumbnailList*/
          n[8]
        ),
        "mdc-deprecated-list--video-list": (
          /*videoList*/
          n[9]
        ),
        "mdc-deprecated-list--two-line": (
          /*twoLine*/
          n[10]
        ),
        "smui-list--three-line": (
          /*threeLine*/
          n[11] && !/*twoLine*/
          n[10]
        )
      })
    },
    { role: (
      /*role*/
      n[15]
    ) },
    /*$$restProps*/
    n[25]
  ];
  var l = (
    /*component*/
    n[12]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [sf] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = X(u, he(r, [
      o[0] & /*tag*/
      8192 && { tag: (
        /*tag*/
        s[13]
      ) },
      o[0] & /*forwardEvents, use*/
      65537 && {
        use: [
          /*forwardEvents*/
          s[16],
          .../*use*/
          s[0]
        ]
      },
      o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
      135166 && {
        class: re({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-deprecated-list": !0,
          "mdc-deprecated-list--non-interactive": (
            /*nonInteractive*/
            s[2]
          ),
          "mdc-deprecated-list--dense": (
            /*dense*/
            s[3]
          ),
          "mdc-deprecated-list--textual-list": (
            /*textualList*/
            s[4]
          ),
          "mdc-deprecated-list--avatar-list": (
            /*avatarList*/
            s[5] || /*selectionDialog*/
            s[17]
          ),
          "mdc-deprecated-list--icon-list": (
            /*iconList*/
            s[6]
          ),
          "mdc-deprecated-list--image-list": (
            /*imageList*/
            s[7]
          ),
          "mdc-deprecated-list--thumbnail-list": (
            /*thumbnailList*/
            s[8]
          ),
          "mdc-deprecated-list--video-list": (
            /*videoList*/
            s[9]
          ),
          "mdc-deprecated-list--two-line": (
            /*twoLine*/
            s[10]
          ),
          "smui-list--three-line": (
            /*threeLine*/
            s[11] && !/*twoLine*/
            s[10]
          )
        })
      },
      o[0] & /*role*/
      32768 && { role: (
        /*role*/
        s[15]
      ) },
      o[0] & /*$$restProps*/
      33554432 && Le(
        /*$$restProps*/
        s[25]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[43](e), e.$on(
    "keydown",
    /*handleKeydown*/
    n[20]
  ), e.$on(
    "focusin",
    /*handleFocusin*/
    n[21]
  ), e.$on(
    "focusout",
    /*handleFocusout*/
    n[22]
  ), e.$on(
    "click",
    /*handleClick*/
    n[23]
  ), e.$on(
    "SMUIListItem:mount",
    /*handleItemMount*/
    n[18]
  ), e.$on(
    "SMUIListItem:unmount",
    /*handleItemUnmount*/
    n[19]
  ), e.$on(
    "SMUI:action",
    /*handleAction*/
    n[24]
  )), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(s, o) {
      e && $(e, s, o), H(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      4096 && l !== (l = /*component*/
      s[12])) {
        if (e) {
          Ue();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Ne();
        }
        l ? (e = kt(l, a(s, o)), s[43](e), e.$on(
          "keydown",
          /*handleKeydown*/
          s[20]
        ), e.$on(
          "focusin",
          /*handleFocusin*/
          s[21]
        ), e.$on(
          "focusout",
          /*handleFocusout*/
          s[22]
        ), e.$on(
          "click",
          /*handleClick*/
          s[23]
        ), e.$on(
          "SMUIListItem:mount",
          /*handleItemMount*/
          s[18]
        ), e.$on(
          "SMUIListItem:unmount",
          /*handleItemUnmount*/
          s[19]
        ), e.$on(
          "SMUI:action",
          /*handleAction*/
          s[24]
        ), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? he(r, [
          o[0] & /*tag*/
          8192 && { tag: (
            /*tag*/
            s[13]
          ) },
          o[0] & /*forwardEvents, use*/
          65537 && {
            use: [
              /*forwardEvents*/
              s[16],
              .../*use*/
              s[0]
            ]
          },
          o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
          135166 && {
            class: re({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-deprecated-list": !0,
              "mdc-deprecated-list--non-interactive": (
                /*nonInteractive*/
                s[2]
              ),
              "mdc-deprecated-list--dense": (
                /*dense*/
                s[3]
              ),
              "mdc-deprecated-list--textual-list": (
                /*textualList*/
                s[4]
              ),
              "mdc-deprecated-list--avatar-list": (
                /*avatarList*/
                s[5] || /*selectionDialog*/
                s[17]
              ),
              "mdc-deprecated-list--icon-list": (
                /*iconList*/
                s[6]
              ),
              "mdc-deprecated-list--image-list": (
                /*imageList*/
                s[7]
              ),
              "mdc-deprecated-list--thumbnail-list": (
                /*thumbnailList*/
                s[8]
              ),
              "mdc-deprecated-list--video-list": (
                /*videoList*/
                s[9]
              ),
              "mdc-deprecated-list--two-line": (
                /*twoLine*/
                s[10]
              ),
              "smui-list--three-line": (
                /*threeLine*/
                s[11] && !/*twoLine*/
                s[10]
              )
            })
          },
          o[0] & /*role*/
          32768 && { role: (
            /*role*/
            s[15]
          ) },
          o[0] & /*$$restProps*/
          33554432 && Le(
            /*$$restProps*/
            s[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && y(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), n[43](null), e && ee(e, s);
    }
  };
}
function of(n, e, t) {
  const i = [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "focusItemAtIndex",
    "getElement"
  ];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const { closest: o, matches: u } = ki, c = nt(et());
  let { use: f = [] } = e, { class: d = "" } = e, { nonInteractive: h = !1 } = e, { dense: m = !1 } = e, { textualList: _ = !1 } = e, { avatarList: p = !1 } = e, { iconList: A = !1 } = e, { imageList: b = !1 } = e, { thumbnailList: T = !1 } = e, { videoList: C = !1 } = e, { twoLine: k = !1 } = e, { threeLine: R = !1 } = e, { vertical: g = !0 } = e, { wrapFocus: S = (s = ze("SMUI:list:wrapFocus")) !== null && s !== void 0 ? s : !1 } = e, { singleSelection: B = !1 } = e, { disabledItemsFocusable: v = !1 } = e, { selectedIndex: I = -1 } = e, { radioList: D = !1 } = e, { checkList: O = !1 } = e, { hasTypeahead: U = !1 } = e, W, q, z = [], M = ze("SMUI:list:role"), L = ze("SMUI:list:nav");
  const V = /* @__PURE__ */ new WeakMap();
  let ue = ze("SMUI:dialog:selection"), Fe = ze("SMUI:addLayoutListener"), Ie, { component: Ye = Nt } = e, { tag: K = Ye === Nt ? L ? "nav" : "ul" : void 0 } = e;
  Ke("SMUI:list:nonInteractive", h), Ke("SMUI:separator:context", "list"), M || (B ? (M = "listbox", Ke("SMUI:list:item:role", "option")) : D ? (M = "radiogroup", Ke("SMUI:list:item:role", "radio")) : O ? (M = "group", Ke("SMUI:list:item:role", "checkbox")) : (M = "list", Ke("SMUI:list:item:role", void 0))), Fe && (Ie = Fe(ne)), st(() => {
    t(41, q = new Gc({
      addClassForElementIndex: Z,
      focusItemAtIndex: Te,
      getAttributeForElementIndex: (_e, ve) => {
        var it, $t;
        return ($t = (it = Be()[_e]) === null || it === void 0 ? void 0 : it.getAttr(ve)) !== null && $t !== void 0 ? $t : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Be().map((_e) => _e.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => z.length,
      getPrimaryTextAtIndex: j,
      hasCheckboxAtIndex: (_e) => {
        var ve, it;
        return (it = (ve = Be()[_e]) === null || ve === void 0 ? void 0 : ve.hasCheckbox) !== null && it !== void 0 ? it : !1;
      },
      hasRadioAtIndex: (_e) => {
        var ve, it;
        return (it = (ve = Be()[_e]) === null || ve === void 0 ? void 0 : ve.hasRadio) !== null && it !== void 0 ? it : !1;
      },
      isCheckboxCheckedAtIndex: (_e) => {
        var ve;
        const it = Be()[_e];
        return (ve = (it == null ? void 0 : it.hasCheckbox) && it.checked) !== null && ve !== void 0 ? ve : !1;
      },
      isFocusInsideList: () => W != null && ae() !== document.activeElement && ae().contains(document.activeElement),
      isRootFocused: () => W != null && document.activeElement === ae(),
      listItemAtIndexHasClass: At,
      notifyAction: (_e) => {
        t(26, I = _e), W != null && be(ae(), "SMUIList:action", { index: _e }, void 0, !0);
      },
      notifySelectionChange: (_e) => {
        W != null && be(ae(), "SMUIList:selectionChange", { changedIndices: _e });
      },
      removeClassForElementIndex: Se,
      setAttributeForElementIndex: je,
      setCheckedCheckboxOrRadioAtIndex: (_e, ve) => {
        Be()[_e].checked = ve;
      },
      setTabIndexForListItemChildren: (_e, ve) => {
        const it = Be()[_e];
        Array.prototype.forEach.call(it.element.querySelectorAll("button:not(:disabled), a"), (xn) => {
          xn.setAttribute("tabindex", ve);
        });
      }
    }));
    const Y = {
      get element() {
        return ae();
      },
      get items() {
        return z;
      },
      get typeaheadInProgress() {
        return q.isTypeaheadInProgress();
      },
      typeaheadMatchItem(_e, ve) {
        return q.typeaheadMatchItem(
          _e,
          ve,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Be,
      focusItemAtIndex: Te,
      addClassForElementIndex: Z,
      removeClassForElementIndex: Se,
      setAttributeForElementIndex: je,
      removeAttributeForElementIndex: Pe,
      getAttributeFromElementIndex: St,
      getPrimaryTextAtIndex: j
    };
    return be(ae(), "SMUIList:mount", Y), q.init(), q.layout(), () => {
      q.destroy();
    };
  }), xt(() => {
    Ie && Ie();
  });
  function J(Y) {
    z.push(Y.detail), V.set(Y.detail.element, Y.detail), B && Y.detail.selected && t(26, I = le(Y.detail.element)), Y.stopPropagation();
  }
  function Ce(Y) {
    var _e;
    const ve = (_e = Y.detail && z.indexOf(Y.detail)) !== null && _e !== void 0 ? _e : -1;
    ve !== -1 && (z.splice(ve, 1), z = z, V.delete(Y.detail.element)), Y.stopPropagation();
  }
  function Ee(Y) {
    q && Y.target && q.handleKeydown(Y, Y.target.classList.contains("mdc-deprecated-list-item"), le(Y.target));
  }
  function we(Y) {
    q && Y.target && q.handleFocusIn(le(Y.target));
  }
  function ie(Y) {
    q && Y.target && q.handleFocusOut(le(Y.target));
  }
  function G(Y) {
    q && Y.target && q.handleClick(le(Y.target), !u(Y.target, 'input[type="checkbox"], input[type="radio"]'), Y);
  }
  function Ge(Y) {
    if (D || O) {
      const _e = le(Y.target);
      if (_e !== -1) {
        const ve = Be()[_e];
        ve && (D && !ve.checked || O) && (u(Y.detail.target, 'input[type="checkbox"], input[type="radio"]') || (ve.checked = !ve.checked), ve.activateRipple(), window.requestAnimationFrame(() => {
          ve.deactivateRipple();
        }));
      }
    }
  }
  function Be() {
    return W == null ? [] : [...ae().children].map((Y) => V.get(Y)).filter((Y) => Y && Y._smui_list_item_accessor);
  }
  function At(Y, _e) {
    var ve;
    const it = Be()[Y];
    return (ve = it && it.hasClass(_e)) !== null && ve !== void 0 ? ve : !1;
  }
  function Z(Y, _e) {
    const ve = Be()[Y];
    ve && ve.addClass(_e);
  }
  function Se(Y, _e) {
    const ve = Be()[Y];
    ve && ve.removeClass(_e);
  }
  function je(Y, _e, ve) {
    const it = Be()[Y];
    it && it.addAttr(_e, ve);
  }
  function Pe(Y, _e) {
    const ve = Be()[Y];
    ve && ve.removeAttr(_e);
  }
  function St(Y, _e) {
    const ve = Be()[Y];
    return ve ? ve.getAttr(_e) : null;
  }
  function j(Y) {
    var _e;
    const ve = Be()[Y];
    return (_e = ve && ve.getPrimaryText()) !== null && _e !== void 0 ? _e : "";
  }
  function le(Y) {
    const _e = o(Y, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return _e && u(_e, ".mdc-deprecated-list-item") ? Be().map((ve) => ve == null ? void 0 : ve.element).indexOf(_e) : -1;
  }
  function ne() {
    return q.layout();
  }
  function Xe(Y, _e) {
    return q.setEnabled(Y, _e);
  }
  function ct() {
    return q.isTypeaheadInProgress();
  }
  function ot() {
    return q.getSelectedIndex();
  }
  function xe() {
    return q.getFocusedItemIndex();
  }
  function Te(Y) {
    const _e = Be()[Y];
    _e && "focus" in _e.element && _e.element.focus();
  }
  function ae() {
    return W.getElement();
  }
  function qt(Y) {
    se[Y ? "unshift" : "push"](() => {
      W = Y, t(14, W);
    });
  }
  return n.$$set = (Y) => {
    e = X(X({}, e), tt(Y)), t(25, r = me(e, i)), "use" in Y && t(0, f = Y.use), "class" in Y && t(1, d = Y.class), "nonInteractive" in Y && t(2, h = Y.nonInteractive), "dense" in Y && t(3, m = Y.dense), "textualList" in Y && t(4, _ = Y.textualList), "avatarList" in Y && t(5, p = Y.avatarList), "iconList" in Y && t(6, A = Y.iconList), "imageList" in Y && t(7, b = Y.imageList), "thumbnailList" in Y && t(8, T = Y.thumbnailList), "videoList" in Y && t(9, C = Y.videoList), "twoLine" in Y && t(10, k = Y.twoLine), "threeLine" in Y && t(11, R = Y.threeLine), "vertical" in Y && t(27, g = Y.vertical), "wrapFocus" in Y && t(28, S = Y.wrapFocus), "singleSelection" in Y && t(29, B = Y.singleSelection), "disabledItemsFocusable" in Y && t(30, v = Y.disabledItemsFocusable), "selectedIndex" in Y && t(26, I = Y.selectedIndex), "radioList" in Y && t(31, D = Y.radioList), "checkList" in Y && t(32, O = Y.checkList), "hasTypeahead" in Y && t(33, U = Y.hasTypeahead), "component" in Y && t(12, Ye = Y.component), "tag" in Y && t(13, K = Y.tag), "$$scope" in Y && t(44, a = Y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setVerticalOrientation(g), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setWrapFocus(S), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && q && q.setHasTypeahead(U), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setSingleSelection(B), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setDisabledItemsFocusable(v), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && q && B && ot() !== I && q.setSelectedIndex(I);
  }, [
    f,
    d,
    h,
    m,
    _,
    p,
    A,
    b,
    T,
    C,
    k,
    R,
    Ye,
    K,
    W,
    M,
    c,
    ue,
    J,
    Ce,
    Ee,
    we,
    ie,
    G,
    Ge,
    r,
    I,
    g,
    S,
    B,
    v,
    D,
    O,
    U,
    ne,
    Xe,
    ct,
    ot,
    xe,
    Te,
    ae,
    q,
    l,
    qt,
    a
  ];
}
class uf extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      of,
      af,
      ge,
      {
        use: 0,
        class: 1,
        nonInteractive: 2,
        dense: 3,
        textualList: 4,
        avatarList: 5,
        iconList: 6,
        imageList: 7,
        thumbnailList: 8,
        videoList: 9,
        twoLine: 10,
        threeLine: 11,
        vertical: 27,
        wrapFocus: 28,
        singleSelection: 29,
        disabledItemsFocusable: 30,
        selectedIndex: 26,
        radioList: 31,
        checkList: 32,
        hasTypeahead: 33,
        component: 12,
        tag: 13,
        layout: 34,
        setEnabled: 35,
        getTypeaheadInProgress: 36,
        getSelectedIndex: 37,
        getFocusedItemIndex: 38,
        focusItemAtIndex: 39,
        getElement: 40
      },
      null,
      [-1, -1]
    );
  }
  get layout() {
    return this.$$.ctx[34];
  }
  get setEnabled() {
    return this.$$.ctx[35];
  }
  get getTypeaheadInProgress() {
    return this.$$.ctx[36];
  }
  get getSelectedIndex() {
    return this.$$.ctx[37];
  }
  get getFocusedItemIndex() {
    return this.$$.ctx[38];
  }
  get focusItemAtIndex() {
    return this.$$.ctx[39];
  }
  get getElement() {
    return this.$$.ctx[40];
  }
}
function Gl(n) {
  let e;
  return {
    c() {
      e = x("span"), F(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function cf(n) {
  let e, t, i = (
    /*ripple*/
    n[7] && Gl()
  );
  const r = (
    /*#slots*/
    n[34].default
  ), l = Re(
    r,
    n,
    /*$$scope*/
    n[37],
    null
  );
  return {
    c() {
      i && i.c(), e = qe(), l && l.c();
    },
    m(a, s) {
      i && i.m(a, s), H(a, e, s), l && l.m(a, s), t = !0;
    },
    p(a, s) {
      /*ripple*/
      a[7] ? i || (i = Gl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), l && l.p && (!t || s[1] & /*$$scope*/
      64) && De(
        l,
        r,
        a,
        /*$$scope*/
        a[37],
        t ? ke(
          r,
          /*$$scope*/
          a[37],
          s,
          null
        ) : Me(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      t || (y(l, a), t = !0);
    },
    o(a) {
      E(l, a), t = !1;
    },
    d(a) {
      a && P(e), i && i.d(a), l && l.d(a);
    }
  };
}
function ff(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        .../*nonInteractive*/
        n[6] ? [] : [
          [
            Rt,
            {
              ripple: !/*input*/
              n[16],
              unbounded: !1,
              color: (
                /*activated*/
                (n[1] || /*selected*/
                n[0]) && /*color*/
                n[5] == null ? "primary" : (
                  /*color*/
                  n[5]
                )
              ),
              disabled: (
                /*disabled*/
                n[10]
              ),
              addClass: (
                /*addClass*/
                n[24]
              ),
              removeClass: (
                /*removeClass*/
                n[25]
              ),
              addStyle: (
                /*addStyle*/
                n[26]
              )
            }
          ]
        ],
        /*forwardEvents*/
        n[22],
        .../*use*/
        n[2]
      ]
    },
    {
      class: re({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-deprecated-list-item": !/*wrapper*/
        n[8],
        "mdc-deprecated-list-item__wrapper": (
          /*wrapper*/
          n[8]
        ),
        "mdc-deprecated-list-item--activated": (
          /*activated*/
          n[1]
        ),
        "mdc-deprecated-list-item--selected": (
          /*selected*/
          n[0]
        ),
        "mdc-deprecated-list-item--disabled": (
          /*disabled*/
          n[10]
        ),
        "mdc-menu-item--selected": !/*nav*/
        n[23] && /*role*/
        n[9] === "menuitem" && /*selected*/
        n[0],
        "smui-menu-item--non-interactive": (
          /*nonInteractive*/
          n[6]
        ),
        .../*internalClasses*/
        n[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[19]
      ).map(mr).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*nav*/
    n[23] && /*activated*/
    n[1] ? { "aria-current": "page" } : {},
    !/*nav*/
    n[23] || /*wrapper*/
    n[8] ? { role: (
      /*role*/
      n[9]
    ) } : {},
    !/*nav*/
    n[23] && /*role*/
    n[9] === "option" ? {
      "aria-selected": (
        /*selected*/
        n[0] ? "true" : "false"
      )
    } : {},
    !/*nav*/
    n[23] && /*role*/
    (n[9] === "radio" || /*role*/
    n[9] === "checkbox") ? {
      "aria-checked": (
        /*input*/
        n[16] && /*input*/
        n[16].checked ? "true" : "false"
      )
    } : {},
    /*nav*/
    n[23] ? {} : {
      "aria-disabled": (
        /*disabled*/
        n[10] ? "true" : "false"
      )
    },
    {
      "data-menu-item-skip-restore-focus": (
        /*skipRestoreFocus*/
        n[11] || void 0
      )
    },
    { tabindex: (
      /*tabindex*/
      n[21]
    ) },
    { href: (
      /*href*/
      n[12]
    ) },
    /*internalAttrs*/
    n[20],
    /*$$restProps*/
    n[29]
  ];
  var l = (
    /*component*/
    n[13]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [cf] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = X(u, he(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        s[14]
      ) },
      o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
      121701479 && {
        use: [
          .../*nonInteractive*/
          s[6] ? [] : [
            [
              Rt,
              {
                ripple: !/*input*/
                s[16],
                unbounded: !1,
                color: (
                  /*activated*/
                  (s[1] || /*selected*/
                  s[0]) && /*color*/
                  s[5] == null ? "primary" : (
                    /*color*/
                    s[5]
                  )
                ),
                disabled: (
                  /*disabled*/
                  s[10]
                ),
                addClass: (
                  /*addClass*/
                  s[24]
                ),
                removeClass: (
                  /*removeClass*/
                  s[25]
                ),
                addStyle: (
                  /*addStyle*/
                  s[26]
                )
              }
            ]
          ],
          /*forwardEvents*/
          s[22],
          .../*use*/
          s[2]
        ]
      },
      o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
      8652619 && {
        class: re({
          [
            /*className*/
            s[3]
          ]: !0,
          "mdc-deprecated-list-item": !/*wrapper*/
          s[8],
          "mdc-deprecated-list-item__wrapper": (
            /*wrapper*/
            s[8]
          ),
          "mdc-deprecated-list-item--activated": (
            /*activated*/
            s[1]
          ),
          "mdc-deprecated-list-item--selected": (
            /*selected*/
            s[0]
          ),
          "mdc-deprecated-list-item--disabled": (
            /*disabled*/
            s[10]
          ),
          "mdc-menu-item--selected": !/*nav*/
          s[23] && /*role*/
          s[9] === "menuitem" && /*selected*/
          s[0],
          "smui-menu-item--non-interactive": (
            /*nonInteractive*/
            s[6]
          ),
          .../*internalClasses*/
          s[18]
        })
      },
      o[0] & /*internalStyles, style*/
      524304 && {
        style: Object.entries(
          /*internalStyles*/
          s[19]
        ).map(mr).concat([
          /*style*/
          s[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && Le(
        /*nav*/
        s[23] && /*activated*/
        s[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && Le(!/*nav*/
      s[23] || /*wrapper*/
      s[8] ? { role: (
        /*role*/
        s[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && Le(!/*nav*/
      s[23] && /*role*/
      s[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          s[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && Le(!/*nav*/
      s[23] && /*role*/
      (s[9] === "radio" || /*role*/
      s[9] === "checkbox") ? {
        "aria-checked": (
          /*input*/
          s[16] && /*input*/
          s[16].checked ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, disabled*/
      8389632 && Le(/*nav*/
      s[23] ? {} : {
        "aria-disabled": (
          /*disabled*/
          s[10] ? "true" : "false"
        )
      }),
      o[0] & /*skipRestoreFocus*/
      2048 && {
        "data-menu-item-skip-restore-focus": (
          /*skipRestoreFocus*/
          s[11] || void 0
        )
      },
      o[0] & /*tabindex*/
      2097152 && { tabindex: (
        /*tabindex*/
        s[21]
      ) },
      o[0] & /*href*/
      4096 && { href: (
        /*href*/
        s[12]
      ) },
      o[0] & /*internalAttrs*/
      1048576 && Le(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Le(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[35](e), e.$on(
    "click",
    /*action*/
    n[15]
  ), e.$on(
    "keydown",
    /*handleKeydown*/
    n[27]
  ), e.$on(
    "SMUIGenericInput:mount",
    /*handleInputMount*/
    n[28]
  ), e.$on(
    "SMUIGenericInput:unmount",
    /*SMUIGenericInput_unmount_handler*/
    n[36]
  )), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(s, o) {
      e && $(e, s, o), H(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Ue();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Ne();
        }
        l ? (e = kt(l, a(s, o)), s[35](e), e.$on(
          "click",
          /*action*/
          s[15]
        ), e.$on(
          "keydown",
          /*handleKeydown*/
          s[27]
        ), e.$on(
          "SMUIGenericInput:mount",
          /*handleInputMount*/
          s[28]
        ), e.$on(
          "SMUIGenericInput:unmount",
          /*SMUIGenericInput_unmount_handler*/
          s[36]
        ), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? he(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            s[14]
          ) },
          o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
          121701479 && {
            use: [
              .../*nonInteractive*/
              s[6] ? [] : [
                [
                  Rt,
                  {
                    ripple: !/*input*/
                    s[16],
                    unbounded: !1,
                    color: (
                      /*activated*/
                      (s[1] || /*selected*/
                      s[0]) && /*color*/
                      s[5] == null ? "primary" : (
                        /*color*/
                        s[5]
                      )
                    ),
                    disabled: (
                      /*disabled*/
                      s[10]
                    ),
                    addClass: (
                      /*addClass*/
                      s[24]
                    ),
                    removeClass: (
                      /*removeClass*/
                      s[25]
                    ),
                    addStyle: (
                      /*addStyle*/
                      s[26]
                    )
                  }
                ]
              ],
              /*forwardEvents*/
              s[22],
              .../*use*/
              s[2]
            ]
          },
          o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
          8652619 && {
            class: re({
              [
                /*className*/
                s[3]
              ]: !0,
              "mdc-deprecated-list-item": !/*wrapper*/
              s[8],
              "mdc-deprecated-list-item__wrapper": (
                /*wrapper*/
                s[8]
              ),
              "mdc-deprecated-list-item--activated": (
                /*activated*/
                s[1]
              ),
              "mdc-deprecated-list-item--selected": (
                /*selected*/
                s[0]
              ),
              "mdc-deprecated-list-item--disabled": (
                /*disabled*/
                s[10]
              ),
              "mdc-menu-item--selected": !/*nav*/
              s[23] && /*role*/
              s[9] === "menuitem" && /*selected*/
              s[0],
              "smui-menu-item--non-interactive": (
                /*nonInteractive*/
                s[6]
              ),
              .../*internalClasses*/
              s[18]
            })
          },
          o[0] & /*internalStyles, style*/
          524304 && {
            style: Object.entries(
              /*internalStyles*/
              s[19]
            ).map(mr).concat([
              /*style*/
              s[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && Le(
            /*nav*/
            s[23] && /*activated*/
            s[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && Le(!/*nav*/
          s[23] || /*wrapper*/
          s[8] ? { role: (
            /*role*/
            s[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && Le(!/*nav*/
          s[23] && /*role*/
          s[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              s[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && Le(!/*nav*/
          s[23] && /*role*/
          (s[9] === "radio" || /*role*/
          s[9] === "checkbox") ? {
            "aria-checked": (
              /*input*/
              s[16] && /*input*/
              s[16].checked ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, disabled*/
          8389632 && Le(/*nav*/
          s[23] ? {} : {
            "aria-disabled": (
              /*disabled*/
              s[10] ? "true" : "false"
            )
          }),
          o[0] & /*skipRestoreFocus*/
          2048 && {
            "data-menu-item-skip-restore-focus": (
              /*skipRestoreFocus*/
              s[11] || void 0
            )
          },
          o[0] & /*tabindex*/
          2097152 && { tabindex: (
            /*tabindex*/
            s[21]
          ) },
          o[0] & /*href*/
          4096 && { href: (
            /*href*/
            s[12]
          ) },
          o[0] & /*internalAttrs*/
          1048576 && Le(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Le(
            /*$$restProps*/
            s[29]
          )
        ]) : {};
        o[0] & /*ripple*/
        128 | o[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && y(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), n[35](null), e && ee(e, s);
    }
  };
}
let df = 0;
const mr = ([n, e]) => `${n}: ${e};`;
function hf(n, e, t) {
  let i;
  const r = [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "action",
    "getPrimaryText",
    "getElement"
  ];
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  var o;
  const u = nt(et());
  let c = () => {
  };
  function f(Z) {
    return Z === c;
  }
  let { use: d = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { color: _ = void 0 } = e, { nonInteractive: p = (o = ze("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  Ke("SMUI:list:nonInteractive", void 0);
  let { ripple: A = !p } = e, { wrapper: b = !1 } = e, { activated: T = !1 } = e, { role: C = b ? "presentation" : ze("SMUI:list:item:role") } = e;
  Ke("SMUI:list:item:role", void 0);
  let { selected: k = !1 } = e, { disabled: R = !1 } = e, { skipRestoreFocus: g = !1 } = e, { tabindex: S = c } = e, { inputId: B = "SMUI-form-field-list-" + df++ } = e, { href: v = void 0 } = e, I, D = {}, O = {}, U = {}, W, q, z = ze("SMUI:list:item:nav"), { component: M = Nt } = e, { tag: L = M === Nt ? z ? v ? "a" : "span" : "li" : void 0 } = e;
  Ke("SMUI:generic:input:props", { id: B }), Ke("SMUI:separator:context", void 0), st(() => {
    if (!k && !p) {
      let Se = !0, je = I.getElement();
      for (; je.previousSibling; )
        if (je = je.previousSibling, je.nodeType === 1 && je.classList.contains("mdc-deprecated-list-item") && !je.classList.contains("mdc-deprecated-list-item--disabled")) {
          Se = !1;
          break;
        }
      Se && (q = window.requestAnimationFrame(() => Ce(je)));
    }
    const Z = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ge();
      },
      get selected() {
        return k;
      },
      set selected(Se) {
        t(0, k = Se);
      },
      hasClass: V,
      addClass: ue,
      removeClass: Fe,
      getAttr: Ye,
      addAttr: K,
      removeAttr: J,
      getPrimaryText: G,
      // For inputs within item.
      get checked() {
        var Se;
        return (Se = W && W.checked) !== null && Se !== void 0 ? Se : !1;
      },
      set checked(Se) {
        W && t(16, W.checked = !!Se, W);
      },
      get hasCheckbox() {
        return !!(W && "_smui_checkbox_accessor" in W);
      },
      get hasRadio() {
        return !!(W && "_smui_radio_accessor" in W);
      },
      activateRipple() {
        W && W.activateRipple();
      },
      deactivateRipple() {
        W && W.deactivateRipple();
      },
      // For select options.
      getValue() {
        return l.value;
      },
      // For autocomplete
      action: ie,
      get tabindex() {
        return i;
      },
      set tabindex(Se) {
        t(30, S = Se);
      },
      get disabled() {
        return R;
      },
      get activated() {
        return T;
      },
      set activated(Se) {
        t(1, T = Se);
      }
    };
    return be(Ge(), "SMUIListItem:mount", Z), () => {
      be(Ge(), "SMUIListItem:unmount", Z);
    };
  }), xt(() => {
    q && window.cancelAnimationFrame(q);
  });
  function V(Z) {
    return Z in D ? D[Z] : Ge().classList.contains(Z);
  }
  function ue(Z) {
    D[Z] || t(18, D[Z] = !0, D);
  }
  function Fe(Z) {
    (!(Z in D) || D[Z]) && t(18, D[Z] = !1, D);
  }
  function Ie(Z, Se) {
    O[Z] != Se && (Se === "" || Se == null ? (delete O[Z], t(19, O)) : t(19, O[Z] = Se, O));
  }
  function Ye(Z) {
    var Se;
    return Z in U ? (Se = U[Z]) !== null && Se !== void 0 ? Se : null : Ge().getAttribute(Z);
  }
  function K(Z, Se) {
    U[Z] !== Se && t(20, U[Z] = Se, U);
  }
  function J(Z) {
    (!(Z in U) || U[Z] != null) && t(20, U[Z] = void 0, U);
  }
  function Ce(Z) {
    let Se = !0;
    for (; Z.nextElementSibling; )
      if (Z = Z.nextElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item")) {
        const je = Z.attributes.getNamedItem("tabindex");
        if (je && je.value === "0") {
          Se = !1;
          break;
        }
      }
    Se && t(21, i = 0);
  }
  function Ee(Z) {
    const Se = Z.key === "Enter", je = Z.key === "Space";
    (Se || je) && ie(Z);
  }
  function we(Z) {
    ("_smui_checkbox_accessor" in Z.detail || "_smui_radio_accessor" in Z.detail) && t(16, W = Z.detail);
  }
  function ie(Z) {
    R || be(Ge(), "SMUI:action", Z);
  }
  function G() {
    var Z, Se, je;
    const Pe = Ge(), St = Pe.querySelector(".mdc-deprecated-list-item__primary-text");
    if (St)
      return (Z = St.textContent) !== null && Z !== void 0 ? Z : "";
    const j = Pe.querySelector(".mdc-deprecated-list-item__text");
    return j ? (Se = j.textContent) !== null && Se !== void 0 ? Se : "" : (je = Pe.textContent) !== null && je !== void 0 ? je : "";
  }
  function Ge() {
    return I.getElement();
  }
  function Be(Z) {
    se[Z ? "unshift" : "push"](() => {
      I = Z, t(17, I);
    });
  }
  const At = () => t(16, W = void 0);
  return n.$$set = (Z) => {
    e = X(X({}, e), tt(Z)), t(29, l = me(e, r)), "use" in Z && t(2, d = Z.use), "class" in Z && t(3, h = Z.class), "style" in Z && t(4, m = Z.style), "color" in Z && t(5, _ = Z.color), "nonInteractive" in Z && t(6, p = Z.nonInteractive), "ripple" in Z && t(7, A = Z.ripple), "wrapper" in Z && t(8, b = Z.wrapper), "activated" in Z && t(1, T = Z.activated), "role" in Z && t(9, C = Z.role), "selected" in Z && t(0, k = Z.selected), "disabled" in Z && t(10, R = Z.disabled), "skipRestoreFocus" in Z && t(11, g = Z.skipRestoreFocus), "tabindex" in Z && t(30, S = Z.tabindex), "inputId" in Z && t(31, B = Z.inputId), "href" in Z && t(12, v = Z.href), "component" in Z && t(13, M = Z.component), "tag" in Z && t(14, L = Z.tag), "$$scope" in Z && t(37, s = Z.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, i = f(S) ? !p && !R && (k || W && W.checked) ? 0 : -1 : S);
  }, [
    k,
    T,
    d,
    h,
    m,
    _,
    p,
    A,
    b,
    C,
    R,
    g,
    v,
    M,
    L,
    ie,
    W,
    I,
    D,
    O,
    U,
    i,
    u,
    z,
    ue,
    Fe,
    Ie,
    Ee,
    we,
    l,
    S,
    B,
    G,
    Ge,
    a,
    Be,
    At,
    s
  ];
}
class mf extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      hf,
      ff,
      ge,
      {
        use: 2,
        class: 3,
        style: 4,
        color: 5,
        nonInteractive: 6,
        ripple: 7,
        wrapper: 8,
        activated: 1,
        role: 9,
        selected: 0,
        disabled: 10,
        skipRestoreFocus: 11,
        tabindex: 30,
        inputId: 31,
        href: 12,
        component: 13,
        tag: 14,
        action: 15,
        getPrimaryText: 32,
        getElement: 33
      },
      null,
      [-1, -1]
    );
  }
  get action() {
    return this.$$.ctx[15];
  }
  get getPrimaryText() {
    return this.$$.ctx[32];
  }
  get getElement() {
    return this.$$.ctx[33];
  }
}
Lt({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Lt({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Lt({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function pf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[8].default
  ), o = Re(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = X(c, u[f]);
  return {
    c() {
      e = x("span"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      H(f, e, d), o && o.m(e, null), n[9](e), r = !0, l || (a = [
        de(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], l = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      128) && De(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        r ? ke(
          s,
          /*$$scope*/
          f[7],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[7]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || d & /*className*/
        2 && t !== (t = re({
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      E(o, f), r = !1;
    },
    d(f) {
      f && P(e), o && o.d(f), n[9](null), l = !1, Qe(a);
    }
  };
}
function gf(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = ze("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function h(m) {
    se[m ? "unshift" : "push"](() => {
      c = m, t(2, c);
    });
  }
  return n.$$set = (m) => {
    e = X(X({}, e), tt(m)), t(5, r = me(e, i)), "use" in m && t(0, o = m.use), "class" in m && t(1, u = m.class), "$$scope" in m && t(7, a = m.$$scope);
  }, [
    o,
    u,
    c,
    s,
    f,
    r,
    d,
    a,
    l,
    h
  ];
}
class _f extends ye {
  constructor(e) {
    super(), Ae(this, e, gf, pf, ge, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Lt({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Lt({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Lt({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Lt({
  class: "mdc-menu__selection-group-icon",
  component: _f
});
function bf(n) {
  let e;
  return {
    c() {
      e = ut(
        /*content*/
        n[8]
      );
    },
    m(t, i) {
      H(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      256 && vt(
        e,
        /*content*/
        t[8]
      );
    },
    i: Ze,
    o: Ze,
    d(t) {
      t && P(e);
    }
  };
}
function If(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      4096) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? ke(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vf(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [If, bf], f = [];
  function d(_, p) {
    return (
      /*content*/
      _[8] == null ? 0 : 1
    );
  }
  t = d(n), i = f[t] = c[t](n);
  let h = [
    {
      class: r = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": (
          /*validationMsg*/
          n[4]
        ),
        "mdc-select-helper-text--validation-msg-persistent": (
          /*persistent*/
          n[3]
        ),
        .../*internalClasses*/
        n[6]
      })
    },
    {
      "aria-hidden": l = /*persistent*/
      n[3] ? void 0 : "true"
    },
    { id: (
      /*id*/
      n[2]
    ) },
    /*internalAttrs*/
    n[7],
    /*$$restProps*/
    n[10]
  ], m = {};
  for (let _ = 0; _ < h.length; _ += 1)
    m = X(m, h[_]);
  return {
    c() {
      e = x("div"), i.c(), ce(e, m);
    },
    m(_, p) {
      H(_, e, p), f[t].m(e, null), n[14](e), s = !0, o || (u = [
        de(a = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], o = !0);
    },
    p(_, [p]) {
      let A = t;
      t = d(_), t === A ? f[t].p(_, p) : (Ue(), E(f[A], 1, 1, () => {
        f[A] = null;
      }), Ne(), i = f[t], i ? i.p(_, p) : (i = f[t] = c[t](_), i.c()), y(i, 1), i.m(e, null)), ce(e, m = he(h, [
        (!s || p & /*className, validationMsg, persistent, internalClasses*/
        90 && r !== (r = re({
          [
            /*className*/
            _[1]
          ]: !0,
          "mdc-select-helper-text": !0,
          "mdc-select-helper-text--validation-msg": (
            /*validationMsg*/
            _[4]
          ),
          "mdc-select-helper-text--validation-msg-persistent": (
            /*persistent*/
            _[3]
          ),
          .../*internalClasses*/
          _[6]
        }))) && { class: r },
        (!s || p & /*persistent*/
        8 && l !== (l = /*persistent*/
        _[3] ? void 0 : "true")) && { "aria-hidden": l },
        (!s || p & /*id*/
        4) && { id: (
          /*id*/
          _[2]
        ) },
        p & /*internalAttrs*/
        128 && /*internalAttrs*/
        _[7],
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        _[10]
      ])), a && pe(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      s || (y(i), s = !0);
    },
    o(_) {
      E(i), s = !1;
    },
    d(_) {
      _ && P(e), f[t].d(), n[14](null), o = !1, Qe(u);
    }
  };
}
let Af = 0;
function yf(n, e, t) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + Af++ } = e, { persistent: f = !1 } = e, { validationMsg: d = !1 } = e, h, m, _ = {}, p = {}, A;
  st(() => (m = new Zc({
    addClass: T,
    removeClass: C,
    hasClass: b,
    getAttr: k,
    setAttr: R,
    removeAttr: g,
    setContent: (v) => {
      t(8, A = v);
    }
  }), c.startsWith("SMUI-select-helper-text-") && be(S(), "SMUISelectHelperText:id", c), be(S(), "SMUISelectHelperText:mount", m), m.init(), () => {
    be(S(), "SMUISelectHelperText:unmount", m), m.destroy();
  }));
  function b(v) {
    return v in _ ? _[v] : S().classList.contains(v);
  }
  function T(v) {
    _[v] || t(6, _[v] = !0, _);
  }
  function C(v) {
    (!(v in _) || _[v]) && t(6, _[v] = !1, _);
  }
  function k(v) {
    var I;
    return v in p ? (I = p[v]) !== null && I !== void 0 ? I : null : S().getAttribute(v);
  }
  function R(v, I) {
    p[v] !== I && t(7, p[v] = I, p);
  }
  function g(v) {
    (!(v in p) || p[v] != null) && t(7, p[v] = void 0, p);
  }
  function S() {
    return h;
  }
  function B(v) {
    se[v ? "unshift" : "push"](() => {
      h = v, t(5, h);
    });
  }
  return n.$$set = (v) => {
    e = X(X({}, e), tt(v)), t(10, r = me(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "id" in v && t(2, c = v.id), "persistent" in v && t(3, f = v.persistent), "validationMsg" in v && t(4, d = v.validationMsg), "$$scope" in v && t(12, a = v.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    _,
    p,
    A,
    s,
    r,
    S,
    a,
    l,
    B
  ];
}
class Cf extends ye {
  constructor(e) {
    super(), Ae(this, e, yf, vf, ge, {
      use: 0,
      class: 1,
      id: 2,
      persistent: 3,
      validationMsg: 4,
      getElement: 11
    });
  }
  get getElement() {
    return this.$$.ctx[11];
  }
}
const Ef = (n) => ({}), Kl = (n) => ({}), Sf = (n) => ({}), zl = (n) => ({}), Tf = (n) => ({}), Wl = (n) => ({}), Lf = (n) => ({}), Xl = (n) => ({});
function Yl(n) {
  let e, t = [
    { type: "hidden" },
    { required: (
      /*required*/
      n[10]
    ) },
    { disabled: (
      /*disabled*/
      n[6]
    ) },
    { value: (
      /*value*/
      n[0]
    ) },
    Ve(
      /*$$restProps*/
      n[53],
      "input$"
    )
  ], i = {};
  for (let r = 0; r < t.length; r += 1)
    i = X(i, t[r]);
  return {
    c() {
      e = x("input"), ce(e, i);
    },
    m(r, l) {
      H(r, e, l), e.autofocus && e.focus();
    },
    p(r, l) {
      ce(e, i = he(t, [
        { type: "hidden" },
        l[0] & /*required*/
        1024 && { required: (
          /*required*/
          r[10]
        ) },
        l[0] & /*disabled*/
        64 && { disabled: (
          /*disabled*/
          r[6]
        ) },
        l[0] & /*value*/
        1 && { value: (
          /*value*/
          r[0]
        ) },
        l[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          r[53],
          "input$"
        )
      ]));
    },
    d(r) {
      r && P(e);
    }
  };
}
function Zl(n) {
  let e;
  return {
    c() {
      e = x("span"), F(e, "class", "mdc-select__ripple");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function Ql(n) {
  let e, t;
  const i = [
    { id: (
      /*inputId*/
      n[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        n[42] !== ""
      )
    },
    { required: (
      /*required*/
      n[10]
    ) },
    Ve(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Of] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Mi({ props: r }), n[67](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? he(i, [
        a[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          l[11] + "-smui-label"
        ) },
        a[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            l[42] !== ""
          )
        },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          l[10]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Le(Ve(
          /*$$restProps*/
          l[53],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      512 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[67](null), ee(e, l);
    }
  };
}
function Of(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[64].label
  ), l = Re(
    r,
    n,
    /*$$scope*/
    n[87],
    Xl
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      H(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && vt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && De(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ke(
          r,
          /*$$scope*/
          a[87],
          s,
          Lf
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        Xl
      );
    },
    i(a) {
      i || (y(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && P(t), l && l.d(a);
    }
  };
}
function Jl(n) {
  let e, t;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        n[8] || /*label*/
        n[9] == null && !/*$$slots*/
        n[54].label
      )
    },
    Ve(
      /*$$restProps*/
      n[53],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [kf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Ca({ props: r }), n[69](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots, $$restProps*/
      12582912 ? he(i, [
        a[0] & /*noLabel, label*/
        768 | a[1] & /*$$slots*/
        8388608 && {
          noLabel: (
            /*noLabel*/
            l[8] || /*label*/
            l[9] == null && !/*$$slots*/
            l[54].label
          )
        },
        a[1] & /*$$restProps*/
        4194304 && Le(Ve(
          /*$$restProps*/
          l[53],
          "outline$"
        ))
      ]) : {};
      a[0] & /*inputId, required, label, noLabel*/
      3840 | a[1] & /*$selectedTextStore, $$restProps, floatingLabel, $$slots*/
      12585216 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[69](null), ee(e, l);
    }
  };
}
function xl(n) {
  let e, t;
  const i = [
    { id: (
      /*inputId*/
      n[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        n[42] !== ""
      )
    },
    { required: (
      /*required*/
      n[10]
    ) },
    Ve(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Rf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Mi({ props: r }), n[68](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? he(i, [
        a[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          l[11] + "-smui-label"
        ) },
        a[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            l[42] !== ""
          )
        },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          l[10]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Le(Ve(
          /*$$restProps*/
          l[53],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      512 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[68](null), ee(e, l);
    }
  };
}
function Rf(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[64].label
  ), l = Re(
    r,
    n,
    /*$$scope*/
    n[87],
    Wl
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      H(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && vt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && De(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ke(
          r,
          /*$$scope*/
          a[87],
          s,
          Tf
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        Wl
      );
    },
    i(a) {
      i || (y(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && P(t), l && l.d(a);
    }
  };
}
function kf(n) {
  let e, t, i = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[54].label) && xl(n);
  return {
    c() {
      i && i.c(), e = qe();
    },
    m(r, l) {
      i && i.m(r, l), H(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots*/
      8388608 && y(i, 1)) : (i = xl(r), i.c(), y(i, 1), i.m(e.parentNode, e)) : i && (Ue(), E(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      t || (y(i), t = !0);
    },
    o(r) {
      E(i), t = !1;
    },
    d(r) {
      r && P(e), i && i.d(r);
    }
  };
}
function $l(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new ya({ props: r }), n[70](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? he(i, [Le(Ve(
        /*$$restProps*/
        l[53],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[70](null), ee(e, l);
    }
  };
}
function Df(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[87],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ke(
          t,
          /*$$scope*/
          r[87],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Mf(n) {
  let e, t, i;
  const r = [
    { role: "listbox" },
    { wrapFocus: (
      /*wrapFocus*/
      n[35]
    ) },
    Ve(
      /*$$restProps*/
      n[53],
      "list$"
    )
  ];
  function l(s) {
    n[75](s);
  }
  let a = {
    $$slots: { default: [Df] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = X(a, r[s]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    n[24]), e = new uf({ props: a }), se.push(() => pt(e, "selectedIndex", l)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      n[76]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(s, o) {
        $(e, s, o), i = !0;
      },
      p(s, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? he(r, [
          r[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            s[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && Le(Ve(
            /*$$restProps*/
            s[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        33554432 && (u.$$scope = { dirty: o, ctx: s }), !t && o[0] & /*selectedIndex*/
        16777216 && (t = !0, u.selectedIndex = /*selectedIndex*/
        s[24], mt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (y(e.$$.fragment, s), i = !0);
      },
      o(s) {
        E(e.$$.fragment, s), i = !1;
      },
      d(s) {
        ee(e, s);
      }
    }
  );
}
function es(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [Ff] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new Cf({ props: r }), e.$on(
    "SMUISelectHelperText:id",
    /*SMUISelectHelperText_id_handler*/
    n[84]
  ), e.$on(
    "SMUISelectHelperText:mount",
    /*SMUISelectHelperText_mount_handler*/
    n[85]
  ), e.$on(
    "SMUISelectHelperText:unmount",
    /*SMUISelectHelperText_unmount_handler*/
    n[86]
  ), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? he(i, [Le(Ve(
        /*$$restProps*/
        l[53],
        "helperText$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function Ff(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].helperText
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[87],
    Kl
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ke(
          t,
          /*$$scope*/
          r[87],
          l,
          Ef
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        Kl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Uf(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, A, b, T, C, k, R, g, S, B, v, I, D, O, U, W, q, z, M, L, V, ue, Fe, Ie, Ye, K, J = (
    /*hiddenInput*/
    n[12] && Yl(n)
  ), Ce = (
    /*variant*/
    n[7] === "filled" && Zl()
  ), Ee = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[54].label) && Ql(n)
  ), we = (
    /*variant*/
    n[7] === "outlined" && Jl(n)
  );
  const ie = (
    /*#slots*/
    n[64].leadingIcon
  ), G = Re(
    ie,
    n,
    /*$$scope*/
    n[87],
    zl
  );
  let Ge = [
    {
      id: f = /*inputId*/
      n[11] + "-smui-selected-text"
    },
    {
      class: d = re({
        [
          /*selectedText$class*/
          n[19]
        ]: !0,
        "mdc-select__selected-text": !0
      })
    },
    { role: "button" },
    { "aria-haspopup": "listbox" },
    {
      "aria-labelledby": h = /*inputId*/
      n[11] + "-smui-label"
    },
    Ve(
      /*$$restProps*/
      n[53],
      "selectedText$"
    )
  ], Be = {};
  for (let Te = 0; Te < Ge.length; Te += 1)
    Be = X(Be, Ge[Te]);
  let At = [
    {
      class: _ = re({
        [
          /*selectedTextContainer$class*/
          n[17]
        ]: !0,
        "mdc-select__selected-text-container": !0
      })
    },
    Ve(
      /*$$restProps*/
      n[53],
      "selectedTextContainer$"
    )
  ], Z = {};
  for (let Te = 0; Te < At.length; Te += 1)
    Z = X(Z, At[Te]);
  let Se = [
    {
      class: R = re({
        [
          /*dropdownIcon$class*/
          n[21]
        ]: !0,
        "mdc-select__dropdown-icon": !0
      })
    },
    Ve(
      /*$$restProps*/
      n[53],
      "dropdownIcon$"
    )
  ], je = {};
  for (let Te = 0; Te < Se.length; Te += 1)
    je = X(je, Se[Te]);
  let Pe = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && $l(n)
  ), St = [
    {
      class: B = re({
        [
          /*anchor$class*/
          n[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": v = /*required*/
      n[10] ? "true" : void 0
    },
    {
      "aria-disabled": I = /*disabled*/
      n[6] ? "true" : void 0
    },
    { "aria-controls": (
      /*menuId*/
      n[45]
    ) },
    {
      "aria-expanded": D = /*menuOpen*/
      n[31] ? "true" : "false"
    },
    { "aria-describedby": (
      /*helperId*/
      n[30]
    ) },
    { role: "combobox" },
    { tabindex: "0" },
    /*selectAnchorAttrs*/
    n[29],
    Ve(
      /*$$restProps*/
      n[53],
      "anchor$"
    )
  ], j = {};
  for (let Te = 0; Te < St.length; Te += 1)
    j = X(j, St[Te]);
  const le = [
    {
      class: re({
        [
          /*menu$class*/
          n[22]
        ]: !0,
        "mdc-select__menu": !0,
        .../*menuClasses*/
        n[32]
      })
    },
    { id: (
      /*menuId*/
      n[45]
    ) },
    { fullWidth: !0 },
    { anchor: !1 },
    { anchorElement: (
      /*anchorElement*/
      n[33]
    ) },
    { anchorCorner: (
      /*anchorCorner*/
      n[34]
    ) },
    Ve(
      /*$$restProps*/
      n[53],
      "menu$"
    )
  ];
  function ne(Te) {
    n[77](Te);
  }
  let Xe = {
    $$slots: { default: [Mf] },
    $$scope: { ctx: n }
  };
  for (let Te = 0; Te < le.length; Te += 1)
    Xe = X(Xe, le[Te]);
  /*menuOpen*/
  n[31] !== void 0 && (Xe.open = /*menuOpen*/
  n[31]), W = new lf({ props: Xe }), se.push(() => pt(W, "open", ne)), W.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    n[78]
  ), W.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    n[79]
  ), W.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    n[80]
  ), W.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    n[81]
  );
  let ct = [
    {
      class: z = re({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-select": !0,
        "mdc-select--required": (
          /*required*/
          n[10]
        ),
        "mdc-select--disabled": (
          /*disabled*/
          n[6]
        ),
        "mdc-select--filled": (
          /*variant*/
          n[7] === "filled"
        ),
        "mdc-select--outlined": (
          /*variant*/
          n[7] === "outlined"
        ),
        "smui-select--standard": (
          /*variant*/
          n[7] === "standard"
        ),
        "mdc-select--with-leading-icon": (
          /*isUninitializedValue*/
          n[44](
            /*withLeadingIcon*/
            n[13]
          ) ? (
            /*$$slots*/
            n[54].leadingIcon
          ) : (
            /*withLeadingIcon*/
            n[13]
          )
        ),
        "mdc-select--no-label": (
          /*noLabel*/
          n[8] || /*label*/
          n[9] == null && !/*$$slots*/
          n[54].label
        ),
        "mdc-select--invalid": (
          /*invalid*/
          n[1]
        ),
        "mdc-select--activated": (
          /*menuOpen*/
          n[31]
        ),
        "mdc-data-table__pagination-rows-per-page-select": (
          /*context*/
          n[46] === "data-table:pagination"
        ),
        .../*internalClasses*/
        n[26]
      })
    },
    {
      style: M = Object.entries(
        /*internalStyles*/
        n[27]
      ).map(ts).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    Jt(
      /*$$restProps*/
      n[53],
      [
        "input$",
        "anchor$",
        "label$",
        "outline$",
        "selectedTextContainer$",
        "selectedText$",
        "dropdownIcon$",
        "ripple$",
        "menu$",
        "list$",
        "helperText$"
      ]
    )
  ], ot = {};
  for (let Te = 0; Te < ct.length; Te += 1)
    ot = X(ot, ct[Te]);
  let xe = (
    /*$$slots*/
    n[54].helperText && es(n)
  );
  return {
    c() {
      e = x("div"), J && J.c(), t = oe(), i = x("div"), Ce && Ce.c(), r = oe(), Ee && Ee.c(), l = oe(), we && we.c(), a = oe(), G && G.c(), s = oe(), o = x("span"), u = x("span"), c = ut(
        /*$selectedTextStore*/
        n[42]
      ), A = oe(), b = x("span"), T = lt("svg"), C = lt("polygon"), k = lt("polygon"), S = oe(), Pe && Pe.c(), U = oe(), te(W.$$.fragment), ue = oe(), xe && xe.c(), Fe = qe(), ce(u, Be), ce(o, Z), F(C, "class", "mdc-select__dropdown-icon-inactive"), F(C, "stroke", "none"), F(C, "fill-rule", "evenodd"), F(C, "points", "7 10 12 15 17 10"), F(k, "class", "mdc-select__dropdown-icon-active"), F(k, "stroke", "none"), F(k, "fill-rule", "evenodd"), F(k, "points", "7 15 12 10 17 15"), F(T, "class", "mdc-select__dropdown-icon-graphic"), F(T, "viewBox", "7 10 10 5"), F(T, "focusable", "false"), ce(b, je), ce(i, j), ce(e, ot);
    },
    m(Te, ae) {
      H(Te, e, ae), J && J.m(e, null), Q(e, t), Q(e, i), Ce && Ce.m(i, null), Q(i, r), Ee && Ee.m(i, null), Q(i, l), we && we.m(i, null), Q(i, a), G && G.m(i, null), Q(i, s), Q(i, o), Q(o, u), Q(u, c), Q(i, A), Q(i, b), Q(b, T), Q(T, C), Q(T, k), Q(i, S), Pe && Pe.m(i, null), n[71](i), Q(e, U), $(W, e, null), n[82](e), H(Te, ue, ae), xe && xe.m(Te, ae), H(Te, Fe, ae), Ie = !0, Ye || (K = [
        de(m = $e.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        de(p = $e.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        de(g = $e.call(
          null,
          b,
          /*dropdownIcon$use*/
          n[20]
        )),
        de(O = $e.call(
          null,
          i,
          /*anchor$use*/
          n[14]
        )),
        fe(
          i,
          "focus",
          /*focus_handler_1*/
          n[72]
        ),
        fe(
          i,
          "blur",
          /*blur_handler_1*/
          n[73]
        ),
        fe(
          i,
          "click",
          /*click_handler*/
          n[74]
        ),
        fe(i, "keydown", function() {
          pe(
            /*instance*/
            n[23] && /*instance*/
            n[23].handleKeydown.bind(
              /*instance*/
              n[23]
            )
          ) && /*instance*/
          (n[23] && /*instance*/
          n[23].handleKeydown.bind(
            /*instance*/
            n[23]
          )).apply(this, arguments);
        }),
        fe(
          i,
          "focus",
          /*focus_handler*/
          n[65]
        ),
        fe(
          i,
          "blur",
          /*blur_handler*/
          n[66]
        ),
        de(L = Rt.call(null, e, {
          ripple: (
            /*variant*/
            n[7] === "filled"
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          ),
          addStyle: (
            /*addStyle*/
            n[52]
          )
        })),
        de(ef.call(null, e, {
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          )
        })),
        de(V = $e.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        de(
          /*forwardEvents*/
          n[43].call(null, e)
        ),
        fe(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[49]
        ),
        fe(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          n[83]
        )
      ], Ye = !0);
    },
    p(Te, ae) {
      n = Te, /*hiddenInput*/
      n[12] ? J ? J.p(n, ae) : (J = Yl(n), J.c(), J.m(e, t)) : J && (J.d(1), J = null), /*variant*/
      n[7] === "filled" ? Ce || (Ce = Zl(), Ce.c(), Ce.m(i, r)) : Ce && (Ce.d(1), Ce = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[54].label) ? Ee ? (Ee.p(n, ae), ae[0] & /*variant, noLabel, label*/
      896 | ae[1] & /*$$slots*/
      8388608 && y(Ee, 1)) : (Ee = Ql(n), Ee.c(), y(Ee, 1), Ee.m(i, l)) : Ee && (Ue(), E(Ee, 1, 1, () => {
        Ee = null;
      }), Ne()), /*variant*/
      n[7] === "outlined" ? we ? (we.p(n, ae), ae[0] & /*variant*/
      128 && y(we, 1)) : (we = Jl(n), we.c(), y(we, 1), we.m(i, a)) : we && (Ue(), E(we, 1, 1, () => {
        we = null;
      }), Ne()), G && G.p && (!Ie || ae[2] & /*$$scope*/
      33554432) && De(
        G,
        ie,
        n,
        /*$$scope*/
        n[87],
        Ie ? ke(
          ie,
          /*$$scope*/
          n[87],
          ae,
          Sf
        ) : Me(
          /*$$scope*/
          n[87]
        ),
        zl
      ), (!Ie || ae[1] & /*$selectedTextStore*/
      2048) && _o(
        c,
        /*$selectedTextStore*/
        n[42],
        Be.contenteditable
      ), ce(u, Be = he(Ge, [
        (!Ie || ae[0] & /*inputId*/
        2048 && f !== (f = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: f },
        (!Ie || ae[0] & /*selectedText$class*/
        524288 && d !== (d = re({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: d },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!Ie || ae[0] & /*inputId*/
        2048 && h !== (h = /*inputId*/
        n[11] + "-smui-label")) && {
          "aria-labelledby": h
        },
        ae[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          n[53],
          "selectedText$"
        )
      ])), m && pe(m.update) && ae[0] & /*selectedText$use*/
      262144 && m.update.call(
        null,
        /*selectedText$use*/
        n[18]
      ), ce(o, Z = he(At, [
        (!Ie || ae[0] & /*selectedTextContainer$class*/
        131072 && _ !== (_ = re({
          [
            /*selectedTextContainer$class*/
            n[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: _ },
        ae[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          n[53],
          "selectedTextContainer$"
        )
      ])), p && pe(p.update) && ae[0] & /*selectedTextContainer$use*/
      65536 && p.update.call(
        null,
        /*selectedTextContainer$use*/
        n[16]
      ), ce(b, je = he(Se, [
        (!Ie || ae[0] & /*dropdownIcon$class*/
        2097152 && R !== (R = re({
          [
            /*dropdownIcon$class*/
            n[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: R },
        ae[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          n[53],
          "dropdownIcon$"
        )
      ])), g && pe(g.update) && ae[0] & /*dropdownIcon$use*/
      1048576 && g.update.call(
        null,
        /*dropdownIcon$use*/
        n[20]
      ), /*variant*/
      n[7] !== "outlined" && /*ripple*/
      n[5] ? Pe ? (Pe.p(n, ae), ae[0] & /*variant, ripple*/
      160 && y(Pe, 1)) : (Pe = $l(n), Pe.c(), y(Pe, 1), Pe.m(i, null)) : Pe && (Ue(), E(Pe, 1, 1, () => {
        Pe = null;
      }), Ne()), ce(i, j = he(St, [
        (!Ie || ae[0] & /*anchor$class*/
        32768 && B !== (B = re({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: B },
        (!Ie || ae[0] & /*required*/
        1024 && v !== (v = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": v
        },
        (!Ie || ae[0] & /*disabled*/
        64 && I !== (I = /*disabled*/
        n[6] ? "true" : void 0)) && {
          "aria-disabled": I
        },
        { "aria-controls": (
          /*menuId*/
          n[45]
        ) },
        (!Ie || ae[1] & /*menuOpen*/
        1 && D !== (D = /*menuOpen*/
        n[31] ? "true" : "false")) && {
          "aria-expanded": D
        },
        (!Ie || ae[0] & /*helperId*/
        1073741824) && { "aria-describedby": (
          /*helperId*/
          n[30]
        ) },
        { role: "combobox" },
        { tabindex: "0" },
        ae[0] & /*selectAnchorAttrs*/
        536870912 && /*selectAnchorAttrs*/
        n[29],
        ae[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          n[53],
          "anchor$"
        )
      ])), O && pe(O.update) && ae[0] & /*anchor$use*/
      16384 && O.update.call(
        null,
        /*anchor$use*/
        n[14]
      );
      const qt = ae[0] & /*menu$class*/
      4194304 | ae[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? he(le, [
        ae[0] & /*menu$class*/
        4194304 | ae[1] & /*menuClasses*/
        2 && {
          class: re({
            [
              /*menu$class*/
              n[22]
            ]: !0,
            "mdc-select__menu": !0,
            .../*menuClasses*/
            n[32]
          })
        },
        ae[1] & /*menuId*/
        16384 && { id: (
          /*menuId*/
          n[45]
        ) },
        le[2],
        le[3],
        ae[1] & /*anchorElement*/
        4 && { anchorElement: (
          /*anchorElement*/
          n[33]
        ) },
        ae[1] & /*anchorCorner*/
        8 && { anchorCorner: (
          /*anchorCorner*/
          n[34]
        ) },
        ae[1] & /*$$restProps*/
        4194304 && Le(Ve(
          /*$$restProps*/
          n[53],
          "menu$"
        ))
      ]) : {};
      ae[0] & /*selectedIndex*/
      16777216 | ae[1] & /*wrapFocus, $$restProps, list*/
      4194352 | ae[2] & /*$$scope*/
      33554432 && (qt.$$scope = { dirty: ae, ctx: n }), !q && ae[1] & /*menuOpen*/
      1 && (q = !0, qt.open = /*menuOpen*/
      n[31], mt(() => q = !1)), W.$set(qt), ce(e, ot = he(ct, [
        (!Ie || ae[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | ae[1] & /*$$slots, menuOpen*/
        8388609 && z !== (z = re({
          [
            /*className*/
            n[3]
          ]: !0,
          "mdc-select": !0,
          "mdc-select--required": (
            /*required*/
            n[10]
          ),
          "mdc-select--disabled": (
            /*disabled*/
            n[6]
          ),
          "mdc-select--filled": (
            /*variant*/
            n[7] === "filled"
          ),
          "mdc-select--outlined": (
            /*variant*/
            n[7] === "outlined"
          ),
          "smui-select--standard": (
            /*variant*/
            n[7] === "standard"
          ),
          "mdc-select--with-leading-icon": (
            /*isUninitializedValue*/
            n[44](
              /*withLeadingIcon*/
              n[13]
            ) ? (
              /*$$slots*/
              n[54].leadingIcon
            ) : (
              /*withLeadingIcon*/
              n[13]
            )
          ),
          "mdc-select--no-label": (
            /*noLabel*/
            n[8] || /*label*/
            n[9] == null && !/*$$slots*/
            n[54].label
          ),
          "mdc-select--invalid": (
            /*invalid*/
            n[1]
          ),
          "mdc-select--activated": (
            /*menuOpen*/
            n[31]
          ),
          "mdc-data-table__pagination-rows-per-page-select": (
            /*context*/
            n[46] === "data-table:pagination"
          ),
          .../*internalClasses*/
          n[26]
        }))) && { class: z },
        (!Ie || ae[0] & /*internalStyles, style*/
        134217744 && M !== (M = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(ts).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: M },
        ae[1] & /*$$restProps*/
        4194304 && Jt(
          /*$$restProps*/
          n[53],
          [
            "input$",
            "anchor$",
            "label$",
            "outline$",
            "selectedTextContainer$",
            "selectedText$",
            "dropdownIcon$",
            "ripple$",
            "menu$",
            "list$",
            "helperText$"
          ]
        )
      ])), L && pe(L.update) && ae[0] & /*variant*/
      128 && L.update.call(null, {
        ripple: (
          /*variant*/
          n[7] === "filled"
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          n[50]
        ),
        removeClass: (
          /*removeClass*/
          n[51]
        ),
        addStyle: (
          /*addStyle*/
          n[52]
        )
      }), V && pe(V.update) && ae[0] & /*use*/
      4 && V.update.call(
        null,
        /*use*/
        n[2]
      ), /*$$slots*/
      n[54].helperText ? xe ? (xe.p(n, ae), ae[1] & /*$$slots*/
      8388608 && y(xe, 1)) : (xe = es(n), xe.c(), y(xe, 1), xe.m(Fe.parentNode, Fe)) : xe && (Ue(), E(xe, 1, 1, () => {
        xe = null;
      }), Ne());
    },
    i(Te) {
      Ie || (y(Ee), y(we), y(G, Te), y(Pe), y(W.$$.fragment, Te), y(xe), Ie = !0);
    },
    o(Te) {
      E(Ee), E(we), E(G, Te), E(Pe), E(W.$$.fragment, Te), E(xe), Ie = !1;
    },
    d(Te) {
      Te && (P(e), P(ue), P(Fe)), J && J.d(), Ce && Ce.d(), Ee && Ee.d(), we && we.d(), G && G.d(Te), Pe && Pe.d(), n[71](null), ee(W), n[82](null), xe && xe.d(Te), Ye = !1, Qe(K);
    }
  };
}
let Nf = 0;
function wf(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (Pf(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function Pf(n) {
  return "touches" in n;
}
const ts = ([n, e]) => `${n}: ${e};`;
function Hf(n, e, t) {
  const i = [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "getUseDefaultValidation",
    "setUseDefaultValidation",
    "focus",
    "layout",
    "getElement"
  ];
  let r = me(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = Fr(s);
  var c;
  const f = nt(et());
  let d = () => {
  };
  function h(w) {
    return w === d;
  }
  let { use: m = [] } = e, { class: _ = "" } = e, { style: p = "" } = e, { ripple: A = !0 } = e, { disabled: b = !1 } = e, { variant: T = "standard" } = e, { noLabel: C = !1 } = e, { label: k = void 0 } = e, { value: R = "" } = e, { key: g = (w) => w } = e, { dirty: S = !1 } = e, { invalid: B = d } = e, { updateInvalid: v = h(B) } = e;
  const I = h(B);
  h(B) && (B = !1);
  let { required: D = !1 } = e, { inputId: O = "SMUI-select-" + Nf++ } = e, { hiddenInput: U = !1 } = e, { withLeadingIcon: W = d } = e, { anchor$use: q = [] } = e, { anchor$class: z = "" } = e, { selectedTextContainer$use: M = [] } = e, { selectedTextContainer$class: L = "" } = e, { selectedText$use: V = [] } = e, { selectedText$class: ue = "" } = e, { dropdownIcon$use: Fe = [] } = e, { dropdownIcon$class: Ie = "" } = e, { menu$class: Ye = "" } = e, K, J, Ce = {}, Ee = {}, we, ie = {}, G = -1, Ge = (c = r.menu$id) !== null && c !== void 0 ? c : O + "-menu", Be, At = ze("SMUI:addLayoutListener"), Z, Se = !1, je = {}, Pe, St, j = !1, le, ne = ze("SMUI:select:context"), Xe, ct, ot, xe, Te;
  Ke("SMUI:list:role", ""), Ke("SMUI:list:nav", !1);
  const ae = yt("");
  rt(n, ae, (w) => t(42, l = w)), Ke("SMUI:select:selectedText", ae);
  const qt = yt(R);
  rt(n, qt, (w) => t(90, a = w)), Ke("SMUI:select:value", qt);
  let Y = G;
  At && (Z = At(gi)), st(() => (t(23, J = new Yc(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (w) => {
        Vt(ae, l = w, l);
      },
      isSelectAnchorFocused: () => document.activeElement === we,
      getSelectAnchorAttr: Bi,
      setSelectAnchorAttr: Vi,
      removeSelectAnchorAttr: ji,
      addMenuClass: Pi,
      removeMenuClass: Hi,
      openMenu: () => {
        t(31, Se = !0);
      },
      closeMenu: () => {
        t(31, Se = !1);
      },
      getAnchorElement: () => we,
      setMenuAnchorElement: (w) => {
        t(33, Pe = w);
      },
      setMenuAnchorCorner: (w) => {
        t(34, St = w);
      },
      setMenuWrapFocus: (w) => {
        t(35, j = w);
      },
      getSelectedIndex: () => G,
      setSelectedIndex: (w) => {
        t(63, Y = w), t(24, G = w), t(0, R = Rn()[G]);
      },
      focusMenuItemAtIndex: (w) => {
        le.focusItemAtIndex(w);
      },
      getMenuItemCount: () => le.items.length,
      getMenuItemValues: () => Rn().map(g),
      getMenuItemTextAtIndex: (w) => le.getPrimaryTextAtIndex(w),
      isTypeaheadInProgress: () => le.typeaheadInProgress,
      typeaheadMatchItem: (w, Pt) => le.typeaheadMatchItem(w, Pt),
      // getCommonAdapterMethods
      addClass: it,
      removeClass: $t,
      hasClass: ve,
      setRippleCenter: (w) => xe && xe.setRippleCenter(w),
      activateBottomLine: () => xe && xe.activate(),
      deactivateBottomLine: () => xe && xe.deactivate(),
      notifyChange: (w) => {
        t(55, S = !0), v && t(1, B = !J.isValid()), be(kn(), "SMUISelect:change", { value: R, index: G }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!Te,
      notchOutline: (w) => Te && Te.notch(w),
      closeOutline: () => Te && Te.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!ot,
      floatLabel: (w) => ot && ot.float(w),
      getLabelWidth: () => ot ? ot.getWidth() : 0,
      setLabelRequired: (w) => ot && ot.setRequired(w)
    },
    {
      get helperText() {
        return ct;
      },
      get leadingIcon() {
        return Xe;
      }
    }
  )), t(24, G = Rn().indexOf(R)), J.init(), pi(I), () => {
    J.destroy();
  })), xt(() => {
    Z && Z();
  });
  function _e(w) {
    t(37, Xe = w.detail);
  }
  function ve(w) {
    return w in Ce ? Ce[w] : kn().classList.contains(w);
  }
  function it(w) {
    Ce[w] || t(26, Ce[w] = !0, Ce);
  }
  function $t(w) {
    (!(w in Ce) || Ce[w]) && t(26, Ce[w] = !1, Ce);
  }
  function xn(w, Pt) {
    Ee[w] != Pt && (Pt === "" || Pt == null ? (delete Ee[w], t(27, Ee)) : t(27, Ee[w] = Pt, Ee));
  }
  function Pi(w) {
    je[w] || t(32, je[w] = !0, je);
  }
  function Hi(w) {
    (!(w in je) || je[w]) && t(32, je[w] = !1, je);
  }
  function Bi(w) {
    var Pt;
    return w in ie ? (Pt = ie[w]) !== null && Pt !== void 0 ? Pt : null : kn().getAttribute(w);
  }
  function Vi(w, Pt) {
    ie[w] !== Pt && t(29, ie[w] = Pt, ie);
  }
  function ji(w) {
    (!(w in ie) || ie[w] != null) && t(29, ie[w] = void 0, ie);
  }
  function Rn() {
    return le.getOrderedList().map((w) => w.getValue());
  }
  function qi() {
    return J.getUseDefaultValidation();
  }
  function pi(w) {
    J.setUseDefaultValidation(w);
  }
  function Gi() {
    we.focus();
  }
  function gi() {
    J.layout();
  }
  function kn() {
    return K;
  }
  function Ki(w) {
    Qn.call(this, n, w);
  }
  function zi(w) {
    Qn.call(this, n, w);
  }
  function Wi(w) {
    se[w ? "unshift" : "push"](() => {
      ot = w, t(39, ot);
    });
  }
  function Xi(w) {
    se[w ? "unshift" : "push"](() => {
      ot = w, t(39, ot);
    });
  }
  function Yi(w) {
    se[w ? "unshift" : "push"](() => {
      Te = w, t(41, Te);
    });
  }
  function Zi(w) {
    se[w ? "unshift" : "push"](() => {
      xe = w, t(40, xe);
    });
  }
  function Qi(w) {
    se[w ? "unshift" : "push"](() => {
      we = w, t(28, we);
    });
  }
  const Ji = () => J && J.handleFocus(), xi = () => J && J.handleBlur(), $i = (w) => {
    we.focus(), J && J.handleClick(wf(w));
  };
  function er(w) {
    G = w, t(24, G);
  }
  const tr = (w) => t(36, le = w.detail);
  function nr(w) {
    Se = w, t(31, Se);
  }
  const ir = (w) => J && J.handleMenuItemAction(w.detail.index), rr = () => J && J.handleMenuClosing(), N = () => J && J.handleMenuClosed(), dt = () => J && J.handleMenuOpened();
  function _i(w) {
    se[w ? "unshift" : "push"](() => {
      K = w, t(25, K);
    });
  }
  const lr = () => t(37, Xe = void 0), $n = (w) => t(30, Be = w.detail), ei = (w) => t(38, ct = w.detail), lo = () => {
    t(30, Be = void 0), t(38, ct = void 0);
  };
  return n.$$set = (w) => {
    e = X(X({}, e), tt(w)), t(53, r = me(e, i)), "use" in w && t(2, m = w.use), "class" in w && t(3, _ = w.class), "style" in w && t(4, p = w.style), "ripple" in w && t(5, A = w.ripple), "disabled" in w && t(6, b = w.disabled), "variant" in w && t(7, T = w.variant), "noLabel" in w && t(8, C = w.noLabel), "label" in w && t(9, k = w.label), "value" in w && t(0, R = w.value), "key" in w && t(56, g = w.key), "dirty" in w && t(55, S = w.dirty), "invalid" in w && t(1, B = w.invalid), "updateInvalid" in w && t(57, v = w.updateInvalid), "required" in w && t(10, D = w.required), "inputId" in w && t(11, O = w.inputId), "hiddenInput" in w && t(12, U = w.hiddenInput), "withLeadingIcon" in w && t(13, W = w.withLeadingIcon), "anchor$use" in w && t(14, q = w.anchor$use), "anchor$class" in w && t(15, z = w.anchor$class), "selectedTextContainer$use" in w && t(16, M = w.selectedTextContainer$use), "selectedTextContainer$class" in w && t(17, L = w.selectedTextContainer$class), "selectedText$use" in w && t(18, V = w.selectedText$use), "selectedText$class" in w && t(19, ue = w.selectedText$class), "dropdownIcon$use" in w && t(20, Fe = w.dropdownIcon$use), "dropdownIcon$class" in w && t(21, Ie = w.dropdownIcon$class), "menu$class" in w && t(22, Ye = w.menu$class), "$$scope" in w && t(87, o = w.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    2 && Y !== G)
      if (t(63, Y = G), J)
        J.setSelectedIndex(
          G,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const w = Rn();
        R !== w[G] && t(0, R = w[G]);
      }
    n.$$.dirty[0] & /*value*/
    1 && Vt(qt, a = R, a), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    33554432 && J && J.getValue() !== g(R) && J.setValue(g(R)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && J && J.getDisabled() !== b && J.setDisabled(b), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && J && S && J.isValid() !== !B && (v ? t(1, B = !J.isValid()) : J.setValid(!B)), n.$$.dirty[0] & /*instance, required*/
    8389632 && J && J.getRequired() !== D && J.setRequired(D);
  }, [
    R,
    B,
    m,
    _,
    p,
    A,
    b,
    T,
    C,
    k,
    D,
    O,
    U,
    W,
    q,
    z,
    M,
    L,
    V,
    ue,
    Fe,
    Ie,
    Ye,
    J,
    G,
    K,
    Ce,
    Ee,
    we,
    ie,
    Be,
    Se,
    je,
    Pe,
    St,
    j,
    le,
    Xe,
    ct,
    ot,
    xe,
    Te,
    l,
    f,
    h,
    Ge,
    ne,
    ae,
    qt,
    _e,
    it,
    $t,
    xn,
    r,
    u,
    S,
    g,
    v,
    qi,
    pi,
    Gi,
    gi,
    kn,
    Y,
    s,
    Ki,
    zi,
    Wi,
    Xi,
    Yi,
    Zi,
    Qi,
    Ji,
    xi,
    $i,
    er,
    tr,
    nr,
    ir,
    rr,
    N,
    dt,
    _i,
    lr,
    $n,
    ei,
    lo,
    o
  ];
}
class Bf extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      Hf,
      Uf,
      ge,
      {
        use: 2,
        class: 3,
        style: 4,
        ripple: 5,
        disabled: 6,
        variant: 7,
        noLabel: 8,
        label: 9,
        value: 0,
        key: 56,
        dirty: 55,
        invalid: 1,
        updateInvalid: 57,
        required: 10,
        inputId: 11,
        hiddenInput: 12,
        withLeadingIcon: 13,
        anchor$use: 14,
        anchor$class: 15,
        selectedTextContainer$use: 16,
        selectedTextContainer$class: 17,
        selectedText$use: 18,
        selectedText$class: 19,
        dropdownIcon$use: 20,
        dropdownIcon$class: 21,
        menu$class: 22,
        getUseDefaultValidation: 58,
        setUseDefaultValidation: 59,
        focus: 60,
        layout: 61,
        getElement: 62
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get getUseDefaultValidation() {
    return this.$$.ctx[58];
  }
  get setUseDefaultValidation() {
    return this.$$.ctx[59];
  }
  get focus() {
    return this.$$.ctx[60];
  }
  get layout() {
    return this.$$.ctx[61];
  }
  get getElement() {
    return this.$$.ctx[62];
  }
}
function Vf(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      8192) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? ke(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function jf(n) {
  let e, t;
  const i = [
    { use: (
      /*usePass*/
      n[3]
    ) },
    { "data-value": (
      /*value*/
      n[0]
    ) },
    { value: (
      /*value*/
      n[0]
    ) },
    { selected: (
      /*selected*/
      n[2]
    ) },
    /*$$restProps*/
    n[6]
  ];
  let r = {
    $$slots: { default: [Vf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = X(r, i[l]);
  return e = new mf({ props: r }), n[12](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, [a]) {
      const s = a & /*usePass, value, selected, $$restProps*/
      77 ? he(i, [
        a & /*usePass*/
        8 && { use: (
          /*usePass*/
          l[3]
        ) },
        a & /*value*/
        1 && { "data-value": (
          /*value*/
          l[0]
        ) },
        a & /*value*/
        1 && { value: (
          /*value*/
          l[0]
        ) },
        a & /*selected*/
        4 && { selected: (
          /*selected*/
          l[2]
        ) },
        a & /*$$restProps*/
        64 && Le(
          /*$$restProps*/
          l[6]
        )
      ]) : {};
      a & /*$$scope*/
      8192 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[12](null), ee(e, l);
    }
  };
}
function qf(n, e, t) {
  let i, r;
  const l = ["use", "class", "value", "getElement"];
  let a = me(e, l), s, o, { $$slots: u = {}, $$scope: c } = e;
  const f = nt(et());
  let { use: d = [] } = e;
  const h = "";
  let { value: m = "" } = e, _;
  const p = ze("SMUI:select:selectedText");
  rt(n, p, (k) => t(14, s = k));
  const A = ze("SMUI:select:value");
  rt(n, A, (k) => t(10, o = k)), Ke("SMUI:list:item:role", "option"), st(b), xt(b);
  function b() {
    r && _ && Vt(p, s = _.getPrimaryText(), s);
  }
  function T() {
    return _.getElement();
  }
  function C(k) {
    se[k ? "unshift" : "push"](() => {
      _ = k, t(1, _);
    });
  }
  return n.$$set = (k) => {
    e = X(X({}, e), tt(k)), t(6, a = me(e, l)), "use" in k && t(7, d = k.use), "value" in k && t(0, m = k.value), "$$scope" in k && t(13, c = k.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    128 && t(3, i = [f, ...d]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, r = m != null && m !== "" && o === m);
  }, [
    m,
    _,
    r,
    i,
    p,
    A,
    a,
    d,
    h,
    T,
    o,
    u,
    C,
    c
  ];
}
class Gf extends ye {
  constructor(e) {
    super(), Ae(this, e, qf, jf, ge, {
      use: 7,
      class: 8,
      value: 0,
      getElement: 9
    });
  }
  get class() {
    return this.$$.ctx[8];
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
function ns(n, e, t) {
  const i = n.slice();
  return i[11] = e[t], i[13] = t, i;
}
function Kf(n) {
  let e = (
    /*d*/
    n[11].label + ""
  ), t;
  return {
    c() {
      t = ut(e);
    },
    m(i, r) {
      H(i, t, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && vt(t, e);
    },
    d(i) {
      i && P(t);
    }
  };
}
function is(n) {
  let e, t;
  return e = new Gf({
    props: {
      value: (
        /*d*/
        n[11].value
      ),
      $$slots: { default: [Kf] },
      $$scope: { ctx: n }
    }
  }), e.$on(
    "click",
    /*setSelectedIndex*/
    n[5](
      /*index*/
      n[13]
    )
  ), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*data*/
      2 && (l.value = /*d*/
      i[11].value), r & /*$$scope, data*/
      16386 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function zf(n) {
  let e, t, i = Dt(
    /*data*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = is(ns(n, i, a));
  const l = (a) => E(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = qe();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      H(a, e, s), t = !0;
    },
    p(a, s) {
      if (s & /*data, setSelectedIndex*/
      34) {
        i = Dt(
          /*data*/
          a[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = ns(a, i, o);
          r[o] ? (r[o].p(u, s), y(r[o], 1)) : (r[o] = is(u), r[o].c(), y(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          l(o);
        Ne();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          y(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        E(r[s]);
      t = !1;
    },
    d(a) {
      a && P(e), Ur(r, a);
    }
  };
}
function Wf(n) {
  let e, t, i;
  function r(a) {
    n[10](a);
  }
  let l = {
    disabled: (
      /*disabled*/
      n[4]
    ),
    key: Xf,
    label: (
      /*label*/
      n[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      n[3]
    ),
    $$slots: { default: [zf] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Bf({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, [s]) {
        const o = {};
        s & /*disabled*/
        16 && (o.disabled = /*disabled*/
        a[4]), s & /*label*/
        4 && (o.label = /*label*/
        a[2]), s & /*required*/
        8 && (o.required = /*required*/
        a[3]), s & /*$$scope, data*/
        16386 && (o.$$scope = { dirty: s, ctx: a }), !t && s & /*value*/
        1 && (t = !0, o.value = /*value*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        E(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
const Xf = (n) => `${n ?? ""}`;
function Yf(n, e, t) {
  let { data: i = [] } = e, { placeholder: r = "" } = e, { label: l = "" } = e, { description: a = "" } = e, { value: s = "" } = e, { required: o = !1 } = e, { size: u = "sm" } = e, { selectedOptionIndex: c = -1 } = e, { disabled: f = !1 } = e;
  function d(m) {
    return () => t(6, c = m);
  }
  function h(m) {
    s = m, t(0, s);
  }
  return n.$$set = (m) => {
    "data" in m && t(1, i = m.data), "placeholder" in m && t(7, r = m.placeholder), "label" in m && t(2, l = m.label), "description" in m && t(8, a = m.description), "value" in m && t(0, s = m.value), "required" in m && t(3, o = m.required), "size" in m && t(9, u = m.size), "selectedOptionIndex" in m && t(6, c = m.selectedOptionIndex), "disabled" in m && t(4, f = m.disabled);
  }, [
    s,
    i,
    l,
    o,
    f,
    d,
    c,
    r,
    a,
    u,
    h
  ];
}
class Oa extends ye {
  constructor(e) {
    super(), Ae(this, e, Yf, Wf, ge, {
      data: 1,
      placeholder: 7,
      label: 2,
      description: 8,
      value: 0,
      required: 3,
      size: 9,
      selectedOptionIndex: 6,
      disabled: 4
    });
  }
}
Lt({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Lt({
  class: "mdc-dialog__title",
  tag: "h2"
});
Lt({
  class: "mdc-dialog__content",
  tag: "div"
});
Lt({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
function Zf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[12].default
  ), o = Re(
    s,
    n,
    /*$$scope*/
    n[11],
    null
  );
  let u = [
    {
      class: t = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "smui-paper": !0,
        "smui-paper--raised": (
          /*variant*/
          n[2] === "raised"
        ),
        "smui-paper--unelevated": (
          /*variant*/
          n[2] === "unelevated"
        ),
        "smui-paper--outlined": (
          /*variant*/
          n[2] === "outlined"
        ),
        ["smui-paper--elevation-z" + /*elevation*/
        n[5]]: (
          /*elevation*/
          n[5] !== 0 && /*variant*/
          n[2] === "raised"
        ),
        "smui-paper--rounded": !/*square*/
        n[3],
        ["smui-paper--color-" + /*color*/
        n[4]]: (
          /*color*/
          n[4] !== "default"
        ),
        "smui-paper-transition": (
          /*transition*/
          n[6]
        )
      })
    },
    /*$$restProps*/
    n[9]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = X(c, u[f]);
  return {
    c() {
      e = x("div"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      H(f, e, d), o && o.m(e, null), n[13](e), r = !0, l || (a = [
        de(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[8].call(null, e)
        )
      ], l = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      2048) && De(
        o,
        s,
        f,
        /*$$scope*/
        f[11],
        r ? ke(
          s,
          /*$$scope*/
          f[11],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[11]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || d & /*className, variant, elevation, square, color, transition*/
        126 && t !== (t = re({
          [
            /*className*/
            f[1]
          ]: !0,
          "smui-paper": !0,
          "smui-paper--raised": (
            /*variant*/
            f[2] === "raised"
          ),
          "smui-paper--unelevated": (
            /*variant*/
            f[2] === "unelevated"
          ),
          "smui-paper--outlined": (
            /*variant*/
            f[2] === "outlined"
          ),
          ["smui-paper--elevation-z" + /*elevation*/
          f[5]]: (
            /*elevation*/
            f[5] !== 0 && /*variant*/
            f[2] === "raised"
          ),
          "smui-paper--rounded": !/*square*/
          f[3],
          ["smui-paper--color-" + /*color*/
          f[4]]: (
            /*color*/
            f[4] !== "default"
          ),
          "smui-paper-transition": (
            /*transition*/
            f[6]
          )
        }))) && { class: t },
        d & /*$$restProps*/
        512 && /*$$restProps*/
        f[9]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      E(o, f), r = !1;
    },
    d(f) {
      f && P(e), o && o.d(f), n[13](null), l = !1, Qe(a);
    }
  };
}
function Qf(n, e, t) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: f = !1 } = e, { color: d = "default" } = e, { elevation: h = 1 } = e, { transition: m = !1 } = e, _;
  function p() {
    return _;
  }
  function A(b) {
    se[b ? "unshift" : "push"](() => {
      _ = b, t(7, _);
    });
  }
  return n.$$set = (b) => {
    e = X(X({}, e), tt(b)), t(9, r = me(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "variant" in b && t(2, c = b.variant), "square" in b && t(3, f = b.square), "color" in b && t(4, d = b.color), "elevation" in b && t(5, h = b.elevation), "transition" in b && t(6, m = b.transition), "$$scope" in b && t(11, a = b.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    m,
    _,
    s,
    r,
    p,
    a,
    l,
    A
  ];
}
class Ra extends ye {
  constructor(e) {
    super(), Ae(this, e, Qf, Zf, ge, {
      use: 0,
      class: 1,
      variant: 2,
      square: 3,
      color: 4,
      elevation: 5,
      transition: 6,
      getElement: 10
    });
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
Lt({
  class: "smui-paper__content",
  tag: "div"
});
Lt({
  class: "smui-paper__title",
  tag: "h5"
});
Lt({
  class: "smui-paper__subtitle",
  tag: "h6"
});
/**
 * @license
 * Copyright 2020 Google Inc.
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
var Tr;
(function(n) {
  n.POLITE = "polite", n.ASSERTIVE = "assertive";
})(Tr || (Tr = {}));
var Jf = "data-mdc-dom-announce";
function xf(n, e) {
  $f.getInstance().say(n, e);
}
var $f = (
  /** @class */
  function() {
    function n() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return n.getInstance = function() {
      return n.instance || (n.instance = new n()), n.instance;
    }, n.prototype.say = function(e, t) {
      var i, r, l = (i = t == null ? void 0 : t.priority) !== null && i !== void 0 ? i : Tr.POLITE, a = (r = t == null ? void 0 : t.ownerDocument) !== null && r !== void 0 ? r : document, s = this.getLiveRegion(l, a);
      s.textContent = "", setTimeout(function() {
        s.textContent = e, a.addEventListener("click", o);
      }, 1);
      function o() {
        s.textContent = "", a.removeEventListener("click", o);
      }
    }, n.prototype.getLiveRegion = function(e, t) {
      var i = this.liveRegions.get(t);
      i || (i = /* @__PURE__ */ new Map(), this.liveRegions.set(t, i));
      var r = i.get(e);
      if (r && t.body.contains(r))
        return r;
      var l = this.createLiveRegion(e, t);
      return i.set(e, l), l;
    }, n.prototype.createLiveRegion = function(e, t) {
      var i = t.createElement("div");
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Jf, "true"), t.body.appendChild(i), i;
    }, n;
  }()
);
/**
 * @license
 * Copyright 2020 Google Inc.
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
var fn;
(function(n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.CLICK = 1] = "CLICK", n[n.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", n[n.DELETE_KEY = 3] = "DELETE_KEY", n[n.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", n[n.ENTER_KEY = 5] = "ENTER_KEY";
})(fn || (fn = {}));
var Yt = {
  ARIA_HIDDEN: "aria-hidden",
  INTERACTION_EVENT: "MDCChipTrailingAction:interaction",
  NAVIGATION_EVENT: "MDCChipTrailingAction:navigation",
  TAB_INDEX: "tabindex"
};
/**
 * @license
 * Copyright 2020 Google Inc.
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
var ka = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Yt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          focus: function() {
          },
          getAttribute: function() {
            return null;
          },
          setAttribute: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleClick = function(t) {
      t.stopPropagation(), this.adapter.notifyInteraction(fn.CLICK);
    }, e.prototype.handleKeydown = function(t) {
      t.stopPropagation();
      var i = ht(t);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (Po(t)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Yt.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Yt.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Yt.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(t) {
      var i = t === He.ENTER || t === He.SPACEBAR, r = t === He.BACKSPACE || t === He.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(t) {
      return t === He.SPACEBAR ? fn.SPACEBAR_KEY : t === He.ENTER ? fn.ENTER_KEY : t === He.DELETE ? fn.DELETE_KEY : t === He.BACKSPACE ? fn.BACKSPACE_KEY : fn.UNSPECIFIED;
    }, e;
  }(Et)
);
/**
 * @license
 * Copyright 2020 Google Inc.
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
var Da = (
  /** @class */
  function(n) {
    at(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(t) {
      return new e(t);
    }, e.prototype.initialize = function(t) {
      t === void 0 && (t = function(r, l) {
        return new Si(r, l);
      });
      var i = Si.createAdapter(this);
      this.rippleSurface = t(this.root, new Di(i));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this;
      this.handleClick = function(i) {
        t.foundation.handleClick(i);
      }, this.handleKeydown = function(i) {
        t.foundation.handleKeydown(i);
      }, this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown);
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("click", this.handleClick), this.unlisten("keydown", this.handleKeydown), n.prototype.destroy.call(this);
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        focus: function() {
          t.root.focus();
        },
        getAttribute: function(r) {
          return t.root.getAttribute(r);
        },
        notifyInteraction: function(r) {
          return t.emit(
            Yt.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          t.emit(
            Yt.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, l) {
          t.root.setAttribute(r, l);
        }
      };
      return new ka(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(Ri)
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
var Zt;
(function(n) {
  n.LEFT = "left", n.RIGHT = "right";
})(Zt || (Zt = {}));
var sn;
(function(n) {
  n.PRIMARY = "primary", n.TRAILING = "trailing", n.NONE = "none";
})(sn || (sn = {}));
var Oe = {
  ADDED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-added-announcement",
  ARIA_CHECKED: "aria-checked",
  ARROW_DOWN_KEY: "ArrowDown",
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  ARROW_UP_KEY: "ArrowUp",
  BACKSPACE_KEY: "Backspace",
  CHECKMARK_SELECTOR: ".mdc-chip__checkmark",
  DELETE_KEY: "Delete",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  ENTRY_ANIMATION_NAME: "mdc-chip-entry",
  HOME_KEY: "Home",
  IE_ARROW_DOWN_KEY: "Down",
  IE_ARROW_LEFT_KEY: "Left",
  IE_ARROW_RIGHT_KEY: "Right",
  IE_ARROW_UP_KEY: "Up",
  IE_DELETE_KEY: "Del",
  INTERACTION_EVENT: "MDCChip:interaction",
  LEADING_ICON_SELECTOR: ".mdc-chip__icon--leading",
  NAVIGATION_EVENT: "MDCChip:navigation",
  PRIMARY_ACTION_SELECTOR: ".mdc-chip__primary-action",
  REMOVED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-removed-announcement",
  REMOVAL_EVENT: "MDCChip:removal",
  SELECTION_EVENT: "MDCChip:selection",
  SPACEBAR_KEY: " ",
  TAB_INDEX: "tabindex",
  TRAILING_ACTION_SELECTOR: ".mdc-chip-trailing-action",
  TRAILING_ICON_INTERACTION_EVENT: "MDCChip:trailingIconInteraction",
  TRAILING_ICON_SELECTOR: ".mdc-chip__icon--trailing"
}, bt = {
  CHECKMARK: "mdc-chip__checkmark",
  CHIP_EXIT: "mdc-chip--exit",
  DELETABLE: "mdc-chip--deletable",
  EDITABLE: "mdc-chip--editable",
  EDITING: "mdc-chip--editing",
  HIDDEN_LEADING_ICON: "mdc-chip__icon--leading-hidden",
  LEADING_ICON: "mdc-chip__icon--leading",
  PRIMARY_ACTION: "mdc-chip__primary-action",
  PRIMARY_ACTION_FOCUSED: "mdc-chip--primary-action-focused",
  SELECTED: "mdc-chip--selected",
  TEXT: "mdc-chip__text",
  TRAILING_ACTION: "mdc-chip__trailing-action",
  TRAILING_ICON: "mdc-chip__icon--trailing"
}, Wt = /* @__PURE__ */ new Set();
Wt.add(Oe.ARROW_LEFT_KEY);
Wt.add(Oe.ARROW_RIGHT_KEY);
Wt.add(Oe.ARROW_DOWN_KEY);
Wt.add(Oe.ARROW_UP_KEY);
Wt.add(Oe.END_KEY);
Wt.add(Oe.HOME_KEY);
Wt.add(Oe.IE_ARROW_LEFT_KEY);
Wt.add(Oe.IE_ARROW_RIGHT_KEY);
Wt.add(Oe.IE_ARROW_DOWN_KEY);
Wt.add(Oe.IE_ARROW_UP_KEY);
var _n = /* @__PURE__ */ new Set();
_n.add(Oe.ARROW_UP_KEY);
_n.add(Oe.ARROW_DOWN_KEY);
_n.add(Oe.HOME_KEY);
_n.add(Oe.END_KEY);
_n.add(Oe.IE_ARROW_UP_KEY);
_n.add(Oe.IE_ARROW_DOWN_KEY);
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
var rs = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Pn;
(function(n) {
  n[n.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", n[n.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Pn || (Pn = {}));
var Vr = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Oe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassToLeadingIcon: function() {
          },
          eventTargetHasClass: function() {
            return !1;
          },
          focusPrimaryAction: function() {
          },
          focusTrailingAction: function() {
          },
          getAttribute: function() {
            return null;
          },
          getCheckmarkBoundingClientRect: function() {
            return rs;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return rs;
          },
          hasClass: function() {
            return !1;
          },
          hasLeadingIcon: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          isTrailingActionNavigable: function() {
            return !1;
          },
          notifyEditFinish: function() {
          },
          notifyEditStart: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          },
          notifyRemoval: function() {
          },
          notifySelection: function() {
          },
          notifyTrailingIconInteraction: function() {
          },
          removeClass: function() {
          },
          removeClassFromLeadingIcon: function() {
          },
          removeTrailingActionFocus: function() {
          },
          setPrimaryActionAttr: function() {
          },
          setStyleProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.isSelected = function() {
      return this.adapter.hasClass(bt.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(bt.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(bt.EDITING);
    }, e.prototype.setSelected = function(t) {
      this.setSelectedImpl(t), this.notifySelection(t);
    }, e.prototype.setSelectedFromChipSet = function(t, i) {
      this.setSelectedImpl(t), i && this.notifyIgnoredSelection(t);
    }, e.prototype.getShouldRemoveOnTrailingIconClick = function() {
      return this.shouldRemoveOnTrailingIconClick;
    }, e.prototype.setShouldRemoveOnTrailingIconClick = function(t) {
      this.shouldRemoveOnTrailingIconClick = t;
    }, e.prototype.setShouldFocusPrimaryActionOnClick = function(t) {
      this.shouldFocusPrimaryActionOnClick = t;
    }, e.prototype.getDimensions = function() {
      var t = this, i = function() {
        return t.adapter.getRootBoundingClientRect();
      }, r = function() {
        return t.adapter.getCheckmarkBoundingClientRect();
      };
      if (!this.adapter.hasLeadingIcon()) {
        var l = r();
        if (l) {
          var a = i();
          return {
            bottom: a.bottom,
            height: a.height,
            left: a.left,
            right: a.right,
            top: a.top,
            width: a.width + l.height
          };
        }
      }
      return i();
    }, e.prototype.beginExit = function() {
      this.adapter.addClass(bt.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this, r = this.adapter.eventTargetHasClass(t.target, bt.CHIP_EXIT), l = t.propertyName === "width", a = t.propertyName === "opacity";
      if (r && a) {
        var s = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          i.adapter.setStyleProperty("width", s), i.adapter.setStyleProperty("padding", "0"), i.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            i.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (r && l) {
        this.removeFocus();
        var o = this.adapter.getAttribute(Oe.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(o);
      }
      if (a) {
        var u = this.adapter.eventTargetHasClass(t.target, bt.LEADING_ICON) && this.adapter.hasClass(bt.SELECTED), c = this.adapter.eventTargetHasClass(t.target, bt.CHECKMARK) && !this.adapter.hasClass(bt.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(bt.HIDDEN_LEADING_ICON);
          return;
        }
        if (c) {
          this.adapter.removeClassFromLeadingIcon(bt.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(t) {
      this.eventFromPrimaryAction(t) && this.adapter.addClass(bt.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(t) {
      this.eventFromPrimaryAction(t) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(bt.PRIMARY_ACTION_FOCUSED));
    }, e.prototype.handleTrailingActionInteraction = function() {
      this.adapter.notifyTrailingIconInteraction(), this.removeChip();
    }, e.prototype.handleKeydown = function(t) {
      if (this.isEditing()) {
        this.shouldFinishEditing(t) && (t.preventDefault(), this.finishEditing());
        return;
      }
      if (this.isEditable() && this.shouldStartEditing(t) && (t.preventDefault(), this.startEditing()), this.shouldNotifyInteraction(t)) {
        this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
        return;
      }
      if (this.isDeleteAction(t)) {
        t.preventDefault(), this.removeChip();
        return;
      }
      Wt.has(t.key) && (t.preventDefault(), this.focusNextAction(t.key, sn.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(t) {
      this.focusNextAction(t.detail.key, sn.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Oe.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Pn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var t = this.adapter.isTrailingActionNavigable();
      if (t) {
        this.adapter.setPrimaryActionAttr(Oe.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(t) {
      this.adapter.setPrimaryActionAttr(Oe.TAB_INDEX, "0"), t === Pn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Pn.SHOULD_FOCUS : Pn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(t, i) {
      var r = this.adapter.isTrailingActionNavigable(), l = this.getDirection(t);
      if (_n.has(t) || !r) {
        this.adapter.notifyNavigation(t, i);
        return;
      }
      if (i === sn.PRIMARY && l === Zt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === sn.TRAILING && l === Zt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(t, sn.NONE);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Oe.ARROW_LEFT_KEY || t === Oe.IE_ARROW_LEFT_KEY, l = t === Oe.ARROW_RIGHT_KEY || t === Oe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Zt.LEFT : Zt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(t) {
      return this.eventFromPrimaryAction(t) && t.key === Oe.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(t) {
      return t.key === Oe.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(t) {
      return t.key === Oe.ENTER_KEY || t.key === Oe.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(t) {
      var i = this.adapter.hasClass(bt.DELETABLE);
      return i && (t.key === Oe.BACKSPACE_KEY || t.key === Oe.DELETE_KEY || t.key === Oe.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(t) {
      t ? (this.adapter.addClass(bt.SELECTED), this.adapter.setPrimaryActionAttr(Oe.ARIA_CHECKED, "true")) : (this.adapter.removeClass(bt.SELECTED), this.adapter.setPrimaryActionAttr(Oe.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(t) {
      this.adapter.notifySelection(t, !1);
    }, e.prototype.notifyIgnoredSelection = function(t) {
      this.adapter.notifySelection(t, !0);
    }, e.prototype.eventFromPrimaryAction = function(t) {
      return this.adapter.eventTargetHasClass(t.target, bt.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(bt.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(bt.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Et)
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
var Ma = (
  /** @class */
  function(n) {
    at(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "selected", {
      /**
       * @return Whether the chip is selected.
       */
      get: function() {
        return this.foundation.isSelected();
      },
      /**
       * Sets selected state on the chip.
       */
      set: function(t) {
        this.foundation.setSelected(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldRemoveOnTrailingIconClick", {
      /**
       * @return Whether a trailing icon click should trigger exit/removal of the chip.
       */
      get: function() {
        return this.foundation.getShouldRemoveOnTrailingIconClick();
      },
      /**
       * Sets whether a trailing icon click should trigger exit/removal of the chip.
       */
      set: function(t) {
        this.foundation.setShouldRemoveOnTrailingIconClick(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "setShouldFocusPrimaryActionOnClick", {
      /**
       * Sets whether a clicking on the chip should focus the primary action.
       */
      set: function(t) {
        this.foundation.setShouldFocusPrimaryActionOnClick(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
      get: function() {
        return this.root.id;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(t) {
      return new e(t);
    }, e.prototype.initialize = function(t, i) {
      var r = this;
      t === void 0 && (t = function(s, o) {
        return new Si(s, o);
      }), i === void 0 && (i = function(s) {
        return new Da(s);
      }), this.leadingIcon = this.root.querySelector(Oe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Oe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Oe.PRIMARY_ACTION_SELECTOR);
      var l = this.root.querySelector(Oe.TRAILING_ACTION_SELECTOR);
      l && (this.trailingAction = i(l));
      var a = We(We({}, Si.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = t(this.root, new Di(a));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this;
      this.handleTrailingActionInteraction = function() {
        t.foundation.handleTrailingActionInteraction();
      }, this.handleTrailingActionNavigation = function(i) {
        t.foundation.handleTrailingActionNavigation(i);
      }, this.handleClick = function() {
        t.foundation.handleClick();
      }, this.handleKeydown = function(i) {
        t.foundation.handleKeydown(i);
      }, this.handleTransitionEnd = function(i) {
        t.foundation.handleTransitionEnd(i);
      }, this.handleFocusIn = function(i) {
        t.foundation.handleFocusIn(i);
      }, this.handleFocusOut = function(i) {
        t.foundation.handleFocusOut(i);
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Yt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Yt.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Yt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Yt.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), n.prototype.destroy.call(this);
    }, e.prototype.beginExit = function() {
      this.foundation.beginExit();
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        addClass: function(r) {
          return t.root.classList.add(r);
        },
        addClassToLeadingIcon: function(r) {
          t.leadingIcon && t.leadingIcon.classList.add(r);
        },
        eventTargetHasClass: function(r, l) {
          return r ? r.classList.contains(l) : !1;
        },
        focusPrimaryAction: function() {
          t.primaryAction && t.primaryAction.focus();
        },
        focusTrailingAction: function() {
          t.trailingAction && t.trailingAction.focus();
        },
        getAttribute: function(r) {
          return t.root.getAttribute(r);
        },
        getCheckmarkBoundingClientRect: function() {
          return t.checkmark ? t.checkmark.getBoundingClientRect() : null;
        },
        getComputedStyleValue: function(r) {
          return window.getComputedStyle(t.root).getPropertyValue(r);
        },
        getRootBoundingClientRect: function() {
          return t.root.getBoundingClientRect();
        },
        hasClass: function(r) {
          return t.root.classList.contains(r);
        },
        hasLeadingIcon: function() {
          return !!t.leadingIcon;
        },
        isRTL: function() {
          return window.getComputedStyle(t.root).getPropertyValue("direction") === "rtl";
        },
        isTrailingActionNavigable: function() {
          return t.trailingAction ? t.trailingAction.isNavigable() : !1;
        },
        notifyInteraction: function() {
          return t.emit(
            Oe.INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, l) {
          return t.emit(
            Oe.NAVIGATION_EVENT,
            { chipId: t.id, key: r, source: l },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          t.emit(
            Oe.REMOVAL_EVENT,
            { chipId: t.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, l) {
          return t.emit(
            Oe.SELECTION_EVENT,
            { chipId: t.id, selected: r, shouldIgnore: l },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return t.emit(
            Oe.TRAILING_ICON_INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyEditStart: function() {
        },
        notifyEditFinish: function() {
        },
        removeClass: function(r) {
          return t.root.classList.remove(r);
        },
        removeClassFromLeadingIcon: function(r) {
          t.leadingIcon && t.leadingIcon.classList.remove(r);
        },
        removeTrailingActionFocus: function() {
          t.trailingAction && t.trailingAction.removeFocus();
        },
        setPrimaryActionAttr: function(r, l) {
          t.primaryAction && t.primaryAction.setAttribute(r, l);
        },
        setStyleProperty: function(r, l) {
          return t.root.style.setProperty(r, l);
        }
      };
      return new Vr(i);
    }, e.prototype.setSelectedFromChipSet = function(t, i) {
      this.foundation.setSelectedFromChipSet(t, i);
    }, e.prototype.focusPrimaryAction = function() {
      this.foundation.focusPrimaryAction();
    }, e.prototype.focusTrailingAction = function() {
      this.foundation.focusTrailingAction();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e.prototype.remove = function() {
      var t = this.root.parentNode;
      t !== null && t.removeChild(this.root);
    }, e;
  }(Ri)
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
var Fa = {
  CHIP_SELECTOR: ".mdc-chip"
}, si = {
  CHOICE: "mdc-chip-set--choice",
  FILTER: "mdc-chip-set--filter"
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
var jr = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          announceMessage: function() {
          },
          focusChipPrimaryActionAtIndex: function() {
          },
          focusChipTrailingActionAtIndex: function() {
          },
          getChipListCount: function() {
            return -1;
          },
          getIndexOfChipById: function() {
            return -1;
          },
          hasClass: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          removeChipAtIndex: function() {
          },
          removeFocusFromChipAtIndex: function() {
          },
          selectChipAtIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedChipIds = function() {
      return this.selectedChipIds.slice();
    }, e.prototype.select = function(t) {
      this.selectImpl(t, !1);
    }, e.prototype.handleChipInteraction = function(t) {
      var i = t.chipId, r = this.adapter.getIndexOfChipById(i);
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(si.CHOICE) || this.adapter.hasClass(si.FILTER)) && this.toggleSelect(i);
    }, e.prototype.handleChipSelection = function(t) {
      var i = t.chipId, r = t.selected, l = t.shouldIgnore;
      if (!l) {
        var a = this.selectedChipIds.indexOf(i) >= 0;
        r && !a ? this.select(i) : !r && a && this.deselectImpl(i);
      }
    }, e.prototype.handleChipRemoval = function(t) {
      var i = t.chipId, r = t.removedAnnouncement;
      r && this.adapter.announceMessage(r);
      var l = this.adapter.getIndexOfChipById(i);
      this.deselectAndNotifyClients(i), this.adapter.removeChipAtIndex(l);
      var a = this.adapter.getChipListCount() - 1;
      if (!(a < 0)) {
        var s = Math.min(l, a);
        this.removeFocusFromChipsExcept(s), this.adapter.focusChipTrailingActionAtIndex(s);
      }
    }, e.prototype.handleChipNavigation = function(t) {
      var i = t.chipId, r = t.key, l = t.source, a = this.adapter.getChipListCount() - 1, s = this.adapter.getIndexOfChipById(i);
      if (!(s === -1 || !Wt.has(r))) {
        var o = this.adapter.isRTL(), u = r === Oe.ARROW_LEFT_KEY || r === Oe.IE_ARROW_LEFT_KEY, c = r === Oe.ARROW_RIGHT_KEY || r === Oe.IE_ARROW_RIGHT_KEY, f = r === Oe.ARROW_DOWN_KEY || r === Oe.IE_ARROW_DOWN_KEY, d = !o && c || o && u || f, h = r === Oe.HOME_KEY, m = r === Oe.END_KEY;
        d ? s++ : h ? s = 0 : m ? s = a : s--, !(s < 0 || s > a) && (this.removeFocusFromChipsExcept(s), this.focusChipAction(s, r, l));
      }
    }, e.prototype.focusChipAction = function(t, i, r) {
      var l = _n.has(i);
      if (l && r === sn.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
      if (l && r === sn.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      var a = this.getDirection(i);
      if (a === Zt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      if (a === Zt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Oe.ARROW_LEFT_KEY || t === Oe.IE_ARROW_LEFT_KEY, l = t === Oe.ARROW_RIGHT_KEY || t === Oe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Zt.LEFT : Zt.RIGHT;
    }, e.prototype.deselectImpl = function(t, i) {
      i === void 0 && (i = !1);
      var r = this.selectedChipIds.indexOf(t);
      if (r >= 0) {
        this.selectedChipIds.splice(r, 1);
        var l = this.adapter.getIndexOfChipById(t);
        this.adapter.selectChipAtIndex(
          l,
          /** isSelected */
          !1,
          i
        );
      }
    }, e.prototype.deselectAndNotifyClients = function(t) {
      this.deselectImpl(t, !0);
    }, e.prototype.toggleSelect = function(t) {
      this.selectedChipIds.indexOf(t) >= 0 ? this.deselectAndNotifyClients(t) : this.selectAndNotifyClients(t);
    }, e.prototype.removeFocusFromChipsExcept = function(t) {
      for (var i = this.adapter.getChipListCount(), r = 0; r < i; r++)
        r !== t && this.adapter.removeFocusFromChipAtIndex(r);
    }, e.prototype.selectAndNotifyClients = function(t) {
      this.selectImpl(t, !0);
    }, e.prototype.selectImpl = function(t, i) {
      if (!(this.selectedChipIds.indexOf(t) >= 0)) {
        if (this.adapter.hasClass(si.CHOICE) && this.selectedChipIds.length > 0) {
          var r = this.selectedChipIds[0], l = this.adapter.getIndexOfChipById(r);
          this.selectedChipIds = [], this.adapter.selectChipAtIndex(
            l,
            /** isSelected */
            !1,
            i
          );
        }
        this.selectedChipIds.push(t);
        var a = this.adapter.getIndexOfChipById(t);
        this.adapter.selectChipAtIndex(
          a,
          /** isSelected */
          !0,
          i
        );
      }
    }, e;
  }(Et)
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
var Fi = Vr.strings, ls = Fi.INTERACTION_EVENT, ss = Fi.SELECTION_EVENT, as = Fi.REMOVAL_EVENT, os = Fi.NAVIGATION_EVENT, ed = jr.strings.CHIP_SELECTOR, us = 0, td = (
  /** @class */
  function(n) {
    at(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.attachTo = function(t) {
      return new e(t);
    }, Object.defineProperty(e.prototype, "chips", {
      get: function() {
        return this.chipsList.slice();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "selectedChipIds", {
      /**
       * @return An array of the IDs of all selected chips.
       */
      get: function() {
        return this.foundation.getSelectedChipIds();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.initialize = function(t) {
      t === void 0 && (t = function(i) {
        return new Ma(i);
      }), this.chipFactory = t, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var t, i, r = this;
      try {
        for (var l = Ct(this.chipsList), a = l.next(); !a.done; a = l.next()) {
          var s = a.value;
          s.id && s.selected && this.foundation.select(s.id);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          a && !a.done && (i = l.return) && i.call(l);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.handleChipInteraction = function(o) {
        return r.foundation.handleChipInteraction(o.detail);
      }, this.handleChipSelection = function(o) {
        return r.foundation.handleChipSelection(o.detail);
      }, this.handleChipRemoval = function(o) {
        return r.foundation.handleChipRemoval(o.detail);
      }, this.handleChipNavigation = function(o) {
        return r.foundation.handleChipNavigation(o.detail);
      }, this.listen(ls, this.handleChipInteraction), this.listen(ss, this.handleChipSelection), this.listen(as, this.handleChipRemoval), this.listen(os, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = Ct(this.chipsList), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          a.destroy();
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.unlisten(ls, this.handleChipInteraction), this.unlisten(ss, this.handleChipSelection), this.unlisten(as, this.handleChipRemoval), this.unlisten(os, this.handleChipNavigation), n.prototype.destroy.call(this);
    }, e.prototype.addChip = function(t) {
      t.id = t.id || "mdc-chip-" + ++us, this.chipsList.push(this.chipFactory(t));
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        announceMessage: function(r) {
          xf(r);
        },
        focusChipPrimaryActionAtIndex: function(r) {
          t.chipsList[r].focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: function(r) {
          t.chipsList[r].focusTrailingAction();
        },
        getChipListCount: function() {
          return t.chips.length;
        },
        getIndexOfChipById: function(r) {
          return t.findChipIndex(r);
        },
        hasClass: function(r) {
          return t.root.classList.contains(r);
        },
        isRTL: function() {
          return window.getComputedStyle(t.root).getPropertyValue("direction") === "rtl";
        },
        removeChipAtIndex: function(r) {
          r >= 0 && r < t.chips.length && (t.chipsList[r].destroy(), t.chipsList[r].remove(), t.chipsList.splice(r, 1));
        },
        removeFocusFromChipAtIndex: function(r) {
          t.chipsList[r].removeFocus();
        },
        selectChipAtIndex: function(r, l, a) {
          r >= 0 && r < t.chips.length && t.chipsList[r].setSelectedFromChipSet(l, a);
        }
      };
      return new jr(i);
    }, e.prototype.instantiateChips = function(t) {
      var i = [].slice.call(this.root.querySelectorAll(ed));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++us, t(r);
      });
    }, e.prototype.findChipIndex = function(t) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === t)
          return i;
      return -1;
    }, e;
  }(Ri)
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
const qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: Ma,
  MDCChipFoundation: Vr,
  MDCChipSet: td,
  MDCChipSetFoundation: jr,
  MDCChipTrailingAction: Da,
  MDCChipTrailingActionFoundation: ka,
  chipCssClasses: bt,
  chipSetCssClasses: si,
  chipSetStrings: Fa,
  chipStrings: Oe,
  trailingActionStrings: Yt
}, Symbol.toStringTag, { value: "Module" }));
function cs(n) {
  let e;
  return {
    c() {
      e = x("div"), F(e, "class", "mdc-chip__ripple");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function fs(n) {
  let e;
  return {
    c() {
      e = x("div"), F(e, "class", "mdc-chip__touch");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function nd(n) {
  let e, t, i, r, l = (
    /*ripple*/
    n[3] && !/*$nonInteractive*/
    n[14] && cs()
  );
  const a = (
    /*#slots*/
    n[34].default
  ), s = Re(
    a,
    n,
    /*$$scope*/
    n[38],
    null
  );
  let o = (
    /*touch*/
    n[4] && fs()
  );
  return {
    c() {
      l && l.c(), e = oe(), s && s.c(), t = oe(), o && o.c(), i = qe();
    },
    m(u, c) {
      l && l.m(u, c), H(u, e, c), s && s.m(u, c), H(u, t, c), o && o.m(u, c), H(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? l || (l = cs(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), s && s.p && (!r || c[1] & /*$$scope*/
      128) && De(
        s,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? ke(
          a,
          /*$$scope*/
          u[38],
          c,
          null
        ) : Me(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = fs(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (y(s, u), r = !0);
    },
    o(u) {
      E(s, u), r = !1;
    },
    d(u) {
      u && (P(e), P(t), P(i)), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function id(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[6]
    ) },
    {
      use: [
        [
          Rt,
          {
            ripple: (
              /*ripple*/
              n[3] && !/*$nonInteractive*/
              n[14]
            ),
            unbounded: !1,
            addClass: (
              /*addClass*/
              n[25]
            ),
            removeClass: (
              /*removeClass*/
              n[26]
            ),
            addStyle: (
              /*addStyle*/
              n[27]
            )
          }
        ],
        /*forwardEvents*/
        n[15],
        .../*use*/
        n[0]
      ]
    },
    {
      class: re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-chip": !0,
        "mdc-chip--selected": (
          /*selected*/
          n[8]
        ),
        "mdc-chip--touch": (
          /*touch*/
          n[4]
        ),
        .../*internalClasses*/
        n[10]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[11]
      ).map(pr).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "row" },
    /*$$restProps*/
    n[28]
  ];
  var l = (
    /*component*/
    n[5]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [nd] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = X(u, he(r, [
      o[0] & /*tag*/
      64 && { tag: (
        /*tag*/
        s[6]
      ) },
      o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
      234930185 && {
        use: [
          [
            Rt,
            {
              ripple: (
                /*ripple*/
                s[3] && !/*$nonInteractive*/
                s[14]
              ),
              unbounded: !1,
              addClass: (
                /*addClass*/
                s[25]
              ),
              removeClass: (
                /*removeClass*/
                s[26]
              ),
              addStyle: (
                /*addStyle*/
                s[27]
              )
            }
          ],
          /*forwardEvents*/
          s[15],
          .../*use*/
          s[0]
        ]
      },
      o[0] & /*className, selected, touch, internalClasses*/
      1298 && {
        class: re({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-chip": !0,
          "mdc-chip--selected": (
            /*selected*/
            s[8]
          ),
          "mdc-chip--touch": (
            /*touch*/
            s[4]
          ),
          .../*internalClasses*/
          s[10]
        })
      },
      o[0] & /*internalStyles, style*/
      2052 && {
        style: Object.entries(
          /*internalStyles*/
          s[11]
        ).map(pr).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && Le(
        /*$$restProps*/
        s[28]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[35](e), e.$on("transitionend", function() {
    pe(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleTransitionEnd.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleTransitionEnd.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("click", function() {
    pe(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleClick.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleClick.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("keydown", function() {
    pe(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleKeydown.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleKeydown.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("focusin", function() {
    pe(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleFocusIn.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleFocusIn.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("focusout", function() {
    pe(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleFocusOut.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleFocusOut.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("SMUIChipTrailingAction:interaction", function() {
    pe(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleTrailingActionInteraction.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleTrailingActionInteraction.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("SMUIChipTrailingAction:navigation", function() {
    pe(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleTrailingActionNavigation.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleTrailingActionNavigation.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on(
    "SMUIChipsChipPrimaryAction:mount",
    /*handleSMUIChipsChipPrimaryAction*/
    n[23]
  ), e.$on(
    "SMUIChipsChipPrimaryAction:unmount",
    /*SMUIChipsChipPrimaryAction_unmount_handler*/
    n[36]
  ), e.$on(
    "SMUIChipsChipTrailingAction:mount",
    /*handleSMUIChipsChipTrailingAction*/
    n[24]
  ), e.$on(
    "SMUIChipsChipTrailingAction:unmount",
    /*SMUIChipsChipTrailingAction_unmount_handler*/
    n[37]
  )), {
    c() {
      e && te(e.$$.fragment), t = qe();
    },
    m(s, o) {
      e && $(e, s, o), H(s, t, o), i = !0;
    },
    p(s, o) {
      if (n = s, o[0] & /*component*/
      32 && l !== (l = /*component*/
      n[5])) {
        if (e) {
          Ue();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Ne();
        }
        l ? (e = kt(l, a(n, o)), n[35](e), e.$on("transitionend", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleTransitionEnd.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleTransitionEnd.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("click", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleClick.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleClick.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("keydown", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleKeydown.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleKeydown.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("focusin", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleFocusIn.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleFocusIn.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("focusout", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleFocusOut.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleFocusOut.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("SMUIChipTrailingAction:interaction", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleTrailingActionInteraction.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleTrailingActionInteraction.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("SMUIChipTrailingAction:navigation", function() {
          pe(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleTrailingActionNavigation.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleTrailingActionNavigation.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on(
          "SMUIChipsChipPrimaryAction:mount",
          /*handleSMUIChipsChipPrimaryAction*/
          n[23]
        ), e.$on(
          "SMUIChipsChipPrimaryAction:unmount",
          /*SMUIChipsChipPrimaryAction_unmount_handler*/
          n[36]
        ), e.$on(
          "SMUIChipsChipTrailingAction:mount",
          /*handleSMUIChipsChipTrailingAction*/
          n[24]
        ), e.$on(
          "SMUIChipsChipTrailingAction:unmount",
          /*SMUIChipsChipTrailingAction_unmount_handler*/
          n[37]
        ), te(e.$$.fragment), y(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
        503369055 ? he(r, [
          o[0] & /*tag*/
          64 && { tag: (
            /*tag*/
            n[6]
          ) },
          o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
          234930185 && {
            use: [
              [
                Rt,
                {
                  ripple: (
                    /*ripple*/
                    n[3] && !/*$nonInteractive*/
                    n[14]
                  ),
                  unbounded: !1,
                  addClass: (
                    /*addClass*/
                    n[25]
                  ),
                  removeClass: (
                    /*removeClass*/
                    n[26]
                  ),
                  addStyle: (
                    /*addStyle*/
                    n[27]
                  )
                }
              ],
              /*forwardEvents*/
              n[15],
              .../*use*/
              n[0]
            ]
          },
          o[0] & /*className, selected, touch, internalClasses*/
          1298 && {
            class: re({
              [
                /*className*/
                n[1]
              ]: !0,
              "mdc-chip": !0,
              "mdc-chip--selected": (
                /*selected*/
                n[8]
              ),
              "mdc-chip--touch": (
                /*touch*/
                n[4]
              ),
              .../*internalClasses*/
              n[10]
            })
          },
          o[0] & /*internalStyles, style*/
          2052 && {
            style: Object.entries(
              /*internalStyles*/
              n[11]
            ).map(pr).concat([
              /*style*/
              n[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && Le(
            /*$$restProps*/
            n[28]
          )
        ]) : {};
        o[0] & /*touch, ripple, $nonInteractive*/
        16408 | o[1] & /*$$scope*/
        128 && (u.$$scope = { dirty: o, ctx: n }), e.$set(u);
      }
    },
    i(s) {
      i || (e && y(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && P(t), n[35](null), e && ee(e, s);
    }
  };
}
const pr = ([n, e]) => `${n}: ${e};`;
function rd(n, e, t) {
  const i = [
    "use",
    "class",
    "style",
    "chip",
    "ripple",
    "touch",
    "shouldRemoveOnTrailingIconClick",
    "shouldFocusPrimaryActionOnClick",
    "component",
    "tag",
    "getElement"
  ];
  let r = me(e, i), l, a, s, o, u, c, f, { $$slots: d = {}, $$scope: h } = e;
  const { MDCChipFoundation: m } = qr, _ = nt(et());
  let { use: p = [] } = e, { class: A = "" } = e, { style: b = "" } = e, { chip: T } = e, { ripple: C = !0 } = e, { touch: k = !1 } = e, { shouldRemoveOnTrailingIconClick: R = !0 } = e, { shouldFocusPrimaryActionOnClick: g = !0 } = e, S, B, v = {}, I = {}, D = {};
  const O = ze("SMUI:chips:chip:initialSelected");
  rt(n, O, (ne) => t(44, c = ne));
  let U = c, W, q;
  const z = ze("SMUI:chips:nonInteractive");
  rt(n, z, (ne) => t(14, f = ne));
  const M = ze("SMUI:chips:choice");
  rt(n, M, (ne) => t(40, a = ne));
  const L = ze("SMUI:chips:chip:index");
  rt(n, L, (ne) => t(39, l = ne));
  let { component: V = Nt } = e, { tag: ue = V === Nt ? "div" : void 0 } = e;
  const Fe = yt(R);
  rt(n, Fe, (ne) => t(43, u = ne)), Ke("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Fe);
  const Ie = yt(U);
  rt(n, Ie, (ne) => t(42, o = ne)), Ke("SMUI:chips:chip:isSelected", Ie);
  const Ye = yt(I);
  if (rt(n, Ye, (ne) => t(41, s = ne)), Ke("SMUI:chips:chip:leadingIconClasses", Ye), Ke("SMUI:chips:chip:focusable", a && U || l === 0), !T)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  st(() => {
    t(7, B = new m({
      addClass: Ee,
      addClassToLeadingIcon: ie,
      eventTargetHasClass: (Xe, ct) => Xe && "classList" in Xe ? Xe.classList.contains(ct) : !1,
      focusPrimaryAction: () => {
        W && W.focus();
      },
      focusTrailingAction: () => {
        q && q.focus();
      },
      getAttribute: (Xe) => Pe().getAttribute(Xe),
      getCheckmarkBoundingClientRect: () => {
        const Xe = Pe().querySelector(".mdc-chip__checkmark");
        return Xe ? Xe.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Be,
      getRootBoundingClientRect: () => Pe().getBoundingClientRect(),
      hasClass: Ce,
      hasLeadingIcon: () => !!Pe().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Pe()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => q ? q.isNavigable() : !1,
      notifyInteraction: () => be(Pe(), "SMUIChip:interaction", { chipId: T }, void 0, !0),
      notifyNavigation: (Xe, ct) => be(Pe(), "SMUIChip:navigation", { chipId: T, key: Xe, source: ct }, void 0, !0),
      notifyRemoval: (Xe) => {
        be(Pe(), "SMUIChip:removal", { chipId: T, removedAnnouncement: Xe }, void 0, !0);
      },
      notifySelection: (Xe, ct) => be(Pe(), "SMUIChip:selection", { chipId: T, selected: Xe, shouldIgnore: ct }, void 0, !0),
      notifyTrailingIconInteraction: () => be(Pe(), "SMUIChip:trailingIconInteraction", { chipId: T }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: we,
      removeClassFromLeadingIcon: G,
      removeTrailingActionFocus: () => {
        q && q.removeFocus();
      },
      setPrimaryActionAttr: (Xe, ct) => {
        W && W.addAttr(Xe, ct);
      },
      setStyleProperty: Ge
    }));
    const ne = {
      chipId: T,
      get selected() {
        return U;
      },
      focusPrimaryAction: Z,
      focusTrailingAction: Se,
      removeFocus: je,
      setSelectedFromChipSet: At
    };
    return be(Pe(), "SMUIChipsChip:mount", ne), B.init(), () => {
      be(Pe(), "SMUIChipsChip:unmount", ne), B.destroy();
    };
  });
  function K(ne) {
    t(12, W = ne.detail);
  }
  function J(ne) {
    t(13, q = ne.detail);
  }
  function Ce(ne) {
    return ne in v ? v[ne] : Pe().classList.contains(ne);
  }
  function Ee(ne) {
    v[ne] || t(10, v[ne] = !0, v);
  }
  function we(ne) {
    (!(ne in v) || v[ne]) && t(10, v[ne] = !1, v);
  }
  function ie(ne) {
    I[ne] || t(33, I[ne] = !0, I);
  }
  function G(ne) {
    (!(ne in I) || I[ne]) && t(33, I[ne] = !1, I);
  }
  function Ge(ne, Xe) {
    D[ne] != Xe && (Xe === "" || Xe == null ? (delete D[ne], t(11, D)) : t(11, D[ne] = Xe, D));
  }
  function Be(ne) {
    return ne in D ? D[ne] : getComputedStyle(Pe()).getPropertyValue(ne);
  }
  function At(ne, Xe) {
    t(8, U = ne), B.setSelectedFromChipSet(U, Xe);
  }
  function Z() {
    B.focusPrimaryAction();
  }
  function Se() {
    B.focusTrailingAction();
  }
  function je() {
    B.removeFocus();
  }
  function Pe() {
    return S.getElement();
  }
  function St(ne) {
    se[ne ? "unshift" : "push"](() => {
      S = ne, t(9, S);
    });
  }
  const j = () => t(12, W = void 0), le = () => t(13, q = void 0);
  return n.$$set = (ne) => {
    e = X(X({}, e), tt(ne)), t(28, r = me(e, i)), "use" in ne && t(0, p = ne.use), "class" in ne && t(1, A = ne.class), "style" in ne && t(2, b = ne.style), "chip" in ne && t(29, T = ne.chip), "ripple" in ne && t(3, C = ne.ripple), "touch" in ne && t(4, k = ne.touch), "shouldRemoveOnTrailingIconClick" in ne && t(30, R = ne.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in ne && t(31, g = ne.shouldFocusPrimaryActionOnClick), "component" in ne && t(5, V = ne.component), "tag" in ne && t(6, ue = ne.tag), "$$scope" in ne && t(38, h = ne.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && Vt(Fe, u = R, u), n.$$.dirty[0] & /*selected*/
    256 && Vt(Ie, o = U, o), n.$$.dirty[1] & /*leadingIconClasses*/
    4 && Vt(Ye, s = I, s), n.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && B && B.getShouldRemoveOnTrailingIconClick() !== R && B.setShouldRemoveOnTrailingIconClick(R), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && B && B.setShouldFocusPrimaryActionOnClick(g);
  }, [
    p,
    A,
    b,
    C,
    k,
    V,
    ue,
    B,
    U,
    S,
    v,
    D,
    W,
    q,
    f,
    _,
    O,
    z,
    M,
    L,
    Fe,
    Ie,
    Ye,
    K,
    J,
    Ee,
    we,
    Ge,
    r,
    T,
    R,
    g,
    Pe,
    I,
    d,
    St,
    j,
    le,
    h
  ];
}
class ld extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      rd,
      id,
      ge,
      {
        use: 0,
        class: 1,
        style: 2,
        chip: 29,
        ripple: 3,
        touch: 4,
        shouldRemoveOnTrailingIconClick: 30,
        shouldFocusPrimaryActionOnClick: 31,
        component: 5,
        tag: 6,
        getElement: 32
      },
      null,
      [-1, -1]
    );
  }
  get getElement() {
    return this.$$.ctx[32];
  }
}
function ds(n, e, t) {
  const i = n.slice();
  return i[37] = e[t], i[39] = t, i;
}
const sd = (n) => ({ chip: n[0] & /*chips*/
1 }), hs = (n) => ({ chip: (
  /*chip*/
  n[37]
) });
function ad(n) {
  let e;
  const t = (
    /*#slots*/
    n[25].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[27],
    hs
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[0] & /*$$scope, chips*/
      134217729) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[27],
        e ? ke(
          t,
          /*$$scope*/
          r[27],
          l,
          sd
        ) : Me(
          /*$$scope*/
          r[27]
        ),
        hs
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function od(n) {
  let e, t, i;
  return e = new Jn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        n[10][
          /*i*/
          n[39]
        ]
      ),
      $$slots: { default: [ad] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe();
    },
    m(r, l) {
      $(e, r, l), H(r, t, l), i = !0;
    },
    p(r, l) {
      const a = {};
      l[0] & /*chips*/
      1 && (a.value = /*initialSelected*/
      r[10][
        /*i*/
        r[39]
      ]), l[0] & /*$$scope, chips*/
      134217729 && (a.$$scope = { dirty: l, ctx: r }), e.$set(a);
    },
    i(r) {
      i || (y(e.$$.fragment, r), i = !0);
    },
    o(r) {
      E(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && P(t), ee(e, r);
    }
  };
}
function ms(n, e) {
  let t, i, r;
  return i = new Jn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [od] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = qe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      H(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      e = l;
      const s = {};
      a[0] & /*chips*/
      1 && (s.value = /*i*/
      e[39]), a[0] & /*$$scope, chips*/
      134217729 && (s.$$scope = { dirty: a, ctx: e }), i.$set(s);
    },
    i(l) {
      r || (y(i.$$.fragment, l), r = !0);
    },
    o(l) {
      E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && P(t), ee(i, l);
    }
  };
}
function ud(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, l, a, s, o, u = Dt(
    /*chips*/
    n[0]
  );
  const c = (h) => (
    /*key*/
    h[3](
      /*chip*/
      h[37]
    )
  );
  for (let h = 0; h < u.length; h += 1) {
    let m = ds(n, u, h), _ = c(m);
    i.set(_, t[h] = ms(_, m));
  }
  let f = [
    {
      class: r = re({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": (
          /*nonInteractive*/
          n[4]
        ),
        "mdc-chip-set--choice": (
          /*choice*/
          n[5]
        ),
        "mdc-chip-set--filter": (
          /*filter*/
          n[6]
        ),
        "mdc-chip-set--input": (
          /*input*/
          n[7]
        )
      })
    },
    { role: "grid" },
    /*$$restProps*/
    n[20]
  ], d = {};
  for (let h = 0; h < f.length; h += 1)
    d = X(d, f[h]);
  return {
    c() {
      e = x("div");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      ce(e, d);
    },
    m(h, m) {
      H(h, e, m);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      n[26](e), a = !0, s || (o = [
        de(l = $e.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        de(
          /*forwardEvents*/
          n[9].call(null, e)
        ),
        fe(
          e,
          "SMUIChipsChip:mount",
          /*handleChipMount*/
          n[14]
        ),
        fe(
          e,
          "SMUIChipsChip:unmount",
          /*handleChipUnmount*/
          n[15]
        ),
        fe(
          e,
          "SMUIChip:interaction",
          /*handleChipInteraction*/
          n[16]
        ),
        fe(
          e,
          "SMUIChip:selection",
          /*handleChipSelection*/
          n[17]
        ),
        fe(
          e,
          "SMUIChip:removal",
          /*handleChipRemoval*/
          n[18]
        ),
        fe(
          e,
          "SMUIChip:navigation",
          /*handleChipNavigation*/
          n[19]
        )
      ], s = !0);
    },
    p(h, m) {
      m[0] & /*chips, initialSelected, $$scope, key*/
      134218761 && (u = Dt(
        /*chips*/
        h[0]
      ), Ue(), t = mi(t, m, c, 1, h, u, i, e, hi, ms, null, ds), Ne()), ce(e, d = he(f, [
        (!a || m[0] & /*className, nonInteractive, choice, filter, input*/
        244 && r !== (r = re({
          [
            /*className*/
            h[2]
          ]: !0,
          "mdc-chip-set": !0,
          "smui-chip-set--non-interactive": (
            /*nonInteractive*/
            h[4]
          ),
          "mdc-chip-set--choice": (
            /*choice*/
            h[5]
          ),
          "mdc-chip-set--filter": (
            /*filter*/
            h[6]
          ),
          "mdc-chip-set--input": (
            /*input*/
            h[7]
          )
        }))) && { class: r },
        { role: "grid" },
        m[0] & /*$$restProps*/
        1048576 && /*$$restProps*/
        h[20]
      ])), l && pe(l.update) && m[0] & /*use*/
      2 && l.update.call(
        null,
        /*use*/
        h[1]
      );
    },
    i(h) {
      if (!a) {
        for (let m = 0; m < u.length; m += 1)
          y(t[m]);
        a = !0;
      }
    },
    o(h) {
      for (let m = 0; m < t.length; m += 1)
        E(t[m]);
      a = !1;
    },
    d(h) {
      h && P(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      n[26](null), s = !1, Qe(o);
    }
  };
}
function ps(n, e) {
  let t = new Set(n);
  for (let i of e)
    t.delete(i);
  return t;
}
function cd(n, e, t) {
  const i = [
    "use",
    "class",
    "chips",
    "key",
    "selected",
    "nonInteractive",
    "choice",
    "filter",
    "input",
    "getElement"
  ];
  let r = me(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = qr, f = nt(et());
  let { use: d = [] } = e, { class: h = "" } = e, { chips: m = [] } = e, { key: _ = (K) => K } = e, { selected: p = void 0 } = e, { nonInteractive: A = !1 } = e, { choice: b = !1 } = e, { filter: T = !1 } = e, { input: C = !1 } = e, k, R, g = {}, S = /* @__PURE__ */ new WeakMap(), B = m.map((K) => b && p === K || T && p.indexOf(K) !== -1);
  const v = yt(A);
  rt(n, v, (K) => t(31, s = K)), Ke("SMUI:chips:nonInteractive", v);
  const I = yt(b);
  rt(n, I, (K) => t(30, a = K)), Ke("SMUI:chips:choice", I);
  const D = yt(T);
  rt(n, D, (K) => t(29, l = K)), Ke("SMUI:chips:filter", D);
  let O = T ? new Set(p) : p;
  st(() => {
    if (t(23, R = new c({
      announceMessage: Eo,
      focusChipPrimaryActionAtIndex: (K) => {
        var J;
        (J = V(m[K])) === null || J === void 0 || J.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (K) => {
        var J;
        (J = V(m[K])) === null || J === void 0 || J.focusTrailingAction();
      },
      getChipListCount: () => m.length,
      getIndexOfChipById: (K) => m.indexOf(K),
      hasClass: (K) => Ie().classList.contains(K),
      isRTL: () => getComputedStyle(Ie()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (K) => {
        K >= 0 && K < m.length && (b && p === m[K] ? t(21, p = null) : T && p.indexOf(m[K]) !== -1 && (p.splice(p.indexOf(m[K]), 1), t(21, p)), m.splice(K, 1), t(0, m));
      },
      removeFocusFromChipAtIndex: (K) => {
        var J;
        (J = V(m[K])) === null || J === void 0 || J.removeFocus();
      },
      selectChipAtIndex: (K, J, Ce) => {
        var Ee;
        if (K >= 0 && K < m.length) {
          if (T) {
            const we = p.indexOf(m[K]);
            J && we === -1 ? (p.push(m[K]), t(21, p)) : !J && we !== -1 && (p.splice(we, 1), t(21, p));
          } else
            b && (J || p === m[K]) && t(21, p = J ? m[K] : null);
          (Ee = V(m[K])) === null || Ee === void 0 || Ee.setSelectedFromChipSet(J, Ce);
        }
      }
    })), R.init(), b && p != null)
      R.select(p);
    else if (T && p.length)
      for (const K of p)
        R.select(K);
    return () => {
      R.destroy();
    };
  });
  function U(K) {
    const J = K.detail;
    ue(J.chipId, J);
  }
  function W(K) {
    const J = K.detail;
    Fe(J.chipId);
  }
  function q(K) {
    R && R.handleChipInteraction(K.detail);
  }
  function z(K) {
    R && R.handleChipSelection(K.detail);
  }
  function M(K) {
    R && R.handleChipRemoval(K.detail);
  }
  function L(K) {
    R && R.handleChipNavigation(K.detail);
  }
  function V(K) {
    return K instanceof Object ? S.get(K) : g[K];
  }
  function ue(K, J) {
    K instanceof Object ? S.set(K, J) : g[K] = J;
  }
  function Fe(K) {
    K instanceof Object ? S.delete(K) : delete g[K];
  }
  function Ie() {
    return k;
  }
  function Ye(K) {
    se[K ? "unshift" : "push"](() => {
      k = K, t(8, k);
    });
  }
  return n.$$set = (K) => {
    e = X(X({}, e), tt(K)), t(20, r = me(e, i)), "use" in K && t(1, d = K.use), "class" in K && t(2, h = K.class), "chips" in K && t(0, m = K.chips), "key" in K && t(3, _ = K.key), "selected" in K && t(21, p = K.selected), "nonInteractive" in K && t(4, A = K.nonInteractive), "choice" in K && t(5, b = K.choice), "filter" in K && t(6, T = K.filter), "input" in K && t(7, C = K.input), "$$scope" in K && t(27, u = K.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*nonInteractive*/
    16 && Vt(v, s = A, s), n.$$.dirty[0] & /*choice*/
    32 && Vt(I, a = b, a), n.$$.dirty[0] & /*filter*/
    64 && Vt(D, l = T, l), n.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && R && b && O !== p && (t(24, O = p), R.select(p)), n.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && R && T) {
      const K = new Set(p), J = ps(O, K), Ce = ps(K, O);
      if (J.size || Ce.size) {
        t(24, O = K);
        for (let Ee of J)
          m.indexOf(Ee) !== -1 && R.handleChipSelection({ chipId: Ee, selected: !1 });
        for (let Ee of Ce)
          R.handleChipSelection({ chipId: Ee, selected: !0 });
      }
    }
  }, [
    m,
    d,
    h,
    _,
    A,
    b,
    T,
    C,
    k,
    f,
    B,
    v,
    I,
    D,
    U,
    W,
    q,
    z,
    M,
    L,
    r,
    p,
    Ie,
    R,
    O,
    o,
    Ye,
    u
  ];
}
class fd extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      cd,
      ud,
      ge,
      {
        use: 1,
        class: 2,
        chips: 0,
        key: 3,
        selected: 21,
        nonInteractive: 4,
        choice: 5,
        filter: 6,
        input: 7,
        getElement: 22
      },
      null,
      [-1, -1]
    );
  }
  get getElement() {
    return this.$$.ctx[22];
  }
}
function dd(n) {
  let e, t, i, r, l, a, s, o = [
    {
      class: r = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-chip__checkmark": !0
      })
    },
    /*$$restProps*/
    n[3]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = X(u, o[c]);
  return {
    c() {
      e = x("span"), t = lt("svg"), i = lt("path"), F(i, "class", "mdc-chip__checkmark-path"), F(i, "fill", "none"), F(i, "stroke", "black"), F(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), F(t, "class", "mdc-chip__checkmark-svg"), F(t, "viewBox", "-2 -3 30 30"), ce(e, u);
    },
    m(c, f) {
      H(c, e, f), Q(e, t), Q(t, i), n[5](e), a || (s = de(l = $e.call(
        null,
        e,
        /*use*/
        n[0]
      )), a = !0);
    },
    p(c, [f]) {
      ce(e, u = he(o, [
        f & /*className*/
        2 && r !== (r = re({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-chip__checkmark": !0
        })) && { class: r },
        f & /*$$restProps*/
        8 && /*$$restProps*/
        c[3]
      ])), l && pe(l.update) && f & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: Ze,
    o: Ze,
    d(c) {
      c && P(e), n[5](null), a = !1, s();
    }
  };
}
function hd(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { use: l = [] } = e, { class: a = "" } = e, s;
  function o() {
    return s;
  }
  function u(c) {
    se[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return n.$$set = (c) => {
    e = X(X({}, e), tt(c)), t(3, r = me(e, i)), "use" in c && t(0, l = c.use), "class" in c && t(1, a = c.class);
  }, [l, a, s, r, o, u];
}
class md extends ye {
  constructor(e) {
    super(), Ae(this, e, hd, dd, ge, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function gs(n) {
  let e, t, i = {};
  return e = new md({ props: i }), n[23](e), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    p(r, l) {
      const a = {};
      e.$set(a);
    },
    i(r) {
      t || (y(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[23](null), ee(e, r);
    }
  };
}
function pd(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[22].default
  ), a = Re(
    l,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let s = [
    {
      class: i = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-chip__primary-action": !0
      })
    },
    /*$filter*/
    n[3] || /*$choice*/
    n[2] ? {
      "aria-selected": (
        /*$isSelected*/
        n[10] ? "true" : "false"
      )
    } : {},
    /*roleProps*/
    n[8],
    /*internalAttrs*/
    n[7],
    /*$$restProps*/
    n[16]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = X(o, s[u]);
  return {
    c() {
      e = x("span"), t = x("span"), a && a.c(), F(t, "class", "mdc-chip__text"), ce(e, o);
    },
    m(u, c) {
      H(u, e, c), Q(e, t), a && a.m(t, null), n[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && De(
        a,
        l,
        u,
        /*$$scope*/
        u[21],
        r ? ke(
          l,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Me(
          /*$$scope*/
          u[21]
        ),
        null
      ), ce(e, o = he(s, [
        (!r || c & /*className*/
        2 && i !== (i = re({
          [
            /*className*/
            u[1]
          ]: !0,
          "mdc-chip__primary-action": !0
        }))) && { class: i },
        c & /*$filter, $choice, $isSelected*/
        1036 && /*$filter*/
        (u[3] || /*$choice*/
        u[2] ? {
          "aria-selected": (
            /*$isSelected*/
            u[10] ? "true" : "false"
          )
        } : {}),
        c & /*roleProps*/
        256 && /*roleProps*/
        u[8],
        c & /*internalAttrs*/
        128 && /*internalAttrs*/
        u[7],
        c & /*$$restProps*/
        65536 && /*$$restProps*/
        u[16]
      ]));
    },
    i(u) {
      r || (y(a, u), r = !0);
    },
    o(u) {
      E(a, u), r = !1;
    },
    d(u) {
      u && P(e), a && a.d(u), n[24](null);
    }
  };
}
function gd(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[22].default
  ), r = Re(
    i,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = x("span"), r && r.c(), F(e, "class", "mdc-chip__text");
    },
    m(l, a) {
      H(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, a) {
      r && r.p && (!t || a & /*$$scope*/
      2097152) && De(
        r,
        i,
        l,
        /*$$scope*/
        l[21],
        t ? ke(
          i,
          /*$$scope*/
          l[21],
          a,
          null
        ) : Me(
          /*$$scope*/
          l[21]
        ),
        null
      );
    },
    i(l) {
      t || (y(r, l), t = !0);
    },
    o(l) {
      E(r, l), t = !1;
    },
    d(l) {
      l && P(e), r && r.d(l);
    }
  };
}
function _d(n) {
  let e, t, i, r, l, a, s, o, u = (
    /*$filter*/
    n[3] && gs(n)
  );
  const c = [gd, pd], f = [];
  function d(h, m) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = d(n), r = f[i] = c[i](n), {
    c() {
      u && u.c(), e = oe(), t = x("span"), r.c(), F(t, "role", "gridcell");
    },
    m(h, m) {
      u && u.m(h, m), H(h, e, m), H(h, t, m), f[i].m(t, null), n[25](t), a = !0, s || (o = [
        de(l = $e.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[11].call(null, t)
        )
      ], s = !0);
    },
    p(h, [m]) {
      /*$filter*/
      h[3] ? u ? (u.p(h, m), m & /*$filter*/
      8 && y(u, 1)) : (u = gs(h), u.c(), y(u, 1), u.m(e.parentNode, e)) : u && (Ue(), E(u, 1, 1, () => {
        u = null;
      }), Ne());
      let _ = i;
      i = d(h), i === _ ? f[i].p(h, m) : (Ue(), E(f[_], 1, 1, () => {
        f[_] = null;
      }), Ne(), r = f[i], r ? r.p(h, m) : (r = f[i] = c[i](h), r.c()), y(r, 1), r.m(t, null)), l && pe(l.update) && m & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (y(u), y(r), a = !0);
    },
    o(h) {
      E(u), E(r), a = !1;
    },
    d(h) {
      h && (P(e), P(t)), u && u.d(h), f[i].d(), n[25](null), s = !1, Qe(o);
    }
  };
}
function bd(n, e, t) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let l = me(e, r), a, s, o, u, { $$slots: c = {}, $$scope: f } = e;
  const d = nt(et());
  let { use: h = [] } = e, { class: m = "" } = e, { tabindex: _ = ze("SMUI:chips:chip:focusable") ? 0 : -1 } = e, p, A, b, T = {};
  const C = ze("SMUI:chips:nonInteractive");
  rt(n, C, (q) => t(9, o = q));
  const k = ze("SMUI:chips:choice");
  rt(n, k, (q) => t(2, a = q));
  const R = ze("SMUI:chips:filter");
  rt(n, R, (q) => t(3, s = q));
  const g = ze("SMUI:chips:chip:isSelected");
  rt(n, g, (q) => t(10, u = q)), st(() => {
    let q = { focus: v, addAttr: S };
    return be(D(), "SMUIChipsChipPrimaryAction:mount", q), () => {
      be(D(), "SMUIChipsChipPrimaryAction:unmount", q);
    };
  });
  function S(q, z) {
    T[q] !== z && t(7, T[q] = z, T);
  }
  function B(q) {
    T.tabindex !== p.getAttribute("tabindex") ? Nr().then(q) : q();
  }
  function v() {
    B(() => {
      b && b.focus();
    });
  }
  function I() {
    return A && A.getElement();
  }
  function D() {
    return p;
  }
  function O(q) {
    se[q ? "unshift" : "push"](() => {
      A = q, t(5, A);
    });
  }
  function U(q) {
    se[q ? "unshift" : "push"](() => {
      b = q, t(6, b);
    });
  }
  function W(q) {
    se[q ? "unshift" : "push"](() => {
      p = q, t(4, p);
    });
  }
  return n.$$set = (q) => {
    e = X(X({}, e), tt(q)), t(16, l = me(e, r)), "use" in q && t(0, h = q.use), "class" in q && t(1, m = q.class), "tabindex" in q && t(17, _ = q.tabindex), "$$scope" in q && t(21, f = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*$filter, $choice, tabindex*/
    131084 && t(8, i = {
      role: s ? "checkbox" : a ? "radio" : "button",
      tabindex: _
    });
  }, [
    h,
    m,
    a,
    s,
    p,
    A,
    b,
    T,
    i,
    o,
    u,
    d,
    C,
    k,
    R,
    g,
    l,
    _,
    v,
    I,
    D,
    f,
    c,
    O,
    U,
    W
  ];
}
class Id extends ye {
  constructor(e) {
    super(), Ae(this, e, bd, _d, ge, {
      use: 0,
      class: 1,
      tabindex: 17,
      focus: 18,
      getInput: 19,
      getElement: 20
    });
  }
  get focus() {
    return this.$$.ctx[18];
  }
  get getInput() {
    return this.$$.ctx[19];
  }
  get getElement() {
    return this.$$.ctx[20];
  }
}
function _s(n) {
  let e;
  return {
    c() {
      e = x("span"), F(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function vd(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p = (
    /*touch*/
    n[4] && _s()
  );
  const A = (
    /*#slots*/
    n[23].default
  ), b = Re(
    A,
    n,
    /*$$scope*/
    n[22],
    null
  );
  let T = [
    {
      class: a = re({
        [
          /*icon$class*/
          n[7]
        ]: !0,
        "mdc-deprecated-chip-trailing-action__icon": !0
      })
    },
    Ve(
      /*$$restProps*/
      n[17],
      "icon$"
    )
  ], C = {};
  for (let g = 0; g < T.length; g += 1)
    C = X(C, T[g]);
  let k = [
    { type: "button" },
    {
      class: o = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-chip-trailing-action": !0,
        .../*internalClasses*/
        n[10]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        n[11]
      ).map(bs).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    {
      "aria-hidden": c = /*nonNavigable*/
      n[5] ? "true" : void 0
    },
    { tabindex: "-1" },
    /*internalAttrs*/
    n[12],
    Jt(
      /*$$restProps*/
      n[17],
      ["icon$"]
    )
  ], R = {};
  for (let g = 0; g < k.length; g += 1)
    R = X(R, k[g]);
  return {
    c() {
      e = x("button"), t = x("span"), i = oe(), p && p.c(), r = oe(), l = x("span"), b && b.c(), F(t, "class", "mdc-deprecated-chip-trailing-action__ripple"), ce(l, C), ce(e, R);
    },
    m(g, S) {
      H(g, e, S), Q(e, t), Q(e, i), p && p.m(e, null), Q(e, r), Q(e, l), b && b.m(l, null), e.autofocus && e.focus(), n[24](e), h = !0, m || (_ = [
        de(s = $e.call(
          null,
          l,
          /*icon$use*/
          n[6]
        )),
        de(f = Rt.call(null, e, {
          ripple: (
            /*ripple*/
            n[3]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[14]
          ),
          removeClass: (
            /*removeClass*/
            n[15]
          ),
          addStyle: (
            /*addStyle*/
            n[16]
          )
        })),
        de(d = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        fe(e, "click", function() {
          pe(
            /*instance*/
            n[9] && /*instance*/
            n[9].handleClick.bind(
              /*instance*/
              n[9]
            )
          ) && /*instance*/
          (n[9] && /*instance*/
          n[9].handleClick.bind(
            /*instance*/
            n[9]
          )).apply(this, arguments);
        }),
        fe(e, "keydown", function() {
          pe(
            /*instance*/
            n[9] && /*instance*/
            n[9].handleKeydown.bind(
              /*instance*/
              n[9]
            )
          ) && /*instance*/
          (n[9] && /*instance*/
          n[9].handleKeydown.bind(
            /*instance*/
            n[9]
          )).apply(this, arguments);
        })
      ], m = !0);
    },
    p(g, [S]) {
      n = g, /*touch*/
      n[4] ? p || (p = _s(), p.c(), p.m(e, r)) : p && (p.d(1), p = null), b && b.p && (!h || S & /*$$scope*/
      4194304) && De(
        b,
        A,
        n,
        /*$$scope*/
        n[22],
        h ? ke(
          A,
          /*$$scope*/
          n[22],
          S,
          null
        ) : Me(
          /*$$scope*/
          n[22]
        ),
        null
      ), ce(l, C = he(T, [
        (!h || S & /*icon$class*/
        128 && a !== (a = re({
          [
            /*icon$class*/
            n[7]
          ]: !0,
          "mdc-deprecated-chip-trailing-action__icon": !0
        }))) && { class: a },
        S & /*$$restProps*/
        131072 && Ve(
          /*$$restProps*/
          n[17],
          "icon$"
        )
      ])), s && pe(s.update) && S & /*icon$use*/
      64 && s.update.call(
        null,
        /*icon$use*/
        n[6]
      ), ce(e, R = he(k, [
        { type: "button" },
        (!h || S & /*className, internalClasses*/
        1026 && o !== (o = re({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-deprecated-chip-trailing-action": !0,
          .../*internalClasses*/
          n[10]
        }))) && { class: o },
        (!h || S & /*internalStyles, style*/
        2052 && u !== (u = Object.entries(
          /*internalStyles*/
          n[11]
        ).map(bs).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: u },
        (!h || S & /*nonNavigable*/
        32 && c !== (c = /*nonNavigable*/
        n[5] ? "true" : void 0)) && { "aria-hidden": c },
        { tabindex: "-1" },
        S & /*internalAttrs*/
        4096 && /*internalAttrs*/
        n[12],
        S & /*$$restProps*/
        131072 && Jt(
          /*$$restProps*/
          n[17],
          ["icon$"]
        )
      ])), f && pe(f.update) && S & /*ripple*/
      8 && f.update.call(null, {
        ripple: (
          /*ripple*/
          n[3]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          n[14]
        ),
        removeClass: (
          /*removeClass*/
          n[15]
        ),
        addStyle: (
          /*addStyle*/
          n[16]
        )
      }), d && pe(d.update) && S & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(g) {
      h || (y(b, g), h = !0);
    },
    o(g) {
      E(b, g), h = !1;
    },
    d(g) {
      g && P(e), p && p.d(), b && b.d(g), n[24](null), m = !1, Qe(_);
    }
  };
}
const bs = ([n, e]) => `${n}: ${e};`;
function Ad(n, e, t) {
  const i = [
    "use",
    "class",
    "style",
    "ripple",
    "touch",
    "nonNavigable",
    "icon$use",
    "icon$class",
    "isNavigable",
    "focus",
    "removeFocus",
    "getElement"
  ];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: s } = qr, o = nt(et());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { ripple: d = !0 } = e, { touch: h = !1 } = e, { nonNavigable: m = !1 } = e, { icon$use: _ = [] } = e, { icon$class: p = "" } = e, A, b, T = {}, C = {}, k = {};
  st(() => {
    t(9, b = new s({
      focus: () => {
        const M = W();
        I(() => {
          M.focus();
        });
      },
      getAttribute: B,
      notifyInteraction: (M) => be(W(), "SMUIChipTrailingAction:interaction", { trigger: M }, void 0, !0),
      notifyNavigation: (M) => {
        be(W(), "SMUIChipTrailingAction:navigation", { key: M }, void 0, !0);
      },
      setAttribute: v
    }));
    const z = { isNavigable: D, focus: O, removeFocus: U };
    return be(W(), "SMUIChipsChipTrailingAction:mount", z), b.init(), () => {
      be(W(), "SMUIChipsChipTrailingAction:unmount", z), b.destroy();
    };
  });
  function R(z) {
    T[z] || t(10, T[z] = !0, T);
  }
  function g(z) {
    (!(z in T) || T[z]) && t(10, T[z] = !1, T);
  }
  function S(z, M) {
    C[z] != M && (M === "" || M == null ? (delete C[z], t(11, C)) : t(11, C[z] = M, C));
  }
  function B(z) {
    var M;
    return z in k ? (M = k[z]) !== null && M !== void 0 ? M : null : W().getAttribute(z);
  }
  function v(z, M) {
    k[z] !== M && t(12, k[z] = M, k);
  }
  function I(z) {
    k.tabindex !== A.getAttribute("tabindex") ? Nr().then(z) : z();
  }
  function D() {
    return b.isNavigable();
  }
  function O() {
    b.focus();
  }
  function U() {
    b.removeFocus();
  }
  function W() {
    return A;
  }
  function q(z) {
    se[z ? "unshift" : "push"](() => {
      A = z, t(8, A);
    });
  }
  return n.$$set = (z) => {
    e = X(X({}, e), tt(z)), t(17, r = me(e, i)), "use" in z && t(0, u = z.use), "class" in z && t(1, c = z.class), "style" in z && t(2, f = z.style), "ripple" in z && t(3, d = z.ripple), "touch" in z && t(4, h = z.touch), "nonNavigable" in z && t(5, m = z.nonNavigable), "icon$use" in z && t(6, _ = z.icon$use), "icon$class" in z && t(7, p = z.icon$class), "$$scope" in z && t(22, a = z.$$scope);
  }, [
    u,
    c,
    f,
    d,
    h,
    m,
    _,
    p,
    A,
    b,
    T,
    C,
    k,
    o,
    R,
    g,
    S,
    r,
    D,
    O,
    U,
    W,
    a,
    l,
    q
  ];
}
class yd extends ye {
  constructor(e) {
    super(), Ae(this, e, Ad, vd, ge, {
      use: 0,
      class: 1,
      style: 2,
      ripple: 3,
      touch: 4,
      nonNavigable: 5,
      icon$use: 6,
      icon$class: 7,
      isNavigable: 18,
      focus: 19,
      removeFocus: 20,
      getElement: 21
    });
  }
  get isNavigable() {
    return this.$$.ctx[18];
  }
  get focus() {
    return this.$$.ctx[19];
  }
  get removeFocus() {
    return this.$$.ctx[20];
  }
  get getElement() {
    return this.$$.ctx[21];
  }
}
function Cd(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), r = Re(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = x("span"), r && r.c(), F(e, "class", "oscd-icon");
    },
    m(l, a) {
      H(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, [a]) {
      r && r.p && (!t || a & /*$$scope*/
      1) && De(
        r,
        i,
        l,
        /*$$scope*/
        l[0],
        t ? ke(
          i,
          /*$$scope*/
          l[0],
          a,
          null
        ) : Me(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (y(r, l), t = !0);
    },
    o(l) {
      E(r, l), t = !1;
    },
    d(l) {
      l && P(e), r && r.d(l);
    }
  };
}
function Ed(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e;
  return n.$$set = (l) => {
    "$$scope" in l && t(0, r = l.$$scope);
  }, [r, i];
}
class on extends ye {
  constructor(e) {
    super(), Ae(this, e, Ed, Cd, ge, {});
  }
}
function Sd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), F(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "height", "24px"), F(e, "viewBox", "0 -960 960 960"), F(e, "width", "24px"), F(e, "fill", "#e8eaed");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && F(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function Td(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Sd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ld(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Od extends ye {
  constructor(e) {
    super(), Ae(this, e, Ld, Td, ge, { svgStyles: 0 });
  }
}
function Rd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), F(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 -960 960 960"), F(e, "width", "24px");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && F(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function kd(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Rd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Dd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Ua extends ye {
  constructor(e) {
    super(), Ae(this, e, Dd, kd, ge, { svgStyles: 0 });
  }
}
function Md(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), F(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && F(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function Fd(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Md] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ud(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Nd extends ye {
  constructor(e) {
    super(), Ae(this, e, Ud, Fd, ge, { svgStyles: 0 });
  }
}
function wd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), F(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && F(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function Pd(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [wd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Hd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Bd extends ye {
  constructor(e) {
    super(), Ae(this, e, Hd, Pd, ge, { svgStyles: 0 });
  }
}
function Vd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "height", "24px"), F(e, "viewBox", "0 -960 960 960"), F(e, "width", "24px"), F(e, "fill", "#e8eaed");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p: Ze,
    d(i) {
      i && P(e);
    }
  };
}
function jd(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Vd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function qd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Gd extends ye {
  constructor(e) {
    super(), Ae(this, e, qd, jd, ge, { svgStyles: 0 });
  }
}
function Kd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), F(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && F(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function zd(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Kd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Wd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Xd extends ye {
  constructor(e) {
    super(), Ae(this, e, Wd, zd, ge, { svgStyles: 0 });
  }
}
function Yd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M200-440v-80h560v80H200Z"), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "height", "24px"), F(e, "viewBox", "0 -960 960 960"), F(e, "width", "24px"), F(e, "fill", "#e8eaed");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p: Ze,
    d(i) {
      i && P(e);
    }
  };
}
function Zd(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Yd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Qd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Jd extends ye {
  constructor(e) {
    super(), Ae(this, e, Qd, Zd, ge, { svgStyles: 0 });
  }
}
function xd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), F(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && F(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function $d(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [xd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function eh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class th extends ye {
  constructor(e) {
    super(), Ae(this, e, eh, $d, ge, { svgStyles: 0 });
  }
}
function nh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), F(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && F(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function ih(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [nh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function rh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class lh extends ye {
  constructor(e) {
    super(), Ae(this, e, rh, ih, ge, { svgStyles: 0 });
  }
}
function sh(n) {
  let e;
  return {
    c() {
      e = ut(
        /*title*/
        n[0]
      );
    },
    m(t, i) {
      H(t, e, i);
    },
    p(t, i) {
      i & /*title*/
      1 && vt(
        e,
        /*title*/
        t[0]
      );
    },
    d(t) {
      t && P(e);
    }
  };
}
function Is(n) {
  let e, t;
  return e = new yd({
    props: {
      $$slots: { default: [ah] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      n[2]
    ) && n[2].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      n = i;
      const l = {};
      r & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ah(n) {
  let e, t;
  return e = new Ua({
    props: {
      svgStyles: "margin-left: 0; fill: unset;"
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p: Ze,
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function oh(n) {
  let e, t, i, r;
  e = new Id({
    props: {
      $$slots: { default: [sh] },
      $$scope: { ctx: n }
    }
  });
  let l = (
    /*closeable*/
    n[1] && !/*disabled*/
    n[3] && Is(n)
  );
  return {
    c() {
      te(e.$$.fragment), t = oe(), l && l.c(), i = qe();
    },
    m(a, s) {
      $(e, a, s), H(a, t, s), l && l.m(a, s), H(a, i, s), r = !0;
    },
    p(a, s) {
      const o = {};
      s & /*$$scope, title*/
      17 && (o.$$scope = { dirty: s, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? l ? (l.p(a, s), s & /*closeable, disabled*/
      10 && y(l, 1)) : (l = Is(a), l.c(), y(l, 1), l.m(i.parentNode, i)) : l && (Ue(), E(l, 1, 1, () => {
        l = null;
      }), Ne());
    },
    i(a) {
      r || (y(e.$$.fragment, a), y(l), r = !0);
    },
    o(a) {
      E(e.$$.fragment, a), E(l), r = !1;
    },
    d(a) {
      a && (P(t), P(i)), ee(e, a), l && l.d(a);
    }
  };
}
function uh(n) {
  let e, t;
  return e = new ld({
    props: {
      chip: (
        /*title*/
        n[0]
      ),
      nonInteractive: !0,
      disabled: !0,
      class: (
        /*disabled*/
        n[3] ? "disabled" : ""
      ),
      $$slots: { default: [oh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*title*/
      1 && (l.chip = /*title*/
      i[0]), r & /*disabled*/
      8 && (l.class = /*disabled*/
      i[3] ? "disabled" : ""), r & /*$$scope, callback, closeable, disabled, title*/
      31 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ch(n, e, t) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: l } = e, { disabled: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, i = s.title), "closeable" in s && t(1, r = s.closeable), "callback" in s && t(2, l = s.callback), "disabled" in s && t(3, a = s.disabled);
  }, [i, r, l, a];
}
class fh extends ye {
  constructor(e) {
    super(), Ae(this, e, ch, uh, ge, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
function dh(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = x("div"), t = x("input"), i = oe(), r = x("label"), l = ut(
        /*label*/
        n[1]
      ), a = oe(), s = x("span"), F(t, "type", "date"), F(t, "id", "datetime-picker"), F(t, "class", "custom-text-field__input svelte-ar6zwk"), F(t, "placeholder", ""), F(r, "for", "datetime-picker"), F(r, "class", "custom-floating-label svelte-ar6zwk"), F(s, "class", "custom-line svelte-ar6zwk"), F(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      H(c, e, f), Q(e, t), Qt(
        t,
        /*value*/
        n[0]
      ), Q(e, i), Q(e, r), Q(r, l), Q(e, a), Q(e, s), o || (u = [
        fe(
          t,
          "input",
          /*input_input_handler*/
          n[3]
        ),
        fe(
          t,
          "change",
          /*handleDateTimeChange*/
          n[2]
        )
      ], o = !0);
    },
    p(c, [f]) {
      f & /*value*/
      1 && Qt(
        t,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && vt(
        l,
        /*label*/
        c[1]
      );
    },
    i: Ze,
    o: Ze,
    d(c) {
      c && P(e), o = !1, Qe(u);
    }
  };
}
function hh(n, e, t) {
  let { label: i = "" } = e, { value: r = "" } = e;
  function l(s) {
    t(0, r = s.target.value);
  }
  function a() {
    r = this.value, t(0, r);
  }
  return n.$$set = (s) => {
    "label" in s && t(1, i = s.label), "value" in s && t(0, r = s.value);
  }, [r, i, l, a];
}
class mh extends ye {
  constructor(e) {
    super(), Ae(this, e, hh, dh, ge, { label: 1, value: 0 });
  }
}
const Tt = [];
for (let n = 0; n < 256; ++n)
  Tt.push((n + 256).toString(16).slice(1));
function ph(n, e = 0) {
  return (Tt[n[e + 0]] + Tt[n[e + 1]] + Tt[n[e + 2]] + Tt[n[e + 3]] + "-" + Tt[n[e + 4]] + Tt[n[e + 5]] + "-" + Tt[n[e + 6]] + Tt[n[e + 7]] + "-" + Tt[n[e + 8]] + Tt[n[e + 9]] + "-" + Tt[n[e + 10]] + Tt[n[e + 11]] + Tt[n[e + 12]] + Tt[n[e + 13]] + Tt[n[e + 14]] + Tt[n[e + 15]]).toLowerCase();
}
let gr;
const gh = new Uint8Array(16);
function _h() {
  if (!gr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    gr = crypto.getRandomValues.bind(crypto);
  }
  return gr(gh);
}
const bh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vs = { randomUUID: bh };
function dn(n, e, t) {
  var r;
  if (vs.randomUUID && !n)
    return vs.randomUUID();
  n = n || {};
  const i = n.random ?? ((r = n.rng) == null ? void 0 : r.call(n)) ?? _h();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, ph(i);
}
const Ih = (n) => ({}), As = (n) => ({});
function ys(n) {
  let e, t, i;
  function r(a) {
    n[14](a);
  }
  let l = { label: "Input" };
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Fc({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        E(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Cs(n) {
  var o;
  let e, t, i, r;
  function l(u) {
    n[15](u);
  }
  function a(u) {
    n[16](u);
  }
  let s = {
    label: "Input",
    data: (
      /*getSelectedFilterType*/
      (o = n[5].inputType) == null ? void 0 : o.options
    )
  };
  return (
    /*inputValue*/
    n[3] !== void 0 && (s.value = /*inputValue*/
    n[3]), /*selectedOptionIndex*/
    n[1] !== void 0 && (s.selectedOptionIndex = /*selectedOptionIndex*/
    n[1]), e = new Oa({ props: s }), se.push(() => pt(e, "value", l)), se.push(() => pt(e, "selectedOptionIndex", a)), {
      c() {
        te(e.$$.fragment);
      },
      m(u, c) {
        $(e, u, c), r = !0;
      },
      p(u, c) {
        var d;
        const f = {};
        c & /*getSelectedFilterType*/
        32 && (f.data = /*getSelectedFilterType*/
        (d = u[5].inputType) == null ? void 0 : d.options), !t && c & /*inputValue*/
        8 && (t = !0, f.value = /*inputValue*/
        u[3], mt(() => t = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, f.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], mt(() => i = !1)), e.$set(f);
      },
      i(u) {
        r || (y(e.$$.fragment, u), r = !0);
      },
      o(u) {
        E(e.$$.fragment, u), r = !1;
      },
      d(u) {
        ee(e, u);
      }
    }
  );
}
function Es(n) {
  let e, t, i;
  function r(a) {
    n[17](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new mh({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        E(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Ss(n) {
  let e, t, i;
  function r(a) {
    n[18](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Rh({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        E(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function vh(n) {
  let e;
  return {
    c() {
      e = ut("Add Filter");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function Ah(n) {
  let e, t;
  function i() {
    return (
      /*func*/
      n[19](
        /*chip*/
        n[23]
      )
    );
  }
  return e = new fh({
    props: {
      title: (
        /*chip*/
        n[23].text
      ),
      callback: i,
      disabled: (
        /*chip*/
        n[23].disabled
      )
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l & /*chip*/
      8388608 && (a.title = /*chip*/
      n[23].text), l & /*chip*/
      8388608 && (a.callback = i), l & /*chip*/
      8388608 && (a.disabled = /*chip*/
      n[23].disabled), e.$set(a);
    },
    i(r) {
      t || (y(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function yh(n) {
  var D, O, U, W, q, z, M, L;
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, A, b, T;
  function C(V) {
    n[13](V);
  }
  let k = {
    disabled: (
      /*disabled*/
      n[2]
    ),
    label: "Filter types",
    data: (
      /*convertTypeToSelection*/
      n[7]
    )
  };
  /*selectedFilterType*/
  n[4] !== void 0 && (k.value = /*selectedFilterType*/
  n[4]), r = new Oa({ props: k }), se.push(() => pt(r, "value", C));
  let R = (
    /*getSelectedFilterType*/
    ((O = (D = n[5]) == null ? void 0 : D.inputType) == null ? void 0 : O.type) === "string" && ys(n)
  ), g = (
    /*getSelectedFilterType*/
    ((W = (U = n[5]) == null ? void 0 : U.inputType) == null ? void 0 : W.type) === "select" && Cs(n)
  ), S = (
    /*getSelectedFilterType*/
    ((z = (q = n[5]) == null ? void 0 : q.inputType) == null ? void 0 : z.type) === "datepicker" && Es(n)
  ), B = (
    /*getSelectedFilterType*/
    ((L = (M = n[5]) == null ? void 0 : M.inputType) == null ? void 0 : L.type) === "timepicker" && Ss(n)
  );
  d = new Br({
    props: {
      callback: (
        /*addFilter*/
        n[8]
      ),
      disabled: (
        /*addFilterDisabled*/
        n[6]
      ),
      $$slots: { default: [vh] },
      $$scope: { ctx: n }
    }
  });
  const v = (
    /*#slots*/
    n[12]["filter-controls"]
  ), I = Re(
    v,
    n,
    /*$$scope*/
    n[20],
    As
  );
  return b = new fd({
    props: {
      chips: (
        /*activeFilters*/
        n[0]
      ),
      $$slots: {
        default: [
          Ah,
          ({ chip: V }) => ({ 23: V }),
          ({ chip: V }) => V ? 8388608 : 0
        ]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = x("div"), t = x("div"), i = x("div"), te(r.$$.fragment), a = oe(), R && R.c(), s = oe(), g && g.c(), o = oe(), S && S.c(), u = oe(), B && B.c(), c = oe(), f = x("div"), te(d.$$.fragment), h = oe(), I && I.c(), m = oe(), _ = x("div"), p = oe(), A = x("div"), te(b.$$.fragment), F(i, "class", "filter-input-controls svelte-1tmo1p6"), F(f, "class", "filter-button-controls svelte-1tmo1p6"), F(t, "class", "input-section svelte-1tmo1p6"), F(_, "class", "separator svelte-1tmo1p6"), F(A, "class", "chip-section svelte-1tmo1p6"), F(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(V, ue) {
      H(V, e, ue), Q(e, t), Q(t, i), $(r, i, null), Q(i, a), R && R.m(i, null), Q(i, s), g && g.m(i, null), Q(i, o), S && S.m(i, null), Q(i, u), B && B.m(i, null), Q(t, c), Q(t, f), $(d, f, null), Q(f, h), I && I.m(f, null), Q(e, m), Q(e, _), Q(e, p), Q(e, A), $(b, A, null), T = !0;
    },
    p(V, ue) {
      var K, J, Ce, Ee, we, ie, G, Ge;
      const Fe = {};
      ue & /*disabled*/
      4 && (Fe.disabled = /*disabled*/
      V[2]), ue & /*convertTypeToSelection*/
      128 && (Fe.data = /*convertTypeToSelection*/
      V[7]), !l && ue & /*selectedFilterType*/
      16 && (l = !0, Fe.value = /*selectedFilterType*/
      V[4], mt(() => l = !1)), r.$set(Fe), /*getSelectedFilterType*/
      ((J = (K = V[5]) == null ? void 0 : K.inputType) == null ? void 0 : J.type) === "string" ? R ? (R.p(V, ue), ue & /*getSelectedFilterType*/
      32 && y(R, 1)) : (R = ys(V), R.c(), y(R, 1), R.m(i, s)) : R && (Ue(), E(R, 1, 1, () => {
        R = null;
      }), Ne()), /*getSelectedFilterType*/
      ((Ee = (Ce = V[5]) == null ? void 0 : Ce.inputType) == null ? void 0 : Ee.type) === "select" ? g ? (g.p(V, ue), ue & /*getSelectedFilterType*/
      32 && y(g, 1)) : (g = Cs(V), g.c(), y(g, 1), g.m(i, o)) : g && (Ue(), E(g, 1, 1, () => {
        g = null;
      }), Ne()), /*getSelectedFilterType*/
      ((ie = (we = V[5]) == null ? void 0 : we.inputType) == null ? void 0 : ie.type) === "datepicker" ? S ? (S.p(V, ue), ue & /*getSelectedFilterType*/
      32 && y(S, 1)) : (S = Es(V), S.c(), y(S, 1), S.m(i, u)) : S && (Ue(), E(S, 1, 1, () => {
        S = null;
      }), Ne()), /*getSelectedFilterType*/
      ((Ge = (G = V[5]) == null ? void 0 : G.inputType) == null ? void 0 : Ge.type) === "timepicker" ? B ? (B.p(V, ue), ue & /*getSelectedFilterType*/
      32 && y(B, 1)) : (B = Ss(V), B.c(), y(B, 1), B.m(i, null)) : B && (Ue(), E(B, 1, 1, () => {
        B = null;
      }), Ne());
      const Ie = {};
      ue & /*addFilterDisabled*/
      64 && (Ie.disabled = /*addFilterDisabled*/
      V[6]), ue & /*$$scope*/
      1048576 && (Ie.$$scope = { dirty: ue, ctx: V }), d.$set(Ie), I && I.p && (!T || ue & /*$$scope*/
      1048576) && De(
        I,
        v,
        V,
        /*$$scope*/
        V[20],
        T ? ke(
          v,
          /*$$scope*/
          V[20],
          ue,
          Ih
        ) : Me(
          /*$$scope*/
          V[20]
        ),
        As
      );
      const Ye = {};
      ue & /*activeFilters*/
      1 && (Ye.chips = /*activeFilters*/
      V[0]), ue & /*$$scope, chip*/
      9437184 && (Ye.$$scope = { dirty: ue, ctx: V }), b.$set(Ye);
    },
    i(V) {
      T || (y(r.$$.fragment, V), y(R), y(g), y(S), y(B), y(d.$$.fragment, V), y(I, V), y(b.$$.fragment, V), T = !0);
    },
    o(V) {
      E(r.$$.fragment, V), E(R), E(g), E(S), E(B), E(d.$$.fragment, V), E(I, V), E(b.$$.fragment, V), T = !1;
    },
    d(V) {
      V && P(e), ee(r), R && R.d(), g && g.d(), S && S.d(), B && B.d(), ee(d), I && I.d(V), ee(b);
    }
  };
}
function Ch(n) {
  let e, t;
  return e = new Ra({
    props: {
      $$slots: { default: [yh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, activeFilters, addFilterDisabled, inputValue, getSelectedFilterType, selectedOptionIndex, disabled, convertTypeToSelection, selectedFilterType*/
      1048831 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Eh(n, e, t) {
  let i, r, l, { $$slots: a = {}, $$scope: s } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: f = -1 } = e, { disabled: d = !1 } = e, h = "", m = "";
  function _() {
    var v;
    if (!m || !h) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!l) {
      console.warn("Filter type not found");
      return;
    }
    let I = [
      ...u,
      {
        id: dn(),
        key: l.label.toLowerCase(),
        value: h,
        operation: "=",
        text: `${m}: ${c && (!((v = l.inputType.options) === null || v === void 0) && v.length) ? l.inputType.options[f].label : h}`,
        disabled: !1
      }
    ];
    t(0, u = I), b(), A();
  }
  function p(v) {
    setTimeout(
      () => {
        t(0, u = u.filter((I) => I.id !== v)), b();
      },
      0
    );
  }
  function A() {
    t(3, h = ""), t(4, m = void 0);
  }
  function b() {
    const v = [...u];
    v.find((I) => I.key === "uuid") ? v.filter((I) => I.key !== "uuid").forEach((I) => {
      I.disabled = !0;
    }) : v.forEach((I) => {
      I.disabled = !1;
    }), t(0, u = v);
  }
  function T(v) {
    m = v, t(4, m);
  }
  function C(v) {
    h = v, t(3, h);
  }
  function k(v) {
    h = v, t(3, h);
  }
  function R(v) {
    f = v, t(1, f);
  }
  function g(v) {
    h = v, t(3, h);
  }
  function S(v) {
    h = v, t(3, h);
  }
  const B = (v) => p(v.id);
  return n.$$set = (v) => {
    "filterTypes" in v && t(10, o = v.filterTypes), "activeFilters" in v && t(0, u = v.activeFilters), "useOptionLabelInChipText" in v && t(11, c = v.useOptionLabelInChipText), "selectedOptionIndex" in v && t(1, f = v.selectedOptionIndex), "disabled" in v && t(2, d = v.disabled), "$$scope" in v && t(20, s = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*filterTypes*/
    1024 && t(7, i = o.map((v) => ({ value: v.label, label: v.label }))), n.$$.dirty & /*selectedFilterType, inputValue*/
    24 && t(6, r = !m || !h), n.$$.dirty & /*filterTypes, selectedFilterType*/
    1040 && t(5, l = o.find((v) => v.label === m));
  }, [
    u,
    f,
    d,
    h,
    m,
    l,
    r,
    i,
    _,
    p,
    o,
    c,
    a,
    T,
    C,
    k,
    R,
    g,
    S,
    B,
    s
  ];
}
class Ts extends ye {
  constructor(e) {
    super(), Ae(this, e, Eh, Ch, ge, {
      filterTypes: 10,
      activeFilters: 0,
      useOptionLabelInChipText: 11,
      selectedOptionIndex: 1,
      disabled: 2
    });
  }
}
function Ls(n) {
  let e, t, i, r, l, a;
  return {
    c() {
      e = x("div"), t = x("div"), i = x("div"), r = oe(), l = x("span"), a = ut(
        /*message*/
        n[1]
      ), F(i, "class", "loading-spinner svelte-quxj5m"), F(l, "class", "loading-message svelte-quxj5m"), F(t, "class", "loading-spinner-container svelte-quxj5m"), F(e, "class", "overlay svelte-quxj5m");
    },
    m(s, o) {
      H(s, e, o), Q(e, t), Q(t, i), Q(t, r), Q(t, l), Q(l, a);
    },
    p(s, o) {
      o & /*message*/
      2 && vt(
        a,
        /*message*/
        s[1]
      );
    },
    d(s) {
      s && P(e);
    }
  };
}
function Sh(n) {
  let e, t = !/*loadingDone*/
  n[0] && Ls(n);
  return {
    c() {
      e = x("div"), t && t.c();
    },
    m(i, r) {
      H(i, e, r), t && t.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? t && (t.d(1), t = null) : t ? t.p(i, r) : (t = Ls(i), t.c(), t.m(e, null));
    },
    i: Ze,
    o: Ze,
    d(i) {
      i && P(e), t && t.d();
    }
  };
}
function Th(n, e, t) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return n.$$set = (l) => {
    "loadingDone" in l && t(0, i = l.loadingDone), "message" in l && t(1, r = l.message);
  }, [i, r];
}
class Na extends ye {
  constructor(e) {
    super(), Ae(this, e, Th, Sh, ge, { loadingDone: 0, message: 1 });
  }
}
function Lh(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = x("div"), t = x("input"), i = oe(), r = x("label"), l = ut(
        /*label*/
        n[1]
      ), a = oe(), s = x("span"), F(t, "type", "datetime-local"), F(t, "id", "datetime-picker"), F(t, "class", "custom-text-field__input svelte-ar6zwk"), F(t, "placeholder", ""), F(r, "for", "datetime-picker"), F(r, "class", "custom-floating-label svelte-ar6zwk"), F(s, "class", "custom-line svelte-ar6zwk"), F(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      H(c, e, f), Q(e, t), Qt(
        t,
        /*value*/
        n[0]
      ), Q(e, i), Q(e, r), Q(r, l), Q(e, a), Q(e, s), o || (u = [
        fe(
          t,
          "input",
          /*input_input_handler*/
          n[3]
        ),
        fe(
          t,
          "change",
          /*handleDateTimeChange*/
          n[2]
        )
      ], o = !0);
    },
    p(c, [f]) {
      f & /*value*/
      1 && Qt(
        t,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && vt(
        l,
        /*label*/
        c[1]
      );
    },
    i: Ze,
    o: Ze,
    d(c) {
      c && P(e), o = !1, Qe(u);
    }
  };
}
function Oh(n, e, t) {
  let { label: i = "" } = e, { value: r = "" } = e;
  function l(s) {
    t(0, r = s.target.value);
  }
  function a() {
    r = this.value, t(0, r);
  }
  return n.$$set = (s) => {
    "label" in s && t(1, i = s.label), "value" in s && t(0, r = s.value);
  }, [r, i, l, a];
}
class Rh extends ye {
  constructor(e) {
    super(), Ae(this, e, Oh, Lh, ge, { label: 1, value: 0 });
  }
}
const kh = (n) => ({}), Os = (n) => ({});
function Dh(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[2].content
  ), o = Re(
    s,
    n,
    /*$$scope*/
    n[3],
    Os
  );
  return {
    c() {
      e = x("details"), t = x("summary"), i = ut(
        /*title*/
        n[0]
      ), r = oe(), l = x("div"), o && o.c(), F(t, "class", "svelte-l05fgd"), F(l, "class", "expandable-content svelte-l05fgd"), e.open = /*open*/
      n[1], F(e, "class", "svelte-l05fgd");
    },
    m(u, c) {
      H(u, e, c), Q(e, t), Q(t, i), Q(e, r), Q(e, l), o && o.m(l, null), a = !0;
    },
    p(u, c) {
      (!a || c & /*title*/
      1) && vt(
        i,
        /*title*/
        u[0]
      ), o && o.p && (!a || c & /*$$scope*/
      8) && De(
        o,
        s,
        u,
        /*$$scope*/
        u[3],
        a ? ke(
          s,
          /*$$scope*/
          u[3],
          c,
          kh
        ) : Me(
          /*$$scope*/
          u[3]
        ),
        Os
      ), (!a || c & /*open*/
      2) && (e.open = /*open*/
      u[1]);
    },
    i(u) {
      a || (y(o, u), a = !0);
    },
    o(u) {
      E(o, u), a = !1;
    },
    d(u) {
      u && P(e), o && o.d(u);
    }
  };
}
function Mh(n) {
  let e, t;
  return e = new Ra({
    props: {
      $$slots: { default: [Dh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, open, title*/
      11 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Fh(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { title: l = "" } = e, { open: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title), "open" in s && t(1, a = s.open), "$$scope" in s && t(3, r = s.$$scope);
  }, [l, a, i, r];
}
class wa extends ye {
  constructor(e) {
    super(), Ae(this, e, Fh, Mh, ge, { title: 0, open: 1 });
  }
}
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
var Ht = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Xt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ii = {
  PRIMARY_HALF: 0.8367142,
  PRIMARY_FULL: 2.00611057,
  SECONDARY_QUARTER: 0.37651913,
  SECONDARY_HALF: 0.84386165,
  SECONDARY_FULL: 1.60277782
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
var Uh = (
  /** @class */
  function(n) {
    at(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ht;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          attachResizeObserver: function() {
            return null;
          },
          forceLayout: function() {
          },
          getWidth: function() {
            return 0;
          },
          hasClass: function() {
            return !1;
          },
          setBufferBarStyle: function() {
            return null;
          },
          setPrimaryBarStyle: function() {
            return null;
          },
          setStyle: function() {
          },
          removeAttribute: function() {
          },
          removeClass: function() {
          },
          setAttribute: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this;
      this.determinate = !this.adapter.hasClass(Ht.INDETERMINATE_CLASS), this.adapter.addClass(Ht.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, l;
        if (!t.determinate)
          try {
            for (var a = Ct(i), s = a.next(); !s.done; s = a.next()) {
              var o = s.value;
              o.contentRect && t.calculateAndSetDimensions(o.contentRect.width);
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              s && !s.done && (l = a.return) && l.call(a);
            } finally {
              if (r)
                throw r.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(t) {
      if (this.determinate = t, this.determinate) {
        this.adapter.removeClass(Ht.INDETERMINATE_CLASS), this.adapter.setAttribute(Xt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Xt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Xt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Ht.INDETERMINATE_CLASS), this.adapter.removeAttribute(Xt.ARIA_VALUENOW), this.adapter.removeAttribute(Xt.ARIA_VALUEMAX), this.adapter.removeAttribute(Xt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(t) {
      this.progress = t, this.determinate && (this.setPrimaryBarProgress(t), this.adapter.setAttribute(Xt.ARIA_VALUENOW, t.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(t) {
      this.buffer = t, this.determinate && this.setBufferBarProgress(t);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(Ht.CLOSED_CLASS), this.adapter.removeClass(Ht.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Xt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(Ht.CLOSED_CLASS), this.adapter.setAttribute(Xt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(Ht.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Ht.CLOSED_CLASS) && this.adapter.addClass(Ht.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(Ht.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Ht.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(t) {
      var i = "scaleX(" + t + ")", r = typeof window < "u" ? zc(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(t) {
      var i = t * 100 + "%";
      this.adapter.setBufferBarStyle(Xt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(t) {
      var i = t * ii.PRIMARY_HALF, r = t * ii.PRIMARY_FULL, l = t * ii.SECONDARY_QUARTER, a = t * ii.SECONDARY_HALF, s = t * ii.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -s + "px"), this.restartAnimation();
    }, e;
  }(Et)
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
var rn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Rs = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, yn = {
  ARIA_SELECTED: Rs.ARIA_SELECTED,
  ARIA_SORT: Rs.ARIA_SORT
}, Bt;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Bt || (Bt = {}));
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
var Nh = (
  /** @class */
  function(n) {
    at(e, n);
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
      return wr(this, void 0, void 0, function() {
        return Pr(this, function(t) {
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
      for (var i = 0; i < this.adapter.getRowCount(); i++) {
        var r = this.adapter.getRowIdAtIndex(i), l = !1;
        r && t.indexOf(r) >= 0 && (l = !0), this.adapter.setRowCheckboxCheckedAtIndex(i, l), this.selectRowAtIndex(i, l);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var t = [], i = 0; i < this.adapter.getRowCount(); i++)
        t.push(this.adapter.getRowIdAtIndex(i));
      return t;
    }, e.prototype.getSelectedRowIds = function() {
      for (var t = [], i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.isCheckboxAtRowIndexChecked(i) && t.push(this.adapter.getRowIdAtIndex(i));
      return t;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var t = this.adapter.isHeaderRowCheckboxChecked(), i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.setRowCheckboxCheckedAtIndex(i, t), this.selectRowAtIndex(i, t);
      t ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(t) {
      var i = this.adapter.getRowIndexByChildElement(t.target);
      if (i !== -1) {
        var r = this.adapter.isCheckboxAtRowIndexChecked(i);
        this.selectRowAtIndex(i, r), this.setHeaderRowCheckboxState();
        var l = this.adapter.getRowIdAtIndex(i);
        this.adapter.notifyRowSelectionChanged({ rowId: l, rowIndex: i, selected: r });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var i = t.columnId, r = t.columnIndex, l = t.headerCell, a = 0; a < this.adapter.getHeaderCellCount(); a++)
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, rn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, rn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, yn.ARIA_SORT, Bt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Bt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, rn.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(r, yn.ARIA_SORT), o = Bt.NONE;
      s === Bt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, rn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, yn.ARIA_SORT, Bt.DESCENDING), o = Bt.DESCENDING) : s === Bt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, rn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, yn.ARIA_SORT, Bt.ASCENDING), o = Bt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, yn.ARIA_SORT, Bt.ASCENDING), o = Bt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
        columnId: i,
        columnIndex: r,
        headerCell: l,
        sortValue: o
      });
    }, e.prototype.handleRowClick = function(t) {
      var i = t.rowId, r = t.row;
      this.adapter.notifyRowClick({
        rowId: i,
        row: r
      });
    }, e.prototype.showProgress = function() {
      var t = this.adapter.getTableHeaderHeight(), i = this.adapter.getTableContainerHeight() - t, r = t;
      this.adapter.setProgressIndicatorStyles({
        height: i + "px",
        top: r + "px"
      }), this.adapter.addClass(rn.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(rn.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, i) {
      i ? (this.adapter.addClassAtRowIndex(t, rn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, yn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, rn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, yn.ARIA_SELECTED, "false"));
    }, e;
  }(Et)
);
const wh = (n) => ({}), ks = (n) => ({}), Ph = (n) => ({}), Ds = (n) => ({});
function Ms(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[36].progress
  ), s = Re(
    a,
    n,
    /*$$scope*/
    n[35],
    Ds
  );
  return {
    c() {
      e = x("div"), t = x("div"), i = oe(), s && s.c(), F(t, "class", "mdc-data-table__scrim"), F(e, "class", "mdc-data-table__progress-indicator"), F(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(Fs).join(" "));
    },
    m(o, u) {
      H(o, e, u), Q(e, t), Q(e, i), s && s.m(e, null), l = !0;
    },
    p(o, u) {
      s && s.p && (!l || u[1] & /*$$scope*/
      16) && De(
        s,
        a,
        o,
        /*$$scope*/
        o[35],
        l ? ke(
          a,
          /*$$scope*/
          o[35],
          u,
          Ph
        ) : Me(
          /*$$scope*/
          o[35]
        ),
        Ds
      ), (!l || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Fs).join(" "))) && F(e, "style", r);
    },
    i(o) {
      l || (y(s, o), l = !0);
    },
    o(o) {
      E(s, o), l = !1;
    },
    d(o) {
      o && P(e), s && s.d(o);
    }
  };
}
function Hh(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m;
  const _ = (
    /*#slots*/
    n[36].default
  ), p = Re(
    _,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let A = [
    {
      class: r = re({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ve(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], b = {};
  for (let v = 0; v < A.length; v += 1)
    b = X(b, A[v]);
  let T = [
    {
      class: a = re({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ve(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], C = {};
  for (let v = 0; v < T.length; v += 1)
    C = X(C, T[v]);
  let k = (
    /*$$slots*/
    n[24].progress && Ms(n)
  );
  const R = (
    /*#slots*/
    n[36].paginate
  ), g = Re(
    R,
    n,
    /*$$scope*/
    n[35],
    ks
  );
  let S = [
    {
      class: c = re({
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
    Jt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], B = {};
  for (let v = 0; v < S.length; v += 1)
    B = X(B, S[v]);
  return {
    c() {
      e = x("div"), t = x("div"), i = x("table"), p && p.c(), o = oe(), k && k.c(), u = oe(), g && g.c(), ce(i, b), ce(t, C), ce(e, B);
    },
    m(v, I) {
      H(v, e, I), Q(e, t), Q(t, i), p && p.m(i, null), n[37](t), Q(e, o), k && k.m(e, null), Q(e, u), g && g.m(e, null), n[38](e), d = !0, h || (m = [
        de(l = $e.call(
          null,
          i,
          /*table$use*/
          n[5]
        )),
        de(s = $e.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        de(f = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        fe(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        fe(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        fe(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        fe(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        fe(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        fe(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        fe(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        fe(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        fe(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], h = !0);
    },
    p(v, I) {
      p && p.p && (!d || I[1] & /*$$scope*/
      16) && De(
        p,
        _,
        v,
        /*$$scope*/
        v[35],
        d ? ke(
          _,
          /*$$scope*/
          v[35],
          I,
          null
        ) : Me(
          /*$$scope*/
          v[35]
        ),
        null
      ), ce(i, b = he(A, [
        (!d || I[0] & /*table$class*/
        64 && r !== (r = re({
          [
            /*table$class*/
            v[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        I[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          v[25],
          "table$"
        )
      ])), l && pe(l.update) && I[0] & /*table$use*/
      32 && l.update.call(
        null,
        /*table$use*/
        v[5]
      ), ce(t, C = he(T, [
        (!d || I[0] & /*container$class*/
        16 && a !== (a = re({
          [
            /*container$class*/
            v[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        I[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          v[25],
          "container$"
        )
      ])), s && pe(s.update) && I[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        v[3]
      ), /*$$slots*/
      v[24].progress ? k ? (k.p(v, I), I[0] & /*$$slots*/
      16777216 && y(k, 1)) : (k = Ms(v), k.c(), y(k, 1), k.m(e, u)) : k && (Ue(), E(k, 1, 1, () => {
        k = null;
      }), Ne()), g && g.p && (!d || I[1] & /*$$scope*/
      16) && De(
        g,
        R,
        v,
        /*$$scope*/
        v[35],
        d ? ke(
          R,
          /*$$scope*/
          v[35],
          I,
          wh
        ) : Me(
          /*$$scope*/
          v[35]
        ),
        ks
      ), ce(e, B = he(S, [
        (!d || I[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = re({
          [
            /*className*/
            v[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            v[2]
          ),
          .../*internalClasses*/
          v[12]
        }))) && { class: c },
        I[0] & /*$$restProps*/
        33554432 && Jt(
          /*$$restProps*/
          v[25],
          ["container$", "table$"]
        )
      ])), f && pe(f.update) && I[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        v[0]
      );
    },
    i(v) {
      d || (y(p, v), y(k), y(g, v), d = !0);
    },
    o(v) {
      E(p, v), E(k), E(g, v), d = !1;
    },
    d(v) {
      v && P(e), p && p.d(v), n[37](null), k && k.d(), g && g.d(v), n[38](null), h = !1, Qe(m);
    }
  };
}
const Fs = ([n, e]) => `${n}: ${e};`;
function Bh(n, e, t) {
  const i = [
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
  let r = me(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const c = Fr(o), { closest: f } = ki, d = nt(et());
  let { use: h = [] } = e, { class: m = "" } = e, { stickyHeader: _ = !1 } = e, { sortable: p = !1 } = e, { sort: A = null } = e, { sortDirection: b = "ascending" } = e, { sortAscendingAriaLabel: T = "sorted, ascending" } = e, { sortDescendingAriaLabel: C = "sorted, descending" } = e, { container$use: k = [] } = e, { container$class: R = "" } = e, { table$use: g = [] } = e, { table$class: S = "" } = e, B, v, I, D, O, U = {}, W = { height: "auto", top: "initial" }, q = ze("SMUI:addLayoutListener"), z, M = !1, L = yt(!1);
  rt(n, L, (j) => t(34, l = j));
  let V = yt(A);
  rt(n, V, (j) => t(45, s = j));
  let ue = yt(b);
  rt(n, ue, (j) => t(44, a = j)), Ke("SMUI:checkbox:context", "data-table"), Ke("SMUI:linear-progress:context", "data-table"), Ke("SMUI:linear-progress:closed", L), Ke("SMUI:data-table:sortable", p), Ke("SMUI:data-table:sort", V), Ke("SMUI:data-table:sortDirection", ue), Ke("SMUI:data-table:sortAscendingAriaLabel", T), Ke("SMUI:data-table:sortDescendingAriaLabel", C), q && (z = q(Ge));
  let Fe;
  st(() => (t(7, v = new Nh({
    addClass: J,
    removeClass: Ce,
    getHeaderCellElements: () => {
      var j;
      return (j = D == null ? void 0 : D.cells.map((le) => le.element)) !== null && j !== void 0 ? j : [];
    },
    getHeaderCellCount: () => {
      var j;
      return (j = D == null ? void 0 : D.cells.length) !== null && j !== void 0 ? j : 0;
    },
    getAttributeByHeaderCellIndex: (j, le) => {
      var ne;
      return (ne = D == null ? void 0 : D.orderedCells[j].getAttr(le)) !== null && ne !== void 0 ? ne : null;
    },
    setAttributeByHeaderCellIndex: (j, le, ne) => {
      D == null || D.orderedCells[j].addAttr(le, ne);
    },
    setClassNameByHeaderCellIndex: (j, le) => {
      D == null || D.orderedCells[j].addClass(le);
    },
    removeClassNameByHeaderCellIndex: (j, le) => {
      D == null || D.orderedCells[j].removeClass(le);
    },
    notifySortAction: (j) => {
      t(26, A = j.columnId), t(27, b = j.sortValue), be(Be(), "SMUIDataTable:sorted", j, void 0, !0);
    },
    getTableContainerHeight: () => I.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const j = Be().querySelector(".mdc-data-table__header-row");
      if (!j)
        throw new Error("MDCDataTable: Table header element not found.");
      return j.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (j) => {
      t(13, W = j);
    },
    addClassAtRowIndex: (j, le) => {
      O == null || O.orderedRows[j].addClass(le);
    },
    getRowCount: () => {
      var j;
      return (j = O == null ? void 0 : O.rows.length) !== null && j !== void 0 ? j : 0;
    },
    getRowElements: () => {
      var j;
      return (j = O == null ? void 0 : O.rows.map((le) => le.element)) !== null && j !== void 0 ? j : [];
    },
    getRowIdAtIndex: (j) => {
      var le;
      return (le = O == null ? void 0 : O.orderedRows[j].rowId) !== null && le !== void 0 ? le : null;
    },
    getRowIndexByChildElement: (j) => {
      var le;
      return (le = O == null ? void 0 : O.orderedRows.map((ne) => ne.element).indexOf(f(j, ".mdc-data-table__row"))) !== null && le !== void 0 ? le : -1;
    },
    getSelectedRowCount: () => {
      var j;
      return (j = O == null ? void 0 : O.rows.filter((le) => le.selected).length) !== null && j !== void 0 ? j : 0;
    },
    isCheckboxAtRowIndexChecked: (j) => {
      const le = O == null ? void 0 : O.orderedRows[j].checkbox;
      return le ? le.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const j = D == null ? void 0 : D.checkbox;
      return j ? j.checked : !1;
    },
    isRowsSelectable: () => !!Be().querySelector(".mdc-data-table__row-checkbox") || !!Be().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (j) => {
      const le = O == null ? void 0 : O.orderedRows[j.rowIndex];
      le && be(
        Be(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: le.element,
          rowId: le.rowId,
          rowIndex: j.rowIndex,
          selected: j.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Ee(!1), be(Be(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Ee(!1), be(Be(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (j) => {
      be(Be(), "SMUIDataTable:rowClick", j, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (j, le) => {
      O == null || O.orderedRows[j].removeClass(le);
    },
    setAttributeAtRowIndex: (j, le, ne) => {
      O == null || O.orderedRows[j].addAttr(le, ne);
    },
    setHeaderRowCheckboxChecked: (j) => {
      const le = D == null ? void 0 : D.checkbox;
      le && (le.checked = j);
    },
    setHeaderRowCheckboxIndeterminate: Ee,
    setRowCheckboxCheckedAtIndex: (j, le) => {
      const ne = O == null ? void 0 : O.orderedRows[j].checkbox;
      ne && (ne.checked = le);
    },
    setSortStatusLabelByHeaderCellIndex: (j, le) => {
    }
    // Handled automatically.
  })), v.init(), v.layout(), t(14, M = !0), () => {
    v.destroy();
  })), xt(() => {
    z && z();
  });
  function Ie(j) {
    t(10, D = j.detail);
  }
  function Ye(j) {
    t(11, O = j.detail);
  }
  function K(j) {
    v && v.handleRowCheckboxChange(j);
  }
  function J(j) {
    U[j] || t(12, U[j] = !0, U);
  }
  function Ce(j) {
    (!(j in U) || U[j]) && t(12, U[j] = !1, U);
  }
  function Ee(j) {
    const le = D == null ? void 0 : D.checkbox;
    le && (le.indeterminate = j);
  }
  function we(j) {
    if (!v || !j.detail.target)
      return;
    const le = f(j.detail.target, ".mdc-data-table__header-cell--with-sort");
    le && G(le);
  }
  function ie(j) {
    if (!v || !j.detail.target)
      return;
    const le = f(j.detail.target, ".mdc-data-table__row");
    le && v && v.handleRowClick({ rowId: j.detail.rowId, row: le });
  }
  function G(j) {
    var le, ne;
    const Xe = (le = D == null ? void 0 : D.orderedCells) !== null && le !== void 0 ? le : [], ct = Xe.map((xe) => xe.element).indexOf(j);
    if (ct === -1)
      return;
    const ot = (ne = Xe[ct].columnId) !== null && ne !== void 0 ? ne : null;
    v.handleSortAction({ columnId: ot, columnIndex: ct, headerCell: j });
  }
  function Ge() {
    return v.layout();
  }
  function Be() {
    return B;
  }
  function At(j) {
    se[j ? "unshift" : "push"](() => {
      I = j, t(9, I);
    });
  }
  function Z(j) {
    se[j ? "unshift" : "push"](() => {
      B = j, t(8, B);
    });
  }
  const Se = () => v && M && v.layout(), je = () => t(10, D = void 0), Pe = () => t(11, O = void 0), St = () => v && v.handleHeaderRowCheckboxChange();
  return n.$$set = (j) => {
    e = X(X({}, e), tt(j)), t(25, r = me(e, i)), "use" in j && t(0, h = j.use), "class" in j && t(1, m = j.class), "stickyHeader" in j && t(2, _ = j.stickyHeader), "sortable" in j && t(28, p = j.sortable), "sort" in j && t(26, A = j.sort), "sortDirection" in j && t(27, b = j.sortDirection), "sortAscendingAriaLabel" in j && t(29, T = j.sortAscendingAriaLabel), "sortDescendingAriaLabel" in j && t(30, C = j.sortDescendingAriaLabel), "container$use" in j && t(3, k = j.container$use), "container$class" in j && t(4, R = j.container$class), "table$use" in j && t(5, g = j.table$use), "table$class" in j && t(6, S = j.table$class), "$$scope" in j && t(35, u = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Vt(V, s = A, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Vt(ue, a = b, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && v && Fe !== l && (t(33, Fe = l), l ? v.hideProgress() : v.showProgress());
  }, [
    h,
    m,
    _,
    k,
    R,
    g,
    S,
    v,
    B,
    I,
    D,
    O,
    U,
    W,
    M,
    d,
    L,
    V,
    ue,
    Ie,
    Ye,
    K,
    we,
    ie,
    c,
    r,
    A,
    b,
    p,
    T,
    C,
    Ge,
    Be,
    Fe,
    l,
    u,
    o,
    At,
    Z,
    Se,
    je,
    Pe,
    St
  ];
}
class Vh extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      Bh,
      Hh,
      ge,
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
function jh(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[10].default
  ), s = Re(
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
    u = X(u, o[c]);
  return {
    c() {
      e = x("thead"), s && s.c(), ce(e, u);
    },
    m(c, f) {
      H(c, e, f), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        de(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        fe(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        fe(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        fe(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        fe(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], r = !0);
    },
    p(c, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      512) && De(
        s,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? ke(
          a,
          /*$$scope*/
          c[9],
          f,
          null
        ) : Me(
          /*$$scope*/
          c[9]
        ),
        null
      ), ce(e, u = he(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (y(s, c), i = !0);
    },
    o(c) {
      E(s, c), i = !1;
    },
    d(c) {
      c && P(e), s && s.d(c), n[11](null), r = !1, Qe(l);
    }
  };
}
function qh(n, e, t) {
  const i = ["use", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Ke("SMUI:data-table:row:header", !0), st(() => {
    const C = {
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
    return be(A(), "SMUIDataTableHeader:mount", C), () => {
      be(A(), "SMUIDataTableHeader:unmount", C);
    };
  });
  function h(C) {
    t(2, c = C.detail);
  }
  function m(C) {
    f.push(C.detail), d.set(C.detail.element, C.detail), C.stopPropagation();
  }
  function _(C) {
    const k = f.indexOf(C.detail);
    k !== -1 && (f.splice(k, 1), f = f), d.delete(C.detail.element), C.stopPropagation();
  }
  function p() {
    return [...A().querySelectorAll(".mdc-data-table__header-cell")].map((C) => d.get(C)).filter((C) => C && C._smui_data_table_header_cell_accessor);
  }
  function A() {
    return u;
  }
  function b(C) {
    se[C ? "unshift" : "push"](() => {
      u = C, t(1, u);
    });
  }
  const T = () => t(2, c = void 0);
  return n.$$set = (C) => {
    e = X(X({}, e), tt(C)), t(7, r = me(e, i)), "use" in C && t(0, o = C.use), "$$scope" in C && t(9, a = C.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    m,
    _,
    r,
    A,
    a,
    l,
    b,
    T
  ];
}
class Gh extends ye {
  constructor(e) {
    super(), Ae(this, e, qh, jh, ge, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Kh(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = Re(
    s,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = X(c, u[f]);
  return {
    c() {
      e = x("tbody"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      H(f, e, d), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        de(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        fe(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        fe(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], l = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && De(
        o,
        s,
        f,
        /*$$scope*/
        f[8],
        r ? ke(
          s,
          /*$$scope*/
          f[8],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[8]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || d & /*className*/
        2 && t !== (t = re({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      E(o, f), r = !1;
    },
    d(f) {
      f && P(e), o && o.d(f), n[10](null), l = !1, Qe(a);
    }
  };
}
function zh(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Ke("SMUI:data-table:row:header", !1), st(() => {
    const b = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return _();
      }
    };
    return be(p(), "SMUIDataTableBody:mount", b), () => {
      be(p(), "SMUIDataTableBody:unmount", b);
    };
  });
  function h(b) {
    f.push(b.detail), d.set(b.detail.element, b.detail), b.stopPropagation();
  }
  function m(b) {
    const T = f.indexOf(b.detail);
    T !== -1 && (f.splice(T, 1), f = f), d.delete(b.detail.element), b.stopPropagation();
  }
  function _() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function A(b) {
    se[b ? "unshift" : "push"](() => {
      c = b, t(2, c);
    });
  }
  return n.$$set = (b) => {
    e = X(X({}, e), tt(b)), t(6, r = me(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "$$scope" in b && t(8, a = b.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    m,
    r,
    p,
    a,
    l,
    A
  ];
}
class Wh extends ye {
  constructor(e) {
    super(), Ae(this, e, zh, Kh, ge, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Xh(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[15].default
  ), u = Re(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = re({
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
      "aria-selected": i = /*checkbox*/
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
    f = X(f, c[d]);
  return {
    c() {
      e = x("tr"), u && u.c(), ce(e, f);
    },
    m(d, h) {
      H(d, e, h), u && u.m(e, null), n[16](e), l = !0, a || (s = [
        de(r = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        fe(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        fe(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        fe(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], a = !0);
    },
    p(d, [h]) {
      u && u.p && (!l || h & /*$$scope*/
      16384) && De(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        l ? ke(
          o,
          /*$$scope*/
          d[14],
          h,
          null
        ) : Me(
          /*$$scope*/
          d[14]
        ),
        null
      ), ce(e, f = he(c, [
        (!l || h & /*className, checkbox, internalClasses*/
        26 && t !== (t = re({
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
        (!l || h & /*checkbox*/
        8 && i !== (i = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": i },
        h & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        h & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), r && pe(r.update) && h & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      l || (y(u, d), l = !0);
    },
    o(d) {
      E(u, d), l = !1;
    },
    d(d) {
      d && P(e), u && u.d(d), n[16](null), a = !1, Qe(s);
    }
  };
}
let Yh = 0;
function Zh(n, e, t) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Yh++ } = e, f, d, h = {}, m = {}, _ = ze("SMUI:data-table:row:header");
  st(() => {
    const I = _ ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return g();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
      },
      get selected() {
        var D;
        return (D = d && d.checked) !== null && D !== void 0 ? D : !1;
      },
      addClass: A,
      removeClass: b,
      getAttr: T,
      addAttr: C
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return g();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var D;
        return (D = d && d.checked) !== null && D !== void 0 ? D : !1;
      },
      addClass: A,
      removeClass: b,
      getAttr: T,
      addAttr: C
    };
    return be(g(), "SMUIDataTableRow:mount", I), () => {
      be(g(), "SMUIDataTableRow:unmount", I);
    };
  });
  function p(I) {
    t(3, d = I.detail);
  }
  function A(I) {
    h[I] || t(4, h[I] = !0, h);
  }
  function b(I) {
    (!(I in h) || h[I]) && t(4, h[I] = !1, h);
  }
  function T(I) {
    var D;
    return I in m ? (D = m[I]) !== null && D !== void 0 ? D : null : g().getAttribute(I);
  }
  function C(I, D) {
    m[I] !== D && t(5, m[I] = D, m);
  }
  function k(I) {
    be(g(), "SMUIDataTableHeader:click", I);
  }
  function R(I) {
    be(g(), "SMUIDataTableRow:click", { rowId: c, target: I.target });
  }
  function g() {
    return f;
  }
  function S(I) {
    se[I ? "unshift" : "push"](() => {
      f = I, t(2, f);
    });
  }
  const B = (I) => _ ? k(I) : R(I), v = () => t(3, d = void 0);
  return n.$$set = (I) => {
    e = X(X({}, e), tt(I)), t(11, r = me(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "rowId" in I && t(12, c = I.rowId), "$$scope" in I && t(14, a = I.$$scope);
  }, [
    o,
    u,
    f,
    d,
    h,
    m,
    s,
    _,
    p,
    k,
    R,
    r,
    c,
    g,
    a,
    l,
    S,
    B,
    v
  ];
}
class Pa extends ye {
  constructor(e) {
    super(), Ae(this, e, Zh, Xh, ge, {
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
function Qh(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[22].default
  ), o = Re(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = X(c, u[f]);
  return {
    c() {
      e = x("td"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      H(f, e, d), o && o.m(e, null), n[25](e), r = !0, l || (a = [
        de(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        fe(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], l = !0);
    },
    p(f, d) {
      o && o.p && (!r || d & /*$$scope*/
      2097152) && De(
        o,
        s,
        f,
        /*$$scope*/
        f[21],
        r ? ke(
          s,
          /*$$scope*/
          f[21],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[21]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = re({
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      E(o, f), r = !1;
    },
    d(f) {
      f && P(e), o && o.d(f), n[25](null), l = !1, Qe(a);
    }
  };
}
function Jh(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [$h, xh], f = [];
  function d(_, p) {
    return (
      /*sortable*/
      _[5] ? 0 : 1
    );
  }
  t = d(n), i = f[t] = c[t](n);
  let h = [
    {
      class: r = re({
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
      "aria-sort": l = /*sortable*/
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
  ], m = {};
  for (let _ = 0; _ < h.length; _ += 1)
    m = X(m, h[_]);
  return {
    c() {
      e = x("th"), i.c(), ce(e, m);
    },
    m(_, p) {
      H(_, e, p), f[t].m(e, null), n[23](e), s = !0, o || (u = [
        de(a = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        fe(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(_, p) {
      let A = t;
      t = d(_), t === A ? f[t].p(_, p) : (Ue(), E(f[A], 1, 1, () => {
        f[A] = null;
      }), Ne(), i = f[t], i ? i.p(_, p) : (i = f[t] = c[t](_), i.c()), y(i, 1), i.m(e, null)), ce(e, m = he(h, [
        (!s || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && r !== (r = re({
          [
            /*className*/
            _[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            _[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            _[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            _[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            _[5] && /*$sort*/
            _[9] === /*columnId*/
            _[4]
          ),
          .../*internalClasses*/
          _[7]
        }))) && { class: r },
        { role: "columnheader" },
        { scope: "col" },
        (!s || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          _[4]
        ) },
        (!s || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && l !== (l = /*sortable*/
        _[5] ? (
          /*$sort*/
          _[9] === /*columnId*/
          _[4] ? (
            /*$sortDirection*/
            _[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": l },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        _[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        _[19]
      ])), a && pe(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      s || (y(i), s = !0);
    },
    o(_) {
      E(i), s = !1;
    },
    d(_) {
      _ && P(e), f[t].d(), n[23](null), o = !1, Qe(u);
    }
  };
}
function xh(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), i = Re(
    t,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      2097152) && De(
        i,
        t,
        r,
        /*$$scope*/
        r[21],
        e ? ke(
          t,
          /*$$scope*/
          r[21],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[21]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function $h(n) {
  let e, t, i, r = (
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
  ), l, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = Re(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = x("div"), u && u.c(), t = oe(), i = x("div"), l = ut(r), F(i, "class", "mdc-data-table__sort-status-label"), F(i, "aria-hidden", "true"), F(i, "id", a = /*columnId*/
      n[4] + "-status-label"), F(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      H(c, e, f), u && u.m(e, null), Q(e, t), Q(e, i), Q(i, l), s = !0;
    },
    p(c, f) {
      u && u.p && (!s || f & /*$$scope*/
      2097152) && De(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        s ? ke(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : Me(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!s || f & /*$sort, columnId, $sortDirection*/
      1552) && r !== (r = /*$sort*/
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
      ) : "") + "") && vt(l, r), (!s || f & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && F(i, "id", a);
    },
    i(c) {
      s || (y(u, c), s = !0);
    },
    o(c) {
      E(u, c), s = !1;
    },
    d(c) {
      c && P(e), u && u.d(c);
    }
  };
}
function em(n) {
  let e, t, i, r;
  const l = [Jh, Qh], a = [];
  function s(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
let tm = 0;
function nm(n, e, t) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = me(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(et());
  let c = ze("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: h = !1 } = e, { checkbox: m = !1 } = e, { columnId: _ = c ? "SMUI-data-table-column-" + tm++ : "SMUI-data-table-unused" } = e, { sortable: p = ze("SMUI:data-table:sortable") } = e, A, b = {}, T = {}, C = ze("SMUI:data-table:sort");
  rt(n, C, (L) => t(9, l = L));
  let k = ze("SMUI:data-table:sortDirection");
  rt(n, k, (L) => t(10, a = L));
  let R = ze("SMUI:data-table:sortAscendingAriaLabel"), g = ze("SMUI:data-table:sortDescendingAriaLabel");
  p && (Ke("SMUI:label:context", "data-table:sortable-header-cell"), Ke("SMUI:icon-button:context", "data-table:sortable-header-cell"), Ke("SMUI:icon-button:aria-describedby", _ + "-status-label")), st(() => {
    const L = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return U();
      },
      get columnId() {
        return _;
      },
      addClass: S,
      removeClass: B,
      getAttr: v,
      addAttr: I
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return U();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: B,
      getAttr: v,
      addAttr: I
    };
    return be(U(), "SMUIDataTableCell:mount", L), () => {
      be(U(), "SMUIDataTableCell:unmount", L);
    };
  });
  function S(L) {
    b[L] || t(7, b[L] = !0, b);
  }
  function B(L) {
    (!(L in b) || b[L]) && t(7, b[L] = !1, b);
  }
  function v(L) {
    var V;
    return L in T ? (V = T[L]) !== null && V !== void 0 ? V : null : U().getAttribute(L);
  }
  function I(L, V) {
    T[L] !== V && t(8, T[L] = V, T);
  }
  function D(L) {
    be(U(), "SMUIDataTableHeaderCheckbox:change", L);
  }
  function O(L) {
    be(U(), "SMUIDataTableBodyCheckbox:change", L);
  }
  function U() {
    return A;
  }
  function W(L) {
    se[L ? "unshift" : "push"](() => {
      A = L, t(6, A);
    });
  }
  const q = (L) => m && D(L);
  function z(L) {
    se[L ? "unshift" : "push"](() => {
      A = L, t(6, A);
    });
  }
  const M = (L) => m && O(L);
  return n.$$set = (L) => {
    e = X(X({}, e), tt(L)), t(19, r = me(e, i)), "use" in L && t(0, f = L.use), "class" in L && t(1, d = L.class), "numeric" in L && t(2, h = L.numeric), "checkbox" in L && t(3, m = L.checkbox), "columnId" in L && t(4, _ = L.columnId), "sortable" in L && t(5, p = L.sortable), "$$scope" in L && t(21, o = L.$$scope);
  }, [
    f,
    d,
    h,
    m,
    _,
    p,
    A,
    b,
    T,
    l,
    a,
    u,
    c,
    C,
    k,
    R,
    g,
    D,
    O,
    r,
    U,
    o,
    s,
    W,
    q,
    z,
    M
  ];
}
class Gr extends ye {
  constructor(e) {
    super(), Ae(this, e, nm, em, ge, {
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
function im(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, A, b, T, C, k = [
    {
      class: h = re({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": (
          /*indeterminate*/
          n[3]
        ),
        "mdc-linear-progress--closed": (
          /*closed*/
          n[4]
        ),
        "mdc-data-table__linear-progress": (
          /*context*/
          n[14] === "data-table"
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: m = Object.entries(
        /*internalStyles*/
        n[10]
      ).map(ws).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": _ = 0
    },
    {
      "aria-valuemax": p = 1
    },
    {
      "aria-valuenow": A = /*indeterminate*/
      n[3] ? void 0 : (
        /*progress*/
        n[5]
      )
    },
    /*internalAttrs*/
    n[9],
    /*$$restProps*/
    n[16]
  ], R = {};
  for (let g = 0; g < k.length; g += 1)
    R = X(R, k[g]);
  return {
    c() {
      e = x("div"), t = x("div"), i = x("div"), l = oe(), a = x("div"), s = oe(), o = x("div"), u = x("span"), f = oe(), d = x("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', F(i, "class", "mdc-linear-progress__buffer-bar"), F(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        n[11]
      ).map(Us).join(" ")), F(a, "class", "mdc-linear-progress__buffer-dots"), F(t, "class", "mdc-linear-progress__buffer"), F(u, "class", "mdc-linear-progress__bar-inner"), F(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), F(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        n[12]
      ).map(Ns).join(" ")), F(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ce(e, R);
    },
    m(g, S) {
      H(g, e, S), Q(e, t), Q(t, i), Q(t, l), Q(t, a), Q(e, s), Q(e, o), Q(o, u), Q(e, f), Q(e, d), n[19](e), T || (C = [
        de(b = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        fe(
          e,
          "transitionend",
          /*transitionend_handler*/
          n[20]
        )
      ], T = !0);
    },
    p(g, [S]) {
      S & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        g[11]
      ).map(Us).join(" ")) && F(i, "style", r), S & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        g[12]
      ).map(Ns).join(" ")) && F(o, "style", c), ce(e, R = he(k, [
        S & /*className, indeterminate, closed, internalClasses*/
        282 && h !== (h = re({
          [
            /*className*/
            g[1]
          ]: !0,
          "mdc-linear-progress": !0,
          "mdc-linear-progress--indeterminate": (
            /*indeterminate*/
            g[3]
          ),
          "mdc-linear-progress--closed": (
            /*closed*/
            g[4]
          ),
          "mdc-data-table__linear-progress": (
            /*context*/
            g[14] === "data-table"
          ),
          .../*internalClasses*/
          g[8]
        })) && { class: h },
        S & /*internalStyles, style*/
        1028 && m !== (m = Object.entries(
          /*internalStyles*/
          g[10]
        ).map(ws).concat([
          /*style*/
          g[2]
        ]).join(" ")) && { style: m },
        { role: "progressbar" },
        {
          "aria-valuemin": _
        },
        {
          "aria-valuemax": p
        },
        S & /*indeterminate, progress*/
        40 && A !== (A = /*indeterminate*/
        g[3] ? void 0 : (
          /*progress*/
          g[5]
        )) && {
          "aria-valuenow": A
        },
        S & /*internalAttrs*/
        512 && /*internalAttrs*/
        g[9],
        S & /*$$restProps*/
        65536 && /*$$restProps*/
        g[16]
      ])), b && pe(b.update) && S & /*use*/
      1 && b.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i: Ze,
    o: Ze,
    d(g) {
      g && P(e), n[19](null), T = !1, Qe(C);
    }
  };
}
const Us = ([n, e]) => `${n}: ${e};`, Ns = ([n, e]) => `${n}: ${e};`, ws = ([n, e]) => `${n}: ${e};`;
function rm(n, e, t) {
  const i = [
    "use",
    "class",
    "style",
    "indeterminate",
    "closed",
    "progress",
    "buffer",
    "getElement"
  ];
  let r = me(e, i), l;
  const a = nt(et());
  let { use: s = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: f = !1 } = e, { progress: d = 0 } = e, { buffer: h = void 0 } = e, m, _, p = {}, A = {}, b = {}, T = {}, C = {}, k = ze("SMUI:linear-progress:context"), R = ze("SMUI:linear-progress:closed");
  rt(n, R, (M) => t(21, l = M)), st(() => (t(6, _ = new Uh({
    addClass: S,
    forceLayout: () => {
      W().getBoundingClientRect();
    },
    setBufferBarStyle: O,
    setPrimaryBarStyle: U,
    hasClass: g,
    removeAttribute: I,
    removeClass: B,
    setAttribute: v,
    setStyle: D,
    attachResizeObserver: (M) => {
      const L = window.ResizeObserver;
      if (L) {
        const V = new L(M);
        return V.observe(W()), V;
      }
      return null;
    },
    getWidth: () => W().offsetWidth
  })), _.init(), () => {
    _.destroy();
  }));
  function g(M) {
    return M in p ? p[M] : W().classList.contains(M);
  }
  function S(M) {
    p[M] || t(8, p[M] = !0, p);
  }
  function B(M) {
    (!(M in p) || p[M]) && t(8, p[M] = !1, p);
  }
  function v(M, L) {
    A[M] !== L && t(9, A[M] = L, A);
  }
  function I(M) {
    (!(M in A) || A[M] != null) && t(9, A[M] = void 0, A);
  }
  function D(M, L) {
    b[M] != L && (L === "" || L == null ? (delete b[M], t(10, b)) : t(10, b[M] = L, b));
  }
  function O(M, L) {
    T[M] != L && (L === "" || L == null ? (delete T[M], t(11, T)) : t(11, T[M] = L, T));
  }
  function U(M, L) {
    C[M] != L && (L === "" || L == null ? (delete C[M], t(12, C)) : t(12, C[M] = L, C));
  }
  function W() {
    return m;
  }
  function q(M) {
    se[M ? "unshift" : "push"](() => {
      m = M, t(7, m);
    });
  }
  const z = () => _ && _.handleTransitionEnd();
  return n.$$set = (M) => {
    e = X(X({}, e), tt(M)), t(16, r = me(e, i)), "use" in M && t(0, s = M.use), "class" in M && t(1, o = M.class), "style" in M && t(2, u = M.style), "indeterminate" in M && t(3, c = M.indeterminate), "closed" in M && t(4, f = M.closed), "progress" in M && t(5, d = M.progress), "buffer" in M && t(17, h = M.buffer);
  }, n.$$.update = () => {
    n.$$.dirty & /*closed*/
    16 && R && Vt(R, l = f, l), n.$$.dirty & /*instance, indeterminate*/
    72 && _ && _.isDeterminate() !== !c && _.setDeterminate(!c), n.$$.dirty & /*instance, progress*/
    96 && _ && _.getProgress() !== d && _.setProgress(d), n.$$.dirty & /*instance, buffer*/
    131136 && _ && (h == null ? _.setBuffer(1) : _.setBuffer(h)), n.$$.dirty & /*instance, closed*/
    80 && _ && (f ? _.close() : _.open());
  }, [
    s,
    o,
    u,
    c,
    f,
    d,
    _,
    m,
    p,
    A,
    b,
    T,
    C,
    a,
    k,
    R,
    r,
    h,
    W,
    q,
    z
  ];
}
class lm extends ye {
  constructor(e) {
    super(), Ae(this, e, rm, im, ge, {
      use: 0,
      class: 1,
      style: 2,
      indeterminate: 3,
      closed: 4,
      progress: 5,
      buffer: 17,
      getElement: 18
    });
  }
  get getElement() {
    return this.$$.ctx[18];
  }
}
function Ps(n, e, t) {
  const i = n.slice();
  return i[24] = e[t], i[26] = t, i;
}
function Hs(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i;
}
function Bs(n, e, t) {
  const i = n.slice();
  return i[30] = e[t], i;
}
function Vs(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i[33] = e, i[34] = t, i;
}
function js(n) {
  let e, t = (
    /*$sortColumn*/
    n[5] === /*col*/
    n[27].field && /*$sortDirection*/
    n[6] !== null && qs(n)
  );
  return {
    c() {
      t && t.c(), e = qe();
    },
    m(i, r) {
      t && t.m(i, r), H(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[5] === /*col*/
      i[27].field && /*$sortDirection*/
      i[6] !== null ? t ? t.p(i, r) : (t = qs(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(i) {
      i && P(e), t && t.d(i);
    }
  };
}
function qs(n) {
  let e;
  function t(l, a) {
    if (
      /*$sortDirection*/
      l[6] === "asc"
    )
      return am;
    if (
      /*$sortDirection*/
      l[6] === "desc"
    )
      return sm;
  }
  let i = t(n), r = i && i(n);
  return {
    c() {
      r && r.c(), e = qe();
    },
    m(l, a) {
      r && r.m(l, a), H(l, e, a);
    },
    p(l, a) {
      i !== (i = t(l)) && (r && r.d(1), r = i && i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && P(e), r && r.d(l);
    }
  };
}
function sm(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M12 20l8-8H4l8 8z"), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 0 24 24"), F(e, "width", "16"), F(e, "height", "16"), F(e, "fill", "currentColor"), F(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    d(i) {
      i && P(e);
    }
  };
}
function am(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), F(t, "d", "M12 4l-8 8h16l-8-8z"), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "viewBox", "0 0 24 24"), F(e, "width", "16"), F(e, "height", "16"), F(e, "fill", "currentColor"), F(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      H(i, e, r), Q(e, t);
    },
    d(i) {
      i && P(e);
    }
  };
}
function Gs(n) {
  let e, t, i = (
    /*col*/
    n[27].filterType === "text" && Ks(n)
  ), r = (
    /*col*/
    n[27].filterType === "number" && zs(n)
  );
  return {
    c() {
      i && i.c(), e = oe(), r && r.c(), t = qe();
    },
    m(l, a) {
      i && i.m(l, a), H(l, e, a), r && r.m(l, a), H(l, t, a);
    },
    p(l, a) {
      /*col*/
      l[27].filterType === "text" ? i ? i.p(l, a) : (i = Ks(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      l[27].filterType === "number" ? r ? r.p(l, a) : (r = zs(l), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && (P(e), P(t)), i && i.d(l), r && r.d(l);
    }
  };
}
function Ks(n) {
  let e, t, i, r;
  function l() {
    n[16].call(
      e,
      /*col*/
      n[27]
    );
  }
  return {
    c() {
      e = x("input"), F(e, "type", "text"), F(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), F(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      H(a, e, s), Qt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        fe(e, "input", l),
        fe(
          e,
          "input",
          /*input_handler*/
          n[17]
        )
      ], i = !0);
    },
    p(a, s) {
      n = a, s[0] & /*columnDefs*/
      4 && t !== (t = `Search ${/*col*/
      n[27].headerName}`) && F(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && e.value !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Qt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && P(e), i = !1, Qe(r);
    }
  };
}
function zs(n) {
  let e, t, i, r;
  function l() {
    n[18].call(
      e,
      /*col*/
      n[27]
    );
  }
  return {
    c() {
      e = x("input"), F(e, "type", "number"), F(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), F(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      H(a, e, s), Qt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        fe(e, "input", l),
        fe(
          e,
          "input",
          /*input_handler_1*/
          n[19]
        )
      ], i = !0);
    },
    p(a, s) {
      n = a, s[0] & /*columnDefs*/
      4 && t !== (t = `Search ${/*col*/
      n[27].headerName}`) && F(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && ma(e.value) !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Qt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && P(e), i = !1, Qe(r);
    }
  };
}
function om(n) {
  let e, t, i, r = (
    /*col*/
    n[27].headerName + ""
  ), l, a, s, o, u = (
    /*col*/
    n[27].sortable && js(n)
  ), c = (
    /*col*/
    n[27].filter && Gs(n)
  );
  return {
    c() {
      e = x("div"), t = x("div"), i = x("span"), l = ut(r), a = oe(), u && u.c(), s = oe(), c && c.c(), o = oe(), F(i, "class", "header-title svelte-29x22x"), F(t, "class", "cell-header svelte-29x22x"), F(e, "class", "custom-cell-container svelte-29x22x"), vr(
        e,
        "min-width",
        /*col*/
        n[27].minWidth ?? 0
      );
    },
    m(f, d) {
      H(f, e, d), Q(e, t), Q(t, i), Q(i, l), Q(t, a), u && u.m(t, null), Q(e, s), c && c.m(e, null), H(f, o, d);
    },
    p(f, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      f[27].headerName + "") && vt(l, r), /*col*/
      f[27].sortable ? u ? u.p(f, d) : (u = js(f), u.c(), u.m(t, null)) : u && (u.d(1), u = null), /*col*/
      f[27].filter ? c ? c.p(f, d) : (c = Gs(f), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d[0] & /*columnDefs*/
      4 && vr(
        e,
        "min-width",
        /*col*/
        f[27].minWidth ?? 0
      );
    },
    d(f) {
      f && (P(e), P(o)), u && u.d(), c && c.d();
    }
  };
}
function Ws(n) {
  let e, t;
  function i() {
    return (
      /*click_handler*/
      n[20](
        /*col*/
        n[27]
      )
    );
  }
  return e = new Gr({
    props: {
      style: (
        /*col*/
        n[27].headerStyle
      ),
      $$slots: { default: [om] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", i), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l[0] & /*columnDefs*/
      4 && (a.style = /*col*/
      n[27].headerStyle), l[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | l[1] & /*$$scope*/
      16 && (a.$$scope = { dirty: l, ctx: n }), e.$set(a);
    },
    i(r) {
      t || (y(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function um(n) {
  let e, t, i = Dt(
    /*columnDefs*/
    n[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ws(Vs(n, i, a));
  const l = (a) => E(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = qe();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      H(a, e, s), t = !0;
    },
    p(a, s) {
      if (s[0] & /*columnDefs, sortColumnBy, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      6260) {
        i = Dt(
          /*columnDefs*/
          a[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Vs(a, i, o);
          r[o] ? (r[o].p(u, s), y(r[o], 1)) : (r[o] = Ws(u), r[o].c(), y(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          l(o);
        Ne();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          y(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        E(r[s]);
      t = !1;
    },
    d(a) {
      a && P(e), Ur(r, a);
    }
  };
}
function cm(n) {
  let e, t;
  return e = new Pa({
    props: {
      class: "header-row",
      $$slots: { default: [um] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function fm(n) {
  let e, t;
  return e = new Gr({
    props: {
      numeric: (
        /*col*/
        n[27].numeric
      ),
      style: (
        /*col*/
        n[27].cellStyle
      ),
      $$slots: { default: [pm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*columnDefs*/
      4 && (l.numeric = /*col*/
      i[27].numeric), r[0] & /*columnDefs*/
      4 && (l.style = /*col*/
      i[27].cellStyle), r[0] & /*columnDefs, $filteredData*/
      132 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function dm(n) {
  let e, t;
  return e = new Gr({
    props: {
      $$slots: { default: [Lm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*rowActions, $filteredData*/
      136 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function hm(n) {
  let e = (
    /*row*/
    (n[24][
      /*col*/
      n[27].field
    ] ?? "") + ""
  ), t;
  return {
    c() {
      t = ut(e);
    },
    m(i, r) {
      H(i, t, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      132 && e !== (e = /*row*/
      (i[24][
        /*col*/
        i[27].field
      ] ?? "") + "") && vt(t, e);
    },
    d(i) {
      i && P(t);
    }
  };
}
function mm(n) {
  let e = (
    /*col*/
    n[27].valueFormatter(
      /*row*/
      n[24][
        /*col*/
        n[27].field
      ]
    ) + ""
  ), t;
  return {
    c() {
      t = ut(e);
    },
    m(i, r) {
      H(i, t, r);
    },
    p(i, r) {
      r[0] & /*columnDefs, $filteredData*/
      132 && e !== (e = /*col*/
      i[27].valueFormatter(
        /*row*/
        i[24][
          /*col*/
          i[27].field
        ]
      ) + "") && vt(t, e);
    },
    d(i) {
      i && P(t);
    }
  };
}
function pm(n) {
  let e;
  function t(l, a) {
    return (
      /*col*/
      l[27].valueFormatter ? mm : hm
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = qe();
    },
    m(l, a) {
      r.m(l, a), H(l, e, a);
    },
    p(l, a) {
      i === (i = t(l)) && r ? r.p(l, a) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && P(e), r.d(l);
    }
  };
}
function gm(n) {
  let e, t;
  function i() {
    return (
      /*func_1*/
      n[22](
        /*action*/
        n[30],
        /*row*/
        n[24]
      )
    );
  }
  return e = new Br({
    props: {
      class: "button",
      variant: "raised",
      callback: i,
      disabled: (
        /*action*/
        n[30].disabled(
          /*row*/
          n[24]
        )
      ),
      $$slots: { default: [Tm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l[0] & /*rowActions, $filteredData*/
      136 && (a.callback = i), l[0] & /*rowActions, $filteredData*/
      136 && (a.disabled = /*action*/
      n[30].disabled(
        /*row*/
        n[24]
      )), l[0] & /*rowActions*/
      8 | l[1] & /*$$scope*/
      16 && (a.$$scope = { dirty: l, ctx: n }), e.$set(a);
    },
    i(r) {
      t || (y(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function _m(n) {
  let e, t;
  function i() {
    return (
      /*func*/
      n[21](
        /*action*/
        n[30],
        /*row*/
        n[24]
      )
    );
  }
  return e = new hu({
    props: {
      iconComponent: (
        /*action*/
        n[30].iconComponent
      ),
      iconStyles: (
        /*action*/
        n[30].iconStyles
      ),
      callback: i,
      disabled: (
        /*action*/
        n[30].disabled(
          /*row*/
          n[24]
        )
      )
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l[0] & /*rowActions*/
      8 && (a.iconComponent = /*action*/
      n[30].iconComponent), l[0] & /*rowActions*/
      8 && (a.iconStyles = /*action*/
      n[30].iconStyles), l[0] & /*rowActions, $filteredData*/
      136 && (a.callback = i), l[0] & /*rowActions, $filteredData*/
      136 && (a.disabled = /*action*/
      n[30].disabled(
        /*row*/
        n[24]
      )), e.$set(a);
    },
    i(r) {
      t || (y(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function bm(n) {
  let e, t;
  return e = new Gd({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Im(n) {
  let e, t;
  return e = new lh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function vm(n) {
  let e, t;
  return e = new th({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Am(n) {
  let e, t;
  return e = new Jd({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ym(n) {
  let e, t;
  return e = new Bd({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Cm(n) {
  let e, t;
  return e = new Nd({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Em(n) {
  let e, t;
  return e = new Ua({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Sm(n) {
  let e, t;
  return e = new Od({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Tm(n) {
  let e, t, i, r;
  const l = [
    Sm,
    Em,
    Cm,
    ym,
    Am,
    vm,
    Im,
    bm
  ], a = [];
  function s(o, u) {
    return (
      /*action*/
      o[30].icon === "add" ? 0 : (
        /*action*/
        o[30].icon === "cancel" ? 1 : (
          /*action*/
          o[30].icon === "download" ? 2 : (
            /*action*/
            o[30].icon === "find-in-page" ? 3 : (
              /*action*/
              o[30].icon === "remove" ? 4 : (
                /*action*/
                o[30].icon === "edit" ? 5 : (
                  /*action*/
                  o[30].icon === "delete" ? 6 : 7
                )
              )
            )
          )
        )
      )
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (Ue(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), Ne(), t = a[e], t || (t = a[e] = l[e](o), t.c()), y(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
function Xs(n) {
  let e, t, i, r;
  const l = [_m, gm], a = [];
  function s(o, u) {
    return (
      /*action*/
      o[30].iconComponent ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ue(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), Ne(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), y(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
function Lm(n) {
  let e, t, i = Dt(
    /*rowActions*/
    n[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Xs(Bs(n, i, a));
  const l = (a) => E(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = x("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      F(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, s) {
      H(a, e, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
      t = !0;
    },
    p(a, s) {
      if (s[0] & /*rowActions, $filteredData*/
      136) {
        i = Dt(
          /*rowActions*/
          a[3]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Bs(a, i, o);
          r[o] ? (r[o].p(u, s), y(r[o], 1)) : (r[o] = Xs(u), r[o].c(), y(r[o], 1), r[o].m(e, null));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          l(o);
        Ne();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          y(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        E(r[s]);
      t = !1;
    },
    d(a) {
      a && P(e), Ur(r, a);
    }
  };
}
function Ys(n, e) {
  let t, i, r, l, a;
  const s = [dm, fm], o = [];
  function u(c, f) {
    return (
      /*col*/
      c[27].field === "actions" ? 0 : 1
    );
  }
  return i = u(e), r = o[i] = s[i](e), {
    key: n,
    first: null,
    c() {
      t = qe(), r.c(), l = qe(), this.first = t;
    },
    m(c, f) {
      H(c, t, f), o[i].m(c, f), H(c, l, f), a = !0;
    },
    p(c, f) {
      e = c;
      let d = i;
      i = u(e), i === d ? o[i].p(e, f) : (Ue(), E(o[d], 1, 1, () => {
        o[d] = null;
      }), Ne(), r = o[i], r ? r.p(e, f) : (r = o[i] = s[i](e), r.c()), y(r, 1), r.m(l.parentNode, l));
    },
    i(c) {
      a || (y(r), a = !0);
    },
    o(c) {
      E(r), a = !1;
    },
    d(c) {
      c && (P(t), P(l)), o[i].d(c);
    }
  };
}
function Om(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = Dt(
    /*columnDefs*/
    n[2]
  );
  const a = (s) => (
    /*col*/
    s[27].field
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = Hs(n, l, s), u = a(o);
    t.set(u, e[s] = Ys(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = oe();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      H(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      140 && (l = Dt(
        /*columnDefs*/
        s[2]
      ), Ue(), e = mi(e, o, a, 1, s, l, t, i.parentNode, hi, Ys, i, Hs), Ne());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          y(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        E(e[o]);
      r = !1;
    },
    d(s) {
      s && P(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Zs(n, e) {
  let t, i, r;
  return i = new Pa({
    props: {
      $$slots: { default: [Om] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = qe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      H(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      e = l;
      const s = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      140 | a[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: a, ctx: e }), i.$set(s);
    },
    i(l) {
      r || (y(i.$$.fragment, l), r = !0);
    },
    o(l) {
      E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && P(t), ee(i, l);
    }
  };
}
function Rm(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = Dt(
    /*$filteredData*/
    n[7]
  );
  const a = (s) => (
    /*index*/
    s[26]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = Ps(n, l, s), u = a(o);
    t.set(u, e[s] = Zs(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = qe();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      H(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      140 && (l = Dt(
        /*$filteredData*/
        s[7]
      ), Ue(), e = mi(e, o, a, 1, s, l, t, i.parentNode, hi, Zs, i, Ps), Ne());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          y(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        E(e[o]);
      r = !1;
    },
    d(s) {
      s && P(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function km(n) {
  let e, t, i, r;
  return e = new Gh({
    props: {
      $$slots: { default: [cm] },
      $$scope: { ctx: n }
    }
  }), i = new Wh({
    props: {
      $$slots: { default: [Rm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), H(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | a[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
      const o = {};
      a[0] & /*$filteredData, columnDefs, rowActions*/
      140 | a[1] & /*$$scope*/
      16 && (o.$$scope = { dirty: a, ctx: l }), i.$set(o);
    },
    i(l) {
      r || (y(e.$$.fragment, l), y(i.$$.fragment, l), r = !0);
    },
    o(l) {
      E(e.$$.fragment, l), E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && P(t), ee(e, l), ee(i, l);
    }
  };
}
function Dm(n) {
  let e, t, i;
  function r(a) {
    n[15](a);
  }
  let l = {
    indeterminate: !0,
    "aria-label": "Data is being loaded...",
    slot: "progress"
  };
  return (
    /*loadingDone*/
    n[0] !== void 0 && (l.closed = /*loadingDone*/
    n[0]), e = new lm({ props: l }), se.push(() => pt(e, "closed", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s[0] & /*loadingDone*/
        1 && (t = !0, o.closed = /*loadingDone*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        E(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Mm(n) {
  let e, t;
  return e = new Vh({
    props: {
      "table$aria-label": (
        /*label*/
        n[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Dm],
        default: [km]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*label*/
      2 && (l["table$aria-label"] = /*label*/
      i[1]), r[0] & /*loadingDone, $filteredData, columnDefs, rowActions, filters, $sortDirection, $sortColumn*/
      253 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Fm(n, e, t) {
  let i, r, l, { loadingDone: a = !0 } = e, { label: s = dn() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: f = [] } = e, d = { name: "", color: "", number: "" }, h = yt([]);
  rt(n, h, (I) => t(7, l = I));
  let m = yt(null);
  rt(n, m, (I) => t(5, i = I));
  let _ = yt(null);
  rt(n, _, (I) => t(6, r = I)), c.store.subscribe((I) => {
    t(13, u = [...I]), p();
  });
  function p() {
    let I = u.filter((D) => o.every((O) => {
      const U = d[O.field], W = D[O.field];
      return U ? O.filterType === "number" ? W == U : W.toString().toLowerCase().includes(U.toLowerCase()) : !0;
    }));
    I = A(I), h.set(I);
  }
  function A(I) {
    let D, O;
    return m.subscribe((U) => D = U), _.subscribe((U) => O = U), !D || !O ? I : I.sort((U, W) => {
      let q = U[D], z = W[D];
      return q == null && (q = ""), z == null && (z = ""), O === "asc" ? q.toString().localeCompare(z.toString()) : z.toString().localeCompare(q.toString());
    });
  }
  function b(I) {
    m.update((D) => {
      if (D === I)
        _.update((O) => O === "asc" ? "desc" : O === "desc" ? null : "asc");
      else
        return _.set("asc"), I;
      return I;
    }), p();
  }
  h.set(u);
  function T(I) {
    a = I, t(0, a);
  }
  function C(I) {
    d[I.field] = this.value, t(4, d);
  }
  const k = () => p();
  function R(I) {
    d[I.field] = ma(this.value), t(4, d);
  }
  const g = () => p(), S = (I) => I.sortable && b(I.field), B = (I, D) => I.callback(D), v = (I, D) => I.callback(D);
  return n.$$set = (I) => {
    "loadingDone" in I && t(0, a = I.loadingDone), "label" in I && t(1, s = I.label), "columnDefs" in I && t(2, o = I.columnDefs), "rowData" in I && t(13, u = I.rowData), "store" in I && t(14, c = I.store), "rowActions" in I && t(3, f = I.rowActions);
  }, [
    a,
    s,
    o,
    f,
    d,
    i,
    r,
    l,
    h,
    m,
    _,
    p,
    b,
    u,
    c,
    T,
    C,
    k,
    R,
    g,
    S,
    B,
    v
  ];
}
class Um extends ye {
  constructor(e) {
    super(), Ae(
      this,
      e,
      Fm,
      Mm,
      ge,
      {
        loadingDone: 0,
        label: 1,
        columnDefs: 2,
        rowData: 13,
        store: 14,
        rowActions: 3
      },
      null,
      [-1, -1]
    );
  }
}
function gt(n) {
  return typeof n == "function";
}
function Kr(n) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var _r = Kr(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Lr(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var Ui = function() {
  function n(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var e, t, i, r, l;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var s = Ct(a), o = s.next(); !o.done; o = s.next()) {
              var u = o.value;
              u.remove(this);
            }
          } catch (_) {
            e = { error: _ };
          } finally {
            try {
              o && !o.done && (t = s.return) && t.call(s);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          a.remove(this);
      var c = this.initialTeardown;
      if (gt(c))
        try {
          c();
        } catch (_) {
          l = _ instanceof _r ? _.errors : [_];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = Ct(f), h = d.next(); !h.done; h = d.next()) {
            var m = h.value;
            try {
              Qs(m);
            } catch (_) {
              l = l ?? [], _ instanceof _r ? l = Tn(Tn([], mn(l)), mn(_.errors)) : l.push(_);
            }
          }
        } catch (_) {
          i = { error: _ };
        } finally {
          try {
            h && !h.done && (r = d.return) && r.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (l)
        throw new _r(l);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        Qs(e);
      else {
        if (e instanceof n) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, n.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, n.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, n.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && Lr(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && Lr(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}();
Ui.EMPTY;
function Ha(n) {
  return n instanceof Ui || n && "closed" in n && gt(n.remove) && gt(n.add) && gt(n.unsubscribe);
}
function Qs(n) {
  gt(n) ? n() : n.unsubscribe();
}
var Nm = {
  Promise: void 0
}, wm = {
  setTimeout: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Tn([n, e], mn(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function Ba(n) {
  wm.setTimeout(function() {
    throw n;
  });
}
function Js() {
}
function Pm(n) {
  n();
}
var zr = function(n) {
  at(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return i.isStopped = !1, t ? (i.destination = t, Ha(t) && t.add(i)) : i.destination = Vm, i;
  }
  return e.create = function(t, i, r) {
    return new Or(t, i, r);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(Ui), Hm = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (i) {
        yi(i);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (i) {
        yi(i);
      }
    else
      yi(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        yi(t);
      }
  }, n;
}(), Or = function(n) {
  at(e, n);
  function e(t, i, r) {
    var l = n.call(this) || this, a;
    return gt(t) || !t ? a = {
      next: t ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = t, l.destination = new Hm(a), l;
  }
  return e;
}(zr);
function yi(n) {
  Ba(n);
}
function Bm(n) {
  throw n;
}
var Vm = {
  closed: !0,
  next: Js,
  error: Bm,
  complete: Js
}, Wr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ni(n) {
  return n;
}
function jm(n) {
  return n.length === 0 ? Ni : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(i, r) {
      return r(i);
    }, t);
  };
}
var jt = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, i) {
    var r = this, l = Gm(e) ? e : new Or(e, t, i);
    return Pm(function() {
      var a = r, s = a.operator, o = a.source;
      l.add(s ? s.call(l, o) : o ? r._subscribe(l) : r._trySubscribe(l));
    }), l;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var i = this;
    return t = xs(t), new t(function(r, l) {
      var a = new Or({
        next: function(s) {
          try {
            e(s);
          } catch (o) {
            l(o), a.unsubscribe();
          }
        },
        error: l,
        complete: r
      });
      i.subscribe(a);
    });
  }, n.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, n.prototype[Wr] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return jm(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = xs(e), new e(function(i, r) {
      var l;
      t.subscribe(function(a) {
        return l = a;
      }, function(a) {
        return r(a);
      }, function() {
        return i(l);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function xs(n) {
  var e;
  return (e = n ?? Nm.Promise) !== null && e !== void 0 ? e : Promise;
}
function qm(n) {
  return n && gt(n.next) && gt(n.error) && gt(n.complete);
}
function Gm(n) {
  return n && n instanceof zr || qm(n) && Ha(n);
}
function Km(n) {
  return gt(n == null ? void 0 : n.lift);
}
function bn(n) {
  return function(e) {
    if (Km(e))
      return e.lift(function(t) {
        try {
          return n(t, this);
        } catch (i) {
          this.error(i);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function pn(n, e, t, i, r) {
  return new zm(n, e, t, i, r);
}
var zm = function(n) {
  at(e, n);
  function e(t, i, r, l, a, s) {
    var o = n.call(this, t) || this;
    return o.onFinalize = a, o.shouldUnsubscribe = s, o._next = i ? function(u) {
      try {
        i(u);
      } catch (c) {
        t.error(c);
      }
    } : n.prototype._next, o._error = l ? function(u) {
      try {
        l(u);
      } catch (c) {
        t.error(c);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._error, o._complete = r ? function() {
      try {
        r();
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._complete, o;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var i = this.closed;
      n.prototype.unsubscribe.call(this), !i && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}(zr), Wm = {
  now: function() {
    return Date.now();
  }
}, Xm = function(n) {
  at(e, n);
  function e(t, i) {
    return n.call(this) || this;
  }
  return e.prototype.schedule = function(t, i) {
    return this;
  }, e;
}(Ui), $s = {
  setInterval: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setInterval.apply(void 0, Tn([n, e], mn(t)));
  },
  clearInterval: function(n) {
    return clearInterval(n);
  },
  delegate: void 0
}, Ym = function(n) {
  at(e, n);
  function e(t, i) {
    var r = n.call(this, t, i) || this;
    return r.scheduler = t, r.work = i, r.pending = !1, r;
  }
  return e.prototype.schedule = function(t, i) {
    var r;
    if (i === void 0 && (i = 0), this.closed)
      return this;
    this.state = t;
    var l = this.id, a = this.scheduler;
    return l != null && (this.id = this.recycleAsyncId(a, l, i)), this.pending = !0, this.delay = i, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(a, this.id, i), this;
  }, e.prototype.requestAsyncId = function(t, i, r) {
    return r === void 0 && (r = 0), $s.setInterval(t.flush.bind(t, this), r);
  }, e.prototype.recycleAsyncId = function(t, i, r) {
    if (r === void 0 && (r = 0), r != null && this.delay === r && this.pending === !1)
      return i;
    i != null && $s.clearInterval(i);
  }, e.prototype.execute = function(t, i) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var r = this._execute(t, i);
    if (r)
      return r;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, i) {
    var r = !1, l;
    try {
      this.work(t);
    } catch (a) {
      r = !0, l = a || new Error("Scheduled action threw falsy error");
    }
    if (r)
      return this.unsubscribe(), l;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, i = t.id, r = t.scheduler, l = r.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Lr(l, this), i != null && (this.id = this.recycleAsyncId(r, i, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, e;
}(Xm), ea = function() {
  function n(e, t) {
    t === void 0 && (t = n.now), this.schedulerActionCtor = e, this.now = t;
  }
  return n.prototype.schedule = function(e, t, i) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(i, t);
  }, n.now = Wm.now, n;
}(), Zm = function(n) {
  at(e, n);
  function e(t, i) {
    i === void 0 && (i = ea.now);
    var r = n.call(this, t, i) || this;
    return r.actions = [], r._active = !1, r;
  }
  return e.prototype.flush = function(t) {
    var i = this.actions;
    if (this._active) {
      i.push(t);
      return;
    }
    var r;
    this._active = !0;
    do
      if (r = t.execute(t.state, t.delay))
        break;
    while (t = i.shift());
    if (this._active = !1, r) {
      for (; t = i.shift(); )
        t.unsubscribe();
      throw r;
    }
  }, e;
}(ea), Va = new Zm(Ym), Qm = Va, Jm = new jt(function(n) {
  return n.complete();
});
function ja(n) {
  return n && gt(n.schedule);
}
function qa(n) {
  return n[n.length - 1];
}
function xm(n) {
  return gt(qa(n)) ? n.pop() : void 0;
}
function Ga(n) {
  return ja(qa(n)) ? n.pop() : void 0;
}
var Ka = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function za(n) {
  return gt(n == null ? void 0 : n.then);
}
function Wa(n) {
  return gt(n[Wr]);
}
function Xa(n) {
  return Symbol.asyncIterator && gt(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function Ya(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function $m() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Za = $m();
function Qa(n) {
  return gt(n == null ? void 0 : n[Za]);
}
function Ja(n) {
  return yo(this, arguments, function() {
    var t, i, r, l;
    return Pr(this, function(a) {
      switch (a.label) {
        case 0:
          t = n.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, zn(t.read())];
        case 3:
          return i = a.sent(), r = i.value, l = i.done, l ? [4, zn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, zn(r)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function xa(n) {
  return gt(n == null ? void 0 : n.getReader);
}
function Ln(n) {
  if (n instanceof jt)
    return n;
  if (n != null) {
    if (Wa(n))
      return ep(n);
    if (Ka(n))
      return tp(n);
    if (za(n))
      return np(n);
    if (Xa(n))
      return $a(n);
    if (Qa(n))
      return ip(n);
    if (xa(n))
      return rp(n);
  }
  throw Ya(n);
}
function ep(n) {
  return new jt(function(e) {
    var t = n[Wr]();
    if (gt(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function tp(n) {
  return new jt(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function np(n) {
  return new jt(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, Ba);
  });
}
function ip(n) {
  return new jt(function(e) {
    var t, i;
    try {
      for (var r = Ct(n), l = r.next(); !l.done; l = r.next()) {
        var a = l.value;
        if (e.next(a), e.closed)
          return;
      }
    } catch (s) {
      t = { error: s };
    } finally {
      try {
        l && !l.done && (i = r.return) && i.call(r);
      } finally {
        if (t)
          throw t.error;
      }
    }
    e.complete();
  });
}
function $a(n) {
  return new jt(function(e) {
    lp(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function rp(n) {
  return $a(Ja(n));
}
function lp(n, e) {
  var t, i, r, l;
  return wr(this, void 0, void 0, function() {
    var a, s;
    return Pr(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), t = Co(n), o.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (i = o.sent(), !!i.done)
            return [3, 4];
          if (a = i.value, e.next(a), e.closed)
            return [2];
          o.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return s = o.sent(), r = { error: s }, [3, 11];
        case 6:
          return o.trys.push([6, , 9, 10]), i && !i.done && (l = t.return) ? [4, l.call(t)] : [3, 8];
        case 7:
          o.sent(), o.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (r)
            throw r.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function hn(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var l = e.schedule(function() {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (n.add(l), !r)
    return l;
}
function eo(n, e) {
  return e === void 0 && (e = 0), bn(function(t, i) {
    t.subscribe(pn(i, function(r) {
      return hn(i, n, function() {
        return i.next(r);
      }, e);
    }, function() {
      return hn(i, n, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return hn(i, n, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function to(n, e) {
  return e === void 0 && (e = 0), bn(function(t, i) {
    i.add(n.schedule(function() {
      return t.subscribe(i);
    }, e));
  });
}
function sp(n, e) {
  return Ln(n).pipe(to(e), eo(e));
}
function ap(n, e) {
  return Ln(n).pipe(to(e), eo(e));
}
function op(n, e) {
  return new jt(function(t) {
    var i = 0;
    return e.schedule(function() {
      i === n.length ? t.complete() : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function up(n, e) {
  return new jt(function(t) {
    var i;
    return hn(t, e, function() {
      i = n[Za](), hn(t, e, function() {
        var r, l, a;
        try {
          r = i.next(), l = r.value, a = r.done;
        } catch (s) {
          t.error(s);
          return;
        }
        a ? t.complete() : t.next(l);
      }, 0, !0);
    }), function() {
      return gt(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function no(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new jt(function(t) {
    hn(t, e, function() {
      var i = n[Symbol.asyncIterator]();
      hn(t, e, function() {
        i.next().then(function(r) {
          r.done ? t.complete() : t.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function cp(n, e) {
  return no(Ja(n), e);
}
function fp(n, e) {
  if (n != null) {
    if (Wa(n))
      return sp(n, e);
    if (Ka(n))
      return op(n, e);
    if (za(n))
      return ap(n, e);
    if (Xa(n))
      return no(n, e);
    if (Qa(n))
      return up(n, e);
    if (xa(n))
      return cp(n, e);
  }
  throw Ya(n);
}
function wi(n, e) {
  return e ? fp(n, e) : Ln(n);
}
function ui() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = Ga(n);
  return wi(n, t);
}
var dp = Kr(function(n) {
  return function() {
    n(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function hp(n, e) {
  return new Promise(function(t, i) {
    var r = !1, l;
    n.subscribe({
      next: function(a) {
        l = a, r = !0;
      },
      error: i,
      complete: function() {
        r ? t(l) : i(new dp());
      }
    });
  });
}
function mp(n) {
  return n instanceof Date && !isNaN(n);
}
function zt(n, e) {
  return bn(function(t, i) {
    var r = 0;
    t.subscribe(pn(i, function(l) {
      i.next(n.call(e, l, r++));
    }));
  });
}
var pp = Array.isArray;
function gp(n, e) {
  return pp(e) ? n.apply(void 0, Tn([], mn(e))) : n(e);
}
function _p(n) {
  return zt(function(e) {
    return gp(n, e);
  });
}
var bp = Array.isArray, Ip = Object.getPrototypeOf, vp = Object.prototype, Ap = Object.keys;
function yp(n) {
  if (n.length === 1) {
    var e = n[0];
    if (bp(e))
      return { args: e, keys: null };
    if (Cp(e)) {
      var t = Ap(e);
      return {
        args: t.map(function(i) {
          return e[i];
        }),
        keys: t
      };
    }
  }
  return { args: n, keys: null };
}
function Cp(n) {
  return n && typeof n == "object" && Ip(n) === vp;
}
function Ep(n, e) {
  return n.reduce(function(t, i, r) {
    return t[i] = e[r], t;
  }, {});
}
function Sp() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = Ga(n), i = xm(n), r = yp(n), l = r.args, a = r.keys;
  if (l.length === 0)
    return wi([], t);
  var s = new jt(Tp(l, t, a ? function(o) {
    return Ep(a, o);
  } : Ni));
  return i ? s.pipe(_p(i)) : s;
}
function Tp(n, e, t) {
  return t === void 0 && (t = Ni), function(i) {
    ta(e, function() {
      for (var r = n.length, l = new Array(r), a = r, s = r, o = function(c) {
        ta(e, function() {
          var f = wi(n[c], e), d = !1;
          f.subscribe(pn(i, function(h) {
            l[c] = h, d || (d = !0, s--), s || i.next(t(l.slice()));
          }, function() {
            --a || i.complete();
          }));
        }, i);
      }, u = 0; u < r; u++)
        o(u);
    }, i);
  };
}
function ta(n, e, t) {
  n ? hn(t, n, e) : e();
}
function Lp(n, e, t, i, r, l, a, s) {
  var o = [], u = 0, c = 0, f = !1, d = function() {
    f && !o.length && !u && e.complete();
  }, h = function(_) {
    return u < i ? m(_) : o.push(_);
  }, m = function(_) {
    u++;
    var p = !1;
    Ln(t(_, c++)).subscribe(pn(e, function(A) {
      e.next(A);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var A = function() {
            var b = o.shift();
            a || m(b);
          }; o.length && u < i; )
            A();
          d();
        } catch (b) {
          e.error(b);
        }
    }));
  };
  return n.subscribe(pn(e, h, function() {
    f = !0, d();
  })), function() {
  };
}
function Ti(n, e, t) {
  return t === void 0 && (t = 1 / 0), gt(e) ? Ti(function(i, r) {
    return zt(function(l, a) {
      return e(i, l, r, a);
    })(Ln(n(i, r)));
  }, t) : (typeof e == "number" && (t = e), bn(function(i, r) {
    return Lp(i, r, n, t);
  }));
}
function Op(n, e, t) {
  t === void 0 && (t = Qm);
  var i = -1;
  return e != null && (ja(e) ? t = e : i = e), new jt(function(r) {
    var l = mp(n) ? 500 - t.now() : n;
    l < 0 && (l = 0);
    var a = 0;
    return t.schedule(function() {
      r.closed || (r.next(a++), 0 <= i ? this.schedule(void 0, i) : r.complete());
    }, l);
  });
}
function ci(n) {
  return bn(function(e, t) {
    var i = null, r = !1, l;
    i = e.subscribe(pn(t, void 0, void 0, function(a) {
      l = Ln(n(a, ci(n)(e))), i ? (i.unsubscribe(), i = null, l.subscribe(t)) : r = !0;
    })), r && (i.unsubscribe(), i = null, l.subscribe(t));
  });
}
function Rp(n, e) {
  return gt(e) ? Ti(n, e, 1) : Ti(n, 1);
}
function gn(n) {
  return n <= 0 ? function() {
    return Jm;
  } : bn(function(e, t) {
    var i = 0;
    e.subscribe(pn(t, function(r) {
      ++i <= n && (t.next(r), n <= i && t.complete());
    }));
  });
}
function kp(n) {
  return zt(function() {
    return n;
  });
}
function Dp(n, e) {
  return Ti(function(t, i) {
    return Ln(n(t, i)).pipe(gn(1), kp(t));
  });
}
function Mp(n, e) {
  e === void 0 && (e = Va);
  var t = Op(n, e);
  return Dp(function() {
    return t;
  });
}
function Fp(n) {
  return bn(function(e, t) {
    try {
      e.subscribe(t);
    } finally {
      t.add(n);
    }
  });
}
function fi(n, e, t) {
  var i = gt(n) || e || t ? { next: n, error: e, complete: t } : n;
  return i ? bn(function(r, l) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var s = !0;
    r.subscribe(pn(l, function(o) {
      var u;
      (u = i.next) === null || u === void 0 || u.call(i, o), l.next(o);
    }, function() {
      var o;
      s = !1, (o = i.complete) === null || o === void 0 || o.call(i), l.complete();
    }, function(o) {
      var u;
      s = !1, (u = i.error) === null || u === void 0 || u.call(i, o), l.error(o);
    }, function() {
      var o, u;
      s && ((o = i.unsubscribe) === null || o === void 0 || o.call(i)), (u = i.finalize) === null || u === void 0 || u.call(i);
    }));
  }) : Ni;
}
function io(n) {
  switch (n.responseType) {
    case "json": {
      if ("response" in n)
        return n.response;
      var e = n;
      return JSON.parse(e.responseText);
    }
    case "document":
      return n.responseXML;
    case "text":
    default: {
      if ("response" in n)
        return n.response;
      var e = n;
      return e.responseText;
    }
  }
}
var Up = /* @__PURE__ */ function() {
  function n(e, t, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = t, this.request = i, this.type = r;
    var l = t.status, a = t.responseType;
    this.status = l ?? 0, this.responseType = a ?? "";
    var s = t.getAllResponseHeaders();
    this.responseHeaders = s ? s.split(`
`).reduce(function(c, f) {
      var d = f.indexOf(": ");
      return c[f.slice(0, d)] = f.slice(d + 2), c;
    }, {}) : {}, this.response = io(t);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return n;
}(), Li = Kr(function(n) {
  return function(t, i, r) {
    this.message = t, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var l;
    try {
      l = io(i);
    } catch {
      l = i.responseText;
    }
    this.response = l;
  };
}), Np = function() {
  function n(e, t) {
    return Li.call(this, "ajax timeout", e, t), this.name = "AjaxTimeoutError", this;
  }
  return n.prototype = Object.create(Li.prototype), n;
}();
function wp(n, e) {
  return On({ method: "GET", url: n, headers: e });
}
function Pp(n, e, t) {
  return On({ method: "POST", url: n, body: e, headers: t });
}
function Hp(n, e) {
  return On({ method: "DELETE", url: n, headers: e });
}
function Bp(n, e, t) {
  return On({ method: "PUT", url: n, body: e, headers: t });
}
function Vp(n, e, t) {
  return On({ method: "PATCH", url: n, body: e, headers: t });
}
var jp = zt(function(n) {
  return n.response;
});
function qp(n, e) {
  return jp(On({
    method: "GET",
    url: n,
    headers: e
  }));
}
var On = function() {
  var n = function(e) {
    var t = typeof e == "string" ? {
      url: e
    } : e;
    return Kp(t);
  };
  return n.get = wp, n.post = Pp, n.delete = Hp, n.put = Bp, n.patch = Vp, n.getJSON = qp, n;
}(), Gp = "upload", na = "download", br = "loadstart", Ir = "progress", ia = "load";
function Kp(n) {
  return new jt(function(e) {
    var t, i, r = We({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, n), l = r.queryParams, a = r.body, s = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (l) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(l).forEach(function(z, M) {
          return u.set(M, z);
        }), o = c[0] + "?" + u;
      } else
        u = new URLSearchParams(l), o = o + "?" + u;
    }
    var f = {};
    if (s)
      for (var d in s)
        s.hasOwnProperty(d) && (f[d.toLowerCase()] = s[d]);
    var h = r.crossDomain;
    !h && !("x-requested-with" in f) && (f["x-requested-with"] = "XMLHttpRequest");
    var m = r.withCredentials, _ = r.xsrfCookieName, p = r.xsrfHeaderName;
    if ((m || !h) && _ && p) {
      var A = (i = (t = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"))) === null || t === void 0 ? void 0 : t.pop()) !== null && i !== void 0 ? i : "";
      A && (f[p] = A);
    }
    var b = zp(a, f), T = We(We({}, r), {
      url: o,
      headers: f,
      body: b
    }), C;
    C = n.createXHR ? n.createXHR() : new XMLHttpRequest();
    {
      var k = n.progressSubscriber, R = n.includeDownloadProgress, g = R === void 0 ? !1 : R, S = n.includeUploadProgress, B = S === void 0 ? !1 : S, v = function(z, M) {
        C.addEventListener(z, function() {
          var L, V = M();
          (L = k == null ? void 0 : k.error) === null || L === void 0 || L.call(k, V), e.error(V);
        });
      };
      v("timeout", function() {
        return new Np(C, T);
      }), v("abort", function() {
        return new Li("aborted", C, T);
      });
      var I = function(z, M) {
        return new Up(M, C, T, z + "_" + M.type);
      }, D = function(z, M, L) {
        z.addEventListener(M, function(V) {
          e.next(I(L, V));
        });
      };
      B && [br, Ir, ia].forEach(function(z) {
        return D(C.upload, z, Gp);
      }), k && [br, Ir].forEach(function(z) {
        return C.upload.addEventListener(z, function(M) {
          var L;
          return (L = k == null ? void 0 : k.next) === null || L === void 0 ? void 0 : L.call(k, M);
        });
      }), g && [br, Ir].forEach(function(z) {
        return D(C, z, na);
      });
      var O = function(z) {
        var M = "ajax error" + (z ? " " + z : "");
        e.error(new Li(M, C, T));
      };
      C.addEventListener("error", function(z) {
        var M;
        (M = k == null ? void 0 : k.error) === null || M === void 0 || M.call(k, z), O();
      }), C.addEventListener(ia, function(z) {
        var M, L, V = C.status;
        if (V < 400) {
          (M = k == null ? void 0 : k.complete) === null || M === void 0 || M.call(k);
          var ue = void 0;
          try {
            ue = I(na, z);
          } catch (Fe) {
            e.error(Fe);
            return;
          }
          e.next(ue), e.complete();
        } else
          (L = k == null ? void 0 : k.error) === null || L === void 0 || L.call(k, z), O(V);
      });
    }
    var U = T.user, W = T.method, q = T.async;
    U ? C.open(W, o, q, U, T.password) : C.open(W, o, q), q && (C.timeout = T.timeout, C.responseType = T.responseType), "withCredentials" in C && (C.withCredentials = T.withCredentials);
    for (var d in f)
      f.hasOwnProperty(d) && C.setRequestHeader(d, f[d]);
    return b ? C.send(b) : C.send(), function() {
      C && C.readyState !== 4 && C.abort();
    };
  });
}
function zp(n, e) {
  var t;
  if (!n || typeof n == "string" || Jp(n) || xp(n) || Xp(n) || Yp(n) || Zp(n) || $p(n))
    return n;
  if (Qp(n))
    return n.buffer;
  if (typeof n == "object")
    return e["content-type"] = (t = e["content-type"]) !== null && t !== void 0 ? t : "application/json;charset=utf-8", JSON.stringify(n);
  throw new TypeError("Unknown body type");
}
var Wp = Object.prototype.toString;
function Xr(n, e) {
  return Wp.call(n) === "[object " + e + "]";
}
function Xp(n) {
  return Xr(n, "ArrayBuffer");
}
function Yp(n) {
  return Xr(n, "File");
}
function Zp(n) {
  return Xr(n, "Blob");
}
function Qp(n) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(n);
}
function Jp(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function xp(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function $p(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
class eg {
  constructor(e, t, i) {
    this.url = e, this.variableConfiguration = t, this.description = i;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
  }
  getConfiguration() {
    return this.variableConfiguration;
  }
  getDescription() {
    return this.description;
  }
  /**
   * Constructions the URL this server using the url with variables
   * replaced with their respective values
   */
  getUrl() {
    let e = this.url;
    for (const t in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(t)) {
        const i = new RegExp("{" + t + "}", "g");
        e = e.replace(i, this.variableConfiguration[t]);
      }
    return e;
  }
}
const tg = new eg("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), ng = [tg], ig = ng[0].getUrl();
class Yr {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? ig;
  }
  get middleware() {
    return this.configuration.middleware ?? [];
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}
class ro {
  constructor(e = new Yr()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${rg(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => ui(t).pipe(
      zt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      Rp(
        (i) => On(i).pipe(
          zt((r) => (this.middleware.filter((l) => l.post).forEach((l) => r = l.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, t) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      zt((i) => {
        const { status: r, response: l } = i;
        if (r >= 200 && r < 300)
          return (t == null ? void 0 : t.response) === "raw" ? i : l;
        throw i;
      })
    );
  }
}
const Ot = (n) => encodeURIComponent(`${n}`), rg = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${Ot(e)}=${Ot(i)}`).join("&") : `${Ot(e)}=${Ot(t)}`
).join("&"), Ut = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class lg extends ro {
  archiveResource({ id: e, version: t, xAuthor: i, xApprover: r, contentType: l, xFilename: a, body: s }, o) {
    Ut(e, "id", "archiveResource"), Ut(t, "version", "archiveResource");
    const u = {
      "Content-Type": "application/octet-stream",
      ...i != null ? { "X-author": String(i) } : void 0,
      ...r != null ? { "X-approver": String(r) } : void 0,
      ...l != null ? { "Content-Type": String(l) } : void 0,
      ...a != null ? { "X-filename": String(a) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Ot(e)).replace("{version}", Ot(t)),
      method: "POST",
      headers: u,
      body: s
    }, o == null ? void 0 : o.responseOpts);
  }
  archiveSclResource({ id: e, version: t }, i) {
    Ut(e, "id", "archiveSclResource"), Ut(t, "version", "archiveSclResource");
    const r = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Ot(e)).replace("{version}", Ot(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, t) {
    Ut(e, "id", "retrieveArchivedResourceHistory");
    const i = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Ot(e)),
      method: "GET",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  searchArchivedResources({ archivedResourcesSearch: e }, t) {
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/archive/resources/search",
      method: "POST",
      headers: i,
      body: e
    }, t == null ? void 0 : t.responseOpts);
  }
}
class sg extends ro {
  assignResourceToLocation({ locationId: e, uuid: t }, i) {
    Ut(e, "locationId", "assignResourceToLocation"), Ut(t, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Ot(e)).replace("{uuid}", Ot(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, t) {
    Ut(e, "location", "createLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: i,
      body: e
    }, t == null ? void 0 : t.responseOpts);
  }
  deleteLocation({ locationId: e }, t) {
    Ut(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Ot(e)),
      method: "DELETE",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  getLocation({ locationId: e }, t) {
    Ut(e, "locationId", "getLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Ot(e)),
      method: "GET",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  getLocations({ page: e, pageSize: t }, i) {
    const r = {}, l = {};
    return e != null && (l.page = e), t != null && (l.pageSize = t), this.request({
      url: "/api/locations",
      method: "GET",
      headers: r,
      query: l
    }, i == null ? void 0 : i.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: t }, i) {
    Ut(e, "locationId", "unassignResourceFromLocation"), Ut(t, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Ot(e)).replace("{uuid}", Ot(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: t }, i) {
    Ut(e, "locationId", "updateLocation"), Ut(t, "location", "updateLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Ot(e)),
      method: "PUT",
      headers: r,
      body: t
    }, i == null ? void 0 : i.responseOpts);
  }
}
class ri {
  constructor(e, t, i, r, l, a, s, o, u, c, f, d) {
    this._uuid = e, this._name = t, this._note = i, this._author = r, this._approver = l, this._type = a, this._voltage = s, this._modifiedAt = o, this._archivedAt = u, this._contentType = c, this._version = f, this._fields = d;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get version() {
    return this._version;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
  get note() {
    return this._note;
  }
  get approver() {
    return this._approver;
  }
  get voltage() {
    return this._voltage;
  }
  get modifiedAt() {
    return this._modifiedAt;
  }
  get archivedAt() {
    return this._archivedAt;
  }
  get contentType() {
    return this._contentType;
  }
  get fields() {
    return this._fields;
  }
}
class En {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ri(
        dn(),
        "Dummy name",
        "My Note",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "1.0.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID_FROM_FIELD :)" }]
      ),
      new ri(
        dn(),
        "Dummy name 2",
        "My Note 2",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "4.1.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID2_FROM_FIELD :)" }]
      )
    ];
  }
  static getInstance() {
    return En.instance || (En.instance = new En()), En.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      gn(1),
      zt((t) => t.resources),
      zt(
        (t) => t.map((i) => this.mapToArchiveSearchResult(i))
      ),
      ci(() => ui(this.dummySearchResults)),
      Mp(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      gn(1),
      zt((t) => t.versions),
      zt(
        (t) => t.map((i) => this.mapToArchiveSearchResult(i))
      ),
      ci(() => ui([
        new ri(
          dn(),
          "Dummy name",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
          this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: dn() }]
        ),
        new ri(
          dn(),
          "Dummy name",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
          this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: dn() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, t, i) {
    return wi(
      fetch(`${this.baseUrl}/scl/v1/${t}/${e}/${i}`).then((r) => {
        if (r.status >= 200 && r.status < 300)
          return r.blob();
        throw new Error(
          "Unable to download resource: " + r.status + " " + r.statusText
        );
      })
    );
  }
  mapToArchiveSearchResult(e) {
    return new ri(
      e.uuid,
      e.name,
      e.note,
      e.author,
      e.approver,
      e.type,
      e.voltage,
      this.formatDate(e.modifiedAt),
      this.formatDate(e.archivedAt),
      e.contentType,
      e.version,
      e.fields
    );
  }
  formatDate(e) {
    if (!e)
      return "";
    const t = new Date(e);
    return isNaN(t.getTime()) ? "" : Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(t);
  }
  generateApiClient() {
    const e = new Yr({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new lg(e);
  }
}
class Hn {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return Hn.instance || (Hn.instance = new Hn()), Hn.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      gn(1),
      ci(() => ui([
        {
          uuid: "912e83a1-f84e-4d0d-9432-b5381e2b9e0d",
          name: "Location 1",
          description: "",
          key: ""
        },
        {
          uuid: "b9d01044-7bc7-4430-93b3-86ff093319e6",
          name: "Location 2",
          description: "",
          key: ""
        },
        {
          uuid: "f8435ba3-0c92-4ea3-ade0-5d72458c95c7",
          name: "Location 3",
          description: "",
          key: ""
        }
      ]))
    );
  }
  generateApiClient() {
    const e = new Yr({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new sg(e);
  }
}
var di;
const Vn = class Vn {
  constructor() {
    ti(this, di, yt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Vn.instance || (Vn.instance = new Vn()), Vn.instance;
  }
  get store() {
    return Gt(this, di);
  }
  updateData(e) {
    Gt(this, di).set(e);
  }
};
di = new WeakMap();
let Rr = Vn;
var Xn;
const jn = class jn {
  constructor() {
    ti(this, Xn, yt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return jn.instance || (jn.instance = new jn()), jn.instance;
  }
  get store() {
    return Gt(this, Xn);
  }
  updateData(e) {
    Gt(this, Xn).set(e);
  }
  getLocationNameByUuid(e) {
    return Mr(Gt(this, Xn)).get(e);
  }
};
Xn = new WeakMap();
let Oi = jn;
var Yn;
const qn = class qn {
  constructor() {
    ti(this, Yn, yt([]));
  }
  static getInstance() {
    return qn.instance || (qn.instance = new qn()), qn.instance;
  }
  get store() {
    return Gt(this, Yn);
  }
  get currentData() {
    return Mr(Gt(this, Yn));
  }
  updateData(e) {
    Gt(this, Yn).set(e);
  }
};
Yn = new WeakMap();
let kr = qn;
var Zn;
const Gn = class Gn {
  constructor() {
    ti(this, Zn, yt([]));
  }
  static getInstance() {
    return Gn.instance || (Gn.instance = new Gn()), Gn.instance;
  }
  get store() {
    return Gt(this, Zn);
  }
  get currentData() {
    return Mr(Gt(this, Zn));
  }
  updateData(e) {
    Gt(this, Zn).set(e);
  }
};
Zn = new WeakMap();
let Dr = Gn;
class Bn {
  constructor() {
    this.locationService = Hn.getInstance(), this.archiveExplorerLocationStore = Oi.getInstance();
  }
  static getInstance() {
    return Bn.instance || (Bn.instance = new Bn()), Bn.instance;
  }
  convertFilterToSearchParams(e) {
    const t = {
      uuid: null,
      type: null,
      contentType: null,
      name: null,
      location: null,
      approver: null,
      voltage: null,
      from: null,
      to: null
    };
    return e.filter((i) => !i.disabled).forEach((i) => {
      console.log("KEY:", i.key), i.key === "from" || i.key === "to" ? t[i.key] = new Date(i.value).toISOString() : t[i.key] = i.value;
    }), t;
  }
  createLocationFilter() {
    return hp(
      this.locationService.listLocations().pipe(
        gn(1),
        fi((e) => {
          const t = /* @__PURE__ */ new Map();
          e.forEach((i) => {
            t.set(i.uuid, i.name);
          }), this.archiveExplorerLocationStore.updateData(t);
        }),
        zt((e) => [
          {
            id: 1,
            label: "Location",
            inputType: {
              id: 2,
              type: "select",
              validatorFn: () => !0,
              options: (e == null ? void 0 : e.map((t) => ({
                value: t.uuid,
                label: t.name
              }))) || []
            },
            allowedOperations: ["="]
          }
        ])
      )
    );
  }
  createArchiveFilter() {
    return [
      {
        id: 2,
        label: "UUID",
        inputType: {
          id: 1,
          type: "string",
          validatorFn: () => !0,
          options: []
        },
        allowedOperations: ["="]
      },
      {
        id: 4,
        label: "Approver",
        inputType: {
          id: 1,
          type: "string",
          validatorFn: () => !0,
          options: []
        },
        allowedOperations: ["="]
      },
      {
        id: 3,
        label: "Type",
        inputType: {
          id: 2,
          type: "select",
          validatorFn: () => !0,
          options: [
            { value: "SSD", label: "SSD" },
            { value: "IID", label: "IID" },
            { value: "ICD", label: "ICD" },
            { value: "SCD", label: "SCD" },
            { value: "CID", label: "CID" },
            { value: "SED", label: "SED" },
            { value: "ISD", label: "ISD" },
            { value: "STD", label: "STD" }
          ]
        },
        allowedOperations: ["="]
      }
      // {
      //   id: 4,
      //   label: 'Type',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: 'Schütz', label: 'Schütz' },
      //       { value: 'Leittechnik', label: 'Leittechnik' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
      // {
      //   id: 5,
      //   label: 'Voltage',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: '380', label: '380' },
      //       { value: '220', label: '220' },
      //       { value: '110', label: '110' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
    ];
  }
}
function ag(n) {
  let e, t;
  return e = new Um({
    props: {
      columnDefs: (
        /*columnDefs*/
        n[2]
      ),
      store: (
        /*dataStore*/
        n[1]
      ),
      loadingDone: (
        /*loadingDone*/
        n[0]
      ),
      rowActions: (
        /*rowActions*/
        n[3]
      )
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*loadingDone*/
      1 && (l.loadingDone = /*loadingDone*/
      i[0]), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function og(n, e, t) {
  let { searchResult: i } = e;
  const r = En.getInstance(), l = { store: yt([]) };
  let a = !1;
  const s = [
    {
      headerName: "Type",
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Content type",
      field: "contentType",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Approver",
      field: "approver",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Author",
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Modifed",
      field: "modifiedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Note",
      field: "note",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Version",
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1,
      cellStyle: "font-weight: bold;",
      headerStyle: "font-weight: bold;"
    },
    {
      headerName: "",
      field: "actions",
      numeric: !1,
      filter: !1,
      filterType: "text",
      minWidth: "100px",
      sortable: !1
    }
  ], o = [
    {
      icon: "download",
      callback: (c) => u(c),
      disabled: () => !1
    }
  ];
  st(() => {
    i && r.retrieveArchivedResourceHistory(i.uuid).pipe(gn(1), fi((c) => {
      l.store.set(c), t(0, a = !0);
    })).subscribe();
  });
  function u(c) {
    var f;
    let d;
    c.fields && c.fields.length && (d = (f = c.fields.find((h) => h.key === "SOURCE_RESOURCE_ID")) === null || f === void 0 ? void 0 : f.value), r.findByUUIDAndVersion(d, c.type, c.version).pipe(
      gn(1),
      fi((h) => {
        const m = window.URL.createObjectURL(h), _ = document.createElement("a");
        _.href = m, _.download = c.filename, _.style.display = "none", document.body.appendChild(_), _.click(), document.body.removeChild(_), window.URL.revokeObjectURL(m);
      }),
      ci((h) => (console.error(h), alert(h), ui(void 0)))
    ).subscribe();
  }
  return n.$$set = (c) => {
    "searchResult" in c && t(4, i = c.searchResult);
  }, [a, l, s, o, i];
}
class ug extends ye {
  constructor(e) {
    super(), Ae(this, e, og, ag, ge, { searchResult: 4 });
  }
}
function ra(n, e, t) {
  const i = n.slice();
  return i[1] = e[t], i;
}
function cg(n) {
  let e;
  return {
    c() {
      e = x("i"), e.textContent = "No resources found.";
    },
    m(t, i) {
      H(t, e, i);
    },
    p: Ze,
    i: Ze,
    o: Ze,
    d(t) {
      t && P(e);
    }
  };
}
function fg(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = Dt(
    /*searchResults*/
    n[0]
  );
  const a = (s) => (
    /*searchResult*/
    s[1].uuid
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = ra(n, l, s), u = a(o);
    t.set(u, e[s] = la(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = qe();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      H(s, i, o), r = !0;
    },
    p(s, o) {
      o & /*searchResults*/
      1 && (l = Dt(
        /*searchResults*/
        s[0]
      ), Ue(), e = mi(e, o, a, 1, s, l, t, i.parentNode, hi, la, i, ra), Ne());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          y(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        E(e[o]);
      r = !1;
    },
    d(s) {
      s && P(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function dg(n) {
  let e, t, i;
  return t = new ug({
    props: { searchResult: (
      /*searchResult*/
      n[1]
    ) }
  }), {
    c() {
      e = x("span"), te(t.$$.fragment), F(e, "slot", "content");
    },
    m(r, l) {
      H(r, e, l), $(t, e, null), i = !0;
    },
    p(r, l) {
      const a = {};
      l & /*searchResults*/
      1 && (a.searchResult = /*searchResult*/
      r[1]), t.$set(a);
    },
    i(r) {
      i || (y(t.$$.fragment, r), i = !0);
    },
    o(r) {
      E(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && P(e), ee(t);
    }
  };
}
function la(n, e) {
  let t, i, r, l, a;
  return i = new wa({
    props: {
      title: (
        /*searchResult*/
        e[1].name
      ),
      $$slots: { content: [dg] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = qe(), te(i.$$.fragment), r = oe(), l = x("br"), this.first = t;
    },
    m(s, o) {
      H(s, t, o), $(i, s, o), H(s, r, o), H(s, l, o), a = !0;
    },
    p(s, o) {
      e = s;
      const u = {};
      o & /*searchResults*/
      1 && (u.title = /*searchResult*/
      e[1].name), o & /*$$scope, searchResults*/
      17 && (u.$$scope = { dirty: o, ctx: e }), i.$set(u);
    },
    i(s) {
      a || (y(i.$$.fragment, s), a = !0);
    },
    o(s) {
      E(i.$$.fragment, s), a = !1;
    },
    d(s) {
      s && (P(t), P(r), P(l)), ee(i, s);
    }
  };
}
function hg(n) {
  let e, t, i, r, l;
  const a = [fg, cg], s = [];
  function o(u, c) {
    return (
      /*searchResults*/
      u[0].length ? 0 : 1
    );
  }
  return i = o(n), r = s[i] = a[i](n), {
    c() {
      e = x("div"), t = x("div"), r.c(), F(t, "class", "content"), F(e, "class", "result-container");
    },
    m(u, c) {
      H(u, e, c), Q(e, t), s[i].m(t, null), l = !0;
    },
    p(u, [c]) {
      let f = i;
      i = o(u), i === f ? s[i].p(u, c) : (Ue(), E(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne(), r = s[i], r ? r.p(u, c) : (r = s[i] = a[i](u), r.c()), y(r, 1), r.m(t, null));
    },
    i(u) {
      l || (y(r), l = !0);
    },
    o(u) {
      E(r), l = !1;
    },
    d(u) {
      u && P(e), s[i].d();
    }
  };
}
function mg(n, e, t) {
  let { searchResults: i = [] } = e;
  return n.$$set = (r) => {
    "searchResults" in r && t(0, i = r.searchResults);
  }, [i];
}
class pg extends ye {
  constructor(e) {
    super(), Ae(this, e, mg, hg, ge, { searchResults: 0 });
  }
}
const { Map: gg } = ha;
function sa(n, e, t) {
  const i = n.slice();
  return i[17] = e[t], i[19] = t, i;
}
function _g(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d;
  t = new Na({
    props: { loadingDone: (
      /*loadingDone*/
      n[5]
    ) }
  });
  function h(b) {
    n[10](b);
  }
  let m = {
    filterTypes: (
      /*locationFilterType*/
      n[2]
    ),
    useOptionLabelInChipText: !0
  };
  /*locationFiltersToSearch*/
  n[3] !== void 0 && (m.activeFilters = /*locationFiltersToSearch*/
  n[3]), l = new Ts({ props: m }), se.push(() => pt(l, "activeFilters", h));
  function _(b) {
    n[11](b);
  }
  let p = {
    disabled: (
      /*uuidFilterSelected*/
      n[7] || !/*locationFiltersToSearch*/
      n[3].length
    ),
    filterTypes: (
      /*filterTypes*/
      n[1]
    ),
    $$slots: {
      "filter-controls": [Ag]
    },
    $$scope: { ctx: n }
  };
  /*filtersToSearch*/
  n[0] !== void 0 && (p.activeFilters = /*filtersToSearch*/
  n[0]), o = new Ts({ props: p }), se.push(() => pt(o, "activeFilters", _));
  let A = (
    /*searchResults*/
    n[4].size && aa(n)
  );
  return {
    c() {
      e = x("div"), te(t.$$.fragment), i = oe(), r = x("div"), te(l.$$.fragment), s = oe(), te(o.$$.fragment), c = oe(), f = x("div"), A && A.c(), F(r, "class", "search-filter svelte-uwjlgf"), F(f, "class", "content-container svelte-uwjlgf"), F(e, "class", "archive-explorer-container svelte-uwjlgf"), vr(e, "display", "none");
    },
    m(b, T) {
      H(b, e, T), $(t, e, null), Q(e, i), Q(e, r), $(l, r, null), Q(r, s), $(o, r, null), Q(e, c), Q(e, f), A && A.m(f, null), d = !0;
    },
    p(b, T) {
      const C = {};
      T & /*loadingDone*/
      32 && (C.loadingDone = /*loadingDone*/
      b[5]), t.$set(C);
      const k = {};
      T & /*locationFilterType*/
      4 && (k.filterTypes = /*locationFilterType*/
      b[2]), !a && T & /*locationFiltersToSearch*/
      8 && (a = !0, k.activeFilters = /*locationFiltersToSearch*/
      b[3], mt(() => a = !1)), l.$set(k);
      const R = {};
      T & /*uuidFilterSelected, locationFiltersToSearch*/
      136 && (R.disabled = /*uuidFilterSelected*/
      b[7] || !/*locationFiltersToSearch*/
      b[3].length), T & /*filterTypes*/
      2 && (R.filterTypes = /*filterTypes*/
      b[1]), T & /*$$scope, locationFiltersToSearch*/
      1048584 && (R.$$scope = { dirty: T, ctx: b }), !u && T & /*filtersToSearch*/
      1 && (u = !0, R.activeFilters = /*filtersToSearch*/
      b[0], mt(() => u = !1)), o.$set(R), /*searchResults*/
      b[4].size ? A ? (A.p(b, T), T & /*searchResults*/
      16 && y(A, 1)) : (A = aa(b), A.c(), y(A, 1), A.m(f, null)) : A && (Ue(), E(A, 1, 1, () => {
        A = null;
      }), Ne());
    },
    i(b) {
      d || (y(t.$$.fragment, b), y(l.$$.fragment, b), y(o.$$.fragment, b), y(A), d = !0);
    },
    o(b) {
      E(t.$$.fragment, b), E(l.$$.fragment, b), E(o.$$.fragment, b), E(A), d = !1;
    },
    d(b) {
      b && P(e), ee(t), ee(l), ee(o), A && A.d();
    }
  };
}
function bg(n) {
  let e, t;
  return e = new Na({
    props: { loadingDone: !/*loading*/
    n[6] }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*loading*/
      64 && (l.loadingDone = !/*loading*/
      i[6]), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ig(n) {
  let e;
  return {
    c() {
      e = ut("Search");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && P(e);
    }
  };
}
function vg(n) {
  let e, t, i, r;
  return e = new Xd({}), i = new qo({
    props: {
      $$slots: { default: [Ig] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), H(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      1048576 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (y(e.$$.fragment, l), y(i.$$.fragment, l), r = !0);
    },
    o(l) {
      E(e.$$.fragment, l), E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && P(t), ee(e, l), ee(i, l);
    }
  };
}
function Ag(n) {
  let e, t;
  return e = new Br({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        n[9]
      ),
      disabled: !/*locationFiltersToSearch*/
      n[3].length,
      $$slots: { default: [vg] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*locationFiltersToSearch*/
      8 && (l.disabled = !/*locationFiltersToSearch*/
      i[3].length), r & /*$$scope*/
      1048576 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function aa(n) {
  let e = [], t = new gg(), i, r, l = Dt(
    /*searchResults*/
    n[4]
  );
  const a = (s) => (
    /*result*/
    s[17]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = sa(n, l, s), u = a(o);
    t.set(u, e[s] = oa(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = qe();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      H(s, i, o), r = !0;
    },
    p(s, o) {
      o & /*searchResults, archiveExplorerLocationStore*/
      272 && (l = Dt(
        /*searchResults*/
        s[4]
      ), Ue(), e = mi(e, o, a, 1, s, l, t, i.parentNode, hi, oa, i, sa), Ne());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          y(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        E(e[o]);
      r = !1;
    },
    d(s) {
      s && P(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function yg(n) {
  let e, t, i;
  return t = new pg({
    props: { searchResults: (
      /*result*/
      n[17][1]
    ) }
  }), {
    c() {
      e = x("span"), te(t.$$.fragment), F(e, "slot", "content");
    },
    m(r, l) {
      H(r, e, l), $(t, e, null), i = !0;
    },
    p(r, l) {
      const a = {};
      l & /*searchResults*/
      16 && (a.searchResults = /*result*/
      r[17][1]), t.$set(a);
    },
    i(r) {
      i || (y(t.$$.fragment, r), i = !0);
    },
    o(r) {
      E(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && P(e), ee(t);
    }
  };
}
function oa(n, e) {
  let t, i, r, l, a;
  return i = new wa({
    props: {
      open: (
        /*index*/
        e[19] === 0
      ),
      title: (
        /*archiveExplorerLocationStore*/
        e[8].getLocationNameByUuid(
          /*result*/
          e[17][0]
        )
      ),
      $$slots: { content: [yg] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = qe(), te(i.$$.fragment), r = oe(), l = x("div"), F(l, "class", "separator svelte-uwjlgf"), this.first = t;
    },
    m(s, o) {
      H(s, t, o), $(i, s, o), H(s, r, o), H(s, l, o), a = !0;
    },
    p(s, o) {
      e = s;
      const u = {};
      o & /*searchResults*/
      16 && (u.open = /*index*/
      e[19] === 0), o & /*searchResults*/
      16 && (u.title = /*archiveExplorerLocationStore*/
      e[8].getLocationNameByUuid(
        /*result*/
        e[17][0]
      )), o & /*$$scope, searchResults*/
      1048592 && (u.$$scope = { dirty: o, ctx: e }), i.$set(u);
    },
    i(s) {
      a || (y(i.$$.fragment, s), a = !0);
    },
    o(s) {
      E(i.$$.fragment, s), a = !1;
    },
    d(s) {
      s && (P(t), P(r), P(l)), ee(i, s);
    }
  };
}
function Cg(n) {
  let e, t, i, r;
  const l = [bg, _g], a = [];
  function s(o, u) {
    return (
      /*loading*/
      o[6] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = qe();
    },
    m(o, u) {
      a[e].m(o, u), H(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ue(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), Ne(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), y(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (y(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && P(i), a[e].d(o);
    }
  };
}
function Eg(n, e, t) {
  let i;
  const r = En.getInstance(), l = Bn.getInstance(), a = Rr.getInstance(), s = kr.getInstance(), o = Dr.getInstance(), u = Oi.getInstance();
  let c = [], f = [], d = s.currentData, h = o.currentData, m = /* @__PURE__ */ new Map(), _ = !1, p = !0;
  st(() => {
    setTimeout(
      () => {
        t(6, p = !1);
      },
      1e3
    );
  }), st(() => wr(void 0, void 0, void 0, function* () {
    t(1, c = l.createArchiveFilter()), t(2, f = yield l.createLocationFilter()), t(5, _ = !0);
  }));
  function A() {
    t(5, _ = !1);
    const C = [], k = /* @__PURE__ */ new Map();
    h.forEach((R) => {
      const g = l.convertFilterToSearchParams(d);
      g.location = R.value, C.push(r.searchArchive(g).pipe(gn(1), fi((S) => k.set(R.value, S)), Fp(() => t(5, _ = !0))));
    }), s.updateData(d), o.updateData(h), Sp(C).pipe(fi(() => {
      a.updateData(k), t(4, m = k);
    })).subscribe();
  }
  function b(C) {
    h = C, t(3, h);
  }
  function T(C) {
    d = C, t(0, d);
  }
  return n.$$.update = () => {
    n.$$.dirty & /*filtersToSearch*/
    1 && t(7, i = d.length && !!(d != null && d.find((C) => C.key === "uuid")));
  }, [
    d,
    c,
    f,
    h,
    m,
    _,
    p,
    i,
    u,
    A,
    b,
    T
  ];
}
class Sg extends ye {
  constructor(e) {
    super(), Ae(this, e, Eg, Cg, ge, {});
  }
}
function ua(n) {
  let e, t;
  return e = new Sg({}), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Tg(n) {
  let e, t, i, r, l, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && ua()
  );
  return {
    c() {
      a && a.c(), e = oe(), t = x("input"), i = oe(), r = x("input"), F(t, "type", "hidden"), F(t, "name", "package-name"), t.value = ba, F(r, "type", "hidden"), F(r, "name", "package-version"), r.value = Ia;
    },
    m(s, o) {
      a && a.m(s, o), H(s, e, o), H(s, t, o), H(s, i, o), H(s, r, o), l = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? a ? o & /*doc, dev*/
      3 && y(a, 1) : (a = ua(), a.c(), y(a, 1), a.m(e.parentNode, e)) : a && (Ue(), E(a, 1, 1, () => {
        a = null;
      }), Ne());
    },
    i(s) {
      l || (y(a), l = !0);
    },
    o(s) {
      E(a), l = !1;
    },
    d(s) {
      s && (P(e), P(t), P(i), P(r)), a && a.d(s);
    }
  };
}
function Lg(n, e, t) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return n.$$set = (l) => {
    "doc" in l && t(0, i = l.doc), "dev" in l && t(1, r = l.dev);
  }, [i, r];
}
class Og extends ye {
  constructor(e) {
    super(), Ae(this, e, Lg, Tg, ge, { doc: 0, dev: 1 });
  }
}
class Mg extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Og({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = Rg();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function Rg() {
  const n = `${ba}-v${Ia}-style`, e = kg(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function kg() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Mg as default
};
