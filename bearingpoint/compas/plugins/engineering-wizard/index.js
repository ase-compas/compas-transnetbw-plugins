var Qe = Object.defineProperty;
var Xe = (t, e, n) => e in t ? Qe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ve = (t, e, n) => (Xe(t, typeof e != "symbol" ? e + "" : e, n), n);
function S() {
}
function I(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Ge(t) {
  return t();
}
function Se() {
  return /* @__PURE__ */ Object.create(null);
}
function B(t) {
  t.forEach(Ge);
}
function H(t) {
  return typeof t == "function";
}
function L(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function $e(t) {
  return Object.keys(t).length === 0;
}
function fe(t, e, n, l) {
  if (t) {
    const s = He(t, e, n, l);
    return t[0](s);
  }
}
function He(t, e, n, l) {
  return t[1] && l ? I(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function ae(t, e, n, l) {
  if (t[2] && l) {
    const s = t[2](l(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const o = [], c = Math.max(e.dirty.length, s.length);
      for (let i = 0; i < c; i += 1)
        o[i] = e.dirty[i] | s[i];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function de(t, e, n, l, s, o) {
  if (s) {
    const c = He(e, n, l, o);
    t.p(c, s);
  }
}
function me(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let l = 0; l < n; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Oe(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function ne(t, e) {
  const n = {};
  e = new Set(e);
  for (const l in t)
    !e.has(l) && l[0] !== "$" && (n[l] = t[l]);
  return n;
}
function D(t) {
  return t && H(t.destroy) ? t.destroy : S;
}
function P(t, e) {
  t.appendChild(e);
}
function y(t, e, n) {
  t.insertBefore(e, n || null);
}
function w(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function xe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function M(t) {
  return document.createElement(t);
}
function K(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ge(t) {
  return document.createTextNode(t);
}
function U() {
  return ge(" ");
}
function V() {
  return ge("");
}
function ee(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const et = ["width", "height"];
function Ce(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const l in e)
    e[l] == null ? t.removeAttribute(l) : l === "style" ? t.style.cssText = e[l] : l === "__value" ? t.value = t[l] = e[l] : n[l] && n[l].set && et.indexOf(l) === -1 ? t[l] = e[l] : p(t, l, e[l]);
}
function je(t, e) {
  for (const n in e)
    p(t, n, e[n]);
}
function tt(t, e) {
  Object.keys(e).forEach((n) => {
    nt(t, n, e[n]);
  });
}
function nt(t, e, n) {
  const l = e.toLowerCase();
  l in t ? t[l] = typeof t[l] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : p(t, e, n);
}
function ue(t) {
  return /-/.test(t) ? tt : Ce;
}
function lt(t) {
  return Array.from(t.childNodes);
}
function st(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function be(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function X(t, e, n) {
  t.classList.toggle(e, !!n);
}
function it(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: l });
}
function Ne(t, e) {
  return new t(e);
}
let ce;
function oe(t) {
  ce = t;
}
function W() {
  if (!ce)
    throw new Error("Function called outside component initialization");
  return ce;
}
function ot(t) {
  W().$$.on_mount.push(t);
}
function rt(t) {
  W().$$.on_destroy.push(t);
}
function ut() {
  const t = W();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const o = it(
        /** @type {string} */
        e,
        n,
        { cancelable: l }
      );
      return s.slice().forEach((c) => {
        c.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ct(t, e) {
  return W().$$.context.set(t, e), e;
}
function Ve(t) {
  return W().$$.context.get(t);
}
const x = [], J = [];
let te = [];
const Ae = [], ft = /* @__PURE__ */ Promise.resolve();
let qe = !1;
function at() {
  qe || (qe = !0, ft.then(We));
}
function Me(t) {
  te.push(t);
}
const we = /* @__PURE__ */ new Set();
let $ = 0;
function We() {
  if ($ !== 0)
    return;
  const t = ce;
  do {
    try {
      for (; $ < x.length; ) {
        const e = x[$];
        $++, oe(e), dt(e.$$);
      }
    } catch (e) {
      throw x.length = 0, $ = 0, e;
    }
    for (oe(null), x.length = 0, $ = 0; J.length; )
      J.pop()();
    for (let e = 0; e < te.length; e += 1) {
      const n = te[e];
      we.has(n) || (we.add(n), n());
    }
    te.length = 0;
  } while (x.length);
  for (; Ae.length; )
    Ae.pop()();
  qe = !1, we.clear(), oe(t);
}
function dt(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Me);
  }
}
function mt(t) {
  const e = [], n = [];
  te.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), te = e;
}
const pe = /* @__PURE__ */ new Set();
let Y;
function se() {
  Y = {
    r: 0,
    c: [],
    p: Y
    // parent group
  };
}
function ie() {
  Y.r || B(Y.c), Y = Y.p;
}
function E(t, e) {
  t && t.i && (pe.delete(t), t.i(e));
}
function C(t, e, n, l) {
  if (t && t.o) {
    if (pe.has(t))
      return;
    pe.add(t), Y.c.push(() => {
      pe.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function Ie(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function le(t, e) {
  const n = {}, l = {}, s = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const c = t[o], i = e[o];
    if (i) {
      for (const r in c)
        r in i || (l[r] = 1);
      for (const r in i)
        s[r] || (n[r] = i[r], s[r] = 1);
      t[o] = i;
    } else
      for (const r in c)
        s[r] = 1;
  }
  for (const c in l)
    c in n || (n[c] = void 0);
  return n;
}
function _e(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Q(t) {
  t && t.c();
}
function F(t, e, n) {
  const { fragment: l, after_update: s } = t.$$;
  l && l.m(e, n), Me(() => {
    const o = t.$$.on_mount.map(Ge).filter(H);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : B(o), t.$$.on_mount = [];
  }), s.forEach(Me);
}
function G(t, e) {
  const n = t.$$;
  n.fragment !== null && (mt(n.after_update), B(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function _t(t, e) {
  t.$$.dirty[0] === -1 && (x.push(t), at(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(t, e, n, l, s, o, c = null, i = [-1]) {
  const r = ce;
  oe(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: S,
    not_equal: s,
    bound: Se(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (r ? r.$$.context : [])),
    // everything else
    callbacks: Se(),
    dirty: i,
    skip_bound: !1,
    root: e.target || r.$$.root
  };
  c && c(u.root);
  let f = !1;
  if (u.ctx = n ? n(t, e.props || {}, (a, d, ...h) => {
    const b = h.length ? h[0] : d;
    return u.ctx && s(u.ctx[a], u.ctx[a] = b) && (!u.skip_bound && u.bound[a] && u.bound[a](b), f && _t(t, a)), d;
  }) : [], u.update(), f = !0, B(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = lt(e.target);
      u.fragment && u.fragment.l(a), a.forEach(w);
    } else
      u.fragment && u.fragment.c();
    e.intro && E(t.$$.fragment), F(t, e.target, e.anchor), We();
  }
  oe(r);
}
class z {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ve(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ve(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    G(this, 1), this.$destroy = S;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!H(n))
      return S;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const s = l.indexOf(n);
      s !== -1 && l.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !$e(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const pt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pt);
const Ye = "archive-explorer", Je = "0.0.1";
function gt(t, e, n, l) {
  function s(o) {
    return o instanceof n ? o : new n(function(c) {
      c(o);
    });
  }
  return new (n || (n = Promise))(function(o, c) {
    function i(f) {
      try {
        u(l.next(f));
      } catch (a) {
        c(a);
      }
    }
    function r(f) {
      try {
        u(l.throw(f));
      } catch (a) {
        c(a);
      }
    }
    function u(f) {
      f.done ? o(f.value) : s(f.value).then(i, r);
    }
    u((l = l.apply(t, e || [])).next());
  });
}
function ht(t) {
  let e, n;
  return {
    c() {
      e = K("svg"), n = K("path"), p(n, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), p(e, "xmlns", "http://www.w3.org/2000/svg"), p(e, "viewBox", "0 -960 960 960"), p(e, "width", "24"), p(e, "height", "24"), p(e, "fill", "#004552");
    },
    m(l, s) {
      y(l, e, s), P(e, n);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && w(e);
    }
  };
}
class vt extends z {
  constructor(e) {
    super(), R(this, e, null, ht, L, {});
  }
}
function bt(t) {
  let e, n;
  return {
    c() {
      e = K("svg"), n = K("path"), p(n, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), p(e, "xmlns", "http://www.w3.org/2000/svg"), p(e, "height", "24px"), p(e, "viewBox", "0 -960 960 960"), p(e, "width", "24px"), p(e, "fill", "#004552");
    },
    m(l, s) {
      y(l, e, s), P(e, n);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && w(e);
    }
  };
}
class wt extends z {
  constructor(e) {
    super(), R(this, e, null, bt, L, {});
  }
}
function kt(t) {
  let e, n;
  return {
    c() {
      e = K("svg"), n = K("path"), p(n, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), p(e, "xmlns", "http://www.w3.org/2000/svg"), p(e, "height", "24px"), p(e, "viewBox", "0 -960 960 960"), p(e, "width", "24px"), p(e, "fill", "#004552");
    },
    m(l, s) {
      y(l, e, s), P(e, n);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && w(e);
    }
  };
}
class yt extends z {
  constructor(e) {
    super(), R(this, e, null, kt, L, {});
  }
}
function re(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
const Le = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Et = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Te(t) {
  let e, n = [];
  t.$on = (s, o) => {
    let c = s, i = () => {
    };
    return e ? i = e(c, o) : n.push([c, o]), c.match(Le) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', c), () => {
      i();
    };
  };
  function l(s) {
    const o = t.$$.callbacks[s.type];
    o && o.slice().forEach((c) => c.call(this, s));
  }
  return (s) => {
    const o = [], c = {};
    e = (i, r) => {
      let u = i, f = r, a = !1;
      const d = u.match(Le), h = u.match(Et), b = d || h;
      if (u.match(/^SMUI:\w+:/)) {
        const j = u.split(":");
        let m = "";
        for (let _ = 0; _ < j.length; _++)
          m += _ === j.length - 1 ? ":" + j[_] : j[_].split("-").map((g) => g.slice(0, 1).toUpperCase() + g.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${m.split("$")[0]}.`), u = m;
      }
      if (b) {
        const j = u.split(d ? ":" : "$");
        u = j[0];
        const m = j.slice(1).reduce((_, g) => (_[g] = !0, _), {});
        m.passive && (a = a || {}, a.passive = !0), m.nonpassive && (a = a || {}, a.passive = !1), m.capture && (a = a || {}, a.capture = !0), m.once && (a = a || {}, a.once = !0), m.preventDefault && (f = Ct(f)), m.stopPropagation && (f = qt(f)), m.stopImmediatePropagation && (f = Mt(f)), m.self && (f = Ot(s, f)), m.trusted && (f = Tt(f));
      }
      const A = Be(s, u, f, a), k = () => {
        A();
        const j = o.indexOf(k);
        j > -1 && o.splice(j, 1);
      };
      return o.push(k), u in c || (c[u] = Be(s, u, l)), k;
    };
    for (let i = 0; i < n.length; i++)
      e(n[i][0], n[i][1]);
    return {
      destroy: () => {
        for (let i = 0; i < o.length; i++)
          o[i]();
        for (let i of Object.entries(c))
          i[1]();
      }
    };
  };
}
function Be(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function Ct(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function qt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function Mt(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function Ot(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function Tt(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function he(t, e) {
  let n = [];
  if (e)
    for (let l = 0; l < e.length; l++) {
      const s = e[l], o = Array.isArray(s) ? s[0] : s;
      Array.isArray(s) && s.length > 1 ? n.push(o(t, s[1])) : n.push(o(t));
    }
  return {
    update(l) {
      if ((l && l.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (l)
        for (let s = 0; s < l.length; s++) {
          const o = n[s];
          if (o && o.update) {
            const c = l[s];
            Array.isArray(c) && c.length > 1 ? o.update(c[1]) : o.update();
          }
        }
    },
    destroy() {
      for (let l = 0; l < n.length; l++) {
        const s = n[l];
        s && s.destroy && s.destroy();
      }
    }
  };
}
function Pt(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, l, s = (
    /*tag*/
    t[1] && ke(t)
  );
  return {
    c() {
      s && s.c(), n = V();
    },
    m(o, c) {
      s && s.m(o, c), y(o, n, c), l = !0;
    },
    p(o, c) {
      /*tag*/
      o[1] ? e ? L(
        e,
        /*tag*/
        o[1]
      ) ? (s.d(1), s = ke(o), e = /*tag*/
      o[1], s.c(), s.m(n.parentNode, n)) : s.p(o, c) : (s = ke(o), e = /*tag*/
      o[1], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*tag*/
      o[1]);
    },
    i(o) {
      l || (E(s, o), l = !0);
    },
    o(o) {
      C(s, o), l = !1;
    },
    d(o) {
      o && w(n), s && s.d(o);
    }
  };
}
function St(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, l = (
    /*tag*/
    t[1] && ye(t)
  );
  return {
    c() {
      l && l.c(), n = V();
    },
    m(s, o) {
      l && l.m(s, o), y(s, n, o);
    },
    p(s, o) {
      /*tag*/
      s[1] ? e ? L(
        e,
        /*tag*/
        s[1]
      ) ? (l.d(1), l = ye(s), e = /*tag*/
      s[1], l.c(), l.m(n.parentNode, n)) : l.p(s, o) : (l = ye(s), e = /*tag*/
      s[1], l.c(), l.m(n.parentNode, n)) : e && (l.d(1), l = null, e = /*tag*/
      s[1]);
    },
    i: S,
    o: S,
    d(s) {
      s && w(n), l && l.d(s);
    }
  };
}
function jt(t) {
  let e, n, l, s, o;
  const c = (
    /*#slots*/
    t[8].default
  ), i = fe(
    c,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let r = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let f = 0; f < r.length; f += 1)
    u = I(u, r[f]);
  return {
    c() {
      e = K("svg"), i && i.c(), je(e, u);
    },
    m(f, a) {
      y(f, e, a), i && i.m(e, null), t[9](e), l = !0, s || (o = [
        D(n = he.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        D(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, a) {
      i && i.p && (!l || a & /*$$scope*/
      128) && de(
        i,
        c,
        f,
        /*$$scope*/
        f[7],
        l ? ae(
          c,
          /*$$scope*/
          f[7],
          a,
          null
        ) : me(
          /*$$scope*/
          f[7]
        ),
        null
      ), je(e, u = le(r, [a & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && H(n.update) && a & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (E(i, f), l = !0);
    },
    o(f) {
      C(i, f), l = !1;
    },
    d(f) {
      f && w(e), i && i.d(f), t[9](null), s = !1, B(o);
    }
  };
}
function ke(t) {
  let e, n, l, s, o;
  const c = (
    /*#slots*/
    t[8].default
  ), i = fe(
    c,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let r = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let f = 0; f < r.length; f += 1)
    u = I(u, r[f]);
  return {
    c() {
      e = M(
        /*tag*/
        t[1]
      ), i && i.c(), ue(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(f, a) {
      y(f, e, a), i && i.m(e, null), t[11](e), l = !0, s || (o = [
        D(n = he.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        D(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, a) {
      i && i.p && (!l || a & /*$$scope*/
      128) && de(
        i,
        c,
        f,
        /*$$scope*/
        f[7],
        l ? ae(
          c,
          /*$$scope*/
          f[7],
          a,
          null
        ) : me(
          /*$$scope*/
          f[7]
        ),
        null
      ), ue(
        /*tag*/
        f[1]
      )(e, u = le(r, [a & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && H(n.update) && a & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (E(i, f), l = !0);
    },
    o(f) {
      C(i, f), l = !1;
    },
    d(f) {
      f && w(e), i && i.d(f), t[11](null), s = !1, B(o);
    }
  };
}
function ye(t) {
  let e, n, l, s, o = [
    /*$$restProps*/
    t[5]
  ], c = {};
  for (let i = 0; i < o.length; i += 1)
    c = I(c, o[i]);
  return {
    c() {
      e = M(
        /*tag*/
        t[1]
      ), ue(
        /*tag*/
        t[1]
      )(e, c);
    },
    m(i, r) {
      y(i, e, r), t[10](e), l || (s = [
        D(n = he.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        D(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], l = !0);
    },
    p(i, r) {
      ue(
        /*tag*/
        i[1]
      )(e, c = le(o, [r & /*$$restProps*/
      32 && /*$$restProps*/
      i[5]])), n && H(n.update) && r & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        i[0]
      );
    },
    d(i) {
      i && w(e), t[10](null), l = !1, B(s);
    }
  };
}
function Nt(t) {
  let e, n, l, s;
  const o = [jt, St, Pt], c = [];
  function i(r, u) {
    return (
      /*tag*/
      r[1] === "svg" ? 0 : (
        /*selfClosing*/
        r[3] ? 1 : 2
      )
    );
  }
  return e = i(t), n = c[e] = o[e](t), {
    c() {
      n.c(), l = V();
    },
    m(r, u) {
      c[e].m(r, u), y(r, l, u), s = !0;
    },
    p(r, [u]) {
      let f = e;
      e = i(r), e === f ? c[e].p(r, u) : (se(), C(c[f], 1, 1, () => {
        c[f] = null;
      }), ie(), n = c[e], n ? n.p(r, u) : (n = c[e] = o[e](r), n.c()), E(n, 1), n.m(l.parentNode, l));
    },
    i(r) {
      s || (E(n), s = !0);
    },
    o(r) {
      C(n), s = !1;
    },
    d(r) {
      r && w(l), c[e].d(r);
    }
  };
}
function At(t, e, n) {
  let l;
  const s = ["use", "tag", "getElement"];
  let o = ne(e, s), { $$slots: c = {}, $$scope: i } = e, { use: r = [] } = e, { tag: u } = e;
  const f = Te(W());
  let a;
  function d() {
    return a;
  }
  function h(k) {
    J[k ? "unshift" : "push"](() => {
      a = k, n(2, a);
    });
  }
  function b(k) {
    J[k ? "unshift" : "push"](() => {
      a = k, n(2, a);
    });
  }
  function A(k) {
    J[k ? "unshift" : "push"](() => {
      a = k, n(2, a);
    });
  }
  return t.$$set = (k) => {
    e = I(I({}, e), Oe(k)), n(5, o = ne(e, s)), "use" in k && n(0, r = k.use), "tag" in k && n(1, u = k.tag), "$$scope" in k && n(7, i = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tag*/
    2 && n(3, l = [
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
    r,
    u,
    a,
    l,
    f,
    o,
    d,
    i,
    c,
    h,
    b,
    A
  ];
}
class Ke extends z {
  constructor(e) {
    super(), R(this, e, At, Nt, L, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function It(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), l = fe(
    n,
    t,
    /*$$scope*/
    t[13],
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
      8192) && de(
        l,
        n,
        s,
        /*$$scope*/
        s[13],
        e ? ae(
          n,
          /*$$scope*/
          s[13],
          o,
          null
        ) : me(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (E(l, s), e = !0);
    },
    o(s) {
      C(l, s), e = !1;
    },
    d(s) {
      l && l.d(s);
    }
  };
}
function Lt(t) {
  let e, n, l;
  const s = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[8],
        .../*use*/
        t[0]
      ]
    },
    {
      class: re({
        [
          /*className*/
          t[1]
        ]: !0,
        [
          /*smuiClass*/
          t[6]
        ]: !0,
        .../*smuiClassMap*/
        t[5]
      })
    },
    /*props*/
    t[7],
    /*$$restProps*/
    t[9]
  ];
  var o = (
    /*component*/
    t[2]
  );
  function c(i, r) {
    let u = {
      $$slots: { default: [It] },
      $$scope: { ctx: i }
    };
    for (let f = 0; f < s.length; f += 1)
      u = I(u, s[f]);
    return r !== void 0 && r & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = I(u, le(s, [
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
        class: re({
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
      128 && _e(
        /*props*/
        i[7]
      ),
      r & /*$$restProps*/
      512 && _e(
        /*$$restProps*/
        i[9]
      )
    ]))), { props: u };
  }
  return o && (e = Ne(o, c(t)), t[12](e)), {
    c() {
      e && Q(e.$$.fragment), n = V();
    },
    m(i, r) {
      e && F(e, i, r), y(i, n, r), l = !0;
    },
    p(i, [r]) {
      if (r & /*component*/
      4 && o !== (o = /*component*/
      i[2])) {
        if (e) {
          se();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            G(u, 1);
          }), ie();
        }
        o ? (e = Ne(o, c(i, r)), i[12](e), Q(e.$$.fragment), E(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else if (o) {
        const u = r & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? le(s, [
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
            class: re({
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
          128 && _e(
            /*props*/
            i[7]
          ),
          r & /*$$restProps*/
          512 && _e(
            /*$$restProps*/
            i[9]
          )
        ]) : {};
        r & /*$$scope*/
        8192 && (u.$$scope = { dirty: r, ctx: i }), e.$set(u);
      }
    },
    i(i) {
      l || (e && E(e.$$.fragment, i), l = !0);
    },
    o(i) {
      e && C(e.$$.fragment, i), l = !1;
    },
    d(i) {
      i && w(n), t[12](null), e && G(e, i);
    }
  };
}
const Z = {
  component: Ke,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Bt(t, e, n) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let s = ne(e, l), { $$slots: o = {}, $$scope: c } = e, { use: i = [] } = e, { class: r = "" } = e, u;
  const f = Z.class, a = {}, d = [], h = Z.contexts, b = Z.props;
  let { component: A = Z.component } = e, { tag: k = A === Ke ? Z.tag : void 0 } = e;
  Object.entries(Z.classMap).forEach(([g, O]) => {
    const v = Ve(O);
    v && "subscribe" in v && d.push(v.subscribe((T) => {
      n(5, a[g] = T, a);
    }));
  });
  const j = Te(W());
  for (let g in h)
    h.hasOwnProperty(g) && ct(g, h[g]);
  rt(() => {
    for (const g of d)
      g();
  });
  function m() {
    return u.getElement();
  }
  function _(g) {
    J[g ? "unshift" : "push"](() => {
      u = g, n(4, u);
    });
  }
  return t.$$set = (g) => {
    e = I(I({}, e), Oe(g)), n(9, s = ne(e, l)), "use" in g && n(0, i = g.use), "class" in g && n(1, r = g.class), "component" in g && n(2, A = g.component), "tag" in g && n(3, k = g.tag), "$$scope" in g && n(13, c = g.$$scope);
  }, [
    i,
    r,
    A,
    k,
    u,
    a,
    f,
    b,
    j,
    s,
    m,
    o,
    _,
    c
  ];
}
class Ut extends z {
  constructor(e) {
    super(), R(this, e, Bt, Lt, L, {
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
const Ue = Object.assign({}, Z);
function N(t) {
  return new Proxy(Ut, {
    construct: function(e, n) {
      return Object.assign(Z, Ue, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(Z, Ue, t), e[n];
    }
  });
}
N({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
N({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
N({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
N({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
N({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
N({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Zt(t) {
  let e, n, l, s, o, c;
  const i = (
    /*#slots*/
    t[8].default
  ), r = fe(
    i,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    {
      class: n = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-deprecated-list-item__graphic": !0,
        "mdc-menu__selection-group-icon": (
          /*menuSelectionGroup*/
          t[4]
        )
      })
    },
    /*$$restProps*/
    t[5]
  ], f = {};
  for (let a = 0; a < u.length; a += 1)
    f = I(f, u[a]);
  return {
    c() {
      e = M("span"), r && r.c(), Ce(e, f);
    },
    m(a, d) {
      y(a, e, d), r && r.m(e, null), t[9](e), s = !0, o || (c = [
        D(l = he.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        D(
          /*forwardEvents*/
          t[3].call(null, e)
        )
      ], o = !0);
    },
    p(a, [d]) {
      r && r.p && (!s || d & /*$$scope*/
      128) && de(
        r,
        i,
        a,
        /*$$scope*/
        a[7],
        s ? ae(
          i,
          /*$$scope*/
          a[7],
          d,
          null
        ) : me(
          /*$$scope*/
          a[7]
        ),
        null
      ), Ce(e, f = le(u, [
        (!s || d & /*className*/
        2 && n !== (n = re({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            a[4]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        a[5]
      ])), l && H(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i(a) {
      s || (E(r, a), s = !0);
    },
    o(a) {
      C(r, a), s = !1;
    },
    d(a) {
      a && w(e), r && r.d(a), t[9](null), o = !1, B(c);
    }
  };
}
function Dt(t, e, n) {
  const l = ["use", "class", "getElement"];
  let s = ne(e, l), { $$slots: o = {}, $$scope: c } = e;
  const i = Te(W());
  let { use: r = [] } = e, { class: u = "" } = e, f, a = Ve("SMUI:list:graphic:menu-selection-group");
  function d() {
    return f;
  }
  function h(b) {
    J[b ? "unshift" : "push"](() => {
      f = b, n(2, f);
    });
  }
  return t.$$set = (b) => {
    e = I(I({}, e), Oe(b)), n(5, s = ne(e, l)), "use" in b && n(0, r = b.use), "class" in b && n(1, u = b.class), "$$scope" in b && n(7, c = b.$$scope);
  }, [
    r,
    u,
    f,
    i,
    a,
    s,
    d,
    c,
    o,
    h
  ];
}
class Rt extends z {
  constructor(e) {
    super(), R(this, e, Dt, Zt, L, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
N({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
N({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
N({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
N({
  class: "mdc-menu__selection-group-icon",
  component: Rt
});
N({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
N({
  class: "mdc-dialog__title",
  tag: "h2"
});
N({
  class: "mdc-dialog__content",
  tag: "div"
});
N({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
N({
  class: "smui-paper__content",
  tag: "div"
});
N({
  class: "smui-paper__title",
  tag: "h5"
});
N({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Ze(t) {
  let e, n, l;
  return {
    c() {
      e = M("div"), n = ge(
        /*text*/
        t[0]
      ), p(e, "class", l = "tooltip-box visible " + /*position*/
      t[1] + " svelte-11wr6ok");
    },
    m(s, o) {
      y(s, e, o), P(e, n);
    },
    p(s, o) {
      o & /*text*/
      1 && st(
        n,
        /*text*/
        s[0]
      ), o & /*position*/
      2 && l !== (l = "tooltip-box visible " + /*position*/
      s[1] + " svelte-11wr6ok") && p(e, "class", l);
    },
    d(s) {
      s && w(e);
    }
  };
}
function zt(t) {
  let e, n, l, s, o;
  const c = (
    /*#slots*/
    t[4].default
  ), i = fe(
    c,
    t,
    /*$$scope*/
    t[3],
    null
  );
  let r = (
    /*visible*/
    t[2] && Ze(t)
  );
  return {
    c() {
      e = M("div"), i && i.c(), n = U(), r && r.c(), p(e, "class", "tooltip-container svelte-11wr6ok");
    },
    m(u, f) {
      y(u, e, f), i && i.m(e, null), P(e, n), r && r.m(e, null), l = !0, s || (o = [
        ee(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        ee(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[6]
        )
      ], s = !0);
    },
    p(u, [f]) {
      i && i.p && (!l || f & /*$$scope*/
      8) && de(
        i,
        c,
        u,
        /*$$scope*/
        u[3],
        l ? ae(
          c,
          /*$$scope*/
          u[3],
          f,
          null
        ) : me(
          /*$$scope*/
          u[3]
        ),
        null
      ), /*visible*/
      u[2] ? r ? r.p(u, f) : (r = Ze(u), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    i(u) {
      l || (E(i, u), l = !0);
    },
    o(u) {
      C(i, u), l = !1;
    },
    d(u) {
      u && w(e), i && i.d(u), r && r.d(), s = !1, B(o);
    }
  };
}
function Ft(t, e, n) {
  let { $$slots: l = {}, $$scope: s } = e, { text: o } = e, { position: c = "top" } = e, i = !1;
  const r = () => n(2, i = !0), u = () => n(2, i = !1);
  return t.$$set = (f) => {
    "text" in f && n(0, o = f.text), "position" in f && n(1, c = f.position), "$$scope" in f && n(3, s = f.$$scope);
  }, [
    o,
    c,
    i,
    s,
    l,
    r,
    u
  ];
}
class Gt extends z {
  constructor(e) {
    super(), R(this, e, Ft, zt, L, { text: 0, position: 1 });
  }
}
function De(t, e, n) {
  const l = t.slice();
  return l[17] = e[n], l[19] = n, l;
}
function Ht(t) {
  let e = (
    /*i*/
    t[19] + 1 + ""
  ), n;
  return {
    c() {
      n = ge(e);
    },
    m(l, s) {
      y(l, n, s);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && w(n);
    }
  };
}
function Vt(t) {
  let e, n, l, s;
  const o = [Jt, Yt, Wt], c = [];
  function i(r, u) {
    return (
      /*pluginStatus*/
      r[2][
        /*plugin*/
        r[17].tag
      ] === "check" ? 0 : (
        /*pluginStatus*/
        r[2][
          /*plugin*/
          r[17].tag
        ] === "error" ? 1 : 2
      )
    );
  }
  return e = i(t), n = c[e] = o[e](t), {
    c() {
      n.c(), l = V();
    },
    m(r, u) {
      c[e].m(r, u), y(r, l, u), s = !0;
    },
    p(r, u) {
      let f = e;
      e = i(r), e !== f && (se(), C(c[f], 1, 1, () => {
        c[f] = null;
      }), ie(), n = c[e], n || (n = c[e] = o[e](r), n.c()), E(n, 1), n.m(l.parentNode, l));
    },
    i(r) {
      s || (E(n), s = !0);
    },
    o(r) {
      C(n), s = !1;
    },
    d(r) {
      r && w(l), c[e].d(r);
    }
  };
}
function Wt(t) {
  let e, n;
  return e = new yt({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      F(e, l, s), n = !0;
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      G(e, l);
    }
  };
}
function Yt(t) {
  let e, n;
  return e = new wt({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      F(e, l, s), n = !0;
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      G(e, l);
    }
  };
}
function Jt(t) {
  let e, n;
  return e = new vt({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      F(e, l, s), n = !0;
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      G(e, l);
    }
  };
}
function Kt(t) {
  let e, n, l, s, o, c, i;
  const r = [Vt, Ht], u = [];
  function f(d, h) {
    return h & /*visited, tagName*/
    24 && (n = null), n == null && (n = !!/*visited*/
    (d[4].includes(
      /*plugin*/
      d[17].tag
    ) && /*plugin*/
    d[17].tag !== /*tagName*/
    d[3])), n ? 0 : 1;
  }
  l = f(t, -1), s = u[l] = r[l](t);
  function a() {
    return (
      /*click_handler_1*/
      t[13](
        /*plugin*/
        t[17]
      )
    );
  }
  return {
    c() {
      e = M("button"), s.c(), p(e, "class", "svelte-1xq5awa"), X(e, "not-visited", !/*visited*/
      t[4].includes(
        /*plugin*/
        t[17].tag
      )), X(
        e,
        "current",
        /*plugin*/
        t[17].tag === /*tagName*/
        t[3]
      ), X(
        e,
        "visited",
        /*visited*/
        t[4].includes(
          /*plugin*/
          t[17].tag
        ) && /*plugin*/
        t[17].tag !== /*tagName*/
        t[3]
      );
    },
    m(d, h) {
      y(d, e, h), u[l].m(e, null), o = !0, c || (i = ee(e, "click", a), c = !0);
    },
    p(d, h) {
      t = d;
      let b = l;
      l = f(t, h), l === b ? u[l].p(t, h) : (se(), C(u[b], 1, 1, () => {
        u[b] = null;
      }), ie(), s = u[l], s ? s.p(t, h) : (s = u[l] = r[l](t), s.c()), E(s, 1), s.m(e, null)), (!o || h & /*visited, plugins*/
      144) && X(e, "not-visited", !/*visited*/
      t[4].includes(
        /*plugin*/
        t[17].tag
      )), (!o || h & /*plugins, tagName*/
      136) && X(
        e,
        "current",
        /*plugin*/
        t[17].tag === /*tagName*/
        t[3]
      ), (!o || h & /*visited, plugins, tagName*/
      152) && X(
        e,
        "visited",
        /*visited*/
        t[4].includes(
          /*plugin*/
          t[17].tag
        ) && /*plugin*/
        t[17].tag !== /*tagName*/
        t[3]
      );
    },
    i(d) {
      o || (E(s), o = !0);
    },
    o(d) {
      C(s), o = !1;
    },
    d(d) {
      d && w(e), u[l].d(), c = !1, i();
    }
  };
}
function Qt(t) {
  let e;
  return {
    c() {
      e = M("div"), p(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(n, l) {
      y(n, e, l);
    },
    d(n) {
      n && w(e);
    }
  };
}
function Re(t) {
  let e, n, l, s, o, c, i;
  n = new Gt({
    props: {
      text: (
        /*tooltipText*/
        t[5][
          /*plugin*/
          t[17].tag
        ]
      ),
      position: "bottom",
      $$slots: { default: [Kt] },
      $$scope: { ctx: t }
    }
  });
  let r = (
    /*i*/
    t[19] < /*plugins*/
    t[7].length - 1 && Qt()
  );
  return {
    c() {
      e = M("div"), Q(n.$$.fragment), l = U(), s = M("p"), s.textContent = `${/*plugin*/
      t[17].label}`, o = U(), r && r.c(), c = V(), p(s, "class", "svelte-1xq5awa"), p(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(u, f) {
      y(u, e, f), F(n, e, null), P(e, l), P(e, s), y(u, o, f), r && r.m(u, f), y(u, c, f), i = !0;
    },
    p(u, f) {
      const a = {};
      f & /*tooltipText*/
      32 && (a.text = /*tooltipText*/
      u[5][
        /*plugin*/
        u[17].tag
      ]), f & /*$$scope, visited, tagName, pluginStatus*/
      1048604 && (a.$$scope = { dirty: f, ctx: u }), n.$set(a);
    },
    i(u) {
      i || (E(n.$$.fragment, u), i = !0);
    },
    o(u) {
      C(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && (w(e), w(o), w(c)), G(n), r && r.d(u);
    }
  };
}
function ze(t) {
  let e = (
    /*tagName*/
    t[3]
  ), n, l = (
    /*tagName*/
    t[3] && Ee(t)
  );
  return {
    c() {
      l && l.c(), n = V();
    },
    m(s, o) {
      l && l.m(s, o), y(s, n, o);
    },
    p(s, o) {
      /*tagName*/
      s[3] ? e ? L(
        e,
        /*tagName*/
        s[3]
      ) ? (l.d(1), l = Ee(s), e = /*tagName*/
      s[3], l.c(), l.m(n.parentNode, n)) : l.p(s, o) : (l = Ee(s), e = /*tagName*/
      s[3], l.c(), l.m(n.parentNode, n)) : e && (l.d(1), l = null, e = /*tagName*/
      s[3]);
    },
    d(s) {
      s && w(n), l && l.d(s);
    }
  };
}
function Ee(t) {
  let e, n, l, s;
  return {
    c() {
      e = M(
        /*tagName*/
        t[3]
      ), ue(
        /*tagName*/
        t[3]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(o, c) {
      y(o, e, c), l || (s = D(n = xt.call(null, e, {
        doc: (
          /*doc*/
          t[0]
        ),
        editCount: (
          /*editCount*/
          t[1]
        )
      })), l = !0);
    },
    p(o, c) {
      n && H(n.update) && c & /*doc, editCount*/
      3 && n.update.call(null, {
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
      o && w(e), l = !1, s();
    }
  };
}
function Xt(t) {
  let e, n, l, s, o, c, i, r, u, f, a, d, h, b, A, k, j, m = Ie(
    /*plugins*/
    t[7]
  ), _ = [];
  for (let v = 0; v < m.length; v += 1)
    _[v] = Re(De(t, m, v));
  const g = (v) => C(_[v], 1, 1, () => {
    _[v] = null;
  });
  let O = (
    /*tagName*/
    t[3] && ze(t)
  );
  return {
    c() {
      e = M("div"), n = M("div"), l = M("button"), l.textContent = "exit", s = U(), o = M("p"), o.textContent = "Plugin Flow", c = U(), i = M("div");
      for (let v = 0; v < _.length; v += 1)
        _[v].c();
      r = U(), u = M("div"), f = M("button"), f.textContent = "Back", a = U(), d = M("button"), d.textContent = "Next", h = U(), O && O.c(), b = V(), p(l, "class", "back-button svelte-1xq5awa"), p(o, "class", "plugin-flow-title svelte-1xq5awa"), be(n, "display", "flex"), be(n, "align-items", "center"), be(n, "gap", "0.5rem"), p(n, "class", "svelte-1xq5awa"), p(i, "class", "plugin-steps svelte-1xq5awa"), p(f, "class", "back-button svelte-1xq5awa"), p(d, "class", "next-button svelte-1xq5awa"), p(u, "class", "stepper-navigation svelte-1xq5awa"), p(e, "class", "stepper svelte-1xq5awa");
    },
    m(v, T) {
      y(v, e, T), P(e, n), P(n, l), P(n, s), P(n, o), P(e, c), P(e, i);
      for (let q = 0; q < _.length; q += 1)
        _[q] && _[q].m(i, null);
      P(e, r), P(e, u), P(u, f), P(u, a), P(u, d), y(v, h, T), O && O.m(v, T), y(v, b, T), A = !0, k || (j = [
        ee(
          l,
          "click",
          /*click_handler*/
          t[12]
        ),
        ee(
          f,
          "click",
          /*previousPlugin*/
          t[10]
        ),
        ee(
          d,
          "click",
          /*nextPlugin*/
          t[9]
        )
      ], k = !0);
    },
    p(v, [T]) {
      if (T & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      444) {
        m = Ie(
          /*plugins*/
          v[7]
        );
        let q;
        for (q = 0; q < m.length; q += 1) {
          const Pe = De(v, m, q);
          _[q] ? (_[q].p(Pe, T), E(_[q], 1)) : (_[q] = Re(Pe), _[q].c(), E(_[q], 1), _[q].m(i, null));
        }
        for (se(), q = m.length; q < _.length; q += 1)
          g(q);
        ie();
      }
      /*tagName*/
      v[3] ? O ? O.p(v, T) : (O = ze(v), O.c(), O.m(b.parentNode, b)) : O && (O.d(1), O = null);
    },
    i(v) {
      if (!A) {
        for (let T = 0; T < m.length; T += 1)
          E(_[T]);
        A = !0;
      }
    },
    o(v) {
      _ = _.filter(Boolean);
      for (let T = 0; T < _.length; T += 1)
        C(_[T]);
      A = !1;
    },
    d(v) {
      v && (w(e), w(h), w(b)), xe(_, v), O && O.d(v), k = !1, B(j);
    }
  };
}
function $t() {
  var t, e;
  const n = document.querySelector("open-scd");
  return (e = (t = n == null ? void 0 : n.shadowRoot) === null || t === void 0 ? void 0 : t.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function xt(t, e) {
  return Object.assign(t, e), { update: (n) => Object.assign(t, n) };
}
function en(t, e, n) {
  let l, { doc: s } = e, { editCount: o = -1 } = e, { host: c } = e, i = null, r = [];
  const u = ["check", "warning", "error"];
  let f = {};
  ut();
  function a(m) {
    var _;
    (_ = $t()) === null || _ === void 0 || _.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: m },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  const d = [
    {
      tag: "engineering-wizard",
      src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/substation.js",
      label: "Substation"
    },
    {
      tag: "substation-explorer",
      src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/ied.js",
      label: "IED"
    },
    {
      tag: "communication-editor",
      src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/communication.js",
      label: "Communication"
    }
  ];
  function h(m) {
    return gt(this, void 0, void 0, function* () {
      const _ = yield import(m.src);
      if (customElements.get(m.tag) || customElements.define(m.tag, _.default), n(3, i = m.tag), !r.includes(m.tag)) {
        n(4, r = [...r, m.tag]);
        const g = d.findIndex((O) => O.tag === m.tag);
        n(2, f = Object.assign(Object.assign({}, f), { [m.tag]: u[g] }));
      }
    });
  }
  ot(() => {
    h(d[0]), a(!1);
  });
  function b() {
    const m = d.findIndex((_) => _.tag === i);
    h(d[(m + 1) % d.length]);
  }
  function A() {
    const m = d.findIndex((_) => _.tag === i);
    h(d[(m - 1 + d.length) % d.length]);
  }
  const k = () => a(!0), j = (m) => h(m);
  return t.$$set = (m) => {
    "doc" in m && n(0, s = m.doc), "editCount" in m && n(1, o = m.editCount), "host" in m && n(11, c = m.host);
  }, t.$$.update = () => {
    t.$$.dirty & /*pluginStatus*/
    4 && n(5, l = d.reduce(
      (m, _) => {
        const g = f[_.tag];
        return m[_.tag] = g === "error" ? `Resolve errors in ${_.label}` : g === "warning" ? `Check warnings for ${_.label}` : `Load the ${_.label} editor`, m;
      },
      {}
    ));
  }, [
    s,
    o,
    f,
    i,
    r,
    l,
    a,
    d,
    h,
    b,
    A,
    c,
    k,
    j
  ];
}
class tn extends z {
  constructor(e) {
    super(), R(this, e, en, Xt, L, { doc: 0, editCount: 1, host: 11 });
  }
}
function Fe(t) {
  let e, n;
  return e = new tn({
    props: {
      doc: (
        /*doc*/
        t[0]
      ),
      editCount: (
        /*editCount*/
        t[2]
      )
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      F(e, l, s), n = !0;
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
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      G(e, l);
    }
  };
}
function nn(t) {
  let e, n, l, s, o, c = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && Fe(t)
  );
  return {
    c() {
      c && c.c(), e = U(), n = M("input"), l = U(), s = M("input"), p(n, "type", "hidden"), p(n, "name", "package-name"), n.value = Ye, p(s, "type", "hidden"), p(s, "name", "package-version"), s.value = Je;
    },
    m(i, r) {
      c && c.m(i, r), y(i, e, r), y(i, n, r), y(i, l, r), y(i, s, r), o = !0;
    },
    p(i, [r]) {
      /*doc*/
      i[0] || /*dev*/
      i[1] ? c ? (c.p(i, r), r & /*doc, dev*/
      3 && E(c, 1)) : (c = Fe(i), c.c(), E(c, 1), c.m(e.parentNode, e)) : c && (se(), C(c, 1, 1, () => {
        c = null;
      }), ie());
    },
    i(i) {
      o || (E(c), o = !0);
    },
    o(i) {
      C(c), o = !1;
    },
    d(i) {
      i && (w(e), w(n), w(l), w(s)), c && c.d(i);
    }
  };
}
function ln(t, e, n) {
  let { doc: l } = e, { dev: s = !1 } = e, { editCount: o = 0 } = e;
  return console.log("editcount", o), t.$$set = (c) => {
    "doc" in c && n(0, l = c.doc), "dev" in c && n(1, s = c.dev), "editCount" in c && n(2, o = c.editCount);
  }, [l, s, o];
}
class sn extends z {
  constructor(e) {
    super(), R(this, e, ln, nn, L, { doc: 0, dev: 1, editCount: 2 });
  }
}
class cn extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new sn({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = on();
    (n = this.shadowRoot) == null || n.appendChild(e);
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
function on() {
  const t = `${Ye}-v${Je}-style`, e = rn(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function rn() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  cn as default
};
