var fn = Object.defineProperty;
var gn = (n, e, t) => e in n ? fn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var tt = (n, e, t) => (gn(n, typeof e != "symbol" ? e + "" : e, t), t);
function M() {
}
function V(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function qt(n) {
  return n();
}
function bt() {
  return /* @__PURE__ */ Object.create(null);
}
function J(n) {
  n.forEach(qt);
}
function re(n) {
  return typeof n == "function";
}
function U(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function hn(n) {
  return Object.keys(n).length === 0;
}
function mn(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return M;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function nt(n, e, t) {
  n.$$.on_destroy.push(mn(e, t));
}
function we(n, e, t, l) {
  if (n) {
    const s = Vt(n, e, t, l);
    return n[0](s);
  }
}
function Vt(n, e, t, l) {
  return n[1] && l ? V(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function ye(n, e, t, l) {
  if (n[2] && l) {
    const s = n[2](l(t));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const o = [], i = Math.max(e.dirty.length, s.length);
      for (let r = 0; r < i; r += 1)
        o[r] = e.dirty[r] | s[r];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function ke(n, e, t, l, s, o) {
  if (s) {
    const i = Vt(e, t, l, o);
    n.p(i, s);
  }
}
function Re(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function xe(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function Ee(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function _n(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Ct(n, e, t) {
  return n.set(t), e;
}
function Q(n) {
  return n && re(n.destroy) ? n.destroy : M;
}
function C(n, e) {
  n.appendChild(e);
}
function D(n, e, t) {
  n.insertBefore(e, t || null);
}
function H(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function pn(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function I(n) {
  return document.createElement(n);
}
function Pe(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function F(n) {
  return document.createTextNode(n);
}
function G() {
  return F(" ");
}
function ue() {
  return F("");
}
function z(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function _(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const bn = ["width", "height"];
function me(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && bn.indexOf(l) === -1 ? n[l] = e[l] : _(n, l, e[l]);
}
function vt(n, e) {
  for (const t in e)
    _(n, t, e[t]);
}
function Cn(n, e) {
  Object.keys(e).forEach((t) => {
    vn(n, t, e[t]);
  });
}
function vn(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : _(n, e, t);
}
function Ve(n) {
  return /-/.test(n) ? Cn : me;
}
function In(n) {
  return Array.from(n.childNodes);
}
function ne(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Fe(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function Le(n, e, t) {
  n.classList.toggle(e, !!t);
}
function An(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function It(n, e) {
  return new n(e);
}
let Ue;
function qe(n) {
  Ue = n;
}
function be() {
  if (!Ue)
    throw new Error("Function called outside component initialization");
  return Ue;
}
function dt(n) {
  be().$$.on_mount.push(n);
}
function ft(n) {
  be().$$.on_destroy.push(n);
}
function gt() {
  const n = be();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const o = An(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return s.slice().forEach((i) => {
        i.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function he(n, e) {
  return be().$$.context.set(n, e), e;
}
function ht(n) {
  return be().$$.context.get(n);
}
const Be = [], ce = [];
let Oe = [];
const At = [], wn = /* @__PURE__ */ Promise.resolve();
let at = !1;
function yn() {
  at || (at = !0, wn.then(Ut));
}
function ct(n) {
  Oe.push(n);
}
const lt = /* @__PURE__ */ new Set();
let Me = 0;
function Ut() {
  if (Me !== 0)
    return;
  const n = Ue;
  do {
    try {
      for (; Me < Be.length; ) {
        const e = Be[Me];
        Me++, qe(e), kn(e.$$);
      }
    } catch (e) {
      throw Be.length = 0, Me = 0, e;
    }
    for (qe(null), Be.length = 0, Me = 0; ce.length; )
      ce.pop()();
    for (let e = 0; e < Oe.length; e += 1) {
      const t = Oe[e];
      lt.has(t) || (lt.add(t), t());
    }
    Oe.length = 0;
  } while (Be.length);
  for (; At.length; )
    At.pop()();
  at = !1, lt.clear(), qe(n);
}
function kn(n) {
  if (n.fragment !== null) {
    n.update(), J(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ct);
  }
}
function Rn(n) {
  const e = [], t = [];
  Oe.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), Oe = e;
}
const Je = /* @__PURE__ */ new Set();
let Ze;
function Ce() {
  Ze = {
    r: 0,
    c: [],
    p: Ze
    // parent group
  };
}
function ve() {
  Ze.r || J(Ze.c), Ze = Ze.p;
}
function Z(n, e) {
  n && n.i && (Je.delete(n), n.i(e));
}
function L(n, e, t, l) {
  if (n && n.o) {
    if (Je.has(n))
      return;
    Je.add(n), Ze.c.push(() => {
      Je.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function je(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Xt(n, e) {
  n.d(1), e.delete(n.key);
}
function Yt(n, e, t, l, s, o, i, r, a, c, u, d) {
  let h = n.length, A = o.length, w = h;
  const P = {};
  for (; w--; )
    P[n[w].key] = w;
  const m = [], k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), g = [];
  for (w = A; w--; ) {
    const R = d(s, o, w), N = t(R);
    let B = i.get(N);
    B ? g.push(() => B.p(R, e)) : (B = c(N, R), B.c()), k.set(N, m[w] = B), N in P && v.set(N, Math.abs(w - P[N]));
  }
  const p = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
  function E(R) {
    Z(R, 1), R.m(r, u), i.set(R.key, R), u = R.first, A--;
  }
  for (; h && A; ) {
    const R = m[A - 1], N = n[h - 1], B = R.key, b = N.key;
    R === N ? (u = R.first, h--, A--) : k.has(b) ? !i.has(B) || p.has(B) ? E(R) : y.has(b) ? h-- : v.get(B) > v.get(b) ? (y.add(B), E(R)) : (p.add(b), h--) : (a(N, i), h--);
  }
  for (; h--; ) {
    const R = n[h];
    k.has(R.key) || a(R, i);
  }
  for (; A; )
    E(m[A - 1]);
  return J(g), m;
}
function pe(n, e) {
  const t = {}, l = {}, s = { $$scope: 1 };
  let o = n.length;
  for (; o--; ) {
    const i = n[o], r = e[o];
    if (r) {
      for (const a in i)
        a in r || (l[a] = 1);
      for (const a in r)
        s[a] || (t[a] = r[a], s[a] = 1);
      n[o] = r;
    } else
      for (const a in i)
        s[a] = 1;
  }
  for (const i in l)
    i in t || (t[i] = void 0);
  return t;
}
function Xe(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function ie(n) {
  n && n.c();
}
function le(n, e, t) {
  const { fragment: l, after_update: s } = n.$$;
  l && l.m(e, t), ct(() => {
    const o = n.$$.on_mount.map(qt).filter(re);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : J(o), n.$$.on_mount = [];
  }), s.forEach(ct);
}
function se(n, e) {
  const t = n.$$;
  t.fragment !== null && (Rn(t.after_update), J(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function En(n, e) {
  n.$$.dirty[0] === -1 && (Be.push(n), yn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $(n, e, t, l, s, o, i = null, r = [-1]) {
  const a = Ue;
  qe(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: M,
    not_equal: s,
    bound: bt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: bt(),
    dirty: r,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  i && i(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (d, h, ...A) => {
    const w = A.length ? A[0] : h;
    return c.ctx && s(c.ctx[d], c.ctx[d] = w) && (!c.skip_bound && c.bound[d] && c.bound[d](w), u && En(n, d)), h;
  }) : [], c.update(), u = !0, J(c.before_update), c.fragment = l ? l(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = In(e.target);
      c.fragment && c.fragment.l(d), d.forEach(H);
    } else
      c.fragment && c.fragment.c();
    e.intro && Z(n.$$.fragment), le(n, e.target, e.anchor), Ut();
  }
  qe(a);
}
class ee {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    tt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    tt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    se(this, 1), this.$destroy = M;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!re(t))
      return M;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const s = l.indexOf(t);
      s !== -1 && l.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !hn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Sn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sn);
const Ft = "archive-explorer", Jt = "0.0.1";
var ut = function(n, e) {
  return ut = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var s in l)
      Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
  }, ut(n, e);
};
function Hn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ut(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ke = function() {
  return Ke = Object.assign || function(e) {
    for (var t, l = 1, s = arguments.length; l < s; l++) {
      t = arguments[l];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ke.apply(this, arguments);
};
function mt(n, e, t, l) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function r(u) {
      try {
        c(l.next(u));
      } catch (d) {
        i(d);
      }
    }
    function a(u) {
      try {
        c(l.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : s(u.value).then(r, a);
    }
    c((l = l.apply(n, e || [])).next());
  });
}
function Dn(n, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, l, s, o, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return i.next = r(0), i.throw = r(1), i.return = r(2), typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function r(c) {
    return function(u) {
      return a([c, u]);
    };
  }
  function a(c) {
    if (l)
      throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, c[0] && (t = 0)), t; )
      try {
        if (l = 1, s && (o = c[0] & 2 ? s.return : c[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, c[1])).done)
          return o;
        switch (s = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return t.label++, { value: c[1], done: !1 };
          case 5:
            t.label++, s = c[1], c = [0];
            continue;
          case 7:
            c = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              t = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              t.label = c[1];
              break;
            }
            if (c[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = c;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(c);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        c = e.call(n, t);
      } catch (u) {
        c = [6, u], s = 0;
      } finally {
        l = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
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
var Nn = (
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
function Zn(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Kt(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Kt(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Wn(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Zn,
  estimateScrollWidth: Wn,
  matches: Kt
}, Symbol.toStringTag, { value: "Module" }));
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
var ge = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, wt = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Ne = {
  ARIA_SELECTED: wt.ARIA_SELECTED,
  ARIA_SORT: wt.ARIA_SORT
}, x;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(x || (x = {}));
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
var Tn = (
  /** @class */
  function(n) {
    Hn(e, n);
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
      return mt(this, void 0, void 0, function() {
        return Dn(this, function(t) {
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
        var s = this.adapter.getRowIdAtIndex(l), o = !1;
        s && t.indexOf(s) >= 0 && (o = !0), this.adapter.setRowCheckboxCheckedAtIndex(l, o), this.selectRowAtIndex(l, o);
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
        var s = this.adapter.isCheckboxAtRowIndexChecked(l);
        this.selectRowAtIndex(l, s), this.setHeaderRowCheckboxState();
        var o = this.adapter.getRowIdAtIndex(l);
        this.adapter.notifyRowSelectionChanged({ rowId: o, rowIndex: l, selected: s });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var l = t.columnId, s = t.columnIndex, o = t.headerCell, i = 0; i < this.adapter.getHeaderCellCount(); i++)
        i !== s && (this.adapter.removeClassNameByHeaderCellIndex(i, ge.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(i, ge.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Ne.ARIA_SORT, x.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(i, x.NONE));
      this.adapter.setClassNameByHeaderCellIndex(s, ge.HEADER_CELL_SORTED);
      var r = this.adapter.getAttributeByHeaderCellIndex(s, Ne.ARIA_SORT), a = x.NONE;
      r === x.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(s, ge.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Ne.ARIA_SORT, x.DESCENDING), a = x.DESCENDING) : r === x.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(s, ge.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Ne.ARIA_SORT, x.ASCENDING), a = x.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(s, Ne.ARIA_SORT, x.ASCENDING), a = x.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(s, a), this.adapter.notifySortAction({
        columnId: l,
        columnIndex: s,
        headerCell: o,
        sortValue: a
      });
    }, e.prototype.handleRowClick = function(t) {
      var l = t.rowId, s = t.row;
      this.adapter.notifyRowClick({
        rowId: l,
        row: s
      });
    }, e.prototype.showProgress = function() {
      var t = this.adapter.getTableHeaderHeight(), l = this.adapter.getTableContainerHeight() - t, s = t;
      this.adapter.setProgressIndicatorStyles({
        height: l + "px",
        top: s + "px"
      }), this.adapter.addClass(ge.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ge.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, ge.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, Ne.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, ge.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, Ne.ARIA_SELECTED, "false"));
    }, e;
  }(Nn)
);
const Ge = [];
function st(n, e = M) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function s(r) {
    if (U(n, r) && (n = r, t)) {
      const a = !Ge.length;
      for (const c of l)
        c[1](), Ge.push(c, n);
      if (a) {
        for (let c = 0; c < Ge.length; c += 2)
          Ge[c][0](Ge[c + 1]);
        Ge.length = 0;
      }
    }
  }
  function o(r) {
    s(r(n));
  }
  function i(r, a = M) {
    const c = [r, a];
    return l.add(c), l.size === 1 && (t = e(s, o) || M), r(n), () => {
      l.delete(c), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: o, subscribe: i };
}
function oe(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function ze(n, e, t, l = { bubbles: !0 }, s = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const o = new CustomEvent(e, Object.assign(Object.assign({}, l), { detail: t }));
  if (n == null || n.dispatchEvent(o), s && e.startsWith("SMUI")) {
    const i = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, l), { detail: t }));
    n == null || n.dispatchEvent(i), i.defaultPrevented && o.preventDefault();
  }
  return o;
}
function yt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s], i = o.indexOf("$");
    i !== -1 && e.indexOf(o.substring(0, i + 1)) !== -1 || e.indexOf(o) === -1 && (l[o] = n[o]);
  }
  return l;
}
const kt = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Ln = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Qe(n) {
  let e, t = [];
  n.$on = (s, o) => {
    let i = s, r = () => {
    };
    return e ? r = e(i, o) : t.push([i, o]), i.match(kt) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', i), () => {
      r();
    };
  };
  function l(s) {
    const o = n.$$.callbacks[s.type];
    o && o.slice().forEach((i) => i.call(this, s));
  }
  return (s) => {
    const o = [], i = {};
    e = (r, a) => {
      let c = r, u = a, d = !1;
      const h = c.match(kt), A = c.match(Ln), w = h || A;
      if (c.match(/^SMUI:\w+:/)) {
        const k = c.split(":");
        let v = "";
        for (let g = 0; g < k.length; g++)
          v += g === k.length - 1 ? ":" + k[g] : k[g].split("-").map((p) => p.slice(0, 1).toUpperCase() + p.slice(1)).join("");
        console.warn(`The event ${c.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), c = v;
      }
      if (w) {
        const k = c.split(h ? ":" : "$");
        c = k[0];
        const v = k.slice(1).reduce((g, p) => (g[p] = !0, g), {});
        v.passive && (d = d || {}, d.passive = !0), v.nonpassive && (d = d || {}, d.passive = !1), v.capture && (d = d || {}, d.capture = !0), v.once && (d = d || {}, d.once = !0), v.preventDefault && (u = Mn(u)), v.stopPropagation && (u = Gn(u)), v.stopImmediatePropagation && (u = Bn(u)), v.self && (u = On(s, u)), v.trusted && (u = jn(u));
      }
      const P = Rt(s, c, u, d), m = () => {
        P();
        const k = o.indexOf(m);
        k > -1 && o.splice(k, 1);
      };
      return o.push(m), c in i || (i[c] = Rt(s, c, l)), m;
    };
    for (let r = 0; r < t.length; r++)
      e(t[r][0], t[r][1]);
    return {
      destroy: () => {
        for (let r = 0; r < o.length; r++)
          o[r]();
        for (let r of Object.entries(i))
          r[1]();
      }
    };
  };
}
function Rt(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function Mn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Gn(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Bn(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function On(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function jn(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ye(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    o.substring(0, e.length) === e && (l[o.substring(e.length)] = n[o]);
  }
  return l;
}
function We(n, e) {
  let t = [];
  if (e)
    for (let l = 0; l < e.length; l++) {
      const s = e[l], o = Array.isArray(s) ? s[0] : s;
      Array.isArray(s) && s.length > 1 ? t.push(o(n, s[1])) : t.push(o(n));
    }
  return {
    update(l) {
      if ((l && l.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (l)
        for (let s = 0; s < l.length; s++) {
          const o = t[s];
          if (o && o.update) {
            const i = l[s];
            Array.isArray(i) && i.length > 1 ? o.update(i[1]) : o.update();
          }
        }
    },
    destroy() {
      for (let l = 0; l < t.length; l++) {
        const s = t[l];
        s && s.destroy && s.destroy();
      }
    }
  };
}
const zn = (n) => ({}), Et = (n) => ({}), qn = (n) => ({}), St = (n) => ({});
function Ht(n) {
  let e, t, l, s, o;
  const i = (
    /*#slots*/
    n[36].progress
  ), r = we(
    i,
    n,
    /*$$scope*/
    n[35],
    St
  );
  return {
    c() {
      e = I("div"), t = I("div"), l = G(), r && r.c(), _(t, "class", "mdc-data-table__scrim"), _(e, "class", "mdc-data-table__progress-indicator"), _(e, "style", s = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(Dt).join(" "));
    },
    m(a, c) {
      D(a, e, c), C(e, t), C(e, l), r && r.m(e, null), o = !0;
    },
    p(a, c) {
      r && r.p && (!o || c[1] & /*$$scope*/
      16) && ke(
        r,
        i,
        a,
        /*$$scope*/
        a[35],
        o ? ye(
          i,
          /*$$scope*/
          a[35],
          c,
          qn
        ) : Re(
          /*$$scope*/
          a[35]
        ),
        St
      ), (!o || c[0] & /*progressIndicatorStyles*/
      8192 && s !== (s = Object.entries(
        /*progressIndicatorStyles*/
        a[13]
      ).map(Dt).join(" "))) && _(e, "style", s);
    },
    i(a) {
      o || (Z(r, a), o = !0);
    },
    o(a) {
      L(r, a), o = !1;
    },
    d(a) {
      a && H(e), r && r.d(a);
    }
  };
}
function Vn(n) {
  let e, t, l, s, o, i, r, a, c, u, d, h, A, w;
  const P = (
    /*#slots*/
    n[36].default
  ), m = we(
    P,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let k = [
    {
      class: s = oe({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ye(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], v = {};
  for (let b = 0; b < k.length; b += 1)
    v = V(v, k[b]);
  let g = [
    {
      class: i = oe({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ye(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], p = {};
  for (let b = 0; b < g.length; b += 1)
    p = V(p, g[b]);
  let y = (
    /*$$slots*/
    n[24].progress && Ht(n)
  );
  const E = (
    /*#slots*/
    n[36].paginate
  ), R = we(
    E,
    n,
    /*$$scope*/
    n[35],
    Et
  );
  let N = [
    {
      class: u = oe({
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
    yt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], B = {};
  for (let b = 0; b < N.length; b += 1)
    B = V(B, N[b]);
  return {
    c() {
      e = I("div"), t = I("div"), l = I("table"), m && m.c(), a = G(), y && y.c(), c = G(), R && R.c(), me(l, v), me(t, p), me(e, B);
    },
    m(b, O) {
      D(b, e, O), C(e, t), C(t, l), m && m.m(l, null), n[37](t), C(e, a), y && y.m(e, null), C(e, c), R && R.m(e, null), n[38](e), h = !0, A || (w = [
        Q(o = We.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        Q(r = We.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        Q(d = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        z(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        z(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        z(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        z(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        z(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        z(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        z(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        z(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        z(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], A = !0);
    },
    p(b, O) {
      m && m.p && (!h || O[1] & /*$$scope*/
      16) && ke(
        m,
        P,
        b,
        /*$$scope*/
        b[35],
        h ? ye(
          P,
          /*$$scope*/
          b[35],
          O,
          null
        ) : Re(
          /*$$scope*/
          b[35]
        ),
        null
      ), me(l, v = pe(k, [
        (!h || O[0] & /*table$class*/
        64 && s !== (s = oe({
          [
            /*table$class*/
            b[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: s },
        O[0] & /*$$restProps*/
        33554432 && Ye(
          /*$$restProps*/
          b[25],
          "table$"
        )
      ])), o && re(o.update) && O[0] & /*table$use*/
      32 && o.update.call(
        null,
        /*table$use*/
        b[5]
      ), me(t, p = pe(g, [
        (!h || O[0] & /*container$class*/
        16 && i !== (i = oe({
          [
            /*container$class*/
            b[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: i },
        O[0] & /*$$restProps*/
        33554432 && Ye(
          /*$$restProps*/
          b[25],
          "container$"
        )
      ])), r && re(r.update) && O[0] & /*container$use*/
      8 && r.update.call(
        null,
        /*container$use*/
        b[3]
      ), /*$$slots*/
      b[24].progress ? y ? (y.p(b, O), O[0] & /*$$slots*/
      16777216 && Z(y, 1)) : (y = Ht(b), y.c(), Z(y, 1), y.m(e, c)) : y && (Ce(), L(y, 1, 1, () => {
        y = null;
      }), ve()), R && R.p && (!h || O[1] & /*$$scope*/
      16) && ke(
        R,
        E,
        b,
        /*$$scope*/
        b[35],
        h ? ye(
          E,
          /*$$scope*/
          b[35],
          O,
          zn
        ) : Re(
          /*$$scope*/
          b[35]
        ),
        Et
      ), me(e, B = pe(N, [
        (!h || O[0] & /*className, stickyHeader, internalClasses*/
        4102 && u !== (u = oe({
          [
            /*className*/
            b[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            b[2]
          ),
          .../*internalClasses*/
          b[12]
        }))) && { class: u },
        O[0] & /*$$restProps*/
        33554432 && yt(
          /*$$restProps*/
          b[25],
          ["container$", "table$"]
        )
      ])), d && re(d.update) && O[0] & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      h || (Z(m, b), Z(y), Z(R, b), h = !0);
    },
    o(b) {
      L(m, b), L(y), L(R, b), h = !1;
    },
    d(b) {
      b && H(e), m && m.d(b), n[37](null), y && y.d(), R && R.d(b), n[38](null), A = !1, J(w);
    }
  };
}
const Dt = ([n, e]) => `${n}: ${e};`;
function Un(n, e, t) {
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
  let s = Ee(e, l), o, i, r, { $$slots: a = {}, $$scope: c } = e;
  const u = _n(a), { closest: d } = Pn, h = Qe(be());
  let { use: A = [] } = e, { class: w = "" } = e, { stickyHeader: P = !1 } = e, { sortable: m = !1 } = e, { sort: k = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: g = "sorted, ascending" } = e, { sortDescendingAriaLabel: p = "sorted, descending" } = e, { container$use: y = [] } = e, { container$class: E = "" } = e, { table$use: R = [] } = e, { table$class: N = "" } = e, B, b, O, T, W, K = {}, ae = { height: "auto", top: "initial" }, Ie = ht("SMUI:addLayoutListener"), Te, de = !1, Se = st(!1);
  nt(n, Se, (f) => t(34, o = f));
  let He = st(k);
  nt(n, He, (f) => t(45, r = f));
  let De = st(v);
  nt(n, De, (f) => t(44, i = f)), he("SMUI:checkbox:context", "data-table"), he("SMUI:linear-progress:context", "data-table"), he("SMUI:linear-progress:closed", Se), he("SMUI:data-table:sortable", m), he("SMUI:data-table:sort", He), he("SMUI:data-table:sortDirection", De), he("SMUI:data-table:sortAscendingAriaLabel", g), he("SMUI:data-table:sortDescendingAriaLabel", p), Ie && (Te = Ie(_t));
  let Ae;
  dt(() => (t(7, b = new Tn({
    addClass: Qt,
    removeClass: $t,
    getHeaderCellElements: () => {
      var f;
      return (f = T == null ? void 0 : T.cells.map((S) => S.element)) !== null && f !== void 0 ? f : [];
    },
    getHeaderCellCount: () => {
      var f;
      return (f = T == null ? void 0 : T.cells.length) !== null && f !== void 0 ? f : 0;
    },
    getAttributeByHeaderCellIndex: (f, S) => {
      var Y;
      return (Y = T == null ? void 0 : T.orderedCells[f].getAttr(S)) !== null && Y !== void 0 ? Y : null;
    },
    setAttributeByHeaderCellIndex: (f, S, Y) => {
      T == null || T.orderedCells[f].addAttr(S, Y);
    },
    setClassNameByHeaderCellIndex: (f, S) => {
      T == null || T.orderedCells[f].addClass(S);
    },
    removeClassNameByHeaderCellIndex: (f, S) => {
      T == null || T.orderedCells[f].removeClass(S);
    },
    notifySortAction: (f) => {
      t(26, k = f.columnId), t(27, v = f.sortValue), ze(fe(), "SMUIDataTable:sorted", f, void 0, !0);
    },
    getTableContainerHeight: () => O.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const f = fe().querySelector(".mdc-data-table__header-row");
      if (!f)
        throw new Error("MDCDataTable: Table header element not found.");
      return f.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (f) => {
      t(13, ae = f);
    },
    addClassAtRowIndex: (f, S) => {
      W == null || W.orderedRows[f].addClass(S);
    },
    getRowCount: () => {
      var f;
      return (f = W == null ? void 0 : W.rows.length) !== null && f !== void 0 ? f : 0;
    },
    getRowElements: () => {
      var f;
      return (f = W == null ? void 0 : W.rows.map((S) => S.element)) !== null && f !== void 0 ? f : [];
    },
    getRowIdAtIndex: (f) => {
      var S;
      return (S = W == null ? void 0 : W.orderedRows[f].rowId) !== null && S !== void 0 ? S : null;
    },
    getRowIndexByChildElement: (f) => {
      var S;
      return (S = W == null ? void 0 : W.orderedRows.map((Y) => Y.element).indexOf(d(f, ".mdc-data-table__row"))) !== null && S !== void 0 ? S : -1;
    },
    getSelectedRowCount: () => {
      var f;
      return (f = W == null ? void 0 : W.rows.filter((S) => S.selected).length) !== null && f !== void 0 ? f : 0;
    },
    isCheckboxAtRowIndexChecked: (f) => {
      const S = W == null ? void 0 : W.orderedRows[f].checkbox;
      return S ? S.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const f = T == null ? void 0 : T.checkbox;
      return f ? f.checked : !1;
    },
    isRowsSelectable: () => !!fe().querySelector(".mdc-data-table__row-checkbox") || !!fe().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (f) => {
      const S = W == null ? void 0 : W.orderedRows[f.rowIndex];
      S && ze(
        fe(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: S.element,
          rowId: S.rowId,
          rowIndex: f.rowIndex,
          selected: f.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      $e(!1), ze(fe(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      $e(!1), ze(fe(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (f) => {
      ze(fe(), "SMUIDataTable:rowClick", f, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (f, S) => {
      W == null || W.orderedRows[f].removeClass(S);
    },
    setAttributeAtRowIndex: (f, S, Y) => {
      W == null || W.orderedRows[f].addAttr(S, Y);
    },
    setHeaderRowCheckboxChecked: (f) => {
      const S = T == null ? void 0 : T.checkbox;
      S && (S.checked = f);
    },
    setHeaderRowCheckboxIndeterminate: $e,
    setRowCheckboxCheckedAtIndex: (f, S) => {
      const Y = W == null ? void 0 : W.orderedRows[f].checkbox;
      Y && (Y.checked = S);
    },
    setSortStatusLabelByHeaderCellIndex: (f, S) => {
    }
    // Handled automatically.
  })), b.init(), b.layout(), t(14, de = !0), () => {
    b.destroy();
  })), ft(() => {
    Te && Te();
  });
  function te(f) {
    t(10, T = f.detail);
  }
  function j(f) {
    t(11, W = f.detail);
  }
  function q(f) {
    b && b.handleRowCheckboxChange(f);
  }
  function Qt(f) {
    K[f] || t(12, K[f] = !0, K);
  }
  function $t(f) {
    (!(f in K) || K[f]) && t(12, K[f] = !1, K);
  }
  function $e(f) {
    const S = T == null ? void 0 : T.checkbox;
    S && (S.indeterminate = f);
  }
  function en(f) {
    if (!b || !f.detail.target)
      return;
    const S = d(f.detail.target, ".mdc-data-table__header-cell--with-sort");
    S && nn(S);
  }
  function tn(f) {
    if (!b || !f.detail.target)
      return;
    const S = d(f.detail.target, ".mdc-data-table__row");
    S && b && b.handleRowClick({ rowId: f.detail.rowId, row: S });
  }
  function nn(f) {
    var S, Y;
    const pt = (S = T == null ? void 0 : T.orderedCells) !== null && S !== void 0 ? S : [], et = pt.map((dn) => dn.element).indexOf(f);
    if (et === -1)
      return;
    const un = (Y = pt[et].columnId) !== null && Y !== void 0 ? Y : null;
    b.handleSortAction({ columnId: un, columnIndex: et, headerCell: f });
  }
  function _t() {
    return b.layout();
  }
  function fe() {
    return B;
  }
  function ln(f) {
    ce[f ? "unshift" : "push"](() => {
      O = f, t(9, O);
    });
  }
  function sn(f) {
    ce[f ? "unshift" : "push"](() => {
      B = f, t(8, B);
    });
  }
  const on = () => b && de && b.layout(), rn = () => t(10, T = void 0), an = () => t(11, W = void 0), cn = () => b && b.handleHeaderRowCheckboxChange();
  return n.$$set = (f) => {
    e = V(V({}, e), xe(f)), t(25, s = Ee(e, l)), "use" in f && t(0, A = f.use), "class" in f && t(1, w = f.class), "stickyHeader" in f && t(2, P = f.stickyHeader), "sortable" in f && t(28, m = f.sortable), "sort" in f && t(26, k = f.sort), "sortDirection" in f && t(27, v = f.sortDirection), "sortAscendingAriaLabel" in f && t(29, g = f.sortAscendingAriaLabel), "sortDescendingAriaLabel" in f && t(30, p = f.sortDescendingAriaLabel), "container$use" in f && t(3, y = f.container$use), "container$class" in f && t(4, E = f.container$class), "table$use" in f && t(5, R = f.table$use), "table$class" in f && t(6, N = f.table$class), "$$scope" in f && t(35, c = f.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Ct(He, r = k, r), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Ct(De, i = v, i), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && u.progress && b && Ae !== o && (t(33, Ae = o), o ? b.hideProgress() : b.showProgress());
  }, [
    A,
    w,
    P,
    y,
    E,
    R,
    N,
    b,
    B,
    O,
    T,
    W,
    K,
    ae,
    de,
    h,
    Se,
    He,
    De,
    te,
    j,
    q,
    en,
    tn,
    u,
    s,
    k,
    v,
    m,
    g,
    p,
    _t,
    fe,
    Ae,
    o,
    c,
    a,
    ln,
    sn,
    on,
    rn,
    an,
    cn
  ];
}
class Xn extends ee {
  constructor(e) {
    super(), $(
      this,
      e,
      Un,
      Vn,
      U,
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
function Yn(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, s = (
    /*tag*/
    n[1] && ot(n)
  );
  return {
    c() {
      s && s.c(), t = ue();
    },
    m(o, i) {
      s && s.m(o, i), D(o, t, i), l = !0;
    },
    p(o, i) {
      /*tag*/
      o[1] ? e ? U(
        e,
        /*tag*/
        o[1]
      ) ? (s.d(1), s = ot(o), e = /*tag*/
      o[1], s.c(), s.m(t.parentNode, t)) : s.p(o, i) : (s = ot(o), e = /*tag*/
      o[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      o[1]);
    },
    i(o) {
      l || (Z(s, o), l = !0);
    },
    o(o) {
      L(s, o), l = !1;
    },
    d(o) {
      o && H(t), s && s.d(o);
    }
  };
}
function Fn(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && rt(n)
  );
  return {
    c() {
      l && l.c(), t = ue();
    },
    m(s, o) {
      l && l.m(s, o), D(s, t, o);
    },
    p(s, o) {
      /*tag*/
      s[1] ? e ? U(
        e,
        /*tag*/
        s[1]
      ) ? (l.d(1), l = rt(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : l.p(s, o) : (l = rt(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      s[1]);
    },
    i: M,
    o: M,
    d(s) {
      s && H(t), l && l.d(s);
    }
  };
}
function Jn(n) {
  let e, t, l, s, o;
  const i = (
    /*#slots*/
    n[8].default
  ), r = we(
    i,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let a = [
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let u = 0; u < a.length; u += 1)
    c = V(c, a[u]);
  return {
    c() {
      e = Pe("svg"), r && r.c(), vt(e, c);
    },
    m(u, d) {
      D(u, e, d), r && r.m(e, null), n[9](e), l = !0, s || (o = [
        Q(t = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(u, d) {
      r && r.p && (!l || d & /*$$scope*/
      128) && ke(
        r,
        i,
        u,
        /*$$scope*/
        u[7],
        l ? ye(
          i,
          /*$$scope*/
          u[7],
          d,
          null
        ) : Re(
          /*$$scope*/
          u[7]
        ),
        null
      ), vt(e, c = pe(a, [d & /*$$restProps*/
      32 && /*$$restProps*/
      u[5]])), t && re(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i(u) {
      l || (Z(r, u), l = !0);
    },
    o(u) {
      L(r, u), l = !1;
    },
    d(u) {
      u && H(e), r && r.d(u), n[9](null), s = !1, J(o);
    }
  };
}
function ot(n) {
  let e, t, l, s, o;
  const i = (
    /*#slots*/
    n[8].default
  ), r = we(
    i,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let a = [
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let u = 0; u < a.length; u += 1)
    c = V(c, a[u]);
  return {
    c() {
      e = I(
        /*tag*/
        n[1]
      ), r && r.c(), Ve(
        /*tag*/
        n[1]
      )(e, c);
    },
    m(u, d) {
      D(u, e, d), r && r.m(e, null), n[11](e), l = !0, s || (o = [
        Q(t = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(u, d) {
      r && r.p && (!l || d & /*$$scope*/
      128) && ke(
        r,
        i,
        u,
        /*$$scope*/
        u[7],
        l ? ye(
          i,
          /*$$scope*/
          u[7],
          d,
          null
        ) : Re(
          /*$$scope*/
          u[7]
        ),
        null
      ), Ve(
        /*tag*/
        u[1]
      )(e, c = pe(a, [d & /*$$restProps*/
      32 && /*$$restProps*/
      u[5]])), t && re(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i(u) {
      l || (Z(r, u), l = !0);
    },
    o(u) {
      L(r, u), l = !1;
    },
    d(u) {
      u && H(e), r && r.d(u), n[11](null), s = !1, J(o);
    }
  };
}
function rt(n) {
  let e, t, l, s, o = [
    /*$$restProps*/
    n[5]
  ], i = {};
  for (let r = 0; r < o.length; r += 1)
    i = V(i, o[r]);
  return {
    c() {
      e = I(
        /*tag*/
        n[1]
      ), Ve(
        /*tag*/
        n[1]
      )(e, i);
    },
    m(r, a) {
      D(r, e, a), n[10](e), l || (s = [
        Q(t = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(r, a) {
      Ve(
        /*tag*/
        r[1]
      )(e, i = pe(o, [a & /*$$restProps*/
      32 && /*$$restProps*/
      r[5]])), t && re(t.update) && a & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        r[0]
      );
    },
    d(r) {
      r && H(e), n[10](null), l = !1, J(s);
    }
  };
}
function Kn(n) {
  let e, t, l, s;
  const o = [Jn, Fn, Yn], i = [];
  function r(a, c) {
    return (
      /*tag*/
      a[1] === "svg" ? 0 : (
        /*selfClosing*/
        a[3] ? 1 : 2
      )
    );
  }
  return e = r(n), t = i[e] = o[e](n), {
    c() {
      t.c(), l = ue();
    },
    m(a, c) {
      i[e].m(a, c), D(a, l, c), s = !0;
    },
    p(a, [c]) {
      let u = e;
      e = r(a), e === u ? i[e].p(a, c) : (Ce(), L(i[u], 1, 1, () => {
        i[u] = null;
      }), ve(), t = i[e], t ? t.p(a, c) : (t = i[e] = o[e](a), t.c()), Z(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      s || (Z(t), s = !0);
    },
    o(a) {
      L(t), s = !1;
    },
    d(a) {
      a && H(l), i[e].d(a);
    }
  };
}
function xn(n, e, t) {
  let l;
  const s = ["use", "tag", "getElement"];
  let o = Ee(e, s), { $$slots: i = {}, $$scope: r } = e, { use: a = [] } = e, { tag: c } = e;
  const u = Qe(be());
  let d;
  function h() {
    return d;
  }
  function A(m) {
    ce[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  function w(m) {
    ce[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  function P(m) {
    ce[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  return n.$$set = (m) => {
    e = V(V({}, e), xe(m)), t(5, o = Ee(e, s)), "use" in m && t(0, a = m.use), "tag" in m && t(1, c = m.tag), "$$scope" in m && t(7, r = m.$$scope);
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
    ].indexOf(c) > -1);
  }, [
    a,
    c,
    d,
    l,
    u,
    o,
    h,
    r,
    i,
    A,
    w,
    P
  ];
}
class xt extends ee {
  constructor(e) {
    super(), $(this, e, xn, Kn, U, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Nt(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l;
}
function Qn(n) {
  let e, t;
  return e = new Xn({
    props: {
      class: "smui-data-table--striped",
      $$slots: { default: [nl] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    p(l, s) {
      const o = {};
      s & /*$$scope, processes*/
      2049 && (o.$$scope = { dirty: s, ctx: l }), e.$set(o);
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function $n(n) {
  let e;
  return {
    c() {
      e = I("p"), e.textContent = "No processes available.", _(e, "class", "status svelte-12d7xcd");
    },
    m(t, l) {
      D(t, e, l);
    },
    p: M,
    i: M,
    o: M,
    d(t) {
      t && H(e);
    }
  };
}
function el(n) {
  let e, t;
  return {
    c() {
      e = I("p"), t = F(
        /*errorMsg*/
        n[2]
      ), _(e, "class", "status error svelte-12d7xcd");
    },
    m(l, s) {
      D(l, e, s), C(e, t);
    },
    p(l, s) {
      s & /*errorMsg*/
      4 && ne(
        t,
        /*errorMsg*/
        l[2]
      );
    },
    i: M,
    o: M,
    d(l) {
      l && H(e);
    }
  };
}
function tl(n) {
  let e;
  return {
    c() {
      e = I("p"), e.textContent = "Loading…", _(e, "class", "status svelte-12d7xcd");
    },
    m(t, l) {
      D(t, e, l);
    },
    p: M,
    i: M,
    o: M,
    d(t) {
      t && H(e);
    }
  };
}
function Zt(n, e) {
  let t, l, s = (
    /*p*/
    (e[8].name || /*p*/
    e[8].id) + ""
  ), o, i, r, a = (
    /*p*/
    e[8].description + ""
  ), c, u, d, h, A, w, P, m, k;
  function v() {
    return (
      /*click_handler*/
      e[5](
        /*p*/
        e[8]
      )
    );
  }
  function g() {
    return (
      /*click_handler_1*/
      e[6](
        /*p*/
        e[8]
      )
    );
  }
  return {
    key: n,
    first: null,
    c() {
      t = I("tr"), l = I("td"), o = F(s), i = G(), r = I("td"), c = F(a), u = G(), d = I("td"), h = I("button"), h.textContent = "START", A = G(), w = I("button"), w.textContent = "VIEW", P = G(), _(l, "class", "mdc-data-table__cell"), _(r, "class", "mdc-data-table__cell"), _(d, "class", "mdc-data-table__cell text-right svelte-12d7xcd"), _(t, "class", "mdc-data-table__row"), this.first = t;
    },
    m(p, y) {
      D(p, t, y), C(t, l), C(l, o), C(t, i), C(t, r), C(r, c), C(t, u), C(t, d), C(d, h), C(d, A), C(d, w), C(t, P), m || (k = [
        z(h, "click", v),
        z(w, "click", g)
      ], m = !0);
    },
    p(p, y) {
      e = p, y & /*processes*/
      1 && s !== (s = /*p*/
      (e[8].name || /*p*/
      e[8].id) + "") && ne(o, s), y & /*processes*/
      1 && a !== (a = /*p*/
      e[8].description + "") && ne(c, a);
    },
    d(p) {
      p && H(t), m = !1, J(k);
    }
  };
}
function nl(n) {
  let e, t, l, s, o = [], i = /* @__PURE__ */ new Map(), r = je(
    /*processes*/
    n[0]
  );
  const a = (c) => (
    /*p*/
    c[8].id
  );
  for (let c = 0; c < r.length; c += 1) {
    let u = Nt(n, r, c), d = a(u);
    i.set(d, o[c] = Zt(d, u));
  }
  return {
    c() {
      e = I("table"), t = I("thead"), t.innerHTML = '<tr class="mdc-data-table__header-row"><th class="mdc-data-table__header-cell" role="columnheader" scope="col">Name</th> <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Description</th> <th class="mdc-data-table__header-cell text-right svelte-12d7xcd" role="columnheader" scope="col">Actions</th></tr>', l = G(), s = I("tbody");
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      _(s, "class", "mdc-data-table__content");
    },
    m(c, u) {
      D(c, e, u), C(e, t), C(e, l), C(e, s);
      for (let d = 0; d < o.length; d += 1)
        o[d] && o[d].m(s, null);
    },
    p(c, u) {
      u & /*viewProcess, processes, startProcess*/
      25 && (r = je(
        /*processes*/
        c[0]
      ), o = Yt(o, u, a, 1, c, r, i, s, Xt, Zt, null, Nt));
    },
    d(c) {
      c && H(e);
      for (let u = 0; u < o.length; u += 1)
        o[u].d();
    }
  };
}
function ll(n) {
  let e, t, l, s;
  const o = [tl, el, $n, Qn], i = [];
  function r(a, c) {
    return (
      /*loading*/
      a[1] ? 0 : (
        /*errorMsg*/
        a[2] ? 1 : (
          /*processes*/
          a[0].length === 0 ? 2 : 3
        )
      )
    );
  }
  return e = r(n), t = i[e] = o[e](n), {
    c() {
      t.c(), l = ue();
    },
    m(a, c) {
      i[e].m(a, c), D(a, l, c), s = !0;
    },
    p(a, [c]) {
      let u = e;
      e = r(a), e === u ? i[e].p(a, c) : (Ce(), L(i[u], 1, 1, () => {
        i[u] = null;
      }), ve(), t = i[e], t ? t.p(a, c) : (t = i[e] = o[e](a), t.c()), Z(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      s || (Z(t), s = !0);
    },
    o(a) {
      L(t), s = !1;
    },
    d(a) {
      a && H(l), i[e].d(a);
    }
  };
}
function sl(n, e, t) {
  let { processes: l = [] } = e, { loading: s = !1 } = e, { errorMsg: o = "" } = e;
  const i = gt();
  function r(d) {
    i("start", d);
  }
  function a(d) {
    i("view", d);
  }
  const c = (d) => r(d), u = (d) => a(d);
  return n.$$set = (d) => {
    "processes" in d && t(0, l = d.processes), "loading" in d && t(1, s = d.loading), "errorMsg" in d && t(2, o = d.errorMsg);
  }, [
    l,
    s,
    o,
    r,
    a,
    c,
    u
  ];
}
class ol extends ee {
  constructor(e) {
    super(), $(this, e, sl, ll, U, { processes: 0, loading: 1, errorMsg: 2 });
  }
}
function Wt(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function rl(n) {
  let e, t, l, s, o, i, r = (
    /*proc*/
    n[0].id + ""
  ), a, c, u, d, h, A = (
    /*proc*/
    n[0].name + ""
  ), w, P, m, k, v, g = (
    /*proc*/
    n[0].version + ""
  ), p, y, E, R, N, B = (
    /*proc*/
    n[0].description + ""
  ), b, O, T, W, K, ae, Ie, Te, de, Se, He;
  function De(j, q) {
    return !/*proc*/
    j[0].plugins || /*proc*/
    j[0].plugins.length === 0 ? cl : al;
  }
  let Ae = De(n), te = Ae(n);
  return {
    c() {
      e = I("h1"), e.textContent = "Process Details", t = G(), l = I("div"), s = I("div"), o = I("span"), o.textContent = "ID", i = I("span"), a = F(r), c = G(), u = I("div"), d = I("span"), d.textContent = "Name", h = I("span"), w = F(A), P = G(), m = I("div"), k = I("span"), k.textContent = "Version", v = I("span"), p = F(g), y = G(), E = I("div"), R = I("span"), R.textContent = "Description", N = I("span"), b = F(B), O = G(), T = I("h2"), T.textContent = "Plugins", W = G(), te.c(), K = G(), ae = I("div"), Ie = I("button"), Ie.textContent = "Back", Te = G(), de = I("button"), de.textContent = "START PROCESS", _(e, "class", "title svelte-1qn566t"), _(o, "class", "label svelte-1qn566t"), _(i, "class", "value svelte-1qn566t"), _(s, "class", "row svelte-1qn566t"), _(d, "class", "label svelte-1qn566t"), _(h, "class", "value svelte-1qn566t"), _(u, "class", "row svelte-1qn566t"), _(k, "class", "label svelte-1qn566t"), _(v, "class", "value svelte-1qn566t"), _(m, "class", "row svelte-1qn566t"), _(R, "class", "label svelte-1qn566t"), _(N, "class", "value svelte-1qn566t"), _(E, "class", "row svelte-1qn566t"), _(l, "class", "card svelte-1qn566t"), _(T, "class", "subtitle svelte-1qn566t"), _(Ie, "class", "btn svelte-1qn566t"), _(de, "class", "btn primary svelte-1qn566t"), _(ae, "class", "actions svelte-1qn566t");
    },
    m(j, q) {
      D(j, e, q), D(j, t, q), D(j, l, q), C(l, s), C(s, o), C(s, i), C(i, a), C(l, c), C(l, u), C(u, d), C(u, h), C(h, w), C(l, P), C(l, m), C(m, k), C(m, v), C(v, p), C(l, y), C(l, E), C(E, R), C(E, N), C(N, b), D(j, O, q), D(j, T, q), D(j, W, q), te.m(j, q), D(j, K, q), D(j, ae, q), C(ae, Ie), C(ae, Te), C(ae, de), Se || (He = [
        z(
          Ie,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        z(
          de,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], Se = !0);
    },
    p(j, q) {
      q & /*proc*/
      1 && r !== (r = /*proc*/
      j[0].id + "") && ne(a, r), q & /*proc*/
      1 && A !== (A = /*proc*/
      j[0].name + "") && ne(w, A), q & /*proc*/
      1 && g !== (g = /*proc*/
      j[0].version + "") && ne(p, g), q & /*proc*/
      1 && B !== (B = /*proc*/
      j[0].description + "") && ne(b, B), Ae === (Ae = De(j)) && te ? te.p(j, q) : (te.d(1), te = Ae(j), te && (te.c(), te.m(K.parentNode, K)));
    },
    d(j) {
      j && (H(e), H(t), H(l), H(O), H(T), H(W), H(K), H(ae)), te.d(j), Se = !1, J(He);
    }
  };
}
function il(n) {
  let e, t, l, s, o, i;
  return {
    c() {
      e = I("div"), t = I("p"), t.textContent = "No process selected.", l = G(), s = I("button"), s.textContent = "Back to list", _(t, "class", "svelte-1qn566t"), _(s, "class", "btn svelte-1qn566t"), _(e, "class", "empty-state svelte-1qn566t");
    },
    m(r, a) {
      D(r, e, a), C(e, t), C(e, l), C(e, s), o || (i = z(
        s,
        "click",
        /*click_handler*/
        n[2]
      ), o = !0);
    },
    p: M,
    d(r) {
      r && H(e), o = !1, i();
    }
  };
}
function al(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), s = je(
    /*proc*/
    n[0].plugins
  );
  const o = (i) => (
    /*pl*/
    i[5].id
  );
  for (let i = 0; i < s.length; i += 1) {
    let r = Wt(n, s, i), a = o(r);
    l.set(a, t[i] = Lt(a, r));
  }
  return {
    c() {
      e = I("ol");
      for (let i = 0; i < t.length; i += 1)
        t[i].c();
      _(e, "class", "plugins-list svelte-1qn566t");
    },
    m(i, r) {
      D(i, e, r);
      for (let a = 0; a < t.length; a += 1)
        t[a] && t[a].m(e, null);
    },
    p(i, r) {
      r & /*proc*/
      1 && (s = je(
        /*proc*/
        i[0].plugins
      ), t = Yt(t, r, o, 1, i, s, l, e, Xt, Lt, null, Wt));
    },
    d(i) {
      i && H(e);
      for (let r = 0; r < t.length; r += 1)
        t[r].d();
    }
  };
}
function cl(n) {
  let e;
  return {
    c() {
      e = I("p"), e.textContent = "No plugins defined for this process.", _(e, "class", "muted svelte-1qn566t");
    },
    m(t, l) {
      D(t, e, l);
    },
    p: M,
    d(t) {
      t && H(e);
    }
  };
}
function Pt(n) {
  let e, t = (
    /*pl*/
    n[5].type + ""
  ), l;
  return {
    c() {
      e = I("p"), l = F(t), _(e, "class", "plugin-type svelte-1qn566t");
    },
    m(s, o) {
      D(s, e, o), C(e, l);
    },
    p(s, o) {
      o & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].type + "") && ne(l, t);
    },
    d(s) {
      s && H(e);
    }
  };
}
function Tt(n) {
  let e, t = (
    /*pl*/
    n[5].description + ""
  ), l;
  return {
    c() {
      e = I("p"), l = F(t), _(e, "class", "description svelte-1qn566t");
    },
    m(s, o) {
      D(s, e, o), C(e, l);
    },
    p(s, o) {
      o & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].description + "") && ne(l, t);
    },
    d(s) {
      s && H(e);
    }
  };
}
function Lt(n, e) {
  let t, l, s, o = (
    /*i*/
    e[7] + 1 + ""
  ), i, r, a, c, u, d = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), h, A, w, P, m = (
    /*pl*/
    e[5].type && Pt(e)
  ), k = (
    /*pl*/
    e[5].description && Tt(e)
  );
  return {
    key: n,
    first: null,
    c() {
      t = I("li"), l = I("div"), s = I("span"), i = F(o), r = F("."), a = G(), c = I("div"), u = I("p"), h = F(d), A = G(), m && m.c(), w = G(), k && k.c(), P = G(), _(s, "class", "order svelte-1qn566t"), _(u, "class", "plugin-name svelte-1qn566t"), _(c, "class", "svelte-1qn566t"), _(l, "class", "plugin-header svelte-1qn566t"), _(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(v, g) {
      D(v, t, g), C(t, l), C(l, s), C(s, i), C(s, r), C(l, a), C(l, c), C(c, u), C(u, h), C(c, A), m && m.m(c, null), C(t, w), k && k.m(t, null), C(t, P);
    },
    p(v, g) {
      e = v, g & /*proc*/
      1 && o !== (o = /*i*/
      e[7] + 1 + "") && ne(i, o), g & /*proc*/
      1 && d !== (d = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && ne(h, d), /*pl*/
      e[5].type ? m ? m.p(e, g) : (m = Pt(e), m.c(), m.m(c, null)) : m && (m.d(1), m = null), /*pl*/
      e[5].description ? k ? k.p(e, g) : (k = Tt(e), k.c(), k.m(t, P)) : k && (k.d(1), k = null);
    },
    d(v) {
      v && H(t), m && m.d(), k && k.d();
    }
  };
}
function ul(n) {
  let e;
  function t(o, i) {
    return (
      /*proc*/
      o[0] ? rl : il
    );
  }
  let l = t(n), s = l(n);
  return {
    c() {
      e = I("div"), s.c(), _(e, "class", "container svelte-1qn566t");
    },
    m(o, i) {
      D(o, e, i), s.m(e, null);
    },
    p(o, [i]) {
      l === (l = t(o)) && s ? s.p(o, i) : (s.d(1), s = l(o), s && (s.c(), s.m(e, null)));
    },
    i: M,
    o: M,
    d(o) {
      o && H(e), s.d();
    }
  };
}
function dl(n, e, t) {
  let { proc: l = null } = e;
  const s = gt(), o = () => s("back"), i = () => s("back"), r = () => s("start", l);
  return n.$$set = (a) => {
    "proc" in a && t(0, l = a.proc);
  }, [l, s, o, i, r];
}
class fl extends ee {
  constructor(e) {
    super(), $(this, e, dl, ul, U, { proc: 0 });
  }
}
function gl(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = we(
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
    m(s, o) {
      l && l.m(s, o), e = !0;
    },
    p(s, o) {
      l && l.p && (!e || o & /*$$scope*/
      8192) && ke(
        l,
        t,
        s,
        /*$$scope*/
        s[13],
        e ? ye(
          t,
          /*$$scope*/
          s[13],
          o,
          null
        ) : Re(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (Z(l, s), e = !0);
    },
    o(s) {
      L(l, s), e = !1;
    },
    d(s) {
      l && l.d(s);
    }
  };
}
function hl(n) {
  let e, t, l;
  const s = [
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
      class: oe({
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
  var o = (
    /*component*/
    n[2]
  );
  function i(r, a) {
    let c = {
      $$slots: { default: [gl] },
      $$scope: { ctx: r }
    };
    for (let u = 0; u < s.length; u += 1)
      c = V(c, s[u]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (c = V(c, pe(s, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      a & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          r[8],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: oe({
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
      a & /*props*/
      128 && Xe(
        /*props*/
        r[7]
      ),
      a & /*$$restProps*/
      512 && Xe(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: c };
  }
  return o && (e = It(o, i(n)), n[12](e)), {
    c() {
      e && ie(e.$$.fragment), t = ue();
    },
    m(r, a) {
      e && le(e, r, a), D(r, t, a), l = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      r[2])) {
        if (e) {
          Ce();
          const c = e;
          L(c.$$.fragment, 1, 0, () => {
            se(c, 1);
          }), ve();
        }
        o ? (e = It(o, i(r, a)), r[12](e), ie(e.$$.fragment), Z(e.$$.fragment, 1), le(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? pe(s, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          a & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              r[8],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: oe({
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
          a & /*props*/
          128 && Xe(
            /*props*/
            r[7]
          ),
          a & /*$$restProps*/
          512 && Xe(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (c.$$scope = { dirty: a, ctx: r }), e.$set(c);
      }
    },
    i(r) {
      l || (e && Z(e.$$.fragment, r), l = !0);
    },
    o(r) {
      e && L(e.$$.fragment, r), l = !1;
    },
    d(r) {
      r && H(t), n[12](null), e && se(e, r);
    }
  };
}
const _e = {
  component: xt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function ml(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let s = Ee(e, l), { $$slots: o = {}, $$scope: i } = e, { use: r = [] } = e, { class: a = "" } = e, c;
  const u = _e.class, d = {}, h = [], A = _e.contexts, w = _e.props;
  let { component: P = _e.component } = e, { tag: m = P === xt ? _e.tag : void 0 } = e;
  Object.entries(_e.classMap).forEach(([p, y]) => {
    const E = ht(y);
    E && "subscribe" in E && h.push(E.subscribe((R) => {
      t(5, d[p] = R, d);
    }));
  });
  const k = Qe(be());
  for (let p in A)
    A.hasOwnProperty(p) && he(p, A[p]);
  ft(() => {
    for (const p of h)
      p();
  });
  function v() {
    return c.getElement();
  }
  function g(p) {
    ce[p ? "unshift" : "push"](() => {
      c = p, t(4, c);
    });
  }
  return n.$$set = (p) => {
    e = V(V({}, e), xe(p)), t(9, s = Ee(e, l)), "use" in p && t(0, r = p.use), "class" in p && t(1, a = p.class), "component" in p && t(2, P = p.component), "tag" in p && t(3, m = p.tag), "$$scope" in p && t(13, i = p.$$scope);
  }, [
    r,
    a,
    P,
    m,
    c,
    d,
    u,
    w,
    k,
    s,
    v,
    o,
    g,
    i
  ];
}
class _l extends ee {
  constructor(e) {
    super(), $(this, e, ml, hl, U, {
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
const Mt = Object.assign({}, _e);
function X(n) {
  return new Proxy(_l, {
    construct: function(e, t) {
      return Object.assign(_e, Mt, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(_e, Mt, n), e[t];
    }
  });
}
X({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
X({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
X({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
X({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
X({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
X({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function pl(n) {
  let e, t, l, s, o, i;
  const r = (
    /*#slots*/
    n[8].default
  ), a = we(
    r,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let c = [
    {
      class: t = oe({
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
  ], u = {};
  for (let d = 0; d < c.length; d += 1)
    u = V(u, c[d]);
  return {
    c() {
      e = I("span"), a && a.c(), me(e, u);
    },
    m(d, h) {
      D(d, e, h), a && a.m(e, null), n[9](e), s = !0, o || (i = [
        Q(l = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], o = !0);
    },
    p(d, [h]) {
      a && a.p && (!s || h & /*$$scope*/
      128) && ke(
        a,
        r,
        d,
        /*$$scope*/
        d[7],
        s ? ye(
          r,
          /*$$scope*/
          d[7],
          h,
          null
        ) : Re(
          /*$$scope*/
          d[7]
        ),
        null
      ), me(e, u = pe(c, [
        (!s || h & /*className*/
        2 && t !== (t = oe({
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
        h & /*$$restProps*/
        32 && /*$$restProps*/
        d[5]
      ])), l && re(l.update) && h & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      s || (Z(a, d), s = !0);
    },
    o(d) {
      L(a, d), s = !1;
    },
    d(d) {
      d && H(e), a && a.d(d), n[9](null), o = !1, J(i);
    }
  };
}
function bl(n, e, t) {
  const l = ["use", "class", "getElement"];
  let s = Ee(e, l), { $$slots: o = {}, $$scope: i } = e;
  const r = Qe(be());
  let { use: a = [] } = e, { class: c = "" } = e, u, d = ht("SMUI:list:graphic:menu-selection-group");
  function h() {
    return u;
  }
  function A(w) {
    ce[w ? "unshift" : "push"](() => {
      u = w, t(2, u);
    });
  }
  return n.$$set = (w) => {
    e = V(V({}, e), xe(w)), t(5, s = Ee(e, l)), "use" in w && t(0, a = w.use), "class" in w && t(1, c = w.class), "$$scope" in w && t(7, i = w.$$scope);
  }, [
    a,
    c,
    u,
    r,
    d,
    s,
    h,
    i,
    o,
    A
  ];
}
class Cl extends ee {
  constructor(e) {
    super(), $(this, e, bl, pl, U, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
X({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
X({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
X({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
X({
  class: "mdc-menu__selection-group-icon",
  component: Cl
});
X({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
X({
  class: "mdc-dialog__title",
  tag: "h2"
});
X({
  class: "mdc-dialog__content",
  tag: "div"
});
X({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
X({
  class: "smui-paper__content",
  tag: "div"
});
X({
  class: "smui-paper__title",
  tag: "h5"
});
X({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function vl(n) {
  let e, t;
  return {
    c() {
      e = Pe("svg"), t = Pe("path"), _(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), _(e, "xmlns", "http://www.w3.org/2000/svg"), _(e, "viewBox", "0 -960 960 960"), _(e, "width", "24"), _(e, "height", "24"), _(e, "fill", "#004552");
    },
    m(l, s) {
      D(l, e, s), C(e, t);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && H(e);
    }
  };
}
class Il extends ee {
  constructor(e) {
    super(), $(this, e, null, vl, U, {});
  }
}
function Al(n) {
  let e, t;
  return {
    c() {
      e = Pe("svg"), t = Pe("path"), _(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), _(e, "xmlns", "http://www.w3.org/2000/svg"), _(e, "height", "24px"), _(e, "viewBox", "0 -960 960 960"), _(e, "width", "24px"), _(e, "fill", "#004552");
    },
    m(l, s) {
      D(l, e, s), C(e, t);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && H(e);
    }
  };
}
class wl extends ee {
  constructor(e) {
    super(), $(this, e, null, Al, U, {});
  }
}
function yl(n) {
  let e, t;
  return {
    c() {
      e = Pe("svg"), t = Pe("path"), _(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), _(e, "xmlns", "http://www.w3.org/2000/svg"), _(e, "height", "24px"), _(e, "viewBox", "0 -960 960 960"), _(e, "width", "24px"), _(e, "fill", "#004552");
    },
    m(l, s) {
      D(l, e, s), C(e, t);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && H(e);
    }
  };
}
class kl extends ee {
  constructor(e) {
    super(), $(this, e, null, yl, U, {});
  }
}
function Rl(n) {
  let e, t, l, s;
  const o = (
    /*#slots*/
    n[7].default
  ), i = we(
    o,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      e = I("span"), i && i.c(), Fe(e, "display", "inline-block");
    },
    m(r, a) {
      D(r, e, a), i && i.m(e, null), n[8](e), t = !0, l || (s = [
        z(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[1]
        ),
        z(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[2]
        )
      ], l = !0);
    },
    p(r, [a]) {
      i && i.p && (!t || a & /*$$scope*/
      64) && ke(
        i,
        o,
        r,
        /*$$scope*/
        r[6],
        t ? ye(
          o,
          /*$$scope*/
          r[6],
          a,
          null
        ) : Re(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      t || (Z(i, r), t = !0);
    },
    o(r) {
      L(i, r), t = !1;
    },
    d(r) {
      r && H(e), i && i.d(r), n[8](null), l = !1, J(s);
    }
  };
}
function El(n, e, t) {
  let { $$slots: l = {}, $$scope: s } = e, { content: o = "" } = e, { hoverDelay: i = 300 } = e, { hideDelay: r = 500 } = e, a, c, u, d, h = { left: 0, top: 0, width: 0 };
  function A() {
    clearTimeout(c), h = u.getBoundingClientRect(), a = setTimeout(
      () => {
        P();
      },
      i
    );
  }
  function w() {
    clearTimeout(a), c = setTimeout(
      () => {
        m();
      },
      r
    );
  }
  function P() {
    m(), d = document.createElement("div"), d.setAttribute("role", "tooltip"), d.textContent = o, Object.assign(d.style, {
      position: "fixed",
      left: `${h.left + h.width / 2}px`,
      top: `${h.top - 8}px`,
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
  function m() {
    d && d.parentNode && (d.parentNode.removeChild(d), d = null);
  }
  ft(() => {
    clearTimeout(a), clearTimeout(c), m();
  });
  function k(v) {
    ce[v ? "unshift" : "push"](() => {
      u = v, t(0, u);
    });
  }
  return n.$$set = (v) => {
    "content" in v && t(3, o = v.content), "hoverDelay" in v && t(4, i = v.hoverDelay), "hideDelay" in v && t(5, r = v.hideDelay), "$$scope" in v && t(6, s = v.$$scope);
  }, [
    u,
    A,
    w,
    o,
    i,
    r,
    s,
    l,
    k
  ];
}
class Sl extends ee {
  constructor(e) {
    super(), $(this, e, El, Rl, U, { content: 3, hoverDelay: 4, hideDelay: 5 });
  }
}
const Hl = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Hl.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Gt(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Dl(n) {
  let e = (
    /*i*/
    n[20] + 1 + ""
  ), t;
  return {
    c() {
      t = F(e);
    },
    m(l, s) {
      D(l, t, s);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && H(t);
    }
  };
}
function Nl(n) {
  let e, t, l, s;
  const o = [Pl, Wl, Zl], i = [];
  function r(a, c) {
    return (
      /*pluginStatus*/
      a[3][
        /*plugin*/
        a[18].id
      ] === "check" ? 0 : (
        /*pluginStatus*/
        a[3][
          /*plugin*/
          a[18].id
        ] === "error" ? 1 : 2
      )
    );
  }
  return e = r(n), t = i[e] = o[e](n), {
    c() {
      t.c(), l = ue();
    },
    m(a, c) {
      i[e].m(a, c), D(a, l, c), s = !0;
    },
    p(a, c) {
      let u = e;
      e = r(a), e !== u && (Ce(), L(i[u], 1, 1, () => {
        i[u] = null;
      }), ve(), t = i[e], t || (t = i[e] = o[e](a), t.c()), Z(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      s || (Z(t), s = !0);
    },
    o(a) {
      L(t), s = !1;
    },
    d(a) {
      a && H(l), i[e].d(a);
    }
  };
}
function Zl(n) {
  let e, t;
  return e = new kl({}), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Wl(n) {
  let e, t;
  return e = new wl({}), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Pl(n) {
  let e, t;
  return e = new Il({}), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Tl(n) {
  let e, t, l, s, o, i, r;
  const a = [Nl, Dl], c = [];
  function u(h, A) {
    return A & /*visited, plugins, tagName*/
    52 && (t = null), t == null && (t = !!/*visited*/
    (h[5].includes(
      /*plugin*/
      h[18].id
    ) && /*plugin*/
    h[18].id !== /*tagName*/
    h[4])), t ? 0 : 1;
  }
  l = u(n, -1), s = c[l] = a[l](n);
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
      e = I("button"), s.c(), _(e, "class", "svelte-1xq5awa"), Le(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), Le(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), Le(
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
    m(h, A) {
      D(h, e, A), c[l].m(e, null), o = !0, i || (r = z(e, "click", d), i = !0);
    },
    p(h, A) {
      n = h;
      let w = l;
      l = u(n, A), l === w ? c[l].p(n, A) : (Ce(), L(c[w], 1, 1, () => {
        c[w] = null;
      }), ve(), s = c[l], s ? s.p(n, A) : (s = c[l] = a[l](n), s.c()), Z(s, 1), s.m(e, null)), (!o || A & /*visited, plugins*/
      36) && Le(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), (!o || A & /*plugins, tagName*/
      20) && Le(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), (!o || A & /*visited, plugins, tagName*/
      52) && Le(
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
    i(h) {
      o || (Z(s), o = !0);
    },
    o(h) {
      L(s), o = !1;
    },
    d(h) {
      h && H(e), c[l].d(), i = !1, r();
    }
  };
}
function Bt(n) {
  let e;
  return {
    c() {
      e = I("div"), _(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      D(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function Ot(n) {
  let e, t, l, s, o = (
    /*plugin*/
    n[18].name + ""
  ), i, r, a, c;
  t = new Sl({
    props: {
      text: (
        /*tooltipText*/
        n[6][
          /*plugin*/
          n[18].id
        ]
      ),
      position: "bottom",
      $$slots: { default: [Tl] },
      $$scope: { ctx: n }
    }
  });
  let u = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && Bt()
  );
  return {
    c() {
      e = I("div"), ie(t.$$.fragment), l = G(), s = I("p"), i = F(o), r = G(), u && u.c(), a = ue(), _(s, "class", "svelte-1xq5awa"), _(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(d, h) {
      D(d, e, h), le(t, e, null), C(e, l), C(e, s), C(s, i), D(d, r, h), u && u.m(d, h), D(d, a, h), c = !0;
    },
    p(d, h) {
      const A = {};
      h & /*tooltipText, plugins*/
      68 && (A.text = /*tooltipText*/
      d[6][
        /*plugin*/
        d[18].id
      ]), h & /*$$scope, visited, plugins, tagName, pluginStatus*/
      2097212 && (A.$$scope = { dirty: h, ctx: d }), t.$set(A), (!c || h & /*plugins*/
      4) && o !== (o = /*plugin*/
      d[18].name + "") && ne(i, o), /*i*/
      d[20] < /*plugins*/
      d[2].length - 1 ? u || (u = Bt(), u.c(), u.m(a.parentNode, a)) : u && (u.d(1), u = null);
    },
    i(d) {
      c || (Z(t.$$.fragment, d), c = !0);
    },
    o(d) {
      L(t.$$.fragment, d), c = !1;
    },
    d(d) {
      d && (H(e), H(r), H(a)), se(t), u && u.d(d);
    }
  };
}
function jt(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && it(n)
  );
  return {
    c() {
      l && l.c(), t = ue();
    },
    m(s, o) {
      l && l.m(s, o), D(s, t, o);
    },
    p(s, o) {
      /*tagName*/
      s[4] ? e ? U(
        e,
        /*tagName*/
        s[4]
      ) ? (l.d(1), l = it(s), e = /*tagName*/
      s[4], l.c(), l.m(t.parentNode, t)) : l.p(s, o) : (l = it(s), e = /*tagName*/
      s[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      s[4]);
    },
    d(s) {
      s && H(t), l && l.d(s);
    }
  };
}
function it(n) {
  let e, t, l, s;
  return {
    c() {
      e = I(
        /*tagName*/
        n[4]
      ), Ve(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(o, i) {
      D(o, e, i), l || (s = Q(t = Gl.call(null, e, {
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
    p(o, i) {
      t && re(t.update) && i & /*doc, editCount*/
      3 && t.update.call(null, {
        doc: (
          /*doc*/
          o[0]
        ),
        editCount: (
          /*editCount*/
          o[1]
        )
      });
    },
    d(o) {
      o && H(e), l = !1, s();
    }
  };
}
function Ll(n) {
  let e, t, l, s, o, i, r, a, c, u, d, h, A, w, P, m, k, v = je(
    /*plugins*/
    n[2]
  ), g = [];
  for (let E = 0; E < v.length; E += 1)
    g[E] = Ot(Gt(n, v, E));
  const p = (E) => L(g[E], 1, 1, () => {
    g[E] = null;
  });
  let y = (
    /*tagName*/
    n[4] && jt(n)
  );
  return {
    c() {
      e = I("div"), t = I("div"), l = I("button"), l.textContent = "exit", s = G(), o = I("p"), o.textContent = "Plugin Flow", i = G(), r = I("div");
      for (let E = 0; E < g.length; E += 1)
        g[E].c();
      a = G(), c = I("div"), u = I("button"), u.textContent = "Back", d = G(), h = I("button"), h.textContent = "Next", A = G(), y && y.c(), w = ue(), _(l, "class", "back-button svelte-1xq5awa"), _(o, "class", "plugin-flow-title svelte-1xq5awa"), Fe(t, "display", "flex"), Fe(t, "align-items", "center"), Fe(t, "gap", "0.5rem"), _(t, "class", "svelte-1xq5awa"), _(r, "class", "plugin-steps svelte-1xq5awa"), _(u, "class", "back-button svelte-1xq5awa"), _(h, "class", "next-button svelte-1xq5awa"), _(c, "class", "stepper-navigation svelte-1xq5awa"), _(e, "class", "stepper svelte-1xq5awa");
    },
    m(E, R) {
      D(E, e, R), C(e, t), C(t, l), C(t, s), C(t, o), C(e, i), C(e, r);
      for (let N = 0; N < g.length; N += 1)
        g[N] && g[N].m(r, null);
      C(e, a), C(e, c), C(c, u), C(c, d), C(c, h), D(E, A, R), y && y.m(E, R), D(E, w, R), P = !0, m || (k = [
        z(
          l,
          "click",
          /*click_handler*/
          n[12]
        ),
        z(
          u,
          "click",
          /*previousPlugin*/
          n[10]
        ),
        z(
          h,
          "click",
          /*nextPlugin*/
          n[9]
        )
      ], m = !0);
    },
    p(E, [R]) {
      if (R & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      380) {
        v = je(
          /*plugins*/
          E[2]
        );
        let N;
        for (N = 0; N < v.length; N += 1) {
          const B = Gt(E, v, N);
          g[N] ? (g[N].p(B, R), Z(g[N], 1)) : (g[N] = Ot(B), g[N].c(), Z(g[N], 1), g[N].m(r, null));
        }
        for (Ce(), N = v.length; N < g.length; N += 1)
          p(N);
        ve();
      }
      /*tagName*/
      E[4] ? y ? y.p(E, R) : (y = jt(E), y.c(), y.m(w.parentNode, w)) : y && (y.d(1), y = null);
    },
    i(E) {
      if (!P) {
        for (let R = 0; R < v.length; R += 1)
          Z(g[R]);
        P = !0;
      }
    },
    o(E) {
      g = g.filter(Boolean);
      for (let R = 0; R < g.length; R += 1)
        L(g[R]);
      P = !1;
    },
    d(E) {
      E && (H(e), H(A), H(w)), pn(g, E), y && y.d(E), m = !1, J(k);
    }
  };
}
function Ml() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Gl(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Bl(n, e, t) {
  let l, { doc: s } = e, { editCount: o = -1 } = e, { host: i } = e, { plugins: r = [] } = e, a = null, c = [];
  const u = ["check", "warning", "error"];
  let d = {};
  gt();
  function h(g) {
    var p;
    (p = Ml()) === null || p === void 0 || p.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: g },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  function A(g) {
    return mt(this, void 0, void 0, function* () {
      const p = yield import(g.src);
      if (customElements.get(g.id) || customElements.define(g.id, p.default), t(4, a = g.id), !c.includes(g.id)) {
        t(5, c = [...c, g.id]);
        const y = r.findIndex((E) => E.id === g.id);
        t(3, d = Object.assign(Object.assign({}, d), {
          [g.id]: u[y % u.length]
        }));
      }
    });
  }
  function w() {
    m(1);
  }
  function P() {
    m(-1);
  }
  function m(g) {
    const p = r.findIndex((y) => y.id === a);
    A(r[(p + g + r.length) % r.length]);
  }
  dt(() => {
    r.length && A(r[0]), h(!1);
  });
  const k = () => h(!0), v = (g) => A(g);
  return n.$$set = (g) => {
    "doc" in g && t(0, s = g.doc), "editCount" in g && t(1, o = g.editCount), "host" in g && t(11, i = g.host), "plugins" in g && t(2, r = g.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = r.reduce(
      (g, p) => {
        const y = d[p.id];
        return g[p.id] = y === "error" ? `Resolve errors in ${p.name}` : y === "warning" ? `Check warnings for ${p.name}` : `Load the ${p.name} editor`, g;
      },
      {}
    ));
  }, [
    s,
    o,
    r,
    d,
    a,
    c,
    l,
    h,
    A,
    w,
    P,
    i,
    k,
    v
  ];
}
class Ol extends ee {
  constructor(e) {
    super(), $(this, e, Bl, Ll, U, {
      doc: 0,
      editCount: 1,
      host: 11,
      plugins: 2
    });
  }
}
function jl(n) {
  let e, t;
  return e = new ol({
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
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    p(l, s) {
      const o = {};
      s & /*processes*/
      8 && (o.processes = /*processes*/
      l[3]), s & /*loading*/
      64 && (o.loading = /*loading*/
      l[6]), s & /*errorMsg*/
      128 && (o.errorMsg = /*errorMsg*/
      l[7]), e.$set(o);
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function zl(n) {
  let e, t;
  return e = new fl({ props: { proc: (
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
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    p(l, s) {
      const o = {};
      s & /*selected*/
      16 && (o.proc = /*selected*/
      l[4]), e.$set(o);
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function ql(n) {
  let e, t;
  return e = new Ol({
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
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    p(l, s) {
      const o = {};
      s & /*doc*/
      1 && (o.doc = /*doc*/
      l[0]), s & /*editCount*/
      2 && (o.editCount = /*editCount*/
      l[1]), s & /*host*/
      4 && (o.host = /*host*/
      l[2]), s & /*running*/
      32 && (o.plugins = /*running*/
      l[5].plugins), e.$set(o);
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Vl(n) {
  let e, t, l, s;
  const o = [ql, zl, jl], i = [];
  function r(a, c) {
    return (
      /*running*/
      a[5] ? 0 : (
        /*selected*/
        a[4] ? 1 : 2
      )
    );
  }
  return e = r(n), t = i[e] = o[e](n), {
    c() {
      t.c(), l = ue();
    },
    m(a, c) {
      i[e].m(a, c), D(a, l, c), s = !0;
    },
    p(a, [c]) {
      let u = e;
      e = r(a), e === u ? i[e].p(a, c) : (Ce(), L(i[u], 1, 1, () => {
        i[u] = null;
      }), ve(), t = i[e], t ? t.p(a, c) : (t = i[e] = o[e](a), t.c()), Z(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      s || (Z(t), s = !0);
    },
    o(a) {
      L(t), s = !1;
    },
    d(a) {
      a && H(l), i[e].d(a);
    }
  };
}
function Ul(n, e, t) {
  let { doc: l } = e, { editCount: s = -1 } = e, { host: o } = e, i = [], r = null, a = null, c = !0, u = "";
  const d = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+eHl6LWVkaXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3h5ei5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPgogICAgICAgIDxuYW1lPk5ldHdvcmsgRXhwbG9yZXI8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CgogIDxwcm9jZXNzPgogICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+CiAgICA8dmVyc2lvbj4wLjAuMTwvdmVyc2lvbj4KICAgIDxuYW1lPlN0YW5kYXJkIFByb2Nlc3MgMzwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj4KICAgICAgVGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seQogICAgPC9kZXNjcmlwdGlvbj4KCiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+ZW5naW5lZXJpbmctd2l6YXJkPC9pZD4KICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CgogICAgICA8cGx1Z2luPgogICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5TaXRpcGU8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, h = (g) => {
    var p, y;
    return (y = (p = g == null ? void 0 : g.textContent) === null || p === void 0 ? void 0 : p.trim()) !== null && y !== void 0 ? y : "";
  }, A = (g) => Array.from(g.getElementsByTagName("process")).map((p) => {
    const y = Array.from(p.querySelectorAll("plugins-sequence > plugin")).map((E) => ({
      id: h(E.querySelector("id")),
      name: h(E.querySelector("name")),
      src: h(E.querySelector("src"))
    }));
    return {
      id: h(p.querySelector(":scope > id")),
      version: h(p.querySelector(":scope > version")),
      name: h(p.querySelector(":scope > name")),
      description: h(p.querySelector(":scope > description")),
      plugins: y
    };
  });
  function w() {
    return mt(this, void 0, void 0, function* () {
      t(6, c = !0), t(7, u = "");
      try {
        const g = yield fetch(d, { cache: "no-cache" });
        if (!g.ok)
          throw new Error(`HTTP ${g.status}`);
        const p = new DOMParser().parseFromString(yield g.text(), "application/xml");
        if (p.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, i = A(p));
      } catch (g) {
        t(3, i = []), t(7, u = g.message || "Failed to load processes.");
      } finally {
        t(6, c = !1);
      }
    });
  }
  dt(w);
  function P(g) {
    t(5, a = g), t(4, r = null);
  }
  function m(g) {
    t(4, r = g.detail);
  }
  function k(g) {
    P(g.detail);
  }
  function v() {
    t(4, r = null);
  }
  return n.$$set = (g) => {
    "doc" in g && t(0, l = g.doc), "editCount" in g && t(1, s = g.editCount), "host" in g && t(2, o = g.host);
  }, [
    l,
    s,
    o,
    i,
    r,
    a,
    c,
    u,
    m,
    k,
    v
  ];
}
class Xl extends ee {
  constructor(e) {
    super(), $(this, e, Ul, Vl, U, { doc: 0, editCount: 1, host: 2 });
  }
}
function zt(n) {
  let e, t;
  return e = new Xl({
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
      ie(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    p(l, s) {
      const o = {};
      s & /*doc*/
      1 && (o.doc = /*doc*/
      l[0]), s & /*editCount*/
      4 && (o.editCount = /*editCount*/
      l[2]), e.$set(o);
    },
    i(l) {
      t || (Z(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Yl(n) {
  let e, t, l, s, o, i = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && zt(n)
  );
  return {
    c() {
      i && i.c(), e = G(), t = I("input"), l = G(), s = I("input"), _(t, "type", "hidden"), _(t, "name", "package-name"), t.value = Ft, _(s, "type", "hidden"), _(s, "name", "package-version"), s.value = Jt;
    },
    m(r, a) {
      i && i.m(r, a), D(r, e, a), D(r, t, a), D(r, l, a), D(r, s, a), o = !0;
    },
    p(r, [a]) {
      /*doc*/
      r[0] || /*dev*/
      r[1] ? i ? (i.p(r, a), a & /*doc, dev*/
      3 && Z(i, 1)) : (i = zt(r), i.c(), Z(i, 1), i.m(e.parentNode, e)) : i && (Ce(), L(i, 1, 1, () => {
        i = null;
      }), ve());
    },
    i(r) {
      o || (Z(i), o = !0);
    },
    o(r) {
      L(i), o = !1;
    },
    d(r) {
      r && (H(e), H(t), H(l), H(s)), i && i.d(r);
    }
  };
}
function Fl(n, e, t) {
  let { doc: l } = e, { dev: s = !1 } = e, { editCount: o = 0 } = e;
  return console.log("editcount", o), n.$$set = (i) => {
    "doc" in i && t(0, l = i.doc), "dev" in i && t(1, s = i.dev), "editCount" in i && t(2, o = i.editCount);
  }, [l, s, o];
}
class Jl extends ee {
  constructor(e) {
    super(), $(this, e, Fl, Yl, U, { doc: 0, dev: 1, editCount: 2 });
  }
}
class $l extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Jl({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = Kl();
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
function Kl() {
  const n = `${Ft}-v${Jt}-style`, e = xl(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function xl() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  $l as default
};
