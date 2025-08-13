var Io = Object.defineProperty;
var Lo = (t, e, n) => e in t ? Io(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Zn = (t, e, n) => (Lo(t, typeof e != "symbol" ? e + "" : e, n), n), Oo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var Mt = (t, e, n) => (Oo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ni = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
};
function Oe() {
}
function F(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function ka(t) {
  return t();
}
function Gi() {
  return /* @__PURE__ */ Object.create(null);
}
function Ee(t) {
  t.forEach(ka);
}
function me(t) {
  return typeof t == "function";
}
function ue(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function To(t) {
  return Object.keys(t).length === 0;
}
function Li(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return Oe;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function wo(t) {
  let e;
  return Li(t, (n) => e = n)(), e;
}
function nt(t, e, n) {
  t.$$.on_destroy.push(Li(e, n));
}
function ae(t, e, n, i) {
  if (t) {
    const r = Da(t, e, n, i);
    return t[0](r);
  }
}
function Da(t, e, n, i) {
  return t[1] && i ? F(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function le(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const a = [], o = Math.max(e.dirty.length, r.length);
      for (let l = 0; l < o; l += 1)
        a[l] = e.dirty[l] | r[l];
      return a;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function oe(t, e, n, i, r, a) {
  if (r) {
    const o = Da(e, n, i, a);
    t.p(o, r);
  }
}
function se(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Me(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function re(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t)
    !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Ma(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Ot(t, e, n) {
  return t.set(n), e;
}
function te(t) {
  return t && me(t.destroy) ? t.destroy : Oe;
}
const Ro = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function Z(t, e) {
  t.appendChild(e);
}
function P(t, e, n) {
  t.insertBefore(e, n || null);
}
function B(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ba(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function K(t) {
  return document.createElement(t);
}
function Be(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Pe(t) {
  return document.createTextNode(t);
}
function Q() {
  return Pe(" ");
}
function Te() {
  return Pe("");
}
function $(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function U(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Ho = ["width", "height"];
function ne(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Ho.indexOf(i) === -1 ? t[i] = e[i] : U(t, i, e[i]);
}
function Mn(t, e) {
  for (const n in e)
    U(t, n, e[n]);
}
function ko(t, e) {
  Object.keys(e).forEach((n) => {
    Do(t, n, e[n]);
  });
}
function Do(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : U(t, e, n);
}
function Bn(t) {
  return /-/.test(t) ? ko : ne;
}
function Pa(t) {
  return t === "" ? null : +t;
}
function Mo(t) {
  return Array.from(t.childNodes);
}
function Ge(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function xt(t, e) {
  t.value = e ?? "";
}
function gn(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function Bo(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function gt(t, e) {
  return new t(e);
}
let pn;
function mn(t) {
  pn = t;
}
function we() {
  if (!pn)
    throw new Error("Function called outside component initialization");
  return pn;
}
function Je(t) {
  we().$$.on_mount.push(t);
}
function an(t) {
  we().$$.on_destroy.push(t);
}
function Po() {
  const t = we();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const a = Bo(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return r.slice().forEach((o) => {
        o.call(t, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
function De(t, e) {
  return we().$$.context.set(t, e), e;
}
function Re(t) {
  return we().$$.context.get(t);
}
function Pn(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const Wt = [], ee = [];
let Kt = [];
const di = [], Ua = /* @__PURE__ */ Promise.resolve();
let hi = !1;
function Fa() {
  hi || (hi = !0, Ua.then(Na));
}
function Uo() {
  return Fa(), Ua;
}
function mi(t) {
  Kt.push(t);
}
function et(t) {
  di.push(t);
}
const Kn = /* @__PURE__ */ new Set();
let zt = 0;
function Na() {
  if (zt !== 0)
    return;
  const t = pn;
  do {
    try {
      for (; zt < Wt.length; ) {
        const e = Wt[zt];
        zt++, mn(e), Fo(e.$$);
      }
    } catch (e) {
      throw Wt.length = 0, zt = 0, e;
    }
    for (mn(null), Wt.length = 0, zt = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < Kt.length; e += 1) {
      const n = Kt[e];
      Kn.has(n) || (Kn.add(n), n());
    }
    Kt.length = 0;
  } while (Wt.length);
  for (; di.length; )
    di.pop()();
  hi = !1, Kn.clear(), mn(t);
}
function Fo(t) {
  if (t.fragment !== null) {
    t.update(), Ee(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(mi);
  }
}
function No(t) {
  const e = [], n = [];
  Kt.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Kt = e;
}
const Hn = /* @__PURE__ */ new Set();
let Ut;
function ye() {
  Ut = {
    r: 0,
    c: [],
    p: Ut
    // parent group
  };
}
function Ae() {
  Ut.r || Ee(Ut.c), Ut = Ut.p;
}
function S(t, e) {
  t && t.i && (Hn.delete(t), t.i(e));
}
function I(t, e, n, i) {
  if (t && t.o) {
    if (Hn.has(t))
      return;
    Hn.add(t), Ut.c.push(() => {
      Hn.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Rt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Ga(t, e) {
  I(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ja(t, e, n, i, r, a, o, l, s, u, f, c) {
  let d = t.length, g = a.length, p = d;
  const b = {};
  for (; p--; )
    b[t[p].key] = p;
  const m = [], y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), O = [];
  for (p = g; p--; ) {
    const h = c(r, a, p), R = n(h);
    let q = o.get(R);
    q ? O.push(() => q.p(h, e)) : (q = u(R, h), q.c()), y.set(R, m[p] = q), R in b && _.set(R, Math.abs(p - b[R]));
  }
  const A = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function M(h) {
    S(h, 1), h.m(l, f), o.set(h.key, h), f = h.first, g--;
  }
  for (; d && g; ) {
    const h = m[g - 1], R = t[d - 1], q = h.key, C = R.key;
    h === R ? (f = h.first, d--, g--) : y.has(C) ? !o.has(q) || A.has(q) ? M(h) : D.has(C) ? d-- : _.get(q) > _.get(C) ? (D.add(q), M(h)) : (A.add(C), d--) : (s(R, o), d--);
  }
  for (; d--; ) {
    const h = t[d];
    y.has(h.key) || s(h, o);
  }
  for (; g; )
    M(m[g - 1]);
  return Ee(O), m;
}
function fe(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const o = t[a], l = e[a];
    if (l) {
      for (const s in o)
        s in l || (i[s] = 1);
      for (const s in l)
        r[s] || (n[s] = l[s], r[s] = 1);
      t[a] = l;
    } else
      for (const s in o)
        r[s] = 1;
  }
  for (const o in i)
    o in n || (n[o] = void 0);
  return n;
}
function _e(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function tt(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function j(t) {
  t && t.c();
}
function N(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), mi(() => {
    const a = t.$$.on_mount.map(ka).filter(me);
    t.$$.on_destroy ? t.$$.on_destroy.push(...a) : Ee(a), t.$$.on_mount = [];
  }), r.forEach(mi);
}
function G(t, e) {
  const n = t.$$;
  n.fragment !== null && (No(n.after_update), Ee(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Go(t, e) {
  t.$$.dirty[0] === -1 && (Wt.push(t), Fa(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ce(t, e, n, i, r, a, o = null, l = [-1]) {
  const s = pn;
  mn(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Oe,
    not_equal: r,
    bound: Gi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Gi(),
    dirty: l,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  o && o(u.root);
  let f = !1;
  if (u.ctx = n ? n(t, e.props || {}, (c, d, ...g) => {
    const p = g.length ? g[0] : d;
    return u.ctx && r(u.ctx[c], u.ctx[c] = p) && (!u.skip_bound && u.bound[c] && u.bound[c](p), f && Go(t, c)), d;
  }) : [], u.update(), f = !0, Ee(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Mo(e.target);
      u.fragment && u.fragment.l(c), c.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && S(t.$$.fragment), N(t, e.target, e.anchor), Na();
  }
  mn(s);
}
class de {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zn(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zn(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    G(this, 1), this.$destroy = Oe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!me(n))
      return Oe;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !To(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const jo = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(jo);
const Va = "location-manager", qa = "0.0.1", Vo = "Search", qo = "Add Location", zo = "Refresh", Xo = "Delete location {name}?", Wo = "Confirm", Zo = "Cancel", Ko = "Save", Yo = "New Location", Qo = "Location: {name}", Jo = "Name", xo = "Key", $o = "Description", es = "Location Table", ts = "UUID", ns = "Assigned Resources", is = {
  search: Vo,
  add_location: qo,
  refresh: zo,
  delete_location: Xo,
  confirm: Wo,
  cancel: Zo,
  save: Ko,
  new_location: Yo,
  location: Qo,
  name: Jo,
  key: xo,
  description: $o,
  location_table: es,
  uuid: ts,
  assigned_resources: ns
}, rs = "Suche", as = "Standort hinzufügen", ls = "Aktualisieren", os = "Standort {name} löschen?", ss = "Bestätigen", us = "Abbrechen", fs = "Speichern", cs = "Neuer Standort", ds = "Standort: {name}", hs = "Name", ms = "Schlüssel", gs = "Beschreibung", ps = "Standort-Tabelle", bs = "UUID", _s = "Zugewiesene Ressourcen", vs = {
  search: rs,
  add_location: as,
  refresh: ls,
  delete_location: os,
  confirm: ss,
  cancel: us,
  save: fs,
  new_location: cs,
  location: ds,
  name: hs,
  key: ms,
  description: gs,
  location_table: ps,
  uuid: bs,
  assigned_resources: _s
}, Xt = [];
function ys(t, e) {
  return {
    subscribe: it(t, e).subscribe
  };
}
function it(t, e = Oe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(l) {
    if (ue(t, l) && (t = l, n)) {
      const s = !Xt.length;
      for (const u of i)
        u[1](), Xt.push(u, t);
      if (s) {
        for (let u = 0; u < Xt.length; u += 2)
          Xt[u][0](Xt[u + 1]);
        Xt.length = 0;
      }
    }
  }
  function a(l) {
    r(l(t));
  }
  function o(l, s = Oe) {
    const u = [l, s];
    return i.add(u), i.size === 1 && (n = e(r, a) || Oe), l(t), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: a, subscribe: o };
}
function ln(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return ys(n, (o, l) => {
    let s = !1;
    const u = [];
    let f = 0, c = Oe;
    const d = () => {
      if (f)
        return;
      c();
      const p = e(i ? u[0] : u, o, l);
      a ? o(p) : c = me(p) ? p : Oe;
    }, g = r.map(
      (p, b) => Li(
        p,
        (m) => {
          u[b] = m, f &= ~(1 << b), s && d();
        },
        () => {
          f |= 1 << b;
        }
      )
    );
    return s = !0, d(), function() {
      Ee(g), c(), s = !1;
    };
  });
}
function As(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Es = function(e) {
  return Ss(e) && !Cs(e);
};
function Ss(t) {
  return !!t && typeof t == "object";
}
function Cs(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Os(t);
}
var Is = typeof Symbol == "function" && Symbol.for, Ls = Is ? Symbol.for("react.element") : 60103;
function Os(t) {
  return t.$$typeof === Ls;
}
function Ts(t) {
  return Array.isArray(t) ? [] : {};
}
function bn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? $t(Ts(t), t, e) : t;
}
function ws(t, e, n) {
  return t.concat(e).map(function(i) {
    return bn(i, n);
  });
}
function Rs(t, e) {
  if (!e.customMerge)
    return $t;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : $t;
}
function Hs(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function ji(t) {
  return Object.keys(t).concat(Hs(t));
}
function za(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function ks(t, e) {
  return za(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Ds(t, e, n) {
  var i = {};
  return n.isMergeableObject(t) && ji(t).forEach(function(r) {
    i[r] = bn(t[r], n);
  }), ji(e).forEach(function(r) {
    ks(t, r) || (za(t, r) && n.isMergeableObject(e[r]) ? i[r] = Rs(r, n)(t[r], e[r], n) : i[r] = bn(e[r], n));
  }), i;
}
function $t(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ws, n.isMergeableObject = n.isMergeableObject || Es, n.cloneUnlessOtherwiseSpecified = bn;
  var i = Array.isArray(e), r = Array.isArray(t), a = i === r;
  return a ? i ? n.arrayMerge(t, e, n) : Ds(t, e, n) : bn(e, n);
}
$t.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(i, r) {
    return $t(i, r, n);
  }, {});
};
var Ms = $t, Bs = Ms;
const Ps = /* @__PURE__ */ As(Bs);
var gi = function(t, e) {
  return gi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, gi(t, e);
};
function Ze(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  gi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var x = function() {
  return x = Object.assign || function(e) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, x.apply(this, arguments);
};
function Us(t, e) {
  var n = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++)
      e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
  return n;
}
function Xa(t, e, n, i) {
  function r(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function l(f) {
      try {
        u(i.next(f));
      } catch (c) {
        o(c);
      }
    }
    function s(f) {
      try {
        u(i.throw(f));
      } catch (c) {
        o(c);
      }
    }
    function u(f) {
      f.done ? a(f.value) : r(f.value).then(l, s);
    }
    u((i = i.apply(t, e || [])).next());
  });
}
function Oi(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, r, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = l(0), o.throw = l(1), o.return = l(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return s([u, f]);
    };
  }
  function s(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (n = 0)), n; )
      try {
        if (i = 1, r && (a = u[0] & 2 ? r.return : u[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, u[1])).done)
          return a;
        switch (r = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, r = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = e.call(t, n);
      } catch (f) {
        u = [6, f], r = 0;
      } finally {
        i = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Qe(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], i = 0;
  if (n)
    return n.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function pi(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n)
    return t;
  var i = n.call(t), r, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      a.push(r.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function Yt(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = e.length, a; i < r; i++)
      (a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Qt(t) {
  return this instanceof Qt ? (this.v = t, this) : new Qt(t);
}
function Fs(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(t, e || []), r, a = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", o), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(g) {
    return function(p) {
      return Promise.resolve(p).then(g, c);
    };
  }
  function l(g, p) {
    i[g] && (r[g] = function(b) {
      return new Promise(function(m, y) {
        a.push([g, b, m, y]) > 1 || s(g, b);
      });
    }, p && (r[g] = p(r[g])));
  }
  function s(g, p) {
    try {
      u(i[g](p));
    } catch (b) {
      d(a[0][3], b);
    }
  }
  function u(g) {
    g.value instanceof Qt ? Promise.resolve(g.value.v).then(f, c) : d(a[0][2], g);
  }
  function f(g) {
    s("next", g);
  }
  function c(g) {
    s("throw", g);
  }
  function d(g, p) {
    g(p), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function Ns(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Qe == "function" ? Qe(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function i(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(l, s) {
        o = t[a](o), r(l, s, o.done, o.value);
      });
    };
  }
  function r(a, o, l, s) {
    Promise.resolve(s).then(function(u) {
      a({ value: u, done: l });
    }, o);
  }
}
function Yn(t, e) {
  var n = e && e.cache ? e.cache : Ws, i = e && e.serializer ? e.serializer : zs, r = e && e.strategy ? e.strategy : Vs;
  return r(t, {
    cache: n,
    serializer: i
  });
}
function Gs(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function js(t, e, n, i) {
  var r = Gs(i) ? i : n(i), a = e.get(r);
  return typeof a > "u" && (a = t.call(this, i), e.set(r, a)), a;
}
function Wa(t, e, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), a = e.get(r);
  return typeof a > "u" && (a = t.apply(this, i), e.set(r, a)), a;
}
function Za(t, e, n, i, r) {
  return n.bind(e, t, i, r);
}
function Vs(t, e) {
  var n = t.length === 1 ? js : Wa;
  return Za(t, this, n, e.cache.create(), e.serializer);
}
function qs(t, e) {
  return Za(t, this, Wa, e.cache.create(), e.serializer);
}
var zs = function() {
  return JSON.stringify(arguments);
}, Xs = (
  /** @class */
  function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, n) {
      this.cache[e] = n;
    }, t;
  }()
), Ws = {
  create: function() {
    return new Xs();
  }
}, Qn = {
  variadic: qs
}, ge;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ge || (ge = {}));
var ke;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ke || (ke = {}));
var en;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(en || (en = {}));
function Vi(t) {
  return t.type === ke.literal;
}
function Zs(t) {
  return t.type === ke.argument;
}
function Ka(t) {
  return t.type === ke.number;
}
function Ya(t) {
  return t.type === ke.date;
}
function Qa(t) {
  return t.type === ke.time;
}
function Ja(t) {
  return t.type === ke.select;
}
function xa(t) {
  return t.type === ke.plural;
}
function Ks(t) {
  return t.type === ke.pound;
}
function $a(t) {
  return t.type === ke.tag;
}
function el(t) {
  return !!(t && typeof t == "object" && t.type === en.number);
}
function bi(t) {
  return !!(t && typeof t == "object" && t.type === en.dateTime);
}
var tl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ys = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Qs(t) {
  var e = {};
  return t.replace(Ys, function(n) {
    var i = n.length;
    switch (n[0]) {
      case "G":
        e.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var Js = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function xs(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Js).filter(function(d) {
    return d.length > 0;
  }), n = [], i = 0, r = e; i < r.length; i++) {
    var a = r[i], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = o[0], s = o.slice(1), u = 0, f = s; u < f.length; u++) {
      var c = f[u];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: l, options: s });
  }
  return n;
}
function $s(t) {
  return t.replace(/^(.*?)-/, "");
}
var qi = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, nl = /^(@+)?(\+|#+)?[rs]?$/g, eu = /(\*)(0+)|(#+)(0+)|(0+)/g, il = /^(0+)$/;
function zi(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(nl, function(n, i, r) {
    return typeof r != "string" ? (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length) : r === "+" ? e.minimumSignificantDigits = i.length : i[0] === "#" ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), e;
}
function rl(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function tu(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !il.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Xi(t) {
  var e = {}, n = rl(t);
  return n || e;
}
function nu(t) {
  for (var e = {}, n = 0, i = t; n < i.length; n++) {
    var r = i[n];
    switch (r.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = $s(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = x(x(x({}, e), { notation: "scientific" }), r.options.reduce(function(s, u) {
          return x(x({}, s), Xi(u));
        }, {}));
        continue;
      case "engineering":
        e = x(x(x({}, e), { notation: "engineering" }), r.options.reduce(function(s, u) {
          return x(x({}, s), Xi(u));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(r.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace(eu, function(s, u, f, c, d, g) {
          if (u)
            e.minimumIntegerDigits = f.length;
          else {
            if (c && d)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (il.test(r.stem)) {
      e.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (qi.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(qi, function(s, u, f, c, d, g) {
        return f === "*" ? e.minimumFractionDigits = u.length : c && c[0] === "#" ? e.maximumFractionDigits = c.length : d && g ? (e.minimumFractionDigits = d.length, e.maximumFractionDigits = d.length + g.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = r.options[0];
      a === "w" ? e = x(x({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = x(x({}, e), zi(a)));
      continue;
    }
    if (nl.test(r.stem)) {
      e = x(x({}, e), zi(r.stem));
      continue;
    }
    var o = rl(r.stem);
    o && (e = x(x({}, e), o));
    var l = tu(r.stem);
    l && (e = x(x({}, e), l));
  }
  return e;
}
var In = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function iu(t, e) {
  for (var n = "", i = 0; i < t.length; i++) {
    var r = t.charAt(i);
    if (r === "j") {
      for (var a = 0; i + 1 < t.length && t.charAt(i + 1) === r; )
        a++, i++;
      var o = 1 + (a & 1), l = a < 2 ? 1 : 3 + (a >> 1), s = "a", u = ru(e);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        n += s;
      for (; o-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function ru(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, i;
  n !== "root" && (i = t.maximize().region);
  var r = In[i || ""] || In[n || ""] || In["".concat(n, "-001")] || In["001"];
  return r[0];
}
var Jn, au = new RegExp("^".concat(tl.source, "*")), lu = new RegExp("".concat(tl.source, "*$"));
function be(t, e) {
  return { start: t, end: e };
}
var ou = !!String.prototype.startsWith && "_a".startsWith("a", 1), su = !!String.fromCodePoint, uu = !!Object.fromEntries, fu = !!String.prototype.codePointAt, cu = !!String.prototype.trimStart, du = !!String.prototype.trimEnd, hu = !!Number.isSafeInteger, mu = hu ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, _i = !0;
try {
  var gu = ll("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  _i = ((Jn = gu.exec("a")) === null || Jn === void 0 ? void 0 : Jn[0]) === "a";
} catch {
  _i = !1;
}
var Wi = ou ? (
  // Native
  function(e, n, i) {
    return e.startsWith(n, i);
  }
) : (
  // For IE11
  function(e, n, i) {
    return e.slice(i, i + n.length) === n;
  }
), vi = su ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var i = "", r = e.length, a = 0, o; r > a; ) {
      if (o = e[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      i += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return i;
  }
), Zi = (
  // native
  uu ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, i = 0, r = e; i < r.length; i++) {
        var a = r[i], o = a[0], l = a[1];
        n[o] = l;
      }
      return n;
    }
  )
), al = fu ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var i = e.length;
    if (!(n < 0 || n >= i)) {
      var r = e.charCodeAt(n), a;
      return r < 55296 || r > 56319 || n + 1 === i || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? r : (r - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), pu = cu ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(au, "");
  }
), bu = du ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(lu, "");
  }
);
function ll(t, e) {
  return new RegExp(t, e);
}
var yi;
if (_i) {
  var Ki = ll("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  yi = function(e, n) {
    var i;
    Ki.lastIndex = n;
    var r = Ki.exec(e);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  yi = function(e, n) {
    for (var i = []; ; ) {
      var r = al(e, n);
      if (r === void 0 || ol(r) || Au(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return vi.apply(void 0, i);
  };
var _u = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, i) {
      for (var r = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(e, i);
          if (o.err)
            return o;
          r.push(o.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), r.push({
              type: ke.pound,
              location: be(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(ge.UNMATCHED_CLOSING_TAG, be(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Ai(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            r.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            r.push(o.val);
          }
        }
      }
      return { val: r, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var i = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: ke.literal,
            value: "<".concat(r, "/>"),
            location: be(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ai(this.char()))
            return this.error(ge.INVALID_TAG, be(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(ge.UNMATCHED_CLOSING_TAG, be(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ke.tag,
              value: r,
              children: o,
              location: be(i, this.clonePosition())
            },
            err: null
          } : this.error(ge.INVALID_TAG, be(l, this.clonePosition())));
        } else
          return this.error(ge.UNCLOSED_TAG, be(i, this.clonePosition()));
      } else
        return this.error(ge.INVALID_TAG, be(i, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && yu(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          r += a;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          r += o;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          r += l;
          continue;
        }
        break;
      }
      var s = be(i, this.clonePosition());
      return {
        val: { type: ke.literal, value: r, location: s },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !vu(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return vi.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), vi(i));
    }, t.prototype.parseArgument = function(e, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ge.EXPECT_ARGUMENT_CLOSING_BRACE, be(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ge.EMPTY_ARGUMENT, be(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(ge.MALFORMED_ARGUMENT, be(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ge.EXPECT_ARGUMENT_CLOSING_BRACE, be(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ke.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: be(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ge.EXPECT_ARGUMENT_CLOSING_BRACE, be(i, this.clonePosition())) : this.parseArgumentOptions(e, n, r, i);
        default:
          return this.error(ge.MALFORMED_ARGUMENT, be(i, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), i = yi(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var a = this.clonePosition(), o = be(e, a);
      return { value: i, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, i, r) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(ge.EXPECT_ARGUMENT_TYPE, be(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var d = bu(c.val);
            if (d.length === 0)
              return this.error(ge.EXPECT_ARGUMENT_STYLE, be(this.clonePosition(), this.clonePosition()));
            var g = be(f, this.clonePosition());
            u = { style: d, styleLocation: g };
          }
          var p = this.tryParseArgumentClose(r);
          if (p.err)
            return p;
          var b = be(r, this.clonePosition());
          if (u && Wi(u == null ? void 0 : u.style, "::", 0)) {
            var m = pu(u.style.slice(2));
            if (l === "number") {
              var c = this.parseNumberSkeletonFromString(m, u.styleLocation);
              return c.err ? c : {
                val: { type: ke.number, value: i, location: b, style: c.val },
                err: null
              };
            } else {
              if (m.length === 0)
                return this.error(ge.EXPECT_DATE_TIME_SKELETON, b);
              var y = m;
              this.locale && (y = iu(m, this.locale));
              var d = {
                type: en.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Qs(y) : {}
              }, _ = l === "date" ? ke.date : ke.time;
              return {
                val: { type: _, value: i, location: b, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? ke.number : l === "date" ? ke.date : ke.time,
              value: i,
              location: b,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var O = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ge.EXPECT_SELECT_ARGUMENT_OPTIONS, be(O, x({}, O)));
          this.bumpSpace();
          var A = this.parseIdentifierIfPossible(), D = 0;
          if (l !== "select" && A.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ge.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, be(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(ge.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ge.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), A = this.parseIdentifierIfPossible(), D = c.val;
          }
          var M = this.tryParsePluralOrSelectOptions(e, l, n, A);
          if (M.err)
            return M;
          var p = this.tryParseArgumentClose(r);
          if (p.err)
            return p;
          var h = be(r, this.clonePosition());
          return l === "select" ? {
            val: {
              type: ke.select,
              value: i,
              options: Zi(M.val),
              location: h
            },
            err: null
          } : {
            val: {
              type: ke.plural,
              value: i,
              options: Zi(M.val),
              offset: D,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: h
            },
            err: null
          };
        }
        default:
          return this.error(ge.INVALID_ARGUMENT_TYPE, be(o, s));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(ge.EXPECT_ARGUMENT_CLOSING_BRACE, be(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ge.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, be(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var i = [];
      try {
        i = xs(e);
      } catch {
        return this.error(ge.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: en.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? nu(i) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, i, r) {
      for (var a, o = !1, l = [], s = /* @__PURE__ */ new Set(), u = r.value, f = r.location; ; ) {
        if (u.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(ge.EXPECT_PLURAL_ARGUMENT_SELECTOR, ge.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            f = be(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? ge.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ge.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (o = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ge.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ge.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, be(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, n, i);
        if (p.err)
          return p;
        var b = this.tryParseArgumentClose(g);
        if (b.err)
          return b;
        l.push([
          u,
          {
            value: p.val,
            location: be(g, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, f = a.location;
      }
      return l.length === 0 ? this.error(n === "select" ? ge.EXPECT_SELECT_ARGUMENT_SELECTOR : ge.EXPECT_PLURAL_ARGUMENT_SELECTOR, be(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(ge.MISSING_OTHER_CLAUSE, be(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          a = !0, o = o * 10 + (l - 48), this.bump();
        else
          break;
      }
      var s = be(r, this.clonePosition());
      return a ? (o *= i, mu(o) ? { val: o, err: null } : this.error(n, s)) : this.error(e, s);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = al(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (Wi(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), i = this.message.indexOf(e, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && ol(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return i ?? null;
    }, t;
  }()
);
function Ai(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function vu(t) {
  return Ai(t) || t === 47;
}
function yu(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function ol(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Au(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ei(t) {
  t.forEach(function(e) {
    if (delete e.location, Ja(e) || xa(e))
      for (var n in e.options)
        delete e.options[n].location, Ei(e.options[n].value);
    else
      Ka(e) && el(e.style) || (Ya(e) || Qa(e)) && bi(e.style) ? delete e.style.location : $a(e) && Ei(e.children);
  });
}
function Eu(t, e) {
  e === void 0 && (e = {}), e = x({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new _u(t, e).parse();
  if (n.err) {
    var i = SyntaxError(ge[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || Ei(n.val), n.val;
}
var tn;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(tn || (tn = {}));
var qn = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i, r) {
      var a = t.call(this, n) || this;
      return a.code = i, a.originalMessage = r, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Yi = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i, r, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), tn.INVALID_VALUE, a) || this;
    }
    return e;
  }(qn)
), Su = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), tn.INVALID_VALUE, r) || this;
    }
    return e;
  }(qn)
), Cu = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), tn.MISSING_VALUE, i) || this;
    }
    return e;
  }(qn)
), xe;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(xe || (xe = {}));
function Iu(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== xe.literal || n.type !== xe.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function Lu(t) {
  return typeof t == "function";
}
function kn(t, e, n, i, r, a, o) {
  if (t.length === 1 && Vi(t[0]))
    return [
      {
        type: xe.literal,
        value: t[0].value
      }
    ];
  for (var l = [], s = 0, u = t; s < u.length; s++) {
    var f = u[s];
    if (Vi(f)) {
      l.push({
        type: xe.literal,
        value: f.value
      });
      continue;
    }
    if (Ks(f)) {
      typeof a == "number" && l.push({
        type: xe.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var c = f.value;
    if (!(r && c in r))
      throw new Cu(c, o);
    var d = r[c];
    if (Zs(f)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), l.push({
        type: typeof d == "string" ? xe.literal : xe.object,
        value: d
      });
      continue;
    }
    if (Ya(f)) {
      var g = typeof f.style == "string" ? i.date[f.style] : bi(f.style) ? f.style.parsedOptions : void 0;
      l.push({
        type: xe.literal,
        value: n.getDateTimeFormat(e, g).format(d)
      });
      continue;
    }
    if (Qa(f)) {
      var g = typeof f.style == "string" ? i.time[f.style] : bi(f.style) ? f.style.parsedOptions : i.time.medium;
      l.push({
        type: xe.literal,
        value: n.getDateTimeFormat(e, g).format(d)
      });
      continue;
    }
    if (Ka(f)) {
      var g = typeof f.style == "string" ? i.number[f.style] : el(f.style) ? f.style.parsedOptions : void 0;
      g && g.scale && (d = d * (g.scale || 1)), l.push({
        type: xe.literal,
        value: n.getNumberFormat(e, g).format(d)
      });
      continue;
    }
    if ($a(f)) {
      var p = f.children, b = f.value, m = r[b];
      if (!Lu(m))
        throw new Su(b, "function", o);
      var y = kn(p, e, n, i, r, a), _ = m(y.map(function(D) {
        return D.value;
      }));
      Array.isArray(_) || (_ = [_]), l.push.apply(l, _.map(function(D) {
        return {
          type: typeof D == "string" ? xe.literal : xe.object,
          value: D
        };
      }));
    }
    if (Ja(f)) {
      var O = f.options[d] || f.options.other;
      if (!O)
        throw new Yi(f.value, d, Object.keys(f.options), o);
      l.push.apply(l, kn(O.value, e, n, i, r));
      continue;
    }
    if (xa(f)) {
      var O = f.options["=".concat(d)];
      if (!O) {
        if (!Intl.PluralRules)
          throw new qn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, tn.MISSING_INTL_API, o);
        var A = n.getPluralRules(e, { type: f.pluralType }).select(d - (f.offset || 0));
        O = f.options[A] || f.options.other;
      }
      if (!O)
        throw new Yi(f.value, d, Object.keys(f.options), o);
      l.push.apply(l, kn(O.value, e, n, i, r, d - (f.offset || 0)));
      continue;
    }
  }
  return Iu(l);
}
function Ou(t, e) {
  return e ? x(x(x({}, t || {}), e || {}), Object.keys(t).reduce(function(n, i) {
    return n[i] = x(x({}, t[i]), e[i] || {}), n;
  }, {})) : t;
}
function Tu(t, e) {
  return e ? Object.keys(t).reduce(function(n, i) {
    return n[i] = Ou(t[i], e[i]), n;
  }, x({}, t)) : t;
}
function xn(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function wu(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Yn(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, Yt([void 0], n, !1)))();
    }, {
      cache: xn(t.number),
      strategy: Qn.variadic
    }),
    getDateTimeFormat: Yn(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Yt([void 0], n, !1)))();
    }, {
      cache: xn(t.dateTime),
      strategy: Qn.variadic
    }),
    getPluralRules: Yn(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, Yt([void 0], n, !1)))();
    }, {
      cache: xn(t.pluralRules),
      strategy: Qn.variadic
    })
  };
}
var sl = (
  /** @class */
  function() {
    function t(e, n, i, r) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(s) {
        var u = a.formatToParts(s);
        if (u.length === 1)
          return u[0].value;
        var f = u.reduce(function(c, d) {
          return !c.length || d.type !== xe.literal || typeof c[c.length - 1] != "string" ? c.push(d.value) : c[c.length - 1] += d.value, c;
        }, []);
        return f.length <= 1 ? f[0] || "" : f;
      }, this.formatToParts = function(s) {
        return kn(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message);
      }, this.resolvedOptions = function() {
        var s;
        return {
          locale: ((s = a.resolvedLocale) === null || s === void 0 ? void 0 : s.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = r || {};
        o.formatters;
        var l = Us(o, ["formatters"]);
        this.ast = t.__parse(e, x(x({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Tu(t.formats, i), this.formatters = r && r.formatters || wu(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = Eu, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function Ru(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let i = t;
  for (let r = 0; r < n.length; r++)
    if (typeof i == "object") {
      if (r > 0) {
        const a = n.slice(r, n.length).join(".");
        if (a in i) {
          i = i[a];
          break;
        }
      }
      i = i[n[r]];
    } else
      i = void 0;
  return i;
}
const Tt = {}, Hu = (t, e, n) => n && (e in Tt || (Tt[e] = {}), t in Tt[e] || (Tt[e][t] = n), n), ul = (t, e) => {
  if (e == null)
    return;
  if (e in Tt && t in Tt[e])
    return Tt[e][t];
  const n = yn(e);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], a = Du(r, t);
    if (a)
      return Hu(t, e, a);
  }
};
let Ti;
const vn = it({});
function ku(t) {
  return Ti[t] || null;
}
function fl(t) {
  return t in Ti;
}
function Du(t, e) {
  if (!fl(t))
    return null;
  const n = ku(t);
  return Ru(n, e);
}
function Mu(t) {
  if (t == null)
    return;
  const e = yn(t);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (fl(i))
      return i;
  }
}
function cl(t, ...e) {
  delete Tt[t], vn.update((n) => (n[t] = Ps.all([n[t] || {}, ...e]), n));
}
ln(
  [vn],
  ([t]) => Object.keys(t)
);
vn.subscribe((t) => Ti = t);
const Dn = {};
function Bu(t, e) {
  Dn[t].delete(e), Dn[t].size === 0 && delete Dn[t];
}
function dl(t) {
  return Dn[t];
}
function Pu(t) {
  return yn(t).map((e) => {
    const n = dl(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Un(t) {
  return t == null ? !1 : yn(t).some(
    (e) => {
      var n;
      return (n = dl(e)) == null ? void 0 : n.size;
    }
  );
}
function Uu(t, e) {
  return Promise.all(
    e.map((i) => (Bu(t, i), i().then((r) => r.default || r)))
  ).then((i) => cl(t, ...i));
}
const fn = {};
function hl(t) {
  if (!Un(t))
    return t in fn ? fn[t] : Promise.resolve();
  const e = Pu(t);
  return fn[t] = Promise.all(
    e.map(
      ([n, i]) => Uu(n, i)
    )
  ).then(() => {
    if (Un(t))
      return hl(t);
    delete fn[t];
  }), fn[t];
}
var Qi = Object.getOwnPropertySymbols, Fu = Object.prototype.hasOwnProperty, Nu = Object.prototype.propertyIsEnumerable, Gu = (t, e) => {
  var n = {};
  for (var i in t)
    Fu.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Qi)
    for (var i of Qi(t))
      e.indexOf(i) < 0 && Nu.call(t, i) && (n[i] = t[i]);
  return n;
};
const ju = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function Vu({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${yn(
      t
    ).join('", "')}".${Un(kt()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const qu = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: ju,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, hn = qu;
function nn() {
  return hn;
}
function zu(t) {
  const e = t, { formats: n } = e, i = Gu(e, ["formats"]);
  let r = t.fallbackLocale;
  if (t.initialLocale)
    try {
      sl.resolveLocale(t.initialLocale) && (r = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return i.warnOnMissingMessages && (delete i.warnOnMissingMessages, i.handleMissingMessage == null ? i.handleMissingMessage = Vu : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(hn, i, { initialLocale: r }), n && ("number" in n && Object.assign(hn.formats.number, n.number), "date" in n && Object.assign(hn.formats.date, n.date), "time" in n && Object.assign(hn.formats.time, n.time)), Gt.set(r);
}
const $n = it(!1);
var Xu = Object.defineProperty, Wu = Object.defineProperties, Zu = Object.getOwnPropertyDescriptors, Ji = Object.getOwnPropertySymbols, Ku = Object.prototype.hasOwnProperty, Yu = Object.prototype.propertyIsEnumerable, xi = (t, e, n) => e in t ? Xu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Qu = (t, e) => {
  for (var n in e || (e = {}))
    Ku.call(e, n) && xi(t, n, e[n]);
  if (Ji)
    for (var n of Ji(e))
      Yu.call(e, n) && xi(t, n, e[n]);
  return t;
}, Ju = (t, e) => Wu(t, Zu(e));
let Si;
const Fn = it(null);
function $i(t) {
  return t.split("-").map((e, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function yn(t, e = nn().fallbackLocale) {
  const n = $i(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...$i(e)])] : n;
}
function kt() {
  return Si ?? void 0;
}
Fn.subscribe((t) => {
  Si = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const xu = (t) => {
  if (t && Mu(t) && Un(t)) {
    const { loadingDelay: e } = nn();
    let n;
    return typeof window < "u" && kt() != null && e ? n = window.setTimeout(
      () => $n.set(!0),
      e
    ) : $n.set(!0), hl(t).then(() => {
      Fn.set(t);
    }).finally(() => {
      clearTimeout(n), $n.set(!1);
    });
  }
  return Fn.set(t);
}, Gt = Ju(Qu({}, Fn), {
  set: xu
}), $u = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], zn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in e ? e[r] : e[r] = t(i);
  };
};
var ef = Object.defineProperty, Nn = Object.getOwnPropertySymbols, ml = Object.prototype.hasOwnProperty, gl = Object.prototype.propertyIsEnumerable, er = (t, e, n) => e in t ? ef(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, wi = (t, e) => {
  for (var n in e || (e = {}))
    ml.call(e, n) && er(t, n, e[n]);
  if (Nn)
    for (var n of Nn(e))
      gl.call(e, n) && er(t, n, e[n]);
  return t;
}, on = (t, e) => {
  var n = {};
  for (var i in t)
    ml.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Nn)
    for (var i of Nn(t))
      e.indexOf(i) < 0 && gl.call(t, i) && (n[i] = t[i]);
  return n;
};
const _n = (t, e) => {
  const { formats: n } = nn();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, tf = zn(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = on(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = _n("number", i)), new Intl.NumberFormat(n, r);
  }
), nf = zn(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = on(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = _n("date", i) : Object.keys(r).length === 0 && (r = _n("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), rf = zn(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = on(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = _n("time", i) : Object.keys(r).length === 0 && (r = _n("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), af = (t = {}) => {
  var e = t, {
    locale: n = kt()
  } = e, i = on(e, [
    "locale"
  ]);
  return tf(wi({ locale: n }, i));
}, lf = (t = {}) => {
  var e = t, {
    locale: n = kt()
  } = e, i = on(e, [
    "locale"
  ]);
  return nf(wi({ locale: n }, i));
}, of = (t = {}) => {
  var e = t, {
    locale: n = kt()
  } = e, i = on(e, [
    "locale"
  ]);
  return rf(wi({ locale: n }, i));
}, sf = zn(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = kt()) => new sl(t, e, nn().formats, {
    ignoreTag: nn().ignoreTag
  })
), uf = (t, e = {}) => {
  var n, i, r, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: l,
    locale: s = kt(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = ul(t, s);
  if (!f)
    f = (a = (r = (i = (n = nn()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: s, id: t, defaultValue: u })) != null ? r : u) != null ? a : t;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!l)
    return f;
  let c = f;
  try {
    c = sf(f, s).format(l);
  } catch (d) {
    d instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      d.message
    );
  }
  return c;
}, ff = (t, e) => of(e).format(t), cf = (t, e) => lf(e).format(t), df = (t, e) => af(e).format(t), hf = (t, e = kt()) => ul(t, e), mf = ln([Gt, vn], () => uf);
ln([Gt], () => ff);
ln([Gt], () => cf);
ln([Gt], () => df);
ln([Gt, vn], () => hf);
function gf(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    cl(a, o);
  });
  const n = localStorage.getItem("language"), i = "en", r = n ?? $u();
  console.log("Initial: Setting the language to", r), zu({
    fallbackLocale: i,
    initialLocale: r
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), Gt.set(o.detail.language);
  });
}
function Y(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function ve(t, e, n, i = { bubbles: !0 }, r = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dipatch event without element.");
  const a = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: n }));
  if (t == null || t.dispatchEvent(a), r && e.startsWith("SMUI")) {
    const o = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: n }));
    t == null || t.dispatchEvent(o), o.defaultPrevented && a.preventDefault();
  }
  return a;
}
function Ht(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const a = n[r], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = t[a]);
  }
  return i;
}
const tr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, pf = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ue(t) {
  let e, n = [];
  t.$on = (r, a) => {
    let o = r, l = () => {
    };
    return e ? l = e(o, a) : n.push([o, a]), o.match(tr) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', o), () => {
      l();
    };
  };
  function i(r) {
    const a = t.$$.callbacks[r.type];
    a && a.slice().forEach((o) => o.call(this, r));
  }
  return (r) => {
    const a = [], o = {};
    e = (l, s) => {
      let u = l, f = s, c = !1;
      const d = u.match(tr), g = u.match(pf), p = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const y = u.split(":");
        let _ = "";
        for (let O = 0; O < y.length; O++)
          _ += O === y.length - 1 ? ":" + y[O] : y[O].split("-").map((A) => A.slice(0, 1).toUpperCase() + A.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${_.split("$")[0]}.`), u = _;
      }
      if (p) {
        const y = u.split(d ? ":" : "$");
        u = y[0];
        const _ = y.slice(1).reduce((O, A) => (O[A] = !0, O), {});
        _.passive && (c = c || {}, c.passive = !0), _.nonpassive && (c = c || {}, c.passive = !1), _.capture && (c = c || {}, c.capture = !0), _.once && (c = c || {}, c.once = !0), _.preventDefault && (f = bf(f)), _.stopPropagation && (f = _f(f)), _.stopImmediatePropagation && (f = vf(f)), _.self && (f = yf(r, f)), _.trusted && (f = Af(f));
      }
      const b = nr(r, u, f, c), m = () => {
        b();
        const y = a.indexOf(m);
        y > -1 && a.splice(y, 1);
      };
      return a.push(m), u in o || (o[u] = nr(r, u, i)), m;
    };
    for (let l = 0; l < n.length; l++)
      e(n[l][0], n[l][1]);
    return {
      destroy: () => {
        for (let l = 0; l < a.length; l++)
          a[l]();
        for (let l of Object.entries(o))
          l[1]();
      }
    };
  };
}
function nr(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function bf(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function _f(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function vf(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function yf(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function Af(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function Ne(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = t[a]);
  }
  return i;
}
function He(t, e) {
  let n = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i], a = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? n.push(a(t, r[1])) : n.push(a(t));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const a = n[r];
          if (a && a.update) {
            const o = i[r];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        r && r.destroy && r.destroy();
      }
    }
  };
}
var Ln;
function Ef(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = Ln;
  if (typeof Ln == "boolean" && !e)
    return Ln;
  var r = n && typeof n.supports == "function";
  if (!r)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = a || o, e || (Ln = i), i;
}
function Sf(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, a = i + n.left, o = r + n.top, l, s;
  if (t.type === "touchstart") {
    var u = t;
    l = u.changedTouches[0].pageX - a, s = u.changedTouches[0].pageY - o;
  } else {
    var f = t;
    l = f.pageX - a, s = f.pageY - o;
  }
  return { x: l, y: s };
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
var bt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
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
function Cf(t) {
  return t === void 0 && (t = window), If(t) ? { passive: !0 } : !1;
}
function If(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    t.document.addEventListener("test", i, n), t.document.removeEventListener("test", i, n);
  } catch {
    e = !1;
  }
  return e;
}
const pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Cf
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
function Lf(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (bl(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function bl(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Of(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Lf,
  estimateScrollWidth: Of,
  matches: bl
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
var Tf = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, wf = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ir = {
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
var rr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ar = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], On = [], Rf = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
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
        return Tf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return wf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ir;
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
      var n = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = e.cssClasses, a = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, a = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(r), n.adapter.removeClass(a), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var i = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(n) {
      var i, r;
      if (n) {
        try {
          for (var a = Qe(rr), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var i, r;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Qe(ar), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var r = Qe(rr), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = Qe(ar), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(i[a], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            r.isActivated = !0, r.isProgrammatic = n === void 0, r.activationEvent = n, r.wasActivatedByPointer = r.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var l = n !== void 0 && On.length > 0 && On.some(function(s) {
              return i.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (On.push(n.target), this.registerDeactivationHandlers(n)), r.wasElementMadeActive = this.checkElementMadeActive(n), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              On = [], !r.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(n), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, o = e.cssClasses, l = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, p = d.endPoint;
        f = g.x + "px, " + g.y + "px", c = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(r, f), this.adapter.updateCssVariable(a, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, r = n.wasActivatedByPointer, a;
      r ? a = Sf(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, o = r.isActivated, l = a || !o;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(i);
      }, ir.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, i = this.activationState;
      if (i.isActivated) {
        var r = x({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(r), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var i = n.wasActivatedByPointer, r = n.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var a = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, i = n.VAR_FG_SIZE, r = n.VAR_LEFT, a = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(bt)
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
var ei = "mdc-dom-focus-sentinel", Hf = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return t.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, t.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + ei)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, i = this.createSentinel(), r = this.createSentinel();
      i.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), r.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(i, e.children[0]), e.appendChild(r);
    }, t.prototype.focusInitialElement = function(e, n) {
      var i = 0;
      n && (i = Math.max(e.indexOf(n), 0)), e[i].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(i) {
        var r = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", a = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(ei) && !r, o = !1;
        if (a) {
          var l = getComputedStyle(i);
          o = l.display === "none" || l.visibility === "hidden";
        }
        return a && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(ei), e;
    }, t;
  }()
);
const kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Hf
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: Tn } = pl, { matches: Df } = Ri;
function wt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: r = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: f = (p) => t.classList.add(p), removeClass: c = (p) => t.classList.remove(p), addStyle: d = (p, b) => t.style.setProperty(p, b), initPromise: g = Promise.resolve() } = {}) {
  let p, b = Re("SMUI:addLayoutListener"), m, y = o, _ = s, O = u;
  function A() {
    n ? (f("mdc-ripple-surface"), a === "primary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : a === "secondary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : (c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary"))) : (c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), p && y !== o && (y = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new Rf({
      addClass: f,
      browserSupportsCssVars: () => Ef(window),
      computeBoundingRect: () => (l || t).getBoundingClientRect(),
      containsEventTarget: (M) => t.contains(M),
      deregisterDocumentInteractionHandler: (M, h) => document.documentElement.removeEventListener(M, h, Tn()),
      deregisterInteractionHandler: (M, h) => (s || t).removeEventListener(M, h, Tn()),
      deregisterResizeHandler: (M) => window.removeEventListener("resize", M),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => o ?? Df(u || t, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (M, h) => document.documentElement.addEventListener(M, h, Tn()),
      registerInteractionHandler: (M, h) => (s || t).addEventListener(M, h, Tn()),
      registerResizeHandler: (M) => window.addEventListener("resize", M),
      removeClass: c,
      updateCssVariable: d
    }), g.then(() => {
      p && (p.init(), p.setUnbounded(i));
    })) : p && !e && g.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (_ !== s || O !== u) && (_ = s, O = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(i));
    })), !e && i && f("mdc-ripple-upgraded--unbounded");
  }
  A(), b && (m = b(D));
  function D() {
    p && p.layout();
  }
  return {
    update(M) {
      ({
        ripple: e,
        surface: n,
        unbounded: i,
        disabled: r,
        color: a,
        active: o,
        rippleElement: l,
        eventTarget: s,
        activeTarget: u,
        addClass: f,
        removeClass: c,
        addStyle: d,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => t.classList.add(h), removeClass: (h) => t.classList.remove(h), addStyle: (h, R) => t.style.setProperty(h, R), initPromise: Promise.resolve() }, M)), A();
    },
    destroy() {
      p && (p.destroy(), p = void 0, c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), m && m();
    }
  };
}
function Mf(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      4096) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? le(
          n,
          /*$$scope*/
          r[12],
          a,
          null
        ) : se(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Bf(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[5],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button__label": (
          /*context*/
          t[6] === "button"
        ),
        "mdc-fab__label": (
          /*context*/
          t[6] === "fab"
        ),
        "mdc-tab__text-label": (
          /*context*/
          t[6] === "tab"
        ),
        "mdc-image-list__label": (
          /*context*/
          t[6] === "image-list"
        ),
        "mdc-snackbar__label": (
          /*context*/
          t[6] === "snackbar"
        ),
        "mdc-banner__text": (
          /*context*/
          t[6] === "banner"
        ),
        "mdc-segmented-button__label": (
          /*context*/
          t[6] === "segmented-button"
        ),
        "mdc-data-table__pagination-rows-per-page-label": (
          /*context*/
          t[6] === "data-table:pagination"
        ),
        "mdc-data-table__header-cell-label": (
          /*context*/
          t[6] === "data-table:sortable-header-cell"
        )
      })
    },
    /*context*/
    t[6] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: (
      /*tabindex*/
      t[7]
    ) },
    /*$$restProps*/
    t[8]
  ];
  var a = (
    /*component*/
    t[2]
  );
  function o(l, s) {
    let u = {
      $$slots: { default: [Mf] },
      $$scope: { ctx: l }
    };
    for (let f = 0; f < r.length; f += 1)
      u = F(u, r[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = F(u, fe(r, [
      s & /*tag*/
      8 && { tag: (
        /*tag*/
        l[3]
      ) },
      s & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          l[5],
          .../*use*/
          l[0]
        ]
      },
      s & /*className, context*/
      66 && {
        class: Y({
          [
            /*className*/
            l[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            l[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            l[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            l[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            l[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            l[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            l[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            l[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            l[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            l[6] === "data-table:sortable-header-cell"
          )
        })
      },
      s & /*context*/
      64 && _e(
        /*context*/
        l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      s & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        l[7]
      ) },
      s & /*$$restProps*/
      256 && _e(
        /*$$restProps*/
        l[8]
      )
    ]))), { props: u };
  }
  return a && (e = gt(a, o(t)), t[11](e)), {
    c() {
      e && j(e.$$.fragment), n = Te();
    },
    m(l, s) {
      e && N(e, l, s), P(l, n, s), i = !0;
    },
    p(l, [s]) {
      if (s & /*component*/
      4 && a !== (a = /*component*/
      l[2])) {
        if (e) {
          ye();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            G(u, 1);
          }), Ae();
        }
        a ? (e = gt(a, o(l, s)), l[11](e), j(e.$$.fragment), S(e.$$.fragment, 1), N(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? fe(r, [
          s & /*tag*/
          8 && { tag: (
            /*tag*/
            l[3]
          ) },
          s & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              l[5],
              .../*use*/
              l[0]
            ]
          },
          s & /*className, context*/
          66 && {
            class: Y({
              [
                /*className*/
                l[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                l[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                l[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                l[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                l[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                l[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                l[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                l[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                l[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                l[6] === "data-table:sortable-header-cell"
              )
            })
          },
          s & /*context*/
          64 && _e(
            /*context*/
            l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          s & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            l[7]
          ) },
          s & /*$$restProps*/
          256 && _e(
            /*$$restProps*/
            l[8]
          )
        ]) : {};
        s & /*$$scope*/
        4096 && (u.$$scope = { dirty: s, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && S(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && I(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[11](null), e && G(e, l);
    }
  };
}
function Pf(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, { class: u = "" } = e, f, { component: c = pt } = e, { tag: d = c === pt ? "span" : void 0 } = e;
  const g = Re("SMUI:label:context"), p = Re("SMUI:label:tabindex");
  function b() {
    return f.getElement();
  }
  function m(y) {
    ee[y ? "unshift" : "push"](() => {
      f = y, n(4, f);
    });
  }
  return t.$$set = (y) => {
    e = F(F({}, e), Me(y)), n(8, r = re(e, i)), "use" in y && n(0, s = y.use), "class" in y && n(1, u = y.class), "component" in y && n(2, c = y.component), "tag" in y && n(3, d = y.tag), "$$scope" in y && n(12, o = y.$$scope);
  }, [
    s,
    u,
    c,
    d,
    f,
    l,
    g,
    p,
    r,
    b,
    a,
    m,
    o
  ];
}
class jt extends de {
  constructor(e) {
    super(), ce(this, e, Pf, Bf, ue, {
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
function Uf(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      8192) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? le(
          n,
          /*$$scope*/
          r[13],
          a,
          null
        ) : se(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ff(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[6],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button__icon": (
          /*context*/
          t[8] === "button"
        ),
        "mdc-fab__icon": (
          /*context*/
          t[8] === "fab"
        ),
        "mdc-icon-button__icon": (
          /*context*/
          t[8] === "icon-button"
        ),
        "mdc-icon-button__icon--on": (
          /*context*/
          t[8] === "icon-button" && /*on*/
          t[2]
        ),
        "mdc-tab__icon": (
          /*context*/
          t[8] === "tab"
        ),
        "mdc-banner__icon": (
          /*context*/
          t[8] === "banner"
        ),
        "mdc-segmented-button__icon": (
          /*context*/
          t[8] === "segmented-button"
        )
      })
    },
    { "aria-hidden": "true" },
    /*svg*/
    t[7] ? { focusable: "false", tabindex: "-1" } : {},
    /*$$restProps*/
    t[9]
  ];
  var a = (
    /*component*/
    t[3]
  );
  function o(l, s) {
    let u = {
      $$slots: { default: [Uf] },
      $$scope: { ctx: l }
    };
    for (let f = 0; f < r.length; f += 1)
      u = F(u, r[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (u = F(u, fe(r, [
      s & /*tag*/
      16 && { tag: (
        /*tag*/
        l[4]
      ) },
      s & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          l[6],
          .../*use*/
          l[0]
        ]
      },
      s & /*className, context, on*/
      262 && {
        class: Y({
          [
            /*className*/
            l[1]
          ]: !0,
          "mdc-button__icon": (
            /*context*/
            l[8] === "button"
          ),
          "mdc-fab__icon": (
            /*context*/
            l[8] === "fab"
          ),
          "mdc-icon-button__icon": (
            /*context*/
            l[8] === "icon-button"
          ),
          "mdc-icon-button__icon--on": (
            /*context*/
            l[8] === "icon-button" && /*on*/
            l[2]
          ),
          "mdc-tab__icon": (
            /*context*/
            l[8] === "tab"
          ),
          "mdc-banner__icon": (
            /*context*/
            l[8] === "banner"
          ),
          "mdc-segmented-button__icon": (
            /*context*/
            l[8] === "segmented-button"
          )
        })
      },
      r[3],
      s & /*svg*/
      128 && _e(
        /*svg*/
        l[7] ? { focusable: "false", tabindex: "-1" } : {}
      ),
      s & /*$$restProps*/
      512 && _e(
        /*$$restProps*/
        l[9]
      )
    ]))), { props: u };
  }
  return a && (e = gt(a, o(t)), t[12](e)), {
    c() {
      e && j(e.$$.fragment), n = Te();
    },
    m(l, s) {
      e && N(e, l, s), P(l, n, s), i = !0;
    },
    p(l, [s]) {
      if (s & /*component*/
      8 && a !== (a = /*component*/
      l[3])) {
        if (e) {
          ye();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            G(u, 1);
          }), Ae();
        }
        a ? (e = gt(a, o(l, s)), l[12](e), j(e.$$.fragment), S(e.$$.fragment, 1), N(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? fe(r, [
          s & /*tag*/
          16 && { tag: (
            /*tag*/
            l[4]
          ) },
          s & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              l[6],
              .../*use*/
              l[0]
            ]
          },
          s & /*className, context, on*/
          262 && {
            class: Y({
              [
                /*className*/
                l[1]
              ]: !0,
              "mdc-button__icon": (
                /*context*/
                l[8] === "button"
              ),
              "mdc-fab__icon": (
                /*context*/
                l[8] === "fab"
              ),
              "mdc-icon-button__icon": (
                /*context*/
                l[8] === "icon-button"
              ),
              "mdc-icon-button__icon--on": (
                /*context*/
                l[8] === "icon-button" && /*on*/
                l[2]
              ),
              "mdc-tab__icon": (
                /*context*/
                l[8] === "tab"
              ),
              "mdc-banner__icon": (
                /*context*/
                l[8] === "banner"
              ),
              "mdc-segmented-button__icon": (
                /*context*/
                l[8] === "segmented-button"
              )
            })
          },
          r[3],
          s & /*svg*/
          128 && _e(
            /*svg*/
            l[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          s & /*$$restProps*/
          512 && _e(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        s & /*$$scope*/
        8192 && (u.$$scope = { dirty: s, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && S(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && I(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[12](null), e && G(e, l);
    }
  };
}
function Nf(t, e, n) {
  const i = ["use", "class", "on", "component", "tag", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, { class: u = "" } = e, { on: f = !1 } = e, c, { component: d = pt } = e, { tag: g = d === pt ? "i" : void 0 } = e;
  const p = d === Kf, b = Re("SMUI:icon:context");
  function m() {
    return c.getElement();
  }
  function y(_) {
    ee[_ ? "unshift" : "push"](() => {
      c = _, n(5, c);
    });
  }
  return t.$$set = (_) => {
    e = F(F({}, e), Me(_)), n(9, r = re(e, i)), "use" in _ && n(0, s = _.use), "class" in _ && n(1, u = _.class), "on" in _ && n(2, f = _.on), "component" in _ && n(3, d = _.component), "tag" in _ && n(4, g = _.tag), "$$scope" in _ && n(13, o = _.$$scope);
  }, [
    s,
    u,
    f,
    d,
    g,
    c,
    l,
    p,
    b,
    r,
    m,
    a,
    y,
    o
  ];
}
class Gf extends de {
  constructor(e) {
    super(), ce(this, e, Nf, Ff, ue, {
      use: 0,
      class: 1,
      on: 2,
      component: 3,
      tag: 4,
      getElement: 10
    });
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
function jf(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i, r = (
    /*tag*/
    t[1] && ti(t)
  );
  return {
    c() {
      r && r.c(), n = Te();
    },
    m(a, o) {
      r && r.m(a, o), P(a, n, o), i = !0;
    },
    p(a, o) {
      /*tag*/
      a[1] ? e ? ue(
        e,
        /*tag*/
        a[1]
      ) ? (r.d(1), r = ti(a), e = /*tag*/
      a[1], r.c(), r.m(n.parentNode, n)) : r.p(a, o) : (r = ti(a), e = /*tag*/
      a[1], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      a[1]);
    },
    i(a) {
      i || (S(r, a), i = !0);
    },
    o(a) {
      I(r, a), i = !1;
    },
    d(a) {
      a && B(n), r && r.d(a);
    }
  };
}
function Vf(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i = (
    /*tag*/
    t[1] && ni(t)
  );
  return {
    c() {
      i && i.c(), n = Te();
    },
    m(r, a) {
      i && i.m(r, a), P(r, n, a);
    },
    p(r, a) {
      /*tag*/
      r[1] ? e ? ue(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = ni(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : i.p(r, a) : (i = ni(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: Oe,
    o: Oe,
    d(r) {
      r && B(n), i && i.d(r);
    }
  };
}
function qf(t) {
  let e, n, i, r, a;
  const o = (
    /*#slots*/
    t[8].default
  ), l = ae(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let s = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = F(u, s[f]);
  return {
    c() {
      e = Be("svg"), l && l.c(), Mn(e, u);
    },
    m(f, c) {
      P(f, e, c), l && l.m(e, null), t[9](e), i = !0, r || (a = [
        te(n = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(f, c) {
      l && l.p && (!i || c & /*$$scope*/
      128) && oe(
        l,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? le(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : se(
          /*$$scope*/
          f[7]
        ),
        null
      ), Mn(e, u = fe(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && me(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (S(l, f), i = !0);
    },
    o(f) {
      I(l, f), i = !1;
    },
    d(f) {
      f && B(e), l && l.d(f), t[9](null), r = !1, Ee(a);
    }
  };
}
function ti(t) {
  let e, n, i, r, a;
  const o = (
    /*#slots*/
    t[8].default
  ), l = ae(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let s = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = F(u, s[f]);
  return {
    c() {
      e = K(
        /*tag*/
        t[1]
      ), l && l.c(), Bn(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(f, c) {
      P(f, e, c), l && l.m(e, null), t[11](e), i = !0, r || (a = [
        te(n = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(f, c) {
      l && l.p && (!i || c & /*$$scope*/
      128) && oe(
        l,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? le(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : se(
          /*$$scope*/
          f[7]
        ),
        null
      ), Bn(
        /*tag*/
        f[1]
      )(e, u = fe(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && me(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (S(l, f), i = !0);
    },
    o(f) {
      I(l, f), i = !1;
    },
    d(f) {
      f && B(e), l && l.d(f), t[11](null), r = !1, Ee(a);
    }
  };
}
function ni(t) {
  let e, n, i, r, a = [
    /*$$restProps*/
    t[5]
  ], o = {};
  for (let l = 0; l < a.length; l += 1)
    o = F(o, a[l]);
  return {
    c() {
      e = K(
        /*tag*/
        t[1]
      ), Bn(
        /*tag*/
        t[1]
      )(e, o);
    },
    m(l, s) {
      P(l, e, s), t[10](e), i || (r = [
        te(n = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], i = !0);
    },
    p(l, s) {
      Bn(
        /*tag*/
        l[1]
      )(e, o = fe(a, [s & /*$$restProps*/
      32 && /*$$restProps*/
      l[5]])), n && me(n.update) && s & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        l[0]
      );
    },
    d(l) {
      l && B(e), t[10](null), i = !1, Ee(r);
    }
  };
}
function zf(t) {
  let e, n, i, r;
  const a = [qf, Vf, jf], o = [];
  function l(s, u) {
    return (
      /*tag*/
      s[1] === "svg" ? 0 : (
        /*selfClosing*/
        s[3] ? 1 : 2
      )
    );
  }
  return e = l(t), n = o[e] = a[e](t), {
    c() {
      n.c(), i = Te();
    },
    m(s, u) {
      o[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = l(s), e === f ? o[e].p(s, u) : (ye(), I(o[f], 1, 1, () => {
        o[f] = null;
      }), Ae(), n = o[e], n ? n.p(s, u) : (n = o[e] = a[e](s), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (S(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), o[e].d(s);
    }
  };
}
function Xf(t, e, n) {
  let i;
  const r = ["use", "tag", "getElement"];
  let a = re(e, r), { $$slots: o = {}, $$scope: l } = e, { use: s = [] } = e, { tag: u } = e;
  const f = Ue(we());
  let c;
  function d() {
    return c;
  }
  function g(m) {
    ee[m ? "unshift" : "push"](() => {
      c = m, n(2, c);
    });
  }
  function p(m) {
    ee[m ? "unshift" : "push"](() => {
      c = m, n(2, c);
    });
  }
  function b(m) {
    ee[m ? "unshift" : "push"](() => {
      c = m, n(2, c);
    });
  }
  return t.$$set = (m) => {
    e = F(F({}, e), Me(m)), n(5, a = re(e, r)), "use" in m && n(0, s = m.use), "tag" in m && n(1, u = m.tag), "$$scope" in m && n(7, l = m.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tag*/
    2 && n(3, i = [
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
    s,
    u,
    c,
    i,
    f,
    a,
    d,
    l,
    o,
    g,
    p,
    b
  ];
}
class pt extends de {
  constructor(e) {
    super(), ce(this, e, Xf, zf, ue, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Wf(t) {
  let e, n, i, r, a;
  const o = (
    /*#slots*/
    t[6].default
  ), l = ae(
    o,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let s = [
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = F(u, s[f]);
  return {
    c() {
      e = Be("svg"), l && l.c(), Mn(e, u);
    },
    m(f, c) {
      P(f, e, c), l && l.m(e, null), t[7](e), i = !0, r || (a = [
        te(n = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[2].call(null, e)
        )
      ], r = !0);
    },
    p(f, [c]) {
      l && l.p && (!i || c & /*$$scope*/
      32) && oe(
        l,
        o,
        f,
        /*$$scope*/
        f[5],
        i ? le(
          o,
          /*$$scope*/
          f[5],
          c,
          null
        ) : se(
          /*$$scope*/
          f[5]
        ),
        null
      ), Mn(e, u = fe(s, [c & /*$$restProps*/
      8 && /*$$restProps*/
      f[3]])), n && me(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (S(l, f), i = !0);
    },
    o(f) {
      I(l, f), i = !1;
    },
    d(f) {
      f && B(e), l && l.d(f), t[7](null), r = !1, Ee(a);
    }
  };
}
function Zf(t, e, n) {
  const i = ["use", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: l = [] } = e;
  const s = Ue(we());
  let u;
  function f() {
    return u;
  }
  function c(d) {
    ee[d ? "unshift" : "push"](() => {
      u = d, n(1, u);
    });
  }
  return t.$$set = (d) => {
    e = F(F({}, e), Me(d)), n(3, r = re(e, i)), "use" in d && n(0, l = d.use), "$$scope" in d && n(5, o = d.$$scope);
  }, [
    l,
    u,
    s,
    r,
    f,
    o,
    a,
    c
  ];
}
class Kf extends de {
  constructor(e) {
    super(), ce(this, e, Zf, Wf, ue, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Yf(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, [a]) {
      i && i.p && (!e || a & /*$$scope*/
      8) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[3],
        e ? le(
          n,
          /*$$scope*/
          r[3],
          a,
          null
        ) : se(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qf(t, e, n) {
  let i, { $$slots: r = {}, $$scope: a } = e, { key: o } = e, { value: l } = e;
  const s = it(l);
  return nt(t, s, (u) => n(5, i = u)), De(o, s), an(() => {
    s.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, o = u.key), "value" in u && n(2, l = u.value), "$$scope" in u && n(3, a = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && Ot(s, i = l, i);
  }, [s, o, l, a, r];
}
class Gn extends de {
  constructor(e) {
    super(), ce(this, e, Qf, Yf, ue, { key: 1, value: 2 });
  }
}
function lr(t) {
  let e;
  return {
    c() {
      e = K("div"), U(e, "class", "mdc-button__touch");
    },
    m(n, i) {
      P(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function Jf(t) {
  let e, n, i, r;
  const a = (
    /*#slots*/
    t[28].default
  ), o = ae(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let l = (
    /*touch*/
    t[6] && lr()
  );
  return {
    c() {
      e = K("div"), n = Q(), o && o.c(), l && l.c(), i = Te(), U(e, "class", "mdc-button__ripple");
    },
    m(s, u) {
      P(s, e, u), P(s, n, u), o && o.m(s, u), l && l.m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      o && o.p && (!r || u[0] & /*$$scope*/
      1073741824) && oe(
        o,
        a,
        s,
        /*$$scope*/
        s[30],
        r ? le(
          a,
          /*$$scope*/
          s[30],
          u,
          null
        ) : se(
          /*$$scope*/
          s[30]
        ),
        null
      ), /*touch*/
      s[6] ? l || (l = lr(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(s) {
      r || (S(o, s), r = !0);
    },
    o(s) {
      I(o, s), r = !1;
    },
    d(s) {
      s && (B(e), B(n), B(i)), o && o.d(s), l && l.d(s);
    }
  };
}
function xf(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[10]
    ) },
    {
      use: [
        [
          wt,
          {
            ripple: (
              /*ripple*/
              t[3]
            ),
            unbounded: !1,
            color: (
              /*color*/
              t[4]
            ),
            disabled: !!/*$$restProps*/
            t[23].disabled,
            addClass: (
              /*addClass*/
              t[19]
            ),
            removeClass: (
              /*removeClass*/
              t[20]
            ),
            addStyle: (
              /*addStyle*/
              t[21]
            )
          }
        ],
        /*forwardEvents*/
        t[17],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button": !0,
        "mdc-button--raised": (
          /*variant*/
          t[5] === "raised"
        ),
        "mdc-button--unelevated": (
          /*variant*/
          t[5] === "unelevated"
        ),
        "mdc-button--outlined": (
          /*variant*/
          t[5] === "outlined"
        ),
        "smui-button--color-secondary": (
          /*color*/
          t[4] === "secondary"
        ),
        "mdc-button--touch": (
          /*touch*/
          t[6]
        ),
        "mdc-card__action": (
          /*context*/
          t[18] === "card:action"
        ),
        "mdc-card__action--button": (
          /*context*/
          t[18] === "card:action"
        ),
        "mdc-dialog__button": (
          /*context*/
          t[18] === "dialog:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          t[18] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          t[18] === "top-app-bar:action"
        ),
        "mdc-snackbar__action": (
          /*context*/
          t[18] === "snackbar:actions"
        ),
        "mdc-banner__secondary-action": (
          /*context*/
          t[18] === "banner" && /*secondary*/
          t[8]
        ),
        "mdc-banner__primary-action": (
          /*context*/
          t[18] === "banner" && !/*secondary*/
          t[8]
        ),
        "mdc-tooltip__action": (
          /*context*/
          t[18] === "tooltip:rich-actions"
        ),
        .../*internalClasses*/
        t[12]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[13]
      ).map(ii).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*actionProp*/
    t[16],
    /*defaultProp*/
    t[15],
    /*secondaryProp*/
    t[14],
    { href: (
      /*href*/
      t[7]
    ) },
    /*$$restProps*/
    t[23]
  ];
  var a = (
    /*component*/
    t[9]
  );
  function o(l, s) {
    let u = {
      $$slots: { default: [Jf] },
      $$scope: { ctx: l }
    };
    for (let f = 0; f < r.length; f += 1)
      u = F(u, r[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = F(u, fe(r, [
      s[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        l[10]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            wt,
            {
              ripple: (
                /*ripple*/
                l[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                l[4]
              ),
              disabled: !!/*$$restProps*/
              l[23].disabled,
              addClass: (
                /*addClass*/
                l[19]
              ),
              removeClass: (
                /*removeClass*/
                l[20]
              ),
              addStyle: (
                /*addStyle*/
                l[21]
              )
            }
          ],
          /*forwardEvents*/
          l[17],
          .../*use*/
          l[0]
        ]
      },
      s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: Y({
          [
            /*className*/
            l[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            l[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            l[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            l[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            l[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            l[6]
          ),
          "mdc-card__action": (
            /*context*/
            l[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            l[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            l[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            l[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            l[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            l[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            l[18] === "banner" && /*secondary*/
            l[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            l[18] === "banner" && !/*secondary*/
            l[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            l[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          l[12]
        })
      },
      s[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          l[13]
        ).map(ii).concat([
          /*style*/
          l[2]
        ]).join(" ")
      },
      s[0] & /*actionProp*/
      65536 && _e(
        /*actionProp*/
        l[16]
      ),
      s[0] & /*defaultProp*/
      32768 && _e(
        /*defaultProp*/
        l[15]
      ),
      s[0] & /*secondaryProp*/
      16384 && _e(
        /*secondaryProp*/
        l[14]
      ),
      s[0] & /*href*/
      128 && { href: (
        /*href*/
        l[7]
      ) },
      s[0] & /*$$restProps*/
      8388608 && _e(
        /*$$restProps*/
        l[23]
      )
    ]))), { props: u };
  }
  return a && (e = gt(a, o(t)), t[29](e), e.$on(
    "click",
    /*handleClick*/
    t[22]
  )), {
    c() {
      e && j(e.$$.fragment), n = Te();
    },
    m(l, s) {
      e && N(e, l, s), P(l, n, s), i = !0;
    },
    p(l, s) {
      if (s[0] & /*component*/
      512 && a !== (a = /*component*/
      l[9])) {
        if (e) {
          ye();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            G(u, 1);
          }), Ae();
        }
        a ? (e = gt(a, o(l, s)), l[29](e), e.$on(
          "click",
          /*handleClick*/
          l[22]
        ), j(e.$$.fragment), S(e.$$.fragment, 1), N(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? fe(r, [
          s[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            l[10]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                wt,
                {
                  ripple: (
                    /*ripple*/
                    l[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    l[4]
                  ),
                  disabled: !!/*$$restProps*/
                  l[23].disabled,
                  addClass: (
                    /*addClass*/
                    l[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    l[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    l[21]
                  )
                }
              ],
              /*forwardEvents*/
              l[17],
              .../*use*/
              l[0]
            ]
          },
          s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: Y({
              [
                /*className*/
                l[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                l[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                l[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                l[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                l[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                l[6]
              ),
              "mdc-card__action": (
                /*context*/
                l[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                l[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                l[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                l[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                l[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                l[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                l[18] === "banner" && /*secondary*/
                l[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                l[18] === "banner" && !/*secondary*/
                l[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                l[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              l[12]
            })
          },
          s[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              l[13]
            ).map(ii).concat([
              /*style*/
              l[2]
            ]).join(" ")
          },
          s[0] & /*actionProp*/
          65536 && _e(
            /*actionProp*/
            l[16]
          ),
          s[0] & /*defaultProp*/
          32768 && _e(
            /*defaultProp*/
            l[15]
          ),
          s[0] & /*secondaryProp*/
          16384 && _e(
            /*secondaryProp*/
            l[14]
          ),
          s[0] & /*href*/
          128 && { href: (
            /*href*/
            l[7]
          ) },
          s[0] & /*$$restProps*/
          8388608 && _e(
            /*$$restProps*/
            l[23]
          )
        ]) : {};
        s[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: s, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && S(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && I(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[29](null), e && G(e, l);
    }
  };
}
const ii = ([t, e]) => `${t}: ${e};`;
function $f(t, e, n) {
  let i, r, a;
  const o = [
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
  let l = re(e, o), { $$slots: s = {}, $$scope: u } = e;
  const f = Ue(we());
  let { use: c = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: p = !0 } = e, { color: b = "primary" } = e, { variant: m = "text" } = e, { touch: y = !1 } = e, { href: _ = void 0 } = e, { action: O = "close" } = e, { defaultAction: A = !1 } = e, { secondary: D = !1 } = e, M, h = {}, R = {}, q = Re("SMUI:button:context"), { component: C = pt } = e, { tag: v = C === pt ? _ == null ? "button" : "a" : void 0 } = e, T = l.disabled;
  De("SMUI:label:context", "button"), De("SMUI:icon:context", "button");
  function H(E) {
    h[E] || n(12, h[E] = !0, h);
  }
  function X(E) {
    (!(E in h) || h[E]) && n(12, h[E] = !1, h);
  }
  function ie(E, z) {
    R[E] != z && (z === "" || z == null ? (delete R[E], n(13, R)) : n(13, R[E] = z, R));
  }
  function he() {
    q === "banner" && ve(J(), D ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function J() {
    return M.getElement();
  }
  function k(E) {
    ee[E ? "unshift" : "push"](() => {
      M = E, n(11, M);
    });
  }
  return t.$$set = (E) => {
    n(31, e = F(F({}, e), Me(E))), n(23, l = re(e, o)), "use" in E && n(0, c = E.use), "class" in E && n(1, d = E.class), "style" in E && n(2, g = E.style), "ripple" in E && n(3, p = E.ripple), "color" in E && n(4, b = E.color), "variant" in E && n(5, m = E.variant), "touch" in E && n(6, y = E.touch), "href" in E && n(7, _ = E.href), "action" in E && n(24, O = E.action), "defaultAction" in E && n(25, A = E.defaultAction), "secondary" in E && n(8, D = E.secondary), "component" in E && n(9, C = E.component), "tag" in E && n(10, v = E.tag), "$$scope" in E && n(30, u = E.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = q === "dialog:action" && O != null ? { "data-mdc-dialog-action": O } : { action: e.action }), n(15, r = q === "dialog:action" && A ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, a = q === "banner" ? {} : { secondary: e.secondary }), T !== l.disabled) {
      if (M) {
        const E = J();
        "blur" in E && E.blur();
      }
      n(27, T = l.disabled);
    }
  }, e = Me(e), [
    c,
    d,
    g,
    p,
    b,
    m,
    y,
    _,
    D,
    C,
    v,
    M,
    h,
    R,
    a,
    r,
    i,
    f,
    q,
    H,
    X,
    ie,
    he,
    l,
    O,
    A,
    J,
    T,
    s,
    k,
    u
  ];
}
class ec extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      $f,
      xf,
      ue,
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
function tc(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      64) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[6],
        e ? le(
          n,
          /*$$scope*/
          r[6],
          a,
          null
        ) : se(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function nc(t) {
  let e, n;
  return e = new ec({
    props: {
      variant: (
        /*variant*/
        t[2]
      ),
      disabled: (
        /*disabled*/
        t[1]
      ),
      style: (
        /*isAbortAction*/
        t[3] ? "background-color: #ff3e00;" : "background-color: " + /*backgroundColor*/
        t[4]
      ),
      $$slots: { default: [tc] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      t[0]()
    ) && t[0]().apply(this, arguments);
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const a = {};
      r & /*variant*/
      4 && (a.variant = /*variant*/
      t[2]), r & /*disabled*/
      2 && (a.disabled = /*disabled*/
      t[1]), r & /*isAbortAction, backgroundColor*/
      24 && (a.style = /*isAbortAction*/
      t[3] ? "background-color: #ff3e00;" : "background-color: " + /*backgroundColor*/
      t[4]), r & /*$$scope*/
      64 && (a.$$scope = { dirty: r, ctx: t }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function ic(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: a = () => {
  } } = e, { disabled: o = !1 } = e, { variant: l = "default" } = e, { isAbortAction: s = !1 } = e, { backgroundColor: u = void 0 } = e;
  return t.$$set = (f) => {
    "callback" in f && n(0, a = f.callback), "disabled" in f && n(1, o = f.disabled), "variant" in f && n(2, l = f.variant), "isAbortAction" in f && n(3, s = f.isAbortAction), "backgroundColor" in f && n(4, u = f.backgroundColor), "$$scope" in f && n(6, r = f.$$scope);
  }, [a, o, l, s, u, i, r];
}
class Nt extends de {
  constructor(e) {
    super(), ce(this, e, ic, nc, ue, {
      callback: 0,
      disabled: 1,
      variant: 2,
      isAbortAction: 3,
      backgroundColor: 4
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
var wn = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, vt = {
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
var rc = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vt;
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
      var n = this.adapter.getAttr(vt.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(vt.DATA_ARIA_LABEL_OFF);
      if (n && i) {
        if (this.adapter.getAttr(vt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(vt.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(wn.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(wn.ICON_BUTTON_ON) : this.adapter.removeClass(wn.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(vt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(vt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(vt.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(vt.ARIA_PRESSED, "" + n);
    }, e;
  }(bt)
);
function or(t) {
  let e;
  return {
    c() {
      e = K("div"), U(e, "class", "mdc-icon-button__touch");
    },
    m(n, i) {
      P(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function ac(t) {
  let e, n, i, r;
  const a = (
    /*#slots*/
    t[33].default
  ), o = ae(
    a,
    t,
    /*$$scope*/
    t[37],
    null
  );
  let l = (
    /*touch*/
    t[8] && or()
  );
  return {
    c() {
      e = K("div"), n = Q(), o && o.c(), l && l.c(), i = Te(), U(e, "class", "mdc-icon-button__ripple");
    },
    m(s, u) {
      P(s, e, u), P(s, n, u), o && o.m(s, u), l && l.m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      o && o.p && (!r || u[1] & /*$$scope*/
      64) && oe(
        o,
        a,
        s,
        /*$$scope*/
        s[37],
        r ? le(
          a,
          /*$$scope*/
          s[37],
          u,
          null
        ) : se(
          /*$$scope*/
          s[37]
        ),
        null
      ), /*touch*/
      s[8] ? l || (l = or(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(s) {
      r || (S(o, s), r = !0);
    },
    o(s) {
      I(o, s), r = !1;
    },
    d(s) {
      s && (B(e), B(n), B(i)), o && o.d(s), l && l.d(s);
    }
  };
}
function lc(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[14]
    ) },
    {
      use: [
        [
          wt,
          {
            ripple: (
              /*ripple*/
              t[4]
            ),
            unbounded: !0,
            color: (
              /*color*/
              t[5]
            ),
            disabled: !!/*$$restProps*/
            t[29].disabled,
            addClass: (
              /*addClass*/
              t[26]
            ),
            removeClass: (
              /*removeClass*/
              t[27]
            ),
            addStyle: (
              /*addStyle*/
              t[28]
            )
          }
        ],
        /*forwardEvents*/
        t[22],
        .../*use*/
        t[1]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-icon-button": !0,
        "mdc-icon-button--on": !/*isUninitializedValue*/
        t[23](
          /*pressed*/
          t[0]
        ) && /*pressed*/
        t[0],
        "mdc-icon-button--touch": (
          /*touch*/
          t[8]
        ),
        "mdc-icon-button--display-flex": (
          /*displayFlex*/
          t[9]
        ),
        "smui-icon-button--size-button": (
          /*size*/
          t[10] === "button"
        ),
        "smui-icon-button--size-mini": (
          /*size*/
          t[10] === "mini"
        ),
        "mdc-icon-button--reduced-size": (
          /*size*/
          t[10] === "mini" || /*size*/
          t[10] === "button"
        ),
        "mdc-card__action": (
          /*context*/
          t[24] === "card:action"
        ),
        "mdc-card__action--icon": (
          /*context*/
          t[24] === "card:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          t[24] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          t[24] === "top-app-bar:action"
        ),
        "mdc-snackbar__dismiss": (
          /*context*/
          t[24] === "snackbar:actions"
        ),
        "mdc-data-table__pagination-button": (
          /*context*/
          t[24] === "data-table:pagination"
        ),
        "mdc-data-table__sort-icon-button": (
          /*context*/
          t[24] === "data-table:sortable-header-cell"
        ),
        "mdc-dialog__close": (
          /*context*/
          (t[24] === "dialog:header" || /*context*/
          t[24] === "dialog:sheet") && /*action*/
          t[12] === "close"
        ),
        .../*internalClasses*/
        t[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[19]
      ).map(ri).concat([
        /*style*/
        t[3]
      ]).join(" ")
    },
    {
      "aria-pressed": /*isUninitializedValue*/ t[23](
        /*pressed*/
        t[0]
      ) ? null : (
        /*pressed*/
        t[0] ? "true" : "false"
      )
    },
    {
      "aria-label": (
        /*pressed*/
        t[0] ? (
          /*ariaLabelOn*/
          t[6]
        ) : (
          /*ariaLabelOff*/
          t[7]
        )
      )
    },
    {
      "data-aria-label-on": (
        /*ariaLabelOn*/
        t[6]
      )
    },
    {
      "data-aria-label-off": (
        /*ariaLabelOff*/
        t[7]
      )
    },
    {
      "aria-describedby": (
        /*ariaDescribedby*/
        t[25]
      )
    },
    { href: (
      /*href*/
      t[11]
    ) },
    /*actionProp*/
    t[21],
    /*internalAttrs*/
    t[20],
    /*$$restProps*/
    t[29]
  ];
  var a = (
    /*component*/
    t[13]
  );
  function o(l, s) {
    let u = {
      $$slots: { default: [ac] },
      $$scope: { ctx: l }
    };
    for (let f = 0; f < r.length; f += 1)
      u = F(u, r[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = F(u, fe(r, [
      s[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        l[14]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            wt,
            {
              ripple: (
                /*ripple*/
                l[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                l[5]
              ),
              disabled: !!/*$$restProps*/
              l[29].disabled,
              addClass: (
                /*addClass*/
                l[26]
              ),
              removeClass: (
                /*removeClass*/
                l[27]
              ),
              addStyle: (
                /*addStyle*/
                l[28]
              )
            }
          ],
          /*forwardEvents*/
          l[22],
          .../*use*/
          l[1]
        ]
      },
      s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: Y({
          [
            /*className*/
            l[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          l[23](
            /*pressed*/
            l[0]
          ) && /*pressed*/
          l[0],
          "mdc-icon-button--touch": (
            /*touch*/
            l[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            l[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            l[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            l[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            l[10] === "mini" || /*size*/
            l[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            l[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            l[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            l[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            l[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            l[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            l[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            l[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (l[24] === "dialog:header" || /*context*/
            l[24] === "dialog:sheet") && /*action*/
            l[12] === "close"
          ),
          .../*internalClasses*/
          l[18]
        })
      },
      s[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          l[19]
        ).map(ri).concat([
          /*style*/
          l[3]
        ]).join(" ")
      },
      s[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ l[23](
          /*pressed*/
          l[0]
        ) ? null : (
          /*pressed*/
          l[0] ? "true" : "false"
        )
      },
      s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          l[0] ? (
            /*ariaLabelOn*/
            l[6]
          ) : (
            /*ariaLabelOff*/
            l[7]
          )
        )
      },
      s[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          l[6]
        )
      },
      s[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          l[7]
        )
      },
      s[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          l[25]
        )
      },
      s[0] & /*href*/
      2048 && { href: (
        /*href*/
        l[11]
      ) },
      s[0] & /*actionProp*/
      2097152 && _e(
        /*actionProp*/
        l[21]
      ),
      s[0] & /*internalAttrs*/
      1048576 && _e(
        /*internalAttrs*/
        l[20]
      ),
      s[0] & /*$$restProps*/
      536870912 && _e(
        /*$$restProps*/
        l[29]
      )
    ]))), { props: u };
  }
  return a && (e = gt(a, o(t)), t[34](e), e.$on(
    "click",
    /*click_handler*/
    t[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    t[36]
  )), {
    c() {
      e && j(e.$$.fragment), n = Te();
    },
    m(l, s) {
      e && N(e, l, s), P(l, n, s), i = !0;
    },
    p(l, s) {
      if (s[0] & /*component*/
      8192 && a !== (a = /*component*/
      l[13])) {
        if (e) {
          ye();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            G(u, 1);
          }), Ae();
        }
        a ? (e = gt(a, o(l, s)), l[34](e), e.$on(
          "click",
          /*click_handler*/
          l[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          l[36]
        ), j(e.$$.fragment), S(e.$$.fragment, 1), N(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? fe(r, [
          s[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            l[14]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                wt,
                {
                  ripple: (
                    /*ripple*/
                    l[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    l[5]
                  ),
                  disabled: !!/*$$restProps*/
                  l[29].disabled,
                  addClass: (
                    /*addClass*/
                    l[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    l[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    l[28]
                  )
                }
              ],
              /*forwardEvents*/
              l[22],
              .../*use*/
              l[1]
            ]
          },
          s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: Y({
              [
                /*className*/
                l[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              l[23](
                /*pressed*/
                l[0]
              ) && /*pressed*/
              l[0],
              "mdc-icon-button--touch": (
                /*touch*/
                l[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                l[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                l[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                l[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                l[10] === "mini" || /*size*/
                l[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                l[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                l[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                l[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                l[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                l[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                l[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                l[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (l[24] === "dialog:header" || /*context*/
                l[24] === "dialog:sheet") && /*action*/
                l[12] === "close"
              ),
              .../*internalClasses*/
              l[18]
            })
          },
          s[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              l[19]
            ).map(ri).concat([
              /*style*/
              l[3]
            ]).join(" ")
          },
          s[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ l[23](
              /*pressed*/
              l[0]
            ) ? null : (
              /*pressed*/
              l[0] ? "true" : "false"
            )
          },
          s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              l[0] ? (
                /*ariaLabelOn*/
                l[6]
              ) : (
                /*ariaLabelOff*/
                l[7]
              )
            )
          },
          s[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              l[6]
            )
          },
          s[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              l[7]
            )
          },
          s[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              l[25]
            )
          },
          s[0] & /*href*/
          2048 && { href: (
            /*href*/
            l[11]
          ) },
          s[0] & /*actionProp*/
          2097152 && _e(
            /*actionProp*/
            l[21]
          ),
          s[0] & /*internalAttrs*/
          1048576 && _e(
            /*internalAttrs*/
            l[20]
          ),
          s[0] & /*$$restProps*/
          536870912 && _e(
            /*$$restProps*/
            l[29]
          )
        ]) : {};
        s[0] & /*touch*/
        256 | s[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: s, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && S(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && I(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[34](null), e && G(e, l);
    }
  };
}
const ri = ([t, e]) => `${t}: ${e};`;
function oc(t, e, n) {
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
  let a = re(e, r), { $$slots: o = {}, $$scope: l } = e;
  const s = Ue(we());
  let u = () => {
  };
  function f(W) {
    return W === u;
  }
  let { use: c = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: p = !0 } = e, { color: b = void 0 } = e, { toggle: m = !1 } = e, { pressed: y = u } = e, { ariaLabelOn: _ = void 0 } = e, { ariaLabelOff: O = void 0 } = e, { touch: A = !1 } = e, { displayFlex: D = !0 } = e, { size: M = "normal" } = e, { href: h = void 0 } = e, { action: R = void 0 } = e, q, C, v = {}, T = {}, H = {}, X = Re("SMUI:icon-button:context"), ie = Re("SMUI:icon-button:aria-describedby"), { component: he = pt } = e, { tag: J = he === pt ? h == null ? "button" : "a" : void 0 } = e, k = a.disabled;
  De("SMUI:icon:context", "icon-button");
  let E = null;
  an(() => {
    C && C.destroy();
  });
  function z(W) {
    return W in v ? v[W] : Fe().classList.contains(W);
  }
  function pe(W) {
    v[W] || n(18, v[W] = !0, v);
  }
  function Ie(W) {
    (!(W in v) || v[W]) && n(18, v[W] = !1, v);
  }
  function Xe(W, ze) {
    T[W] != ze && (ze === "" || ze == null ? (delete T[W], n(19, T)) : n(19, T[W] = ze, T));
  }
  function Ke(W) {
    var ze;
    return W in H ? (ze = H[W]) !== null && ze !== void 0 ? ze : null : Fe().getAttribute(W);
  }
  function Ce(W, ze) {
    H[W] !== ze && n(20, H[W] = ze, H);
  }
  function Ye(W) {
    n(0, y = W.isOn);
  }
  function Fe() {
    return q.getElement();
  }
  function ot(W) {
    ee[W ? "unshift" : "push"](() => {
      q = W, n(16, q);
    });
  }
  const st = () => C && C.handleClick(), It = () => X === "top-app-bar:navigation" && ve(Fe(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (W) => {
    e = F(F({}, e), Me(W)), n(29, a = re(e, r)), "use" in W && n(1, c = W.use), "class" in W && n(2, d = W.class), "style" in W && n(3, g = W.style), "ripple" in W && n(4, p = W.ripple), "color" in W && n(5, b = W.color), "toggle" in W && n(30, m = W.toggle), "pressed" in W && n(0, y = W.pressed), "ariaLabelOn" in W && n(6, _ = W.ariaLabelOn), "ariaLabelOff" in W && n(7, O = W.ariaLabelOff), "touch" in W && n(8, A = W.touch), "displayFlex" in W && n(9, D = W.displayFlex), "size" in W && n(10, M = W.size), "href" in W && n(11, h = W.href), "action" in W && n(12, R = W.action), "component" in W && n(13, he = W.component), "tag" in W && n(14, J = W.tag), "$$scope" in W && n(37, l = W.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*action*/
    4096 && n(21, i = (() => {
      if (X === "data-table:pagination")
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
        return X === "dialog:header" || X === "dialog:sheet" ? { "data-mdc-dialog-action": R } : { action: R };
    })()), k !== a.disabled) {
      if (q) {
        const W = Fe();
        "blur" in W && W.blur();
      }
      n(31, k = a.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && q && Fe() && m !== E && (m && !C ? (n(17, C = new rc({
      addClass: pe,
      hasClass: z,
      notifyChange: (W) => {
        Ye(W), ve(Fe(), "SMUIIconButtonToggle:change", W, void 0, !0);
      },
      removeClass: Ie,
      getAttr: Ke,
      setAttr: Ce
    })), C.init()) : !m && C && (C.destroy(), n(17, C = void 0), n(18, v = {}), n(20, H = {})), n(32, E = m)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && C && !f(y) && C.isOn() !== y && C.toggle(y);
  }, [
    y,
    c,
    d,
    g,
    p,
    b,
    _,
    O,
    A,
    D,
    M,
    h,
    R,
    he,
    J,
    Fe,
    q,
    C,
    v,
    T,
    H,
    i,
    s,
    f,
    X,
    ie,
    pe,
    Ie,
    Xe,
    a,
    m,
    k,
    E,
    o,
    ot,
    st,
    It,
    l
  ];
}
class sc extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      oc,
      lc,
      ue,
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
function uc(t) {
  let e;
  return {
    c() {
      e = Pe(
        /*icon*/
        t[1]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      2 && Ge(
        e,
        /*icon*/
        n[1]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function fc(t) {
  let e, n;
  return e = new Gf({
    props: {
      class: "material-icons",
      $$slots: { default: [uc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r & /*$$scope, icon*/
      10 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function cc(t) {
  let e, n;
  return e = new sc({
    props: {
      disabled: (
        /*disabled*/
        t[2]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [fc] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      t[0]
    ) && t[0].apply(this, arguments);
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const a = {};
      r & /*disabled*/
      4 && (a.disabled = /*disabled*/
      t[2]), r & /*$$scope, icon*/
      10 && (a.$$scope = { dirty: r, ctx: t }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function dc(t, e, n) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { disabled: a = !1 } = e;
  return t.$$set = (o) => {
    "callback" in o && n(0, i = o.callback), "icon" in o && n(1, r = o.icon), "disabled" in o && n(2, a = o.disabled);
  }, [i, r, a];
}
class hc extends de {
  constructor(e) {
    super(), ce(this, e, dc, cc, ue, { callback: 0, icon: 1, disabled: 2 });
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
var mc = {
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
var gc = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mc;
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
    }, e.prototype.shake = function(n) {
      var i = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(n) {
      var i = e.cssClasses, r = i.LABEL_FLOAT_ABOVE, a = i.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(n) {
      var i = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(bt)
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
var Bt = {
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
var pc = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Bt;
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
      this.adapter.removeClass(Bt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Bt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Bt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this.adapter.hasClass(Bt.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && i && (this.adapter.removeClass(Bt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Bt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(bt)
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
var bc = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, sr = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, _c = {
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
var vc = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      return t.call(this, x(x({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return bc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _c;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return sr;
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
    }), e.prototype.notch = function(n) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += sr.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(bt)
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
var ai = {
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
}, yc = {
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
}, ur = {
  LABEL_SCALE: 0.75
}, Ac = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Ec = [
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
var fr = ["mousedown", "touchstart"], cr = ["click", "keydown"], Sc = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = i.helperText, r.characterCounter = i.characterCounter, r.leadingIcon = i.leadingIcon, r.trailingIcon = i.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(a) {
        r.setTransformOrigin(a);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(a) {
        r.handleValidationAttributeChange(a);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ai;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ur;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Ec.indexOf(n) >= 0;
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
      var n, i, r, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Qe(fr), l = o.next(); !l.done; l = o.next()) {
          var s = l.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          l && !l.done && (i = o.return) && i.call(o);
        } finally {
          if (n)
            throw n.error;
        }
      }
      try {
        for (var u = Qe(cr), f = u.next(); !f.done; f = u.next()) {
          var s = f.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          f && !f.done && (a = u.return) && a.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, i, r, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Qe(fr), l = o.next(); !l.done; l = o.next()) {
          var s = l.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          l && !l.done && (i = o.return) && i.call(o);
        } finally {
          if (n)
            throw n.error;
        }
      }
      try {
        for (var u = Qe(cr), f = u.next(); !f.done; f = u.next()) {
          var s = f.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          f && !f.done && (a = u.return) && a.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var i = this;
      n.some(function(r) {
        return Ac.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var i = this.adapter.getLabelWidth() * ur.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = n.touches, r = i ? i[0] : n, a = r.target.getBoundingClientRect(), o = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var i = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, e.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, e.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var i = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(ai.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(ai.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var i = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(n) {
      var i = e.cssClasses, r = i.DISABLED, a = i.INVALID;
      n ? (this.adapter.addClass(r), this.adapter.removeClass(a)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var i = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var n = this.adapter ? this.adapter.getNativeInput() : null;
      return n || {
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
  }(bt)
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
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Cc = {
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
var hr = ["click", "keydown"], Ic = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return dr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Cc;
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
      var n, i;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var r = Qe(hr), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.destroy = function() {
      var n, i;
      try {
        for (var r = Qe(hr), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", dr.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var i = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || i) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(bt)
);
function Lc(t) {
  let e, n, i, r, a, o, l, s;
  const u = (
    /*#slots*/
    t[22].default
  ), f = ae(
    u,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let c = [
    {
      class: n = Y({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          t[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          t[1]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(gr).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    {
      for: r = /*forId*/
      t[5] || /*inputProps*/
      (t[11] ? (
        /*inputProps*/
        t[11].id
      ) : void 0)
    },
    /*$$restProps*/
    t[12]
  ], d = {};
  for (let g = 0; g < c.length; g += 1)
    d = F(d, c[g]);
  return {
    c() {
      e = K("label"), f && f.c(), ne(e, d);
    },
    m(g, p) {
      P(g, e, p), f && f.m(e, null), t[24](e), o = !0, l || (s = [
        te(a = He.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        te(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], l = !0);
    },
    p(g, p) {
      f && f.p && (!o || p & /*$$scope*/
      2097152) && oe(
        f,
        u,
        g,
        /*$$scope*/
        g[21],
        o ? le(
          u,
          /*$$scope*/
          g[21],
          p,
          null
        ) : se(
          /*$$scope*/
          g[21]
        ),
        null
      ), ne(e, d = fe(c, [
        (!o || p & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = Y({
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
        }))) && { class: n },
        (!o || p & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(gr).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: i },
        (!o || p & /*forId*/
        32 && r !== (r = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: r },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), a && me(a.update) && p & /*use*/
      4 && a.update.call(
        null,
        /*use*/
        g[2]
      );
    },
    i(g) {
      o || (S(f, g), o = !0);
    },
    o(g) {
      I(f, g), o = !1;
    },
    d(g) {
      g && B(e), f && f.d(g), t[24](null), l = !1, Ee(s);
    }
  };
}
function Oc(t) {
  let e, n, i, r, a, o, l;
  const s = (
    /*#slots*/
    t[22].default
  ), u = ae(
    s,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let f = [
    {
      class: n = Y({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          t[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          t[1]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(mr).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = F(c, f[d]);
  return {
    c() {
      e = K("span"), u && u.c(), ne(e, c);
    },
    m(d, g) {
      P(d, e, g), u && u.m(e, null), t[23](e), a = !0, o || (l = [
        te(r = He.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        te(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], o = !0);
    },
    p(d, g) {
      u && u.p && (!a || g & /*$$scope*/
      2097152) && oe(
        u,
        s,
        d,
        /*$$scope*/
        d[21],
        a ? le(
          s,
          /*$$scope*/
          d[21],
          g,
          null
        ) : se(
          /*$$scope*/
          d[21]
        ),
        null
      ), ne(e, c = fe(f, [
        (!a || g & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = Y({
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
        }))) && { class: n },
        (!a || g & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(mr).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        g & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), r && me(r.update) && g & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      a || (S(u, d), a = !0);
    },
    o(d) {
      I(u, d), a = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), t[23](null), o = !1, Ee(l);
    }
  };
}
function Tc(t) {
  let e, n, i, r;
  const a = [Oc, Lc], o = [];
  function l(s, u) {
    return (
      /*wrapped*/
      s[6] ? 0 : 1
    );
  }
  return e = l(t), n = o[e] = a[e](t), {
    c() {
      n.c(), i = Te();
    },
    m(s, u) {
      o[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = l(s), e === f ? o[e].p(s, u) : (ye(), I(o[f], 1, 1, () => {
        o[f] = null;
      }), Ae(), n = o[e], n ? n.p(s, u) : (n = o[e] = a[e](s), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (S(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), o[e].d(s);
    }
  };
}
const mr = ([t, e]) => `${t}: ${e};`, gr = ([t, e]) => `${t}: ${e};`;
function wc(t, e, n) {
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
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  var l;
  const s = Ue(we());
  let { use: u = [] } = e, { class: f = "" } = e, { style: c = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: p = !1 } = e, { wrapped: b = !1 } = e, m, y, _ = {}, O = {}, A = (l = Re("SMUI:generic:input:props")) !== null && l !== void 0 ? l : {}, D = g, M = p;
  Je(() => {
    n(18, y = new gc({
      addClass: h,
      removeClass: R,
      getWidth: () => {
        var E, z;
        const pe = ie(), Ie = pe.cloneNode(!0);
        (E = pe.parentNode) === null || E === void 0 || E.appendChild(Ie), Ie.classList.add("smui-floating-label--remove-transition"), Ie.classList.add("smui-floating-label--force-size"), Ie.classList.remove("mdc-floating-label--float-above");
        const Xe = Ie.scrollWidth;
        return (z = pe.parentNode) === null || z === void 0 || z.removeChild(Ie), Xe;
      },
      registerInteractionHandler: (E, z) => ie().addEventListener(E, z),
      deregisterInteractionHandler: (E, z) => ie().removeEventListener(E, z)
    }));
    const k = {
      get element() {
        return ie();
      },
      addStyle: q,
      removeStyle: C
    };
    return ve(m, "SMUIFloatingLabel:mount", k), y.init(), () => {
      ve(m, "SMUIFloatingLabel:unmount", k), y.destroy();
    };
  });
  function h(k) {
    _[k] || n(8, _[k] = !0, _);
  }
  function R(k) {
    (!(k in _) || _[k]) && n(8, _[k] = !1, _);
  }
  function q(k, E) {
    O[k] != E && (E === "" || E == null ? (delete O[k], n(9, O)) : n(9, O[k] = E, O));
  }
  function C(k) {
    k in O && (delete O[k], n(9, O));
  }
  function v(k) {
    y.shake(k);
  }
  function T(k) {
    n(0, g = k);
  }
  function H(k) {
    n(1, p = k);
  }
  function X() {
    return y.getWidth();
  }
  function ie() {
    return m;
  }
  function he(k) {
    ee[k ? "unshift" : "push"](() => {
      m = k, n(7, m);
    });
  }
  function J(k) {
    ee[k ? "unshift" : "push"](() => {
      m = k, n(7, m);
    });
  }
  return t.$$set = (k) => {
    e = F(F({}, e), Me(k)), n(12, r = re(e, i)), "use" in k && n(2, u = k.use), "class" in k && n(3, f = k.class), "style" in k && n(4, c = k.style), "for" in k && n(5, d = k.for), "floatAbove" in k && n(0, g = k.floatAbove), "required" in k && n(1, p = k.required), "wrapped" in k && n(6, b = k.wrapped), "$$scope" in k && n(21, o = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && y && D !== g && (n(19, D = g), y.float(g)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && y && M !== p && (n(20, M = p), y.setRequired(p));
  }, [
    g,
    p,
    u,
    f,
    c,
    d,
    b,
    m,
    _,
    O,
    s,
    A,
    r,
    v,
    T,
    H,
    X,
    ie,
    y,
    D,
    M,
    o,
    a,
    he,
    J
  ];
}
class _l extends de {
  constructor(e) {
    super(), ce(this, e, wc, Tc, ue, {
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
function Rc(t) {
  let e, n, i, r, a, o, l = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-line-ripple": !0,
        "mdc-line-ripple--active": (
          /*active*/
          t[3]
        ),
        .../*internalClasses*/
        t[5]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[6]
      ).map(pr).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*$$restProps*/
    t[8]
  ], s = {};
  for (let u = 0; u < l.length; u += 1)
    s = F(s, l[u]);
  return {
    c() {
      e = K("div"), ne(e, s);
    },
    m(u, f) {
      P(u, e, f), t[13](e), a || (o = [
        te(r = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[7].call(null, e)
        )
      ], a = !0);
    },
    p(u, [f]) {
      ne(e, s = fe(l, [
        f & /*className, active, internalClasses*/
        42 && n !== (n = Y({
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
        })) && { class: n },
        f & /*internalStyles, style*/
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(pr).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        f & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && me(r.update) && f & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Oe,
    o: Oe,
    d(u) {
      u && B(e), t[13](null), a = !1, Ee(o);
    }
  };
}
const pr = ([t, e]) => `${t}: ${e};`;
function Hc(t, e, n) {
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
  let r = re(e, i);
  const a = Ue(we());
  let { use: o = [] } = e, { class: l = "" } = e, { style: s = "" } = e, { active: u = !1 } = e, f, c, d = {}, g = {};
  Je(() => (c = new pc({
    addClass: b,
    removeClass: m,
    hasClass: p,
    setStyle: y,
    registerEventHandler: (h, R) => D().addEventListener(h, R),
    deregisterEventHandler: (h, R) => D().removeEventListener(h, R)
  }), c.init(), () => {
    c.destroy();
  }));
  function p(h) {
    return h in d ? d[h] : D().classList.contains(h);
  }
  function b(h) {
    d[h] || n(5, d[h] = !0, d);
  }
  function m(h) {
    (!(h in d) || d[h]) && n(5, d[h] = !1, d);
  }
  function y(h, R) {
    g[h] != R && (R === "" || R == null ? (delete g[h], n(6, g)) : n(6, g[h] = R, g));
  }
  function _() {
    c.activate();
  }
  function O() {
    c.deactivate();
  }
  function A(h) {
    c.setRippleCenter(h);
  }
  function D() {
    return f;
  }
  function M(h) {
    ee[h ? "unshift" : "push"](() => {
      f = h, n(4, f);
    });
  }
  return t.$$set = (h) => {
    e = F(F({}, e), Me(h)), n(8, r = re(e, i)), "use" in h && n(0, o = h.use), "class" in h && n(1, l = h.class), "style" in h && n(2, s = h.style), "active" in h && n(3, u = h.active);
  }, [
    o,
    l,
    s,
    u,
    f,
    d,
    g,
    a,
    r,
    _,
    O,
    A,
    D,
    M
  ];
}
class kc extends de {
  constructor(e) {
    super(), ce(this, e, Hc, Rc, ue, {
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
function br(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[15].default
  ), a = ae(
    r,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = K("div"), a && a.c(), U(e, "class", "mdc-notched-outline__notch"), U(e, "style", n = Object.entries(
        /*notchStyles*/
        t[7]
      ).map(_r).join(" "));
    },
    m(o, l) {
      P(o, e, l), a && a.m(e, null), i = !0;
    },
    p(o, l) {
      a && a.p && (!i || l & /*$$scope*/
      16384) && oe(
        a,
        r,
        o,
        /*$$scope*/
        o[14],
        i ? le(
          r,
          /*$$scope*/
          o[14],
          l,
          null
        ) : se(
          /*$$scope*/
          o[14]
        ),
        null
      ), (!i || l & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        o[7]
      ).map(_r).join(" "))) && U(e, "style", n);
    },
    i(o) {
      i || (S(a, o), i = !0);
    },
    o(o) {
      I(a, o), i = !1;
    },
    d(o) {
      o && B(e), a && a.d(o);
    }
  };
}
function Dc(t) {
  let e, n, i, r, a, o, l, s, u, f, c = !/*noLabel*/
  t[3] && br(t), d = [
    {
      class: o = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-notched-outline": !0,
        "mdc-notched-outline--notched": (
          /*notched*/
          t[2]
        ),
        "mdc-notched-outline--no-label": (
          /*noLabel*/
          t[3]
        ),
        .../*internalClasses*/
        t[6]
      })
    },
    /*$$restProps*/
    t[10]
  ], g = {};
  for (let p = 0; p < d.length; p += 1)
    g = F(g, d[p]);
  return {
    c() {
      e = K("div"), n = K("div"), i = Q(), c && c.c(), r = Q(), a = K("div"), U(n, "class", "mdc-notched-outline__leading"), U(a, "class", "mdc-notched-outline__trailing"), ne(e, g);
    },
    m(p, b) {
      P(p, e, b), Z(e, n), Z(e, i), c && c.m(e, null), Z(e, r), Z(e, a), t[16](e), s = !0, u || (f = [
        te(l = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[8].call(null, e)
        ),
        $(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          t[9]
        ),
        $(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          t[17]
        )
      ], u = !0);
    },
    p(p, [b]) {
      /*noLabel*/
      p[3] ? c && (ye(), I(c, 1, 1, () => {
        c = null;
      }), Ae()) : c ? (c.p(p, b), b & /*noLabel*/
      8 && S(c, 1)) : (c = br(p), c.c(), S(c, 1), c.m(e, r)), ne(e, g = fe(d, [
        (!s || b & /*className, notched, noLabel, internalClasses*/
        78 && o !== (o = Y({
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
        }))) && { class: o },
        b & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), l && me(l.update) && b & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      s || (S(c), s = !0);
    },
    o(p) {
      I(c), s = !1;
    },
    d(p) {
      p && B(e), c && c.d(), t[16](null), u = !1, Ee(f);
    }
  };
}
const _r = ([t, e]) => `${t}: ${e};`;
function Mc(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, { class: u = "" } = e, { notched: f = !1 } = e, { noLabel: c = !1 } = e, d, g, p, b = {}, m = {};
  Je(() => (g = new vc({
    addClass: _,
    removeClass: O,
    setNotchWidthProperty: (v) => A("width", v + "px"),
    removeNotchWidthProperty: () => D("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function y(v) {
    n(4, p = v.detail);
  }
  function _(v) {
    b[v] || n(6, b[v] = !0, b);
  }
  function O(v) {
    (!(v in b) || b[v]) && n(6, b[v] = !1, b);
  }
  function A(v, T) {
    m[v] != T && (T === "" || T == null ? (delete m[v], n(7, m)) : n(7, m[v] = T, m));
  }
  function D(v) {
    v in m && (delete m[v], n(7, m));
  }
  function M(v) {
    g.notch(v);
  }
  function h() {
    g.closeNotch();
  }
  function R() {
    return d;
  }
  function q(v) {
    ee[v ? "unshift" : "push"](() => {
      d = v, n(5, d);
    });
  }
  const C = () => n(4, p = void 0);
  return t.$$set = (v) => {
    e = F(F({}, e), Me(v)), n(10, r = re(e, i)), "use" in v && n(0, s = v.use), "class" in v && n(1, u = v.class), "notched" in v && n(2, f = v.notched), "noLabel" in v && n(3, c = v.noLabel), "$$scope" in v && n(14, o = v.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (p ? (p.addStyle("transition-duration", "0s"), _("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      p && p.removeStyle("transition-duration");
    })) : O("mdc-notched-outline--upgraded"));
  }, [
    s,
    u,
    f,
    c,
    p,
    d,
    b,
    m,
    l,
    y,
    r,
    M,
    h,
    R,
    o,
    a,
    q,
    C
  ];
}
class Bc extends de {
  constructor(e) {
    super(), ce(this, e, Mc, Dc, ue, {
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
function Pc(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      8192) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? le(
          n,
          /*$$scope*/
          r[13],
          a,
          null
        ) : se(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Uc(t) {
  let e, n, i;
  const r = [
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
      class: Y({
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
  var a = (
    /*component*/
    t[2]
  );
  function o(l, s) {
    let u = {
      $$slots: { default: [Pc] },
      $$scope: { ctx: l }
    };
    for (let f = 0; f < r.length; f += 1)
      u = F(u, r[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = F(u, fe(r, [
      s & /*tag*/
      8 && { tag: (
        /*tag*/
        l[3]
      ) },
      s & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          l[8],
          .../*use*/
          l[0]
        ]
      },
      s & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Y({
          [
            /*className*/
            l[1]
          ]: !0,
          [
            /*smuiClass*/
            l[6]
          ]: !0,
          .../*smuiClassMap*/
          l[5]
        })
      },
      s & /*props*/
      128 && _e(
        /*props*/
        l[7]
      ),
      s & /*$$restProps*/
      512 && _e(
        /*$$restProps*/
        l[9]
      )
    ]))), { props: u };
  }
  return a && (e = gt(a, o(t)), t[12](e)), {
    c() {
      e && j(e.$$.fragment), n = Te();
    },
    m(l, s) {
      e && N(e, l, s), P(l, n, s), i = !0;
    },
    p(l, [s]) {
      if (s & /*component*/
      4 && a !== (a = /*component*/
      l[2])) {
        if (e) {
          ye();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            G(u, 1);
          }), Ae();
        }
        a ? (e = gt(a, o(l, s)), l[12](e), j(e.$$.fragment), S(e.$$.fragment, 1), N(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? fe(r, [
          s & /*tag*/
          8 && { tag: (
            /*tag*/
            l[3]
          ) },
          s & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              l[8],
              .../*use*/
              l[0]
            ]
          },
          s & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Y({
              [
                /*className*/
                l[1]
              ]: !0,
              [
                /*smuiClass*/
                l[6]
              ]: !0,
              .../*smuiClassMap*/
              l[5]
            })
          },
          s & /*props*/
          128 && _e(
            /*props*/
            l[7]
          ),
          s & /*$$restProps*/
          512 && _e(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        s & /*$$scope*/
        8192 && (u.$$scope = { dirty: s, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && S(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && I(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[12](null), e && G(e, l);
    }
  };
}
const Et = {
  component: pt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Fc(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e, { use: l = [] } = e, { class: s = "" } = e, u;
  const f = Et.class, c = {}, d = [], g = Et.contexts, p = Et.props;
  let { component: b = Et.component } = e, { tag: m = b === pt ? Et.tag : void 0 } = e;
  Object.entries(Et.classMap).forEach(([A, D]) => {
    const M = Re(D);
    M && "subscribe" in M && d.push(M.subscribe((h) => {
      n(5, c[A] = h, c);
    }));
  });
  const y = Ue(we());
  for (let A in g)
    g.hasOwnProperty(A) && De(A, g[A]);
  an(() => {
    for (const A of d)
      A();
  });
  function _() {
    return u.getElement();
  }
  function O(A) {
    ee[A ? "unshift" : "push"](() => {
      u = A, n(4, u);
    });
  }
  return t.$$set = (A) => {
    e = F(F({}, e), Me(A)), n(9, r = re(e, i)), "use" in A && n(0, l = A.use), "class" in A && n(1, s = A.class), "component" in A && n(2, b = A.component), "tag" in A && n(3, m = A.tag), "$$scope" in A && n(13, o = A.$$scope);
  }, [
    l,
    s,
    b,
    m,
    u,
    c,
    f,
    p,
    y,
    r,
    _,
    a,
    O,
    o
  ];
}
class Nc extends de {
  constructor(e) {
    super(), ce(this, e, Fc, Uc, ue, {
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
const vr = Object.assign({}, Et);
function Ve(t) {
  return new Proxy(Nc, {
    construct: function(e, n) {
      return Object.assign(Et, vr, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(Et, vr, t), e[n];
    }
  });
}
const Gc = Ve({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), jc = Ve({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Vc = Ve({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function qc(t) {
  let e, n, i, r, a, o = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    { type: (
      /*type*/
      t[2]
    ) },
    { placeholder: (
      /*placeholder*/
      t[3]
    ) },
    /*valueProp*/
    t[4],
    /*internalAttrs*/
    t[6],
    /*$$restProps*/
    t[10]
  ], l = {};
  for (let s = 0; s < o.length; s += 1)
    l = F(l, o[s]);
  return {
    c() {
      e = K("input"), ne(e, l);
    },
    m(s, u) {
      P(s, e, u), e.autofocus && e.focus(), t[26](e), r || (a = [
        te(i = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        $(
          e,
          "input",
          /*input_handler*/
          t[27]
        ),
        $(
          e,
          "change",
          /*changeHandler*/
          t[9]
        ),
        $(
          e,
          "blur",
          /*blur_handler*/
          t[24]
        ),
        $(
          e,
          "focus",
          /*focus_handler*/
          t[25]
        )
      ], r = !0);
    },
    p(s, [u]) {
      ne(e, l = fe(o, [
        u & /*className*/
        2 && n !== (n = Y({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
        u & /*type*/
        4 && { type: (
          /*type*/
          s[2]
        ) },
        u & /*placeholder*/
        8 && { placeholder: (
          /*placeholder*/
          s[3]
        ) },
        u & /*valueProp*/
        16 && /*valueProp*/
        s[4],
        u & /*internalAttrs*/
        64 && /*internalAttrs*/
        s[6],
        u & /*$$restProps*/
        1024 && /*$$restProps*/
        s[10]
      ])), i && me(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    i: Oe,
    o: Oe,
    d(s) {
      s && B(e), t[26](null), r = !1, Ee(a);
    }
  };
}
function zc(t) {
  return t === "" ? Number.NaN : +t;
}
function Xc(t, e, n) {
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
  let r = re(e, i);
  const a = Ue(we());
  let o = () => {
  };
  function l(E) {
    return E === o;
  }
  let { use: s = [] } = e, { class: u = "" } = e, { type: f = "text" } = e, { placeholder: c = " " } = e, { value: d = o } = e;
  const g = l(d);
  g && (d = "");
  let { files: p = null } = e, { dirty: b = !1 } = e, { invalid: m = !1 } = e, { updateInvalid: y = !0 } = e, { emptyValueNull: _ = d === null } = e;
  g && _ && (d = null);
  let { emptyValueUndefined: O = d === void 0 } = e;
  g && O && (d = void 0);
  let A, D = {}, M = {};
  Je(() => {
    y && n(14, m = A.matches(":invalid"));
  });
  function h(E) {
    if (f === "file") {
      n(12, p = E.currentTarget.files);
      return;
    }
    if (E.currentTarget.value === "" && _) {
      n(11, d = null);
      return;
    }
    if (E.currentTarget.value === "" && O) {
      n(11, d = void 0);
      return;
    }
    switch (f) {
      case "number":
      case "range":
        n(11, d = zc(E.currentTarget.value));
        break;
      default:
        n(11, d = E.currentTarget.value);
        break;
    }
  }
  function R(E) {
    (f === "file" || f === "range") && h(E), n(13, b = !0), y && n(14, m = A.matches(":invalid"));
  }
  function q(E) {
    var z;
    return E in D ? (z = D[E]) !== null && z !== void 0 ? z : null : X().getAttribute(E);
  }
  function C(E, z) {
    D[E] !== z && n(6, D[E] = z, D);
  }
  function v(E) {
    (!(E in D) || D[E] != null) && n(6, D[E] = void 0, D);
  }
  function T() {
    X().focus();
  }
  function H() {
    X().blur();
  }
  function X() {
    return A;
  }
  function ie(E) {
    Pn.call(this, t, E);
  }
  function he(E) {
    Pn.call(this, t, E);
  }
  function J(E) {
    ee[E ? "unshift" : "push"](() => {
      A = E, n(5, A);
    });
  }
  const k = (E) => f !== "file" && h(E);
  return t.$$set = (E) => {
    e = F(F({}, e), Me(E)), n(10, r = re(e, i)), "use" in E && n(0, s = E.use), "class" in E && n(1, u = E.class), "type" in E && n(2, f = E.type), "placeholder" in E && n(3, c = E.placeholder), "value" in E && n(11, d = E.value), "files" in E && n(12, p = E.files), "dirty" in E && n(13, b = E.dirty), "invalid" in E && n(14, m = E.invalid), "updateInvalid" in E && n(15, y = E.updateInvalid), "emptyValueNull" in E && n(16, _ = E.emptyValueNull), "emptyValueUndefined" in E && n(17, O = E.emptyValueUndefined);
  }, t.$$.update = () => {
    t.$$.dirty & /*type, valueProp, value*/
    2068 && (f === "file" ? (delete M.value, n(4, M), n(2, f), n(11, d)) : n(4, M.value = d ?? "", M));
  }, [
    s,
    u,
    f,
    c,
    M,
    A,
    D,
    a,
    h,
    R,
    r,
    d,
    p,
    b,
    m,
    y,
    _,
    O,
    q,
    C,
    v,
    T,
    H,
    X,
    ie,
    he,
    J,
    k
  ];
}
class Wc extends de {
  constructor(e) {
    super(), ce(this, e, Xc, qc, ue, {
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
function Zc(t) {
  let e, n, i, r, a, o, l = [
    {
      class: n = Y({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    {
      style: i = `${/*resizable*/
      t[4] ? "" : "resize: none; "}${/*style*/
      t[3]}`
    },
    /*internalAttrs*/
    t[6],
    /*$$restProps*/
    t[9]
  ], s = {};
  for (let u = 0; u < l.length; u += 1)
    s = F(s, l[u]);
  return {
    c() {
      e = K("textarea"), ne(e, s);
    },
    m(u, f) {
      P(u, e, f), e.autofocus && e.focus(), t[21](e), xt(
        e,
        /*value*/
        t[0]
      ), a || (o = [
        te(r = He.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        te(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        $(
          e,
          "change",
          /*changeHandler*/
          t[8]
        ),
        $(
          e,
          "blur",
          /*blur_handler*/
          t[19]
        ),
        $(
          e,
          "focus",
          /*focus_handler*/
          t[20]
        ),
        $(
          e,
          "input",
          /*textarea_input_handler*/
          t[22]
        )
      ], a = !0);
    },
    p(u, [f]) {
      ne(e, s = fe(l, [
        f & /*className*/
        4 && n !== (n = Y({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
        f & /*resizable, style*/
        24 && i !== (i = `${/*resizable*/
        u[4] ? "" : "resize: none; "}${/*style*/
        u[3]}`) && { style: i },
        f & /*internalAttrs*/
        64 && /*internalAttrs*/
        u[6],
        f & /*$$restProps*/
        512 && /*$$restProps*/
        u[9]
      ])), r && me(r.update) && f & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        u[1]
      ), f & /*value*/
      1 && xt(
        e,
        /*value*/
        u[0]
      );
    },
    i: Oe,
    o: Oe,
    d(u) {
      u && B(e), t[21](null), a = !1, Ee(o);
    }
  };
}
function Kc(t, e, n) {
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
  let r = re(e, i);
  const a = Ue(we());
  let { use: o = [] } = e, { class: l = "" } = e, { style: s = "" } = e, { value: u = "" } = e, { dirty: f = !1 } = e, { invalid: c = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, p, b = {};
  Je(() => {
    d && n(11, c = p.matches(":invalid"));
  });
  function m() {
    n(10, f = !0), d && n(11, c = p.matches(":invalid"));
  }
  function y(v) {
    var T;
    return v in b ? (T = b[v]) !== null && T !== void 0 ? T : null : M().getAttribute(v);
  }
  function _(v, T) {
    b[v] !== T && n(6, b[v] = T, b);
  }
  function O(v) {
    (!(v in b) || b[v] != null) && n(6, b[v] = void 0, b);
  }
  function A() {
    M().focus();
  }
  function D() {
    M().blur();
  }
  function M() {
    return p;
  }
  function h(v) {
    Pn.call(this, t, v);
  }
  function R(v) {
    Pn.call(this, t, v);
  }
  function q(v) {
    ee[v ? "unshift" : "push"](() => {
      p = v, n(5, p);
    });
  }
  function C() {
    u = this.value, n(0, u);
  }
  return t.$$set = (v) => {
    e = F(F({}, e), Me(v)), n(9, r = re(e, i)), "use" in v && n(1, o = v.use), "class" in v && n(2, l = v.class), "style" in v && n(3, s = v.style), "value" in v && n(0, u = v.value), "dirty" in v && n(10, f = v.dirty), "invalid" in v && n(11, c = v.invalid), "updateInvalid" in v && n(12, d = v.updateInvalid), "resizable" in v && n(4, g = v.resizable);
  }, [
    u,
    o,
    l,
    s,
    g,
    p,
    b,
    a,
    m,
    r,
    f,
    c,
    d,
    y,
    _,
    O,
    A,
    D,
    M,
    h,
    R,
    q,
    C
  ];
}
class Yc extends de {
  constructor(e) {
    super(), ce(this, e, Kc, Zc, ue, {
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
const Qc = (t) => ({}), yr = (t) => ({}), Jc = (t) => ({}), Ar = (t) => ({}), xc = (t) => ({}), Er = (t) => ({}), $c = (t) => ({}), Sr = (t) => ({}), ed = (t) => ({}), Cr = (t) => ({}), td = (t) => ({}), Ir = (t) => ({}), nd = (t) => ({}), Lr = (t) => ({}), id = (t) => ({}), Or = (t) => ({}), rd = (t) => ({}), Tr = (t) => ({}), ad = (t) => ({}), wr = (t) => ({}), ld = (t) => ({}), Rr = (t) => ({}), od = (t) => ({}), Hr = (t) => ({});
function sd(t) {
  let e, n, i, r, a, o, l, s, u, f, c, d, g, p;
  const b = (
    /*#slots*/
    t[56].label
  ), m = ae(
    b,
    t,
    /*$$scope*/
    t[87],
    Cr
  );
  i = new Gn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [fd] },
      $$scope: { ctx: t }
    }
  });
  const y = (
    /*#slots*/
    t[56].default
  ), _ = ae(
    y,
    t,
    /*$$scope*/
    t[87],
    null
  );
  o = new Gn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [cd] },
      $$scope: { ctx: t }
    }
  });
  const O = (
    /*#slots*/
    t[56].ripple
  ), A = ae(
    O,
    t,
    /*$$scope*/
    t[87],
    Ar
  );
  let D = [
    {
      class: s = Y({
        [
          /*className*/
          t[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          t[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          t[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          t[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          t[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          t[15] === "standard" && !/*textarea*/
          t[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          t[16] || !/*$$slots*/
          t[47].label
        ),
        "mdc-text-field--with-leading-icon": (
          /*$$slots*/
          t[47].leadingIcon
        ),
        "mdc-text-field--with-trailing-icon": (
          /*$$slots*/
          t[47].trailingIcon
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          t[1]
        ),
        .../*internalClasses*/
        t[25]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(Vr).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    Ht(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], M = {};
  for (let h = 0; h < D.length; h += 1)
    M = F(M, D[h]);
  return {
    c() {
      e = K("div"), m && m.c(), n = Q(), j(i.$$.fragment), r = Q(), _ && _.c(), a = Q(), j(o.$$.fragment), l = Q(), A && A.c(), ne(e, M);
    },
    m(h, R) {
      P(h, e, R), m && m.m(e, null), Z(e, n), N(i, e, null), Z(e, r), _ && _.m(e, null), Z(e, a), N(o, e, null), Z(e, l), A && A.m(e, null), t[82](e), d = !0, g || (p = [
        te(f = wt.call(null, e, {
          ripple: (
            /*ripple*/
            t[11]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[43]
          ),
          removeClass: (
            /*removeClass*/
            t[44]
          ),
          addStyle: (
            /*addStyle*/
            t[45]
          )
        })),
        te(c = He.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        te(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          t[83]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          t[84]
        )
      ], g = !0);
    },
    p(h, R) {
      m && m.p && (!d || R[2] & /*$$scope*/
      33554432) && oe(
        m,
        b,
        h,
        /*$$scope*/
        h[87],
        d ? le(
          b,
          /*$$scope*/
          h[87],
          R,
          ed
        ) : se(
          /*$$scope*/
          h[87]
        ),
        Cr
      );
      const q = {};
      R[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: R, ctx: h }), i.$set(q), _ && _.p && (!d || R[2] & /*$$scope*/
      33554432) && oe(
        _,
        y,
        h,
        /*$$scope*/
        h[87],
        d ? le(
          y,
          /*$$scope*/
          h[87],
          R,
          null
        ) : se(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const C = {};
      R[2] & /*$$scope*/
      33554432 && (C.$$scope = { dirty: R, ctx: h }), o.$set(C), A && A.p && (!d || R[2] & /*$$scope*/
      33554432) && oe(
        A,
        O,
        h,
        /*$$scope*/
        h[87],
        d ? le(
          O,
          /*$$scope*/
          h[87],
          R,
          Jc
        ) : se(
          /*$$scope*/
          h[87]
        ),
        Ar
      ), ne(e, M = fe(D, [
        (!d || R[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | R[1] & /*$$slots*/
        65536 && s !== (s = Y({
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
        }))) && { class: s },
        (!d || R[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(Vr).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        R[1] & /*$$restProps*/
        32768 && Ht(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), f && me(f.update) && R[0] & /*ripple*/
      2048 && f.update.call(null, {
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
      }), c && me(c.update) && R[0] & /*use*/
      256 && c.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (S(m, h), S(i.$$.fragment, h), S(_, h), S(o.$$.fragment, h), S(A, h), d = !0);
    },
    o(h) {
      I(m, h), I(i.$$.fragment, h), I(_, h), I(o.$$.fragment, h), I(A, h), d = !1;
    },
    d(h) {
      h && B(e), m && m.d(h), G(i), _ && _.d(h), G(o), A && A.d(h), t[82](null), g = !1, Ee(p);
    }
  };
}
function ud(t) {
  let e, n, i, r, a, o, l, s, u, f, c, d, g, p, b, m, y, _, O = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && kr(t), A = (
    /*textarea*/
    (t[14] || /*variant*/
    t[15] === "outlined") && Br(t)
  );
  r = new Gn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [gd] },
      $$scope: { ctx: t }
    }
  });
  const D = (
    /*#slots*/
    t[56].default
  ), M = ae(
    D,
    t,
    /*$$scope*/
    t[87],
    null
  ), h = [bd, pd], R = [];
  function q(H, X) {
    return (
      /*textarea*/
      H[14] && typeof /*value*/
      H[0] == "string" ? 0 : 1
    );
  }
  l = q(t), s = R[l] = h[l](t), f = new Gn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [yd] },
      $$scope: { ctx: t }
    }
  });
  let C = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && /*ripple*/
  t[11] && Nr(t), v = [
    {
      class: d = Y({
        [
          /*className*/
          t[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          t[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          t[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          t[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          t[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          t[15] === "standard" && !/*textarea*/
          t[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          t[16] || /*label*/
          t[17] == null && !/*$$slots*/
          t[47].label
        ),
        "mdc-text-field--label-floating": (
          /*focused*/
          t[28] || /*value*/
          t[0] != null && /*value*/
          t[0] !== ""
        ),
        "mdc-text-field--with-leading-icon": (
          /*isUninitializedValue*/
          t[35](
            /*withLeadingIcon*/
            t[22]
          ) ? (
            /*$$slots*/
            t[47].leadingIcon
          ) : (
            /*withLeadingIcon*/
            t[22]
          )
        ),
        "mdc-text-field--with-trailing-icon": (
          /*isUninitializedValue*/
          t[35](
            /*withTrailingIcon*/
            t[23]
          ) ? (
            /*$$slots*/
            t[47].trailingIcon
          ) : (
            /*withTrailingIcon*/
            t[23]
          )
        ),
        "mdc-text-field--with-internal-counter": (
          /*textarea*/
          t[14] && /*$$slots*/
          t[47].internalCounter
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          t[1]
        ),
        .../*internalClasses*/
        t[25]
      })
    },
    {
      style: g = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(jr).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    {
      for: (
        /* suppress a11y warning, since this is wrapped */
        void 0
      )
    },
    Ht(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], T = {};
  for (let H = 0; H < v.length; H += 1)
    T = F(T, v[H]);
  return {
    c() {
      e = K("label"), O && O.c(), n = Q(), A && A.c(), i = Q(), j(r.$$.fragment), a = Q(), M && M.c(), o = Q(), s.c(), u = Q(), j(f.$$.fragment), c = Q(), C && C.c(), ne(e, T);
    },
    m(H, X) {
      P(H, e, X), O && O.m(e, null), Z(e, n), A && A.m(e, null), Z(e, i), N(r, e, null), Z(e, a), M && M.m(e, null), Z(e, o), R[l].m(e, null), Z(e, u), N(f, e, null), Z(e, c), C && C.m(e, null), t[78](e), m = !0, y || (_ = [
        te(p = wt.call(null, e, {
          ripple: !/*textarea*/
          t[14] && /*variant*/
          t[15] === "filled",
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[43]
          ),
          removeClass: (
            /*removeClass*/
            t[44]
          ),
          addStyle: (
            /*addStyle*/
            t[45]
          ),
          eventTarget: (
            /*inputElement*/
            t[33]
          ),
          activeTarget: (
            /*inputElement*/
            t[33]
          ),
          initPromise: (
            /*initPromise*/
            t[37]
          )
        })),
        te(b = He.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        te(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          t[79]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          t[80]
        ),
        $(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          t[40]
        ),
        $(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          t[81]
        )
      ], y = !0);
    },
    p(H, X) {
      !/*textarea*/
      H[14] && /*variant*/
      H[15] !== "outlined" ? O ? (O.p(H, X), X[0] & /*textarea, variant*/
      49152 && S(O, 1)) : (O = kr(H), O.c(), S(O, 1), O.m(e, n)) : O && (ye(), I(O, 1, 1, () => {
        O = null;
      }), Ae()), /*textarea*/
      H[14] || /*variant*/
      H[15] === "outlined" ? A ? (A.p(H, X), X[0] & /*textarea, variant*/
      49152 && S(A, 1)) : (A = Br(H), A.c(), S(A, 1), A.m(e, i)) : A && (ye(), I(A, 1, 1, () => {
        A = null;
      }), Ae());
      const ie = {};
      X[2] & /*$$scope*/
      33554432 && (ie.$$scope = { dirty: X, ctx: H }), r.$set(ie), M && M.p && (!m || X[2] & /*$$scope*/
      33554432) && oe(
        M,
        D,
        H,
        /*$$scope*/
        H[87],
        m ? le(
          D,
          /*$$scope*/
          H[87],
          X,
          null
        ) : se(
          /*$$scope*/
          H[87]
        ),
        null
      );
      let he = l;
      l = q(H), l === he ? R[l].p(H, X) : (ye(), I(R[he], 1, 1, () => {
        R[he] = null;
      }), Ae(), s = R[l], s ? s.p(H, X) : (s = R[l] = h[l](H), s.c()), S(s, 1), s.m(e, u));
      const J = {};
      X[2] & /*$$scope*/
      33554432 && (J.$$scope = { dirty: X, ctx: H }), f.$set(J), !/*textarea*/
      H[14] && /*variant*/
      H[15] !== "outlined" && /*ripple*/
      H[11] ? C ? (C.p(H, X), X[0] & /*textarea, variant, ripple*/
      51200 && S(C, 1)) : (C = Nr(H), C.c(), S(C, 1), C.m(e, null)) : C && (ye(), I(C, 1, 1, () => {
        C = null;
      }), Ae()), ne(e, T = fe(v, [
        (!m || X[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | X[1] & /*$$slots*/
        65536 && d !== (d = Y({
          [
            /*className*/
            H[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            H[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            H[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            H[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            H[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            H[15] === "standard" && !/*textarea*/
            H[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            H[16] || /*label*/
            H[17] == null && !/*$$slots*/
            H[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            H[28] || /*value*/
            H[0] != null && /*value*/
            H[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            H[35](
              /*withLeadingIcon*/
              H[22]
            ) ? (
              /*$$slots*/
              H[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              H[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            H[35](
              /*withTrailingIcon*/
              H[23]
            ) ? (
              /*$$slots*/
              H[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              H[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            H[14] && /*$$slots*/
            H[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            H[1]
          ),
          .../*internalClasses*/
          H[25]
        }))) && { class: d },
        (!m || X[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          H[26]
        ).map(jr).concat([
          /*style*/
          H[10]
        ]).join(" "))) && { style: g },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        X[1] & /*$$restProps*/
        32768 && Ht(
          /*$$restProps*/
          H[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), p && me(p.update) && X[0] & /*textarea, variant*/
      49152 | X[1] & /*inputElement*/
      4 && p.update.call(null, {
        ripple: !/*textarea*/
        H[14] && /*variant*/
        H[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          H[43]
        ),
        removeClass: (
          /*removeClass*/
          H[44]
        ),
        addStyle: (
          /*addStyle*/
          H[45]
        ),
        eventTarget: (
          /*inputElement*/
          H[33]
        ),
        activeTarget: (
          /*inputElement*/
          H[33]
        ),
        initPromise: (
          /*initPromise*/
          H[37]
        )
      }), b && me(b.update) && X[0] & /*use*/
      256 && b.update.call(
        null,
        /*use*/
        H[8]
      );
    },
    i(H) {
      m || (S(O), S(A), S(r.$$.fragment, H), S(M, H), S(s), S(f.$$.fragment, H), S(C), m = !0);
    },
    o(H) {
      I(O), I(A), I(r.$$.fragment, H), I(M, H), I(s), I(f.$$.fragment, H), I(C), m = !1;
    },
    d(H) {
      H && B(e), O && O.d(), A && A.d(), G(r), M && M.d(H), R[l].d(), G(f), C && C.d(), t[78](null), y = !1, Ee(_);
    }
  };
}
function fd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[87],
    Sr
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a[2] & /*$$scope*/
      33554432) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? le(
          n,
          /*$$scope*/
          r[87],
          a,
          $c
        ) : se(
          /*$$scope*/
          r[87]
        ),
        Sr
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function cd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[87],
    Er
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a[2] & /*$$scope*/
      33554432) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? le(
          n,
          /*$$scope*/
          r[87],
          a,
          xc
        ) : se(
          /*$$scope*/
          r[87]
        ),
        Er
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function kr(t) {
  let e, n, i, r = (
    /*variant*/
    t[15] === "filled" && Dr()
  ), a = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && Mr(t);
  return {
    c() {
      r && r.c(), e = Q(), a && a.c(), n = Te();
    },
    m(o, l) {
      r && r.m(o, l), P(o, e, l), a && a.m(o, l), P(o, n, l), i = !0;
    },
    p(o, l) {
      /*variant*/
      o[15] === "filled" ? r || (r = Dr(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      o[16] && /*label*/
      (o[17] != null || /*$$slots*/
      o[47].label) ? a ? (a.p(o, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && S(a, 1)) : (a = Mr(o), a.c(), S(a, 1), a.m(n.parentNode, n)) : a && (ye(), I(a, 1, 1, () => {
        a = null;
      }), Ae());
    },
    i(o) {
      i || (S(a), i = !0);
    },
    o(o) {
      I(a), i = !1;
    },
    d(o) {
      o && (B(e), B(n)), r && r.d(o), a && a.d(o);
    }
  };
}
function Dr(t) {
  let e;
  return {
    c() {
      e = K("span"), U(e, "class", "mdc-text-field__ripple");
    },
    m(n, i) {
      P(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function Mr(t) {
  let e, n;
  const i = [
    {
      floatAbove: (
        /*focused*/
        t[28] || /*value*/
        t[0] != null && /*value*/
        t[0] !== "" && (typeof /*value*/
        t[0] != "number" || !isNaN(
          /*value*/
          t[0]
        ))
      )
    },
    { required: (
      /*required*/
      t[13]
    ) },
    { wrapped: !0 },
    Ne(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [dd] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = F(r, i[a]);
  return e = new _l({ props: r }), t[57](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), n = !0;
    },
    p(a, o) {
      const l = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? fe(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            a[28] || /*value*/
            a[0] != null && /*value*/
            a[0] !== "" && (typeof /*value*/
            a[0] != "number" || !isNaN(
              /*value*/
              a[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          a[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && _e(Ne(
          /*$$restProps*/
          a[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: o, ctx: a }), e.$set(l);
    },
    i(a) {
      n || (S(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[57](null), G(e, a);
    }
  };
}
function dd(t) {
  let e = (
    /*label*/
    (t[17] == null ? "" : (
      /*label*/
      t[17]
    )) + ""
  ), n, i;
  const r = (
    /*#slots*/
    t[56].label
  ), a = ae(
    r,
    t,
    /*$$scope*/
    t[87],
    Hr
  );
  return {
    c() {
      n = Pe(e), a && a.c();
    },
    m(o, l) {
      P(o, n, l), a && a.m(o, l), i = !0;
    },
    p(o, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && Ge(n, e), a && a.p && (!i || l[2] & /*$$scope*/
      33554432) && oe(
        a,
        r,
        o,
        /*$$scope*/
        o[87],
        i ? le(
          r,
          /*$$scope*/
          o[87],
          l,
          od
        ) : se(
          /*$$scope*/
          o[87]
        ),
        Hr
      );
    },
    i(o) {
      i || (S(a, o), i = !0);
    },
    o(o) {
      I(a, o), i = !1;
    },
    d(o) {
      o && B(n), a && a.d(o);
    }
  };
}
function Br(t) {
  let e, n;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        t[16] || /*label*/
        t[17] == null && !/*$$slots*/
        t[47].label
      )
    },
    Ne(
      /*$$restProps*/
      t[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [md] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = F(r, i[a]);
  return e = new Bc({ props: r }), t[59](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), n = !0;
    },
    p(a, o) {
      const l = o[0] & /*noLabel, label*/
      196608 | o[1] & /*$$slots, $$restProps*/
      98304 ? fe(i, [
        o[0] & /*noLabel, label*/
        196608 | o[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            a[16] || /*label*/
            a[17] == null && !/*$$slots*/
            a[47].label
          )
        },
        o[1] & /*$$restProps*/
        32768 && _e(Ne(
          /*$$restProps*/
          a[46],
          "outline$"
        ))
      ]) : {};
      o[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | o[1] & /*$$restProps, $$slots*/
      98304 | o[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: o, ctx: a }), e.$set(l);
    },
    i(a) {
      n || (S(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[59](null), G(e, a);
    }
  };
}
function Pr(t) {
  let e, n;
  const i = [
    {
      floatAbove: (
        /*focused*/
        t[28] || /*value*/
        t[0] != null && /*value*/
        t[0] !== "" && (typeof /*value*/
        t[0] != "number" || !isNaN(
          /*value*/
          t[0]
        ))
      )
    },
    { required: (
      /*required*/
      t[13]
    ) },
    { wrapped: !0 },
    Ne(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [hd] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = F(r, i[a]);
  return e = new _l({ props: r }), t[58](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), n = !0;
    },
    p(a, o) {
      const l = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? fe(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            a[28] || /*value*/
            a[0] != null && /*value*/
            a[0] !== "" && (typeof /*value*/
            a[0] != "number" || !isNaN(
              /*value*/
              a[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          a[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && _e(Ne(
          /*$$restProps*/
          a[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: o, ctx: a }), e.$set(l);
    },
    i(a) {
      n || (S(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[58](null), G(e, a);
    }
  };
}
function hd(t) {
  let e = (
    /*label*/
    (t[17] == null ? "" : (
      /*label*/
      t[17]
    )) + ""
  ), n, i;
  const r = (
    /*#slots*/
    t[56].label
  ), a = ae(
    r,
    t,
    /*$$scope*/
    t[87],
    Rr
  );
  return {
    c() {
      n = Pe(e), a && a.c();
    },
    m(o, l) {
      P(o, n, l), a && a.m(o, l), i = !0;
    },
    p(o, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && Ge(n, e), a && a.p && (!i || l[2] & /*$$scope*/
      33554432) && oe(
        a,
        r,
        o,
        /*$$scope*/
        o[87],
        i ? le(
          r,
          /*$$scope*/
          o[87],
          l,
          ld
        ) : se(
          /*$$scope*/
          o[87]
        ),
        Rr
      );
    },
    i(o) {
      i || (S(a, o), i = !0);
    },
    o(o) {
      I(a, o), i = !1;
    },
    d(o) {
      o && B(n), a && a.d(o);
    }
  };
}
function md(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && Pr(t);
  return {
    c() {
      i && i.c(), e = Te();
    },
    m(r, a) {
      i && i.m(r, a), P(r, e, a), n = !0;
    },
    p(r, a) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && S(i, 1)) : (i = Pr(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (ye(), I(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      I(i), n = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function gd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[87],
    wr
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a[2] & /*$$scope*/
      33554432) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? le(
          n,
          /*$$scope*/
          r[87],
          a,
          ad
        ) : se(
          /*$$scope*/
          r[87]
        ),
        wr
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function pd(t) {
  let e, n, i, r, a, o, l, s, u, f;
  const c = (
    /*#slots*/
    t[56].prefix
  ), d = ae(
    c,
    t,
    /*$$scope*/
    t[87],
    Or
  );
  let g = (
    /*prefix*/
    t[20] != null && Ur(t)
  );
  const p = [
    { type: (
      /*type*/
      t[18]
    ) },
    { disabled: (
      /*disabled*/
      t[12]
    ) },
    { required: (
      /*required*/
      t[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      t[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      t[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      t[27]
    ) },
    /*noLabel*/
    t[16] && /*label*/
    t[17] != null ? { placeholder: (
      /*label*/
      t[17]
    ) } : {},
    Ne(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function b(h) {
    t[69](h);
  }
  function m(h) {
    t[70](h);
  }
  function y(h) {
    t[71](h);
  }
  function _(h) {
    t[72](h);
  }
  let O = {};
  for (let h = 0; h < p.length; h += 1)
    O = F(O, p[h]);
  /*value*/
  t[0] !== void 0 && (O.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (O.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (O.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (O.invalid = /*invalid*/
  t[1]), i = new Wc({ props: O }), t[68](i), ee.push(() => tt(i, "value", b)), ee.push(() => tt(i, "files", m)), ee.push(() => tt(i, "dirty", y)), ee.push(() => tt(i, "invalid", _)), i.$on(
    "blur",
    /*blur_handler_2*/
    t[73]
  ), i.$on(
    "focus",
    /*focus_handler_2*/
    t[74]
  ), i.$on(
    "blur",
    /*blur_handler_3*/
    t[75]
  ), i.$on(
    "focus",
    /*focus_handler_3*/
    t[76]
  );
  let A = (
    /*suffix*/
    t[21] != null && Fr(t)
  );
  const D = (
    /*#slots*/
    t[56].suffix
  ), M = ae(
    D,
    t,
    /*$$scope*/
    t[87],
    Lr
  );
  return {
    c() {
      d && d.c(), e = Q(), g && g.c(), n = Q(), j(i.$$.fragment), s = Q(), A && A.c(), u = Q(), M && M.c();
    },
    m(h, R) {
      d && d.m(h, R), P(h, e, R), g && g.m(h, R), P(h, n, R), N(i, h, R), P(h, s, R), A && A.m(h, R), P(h, u, R), M && M.m(h, R), f = !0;
    },
    p(h, R) {
      d && d.p && (!f || R[2] & /*$$scope*/
      33554432) && oe(
        d,
        c,
        h,
        /*$$scope*/
        h[87],
        f ? le(
          c,
          /*$$scope*/
          h[87],
          R,
          id
        ) : se(
          /*$$scope*/
          h[87]
        ),
        Or
      ), /*prefix*/
      h[20] != null ? g ? (g.p(h, R), R[0] & /*prefix*/
      1048576 && S(g, 1)) : (g = Ur(h), g.c(), S(g, 1), g.m(n.parentNode, n)) : g && (ye(), I(g, 1, 1, () => {
        g = null;
      }), Ae());
      const q = R[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
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
        196608 && _e(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        R[1] & /*$$restProps*/
        32768 && _e(Ne(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !r && R[0] & /*value*/
      1 && (r = !0, q.value = /*value*/
      h[0], et(() => r = !1)), !a && R[0] & /*files*/
      8 && (a = !0, q.files = /*files*/
      h[3], et(() => a = !1)), !o && R[0] & /*dirty*/
      16 && (o = !0, q.dirty = /*dirty*/
      h[4], et(() => o = !1)), !l && R[0] & /*invalid*/
      2 && (l = !0, q.invalid = /*invalid*/
      h[1], et(() => l = !1)), i.$set(q), /*suffix*/
      h[21] != null ? A ? (A.p(h, R), R[0] & /*suffix*/
      2097152 && S(A, 1)) : (A = Fr(h), A.c(), S(A, 1), A.m(u.parentNode, u)) : A && (ye(), I(A, 1, 1, () => {
        A = null;
      }), Ae()), M && M.p && (!f || R[2] & /*$$scope*/
      33554432) && oe(
        M,
        D,
        h,
        /*$$scope*/
        h[87],
        f ? le(
          D,
          /*$$scope*/
          h[87],
          R,
          nd
        ) : se(
          /*$$scope*/
          h[87]
        ),
        Lr
      );
    },
    i(h) {
      f || (S(d, h), S(g), S(i.$$.fragment, h), S(A), S(M, h), f = !0);
    },
    o(h) {
      I(d, h), I(g), I(i.$$.fragment, h), I(A), I(M, h), f = !1;
    },
    d(h) {
      h && (B(e), B(n), B(s), B(u)), d && d.d(h), g && g.d(h), t[68](null), G(i, h), A && A.d(h), M && M.d(h);
    }
  };
}
function bd(t) {
  let e, n, i, r, a, o, l, s;
  const u = [
    { disabled: (
      /*disabled*/
      t[12]
    ) },
    { required: (
      /*required*/
      t[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      t[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      t[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      t[27]
    ) },
    Ne(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function f(m) {
    t[61](m);
  }
  function c(m) {
    t[62](m);
  }
  function d(m) {
    t[63](m);
  }
  let g = {};
  for (let m = 0; m < u.length; m += 1)
    g = F(g, u[m]);
  /*value*/
  t[0] !== void 0 && (g.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (g.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (g.invalid = /*invalid*/
  t[1]), n = new Yc({ props: g }), t[60](n), ee.push(() => tt(n, "value", f)), ee.push(() => tt(n, "dirty", c)), ee.push(() => tt(n, "invalid", d)), n.$on(
    "blur",
    /*blur_handler*/
    t[64]
  ), n.$on(
    "focus",
    /*focus_handler*/
    t[65]
  ), n.$on(
    "blur",
    /*blur_handler_1*/
    t[66]
  ), n.$on(
    "focus",
    /*focus_handler_1*/
    t[67]
  );
  const p = (
    /*#slots*/
    t[56].internalCounter
  ), b = ae(
    p,
    t,
    /*$$scope*/
    t[87],
    Tr
  );
  return {
    c() {
      e = K("span"), j(n.$$.fragment), o = Q(), b && b.c(), U(e, "class", l = Y({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(m, y) {
      P(m, e, y), N(n, e, null), Z(e, o), b && b.m(e, null), s = !0;
    },
    p(m, y) {
      const _ = y[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | y[1] & /*$$restProps*/
      32768 ? fe(u, [
        y[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          m[12]
        ) },
        y[0] & /*required*/
        8192 && { required: (
          /*required*/
          m[13]
        ) },
        y[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          m[19]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          m[27]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          m[27]
        ) },
        y[1] & /*$$restProps*/
        32768 && _e(Ne(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && y[0] & /*value*/
      1 && (i = !0, _.value = /*value*/
      m[0], et(() => i = !1)), !r && y[0] & /*dirty*/
      16 && (r = !0, _.dirty = /*dirty*/
      m[4], et(() => r = !1)), !a && y[0] & /*invalid*/
      2 && (a = !0, _.invalid = /*invalid*/
      m[1], et(() => a = !1)), n.$set(_), b && b.p && (!s || y[2] & /*$$scope*/
      33554432) && oe(
        b,
        p,
        m,
        /*$$scope*/
        m[87],
        s ? le(
          p,
          /*$$scope*/
          m[87],
          y,
          rd
        ) : se(
          /*$$scope*/
          m[87]
        ),
        Tr
      ), (!s || y[1] & /*$$restProps*/
      32768 && l !== (l = Y({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        m[46]) || /*$$restProps*/
        m[46].input$resizable
      }))) && U(e, "class", l);
    },
    i(m) {
      s || (S(n.$$.fragment, m), S(b, m), s = !0);
    },
    o(m) {
      I(n.$$.fragment, m), I(b, m), s = !1;
    },
    d(m) {
      m && B(e), t[60](null), G(n), b && b.d(m);
    }
  };
}
function Ur(t) {
  let e, n;
  return e = new jc({
    props: {
      $$slots: { default: [_d] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function _d(t) {
  let e;
  return {
    c() {
      e = Pe(
        /*prefix*/
        t[20]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i[0] & /*prefix*/
      1048576 && Ge(
        e,
        /*prefix*/
        n[20]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Fr(t) {
  let e, n;
  return e = new Vc({
    props: {
      $$slots: { default: [vd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function vd(t) {
  let e;
  return {
    c() {
      e = Pe(
        /*suffix*/
        t[21]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i[0] & /*suffix*/
      2097152 && Ge(
        e,
        /*suffix*/
        n[21]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function yd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[87],
    Ir
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a[2] & /*$$scope*/
      33554432) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? le(
          n,
          /*$$scope*/
          r[87],
          a,
          td
        ) : se(
          /*$$scope*/
          r[87]
        ),
        Ir
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Nr(t) {
  let e, n;
  const i = [Ne(
    /*$$restProps*/
    t[46],
    "ripple$"
  )];
  let r = {};
  for (let a = 0; a < i.length; a += 1)
    r = F(r, i[a]);
  return e = new kc({ props: r }), t[77](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), n = !0;
    },
    p(a, o) {
      const l = o[1] & /*$$restProps*/
      32768 ? fe(i, [_e(Ne(
        /*$$restProps*/
        a[46],
        "ripple$"
      ))]) : {};
      e.$set(l);
    },
    i(a) {
      n || (S(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[77](null), G(e, a);
    }
  };
}
function Gr(t) {
  let e, n;
  const i = [Ne(
    /*$$restProps*/
    t[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [Ad] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = F(r, i[a]);
  return e = new Gc({ props: r }), e.$on(
    "SMUITextfieldHelperText:id",
    /*handleHelperTextId*/
    t[41]
  ), e.$on(
    "SMUITextfieldHelperText:mount",
    /*handleHelperTextMount*/
    t[42]
  ), e.$on(
    "SMUITextfieldHelperText:unmount",
    /*SMUITextfieldHelperText_unmount_handler*/
    t[85]
  ), e.$on(
    "SMUITextfieldCharacterCounter:mount",
    /*handleCharacterCounterMount*/
    t[40]
  ), e.$on(
    "SMUITextfieldCharacterCounter:unmount",
    /*SMUITextfieldCharacterCounter_unmount_handler_1*/
    t[86]
  ), {
    c() {
      j(e.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), n = !0;
    },
    p(a, o) {
      const l = o[1] & /*$$restProps*/
      32768 ? fe(i, [_e(Ne(
        /*$$restProps*/
        a[46],
        "helperLine$"
      ))]) : {};
      o[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: o, ctx: a }), e.$set(l);
    },
    i(a) {
      n || (S(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      G(e, a);
    }
  };
}
function Ad(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[87],
    yr
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a[2] & /*$$scope*/
      33554432) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? le(
          n,
          /*$$scope*/
          r[87],
          a,
          Qc
        ) : se(
          /*$$scope*/
          r[87]
        ),
        yr
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ed(t) {
  let e, n, i, r, a;
  const o = [ud, sd], l = [];
  function s(f, c) {
    return (
      /*valued*/
      f[36] ? 0 : 1
    );
  }
  e = s(t), n = l[e] = o[e](t);
  let u = (
    /*$$slots*/
    t[47].helper && Gr(t)
  );
  return {
    c() {
      n.c(), i = Q(), u && u.c(), r = Te();
    },
    m(f, c) {
      l[e].m(f, c), P(f, i, c), u && u.m(f, c), P(f, r, c), a = !0;
    },
    p(f, c) {
      n.p(f, c), /*$$slots*/
      f[47].helper ? u ? (u.p(f, c), c[1] & /*$$slots*/
      65536 && S(u, 1)) : (u = Gr(f), u.c(), S(u, 1), u.m(r.parentNode, r)) : u && (ye(), I(u, 1, 1, () => {
        u = null;
      }), Ae());
    },
    i(f) {
      a || (S(n), S(u), a = !0);
    },
    o(f) {
      I(n), I(u), a = !1;
    },
    d(f) {
      f && (B(i), B(r)), l[e].d(f), u && u.d(f);
    }
  };
}
const jr = ([t, e]) => `${t}: ${e};`, Vr = ([t, e]) => `${t}: ${e};`;
function Sd(t, e, n) {
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
  let a = re(e, r), { $$slots: o = {}, $$scope: l } = e;
  const s = Ma(o), { applyPassive: u } = pl, f = Ue(we());
  let c = () => {
  };
  function d(w) {
    return w === c;
  }
  let { use: g = [] } = e, { class: p = "" } = e, { style: b = "" } = e, { ripple: m = !0 } = e, { disabled: y = !1 } = e, { required: _ = !1 } = e, { textarea: O = !1 } = e, { variant: A = O ? "outlined" : "standard" } = e, { noLabel: D = !1 } = e, { label: M = void 0 } = e, { type: h = "text" } = e, { value: R = a.input$emptyValueUndefined ? void 0 : c } = e, { files: q = c } = e;
  const C = !d(R) || !d(q);
  d(R) && (R = void 0), d(q) && (q = null);
  let { invalid: v = c } = e, { updateInvalid: T = d(v) } = e;
  d(v) && (v = !1);
  let { dirty: H = !1 } = e, { prefix: X = void 0 } = e, { suffix: ie = void 0 } = e, { validateOnValueChange: he = T } = e, { useNativeValidation: J = T } = e, { withLeadingIcon: k = c } = e, { withTrailingIcon: E = c } = e, { input: z = void 0 } = e, { floatingLabel: pe = void 0 } = e, { lineRipple: Ie = void 0 } = e, { notchedOutline: Xe = void 0 } = e, Ke, Ce, Ye = {}, Fe = {}, ot, st = !1, It = Re("SMUI:addLayoutListener"), W, ze, rt = new Promise((w) => ze = w), dt, $e, Lt, _t, Dt = R;
  It && (W = It(Ui)), Je(() => {
    if (n(54, Ce = new Sc(
      {
        // getRootAdapterMethods_
        addClass: En,
        removeClass: Sn,
        hasClass: un,
        registerTextFieldInteractionHandler: (w, qe) => Cn().addEventListener(w, qe),
        deregisterTextFieldInteractionHandler: (w, qe) => Cn().removeEventListener(w, qe),
        registerValidationAttributeChangeHandler: (w) => {
          const qe = (Xn) => Xn.map((Wn) => Wn.attributeName).filter((Wn) => Wn), Fi = new MutationObserver((Xn) => {
            J && w(qe(Xn));
          }), Co = { attributes: !0 };
          return z && Fi.observe(z.getElement(), Co), Fi;
        },
        deregisterValidationAttributeChangeHandler: (w) => {
          w.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var w;
          return (w = z == null ? void 0 : z.getElement()) !== null && w !== void 0 ? w : null;
        },
        setInputAttr: (w, qe) => {
          z == null || z.addAttr(w, qe);
        },
        removeInputAttr: (w) => {
          z == null || z.removeAttr(w);
        },
        isFocused: () => document.activeElement === (z == null ? void 0 : z.getElement()),
        registerInputInteractionHandler: (w, qe) => {
          z == null || z.getElement().addEventListener(w, qe, u());
        },
        deregisterInputInteractionHandler: (w, qe) => {
          z == null || z.getElement().removeEventListener(w, qe, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (w) => pe && pe.float(w),
        getLabelWidth: () => pe ? pe.getWidth() : 0,
        hasLabel: () => !!pe,
        shakeLabel: (w) => pe && pe.shake(w),
        setLabelRequired: (w) => pe && pe.setRequired(w),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Ie && Ie.activate(),
        deactivateLineRipple: () => Ie && Ie.deactivate(),
        setLineRippleTransformOrigin: (w) => Ie && Ie.setRippleCenter(w),
        // getOutlineAdapterMethods_
        closeOutline: () => Xe && Xe.closeNotch(),
        hasOutline: () => !!Xe,
        notchOutline: (w) => Xe && Xe.notch(w)
      },
      {
        get helperText() {
          return Lt;
        },
        get characterCounter() {
          return _t;
        },
        get leadingIcon() {
          return dt;
        },
        get trailingIcon() {
          return $e;
        }
      }
    )), C) {
      if (z == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      Ce.init();
    } else
      Uo().then(() => {
        if (z == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        Ce.init();
      });
    return ze(), () => {
      Ce.destroy();
    };
  }), an(() => {
    W && W();
  });
  function sn(w) {
    n(29, dt = w.detail);
  }
  function L(w) {
    n(30, $e = w.detail);
  }
  function V(w) {
    n(32, _t = w.detail);
  }
  function Se(w) {
    n(27, ot = w.detail);
  }
  function ht(w) {
    n(31, Lt = w.detail);
  }
  function un(w) {
    var qe;
    return w in Ye ? (qe = Ye[w]) !== null && qe !== void 0 ? qe : null : Cn().classList.contains(w);
  }
  function En(w) {
    Ye[w] || n(25, Ye[w] = !0, Ye);
  }
  function Sn(w) {
    (!(w in Ye) || Ye[w]) && n(25, Ye[w] = !1, Ye);
  }
  function zl(w, qe) {
    Fe[w] != qe && (qe === "" || qe == null ? (delete Fe[w], n(26, Fe)) : n(26, Fe[w] = qe, Fe));
  }
  function Xl() {
    z == null || z.focus();
  }
  function Wl() {
    z == null || z.blur();
  }
  function Ui() {
    if (Ce) {
      const w = Ce.shouldFloat;
      Ce.notchOutline(w);
    }
  }
  function Cn() {
    return Ke;
  }
  function Zl(w) {
    ee[w ? "unshift" : "push"](() => {
      pe = w, n(5, pe);
    });
  }
  function Kl(w) {
    ee[w ? "unshift" : "push"](() => {
      pe = w, n(5, pe);
    });
  }
  function Yl(w) {
    ee[w ? "unshift" : "push"](() => {
      Xe = w, n(7, Xe);
    });
  }
  function Ql(w) {
    ee[w ? "unshift" : "push"](() => {
      z = w, n(2, z);
    });
  }
  function Jl(w) {
    R = w, n(0, R);
  }
  function xl(w) {
    H = w, n(4, H);
  }
  function $l(w) {
    v = w, n(1, v), n(54, Ce), n(19, T);
  }
  const eo = () => n(28, st = !1), to = () => n(28, st = !0), no = (w) => ve(Ke, "blur", w), io = (w) => ve(Ke, "focus", w);
  function ro(w) {
    ee[w ? "unshift" : "push"](() => {
      z = w, n(2, z);
    });
  }
  function ao(w) {
    R = w, n(0, R);
  }
  function lo(w) {
    q = w, n(3, q);
  }
  function oo(w) {
    H = w, n(4, H);
  }
  function so(w) {
    v = w, n(1, v), n(54, Ce), n(19, T);
  }
  const uo = () => n(28, st = !1), fo = () => n(28, st = !0), co = (w) => ve(Ke, "blur", w), ho = (w) => ve(Ke, "focus", w);
  function mo(w) {
    ee[w ? "unshift" : "push"](() => {
      Ie = w, n(6, Ie);
    });
  }
  function go(w) {
    ee[w ? "unshift" : "push"](() => {
      Ke = w, n(24, Ke);
    });
  }
  const po = () => n(29, dt = void 0), bo = () => n(30, $e = void 0), _o = () => n(32, _t = void 0);
  function vo(w) {
    ee[w ? "unshift" : "push"](() => {
      Ke = w, n(24, Ke);
    });
  }
  const yo = () => n(29, dt = void 0), Ao = () => n(30, $e = void 0), Eo = () => {
    n(27, ot = void 0), n(31, Lt = void 0);
  }, So = () => n(32, _t = void 0);
  return t.$$set = (w) => {
    e = F(F({}, e), Me(w)), n(46, a = re(e, r)), "use" in w && n(8, g = w.use), "class" in w && n(9, p = w.class), "style" in w && n(10, b = w.style), "ripple" in w && n(11, m = w.ripple), "disabled" in w && n(12, y = w.disabled), "required" in w && n(13, _ = w.required), "textarea" in w && n(14, O = w.textarea), "variant" in w && n(15, A = w.variant), "noLabel" in w && n(16, D = w.noLabel), "label" in w && n(17, M = w.label), "type" in w && n(18, h = w.type), "value" in w && n(0, R = w.value), "files" in w && n(3, q = w.files), "invalid" in w && n(1, v = w.invalid), "updateInvalid" in w && n(19, T = w.updateInvalid), "dirty" in w && n(4, H = w.dirty), "prefix" in w && n(20, X = w.prefix), "suffix" in w && n(21, ie = w.suffix), "validateOnValueChange" in w && n(48, he = w.validateOnValueChange), "useNativeValidation" in w && n(49, J = w.useNativeValidation), "withLeadingIcon" in w && n(22, k = w.withLeadingIcon), "withTrailingIcon" in w && n(23, E = w.withTrailingIcon), "input" in w && n(2, z = w.input), "floatingLabel" in w && n(5, pe = w.floatingLabel), "lineRipple" in w && n(6, Ie = w.lineRipple), "notchedOutline" in w && n(7, Xe = w.notchedOutline), "$$scope" in w && n(87, l = w.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = z && z.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && Ce && Ce.isValid() !== !v && (T ? n(1, v = !Ce.isValid()) : Ce.setValid(!v)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && Ce && Ce.getValidateOnValueChange() !== he && Ce.setValidateOnValueChange(d(he) ? !1 : he), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && Ce && Ce.setUseNativeValidation(d(J) ? !0 : J), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && Ce && Ce.setDisabled(y), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && Ce && C && Dt !== R) {
      n(55, Dt = R);
      const w = `${R}`;
      Ce.getValue() !== w && Ce.setValue(w);
    }
  }, [
    R,
    v,
    z,
    q,
    H,
    pe,
    Ie,
    Xe,
    g,
    p,
    b,
    m,
    y,
    _,
    O,
    A,
    D,
    M,
    h,
    T,
    X,
    ie,
    k,
    E,
    Ke,
    Ye,
    Fe,
    ot,
    st,
    dt,
    $e,
    Lt,
    _t,
    i,
    f,
    d,
    C,
    rt,
    sn,
    L,
    V,
    Se,
    ht,
    En,
    Sn,
    zl,
    a,
    s,
    he,
    J,
    Xl,
    Wl,
    Ui,
    Cn,
    Ce,
    Dt,
    o,
    Zl,
    Kl,
    Yl,
    Ql,
    Jl,
    xl,
    $l,
    eo,
    to,
    no,
    io,
    ro,
    ao,
    lo,
    oo,
    so,
    uo,
    fo,
    co,
    ho,
    mo,
    go,
    po,
    bo,
    _o,
    vo,
    yo,
    Ao,
    Eo,
    So,
    l
  ];
}
class vl extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      Sd,
      Ed,
      ue,
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
function Cd(t) {
  let e;
  return {
    c() {
      e = Pe(
        /*content*/
        t[7]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      128 && Ge(
        e,
        /*content*/
        n[7]
      );
    },
    i: Oe,
    o: Oe,
    d(n) {
      n && B(e);
    }
  };
}
function Id(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      16384) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[14],
        e ? le(
          n,
          /*$$scope*/
          r[14],
          a,
          null
        ) : se(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ld(t) {
  let e, n, i, r, a, o, l, s, u, f;
  const c = [Id, Cd], d = [];
  function g(m, y) {
    return (
      /*content*/
      m[7] == null ? 0 : 1
    );
  }
  n = g(t), i = d[n] = c[n](t);
  let p = [
    {
      class: r = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": (
          /*leading*/
          t[11]
        ),
        "mdc-text-field__icon--trailing": !/*leading*/
        t[11]
      })
    },
    {
      "aria-hidden": a = /*tabindex*/
      t[3] === -1 ? "true" : "false"
    },
    {
      "aria-disabled": o = /*role*/
      t[2] === "button" ? (
        /*disabled*/
        t[4] ? "true" : "false"
      ) : void 0
    },
    /*roleProps*/
    t[8],
    /*internalAttrs*/
    t[6],
    /*$$restProps*/
    t[12]
  ], b = {};
  for (let m = 0; m < p.length; m += 1)
    b = F(b, p[m]);
  return {
    c() {
      e = K("i"), i.c(), ne(e, b);
    },
    m(m, y) {
      P(m, e, y), d[n].m(e, null), t[16](e), s = !0, u || (f = [
        te(l = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[9].call(null, e)
        )
      ], u = !0);
    },
    p(m, [y]) {
      let _ = n;
      n = g(m), n === _ ? d[n].p(m, y) : (ye(), I(d[_], 1, 1, () => {
        d[_] = null;
      }), Ae(), i = d[n], i ? i.p(m, y) : (i = d[n] = c[n](m), i.c()), S(i, 1), i.m(e, null)), ne(e, b = fe(p, [
        (!s || y & /*className*/
        2 && r !== (r = Y({
          [
            /*className*/
            m[1]
          ]: !0,
          "mdc-text-field__icon": !0,
          "mdc-text-field__icon--leading": (
            /*leading*/
            m[11]
          ),
          "mdc-text-field__icon--trailing": !/*leading*/
          m[11]
        }))) && { class: r },
        (!s || y & /*tabindex*/
        8 && a !== (a = /*tabindex*/
        m[3] === -1 ? "true" : "false")) && { "aria-hidden": a },
        (!s || y & /*role, disabled*/
        20 && o !== (o = /*role*/
        m[2] === "button" ? (
          /*disabled*/
          m[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": o },
        y & /*roleProps*/
        256 && /*roleProps*/
        m[8],
        y & /*internalAttrs*/
        64 && /*internalAttrs*/
        m[6],
        y & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), l && me(l.update) && y & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      s || (S(i), s = !0);
    },
    o(m) {
      I(i), s = !1;
    },
    d(m) {
      m && B(e), d[n].d(), t[16](null), u = !1, Ee(f);
    }
  };
}
function Od(t, e, n) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let a = re(e, r), o, { $$slots: l = {}, $$scope: s } = e;
  const u = Ue(we());
  let { use: f = [] } = e, { class: c = "" } = e, { role: d = void 0 } = e, { tabindex: g = d === "button" ? 0 : -1 } = e, { disabled: p = !1 } = e, b, m, y = {};
  const _ = Re("SMUI:textfield:icon:leading");
  nt(t, _, (C) => n(18, o = C));
  const O = o;
  let A;
  Je(() => (m = new Ic({
    getAttr: D,
    setAttr: M,
    removeAttr: h,
    setContent: (C) => {
      n(7, A = C);
    },
    registerInteractionHandler: (C, v) => R().addEventListener(C, v),
    deregisterInteractionHandler: (C, v) => R().removeEventListener(C, v),
    notifyIconAction: () => ve(R(), "SMUITextField:icon", void 0, void 0, !0)
  }), ve(
    R(),
    O ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    m
  ), m.init(), () => {
    ve(
      R(),
      O ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      m
    ), m.destroy();
  }));
  function D(C) {
    var v;
    return C in y ? (v = y[C]) !== null && v !== void 0 ? v : null : R().getAttribute(C);
  }
  function M(C, v) {
    y[C] !== v && n(6, y[C] = v, y);
  }
  function h(C) {
    (!(C in y) || y[C] != null) && n(6, y[C] = void 0, y);
  }
  function R() {
    return b;
  }
  function q(C) {
    ee[C ? "unshift" : "push"](() => {
      b = C, n(5, b);
    });
  }
  return t.$$set = (C) => {
    e = F(F({}, e), Me(C)), n(12, a = re(e, r)), "use" in C && n(0, f = C.use), "class" in C && n(1, c = C.class), "role" in C && n(2, d = C.role), "tabindex" in C && n(3, g = C.tabindex), "disabled" in C && n(4, p = C.disabled), "$$scope" in C && n(14, s = C.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, tabindex*/
    12 && n(8, i = { role: d, tabindex: g });
  }, [
    f,
    c,
    d,
    g,
    p,
    b,
    y,
    A,
    i,
    u,
    _,
    O,
    a,
    R,
    s,
    l,
    q
  ];
}
class Td extends de {
  constructor(e) {
    super(), ce(this, e, Od, Ld, ue, {
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
function wd(t) {
  let e, n, i;
  function r(o) {
    t[6](o);
  }
  let a = {
    label: (
      /*label*/
      t[2]
    ),
    placeholder: (
      /*placeholder*/
      t[1]
    ),
    style: "width: 100%",
    variant: (
      /*variant*/
      t[4]
    )
  };
  return (
    /*value*/
    t[0] !== void 0 && (a.value = /*value*/
    t[0]), e = new vl({ props: a }), ee.push(() => tt(e, "value", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(o, l) {
        N(e, o, l), i = !0;
      },
      p(o, l) {
        const s = {};
        l & /*label*/
        4 && (s.label = /*label*/
        o[2]), l & /*placeholder*/
        2 && (s.placeholder = /*placeholder*/
        o[1]), l & /*variant*/
        16 && (s.variant = /*variant*/
        o[4]), !n && l & /*value*/
        1 && (n = !0, s.value = /*value*/
        o[0], et(() => n = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        I(e.$$.fragment, o), i = !1;
      },
      d(o) {
        G(e, o);
      }
    }
  );
}
function Rd(t) {
  let e, n, i;
  function r(o) {
    t[5](o);
  }
  let a = {
    label: (
      /*label*/
      t[2]
    ),
    placeholder: (
      /*placeholder*/
      t[1]
    ),
    style: "width: 100%",
    variant: (
      /*variant*/
      t[4]
    ),
    $$slots: { leadingIcon: [kd] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (a.value = /*value*/
    t[0]), e = new vl({ props: a }), ee.push(() => tt(e, "value", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(o, l) {
        N(e, o, l), i = !0;
      },
      p(o, l) {
        const s = {};
        l & /*label*/
        4 && (s.label = /*label*/
        o[2]), l & /*placeholder*/
        2 && (s.placeholder = /*placeholder*/
        o[1]), l & /*variant*/
        16 && (s.variant = /*variant*/
        o[4]), l & /*$$scope, icon*/
        136 && (s.$$scope = { dirty: l, ctx: o }), !n && l & /*value*/
        1 && (n = !0, s.value = /*value*/
        o[0], et(() => n = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        I(e.$$.fragment, o), i = !1;
      },
      d(o) {
        G(e, o);
      }
    }
  );
}
function Hd(t) {
  let e;
  return {
    c() {
      e = Pe(
        /*icon*/
        t[3]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      8 && Ge(
        e,
        /*icon*/
        n[3]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function kd(t) {
  let e, n;
  return e = new Td({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [Hd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r & /*$$scope, icon*/
      136 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Dd(t) {
  let e, n, i, r;
  const a = [Rd, wd], o = [];
  function l(s, u) {
    return (
      /*icon*/
      s[3] ? 0 : 1
    );
  }
  return e = l(t), n = o[e] = a[e](t), {
    c() {
      n.c(), i = Te();
    },
    m(s, u) {
      o[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = l(s), e === f ? o[e].p(s, u) : (ye(), I(o[f], 1, 1, () => {
        o[f] = null;
      }), Ae(), n = o[e], n ? n.p(s, u) : (n = o[e] = a[e](s), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (S(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), o[e].d(s);
    }
  };
}
function Md(t, e, n) {
  let { placeholder: i = "" } = e, { label: r = "" } = e, { icon: a = "" } = e, { value: o = "" } = e, { variant: l = "standard" } = e;
  function s(f) {
    o = f, n(0, o);
  }
  function u(f) {
    o = f, n(0, o);
  }
  return t.$$set = (f) => {
    "placeholder" in f && n(1, i = f.placeholder), "label" in f && n(2, r = f.label), "icon" in f && n(3, a = f.icon), "value" in f && n(0, o = f.value), "variant" in f && n(4, l = f.variant);
  }, [
    o,
    i,
    r,
    a,
    l,
    s,
    u
  ];
}
class li extends de {
  constructor(e) {
    super(), ce(this, e, Md, Dd, ue, {
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
var qr = {
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
function Bd(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Pd(t, e) {
  if (Bd(t) && e in qr) {
    var n = t.document.createElement("div"), i = qr[e], r = i.standard, a = i.prefixed, o = r in n.style;
    return o ? r : a;
  }
  return e;
}
Ve({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Ve({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Ve({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Ud(t) {
  let e, n, i, r, a, o;
  const l = (
    /*#slots*/
    t[8].default
  ), s = ae(
    l,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    {
      class: n = Y({
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
  for (let c = 0; c < u.length; c += 1)
    f = F(f, u[c]);
  return {
    c() {
      e = K("span"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[9](e), r = !0, a || (o = [
        te(i = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[3].call(null, e)
        )
      ], a = !0);
    },
    p(c, [d]) {
      s && s.p && (!r || d & /*$$scope*/
      128) && oe(
        s,
        l,
        c,
        /*$$scope*/
        c[7],
        r ? le(
          l,
          /*$$scope*/
          c[7],
          d,
          null
        ) : se(
          /*$$scope*/
          c[7]
        ),
        null
      ), ne(e, f = fe(u, [
        (!r || d & /*className*/
        2 && n !== (n = Y({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            c[4]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        c[5]
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (S(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[9](null), a = !1, Ee(o);
    }
  };
}
function Fd(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = Re("SMUI:list:graphic:menu-selection-group");
  function d() {
    return f;
  }
  function g(p) {
    ee[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  return t.$$set = (p) => {
    e = F(F({}, e), Me(p)), n(5, r = re(e, i)), "use" in p && n(0, s = p.use), "class" in p && n(1, u = p.class), "$$scope" in p && n(7, o = p.$$scope);
  }, [
    s,
    u,
    f,
    l,
    c,
    r,
    d,
    o,
    a,
    g
  ];
}
class Nd extends de {
  constructor(e) {
    super(), ce(this, e, Fd, Ud, ue, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Ve({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Ve({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Ve({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Ve({
  class: "mdc-menu__selection-group-icon",
  component: Nd
});
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
function Gd(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function jd(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Vd(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function qd(t) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(t, function(n) {
    return e.add(n.offsetTop);
  }), e.size > 1;
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
var zd = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, n) {
      var i = this;
      this.cancel(e);
      var r = requestAnimationFrame(function(a) {
        i.rafIDs.delete(e), n(a);
      });
      this.rafIDs.set(e, r);
    }, t.prototype.cancel = function(e) {
      var n = this.rafIDs.get(e);
      n && (cancelAnimationFrame(n), this.rafIDs.delete(e));
    }, t.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(n, i) {
        e.cancel(i);
      });
    }, t.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(n, i) {
        e.push(i);
      }), e;
    }, t;
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
var Le = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  // Class for showing a scroll divider on full-screen dialog header element.
  // Should only be displayed on scrollable content, when the dialog content is
  // scrolled "underneath" the header.
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  // Class for showing a scroll divider on a full-screen dialog footer element.
  // Should only be displayed on scrolalble content, when the dialog content is
  // obscured "underneath" the footer.
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  // The "surface scrim" is a scrim covering only the surface of a dialog. This
  // is used in situations where a confirmation dialog is shown over an already
  // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
  // is sized as a modal and so in these situations we display a "surface scrim"
  // to prevent a "double scrim" (where the scrim from the secondary
  // confirmation dialog would overlap with the scrim from the full-screen
  // dialog).
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  // "Showing" animating class for the surface-scrim.
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  // "Hiding" animating class for the surface-scrim.
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
  // Note that we only hide the original scrim rather than removing it entirely
  // to prevent interactions with the content behind this scrim, and to capture
  // scrim clicks.
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
}, cn = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, oi = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
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
var jn;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(jn || (jn = {}));
var Xd = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = cn.CLOSE_ACTION, i.scrimClickAction = cn.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = cn.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new zd(), i.contentScrollHandler = function() {
        i.handleScrollEvent();
      }, i.windowResizeHandler = function() {
        i.layout();
      }, i.windowOrientationChangeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Le;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return oi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          },
          registerContentEventHandler: function() {
          },
          deregisterContentEventHandler: function() {
          },
          isScrollableContentAtTop: function() {
            return !1;
          },
          isScrollableContentAtBottom: function() {
            return !1;
          },
          registerWindowEventHandler: function() {
          },
          deregisterWindowEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.hasClass(Le.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Le.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var i = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Le.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(Le.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        i.adapter.addClass(Le.OPEN), i.adapter.addBodyClass(Le.SCROLL_LOCK), i.layout(), i.animationTimer = setTimeout(function() {
          i.handleAnimationTimerEnd(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
        }, oi.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var i = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(Le.CLOSING), this.adapter.removeClass(Le.OPEN), this.adapter.removeBodyClass(Le.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(n);
      }, oi.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(Le.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(Le.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Le.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Le.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Le.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Le.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(n) {
      this.escapeKeyAction = n;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(n) {
      this.scrimClickAction = n;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(n) {
      this.autoStackButtons = n;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(n) {
      this.suppressDefaultPressSelector = n;
    }, e.prototype.layout = function() {
      var n = this;
      this.animFrame.request(jn.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var i = this.adapter.eventTargetMatches(n.target, cn.SCRIM_SELECTOR);
      if (i && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var r = this.adapter.getActionFromEvent(n);
        r && this.close(r);
      }
    }, e.prototype.handleKeydown = function(n) {
      var i = n.key === "Enter" || n.keyCode === 13;
      if (i) {
        var r = this.adapter.getActionFromEvent(n);
        if (!r) {
          var a = n.composedPath ? n.composedPath()[0] : n.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          i && o && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(n) {
      var i = n.key === "Escape" || n.keyCode === 27;
      i && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(jn.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Le.OPENING), this.adapter.removeClass(Le.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Le.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(Le.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Le.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Le.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Le.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Le.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Le.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Le.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Le.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Le.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(bt)
);
const { document: Wd, window: zr } = Ro, Zd = (t) => ({}), Xr = (t) => ({});
function Wr(t) {
  let e, n, i;
  return {
    c() {
      e = K("div"), U(e, "class", "mdc-dialog__surface-scrim");
    },
    m(r, a) {
      P(r, e, a), n || (i = $(
        e,
        "transitionend",
        /*transitionend_handler*/
        t[32]
      ), n = !0);
    },
    p: Oe,
    d(r) {
      r && B(e), n = !1, i();
    }
  };
}
function Kd(t) {
  let e, n, i, r, a, o, l, s, u, f, c, d, g, p, b;
  const m = (
    /*#slots*/
    t[29].default
  ), y = ae(
    m,
    t,
    /*$$scope*/
    t[28],
    null
  );
  let _ = (
    /*fullscreen*/
    t[5] && Wr(t)
  ), O = [
    {
      class: o = Y({
        [
          /*surface$class*/
          t[9]
        ]: !0,
        "mdc-dialog__surface": !0
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    Ne(
      /*$$restProps*/
      t[19],
      "surface$"
    )
  ], A = {};
  for (let v = 0; v < O.length; v += 1)
    A = F(A, O[v]);
  let D = [
    {
      class: l = Y({
        [
          /*container$class*/
          t[8]
        ]: !0,
        "mdc-dialog__container": !0
      })
    },
    Ne(
      /*$$restProps*/
      t[19],
      "container$"
    )
  ], M = {};
  for (let v = 0; v < D.length; v += 1)
    M = F(M, D[v]);
  let h = [
    {
      class: f = Y({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !/*autoStackButtons*/
        t[4],
        "mdc-dialog--fullscreen": (
          /*fullscreen*/
          t[5]
        ),
        "mdc-dialog--sheet": (
          /*sheet*/
          t[6]
        ),
        "mdc-dialog--no-content-padding": (
          /*noContentPadding*/
          t[7]
        ),
        "smui-dialog--selection": (
          /*selection*/
          t[3]
        ),
        .../*internalClasses*/
        t[12]
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    Ht(
      /*$$restProps*/
      t[19],
      ["container$", "surface$"]
    )
  ], R = {};
  for (let v = 0; v < h.length; v += 1)
    R = F(R, h[v]);
  const q = (
    /*#slots*/
    t[29].over
  ), C = ae(
    q,
    t,
    /*$$scope*/
    t[28],
    Xr
  );
  return {
    c() {
      e = Q(), n = K("div"), i = K("div"), r = K("div"), y && y.c(), a = Q(), _ && _.c(), s = Q(), u = K("div"), d = Q(), C && C.c(), ne(r, A), ne(i, M), U(u, "class", "mdc-dialog__scrim"), ne(n, R);
    },
    m(v, T) {
      P(v, e, T), P(v, n, T), Z(n, i), Z(i, r), y && y.m(r, null), Z(r, a), _ && _.m(r, null), Z(n, s), Z(n, u), t[33](n), P(v, d, T), C && C.m(v, T), g = !0, p || (b = [
        $(
          zr,
          "resize",
          /*resize_handler*/
          t[30]
        ),
        $(
          zr,
          "orientationchange",
          /*orientationchange_handler*/
          t[31]
        ),
        $(Wd.body, "keydown", function() {
          me(
            /*instance*/
            t[10] && /*instance*/
            t[10].handleDocumentKeydown.bind(
              /*instance*/
              t[10]
            )
          ) && /*instance*/
          (t[10] && /*instance*/
          t[10].handleDocumentKeydown.bind(
            /*instance*/
            t[10]
          )).apply(this, arguments);
        }),
        te(c = He.call(
          null,
          n,
          /*use*/
          t[1]
        )),
        te(
          /*forwardEvents*/
          t[13].call(null, n)
        ),
        $(
          n,
          "SMUIDialog:opening",
          /*handleDialogOpening*/
          t[16]
        ),
        $(
          n,
          "SMUIDialog:opened",
          /*handleDialogOpened*/
          t[17]
        ),
        $(
          n,
          "SMUIDialog:closed",
          /*handleDialogClosed*/
          t[18]
        ),
        $(n, "click", function() {
          me(
            /*instance*/
            t[10] && /*instance*/
            t[10].handleClick.bind(
              /*instance*/
              t[10]
            )
          ) && /*instance*/
          (t[10] && /*instance*/
          t[10].handleClick.bind(
            /*instance*/
            t[10]
          )).apply(this, arguments);
        }),
        $(n, "keydown", function() {
          me(
            /*instance*/
            t[10] && /*instance*/
            t[10].handleKeydown.bind(
              /*instance*/
              t[10]
            )
          ) && /*instance*/
          (t[10] && /*instance*/
          t[10].handleKeydown.bind(
            /*instance*/
            t[10]
          )).apply(this, arguments);
        })
      ], p = !0);
    },
    p(v, T) {
      t = v, y && y.p && (!g || T[0] & /*$$scope*/
      268435456) && oe(
        y,
        m,
        t,
        /*$$scope*/
        t[28],
        g ? le(
          m,
          /*$$scope*/
          t[28],
          T,
          null
        ) : se(
          /*$$scope*/
          t[28]
        ),
        null
      ), /*fullscreen*/
      t[5] ? _ ? _.p(t, T) : (_ = Wr(t), _.c(), _.m(r, null)) : _ && (_.d(1), _ = null), ne(r, A = fe(O, [
        (!g || T[0] & /*surface$class*/
        512 && o !== (o = Y({
          [
            /*surface$class*/
            t[9]
          ]: !0,
          "mdc-dialog__surface": !0
        }))) && { class: o },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        T[0] & /*$$restProps*/
        524288 && Ne(
          /*$$restProps*/
          t[19],
          "surface$"
        )
      ])), ne(i, M = fe(D, [
        (!g || T[0] & /*container$class*/
        256 && l !== (l = Y({
          [
            /*container$class*/
            t[8]
          ]: !0,
          "mdc-dialog__container": !0
        }))) && { class: l },
        T[0] & /*$$restProps*/
        524288 && Ne(
          /*$$restProps*/
          t[19],
          "container$"
        )
      ])), ne(n, R = fe(h, [
        (!g || T[0] & /*className, autoStackButtons, fullscreen, sheet, noContentPadding, selection, internalClasses*/
        4348 && f !== (f = Y({
          [
            /*className*/
            t[2]
          ]: !0,
          "mdc-dialog": !0,
          "mdc-dialog--stacked": !/*autoStackButtons*/
          t[4],
          "mdc-dialog--fullscreen": (
            /*fullscreen*/
            t[5]
          ),
          "mdc-dialog--sheet": (
            /*sheet*/
            t[6]
          ),
          "mdc-dialog--no-content-padding": (
            /*noContentPadding*/
            t[7]
          ),
          "smui-dialog--selection": (
            /*selection*/
            t[3]
          ),
          .../*internalClasses*/
          t[12]
        }))) && { class: f },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        T[0] & /*$$restProps*/
        524288 && Ht(
          /*$$restProps*/
          t[19],
          ["container$", "surface$"]
        )
      ])), c && me(c.update) && T[0] & /*use*/
      2 && c.update.call(
        null,
        /*use*/
        t[1]
      ), C && C.p && (!g || T[0] & /*$$scope*/
      268435456) && oe(
        C,
        q,
        t,
        /*$$scope*/
        t[28],
        g ? le(
          q,
          /*$$scope*/
          t[28],
          T,
          Zd
        ) : se(
          /*$$scope*/
          t[28]
        ),
        Xr
      );
    },
    i(v) {
      g || (S(y, v), S(C, v), g = !0);
    },
    o(v) {
      I(y, v), I(C, v), g = !1;
    },
    d(v) {
      v && (B(e), B(n), B(d)), y && y.d(v), _ && _.d(), t[33](null), C && C.d(v), p = !1, Ee(b);
    }
  };
}
function Yd(t, e, n) {
  const i = [
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "sheet",
    "noContentPadding",
    "container$class",
    "surface$class",
    "isOpen",
    "setOpen",
    "layout",
    "getElement"
  ];
  let r = re(e, i), a, o, { $$slots: l = {}, $$scope: s } = e;
  var u;
  const { FocusTrap: f } = kf, { closest: c, matches: d } = Ri, g = Ue(we());
  let { use: p = [] } = e, { class: b = "" } = e, { open: m = !1 } = e, { selection: y = !1 } = e, { escapeKeyAction: _ = "close" } = e, { scrimClickAction: O = "close" } = e, { autoStackButtons: A = !0 } = e, { fullscreen: D = !1 } = e, { sheet: M = !1 } = e, { noContentPadding: h = !1 } = e, { container$class: R = "" } = e, { surface$class: q = "" } = e, C, v, T = {}, H, X = it(!1);
  nt(t, X, (L) => n(37, o = L));
  let ie = Re("SMUI:dialog:aboveFullscreen"), he = (u = Re("SMUI:dialog:aboveFullscreenShown")) !== null && u !== void 0 ? u : it(!1);
  nt(t, he, (L) => n(27, a = L));
  let J = Re("SMUI:addLayoutListener"), k, E = [], z = (L) => (E.push(L), () => {
    const V = E.indexOf(L);
    V >= 0 && E.splice(V, 1);
  });
  De("SMUI:dialog:actions:reversed", X), De("SMUI:addLayoutListener", z), De("SMUI:dialog:selection", y), De("SMUI:dialog:aboveFullscreen", ie || D), De("SMUI:dialog:aboveFullscreenShown", he), M && De("SMUI:icon-button:context", "dialog:sheet"), J && (k = J(dt));
  let pe = a;
  Je(() => {
    var L;
    return H = new f(
      C,
      {
        initialFocusEl: (L = ot()) !== null && L !== void 0 ? L : void 0
      }
    ), n(10, v = new Xd({
      addBodyClass: (V) => document.body.classList.add(V),
      addClass: Xe,
      areButtonsStacked: () => qd(Ce()),
      clickDefaultButton: () => {
        const V = Ye();
        V && V.click();
      },
      eventTargetMatches: (V, Se) => V ? d(V, Se) : !1,
      getActionFromEvent: (V) => {
        if (!V.target)
          return "";
        const Se = c(V.target, "[data-mdc-dialog-action]");
        return Se && Se.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: ot,
      hasClass: Ie,
      isContentScrollable: () => Gd(Fe()),
      notifyClosed: (V) => {
        n(0, m = !1), ve($e(), "SMUIDialog:closed", V ? { action: V } : {}, void 0, !0);
      },
      notifyClosing: (V) => ve($e(), "SMUIDialog:closing", V ? { action: V } : {}, void 0, !0),
      notifyOpened: () => ve($e(), "SMUIDialog:opened", {}, void 0, !0),
      notifyOpening: () => ve($e(), "SMUIDialog:opening", {}, void 0, !0),
      releaseFocus: () => H.releaseFocus(),
      removeBodyClass: (V) => document.body.classList.remove(V),
      removeClass: Ke,
      reverseButtons: () => {
        Ot(X, o = !0, o);
      },
      trapFocus: () => H.trapFocus(),
      registerContentEventHandler: (V, Se) => {
        const ht = Fe();
        ht instanceof HTMLElement && ht.addEventListener(V, Se);
      },
      deregisterContentEventHandler: (V, Se) => {
        const ht = Fe();
        ht instanceof HTMLElement && ht.removeEventListener(V, Se);
      },
      isScrollableContentAtTop: () => jd(Fe()),
      isScrollableContentAtBottom: () => Vd(Fe()),
      registerWindowEventHandler: (V, Se) => {
        window.addEventListener(V, Se);
      },
      deregisterWindowEventHandler: (V, Se) => {
        window.removeEventListener(V, Se);
      }
    })), v.init(), () => {
      v.destroy();
    };
  }), an(() => {
    k && k();
  });
  function Ie(L) {
    return L in T ? T[L] : $e().classList.contains(L);
  }
  function Xe(L) {
    T[L] || n(12, T[L] = !0, T);
  }
  function Ke(L) {
    (!(L in T) || T[L]) && n(12, T[L] = !1, T);
  }
  function Ce() {
    return [].slice.call(C.querySelectorAll(".mdc-dialog__button"));
  }
  function Ye() {
    return C.querySelector("[data-mdc-dialog-button-default]");
  }
  function Fe() {
    return C.querySelector(".mdc-dialog__content");
  }
  function ot() {
    return C.querySelector("[data-mdc-dialog-initial-focus]");
  }
  function st() {
    ie && Ot(he, a = !0, a), requestAnimationFrame(() => {
      E.forEach((L) => L());
    });
  }
  function It() {
    E.forEach((L) => L());
  }
  function W() {
    ie && Ot(he, a = !1, a);
  }
  function ze() {
    return m;
  }
  function rt(L) {
    n(0, m = L);
  }
  function dt() {
    return v.layout();
  }
  function $e() {
    return C;
  }
  const Lt = () => m && v && v.layout(), _t = () => m && v && v.layout(), Dt = () => v && v.handleSurfaceScrimTransitionEnd();
  function sn(L) {
    ee[L ? "unshift" : "push"](() => {
      C = L, n(11, C);
    });
  }
  return t.$$set = (L) => {
    e = F(F({}, e), Me(L)), n(19, r = re(e, i)), "use" in L && n(1, p = L.use), "class" in L && n(2, b = L.class), "open" in L && n(0, m = L.open), "selection" in L && n(3, y = L.selection), "escapeKeyAction" in L && n(20, _ = L.escapeKeyAction), "scrimClickAction" in L && n(21, O = L.scrimClickAction), "autoStackButtons" in L && n(4, A = L.autoStackButtons), "fullscreen" in L && n(5, D = L.fullscreen), "sheet" in L && n(6, M = L.sheet), "noContentPadding" in L && n(7, h = L.noContentPadding), "container$class" in L && n(8, R = L.container$class), "surface$class" in L && n(9, q = L.surface$class), "$$scope" in L && n(28, s = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*instance, escapeKeyAction*/
    1049600 && v && v.getEscapeKeyAction() !== _ && v.setEscapeKeyAction(_), t.$$.dirty[0] & /*instance, scrimClickAction*/
    2098176 && v && v.getScrimClickAction() !== O && v.setScrimClickAction(O), t.$$.dirty[0] & /*instance, autoStackButtons*/
    1040 && v && v.getAutoStackButtons() !== A && v.setAutoStackButtons(A), t.$$.dirty[0] & /*autoStackButtons*/
    16 && (A || Ot(X, o = !0, o)), t.$$.dirty[0] & /*instance, open*/
    1025 && v && v.isOpen() !== m && (m ? v.open({
      isAboveFullscreenDialog: !!ie
    }) : v.close()), t.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/
    201327648 && D && v && pe !== a && (n(26, pe = a), a ? v.showSurfaceScrim() : v.hideSurfaceScrim());
  }, [
    m,
    p,
    b,
    y,
    A,
    D,
    M,
    h,
    R,
    q,
    v,
    C,
    T,
    g,
    X,
    he,
    st,
    It,
    W,
    r,
    _,
    O,
    ze,
    rt,
    dt,
    $e,
    pe,
    a,
    s,
    l,
    Lt,
    _t,
    Dt,
    sn
  ];
}
class Qd extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      Yd,
      Kd,
      ue,
      {
        use: 1,
        class: 2,
        open: 0,
        selection: 3,
        escapeKeyAction: 20,
        scrimClickAction: 21,
        autoStackButtons: 4,
        fullscreen: 5,
        sheet: 6,
        noContentPadding: 7,
        container$class: 8,
        surface$class: 9,
        isOpen: 22,
        setOpen: 23,
        layout: 24,
        getElement: 25
      },
      null,
      [-1, -1]
    );
  }
  get isOpen() {
    return this.$$.ctx[22];
  }
  get setOpen() {
    return this.$$.ctx[23];
  }
  get layout() {
    return this.$$.ctx[24];
  }
  get getElement() {
    return this.$$.ctx[25];
  }
}
Ve({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Ve({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Jd = Ve({
  class: "mdc-dialog__content",
  tag: "div"
}), xd = Ve({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
}), $d = (t) => ({}), Zr = (t) => ({}), eh = (t) => ({}), Kr = (t) => ({}), th = (t) => ({}), Yr = (t) => ({});
function nh(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].content
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[5],
    Kr
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      32) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[5],
        e ? le(
          n,
          /*$$scope*/
          r[5],
          a,
          eh
        ) : se(
          /*$$scope*/
          r[5]
        ),
        Kr
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ih(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].actions
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[5],
    Zr
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      32) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[5],
        e ? le(
          n,
          /*$$scope*/
          r[5],
          a,
          $d
        ) : se(
          /*$$scope*/
          r[5]
        ),
        Zr
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function rh(t) {
  let e, n, i, r, a, o;
  const l = (
    /*#slots*/
    t[2].title
  ), s = ae(
    l,
    t,
    /*$$scope*/
    t[5],
    Yr
  );
  return i = new Jd({
    props: {
      id: "large-scroll-content",
      $$slots: { default: [nh] },
      $$scope: { ctx: t }
    }
  }), a = new xd({
    props: {
      $$slots: { default: [ih] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), s && s.c(), n = Q(), j(i.$$.fragment), r = Q(), j(a.$$.fragment), U(e, "class", "dialog-title svelte-4sevka");
    },
    m(u, f) {
      P(u, e, f), s && s.m(e, null), P(u, n, f), N(i, u, f), P(u, r, f), N(a, u, f), o = !0;
    },
    p(u, f) {
      s && s.p && (!o || f & /*$$scope*/
      32) && oe(
        s,
        l,
        u,
        /*$$scope*/
        u[5],
        o ? le(
          l,
          /*$$scope*/
          u[5],
          f,
          th
        ) : se(
          /*$$scope*/
          u[5]
        ),
        Yr
      );
      const c = {};
      f & /*$$scope*/
      32 && (c.$$scope = { dirty: f, ctx: u }), i.$set(c);
      const d = {};
      f & /*$$scope*/
      32 && (d.$$scope = { dirty: f, ctx: u }), a.$set(d);
    },
    i(u) {
      o || (S(s, u), S(i.$$.fragment, u), S(a.$$.fragment, u), o = !0);
    },
    o(u) {
      I(s, u), I(i.$$.fragment, u), I(a.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (B(e), B(n), B(r)), s && s.d(u), G(i, u), G(a, u);
    }
  };
}
function ah(t) {
  let e, n, i;
  function r(o) {
    t[3](o);
  }
  let a = {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    $$slots: { default: [rh] },
    $$scope: { ctx: t }
  };
  return (
    /*open*/
    t[0] !== void 0 && (a.open = /*open*/
    t[0]), e = new Qd({ props: a }), ee.push(() => tt(e, "open", r)), e.$on(
      "SMUIDialog:closed",
      /*SMUIDialog_closed_handler*/
      t[4]
    ), {
      c() {
        j(e.$$.fragment);
      },
      m(o, l) {
        N(e, o, l), i = !0;
      },
      p(o, [l]) {
        const s = {};
        l & /*$$scope*/
        32 && (s.$$scope = { dirty: l, ctx: o }), !n && l & /*open*/
        1 && (n = !0, s.open = /*open*/
        o[0], et(() => n = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        I(e.$$.fragment, o), i = !1;
      },
      d(o) {
        G(e, o);
      }
    }
  );
}
function lh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { open: a = !1 } = e;
  const o = Po();
  function l(u) {
    a = u, n(0, a);
  }
  const s = (u) => {
    n(0, a = !1), o("close");
  };
  return t.$$set = (u) => {
    "open" in u && n(0, a = u.open), "$$scope" in u && n(5, r = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && console.log("Dialog open status changed:", a);
  }, [a, o, i, l, s, r];
}
class Qr extends de {
  constructor(e) {
    super(), ce(this, e, lh, ah, ue, { open: 0 });
  }
}
Ve({
  class: "smui-paper__content",
  tag: "div"
});
Ve({
  class: "smui-paper__title",
  tag: "h5"
});
Ve({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function oh(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), r = ae(
    i,
    t,
    /*$$scope*/
    t[0],
    null
  );
  return {
    c() {
      e = K("span"), r && r.c(), U(e, "class", "oscd-icon");
    },
    m(a, o) {
      P(a, e, o), r && r.m(e, null), n = !0;
    },
    p(a, [o]) {
      r && r.p && (!n || o & /*$$scope*/
      1) && oe(
        r,
        i,
        a,
        /*$$scope*/
        a[0],
        n ? le(
          i,
          /*$$scope*/
          a[0],
          o,
          null
        ) : se(
          /*$$scope*/
          a[0]
        ),
        null
      );
    },
    i(a) {
      n || (S(r, a), n = !0);
    },
    o(a) {
      I(r, a), n = !1;
    },
    d(a) {
      a && B(e), r && r.d(a);
    }
  };
}
function sh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  return t.$$set = (a) => {
    "$$scope" in a && n(0, r = a.$$scope);
  }, [r, i];
}
class Ct extends de {
  constructor(e) {
    super(), ce(this, e, sh, oh, ue, {});
  }
}
function uh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), U(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && U(
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
function fh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [uh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function ch(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class yl extends de {
  constructor(e) {
    super(), ce(this, e, ch, fh, ue, { svgStyles: 0 });
  }
}
function dh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), U(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && U(
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
function hh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [dh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function mh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Hi extends de {
  constructor(e) {
    super(), ce(this, e, mh, hh, ue, { svgStyles: 0 });
  }
}
function gh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), U(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && U(
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
function ph(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [gh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function bh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class _h extends de {
  constructor(e) {
    super(), ce(this, e, bh, ph, ue, { svgStyles: 0 });
  }
}
function vh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), U(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && U(
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
function yh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [vh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Ah(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Eh extends de {
  constructor(e) {
    super(), ce(this, e, Ah, yh, ue, { svgStyles: 0 });
  }
}
function Sh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p: Oe,
    d(i) {
      i && B(e);
    }
  };
}
function Ch(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [Sh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope*/
      2 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Ih(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Al extends de {
  constructor(e) {
    super(), ce(this, e, Ih, Ch, ue, { svgStyles: 0 });
  }
}
function Lh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p: Oe,
    d(i) {
      i && B(e);
    }
  };
}
function Oh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [Lh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope*/
      2 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Th(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class El extends de {
  constructor(e) {
    super(), ce(this, e, Th, Oh, ue, { svgStyles: 0 });
  }
}
function wh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M200-440v-80h560v80H200Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p: Oe,
    d(i) {
      i && B(e);
    }
  };
}
function Rh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [wh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope*/
      2 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Hh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class kh extends de {
  constructor(e) {
    super(), ce(this, e, Hh, Rh, ue, { svgStyles: 0 });
  }
}
function Dh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), U(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && U(
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
function Mh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [Dh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Bh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Ph extends de {
  constructor(e) {
    super(), ce(this, e, Bh, Mh, ue, { svgStyles: 0 });
  }
}
function Uh(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), U(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && U(
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
function Fh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [Uh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Nh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Gh extends de {
  constructor(e) {
    super(), ce(this, e, Nh, Fh, ue, { svgStyles: 0 });
  }
}
const We = [];
for (let t = 0; t < 256; ++t)
  We.push((t + 256).toString(16).slice(1));
function jh(t, e = 0) {
  return (We[t[e + 0]] + We[t[e + 1]] + We[t[e + 2]] + We[t[e + 3]] + "-" + We[t[e + 4]] + We[t[e + 5]] + "-" + We[t[e + 6]] + We[t[e + 7]] + "-" + We[t[e + 8]] + We[t[e + 9]] + "-" + We[t[e + 10]] + We[t[e + 11]] + We[t[e + 12]] + We[t[e + 13]] + We[t[e + 14]] + We[t[e + 15]]).toLowerCase();
}
let si;
const Vh = new Uint8Array(16);
function qh() {
  if (!si) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    si = crypto.getRandomValues.bind(crypto);
  }
  return si(Vh);
}
const zh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Jr = { randomUUID: zh };
function Xh(t, e, n) {
  var r;
  if (Jr.randomUUID && !t)
    return Jr.randomUUID();
  t = t || {};
  const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? qh();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, jh(i);
}
function xr(t) {
  let e, n, i, r, a, o;
  return {
    c() {
      e = K("div"), n = K("div"), i = K("div"), r = Q(), a = K("span"), o = Pe(
        /*message*/
        t[1]
      ), U(i, "class", "loading-spinner svelte-quxj5m"), U(a, "class", "loading-message svelte-quxj5m"), U(n, "class", "loading-spinner-container svelte-quxj5m"), U(e, "class", "overlay svelte-quxj5m");
    },
    m(l, s) {
      P(l, e, s), Z(e, n), Z(n, i), Z(n, r), Z(n, a), Z(a, o);
    },
    p(l, s) {
      s & /*message*/
      2 && Ge(
        o,
        /*message*/
        l[1]
      );
    },
    d(l) {
      l && B(e);
    }
  };
}
function Wh(t) {
  let e, n = !/*loadingDone*/
  t[0] && xr(t);
  return {
    c() {
      e = K("div"), n && n.c();
    },
    m(i, r) {
      P(i, e, r), n && n.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? n && (n.d(1), n = null) : n ? n.p(i, r) : (n = xr(i), n.c(), n.m(e, null));
    },
    i: Oe,
    o: Oe,
    d(i) {
      i && B(e), n && n.d();
    }
  };
}
function Zh(t, e, n) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return t.$$set = (a) => {
    "loadingDone" in a && n(0, i = a.loadingDone), "message" in a && n(1, r = a.message);
  }, [i, r];
}
class Sl extends de {
  constructor(e) {
    super(), ce(this, e, Zh, Wh, ue, { loadingDone: 0, message: 1 });
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
var at = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, ut = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, dn = {
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
var Kh = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return at;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ut;
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
      var n = this;
      this.determinate = !this.adapter.hasClass(at.INDETERMINATE_CLASS), this.adapter.addClass(at.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, a;
        if (!n.determinate)
          try {
            for (var o = Qe(i), l = o.next(); !l.done; l = o.next()) {
              var s = l.value;
              s.contentRect && n.calculateAndSetDimensions(s.contentRect.width);
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              l && !l.done && (a = o.return) && a.call(o);
            } finally {
              if (r)
                throw r.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(at.INDETERMINATE_CLASS), this.adapter.setAttribute(ut.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(ut.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(ut.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(at.INDETERMINATE_CLASS), this.adapter.removeAttribute(ut.ARIA_VALUENOW), this.adapter.removeAttribute(ut.ARIA_VALUEMAX), this.adapter.removeAttribute(ut.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(ut.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(at.CLOSED_CLASS), this.adapter.removeClass(at.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(ut.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(at.CLOSED_CLASS), this.adapter.setAttribute(ut.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(at.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(at.CLOSED_CLASS) && this.adapter.addClass(at.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(at.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(at.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var i = "scaleX(" + n + ")", r = typeof window < "u" ? Pd(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(n) {
      var i = n * 100 + "%";
      this.adapter.setBufferBarStyle(ut.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var i = n * dn.PRIMARY_HALF, r = n * dn.PRIMARY_FULL, a = n * dn.SECONDARY_QUARTER, o = n * dn.SECONDARY_HALF, l = n * dn.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, e;
  }(bt)
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
var yt = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, $r = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Pt = {
  ARIA_SELECTED: $r.ARIA_SELECTED,
  ARIA_SORT: $r.ARIA_SORT
}, lt;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(lt || (lt = {}));
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
var Yh = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      return t.call(this, x(x({}, e.defaultAdapter), n)) || this;
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
      return Xa(this, void 0, void 0, function() {
        return Oi(this, function(n) {
          switch (n.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return n.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              n.sent(), this.setHeaderRowCheckboxState(), n.label = 3;
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
    }, e.prototype.setSelectedRowIds = function(n) {
      for (var i = 0; i < this.adapter.getRowCount(); i++) {
        var r = this.adapter.getRowIdAtIndex(i), a = !1;
        r && n.indexOf(r) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(i, a), this.selectRowAtIndex(i, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var n = [], i = 0; i < this.adapter.getRowCount(); i++)
        n.push(this.adapter.getRowIdAtIndex(i));
      return n;
    }, e.prototype.getSelectedRowIds = function() {
      for (var n = [], i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.isCheckboxAtRowIndexChecked(i) && n.push(this.adapter.getRowIdAtIndex(i));
      return n;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.setRowCheckboxCheckedAtIndex(i, n), this.selectRowAtIndex(i, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(n) {
      var i = this.adapter.getRowIndexByChildElement(n.target);
      if (i !== -1) {
        var r = this.adapter.isCheckboxAtRowIndexChecked(i);
        this.selectRowAtIndex(i, r), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(i);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: i, selected: r });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var i = n.columnId, r = n.columnIndex, a = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== r && (this.adapter.removeClassNameByHeaderCellIndex(o, yt.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, yt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Pt.ARIA_SORT, lt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, lt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, yt.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(r, Pt.ARIA_SORT), s = lt.NONE;
      l === lt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, yt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Pt.ARIA_SORT, lt.DESCENDING), s = lt.DESCENDING) : l === lt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, yt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Pt.ARIA_SORT, lt.ASCENDING), s = lt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, Pt.ARIA_SORT, lt.ASCENDING), s = lt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, s), this.adapter.notifySortAction({
        columnId: i,
        columnIndex: r,
        headerCell: a,
        sortValue: s
      });
    }, e.prototype.handleRowClick = function(n) {
      var i = n.rowId, r = n.row;
      this.adapter.notifyRowClick({
        rowId: i,
        row: r
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), i = this.adapter.getTableContainerHeight() - n, r = n;
      this.adapter.setProgressIndicatorStyles({
        height: i + "px",
        top: r + "px"
      }), this.adapter.addClass(yt.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(yt.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, i) {
      i ? (this.adapter.addClassAtRowIndex(n, yt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Pt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, yt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Pt.ARIA_SELECTED, "false"));
    }, e;
  }(bt)
);
const Qh = (t) => ({}), ea = (t) => ({}), Jh = (t) => ({}), ta = (t) => ({});
function na(t) {
  let e, n, i, r, a;
  const o = (
    /*#slots*/
    t[36].progress
  ), l = ae(
    o,
    t,
    /*$$scope*/
    t[35],
    ta
  );
  return {
    c() {
      e = K("div"), n = K("div"), i = Q(), l && l.c(), U(n, "class", "mdc-data-table__scrim"), U(e, "class", "mdc-data-table__progress-indicator"), U(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        t[13]
      ).map(ia).join(" "));
    },
    m(s, u) {
      P(s, e, u), Z(e, n), Z(e, i), l && l.m(e, null), a = !0;
    },
    p(s, u) {
      l && l.p && (!a || u[1] & /*$$scope*/
      16) && oe(
        l,
        o,
        s,
        /*$$scope*/
        s[35],
        a ? le(
          o,
          /*$$scope*/
          s[35],
          u,
          Jh
        ) : se(
          /*$$scope*/
          s[35]
        ),
        ta
      ), (!a || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        s[13]
      ).map(ia).join(" "))) && U(e, "style", r);
    },
    i(s) {
      a || (S(l, s), a = !0);
    },
    o(s) {
      I(l, s), a = !1;
    },
    d(s) {
      s && B(e), l && l.d(s);
    }
  };
}
function xh(t) {
  let e, n, i, r, a, o, l, s, u, f, c, d, g, p;
  const b = (
    /*#slots*/
    t[36].default
  ), m = ae(
    b,
    t,
    /*$$scope*/
    t[35],
    null
  );
  let y = [
    {
      class: r = Y({
        [
          /*table$class*/
          t[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ne(
      /*$$restProps*/
      t[25],
      "table$"
    )
  ], _ = {};
  for (let C = 0; C < y.length; C += 1)
    _ = F(_, y[C]);
  let O = [
    {
      class: o = Y({
        [
          /*container$class*/
          t[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ne(
      /*$$restProps*/
      t[25],
      "container$"
    )
  ], A = {};
  for (let C = 0; C < O.length; C += 1)
    A = F(A, O[C]);
  let D = (
    /*$$slots*/
    t[24].progress && na(t)
  );
  const M = (
    /*#slots*/
    t[36].paginate
  ), h = ae(
    M,
    t,
    /*$$scope*/
    t[35],
    ea
  );
  let R = [
    {
      class: f = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": (
          /*stickyHeader*/
          t[2]
        ),
        .../*internalClasses*/
        t[12]
      })
    },
    Ht(
      /*$$restProps*/
      t[25],
      ["container$", "table$"]
    )
  ], q = {};
  for (let C = 0; C < R.length; C += 1)
    q = F(q, R[C]);
  return {
    c() {
      e = K("div"), n = K("div"), i = K("table"), m && m.c(), s = Q(), D && D.c(), u = Q(), h && h.c(), ne(i, _), ne(n, A), ne(e, q);
    },
    m(C, v) {
      P(C, e, v), Z(e, n), Z(n, i), m && m.m(i, null), t[37](n), Z(e, s), D && D.m(e, null), Z(e, u), h && h.m(e, null), t[38](e), d = !0, g || (p = [
        te(a = He.call(
          null,
          i,
          /*table$use*/
          t[5]
        )),
        te(l = He.call(
          null,
          n,
          /*container$use*/
          t[3]
        )),
        te(c = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[15].call(null, e)
        ),
        $(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          t[39]
        ),
        $(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          t[19]
        ),
        $(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          t[40]
        ),
        $(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          t[20]
        ),
        $(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          t[41]
        ),
        $(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          t[42]
        ),
        $(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          t[22]
        ),
        $(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          t[23]
        ),
        $(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          t[21]
        )
      ], g = !0);
    },
    p(C, v) {
      m && m.p && (!d || v[1] & /*$$scope*/
      16) && oe(
        m,
        b,
        C,
        /*$$scope*/
        C[35],
        d ? le(
          b,
          /*$$scope*/
          C[35],
          v,
          null
        ) : se(
          /*$$scope*/
          C[35]
        ),
        null
      ), ne(i, _ = fe(y, [
        (!d || v[0] & /*table$class*/
        64 && r !== (r = Y({
          [
            /*table$class*/
            C[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        v[0] & /*$$restProps*/
        33554432 && Ne(
          /*$$restProps*/
          C[25],
          "table$"
        )
      ])), a && me(a.update) && v[0] & /*table$use*/
      32 && a.update.call(
        null,
        /*table$use*/
        C[5]
      ), ne(n, A = fe(O, [
        (!d || v[0] & /*container$class*/
        16 && o !== (o = Y({
          [
            /*container$class*/
            C[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: o },
        v[0] & /*$$restProps*/
        33554432 && Ne(
          /*$$restProps*/
          C[25],
          "container$"
        )
      ])), l && me(l.update) && v[0] & /*container$use*/
      8 && l.update.call(
        null,
        /*container$use*/
        C[3]
      ), /*$$slots*/
      C[24].progress ? D ? (D.p(C, v), v[0] & /*$$slots*/
      16777216 && S(D, 1)) : (D = na(C), D.c(), S(D, 1), D.m(e, u)) : D && (ye(), I(D, 1, 1, () => {
        D = null;
      }), Ae()), h && h.p && (!d || v[1] & /*$$scope*/
      16) && oe(
        h,
        M,
        C,
        /*$$scope*/
        C[35],
        d ? le(
          M,
          /*$$scope*/
          C[35],
          v,
          Qh
        ) : se(
          /*$$scope*/
          C[35]
        ),
        ea
      ), ne(e, q = fe(R, [
        (!d || v[0] & /*className, stickyHeader, internalClasses*/
        4102 && f !== (f = Y({
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
        }))) && { class: f },
        v[0] & /*$$restProps*/
        33554432 && Ht(
          /*$$restProps*/
          C[25],
          ["container$", "table$"]
        )
      ])), c && me(c.update) && v[0] & /*use*/
      1 && c.update.call(
        null,
        /*use*/
        C[0]
      );
    },
    i(C) {
      d || (S(m, C), S(D), S(h, C), d = !0);
    },
    o(C) {
      I(m, C), I(D), I(h, C), d = !1;
    },
    d(C) {
      C && B(e), m && m.d(C), t[37](null), D && D.d(), h && h.d(C), t[38](null), g = !1, Ee(p);
    }
  };
}
const ia = ([t, e]) => `${t}: ${e};`;
function $h(t, e, n) {
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
  let r = re(e, i), a, o, l, { $$slots: s = {}, $$scope: u } = e;
  const f = Ma(s), { closest: c } = Ri, d = Ue(we());
  let { use: g = [] } = e, { class: p = "" } = e, { stickyHeader: b = !1 } = e, { sortable: m = !1 } = e, { sort: y = null } = e, { sortDirection: _ = "ascending" } = e, { sortAscendingAriaLabel: O = "sorted, ascending" } = e, { sortDescendingAriaLabel: A = "sorted, descending" } = e, { container$use: D = [] } = e, { container$class: M = "" } = e, { table$use: h = [] } = e, { table$class: R = "" } = e, q, C, v, T, H, X = {}, ie = { height: "auto", top: "initial" }, he = Re("SMUI:addLayoutListener"), J, k = !1, E = it(!1);
  nt(t, E, (L) => n(34, a = L));
  let z = it(y);
  nt(t, z, (L) => n(45, l = L));
  let pe = it(_);
  nt(t, pe, (L) => n(44, o = L)), De("SMUI:checkbox:context", "data-table"), De("SMUI:linear-progress:context", "data-table"), De("SMUI:linear-progress:closed", E), De("SMUI:data-table:sortable", m), De("SMUI:data-table:sort", z), De("SMUI:data-table:sortDirection", pe), De("SMUI:data-table:sortAscendingAriaLabel", O), De("SMUI:data-table:sortDescendingAriaLabel", A), he && (J = he(ze));
  let Ie;
  Je(() => (n(7, C = new Yh({
    addClass: Ye,
    removeClass: Fe,
    getHeaderCellElements: () => {
      var L;
      return (L = T == null ? void 0 : T.cells.map((V) => V.element)) !== null && L !== void 0 ? L : [];
    },
    getHeaderCellCount: () => {
      var L;
      return (L = T == null ? void 0 : T.cells.length) !== null && L !== void 0 ? L : 0;
    },
    getAttributeByHeaderCellIndex: (L, V) => {
      var Se;
      return (Se = T == null ? void 0 : T.orderedCells[L].getAttr(V)) !== null && Se !== void 0 ? Se : null;
    },
    setAttributeByHeaderCellIndex: (L, V, Se) => {
      T == null || T.orderedCells[L].addAttr(V, Se);
    },
    setClassNameByHeaderCellIndex: (L, V) => {
      T == null || T.orderedCells[L].addClass(V);
    },
    removeClassNameByHeaderCellIndex: (L, V) => {
      T == null || T.orderedCells[L].removeClass(V);
    },
    notifySortAction: (L) => {
      n(26, y = L.columnId), n(27, _ = L.sortValue), ve(rt(), "SMUIDataTable:sorted", L, void 0, !0);
    },
    getTableContainerHeight: () => v.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const L = rt().querySelector(".mdc-data-table__header-row");
      if (!L)
        throw new Error("MDCDataTable: Table header element not found.");
      return L.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (L) => {
      n(13, ie = L);
    },
    addClassAtRowIndex: (L, V) => {
      H == null || H.orderedRows[L].addClass(V);
    },
    getRowCount: () => {
      var L;
      return (L = H == null ? void 0 : H.rows.length) !== null && L !== void 0 ? L : 0;
    },
    getRowElements: () => {
      var L;
      return (L = H == null ? void 0 : H.rows.map((V) => V.element)) !== null && L !== void 0 ? L : [];
    },
    getRowIdAtIndex: (L) => {
      var V;
      return (V = H == null ? void 0 : H.orderedRows[L].rowId) !== null && V !== void 0 ? V : null;
    },
    getRowIndexByChildElement: (L) => {
      var V;
      return (V = H == null ? void 0 : H.orderedRows.map((Se) => Se.element).indexOf(c(L, ".mdc-data-table__row"))) !== null && V !== void 0 ? V : -1;
    },
    getSelectedRowCount: () => {
      var L;
      return (L = H == null ? void 0 : H.rows.filter((V) => V.selected).length) !== null && L !== void 0 ? L : 0;
    },
    isCheckboxAtRowIndexChecked: (L) => {
      const V = H == null ? void 0 : H.orderedRows[L].checkbox;
      return V ? V.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const L = T == null ? void 0 : T.checkbox;
      return L ? L.checked : !1;
    },
    isRowsSelectable: () => !!rt().querySelector(".mdc-data-table__row-checkbox") || !!rt().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (L) => {
      const V = H == null ? void 0 : H.orderedRows[L.rowIndex];
      V && ve(
        rt(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: V.element,
          rowId: V.rowId,
          rowIndex: L.rowIndex,
          selected: L.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      ot(!1), ve(rt(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      ot(!1), ve(rt(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (L) => {
      ve(rt(), "SMUIDataTable:rowClick", L, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (L, V) => {
      H == null || H.orderedRows[L].removeClass(V);
    },
    setAttributeAtRowIndex: (L, V, Se) => {
      H == null || H.orderedRows[L].addAttr(V, Se);
    },
    setHeaderRowCheckboxChecked: (L) => {
      const V = T == null ? void 0 : T.checkbox;
      V && (V.checked = L);
    },
    setHeaderRowCheckboxIndeterminate: ot,
    setRowCheckboxCheckedAtIndex: (L, V) => {
      const Se = H == null ? void 0 : H.orderedRows[L].checkbox;
      Se && (Se.checked = V);
    },
    setSortStatusLabelByHeaderCellIndex: (L, V) => {
    }
    // Handled automatically.
  })), C.init(), C.layout(), n(14, k = !0), () => {
    C.destroy();
  })), an(() => {
    J && J();
  });
  function Xe(L) {
    n(10, T = L.detail);
  }
  function Ke(L) {
    n(11, H = L.detail);
  }
  function Ce(L) {
    C && C.handleRowCheckboxChange(L);
  }
  function Ye(L) {
    X[L] || n(12, X[L] = !0, X);
  }
  function Fe(L) {
    (!(L in X) || X[L]) && n(12, X[L] = !1, X);
  }
  function ot(L) {
    const V = T == null ? void 0 : T.checkbox;
    V && (V.indeterminate = L);
  }
  function st(L) {
    if (!C || !L.detail.target)
      return;
    const V = c(L.detail.target, ".mdc-data-table__header-cell--with-sort");
    V && W(V);
  }
  function It(L) {
    if (!C || !L.detail.target)
      return;
    const V = c(L.detail.target, ".mdc-data-table__row");
    V && C && C.handleRowClick({ rowId: L.detail.rowId, row: V });
  }
  function W(L) {
    var V, Se;
    const ht = (V = T == null ? void 0 : T.orderedCells) !== null && V !== void 0 ? V : [], un = ht.map((Sn) => Sn.element).indexOf(L);
    if (un === -1)
      return;
    const En = (Se = ht[un].columnId) !== null && Se !== void 0 ? Se : null;
    C.handleSortAction({ columnId: En, columnIndex: un, headerCell: L });
  }
  function ze() {
    return C.layout();
  }
  function rt() {
    return q;
  }
  function dt(L) {
    ee[L ? "unshift" : "push"](() => {
      v = L, n(9, v);
    });
  }
  function $e(L) {
    ee[L ? "unshift" : "push"](() => {
      q = L, n(8, q);
    });
  }
  const Lt = () => C && k && C.layout(), _t = () => n(10, T = void 0), Dt = () => n(11, H = void 0), sn = () => C && C.handleHeaderRowCheckboxChange();
  return t.$$set = (L) => {
    e = F(F({}, e), Me(L)), n(25, r = re(e, i)), "use" in L && n(0, g = L.use), "class" in L && n(1, p = L.class), "stickyHeader" in L && n(2, b = L.stickyHeader), "sortable" in L && n(28, m = L.sortable), "sort" in L && n(26, y = L.sort), "sortDirection" in L && n(27, _ = L.sortDirection), "sortAscendingAriaLabel" in L && n(29, O = L.sortAscendingAriaLabel), "sortDescendingAriaLabel" in L && n(30, A = L.sortDescendingAriaLabel), "container$use" in L && n(3, D = L.container$use), "container$class" in L && n(4, M = L.container$class), "table$use" in L && n(5, h = L.table$use), "table$class" in L && n(6, R = L.table$class), "$$scope" in L && n(35, u = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sort*/
    67108864 && Ot(z, l = y, l), t.$$.dirty[0] & /*sortDirection*/
    134217728 && Ot(pe, o = _, o), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && f.progress && C && Ie !== a && (n(33, Ie = a), a ? C.hideProgress() : C.showProgress());
  }, [
    g,
    p,
    b,
    D,
    M,
    h,
    R,
    C,
    q,
    v,
    T,
    H,
    X,
    ie,
    k,
    d,
    E,
    z,
    pe,
    Xe,
    Ke,
    Ce,
    st,
    It,
    f,
    r,
    y,
    _,
    m,
    O,
    A,
    ze,
    rt,
    Ie,
    a,
    u,
    s,
    dt,
    $e,
    Lt,
    _t,
    Dt,
    sn
  ];
}
class em extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      $h,
      xh,
      ue,
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
function tm(t) {
  let e, n, i, r, a;
  const o = (
    /*#slots*/
    t[10].default
  ), l = ae(
    o,
    t,
    /*$$scope*/
    t[9],
    null
  );
  let s = [
    /*$$restProps*/
    t[7]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = F(u, s[f]);
  return {
    c() {
      e = K("thead"), l && l.c(), ne(e, u);
    },
    m(f, c) {
      P(f, e, c), l && l.m(e, null), t[11](e), i = !0, r || (a = [
        te(n = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        $(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[4]
        ),
        $(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[12]
        ),
        $(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          t[5]
        ),
        $(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          t[6]
        )
      ], r = !0);
    },
    p(f, [c]) {
      l && l.p && (!i || c & /*$$scope*/
      512) && oe(
        l,
        o,
        f,
        /*$$scope*/
        f[9],
        i ? le(
          o,
          /*$$scope*/
          f[9],
          c,
          null
        ) : se(
          /*$$scope*/
          f[9]
        ),
        null
      ), ne(e, u = fe(s, [c & /*$$restProps*/
      128 && /*$$restProps*/
      f[7]])), n && me(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (S(l, f), i = !0);
    },
    o(f) {
      I(l, f), i = !1;
    },
    d(f) {
      f && B(e), l && l.d(f), t[11](null), r = !1, Ee(a);
    }
  };
}
function nm(t, e, n) {
  const i = ["use", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, u, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  De("SMUI:data-table:row:header", !0), Je(() => {
    const A = {
      get cells() {
        return c;
      },
      get orderedCells() {
        return m();
      },
      get checkbox() {
        return f;
      }
    };
    return ve(y(), "SMUIDataTableHeader:mount", A), () => {
      ve(y(), "SMUIDataTableHeader:unmount", A);
    };
  });
  function g(A) {
    n(2, f = A.detail);
  }
  function p(A) {
    c.push(A.detail), d.set(A.detail.element, A.detail), A.stopPropagation();
  }
  function b(A) {
    const D = c.indexOf(A.detail);
    D !== -1 && (c.splice(D, 1), c = c), d.delete(A.detail.element), A.stopPropagation();
  }
  function m() {
    return [...y().querySelectorAll(".mdc-data-table__header-cell")].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_header_cell_accessor);
  }
  function y() {
    return u;
  }
  function _(A) {
    ee[A ? "unshift" : "push"](() => {
      u = A, n(1, u);
    });
  }
  const O = () => n(2, f = void 0);
  return t.$$set = (A) => {
    e = F(F({}, e), Me(A)), n(7, r = re(e, i)), "use" in A && n(0, s = A.use), "$$scope" in A && n(9, o = A.$$scope);
  }, [
    s,
    u,
    f,
    l,
    g,
    p,
    b,
    r,
    y,
    o,
    a,
    _,
    O
  ];
}
class im extends de {
  constructor(e) {
    super(), ce(this, e, nm, tm, ue, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function rm(t) {
  let e, n, i, r, a, o;
  const l = (
    /*#slots*/
    t[9].default
  ), s = ae(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__content": !0
      })
    },
    /*$$restProps*/
    t[6]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = F(f, u[c]);
  return {
    c() {
      e = K("tbody"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[10](e), r = !0, a || (o = [
        te(i = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        $(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          t[4]
        ),
        $(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          t[5]
        )
      ], a = !0);
    },
    p(c, [d]) {
      s && s.p && (!r || d & /*$$scope*/
      256) && oe(
        s,
        l,
        c,
        /*$$scope*/
        c[8],
        r ? le(
          l,
          /*$$scope*/
          c[8],
          d,
          null
        ) : se(
          /*$$scope*/
          c[8]
        ),
        null
      ), ne(e, f = fe(u, [
        (!r || d & /*className*/
        2 && n !== (n = Y({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: n },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (S(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[10](null), a = !1, Ee(o);
    }
  };
}
function am(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  De("SMUI:data-table:row:header", !1), Je(() => {
    const _ = {
      get rows() {
        return c;
      },
      get orderedRows() {
        return b();
      }
    };
    return ve(m(), "SMUIDataTableBody:mount", _), () => {
      ve(m(), "SMUIDataTableBody:unmount", _);
    };
  });
  function g(_) {
    c.push(_.detail), d.set(_.detail.element, _.detail), _.stopPropagation();
  }
  function p(_) {
    const O = c.indexOf(_.detail);
    O !== -1 && (c.splice(O, 1), c = c), d.delete(_.detail.element), _.stopPropagation();
  }
  function b() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((_) => d.get(_)).filter((_) => _ && _._smui_data_table_row_accessor);
  }
  function m() {
    return f;
  }
  function y(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, n(2, f);
    });
  }
  return t.$$set = (_) => {
    e = F(F({}, e), Me(_)), n(6, r = re(e, i)), "use" in _ && n(0, s = _.use), "class" in _ && n(1, u = _.class), "$$scope" in _ && n(8, o = _.$$scope);
  }, [
    s,
    u,
    f,
    l,
    g,
    p,
    r,
    m,
    o,
    a,
    y
  ];
}
class lm extends de {
  constructor(e) {
    super(), ce(this, e, am, rm, ue, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function om(t) {
  let e, n, i, r, a, o, l;
  const s = (
    /*#slots*/
    t[15].default
  ), u = ae(
    s,
    t,
    /*$$scope*/
    t[14],
    null
  );
  let f = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__header-row": (
          /*header*/
          t[7]
        ),
        "mdc-data-table__row": !/*header*/
        t[7],
        "mdc-data-table__row--selected": !/*header*/
        t[7] && /*checkbox*/
        t[3] && /*checkbox*/
        t[3].checked,
        .../*internalClasses*/
        t[4]
      })
    },
    {
      "aria-selected": i = /*checkbox*/
      t[3] ? (
        /*checkbox*/
        t[3].checked ? "true" : "false"
      ) : void 0
    },
    /*internalAttrs*/
    t[5],
    /*$$restProps*/
    t[11]
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = F(c, f[d]);
  return {
    c() {
      e = K("tr"), u && u.c(), ne(e, c);
    },
    m(d, g) {
      P(d, e, g), u && u.m(e, null), t[16](e), a = !0, o || (l = [
        te(r = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[6].call(null, e)
        ),
        $(
          e,
          "click",
          /*click_handler*/
          t[17]
        ),
        $(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[8]
        ),
        $(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[18]
        )
      ], o = !0);
    },
    p(d, [g]) {
      u && u.p && (!a || g & /*$$scope*/
      16384) && oe(
        u,
        s,
        d,
        /*$$scope*/
        d[14],
        a ? le(
          s,
          /*$$scope*/
          d[14],
          g,
          null
        ) : se(
          /*$$scope*/
          d[14]
        ),
        null
      ), ne(e, c = fe(f, [
        (!a || g & /*className, checkbox, internalClasses*/
        26 && n !== (n = Y({
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
        }))) && { class: n },
        (!a || g & /*checkbox*/
        8 && i !== (i = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": i },
        g & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        g & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), r && me(r.update) && g & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      a || (S(u, d), a = !0);
    },
    o(d) {
      I(u, d), a = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), t[16](null), o = !1, Ee(l);
    }
  };
}
let sm = 0;
function um(t, e, n) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, { class: u = "" } = e, { rowId: f = "SMUI-data-table-row-" + sm++ } = e, c, d, g = {}, p = {}, b = Re("SMUI:data-table:row:header");
  Je(() => {
    const v = b ? {
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
        var T;
        return (T = d && d.checked) !== null && T !== void 0 ? T : !1;
      },
      addClass: y,
      removeClass: _,
      getAttr: O,
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return h();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return f;
      },
      get selected() {
        var T;
        return (T = d && d.checked) !== null && T !== void 0 ? T : !1;
      },
      addClass: y,
      removeClass: _,
      getAttr: O,
      addAttr: A
    };
    return ve(h(), "SMUIDataTableRow:mount", v), () => {
      ve(h(), "SMUIDataTableRow:unmount", v);
    };
  });
  function m(v) {
    n(3, d = v.detail);
  }
  function y(v) {
    g[v] || n(4, g[v] = !0, g);
  }
  function _(v) {
    (!(v in g) || g[v]) && n(4, g[v] = !1, g);
  }
  function O(v) {
    var T;
    return v in p ? (T = p[v]) !== null && T !== void 0 ? T : null : h().getAttribute(v);
  }
  function A(v, T) {
    p[v] !== T && n(5, p[v] = T, p);
  }
  function D(v) {
    ve(h(), "SMUIDataTableHeader:click", v);
  }
  function M(v) {
    ve(h(), "SMUIDataTableRow:click", { rowId: f, target: v.target });
  }
  function h() {
    return c;
  }
  function R(v) {
    ee[v ? "unshift" : "push"](() => {
      c = v, n(2, c);
    });
  }
  const q = (v) => b ? D(v) : M(v), C = () => n(3, d = void 0);
  return t.$$set = (v) => {
    e = F(F({}, e), Me(v)), n(11, r = re(e, i)), "use" in v && n(0, s = v.use), "class" in v && n(1, u = v.class), "rowId" in v && n(12, f = v.rowId), "$$scope" in v && n(14, o = v.$$scope);
  }, [
    s,
    u,
    c,
    d,
    g,
    p,
    l,
    b,
    m,
    D,
    M,
    r,
    f,
    h,
    o,
    a,
    R,
    q,
    C
  ];
}
class Cl extends de {
  constructor(e) {
    super(), ce(this, e, um, om, ue, {
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
function fm(t) {
  let e, n, i, r, a, o;
  const l = (
    /*#slots*/
    t[22].default
  ), s = ae(
    l,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__cell": !0,
        "mdc-data-table__cell--numeric": (
          /*numeric*/
          t[2]
        ),
        "mdc-data-table__cell--checkbox": (
          /*checkbox*/
          t[3]
        ),
        .../*internalClasses*/
        t[7]
      })
    },
    /*internalAttrs*/
    t[8],
    /*$$restProps*/
    t[19]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = F(f, u[c]);
  return {
    c() {
      e = K("td"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[25](e), r = !0, a || (o = [
        te(i = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        $(
          e,
          "change",
          /*change_handler_1*/
          t[26]
        )
      ], a = !0);
    },
    p(c, d) {
      s && s.p && (!r || d & /*$$scope*/
      2097152) && oe(
        s,
        l,
        c,
        /*$$scope*/
        c[21],
        r ? le(
          l,
          /*$$scope*/
          c[21],
          d,
          null
        ) : se(
          /*$$scope*/
          c[21]
        ),
        null
      ), ne(e, f = fe(u, [
        (!r || d & /*className, numeric, checkbox, internalClasses*/
        142 && n !== (n = Y({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-data-table__cell": !0,
          "mdc-data-table__cell--numeric": (
            /*numeric*/
            c[2]
          ),
          "mdc-data-table__cell--checkbox": (
            /*checkbox*/
            c[3]
          ),
          .../*internalClasses*/
          c[7]
        }))) && { class: n },
        d & /*internalAttrs*/
        256 && /*internalAttrs*/
        c[8],
        d & /*$$restProps*/
        524288 && /*$$restProps*/
        c[19]
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (S(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[25](null), a = !1, Ee(o);
    }
  };
}
function cm(t) {
  let e, n, i, r, a, o, l, s, u;
  const f = [hm, dm], c = [];
  function d(b, m) {
    return (
      /*sortable*/
      b[5] ? 0 : 1
    );
  }
  n = d(t), i = c[n] = f[n](t);
  let g = [
    {
      class: r = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__header-cell": !0,
        "mdc-data-table__header-cell--numeric": (
          /*numeric*/
          t[2]
        ),
        "mdc-data-table__header-cell--checkbox": (
          /*checkbox*/
          t[3]
        ),
        "mdc-data-table__header-cell--with-sort": (
          /*sortable*/
          t[5]
        ),
        "mdc-data-table__header-cell--sorted": (
          /*sortable*/
          t[5] && /*$sort*/
          t[9] === /*columnId*/
          t[4]
        ),
        .../*internalClasses*/
        t[7]
      })
    },
    { role: "columnheader" },
    { scope: "col" },
    { "data-column-id": (
      /*columnId*/
      t[4]
    ) },
    {
      "aria-sort": a = /*sortable*/
      t[5] ? (
        /*$sort*/
        t[9] === /*columnId*/
        t[4] ? (
          /*$sortDirection*/
          t[10]
        ) : "none"
      ) : void 0
    },
    /*internalAttrs*/
    t[8],
    /*$$restProps*/
    t[19]
  ], p = {};
  for (let b = 0; b < g.length; b += 1)
    p = F(p, g[b]);
  return {
    c() {
      e = K("th"), i.c(), ne(e, p);
    },
    m(b, m) {
      P(b, e, m), c[n].m(e, null), t[23](e), l = !0, s || (u = [
        te(o = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        $(
          e,
          "change",
          /*change_handler*/
          t[24]
        )
      ], s = !0);
    },
    p(b, m) {
      let y = n;
      n = d(b), n === y ? c[n].p(b, m) : (ye(), I(c[y], 1, 1, () => {
        c[y] = null;
      }), Ae(), i = c[n], i ? i.p(b, m) : (i = c[n] = f[n](b), i.c()), S(i, 1), i.m(e, null)), ne(e, p = fe(g, [
        (!l || m & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && r !== (r = Y({
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
        (!l || m & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          b[4]
        ) },
        (!l || m & /*sortable, $sort, columnId, $sortDirection*/
        1584 && a !== (a = /*sortable*/
        b[5] ? (
          /*$sort*/
          b[9] === /*columnId*/
          b[4] ? (
            /*$sortDirection*/
            b[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": a },
        m & /*internalAttrs*/
        256 && /*internalAttrs*/
        b[8],
        m & /*$$restProps*/
        524288 && /*$$restProps*/
        b[19]
      ])), o && me(o.update) && m & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      l || (S(i), l = !0);
    },
    o(b) {
      I(i), l = !1;
    },
    d(b) {
      b && B(e), c[n].d(), t[23](null), s = !1, Ee(u);
    }
  };
}
function dm(t) {
  let e;
  const n = (
    /*#slots*/
    t[22].default
  ), i = ae(
    n,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, a) {
      i && i.m(r, a), e = !0;
    },
    p(r, a) {
      i && i.p && (!e || a & /*$$scope*/
      2097152) && oe(
        i,
        n,
        r,
        /*$$scope*/
        r[21],
        e ? le(
          n,
          /*$$scope*/
          r[21],
          a,
          null
        ) : se(
          /*$$scope*/
          r[21]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function hm(t) {
  let e, n, i, r = (
    /*$sort*/
    (t[9] === /*columnId*/
    t[4] ? (
      /*$sortDirection*/
      t[10] === "ascending" ? (
        /*sortAscendingAriaLabel*/
        t[15]
      ) : (
        /*sortDescendingAriaLabel*/
        t[16]
      )
    ) : "") + ""
  ), a, o, l;
  const s = (
    /*#slots*/
    t[22].default
  ), u = ae(
    s,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = K("div"), u && u.c(), n = Q(), i = K("div"), a = Pe(r), U(i, "class", "mdc-data-table__sort-status-label"), U(i, "aria-hidden", "true"), U(i, "id", o = /*columnId*/
      t[4] + "-status-label"), U(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(f, c) {
      P(f, e, c), u && u.m(e, null), Z(e, n), Z(e, i), Z(i, a), l = !0;
    },
    p(f, c) {
      u && u.p && (!l || c & /*$$scope*/
      2097152) && oe(
        u,
        s,
        f,
        /*$$scope*/
        f[21],
        l ? le(
          s,
          /*$$scope*/
          f[21],
          c,
          null
        ) : se(
          /*$$scope*/
          f[21]
        ),
        null
      ), (!l || c & /*$sort, columnId, $sortDirection*/
      1552) && r !== (r = /*$sort*/
      (f[9] === /*columnId*/
      f[4] ? (
        /*$sortDirection*/
        f[10] === "ascending" ? (
          /*sortAscendingAriaLabel*/
          f[15]
        ) : (
          /*sortDescendingAriaLabel*/
          f[16]
        )
      ) : "") + "") && Ge(a, r), (!l || c & /*columnId*/
      16 && o !== (o = /*columnId*/
      f[4] + "-status-label")) && U(i, "id", o);
    },
    i(f) {
      l || (S(u, f), l = !0);
    },
    o(f) {
      I(u, f), l = !1;
    },
    d(f) {
      f && B(e), u && u.d(f);
    }
  };
}
function mm(t) {
  let e, n, i, r;
  const a = [cm, fm], o = [];
  function l(s, u) {
    return (
      /*header*/
      s[12] ? 0 : 1
    );
  }
  return e = l(t), n = o[e] = a[e](t), {
    c() {
      n.c(), i = Te();
    },
    m(s, u) {
      o[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      n.p(s, u);
    },
    i(s) {
      r || (S(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), o[e].d(s);
    }
  };
}
let gm = 0;
function pm(t, e, n) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = re(e, i), a, o, { $$slots: l = {}, $$scope: s } = e;
  const u = Ue(we());
  let f = Re("SMUI:data-table:row:header"), { use: c = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: p = !1 } = e, { columnId: b = f ? "SMUI-data-table-column-" + gm++ : "SMUI-data-table-unused" } = e, { sortable: m = Re("SMUI:data-table:sortable") } = e, y, _ = {}, O = {}, A = Re("SMUI:data-table:sort");
  nt(t, A, (E) => n(9, a = E));
  let D = Re("SMUI:data-table:sortDirection");
  nt(t, D, (E) => n(10, o = E));
  let M = Re("SMUI:data-table:sortAscendingAriaLabel"), h = Re("SMUI:data-table:sortDescendingAriaLabel");
  m && (De("SMUI:label:context", "data-table:sortable-header-cell"), De("SMUI:icon-button:context", "data-table:sortable-header-cell"), De("SMUI:icon-button:aria-describedby", b + "-status-label")), Je(() => {
    const E = f ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return b;
      },
      addClass: R,
      removeClass: q,
      getAttr: C,
      addAttr: v
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: R,
      removeClass: q,
      getAttr: C,
      addAttr: v
    };
    return ve(X(), "SMUIDataTableCell:mount", E), () => {
      ve(X(), "SMUIDataTableCell:unmount", E);
    };
  });
  function R(E) {
    _[E] || n(7, _[E] = !0, _);
  }
  function q(E) {
    (!(E in _) || _[E]) && n(7, _[E] = !1, _);
  }
  function C(E) {
    var z;
    return E in O ? (z = O[E]) !== null && z !== void 0 ? z : null : X().getAttribute(E);
  }
  function v(E, z) {
    O[E] !== z && n(8, O[E] = z, O);
  }
  function T(E) {
    ve(X(), "SMUIDataTableHeaderCheckbox:change", E);
  }
  function H(E) {
    ve(X(), "SMUIDataTableBodyCheckbox:change", E);
  }
  function X() {
    return y;
  }
  function ie(E) {
    ee[E ? "unshift" : "push"](() => {
      y = E, n(6, y);
    });
  }
  const he = (E) => p && T(E);
  function J(E) {
    ee[E ? "unshift" : "push"](() => {
      y = E, n(6, y);
    });
  }
  const k = (E) => p && H(E);
  return t.$$set = (E) => {
    e = F(F({}, e), Me(E)), n(19, r = re(e, i)), "use" in E && n(0, c = E.use), "class" in E && n(1, d = E.class), "numeric" in E && n(2, g = E.numeric), "checkbox" in E && n(3, p = E.checkbox), "columnId" in E && n(4, b = E.columnId), "sortable" in E && n(5, m = E.sortable), "$$scope" in E && n(21, s = E.$$scope);
  }, [
    c,
    d,
    g,
    p,
    b,
    m,
    y,
    _,
    O,
    a,
    o,
    u,
    f,
    A,
    D,
    M,
    h,
    T,
    H,
    r,
    X,
    s,
    l,
    ie,
    he,
    J,
    k
  ];
}
class ki extends de {
  constructor(e) {
    super(), ce(this, e, pm, mm, ue, {
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
const bm = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
bm.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function _m(t) {
  let e, n, i, r, a, o, l, s, u, f, c, d, g, p, b, m, y, _, O, A, D = [
    {
      class: g = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": (
          /*indeterminate*/
          t[3]
        ),
        "mdc-linear-progress--closed": (
          /*closed*/
          t[4]
        ),
        "mdc-data-table__linear-progress": (
          /*context*/
          t[14] === "data-table"
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: p = Object.entries(
        /*internalStyles*/
        t[10]
      ).map(la).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": b = 0
    },
    {
      "aria-valuemax": m = 1
    },
    {
      "aria-valuenow": y = /*indeterminate*/
      t[3] ? void 0 : (
        /*progress*/
        t[5]
      )
    },
    /*internalAttrs*/
    t[9],
    /*$$restProps*/
    t[16]
  ], M = {};
  for (let h = 0; h < D.length; h += 1)
    M = F(M, D[h]);
  return {
    c() {
      e = K("div"), n = K("div"), i = K("div"), a = Q(), o = K("div"), l = Q(), s = K("div"), u = K("span"), c = Q(), d = K("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', U(i, "class", "mdc-linear-progress__buffer-bar"), U(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        t[11]
      ).map(ra).join(" ")), U(o, "class", "mdc-linear-progress__buffer-dots"), U(n, "class", "mdc-linear-progress__buffer"), U(u, "class", "mdc-linear-progress__bar-inner"), U(s, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), U(s, "style", f = Object.entries(
        /*primaryBarStyles*/
        t[12]
      ).map(aa).join(" ")), U(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ne(e, M);
    },
    m(h, R) {
      P(h, e, R), Z(e, n), Z(n, i), Z(n, a), Z(n, o), Z(e, l), Z(e, s), Z(s, u), Z(e, c), Z(e, d), t[19](e), O || (A = [
        te(_ = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        $(
          e,
          "transitionend",
          /*transitionend_handler*/
          t[20]
        )
      ], O = !0);
    },
    p(h, [R]) {
      R & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        h[11]
      ).map(ra).join(" ")) && U(i, "style", r), R & /*primaryBarStyles*/
      4096 && f !== (f = Object.entries(
        /*primaryBarStyles*/
        h[12]
      ).map(aa).join(" ")) && U(s, "style", f), ne(e, M = fe(D, [
        R & /*className, indeterminate, closed, internalClasses*/
        282 && g !== (g = Y({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-linear-progress": !0,
          "mdc-linear-progress--indeterminate": (
            /*indeterminate*/
            h[3]
          ),
          "mdc-linear-progress--closed": (
            /*closed*/
            h[4]
          ),
          "mdc-data-table__linear-progress": (
            /*context*/
            h[14] === "data-table"
          ),
          .../*internalClasses*/
          h[8]
        })) && { class: g },
        R & /*internalStyles, style*/
        1028 && p !== (p = Object.entries(
          /*internalStyles*/
          h[10]
        ).map(la).concat([
          /*style*/
          h[2]
        ]).join(" ")) && { style: p },
        { role: "progressbar" },
        {
          "aria-valuemin": b
        },
        {
          "aria-valuemax": m
        },
        R & /*indeterminate, progress*/
        40 && y !== (y = /*indeterminate*/
        h[3] ? void 0 : (
          /*progress*/
          h[5]
        )) && {
          "aria-valuenow": y
        },
        R & /*internalAttrs*/
        512 && /*internalAttrs*/
        h[9],
        R & /*$$restProps*/
        65536 && /*$$restProps*/
        h[16]
      ])), _ && me(_.update) && R & /*use*/
      1 && _.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i: Oe,
    o: Oe,
    d(h) {
      h && B(e), t[19](null), O = !1, Ee(A);
    }
  };
}
const ra = ([t, e]) => `${t}: ${e};`, aa = ([t, e]) => `${t}: ${e};`, la = ([t, e]) => `${t}: ${e};`;
function vm(t, e, n) {
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
  let r = re(e, i), a;
  const o = Ue(we());
  let { use: l = [] } = e, { class: s = "" } = e, { style: u = "" } = e, { indeterminate: f = !1 } = e, { closed: c = !1 } = e, { progress: d = 0 } = e, { buffer: g = void 0 } = e, p, b, m = {}, y = {}, _ = {}, O = {}, A = {}, D = Re("SMUI:linear-progress:context"), M = Re("SMUI:linear-progress:closed");
  nt(t, M, (k) => n(21, a = k)), Je(() => (n(6, b = new Kh({
    addClass: R,
    forceLayout: () => {
      ie().getBoundingClientRect();
    },
    setBufferBarStyle: H,
    setPrimaryBarStyle: X,
    hasClass: h,
    removeAttribute: v,
    removeClass: q,
    setAttribute: C,
    setStyle: T,
    attachResizeObserver: (k) => {
      const E = window.ResizeObserver;
      if (E) {
        const z = new E(k);
        return z.observe(ie()), z;
      }
      return null;
    },
    getWidth: () => ie().offsetWidth
  })), b.init(), () => {
    b.destroy();
  }));
  function h(k) {
    return k in m ? m[k] : ie().classList.contains(k);
  }
  function R(k) {
    m[k] || n(8, m[k] = !0, m);
  }
  function q(k) {
    (!(k in m) || m[k]) && n(8, m[k] = !1, m);
  }
  function C(k, E) {
    y[k] !== E && n(9, y[k] = E, y);
  }
  function v(k) {
    (!(k in y) || y[k] != null) && n(9, y[k] = void 0, y);
  }
  function T(k, E) {
    _[k] != E && (E === "" || E == null ? (delete _[k], n(10, _)) : n(10, _[k] = E, _));
  }
  function H(k, E) {
    O[k] != E && (E === "" || E == null ? (delete O[k], n(11, O)) : n(11, O[k] = E, O));
  }
  function X(k, E) {
    A[k] != E && (E === "" || E == null ? (delete A[k], n(12, A)) : n(12, A[k] = E, A));
  }
  function ie() {
    return p;
  }
  function he(k) {
    ee[k ? "unshift" : "push"](() => {
      p = k, n(7, p);
    });
  }
  const J = () => b && b.handleTransitionEnd();
  return t.$$set = (k) => {
    e = F(F({}, e), Me(k)), n(16, r = re(e, i)), "use" in k && n(0, l = k.use), "class" in k && n(1, s = k.class), "style" in k && n(2, u = k.style), "indeterminate" in k && n(3, f = k.indeterminate), "closed" in k && n(4, c = k.closed), "progress" in k && n(5, d = k.progress), "buffer" in k && n(17, g = k.buffer);
  }, t.$$.update = () => {
    t.$$.dirty & /*closed*/
    16 && M && Ot(M, a = c, a), t.$$.dirty & /*instance, indeterminate*/
    72 && b && b.isDeterminate() !== !f && b.setDeterminate(!f), t.$$.dirty & /*instance, progress*/
    96 && b && b.getProgress() !== d && b.setProgress(d), t.$$.dirty & /*instance, buffer*/
    131136 && b && (g == null ? b.setBuffer(1) : b.setBuffer(g)), t.$$.dirty & /*instance, closed*/
    80 && b && (c ? b.close() : b.open());
  }, [
    l,
    s,
    u,
    f,
    c,
    d,
    b,
    p,
    m,
    y,
    _,
    O,
    A,
    o,
    D,
    M,
    r,
    g,
    ie,
    he,
    J
  ];
}
class ym extends de {
  constructor(e) {
    super(), ce(this, e, vm, _m, ue, {
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
function oa(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function sa(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i;
}
function ua(t, e, n) {
  const i = t.slice();
  return i[31] = e[n], i;
}
function fa(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[34] = e, i[35] = n, i;
}
function ca(t) {
  let e, n = (
    /*$sortColumn*/
    t[6] === /*col*/
    t[28].field && /*$sortDirection*/
    t[7] !== null && da(t)
  );
  return {
    c() {
      n && n.c(), e = Te();
    },
    m(i, r) {
      n && n.m(i, r), P(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[6] === /*col*/
      i[28].field && /*$sortDirection*/
      i[7] !== null ? n ? n.p(i, r) : (n = da(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && B(e), n && n.d(i);
    }
  };
}
function da(t) {
  let e;
  function n(a, o) {
    if (
      /*$sortDirection*/
      a[7] === "asc"
    )
      return Em;
    if (
      /*$sortDirection*/
      a[7] === "desc"
    )
      return Am;
  }
  let i = n(t), r = i && i(t);
  return {
    c() {
      r && r.c(), e = Te();
    },
    m(a, o) {
      r && r.m(a, o), P(a, e, o);
    },
    p(a, o) {
      i !== (i = n(a)) && (r && r.d(1), r = i && i(a), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(a) {
      a && B(e), r && r.d(a);
    }
  };
}
function Am(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M12 20l8-8H4l8 8z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 0 24 24"), U(e, "width", "16"), U(e, "height", "16"), U(e, "fill", "currentColor"), U(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    d(i) {
      i && B(e);
    }
  };
}
function Em(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M12 4l-8 8h16l-8-8z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 0 24 24"), U(e, "width", "16"), U(e, "height", "16"), U(e, "fill", "currentColor"), U(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    d(i) {
      i && B(e);
    }
  };
}
function ha(t) {
  let e, n, i = (
    /*col*/
    t[28].filterType === "text" && ma(t)
  ), r = (
    /*col*/
    t[28].filterType === "number" && ga(t)
  );
  return {
    c() {
      i && i.c(), e = Q(), r && r.c(), n = Te();
    },
    m(a, o) {
      i && i.m(a, o), P(a, e, o), r && r.m(a, o), P(a, n, o);
    },
    p(a, o) {
      /*col*/
      a[28].filterType === "text" ? i ? i.p(a, o) : (i = ma(a), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      a[28].filterType === "number" ? r ? r.p(a, o) : (r = ga(a), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null);
    },
    d(a) {
      a && (B(e), B(n)), i && i.d(a), r && r.d(a);
    }
  };
}
function ma(t) {
  let e, n, i, r;
  function a() {
    t[17].call(
      e,
      /*col*/
      t[28]
    );
  }
  return {
    c() {
      e = K("input"), U(e, "type", "text"), U(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), U(e, "class", "svelte-29x22x");
    },
    m(o, l) {
      P(o, e, l), xt(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      ), i || (r = [
        $(e, "input", a),
        $(
          e,
          "input",
          /*input_handler*/
          t[18]
        )
      ], i = !0);
    },
    p(o, l) {
      t = o, l[0] & /*searchInputLabel, columnDefs*/
      20 && n !== (n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`) && U(e, "placeholder", n), l[0] & /*filters, columnDefs*/
      36 && e.value !== /*filters*/
      t[5][
        /*col*/
        t[28].field
      ] && xt(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      );
    },
    d(o) {
      o && B(e), i = !1, Ee(r);
    }
  };
}
function ga(t) {
  let e, n, i, r;
  function a() {
    t[19].call(
      e,
      /*col*/
      t[28]
    );
  }
  return {
    c() {
      e = K("input"), U(e, "type", "number"), U(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), U(e, "class", "svelte-29x22x");
    },
    m(o, l) {
      P(o, e, l), xt(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      ), i || (r = [
        $(e, "input", a),
        $(
          e,
          "input",
          /*input_handler_1*/
          t[20]
        )
      ], i = !0);
    },
    p(o, l) {
      t = o, l[0] & /*searchInputLabel, columnDefs*/
      20 && n !== (n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`) && U(e, "placeholder", n), l[0] & /*filters, columnDefs*/
      36 && Pa(e.value) !== /*filters*/
      t[5][
        /*col*/
        t[28].field
      ] && xt(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      );
    },
    d(o) {
      o && B(e), i = !1, Ee(r);
    }
  };
}
function Sm(t) {
  let e, n, i, r = (
    /*col*/
    t[28].headerName + ""
  ), a, o, l, s, u = (
    /*col*/
    t[28].sortable && ca(t)
  ), f = (
    /*col*/
    t[28].filter && ha(t)
  );
  return {
    c() {
      e = K("div"), n = K("div"), i = K("span"), a = Pe(r), o = Q(), u && u.c(), l = Q(), f && f.c(), s = Q(), U(i, "class", "header-title svelte-29x22x"), U(n, "class", "cell-header svelte-29x22x"), U(e, "class", "custom-cell-container svelte-29x22x"), gn(
        e,
        "min-width",
        /*col*/
        t[28].minWidth ?? 0
      );
    },
    m(c, d) {
      P(c, e, d), Z(e, n), Z(n, i), Z(i, a), Z(n, o), u && u.m(n, null), Z(e, l), f && f.m(e, null), P(c, s, d);
    },
    p(c, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      c[28].headerName + "") && Ge(a, r), /*col*/
      c[28].sortable ? u ? u.p(c, d) : (u = ca(c), u.c(), u.m(n, null)) : u && (u.d(1), u = null), /*col*/
      c[28].filter ? f ? f.p(c, d) : (f = ha(c), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d[0] & /*columnDefs*/
      4 && gn(
        e,
        "min-width",
        /*col*/
        c[28].minWidth ?? 0
      );
    },
    d(c) {
      c && (B(e), B(s)), u && u.d(), f && f.d();
    }
  };
}
function pa(t) {
  let e, n;
  function i() {
    return (
      /*click_handler*/
      t[21](
        /*col*/
        t[28]
      )
    );
  }
  return e = new ki({
    props: {
      style: (
        /*col*/
        t[28].headerStyle
      ),
      $$slots: { default: [Sm] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", i), {
    c() {
      j(e.$$.fragment);
    },
    m(r, a) {
      N(e, r, a), n = !0;
    },
    p(r, a) {
      t = r;
      const o = {};
      a[0] & /*columnDefs*/
      4 && (o.style = /*col*/
      t[28].headerStyle), a[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | a[1] & /*$$scope*/
      32 && (o.$$scope = { dirty: a, ctx: t }), e.$set(o);
    },
    i(r) {
      n || (S(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      G(e, r);
    }
  };
}
function Cm(t) {
  let e, n, i = Rt(
    /*columnDefs*/
    t[2]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = pa(fa(t, i, o));
  const a = (o) => I(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = Te();
    },
    m(o, l) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, l);
      P(o, e, l), n = !0;
    },
    p(o, l) {
      if (l[0] & /*columnDefs, sortColumnBy, searchInputLabel, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      12532) {
        i = Rt(
          /*columnDefs*/
          o[2]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const u = fa(o, i, s);
          r[s] ? (r[s].p(u, l), S(r[s], 1)) : (r[s] = pa(u), r[s].c(), S(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (ye(), s = i.length; s < r.length; s += 1)
          a(s);
        Ae();
      }
    },
    i(o) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          S(r[l]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        I(r[l]);
      n = !1;
    },
    d(o) {
      o && B(e), Ba(r, o);
    }
  };
}
function Im(t) {
  let e, n;
  return e = new Cl({
    props: {
      class: "header-row",
      $$slots: { default: [Cm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | r[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Lm(t) {
  let e, n;
  return e = new ki({
    props: {
      numeric: (
        /*col*/
        t[28].numeric
      ),
      style: (
        /*col*/
        t[28].cellStyle
      ),
      $$slots: { default: [Rm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*columnDefs*/
      4 && (a.numeric = /*col*/
      i[28].numeric), r[0] & /*columnDefs*/
      4 && (a.style = /*col*/
      i[28].cellStyle), r[0] & /*columnDefs, $filteredData*/
      260 | r[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Om(t) {
  let e, n;
  return e = new ki({
    props: {
      $$slots: { default: [Vm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*rowActions, $filteredData*/
      264 | r[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Tm(t) {
  let e = (
    /*row*/
    (t[25][
      /*col*/
      t[28].field
    ] ?? "") + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      260 && e !== (e = /*row*/
      (i[25][
        /*col*/
        i[28].field
      ] ?? "") + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function wm(t) {
  let e = (
    /*col*/
    t[28].valueFormatter(
      /*row*/
      t[25][
        /*col*/
        t[28].field
      ]
    ) + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r[0] & /*columnDefs, $filteredData*/
      260 && e !== (e = /*col*/
      i[28].valueFormatter(
        /*row*/
        i[25][
          /*col*/
          i[28].field
        ]
      ) + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function Rm(t) {
  let e;
  function n(a, o) {
    return (
      /*col*/
      a[28].valueFormatter ? wm : Tm
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Te();
    },
    m(a, o) {
      r.m(a, o), P(a, e, o);
    },
    p(a, o) {
      i === (i = n(a)) && r ? r.p(a, o) : (r.d(1), r = i(a), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(a) {
      a && B(e), r.d(a);
    }
  };
}
function Hm(t) {
  let e, n;
  function i() {
    return (
      /*func_1*/
      t[23](
        /*action*/
        t[31],
        /*row*/
        t[25]
      )
    );
  }
  return e = new Nt({
    props: {
      class: "button",
      variant: "raised",
      callback: i,
      disabled: (
        /*action*/
        t[31].disabled(
          /*row*/
          t[25]
        )
      ),
      $$slots: { default: [jm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, a) {
      N(e, r, a), n = !0;
    },
    p(r, a) {
      t = r;
      const o = {};
      a[0] & /*rowActions, $filteredData*/
      264 && (o.callback = i), a[0] & /*rowActions, $filteredData*/
      264 && (o.disabled = /*action*/
      t[31].disabled(
        /*row*/
        t[25]
      )), a[0] & /*rowActions*/
      8 | a[1] & /*$$scope*/
      32 && (o.$$scope = { dirty: a, ctx: t }), e.$set(o);
    },
    i(r) {
      n || (S(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      G(e, r);
    }
  };
}
function km(t) {
  let e, n;
  function i() {
    return (
      /*func*/
      t[22](
        /*action*/
        t[31],
        /*row*/
        t[25]
      )
    );
  }
  return e = new hc({
    props: {
      iconComponent: (
        /*action*/
        t[31].iconComponent
      ),
      iconStyles: (
        /*action*/
        t[31].iconStyles
      ),
      callback: i,
      disabled: (
        /*action*/
        t[31].disabled(
          /*row*/
          t[25]
        )
      )
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, a) {
      N(e, r, a), n = !0;
    },
    p(r, a) {
      t = r;
      const o = {};
      a[0] & /*rowActions*/
      8 && (o.iconComponent = /*action*/
      t[31].iconComponent), a[0] & /*rowActions*/
      8 && (o.iconStyles = /*action*/
      t[31].iconStyles), a[0] & /*rowActions, $filteredData*/
      264 && (o.callback = i), a[0] & /*rowActions, $filteredData*/
      264 && (o.disabled = /*action*/
      t[31].disabled(
        /*row*/
        t[25]
      )), e.$set(o);
    },
    i(r) {
      n || (S(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      G(e, r);
    }
  };
}
function Dm(t) {
  let e, n;
  return e = new Al({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Mm(t) {
  let e, n;
  return e = new Gh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Bm(t) {
  let e, n;
  return e = new Ph({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Pm(t) {
  let e, n;
  return e = new kh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Um(t) {
  let e, n;
  return e = new Eh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Fm(t) {
  let e, n;
  return e = new _h({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Nm(t) {
  let e, n;
  return e = new Hi({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Gm(t) {
  let e, n;
  return e = new yl({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function jm(t) {
  let e, n, i, r;
  const a = [
    Gm,
    Nm,
    Fm,
    Um,
    Pm,
    Bm,
    Mm,
    Dm
  ], o = [];
  function l(s, u) {
    return (
      /*action*/
      s[31].icon === "add" ? 0 : (
        /*action*/
        s[31].icon === "cancel" ? 1 : (
          /*action*/
          s[31].icon === "download" ? 2 : (
            /*action*/
            s[31].icon === "find-in-page" ? 3 : (
              /*action*/
              s[31].icon === "remove" ? 4 : (
                /*action*/
                s[31].icon === "edit" ? 5 : (
                  /*action*/
                  s[31].icon === "delete" ? 6 : 7
                )
              )
            )
          )
        )
      )
    );
  }
  return e = l(t), n = o[e] = a[e](t), {
    c() {
      n.c(), i = Te();
    },
    m(s, u) {
      o[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = l(s), e !== f && (ye(), I(o[f], 1, 1, () => {
        o[f] = null;
      }), Ae(), n = o[e], n || (n = o[e] = a[e](s), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (S(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), o[e].d(s);
    }
  };
}
function ba(t) {
  let e, n, i, r;
  const a = [km, Hm], o = [];
  function l(s, u) {
    return (
      /*action*/
      s[31].iconComponent ? 0 : 1
    );
  }
  return e = l(t), n = o[e] = a[e](t), {
    c() {
      n.c(), i = Te();
    },
    m(s, u) {
      o[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = l(s), e === f ? o[e].p(s, u) : (ye(), I(o[f], 1, 1, () => {
        o[f] = null;
      }), Ae(), n = o[e], n ? n.p(s, u) : (n = o[e] = a[e](s), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (S(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), o[e].d(s);
    }
  };
}
function Vm(t) {
  let e, n, i = Rt(
    /*rowActions*/
    t[3]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = ba(ua(t, i, o));
  const a = (o) => I(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      e = K("div");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      U(e, "class", "cell-actions svelte-29x22x");
    },
    m(o, l) {
      P(o, e, l);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(e, null);
      n = !0;
    },
    p(o, l) {
      if (l[0] & /*rowActions, $filteredData*/
      264) {
        i = Rt(
          /*rowActions*/
          o[3]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const u = ua(o, i, s);
          r[s] ? (r[s].p(u, l), S(r[s], 1)) : (r[s] = ba(u), r[s].c(), S(r[s], 1), r[s].m(e, null));
        }
        for (ye(), s = i.length; s < r.length; s += 1)
          a(s);
        Ae();
      }
    },
    i(o) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          S(r[l]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        I(r[l]);
      n = !1;
    },
    d(o) {
      o && B(e), Ba(r, o);
    }
  };
}
function _a(t, e) {
  let n, i, r, a, o;
  const l = [Om, Lm], s = [];
  function u(f, c) {
    return (
      /*col*/
      f[28].field === "actions" ? 0 : 1
    );
  }
  return i = u(e), r = s[i] = l[i](e), {
    key: t,
    first: null,
    c() {
      n = Te(), r.c(), a = Te(), this.first = n;
    },
    m(f, c) {
      P(f, n, c), s[i].m(f, c), P(f, a, c), o = !0;
    },
    p(f, c) {
      e = f;
      let d = i;
      i = u(e), i === d ? s[i].p(e, c) : (ye(), I(s[d], 1, 1, () => {
        s[d] = null;
      }), Ae(), r = s[i], r ? r.p(e, c) : (r = s[i] = l[i](e), r.c()), S(r, 1), r.m(a.parentNode, a));
    },
    i(f) {
      o || (S(r), o = !0);
    },
    o(f) {
      I(r), o = !1;
    },
    d(f) {
      f && (B(n), B(a)), s[i].d(f);
    }
  };
}
function qm(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, a = Rt(
    /*columnDefs*/
    t[2]
  );
  const o = (l) => (
    /*col*/
    l[28].field
  );
  for (let l = 0; l < a.length; l += 1) {
    let s = sa(t, a, l), u = o(s);
    n.set(u, e[l] = _a(u, s));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = Q();
    },
    m(l, s) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, s);
      P(l, i, s), r = !0;
    },
    p(l, s) {
      s[0] & /*rowActions, $filteredData, columnDefs*/
      268 && (a = Rt(
        /*columnDefs*/
        l[2]
      ), ye(), e = ja(e, s, o, 1, l, a, n, i.parentNode, Ga, _a, i, sa), Ae());
    },
    i(l) {
      if (!r) {
        for (let s = 0; s < a.length; s += 1)
          S(e[s]);
        r = !0;
      }
    },
    o(l) {
      for (let s = 0; s < e.length; s += 1)
        I(e[s]);
      r = !1;
    },
    d(l) {
      l && B(i);
      for (let s = 0; s < e.length; s += 1)
        e[s].d(l);
    }
  };
}
function va(t, e) {
  let n, i, r;
  return i = new Cl({
    props: {
      $$slots: { default: [qm] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Te(), j(i.$$.fragment), this.first = n;
    },
    m(a, o) {
      P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      e = a;
      const l = {};
      o[0] & /*columnDefs, rowActions, $filteredData*/
      268 | o[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: o, ctx: e }), i.$set(l);
    },
    i(a) {
      r || (S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(i, a);
    }
  };
}
function zm(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, a = Rt(
    /*$filteredData*/
    t[8]
  );
  const o = (l) => (
    /*index*/
    l[27]
  );
  for (let l = 0; l < a.length; l += 1) {
    let s = oa(t, a, l), u = o(s);
    n.set(u, e[l] = va(u, s));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = Te();
    },
    m(l, s) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, s);
      P(l, i, s), r = !0;
    },
    p(l, s) {
      s[0] & /*columnDefs, rowActions, $filteredData*/
      268 && (a = Rt(
        /*$filteredData*/
        l[8]
      ), ye(), e = ja(e, s, o, 1, l, a, n, i.parentNode, Ga, va, i, oa), Ae());
    },
    i(l) {
      if (!r) {
        for (let s = 0; s < a.length; s += 1)
          S(e[s]);
        r = !0;
      }
    },
    o(l) {
      for (let s = 0; s < e.length; s += 1)
        I(e[s]);
      r = !1;
    },
    d(l) {
      l && B(i);
      for (let s = 0; s < e.length; s += 1)
        e[s].d(l);
    }
  };
}
function Xm(t) {
  let e, n, i, r;
  return e = new im({
    props: {
      $$slots: { default: [Im] },
      $$scope: { ctx: t }
    }
  }), i = new lm({
    props: {
      $$slots: { default: [zm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      const l = {};
      o[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | o[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: o, ctx: a }), e.$set(l);
      const s = {};
      o[0] & /*$filteredData, columnDefs, rowActions*/
      268 | o[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: o, ctx: a }), i.$set(s);
    },
    i(a) {
      r || (S(e.$$.fragment, a), S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(e, a), G(i, a);
    }
  };
}
function Wm(t) {
  let e, n, i;
  function r(o) {
    t[16](o);
  }
  let a = {
    indeterminate: !0,
    "aria-label": "Data is being loaded...",
    slot: "progress"
  };
  return (
    /*loadingDone*/
    t[0] !== void 0 && (a.closed = /*loadingDone*/
    t[0]), e = new ym({ props: a }), ee.push(() => tt(e, "closed", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(o, l) {
        N(e, o, l), i = !0;
      },
      p(o, l) {
        const s = {};
        !n && l[0] & /*loadingDone*/
        1 && (n = !0, s.closed = /*loadingDone*/
        o[0], et(() => n = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        I(e.$$.fragment, o), i = !1;
      },
      d(o) {
        G(e, o);
      }
    }
  );
}
function Zm(t) {
  let e, n;
  return e = new em({
    props: {
      "table$aria-label": (
        /*label*/
        t[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Wm],
        default: [Xm]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*label*/
      2 && (a["table$aria-label"] = /*label*/
      i[1]), r[0] & /*loadingDone, $filteredData, columnDefs, rowActions, searchInputLabel, filters, $sortDirection, $sortColumn*/
      509 | r[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function Km(t, e, n) {
  let i, r, a, { loadingDone: o = !0 } = e, { label: l = Xh() } = e, { columnDefs: s = [] } = e, { rowData: u = [] } = e, { store: f } = e, { rowActions: c = [] } = e, { searchInputLabel: d = "Search" } = e, g = { name: "", color: "", number: "" }, p = it([]);
  nt(t, p, (T) => n(8, a = T));
  let b = it(null);
  nt(t, b, (T) => n(6, i = T));
  let m = it(null);
  nt(t, m, (T) => n(7, r = T)), f.store.subscribe((T) => {
    n(14, u = [...T]), y();
  });
  function y() {
    let T = u.filter((H) => s.every((X) => {
      const ie = g[X.field], he = H[X.field];
      return ie ? X.filterType === "number" ? he == ie : he.toString().toLowerCase().includes(ie.toLowerCase()) : !0;
    }));
    T = _(T), p.set(T);
  }
  function _(T) {
    let H, X;
    return b.subscribe((ie) => H = ie), m.subscribe((ie) => X = ie), !H || !X ? T : T.sort((ie, he) => {
      let J = ie[H], k = he[H];
      return J == null && (J = ""), k == null && (k = ""), X === "asc" ? J.toString().localeCompare(k.toString()) : k.toString().localeCompare(J.toString());
    });
  }
  function O(T) {
    b.update((H) => {
      if (H === T)
        m.update((X) => X === "asc" ? "desc" : X === "desc" ? null : "asc");
      else
        return m.set("asc"), T;
      return T;
    }), y();
  }
  p.set(u);
  function A(T) {
    o = T, n(0, o);
  }
  function D(T) {
    g[T.field] = this.value, n(5, g);
  }
  const M = () => y();
  function h(T) {
    g[T.field] = Pa(this.value), n(5, g);
  }
  const R = () => y(), q = (T) => T.sortable && O(T.field), C = (T, H) => T.callback(H), v = (T, H) => T.callback(H);
  return t.$$set = (T) => {
    "loadingDone" in T && n(0, o = T.loadingDone), "label" in T && n(1, l = T.label), "columnDefs" in T && n(2, s = T.columnDefs), "rowData" in T && n(14, u = T.rowData), "store" in T && n(15, f = T.store), "rowActions" in T && n(3, c = T.rowActions), "searchInputLabel" in T && n(4, d = T.searchInputLabel);
  }, [
    o,
    l,
    s,
    c,
    d,
    g,
    i,
    r,
    a,
    p,
    b,
    m,
    y,
    O,
    u,
    f,
    A,
    D,
    M,
    h,
    R,
    q,
    C,
    v
  ];
}
class Ym extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      Km,
      Zm,
      ue,
      {
        loadingDone: 0,
        label: 1,
        columnDefs: 2,
        rowData: 14,
        store: 15,
        rowActions: 3,
        searchInputLabel: 4
      },
      null,
      [-1, -1]
    );
  }
}
function Qm(t) {
  let e, n, i, r, a, o;
  const l = (
    /*#slots*/
    t[9].default
  ), s = ae(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-card": !0,
        "mdc-card--outlined": (
          /*variant*/
          t[2] === "outlined"
        ),
        "smui-card--padded": (
          /*padded*/
          t[3]
        )
      })
    },
    /*$$restProps*/
    t[6]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = F(f, u[c]);
  return {
    c() {
      e = K("div"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[10](e), r = !0, a || (o = [
        te(i = He.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        te(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], a = !0);
    },
    p(c, [d]) {
      s && s.p && (!r || d & /*$$scope*/
      256) && oe(
        s,
        l,
        c,
        /*$$scope*/
        c[8],
        r ? le(
          l,
          /*$$scope*/
          c[8],
          d,
          null
        ) : se(
          /*$$scope*/
          c[8]
        ),
        null
      ), ne(e, f = fe(u, [
        (!r || d & /*className, variant, padded*/
        14 && n !== (n = Y({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-card": !0,
          "mdc-card--outlined": (
            /*variant*/
            c[2] === "outlined"
          ),
          "smui-card--padded": (
            /*padded*/
            c[3]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), i && me(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (S(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[10](null), a = !1, Ee(o);
    }
  };
}
function Jm(t, e, n) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = re(e, i), { $$slots: a = {}, $$scope: o } = e;
  const l = Ue(we());
  let { use: s = [] } = e, { class: u = "" } = e, { variant: f = "raised" } = e, { padded: c = !1 } = e, d;
  function g() {
    return d;
  }
  function p(b) {
    ee[b ? "unshift" : "push"](() => {
      d = b, n(4, d);
    });
  }
  return t.$$set = (b) => {
    e = F(F({}, e), Me(b)), n(6, r = re(e, i)), "use" in b && n(0, s = b.use), "class" in b && n(1, u = b.class), "variant" in b && n(2, f = b.variant), "padded" in b && n(3, c = b.padded), "$$scope" in b && n(8, o = b.$$scope);
  }, [
    s,
    u,
    f,
    c,
    d,
    l,
    r,
    g,
    o,
    a,
    p
  ];
}
class xm extends de {
  constructor(e) {
    super(), ce(this, e, Jm, Qm, ue, {
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
Ve({
  class: "smui-card__content",
  tag: "div"
});
Ve({
  class: "mdc-card__media-content",
  tag: "div"
});
Ve({
  class: "mdc-card__action-buttons",
  tag: "div"
});
Ve({
  class: "mdc-card__action-icons",
  tag: "div"
});
function je(t) {
  return typeof t == "function";
}
function Il(t) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ui = Il(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function ya(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Di = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, i, r, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var l = Qe(o), s = l.next(); !s.done; s = l.next()) {
              var u = s.value;
              u.remove(this);
            }
          } catch (b) {
            e = { error: b };
          } finally {
            try {
              s && !s.done && (n = l.return) && n.call(l);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          o.remove(this);
      var f = this.initialTeardown;
      if (je(f))
        try {
          f();
        } catch (b) {
          a = b instanceof ui ? b.errors : [b];
        }
      var c = this._finalizers;
      if (c) {
        this._finalizers = null;
        try {
          for (var d = Qe(c), g = d.next(); !g.done; g = d.next()) {
            var p = g.value;
            try {
              Aa(p);
            } catch (b) {
              a = a ?? [], b instanceof ui ? a = Yt(Yt([], pi(a)), pi(b.errors)) : a.push(b);
            }
          }
        } catch (b) {
          i = { error: b };
        } finally {
          try {
            g && !g.done && (r = d.return) && r.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (a)
        throw new ui(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Aa(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && ya(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && ya(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Di.EMPTY;
function Ll(t) {
  return t instanceof Di || t && "closed" in t && je(t.remove) && je(t.add) && je(t.unsubscribe);
}
function Aa(t) {
  je(t) ? t() : t.unsubscribe();
}
var $m = {
  Promise: void 0
}, eg = {
  setTimeout: function(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Yt([t, e], pi(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Ol(t) {
  eg.setTimeout(function() {
    throw t;
  });
}
function Ea() {
}
function tg(t) {
  t();
}
var Mi = function(t) {
  Ze(e, t);
  function e(n) {
    var i = t.call(this) || this;
    return i.isStopped = !1, n ? (i.destination = n, Ll(n) && n.add(i)) : i.destination = rg, i;
  }
  return e.create = function(n, i, r) {
    return new Ci(n, i, r);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
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
}(Di), ng = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (i) {
        Rn(i);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (i) {
        Rn(i);
      }
    else
      Rn(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Rn(n);
      }
  }, t;
}(), Ci = function(t) {
  Ze(e, t);
  function e(n, i, r) {
    var a = t.call(this) || this, o;
    return je(n) || !n ? o = {
      next: n ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : o = n, a.destination = new ng(o), a;
  }
  return e;
}(Mi);
function Rn(t) {
  Ol(t);
}
function ig(t) {
  throw t;
}
var rg = {
  closed: !0,
  next: Ea,
  error: ig,
  complete: Ea
}, Bi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Tl(t) {
  return t;
}
function ag(t) {
  return t.length === 0 ? Tl : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(i, r) {
      return r(i);
    }, n);
  };
}
var ct = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, i) {
    var r = this, a = og(e) ? e : new Ci(e, n, i);
    return tg(function() {
      var o = r, l = o.operator, s = o.source;
      a.add(l ? l.call(a, s) : s ? r._subscribe(a) : r._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var i = this;
    return n = Sa(n), new n(function(r, a) {
      var o = new Ci({
        next: function(l) {
          try {
            e(l);
          } catch (s) {
            a(s), o.unsubscribe();
          }
        },
        error: a,
        complete: r
      });
      i.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Bi] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return ag(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Sa(e), new e(function(i, r) {
      var a;
      n.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return r(o);
      }, function() {
        return i(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Sa(t) {
  var e;
  return (e = t ?? $m.Promise) !== null && e !== void 0 ? e : Promise;
}
function lg(t) {
  return t && je(t.next) && je(t.error) && je(t.complete);
}
function og(t) {
  return t && t instanceof Mi || lg(t) && Ll(t);
}
function sg(t) {
  return je(t == null ? void 0 : t.lift);
}
function Vt(t) {
  return function(e) {
    if (sg(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (i) {
          this.error(i);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function rn(t, e, n, i, r) {
  return new ug(t, e, n, i, r);
}
var ug = function(t) {
  Ze(e, t);
  function e(n, i, r, a, o, l) {
    var s = t.call(this, n) || this;
    return s.onFinalize = o, s.shouldUnsubscribe = l, s._next = i ? function(u) {
      try {
        i(u);
      } catch (f) {
        n.error(f);
      }
    } : t.prototype._next, s._error = a ? function(u) {
      try {
        a(u);
      } catch (f) {
        n.error(f);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, s._complete = r ? function() {
      try {
        r();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, s;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var i = this.closed;
      t.prototype.unsubscribe.call(this), !i && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(Mi), fg = new ct(function(t) {
  return t.complete();
});
function cg(t) {
  return t && je(t.schedule);
}
function dg(t) {
  return t[t.length - 1];
}
function hg(t) {
  return cg(dg(t)) ? t.pop() : void 0;
}
var wl = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Rl(t) {
  return je(t == null ? void 0 : t.then);
}
function Hl(t) {
  return je(t[Bi]);
}
function kl(t) {
  return Symbol.asyncIterator && je(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Dl(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function mg() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ml = mg();
function Bl(t) {
  return je(t == null ? void 0 : t[Ml]);
}
function Pl(t) {
  return Fs(this, arguments, function() {
    var n, i, r, a;
    return Oi(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Qt(n.read())];
        case 3:
          return i = o.sent(), r = i.value, a = i.done, a ? [4, Qt(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Qt(r)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Ul(t) {
  return je(t == null ? void 0 : t.getReader);
}
function An(t) {
  if (t instanceof ct)
    return t;
  if (t != null) {
    if (Hl(t))
      return gg(t);
    if (wl(t))
      return pg(t);
    if (Rl(t))
      return bg(t);
    if (kl(t))
      return Fl(t);
    if (Bl(t))
      return _g(t);
    if (Ul(t))
      return vg(t);
  }
  throw Dl(t);
}
function gg(t) {
  return new ct(function(e) {
    var n = t[Bi]();
    if (je(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function pg(t) {
  return new ct(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function bg(t) {
  return new ct(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Ol);
  });
}
function _g(t) {
  return new ct(function(e) {
    var n, i;
    try {
      for (var r = Qe(t), a = r.next(); !a.done; a = r.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (l) {
      n = { error: l };
    } finally {
      try {
        a && !a.done && (i = r.return) && i.call(r);
      } finally {
        if (n)
          throw n.error;
      }
    }
    e.complete();
  });
}
function Fl(t) {
  return new ct(function(e) {
    yg(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function vg(t) {
  return Fl(Pl(t));
}
function yg(t, e) {
  var n, i, r, a;
  return Xa(this, void 0, void 0, function() {
    var o, l;
    return Oi(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), n = Ns(t), s.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (i = s.sent(), !!i.done)
            return [3, 4];
          if (o = i.value, e.next(o), e.closed)
            return [2];
          s.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return l = s.sent(), r = { error: l }, [3, 11];
        case 6:
          return s.trys.push([6, , 9, 10]), i && !i.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          s.sent(), s.label = 8;
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
function Ft(t, e, n, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var a = e.schedule(function() {
    n(), r ? t.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (t.add(a), !r)
    return a;
}
function Nl(t, e) {
  return e === void 0 && (e = 0), Vt(function(n, i) {
    n.subscribe(rn(i, function(r) {
      return Ft(i, t, function() {
        return i.next(r);
      }, e);
    }, function() {
      return Ft(i, t, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return Ft(i, t, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function Gl(t, e) {
  return e === void 0 && (e = 0), Vt(function(n, i) {
    i.add(t.schedule(function() {
      return n.subscribe(i);
    }, e));
  });
}
function Ag(t, e) {
  return An(t).pipe(Gl(e), Nl(e));
}
function Eg(t, e) {
  return An(t).pipe(Gl(e), Nl(e));
}
function Sg(t, e) {
  return new ct(function(n) {
    var i = 0;
    return e.schedule(function() {
      i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
    });
  });
}
function Cg(t, e) {
  return new ct(function(n) {
    var i;
    return Ft(n, e, function() {
      i = t[Ml](), Ft(n, e, function() {
        var r, a, o;
        try {
          r = i.next(), a = r.value, o = r.done;
        } catch (l) {
          n.error(l);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return je(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function jl(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new ct(function(n) {
    Ft(n, e, function() {
      var i = t[Symbol.asyncIterator]();
      Ft(n, e, function() {
        i.next().then(function(r) {
          r.done ? n.complete() : n.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function Ig(t, e) {
  return jl(Pl(t), e);
}
function Lg(t, e) {
  if (t != null) {
    if (Hl(t))
      return Ag(t, e);
    if (wl(t))
      return Sg(t, e);
    if (Rl(t))
      return Eg(t, e);
    if (kl(t))
      return jl(t, e);
    if (Bl(t))
      return Cg(t, e);
    if (Ul(t))
      return Ig(t, e);
  }
  throw Dl(t);
}
function Og(t, e) {
  return e ? Lg(t, e) : An(t);
}
function Tg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = hg(t);
  return Og(t, n);
}
function mt(t, e) {
  return Vt(function(n, i) {
    var r = 0;
    n.subscribe(rn(i, function(a) {
      i.next(t.call(e, a, r++));
    }));
  });
}
function wg(t, e, n, i, r, a, o, l) {
  var s = [], u = 0, f = 0, c = !1, d = function() {
    c && !s.length && !u && e.complete();
  }, g = function(b) {
    return u < i ? p(b) : s.push(b);
  }, p = function(b) {
    u++;
    var m = !1;
    An(n(b, f++)).subscribe(rn(e, function(y) {
      e.next(y);
    }, function() {
      m = !0;
    }, void 0, function() {
      if (m)
        try {
          u--;
          for (var y = function() {
            var _ = s.shift();
            o || p(_);
          }; s.length && u < i; )
            y();
          d();
        } catch (_) {
          e.error(_);
        }
    }));
  };
  return t.subscribe(rn(e, g, function() {
    c = !0, d();
  })), function() {
  };
}
function Ii(t, e, n) {
  return n === void 0 && (n = 1 / 0), je(e) ? Ii(function(i, r) {
    return mt(function(a, o) {
      return e(i, a, r, o);
    })(An(t(i, r)));
  }, n) : (typeof e == "number" && (n = e), Vt(function(i, r) {
    return wg(i, r, t, n);
  }));
}
function Rg(t, e) {
  return je(e) ? Ii(t, e, 1) : Ii(t, 1);
}
function Ca(t) {
  return t <= 0 ? function() {
    return fg;
  } : Vt(function(e, n) {
    var i = 0;
    e.subscribe(rn(n, function(r) {
      ++i <= t && (n.next(r), t <= i && n.complete());
    }));
  });
}
function Ia(t) {
  return Vt(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function La(t, e, n) {
  var i = je(t) || e || n ? { next: t, error: e, complete: n } : t;
  return i ? Vt(function(r, a) {
    var o;
    (o = i.subscribe) === null || o === void 0 || o.call(i);
    var l = !0;
    r.subscribe(rn(a, function(s) {
      var u;
      (u = i.next) === null || u === void 0 || u.call(i, s), a.next(s);
    }, function() {
      var s;
      l = !1, (s = i.complete) === null || s === void 0 || s.call(i), a.complete();
    }, function(s) {
      var u;
      l = !1, (u = i.error) === null || u === void 0 || u.call(i, s), a.error(s);
    }, function() {
      var s, u;
      l && ((s = i.unsubscribe) === null || s === void 0 || s.call(i)), (u = i.finalize) === null || u === void 0 || u.call(i);
    }));
  }) : Tl;
}
function Vl(t) {
  switch (t.responseType) {
    case "json": {
      if ("response" in t)
        return t.response;
      var e = t;
      return JSON.parse(e.responseText);
    }
    case "document":
      return t.responseXML;
    case "text":
    default: {
      if ("response" in t)
        return t.response;
      var e = t;
      return e.responseText;
    }
  }
}
var Hg = /* @__PURE__ */ function() {
  function t(e, n, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = n, this.request = i, this.type = r;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var l = n.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(f, c) {
      var d = c.indexOf(": ");
      return f[c.slice(0, d)] = c.slice(d + 2), f;
    }, {}) : {}, this.response = Vl(n);
    var s = e.loaded, u = e.total;
    this.loaded = s, this.total = u;
  }
  return t;
}(), Vn = Il(function(t) {
  return function(n, i, r) {
    this.message = n, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var a;
    try {
      a = Vl(i);
    } catch {
      a = i.responseText;
    }
    this.response = a;
  };
}), kg = function() {
  function t(e, n) {
    return Vn.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Vn.prototype), t;
}();
function Dg(t, e) {
  return qt({ method: "GET", url: t, headers: e });
}
function Mg(t, e, n) {
  return qt({ method: "POST", url: t, body: e, headers: n });
}
function Bg(t, e) {
  return qt({ method: "DELETE", url: t, headers: e });
}
function Pg(t, e, n) {
  return qt({ method: "PUT", url: t, body: e, headers: n });
}
function Ug(t, e, n) {
  return qt({ method: "PATCH", url: t, body: e, headers: n });
}
var Fg = mt(function(t) {
  return t.response;
});
function Ng(t, e) {
  return Fg(qt({
    method: "GET",
    url: t,
    headers: e
  }));
}
var qt = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return jg(n);
  };
  return t.get = Dg, t.post = Mg, t.delete = Bg, t.put = Pg, t.patch = Ug, t.getJSON = Ng, t;
}(), Gg = "upload", Oa = "download", fi = "loadstart", ci = "progress", Ta = "load";
function jg(t) {
  return new ct(function(e) {
    var n, i, r = x({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = r.queryParams, o = r.body, l = r.headers, s = r.url;
    if (!s)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (s.includes("?")) {
        var f = s.split("?");
        if (2 < f.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(f[1]), new URLSearchParams(a).forEach(function(J, k) {
          return u.set(k, J);
        }), s = f[0] + "?" + u;
      } else
        u = new URLSearchParams(a), s = s + "?" + u;
    }
    var c = {};
    if (l)
      for (var d in l)
        l.hasOwnProperty(d) && (c[d.toLowerCase()] = l[d]);
    var g = r.crossDomain;
    !g && !("x-requested-with" in c) && (c["x-requested-with"] = "XMLHttpRequest");
    var p = r.withCredentials, b = r.xsrfCookieName, m = r.xsrfHeaderName;
    if ((p || !g) && b && m) {
      var y = (i = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + b + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && i !== void 0 ? i : "";
      y && (c[m] = y);
    }
    var _ = Vg(o, c), O = x(x({}, r), {
      url: s,
      headers: c,
      body: _
    }), A;
    A = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var D = t.progressSubscriber, M = t.includeDownloadProgress, h = M === void 0 ? !1 : M, R = t.includeUploadProgress, q = R === void 0 ? !1 : R, C = function(J, k) {
        A.addEventListener(J, function() {
          var E, z = k();
          (E = D == null ? void 0 : D.error) === null || E === void 0 || E.call(D, z), e.error(z);
        });
      };
      C("timeout", function() {
        return new kg(A, O);
      }), C("abort", function() {
        return new Vn("aborted", A, O);
      });
      var v = function(J, k) {
        return new Hg(k, A, O, J + "_" + k.type);
      }, T = function(J, k, E) {
        J.addEventListener(k, function(z) {
          e.next(v(E, z));
        });
      };
      q && [fi, ci, Ta].forEach(function(J) {
        return T(A.upload, J, Gg);
      }), D && [fi, ci].forEach(function(J) {
        return A.upload.addEventListener(J, function(k) {
          var E;
          return (E = D == null ? void 0 : D.next) === null || E === void 0 ? void 0 : E.call(D, k);
        });
      }), h && [fi, ci].forEach(function(J) {
        return T(A, J, Oa);
      });
      var H = function(J) {
        var k = "ajax error" + (J ? " " + J : "");
        e.error(new Vn(k, A, O));
      };
      A.addEventListener("error", function(J) {
        var k;
        (k = D == null ? void 0 : D.error) === null || k === void 0 || k.call(D, J), H();
      }), A.addEventListener(Ta, function(J) {
        var k, E, z = A.status;
        if (z < 400) {
          (k = D == null ? void 0 : D.complete) === null || k === void 0 || k.call(D);
          var pe = void 0;
          try {
            pe = v(Oa, J);
          } catch (Ie) {
            e.error(Ie);
            return;
          }
          e.next(pe), e.complete();
        } else
          (E = D == null ? void 0 : D.error) === null || E === void 0 || E.call(D, J), H(z);
      });
    }
    var X = O.user, ie = O.method, he = O.async;
    X ? A.open(ie, s, he, X, O.password) : A.open(ie, s, he), he && (A.timeout = O.timeout, A.responseType = O.responseType), "withCredentials" in A && (A.withCredentials = O.withCredentials);
    for (var d in c)
      c.hasOwnProperty(d) && A.setRequestHeader(d, c[d]);
    return _ ? A.send(_) : A.send(), function() {
      A && A.readyState !== 4 && A.abort();
    };
  });
}
function Vg(t, e) {
  var n;
  if (!t || typeof t == "string" || Kg(t) || Yg(t) || zg(t) || Xg(t) || Wg(t) || Qg(t))
    return t;
  if (Zg(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var qg = Object.prototype.toString;
function Pi(t, e) {
  return qg.call(t) === "[object " + e + "]";
}
function zg(t) {
  return Pi(t, "ArrayBuffer");
}
function Xg(t) {
  return Pi(t, "File");
}
function Wg(t) {
  return Pi(t, "Blob");
}
function Zg(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Kg(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Yg(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Qg(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class Jg {
  constructor(e, n, i) {
    this.url = e, this.variableConfiguration = n, this.description = i;
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
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const i = new RegExp("{" + n + "}", "g");
        e = e.replace(i, this.variableConfiguration[n]);
      }
    return e;
  }
}
const xg = new Jg("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), $g = [xg], ep = $g[0].getUrl();
class ql {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? ep;
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
class tp {
  constructor(e = new ql()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(n), i;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((i) => ({ pre: i }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: n, query: i, method: r, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${i && Object.keys(i).length ? `?${np(i)}` : ""}`,
      method: r,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => Tg(n).pipe(
      mt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      Rg(
        (i) => qt(i).pipe(
          mt((r) => (this.middleware.filter((a) => a.post).forEach((a) => r = a.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      mt((i) => {
        const { status: r, response: a } = i;
        if (r >= 200 && r < 300)
          return (n == null ? void 0 : n.response) === "raw" ? i : a;
        throw i;
      })
    );
  }
}
const ft = (t) => encodeURIComponent(`${t}`), np = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((i) => `${ft(e)}=${ft(i)}`).join("&") : `${ft(e)}=${ft(n)}`
).join("&"), At = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class ip extends tp {
  assignResourceToLocation({ locationId: e, uuid: n }, i) {
    At(e, "locationId", "assignResourceToLocation"), At(n, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", ft(e)).replace("{uuid}", ft(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, n) {
    At(e, "location", "createLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: i,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
  deleteLocation({ locationId: e }, n) {
    At(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", ft(e)),
      method: "DELETE",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    At(e, "locationId", "getLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", ft(e)),
      method: "GET",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: e, pageSize: n }, i) {
    const r = {}, a = {};
    return e != null && (a.page = e), n != null && (a.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: r,
      query: a
    }, i == null ? void 0 : i.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: n }, i) {
    At(e, "locationId", "unassignResourceFromLocation"), At(n, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", ft(e)).replace("{uuid}", ft(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, i) {
    At(e, "locationId", "updateLocation"), At(n, "location", "updateLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", ft(e)),
      method: "PUT",
      headers: r,
      body: n
    }, i == null ? void 0 : i.responseOpts);
  }
}
class Jt {
  constructor(e, n, i, r, a) {
    this.uuid = a, this.key = e, this.name = n, this.description = i, this.assignedResources = r;
  }
  static from(e) {
    return new Jt(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class Zt {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Zt.instance || (Zt.instance = new Zt()), Zt.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      mt((n) => n || []),
      mt((n) => n.map((i) => Jt.from(i)))
    );
  }
  createLocation(e) {
    return this.locationsApiClient.createLocation({ location: e }).pipe(
      mt((n) => Jt.from(n))
    );
  }
  deleteLocation(e) {
    return this.locationsApiClient.deleteLocation({ locationId: e }).pipe(mt(() => {
    }));
  }
  updateLocation(e) {
    return this.locationsApiClient.updateLocation({ locationId: e.locationId, location: e.location }).pipe(
      mt((n) => Jt.from(n))
    );
  }
  createApiClient(e) {
    const n = new ql({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new ip(n);
  }
}
var St;
class rp {
  constructor() {
    Ni(this, St, it([]));
  }
  get store() {
    return Mt(this, St);
  }
  set(e) {
    Mt(this, St).set(e);
  }
  update(e) {
    Mt(this, St).update((n) => n.map((i) => i.uuid === e.uuid ? e : i));
  }
  add(e) {
    Mt(this, St).update((n) => [...n, e]);
  }
  remove(e) {
    Mt(this, St).update((n) => n.filter((i) => i.uuid !== e));
  }
  findById(e) {
    return wo(Mt(this, St)).find((n) => n.uuid === e);
  }
}
St = new WeakMap();
function ap(t) {
  let e, n, i, r, a, o, l, s, u, f, c, d, g, p, b;
  return n = new Sl({
    props: { loadingDone: (
      /*loadingDone*/
      t[4]
    ) }
  }), r = new Qr({
    props: {
      open: (
        /*dialogState*/
        t[1] === /*DialogState*/
        t[3].Remove
      ),
      $$slots: {
        actions: [dp],
        title: [op]
      },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "close",
    /*onCloseDialog*/
    t[12]
  ), o = new Qr({
    props: {
      open: (
        /*dialogState*/
        t[1] === /*DialogState*/
        t[3].Update || /*dialogState*/
        t[1] === /*DialogState*/
        t[3].Create
      ),
      $$slots: {
        actions: [yp],
        content: [gp],
        title: [hp]
      },
      $$scope: { ctx: t }
    }
  }), o.$on(
    "close",
    /*onCloseDialog*/
    t[12]
  ), u = new Nt({
    props: {
      class: "button",
      callback: (
        /*create*/
        t[9]
      ),
      variant: "raised",
      $$slots: { default: [Ep] },
      $$scope: { ctx: t }
    }
  }), c = new Nt({
    props: {
      class: "button",
      callback: (
        /*load*/
        t[13]
      ),
      variant: "raised",
      $$slots: { default: [Cp] },
      $$scope: { ctx: t }
    }
  }), p = new xm({
    props: {
      style: "padding: 1rem; width: 100%; height: 100%;",
      $$slots: { default: [Ip] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), j(n.$$.fragment), i = Q(), j(r.$$.fragment), a = Q(), j(o.$$.fragment), l = Q(), s = K("div"), j(u.$$.fragment), f = Q(), j(c.$$.fragment), d = Q(), g = K("div"), j(p.$$.fragment), gn(s, "margin-top", "10px"), gn(s, "margin-bottom", "10px"), U(g, "class", "table-container"), U(e, "class", "location-manager-container");
    },
    m(m, y) {
      P(m, e, y), N(n, e, null), Z(e, i), N(r, e, null), Z(e, a), N(o, e, null), Z(e, l), Z(e, s), N(u, s, null), Z(s, f), N(c, s, null), Z(e, d), Z(e, g), N(p, g, null), b = !0;
    },
    p(m, y) {
      const _ = {};
      y & /*loadingDone*/
      16 && (_.loadingDone = /*loadingDone*/
      m[4]), n.$set(_);
      const O = {};
      y & /*dialogState, DialogState*/
      10 && (O.open = /*dialogState*/
      m[1] === /*DialogState*/
      m[3].Remove), y & /*$$scope, $_, currentSelectLocation*/
      1048612 && (O.$$scope = { dirty: y, ctx: m }), r.$set(O);
      const A = {};
      y & /*dialogState, DialogState*/
      10 && (A.open = /*dialogState*/
      m[1] === /*DialogState*/
      m[3].Update || /*dialogState*/
      m[1] === /*DialogState*/
      m[3].Create), y & /*$$scope, $_, currentSelectLocation, dialogState, DialogState*/
      1048622 && (A.$$scope = { dirty: y, ctx: m }), o.$set(A);
      const D = {};
      y & /*$$scope, $_*/
      1048580 && (D.$$scope = { dirty: y, ctx: m }), u.$set(D);
      const M = {};
      y & /*$$scope, $_*/
      1048580 && (M.$$scope = { dirty: y, ctx: m }), c.$set(M);
      const h = {};
      y & /*$$scope, columnDefs, locationStore, loadingDone, $_*/
      1048725 && (h.$$scope = { dirty: y, ctx: m }), p.$set(h);
    },
    i(m) {
      b || (S(n.$$.fragment, m), S(r.$$.fragment, m), S(o.$$.fragment, m), S(u.$$.fragment, m), S(c.$$.fragment, m), S(p.$$.fragment, m), b = !0);
    },
    o(m) {
      I(n.$$.fragment, m), I(r.$$.fragment, m), I(o.$$.fragment, m), I(u.$$.fragment, m), I(c.$$.fragment, m), I(p.$$.fragment, m), b = !1;
    },
    d(m) {
      m && B(e), G(n), G(r), G(o), G(u), G(c), G(p);
    }
  };
}
function lp(t) {
  let e, n;
  return e = new Sl({
    props: { loadingDone: !/*loading*/
    t[6] }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r & /*loading*/
      64 && (a.loadingDone = !/*loading*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function op(t) {
  var r;
  let e, n = (
    /*$_*/
    t[2]("delete_location", {
      values: {
        name: (
          /*currentSelectLocation*/
          (r = t[5]) == null ? void 0 : r.name
        )
      }
    }) + ""
  ), i;
  return {
    c() {
      e = K("h3"), i = Pe(n), U(e, "slot", "title");
    },
    m(a, o) {
      P(a, e, o), Z(e, i);
    },
    p(a, o) {
      var l;
      o & /*$_, currentSelectLocation*/
      36 && n !== (n = /*$_*/
      a[2]("delete_location", {
        values: {
          name: (
            /*currentSelectLocation*/
            (l = a[5]) == null ? void 0 : l.name
          )
        }
      }) + "") && Ge(i, n);
    },
    d(a) {
      a && B(e);
    }
  };
}
function sp(t) {
  let e = (
    /*$_*/
    t[2]("confirm") + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      4 && e !== (e = /*$_*/
      i[2]("confirm") + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function up(t) {
  let e, n, i, r;
  return e = new El({}), i = new jt({
    props: {
      $$slots: { default: [sp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      const l = {};
      o & /*$$scope, $_*/
      1048580 && (l.$$scope = { dirty: o, ctx: a }), i.$set(l);
    },
    i(a) {
      r || (S(e.$$.fragment, a), S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(e, a), G(i, a);
    }
  };
}
function fp(t) {
  let e = (
    /*$_*/
    t[2]("cancel") + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      4 && e !== (e = /*$_*/
      i[2]("cancel") + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function cp(t) {
  let e, n, i, r;
  return e = new Hi({}), i = new jt({
    props: {
      $$slots: { default: [fp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      const l = {};
      o & /*$$scope, $_*/
      1048580 && (l.$$scope = { dirty: o, ctx: a }), i.$set(l);
    },
    i(a) {
      r || (S(e.$$.fragment, a), S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(e, a), G(i, a);
    }
  };
}
function dp(t) {
  let e, n, i, r, a;
  return n = new Nt({
    props: {
      callback: (
        /*onRemoveConfirm*/
        t[11]
      ),
      variant: "raised",
      $$slots: { default: [up] },
      $$scope: { ctx: t }
    }
  }), r = new Nt({
    props: {
      callback: (
        /*onCloseDialog*/
        t[12]
      ),
      variant: "raised",
      isAbortAction: !0,
      $$slots: { default: [cp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), j(n.$$.fragment), i = Q(), j(r.$$.fragment), U(e, "slot", "actions");
    },
    m(o, l) {
      P(o, e, l), N(n, e, null), Z(e, i), N(r, e, null), a = !0;
    },
    p(o, l) {
      const s = {};
      l & /*$$scope, $_*/
      1048580 && (s.$$scope = { dirty: l, ctx: o }), n.$set(s);
      const u = {};
      l & /*$$scope, $_*/
      1048580 && (u.$$scope = { dirty: l, ctx: o }), r.$set(u);
    },
    i(o) {
      a || (S(n.$$.fragment, o), S(r.$$.fragment, o), a = !0);
    },
    o(o) {
      I(n.$$.fragment, o), I(r.$$.fragment, o), a = !1;
    },
    d(o) {
      o && B(e), G(n), G(r);
    }
  };
}
function hp(t) {
  var r;
  let e, n = (
    /*dialogState*/
    (t[1] === /*DialogState*/
    t[3].Update ? (
      /*$_*/
      t[2]("location", {
        values: {
          name: (
            /*currentSelectLocation*/
            (r = t[5]) == null ? void 0 : r.name
          )
        }
      })
    ) : (
      /*$_*/
      t[2]("new_location")
    )) + ""
  ), i;
  return {
    c() {
      e = K("h3"), i = Pe(n), U(e, "slot", "title");
    },
    m(a, o) {
      P(a, e, o), Z(e, i);
    },
    p(a, o) {
      var l;
      o & /*dialogState, DialogState, $_, currentSelectLocation*/
      46 && n !== (n = /*dialogState*/
      (a[1] === /*DialogState*/
      a[3].Update ? (
        /*$_*/
        a[2]("location", {
          values: {
            name: (
              /*currentSelectLocation*/
              (l = a[5]) == null ? void 0 : l.name
            )
          }
        })
      ) : (
        /*$_*/
        a[2]("new_location")
      )) + "") && Ge(i, n);
    },
    d(a) {
      a && B(e);
    }
  };
}
function wa(t) {
  let e, n, i, r, a, o, l, s, u, f, c = (
    /*dialogState*/
    t[1] === /*DialogState*/
    t[3].Update && Ra(t)
  );
  function d(_) {
    t[14](_);
  }
  let g = { label: (
    /*$_*/
    t[2]("name")
  ) };
  /*currentSelectLocation*/
  t[5].name !== void 0 && (g.value = /*currentSelectLocation*/
  t[5].name), n = new li({ props: g }), ee.push(() => tt(n, "value", d));
  function p(_) {
    t[15](_);
  }
  let b = { label: (
    /*$_*/
    t[2]("key")
  ) };
  /*currentSelectLocation*/
  t[5].key !== void 0 && (b.value = /*currentSelectLocation*/
  t[5].key), a = new li({ props: b }), ee.push(() => tt(a, "value", p));
  function m(_) {
    t[16](_);
  }
  let y = { label: (
    /*$_*/
    t[2]("description")
  ) };
  return (
    /*currentSelectLocation*/
    t[5].description !== void 0 && (y.value = /*currentSelectLocation*/
    t[5].description), s = new li({ props: y }), ee.push(() => tt(s, "value", m)), {
      c() {
        c && c.c(), e = Q(), j(n.$$.fragment), r = Q(), j(a.$$.fragment), l = Q(), j(s.$$.fragment);
      },
      m(_, O) {
        c && c.m(_, O), P(_, e, O), N(n, _, O), P(_, r, O), N(a, _, O), P(_, l, O), N(s, _, O), f = !0;
      },
      p(_, O) {
        /*dialogState*/
        _[1] === /*DialogState*/
        _[3].Update ? c ? (c.p(_, O), O & /*dialogState, DialogState*/
        10 && S(c, 1)) : (c = Ra(_), c.c(), S(c, 1), c.m(e.parentNode, e)) : c && (ye(), I(c, 1, 1, () => {
          c = null;
        }), Ae());
        const A = {};
        O & /*$_*/
        4 && (A.label = /*$_*/
        _[2]("name")), !i && O & /*currentSelectLocation*/
        32 && (i = !0, A.value = /*currentSelectLocation*/
        _[5].name, et(() => i = !1)), n.$set(A);
        const D = {};
        O & /*$_*/
        4 && (D.label = /*$_*/
        _[2]("key")), !o && O & /*currentSelectLocation*/
        32 && (o = !0, D.value = /*currentSelectLocation*/
        _[5].key, et(() => o = !1)), a.$set(D);
        const M = {};
        O & /*$_*/
        4 && (M.label = /*$_*/
        _[2]("description")), !u && O & /*currentSelectLocation*/
        32 && (u = !0, M.value = /*currentSelectLocation*/
        _[5].description, et(() => u = !1)), s.$set(M);
      },
      i(_) {
        f || (S(c), S(n.$$.fragment, _), S(a.$$.fragment, _), S(s.$$.fragment, _), f = !0);
      },
      o(_) {
        I(c), I(n.$$.fragment, _), I(a.$$.fragment, _), I(s.$$.fragment, _), f = !1;
      },
      d(_) {
        _ && (B(e), B(r), B(l)), c && c.d(_), G(n, _), G(a, _), G(s, _);
      }
    }
  );
}
function Ra(t) {
  let e, n;
  return e = new jt({
    props: {
      $$slots: { default: [mp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r & /*$$scope, currentSelectLocation*/
      1048608 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function mp(t) {
  let e = (
    /*currentSelectLocation*/
    t[5].uuid + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*currentSelectLocation*/
      32 && e !== (e = /*currentSelectLocation*/
      i[5].uuid + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function gp(t) {
  let e, n, i = (
    /*currentSelectLocation*/
    t[5] && wa(t)
  );
  return {
    c() {
      e = K("div"), i && i.c(), U(e, "slot", "content");
    },
    m(r, a) {
      P(r, e, a), i && i.m(e, null), n = !0;
    },
    p(r, a) {
      /*currentSelectLocation*/
      r[5] ? i ? (i.p(r, a), a & /*currentSelectLocation*/
      32 && S(i, 1)) : (i = wa(r), i.c(), S(i, 1), i.m(e, null)) : i && (ye(), I(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      I(i), n = !1;
    },
    d(r) {
      r && B(e), i && i.d();
    }
  };
}
function pp(t) {
  let e = (
    /*$_*/
    t[2]("save") + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      4 && e !== (e = /*$_*/
      i[2]("save") + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function bp(t) {
  let e, n, i, r;
  return e = new El({}), i = new jt({
    props: {
      $$slots: { default: [pp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      const l = {};
      o & /*$$scope, $_*/
      1048580 && (l.$$scope = { dirty: o, ctx: a }), i.$set(l);
    },
    i(a) {
      r || (S(e.$$.fragment, a), S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(e, a), G(i, a);
    }
  };
}
function _p(t) {
  let e = (
    /*$_*/
    t[2]("cancel") + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      4 && e !== (e = /*$_*/
      i[2]("cancel") + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function vp(t) {
  let e, n, i, r;
  return e = new Hi({}), i = new jt({
    props: {
      $$slots: { default: [_p] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      const l = {};
      o & /*$$scope, $_*/
      1048580 && (l.$$scope = { dirty: o, ctx: a }), i.$set(l);
    },
    i(a) {
      r || (S(e.$$.fragment, a), S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(e, a), G(i, a);
    }
  };
}
function yp(t) {
  let e, n, i, r, a;
  return n = new Nt({
    props: {
      callback: (
        /*onUpdateOrCreateSave*/
        t[10]
      ),
      variant: "raised",
      $$slots: { default: [bp] },
      $$scope: { ctx: t }
    }
  }), r = new Nt({
    props: {
      callback: (
        /*onCloseDialog*/
        t[12]
      ),
      variant: "raised",
      isAbortAction: !0,
      $$slots: { default: [vp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), j(n.$$.fragment), i = Q(), j(r.$$.fragment), U(e, "slot", "actions");
    },
    m(o, l) {
      P(o, e, l), N(n, e, null), Z(e, i), N(r, e, null), a = !0;
    },
    p(o, l) {
      const s = {};
      l & /*$$scope, $_*/
      1048580 && (s.$$scope = { dirty: l, ctx: o }), n.$set(s);
      const u = {};
      l & /*$$scope, $_*/
      1048580 && (u.$$scope = { dirty: l, ctx: o }), r.$set(u);
    },
    i(o) {
      a || (S(n.$$.fragment, o), S(r.$$.fragment, o), a = !0);
    },
    o(o) {
      I(n.$$.fragment, o), I(r.$$.fragment, o), a = !1;
    },
    d(o) {
      o && B(e), G(n), G(r);
    }
  };
}
function Ap(t) {
  let e = (
    /*$_*/
    t[2]("add_location") + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      4 && e !== (e = /*$_*/
      i[2]("add_location") + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function Ep(t) {
  let e, n, i, r;
  return e = new yl({}), i = new jt({
    props: {
      $$slots: { default: [Ap] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      const l = {};
      o & /*$$scope, $_*/
      1048580 && (l.$$scope = { dirty: o, ctx: a }), i.$set(l);
    },
    i(a) {
      r || (S(e.$$.fragment, a), S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(e, a), G(i, a);
    }
  };
}
function Sp(t) {
  let e = (
    /*$_*/
    t[2]("refresh") + ""
  ), n;
  return {
    c() {
      n = Pe(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      4 && e !== (e = /*$_*/
      i[2]("refresh") + "") && Ge(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function Cp(t) {
  let e, n, i, r;
  return e = new Al({}), i = new jt({
    props: {
      $$slots: { default: [Sp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, o) {
      N(e, a, o), P(a, n, o), N(i, a, o), r = !0;
    },
    p(a, o) {
      const l = {};
      o & /*$$scope, $_*/
      1048580 && (l.$$scope = { dirty: o, ctx: a }), i.$set(l);
    },
    i(a) {
      r || (S(e.$$.fragment, a), S(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), G(e, a), G(i, a);
    }
  };
}
function Ip(t) {
  let e, n = (
    /*$_*/
    t[2]("location_table") + ""
  ), i, r, a, o;
  return a = new Ym({
    props: {
      columnDefs: (
        /*columnDefs*/
        t[7]
      ),
      store: (
        /*locationStore*/
        t[0]
      ),
      loadingDone: (
        /*loadingDone*/
        t[4]
      ),
      rowActions: (
        /*rowActions*/
        t[8]
      ),
      searchInputLabel: (
        /*$_*/
        t[2]("search")
      )
    }
  }), {
    c() {
      e = K("h3"), i = Pe(n), r = Q(), j(a.$$.fragment), gn(e, "margin-bottom", "1rem");
    },
    m(l, s) {
      P(l, e, s), Z(e, i), P(l, r, s), N(a, l, s), o = !0;
    },
    p(l, s) {
      (!o || s & /*$_*/
      4) && n !== (n = /*$_*/
      l[2]("location_table") + "") && Ge(i, n);
      const u = {};
      s & /*columnDefs*/
      128 && (u.columnDefs = /*columnDefs*/
      l[7]), s & /*locationStore*/
      1 && (u.store = /*locationStore*/
      l[0]), s & /*loadingDone*/
      16 && (u.loadingDone = /*loadingDone*/
      l[4]), s & /*$_*/
      4 && (u.searchInputLabel = /*$_*/
      l[2]("search")), a.$set(u);
    },
    i(l) {
      o || (S(a.$$.fragment, l), o = !0);
    },
    o(l) {
      I(a.$$.fragment, l), o = !1;
    },
    d(l) {
      l && (B(e), B(r)), G(a, l);
    }
  };
}
function Lp(t) {
  let e, n, i, r;
  const a = [lp, ap], o = [];
  function l(s, u) {
    return (
      /*loading*/
      s[6] ? 0 : 1
    );
  }
  return e = l(t), n = o[e] = a[e](t), {
    c() {
      n.c(), i = Te();
    },
    m(s, u) {
      o[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = l(s), e === f ? o[e].p(s, u) : (ye(), I(o[f], 1, 1, () => {
        o[f] = null;
      }), Ae(), n = o[e], n ? n.p(s, u) : (n = o[e] = a[e](s), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (S(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), o[e].d(s);
    }
  };
}
gf({ en: is, de: vs });
function Op(t, e, n) {
  let i, r;
  nt(t, mf, (h) => n(2, r = h));
  const a = Zt.getInstance();
  let { locationStore: o = new rp() } = e;
  var l;
  (function(h) {
    h.Closed = "closed", h.Update = "update", h.Create = "create", h.Remove = "remove";
  })(l || (l = {}));
  let s = !1, u = l.Closed, f = null, c = !0;
  Je(() => {
    setTimeout(
      () => {
        n(6, c = !1);
      },
      1e3
    );
  });
  const d = [
    {
      icon: "edit",
      callback: (h) => g(h),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (h) => b(h),
      disabled: () => !1
    }
  ];
  function g(h) {
    n(5, f = h), n(1, u = l.Update);
  }
  function p() {
    n(5, f = new Jt("", "")), n(1, u = l.Create);
  }
  function b(h) {
    n(5, f = h), n(1, u = l.Remove);
  }
  function m() {
    try {
      const h = (f == null ? void 0 : f.uuid) !== void 0;
      (h ? a.updateLocation({
        locationId: f.uuid,
        location: f
      }) : a.createLocation(f)).pipe(
        Ca(1),
        La((q) => {
          h ? o.update(q) : o.add(q);
        }),
        Ia(_)
      ).subscribe();
    } catch (h) {
      console.error("Error saving location", h);
    }
  }
  function y() {
    a.deleteLocation(f.uuid).subscribe({
      next: () => {
        o.remove(f.uuid), _();
      }
    });
  }
  function _() {
    n(1, u = l.Closed), n(5, f = null);
  }
  function O() {
    n(4, s = !1), a.getLocations().pipe(
      Ca(1),
      La((h) => {
        o.set(h);
      }),
      Ia(() => {
        n(4, s = !0);
      })
    ).subscribe();
  }
  Je(() => {
    O();
  });
  function A(h) {
    t.$$.not_equal(f.name, h) && (f.name = h, n(5, f));
  }
  function D(h) {
    t.$$.not_equal(f.key, h) && (f.key = h, n(5, f));
  }
  function M(h) {
    t.$$.not_equal(f.description, h) && (f.description = h, n(5, f));
  }
  return t.$$set = (h) => {
    "locationStore" in h && n(0, o = h.locationStore);
  }, t.$$.update = () => {
    t.$$.dirty & /*dialogState*/
    2 && console.log("Dialogstate:", u), t.$$.dirty & /*$_*/
    4 && n(7, i = [
      {
        headerName: r("uuid"),
        field: "uuid",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !1
      },
      {
        headerName: r("key"),
        field: "key",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: r("name"),
        field: "name",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: r("description"),
        field: "description",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: r("assigned_resources"),
        field: "assignedResources",
        numeric: !0,
        filter: !0,
        filterType: "number",
        sortable: !0
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
    ]);
  }, [
    o,
    u,
    r,
    l,
    s,
    f,
    c,
    i,
    d,
    p,
    m,
    y,
    _,
    O,
    A,
    D,
    M
  ];
}
class Tp extends de {
  constructor(e) {
    super(), ce(this, e, Op, Lp, ue, { locationStore: 0 });
  }
}
function Ha(t) {
  let e, n;
  return e = new Tp({}), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      N(e, i, r), n = !0;
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function wp(t) {
  let e, n, i, r, a, o = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && Ha()
  );
  return {
    c() {
      o && o.c(), e = Q(), n = K("input"), i = Q(), r = K("input"), U(n, "type", "hidden"), U(n, "name", "package-name"), n.value = Va, U(r, "type", "hidden"), U(r, "name", "package-version"), r.value = qa;
    },
    m(l, s) {
      o && o.m(l, s), P(l, e, s), P(l, n, s), P(l, i, s), P(l, r, s), a = !0;
    },
    p(l, [s]) {
      /*doc*/
      l[0] || /*dev*/
      l[1] ? o ? s & /*doc, dev*/
      3 && S(o, 1) : (o = Ha(), o.c(), S(o, 1), o.m(e.parentNode, e)) : o && (ye(), I(o, 1, 1, () => {
        o = null;
      }), Ae());
    },
    i(l) {
      a || (S(o), a = !0);
    },
    o(l) {
      I(o), a = !1;
    },
    d(l) {
      l && (B(e), B(n), B(i), B(r)), o && o.d(l);
    }
  };
}
function Rp(t, e, n) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return t.$$set = (a) => {
    "doc" in a && n(0, i = a.doc), "dev" in a && n(1, r = a.dev);
  }, [i, r];
}
class Hp extends de {
  constructor(e) {
    super(), ce(this, e, Rp, wp, ue, { doc: 0, dev: 1 });
  }
}
class Bp extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new Hp({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = kp();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function kp() {
  const t = `${Va}-v${qa}-style`, e = Dp(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function Dp() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  Bp as default
};
