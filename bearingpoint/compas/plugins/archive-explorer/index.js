var eo = Object.defineProperty;
var to = (n, e, t) => e in n ? eo(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var rr = (n, e, t) => (to(n, typeof e != "symbol" ? e + "" : e, t), t), no = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var qt = (n, e, t) => (no(n, e, "read from private field"), t ? t.call(n) : e.get(n)), $n = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
function Qe() {
}
function z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function la(n) {
  return n();
}
function zr() {
  return /* @__PURE__ */ Object.create(null);
}
function Je(n) {
  n.forEach(la);
}
function me(n) {
  return typeof n == "function";
}
function _e(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function io(n) {
  return Object.keys(n).length === 0;
}
function sa(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return Qe;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Rr(n) {
  let e;
  return sa(n, (t) => e = t)(), e;
}
function rt(n, e, t) {
  n.$$.on_destroy.push(sa(e, t));
}
function Te(n, e, t, i) {
  if (n) {
    const r = aa(n, e, t, i);
    return n[0](r);
  }
}
function aa(n, e, t, i) {
  return n[1] && i ? z(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function Le(n, e, t, i) {
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
function Oe(n, e, t, i, r, l) {
  if (r) {
    const a = aa(e, t, i, l);
    n.p(a, r);
  }
}
function Re(n) {
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
function he(n, e) {
  const t = {};
  e = new Set(e);
  for (const i in n)
    !e.has(i) && i[0] !== "$" && (t[i] = n[i]);
  return t;
}
function kr(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Bt(n, e, t) {
  return n.set(t), e;
}
function ce(n) {
  return n && me(n.destroy) ? n.destroy : Qe;
}
const ro = ["", !0, 1, "true", "contenteditable"], oa = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function J(n, e) {
  n.appendChild(e);
}
function V(n, e, t) {
  n.insertBefore(e, t || null);
}
function B(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Dr(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function ne(n) {
  return document.createElement(n);
}
function lt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ct(n) {
  return document.createTextNode(n);
}
function oe() {
  return ct(" ");
}
function We() {
  return ct("");
}
function de(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function w(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const lo = ["width", "height"];
function ue(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && lo.indexOf(i) === -1 ? n[i] = e[i] : w(n, i, e[i]);
}
function Xr(n, e) {
  for (const t in e)
    w(n, t, e[t]);
}
function so(n, e) {
  Object.keys(e).forEach((t) => {
    ao(n, t, e[t]);
  });
}
function ao(n, e, t) {
  const i = e.toLowerCase();
  i in n ? n[i] = typeof n[i] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : w(n, e, t);
}
function Ci(n) {
  return /-/.test(n) ? so : ue;
}
function ua(n) {
  return n === "" ? null : +n;
}
function oo(n) {
  return Array.from(n.childNodes);
}
function Ct(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function uo(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function co(n, e, t) {
  ~ro.indexOf(t) ? uo(n, e) : Ct(n, e);
}
function fn(n, e) {
  n.value = e ?? "";
}
function _r(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function Rt(n, e) {
  return new n(e);
}
let si;
function li(n) {
  si = n;
}
function et() {
  if (!si)
    throw new Error("Function called outside component initialization");
  return si;
}
function at(n) {
  et().$$.on_mount.push(n);
}
function Qt(n) {
  et().$$.on_destroy.push(n);
}
function qe(n, e) {
  return et().$$.context.set(n, e), e;
}
function Ge(n) {
  return et().$$.context.get(n);
}
function Yn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Fn = [], se = [];
let qn = [];
const br = [], ca = /* @__PURE__ */ Promise.resolve();
let Ir = !1;
function fa() {
  Ir || (Ir = !0, ca.then(da));
}
function Mr() {
  return fa(), ca;
}
function vr(n) {
  qn.push(n);
}
function bt(n) {
  br.push(n);
}
const lr = /* @__PURE__ */ new Set();
let Rn = 0;
function da() {
  if (Rn !== 0)
    return;
  const n = si;
  do {
    try {
      for (; Rn < Fn.length; ) {
        const e = Fn[Rn];
        Rn++, li(e), fo(e.$$);
      }
    } catch (e) {
      throw Fn.length = 0, Rn = 0, e;
    }
    for (li(null), Fn.length = 0, Rn = 0; se.length; )
      se.pop()();
    for (let e = 0; e < qn.length; e += 1) {
      const t = qn[e];
      lr.has(t) || (lr.add(t), t());
    }
    qn.length = 0;
  } while (Fn.length);
  for (; br.length; )
    br.pop()();
  Ir = !1, lr.clear(), li(n);
}
function fo(n) {
  if (n.fragment !== null) {
    n.update(), Je(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(vr);
  }
}
function ho(n) {
  const e = [], t = [];
  qn.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), qn = e;
}
const Ai = /* @__PURE__ */ new Set();
let An;
function Ne() {
  An = {
    r: 0,
    c: [],
    p: An
    // parent group
  };
}
function Ue() {
  An.r || Je(An.c), An = An.p;
}
function C(n, e) {
  n && n.i && (Ai.delete(n), n.i(e));
}
function S(n, e, t, i) {
  if (n && n.o) {
    if (Ai.has(n))
      return;
    Ai.add(n), An.c.push(() => {
      Ai.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else
    i && i();
}
function kt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function fi(n, e) {
  S(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function di(n, e, t, i, r, l, a, s, o, u, c, f) {
  let d = n.length, h = l.length, m = d;
  const _ = {};
  for (; m--; )
    _[n[m].key] = m;
  const p = [], v = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), E = [];
  for (m = h; m--; ) {
    const g = f(r, l, m), R = t(g);
    let F = a.get(R);
    F ? E.push(() => F.p(g, e)) : (F = u(R, g), F.c()), v.set(R, p[m] = F), R in _ && b.set(R, Math.abs(m - _[R]));
  }
  const y = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
  function k(g) {
    C(g, 1), g.m(s, c), a.set(g.key, g), c = g.first, h--;
  }
  for (; d && h; ) {
    const g = p[h - 1], R = n[d - 1], F = g.key, A = R.key;
    g === R ? (c = g.first, d--, h--) : v.has(A) ? !a.has(F) || y.has(F) ? k(g) : T.has(A) ? d-- : b.get(F) > b.get(A) ? (T.add(F), k(g)) : (y.add(A), d--) : (o(R, a), d--);
  }
  for (; d--; ) {
    const g = n[d];
    v.has(g.key) || o(g, a);
  }
  for (; h; )
    k(p[h - 1]);
  return Je(E), p;
}
function fe(n, e) {
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
function Ce(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function It(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function te(n) {
  n && n.c();
}
function x(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), vr(() => {
    const l = n.$$.on_mount.map(la).filter(me);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Je(l), n.$$.on_mount = [];
  }), r.forEach(vr);
}
function $(n, e) {
  const t = n.$$;
  t.fragment !== null && (ho(t.after_update), Je(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function mo(n, e) {
  n.$$.dirty[0] === -1 && (Fn.push(n), fa(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ye(n, e, t, i, r, l, a = null, s = [-1]) {
  const o = si;
  li(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Qe,
    not_equal: r,
    bound: zr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: zr(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return u.ctx && r(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && mo(n, f)), d;
  }) : [], u.update(), c = !0, Je(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = oo(e.target);
      u.fragment && u.fragment.l(f), f.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), x(n, e.target, e.anchor), da();
  }
  li(o);
}
class Ee {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    rr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    rr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $(this, 1), this.$destroy = Qe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!me(t))
      return Qe;
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
    this.$$set && !io(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const po = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(po);
const ha = "archive-explorer", ma = "0.0.1";
var Ar = function(n, e) {
  return Ar = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, Ar(n, e);
};
function st(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ar(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ke = function() {
  return Ke = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, Ke.apply(this, arguments);
};
function Fr(n, e, t, i) {
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
function Nr(n, e) {
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
function yt(n) {
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
function dn(n, e) {
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
function En(n, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, r = e.length, l; i < r; i++)
      (l || !(i in e)) && (l || (l = Array.prototype.slice.call(e, 0, i)), l[i] = e[i]);
  return n.concat(l || Array.prototype.slice.call(e));
}
function Gn(n) {
  return this instanceof Gn ? (this.v = n, this) : new Gn(n);
}
function go(n, e, t) {
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
      return new Promise(function(p, v) {
        l.push([h, _, p, v]) > 1 || o(h, _);
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
    h.value instanceof Gn ? Promise.resolve(h.value.v).then(c, f) : d(l[0][2], h);
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
function _o(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator], t;
  return e ? e.call(n) : (n = typeof yt == "function" ? yt(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
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
function bo(n, e = {}) {
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
function ge(n, e, t, i = { bubbles: !0 }, r = !1) {
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
function Zt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r], a = l.indexOf("$");
    a !== -1 && e.indexOf(l.substring(0, a + 1)) !== -1 || e.indexOf(l) === -1 && (i[l] = n[l]);
  }
  return i;
}
const Yr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Io = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function nt(n) {
  let e, t = [];
  n.$on = (r, l) => {
    let a = r, s = () => {
    };
    return e ? s = e(a, l) : t.push([a, l]), a.match(Yr) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
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
      const d = u.match(Yr), h = u.match(Io), m = d || h;
      if (u.match(/^SMUI:\w+:/)) {
        const v = u.split(":");
        let b = "";
        for (let E = 0; E < v.length; E++)
          b += E === v.length - 1 ? ":" + v[E] : v[E].split("-").map((y) => y.slice(0, 1).toUpperCase() + y.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${b.split("$")[0]}.`), u = b;
      }
      if (m) {
        const v = u.split(d ? ":" : "$");
        u = v[0];
        const b = v.slice(1).reduce((E, y) => (E[y] = !0, E), {});
        b.passive && (f = f || {}, f.passive = !0), b.nonpassive && (f = f || {}, f.passive = !1), b.capture && (f = f || {}, f.capture = !0), b.once && (f = f || {}, f.once = !0), b.preventDefault && (c = vo(c)), b.stopPropagation && (c = Ao(c)), b.stopImmediatePropagation && (c = Co(c)), b.self && (c = yo(r, c)), b.trusted && (c = Eo(c));
      }
      const _ = Zr(r, u, c, f), p = () => {
        _();
        const v = l.indexOf(p);
        v > -1 && l.splice(v, 1);
      };
      return l.push(p), u in a || (a[u] = Zr(r, u, i)), p;
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
function Zr(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function vo(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Ao(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Co(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function yo(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Eo(n) {
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
var gi;
function pa(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = gi;
  if (typeof gi == "boolean" && !e)
    return gi;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var l = t.supports("--css-vars", "yes"), a = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = l || a, e || (gi = i), i;
}
function So(n, e, t) {
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
var Li = (
  /** @class */
  function() {
    function n(e, t) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, En([], dn(i))), this.foundation = t === void 0 ? this.getDefaultFoundation() : t, this.foundation.init(), this.initialSyncWithDOM();
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
function ii(n) {
  return n === void 0 && (n = window), To(n) ? { passive: !0 } : !1;
}
function To(n) {
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
const ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ii
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
function Lo(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Ur(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ur(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Oo(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
const Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Lo,
  estimateScrollWidth: Oo,
  matches: Ur
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
var Ro = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ko = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Qr = {
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
var Jr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], xr = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], _i = [], Ri = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
        return Ro;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ko;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Qr;
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
          for (var l = yt(Jr), a = l.next(); !a.done; a = l.next()) {
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
          for (var l = yt(xr), a = l.next(); !a.done; a = l.next()) {
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
        for (var r = yt(Jr), l = r.next(); !l.done; l = r.next()) {
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
        for (var r = yt(xr), l = r.next(); !l.done; l = r.next()) {
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
            var s = t !== void 0 && _i.length > 0 && _i.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (_i.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              _i = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
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
      r ? l = So(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
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
      }, Qr.FG_DEACTIVATION_MS));
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
        var r = Ke({}, i);
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
var yi = (
  /** @class */
  function(n) {
    st(e, n);
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
          return pa(window);
        },
        computeBoundingRect: function() {
          return t.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return t.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, ii());
        },
        deregisterInteractionHandler: function(i, r) {
          return t.root.removeEventListener(i, r, ii());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return Ur(t.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!t.disabled;
        },
        isUnbounded: function() {
          return !!t.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, ii());
        },
        registerInteractionHandler: function(i, r) {
          return t.root.addEventListener(i, r, ii());
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
      return new Ri(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in t.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(Li)
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
}, Dt = /* @__PURE__ */ new Set();
Dt.add(He.BACKSPACE);
Dt.add(He.ENTER);
Dt.add(He.SPACEBAR);
Dt.add(He.PAGE_UP);
Dt.add(He.PAGE_DOWN);
Dt.add(He.END);
Dt.add(He.HOME);
Dt.add(He.ARROW_LEFT);
Dt.add(He.ARROW_UP);
Dt.add(He.ARROW_RIGHT);
Dt.add(He.ARROW_DOWN);
Dt.add(He.DELETE);
Dt.add(He.ESCAPE);
Dt.add(He.TAB);
var Ut = {
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
}, Mt = /* @__PURE__ */ new Map();
Mt.set(Ut.BACKSPACE, He.BACKSPACE);
Mt.set(Ut.ENTER, He.ENTER);
Mt.set(Ut.SPACEBAR, He.SPACEBAR);
Mt.set(Ut.PAGE_UP, He.PAGE_UP);
Mt.set(Ut.PAGE_DOWN, He.PAGE_DOWN);
Mt.set(Ut.END, He.END);
Mt.set(Ut.HOME, He.HOME);
Mt.set(Ut.ARROW_LEFT, He.ARROW_LEFT);
Mt.set(Ut.ARROW_UP, He.ARROW_UP);
Mt.set(Ut.ARROW_RIGHT, He.ARROW_RIGHT);
Mt.set(Ut.ARROW_DOWN, He.ARROW_DOWN);
Mt.set(Ut.DELETE, He.DELETE);
Mt.set(Ut.ESCAPE, He.ESCAPE);
Mt.set(Ut.TAB, He.TAB);
var ln = /* @__PURE__ */ new Set();
ln.add(He.PAGE_UP);
ln.add(He.PAGE_DOWN);
ln.add(He.END);
ln.add(He.HOME);
ln.add(He.ARROW_LEFT);
ln.add(He.ARROW_UP);
ln.add(He.ARROW_RIGHT);
ln.add(He.ARROW_DOWN);
function ht(n) {
  var e = n.key;
  if (Dt.has(e))
    return e;
  var t = Mt.get(n.keyCode);
  return t || He.UNKNOWN;
}
function Do(n) {
  return ln.has(ht(n));
}
const { applyPassive: bi } = ga, { matches: Mo } = Oi;
function Ot(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: l, active: a, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (m) => n.classList.add(m), removeClass: f = (m) => n.classList.remove(m), addStyle: d = (m, _) => n.style.setProperty(m, _), initPromise: h = Promise.resolve() } = {}) {
  let m, _ = Ge("SMUI:addLayoutListener"), p, v = a, b = o, E = u;
  function y() {
    t ? (c("mdc-ripple-surface"), l === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : l === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), m && v !== a && (v = a, a ? m.activate() : a === !1 && m.deactivate()), e && !m ? (m = new Ri({
      addClass: c,
      browserSupportsCssVars: () => pa(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (k) => n.contains(k),
      deregisterDocumentInteractionHandler: (k, g) => document.documentElement.removeEventListener(k, g, bi()),
      deregisterInteractionHandler: (k, g) => (o || n).removeEventListener(k, g, bi()),
      deregisterResizeHandler: (k) => window.removeEventListener("resize", k),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? Mo(u || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (k, g) => document.documentElement.addEventListener(k, g, bi()),
      registerInteractionHandler: (k, g) => (o || n).addEventListener(k, g, bi()),
      registerResizeHandler: (k) => window.addEventListener("resize", k),
      removeClass: f,
      updateCssVariable: d
    }), h.then(() => {
      m && (m.init(), m.setUnbounded(i));
    })) : m && !e && h.then(() => {
      m && (m.destroy(), m = void 0);
    }), m && (b !== o || E !== u) && (b = o, E = u, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  y(), _ && (p = _(T));
  function T() {
    m && m.layout();
  }
  return {
    update(k) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (g) => n.classList.add(g), removeClass: (g) => n.classList.remove(g), addStyle: (g, R) => n.style.setProperty(g, R), initPromise: Promise.resolve() }, k)), y();
    },
    destroy() {
      m && (m.destroy(), m = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Fo(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i, r = (
    /*tag*/
    n[1] && sr(n)
  );
  return {
    c() {
      r && r.c(), t = We();
    },
    m(l, a) {
      r && r.m(l, a), V(l, t, a), i = !0;
    },
    p(l, a) {
      /*tag*/
      l[1] ? e ? _e(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = sr(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : r.p(l, a) : (r = sr(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      i || (C(r, l), i = !0);
    },
    o(l) {
      S(r, l), i = !1;
    },
    d(l) {
      l && B(t), r && r.d(l);
    }
  };
}
function No(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i = (
    /*tag*/
    n[1] && ar(n)
  );
  return {
    c() {
      i && i.c(), t = We();
    },
    m(r, l) {
      i && i.m(r, l), V(r, t, l);
    },
    p(r, l) {
      /*tag*/
      r[1] ? e ? _e(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = ar(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, l) : (i = ar(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: Qe,
    o: Qe,
    d(r) {
      r && B(t), i && i.d(r);
    }
  };
}
function Uo(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = Te(
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
    u = z(u, o[c]);
  return {
    c() {
      e = lt("svg"), s && s.c(), Xr(e, u);
    },
    m(c, f) {
      V(c, e, f), s && s.m(e, null), n[9](e), i = !0, r || (l = [
        ce(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      s && s.p && (!i || f & /*$$scope*/
      128) && Oe(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Le(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Re(
          /*$$scope*/
          c[7]
        ),
        null
      ), Xr(e, u = fe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (C(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), n[9](null), r = !1, Je(l);
    }
  };
}
function sr(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = Te(
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
    u = z(u, o[c]);
  return {
    c() {
      e = ne(
        /*tag*/
        n[1]
      ), s && s.c(), Ci(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      V(c, e, f), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        ce(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      s && s.p && (!i || f & /*$$scope*/
      128) && Oe(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Le(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Re(
          /*$$scope*/
          c[7]
        ),
        null
      ), Ci(
        /*tag*/
        c[1]
      )(e, u = fe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (C(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), n[11](null), r = !1, Je(l);
    }
  };
}
function ar(n) {
  let e, t, i, r, l = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let s = 0; s < l.length; s += 1)
    a = z(a, l[s]);
  return {
    c() {
      e = ne(
        /*tag*/
        n[1]
      ), Ci(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(s, o) {
      V(s, e, o), n[10](e), i || (r = [
        ce(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(s, o) {
      Ci(
        /*tag*/
        s[1]
      )(e, a = fe(l, [o & /*$$restProps*/
      32 && /*$$restProps*/
      s[5]])), t && me(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    d(s) {
      s && B(e), n[10](null), i = !1, Je(r);
    }
  };
}
function wo(n) {
  let e, t, i, r;
  const l = [Uo, No, Fo], a = [];
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
      t.c(), i = We();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ne(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), Ue(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Po(n, e, t) {
  let i;
  const r = ["use", "tag", "getElement"];
  let l = he(e, r), { $$slots: a = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
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
    e = z(z({}, e), tt(p)), t(5, l = he(e, r)), "use" in p && t(0, o = p.use), "tag" in p && t(1, u = p.tag), "$$scope" in p && t(7, s = p.$$scope);
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
class Nt extends Ee {
  constructor(e) {
    super(), ye(this, e, Po, wo, _e, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const kn = [];
function At(n, e = Qe) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function r(s) {
    if (_e(n, s) && (n = s, t)) {
      const o = !kn.length;
      for (const u of i)
        u[1](), kn.push(u, n);
      if (o) {
        for (let u = 0; u < kn.length; u += 2)
          kn[u][0](kn[u + 1]);
        kn.length = 0;
      }
    }
  }
  function l(s) {
    r(s(n));
  }
  function a(s, o = Qe) {
    const u = [s, o];
    return i.add(u), i.size === 1 && (t = e(r, l) || Qe), s(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: l, subscribe: a };
}
function Ho(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = Te(
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
      8) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[3],
        e ? Le(
          t,
          /*$$scope*/
          r[3],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Bo(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { key: a } = e, { value: s } = e;
  const o = At(s);
  return rt(n, o, (u) => t(5, i = u)), qe(a, o), Qt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, a = u.key), "value" in u && t(2, s = u.value), "$$scope" in u && t(3, l = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Bt(o, i = s, i);
  }, [o, a, s, l, r];
}
class Zn extends Ee {
  constructor(e) {
    super(), ye(this, e, Bo, Ho, _e, { key: 1, value: 2 });
  }
}
function Vo(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), i = Te(
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
      4096) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? Le(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function jo(n) {
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
      $$slots: { default: [Vo] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = z(u, fe(r, [
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
      64 && Ce(
        /*context*/
        s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        s[7]
      ) },
      o & /*$$restProps*/
      256 && Ce(
        /*$$restProps*/
        s[8]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[11](e)), {
    c() {
      e && te(e.$$.fragment), t = We();
    },
    m(s, o) {
      e && x(e, s, o), V(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Ne();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Ue();
        }
        l ? (e = Rt(l, a(s, o)), s[11](e), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? fe(r, [
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
          64 && Ce(
            /*context*/
            s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            s[7]
          ) },
          o & /*$$restProps*/
          256 && Ce(
            /*$$restProps*/
            s[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && C(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[11](null), e && $(e, s);
    }
  };
}
function qo(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: f = Nt } = e, { tag: d = f === Nt ? "span" : void 0 } = e;
  const h = Ge("SMUI:label:context"), m = Ge("SMUI:label:tabindex");
  function _() {
    return c.getElement();
  }
  function p(v) {
    se[v ? "unshift" : "push"](() => {
      c = v, t(4, c);
    });
  }
  return n.$$set = (v) => {
    e = z(z({}, e), tt(v)), t(8, r = he(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "component" in v && t(2, f = v.component), "tag" in v && t(3, d = v.tag), "$$scope" in v && t(12, a = v.$$scope);
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
class Go extends Ee {
  constructor(e) {
    super(), ye(this, e, qo, jo, _e, {
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
function $r(n) {
  let e;
  return {
    c() {
      e = ne("div"), w(e, "class", "mdc-button__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Ko(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[28].default
  ), a = Te(
    l,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let s = (
    /*touch*/
    n[6] && $r()
  );
  return {
    c() {
      e = ne("div"), t = oe(), a && a.c(), s && s.c(), i = We(), w(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      V(o, e, u), V(o, t, u), a && a.m(o, u), s && s.m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && Oe(
        a,
        l,
        o,
        /*$$scope*/
        o[30],
        r ? Le(
          l,
          /*$$scope*/
          o[30],
          u,
          null
        ) : Re(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? s || (s = $r(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (C(a, o), r = !0);
    },
    o(o) {
      S(a, o), r = !1;
    },
    d(o) {
      o && (B(e), B(t), B(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Wo(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          Ot,
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
      ).map(or).concat([
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
      $$slots: { default: [Ko] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = z(u, fe(r, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        s[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            Ot,
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
        ).map(or).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Ce(
        /*actionProp*/
        s[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Ce(
        /*defaultProp*/
        s[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Ce(
        /*secondaryProp*/
        s[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        s[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Ce(
        /*$$restProps*/
        s[23]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && te(e.$$.fragment), t = We();
    },
    m(s, o) {
      e && x(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      512 && l !== (l = /*component*/
      s[9])) {
        if (e) {
          Ne();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Ue();
        }
        l ? (e = Rt(l, a(s, o)), s[29](e), e.$on(
          "click",
          /*handleClick*/
          s[22]
        ), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? fe(r, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            s[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                Ot,
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
            ).map(or).concat([
              /*style*/
              s[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Ce(
            /*actionProp*/
            s[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Ce(
            /*defaultProp*/
            s[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Ce(
            /*secondaryProp*/
            s[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            s[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Ce(
            /*$$restProps*/
            s[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && C(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[29](null), e && $(e, s);
    }
  };
}
const or = ([n, e]) => `${n}: ${e};`;
function zo(n, e, t) {
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
  let s = he(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = nt(et());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = "primary" } = e, { variant: p = "text" } = e, { touch: v = !1 } = e, { href: b = void 0 } = e, { action: E = "close" } = e, { defaultAction: y = !1 } = e, { secondary: T = !1 } = e, k, g = {}, R = {}, F = Ge("SMUI:button:context"), { component: A = Nt } = e, { tag: I = A === Nt ? b == null ? "button" : "a" : void 0 } = e, M = s.disabled;
  qe("SMUI:label:context", "button"), qe("SMUI:icon:context", "button");
  function O(L) {
    g[L] || t(12, g[L] = !0, g);
  }
  function U(L) {
    (!(L in g) || g[L]) && t(12, g[L] = !1, g);
  }
  function W(L, Z) {
    R[L] != Z && (Z === "" || Z == null ? (delete R[L], t(13, R)) : t(13, R[L] = Z, R));
  }
  function N() {
    F === "banner" && ge(j(), T ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function j() {
    return k.getElement();
  }
  function D(L) {
    se[L ? "unshift" : "push"](() => {
      k = L, t(11, k);
    });
  }
  return n.$$set = (L) => {
    t(31, e = z(z({}, e), tt(L))), t(23, s = he(e, a)), "use" in L && t(0, f = L.use), "class" in L && t(1, d = L.class), "style" in L && t(2, h = L.style), "ripple" in L && t(3, m = L.ripple), "color" in L && t(4, _ = L.color), "variant" in L && t(5, p = L.variant), "touch" in L && t(6, v = L.touch), "href" in L && t(7, b = L.href), "action" in L && t(24, E = L.action), "defaultAction" in L && t(25, y = L.defaultAction), "secondary" in L && t(8, T = L.secondary), "component" in L && t(9, A = L.component), "tag" in L && t(10, I = L.tag), "$$scope" in L && t(30, u = L.$$scope);
  }, n.$$.update = () => {
    if (t(16, i = F === "dialog:action" && E != null ? { "data-mdc-dialog-action": E } : { action: e.action }), t(15, r = F === "dialog:action" && y ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, l = F === "banner" ? {} : { secondary: e.secondary }), M !== s.disabled) {
      if (k) {
        const L = j();
        "blur" in L && L.blur();
      }
      t(27, M = s.disabled);
    }
  }, e = tt(e), [
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    T,
    A,
    I,
    k,
    g,
    R,
    l,
    r,
    i,
    c,
    F,
    O,
    U,
    W,
    N,
    s,
    E,
    y,
    j,
    M,
    o,
    D,
    u
  ];
}
class Xo extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      zo,
      Wo,
      _e,
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
function Yo(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = Te(
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
      32) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[5],
        e ? Le(
          t,
          /*$$scope*/
          r[5],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[5]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Zo(n) {
  let e, t;
  return e = new Xo({
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
      $$slots: { default: [Yo] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      n[0]()
    ) && n[0]().apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Qo(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: l = () => {
  } } = e, { disabled: a = !1 } = e, { variant: s = "default" } = e, { isAbortAction: o = !1 } = e;
  return n.$$set = (u) => {
    "callback" in u && t(0, l = u.callback), "disabled" in u && t(1, a = u.disabled), "variant" in u && t(2, s = u.variant), "isAbortAction" in u && t(3, o = u.isAbortAction), "$$scope" in u && t(5, r = u.$$scope);
  }, [l, a, s, o, i, r];
}
class wr extends Ee {
  constructor(e) {
    super(), ye(this, e, Qo, Zo, _e, {
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
var Ii = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, xt = {
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
var Jo = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ii;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xt;
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
      var t = this.adapter.getAttr(xt.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(xt.DATA_ARIA_LABEL_OFF);
      if (t && i) {
        if (this.adapter.getAttr(xt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(xt.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ii.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(Ii.ICON_BUTTON_ON) : this.adapter.removeClass(Ii.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = t ? this.adapter.getAttr(xt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(xt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(xt.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(xt.ARIA_PRESSED, "" + t);
    }, e;
  }(Et)
);
function el(n) {
  let e;
  return {
    c() {
      e = ne("div"), w(e, "class", "mdc-icon-button__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function xo(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[33].default
  ), a = Te(
    l,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let s = (
    /*touch*/
    n[8] && el()
  );
  return {
    c() {
      e = ne("div"), t = oe(), a && a.c(), s && s.c(), i = We(), w(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      V(o, e, u), V(o, t, u), a && a.m(o, u), s && s.m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && Oe(
        a,
        l,
        o,
        /*$$scope*/
        o[37],
        r ? Le(
          l,
          /*$$scope*/
          o[37],
          u,
          null
        ) : Re(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? s || (s = el(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (C(a, o), r = !0);
    },
    o(o) {
      S(a, o), r = !1;
    },
    d(o) {
      o && (B(e), B(t), B(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function $o(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          Ot,
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
      ).map(ur).concat([
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
      $$slots: { default: [xo] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = z(u, fe(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        s[14]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            Ot,
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
        ).map(ur).concat([
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
      2097152 && Ce(
        /*actionProp*/
        s[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && Ce(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Ce(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && te(e.$$.fragment), t = We();
    },
    m(s, o) {
      e && x(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Ne();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Ue();
        }
        l ? (e = Rt(l, a(s, o)), s[34](e), e.$on(
          "click",
          /*click_handler*/
          s[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          s[36]
        ), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? fe(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            s[14]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                Ot,
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
            ).map(ur).concat([
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
          2097152 && Ce(
            /*actionProp*/
            s[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && Ce(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Ce(
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
      i || (e && C(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[34](null), e && $(e, s);
    }
  };
}
const ur = ([n, e]) => `${n}: ${e};`;
function eu(n, e, t) {
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
  let l = he(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = nt(et());
  let u = () => {
  };
  function c(K) {
    return K === u;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = void 0 } = e, { toggle: p = !1 } = e, { pressed: v = u } = e, { ariaLabelOn: b = void 0 } = e, { ariaLabelOff: E = void 0 } = e, { touch: y = !1 } = e, { displayFlex: T = !0 } = e, { size: k = "normal" } = e, { href: g = void 0 } = e, { action: R = void 0 } = e, F, A, I = {}, M = {}, O = {}, U = Ge("SMUI:icon-button:context"), W = Ge("SMUI:icon-button:aria-describedby"), { component: N = Nt } = e, { tag: j = N === Nt ? g == null ? "button" : "a" : void 0 } = e, D = l.disabled;
  qe("SMUI:icon:context", "icon-button");
  let L = null;
  Qt(() => {
    A && A.destroy();
  });
  function Z(K) {
    return K in I ? I[K] : ke().classList.contains(K);
  }
  function Fe(K) {
    I[K] || t(18, I[K] = !0, I);
  }
  function Me(K) {
    (!(K in I) || I[K]) && t(18, I[K] = !1, I);
  }
  function be(K, Ye) {
    M[K] != Ye && (Ye === "" || Ye == null ? (delete M[K], t(19, M)) : t(19, M[K] = Ye, M));
  }
  function Xe(K) {
    var Ye;
    return K in O ? (Ye = O[K]) !== null && Ye !== void 0 ? Ye : null : ke().getAttribute(K);
  }
  function G(K, Ye) {
    O[K] !== Ye && t(20, O[K] = Ye, O);
  }
  function Q(K) {
    t(0, v = K.isOn);
  }
  function ke() {
    return F.getElement();
  }
  function De(K) {
    se[K ? "unshift" : "push"](() => {
      F = K, t(16, F);
    });
  }
  const we = () => A && A.handleClick(), ie = () => U === "top-app-bar:navigation" && ge(ke(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (K) => {
    e = z(z({}, e), tt(K)), t(29, l = he(e, r)), "use" in K && t(1, f = K.use), "class" in K && t(2, d = K.class), "style" in K && t(3, h = K.style), "ripple" in K && t(4, m = K.ripple), "color" in K && t(5, _ = K.color), "toggle" in K && t(30, p = K.toggle), "pressed" in K && t(0, v = K.pressed), "ariaLabelOn" in K && t(6, b = K.ariaLabelOn), "ariaLabelOff" in K && t(7, E = K.ariaLabelOff), "touch" in K && t(8, y = K.touch), "displayFlex" in K && t(9, T = K.displayFlex), "size" in K && t(10, k = K.size), "href" in K && t(11, g = K.href), "action" in K && t(12, R = K.action), "component" in K && t(13, N = K.component), "tag" in K && t(14, j = K.tag), "$$scope" in K && t(37, s = K.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, i = (() => {
      if (U === "data-table:pagination")
        switch (R) {
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
        return U === "dialog:header" || U === "dialog:sheet" ? { "data-mdc-dialog-action": R } : { action: R };
    })()), D !== l.disabled) {
      if (F) {
        const K = ke();
        "blur" in K && K.blur();
      }
      t(31, D = l.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && F && ke() && p !== L && (p && !A ? (t(17, A = new Jo({
      addClass: Fe,
      hasClass: Z,
      notifyChange: (K) => {
        Q(K), ge(ke(), "SMUIIconButtonToggle:change", K, void 0, !0);
      },
      removeClass: Me,
      getAttr: Xe,
      setAttr: G
    })), A.init()) : !p && A && (A.destroy(), t(17, A = void 0), t(18, I = {}), t(20, O = {})), t(32, L = p)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && A && !c(v) && A.isOn() !== v && A.toggle(v);
  }, [
    v,
    f,
    d,
    h,
    m,
    _,
    b,
    E,
    y,
    T,
    k,
    g,
    R,
    N,
    j,
    ke,
    F,
    A,
    I,
    M,
    O,
    i,
    o,
    c,
    U,
    W,
    Fe,
    Me,
    be,
    l,
    p,
    D,
    L,
    a,
    De,
    we,
    ie,
    s
  ];
}
class tu extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      eu,
      $o,
      _e,
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
function nu(n) {
  let e;
  return {
    c() {
      e = ct(
        /*icon*/
        n[1]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      2 && Ct(
        e,
        /*icon*/
        t[1]
      );
    },
    i: Qe,
    o: Qe,
    d(t) {
      t && B(e);
    }
  };
}
function iu(n) {
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
  return r && (e = Rt(r, l(n))), {
    c() {
      e && te(e.$$.fragment), t = We();
    },
    m(a, s) {
      e && x(e, a, s), V(a, t, s), i = !0;
    },
    p(a, s) {
      if (s & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Ne();
          const o = e;
          S(o.$$.fragment, 1, 0, () => {
            $(o, 1);
          }), Ue();
        }
        r ? (e = Rt(r, l(a)), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const o = {};
        s & /*iconStyles*/
        8 && (o.svgStyles = /*iconStyles*/
        a[3]), e.$set(o);
      }
    },
    i(a) {
      i || (e && C(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && S(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && B(t), e && $(e, a);
    }
  };
}
function ru(n) {
  let e, t, i, r;
  const l = [iu, nu], a = [];
  function s(o, u) {
    return (
      /*iconComponent*/
      o[2] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = We();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ne(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), Ue(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function lu(n) {
  let e, t;
  return e = new tu({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        n[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [ru] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      n[0]
    ) && n[0].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function su(n, e, t) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: l = null } = e, { iconStyles: a = "" } = e, { disabled: s = !1 } = e;
  return n.$$set = (o) => {
    "callback" in o && t(0, i = o.callback), "icon" in o && t(1, r = o.icon), "iconComponent" in o && t(2, l = o.iconComponent), "iconStyles" in o && t(3, a = o.iconStyles), "disabled" in o && t(4, s = o.disabled);
  }, [i, r, l, a, s];
}
class au extends Ee {
  constructor(e) {
    super(), ye(this, e, su, lu, _e, {
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
var ou = {
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
var uu = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ou;
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
var _n = {
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
var cu = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _n;
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
      this.adapter.removeClass(_n.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(_n.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(_n.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(_n.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(_n.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(_n.LINE_RIPPLE_DEACTIVATING));
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
var fu = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, tl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, du = {
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
var hu = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      return n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return fu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return du;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return tl;
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
      t > 0 && (t += tl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
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
var cr = {
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
}, mu = {
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
}, nl = {
  LABEL_SCALE: 0.75
}, pu = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], gu = [
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
var il = ["mousedown", "touchstart"], rl = ["click", "keydown"], _u = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
        return mu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return nl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return gu.indexOf(t) >= 0;
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
        for (var a = yt(il), s = a.next(); !s.done; s = a.next()) {
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
        for (var u = yt(rl), c = u.next(); !c.done; c = u.next()) {
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
        for (var a = yt(il), s = a.next(); !s.done; s = a.next()) {
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
        for (var u = yt(rl), c = u.next(); !c.done; c = u.next()) {
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
        return pu.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * nl.LABEL_SCALE;
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
        l && a ? this.adapter.setInputAttr(cr.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(cr.ARIA_DESCRIBEDBY);
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
var ll = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, bu = {
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
var sl = ["click", "keydown"], Iu = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ll;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bu;
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
        for (var r = yt(sl), l = r.next(); !l.done; l = r.next()) {
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
        for (var r = yt(sl), l = r.next(); !l.done; l = r.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", ll.ICON_ROLE)));
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
function vu(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = Te(
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
      ).map(ol).concat([
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
    d = z(d, f[h]);
  return {
    c() {
      e = ne("label"), c && c.c(), ue(e, d);
    },
    m(h, m) {
      V(h, e, m), c && c.m(e, null), n[24](e), a = !0, s || (o = [
        ce(l = $e.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ce(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(h, m) {
      c && c.p && (!a || m & /*$$scope*/
      2097152) && Oe(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? Le(
          u,
          /*$$scope*/
          h[21],
          m,
          null
        ) : Re(
          /*$$scope*/
          h[21]
        ),
        null
      ), ue(e, d = fe(f, [
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
        ).map(ol).concat([
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
      ])), l && me(l.update) && m & /*use*/
      4 && l.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      a || (C(c, h), a = !0);
    },
    o(h) {
      S(c, h), a = !1;
    },
    d(h) {
      h && B(e), c && c.d(h), n[24](null), s = !1, Je(o);
    }
  };
}
function Au(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = Te(
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
      ).map(al).concat([
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
      e = ne("span"), u && u.c(), ue(e, f);
    },
    m(d, h) {
      V(d, e, h), u && u.m(e, null), n[23](e), l = !0, a || (s = [
        ce(r = $e.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ce(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(d, h) {
      u && u.p && (!l || h & /*$$scope*/
      2097152) && Oe(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        l ? Le(
          o,
          /*$$scope*/
          d[21],
          h,
          null
        ) : Re(
          /*$$scope*/
          d[21]
        ),
        null
      ), ue(e, f = fe(c, [
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
        ).map(al).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), r && me(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      l || (C(u, d), l = !0);
    },
    o(d) {
      S(u, d), l = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), n[23](null), a = !1, Je(s);
    }
  };
}
function Cu(n) {
  let e, t, i, r;
  const l = [Au, vu], a = [];
  function s(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = We();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ne(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), Ue(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
const al = ([n, e]) => `${n}: ${e};`, ol = ([n, e]) => `${n}: ${e};`;
function yu(n, e, t) {
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
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const o = nt(et());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: h = !1 } = e, { required: m = !1 } = e, { wrapped: _ = !1 } = e, p, v, b = {}, E = {}, y = (s = Ge("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, T = h, k = m;
  at(() => {
    t(18, v = new uu({
      addClass: g,
      removeClass: R,
      getWidth: () => {
        var L, Z;
        const Fe = W(), Me = Fe.cloneNode(!0);
        (L = Fe.parentNode) === null || L === void 0 || L.appendChild(Me), Me.classList.add("smui-floating-label--remove-transition"), Me.classList.add("smui-floating-label--force-size"), Me.classList.remove("mdc-floating-label--float-above");
        const be = Me.scrollWidth;
        return (Z = Fe.parentNode) === null || Z === void 0 || Z.removeChild(Me), be;
      },
      registerInteractionHandler: (L, Z) => W().addEventListener(L, Z),
      deregisterInteractionHandler: (L, Z) => W().removeEventListener(L, Z)
    }));
    const D = {
      get element() {
        return W();
      },
      addStyle: F,
      removeStyle: A
    };
    return ge(p, "SMUIFloatingLabel:mount", D), v.init(), () => {
      ge(p, "SMUIFloatingLabel:unmount", D), v.destroy();
    };
  });
  function g(D) {
    b[D] || t(8, b[D] = !0, b);
  }
  function R(D) {
    (!(D in b) || b[D]) && t(8, b[D] = !1, b);
  }
  function F(D, L) {
    E[D] != L && (L === "" || L == null ? (delete E[D], t(9, E)) : t(9, E[D] = L, E));
  }
  function A(D) {
    D in E && (delete E[D], t(9, E));
  }
  function I(D) {
    v.shake(D);
  }
  function M(D) {
    t(0, h = D);
  }
  function O(D) {
    t(1, m = D);
  }
  function U() {
    return v.getWidth();
  }
  function W() {
    return p;
  }
  function N(D) {
    se[D ? "unshift" : "push"](() => {
      p = D, t(7, p);
    });
  }
  function j(D) {
    se[D ? "unshift" : "push"](() => {
      p = D, t(7, p);
    });
  }
  return n.$$set = (D) => {
    e = z(z({}, e), tt(D)), t(12, r = he(e, i)), "use" in D && t(2, u = D.use), "class" in D && t(3, c = D.class), "style" in D && t(4, f = D.style), "for" in D && t(5, d = D.for), "floatAbove" in D && t(0, h = D.floatAbove), "required" in D && t(1, m = D.required), "wrapped" in D && t(6, _ = D.wrapped), "$$scope" in D && t(21, a = D.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && v && T !== h && (t(19, T = h), v.float(h)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && v && k !== m && (t(20, k = m), v.setRequired(m));
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
    E,
    o,
    y,
    r,
    I,
    M,
    O,
    U,
    W,
    v,
    T,
    k,
    a,
    l,
    N,
    j
  ];
}
class ki extends Ee {
  constructor(e) {
    super(), ye(this, e, yu, Cu, _e, {
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
function Eu(n) {
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
      ).map(ul).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = z(o, s[u]);
  return {
    c() {
      e = ne("div"), ue(e, o);
    },
    m(u, c) {
      V(u, e, c), n[13](e), l || (a = [
        ce(r = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], l = !0);
    },
    p(u, [c]) {
      ue(e, o = fe(s, [
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
        ).map(ul).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && me(r.update) && c & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Qe,
    o: Qe,
    d(u) {
      u && B(e), n[13](null), l = !1, Je(a);
    }
  };
}
const ul = ([n, e]) => `${n}: ${e};`;
function Su(n, e, t) {
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
  let r = he(e, i);
  const l = nt(et());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, h = {};
  at(() => (f = new cu({
    addClass: _,
    removeClass: p,
    hasClass: m,
    setStyle: v,
    registerEventHandler: (g, R) => T().addEventListener(g, R),
    deregisterEventHandler: (g, R) => T().removeEventListener(g, R)
  }), f.init(), () => {
    f.destroy();
  }));
  function m(g) {
    return g in d ? d[g] : T().classList.contains(g);
  }
  function _(g) {
    d[g] || t(5, d[g] = !0, d);
  }
  function p(g) {
    (!(g in d) || d[g]) && t(5, d[g] = !1, d);
  }
  function v(g, R) {
    h[g] != R && (R === "" || R == null ? (delete h[g], t(6, h)) : t(6, h[g] = R, h));
  }
  function b() {
    f.activate();
  }
  function E() {
    f.deactivate();
  }
  function y(g) {
    f.setRippleCenter(g);
  }
  function T() {
    return c;
  }
  function k(g) {
    se[g ? "unshift" : "push"](() => {
      c = g, t(4, c);
    });
  }
  return n.$$set = (g) => {
    e = z(z({}, e), tt(g)), t(8, r = he(e, i)), "use" in g && t(0, a = g.use), "class" in g && t(1, s = g.class), "style" in g && t(2, o = g.style), "active" in g && t(3, u = g.active);
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
    E,
    y,
    T,
    k
  ];
}
class _a extends Ee {
  constructor(e) {
    super(), ye(this, e, Su, Eu, _e, {
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
function cl(n) {
  let e, t, i;
  const r = (
    /*#slots*/
    n[15].default
  ), l = Te(
    r,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = ne("div"), l && l.c(), w(e, "class", "mdc-notched-outline__notch"), w(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(fl).join(" "));
    },
    m(a, s) {
      V(a, e, s), l && l.m(e, null), i = !0;
    },
    p(a, s) {
      l && l.p && (!i || s & /*$$scope*/
      16384) && Oe(
        l,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? Le(
          r,
          /*$$scope*/
          a[14],
          s,
          null
        ) : Re(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || s & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(fl).join(" "))) && w(e, "style", t);
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(e), l && l.d(a);
    }
  };
}
function Tu(n) {
  let e, t, i, r, l, a, s, o, u, c, f = !/*noLabel*/
  n[3] && cl(n), d = [
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
    h = z(h, d[m]);
  return {
    c() {
      e = ne("div"), t = ne("div"), i = oe(), f && f.c(), r = oe(), l = ne("div"), w(t, "class", "mdc-notched-outline__leading"), w(l, "class", "mdc-notched-outline__trailing"), ue(e, h);
    },
    m(m, _) {
      V(m, e, _), J(e, t), J(e, i), f && f.m(e, null), J(e, r), J(e, l), n[16](e), o = !0, u || (c = [
        ce(s = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        de(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        de(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(m, [_]) {
      /*noLabel*/
      m[3] ? f && (Ne(), S(f, 1, 1, () => {
        f = null;
      }), Ue()) : f ? (f.p(m, _), _ & /*noLabel*/
      8 && C(f, 1)) : (f = cl(m), f.c(), C(f, 1), f.m(e, r)), ue(e, h = fe(d, [
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
      ])), s && me(s.update) && _ & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (C(f), o = !0);
    },
    o(m) {
      S(f), o = !1;
    },
    d(m) {
      m && B(e), f && f.d(), n[16](null), u = !1, Je(c);
    }
  };
}
const fl = ([n, e]) => `${n}: ${e};`;
function Lu(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, h, m, _ = {}, p = {};
  at(() => (h = new hu({
    addClass: b,
    removeClass: E,
    setNotchWidthProperty: (I) => y("width", I + "px"),
    removeNotchWidthProperty: () => T("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function v(I) {
    t(4, m = I.detail);
  }
  function b(I) {
    _[I] || t(6, _[I] = !0, _);
  }
  function E(I) {
    (!(I in _) || _[I]) && t(6, _[I] = !1, _);
  }
  function y(I, M) {
    p[I] != M && (M === "" || M == null ? (delete p[I], t(7, p)) : t(7, p[I] = M, p));
  }
  function T(I) {
    I in p && (delete p[I], t(7, p));
  }
  function k(I) {
    h.notch(I);
  }
  function g() {
    h.closeNotch();
  }
  function R() {
    return d;
  }
  function F(I) {
    se[I ? "unshift" : "push"](() => {
      d = I, t(5, d);
    });
  }
  const A = () => t(4, m = void 0);
  return n.$$set = (I) => {
    e = z(z({}, e), tt(I)), t(10, r = he(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "notched" in I && t(2, c = I.notched), "noLabel" in I && t(3, f = I.noLabel), "$$scope" in I && t(14, a = I.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (m ? (m.addStyle("transition-duration", "0s"), b("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      m && m.removeStyle("transition-duration");
    })) : E("mdc-notched-outline--upgraded"));
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
    v,
    r,
    k,
    g,
    R,
    a,
    l,
    F,
    A
  ];
}
class ba extends Ee {
  constructor(e) {
    super(), ye(this, e, Lu, Tu, _e, {
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
function Ou(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Te(
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
      8192) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? Le(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ru(n) {
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
      $$slots: { default: [Ou] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = z(u, fe(r, [
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
      128 && Ce(
        /*props*/
        s[7]
      ),
      o & /*$$restProps*/
      512 && Ce(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[12](e)), {
    c() {
      e && te(e.$$.fragment), t = We();
    },
    m(s, o) {
      e && x(e, s, o), V(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Ne();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Ue();
        }
        l ? (e = Rt(l, a(s, o)), s[12](e), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? fe(r, [
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
          128 && Ce(
            /*props*/
            s[7]
          ),
          o & /*$$restProps*/
          512 && Ce(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && C(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[12](null), e && $(e, s);
    }
  };
}
const nn = {
  component: Nt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function ku(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = nn.class, f = {}, d = [], h = nn.contexts, m = nn.props;
  let { component: _ = nn.component } = e, { tag: p = _ === Nt ? nn.tag : void 0 } = e;
  Object.entries(nn.classMap).forEach(([y, T]) => {
    const k = Ge(T);
    k && "subscribe" in k && d.push(k.subscribe((g) => {
      t(5, f[y] = g, f);
    }));
  });
  const v = nt(et());
  for (let y in h)
    h.hasOwnProperty(y) && qe(y, h[y]);
  Qt(() => {
    for (const y of d)
      y();
  });
  function b() {
    return u.getElement();
  }
  function E(y) {
    se[y ? "unshift" : "push"](() => {
      u = y, t(4, u);
    });
  }
  return n.$$set = (y) => {
    e = z(z({}, e), tt(y)), t(9, r = he(e, i)), "use" in y && t(0, s = y.use), "class" in y && t(1, o = y.class), "component" in y && t(2, _ = y.component), "tag" in y && t(3, p = y.tag), "$$scope" in y && t(13, a = y.$$scope);
  }, [
    s,
    o,
    _,
    p,
    u,
    f,
    c,
    m,
    v,
    r,
    b,
    l,
    E,
    a
  ];
}
class Du extends Ee {
  constructor(e) {
    super(), ye(this, e, ku, Ru, _e, {
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
const dl = Object.assign({}, nn);
function Tt(n) {
  return new Proxy(Du, {
    construct: function(e, t) {
      return Object.assign(nn, dl, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(nn, dl, n), e[t];
    }
  });
}
const Mu = Tt({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Fu = Tt({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Nu = Tt({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Uu(n) {
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
    s = z(s, a[o]);
  return {
    c() {
      e = ne("input"), ue(e, s);
    },
    m(o, u) {
      V(o, e, u), e.autofocus && e.focus(), n[26](e), r || (l = [
        ce(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        de(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        de(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        de(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        de(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], r = !0);
    },
    p(o, [u]) {
      ue(e, s = fe(a, [
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
      ])), i && me(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: Qe,
    o: Qe,
    d(o) {
      o && B(e), n[26](null), r = !1, Je(l);
    }
  };
}
function wu(n) {
  return n === "" ? Number.NaN : +n;
}
function Pu(n, e, t) {
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
  let r = he(e, i);
  const l = nt(et());
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = a } = e;
  const h = s(d);
  h && (d = "");
  let { files: m = null } = e, { dirty: _ = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: v = !0 } = e, { emptyValueNull: b = d === null } = e;
  h && b && (d = null);
  let { emptyValueUndefined: E = d === void 0 } = e;
  h && E && (d = void 0);
  let y, T = {}, k = {};
  at(() => {
    v && t(14, p = y.matches(":invalid"));
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
    if (L.currentTarget.value === "" && E) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = wu(L.currentTarget.value));
        break;
      default:
        t(11, d = L.currentTarget.value);
        break;
    }
  }
  function R(L) {
    (c === "file" || c === "range") && g(L), t(13, _ = !0), v && t(14, p = y.matches(":invalid"));
  }
  function F(L) {
    var Z;
    return L in T ? (Z = T[L]) !== null && Z !== void 0 ? Z : null : U().getAttribute(L);
  }
  function A(L, Z) {
    T[L] !== Z && t(6, T[L] = Z, T);
  }
  function I(L) {
    (!(L in T) || T[L] != null) && t(6, T[L] = void 0, T);
  }
  function M() {
    U().focus();
  }
  function O() {
    U().blur();
  }
  function U() {
    return y;
  }
  function W(L) {
    Yn.call(this, n, L);
  }
  function N(L) {
    Yn.call(this, n, L);
  }
  function j(L) {
    se[L ? "unshift" : "push"](() => {
      y = L, t(5, y);
    });
  }
  const D = (L) => c !== "file" && g(L);
  return n.$$set = (L) => {
    e = z(z({}, e), tt(L)), t(10, r = he(e, i)), "use" in L && t(0, o = L.use), "class" in L && t(1, u = L.class), "type" in L && t(2, c = L.type), "placeholder" in L && t(3, f = L.placeholder), "value" in L && t(11, d = L.value), "files" in L && t(12, m = L.files), "dirty" in L && t(13, _ = L.dirty), "invalid" in L && t(14, p = L.invalid), "updateInvalid" in L && t(15, v = L.updateInvalid), "emptyValueNull" in L && t(16, b = L.emptyValueNull), "emptyValueUndefined" in L && t(17, E = L.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete k.value, t(4, k), t(2, c), t(11, d)) : t(4, k.value = d ?? "", k));
  }, [
    o,
    u,
    c,
    f,
    k,
    y,
    T,
    l,
    g,
    R,
    r,
    d,
    m,
    _,
    p,
    v,
    b,
    E,
    F,
    A,
    I,
    M,
    O,
    U,
    W,
    N,
    j,
    D
  ];
}
class Hu extends Ee {
  constructor(e) {
    super(), ye(this, e, Pu, Uu, _e, {
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
function Bu(n) {
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
    o = z(o, s[u]);
  return {
    c() {
      e = ne("textarea"), ue(e, o);
    },
    m(u, c) {
      V(u, e, c), e.autofocus && e.focus(), n[21](e), fn(
        e,
        /*value*/
        n[0]
      ), l || (a = [
        ce(r = $e.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ce(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        de(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        de(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        de(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        de(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], l = !0);
    },
    p(u, [c]) {
      ue(e, o = fe(s, [
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
      ])), r && me(r.update) && c & /*use*/
      2 && r.update.call(
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
    i: Qe,
    o: Qe,
    d(u) {
      u && B(e), n[21](null), l = !1, Je(a);
    }
  };
}
function Vu(n, e, t) {
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
  let r = he(e, i);
  const l = nt(et());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: h = !0 } = e, m, _ = {};
  at(() => {
    d && t(11, f = m.matches(":invalid"));
  });
  function p() {
    t(10, c = !0), d && t(11, f = m.matches(":invalid"));
  }
  function v(I) {
    var M;
    return I in _ ? (M = _[I]) !== null && M !== void 0 ? M : null : k().getAttribute(I);
  }
  function b(I, M) {
    _[I] !== M && t(6, _[I] = M, _);
  }
  function E(I) {
    (!(I in _) || _[I] != null) && t(6, _[I] = void 0, _);
  }
  function y() {
    k().focus();
  }
  function T() {
    k().blur();
  }
  function k() {
    return m;
  }
  function g(I) {
    Yn.call(this, n, I);
  }
  function R(I) {
    Yn.call(this, n, I);
  }
  function F(I) {
    se[I ? "unshift" : "push"](() => {
      m = I, t(5, m);
    });
  }
  function A() {
    u = this.value, t(0, u);
  }
  return n.$$set = (I) => {
    e = z(z({}, e), tt(I)), t(9, r = he(e, i)), "use" in I && t(1, a = I.use), "class" in I && t(2, s = I.class), "style" in I && t(3, o = I.style), "value" in I && t(0, u = I.value), "dirty" in I && t(10, c = I.dirty), "invalid" in I && t(11, f = I.invalid), "updateInvalid" in I && t(12, d = I.updateInvalid), "resizable" in I && t(4, h = I.resizable);
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
    v,
    b,
    E,
    y,
    T,
    k,
    g,
    R,
    F,
    A
  ];
}
class ju extends Ee {
  constructor(e) {
    super(), ye(this, e, Vu, Bu, _e, {
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
const qu = (n) => ({}), hl = (n) => ({}), Gu = (n) => ({}), ml = (n) => ({}), Ku = (n) => ({}), pl = (n) => ({}), Wu = (n) => ({}), gl = (n) => ({}), zu = (n) => ({}), _l = (n) => ({}), Xu = (n) => ({}), bl = (n) => ({}), Yu = (n) => ({}), Il = (n) => ({}), Zu = (n) => ({}), vl = (n) => ({}), Qu = (n) => ({}), Al = (n) => ({}), Ju = (n) => ({}), Cl = (n) => ({}), xu = (n) => ({}), yl = (n) => ({}), $u = (n) => ({}), El = (n) => ({});
function ec(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m;
  const _ = (
    /*#slots*/
    n[56].label
  ), p = Te(
    _,
    n,
    /*$$scope*/
    n[87],
    _l
  );
  i = new Zn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [nc] },
      $$scope: { ctx: n }
    }
  });
  const v = (
    /*#slots*/
    n[56].default
  ), b = Te(
    v,
    n,
    /*$$scope*/
    n[87],
    null
  );
  a = new Zn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [ic] },
      $$scope: { ctx: n }
    }
  });
  const E = (
    /*#slots*/
    n[56].ripple
  ), y = Te(
    E,
    n,
    /*$$scope*/
    n[87],
    ml
  );
  let T = [
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
      ).map(Ul).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    Zt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], k = {};
  for (let g = 0; g < T.length; g += 1)
    k = z(k, T[g]);
  return {
    c() {
      e = ne("div"), p && p.c(), t = oe(), te(i.$$.fragment), r = oe(), b && b.c(), l = oe(), te(a.$$.fragment), s = oe(), y && y.c(), ue(e, k);
    },
    m(g, R) {
      V(g, e, R), p && p.m(e, null), J(e, t), x(i, e, null), J(e, r), b && b.m(e, null), J(e, l), x(a, e, null), J(e, s), y && y.m(e, null), n[82](e), d = !0, h || (m = [
        ce(c = Ot.call(null, e, {
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
        ce(f = $e.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ce(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        de(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        de(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        de(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        de(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], h = !0);
    },
    p(g, R) {
      p && p.p && (!d || R[2] & /*$$scope*/
      33554432) && Oe(
        p,
        _,
        g,
        /*$$scope*/
        g[87],
        d ? Le(
          _,
          /*$$scope*/
          g[87],
          R,
          zu
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        _l
      );
      const F = {};
      R[2] & /*$$scope*/
      33554432 && (F.$$scope = { dirty: R, ctx: g }), i.$set(F), b && b.p && (!d || R[2] & /*$$scope*/
      33554432) && Oe(
        b,
        v,
        g,
        /*$$scope*/
        g[87],
        d ? Le(
          v,
          /*$$scope*/
          g[87],
          R,
          null
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        null
      );
      const A = {};
      R[2] & /*$$scope*/
      33554432 && (A.$$scope = { dirty: R, ctx: g }), a.$set(A), y && y.p && (!d || R[2] & /*$$scope*/
      33554432) && Oe(
        y,
        E,
        g,
        /*$$scope*/
        g[87],
        d ? Le(
          E,
          /*$$scope*/
          g[87],
          R,
          Gu
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        ml
      ), ue(e, k = fe(T, [
        (!d || R[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | R[1] & /*$$slots*/
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
        (!d || R[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          g[26]
        ).map(Ul).concat([
          /*style*/
          g[10]
        ]).join(" "))) && { style: u },
        R[1] & /*$$restProps*/
        32768 && Zt(
          /*$$restProps*/
          g[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && me(c.update) && R[0] & /*ripple*/
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
      }), f && me(f.update) && R[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        g[8]
      );
    },
    i(g) {
      d || (C(p, g), C(i.$$.fragment, g), C(b, g), C(a.$$.fragment, g), C(y, g), d = !0);
    },
    o(g) {
      S(p, g), S(i.$$.fragment, g), S(b, g), S(a.$$.fragment, g), S(y, g), d = !1;
    },
    d(g) {
      g && B(e), p && p.d(g), $(i), b && b.d(g), $(a), y && y.d(g), n[82](null), h = !1, Je(m);
    }
  };
}
function tc(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, v, b, E = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Sl(n), y = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && Ol(n)
  );
  r = new Zn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ac] },
      $$scope: { ctx: n }
    }
  });
  const T = (
    /*#slots*/
    n[56].default
  ), k = Te(
    T,
    n,
    /*$$scope*/
    n[87],
    null
  ), g = [uc, oc], R = [];
  function F(O, U) {
    return (
      /*textarea*/
      O[14] && typeof /*value*/
      O[0] == "string" ? 0 : 1
    );
  }
  s = F(n), o = R[s] = g[s](n), c = new Zn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [dc] },
      $$scope: { ctx: n }
    }
  });
  let A = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Ml(n), I = [
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
      ).map(Nl).concat([
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
    Zt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], M = {};
  for (let O = 0; O < I.length; O += 1)
    M = z(M, I[O]);
  return {
    c() {
      e = ne("label"), E && E.c(), t = oe(), y && y.c(), i = oe(), te(r.$$.fragment), l = oe(), k && k.c(), a = oe(), o.c(), u = oe(), te(c.$$.fragment), f = oe(), A && A.c(), ue(e, M);
    },
    m(O, U) {
      V(O, e, U), E && E.m(e, null), J(e, t), y && y.m(e, null), J(e, i), x(r, e, null), J(e, l), k && k.m(e, null), J(e, a), R[s].m(e, null), J(e, u), x(c, e, null), J(e, f), A && A.m(e, null), n[78](e), p = !0, v || (b = [
        ce(m = Ot.call(null, e, {
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
        ce(_ = $e.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ce(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        de(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        de(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        de(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        de(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        de(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        de(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], v = !0);
    },
    p(O, U) {
      !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" ? E ? (E.p(O, U), U[0] & /*textarea, variant*/
      49152 && C(E, 1)) : (E = Sl(O), E.c(), C(E, 1), E.m(e, t)) : E && (Ne(), S(E, 1, 1, () => {
        E = null;
      }), Ue()), /*textarea*/
      O[14] || /*variant*/
      O[15] === "outlined" ? y ? (y.p(O, U), U[0] & /*textarea, variant*/
      49152 && C(y, 1)) : (y = Ol(O), y.c(), C(y, 1), y.m(e, i)) : y && (Ne(), S(y, 1, 1, () => {
        y = null;
      }), Ue());
      const W = {};
      U[2] & /*$$scope*/
      33554432 && (W.$$scope = { dirty: U, ctx: O }), r.$set(W), k && k.p && (!p || U[2] & /*$$scope*/
      33554432) && Oe(
        k,
        T,
        O,
        /*$$scope*/
        O[87],
        p ? Le(
          T,
          /*$$scope*/
          O[87],
          U,
          null
        ) : Re(
          /*$$scope*/
          O[87]
        ),
        null
      );
      let N = s;
      s = F(O), s === N ? R[s].p(O, U) : (Ne(), S(R[N], 1, 1, () => {
        R[N] = null;
      }), Ue(), o = R[s], o ? o.p(O, U) : (o = R[s] = g[s](O), o.c()), C(o, 1), o.m(e, u));
      const j = {};
      U[2] & /*$$scope*/
      33554432 && (j.$$scope = { dirty: U, ctx: O }), c.$set(j), !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" && /*ripple*/
      O[11] ? A ? (A.p(O, U), U[0] & /*textarea, variant, ripple*/
      51200 && C(A, 1)) : (A = Ml(O), A.c(), C(A, 1), A.m(e, null)) : A && (Ne(), S(A, 1, 1, () => {
        A = null;
      }), Ue()), ue(e, M = fe(I, [
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
        ).map(Nl).concat([
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
        32768 && Zt(
          /*$$restProps*/
          O[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), m && me(m.update) && U[0] & /*textarea, variant*/
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
      }), _ && me(_.update) && U[0] & /*use*/
      256 && _.update.call(
        null,
        /*use*/
        O[8]
      );
    },
    i(O) {
      p || (C(E), C(y), C(r.$$.fragment, O), C(k, O), C(o), C(c.$$.fragment, O), C(A), p = !0);
    },
    o(O) {
      S(E), S(y), S(r.$$.fragment, O), S(k, O), S(o), S(c.$$.fragment, O), S(A), p = !1;
    },
    d(O) {
      O && B(e), E && E.d(), y && y.d(), $(r), k && k.d(O), R[s].d(), $(c), A && A.d(), n[78](null), v = !1, Je(b);
    }
  };
}
function nc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Te(
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
      33554432) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Le(
          t,
          /*$$scope*/
          r[87],
          l,
          Wu
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        gl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ic(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    pl
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
      33554432) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Le(
          t,
          /*$$scope*/
          r[87],
          l,
          Ku
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        pl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Sl(n) {
  let e, t, i, r = (
    /*variant*/
    n[15] === "filled" && Tl()
  ), l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Ll(n);
  return {
    c() {
      r && r.c(), e = oe(), l && l.c(), t = We();
    },
    m(a, s) {
      r && r.m(a, s), V(a, e, s), l && l.m(a, s), V(a, t, s), i = !0;
    },
    p(a, s) {
      /*variant*/
      a[15] === "filled" ? r || (r = Tl(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? l ? (l.p(a, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && C(l, 1)) : (l = Ll(a), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (Ne(), S(l, 1, 1, () => {
        l = null;
      }), Ue());
    },
    i(a) {
      i || (C(l), i = !0);
    },
    o(a) {
      S(l), i = !1;
    },
    d(a) {
      a && (B(e), B(t)), r && r.d(a), l && l.d(a);
    }
  };
}
function Tl(n) {
  let e;
  return {
    c() {
      e = ne("span"), w(e, "class", "mdc-text-field__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Ll(n) {
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
    $$slots: { default: [rc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ki({ props: r }), n[57](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? fe(i, [
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
        32768 && Ce(Ve(
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[57](null), $(e, l);
    }
  };
}
function rc(n) {
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
  ), l = Te(
    r,
    n,
    /*$$scope*/
    n[87],
    El
  );
  return {
    c() {
      t = ct(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Oe(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Le(
          r,
          /*$$scope*/
          a[87],
          s,
          $u
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        El
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function Ol(n) {
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
    $$slots: { default: [sc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ba({ props: r }), n[59](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? fe(i, [
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
        32768 && Ce(Ve(
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[59](null), $(e, l);
    }
  };
}
function Rl(n) {
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
    $$slots: { default: [lc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ki({ props: r }), n[58](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? fe(i, [
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
        32768 && Ce(Ve(
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[58](null), $(e, l);
    }
  };
}
function lc(n) {
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
  ), l = Te(
    r,
    n,
    /*$$scope*/
    n[87],
    yl
  );
  return {
    c() {
      t = ct(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Oe(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Le(
          r,
          /*$$scope*/
          a[87],
          s,
          xu
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        yl
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function sc(n) {
  let e, t, i = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Rl(n);
  return {
    c() {
      i && i.c(), e = We();
    },
    m(r, l) {
      i && i.m(r, l), V(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && C(i, 1)) : (i = Rl(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (Ne(), S(i, 1, 1, () => {
        i = null;
      }), Ue());
    },
    i(r) {
      t || (C(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function ac(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    Cl
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
      33554432) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Le(
          t,
          /*$$scope*/
          r[87],
          l,
          Ju
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        Cl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function oc(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = Te(
    f,
    n,
    /*$$scope*/
    n[87],
    vl
  );
  let h = (
    /*prefix*/
    n[20] != null && kl(n)
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
  function v(g) {
    n[71](g);
  }
  function b(g) {
    n[72](g);
  }
  let E = {};
  for (let g = 0; g < m.length; g += 1)
    E = z(E, m[g]);
  /*value*/
  n[0] !== void 0 && (E.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (E.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (E.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (E.invalid = /*invalid*/
  n[1]), i = new Hu({ props: E }), n[68](i), se.push(() => It(i, "value", _)), se.push(() => It(i, "files", p)), se.push(() => It(i, "dirty", v)), se.push(() => It(i, "invalid", b)), i.$on(
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
  let y = (
    /*suffix*/
    n[21] != null && Dl(n)
  );
  const T = (
    /*#slots*/
    n[56].suffix
  ), k = Te(
    T,
    n,
    /*$$scope*/
    n[87],
    Il
  );
  return {
    c() {
      d && d.c(), e = oe(), h && h.c(), t = oe(), te(i.$$.fragment), o = oe(), y && y.c(), u = oe(), k && k.c();
    },
    m(g, R) {
      d && d.m(g, R), V(g, e, R), h && h.m(g, R), V(g, t, R), x(i, g, R), V(g, o, R), y && y.m(g, R), V(g, u, R), k && k.m(g, R), c = !0;
    },
    p(g, R) {
      d && d.p && (!c || R[2] & /*$$scope*/
      33554432) && Oe(
        d,
        f,
        g,
        /*$$scope*/
        g[87],
        c ? Le(
          f,
          /*$$scope*/
          g[87],
          R,
          Zu
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        vl
      ), /*prefix*/
      g[20] != null ? h ? (h.p(g, R), R[0] & /*prefix*/
      1048576 && C(h, 1)) : (h = kl(g), h.c(), C(h, 1), h.m(t.parentNode, t)) : h && (Ne(), S(h, 1, 1, () => {
        h = null;
      }), Ue());
      const F = R[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | R[1] & /*$$restProps*/
      32768 ? fe(m, [
        R[0] & /*type*/
        262144 && { type: (
          /*type*/
          g[18]
        ) },
        R[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          g[12]
        ) },
        R[0] & /*required*/
        8192 && { required: (
          /*required*/
          g[13]
        ) },
        R[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          g[19]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          g[27]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          g[27]
        ) },
        R[0] & /*noLabel, label*/
        196608 && Ce(
          /*noLabel*/
          g[16] && /*label*/
          g[17] != null ? { placeholder: (
            /*label*/
            g[17]
          ) } : {}
        ),
        R[1] & /*$$restProps*/
        32768 && Ce(Ve(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !r && R[0] & /*value*/
      1 && (r = !0, F.value = /*value*/
      g[0], bt(() => r = !1)), !l && R[0] & /*files*/
      8 && (l = !0, F.files = /*files*/
      g[3], bt(() => l = !1)), !a && R[0] & /*dirty*/
      16 && (a = !0, F.dirty = /*dirty*/
      g[4], bt(() => a = !1)), !s && R[0] & /*invalid*/
      2 && (s = !0, F.invalid = /*invalid*/
      g[1], bt(() => s = !1)), i.$set(F), /*suffix*/
      g[21] != null ? y ? (y.p(g, R), R[0] & /*suffix*/
      2097152 && C(y, 1)) : (y = Dl(g), y.c(), C(y, 1), y.m(u.parentNode, u)) : y && (Ne(), S(y, 1, 1, () => {
        y = null;
      }), Ue()), k && k.p && (!c || R[2] & /*$$scope*/
      33554432) && Oe(
        k,
        T,
        g,
        /*$$scope*/
        g[87],
        c ? Le(
          T,
          /*$$scope*/
          g[87],
          R,
          Yu
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        Il
      );
    },
    i(g) {
      c || (C(d, g), C(h), C(i.$$.fragment, g), C(y), C(k, g), c = !0);
    },
    o(g) {
      S(d, g), S(h), S(i.$$.fragment, g), S(y), S(k, g), c = !1;
    },
    d(g) {
      g && (B(e), B(t), B(o), B(u)), d && d.d(g), h && h.d(g), n[68](null), $(i, g), y && y.d(g), k && k.d(g);
    }
  };
}
function uc(n) {
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
    h = z(h, u[p]);
  /*value*/
  n[0] !== void 0 && (h.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (h.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (h.invalid = /*invalid*/
  n[1]), t = new ju({ props: h }), n[60](t), se.push(() => It(t, "value", c)), se.push(() => It(t, "dirty", f)), se.push(() => It(t, "invalid", d)), t.$on(
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
  ), _ = Te(
    m,
    n,
    /*$$scope*/
    n[87],
    Al
  );
  return {
    c() {
      e = ne("span"), te(t.$$.fragment), a = oe(), _ && _.c(), w(e, "class", s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(p, v) {
      V(p, e, v), x(t, e, null), J(e, a), _ && _.m(e, null), o = !0;
    },
    p(p, v) {
      const b = v[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | v[1] & /*$$restProps*/
      32768 ? fe(u, [
        v[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        v[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        v[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        v[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        v[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        v[1] & /*$$restProps*/
        32768 && Ce(Ve(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && v[0] & /*value*/
      1 && (i = !0, b.value = /*value*/
      p[0], bt(() => i = !1)), !r && v[0] & /*dirty*/
      16 && (r = !0, b.dirty = /*dirty*/
      p[4], bt(() => r = !1)), !l && v[0] & /*invalid*/
      2 && (l = !0, b.invalid = /*invalid*/
      p[1], bt(() => l = !1)), t.$set(b), _ && _.p && (!o || v[2] & /*$$scope*/
      33554432) && Oe(
        _,
        m,
        p,
        /*$$scope*/
        p[87],
        o ? Le(
          m,
          /*$$scope*/
          p[87],
          v,
          Qu
        ) : Re(
          /*$$scope*/
          p[87]
        ),
        Al
      ), (!o || v[1] & /*$$restProps*/
      32768 && s !== (s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && w(e, "class", s);
    },
    i(p) {
      o || (C(t.$$.fragment, p), C(_, p), o = !0);
    },
    o(p) {
      S(t.$$.fragment, p), S(_, p), o = !1;
    },
    d(p) {
      p && B(e), n[60](null), $(t), _ && _.d(p);
    }
  };
}
function kl(n) {
  let e, t;
  return e = new Fu({
    props: {
      $$slots: { default: [cc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function cc(n) {
  let e;
  return {
    c() {
      e = ct(
        /*prefix*/
        n[20]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i[0] & /*prefix*/
      1048576 && Ct(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function Dl(n) {
  let e, t;
  return e = new Nu({
    props: {
      $$slots: { default: [fc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function fc(n) {
  let e;
  return {
    c() {
      e = ct(
        /*suffix*/
        n[21]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i[0] & /*suffix*/
      2097152 && Ct(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function dc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Te(
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
      33554432) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Le(
          t,
          /*$$scope*/
          r[87],
          l,
          Xu
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        bl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ml(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _a({ props: r }), n[77](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? fe(i, [Ce(Ve(
        /*$$restProps*/
        l[46],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[77](null), $(e, l);
    }
  };
}
function Fl(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [hc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new Mu({ props: r }), e.$on(
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
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? fe(i, [Ce(Ve(
        /*$$restProps*/
        l[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      $(e, l);
    }
  };
}
function hc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    hl
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
      33554432) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Le(
          t,
          /*$$scope*/
          r[87],
          l,
          qu
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        hl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function mc(n) {
  let e, t, i, r, l;
  const a = [tc, ec], s = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = s[e] = a[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Fl(n)
  );
  return {
    c() {
      t.c(), i = oe(), u && u.c(), r = We();
    },
    m(c, f) {
      s[e].m(c, f), V(c, i, f), u && u.m(c, f), V(c, r, f), l = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Fl(c), u.c(), C(u, 1), u.m(r.parentNode, r)) : u && (Ne(), S(u, 1, 1, () => {
        u = null;
      }), Ue());
    },
    i(c) {
      l || (C(t), C(u), l = !0);
    },
    o(c) {
      S(t), S(u), l = !1;
    },
    d(c) {
      c && (B(i), B(r)), s[e].d(c), u && u.d(c);
    }
  };
}
const Nl = ([n, e]) => `${n}: ${e};`, Ul = ([n, e]) => `${n}: ${e};`;
function pc(n, e, t) {
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
  let l = he(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = kr(a), { applyPassive: u } = ga, c = nt(et());
  let f = () => {
  };
  function d(P) {
    return P === f;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: _ = "" } = e, { ripple: p = !0 } = e, { disabled: v = !1 } = e, { required: b = !1 } = e, { textarea: E = !1 } = e, { variant: y = E ? "outlined" : "standard" } = e, { noLabel: T = !1 } = e, { label: k = void 0 } = e, { type: g = "text" } = e, { value: R = l.input$emptyValueUndefined ? void 0 : f } = e, { files: F = f } = e;
  const A = !d(R) || !d(F);
  d(R) && (R = void 0), d(F) && (F = null);
  let { invalid: I = f } = e, { updateInvalid: M = d(I) } = e;
  d(I) && (I = !1);
  let { dirty: O = !1 } = e, { prefix: U = void 0 } = e, { suffix: W = void 0 } = e, { validateOnValueChange: N = M } = e, { useNativeValidation: j = M } = e, { withLeadingIcon: D = f } = e, { withTrailingIcon: L = f } = e, { input: Z = void 0 } = e, { floatingLabel: Fe = void 0 } = e, { lineRipple: Me = void 0 } = e, { notchedOutline: be = void 0 } = e, Xe, G, Q = {}, ke = {}, De, we = !1, ie = Ge("SMUI:addLayoutListener"), K, Ye, Be = new Promise((P) => Ye = P), vt, Y, ve, je, Pe = R;
  ie && (K = ie(X)), at(() => {
    if (t(54, G = new _u(
      {
        // getRootAdapterMethods_
        addClass: ot,
        removeClass: xe,
        hasClass: ut,
        registerTextFieldInteractionHandler: (P, dt) => pe().addEventListener(P, dt),
        deregisterTextFieldInteractionHandler: (P, dt) => pe().removeEventListener(P, dt),
        registerValidationAttributeChangeHandler: (P) => {
          const dt = (Jn) => Jn.map((xn) => xn.attributeName).filter((xn) => xn), pi = new MutationObserver((Jn) => {
            j && P(dt(Jn));
          }), ir = { attributes: !0 };
          return Z && pi.observe(Z.getElement(), ir), pi;
        },
        deregisterValidationAttributeChangeHandler: (P) => {
          P.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var P;
          return (P = Z == null ? void 0 : Z.getElement()) !== null && P !== void 0 ? P : null;
        },
        setInputAttr: (P, dt) => {
          Z == null || Z.addAttr(P, dt);
        },
        removeInputAttr: (P) => {
          Z == null || Z.removeAttr(P);
        },
        isFocused: () => document.activeElement === (Z == null ? void 0 : Z.getElement()),
        registerInputInteractionHandler: (P, dt) => {
          Z == null || Z.getElement().addEventListener(P, dt, u());
        },
        deregisterInputInteractionHandler: (P, dt) => {
          Z == null || Z.getElement().removeEventListener(P, dt, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (P) => Fe && Fe.float(P),
        getLabelWidth: () => Fe ? Fe.getWidth() : 0,
        hasLabel: () => !!Fe,
        shakeLabel: (P) => Fe && Fe.shake(P),
        setLabelRequired: (P) => Fe && Fe.setRequired(P),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Me && Me.activate(),
        deactivateLineRipple: () => Me && Me.deactivate(),
        setLineRippleTransformOrigin: (P) => Me && Me.setRippleCenter(P),
        // getOutlineAdapterMethods_
        closeOutline: () => be && be.closeNotch(),
        hasOutline: () => !!be,
        notchOutline: (P) => be && be.notch(P)
      },
      {
        get helperText() {
          return ve;
        },
        get characterCounter() {
          return je;
        },
        get leadingIcon() {
          return vt;
        },
        get trailingIcon() {
          return Y;
        }
      }
    )), A) {
      if (Z == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      G.init();
    } else
      Mr().then(() => {
        if (Z == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        G.init();
      });
    return Ye(), () => {
      G.destroy();
    };
  }), Qt(() => {
    K && K();
  });
  function St(P) {
    t(29, vt = P.detail);
  }
  function q(P) {
    t(30, Y = P.detail);
  }
  function le(P) {
    t(32, je = P.detail);
  }
  function ee(P) {
    t(27, De = P.detail);
  }
  function ze(P) {
    t(31, ve = P.detail);
  }
  function ut(P) {
    var dt;
    return P in Q ? (dt = Q[P]) !== null && dt !== void 0 ? dt : null : pe().classList.contains(P);
  }
  function ot(P) {
    Q[P] || t(25, Q[P] = !0, Q);
  }
  function xe(P) {
    (!(P in Q) || Q[P]) && t(25, Q[P] = !1, Q);
  }
  function Ae(P, dt) {
    ke[P] != dt && (dt === "" || dt == null ? (delete ke[P], t(26, ke)) : t(26, ke[P] = dt, ke));
  }
  function ae() {
    Z == null || Z.focus();
  }
  function jt() {
    Z == null || Z.blur();
  }
  function X() {
    if (G) {
      const P = G.shouldFloat;
      G.notchOutline(P);
    }
  }
  function pe() {
    return Xe;
  }
  function Ie(P) {
    se[P ? "unshift" : "push"](() => {
      Fe = P, t(5, Fe);
    });
  }
  function it(P) {
    se[P ? "unshift" : "push"](() => {
      Fe = P, t(5, Fe);
    });
  }
  function Jt(P) {
    se[P ? "unshift" : "push"](() => {
      be = P, t(7, be);
    });
  }
  function Qn(P) {
    se[P ? "unshift" : "push"](() => {
      Z = P, t(2, Z);
    });
  }
  function Ui(P) {
    R = P, t(0, R);
  }
  function wi(P) {
    O = P, t(4, O);
  }
  function Pi(P) {
    I = P, t(1, I), t(54, G), t(19, M);
  }
  const Hi = () => t(28, we = !1), Bi = () => t(28, we = !0), Ln = (P) => ge(Xe, "blur", P), Vi = (P) => ge(Xe, "focus", P);
  function hi(P) {
    se[P ? "unshift" : "push"](() => {
      Z = P, t(2, Z);
    });
  }
  function ji(P) {
    R = P, t(0, R);
  }
  function mi(P) {
    F = P, t(3, F);
  }
  function On(P) {
    O = P, t(4, O);
  }
  function qi(P) {
    I = P, t(1, I), t(54, G), t(19, M);
  }
  const Gi = () => t(28, we = !1), Ki = () => t(28, we = !0), Wi = (P) => ge(Xe, "blur", P), zi = (P) => ge(Xe, "focus", P);
  function Xi(P) {
    se[P ? "unshift" : "push"](() => {
      Me = P, t(6, Me);
    });
  }
  function Yi(P) {
    se[P ? "unshift" : "push"](() => {
      Xe = P, t(24, Xe);
    });
  }
  const Zi = () => t(29, vt = void 0), Qi = () => t(30, Y = void 0), Ji = () => t(32, je = void 0);
  function xi(P) {
    se[P ? "unshift" : "push"](() => {
      Xe = P, t(24, Xe);
    });
  }
  const $i = () => t(29, vt = void 0), er = () => t(30, Y = void 0), tr = () => {
    t(27, De = void 0), t(31, ve = void 0);
  }, nr = () => t(32, je = void 0);
  return n.$$set = (P) => {
    e = z(z({}, e), tt(P)), t(46, l = he(e, r)), "use" in P && t(8, h = P.use), "class" in P && t(9, m = P.class), "style" in P && t(10, _ = P.style), "ripple" in P && t(11, p = P.ripple), "disabled" in P && t(12, v = P.disabled), "required" in P && t(13, b = P.required), "textarea" in P && t(14, E = P.textarea), "variant" in P && t(15, y = P.variant), "noLabel" in P && t(16, T = P.noLabel), "label" in P && t(17, k = P.label), "type" in P && t(18, g = P.type), "value" in P && t(0, R = P.value), "files" in P && t(3, F = P.files), "invalid" in P && t(1, I = P.invalid), "updateInvalid" in P && t(19, M = P.updateInvalid), "dirty" in P && t(4, O = P.dirty), "prefix" in P && t(20, U = P.prefix), "suffix" in P && t(21, W = P.suffix), "validateOnValueChange" in P && t(48, N = P.validateOnValueChange), "useNativeValidation" in P && t(49, j = P.useNativeValidation), "withLeadingIcon" in P && t(22, D = P.withLeadingIcon), "withTrailingIcon" in P && t(23, L = P.withTrailingIcon), "input" in P && t(2, Z = P.input), "floatingLabel" in P && t(5, Fe = P.floatingLabel), "lineRipple" in P && t(6, Me = P.lineRipple), "notchedOutline" in P && t(7, be = P.notchedOutline), "$$scope" in P && t(87, s = P.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, i = Z && Z.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && G && G.isValid() !== !I && (M ? t(1, I = !G.isValid()) : G.setValid(!I)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && G && G.getValidateOnValueChange() !== N && G.setValidateOnValueChange(d(N) ? !1 : N), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && G && G.setUseNativeValidation(d(j) ? !0 : j), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && G && G.setDisabled(v), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && G && A && Pe !== R) {
      t(55, Pe = R);
      const P = `${R}`;
      G.getValue() !== P && G.setValue(P);
    }
  }, [
    R,
    I,
    Z,
    F,
    O,
    Fe,
    Me,
    be,
    h,
    m,
    _,
    p,
    v,
    b,
    E,
    y,
    T,
    k,
    g,
    M,
    U,
    W,
    D,
    L,
    Xe,
    Q,
    ke,
    De,
    we,
    vt,
    Y,
    ve,
    je,
    i,
    c,
    d,
    A,
    Be,
    St,
    q,
    le,
    ee,
    ze,
    ot,
    xe,
    Ae,
    l,
    o,
    N,
    j,
    ae,
    jt,
    X,
    pe,
    G,
    Pe,
    a,
    Ie,
    it,
    Jt,
    Qn,
    Ui,
    wi,
    Pi,
    Hi,
    Bi,
    Ln,
    Vi,
    hi,
    ji,
    mi,
    On,
    qi,
    Gi,
    Ki,
    Wi,
    zi,
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
    s
  ];
}
class Ia extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      pc,
      mc,
      _e,
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
function gc(n) {
  let e;
  return {
    c() {
      e = ct(
        /*content*/
        n[7]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      128 && Ct(
        e,
        /*content*/
        t[7]
      );
    },
    i: Qe,
    o: Qe,
    d(t) {
      t && B(e);
    }
  };
}
function _c(n) {
  let e;
  const t = (
    /*#slots*/
    n[15].default
  ), i = Te(
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
      16384) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[14],
        e ? Le(
          t,
          /*$$scope*/
          r[14],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function bc(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const f = [_c, gc], d = [];
  function h(p, v) {
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
    _ = z(_, m[p]);
  return {
    c() {
      e = ne("i"), i.c(), ue(e, _);
    },
    m(p, v) {
      V(p, e, v), d[t].m(e, null), n[16](e), o = !0, u || (c = [
        ce(s = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], u = !0);
    },
    p(p, [v]) {
      let b = t;
      t = h(p), t === b ? d[t].p(p, v) : (Ne(), S(d[b], 1, 1, () => {
        d[b] = null;
      }), Ue(), i = d[t], i ? i.p(p, v) : (i = d[t] = f[t](p), i.c()), C(i, 1), i.m(e, null)), ue(e, _ = fe(m, [
        (!o || v & /*className*/
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
        (!o || v & /*tabindex*/
        8 && l !== (l = /*tabindex*/
        p[3] === -1 ? "true" : "false")) && { "aria-hidden": l },
        (!o || v & /*role, disabled*/
        20 && a !== (a = /*role*/
        p[2] === "button" ? (
          /*disabled*/
          p[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": a },
        v & /*roleProps*/
        256 && /*roleProps*/
        p[8],
        v & /*internalAttrs*/
        64 && /*internalAttrs*/
        p[6],
        v & /*$$restProps*/
        4096 && /*$$restProps*/
        p[12]
      ])), s && me(s.update) && v & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (C(i), o = !0);
    },
    o(p) {
      S(i), o = !1;
    },
    d(p) {
      p && B(e), d[t].d(), n[16](null), u = !1, Je(c);
    }
  };
}
function Ic(n, e, t) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let l = he(e, r), a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(et());
  let { use: c = [] } = e, { class: f = "" } = e, { role: d = void 0 } = e, { tabindex: h = d === "button" ? 0 : -1 } = e, { disabled: m = !1 } = e, _, p, v = {};
  const b = Ge("SMUI:textfield:icon:leading");
  rt(n, b, (A) => t(18, a = A));
  const E = a;
  let y;
  at(() => (p = new Iu({
    getAttr: T,
    setAttr: k,
    removeAttr: g,
    setContent: (A) => {
      t(7, y = A);
    },
    registerInteractionHandler: (A, I) => R().addEventListener(A, I),
    deregisterInteractionHandler: (A, I) => R().removeEventListener(A, I),
    notifyIconAction: () => ge(R(), "SMUITextField:icon", void 0, void 0, !0)
  }), ge(
    R(),
    E ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    p
  ), p.init(), () => {
    ge(
      R(),
      E ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      p
    ), p.destroy();
  }));
  function T(A) {
    var I;
    return A in v ? (I = v[A]) !== null && I !== void 0 ? I : null : R().getAttribute(A);
  }
  function k(A, I) {
    v[A] !== I && t(6, v[A] = I, v);
  }
  function g(A) {
    (!(A in v) || v[A] != null) && t(6, v[A] = void 0, v);
  }
  function R() {
    return _;
  }
  function F(A) {
    se[A ? "unshift" : "push"](() => {
      _ = A, t(5, _);
    });
  }
  return n.$$set = (A) => {
    e = z(z({}, e), tt(A)), t(12, l = he(e, r)), "use" in A && t(0, c = A.use), "class" in A && t(1, f = A.class), "role" in A && t(2, d = A.role), "tabindex" in A && t(3, h = A.tabindex), "disabled" in A && t(4, m = A.disabled), "$$scope" in A && t(14, o = A.$$scope);
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
    v,
    y,
    i,
    u,
    b,
    E,
    l,
    R,
    o,
    s,
    F
  ];
}
class vc extends Ee {
  constructor(e) {
    super(), ye(this, e, Ic, bc, _e, {
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
function Ac(n) {
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
    n[0]), e = new Ia({ props: l }), se.push(() => It(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        x(e, a, s), i = !0;
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
        a[0], bt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function Cc(n) {
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
    $$slots: { leadingIcon: [Ec] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Ia({ props: l }), se.push(() => It(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        x(e, a, s), i = !0;
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
        a[0], bt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function yc(n) {
  let e;
  return {
    c() {
      e = ct(
        /*icon*/
        n[3]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      8 && Ct(
        e,
        /*icon*/
        t[3]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function Ec(n) {
  let e, t;
  return e = new vc({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [yc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, icon*/
      136 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Sc(n) {
  let e, t, i, r;
  const l = [Cc, Ac], a = [];
  function s(o, u) {
    return (
      /*icon*/
      o[3] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = We();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ne(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), Ue(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Tc(n, e, t) {
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
class Lc extends Ee {
  constructor(e) {
    super(), ye(this, e, Tc, Sc, _e, {
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
var Oc = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Rc = {
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
}, ei = {
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
}, _t;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(_t || (_t = {}));
var yn;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(yn || (yn = {}));
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
var an, $t, Ze = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
an = {}, an["" + Ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", an["" + Ze.LIST_ITEM_CLASS] = "mdc-list-item", an["" + Ze.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", an["" + Ze.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", an["" + Ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", an["" + Ze.ROOT] = "mdc-list";
var Dn = ($t = {}, $t["" + Ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $t["" + Ze.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $t["" + Ze.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $t["" + Ze.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $t["" + Ze.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $t["" + Ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $t["" + Ze.ROOT] = "mdc-deprecated-list", $t), on = {
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
    .` + Ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ze.LIST_ITEM_CLASS + ` a,
    .` + Dn[Ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Dn[Ze.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ze.LIST_ITEM_CLASS + ` a,
    .` + Ze.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ze.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Dn[Ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Dn[Ze.LIST_ITEM_CLASS] + ` a,
    .` + Dn[Ze.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Dn[Ze.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, pt = {
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
var kc = ["input", "button", "textarea", "select"], Gt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    kc.indexOf(t) === -1 && n.preventDefault();
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
function Dc() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Mc(n, e) {
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
function Cr(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, l = n.focusedItemIndex, a = n.skipFocus, s = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Aa(e);
  }, pt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Fc(r, l, s, e) : o = Nc(r, s, e), o !== -1 && !a && i(o), o;
}
function Fc(n, e, t, i) {
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
function Nc(n, e, t) {
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
function va(n) {
  return n.typeaheadBuffer.length > 0;
}
function Aa(n) {
  n.typeaheadBuffer = "";
}
function wl(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, l = n.focusItemAtIndex, a = n.sortedIndexByFirstChar, s = n.isItemAtIndexDisabled, o = ht(t) === "ArrowLeft", u = ht(t) === "ArrowUp", c = ht(t) === "ArrowRight", f = ht(t) === "ArrowDown", d = ht(t) === "Home", h = ht(t) === "End", m = ht(t) === "Enter", _ = ht(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || f || d || h || m)
    return -1;
  var p = !_ && t.key.length === 1;
  if (p) {
    Gt(t);
    var v = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return Cr(v, e);
  }
  if (!_)
    return -1;
  i && Gt(t);
  var b = i && va(e);
  if (b) {
    var v = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return Cr(v, e);
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
function Uc(n) {
  return n instanceof Array;
}
var wc = ["Alt", "Control", "Meta", "Shift"];
function Pl(n) {
  var e = new Set(n ? wc.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var Pc = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = pt.UNSET_INDEX, i.focusedItemIndex = pt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Dc(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return on;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ze;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pt;
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
      if (t !== pt.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, Ze.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = pt.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var l = this.adapter.listItemAtIndexHasClass(r, Ze.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, Ze.LIST_ITEM_ACTIVATED_CLASS);
        if (l || a) {
          t = r;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && va(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(t, Ze.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var l = this, a, s = ht(t) === "ArrowLeft", o = ht(t) === "ArrowUp", u = ht(t) === "ArrowRight", c = ht(t) === "ArrowDown", f = ht(t) === "Home", d = ht(t) === "End", h = ht(t) === "Enter", m = ht(t) === "Spacebar", _ = this.isVertical && c || !this.isVertical && u, p = this.isVertical && o || !this.isVertical && s, v = t.key === "A" || t.key === "a", b = Pl(t);
      if (this.adapter.isRootFocused()) {
        if ((p || d) && b([]))
          t.preventDefault(), this.focusLastElement();
        else if ((_ || f) && b([]))
          t.preventDefault(), this.focusFirstElement();
        else if (p && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusLastElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (_ && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusFirstElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        }
        if (this.hasTypeahead) {
          var y = {
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
          wl(y, this.typeaheadState);
        }
        return;
      }
      var T = this.adapter.getFocusedElementIndex();
      if (!(T === -1 && (T = r, T < 0))) {
        if (_ && b([]))
          Gt(t), this.focusNextElement(T);
        else if (p && b([]))
          Gt(t), this.focusPrevElement(T);
        else if (_ && b(["Shift"]) && this.isCheckboxList) {
          Gt(t);
          var E = this.focusNextElement(T);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (p && b(["Shift"]) && this.isCheckboxList) {
          Gt(t);
          var E = this.focusPrevElement(T);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (f && b([]))
          Gt(t), this.focusFirstElement();
        else if (d && b([]))
          Gt(t), this.focusLastElement();
        else if (f && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Gt(t), this.isIndexDisabled(T))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, T, T);
        } else if (d && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Gt(t), this.isIndexDisabled(T))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(T, this.adapter.getListItemCount() - 1, T);
        } else if (v && b(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === pt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || m) && b([])) {
          if (i) {
            var k = t.target;
            if (k && k.tagName === "A" && h || (Gt(t), this.isIndexDisabled(T)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(T, !1), this.adapter.notifyAction(T));
          }
        } else if ((h || m) && b(["Shift"]) && this.isCheckboxList) {
          var k = t.target;
          if (k && k.tagName === "A" && h || (Gt(t), this.isIndexDisabled(T)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : T, T, T), this.adapter.notifyAction(T));
        }
        if (this.hasTypeahead) {
          var y = {
            event: t,
            focusItemAtIndex: function(R) {
              l.focusItemAtIndex(R);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(R) {
              return l.isIndexDisabled(R);
            }
          };
          wl(y, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var l, a = Pl(r);
      t !== pt.UNSET_INDEX && (this.isIndexDisabled(t) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, on.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, on.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = Ze.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Ze.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== pt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== pt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === pt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, on.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? on.ARIA_CURRENT : on.ARIA_SELECTED;
      if (this.selectedIndex !== pt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== pt.UNSET_INDEX) {
        var l = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, l);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? on.ARIA_SELECTED : on.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== pt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, l = i.isUserInteraction ? new Set(r === pt.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), s = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = l == null ? void 0 : l.has(o), c = t.indexOf(o) >= 0;
        c !== u && s.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, a, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && s.length && this.adapter.notifySelectionChange(s);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var l = new Set(this.selectedIndex === pt.UNSET_INDEX ? [] : this.selectedIndex), a = !(l != null && l.has(r)), s = dn([t, i].sort(), 2), o = s[0], u = s[1], c = this.getSelectionAttribute(), f = [], d = o; d <= u; d++)
        if (!this.isIndexDisabled(d)) {
          var h = l.has(d);
          a !== h && (f.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, a), this.adapter.setAttributeForElementIndex(d, c, "" + a), a ? l.add(d) : l.delete(d));
        }
      f.length && (this.selectedIndex = En([], dn(l)), this.adapter.notifySelectionChange(f));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === pt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== pt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== pt.UNSET_INDEX ? this.selectedIndex : Uc(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === pt.UNSET_INDEX;
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
      var s = this.selectedIndex === pt.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Cr(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Mc(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Aa(this.typeaheadState);
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
var Ca = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = yn.TOP_START, i.originCorner = yn.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Oc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ei;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return yn;
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
      this.originCorner = this.originCorner ^ _t.RIGHT;
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
        }, ei.TRANSITION_OPEN_DURATION);
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
          }, ei.TRANSITION_CLOSE_DURATION);
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), l = this.hasBit(i, _t.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, _t.RIGHT) ? "right" : "left", s = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, f = u.surfaceSize, d = (t = {}, t[a] = s, t[l] = o, t);
      c.width / f.width > ei.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(a + " " + l), this.adapter.setPosition(d), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, _t.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, l = i.anchorSize, a = i.surfaceSize, s = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, _t.BOTTOM), u, c;
      o ? (u = r.top - s + this.anchorMargin.bottom, c = r.bottom - s - this.anchorMargin.bottom) : (u = r.top - s + this.anchorMargin.top, c = r.bottom - s + l.height - this.anchorMargin.top);
      var f = c - a.height > 0;
      !f && u > c + this.openBottomBias && (t = this.setBit(t, _t.BOTTOM));
      var d = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, _t.FLIP_RTL), m = this.hasBit(this.anchorCorner, _t.RIGHT) || this.hasBit(t, _t.RIGHT), _ = !1;
      d && h ? _ = !m : _ = m;
      var p, v;
      _ ? (p = r.left + l.width + this.anchorMargin.right, v = r.right - this.anchorMargin.right) : (p = r.left + this.anchorMargin.left, v = r.right + l.width - this.anchorMargin.left);
      var b = p - a.width > 0, E = v - a.width > 0, y = this.hasBit(t, _t.FLIP_RTL) && this.hasBit(t, _t.RIGHT);
      return E && y && d || !b && y ? t = this.unsetBit(t, _t.RIGHT) : (b && _ && d || b && !_ && m || !E && p >= v) && (t = this.setBit(t, _t.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, l = this.hasBit(t, _t.BOTTOM), a = this.hasBit(this.anchorCorner, _t.BOTTOM), s = e.numbers.MARGIN_TO_EDGE;
      return l ? (r = i.top + this.anchorMargin.top - s, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - s, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, _t.RIGHT), l = this.hasBit(this.anchorCorner, _t.RIGHT);
      if (r) {
        var a = l ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return l ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, _t.BOTTOM), l = this.hasBit(this.anchorCorner, _t.BOTTOM), a = 0;
      return r ? a = l ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = l ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, l = this.measurements, a = l.windowScroll, s = l.viewportDistance, o = l.surfaceSize, u = l.viewportSize, c = Object.keys(t);
      try {
        for (var f = yt(c), d = f.next(); !d.done; d = f.next()) {
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
      }, ei.TOUCH_EVENT_WAIT_MS);
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
var Hl = {
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
function Hc(n) {
  return !!n.document && typeof n.document.createElement == "function";
}
function Bc(n, e) {
  if (Hc(n) && e in Hl) {
    var t = n.document.createElement("div"), i = Hl[e], r = i.standard, l = i.prefixed, a = r in t.style;
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
var Kn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Mn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Vc = {
  FOCUS_ROOT_INDEX: -1
}, Nn;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Nn || (Nn = {}));
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
var jc = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Nn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vc;
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
        var l = this.adapter.getAttributeFromElementAtIndex(r, Mn.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(l), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(t);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, Ca.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Nn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Nn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Nn.NONE:
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Mn.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Kn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Kn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Mn.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Mn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Mn.ARIA_DISABLED_ATTR, "true"));
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
}, fr = {
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
}, bn = {
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
var qc = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = bn.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ft;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return fr;
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
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === bn.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
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
      return t !== bn.UNSET_INDEX ? i[t] : "";
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
          var r = bn.LABEL_SCALE, l = this.adapter.getLabelWidth() * r;
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
      return this.useDefaultValidation && this.adapter.hasClass(ft.REQUIRED) && !this.adapter.hasClass(ft.DISABLED) ? this.getSelectedIndex() !== bn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(ft.REQUIRED) : this.adapter.removeClass(ft.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(yn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ft.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ft.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ft.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(ft.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(fr.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(fr.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, bn.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, en = {
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
var Gc = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      return n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return en;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return In;
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
      return this.adapter.getAttr(In.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(en.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(en.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(en.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(en.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(en.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(en.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(en.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(en.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), l = !t || r;
        if (l) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(In.ROLE) : this.adapter.setAttr(In.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(In.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(In.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(In.ARIA_HIDDEN, "true");
    }, e;
  }(Et)
);
const { document: Kc } = oa;
function Wc(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[34].default
  ), c = Te(
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
      ).map(Bl).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "dialog" },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let h = 0; h < f.length; h += 1)
    d = z(d, f[h]);
  return {
    c() {
      e = oe(), t = ne("div"), c && c.c(), ue(t, d);
    },
    m(h, m) {
      V(h, e, m), V(h, t, m), c && c.m(t, null), n[35](t), a = !0, s || (o = [
        de(
          Kc.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        ce(l = $e.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[10].call(null, t)
        ),
        de(t, "keydown", function() {
          me(
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
      4) && Oe(
        c,
        u,
        n,
        /*$$scope*/
        n[33],
        a ? Le(
          u,
          /*$$scope*/
          n[33],
          m,
          null
        ) : Re(
          /*$$scope*/
          n[33]
        ),
        null
      ), ue(t, d = fe(f, [
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
        ).map(Bl).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: r },
        { role: "dialog" },
        m[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        n[12]
      ])), l && me(l.update) && m[0] & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(h) {
      a || (C(c, h), a = !0);
    },
    o(h) {
      S(c, h), a = !1;
    },
    d(h) {
      h && (B(e), B(t)), c && c.d(h), n[35](null), s = !1, Je(o);
    }
  };
}
const Bl = ([n, e]) => `${n}: ${e};`;
function zc(n, e, t) {
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
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s, o, u;
  const c = nt(et());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { static: m = !1 } = e, { anchor: _ = !0 } = e, { fixed: p = !1 } = e, { open: v = m } = e, { managed: b = !1 } = e, { fullWidth: E = !1 } = e, { quickOpen: y = !1 } = e, { anchorElement: T = void 0 } = e, { anchorCorner: k = void 0 } = e, { anchorMargin: g = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: R = 0 } = e, { horizontallyCenteredOnViewport: F = !1 } = e, { openBottomBias: A = 0 } = e, { neverRestoreFocus: I = !1 } = e, M, O, U = {}, W = {}, N;
  qe("SMUI:list:role", "menu"), qe("SMUI:list:item:role", "menuitem");
  const j = yn;
  at(() => (t(7, O = new Ca({
    addClass: L,
    removeClass: Z,
    hasClass: D,
    hasAnchor: () => !!T,
    notifyClose: () => {
      b || t(13, v = m), v || ge(M, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      b || t(13, v = m), v || ge(M, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      b || t(13, v = !0), v && ge(M, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      v || ge(M, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (K) => M.contains(K),
    isRtl: () => getComputedStyle(M).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (K) => {
      t(9, W["transform-origin"] = K, W);
    },
    isFocused: () => document.activeElement === M,
    saveFocus: () => {
      var K;
      N = (K = document.activeElement) !== null && K !== void 0 ? K : void 0;
    },
    restoreFocus: () => {
      !I && (!M || M.contains(document.activeElement)) && N && document.contains(N) && "focus" in N && N.focus();
    },
    getInnerDimensions: () => ({
      width: M.offsetWidth,
      height: M.offsetHeight
    }),
    getAnchorDimensions: () => T ? T.getBoundingClientRect() : null,
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
    setPosition: (K) => {
      t(9, W.left = "left" in K ? `${K.left}px` : "", W), t(9, W.right = "right" in K ? `${K.right}px` : "", W), t(9, W.top = "top" in K ? `${K.top}px` : "", W), t(9, W.bottom = "bottom" in K ? `${K.bottom}px` : "", W);
    },
    setMaxHeight: (K) => {
      t(9, W["max-height"] = K, W);
    }
  })), ge(M, "SMUIMenuSurface:mount", {
    get open() {
      return v;
    },
    set open(K) {
      t(13, v = K);
    },
    closeProgrammatic: Fe
  }), O.init(), () => {
    var K;
    const Ye = O.isHoistedElement;
    O.destroy(), Ye && ((K = M.parentNode) === null || K === void 0 || K.removeChild(M));
  })), Qt(() => {
    var ie;
    _ && M && ((ie = M.parentElement) === null || ie === void 0 || ie.classList.remove("mdc-menu-surface--anchor"));
  });
  function D(ie) {
    return ie in U ? U[ie] : De().classList.contains(ie);
  }
  function L(ie) {
    U[ie] || t(8, U[ie] = !0, U);
  }
  function Z(ie) {
    (!(ie in U) || U[ie]) && t(8, U[ie] = !1, U);
  }
  function Fe(ie) {
    O.close(ie), t(13, v = !1);
  }
  function Me(ie) {
    O && v && !b && O.handleBodyClick(ie);
  }
  function be() {
    return v;
  }
  function Xe(ie) {
    t(13, v = ie);
  }
  function G(ie, K) {
    return O.setAbsolutePosition(ie, K);
  }
  function Q(ie) {
    return O.setIsHoisted(ie);
  }
  function ke() {
    return O.isFixed();
  }
  function De() {
    return M;
  }
  function we(ie) {
    se[ie ? "unshift" : "push"](() => {
      M = ie, t(6, M);
    });
  }
  return n.$$set = (ie) => {
    e = z(z({}, e), tt(ie)), t(12, r = he(e, i)), "use" in ie && t(0, f = ie.use), "class" in ie && t(1, d = ie.class), "style" in ie && t(2, h = ie.style), "static" in ie && t(3, m = ie.static), "anchor" in ie && t(15, _ = ie.anchor), "fixed" in ie && t(4, p = ie.fixed), "open" in ie && t(13, v = ie.open), "managed" in ie && t(16, b = ie.managed), "fullWidth" in ie && t(5, E = ie.fullWidth), "quickOpen" in ie && t(17, y = ie.quickOpen), "anchorElement" in ie && t(14, T = ie.anchorElement), "anchorCorner" in ie && t(18, k = ie.anchorCorner), "anchorMargin" in ie && t(19, g = ie.anchorMargin), "maxHeight" in ie && t(20, R = ie.maxHeight), "horizontallyCenteredOnViewport" in ie && t(21, F = ie.horizontallyCenteredOnViewport), "openBottomBias" in ie && t(22, A = ie.openBottomBias), "neverRestoreFocus" in ie && t(23, I = ie.neverRestoreFocus), "$$scope" in ie && t(33, a = ie.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && M && _ && !(!(t(30, s = M.parentElement) === null || s === void 0) && s.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = M.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, T = t(32, u = M.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && O && O.isOpen() !== v && (v ? O.open() : O.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && O && O.setQuickOpen(y), n.$$.dirty[0] & /*instance, fixed*/
    144 && O && O.setFixedPosition(p), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && O && O.setMaxHeight(R), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && O && O.setIsHorizontallyCenteredOnViewport(F), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && O && k != null && (typeof k == "string" ? O.setAnchorCorner(j[k]) : O.setAnchorCorner(k)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && O && O.setAnchorMargin(g), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && O && O.setOpenBottomBias(A);
  }, [
    f,
    d,
    h,
    m,
    p,
    E,
    M,
    O,
    U,
    W,
    c,
    Me,
    r,
    v,
    T,
    _,
    b,
    y,
    k,
    g,
    R,
    F,
    A,
    I,
    be,
    Xe,
    G,
    Q,
    ke,
    De,
    s,
    o,
    u,
    a,
    l,
    we
  ];
}
class Xc extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      zc,
      Wc,
      _e,
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
function Yc(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Zc(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), i = Te(
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
      4194304) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[22],
        e ? Le(
          t,
          /*$$scope*/
          r[22],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[22]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qc(n) {
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
    $$slots: { default: [Zc] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = z(a, r[s]);
  return (
    /*open*/
    n[0] !== void 0 && (a.open = /*open*/
    n[0]), e = new Xc({ props: a }), n[18](e), se.push(() => It(e, "open", l)), e.$on(
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
        x(e, s, o), i = !0;
      },
      p(s, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? fe(r, [
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
          512 && Ce(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: s }), !t && o & /*open*/
        1 && (t = !0, u.open = /*open*/
        s[0], bt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (C(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
      },
      d(s) {
        n[18](null), $(e, s);
      }
    }
  );
}
function Jc(n, e, t) {
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
  let l = he(e, r), { $$slots: a = {}, $$scope: s } = e;
  const { closest: o } = Oi, u = nt(et());
  let { use: c = [] } = e, { class: f = "" } = e, { open: d = !1 } = e, h, m, _, p;
  at(() => (t(3, m = new jc({
    addClassToElementAtIndex: (U, W) => {
      p.addClassForElementIndex(U, W);
    },
    removeClassFromElementAtIndex: (U, W) => {
      p.removeClassForElementIndex(U, W);
    },
    addAttributeToElementAtIndex: (U, W, N) => {
      p.setAttributeForElementIndex(U, W, N);
    },
    removeAttributeFromElementAtIndex: (U, W) => {
      p.removeAttributeForElementIndex(U, W);
    },
    getAttributeFromElementAtIndex: (U, W) => p.getAttributeFromElementIndex(U, W),
    elementContainsClass: (U, W) => U.classList.contains(W),
    closeSurface: (U) => {
      _.closeProgrammatic(U), ge(F(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (U) => p.getOrderedList().map((W) => W.element).indexOf(U),
    notifySelected: (U) => ge(
      F(),
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
    isSelectableItemAtIndex: (U) => !!o(p.getOrderedList()[U].element, `.${Kn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (U) => {
      const W = p.getOrderedList(), N = o(W[U].element, `.${Kn.MENU_SELECTION_GROUP}`), j = N == null ? void 0 : N.querySelector(`.${Kn.MENU_SELECTED_LIST_ITEM}`);
      return j ? W.map((D) => D.element).indexOf(j) : -1;
    }
  })), ge(F(), "SMUIMenu:mount", m), m.init(), () => {
    m.destroy();
  }));
  function v(U) {
    m && m.handleKeydown(U);
  }
  function b(U) {
    _ || (_ = U.detail);
  }
  function E(U) {
    p || t(4, p = U.detail);
  }
  function y() {
    return d;
  }
  function T(U) {
    t(0, d = U);
  }
  function k(U) {
    m.setDefaultFocusState(U);
  }
  function g() {
    return m.getSelectedIndex();
  }
  function R() {
    return h;
  }
  function F() {
    return h.getElement();
  }
  function A(U) {
    se[U ? "unshift" : "push"](() => {
      h = U, t(2, h);
    });
  }
  function I(U) {
    d = U, t(0, d);
  }
  const M = () => m && m.handleMenuSurfaceOpened(), O = (U) => m && m.handleItemAction(p.getOrderedList()[U.detail.index].element);
  return n.$$set = (U) => {
    e = z(z({}, e), tt(U)), t(9, l = he(e, r)), "use" in U && t(10, c = U.use), "class" in U && t(1, f = U.class), "open" in U && t(0, d = U.open), "$$scope" in U && t(22, s = U.$$scope);
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
    v,
    b,
    E,
    l,
    c,
    y,
    T,
    k,
    g,
    R,
    F,
    a,
    A,
    I,
    M,
    O,
    s
  ];
}
class xc extends Ee {
  constructor(e) {
    super(), ye(this, e, Jc, Qc, _e, {
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
function $c(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), i = Te(
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
      8192) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[44],
        e ? Le(
          t,
          /*$$scope*/
          r[44],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[44]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ef(n) {
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
      $$slots: { default: [$c] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = z(u, fe(r, [
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
      33554432 && Ce(
        /*$$restProps*/
        s[25]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[43](e), e.$on(
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
      e && te(e.$$.fragment), t = We();
    },
    m(s, o) {
      e && x(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      4096 && l !== (l = /*component*/
      s[12])) {
        if (e) {
          Ne();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Ue();
        }
        l ? (e = Rt(l, a(s, o)), s[43](e), e.$on(
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
        ), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? fe(r, [
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
          33554432 && Ce(
            /*$$restProps*/
            s[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && C(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[43](null), e && $(e, s);
    }
  };
}
function tf(n, e, t) {
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
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const { closest: o, matches: u } = Oi, c = nt(et());
  let { use: f = [] } = e, { class: d = "" } = e, { nonInteractive: h = !1 } = e, { dense: m = !1 } = e, { textualList: _ = !1 } = e, { avatarList: p = !1 } = e, { iconList: v = !1 } = e, { imageList: b = !1 } = e, { thumbnailList: E = !1 } = e, { videoList: y = !1 } = e, { twoLine: T = !1 } = e, { threeLine: k = !1 } = e, { vertical: g = !0 } = e, { wrapFocus: R = (s = Ge("SMUI:list:wrapFocus")) !== null && s !== void 0 ? s : !1 } = e, { singleSelection: F = !1 } = e, { disabledItemsFocusable: A = !1 } = e, { selectedIndex: I = -1 } = e, { radioList: M = !1 } = e, { checkList: O = !1 } = e, { hasTypeahead: U = !1 } = e, W, N, j = [], D = Ge("SMUI:list:role"), L = Ge("SMUI:list:nav");
  const Z = /* @__PURE__ */ new WeakMap();
  let Fe = Ge("SMUI:dialog:selection"), Me = Ge("SMUI:addLayoutListener"), be, { component: Xe = Nt } = e, { tag: G = Xe === Nt ? L ? "nav" : "ul" : void 0 } = e;
  qe("SMUI:list:nonInteractive", h), qe("SMUI:separator:context", "list"), D || (F ? (D = "listbox", qe("SMUI:list:item:role", "option")) : M ? (D = "radiogroup", qe("SMUI:list:item:role", "radio")) : O ? (D = "group", qe("SMUI:list:item:role", "checkbox")) : (D = "list", qe("SMUI:list:item:role", void 0))), Me && (be = Me(ee)), at(() => {
    t(41, N = new Pc({
      addClassForElementIndex: Y,
      focusItemAtIndex: Ae,
      getAttributeForElementIndex: (pe, Ie) => {
        var it, Jt;
        return (Jt = (it = Be()[pe]) === null || it === void 0 ? void 0 : it.getAttr(Ie)) !== null && Jt !== void 0 ? Jt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Be().map((pe) => pe.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => j.length,
      getPrimaryTextAtIndex: q,
      hasCheckboxAtIndex: (pe) => {
        var Ie, it;
        return (it = (Ie = Be()[pe]) === null || Ie === void 0 ? void 0 : Ie.hasCheckbox) !== null && it !== void 0 ? it : !1;
      },
      hasRadioAtIndex: (pe) => {
        var Ie, it;
        return (it = (Ie = Be()[pe]) === null || Ie === void 0 ? void 0 : Ie.hasRadio) !== null && it !== void 0 ? it : !1;
      },
      isCheckboxCheckedAtIndex: (pe) => {
        var Ie;
        const it = Be()[pe];
        return (Ie = (it == null ? void 0 : it.hasCheckbox) && it.checked) !== null && Ie !== void 0 ? Ie : !1;
      },
      isFocusInsideList: () => W != null && ae() !== document.activeElement && ae().contains(document.activeElement),
      isRootFocused: () => W != null && document.activeElement === ae(),
      listItemAtIndexHasClass: vt,
      notifyAction: (pe) => {
        t(26, I = pe), W != null && ge(ae(), "SMUIList:action", { index: pe }, void 0, !0);
      },
      notifySelectionChange: (pe) => {
        W != null && ge(ae(), "SMUIList:selectionChange", { changedIndices: pe });
      },
      removeClassForElementIndex: ve,
      setAttributeForElementIndex: je,
      setCheckedCheckboxOrRadioAtIndex: (pe, Ie) => {
        Be()[pe].checked = Ie;
      },
      setTabIndexForListItemChildren: (pe, Ie) => {
        const it = Be()[pe];
        Array.prototype.forEach.call(it.element.querySelectorAll("button:not(:disabled), a"), (Qn) => {
          Qn.setAttribute("tabindex", Ie);
        });
      }
    }));
    const X = {
      get element() {
        return ae();
      },
      get items() {
        return j;
      },
      get typeaheadInProgress() {
        return N.isTypeaheadInProgress();
      },
      typeaheadMatchItem(pe, Ie) {
        return N.typeaheadMatchItem(
          pe,
          Ie,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Be,
      focusItemAtIndex: Ae,
      addClassForElementIndex: Y,
      removeClassForElementIndex: ve,
      setAttributeForElementIndex: je,
      removeAttributeForElementIndex: Pe,
      getAttributeFromElementIndex: St,
      getPrimaryTextAtIndex: q
    };
    return ge(ae(), "SMUIList:mount", X), N.init(), N.layout(), () => {
      N.destroy();
    };
  }), Qt(() => {
    be && be();
  });
  function Q(X) {
    j.push(X.detail), Z.set(X.detail.element, X.detail), F && X.detail.selected && t(26, I = le(X.detail.element)), X.stopPropagation();
  }
  function ke(X) {
    var pe;
    const Ie = (pe = X.detail && j.indexOf(X.detail)) !== null && pe !== void 0 ? pe : -1;
    Ie !== -1 && (j.splice(Ie, 1), j = j, Z.delete(X.detail.element)), X.stopPropagation();
  }
  function De(X) {
    N && X.target && N.handleKeydown(X, X.target.classList.contains("mdc-deprecated-list-item"), le(X.target));
  }
  function we(X) {
    N && X.target && N.handleFocusIn(le(X.target));
  }
  function ie(X) {
    N && X.target && N.handleFocusOut(le(X.target));
  }
  function K(X) {
    N && X.target && N.handleClick(le(X.target), !u(X.target, 'input[type="checkbox"], input[type="radio"]'), X);
  }
  function Ye(X) {
    if (M || O) {
      const pe = le(X.target);
      if (pe !== -1) {
        const Ie = Be()[pe];
        Ie && (M && !Ie.checked || O) && (u(X.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Ie.checked = !Ie.checked), Ie.activateRipple(), window.requestAnimationFrame(() => {
          Ie.deactivateRipple();
        }));
      }
    }
  }
  function Be() {
    return W == null ? [] : [...ae().children].map((X) => Z.get(X)).filter((X) => X && X._smui_list_item_accessor);
  }
  function vt(X, pe) {
    var Ie;
    const it = Be()[X];
    return (Ie = it && it.hasClass(pe)) !== null && Ie !== void 0 ? Ie : !1;
  }
  function Y(X, pe) {
    const Ie = Be()[X];
    Ie && Ie.addClass(pe);
  }
  function ve(X, pe) {
    const Ie = Be()[X];
    Ie && Ie.removeClass(pe);
  }
  function je(X, pe, Ie) {
    const it = Be()[X];
    it && it.addAttr(pe, Ie);
  }
  function Pe(X, pe) {
    const Ie = Be()[X];
    Ie && Ie.removeAttr(pe);
  }
  function St(X, pe) {
    const Ie = Be()[X];
    return Ie ? Ie.getAttr(pe) : null;
  }
  function q(X) {
    var pe;
    const Ie = Be()[X];
    return (pe = Ie && Ie.getPrimaryText()) !== null && pe !== void 0 ? pe : "";
  }
  function le(X) {
    const pe = o(X, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return pe && u(pe, ".mdc-deprecated-list-item") ? Be().map((Ie) => Ie == null ? void 0 : Ie.element).indexOf(pe) : -1;
  }
  function ee() {
    return N.layout();
  }
  function ze(X, pe) {
    return N.setEnabled(X, pe);
  }
  function ut() {
    return N.isTypeaheadInProgress();
  }
  function ot() {
    return N.getSelectedIndex();
  }
  function xe() {
    return N.getFocusedItemIndex();
  }
  function Ae(X) {
    const pe = Be()[X];
    pe && "focus" in pe.element && pe.element.focus();
  }
  function ae() {
    return W.getElement();
  }
  function jt(X) {
    se[X ? "unshift" : "push"](() => {
      W = X, t(14, W);
    });
  }
  return n.$$set = (X) => {
    e = z(z({}, e), tt(X)), t(25, r = he(e, i)), "use" in X && t(0, f = X.use), "class" in X && t(1, d = X.class), "nonInteractive" in X && t(2, h = X.nonInteractive), "dense" in X && t(3, m = X.dense), "textualList" in X && t(4, _ = X.textualList), "avatarList" in X && t(5, p = X.avatarList), "iconList" in X && t(6, v = X.iconList), "imageList" in X && t(7, b = X.imageList), "thumbnailList" in X && t(8, E = X.thumbnailList), "videoList" in X && t(9, y = X.videoList), "twoLine" in X && t(10, T = X.twoLine), "threeLine" in X && t(11, k = X.threeLine), "vertical" in X && t(27, g = X.vertical), "wrapFocus" in X && t(28, R = X.wrapFocus), "singleSelection" in X && t(29, F = X.singleSelection), "disabledItemsFocusable" in X && t(30, A = X.disabledItemsFocusable), "selectedIndex" in X && t(26, I = X.selectedIndex), "radioList" in X && t(31, M = X.radioList), "checkList" in X && t(32, O = X.checkList), "hasTypeahead" in X && t(33, U = X.hasTypeahead), "component" in X && t(12, Xe = X.component), "tag" in X && t(13, G = X.tag), "$$scope" in X && t(44, a = X.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setVerticalOrientation(g), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setWrapFocus(R), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && N && N.setHasTypeahead(U), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setSingleSelection(F), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setDisabledItemsFocusable(A), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && N && F && ot() !== I && N.setSelectedIndex(I);
  }, [
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    E,
    y,
    T,
    k,
    Xe,
    G,
    W,
    D,
    c,
    Fe,
    Q,
    ke,
    De,
    we,
    ie,
    K,
    Ye,
    r,
    I,
    g,
    R,
    F,
    A,
    M,
    O,
    U,
    ee,
    ze,
    ut,
    ot,
    xe,
    Ae,
    ae,
    N,
    l,
    jt,
    a
  ];
}
class nf extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      tf,
      ef,
      _e,
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
function Vl(n) {
  let e;
  return {
    c() {
      e = ne("span"), w(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function rf(n) {
  let e, t, i = (
    /*ripple*/
    n[7] && Vl()
  );
  const r = (
    /*#slots*/
    n[34].default
  ), l = Te(
    r,
    n,
    /*$$scope*/
    n[37],
    null
  );
  return {
    c() {
      i && i.c(), e = We(), l && l.c();
    },
    m(a, s) {
      i && i.m(a, s), V(a, e, s), l && l.m(a, s), t = !0;
    },
    p(a, s) {
      /*ripple*/
      a[7] ? i || (i = Vl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), l && l.p && (!t || s[1] & /*$$scope*/
      64) && Oe(
        l,
        r,
        a,
        /*$$scope*/
        a[37],
        t ? Le(
          r,
          /*$$scope*/
          a[37],
          s,
          null
        ) : Re(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      t || (C(l, a), t = !0);
    },
    o(a) {
      S(l, a), t = !1;
    },
    d(a) {
      a && B(e), i && i.d(a), l && l.d(a);
    }
  };
}
function lf(n) {
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
            Ot,
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
      ).map(dr).concat([
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
      $$slots: { default: [rf] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = z(u, fe(r, [
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
              Ot,
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
        ).map(dr).concat([
          /*style*/
          s[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && Ce(
        /*nav*/
        s[23] && /*activated*/
        s[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && Ce(!/*nav*/
      s[23] || /*wrapper*/
      s[8] ? { role: (
        /*role*/
        s[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && Ce(!/*nav*/
      s[23] && /*role*/
      s[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          s[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && Ce(!/*nav*/
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
      8389632 && Ce(/*nav*/
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
      1048576 && Ce(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Ce(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[35](e), e.$on(
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
      e && te(e.$$.fragment), t = We();
    },
    m(s, o) {
      e && x(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Ne();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Ue();
        }
        l ? (e = Rt(l, a(s, o)), s[35](e), e.$on(
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
        ), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? fe(r, [
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
                  Ot,
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
            ).map(dr).concat([
              /*style*/
              s[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && Ce(
            /*nav*/
            s[23] && /*activated*/
            s[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && Ce(!/*nav*/
          s[23] || /*wrapper*/
          s[8] ? { role: (
            /*role*/
            s[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && Ce(!/*nav*/
          s[23] && /*role*/
          s[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              s[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && Ce(!/*nav*/
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
          8389632 && Ce(/*nav*/
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
          1048576 && Ce(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Ce(
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
      i || (e && C(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[35](null), e && $(e, s);
    }
  };
}
let sf = 0;
const dr = ([n, e]) => `${n}: ${e};`;
function af(n, e, t) {
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
  let l = he(e, r), { $$slots: a = {}, $$scope: s } = e;
  var o;
  const u = nt(et());
  let c = () => {
  };
  function f(Y) {
    return Y === c;
  }
  let { use: d = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { color: _ = void 0 } = e, { nonInteractive: p = (o = Ge("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  qe("SMUI:list:nonInteractive", void 0);
  let { ripple: v = !p } = e, { wrapper: b = !1 } = e, { activated: E = !1 } = e, { role: y = b ? "presentation" : Ge("SMUI:list:item:role") } = e;
  qe("SMUI:list:item:role", void 0);
  let { selected: T = !1 } = e, { disabled: k = !1 } = e, { skipRestoreFocus: g = !1 } = e, { tabindex: R = c } = e, { inputId: F = "SMUI-form-field-list-" + sf++ } = e, { href: A = void 0 } = e, I, M = {}, O = {}, U = {}, W, N, j = Ge("SMUI:list:item:nav"), { component: D = Nt } = e, { tag: L = D === Nt ? j ? A ? "a" : "span" : "li" : void 0 } = e;
  qe("SMUI:generic:input:props", { id: F }), qe("SMUI:separator:context", void 0), at(() => {
    if (!T && !p) {
      let ve = !0, je = I.getElement();
      for (; je.previousSibling; )
        if (je = je.previousSibling, je.nodeType === 1 && je.classList.contains("mdc-deprecated-list-item") && !je.classList.contains("mdc-deprecated-list-item--disabled")) {
          ve = !1;
          break;
        }
      ve && (N = window.requestAnimationFrame(() => ke(je)));
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ye();
      },
      get selected() {
        return T;
      },
      set selected(ve) {
        t(0, T = ve);
      },
      hasClass: Z,
      addClass: Fe,
      removeClass: Me,
      getAttr: Xe,
      addAttr: G,
      removeAttr: Q,
      getPrimaryText: K,
      // For inputs within item.
      get checked() {
        var ve;
        return (ve = W && W.checked) !== null && ve !== void 0 ? ve : !1;
      },
      set checked(ve) {
        W && t(16, W.checked = !!ve, W);
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
      set tabindex(ve) {
        t(30, R = ve);
      },
      get disabled() {
        return k;
      },
      get activated() {
        return E;
      },
      set activated(ve) {
        t(1, E = ve);
      }
    };
    return ge(Ye(), "SMUIListItem:mount", Y), () => {
      ge(Ye(), "SMUIListItem:unmount", Y);
    };
  }), Qt(() => {
    N && window.cancelAnimationFrame(N);
  });
  function Z(Y) {
    return Y in M ? M[Y] : Ye().classList.contains(Y);
  }
  function Fe(Y) {
    M[Y] || t(18, M[Y] = !0, M);
  }
  function Me(Y) {
    (!(Y in M) || M[Y]) && t(18, M[Y] = !1, M);
  }
  function be(Y, ve) {
    O[Y] != ve && (ve === "" || ve == null ? (delete O[Y], t(19, O)) : t(19, O[Y] = ve, O));
  }
  function Xe(Y) {
    var ve;
    return Y in U ? (ve = U[Y]) !== null && ve !== void 0 ? ve : null : Ye().getAttribute(Y);
  }
  function G(Y, ve) {
    U[Y] !== ve && t(20, U[Y] = ve, U);
  }
  function Q(Y) {
    (!(Y in U) || U[Y] != null) && t(20, U[Y] = void 0, U);
  }
  function ke(Y) {
    let ve = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const je = Y.attributes.getNamedItem("tabindex");
        if (je && je.value === "0") {
          ve = !1;
          break;
        }
      }
    ve && t(21, i = 0);
  }
  function De(Y) {
    const ve = Y.key === "Enter", je = Y.key === "Space";
    (ve || je) && ie(Y);
  }
  function we(Y) {
    ("_smui_checkbox_accessor" in Y.detail || "_smui_radio_accessor" in Y.detail) && t(16, W = Y.detail);
  }
  function ie(Y) {
    k || ge(Ye(), "SMUI:action", Y);
  }
  function K() {
    var Y, ve, je;
    const Pe = Ye(), St = Pe.querySelector(".mdc-deprecated-list-item__primary-text");
    if (St)
      return (Y = St.textContent) !== null && Y !== void 0 ? Y : "";
    const q = Pe.querySelector(".mdc-deprecated-list-item__text");
    return q ? (ve = q.textContent) !== null && ve !== void 0 ? ve : "" : (je = Pe.textContent) !== null && je !== void 0 ? je : "";
  }
  function Ye() {
    return I.getElement();
  }
  function Be(Y) {
    se[Y ? "unshift" : "push"](() => {
      I = Y, t(17, I);
    });
  }
  const vt = () => t(16, W = void 0);
  return n.$$set = (Y) => {
    e = z(z({}, e), tt(Y)), t(29, l = he(e, r)), "use" in Y && t(2, d = Y.use), "class" in Y && t(3, h = Y.class), "style" in Y && t(4, m = Y.style), "color" in Y && t(5, _ = Y.color), "nonInteractive" in Y && t(6, p = Y.nonInteractive), "ripple" in Y && t(7, v = Y.ripple), "wrapper" in Y && t(8, b = Y.wrapper), "activated" in Y && t(1, E = Y.activated), "role" in Y && t(9, y = Y.role), "selected" in Y && t(0, T = Y.selected), "disabled" in Y && t(10, k = Y.disabled), "skipRestoreFocus" in Y && t(11, g = Y.skipRestoreFocus), "tabindex" in Y && t(30, R = Y.tabindex), "inputId" in Y && t(31, F = Y.inputId), "href" in Y && t(12, A = Y.href), "component" in Y && t(13, D = Y.component), "tag" in Y && t(14, L = Y.tag), "$$scope" in Y && t(37, s = Y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, i = f(R) ? !p && !k && (T || W && W.checked) ? 0 : -1 : R);
  }, [
    T,
    E,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    y,
    k,
    g,
    A,
    D,
    L,
    ie,
    W,
    I,
    M,
    O,
    U,
    i,
    u,
    j,
    Fe,
    Me,
    be,
    De,
    we,
    l,
    R,
    F,
    K,
    Ye,
    a,
    Be,
    vt,
    s
  ];
}
class of extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      af,
      lf,
      _e,
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
Tt({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Tt({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Tt({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function uf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[8].default
  ), o = Te(
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
    c = z(c, u[f]);
  return {
    c() {
      e = ne("span"), o && o.c(), ue(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), n[9](e), r = !0, l || (a = [
        ce(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], l = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      128) && Oe(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        r ? Le(
          s,
          /*$$scope*/
          f[7],
          d,
          null
        ) : Re(
          /*$$scope*/
          f[7]
        ),
        null
      ), ue(e, c = fe(u, [
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
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (C(o, f), r = !0);
    },
    o(f) {
      S(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), n[9](null), l = !1, Je(a);
    }
  };
}
function cf(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = Ge("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function h(m) {
    se[m ? "unshift" : "push"](() => {
      c = m, t(2, c);
    });
  }
  return n.$$set = (m) => {
    e = z(z({}, e), tt(m)), t(5, r = he(e, i)), "use" in m && t(0, o = m.use), "class" in m && t(1, u = m.class), "$$scope" in m && t(7, a = m.$$scope);
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
class ff extends Ee {
  constructor(e) {
    super(), ye(this, e, cf, uf, _e, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Tt({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Tt({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Tt({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Tt({
  class: "mdc-menu__selection-group-icon",
  component: ff
});
function df(n) {
  let e;
  return {
    c() {
      e = ct(
        /*content*/
        n[8]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      256 && Ct(
        e,
        /*content*/
        t[8]
      );
    },
    i: Qe,
    o: Qe,
    d(t) {
      t && B(e);
    }
  };
}
function hf(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), i = Te(
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
      4096) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? Le(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function mf(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [hf, df], f = [];
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
    m = z(m, h[_]);
  return {
    c() {
      e = ne("div"), i.c(), ue(e, m);
    },
    m(_, p) {
      V(_, e, p), f[t].m(e, null), n[14](e), s = !0, o || (u = [
        ce(a = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], o = !0);
    },
    p(_, [p]) {
      let v = t;
      t = d(_), t === v ? f[t].p(_, p) : (Ne(), S(f[v], 1, 1, () => {
        f[v] = null;
      }), Ue(), i = f[t], i ? i.p(_, p) : (i = f[t] = c[t](_), i.c()), C(i, 1), i.m(e, null)), ue(e, m = fe(h, [
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
      ])), a && me(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      s || (C(i), s = !0);
    },
    o(_) {
      S(i), s = !1;
    },
    d(_) {
      _ && B(e), f[t].d(), n[14](null), o = !1, Je(u);
    }
  };
}
let pf = 0;
function gf(n, e, t) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + pf++ } = e, { persistent: f = !1 } = e, { validationMsg: d = !1 } = e, h, m, _ = {}, p = {}, v;
  at(() => (m = new Gc({
    addClass: E,
    removeClass: y,
    hasClass: b,
    getAttr: T,
    setAttr: k,
    removeAttr: g,
    setContent: (A) => {
      t(8, v = A);
    }
  }), c.startsWith("SMUI-select-helper-text-") && ge(R(), "SMUISelectHelperText:id", c), ge(R(), "SMUISelectHelperText:mount", m), m.init(), () => {
    ge(R(), "SMUISelectHelperText:unmount", m), m.destroy();
  }));
  function b(A) {
    return A in _ ? _[A] : R().classList.contains(A);
  }
  function E(A) {
    _[A] || t(6, _[A] = !0, _);
  }
  function y(A) {
    (!(A in _) || _[A]) && t(6, _[A] = !1, _);
  }
  function T(A) {
    var I;
    return A in p ? (I = p[A]) !== null && I !== void 0 ? I : null : R().getAttribute(A);
  }
  function k(A, I) {
    p[A] !== I && t(7, p[A] = I, p);
  }
  function g(A) {
    (!(A in p) || p[A] != null) && t(7, p[A] = void 0, p);
  }
  function R() {
    return h;
  }
  function F(A) {
    se[A ? "unshift" : "push"](() => {
      h = A, t(5, h);
    });
  }
  return n.$$set = (A) => {
    e = z(z({}, e), tt(A)), t(10, r = he(e, i)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "id" in A && t(2, c = A.id), "persistent" in A && t(3, f = A.persistent), "validationMsg" in A && t(4, d = A.validationMsg), "$$scope" in A && t(12, a = A.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    _,
    p,
    v,
    s,
    r,
    R,
    a,
    l,
    F
  ];
}
class _f extends Ee {
  constructor(e) {
    super(), ye(this, e, gf, mf, _e, {
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
const bf = (n) => ({}), jl = (n) => ({}), If = (n) => ({}), ql = (n) => ({}), vf = (n) => ({}), Gl = (n) => ({}), Af = (n) => ({}), Kl = (n) => ({});
function Wl(n) {
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
    i = z(i, t[r]);
  return {
    c() {
      e = ne("input"), ue(e, i);
    },
    m(r, l) {
      V(r, e, l), e.autofocus && e.focus();
    },
    p(r, l) {
      ue(e, i = fe(t, [
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
      r && B(e);
    }
  };
}
function zl(n) {
  let e;
  return {
    c() {
      e = ne("span"), w(e, "class", "mdc-select__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Xl(n) {
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
    $$slots: { default: [Cf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ki({ props: r }), n[67](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? fe(i, [
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
        4194304 && Ce(Ve(
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[67](null), $(e, l);
    }
  };
}
function Cf(n) {
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
  ), l = Te(
    r,
    n,
    /*$$scope*/
    n[87],
    Kl
  );
  return {
    c() {
      t = ct(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Oe(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Le(
          r,
          /*$$scope*/
          a[87],
          s,
          Af
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        Kl
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function Yl(n) {
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
    $$slots: { default: [Ef] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ba({ props: r }), n[69](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots, $$restProps*/
      12582912 ? fe(i, [
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
        4194304 && Ce(Ve(
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[69](null), $(e, l);
    }
  };
}
function Zl(n) {
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
    $$slots: { default: [yf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ki({ props: r }), n[68](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? fe(i, [
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
        4194304 && Ce(Ve(
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
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[68](null), $(e, l);
    }
  };
}
function yf(n) {
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
  ), l = Te(
    r,
    n,
    /*$$scope*/
    n[87],
    Gl
  );
  return {
    c() {
      t = ct(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Oe(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Le(
          r,
          /*$$scope*/
          a[87],
          s,
          vf
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        Gl
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function Ef(n) {
  let e, t, i = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[54].label) && Zl(n);
  return {
    c() {
      i && i.c(), e = We();
    },
    m(r, l) {
      i && i.m(r, l), V(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots*/
      8388608 && C(i, 1)) : (i = Zl(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (Ne(), S(i, 1, 1, () => {
        i = null;
      }), Ue());
    },
    i(r) {
      t || (C(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function Ql(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _a({ props: r }), n[70](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? fe(i, [Ce(Ve(
        /*$$restProps*/
        l[53],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[70](null), $(e, l);
    }
  };
}
function Sf(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].default
  ), i = Te(
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
      33554432) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Le(
          t,
          /*$$scope*/
          r[87],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Tf(n) {
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
    $$slots: { default: [Sf] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = z(a, r[s]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    n[24]), e = new nf({ props: a }), se.push(() => It(e, "selectedIndex", l)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      n[76]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(s, o) {
        x(e, s, o), i = !0;
      },
      p(s, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? fe(r, [
          r[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            s[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && Ce(Ve(
            /*$$restProps*/
            s[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        33554432 && (u.$$scope = { dirty: o, ctx: s }), !t && o[0] & /*selectedIndex*/
        16777216 && (t = !0, u.selectedIndex = /*selectedIndex*/
        s[24], bt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (C(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
      },
      d(s) {
        $(e, s);
      }
    }
  );
}
function Jl(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [Lf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _f({ props: r }), e.$on(
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
      x(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? fe(i, [Ce(Ve(
        /*$$restProps*/
        l[53],
        "helperText$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      $(e, l);
    }
  };
}
function Lf(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].helperText
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    jl
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
      33554432) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Le(
          t,
          /*$$scope*/
          r[87],
          l,
          bf
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        jl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Of(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, v, b, E, y, T, k, g, R, F, A, I, M, O, U, W, N, j, D, L, Z, Fe, Me, be, Xe, G, Q = (
    /*hiddenInput*/
    n[12] && Wl(n)
  ), ke = (
    /*variant*/
    n[7] === "filled" && zl()
  ), De = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[54].label) && Xl(n)
  ), we = (
    /*variant*/
    n[7] === "outlined" && Yl(n)
  );
  const ie = (
    /*#slots*/
    n[64].leadingIcon
  ), K = Te(
    ie,
    n,
    /*$$scope*/
    n[87],
    ql
  );
  let Ye = [
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
  for (let Ae = 0; Ae < Ye.length; Ae += 1)
    Be = z(Be, Ye[Ae]);
  let vt = [
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
  ], Y = {};
  for (let Ae = 0; Ae < vt.length; Ae += 1)
    Y = z(Y, vt[Ae]);
  let ve = [
    {
      class: k = re({
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
  for (let Ae = 0; Ae < ve.length; Ae += 1)
    je = z(je, ve[Ae]);
  let Pe = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && Ql(n)
  ), St = [
    {
      class: F = re({
        [
          /*anchor$class*/
          n[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": A = /*required*/
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
      "aria-expanded": M = /*menuOpen*/
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
  ], q = {};
  for (let Ae = 0; Ae < St.length; Ae += 1)
    q = z(q, St[Ae]);
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
  function ee(Ae) {
    n[77](Ae);
  }
  let ze = {
    $$slots: { default: [Tf] },
    $$scope: { ctx: n }
  };
  for (let Ae = 0; Ae < le.length; Ae += 1)
    ze = z(ze, le[Ae]);
  /*menuOpen*/
  n[31] !== void 0 && (ze.open = /*menuOpen*/
  n[31]), W = new xc({ props: ze }), se.push(() => It(W, "open", ee)), W.$on(
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
  let ut = [
    {
      class: j = re({
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
      style: D = Object.entries(
        /*internalStyles*/
        n[27]
      ).map(xl).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    Zt(
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
  for (let Ae = 0; Ae < ut.length; Ae += 1)
    ot = z(ot, ut[Ae]);
  let xe = (
    /*$$slots*/
    n[54].helperText && Jl(n)
  );
  return {
    c() {
      e = ne("div"), Q && Q.c(), t = oe(), i = ne("div"), ke && ke.c(), r = oe(), De && De.c(), l = oe(), we && we.c(), a = oe(), K && K.c(), s = oe(), o = ne("span"), u = ne("span"), c = ct(
        /*$selectedTextStore*/
        n[42]
      ), v = oe(), b = ne("span"), E = lt("svg"), y = lt("polygon"), T = lt("polygon"), R = oe(), Pe && Pe.c(), U = oe(), te(W.$$.fragment), Fe = oe(), xe && xe.c(), Me = We(), ue(u, Be), ue(o, Y), w(y, "class", "mdc-select__dropdown-icon-inactive"), w(y, "stroke", "none"), w(y, "fill-rule", "evenodd"), w(y, "points", "7 10 12 15 17 10"), w(T, "class", "mdc-select__dropdown-icon-active"), w(T, "stroke", "none"), w(T, "fill-rule", "evenodd"), w(T, "points", "7 15 12 10 17 15"), w(E, "class", "mdc-select__dropdown-icon-graphic"), w(E, "viewBox", "7 10 10 5"), w(E, "focusable", "false"), ue(b, je), ue(i, q), ue(e, ot);
    },
    m(Ae, ae) {
      V(Ae, e, ae), Q && Q.m(e, null), J(e, t), J(e, i), ke && ke.m(i, null), J(i, r), De && De.m(i, null), J(i, l), we && we.m(i, null), J(i, a), K && K.m(i, null), J(i, s), J(i, o), J(o, u), J(u, c), J(i, v), J(i, b), J(b, E), J(E, y), J(E, T), J(i, R), Pe && Pe.m(i, null), n[71](i), J(e, U), x(W, e, null), n[82](e), V(Ae, Fe, ae), xe && xe.m(Ae, ae), V(Ae, Me, ae), be = !0, Xe || (G = [
        ce(m = $e.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        ce(p = $e.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        ce(g = $e.call(
          null,
          b,
          /*dropdownIcon$use*/
          n[20]
        )),
        ce(O = $e.call(
          null,
          i,
          /*anchor$use*/
          n[14]
        )),
        de(
          i,
          "focus",
          /*focus_handler_1*/
          n[72]
        ),
        de(
          i,
          "blur",
          /*blur_handler_1*/
          n[73]
        ),
        de(
          i,
          "click",
          /*click_handler*/
          n[74]
        ),
        de(i, "keydown", function() {
          me(
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
        de(
          i,
          "focus",
          /*focus_handler*/
          n[65]
        ),
        de(
          i,
          "blur",
          /*blur_handler*/
          n[66]
        ),
        ce(L = Ot.call(null, e, {
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
        ce(Yc.call(null, e, {
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          )
        })),
        ce(Z = $e.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ce(
          /*forwardEvents*/
          n[43].call(null, e)
        ),
        de(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[49]
        ),
        de(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          n[83]
        )
      ], Xe = !0);
    },
    p(Ae, ae) {
      n = Ae, /*hiddenInput*/
      n[12] ? Q ? Q.p(n, ae) : (Q = Wl(n), Q.c(), Q.m(e, t)) : Q && (Q.d(1), Q = null), /*variant*/
      n[7] === "filled" ? ke || (ke = zl(), ke.c(), ke.m(i, r)) : ke && (ke.d(1), ke = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[54].label) ? De ? (De.p(n, ae), ae[0] & /*variant, noLabel, label*/
      896 | ae[1] & /*$$slots*/
      8388608 && C(De, 1)) : (De = Xl(n), De.c(), C(De, 1), De.m(i, l)) : De && (Ne(), S(De, 1, 1, () => {
        De = null;
      }), Ue()), /*variant*/
      n[7] === "outlined" ? we ? (we.p(n, ae), ae[0] & /*variant*/
      128 && C(we, 1)) : (we = Yl(n), we.c(), C(we, 1), we.m(i, a)) : we && (Ne(), S(we, 1, 1, () => {
        we = null;
      }), Ue()), K && K.p && (!be || ae[2] & /*$$scope*/
      33554432) && Oe(
        K,
        ie,
        n,
        /*$$scope*/
        n[87],
        be ? Le(
          ie,
          /*$$scope*/
          n[87],
          ae,
          If
        ) : Re(
          /*$$scope*/
          n[87]
        ),
        ql
      ), (!be || ae[1] & /*$selectedTextStore*/
      2048) && co(
        c,
        /*$selectedTextStore*/
        n[42],
        Be.contenteditable
      ), ue(u, Be = fe(Ye, [
        (!be || ae[0] & /*inputId*/
        2048 && f !== (f = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: f },
        (!be || ae[0] & /*selectedText$class*/
        524288 && d !== (d = re({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: d },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!be || ae[0] & /*inputId*/
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
      ])), m && me(m.update) && ae[0] & /*selectedText$use*/
      262144 && m.update.call(
        null,
        /*selectedText$use*/
        n[18]
      ), ue(o, Y = fe(vt, [
        (!be || ae[0] & /*selectedTextContainer$class*/
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
      ])), p && me(p.update) && ae[0] & /*selectedTextContainer$use*/
      65536 && p.update.call(
        null,
        /*selectedTextContainer$use*/
        n[16]
      ), ue(b, je = fe(ve, [
        (!be || ae[0] & /*dropdownIcon$class*/
        2097152 && k !== (k = re({
          [
            /*dropdownIcon$class*/
            n[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: k },
        ae[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          n[53],
          "dropdownIcon$"
        )
      ])), g && me(g.update) && ae[0] & /*dropdownIcon$use*/
      1048576 && g.update.call(
        null,
        /*dropdownIcon$use*/
        n[20]
      ), /*variant*/
      n[7] !== "outlined" && /*ripple*/
      n[5] ? Pe ? (Pe.p(n, ae), ae[0] & /*variant, ripple*/
      160 && C(Pe, 1)) : (Pe = Ql(n), Pe.c(), C(Pe, 1), Pe.m(i, null)) : Pe && (Ne(), S(Pe, 1, 1, () => {
        Pe = null;
      }), Ue()), ue(i, q = fe(St, [
        (!be || ae[0] & /*anchor$class*/
        32768 && F !== (F = re({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: F },
        (!be || ae[0] & /*required*/
        1024 && A !== (A = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": A
        },
        (!be || ae[0] & /*disabled*/
        64 && I !== (I = /*disabled*/
        n[6] ? "true" : void 0)) && {
          "aria-disabled": I
        },
        { "aria-controls": (
          /*menuId*/
          n[45]
        ) },
        (!be || ae[1] & /*menuOpen*/
        1 && M !== (M = /*menuOpen*/
        n[31] ? "true" : "false")) && {
          "aria-expanded": M
        },
        (!be || ae[0] & /*helperId*/
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
      ])), O && me(O.update) && ae[0] & /*anchor$use*/
      16384 && O.update.call(
        null,
        /*anchor$use*/
        n[14]
      );
      const jt = ae[0] & /*menu$class*/
      4194304 | ae[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? fe(le, [
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
        4194304 && Ce(Ve(
          /*$$restProps*/
          n[53],
          "menu$"
        ))
      ]) : {};
      ae[0] & /*selectedIndex*/
      16777216 | ae[1] & /*wrapFocus, $$restProps, list*/
      4194352 | ae[2] & /*$$scope*/
      33554432 && (jt.$$scope = { dirty: ae, ctx: n }), !N && ae[1] & /*menuOpen*/
      1 && (N = !0, jt.open = /*menuOpen*/
      n[31], bt(() => N = !1)), W.$set(jt), ue(e, ot = fe(ut, [
        (!be || ae[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | ae[1] & /*$$slots, menuOpen*/
        8388609 && j !== (j = re({
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
        }))) && { class: j },
        (!be || ae[0] & /*internalStyles, style*/
        134217744 && D !== (D = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(xl).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: D },
        ae[1] & /*$$restProps*/
        4194304 && Zt(
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
      ])), L && me(L.update) && ae[0] & /*variant*/
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
      }), Z && me(Z.update) && ae[0] & /*use*/
      4 && Z.update.call(
        null,
        /*use*/
        n[2]
      ), /*$$slots*/
      n[54].helperText ? xe ? (xe.p(n, ae), ae[1] & /*$$slots*/
      8388608 && C(xe, 1)) : (xe = Jl(n), xe.c(), C(xe, 1), xe.m(Me.parentNode, Me)) : xe && (Ne(), S(xe, 1, 1, () => {
        xe = null;
      }), Ue());
    },
    i(Ae) {
      be || (C(De), C(we), C(K, Ae), C(Pe), C(W.$$.fragment, Ae), C(xe), be = !0);
    },
    o(Ae) {
      S(De), S(we), S(K, Ae), S(Pe), S(W.$$.fragment, Ae), S(xe), be = !1;
    },
    d(Ae) {
      Ae && (B(e), B(Fe), B(Me)), Q && Q.d(), ke && ke.d(), De && De.d(), we && we.d(), K && K.d(Ae), Pe && Pe.d(), n[71](null), $(W), n[82](null), xe && xe.d(Ae), Xe = !1, Je(G);
    }
  };
}
let Rf = 0;
function kf(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (Df(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function Df(n) {
  return "touches" in n;
}
const xl = ([n, e]) => `${n}: ${e};`;
function Mf(n, e, t) {
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
  let r = he(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = kr(s);
  var c;
  const f = nt(et());
  let d = () => {
  };
  function h(H) {
    return H === d;
  }
  let { use: m = [] } = e, { class: _ = "" } = e, { style: p = "" } = e, { ripple: v = !0 } = e, { disabled: b = !1 } = e, { variant: E = "standard" } = e, { noLabel: y = !1 } = e, { label: T = void 0 } = e, { value: k = "" } = e, { key: g = (H) => H } = e, { dirty: R = !1 } = e, { invalid: F = d } = e, { updateInvalid: A = h(F) } = e;
  const I = h(F);
  h(F) && (F = !1);
  let { required: M = !1 } = e, { inputId: O = "SMUI-select-" + Rf++ } = e, { hiddenInput: U = !1 } = e, { withLeadingIcon: W = d } = e, { anchor$use: N = [] } = e, { anchor$class: j = "" } = e, { selectedTextContainer$use: D = [] } = e, { selectedTextContainer$class: L = "" } = e, { selectedText$use: Z = [] } = e, { selectedText$class: Fe = "" } = e, { dropdownIcon$use: Me = [] } = e, { dropdownIcon$class: be = "" } = e, { menu$class: Xe = "" } = e, G, Q, ke = {}, De = {}, we, ie = {}, K = -1, Ye = (c = r.menu$id) !== null && c !== void 0 ? c : O + "-menu", Be, vt = Ge("SMUI:addLayoutListener"), Y, ve = !1, je = {}, Pe, St, q = !1, le, ee = Ge("SMUI:select:context"), ze, ut, ot, xe, Ae;
  qe("SMUI:list:role", ""), qe("SMUI:list:nav", !1);
  const ae = At("");
  rt(n, ae, (H) => t(42, l = H)), qe("SMUI:select:selectedText", ae);
  const jt = At(k);
  rt(n, jt, (H) => t(90, a = H)), qe("SMUI:select:value", jt);
  let X = K;
  vt && (Y = vt(mi)), at(() => (t(23, Q = new qc(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (H) => {
        Bt(ae, l = H, l);
      },
      isSelectAnchorFocused: () => document.activeElement === we,
      getSelectAnchorAttr: Pi,
      setSelectAnchorAttr: Hi,
      removeSelectAnchorAttr: Bi,
      addMenuClass: Ui,
      removeMenuClass: wi,
      openMenu: () => {
        t(31, ve = !0);
      },
      closeMenu: () => {
        t(31, ve = !1);
      },
      getAnchorElement: () => we,
      setMenuAnchorElement: (H) => {
        t(33, Pe = H);
      },
      setMenuAnchorCorner: (H) => {
        t(34, St = H);
      },
      setMenuWrapFocus: (H) => {
        t(35, q = H);
      },
      getSelectedIndex: () => K,
      setSelectedIndex: (H) => {
        t(63, X = H), t(24, K = H), t(0, k = Ln()[K]);
      },
      focusMenuItemAtIndex: (H) => {
        le.focusItemAtIndex(H);
      },
      getMenuItemCount: () => le.items.length,
      getMenuItemValues: () => Ln().map(g),
      getMenuItemTextAtIndex: (H) => le.getPrimaryTextAtIndex(H),
      isTypeaheadInProgress: () => le.typeaheadInProgress,
      typeaheadMatchItem: (H, wt) => le.typeaheadMatchItem(H, wt),
      // getCommonAdapterMethods
      addClass: it,
      removeClass: Jt,
      hasClass: Ie,
      setRippleCenter: (H) => xe && xe.setRippleCenter(H),
      activateBottomLine: () => xe && xe.activate(),
      deactivateBottomLine: () => xe && xe.deactivate(),
      notifyChange: (H) => {
        t(55, R = !0), A && t(1, F = !Q.isValid()), ge(On(), "SMUISelect:change", { value: k, index: K }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!Ae,
      notchOutline: (H) => Ae && Ae.notch(H),
      closeOutline: () => Ae && Ae.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!ot,
      floatLabel: (H) => ot && ot.float(H),
      getLabelWidth: () => ot ? ot.getWidth() : 0,
      setLabelRequired: (H) => ot && ot.setRequired(H)
    },
    {
      get helperText() {
        return ut;
      },
      get leadingIcon() {
        return ze;
      }
    }
  )), t(24, K = Ln().indexOf(k)), Q.init(), hi(I), () => {
    Q.destroy();
  })), Qt(() => {
    Y && Y();
  });
  function pe(H) {
    t(37, ze = H.detail);
  }
  function Ie(H) {
    return H in ke ? ke[H] : On().classList.contains(H);
  }
  function it(H) {
    ke[H] || t(26, ke[H] = !0, ke);
  }
  function Jt(H) {
    (!(H in ke) || ke[H]) && t(26, ke[H] = !1, ke);
  }
  function Qn(H, wt) {
    De[H] != wt && (wt === "" || wt == null ? (delete De[H], t(27, De)) : t(27, De[H] = wt, De));
  }
  function Ui(H) {
    je[H] || t(32, je[H] = !0, je);
  }
  function wi(H) {
    (!(H in je) || je[H]) && t(32, je[H] = !1, je);
  }
  function Pi(H) {
    var wt;
    return H in ie ? (wt = ie[H]) !== null && wt !== void 0 ? wt : null : On().getAttribute(H);
  }
  function Hi(H, wt) {
    ie[H] !== wt && t(29, ie[H] = wt, ie);
  }
  function Bi(H) {
    (!(H in ie) || ie[H] != null) && t(29, ie[H] = void 0, ie);
  }
  function Ln() {
    return le.getOrderedList().map((H) => H.getValue());
  }
  function Vi() {
    return Q.getUseDefaultValidation();
  }
  function hi(H) {
    Q.setUseDefaultValidation(H);
  }
  function ji() {
    we.focus();
  }
  function mi() {
    Q.layout();
  }
  function On() {
    return G;
  }
  function qi(H) {
    Yn.call(this, n, H);
  }
  function Gi(H) {
    Yn.call(this, n, H);
  }
  function Ki(H) {
    se[H ? "unshift" : "push"](() => {
      ot = H, t(39, ot);
    });
  }
  function Wi(H) {
    se[H ? "unshift" : "push"](() => {
      ot = H, t(39, ot);
    });
  }
  function zi(H) {
    se[H ? "unshift" : "push"](() => {
      Ae = H, t(41, Ae);
    });
  }
  function Xi(H) {
    se[H ? "unshift" : "push"](() => {
      xe = H, t(40, xe);
    });
  }
  function Yi(H) {
    se[H ? "unshift" : "push"](() => {
      we = H, t(28, we);
    });
  }
  const Zi = () => Q && Q.handleFocus(), Qi = () => Q && Q.handleBlur(), Ji = (H) => {
    we.focus(), Q && Q.handleClick(kf(H));
  };
  function xi(H) {
    K = H, t(24, K);
  }
  const $i = (H) => t(36, le = H.detail);
  function er(H) {
    ve = H, t(31, ve);
  }
  const tr = (H) => Q && Q.handleMenuItemAction(H.detail.index), nr = () => Q && Q.handleMenuClosing(), P = () => Q && Q.handleMenuClosed(), dt = () => Q && Q.handleMenuOpened();
  function pi(H) {
    se[H ? "unshift" : "push"](() => {
      G = H, t(25, G);
    });
  }
  const ir = () => t(37, ze = void 0), Jn = (H) => t(30, Be = H.detail), xn = (H) => t(38, ut = H.detail), $a = () => {
    t(30, Be = void 0), t(38, ut = void 0);
  };
  return n.$$set = (H) => {
    e = z(z({}, e), tt(H)), t(53, r = he(e, i)), "use" in H && t(2, m = H.use), "class" in H && t(3, _ = H.class), "style" in H && t(4, p = H.style), "ripple" in H && t(5, v = H.ripple), "disabled" in H && t(6, b = H.disabled), "variant" in H && t(7, E = H.variant), "noLabel" in H && t(8, y = H.noLabel), "label" in H && t(9, T = H.label), "value" in H && t(0, k = H.value), "key" in H && t(56, g = H.key), "dirty" in H && t(55, R = H.dirty), "invalid" in H && t(1, F = H.invalid), "updateInvalid" in H && t(57, A = H.updateInvalid), "required" in H && t(10, M = H.required), "inputId" in H && t(11, O = H.inputId), "hiddenInput" in H && t(12, U = H.hiddenInput), "withLeadingIcon" in H && t(13, W = H.withLeadingIcon), "anchor$use" in H && t(14, N = H.anchor$use), "anchor$class" in H && t(15, j = H.anchor$class), "selectedTextContainer$use" in H && t(16, D = H.selectedTextContainer$use), "selectedTextContainer$class" in H && t(17, L = H.selectedTextContainer$class), "selectedText$use" in H && t(18, Z = H.selectedText$use), "selectedText$class" in H && t(19, Fe = H.selectedText$class), "dropdownIcon$use" in H && t(20, Me = H.dropdownIcon$use), "dropdownIcon$class" in H && t(21, be = H.dropdownIcon$class), "menu$class" in H && t(22, Xe = H.menu$class), "$$scope" in H && t(87, o = H.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    2 && X !== K)
      if (t(63, X = K), Q)
        Q.setSelectedIndex(
          K,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const H = Ln();
        k !== H[K] && t(0, k = H[K]);
      }
    n.$$.dirty[0] & /*value*/
    1 && Bt(jt, a = k, a), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    33554432 && Q && Q.getValue() !== g(k) && Q.setValue(g(k)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && Q && Q.getDisabled() !== b && Q.setDisabled(b), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && Q && R && Q.isValid() !== !F && (A ? t(1, F = !Q.isValid()) : Q.setValid(!F)), n.$$.dirty[0] & /*instance, required*/
    8389632 && Q && Q.getRequired() !== M && Q.setRequired(M);
  }, [
    k,
    F,
    m,
    _,
    p,
    v,
    b,
    E,
    y,
    T,
    M,
    O,
    U,
    W,
    N,
    j,
    D,
    L,
    Z,
    Fe,
    Me,
    be,
    Xe,
    Q,
    K,
    G,
    ke,
    De,
    we,
    ie,
    Be,
    ve,
    je,
    Pe,
    St,
    q,
    le,
    ze,
    ut,
    ot,
    xe,
    Ae,
    l,
    f,
    h,
    Ye,
    ee,
    ae,
    jt,
    pe,
    it,
    Jt,
    Qn,
    r,
    u,
    R,
    g,
    A,
    Vi,
    hi,
    ji,
    mi,
    On,
    X,
    s,
    qi,
    Gi,
    Ki,
    Wi,
    zi,
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
    P,
    dt,
    pi,
    ir,
    Jn,
    xn,
    $a,
    o
  ];
}
class Ff extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      Mf,
      Of,
      _e,
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
function Nf(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Te(
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
      8192) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? Le(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Uf(n) {
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
    $$slots: { default: [Nf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new of({ props: r }), n[12](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), t = !0;
    },
    p(l, [a]) {
      const s = a & /*usePass, value, selected, $$restProps*/
      77 ? fe(i, [
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
        64 && Ce(
          /*$$restProps*/
          l[6]
        )
      ]) : {};
      a & /*$$scope*/
      8192 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[12](null), $(e, l);
    }
  };
}
function wf(n, e, t) {
  let i, r;
  const l = ["use", "class", "value", "getElement"];
  let a = he(e, l), s, o, { $$slots: u = {}, $$scope: c } = e;
  const f = nt(et());
  let { use: d = [] } = e;
  const h = "";
  let { value: m = "" } = e, _;
  const p = Ge("SMUI:select:selectedText");
  rt(n, p, (T) => t(14, s = T));
  const v = Ge("SMUI:select:value");
  rt(n, v, (T) => t(10, o = T)), qe("SMUI:list:item:role", "option"), at(b), Qt(b);
  function b() {
    r && _ && Bt(p, s = _.getPrimaryText(), s);
  }
  function E() {
    return _.getElement();
  }
  function y(T) {
    se[T ? "unshift" : "push"](() => {
      _ = T, t(1, _);
    });
  }
  return n.$$set = (T) => {
    e = z(z({}, e), tt(T)), t(6, a = he(e, l)), "use" in T && t(7, d = T.use), "value" in T && t(0, m = T.value), "$$scope" in T && t(13, c = T.$$scope);
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
    v,
    a,
    d,
    h,
    E,
    o,
    u,
    y,
    c
  ];
}
class Pf extends Ee {
  constructor(e) {
    super(), ye(this, e, wf, Uf, _e, {
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
function $l(n, e, t) {
  const i = n.slice();
  return i[11] = e[t], i[13] = t, i;
}
function Hf(n) {
  let e = (
    /*d*/
    n[11].label + ""
  ), t;
  return {
    c() {
      t = ct(e);
    },
    m(i, r) {
      V(i, t, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && Ct(t, e);
    },
    d(i) {
      i && B(t);
    }
  };
}
function es(n) {
  let e, t;
  return e = new Pf({
    props: {
      value: (
        /*d*/
        n[11].value
      ),
      $$slots: { default: [Hf] },
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
      x(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*data*/
      2 && (l.value = /*d*/
      i[11].value), r & /*$$scope, data*/
      16386 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Bf(n) {
  let e, t, i = kt(
    /*data*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = es($l(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = We();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      V(a, e, s), t = !0;
    },
    p(a, s) {
      if (s & /*data, setSelectedIndex*/
      34) {
        i = kt(
          /*data*/
          a[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = $l(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = es(u), r[o].c(), C(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ne(), o = i.length; o < r.length; o += 1)
          l(o);
        Ue();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          C(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && B(e), Dr(r, a);
    }
  };
}
function Vf(n) {
  let e, t, i;
  function r(a) {
    n[10](a);
  }
  let l = {
    disabled: (
      /*disabled*/
      n[4]
    ),
    key: jf,
    label: (
      /*label*/
      n[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      n[3]
    ),
    $$slots: { default: [Bf] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Ff({ props: l }), se.push(() => It(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        x(e, a, s), i = !0;
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
        a[0], bt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
const jf = (n) => `${n ?? ""}`;
function qf(n, e, t) {
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
class ya extends Ee {
  constructor(e) {
    super(), ye(this, e, qf, Vf, _e, {
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
Tt({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Tt({
  class: "mdc-dialog__title",
  tag: "h2"
});
Tt({
  class: "mdc-dialog__content",
  tag: "div"
});
Tt({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
function ts(n) {
  let e, t, i, r, l, a;
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("div"), r = oe(), l = ne("span"), a = ct(
        /*message*/
        n[1]
      ), w(i, "class", "loading-spinner svelte-quxj5m"), w(l, "class", "loading-message svelte-quxj5m"), w(t, "class", "loading-spinner-container svelte-quxj5m"), w(e, "class", "overlay svelte-quxj5m");
    },
    m(s, o) {
      V(s, e, o), J(e, t), J(t, i), J(t, r), J(t, l), J(l, a);
    },
    p(s, o) {
      o & /*message*/
      2 && Ct(
        a,
        /*message*/
        s[1]
      );
    },
    d(s) {
      s && B(e);
    }
  };
}
function Gf(n) {
  let e, t = !/*loadingDone*/
  n[0] && ts(n);
  return {
    c() {
      e = ne("div"), t && t.c();
    },
    m(i, r) {
      V(i, e, r), t && t.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? t && (t.d(1), t = null) : t ? t.p(i, r) : (t = ts(i), t.c(), t.m(e, null));
    },
    i: Qe,
    o: Qe,
    d(i) {
      i && B(e), t && t.d();
    }
  };
}
function Kf(n, e, t) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return n.$$set = (l) => {
    "loadingDone" in l && t(0, i = l.loadingDone), "message" in l && t(1, r = l.message);
  }, [i, r];
}
class Wf extends Ee {
  constructor(e) {
    super(), ye(this, e, Kf, Gf, _e, { loadingDone: 0, message: 1 });
  }
}
function zf(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = ne("div"), t = ne("input"), i = oe(), r = ne("label"), l = ct(
        /*label*/
        n[1]
      ), a = oe(), s = ne("span"), w(t, "type", "datetime-local"), w(t, "id", "datetime-picker"), w(t, "class", "custom-text-field__input svelte-ar6zwk"), w(t, "placeholder", ""), w(r, "for", "datetime-picker"), w(r, "class", "custom-floating-label svelte-ar6zwk"), w(s, "class", "custom-line svelte-ar6zwk"), w(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      V(c, e, f), J(e, t), fn(
        t,
        /*value*/
        n[0]
      ), J(e, i), J(e, r), J(r, l), J(e, a), J(e, s), o || (u = [
        de(
          t,
          "input",
          /*input_input_handler*/
          n[3]
        ),
        de(
          t,
          "change",
          /*handleDateTimeChange*/
          n[2]
        )
      ], o = !0);
    },
    p(c, [f]) {
      f & /*value*/
      1 && fn(
        t,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && Ct(
        l,
        /*label*/
        c[1]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && B(e), o = !1, Je(u);
    }
  };
}
function Xf(n, e, t) {
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
class Yf extends Ee {
  constructor(e) {
    super(), ye(this, e, Xf, zf, _e, { label: 1, value: 0 });
  }
}
function Zf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[12].default
  ), o = Te(
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
    c = z(c, u[f]);
  return {
    c() {
      e = ne("div"), o && o.c(), ue(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), n[13](e), r = !0, l || (a = [
        ce(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[8].call(null, e)
        )
      ], l = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      2048) && Oe(
        o,
        s,
        f,
        /*$$scope*/
        f[11],
        r ? Le(
          s,
          /*$$scope*/
          f[11],
          d,
          null
        ) : Re(
          /*$$scope*/
          f[11]
        ),
        null
      ), ue(e, c = fe(u, [
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
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (C(o, f), r = !0);
    },
    o(f) {
      S(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), n[13](null), l = !1, Je(a);
    }
  };
}
function Qf(n, e, t) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: f = !1 } = e, { color: d = "default" } = e, { elevation: h = 1 } = e, { transition: m = !1 } = e, _;
  function p() {
    return _;
  }
  function v(b) {
    se[b ? "unshift" : "push"](() => {
      _ = b, t(7, _);
    });
  }
  return n.$$set = (b) => {
    e = z(z({}, e), tt(b)), t(9, r = he(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "variant" in b && t(2, c = b.variant), "square" in b && t(3, f = b.square), "color" in b && t(4, d = b.color), "elevation" in b && t(5, h = b.elevation), "transition" in b && t(6, m = b.transition), "$$scope" in b && t(11, a = b.$$scope);
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
    v
  ];
}
class Ea extends Ee {
  constructor(e) {
    super(), ye(this, e, Qf, Zf, _e, {
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
Tt({
  class: "smui-paper__content",
  tag: "div"
});
Tt({
  class: "smui-paper__title",
  tag: "h5"
});
Tt({
  class: "smui-paper__subtitle",
  tag: "h6"
});
const Jf = (n) => ({}), ns = (n) => ({});
function xf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[2].content
  ), o = Te(
    s,
    n,
    /*$$scope*/
    n[3],
    ns
  );
  return {
    c() {
      e = ne("details"), t = ne("summary"), i = ct(
        /*title*/
        n[0]
      ), r = oe(), l = ne("div"), o && o.c(), w(t, "class", "svelte-l05fgd"), w(l, "class", "expandable-content svelte-l05fgd"), e.open = /*open*/
      n[1], w(e, "class", "svelte-l05fgd");
    },
    m(u, c) {
      V(u, e, c), J(e, t), J(t, i), J(e, r), J(e, l), o && o.m(l, null), a = !0;
    },
    p(u, c) {
      (!a || c & /*title*/
      1) && Ct(
        i,
        /*title*/
        u[0]
      ), o && o.p && (!a || c & /*$$scope*/
      8) && Oe(
        o,
        s,
        u,
        /*$$scope*/
        u[3],
        a ? Le(
          s,
          /*$$scope*/
          u[3],
          c,
          Jf
        ) : Re(
          /*$$scope*/
          u[3]
        ),
        ns
      ), (!a || c & /*open*/
      2) && (e.open = /*open*/
      u[1]);
    },
    i(u) {
      a || (C(o, u), a = !0);
    },
    o(u) {
      S(o, u), a = !1;
    },
    d(u) {
      u && B(e), o && o.d(u);
    }
  };
}
function $f(n) {
  let e, t;
  return e = new Ea({
    props: {
      $$slots: { default: [xf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, open, title*/
      11 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function ed(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { title: l = "" } = e, { open: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title), "open" in s && t(1, a = s.open), "$$scope" in s && t(3, r = s.$$scope);
  }, [l, a, i, r];
}
class Sa extends Ee {
  constructor(e) {
    super(), ye(this, e, ed, $f, _e, { title: 0, open: 1 });
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
var Pt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, zt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ti = {
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
var td = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zt;
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
      this.determinate = !this.adapter.hasClass(Pt.INDETERMINATE_CLASS), this.adapter.addClass(Pt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, l;
        if (!t.determinate)
          try {
            for (var a = yt(i), s = a.next(); !s.done; s = a.next()) {
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
        this.adapter.removeClass(Pt.INDETERMINATE_CLASS), this.adapter.setAttribute(zt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(zt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(zt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Pt.INDETERMINATE_CLASS), this.adapter.removeAttribute(zt.ARIA_VALUENOW), this.adapter.removeAttribute(zt.ARIA_VALUEMAX), this.adapter.removeAttribute(zt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(t) {
      this.progress = t, this.determinate && (this.setPrimaryBarProgress(t), this.adapter.setAttribute(zt.ARIA_VALUENOW, t.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(t) {
      this.buffer = t, this.determinate && this.setBufferBarProgress(t);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(Pt.CLOSED_CLASS), this.adapter.removeClass(Pt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(zt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(Pt.CLOSED_CLASS), this.adapter.setAttribute(zt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(Pt.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Pt.CLOSED_CLASS) && this.adapter.addClass(Pt.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(Pt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Pt.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(t) {
      var i = "scaleX(" + t + ")", r = typeof window < "u" ? Bc(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(t) {
      var i = t * 100 + "%";
      this.adapter.setBufferBarStyle(zt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(t) {
      var i = t * ti.PRIMARY_HALF, r = t * ti.PRIMARY_FULL, l = t * ti.SECONDARY_QUARTER, a = t * ti.SECONDARY_HALF, s = t * ti.SECONDARY_FULL;
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
var tn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, is = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, vn = {
  ARIA_SELECTED: is.ARIA_SELECTED,
  ARIA_SORT: is.ARIA_SORT
}, Ht;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Ht || (Ht = {}));
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
var nd = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      return n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
      return Fr(this, void 0, void 0, function() {
        return Nr(this, function(t) {
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
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, tn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, tn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, vn.ARIA_SORT, Ht.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Ht.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, tn.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(r, vn.ARIA_SORT), o = Ht.NONE;
      s === Ht.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, tn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, vn.ARIA_SORT, Ht.DESCENDING), o = Ht.DESCENDING) : s === Ht.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, tn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, vn.ARIA_SORT, Ht.ASCENDING), o = Ht.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, vn.ARIA_SORT, Ht.ASCENDING), o = Ht.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(tn.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(tn.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, i) {
      i ? (this.adapter.addClassAtRowIndex(t, tn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, vn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, tn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, vn.ARIA_SELECTED, "false"));
    }, e;
  }(Et)
);
const id = (n) => ({}), rs = (n) => ({}), rd = (n) => ({}), ls = (n) => ({});
function ss(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[36].progress
  ), s = Te(
    a,
    n,
    /*$$scope*/
    n[35],
    ls
  );
  return {
    c() {
      e = ne("div"), t = ne("div"), i = oe(), s && s.c(), w(t, "class", "mdc-data-table__scrim"), w(e, "class", "mdc-data-table__progress-indicator"), w(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(as).join(" "));
    },
    m(o, u) {
      V(o, e, u), J(e, t), J(e, i), s && s.m(e, null), l = !0;
    },
    p(o, u) {
      s && s.p && (!l || u[1] & /*$$scope*/
      16) && Oe(
        s,
        a,
        o,
        /*$$scope*/
        o[35],
        l ? Le(
          a,
          /*$$scope*/
          o[35],
          u,
          rd
        ) : Re(
          /*$$scope*/
          o[35]
        ),
        ls
      ), (!l || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(as).join(" "))) && w(e, "style", r);
    },
    i(o) {
      l || (C(s, o), l = !0);
    },
    o(o) {
      S(s, o), l = !1;
    },
    d(o) {
      o && B(e), s && s.d(o);
    }
  };
}
function ld(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m;
  const _ = (
    /*#slots*/
    n[36].default
  ), p = Te(
    _,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let v = [
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
  for (let A = 0; A < v.length; A += 1)
    b = z(b, v[A]);
  let E = [
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
  ], y = {};
  for (let A = 0; A < E.length; A += 1)
    y = z(y, E[A]);
  let T = (
    /*$$slots*/
    n[24].progress && ss(n)
  );
  const k = (
    /*#slots*/
    n[36].paginate
  ), g = Te(
    k,
    n,
    /*$$scope*/
    n[35],
    rs
  );
  let R = [
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
    Zt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], F = {};
  for (let A = 0; A < R.length; A += 1)
    F = z(F, R[A]);
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("table"), p && p.c(), o = oe(), T && T.c(), u = oe(), g && g.c(), ue(i, b), ue(t, y), ue(e, F);
    },
    m(A, I) {
      V(A, e, I), J(e, t), J(t, i), p && p.m(i, null), n[37](t), J(e, o), T && T.m(e, null), J(e, u), g && g.m(e, null), n[38](e), d = !0, h || (m = [
        ce(l = $e.call(
          null,
          i,
          /*table$use*/
          n[5]
        )),
        ce(s = $e.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        ce(f = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        de(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        de(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        de(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        de(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        de(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        de(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        de(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        de(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        de(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], h = !0);
    },
    p(A, I) {
      p && p.p && (!d || I[1] & /*$$scope*/
      16) && Oe(
        p,
        _,
        A,
        /*$$scope*/
        A[35],
        d ? Le(
          _,
          /*$$scope*/
          A[35],
          I,
          null
        ) : Re(
          /*$$scope*/
          A[35]
        ),
        null
      ), ue(i, b = fe(v, [
        (!d || I[0] & /*table$class*/
        64 && r !== (r = re({
          [
            /*table$class*/
            A[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        I[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          A[25],
          "table$"
        )
      ])), l && me(l.update) && I[0] & /*table$use*/
      32 && l.update.call(
        null,
        /*table$use*/
        A[5]
      ), ue(t, y = fe(E, [
        (!d || I[0] & /*container$class*/
        16 && a !== (a = re({
          [
            /*container$class*/
            A[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        I[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          A[25],
          "container$"
        )
      ])), s && me(s.update) && I[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        A[3]
      ), /*$$slots*/
      A[24].progress ? T ? (T.p(A, I), I[0] & /*$$slots*/
      16777216 && C(T, 1)) : (T = ss(A), T.c(), C(T, 1), T.m(e, u)) : T && (Ne(), S(T, 1, 1, () => {
        T = null;
      }), Ue()), g && g.p && (!d || I[1] & /*$$scope*/
      16) && Oe(
        g,
        k,
        A,
        /*$$scope*/
        A[35],
        d ? Le(
          k,
          /*$$scope*/
          A[35],
          I,
          id
        ) : Re(
          /*$$scope*/
          A[35]
        ),
        rs
      ), ue(e, F = fe(R, [
        (!d || I[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = re({
          [
            /*className*/
            A[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            A[2]
          ),
          .../*internalClasses*/
          A[12]
        }))) && { class: c },
        I[0] & /*$$restProps*/
        33554432 && Zt(
          /*$$restProps*/
          A[25],
          ["container$", "table$"]
        )
      ])), f && me(f.update) && I[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        A[0]
      );
    },
    i(A) {
      d || (C(p, A), C(T), C(g, A), d = !0);
    },
    o(A) {
      S(p, A), S(T), S(g, A), d = !1;
    },
    d(A) {
      A && B(e), p && p.d(A), n[37](null), T && T.d(), g && g.d(A), n[38](null), h = !1, Je(m);
    }
  };
}
const as = ([n, e]) => `${n}: ${e};`;
function sd(n, e, t) {
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
  let r = he(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const c = kr(o), { closest: f } = Oi, d = nt(et());
  let { use: h = [] } = e, { class: m = "" } = e, { stickyHeader: _ = !1 } = e, { sortable: p = !1 } = e, { sort: v = null } = e, { sortDirection: b = "ascending" } = e, { sortAscendingAriaLabel: E = "sorted, ascending" } = e, { sortDescendingAriaLabel: y = "sorted, descending" } = e, { container$use: T = [] } = e, { container$class: k = "" } = e, { table$use: g = [] } = e, { table$class: R = "" } = e, F, A, I, M, O, U = {}, W = { height: "auto", top: "initial" }, N = Ge("SMUI:addLayoutListener"), j, D = !1, L = At(!1);
  rt(n, L, (q) => t(34, l = q));
  let Z = At(v);
  rt(n, Z, (q) => t(45, s = q));
  let Fe = At(b);
  rt(n, Fe, (q) => t(44, a = q)), qe("SMUI:checkbox:context", "data-table"), qe("SMUI:linear-progress:context", "data-table"), qe("SMUI:linear-progress:closed", L), qe("SMUI:data-table:sortable", p), qe("SMUI:data-table:sort", Z), qe("SMUI:data-table:sortDirection", Fe), qe("SMUI:data-table:sortAscendingAriaLabel", E), qe("SMUI:data-table:sortDescendingAriaLabel", y), N && (j = N(Ye));
  let Me;
  at(() => (t(7, A = new nd({
    addClass: Q,
    removeClass: ke,
    getHeaderCellElements: () => {
      var q;
      return (q = M == null ? void 0 : M.cells.map((le) => le.element)) !== null && q !== void 0 ? q : [];
    },
    getHeaderCellCount: () => {
      var q;
      return (q = M == null ? void 0 : M.cells.length) !== null && q !== void 0 ? q : 0;
    },
    getAttributeByHeaderCellIndex: (q, le) => {
      var ee;
      return (ee = M == null ? void 0 : M.orderedCells[q].getAttr(le)) !== null && ee !== void 0 ? ee : null;
    },
    setAttributeByHeaderCellIndex: (q, le, ee) => {
      M == null || M.orderedCells[q].addAttr(le, ee);
    },
    setClassNameByHeaderCellIndex: (q, le) => {
      M == null || M.orderedCells[q].addClass(le);
    },
    removeClassNameByHeaderCellIndex: (q, le) => {
      M == null || M.orderedCells[q].removeClass(le);
    },
    notifySortAction: (q) => {
      t(26, v = q.columnId), t(27, b = q.sortValue), ge(Be(), "SMUIDataTable:sorted", q, void 0, !0);
    },
    getTableContainerHeight: () => I.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const q = Be().querySelector(".mdc-data-table__header-row");
      if (!q)
        throw new Error("MDCDataTable: Table header element not found.");
      return q.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (q) => {
      t(13, W = q);
    },
    addClassAtRowIndex: (q, le) => {
      O == null || O.orderedRows[q].addClass(le);
    },
    getRowCount: () => {
      var q;
      return (q = O == null ? void 0 : O.rows.length) !== null && q !== void 0 ? q : 0;
    },
    getRowElements: () => {
      var q;
      return (q = O == null ? void 0 : O.rows.map((le) => le.element)) !== null && q !== void 0 ? q : [];
    },
    getRowIdAtIndex: (q) => {
      var le;
      return (le = O == null ? void 0 : O.orderedRows[q].rowId) !== null && le !== void 0 ? le : null;
    },
    getRowIndexByChildElement: (q) => {
      var le;
      return (le = O == null ? void 0 : O.orderedRows.map((ee) => ee.element).indexOf(f(q, ".mdc-data-table__row"))) !== null && le !== void 0 ? le : -1;
    },
    getSelectedRowCount: () => {
      var q;
      return (q = O == null ? void 0 : O.rows.filter((le) => le.selected).length) !== null && q !== void 0 ? q : 0;
    },
    isCheckboxAtRowIndexChecked: (q) => {
      const le = O == null ? void 0 : O.orderedRows[q].checkbox;
      return le ? le.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const q = M == null ? void 0 : M.checkbox;
      return q ? q.checked : !1;
    },
    isRowsSelectable: () => !!Be().querySelector(".mdc-data-table__row-checkbox") || !!Be().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (q) => {
      const le = O == null ? void 0 : O.orderedRows[q.rowIndex];
      le && ge(
        Be(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: le.element,
          rowId: le.rowId,
          rowIndex: q.rowIndex,
          selected: q.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      De(!1), ge(Be(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      De(!1), ge(Be(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (q) => {
      ge(Be(), "SMUIDataTable:rowClick", q, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (q, le) => {
      O == null || O.orderedRows[q].removeClass(le);
    },
    setAttributeAtRowIndex: (q, le, ee) => {
      O == null || O.orderedRows[q].addAttr(le, ee);
    },
    setHeaderRowCheckboxChecked: (q) => {
      const le = M == null ? void 0 : M.checkbox;
      le && (le.checked = q);
    },
    setHeaderRowCheckboxIndeterminate: De,
    setRowCheckboxCheckedAtIndex: (q, le) => {
      const ee = O == null ? void 0 : O.orderedRows[q].checkbox;
      ee && (ee.checked = le);
    },
    setSortStatusLabelByHeaderCellIndex: (q, le) => {
    }
    // Handled automatically.
  })), A.init(), A.layout(), t(14, D = !0), () => {
    A.destroy();
  })), Qt(() => {
    j && j();
  });
  function be(q) {
    t(10, M = q.detail);
  }
  function Xe(q) {
    t(11, O = q.detail);
  }
  function G(q) {
    A && A.handleRowCheckboxChange(q);
  }
  function Q(q) {
    U[q] || t(12, U[q] = !0, U);
  }
  function ke(q) {
    (!(q in U) || U[q]) && t(12, U[q] = !1, U);
  }
  function De(q) {
    const le = M == null ? void 0 : M.checkbox;
    le && (le.indeterminate = q);
  }
  function we(q) {
    if (!A || !q.detail.target)
      return;
    const le = f(q.detail.target, ".mdc-data-table__header-cell--with-sort");
    le && K(le);
  }
  function ie(q) {
    if (!A || !q.detail.target)
      return;
    const le = f(q.detail.target, ".mdc-data-table__row");
    le && A && A.handleRowClick({ rowId: q.detail.rowId, row: le });
  }
  function K(q) {
    var le, ee;
    const ze = (le = M == null ? void 0 : M.orderedCells) !== null && le !== void 0 ? le : [], ut = ze.map((xe) => xe.element).indexOf(q);
    if (ut === -1)
      return;
    const ot = (ee = ze[ut].columnId) !== null && ee !== void 0 ? ee : null;
    A.handleSortAction({ columnId: ot, columnIndex: ut, headerCell: q });
  }
  function Ye() {
    return A.layout();
  }
  function Be() {
    return F;
  }
  function vt(q) {
    se[q ? "unshift" : "push"](() => {
      I = q, t(9, I);
    });
  }
  function Y(q) {
    se[q ? "unshift" : "push"](() => {
      F = q, t(8, F);
    });
  }
  const ve = () => A && D && A.layout(), je = () => t(10, M = void 0), Pe = () => t(11, O = void 0), St = () => A && A.handleHeaderRowCheckboxChange();
  return n.$$set = (q) => {
    e = z(z({}, e), tt(q)), t(25, r = he(e, i)), "use" in q && t(0, h = q.use), "class" in q && t(1, m = q.class), "stickyHeader" in q && t(2, _ = q.stickyHeader), "sortable" in q && t(28, p = q.sortable), "sort" in q && t(26, v = q.sort), "sortDirection" in q && t(27, b = q.sortDirection), "sortAscendingAriaLabel" in q && t(29, E = q.sortAscendingAriaLabel), "sortDescendingAriaLabel" in q && t(30, y = q.sortDescendingAriaLabel), "container$use" in q && t(3, T = q.container$use), "container$class" in q && t(4, k = q.container$class), "table$use" in q && t(5, g = q.table$use), "table$class" in q && t(6, R = q.table$class), "$$scope" in q && t(35, u = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Bt(Z, s = v, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Bt(Fe, a = b, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && A && Me !== l && (t(33, Me = l), l ? A.hideProgress() : A.showProgress());
  }, [
    h,
    m,
    _,
    T,
    k,
    g,
    R,
    A,
    F,
    I,
    M,
    O,
    U,
    W,
    D,
    d,
    L,
    Z,
    Fe,
    be,
    Xe,
    G,
    we,
    ie,
    c,
    r,
    v,
    b,
    p,
    E,
    y,
    Ye,
    Be,
    Me,
    l,
    u,
    o,
    vt,
    Y,
    ve,
    je,
    Pe,
    St
  ];
}
class ad extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      sd,
      ld,
      _e,
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
function od(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[10].default
  ), s = Te(
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
    u = z(u, o[c]);
  return {
    c() {
      e = ne("thead"), s && s.c(), ue(e, u);
    },
    m(c, f) {
      V(c, e, f), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        ce(t = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        de(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        de(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        de(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        de(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], r = !0);
    },
    p(c, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      512) && Oe(
        s,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? Le(
          a,
          /*$$scope*/
          c[9],
          f,
          null
        ) : Re(
          /*$$scope*/
          c[9]
        ),
        null
      ), ue(e, u = fe(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && me(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (C(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), n[11](null), r = !1, Je(l);
    }
  };
}
function ud(n, e, t) {
  const i = ["use", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  qe("SMUI:data-table:row:header", !0), at(() => {
    const y = {
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
    return ge(v(), "SMUIDataTableHeader:mount", y), () => {
      ge(v(), "SMUIDataTableHeader:unmount", y);
    };
  });
  function h(y) {
    t(2, c = y.detail);
  }
  function m(y) {
    f.push(y.detail), d.set(y.detail.element, y.detail), y.stopPropagation();
  }
  function _(y) {
    const T = f.indexOf(y.detail);
    T !== -1 && (f.splice(T, 1), f = f), d.delete(y.detail.element), y.stopPropagation();
  }
  function p() {
    return [...v().querySelectorAll(".mdc-data-table__header-cell")].map((y) => d.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function v() {
    return u;
  }
  function b(y) {
    se[y ? "unshift" : "push"](() => {
      u = y, t(1, u);
    });
  }
  const E = () => t(2, c = void 0);
  return n.$$set = (y) => {
    e = z(z({}, e), tt(y)), t(7, r = he(e, i)), "use" in y && t(0, o = y.use), "$$scope" in y && t(9, a = y.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    m,
    _,
    r,
    v,
    a,
    l,
    b,
    E
  ];
}
class cd extends Ee {
  constructor(e) {
    super(), ye(this, e, ud, od, _e, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function fd(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = Te(
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
    c = z(c, u[f]);
  return {
    c() {
      e = ne("tbody"), o && o.c(), ue(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        ce(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        de(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        de(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], l = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && Oe(
        o,
        s,
        f,
        /*$$scope*/
        f[8],
        r ? Le(
          s,
          /*$$scope*/
          f[8],
          d,
          null
        ) : Re(
          /*$$scope*/
          f[8]
        ),
        null
      ), ue(e, c = fe(u, [
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
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (C(o, f), r = !0);
    },
    o(f) {
      S(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), n[10](null), l = !1, Je(a);
    }
  };
}
function dd(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  qe("SMUI:data-table:row:header", !1), at(() => {
    const b = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return _();
      }
    };
    return ge(p(), "SMUIDataTableBody:mount", b), () => {
      ge(p(), "SMUIDataTableBody:unmount", b);
    };
  });
  function h(b) {
    f.push(b.detail), d.set(b.detail.element, b.detail), b.stopPropagation();
  }
  function m(b) {
    const E = f.indexOf(b.detail);
    E !== -1 && (f.splice(E, 1), f = f), d.delete(b.detail.element), b.stopPropagation();
  }
  function _() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function v(b) {
    se[b ? "unshift" : "push"](() => {
      c = b, t(2, c);
    });
  }
  return n.$$set = (b) => {
    e = z(z({}, e), tt(b)), t(6, r = he(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "$$scope" in b && t(8, a = b.$$scope);
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
    v
  ];
}
class hd extends Ee {
  constructor(e) {
    super(), ye(this, e, dd, fd, _e, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function md(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[15].default
  ), u = Te(
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
    f = z(f, c[d]);
  return {
    c() {
      e = ne("tr"), u && u.c(), ue(e, f);
    },
    m(d, h) {
      V(d, e, h), u && u.m(e, null), n[16](e), l = !0, a || (s = [
        ce(r = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        de(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        de(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        de(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], a = !0);
    },
    p(d, [h]) {
      u && u.p && (!l || h & /*$$scope*/
      16384) && Oe(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        l ? Le(
          o,
          /*$$scope*/
          d[14],
          h,
          null
        ) : Re(
          /*$$scope*/
          d[14]
        ),
        null
      ), ue(e, f = fe(c, [
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
      ])), r && me(r.update) && h & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      l || (C(u, d), l = !0);
    },
    o(d) {
      S(u, d), l = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), n[16](null), a = !1, Je(s);
    }
  };
}
let pd = 0;
function gd(n, e, t) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(et());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + pd++ } = e, f, d, h = {}, m = {}, _ = Ge("SMUI:data-table:row:header");
  at(() => {
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
        var M;
        return (M = d && d.checked) !== null && M !== void 0 ? M : !1;
      },
      addClass: v,
      removeClass: b,
      getAttr: E,
      addAttr: y
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
        var M;
        return (M = d && d.checked) !== null && M !== void 0 ? M : !1;
      },
      addClass: v,
      removeClass: b,
      getAttr: E,
      addAttr: y
    };
    return ge(g(), "SMUIDataTableRow:mount", I), () => {
      ge(g(), "SMUIDataTableRow:unmount", I);
    };
  });
  function p(I) {
    t(3, d = I.detail);
  }
  function v(I) {
    h[I] || t(4, h[I] = !0, h);
  }
  function b(I) {
    (!(I in h) || h[I]) && t(4, h[I] = !1, h);
  }
  function E(I) {
    var M;
    return I in m ? (M = m[I]) !== null && M !== void 0 ? M : null : g().getAttribute(I);
  }
  function y(I, M) {
    m[I] !== M && t(5, m[I] = M, m);
  }
  function T(I) {
    ge(g(), "SMUIDataTableHeader:click", I);
  }
  function k(I) {
    ge(g(), "SMUIDataTableRow:click", { rowId: c, target: I.target });
  }
  function g() {
    return f;
  }
  function R(I) {
    se[I ? "unshift" : "push"](() => {
      f = I, t(2, f);
    });
  }
  const F = (I) => _ ? T(I) : k(I), A = () => t(3, d = void 0);
  return n.$$set = (I) => {
    e = z(z({}, e), tt(I)), t(11, r = he(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "rowId" in I && t(12, c = I.rowId), "$$scope" in I && t(14, a = I.$$scope);
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
    T,
    k,
    r,
    c,
    g,
    a,
    l,
    R,
    F,
    A
  ];
}
class Ta extends Ee {
  constructor(e) {
    super(), ye(this, e, gd, md, _e, {
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
function _d(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[22].default
  ), o = Te(
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
    c = z(c, u[f]);
  return {
    c() {
      e = ne("td"), o && o.c(), ue(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), n[25](e), r = !0, l || (a = [
        ce(i = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        de(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], l = !0);
    },
    p(f, d) {
      o && o.p && (!r || d & /*$$scope*/
      2097152) && Oe(
        o,
        s,
        f,
        /*$$scope*/
        f[21],
        r ? Le(
          s,
          /*$$scope*/
          f[21],
          d,
          null
        ) : Re(
          /*$$scope*/
          f[21]
        ),
        null
      ), ue(e, c = fe(u, [
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
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (C(o, f), r = !0);
    },
    o(f) {
      S(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), n[25](null), l = !1, Je(a);
    }
  };
}
function bd(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [vd, Id], f = [];
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
    m = z(m, h[_]);
  return {
    c() {
      e = ne("th"), i.c(), ue(e, m);
    },
    m(_, p) {
      V(_, e, p), f[t].m(e, null), n[23](e), s = !0, o || (u = [
        ce(a = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        de(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(_, p) {
      let v = t;
      t = d(_), t === v ? f[t].p(_, p) : (Ne(), S(f[v], 1, 1, () => {
        f[v] = null;
      }), Ue(), i = f[t], i ? i.p(_, p) : (i = f[t] = c[t](_), i.c()), C(i, 1), i.m(e, null)), ue(e, m = fe(h, [
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
      ])), a && me(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      s || (C(i), s = !0);
    },
    o(_) {
      S(i), s = !1;
    },
    d(_) {
      _ && B(e), f[t].d(), n[23](null), o = !1, Je(u);
    }
  };
}
function Id(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), i = Te(
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
      2097152) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[21],
        e ? Le(
          t,
          /*$$scope*/
          r[21],
          l,
          null
        ) : Re(
          /*$$scope*/
          r[21]
        ),
        null
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vd(n) {
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
  ), u = Te(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ne("div"), u && u.c(), t = oe(), i = ne("div"), l = ct(r), w(i, "class", "mdc-data-table__sort-status-label"), w(i, "aria-hidden", "true"), w(i, "id", a = /*columnId*/
      n[4] + "-status-label"), w(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      V(c, e, f), u && u.m(e, null), J(e, t), J(e, i), J(i, l), s = !0;
    },
    p(c, f) {
      u && u.p && (!s || f & /*$$scope*/
      2097152) && Oe(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        s ? Le(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : Re(
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
      ) : "") + "") && Ct(l, r), (!s || f & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && w(i, "id", a);
    },
    i(c) {
      s || (C(u, c), s = !0);
    },
    o(c) {
      S(u, c), s = !1;
    },
    d(c) {
      c && B(e), u && u.d(c);
    }
  };
}
function Ad(n) {
  let e, t, i, r;
  const l = [bd, _d], a = [];
  function s(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = We();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
let Cd = 0;
function yd(n, e, t) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = he(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(et());
  let c = Ge("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: h = !1 } = e, { checkbox: m = !1 } = e, { columnId: _ = c ? "SMUI-data-table-column-" + Cd++ : "SMUI-data-table-unused" } = e, { sortable: p = Ge("SMUI:data-table:sortable") } = e, v, b = {}, E = {}, y = Ge("SMUI:data-table:sort");
  rt(n, y, (L) => t(9, l = L));
  let T = Ge("SMUI:data-table:sortDirection");
  rt(n, T, (L) => t(10, a = L));
  let k = Ge("SMUI:data-table:sortAscendingAriaLabel"), g = Ge("SMUI:data-table:sortDescendingAriaLabel");
  p && (qe("SMUI:label:context", "data-table:sortable-header-cell"), qe("SMUI:icon-button:context", "data-table:sortable-header-cell"), qe("SMUI:icon-button:aria-describedby", _ + "-status-label")), at(() => {
    const L = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return U();
      },
      get columnId() {
        return _;
      },
      addClass: R,
      removeClass: F,
      getAttr: A,
      addAttr: I
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return U();
      },
      get columnId() {
      },
      addClass: R,
      removeClass: F,
      getAttr: A,
      addAttr: I
    };
    return ge(U(), "SMUIDataTableCell:mount", L), () => {
      ge(U(), "SMUIDataTableCell:unmount", L);
    };
  });
  function R(L) {
    b[L] || t(7, b[L] = !0, b);
  }
  function F(L) {
    (!(L in b) || b[L]) && t(7, b[L] = !1, b);
  }
  function A(L) {
    var Z;
    return L in E ? (Z = E[L]) !== null && Z !== void 0 ? Z : null : U().getAttribute(L);
  }
  function I(L, Z) {
    E[L] !== Z && t(8, E[L] = Z, E);
  }
  function M(L) {
    ge(U(), "SMUIDataTableHeaderCheckbox:change", L);
  }
  function O(L) {
    ge(U(), "SMUIDataTableBodyCheckbox:change", L);
  }
  function U() {
    return v;
  }
  function W(L) {
    se[L ? "unshift" : "push"](() => {
      v = L, t(6, v);
    });
  }
  const N = (L) => m && M(L);
  function j(L) {
    se[L ? "unshift" : "push"](() => {
      v = L, t(6, v);
    });
  }
  const D = (L) => m && O(L);
  return n.$$set = (L) => {
    e = z(z({}, e), tt(L)), t(19, r = he(e, i)), "use" in L && t(0, f = L.use), "class" in L && t(1, d = L.class), "numeric" in L && t(2, h = L.numeric), "checkbox" in L && t(3, m = L.checkbox), "columnId" in L && t(4, _ = L.columnId), "sortable" in L && t(5, p = L.sortable), "$$scope" in L && t(21, o = L.$$scope);
  }, [
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    E,
    l,
    a,
    u,
    c,
    y,
    T,
    k,
    g,
    M,
    O,
    r,
    U,
    o,
    s,
    W,
    N,
    j,
    D
  ];
}
class Pr extends Ee {
  constructor(e) {
    super(), ye(this, e, yd, Ad, _e, {
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
function Ed(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, v, b, E, y, T = [
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
      ).map(cs).concat([
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
      "aria-valuenow": v = /*indeterminate*/
      n[3] ? void 0 : (
        /*progress*/
        n[5]
      )
    },
    /*internalAttrs*/
    n[9],
    /*$$restProps*/
    n[16]
  ], k = {};
  for (let g = 0; g < T.length; g += 1)
    k = z(k, T[g]);
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("div"), l = oe(), a = ne("div"), s = oe(), o = ne("div"), u = ne("span"), f = oe(), d = ne("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', w(i, "class", "mdc-linear-progress__buffer-bar"), w(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        n[11]
      ).map(os).join(" ")), w(a, "class", "mdc-linear-progress__buffer-dots"), w(t, "class", "mdc-linear-progress__buffer"), w(u, "class", "mdc-linear-progress__bar-inner"), w(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), w(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        n[12]
      ).map(us).join(" ")), w(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ue(e, k);
    },
    m(g, R) {
      V(g, e, R), J(e, t), J(t, i), J(t, l), J(t, a), J(e, s), J(e, o), J(o, u), J(e, f), J(e, d), n[19](e), E || (y = [
        ce(b = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        de(
          e,
          "transitionend",
          /*transitionend_handler*/
          n[20]
        )
      ], E = !0);
    },
    p(g, [R]) {
      R & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        g[11]
      ).map(os).join(" ")) && w(i, "style", r), R & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        g[12]
      ).map(us).join(" ")) && w(o, "style", c), ue(e, k = fe(T, [
        R & /*className, indeterminate, closed, internalClasses*/
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
        R & /*internalStyles, style*/
        1028 && m !== (m = Object.entries(
          /*internalStyles*/
          g[10]
        ).map(cs).concat([
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
        R & /*indeterminate, progress*/
        40 && v !== (v = /*indeterminate*/
        g[3] ? void 0 : (
          /*progress*/
          g[5]
        )) && {
          "aria-valuenow": v
        },
        R & /*internalAttrs*/
        512 && /*internalAttrs*/
        g[9],
        R & /*$$restProps*/
        65536 && /*$$restProps*/
        g[16]
      ])), b && me(b.update) && R & /*use*/
      1 && b.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i: Qe,
    o: Qe,
    d(g) {
      g && B(e), n[19](null), E = !1, Je(y);
    }
  };
}
const os = ([n, e]) => `${n}: ${e};`, us = ([n, e]) => `${n}: ${e};`, cs = ([n, e]) => `${n}: ${e};`;
function Sd(n, e, t) {
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
  let r = he(e, i), l;
  const a = nt(et());
  let { use: s = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: f = !1 } = e, { progress: d = 0 } = e, { buffer: h = void 0 } = e, m, _, p = {}, v = {}, b = {}, E = {}, y = {}, T = Ge("SMUI:linear-progress:context"), k = Ge("SMUI:linear-progress:closed");
  rt(n, k, (D) => t(21, l = D)), at(() => (t(6, _ = new td({
    addClass: R,
    forceLayout: () => {
      W().getBoundingClientRect();
    },
    setBufferBarStyle: O,
    setPrimaryBarStyle: U,
    hasClass: g,
    removeAttribute: I,
    removeClass: F,
    setAttribute: A,
    setStyle: M,
    attachResizeObserver: (D) => {
      const L = window.ResizeObserver;
      if (L) {
        const Z = new L(D);
        return Z.observe(W()), Z;
      }
      return null;
    },
    getWidth: () => W().offsetWidth
  })), _.init(), () => {
    _.destroy();
  }));
  function g(D) {
    return D in p ? p[D] : W().classList.contains(D);
  }
  function R(D) {
    p[D] || t(8, p[D] = !0, p);
  }
  function F(D) {
    (!(D in p) || p[D]) && t(8, p[D] = !1, p);
  }
  function A(D, L) {
    v[D] !== L && t(9, v[D] = L, v);
  }
  function I(D) {
    (!(D in v) || v[D] != null) && t(9, v[D] = void 0, v);
  }
  function M(D, L) {
    b[D] != L && (L === "" || L == null ? (delete b[D], t(10, b)) : t(10, b[D] = L, b));
  }
  function O(D, L) {
    E[D] != L && (L === "" || L == null ? (delete E[D], t(11, E)) : t(11, E[D] = L, E));
  }
  function U(D, L) {
    y[D] != L && (L === "" || L == null ? (delete y[D], t(12, y)) : t(12, y[D] = L, y));
  }
  function W() {
    return m;
  }
  function N(D) {
    se[D ? "unshift" : "push"](() => {
      m = D, t(7, m);
    });
  }
  const j = () => _ && _.handleTransitionEnd();
  return n.$$set = (D) => {
    e = z(z({}, e), tt(D)), t(16, r = he(e, i)), "use" in D && t(0, s = D.use), "class" in D && t(1, o = D.class), "style" in D && t(2, u = D.style), "indeterminate" in D && t(3, c = D.indeterminate), "closed" in D && t(4, f = D.closed), "progress" in D && t(5, d = D.progress), "buffer" in D && t(17, h = D.buffer);
  }, n.$$.update = () => {
    n.$$.dirty & /*closed*/
    16 && k && Bt(k, l = f, l), n.$$.dirty & /*instance, indeterminate*/
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
    v,
    b,
    E,
    y,
    a,
    T,
    k,
    r,
    h,
    W,
    N,
    j
  ];
}
class Td extends Ee {
  constructor(e) {
    super(), ye(this, e, Sd, Ed, _e, {
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
function Ld(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), r = Te(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = ne("span"), r && r.c(), w(e, "class", "oscd-icon");
    },
    m(l, a) {
      V(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, [a]) {
      r && r.p && (!t || a & /*$$scope*/
      1) && Oe(
        r,
        i,
        l,
        /*$$scope*/
        l[0],
        t ? Le(
          i,
          /*$$scope*/
          l[0],
          a,
          null
        ) : Re(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (C(r, l), t = !0);
    },
    o(l) {
      S(r, l), t = !1;
    },
    d(l) {
      l && B(e), r && r.d(l);
    }
  };
}
function Od(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e;
  return n.$$set = (l) => {
    "$$scope" in l && t(0, r = l.$$scope);
  }, [r, i];
}
class sn extends Ee {
  constructor(e) {
    super(), ye(this, e, Od, Ld, _e, {});
  }
}
function Rd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "height", "24px"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24px"), w(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && w(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function kd(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Rd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Dd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Md extends Ee {
  constructor(e) {
    super(), ye(this, e, Dd, kd, _e, { svgStyles: 0 });
  }
}
function Fd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24px");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && w(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Nd(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Fd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Ud(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class La extends Ee {
  constructor(e) {
    super(), ye(this, e, Ud, Nd, _e, { svgStyles: 0 });
  }
}
function wd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && w(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Pd(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [wd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Hd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Bd extends Ee {
  constructor(e) {
    super(), ye(this, e, Hd, Pd, _e, { svgStyles: 0 });
  }
}
function Vd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && w(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function jd(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Vd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function qd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Gd extends Ee {
  constructor(e) {
    super(), ye(this, e, qd, jd, _e, { svgStyles: 0 });
  }
}
function Kd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "height", "24px"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24px"), w(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p: Qe,
    d(i) {
      i && B(e);
    }
  };
}
function Wd(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Kd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function zd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Xd extends Ee {
  constructor(e) {
    super(), ye(this, e, zd, Wd, _e, { svgStyles: 0 });
  }
}
function Yd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && w(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Zd(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Yd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Qd(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Jd extends Ee {
  constructor(e) {
    super(), ye(this, e, Qd, Zd, _e, { svgStyles: 0 });
  }
}
function xd(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M200-440v-80h560v80H200Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "height", "24px"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24px"), w(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p: Qe,
    d(i) {
      i && B(e);
    }
  };
}
function $d(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [xd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function eh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class th extends Ee {
  constructor(e) {
    super(), ye(this, e, eh, $d, _e, { svgStyles: 0 });
  }
}
function nh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && w(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function ih(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [nh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function rh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class lh extends Ee {
  constructor(e) {
    super(), ye(this, e, rh, ih, _e, { svgStyles: 0 });
  }
}
function sh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && w(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function ah(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [sh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function oh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class uh extends Ee {
  constructor(e) {
    super(), ye(this, e, oh, ah, _e, { svgStyles: 0 });
  }
}
function fs(n, e, t) {
  const i = n.slice();
  return i[24] = e[t], i[26] = t, i;
}
function ds(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i;
}
function hs(n, e, t) {
  const i = n.slice();
  return i[30] = e[t], i;
}
function ms(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i[33] = e, i[34] = t, i;
}
function ps(n) {
  let e, t = (
    /*$sortColumn*/
    n[5] === /*col*/
    n[27].field && /*$sortDirection*/
    n[6] !== null && gs(n)
  );
  return {
    c() {
      t && t.c(), e = We();
    },
    m(i, r) {
      t && t.m(i, r), V(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[5] === /*col*/
      i[27].field && /*$sortDirection*/
      i[6] !== null ? t ? t.p(i, r) : (t = gs(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(i) {
      i && B(e), t && t.d(i);
    }
  };
}
function gs(n) {
  let e;
  function t(l, a) {
    if (
      /*$sortDirection*/
      l[6] === "asc"
    )
      return fh;
    if (
      /*$sortDirection*/
      l[6] === "desc"
    )
      return ch;
  }
  let i = t(n), r = i && i(n);
  return {
    c() {
      r && r.c(), e = We();
    },
    m(l, a) {
      r && r.m(l, a), V(l, e, a);
    },
    p(l, a) {
      i !== (i = t(l)) && (r && r.d(1), r = i && i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && B(e), r && r.d(l);
    }
  };
}
function ch(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M12 20l8-8H4l8 8z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 0 24 24"), w(e, "width", "16"), w(e, "height", "16"), w(e, "fill", "currentColor"), w(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    d(i) {
      i && B(e);
    }
  };
}
function fh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), w(t, "d", "M12 4l-8 8h16l-8-8z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 0 24 24"), w(e, "width", "16"), w(e, "height", "16"), w(e, "fill", "currentColor"), w(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    d(i) {
      i && B(e);
    }
  };
}
function _s(n) {
  let e, t, i = (
    /*col*/
    n[27].filterType === "text" && bs(n)
  ), r = (
    /*col*/
    n[27].filterType === "number" && Is(n)
  );
  return {
    c() {
      i && i.c(), e = oe(), r && r.c(), t = We();
    },
    m(l, a) {
      i && i.m(l, a), V(l, e, a), r && r.m(l, a), V(l, t, a);
    },
    p(l, a) {
      /*col*/
      l[27].filterType === "text" ? i ? i.p(l, a) : (i = bs(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      l[27].filterType === "number" ? r ? r.p(l, a) : (r = Is(l), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && (B(e), B(t)), i && i.d(l), r && r.d(l);
    }
  };
}
function bs(n) {
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
      e = ne("input"), w(e, "type", "text"), w(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), w(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      V(a, e, s), fn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        de(e, "input", l),
        de(
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
      n[27].headerName}`) && w(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && e.value !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && fn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && B(e), i = !1, Je(r);
    }
  };
}
function Is(n) {
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
      e = ne("input"), w(e, "type", "number"), w(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), w(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      V(a, e, s), fn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        de(e, "input", l),
        de(
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
      n[27].headerName}`) && w(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && ua(e.value) !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && fn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && B(e), i = !1, Je(r);
    }
  };
}
function dh(n) {
  let e, t, i, r = (
    /*col*/
    n[27].headerName + ""
  ), l, a, s, o, u = (
    /*col*/
    n[27].sortable && ps(n)
  ), c = (
    /*col*/
    n[27].filter && _s(n)
  );
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("span"), l = ct(r), a = oe(), u && u.c(), s = oe(), c && c.c(), o = oe(), w(i, "class", "header-title svelte-29x22x"), w(t, "class", "cell-header svelte-29x22x"), w(e, "class", "custom-cell-container svelte-29x22x"), _r(
        e,
        "min-width",
        /*col*/
        n[27].minWidth ?? 0
      );
    },
    m(f, d) {
      V(f, e, d), J(e, t), J(t, i), J(i, l), J(t, a), u && u.m(t, null), J(e, s), c && c.m(e, null), V(f, o, d);
    },
    p(f, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      f[27].headerName + "") && Ct(l, r), /*col*/
      f[27].sortable ? u ? u.p(f, d) : (u = ps(f), u.c(), u.m(t, null)) : u && (u.d(1), u = null), /*col*/
      f[27].filter ? c ? c.p(f, d) : (c = _s(f), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d[0] & /*columnDefs*/
      4 && _r(
        e,
        "min-width",
        /*col*/
        f[27].minWidth ?? 0
      );
    },
    d(f) {
      f && (B(e), B(o)), u && u.d(), c && c.d();
    }
  };
}
function vs(n) {
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
  return e = new Pr({
    props: {
      style: (
        /*col*/
        n[27].headerStyle
      ),
      $$slots: { default: [dh] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", i), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      x(e, r, l), t = !0;
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function hh(n) {
  let e, t, i = kt(
    /*columnDefs*/
    n[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = vs(ms(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = We();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      V(a, e, s), t = !0;
    },
    p(a, s) {
      if (s[0] & /*columnDefs, sortColumnBy, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      6260) {
        i = kt(
          /*columnDefs*/
          a[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = ms(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = vs(u), r[o].c(), C(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ne(), o = i.length; o < r.length; o += 1)
          l(o);
        Ue();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          C(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && B(e), Dr(r, a);
    }
  };
}
function mh(n) {
  let e, t;
  return e = new Ta({
    props: {
      class: "header-row",
      $$slots: { default: [hh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function ph(n) {
  let e, t;
  return e = new Pr({
    props: {
      numeric: (
        /*col*/
        n[27].numeric
      ),
      style: (
        /*col*/
        n[27].cellStyle
      ),
      $$slots: { default: [Ih] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function gh(n) {
  let e, t;
  return e = new Pr({
    props: {
      $$slots: { default: [Dh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*rowActions, $filteredData*/
      136 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function _h(n) {
  let e = (
    /*row*/
    (n[24][
      /*col*/
      n[27].field
    ] ?? "") + ""
  ), t;
  return {
    c() {
      t = ct(e);
    },
    m(i, r) {
      V(i, t, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      132 && e !== (e = /*row*/
      (i[24][
        /*col*/
        i[27].field
      ] ?? "") + "") && Ct(t, e);
    },
    d(i) {
      i && B(t);
    }
  };
}
function bh(n) {
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
      t = ct(e);
    },
    m(i, r) {
      V(i, t, r);
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
      ) + "") && Ct(t, e);
    },
    d(i) {
      i && B(t);
    }
  };
}
function Ih(n) {
  let e;
  function t(l, a) {
    return (
      /*col*/
      l[27].valueFormatter ? bh : _h
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = We();
    },
    m(l, a) {
      r.m(l, a), V(l, e, a);
    },
    p(l, a) {
      i === (i = t(l)) && r ? r.p(l, a) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && B(e), r.d(l);
    }
  };
}
function vh(n) {
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
  return e = new wr({
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
      $$slots: { default: [kh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      x(e, r, l), t = !0;
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function Ah(n) {
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
  return e = new au({
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
      x(e, r, l), t = !0;
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function Ch(n) {
  let e, t;
  return e = new Xd({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function yh(n) {
  let e, t;
  return e = new uh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Eh(n) {
  let e, t;
  return e = new lh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Sh(n) {
  let e, t;
  return e = new th({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Th(n) {
  let e, t;
  return e = new Gd({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Lh(n) {
  let e, t;
  return e = new Bd({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Oh(n) {
  let e, t;
  return e = new La({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Rh(n) {
  let e, t;
  return e = new Md({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function kh(n) {
  let e, t, i, r;
  const l = [
    Rh,
    Oh,
    Lh,
    Th,
    Sh,
    Eh,
    yh,
    Ch
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
      t.c(), i = We();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (Ne(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), Ue(), t = a[e], t || (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function As(n) {
  let e, t, i, r;
  const l = [Ah, vh], a = [];
  function s(o, u) {
    return (
      /*action*/
      o[30].iconComponent ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = We();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ne(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), Ue(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Dh(n) {
  let e, t, i = kt(
    /*rowActions*/
    n[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = As(hs(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = ne("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      w(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, s) {
      V(a, e, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
      t = !0;
    },
    p(a, s) {
      if (s[0] & /*rowActions, $filteredData*/
      136) {
        i = kt(
          /*rowActions*/
          a[3]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = hs(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = As(u), r[o].c(), C(r[o], 1), r[o].m(e, null));
        }
        for (Ne(), o = i.length; o < r.length; o += 1)
          l(o);
        Ue();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          C(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && B(e), Dr(r, a);
    }
  };
}
function Cs(n, e) {
  let t, i, r, l, a;
  const s = [gh, ph], o = [];
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
      t = We(), r.c(), l = We(), this.first = t;
    },
    m(c, f) {
      V(c, t, f), o[i].m(c, f), V(c, l, f), a = !0;
    },
    p(c, f) {
      e = c;
      let d = i;
      i = u(e), i === d ? o[i].p(e, f) : (Ne(), S(o[d], 1, 1, () => {
        o[d] = null;
      }), Ue(), r = o[i], r ? r.p(e, f) : (r = o[i] = s[i](e), r.c()), C(r, 1), r.m(l.parentNode, l));
    },
    i(c) {
      a || (C(r), a = !0);
    },
    o(c) {
      S(r), a = !1;
    },
    d(c) {
      c && (B(t), B(l)), o[i].d(c);
    }
  };
}
function Mh(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = kt(
    /*columnDefs*/
    n[2]
  );
  const a = (s) => (
    /*col*/
    s[27].field
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = ds(n, l, s), u = a(o);
    t.set(u, e[s] = Cs(u, o));
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
      V(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      140 && (l = kt(
        /*columnDefs*/
        s[2]
      ), Ne(), e = di(e, o, a, 1, s, l, t, i.parentNode, fi, Cs, i, ds), Ue());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          C(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function ys(n, e) {
  let t, i, r;
  return i = new Ta({
    props: {
      $$slots: { default: [Mh] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = We(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      V(l, t, a), x(i, l, a), r = !0;
    },
    p(l, a) {
      e = l;
      const s = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      140 | a[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: a, ctx: e }), i.$set(s);
    },
    i(l) {
      r || (C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), $(i, l);
    }
  };
}
function Fh(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = kt(
    /*$filteredData*/
    n[7]
  );
  const a = (s) => (
    /*index*/
    s[26]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = fs(n, l, s), u = a(o);
    t.set(u, e[s] = ys(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = We();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      V(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      140 && (l = kt(
        /*$filteredData*/
        s[7]
      ), Ne(), e = di(e, o, a, 1, s, l, t, i.parentNode, fi, ys, i, fs), Ue());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          C(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Nh(n) {
  let e, t, i, r;
  return e = new cd({
    props: {
      $$slots: { default: [mh] },
      $$scope: { ctx: n }
    }
  }), i = new hd({
    props: {
      $$slots: { default: [Fh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe(), te(i.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), V(l, t, a), x(i, l, a), r = !0;
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
      r || (C(e.$$.fragment, l), C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), $(e, l), $(i, l);
    }
  };
}
function Uh(n) {
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
    n[0]), e = new Td({ props: l }), se.push(() => It(e, "closed", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        x(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s[0] & /*loadingDone*/
        1 && (t = !0, o.closed = /*loadingDone*/
        a[0], bt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function wh(n) {
  let e, t;
  return e = new ad({
    props: {
      "table$aria-label": (
        /*label*/
        n[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Uh],
        default: [Nh]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Ph(n, e, t) {
  let i, r, l, { loadingDone: a = !0 } = e, { label: s = "crypto.randomUUID()" } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: f = [] } = e, d = { name: "", color: "", number: "" }, h = At([]);
  rt(n, h, (I) => t(7, l = I));
  let m = At(null);
  rt(n, m, (I) => t(5, i = I));
  let _ = At(null);
  rt(n, _, (I) => t(6, r = I)), c.store.subscribe((I) => {
    t(13, u = [...I]), p();
  });
  function p() {
    let I = u.filter((M) => o.every((O) => {
      const U = d[O.field], W = M[O.field];
      return U ? O.filterType === "number" ? W == U : W.toString().toLowerCase().includes(U.toLowerCase()) : !0;
    }));
    I = v(I), h.set(I);
  }
  function v(I) {
    let M, O;
    return m.subscribe((U) => M = U), _.subscribe((U) => O = U), !M || !O ? I : I.sort((U, W) => {
      let N = U[M], j = W[M];
      return N == null && (N = ""), j == null && (j = ""), O === "asc" ? N.toString().localeCompare(j.toString()) : j.toString().localeCompare(N.toString());
    });
  }
  function b(I) {
    m.update((M) => {
      if (M === I)
        _.update((O) => O === "asc" ? "desc" : O === "desc" ? null : "asc");
      else
        return _.set("asc"), I;
      return I;
    }), p();
  }
  h.set(u);
  function E(I) {
    a = I, t(0, a);
  }
  function y(I) {
    d[I.field] = this.value, t(4, d);
  }
  const T = () => p();
  function k(I) {
    d[I.field] = ua(this.value), t(4, d);
  }
  const g = () => p(), R = (I) => I.sortable && b(I.field), F = (I, M) => I.callback(M), A = (I, M) => I.callback(M);
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
    E,
    y,
    T,
    k,
    g,
    R,
    F,
    A
  ];
}
class Hh extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      Ph,
      wh,
      _e,
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
var yr;
(function(n) {
  n.POLITE = "polite", n.ASSERTIVE = "assertive";
})(yr || (yr = {}));
var Bh = "data-mdc-dom-announce";
function Vh(n, e) {
  jh.getInstance().say(n, e);
}
var jh = (
  /** @class */
  function() {
    function n() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return n.getInstance = function() {
      return n.instance || (n.instance = new n()), n.instance;
    }, n.prototype.say = function(e, t) {
      var i, r, l = (i = t == null ? void 0 : t.priority) !== null && i !== void 0 ? i : yr.POLITE, a = (r = t == null ? void 0 : t.ownerDocument) !== null && r !== void 0 ? r : document, s = this.getLiveRegion(l, a);
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
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Bh, "true"), t.body.appendChild(i), i;
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
var un;
(function(n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.CLICK = 1] = "CLICK", n[n.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", n[n.DELETE_KEY = 3] = "DELETE_KEY", n[n.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", n[n.ENTER_KEY = 5] = "ENTER_KEY";
})(un || (un = {}));
var Xt = {
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
var Oa = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      return n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Xt;
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
      t.stopPropagation(), this.adapter.notifyInteraction(un.CLICK);
    }, e.prototype.handleKeydown = function(t) {
      t.stopPropagation();
      var i = ht(t);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (Do(t)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Xt.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Xt.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Xt.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(t) {
      var i = t === He.ENTER || t === He.SPACEBAR, r = t === He.BACKSPACE || t === He.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(t) {
      return t === He.SPACEBAR ? un.SPACEBAR_KEY : t === He.ENTER ? un.ENTER_KEY : t === He.DELETE ? un.DELETE_KEY : t === He.BACKSPACE ? un.BACKSPACE_KEY : un.UNSPECIFIED;
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
var Ra = (
  /** @class */
  function(n) {
    st(e, n);
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
        return new yi(r, l);
      });
      var i = yi.createAdapter(this);
      this.rippleSurface = t(this.root, new Ri(i));
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
            Xt.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          t.emit(
            Xt.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, l) {
          t.root.setAttribute(r, l);
        }
      };
      return new Oa(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(Li)
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
var Yt;
(function(n) {
  n.LEFT = "left", n.RIGHT = "right";
})(Yt || (Yt = {}));
var rn;
(function(n) {
  n.PRIMARY = "primary", n.TRAILING = "trailing", n.NONE = "none";
})(rn || (rn = {}));
var Se = {
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
}, gt = {
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
Wt.add(Se.ARROW_LEFT_KEY);
Wt.add(Se.ARROW_RIGHT_KEY);
Wt.add(Se.ARROW_DOWN_KEY);
Wt.add(Se.ARROW_UP_KEY);
Wt.add(Se.END_KEY);
Wt.add(Se.HOME_KEY);
Wt.add(Se.IE_ARROW_LEFT_KEY);
Wt.add(Se.IE_ARROW_RIGHT_KEY);
Wt.add(Se.IE_ARROW_DOWN_KEY);
Wt.add(Se.IE_ARROW_UP_KEY);
var pn = /* @__PURE__ */ new Set();
pn.add(Se.ARROW_UP_KEY);
pn.add(Se.ARROW_DOWN_KEY);
pn.add(Se.HOME_KEY);
pn.add(Se.END_KEY);
pn.add(Se.IE_ARROW_UP_KEY);
pn.add(Se.IE_ARROW_DOWN_KEY);
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
var Es = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Un;
(function(n) {
  n[n.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", n[n.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Un || (Un = {}));
var Hr = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Se;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
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
            return Es;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return Es;
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
      return this.adapter.hasClass(gt.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(gt.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(gt.EDITING);
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
      this.adapter.addClass(gt.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this, r = this.adapter.eventTargetHasClass(t.target, gt.CHIP_EXIT), l = t.propertyName === "width", a = t.propertyName === "opacity";
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
        var o = this.adapter.getAttribute(Se.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(o);
      }
      if (a) {
        var u = this.adapter.eventTargetHasClass(t.target, gt.LEADING_ICON) && this.adapter.hasClass(gt.SELECTED), c = this.adapter.eventTargetHasClass(t.target, gt.CHECKMARK) && !this.adapter.hasClass(gt.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(gt.HIDDEN_LEADING_ICON);
          return;
        }
        if (c) {
          this.adapter.removeClassFromLeadingIcon(gt.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(t) {
      this.eventFromPrimaryAction(t) && this.adapter.addClass(gt.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(t) {
      this.eventFromPrimaryAction(t) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(gt.PRIMARY_ACTION_FOCUSED));
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
      Wt.has(t.key) && (t.preventDefault(), this.focusNextAction(t.key, rn.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(t) {
      this.focusNextAction(t.detail.key, rn.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Un.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var t = this.adapter.isTrailingActionNavigable();
      if (t) {
        this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(t) {
      this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "0"), t === Un.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Un.SHOULD_FOCUS : Un.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(t, i) {
      var r = this.adapter.isTrailingActionNavigable(), l = this.getDirection(t);
      if (pn.has(t) || !r) {
        this.adapter.notifyNavigation(t, i);
        return;
      }
      if (i === rn.PRIMARY && l === Yt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === rn.TRAILING && l === Yt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(t, rn.NONE);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Se.ARROW_LEFT_KEY || t === Se.IE_ARROW_LEFT_KEY, l = t === Se.ARROW_RIGHT_KEY || t === Se.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Yt.LEFT : Yt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(t) {
      return this.eventFromPrimaryAction(t) && t.key === Se.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(t) {
      return t.key === Se.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(t) {
      return t.key === Se.ENTER_KEY || t.key === Se.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(t) {
      var i = this.adapter.hasClass(gt.DELETABLE);
      return i && (t.key === Se.BACKSPACE_KEY || t.key === Se.DELETE_KEY || t.key === Se.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(t) {
      t ? (this.adapter.addClass(gt.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "true")) : (this.adapter.removeClass(gt.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(t) {
      this.adapter.notifySelection(t, !1);
    }, e.prototype.notifyIgnoredSelection = function(t) {
      this.adapter.notifySelection(t, !0);
    }, e.prototype.eventFromPrimaryAction = function(t) {
      return this.adapter.eventTargetHasClass(t.target, gt.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(gt.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(gt.EDITING), this.adapter.notifyEditFinish();
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
var ka = (
  /** @class */
  function(n) {
    st(e, n);
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
        return new yi(s, o);
      }), i === void 0 && (i = function(s) {
        return new Ra(s);
      }), this.leadingIcon = this.root.querySelector(Se.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Se.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Se.PRIMARY_ACTION_SELECTOR);
      var l = this.root.querySelector(Se.TRAILING_ACTION_SELECTOR);
      l && (this.trailingAction = i(l));
      var a = Ke(Ke({}, yi.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = t(this.root, new Ri(a));
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
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Xt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Xt.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Xt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Xt.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), n.prototype.destroy.call(this);
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
            Se.INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, l) {
          return t.emit(
            Se.NAVIGATION_EVENT,
            { chipId: t.id, key: r, source: l },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          t.emit(
            Se.REMOVAL_EVENT,
            { chipId: t.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, l) {
          return t.emit(
            Se.SELECTION_EVENT,
            { chipId: t.id, selected: r, shouldIgnore: l },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return t.emit(
            Se.TRAILING_ICON_INTERACTION_EVENT,
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
      return new Hr(i);
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
  }(Li)
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
var Da = {
  CHIP_SELECTOR: ".mdc-chip"
}, ri = {
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
var Br = (
  /** @class */
  function(n) {
    st(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Da;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ri;
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
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(ri.CHOICE) || this.adapter.hasClass(ri.FILTER)) && this.toggleSelect(i);
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
        var o = this.adapter.isRTL(), u = r === Se.ARROW_LEFT_KEY || r === Se.IE_ARROW_LEFT_KEY, c = r === Se.ARROW_RIGHT_KEY || r === Se.IE_ARROW_RIGHT_KEY, f = r === Se.ARROW_DOWN_KEY || r === Se.IE_ARROW_DOWN_KEY, d = !o && c || o && u || f, h = r === Se.HOME_KEY, m = r === Se.END_KEY;
        d ? s++ : h ? s = 0 : m ? s = a : s--, !(s < 0 || s > a) && (this.removeFocusFromChipsExcept(s), this.focusChipAction(s, r, l));
      }
    }, e.prototype.focusChipAction = function(t, i, r) {
      var l = pn.has(i);
      if (l && r === rn.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
      if (l && r === rn.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      var a = this.getDirection(i);
      if (a === Yt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      if (a === Yt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Se.ARROW_LEFT_KEY || t === Se.IE_ARROW_LEFT_KEY, l = t === Se.ARROW_RIGHT_KEY || t === Se.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Yt.LEFT : Yt.RIGHT;
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
        if (this.adapter.hasClass(ri.CHOICE) && this.selectedChipIds.length > 0) {
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
var Di = Hr.strings, Ss = Di.INTERACTION_EVENT, Ts = Di.SELECTION_EVENT, Ls = Di.REMOVAL_EVENT, Os = Di.NAVIGATION_EVENT, qh = Br.strings.CHIP_SELECTOR, Rs = 0, Gh = (
  /** @class */
  function(n) {
    st(e, n);
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
        return new ka(i);
      }), this.chipFactory = t, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var t, i, r = this;
      try {
        for (var l = yt(this.chipsList), a = l.next(); !a.done; a = l.next()) {
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
      }, this.listen(Ss, this.handleChipInteraction), this.listen(Ts, this.handleChipSelection), this.listen(Ls, this.handleChipRemoval), this.listen(Os, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = yt(this.chipsList), l = r.next(); !l.done; l = r.next()) {
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
      this.unlisten(Ss, this.handleChipInteraction), this.unlisten(Ts, this.handleChipSelection), this.unlisten(Ls, this.handleChipRemoval), this.unlisten(Os, this.handleChipNavigation), n.prototype.destroy.call(this);
    }, e.prototype.addChip = function(t) {
      t.id = t.id || "mdc-chip-" + ++Rs, this.chipsList.push(this.chipFactory(t));
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        announceMessage: function(r) {
          Vh(r);
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
      return new Br(i);
    }, e.prototype.instantiateChips = function(t) {
      var i = [].slice.call(this.root.querySelectorAll(qh));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++Rs, t(r);
      });
    }, e.prototype.findChipIndex = function(t) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === t)
          return i;
      return -1;
    }, e;
  }(Li)
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
const Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: ka,
  MDCChipFoundation: Hr,
  MDCChipSet: Gh,
  MDCChipSetFoundation: Br,
  MDCChipTrailingAction: Ra,
  MDCChipTrailingActionFoundation: Oa,
  chipCssClasses: gt,
  chipSetCssClasses: ri,
  chipSetStrings: Da,
  chipStrings: Se,
  trailingActionStrings: Xt
}, Symbol.toStringTag, { value: "Module" }));
function ks(n) {
  let e;
  return {
    c() {
      e = ne("div"), w(e, "class", "mdc-chip__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Ds(n) {
  let e;
  return {
    c() {
      e = ne("div"), w(e, "class", "mdc-chip__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Kh(n) {
  let e, t, i, r, l = (
    /*ripple*/
    n[3] && !/*$nonInteractive*/
    n[14] && ks()
  );
  const a = (
    /*#slots*/
    n[34].default
  ), s = Te(
    a,
    n,
    /*$$scope*/
    n[38],
    null
  );
  let o = (
    /*touch*/
    n[4] && Ds()
  );
  return {
    c() {
      l && l.c(), e = oe(), s && s.c(), t = oe(), o && o.c(), i = We();
    },
    m(u, c) {
      l && l.m(u, c), V(u, e, c), s && s.m(u, c), V(u, t, c), o && o.m(u, c), V(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? l || (l = ks(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), s && s.p && (!r || c[1] & /*$$scope*/
      128) && Oe(
        s,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? Le(
          a,
          /*$$scope*/
          u[38],
          c,
          null
        ) : Re(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = Ds(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (C(s, u), r = !0);
    },
    o(u) {
      S(s, u), r = !1;
    },
    d(u) {
      u && (B(e), B(t), B(i)), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function Wh(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[6]
    ) },
    {
      use: [
        [
          Ot,
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
      ).map(hr).concat([
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
      $$slots: { default: [Kh] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = z(u, fe(r, [
      o[0] & /*tag*/
      64 && { tag: (
        /*tag*/
        s[6]
      ) },
      o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
      234930185 && {
        use: [
          [
            Ot,
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
        ).map(hr).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && Ce(
        /*$$restProps*/
        s[28]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[35](e), e.$on("transitionend", function() {
    me(
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
    me(
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
    me(
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
    me(
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
    me(
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
    me(
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
    me(
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
      e && te(e.$$.fragment), t = We();
    },
    m(s, o) {
      e && x(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (n = s, o[0] & /*component*/
      32 && l !== (l = /*component*/
      n[5])) {
        if (e) {
          Ne();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Ue();
        }
        l ? (e = Rt(l, a(n, o)), n[35](e), e.$on("transitionend", function() {
          me(
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
          me(
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
          me(
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
          me(
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
          me(
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
          me(
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
          me(
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
        ), te(e.$$.fragment), C(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
        503369055 ? fe(r, [
          o[0] & /*tag*/
          64 && { tag: (
            /*tag*/
            n[6]
          ) },
          o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
          234930185 && {
            use: [
              [
                Ot,
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
            ).map(hr).concat([
              /*style*/
              n[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && Ce(
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
      i || (e && C(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[35](null), e && $(e, s);
    }
  };
}
const hr = ([n, e]) => `${n}: ${e};`;
function zh(n, e, t) {
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
  let r = he(e, i), l, a, s, o, u, c, f, { $$slots: d = {}, $$scope: h } = e;
  const { MDCChipFoundation: m } = Vr, _ = nt(et());
  let { use: p = [] } = e, { class: v = "" } = e, { style: b = "" } = e, { chip: E } = e, { ripple: y = !0 } = e, { touch: T = !1 } = e, { shouldRemoveOnTrailingIconClick: k = !0 } = e, { shouldFocusPrimaryActionOnClick: g = !0 } = e, R, F, A = {}, I = {}, M = {};
  const O = Ge("SMUI:chips:chip:initialSelected");
  rt(n, O, (ee) => t(44, c = ee));
  let U = c, W, N;
  const j = Ge("SMUI:chips:nonInteractive");
  rt(n, j, (ee) => t(14, f = ee));
  const D = Ge("SMUI:chips:choice");
  rt(n, D, (ee) => t(40, a = ee));
  const L = Ge("SMUI:chips:chip:index");
  rt(n, L, (ee) => t(39, l = ee));
  let { component: Z = Nt } = e, { tag: Fe = Z === Nt ? "div" : void 0 } = e;
  const Me = At(k);
  rt(n, Me, (ee) => t(43, u = ee)), qe("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Me);
  const be = At(U);
  rt(n, be, (ee) => t(42, o = ee)), qe("SMUI:chips:chip:isSelected", be);
  const Xe = At(I);
  if (rt(n, Xe, (ee) => t(41, s = ee)), qe("SMUI:chips:chip:leadingIconClasses", Xe), qe("SMUI:chips:chip:focusable", a && U || l === 0), !E)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  at(() => {
    t(7, F = new m({
      addClass: De,
      addClassToLeadingIcon: ie,
      eventTargetHasClass: (ze, ut) => ze && "classList" in ze ? ze.classList.contains(ut) : !1,
      focusPrimaryAction: () => {
        W && W.focus();
      },
      focusTrailingAction: () => {
        N && N.focus();
      },
      getAttribute: (ze) => Pe().getAttribute(ze),
      getCheckmarkBoundingClientRect: () => {
        const ze = Pe().querySelector(".mdc-chip__checkmark");
        return ze ? ze.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Be,
      getRootBoundingClientRect: () => Pe().getBoundingClientRect(),
      hasClass: ke,
      hasLeadingIcon: () => !!Pe().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Pe()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => N ? N.isNavigable() : !1,
      notifyInteraction: () => ge(Pe(), "SMUIChip:interaction", { chipId: E }, void 0, !0),
      notifyNavigation: (ze, ut) => ge(Pe(), "SMUIChip:navigation", { chipId: E, key: ze, source: ut }, void 0, !0),
      notifyRemoval: (ze) => {
        ge(Pe(), "SMUIChip:removal", { chipId: E, removedAnnouncement: ze }, void 0, !0);
      },
      notifySelection: (ze, ut) => ge(Pe(), "SMUIChip:selection", { chipId: E, selected: ze, shouldIgnore: ut }, void 0, !0),
      notifyTrailingIconInteraction: () => ge(Pe(), "SMUIChip:trailingIconInteraction", { chipId: E }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: we,
      removeClassFromLeadingIcon: K,
      removeTrailingActionFocus: () => {
        N && N.removeFocus();
      },
      setPrimaryActionAttr: (ze, ut) => {
        W && W.addAttr(ze, ut);
      },
      setStyleProperty: Ye
    }));
    const ee = {
      chipId: E,
      get selected() {
        return U;
      },
      focusPrimaryAction: Y,
      focusTrailingAction: ve,
      removeFocus: je,
      setSelectedFromChipSet: vt
    };
    return ge(Pe(), "SMUIChipsChip:mount", ee), F.init(), () => {
      ge(Pe(), "SMUIChipsChip:unmount", ee), F.destroy();
    };
  });
  function G(ee) {
    t(12, W = ee.detail);
  }
  function Q(ee) {
    t(13, N = ee.detail);
  }
  function ke(ee) {
    return ee in A ? A[ee] : Pe().classList.contains(ee);
  }
  function De(ee) {
    A[ee] || t(10, A[ee] = !0, A);
  }
  function we(ee) {
    (!(ee in A) || A[ee]) && t(10, A[ee] = !1, A);
  }
  function ie(ee) {
    I[ee] || t(33, I[ee] = !0, I);
  }
  function K(ee) {
    (!(ee in I) || I[ee]) && t(33, I[ee] = !1, I);
  }
  function Ye(ee, ze) {
    M[ee] != ze && (ze === "" || ze == null ? (delete M[ee], t(11, M)) : t(11, M[ee] = ze, M));
  }
  function Be(ee) {
    return ee in M ? M[ee] : getComputedStyle(Pe()).getPropertyValue(ee);
  }
  function vt(ee, ze) {
    t(8, U = ee), F.setSelectedFromChipSet(U, ze);
  }
  function Y() {
    F.focusPrimaryAction();
  }
  function ve() {
    F.focusTrailingAction();
  }
  function je() {
    F.removeFocus();
  }
  function Pe() {
    return R.getElement();
  }
  function St(ee) {
    se[ee ? "unshift" : "push"](() => {
      R = ee, t(9, R);
    });
  }
  const q = () => t(12, W = void 0), le = () => t(13, N = void 0);
  return n.$$set = (ee) => {
    e = z(z({}, e), tt(ee)), t(28, r = he(e, i)), "use" in ee && t(0, p = ee.use), "class" in ee && t(1, v = ee.class), "style" in ee && t(2, b = ee.style), "chip" in ee && t(29, E = ee.chip), "ripple" in ee && t(3, y = ee.ripple), "touch" in ee && t(4, T = ee.touch), "shouldRemoveOnTrailingIconClick" in ee && t(30, k = ee.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in ee && t(31, g = ee.shouldFocusPrimaryActionOnClick), "component" in ee && t(5, Z = ee.component), "tag" in ee && t(6, Fe = ee.tag), "$$scope" in ee && t(38, h = ee.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && Bt(Me, u = k, u), n.$$.dirty[0] & /*selected*/
    256 && Bt(be, o = U, o), n.$$.dirty[1] & /*leadingIconClasses*/
    4 && Bt(Xe, s = I, s), n.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && F && F.getShouldRemoveOnTrailingIconClick() !== k && F.setShouldRemoveOnTrailingIconClick(k), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && F && F.setShouldFocusPrimaryActionOnClick(g);
  }, [
    p,
    v,
    b,
    y,
    T,
    Z,
    Fe,
    F,
    U,
    R,
    A,
    M,
    W,
    N,
    f,
    _,
    O,
    j,
    D,
    L,
    Me,
    be,
    Xe,
    G,
    Q,
    De,
    we,
    Ye,
    r,
    E,
    k,
    g,
    Pe,
    I,
    d,
    St,
    q,
    le,
    h
  ];
}
class Xh extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      zh,
      Wh,
      _e,
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
function Ms(n, e, t) {
  const i = n.slice();
  return i[37] = e[t], i[39] = t, i;
}
const Yh = (n) => ({ chip: n[0] & /*chips*/
1 }), Fs = (n) => ({ chip: (
  /*chip*/
  n[37]
) });
function Zh(n) {
  let e;
  const t = (
    /*#slots*/
    n[25].default
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[27],
    Fs
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
      134217729) && Oe(
        i,
        t,
        r,
        /*$$scope*/
        r[27],
        e ? Le(
          t,
          /*$$scope*/
          r[27],
          l,
          Yh
        ) : Re(
          /*$$scope*/
          r[27]
        ),
        Fs
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qh(n) {
  let e, t, i;
  return e = new Zn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        n[10][
          /*i*/
          n[39]
        ]
      ),
      $$slots: { default: [Zh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe();
    },
    m(r, l) {
      x(e, r, l), V(r, t, l), i = !0;
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
      i || (C(e.$$.fragment, r), i = !0);
    },
    o(r) {
      S(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(t), $(e, r);
    }
  };
}
function Ns(n, e) {
  let t, i, r;
  return i = new Zn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [Qh] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = We(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      V(l, t, a), x(i, l, a), r = !0;
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
      r || (C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), $(i, l);
    }
  };
}
function Jh(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, l, a, s, o, u = kt(
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
    let m = Ms(n, u, h), _ = c(m);
    i.set(_, t[h] = Ns(_, m));
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
    d = z(d, f[h]);
  return {
    c() {
      e = ne("div");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      ue(e, d);
    },
    m(h, m) {
      V(h, e, m);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      n[26](e), a = !0, s || (o = [
        ce(l = $e.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ce(
          /*forwardEvents*/
          n[9].call(null, e)
        ),
        de(
          e,
          "SMUIChipsChip:mount",
          /*handleChipMount*/
          n[14]
        ),
        de(
          e,
          "SMUIChipsChip:unmount",
          /*handleChipUnmount*/
          n[15]
        ),
        de(
          e,
          "SMUIChip:interaction",
          /*handleChipInteraction*/
          n[16]
        ),
        de(
          e,
          "SMUIChip:selection",
          /*handleChipSelection*/
          n[17]
        ),
        de(
          e,
          "SMUIChip:removal",
          /*handleChipRemoval*/
          n[18]
        ),
        de(
          e,
          "SMUIChip:navigation",
          /*handleChipNavigation*/
          n[19]
        )
      ], s = !0);
    },
    p(h, m) {
      m[0] & /*chips, initialSelected, $$scope, key*/
      134218761 && (u = kt(
        /*chips*/
        h[0]
      ), Ne(), t = di(t, m, c, 1, h, u, i, e, fi, Ns, null, Ms), Ue()), ue(e, d = fe(f, [
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
      ])), l && me(l.update) && m[0] & /*use*/
      2 && l.update.call(
        null,
        /*use*/
        h[1]
      );
    },
    i(h) {
      if (!a) {
        for (let m = 0; m < u.length; m += 1)
          C(t[m]);
        a = !0;
      }
    },
    o(h) {
      for (let m = 0; m < t.length; m += 1)
        S(t[m]);
      a = !1;
    },
    d(h) {
      h && B(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      n[26](null), s = !1, Je(o);
    }
  };
}
function Us(n, e) {
  let t = new Set(n);
  for (let i of e)
    t.delete(i);
  return t;
}
function xh(n, e, t) {
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
  let r = he(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = Vr, f = nt(et());
  let { use: d = [] } = e, { class: h = "" } = e, { chips: m = [] } = e, { key: _ = (G) => G } = e, { selected: p = void 0 } = e, { nonInteractive: v = !1 } = e, { choice: b = !1 } = e, { filter: E = !1 } = e, { input: y = !1 } = e, T, k, g = {}, R = /* @__PURE__ */ new WeakMap(), F = m.map((G) => b && p === G || E && p.indexOf(G) !== -1);
  const A = At(v);
  rt(n, A, (G) => t(31, s = G)), qe("SMUI:chips:nonInteractive", A);
  const I = At(b);
  rt(n, I, (G) => t(30, a = G)), qe("SMUI:chips:choice", I);
  const M = At(E);
  rt(n, M, (G) => t(29, l = G)), qe("SMUI:chips:filter", M);
  let O = E ? new Set(p) : p;
  at(() => {
    if (t(23, k = new c({
      announceMessage: bo,
      focusChipPrimaryActionAtIndex: (G) => {
        var Q;
        (Q = Z(m[G])) === null || Q === void 0 || Q.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (G) => {
        var Q;
        (Q = Z(m[G])) === null || Q === void 0 || Q.focusTrailingAction();
      },
      getChipListCount: () => m.length,
      getIndexOfChipById: (G) => m.indexOf(G),
      hasClass: (G) => be().classList.contains(G),
      isRTL: () => getComputedStyle(be()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (G) => {
        G >= 0 && G < m.length && (b && p === m[G] ? t(21, p = null) : E && p.indexOf(m[G]) !== -1 && (p.splice(p.indexOf(m[G]), 1), t(21, p)), m.splice(G, 1), t(0, m));
      },
      removeFocusFromChipAtIndex: (G) => {
        var Q;
        (Q = Z(m[G])) === null || Q === void 0 || Q.removeFocus();
      },
      selectChipAtIndex: (G, Q, ke) => {
        var De;
        if (G >= 0 && G < m.length) {
          if (E) {
            const we = p.indexOf(m[G]);
            Q && we === -1 ? (p.push(m[G]), t(21, p)) : !Q && we !== -1 && (p.splice(we, 1), t(21, p));
          } else
            b && (Q || p === m[G]) && t(21, p = Q ? m[G] : null);
          (De = Z(m[G])) === null || De === void 0 || De.setSelectedFromChipSet(Q, ke);
        }
      }
    })), k.init(), b && p != null)
      k.select(p);
    else if (E && p.length)
      for (const G of p)
        k.select(G);
    return () => {
      k.destroy();
    };
  });
  function U(G) {
    const Q = G.detail;
    Fe(Q.chipId, Q);
  }
  function W(G) {
    const Q = G.detail;
    Me(Q.chipId);
  }
  function N(G) {
    k && k.handleChipInteraction(G.detail);
  }
  function j(G) {
    k && k.handleChipSelection(G.detail);
  }
  function D(G) {
    k && k.handleChipRemoval(G.detail);
  }
  function L(G) {
    k && k.handleChipNavigation(G.detail);
  }
  function Z(G) {
    return G instanceof Object ? R.get(G) : g[G];
  }
  function Fe(G, Q) {
    G instanceof Object ? R.set(G, Q) : g[G] = Q;
  }
  function Me(G) {
    G instanceof Object ? R.delete(G) : delete g[G];
  }
  function be() {
    return T;
  }
  function Xe(G) {
    se[G ? "unshift" : "push"](() => {
      T = G, t(8, T);
    });
  }
  return n.$$set = (G) => {
    e = z(z({}, e), tt(G)), t(20, r = he(e, i)), "use" in G && t(1, d = G.use), "class" in G && t(2, h = G.class), "chips" in G && t(0, m = G.chips), "key" in G && t(3, _ = G.key), "selected" in G && t(21, p = G.selected), "nonInteractive" in G && t(4, v = G.nonInteractive), "choice" in G && t(5, b = G.choice), "filter" in G && t(6, E = G.filter), "input" in G && t(7, y = G.input), "$$scope" in G && t(27, u = G.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*nonInteractive*/
    16 && Bt(A, s = v, s), n.$$.dirty[0] & /*choice*/
    32 && Bt(I, a = b, a), n.$$.dirty[0] & /*filter*/
    64 && Bt(M, l = E, l), n.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && k && b && O !== p && (t(24, O = p), k.select(p)), n.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && k && E) {
      const G = new Set(p), Q = Us(O, G), ke = Us(G, O);
      if (Q.size || ke.size) {
        t(24, O = G);
        for (let De of Q)
          m.indexOf(De) !== -1 && k.handleChipSelection({ chipId: De, selected: !1 });
        for (let De of ke)
          k.handleChipSelection({ chipId: De, selected: !0 });
      }
    }
  }, [
    m,
    d,
    h,
    _,
    v,
    b,
    E,
    y,
    T,
    f,
    F,
    A,
    I,
    M,
    U,
    W,
    N,
    j,
    D,
    L,
    r,
    p,
    be,
    k,
    O,
    o,
    Xe,
    u
  ];
}
class $h extends Ee {
  constructor(e) {
    super(), ye(
      this,
      e,
      xh,
      Jh,
      _e,
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
function em(n) {
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
    u = z(u, o[c]);
  return {
    c() {
      e = ne("span"), t = lt("svg"), i = lt("path"), w(i, "class", "mdc-chip__checkmark-path"), w(i, "fill", "none"), w(i, "stroke", "black"), w(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), w(t, "class", "mdc-chip__checkmark-svg"), w(t, "viewBox", "-2 -3 30 30"), ue(e, u);
    },
    m(c, f) {
      V(c, e, f), J(e, t), J(t, i), n[5](e), a || (s = ce(l = $e.call(
        null,
        e,
        /*use*/
        n[0]
      )), a = !0);
    },
    p(c, [f]) {
      ue(e, u = fe(o, [
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
      ])), l && me(l.update) && f & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && B(e), n[5](null), a = !1, s();
    }
  };
}
function tm(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { use: l = [] } = e, { class: a = "" } = e, s;
  function o() {
    return s;
  }
  function u(c) {
    se[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return n.$$set = (c) => {
    e = z(z({}, e), tt(c)), t(3, r = he(e, i)), "use" in c && t(0, l = c.use), "class" in c && t(1, a = c.class);
  }, [l, a, s, r, o, u];
}
class nm extends Ee {
  constructor(e) {
    super(), ye(this, e, tm, em, _e, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function ws(n) {
  let e, t, i = {};
  return e = new nm({ props: i }), n[23](e), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      x(e, r, l), t = !0;
    },
    p(r, l) {
      const a = {};
      e.$set(a);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[23](null), $(e, r);
    }
  };
}
function im(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[22].default
  ), a = Te(
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
    o = z(o, s[u]);
  return {
    c() {
      e = ne("span"), t = ne("span"), a && a.c(), w(t, "class", "mdc-chip__text"), ue(e, o);
    },
    m(u, c) {
      V(u, e, c), J(e, t), a && a.m(t, null), n[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && Oe(
        a,
        l,
        u,
        /*$$scope*/
        u[21],
        r ? Le(
          l,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Re(
          /*$$scope*/
          u[21]
        ),
        null
      ), ue(e, o = fe(s, [
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
      r || (C(a, u), r = !0);
    },
    o(u) {
      S(a, u), r = !1;
    },
    d(u) {
      u && B(e), a && a.d(u), n[24](null);
    }
  };
}
function rm(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[22].default
  ), r = Te(
    i,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ne("span"), r && r.c(), w(e, "class", "mdc-chip__text");
    },
    m(l, a) {
      V(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, a) {
      r && r.p && (!t || a & /*$$scope*/
      2097152) && Oe(
        r,
        i,
        l,
        /*$$scope*/
        l[21],
        t ? Le(
          i,
          /*$$scope*/
          l[21],
          a,
          null
        ) : Re(
          /*$$scope*/
          l[21]
        ),
        null
      );
    },
    i(l) {
      t || (C(r, l), t = !0);
    },
    o(l) {
      S(r, l), t = !1;
    },
    d(l) {
      l && B(e), r && r.d(l);
    }
  };
}
function lm(n) {
  let e, t, i, r, l, a, s, o, u = (
    /*$filter*/
    n[3] && ws(n)
  );
  const c = [rm, im], f = [];
  function d(h, m) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = d(n), r = f[i] = c[i](n), {
    c() {
      u && u.c(), e = oe(), t = ne("span"), r.c(), w(t, "role", "gridcell");
    },
    m(h, m) {
      u && u.m(h, m), V(h, e, m), V(h, t, m), f[i].m(t, null), n[25](t), a = !0, s || (o = [
        ce(l = $e.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[11].call(null, t)
        )
      ], s = !0);
    },
    p(h, [m]) {
      /*$filter*/
      h[3] ? u ? (u.p(h, m), m & /*$filter*/
      8 && C(u, 1)) : (u = ws(h), u.c(), C(u, 1), u.m(e.parentNode, e)) : u && (Ne(), S(u, 1, 1, () => {
        u = null;
      }), Ue());
      let _ = i;
      i = d(h), i === _ ? f[i].p(h, m) : (Ne(), S(f[_], 1, 1, () => {
        f[_] = null;
      }), Ue(), r = f[i], r ? r.p(h, m) : (r = f[i] = c[i](h), r.c()), C(r, 1), r.m(t, null)), l && me(l.update) && m & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (C(u), C(r), a = !0);
    },
    o(h) {
      S(u), S(r), a = !1;
    },
    d(h) {
      h && (B(e), B(t)), u && u.d(h), f[i].d(), n[25](null), s = !1, Je(o);
    }
  };
}
function sm(n, e, t) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let l = he(e, r), a, s, o, u, { $$slots: c = {}, $$scope: f } = e;
  const d = nt(et());
  let { use: h = [] } = e, { class: m = "" } = e, { tabindex: _ = Ge("SMUI:chips:chip:focusable") ? 0 : -1 } = e, p, v, b, E = {};
  const y = Ge("SMUI:chips:nonInteractive");
  rt(n, y, (N) => t(9, o = N));
  const T = Ge("SMUI:chips:choice");
  rt(n, T, (N) => t(2, a = N));
  const k = Ge("SMUI:chips:filter");
  rt(n, k, (N) => t(3, s = N));
  const g = Ge("SMUI:chips:chip:isSelected");
  rt(n, g, (N) => t(10, u = N)), at(() => {
    let N = { focus: A, addAttr: R };
    return ge(M(), "SMUIChipsChipPrimaryAction:mount", N), () => {
      ge(M(), "SMUIChipsChipPrimaryAction:unmount", N);
    };
  });
  function R(N, j) {
    E[N] !== j && t(7, E[N] = j, E);
  }
  function F(N) {
    E.tabindex !== p.getAttribute("tabindex") ? Mr().then(N) : N();
  }
  function A() {
    F(() => {
      b && b.focus();
    });
  }
  function I() {
    return v && v.getElement();
  }
  function M() {
    return p;
  }
  function O(N) {
    se[N ? "unshift" : "push"](() => {
      v = N, t(5, v);
    });
  }
  function U(N) {
    se[N ? "unshift" : "push"](() => {
      b = N, t(6, b);
    });
  }
  function W(N) {
    se[N ? "unshift" : "push"](() => {
      p = N, t(4, p);
    });
  }
  return n.$$set = (N) => {
    e = z(z({}, e), tt(N)), t(16, l = he(e, r)), "use" in N && t(0, h = N.use), "class" in N && t(1, m = N.class), "tabindex" in N && t(17, _ = N.tabindex), "$$scope" in N && t(21, f = N.$$scope);
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
    v,
    b,
    E,
    i,
    o,
    u,
    d,
    y,
    T,
    k,
    g,
    l,
    _,
    A,
    I,
    M,
    f,
    c,
    O,
    U,
    W
  ];
}
class am extends Ee {
  constructor(e) {
    super(), ye(this, e, sm, lm, _e, {
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
function Ps(n) {
  let e;
  return {
    c() {
      e = ne("span"), w(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function om(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p = (
    /*touch*/
    n[4] && Ps()
  );
  const v = (
    /*#slots*/
    n[23].default
  ), b = Te(
    v,
    n,
    /*$$scope*/
    n[22],
    null
  );
  let E = [
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
  ], y = {};
  for (let g = 0; g < E.length; g += 1)
    y = z(y, E[g]);
  let T = [
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
      ).map(Hs).concat([
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
    Zt(
      /*$$restProps*/
      n[17],
      ["icon$"]
    )
  ], k = {};
  for (let g = 0; g < T.length; g += 1)
    k = z(k, T[g]);
  return {
    c() {
      e = ne("button"), t = ne("span"), i = oe(), p && p.c(), r = oe(), l = ne("span"), b && b.c(), w(t, "class", "mdc-deprecated-chip-trailing-action__ripple"), ue(l, y), ue(e, k);
    },
    m(g, R) {
      V(g, e, R), J(e, t), J(e, i), p && p.m(e, null), J(e, r), J(e, l), b && b.m(l, null), e.autofocus && e.focus(), n[24](e), h = !0, m || (_ = [
        ce(s = $e.call(
          null,
          l,
          /*icon$use*/
          n[6]
        )),
        ce(f = Ot.call(null, e, {
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
        ce(d = $e.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        de(e, "click", function() {
          me(
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
        de(e, "keydown", function() {
          me(
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
    p(g, [R]) {
      n = g, /*touch*/
      n[4] ? p || (p = Ps(), p.c(), p.m(e, r)) : p && (p.d(1), p = null), b && b.p && (!h || R & /*$$scope*/
      4194304) && Oe(
        b,
        v,
        n,
        /*$$scope*/
        n[22],
        h ? Le(
          v,
          /*$$scope*/
          n[22],
          R,
          null
        ) : Re(
          /*$$scope*/
          n[22]
        ),
        null
      ), ue(l, y = fe(E, [
        (!h || R & /*icon$class*/
        128 && a !== (a = re({
          [
            /*icon$class*/
            n[7]
          ]: !0,
          "mdc-deprecated-chip-trailing-action__icon": !0
        }))) && { class: a },
        R & /*$$restProps*/
        131072 && Ve(
          /*$$restProps*/
          n[17],
          "icon$"
        )
      ])), s && me(s.update) && R & /*icon$use*/
      64 && s.update.call(
        null,
        /*icon$use*/
        n[6]
      ), ue(e, k = fe(T, [
        { type: "button" },
        (!h || R & /*className, internalClasses*/
        1026 && o !== (o = re({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-deprecated-chip-trailing-action": !0,
          .../*internalClasses*/
          n[10]
        }))) && { class: o },
        (!h || R & /*internalStyles, style*/
        2052 && u !== (u = Object.entries(
          /*internalStyles*/
          n[11]
        ).map(Hs).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: u },
        (!h || R & /*nonNavigable*/
        32 && c !== (c = /*nonNavigable*/
        n[5] ? "true" : void 0)) && { "aria-hidden": c },
        { tabindex: "-1" },
        R & /*internalAttrs*/
        4096 && /*internalAttrs*/
        n[12],
        R & /*$$restProps*/
        131072 && Zt(
          /*$$restProps*/
          n[17],
          ["icon$"]
        )
      ])), f && me(f.update) && R & /*ripple*/
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
      }), d && me(d.update) && R & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(g) {
      h || (C(b, g), h = !0);
    },
    o(g) {
      S(b, g), h = !1;
    },
    d(g) {
      g && B(e), p && p.d(), b && b.d(g), n[24](null), m = !1, Je(_);
    }
  };
}
const Hs = ([n, e]) => `${n}: ${e};`;
function um(n, e, t) {
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
  let r = he(e, i), { $$slots: l = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: s } = Vr, o = nt(et());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { ripple: d = !0 } = e, { touch: h = !1 } = e, { nonNavigable: m = !1 } = e, { icon$use: _ = [] } = e, { icon$class: p = "" } = e, v, b, E = {}, y = {}, T = {};
  at(() => {
    t(9, b = new s({
      focus: () => {
        const D = W();
        I(() => {
          D.focus();
        });
      },
      getAttribute: F,
      notifyInteraction: (D) => ge(W(), "SMUIChipTrailingAction:interaction", { trigger: D }, void 0, !0),
      notifyNavigation: (D) => {
        ge(W(), "SMUIChipTrailingAction:navigation", { key: D }, void 0, !0);
      },
      setAttribute: A
    }));
    const j = { isNavigable: M, focus: O, removeFocus: U };
    return ge(W(), "SMUIChipsChipTrailingAction:mount", j), b.init(), () => {
      ge(W(), "SMUIChipsChipTrailingAction:unmount", j), b.destroy();
    };
  });
  function k(j) {
    E[j] || t(10, E[j] = !0, E);
  }
  function g(j) {
    (!(j in E) || E[j]) && t(10, E[j] = !1, E);
  }
  function R(j, D) {
    y[j] != D && (D === "" || D == null ? (delete y[j], t(11, y)) : t(11, y[j] = D, y));
  }
  function F(j) {
    var D;
    return j in T ? (D = T[j]) !== null && D !== void 0 ? D : null : W().getAttribute(j);
  }
  function A(j, D) {
    T[j] !== D && t(12, T[j] = D, T);
  }
  function I(j) {
    T.tabindex !== v.getAttribute("tabindex") ? Mr().then(j) : j();
  }
  function M() {
    return b.isNavigable();
  }
  function O() {
    b.focus();
  }
  function U() {
    b.removeFocus();
  }
  function W() {
    return v;
  }
  function N(j) {
    se[j ? "unshift" : "push"](() => {
      v = j, t(8, v);
    });
  }
  return n.$$set = (j) => {
    e = z(z({}, e), tt(j)), t(17, r = he(e, i)), "use" in j && t(0, u = j.use), "class" in j && t(1, c = j.class), "style" in j && t(2, f = j.style), "ripple" in j && t(3, d = j.ripple), "touch" in j && t(4, h = j.touch), "nonNavigable" in j && t(5, m = j.nonNavigable), "icon$use" in j && t(6, _ = j.icon$use), "icon$class" in j && t(7, p = j.icon$class), "$$scope" in j && t(22, a = j.$$scope);
  }, [
    u,
    c,
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    E,
    y,
    T,
    o,
    k,
    g,
    R,
    r,
    M,
    O,
    U,
    W,
    a,
    l,
    N
  ];
}
class cm extends Ee {
  constructor(e) {
    super(), ye(this, e, um, om, _e, {
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
function fm(n) {
  let e;
  return {
    c() {
      e = ct(
        /*title*/
        n[0]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*title*/
      1 && Ct(
        e,
        /*title*/
        t[0]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function Bs(n) {
  let e, t;
  return e = new cm({
    props: {
      $$slots: { default: [dm] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      n[2]
    ) && n[2].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, r) {
      n = i;
      const l = {};
      r & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function dm(n) {
  let e, t;
  return e = new La({
    props: {
      svgStyles: "margin-left: 0; fill: unset;"
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p: Qe,
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function hm(n) {
  let e, t, i, r;
  e = new am({
    props: {
      $$slots: { default: [fm] },
      $$scope: { ctx: n }
    }
  });
  let l = (
    /*closeable*/
    n[1] && !/*disabled*/
    n[3] && Bs(n)
  );
  return {
    c() {
      te(e.$$.fragment), t = oe(), l && l.c(), i = We();
    },
    m(a, s) {
      x(e, a, s), V(a, t, s), l && l.m(a, s), V(a, i, s), r = !0;
    },
    p(a, s) {
      const o = {};
      s & /*$$scope, title*/
      17 && (o.$$scope = { dirty: s, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? l ? (l.p(a, s), s & /*closeable, disabled*/
      10 && C(l, 1)) : (l = Bs(a), l.c(), C(l, 1), l.m(i.parentNode, i)) : l && (Ne(), S(l, 1, 1, () => {
        l = null;
      }), Ue());
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(l), r = !0);
    },
    o(a) {
      S(e.$$.fragment, a), S(l), r = !1;
    },
    d(a) {
      a && (B(t), B(i)), $(e, a), l && l.d(a);
    }
  };
}
function mm(n) {
  let e, t;
  return e = new Xh({
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
      $$slots: { default: [hm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function pm(n, e, t) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: l } = e, { disabled: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, i = s.title), "closeable" in s && t(1, r = s.closeable), "callback" in s && t(2, l = s.callback), "disabled" in s && t(3, a = s.disabled);
  }, [i, r, l, a];
}
class gm extends Ee {
  constructor(e) {
    super(), ye(this, e, pm, mm, _e, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
const _m = (n) => ({}), Vs = (n) => ({});
function js(n) {
  let e, t, i;
  function r(a) {
    n[14](a);
  }
  let l = { label: "Input" };
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Lc({ props: l }), se.push(() => It(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        x(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], bt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function qs(n) {
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
    n[1]), e = new ya({ props: s }), se.push(() => It(e, "value", l)), se.push(() => It(e, "selectedOptionIndex", a)), {
      c() {
        te(e.$$.fragment);
      },
      m(u, c) {
        x(e, u, c), r = !0;
      },
      p(u, c) {
        var d;
        const f = {};
        c & /*getSelectedFilterType*/
        32 && (f.data = /*getSelectedFilterType*/
        (d = u[5].inputType) == null ? void 0 : d.options), !t && c & /*inputValue*/
        8 && (t = !0, f.value = /*inputValue*/
        u[3], bt(() => t = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, f.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], bt(() => i = !1)), e.$set(f);
      },
      i(u) {
        r || (C(e.$$.fragment, u), r = !0);
      },
      o(u) {
        S(e.$$.fragment, u), r = !1;
      },
      d(u) {
        $(e, u);
      }
    }
  );
}
function Gs(n) {
  let e, t, i;
  function r(a) {
    n[17](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Yf({ props: l }), se.push(() => It(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        x(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], bt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function bm(n) {
  let e;
  return {
    c() {
      e = ct("Add Filter");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Im(n) {
  let e, t;
  function i() {
    return (
      /*func*/
      n[18](
        /*chip*/
        n[22]
      )
    );
  }
  return e = new gm({
    props: {
      title: (
        /*chip*/
        n[22].text
      ),
      callback: i,
      disabled: (
        /*chip*/
        n[22].disabled
      )
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      x(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l & /*chip*/
      4194304 && (a.title = /*chip*/
      n[22].text), l & /*chip*/
      4194304 && (a.callback = i), l & /*chip*/
      4194304 && (a.disabled = /*chip*/
      n[22].disabled), e.$set(a);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function vm(n) {
  var A, I, M, O, U, W;
  let e, t, i, r, l, a, s, o, u, c, f, d, h, m, _, p, v, b;
  function E(N) {
    n[13](N);
  }
  let y = {
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
  n[4] !== void 0 && (y.value = /*selectedFilterType*/
  n[4]), r = new ya({ props: y }), se.push(() => It(r, "value", E));
  let T = (
    /*getSelectedFilterType*/
    ((I = (A = n[5]) == null ? void 0 : A.inputType) == null ? void 0 : I.type) === "string" && js(n)
  ), k = (
    /*getSelectedFilterType*/
    ((O = (M = n[5]) == null ? void 0 : M.inputType) == null ? void 0 : O.type) === "select" && qs(n)
  ), g = (
    /*getSelectedFilterType*/
    ((W = (U = n[5]) == null ? void 0 : U.inputType) == null ? void 0 : W.type) === "timepicker" && Gs(n)
  );
  f = new wr({
    props: {
      callback: (
        /*addFilter*/
        n[8]
      ),
      disabled: (
        /*addFilterDisabled*/
        n[6]
      ),
      $$slots: { default: [bm] },
      $$scope: { ctx: n }
    }
  });
  const R = (
    /*#slots*/
    n[12]["filter-controls"]
  ), F = Te(
    R,
    n,
    /*$$scope*/
    n[19],
    Vs
  );
  return v = new $h({
    props: {
      chips: (
        /*activeFilters*/
        n[0]
      ),
      $$slots: {
        default: [
          Im,
          ({ chip: N }) => ({ 22: N }),
          ({ chip: N }) => N ? 4194304 : 0
        ]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = ne("div"), t = ne("div"), i = ne("div"), te(r.$$.fragment), a = oe(), T && T.c(), s = oe(), k && k.c(), o = oe(), g && g.c(), u = oe(), c = ne("div"), te(f.$$.fragment), d = oe(), F && F.c(), h = oe(), m = ne("div"), _ = oe(), p = ne("div"), te(v.$$.fragment), w(i, "class", "filter-input-controls svelte-1tmo1p6"), w(c, "class", "filter-button-controls svelte-1tmo1p6"), w(t, "class", "input-section svelte-1tmo1p6"), w(m, "class", "separator svelte-1tmo1p6"), w(p, "class", "chip-section svelte-1tmo1p6"), w(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(N, j) {
      V(N, e, j), J(e, t), J(t, i), x(r, i, null), J(i, a), T && T.m(i, null), J(i, s), k && k.m(i, null), J(i, o), g && g.m(i, null), J(t, u), J(t, c), x(f, c, null), J(c, d), F && F.m(c, null), J(e, h), J(e, m), J(e, _), J(e, p), x(v, p, null), b = !0;
    },
    p(N, j) {
      var Fe, Me, be, Xe, G, Q;
      const D = {};
      j & /*disabled*/
      4 && (D.disabled = /*disabled*/
      N[2]), j & /*convertTypeToSelection*/
      128 && (D.data = /*convertTypeToSelection*/
      N[7]), !l && j & /*selectedFilterType*/
      16 && (l = !0, D.value = /*selectedFilterType*/
      N[4], bt(() => l = !1)), r.$set(D), /*getSelectedFilterType*/
      ((Me = (Fe = N[5]) == null ? void 0 : Fe.inputType) == null ? void 0 : Me.type) === "string" ? T ? (T.p(N, j), j & /*getSelectedFilterType*/
      32 && C(T, 1)) : (T = js(N), T.c(), C(T, 1), T.m(i, s)) : T && (Ne(), S(T, 1, 1, () => {
        T = null;
      }), Ue()), /*getSelectedFilterType*/
      ((Xe = (be = N[5]) == null ? void 0 : be.inputType) == null ? void 0 : Xe.type) === "select" ? k ? (k.p(N, j), j & /*getSelectedFilterType*/
      32 && C(k, 1)) : (k = qs(N), k.c(), C(k, 1), k.m(i, o)) : k && (Ne(), S(k, 1, 1, () => {
        k = null;
      }), Ue()), /*getSelectedFilterType*/
      ((Q = (G = N[5]) == null ? void 0 : G.inputType) == null ? void 0 : Q.type) === "timepicker" ? g ? (g.p(N, j), j & /*getSelectedFilterType*/
      32 && C(g, 1)) : (g = Gs(N), g.c(), C(g, 1), g.m(i, null)) : g && (Ne(), S(g, 1, 1, () => {
        g = null;
      }), Ue());
      const L = {};
      j & /*addFilterDisabled*/
      64 && (L.disabled = /*addFilterDisabled*/
      N[6]), j & /*$$scope*/
      524288 && (L.$$scope = { dirty: j, ctx: N }), f.$set(L), F && F.p && (!b || j & /*$$scope*/
      524288) && Oe(
        F,
        R,
        N,
        /*$$scope*/
        N[19],
        b ? Le(
          R,
          /*$$scope*/
          N[19],
          j,
          _m
        ) : Re(
          /*$$scope*/
          N[19]
        ),
        Vs
      );
      const Z = {};
      j & /*activeFilters*/
      1 && (Z.chips = /*activeFilters*/
      N[0]), j & /*$$scope, chip*/
      4718592 && (Z.$$scope = { dirty: j, ctx: N }), v.$set(Z);
    },
    i(N) {
      b || (C(r.$$.fragment, N), C(T), C(k), C(g), C(f.$$.fragment, N), C(F, N), C(v.$$.fragment, N), b = !0);
    },
    o(N) {
      S(r.$$.fragment, N), S(T), S(k), S(g), S(f.$$.fragment, N), S(F, N), S(v.$$.fragment, N), b = !1;
    },
    d(N) {
      N && B(e), $(r), T && T.d(), k && k.d(), g && g.d(), $(f), F && F.d(N), $(v);
    }
  };
}
function Am(n) {
  let e, t;
  return e = new Ea({
    props: {
      $$slots: { default: [vm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, activeFilters, addFilterDisabled, inputValue, getSelectedFilterType, selectedOptionIndex, disabled, convertTypeToSelection, selectedFilterType*/
      524543 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Cm(n, e, t) {
  let i, r, l, { $$slots: a = {}, $$scope: s } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: f = -1 } = e, { disabled: d = !1 } = e, h = "", m = "";
  function _() {
    var F;
    if (!m || !h) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!l) {
      console.warn("Filter type not found");
      return;
    }
    let A = [
      ...u,
      {
        id: "crypto.randomUUID()",
        key: l.label.toLowerCase(),
        value: h,
        operation: "=",
        text: `${m}: ${c && (!((F = l.inputType.options) === null || F === void 0) && F.length) ? l.inputType.options[f].label : h}`,
        disabled: !1
      }
    ];
    t(0, u = A), b(), v();
  }
  function p(F) {
    setTimeout(
      () => {
        t(0, u = u.filter((A) => A.id !== F)), b();
      },
      0
    );
  }
  function v() {
    t(3, h = ""), t(4, m = void 0);
  }
  function b() {
    const F = [...u];
    F.find((A) => A.key === "uuid") ? F.filter((A) => A.key !== "uuid").forEach((A) => {
      A.disabled = !0;
    }) : F.forEach((A) => {
      A.disabled = !1;
    }), t(0, u = F);
  }
  function E(F) {
    m = F, t(4, m);
  }
  function y(F) {
    h = F, t(3, h);
  }
  function T(F) {
    h = F, t(3, h);
  }
  function k(F) {
    f = F, t(1, f);
  }
  function g(F) {
    h = F, t(3, h);
  }
  const R = (F) => p(F.id);
  return n.$$set = (F) => {
    "filterTypes" in F && t(10, o = F.filterTypes), "activeFilters" in F && t(0, u = F.activeFilters), "useOptionLabelInChipText" in F && t(11, c = F.useOptionLabelInChipText), "selectedOptionIndex" in F && t(1, f = F.selectedOptionIndex), "disabled" in F && t(2, d = F.disabled), "$$scope" in F && t(19, s = F.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*filterTypes*/
    1024 && t(7, i = o.map((F) => ({ value: F.label, label: F.label }))), n.$$.dirty & /*selectedFilterType, inputValue*/
    24 && t(6, r = !m || !h), n.$$.dirty & /*filterTypes, selectedFilterType*/
    1040 && t(5, l = o.find((F) => F.label === m));
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
    E,
    y,
    T,
    k,
    g,
    R,
    s
  ];
}
class Ks extends Ee {
  constructor(e) {
    super(), ye(this, e, Cm, Am, _e, {
      filterTypes: 10,
      activeFilters: 0,
      useOptionLabelInChipText: 11,
      selectedOptionIndex: 1,
      disabled: 2
    });
  }
}
function mt(n) {
  return typeof n == "function";
}
function jr(n) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var mr = jr(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Er(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var Mi = function() {
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
            for (var s = yt(a), o = s.next(); !o.done; o = s.next()) {
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
      if (mt(c))
        try {
          c();
        } catch (_) {
          l = _ instanceof mr ? _.errors : [_];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = yt(f), h = d.next(); !h.done; h = d.next()) {
            var m = h.value;
            try {
              Ws(m);
            } catch (_) {
              l = l ?? [], _ instanceof mr ? l = En(En([], dn(l)), dn(_.errors)) : l.push(_);
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
        throw new mr(l);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        Ws(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && Er(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && Er(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}();
Mi.EMPTY;
function Ma(n) {
  return n instanceof Mi || n && "closed" in n && mt(n.remove) && mt(n.add) && mt(n.unsubscribe);
}
function Ws(n) {
  mt(n) ? n() : n.unsubscribe();
}
var ym = {
  Promise: void 0
}, Em = {
  setTimeout: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, En([n, e], dn(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function Fa(n) {
  Em.setTimeout(function() {
    throw n;
  });
}
function zs() {
}
function Sm(n) {
  n();
}
var qr = function(n) {
  st(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return i.isStopped = !1, t ? (i.destination = t, Ma(t) && t.add(i)) : i.destination = Om, i;
  }
  return e.create = function(t, i, r) {
    return new Sr(t, i, r);
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
}(Mi), Tm = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (i) {
        vi(i);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (i) {
        vi(i);
      }
    else
      vi(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        vi(t);
      }
  }, n;
}(), Sr = function(n) {
  st(e, n);
  function e(t, i, r) {
    var l = n.call(this) || this, a;
    return mt(t) || !t ? a = {
      next: t ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = t, l.destination = new Tm(a), l;
  }
  return e;
}(qr);
function vi(n) {
  Fa(n);
}
function Lm(n) {
  throw n;
}
var Om = {
  closed: !0,
  next: zs,
  error: Lm,
  complete: zs
}, Gr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Fi(n) {
  return n;
}
function Rm(n) {
  return n.length === 0 ? Fi : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(i, r) {
      return r(i);
    }, t);
  };
}
var Vt = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, i) {
    var r = this, l = Dm(e) ? e : new Sr(e, t, i);
    return Sm(function() {
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
    return t = Xs(t), new t(function(r, l) {
      var a = new Sr({
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
  }, n.prototype[Gr] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Rm(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = Xs(e), new e(function(i, r) {
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
function Xs(n) {
  var e;
  return (e = n ?? ym.Promise) !== null && e !== void 0 ? e : Promise;
}
function km(n) {
  return n && mt(n.next) && mt(n.error) && mt(n.complete);
}
function Dm(n) {
  return n && n instanceof qr || km(n) && Ma(n);
}
function Mm(n) {
  return mt(n == null ? void 0 : n.lift);
}
function gn(n) {
  return function(e) {
    if (Mm(e))
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
function hn(n, e, t, i, r) {
  return new Fm(n, e, t, i, r);
}
var Fm = function(n) {
  st(e, n);
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
}(qr), Nm = {
  now: function() {
    return Date.now();
  }
}, Um = function(n) {
  st(e, n);
  function e(t, i) {
    return n.call(this) || this;
  }
  return e.prototype.schedule = function(t, i) {
    return this;
  }, e;
}(Mi), Ys = {
  setInterval: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setInterval.apply(void 0, En([n, e], dn(t)));
  },
  clearInterval: function(n) {
    return clearInterval(n);
  },
  delegate: void 0
}, wm = function(n) {
  st(e, n);
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
    return r === void 0 && (r = 0), Ys.setInterval(t.flush.bind(t, this), r);
  }, e.prototype.recycleAsyncId = function(t, i, r) {
    if (r === void 0 && (r = 0), r != null && this.delay === r && this.pending === !1)
      return i;
    i != null && Ys.clearInterval(i);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Er(l, this), i != null && (this.id = this.recycleAsyncId(r, i, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, e;
}(Um), Zs = function() {
  function n(e, t) {
    t === void 0 && (t = n.now), this.schedulerActionCtor = e, this.now = t;
  }
  return n.prototype.schedule = function(e, t, i) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(i, t);
  }, n.now = Nm.now, n;
}(), Pm = function(n) {
  st(e, n);
  function e(t, i) {
    i === void 0 && (i = Zs.now);
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
}(Zs), Na = new Pm(wm), Hm = Na, Bm = new Vt(function(n) {
  return n.complete();
});
function Ua(n) {
  return n && mt(n.schedule);
}
function wa(n) {
  return n[n.length - 1];
}
function Vm(n) {
  return mt(wa(n)) ? n.pop() : void 0;
}
function Pa(n) {
  return Ua(wa(n)) ? n.pop() : void 0;
}
var Ha = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function Ba(n) {
  return mt(n == null ? void 0 : n.then);
}
function Va(n) {
  return mt(n[Gr]);
}
function ja(n) {
  return Symbol.asyncIterator && mt(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function qa(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function jm() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ga = jm();
function Ka(n) {
  return mt(n == null ? void 0 : n[Ga]);
}
function Wa(n) {
  return go(this, arguments, function() {
    var t, i, r, l;
    return Nr(this, function(a) {
      switch (a.label) {
        case 0:
          t = n.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, Gn(t.read())];
        case 3:
          return i = a.sent(), r = i.value, l = i.done, l ? [4, Gn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, Gn(r)];
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
function za(n) {
  return mt(n == null ? void 0 : n.getReader);
}
function Sn(n) {
  if (n instanceof Vt)
    return n;
  if (n != null) {
    if (Va(n))
      return qm(n);
    if (Ha(n))
      return Gm(n);
    if (Ba(n))
      return Km(n);
    if (ja(n))
      return Xa(n);
    if (Ka(n))
      return Wm(n);
    if (za(n))
      return zm(n);
  }
  throw qa(n);
}
function qm(n) {
  return new Vt(function(e) {
    var t = n[Gr]();
    if (mt(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Gm(n) {
  return new Vt(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function Km(n) {
  return new Vt(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, Fa);
  });
}
function Wm(n) {
  return new Vt(function(e) {
    var t, i;
    try {
      for (var r = yt(n), l = r.next(); !l.done; l = r.next()) {
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
function Xa(n) {
  return new Vt(function(e) {
    Xm(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function zm(n) {
  return Xa(Wa(n));
}
function Xm(n, e) {
  var t, i, r, l;
  return Fr(this, void 0, void 0, function() {
    var a, s;
    return Nr(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), t = _o(n), o.label = 1;
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
function cn(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var l = e.schedule(function() {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (n.add(l), !r)
    return l;
}
function Ya(n, e) {
  return e === void 0 && (e = 0), gn(function(t, i) {
    t.subscribe(hn(i, function(r) {
      return cn(i, n, function() {
        return i.next(r);
      }, e);
    }, function() {
      return cn(i, n, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return cn(i, n, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function Za(n, e) {
  return e === void 0 && (e = 0), gn(function(t, i) {
    i.add(n.schedule(function() {
      return t.subscribe(i);
    }, e));
  });
}
function Ym(n, e) {
  return Sn(n).pipe(Za(e), Ya(e));
}
function Zm(n, e) {
  return Sn(n).pipe(Za(e), Ya(e));
}
function Qm(n, e) {
  return new Vt(function(t) {
    var i = 0;
    return e.schedule(function() {
      i === n.length ? t.complete() : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function Jm(n, e) {
  return new Vt(function(t) {
    var i;
    return cn(t, e, function() {
      i = n[Ga](), cn(t, e, function() {
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
      return mt(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function Qa(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new Vt(function(t) {
    cn(t, e, function() {
      var i = n[Symbol.asyncIterator]();
      cn(t, e, function() {
        i.next().then(function(r) {
          r.done ? t.complete() : t.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function xm(n, e) {
  return Qa(Wa(n), e);
}
function $m(n, e) {
  if (n != null) {
    if (Va(n))
      return Ym(n, e);
    if (Ha(n))
      return Qm(n, e);
    if (Ba(n))
      return Zm(n, e);
    if (ja(n))
      return Qa(n, e);
    if (Ka(n))
      return Jm(n, e);
    if (za(n))
      return xm(n, e);
  }
  throw qa(n);
}
function Ni(n, e) {
  return e ? $m(n, e) : Sn(n);
}
function ai() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = Pa(n);
  return Ni(n, t);
}
var ep = jr(function(n) {
  return function() {
    n(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function tp(n, e) {
  return new Promise(function(t, i) {
    var r = !1, l;
    n.subscribe({
      next: function(a) {
        l = a, r = !0;
      },
      error: i,
      complete: function() {
        r ? t(l) : i(new ep());
      }
    });
  });
}
function np(n) {
  return n instanceof Date && !isNaN(n);
}
function Kt(n, e) {
  return gn(function(t, i) {
    var r = 0;
    t.subscribe(hn(i, function(l) {
      i.next(n.call(e, l, r++));
    }));
  });
}
var ip = Array.isArray;
function rp(n, e) {
  return ip(e) ? n.apply(void 0, En([], dn(e))) : n(e);
}
function lp(n) {
  return Kt(function(e) {
    return rp(n, e);
  });
}
var sp = Array.isArray, ap = Object.getPrototypeOf, op = Object.prototype, up = Object.keys;
function cp(n) {
  if (n.length === 1) {
    var e = n[0];
    if (sp(e))
      return { args: e, keys: null };
    if (fp(e)) {
      var t = up(e);
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
function fp(n) {
  return n && typeof n == "object" && ap(n) === op;
}
function dp(n, e) {
  return n.reduce(function(t, i, r) {
    return t[i] = e[r], t;
  }, {});
}
function hp() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = Pa(n), i = Vm(n), r = cp(n), l = r.args, a = r.keys;
  if (l.length === 0)
    return Ni([], t);
  var s = new Vt(mp(l, t, a ? function(o) {
    return dp(a, o);
  } : Fi));
  return i ? s.pipe(lp(i)) : s;
}
function mp(n, e, t) {
  return t === void 0 && (t = Fi), function(i) {
    Qs(e, function() {
      for (var r = n.length, l = new Array(r), a = r, s = r, o = function(c) {
        Qs(e, function() {
          var f = Ni(n[c], e), d = !1;
          f.subscribe(hn(i, function(h) {
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
function Qs(n, e, t) {
  n ? cn(t, n, e) : e();
}
function pp(n, e, t, i, r, l, a, s) {
  var o = [], u = 0, c = 0, f = !1, d = function() {
    f && !o.length && !u && e.complete();
  }, h = function(_) {
    return u < i ? m(_) : o.push(_);
  }, m = function(_) {
    u++;
    var p = !1;
    Sn(t(_, c++)).subscribe(hn(e, function(v) {
      e.next(v);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var v = function() {
            var b = o.shift();
            a || m(b);
          }; o.length && u < i; )
            v();
          d();
        } catch (b) {
          e.error(b);
        }
    }));
  };
  return n.subscribe(hn(e, h, function() {
    f = !0, d();
  })), function() {
  };
}
function Ei(n, e, t) {
  return t === void 0 && (t = 1 / 0), mt(e) ? Ei(function(i, r) {
    return Kt(function(l, a) {
      return e(i, l, r, a);
    })(Sn(n(i, r)));
  }, t) : (typeof e == "number" && (t = e), gn(function(i, r) {
    return pp(i, r, n, t);
  }));
}
function gp(n, e, t) {
  t === void 0 && (t = Hm);
  var i = -1;
  return e != null && (Ua(e) ? t = e : i = e), new Vt(function(r) {
    var l = np(n) ? 500 - t.now() : n;
    l < 0 && (l = 0);
    var a = 0;
    return t.schedule(function() {
      r.closed || (r.next(a++), 0 <= i ? this.schedule(void 0, i) : r.complete());
    }, l);
  });
}
function oi(n) {
  return gn(function(e, t) {
    var i = null, r = !1, l;
    i = e.subscribe(hn(t, void 0, void 0, function(a) {
      l = Sn(n(a, oi(n)(e))), i ? (i.unsubscribe(), i = null, l.subscribe(t)) : r = !0;
    })), r && (i.unsubscribe(), i = null, l.subscribe(t));
  });
}
function _p(n, e) {
  return mt(e) ? Ei(n, e, 1) : Ei(n, 1);
}
function mn(n) {
  return n <= 0 ? function() {
    return Bm;
  } : gn(function(e, t) {
    var i = 0;
    e.subscribe(hn(t, function(r) {
      ++i <= n && (t.next(r), n <= i && t.complete());
    }));
  });
}
function bp(n) {
  return Kt(function() {
    return n;
  });
}
function Ip(n, e) {
  return Ei(function(t, i) {
    return Sn(n(t, i)).pipe(mn(1), bp(t));
  });
}
function vp(n, e) {
  e === void 0 && (e = Na);
  var t = gp(n, e);
  return Ip(function() {
    return t;
  });
}
function Ap(n) {
  return gn(function(e, t) {
    try {
      e.subscribe(t);
    } finally {
      t.add(n);
    }
  });
}
function ui(n, e, t) {
  var i = mt(n) || e || t ? { next: n, error: e, complete: t } : n;
  return i ? gn(function(r, l) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var s = !0;
    r.subscribe(hn(l, function(o) {
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
  }) : Fi;
}
function Ja(n) {
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
var Cp = /* @__PURE__ */ function() {
  function n(e, t, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = t, this.request = i, this.type = r;
    var l = t.status, a = t.responseType;
    this.status = l ?? 0, this.responseType = a ?? "";
    var s = t.getAllResponseHeaders();
    this.responseHeaders = s ? s.split(`
`).reduce(function(c, f) {
      var d = f.indexOf(": ");
      return c[f.slice(0, d)] = f.slice(d + 2), c;
    }, {}) : {}, this.response = Ja(t);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return n;
}(), Si = jr(function(n) {
  return function(t, i, r) {
    this.message = t, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var l;
    try {
      l = Ja(i);
    } catch {
      l = i.responseText;
    }
    this.response = l;
  };
}), yp = function() {
  function n(e, t) {
    return Si.call(this, "ajax timeout", e, t), this.name = "AjaxTimeoutError", this;
  }
  return n.prototype = Object.create(Si.prototype), n;
}();
function Ep(n, e) {
  return Tn({ method: "GET", url: n, headers: e });
}
function Sp(n, e, t) {
  return Tn({ method: "POST", url: n, body: e, headers: t });
}
function Tp(n, e) {
  return Tn({ method: "DELETE", url: n, headers: e });
}
function Lp(n, e, t) {
  return Tn({ method: "PUT", url: n, body: e, headers: t });
}
function Op(n, e, t) {
  return Tn({ method: "PATCH", url: n, body: e, headers: t });
}
var Rp = Kt(function(n) {
  return n.response;
});
function kp(n, e) {
  return Rp(Tn({
    method: "GET",
    url: n,
    headers: e
  }));
}
var Tn = function() {
  var n = function(e) {
    var t = typeof e == "string" ? {
      url: e
    } : e;
    return Mp(t);
  };
  return n.get = Ep, n.post = Sp, n.delete = Tp, n.put = Lp, n.patch = Op, n.getJSON = kp, n;
}(), Dp = "upload", Js = "download", pr = "loadstart", gr = "progress", xs = "load";
function Mp(n) {
  return new Vt(function(e) {
    var t, i, r = Ke({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, n), l = r.queryParams, a = r.body, s = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (l) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(l).forEach(function(j, D) {
          return u.set(D, j);
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
      var v = (i = (t = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"))) === null || t === void 0 ? void 0 : t.pop()) !== null && i !== void 0 ? i : "";
      v && (f[p] = v);
    }
    var b = Fp(a, f), E = Ke(Ke({}, r), {
      url: o,
      headers: f,
      body: b
    }), y;
    y = n.createXHR ? n.createXHR() : new XMLHttpRequest();
    {
      var T = n.progressSubscriber, k = n.includeDownloadProgress, g = k === void 0 ? !1 : k, R = n.includeUploadProgress, F = R === void 0 ? !1 : R, A = function(j, D) {
        y.addEventListener(j, function() {
          var L, Z = D();
          (L = T == null ? void 0 : T.error) === null || L === void 0 || L.call(T, Z), e.error(Z);
        });
      };
      A("timeout", function() {
        return new yp(y, E);
      }), A("abort", function() {
        return new Si("aborted", y, E);
      });
      var I = function(j, D) {
        return new Cp(D, y, E, j + "_" + D.type);
      }, M = function(j, D, L) {
        j.addEventListener(D, function(Z) {
          e.next(I(L, Z));
        });
      };
      F && [pr, gr, xs].forEach(function(j) {
        return M(y.upload, j, Dp);
      }), T && [pr, gr].forEach(function(j) {
        return y.upload.addEventListener(j, function(D) {
          var L;
          return (L = T == null ? void 0 : T.next) === null || L === void 0 ? void 0 : L.call(T, D);
        });
      }), g && [pr, gr].forEach(function(j) {
        return M(y, j, Js);
      });
      var O = function(j) {
        var D = "ajax error" + (j ? " " + j : "");
        e.error(new Si(D, y, E));
      };
      y.addEventListener("error", function(j) {
        var D;
        (D = T == null ? void 0 : T.error) === null || D === void 0 || D.call(T, j), O();
      }), y.addEventListener(xs, function(j) {
        var D, L, Z = y.status;
        if (Z < 400) {
          (D = T == null ? void 0 : T.complete) === null || D === void 0 || D.call(T);
          var Fe = void 0;
          try {
            Fe = I(Js, j);
          } catch (Me) {
            e.error(Me);
            return;
          }
          e.next(Fe), e.complete();
        } else
          (L = T == null ? void 0 : T.error) === null || L === void 0 || L.call(T, j), O(Z);
      });
    }
    var U = E.user, W = E.method, N = E.async;
    U ? y.open(W, o, N, U, E.password) : y.open(W, o, N), N && (y.timeout = E.timeout, y.responseType = E.responseType), "withCredentials" in y && (y.withCredentials = E.withCredentials);
    for (var d in f)
      f.hasOwnProperty(d) && y.setRequestHeader(d, f[d]);
    return b ? y.send(b) : y.send(), function() {
      y && y.readyState !== 4 && y.abort();
    };
  });
}
function Fp(n, e) {
  var t;
  if (!n || typeof n == "string" || Bp(n) || Vp(n) || Up(n) || wp(n) || Pp(n) || jp(n))
    return n;
  if (Hp(n))
    return n.buffer;
  if (typeof n == "object")
    return e["content-type"] = (t = e["content-type"]) !== null && t !== void 0 ? t : "application/json;charset=utf-8", JSON.stringify(n);
  throw new TypeError("Unknown body type");
}
var Np = Object.prototype.toString;
function Kr(n, e) {
  return Np.call(n) === "[object " + e + "]";
}
function Up(n) {
  return Kr(n, "ArrayBuffer");
}
function wp(n) {
  return Kr(n, "File");
}
function Pp(n) {
  return Kr(n, "Blob");
}
function Hp(n) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(n);
}
function Bp(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Vp(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function jp(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
class qp {
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
const Gp = new qp("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Kp = [Gp], Wp = Kp[0].getUrl();
class Wr {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Wp;
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
class xa {
  constructor(e = new Wr()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${zp(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => ai(t).pipe(
      Kt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      _p(
        (i) => Tn(i).pipe(
          Kt((r) => (this.middleware.filter((l) => l.post).forEach((l) => r = l.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, t) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Kt((i) => {
        const { status: r, response: l } = i;
        if (r >= 200 && r < 300)
          return (t == null ? void 0 : t.response) === "raw" ? i : l;
        throw i;
      })
    );
  }
}
const Lt = (n) => encodeURIComponent(`${n}`), zp = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${Lt(e)}=${Lt(i)}`).join("&") : `${Lt(e)}=${Lt(t)}`
).join("&"), Ft = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class Xp extends xa {
  archiveResource({ id: e, version: t, xAuthor: i, xApprover: r, contentType: l, xFilename: a, body: s }, o) {
    Ft(e, "id", "archiveResource"), Ft(t, "version", "archiveResource");
    const u = {
      "Content-Type": "application/octet-stream",
      ...i != null ? { "X-author": String(i) } : void 0,
      ...r != null ? { "X-approver": String(r) } : void 0,
      ...l != null ? { "Content-Type": String(l) } : void 0,
      ...a != null ? { "X-filename": String(a) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Lt(e)).replace("{version}", Lt(t)),
      method: "POST",
      headers: u,
      body: s
    }, o == null ? void 0 : o.responseOpts);
  }
  archiveSclResource({ id: e, version: t }, i) {
    Ft(e, "id", "archiveSclResource"), Ft(t, "version", "archiveSclResource");
    const r = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Lt(e)).replace("{version}", Lt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, t) {
    Ft(e, "id", "retrieveArchivedResourceHistory");
    const i = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Lt(e)),
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
class Yp extends xa {
  assignResourceToLocation({ locationId: e, uuid: t }, i) {
    Ft(e, "locationId", "assignResourceToLocation"), Ft(t, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Lt(e)).replace("{uuid}", Lt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, t) {
    Ft(e, "location", "createLocation");
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
    Ft(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Lt(e)),
      method: "DELETE",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  getLocation({ locationId: e }, t) {
    Ft(e, "locationId", "getLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Lt(e)),
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
    Ft(e, "locationId", "unassignResourceFromLocation"), Ft(t, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Lt(e)).replace("{uuid}", Lt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: t }, i) {
    Ft(e, "locationId", "updateLocation"), Ft(t, "location", "updateLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Lt(e)),
      method: "PUT",
      headers: r,
      body: t
    }, i == null ? void 0 : i.responseOpts);
  }
}
class ni {
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
class Cn {
  constructor() {
    this.baseUrl = "http://localhost:9090/compas-scl-data-service", this.dummySearchResults = [
      new ni(
        "blablablabla",
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
        []
      ),
      new ni(
        "blablablabla-2",
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
        []
      )
    ];
  }
  static getInstance() {
    return Cn.instance || (Cn.instance = new Cn()), Cn.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      mn(1),
      Kt((t) => t.resources),
      Kt(
        (t) => t.map((i) => this.mapToArchiveSearchResult(i))
      ),
      oi(() => ai(this.dummySearchResults)),
      vp(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      mn(1),
      Kt((t) => t.versions),
      Kt(
        (t) => t.map((i) => this.mapToArchiveSearchResult(i))
      ),
      oi(() => ai([
        new ni(
          "blablablabla-3",
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
          []
        ),
        new ni(
          "blablablabla-4",
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
          []
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, t, i) {
    return Ni(
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
    return new ni(
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
    const e = new Wr({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new Xp(e);
  }
}
class wn {
  constructor() {
    this.baseUrl = "http://localhost:9090/compas-scl-data-service";
  }
  static getInstance() {
    return wn.instance || (wn.instance = new wn()), wn.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      mn(1),
      oi(() => ai([
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
    const e = new Wr({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new Yp(e);
  }
}
var ci;
const Hn = class Hn {
  constructor() {
    $n(this, ci, At(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Hn.instance || (Hn.instance = new Hn()), Hn.instance;
  }
  get store() {
    return qt(this, ci);
  }
  updateData(e) {
    qt(this, ci).set(e);
  }
};
ci = new WeakMap();
let Tr = Hn;
var Wn;
const Bn = class Bn {
  constructor() {
    $n(this, Wn, At(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Bn.instance || (Bn.instance = new Bn()), Bn.instance;
  }
  get store() {
    return qt(this, Wn);
  }
  updateData(e) {
    qt(this, Wn).set(e);
  }
  getLocationNameByUuid(e) {
    return Rr(qt(this, Wn)).get(e);
  }
};
Wn = new WeakMap();
let Ti = Bn;
var zn;
const Vn = class Vn {
  constructor() {
    $n(this, zn, At([]));
  }
  static getInstance() {
    return Vn.instance || (Vn.instance = new Vn()), Vn.instance;
  }
  get store() {
    return qt(this, zn);
  }
  get currentData() {
    return Rr(qt(this, zn));
  }
  updateData(e) {
    qt(this, zn).set(e);
  }
};
zn = new WeakMap();
let Lr = Vn;
var Xn;
const jn = class jn {
  constructor() {
    $n(this, Xn, At([]));
  }
  static getInstance() {
    return jn.instance || (jn.instance = new jn()), jn.instance;
  }
  get store() {
    return qt(this, Xn);
  }
  get currentData() {
    return Rr(qt(this, Xn));
  }
  updateData(e) {
    qt(this, Xn).set(e);
  }
};
Xn = new WeakMap();
let Or = jn;
class Pn {
  constructor() {
    this.locationService = wn.getInstance(), this.archiveExplorerLocationStore = Ti.getInstance();
  }
  static getInstance() {
    return Pn.instance || (Pn.instance = new Pn()), Pn.instance;
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
    return tp(
      this.locationService.listLocations().pipe(
        mn(1),
        ui((e) => {
          const t = /* @__PURE__ */ new Map();
          e.forEach((i) => {
            t.set(i.uuid, i.name);
          }), this.archiveExplorerLocationStore.updateData(t);
        }),
        Kt((e) => [
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
function Zp(n) {
  let e, t;
  return e = new Hh({
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
      x(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*loadingDone*/
      1 && (l.loadingDone = /*loadingDone*/
      i[0]), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Qp(n, e, t) {
  let { searchResult: i } = e;
  const r = Cn.getInstance(), l = { store: At([]) };
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
  at(() => {
    i && r.retrieveArchivedResourceHistory(i.uuid).pipe(mn(1), ui((c) => {
      l.store.set(c), t(0, a = !0);
    })).subscribe();
  });
  function u(c) {
    r.findByUUIDAndVersion(c.uuid, c.type, c.version).pipe(
      mn(1),
      ui((f) => {
        const d = window.URL.createObjectURL(f), h = document.createElement("a");
        h.href = d, h.download = c.filename, h.style.display = "none", document.body.appendChild(h), h.click(), document.body.removeChild(h), window.URL.revokeObjectURL(d);
      }),
      oi((f) => (console.error(f), alert(f), ai(void 0)))
    ).subscribe();
  }
  return n.$$set = (c) => {
    "searchResult" in c && t(4, i = c.searchResult);
  }, [a, l, s, o, i];
}
class Jp extends Ee {
  constructor(e) {
    super(), ye(this, e, Qp, Zp, _e, { searchResult: 4 });
  }
}
function $s(n, e, t) {
  const i = n.slice();
  return i[1] = e[t], i;
}
function xp(n) {
  let e;
  return {
    c() {
      e = ne("i"), e.textContent = "No resources found.";
    },
    m(t, i) {
      V(t, e, i);
    },
    p: Qe,
    i: Qe,
    o: Qe,
    d(t) {
      t && B(e);
    }
  };
}
function $p(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = kt(
    /*searchResults*/
    n[0]
  );
  const a = (s) => (
    /*searchResult*/
    s[1].uuid
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = $s(n, l, s), u = a(o);
    t.set(u, e[s] = ea(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = We();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      V(s, i, o), r = !0;
    },
    p(s, o) {
      o & /*searchResults*/
      1 && (l = kt(
        /*searchResults*/
        s[0]
      ), Ne(), e = di(e, o, a, 1, s, l, t, i.parentNode, fi, ea, i, $s), Ue());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          C(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function eg(n) {
  let e, t, i;
  return t = new Jp({
    props: { searchResult: (
      /*searchResult*/
      n[1]
    ) }
  }), {
    c() {
      e = ne("span"), te(t.$$.fragment), w(e, "slot", "content");
    },
    m(r, l) {
      V(r, e, l), x(t, e, null), i = !0;
    },
    p(r, l) {
      const a = {};
      l & /*searchResults*/
      1 && (a.searchResult = /*searchResult*/
      r[1]), t.$set(a);
    },
    i(r) {
      i || (C(t.$$.fragment, r), i = !0);
    },
    o(r) {
      S(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(e), $(t);
    }
  };
}
function ea(n, e) {
  let t, i, r, l, a;
  return i = new Sa({
    props: {
      title: (
        /*searchResult*/
        e[1].name
      ),
      $$slots: { content: [eg] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = We(), te(i.$$.fragment), r = oe(), l = ne("br"), this.first = t;
    },
    m(s, o) {
      V(s, t, o), x(i, s, o), V(s, r, o), V(s, l, o), a = !0;
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
      a || (C(i.$$.fragment, s), a = !0);
    },
    o(s) {
      S(i.$$.fragment, s), a = !1;
    },
    d(s) {
      s && (B(t), B(r), B(l)), $(i, s);
    }
  };
}
function tg(n) {
  let e, t, i, r, l;
  const a = [$p, xp], s = [];
  function o(u, c) {
    return (
      /*searchResults*/
      u[0].length ? 0 : 1
    );
  }
  return i = o(n), r = s[i] = a[i](n), {
    c() {
      e = ne("div"), t = ne("div"), r.c(), w(t, "class", "content"), w(e, "class", "result-container");
    },
    m(u, c) {
      V(u, e, c), J(e, t), s[i].m(t, null), l = !0;
    },
    p(u, [c]) {
      let f = i;
      i = o(u), i === f ? s[i].p(u, c) : (Ne(), S(s[f], 1, 1, () => {
        s[f] = null;
      }), Ue(), r = s[i], r ? r.p(u, c) : (r = s[i] = a[i](u), r.c()), C(r, 1), r.m(t, null));
    },
    i(u) {
      l || (C(r), l = !0);
    },
    o(u) {
      S(r), l = !1;
    },
    d(u) {
      u && B(e), s[i].d();
    }
  };
}
function ng(n, e, t) {
  let { searchResults: i = [] } = e;
  return n.$$set = (r) => {
    "searchResults" in r && t(0, i = r.searchResults);
  }, [i];
}
class ig extends Ee {
  constructor(e) {
    super(), ye(this, e, ng, tg, _e, { searchResults: 0 });
  }
}
const { Map: rg } = oa;
function ta(n, e, t) {
  const i = n.slice();
  return i[16] = e[t], i[18] = t, i;
}
function lg(n) {
  let e;
  return {
    c() {
      e = ct("Search");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function sg(n) {
  let e, t, i, r;
  return e = new Jd({}), i = new Go({
    props: {
      $$slots: { default: [lg] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe(), te(i.$$.fragment);
    },
    m(l, a) {
      x(e, l, a), V(l, t, a), x(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      524288 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (C(e.$$.fragment, l), C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), $(e, l), $(i, l);
    }
  };
}
function ag(n) {
  let e, t;
  return e = new wr({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        n[8]
      ),
      disabled: !/*locationFiltersToSearch*/
      n[3].length,
      $$slots: { default: [sg] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*locationFiltersToSearch*/
      8 && (l.disabled = !/*locationFiltersToSearch*/
      i[3].length), r & /*$$scope*/
      524288 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function na(n) {
  let e = [], t = new rg(), i, r, l = kt(
    /*searchResults*/
    n[4]
  );
  const a = (s) => (
    /*result*/
    s[16]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = ta(n, l, s), u = a(o);
    t.set(u, e[s] = ia(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = We();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      V(s, i, o), r = !0;
    },
    p(s, o) {
      o & /*searchResults, archiveExplorerLocationStore*/
      144 && (l = kt(
        /*searchResults*/
        s[4]
      ), Ne(), e = di(e, o, a, 1, s, l, t, i.parentNode, fi, ia, i, ta), Ue());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          C(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function og(n) {
  let e, t, i;
  return t = new ig({
    props: { searchResults: (
      /*result*/
      n[16][1]
    ) }
  }), {
    c() {
      e = ne("span"), te(t.$$.fragment), w(e, "slot", "content");
    },
    m(r, l) {
      V(r, e, l), x(t, e, null), i = !0;
    },
    p(r, l) {
      const a = {};
      l & /*searchResults*/
      16 && (a.searchResults = /*result*/
      r[16][1]), t.$set(a);
    },
    i(r) {
      i || (C(t.$$.fragment, r), i = !0);
    },
    o(r) {
      S(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(e), $(t);
    }
  };
}
function ia(n, e) {
  let t, i, r, l, a;
  return i = new Sa({
    props: {
      open: (
        /*index*/
        e[18] === 0
      ),
      title: (
        /*archiveExplorerLocationStore*/
        e[7].getLocationNameByUuid(
          /*result*/
          e[16][0]
        )
      ),
      $$slots: { content: [og] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = We(), te(i.$$.fragment), r = oe(), l = ne("div"), w(l, "class", "separator svelte-uwjlgf"), this.first = t;
    },
    m(s, o) {
      V(s, t, o), x(i, s, o), V(s, r, o), V(s, l, o), a = !0;
    },
    p(s, o) {
      e = s;
      const u = {};
      o & /*searchResults*/
      16 && (u.open = /*index*/
      e[18] === 0), o & /*searchResults*/
      16 && (u.title = /*archiveExplorerLocationStore*/
      e[7].getLocationNameByUuid(
        /*result*/
        e[16][0]
      )), o & /*$$scope, searchResults*/
      524304 && (u.$$scope = { dirty: o, ctx: e }), i.$set(u);
    },
    i(s) {
      a || (C(i.$$.fragment, s), a = !0);
    },
    o(s) {
      S(i.$$.fragment, s), a = !1;
    },
    d(s) {
      s && (B(t), B(r), B(l)), $(i, s);
    }
  };
}
function ug(n) {
  let e, t, i, r, l, a, s, o, u, c, f, d;
  t = new Wf({
    props: { loadingDone: (
      /*loadingDone*/
      n[5]
    ) }
  });
  function h(b) {
    n[9](b);
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
  n[3]), l = new Ks({ props: m }), se.push(() => It(l, "activeFilters", h));
  function _(b) {
    n[10](b);
  }
  let p = {
    disabled: (
      /*uuidFilterSelected*/
      n[6] || !/*locationFiltersToSearch*/
      n[3].length
    ),
    filterTypes: (
      /*filterTypes*/
      n[1]
    ),
    $$slots: {
      "filter-controls": [ag]
    },
    $$scope: { ctx: n }
  };
  /*filtersToSearch*/
  n[0] !== void 0 && (p.activeFilters = /*filtersToSearch*/
  n[0]), o = new Ks({ props: p }), se.push(() => It(o, "activeFilters", _));
  let v = (
    /*searchResults*/
    n[4].size && na(n)
  );
  return {
    c() {
      e = ne("div"), te(t.$$.fragment), i = oe(), r = ne("div"), te(l.$$.fragment), s = oe(), te(o.$$.fragment), c = oe(), f = ne("div"), v && v.c(), w(r, "class", "search-filter svelte-uwjlgf"), w(f, "class", "content-container svelte-uwjlgf"), w(e, "class", "archive-explorer-container svelte-uwjlgf"), _r(e, "display", "none");
    },
    m(b, E) {
      V(b, e, E), x(t, e, null), J(e, i), J(e, r), x(l, r, null), J(r, s), x(o, r, null), J(e, c), J(e, f), v && v.m(f, null), d = !0;
    },
    p(b, [E]) {
      const y = {};
      E & /*loadingDone*/
      32 && (y.loadingDone = /*loadingDone*/
      b[5]), t.$set(y);
      const T = {};
      E & /*locationFilterType*/
      4 && (T.filterTypes = /*locationFilterType*/
      b[2]), !a && E & /*locationFiltersToSearch*/
      8 && (a = !0, T.activeFilters = /*locationFiltersToSearch*/
      b[3], bt(() => a = !1)), l.$set(T);
      const k = {};
      E & /*uuidFilterSelected, locationFiltersToSearch*/
      72 && (k.disabled = /*uuidFilterSelected*/
      b[6] || !/*locationFiltersToSearch*/
      b[3].length), E & /*filterTypes*/
      2 && (k.filterTypes = /*filterTypes*/
      b[1]), E & /*$$scope, locationFiltersToSearch*/
      524296 && (k.$$scope = { dirty: E, ctx: b }), !u && E & /*filtersToSearch*/
      1 && (u = !0, k.activeFilters = /*filtersToSearch*/
      b[0], bt(() => u = !1)), o.$set(k), /*searchResults*/
      b[4].size ? v ? (v.p(b, E), E & /*searchResults*/
      16 && C(v, 1)) : (v = na(b), v.c(), C(v, 1), v.m(f, null)) : v && (Ne(), S(v, 1, 1, () => {
        v = null;
      }), Ue());
    },
    i(b) {
      d || (C(t.$$.fragment, b), C(l.$$.fragment, b), C(o.$$.fragment, b), C(v), d = !0);
    },
    o(b) {
      S(t.$$.fragment, b), S(l.$$.fragment, b), S(o.$$.fragment, b), S(v), d = !1;
    },
    d(b) {
      b && B(e), $(t), $(l), $(o), v && v.d();
    }
  };
}
function cg(n, e, t) {
  let i;
  const r = Cn.getInstance(), l = Pn.getInstance(), a = Tr.getInstance(), s = Lr.getInstance(), o = Or.getInstance(), u = Ti.getInstance();
  let c = [], f = [], d = s.currentData, h = o.currentData, m = /* @__PURE__ */ new Map(), _ = !1;
  at(() => Fr(void 0, void 0, void 0, function* () {
    t(1, c = l.createArchiveFilter()), t(2, f = yield l.createLocationFilter()), t(5, _ = !0);
  }));
  function p() {
    t(5, _ = !1);
    const E = [], y = /* @__PURE__ */ new Map();
    h.forEach((T) => {
      const k = l.convertFilterToSearchParams(d);
      k.location = T.value, E.push(r.searchArchive(k).pipe(mn(1), ui((g) => y.set(T.value, g)), Ap(() => t(5, _ = !0))));
    }), s.updateData(d), o.updateData(h), hp(E).pipe(ui(() => {
      a.updateData(y), t(4, m = y);
    })).subscribe();
  }
  function v(E) {
    h = E, t(3, h);
  }
  function b(E) {
    d = E, t(0, d);
  }
  return n.$$.update = () => {
    n.$$.dirty & /*filtersToSearch*/
    1 && t(6, i = d.length && !!(d != null && d.find((E) => E.key === "uuid")));
  }, [
    d,
    c,
    f,
    h,
    m,
    _,
    i,
    u,
    p,
    v,
    b
  ];
}
class fg extends Ee {
  constructor(e) {
    super(), ye(this, e, cg, ug, _e, {});
  }
}
function ra(n) {
  let e, t;
  return e = new fg({}), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function dg(n) {
  let e, t, i, r, l, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && ra()
  );
  return {
    c() {
      a && a.c(), e = oe(), t = ne("input"), i = oe(), r = ne("input"), w(t, "type", "hidden"), w(t, "name", "package-name"), t.value = ha, w(r, "type", "hidden"), w(r, "name", "package-version"), r.value = ma;
    },
    m(s, o) {
      a && a.m(s, o), V(s, e, o), V(s, t, o), V(s, i, o), V(s, r, o), l = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? a ? o & /*doc, dev*/
      3 && C(a, 1) : (a = ra(), a.c(), C(a, 1), a.m(e.parentNode, e)) : a && (Ne(), S(a, 1, 1, () => {
        a = null;
      }), Ue());
    },
    i(s) {
      l || (C(a), l = !0);
    },
    o(s) {
      S(a), l = !1;
    },
    d(s) {
      s && (B(e), B(t), B(i), B(r)), a && a.d(s);
    }
  };
}
function hg(n, e, t) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return n.$$set = (l) => {
    "doc" in l && t(0, i = l.doc), "dev" in l && t(1, r = l.dev);
  }, [i, r];
}
class mg extends Ee {
  constructor(e) {
    super(), ye(this, e, hg, dg, _e, { doc: 0, dev: 1 });
  }
}
class bg extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new mg({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = pg();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function pg() {
  const n = `${ha}-v${ma}-style`, e = gg(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function gg() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  bg as default
};
