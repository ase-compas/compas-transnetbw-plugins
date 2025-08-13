var gn = Object.defineProperty;
var hn = (n, e, t) => e in n ? gn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var et = (n, e, t) => (hn(n, typeof e != "symbol" ? e + "" : e, t), t);
function B() {
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
function pt() {
  return /* @__PURE__ */ Object.create(null);
}
function J(n) {
  n.forEach(qt);
}
function ie(n) {
  return typeof n == "function";
}
function U(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function mn(n) {
  return Object.keys(n).length === 0;
}
function _n(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return B;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function tt(n, e, t) {
  n.$$.on_destroy.push(_n(e, t));
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
      const o = [], a = Math.max(e.dirty.length, s.length);
      for (let i = 0; i < a; i += 1)
        o[i] = e.dirty[i] | s[i];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function ke(n, e, t, l, s, o) {
  if (s) {
    const a = Vt(e, t, l, o);
    n.p(a, s);
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
function Ke(n) {
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
function pn(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function bt(n, e, t) {
  return n.set(t), e;
}
function x(n) {
  return n && ie(n.destroy) ? n.destroy : B;
}
function b(n, e) {
  n.appendChild(e);
}
function Z(n, e, t) {
  n.insertBefore(e, t || null);
}
function H(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function bn(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function v(n) {
  return document.createElement(n);
}
function Pe(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function X(n) {
  return document.createTextNode(n);
}
function G() {
  return X(" ");
}
function ce() {
  return X("");
}
function z(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function m(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Cn = ["width", "height"];
function he(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Cn.indexOf(l) === -1 ? n[l] = e[l] : m(n, l, e[l]);
}
function Ct(n, e) {
  for (const t in e)
    m(n, t, e[t]);
}
function vn(n, e) {
  Object.keys(e).forEach((t) => {
    In(n, t, e[t]);
  });
}
function In(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : m(n, e, t);
}
function Ve(n) {
  return /-/.test(n) ? vn : he;
}
function An(n) {
  return Array.from(n.childNodes);
}
function $(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function nt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function Me(n, e, t) {
  n.classList.toggle(e, !!t);
}
function wn(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function vt(n, e) {
  return new n(e);
}
let Xe;
function qe(n) {
  Xe = n;
}
function be() {
  if (!Xe)
    throw new Error("Function called outside component initialization");
  return Xe;
}
function dt(n) {
  be().$$.on_mount.push(n);
}
function Xt(n) {
  be().$$.on_destroy.push(n);
}
function ft() {
  const n = be();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const o = wn(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return s.slice().forEach((a) => {
        a.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ge(n, e) {
  return be().$$.context.set(n, e), e;
}
function gt(n) {
  return be().$$.context.get(n);
}
const Te = [], _e = [];
let je = [];
const It = [], yn = /* @__PURE__ */ Promise.resolve();
let at = !1;
function kn() {
  at || (at = !0, yn.then(Ut));
}
function ct(n) {
  je.push(n);
}
const lt = /* @__PURE__ */ new Set();
let Ge = 0;
function Ut() {
  if (Ge !== 0)
    return;
  const n = Xe;
  do {
    try {
      for (; Ge < Te.length; ) {
        const e = Te[Ge];
        Ge++, qe(e), Rn(e.$$);
      }
    } catch (e) {
      throw Te.length = 0, Ge = 0, e;
    }
    for (qe(null), Te.length = 0, Ge = 0; _e.length; )
      _e.pop()();
    for (let e = 0; e < je.length; e += 1) {
      const t = je[e];
      lt.has(t) || (lt.add(t), t());
    }
    je.length = 0;
  } while (Te.length);
  for (; It.length; )
    It.pop()();
  at = !1, lt.clear(), qe(n);
}
function Rn(n) {
  if (n.fragment !== null) {
    n.update(), J(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ct);
  }
}
function En(n) {
  const e = [], t = [];
  je.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), je = e;
}
const Fe = /* @__PURE__ */ new Set();
let De;
function Ce() {
  De = {
    r: 0,
    c: [],
    p: De
    // parent group
  };
}
function ve() {
  De.r || J(De.c), De = De.p;
}
function D(n, e) {
  n && n.i && (Fe.delete(n), n.i(e));
}
function M(n, e, t, l) {
  if (n && n.o) {
    if (Fe.has(n))
      return;
    Fe.add(n), De.c.push(() => {
      Fe.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Oe(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Yt(n, e) {
  n.d(1), e.delete(n.key);
}
function Ft(n, e, t, l, s, o, a, i, r, c, u, d) {
  let h = n.length, I = o.length, w = h;
  const L = {};
  for (; w--; )
    L[n[w].key] = w;
  const _ = [], k = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), g = [];
  for (w = I; w--; ) {
    const y = d(s, o, w), W = t(y);
    let T = a.get(W);
    T ? g.push(() => T.p(y, e)) : (T = c(W, y), T.c()), k.set(W, _[w] = T), W in L && R.set(W, Math.abs(w - L[W]));
  }
  const p = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set();
  function E(y) {
    D(y, 1), y.m(i, u), a.set(y.key, y), u = y.first, I--;
  }
  for (; h && I; ) {
    const y = _[I - 1], W = n[h - 1], T = y.key, C = W.key;
    y === W ? (u = y.first, h--, I--) : k.has(C) ? !a.has(T) || p.has(T) ? E(y) : A.has(C) ? h-- : R.get(T) > R.get(C) ? (A.add(T), E(y)) : (p.add(C), h--) : (r(W, a), h--);
  }
  for (; h--; ) {
    const y = n[h];
    k.has(y.key) || r(y, a);
  }
  for (; I; )
    E(_[I - 1]);
  return J(g), _;
}
function pe(n, e) {
  const t = {}, l = {}, s = { $$scope: 1 };
  let o = n.length;
  for (; o--; ) {
    const a = n[o], i = e[o];
    if (i) {
      for (const r in a)
        r in i || (l[r] = 1);
      for (const r in i)
        s[r] || (t[r] = i[r], s[r] = 1);
      n[o] = i;
    } else
      for (const r in a)
        s[r] = 1;
  }
  for (const a in l)
    a in t || (t[a] = void 0);
  return t;
}
function Ue(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function re(n) {
  n && n.c();
}
function le(n, e, t) {
  const { fragment: l, after_update: s } = n.$$;
  l && l.m(e, t), ct(() => {
    const o = n.$$.on_mount.map(qt).filter(ie);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : J(o), n.$$.on_mount = [];
  }), s.forEach(ct);
}
function se(n, e) {
  const t = n.$$;
  t.fragment !== null && (En(t.after_update), J(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Sn(n, e) {
  n.$$.dirty[0] === -1 && (Te.push(n), kn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(n, e, t, l, s, o, a = null, i = [-1]) {
  const r = Xe;
  qe(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: B,
    not_equal: s,
    bound: pt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (r ? r.$$.context : [])),
    // everything else
    callbacks: pt(),
    dirty: i,
    skip_bound: !1,
    root: e.target || r.$$.root
  };
  a && a(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (d, h, ...I) => {
    const w = I.length ? I[0] : h;
    return c.ctx && s(c.ctx[d], c.ctx[d] = w) && (!c.skip_bound && c.bound[d] && c.bound[d](w), u && Sn(n, d)), h;
  }) : [], c.update(), u = !0, J(c.before_update), c.fragment = l ? l(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = An(e.target);
      c.fragment && c.fragment.l(d), d.forEach(H);
    } else
      c.fragment && c.fragment.c();
    e.intro && D(n.$$.fragment), le(n, e.target, e.anchor), Ut();
  }
  qe(r);
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
    et(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    et(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    se(this, 1), this.$destroy = B;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ie(t))
      return B;
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
    this.$$set && !mn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Hn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Hn);
const Jt = "archive-explorer", Kt = "0.0.1";
var ut = function(n, e) {
  return ut = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var s in l)
      Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
  }, ut(n, e);
};
function Zn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ut(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Je = function() {
  return Je = Object.assign || function(e) {
    for (var t, l = 1, s = arguments.length; l < s; l++) {
      t = arguments[l];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Je.apply(this, arguments);
};
function ht(n, e, t, l) {
  function s(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function i(u) {
      try {
        c(l.next(u));
      } catch (d) {
        a(d);
      }
    }
    function r(u) {
      try {
        c(l.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : s(u.value).then(i, r);
    }
    c((l = l.apply(n, e || [])).next());
  });
}
function Wn(n, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, l, s, o, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = i(0), a.throw = i(1), a.return = i(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function i(c) {
    return function(u) {
      return r([c, u]);
    };
  }
  function r(c) {
    if (l)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, c[0] && (t = 0)), t; )
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
var Dn = (
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
function Nn(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Qt(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Qt(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Pn(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Nn,
  estimateScrollWidth: Pn,
  matches: Qt
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
var fe = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, At = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, We = {
  ARIA_SELECTED: At.ARIA_SELECTED,
  ARIA_SORT: At.ARIA_SORT
}, Q;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Q || (Q = {}));
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
var Mn = (
  /** @class */
  function(n) {
    Zn(e, n);
    function e(t) {
      return n.call(this, Je(Je({}, e.defaultAdapter), t)) || this;
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
      return ht(this, void 0, void 0, function() {
        return Wn(this, function(t) {
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
      for (var l = t.columnId, s = t.columnIndex, o = t.headerCell, a = 0; a < this.adapter.getHeaderCellCount(); a++)
        a !== s && (this.adapter.removeClassNameByHeaderCellIndex(a, fe.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, fe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, We.ARIA_SORT, Q.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Q.NONE));
      this.adapter.setClassNameByHeaderCellIndex(s, fe.HEADER_CELL_SORTED);
      var i = this.adapter.getAttributeByHeaderCellIndex(s, We.ARIA_SORT), r = Q.NONE;
      i === Q.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(s, fe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, We.ARIA_SORT, Q.DESCENDING), r = Q.DESCENDING) : i === Q.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(s, fe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, We.ARIA_SORT, Q.ASCENDING), r = Q.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(s, We.ARIA_SORT, Q.ASCENDING), r = Q.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(s, r), this.adapter.notifySortAction({
        columnId: l,
        columnIndex: s,
        headerCell: o,
        sortValue: r
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
      }), this.adapter.addClass(fe.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(fe.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, fe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, We.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, fe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, We.ARIA_SELECTED, "false"));
    }, e;
  }(Dn)
);
const Be = [];
function st(n, e = B) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function s(i) {
    if (U(n, i) && (n = i, t)) {
      const r = !Be.length;
      for (const c of l)
        c[1](), Be.push(c, n);
      if (r) {
        for (let c = 0; c < Be.length; c += 2)
          Be[c][0](Be[c + 1]);
        Be.length = 0;
      }
    }
  }
  function o(i) {
    s(i(n));
  }
  function a(i, r = B) {
    const c = [i, r];
    return l.add(c), l.size === 1 && (t = e(s, o) || B), i(n), () => {
      l.delete(c), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: o, subscribe: a };
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
    const a = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, l), { detail: t }));
    n == null || n.dispatchEvent(a), a.defaultPrevented && o.preventDefault();
  }
  return o;
}
function wt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s], a = o.indexOf("$");
    a !== -1 && e.indexOf(o.substring(0, a + 1)) !== -1 || e.indexOf(o) === -1 && (l[o] = n[o]);
  }
  return l;
}
const yt = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Gn = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Qe(n) {
  let e, t = [];
  n.$on = (s, o) => {
    let a = s, i = () => {
    };
    return e ? i = e(a, o) : t.push([a, o]), a.match(yt) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
      i();
    };
  };
  function l(s) {
    const o = n.$$.callbacks[s.type];
    o && o.slice().forEach((a) => a.call(this, s));
  }
  return (s) => {
    const o = [], a = {};
    e = (i, r) => {
      let c = i, u = r, d = !1;
      const h = c.match(yt), I = c.match(Gn), w = h || I;
      if (c.match(/^SMUI:\w+:/)) {
        const k = c.split(":");
        let R = "";
        for (let g = 0; g < k.length; g++)
          R += g === k.length - 1 ? ":" + k[g] : k[g].split("-").map((p) => p.slice(0, 1).toUpperCase() + p.slice(1)).join("");
        console.warn(`The event ${c.split("$")[0]} has been renamed to ${R.split("$")[0]}.`), c = R;
      }
      if (w) {
        const k = c.split(h ? ":" : "$");
        c = k[0];
        const R = k.slice(1).reduce((g, p) => (g[p] = !0, g), {});
        R.passive && (d = d || {}, d.passive = !0), R.nonpassive && (d = d || {}, d.passive = !1), R.capture && (d = d || {}, d.capture = !0), R.once && (d = d || {}, d.once = !0), R.preventDefault && (u = Bn(u)), R.stopPropagation && (u = Tn(u)), R.stopImmediatePropagation && (u = jn(u)), R.self && (u = On(s, u)), R.trusted && (u = zn(u));
      }
      const L = kt(s, c, u, d), _ = () => {
        L();
        const k = o.indexOf(_);
        k > -1 && o.splice(k, 1);
      };
      return o.push(_), c in a || (a[c] = kt(s, c, l)), _;
    };
    for (let i = 0; i < t.length; i++)
      e(t[i][0], t[i][1]);
    return {
      destroy: () => {
        for (let i = 0; i < o.length; i++)
          o[i]();
        for (let i of Object.entries(a))
          i[1]();
      }
    };
  };
}
function kt(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function Bn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Tn(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function jn(n) {
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
function zn(n) {
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
function Ne(n, e) {
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
            const a = l[s];
            Array.isArray(a) && a.length > 1 ? o.update(a[1]) : o.update();
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
const qn = (n) => ({}), Rt = (n) => ({}), Vn = (n) => ({}), Et = (n) => ({});
function St(n) {
  let e, t, l, s, o;
  const a = (
    /*#slots*/
    n[36].progress
  ), i = we(
    a,
    n,
    /*$$scope*/
    n[35],
    Et
  );
  return {
    c() {
      e = v("div"), t = v("div"), l = G(), i && i.c(), m(t, "class", "mdc-data-table__scrim"), m(e, "class", "mdc-data-table__progress-indicator"), m(e, "style", s = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(Ht).join(" "));
    },
    m(r, c) {
      Z(r, e, c), b(e, t), b(e, l), i && i.m(e, null), o = !0;
    },
    p(r, c) {
      i && i.p && (!o || c[1] & /*$$scope*/
      16) && ke(
        i,
        a,
        r,
        /*$$scope*/
        r[35],
        o ? ye(
          a,
          /*$$scope*/
          r[35],
          c,
          Vn
        ) : Re(
          /*$$scope*/
          r[35]
        ),
        Et
      ), (!o || c[0] & /*progressIndicatorStyles*/
      8192 && s !== (s = Object.entries(
        /*progressIndicatorStyles*/
        r[13]
      ).map(Ht).join(" "))) && m(e, "style", s);
    },
    i(r) {
      o || (D(i, r), o = !0);
    },
    o(r) {
      M(i, r), o = !1;
    },
    d(r) {
      r && H(e), i && i.d(r);
    }
  };
}
function Xn(n) {
  let e, t, l, s, o, a, i, r, c, u, d, h, I, w;
  const L = (
    /*#slots*/
    n[36].default
  ), _ = we(
    L,
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
  ], R = {};
  for (let C = 0; C < k.length; C += 1)
    R = V(R, k[C]);
  let g = [
    {
      class: a = oe({
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
  for (let C = 0; C < g.length; C += 1)
    p = V(p, g[C]);
  let A = (
    /*$$slots*/
    n[24].progress && St(n)
  );
  const E = (
    /*#slots*/
    n[36].paginate
  ), y = we(
    E,
    n,
    /*$$scope*/
    n[35],
    Rt
  );
  let W = [
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
    wt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], T = {};
  for (let C = 0; C < W.length; C += 1)
    T = V(T, W[C]);
  return {
    c() {
      e = v("div"), t = v("div"), l = v("table"), _ && _.c(), r = G(), A && A.c(), c = G(), y && y.c(), he(l, R), he(t, p), he(e, T);
    },
    m(C, j) {
      Z(C, e, j), b(e, t), b(t, l), _ && _.m(l, null), n[37](t), b(e, r), A && A.m(e, null), b(e, c), y && y.m(e, null), n[38](e), h = !0, I || (w = [
        x(o = Ne.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        x(i = Ne.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        x(d = Ne.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
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
      ], I = !0);
    },
    p(C, j) {
      _ && _.p && (!h || j[1] & /*$$scope*/
      16) && ke(
        _,
        L,
        C,
        /*$$scope*/
        C[35],
        h ? ye(
          L,
          /*$$scope*/
          C[35],
          j,
          null
        ) : Re(
          /*$$scope*/
          C[35]
        ),
        null
      ), he(l, R = pe(k, [
        (!h || j[0] & /*table$class*/
        64 && s !== (s = oe({
          [
            /*table$class*/
            C[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: s },
        j[0] & /*$$restProps*/
        33554432 && Ye(
          /*$$restProps*/
          C[25],
          "table$"
        )
      ])), o && ie(o.update) && j[0] & /*table$use*/
      32 && o.update.call(
        null,
        /*table$use*/
        C[5]
      ), he(t, p = pe(g, [
        (!h || j[0] & /*container$class*/
        16 && a !== (a = oe({
          [
            /*container$class*/
            C[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        j[0] & /*$$restProps*/
        33554432 && Ye(
          /*$$restProps*/
          C[25],
          "container$"
        )
      ])), i && ie(i.update) && j[0] & /*container$use*/
      8 && i.update.call(
        null,
        /*container$use*/
        C[3]
      ), /*$$slots*/
      C[24].progress ? A ? (A.p(C, j), j[0] & /*$$slots*/
      16777216 && D(A, 1)) : (A = St(C), A.c(), D(A, 1), A.m(e, c)) : A && (Ce(), M(A, 1, 1, () => {
        A = null;
      }), ve()), y && y.p && (!h || j[1] & /*$$scope*/
      16) && ke(
        y,
        E,
        C,
        /*$$scope*/
        C[35],
        h ? ye(
          E,
          /*$$scope*/
          C[35],
          j,
          qn
        ) : Re(
          /*$$scope*/
          C[35]
        ),
        Rt
      ), he(e, T = pe(W, [
        (!h || j[0] & /*className, stickyHeader, internalClasses*/
        4102 && u !== (u = oe({
          [
            /*className*/
            C[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            C[2]
          ),
          .../*internalClasses*/
          C[12]
        }))) && { class: u },
        j[0] & /*$$restProps*/
        33554432 && wt(
          /*$$restProps*/
          C[25],
          ["container$", "table$"]
        )
      ])), d && ie(d.update) && j[0] & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        C[0]
      );
    },
    i(C) {
      h || (D(_, C), D(A), D(y, C), h = !0);
    },
    o(C) {
      M(_, C), M(A), M(y, C), h = !1;
    },
    d(C) {
      C && H(e), _ && _.d(C), n[37](null), A && A.d(), y && y.d(C), n[38](null), I = !1, J(w);
    }
  };
}
const Ht = ([n, e]) => `${n}: ${e};`;
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
  let s = Ee(e, l), o, a, i, { $$slots: r = {}, $$scope: c } = e;
  const u = pn(r), { closest: d } = Ln, h = Qe(be());
  let { use: I = [] } = e, { class: w = "" } = e, { stickyHeader: L = !1 } = e, { sortable: _ = !1 } = e, { sort: k = null } = e, { sortDirection: R = "ascending" } = e, { sortAscendingAriaLabel: g = "sorted, ascending" } = e, { sortDescendingAriaLabel: p = "sorted, descending" } = e, { container$use: A = [] } = e, { container$class: E = "" } = e, { table$use: y = [] } = e, { table$class: W = "" } = e, T, C, j, P, N, K = {}, ae = { height: "auto", top: "initial" }, Ie = gt("SMUI:addLayoutListener"), Le, ue = !1, Se = st(!1);
  tt(n, Se, (f) => t(34, o = f));
  let He = st(k);
  tt(n, He, (f) => t(45, i = f));
  let Ze = st(R);
  tt(n, Ze, (f) => t(44, a = f)), ge("SMUI:checkbox:context", "data-table"), ge("SMUI:linear-progress:context", "data-table"), ge("SMUI:linear-progress:closed", Se), ge("SMUI:data-table:sortable", _), ge("SMUI:data-table:sort", He), ge("SMUI:data-table:sortDirection", Ze), ge("SMUI:data-table:sortAscendingAriaLabel", g), ge("SMUI:data-table:sortDescendingAriaLabel", p), Ie && (Le = Ie(mt));
  let Ae;
  dt(() => (t(7, C = new Mn({
    addClass: $t,
    removeClass: en,
    getHeaderCellElements: () => {
      var f;
      return (f = P == null ? void 0 : P.cells.map((S) => S.element)) !== null && f !== void 0 ? f : [];
    },
    getHeaderCellCount: () => {
      var f;
      return (f = P == null ? void 0 : P.cells.length) !== null && f !== void 0 ? f : 0;
    },
    getAttributeByHeaderCellIndex: (f, S) => {
      var F;
      return (F = P == null ? void 0 : P.orderedCells[f].getAttr(S)) !== null && F !== void 0 ? F : null;
    },
    setAttributeByHeaderCellIndex: (f, S, F) => {
      P == null || P.orderedCells[f].addAttr(S, F);
    },
    setClassNameByHeaderCellIndex: (f, S) => {
      P == null || P.orderedCells[f].addClass(S);
    },
    removeClassNameByHeaderCellIndex: (f, S) => {
      P == null || P.orderedCells[f].removeClass(S);
    },
    notifySortAction: (f) => {
      t(26, k = f.columnId), t(27, R = f.sortValue), ze(de(), "SMUIDataTable:sorted", f, void 0, !0);
    },
    getTableContainerHeight: () => j.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const f = de().querySelector(".mdc-data-table__header-row");
      if (!f)
        throw new Error("MDCDataTable: Table header element not found.");
      return f.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (f) => {
      t(13, ae = f);
    },
    addClassAtRowIndex: (f, S) => {
      N == null || N.orderedRows[f].addClass(S);
    },
    getRowCount: () => {
      var f;
      return (f = N == null ? void 0 : N.rows.length) !== null && f !== void 0 ? f : 0;
    },
    getRowElements: () => {
      var f;
      return (f = N == null ? void 0 : N.rows.map((S) => S.element)) !== null && f !== void 0 ? f : [];
    },
    getRowIdAtIndex: (f) => {
      var S;
      return (S = N == null ? void 0 : N.orderedRows[f].rowId) !== null && S !== void 0 ? S : null;
    },
    getRowIndexByChildElement: (f) => {
      var S;
      return (S = N == null ? void 0 : N.orderedRows.map((F) => F.element).indexOf(d(f, ".mdc-data-table__row"))) !== null && S !== void 0 ? S : -1;
    },
    getSelectedRowCount: () => {
      var f;
      return (f = N == null ? void 0 : N.rows.filter((S) => S.selected).length) !== null && f !== void 0 ? f : 0;
    },
    isCheckboxAtRowIndexChecked: (f) => {
      const S = N == null ? void 0 : N.orderedRows[f].checkbox;
      return S ? S.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const f = P == null ? void 0 : P.checkbox;
      return f ? f.checked : !1;
    },
    isRowsSelectable: () => !!de().querySelector(".mdc-data-table__row-checkbox") || !!de().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (f) => {
      const S = N == null ? void 0 : N.orderedRows[f.rowIndex];
      S && ze(
        de(),
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
      xe(!1), ze(de(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      xe(!1), ze(de(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (f) => {
      ze(de(), "SMUIDataTable:rowClick", f, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (f, S) => {
      N == null || N.orderedRows[f].removeClass(S);
    },
    setAttributeAtRowIndex: (f, S, F) => {
      N == null || N.orderedRows[f].addAttr(S, F);
    },
    setHeaderRowCheckboxChecked: (f) => {
      const S = P == null ? void 0 : P.checkbox;
      S && (S.checked = f);
    },
    setHeaderRowCheckboxIndeterminate: xe,
    setRowCheckboxCheckedAtIndex: (f, S) => {
      const F = N == null ? void 0 : N.orderedRows[f].checkbox;
      F && (F.checked = S);
    },
    setSortStatusLabelByHeaderCellIndex: (f, S) => {
    }
    // Handled automatically.
  })), C.init(), C.layout(), t(14, ue = !0), () => {
    C.destroy();
  })), Xt(() => {
    Le && Le();
  });
  function ne(f) {
    t(10, P = f.detail);
  }
  function O(f) {
    t(11, N = f.detail);
  }
  function q(f) {
    C && C.handleRowCheckboxChange(f);
  }
  function $t(f) {
    K[f] || t(12, K[f] = !0, K);
  }
  function en(f) {
    (!(f in K) || K[f]) && t(12, K[f] = !1, K);
  }
  function xe(f) {
    const S = P == null ? void 0 : P.checkbox;
    S && (S.indeterminate = f);
  }
  function tn(f) {
    if (!C || !f.detail.target)
      return;
    const S = d(f.detail.target, ".mdc-data-table__header-cell--with-sort");
    S && ln(S);
  }
  function nn(f) {
    if (!C || !f.detail.target)
      return;
    const S = d(f.detail.target, ".mdc-data-table__row");
    S && C && C.handleRowClick({ rowId: f.detail.rowId, row: S });
  }
  function ln(f) {
    var S, F;
    const _t = (S = P == null ? void 0 : P.orderedCells) !== null && S !== void 0 ? S : [], $e = _t.map((fn) => fn.element).indexOf(f);
    if ($e === -1)
      return;
    const dn = (F = _t[$e].columnId) !== null && F !== void 0 ? F : null;
    C.handleSortAction({ columnId: dn, columnIndex: $e, headerCell: f });
  }
  function mt() {
    return C.layout();
  }
  function de() {
    return T;
  }
  function sn(f) {
    _e[f ? "unshift" : "push"](() => {
      j = f, t(9, j);
    });
  }
  function on(f) {
    _e[f ? "unshift" : "push"](() => {
      T = f, t(8, T);
    });
  }
  const rn = () => C && ue && C.layout(), an = () => t(10, P = void 0), cn = () => t(11, N = void 0), un = () => C && C.handleHeaderRowCheckboxChange();
  return n.$$set = (f) => {
    e = V(V({}, e), Ke(f)), t(25, s = Ee(e, l)), "use" in f && t(0, I = f.use), "class" in f && t(1, w = f.class), "stickyHeader" in f && t(2, L = f.stickyHeader), "sortable" in f && t(28, _ = f.sortable), "sort" in f && t(26, k = f.sort), "sortDirection" in f && t(27, R = f.sortDirection), "sortAscendingAriaLabel" in f && t(29, g = f.sortAscendingAriaLabel), "sortDescendingAriaLabel" in f && t(30, p = f.sortDescendingAriaLabel), "container$use" in f && t(3, A = f.container$use), "container$class" in f && t(4, E = f.container$class), "table$use" in f && t(5, y = f.table$use), "table$class" in f && t(6, W = f.table$class), "$$scope" in f && t(35, c = f.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && bt(He, i = k, i), n.$$.dirty[0] & /*sortDirection*/
    134217728 && bt(Ze, a = R, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && u.progress && C && Ae !== o && (t(33, Ae = o), o ? C.hideProgress() : C.showProgress());
  }, [
    I,
    w,
    L,
    A,
    E,
    y,
    W,
    C,
    T,
    j,
    P,
    N,
    K,
    ae,
    ue,
    h,
    Se,
    He,
    Ze,
    ne,
    O,
    q,
    tn,
    nn,
    u,
    s,
    k,
    R,
    _,
    g,
    p,
    mt,
    de,
    Ae,
    o,
    c,
    r,
    sn,
    on,
    rn,
    an,
    cn,
    un
  ];
}
class Yn extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      Un,
      Xn,
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
function Fn(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, s = (
    /*tag*/
    n[1] && ot(n)
  );
  return {
    c() {
      s && s.c(), t = ce();
    },
    m(o, a) {
      s && s.m(o, a), Z(o, t, a), l = !0;
    },
    p(o, a) {
      /*tag*/
      o[1] ? e ? U(
        e,
        /*tag*/
        o[1]
      ) ? (s.d(1), s = ot(o), e = /*tag*/
      o[1], s.c(), s.m(t.parentNode, t)) : s.p(o, a) : (s = ot(o), e = /*tag*/
      o[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      o[1]);
    },
    i(o) {
      l || (D(s, o), l = !0);
    },
    o(o) {
      M(s, o), l = !1;
    },
    d(o) {
      o && H(t), s && s.d(o);
    }
  };
}
function Jn(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && it(n)
  );
  return {
    c() {
      l && l.c(), t = ce();
    },
    m(s, o) {
      l && l.m(s, o), Z(s, t, o);
    },
    p(s, o) {
      /*tag*/
      s[1] ? e ? U(
        e,
        /*tag*/
        s[1]
      ) ? (l.d(1), l = it(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : l.p(s, o) : (l = it(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      s[1]);
    },
    i: B,
    o: B,
    d(s) {
      s && H(t), l && l.d(s);
    }
  };
}
function Kn(n) {
  let e, t, l, s, o;
  const a = (
    /*#slots*/
    n[8].default
  ), i = we(
    a,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let r = [
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let u = 0; u < r.length; u += 1)
    c = V(c, r[u]);
  return {
    c() {
      e = Pe("svg"), i && i.c(), Ct(e, c);
    },
    m(u, d) {
      Z(u, e, d), i && i.m(e, null), n[9](e), l = !0, s || (o = [
        x(t = Ne.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(u, d) {
      i && i.p && (!l || d & /*$$scope*/
      128) && ke(
        i,
        a,
        u,
        /*$$scope*/
        u[7],
        l ? ye(
          a,
          /*$$scope*/
          u[7],
          d,
          null
        ) : Re(
          /*$$scope*/
          u[7]
        ),
        null
      ), Ct(e, c = pe(r, [d & /*$$restProps*/
      32 && /*$$restProps*/
      u[5]])), t && ie(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i(u) {
      l || (D(i, u), l = !0);
    },
    o(u) {
      M(i, u), l = !1;
    },
    d(u) {
      u && H(e), i && i.d(u), n[9](null), s = !1, J(o);
    }
  };
}
function ot(n) {
  let e, t, l, s, o;
  const a = (
    /*#slots*/
    n[8].default
  ), i = we(
    a,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let r = [
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let u = 0; u < r.length; u += 1)
    c = V(c, r[u]);
  return {
    c() {
      e = v(
        /*tag*/
        n[1]
      ), i && i.c(), Ve(
        /*tag*/
        n[1]
      )(e, c);
    },
    m(u, d) {
      Z(u, e, d), i && i.m(e, null), n[11](e), l = !0, s || (o = [
        x(t = Ne.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(u, d) {
      i && i.p && (!l || d & /*$$scope*/
      128) && ke(
        i,
        a,
        u,
        /*$$scope*/
        u[7],
        l ? ye(
          a,
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
      )(e, c = pe(r, [d & /*$$restProps*/
      32 && /*$$restProps*/
      u[5]])), t && ie(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i(u) {
      l || (D(i, u), l = !0);
    },
    o(u) {
      M(i, u), l = !1;
    },
    d(u) {
      u && H(e), i && i.d(u), n[11](null), s = !1, J(o);
    }
  };
}
function it(n) {
  let e, t, l, s, o = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let i = 0; i < o.length; i += 1)
    a = V(a, o[i]);
  return {
    c() {
      e = v(
        /*tag*/
        n[1]
      ), Ve(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(i, r) {
      Z(i, e, r), n[10](e), l || (s = [
        x(t = Ne.call(
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
    p(i, r) {
      Ve(
        /*tag*/
        i[1]
      )(e, a = pe(o, [r & /*$$restProps*/
      32 && /*$$restProps*/
      i[5]])), t && ie(t.update) && r & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        i[0]
      );
    },
    d(i) {
      i && H(e), n[10](null), l = !1, J(s);
    }
  };
}
function Qn(n) {
  let e, t, l, s;
  const o = [Kn, Jn, Fn], a = [];
  function i(r, c) {
    return (
      /*tag*/
      r[1] === "svg" ? 0 : (
        /*selfClosing*/
        r[3] ? 1 : 2
      )
    );
  }
  return e = i(n), t = a[e] = o[e](n), {
    c() {
      t.c(), l = ce();
    },
    m(r, c) {
      a[e].m(r, c), Z(r, l, c), s = !0;
    },
    p(r, [c]) {
      let u = e;
      e = i(r), e === u ? a[e].p(r, c) : (Ce(), M(a[u], 1, 1, () => {
        a[u] = null;
      }), ve(), t = a[e], t ? t.p(r, c) : (t = a[e] = o[e](r), t.c()), D(t, 1), t.m(l.parentNode, l));
    },
    i(r) {
      s || (D(t), s = !0);
    },
    o(r) {
      M(t), s = !1;
    },
    d(r) {
      r && H(l), a[e].d(r);
    }
  };
}
function xn(n, e, t) {
  let l;
  const s = ["use", "tag", "getElement"];
  let o = Ee(e, s), { $$slots: a = {}, $$scope: i } = e, { use: r = [] } = e, { tag: c } = e;
  const u = Qe(be());
  let d;
  function h() {
    return d;
  }
  function I(_) {
    _e[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  function w(_) {
    _e[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  function L(_) {
    _e[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  return n.$$set = (_) => {
    e = V(V({}, e), Ke(_)), t(5, o = Ee(e, s)), "use" in _ && t(0, r = _.use), "tag" in _ && t(1, c = _.tag), "$$scope" in _ && t(7, i = _.$$scope);
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
    r,
    c,
    d,
    l,
    u,
    o,
    h,
    i,
    a,
    I,
    w,
    L
  ];
}
class xt extends te {
  constructor(e) {
    super(), ee(this, e, xn, Qn, U, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Zt(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l;
}
function $n(n) {
  let e, t;
  return e = new Yn({
    props: {
      class: "smui-data-table--striped",
      $$slots: { default: [nl] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      re(e.$$.fragment);
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
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function el(n) {
  let e, t;
  return {
    c() {
      e = v("p"), t = X(
        /*errorMsg*/
        n[2]
      ), m(e, "class", "status error svelte-12d7xcd");
    },
    m(l, s) {
      Z(l, e, s), b(e, t);
    },
    p(l, s) {
      s & /*errorMsg*/
      4 && $(
        t,
        /*errorMsg*/
        l[2]
      );
    },
    i: B,
    o: B,
    d(l) {
      l && H(e);
    }
  };
}
function tl(n) {
  let e;
  return {
    c() {
      e = v("p"), e.textContent = "Loading…", m(e, "class", "status svelte-12d7xcd");
    },
    m(t, l) {
      Z(t, e, l);
    },
    p: B,
    i: B,
    o: B,
    d(t) {
      t && H(e);
    }
  };
}
function Wt(n, e) {
  let t, l, s = (
    /*p*/
    (e[8].name || /*p*/
    e[8].id) + ""
  ), o, a, i, r = (
    /*p*/
    e[8].description + ""
  ), c, u, d, h, I, w, L, _, k;
  function R() {
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
      t = v("tr"), l = v("td"), o = X(s), a = G(), i = v("td"), c = X(r), u = G(), d = v("td"), h = v("button"), h.textContent = "START", I = G(), w = v("button"), w.textContent = "VIEW", L = G(), m(l, "class", "mdc-data-table__cell"), m(i, "class", "mdc-data-table__cell"), m(w, "variant", "outlined"), m(d, "class", "mdc-data-table__cell text-right svelte-12d7xcd"), m(t, "class", "mdc-data-table__row"), this.first = t;
    },
    m(p, A) {
      Z(p, t, A), b(t, l), b(l, o), b(t, a), b(t, i), b(i, c), b(t, u), b(t, d), b(d, h), b(d, I), b(d, w), b(t, L), _ || (k = [
        z(h, "click", R),
        z(w, "click", g)
      ], _ = !0);
    },
    p(p, A) {
      e = p, A & /*processes*/
      1 && s !== (s = /*p*/
      (e[8].name || /*p*/
      e[8].id) + "") && $(o, s), A & /*processes*/
      1 && r !== (r = /*p*/
      e[8].description + "") && $(c, r);
    },
    d(p) {
      p && H(t), _ = !1, J(k);
    }
  };
}
function nl(n) {
  let e, t, l, s, o = [], a = /* @__PURE__ */ new Map(), i = Oe(
    /*processes*/
    n[0]
  );
  const r = (c) => (
    /*p*/
    c[8].id
  );
  for (let c = 0; c < i.length; c += 1) {
    let u = Zt(n, i, c), d = r(u);
    a.set(d, o[c] = Wt(d, u));
  }
  return {
    c() {
      e = v("table"), t = v("thead"), t.innerHTML = '<tr class="mdc-data-table__header-row"><th class="mdc-data-table__header-cell" role="columnheader" scope="col">Name</th> <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Description</th> <th class="mdc-data-table__header-cell text-right svelte-12d7xcd" role="columnheader" scope="col">Actions</th></tr>', l = G(), s = v("tbody");
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      m(s, "class", "mdc-data-table__content");
    },
    m(c, u) {
      Z(c, e, u), b(e, t), b(e, l), b(e, s);
      for (let d = 0; d < o.length; d += 1)
        o[d] && o[d].m(s, null);
    },
    p(c, u) {
      u & /*viewProcess, processes, startProcess*/
      25 && (i = Oe(
        /*processes*/
        c[0]
      ), o = Ft(o, u, r, 1, c, i, a, s, Yt, Wt, null, Zt));
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
  const o = [tl, el, $n], a = [];
  function i(r, c) {
    return (
      /*loading*/
      r[1] ? 0 : (
        /*errorMsg*/
        r[2] ? 1 : 2
      )
    );
  }
  return e = i(n), t = a[e] = o[e](n), {
    c() {
      t.c(), l = ce();
    },
    m(r, c) {
      a[e].m(r, c), Z(r, l, c), s = !0;
    },
    p(r, [c]) {
      let u = e;
      e = i(r), e === u ? a[e].p(r, c) : (Ce(), M(a[u], 1, 1, () => {
        a[u] = null;
      }), ve(), t = a[e], t ? t.p(r, c) : (t = a[e] = o[e](r), t.c()), D(t, 1), t.m(l.parentNode, l));
    },
    i(r) {
      s || (D(t), s = !0);
    },
    o(r) {
      M(t), s = !1;
    },
    d(r) {
      r && H(l), a[e].d(r);
    }
  };
}
function sl(n, e, t) {
  let { processes: l = [] } = e, { loading: s = !1 } = e, { errorMsg: o = "" } = e;
  const a = ft();
  function i(d) {
    a("start", d);
  }
  function r(d) {
    a("view", d);
  }
  const c = (d) => i(d), u = (d) => r(d);
  return n.$$set = (d) => {
    "processes" in d && t(0, l = d.processes), "loading" in d && t(1, s = d.loading), "errorMsg" in d && t(2, o = d.errorMsg);
  }, [
    l,
    s,
    o,
    i,
    r,
    c,
    u
  ];
}
class ol extends te {
  constructor(e) {
    super(), ee(this, e, sl, ll, U, { processes: 0, loading: 1, errorMsg: 2 });
  }
}
function Dt(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function il(n) {
  let e, t, l, s, o, a, i = (
    /*proc*/
    n[0].id + ""
  ), r, c, u, d, h, I = (
    /*proc*/
    n[0].name + ""
  ), w, L, _, k, R, g = (
    /*proc*/
    n[0].version + ""
  ), p, A, E, y, W, T = (
    /*proc*/
    n[0].description + ""
  ), C, j, P, N, K, ae, Ie, Le, ue, Se, He;
  function Ze(O, q) {
    return !/*proc*/
    O[0].plugins || /*proc*/
    O[0].plugins.length === 0 ? cl : al;
  }
  let Ae = Ze(n), ne = Ae(n);
  return {
    c() {
      e = v("h1"), e.textContent = "Process Details", t = G(), l = v("div"), s = v("div"), o = v("span"), o.textContent = "ID", a = v("span"), r = X(i), c = G(), u = v("div"), d = v("span"), d.textContent = "Name", h = v("span"), w = X(I), L = G(), _ = v("div"), k = v("span"), k.textContent = "Version", R = v("span"), p = X(g), A = G(), E = v("div"), y = v("span"), y.textContent = "Description", W = v("span"), C = X(T), j = G(), P = v("h2"), P.textContent = "Plugins", N = G(), ne.c(), K = G(), ae = v("div"), Ie = v("button"), Ie.textContent = "Back", Le = G(), ue = v("button"), ue.textContent = "START PROCESS", m(e, "class", "title svelte-1qn566t"), m(o, "class", "label svelte-1qn566t"), m(a, "class", "value svelte-1qn566t"), m(s, "class", "row svelte-1qn566t"), m(d, "class", "label svelte-1qn566t"), m(h, "class", "value svelte-1qn566t"), m(u, "class", "row svelte-1qn566t"), m(k, "class", "label svelte-1qn566t"), m(R, "class", "value svelte-1qn566t"), m(_, "class", "row svelte-1qn566t"), m(y, "class", "label svelte-1qn566t"), m(W, "class", "value svelte-1qn566t"), m(E, "class", "row svelte-1qn566t"), m(l, "class", "card svelte-1qn566t"), m(P, "class", "subtitle svelte-1qn566t"), m(Ie, "class", "btn svelte-1qn566t"), m(ue, "class", "btn primary svelte-1qn566t"), m(ae, "class", "actions svelte-1qn566t");
    },
    m(O, q) {
      Z(O, e, q), Z(O, t, q), Z(O, l, q), b(l, s), b(s, o), b(s, a), b(a, r), b(l, c), b(l, u), b(u, d), b(u, h), b(h, w), b(l, L), b(l, _), b(_, k), b(_, R), b(R, p), b(l, A), b(l, E), b(E, y), b(E, W), b(W, C), Z(O, j, q), Z(O, P, q), Z(O, N, q), ne.m(O, q), Z(O, K, q), Z(O, ae, q), b(ae, Ie), b(ae, Le), b(ae, ue), Se || (He = [
        z(
          Ie,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        z(
          ue,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], Se = !0);
    },
    p(O, q) {
      q & /*proc*/
      1 && i !== (i = /*proc*/
      O[0].id + "") && $(r, i), q & /*proc*/
      1 && I !== (I = /*proc*/
      O[0].name + "") && $(w, I), q & /*proc*/
      1 && g !== (g = /*proc*/
      O[0].version + "") && $(p, g), q & /*proc*/
      1 && T !== (T = /*proc*/
      O[0].description + "") && $(C, T), Ae === (Ae = Ze(O)) && ne ? ne.p(O, q) : (ne.d(1), ne = Ae(O), ne && (ne.c(), ne.m(K.parentNode, K)));
    },
    d(O) {
      O && (H(e), H(t), H(l), H(j), H(P), H(N), H(K), H(ae)), ne.d(O), Se = !1, J(He);
    }
  };
}
function rl(n) {
  let e, t, l, s, o, a;
  return {
    c() {
      e = v("div"), t = v("p"), t.textContent = "No process selected.", l = G(), s = v("button"), s.textContent = "Back to list", m(t, "class", "svelte-1qn566t"), m(s, "class", "btn svelte-1qn566t"), m(e, "class", "empty-state svelte-1qn566t");
    },
    m(i, r) {
      Z(i, e, r), b(e, t), b(e, l), b(e, s), o || (a = z(
        s,
        "click",
        /*click_handler*/
        n[2]
      ), o = !0);
    },
    p: B,
    d(i) {
      i && H(e), o = !1, a();
    }
  };
}
function al(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), s = Oe(
    /*proc*/
    n[0].plugins
  );
  const o = (a) => (
    /*pl*/
    a[5].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let i = Dt(n, s, a), r = o(i);
    l.set(r, t[a] = Lt(r, i));
  }
  return {
    c() {
      e = v("ol");
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      m(e, "class", "plugins-list svelte-1qn566t");
    },
    m(a, i) {
      Z(a, e, i);
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(e, null);
    },
    p(a, i) {
      i & /*proc*/
      1 && (s = Oe(
        /*proc*/
        a[0].plugins
      ), t = Ft(t, i, o, 1, a, s, l, e, Yt, Lt, null, Dt));
    },
    d(a) {
      a && H(e);
      for (let i = 0; i < t.length; i += 1)
        t[i].d();
    }
  };
}
function cl(n) {
  let e;
  return {
    c() {
      e = v("p"), e.textContent = "No plugins defined for this process.", m(e, "class", "muted svelte-1qn566t");
    },
    m(t, l) {
      Z(t, e, l);
    },
    p: B,
    d(t) {
      t && H(e);
    }
  };
}
function Nt(n) {
  let e, t = (
    /*pl*/
    n[5].type + ""
  ), l;
  return {
    c() {
      e = v("p"), l = X(t), m(e, "class", "plugin-type svelte-1qn566t");
    },
    m(s, o) {
      Z(s, e, o), b(e, l);
    },
    p(s, o) {
      o & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].type + "") && $(l, t);
    },
    d(s) {
      s && H(e);
    }
  };
}
function Pt(n) {
  let e, t = (
    /*pl*/
    n[5].description + ""
  ), l;
  return {
    c() {
      e = v("p"), l = X(t), m(e, "class", "description svelte-1qn566t");
    },
    m(s, o) {
      Z(s, e, o), b(e, l);
    },
    p(s, o) {
      o & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].description + "") && $(l, t);
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
  ), a, i, r, c, u, d = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), h, I, w, L, _ = (
    /*pl*/
    e[5].type && Nt(e)
  ), k = (
    /*pl*/
    e[5].description && Pt(e)
  );
  return {
    key: n,
    first: null,
    c() {
      t = v("li"), l = v("div"), s = v("span"), a = X(o), i = X("."), r = G(), c = v("div"), u = v("p"), h = X(d), I = G(), _ && _.c(), w = G(), k && k.c(), L = G(), m(s, "class", "order svelte-1qn566t"), m(u, "class", "plugin-name svelte-1qn566t"), m(c, "class", "svelte-1qn566t"), m(l, "class", "plugin-header svelte-1qn566t"), m(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(R, g) {
      Z(R, t, g), b(t, l), b(l, s), b(s, a), b(s, i), b(l, r), b(l, c), b(c, u), b(u, h), b(c, I), _ && _.m(c, null), b(t, w), k && k.m(t, null), b(t, L);
    },
    p(R, g) {
      e = R, g & /*proc*/
      1 && o !== (o = /*i*/
      e[7] + 1 + "") && $(a, o), g & /*proc*/
      1 && d !== (d = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && $(h, d), /*pl*/
      e[5].type ? _ ? _.p(e, g) : (_ = Nt(e), _.c(), _.m(c, null)) : _ && (_.d(1), _ = null), /*pl*/
      e[5].description ? k ? k.p(e, g) : (k = Pt(e), k.c(), k.m(t, L)) : k && (k.d(1), k = null);
    },
    d(R) {
      R && H(t), _ && _.d(), k && k.d();
    }
  };
}
function ul(n) {
  let e;
  function t(o, a) {
    return (
      /*proc*/
      o[0] ? il : rl
    );
  }
  let l = t(n), s = l(n);
  return {
    c() {
      e = v("div"), s.c(), m(e, "class", "container svelte-1qn566t");
    },
    m(o, a) {
      Z(o, e, a), s.m(e, null);
    },
    p(o, [a]) {
      l === (l = t(o)) && s ? s.p(o, a) : (s.d(1), s = l(o), s && (s.c(), s.m(e, null)));
    },
    i: B,
    o: B,
    d(o) {
      o && H(e), s.d();
    }
  };
}
function dl(n, e, t) {
  let { proc: l = null } = e;
  const s = ft(), o = () => s("back"), a = () => s("back"), i = () => s("start", l);
  return n.$$set = (r) => {
    "proc" in r && t(0, l = r.proc);
  }, [l, s, o, a, i];
}
class fl extends te {
  constructor(e) {
    super(), ee(this, e, dl, ul, U, { proc: 0 });
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
      e || (D(l, s), e = !0);
    },
    o(s) {
      M(l, s), e = !1;
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
  function a(i, r) {
    let c = {
      $$slots: { default: [gl] },
      $$scope: { ctx: i }
    };
    for (let u = 0; u < s.length; u += 1)
      c = V(c, s[u]);
    return r !== void 0 && r & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (c = V(c, pe(s, [
      r & /*tag*/
      8 && { tag: (
        /*tag*/
        i[3]
      ) },
      r & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          i[8],
          .../*use*/
          i[0]
        ]
      },
      r & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: oe({
          [
            /*className*/
            i[1]
          ]: !0,
          [
            /*smuiClass*/
            i[6]
          ]: !0,
          .../*smuiClassMap*/
          i[5]
        })
      },
      r & /*props*/
      128 && Ue(
        /*props*/
        i[7]
      ),
      r & /*$$restProps*/
      512 && Ue(
        /*$$restProps*/
        i[9]
      )
    ]))), { props: c };
  }
  return o && (e = vt(o, a(n)), n[12](e)), {
    c() {
      e && re(e.$$.fragment), t = ce();
    },
    m(i, r) {
      e && le(e, i, r), Z(i, t, r), l = !0;
    },
    p(i, [r]) {
      if (r & /*component*/
      4 && o !== (o = /*component*/
      i[2])) {
        if (e) {
          Ce();
          const c = e;
          M(c.$$.fragment, 1, 0, () => {
            se(c, 1);
          }), ve();
        }
        o ? (e = vt(o, a(i, r)), i[12](e), re(e.$$.fragment), D(e.$$.fragment, 1), le(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = r & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? pe(s, [
          r & /*tag*/
          8 && { tag: (
            /*tag*/
            i[3]
          ) },
          r & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              i[8],
              .../*use*/
              i[0]
            ]
          },
          r & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: oe({
              [
                /*className*/
                i[1]
              ]: !0,
              [
                /*smuiClass*/
                i[6]
              ]: !0,
              .../*smuiClassMap*/
              i[5]
            })
          },
          r & /*props*/
          128 && Ue(
            /*props*/
            i[7]
          ),
          r & /*$$restProps*/
          512 && Ue(
            /*$$restProps*/
            i[9]
          )
        ]) : {};
        r & /*$$scope*/
        8192 && (c.$$scope = { dirty: r, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      l || (e && D(e.$$.fragment, i), l = !0);
    },
    o(i) {
      e && M(e.$$.fragment, i), l = !1;
    },
    d(i) {
      i && H(t), n[12](null), e && se(e, i);
    }
  };
}
const me = {
  component: xt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function ml(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let s = Ee(e, l), { $$slots: o = {}, $$scope: a } = e, { use: i = [] } = e, { class: r = "" } = e, c;
  const u = me.class, d = {}, h = [], I = me.contexts, w = me.props;
  let { component: L = me.component } = e, { tag: _ = L === xt ? me.tag : void 0 } = e;
  Object.entries(me.classMap).forEach(([p, A]) => {
    const E = gt(A);
    E && "subscribe" in E && h.push(E.subscribe((y) => {
      t(5, d[p] = y, d);
    }));
  });
  const k = Qe(be());
  for (let p in I)
    I.hasOwnProperty(p) && ge(p, I[p]);
  Xt(() => {
    for (const p of h)
      p();
  });
  function R() {
    return c.getElement();
  }
  function g(p) {
    _e[p ? "unshift" : "push"](() => {
      c = p, t(4, c);
    });
  }
  return n.$$set = (p) => {
    e = V(V({}, e), Ke(p)), t(9, s = Ee(e, l)), "use" in p && t(0, i = p.use), "class" in p && t(1, r = p.class), "component" in p && t(2, L = p.component), "tag" in p && t(3, _ = p.tag), "$$scope" in p && t(13, a = p.$$scope);
  }, [
    i,
    r,
    L,
    _,
    c,
    d,
    u,
    w,
    k,
    s,
    R,
    o,
    g,
    a
  ];
}
class _l extends te {
  constructor(e) {
    super(), ee(this, e, ml, hl, U, {
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
const Mt = Object.assign({}, me);
function Y(n) {
  return new Proxy(_l, {
    construct: function(e, t) {
      return Object.assign(me, Mt, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(me, Mt, n), e[t];
    }
  });
}
Y({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
Y({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
Y({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
Y({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Y({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Y({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function pl(n) {
  let e, t, l, s, o, a;
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
      e = v("span"), r && r.c(), he(e, u);
    },
    m(d, h) {
      Z(d, e, h), r && r.m(e, null), n[9](e), s = !0, o || (a = [
        x(l = Ne.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        x(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], o = !0);
    },
    p(d, [h]) {
      r && r.p && (!s || h & /*$$scope*/
      128) && ke(
        r,
        i,
        d,
        /*$$scope*/
        d[7],
        s ? ye(
          i,
          /*$$scope*/
          d[7],
          h,
          null
        ) : Re(
          /*$$scope*/
          d[7]
        ),
        null
      ), he(e, u = pe(c, [
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
      ])), l && ie(l.update) && h & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      s || (D(r, d), s = !0);
    },
    o(d) {
      M(r, d), s = !1;
    },
    d(d) {
      d && H(e), r && r.d(d), n[9](null), o = !1, J(a);
    }
  };
}
function bl(n, e, t) {
  const l = ["use", "class", "getElement"];
  let s = Ee(e, l), { $$slots: o = {}, $$scope: a } = e;
  const i = Qe(be());
  let { use: r = [] } = e, { class: c = "" } = e, u, d = gt("SMUI:list:graphic:menu-selection-group");
  function h() {
    return u;
  }
  function I(w) {
    _e[w ? "unshift" : "push"](() => {
      u = w, t(2, u);
    });
  }
  return n.$$set = (w) => {
    e = V(V({}, e), Ke(w)), t(5, s = Ee(e, l)), "use" in w && t(0, r = w.use), "class" in w && t(1, c = w.class), "$$scope" in w && t(7, a = w.$$scope);
  }, [
    r,
    c,
    u,
    i,
    d,
    s,
    h,
    a,
    o,
    I
  ];
}
class Cl extends te {
  constructor(e) {
    super(), ee(this, e, bl, pl, U, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Y({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Y({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Y({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Y({
  class: "mdc-menu__selection-group-icon",
  component: Cl
});
Y({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Y({
  class: "mdc-dialog__title",
  tag: "h2"
});
Y({
  class: "mdc-dialog__content",
  tag: "div"
});
Y({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
Y({
  class: "smui-paper__content",
  tag: "div"
});
Y({
  class: "smui-paper__title",
  tag: "h5"
});
Y({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function vl(n) {
  let e, t;
  return {
    c() {
      e = Pe("svg"), t = Pe("path"), m(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "viewBox", "0 -960 960 960"), m(e, "width", "24"), m(e, "height", "24"), m(e, "fill", "#004552");
    },
    m(l, s) {
      Z(l, e, s), b(e, t);
    },
    p: B,
    i: B,
    o: B,
    d(l) {
      l && H(e);
    }
  };
}
class Il extends te {
  constructor(e) {
    super(), ee(this, e, null, vl, U, {});
  }
}
function Al(n) {
  let e, t;
  return {
    c() {
      e = Pe("svg"), t = Pe("path"), m(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "height", "24px"), m(e, "viewBox", "0 -960 960 960"), m(e, "width", "24px"), m(e, "fill", "#004552");
    },
    m(l, s) {
      Z(l, e, s), b(e, t);
    },
    p: B,
    i: B,
    o: B,
    d(l) {
      l && H(e);
    }
  };
}
class wl extends te {
  constructor(e) {
    super(), ee(this, e, null, Al, U, {});
  }
}
function yl(n) {
  let e, t;
  return {
    c() {
      e = Pe("svg"), t = Pe("path"), m(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "height", "24px"), m(e, "viewBox", "0 -960 960 960"), m(e, "width", "24px"), m(e, "fill", "#004552");
    },
    m(l, s) {
      Z(l, e, s), b(e, t);
    },
    p: B,
    i: B,
    o: B,
    d(l) {
      l && H(e);
    }
  };
}
class kl extends te {
  constructor(e) {
    super(), ee(this, e, null, yl, U, {});
  }
}
function Gt(n) {
  let e, t, l;
  return {
    c() {
      e = v("div"), t = X(
        /*text*/
        n[0]
      ), m(e, "class", l = "tooltip-box visible " + /*position*/
      n[1] + " svelte-11wr6ok");
    },
    m(s, o) {
      Z(s, e, o), b(e, t);
    },
    p(s, o) {
      o & /*text*/
      1 && $(
        t,
        /*text*/
        s[0]
      ), o & /*position*/
      2 && l !== (l = "tooltip-box visible " + /*position*/
      s[1] + " svelte-11wr6ok") && m(e, "class", l);
    },
    d(s) {
      s && H(e);
    }
  };
}
function Rl(n) {
  let e, t, l, s, o;
  const a = (
    /*#slots*/
    n[4].default
  ), i = we(
    a,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let r = (
    /*visible*/
    n[2] && Gt(n)
  );
  return {
    c() {
      e = v("div"), i && i.c(), t = G(), r && r.c(), m(e, "class", "tooltip-container svelte-11wr6ok");
    },
    m(c, u) {
      Z(c, e, u), i && i.m(e, null), b(e, t), r && r.m(e, null), l = !0, s || (o = [
        z(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[5]
        ),
        z(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[6]
        )
      ], s = !0);
    },
    p(c, [u]) {
      i && i.p && (!l || u & /*$$scope*/
      8) && ke(
        i,
        a,
        c,
        /*$$scope*/
        c[3],
        l ? ye(
          a,
          /*$$scope*/
          c[3],
          u,
          null
        ) : Re(
          /*$$scope*/
          c[3]
        ),
        null
      ), /*visible*/
      c[2] ? r ? r.p(c, u) : (r = Gt(c), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    i(c) {
      l || (D(i, c), l = !0);
    },
    o(c) {
      M(i, c), l = !1;
    },
    d(c) {
      c && H(e), i && i.d(c), r && r.d(), s = !1, J(o);
    }
  };
}
function El(n, e, t) {
  let { $$slots: l = {}, $$scope: s } = e, { text: o } = e, { position: a = "top" } = e, i = !1;
  const r = () => t(2, i = !0), c = () => t(2, i = !1);
  return n.$$set = (u) => {
    "text" in u && t(0, o = u.text), "position" in u && t(1, a = u.position), "$$scope" in u && t(3, s = u.$$scope);
  }, [
    o,
    a,
    i,
    s,
    l,
    r,
    c
  ];
}
class Sl extends te {
  constructor(e) {
    super(), ee(this, e, El, Rl, U, { text: 0, position: 1 });
  }
}
function Bt(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Hl(n) {
  let e = (
    /*i*/
    n[20] + 1 + ""
  ), t;
  return {
    c() {
      t = X(e);
    },
    m(l, s) {
      Z(l, t, s);
    },
    p: B,
    i: B,
    o: B,
    d(l) {
      l && H(t);
    }
  };
}
function Zl(n) {
  let e, t, l, s;
  const o = [Nl, Dl, Wl], a = [];
  function i(r, c) {
    return (
      /*pluginStatus*/
      r[3][
        /*plugin*/
        r[18].id
      ] === "check" ? 0 : (
        /*pluginStatus*/
        r[3][
          /*plugin*/
          r[18].id
        ] === "error" ? 1 : 2
      )
    );
  }
  return e = i(n), t = a[e] = o[e](n), {
    c() {
      t.c(), l = ce();
    },
    m(r, c) {
      a[e].m(r, c), Z(r, l, c), s = !0;
    },
    p(r, c) {
      let u = e;
      e = i(r), e !== u && (Ce(), M(a[u], 1, 1, () => {
        a[u] = null;
      }), ve(), t = a[e], t || (t = a[e] = o[e](r), t.c()), D(t, 1), t.m(l.parentNode, l));
    },
    i(r) {
      s || (D(t), s = !0);
    },
    o(r) {
      M(t), s = !1;
    },
    d(r) {
      r && H(l), a[e].d(r);
    }
  };
}
function Wl(n) {
  let e, t;
  return e = new kl({}), {
    c() {
      re(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    i(l) {
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Dl(n) {
  let e, t;
  return e = new wl({}), {
    c() {
      re(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    i(l) {
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Nl(n) {
  let e, t;
  return e = new Il({}), {
    c() {
      re(e.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), t = !0;
    },
    i(l) {
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Pl(n) {
  let e, t, l, s, o, a, i;
  const r = [Zl, Hl], c = [];
  function u(h, I) {
    return I & /*visited, plugins, tagName*/
    52 && (t = null), t == null && (t = !!/*visited*/
    (h[5].includes(
      /*plugin*/
      h[18].id
    ) && /*plugin*/
    h[18].id !== /*tagName*/
    h[4])), t ? 0 : 1;
  }
  l = u(n, -1), s = c[l] = r[l](n);
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
      e = v("button"), s.c(), m(e, "class", "svelte-1xq5awa"), Me(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), Me(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), Me(
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
    m(h, I) {
      Z(h, e, I), c[l].m(e, null), o = !0, a || (i = z(e, "click", d), a = !0);
    },
    p(h, I) {
      n = h;
      let w = l;
      l = u(n, I), l === w ? c[l].p(n, I) : (Ce(), M(c[w], 1, 1, () => {
        c[w] = null;
      }), ve(), s = c[l], s ? s.p(n, I) : (s = c[l] = r[l](n), s.c()), D(s, 1), s.m(e, null)), (!o || I & /*visited, plugins*/
      36) && Me(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), (!o || I & /*plugins, tagName*/
      20) && Me(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), (!o || I & /*visited, plugins, tagName*/
      52) && Me(
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
      o || (D(s), o = !0);
    },
    o(h) {
      M(s), o = !1;
    },
    d(h) {
      h && H(e), c[l].d(), a = !1, i();
    }
  };
}
function Tt(n) {
  let e;
  return {
    c() {
      e = v("div"), m(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      Z(t, e, l);
    },
    d(t) {
      t && H(e);
    }
  };
}
function jt(n) {
  let e, t, l, s, o = (
    /*plugin*/
    n[18].name + ""
  ), a, i, r, c;
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
      $$slots: { default: [Pl] },
      $$scope: { ctx: n }
    }
  });
  let u = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && Tt()
  );
  return {
    c() {
      e = v("div"), re(t.$$.fragment), l = G(), s = v("p"), a = X(o), i = G(), u && u.c(), r = ce(), m(s, "class", "svelte-1xq5awa"), m(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(d, h) {
      Z(d, e, h), le(t, e, null), b(e, l), b(e, s), b(s, a), Z(d, i, h), u && u.m(d, h), Z(d, r, h), c = !0;
    },
    p(d, h) {
      const I = {};
      h & /*tooltipText, plugins*/
      68 && (I.text = /*tooltipText*/
      d[6][
        /*plugin*/
        d[18].id
      ]), h & /*$$scope, visited, plugins, tagName, pluginStatus*/
      2097212 && (I.$$scope = { dirty: h, ctx: d }), t.$set(I), (!c || h & /*plugins*/
      4) && o !== (o = /*plugin*/
      d[18].name + "") && $(a, o), /*i*/
      d[20] < /*plugins*/
      d[2].length - 1 ? u || (u = Tt(), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null);
    },
    i(d) {
      c || (D(t.$$.fragment, d), c = !0);
    },
    o(d) {
      M(t.$$.fragment, d), c = !1;
    },
    d(d) {
      d && (H(e), H(i), H(r)), se(t), u && u.d(d);
    }
  };
}
function Ot(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && rt(n)
  );
  return {
    c() {
      l && l.c(), t = ce();
    },
    m(s, o) {
      l && l.m(s, o), Z(s, t, o);
    },
    p(s, o) {
      /*tagName*/
      s[4] ? e ? U(
        e,
        /*tagName*/
        s[4]
      ) ? (l.d(1), l = rt(s), e = /*tagName*/
      s[4], l.c(), l.m(t.parentNode, t)) : l.p(s, o) : (l = rt(s), e = /*tagName*/
      s[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      s[4]);
    },
    d(s) {
      s && H(t), l && l.d(s);
    }
  };
}
function rt(n) {
  let e, t, l, s;
  return {
    c() {
      e = v(
        /*tagName*/
        n[4]
      ), Ve(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(o, a) {
      Z(o, e, a), l || (s = x(t = Gl.call(null, e, {
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
    p(o, a) {
      t && ie(t.update) && a & /*doc, editCount*/
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
  let e, t, l, s, o, a, i, r, c, u, d, h, I, w, L, _, k, R = Oe(
    /*plugins*/
    n[2]
  ), g = [];
  for (let E = 0; E < R.length; E += 1)
    g[E] = jt(Bt(n, R, E));
  const p = (E) => M(g[E], 1, 1, () => {
    g[E] = null;
  });
  let A = (
    /*tagName*/
    n[4] && Ot(n)
  );
  return {
    c() {
      e = v("div"), t = v("div"), l = v("button"), l.textContent = "exit", s = G(), o = v("p"), o.textContent = "Plugin Flow", a = G(), i = v("div");
      for (let E = 0; E < g.length; E += 1)
        g[E].c();
      r = G(), c = v("div"), u = v("button"), u.textContent = "Back", d = G(), h = v("button"), h.textContent = "Next", I = G(), A && A.c(), w = ce(), m(l, "class", "back-button svelte-1xq5awa"), m(o, "class", "plugin-flow-title svelte-1xq5awa"), nt(t, "display", "flex"), nt(t, "align-items", "center"), nt(t, "gap", "0.5rem"), m(t, "class", "svelte-1xq5awa"), m(i, "class", "plugin-steps svelte-1xq5awa"), m(u, "class", "back-button svelte-1xq5awa"), m(h, "class", "next-button svelte-1xq5awa"), m(c, "class", "stepper-navigation svelte-1xq5awa"), m(e, "class", "stepper svelte-1xq5awa");
    },
    m(E, y) {
      Z(E, e, y), b(e, t), b(t, l), b(t, s), b(t, o), b(e, a), b(e, i);
      for (let W = 0; W < g.length; W += 1)
        g[W] && g[W].m(i, null);
      b(e, r), b(e, c), b(c, u), b(c, d), b(c, h), Z(E, I, y), A && A.m(E, y), Z(E, w, y), L = !0, _ || (k = [
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
      ], _ = !0);
    },
    p(E, [y]) {
      if (y & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      380) {
        R = Oe(
          /*plugins*/
          E[2]
        );
        let W;
        for (W = 0; W < R.length; W += 1) {
          const T = Bt(E, R, W);
          g[W] ? (g[W].p(T, y), D(g[W], 1)) : (g[W] = jt(T), g[W].c(), D(g[W], 1), g[W].m(i, null));
        }
        for (Ce(), W = R.length; W < g.length; W += 1)
          p(W);
        ve();
      }
      /*tagName*/
      E[4] ? A ? A.p(E, y) : (A = Ot(E), A.c(), A.m(w.parentNode, w)) : A && (A.d(1), A = null);
    },
    i(E) {
      if (!L) {
        for (let y = 0; y < R.length; y += 1)
          D(g[y]);
        L = !0;
      }
    },
    o(E) {
      g = g.filter(Boolean);
      for (let y = 0; y < g.length; y += 1)
        M(g[y]);
      L = !1;
    },
    d(E) {
      E && (H(e), H(I), H(w)), bn(g, E), A && A.d(E), _ = !1, J(k);
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
  let l, { doc: s } = e, { editCount: o = -1 } = e, { host: a } = e, { plugins: i = [] } = e, r = null, c = [];
  const u = ["check", "warning", "error"];
  let d = {};
  ft();
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
  function I(g) {
    return ht(this, void 0, void 0, function* () {
      const p = yield import(g.src);
      if (customElements.get(g.id) || customElements.define(g.id, p.default), t(4, r = g.id), !c.includes(g.id)) {
        t(5, c = [...c, g.id]);
        const A = i.findIndex((E) => E.id === g.id);
        t(3, d = Object.assign(Object.assign({}, d), {
          [g.id]: u[A % u.length]
        }));
      }
    });
  }
  function w() {
    _(1);
  }
  function L() {
    _(-1);
  }
  function _(g) {
    const p = i.findIndex((A) => A.id === r);
    I(i[(p + g + i.length) % i.length]);
  }
  dt(() => {
    i.length && I(i[0]), h(!1);
  });
  const k = () => h(!0), R = (g) => I(g);
  return n.$$set = (g) => {
    "doc" in g && t(0, s = g.doc), "editCount" in g && t(1, o = g.editCount), "host" in g && t(11, a = g.host), "plugins" in g && t(2, i = g.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = i.reduce(
      (g, p) => {
        const A = d[p.id];
        return g[p.id] = A === "error" ? `Resolve errors in ${p.name}` : A === "warning" ? `Check warnings for ${p.name}` : `Load the ${p.name} editor`, g;
      },
      {}
    ));
  }, [
    s,
    o,
    i,
    d,
    r,
    c,
    l,
    h,
    I,
    w,
    L,
    a,
    k,
    R
  ];
}
class Tl extends te {
  constructor(e) {
    super(), ee(this, e, Bl, Ll, U, {
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
      re(e.$$.fragment);
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
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Ol(n) {
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
      re(e.$$.fragment);
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
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function zl(n) {
  let e, t;
  return e = new Tl({
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
      re(e.$$.fragment);
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
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function ql(n) {
  let e, t, l, s;
  const o = [zl, Ol, jl], a = [];
  function i(r, c) {
    return (
      /*running*/
      r[5] ? 0 : (
        /*selected*/
        r[4] ? 1 : 2
      )
    );
  }
  return e = i(n), t = a[e] = o[e](n), {
    c() {
      t.c(), l = ce();
    },
    m(r, c) {
      a[e].m(r, c), Z(r, l, c), s = !0;
    },
    p(r, [c]) {
      let u = e;
      e = i(r), e === u ? a[e].p(r, c) : (Ce(), M(a[u], 1, 1, () => {
        a[u] = null;
      }), ve(), t = a[e], t ? t.p(r, c) : (t = a[e] = o[e](r), t.c()), D(t, 1), t.m(l.parentNode, l));
    },
    i(r) {
      s || (D(t), s = !0);
    },
    o(r) {
      M(t), s = !1;
    },
    d(r) {
      r && H(l), a[e].d(r);
    }
  };
}
function Vl(n, e, t) {
  let { doc: l } = e, { editCount: s = -1 } = e, { host: o } = e, a = [], i = null, r = null, c = !0, u = "";
  const d = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+eHl6LWVkaXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3h5ei5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPgogICAgICAgIDxuYW1lPk5ldHdvcmsgRXhwbG9yZXI8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CgogIDxwcm9jZXNzPgogICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+CiAgICA8dmVyc2lvbj4wLjAuMTwvdmVyc2lvbj4KICAgIDxuYW1lPlN0YW5kYXJkIFByb2Nlc3MgMzwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj4KICAgICAgVGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seQogICAgPC9kZXNjcmlwdGlvbj4KCiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+ZW5naW5lZXJpbmctd2l6YXJkPC9pZD4KICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CgogICAgICA8cGx1Z2luPgogICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5TaXRpcGU8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, h = (g) => {
    var p, A;
    return (A = (p = g == null ? void 0 : g.textContent) === null || p === void 0 ? void 0 : p.trim()) !== null && A !== void 0 ? A : "";
  }, I = (g) => Array.from(g.getElementsByTagName("process")).map((p) => {
    const A = Array.from(p.querySelectorAll("plugins-sequence > plugin")).map((E) => ({
      id: h(E.querySelector("id")),
      name: h(E.querySelector("name")),
      src: h(E.querySelector("src"))
    }));
    return {
      id: h(p.querySelector(":scope > id")),
      version: h(p.querySelector(":scope > version")),
      name: h(p.querySelector(":scope > name")),
      description: h(p.querySelector(":scope > description")),
      plugins: A
    };
  });
  function w() {
    return ht(this, void 0, void 0, function* () {
      t(6, c = !0), t(7, u = "");
      try {
        const g = yield fetch(d, { cache: "no-cache" });
        if (!g.ok)
          throw new Error(`HTTP ${g.status}`);
        const p = new DOMParser().parseFromString(yield g.text(), "application/xml");
        if (p.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, a = I(p));
      } catch (g) {
        t(3, a = []), t(7, u = g.message || "Failed to load processes.");
      } finally {
        t(6, c = !1);
      }
    });
  }
  dt(w);
  function L(g) {
    t(5, r = g), t(4, i = null);
  }
  function _(g) {
    t(4, i = g.detail);
  }
  function k(g) {
    L(g.detail);
  }
  function R() {
    t(4, i = null);
  }
  return n.$$set = (g) => {
    "doc" in g && t(0, l = g.doc), "editCount" in g && t(1, s = g.editCount), "host" in g && t(2, o = g.host);
  }, [
    l,
    s,
    o,
    a,
    i,
    r,
    c,
    u,
    _,
    k,
    R
  ];
}
class Xl extends te {
  constructor(e) {
    super(), ee(this, e, Vl, ql, U, { doc: 0, editCount: 1, host: 2 });
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
      re(e.$$.fragment);
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
      t || (D(e.$$.fragment, l), t = !0);
    },
    o(l) {
      M(e.$$.fragment, l), t = !1;
    },
    d(l) {
      se(e, l);
    }
  };
}
function Ul(n) {
  let e, t, l, s, o, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && zt(n)
  );
  return {
    c() {
      a && a.c(), e = G(), t = v("input"), l = G(), s = v("input"), m(t, "type", "hidden"), m(t, "name", "package-name"), t.value = Jt, m(s, "type", "hidden"), m(s, "name", "package-version"), s.value = Kt;
    },
    m(i, r) {
      a && a.m(i, r), Z(i, e, r), Z(i, t, r), Z(i, l, r), Z(i, s, r), o = !0;
    },
    p(i, [r]) {
      /*doc*/
      i[0] || /*dev*/
      i[1] ? a ? (a.p(i, r), r & /*doc, dev*/
      3 && D(a, 1)) : (a = zt(i), a.c(), D(a, 1), a.m(e.parentNode, e)) : a && (Ce(), M(a, 1, 1, () => {
        a = null;
      }), ve());
    },
    i(i) {
      o || (D(a), o = !0);
    },
    o(i) {
      M(a), o = !1;
    },
    d(i) {
      i && (H(e), H(t), H(l), H(s)), a && a.d(i);
    }
  };
}
function Yl(n, e, t) {
  let { doc: l } = e, { dev: s = !1 } = e, { editCount: o = 0 } = e;
  return console.log("editcount", o), n.$$set = (a) => {
    "doc" in a && t(0, l = a.doc), "dev" in a && t(1, s = a.dev), "editCount" in a && t(2, o = a.editCount);
  }, [l, s, o];
}
class Fl extends te {
  constructor(e) {
    super(), ee(this, e, Yl, Ul, U, { doc: 0, dev: 1, editCount: 2 });
  }
}
class xl extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Fl({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = Jl();
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
function Jl() {
  const n = `${Jt}-v${Kt}-style`, e = Kl(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Kl() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  xl as default
};
