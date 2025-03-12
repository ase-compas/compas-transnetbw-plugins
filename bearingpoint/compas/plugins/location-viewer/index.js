var Da = Object.defineProperty;
var Ma = (n, e, t) => e in n ? Da(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Vi = (n, e, t) => (Ma(n, typeof e != "symbol" ? e + "" : e, t), t), Fa = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var mn = (n, e, t) => (Fa(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Lr = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
function nt() {
}
function z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Ns(n) {
  return n();
}
function Or() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(n) {
  n.forEach(Ns);
}
function me(n) {
  return typeof n == "function";
}
function Ie(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Na(n) {
  return Object.keys(n).length === 0;
}
function Us(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return nt;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Ua(n) {
  let e;
  return Us(n, (t) => e = t)(), e;
}
function rt(n, e, t) {
  n.$$.on_destroy.push(Us(e, t));
}
function ye(n, e, t, i) {
  if (n) {
    const r = ws(n, e, t, i);
    return n[0](r);
  }
}
function ws(n, e, t, i) {
  return n[1] && i ? z(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function Ee(n, e, t, i) {
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
function Se(n, e, t, i, r, l) {
  if (r) {
    const a = ws(e, t, i, l);
    n.p(a, r);
  }
}
function Te(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function et(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function fe(n, e) {
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
function ce(n) {
  return n && me(n.destroy) ? n.destroy : nt;
}
const wa = ["", !0, 1, "true", "contenteditable"], Pa = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function x(n, e) {
  n.appendChild(e);
}
function j(n, e, t) {
  n.insertBefore(e, t || null);
}
function V(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ur(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function ie(n) {
  return document.createElement(n);
}
function lt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ut(n) {
  return document.createTextNode(n);
}
function ue() {
  return ut(" ");
}
function Xe() {
  return ut("");
}
function he(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function H(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ha = ["width", "height"];
function oe(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && Ha.indexOf(i) === -1 ? n[i] = e[i] : H(n, i, e[i]);
}
function Rr(n, e) {
  for (const t in e)
    H(n, t, e[t]);
}
function Ba(n, e) {
  Object.keys(e).forEach((t) => {
    Va(n, t, e[t]);
  });
}
function Va(n, e, t) {
  const i = e.toLowerCase();
  i in n ? n[i] = typeof n[i] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : H(n, e, t);
}
function oi(n) {
  return /-/.test(n) ? Ba : oe;
}
function Ps(n) {
  return n === "" ? null : +n;
}
function ja(n) {
  return Array.from(n.childNodes);
}
function Ct(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function qa(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function Ga(n, e, t) {
  ~wa.indexOf(t) ? qa(n, e) : Ct(n, e);
}
function dn(n, e) {
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
function at(n) {
  xe().$$.on_mount.push(n);
}
function Zt(n) {
  xe().$$.on_destroy.push(n);
}
function qe(n, e) {
  return xe().$$.context.set(n, e), e;
}
function Ge(n) {
  return xe().$$.context.get(n);
}
function Pn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const kn = [], se = [];
let Nn = [];
const er = [], Hs = /* @__PURE__ */ Promise.resolve();
let tr = !1;
function Bs() {
  tr || (tr = !0, Hs.then(Vs));
}
function cr() {
  return Bs(), Hs;
}
function nr(n) {
  Nn.push(n);
}
function ft(n) {
  er.push(n);
}
const ji = /* @__PURE__ */ new Set();
let Tn = 0;
function Vs() {
  if (Tn !== 0)
    return;
  const n = Zn;
  do {
    try {
      for (; Tn < kn.length; ) {
        const e = kn[Tn];
        Tn++, Xn(e), Ka(e.$$);
      }
    } catch (e) {
      throw kn.length = 0, Tn = 0, e;
    }
    for (Xn(null), kn.length = 0, Tn = 0; se.length; )
      se.pop()();
    for (let e = 0; e < Nn.length; e += 1) {
      const t = Nn[e];
      ji.has(t) || (ji.add(t), t());
    }
    Nn.length = 0;
  } while (kn.length);
  for (; er.length; )
    er.pop()();
  tr = !1, ji.clear(), Xn(n);
}
function Ka(n) {
  if (n.fragment !== null) {
    n.update(), Ze(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(nr);
  }
}
function Wa(n) {
  const e = [], t = [];
  Nn.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Nn = e;
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
function S(n, e, t, i) {
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
  S(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function fr(n, e, t, i, r, l, a, s, o, u, c, d) {
  let f = n.length, h = l.length, m = f;
  const _ = {};
  for (; m--; )
    _[n[m].key] = m;
  const p = [], I = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), R = [];
  for (m = h; m--; ) {
    const g = d(r, l, m), y = t(g);
    let D = a.get(y);
    D ? R.push(() => D.p(g, e)) : (D = u(y, g), D.c()), I.set(y, p[m] = D), y in _ && b.set(y, Math.abs(m - _[y]));
  }
  const E = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function k(g) {
    C(g, 1), g.m(s, c), a.set(g.key, g), c = g.first, h--;
  }
  for (; f && h; ) {
    const g = p[h - 1], y = n[f - 1], D = g.key, A = y.key;
    g === y ? (c = g.first, f--, h--) : I.has(A) ? !a.has(D) || E.has(D) ? k(g) : L.has(A) ? f-- : b.get(D) > b.get(A) ? (L.add(D), k(g)) : (E.add(A), f--) : (o(y, a), f--);
  }
  for (; f--; ) {
    const g = n[f];
    I.has(g.key) || o(g, a);
  }
  for (; h; )
    k(p[h - 1]);
  return Ze(R), p;
}
function de(n, e) {
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
function ht(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function te(n) {
  n && n.c();
}
function $(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), nr(() => {
    const l = n.$$.on_mount.map(Ns).filter(me);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Ze(l), n.$$.on_mount = [];
  }), r.forEach(nr);
}
function ee(n, e) {
  const t = n.$$;
  t.fragment !== null && (Wa(t.after_update), Ze(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function za(n, e) {
  n.$$.dirty[0] === -1 && (kn.push(n), Bs(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Oe(n, e, t, i, r, l, a = null, s = [-1]) {
  const o = Zn;
  Xn(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: nt,
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
    return u.ctx && r(u.ctx[d], u.ctx[d] = m) && (!u.skip_bound && u.bound[d] && u.bound[d](m), c && za(n, d)), f;
  }) : [], u.update(), c = !0, Ze(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = ja(e.target);
      u.fragment && u.fragment.l(d), d.forEach(V);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), $(n, e.target, e.anchor), Vs();
  }
  Xn(o);
}
class Re {
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
    ee(this, 1), this.$destroy = nt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!me(t))
      return nt;
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
    this.$$set && !Na(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ya = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ya);
const js = "location-viewer", qs = "0.0.1";
var ir = function(n, e) {
  return ir = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, ir(n, e);
};
function ct(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ir(n, e);
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
function Gs(n, e, t, i) {
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
function Hn(n, e) {
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
function Un(n) {
  return this instanceof Un ? (this.v = n, this) : new Un(n);
}
function Xa(n, e, t) {
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
    i[h] && (r[h] = function(_) {
      return new Promise(function(p, I) {
        l.push([h, _, p, I]) > 1 || o(h, _);
      });
    }, m && (r[h] = m(r[h])));
  }
  function o(h, m) {
    try {
      u(i[h](m));
    } catch (_) {
      f(l[0][3], _);
    }
  }
  function u(h) {
    h.value instanceof Un ? Promise.resolve(h.value.v).then(c, d) : f(l[0][2], h);
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
function Za(n) {
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
function It(n) {
  return typeof n == "function";
}
function Ks(n) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var qi = Ks(function(n) {
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
      if (It(c))
        try {
          c();
        } catch (_) {
          l = _ instanceof qi ? _.errors : [_];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = yt(d), h = f.next(); !h.done; h = f.next()) {
            var m = h.value;
            try {
              Dr(m);
            } catch (_) {
              l = l ?? [], _ instanceof qi ? l = Qn(Qn([], Hn(l)), Hn(_.errors)) : l.push(_);
            }
          }
        } catch (_) {
          i = { error: _ };
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
function Ws(n) {
  return n instanceof mr || n && "closed" in n && It(n.remove) && It(n.add) && It(n.unsubscribe);
}
function Dr(n) {
  It(n) ? n() : n.unsubscribe();
}
var Qa = {
  Promise: void 0
}, Ja = {
  setTimeout: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Qn([n, e], Hn(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function zs(n) {
  Ja.setTimeout(function() {
    throw n;
  });
}
function Mr() {
}
function xa(n) {
  n();
}
var pr = function(n) {
  ct(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return i.isStopped = !1, t ? (i.destination = t, Ws(t) && t.add(i)) : i.destination = to, i;
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
}(mr), $a = function() {
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
  ct(e, n);
  function e(t, i, r) {
    var l = n.call(this) || this, a;
    return It(t) || !t ? a = {
      next: t ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = t, l.destination = new $a(a), l;
  }
  return e;
}(pr);
function ti(n) {
  zs(n);
}
function eo(n) {
  throw n;
}
var to = {
  closed: !0,
  next: Mr,
  error: eo,
  complete: Mr
}, gr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ys(n) {
  return n;
}
function no(n) {
  return n.length === 0 ? Ys : n.length === 1 ? n[0] : function(t) {
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
    var r = this, l = ro(e) ? e : new rr(e, t, i);
    return xa(function() {
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
    return no(e)(this);
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
  return (e = n ?? Qa.Promise) !== null && e !== void 0 ? e : Promise;
}
function io(n) {
  return n && It(n.next) && It(n.error) && It(n.complete);
}
function ro(n) {
  return n && n instanceof pr || io(n) && Ws(n);
}
function lo(n) {
  return It(n == null ? void 0 : n.lift);
}
function yn(n) {
  return function(e) {
    if (lo(e))
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
function Bn(n, e, t, i, r) {
  return new so(n, e, t, i, r);
}
var so = function(n) {
  ct(e, n);
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
}(pr), ao = new zt(function(n) {
  return n.complete();
});
function oo(n) {
  return n && It(n.schedule);
}
function uo(n) {
  return n[n.length - 1];
}
function co(n) {
  return oo(uo(n)) ? n.pop() : void 0;
}
var Xs = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function Zs(n) {
  return It(n == null ? void 0 : n.then);
}
function Qs(n) {
  return It(n[gr]);
}
function Js(n) {
  return Symbol.asyncIterator && It(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function xs(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function fo() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var $s = fo();
function ea(n) {
  return It(n == null ? void 0 : n[$s]);
}
function ta(n) {
  return Xa(this, arguments, function() {
    var t, i, r, l;
    return hr(this, function(a) {
      switch (a.label) {
        case 0:
          t = n.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, Un(t.read())];
        case 3:
          return i = a.sent(), r = i.value, l = i.done, l ? [4, Un(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, Un(r)];
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
function na(n) {
  return It(n == null ? void 0 : n.getReader);
}
function Jn(n) {
  if (n instanceof zt)
    return n;
  if (n != null) {
    if (Qs(n))
      return ho(n);
    if (Xs(n))
      return mo(n);
    if (Zs(n))
      return po(n);
    if (Js(n))
      return ia(n);
    if (ea(n))
      return go(n);
    if (na(n))
      return _o(n);
  }
  throw xs(n);
}
function ho(n) {
  return new zt(function(e) {
    var t = n[gr]();
    if (It(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function mo(n) {
  return new zt(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function po(n) {
  return new zt(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, zs);
  });
}
function go(n) {
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
function ia(n) {
  return new zt(function(e) {
    bo(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function _o(n) {
  return ia(ta(n));
}
function bo(n, e) {
  var t, i, r, l;
  return Gs(this, void 0, void 0, function() {
    var a, s;
    return hr(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), t = Za(n), o.label = 1;
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
function ra(n, e) {
  return e === void 0 && (e = 0), yn(function(t, i) {
    t.subscribe(Bn(i, function(r) {
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
function la(n, e) {
  return e === void 0 && (e = 0), yn(function(t, i) {
    i.add(n.schedule(function() {
      return t.subscribe(i);
    }, e));
  });
}
function Io(n, e) {
  return Jn(n).pipe(la(e), ra(e));
}
function vo(n, e) {
  return Jn(n).pipe(la(e), ra(e));
}
function Ao(n, e) {
  return new zt(function(t) {
    var i = 0;
    return e.schedule(function() {
      i === n.length ? t.complete() : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function Co(n, e) {
  return new zt(function(t) {
    var i;
    return An(t, e, function() {
      i = n[$s](), An(t, e, function() {
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
      return It(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function sa(n, e) {
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
function yo(n, e) {
  return sa(ta(n), e);
}
function Eo(n, e) {
  if (n != null) {
    if (Qs(n))
      return Io(n, e);
    if (Xs(n))
      return Ao(n, e);
    if (Zs(n))
      return vo(n, e);
    if (Js(n))
      return sa(n, e);
    if (ea(n))
      return Co(n, e);
    if (na(n))
      return yo(n, e);
  }
  throw xs(n);
}
function So(n, e) {
  return e ? Eo(n, e) : Jn(n);
}
function aa() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = co(n);
  return So(n, t);
}
function Mt(n, e) {
  return yn(function(t, i) {
    var r = 0;
    t.subscribe(Bn(i, function(l) {
      i.next(n.call(e, l, r++));
    }));
  });
}
function To(n, e, t, i, r, l, a, s) {
  var o = [], u = 0, c = 0, d = !1, f = function() {
    d && !o.length && !u && e.complete();
  }, h = function(_) {
    return u < i ? m(_) : o.push(_);
  }, m = function(_) {
    u++;
    var p = !1;
    Jn(t(_, c++)).subscribe(Bn(e, function(I) {
      e.next(I);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var I = function() {
            var b = o.shift();
            a || m(b);
          }; o.length && u < i; )
            I();
          f();
        } catch (b) {
          e.error(b);
        }
    }));
  };
  return n.subscribe(Bn(e, h, function() {
    d = !0, f();
  })), function() {
  };
}
function lr(n, e, t) {
  return t === void 0 && (t = 1 / 0), It(e) ? lr(function(i, r) {
    return Mt(function(l, a) {
      return e(i, l, r, a);
    })(Jn(n(i, r)));
  }, t) : (typeof e == "number" && (t = e), yn(function(i, r) {
    return To(i, r, n, t);
  }));
}
function oa(n, e) {
  return It(e) ? lr(n, e, 1) : lr(n, 1);
}
function Lo(n) {
  return n <= 0 ? function() {
    return ao;
  } : yn(function(e, t) {
    var i = 0;
    e.subscribe(Bn(t, function(r) {
      ++i <= n && (t.next(r), n <= i && t.complete());
    }));
  });
}
function Oo(n) {
  return yn(function(e, t) {
    try {
      e.subscribe(t);
    } finally {
      t.add(n);
    }
  });
}
function Ro(n, e, t) {
  var i = It(n) || e || t ? { next: n, error: e, complete: t } : n;
  return i ? yn(function(r, l) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var s = !0;
    r.subscribe(Bn(l, function(o) {
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
  }) : Ys;
}
function ua(n) {
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
var ko = /* @__PURE__ */ function() {
  function n(e, t, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = t, this.request = i, this.type = r;
    var l = t.status, a = t.responseType;
    this.status = l ?? 0, this.responseType = a ?? "";
    var s = t.getAllResponseHeaders();
    this.responseHeaders = s ? s.split(`
`).reduce(function(c, d) {
      var f = d.indexOf(": ");
      return c[d.slice(0, f)] = d.slice(f + 2), c;
    }, {}) : {}, this.response = ua(t);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return n;
}(), ci = Ks(function(n) {
  return function(t, i, r) {
    this.message = t, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var l;
    try {
      l = ua(i);
    } catch {
      l = i.responseText;
    }
    this.response = l;
  };
}), Do = function() {
  function n(e, t) {
    return ci.call(this, "ajax timeout", e, t), this.name = "AjaxTimeoutError", this;
  }
  return n.prototype = Object.create(ci.prototype), n;
}();
function Mo(n, e) {
  return fn({ method: "GET", url: n, headers: e });
}
function Fo(n, e, t) {
  return fn({ method: "POST", url: n, body: e, headers: t });
}
function No(n, e) {
  return fn({ method: "DELETE", url: n, headers: e });
}
function Uo(n, e, t) {
  return fn({ method: "PUT", url: n, body: e, headers: t });
}
function wo(n, e, t) {
  return fn({ method: "PATCH", url: n, body: e, headers: t });
}
var Po = Mt(function(n) {
  return n.response;
});
function Ho(n, e) {
  return Po(fn({
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
    return Vo(t);
  };
  return n.get = Mo, n.post = Fo, n.delete = No, n.put = Uo, n.patch = wo, n.getJSON = Ho, n;
}(), Bo = "upload", Nr = "download", Gi = "loadstart", Ki = "progress", Ur = "load";
function Vo(n) {
  return new zt(function(e) {
    var t, i, r = Ke({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, n), l = r.queryParams, a = r.body, s = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (l) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(l).forEach(function(B, M) {
          return u.set(M, B);
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
    var m = r.withCredentials, _ = r.xsrfCookieName, p = r.xsrfHeaderName;
    if ((m || !h) && _ && p) {
      var I = (i = (t = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"))) === null || t === void 0 ? void 0 : t.pop()) !== null && i !== void 0 ? i : "";
      I && (d[p] = I);
    }
    var b = jo(a, d), R = Ke(Ke({}, r), {
      url: o,
      headers: d,
      body: b
    }), E;
    E = n.createXHR ? n.createXHR() : new XMLHttpRequest();
    {
      var L = n.progressSubscriber, k = n.includeDownloadProgress, g = k === void 0 ? !1 : k, y = n.includeUploadProgress, D = y === void 0 ? !1 : y, A = function(B, M) {
        E.addEventListener(B, function() {
          var T, Z = M();
          (T = L == null ? void 0 : L.error) === null || T === void 0 || T.call(L, Z), e.error(Z);
        });
      };
      A("timeout", function() {
        return new Do(E, R);
      }), A("abort", function() {
        return new ci("aborted", E, R);
      });
      var v = function(B, M) {
        return new ko(M, E, R, B + "_" + M.type);
      }, F = function(B, M, T) {
        B.addEventListener(M, function(Z) {
          e.next(v(T, Z));
        });
      };
      D && [Gi, Ki, Ur].forEach(function(B) {
        return F(E.upload, B, Bo);
      }), L && [Gi, Ki].forEach(function(B) {
        return E.upload.addEventListener(B, function(M) {
          var T;
          return (T = L == null ? void 0 : L.next) === null || T === void 0 ? void 0 : T.call(L, M);
        });
      }), g && [Gi, Ki].forEach(function(B) {
        return F(E, B, Nr);
      });
      var O = function(B) {
        var M = "ajax error" + (B ? " " + B : "");
        e.error(new ci(M, E, R));
      };
      E.addEventListener("error", function(B) {
        var M;
        (M = L == null ? void 0 : L.error) === null || M === void 0 || M.call(L, B), O();
      }), E.addEventListener(Ur, function(B) {
        var M, T, Z = E.status;
        if (Z < 400) {
          (M = L == null ? void 0 : L.complete) === null || M === void 0 || M.call(L);
          var Fe = void 0;
          try {
            Fe = v(Nr, B);
          } catch (Me) {
            e.error(Me);
            return;
          }
          e.next(Fe), e.complete();
        } else
          (T = L == null ? void 0 : L.error) === null || T === void 0 || T.call(L, B), O(Z);
      });
    }
    var U = R.user, W = R.method, N = R.async;
    U ? E.open(W, o, N, U, R.password) : E.open(W, o, N), N && (E.timeout = R.timeout, E.responseType = R.responseType), "withCredentials" in E && (E.withCredentials = R.withCredentials);
    for (var f in d)
      d.hasOwnProperty(f) && E.setRequestHeader(f, d[f]);
    return b ? E.send(b) : E.send(), function() {
      E && E.readyState !== 4 && E.abort();
    };
  });
}
function jo(n, e) {
  var t;
  if (!n || typeof n == "string" || Yo(n) || Xo(n) || Go(n) || Ko(n) || Wo(n) || Zo(n))
    return n;
  if (zo(n))
    return n.buffer;
  if (typeof n == "object")
    return e["content-type"] = (t = e["content-type"]) !== null && t !== void 0 ? t : "application/json;charset=utf-8", JSON.stringify(n);
  throw new TypeError("Unknown body type");
}
var qo = Object.prototype.toString;
function _r(n, e) {
  return qo.call(n) === "[object " + e + "]";
}
function Go(n) {
  return _r(n, "ArrayBuffer");
}
function Ko(n) {
  return _r(n, "File");
}
function Wo(n) {
  return _r(n, "Blob");
}
function zo(n) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(n);
}
function Yo(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Xo(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function Zo(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
let Qo = class {
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
const Jo = new Qo("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), xo = [Jo], $o = xo[0].getUrl();
let ca = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? $o;
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
}, eu = class {
  constructor(e = new ca()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${tu(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => aa(t).pipe(
      Mt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      oa(
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
const vn = (n) => encodeURIComponent(`${n}`), tu = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${vn(e)}=${vn(i)}`).join("&") : `${vn(e)}=${vn(t)}`
).join("&"), ni = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class nu extends eu {
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
class iu {
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
const ru = new iu("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), lu = [ru], su = lu[0].getUrl();
class da {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? su;
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
class au {
  constructor(e = new da()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${ou(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => aa(t).pipe(
      Mt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      oa(
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
const Kt = (n) => encodeURIComponent(`${n}`), ou = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${Kt(e)}=${Kt(i)}`).join("&") : `${Kt(e)}=${Kt(t)}`
).join("&"), Jt = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class uu extends au {
  assignResourceToLocation({ locationId: e, uuid: t }, i) {
    Jt(e, "locationId", "assignResourceToLocation"), Jt(t, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Kt(e)).replace("{uuid}", Kt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, t) {
    Jt(e, "location", "createLocation");
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
    Jt(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Kt(e)),
      method: "DELETE",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  getLocation({ locationId: e }, t) {
    Jt(e, "locationId", "getLocation");
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
    Jt(e, "locationId", "unassignResourceFromLocation"), Jt(t, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Kt(e)).replace("{uuid}", Kt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: t }, i) {
    Jt(e, "locationId", "updateLocation"), Jt(t, "location", "updateLocation");
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
class Dn {
  constructor() {
    this.endpoint = "http://localhost:9090/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Dn.instance || (Dn.instance = new Dn()), Dn.instance;
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
    const t = new da({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new uu(t);
  }
  createHistoryApiClient(e) {
    const t = new ca({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new nu(t);
  }
}
const Ln = [];
function Lt(n, e = nt) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function r(s) {
    if (Ie(n, s) && (n = s, t)) {
      const o = !Ln.length;
      for (const u of i)
        u[1](), Ln.push(u, n);
      if (o) {
        for (let u = 0; u < Ln.length; u += 2)
          Ln[u][0](Ln[u + 1]);
        Ln.length = 0;
      }
    }
  }
  function l(s) {
    r(s(n));
  }
  function a(s, o = nt) {
    const u = [s, o];
    return i.add(u), i.size === 1 && (t = e(r, l) || nt), s(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: l, subscribe: a };
}
var rn;
class wr {
  constructor() {
    Lr(this, rn, Lt([]));
  }
  get store() {
    return mn(this, rn);
  }
  set(e) {
    mn(this, rn).set(e);
  }
  update(e) {
    mn(this, rn).update((t) => t.map((i) => i.uuid === e.uuid ? e : i));
  }
  add(e) {
    mn(this, rn).update((t) => [...t, e]);
  }
  remove(e) {
    mn(this, rn).update((t) => t.filter((i) => i.uuid !== e));
  }
  findById(e) {
    return Ua(mn(this, rn)).find((t) => t.uuid === e);
  }
}
rn = new WeakMap();
function cu(n, e = {}) {
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
function Xt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r], a = l.indexOf("$");
    a !== -1 && e.indexOf(l.substring(0, a + 1)) !== -1 || e.indexOf(l) === -1 && (i[l] = n[l]);
  }
  return i;
}
const Pr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, du = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function tt(n) {
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
      const f = u.match(Pr), h = u.match(du), m = f || h;
      if (u.match(/^SMUI:\w+:/)) {
        const I = u.split(":");
        let b = "";
        for (let R = 0; R < I.length; R++)
          b += R === I.length - 1 ? ":" + I[R] : I[R].split("-").map((E) => E.slice(0, 1).toUpperCase() + E.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${b.split("$")[0]}.`), u = b;
      }
      if (m) {
        const I = u.split(f ? ":" : "$");
        u = I[0];
        const b = I.slice(1).reduce((R, E) => (R[E] = !0, R), {});
        b.passive && (d = d || {}, d.passive = !0), b.nonpassive && (d = d || {}, d.passive = !1), b.capture && (d = d || {}, d.capture = !0), b.once && (d = d || {}, d.once = !0), b.preventDefault && (c = fu(c)), b.stopPropagation && (c = hu(c)), b.stopImmediatePropagation && (c = mu(c)), b.self && (c = pu(r, c)), b.trusted && (c = gu(c));
      }
      const _ = Hr(r, u, c, d), p = () => {
        _();
        const I = l.indexOf(p);
        I > -1 && l.splice(I, 1);
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
function fu(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function hu(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function mu(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function pu(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function gu(n) {
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
function fa(n, e) {
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
function _u(n, e, t) {
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
      this.root = e, this.initialize.apply(this, Qn([], Hn(i))), this.foundation = t === void 0 ? this.getDefaultFoundation() : t, this.foundation.init(), this.initialSyncWithDOM();
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
  return n === void 0 && (n = window), bu(n) ? { passive: !0 } : !1;
}
function bu(n) {
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
const ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function Iu(n, e) {
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
function vu(n) {
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
  closest: Iu,
  estimateScrollWidth: vu,
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
var Au = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Cu = {
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
    ct(e, n);
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
        return Au;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Cu;
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
      r ? l = _u(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
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
var di = (
  /** @class */
  function(n) {
    ct(e, n);
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
          return fa(window);
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
var sn = /* @__PURE__ */ new Set();
sn.add(we.PAGE_UP);
sn.add(we.PAGE_DOWN);
sn.add(we.END);
sn.add(we.HOME);
sn.add(we.ARROW_LEFT);
sn.add(we.ARROW_UP);
sn.add(we.ARROW_RIGHT);
sn.add(we.ARROW_DOWN);
function pt(n) {
  var e = n.key;
  if (kt.has(e))
    return e;
  var t = Dt.get(n.keyCode);
  return t || we.UNKNOWN;
}
function yu(n) {
  return sn.has(pt(n));
}
const { applyPassive: li } = ha, { matches: Eu } = hi;
function Ot(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: l, active: a, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (m) => n.classList.add(m), removeClass: d = (m) => n.classList.remove(m), addStyle: f = (m, _) => n.style.setProperty(m, _), initPromise: h = Promise.resolve() } = {}) {
  let m, _ = Ge("SMUI:addLayoutListener"), p, I = a, b = o, R = u;
  function E() {
    t ? (c("mdc-ripple-surface"), l === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : l === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), m && I !== a && (I = a, a ? m.activate() : a === !1 && m.deactivate()), e && !m ? (m = new mi({
      addClass: c,
      browserSupportsCssVars: () => fa(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (k) => n.contains(k),
      deregisterDocumentInteractionHandler: (k, g) => document.documentElement.removeEventListener(k, g, li()),
      deregisterInteractionHandler: (k, g) => (o || n).removeEventListener(k, g, li()),
      deregisterResizeHandler: (k) => window.removeEventListener("resize", k),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? Eu(u || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (k, g) => document.documentElement.addEventListener(k, g, li()),
      registerInteractionHandler: (k, g) => (o || n).addEventListener(k, g, li()),
      registerResizeHandler: (k) => window.addEventListener("resize", k),
      removeClass: d,
      updateCssVariable: f
    }), h.then(() => {
      m && (m.init(), m.setUnbounded(i));
    })) : m && !e && h.then(() => {
      m && (m.destroy(), m = void 0);
    }), m && (b !== o || R !== u) && (b = o, R = u, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  E(), _ && (p = _(L));
  function L() {
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
        removeClass: d,
        addStyle: f,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (g) => n.classList.add(g), removeClass: (g) => n.classList.remove(g), addStyle: (g, y) => n.style.setProperty(g, y), initPromise: Promise.resolve() }, k)), E();
    },
    destroy() {
      m && (m.destroy(), m = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Su(n) {
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
      r && r.m(l, a), j(l, t, a), i = !0;
    },
    p(l, a) {
      /*tag*/
      l[1] ? e ? Ie(
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
      S(r, l), i = !1;
    },
    d(l) {
      l && V(t), r && r.d(l);
    }
  };
}
function Tu(n) {
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
      i && i.m(r, l), j(r, t, l);
    },
    p(r, l) {
      /*tag*/
      r[1] ? e ? Ie(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = zi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, l) : (i = zi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: nt,
    o: nt,
    d(r) {
      r && V(t), i && i.d(r);
    }
  };
}
function Lu(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = ye(
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
      e = lt("svg"), s && s.c(), Rr(e, u);
    },
    m(c, d) {
      j(c, e, d), s && s.m(e, null), n[9](e), i = !0, r || (l = [
        ce(t = Je.call(
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
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      128) && Se(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Ee(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Te(
          /*$$scope*/
          c[7]
        ),
        null
      ), Rr(e, u = de(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && d & /*use*/
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
      c && V(e), s && s.d(c), n[9](null), r = !1, Ze(l);
    }
  };
}
function Wi(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = ye(
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
      e = ie(
        /*tag*/
        n[1]
      ), s && s.c(), oi(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      j(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        ce(t = Je.call(
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
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      128) && Se(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Ee(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Te(
          /*$$scope*/
          c[7]
        ),
        null
      ), oi(
        /*tag*/
        c[1]
      )(e, u = de(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && d & /*use*/
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
      c && V(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function zi(n) {
  let e, t, i, r, l = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let s = 0; s < l.length; s += 1)
    a = z(a, l[s]);
  return {
    c() {
      e = ie(
        /*tag*/
        n[1]
      ), oi(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(s, o) {
      j(s, e, o), n[10](e), i || (r = [
        ce(t = Je.call(
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
      oi(
        /*tag*/
        s[1]
      )(e, a = de(l, [o & /*$$restProps*/
      32 && /*$$restProps*/
      s[5]])), t && me(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    d(s) {
      s && V(e), n[10](null), i = !1, Ze(r);
    }
  };
}
function Ou(n) {
  let e, t, i, r;
  const l = [Lu, Tu, Su], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function Ru(n, e, t) {
  let i;
  const r = ["use", "tag", "getElement"];
  let l = fe(e, r), { $$slots: a = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
  const c = tt(xe());
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
  function _(p) {
    se[p ? "unshift" : "push"](() => {
      d = p, t(2, d);
    });
  }
  return n.$$set = (p) => {
    e = z(z({}, e), et(p)), t(5, l = fe(e, r)), "use" in p && t(0, o = p.use), "tag" in p && t(1, u = p.tag), "$$scope" in p && t(7, s = p.$$scope);
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
    _
  ];
}
class Ft extends Re {
  constructor(e) {
    super(), Oe(this, e, Ru, Ou, Ie, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function ku(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = ye(
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
      8) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[3],
        e ? Ee(
          t,
          /*$$scope*/
          r[3],
          l,
          null
        ) : Te(
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
function Du(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { key: a } = e, { value: s } = e;
  const o = Lt(s);
  return rt(n, o, (u) => t(5, i = u)), qe(a, o), Zt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, a = u.key), "value" in u && t(2, s = u.value), "$$scope" in u && t(3, l = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Ht(o, i = s, i);
  }, [o, a, s, l, r];
}
class Vn extends Re {
  constructor(e) {
    super(), Oe(this, e, Du, ku, Ie, { key: 1, value: 2 });
  }
}
function Mu(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), i = ye(
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
      4096) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? Ee(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Te(
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
function Fu(n) {
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
      $$slots: { default: [Mu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = z(u, de(r, [
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
        }
        l ? (e = Rt(l, a(s, o)), s[11](e), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? de(r, [
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
      s && V(t), n[11](null), e && ee(e, s);
    }
  };
}
function Nu(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: d = Ft } = e, { tag: f = d === Ft ? "span" : void 0 } = e;
  const h = Ge("SMUI:label:context"), m = Ge("SMUI:label:tabindex");
  function _() {
    return c.getElement();
  }
  function p(I) {
    se[I ? "unshift" : "push"](() => {
      c = I, t(4, c);
    });
  }
  return n.$$set = (I) => {
    e = z(z({}, e), et(I)), t(8, r = fe(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "component" in I && t(2, d = I.component), "tag" in I && t(3, f = I.tag), "$$scope" in I && t(12, a = I.$$scope);
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
    _,
    l,
    p,
    a
  ];
}
class Uu extends Re {
  constructor(e) {
    super(), Oe(this, e, Nu, Fu, Ie, {
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
function qr(n) {
  let e;
  return {
    c() {
      e = ie("div"), H(e, "class", "mdc-button__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function wu(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[28].default
  ), a = ye(
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
      e = ie("div"), t = ue(), a && a.c(), s && s.c(), i = Xe(), H(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      j(o, e, u), j(o, t, u), a && a.m(o, u), s && s.m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && Se(
        a,
        l,
        o,
        /*$$scope*/
        o[30],
        r ? Ee(
          l,
          /*$$scope*/
          o[30],
          u,
          null
        ) : Te(
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
      S(a, o), r = !1;
    },
    d(o) {
      o && (V(e), V(t), V(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Pu(n) {
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
      $$slots: { default: [wu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = z(u, de(r, [
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      512 && l !== (l = /*component*/
      s[9])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
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
        12580351 ? de(r, [
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
      s && V(t), n[29](null), e && ee(e, s);
    }
  };
}
const Yi = ([n, e]) => `${n}: ${e};`;
function Hu(n, e, t) {
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
  let s = fe(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = tt(xe());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = "primary" } = e, { variant: p = "text" } = e, { touch: I = !1 } = e, { href: b = void 0 } = e, { action: R = "close" } = e, { defaultAction: E = !1 } = e, { secondary: L = !1 } = e, k, g = {}, y = {}, D = Ge("SMUI:button:context"), { component: A = Ft } = e, { tag: v = A === Ft ? b == null ? "button" : "a" : void 0 } = e, F = s.disabled;
  qe("SMUI:label:context", "button"), qe("SMUI:icon:context", "button");
  function O(T) {
    g[T] || t(12, g[T] = !0, g);
  }
  function U(T) {
    (!(T in g) || g[T]) && t(12, g[T] = !1, g);
  }
  function W(T, Z) {
    y[T] != Z && (Z === "" || Z == null ? (delete y[T], t(13, y)) : t(13, y[T] = Z, y));
  }
  function N() {
    D === "banner" && ge(B(), L ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function B() {
    return k.getElement();
  }
  function M(T) {
    se[T ? "unshift" : "push"](() => {
      k = T, t(11, k);
    });
  }
  return n.$$set = (T) => {
    t(31, e = z(z({}, e), et(T))), t(23, s = fe(e, a)), "use" in T && t(0, d = T.use), "class" in T && t(1, f = T.class), "style" in T && t(2, h = T.style), "ripple" in T && t(3, m = T.ripple), "color" in T && t(4, _ = T.color), "variant" in T && t(5, p = T.variant), "touch" in T && t(6, I = T.touch), "href" in T && t(7, b = T.href), "action" in T && t(24, R = T.action), "defaultAction" in T && t(25, E = T.defaultAction), "secondary" in T && t(8, L = T.secondary), "component" in T && t(9, A = T.component), "tag" in T && t(10, v = T.tag), "$$scope" in T && t(30, u = T.$$scope);
  }, n.$$.update = () => {
    if (t(16, i = D === "dialog:action" && R != null ? { "data-mdc-dialog-action": R } : { action: e.action }), t(15, r = D === "dialog:action" && E ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, l = D === "banner" ? {} : { secondary: e.secondary }), F !== s.disabled) {
      if (k) {
        const T = B();
        "blur" in T && T.blur();
      }
      t(27, F = s.disabled);
    }
  }, e = et(e), [
    d,
    f,
    h,
    m,
    _,
    p,
    I,
    b,
    L,
    A,
    v,
    k,
    g,
    y,
    l,
    r,
    i,
    c,
    D,
    O,
    U,
    W,
    N,
    s,
    R,
    E,
    B,
    F,
    o,
    M,
    u
  ];
}
class Bu extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Hu,
      Pu,
      Ie,
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
function Vu(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = ye(
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
      32) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[5],
        e ? Ee(
          t,
          /*$$scope*/
          r[5],
          l,
          null
        ) : Te(
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
function ju(n) {
  let e, t;
  return e = new Bu({
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
      $$slots: { default: [Vu] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function qu(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: l = () => {
  } } = e, { disabled: a = !1 } = e, { variant: s = "default" } = e, { isAbortAction: o = !1 } = e;
  return n.$$set = (u) => {
    "callback" in u && t(0, l = u.callback), "disabled" in u && t(1, a = u.disabled), "variant" in u && t(2, s = u.variant), "isAbortAction" in u && t(3, o = u.isAbortAction), "$$scope" in u && t(5, r = u.$$scope);
  }, [l, a, s, o, i, r];
}
class Ar extends Re {
  constructor(e) {
    super(), Oe(this, e, qu, ju, Ie, {
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
var Gu = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
      return this.adapter.hasClass(si.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(si.ICON_BUTTON_ON) : this.adapter.removeClass(si.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = t ? this.adapter.getAttr(xt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(xt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(xt.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(xt.ARIA_PRESSED, "" + t);
    }, e;
  }(Et)
);
function Gr(n) {
  let e;
  return {
    c() {
      e = ie("div"), H(e, "class", "mdc-icon-button__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Ku(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[33].default
  ), a = ye(
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
      e = ie("div"), t = ue(), a && a.c(), s && s.c(), i = Xe(), H(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      j(o, e, u), j(o, t, u), a && a.m(o, u), s && s.m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && Se(
        a,
        l,
        o,
        /*$$scope*/
        o[37],
        r ? Ee(
          l,
          /*$$scope*/
          o[37],
          u,
          null
        ) : Te(
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
      S(a, o), r = !1;
    },
    d(o) {
      o && (V(e), V(t), V(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Wu(n) {
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
      $$slots: { default: [Ku] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = z(u, de(r, [
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
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
        1073504255 ? de(r, [
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
      s && V(t), n[34](null), e && ee(e, s);
    }
  };
}
const Xi = ([n, e]) => `${n}: ${e};`;
function zu(n, e, t) {
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
  let l = fe(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = tt(xe());
  let u = () => {
  };
  function c(K) {
    return K === u;
  }
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = void 0 } = e, { toggle: p = !1 } = e, { pressed: I = u } = e, { ariaLabelOn: b = void 0 } = e, { ariaLabelOff: R = void 0 } = e, { touch: E = !1 } = e, { displayFlex: L = !0 } = e, { size: k = "normal" } = e, { href: g = void 0 } = e, { action: y = void 0 } = e, D, A, v = {}, F = {}, O = {}, U = Ge("SMUI:icon-button:context"), W = Ge("SMUI:icon-button:aria-describedby"), { component: N = Ft } = e, { tag: B = N === Ft ? g == null ? "button" : "a" : void 0 } = e, M = l.disabled;
  qe("SMUI:icon:context", "icon-button");
  let T = null;
  Zt(() => {
    A && A.destroy();
  });
  function Z(K) {
    return K in v ? v[K] : ke().classList.contains(K);
  }
  function Fe(K) {
    v[K] || t(18, v[K] = !0, v);
  }
  function Me(K) {
    (!(K in v) || v[K]) && t(18, v[K] = !1, v);
  }
  function _e(K, Ye) {
    F[K] != Ye && (Ye === "" || Ye == null ? (delete F[K], t(19, F)) : t(19, F[K] = Ye, F));
  }
  function ze(K) {
    var Ye;
    return K in O ? (Ye = O[K]) !== null && Ye !== void 0 ? Ye : null : ke().getAttribute(K);
  }
  function G(K, Ye) {
    O[K] !== Ye && t(20, O[K] = Ye, O);
  }
  function Q(K) {
    t(0, I = K.isOn);
  }
  function ke() {
    return D.getElement();
  }
  function De(K) {
    se[K ? "unshift" : "push"](() => {
      D = K, t(16, D);
    });
  }
  const Ne = () => A && A.handleClick(), ne = () => U === "top-app-bar:navigation" && ge(ke(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (K) => {
    e = z(z({}, e), et(K)), t(29, l = fe(e, r)), "use" in K && t(1, d = K.use), "class" in K && t(2, f = K.class), "style" in K && t(3, h = K.style), "ripple" in K && t(4, m = K.ripple), "color" in K && t(5, _ = K.color), "toggle" in K && t(30, p = K.toggle), "pressed" in K && t(0, I = K.pressed), "ariaLabelOn" in K && t(6, b = K.ariaLabelOn), "ariaLabelOff" in K && t(7, R = K.ariaLabelOff), "touch" in K && t(8, E = K.touch), "displayFlex" in K && t(9, L = K.displayFlex), "size" in K && t(10, k = K.size), "href" in K && t(11, g = K.href), "action" in K && t(12, y = K.action), "component" in K && t(13, N = K.component), "tag" in K && t(14, B = K.tag), "$$scope" in K && t(37, s = K.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, i = (() => {
      if (U === "data-table:pagination")
        switch (y) {
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
        return U === "dialog:header" || U === "dialog:sheet" ? { "data-mdc-dialog-action": y } : { action: y };
    })()), M !== l.disabled) {
      if (D) {
        const K = ke();
        "blur" in K && K.blur();
      }
      t(31, M = l.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && D && ke() && p !== T && (p && !A ? (t(17, A = new Gu({
      addClass: Fe,
      hasClass: Z,
      notifyChange: (K) => {
        Q(K), ge(ke(), "SMUIIconButtonToggle:change", K, void 0, !0);
      },
      removeClass: Me,
      getAttr: ze,
      setAttr: G
    })), A.init()) : !p && A && (A.destroy(), t(17, A = void 0), t(18, v = {}), t(20, O = {})), t(32, T = p)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && A && !c(I) && A.isOn() !== I && A.toggle(I);
  }, [
    I,
    d,
    f,
    h,
    m,
    _,
    b,
    R,
    E,
    L,
    k,
    g,
    y,
    N,
    B,
    ke,
    D,
    A,
    v,
    F,
    O,
    i,
    o,
    c,
    U,
    W,
    Fe,
    Me,
    _e,
    l,
    p,
    M,
    T,
    a,
    De,
    Ne,
    ne,
    s
  ];
}
class Yu extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      zu,
      Wu,
      Ie,
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
function Xu(n) {
  let e;
  return {
    c() {
      e = ut(
        /*icon*/
        n[1]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      2 && Ct(
        e,
        /*icon*/
        t[1]
      );
    },
    i: nt,
    o: nt,
    d(t) {
      t && V(e);
    }
  };
}
function Zu(n) {
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
      e && $(e, a, s), j(a, t, s), i = !0;
    },
    p(a, s) {
      if (s & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Pe();
          const o = e;
          S(o.$$.fragment, 1, 0, () => {
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
      e && S(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && V(t), e && ee(e, a);
    }
  };
}
function Qu(n) {
  let e, t, i, r;
  const l = [Zu, Xu], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function Ju(n) {
  let e, t;
  return e = new Yu({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        n[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Qu] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function xu(n, e, t) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: l = null } = e, { iconStyles: a = "" } = e, { disabled: s = !1 } = e;
  return n.$$set = (o) => {
    "callback" in o && t(0, i = o.callback), "icon" in o && t(1, r = o.icon), "iconComponent" in o && t(2, l = o.iconComponent), "iconStyles" in o && t(3, a = o.iconStyles), "disabled" in o && t(4, s = o.disabled);
  }, [i, r, l, a, s];
}
class $u extends Re {
  constructor(e) {
    super(), Oe(this, e, xu, Ju, Ie, {
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
var ec = {
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
var tc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ec;
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
var nc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
var ic = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Kr = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, rc = {
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
var lc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ic;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rc;
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
}, sc = {
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
}, ac = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], oc = [
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
var zr = ["mousedown", "touchstart"], Yr = ["click", "keydown"], uc = (
  /** @class */
  function(n) {
    ct(e, n);
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
        return sc;
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
        return oc.indexOf(t) >= 0;
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
        return ac.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
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
}, cc = {
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
var Zr = ["click", "keydown"], dc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
        return cc;
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
function fc(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = ye(
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
    f = z(f, d[h]);
  return {
    c() {
      e = ie("label"), c && c.c(), oe(e, f);
    },
    m(h, m) {
      j(h, e, m), c && c.m(e, null), n[24](e), a = !0, s || (o = [
        ce(l = Je.call(
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
      2097152) && Se(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? Ee(
          u,
          /*$$scope*/
          h[21],
          m,
          null
        ) : Te(
          /*$$scope*/
          h[21]
        ),
        null
      ), oe(e, f = de(d, [
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
      h && V(e), c && c.d(h), n[24](null), s = !1, Ze(o);
    }
  };
}
function hc(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ye(
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
    d = z(d, c[f]);
  return {
    c() {
      e = ie("span"), u && u.c(), oe(e, d);
    },
    m(f, h) {
      j(f, e, h), u && u.m(e, null), n[23](e), l = !0, a || (s = [
        ce(r = Je.call(
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
    p(f, h) {
      u && u.p && (!l || h & /*$$scope*/
      2097152) && Se(
        u,
        o,
        f,
        /*$$scope*/
        f[21],
        l ? Ee(
          o,
          /*$$scope*/
          f[21],
          h,
          null
        ) : Te(
          /*$$scope*/
          f[21]
        ),
        null
      ), oe(e, d = de(c, [
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
      ])), r && me(r.update) && h & /*use*/
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
      S(u, f), l = !1;
    },
    d(f) {
      f && V(e), u && u.d(f), n[23](null), a = !1, Ze(s);
    }
  };
}
function mc(n) {
  let e, t, i, r;
  const l = [hc, fc], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
const Qr = ([n, e]) => `${n}: ${e};`, Jr = ([n, e]) => `${n}: ${e};`;
function pc(n, e, t) {
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
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const o = tt(xe());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { for: f = void 0 } = e, { floatAbove: h = !1 } = e, { required: m = !1 } = e, { wrapped: _ = !1 } = e, p, I, b = {}, R = {}, E = (s = Ge("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, L = h, k = m;
  at(() => {
    t(18, I = new tc({
      addClass: g,
      removeClass: y,
      getWidth: () => {
        var T, Z;
        const Fe = W(), Me = Fe.cloneNode(!0);
        (T = Fe.parentNode) === null || T === void 0 || T.appendChild(Me), Me.classList.add("smui-floating-label--remove-transition"), Me.classList.add("smui-floating-label--force-size"), Me.classList.remove("mdc-floating-label--float-above");
        const _e = Me.scrollWidth;
        return (Z = Fe.parentNode) === null || Z === void 0 || Z.removeChild(Me), _e;
      },
      registerInteractionHandler: (T, Z) => W().addEventListener(T, Z),
      deregisterInteractionHandler: (T, Z) => W().removeEventListener(T, Z)
    }));
    const M = {
      get element() {
        return W();
      },
      addStyle: D,
      removeStyle: A
    };
    return ge(p, "SMUIFloatingLabel:mount", M), I.init(), () => {
      ge(p, "SMUIFloatingLabel:unmount", M), I.destroy();
    };
  });
  function g(M) {
    b[M] || t(8, b[M] = !0, b);
  }
  function y(M) {
    (!(M in b) || b[M]) && t(8, b[M] = !1, b);
  }
  function D(M, T) {
    R[M] != T && (T === "" || T == null ? (delete R[M], t(9, R)) : t(9, R[M] = T, R));
  }
  function A(M) {
    M in R && (delete R[M], t(9, R));
  }
  function v(M) {
    I.shake(M);
  }
  function F(M) {
    t(0, h = M);
  }
  function O(M) {
    t(1, m = M);
  }
  function U() {
    return I.getWidth();
  }
  function W() {
    return p;
  }
  function N(M) {
    se[M ? "unshift" : "push"](() => {
      p = M, t(7, p);
    });
  }
  function B(M) {
    se[M ? "unshift" : "push"](() => {
      p = M, t(7, p);
    });
  }
  return n.$$set = (M) => {
    e = z(z({}, e), et(M)), t(12, r = fe(e, i)), "use" in M && t(2, u = M.use), "class" in M && t(3, c = M.class), "style" in M && t(4, d = M.style), "for" in M && t(5, f = M.for), "floatAbove" in M && t(0, h = M.floatAbove), "required" in M && t(1, m = M.required), "wrapped" in M && t(6, _ = M.wrapped), "$$scope" in M && t(21, a = M.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && I && L !== h && (t(19, L = h), I.float(h)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && I && k !== m && (t(20, k = m), I.setRequired(m));
  }, [
    h,
    m,
    u,
    c,
    d,
    f,
    _,
    p,
    b,
    R,
    o,
    E,
    r,
    v,
    F,
    O,
    U,
    W,
    I,
    L,
    k,
    a,
    l,
    N,
    B
  ];
}
class pi extends Re {
  constructor(e) {
    super(), Oe(this, e, pc, mc, Ie, {
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
function gc(n) {
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
    o = z(o, s[u]);
  return {
    c() {
      e = ie("div"), oe(e, o);
    },
    m(u, c) {
      j(u, e, c), n[13](e), l || (a = [
        ce(r = Je.call(
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
      oe(e, o = de(s, [
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
      ])), r && me(r.update) && c & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: nt,
    o: nt,
    d(u) {
      u && V(e), n[13](null), l = !1, Ze(a);
    }
  };
}
const xr = ([n, e]) => `${n}: ${e};`;
function _c(n, e, t) {
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
  let r = fe(e, i);
  const l = tt(xe());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, d, f = {}, h = {};
  at(() => (d = new nc({
    addClass: _,
    removeClass: p,
    hasClass: m,
    setStyle: I,
    registerEventHandler: (g, y) => L().addEventListener(g, y),
    deregisterEventHandler: (g, y) => L().removeEventListener(g, y)
  }), d.init(), () => {
    d.destroy();
  }));
  function m(g) {
    return g in f ? f[g] : L().classList.contains(g);
  }
  function _(g) {
    f[g] || t(5, f[g] = !0, f);
  }
  function p(g) {
    (!(g in f) || f[g]) && t(5, f[g] = !1, f);
  }
  function I(g, y) {
    h[g] != y && (y === "" || y == null ? (delete h[g], t(6, h)) : t(6, h[g] = y, h));
  }
  function b() {
    d.activate();
  }
  function R() {
    d.deactivate();
  }
  function E(g) {
    d.setRippleCenter(g);
  }
  function L() {
    return c;
  }
  function k(g) {
    se[g ? "unshift" : "push"](() => {
      c = g, t(4, c);
    });
  }
  return n.$$set = (g) => {
    e = z(z({}, e), et(g)), t(8, r = fe(e, i)), "use" in g && t(0, a = g.use), "class" in g && t(1, s = g.class), "style" in g && t(2, o = g.style), "active" in g && t(3, u = g.active);
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
    b,
    R,
    E,
    L,
    k
  ];
}
class ma extends Re {
  constructor(e) {
    super(), Oe(this, e, _c, gc, Ie, {
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
  ), l = ye(
    r,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = ie("div"), l && l.c(), H(e, "class", "mdc-notched-outline__notch"), H(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(el).join(" "));
    },
    m(a, s) {
      j(a, e, s), l && l.m(e, null), i = !0;
    },
    p(a, s) {
      l && l.p && (!i || s & /*$$scope*/
      16384) && Se(
        l,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? Ee(
          r,
          /*$$scope*/
          a[14],
          s,
          null
        ) : Te(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || s & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(el).join(" "))) && H(e, "style", t);
    },
    i(a) {
      i || (C(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && V(e), l && l.d(a);
    }
  };
}
function bc(n) {
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
    h = z(h, f[m]);
  return {
    c() {
      e = ie("div"), t = ie("div"), i = ue(), d && d.c(), r = ue(), l = ie("div"), H(t, "class", "mdc-notched-outline__leading"), H(l, "class", "mdc-notched-outline__trailing"), oe(e, h);
    },
    m(m, _) {
      j(m, e, _), x(e, t), x(e, i), d && d.m(e, null), x(e, r), x(e, l), n[16](e), o = !0, u || (c = [
        ce(s = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        he(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        he(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(m, [_]) {
      /*noLabel*/
      m[3] ? d && (Pe(), S(d, 1, 1, () => {
        d = null;
      }), He()) : d ? (d.p(m, _), _ & /*noLabel*/
      8 && C(d, 1)) : (d = $r(m), d.c(), C(d, 1), d.m(e, r)), oe(e, h = de(f, [
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
      o || (C(d), o = !0);
    },
    o(m) {
      S(d), o = !1;
    },
    d(m) {
      m && V(e), d && d.d(), n[16](null), u = !1, Ze(c);
    }
  };
}
const el = ([n, e]) => `${n}: ${e};`;
function Ic(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: d = !1 } = e, f, h, m, _ = {}, p = {};
  at(() => (h = new lc({
    addClass: b,
    removeClass: R,
    setNotchWidthProperty: (v) => E("width", v + "px"),
    removeNotchWidthProperty: () => L("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function I(v) {
    t(4, m = v.detail);
  }
  function b(v) {
    _[v] || t(6, _[v] = !0, _);
  }
  function R(v) {
    (!(v in _) || _[v]) && t(6, _[v] = !1, _);
  }
  function E(v, F) {
    p[v] != F && (F === "" || F == null ? (delete p[v], t(7, p)) : t(7, p[v] = F, p));
  }
  function L(v) {
    v in p && (delete p[v], t(7, p));
  }
  function k(v) {
    h.notch(v);
  }
  function g() {
    h.closeNotch();
  }
  function y() {
    return f;
  }
  function D(v) {
    se[v ? "unshift" : "push"](() => {
      f = v, t(5, f);
    });
  }
  const A = () => t(4, m = void 0);
  return n.$$set = (v) => {
    e = z(z({}, e), et(v)), t(10, r = fe(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "notched" in v && t(2, c = v.notched), "noLabel" in v && t(3, d = v.noLabel), "$$scope" in v && t(14, a = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (m ? (m.addStyle("transition-duration", "0s"), b("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      m && m.removeStyle("transition-duration");
    })) : R("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    d,
    m,
    f,
    _,
    p,
    s,
    I,
    r,
    k,
    g,
    y,
    a,
    l,
    D,
    A
  ];
}
class pa extends Re {
  constructor(e) {
    super(), Oe(this, e, Ic, bc, Ie, {
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
function vc(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = ye(
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
      8192) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? Ee(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Te(
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
function Ac(n) {
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
      $$slots: { default: [vc] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = z(u, de(r, [
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
        }
        l ? (e = Rt(l, a(s, o)), s[12](e), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? de(r, [
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
      s && V(t), n[12](null), e && ee(e, s);
    }
  };
}
const nn = {
  component: Ft,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Cc(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = nn.class, d = {}, f = [], h = nn.contexts, m = nn.props;
  let { component: _ = nn.component } = e, { tag: p = _ === Ft ? nn.tag : void 0 } = e;
  Object.entries(nn.classMap).forEach(([E, L]) => {
    const k = Ge(L);
    k && "subscribe" in k && f.push(k.subscribe((g) => {
      t(5, d[E] = g, d);
    }));
  });
  const I = tt(xe());
  for (let E in h)
    h.hasOwnProperty(E) && qe(E, h[E]);
  Zt(() => {
    for (const E of f)
      E();
  });
  function b() {
    return u.getElement();
  }
  function R(E) {
    se[E ? "unshift" : "push"](() => {
      u = E, t(4, u);
    });
  }
  return n.$$set = (E) => {
    e = z(z({}, e), et(E)), t(9, r = fe(e, i)), "use" in E && t(0, s = E.use), "class" in E && t(1, o = E.class), "component" in E && t(2, _ = E.component), "tag" in E && t(3, p = E.tag), "$$scope" in E && t(13, a = E.$$scope);
  }, [
    s,
    o,
    _,
    p,
    u,
    d,
    c,
    m,
    I,
    r,
    b,
    l,
    R,
    a
  ];
}
class yc extends Re {
  constructor(e) {
    super(), Oe(this, e, Cc, Ac, Ie, {
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
const tl = Object.assign({}, nn);
function vt(n) {
  return new Proxy(yc, {
    construct: function(e, t) {
      return Object.assign(nn, tl, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(nn, tl, n), e[t];
    }
  });
}
const Ec = vt({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Sc = vt({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Tc = vt({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Lc(n) {
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
      e = ie("input"), oe(e, s);
    },
    m(o, u) {
      j(o, e, u), e.autofocus && e.focus(), n[26](e), r || (l = [
        ce(i = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        he(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        he(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        he(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        he(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], r = !0);
    },
    p(o, [u]) {
      oe(e, s = de(a, [
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
    i: nt,
    o: nt,
    d(o) {
      o && V(e), n[26](null), r = !1, Ze(l);
    }
  };
}
function Oc(n) {
  return n === "" ? Number.NaN : +n;
}
function Rc(n, e, t) {
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
  let r = fe(e, i);
  const l = tt(xe());
  let a = () => {
  };
  function s(T) {
    return T === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: d = " " } = e, { value: f = a } = e;
  const h = s(f);
  h && (f = "");
  let { files: m = null } = e, { dirty: _ = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: I = !0 } = e, { emptyValueNull: b = f === null } = e;
  h && b && (f = null);
  let { emptyValueUndefined: R = f === void 0 } = e;
  h && R && (f = void 0);
  let E, L = {}, k = {};
  at(() => {
    I && t(14, p = E.matches(":invalid"));
  });
  function g(T) {
    if (c === "file") {
      t(12, m = T.currentTarget.files);
      return;
    }
    if (T.currentTarget.value === "" && b) {
      t(11, f = null);
      return;
    }
    if (T.currentTarget.value === "" && R) {
      t(11, f = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, f = Oc(T.currentTarget.value));
        break;
      default:
        t(11, f = T.currentTarget.value);
        break;
    }
  }
  function y(T) {
    (c === "file" || c === "range") && g(T), t(13, _ = !0), I && t(14, p = E.matches(":invalid"));
  }
  function D(T) {
    var Z;
    return T in L ? (Z = L[T]) !== null && Z !== void 0 ? Z : null : U().getAttribute(T);
  }
  function A(T, Z) {
    L[T] !== Z && t(6, L[T] = Z, L);
  }
  function v(T) {
    (!(T in L) || L[T] != null) && t(6, L[T] = void 0, L);
  }
  function F() {
    U().focus();
  }
  function O() {
    U().blur();
  }
  function U() {
    return E;
  }
  function W(T) {
    Pn.call(this, n, T);
  }
  function N(T) {
    Pn.call(this, n, T);
  }
  function B(T) {
    se[T ? "unshift" : "push"](() => {
      E = T, t(5, E);
    });
  }
  const M = (T) => c !== "file" && g(T);
  return n.$$set = (T) => {
    e = z(z({}, e), et(T)), t(10, r = fe(e, i)), "use" in T && t(0, o = T.use), "class" in T && t(1, u = T.class), "type" in T && t(2, c = T.type), "placeholder" in T && t(3, d = T.placeholder), "value" in T && t(11, f = T.value), "files" in T && t(12, m = T.files), "dirty" in T && t(13, _ = T.dirty), "invalid" in T && t(14, p = T.invalid), "updateInvalid" in T && t(15, I = T.updateInvalid), "emptyValueNull" in T && t(16, b = T.emptyValueNull), "emptyValueUndefined" in T && t(17, R = T.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete k.value, t(4, k), t(2, c), t(11, f)) : t(4, k.value = f ?? "", k));
  }, [
    o,
    u,
    c,
    d,
    k,
    E,
    L,
    l,
    g,
    y,
    r,
    f,
    m,
    _,
    p,
    I,
    b,
    R,
    D,
    A,
    v,
    F,
    O,
    U,
    W,
    N,
    B,
    M
  ];
}
class kc extends Re {
  constructor(e) {
    super(), Oe(this, e, Rc, Lc, Ie, {
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
function Dc(n) {
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
      e = ie("textarea"), oe(e, o);
    },
    m(u, c) {
      j(u, e, c), e.autofocus && e.focus(), n[21](e), dn(
        e,
        /*value*/
        n[0]
      ), l || (a = [
        ce(r = Je.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ce(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        he(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        he(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        he(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        he(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], l = !0);
    },
    p(u, [c]) {
      oe(e, o = de(s, [
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
      1 && dn(
        e,
        /*value*/
        u[0]
      );
    },
    i: nt,
    o: nt,
    d(u) {
      u && V(e), n[21](null), l = !1, Ze(a);
    }
  };
}
function Mc(n, e, t) {
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
  let r = fe(e, i);
  const l = tt(xe());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: d = !1 } = e, { updateInvalid: f = !0 } = e, { resizable: h = !0 } = e, m, _ = {};
  at(() => {
    f && t(11, d = m.matches(":invalid"));
  });
  function p() {
    t(10, c = !0), f && t(11, d = m.matches(":invalid"));
  }
  function I(v) {
    var F;
    return v in _ ? (F = _[v]) !== null && F !== void 0 ? F : null : k().getAttribute(v);
  }
  function b(v, F) {
    _[v] !== F && t(6, _[v] = F, _);
  }
  function R(v) {
    (!(v in _) || _[v] != null) && t(6, _[v] = void 0, _);
  }
  function E() {
    k().focus();
  }
  function L() {
    k().blur();
  }
  function k() {
    return m;
  }
  function g(v) {
    Pn.call(this, n, v);
  }
  function y(v) {
    Pn.call(this, n, v);
  }
  function D(v) {
    se[v ? "unshift" : "push"](() => {
      m = v, t(5, m);
    });
  }
  function A() {
    u = this.value, t(0, u);
  }
  return n.$$set = (v) => {
    e = z(z({}, e), et(v)), t(9, r = fe(e, i)), "use" in v && t(1, a = v.use), "class" in v && t(2, s = v.class), "style" in v && t(3, o = v.style), "value" in v && t(0, u = v.value), "dirty" in v && t(10, c = v.dirty), "invalid" in v && t(11, d = v.invalid), "updateInvalid" in v && t(12, f = v.updateInvalid), "resizable" in v && t(4, h = v.resizable);
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
    d,
    f,
    I,
    b,
    R,
    E,
    L,
    k,
    g,
    y,
    D,
    A
  ];
}
class Fc extends Re {
  constructor(e) {
    super(), Oe(this, e, Mc, Dc, Ie, {
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
const Nc = (n) => ({}), nl = (n) => ({}), Uc = (n) => ({}), il = (n) => ({}), wc = (n) => ({}), rl = (n) => ({}), Pc = (n) => ({}), ll = (n) => ({}), Hc = (n) => ({}), sl = (n) => ({}), Bc = (n) => ({}), al = (n) => ({}), Vc = (n) => ({}), ol = (n) => ({}), jc = (n) => ({}), ul = (n) => ({}), qc = (n) => ({}), cl = (n) => ({}), Gc = (n) => ({}), dl = (n) => ({}), Kc = (n) => ({}), fl = (n) => ({}), Wc = (n) => ({}), hl = (n) => ({});
function zc(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m;
  const _ = (
    /*#slots*/
    n[56].label
  ), p = ye(
    _,
    n,
    /*$$scope*/
    n[87],
    sl
  );
  i = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Xc] },
      $$scope: { ctx: n }
    }
  });
  const I = (
    /*#slots*/
    n[56].default
  ), b = ye(
    I,
    n,
    /*$$scope*/
    n[87],
    null
  );
  a = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Zc] },
      $$scope: { ctx: n }
    }
  });
  const R = (
    /*#slots*/
    n[56].ripple
  ), E = ye(
    R,
    n,
    /*$$scope*/
    n[87],
    il
  );
  let L = [
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
    Xt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], k = {};
  for (let g = 0; g < L.length; g += 1)
    k = z(k, L[g]);
  return {
    c() {
      e = ie("div"), p && p.c(), t = ue(), te(i.$$.fragment), r = ue(), b && b.c(), l = ue(), te(a.$$.fragment), s = ue(), E && E.c(), oe(e, k);
    },
    m(g, y) {
      j(g, e, y), p && p.m(e, null), x(e, t), $(i, e, null), x(e, r), b && b.m(e, null), x(e, l), $(a, e, null), x(e, s), E && E.m(e, null), n[82](e), f = !0, h || (m = [
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
        ce(d = Je.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ce(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], h = !0);
    },
    p(g, y) {
      p && p.p && (!f || y[2] & /*$$scope*/
      33554432) && Se(
        p,
        _,
        g,
        /*$$scope*/
        g[87],
        f ? Ee(
          _,
          /*$$scope*/
          g[87],
          y,
          Hc
        ) : Te(
          /*$$scope*/
          g[87]
        ),
        sl
      );
      const D = {};
      y[2] & /*$$scope*/
      33554432 && (D.$$scope = { dirty: y, ctx: g }), i.$set(D), b && b.p && (!f || y[2] & /*$$scope*/
      33554432) && Se(
        b,
        I,
        g,
        /*$$scope*/
        g[87],
        f ? Ee(
          I,
          /*$$scope*/
          g[87],
          y,
          null
        ) : Te(
          /*$$scope*/
          g[87]
        ),
        null
      );
      const A = {};
      y[2] & /*$$scope*/
      33554432 && (A.$$scope = { dirty: y, ctx: g }), a.$set(A), E && E.p && (!f || y[2] & /*$$scope*/
      33554432) && Se(
        E,
        R,
        g,
        /*$$scope*/
        g[87],
        f ? Ee(
          R,
          /*$$scope*/
          g[87],
          y,
          Uc
        ) : Te(
          /*$$scope*/
          g[87]
        ),
        il
      ), oe(e, k = de(L, [
        (!f || y[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | y[1] & /*$$slots*/
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
        (!f || y[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          g[26]
        ).map(El).concat([
          /*style*/
          g[10]
        ]).join(" "))) && { style: u },
        y[1] & /*$$restProps*/
        32768 && Xt(
          /*$$restProps*/
          g[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && me(c.update) && y[0] & /*ripple*/
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
      }), d && me(d.update) && y[0] & /*use*/
      256 && d.update.call(
        null,
        /*use*/
        g[8]
      );
    },
    i(g) {
      f || (C(p, g), C(i.$$.fragment, g), C(b, g), C(a.$$.fragment, g), C(E, g), f = !0);
    },
    o(g) {
      S(p, g), S(i.$$.fragment, g), S(b, g), S(a.$$.fragment, g), S(E, g), f = !1;
    },
    d(g) {
      g && V(e), p && p.d(g), ee(i), b && b.d(g), ee(a), E && E.d(g), n[82](null), h = !1, Ze(m);
    }
  };
}
function Yc(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, _, p, I, b, R = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && ml(n), E = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && _l(n)
  );
  r = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [$c] },
      $$scope: { ctx: n }
    }
  });
  const L = (
    /*#slots*/
    n[56].default
  ), k = ye(
    L,
    n,
    /*$$scope*/
    n[87],
    null
  ), g = [td, ed], y = [];
  function D(O, U) {
    return (
      /*textarea*/
      O[14] && typeof /*value*/
      O[0] == "string" ? 0 : 1
    );
  }
  s = D(n), o = y[s] = g[s](n), c = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [rd] },
      $$scope: { ctx: n }
    }
  });
  let A = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Al(n), v = [
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
    Xt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], F = {};
  for (let O = 0; O < v.length; O += 1)
    F = z(F, v[O]);
  return {
    c() {
      e = ie("label"), R && R.c(), t = ue(), E && E.c(), i = ue(), te(r.$$.fragment), l = ue(), k && k.c(), a = ue(), o.c(), u = ue(), te(c.$$.fragment), d = ue(), A && A.c(), oe(e, F);
    },
    m(O, U) {
      j(O, e, U), R && R.m(e, null), x(e, t), E && E.m(e, null), x(e, i), $(r, e, null), x(e, l), k && k.m(e, null), x(e, a), y[s].m(e, null), x(e, u), $(c, e, null), x(e, d), A && A.m(e, null), n[78](e), p = !0, I || (b = [
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
        ce(_ = Je.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ce(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        he(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        he(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], I = !0);
    },
    p(O, U) {
      !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" ? R ? (R.p(O, U), U[0] & /*textarea, variant*/
      49152 && C(R, 1)) : (R = ml(O), R.c(), C(R, 1), R.m(e, t)) : R && (Pe(), S(R, 1, 1, () => {
        R = null;
      }), He()), /*textarea*/
      O[14] || /*variant*/
      O[15] === "outlined" ? E ? (E.p(O, U), U[0] & /*textarea, variant*/
      49152 && C(E, 1)) : (E = _l(O), E.c(), C(E, 1), E.m(e, i)) : E && (Pe(), S(E, 1, 1, () => {
        E = null;
      }), He());
      const W = {};
      U[2] & /*$$scope*/
      33554432 && (W.$$scope = { dirty: U, ctx: O }), r.$set(W), k && k.p && (!p || U[2] & /*$$scope*/
      33554432) && Se(
        k,
        L,
        O,
        /*$$scope*/
        O[87],
        p ? Ee(
          L,
          /*$$scope*/
          O[87],
          U,
          null
        ) : Te(
          /*$$scope*/
          O[87]
        ),
        null
      );
      let N = s;
      s = D(O), s === N ? y[s].p(O, U) : (Pe(), S(y[N], 1, 1, () => {
        y[N] = null;
      }), He(), o = y[s], o ? o.p(O, U) : (o = y[s] = g[s](O), o.c()), C(o, 1), o.m(e, u));
      const B = {};
      U[2] & /*$$scope*/
      33554432 && (B.$$scope = { dirty: U, ctx: O }), c.$set(B), !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" && /*ripple*/
      O[11] ? A ? (A.p(O, U), U[0] & /*textarea, variant, ripple*/
      51200 && C(A, 1)) : (A = Al(O), A.c(), C(A, 1), A.m(e, null)) : A && (Pe(), S(A, 1, 1, () => {
        A = null;
      }), He()), oe(e, F = de(v, [
        (!p || U[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | U[1] & /*$$slots*/
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
        (!p || U[0] & /*internalStyles, style*/
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
        U[1] & /*$$restProps*/
        32768 && Xt(
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
      p || (C(R), C(E), C(r.$$.fragment, O), C(k, O), C(o), C(c.$$.fragment, O), C(A), p = !0);
    },
    o(O) {
      S(R), S(E), S(r.$$.fragment, O), S(k, O), S(o), S(c.$$.fragment, O), S(A), p = !1;
    },
    d(O) {
      O && V(e), R && R.d(), E && E.d(), ee(r), k && k.d(O), y[s].d(), ee(c), A && A.d(), n[78](null), I = !1, Ze(b);
    }
  };
}
function Xc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = ye(
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
      33554432) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          t,
          /*$$scope*/
          r[87],
          l,
          Pc
        ) : Te(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Zc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = ye(
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
      33554432) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          t,
          /*$$scope*/
          r[87],
          l,
          wc
        ) : Te(
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
      S(i, r), e = !1;
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
      r && r.c(), e = ue(), l && l.c(), t = Xe();
    },
    m(a, s) {
      r && r.m(a, s), j(a, e, s), l && l.m(a, s), j(a, t, s), i = !0;
    },
    p(a, s) {
      /*variant*/
      a[15] === "filled" ? r || (r = pl(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? l ? (l.p(a, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && C(l, 1)) : (l = gl(a), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (Pe(), S(l, 1, 1, () => {
        l = null;
      }), He());
    },
    i(a) {
      i || (C(l), i = !0);
    },
    o(a) {
      S(l), i = !1;
    },
    d(a) {
      a && (V(e), V(t)), r && r.d(a), l && l.d(a);
    }
  };
}
function pl(n) {
  let e;
  return {
    c() {
      e = ie("span"), H(e, "class", "mdc-text-field__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
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
    $$slots: { default: [Qc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
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
      32768 ? de(i, [
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
      n[57](null), ee(e, l);
    }
  };
}
function Qc(n) {
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
  ), l = ye(
    r,
    n,
    /*$$scope*/
    n[87],
    hl
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Se(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          s,
          Wc
        ) : Te(
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
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
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
    $$slots: { default: [xc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new pa({ props: r }), n[59](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? de(i, [
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
    $$slots: { default: [Jc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
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
      32768 ? de(i, [
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
      n[58](null), ee(e, l);
    }
  };
}
function Jc(n) {
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
  ), l = ye(
    r,
    n,
    /*$$scope*/
    n[87],
    fl
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Se(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          s,
          Kc
        ) : Te(
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
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
    }
  };
}
function xc(n) {
  let e, t, i = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && bl(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), j(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && C(i, 1)) : (i = bl(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (Pe(), S(i, 1, 1, () => {
        i = null;
      }), He());
    },
    i(r) {
      t || (C(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && V(e), i && i.d(r);
    }
  };
}
function $c(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = ye(
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
      33554432) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          t,
          /*$$scope*/
          r[87],
          l,
          Gc
        ) : Te(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ed(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = (
    /*#slots*/
    n[56].prefix
  ), f = ye(
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
  function _(g) {
    n[69](g);
  }
  function p(g) {
    n[70](g);
  }
  function I(g) {
    n[71](g);
  }
  function b(g) {
    n[72](g);
  }
  let R = {};
  for (let g = 0; g < m.length; g += 1)
    R = z(R, m[g]);
  /*value*/
  n[0] !== void 0 && (R.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (R.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (R.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (R.invalid = /*invalid*/
  n[1]), i = new kc({ props: R }), n[68](i), se.push(() => ht(i, "value", _)), se.push(() => ht(i, "files", p)), se.push(() => ht(i, "dirty", I)), se.push(() => ht(i, "invalid", b)), i.$on(
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
  let E = (
    /*suffix*/
    n[21] != null && vl(n)
  );
  const L = (
    /*#slots*/
    n[56].suffix
  ), k = ye(
    L,
    n,
    /*$$scope*/
    n[87],
    ol
  );
  return {
    c() {
      f && f.c(), e = ue(), h && h.c(), t = ue(), te(i.$$.fragment), o = ue(), E && E.c(), u = ue(), k && k.c();
    },
    m(g, y) {
      f && f.m(g, y), j(g, e, y), h && h.m(g, y), j(g, t, y), $(i, g, y), j(g, o, y), E && E.m(g, y), j(g, u, y), k && k.m(g, y), c = !0;
    },
    p(g, y) {
      f && f.p && (!c || y[2] & /*$$scope*/
      33554432) && Se(
        f,
        d,
        g,
        /*$$scope*/
        g[87],
        c ? Ee(
          d,
          /*$$scope*/
          g[87],
          y,
          jc
        ) : Te(
          /*$$scope*/
          g[87]
        ),
        ul
      ), /*prefix*/
      g[20] != null ? h ? (h.p(g, y), y[0] & /*prefix*/
      1048576 && C(h, 1)) : (h = Il(g), h.c(), C(h, 1), h.m(t.parentNode, t)) : h && (Pe(), S(h, 1, 1, () => {
        h = null;
      }), He());
      const D = y[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | y[1] & /*$$restProps*/
      32768 ? de(m, [
        y[0] & /*type*/
        262144 && { type: (
          /*type*/
          g[18]
        ) },
        y[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          g[12]
        ) },
        y[0] & /*required*/
        8192 && { required: (
          /*required*/
          g[13]
        ) },
        y[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          g[19]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          g[27]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          g[27]
        ) },
        y[0] & /*noLabel, label*/
        196608 && Ce(
          /*noLabel*/
          g[16] && /*label*/
          g[17] != null ? { placeholder: (
            /*label*/
            g[17]
          ) } : {}
        ),
        y[1] & /*$$restProps*/
        32768 && Ce(Ve(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !r && y[0] & /*value*/
      1 && (r = !0, D.value = /*value*/
      g[0], ft(() => r = !1)), !l && y[0] & /*files*/
      8 && (l = !0, D.files = /*files*/
      g[3], ft(() => l = !1)), !a && y[0] & /*dirty*/
      16 && (a = !0, D.dirty = /*dirty*/
      g[4], ft(() => a = !1)), !s && y[0] & /*invalid*/
      2 && (s = !0, D.invalid = /*invalid*/
      g[1], ft(() => s = !1)), i.$set(D), /*suffix*/
      g[21] != null ? E ? (E.p(g, y), y[0] & /*suffix*/
      2097152 && C(E, 1)) : (E = vl(g), E.c(), C(E, 1), E.m(u.parentNode, u)) : E && (Pe(), S(E, 1, 1, () => {
        E = null;
      }), He()), k && k.p && (!c || y[2] & /*$$scope*/
      33554432) && Se(
        k,
        L,
        g,
        /*$$scope*/
        g[87],
        c ? Ee(
          L,
          /*$$scope*/
          g[87],
          y,
          Vc
        ) : Te(
          /*$$scope*/
          g[87]
        ),
        ol
      );
    },
    i(g) {
      c || (C(f, g), C(h), C(i.$$.fragment, g), C(E), C(k, g), c = !0);
    },
    o(g) {
      S(f, g), S(h), S(i.$$.fragment, g), S(E), S(k, g), c = !1;
    },
    d(g) {
      g && (V(e), V(t), V(o), V(u)), f && f.d(g), h && h.d(g), n[68](null), ee(i, g), E && E.d(g), k && k.d(g);
    }
  };
}
function td(n) {
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
    h = z(h, u[p]);
  /*value*/
  n[0] !== void 0 && (h.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (h.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (h.invalid = /*invalid*/
  n[1]), t = new Fc({ props: h }), n[60](t), se.push(() => ht(t, "value", c)), se.push(() => ht(t, "dirty", d)), se.push(() => ht(t, "invalid", f)), t.$on(
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
  ), _ = ye(
    m,
    n,
    /*$$scope*/
    n[87],
    cl
  );
  return {
    c() {
      e = ie("span"), te(t.$$.fragment), a = ue(), _ && _.c(), H(e, "class", s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(p, I) {
      j(p, e, I), $(t, e, null), x(e, a), _ && _.m(e, null), o = !0;
    },
    p(p, I) {
      const b = I[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | I[1] & /*$$restProps*/
      32768 ? de(u, [
        I[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        I[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        I[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        I[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        I[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        I[1] & /*$$restProps*/
        32768 && Ce(Ve(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && I[0] & /*value*/
      1 && (i = !0, b.value = /*value*/
      p[0], ft(() => i = !1)), !r && I[0] & /*dirty*/
      16 && (r = !0, b.dirty = /*dirty*/
      p[4], ft(() => r = !1)), !l && I[0] & /*invalid*/
      2 && (l = !0, b.invalid = /*invalid*/
      p[1], ft(() => l = !1)), t.$set(b), _ && _.p && (!o || I[2] & /*$$scope*/
      33554432) && Se(
        _,
        m,
        p,
        /*$$scope*/
        p[87],
        o ? Ee(
          m,
          /*$$scope*/
          p[87],
          I,
          qc
        ) : Te(
          /*$$scope*/
          p[87]
        ),
        cl
      ), (!o || I[1] & /*$$restProps*/
      32768 && s !== (s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && H(e, "class", s);
    },
    i(p) {
      o || (C(t.$$.fragment, p), C(_, p), o = !0);
    },
    o(p) {
      S(t.$$.fragment, p), S(_, p), o = !1;
    },
    d(p) {
      p && V(e), n[60](null), ee(t), _ && _.d(p);
    }
  };
}
function Il(n) {
  let e, t;
  return e = new Sc({
    props: {
      $$slots: { default: [nd] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function nd(n) {
  let e;
  return {
    c() {
      e = ut(
        /*prefix*/
        n[20]
      );
    },
    m(t, i) {
      j(t, e, i);
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
      t && V(e);
    }
  };
}
function vl(n) {
  let e, t;
  return e = new Tc({
    props: {
      $$slots: { default: [id] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function id(n) {
  let e;
  return {
    c() {
      e = ut(
        /*suffix*/
        n[21]
      );
    },
    m(t, i) {
      j(t, e, i);
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
      t && V(e);
    }
  };
}
function rd(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = ye(
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
      33554432) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          t,
          /*$$scope*/
          r[87],
          l,
          Bc
        ) : Te(
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
      S(i, r), e = !1;
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
    r = z(r, i[l]);
  return e = new ma({ props: r }), n[77](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? de(i, [Ce(Ve(
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
    $$slots: { default: [ld] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new Ec({ props: r }), e.$on(
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
      32768 ? de(i, [Ce(Ve(
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
      ee(e, l);
    }
  };
}
function ld(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), i = ye(
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
      33554432) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          t,
          /*$$scope*/
          r[87],
          l,
          Nc
        ) : Te(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function sd(n) {
  let e, t, i, r, l;
  const a = [Yc, zc], s = [];
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
      t.c(), i = ue(), u && u.c(), r = Xe();
    },
    m(c, d) {
      s[e].m(c, d), j(c, i, d), u && u.m(c, d), j(c, r, d), l = !0;
    },
    p(c, d) {
      t.p(c, d), /*$$slots*/
      c[47].helper ? u ? (u.p(c, d), d[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Cl(c), u.c(), C(u, 1), u.m(r.parentNode, r)) : u && (Pe(), S(u, 1, 1, () => {
        u = null;
      }), He());
    },
    i(c) {
      l || (C(t), C(u), l = !0);
    },
    o(c) {
      S(t), S(u), l = !1;
    },
    d(c) {
      c && (V(i), V(r)), s[e].d(c), u && u.d(c);
    }
  };
}
const yl = ([n, e]) => `${n}: ${e};`, El = ([n, e]) => `${n}: ${e};`;
function ad(n, e, t) {
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
  let l = fe(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = or(a), { applyPassive: u } = ha, c = tt(xe());
  let d = () => {
  };
  function f(w) {
    return w === d;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: _ = "" } = e, { ripple: p = !0 } = e, { disabled: I = !1 } = e, { required: b = !1 } = e, { textarea: R = !1 } = e, { variant: E = R ? "outlined" : "standard" } = e, { noLabel: L = !1 } = e, { label: k = void 0 } = e, { type: g = "text" } = e, { value: y = l.input$emptyValueUndefined ? void 0 : d } = e, { files: D = d } = e;
  const A = !f(y) || !f(D);
  f(y) && (y = void 0), f(D) && (D = null);
  let { invalid: v = d } = e, { updateInvalid: F = f(v) } = e;
  f(v) && (v = !1);
  let { dirty: O = !1 } = e, { prefix: U = void 0 } = e, { suffix: W = void 0 } = e, { validateOnValueChange: N = F } = e, { useNativeValidation: B = F } = e, { withLeadingIcon: M = d } = e, { withTrailingIcon: T = d } = e, { input: Z = void 0 } = e, { floatingLabel: Fe = void 0 } = e, { lineRipple: Me = void 0 } = e, { notchedOutline: _e = void 0 } = e, ze, G, Q = {}, ke = {}, De, Ne = !1, ne = Ge("SMUI:addLayoutListener"), K, Ye, Be = new Promise((w) => Ye = w), At, X, ve, je, Ue = y;
  ne && (K = ne(Y)), at(() => {
    if (t(54, G = new uc(
      {
        // getRootAdapterMethods_
        addClass: st,
        removeClass: $e,
        hasClass: ot,
        registerTextFieldInteractionHandler: (w, mt) => pe().addEventListener(w, mt),
        deregisterTextFieldInteractionHandler: (w, mt) => pe().removeEventListener(w, mt),
        registerValidationAttributeChangeHandler: (w) => {
          const mt = (qn) => qn.map((Gn) => Gn.attributeName).filter((Gn) => Gn), ei = new MutationObserver((qn) => {
            B && w(mt(qn));
          }), Bi = { attributes: !0 };
          return Z && ei.observe(Z.getElement(), Bi), ei;
        },
        deregisterValidationAttributeChangeHandler: (w) => {
          w.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var w;
          return (w = Z == null ? void 0 : Z.getElement()) !== null && w !== void 0 ? w : null;
        },
        setInputAttr: (w, mt) => {
          Z == null || Z.addAttr(w, mt);
        },
        removeInputAttr: (w) => {
          Z == null || Z.removeAttr(w);
        },
        isFocused: () => document.activeElement === (Z == null ? void 0 : Z.getElement()),
        registerInputInteractionHandler: (w, mt) => {
          Z == null || Z.getElement().addEventListener(w, mt, u());
        },
        deregisterInputInteractionHandler: (w, mt) => {
          Z == null || Z.getElement().removeEventListener(w, mt, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (w) => Fe && Fe.float(w),
        getLabelWidth: () => Fe ? Fe.getWidth() : 0,
        hasLabel: () => !!Fe,
        shakeLabel: (w) => Fe && Fe.shake(w),
        setLabelRequired: (w) => Fe && Fe.setRequired(w),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Me && Me.activate(),
        deactivateLineRipple: () => Me && Me.deactivate(),
        setLineRippleTransformOrigin: (w) => Me && Me.setRippleCenter(w),
        // getOutlineAdapterMethods_
        closeOutline: () => _e && _e.closeNotch(),
        hasOutline: () => !!_e,
        notchOutline: (w) => _e && _e.notch(w)
      },
      {
        get helperText() {
          return ve;
        },
        get characterCounter() {
          return je;
        },
        get leadingIcon() {
          return At;
        },
        get trailingIcon() {
          return X;
        }
      }
    )), A) {
      if (Z == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      G.init();
    } else
      cr().then(() => {
        if (Z == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        G.init();
      });
    return Ye(), () => {
      G.destroy();
    };
  }), Zt(() => {
    K && K();
  });
  function St(w) {
    t(29, At = w.detail);
  }
  function q(w) {
    t(30, X = w.detail);
  }
  function le(w) {
    t(32, je = w.detail);
  }
  function J(w) {
    t(27, De = w.detail);
  }
  function We(w) {
    t(31, ve = w.detail);
  }
  function ot(w) {
    var mt;
    return w in Q ? (mt = Q[w]) !== null && mt !== void 0 ? mt : null : pe().classList.contains(w);
  }
  function st(w) {
    Q[w] || t(25, Q[w] = !0, Q);
  }
  function $e(w) {
    (!(w in Q) || Q[w]) && t(25, Q[w] = !1, Q);
  }
  function Ae(w, mt) {
    ke[w] != mt && (mt === "" || mt == null ? (delete ke[w], t(26, ke)) : t(26, ke[w] = mt, ke));
  }
  function ae() {
    Z == null || Z.focus();
  }
  function Bt() {
    Z == null || Z.blur();
  }
  function Y() {
    if (G) {
      const w = G.shouldFloat;
      G.notchOutline(w);
    }
  }
  function pe() {
    return ze;
  }
  function be(w) {
    se[w ? "unshift" : "push"](() => {
      Fe = w, t(5, Fe);
    });
  }
  function it(w) {
    se[w ? "unshift" : "push"](() => {
      Fe = w, t(5, Fe);
    });
  }
  function Qt(w) {
    se[w ? "unshift" : "push"](() => {
      _e = w, t(7, _e);
    });
  }
  function jn(w) {
    se[w ? "unshift" : "push"](() => {
      Z = w, t(2, Z);
    });
  }
  function _i(w) {
    y = w, t(0, y);
  }
  function bi(w) {
    O = w, t(4, O);
  }
  function Ii(w) {
    v = w, t(1, v), t(54, G), t(19, F);
  }
  const vi = () => t(28, Ne = !1), Ai = () => t(28, Ne = !0), En = (w) => ge(ze, "blur", w), Ci = (w) => ge(ze, "focus", w);
  function xn(w) {
    se[w ? "unshift" : "push"](() => {
      Z = w, t(2, Z);
    });
  }
  function yi(w) {
    y = w, t(0, y);
  }
  function $n(w) {
    D = w, t(3, D);
  }
  function Sn(w) {
    O = w, t(4, O);
  }
  function Ei(w) {
    v = w, t(1, v), t(54, G), t(19, F);
  }
  const Si = () => t(28, Ne = !1), Ti = () => t(28, Ne = !0), Li = (w) => ge(ze, "blur", w), Oi = (w) => ge(ze, "focus", w);
  function Ri(w) {
    se[w ? "unshift" : "push"](() => {
      Me = w, t(6, Me);
    });
  }
  function ki(w) {
    se[w ? "unshift" : "push"](() => {
      ze = w, t(24, ze);
    });
  }
  const Di = () => t(29, At = void 0), Mi = () => t(30, X = void 0), Fi = () => t(32, je = void 0);
  function Ni(w) {
    se[w ? "unshift" : "push"](() => {
      ze = w, t(24, ze);
    });
  }
  const Ui = () => t(29, At = void 0), wi = () => t(30, X = void 0), Pi = () => {
    t(27, De = void 0), t(31, ve = void 0);
  }, Hi = () => t(32, je = void 0);
  return n.$$set = (w) => {
    e = z(z({}, e), et(w)), t(46, l = fe(e, r)), "use" in w && t(8, h = w.use), "class" in w && t(9, m = w.class), "style" in w && t(10, _ = w.style), "ripple" in w && t(11, p = w.ripple), "disabled" in w && t(12, I = w.disabled), "required" in w && t(13, b = w.required), "textarea" in w && t(14, R = w.textarea), "variant" in w && t(15, E = w.variant), "noLabel" in w && t(16, L = w.noLabel), "label" in w && t(17, k = w.label), "type" in w && t(18, g = w.type), "value" in w && t(0, y = w.value), "files" in w && t(3, D = w.files), "invalid" in w && t(1, v = w.invalid), "updateInvalid" in w && t(19, F = w.updateInvalid), "dirty" in w && t(4, O = w.dirty), "prefix" in w && t(20, U = w.prefix), "suffix" in w && t(21, W = w.suffix), "validateOnValueChange" in w && t(48, N = w.validateOnValueChange), "useNativeValidation" in w && t(49, B = w.useNativeValidation), "withLeadingIcon" in w && t(22, M = w.withLeadingIcon), "withTrailingIcon" in w && t(23, T = w.withTrailingIcon), "input" in w && t(2, Z = w.input), "floatingLabel" in w && t(5, Fe = w.floatingLabel), "lineRipple" in w && t(6, Me = w.lineRipple), "notchedOutline" in w && t(7, _e = w.notchedOutline), "$$scope" in w && t(87, s = w.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, i = Z && Z.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && G && G.isValid() !== !v && (F ? t(1, v = !G.isValid()) : G.setValid(!v)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && G && G.getValidateOnValueChange() !== N && G.setValidateOnValueChange(f(N) ? !1 : N), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && G && G.setUseNativeValidation(f(B) ? !0 : B), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && G && G.setDisabled(I), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && G && A && Ue !== y) {
      t(55, Ue = y);
      const w = `${y}`;
      G.getValue() !== w && G.setValue(w);
    }
  }, [
    y,
    v,
    Z,
    D,
    O,
    Fe,
    Me,
    _e,
    h,
    m,
    _,
    p,
    I,
    b,
    R,
    E,
    L,
    k,
    g,
    F,
    U,
    W,
    M,
    T,
    ze,
    Q,
    ke,
    De,
    Ne,
    At,
    X,
    ve,
    je,
    i,
    c,
    f,
    A,
    Be,
    St,
    q,
    le,
    J,
    We,
    st,
    $e,
    Ae,
    l,
    o,
    N,
    B,
    ae,
    Bt,
    Y,
    pe,
    G,
    Ue,
    a,
    be,
    it,
    Qt,
    jn,
    _i,
    bi,
    Ii,
    vi,
    Ai,
    En,
    Ci,
    xn,
    yi,
    $n,
    Sn,
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
class ga extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      ad,
      sd,
      Ie,
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
function od(n) {
  let e;
  return {
    c() {
      e = ut(
        /*content*/
        n[7]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      128 && Ct(
        e,
        /*content*/
        t[7]
      );
    },
    i: nt,
    o: nt,
    d(t) {
      t && V(e);
    }
  };
}
function ud(n) {
  let e;
  const t = (
    /*#slots*/
    n[15].default
  ), i = ye(
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
      16384) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[14],
        e ? Ee(
          t,
          /*$$scope*/
          r[14],
          l,
          null
        ) : Te(
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
function cd(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = [ud, od], f = [];
  function h(p, I) {
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
  ], _ = {};
  for (let p = 0; p < m.length; p += 1)
    _ = z(_, m[p]);
  return {
    c() {
      e = ie("i"), i.c(), oe(e, _);
    },
    m(p, I) {
      j(p, e, I), f[t].m(e, null), n[16](e), o = !0, u || (c = [
        ce(s = Je.call(
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
    p(p, [I]) {
      let b = t;
      t = h(p), t === b ? f[t].p(p, I) : (Pe(), S(f[b], 1, 1, () => {
        f[b] = null;
      }), He(), i = f[t], i ? i.p(p, I) : (i = f[t] = d[t](p), i.c()), C(i, 1), i.m(e, null)), oe(e, _ = de(m, [
        (!o || I & /*className*/
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
        (!o || I & /*tabindex*/
        8 && l !== (l = /*tabindex*/
        p[3] === -1 ? "true" : "false")) && { "aria-hidden": l },
        (!o || I & /*role, disabled*/
        20 && a !== (a = /*role*/
        p[2] === "button" ? (
          /*disabled*/
          p[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": a },
        I & /*roleProps*/
        256 && /*roleProps*/
        p[8],
        I & /*internalAttrs*/
        64 && /*internalAttrs*/
        p[6],
        I & /*$$restProps*/
        4096 && /*$$restProps*/
        p[12]
      ])), s && me(s.update) && I & /*use*/
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
      p && V(e), f[t].d(), n[16](null), u = !1, Ze(c);
    }
  };
}
function dd(n, e, t) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let l = fe(e, r), a, { $$slots: s = {}, $$scope: o } = e;
  const u = tt(xe());
  let { use: c = [] } = e, { class: d = "" } = e, { role: f = void 0 } = e, { tabindex: h = f === "button" ? 0 : -1 } = e, { disabled: m = !1 } = e, _, p, I = {};
  const b = Ge("SMUI:textfield:icon:leading");
  rt(n, b, (A) => t(18, a = A));
  const R = a;
  let E;
  at(() => (p = new dc({
    getAttr: L,
    setAttr: k,
    removeAttr: g,
    setContent: (A) => {
      t(7, E = A);
    },
    registerInteractionHandler: (A, v) => y().addEventListener(A, v),
    deregisterInteractionHandler: (A, v) => y().removeEventListener(A, v),
    notifyIconAction: () => ge(y(), "SMUITextField:icon", void 0, void 0, !0)
  }), ge(
    y(),
    R ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    p
  ), p.init(), () => {
    ge(
      y(),
      R ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      p
    ), p.destroy();
  }));
  function L(A) {
    var v;
    return A in I ? (v = I[A]) !== null && v !== void 0 ? v : null : y().getAttribute(A);
  }
  function k(A, v) {
    I[A] !== v && t(6, I[A] = v, I);
  }
  function g(A) {
    (!(A in I) || I[A] != null) && t(6, I[A] = void 0, I);
  }
  function y() {
    return _;
  }
  function D(A) {
    se[A ? "unshift" : "push"](() => {
      _ = A, t(5, _);
    });
  }
  return n.$$set = (A) => {
    e = z(z({}, e), et(A)), t(12, l = fe(e, r)), "use" in A && t(0, c = A.use), "class" in A && t(1, d = A.class), "role" in A && t(2, f = A.role), "tabindex" in A && t(3, h = A.tabindex), "disabled" in A && t(4, m = A.disabled), "$$scope" in A && t(14, o = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*role, tabindex*/
    12 && t(8, i = { role: f, tabindex: h });
  }, [
    c,
    d,
    f,
    h,
    m,
    _,
    I,
    E,
    i,
    u,
    b,
    R,
    l,
    y,
    o,
    s,
    D
  ];
}
class fd extends Re {
  constructor(e) {
    super(), Oe(this, e, dd, cd, Ie, {
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
function hd(n) {
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
    n[0]), e = new ga({ props: l }), se.push(() => ht(e, "value", r)), {
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
        a[0], ft(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function md(n) {
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
    $$slots: { leadingIcon: [gd] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new ga({ props: l }), se.push(() => ht(e, "value", r)), {
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
        a[0], ft(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function pd(n) {
  let e;
  return {
    c() {
      e = ut(
        /*icon*/
        n[3]
      );
    },
    m(t, i) {
      j(t, e, i);
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
      t && V(e);
    }
  };
}
function gd(n) {
  let e, t;
  return e = new fd({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [pd] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function _d(n) {
  let e, t, i, r;
  const l = [md, hd], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function bd(n, e, t) {
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
class Id extends Re {
  constructor(e) {
    super(), Oe(this, e, bd, _d, Ie, {
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
var vd = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Ad = {
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
}, bt;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(bt || (bt = {}));
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
var on, $t, Qe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
on = {}, on["" + Qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", on["" + Qe.LIST_ITEM_CLASS] = "mdc-list-item", on["" + Qe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", on["" + Qe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", on["" + Qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", on["" + Qe.ROOT] = "mdc-list";
var On = ($t = {}, $t["" + Qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $t["" + Qe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $t["" + Qe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $t["" + Qe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $t["" + Qe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $t["" + Qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $t["" + Qe.ROOT] = "mdc-deprecated-list", $t), un = {
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
    .` + On[Qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + On[Qe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Qe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Qe.LIST_ITEM_CLASS + ` a,
    .` + Qe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Qe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + On[Qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + On[Qe.LIST_ITEM_CLASS] + ` a,
    .` + On[Qe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + On[Qe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, gt = {
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
var Cd = ["input", "button", "textarea", "select"], Vt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Cd.indexOf(t) === -1 && n.preventDefault();
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
function yd() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Ed(n, e) {
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
    ba(e);
  }, gt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Sd(r, l, s, e) : o = Td(r, s, e), o !== -1 && !a && i(o), o;
}
function Sd(n, e, t, i) {
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
function Td(n, e, t) {
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
function _a(n) {
  return n.typeaheadBuffer.length > 0;
}
function ba(n) {
  n.typeaheadBuffer = "";
}
function Sl(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, l = n.focusItemAtIndex, a = n.sortedIndexByFirstChar, s = n.isItemAtIndexDisabled, o = pt(t) === "ArrowLeft", u = pt(t) === "ArrowUp", c = pt(t) === "ArrowRight", d = pt(t) === "ArrowDown", f = pt(t) === "Home", h = pt(t) === "End", m = pt(t) === "Enter", _ = pt(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || d || f || h || m)
    return -1;
  var p = !_ && t.key.length === 1;
  if (p) {
    Vt(t);
    var I = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return sr(I, e);
  }
  if (!_)
    return -1;
  i && Vt(t);
  var b = i && _a(e);
  if (b) {
    var I = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return sr(I, e);
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
function Ld(n) {
  return n instanceof Array;
}
var Od = ["Alt", "Control", "Meta", "Shift"];
function Tl(n) {
  var e = new Set(n ? Od.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var Rd = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = gt.UNSET_INDEX, i.focusedItemIndex = gt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = yd(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return un;
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
        return gt;
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
      if (t !== gt.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, Qe.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = gt.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
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
      return this.hasTypeahead && _a(this.typeaheadState);
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
      var l = this, a, s = pt(t) === "ArrowLeft", o = pt(t) === "ArrowUp", u = pt(t) === "ArrowRight", c = pt(t) === "ArrowDown", d = pt(t) === "Home", f = pt(t) === "End", h = pt(t) === "Enter", m = pt(t) === "Spacebar", _ = this.isVertical && c || !this.isVertical && u, p = this.isVertical && o || !this.isVertical && s, I = t.key === "A" || t.key === "a", b = Tl(t);
      if (this.adapter.isRootFocused()) {
        if ((p || f) && b([]))
          t.preventDefault(), this.focusLastElement();
        else if ((_ || d) && b([]))
          t.preventDefault(), this.focusFirstElement();
        else if (p && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var R = this.focusLastElement();
          R !== -1 && this.setSelectedIndexOnAction(R, !1);
        } else if (_ && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var R = this.focusFirstElement();
          R !== -1 && this.setSelectedIndexOnAction(R, !1);
        }
        if (this.hasTypeahead) {
          var E = {
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
          Sl(E, this.typeaheadState);
        }
        return;
      }
      var L = this.adapter.getFocusedElementIndex();
      if (!(L === -1 && (L = r, L < 0))) {
        if (_ && b([]))
          Vt(t), this.focusNextElement(L);
        else if (p && b([]))
          Vt(t), this.focusPrevElement(L);
        else if (_ && b(["Shift"]) && this.isCheckboxList) {
          Vt(t);
          var R = this.focusNextElement(L);
          R !== -1 && this.setSelectedIndexOnAction(R, !1);
        } else if (p && b(["Shift"]) && this.isCheckboxList) {
          Vt(t);
          var R = this.focusPrevElement(L);
          R !== -1 && this.setSelectedIndexOnAction(R, !1);
        } else if (d && b([]))
          Vt(t), this.focusFirstElement();
        else if (f && b([]))
          Vt(t), this.focusLastElement();
        else if (d && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Vt(t), this.isIndexDisabled(L))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, L, L);
        } else if (f && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Vt(t), this.isIndexDisabled(L))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(L, this.adapter.getListItemCount() - 1, L);
        } else if (I && b(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === gt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || m) && b([])) {
          if (i) {
            var k = t.target;
            if (k && k.tagName === "A" && h || (Vt(t), this.isIndexDisabled(L)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(L, !1), this.adapter.notifyAction(L));
          }
        } else if ((h || m) && b(["Shift"]) && this.isCheckboxList) {
          var k = t.target;
          if (k && k.tagName === "A" && h || (Vt(t), this.isIndexDisabled(L)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : L, L, L), this.adapter.notifyAction(L));
        }
        if (this.hasTypeahead) {
          var E = {
            event: t,
            focusItemAtIndex: function(y) {
              l.focusItemAtIndex(y);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(y) {
              return l.isIndexDisabled(y);
            }
          };
          Sl(E, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var l, a = Tl(r);
      t !== gt.UNSET_INDEX && (this.isIndexDisabled(t) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, un.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, un.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = Qe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Qe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== gt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== gt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === gt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, un.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? un.ARIA_CURRENT : un.ARIA_SELECTED;
      if (this.selectedIndex !== gt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== gt.UNSET_INDEX) {
        var l = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, l);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? un.ARIA_SELECTED : un.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== gt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, l = i.isUserInteraction ? new Set(r === gt.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), s = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = l == null ? void 0 : l.has(o), c = t.indexOf(o) >= 0;
        c !== u && s.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, a, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && s.length && this.adapter.notifySelectionChange(s);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var l = new Set(this.selectedIndex === gt.UNSET_INDEX ? [] : this.selectedIndex), a = !(l != null && l.has(r)), s = Hn([t, i].sort(), 2), o = s[0], u = s[1], c = this.getSelectionAttribute(), d = [], f = o; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var h = l.has(f);
          a !== h && (d.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, a), this.adapter.setAttributeForElementIndex(f, c, "" + a), a ? l.add(f) : l.delete(f));
        }
      d.length && (this.selectedIndex = Qn([], Hn(l)), this.adapter.notifySelectionChange(d));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === gt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== gt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== gt.UNSET_INDEX ? this.selectedIndex : Ld(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === gt.UNSET_INDEX;
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
      var s = this.selectedIndex === gt.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Ed(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      ba(this.typeaheadState);
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
var Ia = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Cn.TOP_START, i.originCorner = Cn.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ad;
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
      this.originCorner = this.originCorner ^ bt.RIGHT;
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), l = this.hasBit(i, bt.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, bt.RIGHT) ? "right" : "left", s = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, d = u.surfaceSize, f = (t = {}, t[a] = s, t[l] = o, t);
      c.width / d.width > Kn.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(a + " " + l), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, bt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, l = i.anchorSize, a = i.surfaceSize, s = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, bt.BOTTOM), u, c;
      o ? (u = r.top - s + this.anchorMargin.bottom, c = r.bottom - s - this.anchorMargin.bottom) : (u = r.top - s + this.anchorMargin.top, c = r.bottom - s + l.height - this.anchorMargin.top);
      var d = c - a.height > 0;
      !d && u > c + this.openBottomBias && (t = this.setBit(t, bt.BOTTOM));
      var f = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, bt.FLIP_RTL), m = this.hasBit(this.anchorCorner, bt.RIGHT) || this.hasBit(t, bt.RIGHT), _ = !1;
      f && h ? _ = !m : _ = m;
      var p, I;
      _ ? (p = r.left + l.width + this.anchorMargin.right, I = r.right - this.anchorMargin.right) : (p = r.left + this.anchorMargin.left, I = r.right + l.width - this.anchorMargin.left);
      var b = p - a.width > 0, R = I - a.width > 0, E = this.hasBit(t, bt.FLIP_RTL) && this.hasBit(t, bt.RIGHT);
      return R && E && f || !b && E ? t = this.unsetBit(t, bt.RIGHT) : (b && _ && f || b && !_ && m || !R && p >= I) && (t = this.setBit(t, bt.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, l = this.hasBit(t, bt.BOTTOM), a = this.hasBit(this.anchorCorner, bt.BOTTOM), s = e.numbers.MARGIN_TO_EDGE;
      return l ? (r = i.top + this.anchorMargin.top - s, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - s, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, bt.RIGHT), l = this.hasBit(this.anchorCorner, bt.RIGHT);
      if (r) {
        var a = l ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return l ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, bt.BOTTOM), l = this.hasBit(this.anchorCorner, bt.BOTTOM), a = 0;
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
      } catch (_) {
        i = { error: _ };
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
function kd(n) {
  return !!n.document && typeof n.document.createElement == "function";
}
function Dd(n, e) {
  if (kd(n) && e in Ll) {
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
var wn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Rn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Md = {
  FOCUS_ROOT_INDEX: -1
}, Mn;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Mn || (Mn = {}));
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
var Fd = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Mn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Md;
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
        var l = this.adapter.getAttributeFromElementAtIndex(r, Rn.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(l), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(t);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, Ia.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Mn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Mn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Mn.NONE:
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Rn.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, wn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, wn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Rn.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Rn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Rn.ARIA_DISABLED_ATTR, "true"));
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
var dt = {
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
var Nd = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = gn.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dt;
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
      this.disabled = t, this.disabled ? (this.adapter.addClass(dt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(dt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(dt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(dt.FOCUSED), r = t || i, l = this.adapter.hasClass(dt.REQUIRED);
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
      this.adapter.removeClass(dt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(dt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(dt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(dt.FOCUSED))) {
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
        var i = this.adapter.hasClass(dt.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(dt.INVALID), this.adapter.removeMenuClass(dt.MENU_INVALID)) : (this.adapter.addClass(dt.INVALID), this.adapter.addMenuClass(dt.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(dt.REQUIRED) && !this.adapter.hasClass(dt.DISABLED) ? this.getSelectedIndex() !== gn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(dt.REQUIRED) : this.adapter.removeClass(dt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Cn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(dt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(dt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(dt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(dt.REQUIRED);
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
var Ud = (
  /** @class */
  function(n) {
    ct(e, n);
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
const { document: wd } = Pa;
function Pd(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[34].default
  ), c = ye(
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
    f = z(f, d[h]);
  return {
    c() {
      e = ue(), t = ie("div"), c && c.c(), oe(t, f);
    },
    m(h, m) {
      j(h, e, m), j(h, t, m), c && c.m(t, null), n[35](t), a = !0, s || (o = [
        he(
          wd.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        ce(l = Je.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[10].call(null, t)
        ),
        he(t, "keydown", function() {
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
      4) && Se(
        c,
        u,
        n,
        /*$$scope*/
        n[33],
        a ? Ee(
          u,
          /*$$scope*/
          n[33],
          m,
          null
        ) : Te(
          /*$$scope*/
          n[33]
        ),
        null
      ), oe(t, f = de(d, [
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
      h && (V(e), V(t)), c && c.d(h), n[35](null), s = !1, Ze(o);
    }
  };
}
const Ol = ([n, e]) => `${n}: ${e};`;
function Hd(n, e, t) {
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
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s, o, u;
  const c = tt(xe());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { static: m = !1 } = e, { anchor: _ = !0 } = e, { fixed: p = !1 } = e, { open: I = m } = e, { managed: b = !1 } = e, { fullWidth: R = !1 } = e, { quickOpen: E = !1 } = e, { anchorElement: L = void 0 } = e, { anchorCorner: k = void 0 } = e, { anchorMargin: g = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: y = 0 } = e, { horizontallyCenteredOnViewport: D = !1 } = e, { openBottomBias: A = 0 } = e, { neverRestoreFocus: v = !1 } = e, F, O, U = {}, W = {}, N;
  qe("SMUI:list:role", "menu"), qe("SMUI:list:item:role", "menuitem");
  const B = Cn;
  at(() => (t(7, O = new Ia({
    addClass: T,
    removeClass: Z,
    hasClass: M,
    hasAnchor: () => !!L,
    notifyClose: () => {
      b || t(13, I = m), I || ge(F, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      b || t(13, I = m), I || ge(F, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      b || t(13, I = !0), I && ge(F, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      I || ge(F, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (K) => F.contains(K),
    isRtl: () => getComputedStyle(F).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (K) => {
      t(9, W["transform-origin"] = K, W);
    },
    isFocused: () => document.activeElement === F,
    saveFocus: () => {
      var K;
      N = (K = document.activeElement) !== null && K !== void 0 ? K : void 0;
    },
    restoreFocus: () => {
      !v && (!F || F.contains(document.activeElement)) && N && document.contains(N) && "focus" in N && N.focus();
    },
    getInnerDimensions: () => ({
      width: F.offsetWidth,
      height: F.offsetHeight
    }),
    getAnchorDimensions: () => L ? L.getBoundingClientRect() : null,
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
  })), ge(F, "SMUIMenuSurface:mount", {
    get open() {
      return I;
    },
    set open(K) {
      t(13, I = K);
    },
    closeProgrammatic: Fe
  }), O.init(), () => {
    var K;
    const Ye = O.isHoistedElement;
    O.destroy(), Ye && ((K = F.parentNode) === null || K === void 0 || K.removeChild(F));
  })), Zt(() => {
    var ne;
    _ && F && ((ne = F.parentElement) === null || ne === void 0 || ne.classList.remove("mdc-menu-surface--anchor"));
  });
  function M(ne) {
    return ne in U ? U[ne] : De().classList.contains(ne);
  }
  function T(ne) {
    U[ne] || t(8, U[ne] = !0, U);
  }
  function Z(ne) {
    (!(ne in U) || U[ne]) && t(8, U[ne] = !1, U);
  }
  function Fe(ne) {
    O.close(ne), t(13, I = !1);
  }
  function Me(ne) {
    O && I && !b && O.handleBodyClick(ne);
  }
  function _e() {
    return I;
  }
  function ze(ne) {
    t(13, I = ne);
  }
  function G(ne, K) {
    return O.setAbsolutePosition(ne, K);
  }
  function Q(ne) {
    return O.setIsHoisted(ne);
  }
  function ke() {
    return O.isFixed();
  }
  function De() {
    return F;
  }
  function Ne(ne) {
    se[ne ? "unshift" : "push"](() => {
      F = ne, t(6, F);
    });
  }
  return n.$$set = (ne) => {
    e = z(z({}, e), et(ne)), t(12, r = fe(e, i)), "use" in ne && t(0, d = ne.use), "class" in ne && t(1, f = ne.class), "style" in ne && t(2, h = ne.style), "static" in ne && t(3, m = ne.static), "anchor" in ne && t(15, _ = ne.anchor), "fixed" in ne && t(4, p = ne.fixed), "open" in ne && t(13, I = ne.open), "managed" in ne && t(16, b = ne.managed), "fullWidth" in ne && t(5, R = ne.fullWidth), "quickOpen" in ne && t(17, E = ne.quickOpen), "anchorElement" in ne && t(14, L = ne.anchorElement), "anchorCorner" in ne && t(18, k = ne.anchorCorner), "anchorMargin" in ne && t(19, g = ne.anchorMargin), "maxHeight" in ne && t(20, y = ne.maxHeight), "horizontallyCenteredOnViewport" in ne && t(21, D = ne.horizontallyCenteredOnViewport), "openBottomBias" in ne && t(22, A = ne.openBottomBias), "neverRestoreFocus" in ne && t(23, v = ne.neverRestoreFocus), "$$scope" in ne && t(33, a = ne.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && F && _ && !(!(t(30, s = F.parentElement) === null || s === void 0) && s.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = F.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, L = t(32, u = F.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && O && O.isOpen() !== I && (I ? O.open() : O.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && O && O.setQuickOpen(E), n.$$.dirty[0] & /*instance, fixed*/
    144 && O && O.setFixedPosition(p), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && O && O.setMaxHeight(y), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && O && O.setIsHorizontallyCenteredOnViewport(D), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && O && k != null && (typeof k == "string" ? O.setAnchorCorner(B[k]) : O.setAnchorCorner(k)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && O && O.setAnchorMargin(g), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && O && O.setOpenBottomBias(A);
  }, [
    d,
    f,
    h,
    m,
    p,
    R,
    F,
    O,
    U,
    W,
    c,
    Me,
    r,
    I,
    L,
    _,
    b,
    E,
    k,
    g,
    y,
    D,
    A,
    v,
    _e,
    ze,
    G,
    Q,
    ke,
    De,
    s,
    o,
    u,
    a,
    l,
    Ne
  ];
}
class Bd extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Hd,
      Pd,
      Ie,
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
function Vd(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function jd(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), i = ye(
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
      4194304) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[22],
        e ? Ee(
          t,
          /*$$scope*/
          r[22],
          l,
          null
        ) : Te(
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
function qd(n) {
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
    $$slots: { default: [jd] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = z(a, r[s]);
  return (
    /*open*/
    n[0] !== void 0 && (a.open = /*open*/
    n[0]), e = new Bd({ props: a }), n[18](e), se.push(() => ht(e, "open", l)), e.$on(
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
        546 ? de(r, [
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
        s[0], ft(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (C(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
      },
      d(s) {
        n[18](null), ee(e, s);
      }
    }
  );
}
function Gd(n, e, t) {
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
  let l = fe(e, r), { $$slots: a = {}, $$scope: s } = e;
  const { closest: o } = hi, u = tt(xe());
  let { use: c = [] } = e, { class: d = "" } = e, { open: f = !1 } = e, h, m, _, p;
  at(() => (t(3, m = new Fd({
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
      _.closeProgrammatic(U), ge(D(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (U) => p.getOrderedList().map((W) => W.element).indexOf(U),
    notifySelected: (U) => ge(
      D(),
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
    isSelectableItemAtIndex: (U) => !!o(p.getOrderedList()[U].element, `.${wn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (U) => {
      const W = p.getOrderedList(), N = o(W[U].element, `.${wn.MENU_SELECTION_GROUP}`), B = N == null ? void 0 : N.querySelector(`.${wn.MENU_SELECTED_LIST_ITEM}`);
      return B ? W.map((M) => M.element).indexOf(B) : -1;
    }
  })), ge(D(), "SMUIMenu:mount", m), m.init(), () => {
    m.destroy();
  }));
  function I(U) {
    m && m.handleKeydown(U);
  }
  function b(U) {
    _ || (_ = U.detail);
  }
  function R(U) {
    p || t(4, p = U.detail);
  }
  function E() {
    return f;
  }
  function L(U) {
    t(0, f = U);
  }
  function k(U) {
    m.setDefaultFocusState(U);
  }
  function g() {
    return m.getSelectedIndex();
  }
  function y() {
    return h;
  }
  function D() {
    return h.getElement();
  }
  function A(U) {
    se[U ? "unshift" : "push"](() => {
      h = U, t(2, h);
    });
  }
  function v(U) {
    f = U, t(0, f);
  }
  const F = () => m && m.handleMenuSurfaceOpened(), O = (U) => m && m.handleItemAction(p.getOrderedList()[U.detail.index].element);
  return n.$$set = (U) => {
    e = z(z({}, e), et(U)), t(9, l = fe(e, r)), "use" in U && t(10, c = U.use), "class" in U && t(1, d = U.class), "open" in U && t(0, f = U.open), "$$scope" in U && t(22, s = U.$$scope);
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
    I,
    b,
    R,
    l,
    c,
    E,
    L,
    k,
    g,
    y,
    D,
    a,
    A,
    v,
    F,
    O,
    s
  ];
}
class Kd extends Re {
  constructor(e) {
    super(), Oe(this, e, Gd, qd, Ie, {
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
function Wd(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), i = ye(
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
      8192) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[44],
        e ? Ee(
          t,
          /*$$scope*/
          r[44],
          l,
          null
        ) : Te(
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
function zd(n) {
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
      $$slots: { default: [Wd] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = z(u, de(r, [
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      4096 && l !== (l = /*component*/
      s[12])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
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
        33796095 ? de(r, [
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
      s && V(t), n[43](null), e && ee(e, s);
    }
  };
}
function Yd(n, e, t) {
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
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const { closest: o, matches: u } = hi, c = tt(xe());
  let { use: d = [] } = e, { class: f = "" } = e, { nonInteractive: h = !1 } = e, { dense: m = !1 } = e, { textualList: _ = !1 } = e, { avatarList: p = !1 } = e, { iconList: I = !1 } = e, { imageList: b = !1 } = e, { thumbnailList: R = !1 } = e, { videoList: E = !1 } = e, { twoLine: L = !1 } = e, { threeLine: k = !1 } = e, { vertical: g = !0 } = e, { wrapFocus: y = (s = Ge("SMUI:list:wrapFocus")) !== null && s !== void 0 ? s : !1 } = e, { singleSelection: D = !1 } = e, { disabledItemsFocusable: A = !1 } = e, { selectedIndex: v = -1 } = e, { radioList: F = !1 } = e, { checkList: O = !1 } = e, { hasTypeahead: U = !1 } = e, W, N, B = [], M = Ge("SMUI:list:role"), T = Ge("SMUI:list:nav");
  const Z = /* @__PURE__ */ new WeakMap();
  let Fe = Ge("SMUI:dialog:selection"), Me = Ge("SMUI:addLayoutListener"), _e, { component: ze = Ft } = e, { tag: G = ze === Ft ? T ? "nav" : "ul" : void 0 } = e;
  qe("SMUI:list:nonInteractive", h), qe("SMUI:separator:context", "list"), M || (D ? (M = "listbox", qe("SMUI:list:item:role", "option")) : F ? (M = "radiogroup", qe("SMUI:list:item:role", "radio")) : O ? (M = "group", qe("SMUI:list:item:role", "checkbox")) : (M = "list", qe("SMUI:list:item:role", void 0))), Me && (_e = Me(J)), at(() => {
    t(41, N = new Rd({
      addClassForElementIndex: X,
      focusItemAtIndex: Ae,
      getAttributeForElementIndex: (pe, be) => {
        var it, Qt;
        return (Qt = (it = Be()[pe]) === null || it === void 0 ? void 0 : it.getAttr(be)) !== null && Qt !== void 0 ? Qt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Be().map((pe) => pe.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => B.length,
      getPrimaryTextAtIndex: q,
      hasCheckboxAtIndex: (pe) => {
        var be, it;
        return (it = (be = Be()[pe]) === null || be === void 0 ? void 0 : be.hasCheckbox) !== null && it !== void 0 ? it : !1;
      },
      hasRadioAtIndex: (pe) => {
        var be, it;
        return (it = (be = Be()[pe]) === null || be === void 0 ? void 0 : be.hasRadio) !== null && it !== void 0 ? it : !1;
      },
      isCheckboxCheckedAtIndex: (pe) => {
        var be;
        const it = Be()[pe];
        return (be = (it == null ? void 0 : it.hasCheckbox) && it.checked) !== null && be !== void 0 ? be : !1;
      },
      isFocusInsideList: () => W != null && ae() !== document.activeElement && ae().contains(document.activeElement),
      isRootFocused: () => W != null && document.activeElement === ae(),
      listItemAtIndexHasClass: At,
      notifyAction: (pe) => {
        t(26, v = pe), W != null && ge(ae(), "SMUIList:action", { index: pe }, void 0, !0);
      },
      notifySelectionChange: (pe) => {
        W != null && ge(ae(), "SMUIList:selectionChange", { changedIndices: pe });
      },
      removeClassForElementIndex: ve,
      setAttributeForElementIndex: je,
      setCheckedCheckboxOrRadioAtIndex: (pe, be) => {
        Be()[pe].checked = be;
      },
      setTabIndexForListItemChildren: (pe, be) => {
        const it = Be()[pe];
        Array.prototype.forEach.call(it.element.querySelectorAll("button:not(:disabled), a"), (jn) => {
          jn.setAttribute("tabindex", be);
        });
      }
    }));
    const Y = {
      get element() {
        return ae();
      },
      get items() {
        return B;
      },
      get typeaheadInProgress() {
        return N.isTypeaheadInProgress();
      },
      typeaheadMatchItem(pe, be) {
        return N.typeaheadMatchItem(
          pe,
          be,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Be,
      focusItemAtIndex: Ae,
      addClassForElementIndex: X,
      removeClassForElementIndex: ve,
      setAttributeForElementIndex: je,
      removeAttributeForElementIndex: Ue,
      getAttributeFromElementIndex: St,
      getPrimaryTextAtIndex: q
    };
    return ge(ae(), "SMUIList:mount", Y), N.init(), N.layout(), () => {
      N.destroy();
    };
  }), Zt(() => {
    _e && _e();
  });
  function Q(Y) {
    B.push(Y.detail), Z.set(Y.detail.element, Y.detail), D && Y.detail.selected && t(26, v = le(Y.detail.element)), Y.stopPropagation();
  }
  function ke(Y) {
    var pe;
    const be = (pe = Y.detail && B.indexOf(Y.detail)) !== null && pe !== void 0 ? pe : -1;
    be !== -1 && (B.splice(be, 1), B = B, Z.delete(Y.detail.element)), Y.stopPropagation();
  }
  function De(Y) {
    N && Y.target && N.handleKeydown(Y, Y.target.classList.contains("mdc-deprecated-list-item"), le(Y.target));
  }
  function Ne(Y) {
    N && Y.target && N.handleFocusIn(le(Y.target));
  }
  function ne(Y) {
    N && Y.target && N.handleFocusOut(le(Y.target));
  }
  function K(Y) {
    N && Y.target && N.handleClick(le(Y.target), !u(Y.target, 'input[type="checkbox"], input[type="radio"]'), Y);
  }
  function Ye(Y) {
    if (F || O) {
      const pe = le(Y.target);
      if (pe !== -1) {
        const be = Be()[pe];
        be && (F && !be.checked || O) && (u(Y.detail.target, 'input[type="checkbox"], input[type="radio"]') || (be.checked = !be.checked), be.activateRipple(), window.requestAnimationFrame(() => {
          be.deactivateRipple();
        }));
      }
    }
  }
  function Be() {
    return W == null ? [] : [...ae().children].map((Y) => Z.get(Y)).filter((Y) => Y && Y._smui_list_item_accessor);
  }
  function At(Y, pe) {
    var be;
    const it = Be()[Y];
    return (be = it && it.hasClass(pe)) !== null && be !== void 0 ? be : !1;
  }
  function X(Y, pe) {
    const be = Be()[Y];
    be && be.addClass(pe);
  }
  function ve(Y, pe) {
    const be = Be()[Y];
    be && be.removeClass(pe);
  }
  function je(Y, pe, be) {
    const it = Be()[Y];
    it && it.addAttr(pe, be);
  }
  function Ue(Y, pe) {
    const be = Be()[Y];
    be && be.removeAttr(pe);
  }
  function St(Y, pe) {
    const be = Be()[Y];
    return be ? be.getAttr(pe) : null;
  }
  function q(Y) {
    var pe;
    const be = Be()[Y];
    return (pe = be && be.getPrimaryText()) !== null && pe !== void 0 ? pe : "";
  }
  function le(Y) {
    const pe = o(Y, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return pe && u(pe, ".mdc-deprecated-list-item") ? Be().map((be) => be == null ? void 0 : be.element).indexOf(pe) : -1;
  }
  function J() {
    return N.layout();
  }
  function We(Y, pe) {
    return N.setEnabled(Y, pe);
  }
  function ot() {
    return N.isTypeaheadInProgress();
  }
  function st() {
    return N.getSelectedIndex();
  }
  function $e() {
    return N.getFocusedItemIndex();
  }
  function Ae(Y) {
    const pe = Be()[Y];
    pe && "focus" in pe.element && pe.element.focus();
  }
  function ae() {
    return W.getElement();
  }
  function Bt(Y) {
    se[Y ? "unshift" : "push"](() => {
      W = Y, t(14, W);
    });
  }
  return n.$$set = (Y) => {
    e = z(z({}, e), et(Y)), t(25, r = fe(e, i)), "use" in Y && t(0, d = Y.use), "class" in Y && t(1, f = Y.class), "nonInteractive" in Y && t(2, h = Y.nonInteractive), "dense" in Y && t(3, m = Y.dense), "textualList" in Y && t(4, _ = Y.textualList), "avatarList" in Y && t(5, p = Y.avatarList), "iconList" in Y && t(6, I = Y.iconList), "imageList" in Y && t(7, b = Y.imageList), "thumbnailList" in Y && t(8, R = Y.thumbnailList), "videoList" in Y && t(9, E = Y.videoList), "twoLine" in Y && t(10, L = Y.twoLine), "threeLine" in Y && t(11, k = Y.threeLine), "vertical" in Y && t(27, g = Y.vertical), "wrapFocus" in Y && t(28, y = Y.wrapFocus), "singleSelection" in Y && t(29, D = Y.singleSelection), "disabledItemsFocusable" in Y && t(30, A = Y.disabledItemsFocusable), "selectedIndex" in Y && t(26, v = Y.selectedIndex), "radioList" in Y && t(31, F = Y.radioList), "checkList" in Y && t(32, O = Y.checkList), "hasTypeahead" in Y && t(33, U = Y.hasTypeahead), "component" in Y && t(12, ze = Y.component), "tag" in Y && t(13, G = Y.tag), "$$scope" in Y && t(44, a = Y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setVerticalOrientation(g), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setWrapFocus(y), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && N && N.setHasTypeahead(U), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setSingleSelection(D), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && N && N.setDisabledItemsFocusable(A), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && N && D && st() !== v && N.setSelectedIndex(v);
  }, [
    d,
    f,
    h,
    m,
    _,
    p,
    I,
    b,
    R,
    E,
    L,
    k,
    ze,
    G,
    W,
    M,
    c,
    Fe,
    Q,
    ke,
    De,
    Ne,
    ne,
    K,
    Ye,
    r,
    v,
    g,
    y,
    D,
    A,
    F,
    O,
    U,
    J,
    We,
    ot,
    st,
    $e,
    Ae,
    ae,
    N,
    l,
    Bt,
    a
  ];
}
class Xd extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Yd,
      zd,
      Ie,
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
      e = ie("span"), H(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Zd(n) {
  let e, t, i = (
    /*ripple*/
    n[7] && Rl()
  );
  const r = (
    /*#slots*/
    n[34].default
  ), l = ye(
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
      i && i.m(a, s), j(a, e, s), l && l.m(a, s), t = !0;
    },
    p(a, s) {
      /*ripple*/
      a[7] ? i || (i = Rl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), l && l.p && (!t || s[1] & /*$$scope*/
      64) && Se(
        l,
        r,
        a,
        /*$$scope*/
        a[37],
        t ? Ee(
          r,
          /*$$scope*/
          a[37],
          s,
          null
        ) : Te(
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
      a && V(e), i && i.d(a), l && l.d(a);
    }
  };
}
function Qd(n) {
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
      $$slots: { default: [Zd] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = z(u, de(r, [
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
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
        670916479 ? de(r, [
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
      s && V(t), n[35](null), e && ee(e, s);
    }
  };
}
let Jd = 0;
const Ji = ([n, e]) => `${n}: ${e};`;
function xd(n, e, t) {
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
  let l = fe(e, r), { $$slots: a = {}, $$scope: s } = e;
  var o;
  const u = tt(xe());
  let c = () => {
  };
  function d(X) {
    return X === c;
  }
  let { use: f = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { color: _ = void 0 } = e, { nonInteractive: p = (o = Ge("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  qe("SMUI:list:nonInteractive", void 0);
  let { ripple: I = !p } = e, { wrapper: b = !1 } = e, { activated: R = !1 } = e, { role: E = b ? "presentation" : Ge("SMUI:list:item:role") } = e;
  qe("SMUI:list:item:role", void 0);
  let { selected: L = !1 } = e, { disabled: k = !1 } = e, { skipRestoreFocus: g = !1 } = e, { tabindex: y = c } = e, { inputId: D = "SMUI-form-field-list-" + Jd++ } = e, { href: A = void 0 } = e, v, F = {}, O = {}, U = {}, W, N, B = Ge("SMUI:list:item:nav"), { component: M = Ft } = e, { tag: T = M === Ft ? B ? A ? "a" : "span" : "li" : void 0 } = e;
  qe("SMUI:generic:input:props", { id: D }), qe("SMUI:separator:context", void 0), at(() => {
    if (!L && !p) {
      let ve = !0, je = v.getElement();
      for (; je.previousSibling; )
        if (je = je.previousSibling, je.nodeType === 1 && je.classList.contains("mdc-deprecated-list-item") && !je.classList.contains("mdc-deprecated-list-item--disabled")) {
          ve = !1;
          break;
        }
      ve && (N = window.requestAnimationFrame(() => ke(je)));
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ye();
      },
      get selected() {
        return L;
      },
      set selected(ve) {
        t(0, L = ve);
      },
      hasClass: Z,
      addClass: Fe,
      removeClass: Me,
      getAttr: ze,
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
      action: ne,
      get tabindex() {
        return i;
      },
      set tabindex(ve) {
        t(30, y = ve);
      },
      get disabled() {
        return k;
      },
      get activated() {
        return R;
      },
      set activated(ve) {
        t(1, R = ve);
      }
    };
    return ge(Ye(), "SMUIListItem:mount", X), () => {
      ge(Ye(), "SMUIListItem:unmount", X);
    };
  }), Zt(() => {
    N && window.cancelAnimationFrame(N);
  });
  function Z(X) {
    return X in F ? F[X] : Ye().classList.contains(X);
  }
  function Fe(X) {
    F[X] || t(18, F[X] = !0, F);
  }
  function Me(X) {
    (!(X in F) || F[X]) && t(18, F[X] = !1, F);
  }
  function _e(X, ve) {
    O[X] != ve && (ve === "" || ve == null ? (delete O[X], t(19, O)) : t(19, O[X] = ve, O));
  }
  function ze(X) {
    var ve;
    return X in U ? (ve = U[X]) !== null && ve !== void 0 ? ve : null : Ye().getAttribute(X);
  }
  function G(X, ve) {
    U[X] !== ve && t(20, U[X] = ve, U);
  }
  function Q(X) {
    (!(X in U) || U[X] != null) && t(20, U[X] = void 0, U);
  }
  function ke(X) {
    let ve = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const je = X.attributes.getNamedItem("tabindex");
        if (je && je.value === "0") {
          ve = !1;
          break;
        }
      }
    ve && t(21, i = 0);
  }
  function De(X) {
    const ve = X.key === "Enter", je = X.key === "Space";
    (ve || je) && ne(X);
  }
  function Ne(X) {
    ("_smui_checkbox_accessor" in X.detail || "_smui_radio_accessor" in X.detail) && t(16, W = X.detail);
  }
  function ne(X) {
    k || ge(Ye(), "SMUI:action", X);
  }
  function K() {
    var X, ve, je;
    const Ue = Ye(), St = Ue.querySelector(".mdc-deprecated-list-item__primary-text");
    if (St)
      return (X = St.textContent) !== null && X !== void 0 ? X : "";
    const q = Ue.querySelector(".mdc-deprecated-list-item__text");
    return q ? (ve = q.textContent) !== null && ve !== void 0 ? ve : "" : (je = Ue.textContent) !== null && je !== void 0 ? je : "";
  }
  function Ye() {
    return v.getElement();
  }
  function Be(X) {
    se[X ? "unshift" : "push"](() => {
      v = X, t(17, v);
    });
  }
  const At = () => t(16, W = void 0);
  return n.$$set = (X) => {
    e = z(z({}, e), et(X)), t(29, l = fe(e, r)), "use" in X && t(2, f = X.use), "class" in X && t(3, h = X.class), "style" in X && t(4, m = X.style), "color" in X && t(5, _ = X.color), "nonInteractive" in X && t(6, p = X.nonInteractive), "ripple" in X && t(7, I = X.ripple), "wrapper" in X && t(8, b = X.wrapper), "activated" in X && t(1, R = X.activated), "role" in X && t(9, E = X.role), "selected" in X && t(0, L = X.selected), "disabled" in X && t(10, k = X.disabled), "skipRestoreFocus" in X && t(11, g = X.skipRestoreFocus), "tabindex" in X && t(30, y = X.tabindex), "inputId" in X && t(31, D = X.inputId), "href" in X && t(12, A = X.href), "component" in X && t(13, M = X.component), "tag" in X && t(14, T = X.tag), "$$scope" in X && t(37, s = X.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, i = d(y) ? !p && !k && (L || W && W.checked) ? 0 : -1 : y);
  }, [
    L,
    R,
    f,
    h,
    m,
    _,
    p,
    I,
    b,
    E,
    k,
    g,
    A,
    M,
    T,
    ne,
    W,
    v,
    F,
    O,
    U,
    i,
    u,
    B,
    Fe,
    Me,
    _e,
    De,
    Ne,
    l,
    y,
    D,
    K,
    Ye,
    a,
    Be,
    At,
    s
  ];
}
class $d extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      xd,
      Qd,
      Ie,
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
vt({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
vt({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
vt({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function ef(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[8].default
  ), o = ye(
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
    c = z(c, u[d]);
  return {
    c() {
      e = ie("span"), o && o.c(), oe(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[9](e), r = !0, l || (a = [
        ce(i = Je.call(
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
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      128) && Se(
        o,
        s,
        d,
        /*$$scope*/
        d[7],
        r ? Ee(
          s,
          /*$$scope*/
          d[7],
          f,
          null
        ) : Te(
          /*$$scope*/
          d[7]
        ),
        null
      ), oe(e, c = de(u, [
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
      ])), i && me(i.update) && f & /*use*/
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
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[9](null), l = !1, Ze(a);
    }
  };
}
function tf(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = Ge("SMUI:list:graphic:menu-selection-group");
  function f() {
    return c;
  }
  function h(m) {
    se[m ? "unshift" : "push"](() => {
      c = m, t(2, c);
    });
  }
  return n.$$set = (m) => {
    e = z(z({}, e), et(m)), t(5, r = fe(e, i)), "use" in m && t(0, o = m.use), "class" in m && t(1, u = m.class), "$$scope" in m && t(7, a = m.$$scope);
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
class nf extends Re {
  constructor(e) {
    super(), Oe(this, e, tf, ef, Ie, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
vt({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
vt({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
vt({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
vt({
  class: "mdc-menu__selection-group-icon",
  component: nf
});
function rf(n) {
  let e;
  return {
    c() {
      e = ut(
        /*content*/
        n[8]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      256 && Ct(
        e,
        /*content*/
        t[8]
      );
    },
    i: nt,
    o: nt,
    d(t) {
      t && V(e);
    }
  };
}
function lf(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), i = ye(
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
      4096) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? Ee(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Te(
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
function sf(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [lf, rf], d = [];
  function f(_, p) {
    return (
      /*content*/
      _[8] == null ? 0 : 1
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
  for (let _ = 0; _ < h.length; _ += 1)
    m = z(m, h[_]);
  return {
    c() {
      e = ie("div"), i.c(), oe(e, m);
    },
    m(_, p) {
      j(_, e, p), d[t].m(e, null), n[14](e), s = !0, o || (u = [
        ce(a = Je.call(
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
      let I = t;
      t = f(_), t === I ? d[t].p(_, p) : (Pe(), S(d[I], 1, 1, () => {
        d[I] = null;
      }), He(), i = d[t], i ? i.p(_, p) : (i = d[t] = c[t](_), i.c()), C(i, 1), i.m(e, null)), oe(e, m = de(h, [
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
      _ && V(e), d[t].d(), n[14](null), o = !1, Ze(u);
    }
  };
}
let af = 0;
function of(n, e, t) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + af++ } = e, { persistent: d = !1 } = e, { validationMsg: f = !1 } = e, h, m, _ = {}, p = {}, I;
  at(() => (m = new Ud({
    addClass: R,
    removeClass: E,
    hasClass: b,
    getAttr: L,
    setAttr: k,
    removeAttr: g,
    setContent: (A) => {
      t(8, I = A);
    }
  }), c.startsWith("SMUI-select-helper-text-") && ge(y(), "SMUISelectHelperText:id", c), ge(y(), "SMUISelectHelperText:mount", m), m.init(), () => {
    ge(y(), "SMUISelectHelperText:unmount", m), m.destroy();
  }));
  function b(A) {
    return A in _ ? _[A] : y().classList.contains(A);
  }
  function R(A) {
    _[A] || t(6, _[A] = !0, _);
  }
  function E(A) {
    (!(A in _) || _[A]) && t(6, _[A] = !1, _);
  }
  function L(A) {
    var v;
    return A in p ? (v = p[A]) !== null && v !== void 0 ? v : null : y().getAttribute(A);
  }
  function k(A, v) {
    p[A] !== v && t(7, p[A] = v, p);
  }
  function g(A) {
    (!(A in p) || p[A] != null) && t(7, p[A] = void 0, p);
  }
  function y() {
    return h;
  }
  function D(A) {
    se[A ? "unshift" : "push"](() => {
      h = A, t(5, h);
    });
  }
  return n.$$set = (A) => {
    e = z(z({}, e), et(A)), t(10, r = fe(e, i)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "id" in A && t(2, c = A.id), "persistent" in A && t(3, d = A.persistent), "validationMsg" in A && t(4, f = A.validationMsg), "$$scope" in A && t(12, a = A.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    _,
    p,
    I,
    s,
    r,
    y,
    a,
    l,
    D
  ];
}
class uf extends Re {
  constructor(e) {
    super(), Oe(this, e, of, sf, Ie, {
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
const cf = (n) => ({}), kl = (n) => ({}), df = (n) => ({}), Dl = (n) => ({}), ff = (n) => ({}), Ml = (n) => ({}), hf = (n) => ({}), Fl = (n) => ({});
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
    i = z(i, t[r]);
  return {
    c() {
      e = ie("input"), oe(e, i);
    },
    m(r, l) {
      j(r, e, l), e.autofocus && e.focus();
    },
    p(r, l) {
      oe(e, i = de(t, [
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
      r && V(e);
    }
  };
}
function Ul(n) {
  let e;
  return {
    c() {
      e = ie("span"), H(e, "class", "mdc-select__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
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
    $$slots: { default: [mf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
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
      4196352 ? de(i, [
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
      n[67](null), ee(e, l);
    }
  };
}
function mf(n) {
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
  ), l = ye(
    r,
    n,
    /*$$scope*/
    n[87],
    Fl
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Se(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          s,
          hf
        ) : Te(
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
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
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
    $$slots: { default: [gf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new pa({ props: r }), n[69](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots, $$restProps*/
      12582912 ? de(i, [
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
    $$slots: { default: [pf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
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
      4196352 ? de(i, [
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
      n[68](null), ee(e, l);
    }
  };
}
function pf(n) {
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
  ), l = ye(
    r,
    n,
    /*$$scope*/
    n[87],
    Ml
  );
  return {
    c() {
      t = ut(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && Ct(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Se(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          s,
          ff
        ) : Te(
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
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
    }
  };
}
function gf(n) {
  let e, t, i = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[54].label) && Hl(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), j(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots*/
      8388608 && C(i, 1)) : (i = Hl(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (Pe(), S(i, 1, 1, () => {
        i = null;
      }), He());
    },
    i(r) {
      t || (C(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && V(e), i && i.d(r);
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
    r = z(r, i[l]);
  return e = new ma({ props: r }), n[70](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? de(i, [Ce(Ve(
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
      n[70](null), ee(e, l);
    }
  };
}
function _f(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].default
  ), i = ye(
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
      33554432) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          t,
          /*$$scope*/
          r[87],
          l,
          null
        ) : Te(
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
function bf(n) {
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
    $$slots: { default: [_f] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = z(a, r[s]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    n[24]), e = new Xd({ props: a }), se.push(() => ht(e, "selectedIndex", l)), e.$on(
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
        4194320 ? de(r, [
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
        s[24], ft(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (C(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
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
    $$slots: { default: [If] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new uf({ props: r }), e.$on(
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
      4194304 ? de(i, [Ce(Ve(
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
      ee(e, l);
    }
  };
}
function If(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].helperText
  ), i = ye(
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
      33554432) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          t,
          /*$$scope*/
          r[87],
          l,
          cf
        ) : Te(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vf(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, _, p, I, b, R, E, L, k, g, y, D, A, v, F, O, U, W, N, B, M, T, Z, Fe, Me, _e, ze, G, Q = (
    /*hiddenInput*/
    n[12] && Nl(n)
  ), ke = (
    /*variant*/
    n[7] === "filled" && Ul()
  ), De = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[54].label) && wl(n)
  ), Ne = (
    /*variant*/
    n[7] === "outlined" && Pl(n)
  );
  const ne = (
    /*#slots*/
    n[64].leadingIcon
  ), K = ye(
    ne,
    n,
    /*$$scope*/
    n[87],
    Dl
  );
  let Ye = [
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
  for (let Ae = 0; Ae < Ye.length; Ae += 1)
    Be = z(Be, Ye[Ae]);
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
  ], X = {};
  for (let Ae = 0; Ae < At.length; Ae += 1)
    X = z(X, At[Ae]);
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
  let Ue = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && Bl(n)
  ), St = [
    {
      class: D = re({
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
      "aria-disabled": v = /*disabled*/
      n[6] ? "true" : void 0
    },
    { "aria-controls": (
      /*menuId*/
      n[45]
    ) },
    {
      "aria-expanded": F = /*menuOpen*/
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
  function J(Ae) {
    n[77](Ae);
  }
  let We = {
    $$slots: { default: [bf] },
    $$scope: { ctx: n }
  };
  for (let Ae = 0; Ae < le.length; Ae += 1)
    We = z(We, le[Ae]);
  /*menuOpen*/
  n[31] !== void 0 && (We.open = /*menuOpen*/
  n[31]), W = new Kd({ props: We }), se.push(() => ht(W, "open", J)), W.$on(
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
  let ot = [
    {
      class: B = re({
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
    Xt(
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
  ], st = {};
  for (let Ae = 0; Ae < ot.length; Ae += 1)
    st = z(st, ot[Ae]);
  let $e = (
    /*$$slots*/
    n[54].helperText && Vl(n)
  );
  return {
    c() {
      e = ie("div"), Q && Q.c(), t = ue(), i = ie("div"), ke && ke.c(), r = ue(), De && De.c(), l = ue(), Ne && Ne.c(), a = ue(), K && K.c(), s = ue(), o = ie("span"), u = ie("span"), c = ut(
        /*$selectedTextStore*/
        n[42]
      ), I = ue(), b = ie("span"), R = lt("svg"), E = lt("polygon"), L = lt("polygon"), y = ue(), Ue && Ue.c(), U = ue(), te(W.$$.fragment), Fe = ue(), $e && $e.c(), Me = Xe(), oe(u, Be), oe(o, X), H(E, "class", "mdc-select__dropdown-icon-inactive"), H(E, "stroke", "none"), H(E, "fill-rule", "evenodd"), H(E, "points", "7 10 12 15 17 10"), H(L, "class", "mdc-select__dropdown-icon-active"), H(L, "stroke", "none"), H(L, "fill-rule", "evenodd"), H(L, "points", "7 15 12 10 17 15"), H(R, "class", "mdc-select__dropdown-icon-graphic"), H(R, "viewBox", "7 10 10 5"), H(R, "focusable", "false"), oe(b, je), oe(i, q), oe(e, st);
    },
    m(Ae, ae) {
      j(Ae, e, ae), Q && Q.m(e, null), x(e, t), x(e, i), ke && ke.m(i, null), x(i, r), De && De.m(i, null), x(i, l), Ne && Ne.m(i, null), x(i, a), K && K.m(i, null), x(i, s), x(i, o), x(o, u), x(u, c), x(i, I), x(i, b), x(b, R), x(R, E), x(R, L), x(i, y), Ue && Ue.m(i, null), n[71](i), x(e, U), $(W, e, null), n[82](e), j(Ae, Fe, ae), $e && $e.m(Ae, ae), j(Ae, Me, ae), _e = !0, ze || (G = [
        ce(m = Je.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        ce(p = Je.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        ce(g = Je.call(
          null,
          b,
          /*dropdownIcon$use*/
          n[20]
        )),
        ce(O = Je.call(
          null,
          i,
          /*anchor$use*/
          n[14]
        )),
        he(
          i,
          "focus",
          /*focus_handler_1*/
          n[72]
        ),
        he(
          i,
          "blur",
          /*blur_handler_1*/
          n[73]
        ),
        he(
          i,
          "click",
          /*click_handler*/
          n[74]
        ),
        he(i, "keydown", function() {
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
        he(
          i,
          "focus",
          /*focus_handler*/
          n[65]
        ),
        he(
          i,
          "blur",
          /*blur_handler*/
          n[66]
        ),
        ce(T = Ot.call(null, e, {
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
        ce(Vd.call(null, e, {
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          )
        })),
        ce(Z = Je.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ce(
          /*forwardEvents*/
          n[43].call(null, e)
        ),
        he(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[49]
        ),
        he(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          n[83]
        )
      ], ze = !0);
    },
    p(Ae, ae) {
      n = Ae, /*hiddenInput*/
      n[12] ? Q ? Q.p(n, ae) : (Q = Nl(n), Q.c(), Q.m(e, t)) : Q && (Q.d(1), Q = null), /*variant*/
      n[7] === "filled" ? ke || (ke = Ul(), ke.c(), ke.m(i, r)) : ke && (ke.d(1), ke = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[54].label) ? De ? (De.p(n, ae), ae[0] & /*variant, noLabel, label*/
      896 | ae[1] & /*$$slots*/
      8388608 && C(De, 1)) : (De = wl(n), De.c(), C(De, 1), De.m(i, l)) : De && (Pe(), S(De, 1, 1, () => {
        De = null;
      }), He()), /*variant*/
      n[7] === "outlined" ? Ne ? (Ne.p(n, ae), ae[0] & /*variant*/
      128 && C(Ne, 1)) : (Ne = Pl(n), Ne.c(), C(Ne, 1), Ne.m(i, a)) : Ne && (Pe(), S(Ne, 1, 1, () => {
        Ne = null;
      }), He()), K && K.p && (!_e || ae[2] & /*$$scope*/
      33554432) && Se(
        K,
        ne,
        n,
        /*$$scope*/
        n[87],
        _e ? Ee(
          ne,
          /*$$scope*/
          n[87],
          ae,
          df
        ) : Te(
          /*$$scope*/
          n[87]
        ),
        Dl
      ), (!_e || ae[1] & /*$selectedTextStore*/
      2048) && Ga(
        c,
        /*$selectedTextStore*/
        n[42],
        Be.contenteditable
      ), oe(u, Be = de(Ye, [
        (!_e || ae[0] & /*inputId*/
        2048 && d !== (d = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: d },
        (!_e || ae[0] & /*selectedText$class*/
        524288 && f !== (f = re({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: f },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!_e || ae[0] & /*inputId*/
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
      ), oe(o, X = de(At, [
        (!_e || ae[0] & /*selectedTextContainer$class*/
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
      ), oe(b, je = de(ve, [
        (!_e || ae[0] & /*dropdownIcon$class*/
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
      n[5] ? Ue ? (Ue.p(n, ae), ae[0] & /*variant, ripple*/
      160 && C(Ue, 1)) : (Ue = Bl(n), Ue.c(), C(Ue, 1), Ue.m(i, null)) : Ue && (Pe(), S(Ue, 1, 1, () => {
        Ue = null;
      }), He()), oe(i, q = de(St, [
        (!_e || ae[0] & /*anchor$class*/
        32768 && D !== (D = re({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: D },
        (!_e || ae[0] & /*required*/
        1024 && A !== (A = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": A
        },
        (!_e || ae[0] & /*disabled*/
        64 && v !== (v = /*disabled*/
        n[6] ? "true" : void 0)) && {
          "aria-disabled": v
        },
        { "aria-controls": (
          /*menuId*/
          n[45]
        ) },
        (!_e || ae[1] & /*menuOpen*/
        1 && F !== (F = /*menuOpen*/
        n[31] ? "true" : "false")) && {
          "aria-expanded": F
        },
        (!_e || ae[0] & /*helperId*/
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
      const Bt = ae[0] & /*menu$class*/
      4194304 | ae[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? de(le, [
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
      33554432 && (Bt.$$scope = { dirty: ae, ctx: n }), !N && ae[1] & /*menuOpen*/
      1 && (N = !0, Bt.open = /*menuOpen*/
      n[31], ft(() => N = !1)), W.$set(Bt), oe(e, st = de(ot, [
        (!_e || ae[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | ae[1] & /*$$slots, menuOpen*/
        8388609 && B !== (B = re({
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
        }))) && { class: B },
        (!_e || ae[0] & /*internalStyles, style*/
        134217744 && M !== (M = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(jl).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: M },
        ae[1] & /*$$restProps*/
        4194304 && Xt(
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
      ])), T && me(T.update) && ae[0] & /*variant*/
      128 && T.update.call(null, {
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
      n[54].helperText ? $e ? ($e.p(n, ae), ae[1] & /*$$slots*/
      8388608 && C($e, 1)) : ($e = Vl(n), $e.c(), C($e, 1), $e.m(Me.parentNode, Me)) : $e && (Pe(), S($e, 1, 1, () => {
        $e = null;
      }), He());
    },
    i(Ae) {
      _e || (C(De), C(Ne), C(K, Ae), C(Ue), C(W.$$.fragment, Ae), C($e), _e = !0);
    },
    o(Ae) {
      S(De), S(Ne), S(K, Ae), S(Ue), S(W.$$.fragment, Ae), S($e), _e = !1;
    },
    d(Ae) {
      Ae && (V(e), V(Fe), V(Me)), Q && Q.d(), ke && ke.d(), De && De.d(), Ne && Ne.d(), K && K.d(Ae), Ue && Ue.d(), n[71](null), ee(W), n[82](null), $e && $e.d(Ae), ze = !1, Ze(G);
    }
  };
}
let Af = 0;
function Cf(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (yf(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function yf(n) {
  return "touches" in n;
}
const jl = ([n, e]) => `${n}: ${e};`;
function Ef(n, e, t) {
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
  let r = fe(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = or(s);
  var c;
  const d = tt(xe());
  let f = () => {
  };
  function h(P) {
    return P === f;
  }
  let { use: m = [] } = e, { class: _ = "" } = e, { style: p = "" } = e, { ripple: I = !0 } = e, { disabled: b = !1 } = e, { variant: R = "standard" } = e, { noLabel: E = !1 } = e, { label: L = void 0 } = e, { value: k = "" } = e, { key: g = (P) => P } = e, { dirty: y = !1 } = e, { invalid: D = f } = e, { updateInvalid: A = h(D) } = e;
  const v = h(D);
  h(D) && (D = !1);
  let { required: F = !1 } = e, { inputId: O = "SMUI-select-" + Af++ } = e, { hiddenInput: U = !1 } = e, { withLeadingIcon: W = f } = e, { anchor$use: N = [] } = e, { anchor$class: B = "" } = e, { selectedTextContainer$use: M = [] } = e, { selectedTextContainer$class: T = "" } = e, { selectedText$use: Z = [] } = e, { selectedText$class: Fe = "" } = e, { dropdownIcon$use: Me = [] } = e, { dropdownIcon$class: _e = "" } = e, { menu$class: ze = "" } = e, G, Q, ke = {}, De = {}, Ne, ne = {}, K = -1, Ye = (c = r.menu$id) !== null && c !== void 0 ? c : O + "-menu", Be, At = Ge("SMUI:addLayoutListener"), X, ve = !1, je = {}, Ue, St, q = !1, le, J = Ge("SMUI:select:context"), We, ot, st, $e, Ae;
  qe("SMUI:list:role", ""), qe("SMUI:list:nav", !1);
  const ae = Lt("");
  rt(n, ae, (P) => t(42, l = P)), qe("SMUI:select:selectedText", ae);
  const Bt = Lt(k);
  rt(n, Bt, (P) => t(90, a = P)), qe("SMUI:select:value", Bt);
  let Y = K;
  At && (X = At($n)), at(() => (t(23, Q = new Nd(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (P) => {
        Ht(ae, l = P, l);
      },
      isSelectAnchorFocused: () => document.activeElement === Ne,
      getSelectAnchorAttr: Ii,
      setSelectAnchorAttr: vi,
      removeSelectAnchorAttr: Ai,
      addMenuClass: _i,
      removeMenuClass: bi,
      openMenu: () => {
        t(31, ve = !0);
      },
      closeMenu: () => {
        t(31, ve = !1);
      },
      getAnchorElement: () => Ne,
      setMenuAnchorElement: (P) => {
        t(33, Ue = P);
      },
      setMenuAnchorCorner: (P) => {
        t(34, St = P);
      },
      setMenuWrapFocus: (P) => {
        t(35, q = P);
      },
      getSelectedIndex: () => K,
      setSelectedIndex: (P) => {
        t(63, Y = P), t(24, K = P), t(0, k = En()[K]);
      },
      focusMenuItemAtIndex: (P) => {
        le.focusItemAtIndex(P);
      },
      getMenuItemCount: () => le.items.length,
      getMenuItemValues: () => En().map(g),
      getMenuItemTextAtIndex: (P) => le.getPrimaryTextAtIndex(P),
      isTypeaheadInProgress: () => le.typeaheadInProgress,
      typeaheadMatchItem: (P, Ut) => le.typeaheadMatchItem(P, Ut),
      // getCommonAdapterMethods
      addClass: it,
      removeClass: Qt,
      hasClass: be,
      setRippleCenter: (P) => $e && $e.setRippleCenter(P),
      activateBottomLine: () => $e && $e.activate(),
      deactivateBottomLine: () => $e && $e.deactivate(),
      notifyChange: (P) => {
        t(55, y = !0), A && t(1, D = !Q.isValid()), ge(Sn(), "SMUISelect:change", { value: k, index: K }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!Ae,
      notchOutline: (P) => Ae && Ae.notch(P),
      closeOutline: () => Ae && Ae.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!st,
      floatLabel: (P) => st && st.float(P),
      getLabelWidth: () => st ? st.getWidth() : 0,
      setLabelRequired: (P) => st && st.setRequired(P)
    },
    {
      get helperText() {
        return ot;
      },
      get leadingIcon() {
        return We;
      }
    }
  )), t(24, K = En().indexOf(k)), Q.init(), xn(v), () => {
    Q.destroy();
  })), Zt(() => {
    X && X();
  });
  function pe(P) {
    t(37, We = P.detail);
  }
  function be(P) {
    return P in ke ? ke[P] : Sn().classList.contains(P);
  }
  function it(P) {
    ke[P] || t(26, ke[P] = !0, ke);
  }
  function Qt(P) {
    (!(P in ke) || ke[P]) && t(26, ke[P] = !1, ke);
  }
  function jn(P, Ut) {
    De[P] != Ut && (Ut === "" || Ut == null ? (delete De[P], t(27, De)) : t(27, De[P] = Ut, De));
  }
  function _i(P) {
    je[P] || t(32, je[P] = !0, je);
  }
  function bi(P) {
    (!(P in je) || je[P]) && t(32, je[P] = !1, je);
  }
  function Ii(P) {
    var Ut;
    return P in ne ? (Ut = ne[P]) !== null && Ut !== void 0 ? Ut : null : Sn().getAttribute(P);
  }
  function vi(P, Ut) {
    ne[P] !== Ut && t(29, ne[P] = Ut, ne);
  }
  function Ai(P) {
    (!(P in ne) || ne[P] != null) && t(29, ne[P] = void 0, ne);
  }
  function En() {
    return le.getOrderedList().map((P) => P.getValue());
  }
  function Ci() {
    return Q.getUseDefaultValidation();
  }
  function xn(P) {
    Q.setUseDefaultValidation(P);
  }
  function yi() {
    Ne.focus();
  }
  function $n() {
    Q.layout();
  }
  function Sn() {
    return G;
  }
  function Ei(P) {
    Pn.call(this, n, P);
  }
  function Si(P) {
    Pn.call(this, n, P);
  }
  function Ti(P) {
    se[P ? "unshift" : "push"](() => {
      st = P, t(39, st);
    });
  }
  function Li(P) {
    se[P ? "unshift" : "push"](() => {
      st = P, t(39, st);
    });
  }
  function Oi(P) {
    se[P ? "unshift" : "push"](() => {
      Ae = P, t(41, Ae);
    });
  }
  function Ri(P) {
    se[P ? "unshift" : "push"](() => {
      $e = P, t(40, $e);
    });
  }
  function ki(P) {
    se[P ? "unshift" : "push"](() => {
      Ne = P, t(28, Ne);
    });
  }
  const Di = () => Q && Q.handleFocus(), Mi = () => Q && Q.handleBlur(), Fi = (P) => {
    Ne.focus(), Q && Q.handleClick(Cf(P));
  };
  function Ni(P) {
    K = P, t(24, K);
  }
  const Ui = (P) => t(36, le = P.detail);
  function wi(P) {
    ve = P, t(31, ve);
  }
  const Pi = (P) => Q && Q.handleMenuItemAction(P.detail.index), Hi = () => Q && Q.handleMenuClosing(), w = () => Q && Q.handleMenuClosed(), mt = () => Q && Q.handleMenuOpened();
  function ei(P) {
    se[P ? "unshift" : "push"](() => {
      G = P, t(25, G);
    });
  }
  const Bi = () => t(37, We = void 0), qn = (P) => t(30, Be = P.detail), Gn = (P) => t(38, ot = P.detail), ka = () => {
    t(30, Be = void 0), t(38, ot = void 0);
  };
  return n.$$set = (P) => {
    e = z(z({}, e), et(P)), t(53, r = fe(e, i)), "use" in P && t(2, m = P.use), "class" in P && t(3, _ = P.class), "style" in P && t(4, p = P.style), "ripple" in P && t(5, I = P.ripple), "disabled" in P && t(6, b = P.disabled), "variant" in P && t(7, R = P.variant), "noLabel" in P && t(8, E = P.noLabel), "label" in P && t(9, L = P.label), "value" in P && t(0, k = P.value), "key" in P && t(56, g = P.key), "dirty" in P && t(55, y = P.dirty), "invalid" in P && t(1, D = P.invalid), "updateInvalid" in P && t(57, A = P.updateInvalid), "required" in P && t(10, F = P.required), "inputId" in P && t(11, O = P.inputId), "hiddenInput" in P && t(12, U = P.hiddenInput), "withLeadingIcon" in P && t(13, W = P.withLeadingIcon), "anchor$use" in P && t(14, N = P.anchor$use), "anchor$class" in P && t(15, B = P.anchor$class), "selectedTextContainer$use" in P && t(16, M = P.selectedTextContainer$use), "selectedTextContainer$class" in P && t(17, T = P.selectedTextContainer$class), "selectedText$use" in P && t(18, Z = P.selectedText$use), "selectedText$class" in P && t(19, Fe = P.selectedText$class), "dropdownIcon$use" in P && t(20, Me = P.dropdownIcon$use), "dropdownIcon$class" in P && t(21, _e = P.dropdownIcon$class), "menu$class" in P && t(22, ze = P.menu$class), "$$scope" in P && t(87, o = P.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    2 && Y !== K)
      if (t(63, Y = K), Q)
        Q.setSelectedIndex(
          K,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const P = En();
        k !== P[K] && t(0, k = P[K]);
      }
    n.$$.dirty[0] & /*value*/
    1 && Ht(Bt, a = k, a), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    33554432 && Q && Q.getValue() !== g(k) && Q.setValue(g(k)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && Q && Q.getDisabled() !== b && Q.setDisabled(b), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && Q && y && Q.isValid() !== !D && (A ? t(1, D = !Q.isValid()) : Q.setValid(!D)), n.$$.dirty[0] & /*instance, required*/
    8389632 && Q && Q.getRequired() !== F && Q.setRequired(F);
  }, [
    k,
    D,
    m,
    _,
    p,
    I,
    b,
    R,
    E,
    L,
    F,
    O,
    U,
    W,
    N,
    B,
    M,
    T,
    Z,
    Fe,
    Me,
    _e,
    ze,
    Q,
    K,
    G,
    ke,
    De,
    Ne,
    ne,
    Be,
    ve,
    je,
    Ue,
    St,
    q,
    le,
    We,
    ot,
    st,
    $e,
    Ae,
    l,
    d,
    h,
    Ye,
    J,
    ae,
    Bt,
    pe,
    it,
    Qt,
    jn,
    r,
    u,
    y,
    g,
    A,
    Ci,
    xn,
    yi,
    $n,
    Sn,
    Y,
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
    w,
    mt,
    ei,
    Bi,
    qn,
    Gn,
    ka,
    o
  ];
}
class Sf extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Ef,
      vf,
      Ie,
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
function Tf(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = ye(
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
      8192) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? Ee(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Te(
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
function Lf(n) {
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
    $$slots: { default: [Tf] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new $d({ props: r }), n[12](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, [a]) {
      const s = a & /*usePass, value, selected, $$restProps*/
      77 ? de(i, [
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
      n[12](null), ee(e, l);
    }
  };
}
function Of(n, e, t) {
  let i, r;
  const l = ["use", "class", "value", "getElement"];
  let a = fe(e, l), s, o, { $$slots: u = {}, $$scope: c } = e;
  const d = tt(xe());
  let { use: f = [] } = e;
  const h = "";
  let { value: m = "" } = e, _;
  const p = Ge("SMUI:select:selectedText");
  rt(n, p, (L) => t(14, s = L));
  const I = Ge("SMUI:select:value");
  rt(n, I, (L) => t(10, o = L)), qe("SMUI:list:item:role", "option"), at(b), Zt(b);
  function b() {
    r && _ && Ht(p, s = _.getPrimaryText(), s);
  }
  function R() {
    return _.getElement();
  }
  function E(L) {
    se[L ? "unshift" : "push"](() => {
      _ = L, t(1, _);
    });
  }
  return n.$$set = (L) => {
    e = z(z({}, e), et(L)), t(6, a = fe(e, l)), "use" in L && t(7, f = L.use), "value" in L && t(0, m = L.value), "$$scope" in L && t(13, c = L.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    128 && t(3, i = [d, ...f]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, r = m != null && m !== "" && o === m);
  }, [
    m,
    _,
    r,
    i,
    p,
    I,
    a,
    f,
    h,
    R,
    o,
    u,
    E,
    c
  ];
}
class Rf extends Re {
  constructor(e) {
    super(), Oe(this, e, Of, Lf, Ie, {
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
function kf(n) {
  let e = (
    /*d*/
    n[11].label + ""
  ), t;
  return {
    c() {
      t = ut(e);
    },
    m(i, r) {
      j(i, t, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && Ct(t, e);
    },
    d(i) {
      i && V(t);
    }
  };
}
function Gl(n) {
  let e, t;
  return e = new Rf({
    props: {
      value: (
        /*d*/
        n[11].value
      ),
      $$slots: { default: [kf] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Df(n) {
  let e, t, i = jt(
    /*data*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Gl(ql(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
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
      j(a, e, s), t = !0;
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
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && V(e), ur(r, a);
    }
  };
}
function Mf(n) {
  let e, t, i;
  function r(a) {
    n[10](a);
  }
  let l = {
    disabled: (
      /*disabled*/
      n[4]
    ),
    key: Ff,
    label: (
      /*label*/
      n[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      n[3]
    ),
    $$slots: { default: [Df] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Sf({ props: l }), se.push(() => ht(e, "value", r)), {
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
        a[0], ft(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
const Ff = (n) => `${n ?? ""}`;
function Nf(n, e, t) {
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
class Cr extends Re {
  constructor(e) {
    super(), Oe(this, e, Nf, Mf, Ie, {
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
vt({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
vt({
  class: "mdc-dialog__title",
  tag: "h2"
});
vt({
  class: "mdc-dialog__content",
  tag: "div"
});
vt({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
function Uf(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = ie("div"), t = ie("input"), i = ue(), r = ie("label"), l = ut(
        /*label*/
        n[1]
      ), a = ue(), s = ie("span"), H(t, "type", "datetime-local"), H(t, "id", "datetime-picker"), H(t, "class", "custom-text-field__input svelte-ar6zwk"), H(t, "placeholder", ""), H(r, "for", "datetime-picker"), H(r, "class", "custom-floating-label svelte-ar6zwk"), H(s, "class", "custom-line svelte-ar6zwk"), H(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, d) {
      j(c, e, d), x(e, t), dn(
        t,
        /*value*/
        n[0]
      ), x(e, i), x(e, r), x(r, l), x(e, a), x(e, s), o || (u = [
        he(
          t,
          "input",
          /*input_input_handler*/
          n[3]
        ),
        he(
          t,
          "change",
          /*handleDateTimeChange*/
          n[2]
        )
      ], o = !0);
    },
    p(c, [d]) {
      d & /*value*/
      1 && dn(
        t,
        /*value*/
        c[0]
      ), d & /*label*/
      2 && Ct(
        l,
        /*label*/
        c[1]
      );
    },
    i: nt,
    o: nt,
    d(c) {
      c && V(e), o = !1, Ze(u);
    }
  };
}
function wf(n, e, t) {
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
class Pf extends Re {
  constructor(e) {
    super(), Oe(this, e, wf, Uf, Ie, { label: 1, value: 0 });
  }
}
function Hf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[12].default
  ), o = ye(
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
    c = z(c, u[d]);
  return {
    c() {
      e = ie("div"), o && o.c(), oe(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[13](e), r = !0, l || (a = [
        ce(i = Je.call(
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
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      2048) && Se(
        o,
        s,
        d,
        /*$$scope*/
        d[11],
        r ? Ee(
          s,
          /*$$scope*/
          d[11],
          f,
          null
        ) : Te(
          /*$$scope*/
          d[11]
        ),
        null
      ), oe(e, c = de(u, [
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
      ])), i && me(i.update) && f & /*use*/
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
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[13](null), l = !1, Ze(a);
    }
  };
}
function Bf(n, e, t) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: d = !1 } = e, { color: f = "default" } = e, { elevation: h = 1 } = e, { transition: m = !1 } = e, _;
  function p() {
    return _;
  }
  function I(b) {
    se[b ? "unshift" : "push"](() => {
      _ = b, t(7, _);
    });
  }
  return n.$$set = (b) => {
    e = z(z({}, e), et(b)), t(9, r = fe(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "variant" in b && t(2, c = b.variant), "square" in b && t(3, d = b.square), "color" in b && t(4, f = b.color), "elevation" in b && t(5, h = b.elevation), "transition" in b && t(6, m = b.transition), "$$scope" in b && t(11, a = b.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    m,
    _,
    s,
    r,
    p,
    a,
    l,
    I
  ];
}
class va extends Re {
  constructor(e) {
    super(), Oe(this, e, Bf, Hf, Ie, {
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
vt({
  class: "smui-paper__content",
  tag: "div"
});
vt({
  class: "smui-paper__title",
  tag: "h5"
});
vt({
  class: "smui-paper__subtitle",
  tag: "h6"
});
const Vf = (n) => ({}), Kl = (n) => ({});
function jf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[2].content
  ), o = ye(
    s,
    n,
    /*$$scope*/
    n[3],
    Kl
  );
  return {
    c() {
      e = ie("details"), t = ie("summary"), i = ut(
        /*title*/
        n[0]
      ), r = ue(), l = ie("div"), o && o.c(), H(t, "class", "svelte-l05fgd"), H(l, "class", "expandable-content svelte-l05fgd"), e.open = /*open*/
      n[1], H(e, "class", "svelte-l05fgd");
    },
    m(u, c) {
      j(u, e, c), x(e, t), x(t, i), x(e, r), x(e, l), o && o.m(l, null), a = !0;
    },
    p(u, c) {
      (!a || c & /*title*/
      1) && Ct(
        i,
        /*title*/
        u[0]
      ), o && o.p && (!a || c & /*$$scope*/
      8) && Se(
        o,
        s,
        u,
        /*$$scope*/
        u[3],
        a ? Ee(
          s,
          /*$$scope*/
          u[3],
          c,
          Vf
        ) : Te(
          /*$$scope*/
          u[3]
        ),
        Kl
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
      u && V(e), o && o.d(u);
    }
  };
}
function qf(n) {
  let e, t;
  return e = new va({
    props: {
      $$slots: { default: [jf] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Gf(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { title: l = "" } = e, { open: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title), "open" in s && t(1, a = s.open), "$$scope" in s && t(3, r = s.$$scope);
  }, [l, a, i, r];
}
class Kf extends Re {
  constructor(e) {
    super(), Oe(this, e, Gf, qf, Ie, { title: 0, open: 1 });
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
var Wf = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
      var i = "scaleX(" + t + ")", r = typeof window < "u" ? Dd(window, "transform") : "transform";
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
var tn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Wl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, bn = {
  ARIA_SELECTED: Wl.ARIA_SELECTED,
  ARIA_SORT: Wl.ARIA_SORT
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
var zf = (
  /** @class */
  function(n) {
    ct(e, n);
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
      return Gs(this, void 0, void 0, function() {
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
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, tn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, tn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, bn.ARIA_SORT, Pt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Pt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, tn.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(r, bn.ARIA_SORT), o = Pt.NONE;
      s === Pt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, tn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, bn.ARIA_SORT, Pt.DESCENDING), o = Pt.DESCENDING) : s === Pt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, tn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, bn.ARIA_SORT, Pt.ASCENDING), o = Pt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, bn.ARIA_SORT, Pt.ASCENDING), o = Pt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
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
      i ? (this.adapter.addClassAtRowIndex(t, tn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, bn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, tn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, bn.ARIA_SELECTED, "false"));
    }, e;
  }(Et)
);
const Yf = (n) => ({}), zl = (n) => ({}), Xf = (n) => ({}), Yl = (n) => ({});
function Xl(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[36].progress
  ), s = ye(
    a,
    n,
    /*$$scope*/
    n[35],
    Yl
  );
  return {
    c() {
      e = ie("div"), t = ie("div"), i = ue(), s && s.c(), H(t, "class", "mdc-data-table__scrim"), H(e, "class", "mdc-data-table__progress-indicator"), H(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(Zl).join(" "));
    },
    m(o, u) {
      j(o, e, u), x(e, t), x(e, i), s && s.m(e, null), l = !0;
    },
    p(o, u) {
      s && s.p && (!l || u[1] & /*$$scope*/
      16) && Se(
        s,
        a,
        o,
        /*$$scope*/
        o[35],
        l ? Ee(
          a,
          /*$$scope*/
          o[35],
          u,
          Xf
        ) : Te(
          /*$$scope*/
          o[35]
        ),
        Yl
      ), (!l || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Zl).join(" "))) && H(e, "style", r);
    },
    i(o) {
      l || (C(s, o), l = !0);
    },
    o(o) {
      S(s, o), l = !1;
    },
    d(o) {
      o && V(e), s && s.d(o);
    }
  };
}
function Zf(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m;
  const _ = (
    /*#slots*/
    n[36].default
  ), p = ye(
    _,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let I = [
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
  for (let A = 0; A < I.length; A += 1)
    b = z(b, I[A]);
  let R = [
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
  ], E = {};
  for (let A = 0; A < R.length; A += 1)
    E = z(E, R[A]);
  let L = (
    /*$$slots*/
    n[24].progress && Xl(n)
  );
  const k = (
    /*#slots*/
    n[36].paginate
  ), g = ye(
    k,
    n,
    /*$$scope*/
    n[35],
    zl
  );
  let y = [
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
    Xt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], D = {};
  for (let A = 0; A < y.length; A += 1)
    D = z(D, y[A]);
  return {
    c() {
      e = ie("div"), t = ie("div"), i = ie("table"), p && p.c(), o = ue(), L && L.c(), u = ue(), g && g.c(), oe(i, b), oe(t, E), oe(e, D);
    },
    m(A, v) {
      j(A, e, v), x(e, t), x(t, i), p && p.m(i, null), n[37](t), x(e, o), L && L.m(e, null), x(e, u), g && g.m(e, null), n[38](e), f = !0, h || (m = [
        ce(l = Je.call(
          null,
          i,
          /*table$use*/
          n[5]
        )),
        ce(s = Je.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        ce(d = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        he(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        he(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        he(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        he(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        he(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        he(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        he(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        he(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        he(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], h = !0);
    },
    p(A, v) {
      p && p.p && (!f || v[1] & /*$$scope*/
      16) && Se(
        p,
        _,
        A,
        /*$$scope*/
        A[35],
        f ? Ee(
          _,
          /*$$scope*/
          A[35],
          v,
          null
        ) : Te(
          /*$$scope*/
          A[35]
        ),
        null
      ), oe(i, b = de(I, [
        (!f || v[0] & /*table$class*/
        64 && r !== (r = re({
          [
            /*table$class*/
            A[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        v[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          A[25],
          "table$"
        )
      ])), l && me(l.update) && v[0] & /*table$use*/
      32 && l.update.call(
        null,
        /*table$use*/
        A[5]
      ), oe(t, E = de(R, [
        (!f || v[0] & /*container$class*/
        16 && a !== (a = re({
          [
            /*container$class*/
            A[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        v[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          A[25],
          "container$"
        )
      ])), s && me(s.update) && v[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        A[3]
      ), /*$$slots*/
      A[24].progress ? L ? (L.p(A, v), v[0] & /*$$slots*/
      16777216 && C(L, 1)) : (L = Xl(A), L.c(), C(L, 1), L.m(e, u)) : L && (Pe(), S(L, 1, 1, () => {
        L = null;
      }), He()), g && g.p && (!f || v[1] & /*$$scope*/
      16) && Se(
        g,
        k,
        A,
        /*$$scope*/
        A[35],
        f ? Ee(
          k,
          /*$$scope*/
          A[35],
          v,
          Yf
        ) : Te(
          /*$$scope*/
          A[35]
        ),
        zl
      ), oe(e, D = de(y, [
        (!f || v[0] & /*className, stickyHeader, internalClasses*/
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
        v[0] & /*$$restProps*/
        33554432 && Xt(
          /*$$restProps*/
          A[25],
          ["container$", "table$"]
        )
      ])), d && me(d.update) && v[0] & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        A[0]
      );
    },
    i(A) {
      f || (C(p, A), C(L), C(g, A), f = !0);
    },
    o(A) {
      S(p, A), S(L), S(g, A), f = !1;
    },
    d(A) {
      A && V(e), p && p.d(A), n[37](null), L && L.d(), g && g.d(A), n[38](null), h = !1, Ze(m);
    }
  };
}
const Zl = ([n, e]) => `${n}: ${e};`;
function Qf(n, e, t) {
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
  let r = fe(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const c = or(o), { closest: d } = hi, f = tt(xe());
  let { use: h = [] } = e, { class: m = "" } = e, { stickyHeader: _ = !1 } = e, { sortable: p = !1 } = e, { sort: I = null } = e, { sortDirection: b = "ascending" } = e, { sortAscendingAriaLabel: R = "sorted, ascending" } = e, { sortDescendingAriaLabel: E = "sorted, descending" } = e, { container$use: L = [] } = e, { container$class: k = "" } = e, { table$use: g = [] } = e, { table$class: y = "" } = e, D, A, v, F, O, U = {}, W = { height: "auto", top: "initial" }, N = Ge("SMUI:addLayoutListener"), B, M = !1, T = Lt(!1);
  rt(n, T, (q) => t(34, l = q));
  let Z = Lt(I);
  rt(n, Z, (q) => t(45, s = q));
  let Fe = Lt(b);
  rt(n, Fe, (q) => t(44, a = q)), qe("SMUI:checkbox:context", "data-table"), qe("SMUI:linear-progress:context", "data-table"), qe("SMUI:linear-progress:closed", T), qe("SMUI:data-table:sortable", p), qe("SMUI:data-table:sort", Z), qe("SMUI:data-table:sortDirection", Fe), qe("SMUI:data-table:sortAscendingAriaLabel", R), qe("SMUI:data-table:sortDescendingAriaLabel", E), N && (B = N(Ye));
  let Me;
  at(() => (t(7, A = new zf({
    addClass: Q,
    removeClass: ke,
    getHeaderCellElements: () => {
      var q;
      return (q = F == null ? void 0 : F.cells.map((le) => le.element)) !== null && q !== void 0 ? q : [];
    },
    getHeaderCellCount: () => {
      var q;
      return (q = F == null ? void 0 : F.cells.length) !== null && q !== void 0 ? q : 0;
    },
    getAttributeByHeaderCellIndex: (q, le) => {
      var J;
      return (J = F == null ? void 0 : F.orderedCells[q].getAttr(le)) !== null && J !== void 0 ? J : null;
    },
    setAttributeByHeaderCellIndex: (q, le, J) => {
      F == null || F.orderedCells[q].addAttr(le, J);
    },
    setClassNameByHeaderCellIndex: (q, le) => {
      F == null || F.orderedCells[q].addClass(le);
    },
    removeClassNameByHeaderCellIndex: (q, le) => {
      F == null || F.orderedCells[q].removeClass(le);
    },
    notifySortAction: (q) => {
      t(26, I = q.columnId), t(27, b = q.sortValue), ge(Be(), "SMUIDataTable:sorted", q, void 0, !0);
    },
    getTableContainerHeight: () => v.getBoundingClientRect().height,
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
      return (le = O == null ? void 0 : O.orderedRows.map((J) => J.element).indexOf(d(q, ".mdc-data-table__row"))) !== null && le !== void 0 ? le : -1;
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
      const q = F == null ? void 0 : F.checkbox;
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
    setAttributeAtRowIndex: (q, le, J) => {
      O == null || O.orderedRows[q].addAttr(le, J);
    },
    setHeaderRowCheckboxChecked: (q) => {
      const le = F == null ? void 0 : F.checkbox;
      le && (le.checked = q);
    },
    setHeaderRowCheckboxIndeterminate: De,
    setRowCheckboxCheckedAtIndex: (q, le) => {
      const J = O == null ? void 0 : O.orderedRows[q].checkbox;
      J && (J.checked = le);
    },
    setSortStatusLabelByHeaderCellIndex: (q, le) => {
    }
    // Handled automatically.
  })), A.init(), A.layout(), t(14, M = !0), () => {
    A.destroy();
  })), Zt(() => {
    B && B();
  });
  function _e(q) {
    t(10, F = q.detail);
  }
  function ze(q) {
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
    const le = F == null ? void 0 : F.checkbox;
    le && (le.indeterminate = q);
  }
  function Ne(q) {
    if (!A || !q.detail.target)
      return;
    const le = d(q.detail.target, ".mdc-data-table__header-cell--with-sort");
    le && K(le);
  }
  function ne(q) {
    if (!A || !q.detail.target)
      return;
    const le = d(q.detail.target, ".mdc-data-table__row");
    le && A && A.handleRowClick({ rowId: q.detail.rowId, row: le });
  }
  function K(q) {
    var le, J;
    const We = (le = F == null ? void 0 : F.orderedCells) !== null && le !== void 0 ? le : [], ot = We.map(($e) => $e.element).indexOf(q);
    if (ot === -1)
      return;
    const st = (J = We[ot].columnId) !== null && J !== void 0 ? J : null;
    A.handleSortAction({ columnId: st, columnIndex: ot, headerCell: q });
  }
  function Ye() {
    return A.layout();
  }
  function Be() {
    return D;
  }
  function At(q) {
    se[q ? "unshift" : "push"](() => {
      v = q, t(9, v);
    });
  }
  function X(q) {
    se[q ? "unshift" : "push"](() => {
      D = q, t(8, D);
    });
  }
  const ve = () => A && M && A.layout(), je = () => t(10, F = void 0), Ue = () => t(11, O = void 0), St = () => A && A.handleHeaderRowCheckboxChange();
  return n.$$set = (q) => {
    e = z(z({}, e), et(q)), t(25, r = fe(e, i)), "use" in q && t(0, h = q.use), "class" in q && t(1, m = q.class), "stickyHeader" in q && t(2, _ = q.stickyHeader), "sortable" in q && t(28, p = q.sortable), "sort" in q && t(26, I = q.sort), "sortDirection" in q && t(27, b = q.sortDirection), "sortAscendingAriaLabel" in q && t(29, R = q.sortAscendingAriaLabel), "sortDescendingAriaLabel" in q && t(30, E = q.sortDescendingAriaLabel), "container$use" in q && t(3, L = q.container$use), "container$class" in q && t(4, k = q.container$class), "table$use" in q && t(5, g = q.table$use), "table$class" in q && t(6, y = q.table$class), "$$scope" in q && t(35, u = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Ht(Z, s = I, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Ht(Fe, a = b, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && A && Me !== l && (t(33, Me = l), l ? A.hideProgress() : A.showProgress());
  }, [
    h,
    m,
    _,
    L,
    k,
    g,
    y,
    A,
    D,
    v,
    F,
    O,
    U,
    W,
    M,
    f,
    T,
    Z,
    Fe,
    _e,
    ze,
    G,
    Ne,
    ne,
    c,
    r,
    I,
    b,
    p,
    R,
    E,
    Ye,
    Be,
    Me,
    l,
    u,
    o,
    At,
    X,
    ve,
    je,
    Ue,
    St
  ];
}
class Jf extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Qf,
      Zf,
      Ie,
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
function xf(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[10].default
  ), s = ye(
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
      e = ie("thead"), s && s.c(), oe(e, u);
    },
    m(c, d) {
      j(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        ce(t = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        he(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        he(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        he(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        he(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], r = !0);
    },
    p(c, [d]) {
      s && s.p && (!i || d & /*$$scope*/
      512) && Se(
        s,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? Ee(
          a,
          /*$$scope*/
          c[9],
          d,
          null
        ) : Te(
          /*$$scope*/
          c[9]
        ),
        null
      ), oe(e, u = de(o, [d & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && me(t.update) && d & /*use*/
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
      c && V(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function $f(n, e, t) {
  const i = ["use", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, u, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  qe("SMUI:data-table:row:header", !0), at(() => {
    const E = {
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
    return ge(I(), "SMUIDataTableHeader:mount", E), () => {
      ge(I(), "SMUIDataTableHeader:unmount", E);
    };
  });
  function h(E) {
    t(2, c = E.detail);
  }
  function m(E) {
    d.push(E.detail), f.set(E.detail.element, E.detail), E.stopPropagation();
  }
  function _(E) {
    const L = d.indexOf(E.detail);
    L !== -1 && (d.splice(L, 1), d = d), f.delete(E.detail.element), E.stopPropagation();
  }
  function p() {
    return [...I().querySelectorAll(".mdc-data-table__header-cell")].map((E) => f.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function I() {
    return u;
  }
  function b(E) {
    se[E ? "unshift" : "push"](() => {
      u = E, t(1, u);
    });
  }
  const R = () => t(2, c = void 0);
  return n.$$set = (E) => {
    e = z(z({}, e), et(E)), t(7, r = fe(e, i)), "use" in E && t(0, o = E.use), "$$scope" in E && t(9, a = E.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    m,
    _,
    r,
    I,
    a,
    l,
    b,
    R
  ];
}
class eh extends Re {
  constructor(e) {
    super(), Oe(this, e, $f, xf, Ie, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function th(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = ye(
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
    c = z(c, u[d]);
  return {
    c() {
      e = ie("tbody"), o && o.c(), oe(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        ce(i = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        he(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        he(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      256) && Se(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? Ee(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Te(
          /*$$scope*/
          d[8]
        ),
        null
      ), oe(e, c = de(u, [
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
      ])), i && me(i.update) && f & /*use*/
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
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function nh(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  qe("SMUI:data-table:row:header", !1), at(() => {
    const b = {
      get rows() {
        return d;
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
    d.push(b.detail), f.set(b.detail.element, b.detail), b.stopPropagation();
  }
  function m(b) {
    const R = d.indexOf(b.detail);
    R !== -1 && (d.splice(R, 1), d = d), f.delete(b.detail.element), b.stopPropagation();
  }
  function _() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((b) => f.get(b)).filter((b) => b && b._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function I(b) {
    se[b ? "unshift" : "push"](() => {
      c = b, t(2, c);
    });
  }
  return n.$$set = (b) => {
    e = z(z({}, e), et(b)), t(6, r = fe(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "$$scope" in b && t(8, a = b.$$scope);
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
    I
  ];
}
class ih extends Re {
  constructor(e) {
    super(), Oe(this, e, nh, th, Ie, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function rh(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[15].default
  ), u = ye(
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
    d = z(d, c[f]);
  return {
    c() {
      e = ie("tr"), u && u.c(), oe(e, d);
    },
    m(f, h) {
      j(f, e, h), u && u.m(e, null), n[16](e), l = !0, a || (s = [
        ce(r = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        he(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        he(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        he(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], a = !0);
    },
    p(f, [h]) {
      u && u.p && (!l || h & /*$$scope*/
      16384) && Se(
        u,
        o,
        f,
        /*$$scope*/
        f[14],
        l ? Ee(
          o,
          /*$$scope*/
          f[14],
          h,
          null
        ) : Te(
          /*$$scope*/
          f[14]
        ),
        null
      ), oe(e, d = de(c, [
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
      ])), r && me(r.update) && h & /*use*/
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
      S(u, f), l = !1;
    },
    d(f) {
      f && V(e), u && u.d(f), n[16](null), a = !1, Ze(s);
    }
  };
}
let lh = 0;
function sh(n, e, t) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + lh++ } = e, d, f, h = {}, m = {}, _ = Ge("SMUI:data-table:row:header");
  at(() => {
    const v = _ ? {
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
        var F;
        return (F = f && f.checked) !== null && F !== void 0 ? F : !1;
      },
      addClass: I,
      removeClass: b,
      getAttr: R,
      addAttr: E
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
        var F;
        return (F = f && f.checked) !== null && F !== void 0 ? F : !1;
      },
      addClass: I,
      removeClass: b,
      getAttr: R,
      addAttr: E
    };
    return ge(g(), "SMUIDataTableRow:mount", v), () => {
      ge(g(), "SMUIDataTableRow:unmount", v);
    };
  });
  function p(v) {
    t(3, f = v.detail);
  }
  function I(v) {
    h[v] || t(4, h[v] = !0, h);
  }
  function b(v) {
    (!(v in h) || h[v]) && t(4, h[v] = !1, h);
  }
  function R(v) {
    var F;
    return v in m ? (F = m[v]) !== null && F !== void 0 ? F : null : g().getAttribute(v);
  }
  function E(v, F) {
    m[v] !== F && t(5, m[v] = F, m);
  }
  function L(v) {
    ge(g(), "SMUIDataTableHeader:click", v);
  }
  function k(v) {
    ge(g(), "SMUIDataTableRow:click", { rowId: c, target: v.target });
  }
  function g() {
    return d;
  }
  function y(v) {
    se[v ? "unshift" : "push"](() => {
      d = v, t(2, d);
    });
  }
  const D = (v) => _ ? L(v) : k(v), A = () => t(3, f = void 0);
  return n.$$set = (v) => {
    e = z(z({}, e), et(v)), t(11, r = fe(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "rowId" in v && t(12, c = v.rowId), "$$scope" in v && t(14, a = v.$$scope);
  }, [
    o,
    u,
    d,
    f,
    h,
    m,
    s,
    _,
    p,
    L,
    k,
    r,
    c,
    g,
    a,
    l,
    y,
    D,
    A
  ];
}
class Aa extends Re {
  constructor(e) {
    super(), Oe(this, e, sh, rh, Ie, {
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
function ah(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[22].default
  ), o = ye(
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
    c = z(c, u[d]);
  return {
    c() {
      e = ie("td"), o && o.c(), oe(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[25](e), r = !0, l || (a = [
        ce(i = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        he(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], l = !0);
    },
    p(d, f) {
      o && o.p && (!r || f & /*$$scope*/
      2097152) && Se(
        o,
        s,
        d,
        /*$$scope*/
        d[21],
        r ? Ee(
          s,
          /*$$scope*/
          d[21],
          f,
          null
        ) : Te(
          /*$$scope*/
          d[21]
        ),
        null
      ), oe(e, c = de(u, [
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
      ])), i && me(i.update) && f & /*use*/
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
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[25](null), l = !1, Ze(a);
    }
  };
}
function oh(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [ch, uh], d = [];
  function f(_, p) {
    return (
      /*sortable*/
      _[5] ? 0 : 1
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
  for (let _ = 0; _ < h.length; _ += 1)
    m = z(m, h[_]);
  return {
    c() {
      e = ie("th"), i.c(), oe(e, m);
    },
    m(_, p) {
      j(_, e, p), d[t].m(e, null), n[23](e), s = !0, o || (u = [
        ce(a = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        he(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(_, p) {
      let I = t;
      t = f(_), t === I ? d[t].p(_, p) : (Pe(), S(d[I], 1, 1, () => {
        d[I] = null;
      }), He(), i = d[t], i ? i.p(_, p) : (i = d[t] = c[t](_), i.c()), C(i, 1), i.m(e, null)), oe(e, m = de(h, [
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
      _ && V(e), d[t].d(), n[23](null), o = !1, Ze(u);
    }
  };
}
function uh(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), i = ye(
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
      2097152) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[21],
        e ? Ee(
          t,
          /*$$scope*/
          r[21],
          l,
          null
        ) : Te(
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
function ch(n) {
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
  ), u = ye(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ie("div"), u && u.c(), t = ue(), i = ie("div"), l = ut(r), H(i, "class", "mdc-data-table__sort-status-label"), H(i, "aria-hidden", "true"), H(i, "id", a = /*columnId*/
      n[4] + "-status-label"), H(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, d) {
      j(c, e, d), u && u.m(e, null), x(e, t), x(e, i), x(i, l), s = !0;
    },
    p(c, d) {
      u && u.p && (!s || d & /*$$scope*/
      2097152) && Se(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        s ? Ee(
          o,
          /*$$scope*/
          c[21],
          d,
          null
        ) : Te(
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
      ) : "") + "") && Ct(l, r), (!s || d & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && H(i, "id", a);
    },
    i(c) {
      s || (C(u, c), s = !0);
    },
    o(c) {
      S(u, c), s = !1;
    },
    d(c) {
      c && V(e), u && u.d(c);
    }
  };
}
function dh(n) {
  let e, t, i, r;
  const l = [oh, ah], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
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
      o && V(i), a[e].d(o);
    }
  };
}
let fh = 0;
function hh(n, e, t) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = fe(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = tt(xe());
  let c = Ge("SMUI:data-table:row:header"), { use: d = [] } = e, { class: f = "" } = e, { numeric: h = !1 } = e, { checkbox: m = !1 } = e, { columnId: _ = c ? "SMUI-data-table-column-" + fh++ : "SMUI-data-table-unused" } = e, { sortable: p = Ge("SMUI:data-table:sortable") } = e, I, b = {}, R = {}, E = Ge("SMUI:data-table:sort");
  rt(n, E, (T) => t(9, l = T));
  let L = Ge("SMUI:data-table:sortDirection");
  rt(n, L, (T) => t(10, a = T));
  let k = Ge("SMUI:data-table:sortAscendingAriaLabel"), g = Ge("SMUI:data-table:sortDescendingAriaLabel");
  p && (qe("SMUI:label:context", "data-table:sortable-header-cell"), qe("SMUI:icon-button:context", "data-table:sortable-header-cell"), qe("SMUI:icon-button:aria-describedby", _ + "-status-label")), at(() => {
    const T = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return U();
      },
      get columnId() {
        return _;
      },
      addClass: y,
      removeClass: D,
      getAttr: A,
      addAttr: v
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return U();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: D,
      getAttr: A,
      addAttr: v
    };
    return ge(U(), "SMUIDataTableCell:mount", T), () => {
      ge(U(), "SMUIDataTableCell:unmount", T);
    };
  });
  function y(T) {
    b[T] || t(7, b[T] = !0, b);
  }
  function D(T) {
    (!(T in b) || b[T]) && t(7, b[T] = !1, b);
  }
  function A(T) {
    var Z;
    return T in R ? (Z = R[T]) !== null && Z !== void 0 ? Z : null : U().getAttribute(T);
  }
  function v(T, Z) {
    R[T] !== Z && t(8, R[T] = Z, R);
  }
  function F(T) {
    ge(U(), "SMUIDataTableHeaderCheckbox:change", T);
  }
  function O(T) {
    ge(U(), "SMUIDataTableBodyCheckbox:change", T);
  }
  function U() {
    return I;
  }
  function W(T) {
    se[T ? "unshift" : "push"](() => {
      I = T, t(6, I);
    });
  }
  const N = (T) => m && F(T);
  function B(T) {
    se[T ? "unshift" : "push"](() => {
      I = T, t(6, I);
    });
  }
  const M = (T) => m && O(T);
  return n.$$set = (T) => {
    e = z(z({}, e), et(T)), t(19, r = fe(e, i)), "use" in T && t(0, d = T.use), "class" in T && t(1, f = T.class), "numeric" in T && t(2, h = T.numeric), "checkbox" in T && t(3, m = T.checkbox), "columnId" in T && t(4, _ = T.columnId), "sortable" in T && t(5, p = T.sortable), "$$scope" in T && t(21, o = T.$$scope);
  }, [
    d,
    f,
    h,
    m,
    _,
    p,
    I,
    b,
    R,
    l,
    a,
    u,
    c,
    E,
    L,
    k,
    g,
    F,
    O,
    r,
    U,
    o,
    s,
    W,
    N,
    B,
    M
  ];
}
class yr extends Re {
  constructor(e) {
    super(), Oe(this, e, hh, dh, Ie, {
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
function mh(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, _, p, I, b, R, E, L = [
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
      ).map(xl).concat([
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
      "aria-valuenow": I = /*indeterminate*/
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
  for (let g = 0; g < L.length; g += 1)
    k = z(k, L[g]);
  return {
    c() {
      e = ie("div"), t = ie("div"), i = ie("div"), l = ue(), a = ie("div"), s = ue(), o = ie("div"), u = ie("span"), d = ue(), f = ie("div"), f.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', H(i, "class", "mdc-linear-progress__buffer-bar"), H(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        n[11]
      ).map(Ql).join(" ")), H(a, "class", "mdc-linear-progress__buffer-dots"), H(t, "class", "mdc-linear-progress__buffer"), H(u, "class", "mdc-linear-progress__bar-inner"), H(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), H(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        n[12]
      ).map(Jl).join(" ")), H(f, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), oe(e, k);
    },
    m(g, y) {
      j(g, e, y), x(e, t), x(t, i), x(t, l), x(t, a), x(e, s), x(e, o), x(o, u), x(e, d), x(e, f), n[19](e), R || (E = [
        ce(b = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        he(
          e,
          "transitionend",
          /*transitionend_handler*/
          n[20]
        )
      ], R = !0);
    },
    p(g, [y]) {
      y & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        g[11]
      ).map(Ql).join(" ")) && H(i, "style", r), y & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        g[12]
      ).map(Jl).join(" ")) && H(o, "style", c), oe(e, k = de(L, [
        y & /*className, indeterminate, closed, internalClasses*/
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
        y & /*internalStyles, style*/
        1028 && m !== (m = Object.entries(
          /*internalStyles*/
          g[10]
        ).map(xl).concat([
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
        y & /*indeterminate, progress*/
        40 && I !== (I = /*indeterminate*/
        g[3] ? void 0 : (
          /*progress*/
          g[5]
        )) && {
          "aria-valuenow": I
        },
        y & /*internalAttrs*/
        512 && /*internalAttrs*/
        g[9],
        y & /*$$restProps*/
        65536 && /*$$restProps*/
        g[16]
      ])), b && me(b.update) && y & /*use*/
      1 && b.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i: nt,
    o: nt,
    d(g) {
      g && V(e), n[19](null), R = !1, Ze(E);
    }
  };
}
const Ql = ([n, e]) => `${n}: ${e};`, Jl = ([n, e]) => `${n}: ${e};`, xl = ([n, e]) => `${n}: ${e};`;
function ph(n, e, t) {
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
  let r = fe(e, i), l;
  const a = tt(xe());
  let { use: s = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: d = !1 } = e, { progress: f = 0 } = e, { buffer: h = void 0 } = e, m, _, p = {}, I = {}, b = {}, R = {}, E = {}, L = Ge("SMUI:linear-progress:context"), k = Ge("SMUI:linear-progress:closed");
  rt(n, k, (M) => t(21, l = M)), at(() => (t(6, _ = new Wf({
    addClass: y,
    forceLayout: () => {
      W().getBoundingClientRect();
    },
    setBufferBarStyle: O,
    setPrimaryBarStyle: U,
    hasClass: g,
    removeAttribute: v,
    removeClass: D,
    setAttribute: A,
    setStyle: F,
    attachResizeObserver: (M) => {
      const T = window.ResizeObserver;
      if (T) {
        const Z = new T(M);
        return Z.observe(W()), Z;
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
  function y(M) {
    p[M] || t(8, p[M] = !0, p);
  }
  function D(M) {
    (!(M in p) || p[M]) && t(8, p[M] = !1, p);
  }
  function A(M, T) {
    I[M] !== T && t(9, I[M] = T, I);
  }
  function v(M) {
    (!(M in I) || I[M] != null) && t(9, I[M] = void 0, I);
  }
  function F(M, T) {
    b[M] != T && (T === "" || T == null ? (delete b[M], t(10, b)) : t(10, b[M] = T, b));
  }
  function O(M, T) {
    R[M] != T && (T === "" || T == null ? (delete R[M], t(11, R)) : t(11, R[M] = T, R));
  }
  function U(M, T) {
    E[M] != T && (T === "" || T == null ? (delete E[M], t(12, E)) : t(12, E[M] = T, E));
  }
  function W() {
    return m;
  }
  function N(M) {
    se[M ? "unshift" : "push"](() => {
      m = M, t(7, m);
    });
  }
  const B = () => _ && _.handleTransitionEnd();
  return n.$$set = (M) => {
    e = z(z({}, e), et(M)), t(16, r = fe(e, i)), "use" in M && t(0, s = M.use), "class" in M && t(1, o = M.class), "style" in M && t(2, u = M.style), "indeterminate" in M && t(3, c = M.indeterminate), "closed" in M && t(4, d = M.closed), "progress" in M && t(5, f = M.progress), "buffer" in M && t(17, h = M.buffer);
  }, n.$$.update = () => {
    n.$$.dirty & /*closed*/
    16 && k && Ht(k, l = d, l), n.$$.dirty & /*instance, indeterminate*/
    72 && _ && _.isDeterminate() !== !c && _.setDeterminate(!c), n.$$.dirty & /*instance, progress*/
    96 && _ && _.getProgress() !== f && _.setProgress(f), n.$$.dirty & /*instance, buffer*/
    131136 && _ && (h == null ? _.setBuffer(1) : _.setBuffer(h)), n.$$.dirty & /*instance, closed*/
    80 && _ && (d ? _.close() : _.open());
  }, [
    s,
    o,
    u,
    c,
    d,
    f,
    _,
    m,
    p,
    I,
    b,
    R,
    E,
    a,
    L,
    k,
    r,
    h,
    W,
    N,
    B
  ];
}
class gh extends Re {
  constructor(e) {
    super(), Oe(this, e, ph, mh, Ie, {
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
function _h(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), r = ye(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = ie("span"), r && r.c(), H(e, "class", "oscd-icon");
    },
    m(l, a) {
      j(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, [a]) {
      r && r.p && (!t || a & /*$$scope*/
      1) && Se(
        r,
        i,
        l,
        /*$$scope*/
        l[0],
        t ? Ee(
          i,
          /*$$scope*/
          l[0],
          a,
          null
        ) : Te(
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
      l && V(e), r && r.d(l);
    }
  };
}
function bh(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e;
  return n.$$set = (l) => {
    "$$scope" in l && t(0, r = l.$$scope);
  }, [r, i];
}
class an extends Re {
  constructor(e) {
    super(), Oe(this, e, bh, _h, Ie, {});
  }
}
function Ih(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), H(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "height", "24px"), H(e, "viewBox", "0 -960 960 960"), H(e, "width", "24px"), H(e, "fill", "#e8eaed");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && H(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function vh(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Ih] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ah(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Ch extends Re {
  constructor(e) {
    super(), Oe(this, e, Ah, vh, Ie, { svgStyles: 0 });
  }
}
function yh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), H(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 -960 960 960"), H(e, "width", "24px");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && H(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Eh(n) {
  let e, t;
  return e = new an({
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
      ee(e, i);
    }
  };
}
function Sh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Ca extends Re {
  constructor(e) {
    super(), Oe(this, e, Sh, Eh, Ie, { svgStyles: 0 });
  }
}
function Th(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), H(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && H(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Lh(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Th] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Oh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Rh extends Re {
  constructor(e) {
    super(), Oe(this, e, Oh, Lh, Ie, { svgStyles: 0 });
  }
}
function kh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), H(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && H(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Dh(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [kh] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Mh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Fh extends Re {
  constructor(e) {
    super(), Oe(this, e, Mh, Dh, Ie, { svgStyles: 0 });
  }
}
function Nh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "height", "24px"), H(e, "viewBox", "0 -960 960 960"), H(e, "width", "24px"), H(e, "fill", "#e8eaed");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p: nt,
    d(i) {
      i && V(e);
    }
  };
}
function Uh(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Nh] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function wh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Ph extends Re {
  constructor(e) {
    super(), Oe(this, e, wh, Uh, Ie, { svgStyles: 0 });
  }
}
function Hh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), H(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && H(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Bh(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Hh] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Vh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class jh extends Re {
  constructor(e) {
    super(), Oe(this, e, Vh, Bh, Ie, { svgStyles: 0 });
  }
}
function qh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M200-440v-80h560v80H200Z"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "height", "24px"), H(e, "viewBox", "0 -960 960 960"), H(e, "width", "24px"), H(e, "fill", "#e8eaed");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p: nt,
    d(i) {
      i && V(e);
    }
  };
}
function Gh(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [qh] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Kh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Wh extends Re {
  constructor(e) {
    super(), Oe(this, e, Kh, Gh, Ie, { svgStyles: 0 });
  }
}
function zh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), H(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && H(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Yh(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [zh] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Xh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Zh extends Re {
  constructor(e) {
    super(), Oe(this, e, Xh, Yh, Ie, { svgStyles: 0 });
  }
}
function Qh(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), H(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && H(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Jh(n) {
  let e, t;
  return e = new an({
    props: {
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
      ee(e, i);
    }
  };
}
function xh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class $h extends Re {
  constructor(e) {
    super(), Oe(this, e, xh, Jh, Ie, { svgStyles: 0 });
  }
}
const Tt = [];
for (let n = 0; n < 256; ++n)
  Tt.push((n + 256).toString(16).slice(1));
function em(n, e = 0) {
  return (Tt[n[e + 0]] + Tt[n[e + 1]] + Tt[n[e + 2]] + Tt[n[e + 3]] + "-" + Tt[n[e + 4]] + Tt[n[e + 5]] + "-" + Tt[n[e + 6]] + Tt[n[e + 7]] + "-" + Tt[n[e + 8]] + Tt[n[e + 9]] + "-" + Tt[n[e + 10]] + Tt[n[e + 11]] + Tt[n[e + 12]] + Tt[n[e + 13]] + Tt[n[e + 14]] + Tt[n[e + 15]]).toLowerCase();
}
let xi;
const tm = new Uint8Array(16);
function nm() {
  if (!xi) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    xi = crypto.getRandomValues.bind(crypto);
  }
  return xi(tm);
}
const im = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), $l = { randomUUID: im };
function ya(n, e, t) {
  var r;
  if ($l.randomUUID && !n)
    return $l.randomUUID();
  n = n || {};
  const i = n.random ?? ((r = n.rng) == null ? void 0 : r.call(n)) ?? nm();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, em(i);
}
function es(n, e, t) {
  const i = n.slice();
  return i[24] = e[t], i[26] = t, i;
}
function ts(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i;
}
function ns(n, e, t) {
  const i = n.slice();
  return i[30] = e[t], i;
}
function is(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i[33] = e, i[34] = t, i;
}
function rs(n) {
  let e, t = (
    /*$sortColumn*/
    n[5] === /*col*/
    n[27].field && /*$sortDirection*/
    n[6] !== null && ls(n)
  );
  return {
    c() {
      t && t.c(), e = Xe();
    },
    m(i, r) {
      t && t.m(i, r), j(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[5] === /*col*/
      i[27].field && /*$sortDirection*/
      i[6] !== null ? t ? t.p(i, r) : (t = ls(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(i) {
      i && V(e), t && t.d(i);
    }
  };
}
function ls(n) {
  let e;
  function t(l, a) {
    if (
      /*$sortDirection*/
      l[6] === "asc"
    )
      return lm;
    if (
      /*$sortDirection*/
      l[6] === "desc"
    )
      return rm;
  }
  let i = t(n), r = i && i(n);
  return {
    c() {
      r && r.c(), e = Xe();
    },
    m(l, a) {
      r && r.m(l, a), j(l, e, a);
    },
    p(l, a) {
      i !== (i = t(l)) && (r && r.d(1), r = i && i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && V(e), r && r.d(l);
    }
  };
}
function rm(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M12 20l8-8H4l8 8z"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 0 24 24"), H(e, "width", "16"), H(e, "height", "16"), H(e, "fill", "currentColor"), H(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    d(i) {
      i && V(e);
    }
  };
}
function lm(n) {
  let e, t;
  return {
    c() {
      e = lt("svg"), t = lt("path"), H(t, "d", "M12 4l-8 8h16l-8-8z"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "viewBox", "0 0 24 24"), H(e, "width", "16"), H(e, "height", "16"), H(e, "fill", "currentColor"), H(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      j(i, e, r), x(e, t);
    },
    d(i) {
      i && V(e);
    }
  };
}
function ss(n) {
  let e, t, i = (
    /*col*/
    n[27].filterType === "text" && as(n)
  ), r = (
    /*col*/
    n[27].filterType === "number" && os(n)
  );
  return {
    c() {
      i && i.c(), e = ue(), r && r.c(), t = Xe();
    },
    m(l, a) {
      i && i.m(l, a), j(l, e, a), r && r.m(l, a), j(l, t, a);
    },
    p(l, a) {
      /*col*/
      l[27].filterType === "text" ? i ? i.p(l, a) : (i = as(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      l[27].filterType === "number" ? r ? r.p(l, a) : (r = os(l), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && (V(e), V(t)), i && i.d(l), r && r.d(l);
    }
  };
}
function as(n) {
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
      e = ie("input"), H(e, "type", "text"), H(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), H(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      j(a, e, s), dn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        he(e, "input", l),
        he(
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
      n[27].headerName}`) && H(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && e.value !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && dn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && V(e), i = !1, Ze(r);
    }
  };
}
function os(n) {
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
      e = ie("input"), H(e, "type", "number"), H(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), H(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      j(a, e, s), dn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        he(e, "input", l),
        he(
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
      n[27].headerName}`) && H(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && Ps(e.value) !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && dn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && V(e), i = !1, Ze(r);
    }
  };
}
function sm(n) {
  let e, t, i, r = (
    /*col*/
    n[27].headerName + ""
  ), l, a, s, o, u = (
    /*col*/
    n[27].sortable && rs(n)
  ), c = (
    /*col*/
    n[27].filter && ss(n)
  );
  return {
    c() {
      e = ie("div"), t = ie("div"), i = ie("span"), l = ut(r), a = ue(), u && u.c(), s = ue(), c && c.c(), o = ue(), H(i, "class", "header-title svelte-29x22x"), H(t, "class", "cell-header svelte-29x22x"), H(e, "class", "custom-cell-container svelte-29x22x"), ui(
        e,
        "min-width",
        /*col*/
        n[27].minWidth ?? 0
      );
    },
    m(d, f) {
      j(d, e, f), x(e, t), x(t, i), x(i, l), x(t, a), u && u.m(t, null), x(e, s), c && c.m(e, null), j(d, o, f);
    },
    p(d, f) {
      f[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      d[27].headerName + "") && Ct(l, r), /*col*/
      d[27].sortable ? u ? u.p(d, f) : (u = rs(d), u.c(), u.m(t, null)) : u && (u.d(1), u = null), /*col*/
      d[27].filter ? c ? c.p(d, f) : (c = ss(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), f[0] & /*columnDefs*/
      4 && ui(
        e,
        "min-width",
        /*col*/
        d[27].minWidth ?? 0
      );
    },
    d(d) {
      d && (V(e), V(o)), u && u.d(), c && c.d();
    }
  };
}
function us(n) {
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
  return e = new yr({
    props: {
      style: (
        /*col*/
        n[27].headerStyle
      ),
      $$slots: { default: [sm] },
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function am(n) {
  let e, t, i = jt(
    /*columnDefs*/
    n[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = us(is(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
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
      j(a, e, s), t = !0;
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
          const u = is(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = us(u), r[o].c(), C(r[o], 1), r[o].m(e.parentNode, e));
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
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && V(e), ur(r, a);
    }
  };
}
function om(n) {
  let e, t;
  return e = new Aa({
    props: {
      class: "header-row",
      $$slots: { default: [am] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function um(n) {
  let e, t;
  return e = new yr({
    props: {
      numeric: (
        /*col*/
        n[27].numeric
      ),
      style: (
        /*col*/
        n[27].cellStyle
      ),
      $$slots: { default: [hm] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function cm(n) {
  let e, t;
  return e = new yr({
    props: {
      $$slots: { default: [Sm] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function dm(n) {
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
      j(i, t, r);
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
      i && V(t);
    }
  };
}
function fm(n) {
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
      j(i, t, r);
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
      i && V(t);
    }
  };
}
function hm(n) {
  let e;
  function t(l, a) {
    return (
      /*col*/
      l[27].valueFormatter ? fm : dm
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = Xe();
    },
    m(l, a) {
      r.m(l, a), j(l, e, a);
    },
    p(l, a) {
      i === (i = t(l)) && r ? r.p(l, a) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && V(e), r.d(l);
    }
  };
}
function mm(n) {
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
      $$slots: { default: [Em] },
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function pm(n) {
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
  return e = new $u({
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function gm(n) {
  let e, t;
  return e = new Ph({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function _m(n) {
  let e, t;
  return e = new $h({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function bm(n) {
  let e, t;
  return e = new Zh({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Im(n) {
  let e, t;
  return e = new Wh({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function vm(n) {
  let e, t;
  return e = new Fh({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Am(n) {
  let e, t;
  return e = new Rh({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Cm(n) {
  let e, t;
  return e = new Ca({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ym(n) {
  let e, t;
  return e = new Ch({ props: { svgStyles: "margin: unset" } }), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Em(n) {
  let e, t, i, r;
  const l = [
    ym,
    Cm,
    Am,
    vm,
    Im,
    bm,
    _m,
    gm
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t || (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function cs(n) {
  let e, t, i, r;
  const l = [pm, mm], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), C(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (C(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function Sm(n) {
  let e, t, i = jt(
    /*rowActions*/
    n[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = cs(ns(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = ie("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      H(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, s) {
      j(a, e, s);
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
          const u = ns(a, i, o);
          r[o] ? (r[o].p(u, s), C(r[o], 1)) : (r[o] = cs(u), r[o].c(), C(r[o], 1), r[o].m(e, null));
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
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && V(e), ur(r, a);
    }
  };
}
function ds(n, e) {
  let t, i, r, l, a;
  const s = [cm, um], o = [];
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
      j(c, t, d), o[i].m(c, d), j(c, l, d), a = !0;
    },
    p(c, d) {
      e = c;
      let f = i;
      i = u(e), i === f ? o[i].p(e, d) : (Pe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), He(), r = o[i], r ? r.p(e, d) : (r = o[i] = s[i](e), r.c()), C(r, 1), r.m(l.parentNode, l));
    },
    i(c) {
      a || (C(r), a = !0);
    },
    o(c) {
      S(r), a = !1;
    },
    d(c) {
      c && (V(t), V(l)), o[i].d(c);
    }
  };
}
function Tm(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = jt(
    /*columnDefs*/
    n[2]
  );
  const a = (s) => (
    /*col*/
    s[27].field
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = ts(n, l, s), u = a(o);
    t.set(u, e[s] = ds(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = ue();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      j(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      140 && (l = jt(
        /*columnDefs*/
        s[2]
      ), Pe(), e = fr(e, o, a, 1, s, l, t, i.parentNode, dr, ds, i, ts), He());
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
      s && V(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function fs(n, e) {
  let t, i, r;
  return i = new Aa({
    props: {
      $$slots: { default: [Tm] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      j(l, t, a), $(i, l, a), r = !0;
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
      l && V(t), ee(i, l);
    }
  };
}
function Lm(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = jt(
    /*$filteredData*/
    n[7]
  );
  const a = (s) => (
    /*index*/
    s[26]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = es(n, l, s), u = a(o);
    t.set(u, e[s] = fs(u, o));
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
      j(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      140 && (l = jt(
        /*$filteredData*/
        s[7]
      ), Pe(), e = fr(e, o, a, 1, s, l, t, i.parentNode, dr, fs, i, es), He());
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
      s && V(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Om(n) {
  let e, t, i, r;
  return e = new eh({
    props: {
      $$slots: { default: [om] },
      $$scope: { ctx: n }
    }
  }), i = new ih({
    props: {
      $$slots: { default: [Lm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = ue(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), j(l, t, a), $(i, l, a), r = !0;
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
      l && V(t), ee(e, l), ee(i, l);
    }
  };
}
function Rm(n) {
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
    n[0]), e = new gh({ props: l }), se.push(() => ht(e, "closed", r)), {
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
        a[0], ft(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function km(n) {
  let e, t;
  return e = new Jf({
    props: {
      "table$aria-label": (
        /*label*/
        n[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Rm],
        default: [Om]
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Dm(n, e, t) {
  let i, r, l, { loadingDone: a = !0 } = e, { label: s = ya() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: d = [] } = e, f = { name: "", color: "", number: "" }, h = Lt([]);
  rt(n, h, (v) => t(7, l = v));
  let m = Lt(null);
  rt(n, m, (v) => t(5, i = v));
  let _ = Lt(null);
  rt(n, _, (v) => t(6, r = v)), c.store.subscribe((v) => {
    t(13, u = [...v]), p();
  });
  function p() {
    let v = u.filter((F) => o.every((O) => {
      const U = f[O.field], W = F[O.field];
      return U ? O.filterType === "number" ? W == U : W.toString().toLowerCase().includes(U.toLowerCase()) : !0;
    }));
    v = I(v), h.set(v);
  }
  function I(v) {
    let F, O;
    return m.subscribe((U) => F = U), _.subscribe((U) => O = U), !F || !O ? v : v.sort((U, W) => {
      let N = U[F], B = W[F];
      return N == null && (N = ""), B == null && (B = ""), O === "asc" ? N.toString().localeCompare(B.toString()) : B.toString().localeCompare(N.toString());
    });
  }
  function b(v) {
    m.update((F) => {
      if (F === v)
        _.update((O) => O === "asc" ? "desc" : O === "desc" ? null : "asc");
      else
        return _.set("asc"), v;
      return v;
    }), p();
  }
  h.set(u);
  function R(v) {
    a = v, t(0, a);
  }
  function E(v) {
    f[v.field] = this.value, t(4, f);
  }
  const L = () => p();
  function k(v) {
    f[v.field] = Ps(this.value), t(4, f);
  }
  const g = () => p(), y = (v) => v.sortable && b(v.field), D = (v, F) => v.callback(F), A = (v, F) => v.callback(F);
  return n.$$set = (v) => {
    "loadingDone" in v && t(0, a = v.loadingDone), "label" in v && t(1, s = v.label), "columnDefs" in v && t(2, o = v.columnDefs), "rowData" in v && t(13, u = v.rowData), "store" in v && t(14, c = v.store), "rowActions" in v && t(3, d = v.rowActions);
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
    _,
    p,
    b,
    u,
    c,
    R,
    E,
    L,
    k,
    g,
    y,
    D,
    A
  ];
}
class Ea extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Dm,
      km,
      Ie,
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
var ar;
(function(n) {
  n.POLITE = "polite", n.ASSERTIVE = "assertive";
})(ar || (ar = {}));
var Mm = "data-mdc-dom-announce";
function Fm(n, e) {
  Nm.getInstance().say(n, e);
}
var Nm = (
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
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Mm, "true"), t.body.appendChild(i), i;
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
var cn;
(function(n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.CLICK = 1] = "CLICK", n[n.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", n[n.DELETE_KEY = 3] = "DELETE_KEY", n[n.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", n[n.ENTER_KEY = 5] = "ENTER_KEY";
})(cn || (cn = {}));
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
var Sa = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
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
      t.stopPropagation(), this.adapter.notifyInteraction(cn.CLICK);
    }, e.prototype.handleKeydown = function(t) {
      t.stopPropagation();
      var i = pt(t);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (yu(t)) {
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
      return t === we.SPACEBAR ? cn.SPACEBAR_KEY : t === we.ENTER ? cn.ENTER_KEY : t === we.DELETE ? cn.DELETE_KEY : t === we.BACKSPACE ? cn.BACKSPACE_KEY : cn.UNSPECIFIED;
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
var Ta = (
  /** @class */
  function(n) {
    ct(e, n);
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
      return new Sa(i);
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
var ln;
(function(n) {
  n.PRIMARY = "primary", n.TRAILING = "trailing", n.NONE = "none";
})(ln || (ln = {}));
var Le = {
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
}, _t = {
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
qt.add(Le.ARROW_LEFT_KEY);
qt.add(Le.ARROW_RIGHT_KEY);
qt.add(Le.ARROW_DOWN_KEY);
qt.add(Le.ARROW_UP_KEY);
qt.add(Le.END_KEY);
qt.add(Le.HOME_KEY);
qt.add(Le.IE_ARROW_LEFT_KEY);
qt.add(Le.IE_ARROW_RIGHT_KEY);
qt.add(Le.IE_ARROW_DOWN_KEY);
qt.add(Le.IE_ARROW_UP_KEY);
var hn = /* @__PURE__ */ new Set();
hn.add(Le.ARROW_UP_KEY);
hn.add(Le.ARROW_DOWN_KEY);
hn.add(Le.HOME_KEY);
hn.add(Le.END_KEY);
hn.add(Le.IE_ARROW_UP_KEY);
hn.add(Le.IE_ARROW_DOWN_KEY);
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
var hs = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Fn;
(function(n) {
  n[n.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", n[n.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Fn || (Fn = {}));
var Er = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Le;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _t;
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
            return hs;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return hs;
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
      return this.adapter.hasClass(_t.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(_t.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(_t.EDITING);
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
      this.adapter.addClass(_t.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this, r = this.adapter.eventTargetHasClass(t.target, _t.CHIP_EXIT), l = t.propertyName === "width", a = t.propertyName === "opacity";
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
        var o = this.adapter.getAttribute(Le.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(o);
      }
      if (a) {
        var u = this.adapter.eventTargetHasClass(t.target, _t.LEADING_ICON) && this.adapter.hasClass(_t.SELECTED), c = this.adapter.eventTargetHasClass(t.target, _t.CHECKMARK) && !this.adapter.hasClass(_t.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(_t.HIDDEN_LEADING_ICON);
          return;
        }
        if (c) {
          this.adapter.removeClassFromLeadingIcon(_t.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(t) {
      this.eventFromPrimaryAction(t) && this.adapter.addClass(_t.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(t) {
      this.eventFromPrimaryAction(t) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(_t.PRIMARY_ACTION_FOCUSED));
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
      qt.has(t.key) && (t.preventDefault(), this.focusNextAction(t.key, ln.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(t) {
      this.focusNextAction(t.detail.key, ln.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Le.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Fn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var t = this.adapter.isTrailingActionNavigable();
      if (t) {
        this.adapter.setPrimaryActionAttr(Le.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(t) {
      this.adapter.setPrimaryActionAttr(Le.TAB_INDEX, "0"), t === Fn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Fn.SHOULD_FOCUS : Fn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(t, i) {
      var r = this.adapter.isTrailingActionNavigable(), l = this.getDirection(t);
      if (hn.has(t) || !r) {
        this.adapter.notifyNavigation(t, i);
        return;
      }
      if (i === ln.PRIMARY && l === Yt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === ln.TRAILING && l === Yt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(t, ln.NONE);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Le.ARROW_LEFT_KEY || t === Le.IE_ARROW_LEFT_KEY, l = t === Le.ARROW_RIGHT_KEY || t === Le.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Yt.LEFT : Yt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(t) {
      return this.eventFromPrimaryAction(t) && t.key === Le.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(t) {
      return t.key === Le.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(t) {
      return t.key === Le.ENTER_KEY || t.key === Le.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(t) {
      var i = this.adapter.hasClass(_t.DELETABLE);
      return i && (t.key === Le.BACKSPACE_KEY || t.key === Le.DELETE_KEY || t.key === Le.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(t) {
      t ? (this.adapter.addClass(_t.SELECTED), this.adapter.setPrimaryActionAttr(Le.ARIA_CHECKED, "true")) : (this.adapter.removeClass(_t.SELECTED), this.adapter.setPrimaryActionAttr(Le.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(t) {
      this.adapter.notifySelection(t, !1);
    }, e.prototype.notifyIgnoredSelection = function(t) {
      this.adapter.notifySelection(t, !0);
    }, e.prototype.eventFromPrimaryAction = function(t) {
      return this.adapter.eventTargetHasClass(t.target, _t.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(_t.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(_t.EDITING), this.adapter.notifyEditFinish();
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
var La = (
  /** @class */
  function(n) {
    ct(e, n);
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
        return new Ta(s);
      }), this.leadingIcon = this.root.querySelector(Le.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Le.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Le.PRIMARY_ACTION_SELECTOR);
      var l = this.root.querySelector(Le.TRAILING_ACTION_SELECTOR);
      l && (this.trailingAction = i(l));
      var a = Ke(Ke({}, di.createAdapter(this)), { computeBoundingRect: function() {
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
            Le.INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, l) {
          return t.emit(
            Le.NAVIGATION_EVENT,
            { chipId: t.id, key: r, source: l },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          t.emit(
            Le.REMOVAL_EVENT,
            { chipId: t.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, l) {
          return t.emit(
            Le.SELECTION_EVENT,
            { chipId: t.id, selected: r, shouldIgnore: l },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return t.emit(
            Le.TRAILING_ICON_INTERACTION_EVENT,
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
      return new Er(i);
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
var Oa = {
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
var Sr = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, Ke(Ke({}, e.defaultAdapter), t)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Oa;
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
        var o = this.adapter.isRTL(), u = r === Le.ARROW_LEFT_KEY || r === Le.IE_ARROW_LEFT_KEY, c = r === Le.ARROW_RIGHT_KEY || r === Le.IE_ARROW_RIGHT_KEY, d = r === Le.ARROW_DOWN_KEY || r === Le.IE_ARROW_DOWN_KEY, f = !o && c || o && u || d, h = r === Le.HOME_KEY, m = r === Le.END_KEY;
        f ? s++ : h ? s = 0 : m ? s = a : s--, !(s < 0 || s > a) && (this.removeFocusFromChipsExcept(s), this.focusChipAction(s, r, l));
      }
    }, e.prototype.focusChipAction = function(t, i, r) {
      var l = hn.has(i);
      if (l && r === ln.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
      if (l && r === ln.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      var a = this.getDirection(i);
      if (a === Yt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      if (a === Yt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Le.ARROW_LEFT_KEY || t === Le.IE_ARROW_LEFT_KEY, l = t === Le.ARROW_RIGHT_KEY || t === Le.IE_ARROW_RIGHT_KEY;
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
var gi = Er.strings, ms = gi.INTERACTION_EVENT, ps = gi.SELECTION_EVENT, gs = gi.REMOVAL_EVENT, _s = gi.NAVIGATION_EVENT, Um = Sr.strings.CHIP_SELECTOR, bs = 0, wm = (
  /** @class */
  function(n) {
    ct(e, n);
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
        return new La(i);
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
      }, this.listen(ms, this.handleChipInteraction), this.listen(ps, this.handleChipSelection), this.listen(gs, this.handleChipRemoval), this.listen(_s, this.handleChipNavigation);
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
      this.unlisten(ms, this.handleChipInteraction), this.unlisten(ps, this.handleChipSelection), this.unlisten(gs, this.handleChipRemoval), this.unlisten(_s, this.handleChipNavigation), n.prototype.destroy.call(this);
    }, e.prototype.addChip = function(t) {
      t.id = t.id || "mdc-chip-" + ++bs, this.chipsList.push(this.chipFactory(t));
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        announceMessage: function(r) {
          Fm(r);
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
      return new Sr(i);
    }, e.prototype.instantiateChips = function(t) {
      var i = [].slice.call(this.root.querySelectorAll(Um));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++bs, t(r);
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
const Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: La,
  MDCChipFoundation: Er,
  MDCChipSet: wm,
  MDCChipSetFoundation: Sr,
  MDCChipTrailingAction: Ta,
  MDCChipTrailingActionFoundation: Sa,
  chipCssClasses: _t,
  chipSetCssClasses: Yn,
  chipSetStrings: Oa,
  chipStrings: Le,
  trailingActionStrings: Wt
}, Symbol.toStringTag, { value: "Module" }));
function Is(n) {
  let e;
  return {
    c() {
      e = ie("div"), H(e, "class", "mdc-chip__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function vs(n) {
  let e;
  return {
    c() {
      e = ie("div"), H(e, "class", "mdc-chip__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Pm(n) {
  let e, t, i, r, l = (
    /*ripple*/
    n[3] && !/*$nonInteractive*/
    n[14] && Is()
  );
  const a = (
    /*#slots*/
    n[34].default
  ), s = ye(
    a,
    n,
    /*$$scope*/
    n[38],
    null
  );
  let o = (
    /*touch*/
    n[4] && vs()
  );
  return {
    c() {
      l && l.c(), e = ue(), s && s.c(), t = ue(), o && o.c(), i = Xe();
    },
    m(u, c) {
      l && l.m(u, c), j(u, e, c), s && s.m(u, c), j(u, t, c), o && o.m(u, c), j(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? l || (l = Is(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), s && s.p && (!r || c[1] & /*$$scope*/
      128) && Se(
        s,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? Ee(
          a,
          /*$$scope*/
          u[38],
          c,
          null
        ) : Te(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = vs(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (C(s, u), r = !0);
    },
    o(u) {
      S(s, u), r = !1;
    },
    d(u) {
      u && (V(e), V(t), V(i)), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function Hm(n) {
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
      ).map($i).concat([
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
      $$slots: { default: [Pm] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = z(u, de(r, [
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
        ).map($i).concat([
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (n = s, o[0] & /*component*/
      32 && l !== (l = /*component*/
      n[5])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), He();
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
        ), te(e.$$.fragment), C(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
        503369055 ? de(r, [
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
            ).map($i).concat([
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
      s && V(t), n[35](null), e && ee(e, s);
    }
  };
}
const $i = ([n, e]) => `${n}: ${e};`;
function Bm(n, e, t) {
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
  let r = fe(e, i), l, a, s, o, u, c, d, { $$slots: f = {}, $$scope: h } = e;
  const { MDCChipFoundation: m } = Tr, _ = tt(xe());
  let { use: p = [] } = e, { class: I = "" } = e, { style: b = "" } = e, { chip: R } = e, { ripple: E = !0 } = e, { touch: L = !1 } = e, { shouldRemoveOnTrailingIconClick: k = !0 } = e, { shouldFocusPrimaryActionOnClick: g = !0 } = e, y, D, A = {}, v = {}, F = {};
  const O = Ge("SMUI:chips:chip:initialSelected");
  rt(n, O, (J) => t(44, c = J));
  let U = c, W, N;
  const B = Ge("SMUI:chips:nonInteractive");
  rt(n, B, (J) => t(14, d = J));
  const M = Ge("SMUI:chips:choice");
  rt(n, M, (J) => t(40, a = J));
  const T = Ge("SMUI:chips:chip:index");
  rt(n, T, (J) => t(39, l = J));
  let { component: Z = Ft } = e, { tag: Fe = Z === Ft ? "div" : void 0 } = e;
  const Me = Lt(k);
  rt(n, Me, (J) => t(43, u = J)), qe("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Me);
  const _e = Lt(U);
  rt(n, _e, (J) => t(42, o = J)), qe("SMUI:chips:chip:isSelected", _e);
  const ze = Lt(v);
  if (rt(n, ze, (J) => t(41, s = J)), qe("SMUI:chips:chip:leadingIconClasses", ze), qe("SMUI:chips:chip:focusable", a && U || l === 0), !R)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  at(() => {
    t(7, D = new m({
      addClass: De,
      addClassToLeadingIcon: ne,
      eventTargetHasClass: (We, ot) => We && "classList" in We ? We.classList.contains(ot) : !1,
      focusPrimaryAction: () => {
        W && W.focus();
      },
      focusTrailingAction: () => {
        N && N.focus();
      },
      getAttribute: (We) => Ue().getAttribute(We),
      getCheckmarkBoundingClientRect: () => {
        const We = Ue().querySelector(".mdc-chip__checkmark");
        return We ? We.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Be,
      getRootBoundingClientRect: () => Ue().getBoundingClientRect(),
      hasClass: ke,
      hasLeadingIcon: () => !!Ue().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Ue()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => N ? N.isNavigable() : !1,
      notifyInteraction: () => ge(Ue(), "SMUIChip:interaction", { chipId: R }, void 0, !0),
      notifyNavigation: (We, ot) => ge(Ue(), "SMUIChip:navigation", { chipId: R, key: We, source: ot }, void 0, !0),
      notifyRemoval: (We) => {
        ge(Ue(), "SMUIChip:removal", { chipId: R, removedAnnouncement: We }, void 0, !0);
      },
      notifySelection: (We, ot) => ge(Ue(), "SMUIChip:selection", { chipId: R, selected: We, shouldIgnore: ot }, void 0, !0),
      notifyTrailingIconInteraction: () => ge(Ue(), "SMUIChip:trailingIconInteraction", { chipId: R }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: Ne,
      removeClassFromLeadingIcon: K,
      removeTrailingActionFocus: () => {
        N && N.removeFocus();
      },
      setPrimaryActionAttr: (We, ot) => {
        W && W.addAttr(We, ot);
      },
      setStyleProperty: Ye
    }));
    const J = {
      chipId: R,
      get selected() {
        return U;
      },
      focusPrimaryAction: X,
      focusTrailingAction: ve,
      removeFocus: je,
      setSelectedFromChipSet: At
    };
    return ge(Ue(), "SMUIChipsChip:mount", J), D.init(), () => {
      ge(Ue(), "SMUIChipsChip:unmount", J), D.destroy();
    };
  });
  function G(J) {
    t(12, W = J.detail);
  }
  function Q(J) {
    t(13, N = J.detail);
  }
  function ke(J) {
    return J in A ? A[J] : Ue().classList.contains(J);
  }
  function De(J) {
    A[J] || t(10, A[J] = !0, A);
  }
  function Ne(J) {
    (!(J in A) || A[J]) && t(10, A[J] = !1, A);
  }
  function ne(J) {
    v[J] || t(33, v[J] = !0, v);
  }
  function K(J) {
    (!(J in v) || v[J]) && t(33, v[J] = !1, v);
  }
  function Ye(J, We) {
    F[J] != We && (We === "" || We == null ? (delete F[J], t(11, F)) : t(11, F[J] = We, F));
  }
  function Be(J) {
    return J in F ? F[J] : getComputedStyle(Ue()).getPropertyValue(J);
  }
  function At(J, We) {
    t(8, U = J), D.setSelectedFromChipSet(U, We);
  }
  function X() {
    D.focusPrimaryAction();
  }
  function ve() {
    D.focusTrailingAction();
  }
  function je() {
    D.removeFocus();
  }
  function Ue() {
    return y.getElement();
  }
  function St(J) {
    se[J ? "unshift" : "push"](() => {
      y = J, t(9, y);
    });
  }
  const q = () => t(12, W = void 0), le = () => t(13, N = void 0);
  return n.$$set = (J) => {
    e = z(z({}, e), et(J)), t(28, r = fe(e, i)), "use" in J && t(0, p = J.use), "class" in J && t(1, I = J.class), "style" in J && t(2, b = J.style), "chip" in J && t(29, R = J.chip), "ripple" in J && t(3, E = J.ripple), "touch" in J && t(4, L = J.touch), "shouldRemoveOnTrailingIconClick" in J && t(30, k = J.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in J && t(31, g = J.shouldFocusPrimaryActionOnClick), "component" in J && t(5, Z = J.component), "tag" in J && t(6, Fe = J.tag), "$$scope" in J && t(38, h = J.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && Ht(Me, u = k, u), n.$$.dirty[0] & /*selected*/
    256 && Ht(_e, o = U, o), n.$$.dirty[1] & /*leadingIconClasses*/
    4 && Ht(ze, s = v, s), n.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && D && D.getShouldRemoveOnTrailingIconClick() !== k && D.setShouldRemoveOnTrailingIconClick(k), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && D && D.setShouldFocusPrimaryActionOnClick(g);
  }, [
    p,
    I,
    b,
    E,
    L,
    Z,
    Fe,
    D,
    U,
    y,
    A,
    F,
    W,
    N,
    d,
    _,
    O,
    B,
    M,
    T,
    Me,
    _e,
    ze,
    G,
    Q,
    De,
    Ne,
    Ye,
    r,
    R,
    k,
    g,
    Ue,
    v,
    f,
    St,
    q,
    le,
    h
  ];
}
class Vm extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Bm,
      Hm,
      Ie,
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
function As(n, e, t) {
  const i = n.slice();
  return i[37] = e[t], i[39] = t, i;
}
const jm = (n) => ({ chip: n[0] & /*chips*/
1 }), Cs = (n) => ({ chip: (
  /*chip*/
  n[37]
) });
function qm(n) {
  let e;
  const t = (
    /*#slots*/
    n[25].default
  ), i = ye(
    t,
    n,
    /*$$scope*/
    n[27],
    Cs
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
      134217729) && Se(
        i,
        t,
        r,
        /*$$scope*/
        r[27],
        e ? Ee(
          t,
          /*$$scope*/
          r[27],
          l,
          jm
        ) : Te(
          /*$$scope*/
          r[27]
        ),
        Cs
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
function Gm(n) {
  let e, t, i;
  return e = new Vn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        n[10][
          /*i*/
          n[39]
        ]
      ),
      $$slots: { default: [qm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = ue();
    },
    m(r, l) {
      $(e, r, l), j(r, t, l), i = !0;
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
      r && V(t), ee(e, r);
    }
  };
}
function ys(n, e) {
  let t, i, r;
  return i = new Vn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [Gm] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      j(l, t, a), $(i, l, a), r = !0;
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
      l && V(t), ee(i, l);
    }
  };
}
function Km(n) {
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
    let m = As(n, u, h), _ = c(m);
    i.set(_, t[h] = ys(_, m));
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
    f = z(f, d[h]);
  return {
    c() {
      e = ie("div");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      oe(e, f);
    },
    m(h, m) {
      j(h, e, m);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      n[26](e), a = !0, s || (o = [
        ce(l = Je.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ce(
          /*forwardEvents*/
          n[9].call(null, e)
        ),
        he(
          e,
          "SMUIChipsChip:mount",
          /*handleChipMount*/
          n[14]
        ),
        he(
          e,
          "SMUIChipsChip:unmount",
          /*handleChipUnmount*/
          n[15]
        ),
        he(
          e,
          "SMUIChip:interaction",
          /*handleChipInteraction*/
          n[16]
        ),
        he(
          e,
          "SMUIChip:selection",
          /*handleChipSelection*/
          n[17]
        ),
        he(
          e,
          "SMUIChip:removal",
          /*handleChipRemoval*/
          n[18]
        ),
        he(
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
      ), Pe(), t = fr(t, m, c, 1, h, u, i, e, dr, ys, null, As), He()), oe(e, f = de(d, [
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
      h && V(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      n[26](null), s = !1, Ze(o);
    }
  };
}
function Es(n, e) {
  let t = new Set(n);
  for (let i of e)
    t.delete(i);
  return t;
}
function Wm(n, e, t) {
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
  let r = fe(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = Tr, d = tt(xe());
  let { use: f = [] } = e, { class: h = "" } = e, { chips: m = [] } = e, { key: _ = (G) => G } = e, { selected: p = void 0 } = e, { nonInteractive: I = !1 } = e, { choice: b = !1 } = e, { filter: R = !1 } = e, { input: E = !1 } = e, L, k, g = {}, y = /* @__PURE__ */ new WeakMap(), D = m.map((G) => b && p === G || R && p.indexOf(G) !== -1);
  const A = Lt(I);
  rt(n, A, (G) => t(31, s = G)), qe("SMUI:chips:nonInteractive", A);
  const v = Lt(b);
  rt(n, v, (G) => t(30, a = G)), qe("SMUI:chips:choice", v);
  const F = Lt(R);
  rt(n, F, (G) => t(29, l = G)), qe("SMUI:chips:filter", F);
  let O = R ? new Set(p) : p;
  at(() => {
    if (t(23, k = new c({
      announceMessage: cu,
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
      hasClass: (G) => _e().classList.contains(G),
      isRTL: () => getComputedStyle(_e()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (G) => {
        G >= 0 && G < m.length && (b && p === m[G] ? t(21, p = null) : R && p.indexOf(m[G]) !== -1 && (p.splice(p.indexOf(m[G]), 1), t(21, p)), m.splice(G, 1), t(0, m));
      },
      removeFocusFromChipAtIndex: (G) => {
        var Q;
        (Q = Z(m[G])) === null || Q === void 0 || Q.removeFocus();
      },
      selectChipAtIndex: (G, Q, ke) => {
        var De;
        if (G >= 0 && G < m.length) {
          if (R) {
            const Ne = p.indexOf(m[G]);
            Q && Ne === -1 ? (p.push(m[G]), t(21, p)) : !Q && Ne !== -1 && (p.splice(Ne, 1), t(21, p));
          } else
            b && (Q || p === m[G]) && t(21, p = Q ? m[G] : null);
          (De = Z(m[G])) === null || De === void 0 || De.setSelectedFromChipSet(Q, ke);
        }
      }
    })), k.init(), b && p != null)
      k.select(p);
    else if (R && p.length)
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
  function B(G) {
    k && k.handleChipSelection(G.detail);
  }
  function M(G) {
    k && k.handleChipRemoval(G.detail);
  }
  function T(G) {
    k && k.handleChipNavigation(G.detail);
  }
  function Z(G) {
    return G instanceof Object ? y.get(G) : g[G];
  }
  function Fe(G, Q) {
    G instanceof Object ? y.set(G, Q) : g[G] = Q;
  }
  function Me(G) {
    G instanceof Object ? y.delete(G) : delete g[G];
  }
  function _e() {
    return L;
  }
  function ze(G) {
    se[G ? "unshift" : "push"](() => {
      L = G, t(8, L);
    });
  }
  return n.$$set = (G) => {
    e = z(z({}, e), et(G)), t(20, r = fe(e, i)), "use" in G && t(1, f = G.use), "class" in G && t(2, h = G.class), "chips" in G && t(0, m = G.chips), "key" in G && t(3, _ = G.key), "selected" in G && t(21, p = G.selected), "nonInteractive" in G && t(4, I = G.nonInteractive), "choice" in G && t(5, b = G.choice), "filter" in G && t(6, R = G.filter), "input" in G && t(7, E = G.input), "$$scope" in G && t(27, u = G.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*nonInteractive*/
    16 && Ht(A, s = I, s), n.$$.dirty[0] & /*choice*/
    32 && Ht(v, a = b, a), n.$$.dirty[0] & /*filter*/
    64 && Ht(F, l = R, l), n.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && k && b && O !== p && (t(24, O = p), k.select(p)), n.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && k && R) {
      const G = new Set(p), Q = Es(O, G), ke = Es(G, O);
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
    f,
    h,
    _,
    I,
    b,
    R,
    E,
    L,
    d,
    D,
    A,
    v,
    F,
    U,
    W,
    N,
    B,
    M,
    T,
    r,
    p,
    _e,
    k,
    O,
    o,
    ze,
    u
  ];
}
class zm extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Wm,
      Km,
      Ie,
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
function Ym(n) {
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
      e = ie("span"), t = lt("svg"), i = lt("path"), H(i, "class", "mdc-chip__checkmark-path"), H(i, "fill", "none"), H(i, "stroke", "black"), H(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), H(t, "class", "mdc-chip__checkmark-svg"), H(t, "viewBox", "-2 -3 30 30"), oe(e, u);
    },
    m(c, d) {
      j(c, e, d), x(e, t), x(t, i), n[5](e), a || (s = ce(l = Je.call(
        null,
        e,
        /*use*/
        n[0]
      )), a = !0);
    },
    p(c, [d]) {
      oe(e, u = de(o, [
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
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: nt,
    o: nt,
    d(c) {
      c && V(e), n[5](null), a = !1, s();
    }
  };
}
function Xm(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = fe(e, i), { use: l = [] } = e, { class: a = "" } = e, s;
  function o() {
    return s;
  }
  function u(c) {
    se[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return n.$$set = (c) => {
    e = z(z({}, e), et(c)), t(3, r = fe(e, i)), "use" in c && t(0, l = c.use), "class" in c && t(1, a = c.class);
  }, [l, a, s, r, o, u];
}
class Zm extends Re {
  constructor(e) {
    super(), Oe(this, e, Xm, Ym, Ie, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Ss(n) {
  let e, t, i = {};
  return e = new Zm({ props: i }), n[23](e), {
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
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[23](null), ee(e, r);
    }
  };
}
function Qm(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[22].default
  ), a = ye(
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
      e = ie("span"), t = ie("span"), a && a.c(), H(t, "class", "mdc-chip__text"), oe(e, o);
    },
    m(u, c) {
      j(u, e, c), x(e, t), a && a.m(t, null), n[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && Se(
        a,
        l,
        u,
        /*$$scope*/
        u[21],
        r ? Ee(
          l,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Te(
          /*$$scope*/
          u[21]
        ),
        null
      ), oe(e, o = de(s, [
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
      u && V(e), a && a.d(u), n[24](null);
    }
  };
}
function Jm(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[22].default
  ), r = ye(
    i,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ie("span"), r && r.c(), H(e, "class", "mdc-chip__text");
    },
    m(l, a) {
      j(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, a) {
      r && r.p && (!t || a & /*$$scope*/
      2097152) && Se(
        r,
        i,
        l,
        /*$$scope*/
        l[21],
        t ? Ee(
          i,
          /*$$scope*/
          l[21],
          a,
          null
        ) : Te(
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
      l && V(e), r && r.d(l);
    }
  };
}
function xm(n) {
  let e, t, i, r, l, a, s, o, u = (
    /*$filter*/
    n[3] && Ss(n)
  );
  const c = [Jm, Qm], d = [];
  function f(h, m) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = f(n), r = d[i] = c[i](n), {
    c() {
      u && u.c(), e = ue(), t = ie("span"), r.c(), H(t, "role", "gridcell");
    },
    m(h, m) {
      u && u.m(h, m), j(h, e, m), j(h, t, m), d[i].m(t, null), n[25](t), a = !0, s || (o = [
        ce(l = Je.call(
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
      8 && C(u, 1)) : (u = Ss(h), u.c(), C(u, 1), u.m(e.parentNode, e)) : u && (Pe(), S(u, 1, 1, () => {
        u = null;
      }), He());
      let _ = i;
      i = f(h), i === _ ? d[i].p(h, m) : (Pe(), S(d[_], 1, 1, () => {
        d[_] = null;
      }), He(), r = d[i], r ? r.p(h, m) : (r = d[i] = c[i](h), r.c()), C(r, 1), r.m(t, null)), l && me(l.update) && m & /*use*/
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
      h && (V(e), V(t)), u && u.d(h), d[i].d(), n[25](null), s = !1, Ze(o);
    }
  };
}
function $m(n, e, t) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let l = fe(e, r), a, s, o, u, { $$slots: c = {}, $$scope: d } = e;
  const f = tt(xe());
  let { use: h = [] } = e, { class: m = "" } = e, { tabindex: _ = Ge("SMUI:chips:chip:focusable") ? 0 : -1 } = e, p, I, b, R = {};
  const E = Ge("SMUI:chips:nonInteractive");
  rt(n, E, (N) => t(9, o = N));
  const L = Ge("SMUI:chips:choice");
  rt(n, L, (N) => t(2, a = N));
  const k = Ge("SMUI:chips:filter");
  rt(n, k, (N) => t(3, s = N));
  const g = Ge("SMUI:chips:chip:isSelected");
  rt(n, g, (N) => t(10, u = N)), at(() => {
    let N = { focus: A, addAttr: y };
    return ge(F(), "SMUIChipsChipPrimaryAction:mount", N), () => {
      ge(F(), "SMUIChipsChipPrimaryAction:unmount", N);
    };
  });
  function y(N, B) {
    R[N] !== B && t(7, R[N] = B, R);
  }
  function D(N) {
    R.tabindex !== p.getAttribute("tabindex") ? cr().then(N) : N();
  }
  function A() {
    D(() => {
      b && b.focus();
    });
  }
  function v() {
    return I && I.getElement();
  }
  function F() {
    return p;
  }
  function O(N) {
    se[N ? "unshift" : "push"](() => {
      I = N, t(5, I);
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
    e = z(z({}, e), et(N)), t(16, l = fe(e, r)), "use" in N && t(0, h = N.use), "class" in N && t(1, m = N.class), "tabindex" in N && t(17, _ = N.tabindex), "$$scope" in N && t(21, d = N.$$scope);
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
    I,
    b,
    R,
    i,
    o,
    u,
    f,
    E,
    L,
    k,
    g,
    l,
    _,
    A,
    v,
    F,
    d,
    c,
    O,
    U,
    W
  ];
}
class ep extends Re {
  constructor(e) {
    super(), Oe(this, e, $m, xm, Ie, {
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
function Ts(n) {
  let e;
  return {
    c() {
      e = ie("span"), H(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function tp(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, _, p = (
    /*touch*/
    n[4] && Ts()
  );
  const I = (
    /*#slots*/
    n[23].default
  ), b = ye(
    I,
    n,
    /*$$scope*/
    n[22],
    null
  );
  let R = [
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
  ], E = {};
  for (let g = 0; g < R.length; g += 1)
    E = z(E, R[g]);
  let L = [
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
      ).map(Ls).concat([
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
    Xt(
      /*$$restProps*/
      n[17],
      ["icon$"]
    )
  ], k = {};
  for (let g = 0; g < L.length; g += 1)
    k = z(k, L[g]);
  return {
    c() {
      e = ie("button"), t = ie("span"), i = ue(), p && p.c(), r = ue(), l = ie("span"), b && b.c(), H(t, "class", "mdc-deprecated-chip-trailing-action__ripple"), oe(l, E), oe(e, k);
    },
    m(g, y) {
      j(g, e, y), x(e, t), x(e, i), p && p.m(e, null), x(e, r), x(e, l), b && b.m(l, null), e.autofocus && e.focus(), n[24](e), h = !0, m || (_ = [
        ce(s = Je.call(
          null,
          l,
          /*icon$use*/
          n[6]
        )),
        ce(d = Ot.call(null, e, {
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
        ce(f = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        he(e, "click", function() {
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
        he(e, "keydown", function() {
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
    p(g, [y]) {
      n = g, /*touch*/
      n[4] ? p || (p = Ts(), p.c(), p.m(e, r)) : p && (p.d(1), p = null), b && b.p && (!h || y & /*$$scope*/
      4194304) && Se(
        b,
        I,
        n,
        /*$$scope*/
        n[22],
        h ? Ee(
          I,
          /*$$scope*/
          n[22],
          y,
          null
        ) : Te(
          /*$$scope*/
          n[22]
        ),
        null
      ), oe(l, E = de(R, [
        (!h || y & /*icon$class*/
        128 && a !== (a = re({
          [
            /*icon$class*/
            n[7]
          ]: !0,
          "mdc-deprecated-chip-trailing-action__icon": !0
        }))) && { class: a },
        y & /*$$restProps*/
        131072 && Ve(
          /*$$restProps*/
          n[17],
          "icon$"
        )
      ])), s && me(s.update) && y & /*icon$use*/
      64 && s.update.call(
        null,
        /*icon$use*/
        n[6]
      ), oe(e, k = de(L, [
        { type: "button" },
        (!h || y & /*className, internalClasses*/
        1026 && o !== (o = re({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-deprecated-chip-trailing-action": !0,
          .../*internalClasses*/
          n[10]
        }))) && { class: o },
        (!h || y & /*internalStyles, style*/
        2052 && u !== (u = Object.entries(
          /*internalStyles*/
          n[11]
        ).map(Ls).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: u },
        (!h || y & /*nonNavigable*/
        32 && c !== (c = /*nonNavigable*/
        n[5] ? "true" : void 0)) && { "aria-hidden": c },
        { tabindex: "-1" },
        y & /*internalAttrs*/
        4096 && /*internalAttrs*/
        n[12],
        y & /*$$restProps*/
        131072 && Xt(
          /*$$restProps*/
          n[17],
          ["icon$"]
        )
      ])), d && me(d.update) && y & /*ripple*/
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
      }), f && me(f.update) && y & /*use*/
      1 && f.update.call(
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
      g && V(e), p && p.d(), b && b.d(g), n[24](null), m = !1, Ze(_);
    }
  };
}
const Ls = ([n, e]) => `${n}: ${e};`;
function np(n, e, t) {
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
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: s } = Tr, o = tt(xe());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { ripple: f = !0 } = e, { touch: h = !1 } = e, { nonNavigable: m = !1 } = e, { icon$use: _ = [] } = e, { icon$class: p = "" } = e, I, b, R = {}, E = {}, L = {};
  at(() => {
    t(9, b = new s({
      focus: () => {
        const M = W();
        v(() => {
          M.focus();
        });
      },
      getAttribute: D,
      notifyInteraction: (M) => ge(W(), "SMUIChipTrailingAction:interaction", { trigger: M }, void 0, !0),
      notifyNavigation: (M) => {
        ge(W(), "SMUIChipTrailingAction:navigation", { key: M }, void 0, !0);
      },
      setAttribute: A
    }));
    const B = { isNavigable: F, focus: O, removeFocus: U };
    return ge(W(), "SMUIChipsChipTrailingAction:mount", B), b.init(), () => {
      ge(W(), "SMUIChipsChipTrailingAction:unmount", B), b.destroy();
    };
  });
  function k(B) {
    R[B] || t(10, R[B] = !0, R);
  }
  function g(B) {
    (!(B in R) || R[B]) && t(10, R[B] = !1, R);
  }
  function y(B, M) {
    E[B] != M && (M === "" || M == null ? (delete E[B], t(11, E)) : t(11, E[B] = M, E));
  }
  function D(B) {
    var M;
    return B in L ? (M = L[B]) !== null && M !== void 0 ? M : null : W().getAttribute(B);
  }
  function A(B, M) {
    L[B] !== M && t(12, L[B] = M, L);
  }
  function v(B) {
    L.tabindex !== I.getAttribute("tabindex") ? cr().then(B) : B();
  }
  function F() {
    return b.isNavigable();
  }
  function O() {
    b.focus();
  }
  function U() {
    b.removeFocus();
  }
  function W() {
    return I;
  }
  function N(B) {
    se[B ? "unshift" : "push"](() => {
      I = B, t(8, I);
    });
  }
  return n.$$set = (B) => {
    e = z(z({}, e), et(B)), t(17, r = fe(e, i)), "use" in B && t(0, u = B.use), "class" in B && t(1, c = B.class), "style" in B && t(2, d = B.style), "ripple" in B && t(3, f = B.ripple), "touch" in B && t(4, h = B.touch), "nonNavigable" in B && t(5, m = B.nonNavigable), "icon$use" in B && t(6, _ = B.icon$use), "icon$class" in B && t(7, p = B.icon$class), "$$scope" in B && t(22, a = B.$$scope);
  }, [
    u,
    c,
    d,
    f,
    h,
    m,
    _,
    p,
    I,
    b,
    R,
    E,
    L,
    o,
    k,
    g,
    y,
    r,
    F,
    O,
    U,
    W,
    a,
    l,
    N
  ];
}
class ip extends Re {
  constructor(e) {
    super(), Oe(this, e, np, tp, Ie, {
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
function rp(n) {
  let e;
  return {
    c() {
      e = ut(
        /*title*/
        n[0]
      );
    },
    m(t, i) {
      j(t, e, i);
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
      t && V(e);
    }
  };
}
function Os(n) {
  let e, t;
  return e = new ip({
    props: {
      $$slots: { default: [lp] },
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function lp(n) {
  let e, t;
  return e = new Ca({
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
    p: nt,
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function sp(n) {
  let e, t, i, r;
  e = new ep({
    props: {
      $$slots: { default: [rp] },
      $$scope: { ctx: n }
    }
  });
  let l = (
    /*closeable*/
    n[1] && !/*disabled*/
    n[3] && Os(n)
  );
  return {
    c() {
      te(e.$$.fragment), t = ue(), l && l.c(), i = Xe();
    },
    m(a, s) {
      $(e, a, s), j(a, t, s), l && l.m(a, s), j(a, i, s), r = !0;
    },
    p(a, s) {
      const o = {};
      s & /*$$scope, title*/
      17 && (o.$$scope = { dirty: s, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? l ? (l.p(a, s), s & /*closeable, disabled*/
      10 && C(l, 1)) : (l = Os(a), l.c(), C(l, 1), l.m(i.parentNode, i)) : l && (Pe(), S(l, 1, 1, () => {
        l = null;
      }), He());
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(l), r = !0);
    },
    o(a) {
      S(e.$$.fragment, a), S(l), r = !1;
    },
    d(a) {
      a && (V(t), V(i)), ee(e, a), l && l.d(a);
    }
  };
}
function ap(n) {
  let e, t;
  return e = new Vm({
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
      ee(e, i);
    }
  };
}
function op(n, e, t) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: l } = e, { disabled: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, i = s.title), "closeable" in s && t(1, r = s.closeable), "callback" in s && t(2, l = s.callback), "disabled" in s && t(3, a = s.disabled);
  }, [i, r, l, a];
}
class up extends Re {
  constructor(e) {
    super(), Oe(this, e, op, ap, Ie, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
const cp = (n) => ({}), Rs = (n) => ({});
function ks(n) {
  let e, t, i;
  function r(a) {
    n[14](a);
  }
  let l = { label: "Input" };
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Id({ props: l }), se.push(() => ht(e, "value", r)), {
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
        a[3], ft(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Ds(n) {
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
    n[1]), e = new Cr({ props: s }), se.push(() => ht(e, "value", l)), se.push(() => ht(e, "selectedOptionIndex", a)), {
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
        u[3], ft(() => t = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, d.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], ft(() => i = !1)), e.$set(d);
      },
      i(u) {
        r || (C(e.$$.fragment, u), r = !0);
      },
      o(u) {
        S(e.$$.fragment, u), r = !1;
      },
      d(u) {
        ee(e, u);
      }
    }
  );
}
function Ms(n) {
  let e, t, i;
  function r(a) {
    n[17](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Pf({ props: l }), se.push(() => ht(e, "value", r)), {
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
        a[3], ft(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (C(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function dp(n) {
  let e;
  return {
    c() {
      e = ut("Add Filter");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function fp(n) {
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
  return e = new up({
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
      $(e, r, l), t = !0;
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
      ee(e, r);
    }
  };
}
function hp(n) {
  var A, v, F, O, U, W;
  let e, t, i, r, l, a, s, o, u, c, d, f, h, m, _, p, I, b;
  function R(N) {
    n[13](N);
  }
  let E = {
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
  n[4] !== void 0 && (E.value = /*selectedFilterType*/
  n[4]), r = new Cr({ props: E }), se.push(() => ht(r, "value", R));
  let L = (
    /*getSelectedFilterType*/
    ((v = (A = n[5]) == null ? void 0 : A.inputType) == null ? void 0 : v.type) === "string" && ks(n)
  ), k = (
    /*getSelectedFilterType*/
    ((O = (F = n[5]) == null ? void 0 : F.inputType) == null ? void 0 : O.type) === "select" && Ds(n)
  ), g = (
    /*getSelectedFilterType*/
    ((W = (U = n[5]) == null ? void 0 : U.inputType) == null ? void 0 : W.type) === "timepicker" && Ms(n)
  );
  d = new Ar({
    props: {
      callback: (
        /*addFilter*/
        n[8]
      ),
      disabled: (
        /*addFilterDisabled*/
        n[6]
      ),
      $$slots: { default: [dp] },
      $$scope: { ctx: n }
    }
  });
  const y = (
    /*#slots*/
    n[12]["filter-controls"]
  ), D = ye(
    y,
    n,
    /*$$scope*/
    n[19],
    Rs
  );
  return I = new zm({
    props: {
      chips: (
        /*activeFilters*/
        n[0]
      ),
      $$slots: {
        default: [
          fp,
          ({ chip: N }) => ({ 22: N }),
          ({ chip: N }) => N ? 4194304 : 0
        ]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = ie("div"), t = ie("div"), i = ie("div"), te(r.$$.fragment), a = ue(), L && L.c(), s = ue(), k && k.c(), o = ue(), g && g.c(), u = ue(), c = ie("div"), te(d.$$.fragment), f = ue(), D && D.c(), h = ue(), m = ie("div"), _ = ue(), p = ie("div"), te(I.$$.fragment), H(i, "class", "filter-input-controls svelte-1tmo1p6"), H(c, "class", "filter-button-controls svelte-1tmo1p6"), H(t, "class", "input-section svelte-1tmo1p6"), H(m, "class", "separator svelte-1tmo1p6"), H(p, "class", "chip-section svelte-1tmo1p6"), H(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(N, B) {
      j(N, e, B), x(e, t), x(t, i), $(r, i, null), x(i, a), L && L.m(i, null), x(i, s), k && k.m(i, null), x(i, o), g && g.m(i, null), x(t, u), x(t, c), $(d, c, null), x(c, f), D && D.m(c, null), x(e, h), x(e, m), x(e, _), x(e, p), $(I, p, null), b = !0;
    },
    p(N, B) {
      var Fe, Me, _e, ze, G, Q;
      const M = {};
      B & /*disabled*/
      4 && (M.disabled = /*disabled*/
      N[2]), B & /*convertTypeToSelection*/
      128 && (M.data = /*convertTypeToSelection*/
      N[7]), !l && B & /*selectedFilterType*/
      16 && (l = !0, M.value = /*selectedFilterType*/
      N[4], ft(() => l = !1)), r.$set(M), /*getSelectedFilterType*/
      ((Me = (Fe = N[5]) == null ? void 0 : Fe.inputType) == null ? void 0 : Me.type) === "string" ? L ? (L.p(N, B), B & /*getSelectedFilterType*/
      32 && C(L, 1)) : (L = ks(N), L.c(), C(L, 1), L.m(i, s)) : L && (Pe(), S(L, 1, 1, () => {
        L = null;
      }), He()), /*getSelectedFilterType*/
      ((ze = (_e = N[5]) == null ? void 0 : _e.inputType) == null ? void 0 : ze.type) === "select" ? k ? (k.p(N, B), B & /*getSelectedFilterType*/
      32 && C(k, 1)) : (k = Ds(N), k.c(), C(k, 1), k.m(i, o)) : k && (Pe(), S(k, 1, 1, () => {
        k = null;
      }), He()), /*getSelectedFilterType*/
      ((Q = (G = N[5]) == null ? void 0 : G.inputType) == null ? void 0 : Q.type) === "timepicker" ? g ? (g.p(N, B), B & /*getSelectedFilterType*/
      32 && C(g, 1)) : (g = Ms(N), g.c(), C(g, 1), g.m(i, null)) : g && (Pe(), S(g, 1, 1, () => {
        g = null;
      }), He());
      const T = {};
      B & /*addFilterDisabled*/
      64 && (T.disabled = /*addFilterDisabled*/
      N[6]), B & /*$$scope*/
      524288 && (T.$$scope = { dirty: B, ctx: N }), d.$set(T), D && D.p && (!b || B & /*$$scope*/
      524288) && Se(
        D,
        y,
        N,
        /*$$scope*/
        N[19],
        b ? Ee(
          y,
          /*$$scope*/
          N[19],
          B,
          cp
        ) : Te(
          /*$$scope*/
          N[19]
        ),
        Rs
      );
      const Z = {};
      B & /*activeFilters*/
      1 && (Z.chips = /*activeFilters*/
      N[0]), B & /*$$scope, chip*/
      4718592 && (Z.$$scope = { dirty: B, ctx: N }), I.$set(Z);
    },
    i(N) {
      b || (C(r.$$.fragment, N), C(L), C(k), C(g), C(d.$$.fragment, N), C(D, N), C(I.$$.fragment, N), b = !0);
    },
    o(N) {
      S(r.$$.fragment, N), S(L), S(k), S(g), S(d.$$.fragment, N), S(D, N), S(I.$$.fragment, N), b = !1;
    },
    d(N) {
      N && V(e), ee(r), L && L.d(), k && k.d(), g && g.d(), ee(d), D && D.d(N), ee(I);
    }
  };
}
function mp(n) {
  let e, t;
  return e = new va({
    props: {
      $$slots: { default: [hp] },
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
      524543 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function pp(n, e, t) {
  let i, r, l, { $$slots: a = {}, $$scope: s } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: d = -1 } = e, { disabled: f = !1 } = e, h = "", m = "";
  function _() {
    var D;
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
        id: ya(),
        key: l.label.toLowerCase(),
        value: h,
        operation: "=",
        text: `${m}: ${c && (!((D = l.inputType.options) === null || D === void 0) && D.length) ? l.inputType.options[d].label : h}`,
        disabled: !1
      }
    ];
    t(0, u = A), b(), I();
  }
  function p(D) {
    setTimeout(
      () => {
        t(0, u = u.filter((A) => A.id !== D)), b();
      },
      0
    );
  }
  function I() {
    t(3, h = ""), t(4, m = void 0);
  }
  function b() {
    const D = [...u];
    D.find((A) => A.key === "uuid") ? D.filter((A) => A.key !== "uuid").forEach((A) => {
      A.disabled = !0;
    }) : D.forEach((A) => {
      A.disabled = !1;
    }), t(0, u = D);
  }
  function R(D) {
    m = D, t(4, m);
  }
  function E(D) {
    h = D, t(3, h);
  }
  function L(D) {
    h = D, t(3, h);
  }
  function k(D) {
    d = D, t(1, d);
  }
  function g(D) {
    h = D, t(3, h);
  }
  const y = (D) => p(D.id);
  return n.$$set = (D) => {
    "filterTypes" in D && t(10, o = D.filterTypes), "activeFilters" in D && t(0, u = D.activeFilters), "useOptionLabelInChipText" in D && t(11, c = D.useOptionLabelInChipText), "selectedOptionIndex" in D && t(1, d = D.selectedOptionIndex), "disabled" in D && t(2, f = D.disabled), "$$scope" in D && t(19, s = D.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*filterTypes*/
    1024 && t(7, i = o.map((D) => ({ value: D.label, label: D.label }))), n.$$.dirty & /*selectedFilterType, inputValue*/
    24 && t(6, r = !m || !h), n.$$.dirty & /*filterTypes, selectedFilterType*/
    1040 && t(5, l = o.find((D) => D.label === m));
  }, [
    u,
    d,
    f,
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
    R,
    E,
    L,
    k,
    g,
    y,
    s
  ];
}
class gp extends Re {
  constructor(e) {
    super(), Oe(this, e, pp, mp, Ie, {
      filterTypes: 10,
      activeFilters: 0,
      useOptionLabelInChipText: 11,
      selectedOptionIndex: 1,
      disabled: 2
    });
  }
}
function _p(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = ye(
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
    c = z(c, u[d]);
  return {
    c() {
      e = ie("div"), o && o.c(), oe(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        ce(i = Je.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[5].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      256) && Se(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? Ee(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Te(
          /*$$scope*/
          d[8]
        ),
        null
      ), oe(e, c = de(u, [
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
      ])), i && me(i.update) && f & /*use*/
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
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function bp(n, e, t) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = fe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(xe());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { padded: d = !1 } = e, f;
  function h() {
    return f;
  }
  function m(_) {
    se[_ ? "unshift" : "push"](() => {
      f = _, t(4, f);
    });
  }
  return n.$$set = (_) => {
    e = z(z({}, e), et(_)), t(6, r = fe(e, i)), "use" in _ && t(0, o = _.use), "class" in _ && t(1, u = _.class), "variant" in _ && t(2, c = _.variant), "padded" in _ && t(3, d = _.padded), "$$scope" in _ && t(8, a = _.$$scope);
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
class Ra extends Re {
  constructor(e) {
    super(), Oe(this, e, bp, _p, Ie, {
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
vt({
  class: "smui-card__content",
  tag: "div"
});
vt({
  class: "mdc-card__media-content",
  tag: "div"
});
vt({
  class: "mdc-card__action-buttons",
  tag: "div"
});
vt({
  class: "mdc-card__action-icons",
  tag: "div"
});
function Ip(n) {
  let e;
  return {
    c() {
      e = ut("Search");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function vp(n) {
  let e, t, i, r;
  return e = new jh({}), i = new Uu({
    props: {
      $$slots: { default: [Ip] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = ue(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), j(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      2097152 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (C(e.$$.fragment, l), C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && V(t), ee(e, l), ee(i, l);
    }
  };
}
function Ap(n) {
  let e, t;
  return e = new Ar({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        n[11]
      ),
      $$slots: { default: [vp] },
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
      2097152 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (C(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Cp(n) {
  let e, t, i, r;
  return i = new Ea({
    props: {
      columnDefs: (
        /*columnDefs*/
        n[7]
      ),
      store: (
        /*searchResourceStore*/
        n[1]
      ),
      loadingDone: (
        /*loadingDone*/
        n[4]
      ),
      rowActions: (
        /*searchRowActions*/
        n[10]
      )
    }
  }), {
    c() {
      e = ie("h3"), e.textContent = "Search Result", t = ue(), te(i.$$.fragment), ui(e, "margin-bottom", "1rem");
    },
    m(l, a) {
      j(l, e, a), j(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*searchResourceStore*/
      2 && (s.store = /*searchResourceStore*/
      l[1]), a & /*loadingDone*/
      16 && (s.loadingDone = /*loadingDone*/
      l[4]), i.$set(s);
    },
    i(l) {
      r || (C(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && (V(e), V(t)), ee(i, l);
    }
  };
}
function yp(n) {
  let e, t, i, r, l, a, s, o;
  function u(d) {
    n[15](d);
  }
  let c = {
    filterTypes: (
      /*filterTypes*/
      n[8]
    ),
    $$slots: {
      "filter-controls": [Ap]
    },
    $$scope: { ctx: n }
  };
  return (
    /*filtersToSearch*/
    n[6] !== void 0 && (c.activeFilters = /*filtersToSearch*/
    n[6]), i = new gp({ props: c }), se.push(() => ht(i, "activeFilters", u)), s = new Ra({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [Cp] },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = ie("div"), t = ie("div"), te(i.$$.fragment), l = ue(), a = ie("div"), te(s.$$.fragment), H(t, "class", "search-filter svelte-1n38tik"), H(a, "class", "table-container"), H(e, "slot", "content");
      },
      m(d, f) {
        j(d, e, f), x(e, t), $(i, t, null), x(e, l), x(e, a), $(s, a, null), o = !0;
      },
      p(d, f) {
        const h = {};
        f & /*$$scope*/
        2097152 && (h.$$scope = { dirty: f, ctx: d }), !r && f & /*filtersToSearch*/
        64 && (r = !0, h.activeFilters = /*filtersToSearch*/
        d[6], ft(() => r = !1)), i.$set(h);
        const m = {};
        f & /*$$scope, searchResourceStore, loadingDone*/
        2097170 && (m.$$scope = { dirty: f, ctx: d }), s.$set(m);
      },
      i(d) {
        o || (C(i.$$.fragment, d), C(s.$$.fragment, d), o = !0);
      },
      o(d) {
        S(i.$$.fragment, d), S(s.$$.fragment, d), o = !1;
      },
      d(d) {
        d && V(e), ee(i), ee(s);
      }
    }
  );
}
function Ep(n) {
  var s;
  let e, t = (
    /*selectedLocation*/
    n[3] ? `Location: ${/*locations*/
    (s = n[2].find(
      /*func*/
      n[17]
    )) == null ? void 0 : s.label}` : "Select Location"
  ), i, r, l, a;
  return l = new Ea({
    props: {
      columnDefs: (
        /*columnDefs*/
        n[7]
      ),
      store: (
        /*locationResourceStore*/
        n[0]
      ),
      loadingDone: (
        /*loadingDone*/
        n[4]
      ),
      rowActions: (
        /*locationRowActions*/
        n[9]
      )
    }
  }), {
    c() {
      e = ie("h3"), i = ut(t), r = ue(), te(l.$$.fragment), ui(e, "margin-bottom", "1rem");
    },
    m(o, u) {
      j(o, e, u), x(e, i), j(o, r, u), $(l, o, u), a = !0;
    },
    p(o, u) {
      var d;
      (!a || u & /*selectedLocation, locations*/
      12) && t !== (t = /*selectedLocation*/
      o[3] ? `Location: ${/*locations*/
      (d = o[2].find(
        /*func*/
        o[17]
      )) == null ? void 0 : d.label}` : "Select Location") && Ct(i, t);
      const c = {};
      u & /*locationResourceStore*/
      1 && (c.store = /*locationResourceStore*/
      o[0]), u & /*loadingDone*/
      16 && (c.loadingDone = /*loadingDone*/
      o[4]), l.$set(c);
    },
    i(o) {
      a || (C(l.$$.fragment, o), a = !0);
    },
    o(o) {
      S(l.$$.fragment, o), a = !1;
    },
    d(o) {
      o && (V(e), V(r)), ee(l, o);
    }
  };
}
function Sp(n) {
  let e, t, i, r, l, a, s, o, u, c, d;
  function f(I) {
    n[13](I);
  }
  function h(I) {
    n[14](I);
  }
  let m = { label: "Location" };
  /*locations*/
  n[2] !== void 0 && (m.data = /*locations*/
  n[2]), /*selectedLocation*/
  n[3] !== void 0 && (m.value = /*selectedLocation*/
  n[3]), t = new Cr({ props: m }), se.push(() => ht(t, "data", f)), se.push(() => ht(t, "value", h));
  function _(I) {
    n[16](I);
  }
  let p = {
    title: "Search",
    $$slots: { content: [yp] },
    $$scope: { ctx: n }
  };
  return (
    /*searchOpen*/
    n[5] !== void 0 && (p.open = /*searchOpen*/
    n[5]), a = new Kf({ props: p }), se.push(() => ht(a, "open", _)), a.$on(
      "click",
      /*toggleSearchPanel*/
      n[12]
    ), c = new Ra({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [Ep] },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = ie("div"), te(t.$$.fragment), l = ue(), te(a.$$.fragment), o = ue(), u = ie("div"), te(c.$$.fragment), H(u, "class", "table-container"), H(e, "class", "location-viewer-container");
      },
      m(I, b) {
        j(I, e, b), $(t, e, null), x(e, l), $(a, e, null), x(e, o), x(e, u), $(c, u, null), d = !0;
      },
      p(I, [b]) {
        const R = {};
        !i && b & /*locations*/
        4 && (i = !0, R.data = /*locations*/
        I[2], ft(() => i = !1)), !r && b & /*selectedLocation*/
        8 && (r = !0, R.value = /*selectedLocation*/
        I[3], ft(() => r = !1)), t.$set(R);
        const E = {};
        b & /*$$scope, searchResourceStore, loadingDone, filtersToSearch*/
        2097234 && (E.$$scope = { dirty: b, ctx: I }), !s && b & /*searchOpen*/
        32 && (s = !0, E.open = /*searchOpen*/
        I[5], ft(() => s = !1)), a.$set(E);
        const L = {};
        b & /*$$scope, locationResourceStore, loadingDone, selectedLocation, locations*/
        2097181 && (L.$$scope = { dirty: b, ctx: I }), c.$set(L);
      },
      i(I) {
        d || (C(t.$$.fragment, I), C(a.$$.fragment, I), C(c.$$.fragment, I), d = !0);
      },
      o(I) {
        S(t.$$.fragment, I), S(a.$$.fragment, I), S(c.$$.fragment, I), d = !1;
      },
      d(I) {
        I && V(e), ee(t), ee(a), ee(c);
      }
    }
  );
}
function Tp(n) {
  return new Date(n).toLocaleDateString();
}
function Lp(n) {
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
function Op(n, e, t) {
  const i = Dn.getInstance();
  let r = [], l, a = !1, s = !1, { locationResourceStore: o = new wr() } = e, { searchResourceStore: u = new wr() } = e;
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
      headerName: "location",
      field: "location",
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
      valueFormatter: Tp
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
        type: "timepicker",
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
        type: "string",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    }
  ], f = [
    {
      icon: "remove",
      callback: (y) => p(y),
      disabled: () => !1
    }
  ], h = [
    {
      icon: "add",
      callback: (y) => _(y),
      disabled: () => !1
    }
  ];
  let m = [];
  function _(y) {
    i.assignResourceToLocation(l, y.uuid).subscribe({
      next: () => {
        u.remove(y.uuid);
        let D = l ? r.find((A) => A.value === l) : r[0];
        o.add(Object.assign(Object.assign({}, y), { location: D.label }));
      }
    });
  }
  function p(y) {
    i.unassignResourceFromLocation(l, y.uuid).subscribe({
      next: () => {
        o.remove(y.uuid);
      }
    });
  }
  function I() {
    const y = Lp(m);
    t(4, a = !1), i.searchResources(y).pipe(
      Lo(1),
      Ro((D) => {
        let A = l ? r.find((v) => v.value === l) : r[0];
        u.set(D.filter((v) => v.location !== A.label));
      }),
      Oo(() => {
        t(4, a = !0);
      })
    ).subscribe();
  }
  function b() {
    t(5, s = !s);
  }
  at(() => {
    i.getLocations().subscribe({
      next: (y) => {
        t(2, r = y.map((D) => ({ label: D.name, value: D.uuid })));
      }
    });
  });
  function R(y) {
    r = y, t(2, r);
  }
  function E(y) {
    l = y, t(3, l);
  }
  function L(y) {
    m = y, t(6, m);
  }
  function k(y) {
    s = y, t(5, s);
  }
  const g = (y) => y.value === l;
  return n.$$set = (y) => {
    "locationResourceStore" in y && t(0, o = y.locationResourceStore), "searchResourceStore" in y && t(1, u = y.searchResourceStore);
  }, n.$$.update = () => {
    n.$$.dirty & /*selectedLocation, locations, locationResourceStore*/
    13 && l && (t(4, a = !1), i.searchResources({}).subscribe({
      next: (y) => {
        console.log({ data: y, selectedLocation: l });
        let D = l ? r.find((A) => A.value === l) : r[0];
        o.set(y.filter((A) => A.location === D.label));
      },
      complete: () => {
        t(4, a = !0);
      },
      error: (y) => {
        console.error("Error loading resources:", y), t(4, a = !0);
      }
    }));
  }, [
    o,
    u,
    r,
    l,
    a,
    s,
    m,
    c,
    d,
    f,
    h,
    I,
    b,
    R,
    E,
    L,
    k,
    g
  ];
}
class Rp extends Re {
  constructor(e) {
    super(), Oe(this, e, Op, Sp, Ie, {
      locationResourceStore: 0,
      searchResourceStore: 1
    });
  }
}
function Fs(n) {
  let e, t;
  return e = new Rp({}), {
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
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function kp(n) {
  let e, t, i, r, l, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Fs()
  );
  return {
    c() {
      a && a.c(), e = ue(), t = ie("input"), i = ue(), r = ie("input"), H(t, "type", "hidden"), H(t, "name", "package-name"), t.value = js, H(r, "type", "hidden"), H(r, "name", "package-version"), r.value = qs;
    },
    m(s, o) {
      a && a.m(s, o), j(s, e, o), j(s, t, o), j(s, i, o), j(s, r, o), l = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? a ? o & /*doc, dev*/
      3 && C(a, 1) : (a = Fs(), a.c(), C(a, 1), a.m(e.parentNode, e)) : a && (Pe(), S(a, 1, 1, () => {
        a = null;
      }), He());
    },
    i(s) {
      l || (C(a), l = !0);
    },
    o(s) {
      S(a), l = !1;
    },
    d(s) {
      s && (V(e), V(t), V(i), V(r)), a && a.d(s);
    }
  };
}
function Dp(n, e, t) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return n.$$set = (l) => {
    "doc" in l && t(0, i = l.doc), "dev" in l && t(1, r = l.dev);
  }, [i, r];
}
class Mp extends Re {
  constructor(e) {
    super(), Oe(this, e, Dp, kp, Ie, { doc: 0, dev: 1 });
  }
}
class Bp extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Mp({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = Fp();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function Fp() {
  const n = `${js}-v${qs}-style`, e = Np(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Np() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Bp as default
};
