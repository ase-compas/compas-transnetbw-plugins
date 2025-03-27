var Io = Object.defineProperty;
var Lo = (t, e, n) => e in t ? Io(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Wn = (t, e, n) => (Lo(t, typeof e != "symbol" ? e + "" : e, n), n), Oo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var Mt = (t, e, n) => (Oo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Fi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
};
function Ie() {
}
function q(t, e) {
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
function Ni() {
  return /* @__PURE__ */ Object.create(null);
}
function Se(t) {
  t.forEach(ka);
}
function pe(t) {
  return typeof t == "function";
}
function se(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function wo(t) {
  return Object.keys(t).length === 0;
}
function Ii(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return Ie;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function To(t) {
  let e;
  return Ii(t, (n) => e = n)(), e;
}
function nt(t, e, n) {
  t.$$.on_destroy.push(Ii(e, n));
}
function re(t, e, n, i) {
  if (t) {
    const r = Da(t, e, n, i);
    return t[0](r);
  }
}
function Da(t, e, n, i) {
  return t[1] && i ? q(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function ae(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const a = [], l = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < l; o += 1)
        a[o] = e.dirty[o] | r[o];
      return a;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function le(t, e, n, i, r, a) {
  if (r) {
    const l = Da(e, n, i, a);
    t.p(l, r);
  }
}
function oe(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Fe(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function ue(t, e) {
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
function Lt(t, e, n) {
  return t.set(n), e;
}
function te(t) {
  return t && pe(t.destroy) ? t.destroy : Ie;
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
function Me(t) {
  return document.createTextNode(t);
}
function Q() {
  return Me(" ");
}
function Le() {
  return Me("");
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
function ji(t, e) {
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
function Mn(t) {
  return /-/.test(t) ? ko : ne;
}
function Pa(t) {
  return t === "" ? null : +t;
}
function Mo(t) {
  return Array.from(t.childNodes);
}
function Ne(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function xt(t, e) {
  t.value = e ?? "";
}
function pn(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function pt(t, e) {
  return new t(e);
}
let gn;
function mn(t) {
  gn = t;
}
function Te() {
  if (!gn)
    throw new Error("Function called outside component initialization");
  return gn;
}
function Je(t) {
  Te().$$.on_mount.push(t);
}
function an(t) {
  Te().$$.on_destroy.push(t);
}
function He(t, e) {
  return Te().$$.context.set(t, e), e;
}
function ke(t) {
  return Te().$$.context.get(t);
}
function Bn(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const Wt = [], ee = [];
let Kt = [];
const ci = [], Ua = /* @__PURE__ */ Promise.resolve();
let di = !1;
function Fa() {
  di || (di = !0, Ua.then(Na));
}
function Bo() {
  return Fa(), Ua;
}
function hi(t) {
  Kt.push(t);
}
function et(t) {
  ci.push(t);
}
const Zn = /* @__PURE__ */ new Set();
let zt = 0;
function Na() {
  if (zt !== 0)
    return;
  const t = gn;
  do {
    try {
      for (; zt < Wt.length; ) {
        const e = Wt[zt];
        zt++, mn(e), Po(e.$$);
      }
    } catch (e) {
      throw Wt.length = 0, zt = 0, e;
    }
    for (mn(null), Wt.length = 0, zt = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < Kt.length; e += 1) {
      const n = Kt[e];
      Zn.has(n) || (Zn.add(n), n());
    }
    Kt.length = 0;
  } while (Wt.length);
  for (; ci.length; )
    ci.pop()();
  di = !1, Zn.clear(), mn(t);
}
function Po(t) {
  if (t.fragment !== null) {
    t.update(), Se(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(hi);
  }
}
function Uo(t) {
  const e = [], n = [];
  Kt.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Kt = e;
}
const Hn = /* @__PURE__ */ new Set();
let Ut;
function ve() {
  Ut = {
    r: 0,
    c: [],
    p: Ut
    // parent group
  };
}
function ye() {
  Ut.r || Se(Ut.c), Ut = Ut.p;
}
function C(t, e) {
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
function Tt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ja(t, e) {
  I(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Ga(t, e, n, i, r, a, l, o, s, u, f, c) {
  let d = t.length, p = a.length, g = d;
  const b = {};
  for (; g--; )
    b[t[g].key] = g;
  const m = [], y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), O = [];
  for (g = p; g--; ) {
    const h = c(r, a, g), R = n(h);
    let V = l.get(R);
    V ? O.push(() => V.p(h, e)) : (V = u(R, h), V.c()), y.set(R, m[g] = V), R in b && v.set(R, Math.abs(g - b[R]));
  }
  const A = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function M(h) {
    C(h, 1), h.m(o, f), l.set(h.key, h), f = h.first, p--;
  }
  for (; d && p; ) {
    const h = m[p - 1], R = t[d - 1], V = h.key, E = R.key;
    h === R ? (f = h.first, d--, p--) : y.has(E) ? !l.has(V) || A.has(V) ? M(h) : D.has(E) ? d-- : v.get(V) > v.get(E) ? (D.add(V), M(h)) : (A.add(E), d--) : (s(R, l), d--);
  }
  for (; d--; ) {
    const h = t[d];
    y.has(h.key) || s(h, l);
  }
  for (; p; )
    M(m[p - 1]);
  return Se(O), m;
}
function ce(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const l = t[a], o = e[a];
    if (o) {
      for (const s in l)
        s in o || (i[s] = 1);
      for (const s in o)
        r[s] || (n[s] = o[s], r[s] = 1);
      t[a] = o;
    } else
      for (const s in l)
        r[s] = 1;
  }
  for (const l in i)
    l in n || (n[l] = void 0);
  return n;
}
function Ee(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function tt(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function j(t) {
  t && t.c();
}
function F(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), hi(() => {
    const a = t.$$.on_mount.map(ka).filter(pe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...a) : Se(a), t.$$.on_mount = [];
  }), r.forEach(hi);
}
function N(t, e) {
  const n = t.$$;
  n.fragment !== null && (Uo(n.after_update), Se(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Fo(t, e) {
  t.$$.dirty[0] === -1 && (Wt.push(t), Fa(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function de(t, e, n, i, r, a, l = null, o = [-1]) {
  const s = gn;
  mn(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Ie,
    not_equal: r,
    bound: Ni(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ni(),
    dirty: o,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  l && l(u.root);
  let f = !1;
  if (u.ctx = n ? n(t, e.props || {}, (c, d, ...p) => {
    const g = p.length ? p[0] : d;
    return u.ctx && r(u.ctx[c], u.ctx[c] = g) && (!u.skip_bound && u.bound[c] && u.bound[c](g), f && Fo(t, c)), d;
  }) : [], u.update(), f = !0, Se(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Mo(e.target);
      u.fragment && u.fragment.l(c), c.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(t.$$.fragment), F(t, e.target, e.anchor), Na();
  }
  mn(s);
}
class he {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Wn(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Wn(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    N(this, 1), this.$destroy = Ie;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!pe(n))
      return Ie;
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
    this.$$set && !wo(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const No = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(No);
const Va = "location-manager", qa = "0.0.1", jo = "Search", Go = "Add Location", Vo = "Refresh", qo = "Delete location {name}?", zo = "Confirm", Xo = "Cancel", Wo = "Save", Zo = "New Location", Ko = "Location: {name}", Qo = "Name", Yo = "Key", Jo = "Description", xo = "Location Table", $o = "UUID", es = "Assigned Resources", ts = {
  search: jo,
  add_location: Go,
  refresh: Vo,
  delete_location: qo,
  confirm: zo,
  cancel: Xo,
  save: Wo,
  new_location: Zo,
  location: Ko,
  name: Qo,
  key: Yo,
  description: Jo,
  location_table: xo,
  uuid: $o,
  assigned_resources: es
}, ns = "Suche", is = "Standort hinzufügen", rs = "Aktualisieren", as = "Standort {name} löschen?", ls = "Bestätigen", os = "Abbrechen", ss = "Speichern", us = "Neuer Standort", fs = "Standort: {name}", cs = "Name", ds = "Schlüssel", hs = "Beschreibung", ms = "Standort-Tabelle", ps = "UUID", gs = "Zugewiesene Ressourcen", bs = {
  search: ns,
  add_location: is,
  refresh: rs,
  delete_location: as,
  confirm: ls,
  cancel: os,
  save: ss,
  new_location: us,
  location: fs,
  name: cs,
  key: ds,
  description: hs,
  location_table: ms,
  uuid: ps,
  assigned_resources: gs
}, Xt = [];
function _s(t, e) {
  return {
    subscribe: it(t, e).subscribe
  };
}
function it(t, e = Ie) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (se(t, o) && (t = o, n)) {
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
  function a(o) {
    r(o(t));
  }
  function l(o, s = Ie) {
    const u = [o, s];
    return i.add(u), i.size === 1 && (n = e(r, a) || Ie), o(t), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: a, subscribe: l };
}
function ln(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return _s(n, (l, o) => {
    let s = !1;
    const u = [];
    let f = 0, c = Ie;
    const d = () => {
      if (f)
        return;
      c();
      const g = e(i ? u[0] : u, l, o);
      a ? l(g) : c = pe(g) ? g : Ie;
    }, p = r.map(
      (g, b) => Ii(
        g,
        (m) => {
          u[b] = m, f &= ~(1 << b), s && d();
        },
        () => {
          f |= 1 << b;
        }
      )
    );
    return s = !0, d(), function() {
      Se(p), c(), s = !1;
    };
  });
}
function vs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ys = function(e) {
  return As(e) && !Ss(e);
};
function As(t) {
  return !!t && typeof t == "object";
}
function Ss(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Is(t);
}
var Cs = typeof Symbol == "function" && Symbol.for, Es = Cs ? Symbol.for("react.element") : 60103;
function Is(t) {
  return t.$$typeof === Es;
}
function Ls(t) {
  return Array.isArray(t) ? [] : {};
}
function bn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? $t(Ls(t), t, e) : t;
}
function Os(t, e, n) {
  return t.concat(e).map(function(i) {
    return bn(i, n);
  });
}
function ws(t, e) {
  if (!e.customMerge)
    return $t;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : $t;
}
function Ts(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Gi(t) {
  return Object.keys(t).concat(Ts(t));
}
function za(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Rs(t, e) {
  return za(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Hs(t, e, n) {
  var i = {};
  return n.isMergeableObject(t) && Gi(t).forEach(function(r) {
    i[r] = bn(t[r], n);
  }), Gi(e).forEach(function(r) {
    Rs(t, r) || (za(t, r) && n.isMergeableObject(e[r]) ? i[r] = ws(r, n)(t[r], e[r], n) : i[r] = bn(e[r], n));
  }), i;
}
function $t(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Os, n.isMergeableObject = n.isMergeableObject || ys, n.cloneUnlessOtherwiseSpecified = bn;
  var i = Array.isArray(e), r = Array.isArray(t), a = i === r;
  return a ? i ? n.arrayMerge(t, e, n) : Hs(t, e, n) : bn(e, n);
}
$t.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(i, r) {
    return $t(i, r, n);
  }, {});
};
var ks = $t, Ds = ks;
const Ms = /* @__PURE__ */ vs(Ds);
var mi = function(t, e) {
  return mi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, mi(t, e);
};
function Ze(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  mi(t, e);
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
function Bs(t, e) {
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
    return a instanceof n ? a : new n(function(l) {
      l(a);
    });
  }
  return new (n || (n = Promise))(function(a, l) {
    function o(f) {
      try {
        u(i.next(f));
      } catch (c) {
        l(c);
      }
    }
    function s(f) {
      try {
        u(i.throw(f));
      } catch (c) {
        l(c);
      }
    }
    function u(f) {
      f.done ? a(f.value) : r(f.value).then(o, s);
    }
    u((i = i.apply(t, e || [])).next());
  });
}
function Li(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, r, a, l = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return l.next = o(0), l.throw = o(1), l.return = o(2), typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function o(u) {
    return function(f) {
      return s([u, f]);
    };
  }
  function s(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; l && (l = 0, u[0] && (n = 0)), n; )
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
function Ye(t) {
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
  var i = n.call(t), r, a = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      a.push(r.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return a;
}
function Qt(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = e.length, a; i < r; i++)
      (a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Yt(t) {
  return this instanceof Yt ? (this.v = t, this) : new Yt(t);
}
function Ps(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(t, e || []), r, a = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", l), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function l(p) {
    return function(g) {
      return Promise.resolve(g).then(p, c);
    };
  }
  function o(p, g) {
    i[p] && (r[p] = function(b) {
      return new Promise(function(m, y) {
        a.push([p, b, m, y]) > 1 || s(p, b);
      });
    }, g && (r[p] = g(r[p])));
  }
  function s(p, g) {
    try {
      u(i[p](g));
    } catch (b) {
      d(a[0][3], b);
    }
  }
  function u(p) {
    p.value instanceof Yt ? Promise.resolve(p.value.v).then(f, c) : d(a[0][2], p);
  }
  function f(p) {
    s("next", p);
  }
  function c(p) {
    s("throw", p);
  }
  function d(p, g) {
    p(g), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function Us(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Ye == "function" ? Ye(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function i(a) {
    n[a] = t[a] && function(l) {
      return new Promise(function(o, s) {
        l = t[a](l), r(o, s, l.done, l.value);
      });
    };
  }
  function r(a, l, o, s) {
    Promise.resolve(s).then(function(u) {
      a({ value: u, done: o });
    }, l);
  }
}
function Kn(t, e) {
  var n = e && e.cache ? e.cache : zs, i = e && e.serializer ? e.serializer : Vs, r = e && e.strategy ? e.strategy : js;
  return r(t, {
    cache: n,
    serializer: i
  });
}
function Fs(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Ns(t, e, n, i) {
  var r = Fs(i) ? i : n(i), a = e.get(r);
  return typeof a > "u" && (a = t.call(this, i), e.set(r, a)), a;
}
function Wa(t, e, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), a = e.get(r);
  return typeof a > "u" && (a = t.apply(this, i), e.set(r, a)), a;
}
function Za(t, e, n, i, r) {
  return n.bind(e, t, i, r);
}
function js(t, e) {
  var n = t.length === 1 ? Ns : Wa;
  return Za(t, this, n, e.cache.create(), e.serializer);
}
function Gs(t, e) {
  return Za(t, this, Wa, e.cache.create(), e.serializer);
}
var Vs = function() {
  return JSON.stringify(arguments);
}, qs = (
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
), zs = {
  create: function() {
    return new qs();
  }
}, Qn = {
  variadic: Gs
}, me;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(me || (me = {}));
var Re;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(Re || (Re = {}));
var en;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(en || (en = {}));
function Vi(t) {
  return t.type === Re.literal;
}
function Xs(t) {
  return t.type === Re.argument;
}
function Ka(t) {
  return t.type === Re.number;
}
function Qa(t) {
  return t.type === Re.date;
}
function Ya(t) {
  return t.type === Re.time;
}
function Ja(t) {
  return t.type === Re.select;
}
function xa(t) {
  return t.type === Re.plural;
}
function Ws(t) {
  return t.type === Re.pound;
}
function $a(t) {
  return t.type === Re.tag;
}
function el(t) {
  return !!(t && typeof t == "object" && t.type === en.number);
}
function gi(t) {
  return !!(t && typeof t == "object" && t.type === en.dateTime);
}
var tl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Zs = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Ks(t) {
  var e = {};
  return t.replace(Zs, function(n) {
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
var Qs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ys(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Qs).filter(function(d) {
    return d.length > 0;
  }), n = [], i = 0, r = e; i < r.length; i++) {
    var a = r[i], l = a.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = l[0], s = l.slice(1), u = 0, f = s; u < f.length; u++) {
      var c = f[u];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: s });
  }
  return n;
}
function Js(t) {
  return t.replace(/^(.*?)-/, "");
}
var qi = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, nl = /^(@+)?(\+|#+)?[rs]?$/g, xs = /(\*)(0+)|(#+)(0+)|(0+)/g, il = /^(0+)$/;
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
function $s(t) {
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
function eu(t) {
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
        e.style = "unit", e.unit = Js(r.options[0]);
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
        r.options[0].replace(xs, function(s, u, f, c, d, p) {
          if (u)
            e.minimumIntegerDigits = f.length;
          else {
            if (c && d)
              throw new Error("We currently do not support maximum integer digits");
            if (p)
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
      r.stem.replace(qi, function(s, u, f, c, d, p) {
        return f === "*" ? e.minimumFractionDigits = u.length : c && c[0] === "#" ? e.maximumFractionDigits = c.length : d && p ? (e.minimumFractionDigits = d.length, e.maximumFractionDigits = d.length + p.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = r.options[0];
      a === "w" ? e = x(x({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = x(x({}, e), zi(a)));
      continue;
    }
    if (nl.test(r.stem)) {
      e = x(x({}, e), zi(r.stem));
      continue;
    }
    var l = rl(r.stem);
    l && (e = x(x({}, e), l));
    var o = $s(r.stem);
    o && (e = x(x({}, e), o));
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
function tu(t, e) {
  for (var n = "", i = 0; i < t.length; i++) {
    var r = t.charAt(i);
    if (r === "j") {
      for (var a = 0; i + 1 < t.length && t.charAt(i + 1) === r; )
        a++, i++;
      var l = 1 + (a & 1), o = a < 2 ? 1 : 3 + (a >> 1), s = "a", u = nu(e);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        n += s;
      for (; l-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function nu(t) {
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
var Yn, iu = new RegExp("^".concat(tl.source, "*")), ru = new RegExp("".concat(tl.source, "*$"));
function be(t, e) {
  return { start: t, end: e };
}
var au = !!String.prototype.startsWith && "_a".startsWith("a", 1), lu = !!String.fromCodePoint, ou = !!Object.fromEntries, su = !!String.prototype.codePointAt, uu = !!String.prototype.trimStart, fu = !!String.prototype.trimEnd, cu = !!Number.isSafeInteger, du = cu ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, bi = !0;
try {
  var hu = ll("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  bi = ((Yn = hu.exec("a")) === null || Yn === void 0 ? void 0 : Yn[0]) === "a";
} catch {
  bi = !1;
}
var Wi = au ? (
  // Native
  function(e, n, i) {
    return e.startsWith(n, i);
  }
) : (
  // For IE11
  function(e, n, i) {
    return e.slice(i, i + n.length) === n;
  }
), _i = lu ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var i = "", r = e.length, a = 0, l; r > a; ) {
      if (l = e[a++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      i += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return i;
  }
), Zi = (
  // native
  ou ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, i = 0, r = e; i < r.length; i++) {
        var a = r[i], l = a[0], o = a[1];
        n[l] = o;
      }
      return n;
    }
  )
), al = su ? (
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
), mu = uu ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(iu, "");
  }
), pu = fu ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(ru, "");
  }
);
function ll(t, e) {
  return new RegExp(t, e);
}
var vi;
if (bi) {
  var Ki = ll("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  vi = function(e, n) {
    var i;
    Ki.lastIndex = n;
    var r = Ki.exec(e);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  vi = function(e, n) {
    for (var i = []; ; ) {
      var r = al(e, n);
      if (r === void 0 || ol(r) || vu(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return _i.apply(void 0, i);
  };
var gu = (
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
          var l = this.parseArgument(e, i);
          if (l.err)
            return l;
          r.push(l.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), r.push({
              type: Re.pound,
              location: be(o, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(me.UNMATCHED_CLOSING_TAG, be(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && yi(this.peek() || 0)) {
            var l = this.parseTag(e, n);
            if (l.err)
              return l;
            r.push(l.val);
          } else {
            var l = this.parseLiteral(e, n);
            if (l.err)
              return l;
            r.push(l.val);
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
            type: Re.literal,
            value: "<".concat(r, "/>"),
            location: be(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var l = a.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !yi(this.char()))
            return this.error(me.INVALID_TAG, be(o, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(me.UNMATCHED_CLOSING_TAG, be(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Re.tag,
              value: r,
              children: l,
              location: be(i, this.clonePosition())
            },
            err: null
          } : this.error(me.INVALID_TAG, be(o, this.clonePosition())));
        } else
          return this.error(me.UNCLOSED_TAG, be(i, this.clonePosition()));
      } else
        return this.error(me.INVALID_TAG, be(i, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && _u(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          r += a;
          continue;
        }
        var l = this.tryParseUnquoted(e, n);
        if (l) {
          r += l;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          r += o;
          continue;
        }
        break;
      }
      var s = be(i, this.clonePosition());
      return {
        val: { type: Re.literal, value: r, location: s },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !bu(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return _i.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), _i(i));
    }, t.prototype.parseArgument = function(e, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(me.EMPTY_ARGUMENT, be(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(me.MALFORMED_ARGUMENT, be(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Re.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: be(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(i, this.clonePosition())) : this.parseArgumentOptions(e, n, r, i);
        default:
          return this.error(me.MALFORMED_ARGUMENT, be(i, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), i = vi(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var a = this.clonePosition(), l = be(e, a);
      return { value: i, location: l };
    }, t.prototype.parseArgumentOptions = function(e, n, i, r) {
      var a, l = this.clonePosition(), o = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (o) {
        case "":
          return this.error(me.EXPECT_ARGUMENT_TYPE, be(l, s));
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
            var d = pu(c.val);
            if (d.length === 0)
              return this.error(me.EXPECT_ARGUMENT_STYLE, be(this.clonePosition(), this.clonePosition()));
            var p = be(f, this.clonePosition());
            u = { style: d, styleLocation: p };
          }
          var g = this.tryParseArgumentClose(r);
          if (g.err)
            return g;
          var b = be(r, this.clonePosition());
          if (u && Wi(u == null ? void 0 : u.style, "::", 0)) {
            var m = mu(u.style.slice(2));
            if (o === "number") {
              var c = this.parseNumberSkeletonFromString(m, u.styleLocation);
              return c.err ? c : {
                val: { type: Re.number, value: i, location: b, style: c.val },
                err: null
              };
            } else {
              if (m.length === 0)
                return this.error(me.EXPECT_DATE_TIME_SKELETON, b);
              var y = m;
              this.locale && (y = tu(m, this.locale));
              var d = {
                type: en.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Ks(y) : {}
              }, v = o === "date" ? Re.date : Re.time;
              return {
                val: { type: v, value: i, location: b, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? Re.number : o === "date" ? Re.date : Re.time,
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
            return this.error(me.EXPECT_SELECT_ARGUMENT_OPTIONS, be(O, x({}, O)));
          this.bumpSpace();
          var A = this.parseIdentifierIfPossible(), D = 0;
          if (o !== "select" && A.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, be(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, me.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), A = this.parseIdentifierIfPossible(), D = c.val;
          }
          var M = this.tryParsePluralOrSelectOptions(e, o, n, A);
          if (M.err)
            return M;
          var g = this.tryParseArgumentClose(r);
          if (g.err)
            return g;
          var h = be(r, this.clonePosition());
          return o === "select" ? {
            val: {
              type: Re.select,
              value: i,
              options: Zi(M.val),
              location: h
            },
            err: null
          } : {
            val: {
              type: Re.plural,
              value: i,
              options: Zi(M.val),
              offset: D,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: h
            },
            err: null
          };
        }
        default:
          return this.error(me.INVALID_ARGUMENT_TYPE, be(l, s));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(me.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, be(r, this.clonePosition()));
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
        i = Ys(e);
      } catch {
        return this.error(me.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: en.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? eu(i) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, i, r) {
      for (var a, l = !1, o = [], s = /* @__PURE__ */ new Set(), u = r.value, f = r.location; ; ) {
        if (u.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(me.EXPECT_PLURAL_ARGUMENT_SELECTOR, me.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            f = be(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? me.DUPLICATE_SELECT_ARGUMENT_SELECTOR : me.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (l = !0), this.bumpSpace();
        var p = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? me.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : me.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, be(this.clonePosition(), this.clonePosition()));
        var g = this.parseMessage(e + 1, n, i);
        if (g.err)
          return g;
        var b = this.tryParseArgumentClose(p);
        if (b.err)
          return b;
        o.push([
          u,
          {
            value: g.val,
            location: be(p, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, f = a.location;
      }
      return o.length === 0 ? this.error(n === "select" ? me.EXPECT_SELECT_ARGUMENT_SELECTOR : me.EXPECT_PLURAL_ARGUMENT_SELECTOR, be(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(me.MISSING_OTHER_CLAUSE, be(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var a = !1, l = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          a = !0, l = l * 10 + (o - 48), this.bump();
        else
          break;
      }
      var s = be(r, this.clonePosition());
      return a ? (l *= i, du(l) ? { val: l, err: null } : this.error(n, s)) : this.error(e, s);
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
function yi(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function bu(t) {
  return yi(t) || t === 47;
}
function _u(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function ol(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function vu(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ai(t) {
  t.forEach(function(e) {
    if (delete e.location, Ja(e) || xa(e))
      for (var n in e.options)
        delete e.options[n].location, Ai(e.options[n].value);
    else
      Ka(e) && el(e.style) || (Qa(e) || Ya(e)) && gi(e.style) ? delete e.style.location : $a(e) && Ai(e.children);
  });
}
function yu(t, e) {
  e === void 0 && (e = {}), e = x({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new gu(t, e).parse();
  if (n.err) {
    var i = SyntaxError(me[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || Ai(n.val), n.val;
}
var tn;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(tn || (tn = {}));
var Vn = (
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
), Qi = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i, r, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), tn.INVALID_VALUE, a) || this;
    }
    return e;
  }(Vn)
), Au = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), tn.INVALID_VALUE, r) || this;
    }
    return e;
  }(Vn)
), Su = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), tn.MISSING_VALUE, i) || this;
    }
    return e;
  }(Vn)
), xe;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(xe || (xe = {}));
function Cu(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== xe.literal || n.type !== xe.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function Eu(t) {
  return typeof t == "function";
}
function kn(t, e, n, i, r, a, l) {
  if (t.length === 1 && Vi(t[0]))
    return [
      {
        type: xe.literal,
        value: t[0].value
      }
    ];
  for (var o = [], s = 0, u = t; s < u.length; s++) {
    var f = u[s];
    if (Vi(f)) {
      o.push({
        type: xe.literal,
        value: f.value
      });
      continue;
    }
    if (Ws(f)) {
      typeof a == "number" && o.push({
        type: xe.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var c = f.value;
    if (!(r && c in r))
      throw new Su(c, l);
    var d = r[c];
    if (Xs(f)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), o.push({
        type: typeof d == "string" ? xe.literal : xe.object,
        value: d
      });
      continue;
    }
    if (Qa(f)) {
      var p = typeof f.style == "string" ? i.date[f.style] : gi(f.style) ? f.style.parsedOptions : void 0;
      o.push({
        type: xe.literal,
        value: n.getDateTimeFormat(e, p).format(d)
      });
      continue;
    }
    if (Ya(f)) {
      var p = typeof f.style == "string" ? i.time[f.style] : gi(f.style) ? f.style.parsedOptions : i.time.medium;
      o.push({
        type: xe.literal,
        value: n.getDateTimeFormat(e, p).format(d)
      });
      continue;
    }
    if (Ka(f)) {
      var p = typeof f.style == "string" ? i.number[f.style] : el(f.style) ? f.style.parsedOptions : void 0;
      p && p.scale && (d = d * (p.scale || 1)), o.push({
        type: xe.literal,
        value: n.getNumberFormat(e, p).format(d)
      });
      continue;
    }
    if ($a(f)) {
      var g = f.children, b = f.value, m = r[b];
      if (!Eu(m))
        throw new Au(b, "function", l);
      var y = kn(g, e, n, i, r, a), v = m(y.map(function(D) {
        return D.value;
      }));
      Array.isArray(v) || (v = [v]), o.push.apply(o, v.map(function(D) {
        return {
          type: typeof D == "string" ? xe.literal : xe.object,
          value: D
        };
      }));
    }
    if (Ja(f)) {
      var O = f.options[d] || f.options.other;
      if (!O)
        throw new Qi(f.value, d, Object.keys(f.options), l);
      o.push.apply(o, kn(O.value, e, n, i, r));
      continue;
    }
    if (xa(f)) {
      var O = f.options["=".concat(d)];
      if (!O) {
        if (!Intl.PluralRules)
          throw new Vn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, tn.MISSING_INTL_API, l);
        var A = n.getPluralRules(e, { type: f.pluralType }).select(d - (f.offset || 0));
        O = f.options[A] || f.options.other;
      }
      if (!O)
        throw new Qi(f.value, d, Object.keys(f.options), l);
      o.push.apply(o, kn(O.value, e, n, i, r, d - (f.offset || 0)));
      continue;
    }
  }
  return Cu(o);
}
function Iu(t, e) {
  return e ? x(x(x({}, t || {}), e || {}), Object.keys(t).reduce(function(n, i) {
    return n[i] = x(x({}, t[i]), e[i] || {}), n;
  }, {})) : t;
}
function Lu(t, e) {
  return e ? Object.keys(t).reduce(function(n, i) {
    return n[i] = Iu(t[i], e[i]), n;
  }, x({}, t)) : t;
}
function Jn(t) {
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
function Ou(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Kn(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, Qt([void 0], n, !1)))();
    }, {
      cache: Jn(t.number),
      strategy: Qn.variadic
    }),
    getDateTimeFormat: Kn(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Qt([void 0], n, !1)))();
    }, {
      cache: Jn(t.dateTime),
      strategy: Qn.variadic
    }),
    getPluralRules: Kn(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, Qt([void 0], n, !1)))();
    }, {
      cache: Jn(t.pluralRules),
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
        var l = r || {};
        l.formatters;
        var o = Bs(l, ["formatters"]);
        this.ast = t.__parse(e, x(x({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Lu(t.formats, i), this.formatters = r && r.formatters || Ou(this.formatterCache);
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
    }, t.__parse = yu, t.formats = {
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
function wu(t, e) {
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
const Ot = {}, Tu = (t, e, n) => n && (e in Ot || (Ot[e] = {}), t in Ot[e] || (Ot[e][t] = n), n), ul = (t, e) => {
  if (e == null)
    return;
  if (e in Ot && t in Ot[e])
    return Ot[e][t];
  const n = yn(e);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], a = Hu(r, t);
    if (a)
      return Tu(t, e, a);
  }
};
let Oi;
const vn = it({});
function Ru(t) {
  return Oi[t] || null;
}
function fl(t) {
  return t in Oi;
}
function Hu(t, e) {
  if (!fl(t))
    return null;
  const n = Ru(t);
  return wu(n, e);
}
function ku(t) {
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
  delete Ot[t], vn.update((n) => (n[t] = Ms.all([n[t] || {}, ...e]), n));
}
ln(
  [vn],
  ([t]) => Object.keys(t)
);
vn.subscribe((t) => Oi = t);
const Dn = {};
function Du(t, e) {
  Dn[t].delete(e), Dn[t].size === 0 && delete Dn[t];
}
function dl(t) {
  return Dn[t];
}
function Mu(t) {
  return yn(t).map((e) => {
    const n = dl(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Pn(t) {
  return t == null ? !1 : yn(t).some(
    (e) => {
      var n;
      return (n = dl(e)) == null ? void 0 : n.size;
    }
  );
}
function Bu(t, e) {
  return Promise.all(
    e.map((i) => (Du(t, i), i().then((r) => r.default || r)))
  ).then((i) => cl(t, ...i));
}
const fn = {};
function hl(t) {
  if (!Pn(t))
    return t in fn ? fn[t] : Promise.resolve();
  const e = Mu(t);
  return fn[t] = Promise.all(
    e.map(
      ([n, i]) => Bu(n, i)
    )
  ).then(() => {
    if (Pn(t))
      return hl(t);
    delete fn[t];
  }), fn[t];
}
var Yi = Object.getOwnPropertySymbols, Pu = Object.prototype.hasOwnProperty, Uu = Object.prototype.propertyIsEnumerable, Fu = (t, e) => {
  var n = {};
  for (var i in t)
    Pu.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Yi)
    for (var i of Yi(t))
      e.indexOf(i) < 0 && Uu.call(t, i) && (n[i] = t[i]);
  return n;
};
const Nu = {
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
function ju({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${yn(
      t
    ).join('", "')}".${Pn(kt()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Gu = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Nu,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, hn = Gu;
function nn() {
  return hn;
}
function Vu(t) {
  const e = t, { formats: n } = e, i = Fu(e, ["formats"]);
  let r = t.fallbackLocale;
  if (t.initialLocale)
    try {
      sl.resolveLocale(t.initialLocale) && (r = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return i.warnOnMissingMessages && (delete i.warnOnMissingMessages, i.handleMissingMessage == null ? i.handleMissingMessage = ju : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(hn, i, { initialLocale: r }), n && ("number" in n && Object.assign(hn.formats.number, n.number), "date" in n && Object.assign(hn.formats.date, n.date), "time" in n && Object.assign(hn.formats.time, n.time)), jt.set(r);
}
const xn = it(!1);
var qu = Object.defineProperty, zu = Object.defineProperties, Xu = Object.getOwnPropertyDescriptors, Ji = Object.getOwnPropertySymbols, Wu = Object.prototype.hasOwnProperty, Zu = Object.prototype.propertyIsEnumerable, xi = (t, e, n) => e in t ? qu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Ku = (t, e) => {
  for (var n in e || (e = {}))
    Wu.call(e, n) && xi(t, n, e[n]);
  if (Ji)
    for (var n of Ji(e))
      Zu.call(e, n) && xi(t, n, e[n]);
  return t;
}, Qu = (t, e) => zu(t, Xu(e));
let Si;
const Un = it(null);
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
Un.subscribe((t) => {
  Si = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Yu = (t) => {
  if (t && ku(t) && Pn(t)) {
    const { loadingDelay: e } = nn();
    let n;
    return typeof window < "u" && kt() != null && e ? n = window.setTimeout(
      () => xn.set(!0),
      e
    ) : xn.set(!0), hl(t).then(() => {
      Un.set(t);
    }).finally(() => {
      clearTimeout(n), xn.set(!1);
    });
  }
  return Un.set(t);
}, jt = Qu(Ku({}, Un), {
  set: Yu
}), Ju = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], qn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in e ? e[r] : e[r] = t(i);
  };
};
var xu = Object.defineProperty, Fn = Object.getOwnPropertySymbols, ml = Object.prototype.hasOwnProperty, pl = Object.prototype.propertyIsEnumerable, er = (t, e, n) => e in t ? xu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, wi = (t, e) => {
  for (var n in e || (e = {}))
    ml.call(e, n) && er(t, n, e[n]);
  if (Fn)
    for (var n of Fn(e))
      pl.call(e, n) && er(t, n, e[n]);
  return t;
}, on = (t, e) => {
  var n = {};
  for (var i in t)
    ml.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Fn)
    for (var i of Fn(t))
      e.indexOf(i) < 0 && pl.call(t, i) && (n[i] = t[i]);
  return n;
};
const _n = (t, e) => {
  const { formats: n } = nn();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, $u = qn(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = on(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = _n("number", i)), new Intl.NumberFormat(n, r);
  }
), ef = qn(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = on(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = _n("date", i) : Object.keys(r).length === 0 && (r = _n("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), tf = qn(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = on(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = _n("time", i) : Object.keys(r).length === 0 && (r = _n("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), nf = (t = {}) => {
  var e = t, {
    locale: n = kt()
  } = e, i = on(e, [
    "locale"
  ]);
  return $u(wi({ locale: n }, i));
}, rf = (t = {}) => {
  var e = t, {
    locale: n = kt()
  } = e, i = on(e, [
    "locale"
  ]);
  return ef(wi({ locale: n }, i));
}, af = (t = {}) => {
  var e = t, {
    locale: n = kt()
  } = e, i = on(e, [
    "locale"
  ]);
  return tf(wi({ locale: n }, i));
}, lf = qn(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = kt()) => new sl(t, e, nn().formats, {
    ignoreTag: nn().ignoreTag
  })
), of = (t, e = {}) => {
  var n, i, r, a;
  let l = e;
  typeof t == "object" && (l = t, t = l.id);
  const {
    values: o,
    locale: s = kt(),
    default: u
  } = l;
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
  if (!o)
    return f;
  let c = f;
  try {
    c = lf(f, s).format(o);
  } catch (d) {
    d instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      d.message
    );
  }
  return c;
}, sf = (t, e) => af(e).format(t), uf = (t, e) => rf(e).format(t), ff = (t, e) => nf(e).format(t), cf = (t, e = kt()) => ul(t, e), df = ln([jt, vn], () => of);
ln([jt], () => sf);
ln([jt], () => uf);
ln([jt], () => ff);
ln([jt, vn], () => cf);
function hf(t, e) {
  Object.entries(t).forEach(([a, l]) => {
    cl(a, l);
  });
  const n = localStorage.getItem("language"), i = "en", r = n ?? Ju();
  console.log("Initial: Setting the language to", r), Vu({
    fallbackLocale: i,
    initialLocale: r
  }), window.addEventListener("oscd-language-changed", (a) => {
    const l = a;
    if (!l.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", l.detail.language), jt.set(l.detail.language);
  });
}
function Y(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function _e(t, e, n, i = { bubbles: !0 }, r = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dipatch event without element.");
  const a = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: n }));
  if (t == null || t.dispatchEvent(a), r && e.startsWith("SMUI")) {
    const l = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: n }));
    t == null || t.dispatchEvent(l), l.defaultPrevented && a.preventDefault();
  }
  return a;
}
function Rt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const a = n[r], l = a.indexOf("$");
    l !== -1 && e.indexOf(a.substring(0, l + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = t[a]);
  }
  return i;
}
const tr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, mf = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ge(t) {
  let e, n = [];
  t.$on = (r, a) => {
    let l = r, o = () => {
    };
    return e ? o = e(l, a) : n.push([l, a]), l.match(tr) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', l), () => {
      o();
    };
  };
  function i(r) {
    const a = t.$$.callbacks[r.type];
    a && a.slice().forEach((l) => l.call(this, r));
  }
  return (r) => {
    const a = [], l = {};
    e = (o, s) => {
      let u = o, f = s, c = !1;
      const d = u.match(tr), p = u.match(mf), g = d || p;
      if (u.match(/^SMUI:\w+:/)) {
        const y = u.split(":");
        let v = "";
        for (let O = 0; O < y.length; O++)
          v += O === y.length - 1 ? ":" + y[O] : y[O].split("-").map((A) => A.slice(0, 1).toUpperCase() + A.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (g) {
        const y = u.split(d ? ":" : "$");
        u = y[0];
        const v = y.slice(1).reduce((O, A) => (O[A] = !0, O), {});
        v.passive && (c = c || {}, c.passive = !0), v.nonpassive && (c = c || {}, c.passive = !1), v.capture && (c = c || {}, c.capture = !0), v.once && (c = c || {}, c.once = !0), v.preventDefault && (f = pf(f)), v.stopPropagation && (f = gf(f)), v.stopImmediatePropagation && (f = bf(f)), v.self && (f = _f(r, f)), v.trusted && (f = vf(f));
      }
      const b = nr(r, u, f, c), m = () => {
        b();
        const y = a.indexOf(m);
        y > -1 && a.splice(y, 1);
      };
      return a.push(m), u in l || (l[u] = nr(r, u, i)), m;
    };
    for (let o = 0; o < n.length; o++)
      e(n[o][0], n[o][1]);
    return {
      destroy: () => {
        for (let o = 0; o < a.length; o++)
          a[o]();
        for (let o of Object.entries(l))
          o[1]();
      }
    };
  };
}
function nr(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function pf(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function gf(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function bf(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function _f(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function vf(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function Ue(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = t[a]);
  }
  return i;
}
function De(t, e) {
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
            const l = i[r];
            Array.isArray(l) && l.length > 1 ? a.update(l[1]) : a.update();
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
function yf(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = Ln;
  if (typeof Ln == "boolean" && !e)
    return Ln;
  var r = n && typeof n.supports == "function";
  if (!r)
    return !1;
  var a = n.supports("--css-vars", "yes"), l = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = a || l, e || (Ln = i), i;
}
function Af(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, a = i + n.left, l = r + n.top, o, s;
  if (t.type === "touchstart") {
    var u = t;
    o = u.changedTouches[0].pageX - a, s = u.changedTouches[0].pageY - l;
  } else {
    var f = t;
    o = f.pageX - a, s = f.pageY - l;
  }
  return { x: o, y: s };
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
var gt = (
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
function Sf(t) {
  return t === void 0 && (t = window), Cf(t) ? { passive: !0 } : !1;
}
function Cf(t) {
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
const gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Sf
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
function Ef(t, e) {
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
function If(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const Ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ef,
  estimateScrollWidth: If,
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
var Lf = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Of = {
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
], On = [], wf = (
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
        return Lf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Of;
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
        var r = e.cssClasses, a = r.ROOT, l = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(l), n.layoutInternal());
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
          for (var a = Ye(rr), l = a.next(); !l.done; l = a.next()) {
            var o = l.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            l && !l.done && (r = a.return) && r.call(a);
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
          for (var a = Ye(ar), l = a.next(); !l.done; l = a.next()) {
            var o = l.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            l && !l.done && (r = a.return) && r.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var r = Ye(rr), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
        }
      } catch (o) {
        n = { error: o };
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
        for (var r = Ye(ar), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
        }
      } catch (o) {
        n = { error: o };
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
          var a = this.previousActivationEvent, l = a && n !== void 0 && a.type !== n.type;
          if (!l) {
            r.isActivated = !0, r.isProgrammatic = n === void 0, r.activationEvent = n, r.wasActivatedByPointer = r.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var o = n !== void 0 && On.length > 0 && On.some(function(s) {
              return i.adapter.containsEventTarget(s);
            });
            if (o) {
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
      var n = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, l = e.cssClasses, o = l.FG_DEACTIVATION, s = l.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), p = d.startPoint, g = d.endPoint;
        f = p.x + "px, " + p.y + "px", c = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(r, f), this.adapter.updateCssVariable(a, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, r = n.wasActivatedByPointer, a;
      r ? a = Af(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var l = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: l };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, l = r.isActivated, o = a || !l;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
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
        var l = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var a = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, i = n.VAR_FG_SIZE, r = n.VAR_LEFT, a = n.VAR_TOP, l = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(gt)
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
var $n = "mdc-dom-focus-sentinel", Tf = (
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
      [].slice.call(this.root.querySelectorAll("." + $n)).forEach(function(e) {
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
        var r = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", a = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains($n) && !r, l = !1;
        if (a) {
          var o = getComputedStyle(i);
          l = o.display === "none" || o.visibility === "hidden";
        }
        return a && !l;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add($n), e;
    }, t;
  }()
);
const Rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Tf
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: wn } = gl, { matches: Hf } = Ti;
function wt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: r = !1, color: a, active: l, rippleElement: o, eventTarget: s, activeTarget: u, addClass: f = (g) => t.classList.add(g), removeClass: c = (g) => t.classList.remove(g), addStyle: d = (g, b) => t.style.setProperty(g, b), initPromise: p = Promise.resolve() } = {}) {
  let g, b = ke("SMUI:addLayoutListener"), m, y = l, v = s, O = u;
  function A() {
    n ? (f("mdc-ripple-surface"), a === "primary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : a === "secondary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : (c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary"))) : (c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), g && y !== l && (y = l, l ? g.activate() : l === !1 && g.deactivate()), e && !g ? (g = new wf({
      addClass: f,
      browserSupportsCssVars: () => yf(window),
      computeBoundingRect: () => (o || t).getBoundingClientRect(),
      containsEventTarget: (M) => t.contains(M),
      deregisterDocumentInteractionHandler: (M, h) => document.documentElement.removeEventListener(M, h, wn()),
      deregisterInteractionHandler: (M, h) => (s || t).removeEventListener(M, h, wn()),
      deregisterResizeHandler: (M) => window.removeEventListener("resize", M),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => l ?? Hf(u || t, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (M, h) => document.documentElement.addEventListener(M, h, wn()),
      registerInteractionHandler: (M, h) => (s || t).addEventListener(M, h, wn()),
      registerResizeHandler: (M) => window.addEventListener("resize", M),
      removeClass: c,
      updateCssVariable: d
    }), p.then(() => {
      g && (g.init(), g.setUnbounded(i));
    })) : g && !e && p.then(() => {
      g && (g.destroy(), g = void 0);
    }), g && (v !== s || O !== u) && (v = s, O = u, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(i));
    })), !e && i && f("mdc-ripple-upgraded--unbounded");
  }
  A(), b && (m = b(D));
  function D() {
    g && g.layout();
  }
  return {
    update(M) {
      ({
        ripple: e,
        surface: n,
        unbounded: i,
        disabled: r,
        color: a,
        active: l,
        rippleElement: o,
        eventTarget: s,
        activeTarget: u,
        addClass: f,
        removeClass: c,
        addStyle: d,
        initPromise: p
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => t.classList.add(h), removeClass: (h) => t.classList.remove(h), addStyle: (h, R) => t.style.setProperty(h, R), initPromise: Promise.resolve() }, M)), A();
    },
    destroy() {
      g && (g.destroy(), g = void 0, c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), m && m();
    }
  };
}
function kf(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = re(
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
      4096) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? ae(
          n,
          /*$$scope*/
          r[12],
          a,
          null
        ) : oe(
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
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Df(t) {
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
  function l(o, s) {
    let u = {
      $$slots: { default: [kf] },
      $$scope: { ctx: o }
    };
    for (let f = 0; f < r.length; f += 1)
      u = q(u, r[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = q(u, ce(r, [
      s & /*tag*/
      8 && { tag: (
        /*tag*/
        o[3]
      ) },
      s & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          o[5],
          .../*use*/
          o[0]
        ]
      },
      s & /*className, context*/
      66 && {
        class: Y({
          [
            /*className*/
            o[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            o[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            o[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            o[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            o[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            o[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            o[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            o[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            o[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            o[6] === "data-table:sortable-header-cell"
          )
        })
      },
      s & /*context*/
      64 && Ee(
        /*context*/
        o[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      s & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        o[7]
      ) },
      s & /*$$restProps*/
      256 && Ee(
        /*$$restProps*/
        o[8]
      )
    ]))), { props: u };
  }
  return a && (e = pt(a, l(t)), t[11](e)), {
    c() {
      e && j(e.$$.fragment), n = Le();
    },
    m(o, s) {
      e && F(e, o, s), P(o, n, s), i = !0;
    },
    p(o, [s]) {
      if (s & /*component*/
      4 && a !== (a = /*component*/
      o[2])) {
        if (e) {
          ve();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), ye();
        }
        a ? (e = pt(a, l(o, s)), o[11](e), j(e.$$.fragment), C(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? ce(r, [
          s & /*tag*/
          8 && { tag: (
            /*tag*/
            o[3]
          ) },
          s & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              o[5],
              .../*use*/
              o[0]
            ]
          },
          s & /*className, context*/
          66 && {
            class: Y({
              [
                /*className*/
                o[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                o[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                o[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                o[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                o[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                o[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                o[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                o[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                o[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                o[6] === "data-table:sortable-header-cell"
              )
            })
          },
          s & /*context*/
          64 && Ee(
            /*context*/
            o[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          s & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            o[7]
          ) },
          s & /*$$restProps*/
          256 && Ee(
            /*$$restProps*/
            o[8]
          )
        ]) : {};
        s & /*$$scope*/
        4096 && (u.$$scope = { dirty: s, ctx: o }), e.$set(u);
      }
    },
    i(o) {
      i || (e && C(e.$$.fragment, o), i = !0);
    },
    o(o) {
      e && I(e.$$.fragment, o), i = !1;
    },
    d(o) {
      o && B(n), t[11](null), e && N(e, o);
    }
  };
}
function Mf(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  const o = Ge(Te());
  let { use: s = [] } = e, { class: u = "" } = e, f, { component: c = Ht } = e, { tag: d = c === Ht ? "span" : void 0 } = e;
  const p = ke("SMUI:label:context"), g = ke("SMUI:label:tabindex");
  function b() {
    return f.getElement();
  }
  function m(y) {
    ee[y ? "unshift" : "push"](() => {
      f = y, n(4, f);
    });
  }
  return t.$$set = (y) => {
    e = q(q({}, e), Fe(y)), n(8, r = ue(e, i)), "use" in y && n(0, s = y.use), "class" in y && n(1, u = y.class), "component" in y && n(2, c = y.component), "tag" in y && n(3, d = y.tag), "$$scope" in y && n(12, l = y.$$scope);
  }, [
    s,
    u,
    c,
    d,
    f,
    o,
    p,
    g,
    r,
    b,
    a,
    m,
    l
  ];
}
class Gt extends he {
  constructor(e) {
    super(), de(this, e, Mf, Df, se, {
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
function Bf(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i, r = (
    /*tag*/
    t[1] && ei(t)
  );
  return {
    c() {
      r && r.c(), n = Le();
    },
    m(a, l) {
      r && r.m(a, l), P(a, n, l), i = !0;
    },
    p(a, l) {
      /*tag*/
      a[1] ? e ? se(
        e,
        /*tag*/
        a[1]
      ) ? (r.d(1), r = ei(a), e = /*tag*/
      a[1], r.c(), r.m(n.parentNode, n)) : r.p(a, l) : (r = ei(a), e = /*tag*/
      a[1], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      a[1]);
    },
    i(a) {
      i || (C(r, a), i = !0);
    },
    o(a) {
      I(r, a), i = !1;
    },
    d(a) {
      a && B(n), r && r.d(a);
    }
  };
}
function Pf(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i = (
    /*tag*/
    t[1] && ti(t)
  );
  return {
    c() {
      i && i.c(), n = Le();
    },
    m(r, a) {
      i && i.m(r, a), P(r, n, a);
    },
    p(r, a) {
      /*tag*/
      r[1] ? e ? se(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = ti(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : i.p(r, a) : (i = ti(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: Ie,
    o: Ie,
    d(r) {
      r && B(n), i && i.d(r);
    }
  };
}
function Uf(t) {
  let e, n, i, r, a;
  const l = (
    /*#slots*/
    t[8].default
  ), o = re(
    l,
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
    u = q(u, s[f]);
  return {
    c() {
      e = Be("svg"), o && o.c(), ji(e, u);
    },
    m(f, c) {
      P(f, e, c), o && o.m(e, null), t[9](e), i = !0, r || (a = [
        te(n = De.call(
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
      o && o.p && (!i || c & /*$$scope*/
      128) && le(
        o,
        l,
        f,
        /*$$scope*/
        f[7],
        i ? ae(
          l,
          /*$$scope*/
          f[7],
          c,
          null
        ) : oe(
          /*$$scope*/
          f[7]
        ),
        null
      ), ji(e, u = ce(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && pe(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(o, f), i = !0);
    },
    o(f) {
      I(o, f), i = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[9](null), r = !1, Se(a);
    }
  };
}
function ei(t) {
  let e, n, i, r, a;
  const l = (
    /*#slots*/
    t[8].default
  ), o = re(
    l,
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
    u = q(u, s[f]);
  return {
    c() {
      e = K(
        /*tag*/
        t[1]
      ), o && o.c(), Mn(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(f, c) {
      P(f, e, c), o && o.m(e, null), t[11](e), i = !0, r || (a = [
        te(n = De.call(
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
      o && o.p && (!i || c & /*$$scope*/
      128) && le(
        o,
        l,
        f,
        /*$$scope*/
        f[7],
        i ? ae(
          l,
          /*$$scope*/
          f[7],
          c,
          null
        ) : oe(
          /*$$scope*/
          f[7]
        ),
        null
      ), Mn(
        /*tag*/
        f[1]
      )(e, u = ce(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && pe(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(o, f), i = !0);
    },
    o(f) {
      I(o, f), i = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[11](null), r = !1, Se(a);
    }
  };
}
function ti(t) {
  let e, n, i, r, a = [
    /*$$restProps*/
    t[5]
  ], l = {};
  for (let o = 0; o < a.length; o += 1)
    l = q(l, a[o]);
  return {
    c() {
      e = K(
        /*tag*/
        t[1]
      ), Mn(
        /*tag*/
        t[1]
      )(e, l);
    },
    m(o, s) {
      P(o, e, s), t[10](e), i || (r = [
        te(n = De.call(
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
    p(o, s) {
      Mn(
        /*tag*/
        o[1]
      )(e, l = ce(a, [s & /*$$restProps*/
      32 && /*$$restProps*/
      o[5]])), n && pe(n.update) && s & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    d(o) {
      o && B(e), t[10](null), i = !1, Se(r);
    }
  };
}
function Ff(t) {
  let e, n, i, r;
  const a = [Uf, Pf, Bf], l = [];
  function o(s, u) {
    return (
      /*tag*/
      s[1] === "svg" ? 0 : (
        /*selfClosing*/
        s[3] ? 1 : 2
      )
    );
  }
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = o(s), e === f ? l[e].p(s, u) : (ve(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ye(), n = l[e], n ? n.p(s, u) : (n = l[e] = a[e](s), n.c()), C(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
function Nf(t, e, n) {
  let i;
  const r = ["use", "tag", "getElement"];
  let a = ue(e, r), { $$slots: l = {}, $$scope: o } = e, { use: s = [] } = e, { tag: u } = e;
  const f = Ge(Te());
  let c;
  function d() {
    return c;
  }
  function p(m) {
    ee[m ? "unshift" : "push"](() => {
      c = m, n(2, c);
    });
  }
  function g(m) {
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
    e = q(q({}, e), Fe(m)), n(5, a = ue(e, r)), "use" in m && n(0, s = m.use), "tag" in m && n(1, u = m.tag), "$$scope" in m && n(7, o = m.$$scope);
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
    o,
    l,
    p,
    g,
    b
  ];
}
class Ht extends he {
  constructor(e) {
    super(), de(this, e, Nf, Ff, se, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function jf(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = re(
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
      8) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[3],
        e ? ae(
          n,
          /*$$scope*/
          r[3],
          a,
          null
        ) : oe(
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
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Gf(t, e, n) {
  let i, { $$slots: r = {}, $$scope: a } = e, { key: l } = e, { value: o } = e;
  const s = it(o);
  return nt(t, s, (u) => n(5, i = u)), He(l, s), an(() => {
    s.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, l = u.key), "value" in u && n(2, o = u.value), "$$scope" in u && n(3, a = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && Lt(s, i = o, i);
  }, [s, l, o, a, r];
}
class Nn extends he {
  constructor(e) {
    super(), de(this, e, Gf, jf, se, { key: 1, value: 2 });
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
function Vf(t) {
  let e, n, i, r;
  const a = (
    /*#slots*/
    t[28].default
  ), l = re(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let o = (
    /*touch*/
    t[6] && lr()
  );
  return {
    c() {
      e = K("div"), n = Q(), l && l.c(), o && o.c(), i = Le(), U(e, "class", "mdc-button__ripple");
    },
    m(s, u) {
      P(s, e, u), P(s, n, u), l && l.m(s, u), o && o.m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      l && l.p && (!r || u[0] & /*$$scope*/
      1073741824) && le(
        l,
        a,
        s,
        /*$$scope*/
        s[30],
        r ? ae(
          a,
          /*$$scope*/
          s[30],
          u,
          null
        ) : oe(
          /*$$scope*/
          s[30]
        ),
        null
      ), /*touch*/
      s[6] ? o || (o = lr(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(s) {
      r || (C(l, s), r = !0);
    },
    o(s) {
      I(l, s), r = !1;
    },
    d(s) {
      s && (B(e), B(n), B(i)), l && l.d(s), o && o.d(s);
    }
  };
}
function qf(t) {
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
      ).map(ni).concat([
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
  function l(o, s) {
    let u = {
      $$slots: { default: [Vf] },
      $$scope: { ctx: o }
    };
    for (let f = 0; f < r.length; f += 1)
      u = q(u, r[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = q(u, ce(r, [
      s[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        o[10]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            wt,
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
      s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: Y({
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
      s[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          o[13]
        ).map(ni).concat([
          /*style*/
          o[2]
        ]).join(" ")
      },
      s[0] & /*actionProp*/
      65536 && Ee(
        /*actionProp*/
        o[16]
      ),
      s[0] & /*defaultProp*/
      32768 && Ee(
        /*defaultProp*/
        o[15]
      ),
      s[0] & /*secondaryProp*/
      16384 && Ee(
        /*secondaryProp*/
        o[14]
      ),
      s[0] & /*href*/
      128 && { href: (
        /*href*/
        o[7]
      ) },
      s[0] & /*$$restProps*/
      8388608 && Ee(
        /*$$restProps*/
        o[23]
      )
    ]))), { props: u };
  }
  return a && (e = pt(a, l(t)), t[29](e), e.$on(
    "click",
    /*handleClick*/
    t[22]
  )), {
    c() {
      e && j(e.$$.fragment), n = Le();
    },
    m(o, s) {
      e && F(e, o, s), P(o, n, s), i = !0;
    },
    p(o, s) {
      if (s[0] & /*component*/
      512 && a !== (a = /*component*/
      o[9])) {
        if (e) {
          ve();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), ye();
        }
        a ? (e = pt(a, l(o, s)), o[29](e), e.$on(
          "click",
          /*handleClick*/
          o[22]
        ), j(e.$$.fragment), C(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? ce(r, [
          s[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            o[10]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                wt,
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
          s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: Y({
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
          s[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              o[13]
            ).map(ni).concat([
              /*style*/
              o[2]
            ]).join(" ")
          },
          s[0] & /*actionProp*/
          65536 && Ee(
            /*actionProp*/
            o[16]
          ),
          s[0] & /*defaultProp*/
          32768 && Ee(
            /*defaultProp*/
            o[15]
          ),
          s[0] & /*secondaryProp*/
          16384 && Ee(
            /*secondaryProp*/
            o[14]
          ),
          s[0] & /*href*/
          128 && { href: (
            /*href*/
            o[7]
          ) },
          s[0] & /*$$restProps*/
          8388608 && Ee(
            /*$$restProps*/
            o[23]
          )
        ]) : {};
        s[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: s, ctx: o }), e.$set(u);
      }
    },
    i(o) {
      i || (e && C(e.$$.fragment, o), i = !0);
    },
    o(o) {
      e && I(e.$$.fragment, o), i = !1;
    },
    d(o) {
      o && B(n), t[29](null), e && N(e, o);
    }
  };
}
const ni = ([t, e]) => `${t}: ${e};`;
function zf(t, e, n) {
  let i, r, a;
  const l = [
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
  let o = ue(e, l), { $$slots: s = {}, $$scope: u } = e;
  const f = Ge(Te());
  let { use: c = [] } = e, { class: d = "" } = e, { style: p = "" } = e, { ripple: g = !0 } = e, { color: b = "primary" } = e, { variant: m = "text" } = e, { touch: y = !1 } = e, { href: v = void 0 } = e, { action: O = "close" } = e, { defaultAction: A = !1 } = e, { secondary: D = !1 } = e, M, h = {}, R = {}, V = ke("SMUI:button:context"), { component: E = Ht } = e, { tag: _ = E === Ht ? v == null ? "button" : "a" : void 0 } = e, w = o.disabled;
  He("SMUI:label:context", "button"), He("SMUI:icon:context", "button");
  function H(S) {
    h[S] || n(12, h[S] = !0, h);
  }
  function X(S) {
    (!(S in h) || h[S]) && n(12, h[S] = !1, h);
  }
  function ie(S, z) {
    R[S] != z && (z === "" || z == null ? (delete R[S], n(13, R)) : n(13, R[S] = z, R));
  }
  function fe() {
    V === "banner" && _e(J(), D ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function J() {
    return M.getElement();
  }
  function k(S) {
    ee[S ? "unshift" : "push"](() => {
      M = S, n(11, M);
    });
  }
  return t.$$set = (S) => {
    n(31, e = q(q({}, e), Fe(S))), n(23, o = ue(e, l)), "use" in S && n(0, c = S.use), "class" in S && n(1, d = S.class), "style" in S && n(2, p = S.style), "ripple" in S && n(3, g = S.ripple), "color" in S && n(4, b = S.color), "variant" in S && n(5, m = S.variant), "touch" in S && n(6, y = S.touch), "href" in S && n(7, v = S.href), "action" in S && n(24, O = S.action), "defaultAction" in S && n(25, A = S.defaultAction), "secondary" in S && n(8, D = S.secondary), "component" in S && n(9, E = S.component), "tag" in S && n(10, _ = S.tag), "$$scope" in S && n(30, u = S.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = V === "dialog:action" && O != null ? { "data-mdc-dialog-action": O } : { action: e.action }), n(15, r = V === "dialog:action" && A ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, a = V === "banner" ? {} : { secondary: e.secondary }), w !== o.disabled) {
      if (M) {
        const S = J();
        "blur" in S && S.blur();
      }
      n(27, w = o.disabled);
    }
  }, e = Fe(e), [
    c,
    d,
    p,
    g,
    b,
    m,
    y,
    v,
    D,
    E,
    _,
    M,
    h,
    R,
    a,
    r,
    i,
    f,
    V,
    H,
    X,
    ie,
    fe,
    o,
    O,
    A,
    J,
    w,
    s,
    k,
    u
  ];
}
class Xf extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      zf,
      qf,
      se,
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
function Wf(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = re(
    n,
    t,
    /*$$scope*/
    t[5],
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
      32) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[5],
        e ? ae(
          n,
          /*$$scope*/
          r[5],
          a,
          null
        ) : oe(
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
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Zf(t) {
  let e, n;
  return e = new Xf({
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
        t[3] ? "background-color: #ff3e00;" : void 0
      ),
      $$slots: { default: [Wf] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      t[0]()
    ) && t[0]().apply(this, arguments);
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const a = {};
      r & /*variant*/
      4 && (a.variant = /*variant*/
      t[2]), r & /*disabled*/
      2 && (a.disabled = /*disabled*/
      t[1]), r & /*isAbortAction*/
      8 && (a.style = /*isAbortAction*/
      t[3] ? "background-color: #ff3e00;" : void 0), r & /*$$scope*/
      32 && (a.$$scope = { dirty: r, ctx: t }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Kf(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: a = () => {
  } } = e, { disabled: l = !1 } = e, { variant: o = "default" } = e, { isAbortAction: s = !1 } = e;
  return t.$$set = (u) => {
    "callback" in u && n(0, a = u.callback), "disabled" in u && n(1, l = u.disabled), "variant" in u && n(2, o = u.variant), "isAbortAction" in u && n(3, s = u.isAbortAction), "$$scope" in u && n(5, r = u.$$scope);
  }, [a, l, o, s, i, r];
}
class Nt extends he {
  constructor(e) {
    super(), de(this, e, Kf, Zf, se, {
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
var Tn = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, _t = {
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
var Qf = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Tn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
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
      var n = this.adapter.getAttr(_t.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(_t.DATA_ARIA_LABEL_OFF);
      if (n && i) {
        if (this.adapter.getAttr(_t.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(_t.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Tn.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Tn.ICON_BUTTON_ON) : this.adapter.removeClass(Tn.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(_t.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(_t.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(_t.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(_t.ARIA_PRESSED, "" + n);
    }, e;
  }(gt)
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
function Yf(t) {
  let e, n, i, r;
  const a = (
    /*#slots*/
    t[33].default
  ), l = re(
    a,
    t,
    /*$$scope*/
    t[37],
    null
  );
  let o = (
    /*touch*/
    t[8] && or()
  );
  return {
    c() {
      e = K("div"), n = Q(), l && l.c(), o && o.c(), i = Le(), U(e, "class", "mdc-icon-button__ripple");
    },
    m(s, u) {
      P(s, e, u), P(s, n, u), l && l.m(s, u), o && o.m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      l && l.p && (!r || u[1] & /*$$scope*/
      64) && le(
        l,
        a,
        s,
        /*$$scope*/
        s[37],
        r ? ae(
          a,
          /*$$scope*/
          s[37],
          u,
          null
        ) : oe(
          /*$$scope*/
          s[37]
        ),
        null
      ), /*touch*/
      s[8] ? o || (o = or(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(s) {
      r || (C(l, s), r = !0);
    },
    o(s) {
      I(l, s), r = !1;
    },
    d(s) {
      s && (B(e), B(n), B(i)), l && l.d(s), o && o.d(s);
    }
  };
}
function Jf(t) {
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
      ).map(ii).concat([
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
  function l(o, s) {
    let u = {
      $$slots: { default: [Yf] },
      $$scope: { ctx: o }
    };
    for (let f = 0; f < r.length; f += 1)
      u = q(u, r[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = q(u, ce(r, [
      s[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        o[14]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            wt,
            {
              ripple: (
                /*ripple*/
                o[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                o[5]
              ),
              disabled: !!/*$$restProps*/
              o[29].disabled,
              addClass: (
                /*addClass*/
                o[26]
              ),
              removeClass: (
                /*removeClass*/
                o[27]
              ),
              addStyle: (
                /*addStyle*/
                o[28]
              )
            }
          ],
          /*forwardEvents*/
          o[22],
          .../*use*/
          o[1]
        ]
      },
      s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: Y({
          [
            /*className*/
            o[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          o[23](
            /*pressed*/
            o[0]
          ) && /*pressed*/
          o[0],
          "mdc-icon-button--touch": (
            /*touch*/
            o[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            o[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            o[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            o[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            o[10] === "mini" || /*size*/
            o[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            o[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            o[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            o[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            o[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            o[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            o[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            o[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (o[24] === "dialog:header" || /*context*/
            o[24] === "dialog:sheet") && /*action*/
            o[12] === "close"
          ),
          .../*internalClasses*/
          o[18]
        })
      },
      s[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          o[19]
        ).map(ii).concat([
          /*style*/
          o[3]
        ]).join(" ")
      },
      s[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ o[23](
          /*pressed*/
          o[0]
        ) ? null : (
          /*pressed*/
          o[0] ? "true" : "false"
        )
      },
      s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          o[0] ? (
            /*ariaLabelOn*/
            o[6]
          ) : (
            /*ariaLabelOff*/
            o[7]
          )
        )
      },
      s[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          o[6]
        )
      },
      s[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          o[7]
        )
      },
      s[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          o[25]
        )
      },
      s[0] & /*href*/
      2048 && { href: (
        /*href*/
        o[11]
      ) },
      s[0] & /*actionProp*/
      2097152 && Ee(
        /*actionProp*/
        o[21]
      ),
      s[0] & /*internalAttrs*/
      1048576 && Ee(
        /*internalAttrs*/
        o[20]
      ),
      s[0] & /*$$restProps*/
      536870912 && Ee(
        /*$$restProps*/
        o[29]
      )
    ]))), { props: u };
  }
  return a && (e = pt(a, l(t)), t[34](e), e.$on(
    "click",
    /*click_handler*/
    t[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    t[36]
  )), {
    c() {
      e && j(e.$$.fragment), n = Le();
    },
    m(o, s) {
      e && F(e, o, s), P(o, n, s), i = !0;
    },
    p(o, s) {
      if (s[0] & /*component*/
      8192 && a !== (a = /*component*/
      o[13])) {
        if (e) {
          ve();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), ye();
        }
        a ? (e = pt(a, l(o, s)), o[34](e), e.$on(
          "click",
          /*click_handler*/
          o[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          o[36]
        ), j(e.$$.fragment), C(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? ce(r, [
          s[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            o[14]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                wt,
                {
                  ripple: (
                    /*ripple*/
                    o[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    o[5]
                  ),
                  disabled: !!/*$$restProps*/
                  o[29].disabled,
                  addClass: (
                    /*addClass*/
                    o[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    o[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    o[28]
                  )
                }
              ],
              /*forwardEvents*/
              o[22],
              .../*use*/
              o[1]
            ]
          },
          s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: Y({
              [
                /*className*/
                o[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              o[23](
                /*pressed*/
                o[0]
              ) && /*pressed*/
              o[0],
              "mdc-icon-button--touch": (
                /*touch*/
                o[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                o[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                o[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                o[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                o[10] === "mini" || /*size*/
                o[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                o[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                o[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                o[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                o[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                o[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                o[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                o[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (o[24] === "dialog:header" || /*context*/
                o[24] === "dialog:sheet") && /*action*/
                o[12] === "close"
              ),
              .../*internalClasses*/
              o[18]
            })
          },
          s[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              o[19]
            ).map(ii).concat([
              /*style*/
              o[3]
            ]).join(" ")
          },
          s[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ o[23](
              /*pressed*/
              o[0]
            ) ? null : (
              /*pressed*/
              o[0] ? "true" : "false"
            )
          },
          s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              o[0] ? (
                /*ariaLabelOn*/
                o[6]
              ) : (
                /*ariaLabelOff*/
                o[7]
              )
            )
          },
          s[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              o[6]
            )
          },
          s[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              o[7]
            )
          },
          s[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              o[25]
            )
          },
          s[0] & /*href*/
          2048 && { href: (
            /*href*/
            o[11]
          ) },
          s[0] & /*actionProp*/
          2097152 && Ee(
            /*actionProp*/
            o[21]
          ),
          s[0] & /*internalAttrs*/
          1048576 && Ee(
            /*internalAttrs*/
            o[20]
          ),
          s[0] & /*$$restProps*/
          536870912 && Ee(
            /*$$restProps*/
            o[29]
          )
        ]) : {};
        s[0] & /*touch*/
        256 | s[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: s, ctx: o }), e.$set(u);
      }
    },
    i(o) {
      i || (e && C(e.$$.fragment, o), i = !0);
    },
    o(o) {
      e && I(e.$$.fragment, o), i = !1;
    },
    d(o) {
      o && B(n), t[34](null), e && N(e, o);
    }
  };
}
const ii = ([t, e]) => `${t}: ${e};`;
function xf(t, e, n) {
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
  let a = ue(e, r), { $$slots: l = {}, $$scope: o } = e;
  const s = Ge(Te());
  let u = () => {
  };
  function f(W) {
    return W === u;
  }
  let { use: c = [] } = e, { class: d = "" } = e, { style: p = "" } = e, { ripple: g = !0 } = e, { color: b = void 0 } = e, { toggle: m = !1 } = e, { pressed: y = u } = e, { ariaLabelOn: v = void 0 } = e, { ariaLabelOff: O = void 0 } = e, { touch: A = !1 } = e, { displayFlex: D = !0 } = e, { size: M = "normal" } = e, { href: h = void 0 } = e, { action: R = void 0 } = e, V, E, _ = {}, w = {}, H = {}, X = ke("SMUI:icon-button:context"), ie = ke("SMUI:icon-button:aria-describedby"), { component: fe = Ht } = e, { tag: J = fe === Ht ? h == null ? "button" : "a" : void 0 } = e, k = a.disabled;
  He("SMUI:icon:context", "icon-button");
  let S = null;
  an(() => {
    E && E.destroy();
  });
  function z(W) {
    return W in _ ? _[W] : Pe().classList.contains(W);
  }
  function ge(W) {
    _[W] || n(18, _[W] = !0, _);
  }
  function Oe(W) {
    (!(W in _) || _[W]) && n(18, _[W] = !1, _);
  }
  function Xe(W, ze) {
    w[W] != ze && (ze === "" || ze == null ? (delete w[W], n(19, w)) : n(19, w[W] = ze, w));
  }
  function Ke(W) {
    var ze;
    return W in H ? (ze = H[W]) !== null && ze !== void 0 ? ze : null : Pe().getAttribute(W);
  }
  function Ce(W, ze) {
    H[W] !== ze && n(20, H[W] = ze, H);
  }
  function Qe(W) {
    n(0, y = W.isOn);
  }
  function Pe() {
    return V.getElement();
  }
  function ot(W) {
    ee[W ? "unshift" : "push"](() => {
      V = W, n(16, V);
    });
  }
  const st = () => E && E.handleClick(), Et = () => X === "top-app-bar:navigation" && _e(Pe(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (W) => {
    e = q(q({}, e), Fe(W)), n(29, a = ue(e, r)), "use" in W && n(1, c = W.use), "class" in W && n(2, d = W.class), "style" in W && n(3, p = W.style), "ripple" in W && n(4, g = W.ripple), "color" in W && n(5, b = W.color), "toggle" in W && n(30, m = W.toggle), "pressed" in W && n(0, y = W.pressed), "ariaLabelOn" in W && n(6, v = W.ariaLabelOn), "ariaLabelOff" in W && n(7, O = W.ariaLabelOff), "touch" in W && n(8, A = W.touch), "displayFlex" in W && n(9, D = W.displayFlex), "size" in W && n(10, M = W.size), "href" in W && n(11, h = W.href), "action" in W && n(12, R = W.action), "component" in W && n(13, fe = W.component), "tag" in W && n(14, J = W.tag), "$$scope" in W && n(37, o = W.$$scope);
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
      if (V) {
        const W = Pe();
        "blur" in W && W.blur();
      }
      n(31, k = a.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && V && Pe() && m !== S && (m && !E ? (n(17, E = new Qf({
      addClass: ge,
      hasClass: z,
      notifyChange: (W) => {
        Qe(W), _e(Pe(), "SMUIIconButtonToggle:change", W, void 0, !0);
      },
      removeClass: Oe,
      getAttr: Ke,
      setAttr: Ce
    })), E.init()) : !m && E && (E.destroy(), n(17, E = void 0), n(18, _ = {}), n(20, H = {})), n(32, S = m)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && E && !f(y) && E.isOn() !== y && E.toggle(y);
  }, [
    y,
    c,
    d,
    p,
    g,
    b,
    v,
    O,
    A,
    D,
    M,
    h,
    R,
    fe,
    J,
    Pe,
    V,
    E,
    _,
    w,
    H,
    i,
    s,
    f,
    X,
    ie,
    ge,
    Oe,
    Xe,
    a,
    m,
    k,
    S,
    l,
    ot,
    st,
    Et,
    o
  ];
}
class $f extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      xf,
      Jf,
      se,
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
function ec(t) {
  let e;
  return {
    c() {
      e = Me(
        /*icon*/
        t[1]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      2 && Ne(
        e,
        /*icon*/
        n[1]
      );
    },
    i: Ie,
    o: Ie,
    d(n) {
      n && B(e);
    }
  };
}
function tc(t) {
  let e, n, i;
  var r = (
    /*iconComponent*/
    t[2]
  );
  function a(l, o) {
    return {
      props: { svgStyles: (
        /*iconStyles*/
        l[3]
      ) }
    };
  }
  return r && (e = pt(r, a(t))), {
    c() {
      e && j(e.$$.fragment), n = Le();
    },
    m(l, o) {
      e && F(e, l, o), P(l, n, o), i = !0;
    },
    p(l, o) {
      if (o & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      l[2])) {
        if (e) {
          ve();
          const s = e;
          I(s.$$.fragment, 1, 0, () => {
            N(s, 1);
          }), ye();
        }
        r ? (e = pt(r, a(l)), j(e.$$.fragment), C(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else if (r) {
        const s = {};
        o & /*iconStyles*/
        8 && (s.svgStyles = /*iconStyles*/
        l[3]), e.$set(s);
      }
    },
    i(l) {
      i || (e && C(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && I(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), e && N(e, l);
    }
  };
}
function nc(t) {
  let e, n, i, r;
  const a = [tc, ec], l = [];
  function o(s, u) {
    return (
      /*iconComponent*/
      s[2] ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = o(s), e === f ? l[e].p(s, u) : (ve(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ye(), n = l[e], n ? n.p(s, u) : (n = l[e] = a[e](s), n.c()), C(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
function ic(t) {
  let e, n;
  return e = new $f({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        t[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [nc] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      t[0]
    ) && t[0].apply(this, arguments);
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const a = {};
      r & /*disabled*/
      16 && (a.disabled = /*disabled*/
      t[4]), r & /*$$scope, iconComponent, iconStyles, icon*/
      46 && (a.$$scope = { dirty: r, ctx: t }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function rc(t, e, n) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: a = null } = e, { iconStyles: l = "" } = e, { disabled: o = !1 } = e;
  return t.$$set = (s) => {
    "callback" in s && n(0, i = s.callback), "icon" in s && n(1, r = s.icon), "iconComponent" in s && n(2, a = s.iconComponent), "iconStyles" in s && n(3, l = s.iconStyles), "disabled" in s && n(4, o = s.disabled);
  }, [i, r, a, l, o];
}
class ac extends he {
  constructor(e) {
    super(), de(this, e, rc, ic, se, {
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
var lc = {
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
var oc = (
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
        return lc;
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
  }(gt)
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
var sc = (
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
  }(gt)
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
var uc = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, sr = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, fc = {
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
var cc = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      return t.call(this, x(x({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return uc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fc;
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
  }(gt)
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
var ri = {
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
}, dc = {
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
}, hc = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], mc = [
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
var fr = ["mousedown", "touchstart"], cr = ["click", "keydown"], pc = (
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
        return dc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ri;
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
        return mc.indexOf(n) >= 0;
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
        for (var l = Ye(fr), o = l.next(); !o.done; o = l.next()) {
          var s = o.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          o && !o.done && (i = l.return) && i.call(l);
        } finally {
          if (n)
            throw n.error;
        }
      }
      try {
        for (var u = Ye(cr), f = u.next(); !f.done; f = u.next()) {
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
        for (var l = Ye(fr), o = l.next(); !o.done; o = l.next()) {
          var s = o.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          o && !o.done && (i = l.return) && i.call(l);
        } finally {
          if (n)
            throw n.error;
        }
      }
      try {
        for (var u = Ye(cr), f = u.next(); !f.done; f = u.next()) {
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
        return hc.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
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
        var i = n.touches, r = i ? i[0] : n, a = r.target.getBoundingClientRect(), l = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(l);
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
        var a = this.helperText.isVisible(), l = this.helperText.getId();
        a && l ? this.adapter.setInputAttr(ri.ARIA_DESCRIBEDBY, l) : this.adapter.removeInputAttr(ri.ARIA_DESCRIBEDBY);
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
  }(gt)
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
}, gc = {
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
var hr = ["click", "keydown"], bc = (
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
        return gc;
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
        for (var r = Ye(hr), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.registerInteractionHandler(l, this.interactionHandler);
        }
      } catch (o) {
        n = { error: o };
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
        for (var r = Ye(hr), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.interactionHandler);
        }
      } catch (o) {
        n = { error: o };
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
  }(gt)
);
function _c(t) {
  let e, n, i, r, a, l, o, s;
  const u = (
    /*#slots*/
    t[22].default
  ), f = re(
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
      ).map(pr).concat([
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
  for (let p = 0; p < c.length; p += 1)
    d = q(d, c[p]);
  return {
    c() {
      e = K("label"), f && f.c(), ne(e, d);
    },
    m(p, g) {
      P(p, e, g), f && f.m(e, null), t[24](e), l = !0, o || (s = [
        te(a = De.call(
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
    p(p, g) {
      f && f.p && (!l || g & /*$$scope*/
      2097152) && le(
        f,
        u,
        p,
        /*$$scope*/
        p[21],
        l ? ae(
          u,
          /*$$scope*/
          p[21],
          g,
          null
        ) : oe(
          /*$$scope*/
          p[21]
        ),
        null
      ), ne(e, d = ce(c, [
        (!l || g & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = Y({
          [
            /*className*/
            p[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            p[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            p[1]
          ),
          .../*internalClasses*/
          p[8]
        }))) && { class: n },
        (!l || g & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          p[9]
        ).map(pr).concat([
          /*style*/
          p[4]
        ]).join(" "))) && { style: i },
        (!l || g & /*forId*/
        32 && r !== (r = /*forId*/
        p[5] || /*inputProps*/
        (p[11] ? (
          /*inputProps*/
          p[11].id
        ) : void 0))) && { for: r },
        g & /*$$restProps*/
        4096 && /*$$restProps*/
        p[12]
      ])), a && pe(a.update) && g & /*use*/
      4 && a.update.call(
        null,
        /*use*/
        p[2]
      );
    },
    i(p) {
      l || (C(f, p), l = !0);
    },
    o(p) {
      I(f, p), l = !1;
    },
    d(p) {
      p && B(e), f && f.d(p), t[24](null), o = !1, Se(s);
    }
  };
}
function vc(t) {
  let e, n, i, r, a, l, o;
  const s = (
    /*#slots*/
    t[22].default
  ), u = re(
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
    c = q(c, f[d]);
  return {
    c() {
      e = K("span"), u && u.c(), ne(e, c);
    },
    m(d, p) {
      P(d, e, p), u && u.m(e, null), t[23](e), a = !0, l || (o = [
        te(r = De.call(
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
    p(d, p) {
      u && u.p && (!a || p & /*$$scope*/
      2097152) && le(
        u,
        s,
        d,
        /*$$scope*/
        d[21],
        a ? ae(
          s,
          /*$$scope*/
          d[21],
          p,
          null
        ) : oe(
          /*$$scope*/
          d[21]
        ),
        null
      ), ne(e, c = ce(f, [
        (!a || p & /*className, floatAbove, required, internalClasses*/
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
        (!a || p & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(mr).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), r && pe(r.update) && p & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      a || (C(u, d), a = !0);
    },
    o(d) {
      I(u, d), a = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), t[23](null), l = !1, Se(o);
    }
  };
}
function yc(t) {
  let e, n, i, r;
  const a = [vc, _c], l = [];
  function o(s, u) {
    return (
      /*wrapped*/
      s[6] ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = o(s), e === f ? l[e].p(s, u) : (ve(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ye(), n = l[e], n ? n.p(s, u) : (n = l[e] = a[e](s), n.c()), C(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
const mr = ([t, e]) => `${t}: ${e};`, pr = ([t, e]) => `${t}: ${e};`;
function Ac(t, e, n) {
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
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  var o;
  const s = Ge(Te());
  let { use: u = [] } = e, { class: f = "" } = e, { style: c = "" } = e, { for: d = void 0 } = e, { floatAbove: p = !1 } = e, { required: g = !1 } = e, { wrapped: b = !1 } = e, m, y, v = {}, O = {}, A = (o = ke("SMUI:generic:input:props")) !== null && o !== void 0 ? o : {}, D = p, M = g;
  Je(() => {
    n(18, y = new oc({
      addClass: h,
      removeClass: R,
      getWidth: () => {
        var S, z;
        const ge = ie(), Oe = ge.cloneNode(!0);
        (S = ge.parentNode) === null || S === void 0 || S.appendChild(Oe), Oe.classList.add("smui-floating-label--remove-transition"), Oe.classList.add("smui-floating-label--force-size"), Oe.classList.remove("mdc-floating-label--float-above");
        const Xe = Oe.scrollWidth;
        return (z = ge.parentNode) === null || z === void 0 || z.removeChild(Oe), Xe;
      },
      registerInteractionHandler: (S, z) => ie().addEventListener(S, z),
      deregisterInteractionHandler: (S, z) => ie().removeEventListener(S, z)
    }));
    const k = {
      get element() {
        return ie();
      },
      addStyle: V,
      removeStyle: E
    };
    return _e(m, "SMUIFloatingLabel:mount", k), y.init(), () => {
      _e(m, "SMUIFloatingLabel:unmount", k), y.destroy();
    };
  });
  function h(k) {
    v[k] || n(8, v[k] = !0, v);
  }
  function R(k) {
    (!(k in v) || v[k]) && n(8, v[k] = !1, v);
  }
  function V(k, S) {
    O[k] != S && (S === "" || S == null ? (delete O[k], n(9, O)) : n(9, O[k] = S, O));
  }
  function E(k) {
    k in O && (delete O[k], n(9, O));
  }
  function _(k) {
    y.shake(k);
  }
  function w(k) {
    n(0, p = k);
  }
  function H(k) {
    n(1, g = k);
  }
  function X() {
    return y.getWidth();
  }
  function ie() {
    return m;
  }
  function fe(k) {
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
    e = q(q({}, e), Fe(k)), n(12, r = ue(e, i)), "use" in k && n(2, u = k.use), "class" in k && n(3, f = k.class), "style" in k && n(4, c = k.style), "for" in k && n(5, d = k.for), "floatAbove" in k && n(0, p = k.floatAbove), "required" in k && n(1, g = k.required), "wrapped" in k && n(6, b = k.wrapped), "$$scope" in k && n(21, l = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && y && D !== p && (n(19, D = p), y.float(p)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && y && M !== g && (n(20, M = g), y.setRequired(g));
  }, [
    p,
    g,
    u,
    f,
    c,
    d,
    b,
    m,
    v,
    O,
    s,
    A,
    r,
    _,
    w,
    H,
    X,
    ie,
    y,
    D,
    M,
    l,
    a,
    fe,
    J
  ];
}
class _l extends he {
  constructor(e) {
    super(), de(this, e, Ac, yc, se, {
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
function Sc(t) {
  let e, n, i, r, a, l, o = [
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
      ).map(gr).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*$$restProps*/
    t[8]
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = q(s, o[u]);
  return {
    c() {
      e = K("div"), ne(e, s);
    },
    m(u, f) {
      P(u, e, f), t[13](e), a || (l = [
        te(r = De.call(
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
      ne(e, s = ce(o, [
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
        ).map(gr).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        f & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && pe(r.update) && f & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Ie,
    o: Ie,
    d(u) {
      u && B(e), t[13](null), a = !1, Se(l);
    }
  };
}
const gr = ([t, e]) => `${t}: ${e};`;
function Cc(t, e, n) {
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
  let r = ue(e, i);
  const a = Ge(Te());
  let { use: l = [] } = e, { class: o = "" } = e, { style: s = "" } = e, { active: u = !1 } = e, f, c, d = {}, p = {};
  Je(() => (c = new sc({
    addClass: b,
    removeClass: m,
    hasClass: g,
    setStyle: y,
    registerEventHandler: (h, R) => D().addEventListener(h, R),
    deregisterEventHandler: (h, R) => D().removeEventListener(h, R)
  }), c.init(), () => {
    c.destroy();
  }));
  function g(h) {
    return h in d ? d[h] : D().classList.contains(h);
  }
  function b(h) {
    d[h] || n(5, d[h] = !0, d);
  }
  function m(h) {
    (!(h in d) || d[h]) && n(5, d[h] = !1, d);
  }
  function y(h, R) {
    p[h] != R && (R === "" || R == null ? (delete p[h], n(6, p)) : n(6, p[h] = R, p));
  }
  function v() {
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
    e = q(q({}, e), Fe(h)), n(8, r = ue(e, i)), "use" in h && n(0, l = h.use), "class" in h && n(1, o = h.class), "style" in h && n(2, s = h.style), "active" in h && n(3, u = h.active);
  }, [
    l,
    o,
    s,
    u,
    f,
    d,
    p,
    a,
    r,
    v,
    O,
    A,
    D,
    M
  ];
}
class Ec extends he {
  constructor(e) {
    super(), de(this, e, Cc, Sc, se, {
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
  ), a = re(
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
    m(l, o) {
      P(l, e, o), a && a.m(e, null), i = !0;
    },
    p(l, o) {
      a && a.p && (!i || o & /*$$scope*/
      16384) && le(
        a,
        r,
        l,
        /*$$scope*/
        l[14],
        i ? ae(
          r,
          /*$$scope*/
          l[14],
          o,
          null
        ) : oe(
          /*$$scope*/
          l[14]
        ),
        null
      ), (!i || o & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        l[7]
      ).map(_r).join(" "))) && U(e, "style", n);
    },
    i(l) {
      i || (C(a, l), i = !0);
    },
    o(l) {
      I(a, l), i = !1;
    },
    d(l) {
      l && B(e), a && a.d(l);
    }
  };
}
function Ic(t) {
  let e, n, i, r, a, l, o, s, u, f, c = !/*noLabel*/
  t[3] && br(t), d = [
    {
      class: l = Y({
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
  ], p = {};
  for (let g = 0; g < d.length; g += 1)
    p = q(p, d[g]);
  return {
    c() {
      e = K("div"), n = K("div"), i = Q(), c && c.c(), r = Q(), a = K("div"), U(n, "class", "mdc-notched-outline__leading"), U(a, "class", "mdc-notched-outline__trailing"), ne(e, p);
    },
    m(g, b) {
      P(g, e, b), Z(e, n), Z(e, i), c && c.m(e, null), Z(e, r), Z(e, a), t[16](e), s = !0, u || (f = [
        te(o = De.call(
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
    p(g, [b]) {
      /*noLabel*/
      g[3] ? c && (ve(), I(c, 1, 1, () => {
        c = null;
      }), ye()) : c ? (c.p(g, b), b & /*noLabel*/
      8 && C(c, 1)) : (c = br(g), c.c(), C(c, 1), c.m(e, r)), ne(e, p = ce(d, [
        (!s || b & /*className, notched, noLabel, internalClasses*/
        78 && l !== (l = Y({
          [
            /*className*/
            g[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            g[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            g[3]
          ),
          .../*internalClasses*/
          g[6]
        }))) && { class: l },
        b & /*$$restProps*/
        1024 && /*$$restProps*/
        g[10]
      ])), o && pe(o.update) && b & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i(g) {
      s || (C(c), s = !0);
    },
    o(g) {
      I(c), s = !1;
    },
    d(g) {
      g && B(e), c && c.d(), t[16](null), u = !1, Se(f);
    }
  };
}
const _r = ([t, e]) => `${t}: ${e};`;
function Lc(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  const o = Ge(Te());
  let { use: s = [] } = e, { class: u = "" } = e, { notched: f = !1 } = e, { noLabel: c = !1 } = e, d, p, g, b = {}, m = {};
  Je(() => (p = new cc({
    addClass: v,
    removeClass: O,
    setNotchWidthProperty: (_) => A("width", _ + "px"),
    removeNotchWidthProperty: () => D("width")
  }), p.init(), () => {
    p.destroy();
  }));
  function y(_) {
    n(4, g = _.detail);
  }
  function v(_) {
    b[_] || n(6, b[_] = !0, b);
  }
  function O(_) {
    (!(_ in b) || b[_]) && n(6, b[_] = !1, b);
  }
  function A(_, w) {
    m[_] != w && (w === "" || w == null ? (delete m[_], n(7, m)) : n(7, m[_] = w, m));
  }
  function D(_) {
    _ in m && (delete m[_], n(7, m));
  }
  function M(_) {
    p.notch(_);
  }
  function h() {
    p.closeNotch();
  }
  function R() {
    return d;
  }
  function V(_) {
    ee[_ ? "unshift" : "push"](() => {
      d = _, n(5, d);
    });
  }
  const E = () => n(4, g = void 0);
  return t.$$set = (_) => {
    e = q(q({}, e), Fe(_)), n(10, r = ue(e, i)), "use" in _ && n(0, s = _.use), "class" in _ && n(1, u = _.class), "notched" in _ && n(2, f = _.notched), "noLabel" in _ && n(3, c = _.noLabel), "$$scope" in _ && n(14, l = _.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (g ? (g.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      g && g.removeStyle("transition-duration");
    })) : O("mdc-notched-outline--upgraded"));
  }, [
    s,
    u,
    f,
    c,
    g,
    d,
    b,
    m,
    o,
    y,
    r,
    M,
    h,
    R,
    l,
    a,
    V,
    E
  ];
}
class Oc extends he {
  constructor(e) {
    super(), de(this, e, Lc, Ic, se, {
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
function wc(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = re(
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
      8192) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? ae(
          n,
          /*$$scope*/
          r[13],
          a,
          null
        ) : oe(
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
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Tc(t) {
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
  function l(o, s) {
    let u = {
      $$slots: { default: [wc] },
      $$scope: { ctx: o }
    };
    for (let f = 0; f < r.length; f += 1)
      u = q(u, r[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = q(u, ce(r, [
      s & /*tag*/
      8 && { tag: (
        /*tag*/
        o[3]
      ) },
      s & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          o[8],
          .../*use*/
          o[0]
        ]
      },
      s & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Y({
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
      s & /*props*/
      128 && Ee(
        /*props*/
        o[7]
      ),
      s & /*$$restProps*/
      512 && Ee(
        /*$$restProps*/
        o[9]
      )
    ]))), { props: u };
  }
  return a && (e = pt(a, l(t)), t[12](e)), {
    c() {
      e && j(e.$$.fragment), n = Le();
    },
    m(o, s) {
      e && F(e, o, s), P(o, n, s), i = !0;
    },
    p(o, [s]) {
      if (s & /*component*/
      4 && a !== (a = /*component*/
      o[2])) {
        if (e) {
          ve();
          const u = e;
          I(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), ye();
        }
        a ? (e = pt(a, l(o, s)), o[12](e), j(e.$$.fragment), C(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else if (a) {
        const u = s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? ce(r, [
          s & /*tag*/
          8 && { tag: (
            /*tag*/
            o[3]
          ) },
          s & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              o[8],
              .../*use*/
              o[0]
            ]
          },
          s & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Y({
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
          s & /*props*/
          128 && Ee(
            /*props*/
            o[7]
          ),
          s & /*$$restProps*/
          512 && Ee(
            /*$$restProps*/
            o[9]
          )
        ]) : {};
        s & /*$$scope*/
        8192 && (u.$$scope = { dirty: s, ctx: o }), e.$set(u);
      }
    },
    i(o) {
      i || (e && C(e.$$.fragment, o), i = !0);
    },
    o(o) {
      e && I(e.$$.fragment, o), i = !1;
    },
    d(o) {
      o && B(n), t[12](null), e && N(e, o);
    }
  };
}
const At = {
  component: Ht,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Rc(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e, { use: o = [] } = e, { class: s = "" } = e, u;
  const f = At.class, c = {}, d = [], p = At.contexts, g = At.props;
  let { component: b = At.component } = e, { tag: m = b === Ht ? At.tag : void 0 } = e;
  Object.entries(At.classMap).forEach(([A, D]) => {
    const M = ke(D);
    M && "subscribe" in M && d.push(M.subscribe((h) => {
      n(5, c[A] = h, c);
    }));
  });
  const y = Ge(Te());
  for (let A in p)
    p.hasOwnProperty(A) && He(A, p[A]);
  an(() => {
    for (const A of d)
      A();
  });
  function v() {
    return u.getElement();
  }
  function O(A) {
    ee[A ? "unshift" : "push"](() => {
      u = A, n(4, u);
    });
  }
  return t.$$set = (A) => {
    e = q(q({}, e), Fe(A)), n(9, r = ue(e, i)), "use" in A && n(0, o = A.use), "class" in A && n(1, s = A.class), "component" in A && n(2, b = A.component), "tag" in A && n(3, m = A.tag), "$$scope" in A && n(13, l = A.$$scope);
  }, [
    o,
    s,
    b,
    m,
    u,
    c,
    f,
    g,
    y,
    r,
    v,
    a,
    O,
    l
  ];
}
class Hc extends he {
  constructor(e) {
    super(), de(this, e, Rc, Tc, se, {
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
const vr = Object.assign({}, At);
function Ve(t) {
  return new Proxy(Hc, {
    construct: function(e, n) {
      return Object.assign(At, vr, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(At, vr, t), e[n];
    }
  });
}
const kc = Ve({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Dc = Ve({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Mc = Ve({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Bc(t) {
  let e, n, i, r, a, l = [
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
  ], o = {};
  for (let s = 0; s < l.length; s += 1)
    o = q(o, l[s]);
  return {
    c() {
      e = K("input"), ne(e, o);
    },
    m(s, u) {
      P(s, e, u), e.autofocus && e.focus(), t[26](e), r || (a = [
        te(i = De.call(
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
      ne(e, o = ce(l, [
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
      ])), i && pe(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    i: Ie,
    o: Ie,
    d(s) {
      s && B(e), t[26](null), r = !1, Se(a);
    }
  };
}
function Pc(t) {
  return t === "" ? Number.NaN : +t;
}
function Uc(t, e, n) {
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
  let r = ue(e, i);
  const a = Ge(Te());
  let l = () => {
  };
  function o(S) {
    return S === l;
  }
  let { use: s = [] } = e, { class: u = "" } = e, { type: f = "text" } = e, { placeholder: c = " " } = e, { value: d = l } = e;
  const p = o(d);
  p && (d = "");
  let { files: g = null } = e, { dirty: b = !1 } = e, { invalid: m = !1 } = e, { updateInvalid: y = !0 } = e, { emptyValueNull: v = d === null } = e;
  p && v && (d = null);
  let { emptyValueUndefined: O = d === void 0 } = e;
  p && O && (d = void 0);
  let A, D = {}, M = {};
  Je(() => {
    y && n(14, m = A.matches(":invalid"));
  });
  function h(S) {
    if (f === "file") {
      n(12, g = S.currentTarget.files);
      return;
    }
    if (S.currentTarget.value === "" && v) {
      n(11, d = null);
      return;
    }
    if (S.currentTarget.value === "" && O) {
      n(11, d = void 0);
      return;
    }
    switch (f) {
      case "number":
      case "range":
        n(11, d = Pc(S.currentTarget.value));
        break;
      default:
        n(11, d = S.currentTarget.value);
        break;
    }
  }
  function R(S) {
    (f === "file" || f === "range") && h(S), n(13, b = !0), y && n(14, m = A.matches(":invalid"));
  }
  function V(S) {
    var z;
    return S in D ? (z = D[S]) !== null && z !== void 0 ? z : null : X().getAttribute(S);
  }
  function E(S, z) {
    D[S] !== z && n(6, D[S] = z, D);
  }
  function _(S) {
    (!(S in D) || D[S] != null) && n(6, D[S] = void 0, D);
  }
  function w() {
    X().focus();
  }
  function H() {
    X().blur();
  }
  function X() {
    return A;
  }
  function ie(S) {
    Bn.call(this, t, S);
  }
  function fe(S) {
    Bn.call(this, t, S);
  }
  function J(S) {
    ee[S ? "unshift" : "push"](() => {
      A = S, n(5, A);
    });
  }
  const k = (S) => f !== "file" && h(S);
  return t.$$set = (S) => {
    e = q(q({}, e), Fe(S)), n(10, r = ue(e, i)), "use" in S && n(0, s = S.use), "class" in S && n(1, u = S.class), "type" in S && n(2, f = S.type), "placeholder" in S && n(3, c = S.placeholder), "value" in S && n(11, d = S.value), "files" in S && n(12, g = S.files), "dirty" in S && n(13, b = S.dirty), "invalid" in S && n(14, m = S.invalid), "updateInvalid" in S && n(15, y = S.updateInvalid), "emptyValueNull" in S && n(16, v = S.emptyValueNull), "emptyValueUndefined" in S && n(17, O = S.emptyValueUndefined);
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
    g,
    b,
    m,
    y,
    v,
    O,
    V,
    E,
    _,
    w,
    H,
    X,
    ie,
    fe,
    J,
    k
  ];
}
class Fc extends he {
  constructor(e) {
    super(), de(this, e, Uc, Bc, se, {
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
function Nc(t) {
  let e, n, i, r, a, l, o = [
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
  for (let u = 0; u < o.length; u += 1)
    s = q(s, o[u]);
  return {
    c() {
      e = K("textarea"), ne(e, s);
    },
    m(u, f) {
      P(u, e, f), e.autofocus && e.focus(), t[21](e), xt(
        e,
        /*value*/
        t[0]
      ), a || (l = [
        te(r = De.call(
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
      ne(e, s = ce(o, [
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
      ])), r && pe(r.update) && f & /*use*/
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
    i: Ie,
    o: Ie,
    d(u) {
      u && B(e), t[21](null), a = !1, Se(l);
    }
  };
}
function jc(t, e, n) {
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
  let r = ue(e, i);
  const a = Ge(Te());
  let { use: l = [] } = e, { class: o = "" } = e, { style: s = "" } = e, { value: u = "" } = e, { dirty: f = !1 } = e, { invalid: c = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: p = !0 } = e, g, b = {};
  Je(() => {
    d && n(11, c = g.matches(":invalid"));
  });
  function m() {
    n(10, f = !0), d && n(11, c = g.matches(":invalid"));
  }
  function y(_) {
    var w;
    return _ in b ? (w = b[_]) !== null && w !== void 0 ? w : null : M().getAttribute(_);
  }
  function v(_, w) {
    b[_] !== w && n(6, b[_] = w, b);
  }
  function O(_) {
    (!(_ in b) || b[_] != null) && n(6, b[_] = void 0, b);
  }
  function A() {
    M().focus();
  }
  function D() {
    M().blur();
  }
  function M() {
    return g;
  }
  function h(_) {
    Bn.call(this, t, _);
  }
  function R(_) {
    Bn.call(this, t, _);
  }
  function V(_) {
    ee[_ ? "unshift" : "push"](() => {
      g = _, n(5, g);
    });
  }
  function E() {
    u = this.value, n(0, u);
  }
  return t.$$set = (_) => {
    e = q(q({}, e), Fe(_)), n(9, r = ue(e, i)), "use" in _ && n(1, l = _.use), "class" in _ && n(2, o = _.class), "style" in _ && n(3, s = _.style), "value" in _ && n(0, u = _.value), "dirty" in _ && n(10, f = _.dirty), "invalid" in _ && n(11, c = _.invalid), "updateInvalid" in _ && n(12, d = _.updateInvalid), "resizable" in _ && n(4, p = _.resizable);
  }, [
    u,
    l,
    o,
    s,
    p,
    g,
    b,
    a,
    m,
    r,
    f,
    c,
    d,
    y,
    v,
    O,
    A,
    D,
    M,
    h,
    R,
    V,
    E
  ];
}
class Gc extends he {
  constructor(e) {
    super(), de(this, e, jc, Nc, se, {
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
const Vc = (t) => ({}), yr = (t) => ({}), qc = (t) => ({}), Ar = (t) => ({}), zc = (t) => ({}), Sr = (t) => ({}), Xc = (t) => ({}), Cr = (t) => ({}), Wc = (t) => ({}), Er = (t) => ({}), Zc = (t) => ({}), Ir = (t) => ({}), Kc = (t) => ({}), Lr = (t) => ({}), Qc = (t) => ({}), Or = (t) => ({}), Yc = (t) => ({}), wr = (t) => ({}), Jc = (t) => ({}), Tr = (t) => ({}), xc = (t) => ({}), Rr = (t) => ({}), $c = (t) => ({}), Hr = (t) => ({});
function ed(t) {
  let e, n, i, r, a, l, o, s, u, f, c, d, p, g;
  const b = (
    /*#slots*/
    t[56].label
  ), m = re(
    b,
    t,
    /*$$scope*/
    t[87],
    Er
  );
  i = new Nn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [nd] },
      $$scope: { ctx: t }
    }
  });
  const y = (
    /*#slots*/
    t[56].default
  ), v = re(
    y,
    t,
    /*$$scope*/
    t[87],
    null
  );
  l = new Nn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [id] },
      $$scope: { ctx: t }
    }
  });
  const O = (
    /*#slots*/
    t[56].ripple
  ), A = re(
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
    Rt(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], M = {};
  for (let h = 0; h < D.length; h += 1)
    M = q(M, D[h]);
  return {
    c() {
      e = K("div"), m && m.c(), n = Q(), j(i.$$.fragment), r = Q(), v && v.c(), a = Q(), j(l.$$.fragment), o = Q(), A && A.c(), ne(e, M);
    },
    m(h, R) {
      P(h, e, R), m && m.m(e, null), Z(e, n), F(i, e, null), Z(e, r), v && v.m(e, null), Z(e, a), F(l, e, null), Z(e, o), A && A.m(e, null), t[82](e), d = !0, p || (g = [
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
        te(c = De.call(
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
      ], p = !0);
    },
    p(h, R) {
      m && m.p && (!d || R[2] & /*$$scope*/
      33554432) && le(
        m,
        b,
        h,
        /*$$scope*/
        h[87],
        d ? ae(
          b,
          /*$$scope*/
          h[87],
          R,
          Wc
        ) : oe(
          /*$$scope*/
          h[87]
        ),
        Er
      );
      const V = {};
      R[2] & /*$$scope*/
      33554432 && (V.$$scope = { dirty: R, ctx: h }), i.$set(V), v && v.p && (!d || R[2] & /*$$scope*/
      33554432) && le(
        v,
        y,
        h,
        /*$$scope*/
        h[87],
        d ? ae(
          y,
          /*$$scope*/
          h[87],
          R,
          null
        ) : oe(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const E = {};
      R[2] & /*$$scope*/
      33554432 && (E.$$scope = { dirty: R, ctx: h }), l.$set(E), A && A.p && (!d || R[2] & /*$$scope*/
      33554432) && le(
        A,
        O,
        h,
        /*$$scope*/
        h[87],
        d ? ae(
          O,
          /*$$scope*/
          h[87],
          R,
          qc
        ) : oe(
          /*$$scope*/
          h[87]
        ),
        Ar
      ), ne(e, M = ce(D, [
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
        32768 && Rt(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), f && pe(f.update) && R[0] & /*ripple*/
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
      }), c && pe(c.update) && R[0] & /*use*/
      256 && c.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (C(m, h), C(i.$$.fragment, h), C(v, h), C(l.$$.fragment, h), C(A, h), d = !0);
    },
    o(h) {
      I(m, h), I(i.$$.fragment, h), I(v, h), I(l.$$.fragment, h), I(A, h), d = !1;
    },
    d(h) {
      h && B(e), m && m.d(h), N(i), v && v.d(h), N(l), A && A.d(h), t[82](null), p = !1, Se(g);
    }
  };
}
function td(t) {
  let e, n, i, r, a, l, o, s, u, f, c, d, p, g, b, m, y, v, O = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && kr(t), A = (
    /*textarea*/
    (t[14] || /*variant*/
    t[15] === "outlined") && Br(t)
  );
  r = new Nn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [od] },
      $$scope: { ctx: t }
    }
  });
  const D = (
    /*#slots*/
    t[56].default
  ), M = re(
    D,
    t,
    /*$$scope*/
    t[87],
    null
  ), h = [ud, sd], R = [];
  function V(H, X) {
    return (
      /*textarea*/
      H[14] && typeof /*value*/
      H[0] == "string" ? 0 : 1
    );
  }
  o = V(t), s = R[o] = h[o](t), f = new Nn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [dd] },
      $$scope: { ctx: t }
    }
  });
  let E = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && /*ripple*/
  t[11] && Nr(t), _ = [
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
      style: p = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(Gr).concat([
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
    Rt(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], w = {};
  for (let H = 0; H < _.length; H += 1)
    w = q(w, _[H]);
  return {
    c() {
      e = K("label"), O && O.c(), n = Q(), A && A.c(), i = Q(), j(r.$$.fragment), a = Q(), M && M.c(), l = Q(), s.c(), u = Q(), j(f.$$.fragment), c = Q(), E && E.c(), ne(e, w);
    },
    m(H, X) {
      P(H, e, X), O && O.m(e, null), Z(e, n), A && A.m(e, null), Z(e, i), F(r, e, null), Z(e, a), M && M.m(e, null), Z(e, l), R[o].m(e, null), Z(e, u), F(f, e, null), Z(e, c), E && E.m(e, null), t[78](e), m = !0, y || (v = [
        te(g = wt.call(null, e, {
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
        te(b = De.call(
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
      49152 && C(O, 1)) : (O = kr(H), O.c(), C(O, 1), O.m(e, n)) : O && (ve(), I(O, 1, 1, () => {
        O = null;
      }), ye()), /*textarea*/
      H[14] || /*variant*/
      H[15] === "outlined" ? A ? (A.p(H, X), X[0] & /*textarea, variant*/
      49152 && C(A, 1)) : (A = Br(H), A.c(), C(A, 1), A.m(e, i)) : A && (ve(), I(A, 1, 1, () => {
        A = null;
      }), ye());
      const ie = {};
      X[2] & /*$$scope*/
      33554432 && (ie.$$scope = { dirty: X, ctx: H }), r.$set(ie), M && M.p && (!m || X[2] & /*$$scope*/
      33554432) && le(
        M,
        D,
        H,
        /*$$scope*/
        H[87],
        m ? ae(
          D,
          /*$$scope*/
          H[87],
          X,
          null
        ) : oe(
          /*$$scope*/
          H[87]
        ),
        null
      );
      let fe = o;
      o = V(H), o === fe ? R[o].p(H, X) : (ve(), I(R[fe], 1, 1, () => {
        R[fe] = null;
      }), ye(), s = R[o], s ? s.p(H, X) : (s = R[o] = h[o](H), s.c()), C(s, 1), s.m(e, u));
      const J = {};
      X[2] & /*$$scope*/
      33554432 && (J.$$scope = { dirty: X, ctx: H }), f.$set(J), !/*textarea*/
      H[14] && /*variant*/
      H[15] !== "outlined" && /*ripple*/
      H[11] ? E ? (E.p(H, X), X[0] & /*textarea, variant, ripple*/
      51200 && C(E, 1)) : (E = Nr(H), E.c(), C(E, 1), E.m(e, null)) : E && (ve(), I(E, 1, 1, () => {
        E = null;
      }), ye()), ne(e, w = ce(_, [
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
        67109888 && p !== (p = Object.entries(
          /*internalStyles*/
          H[26]
        ).map(Gr).concat([
          /*style*/
          H[10]
        ]).join(" "))) && { style: p },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        X[1] & /*$$restProps*/
        32768 && Rt(
          /*$$restProps*/
          H[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), g && pe(g.update) && X[0] & /*textarea, variant*/
      49152 | X[1] & /*inputElement*/
      4 && g.update.call(null, {
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
      }), b && pe(b.update) && X[0] & /*use*/
      256 && b.update.call(
        null,
        /*use*/
        H[8]
      );
    },
    i(H) {
      m || (C(O), C(A), C(r.$$.fragment, H), C(M, H), C(s), C(f.$$.fragment, H), C(E), m = !0);
    },
    o(H) {
      I(O), I(A), I(r.$$.fragment, H), I(M, H), I(s), I(f.$$.fragment, H), I(E), m = !1;
    },
    d(H) {
      H && B(e), O && O.d(), A && A.d(), N(r), M && M.d(H), R[o].d(), N(f), E && E.d(), t[78](null), y = !1, Se(v);
    }
  };
}
function nd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = re(
    n,
    t,
    /*$$scope*/
    t[87],
    Cr
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
      33554432) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ae(
          n,
          /*$$scope*/
          r[87],
          a,
          Xc
        ) : oe(
          /*$$scope*/
          r[87]
        ),
        Cr
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function id(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = re(
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
      33554432) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ae(
          n,
          /*$$scope*/
          r[87],
          a,
          zc
        ) : oe(
          /*$$scope*/
          r[87]
        ),
        Sr
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
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
      r && r.c(), e = Q(), a && a.c(), n = Le();
    },
    m(l, o) {
      r && r.m(l, o), P(l, e, o), a && a.m(l, o), P(l, n, o), i = !0;
    },
    p(l, o) {
      /*variant*/
      l[15] === "filled" ? r || (r = Dr(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      l[16] && /*label*/
      (l[17] != null || /*$$slots*/
      l[47].label) ? a ? (a.p(l, o), o[0] & /*noLabel, label*/
      196608 | o[1] & /*$$slots*/
      65536 && C(a, 1)) : (a = Mr(l), a.c(), C(a, 1), a.m(n.parentNode, n)) : a && (ve(), I(a, 1, 1, () => {
        a = null;
      }), ye());
    },
    i(l) {
      i || (C(a), i = !0);
    },
    o(l) {
      I(a), i = !1;
    },
    d(l) {
      l && (B(e), B(n)), r && r.d(l), a && a.d(l);
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
    Ue(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [rd] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = q(r, i[a]);
  return e = new _l({ props: r }), t[57](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), n = !0;
    },
    p(a, l) {
      const o = l[0] & /*focused, value, required*/
      268443649 | l[1] & /*$$restProps*/
      32768 ? ce(i, [
        l[0] & /*focused, value*/
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
        l[0] & /*required*/
        8192 && { required: (
          /*required*/
          a[13]
        ) },
        i[2],
        l[1] & /*$$restProps*/
        32768 && Ee(Ue(
          /*$$restProps*/
          a[46],
          "label$"
        ))
      ]) : {};
      l[0] & /*label*/
      131072 | l[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o);
    },
    i(a) {
      n || (C(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[57](null), N(e, a);
    }
  };
}
function rd(t) {
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
  ), a = re(
    r,
    t,
    /*$$scope*/
    t[87],
    Hr
  );
  return {
    c() {
      n = Me(e), a && a.c();
    },
    m(l, o) {
      P(l, n, o), a && a.m(l, o), i = !0;
    },
    p(l, o) {
      (!i || o[0] & /*label*/
      131072) && e !== (e = /*label*/
      (l[17] == null ? "" : (
        /*label*/
        l[17]
      )) + "") && Ne(n, e), a && a.p && (!i || o[2] & /*$$scope*/
      33554432) && le(
        a,
        r,
        l,
        /*$$scope*/
        l[87],
        i ? ae(
          r,
          /*$$scope*/
          l[87],
          o,
          $c
        ) : oe(
          /*$$scope*/
          l[87]
        ),
        Hr
      );
    },
    i(l) {
      i || (C(a, l), i = !0);
    },
    o(l) {
      I(a, l), i = !1;
    },
    d(l) {
      l && B(n), a && a.d(l);
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
    Ue(
      /*$$restProps*/
      t[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [ld] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = q(r, i[a]);
  return e = new Oc({ props: r }), t[59](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), n = !0;
    },
    p(a, l) {
      const o = l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots, $$restProps*/
      98304 ? ce(i, [
        l[0] & /*noLabel, label*/
        196608 | l[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            a[16] || /*label*/
            a[17] == null && !/*$$slots*/
            a[47].label
          )
        },
        l[1] & /*$$restProps*/
        32768 && Ee(Ue(
          /*$$restProps*/
          a[46],
          "outline$"
        ))
      ]) : {};
      l[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | l[1] & /*$$restProps, $$slots*/
      98304 | l[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o);
    },
    i(a) {
      n || (C(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[59](null), N(e, a);
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
    Ue(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [ad] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = q(r, i[a]);
  return e = new _l({ props: r }), t[58](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), n = !0;
    },
    p(a, l) {
      const o = l[0] & /*focused, value, required*/
      268443649 | l[1] & /*$$restProps*/
      32768 ? ce(i, [
        l[0] & /*focused, value*/
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
        l[0] & /*required*/
        8192 && { required: (
          /*required*/
          a[13]
        ) },
        i[2],
        l[1] & /*$$restProps*/
        32768 && Ee(Ue(
          /*$$restProps*/
          a[46],
          "label$"
        ))
      ]) : {};
      l[0] & /*label*/
      131072 | l[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o);
    },
    i(a) {
      n || (C(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[58](null), N(e, a);
    }
  };
}
function ad(t) {
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
  ), a = re(
    r,
    t,
    /*$$scope*/
    t[87],
    Rr
  );
  return {
    c() {
      n = Me(e), a && a.c();
    },
    m(l, o) {
      P(l, n, o), a && a.m(l, o), i = !0;
    },
    p(l, o) {
      (!i || o[0] & /*label*/
      131072) && e !== (e = /*label*/
      (l[17] == null ? "" : (
        /*label*/
        l[17]
      )) + "") && Ne(n, e), a && a.p && (!i || o[2] & /*$$scope*/
      33554432) && le(
        a,
        r,
        l,
        /*$$scope*/
        l[87],
        i ? ae(
          r,
          /*$$scope*/
          l[87],
          o,
          xc
        ) : oe(
          /*$$scope*/
          l[87]
        ),
        Rr
      );
    },
    i(l) {
      i || (C(a, l), i = !0);
    },
    o(l) {
      I(a, l), i = !1;
    },
    d(l) {
      l && B(n), a && a.d(l);
    }
  };
}
function ld(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && Pr(t);
  return {
    c() {
      i && i.c(), e = Le();
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
      65536 && C(i, 1)) : (i = Pr(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (ve(), I(i, 1, 1, () => {
        i = null;
      }), ye());
    },
    i(r) {
      n || (C(i), n = !0);
    },
    o(r) {
      I(i), n = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function od(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = re(
    n,
    t,
    /*$$scope*/
    t[87],
    Tr
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
      33554432) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ae(
          n,
          /*$$scope*/
          r[87],
          a,
          Jc
        ) : oe(
          /*$$scope*/
          r[87]
        ),
        Tr
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function sd(t) {
  let e, n, i, r, a, l, o, s, u, f;
  const c = (
    /*#slots*/
    t[56].prefix
  ), d = re(
    c,
    t,
    /*$$scope*/
    t[87],
    Or
  );
  let p = (
    /*prefix*/
    t[20] != null && Ur(t)
  );
  const g = [
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
    Ue(
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
  function v(h) {
    t[72](h);
  }
  let O = {};
  for (let h = 0; h < g.length; h += 1)
    O = q(O, g[h]);
  /*value*/
  t[0] !== void 0 && (O.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (O.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (O.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (O.invalid = /*invalid*/
  t[1]), i = new Fc({ props: O }), t[68](i), ee.push(() => tt(i, "value", b)), ee.push(() => tt(i, "files", m)), ee.push(() => tt(i, "dirty", y)), ee.push(() => tt(i, "invalid", v)), i.$on(
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
  ), M = re(
    D,
    t,
    /*$$scope*/
    t[87],
    Lr
  );
  return {
    c() {
      d && d.c(), e = Q(), p && p.c(), n = Q(), j(i.$$.fragment), s = Q(), A && A.c(), u = Q(), M && M.c();
    },
    m(h, R) {
      d && d.m(h, R), P(h, e, R), p && p.m(h, R), P(h, n, R), F(i, h, R), P(h, s, R), A && A.m(h, R), P(h, u, R), M && M.m(h, R), f = !0;
    },
    p(h, R) {
      d && d.p && (!f || R[2] & /*$$scope*/
      33554432) && le(
        d,
        c,
        h,
        /*$$scope*/
        h[87],
        f ? ae(
          c,
          /*$$scope*/
          h[87],
          R,
          Qc
        ) : oe(
          /*$$scope*/
          h[87]
        ),
        Or
      ), /*prefix*/
      h[20] != null ? p ? (p.p(h, R), R[0] & /*prefix*/
      1048576 && C(p, 1)) : (p = Ur(h), p.c(), C(p, 1), p.m(n.parentNode, n)) : p && (ve(), I(p, 1, 1, () => {
        p = null;
      }), ye());
      const V = R[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | R[1] & /*$$restProps*/
      32768 ? ce(g, [
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
        196608 && Ee(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        R[1] & /*$$restProps*/
        32768 && Ee(Ue(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !r && R[0] & /*value*/
      1 && (r = !0, V.value = /*value*/
      h[0], et(() => r = !1)), !a && R[0] & /*files*/
      8 && (a = !0, V.files = /*files*/
      h[3], et(() => a = !1)), !l && R[0] & /*dirty*/
      16 && (l = !0, V.dirty = /*dirty*/
      h[4], et(() => l = !1)), !o && R[0] & /*invalid*/
      2 && (o = !0, V.invalid = /*invalid*/
      h[1], et(() => o = !1)), i.$set(V), /*suffix*/
      h[21] != null ? A ? (A.p(h, R), R[0] & /*suffix*/
      2097152 && C(A, 1)) : (A = Fr(h), A.c(), C(A, 1), A.m(u.parentNode, u)) : A && (ve(), I(A, 1, 1, () => {
        A = null;
      }), ye()), M && M.p && (!f || R[2] & /*$$scope*/
      33554432) && le(
        M,
        D,
        h,
        /*$$scope*/
        h[87],
        f ? ae(
          D,
          /*$$scope*/
          h[87],
          R,
          Kc
        ) : oe(
          /*$$scope*/
          h[87]
        ),
        Lr
      );
    },
    i(h) {
      f || (C(d, h), C(p), C(i.$$.fragment, h), C(A), C(M, h), f = !0);
    },
    o(h) {
      I(d, h), I(p), I(i.$$.fragment, h), I(A), I(M, h), f = !1;
    },
    d(h) {
      h && (B(e), B(n), B(s), B(u)), d && d.d(h), p && p.d(h), t[68](null), N(i, h), A && A.d(h), M && M.d(h);
    }
  };
}
function ud(t) {
  let e, n, i, r, a, l, o, s;
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
    Ue(
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
  let p = {};
  for (let m = 0; m < u.length; m += 1)
    p = q(p, u[m]);
  /*value*/
  t[0] !== void 0 && (p.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (p.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (p.invalid = /*invalid*/
  t[1]), n = new Gc({ props: p }), t[60](n), ee.push(() => tt(n, "value", f)), ee.push(() => tt(n, "dirty", c)), ee.push(() => tt(n, "invalid", d)), n.$on(
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
  const g = (
    /*#slots*/
    t[56].internalCounter
  ), b = re(
    g,
    t,
    /*$$scope*/
    t[87],
    wr
  );
  return {
    c() {
      e = K("span"), j(n.$$.fragment), l = Q(), b && b.c(), U(e, "class", o = Y({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(m, y) {
      P(m, e, y), F(n, e, null), Z(e, l), b && b.m(e, null), s = !0;
    },
    p(m, y) {
      const v = y[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | y[1] & /*$$restProps*/
      32768 ? ce(u, [
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
        32768 && Ee(Ue(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && y[0] & /*value*/
      1 && (i = !0, v.value = /*value*/
      m[0], et(() => i = !1)), !r && y[0] & /*dirty*/
      16 && (r = !0, v.dirty = /*dirty*/
      m[4], et(() => r = !1)), !a && y[0] & /*invalid*/
      2 && (a = !0, v.invalid = /*invalid*/
      m[1], et(() => a = !1)), n.$set(v), b && b.p && (!s || y[2] & /*$$scope*/
      33554432) && le(
        b,
        g,
        m,
        /*$$scope*/
        m[87],
        s ? ae(
          g,
          /*$$scope*/
          m[87],
          y,
          Yc
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        wr
      ), (!s || y[1] & /*$$restProps*/
      32768 && o !== (o = Y({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        m[46]) || /*$$restProps*/
        m[46].input$resizable
      }))) && U(e, "class", o);
    },
    i(m) {
      s || (C(n.$$.fragment, m), C(b, m), s = !0);
    },
    o(m) {
      I(n.$$.fragment, m), I(b, m), s = !1;
    },
    d(m) {
      m && B(e), t[60](null), N(n), b && b.d(m);
    }
  };
}
function Ur(t) {
  let e, n;
  return e = new Dc({
    props: {
      $$slots: { default: [fd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function fd(t) {
  let e;
  return {
    c() {
      e = Me(
        /*prefix*/
        t[20]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i[0] & /*prefix*/
      1048576 && Ne(
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
  return e = new Mc({
    props: {
      $$slots: { default: [cd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function cd(t) {
  let e;
  return {
    c() {
      e = Me(
        /*suffix*/
        t[21]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i[0] & /*suffix*/
      2097152 && Ne(
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
function dd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = re(
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
      33554432) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ae(
          n,
          /*$$scope*/
          r[87],
          a,
          Zc
        ) : oe(
          /*$$scope*/
          r[87]
        ),
        Ir
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
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
  const i = [Ue(
    /*$$restProps*/
    t[46],
    "ripple$"
  )];
  let r = {};
  for (let a = 0; a < i.length; a += 1)
    r = q(r, i[a]);
  return e = new Ec({ props: r }), t[77](e), {
    c() {
      j(e.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), n = !0;
    },
    p(a, l) {
      const o = l[1] & /*$$restProps*/
      32768 ? ce(i, [Ee(Ue(
        /*$$restProps*/
        a[46],
        "ripple$"
      ))]) : {};
      e.$set(o);
    },
    i(a) {
      n || (C(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      t[77](null), N(e, a);
    }
  };
}
function jr(t) {
  let e, n;
  const i = [Ue(
    /*$$restProps*/
    t[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [hd] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    r = q(r, i[a]);
  return e = new kc({ props: r }), e.$on(
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
    m(a, l) {
      F(e, a, l), n = !0;
    },
    p(a, l) {
      const o = l[1] & /*$$restProps*/
      32768 ? ce(i, [Ee(Ue(
        /*$$restProps*/
        a[46],
        "helperLine$"
      ))]) : {};
      l[2] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o);
    },
    i(a) {
      n || (C(e.$$.fragment, a), n = !0);
    },
    o(a) {
      I(e.$$.fragment, a), n = !1;
    },
    d(a) {
      N(e, a);
    }
  };
}
function hd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = re(
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
      33554432) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ae(
          n,
          /*$$scope*/
          r[87],
          a,
          Vc
        ) : oe(
          /*$$scope*/
          r[87]
        ),
        yr
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function md(t) {
  let e, n, i, r, a;
  const l = [td, ed], o = [];
  function s(f, c) {
    return (
      /*valued*/
      f[36] ? 0 : 1
    );
  }
  e = s(t), n = o[e] = l[e](t);
  let u = (
    /*$$slots*/
    t[47].helper && jr(t)
  );
  return {
    c() {
      n.c(), i = Q(), u && u.c(), r = Le();
    },
    m(f, c) {
      o[e].m(f, c), P(f, i, c), u && u.m(f, c), P(f, r, c), a = !0;
    },
    p(f, c) {
      n.p(f, c), /*$$slots*/
      f[47].helper ? u ? (u.p(f, c), c[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = jr(f), u.c(), C(u, 1), u.m(r.parentNode, r)) : u && (ve(), I(u, 1, 1, () => {
        u = null;
      }), ye());
    },
    i(f) {
      a || (C(n), C(u), a = !0);
    },
    o(f) {
      I(n), I(u), a = !1;
    },
    d(f) {
      f && (B(i), B(r)), o[e].d(f), u && u.d(f);
    }
  };
}
const Gr = ([t, e]) => `${t}: ${e};`, Vr = ([t, e]) => `${t}: ${e};`;
function pd(t, e, n) {
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
  let a = ue(e, r), { $$slots: l = {}, $$scope: o } = e;
  const s = Ma(l), { applyPassive: u } = gl, f = Ge(Te());
  let c = () => {
  };
  function d(T) {
    return T === c;
  }
  let { use: p = [] } = e, { class: g = "" } = e, { style: b = "" } = e, { ripple: m = !0 } = e, { disabled: y = !1 } = e, { required: v = !1 } = e, { textarea: O = !1 } = e, { variant: A = O ? "outlined" : "standard" } = e, { noLabel: D = !1 } = e, { label: M = void 0 } = e, { type: h = "text" } = e, { value: R = a.input$emptyValueUndefined ? void 0 : c } = e, { files: V = c } = e;
  const E = !d(R) || !d(V);
  d(R) && (R = void 0), d(V) && (V = null);
  let { invalid: _ = c } = e, { updateInvalid: w = d(_) } = e;
  d(_) && (_ = !1);
  let { dirty: H = !1 } = e, { prefix: X = void 0 } = e, { suffix: ie = void 0 } = e, { validateOnValueChange: fe = w } = e, { useNativeValidation: J = w } = e, { withLeadingIcon: k = c } = e, { withTrailingIcon: S = c } = e, { input: z = void 0 } = e, { floatingLabel: ge = void 0 } = e, { lineRipple: Oe = void 0 } = e, { notchedOutline: Xe = void 0 } = e, Ke, Ce, Qe = {}, Pe = {}, ot, st = !1, Et = ke("SMUI:addLayoutListener"), W, ze, rt = new Promise((T) => ze = T), dt, $e, It, bt, Dt = R;
  Et && (W = Et(Pi)), Je(() => {
    if (n(54, Ce = new pc(
      {
        // getRootAdapterMethods_
        addClass: Sn,
        removeClass: Cn,
        hasClass: un,
        registerTextFieldInteractionHandler: (T, qe) => En().addEventListener(T, qe),
        deregisterTextFieldInteractionHandler: (T, qe) => En().removeEventListener(T, qe),
        registerValidationAttributeChangeHandler: (T) => {
          const qe = (zn) => zn.map((Xn) => Xn.attributeName).filter((Xn) => Xn), Ui = new MutationObserver((zn) => {
            J && T(qe(zn));
          }), Eo = { attributes: !0 };
          return z && Ui.observe(z.getElement(), Eo), Ui;
        },
        deregisterValidationAttributeChangeHandler: (T) => {
          T.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var T;
          return (T = z == null ? void 0 : z.getElement()) !== null && T !== void 0 ? T : null;
        },
        setInputAttr: (T, qe) => {
          z == null || z.addAttr(T, qe);
        },
        removeInputAttr: (T) => {
          z == null || z.removeAttr(T);
        },
        isFocused: () => document.activeElement === (z == null ? void 0 : z.getElement()),
        registerInputInteractionHandler: (T, qe) => {
          z == null || z.getElement().addEventListener(T, qe, u());
        },
        deregisterInputInteractionHandler: (T, qe) => {
          z == null || z.getElement().removeEventListener(T, qe, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (T) => ge && ge.float(T),
        getLabelWidth: () => ge ? ge.getWidth() : 0,
        hasLabel: () => !!ge,
        shakeLabel: (T) => ge && ge.shake(T),
        setLabelRequired: (T) => ge && ge.setRequired(T),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Oe && Oe.activate(),
        deactivateLineRipple: () => Oe && Oe.deactivate(),
        setLineRippleTransformOrigin: (T) => Oe && Oe.setRippleCenter(T),
        // getOutlineAdapterMethods_
        closeOutline: () => Xe && Xe.closeNotch(),
        hasOutline: () => !!Xe,
        notchOutline: (T) => Xe && Xe.notch(T)
      },
      {
        get helperText() {
          return It;
        },
        get characterCounter() {
          return bt;
        },
        get leadingIcon() {
          return dt;
        },
        get trailingIcon() {
          return $e;
        }
      }
    )), E) {
      if (z == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      Ce.init();
    } else
      Bo().then(() => {
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
  function sn(T) {
    n(29, dt = T.detail);
  }
  function L(T) {
    n(30, $e = T.detail);
  }
  function G(T) {
    n(32, bt = T.detail);
  }
  function Ae(T) {
    n(27, ot = T.detail);
  }
  function ht(T) {
    n(31, It = T.detail);
  }
  function un(T) {
    var qe;
    return T in Qe ? (qe = Qe[T]) !== null && qe !== void 0 ? qe : null : En().classList.contains(T);
  }
  function Sn(T) {
    Qe[T] || n(25, Qe[T] = !0, Qe);
  }
  function Cn(T) {
    (!(T in Qe) || Qe[T]) && n(25, Qe[T] = !1, Qe);
  }
  function zl(T, qe) {
    Pe[T] != qe && (qe === "" || qe == null ? (delete Pe[T], n(26, Pe)) : n(26, Pe[T] = qe, Pe));
  }
  function Xl() {
    z == null || z.focus();
  }
  function Wl() {
    z == null || z.blur();
  }
  function Pi() {
    if (Ce) {
      const T = Ce.shouldFloat;
      Ce.notchOutline(T);
    }
  }
  function En() {
    return Ke;
  }
  function Zl(T) {
    ee[T ? "unshift" : "push"](() => {
      ge = T, n(5, ge);
    });
  }
  function Kl(T) {
    ee[T ? "unshift" : "push"](() => {
      ge = T, n(5, ge);
    });
  }
  function Ql(T) {
    ee[T ? "unshift" : "push"](() => {
      Xe = T, n(7, Xe);
    });
  }
  function Yl(T) {
    ee[T ? "unshift" : "push"](() => {
      z = T, n(2, z);
    });
  }
  function Jl(T) {
    R = T, n(0, R);
  }
  function xl(T) {
    H = T, n(4, H);
  }
  function $l(T) {
    _ = T, n(1, _), n(54, Ce), n(19, w);
  }
  const eo = () => n(28, st = !1), to = () => n(28, st = !0), no = (T) => _e(Ke, "blur", T), io = (T) => _e(Ke, "focus", T);
  function ro(T) {
    ee[T ? "unshift" : "push"](() => {
      z = T, n(2, z);
    });
  }
  function ao(T) {
    R = T, n(0, R);
  }
  function lo(T) {
    V = T, n(3, V);
  }
  function oo(T) {
    H = T, n(4, H);
  }
  function so(T) {
    _ = T, n(1, _), n(54, Ce), n(19, w);
  }
  const uo = () => n(28, st = !1), fo = () => n(28, st = !0), co = (T) => _e(Ke, "blur", T), ho = (T) => _e(Ke, "focus", T);
  function mo(T) {
    ee[T ? "unshift" : "push"](() => {
      Oe = T, n(6, Oe);
    });
  }
  function po(T) {
    ee[T ? "unshift" : "push"](() => {
      Ke = T, n(24, Ke);
    });
  }
  const go = () => n(29, dt = void 0), bo = () => n(30, $e = void 0), _o = () => n(32, bt = void 0);
  function vo(T) {
    ee[T ? "unshift" : "push"](() => {
      Ke = T, n(24, Ke);
    });
  }
  const yo = () => n(29, dt = void 0), Ao = () => n(30, $e = void 0), So = () => {
    n(27, ot = void 0), n(31, It = void 0);
  }, Co = () => n(32, bt = void 0);
  return t.$$set = (T) => {
    e = q(q({}, e), Fe(T)), n(46, a = ue(e, r)), "use" in T && n(8, p = T.use), "class" in T && n(9, g = T.class), "style" in T && n(10, b = T.style), "ripple" in T && n(11, m = T.ripple), "disabled" in T && n(12, y = T.disabled), "required" in T && n(13, v = T.required), "textarea" in T && n(14, O = T.textarea), "variant" in T && n(15, A = T.variant), "noLabel" in T && n(16, D = T.noLabel), "label" in T && n(17, M = T.label), "type" in T && n(18, h = T.type), "value" in T && n(0, R = T.value), "files" in T && n(3, V = T.files), "invalid" in T && n(1, _ = T.invalid), "updateInvalid" in T && n(19, w = T.updateInvalid), "dirty" in T && n(4, H = T.dirty), "prefix" in T && n(20, X = T.prefix), "suffix" in T && n(21, ie = T.suffix), "validateOnValueChange" in T && n(48, fe = T.validateOnValueChange), "useNativeValidation" in T && n(49, J = T.useNativeValidation), "withLeadingIcon" in T && n(22, k = T.withLeadingIcon), "withTrailingIcon" in T && n(23, S = T.withTrailingIcon), "input" in T && n(2, z = T.input), "floatingLabel" in T && n(5, ge = T.floatingLabel), "lineRipple" in T && n(6, Oe = T.lineRipple), "notchedOutline" in T && n(7, Xe = T.notchedOutline), "$$scope" in T && n(87, o = T.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = z && z.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && Ce && Ce.isValid() !== !_ && (w ? n(1, _ = !Ce.isValid()) : Ce.setValid(!_)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && Ce && Ce.getValidateOnValueChange() !== fe && Ce.setValidateOnValueChange(d(fe) ? !1 : fe), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && Ce && Ce.setUseNativeValidation(d(J) ? !0 : J), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && Ce && Ce.setDisabled(y), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && Ce && E && Dt !== R) {
      n(55, Dt = R);
      const T = `${R}`;
      Ce.getValue() !== T && Ce.setValue(T);
    }
  }, [
    R,
    _,
    z,
    V,
    H,
    ge,
    Oe,
    Xe,
    p,
    g,
    b,
    m,
    y,
    v,
    O,
    A,
    D,
    M,
    h,
    w,
    X,
    ie,
    k,
    S,
    Ke,
    Qe,
    Pe,
    ot,
    st,
    dt,
    $e,
    It,
    bt,
    i,
    f,
    d,
    E,
    rt,
    sn,
    L,
    G,
    Ae,
    ht,
    Sn,
    Cn,
    zl,
    a,
    s,
    fe,
    J,
    Xl,
    Wl,
    Pi,
    En,
    Ce,
    Dt,
    l,
    Zl,
    Kl,
    Ql,
    Yl,
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
    po,
    go,
    bo,
    _o,
    vo,
    yo,
    Ao,
    So,
    Co,
    o
  ];
}
class vl extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      pd,
      md,
      se,
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
function gd(t) {
  let e;
  return {
    c() {
      e = Me(
        /*content*/
        t[7]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      128 && Ne(
        e,
        /*content*/
        n[7]
      );
    },
    i: Ie,
    o: Ie,
    d(n) {
      n && B(e);
    }
  };
}
function bd(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), i = re(
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
      16384) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[14],
        e ? ae(
          n,
          /*$$scope*/
          r[14],
          a,
          null
        ) : oe(
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
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function _d(t) {
  let e, n, i, r, a, l, o, s, u, f;
  const c = [bd, gd], d = [];
  function p(m, y) {
    return (
      /*content*/
      m[7] == null ? 0 : 1
    );
  }
  n = p(t), i = d[n] = c[n](t);
  let g = [
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
      "aria-disabled": l = /*role*/
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
  for (let m = 0; m < g.length; m += 1)
    b = q(b, g[m]);
  return {
    c() {
      e = K("i"), i.c(), ne(e, b);
    },
    m(m, y) {
      P(m, e, y), d[n].m(e, null), t[16](e), s = !0, u || (f = [
        te(o = De.call(
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
      let v = n;
      n = p(m), n === v ? d[n].p(m, y) : (ve(), I(d[v], 1, 1, () => {
        d[v] = null;
      }), ye(), i = d[n], i ? i.p(m, y) : (i = d[n] = c[n](m), i.c()), C(i, 1), i.m(e, null)), ne(e, b = ce(g, [
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
        20 && l !== (l = /*role*/
        m[2] === "button" ? (
          /*disabled*/
          m[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": l },
        y & /*roleProps*/
        256 && /*roleProps*/
        m[8],
        y & /*internalAttrs*/
        64 && /*internalAttrs*/
        m[6],
        y & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), o && pe(o.update) && y & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      s || (C(i), s = !0);
    },
    o(m) {
      I(i), s = !1;
    },
    d(m) {
      m && B(e), d[n].d(), t[16](null), u = !1, Se(f);
    }
  };
}
function vd(t, e, n) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let a = ue(e, r), l, { $$slots: o = {}, $$scope: s } = e;
  const u = Ge(Te());
  let { use: f = [] } = e, { class: c = "" } = e, { role: d = void 0 } = e, { tabindex: p = d === "button" ? 0 : -1 } = e, { disabled: g = !1 } = e, b, m, y = {};
  const v = ke("SMUI:textfield:icon:leading");
  nt(t, v, (E) => n(18, l = E));
  const O = l;
  let A;
  Je(() => (m = new bc({
    getAttr: D,
    setAttr: M,
    removeAttr: h,
    setContent: (E) => {
      n(7, A = E);
    },
    registerInteractionHandler: (E, _) => R().addEventListener(E, _),
    deregisterInteractionHandler: (E, _) => R().removeEventListener(E, _),
    notifyIconAction: () => _e(R(), "SMUITextField:icon", void 0, void 0, !0)
  }), _e(
    R(),
    O ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    m
  ), m.init(), () => {
    _e(
      R(),
      O ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      m
    ), m.destroy();
  }));
  function D(E) {
    var _;
    return E in y ? (_ = y[E]) !== null && _ !== void 0 ? _ : null : R().getAttribute(E);
  }
  function M(E, _) {
    y[E] !== _ && n(6, y[E] = _, y);
  }
  function h(E) {
    (!(E in y) || y[E] != null) && n(6, y[E] = void 0, y);
  }
  function R() {
    return b;
  }
  function V(E) {
    ee[E ? "unshift" : "push"](() => {
      b = E, n(5, b);
    });
  }
  return t.$$set = (E) => {
    e = q(q({}, e), Fe(E)), n(12, a = ue(e, r)), "use" in E && n(0, f = E.use), "class" in E && n(1, c = E.class), "role" in E && n(2, d = E.role), "tabindex" in E && n(3, p = E.tabindex), "disabled" in E && n(4, g = E.disabled), "$$scope" in E && n(14, s = E.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, tabindex*/
    12 && n(8, i = { role: d, tabindex: p });
  }, [
    f,
    c,
    d,
    p,
    g,
    b,
    y,
    A,
    i,
    u,
    v,
    O,
    a,
    R,
    s,
    o,
    V
  ];
}
class yd extends he {
  constructor(e) {
    super(), de(this, e, vd, _d, se, {
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
function Ad(t) {
  let e, n, i;
  function r(l) {
    t[6](l);
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
      m(l, o) {
        F(e, l, o), i = !0;
      },
      p(l, o) {
        const s = {};
        o & /*label*/
        4 && (s.label = /*label*/
        l[2]), o & /*placeholder*/
        2 && (s.placeholder = /*placeholder*/
        l[1]), o & /*variant*/
        16 && (s.variant = /*variant*/
        l[4]), !n && o & /*value*/
        1 && (n = !0, s.value = /*value*/
        l[0], et(() => n = !1)), e.$set(s);
      },
      i(l) {
        i || (C(e.$$.fragment, l), i = !0);
      },
      o(l) {
        I(e.$$.fragment, l), i = !1;
      },
      d(l) {
        N(e, l);
      }
    }
  );
}
function Sd(t) {
  let e, n, i;
  function r(l) {
    t[5](l);
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
    $$slots: { leadingIcon: [Ed] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (a.value = /*value*/
    t[0]), e = new vl({ props: a }), ee.push(() => tt(e, "value", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(l, o) {
        F(e, l, o), i = !0;
      },
      p(l, o) {
        const s = {};
        o & /*label*/
        4 && (s.label = /*label*/
        l[2]), o & /*placeholder*/
        2 && (s.placeholder = /*placeholder*/
        l[1]), o & /*variant*/
        16 && (s.variant = /*variant*/
        l[4]), o & /*$$scope, icon*/
        136 && (s.$$scope = { dirty: o, ctx: l }), !n && o & /*value*/
        1 && (n = !0, s.value = /*value*/
        l[0], et(() => n = !1)), e.$set(s);
      },
      i(l) {
        i || (C(e.$$.fragment, l), i = !0);
      },
      o(l) {
        I(e.$$.fragment, l), i = !1;
      },
      d(l) {
        N(e, l);
      }
    }
  );
}
function Cd(t) {
  let e;
  return {
    c() {
      e = Me(
        /*icon*/
        t[3]
      );
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      8 && Ne(
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
function Ed(t) {
  let e, n;
  return e = new yd({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [Cd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r & /*$$scope, icon*/
      136 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Id(t) {
  let e, n, i, r;
  const a = [Sd, Ad], l = [];
  function o(s, u) {
    return (
      /*icon*/
      s[3] ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = o(s), e === f ? l[e].p(s, u) : (ve(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ye(), n = l[e], n ? n.p(s, u) : (n = l[e] = a[e](s), n.c()), C(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
function Ld(t, e, n) {
  let { placeholder: i = "" } = e, { label: r = "" } = e, { icon: a = "" } = e, { value: l = "" } = e, { variant: o = "standard" } = e;
  function s(f) {
    l = f, n(0, l);
  }
  function u(f) {
    l = f, n(0, l);
  }
  return t.$$set = (f) => {
    "placeholder" in f && n(1, i = f.placeholder), "label" in f && n(2, r = f.label), "icon" in f && n(3, a = f.icon), "value" in f && n(0, l = f.value), "variant" in f && n(4, o = f.variant);
  }, [
    l,
    i,
    r,
    a,
    o,
    s,
    u
  ];
}
class ai extends he {
  constructor(e) {
    super(), de(this, e, Ld, Id, se, {
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
function Od(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function wd(t, e) {
  if (Od(t) && e in qr) {
    var n = t.document.createElement("div"), i = qr[e], r = i.standard, a = i.prefixed, l = r in n.style;
    return l ? r : a;
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
function Td(t) {
  let e, n, i, r, a, l;
  const o = (
    /*#slots*/
    t[8].default
  ), s = re(
    o,
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
    f = q(f, u[c]);
  return {
    c() {
      e = K("span"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[9](e), r = !0, a || (l = [
        te(i = De.call(
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
      128) && le(
        s,
        o,
        c,
        /*$$scope*/
        c[7],
        r ? ae(
          o,
          /*$$scope*/
          c[7],
          d,
          null
        ) : oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), ne(e, f = ce(u, [
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (C(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[9](null), a = !1, Se(l);
    }
  };
}
function Rd(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  const o = Ge(Te());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = ke("SMUI:list:graphic:menu-selection-group");
  function d() {
    return f;
  }
  function p(g) {
    ee[g ? "unshift" : "push"](() => {
      f = g, n(2, f);
    });
  }
  return t.$$set = (g) => {
    e = q(q({}, e), Fe(g)), n(5, r = ue(e, i)), "use" in g && n(0, s = g.use), "class" in g && n(1, u = g.class), "$$scope" in g && n(7, l = g.$$scope);
  }, [
    s,
    u,
    f,
    o,
    c,
    r,
    d,
    l,
    a,
    p
  ];
}
class Hd extends he {
  constructor(e) {
    super(), de(this, e, Rd, Td, se, { use: 0, class: 1, getElement: 6 });
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
  component: Hd
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
function kd(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Dd(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Md(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Bd(t) {
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
var Pd = (
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
var we = {
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
}, li = {
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
var Ud = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e(n) {
      var i = t.call(this, x(x({}, e.defaultAdapter), n)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = cn.CLOSE_ACTION, i.scrimClickAction = cn.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = cn.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new Pd(), i.contentScrollHandler = function() {
        i.handleScrollEvent();
      }, i.windowResizeHandler = function() {
        i.layout();
      }, i.windowOrientationChangeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return we;
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
        return li;
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
      this.adapter.hasClass(we.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(we.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var i = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(we.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(we.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        i.adapter.addClass(we.OPEN), i.adapter.addBodyClass(we.SCROLL_LOCK), i.layout(), i.animationTimer = setTimeout(function() {
          i.handleAnimationTimerEnd(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
        }, li.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var i = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(we.CLOSING), this.adapter.removeClass(we.OPEN), this.adapter.removeBodyClass(we.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(n);
      }, li.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(we.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(we.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(we.SURFACE_SCRIM_SHOWN), this.adapter.addClass(we.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(we.SURFACE_SCRIM_HIDING), this.adapter.removeClass(we.SURFACE_SCRIM_SHOWING);
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
          var a = n.composedPath ? n.composedPath()[0] : n.target, l = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          i && l && this.adapter.clickDefaultButton();
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
      this.animationTimer = 0, this.adapter.removeClass(we.OPENING), this.adapter.removeClass(we.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(we.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(we.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(we.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(we.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(we.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(we.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(we.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(we.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(we.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(we.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(gt)
);
const { document: Fd, window: zr } = Ro, Nd = (t) => ({}), Xr = (t) => ({});
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
    p: Ie,
    d(r) {
      r && B(e), n = !1, i();
    }
  };
}
function jd(t) {
  let e, n, i, r, a, l, o, s, u, f, c, d, p, g, b;
  const m = (
    /*#slots*/
    t[29].default
  ), y = re(
    m,
    t,
    /*$$scope*/
    t[28],
    null
  );
  let v = (
    /*fullscreen*/
    t[5] && Wr(t)
  ), O = [
    {
      class: l = Y({
        [
          /*surface$class*/
          t[9]
        ]: !0,
        "mdc-dialog__surface": !0
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    Ue(
      /*$$restProps*/
      t[19],
      "surface$"
    )
  ], A = {};
  for (let _ = 0; _ < O.length; _ += 1)
    A = q(A, O[_]);
  let D = [
    {
      class: o = Y({
        [
          /*container$class*/
          t[8]
        ]: !0,
        "mdc-dialog__container": !0
      })
    },
    Ue(
      /*$$restProps*/
      t[19],
      "container$"
    )
  ], M = {};
  for (let _ = 0; _ < D.length; _ += 1)
    M = q(M, D[_]);
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
    Rt(
      /*$$restProps*/
      t[19],
      ["container$", "surface$"]
    )
  ], R = {};
  for (let _ = 0; _ < h.length; _ += 1)
    R = q(R, h[_]);
  const V = (
    /*#slots*/
    t[29].over
  ), E = re(
    V,
    t,
    /*$$scope*/
    t[28],
    Xr
  );
  return {
    c() {
      e = Q(), n = K("div"), i = K("div"), r = K("div"), y && y.c(), a = Q(), v && v.c(), s = Q(), u = K("div"), d = Q(), E && E.c(), ne(r, A), ne(i, M), U(u, "class", "mdc-dialog__scrim"), ne(n, R);
    },
    m(_, w) {
      P(_, e, w), P(_, n, w), Z(n, i), Z(i, r), y && y.m(r, null), Z(r, a), v && v.m(r, null), Z(n, s), Z(n, u), t[33](n), P(_, d, w), E && E.m(_, w), p = !0, g || (b = [
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
        $(Fd.body, "keydown", function() {
          pe(
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
        te(c = De.call(
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
          pe(
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
          pe(
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
      ], g = !0);
    },
    p(_, w) {
      t = _, y && y.p && (!p || w[0] & /*$$scope*/
      268435456) && le(
        y,
        m,
        t,
        /*$$scope*/
        t[28],
        p ? ae(
          m,
          /*$$scope*/
          t[28],
          w,
          null
        ) : oe(
          /*$$scope*/
          t[28]
        ),
        null
      ), /*fullscreen*/
      t[5] ? v ? v.p(t, w) : (v = Wr(t), v.c(), v.m(r, null)) : v && (v.d(1), v = null), ne(r, A = ce(O, [
        (!p || w[0] & /*surface$class*/
        512 && l !== (l = Y({
          [
            /*surface$class*/
            t[9]
          ]: !0,
          "mdc-dialog__surface": !0
        }))) && { class: l },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        w[0] & /*$$restProps*/
        524288 && Ue(
          /*$$restProps*/
          t[19],
          "surface$"
        )
      ])), ne(i, M = ce(D, [
        (!p || w[0] & /*container$class*/
        256 && o !== (o = Y({
          [
            /*container$class*/
            t[8]
          ]: !0,
          "mdc-dialog__container": !0
        }))) && { class: o },
        w[0] & /*$$restProps*/
        524288 && Ue(
          /*$$restProps*/
          t[19],
          "container$"
        )
      ])), ne(n, R = ce(h, [
        (!p || w[0] & /*className, autoStackButtons, fullscreen, sheet, noContentPadding, selection, internalClasses*/
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
        w[0] & /*$$restProps*/
        524288 && Rt(
          /*$$restProps*/
          t[19],
          ["container$", "surface$"]
        )
      ])), c && pe(c.update) && w[0] & /*use*/
      2 && c.update.call(
        null,
        /*use*/
        t[1]
      ), E && E.p && (!p || w[0] & /*$$scope*/
      268435456) && le(
        E,
        V,
        t,
        /*$$scope*/
        t[28],
        p ? ae(
          V,
          /*$$scope*/
          t[28],
          w,
          Nd
        ) : oe(
          /*$$scope*/
          t[28]
        ),
        Xr
      );
    },
    i(_) {
      p || (C(y, _), C(E, _), p = !0);
    },
    o(_) {
      I(y, _), I(E, _), p = !1;
    },
    d(_) {
      _ && (B(e), B(n), B(d)), y && y.d(_), v && v.d(), t[33](null), E && E.d(_), g = !1, Se(b);
    }
  };
}
function Gd(t, e, n) {
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
  let r = ue(e, i), a, l, { $$slots: o = {}, $$scope: s } = e;
  var u;
  const { FocusTrap: f } = Rf, { closest: c, matches: d } = Ti, p = Ge(Te());
  let { use: g = [] } = e, { class: b = "" } = e, { open: m = !1 } = e, { selection: y = !1 } = e, { escapeKeyAction: v = "close" } = e, { scrimClickAction: O = "close" } = e, { autoStackButtons: A = !0 } = e, { fullscreen: D = !1 } = e, { sheet: M = !1 } = e, { noContentPadding: h = !1 } = e, { container$class: R = "" } = e, { surface$class: V = "" } = e, E, _, w = {}, H, X = it(!1);
  nt(t, X, (L) => n(37, l = L));
  let ie = ke("SMUI:dialog:aboveFullscreen"), fe = (u = ke("SMUI:dialog:aboveFullscreenShown")) !== null && u !== void 0 ? u : it(!1);
  nt(t, fe, (L) => n(27, a = L));
  let J = ke("SMUI:addLayoutListener"), k, S = [], z = (L) => (S.push(L), () => {
    const G = S.indexOf(L);
    G >= 0 && S.splice(G, 1);
  });
  He("SMUI:dialog:actions:reversed", X), He("SMUI:addLayoutListener", z), He("SMUI:dialog:selection", y), He("SMUI:dialog:aboveFullscreen", ie || D), He("SMUI:dialog:aboveFullscreenShown", fe), M && He("SMUI:icon-button:context", "dialog:sheet"), J && (k = J(dt));
  let ge = a;
  Je(() => {
    var L;
    return H = new f(
      E,
      {
        initialFocusEl: (L = ot()) !== null && L !== void 0 ? L : void 0
      }
    ), n(10, _ = new Ud({
      addBodyClass: (G) => document.body.classList.add(G),
      addClass: Xe,
      areButtonsStacked: () => Bd(Ce()),
      clickDefaultButton: () => {
        const G = Qe();
        G && G.click();
      },
      eventTargetMatches: (G, Ae) => G ? d(G, Ae) : !1,
      getActionFromEvent: (G) => {
        if (!G.target)
          return "";
        const Ae = c(G.target, "[data-mdc-dialog-action]");
        return Ae && Ae.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: ot,
      hasClass: Oe,
      isContentScrollable: () => kd(Pe()),
      notifyClosed: (G) => {
        n(0, m = !1), _e($e(), "SMUIDialog:closed", G ? { action: G } : {}, void 0, !0);
      },
      notifyClosing: (G) => _e($e(), "SMUIDialog:closing", G ? { action: G } : {}, void 0, !0),
      notifyOpened: () => _e($e(), "SMUIDialog:opened", {}, void 0, !0),
      notifyOpening: () => _e($e(), "SMUIDialog:opening", {}, void 0, !0),
      releaseFocus: () => H.releaseFocus(),
      removeBodyClass: (G) => document.body.classList.remove(G),
      removeClass: Ke,
      reverseButtons: () => {
        Lt(X, l = !0, l);
      },
      trapFocus: () => H.trapFocus(),
      registerContentEventHandler: (G, Ae) => {
        const ht = Pe();
        ht instanceof HTMLElement && ht.addEventListener(G, Ae);
      },
      deregisterContentEventHandler: (G, Ae) => {
        const ht = Pe();
        ht instanceof HTMLElement && ht.removeEventListener(G, Ae);
      },
      isScrollableContentAtTop: () => Dd(Pe()),
      isScrollableContentAtBottom: () => Md(Pe()),
      registerWindowEventHandler: (G, Ae) => {
        window.addEventListener(G, Ae);
      },
      deregisterWindowEventHandler: (G, Ae) => {
        window.removeEventListener(G, Ae);
      }
    })), _.init(), () => {
      _.destroy();
    };
  }), an(() => {
    k && k();
  });
  function Oe(L) {
    return L in w ? w[L] : $e().classList.contains(L);
  }
  function Xe(L) {
    w[L] || n(12, w[L] = !0, w);
  }
  function Ke(L) {
    (!(L in w) || w[L]) && n(12, w[L] = !1, w);
  }
  function Ce() {
    return [].slice.call(E.querySelectorAll(".mdc-dialog__button"));
  }
  function Qe() {
    return E.querySelector("[data-mdc-dialog-button-default]");
  }
  function Pe() {
    return E.querySelector(".mdc-dialog__content");
  }
  function ot() {
    return E.querySelector("[data-mdc-dialog-initial-focus]");
  }
  function st() {
    ie && Lt(fe, a = !0, a), requestAnimationFrame(() => {
      S.forEach((L) => L());
    });
  }
  function Et() {
    S.forEach((L) => L());
  }
  function W() {
    ie && Lt(fe, a = !1, a);
  }
  function ze() {
    return m;
  }
  function rt(L) {
    n(0, m = L);
  }
  function dt() {
    return _.layout();
  }
  function $e() {
    return E;
  }
  const It = () => m && _ && _.layout(), bt = () => m && _ && _.layout(), Dt = () => _ && _.handleSurfaceScrimTransitionEnd();
  function sn(L) {
    ee[L ? "unshift" : "push"](() => {
      E = L, n(11, E);
    });
  }
  return t.$$set = (L) => {
    e = q(q({}, e), Fe(L)), n(19, r = ue(e, i)), "use" in L && n(1, g = L.use), "class" in L && n(2, b = L.class), "open" in L && n(0, m = L.open), "selection" in L && n(3, y = L.selection), "escapeKeyAction" in L && n(20, v = L.escapeKeyAction), "scrimClickAction" in L && n(21, O = L.scrimClickAction), "autoStackButtons" in L && n(4, A = L.autoStackButtons), "fullscreen" in L && n(5, D = L.fullscreen), "sheet" in L && n(6, M = L.sheet), "noContentPadding" in L && n(7, h = L.noContentPadding), "container$class" in L && n(8, R = L.container$class), "surface$class" in L && n(9, V = L.surface$class), "$$scope" in L && n(28, s = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*instance, escapeKeyAction*/
    1049600 && _ && _.getEscapeKeyAction() !== v && _.setEscapeKeyAction(v), t.$$.dirty[0] & /*instance, scrimClickAction*/
    2098176 && _ && _.getScrimClickAction() !== O && _.setScrimClickAction(O), t.$$.dirty[0] & /*instance, autoStackButtons*/
    1040 && _ && _.getAutoStackButtons() !== A && _.setAutoStackButtons(A), t.$$.dirty[0] & /*autoStackButtons*/
    16 && (A || Lt(X, l = !0, l)), t.$$.dirty[0] & /*instance, open*/
    1025 && _ && _.isOpen() !== m && (m ? _.open({
      isAboveFullscreenDialog: !!ie
    }) : _.close()), t.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/
    201327648 && D && _ && ge !== a && (n(26, ge = a), a ? _.showSurfaceScrim() : _.hideSurfaceScrim());
  }, [
    m,
    g,
    b,
    y,
    A,
    D,
    M,
    h,
    R,
    V,
    _,
    E,
    w,
    p,
    X,
    fe,
    st,
    Et,
    W,
    r,
    v,
    O,
    ze,
    rt,
    dt,
    $e,
    ge,
    a,
    s,
    o,
    It,
    bt,
    Dt,
    sn
  ];
}
class Vd extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Gd,
      jd,
      se,
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
const qd = Ve({
  class: "mdc-dialog__content",
  tag: "div"
}), zd = Ve({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
}), Xd = (t) => ({}), Zr = (t) => ({}), Wd = (t) => ({}), Kr = (t) => ({}), Zd = (t) => ({}), Qr = (t) => ({});
function Kd(t) {
  let e;
  const n = (
    /*#slots*/
    t[1].content
  ), i = re(
    n,
    t,
    /*$$scope*/
    t[4],
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
      16) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[4],
        e ? ae(
          n,
          /*$$scope*/
          r[4],
          a,
          Wd
        ) : oe(
          /*$$scope*/
          r[4]
        ),
        Kr
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qd(t) {
  let e;
  const n = (
    /*#slots*/
    t[1].actions
  ), i = re(
    n,
    t,
    /*$$scope*/
    t[4],
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
      16) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[4],
        e ? ae(
          n,
          /*$$scope*/
          r[4],
          a,
          Xd
        ) : oe(
          /*$$scope*/
          r[4]
        ),
        Zr
      );
    },
    i(r) {
      e || (C(i, r), e = !0);
    },
    o(r) {
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Yd(t) {
  let e, n, i, r, a, l;
  const o = (
    /*#slots*/
    t[1].title
  ), s = re(
    o,
    t,
    /*$$scope*/
    t[4],
    Qr
  );
  return i = new qd({
    props: {
      id: "large-scroll-content",
      $$slots: { default: [Kd] },
      $$scope: { ctx: t }
    }
  }), a = new zd({
    props: {
      $$slots: { default: [Qd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), s && s.c(), n = Q(), j(i.$$.fragment), r = Q(), j(a.$$.fragment), U(e, "class", "dialog-title svelte-4sevka");
    },
    m(u, f) {
      P(u, e, f), s && s.m(e, null), P(u, n, f), F(i, u, f), P(u, r, f), F(a, u, f), l = !0;
    },
    p(u, f) {
      s && s.p && (!l || f & /*$$scope*/
      16) && le(
        s,
        o,
        u,
        /*$$scope*/
        u[4],
        l ? ae(
          o,
          /*$$scope*/
          u[4],
          f,
          Zd
        ) : oe(
          /*$$scope*/
          u[4]
        ),
        Qr
      );
      const c = {};
      f & /*$$scope*/
      16 && (c.$$scope = { dirty: f, ctx: u }), i.$set(c);
      const d = {};
      f & /*$$scope*/
      16 && (d.$$scope = { dirty: f, ctx: u }), a.$set(d);
    },
    i(u) {
      l || (C(s, u), C(i.$$.fragment, u), C(a.$$.fragment, u), l = !0);
    },
    o(u) {
      I(s, u), I(i.$$.fragment, u), I(a.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (B(e), B(n), B(r)), s && s.d(u), N(i, u), N(a, u);
    }
  };
}
function Jd(t) {
  let e, n, i;
  function r(l) {
    t[2](l);
  }
  let a = {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    $$slots: { default: [Yd] },
    $$scope: { ctx: t }
  };
  return (
    /*open*/
    t[0] !== void 0 && (a.open = /*open*/
    t[0]), e = new Vd({ props: a }), ee.push(() => tt(e, "open", r)), e.$on(
      "SMUIDialog:closed",
      /*SMUIDialog_closed_handler*/
      t[3]
    ), {
      c() {
        j(e.$$.fragment);
      },
      m(l, o) {
        F(e, l, o), i = !0;
      },
      p(l, [o]) {
        const s = {};
        o & /*$$scope*/
        16 && (s.$$scope = { dirty: o, ctx: l }), !n && o & /*open*/
        1 && (n = !0, s.open = /*open*/
        l[0], et(() => n = !1)), e.$set(s);
      },
      i(l) {
        i || (C(e.$$.fragment, l), i = !0);
      },
      o(l) {
        I(e.$$.fragment, l), i = !1;
      },
      d(l) {
        N(e, l);
      }
    }
  );
}
function xd(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { open: a = !1 } = e;
  function l(s) {
    a = s, n(0, a);
  }
  const o = (s) => n(0, a = !1);
  return t.$$set = (s) => {
    "open" in s && n(0, a = s.open), "$$scope" in s && n(4, r = s.$$scope);
  }, [a, i, l, o, r];
}
class Yr extends he {
  constructor(e) {
    super(), de(this, e, xd, Jd, se, { open: 0 });
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
function $d(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), r = re(
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
    m(a, l) {
      P(a, e, l), r && r.m(e, null), n = !0;
    },
    p(a, [l]) {
      r && r.p && (!n || l & /*$$scope*/
      1) && le(
        r,
        i,
        a,
        /*$$scope*/
        a[0],
        n ? ae(
          i,
          /*$$scope*/
          a[0],
          l,
          null
        ) : oe(
          /*$$scope*/
          a[0]
        ),
        null
      );
    },
    i(a) {
      n || (C(r, a), n = !0);
    },
    o(a) {
      I(r, a), n = !1;
    },
    d(a) {
      a && B(e), r && r.d(a);
    }
  };
}
function eh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  return t.$$set = (a) => {
    "$$scope" in a && n(0, r = a.$$scope);
  }, [r, i];
}
class Ct extends he {
  constructor(e) {
    super(), de(this, e, eh, $d, se, {});
  }
}
function th(t) {
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
function nh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [th] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function ih(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class yl extends he {
  constructor(e) {
    super(), de(this, e, ih, nh, se, { svgStyles: 0 });
  }
}
function rh(t) {
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
function ah(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [rh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function lh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Ri extends he {
  constructor(e) {
    super(), de(this, e, lh, ah, se, { svgStyles: 0 });
  }
}
function oh(t) {
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
function sh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [oh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function uh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class fh extends he {
  constructor(e) {
    super(), de(this, e, uh, sh, se, { svgStyles: 0 });
  }
}
function ch(t) {
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
function dh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [ch] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function hh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class mh extends he {
  constructor(e) {
    super(), de(this, e, hh, dh, se, { svgStyles: 0 });
  }
}
function ph(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p: Ie,
    d(i) {
      i && B(e);
    }
  };
}
function gh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [ph] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope*/
      2 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function bh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Al extends he {
  constructor(e) {
    super(), de(this, e, bh, gh, se, { svgStyles: 0 });
  }
}
function _h(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p: Ie,
    d(i) {
      i && B(e);
    }
  };
}
function vh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [_h] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope*/
      2 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function yh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Sl extends he {
  constructor(e) {
    super(), de(this, e, yh, vh, se, { svgStyles: 0 });
  }
}
function Ah(t) {
  let e, n;
  return {
    c() {
      e = Be("svg"), n = Be("path"), U(n, "d", "M200-440v-80h560v80H200Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      P(i, e, r), Z(e, n);
    },
    p: Ie,
    d(i) {
      i && B(e);
    }
  };
}
function Sh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [Ah] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope*/
      2 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ch(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Eh extends he {
  constructor(e) {
    super(), de(this, e, Ch, Sh, se, { svgStyles: 0 });
  }
}
function Ih(t) {
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
function Lh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [Ih] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Oh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class wh extends he {
  constructor(e) {
    super(), de(this, e, Oh, Lh, se, { svgStyles: 0 });
  }
}
function Th(t) {
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
function Rh(t) {
  let e, n;
  return e = new Ct({
    props: {
      $$slots: { default: [Th] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, [r]) {
      const a = {};
      r & /*$$scope, svgStyles*/
      3 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Hh(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class kh extends he {
  constructor(e) {
    super(), de(this, e, Hh, Rh, se, { svgStyles: 0 });
  }
}
const We = [];
for (let t = 0; t < 256; ++t)
  We.push((t + 256).toString(16).slice(1));
function Dh(t, e = 0) {
  return (We[t[e + 0]] + We[t[e + 1]] + We[t[e + 2]] + We[t[e + 3]] + "-" + We[t[e + 4]] + We[t[e + 5]] + "-" + We[t[e + 6]] + We[t[e + 7]] + "-" + We[t[e + 8]] + We[t[e + 9]] + "-" + We[t[e + 10]] + We[t[e + 11]] + We[t[e + 12]] + We[t[e + 13]] + We[t[e + 14]] + We[t[e + 15]]).toLowerCase();
}
let oi;
const Mh = new Uint8Array(16);
function Bh() {
  if (!oi) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    oi = crypto.getRandomValues.bind(crypto);
  }
  return oi(Mh);
}
const Ph = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Jr = { randomUUID: Ph };
function Uh(t, e, n) {
  var r;
  if (Jr.randomUUID && !t)
    return Jr.randomUUID();
  t = t || {};
  const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? Bh();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, Dh(i);
}
function xr(t) {
  let e, n, i, r, a, l;
  return {
    c() {
      e = K("div"), n = K("div"), i = K("div"), r = Q(), a = K("span"), l = Me(
        /*message*/
        t[1]
      ), U(i, "class", "loading-spinner svelte-quxj5m"), U(a, "class", "loading-message svelte-quxj5m"), U(n, "class", "loading-spinner-container svelte-quxj5m"), U(e, "class", "overlay svelte-quxj5m");
    },
    m(o, s) {
      P(o, e, s), Z(e, n), Z(n, i), Z(n, r), Z(n, a), Z(a, l);
    },
    p(o, s) {
      s & /*message*/
      2 && Ne(
        l,
        /*message*/
        o[1]
      );
    },
    d(o) {
      o && B(e);
    }
  };
}
function Fh(t) {
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
    i: Ie,
    o: Ie,
    d(i) {
      i && B(e), n && n.d();
    }
  };
}
function Nh(t, e, n) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return t.$$set = (a) => {
    "loadingDone" in a && n(0, i = a.loadingDone), "message" in a && n(1, r = a.message);
  }, [i, r];
}
class Cl extends he {
  constructor(e) {
    super(), de(this, e, Nh, Fh, se, { loadingDone: 0, message: 1 });
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
var jh = (
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
            for (var l = Ye(i), o = l.next(); !o.done; o = l.next()) {
              var s = o.value;
              s.contentRect && n.calculateAndSetDimensions(s.contentRect.width);
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              o && !o.done && (a = l.return) && a.call(l);
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
      var i = "scaleX(" + n + ")", r = typeof window < "u" ? wd(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(n) {
      var i = n * 100 + "%";
      this.adapter.setBufferBarStyle(ut.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var i = n * dn.PRIMARY_HALF, r = n * dn.PRIMARY_FULL, a = n * dn.SECONDARY_QUARTER, l = n * dn.SECONDARY_HALF, o = n * dn.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -o + "px"), this.restartAnimation();
    }, e;
  }(gt)
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
var vt = {
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
var Gh = (
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
        return Li(this, function(n) {
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
      for (var i = n.columnId, r = n.columnIndex, a = n.headerCell, l = 0; l < this.adapter.getHeaderCellCount(); l++)
        l !== r && (this.adapter.removeClassNameByHeaderCellIndex(l, vt.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(l, vt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(l, Pt.ARIA_SORT, lt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(l, lt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, vt.HEADER_CELL_SORTED);
      var o = this.adapter.getAttributeByHeaderCellIndex(r, Pt.ARIA_SORT), s = lt.NONE;
      o === lt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, vt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Pt.ARIA_SORT, lt.DESCENDING), s = lt.DESCENDING) : o === lt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, vt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Pt.ARIA_SORT, lt.ASCENDING), s = lt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, Pt.ARIA_SORT, lt.ASCENDING), s = lt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, s), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(vt.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(vt.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, i) {
      i ? (this.adapter.addClassAtRowIndex(n, vt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Pt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, vt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Pt.ARIA_SELECTED, "false"));
    }, e;
  }(gt)
);
const Vh = (t) => ({}), ea = (t) => ({}), qh = (t) => ({}), ta = (t) => ({});
function na(t) {
  let e, n, i, r, a;
  const l = (
    /*#slots*/
    t[36].progress
  ), o = re(
    l,
    t,
    /*$$scope*/
    t[35],
    ta
  );
  return {
    c() {
      e = K("div"), n = K("div"), i = Q(), o && o.c(), U(n, "class", "mdc-data-table__scrim"), U(e, "class", "mdc-data-table__progress-indicator"), U(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        t[13]
      ).map(ia).join(" "));
    },
    m(s, u) {
      P(s, e, u), Z(e, n), Z(e, i), o && o.m(e, null), a = !0;
    },
    p(s, u) {
      o && o.p && (!a || u[1] & /*$$scope*/
      16) && le(
        o,
        l,
        s,
        /*$$scope*/
        s[35],
        a ? ae(
          l,
          /*$$scope*/
          s[35],
          u,
          qh
        ) : oe(
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
      a || (C(o, s), a = !0);
    },
    o(s) {
      I(o, s), a = !1;
    },
    d(s) {
      s && B(e), o && o.d(s);
    }
  };
}
function zh(t) {
  let e, n, i, r, a, l, o, s, u, f, c, d, p, g;
  const b = (
    /*#slots*/
    t[36].default
  ), m = re(
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
    Ue(
      /*$$restProps*/
      t[25],
      "table$"
    )
  ], v = {};
  for (let E = 0; E < y.length; E += 1)
    v = q(v, y[E]);
  let O = [
    {
      class: l = Y({
        [
          /*container$class*/
          t[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ue(
      /*$$restProps*/
      t[25],
      "container$"
    )
  ], A = {};
  for (let E = 0; E < O.length; E += 1)
    A = q(A, O[E]);
  let D = (
    /*$$slots*/
    t[24].progress && na(t)
  );
  const M = (
    /*#slots*/
    t[36].paginate
  ), h = re(
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
    Rt(
      /*$$restProps*/
      t[25],
      ["container$", "table$"]
    )
  ], V = {};
  for (let E = 0; E < R.length; E += 1)
    V = q(V, R[E]);
  return {
    c() {
      e = K("div"), n = K("div"), i = K("table"), m && m.c(), s = Q(), D && D.c(), u = Q(), h && h.c(), ne(i, v), ne(n, A), ne(e, V);
    },
    m(E, _) {
      P(E, e, _), Z(e, n), Z(n, i), m && m.m(i, null), t[37](n), Z(e, s), D && D.m(e, null), Z(e, u), h && h.m(e, null), t[38](e), d = !0, p || (g = [
        te(a = De.call(
          null,
          i,
          /*table$use*/
          t[5]
        )),
        te(o = De.call(
          null,
          n,
          /*container$use*/
          t[3]
        )),
        te(c = De.call(
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
      ], p = !0);
    },
    p(E, _) {
      m && m.p && (!d || _[1] & /*$$scope*/
      16) && le(
        m,
        b,
        E,
        /*$$scope*/
        E[35],
        d ? ae(
          b,
          /*$$scope*/
          E[35],
          _,
          null
        ) : oe(
          /*$$scope*/
          E[35]
        ),
        null
      ), ne(i, v = ce(y, [
        (!d || _[0] & /*table$class*/
        64 && r !== (r = Y({
          [
            /*table$class*/
            E[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        _[0] & /*$$restProps*/
        33554432 && Ue(
          /*$$restProps*/
          E[25],
          "table$"
        )
      ])), a && pe(a.update) && _[0] & /*table$use*/
      32 && a.update.call(
        null,
        /*table$use*/
        E[5]
      ), ne(n, A = ce(O, [
        (!d || _[0] & /*container$class*/
        16 && l !== (l = Y({
          [
            /*container$class*/
            E[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: l },
        _[0] & /*$$restProps*/
        33554432 && Ue(
          /*$$restProps*/
          E[25],
          "container$"
        )
      ])), o && pe(o.update) && _[0] & /*container$use*/
      8 && o.update.call(
        null,
        /*container$use*/
        E[3]
      ), /*$$slots*/
      E[24].progress ? D ? (D.p(E, _), _[0] & /*$$slots*/
      16777216 && C(D, 1)) : (D = na(E), D.c(), C(D, 1), D.m(e, u)) : D && (ve(), I(D, 1, 1, () => {
        D = null;
      }), ye()), h && h.p && (!d || _[1] & /*$$scope*/
      16) && le(
        h,
        M,
        E,
        /*$$scope*/
        E[35],
        d ? ae(
          M,
          /*$$scope*/
          E[35],
          _,
          Vh
        ) : oe(
          /*$$scope*/
          E[35]
        ),
        ea
      ), ne(e, V = ce(R, [
        (!d || _[0] & /*className, stickyHeader, internalClasses*/
        4102 && f !== (f = Y({
          [
            /*className*/
            E[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            E[2]
          ),
          .../*internalClasses*/
          E[12]
        }))) && { class: f },
        _[0] & /*$$restProps*/
        33554432 && Rt(
          /*$$restProps*/
          E[25],
          ["container$", "table$"]
        )
      ])), c && pe(c.update) && _[0] & /*use*/
      1 && c.update.call(
        null,
        /*use*/
        E[0]
      );
    },
    i(E) {
      d || (C(m, E), C(D), C(h, E), d = !0);
    },
    o(E) {
      I(m, E), I(D), I(h, E), d = !1;
    },
    d(E) {
      E && B(e), m && m.d(E), t[37](null), D && D.d(), h && h.d(E), t[38](null), p = !1, Se(g);
    }
  };
}
const ia = ([t, e]) => `${t}: ${e};`;
function Xh(t, e, n) {
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
  let r = ue(e, i), a, l, o, { $$slots: s = {}, $$scope: u } = e;
  const f = Ma(s), { closest: c } = Ti, d = Ge(Te());
  let { use: p = [] } = e, { class: g = "" } = e, { stickyHeader: b = !1 } = e, { sortable: m = !1 } = e, { sort: y = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: O = "sorted, ascending" } = e, { sortDescendingAriaLabel: A = "sorted, descending" } = e, { container$use: D = [] } = e, { container$class: M = "" } = e, { table$use: h = [] } = e, { table$class: R = "" } = e, V, E, _, w, H, X = {}, ie = { height: "auto", top: "initial" }, fe = ke("SMUI:addLayoutListener"), J, k = !1, S = it(!1);
  nt(t, S, (L) => n(34, a = L));
  let z = it(y);
  nt(t, z, (L) => n(45, o = L));
  let ge = it(v);
  nt(t, ge, (L) => n(44, l = L)), He("SMUI:checkbox:context", "data-table"), He("SMUI:linear-progress:context", "data-table"), He("SMUI:linear-progress:closed", S), He("SMUI:data-table:sortable", m), He("SMUI:data-table:sort", z), He("SMUI:data-table:sortDirection", ge), He("SMUI:data-table:sortAscendingAriaLabel", O), He("SMUI:data-table:sortDescendingAriaLabel", A), fe && (J = fe(ze));
  let Oe;
  Je(() => (n(7, E = new Gh({
    addClass: Qe,
    removeClass: Pe,
    getHeaderCellElements: () => {
      var L;
      return (L = w == null ? void 0 : w.cells.map((G) => G.element)) !== null && L !== void 0 ? L : [];
    },
    getHeaderCellCount: () => {
      var L;
      return (L = w == null ? void 0 : w.cells.length) !== null && L !== void 0 ? L : 0;
    },
    getAttributeByHeaderCellIndex: (L, G) => {
      var Ae;
      return (Ae = w == null ? void 0 : w.orderedCells[L].getAttr(G)) !== null && Ae !== void 0 ? Ae : null;
    },
    setAttributeByHeaderCellIndex: (L, G, Ae) => {
      w == null || w.orderedCells[L].addAttr(G, Ae);
    },
    setClassNameByHeaderCellIndex: (L, G) => {
      w == null || w.orderedCells[L].addClass(G);
    },
    removeClassNameByHeaderCellIndex: (L, G) => {
      w == null || w.orderedCells[L].removeClass(G);
    },
    notifySortAction: (L) => {
      n(26, y = L.columnId), n(27, v = L.sortValue), _e(rt(), "SMUIDataTable:sorted", L, void 0, !0);
    },
    getTableContainerHeight: () => _.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const L = rt().querySelector(".mdc-data-table__header-row");
      if (!L)
        throw new Error("MDCDataTable: Table header element not found.");
      return L.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (L) => {
      n(13, ie = L);
    },
    addClassAtRowIndex: (L, G) => {
      H == null || H.orderedRows[L].addClass(G);
    },
    getRowCount: () => {
      var L;
      return (L = H == null ? void 0 : H.rows.length) !== null && L !== void 0 ? L : 0;
    },
    getRowElements: () => {
      var L;
      return (L = H == null ? void 0 : H.rows.map((G) => G.element)) !== null && L !== void 0 ? L : [];
    },
    getRowIdAtIndex: (L) => {
      var G;
      return (G = H == null ? void 0 : H.orderedRows[L].rowId) !== null && G !== void 0 ? G : null;
    },
    getRowIndexByChildElement: (L) => {
      var G;
      return (G = H == null ? void 0 : H.orderedRows.map((Ae) => Ae.element).indexOf(c(L, ".mdc-data-table__row"))) !== null && G !== void 0 ? G : -1;
    },
    getSelectedRowCount: () => {
      var L;
      return (L = H == null ? void 0 : H.rows.filter((G) => G.selected).length) !== null && L !== void 0 ? L : 0;
    },
    isCheckboxAtRowIndexChecked: (L) => {
      const G = H == null ? void 0 : H.orderedRows[L].checkbox;
      return G ? G.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const L = w == null ? void 0 : w.checkbox;
      return L ? L.checked : !1;
    },
    isRowsSelectable: () => !!rt().querySelector(".mdc-data-table__row-checkbox") || !!rt().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (L) => {
      const G = H == null ? void 0 : H.orderedRows[L.rowIndex];
      G && _e(
        rt(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: G.element,
          rowId: G.rowId,
          rowIndex: L.rowIndex,
          selected: L.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      ot(!1), _e(rt(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      ot(!1), _e(rt(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (L) => {
      _e(rt(), "SMUIDataTable:rowClick", L, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (L, G) => {
      H == null || H.orderedRows[L].removeClass(G);
    },
    setAttributeAtRowIndex: (L, G, Ae) => {
      H == null || H.orderedRows[L].addAttr(G, Ae);
    },
    setHeaderRowCheckboxChecked: (L) => {
      const G = w == null ? void 0 : w.checkbox;
      G && (G.checked = L);
    },
    setHeaderRowCheckboxIndeterminate: ot,
    setRowCheckboxCheckedAtIndex: (L, G) => {
      const Ae = H == null ? void 0 : H.orderedRows[L].checkbox;
      Ae && (Ae.checked = G);
    },
    setSortStatusLabelByHeaderCellIndex: (L, G) => {
    }
    // Handled automatically.
  })), E.init(), E.layout(), n(14, k = !0), () => {
    E.destroy();
  })), an(() => {
    J && J();
  });
  function Xe(L) {
    n(10, w = L.detail);
  }
  function Ke(L) {
    n(11, H = L.detail);
  }
  function Ce(L) {
    E && E.handleRowCheckboxChange(L);
  }
  function Qe(L) {
    X[L] || n(12, X[L] = !0, X);
  }
  function Pe(L) {
    (!(L in X) || X[L]) && n(12, X[L] = !1, X);
  }
  function ot(L) {
    const G = w == null ? void 0 : w.checkbox;
    G && (G.indeterminate = L);
  }
  function st(L) {
    if (!E || !L.detail.target)
      return;
    const G = c(L.detail.target, ".mdc-data-table__header-cell--with-sort");
    G && W(G);
  }
  function Et(L) {
    if (!E || !L.detail.target)
      return;
    const G = c(L.detail.target, ".mdc-data-table__row");
    G && E && E.handleRowClick({ rowId: L.detail.rowId, row: G });
  }
  function W(L) {
    var G, Ae;
    const ht = (G = w == null ? void 0 : w.orderedCells) !== null && G !== void 0 ? G : [], un = ht.map((Cn) => Cn.element).indexOf(L);
    if (un === -1)
      return;
    const Sn = (Ae = ht[un].columnId) !== null && Ae !== void 0 ? Ae : null;
    E.handleSortAction({ columnId: Sn, columnIndex: un, headerCell: L });
  }
  function ze() {
    return E.layout();
  }
  function rt() {
    return V;
  }
  function dt(L) {
    ee[L ? "unshift" : "push"](() => {
      _ = L, n(9, _);
    });
  }
  function $e(L) {
    ee[L ? "unshift" : "push"](() => {
      V = L, n(8, V);
    });
  }
  const It = () => E && k && E.layout(), bt = () => n(10, w = void 0), Dt = () => n(11, H = void 0), sn = () => E && E.handleHeaderRowCheckboxChange();
  return t.$$set = (L) => {
    e = q(q({}, e), Fe(L)), n(25, r = ue(e, i)), "use" in L && n(0, p = L.use), "class" in L && n(1, g = L.class), "stickyHeader" in L && n(2, b = L.stickyHeader), "sortable" in L && n(28, m = L.sortable), "sort" in L && n(26, y = L.sort), "sortDirection" in L && n(27, v = L.sortDirection), "sortAscendingAriaLabel" in L && n(29, O = L.sortAscendingAriaLabel), "sortDescendingAriaLabel" in L && n(30, A = L.sortDescendingAriaLabel), "container$use" in L && n(3, D = L.container$use), "container$class" in L && n(4, M = L.container$class), "table$use" in L && n(5, h = L.table$use), "table$class" in L && n(6, R = L.table$class), "$$scope" in L && n(35, u = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sort*/
    67108864 && Lt(z, o = y, o), t.$$.dirty[0] & /*sortDirection*/
    134217728 && Lt(ge, l = v, l), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && f.progress && E && Oe !== a && (n(33, Oe = a), a ? E.hideProgress() : E.showProgress());
  }, [
    p,
    g,
    b,
    D,
    M,
    h,
    R,
    E,
    V,
    _,
    w,
    H,
    X,
    ie,
    k,
    d,
    S,
    z,
    ge,
    Xe,
    Ke,
    Ce,
    st,
    Et,
    f,
    r,
    y,
    v,
    m,
    O,
    A,
    ze,
    rt,
    Oe,
    a,
    u,
    s,
    dt,
    $e,
    It,
    bt,
    Dt,
    sn
  ];
}
class Wh extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Xh,
      zh,
      se,
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
function Zh(t) {
  let e, n, i, r, a;
  const l = (
    /*#slots*/
    t[10].default
  ), o = re(
    l,
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
    u = q(u, s[f]);
  return {
    c() {
      e = K("thead"), o && o.c(), ne(e, u);
    },
    m(f, c) {
      P(f, e, c), o && o.m(e, null), t[11](e), i = !0, r || (a = [
        te(n = De.call(
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
      o && o.p && (!i || c & /*$$scope*/
      512) && le(
        o,
        l,
        f,
        /*$$scope*/
        f[9],
        i ? ae(
          l,
          /*$$scope*/
          f[9],
          c,
          null
        ) : oe(
          /*$$scope*/
          f[9]
        ),
        null
      ), ne(e, u = ce(s, [c & /*$$restProps*/
      128 && /*$$restProps*/
      f[7]])), n && pe(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(o, f), i = !0);
    },
    o(f) {
      I(o, f), i = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[11](null), r = !1, Se(a);
    }
  };
}
function Kh(t, e, n) {
  const i = ["use", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  const o = Ge(Te());
  let { use: s = [] } = e, u, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !0), Je(() => {
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
    return _e(y(), "SMUIDataTableHeader:mount", A), () => {
      _e(y(), "SMUIDataTableHeader:unmount", A);
    };
  });
  function p(A) {
    n(2, f = A.detail);
  }
  function g(A) {
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
  function v(A) {
    ee[A ? "unshift" : "push"](() => {
      u = A, n(1, u);
    });
  }
  const O = () => n(2, f = void 0);
  return t.$$set = (A) => {
    e = q(q({}, e), Fe(A)), n(7, r = ue(e, i)), "use" in A && n(0, s = A.use), "$$scope" in A && n(9, l = A.$$scope);
  }, [
    s,
    u,
    f,
    o,
    p,
    g,
    b,
    r,
    y,
    l,
    a,
    v,
    O
  ];
}
class Qh extends he {
  constructor(e) {
    super(), de(this, e, Kh, Zh, se, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Yh(t) {
  let e, n, i, r, a, l;
  const o = (
    /*#slots*/
    t[9].default
  ), s = re(
    o,
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
    f = q(f, u[c]);
  return {
    c() {
      e = K("tbody"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[10](e), r = !0, a || (l = [
        te(i = De.call(
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
      256) && le(
        s,
        o,
        c,
        /*$$scope*/
        c[8],
        r ? ae(
          o,
          /*$$scope*/
          c[8],
          d,
          null
        ) : oe(
          /*$$scope*/
          c[8]
        ),
        null
      ), ne(e, f = ce(u, [
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (C(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[10](null), a = !1, Se(l);
    }
  };
}
function Jh(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  const o = Ge(Te());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !1), Je(() => {
    const v = {
      get rows() {
        return c;
      },
      get orderedRows() {
        return b();
      }
    };
    return _e(m(), "SMUIDataTableBody:mount", v), () => {
      _e(m(), "SMUIDataTableBody:unmount", v);
    };
  });
  function p(v) {
    c.push(v.detail), d.set(v.detail.element, v.detail), v.stopPropagation();
  }
  function g(v) {
    const O = c.indexOf(v.detail);
    O !== -1 && (c.splice(O, 1), c = c), d.delete(v.detail.element), v.stopPropagation();
  }
  function b() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((v) => d.get(v)).filter((v) => v && v._smui_data_table_row_accessor);
  }
  function m() {
    return f;
  }
  function y(v) {
    ee[v ? "unshift" : "push"](() => {
      f = v, n(2, f);
    });
  }
  return t.$$set = (v) => {
    e = q(q({}, e), Fe(v)), n(6, r = ue(e, i)), "use" in v && n(0, s = v.use), "class" in v && n(1, u = v.class), "$$scope" in v && n(8, l = v.$$scope);
  }, [
    s,
    u,
    f,
    o,
    p,
    g,
    r,
    m,
    l,
    a,
    y
  ];
}
class xh extends he {
  constructor(e) {
    super(), de(this, e, Jh, Yh, se, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function $h(t) {
  let e, n, i, r, a, l, o;
  const s = (
    /*#slots*/
    t[15].default
  ), u = re(
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
    c = q(c, f[d]);
  return {
    c() {
      e = K("tr"), u && u.c(), ne(e, c);
    },
    m(d, p) {
      P(d, e, p), u && u.m(e, null), t[16](e), a = !0, l || (o = [
        te(r = De.call(
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
      ], l = !0);
    },
    p(d, [p]) {
      u && u.p && (!a || p & /*$$scope*/
      16384) && le(
        u,
        s,
        d,
        /*$$scope*/
        d[14],
        a ? ae(
          s,
          /*$$scope*/
          d[14],
          p,
          null
        ) : oe(
          /*$$scope*/
          d[14]
        ),
        null
      ), ne(e, c = ce(f, [
        (!a || p & /*className, checkbox, internalClasses*/
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
        (!a || p & /*checkbox*/
        8 && i !== (i = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": i },
        p & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        p & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), r && pe(r.update) && p & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      a || (C(u, d), a = !0);
    },
    o(d) {
      I(u, d), a = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), t[16](null), l = !1, Se(o);
    }
  };
}
let em = 0;
function tm(t, e, n) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  const o = Ge(Te());
  let { use: s = [] } = e, { class: u = "" } = e, { rowId: f = "SMUI-data-table-row-" + em++ } = e, c, d, p = {}, g = {}, b = ke("SMUI:data-table:row:header");
  Je(() => {
    const _ = b ? {
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
        var w;
        return (w = d && d.checked) !== null && w !== void 0 ? w : !1;
      },
      addClass: y,
      removeClass: v,
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
        var w;
        return (w = d && d.checked) !== null && w !== void 0 ? w : !1;
      },
      addClass: y,
      removeClass: v,
      getAttr: O,
      addAttr: A
    };
    return _e(h(), "SMUIDataTableRow:mount", _), () => {
      _e(h(), "SMUIDataTableRow:unmount", _);
    };
  });
  function m(_) {
    n(3, d = _.detail);
  }
  function y(_) {
    p[_] || n(4, p[_] = !0, p);
  }
  function v(_) {
    (!(_ in p) || p[_]) && n(4, p[_] = !1, p);
  }
  function O(_) {
    var w;
    return _ in g ? (w = g[_]) !== null && w !== void 0 ? w : null : h().getAttribute(_);
  }
  function A(_, w) {
    g[_] !== w && n(5, g[_] = w, g);
  }
  function D(_) {
    _e(h(), "SMUIDataTableHeader:click", _);
  }
  function M(_) {
    _e(h(), "SMUIDataTableRow:click", { rowId: f, target: _.target });
  }
  function h() {
    return c;
  }
  function R(_) {
    ee[_ ? "unshift" : "push"](() => {
      c = _, n(2, c);
    });
  }
  const V = (_) => b ? D(_) : M(_), E = () => n(3, d = void 0);
  return t.$$set = (_) => {
    e = q(q({}, e), Fe(_)), n(11, r = ue(e, i)), "use" in _ && n(0, s = _.use), "class" in _ && n(1, u = _.class), "rowId" in _ && n(12, f = _.rowId), "$$scope" in _ && n(14, l = _.$$scope);
  }, [
    s,
    u,
    c,
    d,
    p,
    g,
    o,
    b,
    m,
    D,
    M,
    r,
    f,
    h,
    l,
    a,
    R,
    V,
    E
  ];
}
class El extends he {
  constructor(e) {
    super(), de(this, e, tm, $h, se, {
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
function nm(t) {
  let e, n, i, r, a, l;
  const o = (
    /*#slots*/
    t[22].default
  ), s = re(
    o,
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
    f = q(f, u[c]);
  return {
    c() {
      e = K("td"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[25](e), r = !0, a || (l = [
        te(i = De.call(
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
      2097152) && le(
        s,
        o,
        c,
        /*$$scope*/
        c[21],
        r ? ae(
          o,
          /*$$scope*/
          c[21],
          d,
          null
        ) : oe(
          /*$$scope*/
          c[21]
        ),
        null
      ), ne(e, f = ce(u, [
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (C(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[25](null), a = !1, Se(l);
    }
  };
}
function im(t) {
  let e, n, i, r, a, l, o, s, u;
  const f = [am, rm], c = [];
  function d(b, m) {
    return (
      /*sortable*/
      b[5] ? 0 : 1
    );
  }
  n = d(t), i = c[n] = f[n](t);
  let p = [
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
  ], g = {};
  for (let b = 0; b < p.length; b += 1)
    g = q(g, p[b]);
  return {
    c() {
      e = K("th"), i.c(), ne(e, g);
    },
    m(b, m) {
      P(b, e, m), c[n].m(e, null), t[23](e), o = !0, s || (u = [
        te(l = De.call(
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
      n = d(b), n === y ? c[n].p(b, m) : (ve(), I(c[y], 1, 1, () => {
        c[y] = null;
      }), ye(), i = c[n], i ? i.p(b, m) : (i = c[n] = f[n](b), i.c()), C(i, 1), i.m(e, null)), ne(e, g = ce(p, [
        (!o || m & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
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
        (!o || m & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          b[4]
        ) },
        (!o || m & /*sortable, $sort, columnId, $sortDirection*/
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
      ])), l && pe(l.update) && m & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      o || (C(i), o = !0);
    },
    o(b) {
      I(i), o = !1;
    },
    d(b) {
      b && B(e), c[n].d(), t[23](null), s = !1, Se(u);
    }
  };
}
function rm(t) {
  let e;
  const n = (
    /*#slots*/
    t[22].default
  ), i = re(
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
      2097152) && le(
        i,
        n,
        r,
        /*$$scope*/
        r[21],
        e ? ae(
          n,
          /*$$scope*/
          r[21],
          a,
          null
        ) : oe(
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
      I(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function am(t) {
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
  ), a, l, o;
  const s = (
    /*#slots*/
    t[22].default
  ), u = re(
    s,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = K("div"), u && u.c(), n = Q(), i = K("div"), a = Me(r), U(i, "class", "mdc-data-table__sort-status-label"), U(i, "aria-hidden", "true"), U(i, "id", l = /*columnId*/
      t[4] + "-status-label"), U(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(f, c) {
      P(f, e, c), u && u.m(e, null), Z(e, n), Z(e, i), Z(i, a), o = !0;
    },
    p(f, c) {
      u && u.p && (!o || c & /*$$scope*/
      2097152) && le(
        u,
        s,
        f,
        /*$$scope*/
        f[21],
        o ? ae(
          s,
          /*$$scope*/
          f[21],
          c,
          null
        ) : oe(
          /*$$scope*/
          f[21]
        ),
        null
      ), (!o || c & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && Ne(a, r), (!o || c & /*columnId*/
      16 && l !== (l = /*columnId*/
      f[4] + "-status-label")) && U(i, "id", l);
    },
    i(f) {
      o || (C(u, f), o = !0);
    },
    o(f) {
      I(u, f), o = !1;
    },
    d(f) {
      f && B(e), u && u.d(f);
    }
  };
}
function lm(t) {
  let e, n, i, r;
  const a = [im, nm], l = [];
  function o(s, u) {
    return (
      /*header*/
      s[12] ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      n.p(s, u);
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
let om = 0;
function sm(t, e, n) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = ue(e, i), a, l, { $$slots: o = {}, $$scope: s } = e;
  const u = Ge(Te());
  let f = ke("SMUI:data-table:row:header"), { use: c = [] } = e, { class: d = "" } = e, { numeric: p = !1 } = e, { checkbox: g = !1 } = e, { columnId: b = f ? "SMUI-data-table-column-" + om++ : "SMUI-data-table-unused" } = e, { sortable: m = ke("SMUI:data-table:sortable") } = e, y, v = {}, O = {}, A = ke("SMUI:data-table:sort");
  nt(t, A, (S) => n(9, a = S));
  let D = ke("SMUI:data-table:sortDirection");
  nt(t, D, (S) => n(10, l = S));
  let M = ke("SMUI:data-table:sortAscendingAriaLabel"), h = ke("SMUI:data-table:sortDescendingAriaLabel");
  m && (He("SMUI:label:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:aria-describedby", b + "-status-label")), Je(() => {
    const S = f ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return b;
      },
      addClass: R,
      removeClass: V,
      getAttr: E,
      addAttr: _
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: R,
      removeClass: V,
      getAttr: E,
      addAttr: _
    };
    return _e(X(), "SMUIDataTableCell:mount", S), () => {
      _e(X(), "SMUIDataTableCell:unmount", S);
    };
  });
  function R(S) {
    v[S] || n(7, v[S] = !0, v);
  }
  function V(S) {
    (!(S in v) || v[S]) && n(7, v[S] = !1, v);
  }
  function E(S) {
    var z;
    return S in O ? (z = O[S]) !== null && z !== void 0 ? z : null : X().getAttribute(S);
  }
  function _(S, z) {
    O[S] !== z && n(8, O[S] = z, O);
  }
  function w(S) {
    _e(X(), "SMUIDataTableHeaderCheckbox:change", S);
  }
  function H(S) {
    _e(X(), "SMUIDataTableBodyCheckbox:change", S);
  }
  function X() {
    return y;
  }
  function ie(S) {
    ee[S ? "unshift" : "push"](() => {
      y = S, n(6, y);
    });
  }
  const fe = (S) => g && w(S);
  function J(S) {
    ee[S ? "unshift" : "push"](() => {
      y = S, n(6, y);
    });
  }
  const k = (S) => g && H(S);
  return t.$$set = (S) => {
    e = q(q({}, e), Fe(S)), n(19, r = ue(e, i)), "use" in S && n(0, c = S.use), "class" in S && n(1, d = S.class), "numeric" in S && n(2, p = S.numeric), "checkbox" in S && n(3, g = S.checkbox), "columnId" in S && n(4, b = S.columnId), "sortable" in S && n(5, m = S.sortable), "$$scope" in S && n(21, s = S.$$scope);
  }, [
    c,
    d,
    p,
    g,
    b,
    m,
    y,
    v,
    O,
    a,
    l,
    u,
    f,
    A,
    D,
    M,
    h,
    w,
    H,
    r,
    X,
    s,
    o,
    ie,
    fe,
    J,
    k
  ];
}
class Hi extends he {
  constructor(e) {
    super(), de(this, e, sm, lm, se, {
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
function um(t) {
  let e, n, i, r, a, l, o, s, u, f, c, d, p, g, b, m, y, v, O, A, D = [
    {
      class: p = Y({
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
      style: g = Object.entries(
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
    M = q(M, D[h]);
  return {
    c() {
      e = K("div"), n = K("div"), i = K("div"), a = Q(), l = K("div"), o = Q(), s = K("div"), u = K("span"), c = Q(), d = K("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', U(i, "class", "mdc-linear-progress__buffer-bar"), U(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        t[11]
      ).map(ra).join(" ")), U(l, "class", "mdc-linear-progress__buffer-dots"), U(n, "class", "mdc-linear-progress__buffer"), U(u, "class", "mdc-linear-progress__bar-inner"), U(s, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), U(s, "style", f = Object.entries(
        /*primaryBarStyles*/
        t[12]
      ).map(aa).join(" ")), U(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ne(e, M);
    },
    m(h, R) {
      P(h, e, R), Z(e, n), Z(n, i), Z(n, a), Z(n, l), Z(e, o), Z(e, s), Z(s, u), Z(e, c), Z(e, d), t[19](e), O || (A = [
        te(v = De.call(
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
      ).map(aa).join(" ")) && U(s, "style", f), ne(e, M = ce(D, [
        R & /*className, indeterminate, closed, internalClasses*/
        282 && p !== (p = Y({
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
        })) && { class: p },
        R & /*internalStyles, style*/
        1028 && g !== (g = Object.entries(
          /*internalStyles*/
          h[10]
        ).map(la).concat([
          /*style*/
          h[2]
        ]).join(" ")) && { style: g },
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
      ])), v && pe(v.update) && R & /*use*/
      1 && v.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i: Ie,
    o: Ie,
    d(h) {
      h && B(e), t[19](null), O = !1, Se(A);
    }
  };
}
const ra = ([t, e]) => `${t}: ${e};`, aa = ([t, e]) => `${t}: ${e};`, la = ([t, e]) => `${t}: ${e};`;
function fm(t, e, n) {
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
  let r = ue(e, i), a;
  const l = Ge(Te());
  let { use: o = [] } = e, { class: s = "" } = e, { style: u = "" } = e, { indeterminate: f = !1 } = e, { closed: c = !1 } = e, { progress: d = 0 } = e, { buffer: p = void 0 } = e, g, b, m = {}, y = {}, v = {}, O = {}, A = {}, D = ke("SMUI:linear-progress:context"), M = ke("SMUI:linear-progress:closed");
  nt(t, M, (k) => n(21, a = k)), Je(() => (n(6, b = new jh({
    addClass: R,
    forceLayout: () => {
      ie().getBoundingClientRect();
    },
    setBufferBarStyle: H,
    setPrimaryBarStyle: X,
    hasClass: h,
    removeAttribute: _,
    removeClass: V,
    setAttribute: E,
    setStyle: w,
    attachResizeObserver: (k) => {
      const S = window.ResizeObserver;
      if (S) {
        const z = new S(k);
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
  function V(k) {
    (!(k in m) || m[k]) && n(8, m[k] = !1, m);
  }
  function E(k, S) {
    y[k] !== S && n(9, y[k] = S, y);
  }
  function _(k) {
    (!(k in y) || y[k] != null) && n(9, y[k] = void 0, y);
  }
  function w(k, S) {
    v[k] != S && (S === "" || S == null ? (delete v[k], n(10, v)) : n(10, v[k] = S, v));
  }
  function H(k, S) {
    O[k] != S && (S === "" || S == null ? (delete O[k], n(11, O)) : n(11, O[k] = S, O));
  }
  function X(k, S) {
    A[k] != S && (S === "" || S == null ? (delete A[k], n(12, A)) : n(12, A[k] = S, A));
  }
  function ie() {
    return g;
  }
  function fe(k) {
    ee[k ? "unshift" : "push"](() => {
      g = k, n(7, g);
    });
  }
  const J = () => b && b.handleTransitionEnd();
  return t.$$set = (k) => {
    e = q(q({}, e), Fe(k)), n(16, r = ue(e, i)), "use" in k && n(0, o = k.use), "class" in k && n(1, s = k.class), "style" in k && n(2, u = k.style), "indeterminate" in k && n(3, f = k.indeterminate), "closed" in k && n(4, c = k.closed), "progress" in k && n(5, d = k.progress), "buffer" in k && n(17, p = k.buffer);
  }, t.$$.update = () => {
    t.$$.dirty & /*closed*/
    16 && M && Lt(M, a = c, a), t.$$.dirty & /*instance, indeterminate*/
    72 && b && b.isDeterminate() !== !f && b.setDeterminate(!f), t.$$.dirty & /*instance, progress*/
    96 && b && b.getProgress() !== d && b.setProgress(d), t.$$.dirty & /*instance, buffer*/
    131136 && b && (p == null ? b.setBuffer(1) : b.setBuffer(p)), t.$$.dirty & /*instance, closed*/
    80 && b && (c ? b.close() : b.open());
  }, [
    o,
    s,
    u,
    f,
    c,
    d,
    b,
    g,
    m,
    y,
    v,
    O,
    A,
    l,
    D,
    M,
    r,
    p,
    ie,
    fe,
    J
  ];
}
class cm extends he {
  constructor(e) {
    super(), de(this, e, fm, um, se, {
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
      n && n.c(), e = Le();
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
  function n(a, l) {
    if (
      /*$sortDirection*/
      a[7] === "asc"
    )
      return hm;
    if (
      /*$sortDirection*/
      a[7] === "desc"
    )
      return dm;
  }
  let i = n(t), r = i && i(t);
  return {
    c() {
      r && r.c(), e = Le();
    },
    m(a, l) {
      r && r.m(a, l), P(a, e, l);
    },
    p(a, l) {
      i !== (i = n(a)) && (r && r.d(1), r = i && i(a), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(a) {
      a && B(e), r && r.d(a);
    }
  };
}
function dm(t) {
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
function hm(t) {
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
    t[28].filterType === "number" && pa(t)
  );
  return {
    c() {
      i && i.c(), e = Q(), r && r.c(), n = Le();
    },
    m(a, l) {
      i && i.m(a, l), P(a, e, l), r && r.m(a, l), P(a, n, l);
    },
    p(a, l) {
      /*col*/
      a[28].filterType === "text" ? i ? i.p(a, l) : (i = ma(a), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      a[28].filterType === "number" ? r ? r.p(a, l) : (r = pa(a), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null);
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
    m(l, o) {
      P(l, e, o), xt(
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
    p(l, o) {
      t = l, o[0] & /*searchInputLabel, columnDefs*/
      20 && n !== (n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`) && U(e, "placeholder", n), o[0] & /*filters, columnDefs*/
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
    d(l) {
      l && B(e), i = !1, Se(r);
    }
  };
}
function pa(t) {
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
    m(l, o) {
      P(l, e, o), xt(
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
    p(l, o) {
      t = l, o[0] & /*searchInputLabel, columnDefs*/
      20 && n !== (n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`) && U(e, "placeholder", n), o[0] & /*filters, columnDefs*/
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
    d(l) {
      l && B(e), i = !1, Se(r);
    }
  };
}
function mm(t) {
  let e, n, i, r = (
    /*col*/
    t[28].headerName + ""
  ), a, l, o, s, u = (
    /*col*/
    t[28].sortable && ca(t)
  ), f = (
    /*col*/
    t[28].filter && ha(t)
  );
  return {
    c() {
      e = K("div"), n = K("div"), i = K("span"), a = Me(r), l = Q(), u && u.c(), o = Q(), f && f.c(), s = Q(), U(i, "class", "header-title svelte-29x22x"), U(n, "class", "cell-header svelte-29x22x"), U(e, "class", "custom-cell-container svelte-29x22x"), pn(
        e,
        "min-width",
        /*col*/
        t[28].minWidth ?? 0
      );
    },
    m(c, d) {
      P(c, e, d), Z(e, n), Z(n, i), Z(i, a), Z(n, l), u && u.m(n, null), Z(e, o), f && f.m(e, null), P(c, s, d);
    },
    p(c, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      c[28].headerName + "") && Ne(a, r), /*col*/
      c[28].sortable ? u ? u.p(c, d) : (u = ca(c), u.c(), u.m(n, null)) : u && (u.d(1), u = null), /*col*/
      c[28].filter ? f ? f.p(c, d) : (f = ha(c), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d[0] & /*columnDefs*/
      4 && pn(
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
function ga(t) {
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
  return e = new Hi({
    props: {
      style: (
        /*col*/
        t[28].headerStyle
      ),
      $$slots: { default: [mm] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", i), {
    c() {
      j(e.$$.fragment);
    },
    m(r, a) {
      F(e, r, a), n = !0;
    },
    p(r, a) {
      t = r;
      const l = {};
      a[0] & /*columnDefs*/
      4 && (l.style = /*col*/
      t[28].headerStyle), a[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | a[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: a, ctx: t }), e.$set(l);
    },
    i(r) {
      n || (C(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function pm(t) {
  let e, n, i = Tt(
    /*columnDefs*/
    t[2]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = ga(fa(t, i, l));
  const a = (l) => I(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      e = Le();
    },
    m(l, o) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(l, o);
      P(l, e, o), n = !0;
    },
    p(l, o) {
      if (o[0] & /*columnDefs, sortColumnBy, searchInputLabel, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      12532) {
        i = Tt(
          /*columnDefs*/
          l[2]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const u = fa(l, i, s);
          r[s] ? (r[s].p(u, o), C(r[s], 1)) : (r[s] = ga(u), r[s].c(), C(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (ve(), s = i.length; s < r.length; s += 1)
          a(s);
        ye();
      }
    },
    i(l) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          C(r[o]);
        n = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        I(r[o]);
      n = !1;
    },
    d(l) {
      l && B(e), Ba(r, l);
    }
  };
}
function gm(t) {
  let e, n;
  return e = new El({
    props: {
      class: "header-row",
      $$slots: { default: [pm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | r[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function bm(t) {
  let e, n;
  return e = new Hi({
    props: {
      numeric: (
        /*col*/
        t[28].numeric
      ),
      style: (
        /*col*/
        t[28].cellStyle
      ),
      $$slots: { default: [Am] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
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
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function _m(t) {
  let e, n;
  return e = new Hi({
    props: {
      $$slots: { default: [Dm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r[0] & /*rowActions, $filteredData*/
      264 | r[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function vm(t) {
  let e = (
    /*row*/
    (t[25][
      /*col*/
      t[28].field
    ] ?? "") + ""
  ), n;
  return {
    c() {
      n = Me(e);
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
      ] ?? "") + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function ym(t) {
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
      n = Me(e);
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
      ) + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function Am(t) {
  let e;
  function n(a, l) {
    return (
      /*col*/
      a[28].valueFormatter ? ym : vm
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Le();
    },
    m(a, l) {
      r.m(a, l), P(a, e, l);
    },
    p(a, l) {
      i === (i = n(a)) && r ? r.p(a, l) : (r.d(1), r = i(a), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(a) {
      a && B(e), r.d(a);
    }
  };
}
function Sm(t) {
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
      $$slots: { default: [km] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, a) {
      F(e, r, a), n = !0;
    },
    p(r, a) {
      t = r;
      const l = {};
      a[0] & /*rowActions, $filteredData*/
      264 && (l.callback = i), a[0] & /*rowActions, $filteredData*/
      264 && (l.disabled = /*action*/
      t[31].disabled(
        /*row*/
        t[25]
      )), a[0] & /*rowActions*/
      8 | a[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: a, ctx: t }), e.$set(l);
    },
    i(r) {
      n || (C(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Cm(t) {
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
  return e = new ac({
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
      F(e, r, a), n = !0;
    },
    p(r, a) {
      t = r;
      const l = {};
      a[0] & /*rowActions*/
      8 && (l.iconComponent = /*action*/
      t[31].iconComponent), a[0] & /*rowActions*/
      8 && (l.iconStyles = /*action*/
      t[31].iconStyles), a[0] & /*rowActions, $filteredData*/
      264 && (l.callback = i), a[0] & /*rowActions, $filteredData*/
      264 && (l.disabled = /*action*/
      t[31].disabled(
        /*row*/
        t[25]
      )), e.$set(l);
    },
    i(r) {
      n || (C(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Em(t) {
  let e, n;
  return e = new Al({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Im(t) {
  let e, n;
  return e = new kh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Lm(t) {
  let e, n;
  return e = new wh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Om(t) {
  let e, n;
  return e = new Eh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function wm(t) {
  let e, n;
  return e = new mh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Tm(t) {
  let e, n;
  return e = new fh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Rm(t) {
  let e, n;
  return e = new Ri({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Hm(t) {
  let e, n;
  return e = new yl({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function km(t) {
  let e, n, i, r;
  const a = [
    Hm,
    Rm,
    Tm,
    wm,
    Om,
    Lm,
    Im,
    Em
  ], l = [];
  function o(s, u) {
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
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = o(s), e !== f && (ve(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ye(), n = l[e], n || (n = l[e] = a[e](s), n.c()), C(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
function ba(t) {
  let e, n, i, r;
  const a = [Cm, Sm], l = [];
  function o(s, u) {
    return (
      /*action*/
      s[31].iconComponent ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = o(s), e === f ? l[e].p(s, u) : (ve(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ye(), n = l[e], n ? n.p(s, u) : (n = l[e] = a[e](s), n.c()), C(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
function Dm(t) {
  let e, n, i = Tt(
    /*rowActions*/
    t[3]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = ba(ua(t, i, l));
  const a = (l) => I(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      e = K("div");
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      U(e, "class", "cell-actions svelte-29x22x");
    },
    m(l, o) {
      P(l, e, o);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(e, null);
      n = !0;
    },
    p(l, o) {
      if (o[0] & /*rowActions, $filteredData*/
      264) {
        i = Tt(
          /*rowActions*/
          l[3]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const u = ua(l, i, s);
          r[s] ? (r[s].p(u, o), C(r[s], 1)) : (r[s] = ba(u), r[s].c(), C(r[s], 1), r[s].m(e, null));
        }
        for (ve(), s = i.length; s < r.length; s += 1)
          a(s);
        ye();
      }
    },
    i(l) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          C(r[o]);
        n = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        I(r[o]);
      n = !1;
    },
    d(l) {
      l && B(e), Ba(r, l);
    }
  };
}
function _a(t, e) {
  let n, i, r, a, l;
  const o = [_m, bm], s = [];
  function u(f, c) {
    return (
      /*col*/
      f[28].field === "actions" ? 0 : 1
    );
  }
  return i = u(e), r = s[i] = o[i](e), {
    key: t,
    first: null,
    c() {
      n = Le(), r.c(), a = Le(), this.first = n;
    },
    m(f, c) {
      P(f, n, c), s[i].m(f, c), P(f, a, c), l = !0;
    },
    p(f, c) {
      e = f;
      let d = i;
      i = u(e), i === d ? s[i].p(e, c) : (ve(), I(s[d], 1, 1, () => {
        s[d] = null;
      }), ye(), r = s[i], r ? r.p(e, c) : (r = s[i] = o[i](e), r.c()), C(r, 1), r.m(a.parentNode, a));
    },
    i(f) {
      l || (C(r), l = !0);
    },
    o(f) {
      I(r), l = !1;
    },
    d(f) {
      f && (B(n), B(a)), s[i].d(f);
    }
  };
}
function Mm(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, a = Tt(
    /*columnDefs*/
    t[2]
  );
  const l = (o) => (
    /*col*/
    o[28].field
  );
  for (let o = 0; o < a.length; o += 1) {
    let s = sa(t, a, o), u = l(s);
    n.set(u, e[o] = _a(u, s));
  }
  return {
    c() {
      for (let o = 0; o < e.length; o += 1)
        e[o].c();
      i = Q();
    },
    m(o, s) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(o, s);
      P(o, i, s), r = !0;
    },
    p(o, s) {
      s[0] & /*rowActions, $filteredData, columnDefs*/
      268 && (a = Tt(
        /*columnDefs*/
        o[2]
      ), ve(), e = Ga(e, s, l, 1, o, a, n, i.parentNode, ja, _a, i, sa), ye());
    },
    i(o) {
      if (!r) {
        for (let s = 0; s < a.length; s += 1)
          C(e[s]);
        r = !0;
      }
    },
    o(o) {
      for (let s = 0; s < e.length; s += 1)
        I(e[s]);
      r = !1;
    },
    d(o) {
      o && B(i);
      for (let s = 0; s < e.length; s += 1)
        e[s].d(o);
    }
  };
}
function va(t, e) {
  let n, i, r;
  return i = new El({
    props: {
      $$slots: { default: [Mm] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Le(), j(i.$$.fragment), this.first = n;
    },
    m(a, l) {
      P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      e = a;
      const o = {};
      l[0] & /*columnDefs, rowActions, $filteredData*/
      268 | l[1] & /*$$scope*/
      32 && (o.$$scope = { dirty: l, ctx: e }), i.$set(o);
    },
    i(a) {
      r || (C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(i, a);
    }
  };
}
function Bm(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, a = Tt(
    /*$filteredData*/
    t[8]
  );
  const l = (o) => (
    /*index*/
    o[27]
  );
  for (let o = 0; o < a.length; o += 1) {
    let s = oa(t, a, o), u = l(s);
    n.set(u, e[o] = va(u, s));
  }
  return {
    c() {
      for (let o = 0; o < e.length; o += 1)
        e[o].c();
      i = Le();
    },
    m(o, s) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(o, s);
      P(o, i, s), r = !0;
    },
    p(o, s) {
      s[0] & /*columnDefs, rowActions, $filteredData*/
      268 && (a = Tt(
        /*$filteredData*/
        o[8]
      ), ve(), e = Ga(e, s, l, 1, o, a, n, i.parentNode, ja, va, i, oa), ye());
    },
    i(o) {
      if (!r) {
        for (let s = 0; s < a.length; s += 1)
          C(e[s]);
        r = !0;
      }
    },
    o(o) {
      for (let s = 0; s < e.length; s += 1)
        I(e[s]);
      r = !1;
    },
    d(o) {
      o && B(i);
      for (let s = 0; s < e.length; s += 1)
        e[s].d(o);
    }
  };
}
function Pm(t) {
  let e, n, i, r;
  return e = new Qh({
    props: {
      $$slots: { default: [gm] },
      $$scope: { ctx: t }
    }
  }), i = new xh({
    props: {
      $$slots: { default: [Bm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | l[1] & /*$$scope*/
      32 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o);
      const s = {};
      l[0] & /*$filteredData, columnDefs, rowActions*/
      268 | l[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: l, ctx: a }), i.$set(s);
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(e, a), N(i, a);
    }
  };
}
function Um(t) {
  let e, n, i;
  function r(l) {
    t[16](l);
  }
  let a = {
    indeterminate: !0,
    "aria-label": "Data is being loaded...",
    slot: "progress"
  };
  return (
    /*loadingDone*/
    t[0] !== void 0 && (a.closed = /*loadingDone*/
    t[0]), e = new cm({ props: a }), ee.push(() => tt(e, "closed", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(l, o) {
        F(e, l, o), i = !0;
      },
      p(l, o) {
        const s = {};
        !n && o[0] & /*loadingDone*/
        1 && (n = !0, s.closed = /*loadingDone*/
        l[0], et(() => n = !1)), e.$set(s);
      },
      i(l) {
        i || (C(e.$$.fragment, l), i = !0);
      },
      o(l) {
        I(e.$$.fragment, l), i = !1;
      },
      d(l) {
        N(e, l);
      }
    }
  );
}
function Fm(t) {
  let e, n;
  return e = new Wh({
    props: {
      "table$aria-label": (
        /*label*/
        t[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Um],
        default: [Pm]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
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
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Nm(t, e, n) {
  let i, r, a, { loadingDone: l = !0 } = e, { label: o = Uh() } = e, { columnDefs: s = [] } = e, { rowData: u = [] } = e, { store: f } = e, { rowActions: c = [] } = e, { searchInputLabel: d = "Search" } = e, p = { name: "", color: "", number: "" }, g = it([]);
  nt(t, g, (w) => n(8, a = w));
  let b = it(null);
  nt(t, b, (w) => n(6, i = w));
  let m = it(null);
  nt(t, m, (w) => n(7, r = w)), f.store.subscribe((w) => {
    n(14, u = [...w]), y();
  });
  function y() {
    let w = u.filter((H) => s.every((X) => {
      const ie = p[X.field], fe = H[X.field];
      return ie ? X.filterType === "number" ? fe == ie : fe.toString().toLowerCase().includes(ie.toLowerCase()) : !0;
    }));
    w = v(w), g.set(w);
  }
  function v(w) {
    let H, X;
    return b.subscribe((ie) => H = ie), m.subscribe((ie) => X = ie), !H || !X ? w : w.sort((ie, fe) => {
      let J = ie[H], k = fe[H];
      return J == null && (J = ""), k == null && (k = ""), X === "asc" ? J.toString().localeCompare(k.toString()) : k.toString().localeCompare(J.toString());
    });
  }
  function O(w) {
    b.update((H) => {
      if (H === w)
        m.update((X) => X === "asc" ? "desc" : X === "desc" ? null : "asc");
      else
        return m.set("asc"), w;
      return w;
    }), y();
  }
  g.set(u);
  function A(w) {
    l = w, n(0, l);
  }
  function D(w) {
    p[w.field] = this.value, n(5, p);
  }
  const M = () => y();
  function h(w) {
    p[w.field] = Pa(this.value), n(5, p);
  }
  const R = () => y(), V = (w) => w.sortable && O(w.field), E = (w, H) => w.callback(H), _ = (w, H) => w.callback(H);
  return t.$$set = (w) => {
    "loadingDone" in w && n(0, l = w.loadingDone), "label" in w && n(1, o = w.label), "columnDefs" in w && n(2, s = w.columnDefs), "rowData" in w && n(14, u = w.rowData), "store" in w && n(15, f = w.store), "rowActions" in w && n(3, c = w.rowActions), "searchInputLabel" in w && n(4, d = w.searchInputLabel);
  }, [
    l,
    o,
    s,
    c,
    d,
    p,
    i,
    r,
    a,
    g,
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
    V,
    E,
    _
  ];
}
class jm extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Nm,
      Fm,
      se,
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
function Gm(t) {
  let e, n, i, r, a, l;
  const o = (
    /*#slots*/
    t[9].default
  ), s = re(
    o,
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
    f = q(f, u[c]);
  return {
    c() {
      e = K("div"), s && s.c(), ne(e, f);
    },
    m(c, d) {
      P(c, e, d), s && s.m(e, null), t[10](e), r = !0, a || (l = [
        te(i = De.call(
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
      256) && le(
        s,
        o,
        c,
        /*$$scope*/
        c[8],
        r ? ae(
          o,
          /*$$scope*/
          c[8],
          d,
          null
        ) : oe(
          /*$$scope*/
          c[8]
        ),
        null
      ), ne(e, f = ce(u, [
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      r || (C(s, c), r = !0);
    },
    o(c) {
      I(s, c), r = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), t[10](null), a = !1, Se(l);
    }
  };
}
function Vm(t, e, n) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = ue(e, i), { $$slots: a = {}, $$scope: l } = e;
  const o = Ge(Te());
  let { use: s = [] } = e, { class: u = "" } = e, { variant: f = "raised" } = e, { padded: c = !1 } = e, d;
  function p() {
    return d;
  }
  function g(b) {
    ee[b ? "unshift" : "push"](() => {
      d = b, n(4, d);
    });
  }
  return t.$$set = (b) => {
    e = q(q({}, e), Fe(b)), n(6, r = ue(e, i)), "use" in b && n(0, s = b.use), "class" in b && n(1, u = b.class), "variant" in b && n(2, f = b.variant), "padded" in b && n(3, c = b.padded), "$$scope" in b && n(8, l = b.$$scope);
  }, [
    s,
    u,
    f,
    c,
    d,
    o,
    r,
    p,
    l,
    a,
    g
  ];
}
class qm extends he {
  constructor(e) {
    super(), de(this, e, Vm, Gm, se, {
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
var si = Il(function(t) {
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
var ki = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, i, r, a;
    if (!this.closed) {
      this.closed = !0;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var o = Ye(l), s = o.next(); !s.done; s = o.next()) {
              var u = s.value;
              u.remove(this);
            }
          } catch (b) {
            e = { error: b };
          } finally {
            try {
              s && !s.done && (n = o.return) && n.call(o);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          l.remove(this);
      var f = this.initialTeardown;
      if (je(f))
        try {
          f();
        } catch (b) {
          a = b instanceof si ? b.errors : [b];
        }
      var c = this._finalizers;
      if (c) {
        this._finalizers = null;
        try {
          for (var d = Ye(c), p = d.next(); !p.done; p = d.next()) {
            var g = p.value;
            try {
              Aa(g);
            } catch (b) {
              a = a ?? [], b instanceof si ? a = Qt(Qt([], pi(a)), pi(b.errors)) : a.push(b);
            }
          }
        } catch (b) {
          i = { error: b };
        } finally {
          try {
            p && !p.done && (r = d.return) && r.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (a)
        throw new si(a);
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
ki.EMPTY;
function Ll(t) {
  return t instanceof ki || t && "closed" in t && je(t.remove) && je(t.add) && je(t.unsubscribe);
}
function Aa(t) {
  je(t) ? t() : t.unsubscribe();
}
var zm = {
  Promise: void 0
}, Xm = {
  setTimeout: function(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Qt([t, e], pi(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Ol(t) {
  Xm.setTimeout(function() {
    throw t;
  });
}
function Sa() {
}
function Wm(t) {
  t();
}
var Di = function(t) {
  Ze(e, t);
  function e(n) {
    var i = t.call(this) || this;
    return i.isStopped = !1, n ? (i.destination = n, Ll(n) && n.add(i)) : i.destination = Qm, i;
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
}(ki), Zm = function() {
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
    var a = t.call(this) || this, l;
    return je(n) || !n ? l = {
      next: n ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : l = n, a.destination = new Zm(l), a;
  }
  return e;
}(Di);
function Rn(t) {
  Ol(t);
}
function Km(t) {
  throw t;
}
var Qm = {
  closed: !0,
  next: Sa,
  error: Km,
  complete: Sa
}, Mi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function wl(t) {
  return t;
}
function Ym(t) {
  return t.length === 0 ? wl : t.length === 1 ? t[0] : function(n) {
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
    var r = this, a = xm(e) ? e : new Ci(e, n, i);
    return Wm(function() {
      var l = r, o = l.operator, s = l.source;
      a.add(o ? o.call(a, s) : s ? r._subscribe(a) : r._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var i = this;
    return n = Ca(n), new n(function(r, a) {
      var l = new Ci({
        next: function(o) {
          try {
            e(o);
          } catch (s) {
            a(s), l.unsubscribe();
          }
        },
        error: a,
        complete: r
      });
      i.subscribe(l);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Mi] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Ym(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Ca(e), new e(function(i, r) {
      var a;
      n.subscribe(function(l) {
        return a = l;
      }, function(l) {
        return r(l);
      }, function() {
        return i(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Ca(t) {
  var e;
  return (e = t ?? zm.Promise) !== null && e !== void 0 ? e : Promise;
}
function Jm(t) {
  return t && je(t.next) && je(t.error) && je(t.complete);
}
function xm(t) {
  return t && t instanceof Di || Jm(t) && Ll(t);
}
function $m(t) {
  return je(t == null ? void 0 : t.lift);
}
function Vt(t) {
  return function(e) {
    if ($m(e))
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
  return new ep(t, e, n, i, r);
}
var ep = function(t) {
  Ze(e, t);
  function e(n, i, r, a, l, o) {
    var s = t.call(this, n) || this;
    return s.onFinalize = l, s.shouldUnsubscribe = o, s._next = i ? function(u) {
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
}(Di), tp = new ct(function(t) {
  return t.complete();
});
function np(t) {
  return t && je(t.schedule);
}
function ip(t) {
  return t[t.length - 1];
}
function rp(t) {
  return np(ip(t)) ? t.pop() : void 0;
}
var Tl = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Rl(t) {
  return je(t == null ? void 0 : t.then);
}
function Hl(t) {
  return je(t[Mi]);
}
function kl(t) {
  return Symbol.asyncIterator && je(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Dl(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ap() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ml = ap();
function Bl(t) {
  return je(t == null ? void 0 : t[Ml]);
}
function Pl(t) {
  return Ps(this, arguments, function() {
    var n, i, r, a;
    return Li(this, function(l) {
      switch (l.label) {
        case 0:
          n = t.getReader(), l.label = 1;
        case 1:
          l.trys.push([1, , 9, 10]), l.label = 2;
        case 2:
          return [4, Yt(n.read())];
        case 3:
          return i = l.sent(), r = i.value, a = i.done, a ? [4, Yt(void 0)] : [3, 5];
        case 4:
          return [2, l.sent()];
        case 5:
          return [4, Yt(r)];
        case 6:
          return [4, l.sent()];
        case 7:
          return l.sent(), [3, 2];
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
      return lp(t);
    if (Tl(t))
      return op(t);
    if (Rl(t))
      return sp(t);
    if (kl(t))
      return Fl(t);
    if (Bl(t))
      return up(t);
    if (Ul(t))
      return fp(t);
  }
  throw Dl(t);
}
function lp(t) {
  return new ct(function(e) {
    var n = t[Mi]();
    if (je(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function op(t) {
  return new ct(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function sp(t) {
  return new ct(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Ol);
  });
}
function up(t) {
  return new ct(function(e) {
    var n, i;
    try {
      for (var r = Ye(t), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if (e.next(l), e.closed)
          return;
      }
    } catch (o) {
      n = { error: o };
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
    cp(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function fp(t) {
  return Fl(Pl(t));
}
function cp(t, e) {
  var n, i, r, a;
  return Xa(this, void 0, void 0, function() {
    var l, o;
    return Li(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), n = Us(t), s.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (i = s.sent(), !!i.done)
            return [3, 4];
          if (l = i.value, e.next(l), e.closed)
            return [2];
          s.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return o = s.sent(), r = { error: o }, [3, 11];
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
function jl(t, e) {
  return e === void 0 && (e = 0), Vt(function(n, i) {
    i.add(t.schedule(function() {
      return n.subscribe(i);
    }, e));
  });
}
function dp(t, e) {
  return An(t).pipe(jl(e), Nl(e));
}
function hp(t, e) {
  return An(t).pipe(jl(e), Nl(e));
}
function mp(t, e) {
  return new ct(function(n) {
    var i = 0;
    return e.schedule(function() {
      i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
    });
  });
}
function pp(t, e) {
  return new ct(function(n) {
    var i;
    return Ft(n, e, function() {
      i = t[Ml](), Ft(n, e, function() {
        var r, a, l;
        try {
          r = i.next(), a = r.value, l = r.done;
        } catch (o) {
          n.error(o);
          return;
        }
        l ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return je(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function Gl(t, e) {
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
function gp(t, e) {
  return Gl(Pl(t), e);
}
function bp(t, e) {
  if (t != null) {
    if (Hl(t))
      return dp(t, e);
    if (Tl(t))
      return mp(t, e);
    if (Rl(t))
      return hp(t, e);
    if (kl(t))
      return Gl(t, e);
    if (Bl(t))
      return pp(t, e);
    if (Ul(t))
      return gp(t, e);
  }
  throw Dl(t);
}
function _p(t, e) {
  return e ? bp(t, e) : An(t);
}
function vp() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = rp(t);
  return _p(t, n);
}
function mt(t, e) {
  return Vt(function(n, i) {
    var r = 0;
    n.subscribe(rn(i, function(a) {
      i.next(t.call(e, a, r++));
    }));
  });
}
function yp(t, e, n, i, r, a, l, o) {
  var s = [], u = 0, f = 0, c = !1, d = function() {
    c && !s.length && !u && e.complete();
  }, p = function(b) {
    return u < i ? g(b) : s.push(b);
  }, g = function(b) {
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
            var v = s.shift();
            l || g(v);
          }; s.length && u < i; )
            y();
          d();
        } catch (v) {
          e.error(v);
        }
    }));
  };
  return t.subscribe(rn(e, p, function() {
    c = !0, d();
  })), function() {
  };
}
function Ei(t, e, n) {
  return n === void 0 && (n = 1 / 0), je(e) ? Ei(function(i, r) {
    return mt(function(a, l) {
      return e(i, a, r, l);
    })(An(t(i, r)));
  }, n) : (typeof e == "number" && (n = e), Vt(function(i, r) {
    return yp(i, r, t, n);
  }));
}
function Ap(t, e) {
  return je(e) ? Ei(t, e, 1) : Ei(t, 1);
}
function Ea(t) {
  return t <= 0 ? function() {
    return tp;
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
    var l;
    (l = i.subscribe) === null || l === void 0 || l.call(i);
    var o = !0;
    r.subscribe(rn(a, function(s) {
      var u;
      (u = i.next) === null || u === void 0 || u.call(i, s), a.next(s);
    }, function() {
      var s;
      o = !1, (s = i.complete) === null || s === void 0 || s.call(i), a.complete();
    }, function(s) {
      var u;
      o = !1, (u = i.error) === null || u === void 0 || u.call(i, s), a.error(s);
    }, function() {
      var s, u;
      o && ((s = i.unsubscribe) === null || s === void 0 || s.call(i)), (u = i.finalize) === null || u === void 0 || u.call(i);
    }));
  }) : wl;
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
var Sp = /* @__PURE__ */ function() {
  function t(e, n, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = n, this.request = i, this.type = r;
    var a = n.status, l = n.responseType;
    this.status = a ?? 0, this.responseType = l ?? "";
    var o = n.getAllResponseHeaders();
    this.responseHeaders = o ? o.split(`
`).reduce(function(f, c) {
      var d = c.indexOf(": ");
      return f[c.slice(0, d)] = c.slice(d + 2), f;
    }, {}) : {}, this.response = Vl(n);
    var s = e.loaded, u = e.total;
    this.loaded = s, this.total = u;
  }
  return t;
}(), Gn = Il(function(t) {
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
}), Cp = function() {
  function t(e, n) {
    return Gn.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Gn.prototype), t;
}();
function Ep(t, e) {
  return qt({ method: "GET", url: t, headers: e });
}
function Ip(t, e, n) {
  return qt({ method: "POST", url: t, body: e, headers: n });
}
function Lp(t, e) {
  return qt({ method: "DELETE", url: t, headers: e });
}
function Op(t, e, n) {
  return qt({ method: "PUT", url: t, body: e, headers: n });
}
function wp(t, e, n) {
  return qt({ method: "PATCH", url: t, body: e, headers: n });
}
var Tp = mt(function(t) {
  return t.response;
});
function Rp(t, e) {
  return Tp(qt({
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
    return kp(n);
  };
  return t.get = Ep, t.post = Ip, t.delete = Lp, t.put = Op, t.patch = wp, t.getJSON = Rp, t;
}(), Hp = "upload", Oa = "download", ui = "loadstart", fi = "progress", wa = "load";
function kp(t) {
  return new ct(function(e) {
    var n, i, r = x({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = r.queryParams, l = r.body, o = r.headers, s = r.url;
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
    if (o)
      for (var d in o)
        o.hasOwnProperty(d) && (c[d.toLowerCase()] = o[d]);
    var p = r.crossDomain;
    !p && !("x-requested-with" in c) && (c["x-requested-with"] = "XMLHttpRequest");
    var g = r.withCredentials, b = r.xsrfCookieName, m = r.xsrfHeaderName;
    if ((g || !p) && b && m) {
      var y = (i = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + b + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && i !== void 0 ? i : "";
      y && (c[m] = y);
    }
    var v = Dp(l, c), O = x(x({}, r), {
      url: s,
      headers: c,
      body: v
    }), A;
    A = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var D = t.progressSubscriber, M = t.includeDownloadProgress, h = M === void 0 ? !1 : M, R = t.includeUploadProgress, V = R === void 0 ? !1 : R, E = function(J, k) {
        A.addEventListener(J, function() {
          var S, z = k();
          (S = D == null ? void 0 : D.error) === null || S === void 0 || S.call(D, z), e.error(z);
        });
      };
      E("timeout", function() {
        return new Cp(A, O);
      }), E("abort", function() {
        return new Gn("aborted", A, O);
      });
      var _ = function(J, k) {
        return new Sp(k, A, O, J + "_" + k.type);
      }, w = function(J, k, S) {
        J.addEventListener(k, function(z) {
          e.next(_(S, z));
        });
      };
      V && [ui, fi, wa].forEach(function(J) {
        return w(A.upload, J, Hp);
      }), D && [ui, fi].forEach(function(J) {
        return A.upload.addEventListener(J, function(k) {
          var S;
          return (S = D == null ? void 0 : D.next) === null || S === void 0 ? void 0 : S.call(D, k);
        });
      }), h && [ui, fi].forEach(function(J) {
        return w(A, J, Oa);
      });
      var H = function(J) {
        var k = "ajax error" + (J ? " " + J : "");
        e.error(new Gn(k, A, O));
      };
      A.addEventListener("error", function(J) {
        var k;
        (k = D == null ? void 0 : D.error) === null || k === void 0 || k.call(D, J), H();
      }), A.addEventListener(wa, function(J) {
        var k, S, z = A.status;
        if (z < 400) {
          (k = D == null ? void 0 : D.complete) === null || k === void 0 || k.call(D);
          var ge = void 0;
          try {
            ge = _(Oa, J);
          } catch (Oe) {
            e.error(Oe);
            return;
          }
          e.next(ge), e.complete();
        } else
          (S = D == null ? void 0 : D.error) === null || S === void 0 || S.call(D, J), H(z);
      });
    }
    var X = O.user, ie = O.method, fe = O.async;
    X ? A.open(ie, s, fe, X, O.password) : A.open(ie, s, fe), fe && (A.timeout = O.timeout, A.responseType = O.responseType), "withCredentials" in A && (A.withCredentials = O.withCredentials);
    for (var d in c)
      c.hasOwnProperty(d) && A.setRequestHeader(d, c[d]);
    return v ? A.send(v) : A.send(), function() {
      A && A.readyState !== 4 && A.abort();
    };
  });
}
function Dp(t, e) {
  var n;
  if (!t || typeof t == "string" || Np(t) || jp(t) || Bp(t) || Pp(t) || Up(t) || Gp(t))
    return t;
  if (Fp(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Mp = Object.prototype.toString;
function Bi(t, e) {
  return Mp.call(t) === "[object " + e + "]";
}
function Bp(t) {
  return Bi(t, "ArrayBuffer");
}
function Pp(t) {
  return Bi(t, "File");
}
function Up(t) {
  return Bi(t, "Blob");
}
function Fp(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Np(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function jp(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Gp(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class Vp {
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
const qp = new Vp("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), zp = [qp], Xp = zp[0].getUrl();
class ql {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Xp;
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
class Wp {
  constructor(e = new ql()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(n), i;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((i) => ({ pre: i }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: n, query: i, method: r, headers: a, body: l, responseType: o }) => ({
      url: `${this.configuration.basePath}${n}${i && Object.keys(i).length ? `?${Zp(i)}` : ""}`,
      method: r,
      headers: a,
      body: l instanceof FormData ? l : JSON.stringify(l),
      responseType: o ?? "json"
    }), this.rxjsRequest = (n) => vp(n).pipe(
      mt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      Ap(
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
const ft = (t) => encodeURIComponent(`${t}`), Zp = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((i) => `${ft(e)}=${ft(i)}`).join("&") : `${ft(e)}=${ft(n)}`
).join("&"), yt = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Kp extends Wp {
  assignResourceToLocation({ locationId: e, uuid: n }, i) {
    yt(e, "locationId", "assignResourceToLocation"), yt(n, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", ft(e)).replace("{uuid}", ft(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, n) {
    yt(e, "location", "createLocation");
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
    yt(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", ft(e)),
      method: "DELETE",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    yt(e, "locationId", "getLocation");
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
    yt(e, "locationId", "unassignResourceFromLocation"), yt(n, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", ft(e)).replace("{uuid}", ft(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, i) {
    yt(e, "locationId", "updateLocation"), yt(n, "location", "updateLocation");
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
    return new Kp(n);
  }
}
var St;
class Qp {
  constructor() {
    Fi(this, St, it([]));
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
    return To(Mt(this, St)).find((n) => n.uuid === e);
  }
}
St = new WeakMap();
function Yp(t) {
  let e, n, i, r, a, l, o, s, u, f, c, d, p, g, b;
  return n = new Cl({
    props: { loadingDone: (
      /*loadingDone*/
      t[3]
    ) }
  }), r = new Yr({
    props: {
      open: (
        /*dialogState*/
        t[4] === /*DialogState*/
        t[2].Remove
      ),
      $$slots: {
        actions: [ig],
        title: [xp]
      },
      $$scope: { ctx: t }
    }
  }), l = new Yr({
    props: {
      open: (
        /*dialogState*/
        t[4] === /*DialogState*/
        t[2].Update || /*dialogState*/
        t[4] === /*DialogState*/
        t[2].Create
      ),
      $$slots: {
        actions: [cg],
        content: [lg],
        title: [rg]
      },
      $$scope: { ctx: t }
    }
  }), u = new Nt({
    props: {
      class: "button",
      callback: (
        /*create*/
        t[9]
      ),
      variant: "raised",
      $$slots: { default: [hg] },
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
      $$slots: { default: [pg] },
      $$scope: { ctx: t }
    }
  }), g = new qm({
    props: {
      style: "padding: 1rem; width: 100%; height: 100%;",
      $$slots: { default: [gg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), j(n.$$.fragment), i = Q(), j(r.$$.fragment), a = Q(), j(l.$$.fragment), o = Q(), s = K("div"), j(u.$$.fragment), f = Q(), j(c.$$.fragment), d = Q(), p = K("div"), j(g.$$.fragment), pn(s, "margin-top", "10px"), pn(s, "margin-bottom", "10px"), U(p, "class", "table-container"), U(e, "class", "location-manager-container");
    },
    m(m, y) {
      P(m, e, y), F(n, e, null), Z(e, i), F(r, e, null), Z(e, a), F(l, e, null), Z(e, o), Z(e, s), F(u, s, null), Z(s, f), F(c, s, null), Z(e, d), Z(e, p), F(g, p, null), b = !0;
    },
    p(m, y) {
      const v = {};
      y & /*loadingDone*/
      8 && (v.loadingDone = /*loadingDone*/
      m[3]), n.$set(v);
      const O = {};
      y & /*dialogState, DialogState*/
      20 && (O.open = /*dialogState*/
      m[4] === /*DialogState*/
      m[2].Remove), y & /*$$scope, $_, currentSelectLocation*/
      1048610 && (O.$$scope = { dirty: y, ctx: m }), r.$set(O);
      const A = {};
      y & /*dialogState, DialogState*/
      20 && (A.open = /*dialogState*/
      m[4] === /*DialogState*/
      m[2].Update || /*dialogState*/
      m[4] === /*DialogState*/
      m[2].Create), y & /*$$scope, $_, currentSelectLocation, dialogState, DialogState*/
      1048630 && (A.$$scope = { dirty: y, ctx: m }), l.$set(A);
      const D = {};
      y & /*$$scope, $_*/
      1048578 && (D.$$scope = { dirty: y, ctx: m }), u.$set(D);
      const M = {};
      y & /*$$scope, $_*/
      1048578 && (M.$$scope = { dirty: y, ctx: m }), c.$set(M);
      const h = {};
      y & /*$$scope, columnDefs, locationStore, loadingDone, $_*/
      1048715 && (h.$$scope = { dirty: y, ctx: m }), g.$set(h);
    },
    i(m) {
      b || (C(n.$$.fragment, m), C(r.$$.fragment, m), C(l.$$.fragment, m), C(u.$$.fragment, m), C(c.$$.fragment, m), C(g.$$.fragment, m), b = !0);
    },
    o(m) {
      I(n.$$.fragment, m), I(r.$$.fragment, m), I(l.$$.fragment, m), I(u.$$.fragment, m), I(c.$$.fragment, m), I(g.$$.fragment, m), b = !1;
    },
    d(m) {
      m && B(e), N(n), N(r), N(l), N(u), N(c), N(g);
    }
  };
}
function Jp(t) {
  let e, n;
  return e = new Cl({
    props: { loadingDone: !/*loading*/
    t[6] }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r & /*loading*/
      64 && (a.loadingDone = !/*loading*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function xp(t) {
  var r;
  let e, n = (
    /*$_*/
    t[1]("delete_location", {
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
      e = K("h3"), i = Me(n), U(e, "slot", "title");
    },
    m(a, l) {
      P(a, e, l), Z(e, i);
    },
    p(a, l) {
      var o;
      l & /*$_, currentSelectLocation*/
      34 && n !== (n = /*$_*/
      a[1]("delete_location", {
        values: {
          name: (
            /*currentSelectLocation*/
            (o = a[5]) == null ? void 0 : o.name
          )
        }
      }) + "") && Ne(i, n);
    },
    d(a) {
      a && B(e);
    }
  };
}
function $p(t) {
  let e = (
    /*$_*/
    t[1]("confirm") + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      2 && e !== (e = /*$_*/
      i[1]("confirm") + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function eg(t) {
  let e, n, i, r;
  return e = new Sl({}), i = new Gt({
    props: {
      $$slots: { default: [$p] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, $_*/
      1048578 && (o.$$scope = { dirty: l, ctx: a }), i.$set(o);
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(e, a), N(i, a);
    }
  };
}
function tg(t) {
  let e = (
    /*$_*/
    t[1]("cancel") + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      2 && e !== (e = /*$_*/
      i[1]("cancel") + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function ng(t) {
  let e, n, i, r;
  return e = new Ri({}), i = new Gt({
    props: {
      $$slots: { default: [tg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, $_*/
      1048578 && (o.$$scope = { dirty: l, ctx: a }), i.$set(o);
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(e, a), N(i, a);
    }
  };
}
function ig(t) {
  let e, n, i, r, a;
  return n = new Nt({
    props: {
      callback: (
        /*onRemoveConfirm*/
        t[11]
      ),
      variant: "raised",
      $$slots: { default: [eg] },
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
      $$slots: { default: [ng] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), j(n.$$.fragment), i = Q(), j(r.$$.fragment), U(e, "slot", "actions");
    },
    m(l, o) {
      P(l, e, o), F(n, e, null), Z(e, i), F(r, e, null), a = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope, $_*/
      1048578 && (s.$$scope = { dirty: o, ctx: l }), n.$set(s);
      const u = {};
      o & /*$$scope, $_*/
      1048578 && (u.$$scope = { dirty: o, ctx: l }), r.$set(u);
    },
    i(l) {
      a || (C(n.$$.fragment, l), C(r.$$.fragment, l), a = !0);
    },
    o(l) {
      I(n.$$.fragment, l), I(r.$$.fragment, l), a = !1;
    },
    d(l) {
      l && B(e), N(n), N(r);
    }
  };
}
function rg(t) {
  var r;
  let e, n = (
    /*dialogState*/
    (t[4] === /*DialogState*/
    t[2].Update ? (
      /*$_*/
      t[1]("location", {
        values: {
          name: (
            /*currentSelectLocation*/
            (r = t[5]) == null ? void 0 : r.name
          )
        }
      })
    ) : (
      /*$_*/
      t[1]("new_location")
    )) + ""
  ), i;
  return {
    c() {
      e = K("h3"), i = Me(n), U(e, "slot", "title");
    },
    m(a, l) {
      P(a, e, l), Z(e, i);
    },
    p(a, l) {
      var o;
      l & /*dialogState, DialogState, $_, currentSelectLocation*/
      54 && n !== (n = /*dialogState*/
      (a[4] === /*DialogState*/
      a[2].Update ? (
        /*$_*/
        a[1]("location", {
          values: {
            name: (
              /*currentSelectLocation*/
              (o = a[5]) == null ? void 0 : o.name
            )
          }
        })
      ) : (
        /*$_*/
        a[1]("new_location")
      )) + "") && Ne(i, n);
    },
    d(a) {
      a && B(e);
    }
  };
}
function Ta(t) {
  let e, n, i, r, a, l, o, s, u, f, c = (
    /*dialogState*/
    t[4] === /*DialogState*/
    t[2].Update && Ra(t)
  );
  function d(v) {
    t[14](v);
  }
  let p = { label: (
    /*$_*/
    t[1]("name")
  ) };
  /*currentSelectLocation*/
  t[5].name !== void 0 && (p.value = /*currentSelectLocation*/
  t[5].name), n = new ai({ props: p }), ee.push(() => tt(n, "value", d));
  function g(v) {
    t[15](v);
  }
  let b = { label: (
    /*$_*/
    t[1]("key")
  ) };
  /*currentSelectLocation*/
  t[5].key !== void 0 && (b.value = /*currentSelectLocation*/
  t[5].key), a = new ai({ props: b }), ee.push(() => tt(a, "value", g));
  function m(v) {
    t[16](v);
  }
  let y = { label: (
    /*$_*/
    t[1]("description")
  ) };
  return (
    /*currentSelectLocation*/
    t[5].description !== void 0 && (y.value = /*currentSelectLocation*/
    t[5].description), s = new ai({ props: y }), ee.push(() => tt(s, "value", m)), {
      c() {
        c && c.c(), e = Q(), j(n.$$.fragment), r = Q(), j(a.$$.fragment), o = Q(), j(s.$$.fragment);
      },
      m(v, O) {
        c && c.m(v, O), P(v, e, O), F(n, v, O), P(v, r, O), F(a, v, O), P(v, o, O), F(s, v, O), f = !0;
      },
      p(v, O) {
        /*dialogState*/
        v[4] === /*DialogState*/
        v[2].Update ? c ? (c.p(v, O), O & /*dialogState, DialogState*/
        20 && C(c, 1)) : (c = Ra(v), c.c(), C(c, 1), c.m(e.parentNode, e)) : c && (ve(), I(c, 1, 1, () => {
          c = null;
        }), ye());
        const A = {};
        O & /*$_*/
        2 && (A.label = /*$_*/
        v[1]("name")), !i && O & /*currentSelectLocation*/
        32 && (i = !0, A.value = /*currentSelectLocation*/
        v[5].name, et(() => i = !1)), n.$set(A);
        const D = {};
        O & /*$_*/
        2 && (D.label = /*$_*/
        v[1]("key")), !l && O & /*currentSelectLocation*/
        32 && (l = !0, D.value = /*currentSelectLocation*/
        v[5].key, et(() => l = !1)), a.$set(D);
        const M = {};
        O & /*$_*/
        2 && (M.label = /*$_*/
        v[1]("description")), !u && O & /*currentSelectLocation*/
        32 && (u = !0, M.value = /*currentSelectLocation*/
        v[5].description, et(() => u = !1)), s.$set(M);
      },
      i(v) {
        f || (C(c), C(n.$$.fragment, v), C(a.$$.fragment, v), C(s.$$.fragment, v), f = !0);
      },
      o(v) {
        I(c), I(n.$$.fragment, v), I(a.$$.fragment, v), I(s.$$.fragment, v), f = !1;
      },
      d(v) {
        v && (B(e), B(r), B(o)), c && c.d(v), N(n, v), N(a, v), N(s, v);
      }
    }
  );
}
function Ra(t) {
  let e, n;
  return e = new Gt({
    props: {
      $$slots: { default: [ag] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    p(i, r) {
      const a = {};
      r & /*$$scope, currentSelectLocation*/
      1048608 && (a.$$scope = { dirty: r, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function ag(t) {
  let e = (
    /*currentSelectLocation*/
    t[5].uuid + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*currentSelectLocation*/
      32 && e !== (e = /*currentSelectLocation*/
      i[5].uuid + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function lg(t) {
  let e, n, i = (
    /*currentSelectLocation*/
    t[5] && Ta(t)
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
      32 && C(i, 1)) : (i = Ta(r), i.c(), C(i, 1), i.m(e, null)) : i && (ve(), I(i, 1, 1, () => {
        i = null;
      }), ye());
    },
    i(r) {
      n || (C(i), n = !0);
    },
    o(r) {
      I(i), n = !1;
    },
    d(r) {
      r && B(e), i && i.d();
    }
  };
}
function og(t) {
  let e = (
    /*$_*/
    t[1]("save") + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      2 && e !== (e = /*$_*/
      i[1]("save") + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function sg(t) {
  let e, n, i, r;
  return e = new Sl({}), i = new Gt({
    props: {
      $$slots: { default: [og] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, $_*/
      1048578 && (o.$$scope = { dirty: l, ctx: a }), i.$set(o);
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(e, a), N(i, a);
    }
  };
}
function ug(t) {
  let e = (
    /*$_*/
    t[1]("cancel") + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      2 && e !== (e = /*$_*/
      i[1]("cancel") + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function fg(t) {
  let e, n, i, r;
  return e = new Ri({}), i = new Gt({
    props: {
      $$slots: { default: [ug] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, $_*/
      1048578 && (o.$$scope = { dirty: l, ctx: a }), i.$set(o);
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(e, a), N(i, a);
    }
  };
}
function cg(t) {
  let e, n, i, r, a;
  return n = new Nt({
    props: {
      callback: (
        /*onUpdateOrCreateSave*/
        t[10]
      ),
      variant: "raised",
      $$slots: { default: [sg] },
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
      $$slots: { default: [fg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = K("div"), j(n.$$.fragment), i = Q(), j(r.$$.fragment), U(e, "slot", "actions");
    },
    m(l, o) {
      P(l, e, o), F(n, e, null), Z(e, i), F(r, e, null), a = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope, $_*/
      1048578 && (s.$$scope = { dirty: o, ctx: l }), n.$set(s);
      const u = {};
      o & /*$$scope, $_*/
      1048578 && (u.$$scope = { dirty: o, ctx: l }), r.$set(u);
    },
    i(l) {
      a || (C(n.$$.fragment, l), C(r.$$.fragment, l), a = !0);
    },
    o(l) {
      I(n.$$.fragment, l), I(r.$$.fragment, l), a = !1;
    },
    d(l) {
      l && B(e), N(n), N(r);
    }
  };
}
function dg(t) {
  let e = (
    /*$_*/
    t[1]("add_location") + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      2 && e !== (e = /*$_*/
      i[1]("add_location") + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function hg(t) {
  let e, n, i, r;
  return e = new yl({}), i = new Gt({
    props: {
      $$slots: { default: [dg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, $_*/
      1048578 && (o.$$scope = { dirty: l, ctx: a }), i.$set(o);
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(e, a), N(i, a);
    }
  };
}
function mg(t) {
  let e = (
    /*$_*/
    t[1]("refresh") + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(i, r) {
      P(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      2 && e !== (e = /*$_*/
      i[1]("refresh") + "") && Ne(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function pg(t) {
  let e, n, i, r;
  return e = new Al({}), i = new Gt({
    props: {
      $$slots: { default: [mg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = Q(), j(i.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), P(a, n, l), F(i, a, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, $_*/
      1048578 && (o.$$scope = { dirty: l, ctx: a }), i.$set(o);
    },
    i(a) {
      r || (C(e.$$.fragment, a), C(i.$$.fragment, a), r = !0);
    },
    o(a) {
      I(e.$$.fragment, a), I(i.$$.fragment, a), r = !1;
    },
    d(a) {
      a && B(n), N(e, a), N(i, a);
    }
  };
}
function gg(t) {
  let e, n = (
    /*$_*/
    t[1]("location_table") + ""
  ), i, r, a, l;
  return a = new jm({
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
        t[3]
      ),
      rowActions: (
        /*rowActions*/
        t[8]
      ),
      searchInputLabel: (
        /*$_*/
        t[1]("search")
      )
    }
  }), {
    c() {
      e = K("h3"), i = Me(n), r = Q(), j(a.$$.fragment), pn(e, "margin-bottom", "1rem");
    },
    m(o, s) {
      P(o, e, s), Z(e, i), P(o, r, s), F(a, o, s), l = !0;
    },
    p(o, s) {
      (!l || s & /*$_*/
      2) && n !== (n = /*$_*/
      o[1]("location_table") + "") && Ne(i, n);
      const u = {};
      s & /*columnDefs*/
      128 && (u.columnDefs = /*columnDefs*/
      o[7]), s & /*locationStore*/
      1 && (u.store = /*locationStore*/
      o[0]), s & /*loadingDone*/
      8 && (u.loadingDone = /*loadingDone*/
      o[3]), s & /*$_*/
      2 && (u.searchInputLabel = /*$_*/
      o[1]("search")), a.$set(u);
    },
    i(o) {
      l || (C(a.$$.fragment, o), l = !0);
    },
    o(o) {
      I(a.$$.fragment, o), l = !1;
    },
    d(o) {
      o && (B(e), B(r)), N(a, o);
    }
  };
}
function bg(t) {
  let e, n, i, r;
  const a = [Jp, Yp], l = [];
  function o(s, u) {
    return (
      /*loading*/
      s[6] ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = a[e](t), {
    c() {
      n.c(), i = Le();
    },
    m(s, u) {
      l[e].m(s, u), P(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = o(s), e === f ? l[e].p(s, u) : (ve(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ye(), n = l[e], n ? n.p(s, u) : (n = l[e] = a[e](s), n.c()), C(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      I(n), r = !1;
    },
    d(s) {
      s && B(i), l[e].d(s);
    }
  };
}
hf({ en: ts, de: bs });
function _g(t, e, n) {
  let i, r;
  nt(t, df, (h) => n(1, r = h));
  const a = Zt.getInstance();
  let { locationStore: l = new Qp() } = e;
  var o;
  (function(h) {
    h.Closed = "closed", h.Update = "update", h.Create = "create", h.Remove = "remove";
  })(o || (o = {}));
  let s = !1, u = o.Closed, f = null, c = !0;
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
      callback: (h) => p(h),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (h) => b(h),
      disabled: () => !1
    }
  ];
  function p(h) {
    n(5, f = h), n(4, u = o.Update);
  }
  function g() {
    n(5, f = new Jt("", "")), n(4, u = o.Create);
  }
  function b(h) {
    n(5, f = h), n(4, u = o.Remove);
  }
  function m() {
    try {
      const h = (f == null ? void 0 : f.uuid) !== void 0;
      (h ? a.updateLocation({
        locationId: f.uuid,
        location: f
      }) : a.createLocation(f)).pipe(
        Ea(1),
        La((V) => {
          h ? l.update(V) : l.add(V);
        }),
        Ia(v)
      ).subscribe();
    } catch (h) {
      console.error("Error saving location", h);
    }
  }
  function y() {
    a.deleteLocation(f.uuid).subscribe({
      next: () => {
        l.remove(f.uuid), v();
      }
    });
  }
  function v() {
    n(4, u = o.Closed), n(5, f = null);
  }
  function O() {
    n(3, s = !1), a.getLocations().pipe(
      Ea(1),
      La((h) => {
        l.set(h);
      }),
      Ia(() => {
        n(3, s = !0);
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
    "locationStore" in h && n(0, l = h.locationStore);
  }, t.$$.update = () => {
    t.$$.dirty & /*$_*/
    2 && n(7, i = [
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
    l,
    r,
    o,
    s,
    u,
    f,
    c,
    i,
    d,
    g,
    m,
    y,
    v,
    O,
    A,
    D,
    M
  ];
}
class vg extends he {
  constructor(e) {
    super(), de(this, e, _g, bg, se, { locationStore: 0 });
  }
}
function Ha(t) {
  let e, n;
  return e = new vg({}), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      F(e, i, r), n = !0;
    },
    i(i) {
      n || (C(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function yg(t) {
  let e, n, i, r, a, l = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && Ha()
  );
  return {
    c() {
      l && l.c(), e = Q(), n = K("input"), i = Q(), r = K("input"), U(n, "type", "hidden"), U(n, "name", "package-name"), n.value = Va, U(r, "type", "hidden"), U(r, "name", "package-version"), r.value = qa;
    },
    m(o, s) {
      l && l.m(o, s), P(o, e, s), P(o, n, s), P(o, i, s), P(o, r, s), a = !0;
    },
    p(o, [s]) {
      /*doc*/
      o[0] || /*dev*/
      o[1] ? l ? s & /*doc, dev*/
      3 && C(l, 1) : (l = Ha(), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (ve(), I(l, 1, 1, () => {
        l = null;
      }), ye());
    },
    i(o) {
      a || (C(l), a = !0);
    },
    o(o) {
      I(l), a = !1;
    },
    d(o) {
      o && (B(e), B(n), B(i), B(r)), l && l.d(o);
    }
  };
}
function Ag(t, e, n) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return t.$$set = (a) => {
    "doc" in a && n(0, i = a.doc), "dev" in a && n(1, r = a.dev);
  }, [i, r];
}
class Sg extends he {
  constructor(e) {
    super(), de(this, e, Ag, yg, se, { doc: 0, dev: 1 });
  }
}
class Lg extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new Sg({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = Cg();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function Cg() {
  const t = `${Va}-v${qa}-style`, e = Eg(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function Eg() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  Lg as default
};
