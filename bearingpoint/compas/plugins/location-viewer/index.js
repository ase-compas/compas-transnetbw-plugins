var Na = Object.defineProperty;
var Ua = (n, e, t) => e in n ? Na(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Vi = (n, e, t) => (Ua(n, typeof e != "symbol" ? e + "" : e, t), t), wa = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var mn = (n, e, t) => (wa(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Lr = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
function et() {
}
function Y(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Ps(n) {
  return n();
}
function Or() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(n) {
  n.forEach(Ps);
}
function pe(n) {
  return typeof n == "function";
}
function be(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Pa(n) {
  return Object.keys(n).length === 0;
}
function Hs(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return et;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Ha(n) {
  let e;
  return Hs(n, (t) => e = t)(), e;
}
function rt(n, e, t) {
  n.$$.on_destroy.push(Hs(e, t));
}
function Te(n, e, t, i) {
  if (n) {
    const r = Bs(n, e, t, i);
    return n[0](r);
  }
}
function Bs(n, e, t, i) {
  return n[1] && i ? Y(t.ctx.slice(), n[1](i(e))) : t.ctx;
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
    const a = Bs(e, t, i, l);
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
function me(n, e) {
  const t = {};
  e = new Set(e);
  for (const i in n)
    !e.has(i) && i[0] !== "$" && (t[i] = n[i]);
  return t;
}
function or(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Ht(n, e, t) {
  return n.set(t), e;
}
function de(n) {
  return n && pe(n.destroy) ? n.destroy : et;
}
const Ba = ["", !0, 1, "true", "contenteditable"], Va = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function Q(n, e) {
  n.appendChild(e);
}
function B(n, e, t) {
  n.insertBefore(e, t || null);
}
function H(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ur(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function x(n) {
  return document.createElement(n);
}
function lt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function at(n) {
  return document.createTextNode(n);
}
function oe() {
  return at(" ");
}
function Xe() {
  return at("");
}
function fe(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function N(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const ja = ["width", "height"];
function ce(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && ja.indexOf(i) === -1 ? n[i] = e[i] : N(n, i, e[i]);
}
function Rr(n, e) {
  for (const t in e)
    N(n, t, e[t]);
}
function qa(n, e) {
  Object.keys(e).forEach((t) => {
    Ga(n, t, e[t]);
  });
}
function Ga(n, e, t) {
  const i = e.toLowerCase();
  i in n ? n[i] = typeof n[i] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : N(n, e, t);
}
function oi(n) {
  return /-/.test(n) ? qa : ce;
}
function Vs(n) {
  return n === "" ? null : +n;
}
function Ka(n) {
  return Array.from(n.childNodes);
}
function gt(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Wa(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function za(n, e, t) {
  ~Ba.indexOf(t) ? Wa(n, e) : gt(n, e);
}
function Xt(n, e) {
  n.value = e ?? "";
}
function ui(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function Rt(n, e) {
  return new n(e);
}
let Zn;
function Xn(n) {
  Zn = n;
}
function xe() {
  if (!Zn)
    throw new Error("Function called outside component initialization");
  return Zn;
}
function st(n) {
  xe().$$.on_mount.push(n);
}
function Qt(n) {
  xe().$$.on_destroy.push(n);
}
function Ge(n, e) {
  return xe().$$.context.set(n, e), e;
}
function Ke(n) {
  return xe().$$.context.get(n);
}
function wn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Rn = [], se = [];
let Fn = [];
const er = [], js = /* @__PURE__ */ Promise.resolve();
let tr = !1;
function qs() {
  tr || (tr = !0, js.then(Gs));
}
function cr() {
  return qs(), js;
}
function nr(n) {
  Fn.push(n);
}
function ct(n) {
  er.push(n);
}
const ji = /* @__PURE__ */ new Set();
let Sn = 0;
function Gs() {
  if (Sn !== 0)
    return;
  const n = Zn;
  do {
    try {
      for (; Sn < Rn.length; ) {
        const e = Rn[Sn];
        Sn++, Xn(e), Ya(e.$$);
      }
    } catch (e) {
      throw Rn.length = 0, Sn = 0, e;
    }
    for (Xn(null), Rn.length = 0, Sn = 0; se.length; )
      se.pop()();
    for (let e = 0; e < Fn.length; e += 1) {
      const t = Fn[e];
      ji.has(t) || (ji.add(t), t());
    }
    Fn.length = 0;
  } while (Rn.length);
  for (; er.length; )
    er.pop()();
  tr = !1, ji.clear(), Xn(n);
}
function Ya(n) {
  if (n.fragment !== null) {
    n.update(), Ze(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(nr);
  }
}
function Xa(n) {
  const e = [], t = [];
  Fn.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Fn = e;
}
const ai = /* @__PURE__ */ new Set();
let In;
function Pe() {
  In = {
    r: 0,
    c: [],
    p: In
    // parent group
  };
}
function He() {
  In.r || Ze(In.c), In = In.p;
}
function C(n, e) {
  n && n.i && (ai.delete(n), n.i(e));
}
function E(n, e, t, i) {
  if (n && n.o) {
    if (ai.has(n))
      return;
    ai.add(n), In.c.push(() => {
      ai.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else
    i && i();
}
function jt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function dr(n, e) {
  E(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function fr(n, e, t, i, r, l, a, s, o, u, c, d) {
  let f = n.length, h = l.length, m = f;
  const b = {};
  for (; m--; )
    b[n[m].key] = m;
  const p = [], A = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), T = [];
  for (m = h; m--; ) {
    const g = d(r, l, m), S = t(g);
    let P = a.get(S);
    P ? T.push(() => P.p(g, e)) : (P = u(S, g), P.c()), A.set(S, p[m] = P), S in b && v.set(S, Math.abs(m - b[S]));
  }
  const y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function R(g) {
    C(g, 1), g.m(s, c), a.set(g.key, g), c = g.first, h--;
  }
  for (; f && h; ) {
    const g = p[h - 1], S = n[f - 1], P = g.key, _ = S.key;
    g === S ? (c = g.first, f--, h--) : A.has(_) ? !a.has(P) || y.has(P) ? R(g) : k.has(_) ? f-- : v.get(P) > v.get(_) ? (k.add(P), R(g)) : (y.add(_), f--) : (o(S, a), f--);
  }
  for (; f--; ) {
    const g = n[f];
    A.has(g.key) || o(g, a);
  }
  for (; h; )
    R(p[h - 1]);
  return Ze(T), p;
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
function Se(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function dt(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function te(n) {
  n && n.c();
}
function $(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), nr(() => {
    const l = n.$$.on_mount.map(Ps).filter(pe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Ze(l), n.$$.on_mount = [];
  }), r.forEach(nr);
}
function ee(n, e) {
  const t = n.$$;
  t.fragment !== null && (Xa(t.after_update), Ze(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Za(n, e) {
  n.$$.dirty[0] === -1 && (Rn.push(n), qs(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ke(n, e, t, i, r, l, a = null, s = [-1]) {
  const o = Zn;
  Xn(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: et,
    not_equal: r,
    bound: Or(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Or(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (d, f, ...h) => {
    const m = h.length ? h[0] : f;
    return u.ctx && r(u.ctx[d], u.ctx[d] = m) && (!u.skip_bound && u.bound[d] && u.bound[d](m), c && Za(n, d)), f;
  }) : [], u.update(), c = !0, Ze(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Ka(e.target);
      u.fragment && u.fragment.l(d), d.forEach(H);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), $(n, e.target, e.anchor), Gs();
  }
  Xn(o);
}
class De {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vi(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vi(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ee(this, 1), this.$destroy = et;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!pe(t))
      return et;
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
    this.$$set && !Pa(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Qa = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Qa);
const Ks = "location-viewer", Ws = "0.0.1";
var ir = function(n, e) {
  return ir = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, ir(n, e);
};
function ft(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ir(n, e);
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
function zs(n, e, t, i) {
  function r(l) {
    return l instanceof t ? l : new t(function(a) {
      a(l);
    });
  }
  return new (t || (t = Promise))(function(l, a) {
    function s(c) {
      try {
        u(i.next(c));
      } catch (d) {
        a(d);
      }
    }
    function o(c) {
      try {
        u(i.throw(c));
      } catch (d) {
        a(d);
      }
    }
    function u(c) {
      c.done ? l(c.value) : r(c.value).then(s, o);
    }
    u((i = i.apply(n, e || [])).next());
  });
}
function hr(n, e) {
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
function Pn(n, e) {
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
function Qn(n, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, r = e.length, l; i < r; i++)
      (l || !(i in e)) && (l || (l = Array.prototype.slice.call(e, 0, i)), l[i] = e[i]);
  return n.concat(l || Array.prototype.slice.call(e));
}
function Nn(n) {
  return this instanceof Nn ? (this.v = n, this) : new Nn(n);
}
function Ja(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []), r, l = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function a(h) {
    return function(m) {
      return Promise.resolve(m).then(h, d);
    };
  }
  function s(h, m) {
    i[h] && (r[h] = function(b) {
      return new Promise(function(p, A) {
        l.push([h, b, p, A]) > 1 || o(h, b);
      });
    }, m && (r[h] = m(r[h])));
  }
  function o(h, m) {
    try {
      u(i[h](m));
    } catch (b) {
      f(l[0][3], b);
    }
  }
  function u(h) {
    h.value instanceof Nn ? Promise.resolve(h.value.v).then(c, d) : f(l[0][2], h);
  }
  function c(h) {
    o("next", h);
  }
  function d(h) {
    o("throw", h);
  }
  function f(h, m) {
    h(m), l.shift(), l.length && o(l[0][0], l[0][1]);
  }
}
function xa(n) {
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
function vt(n) {
  return typeof n == "function";
}
function Ys(n) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var qi = Ys(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function kr(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var mr = function() {
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
          } catch (b) {
            e = { error: b };
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
      if (vt(c))
        try {
          c();
        } catch (b) {
          l = b instanceof qi ? b.errors : [b];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = yt(d), h = f.next(); !h.done; h = f.next()) {
            var m = h.value;
            try {
              Dr(m);
            } catch (b) {
              l = l ?? [], b instanceof qi ? l = Qn(Qn([], Pn(l)), Pn(b.errors)) : l.push(b);
            }
          }
        } catch (b) {
          i = { error: b };
        } finally {
          try {
            h && !h.done && (r = f.return) && r.call(f);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (l)
        throw new qi(l);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        Dr(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && kr(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && kr(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}();
mr.EMPTY;
function Xs(n) {
  return n instanceof mr || n && "closed" in n && vt(n.remove) && vt(n.add) && vt(n.unsubscribe);
}
function Dr(n) {
  vt(n) ? n() : n.unsubscribe();
}
var $a = {
  Promise: void 0
}, eo = {
  setTimeout: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Qn([n, e], Pn(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function Zs(n) {
  eo.setTimeout(function() {
    throw n;
  });
}
function Mr() {
}
function to(n) {
  n();
}
var pr = function(n) {
  ft(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return i.isStopped = !1, t ? (i.destination = t, Xs(t) && t.add(i)) : i.destination = ro, i;
  }
  return e.create = function(t, i, r) {
    return new rr(t, i, r);
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
}(mr), no = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (i) {
        ti(i);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (i) {
        ti(i);
      }
    else
      ti(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        ti(t);
      }
  }, n;
}(), rr = function(n) {
  ft(e, n);
  function e(t, i, r) {
    var l = n.call(this) || this, a;
    return vt(t) || !t ? a = {
      next: t ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = t, l.destination = new no(a), l;
  }
  return e;
}(pr);
function ti(n) {
  Zs(n);
}
function io(n) {
  throw n;
}
var ro = {
  closed: !0,
  next: Mr,
  error: io,
  complete: Mr
}, gr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Qs(n) {
  return n;
}
function lo(n) {
  return n.length === 0 ? Qs : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(i, r) {
      return r(i);
    }, t);
  };
}
var zt = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, i) {
    var r = this, l = ao(e) ? e : new rr(e, t, i);
    return to(function() {
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
    return t = Fr(t), new t(function(r, l) {
      var a = new rr({
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
  }, n.prototype[gr] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return lo(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = Fr(e), new e(function(i, r) {
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
function Fr(n) {
  var e;
  return (e = n ?? $a.Promise) !== null && e !== void 0 ? e : Promise;
}
function so(n) {
  return n && vt(n.next) && vt(n.error) && vt(n.complete);
}
function ao(n) {
  return n && n instanceof pr || so(n) && Xs(n);
}
function oo(n) {
  return vt(n == null ? void 0 : n.lift);
}
function Vn(n) {
  return function(e) {
    if (oo(e))
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
function Hn(n, e, t, i, r) {
  return new uo(n, e, t, i, r);
}
var uo = function(n) {
  ft(e, n);
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
}(pr), co = new zt(function(n) {
  return n.complete();
});
function fo(n) {
  return n && vt(n.schedule);
}
function ho(n) {
  return n[n.length - 1];
}
function mo(n) {
  return fo(ho(n)) ? n.pop() : void 0;
}
var Js = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function xs(n) {
  return vt(n == null ? void 0 : n.then);
}
function $s(n) {
  return vt(n[gr]);
}
function ea(n) {
  return Symbol.asyncIterator && vt(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function ta(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function po() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var na = po();
function ia(n) {
  return vt(n == null ? void 0 : n[na]);
}
function ra(n) {
  return Ja(this, arguments, function() {
    var t, i, r, l;
    return hr(this, function(a) {
      switch (a.label) {
        case 0:
          t = n.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, Nn(t.read())];
        case 3:
          return i = a.sent(), r = i.value, l = i.done, l ? [4, Nn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, Nn(r)];
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
function la(n) {
  return vt(n == null ? void 0 : n.getReader);
}
function Jn(n) {
  if (n instanceof zt)
    return n;
  if (n != null) {
    if ($s(n))
      return go(n);
    if (Js(n))
      return _o(n);
    if (xs(n))
      return bo(n);
    if (ea(n))
      return sa(n);
    if (ia(n))
      return Io(n);
    if (la(n))
      return vo(n);
  }
  throw ta(n);
}
function go(n) {
  return new zt(function(e) {
    var t = n[gr]();
    if (vt(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function _o(n) {
  return new zt(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function bo(n) {
  return new zt(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, Zs);
  });
}
function Io(n) {
  return new zt(function(e) {
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
function sa(n) {
  return new zt(function(e) {
    Ao(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function vo(n) {
  return sa(ra(n));
}
function Ao(n, e) {
  var t, i, r, l;
  return zs(this, void 0, void 0, function() {
    var a, s;
    return hr(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), t = xa(n), o.label = 1;
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
function An(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var l = e.schedule(function() {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (n.add(l), !r)
    return l;
}
function aa(n, e) {
  return e === void 0 && (e = 0), Vn(function(t, i) {
    t.subscribe(Hn(i, function(r) {
      return An(i, n, function() {
        return i.next(r);
      }, e);
    }, function() {
      return An(i, n, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return An(i, n, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function oa(n, e) {
  return e === void 0 && (e = 0), Vn(function(t, i) {
    i.add(n.schedule(function() {
      return t.subscribe(i);
    }, e));
  });
}
function Co(n, e) {
  return Jn(n).pipe(oa(e), aa(e));
}
function yo(n, e) {
  return Jn(n).pipe(oa(e), aa(e));
}
function Eo(n, e) {
  return new zt(function(t) {
    var i = 0;
    return e.schedule(function() {
      i === n.length ? t.complete() : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function So(n, e) {
  return new zt(function(t) {
    var i;
    return An(t, e, function() {
      i = n[na](), An(t, e, function() {
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
      return vt(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function ua(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new zt(function(t) {
    An(t, e, function() {
      var i = n[Symbol.asyncIterator]();
      An(t, e, function() {
        i.next().then(function(r) {
          r.done ? t.complete() : t.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function To(n, e) {
  return ua(ra(n), e);
}
function Lo(n, e) {
  if (n != null) {
    if ($s(n))
      return Co(n, e);
    if (Js(n))
      return Eo(n, e);
    if (xs(n))
      return yo(n, e);
    if (ea(n))
      return ua(n, e);
    if (ia(n))
      return So(n, e);
    if (la(n))
      return To(n, e);
  }
  throw ta(n);
}
function Oo(n, e) {
  return e ? Lo(n, e) : Jn(n);
}
function ca() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = mo(n);
  return Oo(n, t);
}
function Mt(n, e) {
  return Vn(function(t, i) {
    var r = 0;
    t.subscribe(Hn(i, function(l) {
      i.next(n.call(e, l, r++));
    }));
  });
}
function Ro(n, e, t, i, r, l, a, s) {
  var o = [], u = 0, c = 0, d = !1, f = function() {
    d && !o.length && !u && e.complete();
  }, h = function(b) {
    return u < i ? m(b) : o.push(b);
  }, m = function(b) {
    u++;
    var p = !1;
    Jn(t(b, c++)).subscribe(Hn(e, function(A) {
      e.next(A);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var A = function() {
            var v = o.shift();
            a || m(v);
          }; o.length && u < i; )
            A();
          f();
        } catch (v) {
          e.error(v);
        }
    }));
  };
  return n.subscribe(Hn(e, h, function() {
    d = !0, f();
  })), function() {
  };
}
function lr(n, e, t) {
  return t === void 0 && (t = 1 / 0), vt(e) ? lr(function(i, r) {
    return Mt(function(l, a) {
      return e(i, l, r, a);
    })(Jn(n(i, r)));
  }, t) : (typeof e == "number" && (t = e), Vn(function(i, r) {
    return Ro(i, r, n, t);
  }));
}
function da(n, e) {
  return vt(e) ? lr(n, e, 1) : lr(n, 1);
}
function ko(n) {
  return n <= 0 ? function() {
    return co;
  } : Vn(function(e, t) {
    var i = 0;
    e.subscribe(Hn(t, function(r) {
      ++i <= n && (t.next(r), n <= i && t.complete());
    }));
  });
}
function Do(n, e, t) {
  var i = vt(n) || e || t ? { next: n, error: e, complete: t } : n;
  return i ? Vn(function(r, l) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var s = !0;
    r.subscribe(Hn(l, function(o) {
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
  }) : Qs;
}
function fa(n) {
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
var Mo = /* @__PURE__ */ function() {
  function n(e, t, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = t, this.request = i, this.type = r;
    var l = t.status, a = t.responseType;
    this.status = l ?? 0, this.responseType = a ?? "";
    var s = t.getAllResponseHeaders();
    this.responseHeaders = s ? s.split(`
`).reduce(function(c, d) {
      var f = d.indexOf(": ");
      return c[d.slice(0, f)] = d.slice(f + 2), c;
    }, {}) : {}, this.response = fa(t);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return n;
}(), ci = Ys(function(n) {
  return function(t, i, r) {
    this.message = t, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var l;
    try {
      l = fa(i);
    } catch {
      l = i.responseText;
    }
    this.response = l;
  };
}), Fo = function() {
  function n(e, t) {
    return ci.call(this, "ajax timeout", e, t), this.name = "AjaxTimeoutError", this;
  }
  return n.prototype = Object.create(ci.prototype), n;
}();
function No(n, e) {
  return fn({ method: "GET", url: n, headers: e });
}
function Uo(n, e, t) {
  return fn({ method: "POST", url: n, body: e, headers: t });
}
function wo(n, e) {
  return fn({ method: "DELETE", url: n, headers: e });
}
function Po(n, e, t) {
  return fn({ method: "PUT", url: n, body: e, headers: t });
}
function Ho(n, e, t) {
  return fn({ method: "PATCH", url: n, body: e, headers: t });
}
var Bo = Mt(function(n) {
  return n.response;
});
function Vo(n, e) {
  return Bo(fn({
    method: "GET",
    url: n,
    headers: e
  }));
}
var fn = function() {
  var n = function(e) {
    var t = typeof e == "string" ? {
      url: e
    } : e;
    return qo(t);
  };
  return n.get = No, n.post = Uo, n.delete = wo, n.put = Po, n.patch = Ho, n.getJSON = Vo, n;
}(), jo = "upload", Nr = "download", Gi = "loadstart", Ki = "progress", Ur = "load";
function qo(n) {
  return new zt(function(e) {
    var t, i, r = We({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, n), l = r.queryParams, a = r.body, s = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (l) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(l).forEach(function(W, M) {
          return u.set(M, W);
        }), o = c[0] + "?" + u;
      } else
        u = new URLSearchParams(l), o = o + "?" + u;
    }
    var d = {};
    if (s)
      for (var f in s)
        s.hasOwnProperty(f) && (d[f.toLowerCase()] = s[f]);
    var h = r.crossDomain;
    !h && !("x-requested-with" in d) && (d["x-requested-with"] = "XMLHttpRequest");
    var m = r.withCredentials, b = r.xsrfCookieName, p = r.xsrfHeaderName;
    if ((m || !h) && b && p) {
      var A = (i = (t = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + b + ")=([^;]*)"))) === null || t === void 0 ? void 0 : t.pop()) !== null && i !== void 0 ? i : "";
      A && (d[p] = A);
    }
    var v = Go(a, d), T = We(We({}, r), {
      url: o,
      headers: d,
      body: v
    }), y;
    y = n.createXHR ? n.createXHR() : new XMLHttpRequest();
    {
      var k = n.progressSubscriber, R = n.includeDownloadProgress, g = R === void 0 ? !1 : R, S = n.includeUploadProgress, P = S === void 0 ? !1 : S, _ = function(W, M) {
        y.addEventListener(W, function() {
          var L, V = M();
          (L = k == null ? void 0 : k.error) === null || L === void 0 || L.call(k, V), e.error(V);
        });
      };
      _("timeout", function() {
        return new Fo(y, T);
      }), _("abort", function() {
        return new ci("aborted", y, T);
      });
      var I = function(W, M) {
        return new Mo(M, y, T, W + "_" + M.type);
      }, D = function(W, M, L) {
        W.addEventListener(M, function(V) {
          e.next(I(L, V));
        });
      };
      P && [Gi, Ki, Ur].forEach(function(W) {
        return D(y.upload, W, jo);
      }), k && [Gi, Ki].forEach(function(W) {
        return y.upload.addEventListener(W, function(M) {
          var L;
          return (L = k == null ? void 0 : k.next) === null || L === void 0 ? void 0 : L.call(k, M);
        });
      }), g && [Gi, Ki].forEach(function(W) {
        return D(y, W, Nr);
      });
      var O = function(W) {
        var M = "ajax error" + (W ? " " + W : "");
        e.error(new ci(M, y, T));
      };
      y.addEventListener("error", function(W) {
        var M;
        (M = k == null ? void 0 : k.error) === null || M === void 0 || M.call(k, W), O();
      }), y.addEventListener(Ur, function(W) {
        var M, L, V = y.status;
        if (V < 400) {
          (M = k == null ? void 0 : k.complete) === null || M === void 0 || M.call(k);
          var ue = void 0;
          try {
            ue = I(Nr, W);
          } catch (Fe) {
            e.error(Fe);
            return;
          }
          e.next(ue), e.complete();
        } else
          (L = k == null ? void 0 : k.error) === null || L === void 0 || L.call(k, W), O(V);
      });
    }
    var F = T.user, z = T.method, q = T.async;
    F ? y.open(z, o, q, F, T.password) : y.open(z, o, q), q && (y.timeout = T.timeout, y.responseType = T.responseType), "withCredentials" in y && (y.withCredentials = T.withCredentials);
    for (var f in d)
      d.hasOwnProperty(f) && y.setRequestHeader(f, d[f]);
    return v ? y.send(v) : y.send(), function() {
      y && y.readyState !== 4 && y.abort();
    };
  });
}
function Go(n, e) {
  var t;
  if (!n || typeof n == "string" || Zo(n) || Qo(n) || Wo(n) || zo(n) || Yo(n) || Jo(n))
    return n;
  if (Xo(n))
    return n.buffer;
  if (typeof n == "object")
    return e["content-type"] = (t = e["content-type"]) !== null && t !== void 0 ? t : "application/json;charset=utf-8", JSON.stringify(n);
  throw new TypeError("Unknown body type");
}
var Ko = Object.prototype.toString;
function _r(n, e) {
  return Ko.call(n) === "[object " + e + "]";
}
function Wo(n) {
  return _r(n, "ArrayBuffer");
}
function zo(n) {
  return _r(n, "File");
}
function Yo(n) {
  return _r(n, "Blob");
}
function Xo(n) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(n);
}
function Zo(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Qo(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function Jo(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
let xo = class {
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
};
const $o = new xo("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), eu = [$o], tu = eu[0].getUrl();
let ha = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? tu;
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
}, nu = class {
  constructor(e = new ha()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${iu(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => ca(t).pipe(
      Mt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      da(
        (i) => fn(i).pipe(
          Mt((r) => (this.middleware.filter((l) => l.post).forEach((l) => r = l.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, t) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Mt((i) => {
        const { status: r, response: l } = i;
        if (r >= 200 && r < 300)
          return (t == null ? void 0 : t.response) === "raw" ? i : l;
        throw i;
      })
    );
  }
};
const vn = (n) => encodeURIComponent(`${n}`), iu = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${vn(e)}=${vn(i)}`).join("&") : `${vn(e)}=${vn(t)}`
).join("&"), ni = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class ru extends nu {
  retrieveDataResourceByVersion({ id: e, version: t }, i) {
    ni(e, "id", "retrieveDataResourceByVersion"), ni(t, "version", "retrieveDataResourceByVersion");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", vn(e)).replace("{version}", vn(t)),
      method: "GET",
      headers: r,
      responseType: "blob"
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, t) {
    ni(e, "id", "retrieveDataResourceHistory");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", vn(e)),
      method: "GET",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, t) {
    ni(e, "dataResourceSearch", "searchForResources");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: i,
      body: e
    }, t == null ? void 0 : t.responseOpts);
  }
}
class br {
  constructor(e, t, i, r, l, a, s, o, u) {
    this.uuid = e, this.name = t, this.author = i, this.type = r, this.changedAt = l, this.version = a, this.available = s, this.deleted = o, this.location = u;
  }
  static from(e) {
    return new br(
      e.uuid,
      e.name,
      e.author,
      e.type,
      e.changedAt,
      e.version,
      e.available,
      e.deleted,
      e.location
    );
  }
}
class lu {
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
const su = new lu("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), au = [su], ou = au[0].getUrl();
class ma {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? ou;
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
class uu {
  constructor(e = new ma()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${cu(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => ca(t).pipe(
      Mt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      da(
        (i) => fn(i).pipe(
          Mt((r) => (this.middleware.filter((l) => l.post).forEach((l) => r = l.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, t) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Mt((i) => {
        const { status: r, response: l } = i;
        if (r >= 200 && r < 300)
          return (t == null ? void 0 : t.response) === "raw" ? i : l;
        throw i;
      })
    );
  }
}
const Kt = (n) => encodeURIComponent(`${n}`), cu = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${Kt(e)}=${Kt(i)}`).join("&") : `${Kt(e)}=${Kt(t)}`
).join("&"), xt = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class du extends uu {
  assignResourceToLocation({ locationId: e, uuid: t }, i) {
    xt(e, "locationId", "assignResourceToLocation"), xt(t, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Kt(e)).replace("{uuid}", Kt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, t) {
    xt(e, "location", "createLocation");
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
    xt(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Kt(e)),
      method: "DELETE",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  getLocation({ locationId: e }, t) {
    xt(e, "locationId", "getLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Kt(e)),
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
    xt(e, "locationId", "unassignResourceFromLocation"), xt(t, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Kt(e)).replace("{uuid}", Kt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: t }, i) {
    xt(e, "locationId", "updateLocation"), xt(t, "location", "updateLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Kt(e)),
      method: "PUT",
      headers: r,
      body: t
    }, i == null ? void 0 : i.responseOpts);
  }
}
class Ir {
  constructor(e, t, i, r, l) {
    this.uuid = l, this.key = e, this.name = t, this.description = i, this.assignedResources = r;
  }
  static from(e) {
    return new Ir(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class kn {
  constructor() {
    this.endpoint = "http://localhost:9090/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return kn.instance || (kn.instance = new kn()), kn.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      Mt((t) => t || []),
      Mt((t) => t.map((i) => Ir.from(i)))
    );
  }
  assignResourceToLocation(e, t) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: t }).pipe(Mt(() => {
    }));
  }
  unassignResourceFromLocation(e, t) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: t }).pipe(Mt(() => {
    }));
  }
  searchResources(e) {
    return console.log(e), this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Mt((t) => (console.log(t), t.results)),
      Mt(
        (t) => t.map((i) => br.from(i))
      )
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.name || null,
      author: e.author || null,
      location: e.location || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  createLocationsApiClient(e) {
    const t = new ma({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new du(t);
  }
  createHistoryApiClient(e) {
    const t = new ha({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new ru(t);
  }
}
const Tn = [];
function Lt(n, e = et) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function r(s) {
    if (be(n, s) && (n = s, t)) {
      const o = !Tn.length;
      for (const u of i)
        u[1](), Tn.push(u, n);
      if (o) {
        for (let u = 0; u < Tn.length; u += 2)
          Tn[u][0](Tn[u + 1]);
        Tn.length = 0;
      }
    }
  }
  function l(s) {
    r(s(n));
  }
  function a(s, o = et) {
    const u = [s, o];
    return i.add(u), i.size === 1 && (t = e(r, l) || et), s(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: l, subscribe: a };
}
var ln;
class wr {
  constructor() {
    Lr(this, ln, Lt([]));
  }
  get store() {
    return mn(this, ln);
  }
  set(e) {
    mn(this, ln).set(e);
  }
  update(e) {
    mn(this, ln).update((t) => t.map((i) => i.uuid === e.uuid ? e : i));
  }
  add(e) {
    mn(this, ln).update((t) => [...t, e]);
  }
  remove(e) {
    mn(this, ln).update((t) => t.filter((i) => i.uuid !== e));
  }
  findById(e) {
    return Ha(mn(this, ln)).find((t) => t.uuid === e);
  }
}
ln = new WeakMap();
function fu(n, e = {}) {
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
function _e(n, e, t, i = { bubbles: !0 }, r = !1) {
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
const Pr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, hu = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function nt(n) {
  let e, t = [];
  n.$on = (r, l) => {
    let a = r, s = () => {
    };
    return e ? s = e(a, l) : t.push([a, l]), a.match(Pr) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
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
      let u = s, c = o, d = !1;
      const f = u.match(Pr), h = u.match(hu), m = f || h;
      if (u.match(/^SMUI:\w+:/)) {
        const A = u.split(":");
        let v = "";
        for (let T = 0; T < A.length; T++)
          v += T === A.length - 1 ? ":" + A[T] : A[T].split("-").map((y) => y.slice(0, 1).toUpperCase() + y.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (m) {
        const A = u.split(f ? ":" : "$");
        u = A[0];
        const v = A.slice(1).reduce((T, y) => (T[y] = !0, T), {});
        v.passive && (d = d || {}, d.passive = !0), v.nonpassive && (d = d || {}, d.passive = !1), v.capture && (d = d || {}, d.capture = !0), v.once && (d = d || {}, d.once = !0), v.preventDefault && (c = mu(c)), v.stopPropagation && (c = pu(c)), v.stopImmediatePropagation && (c = gu(c)), v.self && (c = _u(r, c)), v.trusted && (c = bu(c));
      }
      const b = Hr(r, u, c, d), p = () => {
        b();
        const A = l.indexOf(p);
        A > -1 && l.splice(A, 1);
      };
      return l.push(p), u in a || (a[u] = Hr(r, u, i)), p;
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
function Hr(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function mu(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function pu(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function gu(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function _u(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function bu(n) {
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
function Je(n, e) {
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
var ii;
function pa(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = ii;
  if (typeof ii == "boolean" && !e)
    return ii;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var l = t.supports("--css-vars", "yes"), a = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = l || a, e || (ii = i), i;
}
function Iu(n, e, t) {
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
var fi = (
  /** @class */
  function() {
    function n(e, t) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, Qn([], Pn(i))), this.foundation = t === void 0 ? this.getDefaultFoundation() : t, this.foundation.init(), this.initialSyncWithDOM();
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
function zn(n) {
  return n === void 0 && (n = window), vu(n) ? { passive: !0 } : !1;
}
function vu(n) {
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
  applyPassive: zn
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
function Au(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (vr(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function vr(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Cu(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
const hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Au,
  estimateScrollWidth: Cu,
  matches: vr
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
var yu = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Eu = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Br = {
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
var Vr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], jr = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ri = [], mi = (
  /** @class */
  function(n) {
    ft(e, n);
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
        return yu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Eu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Br;
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
          for (var l = yt(Vr), a = l.next(); !a.done; a = l.next()) {
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
          for (var l = yt(jr), a = l.next(); !a.done; a = l.next()) {
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
        for (var r = yt(Vr), l = r.next(); !l.done; l = r.next()) {
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
        for (var r = yt(jr), l = r.next(); !l.done; l = r.next()) {
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
            var s = t !== void 0 && ri.length > 0 && ri.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ri.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ri = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, l = i.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), h = f.startPoint, m = f.endPoint;
        c = h.x + "px, " + h.y + "px", d = m.x + "px, " + m.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(l, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, l;
      r ? l = Iu(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
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
      }, Br.FG_DEACTIVATION_MS));
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
var di = (
  /** @class */
  function(n) {
    ft(e, n);
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
          return document.documentElement.removeEventListener(i, r, zn());
        },
        deregisterInteractionHandler: function(i, r) {
          return t.root.removeEventListener(i, r, zn());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return vr(t.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!t.disabled;
        },
        isUnbounded: function() {
          return !!t.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, zn());
        },
        registerInteractionHandler: function(i, r) {
          return t.root.addEventListener(i, r, zn());
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
      return new mi(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in t.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(fi)
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
var we = {
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
}, kt = /* @__PURE__ */ new Set();
kt.add(we.BACKSPACE);
kt.add(we.ENTER);
kt.add(we.SPACEBAR);
kt.add(we.PAGE_UP);
kt.add(we.PAGE_DOWN);
kt.add(we.END);
kt.add(we.HOME);
kt.add(we.ARROW_LEFT);
kt.add(we.ARROW_UP);
kt.add(we.ARROW_RIGHT);
kt.add(we.ARROW_DOWN);
kt.add(we.DELETE);
kt.add(we.ESCAPE);
kt.add(we.TAB);
var Nt = {
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
}, Dt = /* @__PURE__ */ new Map();
Dt.set(Nt.BACKSPACE, we.BACKSPACE);
Dt.set(Nt.ENTER, we.ENTER);
Dt.set(Nt.SPACEBAR, we.SPACEBAR);
Dt.set(Nt.PAGE_UP, we.PAGE_UP);
Dt.set(Nt.PAGE_DOWN, we.PAGE_DOWN);
Dt.set(Nt.END, we.END);
Dt.set(Nt.HOME, we.HOME);
Dt.set(Nt.ARROW_LEFT, we.ARROW_LEFT);
Dt.set(Nt.ARROW_UP, we.ARROW_UP);
Dt.set(Nt.ARROW_RIGHT, we.ARROW_RIGHT);
Dt.set(Nt.ARROW_DOWN, we.ARROW_DOWN);
Dt.set(Nt.DELETE, we.DELETE);
Dt.set(Nt.ESCAPE, we.ESCAPE);
Dt.set(Nt.TAB, we.TAB);
var an = /* @__PURE__ */ new Set();
an.add(we.PAGE_UP);
an.add(we.PAGE_DOWN);
an.add(we.END);
an.add(we.HOME);
an.add(we.ARROW_LEFT);
an.add(we.ARROW_UP);
an.add(we.ARROW_RIGHT);
an.add(we.ARROW_DOWN);
function pt(n) {
  var e = n.key;
  if (kt.has(e))
    return e;
  var t = Dt.get(n.keyCode);
  return t || we.UNKNOWN;
}
function Su(n) {
  return an.has(pt(n));
}
const { applyPassive: li } = ga, { matches: Tu } = hi;
function Ot(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: l, active: a, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (m) => n.classList.add(m), removeClass: d = (m) => n.classList.remove(m), addStyle: f = (m, b) => n.style.setProperty(m, b), initPromise: h = Promise.resolve() } = {}) {
  let m, b = Ke("SMUI:addLayoutListener"), p, A = a, v = o, T = u;
  function y() {
    t ? (c("mdc-ripple-surface"), l === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : l === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), m && A !== a && (A = a, a ? m.activate() : a === !1 && m.deactivate()), e && !m ? (m = new mi({
      addClass: c,
      browserSupportsCssVars: () => pa(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (R) => n.contains(R),
      deregisterDocumentInteractionHandler: (R, g) => document.documentElement.removeEventListener(R, g, li()),
      deregisterInteractionHandler: (R, g) => (o || n).removeEventListener(R, g, li()),
      deregisterResizeHandler: (R) => window.removeEventListener("resize", R),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? Tu(u || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (R, g) => document.documentElement.addEventListener(R, g, li()),
      registerInteractionHandler: (R, g) => (o || n).addEventListener(R, g, li()),
      registerResizeHandler: (R) => window.addEventListener("resize", R),
      removeClass: d,
      updateCssVariable: f
    }), h.then(() => {
      m && (m.init(), m.setUnbounded(i));
    })) : m && !e && h.then(() => {
      m && (m.destroy(), m = void 0);
    }), m && (v !== o || T !== u) && (v = o, T = u, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  y(), b && (p = b(k));
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
        removeClass: d,
        addStyle: f,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (g) => n.classList.add(g), removeClass: (g) => n.classList.remove(g), addStyle: (g, S) => n.style.setProperty(g, S), initPromise: Promise.resolve() }, R)), y();
    },
    destroy() {
      m && (m.destroy(), m = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Lu(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ou(n) {
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
      $$slots: { default: [Lu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = Y(u, he(r, [
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
      64 && Se(
        /*context*/
        s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        s[7]
      ) },
      o & /*$$restProps*/
      256 && Se(
        /*$$restProps*/
        s[8]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[11](e)), {
    c() {
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), B(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Pe();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
        }
        l ? (e = Rt(l, a(s, o)), s[11](e), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
          64 && Se(
            /*context*/
            s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            s[7]
          ) },
          o & /*$$restProps*/
          256 && Se(
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
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), n[11](null), e && ee(e, s);
    }
  };
}
function Ru(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: d = Ft } = e, { tag: f = d === Ft ? "span" : void 0 } = e;
  const h = Ke("SMUI:label:context"), m = Ke("SMUI:label:tabindex");
  function b() {
    return c.getElement();
  }
  function p(A) {
    se[A ? "unshift" : "push"](() => {
      c = A, t(4, c);
    });
  }
  return n.$$set = (A) => {
    e = Y(Y({}, e), tt(A)), t(8, r = me(e, i)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "component" in A && t(2, d = A.component), "tag" in A && t(3, f = A.tag), "$$scope" in A && t(12, a = A.$$scope);
  }, [
    o,
    u,
    d,
    f,
    c,
    s,
    h,
    m,
    r,
    b,
    l,
    p,
    a
  ];
}
class ku extends De {
  constructor(e) {
    super(), ke(this, e, Ru, Ou, be, {
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
function Du(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i, r = (
    /*tag*/
    n[1] && Wi(n)
  );
  return {
    c() {
      r && r.c(), t = Xe();
    },
    m(l, a) {
      r && r.m(l, a), B(l, t, a), i = !0;
    },
    p(l, a) {
      /*tag*/
      l[1] ? e ? be(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = Wi(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : r.p(l, a) : (r = Wi(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      i || (C(r, l), i = !0);
    },
    o(l) {
      E(r, l), i = !1;
    },
    d(l) {
      l && H(t), r && r.d(l);
    }
  };
}
function Mu(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i = (
    /*tag*/
    n[1] && zi(n)
  );
  return {
    c() {
      i && i.c(), t = Xe();
    },
    m(r, l) {
      i && i.m(r, l), B(r, t, l);
    },
    p(r, l) {
      /*tag*/
      r[1] ? e ? be(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = zi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, l) : (i = zi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: et,
    o: et,
    d(r) {
      r && H(t), i && i.d(r);
    }
  };
}
function Fu(n) {
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
    u = Y(u, o[c]);
  return {
    c() {
      e = lt("svg"), s && s.c(), Rr(e, u);
    },
    m(c, d) {
      B(c, e, d), s && s.m(e, null), n[9](e), i = !0, r || (l = [
        de(t = Je.call(
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
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
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
          d,
          null
        ) : Re(
          /*$$scope*/
          c[7]
        ),
        null
      ), Rr(e, u = he(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && d & /*use*/
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
      E(s, c), i = !1;
    },
    d(c) {
      c && H(e), s && s.d(c), n[9](null), r = !1, Ze(l);
    }
  };
}
function Wi(n) {
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
    u = Y(u, o[c]);
  return {
    c() {
      e = x(
        /*tag*/
        n[1]
      ), s && s.c(), oi(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      B(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        de(t = Je.call(
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
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
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
          d,
          null
        ) : Re(
          /*$$scope*/
          c[7]
        ),
        null
      ), oi(
        /*tag*/
        c[1]
      )(e, u = he(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && d & /*use*/
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
      E(s, c), i = !1;
    },
    d(c) {
      c && H(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function zi(n) {
  let e, t, i, r, l = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let s = 0; s < l.length; s += 1)
    a = Y(a, l[s]);
  return {
    c() {
      e = x(
        /*tag*/
        n[1]
      ), oi(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(s, o) {
      B(s, e, o), n[10](e), i || (r = [
        de(t = Je.call(
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
      oi(
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
      s && H(e), n[10](null), i = !1, Ze(r);
    }
  };
}
function Nu(n) {
  let e, t, i, r;
  const l = [Fu, Mu, Du], a = [];
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
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
function Uu(n, e, t) {
  let i;
  const r = ["use", "tag", "getElement"];
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
  const c = nt(xe());
  let d;
  function f() {
    return d;
  }
  function h(p) {
    se[p ? "unshift" : "push"](() => {
      d = p, t(2, d);
    });
  }
  function m(p) {
    se[p ? "unshift" : "push"](() => {
      d = p, t(2, d);
    });
  }
  function b(p) {
    se[p ? "unshift" : "push"](() => {
      d = p, t(2, d);
    });
  }
  return n.$$set = (p) => {
    e = Y(Y({}, e), tt(p)), t(5, l = me(e, r)), "use" in p && t(0, o = p.use), "tag" in p && t(1, u = p.tag), "$$scope" in p && t(7, s = p.$$scope);
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
    d,
    i,
    c,
    l,
    f,
    s,
    a,
    h,
    m,
    b
  ];
}
class Ft extends De {
  constructor(e) {
    super(), ke(this, e, Uu, Nu, be, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function wu(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Pu(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { key: a } = e, { value: s } = e;
  const o = Lt(s);
  return rt(n, o, (u) => t(5, i = u)), Ge(a, o), Qt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, a = u.key), "value" in u && t(2, s = u.value), "$$scope" in u && t(3, l = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Ht(o, i = s, i);
  }, [o, a, s, l, r];
}
class Bn extends De {
  constructor(e) {
    super(), ke(this, e, Pu, wu, be, { key: 1, value: 2 });
  }
}
function qr(n) {
  let e;
  return {
    c() {
      e = x("div"), N(e, "class", "mdc-button__touch");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Hu(n) {
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
    n[6] && qr()
  );
  return {
    c() {
      e = x("div"), t = oe(), a && a.c(), s && s.c(), i = Xe(), N(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      B(o, e, u), B(o, t, u), a && a.m(o, u), s && s.m(o, u), B(o, i, u), r = !0;
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
      o[6] ? s || (s = qr(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (C(a, o), r = !0);
    },
    o(o) {
      E(a, o), r = !1;
    },
    d(o) {
      o && (H(e), H(t), H(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Bu(n) {
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
      ).map(Yi).concat([
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
      $$slots: { default: [Hu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = Y(u, he(r, [
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
        ).map(Yi).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Se(
        /*actionProp*/
        s[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Se(
        /*defaultProp*/
        s[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Se(
        /*secondaryProp*/
        s[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        s[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Se(
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), B(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      512 && l !== (l = /*component*/
      s[9])) {
        if (e) {
          Pe();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
        }
        l ? (e = Rt(l, a(s, o)), s[29](e), e.$on(
          "click",
          /*handleClick*/
          s[22]
        ), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
            ).map(Yi).concat([
              /*style*/
              s[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Se(
            /*actionProp*/
            s[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Se(
            /*defaultProp*/
            s[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Se(
            /*secondaryProp*/
            s[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            s[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Se(
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
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), n[29](null), e && ee(e, s);
    }
  };
}
const Yi = ([n, e]) => `${n}: ${e};`;
function Vu(n, e, t) {
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
  const c = nt(xe());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: b = "primary" } = e, { variant: p = "text" } = e, { touch: A = !1 } = e, { href: v = void 0 } = e, { action: T = "close" } = e, { defaultAction: y = !1 } = e, { secondary: k = !1 } = e, R, g = {}, S = {}, P = Ke("SMUI:button:context"), { component: _ = Ft } = e, { tag: I = _ === Ft ? v == null ? "button" : "a" : void 0 } = e, D = s.disabled;
  Ge("SMUI:label:context", "button"), Ge("SMUI:icon:context", "button");
  function O(L) {
    g[L] || t(12, g[L] = !0, g);
  }
  function F(L) {
    (!(L in g) || g[L]) && t(12, g[L] = !1, g);
  }
  function z(L, V) {
    S[L] != V && (V === "" || V == null ? (delete S[L], t(13, S)) : t(13, S[L] = V, S));
  }
  function q() {
    P === "banner" && _e(W(), k ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function W() {
    return R.getElement();
  }
  function M(L) {
    se[L ? "unshift" : "push"](() => {
      R = L, t(11, R);
    });
  }
  return n.$$set = (L) => {
    t(31, e = Y(Y({}, e), tt(L))), t(23, s = me(e, a)), "use" in L && t(0, d = L.use), "class" in L && t(1, f = L.class), "style" in L && t(2, h = L.style), "ripple" in L && t(3, m = L.ripple), "color" in L && t(4, b = L.color), "variant" in L && t(5, p = L.variant), "touch" in L && t(6, A = L.touch), "href" in L && t(7, v = L.href), "action" in L && t(24, T = L.action), "defaultAction" in L && t(25, y = L.defaultAction), "secondary" in L && t(8, k = L.secondary), "component" in L && t(9, _ = L.component), "tag" in L && t(10, I = L.tag), "$$scope" in L && t(30, u = L.$$scope);
  }, n.$$.update = () => {
    if (t(16, i = P === "dialog:action" && T != null ? { "data-mdc-dialog-action": T } : { action: e.action }), t(15, r = P === "dialog:action" && y ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, l = P === "banner" ? {} : { secondary: e.secondary }), D !== s.disabled) {
      if (R) {
        const L = W();
        "blur" in L && L.blur();
      }
      t(27, D = s.disabled);
    }
  }, e = tt(e), [
    d,
    f,
    h,
    m,
    b,
    p,
    A,
    v,
    k,
    _,
    I,
    R,
    g,
    S,
    l,
    r,
    i,
    c,
    P,
    O,
    F,
    z,
    q,
    s,
    T,
    y,
    W,
    D,
    o,
    M,
    u
  ];
}
class ju extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      Vu,
      Bu,
      be,
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
function qu(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Gu(n) {
  let e, t;
  return e = new ju({
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
      $$slots: { default: [qu] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ku(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: l = () => {
  } } = e, { disabled: a = !1 } = e, { variant: s = "default" } = e, { isAbortAction: o = !1 } = e;
  return n.$$set = (u) => {
    "callback" in u && t(0, l = u.callback), "disabled" in u && t(1, a = u.disabled), "variant" in u && t(2, s = u.variant), "isAbortAction" in u && t(3, o = u.isAbortAction), "$$scope" in u && t(5, r = u.$$scope);
  }, [l, a, s, o, i, r];
}
class Ar extends De {
  constructor(e) {
    super(), ke(this, e, Ku, Gu, be, {
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
var si = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, $t = {
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
var Wu = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $t;
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
      var t = this.adapter.getAttr($t.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr($t.DATA_ARIA_LABEL_OFF);
      if (t && i) {
        if (this.adapter.getAttr($t.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr($t.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(si.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(si.ICON_BUTTON_ON) : this.adapter.removeClass(si.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = t ? this.adapter.getAttr($t.DATA_ARIA_LABEL_ON) : this.adapter.getAttr($t.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr($t.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr($t.ARIA_PRESSED, "" + t);
    }, e;
  }(Et)
);
function Gr(n) {
  let e;
  return {
    c() {
      e = x("div"), N(e, "class", "mdc-icon-button__touch");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function zu(n) {
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
    n[8] && Gr()
  );
  return {
    c() {
      e = x("div"), t = oe(), a && a.c(), s && s.c(), i = Xe(), N(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      B(o, e, u), B(o, t, u), a && a.m(o, u), s && s.m(o, u), B(o, i, u), r = !0;
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
      o[8] ? s || (s = Gr(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (C(a, o), r = !0);
    },
    o(o) {
      E(a, o), r = !1;
    },
    d(o) {
      o && (H(e), H(t), H(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Yu(n) {
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
      ).map(Xi).concat([
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
      $$slots: { default: [zu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = Y(u, he(r, [
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
        ).map(Xi).concat([
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
      2097152 && Se(
        /*actionProp*/
        s[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && Se(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Se(
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), B(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Pe();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
        }
        l ? (e = Rt(l, a(s, o)), s[34](e), e.$on(
          "click",
          /*click_handler*/
          s[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          s[36]
        ), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
            ).map(Xi).concat([
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
          2097152 && Se(
            /*actionProp*/
            s[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && Se(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Se(
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
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), n[34](null), e && ee(e, s);
    }
  };
}
const Xi = ([n, e]) => `${n}: ${e};`;
function Xu(n, e, t) {
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
  const o = nt(xe());
  let u = () => {
  };
  function c(G) {
    return G === u;
  }
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: b = void 0 } = e, { toggle: p = !1 } = e, { pressed: A = u } = e, { ariaLabelOn: v = void 0 } = e, { ariaLabelOff: T = void 0 } = e, { touch: y = !1 } = e, { displayFlex: k = !0 } = e, { size: R = "normal" } = e, { href: g = void 0 } = e, { action: S = void 0 } = e, P, _, I = {}, D = {}, O = {}, F = Ke("SMUI:icon-button:context"), z = Ke("SMUI:icon-button:aria-describedby"), { component: q = Ft } = e, { tag: W = q === Ft ? g == null ? "button" : "a" : void 0 } = e, M = l.disabled;
  Ge("SMUI:icon:context", "icon-button");
  let L = null;
  Qt(() => {
    _ && _.destroy();
  });
  function V(G) {
    return G in I ? I[G] : Ae().classList.contains(G);
  }
  function ue(G) {
    I[G] || t(18, I[G] = !0, I);
  }
  function Fe(G) {
    (!(G in I) || I[G]) && t(18, I[G] = !1, I);
  }
  function Ie(G, qe) {
    D[G] != qe && (qe === "" || qe == null ? (delete D[G], t(19, D)) : t(19, D[G] = qe, D));
  }
  function Ye(G) {
    var qe;
    return G in O ? (qe = O[G]) !== null && qe !== void 0 ? qe : null : Ae().getAttribute(G);
  }
  function K(G, qe) {
    O[G] !== qe && t(20, O[G] = qe, O);
  }
  function J(G) {
    t(0, A = G.isOn);
  }
  function Ae() {
    return P.getElement();
  }
  function Ce(G) {
    se[G ? "unshift" : "push"](() => {
      P = G, t(16, P);
    });
  }
  const Ne = () => _ && _.handleClick(), ie = () => F === "top-app-bar:navigation" && _e(Ae(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (G) => {
    e = Y(Y({}, e), tt(G)), t(29, l = me(e, r)), "use" in G && t(1, d = G.use), "class" in G && t(2, f = G.class), "style" in G && t(3, h = G.style), "ripple" in G && t(4, m = G.ripple), "color" in G && t(5, b = G.color), "toggle" in G && t(30, p = G.toggle), "pressed" in G && t(0, A = G.pressed), "ariaLabelOn" in G && t(6, v = G.ariaLabelOn), "ariaLabelOff" in G && t(7, T = G.ariaLabelOff), "touch" in G && t(8, y = G.touch), "displayFlex" in G && t(9, k = G.displayFlex), "size" in G && t(10, R = G.size), "href" in G && t(11, g = G.href), "action" in G && t(12, S = G.action), "component" in G && t(13, q = G.component), "tag" in G && t(14, W = G.tag), "$$scope" in G && t(37, s = G.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, i = (() => {
      if (F === "data-table:pagination")
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
        return F === "dialog:header" || F === "dialog:sheet" ? { "data-mdc-dialog-action": S } : { action: S };
    })()), M !== l.disabled) {
      if (P) {
        const G = Ae();
        "blur" in G && G.blur();
      }
      t(31, M = l.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && P && Ae() && p !== L && (p && !_ ? (t(17, _ = new Wu({
      addClass: ue,
      hasClass: V,
      notifyChange: (G) => {
        J(G), _e(Ae(), "SMUIIconButtonToggle:change", G, void 0, !0);
      },
      removeClass: Fe,
      getAttr: Ye,
      setAttr: K
    })), _.init()) : !p && _ && (_.destroy(), t(17, _ = void 0), t(18, I = {}), t(20, O = {})), t(32, L = p)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && _ && !c(A) && _.isOn() !== A && _.toggle(A);
  }, [
    A,
    d,
    f,
    h,
    m,
    b,
    v,
    T,
    y,
    k,
    R,
    g,
    S,
    q,
    W,
    Ae,
    P,
    _,
    I,
    D,
    O,
    i,
    o,
    c,
    F,
    z,
    ue,
    Fe,
    Ie,
    l,
    p,
    M,
    L,
    a,
    Ce,
    Ne,
    ie,
    s
  ];
}
class Zu extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      Xu,
      Yu,
      be,
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
function Qu(n) {
  let e;
  return {
    c() {
      e = at(
        /*icon*/
        n[1]
      );
    },
    m(t, i) {
      B(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      2 && gt(
        e,
        /*icon*/
        t[1]
      );
    },
    i: et,
    o: et,
    d(t) {
      t && H(e);
    }
  };
}
function Ju(n) {
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(a, s) {
      e && $(e, a, s), B(a, t, s), i = !0;
    },
    p(a, s) {
      if (s & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Pe();
          const o = e;
          E(o.$$.fragment, 1, 0, () => {
            ee(o, 1);
          }), He();
        }
        r ? (e = Rt(r, l(a)), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
      e && E(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && H(t), e && ee(e, a);
    }
  };
}
function xu(n) {
  let e, t, i, r;
  const l = [Ju, Qu], a = [];
  function s(o, u) {
    return (
      /*iconComponent*/
      o[2] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
function $u(n) {
  let e, t;
  return e = new Zu({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        n[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [xu] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ec(n, e, t) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: l = null } = e, { iconStyles: a = "" } = e, { disabled: s = !1 } = e;
  return n.$$set = (o) => {
    "callback" in o && t(0, i = o.callback), "icon" in o && t(1, r = o.icon), "iconComponent" in o && t(2, l = o.iconComponent), "iconStyles" in o && t(3, a = o.iconStyles), "disabled" in o && t(4, s = o.disabled);
  }, [i, r, l, a, s];
}
class tc extends De {
  constructor(e) {
    super(), ke(this, e, ec, $u, be, {
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
var nc = {
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
var ic = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nc;
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
var pn = {
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
var rc = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pn;
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
      this.adapter.removeClass(pn.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(pn.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(pn.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(pn.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(pn.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(pn.LINE_RIPPLE_DEACTIVATING));
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
var lc = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Kr = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, sc = {
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
var ac = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return lc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return sc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kr;
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
      t > 0 && (t += Kr.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
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
var Zi = {
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
}, oc = {
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
}, Wr = {
  LABEL_SCALE: 0.75
}, uc = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], cc = [
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
var zr = ["mousedown", "touchstart"], Yr = ["click", "keydown"], dc = (
  /** @class */
  function(n) {
    ft(e, n);
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
        return oc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Wr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return cc.indexOf(t) >= 0;
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
        for (var a = yt(zr), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = yt(Yr), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (d) {
        r = { error: d };
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
        for (var a = yt(zr), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = yt(Yr), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (d) {
        r = { error: d };
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
        return uc.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * Wr.LABEL_SCALE;
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
        l && a ? this.adapter.setInputAttr(Zi.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Zi.ARIA_DESCRIBEDBY);
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
var Xr = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, fc = {
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
var Zr = ["click", "keydown"], hc = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Xr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fc;
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
        for (var r = yt(Zr), l = r.next(); !l.done; l = r.next()) {
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
        for (var r = yt(Zr), l = r.next(); !l.done; l = r.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Xr.ICON_ROLE)));
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
function mc(n) {
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
  let d = [
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
      ).map(Jr).concat([
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
  ], f = {};
  for (let h = 0; h < d.length; h += 1)
    f = Y(f, d[h]);
  return {
    c() {
      e = x("label"), c && c.c(), ce(e, f);
    },
    m(h, m) {
      B(h, e, m), c && c.m(e, null), n[24](e), a = !0, s || (o = [
        de(l = Je.call(
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
      ), ce(e, f = he(d, [
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
        ).map(Jr).concat([
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
      a || (C(c, h), a = !0);
    },
    o(h) {
      E(c, h), a = !1;
    },
    d(h) {
      h && H(e), c && c.d(h), n[24](null), s = !1, Ze(o);
    }
  };
}
function pc(n) {
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
      ).map(Qr).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = Y(d, c[f]);
  return {
    c() {
      e = x("span"), u && u.c(), ce(e, d);
    },
    m(f, h) {
      B(f, e, h), u && u.m(e, null), n[23](e), l = !0, a || (s = [
        de(r = Je.call(
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
    p(f, h) {
      u && u.p && (!l || h & /*$$scope*/
      2097152) && Oe(
        u,
        o,
        f,
        /*$$scope*/
        f[21],
        l ? Le(
          o,
          /*$$scope*/
          f[21],
          h,
          null
        ) : Re(
          /*$$scope*/
          f[21]
        ),
        null
      ), ce(e, d = he(c, [
        (!l || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = re({
          [
            /*className*/
            f[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            f[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            f[1]
          ),
          .../*internalClasses*/
          f[8]
        }))) && { class: t },
        (!l || h & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          f[9]
        ).map(Qr).concat([
          /*style*/
          f[4]
        ]).join(" "))) && { style: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        f[12]
      ])), r && pe(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        f[2]
      );
    },
    i(f) {
      l || (C(u, f), l = !0);
    },
    o(f) {
      E(u, f), l = !1;
    },
    d(f) {
      f && H(e), u && u.d(f), n[23](null), a = !1, Ze(s);
    }
  };
}
function gc(n) {
  let e, t, i, r;
  const l = [pc, mc], a = [];
  function s(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
const Qr = ([n, e]) => `${n}: ${e};`, Jr = ([n, e]) => `${n}: ${e};`;
function _c(n, e, t) {
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
  const o = nt(xe());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { for: f = void 0 } = e, { floatAbove: h = !1 } = e, { required: m = !1 } = e, { wrapped: b = !1 } = e, p, A, v = {}, T = {}, y = (s = Ke("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, k = h, R = m;
  st(() => {
    t(18, A = new ic({
      addClass: g,
      removeClass: S,
      getWidth: () => {
        var L, V;
        const ue = z(), Fe = ue.cloneNode(!0);
        (L = ue.parentNode) === null || L === void 0 || L.appendChild(Fe), Fe.classList.add("smui-floating-label--remove-transition"), Fe.classList.add("smui-floating-label--force-size"), Fe.classList.remove("mdc-floating-label--float-above");
        const Ie = Fe.scrollWidth;
        return (V = ue.parentNode) === null || V === void 0 || V.removeChild(Fe), Ie;
      },
      registerInteractionHandler: (L, V) => z().addEventListener(L, V),
      deregisterInteractionHandler: (L, V) => z().removeEventListener(L, V)
    }));
    const M = {
      get element() {
        return z();
      },
      addStyle: P,
      removeStyle: _
    };
    return _e(p, "SMUIFloatingLabel:mount", M), A.init(), () => {
      _e(p, "SMUIFloatingLabel:unmount", M), A.destroy();
    };
  });
  function g(M) {
    v[M] || t(8, v[M] = !0, v);
  }
  function S(M) {
    (!(M in v) || v[M]) && t(8, v[M] = !1, v);
  }
  function P(M, L) {
    T[M] != L && (L === "" || L == null ? (delete T[M], t(9, T)) : t(9, T[M] = L, T));
  }
  function _(M) {
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
  function F() {
    return A.getWidth();
  }
  function z() {
    return p;
  }
  function q(M) {
    se[M ? "unshift" : "push"](() => {
      p = M, t(7, p);
    });
  }
  function W(M) {
    se[M ? "unshift" : "push"](() => {
      p = M, t(7, p);
    });
  }
  return n.$$set = (M) => {
    e = Y(Y({}, e), tt(M)), t(12, r = me(e, i)), "use" in M && t(2, u = M.use), "class" in M && t(3, c = M.class), "style" in M && t(4, d = M.style), "for" in M && t(5, f = M.for), "floatAbove" in M && t(0, h = M.floatAbove), "required" in M && t(1, m = M.required), "wrapped" in M && t(6, b = M.wrapped), "$$scope" in M && t(21, a = M.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && A && k !== h && (t(19, k = h), A.float(h)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && A && R !== m && (t(20, R = m), A.setRequired(m));
  }, [
    h,
    m,
    u,
    c,
    d,
    f,
    b,
    p,
    v,
    T,
    o,
    y,
    r,
    I,
    D,
    O,
    F,
    z,
    A,
    k,
    R,
    a,
    l,
    q,
    W
  ];
}
class pi extends De {
  constructor(e) {
    super(), ke(this, e, _c, gc, be, {
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
function bc(n) {
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
      ).map(xr).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = Y(o, s[u]);
  return {
    c() {
      e = x("div"), ce(e, o);
    },
    m(u, c) {
      B(u, e, c), n[13](e), l || (a = [
        de(r = Je.call(
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
        ).map(xr).concat([
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
    i: et,
    o: et,
    d(u) {
      u && H(e), n[13](null), l = !1, Ze(a);
    }
  };
}
const xr = ([n, e]) => `${n}: ${e};`;
function Ic(n, e, t) {
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
  const l = nt(xe());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, d, f = {}, h = {};
  st(() => (d = new rc({
    addClass: b,
    removeClass: p,
    hasClass: m,
    setStyle: A,
    registerEventHandler: (g, S) => k().addEventListener(g, S),
    deregisterEventHandler: (g, S) => k().removeEventListener(g, S)
  }), d.init(), () => {
    d.destroy();
  }));
  function m(g) {
    return g in f ? f[g] : k().classList.contains(g);
  }
  function b(g) {
    f[g] || t(5, f[g] = !0, f);
  }
  function p(g) {
    (!(g in f) || f[g]) && t(5, f[g] = !1, f);
  }
  function A(g, S) {
    h[g] != S && (S === "" || S == null ? (delete h[g], t(6, h)) : t(6, h[g] = S, h));
  }
  function v() {
    d.activate();
  }
  function T() {
    d.deactivate();
  }
  function y(g) {
    d.setRippleCenter(g);
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
    e = Y(Y({}, e), tt(g)), t(8, r = me(e, i)), "use" in g && t(0, a = g.use), "class" in g && t(1, s = g.class), "style" in g && t(2, o = g.style), "active" in g && t(3, u = g.active);
  }, [
    a,
    s,
    o,
    u,
    c,
    f,
    h,
    l,
    r,
    v,
    T,
    y,
    k,
    R
  ];
}
class _a extends De {
  constructor(e) {
    super(), ke(this, e, Ic, bc, be, {
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
function $r(n) {
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
      e = x("div"), l && l.c(), N(e, "class", "mdc-notched-outline__notch"), N(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(el).join(" "));
    },
    m(a, s) {
      B(a, e, s), l && l.m(e, null), i = !0;
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
      ).map(el).join(" "))) && N(e, "style", t);
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && H(e), l && l.d(a);
    }
  };
}
function vc(n) {
  let e, t, i, r, l, a, s, o, u, c, d = !/*noLabel*/
  n[3] && $r(n), f = [
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
  for (let m = 0; m < f.length; m += 1)
    h = Y(h, f[m]);
  return {
    c() {
      e = x("div"), t = x("div"), i = oe(), d && d.c(), r = oe(), l = x("div"), N(t, "class", "mdc-notched-outline__leading"), N(l, "class", "mdc-notched-outline__trailing"), ce(e, h);
    },
    m(m, b) {
      B(m, e, b), Q(e, t), Q(e, i), d && d.m(e, null), Q(e, r), Q(e, l), n[16](e), o = !0, u || (c = [
        de(s = Je.call(
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
    p(m, [b]) {
      /*noLabel*/
      m[3] ? d && (Pe(), E(d, 1, 1, () => {
        d = null;
      }), He()) : d ? (d.p(m, b), b & /*noLabel*/
      8 && C(d, 1)) : (d = $r(m), d.c(), C(d, 1), d.m(e, r)), ce(e, h = he(f, [
        (!o || b & /*className, notched, noLabel, internalClasses*/
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
        b & /*$$restProps*/
        1024 && /*$$restProps*/
        m[10]
      ])), s && pe(s.update) && b & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (C(d), o = !0);
    },
    o(m) {
      E(d), o = !1;
    },
    d(m) {
      m && H(e), d && d.d(), n[16](null), u = !1, Ze(c);
    }
  };
}
const el = ([n, e]) => `${n}: ${e};`;
function Ac(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: d = !1 } = e, f, h, m, b = {}, p = {};
  st(() => (h = new ac({
    addClass: v,
    removeClass: T,
    setNotchWidthProperty: (I) => y("width", I + "px"),
    removeNotchWidthProperty: () => k("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function A(I) {
    t(4, m = I.detail);
  }
  function v(I) {
    b[I] || t(6, b[I] = !0, b);
  }
  function T(I) {
    (!(I in b) || b[I]) && t(6, b[I] = !1, b);
  }
  function y(I, D) {
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
    return f;
  }
  function P(I) {
    se[I ? "unshift" : "push"](() => {
      f = I, t(5, f);
    });
  }
  const _ = () => t(4, m = void 0);
  return n.$$set = (I) => {
    e = Y(Y({}, e), tt(I)), t(10, r = me(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "notched" in I && t(2, c = I.notched), "noLabel" in I && t(3, d = I.noLabel), "$$scope" in I && t(14, a = I.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (m ? (m.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      m && m.removeStyle("transition-duration");
    })) : T("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    d,
    m,
    f,
    b,
    p,
    s,
    A,
    r,
    R,
    g,
    S,
    a,
    l,
    P,
    _
  ];
}
class ba extends De {
  constructor(e) {
    super(), ke(this, e, Ac, vc, be, {
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
function Cc(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function yc(n) {
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
      $$slots: { default: [Cc] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = Y(u, he(r, [
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
      128 && Se(
        /*props*/
        s[7]
      ),
      o & /*$$restProps*/
      512 && Se(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[12](e)), {
    c() {
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), B(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Pe();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
        }
        l ? (e = Rt(l, a(s, o)), s[12](e), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
          128 && Se(
            /*props*/
            s[7]
          ),
          o & /*$$restProps*/
          512 && Se(
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
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), n[12](null), e && ee(e, s);
    }
  };
}
const rn = {
  component: Ft,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Ec(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = rn.class, d = {}, f = [], h = rn.contexts, m = rn.props;
  let { component: b = rn.component } = e, { tag: p = b === Ft ? rn.tag : void 0 } = e;
  Object.entries(rn.classMap).forEach(([y, k]) => {
    const R = Ke(k);
    R && "subscribe" in R && f.push(R.subscribe((g) => {
      t(5, d[y] = g, d);
    }));
  });
  const A = nt(xe());
  for (let y in h)
    h.hasOwnProperty(y) && Ge(y, h[y]);
  Qt(() => {
    for (const y of f)
      y();
  });
  function v() {
    return u.getElement();
  }
  function T(y) {
    se[y ? "unshift" : "push"](() => {
      u = y, t(4, u);
    });
  }
  return n.$$set = (y) => {
    e = Y(Y({}, e), tt(y)), t(9, r = me(e, i)), "use" in y && t(0, s = y.use), "class" in y && t(1, o = y.class), "component" in y && t(2, b = y.component), "tag" in y && t(3, p = y.tag), "$$scope" in y && t(13, a = y.$$scope);
  }, [
    s,
    o,
    b,
    p,
    u,
    d,
    c,
    m,
    A,
    r,
    v,
    l,
    T,
    a
  ];
}
class Sc extends De {
  constructor(e) {
    super(), ke(this, e, Ec, yc, be, {
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
const tl = Object.assign({}, rn);
function At(n) {
  return new Proxy(Sc, {
    construct: function(e, t) {
      return Object.assign(rn, tl, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(rn, tl, n), e[t];
    }
  });
}
const Tc = At({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Lc = At({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Oc = At({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Rc(n) {
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
    s = Y(s, a[o]);
  return {
    c() {
      e = x("input"), ce(e, s);
    },
    m(o, u) {
      B(o, e, u), e.autofocus && e.focus(), n[26](e), r || (l = [
        de(i = Je.call(
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
    i: et,
    o: et,
    d(o) {
      o && H(e), n[26](null), r = !1, Ze(l);
    }
  };
}
function kc(n) {
  return n === "" ? Number.NaN : +n;
}
function Dc(n, e, t) {
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
  const l = nt(xe());
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: d = " " } = e, { value: f = a } = e;
  const h = s(f);
  h && (f = "");
  let { files: m = null } = e, { dirty: b = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: A = !0 } = e, { emptyValueNull: v = f === null } = e;
  h && v && (f = null);
  let { emptyValueUndefined: T = f === void 0 } = e;
  h && T && (f = void 0);
  let y, k = {}, R = {};
  st(() => {
    A && t(14, p = y.matches(":invalid"));
  });
  function g(L) {
    if (c === "file") {
      t(12, m = L.currentTarget.files);
      return;
    }
    if (L.currentTarget.value === "" && v) {
      t(11, f = null);
      return;
    }
    if (L.currentTarget.value === "" && T) {
      t(11, f = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, f = kc(L.currentTarget.value));
        break;
      default:
        t(11, f = L.currentTarget.value);
        break;
    }
  }
  function S(L) {
    (c === "file" || c === "range") && g(L), t(13, b = !0), A && t(14, p = y.matches(":invalid"));
  }
  function P(L) {
    var V;
    return L in k ? (V = k[L]) !== null && V !== void 0 ? V : null : F().getAttribute(L);
  }
  function _(L, V) {
    k[L] !== V && t(6, k[L] = V, k);
  }
  function I(L) {
    (!(L in k) || k[L] != null) && t(6, k[L] = void 0, k);
  }
  function D() {
    F().focus();
  }
  function O() {
    F().blur();
  }
  function F() {
    return y;
  }
  function z(L) {
    wn.call(this, n, L);
  }
  function q(L) {
    wn.call(this, n, L);
  }
  function W(L) {
    se[L ? "unshift" : "push"](() => {
      y = L, t(5, y);
    });
  }
  const M = (L) => c !== "file" && g(L);
  return n.$$set = (L) => {
    e = Y(Y({}, e), tt(L)), t(10, r = me(e, i)), "use" in L && t(0, o = L.use), "class" in L && t(1, u = L.class), "type" in L && t(2, c = L.type), "placeholder" in L && t(3, d = L.placeholder), "value" in L && t(11, f = L.value), "files" in L && t(12, m = L.files), "dirty" in L && t(13, b = L.dirty), "invalid" in L && t(14, p = L.invalid), "updateInvalid" in L && t(15, A = L.updateInvalid), "emptyValueNull" in L && t(16, v = L.emptyValueNull), "emptyValueUndefined" in L && t(17, T = L.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete R.value, t(4, R), t(2, c), t(11, f)) : t(4, R.value = f ?? "", R));
  }, [
    o,
    u,
    c,
    d,
    R,
    y,
    k,
    l,
    g,
    S,
    r,
    f,
    m,
    b,
    p,
    A,
    v,
    T,
    P,
    _,
    I,
    D,
    O,
    F,
    z,
    q,
    W,
    M
  ];
}
class Mc extends De {
  constructor(e) {
    super(), ke(this, e, Dc, Rc, be, {
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
function Fc(n) {
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
    o = Y(o, s[u]);
  return {
    c() {
      e = x("textarea"), ce(e, o);
    },
    m(u, c) {
      B(u, e, c), e.autofocus && e.focus(), n[21](e), Xt(
        e,
        /*value*/
        n[0]
      ), l || (a = [
        de(r = Je.call(
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
      1 && Xt(
        e,
        /*value*/
        u[0]
      );
    },
    i: et,
    o: et,
    d(u) {
      u && H(e), n[21](null), l = !1, Ze(a);
    }
  };
}
function Nc(n, e, t) {
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
  const l = nt(xe());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: d = !1 } = e, { updateInvalid: f = !0 } = e, { resizable: h = !0 } = e, m, b = {};
  st(() => {
    f && t(11, d = m.matches(":invalid"));
  });
  function p() {
    t(10, c = !0), f && t(11, d = m.matches(":invalid"));
  }
  function A(I) {
    var D;
    return I in b ? (D = b[I]) !== null && D !== void 0 ? D : null : R().getAttribute(I);
  }
  function v(I, D) {
    b[I] !== D && t(6, b[I] = D, b);
  }
  function T(I) {
    (!(I in b) || b[I] != null) && t(6, b[I] = void 0, b);
  }
  function y() {
    R().focus();
  }
  function k() {
    R().blur();
  }
  function R() {
    return m;
  }
  function g(I) {
    wn.call(this, n, I);
  }
  function S(I) {
    wn.call(this, n, I);
  }
  function P(I) {
    se[I ? "unshift" : "push"](() => {
      m = I, t(5, m);
    });
  }
  function _() {
    u = this.value, t(0, u);
  }
  return n.$$set = (I) => {
    e = Y(Y({}, e), tt(I)), t(9, r = me(e, i)), "use" in I && t(1, a = I.use), "class" in I && t(2, s = I.class), "style" in I && t(3, o = I.style), "value" in I && t(0, u = I.value), "dirty" in I && t(10, c = I.dirty), "invalid" in I && t(11, d = I.invalid), "updateInvalid" in I && t(12, f = I.updateInvalid), "resizable" in I && t(4, h = I.resizable);
  }, [
    u,
    a,
    s,
    o,
    h,
    m,
    b,
    l,
    p,
    r,
    c,
    d,
    f,
    A,
    v,
    T,
    y,
    k,
    R,
    g,
    S,
    P,
    _
  ];
}
class Uc extends De {
  constructor(e) {
    super(), ke(this, e, Nc, Fc, be, {
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
const wc = (n) => ({}), nl = (n) => ({}), Pc = (n) => ({}), il = (n) => ({}), Hc = (n) => ({}), rl = (n) => ({}), Bc = (n) => ({}), ll = (n) => ({}), Vc = (n) => ({}), sl = (n) => ({}), jc = (n) => ({}), al = (n) => ({}), qc = (n) => ({}), ol = (n) => ({}), Gc = (n) => ({}), ul = (n) => ({}), Kc = (n) => ({}), cl = (n) => ({}), Wc = (n) => ({}), dl = (n) => ({}), zc = (n) => ({}), fl = (n) => ({}), Yc = (n) => ({}), hl = (n) => ({});
function Xc(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m;
  const b = (
    /*#slots*/
    n[56].label
  ), p = Te(
    b,
    n,
    /*$$scope*/
    n[87],
    sl
  );
  i = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Qc] },
      $$scope: { ctx: n }
    }
  });
  const A = (
    /*#slots*/
    n[56].default
  ), v = Te(
    A,
    n,
    /*$$scope*/
    n[87],
    null
  );
  a = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Jc] },
      $$scope: { ctx: n }
    }
  });
  const T = (
    /*#slots*/
    n[56].ripple
  ), y = Te(
    T,
    n,
    /*$$scope*/
    n[87],
    il
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
      ).map(El).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    Zt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], R = {};
  for (let g = 0; g < k.length; g += 1)
    R = Y(R, k[g]);
  return {
    c() {
      e = x("div"), p && p.c(), t = oe(), te(i.$$.fragment), r = oe(), v && v.c(), l = oe(), te(a.$$.fragment), s = oe(), y && y.c(), ce(e, R);
    },
    m(g, S) {
      B(g, e, S), p && p.m(e, null), Q(e, t), $(i, e, null), Q(e, r), v && v.m(e, null), Q(e, l), $(a, e, null), Q(e, s), y && y.m(e, null), n[82](e), f = !0, h || (m = [
        de(c = Ot.call(null, e, {
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
        de(d = Je.call(
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
      p && p.p && (!f || S[2] & /*$$scope*/
      33554432) && Oe(
        p,
        b,
        g,
        /*$$scope*/
        g[87],
        f ? Le(
          b,
          /*$$scope*/
          g[87],
          S,
          Vc
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        sl
      );
      const P = {};
      S[2] & /*$$scope*/
      33554432 && (P.$$scope = { dirty: S, ctx: g }), i.$set(P), v && v.p && (!f || S[2] & /*$$scope*/
      33554432) && Oe(
        v,
        A,
        g,
        /*$$scope*/
        g[87],
        f ? Le(
          A,
          /*$$scope*/
          g[87],
          S,
          null
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        null
      );
      const _ = {};
      S[2] & /*$$scope*/
      33554432 && (_.$$scope = { dirty: S, ctx: g }), a.$set(_), y && y.p && (!f || S[2] & /*$$scope*/
      33554432) && Oe(
        y,
        T,
        g,
        /*$$scope*/
        g[87],
        f ? Le(
          T,
          /*$$scope*/
          g[87],
          S,
          Pc
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        il
      ), ce(e, R = he(k, [
        (!f || S[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
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
        (!f || S[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          g[26]
        ).map(El).concat([
          /*style*/
          g[10]
        ]).join(" "))) && { style: u },
        S[1] & /*$$restProps*/
        32768 && Zt(
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
      }), d && pe(d.update) && S[0] & /*use*/
      256 && d.update.call(
        null,
        /*use*/
        g[8]
      );
    },
    i(g) {
      f || (C(p, g), C(i.$$.fragment, g), C(v, g), C(a.$$.fragment, g), C(y, g), f = !0);
    },
    o(g) {
      E(p, g), E(i.$$.fragment, g), E(v, g), E(a.$$.fragment, g), E(y, g), f = !1;
    },
    d(g) {
      g && H(e), p && p.d(g), ee(i), v && v.d(g), ee(a), y && y.d(g), n[82](null), h = !1, Ze(m);
    }
  };
}
function Zc(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, b, p, A, v, T = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && ml(n), y = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && _l(n)
  );
  r = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [td] },
      $$scope: { ctx: n }
    }
  });
  const k = (
    /*#slots*/
    n[56].default
  ), R = Te(
    k,
    n,
    /*$$scope*/
    n[87],
    null
  ), g = [id, nd], S = [];
  function P(O, F) {
    return (
      /*textarea*/
      O[14] && typeof /*value*/
      O[0] == "string" ? 0 : 1
    );
  }
  s = P(n), o = S[s] = g[s](n), c = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [sd] },
      $$scope: { ctx: n }
    }
  });
  let _ = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Al(n), I = [
    {
      class: f = re({
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
      ).map(yl).concat([
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
  ], D = {};
  for (let O = 0; O < I.length; O += 1)
    D = Y(D, I[O]);
  return {
    c() {
      e = x("label"), T && T.c(), t = oe(), y && y.c(), i = oe(), te(r.$$.fragment), l = oe(), R && R.c(), a = oe(), o.c(), u = oe(), te(c.$$.fragment), d = oe(), _ && _.c(), ce(e, D);
    },
    m(O, F) {
      B(O, e, F), T && T.m(e, null), Q(e, t), y && y.m(e, null), Q(e, i), $(r, e, null), Q(e, l), R && R.m(e, null), Q(e, a), S[s].m(e, null), Q(e, u), $(c, e, null), Q(e, d), _ && _.m(e, null), n[78](e), p = !0, A || (v = [
        de(m = Ot.call(null, e, {
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
        de(b = Je.call(
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
    p(O, F) {
      !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" ? T ? (T.p(O, F), F[0] & /*textarea, variant*/
      49152 && C(T, 1)) : (T = ml(O), T.c(), C(T, 1), T.m(e, t)) : T && (Pe(), E(T, 1, 1, () => {
        T = null;
      }), He()), /*textarea*/
      O[14] || /*variant*/
      O[15] === "outlined" ? y ? (y.p(O, F), F[0] & /*textarea, variant*/
      49152 && C(y, 1)) : (y = _l(O), y.c(), C(y, 1), y.m(e, i)) : y && (Pe(), E(y, 1, 1, () => {
        y = null;
      }), He());
      const z = {};
      F[2] & /*$$scope*/
      33554432 && (z.$$scope = { dirty: F, ctx: O }), r.$set(z), R && R.p && (!p || F[2] & /*$$scope*/
      33554432) && Oe(
        R,
        k,
        O,
        /*$$scope*/
        O[87],
        p ? Le(
          k,
          /*$$scope*/
          O[87],
          F,
          null
        ) : Re(
          /*$$scope*/
          O[87]
        ),
        null
      );
      let q = s;
      s = P(O), s === q ? S[s].p(O, F) : (Pe(), E(S[q], 1, 1, () => {
        S[q] = null;
      }), He(), o = S[s], o ? o.p(O, F) : (o = S[s] = g[s](O), o.c()), C(o, 1), o.m(e, u));
      const W = {};
      F[2] & /*$$scope*/
      33554432 && (W.$$scope = { dirty: F, ctx: O }), c.$set(W), !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" && /*ripple*/
      O[11] ? _ ? (_.p(O, F), F[0] & /*textarea, variant, ripple*/
      51200 && C(_, 1)) : (_ = Al(O), _.c(), C(_, 1), _.m(e, null)) : _ && (Pe(), E(_, 1, 1, () => {
        _ = null;
      }), He()), ce(e, D = he(I, [
        (!p || F[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | F[1] & /*$$slots*/
        65536 && f !== (f = re({
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
        }))) && { class: f },
        (!p || F[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          O[26]
        ).map(yl).concat([
          /*style*/
          O[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        F[1] & /*$$restProps*/
        32768 && Zt(
          /*$$restProps*/
          O[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), m && pe(m.update) && F[0] & /*textarea, variant*/
      49152 | F[1] & /*inputElement*/
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
      }), b && pe(b.update) && F[0] & /*use*/
      256 && b.update.call(
        null,
        /*use*/
        O[8]
      );
    },
    i(O) {
      p || (C(T), C(y), C(r.$$.fragment, O), C(R, O), C(o), C(c.$$.fragment, O), C(_), p = !0);
    },
    o(O) {
      E(T), E(y), E(r.$$.fragment, O), E(R, O), E(o), E(c.$$.fragment, O), E(_), p = !1;
    },
    d(O) {
      O && H(e), T && T.d(), y && y.d(), ee(r), R && R.d(O), S[s].d(), ee(c), _ && _.d(), n[78](null), A = !1, Ze(v);
    }
  };
}
function Qc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    ll
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
          Bc
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        ll
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Jc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    rl
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
          Hc
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        rl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ml(n) {
  let e, t, i, r = (
    /*variant*/
    n[15] === "filled" && pl()
  ), l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && gl(n);
  return {
    c() {
      r && r.c(), e = oe(), l && l.c(), t = Xe();
    },
    m(a, s) {
      r && r.m(a, s), B(a, e, s), l && l.m(a, s), B(a, t, s), i = !0;
    },
    p(a, s) {
      /*variant*/
      a[15] === "filled" ? r || (r = pl(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? l ? (l.p(a, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && C(l, 1)) : (l = gl(a), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (Pe(), E(l, 1, 1, () => {
        l = null;
      }), He());
    },
    i(a) {
      i || (C(l), i = !0);
    },
    o(a) {
      E(l), i = !1;
    },
    d(a) {
      a && (H(e), H(t)), r && r.d(a), l && l.d(a);
    }
  };
}
function pl(n) {
  let e;
  return {
    c() {
      e = x("span"), N(e, "class", "mdc-text-field__ripple");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function gl(n) {
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
    $$slots: { default: [xc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new pi({ props: r }), n[57](e), {
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
        32768 && Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[57](null), ee(e, l);
    }
  };
}
function xc(n) {
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
    hl
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      B(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && gt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
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
          Yc
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        hl
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && H(t), l && l.d(a);
    }
  };
}
function _l(n) {
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
    $$slots: { default: [ed] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new ba({ props: r }), n[59](e), {
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
        32768 && Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[59](null), ee(e, l);
    }
  };
}
function bl(n) {
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
    $$slots: { default: [$c] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new pi({ props: r }), n[58](e), {
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
        32768 && Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[58](null), ee(e, l);
    }
  };
}
function $c(n) {
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
    fl
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      B(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && gt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
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
          zc
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        fl
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && H(t), l && l.d(a);
    }
  };
}
function ed(n) {
  let e, t, i = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && bl(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), B(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && C(i, 1)) : (i = bl(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (Pe(), E(i, 1, 1, () => {
        i = null;
      }), He());
    },
    i(r) {
      t || (C(i), t = !0);
    },
    o(r) {
      E(i), t = !1;
    },
    d(r) {
      r && H(e), i && i.d(r);
    }
  };
}
function td(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    dl
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
          Wc
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        dl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function nd(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = (
    /*#slots*/
    n[56].prefix
  ), f = Te(
    d,
    n,
    /*$$scope*/
    n[87],
    ul
  );
  let h = (
    /*prefix*/
    n[20] != null && Il(n)
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
  function b(g) {
    n[69](g);
  }
  function p(g) {
    n[70](g);
  }
  function A(g) {
    n[71](g);
  }
  function v(g) {
    n[72](g);
  }
  let T = {};
  for (let g = 0; g < m.length; g += 1)
    T = Y(T, m[g]);
  /*value*/
  n[0] !== void 0 && (T.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (T.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (T.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (T.invalid = /*invalid*/
  n[1]), i = new Mc({ props: T }), n[68](i), se.push(() => dt(i, "value", b)), se.push(() => dt(i, "files", p)), se.push(() => dt(i, "dirty", A)), se.push(() => dt(i, "invalid", v)), i.$on(
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
    n[21] != null && vl(n)
  );
  const k = (
    /*#slots*/
    n[56].suffix
  ), R = Te(
    k,
    n,
    /*$$scope*/
    n[87],
    ol
  );
  return {
    c() {
      f && f.c(), e = oe(), h && h.c(), t = oe(), te(i.$$.fragment), o = oe(), y && y.c(), u = oe(), R && R.c();
    },
    m(g, S) {
      f && f.m(g, S), B(g, e, S), h && h.m(g, S), B(g, t, S), $(i, g, S), B(g, o, S), y && y.m(g, S), B(g, u, S), R && R.m(g, S), c = !0;
    },
    p(g, S) {
      f && f.p && (!c || S[2] & /*$$scope*/
      33554432) && Oe(
        f,
        d,
        g,
        /*$$scope*/
        g[87],
        c ? Le(
          d,
          /*$$scope*/
          g[87],
          S,
          Gc
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        ul
      ), /*prefix*/
      g[20] != null ? h ? (h.p(g, S), S[0] & /*prefix*/
      1048576 && C(h, 1)) : (h = Il(g), h.c(), C(h, 1), h.m(t.parentNode, t)) : h && (Pe(), E(h, 1, 1, () => {
        h = null;
      }), He());
      const P = S[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
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
        196608 && Se(
          /*noLabel*/
          g[16] && /*label*/
          g[17] != null ? { placeholder: (
            /*label*/
            g[17]
          ) } : {}
        ),
        S[1] & /*$$restProps*/
        32768 && Se(Ve(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !r && S[0] & /*value*/
      1 && (r = !0, P.value = /*value*/
      g[0], ct(() => r = !1)), !l && S[0] & /*files*/
      8 && (l = !0, P.files = /*files*/
      g[3], ct(() => l = !1)), !a && S[0] & /*dirty*/
      16 && (a = !0, P.dirty = /*dirty*/
      g[4], ct(() => a = !1)), !s && S[0] & /*invalid*/
      2 && (s = !0, P.invalid = /*invalid*/
      g[1], ct(() => s = !1)), i.$set(P), /*suffix*/
      g[21] != null ? y ? (y.p(g, S), S[0] & /*suffix*/
      2097152 && C(y, 1)) : (y = vl(g), y.c(), C(y, 1), y.m(u.parentNode, u)) : y && (Pe(), E(y, 1, 1, () => {
        y = null;
      }), He()), R && R.p && (!c || S[2] & /*$$scope*/
      33554432) && Oe(
        R,
        k,
        g,
        /*$$scope*/
        g[87],
        c ? Le(
          k,
          /*$$scope*/
          g[87],
          S,
          qc
        ) : Re(
          /*$$scope*/
          g[87]
        ),
        ol
      );
    },
    i(g) {
      c || (C(f, g), C(h), C(i.$$.fragment, g), C(y), C(R, g), c = !0);
    },
    o(g) {
      E(f, g), E(h), E(i.$$.fragment, g), E(y), E(R, g), c = !1;
    },
    d(g) {
      g && (H(e), H(t), H(o), H(u)), f && f.d(g), h && h.d(g), n[68](null), ee(i, g), y && y.d(g), R && R.d(g);
    }
  };
}
function id(n) {
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
  function d(p) {
    n[62](p);
  }
  function f(p) {
    n[63](p);
  }
  let h = {};
  for (let p = 0; p < u.length; p += 1)
    h = Y(h, u[p]);
  /*value*/
  n[0] !== void 0 && (h.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (h.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (h.invalid = /*invalid*/
  n[1]), t = new Uc({ props: h }), n[60](t), se.push(() => dt(t, "value", c)), se.push(() => dt(t, "dirty", d)), se.push(() => dt(t, "invalid", f)), t.$on(
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
  ), b = Te(
    m,
    n,
    /*$$scope*/
    n[87],
    cl
  );
  return {
    c() {
      e = x("span"), te(t.$$.fragment), a = oe(), b && b.c(), N(e, "class", s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(p, A) {
      B(p, e, A), $(t, e, null), Q(e, a), b && b.m(e, null), o = !0;
    },
    p(p, A) {
      const v = A[0] & /*disabled, required, updateInvalid, helperId*/
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
        32768 && Se(Ve(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && A[0] & /*value*/
      1 && (i = !0, v.value = /*value*/
      p[0], ct(() => i = !1)), !r && A[0] & /*dirty*/
      16 && (r = !0, v.dirty = /*dirty*/
      p[4], ct(() => r = !1)), !l && A[0] & /*invalid*/
      2 && (l = !0, v.invalid = /*invalid*/
      p[1], ct(() => l = !1)), t.$set(v), b && b.p && (!o || A[2] & /*$$scope*/
      33554432) && Oe(
        b,
        m,
        p,
        /*$$scope*/
        p[87],
        o ? Le(
          m,
          /*$$scope*/
          p[87],
          A,
          Kc
        ) : Re(
          /*$$scope*/
          p[87]
        ),
        cl
      ), (!o || A[1] & /*$$restProps*/
      32768 && s !== (s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && N(e, "class", s);
    },
    i(p) {
      o || (C(t.$$.fragment, p), C(b, p), o = !0);
    },
    o(p) {
      E(t.$$.fragment, p), E(b, p), o = !1;
    },
    d(p) {
      p && H(e), n[60](null), ee(t), b && b.d(p);
    }
  };
}
function Il(n) {
  let e, t;
  return e = new Lc({
    props: {
      $$slots: { default: [rd] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function rd(n) {
  let e;
  return {
    c() {
      e = at(
        /*prefix*/
        n[20]
      );
    },
    m(t, i) {
      B(t, e, i);
    },
    p(t, i) {
      i[0] & /*prefix*/
      1048576 && gt(
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
function vl(n) {
  let e, t;
  return e = new Oc({
    props: {
      $$slots: { default: [ld] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ld(n) {
  let e;
  return {
    c() {
      e = at(
        /*suffix*/
        n[21]
      );
    },
    m(t, i) {
      B(t, e, i);
    },
    p(t, i) {
      i[0] & /*suffix*/
      2097152 && gt(
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
function sd(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    al
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
          jc
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        al
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Al(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new _a({ props: r }), n[77](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? he(i, [Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[77](null), ee(e, l);
    }
  };
}
function Cl(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [ad] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new Tc({ props: r }), e.$on(
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
      32768 ? he(i, [Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function ad(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    nl
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
          wc
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        nl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
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
  let e, t, i, r, l;
  const a = [Zc, Xc], s = [];
  function o(c, d) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = s[e] = a[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Cl(n)
  );
  return {
    c() {
      t.c(), i = oe(), u && u.c(), r = Xe();
    },
    m(c, d) {
      s[e].m(c, d), B(c, i, d), u && u.m(c, d), B(c, r, d), l = !0;
    },
    p(c, d) {
      t.p(c, d), /*$$slots*/
      c[47].helper ? u ? (u.p(c, d), d[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Cl(c), u.c(), C(u, 1), u.m(r.parentNode, r)) : u && (Pe(), E(u, 1, 1, () => {
        u = null;
      }), He());
    },
    i(c) {
      l || (C(t), C(u), l = !0);
    },
    o(c) {
      E(t), E(u), l = !1;
    },
    d(c) {
      c && (H(i), H(r)), s[e].d(c), u && u.d(c);
    }
  };
}
const yl = ([n, e]) => `${n}: ${e};`, El = ([n, e]) => `${n}: ${e};`;
function ud(n, e, t) {
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
  const o = or(a), { applyPassive: u } = ga, c = nt(xe());
  let d = () => {
  };
  function f(U) {
    return U === d;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: b = "" } = e, { ripple: p = !0 } = e, { disabled: A = !1 } = e, { required: v = !1 } = e, { textarea: T = !1 } = e, { variant: y = T ? "outlined" : "standard" } = e, { noLabel: k = !1 } = e, { label: R = void 0 } = e, { type: g = "text" } = e, { value: S = l.input$emptyValueUndefined ? void 0 : d } = e, { files: P = d } = e;
  const _ = !f(S) || !f(P);
  f(S) && (S = void 0), f(P) && (P = null);
  let { invalid: I = d } = e, { updateInvalid: D = f(I) } = e;
  f(I) && (I = !1);
  let { dirty: O = !1 } = e, { prefix: F = void 0 } = e, { suffix: z = void 0 } = e, { validateOnValueChange: q = D } = e, { useNativeValidation: W = D } = e, { withLeadingIcon: M = d } = e, { withTrailingIcon: L = d } = e, { input: V = void 0 } = e, { floatingLabel: ue = void 0 } = e, { lineRipple: Fe = void 0 } = e, { notchedOutline: Ie = void 0 } = e, Ye, K, J = {}, Ae = {}, Ce, Ne = !1, ie = Ke("SMUI:addLayoutListener"), G, qe, Be = new Promise((U) => qe = U), Ct, Z, ye, je, Ue = S;
  ie && (G = ie(X)), st(() => {
    if (t(54, K = new dc(
      {
        // getRootAdapterMethods_
        addClass: ot,
        removeClass: $e,
        hasClass: ut,
        registerTextFieldInteractionHandler: (U, mt) => ge().addEventListener(U, mt),
        deregisterTextFieldInteractionHandler: (U, mt) => ge().removeEventListener(U, mt),
        registerValidationAttributeChangeHandler: (U) => {
          const mt = (qn) => qn.map((Gn) => Gn.attributeName).filter((Gn) => Gn), ei = new MutationObserver((qn) => {
            W && U(mt(qn));
          }), Bi = { attributes: !0 };
          return V && ei.observe(V.getElement(), Bi), ei;
        },
        deregisterValidationAttributeChangeHandler: (U) => {
          U.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var U;
          return (U = V == null ? void 0 : V.getElement()) !== null && U !== void 0 ? U : null;
        },
        setInputAttr: (U, mt) => {
          V == null || V.addAttr(U, mt);
        },
        removeInputAttr: (U) => {
          V == null || V.removeAttr(U);
        },
        isFocused: () => document.activeElement === (V == null ? void 0 : V.getElement()),
        registerInputInteractionHandler: (U, mt) => {
          V == null || V.getElement().addEventListener(U, mt, u());
        },
        deregisterInputInteractionHandler: (U, mt) => {
          V == null || V.getElement().removeEventListener(U, mt, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (U) => ue && ue.float(U),
        getLabelWidth: () => ue ? ue.getWidth() : 0,
        hasLabel: () => !!ue,
        shakeLabel: (U) => ue && ue.shake(U),
        setLabelRequired: (U) => ue && ue.setRequired(U),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Fe && Fe.activate(),
        deactivateLineRipple: () => Fe && Fe.deactivate(),
        setLineRippleTransformOrigin: (U) => Fe && Fe.setRippleCenter(U),
        // getOutlineAdapterMethods_
        closeOutline: () => Ie && Ie.closeNotch(),
        hasOutline: () => !!Ie,
        notchOutline: (U) => Ie && Ie.notch(U)
      },
      {
        get helperText() {
          return ye;
        },
        get characterCounter() {
          return je;
        },
        get leadingIcon() {
          return Ct;
        },
        get trailingIcon() {
          return Z;
        }
      }
    )), _) {
      if (V == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      K.init();
    } else
      cr().then(() => {
        if (V == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        K.init();
      });
    return qe(), () => {
      K.destroy();
    };
  }), Qt(() => {
    G && G();
  });
  function St(U) {
    t(29, Ct = U.detail);
  }
  function j(U) {
    t(30, Z = U.detail);
  }
  function le(U) {
    t(32, je = U.detail);
  }
  function ne(U) {
    t(27, Ce = U.detail);
  }
  function ze(U) {
    t(31, ye = U.detail);
  }
  function ut(U) {
    var mt;
    return U in J ? (mt = J[U]) !== null && mt !== void 0 ? mt : null : ge().classList.contains(U);
  }
  function ot(U) {
    J[U] || t(25, J[U] = !0, J);
  }
  function $e(U) {
    (!(U in J) || J[U]) && t(25, J[U] = !1, J);
  }
  function Ee(U, mt) {
    Ae[U] != mt && (mt === "" || mt == null ? (delete Ae[U], t(26, Ae)) : t(26, Ae[U] = mt, Ae));
  }
  function ae() {
    V == null || V.focus();
  }
  function Bt() {
    V == null || V.blur();
  }
  function X() {
    if (K) {
      const U = K.shouldFloat;
      K.notchOutline(U);
    }
  }
  function ge() {
    return Ye;
  }
  function ve(U) {
    se[U ? "unshift" : "push"](() => {
      ue = U, t(5, ue);
    });
  }
  function it(U) {
    se[U ? "unshift" : "push"](() => {
      ue = U, t(5, ue);
    });
  }
  function Jt(U) {
    se[U ? "unshift" : "push"](() => {
      Ie = U, t(7, Ie);
    });
  }
  function jn(U) {
    se[U ? "unshift" : "push"](() => {
      V = U, t(2, V);
    });
  }
  function _i(U) {
    S = U, t(0, S);
  }
  function bi(U) {
    O = U, t(4, O);
  }
  function Ii(U) {
    I = U, t(1, I), t(54, K), t(19, D);
  }
  const vi = () => t(28, Ne = !1), Ai = () => t(28, Ne = !0), yn = (U) => _e(Ye, "blur", U), Ci = (U) => _e(Ye, "focus", U);
  function xn(U) {
    se[U ? "unshift" : "push"](() => {
      V = U, t(2, V);
    });
  }
  function yi(U) {
    S = U, t(0, S);
  }
  function $n(U) {
    P = U, t(3, P);
  }
  function En(U) {
    O = U, t(4, O);
  }
  function Ei(U) {
    I = U, t(1, I), t(54, K), t(19, D);
  }
  const Si = () => t(28, Ne = !1), Ti = () => t(28, Ne = !0), Li = (U) => _e(Ye, "blur", U), Oi = (U) => _e(Ye, "focus", U);
  function Ri(U) {
    se[U ? "unshift" : "push"](() => {
      Fe = U, t(6, Fe);
    });
  }
  function ki(U) {
    se[U ? "unshift" : "push"](() => {
      Ye = U, t(24, Ye);
    });
  }
  const Di = () => t(29, Ct = void 0), Mi = () => t(30, Z = void 0), Fi = () => t(32, je = void 0);
  function Ni(U) {
    se[U ? "unshift" : "push"](() => {
      Ye = U, t(24, Ye);
    });
  }
  const Ui = () => t(29, Ct = void 0), wi = () => t(30, Z = void 0), Pi = () => {
    t(27, Ce = void 0), t(31, ye = void 0);
  }, Hi = () => t(32, je = void 0);
  return n.$$set = (U) => {
    e = Y(Y({}, e), tt(U)), t(46, l = me(e, r)), "use" in U && t(8, h = U.use), "class" in U && t(9, m = U.class), "style" in U && t(10, b = U.style), "ripple" in U && t(11, p = U.ripple), "disabled" in U && t(12, A = U.disabled), "required" in U && t(13, v = U.required), "textarea" in U && t(14, T = U.textarea), "variant" in U && t(15, y = U.variant), "noLabel" in U && t(16, k = U.noLabel), "label" in U && t(17, R = U.label), "type" in U && t(18, g = U.type), "value" in U && t(0, S = U.value), "files" in U && t(3, P = U.files), "invalid" in U && t(1, I = U.invalid), "updateInvalid" in U && t(19, D = U.updateInvalid), "dirty" in U && t(4, O = U.dirty), "prefix" in U && t(20, F = U.prefix), "suffix" in U && t(21, z = U.suffix), "validateOnValueChange" in U && t(48, q = U.validateOnValueChange), "useNativeValidation" in U && t(49, W = U.useNativeValidation), "withLeadingIcon" in U && t(22, M = U.withLeadingIcon), "withTrailingIcon" in U && t(23, L = U.withTrailingIcon), "input" in U && t(2, V = U.input), "floatingLabel" in U && t(5, ue = U.floatingLabel), "lineRipple" in U && t(6, Fe = U.lineRipple), "notchedOutline" in U && t(7, Ie = U.notchedOutline), "$$scope" in U && t(87, s = U.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, i = V && V.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.isValid() !== !I && (D ? t(1, I = !K.isValid()) : K.setValid(!I)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && K && K.getValidateOnValueChange() !== q && K.setValidateOnValueChange(f(q) ? !1 : q), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && K && K.setUseNativeValidation(f(W) ? !0 : W), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.setDisabled(A), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && K && _ && Ue !== S) {
      t(55, Ue = S);
      const U = `${S}`;
      K.getValue() !== U && K.setValue(U);
    }
  }, [
    S,
    I,
    V,
    P,
    O,
    ue,
    Fe,
    Ie,
    h,
    m,
    b,
    p,
    A,
    v,
    T,
    y,
    k,
    R,
    g,
    D,
    F,
    z,
    M,
    L,
    Ye,
    J,
    Ae,
    Ce,
    Ne,
    Ct,
    Z,
    ye,
    je,
    i,
    c,
    f,
    _,
    Be,
    St,
    j,
    le,
    ne,
    ze,
    ot,
    $e,
    Ee,
    l,
    o,
    q,
    W,
    ae,
    Bt,
    X,
    ge,
    K,
    Ue,
    a,
    ve,
    it,
    Jt,
    jn,
    _i,
    bi,
    Ii,
    vi,
    Ai,
    yn,
    Ci,
    xn,
    yi,
    $n,
    En,
    Ei,
    Si,
    Ti,
    Li,
    Oi,
    Ri,
    ki,
    Di,
    Mi,
    Fi,
    Ni,
    Ui,
    wi,
    Pi,
    Hi,
    s
  ];
}
class Ia extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      ud,
      od,
      be,
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
function cd(n) {
  let e;
  return {
    c() {
      e = at(
        /*content*/
        n[7]
      );
    },
    m(t, i) {
      B(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      128 && gt(
        e,
        /*content*/
        t[7]
      );
    },
    i: et,
    o: et,
    d(t) {
      t && H(e);
    }
  };
}
function dd(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function fd(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = [dd, cd], f = [];
  function h(p, A) {
    return (
      /*content*/
      p[7] == null ? 0 : 1
    );
  }
  t = h(n), i = f[t] = d[t](n);
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
  ], b = {};
  for (let p = 0; p < m.length; p += 1)
    b = Y(b, m[p]);
  return {
    c() {
      e = x("i"), i.c(), ce(e, b);
    },
    m(p, A) {
      B(p, e, A), f[t].m(e, null), n[16](e), o = !0, u || (c = [
        de(s = Je.call(
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
      let v = t;
      t = h(p), t === v ? f[t].p(p, A) : (Pe(), E(f[v], 1, 1, () => {
        f[v] = null;
      }), He(), i = f[t], i ? i.p(p, A) : (i = f[t] = d[t](p), i.c()), C(i, 1), i.m(e, null)), ce(e, b = he(m, [
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
      o || (C(i), o = !0);
    },
    o(p) {
      E(i), o = !1;
    },
    d(p) {
      p && H(e), f[t].d(), n[16](null), u = !1, Ze(c);
    }
  };
}
function hd(n, e, t) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let l = me(e, r), a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(xe());
  let { use: c = [] } = e, { class: d = "" } = e, { role: f = void 0 } = e, { tabindex: h = f === "button" ? 0 : -1 } = e, { disabled: m = !1 } = e, b, p, A = {};
  const v = Ke("SMUI:textfield:icon:leading");
  rt(n, v, (_) => t(18, a = _));
  const T = a;
  let y;
  st(() => (p = new hc({
    getAttr: k,
    setAttr: R,
    removeAttr: g,
    setContent: (_) => {
      t(7, y = _);
    },
    registerInteractionHandler: (_, I) => S().addEventListener(_, I),
    deregisterInteractionHandler: (_, I) => S().removeEventListener(_, I),
    notifyIconAction: () => _e(S(), "SMUITextField:icon", void 0, void 0, !0)
  }), _e(
    S(),
    T ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    p
  ), p.init(), () => {
    _e(
      S(),
      T ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      p
    ), p.destroy();
  }));
  function k(_) {
    var I;
    return _ in A ? (I = A[_]) !== null && I !== void 0 ? I : null : S().getAttribute(_);
  }
  function R(_, I) {
    A[_] !== I && t(6, A[_] = I, A);
  }
  function g(_) {
    (!(_ in A) || A[_] != null) && t(6, A[_] = void 0, A);
  }
  function S() {
    return b;
  }
  function P(_) {
    se[_ ? "unshift" : "push"](() => {
      b = _, t(5, b);
    });
  }
  return n.$$set = (_) => {
    e = Y(Y({}, e), tt(_)), t(12, l = me(e, r)), "use" in _ && t(0, c = _.use), "class" in _ && t(1, d = _.class), "role" in _ && t(2, f = _.role), "tabindex" in _ && t(3, h = _.tabindex), "disabled" in _ && t(4, m = _.disabled), "$$scope" in _ && t(14, o = _.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*role, tabindex*/
    12 && t(8, i = { role: f, tabindex: h });
  }, [
    c,
    d,
    f,
    h,
    m,
    b,
    A,
    y,
    i,
    u,
    v,
    T,
    l,
    S,
    o,
    s,
    P
  ];
}
class md extends De {
  constructor(e) {
    super(), ke(this, e, hd, fd, be, {
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
function pd(n) {
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
    n[0]), e = new Ia({ props: l }), se.push(() => dt(e, "value", r)), {
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
        a[0], ct(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
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
function gd(n) {
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
    $$slots: { leadingIcon: [bd] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Ia({ props: l }), se.push(() => dt(e, "value", r)), {
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
        a[0], ct(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
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
function _d(n) {
  let e;
  return {
    c() {
      e = at(
        /*icon*/
        n[3]
      );
    },
    m(t, i) {
      B(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      8 && gt(
        e,
        /*icon*/
        t[3]
      );
    },
    d(t) {
      t && H(e);
    }
  };
}
function bd(n) {
  let e, t;
  return e = new md({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [_d] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Id(n) {
  let e, t, i, r;
  const l = [gd, pd], a = [];
  function s(o, u) {
    return (
      /*icon*/
      o[3] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
function vd(n, e, t) {
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
class Ad extends De {
  constructor(e) {
    super(), ke(this, e, vd, Id, be, {
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
var Cd = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, yd = {
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
}, Kn = {
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
var Cn;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Cn || (Cn = {}));
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
var un, en, Qe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
un = {}, un["" + Qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", un["" + Qe.LIST_ITEM_CLASS] = "mdc-list-item", un["" + Qe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", un["" + Qe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", un["" + Qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", un["" + Qe.ROOT] = "mdc-list";
var Ln = (en = {}, en["" + Qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", en["" + Qe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", en["" + Qe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", en["" + Qe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", en["" + Qe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", en["" + Qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", en["" + Qe.ROOT] = "mdc-deprecated-list", en), cn = {
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
    .` + Qe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Qe.LIST_ITEM_CLASS + ` a,
    .` + Ln[Qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ln[Qe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Qe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Qe.LIST_ITEM_CLASS + ` a,
    .` + Qe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Qe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ln[Qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ln[Qe.LIST_ITEM_CLASS] + ` a,
    .` + Ln[Qe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ln[Qe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Ed = ["input", "button", "textarea", "select"], Vt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Ed.indexOf(t) === -1 && n.preventDefault();
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
function Sd() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Td(n, e) {
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
function sr(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, l = n.focusedItemIndex, a = n.skipFocus, s = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Aa(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Ld(r, l, s, e) : o = Od(r, s, e), o !== -1 && !a && i(o), o;
}
function Ld(n, e, t, i) {
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
function Od(n, e, t) {
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
function Sl(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, l = n.focusItemAtIndex, a = n.sortedIndexByFirstChar, s = n.isItemAtIndexDisabled, o = pt(t) === "ArrowLeft", u = pt(t) === "ArrowUp", c = pt(t) === "ArrowRight", d = pt(t) === "ArrowDown", f = pt(t) === "Home", h = pt(t) === "End", m = pt(t) === "Enter", b = pt(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || d || f || h || m)
    return -1;
  var p = !b && t.key.length === 1;
  if (p) {
    Vt(t);
    var A = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return sr(A, e);
  }
  if (!b)
    return -1;
  i && Vt(t);
  var v = i && va(e);
  if (v) {
    var A = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return sr(A, e);
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
function Rd(n) {
  return n instanceof Array;
}
var kd = ["Alt", "Control", "Meta", "Shift"];
function Tl(n) {
  var e = new Set(n ? kd.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var Dd = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = _t.UNSET_INDEX, i.focusedItemIndex = _t.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Sd(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qe;
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
        var i = this.adapter.listItemAtIndexHasClass(t, Qe.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = _t.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var l = this.adapter.listItemAtIndexHasClass(r, Qe.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, Qe.LIST_ITEM_ACTIVATED_CLASS);
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
      return this.adapter.listItemAtIndexHasClass(t, Qe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var l = this, a, s = pt(t) === "ArrowLeft", o = pt(t) === "ArrowUp", u = pt(t) === "ArrowRight", c = pt(t) === "ArrowDown", d = pt(t) === "Home", f = pt(t) === "End", h = pt(t) === "Enter", m = pt(t) === "Spacebar", b = this.isVertical && c || !this.isVertical && u, p = this.isVertical && o || !this.isVertical && s, A = t.key === "A" || t.key === "a", v = Tl(t);
      if (this.adapter.isRootFocused()) {
        if ((p || f) && v([]))
          t.preventDefault(), this.focusLastElement();
        else if ((b || d) && v([]))
          t.preventDefault(), this.focusFirstElement();
        else if (p && v(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var T = this.focusLastElement();
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (b && v(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var T = this.focusFirstElement();
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
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
          Sl(y, this.typeaheadState);
        }
        return;
      }
      var k = this.adapter.getFocusedElementIndex();
      if (!(k === -1 && (k = r, k < 0))) {
        if (b && v([]))
          Vt(t), this.focusNextElement(k);
        else if (p && v([]))
          Vt(t), this.focusPrevElement(k);
        else if (b && v(["Shift"]) && this.isCheckboxList) {
          Vt(t);
          var T = this.focusNextElement(k);
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (p && v(["Shift"]) && this.isCheckboxList) {
          Vt(t);
          var T = this.focusPrevElement(k);
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (d && v([]))
          Vt(t), this.focusFirstElement();
        else if (f && v([]))
          Vt(t), this.focusLastElement();
        else if (d && v(["Control", "Shift"]) && this.isCheckboxList) {
          if (Vt(t), this.isIndexDisabled(k))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, k, k);
        } else if (f && v(["Control", "Shift"]) && this.isCheckboxList) {
          if (Vt(t), this.isIndexDisabled(k))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(k, this.adapter.getListItemCount() - 1, k);
        } else if (A && v(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || m) && v([])) {
          if (i) {
            var R = t.target;
            if (R && R.tagName === "A" && h || (Vt(t), this.isIndexDisabled(k)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(k, !1), this.adapter.notifyAction(k));
          }
        } else if ((h || m) && v(["Shift"]) && this.isCheckboxList) {
          var R = t.target;
          if (R && R.tagName === "A" && h || (Vt(t), this.isIndexDisabled(k)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : k, k, k), this.adapter.notifyAction(k));
        }
        if (this.hasTypeahead) {
          var y = {
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
          Sl(y, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var l, a = Tl(r);
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
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, cn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, cn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = Qe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Qe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
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
      for (var l = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), a = !(l != null && l.has(r)), s = Pn([t, i].sort(), 2), o = s[0], u = s[1], c = this.getSelectionAttribute(), d = [], f = o; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var h = l.has(f);
          a !== h && (d.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, a), this.adapter.setAttributeForElementIndex(f, c, "" + a), a ? l.add(f) : l.delete(f));
        }
      d.length && (this.selectedIndex = Qn([], Pn(l)), this.adapter.notifySelectionChange(d));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === _t.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : Rd(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
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
      return sr(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Td(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
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
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Cn.TOP_START, i.originCorner = Cn.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Cd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Cn;
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
        }, Kn.TRANSITION_OPEN_DURATION);
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
          }, Kn.TRANSITION_CLOSE_DURATION);
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), l = this.hasBit(i, It.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, It.RIGHT) ? "right" : "left", s = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, d = u.surfaceSize, f = (t = {}, t[a] = s, t[l] = o, t);
      c.width / d.width > Kn.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(a + " " + l), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, It.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var d = c - a.height > 0;
      !d && u > c + this.openBottomBias && (t = this.setBit(t, It.BOTTOM));
      var f = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, It.FLIP_RTL), m = this.hasBit(this.anchorCorner, It.RIGHT) || this.hasBit(t, It.RIGHT), b = !1;
      f && h ? b = !m : b = m;
      var p, A;
      b ? (p = r.left + l.width + this.anchorMargin.right, A = r.right - this.anchorMargin.right) : (p = r.left + this.anchorMargin.left, A = r.right + l.width - this.anchorMargin.left);
      var v = p - a.width > 0, T = A - a.width > 0, y = this.hasBit(t, It.FLIP_RTL) && this.hasBit(t, It.RIGHT);
      return T && y && f || !v && y ? t = this.unsetBit(t, It.RIGHT) : (v && b && f || v && !b && m || !T && p >= A) && (t = this.setBit(t, It.RIGHT)), t;
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
        for (var d = yt(c), f = d.next(); !f.done; f = d.next()) {
          var h = f.value, m = t[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            t[h] = (u.width - o.width) / 2;
            continue;
          }
          m += s[h], this.isFixedPosition || (h === "top" ? m += a.y : h === "bottom" ? m -= a.y : h === "left" ? m += a.x : m -= a.x), t[h] = m;
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          f && !f.done && (r = d.return) && r.call(d);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, l = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || l) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, Kn.TOUCH_EVENT_WAIT_MS);
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
var Ll = {
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
function Md(n) {
  return !!n.document && typeof n.document.createElement == "function";
}
function Fd(n, e) {
  if (Md(n) && e in Ll) {
    var t = n.document.createElement("div"), i = Ll[e], r = i.standard, l = i.prefixed, a = r in t.style;
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
var Un = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, On = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Nd = {
  FOCUS_ROOT_INDEX: -1
}, Dn;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Dn || (Dn = {}));
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
var Ud = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Dn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return On;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Nd;
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
        var l = this.adapter.getAttributeFromElementAtIndex(r, On.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(l), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(t);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, Ca.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Dn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Dn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Dn.NONE:
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, On.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Un.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Un.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, On.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, On.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, On.ARIA_DISABLED_ATTR, "true"));
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
var ht = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Qi = {
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
}, gn = {
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
var wd = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = gn.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ht;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qi;
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
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === gn.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
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
      return t !== gn.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(ht.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(ht.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(ht.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(ht.FOCUSED), r = t || i, l = this.adapter.hasClass(ht.REQUIRED);
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
      this.adapter.removeClass(ht.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(ht.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(ht.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(ht.FOCUSED))) {
        var i = pt(t) === we.ENTER, r = pt(t) === we.SPACEBAR, l = pt(t) === we.ARROW_UP, a = pt(t) === we.ARROW_DOWN, s = t.ctrlKey || t.metaKey;
        if (!s && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), t.preventDefault();
          return;
        }
        !i && !r && !l && !a || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(ht.FOCUSED);
        if (t) {
          var r = gn.LABEL_SCALE, l = this.adapter.getLabelWidth() * r;
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(ht.INVALID), this.adapter.removeMenuClass(ht.MENU_INVALID)) : (this.adapter.addClass(ht.INVALID), this.adapter.addMenuClass(ht.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(ht.REQUIRED) && !this.adapter.hasClass(ht.DISABLED) ? this.getSelectedIndex() !== gn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(ht.REQUIRED) : this.adapter.removeClass(ht.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Cn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ht.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ht.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ht.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(ht.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Qi.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Qi.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, gn.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, tn = {
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
var Pd = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _n;
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
      return this.adapter.getAttr(_n.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(tn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(tn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), l = !t || r;
        if (l) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(_n.ROLE) : this.adapter.setAttr(_n.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(_n.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(_n.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(_n.ARIA_HIDDEN, "true");
    }, e;
  }(Et)
);
const { document: Hd } = Va;
function Bd(n) {
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
  let d = [
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
      ).map(Ol).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "dialog" },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let h = 0; h < d.length; h += 1)
    f = Y(f, d[h]);
  return {
    c() {
      e = oe(), t = x("div"), c && c.c(), ce(t, f);
    },
    m(h, m) {
      B(h, e, m), B(h, t, m), c && c.m(t, null), n[35](t), a = !0, s || (o = [
        fe(
          Hd.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        de(l = Je.call(
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
      ), ce(t, f = he(d, [
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
        ).map(Ol).concat([
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
      a || (C(c, h), a = !0);
    },
    o(h) {
      E(c, h), a = !1;
    },
    d(h) {
      h && (H(e), H(t)), c && c.d(h), n[35](null), s = !1, Ze(o);
    }
  };
}
const Ol = ([n, e]) => `${n}: ${e};`;
function Vd(n, e, t) {
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
  const c = nt(xe());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { static: m = !1 } = e, { anchor: b = !0 } = e, { fixed: p = !1 } = e, { open: A = m } = e, { managed: v = !1 } = e, { fullWidth: T = !1 } = e, { quickOpen: y = !1 } = e, { anchorElement: k = void 0 } = e, { anchorCorner: R = void 0 } = e, { anchorMargin: g = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: S = 0 } = e, { horizontallyCenteredOnViewport: P = !1 } = e, { openBottomBias: _ = 0 } = e, { neverRestoreFocus: I = !1 } = e, D, O, F = {}, z = {}, q;
  Ge("SMUI:list:role", "menu"), Ge("SMUI:list:item:role", "menuitem");
  const W = Cn;
  st(() => (t(7, O = new Ca({
    addClass: L,
    removeClass: V,
    hasClass: M,
    hasAnchor: () => !!k,
    notifyClose: () => {
      v || t(13, A = m), A || _e(D, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      v || t(13, A = m), A || _e(D, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      v || t(13, A = !0), A && _e(D, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      A || _e(D, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (G) => D.contains(G),
    isRtl: () => getComputedStyle(D).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (G) => {
      t(9, z["transform-origin"] = G, z);
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
      t(9, z.left = "left" in G ? `${G.left}px` : "", z), t(9, z.right = "right" in G ? `${G.right}px` : "", z), t(9, z.top = "top" in G ? `${G.top}px` : "", z), t(9, z.bottom = "bottom" in G ? `${G.bottom}px` : "", z);
    },
    setMaxHeight: (G) => {
      t(9, z["max-height"] = G, z);
    }
  })), _e(D, "SMUIMenuSurface:mount", {
    get open() {
      return A;
    },
    set open(G) {
      t(13, A = G);
    },
    closeProgrammatic: ue
  }), O.init(), () => {
    var G;
    const qe = O.isHoistedElement;
    O.destroy(), qe && ((G = D.parentNode) === null || G === void 0 || G.removeChild(D));
  })), Qt(() => {
    var ie;
    b && D && ((ie = D.parentElement) === null || ie === void 0 || ie.classList.remove("mdc-menu-surface--anchor"));
  });
  function M(ie) {
    return ie in F ? F[ie] : Ce().classList.contains(ie);
  }
  function L(ie) {
    F[ie] || t(8, F[ie] = !0, F);
  }
  function V(ie) {
    (!(ie in F) || F[ie]) && t(8, F[ie] = !1, F);
  }
  function ue(ie) {
    O.close(ie), t(13, A = !1);
  }
  function Fe(ie) {
    O && A && !v && O.handleBodyClick(ie);
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
  function Ae() {
    return O.isFixed();
  }
  function Ce() {
    return D;
  }
  function Ne(ie) {
    se[ie ? "unshift" : "push"](() => {
      D = ie, t(6, D);
    });
  }
  return n.$$set = (ie) => {
    e = Y(Y({}, e), tt(ie)), t(12, r = me(e, i)), "use" in ie && t(0, d = ie.use), "class" in ie && t(1, f = ie.class), "style" in ie && t(2, h = ie.style), "static" in ie && t(3, m = ie.static), "anchor" in ie && t(15, b = ie.anchor), "fixed" in ie && t(4, p = ie.fixed), "open" in ie && t(13, A = ie.open), "managed" in ie && t(16, v = ie.managed), "fullWidth" in ie && t(5, T = ie.fullWidth), "quickOpen" in ie && t(17, y = ie.quickOpen), "anchorElement" in ie && t(14, k = ie.anchorElement), "anchorCorner" in ie && t(18, R = ie.anchorCorner), "anchorMargin" in ie && t(19, g = ie.anchorMargin), "maxHeight" in ie && t(20, S = ie.maxHeight), "horizontallyCenteredOnViewport" in ie && t(21, P = ie.horizontallyCenteredOnViewport), "openBottomBias" in ie && t(22, _ = ie.openBottomBias), "neverRestoreFocus" in ie && t(23, I = ie.neverRestoreFocus), "$$scope" in ie && t(33, a = ie.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && D && b && !(!(t(30, s = D.parentElement) === null || s === void 0) && s.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = D.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, k = t(32, u = D.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && O && O.isOpen() !== A && (A ? O.open() : O.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && O && O.setQuickOpen(y), n.$$.dirty[0] & /*instance, fixed*/
    144 && O && O.setFixedPosition(p), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && O && O.setMaxHeight(S), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && O && O.setIsHorizontallyCenteredOnViewport(P), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && O && R != null && (typeof R == "string" ? O.setAnchorCorner(W[R]) : O.setAnchorCorner(R)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && O && O.setAnchorMargin(g), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && O && O.setOpenBottomBias(_);
  }, [
    d,
    f,
    h,
    m,
    p,
    T,
    D,
    O,
    F,
    z,
    c,
    Fe,
    r,
    A,
    k,
    b,
    v,
    y,
    R,
    g,
    S,
    P,
    _,
    I,
    Ie,
    Ye,
    K,
    J,
    Ae,
    Ce,
    s,
    o,
    u,
    a,
    l,
    Ne
  ];
}
class jd extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      Vd,
      Bd,
      be,
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
function qd(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Gd(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Kd(n) {
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
    $$slots: { default: [Gd] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = Y(a, r[s]);
  return (
    /*open*/
    n[0] !== void 0 && (a.open = /*open*/
    n[0]), e = new jd({ props: a }), n[18](e), se.push(() => dt(e, "open", l)), e.$on(
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
          512 && Se(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: s }), !t && o & /*open*/
        1 && (t = !0, u.open = /*open*/
        s[0], ct(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (C(e.$$.fragment, s), i = !0);
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
function Wd(n, e, t) {
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
  const { closest: o } = hi, u = nt(xe());
  let { use: c = [] } = e, { class: d = "" } = e, { open: f = !1 } = e, h, m, b, p;
  st(() => (t(3, m = new Ud({
    addClassToElementAtIndex: (F, z) => {
      p.addClassForElementIndex(F, z);
    },
    removeClassFromElementAtIndex: (F, z) => {
      p.removeClassForElementIndex(F, z);
    },
    addAttributeToElementAtIndex: (F, z, q) => {
      p.setAttributeForElementIndex(F, z, q);
    },
    removeAttributeFromElementAtIndex: (F, z) => {
      p.removeAttributeForElementIndex(F, z);
    },
    getAttributeFromElementAtIndex: (F, z) => p.getAttributeFromElementIndex(F, z),
    elementContainsClass: (F, z) => F.classList.contains(z),
    closeSurface: (F) => {
      b.closeProgrammatic(F), _e(P(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (F) => p.getOrderedList().map((z) => z.element).indexOf(F),
    notifySelected: (F) => _e(
      P(),
      "SMUIMenu:selected",
      {
        index: F.index,
        item: p.getOrderedList()[F.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => p.items.length,
    focusItemAtIndex: (F) => p.focusItemAtIndex(F),
    focusListRoot: () => "focus" in p.element && p.element.focus(),
    isSelectableItemAtIndex: (F) => !!o(p.getOrderedList()[F].element, `.${Un.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (F) => {
      const z = p.getOrderedList(), q = o(z[F].element, `.${Un.MENU_SELECTION_GROUP}`), W = q == null ? void 0 : q.querySelector(`.${Un.MENU_SELECTED_LIST_ITEM}`);
      return W ? z.map((M) => M.element).indexOf(W) : -1;
    }
  })), _e(P(), "SMUIMenu:mount", m), m.init(), () => {
    m.destroy();
  }));
  function A(F) {
    m && m.handleKeydown(F);
  }
  function v(F) {
    b || (b = F.detail);
  }
  function T(F) {
    p || t(4, p = F.detail);
  }
  function y() {
    return f;
  }
  function k(F) {
    t(0, f = F);
  }
  function R(F) {
    m.setDefaultFocusState(F);
  }
  function g() {
    return m.getSelectedIndex();
  }
  function S() {
    return h;
  }
  function P() {
    return h.getElement();
  }
  function _(F) {
    se[F ? "unshift" : "push"](() => {
      h = F, t(2, h);
    });
  }
  function I(F) {
    f = F, t(0, f);
  }
  const D = () => m && m.handleMenuSurfaceOpened(), O = (F) => m && m.handleItemAction(p.getOrderedList()[F.detail.index].element);
  return n.$$set = (F) => {
    e = Y(Y({}, e), tt(F)), t(9, l = me(e, r)), "use" in F && t(10, c = F.use), "class" in F && t(1, d = F.class), "open" in F && t(0, f = F.open), "$$scope" in F && t(22, s = F.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    1024 && t(5, i = [u, ...c]);
  }, [
    f,
    d,
    h,
    m,
    p,
    i,
    A,
    v,
    T,
    l,
    c,
    y,
    k,
    R,
    g,
    S,
    P,
    a,
    _,
    I,
    D,
    O,
    s
  ];
}
class zd extends De {
  constructor(e) {
    super(), ke(this, e, Wd, Kd, be, {
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
function Yd(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Xd(n) {
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
      $$slots: { default: [Yd] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = Y(u, he(r, [
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
      33554432 && Se(
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), B(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      4096 && l !== (l = /*component*/
      s[12])) {
        if (e) {
          Pe();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
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
        ), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
          33554432 && Se(
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
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), n[43](null), e && ee(e, s);
    }
  };
}
function Zd(n, e, t) {
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
  const { closest: o, matches: u } = hi, c = nt(xe());
  let { use: d = [] } = e, { class: f = "" } = e, { nonInteractive: h = !1 } = e, { dense: m = !1 } = e, { textualList: b = !1 } = e, { avatarList: p = !1 } = e, { iconList: A = !1 } = e, { imageList: v = !1 } = e, { thumbnailList: T = !1 } = e, { videoList: y = !1 } = e, { twoLine: k = !1 } = e, { threeLine: R = !1 } = e, { vertical: g = !0 } = e, { wrapFocus: S = (s = Ke("SMUI:list:wrapFocus")) !== null && s !== void 0 ? s : !1 } = e, { singleSelection: P = !1 } = e, { disabledItemsFocusable: _ = !1 } = e, { selectedIndex: I = -1 } = e, { radioList: D = !1 } = e, { checkList: O = !1 } = e, { hasTypeahead: F = !1 } = e, z, q, W = [], M = Ke("SMUI:list:role"), L = Ke("SMUI:list:nav");
  const V = /* @__PURE__ */ new WeakMap();
  let ue = Ke("SMUI:dialog:selection"), Fe = Ke("SMUI:addLayoutListener"), Ie, { component: Ye = Ft } = e, { tag: K = Ye === Ft ? L ? "nav" : "ul" : void 0 } = e;
  Ge("SMUI:list:nonInteractive", h), Ge("SMUI:separator:context", "list"), M || (P ? (M = "listbox", Ge("SMUI:list:item:role", "option")) : D ? (M = "radiogroup", Ge("SMUI:list:item:role", "radio")) : O ? (M = "group", Ge("SMUI:list:item:role", "checkbox")) : (M = "list", Ge("SMUI:list:item:role", void 0))), Fe && (Ie = Fe(ne)), st(() => {
    t(41, q = new Dd({
      addClassForElementIndex: Z,
      focusItemAtIndex: Ee,
      getAttributeForElementIndex: (ge, ve) => {
        var it, Jt;
        return (Jt = (it = Be()[ge]) === null || it === void 0 ? void 0 : it.getAttr(ve)) !== null && Jt !== void 0 ? Jt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Be().map((ge) => ge.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => W.length,
      getPrimaryTextAtIndex: j,
      hasCheckboxAtIndex: (ge) => {
        var ve, it;
        return (it = (ve = Be()[ge]) === null || ve === void 0 ? void 0 : ve.hasCheckbox) !== null && it !== void 0 ? it : !1;
      },
      hasRadioAtIndex: (ge) => {
        var ve, it;
        return (it = (ve = Be()[ge]) === null || ve === void 0 ? void 0 : ve.hasRadio) !== null && it !== void 0 ? it : !1;
      },
      isCheckboxCheckedAtIndex: (ge) => {
        var ve;
        const it = Be()[ge];
        return (ve = (it == null ? void 0 : it.hasCheckbox) && it.checked) !== null && ve !== void 0 ? ve : !1;
      },
      isFocusInsideList: () => z != null && ae() !== document.activeElement && ae().contains(document.activeElement),
      isRootFocused: () => z != null && document.activeElement === ae(),
      listItemAtIndexHasClass: Ct,
      notifyAction: (ge) => {
        t(26, I = ge), z != null && _e(ae(), "SMUIList:action", { index: ge }, void 0, !0);
      },
      notifySelectionChange: (ge) => {
        z != null && _e(ae(), "SMUIList:selectionChange", { changedIndices: ge });
      },
      removeClassForElementIndex: ye,
      setAttributeForElementIndex: je,
      setCheckedCheckboxOrRadioAtIndex: (ge, ve) => {
        Be()[ge].checked = ve;
      },
      setTabIndexForListItemChildren: (ge, ve) => {
        const it = Be()[ge];
        Array.prototype.forEach.call(it.element.querySelectorAll("button:not(:disabled), a"), (jn) => {
          jn.setAttribute("tabindex", ve);
        });
      }
    }));
    const X = {
      get element() {
        return ae();
      },
      get items() {
        return W;
      },
      get typeaheadInProgress() {
        return q.isTypeaheadInProgress();
      },
      typeaheadMatchItem(ge, ve) {
        return q.typeaheadMatchItem(
          ge,
          ve,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Be,
      focusItemAtIndex: Ee,
      addClassForElementIndex: Z,
      removeClassForElementIndex: ye,
      setAttributeForElementIndex: je,
      removeAttributeForElementIndex: Ue,
      getAttributeFromElementIndex: St,
      getPrimaryTextAtIndex: j
    };
    return _e(ae(), "SMUIList:mount", X), q.init(), q.layout(), () => {
      q.destroy();
    };
  }), Qt(() => {
    Ie && Ie();
  });
  function J(X) {
    W.push(X.detail), V.set(X.detail.element, X.detail), P && X.detail.selected && t(26, I = le(X.detail.element)), X.stopPropagation();
  }
  function Ae(X) {
    var ge;
    const ve = (ge = X.detail && W.indexOf(X.detail)) !== null && ge !== void 0 ? ge : -1;
    ve !== -1 && (W.splice(ve, 1), W = W, V.delete(X.detail.element)), X.stopPropagation();
  }
  function Ce(X) {
    q && X.target && q.handleKeydown(X, X.target.classList.contains("mdc-deprecated-list-item"), le(X.target));
  }
  function Ne(X) {
    q && X.target && q.handleFocusIn(le(X.target));
  }
  function ie(X) {
    q && X.target && q.handleFocusOut(le(X.target));
  }
  function G(X) {
    q && X.target && q.handleClick(le(X.target), !u(X.target, 'input[type="checkbox"], input[type="radio"]'), X);
  }
  function qe(X) {
    if (D || O) {
      const ge = le(X.target);
      if (ge !== -1) {
        const ve = Be()[ge];
        ve && (D && !ve.checked || O) && (u(X.detail.target, 'input[type="checkbox"], input[type="radio"]') || (ve.checked = !ve.checked), ve.activateRipple(), window.requestAnimationFrame(() => {
          ve.deactivateRipple();
        }));
      }
    }
  }
  function Be() {
    return z == null ? [] : [...ae().children].map((X) => V.get(X)).filter((X) => X && X._smui_list_item_accessor);
  }
  function Ct(X, ge) {
    var ve;
    const it = Be()[X];
    return (ve = it && it.hasClass(ge)) !== null && ve !== void 0 ? ve : !1;
  }
  function Z(X, ge) {
    const ve = Be()[X];
    ve && ve.addClass(ge);
  }
  function ye(X, ge) {
    const ve = Be()[X];
    ve && ve.removeClass(ge);
  }
  function je(X, ge, ve) {
    const it = Be()[X];
    it && it.addAttr(ge, ve);
  }
  function Ue(X, ge) {
    const ve = Be()[X];
    ve && ve.removeAttr(ge);
  }
  function St(X, ge) {
    const ve = Be()[X];
    return ve ? ve.getAttr(ge) : null;
  }
  function j(X) {
    var ge;
    const ve = Be()[X];
    return (ge = ve && ve.getPrimaryText()) !== null && ge !== void 0 ? ge : "";
  }
  function le(X) {
    const ge = o(X, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ge && u(ge, ".mdc-deprecated-list-item") ? Be().map((ve) => ve == null ? void 0 : ve.element).indexOf(ge) : -1;
  }
  function ne() {
    return q.layout();
  }
  function ze(X, ge) {
    return q.setEnabled(X, ge);
  }
  function ut() {
    return q.isTypeaheadInProgress();
  }
  function ot() {
    return q.getSelectedIndex();
  }
  function $e() {
    return q.getFocusedItemIndex();
  }
  function Ee(X) {
    const ge = Be()[X];
    ge && "focus" in ge.element && ge.element.focus();
  }
  function ae() {
    return z.getElement();
  }
  function Bt(X) {
    se[X ? "unshift" : "push"](() => {
      z = X, t(14, z);
    });
  }
  return n.$$set = (X) => {
    e = Y(Y({}, e), tt(X)), t(25, r = me(e, i)), "use" in X && t(0, d = X.use), "class" in X && t(1, f = X.class), "nonInteractive" in X && t(2, h = X.nonInteractive), "dense" in X && t(3, m = X.dense), "textualList" in X && t(4, b = X.textualList), "avatarList" in X && t(5, p = X.avatarList), "iconList" in X && t(6, A = X.iconList), "imageList" in X && t(7, v = X.imageList), "thumbnailList" in X && t(8, T = X.thumbnailList), "videoList" in X && t(9, y = X.videoList), "twoLine" in X && t(10, k = X.twoLine), "threeLine" in X && t(11, R = X.threeLine), "vertical" in X && t(27, g = X.vertical), "wrapFocus" in X && t(28, S = X.wrapFocus), "singleSelection" in X && t(29, P = X.singleSelection), "disabledItemsFocusable" in X && t(30, _ = X.disabledItemsFocusable), "selectedIndex" in X && t(26, I = X.selectedIndex), "radioList" in X && t(31, D = X.radioList), "checkList" in X && t(32, O = X.checkList), "hasTypeahead" in X && t(33, F = X.hasTypeahead), "component" in X && t(12, Ye = X.component), "tag" in X && t(13, K = X.tag), "$$scope" in X && t(44, a = X.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setVerticalOrientation(g), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setWrapFocus(S), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && q && q.setHasTypeahead(F), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setSingleSelection(P), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && q && q.setDisabledItemsFocusable(_), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && q && P && ot() !== I && q.setSelectedIndex(I);
  }, [
    d,
    f,
    h,
    m,
    b,
    p,
    A,
    v,
    T,
    y,
    k,
    R,
    Ye,
    K,
    z,
    M,
    c,
    ue,
    J,
    Ae,
    Ce,
    Ne,
    ie,
    G,
    qe,
    r,
    I,
    g,
    S,
    P,
    _,
    D,
    O,
    F,
    ne,
    ze,
    ut,
    ot,
    $e,
    Ee,
    ae,
    q,
    l,
    Bt,
    a
  ];
}
class Qd extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      Zd,
      Xd,
      be,
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
function Rl(n) {
  let e;
  return {
    c() {
      e = x("span"), N(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Jd(n) {
  let e, t, i = (
    /*ripple*/
    n[7] && Rl()
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
      i && i.c(), e = Xe(), l && l.c();
    },
    m(a, s) {
      i && i.m(a, s), B(a, e, s), l && l.m(a, s), t = !0;
    },
    p(a, s) {
      /*ripple*/
      a[7] ? i || (i = Rl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), l && l.p && (!t || s[1] & /*$$scope*/
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
      E(l, a), t = !1;
    },
    d(a) {
      a && H(e), i && i.d(a), l && l.d(a);
    }
  };
}
function xd(n) {
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
      ).map(Ji).concat([
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
      $$slots: { default: [Jd] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = Y(u, he(r, [
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
        ).map(Ji).concat([
          /*style*/
          s[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && Se(
        /*nav*/
        s[23] && /*activated*/
        s[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && Se(!/*nav*/
      s[23] || /*wrapper*/
      s[8] ? { role: (
        /*role*/
        s[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && Se(!/*nav*/
      s[23] && /*role*/
      s[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          s[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && Se(!/*nav*/
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
      8389632 && Se(/*nav*/
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
      1048576 && Se(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Se(
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), B(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Pe();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
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
        ), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
            ).map(Ji).concat([
              /*style*/
              s[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && Se(
            /*nav*/
            s[23] && /*activated*/
            s[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && Se(!/*nav*/
          s[23] || /*wrapper*/
          s[8] ? { role: (
            /*role*/
            s[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && Se(!/*nav*/
          s[23] && /*role*/
          s[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              s[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && Se(!/*nav*/
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
          8389632 && Se(/*nav*/
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
          1048576 && Se(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Se(
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
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), n[35](null), e && ee(e, s);
    }
  };
}
let $d = 0;
const Ji = ([n, e]) => `${n}: ${e};`;
function ef(n, e, t) {
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
  const u = nt(xe());
  let c = () => {
  };
  function d(Z) {
    return Z === c;
  }
  let { use: f = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { color: b = void 0 } = e, { nonInteractive: p = (o = Ke("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  Ge("SMUI:list:nonInteractive", void 0);
  let { ripple: A = !p } = e, { wrapper: v = !1 } = e, { activated: T = !1 } = e, { role: y = v ? "presentation" : Ke("SMUI:list:item:role") } = e;
  Ge("SMUI:list:item:role", void 0);
  let { selected: k = !1 } = e, { disabled: R = !1 } = e, { skipRestoreFocus: g = !1 } = e, { tabindex: S = c } = e, { inputId: P = "SMUI-form-field-list-" + $d++ } = e, { href: _ = void 0 } = e, I, D = {}, O = {}, F = {}, z, q, W = Ke("SMUI:list:item:nav"), { component: M = Ft } = e, { tag: L = M === Ft ? W ? _ ? "a" : "span" : "li" : void 0 } = e;
  Ge("SMUI:generic:input:props", { id: P }), Ge("SMUI:separator:context", void 0), st(() => {
    if (!k && !p) {
      let ye = !0, je = I.getElement();
      for (; je.previousSibling; )
        if (je = je.previousSibling, je.nodeType === 1 && je.classList.contains("mdc-deprecated-list-item") && !je.classList.contains("mdc-deprecated-list-item--disabled")) {
          ye = !1;
          break;
        }
      ye && (q = window.requestAnimationFrame(() => Ae(je)));
    }
    const Z = {
      _smui_list_item_accessor: !0,
      get element() {
        return qe();
      },
      get selected() {
        return k;
      },
      set selected(ye) {
        t(0, k = ye);
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
        var ye;
        return (ye = z && z.checked) !== null && ye !== void 0 ? ye : !1;
      },
      set checked(ye) {
        z && t(16, z.checked = !!ye, z);
      },
      get hasCheckbox() {
        return !!(z && "_smui_checkbox_accessor" in z);
      },
      get hasRadio() {
        return !!(z && "_smui_radio_accessor" in z);
      },
      activateRipple() {
        z && z.activateRipple();
      },
      deactivateRipple() {
        z && z.deactivateRipple();
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
      set tabindex(ye) {
        t(30, S = ye);
      },
      get disabled() {
        return R;
      },
      get activated() {
        return T;
      },
      set activated(ye) {
        t(1, T = ye);
      }
    };
    return _e(qe(), "SMUIListItem:mount", Z), () => {
      _e(qe(), "SMUIListItem:unmount", Z);
    };
  }), Qt(() => {
    q && window.cancelAnimationFrame(q);
  });
  function V(Z) {
    return Z in D ? D[Z] : qe().classList.contains(Z);
  }
  function ue(Z) {
    D[Z] || t(18, D[Z] = !0, D);
  }
  function Fe(Z) {
    (!(Z in D) || D[Z]) && t(18, D[Z] = !1, D);
  }
  function Ie(Z, ye) {
    O[Z] != ye && (ye === "" || ye == null ? (delete O[Z], t(19, O)) : t(19, O[Z] = ye, O));
  }
  function Ye(Z) {
    var ye;
    return Z in F ? (ye = F[Z]) !== null && ye !== void 0 ? ye : null : qe().getAttribute(Z);
  }
  function K(Z, ye) {
    F[Z] !== ye && t(20, F[Z] = ye, F);
  }
  function J(Z) {
    (!(Z in F) || F[Z] != null) && t(20, F[Z] = void 0, F);
  }
  function Ae(Z) {
    let ye = !0;
    for (; Z.nextElementSibling; )
      if (Z = Z.nextElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item")) {
        const je = Z.attributes.getNamedItem("tabindex");
        if (je && je.value === "0") {
          ye = !1;
          break;
        }
      }
    ye && t(21, i = 0);
  }
  function Ce(Z) {
    const ye = Z.key === "Enter", je = Z.key === "Space";
    (ye || je) && ie(Z);
  }
  function Ne(Z) {
    ("_smui_checkbox_accessor" in Z.detail || "_smui_radio_accessor" in Z.detail) && t(16, z = Z.detail);
  }
  function ie(Z) {
    R || _e(qe(), "SMUI:action", Z);
  }
  function G() {
    var Z, ye, je;
    const Ue = qe(), St = Ue.querySelector(".mdc-deprecated-list-item__primary-text");
    if (St)
      return (Z = St.textContent) !== null && Z !== void 0 ? Z : "";
    const j = Ue.querySelector(".mdc-deprecated-list-item__text");
    return j ? (ye = j.textContent) !== null && ye !== void 0 ? ye : "" : (je = Ue.textContent) !== null && je !== void 0 ? je : "";
  }
  function qe() {
    return I.getElement();
  }
  function Be(Z) {
    se[Z ? "unshift" : "push"](() => {
      I = Z, t(17, I);
    });
  }
  const Ct = () => t(16, z = void 0);
  return n.$$set = (Z) => {
    e = Y(Y({}, e), tt(Z)), t(29, l = me(e, r)), "use" in Z && t(2, f = Z.use), "class" in Z && t(3, h = Z.class), "style" in Z && t(4, m = Z.style), "color" in Z && t(5, b = Z.color), "nonInteractive" in Z && t(6, p = Z.nonInteractive), "ripple" in Z && t(7, A = Z.ripple), "wrapper" in Z && t(8, v = Z.wrapper), "activated" in Z && t(1, T = Z.activated), "role" in Z && t(9, y = Z.role), "selected" in Z && t(0, k = Z.selected), "disabled" in Z && t(10, R = Z.disabled), "skipRestoreFocus" in Z && t(11, g = Z.skipRestoreFocus), "tabindex" in Z && t(30, S = Z.tabindex), "inputId" in Z && t(31, P = Z.inputId), "href" in Z && t(12, _ = Z.href), "component" in Z && t(13, M = Z.component), "tag" in Z && t(14, L = Z.tag), "$$scope" in Z && t(37, s = Z.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, i = d(S) ? !p && !R && (k || z && z.checked) ? 0 : -1 : S);
  }, [
    k,
    T,
    f,
    h,
    m,
    b,
    p,
    A,
    v,
    y,
    R,
    g,
    _,
    M,
    L,
    ie,
    z,
    I,
    D,
    O,
    F,
    i,
    u,
    W,
    ue,
    Fe,
    Ie,
    Ce,
    Ne,
    l,
    S,
    P,
    G,
    qe,
    a,
    Be,
    Ct,
    s
  ];
}
class tf extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      ef,
      xd,
      be,
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
At({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
At({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
At({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function nf(n) {
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
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = x("span"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      B(d, e, f), o && o.m(e, null), n[9](e), r = !0, l || (a = [
        de(i = Je.call(
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
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      128) && Oe(
        o,
        s,
        d,
        /*$$scope*/
        d[7],
        r ? Le(
          s,
          /*$$scope*/
          d[7],
          f,
          null
        ) : Re(
          /*$$scope*/
          d[7]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className*/
        2 && t !== (t = re({
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
      ])), i && pe(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (C(o, d), r = !0);
    },
    o(d) {
      E(o, d), r = !1;
    },
    d(d) {
      d && H(e), o && o.d(d), n[9](null), l = !1, Ze(a);
    }
  };
}
function rf(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = Ke("SMUI:list:graphic:menu-selection-group");
  function f() {
    return c;
  }
  function h(m) {
    se[m ? "unshift" : "push"](() => {
      c = m, t(2, c);
    });
  }
  return n.$$set = (m) => {
    e = Y(Y({}, e), tt(m)), t(5, r = me(e, i)), "use" in m && t(0, o = m.use), "class" in m && t(1, u = m.class), "$$scope" in m && t(7, a = m.$$scope);
  }, [
    o,
    u,
    c,
    s,
    d,
    r,
    f,
    a,
    l,
    h
  ];
}
class lf extends De {
  constructor(e) {
    super(), ke(this, e, rf, nf, be, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
At({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
At({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
At({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
At({
  class: "mdc-menu__selection-group-icon",
  component: lf
});
function sf(n) {
  let e;
  return {
    c() {
      e = at(
        /*content*/
        n[8]
      );
    },
    m(t, i) {
      B(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      256 && gt(
        e,
        /*content*/
        t[8]
      );
    },
    i: et,
    o: et,
    d(t) {
      t && H(e);
    }
  };
}
function af(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function of(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [af, sf], d = [];
  function f(b, p) {
    return (
      /*content*/
      b[8] == null ? 0 : 1
    );
  }
  t = f(n), i = d[t] = c[t](n);
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
  for (let b = 0; b < h.length; b += 1)
    m = Y(m, h[b]);
  return {
    c() {
      e = x("div"), i.c(), ce(e, m);
    },
    m(b, p) {
      B(b, e, p), d[t].m(e, null), n[14](e), s = !0, o || (u = [
        de(a = Je.call(
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
    p(b, [p]) {
      let A = t;
      t = f(b), t === A ? d[t].p(b, p) : (Pe(), E(d[A], 1, 1, () => {
        d[A] = null;
      }), He(), i = d[t], i ? i.p(b, p) : (i = d[t] = c[t](b), i.c()), C(i, 1), i.m(e, null)), ce(e, m = he(h, [
        (!s || p & /*className, validationMsg, persistent, internalClasses*/
        90 && r !== (r = re({
          [
            /*className*/
            b[1]
          ]: !0,
          "mdc-select-helper-text": !0,
          "mdc-select-helper-text--validation-msg": (
            /*validationMsg*/
            b[4]
          ),
          "mdc-select-helper-text--validation-msg-persistent": (
            /*persistent*/
            b[3]
          ),
          .../*internalClasses*/
          b[6]
        }))) && { class: r },
        (!s || p & /*persistent*/
        8 && l !== (l = /*persistent*/
        b[3] ? void 0 : "true")) && { "aria-hidden": l },
        (!s || p & /*id*/
        4) && { id: (
          /*id*/
          b[2]
        ) },
        p & /*internalAttrs*/
        128 && /*internalAttrs*/
        b[7],
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        b[10]
      ])), a && pe(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      s || (C(i), s = !0);
    },
    o(b) {
      E(i), s = !1;
    },
    d(b) {
      b && H(e), d[t].d(), n[14](null), o = !1, Ze(u);
    }
  };
}
let uf = 0;
function cf(n, e, t) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + uf++ } = e, { persistent: d = !1 } = e, { validationMsg: f = !1 } = e, h, m, b = {}, p = {}, A;
  st(() => (m = new Pd({
    addClass: T,
    removeClass: y,
    hasClass: v,
    getAttr: k,
    setAttr: R,
    removeAttr: g,
    setContent: (_) => {
      t(8, A = _);
    }
  }), c.startsWith("SMUI-select-helper-text-") && _e(S(), "SMUISelectHelperText:id", c), _e(S(), "SMUISelectHelperText:mount", m), m.init(), () => {
    _e(S(), "SMUISelectHelperText:unmount", m), m.destroy();
  }));
  function v(_) {
    return _ in b ? b[_] : S().classList.contains(_);
  }
  function T(_) {
    b[_] || t(6, b[_] = !0, b);
  }
  function y(_) {
    (!(_ in b) || b[_]) && t(6, b[_] = !1, b);
  }
  function k(_) {
    var I;
    return _ in p ? (I = p[_]) !== null && I !== void 0 ? I : null : S().getAttribute(_);
  }
  function R(_, I) {
    p[_] !== I && t(7, p[_] = I, p);
  }
  function g(_) {
    (!(_ in p) || p[_] != null) && t(7, p[_] = void 0, p);
  }
  function S() {
    return h;
  }
  function P(_) {
    se[_ ? "unshift" : "push"](() => {
      h = _, t(5, h);
    });
  }
  return n.$$set = (_) => {
    e = Y(Y({}, e), tt(_)), t(10, r = me(e, i)), "use" in _ && t(0, o = _.use), "class" in _ && t(1, u = _.class), "id" in _ && t(2, c = _.id), "persistent" in _ && t(3, d = _.persistent), "validationMsg" in _ && t(4, f = _.validationMsg), "$$scope" in _ && t(12, a = _.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    b,
    p,
    A,
    s,
    r,
    S,
    a,
    l,
    P
  ];
}
class df extends De {
  constructor(e) {
    super(), ke(this, e, cf, of, be, {
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
const ff = (n) => ({}), kl = (n) => ({}), hf = (n) => ({}), Dl = (n) => ({}), mf = (n) => ({}), Ml = (n) => ({}), pf = (n) => ({}), Fl = (n) => ({});
function Nl(n) {
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
    i = Y(i, t[r]);
  return {
    c() {
      e = x("input"), ce(e, i);
    },
    m(r, l) {
      B(r, e, l), e.autofocus && e.focus();
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
      r && H(e);
    }
  };
}
function Ul(n) {
  let e;
  return {
    c() {
      e = x("span"), N(e, "class", "mdc-select__ripple");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function wl(n) {
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
    $$slots: { default: [gf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new pi({ props: r }), n[67](e), {
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
        4194304 && Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[67](null), ee(e, l);
    }
  };
}
function gf(n) {
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
    Fl
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      B(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && gt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
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
          pf
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        Fl
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && H(t), l && l.d(a);
    }
  };
}
function Pl(n) {
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
    $$slots: { default: [bf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new ba({ props: r }), n[69](e), {
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
        4194304 && Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[69](null), ee(e, l);
    }
  };
}
function Hl(n) {
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
    $$slots: { default: [_f] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new pi({ props: r }), n[68](e), {
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
        4194304 && Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[68](null), ee(e, l);
    }
  };
}
function _f(n) {
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
    Ml
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      B(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && gt(t, e), l && l.p && (!i || s[2] & /*$$scope*/
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
          mf
        ) : Re(
          /*$$scope*/
          a[87]
        ),
        Ml
      );
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      E(l, a), i = !1;
    },
    d(a) {
      a && H(t), l && l.d(a);
    }
  };
}
function bf(n) {
  let e, t, i = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[54].label) && Hl(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), B(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots*/
      8388608 && C(i, 1)) : (i = Hl(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (Pe(), E(i, 1, 1, () => {
        i = null;
      }), He());
    },
    i(r) {
      t || (C(i), t = !0);
    },
    o(r) {
      E(i), t = !1;
    },
    d(r) {
      r && H(e), i && i.d(r);
    }
  };
}
function Bl(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new _a({ props: r }), n[70](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? he(i, [Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[70](null), ee(e, l);
    }
  };
}
function If(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vf(n) {
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
    $$slots: { default: [If] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = Y(a, r[s]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    n[24]), e = new Qd({ props: a }), se.push(() => dt(e, "selectedIndex", l)), e.$on(
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
          4194304 && Se(Ve(
            /*$$restProps*/
            s[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        33554432 && (u.$$scope = { dirty: o, ctx: s }), !t && o[0] & /*selectedIndex*/
        16777216 && (t = !0, u.selectedIndex = /*selectedIndex*/
        s[24], ct(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (C(e.$$.fragment, s), i = !0);
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
function Vl(n) {
  let e, t;
  const i = [Ve(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [Af] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new df({ props: r }), e.$on(
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
      4194304 ? he(i, [Se(Ve(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function Af(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].helperText
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[87],
    kl
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
          ff
        ) : Re(
          /*$$scope*/
          r[87]
        ),
        kl
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Cf(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, b, p, A, v, T, y, k, R, g, S, P, _, I, D, O, F, z, q, W, M, L, V, ue, Fe, Ie, Ye, K, J = (
    /*hiddenInput*/
    n[12] && Nl(n)
  ), Ae = (
    /*variant*/
    n[7] === "filled" && Ul()
  ), Ce = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[54].label) && wl(n)
  ), Ne = (
    /*variant*/
    n[7] === "outlined" && Pl(n)
  );
  const ie = (
    /*#slots*/
    n[64].leadingIcon
  ), G = Te(
    ie,
    n,
    /*$$scope*/
    n[87],
    Dl
  );
  let qe = [
    {
      id: d = /*inputId*/
      n[11] + "-smui-selected-text"
    },
    {
      class: f = re({
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
  for (let Ee = 0; Ee < qe.length; Ee += 1)
    Be = Y(Be, qe[Ee]);
  let Ct = [
    {
      class: b = re({
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
  for (let Ee = 0; Ee < Ct.length; Ee += 1)
    Z = Y(Z, Ct[Ee]);
  let ye = [
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
  for (let Ee = 0; Ee < ye.length; Ee += 1)
    je = Y(je, ye[Ee]);
  let Ue = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && Bl(n)
  ), St = [
    {
      class: P = re({
        [
          /*anchor$class*/
          n[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": _ = /*required*/
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
  for (let Ee = 0; Ee < St.length; Ee += 1)
    j = Y(j, St[Ee]);
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
  function ne(Ee) {
    n[77](Ee);
  }
  let ze = {
    $$slots: { default: [vf] },
    $$scope: { ctx: n }
  };
  for (let Ee = 0; Ee < le.length; Ee += 1)
    ze = Y(ze, le[Ee]);
  /*menuOpen*/
  n[31] !== void 0 && (ze.open = /*menuOpen*/
  n[31]), z = new zd({ props: ze }), se.push(() => dt(z, "open", ne)), z.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    n[78]
  ), z.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    n[79]
  ), z.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    n[80]
  ), z.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    n[81]
  );
  let ut = [
    {
      class: W = re({
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
      ).map(jl).concat([
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
  for (let Ee = 0; Ee < ut.length; Ee += 1)
    ot = Y(ot, ut[Ee]);
  let $e = (
    /*$$slots*/
    n[54].helperText && Vl(n)
  );
  return {
    c() {
      e = x("div"), J && J.c(), t = oe(), i = x("div"), Ae && Ae.c(), r = oe(), Ce && Ce.c(), l = oe(), Ne && Ne.c(), a = oe(), G && G.c(), s = oe(), o = x("span"), u = x("span"), c = at(
        /*$selectedTextStore*/
        n[42]
      ), A = oe(), v = x("span"), T = lt("svg"), y = lt("polygon"), k = lt("polygon"), S = oe(), Ue && Ue.c(), F = oe(), te(z.$$.fragment), ue = oe(), $e && $e.c(), Fe = Xe(), ce(u, Be), ce(o, Z), N(y, "class", "mdc-select__dropdown-icon-inactive"), N(y, "stroke", "none"), N(y, "fill-rule", "evenodd"), N(y, "points", "7 10 12 15 17 10"), N(k, "class", "mdc-select__dropdown-icon-active"), N(k, "stroke", "none"), N(k, "fill-rule", "evenodd"), N(k, "points", "7 15 12 10 17 15"), N(T, "class", "mdc-select__dropdown-icon-graphic"), N(T, "viewBox", "7 10 10 5"), N(T, "focusable", "false"), ce(v, je), ce(i, j), ce(e, ot);
    },
    m(Ee, ae) {
      B(Ee, e, ae), J && J.m(e, null), Q(e, t), Q(e, i), Ae && Ae.m(i, null), Q(i, r), Ce && Ce.m(i, null), Q(i, l), Ne && Ne.m(i, null), Q(i, a), G && G.m(i, null), Q(i, s), Q(i, o), Q(o, u), Q(u, c), Q(i, A), Q(i, v), Q(v, T), Q(T, y), Q(T, k), Q(i, S), Ue && Ue.m(i, null), n[71](i), Q(e, F), $(z, e, null), n[82](e), B(Ee, ue, ae), $e && $e.m(Ee, ae), B(Ee, Fe, ae), Ie = !0, Ye || (K = [
        de(m = Je.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        de(p = Je.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        de(g = Je.call(
          null,
          v,
          /*dropdownIcon$use*/
          n[20]
        )),
        de(O = Je.call(
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
        de(L = Ot.call(null, e, {
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
        de(qd.call(null, e, {
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          )
        })),
        de(V = Je.call(
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
    p(Ee, ae) {
      n = Ee, /*hiddenInput*/
      n[12] ? J ? J.p(n, ae) : (J = Nl(n), J.c(), J.m(e, t)) : J && (J.d(1), J = null), /*variant*/
      n[7] === "filled" ? Ae || (Ae = Ul(), Ae.c(), Ae.m(i, r)) : Ae && (Ae.d(1), Ae = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[54].label) ? Ce ? (Ce.p(n, ae), ae[0] & /*variant, noLabel, label*/
      896 | ae[1] & /*$$slots*/
      8388608 && C(Ce, 1)) : (Ce = wl(n), Ce.c(), C(Ce, 1), Ce.m(i, l)) : Ce && (Pe(), E(Ce, 1, 1, () => {
        Ce = null;
      }), He()), /*variant*/
      n[7] === "outlined" ? Ne ? (Ne.p(n, ae), ae[0] & /*variant*/
      128 && C(Ne, 1)) : (Ne = Pl(n), Ne.c(), C(Ne, 1), Ne.m(i, a)) : Ne && (Pe(), E(Ne, 1, 1, () => {
        Ne = null;
      }), He()), G && G.p && (!Ie || ae[2] & /*$$scope*/
      33554432) && Oe(
        G,
        ie,
        n,
        /*$$scope*/
        n[87],
        Ie ? Le(
          ie,
          /*$$scope*/
          n[87],
          ae,
          hf
        ) : Re(
          /*$$scope*/
          n[87]
        ),
        Dl
      ), (!Ie || ae[1] & /*$selectedTextStore*/
      2048) && za(
        c,
        /*$selectedTextStore*/
        n[42],
        Be.contenteditable
      ), ce(u, Be = he(qe, [
        (!Ie || ae[0] & /*inputId*/
        2048 && d !== (d = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: d },
        (!Ie || ae[0] & /*selectedText$class*/
        524288 && f !== (f = re({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: f },
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
      ), ce(o, Z = he(Ct, [
        (!Ie || ae[0] & /*selectedTextContainer$class*/
        131072 && b !== (b = re({
          [
            /*selectedTextContainer$class*/
            n[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: b },
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
      ), ce(v, je = he(ye, [
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
      n[5] ? Ue ? (Ue.p(n, ae), ae[0] & /*variant, ripple*/
      160 && C(Ue, 1)) : (Ue = Bl(n), Ue.c(), C(Ue, 1), Ue.m(i, null)) : Ue && (Pe(), E(Ue, 1, 1, () => {
        Ue = null;
      }), He()), ce(i, j = he(St, [
        (!Ie || ae[0] & /*anchor$class*/
        32768 && P !== (P = re({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: P },
        (!Ie || ae[0] & /*required*/
        1024 && _ !== (_ = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": _
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
      const Bt = ae[0] & /*menu$class*/
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
        4194304 && Se(Ve(
          /*$$restProps*/
          n[53],
          "menu$"
        ))
      ]) : {};
      ae[0] & /*selectedIndex*/
      16777216 | ae[1] & /*wrapFocus, $$restProps, list*/
      4194352 | ae[2] & /*$$scope*/
      33554432 && (Bt.$$scope = { dirty: ae, ctx: n }), !q && ae[1] & /*menuOpen*/
      1 && (q = !0, Bt.open = /*menuOpen*/
      n[31], ct(() => q = !1)), z.$set(Bt), ce(e, ot = he(ut, [
        (!Ie || ae[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | ae[1] & /*$$slots, menuOpen*/
        8388609 && W !== (W = re({
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
        }))) && { class: W },
        (!Ie || ae[0] & /*internalStyles, style*/
        134217744 && M !== (M = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(jl).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: M },
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
      n[54].helperText ? $e ? ($e.p(n, ae), ae[1] & /*$$slots*/
      8388608 && C($e, 1)) : ($e = Vl(n), $e.c(), C($e, 1), $e.m(Fe.parentNode, Fe)) : $e && (Pe(), E($e, 1, 1, () => {
        $e = null;
      }), He());
    },
    i(Ee) {
      Ie || (C(Ce), C(Ne), C(G, Ee), C(Ue), C(z.$$.fragment, Ee), C($e), Ie = !0);
    },
    o(Ee) {
      E(Ce), E(Ne), E(G, Ee), E(Ue), E(z.$$.fragment, Ee), E($e), Ie = !1;
    },
    d(Ee) {
      Ee && (H(e), H(ue), H(Fe)), J && J.d(), Ae && Ae.d(), Ce && Ce.d(), Ne && Ne.d(), G && G.d(Ee), Ue && Ue.d(), n[71](null), ee(z), n[82](null), $e && $e.d(Ee), Ye = !1, Ze(K);
    }
  };
}
let yf = 0;
function Ef(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (Sf(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function Sf(n) {
  return "touches" in n;
}
const jl = ([n, e]) => `${n}: ${e};`;
function Tf(n, e, t) {
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
  const u = or(s);
  var c;
  const d = nt(xe());
  let f = () => {
  };
  function h(w) {
    return w === f;
  }
  let { use: m = [] } = e, { class: b = "" } = e, { style: p = "" } = e, { ripple: A = !0 } = e, { disabled: v = !1 } = e, { variant: T = "standard" } = e, { noLabel: y = !1 } = e, { label: k = void 0 } = e, { value: R = "" } = e, { key: g = (w) => w } = e, { dirty: S = !1 } = e, { invalid: P = f } = e, { updateInvalid: _ = h(P) } = e;
  const I = h(P);
  h(P) && (P = !1);
  let { required: D = !1 } = e, { inputId: O = "SMUI-select-" + yf++ } = e, { hiddenInput: F = !1 } = e, { withLeadingIcon: z = f } = e, { anchor$use: q = [] } = e, { anchor$class: W = "" } = e, { selectedTextContainer$use: M = [] } = e, { selectedTextContainer$class: L = "" } = e, { selectedText$use: V = [] } = e, { selectedText$class: ue = "" } = e, { dropdownIcon$use: Fe = [] } = e, { dropdownIcon$class: Ie = "" } = e, { menu$class: Ye = "" } = e, K, J, Ae = {}, Ce = {}, Ne, ie = {}, G = -1, qe = (c = r.menu$id) !== null && c !== void 0 ? c : O + "-menu", Be, Ct = Ke("SMUI:addLayoutListener"), Z, ye = !1, je = {}, Ue, St, j = !1, le, ne = Ke("SMUI:select:context"), ze, ut, ot, $e, Ee;
  Ge("SMUI:list:role", ""), Ge("SMUI:list:nav", !1);
  const ae = Lt("");
  rt(n, ae, (w) => t(42, l = w)), Ge("SMUI:select:selectedText", ae);
  const Bt = Lt(R);
  rt(n, Bt, (w) => t(90, a = w)), Ge("SMUI:select:value", Bt);
  let X = G;
  Ct && (Z = Ct($n)), st(() => (t(23, J = new wd(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (w) => {
        Ht(ae, l = w, l);
      },
      isSelectAnchorFocused: () => document.activeElement === Ne,
      getSelectAnchorAttr: Ii,
      setSelectAnchorAttr: vi,
      removeSelectAnchorAttr: Ai,
      addMenuClass: _i,
      removeMenuClass: bi,
      openMenu: () => {
        t(31, ye = !0);
      },
      closeMenu: () => {
        t(31, ye = !1);
      },
      getAnchorElement: () => Ne,
      setMenuAnchorElement: (w) => {
        t(33, Ue = w);
      },
      setMenuAnchorCorner: (w) => {
        t(34, St = w);
      },
      setMenuWrapFocus: (w) => {
        t(35, j = w);
      },
      getSelectedIndex: () => G,
      setSelectedIndex: (w) => {
        t(63, X = w), t(24, G = w), t(0, R = yn()[G]);
      },
      focusMenuItemAtIndex: (w) => {
        le.focusItemAtIndex(w);
      },
      getMenuItemCount: () => le.items.length,
      getMenuItemValues: () => yn().map(g),
      getMenuItemTextAtIndex: (w) => le.getPrimaryTextAtIndex(w),
      isTypeaheadInProgress: () => le.typeaheadInProgress,
      typeaheadMatchItem: (w, Ut) => le.typeaheadMatchItem(w, Ut),
      // getCommonAdapterMethods
      addClass: it,
      removeClass: Jt,
      hasClass: ve,
      setRippleCenter: (w) => $e && $e.setRippleCenter(w),
      activateBottomLine: () => $e && $e.activate(),
      deactivateBottomLine: () => $e && $e.deactivate(),
      notifyChange: (w) => {
        t(55, S = !0), _ && t(1, P = !J.isValid()), _e(En(), "SMUISelect:change", { value: R, index: G }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!Ee,
      notchOutline: (w) => Ee && Ee.notch(w),
      closeOutline: () => Ee && Ee.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!ot,
      floatLabel: (w) => ot && ot.float(w),
      getLabelWidth: () => ot ? ot.getWidth() : 0,
      setLabelRequired: (w) => ot && ot.setRequired(w)
    },
    {
      get helperText() {
        return ut;
      },
      get leadingIcon() {
        return ze;
      }
    }
  )), t(24, G = yn().indexOf(R)), J.init(), xn(I), () => {
    J.destroy();
  })), Qt(() => {
    Z && Z();
  });
  function ge(w) {
    t(37, ze = w.detail);
  }
  function ve(w) {
    return w in Ae ? Ae[w] : En().classList.contains(w);
  }
  function it(w) {
    Ae[w] || t(26, Ae[w] = !0, Ae);
  }
  function Jt(w) {
    (!(w in Ae) || Ae[w]) && t(26, Ae[w] = !1, Ae);
  }
  function jn(w, Ut) {
    Ce[w] != Ut && (Ut === "" || Ut == null ? (delete Ce[w], t(27, Ce)) : t(27, Ce[w] = Ut, Ce));
  }
  function _i(w) {
    je[w] || t(32, je[w] = !0, je);
  }
  function bi(w) {
    (!(w in je) || je[w]) && t(32, je[w] = !1, je);
  }
  function Ii(w) {
    var Ut;
    return w in ie ? (Ut = ie[w]) !== null && Ut !== void 0 ? Ut : null : En().getAttribute(w);
  }
  function vi(w, Ut) {
    ie[w] !== Ut && t(29, ie[w] = Ut, ie);
  }
  function Ai(w) {
    (!(w in ie) || ie[w] != null) && t(29, ie[w] = void 0, ie);
  }
  function yn() {
    return le.getOrderedList().map((w) => w.getValue());
  }
  function Ci() {
    return J.getUseDefaultValidation();
  }
  function xn(w) {
    J.setUseDefaultValidation(w);
  }
  function yi() {
    Ne.focus();
  }
  function $n() {
    J.layout();
  }
  function En() {
    return K;
  }
  function Ei(w) {
    wn.call(this, n, w);
  }
  function Si(w) {
    wn.call(this, n, w);
  }
  function Ti(w) {
    se[w ? "unshift" : "push"](() => {
      ot = w, t(39, ot);
    });
  }
  function Li(w) {
    se[w ? "unshift" : "push"](() => {
      ot = w, t(39, ot);
    });
  }
  function Oi(w) {
    se[w ? "unshift" : "push"](() => {
      Ee = w, t(41, Ee);
    });
  }
  function Ri(w) {
    se[w ? "unshift" : "push"](() => {
      $e = w, t(40, $e);
    });
  }
  function ki(w) {
    se[w ? "unshift" : "push"](() => {
      Ne = w, t(28, Ne);
    });
  }
  const Di = () => J && J.handleFocus(), Mi = () => J && J.handleBlur(), Fi = (w) => {
    Ne.focus(), J && J.handleClick(Ef(w));
  };
  function Ni(w) {
    G = w, t(24, G);
  }
  const Ui = (w) => t(36, le = w.detail);
  function wi(w) {
    ye = w, t(31, ye);
  }
  const Pi = (w) => J && J.handleMenuItemAction(w.detail.index), Hi = () => J && J.handleMenuClosing(), U = () => J && J.handleMenuClosed(), mt = () => J && J.handleMenuOpened();
  function ei(w) {
    se[w ? "unshift" : "push"](() => {
      K = w, t(25, K);
    });
  }
  const Bi = () => t(37, ze = void 0), qn = (w) => t(30, Be = w.detail), Gn = (w) => t(38, ut = w.detail), Fa = () => {
    t(30, Be = void 0), t(38, ut = void 0);
  };
  return n.$$set = (w) => {
    e = Y(Y({}, e), tt(w)), t(53, r = me(e, i)), "use" in w && t(2, m = w.use), "class" in w && t(3, b = w.class), "style" in w && t(4, p = w.style), "ripple" in w && t(5, A = w.ripple), "disabled" in w && t(6, v = w.disabled), "variant" in w && t(7, T = w.variant), "noLabel" in w && t(8, y = w.noLabel), "label" in w && t(9, k = w.label), "value" in w && t(0, R = w.value), "key" in w && t(56, g = w.key), "dirty" in w && t(55, S = w.dirty), "invalid" in w && t(1, P = w.invalid), "updateInvalid" in w && t(57, _ = w.updateInvalid), "required" in w && t(10, D = w.required), "inputId" in w && t(11, O = w.inputId), "hiddenInput" in w && t(12, F = w.hiddenInput), "withLeadingIcon" in w && t(13, z = w.withLeadingIcon), "anchor$use" in w && t(14, q = w.anchor$use), "anchor$class" in w && t(15, W = w.anchor$class), "selectedTextContainer$use" in w && t(16, M = w.selectedTextContainer$use), "selectedTextContainer$class" in w && t(17, L = w.selectedTextContainer$class), "selectedText$use" in w && t(18, V = w.selectedText$use), "selectedText$class" in w && t(19, ue = w.selectedText$class), "dropdownIcon$use" in w && t(20, Fe = w.dropdownIcon$use), "dropdownIcon$class" in w && t(21, Ie = w.dropdownIcon$class), "menu$class" in w && t(22, Ye = w.menu$class), "$$scope" in w && t(87, o = w.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    2 && X !== G)
      if (t(63, X = G), J)
        J.setSelectedIndex(
          G,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const w = yn();
        R !== w[G] && t(0, R = w[G]);
      }
    n.$$.dirty[0] & /*value*/
    1 && Ht(Bt, a = R, a), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    33554432 && J && J.getValue() !== g(R) && J.setValue(g(R)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && J && J.getDisabled() !== v && J.setDisabled(v), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && J && S && J.isValid() !== !P && (_ ? t(1, P = !J.isValid()) : J.setValid(!P)), n.$$.dirty[0] & /*instance, required*/
    8389632 && J && J.getRequired() !== D && J.setRequired(D);
  }, [
    R,
    P,
    m,
    b,
    p,
    A,
    v,
    T,
    y,
    k,
    D,
    O,
    F,
    z,
    q,
    W,
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
    Ae,
    Ce,
    Ne,
    ie,
    Be,
    ye,
    je,
    Ue,
    St,
    j,
    le,
    ze,
    ut,
    ot,
    $e,
    Ee,
    l,
    d,
    h,
    qe,
    ne,
    ae,
    Bt,
    ge,
    it,
    Jt,
    jn,
    r,
    u,
    S,
    g,
    _,
    Ci,
    xn,
    yi,
    $n,
    En,
    X,
    s,
    Ei,
    Si,
    Ti,
    Li,
    Oi,
    Ri,
    ki,
    Di,
    Mi,
    Fi,
    Ni,
    Ui,
    wi,
    Pi,
    Hi,
    U,
    mt,
    ei,
    Bi,
    qn,
    Gn,
    Fa,
    o
  ];
}
class Lf extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      Tf,
      Cf,
      be,
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
function Of(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Rf(n) {
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
    $$slots: { default: [Of] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new tf({ props: r }), n[12](e), {
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
        64 && Se(
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
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[12](null), ee(e, l);
    }
  };
}
function kf(n, e, t) {
  let i, r;
  const l = ["use", "class", "value", "getElement"];
  let a = me(e, l), s, o, { $$slots: u = {}, $$scope: c } = e;
  const d = nt(xe());
  let { use: f = [] } = e;
  const h = "";
  let { value: m = "" } = e, b;
  const p = Ke("SMUI:select:selectedText");
  rt(n, p, (k) => t(14, s = k));
  const A = Ke("SMUI:select:value");
  rt(n, A, (k) => t(10, o = k)), Ge("SMUI:list:item:role", "option"), st(v), Qt(v);
  function v() {
    r && b && Ht(p, s = b.getPrimaryText(), s);
  }
  function T() {
    return b.getElement();
  }
  function y(k) {
    se[k ? "unshift" : "push"](() => {
      b = k, t(1, b);
    });
  }
  return n.$$set = (k) => {
    e = Y(Y({}, e), tt(k)), t(6, a = me(e, l)), "use" in k && t(7, f = k.use), "value" in k && t(0, m = k.value), "$$scope" in k && t(13, c = k.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    128 && t(3, i = [d, ...f]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, r = m != null && m !== "" && o === m);
  }, [
    m,
    b,
    r,
    i,
    p,
    A,
    a,
    f,
    h,
    T,
    o,
    u,
    y,
    c
  ];
}
class Df extends De {
  constructor(e) {
    super(), ke(this, e, kf, Rf, be, {
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
function ql(n, e, t) {
  const i = n.slice();
  return i[11] = e[t], i[13] = t, i;
}
function Mf(n) {
  let e = (
    /*d*/
    n[11].label + ""
  ), t;
  return {
    c() {
      t = at(e);
    },
    m(i, r) {
      B(i, t, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && gt(t, e);
    },
    d(i) {
      i && H(t);
    }
  };
}
function Gl(n) {
  let e, t;
  return e = new Df({
    props: {
      value: (
        /*d*/
        n[11].value
      ),
      $$slots: { default: [Mf] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ff(n) {
  let e, t, i = jt(
    /*data*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Gl(ql(n, i, a));
  const l = (a) => E(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Xe();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      B(a, e, s), t = !0;
    },
    p(a, s) {
      if (s & /*data, setSelectedIndex*/
      34) {
        i = jt(
          /*data*/
          a[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = ql(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = Gl(u), r[o].c(), C(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Pe(), o = i.length; o < r.length; o += 1)
          l(o);
        He();
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
        E(r[s]);
      t = !1;
    },
    d(a) {
      a && H(e), ur(r, a);
    }
  };
}
function Nf(n) {
  let e, t, i;
  function r(a) {
    n[10](a);
  }
  let l = {
    disabled: (
      /*disabled*/
      n[4]
    ),
    key: Uf,
    label: (
      /*label*/
      n[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      n[3]
    ),
    $$slots: { default: [Ff] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Lf({ props: l }), se.push(() => dt(e, "value", r)), {
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
        a[0], ct(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
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
const Uf = (n) => `${n ?? ""}`;
function wf(n, e, t) {
  let { data: i = [] } = e, { placeholder: r = "" } = e, { label: l = "" } = e, { description: a = "" } = e, { value: s = "" } = e, { required: o = !1 } = e, { size: u = "sm" } = e, { selectedOptionIndex: c = -1 } = e, { disabled: d = !1 } = e;
  function f(m) {
    return () => t(6, c = m);
  }
  function h(m) {
    s = m, t(0, s);
  }
  return n.$$set = (m) => {
    "data" in m && t(1, i = m.data), "placeholder" in m && t(7, r = m.placeholder), "label" in m && t(2, l = m.label), "description" in m && t(8, a = m.description), "value" in m && t(0, s = m.value), "required" in m && t(3, o = m.required), "size" in m && t(9, u = m.size), "selectedOptionIndex" in m && t(6, c = m.selectedOptionIndex), "disabled" in m && t(4, d = m.disabled);
  }, [
    s,
    i,
    l,
    o,
    d,
    f,
    c,
    r,
    a,
    u,
    h
  ];
}
class Cr extends De {
  constructor(e) {
    super(), ke(this, e, wf, Nf, be, {
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
At({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
At({
  class: "mdc-dialog__title",
  tag: "h2"
});
At({
  class: "mdc-dialog__content",
  tag: "div"
});
At({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
function Pf(n) {
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
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = x("div"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      B(d, e, f), o && o.m(e, null), n[13](e), r = !0, l || (a = [
        de(i = Je.call(
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
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      2048) && Oe(
        o,
        s,
        d,
        /*$$scope*/
        d[11],
        r ? Le(
          s,
          /*$$scope*/
          d[11],
          f,
          null
        ) : Re(
          /*$$scope*/
          d[11]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className, variant, elevation, square, color, transition*/
        126 && t !== (t = re({
          [
            /*className*/
            d[1]
          ]: !0,
          "smui-paper": !0,
          "smui-paper--raised": (
            /*variant*/
            d[2] === "raised"
          ),
          "smui-paper--unelevated": (
            /*variant*/
            d[2] === "unelevated"
          ),
          "smui-paper--outlined": (
            /*variant*/
            d[2] === "outlined"
          ),
          ["smui-paper--elevation-z" + /*elevation*/
          d[5]]: (
            /*elevation*/
            d[5] !== 0 && /*variant*/
            d[2] === "raised"
          ),
          "smui-paper--rounded": !/*square*/
          d[3],
          ["smui-paper--color-" + /*color*/
          d[4]]: (
            /*color*/
            d[4] !== "default"
          ),
          "smui-paper-transition": (
            /*transition*/
            d[6]
          )
        }))) && { class: t },
        f & /*$$restProps*/
        512 && /*$$restProps*/
        d[9]
      ])), i && pe(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (C(o, d), r = !0);
    },
    o(d) {
      E(o, d), r = !1;
    },
    d(d) {
      d && H(e), o && o.d(d), n[13](null), l = !1, Ze(a);
    }
  };
}
function Hf(n, e, t) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: d = !1 } = e, { color: f = "default" } = e, { elevation: h = 1 } = e, { transition: m = !1 } = e, b;
  function p() {
    return b;
  }
  function A(v) {
    se[v ? "unshift" : "push"](() => {
      b = v, t(7, b);
    });
  }
  return n.$$set = (v) => {
    e = Y(Y({}, e), tt(v)), t(9, r = me(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "variant" in v && t(2, c = v.variant), "square" in v && t(3, d = v.square), "color" in v && t(4, f = v.color), "elevation" in v && t(5, h = v.elevation), "transition" in v && t(6, m = v.transition), "$$scope" in v && t(11, a = v.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    m,
    b,
    s,
    r,
    p,
    a,
    l,
    A
  ];
}
class ya extends De {
  constructor(e) {
    super(), ke(this, e, Hf, Pf, be, {
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
At({
  class: "smui-paper__content",
  tag: "div"
});
At({
  class: "smui-paper__title",
  tag: "h5"
});
At({
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
var ar;
(function(n) {
  n.POLITE = "polite", n.ASSERTIVE = "assertive";
})(ar || (ar = {}));
var Bf = "data-mdc-dom-announce";
function Vf(n, e) {
  jf.getInstance().say(n, e);
}
var jf = (
  /** @class */
  function() {
    function n() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return n.getInstance = function() {
      return n.instance || (n.instance = new n()), n.instance;
    }, n.prototype.say = function(e, t) {
      var i, r, l = (i = t == null ? void 0 : t.priority) !== null && i !== void 0 ? i : ar.POLITE, a = (r = t == null ? void 0 : t.ownerDocument) !== null && r !== void 0 ? r : document, s = this.getLiveRegion(l, a);
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
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Bf, "true"), t.body.appendChild(i), i;
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
var dn;
(function(n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.CLICK = 1] = "CLICK", n[n.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", n[n.DELETE_KEY = 3] = "DELETE_KEY", n[n.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", n[n.ENTER_KEY = 5] = "ENTER_KEY";
})(dn || (dn = {}));
var Wt = {
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
var Ea = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Wt;
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
      t.stopPropagation(), this.adapter.notifyInteraction(dn.CLICK);
    }, e.prototype.handleKeydown = function(t) {
      t.stopPropagation();
      var i = pt(t);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (Su(t)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Wt.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Wt.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Wt.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(t) {
      var i = t === we.ENTER || t === we.SPACEBAR, r = t === we.BACKSPACE || t === we.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(t) {
      return t === we.SPACEBAR ? dn.SPACEBAR_KEY : t === we.ENTER ? dn.ENTER_KEY : t === we.DELETE ? dn.DELETE_KEY : t === we.BACKSPACE ? dn.BACKSPACE_KEY : dn.UNSPECIFIED;
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
var Sa = (
  /** @class */
  function(n) {
    ft(e, n);
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
        return new di(r, l);
      });
      var i = di.createAdapter(this);
      this.rippleSurface = t(this.root, new mi(i));
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
            Wt.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          t.emit(
            Wt.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, l) {
          t.root.setAttribute(r, l);
        }
      };
      return new Ea(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(fi)
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
var sn;
(function(n) {
  n.PRIMARY = "primary", n.TRAILING = "trailing", n.NONE = "none";
})(sn || (sn = {}));
var Me = {
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
}, qt = /* @__PURE__ */ new Set();
qt.add(Me.ARROW_LEFT_KEY);
qt.add(Me.ARROW_RIGHT_KEY);
qt.add(Me.ARROW_DOWN_KEY);
qt.add(Me.ARROW_UP_KEY);
qt.add(Me.END_KEY);
qt.add(Me.HOME_KEY);
qt.add(Me.IE_ARROW_LEFT_KEY);
qt.add(Me.IE_ARROW_RIGHT_KEY);
qt.add(Me.IE_ARROW_DOWN_KEY);
qt.add(Me.IE_ARROW_UP_KEY);
var hn = /* @__PURE__ */ new Set();
hn.add(Me.ARROW_UP_KEY);
hn.add(Me.ARROW_DOWN_KEY);
hn.add(Me.HOME_KEY);
hn.add(Me.END_KEY);
hn.add(Me.IE_ARROW_UP_KEY);
hn.add(Me.IE_ARROW_DOWN_KEY);
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
var Kl = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Mn;
(function(n) {
  n[n.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", n[n.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Mn || (Mn = {}));
var yr = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Me;
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
            return Kl;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return Kl;
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
        var o = this.adapter.getAttribute(Me.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
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
      qt.has(t.key) && (t.preventDefault(), this.focusNextAction(t.key, sn.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(t) {
      this.focusNextAction(t.detail.key, sn.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Me.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Mn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var t = this.adapter.isTrailingActionNavigable();
      if (t) {
        this.adapter.setPrimaryActionAttr(Me.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(t) {
      this.adapter.setPrimaryActionAttr(Me.TAB_INDEX, "0"), t === Mn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Mn.SHOULD_FOCUS : Mn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(t, i) {
      var r = this.adapter.isTrailingActionNavigable(), l = this.getDirection(t);
      if (hn.has(t) || !r) {
        this.adapter.notifyNavigation(t, i);
        return;
      }
      if (i === sn.PRIMARY && l === Yt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === sn.TRAILING && l === Yt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(t, sn.NONE);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Me.ARROW_LEFT_KEY || t === Me.IE_ARROW_LEFT_KEY, l = t === Me.ARROW_RIGHT_KEY || t === Me.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Yt.LEFT : Yt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(t) {
      return this.eventFromPrimaryAction(t) && t.key === Me.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(t) {
      return t.key === Me.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(t) {
      return t.key === Me.ENTER_KEY || t.key === Me.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(t) {
      var i = this.adapter.hasClass(bt.DELETABLE);
      return i && (t.key === Me.BACKSPACE_KEY || t.key === Me.DELETE_KEY || t.key === Me.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(t) {
      t ? (this.adapter.addClass(bt.SELECTED), this.adapter.setPrimaryActionAttr(Me.ARIA_CHECKED, "true")) : (this.adapter.removeClass(bt.SELECTED), this.adapter.setPrimaryActionAttr(Me.ARIA_CHECKED, "false"));
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
var Ta = (
  /** @class */
  function(n) {
    ft(e, n);
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
        return new di(s, o);
      }), i === void 0 && (i = function(s) {
        return new Sa(s);
      }), this.leadingIcon = this.root.querySelector(Me.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Me.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Me.PRIMARY_ACTION_SELECTOR);
      var l = this.root.querySelector(Me.TRAILING_ACTION_SELECTOR);
      l && (this.trailingAction = i(l));
      var a = We(We({}, di.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = t(this.root, new mi(a));
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
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Wt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Wt.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Wt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Wt.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), n.prototype.destroy.call(this);
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
            Me.INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, l) {
          return t.emit(
            Me.NAVIGATION_EVENT,
            { chipId: t.id, key: r, source: l },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          t.emit(
            Me.REMOVAL_EVENT,
            { chipId: t.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, l) {
          return t.emit(
            Me.SELECTION_EVENT,
            { chipId: t.id, selected: r, shouldIgnore: l },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return t.emit(
            Me.TRAILING_ICON_INTERACTION_EVENT,
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
      return new yr(i);
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
  }(fi)
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
var La = {
  CHIP_SELECTOR: ".mdc-chip"
}, Yn = {
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
var Er = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return La;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yn;
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
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(Yn.CHOICE) || this.adapter.hasClass(Yn.FILTER)) && this.toggleSelect(i);
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
      if (!(s === -1 || !qt.has(r))) {
        var o = this.adapter.isRTL(), u = r === Me.ARROW_LEFT_KEY || r === Me.IE_ARROW_LEFT_KEY, c = r === Me.ARROW_RIGHT_KEY || r === Me.IE_ARROW_RIGHT_KEY, d = r === Me.ARROW_DOWN_KEY || r === Me.IE_ARROW_DOWN_KEY, f = !o && c || o && u || d, h = r === Me.HOME_KEY, m = r === Me.END_KEY;
        f ? s++ : h ? s = 0 : m ? s = a : s--, !(s < 0 || s > a) && (this.removeFocusFromChipsExcept(s), this.focusChipAction(s, r, l));
      }
    }, e.prototype.focusChipAction = function(t, i, r) {
      var l = hn.has(i);
      if (l && r === sn.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
      if (l && r === sn.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      var a = this.getDirection(i);
      if (a === Yt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      if (a === Yt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Me.ARROW_LEFT_KEY || t === Me.IE_ARROW_LEFT_KEY, l = t === Me.ARROW_RIGHT_KEY || t === Me.IE_ARROW_RIGHT_KEY;
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
        if (this.adapter.hasClass(Yn.CHOICE) && this.selectedChipIds.length > 0) {
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
var gi = yr.strings, Wl = gi.INTERACTION_EVENT, zl = gi.SELECTION_EVENT, Yl = gi.REMOVAL_EVENT, Xl = gi.NAVIGATION_EVENT, qf = Er.strings.CHIP_SELECTOR, Zl = 0, Gf = (
  /** @class */
  function(n) {
    ft(e, n);
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
        return new Ta(i);
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
      }, this.listen(Wl, this.handleChipInteraction), this.listen(zl, this.handleChipSelection), this.listen(Yl, this.handleChipRemoval), this.listen(Xl, this.handleChipNavigation);
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
      this.unlisten(Wl, this.handleChipInteraction), this.unlisten(zl, this.handleChipSelection), this.unlisten(Yl, this.handleChipRemoval), this.unlisten(Xl, this.handleChipNavigation), n.prototype.destroy.call(this);
    }, e.prototype.addChip = function(t) {
      t.id = t.id || "mdc-chip-" + ++Zl, this.chipsList.push(this.chipFactory(t));
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        announceMessage: function(r) {
          Vf(r);
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
      return new Er(i);
    }, e.prototype.instantiateChips = function(t) {
      var i = [].slice.call(this.root.querySelectorAll(qf));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++Zl, t(r);
      });
    }, e.prototype.findChipIndex = function(t) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === t)
          return i;
      return -1;
    }, e;
  }(fi)
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
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: Ta,
  MDCChipFoundation: yr,
  MDCChipSet: Gf,
  MDCChipSetFoundation: Er,
  MDCChipTrailingAction: Sa,
  MDCChipTrailingActionFoundation: Ea,
  chipCssClasses: bt,
  chipSetCssClasses: Yn,
  chipSetStrings: La,
  chipStrings: Me,
  trailingActionStrings: Wt
}, Symbol.toStringTag, { value: "Module" }));
function Ql(n) {
  let e;
  return {
    c() {
      e = x("div"), N(e, "class", "mdc-chip__ripple");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Jl(n) {
  let e;
  return {
    c() {
      e = x("div"), N(e, "class", "mdc-chip__touch");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Kf(n) {
  let e, t, i, r, l = (
    /*ripple*/
    n[3] && !/*$nonInteractive*/
    n[14] && Ql()
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
    n[4] && Jl()
  );
  return {
    c() {
      l && l.c(), e = oe(), s && s.c(), t = oe(), o && o.c(), i = Xe();
    },
    m(u, c) {
      l && l.m(u, c), B(u, e, c), s && s.m(u, c), B(u, t, c), o && o.m(u, c), B(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? l || (l = Ql(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), s && s.p && (!r || c[1] & /*$$scope*/
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
      u[4] ? o || (o = Jl(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (C(s, u), r = !0);
    },
    o(u) {
      E(s, u), r = !1;
    },
    d(u) {
      u && (H(e), H(t), H(i)), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function Wf(n) {
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
      ).map(xi).concat([
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
      $$slots: { default: [Kf] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = Y(u, he(r, [
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
        ).map(xi).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && Se(
        /*$$restProps*/
        s[28]
      )
    ]))), { props: u };
  }
  return l && (e = Rt(l, a(n)), n[35](e), e.$on("transitionend", function() {
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), B(s, t, o), i = !0;
    },
    p(s, o) {
      if (n = s, o[0] & /*component*/
      32 && l !== (l = /*component*/
      n[5])) {
        if (e) {
          Pe();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
        }
        l ? (e = Rt(l, a(n, o)), n[35](e), e.$on("transitionend", function() {
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
        ), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
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
            ).map(xi).concat([
              /*style*/
              n[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && Se(
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
      e && E(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && H(t), n[35](null), e && ee(e, s);
    }
  };
}
const xi = ([n, e]) => `${n}: ${e};`;
function zf(n, e, t) {
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
  let r = me(e, i), l, a, s, o, u, c, d, { $$slots: f = {}, $$scope: h } = e;
  const { MDCChipFoundation: m } = Sr, b = nt(xe());
  let { use: p = [] } = e, { class: A = "" } = e, { style: v = "" } = e, { chip: T } = e, { ripple: y = !0 } = e, { touch: k = !1 } = e, { shouldRemoveOnTrailingIconClick: R = !0 } = e, { shouldFocusPrimaryActionOnClick: g = !0 } = e, S, P, _ = {}, I = {}, D = {};
  const O = Ke("SMUI:chips:chip:initialSelected");
  rt(n, O, (ne) => t(44, c = ne));
  let F = c, z, q;
  const W = Ke("SMUI:chips:nonInteractive");
  rt(n, W, (ne) => t(14, d = ne));
  const M = Ke("SMUI:chips:choice");
  rt(n, M, (ne) => t(40, a = ne));
  const L = Ke("SMUI:chips:chip:index");
  rt(n, L, (ne) => t(39, l = ne));
  let { component: V = Ft } = e, { tag: ue = V === Ft ? "div" : void 0 } = e;
  const Fe = Lt(R);
  rt(n, Fe, (ne) => t(43, u = ne)), Ge("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Fe);
  const Ie = Lt(F);
  rt(n, Ie, (ne) => t(42, o = ne)), Ge("SMUI:chips:chip:isSelected", Ie);
  const Ye = Lt(I);
  if (rt(n, Ye, (ne) => t(41, s = ne)), Ge("SMUI:chips:chip:leadingIconClasses", Ye), Ge("SMUI:chips:chip:focusable", a && F || l === 0), !T)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  st(() => {
    t(7, P = new m({
      addClass: Ce,
      addClassToLeadingIcon: ie,
      eventTargetHasClass: (ze, ut) => ze && "classList" in ze ? ze.classList.contains(ut) : !1,
      focusPrimaryAction: () => {
        z && z.focus();
      },
      focusTrailingAction: () => {
        q && q.focus();
      },
      getAttribute: (ze) => Ue().getAttribute(ze),
      getCheckmarkBoundingClientRect: () => {
        const ze = Ue().querySelector(".mdc-chip__checkmark");
        return ze ? ze.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Be,
      getRootBoundingClientRect: () => Ue().getBoundingClientRect(),
      hasClass: Ae,
      hasLeadingIcon: () => !!Ue().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Ue()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => q ? q.isNavigable() : !1,
      notifyInteraction: () => _e(Ue(), "SMUIChip:interaction", { chipId: T }, void 0, !0),
      notifyNavigation: (ze, ut) => _e(Ue(), "SMUIChip:navigation", { chipId: T, key: ze, source: ut }, void 0, !0),
      notifyRemoval: (ze) => {
        _e(Ue(), "SMUIChip:removal", { chipId: T, removedAnnouncement: ze }, void 0, !0);
      },
      notifySelection: (ze, ut) => _e(Ue(), "SMUIChip:selection", { chipId: T, selected: ze, shouldIgnore: ut }, void 0, !0),
      notifyTrailingIconInteraction: () => _e(Ue(), "SMUIChip:trailingIconInteraction", { chipId: T }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: Ne,
      removeClassFromLeadingIcon: G,
      removeTrailingActionFocus: () => {
        q && q.removeFocus();
      },
      setPrimaryActionAttr: (ze, ut) => {
        z && z.addAttr(ze, ut);
      },
      setStyleProperty: qe
    }));
    const ne = {
      chipId: T,
      get selected() {
        return F;
      },
      focusPrimaryAction: Z,
      focusTrailingAction: ye,
      removeFocus: je,
      setSelectedFromChipSet: Ct
    };
    return _e(Ue(), "SMUIChipsChip:mount", ne), P.init(), () => {
      _e(Ue(), "SMUIChipsChip:unmount", ne), P.destroy();
    };
  });
  function K(ne) {
    t(12, z = ne.detail);
  }
  function J(ne) {
    t(13, q = ne.detail);
  }
  function Ae(ne) {
    return ne in _ ? _[ne] : Ue().classList.contains(ne);
  }
  function Ce(ne) {
    _[ne] || t(10, _[ne] = !0, _);
  }
  function Ne(ne) {
    (!(ne in _) || _[ne]) && t(10, _[ne] = !1, _);
  }
  function ie(ne) {
    I[ne] || t(33, I[ne] = !0, I);
  }
  function G(ne) {
    (!(ne in I) || I[ne]) && t(33, I[ne] = !1, I);
  }
  function qe(ne, ze) {
    D[ne] != ze && (ze === "" || ze == null ? (delete D[ne], t(11, D)) : t(11, D[ne] = ze, D));
  }
  function Be(ne) {
    return ne in D ? D[ne] : getComputedStyle(Ue()).getPropertyValue(ne);
  }
  function Ct(ne, ze) {
    t(8, F = ne), P.setSelectedFromChipSet(F, ze);
  }
  function Z() {
    P.focusPrimaryAction();
  }
  function ye() {
    P.focusTrailingAction();
  }
  function je() {
    P.removeFocus();
  }
  function Ue() {
    return S.getElement();
  }
  function St(ne) {
    se[ne ? "unshift" : "push"](() => {
      S = ne, t(9, S);
    });
  }
  const j = () => t(12, z = void 0), le = () => t(13, q = void 0);
  return n.$$set = (ne) => {
    e = Y(Y({}, e), tt(ne)), t(28, r = me(e, i)), "use" in ne && t(0, p = ne.use), "class" in ne && t(1, A = ne.class), "style" in ne && t(2, v = ne.style), "chip" in ne && t(29, T = ne.chip), "ripple" in ne && t(3, y = ne.ripple), "touch" in ne && t(4, k = ne.touch), "shouldRemoveOnTrailingIconClick" in ne && t(30, R = ne.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in ne && t(31, g = ne.shouldFocusPrimaryActionOnClick), "component" in ne && t(5, V = ne.component), "tag" in ne && t(6, ue = ne.tag), "$$scope" in ne && t(38, h = ne.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && Ht(Fe, u = R, u), n.$$.dirty[0] & /*selected*/
    256 && Ht(Ie, o = F, o), n.$$.dirty[1] & /*leadingIconClasses*/
    4 && Ht(Ye, s = I, s), n.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && P && P.getShouldRemoveOnTrailingIconClick() !== R && P.setShouldRemoveOnTrailingIconClick(R), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && P && P.setShouldFocusPrimaryActionOnClick(g);
  }, [
    p,
    A,
    v,
    y,
    k,
    V,
    ue,
    P,
    F,
    S,
    _,
    D,
    z,
    q,
    d,
    b,
    O,
    W,
    M,
    L,
    Fe,
    Ie,
    Ye,
    K,
    J,
    Ce,
    Ne,
    qe,
    r,
    T,
    R,
    g,
    Ue,
    I,
    f,
    St,
    j,
    le,
    h
  ];
}
class Yf extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      zf,
      Wf,
      be,
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
function xl(n, e, t) {
  const i = n.slice();
  return i[37] = e[t], i[39] = t, i;
}
const Xf = (n) => ({ chip: n[0] & /*chips*/
1 }), $l = (n) => ({ chip: (
  /*chip*/
  n[37]
) });
function Zf(n) {
  let e;
  const t = (
    /*#slots*/
    n[25].default
  ), i = Te(
    t,
    n,
    /*$$scope*/
    n[27],
    $l
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
          Xf
        ) : Re(
          /*$$scope*/
          r[27]
        ),
        $l
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qf(n) {
  let e, t, i;
  return e = new Bn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        n[10][
          /*i*/
          n[39]
        ]
      ),
      $$slots: { default: [Zf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe();
    },
    m(r, l) {
      $(e, r, l), B(r, t, l), i = !0;
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
      E(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && H(t), ee(e, r);
    }
  };
}
function es(n, e) {
  let t, i, r;
  return i = new Bn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [Qf] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      B(l, t, a), $(i, l, a), r = !0;
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
      E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && H(t), ee(i, l);
    }
  };
}
function Jf(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, l, a, s, o, u = jt(
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
    let m = xl(n, u, h), b = c(m);
    i.set(b, t[h] = es(b, m));
  }
  let d = [
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
  ], f = {};
  for (let h = 0; h < d.length; h += 1)
    f = Y(f, d[h]);
  return {
    c() {
      e = x("div");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      ce(e, f);
    },
    m(h, m) {
      B(h, e, m);
      for (let b = 0; b < t.length; b += 1)
        t[b] && t[b].m(e, null);
      n[26](e), a = !0, s || (o = [
        de(l = Je.call(
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
      134218761 && (u = jt(
        /*chips*/
        h[0]
      ), Pe(), t = fr(t, m, c, 1, h, u, i, e, dr, es, null, xl), He()), ce(e, f = he(d, [
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
          C(t[m]);
        a = !0;
      }
    },
    o(h) {
      for (let m = 0; m < t.length; m += 1)
        E(t[m]);
      a = !1;
    },
    d(h) {
      h && H(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      n[26](null), s = !1, Ze(o);
    }
  };
}
function ts(n, e) {
  let t = new Set(n);
  for (let i of e)
    t.delete(i);
  return t;
}
function xf(n, e, t) {
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
  const { MDCChipSetFoundation: c } = Sr, d = nt(xe());
  let { use: f = [] } = e, { class: h = "" } = e, { chips: m = [] } = e, { key: b = (K) => K } = e, { selected: p = void 0 } = e, { nonInteractive: A = !1 } = e, { choice: v = !1 } = e, { filter: T = !1 } = e, { input: y = !1 } = e, k, R, g = {}, S = /* @__PURE__ */ new WeakMap(), P = m.map((K) => v && p === K || T && p.indexOf(K) !== -1);
  const _ = Lt(A);
  rt(n, _, (K) => t(31, s = K)), Ge("SMUI:chips:nonInteractive", _);
  const I = Lt(v);
  rt(n, I, (K) => t(30, a = K)), Ge("SMUI:chips:choice", I);
  const D = Lt(T);
  rt(n, D, (K) => t(29, l = K)), Ge("SMUI:chips:filter", D);
  let O = T ? new Set(p) : p;
  st(() => {
    if (t(23, R = new c({
      announceMessage: fu,
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
        K >= 0 && K < m.length && (v && p === m[K] ? t(21, p = null) : T && p.indexOf(m[K]) !== -1 && (p.splice(p.indexOf(m[K]), 1), t(21, p)), m.splice(K, 1), t(0, m));
      },
      removeFocusFromChipAtIndex: (K) => {
        var J;
        (J = V(m[K])) === null || J === void 0 || J.removeFocus();
      },
      selectChipAtIndex: (K, J, Ae) => {
        var Ce;
        if (K >= 0 && K < m.length) {
          if (T) {
            const Ne = p.indexOf(m[K]);
            J && Ne === -1 ? (p.push(m[K]), t(21, p)) : !J && Ne !== -1 && (p.splice(Ne, 1), t(21, p));
          } else
            v && (J || p === m[K]) && t(21, p = J ? m[K] : null);
          (Ce = V(m[K])) === null || Ce === void 0 || Ce.setSelectedFromChipSet(J, Ae);
        }
      }
    })), R.init(), v && p != null)
      R.select(p);
    else if (T && p.length)
      for (const K of p)
        R.select(K);
    return () => {
      R.destroy();
    };
  });
  function F(K) {
    const J = K.detail;
    ue(J.chipId, J);
  }
  function z(K) {
    const J = K.detail;
    Fe(J.chipId);
  }
  function q(K) {
    R && R.handleChipInteraction(K.detail);
  }
  function W(K) {
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
    e = Y(Y({}, e), tt(K)), t(20, r = me(e, i)), "use" in K && t(1, f = K.use), "class" in K && t(2, h = K.class), "chips" in K && t(0, m = K.chips), "key" in K && t(3, b = K.key), "selected" in K && t(21, p = K.selected), "nonInteractive" in K && t(4, A = K.nonInteractive), "choice" in K && t(5, v = K.choice), "filter" in K && t(6, T = K.filter), "input" in K && t(7, y = K.input), "$$scope" in K && t(27, u = K.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*nonInteractive*/
    16 && Ht(_, s = A, s), n.$$.dirty[0] & /*choice*/
    32 && Ht(I, a = v, a), n.$$.dirty[0] & /*filter*/
    64 && Ht(D, l = T, l), n.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && R && v && O !== p && (t(24, O = p), R.select(p)), n.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && R && T) {
      const K = new Set(p), J = ts(O, K), Ae = ts(K, O);
      if (J.size || Ae.size) {
        t(24, O = K);
        for (let Ce of J)
          m.indexOf(Ce) !== -1 && R.handleChipSelection({ chipId: Ce, selected: !1 });
        for (let Ce of Ae)
          R.handleChipSelection({ chipId: Ce, selected: !0 });
      }
    }
  }, [
    m,
    f,
    h,
    b,
    A,
    v,
    T,
    y,
    k,
    d,
    P,
    _,
    I,
    D,
    F,
    z,
    q,
    W,
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
class $f extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      xf,
      Jf,
      be,
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
function eh(n) {
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
    u = Y(u, o[c]);
  return {
    c() {
      e = x("span"), t = lt("svg"), i = lt("path"), N(i, "class", "mdc-chip__checkmark-path"), N(i, "fill", "none"), N(i, "stroke", "black"), N(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), N(t, "class", "mdc-chip__checkmark-svg"), N(t, "viewBox", "-2 -3 30 30"), ce(e, u);
    },
    m(c, d) {
      B(c, e, d), Q(e, t), Q(t, i), n[5](e), a || (s = de(l = Je.call(
        null,
        e,
        /*use*/
        n[0]
      )), a = !0);
    },
    p(c, [d]) {
      ce(e, u = he(o, [
        d & /*className*/
        2 && r !== (r = re({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-chip__checkmark": !0
        })) && { class: r },
        d & /*$$restProps*/
        8 && /*$$restProps*/
        c[3]
      ])), l && pe(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: et,
    o: et,
    d(c) {
      c && H(e), n[5](null), a = !1, s();
    }
  };
}
function th(n, e, t) {
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
    e = Y(Y({}, e), tt(c)), t(3, r = me(e, i)), "use" in c && t(0, l = c.use), "class" in c && t(1, a = c.class);
  }, [l, a, s, r, o, u];
}
class nh extends De {
  constructor(e) {
    super(), ke(this, e, th, eh, be, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function ns(n) {
  let e, t, i = {};
  return e = new nh({ props: i }), n[23](e), {
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[23](null), ee(e, r);
    }
  };
}
function ih(n) {
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
    o = Y(o, s[u]);
  return {
    c() {
      e = x("span"), t = x("span"), a && a.c(), N(t, "class", "mdc-chip__text"), ce(e, o);
    },
    m(u, c) {
      B(u, e, c), Q(e, t), a && a.m(t, null), n[24](e), r = !0;
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
      r || (C(a, u), r = !0);
    },
    o(u) {
      E(a, u), r = !1;
    },
    d(u) {
      u && H(e), a && a.d(u), n[24](null);
    }
  };
}
function rh(n) {
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
      e = x("span"), r && r.c(), N(e, "class", "mdc-chip__text");
    },
    m(l, a) {
      B(l, e, a), r && r.m(e, null), t = !0;
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
      E(r, l), t = !1;
    },
    d(l) {
      l && H(e), r && r.d(l);
    }
  };
}
function lh(n) {
  let e, t, i, r, l, a, s, o, u = (
    /*$filter*/
    n[3] && ns(n)
  );
  const c = [rh, ih], d = [];
  function f(h, m) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = f(n), r = d[i] = c[i](n), {
    c() {
      u && u.c(), e = oe(), t = x("span"), r.c(), N(t, "role", "gridcell");
    },
    m(h, m) {
      u && u.m(h, m), B(h, e, m), B(h, t, m), d[i].m(t, null), n[25](t), a = !0, s || (o = [
        de(l = Je.call(
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
      8 && C(u, 1)) : (u = ns(h), u.c(), C(u, 1), u.m(e.parentNode, e)) : u && (Pe(), E(u, 1, 1, () => {
        u = null;
      }), He());
      let b = i;
      i = f(h), i === b ? d[i].p(h, m) : (Pe(), E(d[b], 1, 1, () => {
        d[b] = null;
      }), He(), r = d[i], r ? r.p(h, m) : (r = d[i] = c[i](h), r.c()), C(r, 1), r.m(t, null)), l && pe(l.update) && m & /*use*/
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
      E(u), E(r), a = !1;
    },
    d(h) {
      h && (H(e), H(t)), u && u.d(h), d[i].d(), n[25](null), s = !1, Ze(o);
    }
  };
}
function sh(n, e, t) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let l = me(e, r), a, s, o, u, { $$slots: c = {}, $$scope: d } = e;
  const f = nt(xe());
  let { use: h = [] } = e, { class: m = "" } = e, { tabindex: b = Ke("SMUI:chips:chip:focusable") ? 0 : -1 } = e, p, A, v, T = {};
  const y = Ke("SMUI:chips:nonInteractive");
  rt(n, y, (q) => t(9, o = q));
  const k = Ke("SMUI:chips:choice");
  rt(n, k, (q) => t(2, a = q));
  const R = Ke("SMUI:chips:filter");
  rt(n, R, (q) => t(3, s = q));
  const g = Ke("SMUI:chips:chip:isSelected");
  rt(n, g, (q) => t(10, u = q)), st(() => {
    let q = { focus: _, addAttr: S };
    return _e(D(), "SMUIChipsChipPrimaryAction:mount", q), () => {
      _e(D(), "SMUIChipsChipPrimaryAction:unmount", q);
    };
  });
  function S(q, W) {
    T[q] !== W && t(7, T[q] = W, T);
  }
  function P(q) {
    T.tabindex !== p.getAttribute("tabindex") ? cr().then(q) : q();
  }
  function _() {
    P(() => {
      v && v.focus();
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
  function F(q) {
    se[q ? "unshift" : "push"](() => {
      v = q, t(6, v);
    });
  }
  function z(q) {
    se[q ? "unshift" : "push"](() => {
      p = q, t(4, p);
    });
  }
  return n.$$set = (q) => {
    e = Y(Y({}, e), tt(q)), t(16, l = me(e, r)), "use" in q && t(0, h = q.use), "class" in q && t(1, m = q.class), "tabindex" in q && t(17, b = q.tabindex), "$$scope" in q && t(21, d = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*$filter, $choice, tabindex*/
    131084 && t(8, i = {
      role: s ? "checkbox" : a ? "radio" : "button",
      tabindex: b
    });
  }, [
    h,
    m,
    a,
    s,
    p,
    A,
    v,
    T,
    i,
    o,
    u,
    f,
    y,
    k,
    R,
    g,
    l,
    b,
    _,
    I,
    D,
    d,
    c,
    O,
    F,
    z
  ];
}
class ah extends De {
  constructor(e) {
    super(), ke(this, e, sh, lh, be, {
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
function is(n) {
  let e;
  return {
    c() {
      e = x("span"), N(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function oh(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, b, p = (
    /*touch*/
    n[4] && is()
  );
  const A = (
    /*#slots*/
    n[23].default
  ), v = Te(
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
  ], y = {};
  for (let g = 0; g < T.length; g += 1)
    y = Y(y, T[g]);
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
      ).map(rs).concat([
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
  ], R = {};
  for (let g = 0; g < k.length; g += 1)
    R = Y(R, k[g]);
  return {
    c() {
      e = x("button"), t = x("span"), i = oe(), p && p.c(), r = oe(), l = x("span"), v && v.c(), N(t, "class", "mdc-deprecated-chip-trailing-action__ripple"), ce(l, y), ce(e, R);
    },
    m(g, S) {
      B(g, e, S), Q(e, t), Q(e, i), p && p.m(e, null), Q(e, r), Q(e, l), v && v.m(l, null), e.autofocus && e.focus(), n[24](e), h = !0, m || (b = [
        de(s = Je.call(
          null,
          l,
          /*icon$use*/
          n[6]
        )),
        de(d = Ot.call(null, e, {
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
        de(f = Je.call(
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
      n[4] ? p || (p = is(), p.c(), p.m(e, r)) : p && (p.d(1), p = null), v && v.p && (!h || S & /*$$scope*/
      4194304) && Oe(
        v,
        A,
        n,
        /*$$scope*/
        n[22],
        h ? Le(
          A,
          /*$$scope*/
          n[22],
          S,
          null
        ) : Re(
          /*$$scope*/
          n[22]
        ),
        null
      ), ce(l, y = he(T, [
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
        ).map(rs).concat([
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
        131072 && Zt(
          /*$$restProps*/
          n[17],
          ["icon$"]
        )
      ])), d && pe(d.update) && S & /*ripple*/
      8 && d.update.call(null, {
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
      }), f && pe(f.update) && S & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(g) {
      h || (C(v, g), h = !0);
    },
    o(g) {
      E(v, g), h = !1;
    },
    d(g) {
      g && H(e), p && p.d(), v && v.d(g), n[24](null), m = !1, Ze(b);
    }
  };
}
const rs = ([n, e]) => `${n}: ${e};`;
function uh(n, e, t) {
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
  const { MDCChipTrailingActionFoundation: s } = Sr, o = nt(xe());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { ripple: f = !0 } = e, { touch: h = !1 } = e, { nonNavigable: m = !1 } = e, { icon$use: b = [] } = e, { icon$class: p = "" } = e, A, v, T = {}, y = {}, k = {};
  st(() => {
    t(9, v = new s({
      focus: () => {
        const M = z();
        I(() => {
          M.focus();
        });
      },
      getAttribute: P,
      notifyInteraction: (M) => _e(z(), "SMUIChipTrailingAction:interaction", { trigger: M }, void 0, !0),
      notifyNavigation: (M) => {
        _e(z(), "SMUIChipTrailingAction:navigation", { key: M }, void 0, !0);
      },
      setAttribute: _
    }));
    const W = { isNavigable: D, focus: O, removeFocus: F };
    return _e(z(), "SMUIChipsChipTrailingAction:mount", W), v.init(), () => {
      _e(z(), "SMUIChipsChipTrailingAction:unmount", W), v.destroy();
    };
  });
  function R(W) {
    T[W] || t(10, T[W] = !0, T);
  }
  function g(W) {
    (!(W in T) || T[W]) && t(10, T[W] = !1, T);
  }
  function S(W, M) {
    y[W] != M && (M === "" || M == null ? (delete y[W], t(11, y)) : t(11, y[W] = M, y));
  }
  function P(W) {
    var M;
    return W in k ? (M = k[W]) !== null && M !== void 0 ? M : null : z().getAttribute(W);
  }
  function _(W, M) {
    k[W] !== M && t(12, k[W] = M, k);
  }
  function I(W) {
    k.tabindex !== A.getAttribute("tabindex") ? cr().then(W) : W();
  }
  function D() {
    return v.isNavigable();
  }
  function O() {
    v.focus();
  }
  function F() {
    v.removeFocus();
  }
  function z() {
    return A;
  }
  function q(W) {
    se[W ? "unshift" : "push"](() => {
      A = W, t(8, A);
    });
  }
  return n.$$set = (W) => {
    e = Y(Y({}, e), tt(W)), t(17, r = me(e, i)), "use" in W && t(0, u = W.use), "class" in W && t(1, c = W.class), "style" in W && t(2, d = W.style), "ripple" in W && t(3, f = W.ripple), "touch" in W && t(4, h = W.touch), "nonNavigable" in W && t(5, m = W.nonNavigable), "icon$use" in W && t(6, b = W.icon$use), "icon$class" in W && t(7, p = W.icon$class), "$$scope" in W && t(22, a = W.$$scope);
  }, [
    u,
    c,
    d,
    f,
    h,
    m,
    b,
    p,
    A,
    v,
    T,
    y,
    k,
    o,
    R,
    g,
    S,
    r,
    D,
    O,
    F,
    z,
    a,
    l,
    q
  ];
}
class ch extends De {
  constructor(e) {
    super(), ke(this, e, uh, oh, be, {
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
function dh(n) {
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
      e = x("span"), r && r.c(), N(e, "class", "oscd-icon");
    },
    m(l, a) {
      B(l, e, a), r && r.m(e, null), t = !0;
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
      E(r, l), t = !1;
    },
    d(l) {
      l && H(e), r && r.d(l);
    }
  };
}
function fh(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e;
  return n.$$set = (l) => {
    "$$scope" in l && t(0, r = l.$$scope);
  }, [r, i];
}
class on extends De {
  constructor(e) {
    super(), ke(this, e, fh, dh, be, {});
  }
}
function hh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), N(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && N(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && H(e);
    }
  };
}
function mh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [hh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ph(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class gh extends De {
  constructor(e) {
    super(), ke(this, e, ph, mh, be, { svgStyles: 0 });
  }
}
function _h(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), N(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && N(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && H(e);
    }
  };
}
function bh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [_h] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ih(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Oa extends De {
  constructor(e) {
    super(), ke(this, e, Ih, bh, be, { svgStyles: 0 });
  }
}
function vh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), N(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && N(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && H(e);
    }
  };
}
function Ah(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [vh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ch(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class yh extends De {
  constructor(e) {
    super(), ke(this, e, Ch, Ah, be, { svgStyles: 0 });
  }
}
function Eh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), N(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && N(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && H(e);
    }
  };
}
function Sh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Eh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Th(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Lh extends De {
  constructor(e) {
    super(), ke(this, e, Th, Sh, be, { svgStyles: 0 });
  }
}
function Oh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p: et,
    d(i) {
      i && H(e);
    }
  };
}
function Rh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Oh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function kh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Dh extends De {
  constructor(e) {
    super(), ke(this, e, kh, Rh, be, { svgStyles: 0 });
  }
}
function Mh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), N(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && N(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && H(e);
    }
  };
}
function Fh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Mh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Nh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Uh extends De {
  constructor(e) {
    super(), ke(this, e, Nh, Fh, be, { svgStyles: 0 });
  }
}
function wh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M200-440v-80h560v80H200Z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p: et,
    d(i) {
      i && H(e);
    }
  };
}
function Ph(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [wh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Hh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Bh extends De {
  constructor(e) {
    super(), ke(this, e, Hh, Ph, be, { svgStyles: 0 });
  }
}
function Vh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), N(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && N(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && H(e);
    }
  };
}
function jh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Vh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function qh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Gh extends De {
  constructor(e) {
    super(), ke(this, e, qh, jh, be, { svgStyles: 0 });
  }
}
function Kh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), N(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && N(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && H(e);
    }
  };
}
function Wh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Kh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function zh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Yh extends De {
  constructor(e) {
    super(), ke(this, e, zh, Wh, be, { svgStyles: 0 });
  }
}
function Xh(n) {
  let e;
  return {
    c() {
      e = at(
        /*title*/
        n[0]
      );
    },
    m(t, i) {
      B(t, e, i);
    },
    p(t, i) {
      i & /*title*/
      1 && gt(
        e,
        /*title*/
        t[0]
      );
    },
    d(t) {
      t && H(e);
    }
  };
}
function ls(n) {
  let e, t;
  return e = new ch({
    props: {
      $$slots: { default: [Zh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Zh(n) {
  let e, t;
  return e = new Oa({
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
    p: et,
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Qh(n) {
  let e, t, i, r;
  e = new ah({
    props: {
      $$slots: { default: [Xh] },
      $$scope: { ctx: n }
    }
  });
  let l = (
    /*closeable*/
    n[1] && !/*disabled*/
    n[3] && ls(n)
  );
  return {
    c() {
      te(e.$$.fragment), t = oe(), l && l.c(), i = Xe();
    },
    m(a, s) {
      $(e, a, s), B(a, t, s), l && l.m(a, s), B(a, i, s), r = !0;
    },
    p(a, s) {
      const o = {};
      s & /*$$scope, title*/
      17 && (o.$$scope = { dirty: s, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? l ? (l.p(a, s), s & /*closeable, disabled*/
      10 && C(l, 1)) : (l = ls(a), l.c(), C(l, 1), l.m(i.parentNode, i)) : l && (Pe(), E(l, 1, 1, () => {
        l = null;
      }), He());
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(l), r = !0);
    },
    o(a) {
      E(e.$$.fragment, a), E(l), r = !1;
    },
    d(a) {
      a && (H(t), H(i)), ee(e, a), l && l.d(a);
    }
  };
}
function Jh(n) {
  let e, t;
  return e = new Yf({
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
      $$slots: { default: [Qh] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function xh(n, e, t) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: l } = e, { disabled: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, i = s.title), "closeable" in s && t(1, r = s.closeable), "callback" in s && t(2, l = s.callback), "disabled" in s && t(3, a = s.disabled);
  }, [i, r, l, a];
}
class $h extends De {
  constructor(e) {
    super(), ke(this, e, xh, Jh, be, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
function em(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = x("div"), t = x("input"), i = oe(), r = x("label"), l = at(
        /*label*/
        n[1]
      ), a = oe(), s = x("span"), N(t, "type", "date"), N(t, "id", "datetime-picker"), N(t, "class", "custom-text-field__input svelte-ar6zwk"), N(t, "placeholder", ""), N(r, "for", "datetime-picker"), N(r, "class", "custom-floating-label svelte-ar6zwk"), N(s, "class", "custom-line svelte-ar6zwk"), N(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, d) {
      B(c, e, d), Q(e, t), Xt(
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
    p(c, [d]) {
      d & /*value*/
      1 && Xt(
        t,
        /*value*/
        c[0]
      ), d & /*label*/
      2 && gt(
        l,
        /*label*/
        c[1]
      );
    },
    i: et,
    o: et,
    d(c) {
      c && H(e), o = !1, Ze(u);
    }
  };
}
function tm(n, e, t) {
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
class nm extends De {
  constructor(e) {
    super(), ke(this, e, tm, em, be, { label: 1, value: 0 });
  }
}
const Tt = [];
for (let n = 0; n < 256; ++n)
  Tt.push((n + 256).toString(16).slice(1));
function im(n, e = 0) {
  return (Tt[n[e + 0]] + Tt[n[e + 1]] + Tt[n[e + 2]] + Tt[n[e + 3]] + "-" + Tt[n[e + 4]] + Tt[n[e + 5]] + "-" + Tt[n[e + 6]] + Tt[n[e + 7]] + "-" + Tt[n[e + 8]] + Tt[n[e + 9]] + "-" + Tt[n[e + 10]] + Tt[n[e + 11]] + Tt[n[e + 12]] + Tt[n[e + 13]] + Tt[n[e + 14]] + Tt[n[e + 15]]).toLowerCase();
}
let $i;
const rm = new Uint8Array(16);
function lm() {
  if (!$i) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    $i = crypto.getRandomValues.bind(crypto);
  }
  return $i(rm);
}
const sm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ss = { randomUUID: sm };
function Ra(n, e, t) {
  var r;
  if (ss.randomUUID && !n)
    return ss.randomUUID();
  n = n || {};
  const i = n.random ?? ((r = n.rng) == null ? void 0 : r.call(n)) ?? lm();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, im(i);
}
const am = (n) => ({}), as = (n) => ({});
function os(n) {
  let e, t, i;
  function r(a) {
    n[14](a);
  }
  let l = { label: "Input" };
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Ad({ props: l }), se.push(() => dt(e, "value", r)), {
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
        a[3], ct(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
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
function us(n) {
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
    n[1]), e = new Cr({ props: s }), se.push(() => dt(e, "value", l)), se.push(() => dt(e, "selectedOptionIndex", a)), {
      c() {
        te(e.$$.fragment);
      },
      m(u, c) {
        $(e, u, c), r = !0;
      },
      p(u, c) {
        var f;
        const d = {};
        c & /*getSelectedFilterType*/
        32 && (d.data = /*getSelectedFilterType*/
        (f = u[5].inputType) == null ? void 0 : f.options), !t && c & /*inputValue*/
        8 && (t = !0, d.value = /*inputValue*/
        u[3], ct(() => t = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, d.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], ct(() => i = !1)), e.$set(d);
      },
      i(u) {
        r || (C(e.$$.fragment, u), r = !0);
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
function cs(n) {
  let e, t, i;
  function r(a) {
    n[17](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new nm({ props: l }), se.push(() => dt(e, "value", r)), {
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
        a[3], ct(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
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
function ds(n) {
  let e, t, i;
  function r(a) {
    n[18](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Im({ props: l }), se.push(() => dt(e, "value", r)), {
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
        a[3], ct(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
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
function om(n) {
  let e;
  return {
    c() {
      e = at("Add Filter");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function um(n) {
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
  return e = new $h({
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function cm(n) {
  var D, O, F, z, q, W, M, L;
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, b, p, A, v, T;
  function y(V) {
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
  n[4]), r = new Cr({ props: k }), se.push(() => dt(r, "value", y));
  let R = (
    /*getSelectedFilterType*/
    ((O = (D = n[5]) == null ? void 0 : D.inputType) == null ? void 0 : O.type) === "string" && os(n)
  ), g = (
    /*getSelectedFilterType*/
    ((z = (F = n[5]) == null ? void 0 : F.inputType) == null ? void 0 : z.type) === "select" && us(n)
  ), S = (
    /*getSelectedFilterType*/
    ((W = (q = n[5]) == null ? void 0 : q.inputType) == null ? void 0 : W.type) === "datepicker" && cs(n)
  ), P = (
    /*getSelectedFilterType*/
    ((L = (M = n[5]) == null ? void 0 : M.inputType) == null ? void 0 : L.type) === "timepicker" && ds(n)
  );
  f = new Ar({
    props: {
      callback: (
        /*addFilter*/
        n[8]
      ),
      disabled: (
        /*addFilterDisabled*/
        n[6]
      ),
      $$slots: { default: [om] },
      $$scope: { ctx: n }
    }
  });
  const _ = (
    /*#slots*/
    n[12]["filter-controls"]
  ), I = Te(
    _,
    n,
    /*$$scope*/
    n[20],
    as
  );
  return v = new $f({
    props: {
      chips: (
        /*activeFilters*/
        n[0]
      ),
      $$slots: {
        default: [
          um,
          ({ chip: V }) => ({ 23: V }),
          ({ chip: V }) => V ? 8388608 : 0
        ]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = x("div"), t = x("div"), i = x("div"), te(r.$$.fragment), a = oe(), R && R.c(), s = oe(), g && g.c(), o = oe(), S && S.c(), u = oe(), P && P.c(), c = oe(), d = x("div"), te(f.$$.fragment), h = oe(), I && I.c(), m = oe(), b = x("div"), p = oe(), A = x("div"), te(v.$$.fragment), N(i, "class", "filter-input-controls svelte-1tmo1p6"), N(d, "class", "filter-button-controls svelte-1tmo1p6"), N(t, "class", "input-section svelte-1tmo1p6"), N(b, "class", "separator svelte-1tmo1p6"), N(A, "class", "chip-section svelte-1tmo1p6"), N(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(V, ue) {
      B(V, e, ue), Q(e, t), Q(t, i), $(r, i, null), Q(i, a), R && R.m(i, null), Q(i, s), g && g.m(i, null), Q(i, o), S && S.m(i, null), Q(i, u), P && P.m(i, null), Q(t, c), Q(t, d), $(f, d, null), Q(d, h), I && I.m(d, null), Q(e, m), Q(e, b), Q(e, p), Q(e, A), $(v, A, null), T = !0;
    },
    p(V, ue) {
      var K, J, Ae, Ce, Ne, ie, G, qe;
      const Fe = {};
      ue & /*disabled*/
      4 && (Fe.disabled = /*disabled*/
      V[2]), ue & /*convertTypeToSelection*/
      128 && (Fe.data = /*convertTypeToSelection*/
      V[7]), !l && ue & /*selectedFilterType*/
      16 && (l = !0, Fe.value = /*selectedFilterType*/
      V[4], ct(() => l = !1)), r.$set(Fe), /*getSelectedFilterType*/
      ((J = (K = V[5]) == null ? void 0 : K.inputType) == null ? void 0 : J.type) === "string" ? R ? (R.p(V, ue), ue & /*getSelectedFilterType*/
      32 && C(R, 1)) : (R = os(V), R.c(), C(R, 1), R.m(i, s)) : R && (Pe(), E(R, 1, 1, () => {
        R = null;
      }), He()), /*getSelectedFilterType*/
      ((Ce = (Ae = V[5]) == null ? void 0 : Ae.inputType) == null ? void 0 : Ce.type) === "select" ? g ? (g.p(V, ue), ue & /*getSelectedFilterType*/
      32 && C(g, 1)) : (g = us(V), g.c(), C(g, 1), g.m(i, o)) : g && (Pe(), E(g, 1, 1, () => {
        g = null;
      }), He()), /*getSelectedFilterType*/
      ((ie = (Ne = V[5]) == null ? void 0 : Ne.inputType) == null ? void 0 : ie.type) === "datepicker" ? S ? (S.p(V, ue), ue & /*getSelectedFilterType*/
      32 && C(S, 1)) : (S = cs(V), S.c(), C(S, 1), S.m(i, u)) : S && (Pe(), E(S, 1, 1, () => {
        S = null;
      }), He()), /*getSelectedFilterType*/
      ((qe = (G = V[5]) == null ? void 0 : G.inputType) == null ? void 0 : qe.type) === "timepicker" ? P ? (P.p(V, ue), ue & /*getSelectedFilterType*/
      32 && C(P, 1)) : (P = ds(V), P.c(), C(P, 1), P.m(i, null)) : P && (Pe(), E(P, 1, 1, () => {
        P = null;
      }), He());
      const Ie = {};
      ue & /*addFilterDisabled*/
      64 && (Ie.disabled = /*addFilterDisabled*/
      V[6]), ue & /*$$scope*/
      1048576 && (Ie.$$scope = { dirty: ue, ctx: V }), f.$set(Ie), I && I.p && (!T || ue & /*$$scope*/
      1048576) && Oe(
        I,
        _,
        V,
        /*$$scope*/
        V[20],
        T ? Le(
          _,
          /*$$scope*/
          V[20],
          ue,
          am
        ) : Re(
          /*$$scope*/
          V[20]
        ),
        as
      );
      const Ye = {};
      ue & /*activeFilters*/
      1 && (Ye.chips = /*activeFilters*/
      V[0]), ue & /*$$scope, chip*/
      9437184 && (Ye.$$scope = { dirty: ue, ctx: V }), v.$set(Ye);
    },
    i(V) {
      T || (C(r.$$.fragment, V), C(R), C(g), C(S), C(P), C(f.$$.fragment, V), C(I, V), C(v.$$.fragment, V), T = !0);
    },
    o(V) {
      E(r.$$.fragment, V), E(R), E(g), E(S), E(P), E(f.$$.fragment, V), E(I, V), E(v.$$.fragment, V), T = !1;
    },
    d(V) {
      V && H(e), ee(r), R && R.d(), g && g.d(), S && S.d(), P && P.d(), ee(f), I && I.d(V), ee(v);
    }
  };
}
function dm(n) {
  let e, t;
  return e = new ya({
    props: {
      $$slots: { default: [cm] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function fm(n, e, t) {
  let i, r, l, { $$slots: a = {}, $$scope: s } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: d = -1 } = e, { disabled: f = !1 } = e, h = "", m = "";
  function b() {
    var _;
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
        id: Ra(),
        key: l.label.toLowerCase(),
        value: h,
        operation: "=",
        text: `${m}: ${c && (!((_ = l.inputType.options) === null || _ === void 0) && _.length) ? l.inputType.options[d].label : h}`,
        disabled: !1
      }
    ];
    t(0, u = I), v(), A();
  }
  function p(_) {
    setTimeout(
      () => {
        t(0, u = u.filter((I) => I.id !== _)), v();
      },
      0
    );
  }
  function A() {
    t(3, h = ""), t(4, m = void 0);
  }
  function v() {
    const _ = [...u];
    _.find((I) => I.key === "uuid") ? _.filter((I) => I.key !== "uuid").forEach((I) => {
      I.disabled = !0;
    }) : _.forEach((I) => {
      I.disabled = !1;
    }), t(0, u = _);
  }
  function T(_) {
    m = _, t(4, m);
  }
  function y(_) {
    h = _, t(3, h);
  }
  function k(_) {
    h = _, t(3, h);
  }
  function R(_) {
    d = _, t(1, d);
  }
  function g(_) {
    h = _, t(3, h);
  }
  function S(_) {
    h = _, t(3, h);
  }
  const P = (_) => p(_.id);
  return n.$$set = (_) => {
    "filterTypes" in _ && t(10, o = _.filterTypes), "activeFilters" in _ && t(0, u = _.activeFilters), "useOptionLabelInChipText" in _ && t(11, c = _.useOptionLabelInChipText), "selectedOptionIndex" in _ && t(1, d = _.selectedOptionIndex), "disabled" in _ && t(2, f = _.disabled), "$$scope" in _ && t(20, s = _.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*filterTypes*/
    1024 && t(7, i = o.map((_) => ({ value: _.label, label: _.label }))), n.$$.dirty & /*selectedFilterType, inputValue*/
    24 && t(6, r = !m || !h), n.$$.dirty & /*filterTypes, selectedFilterType*/
    1040 && t(5, l = o.find((_) => _.label === m));
  }, [
    u,
    d,
    f,
    h,
    m,
    l,
    r,
    i,
    b,
    p,
    o,
    c,
    a,
    T,
    y,
    k,
    R,
    g,
    S,
    P,
    s
  ];
}
class hm extends De {
  constructor(e) {
    super(), ke(this, e, fm, dm, be, {
      filterTypes: 10,
      activeFilters: 0,
      useOptionLabelInChipText: 11,
      selectedOptionIndex: 1,
      disabled: 2
    });
  }
}
function fs(n) {
  let e, t, i, r, l, a;
  return {
    c() {
      e = x("div"), t = x("div"), i = x("div"), r = oe(), l = x("span"), a = at(
        /*message*/
        n[1]
      ), N(i, "class", "loading-spinner svelte-quxj5m"), N(l, "class", "loading-message svelte-quxj5m"), N(t, "class", "loading-spinner-container svelte-quxj5m"), N(e, "class", "overlay svelte-quxj5m");
    },
    m(s, o) {
      B(s, e, o), Q(e, t), Q(t, i), Q(t, r), Q(t, l), Q(l, a);
    },
    p(s, o) {
      o & /*message*/
      2 && gt(
        a,
        /*message*/
        s[1]
      );
    },
    d(s) {
      s && H(e);
    }
  };
}
function mm(n) {
  let e, t = !/*loadingDone*/
  n[0] && fs(n);
  return {
    c() {
      e = x("div"), t && t.c();
    },
    m(i, r) {
      B(i, e, r), t && t.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? t && (t.d(1), t = null) : t ? t.p(i, r) : (t = fs(i), t.c(), t.m(e, null));
    },
    i: et,
    o: et,
    d(i) {
      i && H(e), t && t.d();
    }
  };
}
function pm(n, e, t) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return n.$$set = (l) => {
    "loadingDone" in l && t(0, i = l.loadingDone), "message" in l && t(1, r = l.message);
  }, [i, r];
}
class gm extends De {
  constructor(e) {
    super(), ke(this, e, pm, mm, be, { loadingDone: 0, message: 1 });
  }
}
function _m(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = x("div"), t = x("input"), i = oe(), r = x("label"), l = at(
        /*label*/
        n[1]
      ), a = oe(), s = x("span"), N(t, "type", "datetime-local"), N(t, "id", "datetime-picker"), N(t, "class", "custom-text-field__input svelte-ar6zwk"), N(t, "placeholder", ""), N(r, "for", "datetime-picker"), N(r, "class", "custom-floating-label svelte-ar6zwk"), N(s, "class", "custom-line svelte-ar6zwk"), N(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, d) {
      B(c, e, d), Q(e, t), Xt(
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
    p(c, [d]) {
      d & /*value*/
      1 && Xt(
        t,
        /*value*/
        c[0]
      ), d & /*label*/
      2 && gt(
        l,
        /*label*/
        c[1]
      );
    },
    i: et,
    o: et,
    d(c) {
      c && H(e), o = !1, Ze(u);
    }
  };
}
function bm(n, e, t) {
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
class Im extends De {
  constructor(e) {
    super(), ke(this, e, bm, _m, be, { label: 1, value: 0 });
  }
}
const vm = (n) => ({}), hs = (n) => ({});
function Am(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[2].content
  ), o = Te(
    s,
    n,
    /*$$scope*/
    n[3],
    hs
  );
  return {
    c() {
      e = x("details"), t = x("summary"), i = at(
        /*title*/
        n[0]
      ), r = oe(), l = x("div"), o && o.c(), N(t, "class", "svelte-l05fgd"), N(l, "class", "expandable-content svelte-l05fgd"), e.open = /*open*/
      n[1], N(e, "class", "svelte-l05fgd");
    },
    m(u, c) {
      B(u, e, c), Q(e, t), Q(t, i), Q(e, r), Q(e, l), o && o.m(l, null), a = !0;
    },
    p(u, c) {
      (!a || c & /*title*/
      1) && gt(
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
          vm
        ) : Re(
          /*$$scope*/
          u[3]
        ),
        hs
      ), (!a || c & /*open*/
      2) && (e.open = /*open*/
      u[1]);
    },
    i(u) {
      a || (C(o, u), a = !0);
    },
    o(u) {
      E(o, u), a = !1;
    },
    d(u) {
      u && H(e), o && o.d(u);
    }
  };
}
function Cm(n) {
  let e, t;
  return e = new ya({
    props: {
      $$slots: { default: [Am] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ym(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { title: l = "" } = e, { open: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title), "open" in s && t(1, a = s.open), "$$scope" in s && t(3, r = s.$$scope);
  }, [l, a, i, r];
}
class Em extends De {
  constructor(e) {
    super(), ke(this, e, ym, Cm, be, { title: 0, open: 1 });
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
var wt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Gt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, Wn = {
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
var Sm = (
  /** @class */
  function(n) {
    ft(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gt;
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
      this.determinate = !this.adapter.hasClass(wt.INDETERMINATE_CLASS), this.adapter.addClass(wt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
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
        this.adapter.removeClass(wt.INDETERMINATE_CLASS), this.adapter.setAttribute(Gt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Gt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Gt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(wt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Gt.ARIA_VALUENOW), this.adapter.removeAttribute(Gt.ARIA_VALUEMAX), this.adapter.removeAttribute(Gt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(t) {
      this.progress = t, this.determinate && (this.setPrimaryBarProgress(t), this.adapter.setAttribute(Gt.ARIA_VALUENOW, t.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(t) {
      this.buffer = t, this.determinate && this.setBufferBarProgress(t);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(wt.CLOSED_CLASS), this.adapter.removeClass(wt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Gt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(wt.CLOSED_CLASS), this.adapter.setAttribute(Gt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(wt.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(wt.CLOSED_CLASS) && this.adapter.addClass(wt.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(wt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(wt.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(t) {
      var i = "scaleX(" + t + ")", r = typeof window < "u" ? Fd(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(t) {
      var i = t * 100 + "%";
      this.adapter.setBufferBarStyle(Gt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(t) {
      var i = t * Wn.PRIMARY_HALF, r = t * Wn.PRIMARY_FULL, l = t * Wn.SECONDARY_QUARTER, a = t * Wn.SECONDARY_HALF, s = t * Wn.SECONDARY_FULL;
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
var nn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ms = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, bn = {
  ARIA_SELECTED: ms.ARIA_SELECTED,
  ARIA_SORT: ms.ARIA_SORT
}, Pt;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Pt || (Pt = {}));
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
var Tm = (
  /** @class */
  function(n) {
    ft(e, n);
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
      return zs(this, void 0, void 0, function() {
        return hr(this, function(t) {
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
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, bn.ARIA_SORT, Pt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Pt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, nn.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(r, bn.ARIA_SORT), o = Pt.NONE;
      s === Pt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, bn.ARIA_SORT, Pt.DESCENDING), o = Pt.DESCENDING) : s === Pt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, bn.ARIA_SORT, Pt.ASCENDING), o = Pt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, bn.ARIA_SORT, Pt.ASCENDING), o = Pt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(nn.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(nn.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, i) {
      i ? (this.adapter.addClassAtRowIndex(t, nn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, bn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, nn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, bn.ARIA_SELECTED, "false"));
    }, e;
  }(Et)
);
const Lm = (n) => ({}), ps = (n) => ({}), Om = (n) => ({}), gs = (n) => ({});
function _s(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[36].progress
  ), s = Te(
    a,
    n,
    /*$$scope*/
    n[35],
    gs
  );
  return {
    c() {
      e = x("div"), t = x("div"), i = oe(), s && s.c(), N(t, "class", "mdc-data-table__scrim"), N(e, "class", "mdc-data-table__progress-indicator"), N(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(bs).join(" "));
    },
    m(o, u) {
      B(o, e, u), Q(e, t), Q(e, i), s && s.m(e, null), l = !0;
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
          Om
        ) : Re(
          /*$$scope*/
          o[35]
        ),
        gs
      ), (!l || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(bs).join(" "))) && N(e, "style", r);
    },
    i(o) {
      l || (C(s, o), l = !0);
    },
    o(o) {
      E(s, o), l = !1;
    },
    d(o) {
      o && H(e), s && s.d(o);
    }
  };
}
function Rm(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m;
  const b = (
    /*#slots*/
    n[36].default
  ), p = Te(
    b,
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
  ], v = {};
  for (let _ = 0; _ < A.length; _ += 1)
    v = Y(v, A[_]);
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
  ], y = {};
  for (let _ = 0; _ < T.length; _ += 1)
    y = Y(y, T[_]);
  let k = (
    /*$$slots*/
    n[24].progress && _s(n)
  );
  const R = (
    /*#slots*/
    n[36].paginate
  ), g = Te(
    R,
    n,
    /*$$scope*/
    n[35],
    ps
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
    Zt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], P = {};
  for (let _ = 0; _ < S.length; _ += 1)
    P = Y(P, S[_]);
  return {
    c() {
      e = x("div"), t = x("div"), i = x("table"), p && p.c(), o = oe(), k && k.c(), u = oe(), g && g.c(), ce(i, v), ce(t, y), ce(e, P);
    },
    m(_, I) {
      B(_, e, I), Q(e, t), Q(t, i), p && p.m(i, null), n[37](t), Q(e, o), k && k.m(e, null), Q(e, u), g && g.m(e, null), n[38](e), f = !0, h || (m = [
        de(l = Je.call(
          null,
          i,
          /*table$use*/
          n[5]
        )),
        de(s = Je.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        de(d = Je.call(
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
    p(_, I) {
      p && p.p && (!f || I[1] & /*$$scope*/
      16) && Oe(
        p,
        b,
        _,
        /*$$scope*/
        _[35],
        f ? Le(
          b,
          /*$$scope*/
          _[35],
          I,
          null
        ) : Re(
          /*$$scope*/
          _[35]
        ),
        null
      ), ce(i, v = he(A, [
        (!f || I[0] & /*table$class*/
        64 && r !== (r = re({
          [
            /*table$class*/
            _[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        I[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          _[25],
          "table$"
        )
      ])), l && pe(l.update) && I[0] & /*table$use*/
      32 && l.update.call(
        null,
        /*table$use*/
        _[5]
      ), ce(t, y = he(T, [
        (!f || I[0] & /*container$class*/
        16 && a !== (a = re({
          [
            /*container$class*/
            _[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        I[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          _[25],
          "container$"
        )
      ])), s && pe(s.update) && I[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        _[3]
      ), /*$$slots*/
      _[24].progress ? k ? (k.p(_, I), I[0] & /*$$slots*/
      16777216 && C(k, 1)) : (k = _s(_), k.c(), C(k, 1), k.m(e, u)) : k && (Pe(), E(k, 1, 1, () => {
        k = null;
      }), He()), g && g.p && (!f || I[1] & /*$$scope*/
      16) && Oe(
        g,
        R,
        _,
        /*$$scope*/
        _[35],
        f ? Le(
          R,
          /*$$scope*/
          _[35],
          I,
          Lm
        ) : Re(
          /*$$scope*/
          _[35]
        ),
        ps
      ), ce(e, P = he(S, [
        (!f || I[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = re({
          [
            /*className*/
            _[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            _[2]
          ),
          .../*internalClasses*/
          _[12]
        }))) && { class: c },
        I[0] & /*$$restProps*/
        33554432 && Zt(
          /*$$restProps*/
          _[25],
          ["container$", "table$"]
        )
      ])), d && pe(d.update) && I[0] & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      f || (C(p, _), C(k), C(g, _), f = !0);
    },
    o(_) {
      E(p, _), E(k), E(g, _), f = !1;
    },
    d(_) {
      _ && H(e), p && p.d(_), n[37](null), k && k.d(), g && g.d(_), n[38](null), h = !1, Ze(m);
    }
  };
}
const bs = ([n, e]) => `${n}: ${e};`;
function km(n, e, t) {
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
  const c = or(o), { closest: d } = hi, f = nt(xe());
  let { use: h = [] } = e, { class: m = "" } = e, { stickyHeader: b = !1 } = e, { sortable: p = !1 } = e, { sort: A = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: T = "sorted, ascending" } = e, { sortDescendingAriaLabel: y = "sorted, descending" } = e, { container$use: k = [] } = e, { container$class: R = "" } = e, { table$use: g = [] } = e, { table$class: S = "" } = e, P, _, I, D, O, F = {}, z = { height: "auto", top: "initial" }, q = Ke("SMUI:addLayoutListener"), W, M = !1, L = Lt(!1);
  rt(n, L, (j) => t(34, l = j));
  let V = Lt(A);
  rt(n, V, (j) => t(45, s = j));
  let ue = Lt(v);
  rt(n, ue, (j) => t(44, a = j)), Ge("SMUI:checkbox:context", "data-table"), Ge("SMUI:linear-progress:context", "data-table"), Ge("SMUI:linear-progress:closed", L), Ge("SMUI:data-table:sortable", p), Ge("SMUI:data-table:sort", V), Ge("SMUI:data-table:sortDirection", ue), Ge("SMUI:data-table:sortAscendingAriaLabel", T), Ge("SMUI:data-table:sortDescendingAriaLabel", y), q && (W = q(qe));
  let Fe;
  st(() => (t(7, _ = new Tm({
    addClass: J,
    removeClass: Ae,
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
      t(26, A = j.columnId), t(27, v = j.sortValue), _e(Be(), "SMUIDataTable:sorted", j, void 0, !0);
    },
    getTableContainerHeight: () => I.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const j = Be().querySelector(".mdc-data-table__header-row");
      if (!j)
        throw new Error("MDCDataTable: Table header element not found.");
      return j.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (j) => {
      t(13, z = j);
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
      return (le = O == null ? void 0 : O.orderedRows.map((ne) => ne.element).indexOf(d(j, ".mdc-data-table__row"))) !== null && le !== void 0 ? le : -1;
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
      le && _e(
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
      Ce(!1), _e(Be(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Ce(!1), _e(Be(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (j) => {
      _e(Be(), "SMUIDataTable:rowClick", j, void 0, !0);
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
    setHeaderRowCheckboxIndeterminate: Ce,
    setRowCheckboxCheckedAtIndex: (j, le) => {
      const ne = O == null ? void 0 : O.orderedRows[j].checkbox;
      ne && (ne.checked = le);
    },
    setSortStatusLabelByHeaderCellIndex: (j, le) => {
    }
    // Handled automatically.
  })), _.init(), _.layout(), t(14, M = !0), () => {
    _.destroy();
  })), Qt(() => {
    W && W();
  });
  function Ie(j) {
    t(10, D = j.detail);
  }
  function Ye(j) {
    t(11, O = j.detail);
  }
  function K(j) {
    _ && _.handleRowCheckboxChange(j);
  }
  function J(j) {
    F[j] || t(12, F[j] = !0, F);
  }
  function Ae(j) {
    (!(j in F) || F[j]) && t(12, F[j] = !1, F);
  }
  function Ce(j) {
    const le = D == null ? void 0 : D.checkbox;
    le && (le.indeterminate = j);
  }
  function Ne(j) {
    if (!_ || !j.detail.target)
      return;
    const le = d(j.detail.target, ".mdc-data-table__header-cell--with-sort");
    le && G(le);
  }
  function ie(j) {
    if (!_ || !j.detail.target)
      return;
    const le = d(j.detail.target, ".mdc-data-table__row");
    le && _ && _.handleRowClick({ rowId: j.detail.rowId, row: le });
  }
  function G(j) {
    var le, ne;
    const ze = (le = D == null ? void 0 : D.orderedCells) !== null && le !== void 0 ? le : [], ut = ze.map(($e) => $e.element).indexOf(j);
    if (ut === -1)
      return;
    const ot = (ne = ze[ut].columnId) !== null && ne !== void 0 ? ne : null;
    _.handleSortAction({ columnId: ot, columnIndex: ut, headerCell: j });
  }
  function qe() {
    return _.layout();
  }
  function Be() {
    return P;
  }
  function Ct(j) {
    se[j ? "unshift" : "push"](() => {
      I = j, t(9, I);
    });
  }
  function Z(j) {
    se[j ? "unshift" : "push"](() => {
      P = j, t(8, P);
    });
  }
  const ye = () => _ && M && _.layout(), je = () => t(10, D = void 0), Ue = () => t(11, O = void 0), St = () => _ && _.handleHeaderRowCheckboxChange();
  return n.$$set = (j) => {
    e = Y(Y({}, e), tt(j)), t(25, r = me(e, i)), "use" in j && t(0, h = j.use), "class" in j && t(1, m = j.class), "stickyHeader" in j && t(2, b = j.stickyHeader), "sortable" in j && t(28, p = j.sortable), "sort" in j && t(26, A = j.sort), "sortDirection" in j && t(27, v = j.sortDirection), "sortAscendingAriaLabel" in j && t(29, T = j.sortAscendingAriaLabel), "sortDescendingAriaLabel" in j && t(30, y = j.sortDescendingAriaLabel), "container$use" in j && t(3, k = j.container$use), "container$class" in j && t(4, R = j.container$class), "table$use" in j && t(5, g = j.table$use), "table$class" in j && t(6, S = j.table$class), "$$scope" in j && t(35, u = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Ht(V, s = A, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Ht(ue, a = v, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && _ && Fe !== l && (t(33, Fe = l), l ? _.hideProgress() : _.showProgress());
  }, [
    h,
    m,
    b,
    k,
    R,
    g,
    S,
    _,
    P,
    I,
    D,
    O,
    F,
    z,
    M,
    f,
    L,
    V,
    ue,
    Ie,
    Ye,
    K,
    Ne,
    ie,
    c,
    r,
    A,
    v,
    p,
    T,
    y,
    qe,
    Be,
    Fe,
    l,
    u,
    o,
    Ct,
    Z,
    ye,
    je,
    Ue,
    St
  ];
}
class Dm extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      km,
      Rm,
      be,
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
function Mm(n) {
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
    u = Y(u, o[c]);
  return {
    c() {
      e = x("thead"), s && s.c(), ce(e, u);
    },
    m(c, d) {
      B(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        de(t = Je.call(
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
    p(c, [d]) {
      s && s.p && (!i || d & /*$$scope*/
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
          d,
          null
        ) : Re(
          /*$$scope*/
          c[9]
        ),
        null
      ), ce(e, u = he(o, [d & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && pe(t.update) && d & /*use*/
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
      E(s, c), i = !1;
    },
    d(c) {
      c && H(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function Fm(n, e, t) {
  const i = ["use", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, u, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  Ge("SMUI:data-table:row:header", !0), st(() => {
    const y = {
      get cells() {
        return d;
      },
      get orderedCells() {
        return p();
      },
      get checkbox() {
        return c;
      }
    };
    return _e(A(), "SMUIDataTableHeader:mount", y), () => {
      _e(A(), "SMUIDataTableHeader:unmount", y);
    };
  });
  function h(y) {
    t(2, c = y.detail);
  }
  function m(y) {
    d.push(y.detail), f.set(y.detail.element, y.detail), y.stopPropagation();
  }
  function b(y) {
    const k = d.indexOf(y.detail);
    k !== -1 && (d.splice(k, 1), d = d), f.delete(y.detail.element), y.stopPropagation();
  }
  function p() {
    return [...A().querySelectorAll(".mdc-data-table__header-cell")].map((y) => f.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function A() {
    return u;
  }
  function v(y) {
    se[y ? "unshift" : "push"](() => {
      u = y, t(1, u);
    });
  }
  const T = () => t(2, c = void 0);
  return n.$$set = (y) => {
    e = Y(Y({}, e), tt(y)), t(7, r = me(e, i)), "use" in y && t(0, o = y.use), "$$scope" in y && t(9, a = y.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    m,
    b,
    r,
    A,
    a,
    l,
    v,
    T
  ];
}
class Nm extends De {
  constructor(e) {
    super(), ke(this, e, Fm, Mm, be, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Um(n) {
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
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = x("tbody"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      B(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        de(i = Je.call(
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
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      256) && Oe(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? Le(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Re(
          /*$$scope*/
          d[8]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className*/
        2 && t !== (t = re({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        d[6]
      ])), i && pe(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (C(o, d), r = !0);
    },
    o(d) {
      E(o, d), r = !1;
    },
    d(d) {
      d && H(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function wm(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  Ge("SMUI:data-table:row:header", !1), st(() => {
    const v = {
      get rows() {
        return d;
      },
      get orderedRows() {
        return b();
      }
    };
    return _e(p(), "SMUIDataTableBody:mount", v), () => {
      _e(p(), "SMUIDataTableBody:unmount", v);
    };
  });
  function h(v) {
    d.push(v.detail), f.set(v.detail.element, v.detail), v.stopPropagation();
  }
  function m(v) {
    const T = d.indexOf(v.detail);
    T !== -1 && (d.splice(T, 1), d = d), f.delete(v.detail.element), v.stopPropagation();
  }
  function b() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((v) => f.get(v)).filter((v) => v && v._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function A(v) {
    se[v ? "unshift" : "push"](() => {
      c = v, t(2, c);
    });
  }
  return n.$$set = (v) => {
    e = Y(Y({}, e), tt(v)), t(6, r = me(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "$$scope" in v && t(8, a = v.$$scope);
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
class Pm extends De {
  constructor(e) {
    super(), ke(this, e, wm, Um, be, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Hm(n) {
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
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = Y(d, c[f]);
  return {
    c() {
      e = x("tr"), u && u.c(), ce(e, d);
    },
    m(f, h) {
      B(f, e, h), u && u.m(e, null), n[16](e), l = !0, a || (s = [
        de(r = Je.call(
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
    p(f, [h]) {
      u && u.p && (!l || h & /*$$scope*/
      16384) && Oe(
        u,
        o,
        f,
        /*$$scope*/
        f[14],
        l ? Le(
          o,
          /*$$scope*/
          f[14],
          h,
          null
        ) : Re(
          /*$$scope*/
          f[14]
        ),
        null
      ), ce(e, d = he(c, [
        (!l || h & /*className, checkbox, internalClasses*/
        26 && t !== (t = re({
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
        (!l || h & /*checkbox*/
        8 && i !== (i = /*checkbox*/
        f[3] ? (
          /*checkbox*/
          f[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": i },
        h & /*internalAttrs*/
        32 && /*internalAttrs*/
        f[5],
        h & /*$$restProps*/
        2048 && /*$$restProps*/
        f[11]
      ])), r && pe(r.update) && h & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (C(u, f), l = !0);
    },
    o(f) {
      E(u, f), l = !1;
    },
    d(f) {
      f && H(e), u && u.d(f), n[16](null), a = !1, Ze(s);
    }
  };
}
let Bm = 0;
function Vm(n, e, t) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Bm++ } = e, d, f, h = {}, m = {}, b = Ke("SMUI:data-table:row:header");
  st(() => {
    const I = b ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return g();
      },
      get checkbox() {
        return f;
      },
      get rowId() {
      },
      get selected() {
        var D;
        return (D = f && f.checked) !== null && D !== void 0 ? D : !1;
      },
      addClass: A,
      removeClass: v,
      getAttr: T,
      addAttr: y
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return g();
      },
      get checkbox() {
        return f;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var D;
        return (D = f && f.checked) !== null && D !== void 0 ? D : !1;
      },
      addClass: A,
      removeClass: v,
      getAttr: T,
      addAttr: y
    };
    return _e(g(), "SMUIDataTableRow:mount", I), () => {
      _e(g(), "SMUIDataTableRow:unmount", I);
    };
  });
  function p(I) {
    t(3, f = I.detail);
  }
  function A(I) {
    h[I] || t(4, h[I] = !0, h);
  }
  function v(I) {
    (!(I in h) || h[I]) && t(4, h[I] = !1, h);
  }
  function T(I) {
    var D;
    return I in m ? (D = m[I]) !== null && D !== void 0 ? D : null : g().getAttribute(I);
  }
  function y(I, D) {
    m[I] !== D && t(5, m[I] = D, m);
  }
  function k(I) {
    _e(g(), "SMUIDataTableHeader:click", I);
  }
  function R(I) {
    _e(g(), "SMUIDataTableRow:click", { rowId: c, target: I.target });
  }
  function g() {
    return d;
  }
  function S(I) {
    se[I ? "unshift" : "push"](() => {
      d = I, t(2, d);
    });
  }
  const P = (I) => b ? k(I) : R(I), _ = () => t(3, f = void 0);
  return n.$$set = (I) => {
    e = Y(Y({}, e), tt(I)), t(11, r = me(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "rowId" in I && t(12, c = I.rowId), "$$scope" in I && t(14, a = I.$$scope);
  }, [
    o,
    u,
    d,
    f,
    h,
    m,
    s,
    b,
    p,
    k,
    R,
    r,
    c,
    g,
    a,
    l,
    S,
    P,
    _
  ];
}
class ka extends De {
  constructor(e) {
    super(), ke(this, e, Vm, Hm, be, {
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
function jm(n) {
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
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = x("td"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      B(d, e, f), o && o.m(e, null), n[25](e), r = !0, l || (a = [
        de(i = Je.call(
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
    p(d, f) {
      o && o.p && (!r || f & /*$$scope*/
      2097152) && Oe(
        o,
        s,
        d,
        /*$$scope*/
        d[21],
        r ? Le(
          s,
          /*$$scope*/
          d[21],
          f,
          null
        ) : Re(
          /*$$scope*/
          d[21]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = re({
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
      ])), i && pe(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (C(o, d), r = !0);
    },
    o(d) {
      E(o, d), r = !1;
    },
    d(d) {
      d && H(e), o && o.d(d), n[25](null), l = !1, Ze(a);
    }
  };
}
function qm(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [Km, Gm], d = [];
  function f(b, p) {
    return (
      /*sortable*/
      b[5] ? 0 : 1
    );
  }
  t = f(n), i = d[t] = c[t](n);
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
  for (let b = 0; b < h.length; b += 1)
    m = Y(m, h[b]);
  return {
    c() {
      e = x("th"), i.c(), ce(e, m);
    },
    m(b, p) {
      B(b, e, p), d[t].m(e, null), n[23](e), s = !0, o || (u = [
        de(a = Je.call(
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
    p(b, p) {
      let A = t;
      t = f(b), t === A ? d[t].p(b, p) : (Pe(), E(d[A], 1, 1, () => {
        d[A] = null;
      }), He(), i = d[t], i ? i.p(b, p) : (i = d[t] = c[t](b), i.c()), C(i, 1), i.m(e, null)), ce(e, m = he(h, [
        (!s || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && r !== (r = re({
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
        }))) && { class: r },
        { role: "columnheader" },
        { scope: "col" },
        (!s || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          b[4]
        ) },
        (!s || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && l !== (l = /*sortable*/
        b[5] ? (
          /*$sort*/
          b[9] === /*columnId*/
          b[4] ? (
            /*$sortDirection*/
            b[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": l },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        b[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        b[19]
      ])), a && pe(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      s || (C(i), s = !0);
    },
    o(b) {
      E(i), s = !1;
    },
    d(b) {
      b && H(e), d[t].d(), n[23](null), o = !1, Ze(u);
    }
  };
}
function Gm(n) {
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
      E(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Km(n) {
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
      e = x("div"), u && u.c(), t = oe(), i = x("div"), l = at(r), N(i, "class", "mdc-data-table__sort-status-label"), N(i, "aria-hidden", "true"), N(i, "id", a = /*columnId*/
      n[4] + "-status-label"), N(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, d) {
      B(c, e, d), u && u.m(e, null), Q(e, t), Q(e, i), Q(i, l), s = !0;
    },
    p(c, d) {
      u && u.p && (!s || d & /*$$scope*/
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
          d,
          null
        ) : Re(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!s || d & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && gt(l, r), (!s || d & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && N(i, "id", a);
    },
    i(c) {
      s || (C(u, c), s = !0);
    },
    o(c) {
      E(u, c), s = !1;
    },
    d(c) {
      c && H(e), u && u.d(c);
    }
  };
}
function Wm(n) {
  let e, t, i, r;
  const l = [qm, jm], a = [];
  function s(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
let zm = 0;
function Ym(n, e, t) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = me(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(xe());
  let c = Ke("SMUI:data-table:row:header"), { use: d = [] } = e, { class: f = "" } = e, { numeric: h = !1 } = e, { checkbox: m = !1 } = e, { columnId: b = c ? "SMUI-data-table-column-" + zm++ : "SMUI-data-table-unused" } = e, { sortable: p = Ke("SMUI:data-table:sortable") } = e, A, v = {}, T = {}, y = Ke("SMUI:data-table:sort");
  rt(n, y, (L) => t(9, l = L));
  let k = Ke("SMUI:data-table:sortDirection");
  rt(n, k, (L) => t(10, a = L));
  let R = Ke("SMUI:data-table:sortAscendingAriaLabel"), g = Ke("SMUI:data-table:sortDescendingAriaLabel");
  p && (Ge("SMUI:label:context", "data-table:sortable-header-cell"), Ge("SMUI:icon-button:context", "data-table:sortable-header-cell"), Ge("SMUI:icon-button:aria-describedby", b + "-status-label")), st(() => {
    const L = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return F();
      },
      get columnId() {
        return b;
      },
      addClass: S,
      removeClass: P,
      getAttr: _,
      addAttr: I
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return F();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: P,
      getAttr: _,
      addAttr: I
    };
    return _e(F(), "SMUIDataTableCell:mount", L), () => {
      _e(F(), "SMUIDataTableCell:unmount", L);
    };
  });
  function S(L) {
    v[L] || t(7, v[L] = !0, v);
  }
  function P(L) {
    (!(L in v) || v[L]) && t(7, v[L] = !1, v);
  }
  function _(L) {
    var V;
    return L in T ? (V = T[L]) !== null && V !== void 0 ? V : null : F().getAttribute(L);
  }
  function I(L, V) {
    T[L] !== V && t(8, T[L] = V, T);
  }
  function D(L) {
    _e(F(), "SMUIDataTableHeaderCheckbox:change", L);
  }
  function O(L) {
    _e(F(), "SMUIDataTableBodyCheckbox:change", L);
  }
  function F() {
    return A;
  }
  function z(L) {
    se[L ? "unshift" : "push"](() => {
      A = L, t(6, A);
    });
  }
  const q = (L) => m && D(L);
  function W(L) {
    se[L ? "unshift" : "push"](() => {
      A = L, t(6, A);
    });
  }
  const M = (L) => m && O(L);
  return n.$$set = (L) => {
    e = Y(Y({}, e), tt(L)), t(19, r = me(e, i)), "use" in L && t(0, d = L.use), "class" in L && t(1, f = L.class), "numeric" in L && t(2, h = L.numeric), "checkbox" in L && t(3, m = L.checkbox), "columnId" in L && t(4, b = L.columnId), "sortable" in L && t(5, p = L.sortable), "$$scope" in L && t(21, o = L.$$scope);
  }, [
    d,
    f,
    h,
    m,
    b,
    p,
    A,
    v,
    T,
    l,
    a,
    u,
    c,
    y,
    k,
    R,
    g,
    D,
    O,
    r,
    F,
    o,
    s,
    z,
    q,
    W,
    M
  ];
}
class Tr extends De {
  constructor(e) {
    super(), ke(this, e, Ym, Wm, be, {
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
function Xm(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, b, p, A, v, T, y, k = [
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
      ).map(As).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": b = 0
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
    R = Y(R, k[g]);
  return {
    c() {
      e = x("div"), t = x("div"), i = x("div"), l = oe(), a = x("div"), s = oe(), o = x("div"), u = x("span"), d = oe(), f = x("div"), f.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', N(i, "class", "mdc-linear-progress__buffer-bar"), N(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        n[11]
      ).map(Is).join(" ")), N(a, "class", "mdc-linear-progress__buffer-dots"), N(t, "class", "mdc-linear-progress__buffer"), N(u, "class", "mdc-linear-progress__bar-inner"), N(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), N(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        n[12]
      ).map(vs).join(" ")), N(f, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ce(e, R);
    },
    m(g, S) {
      B(g, e, S), Q(e, t), Q(t, i), Q(t, l), Q(t, a), Q(e, s), Q(e, o), Q(o, u), Q(e, d), Q(e, f), n[19](e), T || (y = [
        de(v = Je.call(
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
      ).map(Is).join(" ")) && N(i, "style", r), S & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        g[12]
      ).map(vs).join(" ")) && N(o, "style", c), ce(e, R = he(k, [
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
        ).map(As).concat([
          /*style*/
          g[2]
        ]).join(" ")) && { style: m },
        { role: "progressbar" },
        {
          "aria-valuemin": b
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
      ])), v && pe(v.update) && S & /*use*/
      1 && v.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i: et,
    o: et,
    d(g) {
      g && H(e), n[19](null), T = !1, Ze(y);
    }
  };
}
const Is = ([n, e]) => `${n}: ${e};`, vs = ([n, e]) => `${n}: ${e};`, As = ([n, e]) => `${n}: ${e};`;
function Zm(n, e, t) {
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
  const a = nt(xe());
  let { use: s = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: d = !1 } = e, { progress: f = 0 } = e, { buffer: h = void 0 } = e, m, b, p = {}, A = {}, v = {}, T = {}, y = {}, k = Ke("SMUI:linear-progress:context"), R = Ke("SMUI:linear-progress:closed");
  rt(n, R, (M) => t(21, l = M)), st(() => (t(6, b = new Sm({
    addClass: S,
    forceLayout: () => {
      z().getBoundingClientRect();
    },
    setBufferBarStyle: O,
    setPrimaryBarStyle: F,
    hasClass: g,
    removeAttribute: I,
    removeClass: P,
    setAttribute: _,
    setStyle: D,
    attachResizeObserver: (M) => {
      const L = window.ResizeObserver;
      if (L) {
        const V = new L(M);
        return V.observe(z()), V;
      }
      return null;
    },
    getWidth: () => z().offsetWidth
  })), b.init(), () => {
    b.destroy();
  }));
  function g(M) {
    return M in p ? p[M] : z().classList.contains(M);
  }
  function S(M) {
    p[M] || t(8, p[M] = !0, p);
  }
  function P(M) {
    (!(M in p) || p[M]) && t(8, p[M] = !1, p);
  }
  function _(M, L) {
    A[M] !== L && t(9, A[M] = L, A);
  }
  function I(M) {
    (!(M in A) || A[M] != null) && t(9, A[M] = void 0, A);
  }
  function D(M, L) {
    v[M] != L && (L === "" || L == null ? (delete v[M], t(10, v)) : t(10, v[M] = L, v));
  }
  function O(M, L) {
    T[M] != L && (L === "" || L == null ? (delete T[M], t(11, T)) : t(11, T[M] = L, T));
  }
  function F(M, L) {
    y[M] != L && (L === "" || L == null ? (delete y[M], t(12, y)) : t(12, y[M] = L, y));
  }
  function z() {
    return m;
  }
  function q(M) {
    se[M ? "unshift" : "push"](() => {
      m = M, t(7, m);
    });
  }
  const W = () => b && b.handleTransitionEnd();
  return n.$$set = (M) => {
    e = Y(Y({}, e), tt(M)), t(16, r = me(e, i)), "use" in M && t(0, s = M.use), "class" in M && t(1, o = M.class), "style" in M && t(2, u = M.style), "indeterminate" in M && t(3, c = M.indeterminate), "closed" in M && t(4, d = M.closed), "progress" in M && t(5, f = M.progress), "buffer" in M && t(17, h = M.buffer);
  }, n.$$.update = () => {
    n.$$.dirty & /*closed*/
    16 && R && Ht(R, l = d, l), n.$$.dirty & /*instance, indeterminate*/
    72 && b && b.isDeterminate() !== !c && b.setDeterminate(!c), n.$$.dirty & /*instance, progress*/
    96 && b && b.getProgress() !== f && b.setProgress(f), n.$$.dirty & /*instance, buffer*/
    131136 && b && (h == null ? b.setBuffer(1) : b.setBuffer(h)), n.$$.dirty & /*instance, closed*/
    80 && b && (d ? b.close() : b.open());
  }, [
    s,
    o,
    u,
    c,
    d,
    f,
    b,
    m,
    p,
    A,
    v,
    T,
    y,
    a,
    k,
    R,
    r,
    h,
    z,
    q,
    W
  ];
}
class Qm extends De {
  constructor(e) {
    super(), ke(this, e, Zm, Xm, be, {
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
function Cs(n, e, t) {
  const i = n.slice();
  return i[24] = e[t], i[26] = t, i;
}
function ys(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i;
}
function Es(n, e, t) {
  const i = n.slice();
  return i[30] = e[t], i;
}
function Ss(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i[33] = e, i[34] = t, i;
}
function Ts(n) {
  let e, t = (
    /*$sortColumn*/
    n[5] === /*col*/
    n[27].field && /*$sortDirection*/
    n[6] !== null && Ls(n)
  );
  return {
    c() {
      t && t.c(), e = Xe();
    },
    m(i, r) {
      t && t.m(i, r), B(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[5] === /*col*/
      i[27].field && /*$sortDirection*/
      i[6] !== null ? t ? t.p(i, r) : (t = Ls(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(i) {
      i && H(e), t && t.d(i);
    }
  };
}
function Ls(n) {
  let e;
  function t(l, a) {
    if (
      /*$sortDirection*/
      l[6] === "asc"
    )
      return xm;
    if (
      /*$sortDirection*/
      l[6] === "desc"
    )
      return Jm;
  }
  let i = t(n), r = i && i(n);
  return {
    c() {
      r && r.c(), e = Xe();
    },
    m(l, a) {
      r && r.m(l, a), B(l, e, a);
    },
    p(l, a) {
      i !== (i = t(l)) && (r && r.d(1), r = i && i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && H(e), r && r.d(l);
    }
  };
}
function Jm(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M12 20l8-8H4l8 8z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 0 24 24"), N(e, "width", "16"), N(e, "height", "16"), N(e, "fill", "currentColor"), N(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    d(i) {
      i && H(e);
    }
  };
}
function xm(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), N(t, "d", "M12 4l-8 8h16l-8-8z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 0 24 24"), N(e, "width", "16"), N(e, "height", "16"), N(e, "fill", "currentColor"), N(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      B(i, e, r), Q(e, t);
    },
    d(i) {
      i && H(e);
    }
  };
}
function Os(n) {
  let e, t, i = (
    /*col*/
    n[27].filterType === "text" && Rs(n)
  ), r = (
    /*col*/
    n[27].filterType === "number" && ks(n)
  );
  return {
    c() {
      i && i.c(), e = oe(), r && r.c(), t = Xe();
    },
    m(l, a) {
      i && i.m(l, a), B(l, e, a), r && r.m(l, a), B(l, t, a);
    },
    p(l, a) {
      /*col*/
      l[27].filterType === "text" ? i ? i.p(l, a) : (i = Rs(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      l[27].filterType === "number" ? r ? r.p(l, a) : (r = ks(l), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && (H(e), H(t)), i && i.d(l), r && r.d(l);
    }
  };
}
function Rs(n) {
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
      e = x("input"), N(e, "type", "text"), N(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), N(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      B(a, e, s), Xt(
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
      n[27].headerName}`) && N(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && e.value !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Xt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && H(e), i = !1, Ze(r);
    }
  };
}
function ks(n) {
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
      e = x("input"), N(e, "type", "number"), N(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), N(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      B(a, e, s), Xt(
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
      n[27].headerName}`) && N(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && Vs(e.value) !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Xt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && H(e), i = !1, Ze(r);
    }
  };
}
function $m(n) {
  let e, t, i, r = (
    /*col*/
    n[27].headerName + ""
  ), l, a, s, o, u = (
    /*col*/
    n[27].sortable && Ts(n)
  ), c = (
    /*col*/
    n[27].filter && Os(n)
  );
  return {
    c() {
      e = x("div"), t = x("div"), i = x("span"), l = at(r), a = oe(), u && u.c(), s = oe(), c && c.c(), o = oe(), N(i, "class", "header-title svelte-29x22x"), N(t, "class", "cell-header svelte-29x22x"), N(e, "class", "custom-cell-container svelte-29x22x"), ui(
        e,
        "min-width",
        /*col*/
        n[27].minWidth ?? 0
      );
    },
    m(d, f) {
      B(d, e, f), Q(e, t), Q(t, i), Q(i, l), Q(t, a), u && u.m(t, null), Q(e, s), c && c.m(e, null), B(d, o, f);
    },
    p(d, f) {
      f[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      d[27].headerName + "") && gt(l, r), /*col*/
      d[27].sortable ? u ? u.p(d, f) : (u = Ts(d), u.c(), u.m(t, null)) : u && (u.d(1), u = null), /*col*/
      d[27].filter ? c ? c.p(d, f) : (c = Os(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), f[0] & /*columnDefs*/
      4 && ui(
        e,
        "min-width",
        /*col*/
        d[27].minWidth ?? 0
      );
    },
    d(d) {
      d && (H(e), H(o)), u && u.d(), c && c.d();
    }
  };
}
function Ds(n) {
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
  return e = new Tr({
    props: {
      style: (
        /*col*/
        n[27].headerStyle
      ),
      $$slots: { default: [$m] },
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function ep(n) {
  let e, t, i = jt(
    /*columnDefs*/
    n[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ds(Ss(n, i, a));
  const l = (a) => E(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Xe();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      B(a, e, s), t = !0;
    },
    p(a, s) {
      if (s[0] & /*columnDefs, sortColumnBy, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      6260) {
        i = jt(
          /*columnDefs*/
          a[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Ss(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = Ds(u), r[o].c(), C(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Pe(), o = i.length; o < r.length; o += 1)
          l(o);
        He();
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
        E(r[s]);
      t = !1;
    },
    d(a) {
      a && H(e), ur(r, a);
    }
  };
}
function tp(n) {
  let e, t;
  return e = new ka({
    props: {
      class: "header-row",
      $$slots: { default: [ep] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function np(n) {
  let e, t;
  return e = new Tr({
    props: {
      numeric: (
        /*col*/
        n[27].numeric
      ),
      style: (
        /*col*/
        n[27].cellStyle
      ),
      $$slots: { default: [sp] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ip(n) {
  let e, t;
  return e = new Tr({
    props: {
      $$slots: { default: [bp] },
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function rp(n) {
  let e = (
    /*row*/
    (n[24][
      /*col*/
      n[27].field
    ] ?? "") + ""
  ), t;
  return {
    c() {
      t = at(e);
    },
    m(i, r) {
      B(i, t, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      132 && e !== (e = /*row*/
      (i[24][
        /*col*/
        i[27].field
      ] ?? "") + "") && gt(t, e);
    },
    d(i) {
      i && H(t);
    }
  };
}
function lp(n) {
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
      t = at(e);
    },
    m(i, r) {
      B(i, t, r);
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
      ) + "") && gt(t, e);
    },
    d(i) {
      i && H(t);
    }
  };
}
function sp(n) {
  let e;
  function t(l, a) {
    return (
      /*col*/
      l[27].valueFormatter ? lp : rp
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = Xe();
    },
    m(l, a) {
      r.m(l, a), B(l, e, a);
    },
    p(l, a) {
      i === (i = t(l)) && r ? r.p(l, a) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && H(e), r.d(l);
    }
  };
}
function ap(n) {
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
  return e = new Ar({
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
      $$slots: { default: [_p] },
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function op(n) {
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
  return e = new tc({
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
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function up(n) {
  let e, t;
  return e = new Dh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function cp(n) {
  let e, t;
  return e = new Yh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function dp(n) {
  let e, t;
  return e = new Gh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function fp(n) {
  let e, t;
  return e = new Bh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function hp(n) {
  let e, t;
  return e = new Lh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function mp(n) {
  let e, t;
  return e = new yh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function pp(n) {
  let e, t;
  return e = new Oa({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function gp(n) {
  let e, t;
  return e = new gh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function _p(n) {
  let e, t, i, r;
  const l = [
    gp,
    pp,
    mp,
    hp,
    fp,
    dp,
    cp,
    up
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
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (Pe(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t || (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
function Ms(n) {
  let e, t, i, r;
  const l = [op, ap], a = [];
  function s(o, u) {
    return (
      /*action*/
      o[30].iconComponent ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
function bp(n) {
  let e, t, i = jt(
    /*rowActions*/
    n[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ms(Es(n, i, a));
  const l = (a) => E(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = x("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      N(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, s) {
      B(a, e, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
      t = !0;
    },
    p(a, s) {
      if (s[0] & /*rowActions, $filteredData*/
      136) {
        i = jt(
          /*rowActions*/
          a[3]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Es(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = Ms(u), r[o].c(), C(r[o], 1), r[o].m(e, null));
        }
        for (Pe(), o = i.length; o < r.length; o += 1)
          l(o);
        He();
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
        E(r[s]);
      t = !1;
    },
    d(a) {
      a && H(e), ur(r, a);
    }
  };
}
function Fs(n, e) {
  let t, i, r, l, a;
  const s = [ip, np], o = [];
  function u(c, d) {
    return (
      /*col*/
      c[27].field === "actions" ? 0 : 1
    );
  }
  return i = u(e), r = o[i] = s[i](e), {
    key: n,
    first: null,
    c() {
      t = Xe(), r.c(), l = Xe(), this.first = t;
    },
    m(c, d) {
      B(c, t, d), o[i].m(c, d), B(c, l, d), a = !0;
    },
    p(c, d) {
      e = c;
      let f = i;
      i = u(e), i === f ? o[i].p(e, d) : (Pe(), E(o[f], 1, 1, () => {
        o[f] = null;
      }), He(), r = o[i], r ? r.p(e, d) : (r = o[i] = s[i](e), r.c()), C(r, 1), r.m(l.parentNode, l));
    },
    i(c) {
      a || (C(r), a = !0);
    },
    o(c) {
      E(r), a = !1;
    },
    d(c) {
      c && (H(t), H(l)), o[i].d(c);
    }
  };
}
function Ip(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = jt(
    /*columnDefs*/
    n[2]
  );
  const a = (s) => (
    /*col*/
    s[27].field
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = ys(n, l, s), u = a(o);
    t.set(u, e[s] = Fs(u, o));
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
      B(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      140 && (l = jt(
        /*columnDefs*/
        s[2]
      ), Pe(), e = fr(e, o, a, 1, s, l, t, i.parentNode, dr, Fs, i, ys), He());
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
        E(e[o]);
      r = !1;
    },
    d(s) {
      s && H(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Ns(n, e) {
  let t, i, r;
  return i = new ka({
    props: {
      $$slots: { default: [Ip] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      B(l, t, a), $(i, l, a), r = !0;
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
      E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && H(t), ee(i, l);
    }
  };
}
function vp(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = jt(
    /*$filteredData*/
    n[7]
  );
  const a = (s) => (
    /*index*/
    s[26]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = Cs(n, l, s), u = a(o);
    t.set(u, e[s] = Ns(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = Xe();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      B(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      140 && (l = jt(
        /*$filteredData*/
        s[7]
      ), Pe(), e = fr(e, o, a, 1, s, l, t, i.parentNode, dr, Ns, i, Cs), He());
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
        E(e[o]);
      r = !1;
    },
    d(s) {
      s && H(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Ap(n) {
  let e, t, i, r;
  return e = new Nm({
    props: {
      $$slots: { default: [tp] },
      $$scope: { ctx: n }
    }
  }), i = new Pm({
    props: {
      $$slots: { default: [vp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), B(l, t, a), $(i, l, a), r = !0;
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
      E(e.$$.fragment, l), E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && H(t), ee(e, l), ee(i, l);
    }
  };
}
function Cp(n) {
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
    n[0]), e = new Qm({ props: l }), se.push(() => dt(e, "closed", r)), {
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
        a[0], ct(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
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
function yp(n) {
  let e, t;
  return e = new Dm({
    props: {
      "table$aria-label": (
        /*label*/
        n[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Cp],
        default: [Ap]
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
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ep(n, e, t) {
  let i, r, l, { loadingDone: a = !0 } = e, { label: s = Ra() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: d = [] } = e, f = { name: "", color: "", number: "" }, h = Lt([]);
  rt(n, h, (I) => t(7, l = I));
  let m = Lt(null);
  rt(n, m, (I) => t(5, i = I));
  let b = Lt(null);
  rt(n, b, (I) => t(6, r = I)), c.store.subscribe((I) => {
    t(13, u = [...I]), p();
  });
  function p() {
    let I = u.filter((D) => o.every((O) => {
      const F = f[O.field], z = D[O.field];
      return F ? O.filterType === "number" ? z == F : z.toString().toLowerCase().includes(F.toLowerCase()) : !0;
    }));
    I = A(I), h.set(I);
  }
  function A(I) {
    let D, O;
    return m.subscribe((F) => D = F), b.subscribe((F) => O = F), !D || !O ? I : I.sort((F, z) => {
      let q = F[D], W = z[D];
      return q == null && (q = ""), W == null && (W = ""), O === "asc" ? q.toString().localeCompare(W.toString()) : W.toString().localeCompare(q.toString());
    });
  }
  function v(I) {
    m.update((D) => {
      if (D === I)
        b.update((O) => O === "asc" ? "desc" : O === "desc" ? null : "asc");
      else
        return b.set("asc"), I;
      return I;
    }), p();
  }
  h.set(u);
  function T(I) {
    a = I, t(0, a);
  }
  function y(I) {
    f[I.field] = this.value, t(4, f);
  }
  const k = () => p();
  function R(I) {
    f[I.field] = Vs(this.value), t(4, f);
  }
  const g = () => p(), S = (I) => I.sortable && v(I.field), P = (I, D) => I.callback(D), _ = (I, D) => I.callback(D);
  return n.$$set = (I) => {
    "loadingDone" in I && t(0, a = I.loadingDone), "label" in I && t(1, s = I.label), "columnDefs" in I && t(2, o = I.columnDefs), "rowData" in I && t(13, u = I.rowData), "store" in I && t(14, c = I.store), "rowActions" in I && t(3, d = I.rowActions);
  }, [
    a,
    s,
    o,
    d,
    f,
    i,
    r,
    l,
    h,
    m,
    b,
    p,
    v,
    u,
    c,
    T,
    y,
    k,
    R,
    g,
    S,
    P,
    _
  ];
}
class Da extends De {
  constructor(e) {
    super(), ke(
      this,
      e,
      Ep,
      yp,
      be,
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
function Sp(n) {
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
        "mdc-card": !0,
        "mdc-card--outlined": (
          /*variant*/
          n[2] === "outlined"
        ),
        "smui-card--padded": (
          /*padded*/
          n[3]
        )
      })
    },
    /*$$restProps*/
    n[6]
  ], c = {};
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = x("div"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      B(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        de(i = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[5].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      256) && Oe(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? Le(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Re(
          /*$$scope*/
          d[8]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className, variant, padded*/
        14 && t !== (t = re({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-card": !0,
          "mdc-card--outlined": (
            /*variant*/
            d[2] === "outlined"
          ),
          "smui-card--padded": (
            /*padded*/
            d[3]
          )
        }))) && { class: t },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        d[6]
      ])), i && pe(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (C(o, d), r = !0);
    },
    o(d) {
      E(o, d), r = !1;
    },
    d(d) {
      d && H(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function Tp(n, e, t) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { padded: d = !1 } = e, f;
  function h() {
    return f;
  }
  function m(b) {
    se[b ? "unshift" : "push"](() => {
      f = b, t(4, f);
    });
  }
  return n.$$set = (b) => {
    e = Y(Y({}, e), tt(b)), t(6, r = me(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "variant" in b && t(2, c = b.variant), "padded" in b && t(3, d = b.padded), "$$scope" in b && t(8, a = b.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    s,
    r,
    h,
    a,
    l,
    m
  ];
}
class Ma extends De {
  constructor(e) {
    super(), ke(this, e, Tp, Sp, be, {
      use: 0,
      class: 1,
      variant: 2,
      padded: 3,
      getElement: 7
    });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
At({
  class: "smui-card__content",
  tag: "div"
});
At({
  class: "mdc-card__media-content",
  tag: "div"
});
At({
  class: "mdc-card__action-buttons",
  tag: "div"
});
At({
  class: "mdc-card__action-icons",
  tag: "div"
});
function Lp(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f;
  function h(v) {
    n[14](v);
  }
  function m(v) {
    n[15](v);
  }
  let b = { label: "Location" };
  /*locations*/
  n[3] !== void 0 && (b.data = /*locations*/
  n[3]), /*selectedLocationUUID*/
  n[2] !== void 0 && (b.value = /*selectedLocationUUID*/
  n[2]), t = new Cr({ props: b }), se.push(() => dt(t, "data", h)), se.push(() => dt(t, "value", m));
  function p(v) {
    n[17](v);
  }
  let A = {
    title: "Search",
    $$slots: { content: [Fp] },
    $$scope: { ctx: n }
  };
  return (
    /*searchOpen*/
    n[4] !== void 0 && (A.open = /*searchOpen*/
    n[4]), s = new Em({ props: A }), se.push(() => dt(s, "open", p)), s.$on(
      "click",
      /*toggleSearchPanel*/
      n[13]
    ), d = new Ma({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [Np] },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = x("div"), te(t.$$.fragment), l = oe(), a = x("div"), te(s.$$.fragment), u = oe(), c = x("div"), te(d.$$.fragment), N(a, "class", "search-filter svelte-cft5xm"), N(c, "class", "table-container"), N(e, "class", "location-viewer-container");
      },
      m(v, T) {
        B(v, e, T), $(t, e, null), Q(e, l), Q(e, a), $(s, a, null), Q(e, u), Q(e, c), $(d, c, null), f = !0;
      },
      p(v, T) {
        const y = {};
        !i && T & /*locations*/
        8 && (i = !0, y.data = /*locations*/
        v[3], ct(() => i = !1)), !r && T & /*selectedLocationUUID*/
        4 && (r = !0, y.value = /*selectedLocationUUID*/
        v[2], ct(() => r = !1)), t.$set(y);
        const k = {};
        T & /*$$scope, searchResourceStore, filtersToSearch*/
        8388674 && (k.$$scope = { dirty: T, ctx: v }), !o && T & /*searchOpen*/
        16 && (o = !0, k.open = /*searchOpen*/
        v[4], ct(() => o = !1)), s.$set(k);
        const R = {};
        T & /*$$scope, locationResourceStore, selectedLocationUUID, locations*/
        8388621 && (R.$$scope = { dirty: T, ctx: v }), d.$set(R);
      },
      i(v) {
        f || (C(t.$$.fragment, v), C(s.$$.fragment, v), C(d.$$.fragment, v), f = !0);
      },
      o(v) {
        E(t.$$.fragment, v), E(s.$$.fragment, v), E(d.$$.fragment, v), f = !1;
      },
      d(v) {
        v && H(e), ee(t), ee(s), ee(d);
      }
    }
  );
}
function Op(n) {
  let e, t;
  return e = new gm({
    props: { loadingDone: !/*loading*/
    n[5] }
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
      32 && (l.loadingDone = !/*loading*/
      i[5]), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Rp(n) {
  let e;
  return {
    c() {
      e = at("Search");
    },
    m(t, i) {
      B(t, e, i);
    },
    d(t) {
      t && H(e);
    }
  };
}
function kp(n) {
  let e, t, i, r;
  return e = new Uh({}), i = new ku({
    props: {
      $$slots: { default: [Rp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = oe(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), B(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      8388608 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (C(e.$$.fragment, l), C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      E(e.$$.fragment, l), E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && H(t), ee(e, l), ee(i, l);
    }
  };
}
function Dp(n) {
  let e, t;
  return e = new Ar({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        n[12]
      ),
      $$slots: { default: [kp] },
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
      r & /*$$scope*/
      8388608 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Mp(n) {
  let e, t, i, r;
  return i = new Da({
    props: {
      columnDefs: (
        /*searchColumnDefs*/
        n[7]
      ),
      store: (
        /*searchResourceStore*/
        n[1]
      ),
      rowActions: (
        /*searchRowActions*/
        n[11]
      )
    }
  }), {
    c() {
      e = x("h3"), e.textContent = "Search Result", t = oe(), te(i.$$.fragment), ui(e, "margin-bottom", "1rem");
    },
    m(l, a) {
      B(l, e, a), B(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*searchResourceStore*/
      2 && (s.store = /*searchResourceStore*/
      l[1]), i.$set(s);
    },
    i(l) {
      r || (C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      E(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && (H(e), H(t)), ee(i, l);
    }
  };
}
function Fp(n) {
  let e, t, i, r, l, a, s, o;
  function u(d) {
    n[16](d);
  }
  let c = {
    filterTypes: (
      /*filterTypes*/
      n[9]
    ),
    $$slots: {
      "filter-controls": [Dp]
    },
    $$scope: { ctx: n }
  };
  return (
    /*filtersToSearch*/
    n[6] !== void 0 && (c.activeFilters = /*filtersToSearch*/
    n[6]), i = new hm({ props: c }), se.push(() => dt(i, "activeFilters", u)), s = new Ma({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [Mp] },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = x("div"), t = x("div"), te(i.$$.fragment), l = oe(), a = x("div"), te(s.$$.fragment), N(t, "class", "filter-box svelte-cft5xm"), N(a, "class", "table-container"), N(e, "slot", "content");
      },
      m(d, f) {
        B(d, e, f), Q(e, t), $(i, t, null), Q(e, l), Q(e, a), $(s, a, null), o = !0;
      },
      p(d, f) {
        const h = {};
        f & /*$$scope*/
        8388608 && (h.$$scope = { dirty: f, ctx: d }), !r && f & /*filtersToSearch*/
        64 && (r = !0, h.activeFilters = /*filtersToSearch*/
        d[6], ct(() => r = !1)), i.$set(h);
        const m = {};
        f & /*$$scope, searchResourceStore*/
        8388610 && (m.$$scope = { dirty: f, ctx: d }), s.$set(m);
      },
      i(d) {
        o || (C(i.$$.fragment, d), C(s.$$.fragment, d), o = !0);
      },
      o(d) {
        E(i.$$.fragment, d), E(s.$$.fragment, d), o = !1;
      },
      d(d) {
        d && H(e), ee(i), ee(s);
      }
    }
  );
}
function Np(n) {
  var s;
  let e, t = (
    /*selectedLocationUUID*/
    n[2] ? `Location: ${/*locations*/
    (s = n[3].find(
      /*func*/
      n[18]
    )) == null ? void 0 : s.label}` : "Select Location"
  ), i, r, l, a;
  return l = new Da({
    props: {
      columnDefs: (
        /*locationColumnDefs*/
        n[8]
      ),
      store: (
        /*locationResourceStore*/
        n[0]
      ),
      rowActions: (
        /*locationRowActions*/
        n[10]
      )
    }
  }), {
    c() {
      e = x("h3"), i = at(t), r = oe(), te(l.$$.fragment), ui(e, "margin-bottom", "1rem");
    },
    m(o, u) {
      B(o, e, u), Q(e, i), B(o, r, u), $(l, o, u), a = !0;
    },
    p(o, u) {
      var d;
      (!a || u & /*selectedLocationUUID, locations*/
      12) && t !== (t = /*selectedLocationUUID*/
      o[2] ? `Location: ${/*locations*/
      (d = o[3].find(
        /*func*/
        o[18]
      )) == null ? void 0 : d.label}` : "Select Location") && gt(i, t);
      const c = {};
      u & /*locationResourceStore*/
      1 && (c.store = /*locationResourceStore*/
      o[0]), l.$set(c);
    },
    i(o) {
      a || (C(l.$$.fragment, o), a = !0);
    },
    o(o) {
      E(l.$$.fragment, o), a = !1;
    },
    d(o) {
      o && (H(e), H(r)), ee(l, o);
    }
  };
}
function Up(n) {
  let e, t, i, r;
  const l = [Op, Lp], a = [];
  function s(o, u) {
    return (
      /*loading*/
      o[5] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), E(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      E(t), r = !1;
    },
    d(o) {
      o && H(i), a[e].d(o);
    }
  };
}
function Us(n) {
  return new Date(n).toLocaleDateString();
}
function wp(n) {
  const e = {
    uuid: null,
    type: null,
    name: null,
    location: null,
    author: null,
    from: null,
    to: null
  };
  return console.log("Convert filter to search params: ", n), n.forEach((t) => {
    console.log("KEY:", t.key), t.key === "from" || t.key === "to" ? e[t.key] = new Date(t.value).toISOString() : e[t.key] = t.value;
  }), e;
}
function Pp(n, e, t) {
  const i = kn.getInstance();
  let r = [], l, a = !1, s = !0;
  st(() => {
    setTimeout(
      () => {
        t(5, s = !1);
      },
      1e3
    );
  }), st(() => {
    i.getLocations().subscribe({
      next: (_) => {
        t(3, r = _.map((I) => ({ label: I.name, value: I.uuid })));
      }
    });
  });
  let { locationResourceStore: o = new wr() } = e, { searchResourceStore: u = new wr() } = e;
  const c = [
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: "Name",
      field: "name",
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
      headerName: "Type",
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Location",
      field: "location",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: f
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
      headerName: "Changed At",
      field: "changedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: Us
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
  ], d = [
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: "Name",
      field: "name",
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
      headerName: "Type",
      field: "type",
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
      headerName: "Changed At",
      field: "changedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: Us
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
  ];
  function f(_) {
    if (!r || !_)
      return _ || "";
    const I = r.find((D) => D.value === _);
    return console.log("foundlocation", {
      foundLocation: I,
      bool: (I == null ? void 0 : I.label) !== void 0
    }), I != null && I.label ? I.label : _;
  }
  const h = [
    {
      id: 1,
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
      id: 2,
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
    },
    {
      id: 3,
      label: "Name",
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
      label: "Location",
      inputType: {
        id: 1,
        type: "string",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    },
    {
      id: 5,
      label: "Author",
      inputType: {
        id: 1,
        type: "string",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    },
    {
      id: 6,
      label: "from",
      inputType: {
        id: 1,
        type: "datepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    },
    {
      id: 7,
      label: "to",
      inputType: {
        id: 1,
        type: "datepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    }
  ], m = [
    {
      icon: "remove",
      callback: (_) => v(_),
      disabled: () => !1
    }
  ], b = [
    {
      icon: "add",
      callback: (_) => A(_),
      disabled: () => !1
    }
  ];
  let p = [];
  function A(_) {
    i.assignResourceToLocation(l, _.uuid).subscribe({
      next: () => {
        u.remove(_.uuid), o.add(Object.assign(Object.assign({}, _), { location: l }));
      }
    });
  }
  function v(_) {
    i.unassignResourceFromLocation(l, _.uuid).subscribe({
      next: () => {
        o.remove(_.uuid);
      }
    });
  }
  function T() {
    const _ = wp(p);
    i.searchResources(_).pipe(ko(1), Do((I) => {
      u.set(I.filter((D) => D.location !== l));
    })).subscribe();
  }
  function y() {
    t(4, a = !a);
  }
  function k(_) {
    r = _, t(3, r);
  }
  function R(_) {
    l = _, t(2, l);
  }
  function g(_) {
    p = _, t(6, p);
  }
  function S(_) {
    a = _, t(4, a);
  }
  const P = (_) => _.value === l;
  return n.$$set = (_) => {
    "locationResourceStore" in _ && t(0, o = _.locationResourceStore), "searchResourceStore" in _ && t(1, u = _.searchResourceStore);
  }, n.$$.update = () => {
    n.$$.dirty & /*selectedLocationUUID, locationResourceStore*/
    5 && l && i.searchResources({}).subscribe({
      next: (_) => {
        console.log({
          data: _,
          selectedLocation: l
        }), o.set(_.filter((I) => I.location === l));
      },
      error: (_) => {
        console.error("Error loading resources:", _);
      }
    });
  }, [
    o,
    u,
    l,
    r,
    a,
    s,
    p,
    c,
    d,
    h,
    m,
    b,
    T,
    y,
    k,
    R,
    g,
    S,
    P
  ];
}
class Hp extends De {
  constructor(e) {
    super(), ke(this, e, Pp, Up, be, {
      locationResourceStore: 0,
      searchResourceStore: 1
    });
  }
}
function ws(n) {
  let e, t;
  return e = new Hp({}), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      E(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Bp(n) {
  let e, t, i, r, l, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && ws()
  );
  return {
    c() {
      a && a.c(), e = oe(), t = x("input"), i = oe(), r = x("input"), N(t, "type", "hidden"), N(t, "name", "package-name"), t.value = Ks, N(r, "type", "hidden"), N(r, "name", "package-version"), r.value = Ws;
    },
    m(s, o) {
      a && a.m(s, o), B(s, e, o), B(s, t, o), B(s, i, o), B(s, r, o), l = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? a ? o & /*doc, dev*/
      3 && C(a, 1) : (a = ws(), a.c(), C(a, 1), a.m(e.parentNode, e)) : a && (Pe(), E(a, 1, 1, () => {
        a = null;
      }), He());
    },
    i(s) {
      l || (C(a), l = !0);
    },
    o(s) {
      E(a), l = !1;
    },
    d(s) {
      s && (H(e), H(t), H(i), H(r)), a && a.d(s);
    }
  };
}
function Vp(n, e, t) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return n.$$set = (l) => {
    "doc" in l && t(0, i = l.doc), "dev" in l && t(1, r = l.dev);
  }, [i, r];
}
class jp extends De {
  constructor(e) {
    super(), ke(this, e, Vp, Bp, be, { doc: 0, dev: 1 });
  }
}
class Xp extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new jp({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = qp();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function qp() {
  const n = `${Ks}-v${Ws}-style`, e = Gp(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Gp() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Xp as default
};
