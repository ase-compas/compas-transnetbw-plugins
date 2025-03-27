var au = Object.defineProperty;
var ou = (t, e, n) => e in t ? au(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var hr = (t, e, n) => (ou(t, typeof e != "symbol" ? e + "" : e, n), n), uu = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var An = (t, e, n) => (uu(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ps = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
};
function Qe() {
}
function X(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Ba(t) {
  return t();
}
function gs() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(t) {
  t.forEach(Ba);
}
function ge(t) {
  return typeof t == "function";
}
function ve(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function cu(t) {
  return Object.keys(t).length === 0;
}
function Xr(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return Qe;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function fu(t) {
  let e;
  return Xr(t, (n) => e = n)(), e;
}
function st(t, e, n) {
  t.$$.on_destroy.push(Xr(e, n));
}
function Le(t, e, n, i) {
  if (t) {
    const r = Va(t, e, n, i);
    return t[0](r);
  }
}
function Va(t, e, n, i) {
  return t[1] && i ? X(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Oe(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], a = Math.max(e.dirty.length, r.length);
      for (let l = 0; l < a; l += 1)
        s[l] = e.dirty[l] | r[l];
      return s;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Re(t, e, n, i, r, s) {
  if (r) {
    const a = Va(e, n, i, s);
    t.p(a, r);
  }
}
function Me(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function it(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function pe(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t)
    !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Yr(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function jt(t, e, n) {
  return t.set(n), e;
}
function de(t) {
  return t && ge(t.destroy) ? t.destroy : Qe;
}
const du = ["", !0, 1, "true", "contenteditable"], hu = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function Z(t, e) {
  t.appendChild(e);
}
function B(t, e, n) {
  t.insertBefore(e, n || null);
}
function U(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Zr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function x(t) {
  return document.createElement(t);
}
function at(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ut(t) {
  return document.createTextNode(t);
}
function oe() {
  return ut(" ");
}
function Ye() {
  return ut("");
}
function he(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function P(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const mu = ["width", "height"];
function fe(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && mu.indexOf(i) === -1 ? t[i] = e[i] : P(t, i, e[i]);
}
function bs(t, e) {
  for (const n in e)
    P(t, n, e[n]);
}
function pu(t, e) {
  Object.keys(e).forEach((n) => {
    gu(t, n, e[n]);
  });
}
function gu(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : P(t, e, n);
}
function Mi(t) {
  return /-/.test(t) ? pu : fe;
}
function Ga(t) {
  return t === "" ? null : +t;
}
function bu(t) {
  return Array.from(t.childNodes);
}
function dt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function _u(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function vu(t, e, n) {
  ~du.indexOf(n) ? _u(t, e) : dt(t, e);
}
function xt(t, e) {
  t.value = e ?? "";
}
function Di(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function kt(t, e) {
  return new t(e);
}
let fi;
function ci(t) {
  fi = t;
}
function $e() {
  if (!fi)
    throw new Error("Function called outside component initialization");
  return fi;
}
function ct(t) {
  $e().$$.on_mount.push(t);
}
function en(t) {
  $e().$$.on_destroy.push(t);
}
function We(t, e) {
  return $e().$$.context.set(t, e), e;
}
function ze(t) {
  return $e().$$.context.get(t);
}
function Wn(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const wn = [], le = [];
let Gn = [];
const kr = [], ja = /* @__PURE__ */ Promise.resolve();
let Nr = !1;
function qa() {
  Nr || (Nr = !0, ja.then(Wa));
}
function Qr() {
  return qa(), ja;
}
function Pr(t) {
  Gn.push(t);
}
function pt(t) {
  kr.push(t);
}
const mr = /* @__PURE__ */ new Set();
let Nn = 0;
function Wa() {
  if (Nn !== 0)
    return;
  const t = fi;
  do {
    try {
      for (; Nn < wn.length; ) {
        const e = wn[Nn];
        Nn++, ci(e), Iu(e.$$);
      }
    } catch (e) {
      throw wn.length = 0, Nn = 0, e;
    }
    for (ci(null), wn.length = 0, Nn = 0; le.length; )
      le.pop()();
    for (let e = 0; e < Gn.length; e += 1) {
      const n = Gn[e];
      mr.has(n) || (mr.add(n), n());
    }
    Gn.length = 0;
  } while (wn.length);
  for (; kr.length; )
    kr.pop()();
  Nr = !1, mr.clear(), ci(t);
}
function Iu(t) {
  if (t.fragment !== null) {
    t.update(), Ze(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Pr);
  }
}
function Au(t) {
  const e = [], n = [];
  Gn.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Gn = e;
}
const Li = /* @__PURE__ */ new Set();
let Tn;
function Ue() {
  Tn = {
    r: 0,
    c: [],
    p: Tn
    // parent group
  };
}
function Be() {
  Tn.r || Ze(Tn.c), Tn = Tn.p;
}
function E(t, e) {
  t && t.i && (Li.delete(t), t.i(e));
}
function L(t, e, n, i) {
  if (t && t.o) {
    if (Li.has(t))
      return;
    Li.add(t), Tn.c.push(() => {
      Li.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function zt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Jr(t, e) {
  L(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function xr(t, e, n, i, r, s, a, l, o, u, c, f) {
  let d = t.length, h = s.length, m = d;
  const g = {};
  for (; m--; )
    g[t[m].key] = m;
  const p = [], A = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), S = [];
  for (m = h; m--; ) {
    const b = f(r, s, m), O = n(b);
    let w = a.get(O);
    w ? S.push(() => w.p(b, e)) : (w = u(O, b), w.c()), A.set(O, p[m] = w), O in g && _.set(O, Math.abs(m - g[O]));
  }
  const C = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function D(b) {
    E(b, 1), b.m(l, c), a.set(b.key, b), c = b.first, h--;
  }
  for (; d && h; ) {
    const b = p[h - 1], O = t[d - 1], w = b.key, y = O.key;
    b === O ? (c = b.first, d--, h--) : A.has(y) ? !a.has(w) || C.has(w) ? D(b) : M.has(y) ? d-- : _.get(w) > _.get(y) ? (M.add(w), D(b)) : (C.add(y), d--) : (o(O, a), d--);
  }
  for (; d--; ) {
    const b = t[d];
    A.has(b.key) || o(b, a);
  }
  for (; h; )
    D(p[h - 1]);
  return Ze(S), p;
}
function me(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const a = t[s], l = e[s];
    if (l) {
      for (const o in a)
        o in l || (i[o] = 1);
      for (const o in l)
        r[o] || (n[o] = l[o], r[o] = 1);
      t[s] = l;
    } else
      for (const o in a)
        r[o] = 1;
  }
  for (const a in i)
    a in n || (n[a] = void 0);
  return n;
}
function Te(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function gt(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function te(t) {
  t && t.c();
}
function $(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), Pr(() => {
    const s = t.$$.on_mount.map(Ba).filter(ge);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Ze(s), t.$$.on_mount = [];
  }), r.forEach(Pr);
}
function ee(t, e) {
  const n = t.$$;
  n.fragment !== null && (Au(n.after_update), Ze(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Eu(t, e) {
  t.$$.dirty[0] === -1 && (wn.push(t), qa(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function De(t, e, n, i, r, s, a = null, l = [-1]) {
  const o = fi;
  ci(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: Qe,
    not_equal: r,
    bound: gs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: gs(),
    dirty: l,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return u.ctx && r(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && Eu(t, f)), d;
  }) : [], u.update(), c = !0, Ze(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = bu(e.target);
      u.fragment && u.fragment.l(f), f.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && E(t.$$.fragment), $(t, e.target, e.anchor), Wa();
  }
  ci(o);
}
class ke {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    hr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    hr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ee(this, 1), this.$destroy = Qe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!ge(n))
      return Qe;
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
    this.$$set && !cu(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const yu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(yu);
const za = "location-viewer", Ka = "0.0.1", Cu = "Location", Su = "Search", Tu = "UUID", Lu = "Name", Ou = "Author", Ru = "Type", Mu = "Version", Du = "Changed At", ku = "From", Nu = "To", Pu = "Search Result", Hu = "Select Location", Fu = "Add Filter", wu = "Filter Types", Uu = {
  location: Cu,
  search: Su,
  uuid: Tu,
  name: Lu,
  author: Ou,
  type: Ru,
  version: Mu,
  changed_at: Du,
  from: ku,
  to: Nu,
  search_result: Pu,
  select_location: Hu,
  add_filter: Fu,
  filter_types: wu
}, Bu = "Ort", Vu = "Suche", Gu = "UUID", ju = "Name", qu = "Autor", Wu = "Typ", zu = "Version", Ku = "Geändert am", Xu = "Von", Yu = "Bis", Zu = "Suchergebnis", Qu = "Ort auswählen", Ju = "Filter Hinzufügen", xu = "Filtertypen", $u = {
  location: Bu,
  search: Vu,
  uuid: Gu,
  name: ju,
  author: qu,
  type: Wu,
  version: zu,
  changed_at: Ku,
  from: Xu,
  to: Yu,
  search_result: Zu,
  select_location: Qu,
  add_filter: Ju,
  filter_types: xu
}, Pn = [];
function ec(t, e) {
  return {
    subscribe: Tt(t, e).subscribe
  };
}
function Tt(t, e = Qe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(l) {
    if (ve(t, l) && (t = l, n)) {
      const o = !Pn.length;
      for (const u of i)
        u[1](), Pn.push(u, t);
      if (o) {
        for (let u = 0; u < Pn.length; u += 2)
          Pn[u][0](Pn[u + 1]);
        Pn.length = 0;
      }
    }
  }
  function s(l) {
    r(l(t));
  }
  function a(l, o = Qe) {
    const u = [l, o];
    return i.add(u), i.size === 1 && (n = e(r, s) || Qe), l(t), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: a };
}
function xn(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return ec(n, (a, l) => {
    let o = !1;
    const u = [];
    let c = 0, f = Qe;
    const d = () => {
      if (c)
        return;
      f();
      const m = e(i ? u[0] : u, a, l);
      s ? a(m) : f = ge(m) ? m : Qe;
    }, h = r.map(
      (m, g) => Xr(
        m,
        (p) => {
          u[g] = p, c &= ~(1 << g), o && d();
        },
        () => {
          c |= 1 << g;
        }
      )
    );
    return o = !0, d(), function() {
      Ze(h), f(), o = !1;
    };
  });
}
function tc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var nc = function(e) {
  return ic(e) && !rc(e);
};
function ic(t) {
  return !!t && typeof t == "object";
}
function rc(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || ac(t);
}
var sc = typeof Symbol == "function" && Symbol.for, lc = sc ? Symbol.for("react.element") : 60103;
function ac(t) {
  return t.$$typeof === lc;
}
function oc(t) {
  return Array.isArray(t) ? [] : {};
}
function di(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? zn(oc(t), t, e) : t;
}
function uc(t, e, n) {
  return t.concat(e).map(function(i) {
    return di(i, n);
  });
}
function cc(t, e) {
  if (!e.customMerge)
    return zn;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : zn;
}
function fc(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function _s(t) {
  return Object.keys(t).concat(fc(t));
}
function Xa(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function dc(t, e) {
  return Xa(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function hc(t, e, n) {
  var i = {};
  return n.isMergeableObject(t) && _s(t).forEach(function(r) {
    i[r] = di(t[r], n);
  }), _s(e).forEach(function(r) {
    dc(t, r) || (Xa(t, r) && n.isMergeableObject(e[r]) ? i[r] = cc(r, n)(t[r], e[r], n) : i[r] = di(e[r], n));
  }), i;
}
function zn(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || uc, n.isMergeableObject = n.isMergeableObject || nc, n.cloneUnlessOtherwiseSpecified = di;
  var i = Array.isArray(e), r = Array.isArray(t), s = i === r;
  return s ? i ? n.arrayMerge(t, e, n) : hc(t, e, n) : di(e, n);
}
zn.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(i, r) {
    return zn(i, r, n);
  }, {});
};
var mc = zn, pc = mc;
const gc = /* @__PURE__ */ tc(pc);
var Hr = function(t, e) {
  return Hr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Hr(t, e);
};
function ot(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Hr(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ce = function() {
  return ce = Object.assign || function(e) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, ce.apply(this, arguments);
};
function bc(t, e) {
  var n = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++)
      e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
  return n;
}
function Ya(t, e, n, i) {
  function r(s) {
    return s instanceof n ? s : new n(function(a) {
      a(s);
    });
  }
  return new (n || (n = Promise))(function(s, a) {
    function l(c) {
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
      c.done ? s(c.value) : r(c.value).then(l, o);
    }
    u((i = i.apply(t, e || [])).next());
  });
}
function $r(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, r, s, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = l(0), a.throw = l(1), a.return = l(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function l(u) {
    return function(c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (n = 0)), n; )
      try {
        if (i = 1, r && (s = u[0] & 2 ? r.return : u[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, u[1])).done)
          return s;
        switch (r = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
          case 0:
          case 1:
            s = u;
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
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = u;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(u);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = e.call(t, n);
      } catch (c) {
        u = [6, c], r = 0;
      } finally {
        i = s = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Lt(t) {
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
function Kn(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n)
    return t;
  var i = n.call(t), r, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      s.push(r.value);
  } catch (l) {
    a = { error: l };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function bn(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = e.length, s; i < r; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function jn(t) {
  return this instanceof jn ? (this.v = t, this) : new jn(t);
}
function _c(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(t, e || []), r, s = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", a), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function a(h) {
    return function(m) {
      return Promise.resolve(m).then(h, f);
    };
  }
  function l(h, m) {
    i[h] && (r[h] = function(g) {
      return new Promise(function(p, A) {
        s.push([h, g, p, A]) > 1 || o(h, g);
      });
    }, m && (r[h] = m(r[h])));
  }
  function o(h, m) {
    try {
      u(i[h](m));
    } catch (g) {
      d(s[0][3], g);
    }
  }
  function u(h) {
    h.value instanceof jn ? Promise.resolve(h.value.v).then(c, f) : d(s[0][2], h);
  }
  function c(h) {
    o("next", h);
  }
  function f(h) {
    o("throw", h);
  }
  function d(h, m) {
    h(m), s.shift(), s.length && o(s[0][0], s[0][1]);
  }
}
function vc(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Lt == "function" ? Lt(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function i(s) {
    n[s] = t[s] && function(a) {
      return new Promise(function(l, o) {
        a = t[s](a), r(l, o, a.done, a.value);
      });
    };
  }
  function r(s, a, l, o) {
    Promise.resolve(o).then(function(u) {
      s({ value: u, done: l });
    }, a);
  }
}
function pr(t, e) {
  var n = e && e.cache ? e.cache : Tc, i = e && e.serializer ? e.serializer : Cc, r = e && e.strategy ? e.strategy : Ec;
  return r(t, {
    cache: n,
    serializer: i
  });
}
function Ic(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Ac(t, e, n, i) {
  var r = Ic(i) ? i : n(i), s = e.get(r);
  return typeof s > "u" && (s = t.call(this, i), e.set(r, s)), s;
}
function Za(t, e, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), s = e.get(r);
  return typeof s > "u" && (s = t.apply(this, i), e.set(r, s)), s;
}
function Qa(t, e, n, i, r) {
  return n.bind(e, t, i, r);
}
function Ec(t, e) {
  var n = t.length === 1 ? Ac : Za;
  return Qa(t, this, n, e.cache.create(), e.serializer);
}
function yc(t, e) {
  return Qa(t, this, Za, e.cache.create(), e.serializer);
}
var Cc = function() {
  return JSON.stringify(arguments);
}, Sc = (
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
), Tc = {
  create: function() {
    return new Sc();
  }
}, gr = {
  variadic: yc
}, tt;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(tt || (tt = {}));
var mt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(mt || (mt = {}));
var Xn;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Xn || (Xn = {}));
function vs(t) {
  return t.type === mt.literal;
}
function Lc(t) {
  return t.type === mt.argument;
}
function Ja(t) {
  return t.type === mt.number;
}
function xa(t) {
  return t.type === mt.date;
}
function $a(t) {
  return t.type === mt.time;
}
function eo(t) {
  return t.type === mt.select;
}
function to(t) {
  return t.type === mt.plural;
}
function Oc(t) {
  return t.type === mt.pound;
}
function no(t) {
  return t.type === mt.tag;
}
function io(t) {
  return !!(t && typeof t == "object" && t.type === Xn.number);
}
function Fr(t) {
  return !!(t && typeof t == "object" && t.type === Xn.dateTime);
}
var ro = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Rc = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Mc(t) {
  var e = {};
  return t.replace(Rc, function(n) {
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
var Dc = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function kc(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Dc).filter(function(d) {
    return d.length > 0;
  }), n = [], i = 0, r = e; i < r.length; i++) {
    var s = r[i], a = s.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = a[0], o = a.slice(1), u = 0, c = o; u < c.length; u++) {
      var f = c[u];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: l, options: o });
  }
  return n;
}
function Nc(t) {
  return t.replace(/^(.*?)-/, "");
}
var Is = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, so = /^(@+)?(\+|#+)?[rs]?$/g, Pc = /(\*)(0+)|(#+)(0+)|(0+)/g, lo = /^(0+)$/;
function As(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(so, function(n, i, r) {
    return typeof r != "string" ? (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length) : r === "+" ? e.minimumSignificantDigits = i.length : i[0] === "#" ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), e;
}
function ao(t) {
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
function Hc(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !lo.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Es(t) {
  var e = {}, n = ao(t);
  return n || e;
}
function Fc(t) {
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
        e.style = "unit", e.unit = Nc(r.options[0]);
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
        e = ce(ce(ce({}, e), { notation: "scientific" }), r.options.reduce(function(o, u) {
          return ce(ce({}, o), Es(u));
        }, {}));
        continue;
      case "engineering":
        e = ce(ce(ce({}, e), { notation: "engineering" }), r.options.reduce(function(o, u) {
          return ce(ce({}, o), Es(u));
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
        r.options[0].replace(Pc, function(o, u, c, f, d, h) {
          if (u)
            e.minimumIntegerDigits = c.length;
          else {
            if (f && d)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (lo.test(r.stem)) {
      e.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (Is.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(Is, function(o, u, c, f, d, h) {
        return c === "*" ? e.minimumFractionDigits = u.length : f && f[0] === "#" ? e.maximumFractionDigits = f.length : d && h ? (e.minimumFractionDigits = d.length, e.maximumFractionDigits = d.length + h.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var s = r.options[0];
      s === "w" ? e = ce(ce({}, e), { trailingZeroDisplay: "stripIfInteger" }) : s && (e = ce(ce({}, e), As(s)));
      continue;
    }
    if (so.test(r.stem)) {
      e = ce(ce({}, e), As(r.stem));
      continue;
    }
    var a = ao(r.stem);
    a && (e = ce(ce({}, e), a));
    var l = Hc(r.stem);
    l && (e = ce(ce({}, e), l));
  }
  return e;
}
var Ii = {
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
function wc(t, e) {
  for (var n = "", i = 0; i < t.length; i++) {
    var r = t.charAt(i);
    if (r === "j") {
      for (var s = 0; i + 1 < t.length && t.charAt(i + 1) === r; )
        s++, i++;
      var a = 1 + (s & 1), l = s < 2 ? 1 : 3 + (s >> 1), o = "a", u = Uc(e);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        n += o;
      for (; a-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function Uc(t) {
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
  var r = Ii[i || ""] || Ii[n || ""] || Ii["".concat(n, "-001")] || Ii["001"];
  return r[0];
}
var br, Bc = new RegExp("^".concat(ro.source, "*")), Vc = new RegExp("".concat(ro.source, "*$"));
function nt(t, e) {
  return { start: t, end: e };
}
var Gc = !!String.prototype.startsWith && "_a".startsWith("a", 1), jc = !!String.fromCodePoint, qc = !!Object.fromEntries, Wc = !!String.prototype.codePointAt, zc = !!String.prototype.trimStart, Kc = !!String.prototype.trimEnd, Xc = !!Number.isSafeInteger, Yc = Xc ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, wr = !0;
try {
  var Zc = uo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  wr = ((br = Zc.exec("a")) === null || br === void 0 ? void 0 : br[0]) === "a";
} catch {
  wr = !1;
}
var ys = Gc ? (
  // Native
  function(e, n, i) {
    return e.startsWith(n, i);
  }
) : (
  // For IE11
  function(e, n, i) {
    return e.slice(i, i + n.length) === n;
  }
), Ur = jc ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var i = "", r = e.length, s = 0, a; r > s; ) {
      if (a = e[s++], a > 1114111)
        throw RangeError(a + " is not a valid code point");
      i += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return i;
  }
), Cs = (
  // native
  qc ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, i = 0, r = e; i < r.length; i++) {
        var s = r[i], a = s[0], l = s[1];
        n[a] = l;
      }
      return n;
    }
  )
), oo = Wc ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var i = e.length;
    if (!(n < 0 || n >= i)) {
      var r = e.charCodeAt(n), s;
      return r < 55296 || r > 56319 || n + 1 === i || (s = e.charCodeAt(n + 1)) < 56320 || s > 57343 ? r : (r - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Qc = zc ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Bc, "");
  }
), Jc = Kc ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Vc, "");
  }
);
function uo(t, e) {
  return new RegExp(t, e);
}
var Br;
if (wr) {
  var Ss = uo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Br = function(e, n) {
    var i;
    Ss.lastIndex = n;
    var r = Ss.exec(e);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  Br = function(e, n) {
    for (var i = []; ; ) {
      var r = oo(e, n);
      if (r === void 0 || co(r) || tf(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return Ur.apply(void 0, i);
  };
var xc = (
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
        var s = this.char();
        if (s === 123) {
          var a = this.parseArgument(e, i);
          if (a.err)
            return a;
          r.push(a.val);
        } else {
          if (s === 125 && e > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), r.push({
              type: mt.pound,
              location: nt(l, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(tt.UNMATCHED_CLOSING_TAG, nt(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Vr(this.peek() || 0)) {
            var a = this.parseTag(e, n);
            if (a.err)
              return a;
            r.push(a.val);
          } else {
            var a = this.parseLiteral(e, n);
            if (a.err)
              return a;
            r.push(a.val);
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
            type: mt.literal,
            value: "<".concat(r, "/>"),
            location: nt(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(e + 1, n, !0);
        if (s.err)
          return s;
        var a = s.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Vr(this.char()))
            return this.error(tt.INVALID_TAG, nt(l, this.clonePosition()));
          var o = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(tt.UNMATCHED_CLOSING_TAG, nt(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: mt.tag,
              value: r,
              children: a,
              location: nt(i, this.clonePosition())
            },
            err: null
          } : this.error(tt.INVALID_TAG, nt(l, this.clonePosition())));
        } else
          return this.error(tt.UNCLOSED_TAG, nt(i, this.clonePosition()));
      } else
        return this.error(tt.INVALID_TAG, nt(i, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && ef(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          r += s;
          continue;
        }
        var a = this.tryParseUnquoted(e, n);
        if (a) {
          r += a;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          r += l;
          continue;
        }
        break;
      }
      var o = nt(i, this.clonePosition());
      return {
        val: { type: mt.literal, value: r, location: o },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !$c(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Ur.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), Ur(i));
    }, t.prototype.parseArgument = function(e, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, nt(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(tt.EMPTY_ARGUMENT, nt(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(tt.MALFORMED_ARGUMENT, nt(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, nt(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: mt.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: nt(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, nt(i, this.clonePosition())) : this.parseArgumentOptions(e, n, r, i);
        default:
          return this.error(tt.MALFORMED_ARGUMENT, nt(i, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), i = Br(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var s = this.clonePosition(), a = nt(e, s);
      return { value: i, location: a };
    }, t.prototype.parseArgumentOptions = function(e, n, i, r) {
      var s, a = this.clonePosition(), l = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (l) {
        case "":
          return this.error(tt.EXPECT_ARGUMENT_TYPE, nt(a, o));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var d = Jc(f.val);
            if (d.length === 0)
              return this.error(tt.EXPECT_ARGUMENT_STYLE, nt(this.clonePosition(), this.clonePosition()));
            var h = nt(c, this.clonePosition());
            u = { style: d, styleLocation: h };
          }
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var g = nt(r, this.clonePosition());
          if (u && ys(u == null ? void 0 : u.style, "::", 0)) {
            var p = Qc(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(p, u.styleLocation);
              return f.err ? f : {
                val: { type: mt.number, value: i, location: g, style: f.val },
                err: null
              };
            } else {
              if (p.length === 0)
                return this.error(tt.EXPECT_DATE_TIME_SKELETON, g);
              var A = p;
              this.locale && (A = wc(p, this.locale));
              var d = {
                type: Xn.dateTime,
                pattern: A,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Mc(A) : {}
              }, _ = l === "date" ? mt.date : mt.time;
              return {
                val: { type: _, value: i, location: g, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? mt.number : l === "date" ? mt.date : mt.time,
              value: i,
              location: g,
              style: (s = u == null ? void 0 : u.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var S = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(tt.EXPECT_SELECT_ARGUMENT_OPTIONS, nt(S, ce({}, S)));
          this.bumpSpace();
          var C = this.parseIdentifierIfPossible(), M = 0;
          if (l !== "select" && C.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, nt(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), C = this.parseIdentifierIfPossible(), M = f.val;
          }
          var D = this.tryParsePluralOrSelectOptions(e, l, n, C);
          if (D.err)
            return D;
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var b = nt(r, this.clonePosition());
          return l === "select" ? {
            val: {
              type: mt.select,
              value: i,
              options: Cs(D.val),
              location: b
            },
            err: null
          } : {
            val: {
              type: mt.plural,
              value: i,
              options: Cs(D.val),
              offset: M,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: b
            },
            err: null
          };
        }
        default:
          return this.error(tt.INVALID_ARGUMENT_TYPE, nt(a, o));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, nt(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(tt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, nt(r, this.clonePosition()));
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
        i = kc(e);
      } catch {
        return this.error(tt.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Xn.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Fc(i) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, i, r) {
      for (var s, a = !1, l = [], o = /* @__PURE__ */ new Set(), u = r.value, c = r.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(tt.EXPECT_PLURAL_ARGUMENT_SELECTOR, tt.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = nt(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (o.has(u))
          return this.error(n === "select" ? tt.DUPLICATE_SELECT_ARGUMENT_SELECTOR : tt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (a = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? tt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : tt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, nt(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(e + 1, n, i);
        if (m.err)
          return m;
        var g = this.tryParseArgumentClose(h);
        if (g.err)
          return g;
        l.push([
          u,
          {
            value: m.val,
            location: nt(h, this.clonePosition())
          }
        ]), o.add(u), this.bumpSpace(), s = this.parseIdentifierIfPossible(), u = s.value, c = s.location;
      }
      return l.length === 0 ? this.error(n === "select" ? tt.EXPECT_SELECT_ARGUMENT_SELECTOR : tt.EXPECT_PLURAL_ARGUMENT_SELECTOR, nt(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(tt.MISSING_OTHER_CLAUSE, nt(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var s = !1, a = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          s = !0, a = a * 10 + (l - 48), this.bump();
        else
          break;
      }
      var o = nt(r, this.clonePosition());
      return s ? (a *= i, Yc(a) ? { val: a, err: null } : this.error(n, o)) : this.error(e, o);
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
      var n = oo(this.message, e);
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
      if (ys(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && co(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return i ?? null;
    }, t;
  }()
);
function Vr(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function $c(t) {
  return Vr(t) || t === 47;
}
function ef(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function co(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function tf(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Gr(t) {
  t.forEach(function(e) {
    if (delete e.location, eo(e) || to(e))
      for (var n in e.options)
        delete e.options[n].location, Gr(e.options[n].value);
    else
      Ja(e) && io(e.style) || (xa(e) || $a(e)) && Fr(e.style) ? delete e.style.location : no(e) && Gr(e.children);
  });
}
function nf(t, e) {
  e === void 0 && (e = {}), e = ce({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new xc(t, e).parse();
  if (n.err) {
    var i = SyntaxError(tt[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || Gr(n.val), n.val;
}
var Yn;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Yn || (Yn = {}));
var wi = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i, r) {
      var s = t.call(this, n) || this;
      return s.code = i, s.originalMessage = r, s;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Ts = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i, r, s) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Yn.INVALID_VALUE, s) || this;
    }
    return e;
  }(wi)
), rf = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), Yn.INVALID_VALUE, r) || this;
    }
    return e;
  }(wi)
), sf = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), Yn.MISSING_VALUE, i) || this;
    }
    return e;
  }(wi)
), Nt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Nt || (Nt = {}));
function lf(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== Nt.literal || n.type !== Nt.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function af(t) {
  return typeof t == "function";
}
function Oi(t, e, n, i, r, s, a) {
  if (t.length === 1 && vs(t[0]))
    return [
      {
        type: Nt.literal,
        value: t[0].value
      }
    ];
  for (var l = [], o = 0, u = t; o < u.length; o++) {
    var c = u[o];
    if (vs(c)) {
      l.push({
        type: Nt.literal,
        value: c.value
      });
      continue;
    }
    if (Oc(c)) {
      typeof s == "number" && l.push({
        type: Nt.literal,
        value: n.getNumberFormat(e).format(s)
      });
      continue;
    }
    var f = c.value;
    if (!(r && f in r))
      throw new sf(f, a);
    var d = r[f];
    if (Lc(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), l.push({
        type: typeof d == "string" ? Nt.literal : Nt.object,
        value: d
      });
      continue;
    }
    if (xa(c)) {
      var h = typeof c.style == "string" ? i.date[c.style] : Fr(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: Nt.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if ($a(c)) {
      var h = typeof c.style == "string" ? i.time[c.style] : Fr(c.style) ? c.style.parsedOptions : i.time.medium;
      l.push({
        type: Nt.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if (Ja(c)) {
      var h = typeof c.style == "string" ? i.number[c.style] : io(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (d = d * (h.scale || 1)), l.push({
        type: Nt.literal,
        value: n.getNumberFormat(e, h).format(d)
      });
      continue;
    }
    if (no(c)) {
      var m = c.children, g = c.value, p = r[g];
      if (!af(p))
        throw new rf(g, "function", a);
      var A = Oi(m, e, n, i, r, s), _ = p(A.map(function(M) {
        return M.value;
      }));
      Array.isArray(_) || (_ = [_]), l.push.apply(l, _.map(function(M) {
        return {
          type: typeof M == "string" ? Nt.literal : Nt.object,
          value: M
        };
      }));
    }
    if (eo(c)) {
      var S = c.options[d] || c.options.other;
      if (!S)
        throw new Ts(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Oi(S.value, e, n, i, r));
      continue;
    }
    if (to(c)) {
      var S = c.options["=".concat(d)];
      if (!S) {
        if (!Intl.PluralRules)
          throw new wi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Yn.MISSING_INTL_API, a);
        var C = n.getPluralRules(e, { type: c.pluralType }).select(d - (c.offset || 0));
        S = c.options[C] || c.options.other;
      }
      if (!S)
        throw new Ts(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Oi(S.value, e, n, i, r, d - (c.offset || 0)));
      continue;
    }
  }
  return lf(l);
}
function of(t, e) {
  return e ? ce(ce(ce({}, t || {}), e || {}), Object.keys(t).reduce(function(n, i) {
    return n[i] = ce(ce({}, t[i]), e[i] || {}), n;
  }, {})) : t;
}
function uf(t, e) {
  return e ? Object.keys(t).reduce(function(n, i) {
    return n[i] = of(t[i], e[i]), n;
  }, ce({}, t)) : t;
}
function _r(t) {
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
function cf(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: pr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, bn([void 0], n, !1)))();
    }, {
      cache: _r(t.number),
      strategy: gr.variadic
    }),
    getDateTimeFormat: pr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, bn([void 0], n, !1)))();
    }, {
      cache: _r(t.dateTime),
      strategy: gr.variadic
    }),
    getPluralRules: pr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, bn([void 0], n, !1)))();
    }, {
      cache: _r(t.pluralRules),
      strategy: gr.variadic
    })
  };
}
var fo = (
  /** @class */
  function() {
    function t(e, n, i, r) {
      n === void 0 && (n = t.defaultLocale);
      var s = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var u = s.formatToParts(o);
        if (u.length === 1)
          return u[0].value;
        var c = u.reduce(function(f, d) {
          return !f.length || d.type !== Nt.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(o) {
        return Oi(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
      }, this.resolvedOptions = function() {
        var o;
        return {
          locale: ((o = s.resolvedLocale) === null || o === void 0 ? void 0 : o.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = r || {};
        a.formatters;
        var l = bc(a, ["formatters"]);
        this.ast = t.__parse(e, ce(ce({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = uf(t.formats, i), this.formatters = r && r.formatters || cf(this.formatterCache);
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
    }, t.__parse = nf, t.formats = {
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
function ff(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let i = t;
  for (let r = 0; r < n.length; r++)
    if (typeof i == "object") {
      if (r > 0) {
        const s = n.slice(r, n.length).join(".");
        if (s in i) {
          i = i[s];
          break;
        }
      }
      i = i[n[r]];
    } else
      i = void 0;
  return i;
}
const gn = {}, df = (t, e, n) => n && (e in gn || (gn[e] = {}), t in gn[e] || (gn[e][t] = n), n), ho = (t, e) => {
  if (e == null)
    return;
  if (e in gn && t in gn[e])
    return gn[e][t];
  const n = pi(e);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], s = mf(r, t);
    if (s)
      return df(t, e, s);
  }
};
let es;
const mi = Tt({});
function hf(t) {
  return es[t] || null;
}
function mo(t) {
  return t in es;
}
function mf(t, e) {
  if (!mo(t))
    return null;
  const n = hf(t);
  return ff(n, e);
}
function pf(t) {
  if (t == null)
    return;
  const e = pi(t);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (mo(i))
      return i;
  }
}
function po(t, ...e) {
  delete gn[t], mi.update((n) => (n[t] = gc.all([n[t] || {}, ...e]), n));
}
xn(
  [mi],
  ([t]) => Object.keys(t)
);
mi.subscribe((t) => es = t);
const Ri = {};
function gf(t, e) {
  Ri[t].delete(e), Ri[t].size === 0 && delete Ri[t];
}
function go(t) {
  return Ri[t];
}
function bf(t) {
  return pi(t).map((e) => {
    const n = go(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function ki(t) {
  return t == null ? !1 : pi(t).some(
    (e) => {
      var n;
      return (n = go(e)) == null ? void 0 : n.size;
    }
  );
}
function _f(t, e) {
  return Promise.all(
    e.map((i) => (gf(t, i), i().then((r) => r.default || r)))
  ).then((i) => po(t, ...i));
}
const ri = {};
function bo(t) {
  if (!ki(t))
    return t in ri ? ri[t] : Promise.resolve();
  const e = bf(t);
  return ri[t] = Promise.all(
    e.map(
      ([n, i]) => _f(n, i)
    )
  ).then(() => {
    if (ki(t))
      return bo(t);
    delete ri[t];
  }), ri[t];
}
var Ls = Object.getOwnPropertySymbols, vf = Object.prototype.hasOwnProperty, If = Object.prototype.propertyIsEnumerable, Af = (t, e) => {
  var n = {};
  for (var i in t)
    vf.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Ls)
    for (var i of Ls(t))
      e.indexOf(i) < 0 && If.call(t, i) && (n[i] = t[i]);
  return n;
};
const Ef = {
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
function yf({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${pi(
      t
    ).join('", "')}".${ki(_n()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Cf = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Ef,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ai = Cf;
function Zn() {
  return ai;
}
function Sf(t) {
  const e = t, { formats: n } = e, i = Af(e, ["formats"]);
  let r = t.fallbackLocale;
  if (t.initialLocale)
    try {
      fo.resolveLocale(t.initialLocale) && (r = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return i.warnOnMissingMessages && (delete i.warnOnMissingMessages, i.handleMissingMessage == null ? i.handleMissingMessage = yf : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ai, i, { initialLocale: r }), n && ("number" in n && Object.assign(ai.formats.number, n.number), "date" in n && Object.assign(ai.formats.date, n.date), "time" in n && Object.assign(ai.formats.time, n.time)), Mn.set(r);
}
const vr = Tt(!1);
var Tf = Object.defineProperty, Lf = Object.defineProperties, Of = Object.getOwnPropertyDescriptors, Os = Object.getOwnPropertySymbols, Rf = Object.prototype.hasOwnProperty, Mf = Object.prototype.propertyIsEnumerable, Rs = (t, e, n) => e in t ? Tf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Df = (t, e) => {
  for (var n in e || (e = {}))
    Rf.call(e, n) && Rs(t, n, e[n]);
  if (Os)
    for (var n of Os(e))
      Mf.call(e, n) && Rs(t, n, e[n]);
  return t;
}, kf = (t, e) => Lf(t, Of(e));
let jr;
const Ni = Tt(null);
function Ms(t) {
  return t.split("-").map((e, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function pi(t, e = Zn().fallbackLocale) {
  const n = Ms(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Ms(e)])] : n;
}
function _n() {
  return jr ?? void 0;
}
Ni.subscribe((t) => {
  jr = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Nf = (t) => {
  if (t && pf(t) && ki(t)) {
    const { loadingDelay: e } = Zn();
    let n;
    return typeof window < "u" && _n() != null && e ? n = window.setTimeout(
      () => vr.set(!0),
      e
    ) : vr.set(!0), bo(t).then(() => {
      Ni.set(t);
    }).finally(() => {
      clearTimeout(n), vr.set(!1);
    });
  }
  return Ni.set(t);
}, Mn = kf(Df({}, Ni), {
  set: Nf
}), Pf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ui = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in e ? e[r] : e[r] = t(i);
  };
};
var Hf = Object.defineProperty, Pi = Object.getOwnPropertySymbols, _o = Object.prototype.hasOwnProperty, vo = Object.prototype.propertyIsEnumerable, Ds = (t, e, n) => e in t ? Hf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ts = (t, e) => {
  for (var n in e || (e = {}))
    _o.call(e, n) && Ds(t, n, e[n]);
  if (Pi)
    for (var n of Pi(e))
      vo.call(e, n) && Ds(t, n, e[n]);
  return t;
}, $n = (t, e) => {
  var n = {};
  for (var i in t)
    _o.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Pi)
    for (var i of Pi(t))
      e.indexOf(i) < 0 && vo.call(t, i) && (n[i] = t[i]);
  return n;
};
const hi = (t, e) => {
  const { formats: n } = Zn();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Ff = Ui(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = $n(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = hi("number", i)), new Intl.NumberFormat(n, r);
  }
), wf = Ui(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = $n(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = hi("date", i) : Object.keys(r).length === 0 && (r = hi("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), Uf = Ui(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = $n(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = hi("time", i) : Object.keys(r).length === 0 && (r = hi("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), Bf = (t = {}) => {
  var e = t, {
    locale: n = _n()
  } = e, i = $n(e, [
    "locale"
  ]);
  return Ff(ts({ locale: n }, i));
}, Vf = (t = {}) => {
  var e = t, {
    locale: n = _n()
  } = e, i = $n(e, [
    "locale"
  ]);
  return wf(ts({ locale: n }, i));
}, Gf = (t = {}) => {
  var e = t, {
    locale: n = _n()
  } = e, i = $n(e, [
    "locale"
  ]);
  return Uf(ts({ locale: n }, i));
}, jf = Ui(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = _n()) => new fo(t, e, Zn().formats, {
    ignoreTag: Zn().ignoreTag
  })
), qf = (t, e = {}) => {
  var n, i, r, s;
  let a = e;
  typeof t == "object" && (a = t, t = a.id);
  const {
    values: l,
    locale: o = _n(),
    default: u
  } = a;
  if (o == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = ho(t, o);
  if (!c)
    c = (s = (r = (i = (n = Zn()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: o, id: t, defaultValue: u })) != null ? r : u) != null ? s : t;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!l)
    return c;
  let f = c;
  try {
    f = jf(c, o).format(l);
  } catch (d) {
    d instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      d.message
    );
  }
  return f;
}, Wf = (t, e) => Gf(e).format(t), zf = (t, e) => Vf(e).format(t), Kf = (t, e) => Bf(e).format(t), Xf = (t, e = _n()) => ho(t, e), Yf = xn([Mn, mi], () => qf);
xn([Mn], () => Wf);
xn([Mn], () => zf);
xn([Mn], () => Kf);
xn([Mn, mi], () => Xf);
function Zf(t, e) {
  Object.entries(t).forEach(([s, a]) => {
    po(s, a);
  });
  const n = localStorage.getItem("language"), i = "en", r = n ?? Pf();
  console.log("Initial: Setting the language to", r), Sf({
    fallbackLocale: i,
    initialLocale: r
  }), window.addEventListener("oscd-language-changed", (s) => {
    const a = s;
    if (!a.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", a.detail.language), Mn.set(a.detail.language);
  });
}
function yt(t) {
  return typeof t == "function";
}
function Io(t) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ir = Io(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function ks(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var ns = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, i, r, s;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var l = Lt(a), o = l.next(); !o.done; o = l.next()) {
              var u = o.value;
              u.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              o && !o.done && (n = l.return) && n.call(l);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          a.remove(this);
      var c = this.initialTeardown;
      if (yt(c))
        try {
          c();
        } catch (g) {
          s = g instanceof Ir ? g.errors : [g];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = Lt(f), h = d.next(); !h.done; h = d.next()) {
            var m = h.value;
            try {
              Ns(m);
            } catch (g) {
              s = s ?? [], g instanceof Ir ? s = bn(bn([], Kn(s)), Kn(g.errors)) : s.push(g);
            }
          }
        } catch (g) {
          i = { error: g };
        } finally {
          try {
            h && !h.done && (r = d.return) && r.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (s)
        throw new Ir(s);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Ns(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && ks(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && ks(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
ns.EMPTY;
function Ao(t) {
  return t instanceof ns || t && "closed" in t && yt(t.remove) && yt(t.add) && yt(t.unsubscribe);
}
function Ns(t) {
  yt(t) ? t() : t.unsubscribe();
}
var Qf = {
  Promise: void 0
}, Jf = {
  setTimeout: function(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return setTimeout.apply(void 0, bn([t, e], Kn(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Eo(t) {
  Jf.setTimeout(function() {
    throw t;
  });
}
function Ps() {
}
function xf(t) {
  t();
}
var is = function(t) {
  ot(e, t);
  function e(n) {
    var i = t.call(this) || this;
    return i.isStopped = !1, n ? (i.destination = n, Ao(n) && n.add(i)) : i.destination = td, i;
  }
  return e.create = function(n, i, r) {
    return new qr(n, i, r);
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
}(ns), $f = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (i) {
        Ai(i);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (i) {
        Ai(i);
      }
    else
      Ai(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ai(n);
      }
  }, t;
}(), qr = function(t) {
  ot(e, t);
  function e(n, i, r) {
    var s = t.call(this) || this, a;
    return yt(n) || !n ? a = {
      next: n ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = n, s.destination = new $f(a), s;
  }
  return e;
}(is);
function Ai(t) {
  Eo(t);
}
function ed(t) {
  throw t;
}
var td = {
  closed: !0,
  next: Ps,
  error: ed,
  complete: Ps
}, rs = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function yo(t) {
  return t;
}
function nd(t) {
  return t.length === 0 ? yo : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(i, r) {
      return r(i);
    }, n);
  };
}
var Qt = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, i) {
    var r = this, s = rd(e) ? e : new qr(e, n, i);
    return xf(function() {
      var a = r, l = a.operator, o = a.source;
      s.add(l ? l.call(s, o) : o ? r._subscribe(s) : r._trySubscribe(s));
    }), s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var i = this;
    return n = Hs(n), new n(function(r, s) {
      var a = new qr({
        next: function(l) {
          try {
            e(l);
          } catch (o) {
            s(o), a.unsubscribe();
          }
        },
        error: s,
        complete: r
      });
      i.subscribe(a);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[rs] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return nd(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Hs(e), new e(function(i, r) {
      var s;
      n.subscribe(function(a) {
        return s = a;
      }, function(a) {
        return r(a);
      }, function() {
        return i(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Hs(t) {
  var e;
  return (e = t ?? Qf.Promise) !== null && e !== void 0 ? e : Promise;
}
function id(t) {
  return t && yt(t.next) && yt(t.error) && yt(t.complete);
}
function rd(t) {
  return t && t instanceof is || id(t) && Ao(t);
}
function sd(t) {
  return yt(t == null ? void 0 : t.lift);
}
function ei(t) {
  return function(e) {
    if (sd(e))
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
function Qn(t, e, n, i, r) {
  return new ld(t, e, n, i, r);
}
var ld = function(t) {
  ot(e, t);
  function e(n, i, r, s, a, l) {
    var o = t.call(this, n) || this;
    return o.onFinalize = a, o.shouldUnsubscribe = l, o._next = i ? function(u) {
      try {
        i(u);
      } catch (c) {
        n.error(c);
      }
    } : t.prototype._next, o._error = s ? function(u) {
      try {
        s(u);
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, o._complete = r ? function() {
      try {
        r();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, o;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var i = this.closed;
      t.prototype.unsubscribe.call(this), !i && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(is), ad = new Qt(function(t) {
  return t.complete();
});
function od(t) {
  return t && yt(t.schedule);
}
function ud(t) {
  return t[t.length - 1];
}
function cd(t) {
  return od(ud(t)) ? t.pop() : void 0;
}
var Co = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function So(t) {
  return yt(t == null ? void 0 : t.then);
}
function To(t) {
  return yt(t[rs]);
}
function Lo(t) {
  return Symbol.asyncIterator && yt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Oo(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function fd() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ro = fd();
function Mo(t) {
  return yt(t == null ? void 0 : t[Ro]);
}
function Do(t) {
  return _c(this, arguments, function() {
    var n, i, r, s;
    return $r(this, function(a) {
      switch (a.label) {
        case 0:
          n = t.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, jn(n.read())];
        case 3:
          return i = a.sent(), r = i.value, s = i.done, s ? [4, jn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, jn(r)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
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
function ko(t) {
  return yt(t == null ? void 0 : t.getReader);
}
function gi(t) {
  if (t instanceof Qt)
    return t;
  if (t != null) {
    if (To(t))
      return dd(t);
    if (Co(t))
      return hd(t);
    if (So(t))
      return md(t);
    if (Lo(t))
      return No(t);
    if (Mo(t))
      return pd(t);
    if (ko(t))
      return gd(t);
  }
  throw Oo(t);
}
function dd(t) {
  return new Qt(function(e) {
    var n = t[rs]();
    if (yt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function hd(t) {
  return new Qt(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function md(t) {
  return new Qt(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Eo);
  });
}
function pd(t) {
  return new Qt(function(e) {
    var n, i;
    try {
      for (var r = Lt(t), s = r.next(); !s.done; s = r.next()) {
        var a = s.value;
        if (e.next(a), e.closed)
          return;
      }
    } catch (l) {
      n = { error: l };
    } finally {
      try {
        s && !s.done && (i = r.return) && i.call(r);
      } finally {
        if (n)
          throw n.error;
      }
    }
    e.complete();
  });
}
function No(t) {
  return new Qt(function(e) {
    bd(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function gd(t) {
  return No(Do(t));
}
function bd(t, e) {
  var n, i, r, s;
  return Ya(this, void 0, void 0, function() {
    var a, l;
    return $r(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), n = vc(t), o.label = 1;
        case 1:
          return [4, n.next()];
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
          return l = o.sent(), r = { error: l }, [3, 11];
        case 6:
          return o.trys.push([6, , 9, 10]), i && !i.done && (s = n.return) ? [4, s.call(n)] : [3, 8];
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
function On(t, e, n, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var s = e.schedule(function() {
    n(), r ? t.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (t.add(s), !r)
    return s;
}
function Po(t, e) {
  return e === void 0 && (e = 0), ei(function(n, i) {
    n.subscribe(Qn(i, function(r) {
      return On(i, t, function() {
        return i.next(r);
      }, e);
    }, function() {
      return On(i, t, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return On(i, t, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function Ho(t, e) {
  return e === void 0 && (e = 0), ei(function(n, i) {
    i.add(t.schedule(function() {
      return n.subscribe(i);
    }, e));
  });
}
function _d(t, e) {
  return gi(t).pipe(Ho(e), Po(e));
}
function vd(t, e) {
  return gi(t).pipe(Ho(e), Po(e));
}
function Id(t, e) {
  return new Qt(function(n) {
    var i = 0;
    return e.schedule(function() {
      i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
    });
  });
}
function Ad(t, e) {
  return new Qt(function(n) {
    var i;
    return On(n, e, function() {
      i = t[Ro](), On(n, e, function() {
        var r, s, a;
        try {
          r = i.next(), s = r.value, a = r.done;
        } catch (l) {
          n.error(l);
          return;
        }
        a ? n.complete() : n.next(s);
      }, 0, !0);
    }), function() {
      return yt(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function Fo(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Qt(function(n) {
    On(n, e, function() {
      var i = t[Symbol.asyncIterator]();
      On(n, e, function() {
        i.next().then(function(r) {
          r.done ? n.complete() : n.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function Ed(t, e) {
  return Fo(Do(t), e);
}
function yd(t, e) {
  if (t != null) {
    if (To(t))
      return _d(t, e);
    if (Co(t))
      return Id(t, e);
    if (So(t))
      return vd(t, e);
    if (Lo(t))
      return Fo(t, e);
    if (Mo(t))
      return Ad(t, e);
    if (ko(t))
      return Ed(t, e);
  }
  throw Oo(t);
}
function Cd(t, e) {
  return e ? yd(t, e) : gi(t);
}
function wo() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = cd(t);
  return Cd(t, n);
}
function Ft(t, e) {
  return ei(function(n, i) {
    var r = 0;
    n.subscribe(Qn(i, function(s) {
      i.next(t.call(e, s, r++));
    }));
  });
}
function Sd(t, e, n, i, r, s, a, l) {
  var o = [], u = 0, c = 0, f = !1, d = function() {
    f && !o.length && !u && e.complete();
  }, h = function(g) {
    return u < i ? m(g) : o.push(g);
  }, m = function(g) {
    u++;
    var p = !1;
    gi(n(g, c++)).subscribe(Qn(e, function(A) {
      e.next(A);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var A = function() {
            var _ = o.shift();
            a || m(_);
          }; o.length && u < i; )
            A();
          d();
        } catch (_) {
          e.error(_);
        }
    }));
  };
  return t.subscribe(Qn(e, h, function() {
    f = !0, d();
  })), function() {
  };
}
function Wr(t, e, n) {
  return n === void 0 && (n = 1 / 0), yt(e) ? Wr(function(i, r) {
    return Ft(function(s, a) {
      return e(i, s, r, a);
    })(gi(t(i, r)));
  }, n) : (typeof e == "number" && (n = e), ei(function(i, r) {
    return Sd(i, r, t, n);
  }));
}
function Uo(t, e) {
  return yt(e) ? Wr(t, e, 1) : Wr(t, 1);
}
function Td(t) {
  return t <= 0 ? function() {
    return ad;
  } : ei(function(e, n) {
    var i = 0;
    e.subscribe(Qn(n, function(r) {
      ++i <= t && (n.next(r), t <= i && n.complete());
    }));
  });
}
function Ld(t, e, n) {
  var i = yt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return i ? ei(function(r, s) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var l = !0;
    r.subscribe(Qn(s, function(o) {
      var u;
      (u = i.next) === null || u === void 0 || u.call(i, o), s.next(o);
    }, function() {
      var o;
      l = !1, (o = i.complete) === null || o === void 0 || o.call(i), s.complete();
    }, function(o) {
      var u;
      l = !1, (u = i.error) === null || u === void 0 || u.call(i, o), s.error(o);
    }, function() {
      var o, u;
      l && ((o = i.unsubscribe) === null || o === void 0 || o.call(i)), (u = i.finalize) === null || u === void 0 || u.call(i);
    }));
  }) : yo;
}
function Bo(t) {
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
var Od = /* @__PURE__ */ function() {
  function t(e, n, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = n, this.request = i, this.type = r;
    var s = n.status, a = n.responseType;
    this.status = s ?? 0, this.responseType = a ?? "";
    var l = n.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(c, f) {
      var d = f.indexOf(": ");
      return c[f.slice(0, d)] = f.slice(d + 2), c;
    }, {}) : {}, this.response = Bo(n);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return t;
}(), Hi = Io(function(t) {
  return function(n, i, r) {
    this.message = n, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var s;
    try {
      s = Bo(i);
    } catch {
      s = i.responseText;
    }
    this.response = s;
  };
}), Rd = function() {
  function t(e, n) {
    return Hi.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Hi.prototype), t;
}();
function Md(t, e) {
  return vn({ method: "GET", url: t, headers: e });
}
function Dd(t, e, n) {
  return vn({ method: "POST", url: t, body: e, headers: n });
}
function kd(t, e) {
  return vn({ method: "DELETE", url: t, headers: e });
}
function Nd(t, e, n) {
  return vn({ method: "PUT", url: t, body: e, headers: n });
}
function Pd(t, e, n) {
  return vn({ method: "PATCH", url: t, body: e, headers: n });
}
var Hd = Ft(function(t) {
  return t.response;
});
function Fd(t, e) {
  return Hd(vn({
    method: "GET",
    url: t,
    headers: e
  }));
}
var vn = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Ud(n);
  };
  return t.get = Md, t.post = Dd, t.delete = kd, t.put = Nd, t.patch = Pd, t.getJSON = Fd, t;
}(), wd = "upload", Fs = "download", Ar = "loadstart", Er = "progress", ws = "load";
function Ud(t) {
  return new Qt(function(e) {
    var n, i, r = ce({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), s = r.queryParams, a = r.body, l = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (s) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(s).forEach(function(K, k) {
          return u.set(k, K);
        }), o = c[0] + "?" + u;
      } else
        u = new URLSearchParams(s), o = o + "?" + u;
    }
    var f = {};
    if (l)
      for (var d in l)
        l.hasOwnProperty(d) && (f[d.toLowerCase()] = l[d]);
    var h = r.crossDomain;
    !h && !("x-requested-with" in f) && (f["x-requested-with"] = "XMLHttpRequest");
    var m = r.withCredentials, g = r.xsrfCookieName, p = r.xsrfHeaderName;
    if ((m || !h) && g && p) {
      var A = (i = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && i !== void 0 ? i : "";
      A && (f[p] = A);
    }
    var _ = Bd(a, f), S = ce(ce({}, r), {
      url: o,
      headers: f,
      body: _
    }), C;
    C = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var M = t.progressSubscriber, D = t.includeDownloadProgress, b = D === void 0 ? !1 : D, O = t.includeUploadProgress, w = O === void 0 ? !1 : O, y = function(K, k) {
        C.addEventListener(K, function() {
          var R, V = k();
          (R = M == null ? void 0 : M.error) === null || R === void 0 || R.call(M, V), e.error(V);
        });
      };
      y("timeout", function() {
        return new Rd(C, S);
      }), y("abort", function() {
        return new Hi("aborted", C, S);
      });
      var v = function(K, k) {
        return new Od(k, C, S, K + "_" + k.type);
      }, I = function(K, k, R) {
        K.addEventListener(k, function(V) {
          e.next(v(R, V));
        });
      };
      w && [Ar, Er, ws].forEach(function(K) {
        return I(C.upload, K, wd);
      }), M && [Ar, Er].forEach(function(K) {
        return C.upload.addEventListener(K, function(k) {
          var R;
          return (R = M == null ? void 0 : M.next) === null || R === void 0 ? void 0 : R.call(M, k);
        });
      }), b && [Ar, Er].forEach(function(K) {
        return I(C, K, Fs);
      });
      var T = function(K) {
        var k = "ajax error" + (K ? " " + K : "");
        e.error(new Hi(k, C, S));
      };
      C.addEventListener("error", function(K) {
        var k;
        (k = M == null ? void 0 : M.error) === null || k === void 0 || k.call(M, K), T();
      }), C.addEventListener(ws, function(K) {
        var k, R, V = C.status;
        if (V < 400) {
          (k = M == null ? void 0 : M.complete) === null || k === void 0 || k.call(M);
          var ue = void 0;
          try {
            ue = v(Fs, K);
          } catch (Ne) {
            e.error(Ne);
            return;
          }
          e.next(ue), e.complete();
        } else
          (R = M == null ? void 0 : M.error) === null || R === void 0 || R.call(M, K), T(V);
      });
    }
    var N = S.user, q = S.method, j = S.async;
    N ? C.open(q, o, j, N, S.password) : C.open(q, o, j), j && (C.timeout = S.timeout, C.responseType = S.responseType), "withCredentials" in C && (C.withCredentials = S.withCredentials);
    for (var d in f)
      f.hasOwnProperty(d) && C.setRequestHeader(d, f[d]);
    return _ ? C.send(_) : C.send(), function() {
      C && C.readyState !== 4 && C.abort();
    };
  });
}
function Bd(t, e) {
  var n;
  if (!t || typeof t == "string" || zd(t) || Kd(t) || Gd(t) || jd(t) || qd(t) || Xd(t))
    return t;
  if (Wd(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Vd = Object.prototype.toString;
function ss(t, e) {
  return Vd.call(t) === "[object " + e + "]";
}
function Gd(t) {
  return ss(t, "ArrayBuffer");
}
function jd(t) {
  return ss(t, "File");
}
function qd(t) {
  return ss(t, "Blob");
}
function Wd(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function zd(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Kd(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Xd(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let Yd = class {
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
};
const Zd = new Yd("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Qd = [Zd], Jd = Qd[0].getUrl();
let Vo = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Jd;
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
}, xd = class {
  constructor(e = new Vo()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(n), i;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((i) => ({ pre: i }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: n, query: i, method: r, headers: s, body: a, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${i && Object.keys(i).length ? `?${$d(i)}` : ""}`,
      method: r,
      headers: s,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => wo(n).pipe(
      Ft((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      Uo(
        (i) => vn(i).pipe(
          Ft((r) => (this.middleware.filter((s) => s.post).forEach((s) => r = s.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Ft((i) => {
        const { status: r, response: s } = i;
        if (r >= 200 && r < 300)
          return (n == null ? void 0 : n.response) === "raw" ? i : s;
        throw i;
      })
    );
  }
};
const Ln = (t) => encodeURIComponent(`${t}`), $d = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((i) => `${Ln(e)}=${Ln(i)}`).join("&") : `${Ln(e)}=${Ln(n)}`
).join("&"), Ei = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class eh extends xd {
  retrieveDataResourceByVersion({ id: e, version: n }, i) {
    Ei(e, "id", "retrieveDataResourceByVersion"), Ei(n, "version", "retrieveDataResourceByVersion");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Ln(e)).replace("{version}", Ln(n)),
      method: "GET",
      headers: r,
      responseType: "blob"
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ei(e, "id", "retrieveDataResourceHistory");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Ln(e)),
      method: "GET",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ei(e, "dataResourceSearch", "searchForResources");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: i,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class ls {
  constructor(e, n, i, r, s, a, l, o, u) {
    this.uuid = e, this.name = n, this.author = i, this.type = r, this.changedAt = s, this.version = a, this.available = l, this.deleted = o, this.location = u;
  }
  static from(e) {
    return new ls(
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
class th {
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
const nh = new th("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), ih = [nh], rh = ih[0].getUrl();
class Go {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? rh;
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
class sh {
  constructor(e = new Go()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(n), i;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((i) => ({ pre: i }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: n, query: i, method: r, headers: s, body: a, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${i && Object.keys(i).length ? `?${lh(i)}` : ""}`,
      method: r,
      headers: s,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => wo(n).pipe(
      Ft((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      Uo(
        (i) => vn(i).pipe(
          Ft((r) => (this.middleware.filter((s) => s.post).forEach((s) => r = s.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Ft((i) => {
        const { status: r, response: s } = i;
        if (r >= 200 && r < 300)
          return (n == null ? void 0 : n.response) === "raw" ? i : s;
        throw i;
      })
    );
  }
}
const Yt = (t) => encodeURIComponent(`${t}`), lh = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((i) => `${Yt(e)}=${Yt(i)}`).join("&") : `${Yt(e)}=${Yt(n)}`
).join("&"), nn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class ah extends sh {
  assignResourceToLocation({ locationId: e, uuid: n }, i) {
    nn(e, "locationId", "assignResourceToLocation"), nn(n, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Yt(e)).replace("{uuid}", Yt(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, n) {
    nn(e, "location", "createLocation");
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
    nn(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Yt(e)),
      method: "DELETE",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    nn(e, "locationId", "getLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Yt(e)),
      method: "GET",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: e, pageSize: n }, i) {
    const r = {}, s = {};
    return e != null && (s.page = e), n != null && (s.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: r,
      query: s
    }, i == null ? void 0 : i.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: n }, i) {
    nn(e, "locationId", "unassignResourceFromLocation"), nn(n, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Yt(e)).replace("{uuid}", Yt(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, i) {
    nn(e, "locationId", "updateLocation"), nn(n, "location", "updateLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Yt(e)),
      method: "PUT",
      headers: r,
      body: n
    }, i == null ? void 0 : i.responseOpts);
  }
}
class as {
  constructor(e, n, i, r, s) {
    this.uuid = s, this.key = e, this.name = n, this.description = i, this.assignedResources = r;
  }
  static from(e) {
    return new as(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class Un {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Un.instance || (Un.instance = new Un()), Un.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      Ft((n) => n || []),
      Ft((n) => n.map((i) => as.from(i)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(Ft(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(Ft(() => {
    }));
  }
  searchResources(e) {
    return console.log(e), this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Ft((n) => (console.log(n), n.results)),
      Ft(
        (n) => n.map((i) => ls.from(i))
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
    const n = new Go({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new ah(n);
  }
  createHistoryApiClient(e) {
    const n = new Vo({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new eh(n);
  }
}
var un;
class Us {
  constructor() {
    ps(this, un, Tt([]));
  }
  get store() {
    return An(this, un);
  }
  set(e) {
    An(this, un).set(e);
  }
  update(e) {
    An(this, un).update((n) => n.map((i) => i.uuid === e.uuid ? e : i));
  }
  add(e) {
    An(this, un).update((n) => [...n, e]);
  }
  remove(e) {
    An(this, un).update((n) => n.filter((i) => i.uuid !== e));
  }
  findById(e) {
    return fu(An(this, un)).find((n) => n.uuid === e);
  }
}
un = new WeakMap();
function oh(t, e = {}) {
  const n = e.priority || "polite", i = e.ownerDocument || document, r = i.querySelectorAll("[data-smui-dom-announce]");
  r.length && r.forEach((a) => {
    var l;
    (l = a.parentNode) === null || l === void 0 || l.removeChild(a);
  });
  const s = i.createElement("div");
  s.style.position = "absolute", s.style.top = "-9999px", s.style.left = "-9999px", s.style.height = "1px", s.style.overflow = "hidden", s.setAttribute("aria-atomic", "true"), s.setAttribute("aria-live", n), s.setAttribute("data-mdc-dom-announce", "true"), s.setAttribute("data-smui-dom-announce", "true"), i.body.appendChild(s), window.setTimeout(() => {
    s.textContent = t;
    const a = () => {
      s.textContent = "", s.removeEventListener("click", a);
    };
    s.addEventListener("click", a, { once: !0 });
  }, 100);
}
function re(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function _e(t, e, n, i = { bubbles: !0 }, r = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dipatch event without element.");
  const s = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: n }));
  if (t == null || t.dispatchEvent(s), r && e.startsWith("SMUI")) {
    const a = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: n }));
    t == null || t.dispatchEvent(a), a.defaultPrevented && s.preventDefault();
  }
  return s;
}
function $t(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const s = n[r], a = s.indexOf("$");
    a !== -1 && e.indexOf(s.substring(0, a + 1)) !== -1 || e.indexOf(s) === -1 && (i[s] = t[s]);
  }
  return i;
}
const Bs = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, uh = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function rt(t) {
  let e, n = [];
  t.$on = (r, s) => {
    let a = r, l = () => {
    };
    return e ? l = e(a, s) : n.push([a, s]), a.match(Bs) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
      l();
    };
  };
  function i(r) {
    const s = t.$$.callbacks[r.type];
    s && s.slice().forEach((a) => a.call(this, r));
  }
  return (r) => {
    const s = [], a = {};
    e = (l, o) => {
      let u = l, c = o, f = !1;
      const d = u.match(Bs), h = u.match(uh), m = d || h;
      if (u.match(/^SMUI:\w+:/)) {
        const A = u.split(":");
        let _ = "";
        for (let S = 0; S < A.length; S++)
          _ += S === A.length - 1 ? ":" + A[S] : A[S].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${_.split("$")[0]}.`), u = _;
      }
      if (m) {
        const A = u.split(d ? ":" : "$");
        u = A[0];
        const _ = A.slice(1).reduce((S, C) => (S[C] = !0, S), {});
        _.passive && (f = f || {}, f.passive = !0), _.nonpassive && (f = f || {}, f.passive = !1), _.capture && (f = f || {}, f.capture = !0), _.once && (f = f || {}, f.once = !0), _.preventDefault && (c = ch(c)), _.stopPropagation && (c = fh(c)), _.stopImmediatePropagation && (c = dh(c)), _.self && (c = hh(r, c)), _.trusted && (c = mh(c));
      }
      const g = Vs(r, u, c, f), p = () => {
        g();
        const A = s.indexOf(p);
        A > -1 && s.splice(A, 1);
      };
      return s.push(p), u in a || (a[u] = Vs(r, u, i)), p;
    };
    for (let l = 0; l < n.length; l++)
      e(n[l][0], n[l][1]);
    return {
      destroy: () => {
        for (let l = 0; l < s.length; l++)
          s[l]();
        for (let l of Object.entries(a))
          l[1]();
      }
    };
  };
}
function Vs(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ch(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function fh(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function dh(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function hh(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function mh(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function Ge(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    s.substring(0, e.length) === e && (i[s.substring(e.length)] = t[s]);
  }
  return i;
}
function xe(t, e) {
  let n = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i], s = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? n.push(s(t, r[1])) : n.push(s(t));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const s = n[r];
          if (s && s.update) {
            const a = i[r];
            Array.isArray(a) && a.length > 1 ? s.update(a[1]) : s.update();
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
var yi;
function jo(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = yi;
  if (typeof yi == "boolean" && !e)
    return yi;
  var r = n && typeof n.supports == "function";
  if (!r)
    return !1;
  var s = n.supports("--css-vars", "yes"), a = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = s || a, e || (yi = i), i;
}
function ph(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, s = i + n.left, a = r + n.top, l, o;
  if (t.type === "touchstart") {
    var u = t;
    l = u.changedTouches[0].pageX - s, o = u.changedTouches[0].pageY - a;
  } else {
    var c = t;
    l = c.pageX - s, o = c.pageY - a;
  }
  return { x: l, y: o };
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
var Ot = (
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
var Bi = (
  /** @class */
  function() {
    function t(e, n) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, bn([], Kn(i))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Ot({}));
    }, t.prototype.initialize = function() {
    }, t.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    }, t.prototype.initialSyncWithDOM = function() {
    }, t.prototype.destroy = function() {
      this.foundation.destroy();
    }, t.prototype.listen = function(e, n, i) {
      this.root.addEventListener(e, n, i);
    }, t.prototype.unlisten = function(e, n, i) {
      this.root.removeEventListener(e, n, i);
    }, t.prototype.emit = function(e, n, i) {
      i === void 0 && (i = !1);
      var r;
      typeof CustomEvent == "function" ? r = new CustomEvent(e, {
        bubbles: i,
        detail: n
      }) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, i, !1, n)), this.root.dispatchEvent(r);
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
function oi(t) {
  return t === void 0 && (t = window), gh(t) ? { passive: !0 } : !1;
}
function gh(t) {
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
const qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: oi
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
function bh(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (os(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function os(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function _h(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: bh,
  estimateScrollWidth: _h,
  matches: os
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
var vh = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ih = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Gs = {
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
var js = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], qs = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ci = [], Gi = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return vh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ih;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gs;
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
        var r = e.cssClasses, s = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(s), n.adapter.isUnbounded() && (n.adapter.addClass(a), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(r), n.adapter.removeClass(s), n.removeCssVars();
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
          for (var s = Lt(js), a = s.next(); !a.done; a = s.next()) {
            var l = a.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            a && !a.done && (r = s.return) && r.call(s);
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
          for (var s = Lt(qs), a = s.next(); !a.done; a = s.next()) {
            var l = a.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            a && !a.done && (r = s.return) && r.call(s);
          } finally {
            if (i)
              throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var r = Lt(js), s = r.next(); !s.done; s = r.next()) {
          var a = s.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          s && !s.done && (i = r.return) && i.call(r);
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
        for (var r = Lt(qs), s = r.next(); !s.done; s = r.next()) {
          var a = s.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          s && !s.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(s) {
        s.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(i[s], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var s = this.previousActivationEvent, a = s && n !== void 0 && s.type !== n.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = n === void 0, r.activationEvent = n, r.wasActivatedByPointer = r.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var l = n !== void 0 && Ci.length > 0 && Ci.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ci.push(n.target), this.registerDeactivationHandlers(n)), r.wasElementMadeActive = this.checkElementMadeActive(n), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ci = [], !r.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(n), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, s = i.VAR_FG_TRANSLATE_END, a = e.cssClasses, l = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), h = d.startPoint, m = d.endPoint;
        c = h.x + "px, " + h.y + "px", f = m.x + "px, " + m.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(s, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, r = n.wasActivatedByPointer, s;
      r ? s = ph(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, s = {
        x: s.x - this.initialSize / 2,
        y: s.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: s, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, s = r.hasDeactivationUXRun, a = r.isActivated, l = s || !a;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(i);
      }, Gs.FG_DEACTIVATION_MS));
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
        var r = ce({}, i);
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
        var a = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var s = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && s % 2 !== 0 ? this.initialSize = s - 1 : this.initialSize = s, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, i = n.VAR_FG_SIZE, r = n.VAR_LEFT, s = n.VAR_TOP, a = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
    }, e;
  }(Ot)
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
var Fi = (
  /** @class */
  function(t) {
    ot(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.disabled = !1, n;
    }
    return e.attachTo = function(n, i) {
      i === void 0 && (i = {
        isUnbounded: void 0
      });
      var r = new e(n);
      return i.isUnbounded !== void 0 && (r.unbounded = i.isUnbounded), r;
    }, e.createAdapter = function(n) {
      return {
        addClass: function(i) {
          return n.root.classList.add(i);
        },
        browserSupportsCssVars: function() {
          return jo(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return n.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, oi());
        },
        deregisterInteractionHandler: function(i, r) {
          return n.root.removeEventListener(i, r, oi());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return os(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, oi());
        },
        registerInteractionHandler: function(i, r) {
          return n.root.addEventListener(i, r, oi());
        },
        registerResizeHandler: function(i) {
          return window.addEventListener("resize", i);
        },
        removeClass: function(i) {
          return n.root.classList.remove(i);
        },
        updateCssVariable: function(i, r) {
          return n.root.style.setProperty(i, r);
        }
      };
    }, Object.defineProperty(e.prototype, "unbounded", {
      get: function() {
        return !!this.isUnbounded;
      },
      set: function(n) {
        this.isUnbounded = !!n, this.setUnbounded();
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
      return new Gi(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(Bi)
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
}, Pt = /* @__PURE__ */ new Set();
Pt.add(we.BACKSPACE);
Pt.add(we.ENTER);
Pt.add(we.SPACEBAR);
Pt.add(we.PAGE_UP);
Pt.add(we.PAGE_DOWN);
Pt.add(we.END);
Pt.add(we.HOME);
Pt.add(we.ARROW_LEFT);
Pt.add(we.ARROW_UP);
Pt.add(we.ARROW_RIGHT);
Pt.add(we.ARROW_DOWN);
Pt.add(we.DELETE);
Pt.add(we.ESCAPE);
Pt.add(we.TAB);
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
}, Ht = /* @__PURE__ */ new Map();
Ht.set(Ut.BACKSPACE, we.BACKSPACE);
Ht.set(Ut.ENTER, we.ENTER);
Ht.set(Ut.SPACEBAR, we.SPACEBAR);
Ht.set(Ut.PAGE_UP, we.PAGE_UP);
Ht.set(Ut.PAGE_DOWN, we.PAGE_DOWN);
Ht.set(Ut.END, we.END);
Ht.set(Ut.HOME, we.HOME);
Ht.set(Ut.ARROW_LEFT, we.ARROW_LEFT);
Ht.set(Ut.ARROW_UP, we.ARROW_UP);
Ht.set(Ut.ARROW_RIGHT, we.ARROW_RIGHT);
Ht.set(Ut.ARROW_DOWN, we.ARROW_DOWN);
Ht.set(Ut.DELETE, we.DELETE);
Ht.set(Ut.ESCAPE, we.ESCAPE);
Ht.set(Ut.TAB, we.TAB);
var fn = /* @__PURE__ */ new Set();
fn.add(we.PAGE_UP);
fn.add(we.PAGE_DOWN);
fn.add(we.END);
fn.add(we.HOME);
fn.add(we.ARROW_LEFT);
fn.add(we.ARROW_UP);
fn.add(we.ARROW_RIGHT);
fn.add(we.ARROW_DOWN);
function vt(t) {
  var e = t.key;
  if (Pt.has(e))
    return e;
  var n = Ht.get(t.keyCode);
  return n || we.UNKNOWN;
}
function Ah(t) {
  return fn.has(vt(t));
}
const { applyPassive: Si } = qo, { matches: Eh } = Vi;
function Dt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: r = !1, color: s, active: a, rippleElement: l, eventTarget: o, activeTarget: u, addClass: c = (m) => t.classList.add(m), removeClass: f = (m) => t.classList.remove(m), addStyle: d = (m, g) => t.style.setProperty(m, g), initPromise: h = Promise.resolve() } = {}) {
  let m, g = ze("SMUI:addLayoutListener"), p, A = a, _ = o, S = u;
  function C() {
    n ? (c("mdc-ripple-surface"), s === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : s === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), m && A !== a && (A = a, a ? m.activate() : a === !1 && m.deactivate()), e && !m ? (m = new Gi({
      addClass: c,
      browserSupportsCssVars: () => jo(window),
      computeBoundingRect: () => (l || t).getBoundingClientRect(),
      containsEventTarget: (D) => t.contains(D),
      deregisterDocumentInteractionHandler: (D, b) => document.documentElement.removeEventListener(D, b, Si()),
      deregisterInteractionHandler: (D, b) => (o || t).removeEventListener(D, b, Si()),
      deregisterResizeHandler: (D) => window.removeEventListener("resize", D),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? Eh(u || t, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (D, b) => document.documentElement.addEventListener(D, b, Si()),
      registerInteractionHandler: (D, b) => (o || t).addEventListener(D, b, Si()),
      registerResizeHandler: (D) => window.addEventListener("resize", D),
      removeClass: f,
      updateCssVariable: d
    }), h.then(() => {
      m && (m.init(), m.setUnbounded(i));
    })) : m && !e && h.then(() => {
      m && (m.destroy(), m = void 0);
    }), m && (_ !== o || S !== u) && (_ = o, S = u, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  C(), g && (p = g(M));
  function M() {
    m && m.layout();
  }
  return {
    update(D) {
      ({
        ripple: e,
        surface: n,
        unbounded: i,
        disabled: r,
        color: s,
        active: a,
        rippleElement: l,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (b) => t.classList.add(b), removeClass: (b) => t.classList.remove(b), addStyle: (b, O) => t.style.setProperty(b, O), initPromise: Promise.resolve() }, D)), C();
    },
    destroy() {
      m && (m.destroy(), m = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function yh(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      4096) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? Oe(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ch(t) {
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
      class: re({
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
  var s = (
    /*component*/
    t[2]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [yh] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = X(u, me(r, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        l[3]
      ) },
      o & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          l[5],
          .../*use*/
          l[0]
        ]
      },
      o & /*className, context*/
      66 && {
        class: re({
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
      o & /*context*/
      64 && Te(
        /*context*/
        l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        l[7]
      ) },
      o & /*$$restProps*/
      256 && Te(
        /*$$restProps*/
        l[8]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[11](e)), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(l, o) {
      e && $(e, l, o), B(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[11](e), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? me(r, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            l[3]
          ) },
          o & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              l[5],
              .../*use*/
              l[0]
            ]
          },
          o & /*className, context*/
          66 && {
            class: re({
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
          o & /*context*/
          64 && Te(
            /*context*/
            l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            l[7]
          ) },
          o & /*$$restProps*/
          256 && Te(
            /*$$restProps*/
            l[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && E(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[11](null), e && ee(e, l);
    }
  };
}
function Sh(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: f = wt } = e, { tag: d = f === wt ? "span" : void 0 } = e;
  const h = ze("SMUI:label:context"), m = ze("SMUI:label:tabindex");
  function g() {
    return c.getElement();
  }
  function p(A) {
    le[A ? "unshift" : "push"](() => {
      c = A, n(4, c);
    });
  }
  return t.$$set = (A) => {
    e = X(X({}, e), it(A)), n(8, r = pe(e, i)), "use" in A && n(0, o = A.use), "class" in A && n(1, u = A.class), "component" in A && n(2, f = A.component), "tag" in A && n(3, d = A.tag), "$$scope" in A && n(12, a = A.$$scope);
  }, [
    o,
    u,
    f,
    d,
    c,
    l,
    h,
    m,
    r,
    g,
    s,
    p,
    a
  ];
}
class Th extends ke {
  constructor(e) {
    super(), De(this, e, Sh, Ch, ve, {
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
function Lh(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i, r = (
    /*tag*/
    t[1] && yr(t)
  );
  return {
    c() {
      r && r.c(), n = Ye();
    },
    m(s, a) {
      r && r.m(s, a), B(s, n, a), i = !0;
    },
    p(s, a) {
      /*tag*/
      s[1] ? e ? ve(
        e,
        /*tag*/
        s[1]
      ) ? (r.d(1), r = yr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : r.p(s, a) : (r = yr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      s[1]);
    },
    i(s) {
      i || (E(r, s), i = !0);
    },
    o(s) {
      L(r, s), i = !1;
    },
    d(s) {
      s && U(n), r && r.d(s);
    }
  };
}
function Oh(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i = (
    /*tag*/
    t[1] && Cr(t)
  );
  return {
    c() {
      i && i.c(), n = Ye();
    },
    m(r, s) {
      i && i.m(r, s), B(r, n, s);
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? ve(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Cr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : i.p(r, s) : (i = Cr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: Qe,
    o: Qe,
    d(r) {
      r && U(n), i && i.d(r);
    }
  };
}
function Rh(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Le(
    a,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let o = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = X(u, o[c]);
  return {
    c() {
      e = at("svg"), l && l.c(), bs(e, u);
    },
    m(c, f) {
      B(c, e, f), l && l.m(e, null), t[9](e), i = !0, r || (s = [
        de(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      l && l.p && (!i || f & /*$$scope*/
      128) && Re(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Oe(
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
      ), bs(e, u = me(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (E(l, c), i = !0);
    },
    o(c) {
      L(l, c), i = !1;
    },
    d(c) {
      c && U(e), l && l.d(c), t[9](null), r = !1, Ze(s);
    }
  };
}
function yr(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Le(
    a,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let o = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = X(u, o[c]);
  return {
    c() {
      e = x(
        /*tag*/
        t[1]
      ), l && l.c(), Mi(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(c, f) {
      B(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        de(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      l && l.p && (!i || f & /*$$scope*/
      128) && Re(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Oe(
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
      ), Mi(
        /*tag*/
        c[1]
      )(e, u = me(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (E(l, c), i = !0);
    },
    o(c) {
      L(l, c), i = !1;
    },
    d(c) {
      c && U(e), l && l.d(c), t[11](null), r = !1, Ze(s);
    }
  };
}
function Cr(t) {
  let e, n, i, r, s = [
    /*$$restProps*/
    t[5]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = X(a, s[l]);
  return {
    c() {
      e = x(
        /*tag*/
        t[1]
      ), Mi(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(l, o) {
      B(l, e, o), t[10](e), i || (r = [
        de(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], i = !0);
    },
    p(l, o) {
      Mi(
        /*tag*/
        l[1]
      )(e, a = me(s, [o & /*$$restProps*/
      32 && /*$$restProps*/
      l[5]])), n && ge(n.update) && o & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        l[0]
      );
    },
    d(l) {
      l && U(e), t[10](null), i = !1, Ze(r);
    }
  };
}
function Mh(t) {
  let e, n, i, r;
  const s = [Rh, Oh, Lh], a = [];
  function l(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function Dh(t, e, n) {
  let i;
  const r = ["use", "tag", "getElement"];
  let s = pe(e, r), { $$slots: a = {}, $$scope: l } = e, { use: o = [] } = e, { tag: u } = e;
  const c = rt($e());
  let f;
  function d() {
    return f;
  }
  function h(p) {
    le[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  function m(p) {
    le[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  function g(p) {
    le[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  return t.$$set = (p) => {
    e = X(X({}, e), it(p)), n(5, s = pe(e, r)), "use" in p && n(0, o = p.use), "tag" in p && n(1, u = p.tag), "$$scope" in p && n(7, l = p.$$scope);
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
    o,
    u,
    f,
    i,
    c,
    s,
    d,
    l,
    a,
    h,
    m,
    g
  ];
}
class wt extends ke {
  constructor(e) {
    super(), De(this, e, Dh, Mh, ve, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function kh(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, [s]) {
      i && i.p && (!e || s & /*$$scope*/
      8) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[3],
        e ? Oe(
          n,
          /*$$scope*/
          r[3],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Nh(t, e, n) {
  let i, { $$slots: r = {}, $$scope: s } = e, { key: a } = e, { value: l } = e;
  const o = Tt(l);
  return st(t, o, (u) => n(5, i = u)), We(a, o), en(() => {
    o.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, a = u.key), "value" in u && n(2, l = u.value), "$$scope" in u && n(3, s = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && jt(o, i = l, i);
  }, [o, a, l, s, r];
}
class Jn extends ke {
  constructor(e) {
    super(), De(this, e, Nh, kh, ve, { key: 1, value: 2 });
  }
}
function Ws(t) {
  let e;
  return {
    c() {
      e = x("div"), P(e, "class", "mdc-button__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function Ph(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[28].default
  ), a = Le(
    s,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let l = (
    /*touch*/
    t[6] && Ws()
  );
  return {
    c() {
      e = x("div"), n = oe(), a && a.c(), l && l.c(), i = Ye(), P(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      B(o, e, u), B(o, n, u), a && a.m(o, u), l && l.m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && Re(
        a,
        s,
        o,
        /*$$scope*/
        o[30],
        r ? Oe(
          s,
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
      o[6] ? l || (l = Ws(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (E(a, o), r = !0);
    },
    o(o) {
      L(a, o), r = !1;
    },
    d(o) {
      o && (U(e), U(n), U(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function Hh(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[10]
    ) },
    {
      use: [
        [
          Dt,
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
      class: re({
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
      ).map(Sr).concat([
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
  var s = (
    /*component*/
    t[9]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [Ph] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = X(u, me(r, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        l[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            Dt,
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
      o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: re({
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
      o[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          l[13]
        ).map(Sr).concat([
          /*style*/
          l[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Te(
        /*actionProp*/
        l[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Te(
        /*defaultProp*/
        l[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Te(
        /*secondaryProp*/
        l[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        l[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Te(
        /*$$restProps*/
        l[23]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[29](e), e.$on(
    "click",
    /*handleClick*/
    t[22]
  )), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(l, o) {
      e && $(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      512 && s !== (s = /*component*/
      l[9])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[29](e), e.$on(
          "click",
          /*handleClick*/
          l[22]
        ), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? me(r, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            l[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                Dt,
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
          o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: re({
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
          o[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              l[13]
            ).map(Sr).concat([
              /*style*/
              l[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Te(
            /*actionProp*/
            l[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Te(
            /*defaultProp*/
            l[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Te(
            /*secondaryProp*/
            l[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            l[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Te(
            /*$$restProps*/
            l[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && E(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[29](null), e && ee(e, l);
    }
  };
}
const Sr = ([t, e]) => `${t}: ${e};`;
function Fh(t, e, n) {
  let i, r, s;
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
  let l = pe(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = rt($e());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: g = "primary" } = e, { variant: p = "text" } = e, { touch: A = !1 } = e, { href: _ = void 0 } = e, { action: S = "close" } = e, { defaultAction: C = !1 } = e, { secondary: M = !1 } = e, D, b = {}, O = {}, w = ze("SMUI:button:context"), { component: y = wt } = e, { tag: v = y === wt ? _ == null ? "button" : "a" : void 0 } = e, I = l.disabled;
  We("SMUI:label:context", "button"), We("SMUI:icon:context", "button");
  function T(R) {
    b[R] || n(12, b[R] = !0, b);
  }
  function N(R) {
    (!(R in b) || b[R]) && n(12, b[R] = !1, b);
  }
  function q(R, V) {
    O[R] != V && (V === "" || V == null ? (delete O[R], n(13, O)) : n(13, O[R] = V, O));
  }
  function j() {
    w === "banner" && _e(K(), M ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function K() {
    return D.getElement();
  }
  function k(R) {
    le[R ? "unshift" : "push"](() => {
      D = R, n(11, D);
    });
  }
  return t.$$set = (R) => {
    n(31, e = X(X({}, e), it(R))), n(23, l = pe(e, a)), "use" in R && n(0, f = R.use), "class" in R && n(1, d = R.class), "style" in R && n(2, h = R.style), "ripple" in R && n(3, m = R.ripple), "color" in R && n(4, g = R.color), "variant" in R && n(5, p = R.variant), "touch" in R && n(6, A = R.touch), "href" in R && n(7, _ = R.href), "action" in R && n(24, S = R.action), "defaultAction" in R && n(25, C = R.defaultAction), "secondary" in R && n(8, M = R.secondary), "component" in R && n(9, y = R.component), "tag" in R && n(10, v = R.tag), "$$scope" in R && n(30, u = R.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = w === "dialog:action" && S != null ? { "data-mdc-dialog-action": S } : { action: e.action }), n(15, r = w === "dialog:action" && C ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, s = w === "banner" ? {} : { secondary: e.secondary }), I !== l.disabled) {
      if (D) {
        const R = K();
        "blur" in R && R.blur();
      }
      n(27, I = l.disabled);
    }
  }, e = it(e), [
    f,
    d,
    h,
    m,
    g,
    p,
    A,
    _,
    M,
    y,
    v,
    D,
    b,
    O,
    s,
    r,
    i,
    c,
    w,
    T,
    N,
    q,
    j,
    l,
    S,
    C,
    K,
    I,
    o,
    k,
    u
  ];
}
class wh extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Fh,
      Hh,
      ve,
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
function Uh(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      32) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[5],
        e ? Oe(
          n,
          /*$$scope*/
          r[5],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[5]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Bh(t) {
  let e, n;
  return e = new wh({
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
      $$slots: { default: [Uh] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    ge(
      /*callback*/
      t[0]()
    ) && t[0]().apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const s = {};
      r & /*variant*/
      4 && (s.variant = /*variant*/
      t[2]), r & /*disabled*/
      2 && (s.disabled = /*disabled*/
      t[1]), r & /*isAbortAction*/
      8 && (s.style = /*isAbortAction*/
      t[3] ? "background-color: #ff3e00;" : void 0), r & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Vh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: s = () => {
  } } = e, { disabled: a = !1 } = e, { variant: l = "default" } = e, { isAbortAction: o = !1 } = e;
  return t.$$set = (u) => {
    "callback" in u && n(0, s = u.callback), "disabled" in u && n(1, a = u.disabled), "variant" in u && n(2, l = u.variant), "isAbortAction" in u && n(3, o = u.isAbortAction), "$$scope" in u && n(5, r = u.$$scope);
  }, [s, a, l, o, i, r];
}
class us extends ke {
  constructor(e) {
    super(), De(this, e, Vh, Bh, ve, {
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
var Ti = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, rn = {
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
var Gh = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return rn;
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
      var n = this.adapter.getAttr(rn.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(rn.DATA_ARIA_LABEL_OFF);
      if (n && i) {
        if (this.adapter.getAttr(rn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(rn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ti.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ti.ICON_BUTTON_ON) : this.adapter.removeClass(Ti.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(rn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(rn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(rn.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(rn.ARIA_PRESSED, "" + n);
    }, e;
  }(Ot)
);
function zs(t) {
  let e;
  return {
    c() {
      e = x("div"), P(e, "class", "mdc-icon-button__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function jh(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[33].default
  ), a = Le(
    s,
    t,
    /*$$scope*/
    t[37],
    null
  );
  let l = (
    /*touch*/
    t[8] && zs()
  );
  return {
    c() {
      e = x("div"), n = oe(), a && a.c(), l && l.c(), i = Ye(), P(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      B(o, e, u), B(o, n, u), a && a.m(o, u), l && l.m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && Re(
        a,
        s,
        o,
        /*$$scope*/
        o[37],
        r ? Oe(
          s,
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
      o[8] ? l || (l = zs(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (E(a, o), r = !0);
    },
    o(o) {
      L(a, o), r = !1;
    },
    d(o) {
      o && (U(e), U(n), U(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function qh(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[14]
    ) },
    {
      use: [
        [
          Dt,
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
      class: re({
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
      ).map(Tr).concat([
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
  var s = (
    /*component*/
    t[13]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [jh] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = X(u, me(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        l[14]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            Dt,
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
      o[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: re({
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
      o[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          l[19]
        ).map(Tr).concat([
          /*style*/
          l[3]
        ]).join(" ")
      },
      o[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ l[23](
          /*pressed*/
          l[0]
        ) ? null : (
          /*pressed*/
          l[0] ? "true" : "false"
        )
      },
      o[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
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
      o[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          l[6]
        )
      },
      o[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          l[7]
        )
      },
      o[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          l[25]
        )
      },
      o[0] & /*href*/
      2048 && { href: (
        /*href*/
        l[11]
      ) },
      o[0] & /*actionProp*/
      2097152 && Te(
        /*actionProp*/
        l[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && Te(
        /*internalAttrs*/
        l[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Te(
        /*$$restProps*/
        l[29]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[34](e), e.$on(
    "click",
    /*click_handler*/
    t[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    t[36]
  )), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(l, o) {
      e && $(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[34](e), e.$on(
          "click",
          /*click_handler*/
          l[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          l[36]
        ), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? me(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            l[14]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                Dt,
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
          o[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: re({
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
          o[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              l[19]
            ).map(Tr).concat([
              /*style*/
              l[3]
            ]).join(" ")
          },
          o[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ l[23](
              /*pressed*/
              l[0]
            ) ? null : (
              /*pressed*/
              l[0] ? "true" : "false"
            )
          },
          o[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
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
          o[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              l[6]
            )
          },
          o[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              l[7]
            )
          },
          o[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              l[25]
            )
          },
          o[0] & /*href*/
          2048 && { href: (
            /*href*/
            l[11]
          ) },
          o[0] & /*actionProp*/
          2097152 && Te(
            /*actionProp*/
            l[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && Te(
            /*internalAttrs*/
            l[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Te(
            /*$$restProps*/
            l[29]
          )
        ]) : {};
        o[0] & /*touch*/
        256 | o[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && E(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[34](null), e && ee(e, l);
    }
  };
}
const Tr = ([t, e]) => `${t}: ${e};`;
function Wh(t, e, n) {
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
  let s = pe(e, r), { $$slots: a = {}, $$scope: l } = e;
  const o = rt($e());
  let u = () => {
  };
  function c(W) {
    return W === u;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: g = void 0 } = e, { toggle: p = !1 } = e, { pressed: A = u } = e, { ariaLabelOn: _ = void 0 } = e, { ariaLabelOff: S = void 0 } = e, { touch: C = !1 } = e, { displayFlex: M = !0 } = e, { size: D = "normal" } = e, { href: b = void 0 } = e, { action: O = void 0 } = e, w, y, v = {}, I = {}, T = {}, N = ze("SMUI:icon-button:context"), q = ze("SMUI:icon-button:aria-describedby"), { component: j = wt } = e, { tag: K = j === wt ? b == null ? "button" : "a" : void 0 } = e, k = s.disabled;
  We("SMUI:icon:context", "icon-button");
  let R = null;
  en(() => {
    y && y.destroy();
  });
  function V(W) {
    return W in v ? v[W] : Ee().classList.contains(W);
  }
  function ue(W) {
    v[W] || n(18, v[W] = !0, v);
  }
  function Ne(W) {
    (!(W in v) || v[W]) && n(18, v[W] = !1, v);
  }
  function Ie(W, qe) {
    I[W] != qe && (qe === "" || qe == null ? (delete I[W], n(19, I)) : n(19, I[W] = qe, I));
  }
  function Xe(W) {
    var qe;
    return W in T ? (qe = T[W]) !== null && qe !== void 0 ? qe : null : Ee().getAttribute(W);
  }
  function z(W, qe) {
    T[W] !== qe && n(20, T[W] = qe, T);
  }
  function J(W) {
    n(0, A = W.isOn);
  }
  function Ee() {
    return w.getElement();
  }
  function ye(W) {
    le[W ? "unshift" : "push"](() => {
      w = W, n(16, w);
    });
  }
  const He = () => y && y.handleClick(), ie = () => N === "top-app-bar:navigation" && _e(Ee(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (W) => {
    e = X(X({}, e), it(W)), n(29, s = pe(e, r)), "use" in W && n(1, f = W.use), "class" in W && n(2, d = W.class), "style" in W && n(3, h = W.style), "ripple" in W && n(4, m = W.ripple), "color" in W && n(5, g = W.color), "toggle" in W && n(30, p = W.toggle), "pressed" in W && n(0, A = W.pressed), "ariaLabelOn" in W && n(6, _ = W.ariaLabelOn), "ariaLabelOff" in W && n(7, S = W.ariaLabelOff), "touch" in W && n(8, C = W.touch), "displayFlex" in W && n(9, M = W.displayFlex), "size" in W && n(10, D = W.size), "href" in W && n(11, b = W.href), "action" in W && n(12, O = W.action), "component" in W && n(13, j = W.component), "tag" in W && n(14, K = W.tag), "$$scope" in W && n(37, l = W.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*action*/
    4096 && n(21, i = (() => {
      if (N === "data-table:pagination")
        switch (O) {
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
        return N === "dialog:header" || N === "dialog:sheet" ? { "data-mdc-dialog-action": O } : { action: O };
    })()), k !== s.disabled) {
      if (w) {
        const W = Ee();
        "blur" in W && W.blur();
      }
      n(31, k = s.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && w && Ee() && p !== R && (p && !y ? (n(17, y = new Gh({
      addClass: ue,
      hasClass: V,
      notifyChange: (W) => {
        J(W), _e(Ee(), "SMUIIconButtonToggle:change", W, void 0, !0);
      },
      removeClass: Ne,
      getAttr: Xe,
      setAttr: z
    })), y.init()) : !p && y && (y.destroy(), n(17, y = void 0), n(18, v = {}), n(20, T = {})), n(32, R = p)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && y && !c(A) && y.isOn() !== A && y.toggle(A);
  }, [
    A,
    f,
    d,
    h,
    m,
    g,
    _,
    S,
    C,
    M,
    D,
    b,
    O,
    j,
    K,
    Ee,
    w,
    y,
    v,
    I,
    T,
    i,
    o,
    c,
    N,
    q,
    ue,
    Ne,
    Ie,
    s,
    p,
    k,
    R,
    a,
    ye,
    He,
    ie,
    l
  ];
}
class zh extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Wh,
      qh,
      ve,
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
function Kh(t) {
  let e;
  return {
    c() {
      e = ut(
        /*icon*/
        t[1]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      2 && dt(
        e,
        /*icon*/
        n[1]
      );
    },
    i: Qe,
    o: Qe,
    d(n) {
      n && U(e);
    }
  };
}
function Xh(t) {
  let e, n, i;
  var r = (
    /*iconComponent*/
    t[2]
  );
  function s(a, l) {
    return {
      props: { svgStyles: (
        /*iconStyles*/
        a[3]
      ) }
    };
  }
  return r && (e = kt(r, s(t))), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(a, l) {
      e && $(e, a, l), B(a, n, l), i = !0;
    },
    p(a, l) {
      if (l & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Ue();
          const o = e;
          L(o.$$.fragment, 1, 0, () => {
            ee(o, 1);
          }), Be();
        }
        r ? (e = kt(r, s(a)), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (r) {
        const o = {};
        l & /*iconStyles*/
        8 && (o.svgStyles = /*iconStyles*/
        a[3]), e.$set(o);
      }
    },
    i(a) {
      i || (e && E(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && L(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && U(n), e && ee(e, a);
    }
  };
}
function Yh(t) {
  let e, n, i, r;
  const s = [Xh, Kh], a = [];
  function l(o, u) {
    return (
      /*iconComponent*/
      o[2] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function Zh(t) {
  let e, n;
  return e = new zh({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        t[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Yh] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    ge(
      /*callback*/
      t[0]
    ) && t[0].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const s = {};
      r & /*disabled*/
      16 && (s.disabled = /*disabled*/
      t[4]), r & /*$$scope, iconComponent, iconStyles, icon*/
      46 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Qh(t, e, n) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: s = null } = e, { iconStyles: a = "" } = e, { disabled: l = !1 } = e;
  return t.$$set = (o) => {
    "callback" in o && n(0, i = o.callback), "icon" in o && n(1, r = o.icon), "iconComponent" in o && n(2, s = o.iconComponent), "iconStyles" in o && n(3, a = o.iconStyles), "disabled" in o && n(4, l = o.disabled);
  }, [i, r, s, a, l];
}
class Jh extends ke {
  constructor(e) {
    super(), De(this, e, Qh, Zh, ve, {
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
var xh = {
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
var $h = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xh;
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
      var i = e.cssClasses, r = i.LABEL_FLOAT_ABOVE, s = i.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(s));
    }, e.prototype.setRequired = function(n) {
      var i = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(Ot)
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
var En = {
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
var em = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return En;
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
      this.adapter.removeClass(En.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(En.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(En.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this.adapter.hasClass(En.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && i && (this.adapter.removeClass(En.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(En.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Ot)
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
var tm = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ks = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, nm = {
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
var im = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return tm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ks;
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
      n > 0 && (n += Ks.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Ot)
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
var Lr = {
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
}, rm = {
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
}, Xs = {
  LABEL_SCALE: 0.75
}, sm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], lm = [
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
var Ys = ["mousedown", "touchstart"], Zs = ["click", "keydown"], am = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = i.helperText, r.characterCounter = i.characterCounter, r.leadingIcon = i.leadingIcon, r.trailingIcon = i.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(s) {
        r.setTransformOrigin(s);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(s) {
        r.handleValidationAttributeChange(s);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Xs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return lm.indexOf(n) >= 0;
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
      var n, i, r, s;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = Lt(Ys), l = a.next(); !l.done; l = a.next()) {
          var o = l.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          l && !l.done && (i = a.return) && i.call(a);
        } finally {
          if (n)
            throw n.error;
        }
      }
      try {
        for (var u = Lt(Zs), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        r = { error: f };
      } finally {
        try {
          c && !c.done && (s = u.return) && s.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, i, r, s;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = Lt(Ys), l = a.next(); !l.done; l = a.next()) {
          var o = l.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          l && !l.done && (i = a.return) && i.call(a);
        } finally {
          if (n)
            throw n.error;
        }
      }
      try {
        for (var u = Lt(Zs), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        r = { error: f };
      } finally {
        try {
          c && !c.done && (s = u.return) && s.call(u);
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
        return sm.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var i = this.adapter.getLabelWidth() * Xs.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = n.touches, r = i ? i[0] : n, s = r.target.getBoundingClientRect(), a = r.clientX - s.left;
        this.adapter.setLineRippleTransformOrigin(a);
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
        var s = this.helperText.isVisible(), a = this.helperText.getId();
        s && a ? this.adapter.setInputAttr(Lr.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Lr.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var i = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(n) {
      var i = e.cssClasses, r = i.DISABLED, s = i.INVALID;
      n ? (this.adapter.addClass(r), this.adapter.removeClass(s)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
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
  }(Ot)
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
var Qs = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, om = {
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
var Js = ["click", "keydown"], um = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Qs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return om;
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
        for (var r = Lt(Js), s = r.next(); !s.done; s = r.next()) {
          var a = s.value;
          this.adapter.registerInteractionHandler(a, this.interactionHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          s && !s.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.destroy = function() {
      var n, i;
      try {
        for (var r = Lt(Js), s = r.next(); !s.done; s = r.next()) {
          var a = s.value;
          this.adapter.deregisterInteractionHandler(a, this.interactionHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          s && !s.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Qs.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var i = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || i) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Ot)
);
function cm(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[22].default
  ), c = Le(
    u,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let f = [
    {
      class: n = re({
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
      ).map($s).concat([
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
  for (let h = 0; h < f.length; h += 1)
    d = X(d, f[h]);
  return {
    c() {
      e = x("label"), c && c.c(), fe(e, d);
    },
    m(h, m) {
      B(h, e, m), c && c.m(e, null), t[24](e), a = !0, l || (o = [
        de(s = xe.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        de(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], l = !0);
    },
    p(h, m) {
      c && c.p && (!a || m & /*$$scope*/
      2097152) && Re(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? Oe(
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
      ), fe(e, d = me(f, [
        (!a || m & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = re({
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
        }))) && { class: n },
        (!a || m & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          h[9]
        ).map($s).concat([
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
      ])), s && ge(s.update) && m & /*use*/
      4 && s.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      a || (E(c, h), a = !0);
    },
    o(h) {
      L(c, h), a = !1;
    },
    d(h) {
      h && U(e), c && c.d(h), t[24](null), l = !1, Ze(o);
    }
  };
}
function fm(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[22].default
  ), u = Le(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let c = [
    {
      class: n = re({
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
      ).map(xs).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    /*$$restProps*/
    t[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = X(f, c[d]);
  return {
    c() {
      e = x("span"), u && u.c(), fe(e, f);
    },
    m(d, h) {
      B(d, e, h), u && u.m(e, null), t[23](e), s = !0, a || (l = [
        de(r = xe.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        de(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], a = !0);
    },
    p(d, h) {
      u && u.p && (!s || h & /*$$scope*/
      2097152) && Re(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        s ? Oe(
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
      ), fe(e, f = me(c, [
        (!s || h & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = re({
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
        (!s || h & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(xs).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), r && ge(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      s || (E(u, d), s = !0);
    },
    o(d) {
      L(u, d), s = !1;
    },
    d(d) {
      d && U(e), u && u.d(d), t[23](null), a = !1, Ze(l);
    }
  };
}
function dm(t) {
  let e, n, i, r;
  const s = [fm, cm], a = [];
  function l(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
const xs = ([t, e]) => `${t}: ${e};`, $s = ([t, e]) => `${t}: ${e};`;
function hm(t, e, n) {
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
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l;
  const o = rt($e());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: h = !1 } = e, { required: m = !1 } = e, { wrapped: g = !1 } = e, p, A, _ = {}, S = {}, C = (l = ze("SMUI:generic:input:props")) !== null && l !== void 0 ? l : {}, M = h, D = m;
  ct(() => {
    n(18, A = new $h({
      addClass: b,
      removeClass: O,
      getWidth: () => {
        var R, V;
        const ue = q(), Ne = ue.cloneNode(!0);
        (R = ue.parentNode) === null || R === void 0 || R.appendChild(Ne), Ne.classList.add("smui-floating-label--remove-transition"), Ne.classList.add("smui-floating-label--force-size"), Ne.classList.remove("mdc-floating-label--float-above");
        const Ie = Ne.scrollWidth;
        return (V = ue.parentNode) === null || V === void 0 || V.removeChild(Ne), Ie;
      },
      registerInteractionHandler: (R, V) => q().addEventListener(R, V),
      deregisterInteractionHandler: (R, V) => q().removeEventListener(R, V)
    }));
    const k = {
      get element() {
        return q();
      },
      addStyle: w,
      removeStyle: y
    };
    return _e(p, "SMUIFloatingLabel:mount", k), A.init(), () => {
      _e(p, "SMUIFloatingLabel:unmount", k), A.destroy();
    };
  });
  function b(k) {
    _[k] || n(8, _[k] = !0, _);
  }
  function O(k) {
    (!(k in _) || _[k]) && n(8, _[k] = !1, _);
  }
  function w(k, R) {
    S[k] != R && (R === "" || R == null ? (delete S[k], n(9, S)) : n(9, S[k] = R, S));
  }
  function y(k) {
    k in S && (delete S[k], n(9, S));
  }
  function v(k) {
    A.shake(k);
  }
  function I(k) {
    n(0, h = k);
  }
  function T(k) {
    n(1, m = k);
  }
  function N() {
    return A.getWidth();
  }
  function q() {
    return p;
  }
  function j(k) {
    le[k ? "unshift" : "push"](() => {
      p = k, n(7, p);
    });
  }
  function K(k) {
    le[k ? "unshift" : "push"](() => {
      p = k, n(7, p);
    });
  }
  return t.$$set = (k) => {
    e = X(X({}, e), it(k)), n(12, r = pe(e, i)), "use" in k && n(2, u = k.use), "class" in k && n(3, c = k.class), "style" in k && n(4, f = k.style), "for" in k && n(5, d = k.for), "floatAbove" in k && n(0, h = k.floatAbove), "required" in k && n(1, m = k.required), "wrapped" in k && n(6, g = k.wrapped), "$$scope" in k && n(21, a = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && A && M !== h && (n(19, M = h), A.float(h)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && A && D !== m && (n(20, D = m), A.setRequired(m));
  }, [
    h,
    m,
    u,
    c,
    f,
    d,
    g,
    p,
    _,
    S,
    o,
    C,
    r,
    v,
    I,
    T,
    N,
    q,
    A,
    M,
    D,
    a,
    s,
    j,
    K
  ];
}
class ji extends ke {
  constructor(e) {
    super(), De(this, e, hm, dm, ve, {
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
function mm(t) {
  let e, n, i, r, s, a, l = [
    {
      class: n = re({
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
      ).map(el).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*$$restProps*/
    t[8]
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = X(o, l[u]);
  return {
    c() {
      e = x("div"), fe(e, o);
    },
    m(u, c) {
      B(u, e, c), t[13](e), s || (a = [
        de(r = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[7].call(null, e)
        )
      ], s = !0);
    },
    p(u, [c]) {
      fe(e, o = me(l, [
        c & /*className, active, internalClasses*/
        42 && n !== (n = re({
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
        c & /*internalStyles, style*/
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(el).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && ge(r.update) && c & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Qe,
    o: Qe,
    d(u) {
      u && U(e), t[13](null), s = !1, Ze(a);
    }
  };
}
const el = ([t, e]) => `${t}: ${e};`;
function pm(t, e, n) {
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
  let r = pe(e, i);
  const s = rt($e());
  let { use: a = [] } = e, { class: l = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, h = {};
  ct(() => (f = new em({
    addClass: g,
    removeClass: p,
    hasClass: m,
    setStyle: A,
    registerEventHandler: (b, O) => M().addEventListener(b, O),
    deregisterEventHandler: (b, O) => M().removeEventListener(b, O)
  }), f.init(), () => {
    f.destroy();
  }));
  function m(b) {
    return b in d ? d[b] : M().classList.contains(b);
  }
  function g(b) {
    d[b] || n(5, d[b] = !0, d);
  }
  function p(b) {
    (!(b in d) || d[b]) && n(5, d[b] = !1, d);
  }
  function A(b, O) {
    h[b] != O && (O === "" || O == null ? (delete h[b], n(6, h)) : n(6, h[b] = O, h));
  }
  function _() {
    f.activate();
  }
  function S() {
    f.deactivate();
  }
  function C(b) {
    f.setRippleCenter(b);
  }
  function M() {
    return c;
  }
  function D(b) {
    le[b ? "unshift" : "push"](() => {
      c = b, n(4, c);
    });
  }
  return t.$$set = (b) => {
    e = X(X({}, e), it(b)), n(8, r = pe(e, i)), "use" in b && n(0, a = b.use), "class" in b && n(1, l = b.class), "style" in b && n(2, o = b.style), "active" in b && n(3, u = b.active);
  }, [
    a,
    l,
    o,
    u,
    c,
    d,
    h,
    s,
    r,
    _,
    S,
    C,
    M,
    D
  ];
}
class Wo extends ke {
  constructor(e) {
    super(), De(this, e, pm, mm, ve, {
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
function tl(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[15].default
  ), s = Le(
    r,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = x("div"), s && s.c(), P(e, "class", "mdc-notched-outline__notch"), P(e, "style", n = Object.entries(
        /*notchStyles*/
        t[7]
      ).map(nl).join(" "));
    },
    m(a, l) {
      B(a, e, l), s && s.m(e, null), i = !0;
    },
    p(a, l) {
      s && s.p && (!i || l & /*$$scope*/
      16384) && Re(
        s,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? Oe(
          r,
          /*$$scope*/
          a[14],
          l,
          null
        ) : Me(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || l & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(nl).join(" "))) && P(e, "style", n);
    },
    i(a) {
      i || (E(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(e), s && s.d(a);
    }
  };
}
function gm(t) {
  let e, n, i, r, s, a, l, o, u, c, f = !/*noLabel*/
  t[3] && tl(t), d = [
    {
      class: a = re({
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
  ], h = {};
  for (let m = 0; m < d.length; m += 1)
    h = X(h, d[m]);
  return {
    c() {
      e = x("div"), n = x("div"), i = oe(), f && f.c(), r = oe(), s = x("div"), P(n, "class", "mdc-notched-outline__leading"), P(s, "class", "mdc-notched-outline__trailing"), fe(e, h);
    },
    m(m, g) {
      B(m, e, g), Z(e, n), Z(e, i), f && f.m(e, null), Z(e, r), Z(e, s), t[16](e), o = !0, u || (c = [
        de(l = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[8].call(null, e)
        ),
        he(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          t[9]
        ),
        he(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          t[17]
        )
      ], u = !0);
    },
    p(m, [g]) {
      /*noLabel*/
      m[3] ? f && (Ue(), L(f, 1, 1, () => {
        f = null;
      }), Be()) : f ? (f.p(m, g), g & /*noLabel*/
      8 && E(f, 1)) : (f = tl(m), f.c(), E(f, 1), f.m(e, r)), fe(e, h = me(d, [
        (!o || g & /*className, notched, noLabel, internalClasses*/
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
        g & /*$$restProps*/
        1024 && /*$$restProps*/
        m[10]
      ])), l && ge(l.update) && g & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (E(f), o = !0);
    },
    o(m) {
      L(f), o = !1;
    },
    d(m) {
      m && U(e), f && f.d(), t[16](null), u = !1, Ze(c);
    }
  };
}
const nl = ([t, e]) => `${t}: ${e};`;
function bm(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, h, m, g = {}, p = {};
  ct(() => (h = new im({
    addClass: _,
    removeClass: S,
    setNotchWidthProperty: (v) => C("width", v + "px"),
    removeNotchWidthProperty: () => M("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function A(v) {
    n(4, m = v.detail);
  }
  function _(v) {
    g[v] || n(6, g[v] = !0, g);
  }
  function S(v) {
    (!(v in g) || g[v]) && n(6, g[v] = !1, g);
  }
  function C(v, I) {
    p[v] != I && (I === "" || I == null ? (delete p[v], n(7, p)) : n(7, p[v] = I, p));
  }
  function M(v) {
    v in p && (delete p[v], n(7, p));
  }
  function D(v) {
    h.notch(v);
  }
  function b() {
    h.closeNotch();
  }
  function O() {
    return d;
  }
  function w(v) {
    le[v ? "unshift" : "push"](() => {
      d = v, n(5, d);
    });
  }
  const y = () => n(4, m = void 0);
  return t.$$set = (v) => {
    e = X(X({}, e), it(v)), n(10, r = pe(e, i)), "use" in v && n(0, o = v.use), "class" in v && n(1, u = v.class), "notched" in v && n(2, c = v.notched), "noLabel" in v && n(3, f = v.noLabel), "$$scope" in v && n(14, a = v.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (m ? (m.addStyle("transition-duration", "0s"), _("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      m && m.removeStyle("transition-duration");
    })) : S("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    m,
    d,
    g,
    p,
    l,
    A,
    r,
    D,
    b,
    O,
    a,
    s,
    w,
    y
  ];
}
class zo extends ke {
  constructor(e) {
    super(), De(this, e, bm, gm, ve, {
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
function _m(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      8192) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? Oe(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vm(t) {
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
  var s = (
    /*component*/
    t[2]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [_m] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = X(u, me(r, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        l[3]
      ) },
      o & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          l[8],
          .../*use*/
          l[0]
        ]
      },
      o & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: re({
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
      o & /*props*/
      128 && Te(
        /*props*/
        l[7]
      ),
      o & /*$$restProps*/
      512 && Te(
        /*$$restProps*/
        l[9]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[12](e)), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(l, o) {
      e && $(e, l, o), B(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[12](e), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? me(r, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            l[3]
          ) },
          o & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              l[8],
              .../*use*/
              l[0]
            ]
          },
          o & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: re({
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
          o & /*props*/
          128 && Te(
            /*props*/
            l[7]
          ),
          o & /*$$restProps*/
          512 && Te(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && E(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[12](null), e && ee(e, l);
    }
  };
}
const on = {
  component: wt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Im(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e, { use: l = [] } = e, { class: o = "" } = e, u;
  const c = on.class, f = {}, d = [], h = on.contexts, m = on.props;
  let { component: g = on.component } = e, { tag: p = g === wt ? on.tag : void 0 } = e;
  Object.entries(on.classMap).forEach(([C, M]) => {
    const D = ze(M);
    D && "subscribe" in D && d.push(D.subscribe((b) => {
      n(5, f[C] = b, f);
    }));
  });
  const A = rt($e());
  for (let C in h)
    h.hasOwnProperty(C) && We(C, h[C]);
  en(() => {
    for (const C of d)
      C();
  });
  function _() {
    return u.getElement();
  }
  function S(C) {
    le[C ? "unshift" : "push"](() => {
      u = C, n(4, u);
    });
  }
  return t.$$set = (C) => {
    e = X(X({}, e), it(C)), n(9, r = pe(e, i)), "use" in C && n(0, l = C.use), "class" in C && n(1, o = C.class), "component" in C && n(2, g = C.component), "tag" in C && n(3, p = C.tag), "$$scope" in C && n(13, a = C.$$scope);
  }, [
    l,
    o,
    g,
    p,
    u,
    f,
    c,
    m,
    A,
    r,
    _,
    s,
    S,
    a
  ];
}
class Am extends ke {
  constructor(e) {
    super(), De(this, e, Im, vm, ve, {
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
const il = Object.assign({}, on);
function Ct(t) {
  return new Proxy(Am, {
    construct: function(e, n) {
      return Object.assign(on, il, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(on, il, t), e[n];
    }
  });
}
const Em = Ct({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), ym = Ct({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Cm = Ct({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Sm(t) {
  let e, n, i, r, s, a = [
    {
      class: n = re({
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
  for (let o = 0; o < a.length; o += 1)
    l = X(l, a[o]);
  return {
    c() {
      e = x("input"), fe(e, l);
    },
    m(o, u) {
      B(o, e, u), e.autofocus && e.focus(), t[26](e), r || (s = [
        de(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        he(
          e,
          "input",
          /*input_handler*/
          t[27]
        ),
        he(
          e,
          "change",
          /*changeHandler*/
          t[9]
        ),
        he(
          e,
          "blur",
          /*blur_handler*/
          t[24]
        ),
        he(
          e,
          "focus",
          /*focus_handler*/
          t[25]
        )
      ], r = !0);
    },
    p(o, [u]) {
      fe(e, l = me(a, [
        u & /*className*/
        2 && n !== (n = re({
          [
            /*className*/
            o[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
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
      ])), i && ge(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: Qe,
    o: Qe,
    d(o) {
      o && U(e), t[26](null), r = !1, Ze(s);
    }
  };
}
function Tm(t) {
  return t === "" ? Number.NaN : +t;
}
function Lm(t, e, n) {
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
  let r = pe(e, i);
  const s = rt($e());
  let a = () => {
  };
  function l(R) {
    return R === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = a } = e;
  const h = l(d);
  h && (d = "");
  let { files: m = null } = e, { dirty: g = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: A = !0 } = e, { emptyValueNull: _ = d === null } = e;
  h && _ && (d = null);
  let { emptyValueUndefined: S = d === void 0 } = e;
  h && S && (d = void 0);
  let C, M = {}, D = {};
  ct(() => {
    A && n(14, p = C.matches(":invalid"));
  });
  function b(R) {
    if (c === "file") {
      n(12, m = R.currentTarget.files);
      return;
    }
    if (R.currentTarget.value === "" && _) {
      n(11, d = null);
      return;
    }
    if (R.currentTarget.value === "" && S) {
      n(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        n(11, d = Tm(R.currentTarget.value));
        break;
      default:
        n(11, d = R.currentTarget.value);
        break;
    }
  }
  function O(R) {
    (c === "file" || c === "range") && b(R), n(13, g = !0), A && n(14, p = C.matches(":invalid"));
  }
  function w(R) {
    var V;
    return R in M ? (V = M[R]) !== null && V !== void 0 ? V : null : N().getAttribute(R);
  }
  function y(R, V) {
    M[R] !== V && n(6, M[R] = V, M);
  }
  function v(R) {
    (!(R in M) || M[R] != null) && n(6, M[R] = void 0, M);
  }
  function I() {
    N().focus();
  }
  function T() {
    N().blur();
  }
  function N() {
    return C;
  }
  function q(R) {
    Wn.call(this, t, R);
  }
  function j(R) {
    Wn.call(this, t, R);
  }
  function K(R) {
    le[R ? "unshift" : "push"](() => {
      C = R, n(5, C);
    });
  }
  const k = (R) => c !== "file" && b(R);
  return t.$$set = (R) => {
    e = X(X({}, e), it(R)), n(10, r = pe(e, i)), "use" in R && n(0, o = R.use), "class" in R && n(1, u = R.class), "type" in R && n(2, c = R.type), "placeholder" in R && n(3, f = R.placeholder), "value" in R && n(11, d = R.value), "files" in R && n(12, m = R.files), "dirty" in R && n(13, g = R.dirty), "invalid" in R && n(14, p = R.invalid), "updateInvalid" in R && n(15, A = R.updateInvalid), "emptyValueNull" in R && n(16, _ = R.emptyValueNull), "emptyValueUndefined" in R && n(17, S = R.emptyValueUndefined);
  }, t.$$.update = () => {
    t.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete D.value, n(4, D), n(2, c), n(11, d)) : n(4, D.value = d ?? "", D));
  }, [
    o,
    u,
    c,
    f,
    D,
    C,
    M,
    s,
    b,
    O,
    r,
    d,
    m,
    g,
    p,
    A,
    _,
    S,
    w,
    y,
    v,
    I,
    T,
    N,
    q,
    j,
    K,
    k
  ];
}
class Om extends ke {
  constructor(e) {
    super(), De(this, e, Lm, Sm, ve, {
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
function Rm(t) {
  let e, n, i, r, s, a, l = [
    {
      class: n = re({
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
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = X(o, l[u]);
  return {
    c() {
      e = x("textarea"), fe(e, o);
    },
    m(u, c) {
      B(u, e, c), e.autofocus && e.focus(), t[21](e), xt(
        e,
        /*value*/
        t[0]
      ), s || (a = [
        de(r = xe.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        de(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        he(
          e,
          "change",
          /*changeHandler*/
          t[8]
        ),
        he(
          e,
          "blur",
          /*blur_handler*/
          t[19]
        ),
        he(
          e,
          "focus",
          /*focus_handler*/
          t[20]
        ),
        he(
          e,
          "input",
          /*textarea_input_handler*/
          t[22]
        )
      ], s = !0);
    },
    p(u, [c]) {
      fe(e, o = me(l, [
        c & /*className*/
        4 && n !== (n = re({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
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
      ])), r && ge(r.update) && c & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && xt(
        e,
        /*value*/
        u[0]
      );
    },
    i: Qe,
    o: Qe,
    d(u) {
      u && U(e), t[21](null), s = !1, Ze(a);
    }
  };
}
function Mm(t, e, n) {
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
  let r = pe(e, i);
  const s = rt($e());
  let { use: a = [] } = e, { class: l = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: h = !0 } = e, m, g = {};
  ct(() => {
    d && n(11, f = m.matches(":invalid"));
  });
  function p() {
    n(10, c = !0), d && n(11, f = m.matches(":invalid"));
  }
  function A(v) {
    var I;
    return v in g ? (I = g[v]) !== null && I !== void 0 ? I : null : D().getAttribute(v);
  }
  function _(v, I) {
    g[v] !== I && n(6, g[v] = I, g);
  }
  function S(v) {
    (!(v in g) || g[v] != null) && n(6, g[v] = void 0, g);
  }
  function C() {
    D().focus();
  }
  function M() {
    D().blur();
  }
  function D() {
    return m;
  }
  function b(v) {
    Wn.call(this, t, v);
  }
  function O(v) {
    Wn.call(this, t, v);
  }
  function w(v) {
    le[v ? "unshift" : "push"](() => {
      m = v, n(5, m);
    });
  }
  function y() {
    u = this.value, n(0, u);
  }
  return t.$$set = (v) => {
    e = X(X({}, e), it(v)), n(9, r = pe(e, i)), "use" in v && n(1, a = v.use), "class" in v && n(2, l = v.class), "style" in v && n(3, o = v.style), "value" in v && n(0, u = v.value), "dirty" in v && n(10, c = v.dirty), "invalid" in v && n(11, f = v.invalid), "updateInvalid" in v && n(12, d = v.updateInvalid), "resizable" in v && n(4, h = v.resizable);
  }, [
    u,
    a,
    l,
    o,
    h,
    m,
    g,
    s,
    p,
    r,
    c,
    f,
    d,
    A,
    _,
    S,
    C,
    M,
    D,
    b,
    O,
    w,
    y
  ];
}
class Dm extends ke {
  constructor(e) {
    super(), De(this, e, Mm, Rm, ve, {
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
const km = (t) => ({}), rl = (t) => ({}), Nm = (t) => ({}), sl = (t) => ({}), Pm = (t) => ({}), ll = (t) => ({}), Hm = (t) => ({}), al = (t) => ({}), Fm = (t) => ({}), ol = (t) => ({}), wm = (t) => ({}), ul = (t) => ({}), Um = (t) => ({}), cl = (t) => ({}), Bm = (t) => ({}), fl = (t) => ({}), Vm = (t) => ({}), dl = (t) => ({}), Gm = (t) => ({}), hl = (t) => ({}), jm = (t) => ({}), ml = (t) => ({}), qm = (t) => ({}), pl = (t) => ({});
function Wm(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m;
  const g = (
    /*#slots*/
    t[56].label
  ), p = Le(
    g,
    t,
    /*$$scope*/
    t[87],
    ol
  );
  i = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Km] },
      $$scope: { ctx: t }
    }
  });
  const A = (
    /*#slots*/
    t[56].default
  ), _ = Le(
    A,
    t,
    /*$$scope*/
    t[87],
    null
  );
  a = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Xm] },
      $$scope: { ctx: t }
    }
  });
  const S = (
    /*#slots*/
    t[56].ripple
  ), C = Le(
    S,
    t,
    /*$$scope*/
    t[87],
    sl
  );
  let M = [
    {
      class: o = re({
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
      ).map(Tl).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    $t(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], D = {};
  for (let b = 0; b < M.length; b += 1)
    D = X(D, M[b]);
  return {
    c() {
      e = x("div"), p && p.c(), n = oe(), te(i.$$.fragment), r = oe(), _ && _.c(), s = oe(), te(a.$$.fragment), l = oe(), C && C.c(), fe(e, D);
    },
    m(b, O) {
      B(b, e, O), p && p.m(e, null), Z(e, n), $(i, e, null), Z(e, r), _ && _.m(e, null), Z(e, s), $(a, e, null), Z(e, l), C && C.m(e, null), t[82](e), d = !0, h || (m = [
        de(c = Dt.call(null, e, {
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
        de(f = xe.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        de(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          t[83]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          t[84]
        )
      ], h = !0);
    },
    p(b, O) {
      p && p.p && (!d || O[2] & /*$$scope*/
      33554432) && Re(
        p,
        g,
        b,
        /*$$scope*/
        b[87],
        d ? Oe(
          g,
          /*$$scope*/
          b[87],
          O,
          Fm
        ) : Me(
          /*$$scope*/
          b[87]
        ),
        ol
      );
      const w = {};
      O[2] & /*$$scope*/
      33554432 && (w.$$scope = { dirty: O, ctx: b }), i.$set(w), _ && _.p && (!d || O[2] & /*$$scope*/
      33554432) && Re(
        _,
        A,
        b,
        /*$$scope*/
        b[87],
        d ? Oe(
          A,
          /*$$scope*/
          b[87],
          O,
          null
        ) : Me(
          /*$$scope*/
          b[87]
        ),
        null
      );
      const y = {};
      O[2] & /*$$scope*/
      33554432 && (y.$$scope = { dirty: O, ctx: b }), a.$set(y), C && C.p && (!d || O[2] & /*$$scope*/
      33554432) && Re(
        C,
        S,
        b,
        /*$$scope*/
        b[87],
        d ? Oe(
          S,
          /*$$scope*/
          b[87],
          O,
          Nm
        ) : Me(
          /*$$scope*/
          b[87]
        ),
        sl
      ), fe(e, D = me(M, [
        (!d || O[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | O[1] & /*$$slots*/
        65536 && o !== (o = re({
          [
            /*className*/
            b[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            b[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            b[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            b[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            b[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            b[15] === "standard" && !/*textarea*/
            b[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            b[16] || !/*$$slots*/
            b[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            b[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            b[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            b[1]
          ),
          .../*internalClasses*/
          b[25]
        }))) && { class: o },
        (!d || O[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          b[26]
        ).map(Tl).concat([
          /*style*/
          b[10]
        ]).join(" "))) && { style: u },
        O[1] & /*$$restProps*/
        32768 && $t(
          /*$$restProps*/
          b[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && ge(c.update) && O[0] & /*ripple*/
      2048 && c.update.call(null, {
        ripple: (
          /*ripple*/
          b[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          b[43]
        ),
        removeClass: (
          /*removeClass*/
          b[44]
        ),
        addStyle: (
          /*addStyle*/
          b[45]
        )
      }), f && ge(f.update) && O[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        b[8]
      );
    },
    i(b) {
      d || (E(p, b), E(i.$$.fragment, b), E(_, b), E(a.$$.fragment, b), E(C, b), d = !0);
    },
    o(b) {
      L(p, b), L(i.$$.fragment, b), L(_, b), L(a.$$.fragment, b), L(C, b), d = !1;
    },
    d(b) {
      b && U(e), p && p.d(b), ee(i), _ && _.d(b), ee(a), C && C.d(b), t[82](null), h = !1, Ze(m);
    }
  };
}
function zm(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, A, _, S = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && gl(t), C = (
    /*textarea*/
    (t[14] || /*variant*/
    t[15] === "outlined") && vl(t)
  );
  r = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Jm] },
      $$scope: { ctx: t }
    }
  });
  const M = (
    /*#slots*/
    t[56].default
  ), D = Le(
    M,
    t,
    /*$$scope*/
    t[87],
    null
  ), b = [$m, xm], O = [];
  function w(T, N) {
    return (
      /*textarea*/
      T[14] && typeof /*value*/
      T[0] == "string" ? 0 : 1
    );
  }
  l = w(t), o = O[l] = b[l](t), c = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [np] },
      $$scope: { ctx: t }
    }
  });
  let y = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && /*ripple*/
  t[11] && yl(t), v = [
    {
      class: d = re({
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
      style: h = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(Sl).concat([
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
    $t(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], I = {};
  for (let T = 0; T < v.length; T += 1)
    I = X(I, v[T]);
  return {
    c() {
      e = x("label"), S && S.c(), n = oe(), C && C.c(), i = oe(), te(r.$$.fragment), s = oe(), D && D.c(), a = oe(), o.c(), u = oe(), te(c.$$.fragment), f = oe(), y && y.c(), fe(e, I);
    },
    m(T, N) {
      B(T, e, N), S && S.m(e, null), Z(e, n), C && C.m(e, null), Z(e, i), $(r, e, null), Z(e, s), D && D.m(e, null), Z(e, a), O[l].m(e, null), Z(e, u), $(c, e, null), Z(e, f), y && y.m(e, null), t[78](e), p = !0, A || (_ = [
        de(m = Dt.call(null, e, {
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
        de(g = xe.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        de(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        he(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          t[79]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        he(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          t[80]
        ),
        he(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          t[40]
        ),
        he(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          t[81]
        )
      ], A = !0);
    },
    p(T, N) {
      !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" ? S ? (S.p(T, N), N[0] & /*textarea, variant*/
      49152 && E(S, 1)) : (S = gl(T), S.c(), E(S, 1), S.m(e, n)) : S && (Ue(), L(S, 1, 1, () => {
        S = null;
      }), Be()), /*textarea*/
      T[14] || /*variant*/
      T[15] === "outlined" ? C ? (C.p(T, N), N[0] & /*textarea, variant*/
      49152 && E(C, 1)) : (C = vl(T), C.c(), E(C, 1), C.m(e, i)) : C && (Ue(), L(C, 1, 1, () => {
        C = null;
      }), Be());
      const q = {};
      N[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: N, ctx: T }), r.$set(q), D && D.p && (!p || N[2] & /*$$scope*/
      33554432) && Re(
        D,
        M,
        T,
        /*$$scope*/
        T[87],
        p ? Oe(
          M,
          /*$$scope*/
          T[87],
          N,
          null
        ) : Me(
          /*$$scope*/
          T[87]
        ),
        null
      );
      let j = l;
      l = w(T), l === j ? O[l].p(T, N) : (Ue(), L(O[j], 1, 1, () => {
        O[j] = null;
      }), Be(), o = O[l], o ? o.p(T, N) : (o = O[l] = b[l](T), o.c()), E(o, 1), o.m(e, u));
      const K = {};
      N[2] & /*$$scope*/
      33554432 && (K.$$scope = { dirty: N, ctx: T }), c.$set(K), !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" && /*ripple*/
      T[11] ? y ? (y.p(T, N), N[0] & /*textarea, variant, ripple*/
      51200 && E(y, 1)) : (y = yl(T), y.c(), E(y, 1), y.m(e, null)) : y && (Ue(), L(y, 1, 1, () => {
        y = null;
      }), Be()), fe(e, I = me(v, [
        (!p || N[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | N[1] & /*$$slots*/
        65536 && d !== (d = re({
          [
            /*className*/
            T[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            T[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            T[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            T[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            T[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            T[15] === "standard" && !/*textarea*/
            T[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            T[16] || /*label*/
            T[17] == null && !/*$$slots*/
            T[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            T[28] || /*value*/
            T[0] != null && /*value*/
            T[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            T[35](
              /*withLeadingIcon*/
              T[22]
            ) ? (
              /*$$slots*/
              T[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              T[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            T[35](
              /*withTrailingIcon*/
              T[23]
            ) ? (
              /*$$slots*/
              T[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              T[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            T[14] && /*$$slots*/
            T[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            T[1]
          ),
          .../*internalClasses*/
          T[25]
        }))) && { class: d },
        (!p || N[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          T[26]
        ).map(Sl).concat([
          /*style*/
          T[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        N[1] & /*$$restProps*/
        32768 && $t(
          /*$$restProps*/
          T[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), m && ge(m.update) && N[0] & /*textarea, variant*/
      49152 | N[1] & /*inputElement*/
      4 && m.update.call(null, {
        ripple: !/*textarea*/
        T[14] && /*variant*/
        T[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          T[43]
        ),
        removeClass: (
          /*removeClass*/
          T[44]
        ),
        addStyle: (
          /*addStyle*/
          T[45]
        ),
        eventTarget: (
          /*inputElement*/
          T[33]
        ),
        activeTarget: (
          /*inputElement*/
          T[33]
        ),
        initPromise: (
          /*initPromise*/
          T[37]
        )
      }), g && ge(g.update) && N[0] & /*use*/
      256 && g.update.call(
        null,
        /*use*/
        T[8]
      );
    },
    i(T) {
      p || (E(S), E(C), E(r.$$.fragment, T), E(D, T), E(o), E(c.$$.fragment, T), E(y), p = !0);
    },
    o(T) {
      L(S), L(C), L(r.$$.fragment, T), L(D, T), L(o), L(c.$$.fragment, T), L(y), p = !1;
    },
    d(T) {
      T && U(e), S && S.d(), C && C.d(), ee(r), D && D.d(T), O[l].d(), ee(c), y && y.d(), t[78](null), A = !1, Ze(_);
    }
  };
}
function Km(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[87],
    al
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Oe(
          n,
          /*$$scope*/
          r[87],
          s,
          Hm
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        al
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Xm(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[87],
    ll
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Oe(
          n,
          /*$$scope*/
          r[87],
          s,
          Pm
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        ll
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function gl(t) {
  let e, n, i, r = (
    /*variant*/
    t[15] === "filled" && bl()
  ), s = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && _l(t);
  return {
    c() {
      r && r.c(), e = oe(), s && s.c(), n = Ye();
    },
    m(a, l) {
      r && r.m(a, l), B(a, e, l), s && s.m(a, l), B(a, n, l), i = !0;
    },
    p(a, l) {
      /*variant*/
      a[15] === "filled" ? r || (r = bl(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? s ? (s.p(a, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && E(s, 1)) : (s = _l(a), s.c(), E(s, 1), s.m(n.parentNode, n)) : s && (Ue(), L(s, 1, 1, () => {
        s = null;
      }), Be());
    },
    i(a) {
      i || (E(s), i = !0);
    },
    o(a) {
      L(s), i = !1;
    },
    d(a) {
      a && (U(e), U(n)), r && r.d(a), s && s.d(a);
    }
  };
}
function bl(t) {
  let e;
  return {
    c() {
      e = x("span"), P(e, "class", "mdc-text-field__ripple");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function _l(t) {
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
    Ge(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Ym] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new ji({ props: r }), t[57](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? me(i, [
        a[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            s[28] || /*value*/
            s[0] != null && /*value*/
            s[0] !== "" && (typeof /*value*/
            s[0] != "number" || !isNaN(
              /*value*/
              s[0]
            ))
          )
        },
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          s[13]
        ) },
        i[2],
        a[1] & /*$$restProps*/
        32768 && Te(Ge(
          /*$$restProps*/
          s[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[57](null), ee(e, s);
    }
  };
}
function Ym(t) {
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
  ), s = Le(
    r,
    t,
    /*$$scope*/
    t[87],
    pl
  );
  return {
    c() {
      n = ut(e), s && s.c();
    },
    m(a, l) {
      B(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && dt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Re(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Oe(
          r,
          /*$$scope*/
          a[87],
          l,
          qm
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        pl
      );
    },
    i(a) {
      i || (E(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(n), s && s.d(a);
    }
  };
}
function vl(t) {
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
    Ge(
      /*$$restProps*/
      t[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [Qm] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new zo({ props: r }), t[59](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? me(i, [
        a[0] & /*noLabel, label*/
        196608 | a[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            s[16] || /*label*/
            s[17] == null && !/*$$slots*/
            s[47].label
          )
        },
        a[1] & /*$$restProps*/
        32768 && Te(Ge(
          /*$$restProps*/
          s[46],
          "outline$"
        ))
      ]) : {};
      a[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | a[1] & /*$$restProps, $$slots*/
      98304 | a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[59](null), ee(e, s);
    }
  };
}
function Il(t) {
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
    Ge(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Zm] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new ji({ props: r }), t[58](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? me(i, [
        a[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            s[28] || /*value*/
            s[0] != null && /*value*/
            s[0] !== "" && (typeof /*value*/
            s[0] != "number" || !isNaN(
              /*value*/
              s[0]
            ))
          )
        },
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          s[13]
        ) },
        i[2],
        a[1] & /*$$restProps*/
        32768 && Te(Ge(
          /*$$restProps*/
          s[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[58](null), ee(e, s);
    }
  };
}
function Zm(t) {
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
  ), s = Le(
    r,
    t,
    /*$$scope*/
    t[87],
    ml
  );
  return {
    c() {
      n = ut(e), s && s.c();
    },
    m(a, l) {
      B(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && dt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Re(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Oe(
          r,
          /*$$scope*/
          a[87],
          l,
          jm
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        ml
      );
    },
    i(a) {
      i || (E(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(n), s && s.d(a);
    }
  };
}
function Qm(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && Il(t);
  return {
    c() {
      i && i.c(), e = Ye();
    },
    m(r, s) {
      i && i.m(r, s), B(r, e, s), n = !0;
    },
    p(r, s) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && E(i, 1)) : (i = Il(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Ue(), L(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(r) {
      n || (E(i), n = !0);
    },
    o(r) {
      L(i), n = !1;
    },
    d(r) {
      r && U(e), i && i.d(r);
    }
  };
}
function Jm(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[87],
    hl
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Oe(
          n,
          /*$$scope*/
          r[87],
          s,
          Gm
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        hl
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function xm(t) {
  let e, n, i, r, s, a, l, o, u, c;
  const f = (
    /*#slots*/
    t[56].prefix
  ), d = Le(
    f,
    t,
    /*$$scope*/
    t[87],
    fl
  );
  let h = (
    /*prefix*/
    t[20] != null && Al(t)
  );
  const m = [
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
    Ge(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function g(b) {
    t[69](b);
  }
  function p(b) {
    t[70](b);
  }
  function A(b) {
    t[71](b);
  }
  function _(b) {
    t[72](b);
  }
  let S = {};
  for (let b = 0; b < m.length; b += 1)
    S = X(S, m[b]);
  /*value*/
  t[0] !== void 0 && (S.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (S.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (S.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (S.invalid = /*invalid*/
  t[1]), i = new Om({ props: S }), t[68](i), le.push(() => gt(i, "value", g)), le.push(() => gt(i, "files", p)), le.push(() => gt(i, "dirty", A)), le.push(() => gt(i, "invalid", _)), i.$on(
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
  let C = (
    /*suffix*/
    t[21] != null && El(t)
  );
  const M = (
    /*#slots*/
    t[56].suffix
  ), D = Le(
    M,
    t,
    /*$$scope*/
    t[87],
    cl
  );
  return {
    c() {
      d && d.c(), e = oe(), h && h.c(), n = oe(), te(i.$$.fragment), o = oe(), C && C.c(), u = oe(), D && D.c();
    },
    m(b, O) {
      d && d.m(b, O), B(b, e, O), h && h.m(b, O), B(b, n, O), $(i, b, O), B(b, o, O), C && C.m(b, O), B(b, u, O), D && D.m(b, O), c = !0;
    },
    p(b, O) {
      d && d.p && (!c || O[2] & /*$$scope*/
      33554432) && Re(
        d,
        f,
        b,
        /*$$scope*/
        b[87],
        c ? Oe(
          f,
          /*$$scope*/
          b[87],
          O,
          Bm
        ) : Me(
          /*$$scope*/
          b[87]
        ),
        fl
      ), /*prefix*/
      b[20] != null ? h ? (h.p(b, O), O[0] & /*prefix*/
      1048576 && E(h, 1)) : (h = Al(b), h.c(), E(h, 1), h.m(n.parentNode, n)) : h && (Ue(), L(h, 1, 1, () => {
        h = null;
      }), Be());
      const w = O[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | O[1] & /*$$restProps*/
      32768 ? me(m, [
        O[0] & /*type*/
        262144 && { type: (
          /*type*/
          b[18]
        ) },
        O[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          b[12]
        ) },
        O[0] & /*required*/
        8192 && { required: (
          /*required*/
          b[13]
        ) },
        O[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          b[19]
        ) },
        O[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          b[27]
        ) },
        O[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          b[27]
        ) },
        O[0] & /*noLabel, label*/
        196608 && Te(
          /*noLabel*/
          b[16] && /*label*/
          b[17] != null ? { placeholder: (
            /*label*/
            b[17]
          ) } : {}
        ),
        O[1] & /*$$restProps*/
        32768 && Te(Ge(
          /*$$restProps*/
          b[46],
          "input$"
        ))
      ]) : {};
      !r && O[0] & /*value*/
      1 && (r = !0, w.value = /*value*/
      b[0], pt(() => r = !1)), !s && O[0] & /*files*/
      8 && (s = !0, w.files = /*files*/
      b[3], pt(() => s = !1)), !a && O[0] & /*dirty*/
      16 && (a = !0, w.dirty = /*dirty*/
      b[4], pt(() => a = !1)), !l && O[0] & /*invalid*/
      2 && (l = !0, w.invalid = /*invalid*/
      b[1], pt(() => l = !1)), i.$set(w), /*suffix*/
      b[21] != null ? C ? (C.p(b, O), O[0] & /*suffix*/
      2097152 && E(C, 1)) : (C = El(b), C.c(), E(C, 1), C.m(u.parentNode, u)) : C && (Ue(), L(C, 1, 1, () => {
        C = null;
      }), Be()), D && D.p && (!c || O[2] & /*$$scope*/
      33554432) && Re(
        D,
        M,
        b,
        /*$$scope*/
        b[87],
        c ? Oe(
          M,
          /*$$scope*/
          b[87],
          O,
          Um
        ) : Me(
          /*$$scope*/
          b[87]
        ),
        cl
      );
    },
    i(b) {
      c || (E(d, b), E(h), E(i.$$.fragment, b), E(C), E(D, b), c = !0);
    },
    o(b) {
      L(d, b), L(h), L(i.$$.fragment, b), L(C), L(D, b), c = !1;
    },
    d(b) {
      b && (U(e), U(n), U(o), U(u)), d && d.d(b), h && h.d(b), t[68](null), ee(i, b), C && C.d(b), D && D.d(b);
    }
  };
}
function $m(t) {
  let e, n, i, r, s, a, l, o;
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
    Ge(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function c(p) {
    t[61](p);
  }
  function f(p) {
    t[62](p);
  }
  function d(p) {
    t[63](p);
  }
  let h = {};
  for (let p = 0; p < u.length; p += 1)
    h = X(h, u[p]);
  /*value*/
  t[0] !== void 0 && (h.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (h.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (h.invalid = /*invalid*/
  t[1]), n = new Dm({ props: h }), t[60](n), le.push(() => gt(n, "value", c)), le.push(() => gt(n, "dirty", f)), le.push(() => gt(n, "invalid", d)), n.$on(
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
  const m = (
    /*#slots*/
    t[56].internalCounter
  ), g = Le(
    m,
    t,
    /*$$scope*/
    t[87],
    dl
  );
  return {
    c() {
      e = x("span"), te(n.$$.fragment), a = oe(), g && g.c(), P(e, "class", l = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(p, A) {
      B(p, e, A), $(n, e, null), Z(e, a), g && g.m(e, null), o = !0;
    },
    p(p, A) {
      const _ = A[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | A[1] & /*$$restProps*/
      32768 ? me(u, [
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
        32768 && Te(Ge(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && A[0] & /*value*/
      1 && (i = !0, _.value = /*value*/
      p[0], pt(() => i = !1)), !r && A[0] & /*dirty*/
      16 && (r = !0, _.dirty = /*dirty*/
      p[4], pt(() => r = !1)), !s && A[0] & /*invalid*/
      2 && (s = !0, _.invalid = /*invalid*/
      p[1], pt(() => s = !1)), n.$set(_), g && g.p && (!o || A[2] & /*$$scope*/
      33554432) && Re(
        g,
        m,
        p,
        /*$$scope*/
        p[87],
        o ? Oe(
          m,
          /*$$scope*/
          p[87],
          A,
          Vm
        ) : Me(
          /*$$scope*/
          p[87]
        ),
        dl
      ), (!o || A[1] & /*$$restProps*/
      32768 && l !== (l = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && P(e, "class", l);
    },
    i(p) {
      o || (E(n.$$.fragment, p), E(g, p), o = !0);
    },
    o(p) {
      L(n.$$.fragment, p), L(g, p), o = !1;
    },
    d(p) {
      p && U(e), t[60](null), ee(n), g && g.d(p);
    }
  };
}
function Al(t) {
  let e, n;
  return e = new ym({
    props: {
      $$slots: { default: [ep] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function ep(t) {
  let e;
  return {
    c() {
      e = ut(
        /*prefix*/
        t[20]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i[0] & /*prefix*/
      1048576 && dt(
        e,
        /*prefix*/
        n[20]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function El(t) {
  let e, n;
  return e = new Cm({
    props: {
      $$slots: { default: [tp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function tp(t) {
  let e;
  return {
    c() {
      e = ut(
        /*suffix*/
        t[21]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i[0] & /*suffix*/
      2097152 && dt(
        e,
        /*suffix*/
        n[21]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function np(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[87],
    ul
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Oe(
          n,
          /*$$scope*/
          r[87],
          s,
          wm
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        ul
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function yl(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[46],
    "ripple$"
  )];
  let r = {};
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new Wo({ props: r }), t[77](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      32768 ? me(i, [Te(Ge(
        /*$$restProps*/
        s[46],
        "ripple$"
      ))]) : {};
      e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[77](null), ee(e, s);
    }
  };
}
function Cl(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [ip] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new Em({ props: r }), e.$on(
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
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      32768 ? me(i, [Te(Ge(
        /*$$restProps*/
        s[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      ee(e, s);
    }
  };
}
function ip(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[87],
    rl
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Oe(
          n,
          /*$$scope*/
          r[87],
          s,
          km
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        rl
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function rp(t) {
  let e, n, i, r, s;
  const a = [zm, Wm], l = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(t), n = l[e] = a[e](t);
  let u = (
    /*$$slots*/
    t[47].helper && Cl(t)
  );
  return {
    c() {
      n.c(), i = oe(), u && u.c(), r = Ye();
    },
    m(c, f) {
      l[e].m(c, f), B(c, i, f), u && u.m(c, f), B(c, r, f), s = !0;
    },
    p(c, f) {
      n.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && E(u, 1)) : (u = Cl(c), u.c(), E(u, 1), u.m(r.parentNode, r)) : u && (Ue(), L(u, 1, 1, () => {
        u = null;
      }), Be());
    },
    i(c) {
      s || (E(n), E(u), s = !0);
    },
    o(c) {
      L(n), L(u), s = !1;
    },
    d(c) {
      c && (U(i), U(r)), l[e].d(c), u && u.d(c);
    }
  };
}
const Sl = ([t, e]) => `${t}: ${e};`, Tl = ([t, e]) => `${t}: ${e};`;
function sp(t, e, n) {
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
  let s = pe(e, r), { $$slots: a = {}, $$scope: l } = e;
  const o = Yr(a), { applyPassive: u } = qo, c = rt($e());
  let f = () => {
  };
  function d(H) {
    return H === f;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: g = "" } = e, { ripple: p = !0 } = e, { disabled: A = !1 } = e, { required: _ = !1 } = e, { textarea: S = !1 } = e, { variant: C = S ? "outlined" : "standard" } = e, { noLabel: M = !1 } = e, { label: D = void 0 } = e, { type: b = "text" } = e, { value: O = s.input$emptyValueUndefined ? void 0 : f } = e, { files: w = f } = e;
  const y = !d(O) || !d(w);
  d(O) && (O = void 0), d(w) && (w = null);
  let { invalid: v = f } = e, { updateInvalid: I = d(v) } = e;
  d(v) && (v = !1);
  let { dirty: T = !1 } = e, { prefix: N = void 0 } = e, { suffix: q = void 0 } = e, { validateOnValueChange: j = I } = e, { useNativeValidation: K = I } = e, { withLeadingIcon: k = f } = e, { withTrailingIcon: R = f } = e, { input: V = void 0 } = e, { floatingLabel: ue = void 0 } = e, { lineRipple: Ne = void 0 } = e, { notchedOutline: Ie = void 0 } = e, Xe, z, J = {}, Ee = {}, ye, He = !1, ie = ze("SMUI:addLayoutListener"), W, qe, Ve = new Promise((H) => qe = H), St, Q, Ce, je, Fe = O;
  ie && (W = ie(Y)), ct(() => {
    if (n(54, z = new am(
      {
        // getRootAdapterMethods_
        addClass: ft,
        removeClass: et,
        hasClass: ht,
        registerTextFieldInteractionHandler: (H, _t) => be().addEventListener(H, _t),
        deregisterTextFieldInteractionHandler: (H, _t) => be().removeEventListener(H, _t),
        registerValidationAttributeChangeHandler: (H) => {
          const _t = (ni) => ni.map((ii) => ii.attributeName).filter((ii) => ii), vi = new MutationObserver((ni) => {
            K && H(_t(ni));
          }), dr = { attributes: !0 };
          return V && vi.observe(V.getElement(), dr), vi;
        },
        deregisterValidationAttributeChangeHandler: (H) => {
          H.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var H;
          return (H = V == null ? void 0 : V.getElement()) !== null && H !== void 0 ? H : null;
        },
        setInputAttr: (H, _t) => {
          V == null || V.addAttr(H, _t);
        },
        removeInputAttr: (H) => {
          V == null || V.removeAttr(H);
        },
        isFocused: () => document.activeElement === (V == null ? void 0 : V.getElement()),
        registerInputInteractionHandler: (H, _t) => {
          V == null || V.getElement().addEventListener(H, _t, u());
        },
        deregisterInputInteractionHandler: (H, _t) => {
          V == null || V.getElement().removeEventListener(H, _t, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (H) => ue && ue.float(H),
        getLabelWidth: () => ue ? ue.getWidth() : 0,
        hasLabel: () => !!ue,
        shakeLabel: (H) => ue && ue.shake(H),
        setLabelRequired: (H) => ue && ue.setRequired(H),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Ne && Ne.activate(),
        deactivateLineRipple: () => Ne && Ne.deactivate(),
        setLineRippleTransformOrigin: (H) => Ne && Ne.setRippleCenter(H),
        // getOutlineAdapterMethods_
        closeOutline: () => Ie && Ie.closeNotch(),
        hasOutline: () => !!Ie,
        notchOutline: (H) => Ie && Ie.notch(H)
      },
      {
        get helperText() {
          return Ce;
        },
        get characterCounter() {
          return je;
        },
        get leadingIcon() {
          return St;
        },
        get trailingIcon() {
          return Q;
        }
      }
    )), y) {
      if (V == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      z.init();
    } else
      Qr().then(() => {
        if (V == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        z.init();
      });
    return qe(), () => {
      z.destroy();
    };
  }), en(() => {
    W && W();
  });
  function Rt(H) {
    n(29, St = H.detail);
  }
  function G(H) {
    n(30, Q = H.detail);
  }
  function se(H) {
    n(32, je = H.detail);
  }
  function ne(H) {
    n(27, ye = H.detail);
  }
  function Ke(H) {
    n(31, Ce = H.detail);
  }
  function ht(H) {
    var _t;
    return H in J ? (_t = J[H]) !== null && _t !== void 0 ? _t : null : be().classList.contains(H);
  }
  function ft(H) {
    J[H] || n(25, J[H] = !0, J);
  }
  function et(H) {
    (!(H in J) || J[H]) && n(25, J[H] = !1, J);
  }
  function Se(H, _t) {
    Ee[H] != _t && (_t === "" || _t == null ? (delete Ee[H], n(26, Ee)) : n(26, Ee[H] = _t, Ee));
  }
  function ae() {
    V == null || V.focus();
  }
  function qt() {
    V == null || V.blur();
  }
  function Y() {
    if (z) {
      const H = z.shouldFloat;
      z.notchOutline(H);
    }
  }
  function be() {
    return Xe;
  }
  function Ae(H) {
    le[H ? "unshift" : "push"](() => {
      ue = H, n(5, ue);
    });
  }
  function lt(H) {
    le[H ? "unshift" : "push"](() => {
      ue = H, n(5, ue);
    });
  }
  function tn(H) {
    le[H ? "unshift" : "push"](() => {
      Ie = H, n(7, Ie);
    });
  }
  function ti(H) {
    le[H ? "unshift" : "push"](() => {
      V = H, n(2, V);
    });
  }
  function Wi(H) {
    O = H, n(0, O);
  }
  function zi(H) {
    T = H, n(4, T);
  }
  function Ki(H) {
    v = H, n(1, v), n(54, z), n(19, I);
  }
  const Xi = () => n(28, He = !1), Yi = () => n(28, He = !0), Dn = (H) => _e(Xe, "blur", H), Zi = (H) => _e(Xe, "focus", H);
  function bi(H) {
    le[H ? "unshift" : "push"](() => {
      V = H, n(2, V);
    });
  }
  function Qi(H) {
    O = H, n(0, O);
  }
  function _i(H) {
    w = H, n(3, w);
  }
  function kn(H) {
    T = H, n(4, T);
  }
  function Ji(H) {
    v = H, n(1, v), n(54, z), n(19, I);
  }
  const xi = () => n(28, He = !1), $i = () => n(28, He = !0), er = (H) => _e(Xe, "blur", H), tr = (H) => _e(Xe, "focus", H);
  function nr(H) {
    le[H ? "unshift" : "push"](() => {
      Ne = H, n(6, Ne);
    });
  }
  function ir(H) {
    le[H ? "unshift" : "push"](() => {
      Xe = H, n(24, Xe);
    });
  }
  const rr = () => n(29, St = void 0), sr = () => n(30, Q = void 0), lr = () => n(32, je = void 0);
  function ar(H) {
    le[H ? "unshift" : "push"](() => {
      Xe = H, n(24, Xe);
    });
  }
  const or = () => n(29, St = void 0), ur = () => n(30, Q = void 0), cr = () => {
    n(27, ye = void 0), n(31, Ce = void 0);
  }, fr = () => n(32, je = void 0);
  return t.$$set = (H) => {
    e = X(X({}, e), it(H)), n(46, s = pe(e, r)), "use" in H && n(8, h = H.use), "class" in H && n(9, m = H.class), "style" in H && n(10, g = H.style), "ripple" in H && n(11, p = H.ripple), "disabled" in H && n(12, A = H.disabled), "required" in H && n(13, _ = H.required), "textarea" in H && n(14, S = H.textarea), "variant" in H && n(15, C = H.variant), "noLabel" in H && n(16, M = H.noLabel), "label" in H && n(17, D = H.label), "type" in H && n(18, b = H.type), "value" in H && n(0, O = H.value), "files" in H && n(3, w = H.files), "invalid" in H && n(1, v = H.invalid), "updateInvalid" in H && n(19, I = H.updateInvalid), "dirty" in H && n(4, T = H.dirty), "prefix" in H && n(20, N = H.prefix), "suffix" in H && n(21, q = H.suffix), "validateOnValueChange" in H && n(48, j = H.validateOnValueChange), "useNativeValidation" in H && n(49, K = H.useNativeValidation), "withLeadingIcon" in H && n(22, k = H.withLeadingIcon), "withTrailingIcon" in H && n(23, R = H.withTrailingIcon), "input" in H && n(2, V = H.input), "floatingLabel" in H && n(5, ue = H.floatingLabel), "lineRipple" in H && n(6, Ne = H.lineRipple), "notchedOutline" in H && n(7, Ie = H.notchedOutline), "$$scope" in H && n(87, l = H.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = V && V.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && z && z.isValid() !== !v && (I ? n(1, v = !z.isValid()) : z.setValid(!v)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && z && z.getValidateOnValueChange() !== j && z.setValidateOnValueChange(d(j) ? !1 : j), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && z && z.setUseNativeValidation(d(K) ? !0 : K), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && z && z.setDisabled(A), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && z && y && Fe !== O) {
      n(55, Fe = O);
      const H = `${O}`;
      z.getValue() !== H && z.setValue(H);
    }
  }, [
    O,
    v,
    V,
    w,
    T,
    ue,
    Ne,
    Ie,
    h,
    m,
    g,
    p,
    A,
    _,
    S,
    C,
    M,
    D,
    b,
    I,
    N,
    q,
    k,
    R,
    Xe,
    J,
    Ee,
    ye,
    He,
    St,
    Q,
    Ce,
    je,
    i,
    c,
    d,
    y,
    Ve,
    Rt,
    G,
    se,
    ne,
    Ke,
    ft,
    et,
    Se,
    s,
    o,
    j,
    K,
    ae,
    qt,
    Y,
    be,
    z,
    Fe,
    a,
    Ae,
    lt,
    tn,
    ti,
    Wi,
    zi,
    Ki,
    Xi,
    Yi,
    Dn,
    Zi,
    bi,
    Qi,
    _i,
    kn,
    Ji,
    xi,
    $i,
    er,
    tr,
    nr,
    ir,
    rr,
    sr,
    lr,
    ar,
    or,
    ur,
    cr,
    fr,
    l
  ];
}
class Ko extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      sp,
      rp,
      ve,
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
function lp(t) {
  let e;
  return {
    c() {
      e = ut(
        /*content*/
        t[7]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      128 && dt(
        e,
        /*content*/
        n[7]
      );
    },
    i: Qe,
    o: Qe,
    d(n) {
      n && U(e);
    }
  };
}
function ap(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      16384) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[14],
        e ? Oe(
          n,
          /*$$scope*/
          r[14],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function op(t) {
  let e, n, i, r, s, a, l, o, u, c;
  const f = [ap, lp], d = [];
  function h(p, A) {
    return (
      /*content*/
      p[7] == null ? 0 : 1
    );
  }
  n = h(t), i = d[n] = f[n](t);
  let m = [
    {
      class: r = re({
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
      "aria-hidden": s = /*tabindex*/
      t[3] === -1 ? "true" : "false"
    },
    {
      "aria-disabled": a = /*role*/
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
  ], g = {};
  for (let p = 0; p < m.length; p += 1)
    g = X(g, m[p]);
  return {
    c() {
      e = x("i"), i.c(), fe(e, g);
    },
    m(p, A) {
      B(p, e, A), d[n].m(e, null), t[16](e), o = !0, u || (c = [
        de(l = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[9].call(null, e)
        )
      ], u = !0);
    },
    p(p, [A]) {
      let _ = n;
      n = h(p), n === _ ? d[n].p(p, A) : (Ue(), L(d[_], 1, 1, () => {
        d[_] = null;
      }), Be(), i = d[n], i ? i.p(p, A) : (i = d[n] = f[n](p), i.c()), E(i, 1), i.m(e, null)), fe(e, g = me(m, [
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
        8 && s !== (s = /*tabindex*/
        p[3] === -1 ? "true" : "false")) && { "aria-hidden": s },
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
      ])), l && ge(l.update) && A & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (E(i), o = !0);
    },
    o(p) {
      L(i), o = !1;
    },
    d(p) {
      p && U(e), d[n].d(), t[16](null), u = !1, Ze(c);
    }
  };
}
function up(t, e, n) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let s = pe(e, r), a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt($e());
  let { use: c = [] } = e, { class: f = "" } = e, { role: d = void 0 } = e, { tabindex: h = d === "button" ? 0 : -1 } = e, { disabled: m = !1 } = e, g, p, A = {};
  const _ = ze("SMUI:textfield:icon:leading");
  st(t, _, (y) => n(18, a = y));
  const S = a;
  let C;
  ct(() => (p = new um({
    getAttr: M,
    setAttr: D,
    removeAttr: b,
    setContent: (y) => {
      n(7, C = y);
    },
    registerInteractionHandler: (y, v) => O().addEventListener(y, v),
    deregisterInteractionHandler: (y, v) => O().removeEventListener(y, v),
    notifyIconAction: () => _e(O(), "SMUITextField:icon", void 0, void 0, !0)
  }), _e(
    O(),
    S ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    p
  ), p.init(), () => {
    _e(
      O(),
      S ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      p
    ), p.destroy();
  }));
  function M(y) {
    var v;
    return y in A ? (v = A[y]) !== null && v !== void 0 ? v : null : O().getAttribute(y);
  }
  function D(y, v) {
    A[y] !== v && n(6, A[y] = v, A);
  }
  function b(y) {
    (!(y in A) || A[y] != null) && n(6, A[y] = void 0, A);
  }
  function O() {
    return g;
  }
  function w(y) {
    le[y ? "unshift" : "push"](() => {
      g = y, n(5, g);
    });
  }
  return t.$$set = (y) => {
    e = X(X({}, e), it(y)), n(12, s = pe(e, r)), "use" in y && n(0, c = y.use), "class" in y && n(1, f = y.class), "role" in y && n(2, d = y.role), "tabindex" in y && n(3, h = y.tabindex), "disabled" in y && n(4, m = y.disabled), "$$scope" in y && n(14, o = y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, tabindex*/
    12 && n(8, i = { role: d, tabindex: h });
  }, [
    c,
    f,
    d,
    h,
    m,
    g,
    A,
    C,
    i,
    u,
    _,
    S,
    s,
    O,
    o,
    l,
    w
  ];
}
class cp extends ke {
  constructor(e) {
    super(), De(this, e, up, op, ve, {
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
function fp(t) {
  let e, n, i;
  function r(a) {
    t[6](a);
  }
  let s = {
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
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new Ko({ props: s }), le.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        $(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        l & /*label*/
        4 && (o.label = /*label*/
        a[2]), l & /*placeholder*/
        2 && (o.placeholder = /*placeholder*/
        a[1]), l & /*variant*/
        16 && (o.variant = /*variant*/
        a[4]), !n && l & /*value*/
        1 && (n = !0, o.value = /*value*/
        a[0], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function dp(t) {
  let e, n, i;
  function r(a) {
    t[5](a);
  }
  let s = {
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
    $$slots: { leadingIcon: [mp] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new Ko({ props: s }), le.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        $(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        l & /*label*/
        4 && (o.label = /*label*/
        a[2]), l & /*placeholder*/
        2 && (o.placeholder = /*placeholder*/
        a[1]), l & /*variant*/
        16 && (o.variant = /*variant*/
        a[4]), l & /*$$scope, icon*/
        136 && (o.$$scope = { dirty: l, ctx: a }), !n && l & /*value*/
        1 && (n = !0, o.value = /*value*/
        a[0], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function hp(t) {
  let e;
  return {
    c() {
      e = ut(
        /*icon*/
        t[3]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      8 && dt(
        e,
        /*icon*/
        n[3]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function mp(t) {
  let e, n;
  return e = new cp({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [hp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, icon*/
      136 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function pp(t) {
  let e, n, i, r;
  const s = [dp, fp], a = [];
  function l(o, u) {
    return (
      /*icon*/
      o[3] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function gp(t, e, n) {
  let { placeholder: i = "" } = e, { label: r = "" } = e, { icon: s = "" } = e, { value: a = "" } = e, { variant: l = "standard" } = e;
  function o(c) {
    a = c, n(0, a);
  }
  function u(c) {
    a = c, n(0, a);
  }
  return t.$$set = (c) => {
    "placeholder" in c && n(1, i = c.placeholder), "label" in c && n(2, r = c.label), "icon" in c && n(3, s = c.icon), "value" in c && n(0, a = c.value), "variant" in c && n(4, l = c.variant);
  }, [
    a,
    i,
    r,
    s,
    l,
    o,
    u
  ];
}
class bp extends ke {
  constructor(e) {
    super(), De(this, e, gp, pp, ve, {
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
var _p = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, vp = {
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
}, si = {
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
}, Et;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(Et || (Et = {}));
var Rn;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Rn || (Rn = {}));
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
var hn, sn, Je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
hn = {}, hn["" + Je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", hn["" + Je.LIST_ITEM_CLASS] = "mdc-list-item", hn["" + Je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", hn["" + Je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", hn["" + Je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", hn["" + Je.ROOT] = "mdc-list";
var Hn = (sn = {}, sn["" + Je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", sn["" + Je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", sn["" + Je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", sn["" + Je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", sn["" + Je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", sn["" + Je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", sn["" + Je.ROOT] = "mdc-deprecated-list", sn), mn = {
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
    .` + Hn[Je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Hn[Je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Je.LIST_ITEM_CLASS + ` a,
    .` + Je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Hn[Je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Hn[Je.LIST_ITEM_CLASS] + ` a,
    .` + Hn[Je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Hn[Je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, It = {
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
var Ip = ["input", "button", "textarea", "select"], Wt = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Ip.indexOf(n) === -1 && t.preventDefault();
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
function Ap() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Ep(t, e) {
  for (var n = /* @__PURE__ */ new Map(), i = 0; i < t; i++) {
    var r = e(i).trim();
    if (r) {
      var s = r[0].toLowerCase();
      n.has(s) || n.set(s, []), n.get(s).push({ text: r.toLowerCase(), index: i });
    }
  }
  return n.forEach(function(a) {
    a.sort(function(l, o) {
      return l.index - o.index;
    });
  }), n;
}
function zr(t, e) {
  var n = t.nextChar, i = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, s = t.focusedItemIndex, a = t.skipFocus, l = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Yo(e);
  }, It.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = yp(r, s, l, e) : o = Cp(r, l, e), o !== -1 && !a && i(o), o;
}
function yp(t, e, n, i) {
  var r = i.typeaheadBuffer[0], s = t.get(r);
  if (!s)
    return -1;
  if (r === i.currentFirstChar && s[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % s.length;
    var a = s[i.sortedIndexCursor].index;
    if (!n(a))
      return a;
  }
  i.currentFirstChar = r;
  var l = -1, o;
  for (o = 0; o < s.length; o++)
    if (!n(s[o].index)) {
      l = o;
      break;
    }
  for (; o < s.length; o++)
    if (s[o].index > e && !n(s[o].index)) {
      l = o;
      break;
    }
  return l !== -1 ? (i.sortedIndexCursor = l, s[i.sortedIndexCursor].index) : -1;
}
function Cp(t, e, n) {
  var i = n.typeaheadBuffer[0], r = t.get(i);
  if (!r)
    return -1;
  var s = r[n.sortedIndexCursor];
  if (s.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(s.index))
    return s.index;
  for (var a = (n.sortedIndexCursor + 1) % r.length, l = -1; a !== n.sortedIndexCursor; ) {
    var o = r[a], u = o.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (u && c) {
      l = a;
      break;
    }
    a = (a + 1) % r.length;
  }
  return l !== -1 ? (n.sortedIndexCursor = l, r[n.sortedIndexCursor].index) : -1;
}
function Xo(t) {
  return t.typeaheadBuffer.length > 0;
}
function Yo(t) {
  t.typeaheadBuffer = "";
}
function Ll(t, e) {
  var n = t.event, i = t.isTargetListItem, r = t.focusedItemIndex, s = t.focusItemAtIndex, a = t.sortedIndexByFirstChar, l = t.isItemAtIndexDisabled, o = vt(n) === "ArrowLeft", u = vt(n) === "ArrowUp", c = vt(n) === "ArrowRight", f = vt(n) === "ArrowDown", d = vt(n) === "Home", h = vt(n) === "End", m = vt(n) === "Enter", g = vt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || o || u || c || f || d || h || m)
    return -1;
  var p = !g && n.key.length === 1;
  if (p) {
    Wt(n);
    var A = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return zr(A, e);
  }
  if (!g)
    return -1;
  i && Wt(n);
  var _ = i && Xo(e);
  if (_) {
    var A = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return zr(A, e);
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
function Sp(t) {
  return t instanceof Array;
}
var Tp = ["Alt", "Control", "Meta", "Shift"];
function Ol(t) {
  var e = new Set(t ? Tp.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(i) {
      return e.has(i);
    }) && n.length === e.size;
  };
}
var Lp = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = It.UNSET_INDEX, i.focusedItemIndex = It.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Ap(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mn;
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
        return It;
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
    }, e.prototype.setWrapFocus = function(n) {
      this.wrapFocus = n;
    }, e.prototype.setVerticalOrientation = function(n) {
      this.isVertical = n;
    }, e.prototype.setSingleSelection = function(n) {
      this.isSingleSelectionList = n, n && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(n) {
      this.areDisabledItemsFocusable = n;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var n = this.getSelectedIndexFromDOM();
      if (n !== It.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(n, Je.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = It.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var s = this.adapter.listItemAtIndexHasClass(r, Je.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, Je.LIST_ITEM_ACTIVATED_CLASS);
        if (s || a) {
          n = r;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Xo(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(n) {
      this.useActivatedClass = n;
    }, e.prototype.setUseSelectedAttribute = function(n) {
      this.useSelectedAttr = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n, i) {
      i === void 0 && (i = {}), this.isIndexValid(n) && (this.isCheckboxList ? this.setCheckboxAtIndex(n, i) : this.isRadioList ? this.setRadioAtIndex(n, i) : this.setSingleSelectionAtIndex(n, i));
    }, e.prototype.handleFocusIn = function(n) {
      n >= 0 && (this.focusedItemIndex = n, this.adapter.setAttributeForElementIndex(n, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(n, "0"));
    }, e.prototype.handleFocusOut = function(n) {
      var i = this;
      n >= 0 && (this.adapter.setAttributeForElementIndex(n, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(n, "-1")), setTimeout(function() {
        i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(n) {
      return this.adapter.listItemAtIndexHasClass(n, Je.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, i, r) {
      var s = this, a, l = vt(n) === "ArrowLeft", o = vt(n) === "ArrowUp", u = vt(n) === "ArrowRight", c = vt(n) === "ArrowDown", f = vt(n) === "Home", d = vt(n) === "End", h = vt(n) === "Enter", m = vt(n) === "Spacebar", g = this.isVertical && c || !this.isVertical && u, p = this.isVertical && o || !this.isVertical && l, A = n.key === "A" || n.key === "a", _ = Ol(n);
      if (this.adapter.isRootFocused()) {
        if ((p || d) && _([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || f) && _([]))
          n.preventDefault(), this.focusFirstElement();
        else if (p && _(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && _(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var C = {
            event: n,
            focusItemAtIndex: function(b) {
              s.focusItemAtIndex(b);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(b) {
              return s.isIndexDisabled(b);
            }
          };
          Ll(C, this.typeaheadState);
        }
        return;
      }
      var M = this.adapter.getFocusedElementIndex();
      if (!(M === -1 && (M = r, M < 0))) {
        if (g && _([]))
          Wt(n), this.focusNextElement(M);
        else if (p && _([]))
          Wt(n), this.focusPrevElement(M);
        else if (g && _(["Shift"]) && this.isCheckboxList) {
          Wt(n);
          var S = this.focusNextElement(M);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (p && _(["Shift"]) && this.isCheckboxList) {
          Wt(n);
          var S = this.focusPrevElement(M);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (f && _([]))
          Wt(n), this.focusFirstElement();
        else if (d && _([]))
          Wt(n), this.focusLastElement();
        else if (f && _(["Control", "Shift"]) && this.isCheckboxList) {
          if (Wt(n), this.isIndexDisabled(M))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, M, M);
        } else if (d && _(["Control", "Shift"]) && this.isCheckboxList) {
          if (Wt(n), this.isIndexDisabled(M))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(M, this.adapter.getListItemCount() - 1, M);
        } else if (A && _(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || m) && _([])) {
          if (i) {
            var D = n.target;
            if (D && D.tagName === "A" && h || (Wt(n), this.isIndexDisabled(M)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(M, !1), this.adapter.notifyAction(M));
          }
        } else if ((h || m) && _(["Shift"]) && this.isCheckboxList) {
          var D = n.target;
          if (D && D.tagName === "A" && h || (Wt(n), this.isIndexDisabled(M)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : M, M, M), this.adapter.notifyAction(M));
        }
        if (this.hasTypeahead) {
          var C = {
            event: n,
            focusItemAtIndex: function(O) {
              s.focusItemAtIndex(O);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(O) {
              return s.isIndexDisabled(O);
            }
          };
          Ll(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, i, r) {
      var s, a = Ol(r);
      n !== It.UNSET_INDEX && (this.isIndexDisabled(n) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, i), this.adapter.notifyAction(n)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : n, n, n), this.adapter.notifyAction(n))));
    }, e.prototype.focusNextElement = function(n) {
      var i = this.adapter.getListItemCount(), r = n, s = null;
      do {
        if (r++, r >= i)
          if (this.wrapFocus)
            r = 0;
          else
            return n;
        if (r === s)
          return -1;
        s = s ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusPrevElement = function(n) {
      var i = this.adapter.getListItemCount(), r = n, s = null;
      do {
        if (r--, r < 0)
          if (this.wrapFocus)
            r = i - 1;
          else
            return n;
        if (r === s)
          return -1;
        s = s ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(n), n;
    }, e.prototype.setEnabled = function(n, i) {
      this.isIndexValid(n, !1) && (i ? (this.adapter.removeClassForElementIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === n && !i.forceUpdate)) {
        var r = Je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== It.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== It.UNSET_INDEX && this.adapter.addClassForElementIndex(n, r), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === It.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, mn.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? mn.ARIA_CURRENT : mn.ARIA_SELECTED;
      if (this.selectedIndex !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), n !== It.UNSET_INDEX) {
        var s = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, r, s);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? mn.ARIA_SELECTED : mn.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !i.forceUpdate) && (this.selectedIndex !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(n, r, "true"), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, s = i.isUserInteraction ? new Set(r === It.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), l = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = s == null ? void 0 : s.has(o), c = n.indexOf(o) >= 0;
        c !== u && l.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, a, c ? "true" : "false");
      }
      this.selectedIndex = n, i.isUserInteraction && l.length && this.adapter.notifySelectionChange(l);
    }, e.prototype.toggleCheckboxRange = function(n, i, r) {
      this.lastSelectedIndex = r;
      for (var s = new Set(this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex), a = !(s != null && s.has(r)), l = Kn([n, i].sort(), 2), o = l[0], u = l[1], c = this.getSelectionAttribute(), f = [], d = o; d <= u; d++)
        if (!this.isIndexDisabled(d)) {
          var h = s.has(d);
          a !== h && (f.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, a), this.adapter.setAttributeForElementIndex(d, c, "" + a), a ? s.add(d) : s.delete(d));
        }
      f.length && (this.selectedIndex = bn([], Kn(s)), this.adapter.notifySelectionChange(f));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === It.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== It.UNSET_INDEX ? this.selectedIndex : Sp(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, i) {
        return Math.min(n, i);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(n, i) {
      var r = this;
      if (i === void 0 && (i = !0), n instanceof Array) {
        if (!this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return n.length === 0 ? !0 : n.some(function(s) {
          return r.isIndexInRange(s);
        });
      } else if (typeof n == "number") {
        if (this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + n);
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === It.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(n) {
      var i = this.adapter.getListItemCount();
      return n >= 0 && n < i;
    }, e.prototype.setSelectedIndexOnAction = function(n, i) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, i), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(n, i) {
      var r = this.getSelectionAttribute(), s = this.adapter.isCheckboxCheckedAtIndex(n), a;
      i ? a = s : (a = !s, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, a)), this.adapter.setAttributeForElementIndex(n, r, a ? "true" : "false");
      var l = this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex.slice();
      a ? l.push(n) : l = l.filter(function(o) {
        return o !== n;
      }), this.selectedIndex = l;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, i) {
      var r = this.adapter.getListItemCount();
      if (n.length === r)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var s = [], a = 0; a < r; a++)
          (!this.isIndexDisabled(a) || n.indexOf(a) > -1) && s.push(a);
        this.setCheckboxAtIndex(s, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(n, i, r) {
      var s = this;
      r === void 0 && (r = !1);
      var a = {
        focusItemAtIndex: function(l) {
          s.focusItemAtIndex(l);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: r,
        isItemAtIndexDisabled: function(l) {
          return s.isIndexDisabled(l);
        }
      };
      return zr(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Ep(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Yo(this.typeaheadState);
    }, e;
  }(Ot)
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
var Zo = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Rn.TOP_START, i.originCorner = Rn.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _p;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Rn;
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
      var n = e.cssClasses, i = n.ROOT, r = n.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(n) {
      this.anchorCorner = n;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ Et.RIGHT;
    }, e.prototype.setAnchorMargin = function(n) {
      this.anchorMargin.top = n.top || 0, this.anchorMargin.right = n.right || 0, this.anchorMargin.bottom = n.bottom || 0, this.anchorMargin.left = n.left || 0;
    }, e.prototype.setIsHoisted = function(n) {
      this.isHoistedElement = n;
    }, e.prototype.setFixedPosition = function(n) {
      this.isFixedPosition = n;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(n, i) {
      this.position.x = this.isFinite(n) ? n : 0, this.position.y = this.isFinite(i) ? i : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(n) {
      this.isHorizontallyCenteredOnViewport = n;
    }, e.prototype.setQuickOpen = function(n) {
      this.isQuickOpen = n;
    }, e.prototype.setMaxHeight = function(n) {
      this.maxHeight = n;
    }, e.prototype.setOpenBottomBias = function(n) {
      this.openBottomBias = n;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var n = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        n.dimensions = n.adapter.getInnerDimensions(), n.autoposition(), n.adapter.addClass(e.cssClasses.OPEN), n.openAnimationEndTimerId = setTimeout(function() {
          n.openAnimationEndTimerId = 0, n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), n.adapter.notifyOpen();
        }, si.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(n) {
      var i = this;
      if (n === void 0 && (n = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, n || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, si.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, n || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(n) {
      var i = n.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(n) {
      var i = n.keyCode, r = n.key, s = r === "Escape" || i === 27;
      s && this.close();
    }, e.prototype.autoposition = function() {
      var n;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), s = this.hasBit(i, Et.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, Et.RIGHT) ? "right" : "left", l = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, f = u.surfaceSize, d = (n = {}, n[a] = l, n[s] = o, n);
      c.width / f.width > si.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(a + " " + s), this.adapter.setPosition(d), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, Et.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var n = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), s = this.adapter.getWindowScroll();
      return n || (n = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: n,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: n.top,
          right: r.width - n.right,
          bottom: r.height - n.bottom,
          left: n.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: s
      };
    }, e.prototype.getoriginCorner = function() {
      var n = this.originCorner, i = this.measurements, r = i.viewportDistance, s = i.anchorSize, a = i.surfaceSize, l = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, Et.BOTTOM), u, c;
      o ? (u = r.top - l + this.anchorMargin.bottom, c = r.bottom - l - this.anchorMargin.bottom) : (u = r.top - l + this.anchorMargin.top, c = r.bottom - l + s.height - this.anchorMargin.top);
      var f = c - a.height > 0;
      !f && u > c + this.openBottomBias && (n = this.setBit(n, Et.BOTTOM));
      var d = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, Et.FLIP_RTL), m = this.hasBit(this.anchorCorner, Et.RIGHT) || this.hasBit(n, Et.RIGHT), g = !1;
      d && h ? g = !m : g = m;
      var p, A;
      g ? (p = r.left + s.width + this.anchorMargin.right, A = r.right - this.anchorMargin.right) : (p = r.left + this.anchorMargin.left, A = r.right + s.width - this.anchorMargin.left);
      var _ = p - a.width > 0, S = A - a.width > 0, C = this.hasBit(n, Et.FLIP_RTL) && this.hasBit(n, Et.RIGHT);
      return S && C && d || !_ && C ? n = this.unsetBit(n, Et.RIGHT) : (_ && g && d || _ && !g && m || !S && p >= A) && (n = this.setBit(n, Et.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, s = this.hasBit(n, Et.BOTTOM), a = this.hasBit(this.anchorCorner, Et.BOTTOM), l = e.numbers.MARGIN_TO_EDGE;
      return s ? (r = i.top + this.anchorMargin.top - l, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, Et.RIGHT), s = this.hasBit(this.anchorCorner, Et.RIGHT);
      if (r) {
        var a = s ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return s ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, Et.BOTTOM), s = this.hasBit(this.anchorCorner, Et.BOTTOM), a = 0;
      return r ? a = s ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = s ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var i, r, s = this.measurements, a = s.windowScroll, l = s.viewportDistance, o = s.surfaceSize, u = s.viewportSize, c = Object.keys(n);
      try {
        for (var f = Lt(c), d = f.next(); !d.done; d = f.next()) {
          var h = d.value, m = n[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            n[h] = (u.width - o.width) / 2;
            continue;
          }
          m += l[h], this.isFixedPosition || (h === "top" ? m += a.y : h === "bottom" ? m -= a.y : h === "left" ? m += a.x : m -= a.x), n[h] = m;
        }
      } catch (g) {
        i = { error: g };
      } finally {
        try {
          d && !d.done && (r = f.return) && r.call(f);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, s = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || s) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, si.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, i) {
      return !!(n & i);
    }, e.prototype.setBit = function(n, i) {
      return n | i;
    }, e.prototype.unsetBit = function(n, i) {
      return n ^ i;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Ot)
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
var Rl = {
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
function Op(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Rp(t, e) {
  if (Op(t) && e in Rl) {
    var n = t.document.createElement("div"), i = Rl[e], r = i.standard, s = i.prefixed, a = r in n.style;
    return a ? r : s;
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
var qn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Fn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Mp = {
  FOCUS_ROOT_INDEX: -1
}, Bn;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Bn || (Bn = {}));
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
var Dp = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Bn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Mp;
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
    }, e.prototype.handleKeydown = function(n) {
      var i = n.key, r = n.keyCode, s = i === "Tab" || r === 9;
      s && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(n) {
      var i = this, r = this.adapter.getElementIndex(n);
      if (!(r < 0)) {
        this.adapter.notifySelected({ index: r });
        var s = this.adapter.getAttributeFromElementAtIndex(r, Fn.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(s), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(n);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, Zo.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Bn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Bn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Bn.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(n) {
      this.defaultFocusState = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n) {
      if (this.validatedIndex(n), !this.adapter.isSelectableItemAtIndex(n))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(n);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Fn.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, qn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, qn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Fn.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, i) {
      this.validatedIndex(n), i ? (this.adapter.removeClassFromElementAtIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Fn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Fn.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var i = this.adapter.getMenuItemCount(), r = n >= 0 && n < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Ot)
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
var bt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Or = {
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
}, yn = {
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
var kp = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = yn.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Or;
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
    }, e.prototype.setSelectedIndex = function(n, i, r) {
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(n >= this.adapter.getMenuItemCount()) && (n === yn.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
    }, e.prototype.setValue = function(n, i) {
      i === void 0 && (i = !1);
      var r = this.adapter.getMenuItemValues().indexOf(n);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var n = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return n !== yn.UNSET_INDEX ? i[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(bt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(bt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(bt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, i = this.adapter.hasClass(bt.FOCUSED), r = n || i, s = this.adapter.hasClass(bt.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(s);
      }
    }, e.prototype.layoutOptions = function() {
      var n = this.adapter.getMenuItemValues(), i = n.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var n = this.getSelectedIndex(), i = n >= 0 ? n : 0;
        this.adapter.focusMenuItemAtIndex(i);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(bt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(bt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(bt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(n) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(n), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(n) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(bt.FOCUSED))) {
        var i = vt(n) === we.ENTER, r = vt(n) === we.SPACEBAR, s = vt(n) === we.ARROW_UP, a = vt(n) === we.ARROW_DOWN, l = n.ctrlKey || n.metaKey;
        if (!l && (!r && n.key && n.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : n.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !i && !r && !s && !a || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(bt.FOCUSED);
        if (n) {
          var r = yn.LABEL_SCALE, s = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(s);
        } else
          i || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(n) {
      this.useDefaultValidation = n;
    }, e.prototype.setValid = function(n) {
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(bt.INVALID), this.adapter.removeMenuClass(bt.MENU_INVALID)) : (this.adapter.addClass(bt.INVALID), this.adapter.addMenuClass(bt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(bt.REQUIRED) && !this.adapter.hasClass(bt.DISABLED) ? this.getSelectedIndex() !== yn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(bt.REQUIRED) : this.adapter.removeClass(bt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(Rn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(bt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(bt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(bt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(bt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Or.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Or.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, yn.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Ot)
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
var Cn = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, ln = {
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
var Np = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ln;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Cn;
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
      return this.adapter.getAttr(Cn.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(ln.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(ln.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(ln.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(ln.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(ln.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(ln.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var i = this.adapter.hasClass(ln.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(ln.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), s = !n || r;
        if (s) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Cn.ROLE) : this.adapter.setAttr(Cn.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Cn.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Cn.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Cn.ARIA_HIDDEN, "true");
    }, e;
  }(Ot)
);
const { document: Pp } = hu;
function Hp(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[34].default
  ), c = Le(
    u,
    t,
    /*$$scope*/
    t[33],
    null
  );
  let f = [
    {
      class: i = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": (
          /*fixed*/
          t[4]
        ),
        "mdc-menu-surface--open": (
          /*isStatic*/
          t[3]
        ),
        "smui-menu-surface--static": (
          /*isStatic*/
          t[3]
        ),
        "mdc-menu-surface--fullwidth": (
          /*fullWidth*/
          t[5]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: r = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(Ml).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { role: "dialog" },
    /*$$restProps*/
    t[12]
  ], d = {};
  for (let h = 0; h < f.length; h += 1)
    d = X(d, f[h]);
  return {
    c() {
      e = oe(), n = x("div"), c && c.c(), fe(n, d);
    },
    m(h, m) {
      B(h, e, m), B(h, n, m), c && c.m(n, null), t[35](n), a = !0, l || (o = [
        he(
          Pp.body,
          "click",
          /*handleBodyClick*/
          t[11],
          !0
        ),
        de(s = xe.call(
          null,
          n,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[10].call(null, n)
        ),
        he(n, "keydown", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleKeydown.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleKeydown.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        })
      ], l = !0);
    },
    p(h, m) {
      t = h, c && c.p && (!a || m[1] & /*$$scope*/
      4) && Re(
        c,
        u,
        t,
        /*$$scope*/
        t[33],
        a ? Oe(
          u,
          /*$$scope*/
          t[33],
          m,
          null
        ) : Me(
          /*$$scope*/
          t[33]
        ),
        null
      ), fe(n, d = me(f, [
        (!a || m[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/
        314 && i !== (i = re({
          [
            /*className*/
            t[1]
          ]: !0,
          "mdc-menu-surface": !0,
          "mdc-menu-surface--fixed": (
            /*fixed*/
            t[4]
          ),
          "mdc-menu-surface--open": (
            /*isStatic*/
            t[3]
          ),
          "smui-menu-surface--static": (
            /*isStatic*/
            t[3]
          ),
          "mdc-menu-surface--fullwidth": (
            /*fullWidth*/
            t[5]
          ),
          .../*internalClasses*/
          t[8]
        }))) && { class: i },
        (!a || m[0] & /*internalStyles, style*/
        516 && r !== (r = Object.entries(
          /*internalStyles*/
          t[9]
        ).map(Ml).concat([
          /*style*/
          t[2]
        ]).join(" "))) && { style: r },
        { role: "dialog" },
        m[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ])), s && ge(s.update) && m[0] & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        t[0]
      );
    },
    i(h) {
      a || (E(c, h), a = !0);
    },
    o(h) {
      L(c, h), a = !1;
    },
    d(h) {
      h && (U(e), U(n)), c && c.d(h), t[35](null), l = !1, Ze(o);
    }
  };
}
const Ml = ([t, e]) => `${t}: ${e};`;
function Fp(t, e, n) {
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
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l, o, u;
  const c = rt($e());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { static: m = !1 } = e, { anchor: g = !0 } = e, { fixed: p = !1 } = e, { open: A = m } = e, { managed: _ = !1 } = e, { fullWidth: S = !1 } = e, { quickOpen: C = !1 } = e, { anchorElement: M = void 0 } = e, { anchorCorner: D = void 0 } = e, { anchorMargin: b = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: O = 0 } = e, { horizontallyCenteredOnViewport: w = !1 } = e, { openBottomBias: y = 0 } = e, { neverRestoreFocus: v = !1 } = e, I, T, N = {}, q = {}, j;
  We("SMUI:list:role", "menu"), We("SMUI:list:item:role", "menuitem");
  const K = Rn;
  ct(() => (n(7, T = new Zo({
    addClass: R,
    removeClass: V,
    hasClass: k,
    hasAnchor: () => !!M,
    notifyClose: () => {
      _ || n(13, A = m), A || _e(I, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      _ || n(13, A = m), A || _e(I, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      _ || n(13, A = !0), A && _e(I, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      A || _e(I, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (W) => I.contains(W),
    isRtl: () => getComputedStyle(I).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (W) => {
      n(9, q["transform-origin"] = W, q);
    },
    isFocused: () => document.activeElement === I,
    saveFocus: () => {
      var W;
      j = (W = document.activeElement) !== null && W !== void 0 ? W : void 0;
    },
    restoreFocus: () => {
      !v && (!I || I.contains(document.activeElement)) && j && document.contains(j) && "focus" in j && j.focus();
    },
    getInnerDimensions: () => ({
      width: I.offsetWidth,
      height: I.offsetHeight
    }),
    getAnchorDimensions: () => M ? M.getBoundingClientRect() : null,
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
    setPosition: (W) => {
      n(9, q.left = "left" in W ? `${W.left}px` : "", q), n(9, q.right = "right" in W ? `${W.right}px` : "", q), n(9, q.top = "top" in W ? `${W.top}px` : "", q), n(9, q.bottom = "bottom" in W ? `${W.bottom}px` : "", q);
    },
    setMaxHeight: (W) => {
      n(9, q["max-height"] = W, q);
    }
  })), _e(I, "SMUIMenuSurface:mount", {
    get open() {
      return A;
    },
    set open(W) {
      n(13, A = W);
    },
    closeProgrammatic: ue
  }), T.init(), () => {
    var W;
    const qe = T.isHoistedElement;
    T.destroy(), qe && ((W = I.parentNode) === null || W === void 0 || W.removeChild(I));
  })), en(() => {
    var ie;
    g && I && ((ie = I.parentElement) === null || ie === void 0 || ie.classList.remove("mdc-menu-surface--anchor"));
  });
  function k(ie) {
    return ie in N ? N[ie] : ye().classList.contains(ie);
  }
  function R(ie) {
    N[ie] || n(8, N[ie] = !0, N);
  }
  function V(ie) {
    (!(ie in N) || N[ie]) && n(8, N[ie] = !1, N);
  }
  function ue(ie) {
    T.close(ie), n(13, A = !1);
  }
  function Ne(ie) {
    T && A && !_ && T.handleBodyClick(ie);
  }
  function Ie() {
    return A;
  }
  function Xe(ie) {
    n(13, A = ie);
  }
  function z(ie, W) {
    return T.setAbsolutePosition(ie, W);
  }
  function J(ie) {
    return T.setIsHoisted(ie);
  }
  function Ee() {
    return T.isFixed();
  }
  function ye() {
    return I;
  }
  function He(ie) {
    le[ie ? "unshift" : "push"](() => {
      I = ie, n(6, I);
    });
  }
  return t.$$set = (ie) => {
    e = X(X({}, e), it(ie)), n(12, r = pe(e, i)), "use" in ie && n(0, f = ie.use), "class" in ie && n(1, d = ie.class), "style" in ie && n(2, h = ie.style), "static" in ie && n(3, m = ie.static), "anchor" in ie && n(15, g = ie.anchor), "fixed" in ie && n(4, p = ie.fixed), "open" in ie && n(13, A = ie.open), "managed" in ie && n(16, _ = ie.managed), "fullWidth" in ie && n(5, S = ie.fullWidth), "quickOpen" in ie && n(17, C = ie.quickOpen), "anchorElement" in ie && n(14, M = ie.anchorElement), "anchorCorner" in ie && n(18, D = ie.anchorCorner), "anchorMargin" in ie && n(19, b = ie.anchorMargin), "maxHeight" in ie && n(20, O = ie.maxHeight), "horizontallyCenteredOnViewport" in ie && n(21, w = ie.horizontallyCenteredOnViewport), "openBottomBias" in ie && n(22, y = ie.openBottomBias), "neverRestoreFocus" in ie && n(23, v = ie.neverRestoreFocus), "$$scope" in ie && n(33, a = ie.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | t.$$.dirty[1] & /*_b, _c*/
    3 && I && g && !(!(n(30, l = I.parentElement) === null || l === void 0) && l.classList.contains("mdc-menu-surface--anchor")) && (n(31, o = I.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), n(14, M = n(32, u = I.parentElement) !== null && u !== void 0 ? u : void 0)), t.$$.dirty[0] & /*instance, open*/
    8320 && T && T.isOpen() !== A && (A ? T.open() : T.close()), t.$$.dirty[0] & /*instance, quickOpen*/
    131200 && T && T.setQuickOpen(C), t.$$.dirty[0] & /*instance, fixed*/
    144 && T && T.setFixedPosition(p), t.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && T && T.setMaxHeight(O), t.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && T && T.setIsHorizontallyCenteredOnViewport(w), t.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && T && D != null && (typeof D == "string" ? T.setAnchorCorner(K[D]) : T.setAnchorCorner(D)), t.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && T && T.setAnchorMargin(b), t.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && T && T.setOpenBottomBias(y);
  }, [
    f,
    d,
    h,
    m,
    p,
    S,
    I,
    T,
    N,
    q,
    c,
    Ne,
    r,
    A,
    M,
    g,
    _,
    C,
    D,
    b,
    O,
    w,
    y,
    v,
    Ie,
    Xe,
    z,
    J,
    Ee,
    ye,
    l,
    o,
    u,
    a,
    s,
    He
  ];
}
class wp extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Fp,
      Hp,
      ve,
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
function Up(t, { addClass: e = (i) => t.classList.add(i), removeClass: n = (i) => t.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Bp(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].default
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[22],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      4194304) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[22],
        e ? Oe(
          n,
          /*$$scope*/
          r[22],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[22]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Vp(t) {
  let e, n, i;
  const r = [
    { use: (
      /*usePass*/
      t[5]
    ) },
    {
      class: re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-menu": !0
      })
    },
    /*$$restProps*/
    t[9]
  ];
  function s(l) {
    t[19](l);
  }
  let a = {
    $$slots: { default: [Bp] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = X(a, r[l]);
  return (
    /*open*/
    t[0] !== void 0 && (a.open = /*open*/
    t[0]), e = new wp({ props: a }), t[18](e), le.push(() => gt(e, "open", s)), e.$on(
      "SMUIMenuSurface:mount",
      /*handleMenuSurfaceAccessor*/
      t[7]
    ), e.$on(
      "SMUIList:mount",
      /*handleListAccessor*/
      t[8]
    ), e.$on(
      "SMUIMenuSurface:opened",
      /*SMUIMenuSurface_opened_handler*/
      t[20]
    ), e.$on(
      "keydown",
      /*handleKeydown*/
      t[6]
    ), e.$on(
      "SMUIList:action",
      /*SMUIList_action_handler*/
      t[21]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(l, o) {
        $(e, l, o), i = !0;
      },
      p(l, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? me(r, [
          o & /*usePass*/
          32 && { use: (
            /*usePass*/
            l[5]
          ) },
          o & /*className*/
          2 && {
            class: re({
              [
                /*className*/
                l[1]
              ]: !0,
              "mdc-menu": !0
            })
          },
          o & /*$$restProps*/
          512 && Te(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: l }), !n && o & /*open*/
        1 && (n = !0, u.open = /*open*/
        l[0], pt(() => n = !1)), e.$set(u);
      },
      i(l) {
        i || (E(e.$$.fragment, l), i = !0);
      },
      o(l) {
        L(e.$$.fragment, l), i = !1;
      },
      d(l) {
        t[18](null), ee(e, l);
      }
    }
  );
}
function Gp(t, e, n) {
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
  let s = pe(e, r), { $$slots: a = {}, $$scope: l } = e;
  const { closest: o } = Vi, u = rt($e());
  let { use: c = [] } = e, { class: f = "" } = e, { open: d = !1 } = e, h, m, g, p;
  ct(() => (n(3, m = new Dp({
    addClassToElementAtIndex: (N, q) => {
      p.addClassForElementIndex(N, q);
    },
    removeClassFromElementAtIndex: (N, q) => {
      p.removeClassForElementIndex(N, q);
    },
    addAttributeToElementAtIndex: (N, q, j) => {
      p.setAttributeForElementIndex(N, q, j);
    },
    removeAttributeFromElementAtIndex: (N, q) => {
      p.removeAttributeForElementIndex(N, q);
    },
    getAttributeFromElementAtIndex: (N, q) => p.getAttributeFromElementIndex(N, q),
    elementContainsClass: (N, q) => N.classList.contains(q),
    closeSurface: (N) => {
      g.closeProgrammatic(N), _e(w(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (N) => p.getOrderedList().map((q) => q.element).indexOf(N),
    notifySelected: (N) => _e(
      w(),
      "SMUIMenu:selected",
      {
        index: N.index,
        item: p.getOrderedList()[N.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => p.items.length,
    focusItemAtIndex: (N) => p.focusItemAtIndex(N),
    focusListRoot: () => "focus" in p.element && p.element.focus(),
    isSelectableItemAtIndex: (N) => !!o(p.getOrderedList()[N].element, `.${qn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (N) => {
      const q = p.getOrderedList(), j = o(q[N].element, `.${qn.MENU_SELECTION_GROUP}`), K = j == null ? void 0 : j.querySelector(`.${qn.MENU_SELECTED_LIST_ITEM}`);
      return K ? q.map((k) => k.element).indexOf(K) : -1;
    }
  })), _e(w(), "SMUIMenu:mount", m), m.init(), () => {
    m.destroy();
  }));
  function A(N) {
    m && m.handleKeydown(N);
  }
  function _(N) {
    g || (g = N.detail);
  }
  function S(N) {
    p || n(4, p = N.detail);
  }
  function C() {
    return d;
  }
  function M(N) {
    n(0, d = N);
  }
  function D(N) {
    m.setDefaultFocusState(N);
  }
  function b() {
    return m.getSelectedIndex();
  }
  function O() {
    return h;
  }
  function w() {
    return h.getElement();
  }
  function y(N) {
    le[N ? "unshift" : "push"](() => {
      h = N, n(2, h);
    });
  }
  function v(N) {
    d = N, n(0, d);
  }
  const I = () => m && m.handleMenuSurfaceOpened(), T = (N) => m && m.handleItemAction(p.getOrderedList()[N.detail.index].element);
  return t.$$set = (N) => {
    e = X(X({}, e), it(N)), n(9, s = pe(e, r)), "use" in N && n(10, c = N.use), "class" in N && n(1, f = N.class), "open" in N && n(0, d = N.open), "$$scope" in N && n(22, l = N.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*use*/
    1024 && n(5, i = [u, ...c]);
  }, [
    d,
    f,
    h,
    m,
    p,
    i,
    A,
    _,
    S,
    s,
    c,
    C,
    M,
    D,
    b,
    O,
    w,
    a,
    y,
    v,
    I,
    T,
    l
  ];
}
class jp extends ke {
  constructor(e) {
    super(), De(this, e, Gp, Vp, ve, {
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
function qp(t) {
  let e;
  const n = (
    /*#slots*/
    t[42].default
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[44],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[1] & /*$$scope*/
      8192) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[44],
        e ? Oe(
          n,
          /*$$scope*/
          r[44],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[44]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Wp(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[13]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[16],
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
        "mdc-deprecated-list": !0,
        "mdc-deprecated-list--non-interactive": (
          /*nonInteractive*/
          t[2]
        ),
        "mdc-deprecated-list--dense": (
          /*dense*/
          t[3]
        ),
        "mdc-deprecated-list--textual-list": (
          /*textualList*/
          t[4]
        ),
        "mdc-deprecated-list--avatar-list": (
          /*avatarList*/
          t[5] || /*selectionDialog*/
          t[17]
        ),
        "mdc-deprecated-list--icon-list": (
          /*iconList*/
          t[6]
        ),
        "mdc-deprecated-list--image-list": (
          /*imageList*/
          t[7]
        ),
        "mdc-deprecated-list--thumbnail-list": (
          /*thumbnailList*/
          t[8]
        ),
        "mdc-deprecated-list--video-list": (
          /*videoList*/
          t[9]
        ),
        "mdc-deprecated-list--two-line": (
          /*twoLine*/
          t[10]
        ),
        "smui-list--three-line": (
          /*threeLine*/
          t[11] && !/*twoLine*/
          t[10]
        )
      })
    },
    { role: (
      /*role*/
      t[15]
    ) },
    /*$$restProps*/
    t[25]
  ];
  var s = (
    /*component*/
    t[12]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [qp] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = X(u, me(r, [
      o[0] & /*tag*/
      8192 && { tag: (
        /*tag*/
        l[13]
      ) },
      o[0] & /*forwardEvents, use*/
      65537 && {
        use: [
          /*forwardEvents*/
          l[16],
          .../*use*/
          l[0]
        ]
      },
      o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
      135166 && {
        class: re({
          [
            /*className*/
            l[1]
          ]: !0,
          "mdc-deprecated-list": !0,
          "mdc-deprecated-list--non-interactive": (
            /*nonInteractive*/
            l[2]
          ),
          "mdc-deprecated-list--dense": (
            /*dense*/
            l[3]
          ),
          "mdc-deprecated-list--textual-list": (
            /*textualList*/
            l[4]
          ),
          "mdc-deprecated-list--avatar-list": (
            /*avatarList*/
            l[5] || /*selectionDialog*/
            l[17]
          ),
          "mdc-deprecated-list--icon-list": (
            /*iconList*/
            l[6]
          ),
          "mdc-deprecated-list--image-list": (
            /*imageList*/
            l[7]
          ),
          "mdc-deprecated-list--thumbnail-list": (
            /*thumbnailList*/
            l[8]
          ),
          "mdc-deprecated-list--video-list": (
            /*videoList*/
            l[9]
          ),
          "mdc-deprecated-list--two-line": (
            /*twoLine*/
            l[10]
          ),
          "smui-list--three-line": (
            /*threeLine*/
            l[11] && !/*twoLine*/
            l[10]
          )
        })
      },
      o[0] & /*role*/
      32768 && { role: (
        /*role*/
        l[15]
      ) },
      o[0] & /*$$restProps*/
      33554432 && Te(
        /*$$restProps*/
        l[25]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[43](e), e.$on(
    "keydown",
    /*handleKeydown*/
    t[20]
  ), e.$on(
    "focusin",
    /*handleFocusin*/
    t[21]
  ), e.$on(
    "focusout",
    /*handleFocusout*/
    t[22]
  ), e.$on(
    "click",
    /*handleClick*/
    t[23]
  ), e.$on(
    "SMUIListItem:mount",
    /*handleItemMount*/
    t[18]
  ), e.$on(
    "SMUIListItem:unmount",
    /*handleItemUnmount*/
    t[19]
  ), e.$on(
    "SMUI:action",
    /*handleAction*/
    t[24]
  )), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(l, o) {
      e && $(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      4096 && s !== (s = /*component*/
      l[12])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[43](e), e.$on(
          "keydown",
          /*handleKeydown*/
          l[20]
        ), e.$on(
          "focusin",
          /*handleFocusin*/
          l[21]
        ), e.$on(
          "focusout",
          /*handleFocusout*/
          l[22]
        ), e.$on(
          "click",
          /*handleClick*/
          l[23]
        ), e.$on(
          "SMUIListItem:mount",
          /*handleItemMount*/
          l[18]
        ), e.$on(
          "SMUIListItem:unmount",
          /*handleItemUnmount*/
          l[19]
        ), e.$on(
          "SMUI:action",
          /*handleAction*/
          l[24]
        ), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? me(r, [
          o[0] & /*tag*/
          8192 && { tag: (
            /*tag*/
            l[13]
          ) },
          o[0] & /*forwardEvents, use*/
          65537 && {
            use: [
              /*forwardEvents*/
              l[16],
              .../*use*/
              l[0]
            ]
          },
          o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
          135166 && {
            class: re({
              [
                /*className*/
                l[1]
              ]: !0,
              "mdc-deprecated-list": !0,
              "mdc-deprecated-list--non-interactive": (
                /*nonInteractive*/
                l[2]
              ),
              "mdc-deprecated-list--dense": (
                /*dense*/
                l[3]
              ),
              "mdc-deprecated-list--textual-list": (
                /*textualList*/
                l[4]
              ),
              "mdc-deprecated-list--avatar-list": (
                /*avatarList*/
                l[5] || /*selectionDialog*/
                l[17]
              ),
              "mdc-deprecated-list--icon-list": (
                /*iconList*/
                l[6]
              ),
              "mdc-deprecated-list--image-list": (
                /*imageList*/
                l[7]
              ),
              "mdc-deprecated-list--thumbnail-list": (
                /*thumbnailList*/
                l[8]
              ),
              "mdc-deprecated-list--video-list": (
                /*videoList*/
                l[9]
              ),
              "mdc-deprecated-list--two-line": (
                /*twoLine*/
                l[10]
              ),
              "smui-list--three-line": (
                /*threeLine*/
                l[11] && !/*twoLine*/
                l[10]
              )
            })
          },
          o[0] & /*role*/
          32768 && { role: (
            /*role*/
            l[15]
          ) },
          o[0] & /*$$restProps*/
          33554432 && Te(
            /*$$restProps*/
            l[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && E(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[43](null), e && ee(e, l);
    }
  };
}
function zp(t, e, n) {
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
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l;
  const { closest: o, matches: u } = Vi, c = rt($e());
  let { use: f = [] } = e, { class: d = "" } = e, { nonInteractive: h = !1 } = e, { dense: m = !1 } = e, { textualList: g = !1 } = e, { avatarList: p = !1 } = e, { iconList: A = !1 } = e, { imageList: _ = !1 } = e, { thumbnailList: S = !1 } = e, { videoList: C = !1 } = e, { twoLine: M = !1 } = e, { threeLine: D = !1 } = e, { vertical: b = !0 } = e, { wrapFocus: O = (l = ze("SMUI:list:wrapFocus")) !== null && l !== void 0 ? l : !1 } = e, { singleSelection: w = !1 } = e, { disabledItemsFocusable: y = !1 } = e, { selectedIndex: v = -1 } = e, { radioList: I = !1 } = e, { checkList: T = !1 } = e, { hasTypeahead: N = !1 } = e, q, j, K = [], k = ze("SMUI:list:role"), R = ze("SMUI:list:nav");
  const V = /* @__PURE__ */ new WeakMap();
  let ue = ze("SMUI:dialog:selection"), Ne = ze("SMUI:addLayoutListener"), Ie, { component: Xe = wt } = e, { tag: z = Xe === wt ? R ? "nav" : "ul" : void 0 } = e;
  We("SMUI:list:nonInteractive", h), We("SMUI:separator:context", "list"), k || (w ? (k = "listbox", We("SMUI:list:item:role", "option")) : I ? (k = "radiogroup", We("SMUI:list:item:role", "radio")) : T ? (k = "group", We("SMUI:list:item:role", "checkbox")) : (k = "list", We("SMUI:list:item:role", void 0))), Ne && (Ie = Ne(ne)), ct(() => {
    n(41, j = new Lp({
      addClassForElementIndex: Q,
      focusItemAtIndex: Se,
      getAttributeForElementIndex: (be, Ae) => {
        var lt, tn;
        return (tn = (lt = Ve()[be]) === null || lt === void 0 ? void 0 : lt.getAttr(Ae)) !== null && tn !== void 0 ? tn : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Ve().map((be) => be.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => K.length,
      getPrimaryTextAtIndex: G,
      hasCheckboxAtIndex: (be) => {
        var Ae, lt;
        return (lt = (Ae = Ve()[be]) === null || Ae === void 0 ? void 0 : Ae.hasCheckbox) !== null && lt !== void 0 ? lt : !1;
      },
      hasRadioAtIndex: (be) => {
        var Ae, lt;
        return (lt = (Ae = Ve()[be]) === null || Ae === void 0 ? void 0 : Ae.hasRadio) !== null && lt !== void 0 ? lt : !1;
      },
      isCheckboxCheckedAtIndex: (be) => {
        var Ae;
        const lt = Ve()[be];
        return (Ae = (lt == null ? void 0 : lt.hasCheckbox) && lt.checked) !== null && Ae !== void 0 ? Ae : !1;
      },
      isFocusInsideList: () => q != null && ae() !== document.activeElement && ae().contains(document.activeElement),
      isRootFocused: () => q != null && document.activeElement === ae(),
      listItemAtIndexHasClass: St,
      notifyAction: (be) => {
        n(26, v = be), q != null && _e(ae(), "SMUIList:action", { index: be }, void 0, !0);
      },
      notifySelectionChange: (be) => {
        q != null && _e(ae(), "SMUIList:selectionChange", { changedIndices: be });
      },
      removeClassForElementIndex: Ce,
      setAttributeForElementIndex: je,
      setCheckedCheckboxOrRadioAtIndex: (be, Ae) => {
        Ve()[be].checked = Ae;
      },
      setTabIndexForListItemChildren: (be, Ae) => {
        const lt = Ve()[be];
        Array.prototype.forEach.call(lt.element.querySelectorAll("button:not(:disabled), a"), (ti) => {
          ti.setAttribute("tabindex", Ae);
        });
      }
    }));
    const Y = {
      get element() {
        return ae();
      },
      get items() {
        return K;
      },
      get typeaheadInProgress() {
        return j.isTypeaheadInProgress();
      },
      typeaheadMatchItem(be, Ae) {
        return j.typeaheadMatchItem(
          be,
          Ae,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Ve,
      focusItemAtIndex: Se,
      addClassForElementIndex: Q,
      removeClassForElementIndex: Ce,
      setAttributeForElementIndex: je,
      removeAttributeForElementIndex: Fe,
      getAttributeFromElementIndex: Rt,
      getPrimaryTextAtIndex: G
    };
    return _e(ae(), "SMUIList:mount", Y), j.init(), j.layout(), () => {
      j.destroy();
    };
  }), en(() => {
    Ie && Ie();
  });
  function J(Y) {
    K.push(Y.detail), V.set(Y.detail.element, Y.detail), w && Y.detail.selected && n(26, v = se(Y.detail.element)), Y.stopPropagation();
  }
  function Ee(Y) {
    var be;
    const Ae = (be = Y.detail && K.indexOf(Y.detail)) !== null && be !== void 0 ? be : -1;
    Ae !== -1 && (K.splice(Ae, 1), K = K, V.delete(Y.detail.element)), Y.stopPropagation();
  }
  function ye(Y) {
    j && Y.target && j.handleKeydown(Y, Y.target.classList.contains("mdc-deprecated-list-item"), se(Y.target));
  }
  function He(Y) {
    j && Y.target && j.handleFocusIn(se(Y.target));
  }
  function ie(Y) {
    j && Y.target && j.handleFocusOut(se(Y.target));
  }
  function W(Y) {
    j && Y.target && j.handleClick(se(Y.target), !u(Y.target, 'input[type="checkbox"], input[type="radio"]'), Y);
  }
  function qe(Y) {
    if (I || T) {
      const be = se(Y.target);
      if (be !== -1) {
        const Ae = Ve()[be];
        Ae && (I && !Ae.checked || T) && (u(Y.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Ae.checked = !Ae.checked), Ae.activateRipple(), window.requestAnimationFrame(() => {
          Ae.deactivateRipple();
        }));
      }
    }
  }
  function Ve() {
    return q == null ? [] : [...ae().children].map((Y) => V.get(Y)).filter((Y) => Y && Y._smui_list_item_accessor);
  }
  function St(Y, be) {
    var Ae;
    const lt = Ve()[Y];
    return (Ae = lt && lt.hasClass(be)) !== null && Ae !== void 0 ? Ae : !1;
  }
  function Q(Y, be) {
    const Ae = Ve()[Y];
    Ae && Ae.addClass(be);
  }
  function Ce(Y, be) {
    const Ae = Ve()[Y];
    Ae && Ae.removeClass(be);
  }
  function je(Y, be, Ae) {
    const lt = Ve()[Y];
    lt && lt.addAttr(be, Ae);
  }
  function Fe(Y, be) {
    const Ae = Ve()[Y];
    Ae && Ae.removeAttr(be);
  }
  function Rt(Y, be) {
    const Ae = Ve()[Y];
    return Ae ? Ae.getAttr(be) : null;
  }
  function G(Y) {
    var be;
    const Ae = Ve()[Y];
    return (be = Ae && Ae.getPrimaryText()) !== null && be !== void 0 ? be : "";
  }
  function se(Y) {
    const be = o(Y, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return be && u(be, ".mdc-deprecated-list-item") ? Ve().map((Ae) => Ae == null ? void 0 : Ae.element).indexOf(be) : -1;
  }
  function ne() {
    return j.layout();
  }
  function Ke(Y, be) {
    return j.setEnabled(Y, be);
  }
  function ht() {
    return j.isTypeaheadInProgress();
  }
  function ft() {
    return j.getSelectedIndex();
  }
  function et() {
    return j.getFocusedItemIndex();
  }
  function Se(Y) {
    const be = Ve()[Y];
    be && "focus" in be.element && be.element.focus();
  }
  function ae() {
    return q.getElement();
  }
  function qt(Y) {
    le[Y ? "unshift" : "push"](() => {
      q = Y, n(14, q);
    });
  }
  return t.$$set = (Y) => {
    e = X(X({}, e), it(Y)), n(25, r = pe(e, i)), "use" in Y && n(0, f = Y.use), "class" in Y && n(1, d = Y.class), "nonInteractive" in Y && n(2, h = Y.nonInteractive), "dense" in Y && n(3, m = Y.dense), "textualList" in Y && n(4, g = Y.textualList), "avatarList" in Y && n(5, p = Y.avatarList), "iconList" in Y && n(6, A = Y.iconList), "imageList" in Y && n(7, _ = Y.imageList), "thumbnailList" in Y && n(8, S = Y.thumbnailList), "videoList" in Y && n(9, C = Y.videoList), "twoLine" in Y && n(10, M = Y.twoLine), "threeLine" in Y && n(11, D = Y.threeLine), "vertical" in Y && n(27, b = Y.vertical), "wrapFocus" in Y && n(28, O = Y.wrapFocus), "singleSelection" in Y && n(29, w = Y.singleSelection), "disabledItemsFocusable" in Y && n(30, y = Y.disabledItemsFocusable), "selectedIndex" in Y && n(26, v = Y.selectedIndex), "radioList" in Y && n(31, I = Y.radioList), "checkList" in Y && n(32, T = Y.checkList), "hasTypeahead" in Y && n(33, N = Y.hasTypeahead), "component" in Y && n(12, Xe = Y.component), "tag" in Y && n(13, z = Y.tag), "$$scope" in Y && n(44, a = Y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*vertical*/
    134217728 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setVerticalOrientation(b), t.$$.dirty[0] & /*wrapFocus*/
    268435456 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setWrapFocus(O), t.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && j && j.setHasTypeahead(N), t.$$.dirty[0] & /*singleSelection*/
    536870912 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setSingleSelection(w), t.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setDisabledItemsFocusable(y), t.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | t.$$.dirty[1] & /*instance*/
    1024 && j && w && ft() !== v && j.setSelectedIndex(v);
  }, [
    f,
    d,
    h,
    m,
    g,
    p,
    A,
    _,
    S,
    C,
    M,
    D,
    Xe,
    z,
    q,
    k,
    c,
    ue,
    J,
    Ee,
    ye,
    He,
    ie,
    W,
    qe,
    r,
    v,
    b,
    O,
    w,
    y,
    I,
    T,
    N,
    ne,
    Ke,
    ht,
    ft,
    et,
    Se,
    ae,
    j,
    s,
    qt,
    a
  ];
}
class Kp extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      zp,
      Wp,
      ve,
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
function Dl(t) {
  let e;
  return {
    c() {
      e = x("span"), P(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function Xp(t) {
  let e, n, i = (
    /*ripple*/
    t[7] && Dl()
  );
  const r = (
    /*#slots*/
    t[34].default
  ), s = Le(
    r,
    t,
    /*$$scope*/
    t[37],
    null
  );
  return {
    c() {
      i && i.c(), e = Ye(), s && s.c();
    },
    m(a, l) {
      i && i.m(a, l), B(a, e, l), s && s.m(a, l), n = !0;
    },
    p(a, l) {
      /*ripple*/
      a[7] ? i || (i = Dl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), s && s.p && (!n || l[1] & /*$$scope*/
      64) && Re(
        s,
        r,
        a,
        /*$$scope*/
        a[37],
        n ? Oe(
          r,
          /*$$scope*/
          a[37],
          l,
          null
        ) : Me(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      n || (E(s, a), n = !0);
    },
    o(a) {
      L(s, a), n = !1;
    },
    d(a) {
      a && U(e), i && i.d(a), s && s.d(a);
    }
  };
}
function Yp(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[14]
    ) },
    {
      use: [
        .../*nonInteractive*/
        t[6] ? [] : [
          [
            Dt,
            {
              ripple: !/*input*/
              t[16],
              unbounded: !1,
              color: (
                /*activated*/
                (t[1] || /*selected*/
                t[0]) && /*color*/
                t[5] == null ? "primary" : (
                  /*color*/
                  t[5]
                )
              ),
              disabled: (
                /*disabled*/
                t[10]
              ),
              addClass: (
                /*addClass*/
                t[24]
              ),
              removeClass: (
                /*removeClass*/
                t[25]
              ),
              addStyle: (
                /*addStyle*/
                t[26]
              )
            }
          ]
        ],
        /*forwardEvents*/
        t[22],
        .../*use*/
        t[2]
      ]
    },
    {
      class: re({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-deprecated-list-item": !/*wrapper*/
        t[8],
        "mdc-deprecated-list-item__wrapper": (
          /*wrapper*/
          t[8]
        ),
        "mdc-deprecated-list-item--activated": (
          /*activated*/
          t[1]
        ),
        "mdc-deprecated-list-item--selected": (
          /*selected*/
          t[0]
        ),
        "mdc-deprecated-list-item--disabled": (
          /*disabled*/
          t[10]
        ),
        "mdc-menu-item--selected": !/*nav*/
        t[23] && /*role*/
        t[9] === "menuitem" && /*selected*/
        t[0],
        "smui-menu-item--non-interactive": (
          /*nonInteractive*/
          t[6]
        ),
        .../*internalClasses*/
        t[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[19]
      ).map(Rr).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    /*nav*/
    t[23] && /*activated*/
    t[1] ? { "aria-current": "page" } : {},
    !/*nav*/
    t[23] || /*wrapper*/
    t[8] ? { role: (
      /*role*/
      t[9]
    ) } : {},
    !/*nav*/
    t[23] && /*role*/
    t[9] === "option" ? {
      "aria-selected": (
        /*selected*/
        t[0] ? "true" : "false"
      )
    } : {},
    !/*nav*/
    t[23] && /*role*/
    (t[9] === "radio" || /*role*/
    t[9] === "checkbox") ? {
      "aria-checked": (
        /*input*/
        t[16] && /*input*/
        t[16].checked ? "true" : "false"
      )
    } : {},
    /*nav*/
    t[23] ? {} : {
      "aria-disabled": (
        /*disabled*/
        t[10] ? "true" : "false"
      )
    },
    {
      "data-menu-item-skip-restore-focus": (
        /*skipRestoreFocus*/
        t[11] || void 0
      )
    },
    { tabindex: (
      /*tabindex*/
      t[21]
    ) },
    { href: (
      /*href*/
      t[12]
    ) },
    /*internalAttrs*/
    t[20],
    /*$$restProps*/
    t[29]
  ];
  var s = (
    /*component*/
    t[13]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [Xp] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = X(u, me(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        l[14]
      ) },
      o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
      121701479 && {
        use: [
          .../*nonInteractive*/
          l[6] ? [] : [
            [
              Dt,
              {
                ripple: !/*input*/
                l[16],
                unbounded: !1,
                color: (
                  /*activated*/
                  (l[1] || /*selected*/
                  l[0]) && /*color*/
                  l[5] == null ? "primary" : (
                    /*color*/
                    l[5]
                  )
                ),
                disabled: (
                  /*disabled*/
                  l[10]
                ),
                addClass: (
                  /*addClass*/
                  l[24]
                ),
                removeClass: (
                  /*removeClass*/
                  l[25]
                ),
                addStyle: (
                  /*addStyle*/
                  l[26]
                )
              }
            ]
          ],
          /*forwardEvents*/
          l[22],
          .../*use*/
          l[2]
        ]
      },
      o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
      8652619 && {
        class: re({
          [
            /*className*/
            l[3]
          ]: !0,
          "mdc-deprecated-list-item": !/*wrapper*/
          l[8],
          "mdc-deprecated-list-item__wrapper": (
            /*wrapper*/
            l[8]
          ),
          "mdc-deprecated-list-item--activated": (
            /*activated*/
            l[1]
          ),
          "mdc-deprecated-list-item--selected": (
            /*selected*/
            l[0]
          ),
          "mdc-deprecated-list-item--disabled": (
            /*disabled*/
            l[10]
          ),
          "mdc-menu-item--selected": !/*nav*/
          l[23] && /*role*/
          l[9] === "menuitem" && /*selected*/
          l[0],
          "smui-menu-item--non-interactive": (
            /*nonInteractive*/
            l[6]
          ),
          .../*internalClasses*/
          l[18]
        })
      },
      o[0] & /*internalStyles, style*/
      524304 && {
        style: Object.entries(
          /*internalStyles*/
          l[19]
        ).map(Rr).concat([
          /*style*/
          l[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && Te(
        /*nav*/
        l[23] && /*activated*/
        l[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && Te(!/*nav*/
      l[23] || /*wrapper*/
      l[8] ? { role: (
        /*role*/
        l[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && Te(!/*nav*/
      l[23] && /*role*/
      l[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          l[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && Te(!/*nav*/
      l[23] && /*role*/
      (l[9] === "radio" || /*role*/
      l[9] === "checkbox") ? {
        "aria-checked": (
          /*input*/
          l[16] && /*input*/
          l[16].checked ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, disabled*/
      8389632 && Te(/*nav*/
      l[23] ? {} : {
        "aria-disabled": (
          /*disabled*/
          l[10] ? "true" : "false"
        )
      }),
      o[0] & /*skipRestoreFocus*/
      2048 && {
        "data-menu-item-skip-restore-focus": (
          /*skipRestoreFocus*/
          l[11] || void 0
        )
      },
      o[0] & /*tabindex*/
      2097152 && { tabindex: (
        /*tabindex*/
        l[21]
      ) },
      o[0] & /*href*/
      4096 && { href: (
        /*href*/
        l[12]
      ) },
      o[0] & /*internalAttrs*/
      1048576 && Te(
        /*internalAttrs*/
        l[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Te(
        /*$$restProps*/
        l[29]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[35](e), e.$on(
    "click",
    /*action*/
    t[15]
  ), e.$on(
    "keydown",
    /*handleKeydown*/
    t[27]
  ), e.$on(
    "SMUIGenericInput:mount",
    /*handleInputMount*/
    t[28]
  ), e.$on(
    "SMUIGenericInput:unmount",
    /*SMUIGenericInput_unmount_handler*/
    t[36]
  )), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(l, o) {
      e && $(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[35](e), e.$on(
          "click",
          /*action*/
          l[15]
        ), e.$on(
          "keydown",
          /*handleKeydown*/
          l[27]
        ), e.$on(
          "SMUIGenericInput:mount",
          /*handleInputMount*/
          l[28]
        ), e.$on(
          "SMUIGenericInput:unmount",
          /*SMUIGenericInput_unmount_handler*/
          l[36]
        ), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? me(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            l[14]
          ) },
          o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
          121701479 && {
            use: [
              .../*nonInteractive*/
              l[6] ? [] : [
                [
                  Dt,
                  {
                    ripple: !/*input*/
                    l[16],
                    unbounded: !1,
                    color: (
                      /*activated*/
                      (l[1] || /*selected*/
                      l[0]) && /*color*/
                      l[5] == null ? "primary" : (
                        /*color*/
                        l[5]
                      )
                    ),
                    disabled: (
                      /*disabled*/
                      l[10]
                    ),
                    addClass: (
                      /*addClass*/
                      l[24]
                    ),
                    removeClass: (
                      /*removeClass*/
                      l[25]
                    ),
                    addStyle: (
                      /*addStyle*/
                      l[26]
                    )
                  }
                ]
              ],
              /*forwardEvents*/
              l[22],
              .../*use*/
              l[2]
            ]
          },
          o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
          8652619 && {
            class: re({
              [
                /*className*/
                l[3]
              ]: !0,
              "mdc-deprecated-list-item": !/*wrapper*/
              l[8],
              "mdc-deprecated-list-item__wrapper": (
                /*wrapper*/
                l[8]
              ),
              "mdc-deprecated-list-item--activated": (
                /*activated*/
                l[1]
              ),
              "mdc-deprecated-list-item--selected": (
                /*selected*/
                l[0]
              ),
              "mdc-deprecated-list-item--disabled": (
                /*disabled*/
                l[10]
              ),
              "mdc-menu-item--selected": !/*nav*/
              l[23] && /*role*/
              l[9] === "menuitem" && /*selected*/
              l[0],
              "smui-menu-item--non-interactive": (
                /*nonInteractive*/
                l[6]
              ),
              .../*internalClasses*/
              l[18]
            })
          },
          o[0] & /*internalStyles, style*/
          524304 && {
            style: Object.entries(
              /*internalStyles*/
              l[19]
            ).map(Rr).concat([
              /*style*/
              l[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && Te(
            /*nav*/
            l[23] && /*activated*/
            l[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && Te(!/*nav*/
          l[23] || /*wrapper*/
          l[8] ? { role: (
            /*role*/
            l[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && Te(!/*nav*/
          l[23] && /*role*/
          l[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              l[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && Te(!/*nav*/
          l[23] && /*role*/
          (l[9] === "radio" || /*role*/
          l[9] === "checkbox") ? {
            "aria-checked": (
              /*input*/
              l[16] && /*input*/
              l[16].checked ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, disabled*/
          8389632 && Te(/*nav*/
          l[23] ? {} : {
            "aria-disabled": (
              /*disabled*/
              l[10] ? "true" : "false"
            )
          }),
          o[0] & /*skipRestoreFocus*/
          2048 && {
            "data-menu-item-skip-restore-focus": (
              /*skipRestoreFocus*/
              l[11] || void 0
            )
          },
          o[0] & /*tabindex*/
          2097152 && { tabindex: (
            /*tabindex*/
            l[21]
          ) },
          o[0] & /*href*/
          4096 && { href: (
            /*href*/
            l[12]
          ) },
          o[0] & /*internalAttrs*/
          1048576 && Te(
            /*internalAttrs*/
            l[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Te(
            /*$$restProps*/
            l[29]
          )
        ]) : {};
        o[0] & /*ripple*/
        128 | o[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && E(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[35](null), e && ee(e, l);
    }
  };
}
let Zp = 0;
const Rr = ([t, e]) => `${t}: ${e};`;
function Qp(t, e, n) {
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
  let s = pe(e, r), { $$slots: a = {}, $$scope: l } = e;
  var o;
  const u = rt($e());
  let c = () => {
  };
  function f(Q) {
    return Q === c;
  }
  let { use: d = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { color: g = void 0 } = e, { nonInteractive: p = (o = ze("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  We("SMUI:list:nonInteractive", void 0);
  let { ripple: A = !p } = e, { wrapper: _ = !1 } = e, { activated: S = !1 } = e, { role: C = _ ? "presentation" : ze("SMUI:list:item:role") } = e;
  We("SMUI:list:item:role", void 0);
  let { selected: M = !1 } = e, { disabled: D = !1 } = e, { skipRestoreFocus: b = !1 } = e, { tabindex: O = c } = e, { inputId: w = "SMUI-form-field-list-" + Zp++ } = e, { href: y = void 0 } = e, v, I = {}, T = {}, N = {}, q, j, K = ze("SMUI:list:item:nav"), { component: k = wt } = e, { tag: R = k === wt ? K ? y ? "a" : "span" : "li" : void 0 } = e;
  We("SMUI:generic:input:props", { id: w }), We("SMUI:separator:context", void 0), ct(() => {
    if (!M && !p) {
      let Ce = !0, je = v.getElement();
      for (; je.previousSibling; )
        if (je = je.previousSibling, je.nodeType === 1 && je.classList.contains("mdc-deprecated-list-item") && !je.classList.contains("mdc-deprecated-list-item--disabled")) {
          Ce = !1;
          break;
        }
      Ce && (j = window.requestAnimationFrame(() => Ee(je)));
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return qe();
      },
      get selected() {
        return M;
      },
      set selected(Ce) {
        n(0, M = Ce);
      },
      hasClass: V,
      addClass: ue,
      removeClass: Ne,
      getAttr: Xe,
      addAttr: z,
      removeAttr: J,
      getPrimaryText: W,
      // For inputs within item.
      get checked() {
        var Ce;
        return (Ce = q && q.checked) !== null && Ce !== void 0 ? Ce : !1;
      },
      set checked(Ce) {
        q && n(16, q.checked = !!Ce, q);
      },
      get hasCheckbox() {
        return !!(q && "_smui_checkbox_accessor" in q);
      },
      get hasRadio() {
        return !!(q && "_smui_radio_accessor" in q);
      },
      activateRipple() {
        q && q.activateRipple();
      },
      deactivateRipple() {
        q && q.deactivateRipple();
      },
      // For select options.
      getValue() {
        return s.value;
      },
      // For autocomplete
      action: ie,
      get tabindex() {
        return i;
      },
      set tabindex(Ce) {
        n(30, O = Ce);
      },
      get disabled() {
        return D;
      },
      get activated() {
        return S;
      },
      set activated(Ce) {
        n(1, S = Ce);
      }
    };
    return _e(qe(), "SMUIListItem:mount", Q), () => {
      _e(qe(), "SMUIListItem:unmount", Q);
    };
  }), en(() => {
    j && window.cancelAnimationFrame(j);
  });
  function V(Q) {
    return Q in I ? I[Q] : qe().classList.contains(Q);
  }
  function ue(Q) {
    I[Q] || n(18, I[Q] = !0, I);
  }
  function Ne(Q) {
    (!(Q in I) || I[Q]) && n(18, I[Q] = !1, I);
  }
  function Ie(Q, Ce) {
    T[Q] != Ce && (Ce === "" || Ce == null ? (delete T[Q], n(19, T)) : n(19, T[Q] = Ce, T));
  }
  function Xe(Q) {
    var Ce;
    return Q in N ? (Ce = N[Q]) !== null && Ce !== void 0 ? Ce : null : qe().getAttribute(Q);
  }
  function z(Q, Ce) {
    N[Q] !== Ce && n(20, N[Q] = Ce, N);
  }
  function J(Q) {
    (!(Q in N) || N[Q] != null) && n(20, N[Q] = void 0, N);
  }
  function Ee(Q) {
    let Ce = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const je = Q.attributes.getNamedItem("tabindex");
        if (je && je.value === "0") {
          Ce = !1;
          break;
        }
      }
    Ce && n(21, i = 0);
  }
  function ye(Q) {
    const Ce = Q.key === "Enter", je = Q.key === "Space";
    (Ce || je) && ie(Q);
  }
  function He(Q) {
    ("_smui_checkbox_accessor" in Q.detail || "_smui_radio_accessor" in Q.detail) && n(16, q = Q.detail);
  }
  function ie(Q) {
    D || _e(qe(), "SMUI:action", Q);
  }
  function W() {
    var Q, Ce, je;
    const Fe = qe(), Rt = Fe.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Rt)
      return (Q = Rt.textContent) !== null && Q !== void 0 ? Q : "";
    const G = Fe.querySelector(".mdc-deprecated-list-item__text");
    return G ? (Ce = G.textContent) !== null && Ce !== void 0 ? Ce : "" : (je = Fe.textContent) !== null && je !== void 0 ? je : "";
  }
  function qe() {
    return v.getElement();
  }
  function Ve(Q) {
    le[Q ? "unshift" : "push"](() => {
      v = Q, n(17, v);
    });
  }
  const St = () => n(16, q = void 0);
  return t.$$set = (Q) => {
    e = X(X({}, e), it(Q)), n(29, s = pe(e, r)), "use" in Q && n(2, d = Q.use), "class" in Q && n(3, h = Q.class), "style" in Q && n(4, m = Q.style), "color" in Q && n(5, g = Q.color), "nonInteractive" in Q && n(6, p = Q.nonInteractive), "ripple" in Q && n(7, A = Q.ripple), "wrapper" in Q && n(8, _ = Q.wrapper), "activated" in Q && n(1, S = Q.activated), "role" in Q && n(9, C = Q.role), "selected" in Q && n(0, M = Q.selected), "disabled" in Q && n(10, D = Q.disabled), "skipRestoreFocus" in Q && n(11, b = Q.skipRestoreFocus), "tabindex" in Q && n(30, O = Q.tabindex), "inputId" in Q && n(31, w = Q.inputId), "href" in Q && n(12, y = Q.href), "component" in Q && n(13, k = Q.component), "tag" in Q && n(14, R = Q.tag), "$$scope" in Q && n(37, l = Q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && n(21, i = f(O) ? !p && !D && (M || q && q.checked) ? 0 : -1 : O);
  }, [
    M,
    S,
    d,
    h,
    m,
    g,
    p,
    A,
    _,
    C,
    D,
    b,
    y,
    k,
    R,
    ie,
    q,
    v,
    I,
    T,
    N,
    i,
    u,
    K,
    ue,
    Ne,
    Ie,
    ye,
    He,
    s,
    O,
    w,
    W,
    qe,
    a,
    Ve,
    St,
    l
  ];
}
class Jp extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Qp,
      Yp,
      ve,
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
Ct({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Ct({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Ct({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function xp(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[8].default
  ), o = Le(
    l,
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = X(c, u[f]);
  return {
    c() {
      e = x("span"), o && o.c(), fe(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[9](e), r = !0, s || (a = [
        de(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[3].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      128) && Re(
        o,
        l,
        f,
        /*$$scope*/
        f[7],
        r ? Oe(
          l,
          /*$$scope*/
          f[7],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[7]
        ),
        null
      ), fe(e, c = me(u, [
        (!r || d & /*className*/
        2 && n !== (n = re({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            f[4]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), i && ge(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (E(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[9](null), s = !1, Ze(a);
    }
  };
}
function $p(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = ze("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function h(m) {
    le[m ? "unshift" : "push"](() => {
      c = m, n(2, c);
    });
  }
  return t.$$set = (m) => {
    e = X(X({}, e), it(m)), n(5, r = pe(e, i)), "use" in m && n(0, o = m.use), "class" in m && n(1, u = m.class), "$$scope" in m && n(7, a = m.$$scope);
  }, [
    o,
    u,
    c,
    l,
    f,
    r,
    d,
    a,
    s,
    h
  ];
}
class eg extends ke {
  constructor(e) {
    super(), De(this, e, $p, xp, ve, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Ct({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Ct({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Ct({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Ct({
  class: "mdc-menu__selection-group-icon",
  component: eg
});
function tg(t) {
  let e;
  return {
    c() {
      e = ut(
        /*content*/
        t[8]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      256 && dt(
        e,
        /*content*/
        n[8]
      );
    },
    i: Qe,
    o: Qe,
    d(n) {
      n && U(e);
    }
  };
}
function ng(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      4096) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? Oe(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ig(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [ng, tg], f = [];
  function d(g, p) {
    return (
      /*content*/
      g[8] == null ? 0 : 1
    );
  }
  n = d(t), i = f[n] = c[n](t);
  let h = [
    {
      class: r = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": (
          /*validationMsg*/
          t[4]
        ),
        "mdc-select-helper-text--validation-msg-persistent": (
          /*persistent*/
          t[3]
        ),
        .../*internalClasses*/
        t[6]
      })
    },
    {
      "aria-hidden": s = /*persistent*/
      t[3] ? void 0 : "true"
    },
    { id: (
      /*id*/
      t[2]
    ) },
    /*internalAttrs*/
    t[7],
    /*$$restProps*/
    t[10]
  ], m = {};
  for (let g = 0; g < h.length; g += 1)
    m = X(m, h[g]);
  return {
    c() {
      e = x("div"), i.c(), fe(e, m);
    },
    m(g, p) {
      B(g, e, p), f[n].m(e, null), t[14](e), l = !0, o || (u = [
        de(a = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[9].call(null, e)
        )
      ], o = !0);
    },
    p(g, [p]) {
      let A = n;
      n = d(g), n === A ? f[n].p(g, p) : (Ue(), L(f[A], 1, 1, () => {
        f[A] = null;
      }), Be(), i = f[n], i ? i.p(g, p) : (i = f[n] = c[n](g), i.c()), E(i, 1), i.m(e, null)), fe(e, m = me(h, [
        (!l || p & /*className, validationMsg, persistent, internalClasses*/
        90 && r !== (r = re({
          [
            /*className*/
            g[1]
          ]: !0,
          "mdc-select-helper-text": !0,
          "mdc-select-helper-text--validation-msg": (
            /*validationMsg*/
            g[4]
          ),
          "mdc-select-helper-text--validation-msg-persistent": (
            /*persistent*/
            g[3]
          ),
          .../*internalClasses*/
          g[6]
        }))) && { class: r },
        (!l || p & /*persistent*/
        8 && s !== (s = /*persistent*/
        g[3] ? void 0 : "true")) && { "aria-hidden": s },
        (!l || p & /*id*/
        4) && { id: (
          /*id*/
          g[2]
        ) },
        p & /*internalAttrs*/
        128 && /*internalAttrs*/
        g[7],
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        g[10]
      ])), a && ge(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i(g) {
      l || (E(i), l = !0);
    },
    o(g) {
      L(i), l = !1;
    },
    d(g) {
      g && U(e), f[n].d(), t[14](null), o = !1, Ze(u);
    }
  };
}
let rg = 0;
function sg(t, e, n) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + rg++ } = e, { persistent: f = !1 } = e, { validationMsg: d = !1 } = e, h, m, g = {}, p = {}, A;
  ct(() => (m = new Np({
    addClass: S,
    removeClass: C,
    hasClass: _,
    getAttr: M,
    setAttr: D,
    removeAttr: b,
    setContent: (y) => {
      n(8, A = y);
    }
  }), c.startsWith("SMUI-select-helper-text-") && _e(O(), "SMUISelectHelperText:id", c), _e(O(), "SMUISelectHelperText:mount", m), m.init(), () => {
    _e(O(), "SMUISelectHelperText:unmount", m), m.destroy();
  }));
  function _(y) {
    return y in g ? g[y] : O().classList.contains(y);
  }
  function S(y) {
    g[y] || n(6, g[y] = !0, g);
  }
  function C(y) {
    (!(y in g) || g[y]) && n(6, g[y] = !1, g);
  }
  function M(y) {
    var v;
    return y in p ? (v = p[y]) !== null && v !== void 0 ? v : null : O().getAttribute(y);
  }
  function D(y, v) {
    p[y] !== v && n(7, p[y] = v, p);
  }
  function b(y) {
    (!(y in p) || p[y] != null) && n(7, p[y] = void 0, p);
  }
  function O() {
    return h;
  }
  function w(y) {
    le[y ? "unshift" : "push"](() => {
      h = y, n(5, h);
    });
  }
  return t.$$set = (y) => {
    e = X(X({}, e), it(y)), n(10, r = pe(e, i)), "use" in y && n(0, o = y.use), "class" in y && n(1, u = y.class), "id" in y && n(2, c = y.id), "persistent" in y && n(3, f = y.persistent), "validationMsg" in y && n(4, d = y.validationMsg), "$$scope" in y && n(12, a = y.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    g,
    p,
    A,
    l,
    r,
    O,
    a,
    s,
    w
  ];
}
class lg extends ke {
  constructor(e) {
    super(), De(this, e, sg, ig, ve, {
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
const ag = (t) => ({}), kl = (t) => ({}), og = (t) => ({}), Nl = (t) => ({}), ug = (t) => ({}), Pl = (t) => ({}), cg = (t) => ({}), Hl = (t) => ({});
function Fl(t) {
  let e, n = [
    { type: "hidden" },
    { required: (
      /*required*/
      t[10]
    ) },
    { disabled: (
      /*disabled*/
      t[6]
    ) },
    { value: (
      /*value*/
      t[0]
    ) },
    Ge(
      /*$$restProps*/
      t[53],
      "input$"
    )
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = X(i, n[r]);
  return {
    c() {
      e = x("input"), fe(e, i);
    },
    m(r, s) {
      B(r, e, s), e.autofocus && e.focus();
    },
    p(r, s) {
      fe(e, i = me(n, [
        { type: "hidden" },
        s[0] & /*required*/
        1024 && { required: (
          /*required*/
          r[10]
        ) },
        s[0] & /*disabled*/
        64 && { disabled: (
          /*disabled*/
          r[6]
        ) },
        s[0] & /*value*/
        1 && { value: (
          /*value*/
          r[0]
        ) },
        s[1] & /*$$restProps*/
        4194304 && Ge(
          /*$$restProps*/
          r[53],
          "input$"
        )
      ]));
    },
    d(r) {
      r && U(e);
    }
  };
}
function wl(t) {
  let e;
  return {
    c() {
      e = x("span"), P(e, "class", "mdc-select__ripple");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function Ul(t) {
  let e, n;
  const i = [
    { id: (
      /*inputId*/
      t[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        t[42] !== ""
      )
    },
    { required: (
      /*required*/
      t[10]
    ) },
    Ge(
      /*$$restProps*/
      t[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [fg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new ji({ props: r }), t[67](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? me(i, [
        a[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          s[11] + "-smui-label"
        ) },
        a[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            s[42] !== ""
          )
        },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          s[10]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Te(Ge(
          /*$$restProps*/
          s[53],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      512 | a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[67](null), ee(e, s);
    }
  };
}
function fg(t) {
  let e = (
    /*label*/
    (t[9] == null ? "" : (
      /*label*/
      t[9]
    )) + ""
  ), n, i;
  const r = (
    /*#slots*/
    t[64].label
  ), s = Le(
    r,
    t,
    /*$$scope*/
    t[87],
    Hl
  );
  return {
    c() {
      n = ut(e), s && s.c();
    },
    m(a, l) {
      B(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && dt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Re(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Oe(
          r,
          /*$$scope*/
          a[87],
          l,
          cg
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        Hl
      );
    },
    i(a) {
      i || (E(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(n), s && s.d(a);
    }
  };
}
function Bl(t) {
  let e, n;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        t[8] || /*label*/
        t[9] == null && !/*$$slots*/
        t[54].label
      )
    },
    Ge(
      /*$$restProps*/
      t[53],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [hg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new zo({ props: r }), t[69](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots, $$restProps*/
      12582912 ? me(i, [
        a[0] & /*noLabel, label*/
        768 | a[1] & /*$$slots*/
        8388608 && {
          noLabel: (
            /*noLabel*/
            s[8] || /*label*/
            s[9] == null && !/*$$slots*/
            s[54].label
          )
        },
        a[1] & /*$$restProps*/
        4194304 && Te(Ge(
          /*$$restProps*/
          s[53],
          "outline$"
        ))
      ]) : {};
      a[0] & /*inputId, required, label, noLabel*/
      3840 | a[1] & /*$selectedTextStore, $$restProps, floatingLabel, $$slots*/
      12585216 | a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[69](null), ee(e, s);
    }
  };
}
function Vl(t) {
  let e, n;
  const i = [
    { id: (
      /*inputId*/
      t[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        t[42] !== ""
      )
    },
    { required: (
      /*required*/
      t[10]
    ) },
    Ge(
      /*$$restProps*/
      t[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [dg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new ji({ props: r }), t[68](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? me(i, [
        a[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          s[11] + "-smui-label"
        ) },
        a[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            s[42] !== ""
          )
        },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          s[10]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Te(Ge(
          /*$$restProps*/
          s[53],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      512 | a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[68](null), ee(e, s);
    }
  };
}
function dg(t) {
  let e = (
    /*label*/
    (t[9] == null ? "" : (
      /*label*/
      t[9]
    )) + ""
  ), n, i;
  const r = (
    /*#slots*/
    t[64].label
  ), s = Le(
    r,
    t,
    /*$$scope*/
    t[87],
    Pl
  );
  return {
    c() {
      n = ut(e), s && s.c();
    },
    m(a, l) {
      B(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && dt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Re(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Oe(
          r,
          /*$$scope*/
          a[87],
          l,
          ug
        ) : Me(
          /*$$scope*/
          a[87]
        ),
        Pl
      );
    },
    i(a) {
      i || (E(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(n), s && s.d(a);
    }
  };
}
function hg(t) {
  let e, n, i = !/*noLabel*/
  t[8] && /*label*/
  (t[9] != null || /*$$slots*/
  t[54].label) && Vl(t);
  return {
    c() {
      i && i.c(), e = Ye();
    },
    m(r, s) {
      i && i.m(r, s), B(r, e, s), n = !0;
    },
    p(r, s) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, s), s[0] & /*noLabel, label*/
      768 | s[1] & /*$$slots*/
      8388608 && E(i, 1)) : (i = Vl(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Ue(), L(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(r) {
      n || (E(i), n = !0);
    },
    o(r) {
      L(i), n = !1;
    },
    d(r) {
      r && U(e), i && i.d(r);
    }
  };
}
function Gl(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[53],
    "ripple$"
  )];
  let r = {};
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new Wo({ props: r }), t[70](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      4194304 ? me(i, [Te(Ge(
        /*$$restProps*/
        s[53],
        "ripple$"
      ))]) : {};
      e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[70](null), ee(e, s);
    }
  };
}
function mg(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].default
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[87],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Oe(
          n,
          /*$$scope*/
          r[87],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function pg(t) {
  let e, n, i;
  const r = [
    { role: "listbox" },
    { wrapFocus: (
      /*wrapFocus*/
      t[35]
    ) },
    Ge(
      /*$$restProps*/
      t[53],
      "list$"
    )
  ];
  function s(l) {
    t[75](l);
  }
  let a = {
    $$slots: { default: [mg] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = X(a, r[l]);
  return (
    /*selectedIndex*/
    t[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    t[24]), e = new Kp({ props: a }), le.push(() => gt(e, "selectedIndex", s)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      t[76]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(l, o) {
        $(e, l, o), i = !0;
      },
      p(l, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? me(r, [
          r[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            l[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && Te(Ge(
            /*$$restProps*/
            l[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        33554432 && (u.$$scope = { dirty: o, ctx: l }), !n && o[0] & /*selectedIndex*/
        16777216 && (n = !0, u.selectedIndex = /*selectedIndex*/
        l[24], pt(() => n = !1)), e.$set(u);
      },
      i(l) {
        i || (E(e.$$.fragment, l), i = !0);
      },
      o(l) {
        L(e.$$.fragment, l), i = !1;
      },
      d(l) {
        ee(e, l);
      }
    }
  );
}
function jl(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [gg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new lg({ props: r }), e.$on(
    "SMUISelectHelperText:id",
    /*SMUISelectHelperText_id_handler*/
    t[84]
  ), e.$on(
    "SMUISelectHelperText:mount",
    /*SMUISelectHelperText_mount_handler*/
    t[85]
  ), e.$on(
    "SMUISelectHelperText:unmount",
    /*SMUISelectHelperText_unmount_handler*/
    t[86]
  ), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      4194304 ? me(i, [Te(Ge(
        /*$$restProps*/
        s[53],
        "helperText$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      ee(e, s);
    }
  };
}
function gg(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].helperText
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[87],
    kl
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Oe(
          n,
          /*$$scope*/
          r[87],
          s,
          ag
        ) : Me(
          /*$$scope*/
          r[87]
        ),
        kl
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function bg(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, A, _, S, C, M, D, b, O, w, y, v, I, T, N, q, j, K, k, R, V, ue, Ne, Ie, Xe, z, J = (
    /*hiddenInput*/
    t[12] && Fl(t)
  ), Ee = (
    /*variant*/
    t[7] === "filled" && wl()
  ), ye = (
    /*variant*/
    t[7] !== "outlined" && !/*noLabel*/
    t[8] && /*label*/
    (t[9] != null || /*$$slots*/
    t[54].label) && Ul(t)
  ), He = (
    /*variant*/
    t[7] === "outlined" && Bl(t)
  );
  const ie = (
    /*#slots*/
    t[64].leadingIcon
  ), W = Le(
    ie,
    t,
    /*$$scope*/
    t[87],
    Nl
  );
  let qe = [
    {
      id: f = /*inputId*/
      t[11] + "-smui-selected-text"
    },
    {
      class: d = re({
        [
          /*selectedText$class*/
          t[19]
        ]: !0,
        "mdc-select__selected-text": !0
      })
    },
    { role: "button" },
    { "aria-haspopup": "listbox" },
    {
      "aria-labelledby": h = /*inputId*/
      t[11] + "-smui-label"
    },
    Ge(
      /*$$restProps*/
      t[53],
      "selectedText$"
    )
  ], Ve = {};
  for (let Se = 0; Se < qe.length; Se += 1)
    Ve = X(Ve, qe[Se]);
  let St = [
    {
      class: g = re({
        [
          /*selectedTextContainer$class*/
          t[17]
        ]: !0,
        "mdc-select__selected-text-container": !0
      })
    },
    Ge(
      /*$$restProps*/
      t[53],
      "selectedTextContainer$"
    )
  ], Q = {};
  for (let Se = 0; Se < St.length; Se += 1)
    Q = X(Q, St[Se]);
  let Ce = [
    {
      class: D = re({
        [
          /*dropdownIcon$class*/
          t[21]
        ]: !0,
        "mdc-select__dropdown-icon": !0
      })
    },
    Ge(
      /*$$restProps*/
      t[53],
      "dropdownIcon$"
    )
  ], je = {};
  for (let Se = 0; Se < Ce.length; Se += 1)
    je = X(je, Ce[Se]);
  let Fe = (
    /*variant*/
    t[7] !== "outlined" && /*ripple*/
    t[5] && Gl(t)
  ), Rt = [
    {
      class: w = re({
        [
          /*anchor$class*/
          t[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": y = /*required*/
      t[10] ? "true" : void 0
    },
    {
      "aria-disabled": v = /*disabled*/
      t[6] ? "true" : void 0
    },
    { "aria-controls": (
      /*menuId*/
      t[45]
    ) },
    {
      "aria-expanded": I = /*menuOpen*/
      t[31] ? "true" : "false"
    },
    { "aria-describedby": (
      /*helperId*/
      t[30]
    ) },
    { role: "combobox" },
    { tabindex: "0" },
    /*selectAnchorAttrs*/
    t[29],
    Ge(
      /*$$restProps*/
      t[53],
      "anchor$"
    )
  ], G = {};
  for (let Se = 0; Se < Rt.length; Se += 1)
    G = X(G, Rt[Se]);
  const se = [
    {
      class: re({
        [
          /*menu$class*/
          t[22]
        ]: !0,
        "mdc-select__menu": !0,
        .../*menuClasses*/
        t[32]
      })
    },
    { id: (
      /*menuId*/
      t[45]
    ) },
    { fullWidth: !0 },
    { anchor: !1 },
    { anchorElement: (
      /*anchorElement*/
      t[33]
    ) },
    { anchorCorner: (
      /*anchorCorner*/
      t[34]
    ) },
    Ge(
      /*$$restProps*/
      t[53],
      "menu$"
    )
  ];
  function ne(Se) {
    t[77](Se);
  }
  let Ke = {
    $$slots: { default: [pg] },
    $$scope: { ctx: t }
  };
  for (let Se = 0; Se < se.length; Se += 1)
    Ke = X(Ke, se[Se]);
  /*menuOpen*/
  t[31] !== void 0 && (Ke.open = /*menuOpen*/
  t[31]), q = new jp({ props: Ke }), le.push(() => gt(q, "open", ne)), q.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    t[78]
  ), q.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    t[79]
  ), q.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    t[80]
  ), q.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    t[81]
  );
  let ht = [
    {
      class: K = re({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-select": !0,
        "mdc-select--required": (
          /*required*/
          t[10]
        ),
        "mdc-select--disabled": (
          /*disabled*/
          t[6]
        ),
        "mdc-select--filled": (
          /*variant*/
          t[7] === "filled"
        ),
        "mdc-select--outlined": (
          /*variant*/
          t[7] === "outlined"
        ),
        "smui-select--standard": (
          /*variant*/
          t[7] === "standard"
        ),
        "mdc-select--with-leading-icon": (
          /*isUninitializedValue*/
          t[44](
            /*withLeadingIcon*/
            t[13]
          ) ? (
            /*$$slots*/
            t[54].leadingIcon
          ) : (
            /*withLeadingIcon*/
            t[13]
          )
        ),
        "mdc-select--no-label": (
          /*noLabel*/
          t[8] || /*label*/
          t[9] == null && !/*$$slots*/
          t[54].label
        ),
        "mdc-select--invalid": (
          /*invalid*/
          t[1]
        ),
        "mdc-select--activated": (
          /*menuOpen*/
          t[31]
        ),
        "mdc-data-table__pagination-rows-per-page-select": (
          /*context*/
          t[46] === "data-table:pagination"
        ),
        .../*internalClasses*/
        t[26]
      })
    },
    {
      style: k = Object.entries(
        /*internalStyles*/
        t[27]
      ).map(ql).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    $t(
      /*$$restProps*/
      t[53],
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
  ], ft = {};
  for (let Se = 0; Se < ht.length; Se += 1)
    ft = X(ft, ht[Se]);
  let et = (
    /*$$slots*/
    t[54].helperText && jl(t)
  );
  return {
    c() {
      e = x("div"), J && J.c(), n = oe(), i = x("div"), Ee && Ee.c(), r = oe(), ye && ye.c(), s = oe(), He && He.c(), a = oe(), W && W.c(), l = oe(), o = x("span"), u = x("span"), c = ut(
        /*$selectedTextStore*/
        t[42]
      ), A = oe(), _ = x("span"), S = at("svg"), C = at("polygon"), M = at("polygon"), O = oe(), Fe && Fe.c(), N = oe(), te(q.$$.fragment), ue = oe(), et && et.c(), Ne = Ye(), fe(u, Ve), fe(o, Q), P(C, "class", "mdc-select__dropdown-icon-inactive"), P(C, "stroke", "none"), P(C, "fill-rule", "evenodd"), P(C, "points", "7 10 12 15 17 10"), P(M, "class", "mdc-select__dropdown-icon-active"), P(M, "stroke", "none"), P(M, "fill-rule", "evenodd"), P(M, "points", "7 15 12 10 17 15"), P(S, "class", "mdc-select__dropdown-icon-graphic"), P(S, "viewBox", "7 10 10 5"), P(S, "focusable", "false"), fe(_, je), fe(i, G), fe(e, ft);
    },
    m(Se, ae) {
      B(Se, e, ae), J && J.m(e, null), Z(e, n), Z(e, i), Ee && Ee.m(i, null), Z(i, r), ye && ye.m(i, null), Z(i, s), He && He.m(i, null), Z(i, a), W && W.m(i, null), Z(i, l), Z(i, o), Z(o, u), Z(u, c), Z(i, A), Z(i, _), Z(_, S), Z(S, C), Z(S, M), Z(i, O), Fe && Fe.m(i, null), t[71](i), Z(e, N), $(q, e, null), t[82](e), B(Se, ue, ae), et && et.m(Se, ae), B(Se, Ne, ae), Ie = !0, Xe || (z = [
        de(m = xe.call(
          null,
          u,
          /*selectedText$use*/
          t[18]
        )),
        de(p = xe.call(
          null,
          o,
          /*selectedTextContainer$use*/
          t[16]
        )),
        de(b = xe.call(
          null,
          _,
          /*dropdownIcon$use*/
          t[20]
        )),
        de(T = xe.call(
          null,
          i,
          /*anchor$use*/
          t[14]
        )),
        he(
          i,
          "focus",
          /*focus_handler_1*/
          t[72]
        ),
        he(
          i,
          "blur",
          /*blur_handler_1*/
          t[73]
        ),
        he(
          i,
          "click",
          /*click_handler*/
          t[74]
        ),
        he(i, "keydown", function() {
          ge(
            /*instance*/
            t[23] && /*instance*/
            t[23].handleKeydown.bind(
              /*instance*/
              t[23]
            )
          ) && /*instance*/
          (t[23] && /*instance*/
          t[23].handleKeydown.bind(
            /*instance*/
            t[23]
          )).apply(this, arguments);
        }),
        he(
          i,
          "focus",
          /*focus_handler*/
          t[65]
        ),
        he(
          i,
          "blur",
          /*blur_handler*/
          t[66]
        ),
        de(R = Dt.call(null, e, {
          ripple: (
            /*variant*/
            t[7] === "filled"
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[50]
          ),
          removeClass: (
            /*removeClass*/
            t[51]
          ),
          addStyle: (
            /*addStyle*/
            t[52]
          )
        })),
        de(Up.call(null, e, {
          addClass: (
            /*addClass*/
            t[50]
          ),
          removeClass: (
            /*removeClass*/
            t[51]
          )
        })),
        de(V = xe.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        de(
          /*forwardEvents*/
          t[43].call(null, e)
        ),
        he(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[49]
        ),
        he(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          t[83]
        )
      ], Xe = !0);
    },
    p(Se, ae) {
      t = Se, /*hiddenInput*/
      t[12] ? J ? J.p(t, ae) : (J = Fl(t), J.c(), J.m(e, n)) : J && (J.d(1), J = null), /*variant*/
      t[7] === "filled" ? Ee || (Ee = wl(), Ee.c(), Ee.m(i, r)) : Ee && (Ee.d(1), Ee = null), /*variant*/
      t[7] !== "outlined" && !/*noLabel*/
      t[8] && /*label*/
      (t[9] != null || /*$$slots*/
      t[54].label) ? ye ? (ye.p(t, ae), ae[0] & /*variant, noLabel, label*/
      896 | ae[1] & /*$$slots*/
      8388608 && E(ye, 1)) : (ye = Ul(t), ye.c(), E(ye, 1), ye.m(i, s)) : ye && (Ue(), L(ye, 1, 1, () => {
        ye = null;
      }), Be()), /*variant*/
      t[7] === "outlined" ? He ? (He.p(t, ae), ae[0] & /*variant*/
      128 && E(He, 1)) : (He = Bl(t), He.c(), E(He, 1), He.m(i, a)) : He && (Ue(), L(He, 1, 1, () => {
        He = null;
      }), Be()), W && W.p && (!Ie || ae[2] & /*$$scope*/
      33554432) && Re(
        W,
        ie,
        t,
        /*$$scope*/
        t[87],
        Ie ? Oe(
          ie,
          /*$$scope*/
          t[87],
          ae,
          og
        ) : Me(
          /*$$scope*/
          t[87]
        ),
        Nl
      ), (!Ie || ae[1] & /*$selectedTextStore*/
      2048) && vu(
        c,
        /*$selectedTextStore*/
        t[42],
        Ve.contenteditable
      ), fe(u, Ve = me(qe, [
        (!Ie || ae[0] & /*inputId*/
        2048 && f !== (f = /*inputId*/
        t[11] + "-smui-selected-text")) && { id: f },
        (!Ie || ae[0] & /*selectedText$class*/
        524288 && d !== (d = re({
          [
            /*selectedText$class*/
            t[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: d },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!Ie || ae[0] & /*inputId*/
        2048 && h !== (h = /*inputId*/
        t[11] + "-smui-label")) && {
          "aria-labelledby": h
        },
        ae[1] & /*$$restProps*/
        4194304 && Ge(
          /*$$restProps*/
          t[53],
          "selectedText$"
        )
      ])), m && ge(m.update) && ae[0] & /*selectedText$use*/
      262144 && m.update.call(
        null,
        /*selectedText$use*/
        t[18]
      ), fe(o, Q = me(St, [
        (!Ie || ae[0] & /*selectedTextContainer$class*/
        131072 && g !== (g = re({
          [
            /*selectedTextContainer$class*/
            t[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: g },
        ae[1] & /*$$restProps*/
        4194304 && Ge(
          /*$$restProps*/
          t[53],
          "selectedTextContainer$"
        )
      ])), p && ge(p.update) && ae[0] & /*selectedTextContainer$use*/
      65536 && p.update.call(
        null,
        /*selectedTextContainer$use*/
        t[16]
      ), fe(_, je = me(Ce, [
        (!Ie || ae[0] & /*dropdownIcon$class*/
        2097152 && D !== (D = re({
          [
            /*dropdownIcon$class*/
            t[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: D },
        ae[1] & /*$$restProps*/
        4194304 && Ge(
          /*$$restProps*/
          t[53],
          "dropdownIcon$"
        )
      ])), b && ge(b.update) && ae[0] & /*dropdownIcon$use*/
      1048576 && b.update.call(
        null,
        /*dropdownIcon$use*/
        t[20]
      ), /*variant*/
      t[7] !== "outlined" && /*ripple*/
      t[5] ? Fe ? (Fe.p(t, ae), ae[0] & /*variant, ripple*/
      160 && E(Fe, 1)) : (Fe = Gl(t), Fe.c(), E(Fe, 1), Fe.m(i, null)) : Fe && (Ue(), L(Fe, 1, 1, () => {
        Fe = null;
      }), Be()), fe(i, G = me(Rt, [
        (!Ie || ae[0] & /*anchor$class*/
        32768 && w !== (w = re({
          [
            /*anchor$class*/
            t[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: w },
        (!Ie || ae[0] & /*required*/
        1024 && y !== (y = /*required*/
        t[10] ? "true" : void 0)) && {
          "aria-required": y
        },
        (!Ie || ae[0] & /*disabled*/
        64 && v !== (v = /*disabled*/
        t[6] ? "true" : void 0)) && {
          "aria-disabled": v
        },
        { "aria-controls": (
          /*menuId*/
          t[45]
        ) },
        (!Ie || ae[1] & /*menuOpen*/
        1 && I !== (I = /*menuOpen*/
        t[31] ? "true" : "false")) && {
          "aria-expanded": I
        },
        (!Ie || ae[0] & /*helperId*/
        1073741824) && { "aria-describedby": (
          /*helperId*/
          t[30]
        ) },
        { role: "combobox" },
        { tabindex: "0" },
        ae[0] & /*selectAnchorAttrs*/
        536870912 && /*selectAnchorAttrs*/
        t[29],
        ae[1] & /*$$restProps*/
        4194304 && Ge(
          /*$$restProps*/
          t[53],
          "anchor$"
        )
      ])), T && ge(T.update) && ae[0] & /*anchor$use*/
      16384 && T.update.call(
        null,
        /*anchor$use*/
        t[14]
      );
      const qt = ae[0] & /*menu$class*/
      4194304 | ae[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? me(se, [
        ae[0] & /*menu$class*/
        4194304 | ae[1] & /*menuClasses*/
        2 && {
          class: re({
            [
              /*menu$class*/
              t[22]
            ]: !0,
            "mdc-select__menu": !0,
            .../*menuClasses*/
            t[32]
          })
        },
        ae[1] & /*menuId*/
        16384 && { id: (
          /*menuId*/
          t[45]
        ) },
        se[2],
        se[3],
        ae[1] & /*anchorElement*/
        4 && { anchorElement: (
          /*anchorElement*/
          t[33]
        ) },
        ae[1] & /*anchorCorner*/
        8 && { anchorCorner: (
          /*anchorCorner*/
          t[34]
        ) },
        ae[1] & /*$$restProps*/
        4194304 && Te(Ge(
          /*$$restProps*/
          t[53],
          "menu$"
        ))
      ]) : {};
      ae[0] & /*selectedIndex*/
      16777216 | ae[1] & /*wrapFocus, $$restProps, list*/
      4194352 | ae[2] & /*$$scope*/
      33554432 && (qt.$$scope = { dirty: ae, ctx: t }), !j && ae[1] & /*menuOpen*/
      1 && (j = !0, qt.open = /*menuOpen*/
      t[31], pt(() => j = !1)), q.$set(qt), fe(e, ft = me(ht, [
        (!Ie || ae[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | ae[1] & /*$$slots, menuOpen*/
        8388609 && K !== (K = re({
          [
            /*className*/
            t[3]
          ]: !0,
          "mdc-select": !0,
          "mdc-select--required": (
            /*required*/
            t[10]
          ),
          "mdc-select--disabled": (
            /*disabled*/
            t[6]
          ),
          "mdc-select--filled": (
            /*variant*/
            t[7] === "filled"
          ),
          "mdc-select--outlined": (
            /*variant*/
            t[7] === "outlined"
          ),
          "smui-select--standard": (
            /*variant*/
            t[7] === "standard"
          ),
          "mdc-select--with-leading-icon": (
            /*isUninitializedValue*/
            t[44](
              /*withLeadingIcon*/
              t[13]
            ) ? (
              /*$$slots*/
              t[54].leadingIcon
            ) : (
              /*withLeadingIcon*/
              t[13]
            )
          ),
          "mdc-select--no-label": (
            /*noLabel*/
            t[8] || /*label*/
            t[9] == null && !/*$$slots*/
            t[54].label
          ),
          "mdc-select--invalid": (
            /*invalid*/
            t[1]
          ),
          "mdc-select--activated": (
            /*menuOpen*/
            t[31]
          ),
          "mdc-data-table__pagination-rows-per-page-select": (
            /*context*/
            t[46] === "data-table:pagination"
          ),
          .../*internalClasses*/
          t[26]
        }))) && { class: K },
        (!Ie || ae[0] & /*internalStyles, style*/
        134217744 && k !== (k = Object.entries(
          /*internalStyles*/
          t[27]
        ).map(ql).concat([
          /*style*/
          t[4]
        ]).join(" "))) && { style: k },
        ae[1] & /*$$restProps*/
        4194304 && $t(
          /*$$restProps*/
          t[53],
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
      ])), R && ge(R.update) && ae[0] & /*variant*/
      128 && R.update.call(null, {
        ripple: (
          /*variant*/
          t[7] === "filled"
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          t[50]
        ),
        removeClass: (
          /*removeClass*/
          t[51]
        ),
        addStyle: (
          /*addStyle*/
          t[52]
        )
      }), V && ge(V.update) && ae[0] & /*use*/
      4 && V.update.call(
        null,
        /*use*/
        t[2]
      ), /*$$slots*/
      t[54].helperText ? et ? (et.p(t, ae), ae[1] & /*$$slots*/
      8388608 && E(et, 1)) : (et = jl(t), et.c(), E(et, 1), et.m(Ne.parentNode, Ne)) : et && (Ue(), L(et, 1, 1, () => {
        et = null;
      }), Be());
    },
    i(Se) {
      Ie || (E(ye), E(He), E(W, Se), E(Fe), E(q.$$.fragment, Se), E(et), Ie = !0);
    },
    o(Se) {
      L(ye), L(He), L(W, Se), L(Fe), L(q.$$.fragment, Se), L(et), Ie = !1;
    },
    d(Se) {
      Se && (U(e), U(ue), U(Ne)), J && J.d(), Ee && Ee.d(), ye && ye.d(), He && He.d(), W && W.d(Se), Fe && Fe.d(), t[71](null), ee(q), t[82](null), et && et.d(Se), Xe = !1, Ze(z);
    }
  };
}
let _g = 0;
function vg(t) {
  const e = t.currentTarget.getBoundingClientRect();
  return (Ig(t) ? t.touches[0].clientX : t.clientX) - e.left;
}
function Ig(t) {
  return "touches" in t;
}
const ql = ([t, e]) => `${t}: ${e};`;
function Ag(t, e, n) {
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
  let r = pe(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  const u = Yr(l);
  var c;
  const f = rt($e());
  let d = () => {
  };
  function h(F) {
    return F === d;
  }
  let { use: m = [] } = e, { class: g = "" } = e, { style: p = "" } = e, { ripple: A = !0 } = e, { disabled: _ = !1 } = e, { variant: S = "standard" } = e, { noLabel: C = !1 } = e, { label: M = void 0 } = e, { value: D = "" } = e, { key: b = (F) => F } = e, { dirty: O = !1 } = e, { invalid: w = d } = e, { updateInvalid: y = h(w) } = e;
  const v = h(w);
  h(w) && (w = !1);
  let { required: I = !1 } = e, { inputId: T = "SMUI-select-" + _g++ } = e, { hiddenInput: N = !1 } = e, { withLeadingIcon: q = d } = e, { anchor$use: j = [] } = e, { anchor$class: K = "" } = e, { selectedTextContainer$use: k = [] } = e, { selectedTextContainer$class: R = "" } = e, { selectedText$use: V = [] } = e, { selectedText$class: ue = "" } = e, { dropdownIcon$use: Ne = [] } = e, { dropdownIcon$class: Ie = "" } = e, { menu$class: Xe = "" } = e, z, J, Ee = {}, ye = {}, He, ie = {}, W = -1, qe = (c = r.menu$id) !== null && c !== void 0 ? c : T + "-menu", Ve, St = ze("SMUI:addLayoutListener"), Q, Ce = !1, je = {}, Fe, Rt, G = !1, se, ne = ze("SMUI:select:context"), Ke, ht, ft, et, Se;
  We("SMUI:list:role", ""), We("SMUI:list:nav", !1);
  const ae = Tt("");
  st(t, ae, (F) => n(42, s = F)), We("SMUI:select:selectedText", ae);
  const qt = Tt(D);
  st(t, qt, (F) => n(90, a = F)), We("SMUI:select:value", qt);
  let Y = W;
  St && (Q = St(_i)), ct(() => (n(23, J = new kp(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (F) => {
        jt(ae, s = F, s);
      },
      isSelectAnchorFocused: () => document.activeElement === He,
      getSelectAnchorAttr: Ki,
      setSelectAnchorAttr: Xi,
      removeSelectAnchorAttr: Yi,
      addMenuClass: Wi,
      removeMenuClass: zi,
      openMenu: () => {
        n(31, Ce = !0);
      },
      closeMenu: () => {
        n(31, Ce = !1);
      },
      getAnchorElement: () => He,
      setMenuAnchorElement: (F) => {
        n(33, Fe = F);
      },
      setMenuAnchorCorner: (F) => {
        n(34, Rt = F);
      },
      setMenuWrapFocus: (F) => {
        n(35, G = F);
      },
      getSelectedIndex: () => W,
      setSelectedIndex: (F) => {
        n(63, Y = F), n(24, W = F), n(0, D = Dn()[W]);
      },
      focusMenuItemAtIndex: (F) => {
        se.focusItemAtIndex(F);
      },
      getMenuItemCount: () => se.items.length,
      getMenuItemValues: () => Dn().map(b),
      getMenuItemTextAtIndex: (F) => se.getPrimaryTextAtIndex(F),
      isTypeaheadInProgress: () => se.typeaheadInProgress,
      typeaheadMatchItem: (F, Bt) => se.typeaheadMatchItem(F, Bt),
      // getCommonAdapterMethods
      addClass: lt,
      removeClass: tn,
      hasClass: Ae,
      setRippleCenter: (F) => et && et.setRippleCenter(F),
      activateBottomLine: () => et && et.activate(),
      deactivateBottomLine: () => et && et.deactivate(),
      notifyChange: (F) => {
        n(55, O = !0), y && n(1, w = !J.isValid()), _e(kn(), "SMUISelect:change", { value: D, index: W }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!Se,
      notchOutline: (F) => Se && Se.notch(F),
      closeOutline: () => Se && Se.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!ft,
      floatLabel: (F) => ft && ft.float(F),
      getLabelWidth: () => ft ? ft.getWidth() : 0,
      setLabelRequired: (F) => ft && ft.setRequired(F)
    },
    {
      get helperText() {
        return ht;
      },
      get leadingIcon() {
        return Ke;
      }
    }
  )), n(24, W = Dn().indexOf(D)), J.init(), bi(v), () => {
    J.destroy();
  })), en(() => {
    Q && Q();
  });
  function be(F) {
    n(37, Ke = F.detail);
  }
  function Ae(F) {
    return F in Ee ? Ee[F] : kn().classList.contains(F);
  }
  function lt(F) {
    Ee[F] || n(26, Ee[F] = !0, Ee);
  }
  function tn(F) {
    (!(F in Ee) || Ee[F]) && n(26, Ee[F] = !1, Ee);
  }
  function ti(F, Bt) {
    ye[F] != Bt && (Bt === "" || Bt == null ? (delete ye[F], n(27, ye)) : n(27, ye[F] = Bt, ye));
  }
  function Wi(F) {
    je[F] || n(32, je[F] = !0, je);
  }
  function zi(F) {
    (!(F in je) || je[F]) && n(32, je[F] = !1, je);
  }
  function Ki(F) {
    var Bt;
    return F in ie ? (Bt = ie[F]) !== null && Bt !== void 0 ? Bt : null : kn().getAttribute(F);
  }
  function Xi(F, Bt) {
    ie[F] !== Bt && n(29, ie[F] = Bt, ie);
  }
  function Yi(F) {
    (!(F in ie) || ie[F] != null) && n(29, ie[F] = void 0, ie);
  }
  function Dn() {
    return se.getOrderedList().map((F) => F.getValue());
  }
  function Zi() {
    return J.getUseDefaultValidation();
  }
  function bi(F) {
    J.setUseDefaultValidation(F);
  }
  function Qi() {
    He.focus();
  }
  function _i() {
    J.layout();
  }
  function kn() {
    return z;
  }
  function Ji(F) {
    Wn.call(this, t, F);
  }
  function xi(F) {
    Wn.call(this, t, F);
  }
  function $i(F) {
    le[F ? "unshift" : "push"](() => {
      ft = F, n(39, ft);
    });
  }
  function er(F) {
    le[F ? "unshift" : "push"](() => {
      ft = F, n(39, ft);
    });
  }
  function tr(F) {
    le[F ? "unshift" : "push"](() => {
      Se = F, n(41, Se);
    });
  }
  function nr(F) {
    le[F ? "unshift" : "push"](() => {
      et = F, n(40, et);
    });
  }
  function ir(F) {
    le[F ? "unshift" : "push"](() => {
      He = F, n(28, He);
    });
  }
  const rr = () => J && J.handleFocus(), sr = () => J && J.handleBlur(), lr = (F) => {
    He.focus(), J && J.handleClick(vg(F));
  };
  function ar(F) {
    W = F, n(24, W);
  }
  const or = (F) => n(36, se = F.detail);
  function ur(F) {
    Ce = F, n(31, Ce);
  }
  const cr = (F) => J && J.handleMenuItemAction(F.detail.index), fr = () => J && J.handleMenuClosing(), H = () => J && J.handleMenuClosed(), _t = () => J && J.handleMenuOpened();
  function vi(F) {
    le[F ? "unshift" : "push"](() => {
      z = F, n(25, z);
    });
  }
  const dr = () => n(37, Ke = void 0), ni = (F) => n(30, Ve = F.detail), ii = (F) => n(38, ht = F.detail), lu = () => {
    n(30, Ve = void 0), n(38, ht = void 0);
  };
  return t.$$set = (F) => {
    e = X(X({}, e), it(F)), n(53, r = pe(e, i)), "use" in F && n(2, m = F.use), "class" in F && n(3, g = F.class), "style" in F && n(4, p = F.style), "ripple" in F && n(5, A = F.ripple), "disabled" in F && n(6, _ = F.disabled), "variant" in F && n(7, S = F.variant), "noLabel" in F && n(8, C = F.noLabel), "label" in F && n(9, M = F.label), "value" in F && n(0, D = F.value), "key" in F && n(56, b = F.key), "dirty" in F && n(55, O = F.dirty), "invalid" in F && n(1, w = F.invalid), "updateInvalid" in F && n(57, y = F.updateInvalid), "required" in F && n(10, I = F.required), "inputId" in F && n(11, T = F.inputId), "hiddenInput" in F && n(12, N = F.hiddenInput), "withLeadingIcon" in F && n(13, q = F.withLeadingIcon), "anchor$use" in F && n(14, j = F.anchor$use), "anchor$class" in F && n(15, K = F.anchor$class), "selectedTextContainer$use" in F && n(16, k = F.selectedTextContainer$use), "selectedTextContainer$class" in F && n(17, R = F.selectedTextContainer$class), "selectedText$use" in F && n(18, V = F.selectedText$use), "selectedText$class" in F && n(19, ue = F.selectedText$class), "dropdownIcon$use" in F && n(20, Ne = F.dropdownIcon$use), "dropdownIcon$class" in F && n(21, Ie = F.dropdownIcon$class), "menu$class" in F && n(22, Xe = F.menu$class), "$$scope" in F && n(87, o = F.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | t.$$.dirty[2] & /*previousSelectedIndex*/
    2 && Y !== W)
      if (n(63, Y = W), J)
        J.setSelectedIndex(
          W,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const F = Dn();
        D !== F[W] && n(0, D = F[W]);
      }
    t.$$.dirty[0] & /*value*/
    1 && jt(qt, a = D, a), t.$$.dirty[0] & /*instance, value*/
    8388609 | t.$$.dirty[1] & /*key*/
    33554432 && J && J.getValue() !== b(D) && J.setValue(b(D)), t.$$.dirty[0] & /*instance, disabled*/
    8388672 && J && J.getDisabled() !== _ && J.setDisabled(_), t.$$.dirty[0] & /*instance, invalid*/
    8388610 | t.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && J && O && J.isValid() !== !w && (y ? n(1, w = !J.isValid()) : J.setValid(!w)), t.$$.dirty[0] & /*instance, required*/
    8389632 && J && J.getRequired() !== I && J.setRequired(I);
  }, [
    D,
    w,
    m,
    g,
    p,
    A,
    _,
    S,
    C,
    M,
    I,
    T,
    N,
    q,
    j,
    K,
    k,
    R,
    V,
    ue,
    Ne,
    Ie,
    Xe,
    J,
    W,
    z,
    Ee,
    ye,
    He,
    ie,
    Ve,
    Ce,
    je,
    Fe,
    Rt,
    G,
    se,
    Ke,
    ht,
    ft,
    et,
    Se,
    s,
    f,
    h,
    qe,
    ne,
    ae,
    qt,
    be,
    lt,
    tn,
    ti,
    r,
    u,
    O,
    b,
    y,
    Zi,
    bi,
    Qi,
    _i,
    kn,
    Y,
    l,
    Ji,
    xi,
    $i,
    er,
    tr,
    nr,
    ir,
    rr,
    sr,
    lr,
    ar,
    or,
    ur,
    cr,
    fr,
    H,
    _t,
    vi,
    dr,
    ni,
    ii,
    lu,
    o
  ];
}
class Eg extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Ag,
      bg,
      ve,
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
function yg(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      8192) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? Oe(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Cg(t) {
  let e, n;
  const i = [
    { use: (
      /*usePass*/
      t[3]
    ) },
    { "data-value": (
      /*value*/
      t[0]
    ) },
    { value: (
      /*value*/
      t[0]
    ) },
    { selected: (
      /*selected*/
      t[2]
    ) },
    /*$$restProps*/
    t[6]
  ];
  let r = {
    $$slots: { default: [yg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new Jp({ props: r }), t[12](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), n = !0;
    },
    p(s, [a]) {
      const l = a & /*usePass, value, selected, $$restProps*/
      77 ? me(i, [
        a & /*usePass*/
        8 && { use: (
          /*usePass*/
          s[3]
        ) },
        a & /*value*/
        1 && { "data-value": (
          /*value*/
          s[0]
        ) },
        a & /*value*/
        1 && { value: (
          /*value*/
          s[0]
        ) },
        a & /*selected*/
        4 && { selected: (
          /*selected*/
          s[2]
        ) },
        a & /*$$restProps*/
        64 && Te(
          /*$$restProps*/
          s[6]
        )
      ]) : {};
      a & /*$$scope*/
      8192 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[12](null), ee(e, s);
    }
  };
}
function Sg(t, e, n) {
  let i, r;
  const s = ["use", "class", "value", "getElement"];
  let a = pe(e, s), l, o, { $$slots: u = {}, $$scope: c } = e;
  const f = rt($e());
  let { use: d = [] } = e;
  const h = "";
  let { value: m = "" } = e, g;
  const p = ze("SMUI:select:selectedText");
  st(t, p, (M) => n(14, l = M));
  const A = ze("SMUI:select:value");
  st(t, A, (M) => n(10, o = M)), We("SMUI:list:item:role", "option"), ct(_), en(_);
  function _() {
    r && g && jt(p, l = g.getPrimaryText(), l);
  }
  function S() {
    return g.getElement();
  }
  function C(M) {
    le[M ? "unshift" : "push"](() => {
      g = M, n(1, g);
    });
  }
  return t.$$set = (M) => {
    e = X(X({}, e), it(M)), n(6, a = pe(e, s)), "use" in M && n(7, d = M.use), "value" in M && n(0, m = M.value), "$$scope" in M && n(13, c = M.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*use*/
    128 && n(3, i = [f, ...d]), t.$$.dirty & /*value, $selectedValue*/
    1025 && n(2, r = m != null && m !== "" && o === m);
  }, [
    m,
    g,
    r,
    i,
    p,
    A,
    a,
    d,
    h,
    S,
    o,
    u,
    C,
    c
  ];
}
class Tg extends ke {
  constructor(e) {
    super(), De(this, e, Sg, Cg, ve, {
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
function Wl(t, e, n) {
  const i = t.slice();
  return i[11] = e[n], i[13] = n, i;
}
function Lg(t) {
  let e = (
    /*d*/
    t[11].label + ""
  ), n;
  return {
    c() {
      n = ut(e);
    },
    m(i, r) {
      B(i, n, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && dt(n, e);
    },
    d(i) {
      i && U(n);
    }
  };
}
function zl(t) {
  let e, n;
  return e = new Tg({
    props: {
      value: (
        /*d*/
        t[11].value
      ),
      $$slots: { default: [Lg] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*setSelectedIndex*/
    t[5](
      /*index*/
      t[13]
    )
  ), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*data*/
      2 && (s.value = /*d*/
      i[11].value), r & /*$$scope, data*/
      16386 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Og(t) {
  let e, n, i = zt(
    /*data*/
    t[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = zl(Wl(t, i, a));
  const s = (a) => L(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Ye();
    },
    m(a, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, l);
      B(a, e, l), n = !0;
    },
    p(a, l) {
      if (l & /*data, setSelectedIndex*/
      34) {
        i = zt(
          /*data*/
          a[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Wl(a, i, o);
          r[o] ? (r[o].p(u, l), E(r[o], 1)) : (r[o] = zl(u), r[o].c(), E(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          E(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        L(r[l]);
      n = !1;
    },
    d(a) {
      a && U(e), Zr(r, a);
    }
  };
}
function Rg(t) {
  let e, n, i;
  function r(a) {
    t[10](a);
  }
  let s = {
    disabled: (
      /*disabled*/
      t[4]
    ),
    key: Mg,
    label: (
      /*label*/
      t[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      t[3]
    ),
    $$slots: { default: [Og] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new Eg({ props: s }), le.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        $(e, a, l), i = !0;
      },
      p(a, [l]) {
        const o = {};
        l & /*disabled*/
        16 && (o.disabled = /*disabled*/
        a[4]), l & /*label*/
        4 && (o.label = /*label*/
        a[2]), l & /*required*/
        8 && (o.required = /*required*/
        a[3]), l & /*$$scope, data*/
        16386 && (o.$$scope = { dirty: l, ctx: a }), !n && l & /*value*/
        1 && (n = !0, o.value = /*value*/
        a[0], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
const Mg = (t) => `${t ?? ""}`;
function Dg(t, e, n) {
  let { data: i = [] } = e, { placeholder: r = "" } = e, { label: s = "" } = e, { description: a = "" } = e, { value: l = "" } = e, { required: o = !1 } = e, { size: u = "sm" } = e, { selectedOptionIndex: c = -1 } = e, { disabled: f = !1 } = e;
  function d(m) {
    return () => n(6, c = m);
  }
  function h(m) {
    l = m, n(0, l);
  }
  return t.$$set = (m) => {
    "data" in m && n(1, i = m.data), "placeholder" in m && n(7, r = m.placeholder), "label" in m && n(2, s = m.label), "description" in m && n(8, a = m.description), "value" in m && n(0, l = m.value), "required" in m && n(3, o = m.required), "size" in m && n(9, u = m.size), "selectedOptionIndex" in m && n(6, c = m.selectedOptionIndex), "disabled" in m && n(4, f = m.disabled);
  }, [
    l,
    i,
    s,
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
class cs extends ke {
  constructor(e) {
    super(), De(this, e, Dg, Rg, ve, {
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
Ct({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Ct({
  class: "mdc-dialog__title",
  tag: "h2"
});
Ct({
  class: "mdc-dialog__content",
  tag: "div"
});
Ct({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
function kg(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[12].default
  ), o = Le(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
    {
      class: n = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "smui-paper": !0,
        "smui-paper--raised": (
          /*variant*/
          t[2] === "raised"
        ),
        "smui-paper--unelevated": (
          /*variant*/
          t[2] === "unelevated"
        ),
        "smui-paper--outlined": (
          /*variant*/
          t[2] === "outlined"
        ),
        ["smui-paper--elevation-z" + /*elevation*/
        t[5]]: (
          /*elevation*/
          t[5] !== 0 && /*variant*/
          t[2] === "raised"
        ),
        "smui-paper--rounded": !/*square*/
        t[3],
        ["smui-paper--color-" + /*color*/
        t[4]]: (
          /*color*/
          t[4] !== "default"
        ),
        "smui-paper-transition": (
          /*transition*/
          t[6]
        )
      })
    },
    /*$$restProps*/
    t[9]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = X(c, u[f]);
  return {
    c() {
      e = x("div"), o && o.c(), fe(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[13](e), r = !0, s || (a = [
        de(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[8].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      2048) && Re(
        o,
        l,
        f,
        /*$$scope*/
        f[11],
        r ? Oe(
          l,
          /*$$scope*/
          f[11],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[11]
        ),
        null
      ), fe(e, c = me(u, [
        (!r || d & /*className, variant, elevation, square, color, transition*/
        126 && n !== (n = re({
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
        }))) && { class: n },
        d & /*$$restProps*/
        512 && /*$$restProps*/
        f[9]
      ])), i && ge(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (E(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[13](null), s = !1, Ze(a);
    }
  };
}
function Ng(t, e, n) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: f = !1 } = e, { color: d = "default" } = e, { elevation: h = 1 } = e, { transition: m = !1 } = e, g;
  function p() {
    return g;
  }
  function A(_) {
    le[_ ? "unshift" : "push"](() => {
      g = _, n(7, g);
    });
  }
  return t.$$set = (_) => {
    e = X(X({}, e), it(_)), n(9, r = pe(e, i)), "use" in _ && n(0, o = _.use), "class" in _ && n(1, u = _.class), "variant" in _ && n(2, c = _.variant), "square" in _ && n(3, f = _.square), "color" in _ && n(4, d = _.color), "elevation" in _ && n(5, h = _.elevation), "transition" in _ && n(6, m = _.transition), "$$scope" in _ && n(11, a = _.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    m,
    g,
    l,
    r,
    p,
    a,
    s,
    A
  ];
}
class Qo extends ke {
  constructor(e) {
    super(), De(this, e, Ng, kg, ve, {
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
Ct({
  class: "smui-paper__content",
  tag: "div"
});
Ct({
  class: "smui-paper__title",
  tag: "h5"
});
Ct({
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
var Kr;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Kr || (Kr = {}));
var Pg = "data-mdc-dom-announce";
function Hg(t, e) {
  Fg.getInstance().say(t, e);
}
var Fg = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var i, r, s = (i = n == null ? void 0 : n.priority) !== null && i !== void 0 ? i : Kr.POLITE, a = (r = n == null ? void 0 : n.ownerDocument) !== null && r !== void 0 ? r : document, l = this.getLiveRegion(s, a);
      l.textContent = "", setTimeout(function() {
        l.textContent = e, a.addEventListener("click", o);
      }, 1);
      function o() {
        l.textContent = "", a.removeEventListener("click", o);
      }
    }, t.prototype.getLiveRegion = function(e, n) {
      var i = this.liveRegions.get(n);
      i || (i = /* @__PURE__ */ new Map(), this.liveRegions.set(n, i));
      var r = i.get(e);
      if (r && n.body.contains(r))
        return r;
      var s = this.createLiveRegion(e, n);
      return i.set(e, s), s;
    }, t.prototype.createLiveRegion = function(e, n) {
      var i = n.createElement("div");
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Pg, "true"), n.body.appendChild(i), i;
    }, t;
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
var pn;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(pn || (pn = {}));
var Zt = {
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
var Jo = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Zt;
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
    }), e.prototype.handleClick = function(n) {
      n.stopPropagation(), this.adapter.notifyInteraction(pn.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var i = vt(n);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (Ah(n)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Zt.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Zt.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Zt.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(n) {
      var i = n === we.ENTER || n === we.SPACEBAR, r = n === we.BACKSPACE || n === we.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === we.SPACEBAR ? pn.SPACEBAR_KEY : n === we.ENTER ? pn.ENTER_KEY : n === we.DELETE ? pn.DELETE_KEY : n === we.BACKSPACE ? pn.BACKSPACE_KEY : pn.UNSPECIFIED;
    }, e;
  }(Ot)
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
var xo = (
  /** @class */
  function(t) {
    ot(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n) {
      n === void 0 && (n = function(r, s) {
        return new Fi(r, s);
      });
      var i = Fi.createAdapter(this);
      this.rippleSurface = n(this.root, new Gi(i));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleClick = function(i) {
        n.foundation.handleClick(i);
      }, this.handleKeydown = function(i) {
        n.foundation.handleKeydown(i);
      }, this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown);
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("click", this.handleClick), this.unlisten("keydown", this.handleKeydown), t.prototype.destroy.call(this);
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        focus: function() {
          n.root.focus();
        },
        getAttribute: function(r) {
          return n.root.getAttribute(r);
        },
        notifyInteraction: function(r) {
          return n.emit(
            Zt.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          n.emit(
            Zt.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, s) {
          n.root.setAttribute(r, s);
        }
      };
      return new Jo(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(Bi)
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
var Jt;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(Jt || (Jt = {}));
var cn;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(cn || (cn = {}));
var Pe = {
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
}, At = {
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
}, Kt = /* @__PURE__ */ new Set();
Kt.add(Pe.ARROW_LEFT_KEY);
Kt.add(Pe.ARROW_RIGHT_KEY);
Kt.add(Pe.ARROW_DOWN_KEY);
Kt.add(Pe.ARROW_UP_KEY);
Kt.add(Pe.END_KEY);
Kt.add(Pe.HOME_KEY);
Kt.add(Pe.IE_ARROW_LEFT_KEY);
Kt.add(Pe.IE_ARROW_RIGHT_KEY);
Kt.add(Pe.IE_ARROW_DOWN_KEY);
Kt.add(Pe.IE_ARROW_UP_KEY);
var In = /* @__PURE__ */ new Set();
In.add(Pe.ARROW_UP_KEY);
In.add(Pe.ARROW_DOWN_KEY);
In.add(Pe.HOME_KEY);
In.add(Pe.END_KEY);
In.add(Pe.IE_ARROW_UP_KEY);
In.add(Pe.IE_ARROW_DOWN_KEY);
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
}, Vn;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Vn || (Vn = {}));
var fs = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Pe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return At;
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
      return this.adapter.hasClass(At.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(At.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(At.EDITING);
    }, e.prototype.setSelected = function(n) {
      this.setSelectedImpl(n), this.notifySelection(n);
    }, e.prototype.setSelectedFromChipSet = function(n, i) {
      this.setSelectedImpl(n), i && this.notifyIgnoredSelection(n);
    }, e.prototype.getShouldRemoveOnTrailingIconClick = function() {
      return this.shouldRemoveOnTrailingIconClick;
    }, e.prototype.setShouldRemoveOnTrailingIconClick = function(n) {
      this.shouldRemoveOnTrailingIconClick = n;
    }, e.prototype.setShouldFocusPrimaryActionOnClick = function(n) {
      this.shouldFocusPrimaryActionOnClick = n;
    }, e.prototype.getDimensions = function() {
      var n = this, i = function() {
        return n.adapter.getRootBoundingClientRect();
      }, r = function() {
        return n.adapter.getCheckmarkBoundingClientRect();
      };
      if (!this.adapter.hasLeadingIcon()) {
        var s = r();
        if (s) {
          var a = i();
          return {
            bottom: a.bottom,
            height: a.height,
            left: a.left,
            right: a.right,
            top: a.top,
            width: a.width + s.height
          };
        }
      }
      return i();
    }, e.prototype.beginExit = function() {
      this.adapter.addClass(At.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this, r = this.adapter.eventTargetHasClass(n.target, At.CHIP_EXIT), s = n.propertyName === "width", a = n.propertyName === "opacity";
      if (r && a) {
        var l = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          i.adapter.setStyleProperty("width", l), i.adapter.setStyleProperty("padding", "0"), i.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            i.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (r && s) {
        this.removeFocus();
        var o = this.adapter.getAttribute(Pe.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(o);
      }
      if (a) {
        var u = this.adapter.eventTargetHasClass(n.target, At.LEADING_ICON) && this.adapter.hasClass(At.SELECTED), c = this.adapter.eventTargetHasClass(n.target, At.CHECKMARK) && !this.adapter.hasClass(At.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(At.HIDDEN_LEADING_ICON);
          return;
        }
        if (c) {
          this.adapter.removeClassFromLeadingIcon(At.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(At.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(At.PRIMARY_ACTION_FOCUSED));
    }, e.prototype.handleTrailingActionInteraction = function() {
      this.adapter.notifyTrailingIconInteraction(), this.removeChip();
    }, e.prototype.handleKeydown = function(n) {
      if (this.isEditing()) {
        this.shouldFinishEditing(n) && (n.preventDefault(), this.finishEditing());
        return;
      }
      if (this.isEditable() && this.shouldStartEditing(n) && (n.preventDefault(), this.startEditing()), this.shouldNotifyInteraction(n)) {
        this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
        return;
      }
      if (this.isDeleteAction(n)) {
        n.preventDefault(), this.removeChip();
        return;
      }
      Kt.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, cn.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, cn.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Pe.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Vn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Pe.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Pe.TAB_INDEX, "0"), n === Vn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Vn.SHOULD_FOCUS : Vn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, i) {
      var r = this.adapter.isTrailingActionNavigable(), s = this.getDirection(n);
      if (In.has(n) || !r) {
        this.adapter.notifyNavigation(n, i);
        return;
      }
      if (i === cn.PRIMARY && s === Jt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === cn.TRAILING && s === Jt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, cn.NONE);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Pe.ARROW_LEFT_KEY || n === Pe.IE_ARROW_LEFT_KEY, s = n === Pe.ARROW_RIGHT_KEY || n === Pe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && s ? Jt.LEFT : Jt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Pe.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Pe.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Pe.ENTER_KEY || n.key === Pe.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var i = this.adapter.hasClass(At.DELETABLE);
      return i && (n.key === Pe.BACKSPACE_KEY || n.key === Pe.DELETE_KEY || n.key === Pe.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(At.SELECTED), this.adapter.setPrimaryActionAttr(Pe.ARIA_CHECKED, "true")) : (this.adapter.removeClass(At.SELECTED), this.adapter.setPrimaryActionAttr(Pe.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, At.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(At.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(At.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Ot)
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
var $o = (
  /** @class */
  function(t) {
    ot(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
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
      set: function(n) {
        this.foundation.setSelected(n);
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
      set: function(n) {
        this.foundation.setShouldRemoveOnTrailingIconClick(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "setShouldFocusPrimaryActionOnClick", {
      /**
       * Sets whether a clicking on the chip should focus the primary action.
       */
      set: function(n) {
        this.foundation.setShouldFocusPrimaryActionOnClick(n);
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
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n, i) {
      var r = this;
      n === void 0 && (n = function(l, o) {
        return new Fi(l, o);
      }), i === void 0 && (i = function(l) {
        return new xo(l);
      }), this.leadingIcon = this.root.querySelector(Pe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Pe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Pe.PRIMARY_ACTION_SELECTOR);
      var s = this.root.querySelector(Pe.TRAILING_ACTION_SELECTOR);
      s && (this.trailingAction = i(s));
      var a = ce(ce({}, Fi.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new Gi(a));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleTrailingActionInteraction = function() {
        n.foundation.handleTrailingActionInteraction();
      }, this.handleTrailingActionNavigation = function(i) {
        n.foundation.handleTrailingActionNavigation(i);
      }, this.handleClick = function() {
        n.foundation.handleClick();
      }, this.handleKeydown = function(i) {
        n.foundation.handleKeydown(i);
      }, this.handleTransitionEnd = function(i) {
        n.foundation.handleTransitionEnd(i);
      }, this.handleFocusIn = function(i) {
        n.foundation.handleFocusIn(i);
      }, this.handleFocusOut = function(i) {
        n.foundation.handleFocusOut(i);
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Zt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Zt.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Zt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Zt.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), t.prototype.destroy.call(this);
    }, e.prototype.beginExit = function() {
      this.foundation.beginExit();
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        addClass: function(r) {
          return n.root.classList.add(r);
        },
        addClassToLeadingIcon: function(r) {
          n.leadingIcon && n.leadingIcon.classList.add(r);
        },
        eventTargetHasClass: function(r, s) {
          return r ? r.classList.contains(s) : !1;
        },
        focusPrimaryAction: function() {
          n.primaryAction && n.primaryAction.focus();
        },
        focusTrailingAction: function() {
          n.trailingAction && n.trailingAction.focus();
        },
        getAttribute: function(r) {
          return n.root.getAttribute(r);
        },
        getCheckmarkBoundingClientRect: function() {
          return n.checkmark ? n.checkmark.getBoundingClientRect() : null;
        },
        getComputedStyleValue: function(r) {
          return window.getComputedStyle(n.root).getPropertyValue(r);
        },
        getRootBoundingClientRect: function() {
          return n.root.getBoundingClientRect();
        },
        hasClass: function(r) {
          return n.root.classList.contains(r);
        },
        hasLeadingIcon: function() {
          return !!n.leadingIcon;
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        isTrailingActionNavigable: function() {
          return n.trailingAction ? n.trailingAction.isNavigable() : !1;
        },
        notifyInteraction: function() {
          return n.emit(
            Pe.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, s) {
          return n.emit(
            Pe.NAVIGATION_EVENT,
            { chipId: n.id, key: r, source: s },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          n.emit(
            Pe.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, s) {
          return n.emit(
            Pe.SELECTION_EVENT,
            { chipId: n.id, selected: r, shouldIgnore: s },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            Pe.TRAILING_ICON_INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyEditStart: function() {
        },
        notifyEditFinish: function() {
        },
        removeClass: function(r) {
          return n.root.classList.remove(r);
        },
        removeClassFromLeadingIcon: function(r) {
          n.leadingIcon && n.leadingIcon.classList.remove(r);
        },
        removeTrailingActionFocus: function() {
          n.trailingAction && n.trailingAction.removeFocus();
        },
        setPrimaryActionAttr: function(r, s) {
          n.primaryAction && n.primaryAction.setAttribute(r, s);
        },
        setStyleProperty: function(r, s) {
          return n.root.style.setProperty(r, s);
        }
      };
      return new fs(i);
    }, e.prototype.setSelectedFromChipSet = function(n, i) {
      this.foundation.setSelectedFromChipSet(n, i);
    }, e.prototype.focusPrimaryAction = function() {
      this.foundation.focusPrimaryAction();
    }, e.prototype.focusTrailingAction = function() {
      this.foundation.focusTrailingAction();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e.prototype.remove = function() {
      var n = this.root.parentNode;
      n !== null && n.removeChild(this.root);
    }, e;
  }(Bi)
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
var eu = {
  CHIP_SELECTOR: ".mdc-chip"
}, ui = {
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
var ds = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return eu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ui;
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
    }, e.prototype.select = function(n) {
      this.selectImpl(n, !1);
    }, e.prototype.handleChipInteraction = function(n) {
      var i = n.chipId, r = this.adapter.getIndexOfChipById(i);
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(ui.CHOICE) || this.adapter.hasClass(ui.FILTER)) && this.toggleSelect(i);
    }, e.prototype.handleChipSelection = function(n) {
      var i = n.chipId, r = n.selected, s = n.shouldIgnore;
      if (!s) {
        var a = this.selectedChipIds.indexOf(i) >= 0;
        r && !a ? this.select(i) : !r && a && this.deselectImpl(i);
      }
    }, e.prototype.handleChipRemoval = function(n) {
      var i = n.chipId, r = n.removedAnnouncement;
      r && this.adapter.announceMessage(r);
      var s = this.adapter.getIndexOfChipById(i);
      this.deselectAndNotifyClients(i), this.adapter.removeChipAtIndex(s);
      var a = this.adapter.getChipListCount() - 1;
      if (!(a < 0)) {
        var l = Math.min(s, a);
        this.removeFocusFromChipsExcept(l), this.adapter.focusChipTrailingActionAtIndex(l);
      }
    }, e.prototype.handleChipNavigation = function(n) {
      var i = n.chipId, r = n.key, s = n.source, a = this.adapter.getChipListCount() - 1, l = this.adapter.getIndexOfChipById(i);
      if (!(l === -1 || !Kt.has(r))) {
        var o = this.adapter.isRTL(), u = r === Pe.ARROW_LEFT_KEY || r === Pe.IE_ARROW_LEFT_KEY, c = r === Pe.ARROW_RIGHT_KEY || r === Pe.IE_ARROW_RIGHT_KEY, f = r === Pe.ARROW_DOWN_KEY || r === Pe.IE_ARROW_DOWN_KEY, d = !o && c || o && u || f, h = r === Pe.HOME_KEY, m = r === Pe.END_KEY;
        d ? l++ : h ? l = 0 : m ? l = a : l--, !(l < 0 || l > a) && (this.removeFocusFromChipsExcept(l), this.focusChipAction(l, r, s));
      }
    }, e.prototype.focusChipAction = function(n, i, r) {
      var s = In.has(i);
      if (s && r === cn.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (s && r === cn.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var a = this.getDirection(i);
      if (a === Jt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (a === Jt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Pe.ARROW_LEFT_KEY || n === Pe.IE_ARROW_LEFT_KEY, s = n === Pe.ARROW_RIGHT_KEY || n === Pe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && s ? Jt.LEFT : Jt.RIGHT;
    }, e.prototype.deselectImpl = function(n, i) {
      i === void 0 && (i = !1);
      var r = this.selectedChipIds.indexOf(n);
      if (r >= 0) {
        this.selectedChipIds.splice(r, 1);
        var s = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          s,
          /** isSelected */
          !1,
          i
        );
      }
    }, e.prototype.deselectAndNotifyClients = function(n) {
      this.deselectImpl(n, !0);
    }, e.prototype.toggleSelect = function(n) {
      this.selectedChipIds.indexOf(n) >= 0 ? this.deselectAndNotifyClients(n) : this.selectAndNotifyClients(n);
    }, e.prototype.removeFocusFromChipsExcept = function(n) {
      for (var i = this.adapter.getChipListCount(), r = 0; r < i; r++)
        r !== n && this.adapter.removeFocusFromChipAtIndex(r);
    }, e.prototype.selectAndNotifyClients = function(n) {
      this.selectImpl(n, !0);
    }, e.prototype.selectImpl = function(n, i) {
      if (!(this.selectedChipIds.indexOf(n) >= 0)) {
        if (this.adapter.hasClass(ui.CHOICE) && this.selectedChipIds.length > 0) {
          var r = this.selectedChipIds[0], s = this.adapter.getIndexOfChipById(r);
          this.selectedChipIds = [], this.adapter.selectChipAtIndex(
            s,
            /** isSelected */
            !1,
            i
          );
        }
        this.selectedChipIds.push(n);
        var a = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          a,
          /** isSelected */
          !0,
          i
        );
      }
    }, e;
  }(Ot)
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
var qi = fs.strings, Xl = qi.INTERACTION_EVENT, Yl = qi.SELECTION_EVENT, Zl = qi.REMOVAL_EVENT, Ql = qi.NAVIGATION_EVENT, wg = ds.strings.CHIP_SELECTOR, Jl = 0, Ug = (
  /** @class */
  function(t) {
    ot(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.attachTo = function(n) {
      return new e(n);
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
    }), e.prototype.initialize = function(n) {
      n === void 0 && (n = function(i) {
        return new $o(i);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, i, r = this;
      try {
        for (var s = Lt(this.chipsList), a = s.next(); !a.done; a = s.next()) {
          var l = a.value;
          l.id && l.selected && this.foundation.select(l.id);
        }
      } catch (o) {
        n = { error: o };
      } finally {
        try {
          a && !a.done && (i = s.return) && i.call(s);
        } finally {
          if (n)
            throw n.error;
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
      }, this.listen(Xl, this.handleChipInteraction), this.listen(Yl, this.handleChipSelection), this.listen(Zl, this.handleChipRemoval), this.listen(Ql, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, i;
      try {
        for (var r = Lt(this.chipsList), s = r.next(); !s.done; s = r.next()) {
          var a = s.value;
          a.destroy();
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          s && !s.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
      this.unlisten(Xl, this.handleChipInteraction), this.unlisten(Yl, this.handleChipSelection), this.unlisten(Zl, this.handleChipRemoval), this.unlisten(Ql, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++Jl, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        announceMessage: function(r) {
          Hg(r);
        },
        focusChipPrimaryActionAtIndex: function(r) {
          n.chipsList[r].focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: function(r) {
          n.chipsList[r].focusTrailingAction();
        },
        getChipListCount: function() {
          return n.chips.length;
        },
        getIndexOfChipById: function(r) {
          return n.findChipIndex(r);
        },
        hasClass: function(r) {
          return n.root.classList.contains(r);
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        removeChipAtIndex: function(r) {
          r >= 0 && r < n.chips.length && (n.chipsList[r].destroy(), n.chipsList[r].remove(), n.chipsList.splice(r, 1));
        },
        removeFocusFromChipAtIndex: function(r) {
          n.chipsList[r].removeFocus();
        },
        selectChipAtIndex: function(r, s, a) {
          r >= 0 && r < n.chips.length && n.chipsList[r].setSelectedFromChipSet(s, a);
        }
      };
      return new ds(i);
    }, e.prototype.instantiateChips = function(n) {
      var i = [].slice.call(this.root.querySelectorAll(wg));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++Jl, n(r);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === n)
          return i;
      return -1;
    }, e;
  }(Bi)
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
const hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: $o,
  MDCChipFoundation: fs,
  MDCChipSet: Ug,
  MDCChipSetFoundation: ds,
  MDCChipTrailingAction: xo,
  MDCChipTrailingActionFoundation: Jo,
  chipCssClasses: At,
  chipSetCssClasses: ui,
  chipSetStrings: eu,
  chipStrings: Pe,
  trailingActionStrings: Zt
}, Symbol.toStringTag, { value: "Module" }));
function xl(t) {
  let e;
  return {
    c() {
      e = x("div"), P(e, "class", "mdc-chip__ripple");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function $l(t) {
  let e;
  return {
    c() {
      e = x("div"), P(e, "class", "mdc-chip__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function Bg(t) {
  let e, n, i, r, s = (
    /*ripple*/
    t[3] && !/*$nonInteractive*/
    t[14] && xl()
  );
  const a = (
    /*#slots*/
    t[34].default
  ), l = Le(
    a,
    t,
    /*$$scope*/
    t[38],
    null
  );
  let o = (
    /*touch*/
    t[4] && $l()
  );
  return {
    c() {
      s && s.c(), e = oe(), l && l.c(), n = oe(), o && o.c(), i = Ye();
    },
    m(u, c) {
      s && s.m(u, c), B(u, e, c), l && l.m(u, c), B(u, n, c), o && o.m(u, c), B(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? s || (s = xl(), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), l && l.p && (!r || c[1] & /*$$scope*/
      128) && Re(
        l,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? Oe(
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
      u[4] ? o || (o = $l(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (E(l, u), r = !0);
    },
    o(u) {
      L(l, u), r = !1;
    },
    d(u) {
      u && (U(e), U(n), U(i)), s && s.d(u), l && l.d(u), o && o.d(u);
    }
  };
}
function Vg(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[6]
    ) },
    {
      use: [
        [
          Dt,
          {
            ripple: (
              /*ripple*/
              t[3] && !/*$nonInteractive*/
              t[14]
            ),
            unbounded: !1,
            addClass: (
              /*addClass*/
              t[25]
            ),
            removeClass: (
              /*removeClass*/
              t[26]
            ),
            addStyle: (
              /*addStyle*/
              t[27]
            )
          }
        ],
        /*forwardEvents*/
        t[15],
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
        "mdc-chip": !0,
        "mdc-chip--selected": (
          /*selected*/
          t[8]
        ),
        "mdc-chip--touch": (
          /*touch*/
          t[4]
        ),
        .../*internalClasses*/
        t[10]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[11]
      ).map(Mr).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { role: "row" },
    /*$$restProps*/
    t[28]
  ];
  var s = (
    /*component*/
    t[5]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [Bg] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = X(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = X(u, me(r, [
      o[0] & /*tag*/
      64 && { tag: (
        /*tag*/
        l[6]
      ) },
      o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
      234930185 && {
        use: [
          [
            Dt,
            {
              ripple: (
                /*ripple*/
                l[3] && !/*$nonInteractive*/
                l[14]
              ),
              unbounded: !1,
              addClass: (
                /*addClass*/
                l[25]
              ),
              removeClass: (
                /*removeClass*/
                l[26]
              ),
              addStyle: (
                /*addStyle*/
                l[27]
              )
            }
          ],
          /*forwardEvents*/
          l[15],
          .../*use*/
          l[0]
        ]
      },
      o[0] & /*className, selected, touch, internalClasses*/
      1298 && {
        class: re({
          [
            /*className*/
            l[1]
          ]: !0,
          "mdc-chip": !0,
          "mdc-chip--selected": (
            /*selected*/
            l[8]
          ),
          "mdc-chip--touch": (
            /*touch*/
            l[4]
          ),
          .../*internalClasses*/
          l[10]
        })
      },
      o[0] & /*internalStyles, style*/
      2052 && {
        style: Object.entries(
          /*internalStyles*/
          l[11]
        ).map(Mr).concat([
          /*style*/
          l[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && Te(
        /*$$restProps*/
        l[28]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[35](e), e.$on("transitionend", function() {
    ge(
      /*instance*/
      t[7] && /*instance*/
      t[7].handleTransitionEnd.bind(
        /*instance*/
        t[7]
      )
    ) && /*instance*/
    (t[7] && /*instance*/
    t[7].handleTransitionEnd.bind(
      /*instance*/
      t[7]
    )).apply(this, arguments);
  }), e.$on("click", function() {
    ge(
      /*instance*/
      t[7] && /*instance*/
      t[7].handleClick.bind(
        /*instance*/
        t[7]
      )
    ) && /*instance*/
    (t[7] && /*instance*/
    t[7].handleClick.bind(
      /*instance*/
      t[7]
    )).apply(this, arguments);
  }), e.$on("keydown", function() {
    ge(
      /*instance*/
      t[7] && /*instance*/
      t[7].handleKeydown.bind(
        /*instance*/
        t[7]
      )
    ) && /*instance*/
    (t[7] && /*instance*/
    t[7].handleKeydown.bind(
      /*instance*/
      t[7]
    )).apply(this, arguments);
  }), e.$on("focusin", function() {
    ge(
      /*instance*/
      t[7] && /*instance*/
      t[7].handleFocusIn.bind(
        /*instance*/
        t[7]
      )
    ) && /*instance*/
    (t[7] && /*instance*/
    t[7].handleFocusIn.bind(
      /*instance*/
      t[7]
    )).apply(this, arguments);
  }), e.$on("focusout", function() {
    ge(
      /*instance*/
      t[7] && /*instance*/
      t[7].handleFocusOut.bind(
        /*instance*/
        t[7]
      )
    ) && /*instance*/
    (t[7] && /*instance*/
    t[7].handleFocusOut.bind(
      /*instance*/
      t[7]
    )).apply(this, arguments);
  }), e.$on("SMUIChipTrailingAction:interaction", function() {
    ge(
      /*instance*/
      t[7] && /*instance*/
      t[7].handleTrailingActionInteraction.bind(
        /*instance*/
        t[7]
      )
    ) && /*instance*/
    (t[7] && /*instance*/
    t[7].handleTrailingActionInteraction.bind(
      /*instance*/
      t[7]
    )).apply(this, arguments);
  }), e.$on("SMUIChipTrailingAction:navigation", function() {
    ge(
      /*instance*/
      t[7] && /*instance*/
      t[7].handleTrailingActionNavigation.bind(
        /*instance*/
        t[7]
      )
    ) && /*instance*/
    (t[7] && /*instance*/
    t[7].handleTrailingActionNavigation.bind(
      /*instance*/
      t[7]
    )).apply(this, arguments);
  }), e.$on(
    "SMUIChipsChipPrimaryAction:mount",
    /*handleSMUIChipsChipPrimaryAction*/
    t[23]
  ), e.$on(
    "SMUIChipsChipPrimaryAction:unmount",
    /*SMUIChipsChipPrimaryAction_unmount_handler*/
    t[36]
  ), e.$on(
    "SMUIChipsChipTrailingAction:mount",
    /*handleSMUIChipsChipTrailingAction*/
    t[24]
  ), e.$on(
    "SMUIChipsChipTrailingAction:unmount",
    /*SMUIChipsChipTrailingAction_unmount_handler*/
    t[37]
  )), {
    c() {
      e && te(e.$$.fragment), n = Ye();
    },
    m(l, o) {
      e && $(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (t = l, o[0] & /*component*/
      32 && s !== (s = /*component*/
      t[5])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(t, o)), t[35](e), e.$on("transitionend", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleTransitionEnd.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleTransitionEnd.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        }), e.$on("click", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleClick.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleClick.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        }), e.$on("keydown", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleKeydown.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleKeydown.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        }), e.$on("focusin", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleFocusIn.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleFocusIn.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        }), e.$on("focusout", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleFocusOut.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleFocusOut.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        }), e.$on("SMUIChipTrailingAction:interaction", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleTrailingActionInteraction.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleTrailingActionInteraction.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        }), e.$on("SMUIChipTrailingAction:navigation", function() {
          ge(
            /*instance*/
            t[7] && /*instance*/
            t[7].handleTrailingActionNavigation.bind(
              /*instance*/
              t[7]
            )
          ) && /*instance*/
          (t[7] && /*instance*/
          t[7].handleTrailingActionNavigation.bind(
            /*instance*/
            t[7]
          )).apply(this, arguments);
        }), e.$on(
          "SMUIChipsChipPrimaryAction:mount",
          /*handleSMUIChipsChipPrimaryAction*/
          t[23]
        ), e.$on(
          "SMUIChipsChipPrimaryAction:unmount",
          /*SMUIChipsChipPrimaryAction_unmount_handler*/
          t[36]
        ), e.$on(
          "SMUIChipsChipTrailingAction:mount",
          /*handleSMUIChipsChipTrailingAction*/
          t[24]
        ), e.$on(
          "SMUIChipsChipTrailingAction:unmount",
          /*SMUIChipsChipTrailingAction_unmount_handler*/
          t[37]
        ), te(e.$$.fragment), E(e.$$.fragment, 1), $(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
        503369055 ? me(r, [
          o[0] & /*tag*/
          64 && { tag: (
            /*tag*/
            t[6]
          ) },
          o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
          234930185 && {
            use: [
              [
                Dt,
                {
                  ripple: (
                    /*ripple*/
                    t[3] && !/*$nonInteractive*/
                    t[14]
                  ),
                  unbounded: !1,
                  addClass: (
                    /*addClass*/
                    t[25]
                  ),
                  removeClass: (
                    /*removeClass*/
                    t[26]
                  ),
                  addStyle: (
                    /*addStyle*/
                    t[27]
                  )
                }
              ],
              /*forwardEvents*/
              t[15],
              .../*use*/
              t[0]
            ]
          },
          o[0] & /*className, selected, touch, internalClasses*/
          1298 && {
            class: re({
              [
                /*className*/
                t[1]
              ]: !0,
              "mdc-chip": !0,
              "mdc-chip--selected": (
                /*selected*/
                t[8]
              ),
              "mdc-chip--touch": (
                /*touch*/
                t[4]
              ),
              .../*internalClasses*/
              t[10]
            })
          },
          o[0] & /*internalStyles, style*/
          2052 && {
            style: Object.entries(
              /*internalStyles*/
              t[11]
            ).map(Mr).concat([
              /*style*/
              t[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && Te(
            /*$$restProps*/
            t[28]
          )
        ]) : {};
        o[0] & /*touch, ripple, $nonInteractive*/
        16408 | o[1] & /*$$scope*/
        128 && (u.$$scope = { dirty: o, ctx: t }), e.$set(u);
      }
    },
    i(l) {
      i || (e && E(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[35](null), e && ee(e, l);
    }
  };
}
const Mr = ([t, e]) => `${t}: ${e};`;
function Gg(t, e, n) {
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
  let r = pe(e, i), s, a, l, o, u, c, f, { $$slots: d = {}, $$scope: h } = e;
  const { MDCChipFoundation: m } = hs, g = rt($e());
  let { use: p = [] } = e, { class: A = "" } = e, { style: _ = "" } = e, { chip: S } = e, { ripple: C = !0 } = e, { touch: M = !1 } = e, { shouldRemoveOnTrailingIconClick: D = !0 } = e, { shouldFocusPrimaryActionOnClick: b = !0 } = e, O, w, y = {}, v = {}, I = {};
  const T = ze("SMUI:chips:chip:initialSelected");
  st(t, T, (ne) => n(44, c = ne));
  let N = c, q, j;
  const K = ze("SMUI:chips:nonInteractive");
  st(t, K, (ne) => n(14, f = ne));
  const k = ze("SMUI:chips:choice");
  st(t, k, (ne) => n(40, a = ne));
  const R = ze("SMUI:chips:chip:index");
  st(t, R, (ne) => n(39, s = ne));
  let { component: V = wt } = e, { tag: ue = V === wt ? "div" : void 0 } = e;
  const Ne = Tt(D);
  st(t, Ne, (ne) => n(43, u = ne)), We("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Ne);
  const Ie = Tt(N);
  st(t, Ie, (ne) => n(42, o = ne)), We("SMUI:chips:chip:isSelected", Ie);
  const Xe = Tt(v);
  if (st(t, Xe, (ne) => n(41, l = ne)), We("SMUI:chips:chip:leadingIconClasses", Xe), We("SMUI:chips:chip:focusable", a && N || s === 0), !S)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  ct(() => {
    n(7, w = new m({
      addClass: ye,
      addClassToLeadingIcon: ie,
      eventTargetHasClass: (Ke, ht) => Ke && "classList" in Ke ? Ke.classList.contains(ht) : !1,
      focusPrimaryAction: () => {
        q && q.focus();
      },
      focusTrailingAction: () => {
        j && j.focus();
      },
      getAttribute: (Ke) => Fe().getAttribute(Ke),
      getCheckmarkBoundingClientRect: () => {
        const Ke = Fe().querySelector(".mdc-chip__checkmark");
        return Ke ? Ke.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Ve,
      getRootBoundingClientRect: () => Fe().getBoundingClientRect(),
      hasClass: Ee,
      hasLeadingIcon: () => !!Fe().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Fe()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => j ? j.isNavigable() : !1,
      notifyInteraction: () => _e(Fe(), "SMUIChip:interaction", { chipId: S }, void 0, !0),
      notifyNavigation: (Ke, ht) => _e(Fe(), "SMUIChip:navigation", { chipId: S, key: Ke, source: ht }, void 0, !0),
      notifyRemoval: (Ke) => {
        _e(Fe(), "SMUIChip:removal", { chipId: S, removedAnnouncement: Ke }, void 0, !0);
      },
      notifySelection: (Ke, ht) => _e(Fe(), "SMUIChip:selection", { chipId: S, selected: Ke, shouldIgnore: ht }, void 0, !0),
      notifyTrailingIconInteraction: () => _e(Fe(), "SMUIChip:trailingIconInteraction", { chipId: S }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: He,
      removeClassFromLeadingIcon: W,
      removeTrailingActionFocus: () => {
        j && j.removeFocus();
      },
      setPrimaryActionAttr: (Ke, ht) => {
        q && q.addAttr(Ke, ht);
      },
      setStyleProperty: qe
    }));
    const ne = {
      chipId: S,
      get selected() {
        return N;
      },
      focusPrimaryAction: Q,
      focusTrailingAction: Ce,
      removeFocus: je,
      setSelectedFromChipSet: St
    };
    return _e(Fe(), "SMUIChipsChip:mount", ne), w.init(), () => {
      _e(Fe(), "SMUIChipsChip:unmount", ne), w.destroy();
    };
  });
  function z(ne) {
    n(12, q = ne.detail);
  }
  function J(ne) {
    n(13, j = ne.detail);
  }
  function Ee(ne) {
    return ne in y ? y[ne] : Fe().classList.contains(ne);
  }
  function ye(ne) {
    y[ne] || n(10, y[ne] = !0, y);
  }
  function He(ne) {
    (!(ne in y) || y[ne]) && n(10, y[ne] = !1, y);
  }
  function ie(ne) {
    v[ne] || n(33, v[ne] = !0, v);
  }
  function W(ne) {
    (!(ne in v) || v[ne]) && n(33, v[ne] = !1, v);
  }
  function qe(ne, Ke) {
    I[ne] != Ke && (Ke === "" || Ke == null ? (delete I[ne], n(11, I)) : n(11, I[ne] = Ke, I));
  }
  function Ve(ne) {
    return ne in I ? I[ne] : getComputedStyle(Fe()).getPropertyValue(ne);
  }
  function St(ne, Ke) {
    n(8, N = ne), w.setSelectedFromChipSet(N, Ke);
  }
  function Q() {
    w.focusPrimaryAction();
  }
  function Ce() {
    w.focusTrailingAction();
  }
  function je() {
    w.removeFocus();
  }
  function Fe() {
    return O.getElement();
  }
  function Rt(ne) {
    le[ne ? "unshift" : "push"](() => {
      O = ne, n(9, O);
    });
  }
  const G = () => n(12, q = void 0), se = () => n(13, j = void 0);
  return t.$$set = (ne) => {
    e = X(X({}, e), it(ne)), n(28, r = pe(e, i)), "use" in ne && n(0, p = ne.use), "class" in ne && n(1, A = ne.class), "style" in ne && n(2, _ = ne.style), "chip" in ne && n(29, S = ne.chip), "ripple" in ne && n(3, C = ne.ripple), "touch" in ne && n(4, M = ne.touch), "shouldRemoveOnTrailingIconClick" in ne && n(30, D = ne.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in ne && n(31, b = ne.shouldFocusPrimaryActionOnClick), "component" in ne && n(5, V = ne.component), "tag" in ne && n(6, ue = ne.tag), "$$scope" in ne && n(38, h = ne.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && jt(Ne, u = D, u), t.$$.dirty[0] & /*selected*/
    256 && jt(Ie, o = N, o), t.$$.dirty[1] & /*leadingIconClasses*/
    4 && jt(Xe, l = v, l), t.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && w && w.getShouldRemoveOnTrailingIconClick() !== D && w.setShouldRemoveOnTrailingIconClick(D), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && w && w.setShouldFocusPrimaryActionOnClick(b);
  }, [
    p,
    A,
    _,
    C,
    M,
    V,
    ue,
    w,
    N,
    O,
    y,
    I,
    q,
    j,
    f,
    g,
    T,
    K,
    k,
    R,
    Ne,
    Ie,
    Xe,
    z,
    J,
    ye,
    He,
    qe,
    r,
    S,
    D,
    b,
    Fe,
    v,
    d,
    Rt,
    G,
    se,
    h
  ];
}
class jg extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Gg,
      Vg,
      ve,
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
function ea(t, e, n) {
  const i = t.slice();
  return i[37] = e[n], i[39] = n, i;
}
const qg = (t) => ({ chip: t[0] & /*chips*/
1 }), ta = (t) => ({ chip: (
  /*chip*/
  t[37]
) });
function Wg(t) {
  let e;
  const n = (
    /*#slots*/
    t[25].default
  ), i = Le(
    n,
    t,
    /*$$scope*/
    t[27],
    ta
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s[0] & /*$$scope, chips*/
      134217729) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[27],
        e ? Oe(
          n,
          /*$$scope*/
          r[27],
          s,
          qg
        ) : Me(
          /*$$scope*/
          r[27]
        ),
        ta
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function zg(t) {
  let e, n, i;
  return e = new Jn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        t[10][
          /*i*/
          t[39]
        ]
      ),
      $$slots: { default: [Wg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe();
    },
    m(r, s) {
      $(e, r, s), B(r, n, s), i = !0;
    },
    p(r, s) {
      const a = {};
      s[0] & /*chips*/
      1 && (a.value = /*initialSelected*/
      r[10][
        /*i*/
        r[39]
      ]), s[0] & /*$$scope, chips*/
      134217729 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      i || (E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      L(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && U(n), ee(e, r);
    }
  };
}
function na(t, e) {
  let n, i, r;
  return i = new Jn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [zg] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ye(), te(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      B(s, n, a), $(i, s, a), r = !0;
    },
    p(s, a) {
      e = s;
      const l = {};
      a[0] & /*chips*/
      1 && (l.value = /*i*/
      e[39]), a[0] & /*$$scope, chips*/
      134217729 && (l.$$scope = { dirty: a, ctx: e }), i.$set(l);
    },
    i(s) {
      r || (E(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), ee(i, s);
    }
  };
}
function Kg(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, s, a, l, o, u = zt(
    /*chips*/
    t[0]
  );
  const c = (h) => (
    /*key*/
    h[3](
      /*chip*/
      h[37]
    )
  );
  for (let h = 0; h < u.length; h += 1) {
    let m = ea(t, u, h), g = c(m);
    i.set(g, n[h] = na(g, m));
  }
  let f = [
    {
      class: r = re({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": (
          /*nonInteractive*/
          t[4]
        ),
        "mdc-chip-set--choice": (
          /*choice*/
          t[5]
        ),
        "mdc-chip-set--filter": (
          /*filter*/
          t[6]
        ),
        "mdc-chip-set--input": (
          /*input*/
          t[7]
        )
      })
    },
    { role: "grid" },
    /*$$restProps*/
    t[20]
  ], d = {};
  for (let h = 0; h < f.length; h += 1)
    d = X(d, f[h]);
  return {
    c() {
      e = x("div");
      for (let h = 0; h < n.length; h += 1)
        n[h].c();
      fe(e, d);
    },
    m(h, m) {
      B(h, e, m);
      for (let g = 0; g < n.length; g += 1)
        n[g] && n[g].m(e, null);
      t[26](e), a = !0, l || (o = [
        de(s = xe.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        de(
          /*forwardEvents*/
          t[9].call(null, e)
        ),
        he(
          e,
          "SMUIChipsChip:mount",
          /*handleChipMount*/
          t[14]
        ),
        he(
          e,
          "SMUIChipsChip:unmount",
          /*handleChipUnmount*/
          t[15]
        ),
        he(
          e,
          "SMUIChip:interaction",
          /*handleChipInteraction*/
          t[16]
        ),
        he(
          e,
          "SMUIChip:selection",
          /*handleChipSelection*/
          t[17]
        ),
        he(
          e,
          "SMUIChip:removal",
          /*handleChipRemoval*/
          t[18]
        ),
        he(
          e,
          "SMUIChip:navigation",
          /*handleChipNavigation*/
          t[19]
        )
      ], l = !0);
    },
    p(h, m) {
      m[0] & /*chips, initialSelected, $$scope, key*/
      134218761 && (u = zt(
        /*chips*/
        h[0]
      ), Ue(), n = xr(n, m, c, 1, h, u, i, e, Jr, na, null, ea), Be()), fe(e, d = me(f, [
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
      ])), s && ge(s.update) && m[0] & /*use*/
      2 && s.update.call(
        null,
        /*use*/
        h[1]
      );
    },
    i(h) {
      if (!a) {
        for (let m = 0; m < u.length; m += 1)
          E(n[m]);
        a = !0;
      }
    },
    o(h) {
      for (let m = 0; m < n.length; m += 1)
        L(n[m]);
      a = !1;
    },
    d(h) {
      h && U(e);
      for (let m = 0; m < n.length; m += 1)
        n[m].d();
      t[26](null), l = !1, Ze(o);
    }
  };
}
function ia(t, e) {
  let n = new Set(t);
  for (let i of e)
    n.delete(i);
  return n;
}
function Xg(t, e, n) {
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
  let r = pe(e, i), s, a, l, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = hs, f = rt($e());
  let { use: d = [] } = e, { class: h = "" } = e, { chips: m = [] } = e, { key: g = (z) => z } = e, { selected: p = void 0 } = e, { nonInteractive: A = !1 } = e, { choice: _ = !1 } = e, { filter: S = !1 } = e, { input: C = !1 } = e, M, D, b = {}, O = /* @__PURE__ */ new WeakMap(), w = m.map((z) => _ && p === z || S && p.indexOf(z) !== -1);
  const y = Tt(A);
  st(t, y, (z) => n(31, l = z)), We("SMUI:chips:nonInteractive", y);
  const v = Tt(_);
  st(t, v, (z) => n(30, a = z)), We("SMUI:chips:choice", v);
  const I = Tt(S);
  st(t, I, (z) => n(29, s = z)), We("SMUI:chips:filter", I);
  let T = S ? new Set(p) : p;
  ct(() => {
    if (n(23, D = new c({
      announceMessage: oh,
      focusChipPrimaryActionAtIndex: (z) => {
        var J;
        (J = V(m[z])) === null || J === void 0 || J.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (z) => {
        var J;
        (J = V(m[z])) === null || J === void 0 || J.focusTrailingAction();
      },
      getChipListCount: () => m.length,
      getIndexOfChipById: (z) => m.indexOf(z),
      hasClass: (z) => Ie().classList.contains(z),
      isRTL: () => getComputedStyle(Ie()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (z) => {
        z >= 0 && z < m.length && (_ && p === m[z] ? n(21, p = null) : S && p.indexOf(m[z]) !== -1 && (p.splice(p.indexOf(m[z]), 1), n(21, p)), m.splice(z, 1), n(0, m));
      },
      removeFocusFromChipAtIndex: (z) => {
        var J;
        (J = V(m[z])) === null || J === void 0 || J.removeFocus();
      },
      selectChipAtIndex: (z, J, Ee) => {
        var ye;
        if (z >= 0 && z < m.length) {
          if (S) {
            const He = p.indexOf(m[z]);
            J && He === -1 ? (p.push(m[z]), n(21, p)) : !J && He !== -1 && (p.splice(He, 1), n(21, p));
          } else
            _ && (J || p === m[z]) && n(21, p = J ? m[z] : null);
          (ye = V(m[z])) === null || ye === void 0 || ye.setSelectedFromChipSet(J, Ee);
        }
      }
    })), D.init(), _ && p != null)
      D.select(p);
    else if (S && p.length)
      for (const z of p)
        D.select(z);
    return () => {
      D.destroy();
    };
  });
  function N(z) {
    const J = z.detail;
    ue(J.chipId, J);
  }
  function q(z) {
    const J = z.detail;
    Ne(J.chipId);
  }
  function j(z) {
    D && D.handleChipInteraction(z.detail);
  }
  function K(z) {
    D && D.handleChipSelection(z.detail);
  }
  function k(z) {
    D && D.handleChipRemoval(z.detail);
  }
  function R(z) {
    D && D.handleChipNavigation(z.detail);
  }
  function V(z) {
    return z instanceof Object ? O.get(z) : b[z];
  }
  function ue(z, J) {
    z instanceof Object ? O.set(z, J) : b[z] = J;
  }
  function Ne(z) {
    z instanceof Object ? O.delete(z) : delete b[z];
  }
  function Ie() {
    return M;
  }
  function Xe(z) {
    le[z ? "unshift" : "push"](() => {
      M = z, n(8, M);
    });
  }
  return t.$$set = (z) => {
    e = X(X({}, e), it(z)), n(20, r = pe(e, i)), "use" in z && n(1, d = z.use), "class" in z && n(2, h = z.class), "chips" in z && n(0, m = z.chips), "key" in z && n(3, g = z.key), "selected" in z && n(21, p = z.selected), "nonInteractive" in z && n(4, A = z.nonInteractive), "choice" in z && n(5, _ = z.choice), "filter" in z && n(6, S = z.filter), "input" in z && n(7, C = z.input), "$$scope" in z && n(27, u = z.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*nonInteractive*/
    16 && jt(y, l = A, l), t.$$.dirty[0] & /*choice*/
    32 && jt(v, a = _, a), t.$$.dirty[0] & /*filter*/
    64 && jt(I, s = S, s), t.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && D && _ && T !== p && (n(24, T = p), D.select(p)), t.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && D && S) {
      const z = new Set(p), J = ia(T, z), Ee = ia(z, T);
      if (J.size || Ee.size) {
        n(24, T = z);
        for (let ye of J)
          m.indexOf(ye) !== -1 && D.handleChipSelection({ chipId: ye, selected: !1 });
        for (let ye of Ee)
          D.handleChipSelection({ chipId: ye, selected: !0 });
      }
    }
  }, [
    m,
    d,
    h,
    g,
    A,
    _,
    S,
    C,
    M,
    f,
    w,
    y,
    v,
    I,
    N,
    q,
    j,
    K,
    k,
    R,
    r,
    p,
    Ie,
    D,
    T,
    o,
    Xe,
    u
  ];
}
class Yg extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Xg,
      Kg,
      ve,
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
function Zg(t) {
  let e, n, i, r, s, a, l, o = [
    {
      class: r = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-chip__checkmark": !0
      })
    },
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = X(u, o[c]);
  return {
    c() {
      e = x("span"), n = at("svg"), i = at("path"), P(i, "class", "mdc-chip__checkmark-path"), P(i, "fill", "none"), P(i, "stroke", "black"), P(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), P(n, "class", "mdc-chip__checkmark-svg"), P(n, "viewBox", "-2 -3 30 30"), fe(e, u);
    },
    m(c, f) {
      B(c, e, f), Z(e, n), Z(n, i), t[5](e), a || (l = de(s = xe.call(
        null,
        e,
        /*use*/
        t[0]
      )), a = !0);
    },
    p(c, [f]) {
      fe(e, u = me(o, [
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
      ])), s && ge(s.update) && f & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && U(e), t[5](null), a = !1, l();
    }
  };
}
function Qg(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = pe(e, i), { use: s = [] } = e, { class: a = "" } = e, l;
  function o() {
    return l;
  }
  function u(c) {
    le[c ? "unshift" : "push"](() => {
      l = c, n(2, l);
    });
  }
  return t.$$set = (c) => {
    e = X(X({}, e), it(c)), n(3, r = pe(e, i)), "use" in c && n(0, s = c.use), "class" in c && n(1, a = c.class);
  }, [s, a, l, r, o, u];
}
class Jg extends ke {
  constructor(e) {
    super(), De(this, e, Qg, Zg, ve, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function ra(t) {
  let e, n, i = {};
  return e = new Jg({ props: i }), t[23](e), {
    c() {
      te(e.$$.fragment);
    },
    m(r, s) {
      $(e, r, s), n = !0;
    },
    p(r, s) {
      const a = {};
      e.$set(a);
    },
    i(r) {
      n || (E(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[23](null), ee(e, r);
    }
  };
}
function xg(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[22].default
  ), a = Le(
    s,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let l = [
    {
      class: i = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-chip__primary-action": !0
      })
    },
    /*$filter*/
    t[3] || /*$choice*/
    t[2] ? {
      "aria-selected": (
        /*$isSelected*/
        t[10] ? "true" : "false"
      )
    } : {},
    /*roleProps*/
    t[8],
    /*internalAttrs*/
    t[7],
    /*$$restProps*/
    t[16]
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = X(o, l[u]);
  return {
    c() {
      e = x("span"), n = x("span"), a && a.c(), P(n, "class", "mdc-chip__text"), fe(e, o);
    },
    m(u, c) {
      B(u, e, c), Z(e, n), a && a.m(n, null), t[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && Re(
        a,
        s,
        u,
        /*$$scope*/
        u[21],
        r ? Oe(
          s,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Me(
          /*$$scope*/
          u[21]
        ),
        null
      ), fe(e, o = me(l, [
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
      r || (E(a, u), r = !0);
    },
    o(u) {
      L(a, u), r = !1;
    },
    d(u) {
      u && U(e), a && a.d(u), t[24](null);
    }
  };
}
function $g(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[22].default
  ), r = Le(
    i,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = x("span"), r && r.c(), P(e, "class", "mdc-chip__text");
    },
    m(s, a) {
      B(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, a) {
      r && r.p && (!n || a & /*$$scope*/
      2097152) && Re(
        r,
        i,
        s,
        /*$$scope*/
        s[21],
        n ? Oe(
          i,
          /*$$scope*/
          s[21],
          a,
          null
        ) : Me(
          /*$$scope*/
          s[21]
        ),
        null
      );
    },
    i(s) {
      n || (E(r, s), n = !0);
    },
    o(s) {
      L(r, s), n = !1;
    },
    d(s) {
      s && U(e), r && r.d(s);
    }
  };
}
function eb(t) {
  let e, n, i, r, s, a, l, o, u = (
    /*$filter*/
    t[3] && ra(t)
  );
  const c = [$g, xg], f = [];
  function d(h, m) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = d(t), r = f[i] = c[i](t), {
    c() {
      u && u.c(), e = oe(), n = x("span"), r.c(), P(n, "role", "gridcell");
    },
    m(h, m) {
      u && u.m(h, m), B(h, e, m), B(h, n, m), f[i].m(n, null), t[25](n), a = !0, l || (o = [
        de(s = xe.call(
          null,
          n,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[11].call(null, n)
        )
      ], l = !0);
    },
    p(h, [m]) {
      /*$filter*/
      h[3] ? u ? (u.p(h, m), m & /*$filter*/
      8 && E(u, 1)) : (u = ra(h), u.c(), E(u, 1), u.m(e.parentNode, e)) : u && (Ue(), L(u, 1, 1, () => {
        u = null;
      }), Be());
      let g = i;
      i = d(h), i === g ? f[i].p(h, m) : (Ue(), L(f[g], 1, 1, () => {
        f[g] = null;
      }), Be(), r = f[i], r ? r.p(h, m) : (r = f[i] = c[i](h), r.c()), E(r, 1), r.m(n, null)), s && ge(s.update) && m & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (E(u), E(r), a = !0);
    },
    o(h) {
      L(u), L(r), a = !1;
    },
    d(h) {
      h && (U(e), U(n)), u && u.d(h), f[i].d(), t[25](null), l = !1, Ze(o);
    }
  };
}
function tb(t, e, n) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let s = pe(e, r), a, l, o, u, { $$slots: c = {}, $$scope: f } = e;
  const d = rt($e());
  let { use: h = [] } = e, { class: m = "" } = e, { tabindex: g = ze("SMUI:chips:chip:focusable") ? 0 : -1 } = e, p, A, _, S = {};
  const C = ze("SMUI:chips:nonInteractive");
  st(t, C, (j) => n(9, o = j));
  const M = ze("SMUI:chips:choice");
  st(t, M, (j) => n(2, a = j));
  const D = ze("SMUI:chips:filter");
  st(t, D, (j) => n(3, l = j));
  const b = ze("SMUI:chips:chip:isSelected");
  st(t, b, (j) => n(10, u = j)), ct(() => {
    let j = { focus: y, addAttr: O };
    return _e(I(), "SMUIChipsChipPrimaryAction:mount", j), () => {
      _e(I(), "SMUIChipsChipPrimaryAction:unmount", j);
    };
  });
  function O(j, K) {
    S[j] !== K && n(7, S[j] = K, S);
  }
  function w(j) {
    S.tabindex !== p.getAttribute("tabindex") ? Qr().then(j) : j();
  }
  function y() {
    w(() => {
      _ && _.focus();
    });
  }
  function v() {
    return A && A.getElement();
  }
  function I() {
    return p;
  }
  function T(j) {
    le[j ? "unshift" : "push"](() => {
      A = j, n(5, A);
    });
  }
  function N(j) {
    le[j ? "unshift" : "push"](() => {
      _ = j, n(6, _);
    });
  }
  function q(j) {
    le[j ? "unshift" : "push"](() => {
      p = j, n(4, p);
    });
  }
  return t.$$set = (j) => {
    e = X(X({}, e), it(j)), n(16, s = pe(e, r)), "use" in j && n(0, h = j.use), "class" in j && n(1, m = j.class), "tabindex" in j && n(17, g = j.tabindex), "$$scope" in j && n(21, f = j.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*$filter, $choice, tabindex*/
    131084 && n(8, i = {
      role: l ? "checkbox" : a ? "radio" : "button",
      tabindex: g
    });
  }, [
    h,
    m,
    a,
    l,
    p,
    A,
    _,
    S,
    i,
    o,
    u,
    d,
    C,
    M,
    D,
    b,
    s,
    g,
    y,
    v,
    I,
    f,
    c,
    T,
    N,
    q
  ];
}
class nb extends ke {
  constructor(e) {
    super(), De(this, e, tb, eb, ve, {
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
function sa(t) {
  let e;
  return {
    c() {
      e = x("span"), P(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function ib(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p = (
    /*touch*/
    t[4] && sa()
  );
  const A = (
    /*#slots*/
    t[23].default
  ), _ = Le(
    A,
    t,
    /*$$scope*/
    t[22],
    null
  );
  let S = [
    {
      class: a = re({
        [
          /*icon$class*/
          t[7]
        ]: !0,
        "mdc-deprecated-chip-trailing-action__icon": !0
      })
    },
    Ge(
      /*$$restProps*/
      t[17],
      "icon$"
    )
  ], C = {};
  for (let b = 0; b < S.length; b += 1)
    C = X(C, S[b]);
  let M = [
    { type: "button" },
    {
      class: o = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-deprecated-chip-trailing-action": !0,
        .../*internalClasses*/
        t[10]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        t[11]
      ).map(la).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    {
      "aria-hidden": c = /*nonNavigable*/
      t[5] ? "true" : void 0
    },
    { tabindex: "-1" },
    /*internalAttrs*/
    t[12],
    $t(
      /*$$restProps*/
      t[17],
      ["icon$"]
    )
  ], D = {};
  for (let b = 0; b < M.length; b += 1)
    D = X(D, M[b]);
  return {
    c() {
      e = x("button"), n = x("span"), i = oe(), p && p.c(), r = oe(), s = x("span"), _ && _.c(), P(n, "class", "mdc-deprecated-chip-trailing-action__ripple"), fe(s, C), fe(e, D);
    },
    m(b, O) {
      B(b, e, O), Z(e, n), Z(e, i), p && p.m(e, null), Z(e, r), Z(e, s), _ && _.m(s, null), e.autofocus && e.focus(), t[24](e), h = !0, m || (g = [
        de(l = xe.call(
          null,
          s,
          /*icon$use*/
          t[6]
        )),
        de(f = Dt.call(null, e, {
          ripple: (
            /*ripple*/
            t[3]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[14]
          ),
          removeClass: (
            /*removeClass*/
            t[15]
          ),
          addStyle: (
            /*addStyle*/
            t[16]
          )
        })),
        de(d = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        he(e, "click", function() {
          ge(
            /*instance*/
            t[9] && /*instance*/
            t[9].handleClick.bind(
              /*instance*/
              t[9]
            )
          ) && /*instance*/
          (t[9] && /*instance*/
          t[9].handleClick.bind(
            /*instance*/
            t[9]
          )).apply(this, arguments);
        }),
        he(e, "keydown", function() {
          ge(
            /*instance*/
            t[9] && /*instance*/
            t[9].handleKeydown.bind(
              /*instance*/
              t[9]
            )
          ) && /*instance*/
          (t[9] && /*instance*/
          t[9].handleKeydown.bind(
            /*instance*/
            t[9]
          )).apply(this, arguments);
        })
      ], m = !0);
    },
    p(b, [O]) {
      t = b, /*touch*/
      t[4] ? p || (p = sa(), p.c(), p.m(e, r)) : p && (p.d(1), p = null), _ && _.p && (!h || O & /*$$scope*/
      4194304) && Re(
        _,
        A,
        t,
        /*$$scope*/
        t[22],
        h ? Oe(
          A,
          /*$$scope*/
          t[22],
          O,
          null
        ) : Me(
          /*$$scope*/
          t[22]
        ),
        null
      ), fe(s, C = me(S, [
        (!h || O & /*icon$class*/
        128 && a !== (a = re({
          [
            /*icon$class*/
            t[7]
          ]: !0,
          "mdc-deprecated-chip-trailing-action__icon": !0
        }))) && { class: a },
        O & /*$$restProps*/
        131072 && Ge(
          /*$$restProps*/
          t[17],
          "icon$"
        )
      ])), l && ge(l.update) && O & /*icon$use*/
      64 && l.update.call(
        null,
        /*icon$use*/
        t[6]
      ), fe(e, D = me(M, [
        { type: "button" },
        (!h || O & /*className, internalClasses*/
        1026 && o !== (o = re({
          [
            /*className*/
            t[1]
          ]: !0,
          "mdc-deprecated-chip-trailing-action": !0,
          .../*internalClasses*/
          t[10]
        }))) && { class: o },
        (!h || O & /*internalStyles, style*/
        2052 && u !== (u = Object.entries(
          /*internalStyles*/
          t[11]
        ).map(la).concat([
          /*style*/
          t[2]
        ]).join(" "))) && { style: u },
        (!h || O & /*nonNavigable*/
        32 && c !== (c = /*nonNavigable*/
        t[5] ? "true" : void 0)) && { "aria-hidden": c },
        { tabindex: "-1" },
        O & /*internalAttrs*/
        4096 && /*internalAttrs*/
        t[12],
        O & /*$$restProps*/
        131072 && $t(
          /*$$restProps*/
          t[17],
          ["icon$"]
        )
      ])), f && ge(f.update) && O & /*ripple*/
      8 && f.update.call(null, {
        ripple: (
          /*ripple*/
          t[3]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          t[14]
        ),
        removeClass: (
          /*removeClass*/
          t[15]
        ),
        addStyle: (
          /*addStyle*/
          t[16]
        )
      }), d && ge(d.update) && O & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        t[0]
      );
    },
    i(b) {
      h || (E(_, b), h = !0);
    },
    o(b) {
      L(_, b), h = !1;
    },
    d(b) {
      b && U(e), p && p.d(), _ && _.d(b), t[24](null), m = !1, Ze(g);
    }
  };
}
const la = ([t, e]) => `${t}: ${e};`;
function rb(t, e, n) {
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
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: l } = hs, o = rt($e());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { ripple: d = !0 } = e, { touch: h = !1 } = e, { nonNavigable: m = !1 } = e, { icon$use: g = [] } = e, { icon$class: p = "" } = e, A, _, S = {}, C = {}, M = {};
  ct(() => {
    n(9, _ = new l({
      focus: () => {
        const k = q();
        v(() => {
          k.focus();
        });
      },
      getAttribute: w,
      notifyInteraction: (k) => _e(q(), "SMUIChipTrailingAction:interaction", { trigger: k }, void 0, !0),
      notifyNavigation: (k) => {
        _e(q(), "SMUIChipTrailingAction:navigation", { key: k }, void 0, !0);
      },
      setAttribute: y
    }));
    const K = { isNavigable: I, focus: T, removeFocus: N };
    return _e(q(), "SMUIChipsChipTrailingAction:mount", K), _.init(), () => {
      _e(q(), "SMUIChipsChipTrailingAction:unmount", K), _.destroy();
    };
  });
  function D(K) {
    S[K] || n(10, S[K] = !0, S);
  }
  function b(K) {
    (!(K in S) || S[K]) && n(10, S[K] = !1, S);
  }
  function O(K, k) {
    C[K] != k && (k === "" || k == null ? (delete C[K], n(11, C)) : n(11, C[K] = k, C));
  }
  function w(K) {
    var k;
    return K in M ? (k = M[K]) !== null && k !== void 0 ? k : null : q().getAttribute(K);
  }
  function y(K, k) {
    M[K] !== k && n(12, M[K] = k, M);
  }
  function v(K) {
    M.tabindex !== A.getAttribute("tabindex") ? Qr().then(K) : K();
  }
  function I() {
    return _.isNavigable();
  }
  function T() {
    _.focus();
  }
  function N() {
    _.removeFocus();
  }
  function q() {
    return A;
  }
  function j(K) {
    le[K ? "unshift" : "push"](() => {
      A = K, n(8, A);
    });
  }
  return t.$$set = (K) => {
    e = X(X({}, e), it(K)), n(17, r = pe(e, i)), "use" in K && n(0, u = K.use), "class" in K && n(1, c = K.class), "style" in K && n(2, f = K.style), "ripple" in K && n(3, d = K.ripple), "touch" in K && n(4, h = K.touch), "nonNavigable" in K && n(5, m = K.nonNavigable), "icon$use" in K && n(6, g = K.icon$use), "icon$class" in K && n(7, p = K.icon$class), "$$scope" in K && n(22, a = K.$$scope);
  }, [
    u,
    c,
    f,
    d,
    h,
    m,
    g,
    p,
    A,
    _,
    S,
    C,
    M,
    o,
    D,
    b,
    O,
    r,
    I,
    T,
    N,
    q,
    a,
    s,
    j
  ];
}
class sb extends ke {
  constructor(e) {
    super(), De(this, e, rb, ib, ve, {
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
function lb(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), r = Le(
    i,
    t,
    /*$$scope*/
    t[0],
    null
  );
  return {
    c() {
      e = x("span"), r && r.c(), P(e, "class", "oscd-icon");
    },
    m(s, a) {
      B(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, [a]) {
      r && r.p && (!n || a & /*$$scope*/
      1) && Re(
        r,
        i,
        s,
        /*$$scope*/
        s[0],
        n ? Oe(
          i,
          /*$$scope*/
          s[0],
          a,
          null
        ) : Me(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      n || (E(r, s), n = !0);
    },
    o(s) {
      L(r, s), n = !1;
    },
    d(s) {
      s && U(e), r && r.d(s);
    }
  };
}
function ab(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  return t.$$set = (s) => {
    "$$scope" in s && n(0, r = s.$$scope);
  }, [r, i];
}
class dn extends ke {
  constructor(e) {
    super(), De(this, e, ab, lb, ve, {});
  }
}
function ob(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "height", "24px"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px"), P(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && P(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && U(e);
    }
  };
}
function ub(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [ob] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function cb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class fb extends ke {
  constructor(e) {
    super(), De(this, e, cb, ub, ve, { svgStyles: 0 });
  }
}
function db(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && P(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && U(e);
    }
  };
}
function hb(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [db] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function mb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class tu extends ke {
  constructor(e) {
    super(), De(this, e, mb, hb, ve, { svgStyles: 0 });
  }
}
function pb(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && P(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && U(e);
    }
  };
}
function gb(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [pb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function bb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class _b extends ke {
  constructor(e) {
    super(), De(this, e, bb, gb, ve, { svgStyles: 0 });
  }
}
function vb(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && P(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && U(e);
    }
  };
}
function Ib(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [vb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ab(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Eb extends ke {
  constructor(e) {
    super(), De(this, e, Ab, Ib, ve, { svgStyles: 0 });
  }
}
function yb(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "height", "24px"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px"), P(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p: Qe,
    d(i) {
      i && U(e);
    }
  };
}
function Cb(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [yb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope*/
      2 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Sb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Tb extends ke {
  constructor(e) {
    super(), De(this, e, Sb, Cb, ve, { svgStyles: 0 });
  }
}
function Lb(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && P(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && U(e);
    }
  };
}
function Ob(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Lb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Rb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Mb extends ke {
  constructor(e) {
    super(), De(this, e, Rb, Ob, ve, { svgStyles: 0 });
  }
}
function Db(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M200-440v-80h560v80H200Z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "height", "24px"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px"), P(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p: Qe,
    d(i) {
      i && U(e);
    }
  };
}
function kb(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Db] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope*/
      2 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Nb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Pb extends ke {
  constructor(e) {
    super(), De(this, e, Nb, kb, ve, { svgStyles: 0 });
  }
}
function Hb(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && P(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && U(e);
    }
  };
}
function Fb(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Hb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function wb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Ub extends ke {
  constructor(e) {
    super(), De(this, e, wb, Fb, ve, { svgStyles: 0 });
  }
}
function Bb(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && P(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && U(e);
    }
  };
}
function Vb(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Bb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Gb(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class jb extends ke {
  constructor(e) {
    super(), De(this, e, Gb, Vb, ve, { svgStyles: 0 });
  }
}
function qb(t) {
  let e;
  return {
    c() {
      e = ut(
        /*title*/
        t[0]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i & /*title*/
      1 && dt(
        e,
        /*title*/
        n[0]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function aa(t) {
  let e, n;
  return e = new sb({
    props: {
      $$slots: { default: [Wb] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    ge(
      /*callback*/
      t[2]
    ) && t[2].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      t = i;
      const s = {};
      r & /*$$scope*/
      16 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Wb(t) {
  let e, n;
  return e = new tu({
    props: {
      svgStyles: "margin-left: 0; fill: unset;"
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p: Qe,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function zb(t) {
  let e, n, i, r;
  e = new nb({
    props: {
      $$slots: { default: [qb] },
      $$scope: { ctx: t }
    }
  });
  let s = (
    /*closeable*/
    t[1] && !/*disabled*/
    t[3] && aa(t)
  );
  return {
    c() {
      te(e.$$.fragment), n = oe(), s && s.c(), i = Ye();
    },
    m(a, l) {
      $(e, a, l), B(a, n, l), s && s.m(a, l), B(a, i, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, title*/
      17 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? s ? (s.p(a, l), l & /*closeable, disabled*/
      10 && E(s, 1)) : (s = aa(a), s.c(), E(s, 1), s.m(i.parentNode, i)) : s && (Ue(), L(s, 1, 1, () => {
        s = null;
      }), Be());
    },
    i(a) {
      r || (E(e.$$.fragment, a), E(s), r = !0);
    },
    o(a) {
      L(e.$$.fragment, a), L(s), r = !1;
    },
    d(a) {
      a && (U(n), U(i)), ee(e, a), s && s.d(a);
    }
  };
}
function Kb(t) {
  let e, n;
  return e = new jg({
    props: {
      chip: (
        /*title*/
        t[0]
      ),
      nonInteractive: !0,
      disabled: !0,
      class: (
        /*disabled*/
        t[3] ? "disabled" : ""
      ),
      $$slots: { default: [zb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*title*/
      1 && (s.chip = /*title*/
      i[0]), r & /*disabled*/
      8 && (s.class = /*disabled*/
      i[3] ? "disabled" : ""), r & /*$$scope, callback, closeable, disabled, title*/
      31 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Xb(t, e, n) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: s } = e, { disabled: a = !1 } = e;
  return t.$$set = (l) => {
    "title" in l && n(0, i = l.title), "closeable" in l && n(1, r = l.closeable), "callback" in l && n(2, s = l.callback), "disabled" in l && n(3, a = l.disabled);
  }, [i, r, s, a];
}
class Yb extends ke {
  constructor(e) {
    super(), De(this, e, Xb, Kb, ve, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
function Zb(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = x("div"), n = x("input"), i = oe(), r = x("label"), s = ut(
        /*label*/
        t[1]
      ), a = oe(), l = x("span"), P(n, "type", "date"), P(n, "id", "datetime-picker"), P(n, "class", "custom-text-field__input svelte-ar6zwk"), P(n, "placeholder", ""), P(r, "for", "datetime-picker"), P(r, "class", "custom-floating-label svelte-ar6zwk"), P(l, "class", "custom-line svelte-ar6zwk"), P(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      B(c, e, f), Z(e, n), xt(
        n,
        /*value*/
        t[0]
      ), Z(e, i), Z(e, r), Z(r, s), Z(e, a), Z(e, l), o || (u = [
        he(
          n,
          "input",
          /*input_input_handler*/
          t[3]
        ),
        he(
          n,
          "change",
          /*handleDateTimeChange*/
          t[2]
        )
      ], o = !0);
    },
    p(c, [f]) {
      f & /*value*/
      1 && xt(
        n,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && dt(
        s,
        /*label*/
        c[1]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && U(e), o = !1, Ze(u);
    }
  };
}
function Qb(t, e, n) {
  let { label: i = "" } = e, { value: r = "" } = e;
  function s(l) {
    n(0, r = l.target.value);
  }
  function a() {
    r = this.value, n(0, r);
  }
  return t.$$set = (l) => {
    "label" in l && n(1, i = l.label), "value" in l && n(0, r = l.value);
  }, [r, i, s, a];
}
class Jb extends ke {
  constructor(e) {
    super(), De(this, e, Qb, Zb, ve, { label: 1, value: 0 });
  }
}
const Mt = [];
for (let t = 0; t < 256; ++t)
  Mt.push((t + 256).toString(16).slice(1));
function xb(t, e = 0) {
  return (Mt[t[e + 0]] + Mt[t[e + 1]] + Mt[t[e + 2]] + Mt[t[e + 3]] + "-" + Mt[t[e + 4]] + Mt[t[e + 5]] + "-" + Mt[t[e + 6]] + Mt[t[e + 7]] + "-" + Mt[t[e + 8]] + Mt[t[e + 9]] + "-" + Mt[t[e + 10]] + Mt[t[e + 11]] + Mt[t[e + 12]] + Mt[t[e + 13]] + Mt[t[e + 14]] + Mt[t[e + 15]]).toLowerCase();
}
let Dr;
const $b = new Uint8Array(16);
function e_() {
  if (!Dr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Dr = crypto.getRandomValues.bind(crypto);
  }
  return Dr($b);
}
const t_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), oa = { randomUUID: t_ };
function nu(t, e, n) {
  var r;
  if (oa.randomUUID && !t)
    return oa.randomUUID();
  t = t || {};
  const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? e_();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, xb(i);
}
const n_ = (t) => ({}), ua = (t) => ({});
function ca(t) {
  let e, n, i;
  function r(a) {
    t[16](a);
  }
  let s = { label: "Input" };
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new bp({ props: s }), le.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        $(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function fa(t) {
  var o;
  let e, n, i, r;
  function s(u) {
    t[17](u);
  }
  function a(u) {
    t[18](u);
  }
  let l = {
    label: "Input",
    data: (
      /*getSelectedFilterType*/
      (o = t[7].inputType) == null ? void 0 : o.options
    )
  };
  return (
    /*inputValue*/
    t[5] !== void 0 && (l.value = /*inputValue*/
    t[5]), /*selectedOptionIndex*/
    t[1] !== void 0 && (l.selectedOptionIndex = /*selectedOptionIndex*/
    t[1]), e = new cs({ props: l }), le.push(() => gt(e, "value", s)), le.push(() => gt(e, "selectedOptionIndex", a)), {
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
        128 && (f.data = /*getSelectedFilterType*/
        (d = u[7].inputType) == null ? void 0 : d.options), !n && c & /*inputValue*/
        32 && (n = !0, f.value = /*inputValue*/
        u[5], pt(() => n = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, f.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], pt(() => i = !1)), e.$set(f);
      },
      i(u) {
        r || (E(e.$$.fragment, u), r = !0);
      },
      o(u) {
        L(e.$$.fragment, u), r = !1;
      },
      d(u) {
        ee(e, u);
      }
    }
  );
}
function da(t) {
  let e, n, i;
  function r(a) {
    t[19](a);
  }
  let s = {};
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new Jb({ props: s }), le.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        $(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function ha(t) {
  let e, n, i;
  function r(a) {
    t[20](a);
  }
  let s = {};
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new m_({ props: s }), le.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        $(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function i_(t) {
  let e;
  return {
    c() {
      e = ut(
        /*addFilterLabel*/
        t[3]
      );
    },
    m(n, i) {
      B(n, e, i);
    },
    p(n, i) {
      i & /*addFilterLabel*/
      8 && dt(
        e,
        /*addFilterLabel*/
        n[3]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function r_(t) {
  let e, n;
  function i() {
    return (
      /*func*/
      t[21](
        /*chip*/
        t[25]
      )
    );
  }
  return e = new Yb({
    props: {
      title: (
        /*chip*/
        t[25].text
      ),
      callback: i,
      disabled: (
        /*chip*/
        t[25].disabled
      )
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, s) {
      $(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const a = {};
      s & /*chip*/
      33554432 && (a.title = /*chip*/
      t[25].text), s & /*chip*/
      33554432 && (a.callback = i), s & /*chip*/
      33554432 && (a.disabled = /*chip*/
      t[25].disabled), e.$set(a);
    },
    i(r) {
      n || (E(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function s_(t) {
  var I, T, N, q, j, K, k, R;
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, A, _, S;
  function C(V) {
    t[15](V);
  }
  let M = {
    disabled: (
      /*disabled*/
      t[2]
    ),
    label: (
      /*selectFilterLabel*/
      t[4]
    ),
    data: (
      /*convertTypeToSelection*/
      t[9]
    )
  };
  /*selectedFilterType*/
  t[6] !== void 0 && (M.value = /*selectedFilterType*/
  t[6]), r = new cs({ props: M }), le.push(() => gt(r, "value", C));
  let D = (
    /*getSelectedFilterType*/
    ((T = (I = t[7]) == null ? void 0 : I.inputType) == null ? void 0 : T.type) === "string" && ca(t)
  ), b = (
    /*getSelectedFilterType*/
    ((q = (N = t[7]) == null ? void 0 : N.inputType) == null ? void 0 : q.type) === "select" && fa(t)
  ), O = (
    /*getSelectedFilterType*/
    ((K = (j = t[7]) == null ? void 0 : j.inputType) == null ? void 0 : K.type) === "datepicker" && da(t)
  ), w = (
    /*getSelectedFilterType*/
    ((R = (k = t[7]) == null ? void 0 : k.inputType) == null ? void 0 : R.type) === "timepicker" && ha(t)
  );
  d = new us({
    props: {
      callback: (
        /*addFilter*/
        t[10]
      ),
      disabled: (
        /*addFilterDisabled*/
        t[8]
      ),
      $$slots: { default: [i_] },
      $$scope: { ctx: t }
    }
  });
  const y = (
    /*#slots*/
    t[14]["filter-controls"]
  ), v = Le(
    y,
    t,
    /*$$scope*/
    t[22],
    ua
  );
  return _ = new Yg({
    props: {
      chips: (
        /*activeFilters*/
        t[0]
      ),
      $$slots: {
        default: [
          r_,
          ({ chip: V }) => ({ 25: V }),
          ({ chip: V }) => V ? 33554432 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = x("div"), n = x("div"), i = x("div"), te(r.$$.fragment), a = oe(), D && D.c(), l = oe(), b && b.c(), o = oe(), O && O.c(), u = oe(), w && w.c(), c = oe(), f = x("div"), te(d.$$.fragment), h = oe(), v && v.c(), m = oe(), g = x("div"), p = oe(), A = x("div"), te(_.$$.fragment), P(i, "class", "filter-input-controls svelte-1tmo1p6"), P(f, "class", "filter-button-controls svelte-1tmo1p6"), P(n, "class", "input-section svelte-1tmo1p6"), P(g, "class", "separator svelte-1tmo1p6"), P(A, "class", "chip-section svelte-1tmo1p6"), P(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(V, ue) {
      B(V, e, ue), Z(e, n), Z(n, i), $(r, i, null), Z(i, a), D && D.m(i, null), Z(i, l), b && b.m(i, null), Z(i, o), O && O.m(i, null), Z(i, u), w && w.m(i, null), Z(n, c), Z(n, f), $(d, f, null), Z(f, h), v && v.m(f, null), Z(e, m), Z(e, g), Z(e, p), Z(e, A), $(_, A, null), S = !0;
    },
    p(V, ue) {
      var z, J, Ee, ye, He, ie, W, qe;
      const Ne = {};
      ue & /*disabled*/
      4 && (Ne.disabled = /*disabled*/
      V[2]), ue & /*selectFilterLabel*/
      16 && (Ne.label = /*selectFilterLabel*/
      V[4]), ue & /*convertTypeToSelection*/
      512 && (Ne.data = /*convertTypeToSelection*/
      V[9]), !s && ue & /*selectedFilterType*/
      64 && (s = !0, Ne.value = /*selectedFilterType*/
      V[6], pt(() => s = !1)), r.$set(Ne), /*getSelectedFilterType*/
      ((J = (z = V[7]) == null ? void 0 : z.inputType) == null ? void 0 : J.type) === "string" ? D ? (D.p(V, ue), ue & /*getSelectedFilterType*/
      128 && E(D, 1)) : (D = ca(V), D.c(), E(D, 1), D.m(i, l)) : D && (Ue(), L(D, 1, 1, () => {
        D = null;
      }), Be()), /*getSelectedFilterType*/
      ((ye = (Ee = V[7]) == null ? void 0 : Ee.inputType) == null ? void 0 : ye.type) === "select" ? b ? (b.p(V, ue), ue & /*getSelectedFilterType*/
      128 && E(b, 1)) : (b = fa(V), b.c(), E(b, 1), b.m(i, o)) : b && (Ue(), L(b, 1, 1, () => {
        b = null;
      }), Be()), /*getSelectedFilterType*/
      ((ie = (He = V[7]) == null ? void 0 : He.inputType) == null ? void 0 : ie.type) === "datepicker" ? O ? (O.p(V, ue), ue & /*getSelectedFilterType*/
      128 && E(O, 1)) : (O = da(V), O.c(), E(O, 1), O.m(i, u)) : O && (Ue(), L(O, 1, 1, () => {
        O = null;
      }), Be()), /*getSelectedFilterType*/
      ((qe = (W = V[7]) == null ? void 0 : W.inputType) == null ? void 0 : qe.type) === "timepicker" ? w ? (w.p(V, ue), ue & /*getSelectedFilterType*/
      128 && E(w, 1)) : (w = ha(V), w.c(), E(w, 1), w.m(i, null)) : w && (Ue(), L(w, 1, 1, () => {
        w = null;
      }), Be());
      const Ie = {};
      ue & /*addFilterDisabled*/
      256 && (Ie.disabled = /*addFilterDisabled*/
      V[8]), ue & /*$$scope, addFilterLabel*/
      4194312 && (Ie.$$scope = { dirty: ue, ctx: V }), d.$set(Ie), v && v.p && (!S || ue & /*$$scope*/
      4194304) && Re(
        v,
        y,
        V,
        /*$$scope*/
        V[22],
        S ? Oe(
          y,
          /*$$scope*/
          V[22],
          ue,
          n_
        ) : Me(
          /*$$scope*/
          V[22]
        ),
        ua
      );
      const Xe = {};
      ue & /*activeFilters*/
      1 && (Xe.chips = /*activeFilters*/
      V[0]), ue & /*$$scope, chip*/
      37748736 && (Xe.$$scope = { dirty: ue, ctx: V }), _.$set(Xe);
    },
    i(V) {
      S || (E(r.$$.fragment, V), E(D), E(b), E(O), E(w), E(d.$$.fragment, V), E(v, V), E(_.$$.fragment, V), S = !0);
    },
    o(V) {
      L(r.$$.fragment, V), L(D), L(b), L(O), L(w), L(d.$$.fragment, V), L(v, V), L(_.$$.fragment, V), S = !1;
    },
    d(V) {
      V && U(e), ee(r), D && D.d(), b && b.d(), O && O.d(), w && w.d(), ee(d), v && v.d(V), ee(_);
    }
  };
}
function l_(t) {
  let e, n;
  return e = new Qo({
    props: {
      $$slots: { default: [s_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, activeFilters, addFilterDisabled, addFilterLabel, inputValue, getSelectedFilterType, selectedOptionIndex, disabled, selectFilterLabel, convertTypeToSelection, selectedFilterType*/
      4195327 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function a_(t, e, n) {
  let i, r, s, { $$slots: a = {}, $$scope: l } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: f = -1 } = e, { disabled: d = !1 } = e, { addFilterLabel: h = "Add Filter" } = e, { selectFilterLabel: m = "Filter Types" } = e, g = "", p = "";
  function A() {
    var I;
    if (!p || !g) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s) {
      console.warn("Filter type not found");
      return;
    }
    let T = [
      ...u,
      {
        id: nu(),
        key: s.label.toLowerCase(),
        value: g,
        operation: "=",
        text: `${p}: ${c && (!((I = s.inputType.options) === null || I === void 0) && I.length) ? s.inputType.options[f].label : g}`,
        disabled: !1
      }
    ];
    n(0, u = T), C(), S();
  }
  function _(I) {
    setTimeout(
      () => {
        n(0, u = u.filter((T) => T.id !== I)), C();
      },
      0
    );
  }
  function S() {
    n(5, g = ""), n(6, p = void 0);
  }
  function C() {
    const I = [...u];
    I.find((T) => T.key === "uuid") ? I.filter((T) => T.key !== "uuid").forEach((T) => {
      T.disabled = !0;
    }) : I.forEach((T) => {
      T.disabled = !1;
    }), n(0, u = I);
  }
  function M(I) {
    p = I, n(6, p);
  }
  function D(I) {
    g = I, n(5, g);
  }
  function b(I) {
    g = I, n(5, g);
  }
  function O(I) {
    f = I, n(1, f);
  }
  function w(I) {
    g = I, n(5, g);
  }
  function y(I) {
    g = I, n(5, g);
  }
  const v = (I) => _(I.id);
  return t.$$set = (I) => {
    "filterTypes" in I && n(12, o = I.filterTypes), "activeFilters" in I && n(0, u = I.activeFilters), "useOptionLabelInChipText" in I && n(13, c = I.useOptionLabelInChipText), "selectedOptionIndex" in I && n(1, f = I.selectedOptionIndex), "disabled" in I && n(2, d = I.disabled), "addFilterLabel" in I && n(3, h = I.addFilterLabel), "selectFilterLabel" in I && n(4, m = I.selectFilterLabel), "$$scope" in I && n(22, l = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*filterTypes*/
    4096 && n(9, i = o.map((I) => ({ value: I.label, label: I.label }))), t.$$.dirty & /*selectedFilterType, inputValue*/
    96 && n(8, r = !p || !g), t.$$.dirty & /*filterTypes, selectedFilterType*/
    4160 && n(7, s = o.find((I) => I.label === p));
  }, [
    u,
    f,
    d,
    h,
    m,
    g,
    p,
    s,
    r,
    i,
    A,
    _,
    o,
    c,
    a,
    M,
    D,
    b,
    O,
    w,
    y,
    v,
    l
  ];
}
class o_ extends ke {
  constructor(e) {
    super(), De(this, e, a_, l_, ve, {
      filterTypes: 12,
      activeFilters: 0,
      useOptionLabelInChipText: 13,
      selectedOptionIndex: 1,
      disabled: 2,
      addFilterLabel: 3,
      selectFilterLabel: 4
    });
  }
}
function ma(t) {
  let e, n, i, r, s, a;
  return {
    c() {
      e = x("div"), n = x("div"), i = x("div"), r = oe(), s = x("span"), a = ut(
        /*message*/
        t[1]
      ), P(i, "class", "loading-spinner svelte-quxj5m"), P(s, "class", "loading-message svelte-quxj5m"), P(n, "class", "loading-spinner-container svelte-quxj5m"), P(e, "class", "overlay svelte-quxj5m");
    },
    m(l, o) {
      B(l, e, o), Z(e, n), Z(n, i), Z(n, r), Z(n, s), Z(s, a);
    },
    p(l, o) {
      o & /*message*/
      2 && dt(
        a,
        /*message*/
        l[1]
      );
    },
    d(l) {
      l && U(e);
    }
  };
}
function u_(t) {
  let e, n = !/*loadingDone*/
  t[0] && ma(t);
  return {
    c() {
      e = x("div"), n && n.c();
    },
    m(i, r) {
      B(i, e, r), n && n.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? n && (n.d(1), n = null) : n ? n.p(i, r) : (n = ma(i), n.c(), n.m(e, null));
    },
    i: Qe,
    o: Qe,
    d(i) {
      i && U(e), n && n.d();
    }
  };
}
function c_(t, e, n) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return t.$$set = (s) => {
    "loadingDone" in s && n(0, i = s.loadingDone), "message" in s && n(1, r = s.message);
  }, [i, r];
}
class f_ extends ke {
  constructor(e) {
    super(), De(this, e, c_, u_, ve, { loadingDone: 0, message: 1 });
  }
}
function d_(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = x("div"), n = x("input"), i = oe(), r = x("label"), s = ut(
        /*label*/
        t[1]
      ), a = oe(), l = x("span"), P(n, "type", "datetime-local"), P(n, "id", "datetime-picker"), P(n, "class", "custom-text-field__input svelte-ar6zwk"), P(n, "placeholder", ""), P(r, "for", "datetime-picker"), P(r, "class", "custom-floating-label svelte-ar6zwk"), P(l, "class", "custom-line svelte-ar6zwk"), P(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      B(c, e, f), Z(e, n), xt(
        n,
        /*value*/
        t[0]
      ), Z(e, i), Z(e, r), Z(r, s), Z(e, a), Z(e, l), o || (u = [
        he(
          n,
          "input",
          /*input_input_handler*/
          t[3]
        ),
        he(
          n,
          "change",
          /*handleDateTimeChange*/
          t[2]
        )
      ], o = !0);
    },
    p(c, [f]) {
      f & /*value*/
      1 && xt(
        n,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && dt(
        s,
        /*label*/
        c[1]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && U(e), o = !1, Ze(u);
    }
  };
}
function h_(t, e, n) {
  let { label: i = "" } = e, { value: r = "" } = e;
  function s(l) {
    n(0, r = l.target.value);
  }
  function a() {
    r = this.value, n(0, r);
  }
  return t.$$set = (l) => {
    "label" in l && n(1, i = l.label), "value" in l && n(0, r = l.value);
  }, [r, i, s, a];
}
class m_ extends ke {
  constructor(e) {
    super(), De(this, e, h_, d_, ve, { label: 1, value: 0 });
  }
}
const p_ = (t) => ({}), pa = (t) => ({});
function g_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[2].content
  ), o = Le(
    l,
    t,
    /*$$scope*/
    t[3],
    pa
  );
  return {
    c() {
      e = x("details"), n = x("summary"), i = ut(
        /*title*/
        t[0]
      ), r = oe(), s = x("div"), o && o.c(), P(n, "class", "svelte-l05fgd"), P(s, "class", "expandable-content svelte-l05fgd"), e.open = /*open*/
      t[1], P(e, "class", "svelte-l05fgd");
    },
    m(u, c) {
      B(u, e, c), Z(e, n), Z(n, i), Z(e, r), Z(e, s), o && o.m(s, null), a = !0;
    },
    p(u, c) {
      (!a || c & /*title*/
      1) && dt(
        i,
        /*title*/
        u[0]
      ), o && o.p && (!a || c & /*$$scope*/
      8) && Re(
        o,
        l,
        u,
        /*$$scope*/
        u[3],
        a ? Oe(
          l,
          /*$$scope*/
          u[3],
          c,
          p_
        ) : Me(
          /*$$scope*/
          u[3]
        ),
        pa
      ), (!a || c & /*open*/
      2) && (e.open = /*open*/
      u[1]);
    },
    i(u) {
      a || (E(o, u), a = !0);
    },
    o(u) {
      L(o, u), a = !1;
    },
    d(u) {
      u && U(e), o && o.d(u);
    }
  };
}
function b_(t) {
  let e, n;
  return e = new Qo({
    props: {
      $$slots: { default: [g_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, open, title*/
      11 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function __(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { title: s = "" } = e, { open: a = !1 } = e;
  return t.$$set = (l) => {
    "title" in l && n(0, s = l.title), "open" in l && n(1, a = l.open), "$$scope" in l && n(3, r = l.$$scope);
  }, [s, a, i, r];
}
class v_ extends ke {
  constructor(e) {
    super(), De(this, e, __, b_, ve, { title: 0, open: 1 });
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
var Vt = {
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
}, li = {
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
var I_ = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vt;
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
      var n = this;
      this.determinate = !this.adapter.hasClass(Vt.INDETERMINATE_CLASS), this.adapter.addClass(Vt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, s;
        if (!n.determinate)
          try {
            for (var a = Lt(i), l = a.next(); !l.done; l = a.next()) {
              var o = l.value;
              o.contentRect && n.calculateAndSetDimensions(o.contentRect.width);
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              l && !l.done && (s = a.return) && s.call(a);
            } finally {
              if (r)
                throw r.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(Vt.INDETERMINATE_CLASS), this.adapter.setAttribute(Xt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Xt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Xt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Vt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Xt.ARIA_VALUENOW), this.adapter.removeAttribute(Xt.ARIA_VALUEMAX), this.adapter.removeAttribute(Xt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Xt.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(Vt.CLOSED_CLASS), this.adapter.removeClass(Vt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Xt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(Vt.CLOSED_CLASS), this.adapter.setAttribute(Xt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(Vt.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Vt.CLOSED_CLASS) && this.adapter.addClass(Vt.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(Vt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Vt.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var i = "scaleX(" + n + ")", r = typeof window < "u" ? Rp(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(n) {
      var i = n * 100 + "%";
      this.adapter.setBufferBarStyle(Xt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var i = n * li.PRIMARY_HALF, r = n * li.PRIMARY_FULL, s = n * li.SECONDARY_QUARTER, a = n * li.SECONDARY_HALF, l = n * li.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, e;
  }(Ot)
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
var an = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ga = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Sn = {
  ARIA_SELECTED: ga.ARIA_SELECTED,
  ARIA_SORT: ga.ARIA_SORT
}, Gt;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(Gt || (Gt = {}));
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
var A_ = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
      return Ya(this, void 0, void 0, function() {
        return $r(this, function(n) {
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
        var r = this.adapter.getRowIdAtIndex(i), s = !1;
        r && n.indexOf(r) >= 0 && (s = !0), this.adapter.setRowCheckboxCheckedAtIndex(i, s), this.selectRowAtIndex(i, s);
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
        var s = this.adapter.getRowIdAtIndex(i);
        this.adapter.notifyRowSelectionChanged({ rowId: s, rowIndex: i, selected: r });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var i = n.columnId, r = n.columnIndex, s = n.headerCell, a = 0; a < this.adapter.getHeaderCellCount(); a++)
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, an.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, an.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, Sn.ARIA_SORT, Gt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Gt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, an.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(r, Sn.ARIA_SORT), o = Gt.NONE;
      l === Gt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, an.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Sn.ARIA_SORT, Gt.DESCENDING), o = Gt.DESCENDING) : l === Gt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, an.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Sn.ARIA_SORT, Gt.ASCENDING), o = Gt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, Sn.ARIA_SORT, Gt.ASCENDING), o = Gt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
        columnId: i,
        columnIndex: r,
        headerCell: s,
        sortValue: o
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
      }), this.adapter.addClass(an.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(an.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, i) {
      i ? (this.adapter.addClassAtRowIndex(n, an.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Sn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, an.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Sn.ARIA_SELECTED, "false"));
    }, e;
  }(Ot)
);
const E_ = (t) => ({}), ba = (t) => ({}), y_ = (t) => ({}), _a = (t) => ({});
function va(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[36].progress
  ), l = Le(
    a,
    t,
    /*$$scope*/
    t[35],
    _a
  );
  return {
    c() {
      e = x("div"), n = x("div"), i = oe(), l && l.c(), P(n, "class", "mdc-data-table__scrim"), P(e, "class", "mdc-data-table__progress-indicator"), P(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        t[13]
      ).map(Ia).join(" "));
    },
    m(o, u) {
      B(o, e, u), Z(e, n), Z(e, i), l && l.m(e, null), s = !0;
    },
    p(o, u) {
      l && l.p && (!s || u[1] & /*$$scope*/
      16) && Re(
        l,
        a,
        o,
        /*$$scope*/
        o[35],
        s ? Oe(
          a,
          /*$$scope*/
          o[35],
          u,
          y_
        ) : Me(
          /*$$scope*/
          o[35]
        ),
        _a
      ), (!s || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Ia).join(" "))) && P(e, "style", r);
    },
    i(o) {
      s || (E(l, o), s = !0);
    },
    o(o) {
      L(l, o), s = !1;
    },
    d(o) {
      o && U(e), l && l.d(o);
    }
  };
}
function C_(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m;
  const g = (
    /*#slots*/
    t[36].default
  ), p = Le(
    g,
    t,
    /*$$scope*/
    t[35],
    null
  );
  let A = [
    {
      class: r = re({
        [
          /*table$class*/
          t[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ge(
      /*$$restProps*/
      t[25],
      "table$"
    )
  ], _ = {};
  for (let y = 0; y < A.length; y += 1)
    _ = X(_, A[y]);
  let S = [
    {
      class: a = re({
        [
          /*container$class*/
          t[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ge(
      /*$$restProps*/
      t[25],
      "container$"
    )
  ], C = {};
  for (let y = 0; y < S.length; y += 1)
    C = X(C, S[y]);
  let M = (
    /*$$slots*/
    t[24].progress && va(t)
  );
  const D = (
    /*#slots*/
    t[36].paginate
  ), b = Le(
    D,
    t,
    /*$$scope*/
    t[35],
    ba
  );
  let O = [
    {
      class: c = re({
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
    $t(
      /*$$restProps*/
      t[25],
      ["container$", "table$"]
    )
  ], w = {};
  for (let y = 0; y < O.length; y += 1)
    w = X(w, O[y]);
  return {
    c() {
      e = x("div"), n = x("div"), i = x("table"), p && p.c(), o = oe(), M && M.c(), u = oe(), b && b.c(), fe(i, _), fe(n, C), fe(e, w);
    },
    m(y, v) {
      B(y, e, v), Z(e, n), Z(n, i), p && p.m(i, null), t[37](n), Z(e, o), M && M.m(e, null), Z(e, u), b && b.m(e, null), t[38](e), d = !0, h || (m = [
        de(s = xe.call(
          null,
          i,
          /*table$use*/
          t[5]
        )),
        de(l = xe.call(
          null,
          n,
          /*container$use*/
          t[3]
        )),
        de(f = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[15].call(null, e)
        ),
        he(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          t[39]
        ),
        he(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          t[19]
        ),
        he(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          t[40]
        ),
        he(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          t[20]
        ),
        he(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          t[41]
        ),
        he(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          t[42]
        ),
        he(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          t[22]
        ),
        he(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          t[23]
        ),
        he(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          t[21]
        )
      ], h = !0);
    },
    p(y, v) {
      p && p.p && (!d || v[1] & /*$$scope*/
      16) && Re(
        p,
        g,
        y,
        /*$$scope*/
        y[35],
        d ? Oe(
          g,
          /*$$scope*/
          y[35],
          v,
          null
        ) : Me(
          /*$$scope*/
          y[35]
        ),
        null
      ), fe(i, _ = me(A, [
        (!d || v[0] & /*table$class*/
        64 && r !== (r = re({
          [
            /*table$class*/
            y[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        v[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          y[25],
          "table$"
        )
      ])), s && ge(s.update) && v[0] & /*table$use*/
      32 && s.update.call(
        null,
        /*table$use*/
        y[5]
      ), fe(n, C = me(S, [
        (!d || v[0] & /*container$class*/
        16 && a !== (a = re({
          [
            /*container$class*/
            y[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        v[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          y[25],
          "container$"
        )
      ])), l && ge(l.update) && v[0] & /*container$use*/
      8 && l.update.call(
        null,
        /*container$use*/
        y[3]
      ), /*$$slots*/
      y[24].progress ? M ? (M.p(y, v), v[0] & /*$$slots*/
      16777216 && E(M, 1)) : (M = va(y), M.c(), E(M, 1), M.m(e, u)) : M && (Ue(), L(M, 1, 1, () => {
        M = null;
      }), Be()), b && b.p && (!d || v[1] & /*$$scope*/
      16) && Re(
        b,
        D,
        y,
        /*$$scope*/
        y[35],
        d ? Oe(
          D,
          /*$$scope*/
          y[35],
          v,
          E_
        ) : Me(
          /*$$scope*/
          y[35]
        ),
        ba
      ), fe(e, w = me(O, [
        (!d || v[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = re({
          [
            /*className*/
            y[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            y[2]
          ),
          .../*internalClasses*/
          y[12]
        }))) && { class: c },
        v[0] & /*$$restProps*/
        33554432 && $t(
          /*$$restProps*/
          y[25],
          ["container$", "table$"]
        )
      ])), f && ge(f.update) && v[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        y[0]
      );
    },
    i(y) {
      d || (E(p, y), E(M), E(b, y), d = !0);
    },
    o(y) {
      L(p, y), L(M), L(b, y), d = !1;
    },
    d(y) {
      y && U(e), p && p.d(y), t[37](null), M && M.d(), b && b.d(y), t[38](null), h = !1, Ze(m);
    }
  };
}
const Ia = ([t, e]) => `${t}: ${e};`;
function S_(t, e, n) {
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
  let r = pe(e, i), s, a, l, { $$slots: o = {}, $$scope: u } = e;
  const c = Yr(o), { closest: f } = Vi, d = rt($e());
  let { use: h = [] } = e, { class: m = "" } = e, { stickyHeader: g = !1 } = e, { sortable: p = !1 } = e, { sort: A = null } = e, { sortDirection: _ = "ascending" } = e, { sortAscendingAriaLabel: S = "sorted, ascending" } = e, { sortDescendingAriaLabel: C = "sorted, descending" } = e, { container$use: M = [] } = e, { container$class: D = "" } = e, { table$use: b = [] } = e, { table$class: O = "" } = e, w, y, v, I, T, N = {}, q = { height: "auto", top: "initial" }, j = ze("SMUI:addLayoutListener"), K, k = !1, R = Tt(!1);
  st(t, R, (G) => n(34, s = G));
  let V = Tt(A);
  st(t, V, (G) => n(45, l = G));
  let ue = Tt(_);
  st(t, ue, (G) => n(44, a = G)), We("SMUI:checkbox:context", "data-table"), We("SMUI:linear-progress:context", "data-table"), We("SMUI:linear-progress:closed", R), We("SMUI:data-table:sortable", p), We("SMUI:data-table:sort", V), We("SMUI:data-table:sortDirection", ue), We("SMUI:data-table:sortAscendingAriaLabel", S), We("SMUI:data-table:sortDescendingAriaLabel", C), j && (K = j(qe));
  let Ne;
  ct(() => (n(7, y = new A_({
    addClass: J,
    removeClass: Ee,
    getHeaderCellElements: () => {
      var G;
      return (G = I == null ? void 0 : I.cells.map((se) => se.element)) !== null && G !== void 0 ? G : [];
    },
    getHeaderCellCount: () => {
      var G;
      return (G = I == null ? void 0 : I.cells.length) !== null && G !== void 0 ? G : 0;
    },
    getAttributeByHeaderCellIndex: (G, se) => {
      var ne;
      return (ne = I == null ? void 0 : I.orderedCells[G].getAttr(se)) !== null && ne !== void 0 ? ne : null;
    },
    setAttributeByHeaderCellIndex: (G, se, ne) => {
      I == null || I.orderedCells[G].addAttr(se, ne);
    },
    setClassNameByHeaderCellIndex: (G, se) => {
      I == null || I.orderedCells[G].addClass(se);
    },
    removeClassNameByHeaderCellIndex: (G, se) => {
      I == null || I.orderedCells[G].removeClass(se);
    },
    notifySortAction: (G) => {
      n(26, A = G.columnId), n(27, _ = G.sortValue), _e(Ve(), "SMUIDataTable:sorted", G, void 0, !0);
    },
    getTableContainerHeight: () => v.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const G = Ve().querySelector(".mdc-data-table__header-row");
      if (!G)
        throw new Error("MDCDataTable: Table header element not found.");
      return G.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (G) => {
      n(13, q = G);
    },
    addClassAtRowIndex: (G, se) => {
      T == null || T.orderedRows[G].addClass(se);
    },
    getRowCount: () => {
      var G;
      return (G = T == null ? void 0 : T.rows.length) !== null && G !== void 0 ? G : 0;
    },
    getRowElements: () => {
      var G;
      return (G = T == null ? void 0 : T.rows.map((se) => se.element)) !== null && G !== void 0 ? G : [];
    },
    getRowIdAtIndex: (G) => {
      var se;
      return (se = T == null ? void 0 : T.orderedRows[G].rowId) !== null && se !== void 0 ? se : null;
    },
    getRowIndexByChildElement: (G) => {
      var se;
      return (se = T == null ? void 0 : T.orderedRows.map((ne) => ne.element).indexOf(f(G, ".mdc-data-table__row"))) !== null && se !== void 0 ? se : -1;
    },
    getSelectedRowCount: () => {
      var G;
      return (G = T == null ? void 0 : T.rows.filter((se) => se.selected).length) !== null && G !== void 0 ? G : 0;
    },
    isCheckboxAtRowIndexChecked: (G) => {
      const se = T == null ? void 0 : T.orderedRows[G].checkbox;
      return se ? se.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const G = I == null ? void 0 : I.checkbox;
      return G ? G.checked : !1;
    },
    isRowsSelectable: () => !!Ve().querySelector(".mdc-data-table__row-checkbox") || !!Ve().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (G) => {
      const se = T == null ? void 0 : T.orderedRows[G.rowIndex];
      se && _e(
        Ve(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: se.element,
          rowId: se.rowId,
          rowIndex: G.rowIndex,
          selected: G.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      ye(!1), _e(Ve(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      ye(!1), _e(Ve(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (G) => {
      _e(Ve(), "SMUIDataTable:rowClick", G, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (G, se) => {
      T == null || T.orderedRows[G].removeClass(se);
    },
    setAttributeAtRowIndex: (G, se, ne) => {
      T == null || T.orderedRows[G].addAttr(se, ne);
    },
    setHeaderRowCheckboxChecked: (G) => {
      const se = I == null ? void 0 : I.checkbox;
      se && (se.checked = G);
    },
    setHeaderRowCheckboxIndeterminate: ye,
    setRowCheckboxCheckedAtIndex: (G, se) => {
      const ne = T == null ? void 0 : T.orderedRows[G].checkbox;
      ne && (ne.checked = se);
    },
    setSortStatusLabelByHeaderCellIndex: (G, se) => {
    }
    // Handled automatically.
  })), y.init(), y.layout(), n(14, k = !0), () => {
    y.destroy();
  })), en(() => {
    K && K();
  });
  function Ie(G) {
    n(10, I = G.detail);
  }
  function Xe(G) {
    n(11, T = G.detail);
  }
  function z(G) {
    y && y.handleRowCheckboxChange(G);
  }
  function J(G) {
    N[G] || n(12, N[G] = !0, N);
  }
  function Ee(G) {
    (!(G in N) || N[G]) && n(12, N[G] = !1, N);
  }
  function ye(G) {
    const se = I == null ? void 0 : I.checkbox;
    se && (se.indeterminate = G);
  }
  function He(G) {
    if (!y || !G.detail.target)
      return;
    const se = f(G.detail.target, ".mdc-data-table__header-cell--with-sort");
    se && W(se);
  }
  function ie(G) {
    if (!y || !G.detail.target)
      return;
    const se = f(G.detail.target, ".mdc-data-table__row");
    se && y && y.handleRowClick({ rowId: G.detail.rowId, row: se });
  }
  function W(G) {
    var se, ne;
    const Ke = (se = I == null ? void 0 : I.orderedCells) !== null && se !== void 0 ? se : [], ht = Ke.map((et) => et.element).indexOf(G);
    if (ht === -1)
      return;
    const ft = (ne = Ke[ht].columnId) !== null && ne !== void 0 ? ne : null;
    y.handleSortAction({ columnId: ft, columnIndex: ht, headerCell: G });
  }
  function qe() {
    return y.layout();
  }
  function Ve() {
    return w;
  }
  function St(G) {
    le[G ? "unshift" : "push"](() => {
      v = G, n(9, v);
    });
  }
  function Q(G) {
    le[G ? "unshift" : "push"](() => {
      w = G, n(8, w);
    });
  }
  const Ce = () => y && k && y.layout(), je = () => n(10, I = void 0), Fe = () => n(11, T = void 0), Rt = () => y && y.handleHeaderRowCheckboxChange();
  return t.$$set = (G) => {
    e = X(X({}, e), it(G)), n(25, r = pe(e, i)), "use" in G && n(0, h = G.use), "class" in G && n(1, m = G.class), "stickyHeader" in G && n(2, g = G.stickyHeader), "sortable" in G && n(28, p = G.sortable), "sort" in G && n(26, A = G.sort), "sortDirection" in G && n(27, _ = G.sortDirection), "sortAscendingAriaLabel" in G && n(29, S = G.sortAscendingAriaLabel), "sortDescendingAriaLabel" in G && n(30, C = G.sortDescendingAriaLabel), "container$use" in G && n(3, M = G.container$use), "container$class" in G && n(4, D = G.container$class), "table$use" in G && n(5, b = G.table$use), "table$class" in G && n(6, O = G.table$class), "$$scope" in G && n(35, u = G.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sort*/
    67108864 && jt(V, l = A, l), t.$$.dirty[0] & /*sortDirection*/
    134217728 && jt(ue, a = _, a), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && y && Ne !== s && (n(33, Ne = s), s ? y.hideProgress() : y.showProgress());
  }, [
    h,
    m,
    g,
    M,
    D,
    b,
    O,
    y,
    w,
    v,
    I,
    T,
    N,
    q,
    k,
    d,
    R,
    V,
    ue,
    Ie,
    Xe,
    z,
    He,
    ie,
    c,
    r,
    A,
    _,
    p,
    S,
    C,
    qe,
    Ve,
    Ne,
    s,
    u,
    o,
    St,
    Q,
    Ce,
    je,
    Fe,
    Rt
  ];
}
class T_ extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      S_,
      C_,
      ve,
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
function L_(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[10].default
  ), l = Le(
    a,
    t,
    /*$$scope*/
    t[9],
    null
  );
  let o = [
    /*$$restProps*/
    t[7]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = X(u, o[c]);
  return {
    c() {
      e = x("thead"), l && l.c(), fe(e, u);
    },
    m(c, f) {
      B(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        de(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        he(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[4]
        ),
        he(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[12]
        ),
        he(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          t[5]
        ),
        he(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          t[6]
        )
      ], r = !0);
    },
    p(c, [f]) {
      l && l.p && (!i || f & /*$$scope*/
      512) && Re(
        l,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? Oe(
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
      ), fe(e, u = me(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (E(l, c), i = !0);
    },
    o(c) {
      L(l, c), i = !1;
    },
    d(c) {
      c && U(e), l && l.d(c), t[11](null), r = !1, Ze(s);
    }
  };
}
function O_(t, e, n) {
  const i = ["use", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  We("SMUI:data-table:row:header", !0), ct(() => {
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
    return _e(A(), "SMUIDataTableHeader:mount", C), () => {
      _e(A(), "SMUIDataTableHeader:unmount", C);
    };
  });
  function h(C) {
    n(2, c = C.detail);
  }
  function m(C) {
    f.push(C.detail), d.set(C.detail.element, C.detail), C.stopPropagation();
  }
  function g(C) {
    const M = f.indexOf(C.detail);
    M !== -1 && (f.splice(M, 1), f = f), d.delete(C.detail.element), C.stopPropagation();
  }
  function p() {
    return [...A().querySelectorAll(".mdc-data-table__header-cell")].map((C) => d.get(C)).filter((C) => C && C._smui_data_table_header_cell_accessor);
  }
  function A() {
    return u;
  }
  function _(C) {
    le[C ? "unshift" : "push"](() => {
      u = C, n(1, u);
    });
  }
  const S = () => n(2, c = void 0);
  return t.$$set = (C) => {
    e = X(X({}, e), it(C)), n(7, r = pe(e, i)), "use" in C && n(0, o = C.use), "$$scope" in C && n(9, a = C.$$scope);
  }, [
    o,
    u,
    c,
    l,
    h,
    m,
    g,
    r,
    A,
    a,
    s,
    _,
    S
  ];
}
class R_ extends ke {
  constructor(e) {
    super(), De(this, e, O_, L_, ve, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function M_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[9].default
  ), o = Le(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = re({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__content": !0
      })
    },
    /*$$restProps*/
    t[6]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = X(c, u[f]);
  return {
    c() {
      e = x("tbody"), o && o.c(), fe(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[10](e), r = !0, s || (a = [
        de(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        he(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          t[4]
        ),
        he(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          t[5]
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && Re(
        o,
        l,
        f,
        /*$$scope*/
        f[8],
        r ? Oe(
          l,
          /*$$scope*/
          f[8],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[8]
        ),
        null
      ), fe(e, c = me(u, [
        (!r || d & /*className*/
        2 && n !== (n = re({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: n },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), i && ge(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (E(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[10](null), s = !1, Ze(a);
    }
  };
}
function D_(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  We("SMUI:data-table:row:header", !1), ct(() => {
    const _ = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return g();
      }
    };
    return _e(p(), "SMUIDataTableBody:mount", _), () => {
      _e(p(), "SMUIDataTableBody:unmount", _);
    };
  });
  function h(_) {
    f.push(_.detail), d.set(_.detail.element, _.detail), _.stopPropagation();
  }
  function m(_) {
    const S = f.indexOf(_.detail);
    S !== -1 && (f.splice(S, 1), f = f), d.delete(_.detail.element), _.stopPropagation();
  }
  function g() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((_) => d.get(_)).filter((_) => _ && _._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function A(_) {
    le[_ ? "unshift" : "push"](() => {
      c = _, n(2, c);
    });
  }
  return t.$$set = (_) => {
    e = X(X({}, e), it(_)), n(6, r = pe(e, i)), "use" in _ && n(0, o = _.use), "class" in _ && n(1, u = _.class), "$$scope" in _ && n(8, a = _.$$scope);
  }, [
    o,
    u,
    c,
    l,
    h,
    m,
    r,
    p,
    a,
    s,
    A
  ];
}
class k_ extends ke {
  constructor(e) {
    super(), De(this, e, D_, M_, ve, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function N_(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[15].default
  ), u = Le(
    o,
    t,
    /*$$scope*/
    t[14],
    null
  );
  let c = [
    {
      class: n = re({
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
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = X(f, c[d]);
  return {
    c() {
      e = x("tr"), u && u.c(), fe(e, f);
    },
    m(d, h) {
      B(d, e, h), u && u.m(e, null), t[16](e), s = !0, a || (l = [
        de(r = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[6].call(null, e)
        ),
        he(
          e,
          "click",
          /*click_handler*/
          t[17]
        ),
        he(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[8]
        ),
        he(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[18]
        )
      ], a = !0);
    },
    p(d, [h]) {
      u && u.p && (!s || h & /*$$scope*/
      16384) && Re(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        s ? Oe(
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
      ), fe(e, f = me(c, [
        (!s || h & /*className, checkbox, internalClasses*/
        26 && n !== (n = re({
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
        (!s || h & /*checkbox*/
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
      ])), r && ge(r.update) && h & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      s || (E(u, d), s = !0);
    },
    o(d) {
      L(u, d), s = !1;
    },
    d(d) {
      d && U(e), u && u.d(d), t[16](null), a = !1, Ze(l);
    }
  };
}
let P_ = 0;
function H_(t, e, n) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + P_++ } = e, f, d, h = {}, m = {}, g = ze("SMUI:data-table:row:header");
  ct(() => {
    const v = g ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return b();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
      },
      get selected() {
        var I;
        return (I = d && d.checked) !== null && I !== void 0 ? I : !1;
      },
      addClass: A,
      removeClass: _,
      getAttr: S,
      addAttr: C
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return b();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var I;
        return (I = d && d.checked) !== null && I !== void 0 ? I : !1;
      },
      addClass: A,
      removeClass: _,
      getAttr: S,
      addAttr: C
    };
    return _e(b(), "SMUIDataTableRow:mount", v), () => {
      _e(b(), "SMUIDataTableRow:unmount", v);
    };
  });
  function p(v) {
    n(3, d = v.detail);
  }
  function A(v) {
    h[v] || n(4, h[v] = !0, h);
  }
  function _(v) {
    (!(v in h) || h[v]) && n(4, h[v] = !1, h);
  }
  function S(v) {
    var I;
    return v in m ? (I = m[v]) !== null && I !== void 0 ? I : null : b().getAttribute(v);
  }
  function C(v, I) {
    m[v] !== I && n(5, m[v] = I, m);
  }
  function M(v) {
    _e(b(), "SMUIDataTableHeader:click", v);
  }
  function D(v) {
    _e(b(), "SMUIDataTableRow:click", { rowId: c, target: v.target });
  }
  function b() {
    return f;
  }
  function O(v) {
    le[v ? "unshift" : "push"](() => {
      f = v, n(2, f);
    });
  }
  const w = (v) => g ? M(v) : D(v), y = () => n(3, d = void 0);
  return t.$$set = (v) => {
    e = X(X({}, e), it(v)), n(11, r = pe(e, i)), "use" in v && n(0, o = v.use), "class" in v && n(1, u = v.class), "rowId" in v && n(12, c = v.rowId), "$$scope" in v && n(14, a = v.$$scope);
  }, [
    o,
    u,
    f,
    d,
    h,
    m,
    l,
    g,
    p,
    M,
    D,
    r,
    c,
    b,
    a,
    s,
    O,
    w,
    y
  ];
}
class iu extends ke {
  constructor(e) {
    super(), De(this, e, H_, N_, ve, {
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
function F_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[22].default
  ), o = Le(
    l,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let u = [
    {
      class: n = re({
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = X(c, u[f]);
  return {
    c() {
      e = x("td"), o && o.c(), fe(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[25](e), r = !0, s || (a = [
        de(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        he(
          e,
          "change",
          /*change_handler_1*/
          t[26]
        )
      ], s = !0);
    },
    p(f, d) {
      o && o.p && (!r || d & /*$$scope*/
      2097152) && Re(
        o,
        l,
        f,
        /*$$scope*/
        f[21],
        r ? Oe(
          l,
          /*$$scope*/
          f[21],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[21]
        ),
        null
      ), fe(e, c = me(u, [
        (!r || d & /*className, numeric, checkbox, internalClasses*/
        142 && n !== (n = re({
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
        }))) && { class: n },
        d & /*internalAttrs*/
        256 && /*internalAttrs*/
        f[8],
        d & /*$$restProps*/
        524288 && /*$$restProps*/
        f[19]
      ])), i && ge(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (E(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[25](null), s = !1, Ze(a);
    }
  };
}
function w_(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [B_, U_], f = [];
  function d(g, p) {
    return (
      /*sortable*/
      g[5] ? 0 : 1
    );
  }
  n = d(t), i = f[n] = c[n](t);
  let h = [
    {
      class: r = re({
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
      "aria-sort": s = /*sortable*/
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
  ], m = {};
  for (let g = 0; g < h.length; g += 1)
    m = X(m, h[g]);
  return {
    c() {
      e = x("th"), i.c(), fe(e, m);
    },
    m(g, p) {
      B(g, e, p), f[n].m(e, null), t[23](e), l = !0, o || (u = [
        de(a = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        he(
          e,
          "change",
          /*change_handler*/
          t[24]
        )
      ], o = !0);
    },
    p(g, p) {
      let A = n;
      n = d(g), n === A ? f[n].p(g, p) : (Ue(), L(f[A], 1, 1, () => {
        f[A] = null;
      }), Be(), i = f[n], i ? i.p(g, p) : (i = f[n] = c[n](g), i.c()), E(i, 1), i.m(e, null)), fe(e, m = me(h, [
        (!l || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && r !== (r = re({
          [
            /*className*/
            g[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            g[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            g[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            g[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            g[5] && /*$sort*/
            g[9] === /*columnId*/
            g[4]
          ),
          .../*internalClasses*/
          g[7]
        }))) && { class: r },
        { role: "columnheader" },
        { scope: "col" },
        (!l || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          g[4]
        ) },
        (!l || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && s !== (s = /*sortable*/
        g[5] ? (
          /*$sort*/
          g[9] === /*columnId*/
          g[4] ? (
            /*$sortDirection*/
            g[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": s },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        g[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        g[19]
      ])), a && ge(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i(g) {
      l || (E(i), l = !0);
    },
    o(g) {
      L(i), l = !1;
    },
    d(g) {
      g && U(e), f[n].d(), t[23](null), o = !1, Ze(u);
    }
  };
}
function U_(t) {
  let e;
  const n = (
    /*#slots*/
    t[22].default
  ), i = Le(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      2097152) && Re(
        i,
        n,
        r,
        /*$$scope*/
        r[21],
        e ? Oe(
          n,
          /*$$scope*/
          r[21],
          s,
          null
        ) : Me(
          /*$$scope*/
          r[21]
        ),
        null
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function B_(t) {
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
  ), s, a, l;
  const o = (
    /*#slots*/
    t[22].default
  ), u = Le(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = x("div"), u && u.c(), n = oe(), i = x("div"), s = ut(r), P(i, "class", "mdc-data-table__sort-status-label"), P(i, "aria-hidden", "true"), P(i, "id", a = /*columnId*/
      t[4] + "-status-label"), P(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      B(c, e, f), u && u.m(e, null), Z(e, n), Z(e, i), Z(i, s), l = !0;
    },
    p(c, f) {
      u && u.p && (!l || f & /*$$scope*/
      2097152) && Re(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        l ? Oe(
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
      ), (!l || f & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && dt(s, r), (!l || f & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && P(i, "id", a);
    },
    i(c) {
      l || (E(u, c), l = !0);
    },
    o(c) {
      L(u, c), l = !1;
    },
    d(c) {
      c && U(e), u && u.d(c);
    }
  };
}
function V_(t) {
  let e, n, i, r;
  const s = [w_, F_], a = [];
  function l(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      n.p(o, u);
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
let G_ = 0;
function j_(t, e, n) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = pe(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt($e());
  let c = ze("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: h = !1 } = e, { checkbox: m = !1 } = e, { columnId: g = c ? "SMUI-data-table-column-" + G_++ : "SMUI-data-table-unused" } = e, { sortable: p = ze("SMUI:data-table:sortable") } = e, A, _ = {}, S = {}, C = ze("SMUI:data-table:sort");
  st(t, C, (R) => n(9, s = R));
  let M = ze("SMUI:data-table:sortDirection");
  st(t, M, (R) => n(10, a = R));
  let D = ze("SMUI:data-table:sortAscendingAriaLabel"), b = ze("SMUI:data-table:sortDescendingAriaLabel");
  p && (We("SMUI:label:context", "data-table:sortable-header-cell"), We("SMUI:icon-button:context", "data-table:sortable-header-cell"), We("SMUI:icon-button:aria-describedby", g + "-status-label")), ct(() => {
    const R = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return N();
      },
      get columnId() {
        return g;
      },
      addClass: O,
      removeClass: w,
      getAttr: y,
      addAttr: v
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return N();
      },
      get columnId() {
      },
      addClass: O,
      removeClass: w,
      getAttr: y,
      addAttr: v
    };
    return _e(N(), "SMUIDataTableCell:mount", R), () => {
      _e(N(), "SMUIDataTableCell:unmount", R);
    };
  });
  function O(R) {
    _[R] || n(7, _[R] = !0, _);
  }
  function w(R) {
    (!(R in _) || _[R]) && n(7, _[R] = !1, _);
  }
  function y(R) {
    var V;
    return R in S ? (V = S[R]) !== null && V !== void 0 ? V : null : N().getAttribute(R);
  }
  function v(R, V) {
    S[R] !== V && n(8, S[R] = V, S);
  }
  function I(R) {
    _e(N(), "SMUIDataTableHeaderCheckbox:change", R);
  }
  function T(R) {
    _e(N(), "SMUIDataTableBodyCheckbox:change", R);
  }
  function N() {
    return A;
  }
  function q(R) {
    le[R ? "unshift" : "push"](() => {
      A = R, n(6, A);
    });
  }
  const j = (R) => m && I(R);
  function K(R) {
    le[R ? "unshift" : "push"](() => {
      A = R, n(6, A);
    });
  }
  const k = (R) => m && T(R);
  return t.$$set = (R) => {
    e = X(X({}, e), it(R)), n(19, r = pe(e, i)), "use" in R && n(0, f = R.use), "class" in R && n(1, d = R.class), "numeric" in R && n(2, h = R.numeric), "checkbox" in R && n(3, m = R.checkbox), "columnId" in R && n(4, g = R.columnId), "sortable" in R && n(5, p = R.sortable), "$$scope" in R && n(21, o = R.$$scope);
  }, [
    f,
    d,
    h,
    m,
    g,
    p,
    A,
    _,
    S,
    s,
    a,
    u,
    c,
    C,
    M,
    D,
    b,
    I,
    T,
    r,
    N,
    o,
    l,
    q,
    j,
    K,
    k
  ];
}
class ms extends ke {
  constructor(e) {
    super(), De(this, e, j_, V_, ve, {
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
function q_(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, A, _, S, C, M = [
    {
      class: h = re({
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
      style: m = Object.entries(
        /*internalStyles*/
        t[10]
      ).map(ya).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": g = 0
    },
    {
      "aria-valuemax": p = 1
    },
    {
      "aria-valuenow": A = /*indeterminate*/
      t[3] ? void 0 : (
        /*progress*/
        t[5]
      )
    },
    /*internalAttrs*/
    t[9],
    /*$$restProps*/
    t[16]
  ], D = {};
  for (let b = 0; b < M.length; b += 1)
    D = X(D, M[b]);
  return {
    c() {
      e = x("div"), n = x("div"), i = x("div"), s = oe(), a = x("div"), l = oe(), o = x("div"), u = x("span"), f = oe(), d = x("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', P(i, "class", "mdc-linear-progress__buffer-bar"), P(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        t[11]
      ).map(Aa).join(" ")), P(a, "class", "mdc-linear-progress__buffer-dots"), P(n, "class", "mdc-linear-progress__buffer"), P(u, "class", "mdc-linear-progress__bar-inner"), P(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), P(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        t[12]
      ).map(Ea).join(" ")), P(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), fe(e, D);
    },
    m(b, O) {
      B(b, e, O), Z(e, n), Z(n, i), Z(n, s), Z(n, a), Z(e, l), Z(e, o), Z(o, u), Z(e, f), Z(e, d), t[19](e), S || (C = [
        de(_ = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        he(
          e,
          "transitionend",
          /*transitionend_handler*/
          t[20]
        )
      ], S = !0);
    },
    p(b, [O]) {
      O & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        b[11]
      ).map(Aa).join(" ")) && P(i, "style", r), O & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        b[12]
      ).map(Ea).join(" ")) && P(o, "style", c), fe(e, D = me(M, [
        O & /*className, indeterminate, closed, internalClasses*/
        282 && h !== (h = re({
          [
            /*className*/
            b[1]
          ]: !0,
          "mdc-linear-progress": !0,
          "mdc-linear-progress--indeterminate": (
            /*indeterminate*/
            b[3]
          ),
          "mdc-linear-progress--closed": (
            /*closed*/
            b[4]
          ),
          "mdc-data-table__linear-progress": (
            /*context*/
            b[14] === "data-table"
          ),
          .../*internalClasses*/
          b[8]
        })) && { class: h },
        O & /*internalStyles, style*/
        1028 && m !== (m = Object.entries(
          /*internalStyles*/
          b[10]
        ).map(ya).concat([
          /*style*/
          b[2]
        ]).join(" ")) && { style: m },
        { role: "progressbar" },
        {
          "aria-valuemin": g
        },
        {
          "aria-valuemax": p
        },
        O & /*indeterminate, progress*/
        40 && A !== (A = /*indeterminate*/
        b[3] ? void 0 : (
          /*progress*/
          b[5]
        )) && {
          "aria-valuenow": A
        },
        O & /*internalAttrs*/
        512 && /*internalAttrs*/
        b[9],
        O & /*$$restProps*/
        65536 && /*$$restProps*/
        b[16]
      ])), _ && ge(_.update) && O & /*use*/
      1 && _.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i: Qe,
    o: Qe,
    d(b) {
      b && U(e), t[19](null), S = !1, Ze(C);
    }
  };
}
const Aa = ([t, e]) => `${t}: ${e};`, Ea = ([t, e]) => `${t}: ${e};`, ya = ([t, e]) => `${t}: ${e};`;
function W_(t, e, n) {
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
  let r = pe(e, i), s;
  const a = rt($e());
  let { use: l = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: f = !1 } = e, { progress: d = 0 } = e, { buffer: h = void 0 } = e, m, g, p = {}, A = {}, _ = {}, S = {}, C = {}, M = ze("SMUI:linear-progress:context"), D = ze("SMUI:linear-progress:closed");
  st(t, D, (k) => n(21, s = k)), ct(() => (n(6, g = new I_({
    addClass: O,
    forceLayout: () => {
      q().getBoundingClientRect();
    },
    setBufferBarStyle: T,
    setPrimaryBarStyle: N,
    hasClass: b,
    removeAttribute: v,
    removeClass: w,
    setAttribute: y,
    setStyle: I,
    attachResizeObserver: (k) => {
      const R = window.ResizeObserver;
      if (R) {
        const V = new R(k);
        return V.observe(q()), V;
      }
      return null;
    },
    getWidth: () => q().offsetWidth
  })), g.init(), () => {
    g.destroy();
  }));
  function b(k) {
    return k in p ? p[k] : q().classList.contains(k);
  }
  function O(k) {
    p[k] || n(8, p[k] = !0, p);
  }
  function w(k) {
    (!(k in p) || p[k]) && n(8, p[k] = !1, p);
  }
  function y(k, R) {
    A[k] !== R && n(9, A[k] = R, A);
  }
  function v(k) {
    (!(k in A) || A[k] != null) && n(9, A[k] = void 0, A);
  }
  function I(k, R) {
    _[k] != R && (R === "" || R == null ? (delete _[k], n(10, _)) : n(10, _[k] = R, _));
  }
  function T(k, R) {
    S[k] != R && (R === "" || R == null ? (delete S[k], n(11, S)) : n(11, S[k] = R, S));
  }
  function N(k, R) {
    C[k] != R && (R === "" || R == null ? (delete C[k], n(12, C)) : n(12, C[k] = R, C));
  }
  function q() {
    return m;
  }
  function j(k) {
    le[k ? "unshift" : "push"](() => {
      m = k, n(7, m);
    });
  }
  const K = () => g && g.handleTransitionEnd();
  return t.$$set = (k) => {
    e = X(X({}, e), it(k)), n(16, r = pe(e, i)), "use" in k && n(0, l = k.use), "class" in k && n(1, o = k.class), "style" in k && n(2, u = k.style), "indeterminate" in k && n(3, c = k.indeterminate), "closed" in k && n(4, f = k.closed), "progress" in k && n(5, d = k.progress), "buffer" in k && n(17, h = k.buffer);
  }, t.$$.update = () => {
    t.$$.dirty & /*closed*/
    16 && D && jt(D, s = f, s), t.$$.dirty & /*instance, indeterminate*/
    72 && g && g.isDeterminate() !== !c && g.setDeterminate(!c), t.$$.dirty & /*instance, progress*/
    96 && g && g.getProgress() !== d && g.setProgress(d), t.$$.dirty & /*instance, buffer*/
    131136 && g && (h == null ? g.setBuffer(1) : g.setBuffer(h)), t.$$.dirty & /*instance, closed*/
    80 && g && (f ? g.close() : g.open());
  }, [
    l,
    o,
    u,
    c,
    f,
    d,
    g,
    m,
    p,
    A,
    _,
    S,
    C,
    a,
    M,
    D,
    r,
    h,
    q,
    j,
    K
  ];
}
class z_ extends ke {
  constructor(e) {
    super(), De(this, e, W_, q_, ve, {
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
function Ca(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Sa(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i;
}
function Ta(t, e, n) {
  const i = t.slice();
  return i[31] = e[n], i;
}
function La(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[34] = e, i[35] = n, i;
}
function Oa(t) {
  let e, n = (
    /*$sortColumn*/
    t[6] === /*col*/
    t[28].field && /*$sortDirection*/
    t[7] !== null && Ra(t)
  );
  return {
    c() {
      n && n.c(), e = Ye();
    },
    m(i, r) {
      n && n.m(i, r), B(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[6] === /*col*/
      i[28].field && /*$sortDirection*/
      i[7] !== null ? n ? n.p(i, r) : (n = Ra(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && U(e), n && n.d(i);
    }
  };
}
function Ra(t) {
  let e;
  function n(s, a) {
    if (
      /*$sortDirection*/
      s[7] === "asc"
    )
      return X_;
    if (
      /*$sortDirection*/
      s[7] === "desc"
    )
      return K_;
  }
  let i = n(t), r = i && i(t);
  return {
    c() {
      r && r.c(), e = Ye();
    },
    m(s, a) {
      r && r.m(s, a), B(s, e, a);
    },
    p(s, a) {
      i !== (i = n(s)) && (r && r.d(1), r = i && i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(s) {
      s && U(e), r && r.d(s);
    }
  };
}
function K_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M12 20l8-8H4l8 8z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 0 24 24"), P(e, "width", "16"), P(e, "height", "16"), P(e, "fill", "currentColor"), P(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    d(i) {
      i && U(e);
    }
  };
}
function X_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), P(n, "d", "M12 4l-8 8h16l-8-8z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 0 24 24"), P(e, "width", "16"), P(e, "height", "16"), P(e, "fill", "currentColor"), P(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    d(i) {
      i && U(e);
    }
  };
}
function Ma(t) {
  let e, n, i = (
    /*col*/
    t[28].filterType === "text" && Da(t)
  ), r = (
    /*col*/
    t[28].filterType === "number" && ka(t)
  );
  return {
    c() {
      i && i.c(), e = oe(), r && r.c(), n = Ye();
    },
    m(s, a) {
      i && i.m(s, a), B(s, e, a), r && r.m(s, a), B(s, n, a);
    },
    p(s, a) {
      /*col*/
      s[28].filterType === "text" ? i ? i.p(s, a) : (i = Da(s), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      s[28].filterType === "number" ? r ? r.p(s, a) : (r = ka(s), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null);
    },
    d(s) {
      s && (U(e), U(n)), i && i.d(s), r && r.d(s);
    }
  };
}
function Da(t) {
  let e, n, i, r;
  function s() {
    t[17].call(
      e,
      /*col*/
      t[28]
    );
  }
  return {
    c() {
      e = x("input"), P(e, "type", "text"), P(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), P(e, "class", "svelte-29x22x");
    },
    m(a, l) {
      B(a, e, l), xt(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      ), i || (r = [
        he(e, "input", s),
        he(
          e,
          "input",
          /*input_handler*/
          t[18]
        )
      ], i = !0);
    },
    p(a, l) {
      t = a, l[0] & /*searchInputLabel, columnDefs*/
      20 && n !== (n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`) && P(e, "placeholder", n), l[0] & /*filters, columnDefs*/
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
    d(a) {
      a && U(e), i = !1, Ze(r);
    }
  };
}
function ka(t) {
  let e, n, i, r;
  function s() {
    t[19].call(
      e,
      /*col*/
      t[28]
    );
  }
  return {
    c() {
      e = x("input"), P(e, "type", "number"), P(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), P(e, "class", "svelte-29x22x");
    },
    m(a, l) {
      B(a, e, l), xt(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      ), i || (r = [
        he(e, "input", s),
        he(
          e,
          "input",
          /*input_handler_1*/
          t[20]
        )
      ], i = !0);
    },
    p(a, l) {
      t = a, l[0] & /*searchInputLabel, columnDefs*/
      20 && n !== (n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`) && P(e, "placeholder", n), l[0] & /*filters, columnDefs*/
      36 && Ga(e.value) !== /*filters*/
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
    d(a) {
      a && U(e), i = !1, Ze(r);
    }
  };
}
function Y_(t) {
  let e, n, i, r = (
    /*col*/
    t[28].headerName + ""
  ), s, a, l, o, u = (
    /*col*/
    t[28].sortable && Oa(t)
  ), c = (
    /*col*/
    t[28].filter && Ma(t)
  );
  return {
    c() {
      e = x("div"), n = x("div"), i = x("span"), s = ut(r), a = oe(), u && u.c(), l = oe(), c && c.c(), o = oe(), P(i, "class", "header-title svelte-29x22x"), P(n, "class", "cell-header svelte-29x22x"), P(e, "class", "custom-cell-container svelte-29x22x"), Di(
        e,
        "min-width",
        /*col*/
        t[28].minWidth ?? 0
      );
    },
    m(f, d) {
      B(f, e, d), Z(e, n), Z(n, i), Z(i, s), Z(n, a), u && u.m(n, null), Z(e, l), c && c.m(e, null), B(f, o, d);
    },
    p(f, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      f[28].headerName + "") && dt(s, r), /*col*/
      f[28].sortable ? u ? u.p(f, d) : (u = Oa(f), u.c(), u.m(n, null)) : u && (u.d(1), u = null), /*col*/
      f[28].filter ? c ? c.p(f, d) : (c = Ma(f), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d[0] & /*columnDefs*/
      4 && Di(
        e,
        "min-width",
        /*col*/
        f[28].minWidth ?? 0
      );
    },
    d(f) {
      f && (U(e), U(o)), u && u.d(), c && c.d();
    }
  };
}
function Na(t) {
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
  return e = new ms({
    props: {
      style: (
        /*col*/
        t[28].headerStyle
      ),
      $$slots: { default: [Y_] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", i), {
    c() {
      te(e.$$.fragment);
    },
    m(r, s) {
      $(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const a = {};
      s[0] & /*columnDefs*/
      4 && (a.style = /*col*/
      t[28].headerStyle), s[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | s[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: s, ctx: t }), e.$set(a);
    },
    i(r) {
      n || (E(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function Z_(t) {
  let e, n, i = zt(
    /*columnDefs*/
    t[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Na(La(t, i, a));
  const s = (a) => L(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Ye();
    },
    m(a, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, l);
      B(a, e, l), n = !0;
    },
    p(a, l) {
      if (l[0] & /*columnDefs, sortColumnBy, searchInputLabel, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      12532) {
        i = zt(
          /*columnDefs*/
          a[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = La(a, i, o);
          r[o] ? (r[o].p(u, l), E(r[o], 1)) : (r[o] = Na(u), r[o].c(), E(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          E(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        L(r[l]);
      n = !1;
    },
    d(a) {
      a && U(e), Zr(r, a);
    }
  };
}
function Q_(t) {
  let e, n;
  return e = new iu({
    props: {
      class: "header-row",
      $$slots: { default: [Z_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function J_(t) {
  let e, n;
  return e = new ms({
    props: {
      numeric: (
        /*col*/
        t[28].numeric
      ),
      style: (
        /*col*/
        t[28].cellStyle
      ),
      $$slots: { default: [t0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*columnDefs*/
      4 && (s.numeric = /*col*/
      i[28].numeric), r[0] & /*columnDefs*/
      4 && (s.style = /*col*/
      i[28].cellStyle), r[0] & /*columnDefs, $filteredData*/
      260 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function x_(t) {
  let e, n;
  return e = new ms({
    props: {
      $$slots: { default: [h0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*rowActions, $filteredData*/
      264 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function $_(t) {
  let e = (
    /*row*/
    (t[25][
      /*col*/
      t[28].field
    ] ?? "") + ""
  ), n;
  return {
    c() {
      n = ut(e);
    },
    m(i, r) {
      B(i, n, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      260 && e !== (e = /*row*/
      (i[25][
        /*col*/
        i[28].field
      ] ?? "") + "") && dt(n, e);
    },
    d(i) {
      i && U(n);
    }
  };
}
function e0(t) {
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
      n = ut(e);
    },
    m(i, r) {
      B(i, n, r);
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
      ) + "") && dt(n, e);
    },
    d(i) {
      i && U(n);
    }
  };
}
function t0(t) {
  let e;
  function n(s, a) {
    return (
      /*col*/
      s[28].valueFormatter ? e0 : $_
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Ye();
    },
    m(s, a) {
      r.m(s, a), B(s, e, a);
    },
    p(s, a) {
      i === (i = n(s)) && r ? r.p(s, a) : (r.d(1), r = i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(s) {
      s && U(e), r.d(s);
    }
  };
}
function n0(t) {
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
  return e = new us({
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
      $$slots: { default: [d0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, s) {
      $(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const a = {};
      s[0] & /*rowActions, $filteredData*/
      264 && (a.callback = i), s[0] & /*rowActions, $filteredData*/
      264 && (a.disabled = /*action*/
      t[31].disabled(
        /*row*/
        t[25]
      )), s[0] & /*rowActions*/
      8 | s[1] & /*$$scope*/
      32 && (a.$$scope = { dirty: s, ctx: t }), e.$set(a);
    },
    i(r) {
      n || (E(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function i0(t) {
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
  return e = new Jh({
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
      te(e.$$.fragment);
    },
    m(r, s) {
      $(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const a = {};
      s[0] & /*rowActions*/
      8 && (a.iconComponent = /*action*/
      t[31].iconComponent), s[0] & /*rowActions*/
      8 && (a.iconStyles = /*action*/
      t[31].iconStyles), s[0] & /*rowActions, $filteredData*/
      264 && (a.callback = i), s[0] & /*rowActions, $filteredData*/
      264 && (a.disabled = /*action*/
      t[31].disabled(
        /*row*/
        t[25]
      )), e.$set(a);
    },
    i(r) {
      n || (E(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function r0(t) {
  let e, n;
  return e = new Tb({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function s0(t) {
  let e, n;
  return e = new jb({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function l0(t) {
  let e, n;
  return e = new Ub({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function a0(t) {
  let e, n;
  return e = new Pb({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function o0(t) {
  let e, n;
  return e = new Eb({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function u0(t) {
  let e, n;
  return e = new _b({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function c0(t) {
  let e, n;
  return e = new tu({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function f0(t) {
  let e, n;
  return e = new fb({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function d0(t) {
  let e, n, i, r;
  const s = [
    f0,
    c0,
    u0,
    o0,
    a0,
    l0,
    s0,
    r0
  ], a = [];
  function l(o, u) {
    return (
      /*action*/
      o[31].icon === "add" ? 0 : (
        /*action*/
        o[31].icon === "cancel" ? 1 : (
          /*action*/
          o[31].icon === "download" ? 2 : (
            /*action*/
            o[31].icon === "find-in-page" ? 3 : (
              /*action*/
              o[31].icon === "remove" ? 4 : (
                /*action*/
                o[31].icon === "edit" ? 5 : (
                  /*action*/
                  o[31].icon === "delete" ? 6 : 7
                )
              )
            )
          )
        )
      )
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e !== c && (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n || (n = a[e] = s[e](o), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function Pa(t) {
  let e, n, i, r;
  const s = [i0, n0], a = [];
  function l(o, u) {
    return (
      /*action*/
      o[31].iconComponent ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function h0(t) {
  let e, n, i = zt(
    /*rowActions*/
    t[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Pa(Ta(t, i, a));
  const s = (a) => L(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = x("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      P(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, l) {
      B(a, e, l);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
      n = !0;
    },
    p(a, l) {
      if (l[0] & /*rowActions, $filteredData*/
      264) {
        i = zt(
          /*rowActions*/
          a[3]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Ta(a, i, o);
          r[o] ? (r[o].p(u, l), E(r[o], 1)) : (r[o] = Pa(u), r[o].c(), E(r[o], 1), r[o].m(e, null));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          E(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        L(r[l]);
      n = !1;
    },
    d(a) {
      a && U(e), Zr(r, a);
    }
  };
}
function Ha(t, e) {
  let n, i, r, s, a;
  const l = [x_, J_], o = [];
  function u(c, f) {
    return (
      /*col*/
      c[28].field === "actions" ? 0 : 1
    );
  }
  return i = u(e), r = o[i] = l[i](e), {
    key: t,
    first: null,
    c() {
      n = Ye(), r.c(), s = Ye(), this.first = n;
    },
    m(c, f) {
      B(c, n, f), o[i].m(c, f), B(c, s, f), a = !0;
    },
    p(c, f) {
      e = c;
      let d = i;
      i = u(e), i === d ? o[i].p(e, f) : (Ue(), L(o[d], 1, 1, () => {
        o[d] = null;
      }), Be(), r = o[i], r ? r.p(e, f) : (r = o[i] = l[i](e), r.c()), E(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      a || (E(r), a = !0);
    },
    o(c) {
      L(r), a = !1;
    },
    d(c) {
      c && (U(n), U(s)), o[i].d(c);
    }
  };
}
function m0(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, s = zt(
    /*columnDefs*/
    t[2]
  );
  const a = (l) => (
    /*col*/
    l[28].field
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = Sa(t, s, l), u = a(o);
    n.set(u, e[l] = Ha(u, o));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = oe();
    },
    m(l, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, o);
      B(l, i, o), r = !0;
    },
    p(l, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      268 && (s = zt(
        /*columnDefs*/
        l[2]
      ), Ue(), e = xr(e, o, a, 1, l, s, n, i.parentNode, Jr, Ha, i, Sa), Be());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          E(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        L(e[o]);
      r = !1;
    },
    d(l) {
      l && U(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function Fa(t, e) {
  let n, i, r;
  return i = new iu({
    props: {
      $$slots: { default: [m0] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ye(), te(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      B(s, n, a), $(i, s, a), r = !0;
    },
    p(s, a) {
      e = s;
      const l = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      268 | a[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: a, ctx: e }), i.$set(l);
    },
    i(s) {
      r || (E(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), ee(i, s);
    }
  };
}
function p0(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, s = zt(
    /*$filteredData*/
    t[8]
  );
  const a = (l) => (
    /*index*/
    l[27]
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = Ca(t, s, l), u = a(o);
    n.set(u, e[l] = Fa(u, o));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = Ye();
    },
    m(l, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, o);
      B(l, i, o), r = !0;
    },
    p(l, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      268 && (s = zt(
        /*$filteredData*/
        l[8]
      ), Ue(), e = xr(e, o, a, 1, l, s, n, i.parentNode, Jr, Fa, i, Ca), Be());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          E(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        L(e[o]);
      r = !1;
    },
    d(l) {
      l && U(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function g0(t) {
  let e, n, i, r;
  return e = new R_({
    props: {
      $$slots: { default: [Q_] },
      $$scope: { ctx: t }
    }
  }), i = new k_({
    props: {
      $$slots: { default: [p0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe(), te(i.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), B(s, n, a), $(i, s, a), r = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | a[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
      const o = {};
      a[0] & /*$filteredData, columnDefs, rowActions*/
      268 | a[1] & /*$$scope*/
      32 && (o.$$scope = { dirty: a, ctx: s }), i.$set(o);
    },
    i(s) {
      r || (E(e.$$.fragment, s), E(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(e.$$.fragment, s), L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), ee(e, s), ee(i, s);
    }
  };
}
function b0(t) {
  let e, n, i;
  function r(a) {
    t[16](a);
  }
  let s = {
    indeterminate: !0,
    "aria-label": "Data is being loaded...",
    slot: "progress"
  };
  return (
    /*loadingDone*/
    t[0] !== void 0 && (s.closed = /*loadingDone*/
    t[0]), e = new z_({ props: s }), le.push(() => gt(e, "closed", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        $(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l[0] & /*loadingDone*/
        1 && (n = !0, o.closed = /*loadingDone*/
        a[0], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function _0(t) {
  let e, n;
  return e = new T_({
    props: {
      "table$aria-label": (
        /*label*/
        t[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [b0],
        default: [g0]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*label*/
      2 && (s["table$aria-label"] = /*label*/
      i[1]), r[0] & /*loadingDone, $filteredData, columnDefs, rowActions, searchInputLabel, filters, $sortDirection, $sortColumn*/
      509 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function v0(t, e, n) {
  let i, r, s, { loadingDone: a = !0 } = e, { label: l = nu() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: f = [] } = e, { searchInputLabel: d = "Search" } = e, h = { name: "", color: "", number: "" }, m = Tt([]);
  st(t, m, (I) => n(8, s = I));
  let g = Tt(null);
  st(t, g, (I) => n(6, i = I));
  let p = Tt(null);
  st(t, p, (I) => n(7, r = I)), c.store.subscribe((I) => {
    n(14, u = [...I]), A();
  });
  function A() {
    let I = u.filter((T) => o.every((N) => {
      const q = h[N.field], j = T[N.field];
      return q ? N.filterType === "number" ? j == q : j.toString().toLowerCase().includes(q.toLowerCase()) : !0;
    }));
    I = _(I), m.set(I);
  }
  function _(I) {
    let T, N;
    return g.subscribe((q) => T = q), p.subscribe((q) => N = q), !T || !N ? I : I.sort((q, j) => {
      let K = q[T], k = j[T];
      return K == null && (K = ""), k == null && (k = ""), N === "asc" ? K.toString().localeCompare(k.toString()) : k.toString().localeCompare(K.toString());
    });
  }
  function S(I) {
    g.update((T) => {
      if (T === I)
        p.update((N) => N === "asc" ? "desc" : N === "desc" ? null : "asc");
      else
        return p.set("asc"), I;
      return I;
    }), A();
  }
  m.set(u);
  function C(I) {
    a = I, n(0, a);
  }
  function M(I) {
    h[I.field] = this.value, n(5, h);
  }
  const D = () => A();
  function b(I) {
    h[I.field] = Ga(this.value), n(5, h);
  }
  const O = () => A(), w = (I) => I.sortable && S(I.field), y = (I, T) => I.callback(T), v = (I, T) => I.callback(T);
  return t.$$set = (I) => {
    "loadingDone" in I && n(0, a = I.loadingDone), "label" in I && n(1, l = I.label), "columnDefs" in I && n(2, o = I.columnDefs), "rowData" in I && n(14, u = I.rowData), "store" in I && n(15, c = I.store), "rowActions" in I && n(3, f = I.rowActions), "searchInputLabel" in I && n(4, d = I.searchInputLabel);
  }, [
    a,
    l,
    o,
    f,
    d,
    h,
    i,
    r,
    s,
    m,
    g,
    p,
    A,
    S,
    u,
    c,
    C,
    M,
    D,
    b,
    O,
    w,
    y,
    v
  ];
}
class ru extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      v0,
      _0,
      ve,
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
function I0(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[9].default
  ), o = Le(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = re({
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = X(c, u[f]);
  return {
    c() {
      e = x("div"), o && o.c(), fe(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[10](e), r = !0, s || (a = [
        de(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        de(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && Re(
        o,
        l,
        f,
        /*$$scope*/
        f[8],
        r ? Oe(
          l,
          /*$$scope*/
          f[8],
          d,
          null
        ) : Me(
          /*$$scope*/
          f[8]
        ),
        null
      ), fe(e, c = me(u, [
        (!r || d & /*className, variant, padded*/
        14 && n !== (n = re({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-card": !0,
          "mdc-card--outlined": (
            /*variant*/
            f[2] === "outlined"
          ),
          "smui-card--padded": (
            /*padded*/
            f[3]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), i && ge(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (E(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[10](null), s = !1, Ze(a);
    }
  };
}
function A0(t, e, n) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = pe(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt($e());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { padded: f = !1 } = e, d;
  function h() {
    return d;
  }
  function m(g) {
    le[g ? "unshift" : "push"](() => {
      d = g, n(4, d);
    });
  }
  return t.$$set = (g) => {
    e = X(X({}, e), it(g)), n(6, r = pe(e, i)), "use" in g && n(0, o = g.use), "class" in g && n(1, u = g.class), "variant" in g && n(2, c = g.variant), "padded" in g && n(3, f = g.padded), "$$scope" in g && n(8, a = g.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    l,
    r,
    h,
    a,
    s,
    m
  ];
}
class su extends ke {
  constructor(e) {
    super(), De(this, e, A0, I0, ve, {
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
Ct({
  class: "smui-card__content",
  tag: "div"
});
Ct({
  class: "mdc-card__media-content",
  tag: "div"
});
Ct({
  class: "mdc-card__action-buttons",
  tag: "div"
});
Ct({
  class: "mdc-card__action-icons",
  tag: "div"
});
function E0(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d;
  function h(_) {
    t[15](_);
  }
  function m(_) {
    t[16](_);
  }
  let g = { label: (
    /*$_*/
    t[3]("location")
  ) };
  /*locations*/
  t[4] !== void 0 && (g.data = /*locations*/
  t[4]), /*selectedLocationUUID*/
  t[2] !== void 0 && (g.value = /*selectedLocationUUID*/
  t[2]), n = new cs({ props: g }), le.push(() => gt(n, "data", h)), le.push(() => gt(n, "value", m));
  function p(_) {
    t[18](_);
  }
  let A = {
    title: (
      /*$_*/
      t[3]("search")
    ),
    $$slots: { content: [O0] },
    $$scope: { ctx: t }
  };
  return (
    /*searchOpen*/
    t[5] !== void 0 && (A.open = /*searchOpen*/
    t[5]), l = new v_({ props: A }), le.push(() => gt(l, "open", p)), l.$on(
      "click",
      /*toggleSearchPanel*/
      t[14]
    ), f = new su({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [R0] },
        $$scope: { ctx: t }
      }
    }), {
      c() {
        e = x("div"), te(n.$$.fragment), s = oe(), a = x("div"), te(l.$$.fragment), u = oe(), c = x("div"), te(f.$$.fragment), P(a, "class", "search-filter svelte-cft5xm"), P(c, "class", "table-container"), P(e, "class", "location-viewer-container");
      },
      m(_, S) {
        B(_, e, S), $(n, e, null), Z(e, s), Z(e, a), $(l, a, null), Z(e, u), Z(e, c), $(f, c, null), d = !0;
      },
      p(_, S) {
        const C = {};
        S & /*$_*/
        8 && (C.label = /*$_*/
        _[3]("location")), !i && S & /*locations*/
        16 && (i = !0, C.data = /*locations*/
        _[4], pt(() => i = !1)), !r && S & /*selectedLocationUUID*/
        4 && (r = !0, C.value = /*selectedLocationUUID*/
        _[2], pt(() => r = !1)), n.$set(C);
        const M = {};
        S & /*$_*/
        8 && (M.title = /*$_*/
        _[3]("search")), S & /*$$scope, searchColumnDefs, searchResourceStore, $_, filtersToSearch*/
        16777866 && (M.$$scope = { dirty: S, ctx: _ }), !o && S & /*searchOpen*/
        32 && (o = !0, M.open = /*searchOpen*/
        _[5], pt(() => o = !1)), l.$set(M);
        const D = {};
        S & /*$$scope, locationColumnDefs, locationResourceStore, $_, selectedLocationUUID, locations*/
        16777501 && (D.$$scope = { dirty: S, ctx: _ }), f.$set(D);
      },
      i(_) {
        d || (E(n.$$.fragment, _), E(l.$$.fragment, _), E(f.$$.fragment, _), d = !0);
      },
      o(_) {
        L(n.$$.fragment, _), L(l.$$.fragment, _), L(f.$$.fragment, _), d = !1;
      },
      d(_) {
        _ && U(e), ee(n), ee(l), ee(f);
      }
    }
  );
}
function y0(t) {
  let e, n;
  return e = new f_({
    props: { loadingDone: !/*loading*/
    t[6] }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*loading*/
      64 && (s.loadingDone = !/*loading*/
      i[6]), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function C0(t) {
  let e = (
    /*$_*/
    t[3]("search") + ""
  ), n;
  return {
    c() {
      n = ut(e);
    },
    m(i, r) {
      B(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      8 && e !== (e = /*$_*/
      i[3]("search") + "") && dt(n, e);
    },
    d(i) {
      i && U(n);
    }
  };
}
function S0(t) {
  let e, n, i, r;
  return e = new Mb({}), i = new Th({
    props: {
      $$slots: { default: [C0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe(), te(i.$$.fragment);
    },
    m(s, a) {
      $(e, s, a), B(s, n, a), $(i, s, a), r = !0;
    },
    p(s, a) {
      const l = {};
      a & /*$$scope, $_*/
      16777224 && (l.$$scope = { dirty: a, ctx: s }), i.$set(l);
    },
    i(s) {
      r || (E(e.$$.fragment, s), E(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(e.$$.fragment, s), L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), ee(e, s), ee(i, s);
    }
  };
}
function T0(t) {
  let e, n;
  return e = new us({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        t[13]
      ),
      $$slots: { default: [S0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, $_*/
      16777224 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function L0(t) {
  let e, n = (
    /*$_*/
    t[3]("search_result") + ""
  ), i, r, s, a;
  return s = new ru({
    props: {
      columnDefs: (
        /*searchColumnDefs*/
        t[9]
      ),
      store: (
        /*searchResourceStore*/
        t[1]
      ),
      rowActions: (
        /*searchRowActions*/
        t[12]
      ),
      searchInputLabel: (
        /*$_*/
        t[3]("search")
      )
    }
  }), {
    c() {
      e = x("h3"), i = ut(n), r = oe(), te(s.$$.fragment), Di(e, "margin-bottom", "1rem");
    },
    m(l, o) {
      B(l, e, o), Z(e, i), B(l, r, o), $(s, l, o), a = !0;
    },
    p(l, o) {
      (!a || o & /*$_*/
      8) && n !== (n = /*$_*/
      l[3]("search_result") + "") && dt(i, n);
      const u = {};
      o & /*searchColumnDefs*/
      512 && (u.columnDefs = /*searchColumnDefs*/
      l[9]), o & /*searchResourceStore*/
      2 && (u.store = /*searchResourceStore*/
      l[1]), o & /*$_*/
      8 && (u.searchInputLabel = /*$_*/
      l[3]("search")), s.$set(u);
    },
    i(l) {
      a || (E(s.$$.fragment, l), a = !0);
    },
    o(l) {
      L(s.$$.fragment, l), a = !1;
    },
    d(l) {
      l && (U(e), U(r)), ee(s, l);
    }
  };
}
function O0(t) {
  let e, n, i, r, s, a, l, o;
  function u(f) {
    t[17](f);
  }
  let c = {
    filterTypes: (
      /*filterTypes*/
      t[10]
    ),
    addFilterLabel: (
      /*$_*/
      t[3]("add_filter")
    ),
    selectFilterLabel: (
      /*$_*/
      t[3]("filter_types")
    ),
    $$slots: {
      "filter-controls": [T0]
    },
    $$scope: { ctx: t }
  };
  return (
    /*filtersToSearch*/
    t[7] !== void 0 && (c.activeFilters = /*filtersToSearch*/
    t[7]), i = new o_({ props: c }), le.push(() => gt(i, "activeFilters", u)), l = new su({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [L0] },
        $$scope: { ctx: t }
      }
    }), {
      c() {
        e = x("div"), n = x("div"), te(i.$$.fragment), s = oe(), a = x("div"), te(l.$$.fragment), P(n, "class", "filter-box svelte-cft5xm"), P(a, "class", "table-container"), P(e, "slot", "content");
      },
      m(f, d) {
        B(f, e, d), Z(e, n), $(i, n, null), Z(e, s), Z(e, a), $(l, a, null), o = !0;
      },
      p(f, d) {
        const h = {};
        d & /*$_*/
        8 && (h.addFilterLabel = /*$_*/
        f[3]("add_filter")), d & /*$_*/
        8 && (h.selectFilterLabel = /*$_*/
        f[3]("filter_types")), d & /*$$scope, $_*/
        16777224 && (h.$$scope = { dirty: d, ctx: f }), !r && d & /*filtersToSearch*/
        128 && (r = !0, h.activeFilters = /*filtersToSearch*/
        f[7], pt(() => r = !1)), i.$set(h);
        const m = {};
        d & /*$$scope, searchColumnDefs, searchResourceStore, $_*/
        16777738 && (m.$$scope = { dirty: d, ctx: f }), l.$set(m);
      },
      i(f) {
        o || (E(i.$$.fragment, f), E(l.$$.fragment, f), o = !0);
      },
      o(f) {
        L(i.$$.fragment, f), L(l.$$.fragment, f), o = !1;
      },
      d(f) {
        f && U(e), ee(i), ee(l);
      }
    }
  );
}
function R0(t) {
  var l;
  let e, n = (
    /*selectedLocationUUID*/
    (t[2] ? `${/*$_*/
    t[3]("location")}: ${/*locations*/
    (l = t[4].find(
      /*func*/
      t[19]
    )) == null ? void 0 : l.label}` : (
      /*$_*/
      t[3]("select_location")
    )) + ""
  ), i, r, s, a;
  return s = new ru({
    props: {
      columnDefs: (
        /*locationColumnDefs*/
        t[8]
      ),
      store: (
        /*locationResourceStore*/
        t[0]
      ),
      rowActions: (
        /*locationRowActions*/
        t[11]
      ),
      searchInputLabel: (
        /*$_*/
        t[3]("search")
      )
    }
  }), {
    c() {
      e = x("h3"), i = ut(n), r = oe(), te(s.$$.fragment), Di(e, "margin-bottom", "1rem");
    },
    m(o, u) {
      B(o, e, u), Z(e, i), B(o, r, u), $(s, o, u), a = !0;
    },
    p(o, u) {
      var f;
      (!a || u & /*selectedLocationUUID, $_, locations*/
      28) && n !== (n = /*selectedLocationUUID*/
      (o[2] ? `${/*$_*/
      o[3]("location")}: ${/*locations*/
      (f = o[4].find(
        /*func*/
        o[19]
      )) == null ? void 0 : f.label}` : (
        /*$_*/
        o[3]("select_location")
      )) + "") && dt(i, n);
      const c = {};
      u & /*locationColumnDefs*/
      256 && (c.columnDefs = /*locationColumnDefs*/
      o[8]), u & /*locationResourceStore*/
      1 && (c.store = /*locationResourceStore*/
      o[0]), u & /*$_*/
      8 && (c.searchInputLabel = /*$_*/
      o[3]("search")), s.$set(c);
    },
    i(o) {
      a || (E(s.$$.fragment, o), a = !0);
    },
    o(o) {
      L(s.$$.fragment, o), a = !1;
    },
    d(o) {
      o && (U(e), U(r)), ee(s, o);
    }
  };
}
function M0(t) {
  let e, n, i, r;
  const s = [y0, E0], a = [];
  function l(o, u) {
    return (
      /*loading*/
      o[6] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ye();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (E(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
Zf({ en: Uu, de: $u });
function wa(t) {
  return new Date(t).toLocaleDateString();
}
function D0(t) {
  const e = {
    uuid: null,
    type: null,
    name: null,
    location: null,
    author: null,
    from: null,
    to: null
  };
  return console.log("Convert filter to search params: ", t), t.forEach((n) => {
    console.log("KEY:", n.key), n.key === "from" || n.key === "to" ? e[n.key] = new Date(n.value).toISOString() : e[n.key] = n.value;
  }), e;
}
function k0(t, e, n) {
  let i, r, s;
  st(t, Yf, (v) => n(3, s = v));
  const a = Un.getInstance();
  let l = [], o, u = !1, c = !0;
  ct(() => {
    setTimeout(
      () => {
        n(6, c = !1);
      },
      1e3
    );
  }), ct(() => {
    a.getLocations().subscribe({
      next: (v) => {
        n(4, l = v.map((I) => ({ label: I.name, value: I.uuid })));
      }
    });
  });
  let { locationResourceStore: f = new Us() } = e, { searchResourceStore: d = new Us() } = e;
  function h(v) {
    if (!l || !v)
      return v || "";
    const I = l.find((T) => T.value === v);
    return console.log("foundlocation", {
      foundLocation: I,
      bool: (I == null ? void 0 : I.label) !== void 0
    }), I != null && I.label ? I.label : v;
  }
  const m = [
    {
      id: 1,
      label: s("uuid"),
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
      label: s("type"),
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
      label: s("name"),
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
      label: s("location"),
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
      label: s("author"),
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
      label: s("from"),
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
      label: s("to"),
      inputType: {
        id: 1,
        type: "datepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    }
  ], g = [
    {
      icon: "remove",
      callback: (v) => S(v),
      disabled: () => !1
    }
  ], p = [
    {
      icon: "add",
      callback: (v) => _(v),
      disabled: () => !1
    }
  ];
  let A = [];
  function _(v) {
    a.assignResourceToLocation(o, v.uuid).subscribe({
      next: () => {
        d.remove(v.uuid), f.add(Object.assign(Object.assign({}, v), { location: o }));
      }
    });
  }
  function S(v) {
    a.unassignResourceFromLocation(o, v.uuid).subscribe({
      next: () => {
        f.remove(v.uuid);
      }
    });
  }
  function C() {
    const v = D0(A);
    a.searchResources(v).pipe(Td(1), Ld((I) => {
      d.set(I.filter((T) => T.location !== o));
    })).subscribe();
  }
  function M() {
    n(5, u = !u);
  }
  function D(v) {
    l = v, n(4, l);
  }
  function b(v) {
    o = v, n(2, o);
  }
  function O(v) {
    A = v, n(7, A);
  }
  function w(v) {
    u = v, n(5, u);
  }
  const y = (v) => v.value === o;
  return t.$$set = (v) => {
    "locationResourceStore" in v && n(0, f = v.locationResourceStore), "searchResourceStore" in v && n(1, d = v.searchResourceStore);
  }, t.$$.update = () => {
    t.$$.dirty & /*$_*/
    8 && n(9, i = [
      {
        headerName: s("uuid"),
        field: "uuid",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !1
      },
      {
        headerName: s("name"),
        field: "name",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("author"),
        field: "author",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("type"),
        field: "type",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("location"),
        field: "location",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0,
        valueFormatter: h
      },
      {
        headerName: s("version"),
        field: "version",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("changed_at"),
        field: "changedAt",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0,
        valueFormatter: wa
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
    ]), t.$$.dirty & /*$_*/
    8 && n(8, r = [
      {
        headerName: s("uuid"),
        field: "uuid",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !1
      },
      {
        headerName: s("name"),
        field: "name",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("author"),
        field: "author",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("type"),
        field: "type",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("version"),
        field: "version",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("changed_at"),
        field: "changedAt",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0,
        valueFormatter: wa
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
    ]), t.$$.dirty & /*selectedLocationUUID, locationResourceStore*/
    5 && o && a.searchResources({}).subscribe({
      next: (v) => {
        console.log({
          data: v,
          selectedLocation: o
        }), f.set(v.filter((I) => I.location === o));
      },
      error: (v) => {
        console.error("Error loading resources:", v);
      }
    });
  }, [
    f,
    d,
    o,
    s,
    l,
    u,
    c,
    A,
    r,
    i,
    m,
    g,
    p,
    C,
    M,
    D,
    b,
    O,
    w,
    y
  ];
}
class N0 extends ke {
  constructor(e) {
    super(), De(this, e, k0, M0, ve, {
      locationResourceStore: 0,
      searchResourceStore: 1
    });
  }
}
function Ua(t) {
  let e, n;
  return e = new N0({}), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), n = !0;
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function P0(t) {
  let e, n, i, r, s, a = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && Ua()
  );
  return {
    c() {
      a && a.c(), e = oe(), n = x("input"), i = oe(), r = x("input"), P(n, "type", "hidden"), P(n, "name", "package-name"), n.value = za, P(r, "type", "hidden"), P(r, "name", "package-version"), r.value = Ka;
    },
    m(l, o) {
      a && a.m(l, o), B(l, e, o), B(l, n, o), B(l, i, o), B(l, r, o), s = !0;
    },
    p(l, [o]) {
      /*doc*/
      l[0] || /*dev*/
      l[1] ? a ? o & /*doc, dev*/
      3 && E(a, 1) : (a = Ua(), a.c(), E(a, 1), a.m(e.parentNode, e)) : a && (Ue(), L(a, 1, 1, () => {
        a = null;
      }), Be());
    },
    i(l) {
      s || (E(a), s = !0);
    },
    o(l) {
      L(a), s = !1;
    },
    d(l) {
      l && (U(e), U(n), U(i), U(r)), a && a.d(l);
    }
  };
}
function H0(t, e, n) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return t.$$set = (s) => {
    "doc" in s && n(0, i = s.doc), "dev" in s && n(1, r = s.dev);
  }, [i, r];
}
class F0 extends ke {
  constructor(e) {
    super(), De(this, e, H0, P0, ve, { doc: 0, dev: 1 });
  }
}
class q0 extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new F0({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = w0();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function w0() {
  const t = `${za}-v${Ka}-style`, e = U0(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function U0() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  q0 as default
};
