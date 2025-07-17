var Je = Object.defineProperty;
var Ke = (t, e, n) => e in t ? Je(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var pe = (t, e, n) => (Ke(t, typeof e != "symbol" ? e + "" : e, n), n);
function A() {
}
function N(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Re(t) {
  return t();
}
function Se() {
  return /* @__PURE__ */ Object.create(null);
}
function I(t) {
  t.forEach(Re);
}
function B(t) {
  return typeof t == "function";
}
function q(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Qe(t) {
  return Object.keys(t).length === 0;
}
function ie(t, e, n, l) {
  if (t) {
    const s = ze(t, e, n, l);
    return t[0](s);
  }
}
function ze(t, e, n, l) {
  return t[1] && l ? N(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function oe(t, e, n, l) {
  if (t[2] && l) {
    const s = t[2](l(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const o = [], r = Math.max(e.dirty.length, s.length);
      for (let i = 0; i < r; i += 1)
        o[i] = e.dirty[i] | s[i];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function ue(t, e, n, l, s, o) {
  if (s) {
    const r = ze(e, n, l, o);
    t.p(r, s);
  }
}
function re(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let l = 0; l < n; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Ce(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Q(t, e) {
  const n = {};
  e = new Set(e);
  for (const l in t)
    !e.has(l) && l[0] !== "$" && (n[l] = t[l]);
  return n;
}
function U(t) {
  return t && B(t.destroy) ? t.destroy : A;
}
function j(t, e) {
  t.appendChild(e);
}
function k(t, e, n) {
  t.insertBefore(e, n || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function We(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function M(t) {
  return document.createElement(t);
}
function we(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function me(t) {
  return document.createTextNode(t);
}
function T() {
  return me(" ");
}
function F() {
  return me("");
}
function te(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function w(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Xe = ["width", "height"];
function ke(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const l in e)
    e[l] == null ? t.removeAttribute(l) : l === "style" ? t.style.cssText = e[l] : l === "__value" ? t.value = t[l] = e[l] : n[l] && n[l].set && Xe.indexOf(l) === -1 ? t[l] = e[l] : w(t, l, e[l]);
}
function Pe(t, e) {
  for (const n in e)
    w(t, n, e[n]);
}
function $e(t, e) {
  Object.keys(e).forEach((n) => {
    xe(t, n, e[n]);
  });
}
function xe(t, e, n) {
  const l = e.toLowerCase();
  l in t ? t[l] = typeof t[l] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : w(t, e, n);
}
function ne(t) {
  return /-/.test(t) ? $e : ke;
}
function et(t) {
  return Array.from(t.childNodes);
}
function tt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Y(t, e, n) {
  t.classList.toggle(e, !!n);
}
function nt(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: l });
}
function Oe(t, e) {
  return new t(e);
}
let le;
function x(t) {
  le = t;
}
function D() {
  if (!le)
    throw new Error("Function called outside component initialization");
  return le;
}
function lt(t) {
  D().$$.on_mount.push(t);
}
function st(t) {
  D().$$.on_destroy.push(t);
}
function it() {
  const t = D();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const o = nt(
        /** @type {string} */
        e,
        n,
        { cancelable: l }
      );
      return s.slice().forEach((r) => {
        r.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ot(t, e) {
  return D().$$.context.set(t, e), e;
}
function Fe(t) {
  return D().$$.context.get(t);
}
const J = [], z = [];
let K = [];
const je = [], ut = /* @__PURE__ */ Promise.resolve();
let ye = !1;
function rt() {
  ye || (ye = !0, ut.then(Ge));
}
function Ee(t) {
  K.push(t);
}
const ge = /* @__PURE__ */ new Set();
let Z = 0;
function Ge() {
  if (Z !== 0)
    return;
  const t = le;
  do {
    try {
      for (; Z < J.length; ) {
        const e = J[Z];
        Z++, x(e), ct(e.$$);
      }
    } catch (e) {
      throw J.length = 0, Z = 0, e;
    }
    for (x(null), J.length = 0, Z = 0; z.length; )
      z.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const n = K[e];
      ge.has(n) || (ge.add(n), n());
    }
    K.length = 0;
  } while (J.length);
  for (; je.length; )
    je.pop()();
  ye = !1, ge.clear(), x(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), I(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ee);
  }
}
function ft(t) {
  const e = [], n = [];
  K.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), K = e;
}
const de = /* @__PURE__ */ new Set();
let R;
function ce() {
  R = {
    r: 0,
    c: [],
    p: R
    // parent group
  };
}
function fe() {
  R.r || I(R.c), R = R.p;
}
function E(t, e) {
  t && t.i && (de.delete(t), t.i(e));
}
function C(t, e, n, l) {
  if (t && t.o) {
    if (de.has(t))
      return;
    de.add(t), R.c.push(() => {
      de.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function Ne(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function W(t, e) {
  const n = {}, l = {}, s = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const r = t[o], i = e[o];
    if (i) {
      for (const u in r)
        u in i || (l[u] = 1);
      for (const u in i)
        s[u] || (n[u] = i[u], s[u] = 1);
      t[o] = i;
    } else
      for (const u in r)
        s[u] = 1;
  }
  for (const r in l)
    r in n || (n[r] = void 0);
  return n;
}
function ae(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function se(t) {
  t && t.c();
}
function X(t, e, n) {
  const { fragment: l, after_update: s } = t.$$;
  l && l.m(e, n), Ee(() => {
    const o = t.$$.on_mount.map(Re).filter(B);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : I(o), t.$$.on_mount = [];
  }), s.forEach(Ee);
}
function $(t, e) {
  const n = t.$$;
  n.fragment !== null && (ft(n.after_update), I(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function at(t, e) {
  t.$$.dirty[0] === -1 && (J.push(t), rt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function G(t, e, n, l, s, o, r = null, i = [-1]) {
  const u = le;
  x(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: A,
    not_equal: s,
    bound: Se(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Se(),
    dirty: i,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  r && r(c.root);
  let f = !1;
  if (c.ctx = n ? n(t, e.props || {}, (a, p, ...m) => {
    const h = m.length ? m[0] : p;
    return c.ctx && s(c.ctx[a], c.ctx[a] = h) && (!c.skip_bound && c.bound[a] && c.bound[a](h), f && at(t, a)), p;
  }) : [], c.update(), f = !0, I(c.before_update), c.fragment = l ? l(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = et(e.target);
      c.fragment && c.fragment.l(a), a.forEach(b);
    } else
      c.fragment && c.fragment.c();
    e.intro && E(t.$$.fragment), X(t, e.target, e.anchor), Ge();
  }
  x(u);
}
class V {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    pe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    pe(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!B(n))
      return A;
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
    this.$$set && !Qe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const dt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(dt);
const Ve = "archive-explorer", He = "0.0.1";
function mt(t, e, n, l) {
  function s(o) {
    return o instanceof n ? o : new n(function(r) {
      r(o);
    });
  }
  return new (n || (n = Promise))(function(o, r) {
    function i(f) {
      try {
        c(l.next(f));
      } catch (a) {
        r(a);
      }
    }
    function u(f) {
      try {
        c(l.throw(f));
      } catch (a) {
        r(a);
      }
    }
    function c(f) {
      f.done ? o(f.value) : s(f.value).then(i, u);
    }
    c((l = l.apply(t, e || [])).next());
  });
}
function _t(t) {
  let e, n;
  return {
    c() {
      e = we("svg"), n = we("path"), w(n, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24"), w(e, "height", "24"), w(e, "fill", "#004552");
    },
    m(l, s) {
      k(l, e, s), j(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(l) {
      l && b(e);
    }
  };
}
class pt extends V {
  constructor(e) {
    super(), G(this, e, null, _t, q, {});
  }
}
function ee(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
const Ae = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, gt = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Me(t) {
  let e, n = [];
  t.$on = (s, o) => {
    let r = s, i = () => {
    };
    return e ? i = e(r, o) : n.push([r, o]), r.match(Ae) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', r), () => {
      i();
    };
  };
  function l(s) {
    const o = t.$$.callbacks[s.type];
    o && o.slice().forEach((r) => r.call(this, s));
  }
  return (s) => {
    const o = [], r = {};
    e = (i, u) => {
      let c = i, f = u, a = !1;
      const p = c.match(Ae), m = c.match(gt), h = p || m;
      if (c.match(/^SMUI:\w+:/)) {
        const O = c.split(":");
        let v = "";
        for (let g = 0; g < O.length; g++)
          v += g === O.length - 1 ? ":" + O[g] : O[g].split("-").map((_) => _.slice(0, 1).toUpperCase() + _.slice(1)).join("");
        console.warn(`The event ${c.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), c = v;
      }
      if (h) {
        const O = c.split(p ? ":" : "$");
        c = O[0];
        const v = O.slice(1).reduce((g, _) => (g[_] = !0, g), {});
        v.passive && (a = a || {}, a.passive = !0), v.nonpassive && (a = a || {}, a.passive = !1), v.capture && (a = a || {}, a.capture = !0), v.once && (a = a || {}, a.once = !0), v.preventDefault && (f = ht(f)), v.stopPropagation && (f = vt(f)), v.stopImmediatePropagation && (f = bt(f)), v.self && (f = wt(s, f)), v.trusted && (f = kt(f));
      }
      const P = Ie(s, c, f, a), d = () => {
        P();
        const O = o.indexOf(d);
        O > -1 && o.splice(O, 1);
      };
      return o.push(d), c in r || (r[c] = Ie(s, c, l)), d;
    };
    for (let i = 0; i < n.length; i++)
      e(n[i][0], n[i][1]);
    return {
      destroy: () => {
        for (let i = 0; i < o.length; i++)
          o[i]();
        for (let i of Object.entries(r))
          i[1]();
      }
    };
  };
}
function Ie(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function ht(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function vt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function bt(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function wt(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function kt(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function _e(t, e) {
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
            const r = l[s];
            Array.isArray(r) && r.length > 1 ? o.update(r[1]) : o.update();
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
function yt(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, l, s = (
    /*tag*/
    t[1] && he(t)
  );
  return {
    c() {
      s && s.c(), n = F();
    },
    m(o, r) {
      s && s.m(o, r), k(o, n, r), l = !0;
    },
    p(o, r) {
      /*tag*/
      o[1] ? e ? q(
        e,
        /*tag*/
        o[1]
      ) ? (s.d(1), s = he(o), e = /*tag*/
      o[1], s.c(), s.m(n.parentNode, n)) : s.p(o, r) : (s = he(o), e = /*tag*/
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
      o && b(n), s && s.d(o);
    }
  };
}
function Et(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, l = (
    /*tag*/
    t[1] && ve(t)
  );
  return {
    c() {
      l && l.c(), n = F();
    },
    m(s, o) {
      l && l.m(s, o), k(s, n, o);
    },
    p(s, o) {
      /*tag*/
      s[1] ? e ? q(
        e,
        /*tag*/
        s[1]
      ) ? (l.d(1), l = ve(s), e = /*tag*/
      s[1], l.c(), l.m(n.parentNode, n)) : l.p(s, o) : (l = ve(s), e = /*tag*/
      s[1], l.c(), l.m(n.parentNode, n)) : e && (l.d(1), l = null, e = /*tag*/
      s[1]);
    },
    i: A,
    o: A,
    d(s) {
      s && b(n), l && l.d(s);
    }
  };
}
function Ct(t) {
  let e, n, l, s, o;
  const r = (
    /*#slots*/
    t[8].default
  ), i = ie(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    /*$$restProps*/
    t[5]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = N(c, u[f]);
  return {
    c() {
      e = we("svg"), i && i.c(), Pe(e, c);
    },
    m(f, a) {
      k(f, e, a), i && i.m(e, null), t[9](e), l = !0, s || (o = [
        U(n = _e.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        U(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, a) {
      i && i.p && (!l || a & /*$$scope*/
      128) && ue(
        i,
        r,
        f,
        /*$$scope*/
        f[7],
        l ? oe(
          r,
          /*$$scope*/
          f[7],
          a,
          null
        ) : re(
          /*$$scope*/
          f[7]
        ),
        null
      ), Pe(e, c = W(u, [a & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && B(n.update) && a & /*use*/
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
      f && b(e), i && i.d(f), t[9](null), s = !1, I(o);
    }
  };
}
function he(t) {
  let e, n, l, s, o;
  const r = (
    /*#slots*/
    t[8].default
  ), i = ie(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    /*$$restProps*/
    t[5]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = N(c, u[f]);
  return {
    c() {
      e = M(
        /*tag*/
        t[1]
      ), i && i.c(), ne(
        /*tag*/
        t[1]
      )(e, c);
    },
    m(f, a) {
      k(f, e, a), i && i.m(e, null), t[11](e), l = !0, s || (o = [
        U(n = _e.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        U(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, a) {
      i && i.p && (!l || a & /*$$scope*/
      128) && ue(
        i,
        r,
        f,
        /*$$scope*/
        f[7],
        l ? oe(
          r,
          /*$$scope*/
          f[7],
          a,
          null
        ) : re(
          /*$$scope*/
          f[7]
        ),
        null
      ), ne(
        /*tag*/
        f[1]
      )(e, c = W(u, [a & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && B(n.update) && a & /*use*/
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
      f && b(e), i && i.d(f), t[11](null), s = !1, I(o);
    }
  };
}
function ve(t) {
  let e, n, l, s, o = [
    /*$$restProps*/
    t[5]
  ], r = {};
  for (let i = 0; i < o.length; i += 1)
    r = N(r, o[i]);
  return {
    c() {
      e = M(
        /*tag*/
        t[1]
      ), ne(
        /*tag*/
        t[1]
      )(e, r);
    },
    m(i, u) {
      k(i, e, u), t[10](e), l || (s = [
        U(n = _e.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        U(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], l = !0);
    },
    p(i, u) {
      ne(
        /*tag*/
        i[1]
      )(e, r = W(o, [u & /*$$restProps*/
      32 && /*$$restProps*/
      i[5]])), n && B(n.update) && u & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        i[0]
      );
    },
    d(i) {
      i && b(e), t[10](null), l = !1, I(s);
    }
  };
}
function Mt(t) {
  let e, n, l, s;
  const o = [Ct, Et, yt], r = [];
  function i(u, c) {
    return (
      /*tag*/
      u[1] === "svg" ? 0 : (
        /*selfClosing*/
        u[3] ? 1 : 2
      )
    );
  }
  return e = i(t), n = r[e] = o[e](t), {
    c() {
      n.c(), l = F();
    },
    m(u, c) {
      r[e].m(u, c), k(u, l, c), s = !0;
    },
    p(u, [c]) {
      let f = e;
      e = i(u), e === f ? r[e].p(u, c) : (ce(), C(r[f], 1, 1, () => {
        r[f] = null;
      }), fe(), n = r[e], n ? n.p(u, c) : (n = r[e] = o[e](u), n.c()), E(n, 1), n.m(l.parentNode, l));
    },
    i(u) {
      s || (E(n), s = !0);
    },
    o(u) {
      C(n), s = !1;
    },
    d(u) {
      u && b(l), r[e].d(u);
    }
  };
}
function St(t, e, n) {
  let l;
  const s = ["use", "tag", "getElement"];
  let o = Q(e, s), { $$slots: r = {}, $$scope: i } = e, { use: u = [] } = e, { tag: c } = e;
  const f = Me(D());
  let a;
  function p() {
    return a;
  }
  function m(d) {
    z[d ? "unshift" : "push"](() => {
      a = d, n(2, a);
    });
  }
  function h(d) {
    z[d ? "unshift" : "push"](() => {
      a = d, n(2, a);
    });
  }
  function P(d) {
    z[d ? "unshift" : "push"](() => {
      a = d, n(2, a);
    });
  }
  return t.$$set = (d) => {
    e = N(N({}, e), Ce(d)), n(5, o = Q(e, s)), "use" in d && n(0, u = d.use), "tag" in d && n(1, c = d.tag), "$$scope" in d && n(7, i = d.$$scope);
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
    ].indexOf(c) > -1);
  }, [
    u,
    c,
    a,
    l,
    f,
    o,
    p,
    i,
    r,
    m,
    h,
    P
  ];
}
class Ye extends V {
  constructor(e) {
    super(), G(this, e, St, Mt, q, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Pt(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), l = ie(
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
      8192) && ue(
        l,
        n,
        s,
        /*$$scope*/
        s[13],
        e ? oe(
          n,
          /*$$scope*/
          s[13],
          o,
          null
        ) : re(
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
function Ot(t) {
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
      class: ee({
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
  function r(i, u) {
    let c = {
      $$slots: { default: [Pt] },
      $$scope: { ctx: i }
    };
    for (let f = 0; f < s.length; f += 1)
      c = N(c, s[f]);
    return u !== void 0 && u & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (c = N(c, W(s, [
      u & /*tag*/
      8 && { tag: (
        /*tag*/
        i[3]
      ) },
      u & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          i[8],
          .../*use*/
          i[0]
        ]
      },
      u & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: ee({
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
      u & /*props*/
      128 && ae(
        /*props*/
        i[7]
      ),
      u & /*$$restProps*/
      512 && ae(
        /*$$restProps*/
        i[9]
      )
    ]))), { props: c };
  }
  return o && (e = Oe(o, r(t)), t[12](e)), {
    c() {
      e && se(e.$$.fragment), n = F();
    },
    m(i, u) {
      e && X(e, i, u), k(i, n, u), l = !0;
    },
    p(i, [u]) {
      if (u & /*component*/
      4 && o !== (o = /*component*/
      i[2])) {
        if (e) {
          ce();
          const c = e;
          C(c.$$.fragment, 1, 0, () => {
            $(c, 1);
          }), fe();
        }
        o ? (e = Oe(o, r(i, u)), i[12](e), se(e.$$.fragment), E(e.$$.fragment, 1), X(e, n.parentNode, n)) : e = null;
      } else if (o) {
        const c = u & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? W(s, [
          u & /*tag*/
          8 && { tag: (
            /*tag*/
            i[3]
          ) },
          u & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              i[8],
              .../*use*/
              i[0]
            ]
          },
          u & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: ee({
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
          u & /*props*/
          128 && ae(
            /*props*/
            i[7]
          ),
          u & /*$$restProps*/
          512 && ae(
            /*$$restProps*/
            i[9]
          )
        ]) : {};
        u & /*$$scope*/
        8192 && (c.$$scope = { dirty: u, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      l || (e && E(e.$$.fragment, i), l = !0);
    },
    o(i) {
      e && C(e.$$.fragment, i), l = !1;
    },
    d(i) {
      i && b(n), t[12](null), e && $(e, i);
    }
  };
}
const L = {
  component: Ye,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function jt(t, e, n) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let s = Q(e, l), { $$slots: o = {}, $$scope: r } = e, { use: i = [] } = e, { class: u = "" } = e, c;
  const f = L.class, a = {}, p = [], m = L.contexts, h = L.props;
  let { component: P = L.component } = e, { tag: d = P === Ye ? L.tag : void 0 } = e;
  Object.entries(L.classMap).forEach(([_, y]) => {
    const H = Fe(y);
    H && "subscribe" in H && p.push(H.subscribe((Ze) => {
      n(5, a[_] = Ze, a);
    }));
  });
  const O = Me(D());
  for (let _ in m)
    m.hasOwnProperty(_) && ot(_, m[_]);
  st(() => {
    for (const _ of p)
      _();
  });
  function v() {
    return c.getElement();
  }
  function g(_) {
    z[_ ? "unshift" : "push"](() => {
      c = _, n(4, c);
    });
  }
  return t.$$set = (_) => {
    e = N(N({}, e), Ce(_)), n(9, s = Q(e, l)), "use" in _ && n(0, i = _.use), "class" in _ && n(1, u = _.class), "component" in _ && n(2, P = _.component), "tag" in _ && n(3, d = _.tag), "$$scope" in _ && n(13, r = _.$$scope);
  }, [
    i,
    u,
    P,
    d,
    c,
    a,
    f,
    h,
    O,
    s,
    v,
    o,
    g,
    r
  ];
}
class Nt extends V {
  constructor(e) {
    super(), G(this, e, jt, Ot, q, {
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
const qe = Object.assign({}, L);
function S(t) {
  return new Proxy(Nt, {
    construct: function(e, n) {
      return Object.assign(L, qe, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(L, qe, t), e[n];
    }
  });
}
S({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
S({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
S({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
S({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
S({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
S({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function At(t) {
  let e, n, l, s, o, r;
  const i = (
    /*#slots*/
    t[8].default
  ), u = ie(
    i,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let c = [
    {
      class: n = ee({
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
  for (let a = 0; a < c.length; a += 1)
    f = N(f, c[a]);
  return {
    c() {
      e = M("span"), u && u.c(), ke(e, f);
    },
    m(a, p) {
      k(a, e, p), u && u.m(e, null), t[9](e), s = !0, o || (r = [
        U(l = _e.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        U(
          /*forwardEvents*/
          t[3].call(null, e)
        )
      ], o = !0);
    },
    p(a, [p]) {
      u && u.p && (!s || p & /*$$scope*/
      128) && ue(
        u,
        i,
        a,
        /*$$scope*/
        a[7],
        s ? oe(
          i,
          /*$$scope*/
          a[7],
          p,
          null
        ) : re(
          /*$$scope*/
          a[7]
        ),
        null
      ), ke(e, f = W(c, [
        (!s || p & /*className*/
        2 && n !== (n = ee({
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
        p & /*$$restProps*/
        32 && /*$$restProps*/
        a[5]
      ])), l && B(l.update) && p & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i(a) {
      s || (E(u, a), s = !0);
    },
    o(a) {
      C(u, a), s = !1;
    },
    d(a) {
      a && b(e), u && u.d(a), t[9](null), o = !1, I(r);
    }
  };
}
function It(t, e, n) {
  const l = ["use", "class", "getElement"];
  let s = Q(e, l), { $$slots: o = {}, $$scope: r } = e;
  const i = Me(D());
  let { use: u = [] } = e, { class: c = "" } = e, f, a = Fe("SMUI:list:graphic:menu-selection-group");
  function p() {
    return f;
  }
  function m(h) {
    z[h ? "unshift" : "push"](() => {
      f = h, n(2, f);
    });
  }
  return t.$$set = (h) => {
    e = N(N({}, e), Ce(h)), n(5, s = Q(e, l)), "use" in h && n(0, u = h.use), "class" in h && n(1, c = h.class), "$$scope" in h && n(7, r = h.$$scope);
  }, [
    u,
    c,
    f,
    i,
    a,
    s,
    p,
    r,
    o,
    m
  ];
}
class qt extends V {
  constructor(e) {
    super(), G(this, e, It, At, q, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
S({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
S({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
S({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
S({
  class: "mdc-menu__selection-group-icon",
  component: qt
});
S({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
S({
  class: "mdc-dialog__title",
  tag: "h2"
});
S({
  class: "mdc-dialog__content",
  tag: "div"
});
S({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
S({
  class: "smui-paper__content",
  tag: "div"
});
S({
  class: "smui-paper__title",
  tag: "h5"
});
S({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Le(t) {
  let e, n, l;
  return {
    c() {
      e = M("div"), n = me(
        /*text*/
        t[0]
      ), w(e, "class", l = "tooltip-box visible " + /*position*/
      t[1] + " svelte-11wr6ok");
    },
    m(s, o) {
      k(s, e, o), j(e, n);
    },
    p(s, o) {
      o & /*text*/
      1 && tt(
        n,
        /*text*/
        s[0]
      ), o & /*position*/
      2 && l !== (l = "tooltip-box visible " + /*position*/
      s[1] + " svelte-11wr6ok") && w(e, "class", l);
    },
    d(s) {
      s && b(e);
    }
  };
}
function Lt(t) {
  let e, n, l, s, o;
  const r = (
    /*#slots*/
    t[4].default
  ), i = ie(
    r,
    t,
    /*$$scope*/
    t[3],
    null
  );
  let u = (
    /*visible*/
    t[2] && Le(t)
  );
  return {
    c() {
      e = M("div"), i && i.c(), n = T(), u && u.c(), w(e, "class", "tooltip-container svelte-11wr6ok");
    },
    m(c, f) {
      k(c, e, f), i && i.m(e, null), j(e, n), u && u.m(e, null), l = !0, s || (o = [
        te(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[6]
        )
      ], s = !0);
    },
    p(c, [f]) {
      i && i.p && (!l || f & /*$$scope*/
      8) && ue(
        i,
        r,
        c,
        /*$$scope*/
        c[3],
        l ? oe(
          r,
          /*$$scope*/
          c[3],
          f,
          null
        ) : re(
          /*$$scope*/
          c[3]
        ),
        null
      ), /*visible*/
      c[2] ? u ? u.p(c, f) : (u = Le(c), u.c(), u.m(e, null)) : u && (u.d(1), u = null);
    },
    i(c) {
      l || (E(i, c), l = !0);
    },
    o(c) {
      C(i, c), l = !1;
    },
    d(c) {
      c && b(e), i && i.d(c), u && u.d(), s = !1, I(o);
    }
  };
}
function Tt(t, e, n) {
  let { $$slots: l = {}, $$scope: s } = e, { text: o } = e, { position: r = "top" } = e, i = !1;
  const u = () => n(2, i = !0), c = () => n(2, i = !1);
  return t.$$set = (f) => {
    "text" in f && n(0, o = f.text), "position" in f && n(1, r = f.position), "$$scope" in f && n(3, s = f.$$scope);
  }, [
    o,
    r,
    i,
    s,
    l,
    u,
    c
  ];
}
class Ut extends V {
  constructor(e) {
    super(), G(this, e, Tt, Lt, q, { text: 0, position: 1 });
  }
}
function Te(t, e, n) {
  const l = t.slice();
  return l[12] = e[n], l[14] = n, l;
}
function Bt(t) {
  let e = (
    /*i*/
    t[14] + 1 + ""
  ), n;
  return {
    c() {
      n = me(e);
    },
    m(l, s) {
      k(l, n, s);
    },
    i: A,
    o: A,
    d(l) {
      l && b(n);
    }
  };
}
function Dt(t) {
  let e, n;
  return e = new pt({}), {
    c() {
      se(e.$$.fragment);
    },
    m(l, s) {
      X(e, l, s), n = !0;
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      $(e, l);
    }
  };
}
function Rt(t) {
  let e, n, l, s, o, r, i;
  const u = [Dt, Bt], c = [];
  function f(p, m) {
    return m & /*visited, tagName*/
    12 && (n = null), n == null && (n = !!/*visited*/
    (p[3].includes(
      /*plugin*/
      p[12].tag
    ) && /*plugin*/
    p[12].tag !== /*tagName*/
    p[2])), n ? 0 : 1;
  }
  l = f(t, -1), s = c[l] = u[l](t);
  function a() {
    return (
      /*click_handler*/
      t[8](
        /*plugin*/
        t[12]
      )
    );
  }
  return {
    c() {
      e = M("button"), s.c(), w(e, "class", "svelte-1xq5awa"), Y(e, "not-visited", !/*visited*/
      t[3].includes(
        /*plugin*/
        t[12].tag
      )), Y(
        e,
        "current",
        /*plugin*/
        t[12].tag === /*tagName*/
        t[2]
      ), Y(
        e,
        "visited",
        /*visited*/
        t[3].includes(
          /*plugin*/
          t[12].tag
        ) && /*plugin*/
        t[12].tag !== /*tagName*/
        t[2]
      );
    },
    m(p, m) {
      k(p, e, m), c[l].m(e, null), o = !0, r || (i = te(e, "click", a), r = !0);
    },
    p(p, m) {
      t = p;
      let h = l;
      l = f(t, m), l !== h && (ce(), C(c[h], 1, 1, () => {
        c[h] = null;
      }), fe(), s = c[l], s || (s = c[l] = u[l](t), s.c()), E(s, 1), s.m(e, null)), (!o || m & /*visited, plugins*/
      24) && Y(e, "not-visited", !/*visited*/
      t[3].includes(
        /*plugin*/
        t[12].tag
      )), (!o || m & /*plugins, tagName*/
      20) && Y(
        e,
        "current",
        /*plugin*/
        t[12].tag === /*tagName*/
        t[2]
      ), (!o || m & /*visited, plugins, tagName*/
      28) && Y(
        e,
        "visited",
        /*visited*/
        t[3].includes(
          /*plugin*/
          t[12].tag
        ) && /*plugin*/
        t[12].tag !== /*tagName*/
        t[2]
      );
    },
    i(p) {
      o || (E(s), o = !0);
    },
    o(p) {
      C(s), o = !1;
    },
    d(p) {
      p && b(e), c[l].d(), r = !1, i();
    }
  };
}
function zt(t) {
  let e;
  return {
    c() {
      e = M("div"), w(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(n, l) {
      k(n, e, l);
    },
    d(n) {
      n && b(e);
    }
  };
}
function Ue(t) {
  let e, n, l, s, o, r, i;
  n = new Ut({
    props: {
      text: "Load the " + /*plugin*/
      t[12].label + " editor",
      position: "bottom",
      $$slots: { default: [Rt] },
      $$scope: { ctx: t }
    }
  });
  let u = (
    /*i*/
    t[14] < /*plugins*/
    t[4].length - 1 && zt()
  );
  return {
    c() {
      e = M("div"), se(n.$$.fragment), l = T(), s = M("p"), s.textContent = `${/*plugin*/
      t[12].label}`, o = T(), u && u.c(), r = F(), w(s, "class", "svelte-1xq5awa"), w(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(c, f) {
      k(c, e, f), X(n, e, null), j(e, l), j(e, s), k(c, o, f), u && u.m(c, f), k(c, r, f), i = !0;
    },
    p(c, f) {
      const a = {};
      f & /*$$scope, visited, tagName*/
      32780 && (a.$$scope = { dirty: f, ctx: c }), n.$set(a);
    },
    i(c) {
      i || (E(n.$$.fragment, c), i = !0);
    },
    o(c) {
      C(n.$$.fragment, c), i = !1;
    },
    d(c) {
      c && (b(e), b(o), b(r)), $(n), u && u.d(c);
    }
  };
}
function Be(t) {
  let e = (
    /*tagName*/
    t[2]
  ), n, l = (
    /*tagName*/
    t[2] && be(t)
  );
  return {
    c() {
      l && l.c(), n = F();
    },
    m(s, o) {
      l && l.m(s, o), k(s, n, o);
    },
    p(s, o) {
      /*tagName*/
      s[2] ? e ? q(
        e,
        /*tagName*/
        s[2]
      ) ? (l.d(1), l = be(s), e = /*tagName*/
      s[2], l.c(), l.m(n.parentNode, n)) : l.p(s, o) : (l = be(s), e = /*tagName*/
      s[2], l.c(), l.m(n.parentNode, n)) : e && (l.d(1), l = null, e = /*tagName*/
      s[2]);
    },
    d(s) {
      s && b(n), l && l.d(s);
    }
  };
}
function be(t) {
  let e, n, l, s;
  return {
    c() {
      e = M(
        /*tagName*/
        t[2]
      ), ne(
        /*tagName*/
        t[2]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(o, r) {
      k(o, e, r), l || (s = U(n = Vt.call(null, e, {
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
    p(o, r) {
      n && B(n.update) && r & /*doc, editCount*/
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
      o && b(e), l = !1, s();
    }
  };
}
function Ft(t) {
  let e, n, l, s, o, r, i, u, c, f, a, p, m, h, P = Ne(
    /*plugins*/
    t[4]
  ), d = [];
  for (let g = 0; g < P.length; g += 1)
    d[g] = Ue(Te(t, P, g));
  const O = (g) => C(d[g], 1, 1, () => {
    d[g] = null;
  });
  let v = (
    /*tagName*/
    t[2] && Be(t)
  );
  return {
    c() {
      e = M("div"), n = M("p"), n.textContent = "Plugin Flow", l = T(), s = M("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      o = T(), r = M("div"), i = M("button"), i.textContent = "Back", u = T(), c = M("button"), c.textContent = "Next", f = T(), v && v.c(), a = F(), w(n, "class", "plugin-flow-title svelte-1xq5awa"), w(s, "class", "plugin-steps svelte-1xq5awa"), w(i, "class", "back-button svelte-1xq5awa"), w(c, "class", "next-button svelte-1xq5awa"), w(r, "class", "stepper-navigation svelte-1xq5awa"), w(e, "class", "stepper svelte-1xq5awa");
    },
    m(g, _) {
      k(g, e, _), j(e, n), j(e, l), j(e, s);
      for (let y = 0; y < d.length; y += 1)
        d[y] && d[y].m(s, null);
      j(e, o), j(e, r), j(r, i), j(r, u), j(r, c), k(g, f, _), v && v.m(g, _), k(g, a, _), p = !0, m || (h = [
        te(
          i,
          "click",
          /*previousPlugin*/
          t[7]
        ),
        te(
          c,
          "click",
          /*nextPlugin*/
          t[6]
        )
      ], m = !0);
    },
    p(g, [_]) {
      if (_ & /*plugins, visited, tagName, loadPlugin*/
      60) {
        P = Ne(
          /*plugins*/
          g[4]
        );
        let y;
        for (y = 0; y < P.length; y += 1) {
          const H = Te(g, P, y);
          d[y] ? (d[y].p(H, _), E(d[y], 1)) : (d[y] = Ue(H), d[y].c(), E(d[y], 1), d[y].m(s, null));
        }
        for (ce(), y = P.length; y < d.length; y += 1)
          O(y);
        fe();
      }
      /*tagName*/
      g[2] ? v ? v.p(g, _) : (v = Be(g), v.c(), v.m(a.parentNode, a)) : v && (v.d(1), v = null);
    },
    i(g) {
      if (!p) {
        for (let _ = 0; _ < P.length; _ += 1)
          E(d[_]);
        p = !0;
      }
    },
    o(g) {
      d = d.filter(Boolean);
      for (let _ = 0; _ < d.length; _ += 1)
        C(d[_]);
      p = !1;
    },
    d(g) {
      g && (b(e), b(f), b(a)), We(d, g), v && v.d(g), m = !1, I(h);
    }
  };
}
function Gt() {
  var t, e;
  const n = document.querySelector("open-scd");
  return (e = (t = n == null ? void 0 : n.shadowRoot) === null || t === void 0 ? void 0 : t.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Vt(t, e) {
  return Object.assign(t, e), { update: (n) => Object.assign(t, n) };
}
function Ht(t, e, n) {
  let { doc: l } = e, { editCount: s = -1 } = e, o = null, r = [];
  it();
  function i(m) {
    var h;
    (h = Gt()) === null || h === void 0 || h.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: m },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  const u = [
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
  function c(m) {
    return mt(this, void 0, void 0, function* () {
      const h = yield import(m.src);
      customElements.get(m.tag) || customElements.define(m.tag, h.default), n(2, o = m.tag), r.includes(m.tag) || n(3, r = [...r, m.tag]);
    });
  }
  lt(() => {
    c(u[0]), i(!1);
  });
  function f() {
    const m = u.findIndex((h) => h.tag === o);
    c(u[(m + 1) % u.length]);
  }
  function a() {
    const m = u.findIndex((h) => h.tag === o);
    c(u[(m - 1 + u.length) % u.length]);
  }
  const p = (m) => c(m);
  return t.$$set = (m) => {
    "doc" in m && n(0, l = m.doc), "editCount" in m && n(1, s = m.editCount);
  }, [
    l,
    s,
    o,
    r,
    u,
    c,
    f,
    a,
    p
  ];
}
class Yt extends V {
  constructor(e) {
    super(), G(this, e, Ht, Ft, q, { doc: 0, editCount: 1 });
  }
}
function De(t) {
  let e, n;
  return e = new Yt({
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
      se(e.$$.fragment);
    },
    m(l, s) {
      X(e, l, s), n = !0;
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
      $(e, l);
    }
  };
}
function Zt(t) {
  let e, n, l, s, o, r = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && De(t)
  );
  return {
    c() {
      r && r.c(), e = T(), n = M("input"), l = T(), s = M("input"), w(n, "type", "hidden"), w(n, "name", "package-name"), n.value = Ve, w(s, "type", "hidden"), w(s, "name", "package-version"), s.value = He;
    },
    m(i, u) {
      r && r.m(i, u), k(i, e, u), k(i, n, u), k(i, l, u), k(i, s, u), o = !0;
    },
    p(i, [u]) {
      /*doc*/
      i[0] || /*dev*/
      i[1] ? r ? (r.p(i, u), u & /*doc, dev*/
      3 && E(r, 1)) : (r = De(i), r.c(), E(r, 1), r.m(e.parentNode, e)) : r && (ce(), C(r, 1, 1, () => {
        r = null;
      }), fe());
    },
    i(i) {
      o || (E(r), o = !0);
    },
    o(i) {
      C(r), o = !1;
    },
    d(i) {
      i && (b(e), b(n), b(l), b(s)), r && r.d(i);
    }
  };
}
function Jt(t, e, n) {
  let { doc: l } = e, { dev: s = !1 } = e, { editCount: o = 0 } = e;
  return console.log("editcount", o), t.$$set = (r) => {
    "doc" in r && n(0, l = r.doc), "dev" in r && n(1, s = r.dev), "editCount" in r && n(2, o = r.editCount);
  }, [l, s, o];
}
class Kt extends V {
  constructor(e) {
    super(), G(this, e, Jt, Zt, q, { doc: 0, dev: 1, editCount: 2 });
  }
}
class $t extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new Kt({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = Qt();
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
function Qt() {
  const t = `${Ve}-v${He}-style`, e = Wt(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function Wt() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  $t as default
};
