var au = Object.defineProperty;
var ou = (t, e, n) => e in t ? au(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var mr = (t, e, n) => (ou(t, typeof e != "symbol" ? e + "" : e, n), n), uu = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var En = (t, e, n) => (uu(t, e, "read from private field"), n ? n.call(t) : e.get(t)), gs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
};
function it() {
}
function q(t, e) {
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
function _s() {
  return /* @__PURE__ */ Object.create(null);
}
function Ye(t) {
  t.forEach(Ba);
}
function ge(t) {
  return typeof t == "function";
}
function _e(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function cu(t) {
  return Object.keys(t).length === 0;
}
function Yr(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return it;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function fu(t) {
  let e;
  return Yr(t, (n) => e = n)(), e;
}
function st(t, e, n) {
  t.$$.on_destroy.push(Yr(e, n));
}
function Ae(t, e, n, i) {
  if (t) {
    const r = Va(t, e, n, i);
    return t[0](r);
  }
}
function Va(t, e, n, i) {
  return t[1] && i ? q(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function ye(t, e, n, i) {
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
function Ce(t, e, n, i, r, s) {
  if (r) {
    const a = Va(e, n, i, s);
    t.p(a, r);
  }
}
function Se(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function $e(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function he(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t)
    !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Zr(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function jt(t, e, n) {
  return t.set(n), e;
}
function fe(t) {
  return t && ge(t.destroy) ? t.destroy : it;
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
function Qr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function ee(t) {
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
function Ze() {
  return ut("");
}
function pe(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function N(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const mu = ["width", "height"];
function me(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && mu.indexOf(i) === -1 ? t[i] = e[i] : N(t, i, e[i]);
}
function Mi(t, e) {
  for (const n in e)
    N(t, n, e[n]);
}
function pu(t, e) {
  Object.keys(e).forEach((n) => {
    gu(t, n, e[n]);
  });
}
function gu(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : N(t, e, n);
}
function Di(t) {
  return /-/.test(t) ? pu : me;
}
function Ga(t) {
  return t === "" ? null : +t;
}
function _u(t) {
  return Array.from(t.childNodes);
}
function dt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function bu(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function vu(t, e, n) {
  ~du.indexOf(n) ? bu(t, e) : dt(t, e);
}
function xt(t, e) {
  t.value = e ?? "";
}
function ki(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function kt(t, e) {
  return new t(e);
}
let fi;
function ci(t) {
  fi = t;
}
function Qe() {
  if (!fi)
    throw new Error("Function called outside component initialization");
  return fi;
}
function ct(t) {
  Qe().$$.on_mount.push(t);
}
function en(t) {
  Qe().$$.on_destroy.push(t);
}
function ze(t, e) {
  return Qe().$$.context.set(t, e), e;
}
function qe(t) {
  return Qe().$$.context.get(t);
}
function Wn(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const wn = [], se = [];
let Gn = [];
const Nr = [], ja = /* @__PURE__ */ Promise.resolve();
let Pr = !1;
function qa() {
  Pr || (Pr = !0, ja.then(Wa));
}
function Jr() {
  return qa(), ja;
}
function Hr(t) {
  Gn.push(t);
}
function pt(t) {
  Nr.push(t);
}
const pr = /* @__PURE__ */ new Set();
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
    for (ci(null), wn.length = 0, Nn = 0; se.length; )
      se.pop()();
    for (let e = 0; e < Gn.length; e += 1) {
      const n = Gn[e];
      pr.has(n) || (pr.add(n), n());
    }
    Gn.length = 0;
  } while (wn.length);
  for (; Nr.length; )
    Nr.pop()();
  Pr = !1, pr.clear(), ci(t);
}
function Iu(t) {
  if (t.fragment !== null) {
    t.update(), Ye(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Hr);
  }
}
function Eu(t) {
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
  Tn.r || Ye(Tn.c), Tn = Tn.p;
}
function A(t, e) {
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
function xr(t, e) {
  L(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function $r(t, e, n, i, r, s, a, l, o, u, c, f) {
  let d = t.length, h = s.length, m = d;
  const g = {};
  for (; m--; )
    g[t[m].key] = m;
  const p = [], E = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), S = [];
  for (m = h; m--; ) {
    const _ = f(r, s, m), O = n(_);
    let w = a.get(O);
    w ? S.push(() => w.p(_, e)) : (w = u(O, _), w.c()), E.set(O, p[m] = w), O in g && b.set(O, Math.abs(m - g[O]));
  }
  const C = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function D(_) {
    A(_, 1), _.m(l, c), a.set(_.key, _), c = _.first, h--;
  }
  for (; d && h; ) {
    const _ = p[h - 1], O = t[d - 1], w = _.key, y = O.key;
    _ === O ? (c = _.first, d--, h--) : E.has(y) ? !a.has(w) || C.has(w) ? D(_) : M.has(y) ? d-- : b.get(w) > b.get(y) ? (M.add(w), D(_)) : (C.add(y), d--) : (o(O, a), d--);
  }
  for (; d--; ) {
    const _ = t[d];
    E.has(_.key) || o(_, a);
  }
  for (; h; )
    D(p[h - 1]);
  return Ye(S), p;
}
function de(t, e) {
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
function be(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function gt(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function te(t) {
  t && t.c();
}
function x(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), Hr(() => {
    const s = t.$$.on_mount.map(Ba).filter(ge);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Ye(s), t.$$.on_mount = [];
  }), r.forEach(Hr);
}
function $(t, e) {
  const n = t.$$;
  n.fragment !== null && (Eu(n.after_update), Ye(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Au(t, e) {
  t.$$.dirty[0] === -1 && (wn.push(t), qa(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Te(t, e, n, i, r, s, a = null, l = [-1]) {
  const o = fi;
  ci(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: it,
    not_equal: r,
    bound: _s(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: _s(),
    dirty: l,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return u.ctx && r(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && Au(t, f)), d;
  }) : [], u.update(), c = !0, Ye(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = _u(e.target);
      u.fragment && u.fragment.l(f), f.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && A(t.$$.fragment), x(t, e.target, e.anchor), Wa();
  }
  ci(o);
}
class Le {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    mr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    mr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $(this, 1), this.$destroy = it;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!ge(n))
      return it;
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
function Tt(t, e = it) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(l) {
    if (_e(t, l) && (t = l, n)) {
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
  function a(l, o = it) {
    const u = [l, o];
    return i.add(u), i.size === 1 && (n = e(r, s) || it), l(t), () => {
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
    let c = 0, f = it;
    const d = () => {
      if (c)
        return;
      f();
      const m = e(i ? u[0] : u, a, l);
      s ? a(m) : f = ge(m) ? m : it;
    }, h = r.map(
      (m, g) => Yr(
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
      Ye(h), f(), o = !1;
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
function bs(t) {
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
  return n.isMergeableObject(t) && bs(t).forEach(function(r) {
    i[r] = di(t[r], n);
  }), bs(e).forEach(function(r) {
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
var Fr = function(t, e) {
  return Fr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Fr(t, e);
};
function ot(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Fr(t, e);
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
function _c(t, e) {
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
function es(t, e) {
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
function _n(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = e.length, s; i < r; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function jn(t) {
  return this instanceof jn ? (this.v = t, this) : new jn(t);
}
function bc(t, e, n) {
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
      return new Promise(function(p, E) {
        s.push([h, g, p, E]) > 1 || o(h, g);
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
function gr(t, e) {
  var n = e && e.cache ? e.cache : Tc, i = e && e.serializer ? e.serializer : Cc, r = e && e.strategy ? e.strategy : Ac;
  return r(t, {
    cache: n,
    serializer: i
  });
}
function Ic(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Ec(t, e, n, i) {
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
function Ac(t, e) {
  var n = t.length === 1 ? Ec : Za;
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
}, _r = {
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
function wr(t) {
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
function Es(t) {
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
function As(t) {
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
          return ce(ce({}, o), As(u));
        }, {}));
        continue;
      case "engineering":
        e = ce(ce(ce({}, e), { notation: "engineering" }), r.options.reduce(function(o, u) {
          return ce(ce({}, o), As(u));
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
      s === "w" ? e = ce(ce({}, e), { trailingZeroDisplay: "stripIfInteger" }) : s && (e = ce(ce({}, e), Es(s)));
      continue;
    }
    if (so.test(r.stem)) {
      e = ce(ce({}, e), Es(r.stem));
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
}, Ur = !0;
try {
  var Zc = uo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ur = ((br = Zc.exec("a")) === null || br === void 0 ? void 0 : br[0]) === "a";
} catch {
  Ur = !1;
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
), Br = jc ? String.fromCodePoint : (
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
var Vr;
if (Ur) {
  var Ss = uo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Vr = function(e, n) {
    var i;
    Ss.lastIndex = n;
    var r = Ss.exec(e);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  Vr = function(e, n) {
    for (var i = []; ; ) {
      var r = oo(e, n);
      if (r === void 0 || co(r) || tf(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return Br.apply(void 0, i);
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
          } else if (s === 60 && !this.ignoreTag && Gr(this.peek() || 0)) {
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
          if (this.isEOF() || !Gr(this.char()))
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
      return Br.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), Br(i));
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
      var e = this.clonePosition(), n = this.offset(), i = Vr(this.message, n), r = n + i.length;
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
              var E = p;
              this.locale && (E = wc(p, this.locale));
              var d = {
                type: Xn.dateTime,
                pattern: E,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Mc(E) : {}
              }, b = l === "date" ? mt.date : mt.time;
              return {
                val: { type: b, value: i, location: g, style: d },
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
          var _ = nt(r, this.clonePosition());
          return l === "select" ? {
            val: {
              type: mt.select,
              value: i,
              options: Cs(D.val),
              location: _
            },
            err: null
          } : {
            val: {
              type: mt.plural,
              value: i,
              options: Cs(D.val),
              offset: M,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: _
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
function Gr(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function $c(t) {
  return Gr(t) || t === 47;
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
function jr(t) {
  t.forEach(function(e) {
    if (delete e.location, eo(e) || to(e))
      for (var n in e.options)
        delete e.options[n].location, jr(e.options[n].value);
    else
      Ja(e) && io(e.style) || (xa(e) || $a(e)) && wr(e.style) ? delete e.style.location : no(e) && jr(e.children);
  });
}
function nf(t, e) {
  e === void 0 && (e = {}), e = ce({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new xc(t, e).parse();
  if (n.err) {
    var i = SyntaxError(tt[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || jr(n.val), n.val;
}
var Yn;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Yn || (Yn = {}));
var Ui = (
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
  }(Ui)
), rf = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), Yn.INVALID_VALUE, r) || this;
    }
    return e;
  }(Ui)
), sf = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), Yn.MISSING_VALUE, i) || this;
    }
    return e;
  }(Ui)
), Pt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Pt || (Pt = {}));
function lf(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== Pt.literal || n.type !== Pt.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function af(t) {
  return typeof t == "function";
}
function Oi(t, e, n, i, r, s, a) {
  if (t.length === 1 && vs(t[0]))
    return [
      {
        type: Pt.literal,
        value: t[0].value
      }
    ];
  for (var l = [], o = 0, u = t; o < u.length; o++) {
    var c = u[o];
    if (vs(c)) {
      l.push({
        type: Pt.literal,
        value: c.value
      });
      continue;
    }
    if (Oc(c)) {
      typeof s == "number" && l.push({
        type: Pt.literal,
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
        type: typeof d == "string" ? Pt.literal : Pt.object,
        value: d
      });
      continue;
    }
    if (xa(c)) {
      var h = typeof c.style == "string" ? i.date[c.style] : wr(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: Pt.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if ($a(c)) {
      var h = typeof c.style == "string" ? i.time[c.style] : wr(c.style) ? c.style.parsedOptions : i.time.medium;
      l.push({
        type: Pt.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if (Ja(c)) {
      var h = typeof c.style == "string" ? i.number[c.style] : io(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (d = d * (h.scale || 1)), l.push({
        type: Pt.literal,
        value: n.getNumberFormat(e, h).format(d)
      });
      continue;
    }
    if (no(c)) {
      var m = c.children, g = c.value, p = r[g];
      if (!af(p))
        throw new rf(g, "function", a);
      var E = Oi(m, e, n, i, r, s), b = p(E.map(function(M) {
        return M.value;
      }));
      Array.isArray(b) || (b = [b]), l.push.apply(l, b.map(function(M) {
        return {
          type: typeof M == "string" ? Pt.literal : Pt.object,
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
          throw new Ui(`Intl.PluralRules is not available in this environment.
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
function vr(t) {
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
    getNumberFormat: gr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, _n([void 0], n, !1)))();
    }, {
      cache: vr(t.number),
      strategy: _r.variadic
    }),
    getDateTimeFormat: gr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, _n([void 0], n, !1)))();
    }, {
      cache: vr(t.dateTime),
      strategy: _r.variadic
    }),
    getPluralRules: gr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, _n([void 0], n, !1)))();
    }, {
      cache: vr(t.pluralRules),
      strategy: _r.variadic
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
          return !f.length || d.type !== Pt.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
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
        var l = _c(a, ["formatters"]);
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
let ts;
const mi = Tt({});
function hf(t) {
  return ts[t] || null;
}
function mo(t) {
  return t in ts;
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
mi.subscribe((t) => ts = t);
const Ri = {};
function gf(t, e) {
  Ri[t].delete(e), Ri[t].size === 0 && delete Ri[t];
}
function go(t) {
  return Ri[t];
}
function _f(t) {
  return pi(t).map((e) => {
    const n = go(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Ni(t) {
  return t == null ? !1 : pi(t).some(
    (e) => {
      var n;
      return (n = go(e)) == null ? void 0 : n.size;
    }
  );
}
function bf(t, e) {
  return Promise.all(
    e.map((i) => (gf(t, i), i().then((r) => r.default || r)))
  ).then((i) => po(t, ...i));
}
const ri = {};
function _o(t) {
  if (!Ni(t))
    return t in ri ? ri[t] : Promise.resolve();
  const e = _f(t);
  return ri[t] = Promise.all(
    e.map(
      ([n, i]) => bf(n, i)
    )
  ).then(() => {
    if (Ni(t))
      return _o(t);
    delete ri[t];
  }), ri[t];
}
var Ls = Object.getOwnPropertySymbols, vf = Object.prototype.hasOwnProperty, If = Object.prototype.propertyIsEnumerable, Ef = (t, e) => {
  var n = {};
  for (var i in t)
    vf.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Ls)
    for (var i of Ls(t))
      e.indexOf(i) < 0 && If.call(t, i) && (n[i] = t[i]);
  return n;
};
const Af = {
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
    ).join('", "')}".${Ni(bn()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Cf = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Af,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ai = Cf;
function Zn() {
  return ai;
}
function Sf(t) {
  const e = t, { formats: n } = e, i = Ef(e, ["formats"]);
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
const Ir = Tt(!1);
var Tf = Object.defineProperty, Lf = Object.defineProperties, Of = Object.getOwnPropertyDescriptors, Os = Object.getOwnPropertySymbols, Rf = Object.prototype.hasOwnProperty, Mf = Object.prototype.propertyIsEnumerable, Rs = (t, e, n) => e in t ? Tf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Df = (t, e) => {
  for (var n in e || (e = {}))
    Rf.call(e, n) && Rs(t, n, e[n]);
  if (Os)
    for (var n of Os(e))
      Mf.call(e, n) && Rs(t, n, e[n]);
  return t;
}, kf = (t, e) => Lf(t, Of(e));
let qr;
const Pi = Tt(null);
function Ms(t) {
  return t.split("-").map((e, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function pi(t, e = Zn().fallbackLocale) {
  const n = Ms(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Ms(e)])] : n;
}
function bn() {
  return qr ?? void 0;
}
Pi.subscribe((t) => {
  qr = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Nf = (t) => {
  if (t && pf(t) && Ni(t)) {
    const { loadingDelay: e } = Zn();
    let n;
    return typeof window < "u" && bn() != null && e ? n = window.setTimeout(
      () => Ir.set(!0),
      e
    ) : Ir.set(!0), _o(t).then(() => {
      Pi.set(t);
    }).finally(() => {
      clearTimeout(n), Ir.set(!1);
    });
  }
  return Pi.set(t);
}, Mn = kf(Df({}, Pi), {
  set: Nf
}), Pf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Bi = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in e ? e[r] : e[r] = t(i);
  };
};
var Hf = Object.defineProperty, Hi = Object.getOwnPropertySymbols, bo = Object.prototype.hasOwnProperty, vo = Object.prototype.propertyIsEnumerable, Ds = (t, e, n) => e in t ? Hf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ns = (t, e) => {
  for (var n in e || (e = {}))
    bo.call(e, n) && Ds(t, n, e[n]);
  if (Hi)
    for (var n of Hi(e))
      vo.call(e, n) && Ds(t, n, e[n]);
  return t;
}, $n = (t, e) => {
  var n = {};
  for (var i in t)
    bo.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Hi)
    for (var i of Hi(t))
      e.indexOf(i) < 0 && vo.call(t, i) && (n[i] = t[i]);
  return n;
};
const hi = (t, e) => {
  const { formats: n } = Zn();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Ff = Bi(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = $n(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = hi("number", i)), new Intl.NumberFormat(n, r);
  }
), wf = Bi(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = $n(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = hi("date", i) : Object.keys(r).length === 0 && (r = hi("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), Uf = Bi(
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
    locale: n = bn()
  } = e, i = $n(e, [
    "locale"
  ]);
  return Ff(ns({ locale: n }, i));
}, Vf = (t = {}) => {
  var e = t, {
    locale: n = bn()
  } = e, i = $n(e, [
    "locale"
  ]);
  return wf(ns({ locale: n }, i));
}, Gf = (t = {}) => {
  var e = t, {
    locale: n = bn()
  } = e, i = $n(e, [
    "locale"
  ]);
  return Uf(ns({ locale: n }, i));
}, jf = Bi(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = bn()) => new fo(t, e, Zn().formats, {
    ignoreTag: Zn().ignoreTag
  })
), qf = (t, e = {}) => {
  var n, i, r, s;
  let a = e;
  typeof t == "object" && (a = t, t = a.id);
  const {
    values: l,
    locale: o = bn(),
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
}, Wf = (t, e) => Gf(e).format(t), zf = (t, e) => Vf(e).format(t), Kf = (t, e) => Bf(e).format(t), Xf = (t, e = bn()) => ho(t, e), Yf = xn([Mn, mi], () => qf);
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
var Er = Io(function(t) {
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
var is = function() {
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
          s = g instanceof Er ? g.errors : [g];
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
              s = s ?? [], g instanceof Er ? s = _n(_n([], Kn(s)), Kn(g.errors)) : s.push(g);
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
        throw new Er(s);
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
is.EMPTY;
function Eo(t) {
  return t instanceof is || t && "closed" in t && yt(t.remove) && yt(t.add) && yt(t.unsubscribe);
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
    return setTimeout.apply(void 0, _n([t, e], Kn(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Ao(t) {
  Jf.setTimeout(function() {
    throw t;
  });
}
function Ps() {
}
function xf(t) {
  t();
}
var rs = function(t) {
  ot(e, t);
  function e(n) {
    var i = t.call(this) || this;
    return i.isStopped = !1, n ? (i.destination = n, Eo(n) && n.add(i)) : i.destination = td, i;
  }
  return e.create = function(n, i, r) {
    return new Wr(n, i, r);
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
}(is), $f = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (i) {
        Ei(i);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (i) {
        Ei(i);
      }
    else
      Ei(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ei(n);
      }
  }, t;
}(), Wr = function(t) {
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
}(rs);
function Ei(t) {
  Ao(t);
}
function ed(t) {
  throw t;
}
var td = {
  closed: !0,
  next: Ps,
  error: ed,
  complete: Ps
}, ss = function() {
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
    var r = this, s = rd(e) ? e : new Wr(e, n, i);
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
      var a = new Wr({
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
  }, t.prototype[ss] = function() {
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
  return t && t instanceof rs || id(t) && Eo(t);
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
}(rs), ad = new Qt(function(t) {
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
  return yt(t[ss]);
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
  return bc(this, arguments, function() {
    var n, i, r, s;
    return es(this, function(a) {
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
    var n = t[ss]();
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
    }).then(null, Ao);
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
    _d(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function gd(t) {
  return No(Do(t));
}
function _d(t, e) {
  var n, i, r, s;
  return Ya(this, void 0, void 0, function() {
    var a, l;
    return es(this, function(o) {
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
function bd(t, e) {
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
function Ed(t, e) {
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
function Ad(t, e) {
  return Fo(Do(t), e);
}
function yd(t, e) {
  if (t != null) {
    if (To(t))
      return bd(t, e);
    if (Co(t))
      return Id(t, e);
    if (So(t))
      return vd(t, e);
    if (Lo(t))
      return Fo(t, e);
    if (Mo(t))
      return Ed(t, e);
    if (ko(t))
      return Ad(t, e);
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
function wt(t, e) {
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
    gi(n(g, c++)).subscribe(Qn(e, function(E) {
      e.next(E);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var E = function() {
            var b = o.shift();
            a || m(b);
          }; o.length && u < i; )
            E();
          d();
        } catch (b) {
          e.error(b);
        }
    }));
  };
  return t.subscribe(Qn(e, h, function() {
    f = !0, d();
  })), function() {
  };
}
function zr(t, e, n) {
  return n === void 0 && (n = 1 / 0), yt(e) ? zr(function(i, r) {
    return wt(function(s, a) {
      return e(i, s, r, a);
    })(gi(t(i, r)));
  }, n) : (typeof e == "number" && (n = e), ei(function(i, r) {
    return Sd(i, r, t, n);
  }));
}
function Uo(t, e) {
  return yt(e) ? zr(t, e, 1) : zr(t, 1);
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
}(), Fi = Io(function(t) {
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
    return Fi.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Fi.prototype), t;
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
var Hd = wt(function(t) {
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
}(), wd = "upload", Fs = "download", Ar = "loadstart", yr = "progress", ws = "load";
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
        u = new URLSearchParams(c[1]), new URLSearchParams(s).forEach(function(X, k) {
          return u.set(k, X);
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
      var E = (i = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && i !== void 0 ? i : "";
      E && (f[p] = E);
    }
    var b = Bd(a, f), S = ce(ce({}, r), {
      url: o,
      headers: f,
      body: b
    }), C;
    C = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var M = t.progressSubscriber, D = t.includeDownloadProgress, _ = D === void 0 ? !1 : D, O = t.includeUploadProgress, w = O === void 0 ? !1 : O, y = function(X, k) {
        C.addEventListener(X, function() {
          var R, V = k();
          (R = M == null ? void 0 : M.error) === null || R === void 0 || R.call(M, V), e.error(V);
        });
      };
      y("timeout", function() {
        return new Rd(C, S);
      }), y("abort", function() {
        return new Fi("aborted", C, S);
      });
      var v = function(X, k) {
        return new Od(k, C, S, X + "_" + k.type);
      }, I = function(X, k, R) {
        X.addEventListener(k, function(V) {
          e.next(v(R, V));
        });
      };
      w && [Ar, yr, ws].forEach(function(X) {
        return I(C.upload, X, wd);
      }), M && [Ar, yr].forEach(function(X) {
        return C.upload.addEventListener(X, function(k) {
          var R;
          return (R = M == null ? void 0 : M.next) === null || R === void 0 ? void 0 : R.call(M, k);
        });
      }), _ && [Ar, yr].forEach(function(X) {
        return I(C, X, Fs);
      });
      var T = function(X) {
        var k = "ajax error" + (X ? " " + X : "");
        e.error(new Fi(k, C, S));
      };
      C.addEventListener("error", function(X) {
        var k;
        (k = M == null ? void 0 : M.error) === null || k === void 0 || k.call(M, X), T();
      }), C.addEventListener(ws, function(X) {
        var k, R, V = C.status;
        if (V < 400) {
          (k = M == null ? void 0 : M.complete) === null || k === void 0 || k.call(M);
          var ue = void 0;
          try {
            ue = v(Fs, X);
          } catch (Ne) {
            e.error(Ne);
            return;
          }
          e.next(ue), e.complete();
        } else
          (R = M == null ? void 0 : M.error) === null || R === void 0 || R.call(M, X), T(V);
      });
    }
    var P = S.user, W = S.method, j = S.async;
    P ? C.open(W, o, j, P, S.password) : C.open(W, o, j), j && (C.timeout = S.timeout, C.responseType = S.responseType), "withCredentials" in C && (C.withCredentials = S.withCredentials);
    for (var d in f)
      f.hasOwnProperty(d) && C.setRequestHeader(d, f[d]);
    return b ? C.send(b) : C.send(), function() {
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
function ls(t, e) {
  return Vd.call(t) === "[object " + e + "]";
}
function Gd(t) {
  return ls(t, "ArrayBuffer");
}
function jd(t) {
  return ls(t, "File");
}
function qd(t) {
  return ls(t, "Blob");
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
      wt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      Uo(
        (i) => vn(i).pipe(
          wt((r) => (this.middleware.filter((s) => s.post).forEach((s) => r = s.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      wt((i) => {
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
).join("&"), Ai = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class eh extends xd {
  retrieveDataResourceByVersion({ id: e, version: n }, i) {
    Ai(e, "id", "retrieveDataResourceByVersion"), Ai(n, "version", "retrieveDataResourceByVersion");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Ln(e)).replace("{version}", Ln(n)),
      method: "GET",
      headers: r,
      responseType: "blob"
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ai(e, "id", "retrieveDataResourceHistory");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Ln(e)),
      method: "GET",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ai(e, "dataResourceSearch", "searchForResources");
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
class as {
  constructor(e, n, i, r, s, a, l, o, u) {
    this.uuid = e, this.name = n, this.author = i, this.type = r, this.changedAt = s, this.version = a, this.available = l, this.deleted = o, this.location = u;
  }
  static from(e) {
    return new as(
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
      wt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      Uo(
        (i) => vn(i).pipe(
          wt((r) => (this.middleware.filter((s) => s.post).forEach((s) => r = s.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      wt((i) => {
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
class os {
  constructor(e, n, i, r, s) {
    this.uuid = s, this.key = e, this.name = n, this.description = i, this.assignedResources = r;
  }
  static from(e) {
    return new os(e.key, e.name, e.description, e.assignedResources, e.uuid);
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
      wt((n) => n || []),
      wt((n) => n.map((i) => os.from(i)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(wt(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(wt(() => {
    }));
  }
  searchResources(e) {
    return console.log(e), this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      wt((n) => (console.log(n), n.results)),
      wt(
        (n) => n.map((i) => as.from(i))
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
    gs(this, un, Tt([]));
  }
  get store() {
    return En(this, un);
  }
  set(e) {
    En(this, un).set(e);
  }
  update(e) {
    En(this, un).update((n) => n.map((i) => i.uuid === e.uuid ? e : i));
  }
  add(e) {
    En(this, un).update((n) => [...n, e]);
  }
  remove(e) {
    En(this, un).update((n) => n.filter((i) => i.uuid !== e));
  }
  findById(e) {
    return fu(En(this, un)).find((n) => n.uuid === e);
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
function Ie(t, e, n, i = { bubbles: !0 }, r = !1) {
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
        const E = u.split(":");
        let b = "";
        for (let S = 0; S < E.length; S++)
          b += S === E.length - 1 ? ":" + E[S] : E[S].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${b.split("$")[0]}.`), u = b;
      }
      if (m) {
        const E = u.split(d ? ":" : "$");
        u = E[0];
        const b = E.slice(1).reduce((S, C) => (S[C] = !0, S), {});
        b.passive && (f = f || {}, f.passive = !0), b.nonpassive && (f = f || {}, f.passive = !1), b.capture && (f = f || {}, f.capture = !0), b.once && (f = f || {}, f.once = !0), b.preventDefault && (c = ch(c)), b.stopPropagation && (c = fh(c)), b.stopImmediatePropagation && (c = dh(c)), b.self && (c = hh(r, c)), b.trusted && (c = mh(c));
      }
      const g = Vs(r, u, c, f), p = () => {
        g();
        const E = s.indexOf(p);
        E > -1 && s.splice(E, 1);
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
function Je(t, e) {
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
var Vi = (
  /** @class */
  function() {
    function t(e, n) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, _n([], Kn(i))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
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
function _h(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (us(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function us(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function bh(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: _h,
  estimateScrollWidth: bh,
  matches: us
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
], Ci = [], ji = (
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
var wi = (
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
          return us(n.root, ":active");
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
      return new ji(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(Vi)
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
}, Ht = /* @__PURE__ */ new Set();
Ht.add(we.BACKSPACE);
Ht.add(we.ENTER);
Ht.add(we.SPACEBAR);
Ht.add(we.PAGE_UP);
Ht.add(we.PAGE_DOWN);
Ht.add(we.END);
Ht.add(we.HOME);
Ht.add(we.ARROW_LEFT);
Ht.add(we.ARROW_UP);
Ht.add(we.ARROW_RIGHT);
Ht.add(we.ARROW_DOWN);
Ht.add(we.DELETE);
Ht.add(we.ESCAPE);
Ht.add(we.TAB);
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
}, Ft = /* @__PURE__ */ new Map();
Ft.set(Ut.BACKSPACE, we.BACKSPACE);
Ft.set(Ut.ENTER, we.ENTER);
Ft.set(Ut.SPACEBAR, we.SPACEBAR);
Ft.set(Ut.PAGE_UP, we.PAGE_UP);
Ft.set(Ut.PAGE_DOWN, we.PAGE_DOWN);
Ft.set(Ut.END, we.END);
Ft.set(Ut.HOME, we.HOME);
Ft.set(Ut.ARROW_LEFT, we.ARROW_LEFT);
Ft.set(Ut.ARROW_UP, we.ARROW_UP);
Ft.set(Ut.ARROW_RIGHT, we.ARROW_RIGHT);
Ft.set(Ut.ARROW_DOWN, we.ARROW_DOWN);
Ft.set(Ut.DELETE, we.DELETE);
Ft.set(Ut.ESCAPE, we.ESCAPE);
Ft.set(Ut.TAB, we.TAB);
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
  if (Ht.has(e))
    return e;
  var n = Ft.get(t.keyCode);
  return n || we.UNKNOWN;
}
function Eh(t) {
  return fn.has(vt(t));
}
const { applyPassive: Si } = qo, { matches: Ah } = Gi;
function Dt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: r = !1, color: s, active: a, rippleElement: l, eventTarget: o, activeTarget: u, addClass: c = (m) => t.classList.add(m), removeClass: f = (m) => t.classList.remove(m), addStyle: d = (m, g) => t.style.setProperty(m, g), initPromise: h = Promise.resolve() } = {}) {
  let m, g = qe("SMUI:addLayoutListener"), p, E = a, b = o, S = u;
  function C() {
    n ? (c("mdc-ripple-surface"), s === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : s === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), m && E !== a && (E = a, a ? m.activate() : a === !1 && m.deactivate()), e && !m ? (m = new ji({
      addClass: c,
      browserSupportsCssVars: () => jo(window),
      computeBoundingRect: () => (l || t).getBoundingClientRect(),
      containsEventTarget: (D) => t.contains(D),
      deregisterDocumentInteractionHandler: (D, _) => document.documentElement.removeEventListener(D, _, Si()),
      deregisterInteractionHandler: (D, _) => (o || t).removeEventListener(D, _, Si()),
      deregisterResizeHandler: (D) => window.removeEventListener("resize", D),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? Ah(u || t, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (D, _) => document.documentElement.addEventListener(D, _, Si()),
      registerInteractionHandler: (D, _) => (o || t).addEventListener(D, _, Si()),
      registerResizeHandler: (D) => window.addEventListener("resize", D),
      removeClass: f,
      updateCssVariable: d
    }), h.then(() => {
      m && (m.init(), m.setUnbounded(i));
    })) : m && !e && h.then(() => {
      m && (m.destroy(), m = void 0);
    }), m && (b !== o || S !== u) && (b = o, S = u, m.destroy(), requestAnimationFrame(() => {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (_) => t.classList.add(_), removeClass: (_) => t.classList.remove(_), addStyle: (_, O) => t.style.setProperty(_, O), initPromise: Promise.resolve() }, D)), C();
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
  ), i = Ae(
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
      4096) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? ye(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
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
      u = q(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = q(u, de(r, [
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
      64 && be(
        /*context*/
        l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        l[7]
      ) },
      o & /*$$restProps*/
      256 && be(
        /*$$restProps*/
        l[8]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[11](e)), {
    c() {
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[11](e), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? de(r, [
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
          64 && be(
            /*context*/
            l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            l[7]
          ) },
          o & /*$$restProps*/
          256 && be(
            /*$$restProps*/
            l[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[11](null), e && $(e, l);
    }
  };
}
function Sh(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: f = Nt } = e, { tag: d = f === Nt ? "span" : void 0 } = e;
  const h = qe("SMUI:label:context"), m = qe("SMUI:label:tabindex");
  function g() {
    return c.getElement();
  }
  function p(E) {
    se[E ? "unshift" : "push"](() => {
      c = E, n(4, c);
    });
  }
  return t.$$set = (E) => {
    e = q(q({}, e), $e(E)), n(8, r = he(e, i)), "use" in E && n(0, o = E.use), "class" in E && n(1, u = E.class), "component" in E && n(2, f = E.component), "tag" in E && n(3, d = E.tag), "$$scope" in E && n(12, a = E.$$scope);
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
class Th extends Le {
  constructor(e) {
    super(), Te(this, e, Sh, Ch, _e, {
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
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Ae(
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
      8192) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? ye(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Oh(t) {
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
      class: re({
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
  var s = (
    /*component*/
    t[3]
  );
  function a(l, o) {
    let u = {
      $$slots: { default: [Lh] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = q(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (u = q(u, de(r, [
      o & /*tag*/
      16 && { tag: (
        /*tag*/
        l[4]
      ) },
      o & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          l[6],
          .../*use*/
          l[0]
        ]
      },
      o & /*className, context, on*/
      262 && {
        class: re({
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
      o & /*svg*/
      128 && be(
        /*svg*/
        l[7] ? { focusable: "false", tabindex: "-1" } : {}
      ),
      o & /*$$restProps*/
      512 && be(
        /*$$restProps*/
        l[9]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[12](e)), {
    c() {
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      8 && s !== (s = /*component*/
      l[3])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[12](e), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? de(r, [
          o & /*tag*/
          16 && { tag: (
            /*tag*/
            l[4]
          ) },
          o & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              l[6],
              .../*use*/
              l[0]
            ]
          },
          o & /*className, context, on*/
          262 && {
            class: re({
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
          o & /*svg*/
          128 && be(
            /*svg*/
            l[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          o & /*$$restProps*/
          512 && be(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[12](null), e && $(e, l);
    }
  };
}
function Rh(t, e, n) {
  const i = ["use", "class", "on", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { on: c = !1 } = e, f, { component: d = Nt } = e, { tag: h = d === Nt ? "i" : void 0 } = e;
  const m = d === Uh, g = qe("SMUI:icon:context");
  function p() {
    return f.getElement();
  }
  function E(b) {
    se[b ? "unshift" : "push"](() => {
      f = b, n(5, f);
    });
  }
  return t.$$set = (b) => {
    e = q(q({}, e), $e(b)), n(9, r = he(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "on" in b && n(2, c = b.on), "component" in b && n(3, d = b.component), "tag" in b && n(4, h = b.tag), "$$scope" in b && n(13, a = b.$$scope);
  }, [
    o,
    u,
    c,
    d,
    h,
    f,
    l,
    m,
    g,
    r,
    p,
    s,
    E,
    a
  ];
}
class Mh extends Le {
  constructor(e) {
    super(), Te(this, e, Rh, Oh, _e, {
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
function Dh(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i, r = (
    /*tag*/
    t[1] && Cr(t)
  );
  return {
    c() {
      r && r.c(), n = Ze();
    },
    m(s, a) {
      r && r.m(s, a), B(s, n, a), i = !0;
    },
    p(s, a) {
      /*tag*/
      s[1] ? e ? _e(
        e,
        /*tag*/
        s[1]
      ) ? (r.d(1), r = Cr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : r.p(s, a) : (r = Cr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      s[1]);
    },
    i(s) {
      i || (A(r, s), i = !0);
    },
    o(s) {
      L(r, s), i = !1;
    },
    d(s) {
      s && U(n), r && r.d(s);
    }
  };
}
function kh(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i = (
    /*tag*/
    t[1] && Sr(t)
  );
  return {
    c() {
      i && i.c(), n = Ze();
    },
    m(r, s) {
      i && i.m(r, s), B(r, n, s);
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? _e(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Sr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : i.p(r, s) : (i = Sr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: it,
    o: it,
    d(r) {
      r && U(n), i && i.d(r);
    }
  };
}
function Nh(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Ae(
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
    u = q(u, o[c]);
  return {
    c() {
      e = at("svg"), l && l.c(), Mi(e, u);
    },
    m(c, f) {
      B(c, e, f), l && l.m(e, null), t[9](e), i = !0, r || (s = [
        fe(n = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      l && l.p && (!i || f & /*$$scope*/
      128) && Ce(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? ye(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Se(
          /*$$scope*/
          c[7]
        ),
        null
      ), Mi(e, u = de(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(l, c), i = !0);
    },
    o(c) {
      L(l, c), i = !1;
    },
    d(c) {
      c && U(e), l && l.d(c), t[9](null), r = !1, Ye(s);
    }
  };
}
function Cr(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Ae(
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
    u = q(u, o[c]);
  return {
    c() {
      e = ee(
        /*tag*/
        t[1]
      ), l && l.c(), Di(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(c, f) {
      B(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        fe(n = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      l && l.p && (!i || f & /*$$scope*/
      128) && Ce(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? ye(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Se(
          /*$$scope*/
          c[7]
        ),
        null
      ), Di(
        /*tag*/
        c[1]
      )(e, u = de(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(l, c), i = !0);
    },
    o(c) {
      L(l, c), i = !1;
    },
    d(c) {
      c && U(e), l && l.d(c), t[11](null), r = !1, Ye(s);
    }
  };
}
function Sr(t) {
  let e, n, i, r, s = [
    /*$$restProps*/
    t[5]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = q(a, s[l]);
  return {
    c() {
      e = ee(
        /*tag*/
        t[1]
      ), Di(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(l, o) {
      B(l, e, o), t[10](e), i || (r = [
        fe(n = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], i = !0);
    },
    p(l, o) {
      Di(
        /*tag*/
        l[1]
      )(e, a = de(s, [o & /*$$restProps*/
      32 && /*$$restProps*/
      l[5]])), n && ge(n.update) && o & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        l[0]
      );
    },
    d(l) {
      l && U(e), t[10](null), i = !1, Ye(r);
    }
  };
}
function Ph(t) {
  let e, n, i, r;
  const s = [Nh, kh, Dh], a = [];
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
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (A(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function Hh(t, e, n) {
  let i;
  const r = ["use", "tag", "getElement"];
  let s = he(e, r), { $$slots: a = {}, $$scope: l } = e, { use: o = [] } = e, { tag: u } = e;
  const c = rt(Qe());
  let f;
  function d() {
    return f;
  }
  function h(p) {
    se[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  function m(p) {
    se[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  function g(p) {
    se[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  return t.$$set = (p) => {
    e = q(q({}, e), $e(p)), n(5, s = he(e, r)), "use" in p && n(0, o = p.use), "tag" in p && n(1, u = p.tag), "$$scope" in p && n(7, l = p.$$scope);
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
class Nt extends Le {
  constructor(e) {
    super(), Te(this, e, Hh, Ph, _e, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Fh(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[6].default
  ), l = Ae(
    a,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let o = [
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = q(u, o[c]);
  return {
    c() {
      e = at("svg"), l && l.c(), Mi(e, u);
    },
    m(c, f) {
      B(c, e, f), l && l.m(e, null), t[7](e), i = !0, r || (s = [
        fe(n = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[2].call(null, e)
        )
      ], r = !0);
    },
    p(c, [f]) {
      l && l.p && (!i || f & /*$$scope*/
      32) && Ce(
        l,
        a,
        c,
        /*$$scope*/
        c[5],
        i ? ye(
          a,
          /*$$scope*/
          c[5],
          f,
          null
        ) : Se(
          /*$$scope*/
          c[5]
        ),
        null
      ), Mi(e, u = de(o, [f & /*$$restProps*/
      8 && /*$$restProps*/
      c[3]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(l, c), i = !0);
    },
    o(c) {
      L(l, c), i = !1;
    },
    d(c) {
      c && U(e), l && l.d(c), t[7](null), r = !1, Ye(s);
    }
  };
}
function wh(t, e, n) {
  const i = ["use", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: l = [] } = e;
  const o = rt(Qe());
  let u;
  function c() {
    return u;
  }
  function f(d) {
    se[d ? "unshift" : "push"](() => {
      u = d, n(1, u);
    });
  }
  return t.$$set = (d) => {
    e = q(q({}, e), $e(d)), n(3, r = he(e, i)), "use" in d && n(0, l = d.use), "$$scope" in d && n(5, a = d.$$scope);
  }, [
    l,
    u,
    o,
    r,
    c,
    a,
    s,
    f
  ];
}
class Uh extends Le {
  constructor(e) {
    super(), Te(this, e, wh, Fh, _e, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Bh(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = Ae(
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
      8) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[3],
        e ? ye(
          n,
          /*$$scope*/
          r[3],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Vh(t, e, n) {
  let i, { $$slots: r = {}, $$scope: s } = e, { key: a } = e, { value: l } = e;
  const o = Tt(l);
  return st(t, o, (u) => n(5, i = u)), ze(a, o), en(() => {
    o.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, a = u.key), "value" in u && n(2, l = u.value), "$$scope" in u && n(3, s = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && jt(o, i = l, i);
  }, [o, a, l, s, r];
}
class Jn extends Le {
  constructor(e) {
    super(), Te(this, e, Vh, Bh, _e, { key: 1, value: 2 });
  }
}
function Ws(t) {
  let e;
  return {
    c() {
      e = ee("div"), N(e, "class", "mdc-button__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function Gh(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[28].default
  ), a = Ae(
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
      e = ee("div"), n = oe(), a && a.c(), l && l.c(), i = Ze(), N(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      B(o, e, u), B(o, n, u), a && a.m(o, u), l && l.m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && Ce(
        a,
        s,
        o,
        /*$$scope*/
        o[30],
        r ? ye(
          s,
          /*$$scope*/
          o[30],
          u,
          null
        ) : Se(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? l || (l = Ws(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (A(a, o), r = !0);
    },
    o(o) {
      L(a, o), r = !1;
    },
    d(o) {
      o && (U(e), U(n), U(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function jh(t) {
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
      ).map(Tr).concat([
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
      $$slots: { default: [Gh] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = q(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = q(u, de(r, [
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
        ).map(Tr).concat([
          /*style*/
          l[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && be(
        /*actionProp*/
        l[16]
      ),
      o[0] & /*defaultProp*/
      32768 && be(
        /*defaultProp*/
        l[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && be(
        /*secondaryProp*/
        l[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        l[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && be(
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
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      512 && s !== (s = /*component*/
      l[9])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[29](e), e.$on(
          "click",
          /*handleClick*/
          l[22]
        ), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? de(r, [
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
            ).map(Tr).concat([
              /*style*/
              l[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && be(
            /*actionProp*/
            l[16]
          ),
          o[0] & /*defaultProp*/
          32768 && be(
            /*defaultProp*/
            l[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && be(
            /*secondaryProp*/
            l[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            l[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && be(
            /*$$restProps*/
            l[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[29](null), e && $(e, l);
    }
  };
}
const Tr = ([t, e]) => `${t}: ${e};`;
function qh(t, e, n) {
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
  let l = he(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = rt(Qe());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: g = "primary" } = e, { variant: p = "text" } = e, { touch: E = !1 } = e, { href: b = void 0 } = e, { action: S = "close" } = e, { defaultAction: C = !1 } = e, { secondary: M = !1 } = e, D, _ = {}, O = {}, w = qe("SMUI:button:context"), { component: y = Nt } = e, { tag: v = y === Nt ? b == null ? "button" : "a" : void 0 } = e, I = l.disabled;
  ze("SMUI:label:context", "button"), ze("SMUI:icon:context", "button");
  function T(R) {
    _[R] || n(12, _[R] = !0, _);
  }
  function P(R) {
    (!(R in _) || _[R]) && n(12, _[R] = !1, _);
  }
  function W(R, V) {
    O[R] != V && (V === "" || V == null ? (delete O[R], n(13, O)) : n(13, O[R] = V, O));
  }
  function j() {
    w === "banner" && Ie(X(), M ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function X() {
    return D.getElement();
  }
  function k(R) {
    se[R ? "unshift" : "push"](() => {
      D = R, n(11, D);
    });
  }
  return t.$$set = (R) => {
    n(31, e = q(q({}, e), $e(R))), n(23, l = he(e, a)), "use" in R && n(0, f = R.use), "class" in R && n(1, d = R.class), "style" in R && n(2, h = R.style), "ripple" in R && n(3, m = R.ripple), "color" in R && n(4, g = R.color), "variant" in R && n(5, p = R.variant), "touch" in R && n(6, E = R.touch), "href" in R && n(7, b = R.href), "action" in R && n(24, S = R.action), "defaultAction" in R && n(25, C = R.defaultAction), "secondary" in R && n(8, M = R.secondary), "component" in R && n(9, y = R.component), "tag" in R && n(10, v = R.tag), "$$scope" in R && n(30, u = R.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = w === "dialog:action" && S != null ? { "data-mdc-dialog-action": S } : { action: e.action }), n(15, r = w === "dialog:action" && C ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, s = w === "banner" ? {} : { secondary: e.secondary }), I !== l.disabled) {
      if (D) {
        const R = X();
        "blur" in R && R.blur();
      }
      n(27, I = l.disabled);
    }
  }, e = $e(e), [
    f,
    d,
    h,
    m,
    g,
    p,
    E,
    b,
    M,
    y,
    v,
    D,
    _,
    O,
    s,
    r,
    i,
    c,
    w,
    T,
    P,
    W,
    j,
    l,
    S,
    C,
    X,
    I,
    o,
    k,
    u
  ];
}
class Wh extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      qh,
      jh,
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
function zh(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), i = Ae(
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
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      64) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[6],
        e ? ye(
          n,
          /*$$scope*/
          r[6],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Kh(t) {
  let e, n;
  return e = new Wh({
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
      $$slots: { default: [zh] },
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
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const s = {};
      r & /*variant*/
      4 && (s.variant = /*variant*/
      t[2]), r & /*disabled*/
      2 && (s.disabled = /*disabled*/
      t[1]), r & /*isAbortAction, backgroundColor*/
      24 && (s.style = /*isAbortAction*/
      t[3] ? "background-color: #ff3e00;" : "background-color: " + /*backgroundColor*/
      t[4]), r & /*$$scope*/
      64 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Xh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: s = () => {
  } } = e, { disabled: a = !1 } = e, { variant: l = "default" } = e, { isAbortAction: o = !1 } = e, { backgroundColor: u = void 0 } = e;
  return t.$$set = (c) => {
    "callback" in c && n(0, s = c.callback), "disabled" in c && n(1, a = c.disabled), "variant" in c && n(2, l = c.variant), "isAbortAction" in c && n(3, o = c.isAbortAction), "backgroundColor" in c && n(4, u = c.backgroundColor), "$$scope" in c && n(6, r = c.$$scope);
  }, [s, a, l, o, u, i, r];
}
class cs extends Le {
  constructor(e) {
    super(), Te(this, e, Xh, Kh, _e, {
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
var Yh = (
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
      e = ee("div"), N(e, "class", "mdc-icon-button__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function Zh(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[33].default
  ), a = Ae(
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
      e = ee("div"), n = oe(), a && a.c(), l && l.c(), i = Ze(), N(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      B(o, e, u), B(o, n, u), a && a.m(o, u), l && l.m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && Ce(
        a,
        s,
        o,
        /*$$scope*/
        o[37],
        r ? ye(
          s,
          /*$$scope*/
          o[37],
          u,
          null
        ) : Se(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? l || (l = zs(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (A(a, o), r = !0);
    },
    o(o) {
      L(a, o), r = !1;
    },
    d(o) {
      o && (U(e), U(n), U(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function Qh(t) {
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
      ).map(Lr).concat([
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
      $$slots: { default: [Zh] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = q(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = q(u, de(r, [
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
        ).map(Lr).concat([
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
      2097152 && be(
        /*actionProp*/
        l[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && be(
        /*internalAttrs*/
        l[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && be(
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
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
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
        ), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? de(r, [
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
            ).map(Lr).concat([
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
          2097152 && be(
            /*actionProp*/
            l[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && be(
            /*internalAttrs*/
            l[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && be(
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
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[34](null), e && $(e, l);
    }
  };
}
const Lr = ([t, e]) => `${t}: ${e};`;
function Jh(t, e, n) {
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
  let s = he(e, r), { $$slots: a = {}, $$scope: l } = e;
  const o = rt(Qe());
  let u = () => {
  };
  function c(z) {
    return z === u;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: g = void 0 } = e, { toggle: p = !1 } = e, { pressed: E = u } = e, { ariaLabelOn: b = void 0 } = e, { ariaLabelOff: S = void 0 } = e, { touch: C = !1 } = e, { displayFlex: M = !0 } = e, { size: D = "normal" } = e, { href: _ = void 0 } = e, { action: O = void 0 } = e, w, y, v = {}, I = {}, T = {}, P = qe("SMUI:icon-button:context"), W = qe("SMUI:icon-button:aria-describedby"), { component: j = Nt } = e, { tag: X = j === Nt ? _ == null ? "button" : "a" : void 0 } = e, k = s.disabled;
  ze("SMUI:icon:context", "icon-button");
  let R = null;
  en(() => {
    y && y.destroy();
  });
  function V(z) {
    return z in v ? v[z] : Re().classList.contains(z);
  }
  function ue(z) {
    v[z] || n(18, v[z] = !0, v);
  }
  function Ne(z) {
    (!(z in v) || v[z]) && n(18, v[z] = !1, v);
  }
  function Ee(z, We) {
    I[z] != We && (We === "" || We == null ? (delete I[z], n(19, I)) : n(19, I[z] = We, I));
  }
  function Xe(z) {
    var We;
    return z in T ? (We = T[z]) !== null && We !== void 0 ? We : null : Re().getAttribute(z);
  }
  function K(z, We) {
    T[z] !== We && n(20, T[z] = We, T);
  }
  function J(z) {
    n(0, E = z.isOn);
  }
  function Re() {
    return w.getElement();
  }
  function Me(z) {
    se[z ? "unshift" : "push"](() => {
      w = z, n(16, w);
    });
  }
  const He = () => y && y.handleClick(), ie = () => P === "top-app-bar:navigation" && Ie(Re(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (z) => {
    e = q(q({}, e), $e(z)), n(29, s = he(e, r)), "use" in z && n(1, f = z.use), "class" in z && n(2, d = z.class), "style" in z && n(3, h = z.style), "ripple" in z && n(4, m = z.ripple), "color" in z && n(5, g = z.color), "toggle" in z && n(30, p = z.toggle), "pressed" in z && n(0, E = z.pressed), "ariaLabelOn" in z && n(6, b = z.ariaLabelOn), "ariaLabelOff" in z && n(7, S = z.ariaLabelOff), "touch" in z && n(8, C = z.touch), "displayFlex" in z && n(9, M = z.displayFlex), "size" in z && n(10, D = z.size), "href" in z && n(11, _ = z.href), "action" in z && n(12, O = z.action), "component" in z && n(13, j = z.component), "tag" in z && n(14, X = z.tag), "$$scope" in z && n(37, l = z.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*action*/
    4096 && n(21, i = (() => {
      if (P === "data-table:pagination")
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
        return P === "dialog:header" || P === "dialog:sheet" ? { "data-mdc-dialog-action": O } : { action: O };
    })()), k !== s.disabled) {
      if (w) {
        const z = Re();
        "blur" in z && z.blur();
      }
      n(31, k = s.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && w && Re() && p !== R && (p && !y ? (n(17, y = new Yh({
      addClass: ue,
      hasClass: V,
      notifyChange: (z) => {
        J(z), Ie(Re(), "SMUIIconButtonToggle:change", z, void 0, !0);
      },
      removeClass: Ne,
      getAttr: Xe,
      setAttr: K
    })), y.init()) : !p && y && (y.destroy(), n(17, y = void 0), n(18, v = {}), n(20, T = {})), n(32, R = p)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && y && !c(E) && y.isOn() !== E && y.toggle(E);
  }, [
    E,
    f,
    d,
    h,
    m,
    g,
    b,
    S,
    C,
    M,
    D,
    _,
    O,
    j,
    X,
    Re,
    w,
    y,
    v,
    I,
    T,
    i,
    o,
    c,
    P,
    W,
    ue,
    Ne,
    Ee,
    s,
    p,
    k,
    R,
    a,
    Me,
    He,
    ie,
    l
  ];
}
class xh extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      Jh,
      Qh,
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
function $h(t) {
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
    d(n) {
      n && U(e);
    }
  };
}
function em(t) {
  let e, n;
  return e = new Mh({
    props: {
      class: "material-icons",
      $$slots: { default: [$h] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, icon*/
      10 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function tm(t) {
  let e, n;
  return e = new xh({
    props: {
      disabled: (
        /*disabled*/
        t[2]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [em] },
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
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      t = i;
      const s = {};
      r & /*disabled*/
      4 && (s.disabled = /*disabled*/
      t[2]), r & /*$$scope, icon*/
      10 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function nm(t, e, n) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { disabled: s = !1 } = e;
  return t.$$set = (a) => {
    "callback" in a && n(0, i = a.callback), "icon" in a && n(1, r = a.icon), "disabled" in a && n(2, s = a.disabled);
  }, [i, r, s];
}
class im extends Le {
  constructor(e) {
    super(), Te(this, e, nm, tm, _e, { callback: 0, icon: 1, disabled: 2 });
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
var rm = {
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
var sm = (
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
        return rm;
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
var An = {
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
var lm = (
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
        return An;
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
      this.adapter.removeClass(An.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(An.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(An.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this.adapter.hasClass(An.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && i && (this.adapter.removeClass(An.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(An.LINE_RIPPLE_DEACTIVATING));
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
var am = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ks = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, om = {
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
var um = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return am;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return om;
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
var Or = {
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
}, cm = {
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
}, fm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], dm = [
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
var Ys = ["mousedown", "touchstart"], Zs = ["click", "keydown"], hm = (
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
        return cm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Or;
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
        return dm.indexOf(n) >= 0;
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
        return fm.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
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
        s && a ? this.adapter.setInputAttr(Or.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Or.ARIA_DESCRIBEDBY);
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
}, mm = {
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
var Js = ["click", "keydown"], pm = (
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
        return mm;
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
function gm(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[22].default
  ), c = Ae(
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
    d = q(d, f[h]);
  return {
    c() {
      e = ee("label"), c && c.c(), me(e, d);
    },
    m(h, m) {
      B(h, e, m), c && c.m(e, null), t[24](e), a = !0, l || (o = [
        fe(s = Je.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        fe(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], l = !0);
    },
    p(h, m) {
      c && c.p && (!a || m & /*$$scope*/
      2097152) && Ce(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? ye(
          u,
          /*$$scope*/
          h[21],
          m,
          null
        ) : Se(
          /*$$scope*/
          h[21]
        ),
        null
      ), me(e, d = de(f, [
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
      a || (A(c, h), a = !0);
    },
    o(h) {
      L(c, h), a = !1;
    },
    d(h) {
      h && U(e), c && c.d(h), t[24](null), l = !1, Ye(o);
    }
  };
}
function _m(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[22].default
  ), u = Ae(
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
    f = q(f, c[d]);
  return {
    c() {
      e = ee("span"), u && u.c(), me(e, f);
    },
    m(d, h) {
      B(d, e, h), u && u.m(e, null), t[23](e), s = !0, a || (l = [
        fe(r = Je.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        fe(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], a = !0);
    },
    p(d, h) {
      u && u.p && (!s || h & /*$$scope*/
      2097152) && Ce(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        s ? ye(
          o,
          /*$$scope*/
          d[21],
          h,
          null
        ) : Se(
          /*$$scope*/
          d[21]
        ),
        null
      ), me(e, f = de(c, [
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
      s || (A(u, d), s = !0);
    },
    o(d) {
      L(u, d), s = !1;
    },
    d(d) {
      d && U(e), u && u.d(d), t[23](null), a = !1, Ye(l);
    }
  };
}
function bm(t) {
  let e, n, i, r;
  const s = [_m, gm], a = [];
  function l(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (A(n), r = !0);
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
function vm(t, e, n) {
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
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l;
  const o = rt(Qe());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: h = !1 } = e, { required: m = !1 } = e, { wrapped: g = !1 } = e, p, E, b = {}, S = {}, C = (l = qe("SMUI:generic:input:props")) !== null && l !== void 0 ? l : {}, M = h, D = m;
  ct(() => {
    n(18, E = new sm({
      addClass: _,
      removeClass: O,
      getWidth: () => {
        var R, V;
        const ue = W(), Ne = ue.cloneNode(!0);
        (R = ue.parentNode) === null || R === void 0 || R.appendChild(Ne), Ne.classList.add("smui-floating-label--remove-transition"), Ne.classList.add("smui-floating-label--force-size"), Ne.classList.remove("mdc-floating-label--float-above");
        const Ee = Ne.scrollWidth;
        return (V = ue.parentNode) === null || V === void 0 || V.removeChild(Ne), Ee;
      },
      registerInteractionHandler: (R, V) => W().addEventListener(R, V),
      deregisterInteractionHandler: (R, V) => W().removeEventListener(R, V)
    }));
    const k = {
      get element() {
        return W();
      },
      addStyle: w,
      removeStyle: y
    };
    return Ie(p, "SMUIFloatingLabel:mount", k), E.init(), () => {
      Ie(p, "SMUIFloatingLabel:unmount", k), E.destroy();
    };
  });
  function _(k) {
    b[k] || n(8, b[k] = !0, b);
  }
  function O(k) {
    (!(k in b) || b[k]) && n(8, b[k] = !1, b);
  }
  function w(k, R) {
    S[k] != R && (R === "" || R == null ? (delete S[k], n(9, S)) : n(9, S[k] = R, S));
  }
  function y(k) {
    k in S && (delete S[k], n(9, S));
  }
  function v(k) {
    E.shake(k);
  }
  function I(k) {
    n(0, h = k);
  }
  function T(k) {
    n(1, m = k);
  }
  function P() {
    return E.getWidth();
  }
  function W() {
    return p;
  }
  function j(k) {
    se[k ? "unshift" : "push"](() => {
      p = k, n(7, p);
    });
  }
  function X(k) {
    se[k ? "unshift" : "push"](() => {
      p = k, n(7, p);
    });
  }
  return t.$$set = (k) => {
    e = q(q({}, e), $e(k)), n(12, r = he(e, i)), "use" in k && n(2, u = k.use), "class" in k && n(3, c = k.class), "style" in k && n(4, f = k.style), "for" in k && n(5, d = k.for), "floatAbove" in k && n(0, h = k.floatAbove), "required" in k && n(1, m = k.required), "wrapped" in k && n(6, g = k.wrapped), "$$scope" in k && n(21, a = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && E && M !== h && (n(19, M = h), E.float(h)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && E && D !== m && (n(20, D = m), E.setRequired(m));
  }, [
    h,
    m,
    u,
    c,
    f,
    d,
    g,
    p,
    b,
    S,
    o,
    C,
    r,
    v,
    I,
    T,
    P,
    W,
    E,
    M,
    D,
    a,
    s,
    j,
    X
  ];
}
class qi extends Le {
  constructor(e) {
    super(), Te(this, e, vm, bm, _e, {
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
function Im(t) {
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
    o = q(o, l[u]);
  return {
    c() {
      e = ee("div"), me(e, o);
    },
    m(u, c) {
      B(u, e, c), t[13](e), s || (a = [
        fe(r = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[7].call(null, e)
        )
      ], s = !0);
    },
    p(u, [c]) {
      me(e, o = de(l, [
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
    i: it,
    o: it,
    d(u) {
      u && U(e), t[13](null), s = !1, Ye(a);
    }
  };
}
const el = ([t, e]) => `${t}: ${e};`;
function Em(t, e, n) {
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
  const s = rt(Qe());
  let { use: a = [] } = e, { class: l = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, h = {};
  ct(() => (f = new lm({
    addClass: g,
    removeClass: p,
    hasClass: m,
    setStyle: E,
    registerEventHandler: (_, O) => M().addEventListener(_, O),
    deregisterEventHandler: (_, O) => M().removeEventListener(_, O)
  }), f.init(), () => {
    f.destroy();
  }));
  function m(_) {
    return _ in d ? d[_] : M().classList.contains(_);
  }
  function g(_) {
    d[_] || n(5, d[_] = !0, d);
  }
  function p(_) {
    (!(_ in d) || d[_]) && n(5, d[_] = !1, d);
  }
  function E(_, O) {
    h[_] != O && (O === "" || O == null ? (delete h[_], n(6, h)) : n(6, h[_] = O, h));
  }
  function b() {
    f.activate();
  }
  function S() {
    f.deactivate();
  }
  function C(_) {
    f.setRippleCenter(_);
  }
  function M() {
    return c;
  }
  function D(_) {
    se[_ ? "unshift" : "push"](() => {
      c = _, n(4, c);
    });
  }
  return t.$$set = (_) => {
    e = q(q({}, e), $e(_)), n(8, r = he(e, i)), "use" in _ && n(0, a = _.use), "class" in _ && n(1, l = _.class), "style" in _ && n(2, o = _.style), "active" in _ && n(3, u = _.active);
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
    b,
    S,
    C,
    M,
    D
  ];
}
class Wo extends Le {
  constructor(e) {
    super(), Te(this, e, Em, Im, _e, {
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
  ), s = Ae(
    r,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = ee("div"), s && s.c(), N(e, "class", "mdc-notched-outline__notch"), N(e, "style", n = Object.entries(
        /*notchStyles*/
        t[7]
      ).map(nl).join(" "));
    },
    m(a, l) {
      B(a, e, l), s && s.m(e, null), i = !0;
    },
    p(a, l) {
      s && s.p && (!i || l & /*$$scope*/
      16384) && Ce(
        s,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? ye(
          r,
          /*$$scope*/
          a[14],
          l,
          null
        ) : Se(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || l & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(nl).join(" "))) && N(e, "style", n);
    },
    i(a) {
      i || (A(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(e), s && s.d(a);
    }
  };
}
function Am(t) {
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
    h = q(h, d[m]);
  return {
    c() {
      e = ee("div"), n = ee("div"), i = oe(), f && f.c(), r = oe(), s = ee("div"), N(n, "class", "mdc-notched-outline__leading"), N(s, "class", "mdc-notched-outline__trailing"), me(e, h);
    },
    m(m, g) {
      B(m, e, g), Z(e, n), Z(e, i), f && f.m(e, null), Z(e, r), Z(e, s), t[16](e), o = !0, u || (c = [
        fe(l = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[8].call(null, e)
        ),
        pe(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          t[9]
        ),
        pe(
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
      8 && A(f, 1)) : (f = tl(m), f.c(), A(f, 1), f.m(e, r)), me(e, h = de(d, [
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
      o || (A(f), o = !0);
    },
    o(m) {
      L(f), o = !1;
    },
    d(m) {
      m && U(e), f && f.d(), t[16](null), u = !1, Ye(c);
    }
  };
}
const nl = ([t, e]) => `${t}: ${e};`;
function ym(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, h, m, g = {}, p = {};
  ct(() => (h = new um({
    addClass: b,
    removeClass: S,
    setNotchWidthProperty: (v) => C("width", v + "px"),
    removeNotchWidthProperty: () => M("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function E(v) {
    n(4, m = v.detail);
  }
  function b(v) {
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
  function _() {
    h.closeNotch();
  }
  function O() {
    return d;
  }
  function w(v) {
    se[v ? "unshift" : "push"](() => {
      d = v, n(5, d);
    });
  }
  const y = () => n(4, m = void 0);
  return t.$$set = (v) => {
    e = q(q({}, e), $e(v)), n(10, r = he(e, i)), "use" in v && n(0, o = v.use), "class" in v && n(1, u = v.class), "notched" in v && n(2, c = v.notched), "noLabel" in v && n(3, f = v.noLabel), "$$scope" in v && n(14, a = v.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (m ? (m.addStyle("transition-duration", "0s"), b("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
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
    E,
    r,
    D,
    _,
    O,
    a,
    s,
    w,
    y
  ];
}
class zo extends Le {
  constructor(e) {
    super(), Te(this, e, ym, Am, _e, {
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
function Cm(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Ae(
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
      8192) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? ye(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Sm(t) {
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
      $$slots: { default: [Cm] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = q(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = q(u, de(r, [
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
      128 && be(
        /*props*/
        l[7]
      ),
      o & /*$$restProps*/
      512 && be(
        /*$$restProps*/
        l[9]
      )
    ]))), { props: u };
  }
  return s && (e = kt(s, a(t)), t[12](e)), {
    c() {
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Be();
        }
        s ? (e = kt(s, a(l, o)), l[12](e), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? de(r, [
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
          128 && be(
            /*props*/
            l[7]
          ),
          o & /*$$restProps*/
          512 && be(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[12](null), e && $(e, l);
    }
  };
}
const on = {
  component: Nt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Tm(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e, { use: l = [] } = e, { class: o = "" } = e, u;
  const c = on.class, f = {}, d = [], h = on.contexts, m = on.props;
  let { component: g = on.component } = e, { tag: p = g === Nt ? on.tag : void 0 } = e;
  Object.entries(on.classMap).forEach(([C, M]) => {
    const D = qe(M);
    D && "subscribe" in D && d.push(D.subscribe((_) => {
      n(5, f[C] = _, f);
    }));
  });
  const E = rt(Qe());
  for (let C in h)
    h.hasOwnProperty(C) && ze(C, h[C]);
  en(() => {
    for (const C of d)
      C();
  });
  function b() {
    return u.getElement();
  }
  function S(C) {
    se[C ? "unshift" : "push"](() => {
      u = C, n(4, u);
    });
  }
  return t.$$set = (C) => {
    e = q(q({}, e), $e(C)), n(9, r = he(e, i)), "use" in C && n(0, l = C.use), "class" in C && n(1, o = C.class), "component" in C && n(2, g = C.component), "tag" in C && n(3, p = C.tag), "$$scope" in C && n(13, a = C.$$scope);
  }, [
    l,
    o,
    g,
    p,
    u,
    f,
    c,
    m,
    E,
    r,
    b,
    s,
    S,
    a
  ];
}
class Lm extends Le {
  constructor(e) {
    super(), Te(this, e, Tm, Sm, _e, {
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
  return new Proxy(Lm, {
    construct: function(e, n) {
      return Object.assign(on, il, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(on, il, t), e[n];
    }
  });
}
const Om = Ct({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Rm = Ct({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Mm = Ct({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Dm(t) {
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
    l = q(l, a[o]);
  return {
    c() {
      e = ee("input"), me(e, l);
    },
    m(o, u) {
      B(o, e, u), e.autofocus && e.focus(), t[26](e), r || (s = [
        fe(i = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        pe(
          e,
          "input",
          /*input_handler*/
          t[27]
        ),
        pe(
          e,
          "change",
          /*changeHandler*/
          t[9]
        ),
        pe(
          e,
          "blur",
          /*blur_handler*/
          t[24]
        ),
        pe(
          e,
          "focus",
          /*focus_handler*/
          t[25]
        )
      ], r = !0);
    },
    p(o, [u]) {
      me(e, l = de(a, [
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
    i: it,
    o: it,
    d(o) {
      o && U(e), t[26](null), r = !1, Ye(s);
    }
  };
}
function km(t) {
  return t === "" ? Number.NaN : +t;
}
function Nm(t, e, n) {
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
  const s = rt(Qe());
  let a = () => {
  };
  function l(R) {
    return R === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = a } = e;
  const h = l(d);
  h && (d = "");
  let { files: m = null } = e, { dirty: g = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: E = !0 } = e, { emptyValueNull: b = d === null } = e;
  h && b && (d = null);
  let { emptyValueUndefined: S = d === void 0 } = e;
  h && S && (d = void 0);
  let C, M = {}, D = {};
  ct(() => {
    E && n(14, p = C.matches(":invalid"));
  });
  function _(R) {
    if (c === "file") {
      n(12, m = R.currentTarget.files);
      return;
    }
    if (R.currentTarget.value === "" && b) {
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
        n(11, d = km(R.currentTarget.value));
        break;
      default:
        n(11, d = R.currentTarget.value);
        break;
    }
  }
  function O(R) {
    (c === "file" || c === "range") && _(R), n(13, g = !0), E && n(14, p = C.matches(":invalid"));
  }
  function w(R) {
    var V;
    return R in M ? (V = M[R]) !== null && V !== void 0 ? V : null : P().getAttribute(R);
  }
  function y(R, V) {
    M[R] !== V && n(6, M[R] = V, M);
  }
  function v(R) {
    (!(R in M) || M[R] != null) && n(6, M[R] = void 0, M);
  }
  function I() {
    P().focus();
  }
  function T() {
    P().blur();
  }
  function P() {
    return C;
  }
  function W(R) {
    Wn.call(this, t, R);
  }
  function j(R) {
    Wn.call(this, t, R);
  }
  function X(R) {
    se[R ? "unshift" : "push"](() => {
      C = R, n(5, C);
    });
  }
  const k = (R) => c !== "file" && _(R);
  return t.$$set = (R) => {
    e = q(q({}, e), $e(R)), n(10, r = he(e, i)), "use" in R && n(0, o = R.use), "class" in R && n(1, u = R.class), "type" in R && n(2, c = R.type), "placeholder" in R && n(3, f = R.placeholder), "value" in R && n(11, d = R.value), "files" in R && n(12, m = R.files), "dirty" in R && n(13, g = R.dirty), "invalid" in R && n(14, p = R.invalid), "updateInvalid" in R && n(15, E = R.updateInvalid), "emptyValueNull" in R && n(16, b = R.emptyValueNull), "emptyValueUndefined" in R && n(17, S = R.emptyValueUndefined);
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
    _,
    O,
    r,
    d,
    m,
    g,
    p,
    E,
    b,
    S,
    w,
    y,
    v,
    I,
    T,
    P,
    W,
    j,
    X,
    k
  ];
}
class Pm extends Le {
  constructor(e) {
    super(), Te(this, e, Nm, Dm, _e, {
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
function Hm(t) {
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
    o = q(o, l[u]);
  return {
    c() {
      e = ee("textarea"), me(e, o);
    },
    m(u, c) {
      B(u, e, c), e.autofocus && e.focus(), t[21](e), xt(
        e,
        /*value*/
        t[0]
      ), s || (a = [
        fe(r = Je.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        fe(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        pe(
          e,
          "change",
          /*changeHandler*/
          t[8]
        ),
        pe(
          e,
          "blur",
          /*blur_handler*/
          t[19]
        ),
        pe(
          e,
          "focus",
          /*focus_handler*/
          t[20]
        ),
        pe(
          e,
          "input",
          /*textarea_input_handler*/
          t[22]
        )
      ], s = !0);
    },
    p(u, [c]) {
      me(e, o = de(l, [
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
    i: it,
    o: it,
    d(u) {
      u && U(e), t[21](null), s = !1, Ye(a);
    }
  };
}
function Fm(t, e, n) {
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
  const s = rt(Qe());
  let { use: a = [] } = e, { class: l = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: h = !0 } = e, m, g = {};
  ct(() => {
    d && n(11, f = m.matches(":invalid"));
  });
  function p() {
    n(10, c = !0), d && n(11, f = m.matches(":invalid"));
  }
  function E(v) {
    var I;
    return v in g ? (I = g[v]) !== null && I !== void 0 ? I : null : D().getAttribute(v);
  }
  function b(v, I) {
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
  function _(v) {
    Wn.call(this, t, v);
  }
  function O(v) {
    Wn.call(this, t, v);
  }
  function w(v) {
    se[v ? "unshift" : "push"](() => {
      m = v, n(5, m);
    });
  }
  function y() {
    u = this.value, n(0, u);
  }
  return t.$$set = (v) => {
    e = q(q({}, e), $e(v)), n(9, r = he(e, i)), "use" in v && n(1, a = v.use), "class" in v && n(2, l = v.class), "style" in v && n(3, o = v.style), "value" in v && n(0, u = v.value), "dirty" in v && n(10, c = v.dirty), "invalid" in v && n(11, f = v.invalid), "updateInvalid" in v && n(12, d = v.updateInvalid), "resizable" in v && n(4, h = v.resizable);
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
    E,
    b,
    S,
    C,
    M,
    D,
    _,
    O,
    w,
    y
  ];
}
class wm extends Le {
  constructor(e) {
    super(), Te(this, e, Fm, Hm, _e, {
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
const Um = (t) => ({}), rl = (t) => ({}), Bm = (t) => ({}), sl = (t) => ({}), Vm = (t) => ({}), ll = (t) => ({}), Gm = (t) => ({}), al = (t) => ({}), jm = (t) => ({}), ol = (t) => ({}), qm = (t) => ({}), ul = (t) => ({}), Wm = (t) => ({}), cl = (t) => ({}), zm = (t) => ({}), fl = (t) => ({}), Km = (t) => ({}), dl = (t) => ({}), Xm = (t) => ({}), hl = (t) => ({}), Ym = (t) => ({}), ml = (t) => ({}), Zm = (t) => ({}), pl = (t) => ({});
function Qm(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m;
  const g = (
    /*#slots*/
    t[56].label
  ), p = Ae(
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
      $$slots: { default: [xm] },
      $$scope: { ctx: t }
    }
  });
  const E = (
    /*#slots*/
    t[56].default
  ), b = Ae(
    E,
    t,
    /*$$scope*/
    t[87],
    null
  );
  a = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [$m] },
      $$scope: { ctx: t }
    }
  });
  const S = (
    /*#slots*/
    t[56].ripple
  ), C = Ae(
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
  for (let _ = 0; _ < M.length; _ += 1)
    D = q(D, M[_]);
  return {
    c() {
      e = ee("div"), p && p.c(), n = oe(), te(i.$$.fragment), r = oe(), b && b.c(), s = oe(), te(a.$$.fragment), l = oe(), C && C.c(), me(e, D);
    },
    m(_, O) {
      B(_, e, O), p && p.m(e, null), Z(e, n), x(i, e, null), Z(e, r), b && b.m(e, null), Z(e, s), x(a, e, null), Z(e, l), C && C.m(e, null), t[82](e), d = !0, h || (m = [
        fe(c = Dt.call(null, e, {
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
        fe(f = Je.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        fe(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        pe(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        pe(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          t[83]
        ),
        pe(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        pe(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          t[84]
        )
      ], h = !0);
    },
    p(_, O) {
      p && p.p && (!d || O[2] & /*$$scope*/
      33554432) && Ce(
        p,
        g,
        _,
        /*$$scope*/
        _[87],
        d ? ye(
          g,
          /*$$scope*/
          _[87],
          O,
          jm
        ) : Se(
          /*$$scope*/
          _[87]
        ),
        ol
      );
      const w = {};
      O[2] & /*$$scope*/
      33554432 && (w.$$scope = { dirty: O, ctx: _ }), i.$set(w), b && b.p && (!d || O[2] & /*$$scope*/
      33554432) && Ce(
        b,
        E,
        _,
        /*$$scope*/
        _[87],
        d ? ye(
          E,
          /*$$scope*/
          _[87],
          O,
          null
        ) : Se(
          /*$$scope*/
          _[87]
        ),
        null
      );
      const y = {};
      O[2] & /*$$scope*/
      33554432 && (y.$$scope = { dirty: O, ctx: _ }), a.$set(y), C && C.p && (!d || O[2] & /*$$scope*/
      33554432) && Ce(
        C,
        S,
        _,
        /*$$scope*/
        _[87],
        d ? ye(
          S,
          /*$$scope*/
          _[87],
          O,
          Bm
        ) : Se(
          /*$$scope*/
          _[87]
        ),
        sl
      ), me(e, D = de(M, [
        (!d || O[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | O[1] & /*$$slots*/
        65536 && o !== (o = re({
          [
            /*className*/
            _[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            _[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            _[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            _[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            _[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            _[15] === "standard" && !/*textarea*/
            _[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            _[16] || !/*$$slots*/
            _[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            _[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            _[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            _[1]
          ),
          .../*internalClasses*/
          _[25]
        }))) && { class: o },
        (!d || O[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          _[26]
        ).map(Tl).concat([
          /*style*/
          _[10]
        ]).join(" "))) && { style: u },
        O[1] & /*$$restProps*/
        32768 && $t(
          /*$$restProps*/
          _[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && ge(c.update) && O[0] & /*ripple*/
      2048 && c.update.call(null, {
        ripple: (
          /*ripple*/
          _[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          _[43]
        ),
        removeClass: (
          /*removeClass*/
          _[44]
        ),
        addStyle: (
          /*addStyle*/
          _[45]
        )
      }), f && ge(f.update) && O[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        _[8]
      );
    },
    i(_) {
      d || (A(p, _), A(i.$$.fragment, _), A(b, _), A(a.$$.fragment, _), A(C, _), d = !0);
    },
    o(_) {
      L(p, _), L(i.$$.fragment, _), L(b, _), L(a.$$.fragment, _), L(C, _), d = !1;
    },
    d(_) {
      _ && U(e), p && p.d(_), $(i), b && b.d(_), $(a), C && C.d(_), t[82](null), h = !1, Ye(m);
    }
  };
}
function Jm(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, E, b, S = !/*textarea*/
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
      $$slots: { default: [ip] },
      $$scope: { ctx: t }
    }
  });
  const M = (
    /*#slots*/
    t[56].default
  ), D = Ae(
    M,
    t,
    /*$$scope*/
    t[87],
    null
  ), _ = [sp, rp], O = [];
  function w(T, P) {
    return (
      /*textarea*/
      T[14] && typeof /*value*/
      T[0] == "string" ? 0 : 1
    );
  }
  l = w(t), o = O[l] = _[l](t), c = new Jn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [op] },
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
    I = q(I, v[T]);
  return {
    c() {
      e = ee("label"), S && S.c(), n = oe(), C && C.c(), i = oe(), te(r.$$.fragment), s = oe(), D && D.c(), a = oe(), o.c(), u = oe(), te(c.$$.fragment), f = oe(), y && y.c(), me(e, I);
    },
    m(T, P) {
      B(T, e, P), S && S.m(e, null), Z(e, n), C && C.m(e, null), Z(e, i), x(r, e, null), Z(e, s), D && D.m(e, null), Z(e, a), O[l].m(e, null), Z(e, u), x(c, e, null), Z(e, f), y && y.m(e, null), t[78](e), p = !0, E || (b = [
        fe(m = Dt.call(null, e, {
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
        fe(g = Je.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        fe(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        pe(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        pe(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          t[79]
        ),
        pe(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        pe(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          t[80]
        ),
        pe(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          t[40]
        ),
        pe(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          t[81]
        )
      ], E = !0);
    },
    p(T, P) {
      !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" ? S ? (S.p(T, P), P[0] & /*textarea, variant*/
      49152 && A(S, 1)) : (S = gl(T), S.c(), A(S, 1), S.m(e, n)) : S && (Ue(), L(S, 1, 1, () => {
        S = null;
      }), Be()), /*textarea*/
      T[14] || /*variant*/
      T[15] === "outlined" ? C ? (C.p(T, P), P[0] & /*textarea, variant*/
      49152 && A(C, 1)) : (C = vl(T), C.c(), A(C, 1), C.m(e, i)) : C && (Ue(), L(C, 1, 1, () => {
        C = null;
      }), Be());
      const W = {};
      P[2] & /*$$scope*/
      33554432 && (W.$$scope = { dirty: P, ctx: T }), r.$set(W), D && D.p && (!p || P[2] & /*$$scope*/
      33554432) && Ce(
        D,
        M,
        T,
        /*$$scope*/
        T[87],
        p ? ye(
          M,
          /*$$scope*/
          T[87],
          P,
          null
        ) : Se(
          /*$$scope*/
          T[87]
        ),
        null
      );
      let j = l;
      l = w(T), l === j ? O[l].p(T, P) : (Ue(), L(O[j], 1, 1, () => {
        O[j] = null;
      }), Be(), o = O[l], o ? o.p(T, P) : (o = O[l] = _[l](T), o.c()), A(o, 1), o.m(e, u));
      const X = {};
      P[2] & /*$$scope*/
      33554432 && (X.$$scope = { dirty: P, ctx: T }), c.$set(X), !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" && /*ripple*/
      T[11] ? y ? (y.p(T, P), P[0] & /*textarea, variant, ripple*/
      51200 && A(y, 1)) : (y = yl(T), y.c(), A(y, 1), y.m(e, null)) : y && (Ue(), L(y, 1, 1, () => {
        y = null;
      }), Be()), me(e, I = de(v, [
        (!p || P[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | P[1] & /*$$slots*/
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
        (!p || P[0] & /*internalStyles, style*/
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
        P[1] & /*$$restProps*/
        32768 && $t(
          /*$$restProps*/
          T[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), m && ge(m.update) && P[0] & /*textarea, variant*/
      49152 | P[1] & /*inputElement*/
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
      }), g && ge(g.update) && P[0] & /*use*/
      256 && g.update.call(
        null,
        /*use*/
        T[8]
      );
    },
    i(T) {
      p || (A(S), A(C), A(r.$$.fragment, T), A(D, T), A(o), A(c.$$.fragment, T), A(y), p = !0);
    },
    o(T) {
      L(S), L(C), L(r.$$.fragment, T), L(D, T), L(o), L(c.$$.fragment, T), L(y), p = !1;
    },
    d(T) {
      T && U(e), S && S.d(), C && C.d(), $(r), D && D.d(T), O[l].d(), $(c), y && y.d(), t[78](null), E = !1, Ye(b);
    }
  };
}
function xm(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Ae(
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
      33554432) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ye(
          n,
          /*$$scope*/
          r[87],
          s,
          Gm
        ) : Se(
          /*$$scope*/
          r[87]
        ),
        al
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function $m(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Ae(
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
      33554432) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ye(
          n,
          /*$$scope*/
          r[87],
          s,
          Vm
        ) : Se(
          /*$$scope*/
          r[87]
        ),
        ll
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
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
    t[15] === "filled" && _l()
  ), s = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && bl(t);
  return {
    c() {
      r && r.c(), e = oe(), s && s.c(), n = Ze();
    },
    m(a, l) {
      r && r.m(a, l), B(a, e, l), s && s.m(a, l), B(a, n, l), i = !0;
    },
    p(a, l) {
      /*variant*/
      a[15] === "filled" ? r || (r = _l(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? s ? (s.p(a, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && A(s, 1)) : (s = bl(a), s.c(), A(s, 1), s.m(n.parentNode, n)) : s && (Ue(), L(s, 1, 1, () => {
        s = null;
      }), Be());
    },
    i(a) {
      i || (A(s), i = !0);
    },
    o(a) {
      L(s), i = !1;
    },
    d(a) {
      a && (U(e), U(n)), r && r.d(a), s && s.d(a);
    }
  };
}
function _l(t) {
  let e;
  return {
    c() {
      e = ee("span"), N(e, "class", "mdc-text-field__ripple");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function bl(t) {
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
    $$slots: { default: [ep] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new qi({ props: r }), t[57](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? de(i, [
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
        32768 && be(Ge(
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
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[57](null), $(e, s);
    }
  };
}
function ep(t) {
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
  ), s = Ae(
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
      33554432) && Ce(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ye(
          r,
          /*$$scope*/
          a[87],
          l,
          Zm
        ) : Se(
          /*$$scope*/
          a[87]
        ),
        pl
      );
    },
    i(a) {
      i || (A(s, a), i = !0);
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
    $$slots: { default: [np] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new zo({ props: r }), t[59](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? de(i, [
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
        32768 && be(Ge(
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
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[59](null), $(e, s);
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
    $$slots: { default: [tp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new qi({ props: r }), t[58](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? de(i, [
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
        32768 && be(Ge(
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
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[58](null), $(e, s);
    }
  };
}
function tp(t) {
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
  ), s = Ae(
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
      33554432) && Ce(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ye(
          r,
          /*$$scope*/
          a[87],
          l,
          Ym
        ) : Se(
          /*$$scope*/
          a[87]
        ),
        ml
      );
    },
    i(a) {
      i || (A(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(n), s && s.d(a);
    }
  };
}
function np(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && Il(t);
  return {
    c() {
      i && i.c(), e = Ze();
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
      65536 && A(i, 1)) : (i = Il(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ue(), L(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(r) {
      n || (A(i), n = !0);
    },
    o(r) {
      L(i), n = !1;
    },
    d(r) {
      r && U(e), i && i.d(r);
    }
  };
}
function ip(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Ae(
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
      33554432) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ye(
          n,
          /*$$scope*/
          r[87],
          s,
          Xm
        ) : Se(
          /*$$scope*/
          r[87]
        ),
        hl
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
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
  let e, n, i, r, s, a, l, o, u, c;
  const f = (
    /*#slots*/
    t[56].prefix
  ), d = Ae(
    f,
    t,
    /*$$scope*/
    t[87],
    fl
  );
  let h = (
    /*prefix*/
    t[20] != null && El(t)
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
  function g(_) {
    t[69](_);
  }
  function p(_) {
    t[70](_);
  }
  function E(_) {
    t[71](_);
  }
  function b(_) {
    t[72](_);
  }
  let S = {};
  for (let _ = 0; _ < m.length; _ += 1)
    S = q(S, m[_]);
  /*value*/
  t[0] !== void 0 && (S.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (S.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (S.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (S.invalid = /*invalid*/
  t[1]), i = new Pm({ props: S }), t[68](i), se.push(() => gt(i, "value", g)), se.push(() => gt(i, "files", p)), se.push(() => gt(i, "dirty", E)), se.push(() => gt(i, "invalid", b)), i.$on(
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
    t[21] != null && Al(t)
  );
  const M = (
    /*#slots*/
    t[56].suffix
  ), D = Ae(
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
    m(_, O) {
      d && d.m(_, O), B(_, e, O), h && h.m(_, O), B(_, n, O), x(i, _, O), B(_, o, O), C && C.m(_, O), B(_, u, O), D && D.m(_, O), c = !0;
    },
    p(_, O) {
      d && d.p && (!c || O[2] & /*$$scope*/
      33554432) && Ce(
        d,
        f,
        _,
        /*$$scope*/
        _[87],
        c ? ye(
          f,
          /*$$scope*/
          _[87],
          O,
          zm
        ) : Se(
          /*$$scope*/
          _[87]
        ),
        fl
      ), /*prefix*/
      _[20] != null ? h ? (h.p(_, O), O[0] & /*prefix*/
      1048576 && A(h, 1)) : (h = El(_), h.c(), A(h, 1), h.m(n.parentNode, n)) : h && (Ue(), L(h, 1, 1, () => {
        h = null;
      }), Be());
      const w = O[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | O[1] & /*$$restProps*/
      32768 ? de(m, [
        O[0] & /*type*/
        262144 && { type: (
          /*type*/
          _[18]
        ) },
        O[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          _[12]
        ) },
        O[0] & /*required*/
        8192 && { required: (
          /*required*/
          _[13]
        ) },
        O[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          _[19]
        ) },
        O[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          _[27]
        ) },
        O[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          _[27]
        ) },
        O[0] & /*noLabel, label*/
        196608 && be(
          /*noLabel*/
          _[16] && /*label*/
          _[17] != null ? { placeholder: (
            /*label*/
            _[17]
          ) } : {}
        ),
        O[1] & /*$$restProps*/
        32768 && be(Ge(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !r && O[0] & /*value*/
      1 && (r = !0, w.value = /*value*/
      _[0], pt(() => r = !1)), !s && O[0] & /*files*/
      8 && (s = !0, w.files = /*files*/
      _[3], pt(() => s = !1)), !a && O[0] & /*dirty*/
      16 && (a = !0, w.dirty = /*dirty*/
      _[4], pt(() => a = !1)), !l && O[0] & /*invalid*/
      2 && (l = !0, w.invalid = /*invalid*/
      _[1], pt(() => l = !1)), i.$set(w), /*suffix*/
      _[21] != null ? C ? (C.p(_, O), O[0] & /*suffix*/
      2097152 && A(C, 1)) : (C = Al(_), C.c(), A(C, 1), C.m(u.parentNode, u)) : C && (Ue(), L(C, 1, 1, () => {
        C = null;
      }), Be()), D && D.p && (!c || O[2] & /*$$scope*/
      33554432) && Ce(
        D,
        M,
        _,
        /*$$scope*/
        _[87],
        c ? ye(
          M,
          /*$$scope*/
          _[87],
          O,
          Wm
        ) : Se(
          /*$$scope*/
          _[87]
        ),
        cl
      );
    },
    i(_) {
      c || (A(d, _), A(h), A(i.$$.fragment, _), A(C), A(D, _), c = !0);
    },
    o(_) {
      L(d, _), L(h), L(i.$$.fragment, _), L(C), L(D, _), c = !1;
    },
    d(_) {
      _ && (U(e), U(n), U(o), U(u)), d && d.d(_), h && h.d(_), t[68](null), $(i, _), C && C.d(_), D && D.d(_);
    }
  };
}
function sp(t) {
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
    h = q(h, u[p]);
  /*value*/
  t[0] !== void 0 && (h.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (h.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (h.invalid = /*invalid*/
  t[1]), n = new wm({ props: h }), t[60](n), se.push(() => gt(n, "value", c)), se.push(() => gt(n, "dirty", f)), se.push(() => gt(n, "invalid", d)), n.$on(
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
  ), g = Ae(
    m,
    t,
    /*$$scope*/
    t[87],
    dl
  );
  return {
    c() {
      e = ee("span"), te(n.$$.fragment), a = oe(), g && g.c(), N(e, "class", l = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(p, E) {
      B(p, e, E), x(n, e, null), Z(e, a), g && g.m(e, null), o = !0;
    },
    p(p, E) {
      const b = E[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | E[1] & /*$$restProps*/
      32768 ? de(u, [
        E[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        E[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        E[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        E[1] & /*$$restProps*/
        32768 && be(Ge(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && E[0] & /*value*/
      1 && (i = !0, b.value = /*value*/
      p[0], pt(() => i = !1)), !r && E[0] & /*dirty*/
      16 && (r = !0, b.dirty = /*dirty*/
      p[4], pt(() => r = !1)), !s && E[0] & /*invalid*/
      2 && (s = !0, b.invalid = /*invalid*/
      p[1], pt(() => s = !1)), n.$set(b), g && g.p && (!o || E[2] & /*$$scope*/
      33554432) && Ce(
        g,
        m,
        p,
        /*$$scope*/
        p[87],
        o ? ye(
          m,
          /*$$scope*/
          p[87],
          E,
          Km
        ) : Se(
          /*$$scope*/
          p[87]
        ),
        dl
      ), (!o || E[1] & /*$$restProps*/
      32768 && l !== (l = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && N(e, "class", l);
    },
    i(p) {
      o || (A(n.$$.fragment, p), A(g, p), o = !0);
    },
    o(p) {
      L(n.$$.fragment, p), L(g, p), o = !1;
    },
    d(p) {
      p && U(e), t[60](null), $(n), g && g.d(p);
    }
  };
}
function El(t) {
  let e, n;
  return e = new Rm({
    props: {
      $$slots: { default: [lp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function lp(t) {
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
function Al(t) {
  let e, n;
  return e = new Mm({
    props: {
      $$slots: { default: [ap] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function ap(t) {
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
function op(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Ae(
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
      33554432) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ye(
          n,
          /*$$scope*/
          r[87],
          s,
          qm
        ) : Se(
          /*$$scope*/
          r[87]
        ),
        ul
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
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
    r = q(r, i[s]);
  return e = new Wo({ props: r }), t[77](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      32768 ? de(i, [be(Ge(
        /*$$restProps*/
        s[46],
        "ripple$"
      ))]) : {};
      e.$set(l);
    },
    i(s) {
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[77](null), $(e, s);
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
    $$slots: { default: [up] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new Om({ props: r }), e.$on(
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
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      32768 ? de(i, [be(Ge(
        /*$$restProps*/
        s[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      $(e, s);
    }
  };
}
function up(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = Ae(
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
      33554432) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ye(
          n,
          /*$$scope*/
          r[87],
          s,
          Um
        ) : Se(
          /*$$scope*/
          r[87]
        ),
        rl
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function cp(t) {
  let e, n, i, r, s;
  const a = [Jm, Qm], l = [];
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
      n.c(), i = oe(), u && u.c(), r = Ze();
    },
    m(c, f) {
      l[e].m(c, f), B(c, i, f), u && u.m(c, f), B(c, r, f), s = !0;
    },
    p(c, f) {
      n.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && A(u, 1)) : (u = Cl(c), u.c(), A(u, 1), u.m(r.parentNode, r)) : u && (Ue(), L(u, 1, 1, () => {
        u = null;
      }), Be());
    },
    i(c) {
      s || (A(n), A(u), s = !0);
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
function fp(t, e, n) {
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
  let s = he(e, r), { $$slots: a = {}, $$scope: l } = e;
  const o = Zr(a), { applyPassive: u } = qo, c = rt(Qe());
  let f = () => {
  };
  function d(H) {
    return H === f;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: g = "" } = e, { ripple: p = !0 } = e, { disabled: E = !1 } = e, { required: b = !1 } = e, { textarea: S = !1 } = e, { variant: C = S ? "outlined" : "standard" } = e, { noLabel: M = !1 } = e, { label: D = void 0 } = e, { type: _ = "text" } = e, { value: O = s.input$emptyValueUndefined ? void 0 : f } = e, { files: w = f } = e;
  const y = !d(O) || !d(w);
  d(O) && (O = void 0), d(w) && (w = null);
  let { invalid: v = f } = e, { updateInvalid: I = d(v) } = e;
  d(v) && (v = !1);
  let { dirty: T = !1 } = e, { prefix: P = void 0 } = e, { suffix: W = void 0 } = e, { validateOnValueChange: j = I } = e, { useNativeValidation: X = I } = e, { withLeadingIcon: k = f } = e, { withTrailingIcon: R = f } = e, { input: V = void 0 } = e, { floatingLabel: ue = void 0 } = e, { lineRipple: Ne = void 0 } = e, { notchedOutline: Ee = void 0 } = e, Xe, K, J = {}, Re = {}, Me, He = !1, ie = qe("SMUI:addLayoutListener"), z, We, Ve = new Promise((H) => We = H), St, Q, De, je, Fe = O;
  ie && (z = ie(Y)), ct(() => {
    if (n(54, K = new hm(
      {
        // getRootAdapterMethods_
        addClass: ft,
        removeClass: et,
        hasClass: ht,
        registerTextFieldInteractionHandler: (H, bt) => ve().addEventListener(H, bt),
        deregisterTextFieldInteractionHandler: (H, bt) => ve().removeEventListener(H, bt),
        registerValidationAttributeChangeHandler: (H) => {
          const bt = (ni) => ni.map((ii) => ii.attributeName).filter((ii) => ii), vi = new MutationObserver((ni) => {
            X && H(bt(ni));
          }), hr = { attributes: !0 };
          return V && vi.observe(V.getElement(), hr), vi;
        },
        deregisterValidationAttributeChangeHandler: (H) => {
          H.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var H;
          return (H = V == null ? void 0 : V.getElement()) !== null && H !== void 0 ? H : null;
        },
        setInputAttr: (H, bt) => {
          V == null || V.addAttr(H, bt);
        },
        removeInputAttr: (H) => {
          V == null || V.removeAttr(H);
        },
        isFocused: () => document.activeElement === (V == null ? void 0 : V.getElement()),
        registerInputInteractionHandler: (H, bt) => {
          V == null || V.getElement().addEventListener(H, bt, u());
        },
        deregisterInputInteractionHandler: (H, bt) => {
          V == null || V.getElement().removeEventListener(H, bt, u());
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
        closeOutline: () => Ee && Ee.closeNotch(),
        hasOutline: () => !!Ee,
        notchOutline: (H) => Ee && Ee.notch(H)
      },
      {
        get helperText() {
          return De;
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
      K.init();
    } else
      Jr().then(() => {
        if (V == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        K.init();
      });
    return We(), () => {
      K.destroy();
    };
  }), en(() => {
    z && z();
  });
  function Rt(H) {
    n(29, St = H.detail);
  }
  function G(H) {
    n(30, Q = H.detail);
  }
  function le(H) {
    n(32, je = H.detail);
  }
  function ne(H) {
    n(27, Me = H.detail);
  }
  function Ke(H) {
    n(31, De = H.detail);
  }
  function ht(H) {
    var bt;
    return H in J ? (bt = J[H]) !== null && bt !== void 0 ? bt : null : ve().classList.contains(H);
  }
  function ft(H) {
    J[H] || n(25, J[H] = !0, J);
  }
  function et(H) {
    (!(H in J) || J[H]) && n(25, J[H] = !1, J);
  }
  function ke(H, bt) {
    Re[H] != bt && (bt === "" || bt == null ? (delete Re[H], n(26, Re)) : n(26, Re[H] = bt, Re));
  }
  function ae() {
    V == null || V.focus();
  }
  function qt() {
    V == null || V.blur();
  }
  function Y() {
    if (K) {
      const H = K.shouldFloat;
      K.notchOutline(H);
    }
  }
  function ve() {
    return Xe;
  }
  function Oe(H) {
    se[H ? "unshift" : "push"](() => {
      ue = H, n(5, ue);
    });
  }
  function lt(H) {
    se[H ? "unshift" : "push"](() => {
      ue = H, n(5, ue);
    });
  }
  function tn(H) {
    se[H ? "unshift" : "push"](() => {
      Ee = H, n(7, Ee);
    });
  }
  function ti(H) {
    se[H ? "unshift" : "push"](() => {
      V = H, n(2, V);
    });
  }
  function zi(H) {
    O = H, n(0, O);
  }
  function Ki(H) {
    T = H, n(4, T);
  }
  function Xi(H) {
    v = H, n(1, v), n(54, K), n(19, I);
  }
  const Yi = () => n(28, He = !1), Zi = () => n(28, He = !0), Dn = (H) => Ie(Xe, "blur", H), Qi = (H) => Ie(Xe, "focus", H);
  function _i(H) {
    se[H ? "unshift" : "push"](() => {
      V = H, n(2, V);
    });
  }
  function Ji(H) {
    O = H, n(0, O);
  }
  function bi(H) {
    w = H, n(3, w);
  }
  function kn(H) {
    T = H, n(4, T);
  }
  function xi(H) {
    v = H, n(1, v), n(54, K), n(19, I);
  }
  const $i = () => n(28, He = !1), er = () => n(28, He = !0), tr = (H) => Ie(Xe, "blur", H), nr = (H) => Ie(Xe, "focus", H);
  function ir(H) {
    se[H ? "unshift" : "push"](() => {
      Ne = H, n(6, Ne);
    });
  }
  function rr(H) {
    se[H ? "unshift" : "push"](() => {
      Xe = H, n(24, Xe);
    });
  }
  const sr = () => n(29, St = void 0), lr = () => n(30, Q = void 0), ar = () => n(32, je = void 0);
  function or(H) {
    se[H ? "unshift" : "push"](() => {
      Xe = H, n(24, Xe);
    });
  }
  const ur = () => n(29, St = void 0), cr = () => n(30, Q = void 0), fr = () => {
    n(27, Me = void 0), n(31, De = void 0);
  }, dr = () => n(32, je = void 0);
  return t.$$set = (H) => {
    e = q(q({}, e), $e(H)), n(46, s = he(e, r)), "use" in H && n(8, h = H.use), "class" in H && n(9, m = H.class), "style" in H && n(10, g = H.style), "ripple" in H && n(11, p = H.ripple), "disabled" in H && n(12, E = H.disabled), "required" in H && n(13, b = H.required), "textarea" in H && n(14, S = H.textarea), "variant" in H && n(15, C = H.variant), "noLabel" in H && n(16, M = H.noLabel), "label" in H && n(17, D = H.label), "type" in H && n(18, _ = H.type), "value" in H && n(0, O = H.value), "files" in H && n(3, w = H.files), "invalid" in H && n(1, v = H.invalid), "updateInvalid" in H && n(19, I = H.updateInvalid), "dirty" in H && n(4, T = H.dirty), "prefix" in H && n(20, P = H.prefix), "suffix" in H && n(21, W = H.suffix), "validateOnValueChange" in H && n(48, j = H.validateOnValueChange), "useNativeValidation" in H && n(49, X = H.useNativeValidation), "withLeadingIcon" in H && n(22, k = H.withLeadingIcon), "withTrailingIcon" in H && n(23, R = H.withTrailingIcon), "input" in H && n(2, V = H.input), "floatingLabel" in H && n(5, ue = H.floatingLabel), "lineRipple" in H && n(6, Ne = H.lineRipple), "notchedOutline" in H && n(7, Ee = H.notchedOutline), "$$scope" in H && n(87, l = H.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = V && V.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && K && K.isValid() !== !v && (I ? n(1, v = !K.isValid()) : K.setValid(!v)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && K && K.getValidateOnValueChange() !== j && K.setValidateOnValueChange(d(j) ? !1 : j), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && K && K.setUseNativeValidation(d(X) ? !0 : X), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && K && K.setDisabled(E), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && K && y && Fe !== O) {
      n(55, Fe = O);
      const H = `${O}`;
      K.getValue() !== H && K.setValue(H);
    }
  }, [
    O,
    v,
    V,
    w,
    T,
    ue,
    Ne,
    Ee,
    h,
    m,
    g,
    p,
    E,
    b,
    S,
    C,
    M,
    D,
    _,
    I,
    P,
    W,
    k,
    R,
    Xe,
    J,
    Re,
    Me,
    He,
    St,
    Q,
    De,
    je,
    i,
    c,
    d,
    y,
    Ve,
    Rt,
    G,
    le,
    ne,
    Ke,
    ft,
    et,
    ke,
    s,
    o,
    j,
    X,
    ae,
    qt,
    Y,
    ve,
    K,
    Fe,
    a,
    Oe,
    lt,
    tn,
    ti,
    zi,
    Ki,
    Xi,
    Yi,
    Zi,
    Dn,
    Qi,
    _i,
    Ji,
    bi,
    kn,
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
    dr,
    l
  ];
}
class Ko extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      fp,
      cp,
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
function dp(t) {
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
    i: it,
    o: it,
    d(n) {
      n && U(e);
    }
  };
}
function hp(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), i = Ae(
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
      16384) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[14],
        e ? ye(
          n,
          /*$$scope*/
          r[14],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function mp(t) {
  let e, n, i, r, s, a, l, o, u, c;
  const f = [hp, dp], d = [];
  function h(p, E) {
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
    g = q(g, m[p]);
  return {
    c() {
      e = ee("i"), i.c(), me(e, g);
    },
    m(p, E) {
      B(p, e, E), d[n].m(e, null), t[16](e), o = !0, u || (c = [
        fe(l = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[9].call(null, e)
        )
      ], u = !0);
    },
    p(p, [E]) {
      let b = n;
      n = h(p), n === b ? d[n].p(p, E) : (Ue(), L(d[b], 1, 1, () => {
        d[b] = null;
      }), Be(), i = d[n], i ? i.p(p, E) : (i = d[n] = f[n](p), i.c()), A(i, 1), i.m(e, null)), me(e, g = de(m, [
        (!o || E & /*className*/
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
        (!o || E & /*tabindex*/
        8 && s !== (s = /*tabindex*/
        p[3] === -1 ? "true" : "false")) && { "aria-hidden": s },
        (!o || E & /*role, disabled*/
        20 && a !== (a = /*role*/
        p[2] === "button" ? (
          /*disabled*/
          p[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": a },
        E & /*roleProps*/
        256 && /*roleProps*/
        p[8],
        E & /*internalAttrs*/
        64 && /*internalAttrs*/
        p[6],
        E & /*$$restProps*/
        4096 && /*$$restProps*/
        p[12]
      ])), l && ge(l.update) && E & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (A(i), o = !0);
    },
    o(p) {
      L(i), o = !1;
    },
    d(p) {
      p && U(e), d[n].d(), t[16](null), u = !1, Ye(c);
    }
  };
}
function pp(t, e, n) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let s = he(e, r), a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt(Qe());
  let { use: c = [] } = e, { class: f = "" } = e, { role: d = void 0 } = e, { tabindex: h = d === "button" ? 0 : -1 } = e, { disabled: m = !1 } = e, g, p, E = {};
  const b = qe("SMUI:textfield:icon:leading");
  st(t, b, (y) => n(18, a = y));
  const S = a;
  let C;
  ct(() => (p = new pm({
    getAttr: M,
    setAttr: D,
    removeAttr: _,
    setContent: (y) => {
      n(7, C = y);
    },
    registerInteractionHandler: (y, v) => O().addEventListener(y, v),
    deregisterInteractionHandler: (y, v) => O().removeEventListener(y, v),
    notifyIconAction: () => Ie(O(), "SMUITextField:icon", void 0, void 0, !0)
  }), Ie(
    O(),
    S ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    p
  ), p.init(), () => {
    Ie(
      O(),
      S ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      p
    ), p.destroy();
  }));
  function M(y) {
    var v;
    return y in E ? (v = E[y]) !== null && v !== void 0 ? v : null : O().getAttribute(y);
  }
  function D(y, v) {
    E[y] !== v && n(6, E[y] = v, E);
  }
  function _(y) {
    (!(y in E) || E[y] != null) && n(6, E[y] = void 0, E);
  }
  function O() {
    return g;
  }
  function w(y) {
    se[y ? "unshift" : "push"](() => {
      g = y, n(5, g);
    });
  }
  return t.$$set = (y) => {
    e = q(q({}, e), $e(y)), n(12, s = he(e, r)), "use" in y && n(0, c = y.use), "class" in y && n(1, f = y.class), "role" in y && n(2, d = y.role), "tabindex" in y && n(3, h = y.tabindex), "disabled" in y && n(4, m = y.disabled), "$$scope" in y && n(14, o = y.$$scope);
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
    E,
    C,
    i,
    u,
    b,
    S,
    s,
    O,
    o,
    l,
    w
  ];
}
class gp extends Le {
  constructor(e) {
    super(), Te(this, e, pp, mp, _e, {
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
function _p(t) {
  let e, n, i;
  function r(a) {
    t[7](a);
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
    t[0]), e = new Ko({ props: s }), se.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        x(e, a, l), i = !0;
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
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function bp(t) {
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
    style: `width: 100%; ${/*styles*/
    t[5]}`,
    variant: (
      /*variant*/
      t[4]
    ),
    $$slots: { leadingIcon: [Ip] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new Ko({ props: s }), se.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        x(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        l & /*label*/
        4 && (o.label = /*label*/
        a[2]), l & /*placeholder*/
        2 && (o.placeholder = /*placeholder*/
        a[1]), l & /*styles*/
        32 && (o.style = `width: 100%; ${/*styles*/
        a[5]}`), l & /*variant*/
        16 && (o.variant = /*variant*/
        a[4]), l & /*$$scope, icon*/
        264 && (o.$$scope = { dirty: l, ctx: a }), !n && l & /*value*/
        1 && (n = !0, o.value = /*value*/
        a[0], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function vp(t) {
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
function Ip(t) {
  let e, n;
  return e = new gp({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [vp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, icon*/
      264 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Ep(t) {
  let e, n, i, r;
  const s = [bp, _p], a = [];
  function l(o, u) {
    return (
      /*icon*/
      o[3] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (A(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function Ap(t, e, n) {
  let { placeholder: i = "" } = e, { label: r = "" } = e, { icon: s = "" } = e, { value: a = "" } = e, { variant: l = "standard" } = e, { styles: o = "" } = e;
  function u(f) {
    a = f, n(0, a);
  }
  function c(f) {
    a = f, n(0, a);
  }
  return t.$$set = (f) => {
    "placeholder" in f && n(1, i = f.placeholder), "label" in f && n(2, r = f.label), "icon" in f && n(3, s = f.icon), "value" in f && n(0, a = f.value), "variant" in f && n(4, l = f.variant), "styles" in f && n(5, o = f.styles);
  }, [
    a,
    i,
    r,
    s,
    l,
    o,
    u,
    c
  ];
}
class yp extends Le {
  constructor(e) {
    super(), Te(this, e, Ap, Ep, _e, {
      placeholder: 1,
      label: 2,
      icon: 3,
      value: 0,
      variant: 4,
      styles: 5
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
var Cp = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Sp = {
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
}, At;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(At || (At = {}));
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
var hn, sn, xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
hn = {}, hn["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", hn["" + xe.LIST_ITEM_CLASS] = "mdc-list-item", hn["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", hn["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", hn["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", hn["" + xe.ROOT] = "mdc-list";
var Hn = (sn = {}, sn["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", sn["" + xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", sn["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", sn["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", sn["" + xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", sn["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", sn["" + xe.ROOT] = "mdc-deprecated-list", sn), mn = {
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
    .` + xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` a,
    .` + Hn[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Hn[xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` a,
    .` + xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Hn[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Hn[xe.LIST_ITEM_CLASS] + ` a,
    .` + Hn[xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Hn[xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Tp = ["input", "button", "textarea", "select"], Wt = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Tp.indexOf(n) === -1 && t.preventDefault();
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
function Lp() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Op(t, e) {
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
function Kr(t, e) {
  var n = t.nextChar, i = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, s = t.focusedItemIndex, a = t.skipFocus, l = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Yo(e);
  }, It.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Rp(r, s, l, e) : o = Mp(r, l, e), o !== -1 && !a && i(o), o;
}
function Rp(t, e, n, i) {
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
function Mp(t, e, n) {
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
    var E = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return Kr(E, e);
  }
  if (!g)
    return -1;
  i && Wt(n);
  var b = i && Xo(e);
  if (b) {
    var E = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return Kr(E, e);
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
function Dp(t) {
  return t instanceof Array;
}
var kp = ["Alt", "Control", "Meta", "Shift"];
function Ol(t) {
  var e = new Set(t ? kp.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(i) {
      return e.has(i);
    }) && n.length === e.size;
  };
}
var Np = (
  /** @class */
  function(t) {
    ot(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = It.UNSET_INDEX, i.focusedItemIndex = It.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Lp(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xe;
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
        var i = this.adapter.listItemAtIndexHasClass(n, xe.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = It.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var s = this.adapter.listItemAtIndexHasClass(r, xe.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, xe.LIST_ITEM_ACTIVATED_CLASS);
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
      return this.adapter.listItemAtIndexHasClass(n, xe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, i, r) {
      var s = this, a, l = vt(n) === "ArrowLeft", o = vt(n) === "ArrowUp", u = vt(n) === "ArrowRight", c = vt(n) === "ArrowDown", f = vt(n) === "Home", d = vt(n) === "End", h = vt(n) === "Enter", m = vt(n) === "Spacebar", g = this.isVertical && c || !this.isVertical && u, p = this.isVertical && o || !this.isVertical && l, E = n.key === "A" || n.key === "a", b = Ol(n);
      if (this.adapter.isRootFocused()) {
        if ((p || d) && b([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || f) && b([]))
          n.preventDefault(), this.focusFirstElement();
        else if (p && b(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && b(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var C = {
            event: n,
            focusItemAtIndex: function(_) {
              s.focusItemAtIndex(_);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(_) {
              return s.isIndexDisabled(_);
            }
          };
          Ll(C, this.typeaheadState);
        }
        return;
      }
      var M = this.adapter.getFocusedElementIndex();
      if (!(M === -1 && (M = r, M < 0))) {
        if (g && b([]))
          Wt(n), this.focusNextElement(M);
        else if (p && b([]))
          Wt(n), this.focusPrevElement(M);
        else if (g && b(["Shift"]) && this.isCheckboxList) {
          Wt(n);
          var S = this.focusNextElement(M);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (p && b(["Shift"]) && this.isCheckboxList) {
          Wt(n);
          var S = this.focusPrevElement(M);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (f && b([]))
          Wt(n), this.focusFirstElement();
        else if (d && b([]))
          Wt(n), this.focusLastElement();
        else if (f && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Wt(n), this.isIndexDisabled(M))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, M, M);
        } else if (d && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Wt(n), this.isIndexDisabled(M))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(M, this.adapter.getListItemCount() - 1, M);
        } else if (E && b(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || m) && b([])) {
          if (i) {
            var D = n.target;
            if (D && D.tagName === "A" && h || (Wt(n), this.isIndexDisabled(M)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(M, !1), this.adapter.notifyAction(M));
          }
        } else if ((h || m) && b(["Shift"]) && this.isCheckboxList) {
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
      this.isIndexValid(n, !1) && (i ? (this.adapter.removeClassForElementIndex(n, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === n && !i.forceUpdate)) {
        var r = xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== It.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== It.UNSET_INDEX && this.adapter.addClassForElementIndex(n, r), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]);
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
      f.length && (this.selectedIndex = _n([], Kn(s)), this.adapter.notifySelectionChange(f));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === It.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== It.UNSET_INDEX ? this.selectedIndex : Dp(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, i) {
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
      return Kr(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Op(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
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
        return Cp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Sp;
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
      this.originCorner = this.originCorner ^ At.RIGHT;
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), s = this.hasBit(i, At.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, At.RIGHT) ? "right" : "left", l = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, f = u.surfaceSize, d = (n = {}, n[a] = l, n[s] = o, n);
      c.width / f.width > si.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(a + " " + s), this.adapter.setPosition(d), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, At.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, i = this.measurements, r = i.viewportDistance, s = i.anchorSize, a = i.surfaceSize, l = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, At.BOTTOM), u, c;
      o ? (u = r.top - l + this.anchorMargin.bottom, c = r.bottom - l - this.anchorMargin.bottom) : (u = r.top - l + this.anchorMargin.top, c = r.bottom - l + s.height - this.anchorMargin.top);
      var f = c - a.height > 0;
      !f && u > c + this.openBottomBias && (n = this.setBit(n, At.BOTTOM));
      var d = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, At.FLIP_RTL), m = this.hasBit(this.anchorCorner, At.RIGHT) || this.hasBit(n, At.RIGHT), g = !1;
      d && h ? g = !m : g = m;
      var p, E;
      g ? (p = r.left + s.width + this.anchorMargin.right, E = r.right - this.anchorMargin.right) : (p = r.left + this.anchorMargin.left, E = r.right + s.width - this.anchorMargin.left);
      var b = p - a.width > 0, S = E - a.width > 0, C = this.hasBit(n, At.FLIP_RTL) && this.hasBit(n, At.RIGHT);
      return S && C && d || !b && C ? n = this.unsetBit(n, At.RIGHT) : (b && g && d || b && !g && m || !S && p >= E) && (n = this.setBit(n, At.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, s = this.hasBit(n, At.BOTTOM), a = this.hasBit(this.anchorCorner, At.BOTTOM), l = e.numbers.MARGIN_TO_EDGE;
      return s ? (r = i.top + this.anchorMargin.top - l, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, At.RIGHT), s = this.hasBit(this.anchorCorner, At.RIGHT);
      if (r) {
        var a = s ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return s ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, At.BOTTOM), s = this.hasBit(this.anchorCorner, At.BOTTOM), a = 0;
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
function Pp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Hp(t, e) {
  if (Pp(t) && e in Rl) {
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
}, Fp = {
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
var wp = (
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
        return Fp;
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
      this.validatedIndex(n), i ? (this.adapter.removeClassFromElementAtIndex(n, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Fn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Fn.ARIA_DISABLED_ATTR, "true"));
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
var _t = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Rr = {
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
var Up = (
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
        return _t;
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
        return Rr;
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
      this.disabled = n, this.disabled ? (this.adapter.addClass(_t.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(_t.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(_t.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, i = this.adapter.hasClass(_t.FOCUSED), r = n || i, s = this.adapter.hasClass(_t.REQUIRED);
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
      this.adapter.removeClass(_t.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(_t.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(_t.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(_t.FOCUSED))) {
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
        var i = this.adapter.hasClass(_t.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(_t.INVALID), this.adapter.removeMenuClass(_t.MENU_INVALID)) : (this.adapter.addClass(_t.INVALID), this.adapter.addMenuClass(_t.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(_t.REQUIRED) && !this.adapter.hasClass(_t.DISABLED) ? this.getSelectedIndex() !== yn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(_t.REQUIRED) : this.adapter.removeClass(_t.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(Rn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(_t.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(_t.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(_t.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(_t.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Rr.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Rr.ARIA_DESCRIBEDBY);
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
var Bp = (
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
const { document: Vp } = hu;
function Gp(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[34].default
  ), c = Ae(
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
    d = q(d, f[h]);
  return {
    c() {
      e = oe(), n = ee("div"), c && c.c(), me(n, d);
    },
    m(h, m) {
      B(h, e, m), B(h, n, m), c && c.m(n, null), t[35](n), a = !0, l || (o = [
        pe(
          Vp.body,
          "click",
          /*handleBodyClick*/
          t[11],
          !0
        ),
        fe(s = Je.call(
          null,
          n,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[10].call(null, n)
        ),
        pe(n, "keydown", function() {
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
      4) && Ce(
        c,
        u,
        t,
        /*$$scope*/
        t[33],
        a ? ye(
          u,
          /*$$scope*/
          t[33],
          m,
          null
        ) : Se(
          /*$$scope*/
          t[33]
        ),
        null
      ), me(n, d = de(f, [
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
      a || (A(c, h), a = !0);
    },
    o(h) {
      L(c, h), a = !1;
    },
    d(h) {
      h && (U(e), U(n)), c && c.d(h), t[35](null), l = !1, Ye(o);
    }
  };
}
const Ml = ([t, e]) => `${t}: ${e};`;
function jp(t, e, n) {
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
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l, o, u;
  const c = rt(Qe());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { static: m = !1 } = e, { anchor: g = !0 } = e, { fixed: p = !1 } = e, { open: E = m } = e, { managed: b = !1 } = e, { fullWidth: S = !1 } = e, { quickOpen: C = !1 } = e, { anchorElement: M = void 0 } = e, { anchorCorner: D = void 0 } = e, { anchorMargin: _ = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: O = 0 } = e, { horizontallyCenteredOnViewport: w = !1 } = e, { openBottomBias: y = 0 } = e, { neverRestoreFocus: v = !1 } = e, I, T, P = {}, W = {}, j;
  ze("SMUI:list:role", "menu"), ze("SMUI:list:item:role", "menuitem");
  const X = Rn;
  ct(() => (n(7, T = new Zo({
    addClass: R,
    removeClass: V,
    hasClass: k,
    hasAnchor: () => !!M,
    notifyClose: () => {
      b || n(13, E = m), E || Ie(I, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      b || n(13, E = m), E || Ie(I, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      b || n(13, E = !0), E && Ie(I, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      E || Ie(I, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (z) => I.contains(z),
    isRtl: () => getComputedStyle(I).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (z) => {
      n(9, W["transform-origin"] = z, W);
    },
    isFocused: () => document.activeElement === I,
    saveFocus: () => {
      var z;
      j = (z = document.activeElement) !== null && z !== void 0 ? z : void 0;
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
    setPosition: (z) => {
      n(9, W.left = "left" in z ? `${z.left}px` : "", W), n(9, W.right = "right" in z ? `${z.right}px` : "", W), n(9, W.top = "top" in z ? `${z.top}px` : "", W), n(9, W.bottom = "bottom" in z ? `${z.bottom}px` : "", W);
    },
    setMaxHeight: (z) => {
      n(9, W["max-height"] = z, W);
    }
  })), Ie(I, "SMUIMenuSurface:mount", {
    get open() {
      return E;
    },
    set open(z) {
      n(13, E = z);
    },
    closeProgrammatic: ue
  }), T.init(), () => {
    var z;
    const We = T.isHoistedElement;
    T.destroy(), We && ((z = I.parentNode) === null || z === void 0 || z.removeChild(I));
  })), en(() => {
    var ie;
    g && I && ((ie = I.parentElement) === null || ie === void 0 || ie.classList.remove("mdc-menu-surface--anchor"));
  });
  function k(ie) {
    return ie in P ? P[ie] : Me().classList.contains(ie);
  }
  function R(ie) {
    P[ie] || n(8, P[ie] = !0, P);
  }
  function V(ie) {
    (!(ie in P) || P[ie]) && n(8, P[ie] = !1, P);
  }
  function ue(ie) {
    T.close(ie), n(13, E = !1);
  }
  function Ne(ie) {
    T && E && !b && T.handleBodyClick(ie);
  }
  function Ee() {
    return E;
  }
  function Xe(ie) {
    n(13, E = ie);
  }
  function K(ie, z) {
    return T.setAbsolutePosition(ie, z);
  }
  function J(ie) {
    return T.setIsHoisted(ie);
  }
  function Re() {
    return T.isFixed();
  }
  function Me() {
    return I;
  }
  function He(ie) {
    se[ie ? "unshift" : "push"](() => {
      I = ie, n(6, I);
    });
  }
  return t.$$set = (ie) => {
    e = q(q({}, e), $e(ie)), n(12, r = he(e, i)), "use" in ie && n(0, f = ie.use), "class" in ie && n(1, d = ie.class), "style" in ie && n(2, h = ie.style), "static" in ie && n(3, m = ie.static), "anchor" in ie && n(15, g = ie.anchor), "fixed" in ie && n(4, p = ie.fixed), "open" in ie && n(13, E = ie.open), "managed" in ie && n(16, b = ie.managed), "fullWidth" in ie && n(5, S = ie.fullWidth), "quickOpen" in ie && n(17, C = ie.quickOpen), "anchorElement" in ie && n(14, M = ie.anchorElement), "anchorCorner" in ie && n(18, D = ie.anchorCorner), "anchorMargin" in ie && n(19, _ = ie.anchorMargin), "maxHeight" in ie && n(20, O = ie.maxHeight), "horizontallyCenteredOnViewport" in ie && n(21, w = ie.horizontallyCenteredOnViewport), "openBottomBias" in ie && n(22, y = ie.openBottomBias), "neverRestoreFocus" in ie && n(23, v = ie.neverRestoreFocus), "$$scope" in ie && n(33, a = ie.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | t.$$.dirty[1] & /*_b, _c*/
    3 && I && g && !(!(n(30, l = I.parentElement) === null || l === void 0) && l.classList.contains("mdc-menu-surface--anchor")) && (n(31, o = I.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), n(14, M = n(32, u = I.parentElement) !== null && u !== void 0 ? u : void 0)), t.$$.dirty[0] & /*instance, open*/
    8320 && T && T.isOpen() !== E && (E ? T.open() : T.close()), t.$$.dirty[0] & /*instance, quickOpen*/
    131200 && T && T.setQuickOpen(C), t.$$.dirty[0] & /*instance, fixed*/
    144 && T && T.setFixedPosition(p), t.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && T && T.setMaxHeight(O), t.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && T && T.setIsHorizontallyCenteredOnViewport(w), t.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && T && D != null && (typeof D == "string" ? T.setAnchorCorner(X[D]) : T.setAnchorCorner(D)), t.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && T && T.setAnchorMargin(_), t.$$.dirty[0] & /*instance, openBottomBias*/
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
    P,
    W,
    c,
    Ne,
    r,
    E,
    M,
    g,
    b,
    C,
    D,
    _,
    O,
    w,
    y,
    v,
    Ee,
    Xe,
    K,
    J,
    Re,
    Me,
    l,
    o,
    u,
    a,
    s,
    He
  ];
}
class qp extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      jp,
      Gp,
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
function Wp(t, { addClass: e = (i) => t.classList.add(i), removeClass: n = (i) => t.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function zp(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].default
  ), i = Ae(
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
      4194304) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[22],
        e ? ye(
          n,
          /*$$scope*/
          r[22],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[22]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Kp(t) {
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
    $$slots: { default: [zp] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = q(a, r[l]);
  return (
    /*open*/
    t[0] !== void 0 && (a.open = /*open*/
    t[0]), e = new qp({ props: a }), t[18](e), se.push(() => gt(e, "open", s)), e.$on(
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
        x(e, l, o), i = !0;
      },
      p(l, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? de(r, [
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
          512 && be(
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
        i || (A(e.$$.fragment, l), i = !0);
      },
      o(l) {
        L(e.$$.fragment, l), i = !1;
      },
      d(l) {
        t[18](null), $(e, l);
      }
    }
  );
}
function Xp(t, e, n) {
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
  let s = he(e, r), { $$slots: a = {}, $$scope: l } = e;
  const { closest: o } = Gi, u = rt(Qe());
  let { use: c = [] } = e, { class: f = "" } = e, { open: d = !1 } = e, h, m, g, p;
  ct(() => (n(3, m = new wp({
    addClassToElementAtIndex: (P, W) => {
      p.addClassForElementIndex(P, W);
    },
    removeClassFromElementAtIndex: (P, W) => {
      p.removeClassForElementIndex(P, W);
    },
    addAttributeToElementAtIndex: (P, W, j) => {
      p.setAttributeForElementIndex(P, W, j);
    },
    removeAttributeFromElementAtIndex: (P, W) => {
      p.removeAttributeForElementIndex(P, W);
    },
    getAttributeFromElementAtIndex: (P, W) => p.getAttributeFromElementIndex(P, W),
    elementContainsClass: (P, W) => P.classList.contains(W),
    closeSurface: (P) => {
      g.closeProgrammatic(P), Ie(w(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (P) => p.getOrderedList().map((W) => W.element).indexOf(P),
    notifySelected: (P) => Ie(
      w(),
      "SMUIMenu:selected",
      {
        index: P.index,
        item: p.getOrderedList()[P.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => p.items.length,
    focusItemAtIndex: (P) => p.focusItemAtIndex(P),
    focusListRoot: () => "focus" in p.element && p.element.focus(),
    isSelectableItemAtIndex: (P) => !!o(p.getOrderedList()[P].element, `.${qn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (P) => {
      const W = p.getOrderedList(), j = o(W[P].element, `.${qn.MENU_SELECTION_GROUP}`), X = j == null ? void 0 : j.querySelector(`.${qn.MENU_SELECTED_LIST_ITEM}`);
      return X ? W.map((k) => k.element).indexOf(X) : -1;
    }
  })), Ie(w(), "SMUIMenu:mount", m), m.init(), () => {
    m.destroy();
  }));
  function E(P) {
    m && m.handleKeydown(P);
  }
  function b(P) {
    g || (g = P.detail);
  }
  function S(P) {
    p || n(4, p = P.detail);
  }
  function C() {
    return d;
  }
  function M(P) {
    n(0, d = P);
  }
  function D(P) {
    m.setDefaultFocusState(P);
  }
  function _() {
    return m.getSelectedIndex();
  }
  function O() {
    return h;
  }
  function w() {
    return h.getElement();
  }
  function y(P) {
    se[P ? "unshift" : "push"](() => {
      h = P, n(2, h);
    });
  }
  function v(P) {
    d = P, n(0, d);
  }
  const I = () => m && m.handleMenuSurfaceOpened(), T = (P) => m && m.handleItemAction(p.getOrderedList()[P.detail.index].element);
  return t.$$set = (P) => {
    e = q(q({}, e), $e(P)), n(9, s = he(e, r)), "use" in P && n(10, c = P.use), "class" in P && n(1, f = P.class), "open" in P && n(0, d = P.open), "$$scope" in P && n(22, l = P.$$scope);
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
    E,
    b,
    S,
    s,
    c,
    C,
    M,
    D,
    _,
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
class Yp extends Le {
  constructor(e) {
    super(), Te(this, e, Xp, Kp, _e, {
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
function Zp(t) {
  let e;
  const n = (
    /*#slots*/
    t[42].default
  ), i = Ae(
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
      8192) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[44],
        e ? ye(
          n,
          /*$$scope*/
          r[44],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[44]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qp(t) {
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
      $$slots: { default: [Zp] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = q(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = q(u, de(r, [
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
      33554432 && be(
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
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      4096 && s !== (s = /*component*/
      l[12])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
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
        ), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? de(r, [
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
          33554432 && be(
            /*$$restProps*/
            l[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[43](null), e && $(e, l);
    }
  };
}
function Jp(t, e, n) {
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
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l;
  const { closest: o, matches: u } = Gi, c = rt(Qe());
  let { use: f = [] } = e, { class: d = "" } = e, { nonInteractive: h = !1 } = e, { dense: m = !1 } = e, { textualList: g = !1 } = e, { avatarList: p = !1 } = e, { iconList: E = !1 } = e, { imageList: b = !1 } = e, { thumbnailList: S = !1 } = e, { videoList: C = !1 } = e, { twoLine: M = !1 } = e, { threeLine: D = !1 } = e, { vertical: _ = !0 } = e, { wrapFocus: O = (l = qe("SMUI:list:wrapFocus")) !== null && l !== void 0 ? l : !1 } = e, { singleSelection: w = !1 } = e, { disabledItemsFocusable: y = !1 } = e, { selectedIndex: v = -1 } = e, { radioList: I = !1 } = e, { checkList: T = !1 } = e, { hasTypeahead: P = !1 } = e, W, j, X = [], k = qe("SMUI:list:role"), R = qe("SMUI:list:nav");
  const V = /* @__PURE__ */ new WeakMap();
  let ue = qe("SMUI:dialog:selection"), Ne = qe("SMUI:addLayoutListener"), Ee, { component: Xe = Nt } = e, { tag: K = Xe === Nt ? R ? "nav" : "ul" : void 0 } = e;
  ze("SMUI:list:nonInteractive", h), ze("SMUI:separator:context", "list"), k || (w ? (k = "listbox", ze("SMUI:list:item:role", "option")) : I ? (k = "radiogroup", ze("SMUI:list:item:role", "radio")) : T ? (k = "group", ze("SMUI:list:item:role", "checkbox")) : (k = "list", ze("SMUI:list:item:role", void 0))), Ne && (Ee = Ne(ne)), ct(() => {
    n(41, j = new Np({
      addClassForElementIndex: Q,
      focusItemAtIndex: ke,
      getAttributeForElementIndex: (ve, Oe) => {
        var lt, tn;
        return (tn = (lt = Ve()[ve]) === null || lt === void 0 ? void 0 : lt.getAttr(Oe)) !== null && tn !== void 0 ? tn : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Ve().map((ve) => ve.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => X.length,
      getPrimaryTextAtIndex: G,
      hasCheckboxAtIndex: (ve) => {
        var Oe, lt;
        return (lt = (Oe = Ve()[ve]) === null || Oe === void 0 ? void 0 : Oe.hasCheckbox) !== null && lt !== void 0 ? lt : !1;
      },
      hasRadioAtIndex: (ve) => {
        var Oe, lt;
        return (lt = (Oe = Ve()[ve]) === null || Oe === void 0 ? void 0 : Oe.hasRadio) !== null && lt !== void 0 ? lt : !1;
      },
      isCheckboxCheckedAtIndex: (ve) => {
        var Oe;
        const lt = Ve()[ve];
        return (Oe = (lt == null ? void 0 : lt.hasCheckbox) && lt.checked) !== null && Oe !== void 0 ? Oe : !1;
      },
      isFocusInsideList: () => W != null && ae() !== document.activeElement && ae().contains(document.activeElement),
      isRootFocused: () => W != null && document.activeElement === ae(),
      listItemAtIndexHasClass: St,
      notifyAction: (ve) => {
        n(26, v = ve), W != null && Ie(ae(), "SMUIList:action", { index: ve }, void 0, !0);
      },
      notifySelectionChange: (ve) => {
        W != null && Ie(ae(), "SMUIList:selectionChange", { changedIndices: ve });
      },
      removeClassForElementIndex: De,
      setAttributeForElementIndex: je,
      setCheckedCheckboxOrRadioAtIndex: (ve, Oe) => {
        Ve()[ve].checked = Oe;
      },
      setTabIndexForListItemChildren: (ve, Oe) => {
        const lt = Ve()[ve];
        Array.prototype.forEach.call(lt.element.querySelectorAll("button:not(:disabled), a"), (ti) => {
          ti.setAttribute("tabindex", Oe);
        });
      }
    }));
    const Y = {
      get element() {
        return ae();
      },
      get items() {
        return X;
      },
      get typeaheadInProgress() {
        return j.isTypeaheadInProgress();
      },
      typeaheadMatchItem(ve, Oe) {
        return j.typeaheadMatchItem(
          ve,
          Oe,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Ve,
      focusItemAtIndex: ke,
      addClassForElementIndex: Q,
      removeClassForElementIndex: De,
      setAttributeForElementIndex: je,
      removeAttributeForElementIndex: Fe,
      getAttributeFromElementIndex: Rt,
      getPrimaryTextAtIndex: G
    };
    return Ie(ae(), "SMUIList:mount", Y), j.init(), j.layout(), () => {
      j.destroy();
    };
  }), en(() => {
    Ee && Ee();
  });
  function J(Y) {
    X.push(Y.detail), V.set(Y.detail.element, Y.detail), w && Y.detail.selected && n(26, v = le(Y.detail.element)), Y.stopPropagation();
  }
  function Re(Y) {
    var ve;
    const Oe = (ve = Y.detail && X.indexOf(Y.detail)) !== null && ve !== void 0 ? ve : -1;
    Oe !== -1 && (X.splice(Oe, 1), X = X, V.delete(Y.detail.element)), Y.stopPropagation();
  }
  function Me(Y) {
    j && Y.target && j.handleKeydown(Y, Y.target.classList.contains("mdc-deprecated-list-item"), le(Y.target));
  }
  function He(Y) {
    j && Y.target && j.handleFocusIn(le(Y.target));
  }
  function ie(Y) {
    j && Y.target && j.handleFocusOut(le(Y.target));
  }
  function z(Y) {
    j && Y.target && j.handleClick(le(Y.target), !u(Y.target, 'input[type="checkbox"], input[type="radio"]'), Y);
  }
  function We(Y) {
    if (I || T) {
      const ve = le(Y.target);
      if (ve !== -1) {
        const Oe = Ve()[ve];
        Oe && (I && !Oe.checked || T) && (u(Y.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Oe.checked = !Oe.checked), Oe.activateRipple(), window.requestAnimationFrame(() => {
          Oe.deactivateRipple();
        }));
      }
    }
  }
  function Ve() {
    return W == null ? [] : [...ae().children].map((Y) => V.get(Y)).filter((Y) => Y && Y._smui_list_item_accessor);
  }
  function St(Y, ve) {
    var Oe;
    const lt = Ve()[Y];
    return (Oe = lt && lt.hasClass(ve)) !== null && Oe !== void 0 ? Oe : !1;
  }
  function Q(Y, ve) {
    const Oe = Ve()[Y];
    Oe && Oe.addClass(ve);
  }
  function De(Y, ve) {
    const Oe = Ve()[Y];
    Oe && Oe.removeClass(ve);
  }
  function je(Y, ve, Oe) {
    const lt = Ve()[Y];
    lt && lt.addAttr(ve, Oe);
  }
  function Fe(Y, ve) {
    const Oe = Ve()[Y];
    Oe && Oe.removeAttr(ve);
  }
  function Rt(Y, ve) {
    const Oe = Ve()[Y];
    return Oe ? Oe.getAttr(ve) : null;
  }
  function G(Y) {
    var ve;
    const Oe = Ve()[Y];
    return (ve = Oe && Oe.getPrimaryText()) !== null && ve !== void 0 ? ve : "";
  }
  function le(Y) {
    const ve = o(Y, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ve && u(ve, ".mdc-deprecated-list-item") ? Ve().map((Oe) => Oe == null ? void 0 : Oe.element).indexOf(ve) : -1;
  }
  function ne() {
    return j.layout();
  }
  function Ke(Y, ve) {
    return j.setEnabled(Y, ve);
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
  function ke(Y) {
    const ve = Ve()[Y];
    ve && "focus" in ve.element && ve.element.focus();
  }
  function ae() {
    return W.getElement();
  }
  function qt(Y) {
    se[Y ? "unshift" : "push"](() => {
      W = Y, n(14, W);
    });
  }
  return t.$$set = (Y) => {
    e = q(q({}, e), $e(Y)), n(25, r = he(e, i)), "use" in Y && n(0, f = Y.use), "class" in Y && n(1, d = Y.class), "nonInteractive" in Y && n(2, h = Y.nonInteractive), "dense" in Y && n(3, m = Y.dense), "textualList" in Y && n(4, g = Y.textualList), "avatarList" in Y && n(5, p = Y.avatarList), "iconList" in Y && n(6, E = Y.iconList), "imageList" in Y && n(7, b = Y.imageList), "thumbnailList" in Y && n(8, S = Y.thumbnailList), "videoList" in Y && n(9, C = Y.videoList), "twoLine" in Y && n(10, M = Y.twoLine), "threeLine" in Y && n(11, D = Y.threeLine), "vertical" in Y && n(27, _ = Y.vertical), "wrapFocus" in Y && n(28, O = Y.wrapFocus), "singleSelection" in Y && n(29, w = Y.singleSelection), "disabledItemsFocusable" in Y && n(30, y = Y.disabledItemsFocusable), "selectedIndex" in Y && n(26, v = Y.selectedIndex), "radioList" in Y && n(31, I = Y.radioList), "checkList" in Y && n(32, T = Y.checkList), "hasTypeahead" in Y && n(33, P = Y.hasTypeahead), "component" in Y && n(12, Xe = Y.component), "tag" in Y && n(13, K = Y.tag), "$$scope" in Y && n(44, a = Y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*vertical*/
    134217728 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setVerticalOrientation(_), t.$$.dirty[0] & /*wrapFocus*/
    268435456 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setWrapFocus(O), t.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && j && j.setHasTypeahead(P), t.$$.dirty[0] & /*singleSelection*/
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
    E,
    b,
    S,
    C,
    M,
    D,
    Xe,
    K,
    W,
    k,
    c,
    ue,
    J,
    Re,
    Me,
    He,
    ie,
    z,
    We,
    r,
    v,
    _,
    O,
    w,
    y,
    I,
    T,
    P,
    ne,
    Ke,
    ht,
    ft,
    et,
    ke,
    ae,
    j,
    s,
    qt,
    a
  ];
}
class xp extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      Jp,
      Qp,
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
function Dl(t) {
  let e;
  return {
    c() {
      e = ee("span"), N(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function $p(t) {
  let e, n, i = (
    /*ripple*/
    t[7] && Dl()
  );
  const r = (
    /*#slots*/
    t[34].default
  ), s = Ae(
    r,
    t,
    /*$$scope*/
    t[37],
    null
  );
  return {
    c() {
      i && i.c(), e = Ze(), s && s.c();
    },
    m(a, l) {
      i && i.m(a, l), B(a, e, l), s && s.m(a, l), n = !0;
    },
    p(a, l) {
      /*ripple*/
      a[7] ? i || (i = Dl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), s && s.p && (!n || l[1] & /*$$scope*/
      64) && Ce(
        s,
        r,
        a,
        /*$$scope*/
        a[37],
        n ? ye(
          r,
          /*$$scope*/
          a[37],
          l,
          null
        ) : Se(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      n || (A(s, a), n = !0);
    },
    o(a) {
      L(s, a), n = !1;
    },
    d(a) {
      a && U(e), i && i.d(a), s && s.d(a);
    }
  };
}
function eg(t) {
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
      ).map(Mr).concat([
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
      $$slots: { default: [$p] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = q(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = q(u, de(r, [
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
        ).map(Mr).concat([
          /*style*/
          l[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && be(
        /*nav*/
        l[23] && /*activated*/
        l[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && be(!/*nav*/
      l[23] || /*wrapper*/
      l[8] ? { role: (
        /*role*/
        l[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && be(!/*nav*/
      l[23] && /*role*/
      l[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          l[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && be(!/*nav*/
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
      8389632 && be(/*nav*/
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
      1048576 && be(
        /*internalAttrs*/
        l[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && be(
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
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
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
        ), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? de(r, [
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
            ).map(Mr).concat([
              /*style*/
              l[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && be(
            /*nav*/
            l[23] && /*activated*/
            l[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && be(!/*nav*/
          l[23] || /*wrapper*/
          l[8] ? { role: (
            /*role*/
            l[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && be(!/*nav*/
          l[23] && /*role*/
          l[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              l[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && be(!/*nav*/
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
          8389632 && be(/*nav*/
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
          1048576 && be(
            /*internalAttrs*/
            l[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && be(
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
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[35](null), e && $(e, l);
    }
  };
}
let tg = 0;
const Mr = ([t, e]) => `${t}: ${e};`;
function ng(t, e, n) {
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
  let s = he(e, r), { $$slots: a = {}, $$scope: l } = e;
  var o;
  const u = rt(Qe());
  let c = () => {
  };
  function f(Q) {
    return Q === c;
  }
  let { use: d = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { color: g = void 0 } = e, { nonInteractive: p = (o = qe("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  ze("SMUI:list:nonInteractive", void 0);
  let { ripple: E = !p } = e, { wrapper: b = !1 } = e, { activated: S = !1 } = e, { role: C = b ? "presentation" : qe("SMUI:list:item:role") } = e;
  ze("SMUI:list:item:role", void 0);
  let { selected: M = !1 } = e, { disabled: D = !1 } = e, { skipRestoreFocus: _ = !1 } = e, { tabindex: O = c } = e, { inputId: w = "SMUI-form-field-list-" + tg++ } = e, { href: y = void 0 } = e, v, I = {}, T = {}, P = {}, W, j, X = qe("SMUI:list:item:nav"), { component: k = Nt } = e, { tag: R = k === Nt ? X ? y ? "a" : "span" : "li" : void 0 } = e;
  ze("SMUI:generic:input:props", { id: w }), ze("SMUI:separator:context", void 0), ct(() => {
    if (!M && !p) {
      let De = !0, je = v.getElement();
      for (; je.previousSibling; )
        if (je = je.previousSibling, je.nodeType === 1 && je.classList.contains("mdc-deprecated-list-item") && !je.classList.contains("mdc-deprecated-list-item--disabled")) {
          De = !1;
          break;
        }
      De && (j = window.requestAnimationFrame(() => Re(je)));
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return We();
      },
      get selected() {
        return M;
      },
      set selected(De) {
        n(0, M = De);
      },
      hasClass: V,
      addClass: ue,
      removeClass: Ne,
      getAttr: Xe,
      addAttr: K,
      removeAttr: J,
      getPrimaryText: z,
      // For inputs within item.
      get checked() {
        var De;
        return (De = W && W.checked) !== null && De !== void 0 ? De : !1;
      },
      set checked(De) {
        W && n(16, W.checked = !!De, W);
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
        return s.value;
      },
      // For autocomplete
      action: ie,
      get tabindex() {
        return i;
      },
      set tabindex(De) {
        n(30, O = De);
      },
      get disabled() {
        return D;
      },
      get activated() {
        return S;
      },
      set activated(De) {
        n(1, S = De);
      }
    };
    return Ie(We(), "SMUIListItem:mount", Q), () => {
      Ie(We(), "SMUIListItem:unmount", Q);
    };
  }), en(() => {
    j && window.cancelAnimationFrame(j);
  });
  function V(Q) {
    return Q in I ? I[Q] : We().classList.contains(Q);
  }
  function ue(Q) {
    I[Q] || n(18, I[Q] = !0, I);
  }
  function Ne(Q) {
    (!(Q in I) || I[Q]) && n(18, I[Q] = !1, I);
  }
  function Ee(Q, De) {
    T[Q] != De && (De === "" || De == null ? (delete T[Q], n(19, T)) : n(19, T[Q] = De, T));
  }
  function Xe(Q) {
    var De;
    return Q in P ? (De = P[Q]) !== null && De !== void 0 ? De : null : We().getAttribute(Q);
  }
  function K(Q, De) {
    P[Q] !== De && n(20, P[Q] = De, P);
  }
  function J(Q) {
    (!(Q in P) || P[Q] != null) && n(20, P[Q] = void 0, P);
  }
  function Re(Q) {
    let De = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const je = Q.attributes.getNamedItem("tabindex");
        if (je && je.value === "0") {
          De = !1;
          break;
        }
      }
    De && n(21, i = 0);
  }
  function Me(Q) {
    const De = Q.key === "Enter", je = Q.key === "Space";
    (De || je) && ie(Q);
  }
  function He(Q) {
    ("_smui_checkbox_accessor" in Q.detail || "_smui_radio_accessor" in Q.detail) && n(16, W = Q.detail);
  }
  function ie(Q) {
    D || Ie(We(), "SMUI:action", Q);
  }
  function z() {
    var Q, De, je;
    const Fe = We(), Rt = Fe.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Rt)
      return (Q = Rt.textContent) !== null && Q !== void 0 ? Q : "";
    const G = Fe.querySelector(".mdc-deprecated-list-item__text");
    return G ? (De = G.textContent) !== null && De !== void 0 ? De : "" : (je = Fe.textContent) !== null && je !== void 0 ? je : "";
  }
  function We() {
    return v.getElement();
  }
  function Ve(Q) {
    se[Q ? "unshift" : "push"](() => {
      v = Q, n(17, v);
    });
  }
  const St = () => n(16, W = void 0);
  return t.$$set = (Q) => {
    e = q(q({}, e), $e(Q)), n(29, s = he(e, r)), "use" in Q && n(2, d = Q.use), "class" in Q && n(3, h = Q.class), "style" in Q && n(4, m = Q.style), "color" in Q && n(5, g = Q.color), "nonInteractive" in Q && n(6, p = Q.nonInteractive), "ripple" in Q && n(7, E = Q.ripple), "wrapper" in Q && n(8, b = Q.wrapper), "activated" in Q && n(1, S = Q.activated), "role" in Q && n(9, C = Q.role), "selected" in Q && n(0, M = Q.selected), "disabled" in Q && n(10, D = Q.disabled), "skipRestoreFocus" in Q && n(11, _ = Q.skipRestoreFocus), "tabindex" in Q && n(30, O = Q.tabindex), "inputId" in Q && n(31, w = Q.inputId), "href" in Q && n(12, y = Q.href), "component" in Q && n(13, k = Q.component), "tag" in Q && n(14, R = Q.tag), "$$scope" in Q && n(37, l = Q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && n(21, i = f(O) ? !p && !D && (M || W && W.checked) ? 0 : -1 : O);
  }, [
    M,
    S,
    d,
    h,
    m,
    g,
    p,
    E,
    b,
    C,
    D,
    _,
    y,
    k,
    R,
    ie,
    W,
    v,
    I,
    T,
    P,
    i,
    u,
    X,
    ue,
    Ne,
    Ee,
    Me,
    He,
    s,
    O,
    w,
    z,
    We,
    a,
    Ve,
    St,
    l
  ];
}
class ig extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      ng,
      eg,
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
function rg(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[8].default
  ), o = Ae(
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
    c = q(c, u[f]);
  return {
    c() {
      e = ee("span"), o && o.c(), me(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[9](e), r = !0, s || (a = [
        fe(i = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[3].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      128) && Ce(
        o,
        l,
        f,
        /*$$scope*/
        f[7],
        r ? ye(
          l,
          /*$$scope*/
          f[7],
          d,
          null
        ) : Se(
          /*$$scope*/
          f[7]
        ),
        null
      ), me(e, c = de(u, [
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
      r || (A(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[9](null), s = !1, Ye(a);
    }
  };
}
function sg(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = qe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function h(m) {
    se[m ? "unshift" : "push"](() => {
      c = m, n(2, c);
    });
  }
  return t.$$set = (m) => {
    e = q(q({}, e), $e(m)), n(5, r = he(e, i)), "use" in m && n(0, o = m.use), "class" in m && n(1, u = m.class), "$$scope" in m && n(7, a = m.$$scope);
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
class lg extends Le {
  constructor(e) {
    super(), Te(this, e, sg, rg, _e, { use: 0, class: 1, getElement: 6 });
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
  component: lg
});
function ag(t) {
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
    i: it,
    o: it,
    d(n) {
      n && U(e);
    }
  };
}
function og(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].default
  ), i = Ae(
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
      4096) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? ye(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ug(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [og, ag], f = [];
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
    m = q(m, h[g]);
  return {
    c() {
      e = ee("div"), i.c(), me(e, m);
    },
    m(g, p) {
      B(g, e, p), f[n].m(e, null), t[14](e), l = !0, o || (u = [
        fe(a = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[9].call(null, e)
        )
      ], o = !0);
    },
    p(g, [p]) {
      let E = n;
      n = d(g), n === E ? f[n].p(g, p) : (Ue(), L(f[E], 1, 1, () => {
        f[E] = null;
      }), Be(), i = f[n], i ? i.p(g, p) : (i = f[n] = c[n](g), i.c()), A(i, 1), i.m(e, null)), me(e, m = de(h, [
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
      l || (A(i), l = !0);
    },
    o(g) {
      L(i), l = !1;
    },
    d(g) {
      g && U(e), f[n].d(), t[14](null), o = !1, Ye(u);
    }
  };
}
let cg = 0;
function fg(t, e, n) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + cg++ } = e, { persistent: f = !1 } = e, { validationMsg: d = !1 } = e, h, m, g = {}, p = {}, E;
  ct(() => (m = new Bp({
    addClass: S,
    removeClass: C,
    hasClass: b,
    getAttr: M,
    setAttr: D,
    removeAttr: _,
    setContent: (y) => {
      n(8, E = y);
    }
  }), c.startsWith("SMUI-select-helper-text-") && Ie(O(), "SMUISelectHelperText:id", c), Ie(O(), "SMUISelectHelperText:mount", m), m.init(), () => {
    Ie(O(), "SMUISelectHelperText:unmount", m), m.destroy();
  }));
  function b(y) {
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
  function _(y) {
    (!(y in p) || p[y] != null) && n(7, p[y] = void 0, p);
  }
  function O() {
    return h;
  }
  function w(y) {
    se[y ? "unshift" : "push"](() => {
      h = y, n(5, h);
    });
  }
  return t.$$set = (y) => {
    e = q(q({}, e), $e(y)), n(10, r = he(e, i)), "use" in y && n(0, o = y.use), "class" in y && n(1, u = y.class), "id" in y && n(2, c = y.id), "persistent" in y && n(3, f = y.persistent), "validationMsg" in y && n(4, d = y.validationMsg), "$$scope" in y && n(12, a = y.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    g,
    p,
    E,
    l,
    r,
    O,
    a,
    s,
    w
  ];
}
class dg extends Le {
  constructor(e) {
    super(), Te(this, e, fg, ug, _e, {
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
const hg = (t) => ({}), kl = (t) => ({}), mg = (t) => ({}), Nl = (t) => ({}), pg = (t) => ({}), Pl = (t) => ({}), gg = (t) => ({}), Hl = (t) => ({});
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
    i = q(i, n[r]);
  return {
    c() {
      e = ee("input"), me(e, i);
    },
    m(r, s) {
      B(r, e, s), e.autofocus && e.focus();
    },
    p(r, s) {
      me(e, i = de(n, [
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
      e = ee("span"), N(e, "class", "mdc-select__ripple");
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
    $$slots: { default: [_g] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new qi({ props: r }), t[67](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? de(i, [
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
        4194304 && be(Ge(
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
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[67](null), $(e, s);
    }
  };
}
function _g(t) {
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
  ), s = Ae(
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
      33554432) && Ce(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ye(
          r,
          /*$$scope*/
          a[87],
          l,
          gg
        ) : Se(
          /*$$scope*/
          a[87]
        ),
        Hl
      );
    },
    i(a) {
      i || (A(s, a), i = !0);
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
    $$slots: { default: [vg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new zo({ props: r }), t[69](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots, $$restProps*/
      12582912 ? de(i, [
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
        4194304 && be(Ge(
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
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[69](null), $(e, s);
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
    $$slots: { default: [bg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new qi({ props: r }), t[68](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? de(i, [
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
        4194304 && be(Ge(
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
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[68](null), $(e, s);
    }
  };
}
function bg(t) {
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
  ), s = Ae(
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
      33554432) && Ce(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ye(
          r,
          /*$$scope*/
          a[87],
          l,
          pg
        ) : Se(
          /*$$scope*/
          a[87]
        ),
        Pl
      );
    },
    i(a) {
      i || (A(s, a), i = !0);
    },
    o(a) {
      L(s, a), i = !1;
    },
    d(a) {
      a && U(n), s && s.d(a);
    }
  };
}
function vg(t) {
  let e, n, i = !/*noLabel*/
  t[8] && /*label*/
  (t[9] != null || /*$$slots*/
  t[54].label) && Vl(t);
  return {
    c() {
      i && i.c(), e = Ze();
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
      8388608 && A(i, 1)) : (i = Vl(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ue(), L(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(r) {
      n || (A(i), n = !0);
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
    r = q(r, i[s]);
  return e = new Wo({ props: r }), t[70](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      4194304 ? de(i, [be(Ge(
        /*$$restProps*/
        s[53],
        "ripple$"
      ))]) : {};
      e.$set(l);
    },
    i(s) {
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[70](null), $(e, s);
    }
  };
}
function Ig(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].default
  ), i = Ae(
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
      33554432) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ye(
          n,
          /*$$scope*/
          r[87],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[87]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Eg(t) {
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
    $$slots: { default: [Ig] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = q(a, r[l]);
  return (
    /*selectedIndex*/
    t[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    t[24]), e = new xp({ props: a }), se.push(() => gt(e, "selectedIndex", s)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      t[76]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(l, o) {
        x(e, l, o), i = !0;
      },
      p(l, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? de(r, [
          r[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            l[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && be(Ge(
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
        i || (A(e.$$.fragment, l), i = !0);
      },
      o(l) {
        L(e.$$.fragment, l), i = !1;
      },
      d(l) {
        $(e, l);
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
    $$slots: { default: [Ag] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new dg({ props: r }), e.$on(
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
      x(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      4194304 ? de(i, [be(Ge(
        /*$$restProps*/
        s[53],
        "helperText$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      $(e, s);
    }
  };
}
function Ag(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].helperText
  ), i = Ae(
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
      33554432) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? ye(
          n,
          /*$$scope*/
          r[87],
          s,
          hg
        ) : Se(
          /*$$scope*/
          r[87]
        ),
        kl
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function yg(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, E, b, S, C, M, D, _, O, w, y, v, I, T, P, W, j, X, k, R, V, ue, Ne, Ee, Xe, K, J = (
    /*hiddenInput*/
    t[12] && Fl(t)
  ), Re = (
    /*variant*/
    t[7] === "filled" && wl()
  ), Me = (
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
  ), z = Ae(
    ie,
    t,
    /*$$scope*/
    t[87],
    Nl
  );
  let We = [
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
  for (let ke = 0; ke < We.length; ke += 1)
    Ve = q(Ve, We[ke]);
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
  for (let ke = 0; ke < St.length; ke += 1)
    Q = q(Q, St[ke]);
  let De = [
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
  for (let ke = 0; ke < De.length; ke += 1)
    je = q(je, De[ke]);
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
  for (let ke = 0; ke < Rt.length; ke += 1)
    G = q(G, Rt[ke]);
  const le = [
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
  function ne(ke) {
    t[77](ke);
  }
  let Ke = {
    $$slots: { default: [Eg] },
    $$scope: { ctx: t }
  };
  for (let ke = 0; ke < le.length; ke += 1)
    Ke = q(Ke, le[ke]);
  /*menuOpen*/
  t[31] !== void 0 && (Ke.open = /*menuOpen*/
  t[31]), W = new Yp({ props: Ke }), se.push(() => gt(W, "open", ne)), W.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    t[78]
  ), W.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    t[79]
  ), W.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    t[80]
  ), W.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    t[81]
  );
  let ht = [
    {
      class: X = re({
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
  for (let ke = 0; ke < ht.length; ke += 1)
    ft = q(ft, ht[ke]);
  let et = (
    /*$$slots*/
    t[54].helperText && jl(t)
  );
  return {
    c() {
      e = ee("div"), J && J.c(), n = oe(), i = ee("div"), Re && Re.c(), r = oe(), Me && Me.c(), s = oe(), He && He.c(), a = oe(), z && z.c(), l = oe(), o = ee("span"), u = ee("span"), c = ut(
        /*$selectedTextStore*/
        t[42]
      ), E = oe(), b = ee("span"), S = at("svg"), C = at("polygon"), M = at("polygon"), O = oe(), Fe && Fe.c(), P = oe(), te(W.$$.fragment), ue = oe(), et && et.c(), Ne = Ze(), me(u, Ve), me(o, Q), N(C, "class", "mdc-select__dropdown-icon-inactive"), N(C, "stroke", "none"), N(C, "fill-rule", "evenodd"), N(C, "points", "7 10 12 15 17 10"), N(M, "class", "mdc-select__dropdown-icon-active"), N(M, "stroke", "none"), N(M, "fill-rule", "evenodd"), N(M, "points", "7 15 12 10 17 15"), N(S, "class", "mdc-select__dropdown-icon-graphic"), N(S, "viewBox", "7 10 10 5"), N(S, "focusable", "false"), me(b, je), me(i, G), me(e, ft);
    },
    m(ke, ae) {
      B(ke, e, ae), J && J.m(e, null), Z(e, n), Z(e, i), Re && Re.m(i, null), Z(i, r), Me && Me.m(i, null), Z(i, s), He && He.m(i, null), Z(i, a), z && z.m(i, null), Z(i, l), Z(i, o), Z(o, u), Z(u, c), Z(i, E), Z(i, b), Z(b, S), Z(S, C), Z(S, M), Z(i, O), Fe && Fe.m(i, null), t[71](i), Z(e, P), x(W, e, null), t[82](e), B(ke, ue, ae), et && et.m(ke, ae), B(ke, Ne, ae), Ee = !0, Xe || (K = [
        fe(m = Je.call(
          null,
          u,
          /*selectedText$use*/
          t[18]
        )),
        fe(p = Je.call(
          null,
          o,
          /*selectedTextContainer$use*/
          t[16]
        )),
        fe(_ = Je.call(
          null,
          b,
          /*dropdownIcon$use*/
          t[20]
        )),
        fe(T = Je.call(
          null,
          i,
          /*anchor$use*/
          t[14]
        )),
        pe(
          i,
          "focus",
          /*focus_handler_1*/
          t[72]
        ),
        pe(
          i,
          "blur",
          /*blur_handler_1*/
          t[73]
        ),
        pe(
          i,
          "click",
          /*click_handler*/
          t[74]
        ),
        pe(i, "keydown", function() {
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
        pe(
          i,
          "focus",
          /*focus_handler*/
          t[65]
        ),
        pe(
          i,
          "blur",
          /*blur_handler*/
          t[66]
        ),
        fe(R = Dt.call(null, e, {
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
        fe(Wp.call(null, e, {
          addClass: (
            /*addClass*/
            t[50]
          ),
          removeClass: (
            /*removeClass*/
            t[51]
          )
        })),
        fe(V = Je.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        fe(
          /*forwardEvents*/
          t[43].call(null, e)
        ),
        pe(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[49]
        ),
        pe(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          t[83]
        )
      ], Xe = !0);
    },
    p(ke, ae) {
      t = ke, /*hiddenInput*/
      t[12] ? J ? J.p(t, ae) : (J = Fl(t), J.c(), J.m(e, n)) : J && (J.d(1), J = null), /*variant*/
      t[7] === "filled" ? Re || (Re = wl(), Re.c(), Re.m(i, r)) : Re && (Re.d(1), Re = null), /*variant*/
      t[7] !== "outlined" && !/*noLabel*/
      t[8] && /*label*/
      (t[9] != null || /*$$slots*/
      t[54].label) ? Me ? (Me.p(t, ae), ae[0] & /*variant, noLabel, label*/
      896 | ae[1] & /*$$slots*/
      8388608 && A(Me, 1)) : (Me = Ul(t), Me.c(), A(Me, 1), Me.m(i, s)) : Me && (Ue(), L(Me, 1, 1, () => {
        Me = null;
      }), Be()), /*variant*/
      t[7] === "outlined" ? He ? (He.p(t, ae), ae[0] & /*variant*/
      128 && A(He, 1)) : (He = Bl(t), He.c(), A(He, 1), He.m(i, a)) : He && (Ue(), L(He, 1, 1, () => {
        He = null;
      }), Be()), z && z.p && (!Ee || ae[2] & /*$$scope*/
      33554432) && Ce(
        z,
        ie,
        t,
        /*$$scope*/
        t[87],
        Ee ? ye(
          ie,
          /*$$scope*/
          t[87],
          ae,
          mg
        ) : Se(
          /*$$scope*/
          t[87]
        ),
        Nl
      ), (!Ee || ae[1] & /*$selectedTextStore*/
      2048) && vu(
        c,
        /*$selectedTextStore*/
        t[42],
        Ve.contenteditable
      ), me(u, Ve = de(We, [
        (!Ee || ae[0] & /*inputId*/
        2048 && f !== (f = /*inputId*/
        t[11] + "-smui-selected-text")) && { id: f },
        (!Ee || ae[0] & /*selectedText$class*/
        524288 && d !== (d = re({
          [
            /*selectedText$class*/
            t[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: d },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!Ee || ae[0] & /*inputId*/
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
      ), me(o, Q = de(St, [
        (!Ee || ae[0] & /*selectedTextContainer$class*/
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
      ), me(b, je = de(De, [
        (!Ee || ae[0] & /*dropdownIcon$class*/
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
      ])), _ && ge(_.update) && ae[0] & /*dropdownIcon$use*/
      1048576 && _.update.call(
        null,
        /*dropdownIcon$use*/
        t[20]
      ), /*variant*/
      t[7] !== "outlined" && /*ripple*/
      t[5] ? Fe ? (Fe.p(t, ae), ae[0] & /*variant, ripple*/
      160 && A(Fe, 1)) : (Fe = Gl(t), Fe.c(), A(Fe, 1), Fe.m(i, null)) : Fe && (Ue(), L(Fe, 1, 1, () => {
        Fe = null;
      }), Be()), me(i, G = de(Rt, [
        (!Ee || ae[0] & /*anchor$class*/
        32768 && w !== (w = re({
          [
            /*anchor$class*/
            t[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: w },
        (!Ee || ae[0] & /*required*/
        1024 && y !== (y = /*required*/
        t[10] ? "true" : void 0)) && {
          "aria-required": y
        },
        (!Ee || ae[0] & /*disabled*/
        64 && v !== (v = /*disabled*/
        t[6] ? "true" : void 0)) && {
          "aria-disabled": v
        },
        { "aria-controls": (
          /*menuId*/
          t[45]
        ) },
        (!Ee || ae[1] & /*menuOpen*/
        1 && I !== (I = /*menuOpen*/
        t[31] ? "true" : "false")) && {
          "aria-expanded": I
        },
        (!Ee || ae[0] & /*helperId*/
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
      4210702 ? de(le, [
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
        le[2],
        le[3],
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
        4194304 && be(Ge(
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
      t[31], pt(() => j = !1)), W.$set(qt), me(e, ft = de(ht, [
        (!Ee || ae[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | ae[1] & /*$$slots, menuOpen*/
        8388609 && X !== (X = re({
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
        }))) && { class: X },
        (!Ee || ae[0] & /*internalStyles, style*/
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
      8388608 && A(et, 1)) : (et = jl(t), et.c(), A(et, 1), et.m(Ne.parentNode, Ne)) : et && (Ue(), L(et, 1, 1, () => {
        et = null;
      }), Be());
    },
    i(ke) {
      Ee || (A(Me), A(He), A(z, ke), A(Fe), A(W.$$.fragment, ke), A(et), Ee = !0);
    },
    o(ke) {
      L(Me), L(He), L(z, ke), L(Fe), L(W.$$.fragment, ke), L(et), Ee = !1;
    },
    d(ke) {
      ke && (U(e), U(ue), U(Ne)), J && J.d(), Re && Re.d(), Me && Me.d(), He && He.d(), z && z.d(ke), Fe && Fe.d(), t[71](null), $(W), t[82](null), et && et.d(ke), Xe = !1, Ye(K);
    }
  };
}
let Cg = 0;
function Sg(t) {
  const e = t.currentTarget.getBoundingClientRect();
  return (Tg(t) ? t.touches[0].clientX : t.clientX) - e.left;
}
function Tg(t) {
  return "touches" in t;
}
const ql = ([t, e]) => `${t}: ${e};`;
function Lg(t, e, n) {
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
  let r = he(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  const u = Zr(l);
  var c;
  const f = rt(Qe());
  let d = () => {
  };
  function h(F) {
    return F === d;
  }
  let { use: m = [] } = e, { class: g = "" } = e, { style: p = "" } = e, { ripple: E = !0 } = e, { disabled: b = !1 } = e, { variant: S = "standard" } = e, { noLabel: C = !1 } = e, { label: M = void 0 } = e, { value: D = "" } = e, { key: _ = (F) => F } = e, { dirty: O = !1 } = e, { invalid: w = d } = e, { updateInvalid: y = h(w) } = e;
  const v = h(w);
  h(w) && (w = !1);
  let { required: I = !1 } = e, { inputId: T = "SMUI-select-" + Cg++ } = e, { hiddenInput: P = !1 } = e, { withLeadingIcon: W = d } = e, { anchor$use: j = [] } = e, { anchor$class: X = "" } = e, { selectedTextContainer$use: k = [] } = e, { selectedTextContainer$class: R = "" } = e, { selectedText$use: V = [] } = e, { selectedText$class: ue = "" } = e, { dropdownIcon$use: Ne = [] } = e, { dropdownIcon$class: Ee = "" } = e, { menu$class: Xe = "" } = e, K, J, Re = {}, Me = {}, He, ie = {}, z = -1, We = (c = r.menu$id) !== null && c !== void 0 ? c : T + "-menu", Ve, St = qe("SMUI:addLayoutListener"), Q, De = !1, je = {}, Fe, Rt, G = !1, le, ne = qe("SMUI:select:context"), Ke, ht, ft, et, ke;
  ze("SMUI:list:role", ""), ze("SMUI:list:nav", !1);
  const ae = Tt("");
  st(t, ae, (F) => n(42, s = F)), ze("SMUI:select:selectedText", ae);
  const qt = Tt(D);
  st(t, qt, (F) => n(90, a = F)), ze("SMUI:select:value", qt);
  let Y = z;
  St && (Q = St(bi)), ct(() => (n(23, J = new Up(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (F) => {
        jt(ae, s = F, s);
      },
      isSelectAnchorFocused: () => document.activeElement === He,
      getSelectAnchorAttr: Xi,
      setSelectAnchorAttr: Yi,
      removeSelectAnchorAttr: Zi,
      addMenuClass: zi,
      removeMenuClass: Ki,
      openMenu: () => {
        n(31, De = !0);
      },
      closeMenu: () => {
        n(31, De = !1);
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
      getSelectedIndex: () => z,
      setSelectedIndex: (F) => {
        n(63, Y = F), n(24, z = F), n(0, D = Dn()[z]);
      },
      focusMenuItemAtIndex: (F) => {
        le.focusItemAtIndex(F);
      },
      getMenuItemCount: () => le.items.length,
      getMenuItemValues: () => Dn().map(_),
      getMenuItemTextAtIndex: (F) => le.getPrimaryTextAtIndex(F),
      isTypeaheadInProgress: () => le.typeaheadInProgress,
      typeaheadMatchItem: (F, Bt) => le.typeaheadMatchItem(F, Bt),
      // getCommonAdapterMethods
      addClass: lt,
      removeClass: tn,
      hasClass: Oe,
      setRippleCenter: (F) => et && et.setRippleCenter(F),
      activateBottomLine: () => et && et.activate(),
      deactivateBottomLine: () => et && et.deactivate(),
      notifyChange: (F) => {
        n(55, O = !0), y && n(1, w = !J.isValid()), Ie(kn(), "SMUISelect:change", { value: D, index: z }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!ke,
      notchOutline: (F) => ke && ke.notch(F),
      closeOutline: () => ke && ke.closeNotch(),
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
  )), n(24, z = Dn().indexOf(D)), J.init(), _i(v), () => {
    J.destroy();
  })), en(() => {
    Q && Q();
  });
  function ve(F) {
    n(37, Ke = F.detail);
  }
  function Oe(F) {
    return F in Re ? Re[F] : kn().classList.contains(F);
  }
  function lt(F) {
    Re[F] || n(26, Re[F] = !0, Re);
  }
  function tn(F) {
    (!(F in Re) || Re[F]) && n(26, Re[F] = !1, Re);
  }
  function ti(F, Bt) {
    Me[F] != Bt && (Bt === "" || Bt == null ? (delete Me[F], n(27, Me)) : n(27, Me[F] = Bt, Me));
  }
  function zi(F) {
    je[F] || n(32, je[F] = !0, je);
  }
  function Ki(F) {
    (!(F in je) || je[F]) && n(32, je[F] = !1, je);
  }
  function Xi(F) {
    var Bt;
    return F in ie ? (Bt = ie[F]) !== null && Bt !== void 0 ? Bt : null : kn().getAttribute(F);
  }
  function Yi(F, Bt) {
    ie[F] !== Bt && n(29, ie[F] = Bt, ie);
  }
  function Zi(F) {
    (!(F in ie) || ie[F] != null) && n(29, ie[F] = void 0, ie);
  }
  function Dn() {
    return le.getOrderedList().map((F) => F.getValue());
  }
  function Qi() {
    return J.getUseDefaultValidation();
  }
  function _i(F) {
    J.setUseDefaultValidation(F);
  }
  function Ji() {
    He.focus();
  }
  function bi() {
    J.layout();
  }
  function kn() {
    return K;
  }
  function xi(F) {
    Wn.call(this, t, F);
  }
  function $i(F) {
    Wn.call(this, t, F);
  }
  function er(F) {
    se[F ? "unshift" : "push"](() => {
      ft = F, n(39, ft);
    });
  }
  function tr(F) {
    se[F ? "unshift" : "push"](() => {
      ft = F, n(39, ft);
    });
  }
  function nr(F) {
    se[F ? "unshift" : "push"](() => {
      ke = F, n(41, ke);
    });
  }
  function ir(F) {
    se[F ? "unshift" : "push"](() => {
      et = F, n(40, et);
    });
  }
  function rr(F) {
    se[F ? "unshift" : "push"](() => {
      He = F, n(28, He);
    });
  }
  const sr = () => J && J.handleFocus(), lr = () => J && J.handleBlur(), ar = (F) => {
    He.focus(), J && J.handleClick(Sg(F));
  };
  function or(F) {
    z = F, n(24, z);
  }
  const ur = (F) => n(36, le = F.detail);
  function cr(F) {
    De = F, n(31, De);
  }
  const fr = (F) => J && J.handleMenuItemAction(F.detail.index), dr = () => J && J.handleMenuClosing(), H = () => J && J.handleMenuClosed(), bt = () => J && J.handleMenuOpened();
  function vi(F) {
    se[F ? "unshift" : "push"](() => {
      K = F, n(25, K);
    });
  }
  const hr = () => n(37, Ke = void 0), ni = (F) => n(30, Ve = F.detail), ii = (F) => n(38, ht = F.detail), lu = () => {
    n(30, Ve = void 0), n(38, ht = void 0);
  };
  return t.$$set = (F) => {
    e = q(q({}, e), $e(F)), n(53, r = he(e, i)), "use" in F && n(2, m = F.use), "class" in F && n(3, g = F.class), "style" in F && n(4, p = F.style), "ripple" in F && n(5, E = F.ripple), "disabled" in F && n(6, b = F.disabled), "variant" in F && n(7, S = F.variant), "noLabel" in F && n(8, C = F.noLabel), "label" in F && n(9, M = F.label), "value" in F && n(0, D = F.value), "key" in F && n(56, _ = F.key), "dirty" in F && n(55, O = F.dirty), "invalid" in F && n(1, w = F.invalid), "updateInvalid" in F && n(57, y = F.updateInvalid), "required" in F && n(10, I = F.required), "inputId" in F && n(11, T = F.inputId), "hiddenInput" in F && n(12, P = F.hiddenInput), "withLeadingIcon" in F && n(13, W = F.withLeadingIcon), "anchor$use" in F && n(14, j = F.anchor$use), "anchor$class" in F && n(15, X = F.anchor$class), "selectedTextContainer$use" in F && n(16, k = F.selectedTextContainer$use), "selectedTextContainer$class" in F && n(17, R = F.selectedTextContainer$class), "selectedText$use" in F && n(18, V = F.selectedText$use), "selectedText$class" in F && n(19, ue = F.selectedText$class), "dropdownIcon$use" in F && n(20, Ne = F.dropdownIcon$use), "dropdownIcon$class" in F && n(21, Ee = F.dropdownIcon$class), "menu$class" in F && n(22, Xe = F.menu$class), "$$scope" in F && n(87, o = F.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | t.$$.dirty[2] & /*previousSelectedIndex*/
    2 && Y !== z)
      if (n(63, Y = z), J)
        J.setSelectedIndex(
          z,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const F = Dn();
        D !== F[z] && n(0, D = F[z]);
      }
    t.$$.dirty[0] & /*value*/
    1 && jt(qt, a = D, a), t.$$.dirty[0] & /*instance, value*/
    8388609 | t.$$.dirty[1] & /*key*/
    33554432 && J && J.getValue() !== _(D) && J.setValue(_(D)), t.$$.dirty[0] & /*instance, disabled*/
    8388672 && J && J.getDisabled() !== b && J.setDisabled(b), t.$$.dirty[0] & /*instance, invalid*/
    8388610 | t.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && J && O && J.isValid() !== !w && (y ? n(1, w = !J.isValid()) : J.setValid(!w)), t.$$.dirty[0] & /*instance, required*/
    8389632 && J && J.getRequired() !== I && J.setRequired(I);
  }, [
    D,
    w,
    m,
    g,
    p,
    E,
    b,
    S,
    C,
    M,
    I,
    T,
    P,
    W,
    j,
    X,
    k,
    R,
    V,
    ue,
    Ne,
    Ee,
    Xe,
    J,
    z,
    K,
    Re,
    Me,
    He,
    ie,
    Ve,
    De,
    je,
    Fe,
    Rt,
    G,
    le,
    Ke,
    ht,
    ft,
    et,
    ke,
    s,
    f,
    h,
    We,
    ne,
    ae,
    qt,
    ve,
    lt,
    tn,
    ti,
    r,
    u,
    O,
    _,
    y,
    Qi,
    _i,
    Ji,
    bi,
    kn,
    Y,
    l,
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
    dr,
    H,
    bt,
    vi,
    hr,
    ni,
    ii,
    lu,
    o
  ];
}
class Og extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      Lg,
      yg,
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
function Rg(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Ae(
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
      8192) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? ye(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Mg(t) {
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
    $$slots: { default: [Rg] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = q(r, i[s]);
  return e = new ig({ props: r }), t[12](e), {
    c() {
      te(e.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), n = !0;
    },
    p(s, [a]) {
      const l = a & /*usePass, value, selected, $$restProps*/
      77 ? de(i, [
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
        64 && be(
          /*$$restProps*/
          s[6]
        )
      ]) : {};
      a & /*$$scope*/
      8192 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (A(e.$$.fragment, s), n = !0);
    },
    o(s) {
      L(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[12](null), $(e, s);
    }
  };
}
function Dg(t, e, n) {
  let i, r;
  const s = ["use", "class", "value", "getElement"];
  let a = he(e, s), l, o, { $$slots: u = {}, $$scope: c } = e;
  const f = rt(Qe());
  let { use: d = [] } = e;
  const h = "";
  let { value: m = "" } = e, g;
  const p = qe("SMUI:select:selectedText");
  st(t, p, (M) => n(14, l = M));
  const E = qe("SMUI:select:value");
  st(t, E, (M) => n(10, o = M)), ze("SMUI:list:item:role", "option"), ct(b), en(b);
  function b() {
    r && g && jt(p, l = g.getPrimaryText(), l);
  }
  function S() {
    return g.getElement();
  }
  function C(M) {
    se[M ? "unshift" : "push"](() => {
      g = M, n(1, g);
    });
  }
  return t.$$set = (M) => {
    e = q(q({}, e), $e(M)), n(6, a = he(e, s)), "use" in M && n(7, d = M.use), "value" in M && n(0, m = M.value), "$$scope" in M && n(13, c = M.$$scope);
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
    E,
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
class kg extends Le {
  constructor(e) {
    super(), Te(this, e, Dg, Mg, _e, {
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
function Ng(t) {
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
  return e = new kg({
    props: {
      value: (
        /*d*/
        t[11].value
      ),
      $$slots: { default: [Ng] },
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
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*data*/
      2 && (s.value = /*d*/
      i[11].value), r & /*$$scope, data*/
      16386 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Pg(t) {
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
      e = Ze();
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
          r[o] ? (r[o].p(u, l), A(r[o], 1)) : (r[o] = zl(u), r[o].c(), A(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          A(r[l]);
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
      a && U(e), Qr(r, a);
    }
  };
}
function Hg(t) {
  let e, n, i;
  function r(a) {
    t[10](a);
  }
  let s = {
    disabled: (
      /*disabled*/
      t[4]
    ),
    key: Fg,
    label: (
      /*label*/
      t[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      t[3]
    ),
    $$slots: { default: [Pg] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new Og({ props: s }), se.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        x(e, a, l), i = !0;
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
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
const Fg = (t) => `${t ?? ""}`;
function wg(t, e, n) {
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
class fs extends Le {
  constructor(e) {
    super(), Te(this, e, wg, Hg, _e, {
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
function Ug(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[12].default
  ), o = Ae(
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
    c = q(c, u[f]);
  return {
    c() {
      e = ee("div"), o && o.c(), me(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[13](e), r = !0, s || (a = [
        fe(i = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[8].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      2048) && Ce(
        o,
        l,
        f,
        /*$$scope*/
        f[11],
        r ? ye(
          l,
          /*$$scope*/
          f[11],
          d,
          null
        ) : Se(
          /*$$scope*/
          f[11]
        ),
        null
      ), me(e, c = de(u, [
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
      r || (A(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[13](null), s = !1, Ye(a);
    }
  };
}
function Bg(t, e, n) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: f = !1 } = e, { color: d = "default" } = e, { elevation: h = 1 } = e, { transition: m = !1 } = e, g;
  function p() {
    return g;
  }
  function E(b) {
    se[b ? "unshift" : "push"](() => {
      g = b, n(7, g);
    });
  }
  return t.$$set = (b) => {
    e = q(q({}, e), $e(b)), n(9, r = he(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "variant" in b && n(2, c = b.variant), "square" in b && n(3, f = b.square), "color" in b && n(4, d = b.color), "elevation" in b && n(5, h = b.elevation), "transition" in b && n(6, m = b.transition), "$$scope" in b && n(11, a = b.$$scope);
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
    E
  ];
}
class Qo extends Le {
  constructor(e) {
    super(), Te(this, e, Bg, Ug, _e, {
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
var Xr;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Xr || (Xr = {}));
var Vg = "data-mdc-dom-announce";
function Gg(t, e) {
  jg.getInstance().say(t, e);
}
var jg = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var i, r, s = (i = n == null ? void 0 : n.priority) !== null && i !== void 0 ? i : Xr.POLITE, a = (r = n == null ? void 0 : n.ownerDocument) !== null && r !== void 0 ? r : document, l = this.getLiveRegion(s, a);
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
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Vg, "true"), n.body.appendChild(i), i;
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
      if (Eh(n)) {
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
        return new wi(r, s);
      });
      var i = wi.createAdapter(this);
      this.rippleSurface = n(this.root, new ji(i));
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
  }(Vi)
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
}, Et = {
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
var ds = (
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
        return Et;
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
      return this.adapter.hasClass(Et.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(Et.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(Et.EDITING);
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
      this.adapter.addClass(Et.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this, r = this.adapter.eventTargetHasClass(n.target, Et.CHIP_EXIT), s = n.propertyName === "width", a = n.propertyName === "opacity";
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
        var u = this.adapter.eventTargetHasClass(n.target, Et.LEADING_ICON) && this.adapter.hasClass(Et.SELECTED), c = this.adapter.eventTargetHasClass(n.target, Et.CHECKMARK) && !this.adapter.hasClass(Et.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
        if (c) {
          this.adapter.removeClassFromLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(Et.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(Et.PRIMARY_ACTION_FOCUSED));
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
      var i = this.adapter.hasClass(Et.DELETABLE);
      return i && (n.key === Pe.BACKSPACE_KEY || n.key === Pe.DELETE_KEY || n.key === Pe.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Pe.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Pe.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, Et.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(Et.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(Et.EDITING), this.adapter.notifyEditFinish();
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
        return new wi(l, o);
      }), i === void 0 && (i = function(l) {
        return new xo(l);
      }), this.leadingIcon = this.root.querySelector(Pe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Pe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Pe.PRIMARY_ACTION_SELECTOR);
      var s = this.root.querySelector(Pe.TRAILING_ACTION_SELECTOR);
      s && (this.trailingAction = i(s));
      var a = ce(ce({}, wi.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new ji(a));
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
      return new ds(i);
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
  }(Vi)
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
var hs = (
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
var Wi = ds.strings, Xl = Wi.INTERACTION_EVENT, Yl = Wi.SELECTION_EVENT, Zl = Wi.REMOVAL_EVENT, Ql = Wi.NAVIGATION_EVENT, qg = hs.strings.CHIP_SELECTOR, Jl = 0, Wg = (
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
          Gg(r);
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
      return new hs(i);
    }, e.prototype.instantiateChips = function(n) {
      var i = [].slice.call(this.root.querySelectorAll(qg));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++Jl, n(r);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === n)
          return i;
      return -1;
    }, e;
  }(Vi)
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
const ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: $o,
  MDCChipFoundation: ds,
  MDCChipSet: Wg,
  MDCChipSetFoundation: hs,
  MDCChipTrailingAction: xo,
  MDCChipTrailingActionFoundation: Jo,
  chipCssClasses: Et,
  chipSetCssClasses: ui,
  chipSetStrings: eu,
  chipStrings: Pe,
  trailingActionStrings: Zt
}, Symbol.toStringTag, { value: "Module" }));
function xl(t) {
  let e;
  return {
    c() {
      e = ee("div"), N(e, "class", "mdc-chip__ripple");
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
      e = ee("div"), N(e, "class", "mdc-chip__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function zg(t) {
  let e, n, i, r, s = (
    /*ripple*/
    t[3] && !/*$nonInteractive*/
    t[14] && xl()
  );
  const a = (
    /*#slots*/
    t[34].default
  ), l = Ae(
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
      s && s.c(), e = oe(), l && l.c(), n = oe(), o && o.c(), i = Ze();
    },
    m(u, c) {
      s && s.m(u, c), B(u, e, c), l && l.m(u, c), B(u, n, c), o && o.m(u, c), B(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? s || (s = xl(), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), l && l.p && (!r || c[1] & /*$$scope*/
      128) && Ce(
        l,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? ye(
          a,
          /*$$scope*/
          u[38],
          c,
          null
        ) : Se(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = $l(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (A(l, u), r = !0);
    },
    o(u) {
      L(l, u), r = !1;
    },
    d(u) {
      u && (U(e), U(n), U(i)), s && s.d(u), l && l.d(u), o && o.d(u);
    }
  };
}
function Kg(t) {
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
      ).map(Dr).concat([
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
      $$slots: { default: [zg] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = q(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = q(u, de(r, [
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
        ).map(Dr).concat([
          /*style*/
          l[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && be(
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
      e && te(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && x(e, l, o), B(l, n, o), i = !0;
    },
    p(l, o) {
      if (t = l, o[0] & /*component*/
      32 && s !== (s = /*component*/
      t[5])) {
        if (e) {
          Ue();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            $(u, 1);
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
        ), te(e.$$.fragment), A(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
        503369055 ? de(r, [
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
            ).map(Dr).concat([
              /*style*/
              t[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && be(
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
      i || (e && A(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && L(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && U(n), t[35](null), e && $(e, l);
    }
  };
}
const Dr = ([t, e]) => `${t}: ${e};`;
function Xg(t, e, n) {
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
  let r = he(e, i), s, a, l, o, u, c, f, { $$slots: d = {}, $$scope: h } = e;
  const { MDCChipFoundation: m } = ms, g = rt(Qe());
  let { use: p = [] } = e, { class: E = "" } = e, { style: b = "" } = e, { chip: S } = e, { ripple: C = !0 } = e, { touch: M = !1 } = e, { shouldRemoveOnTrailingIconClick: D = !0 } = e, { shouldFocusPrimaryActionOnClick: _ = !0 } = e, O, w, y = {}, v = {}, I = {};
  const T = qe("SMUI:chips:chip:initialSelected");
  st(t, T, (ne) => n(44, c = ne));
  let P = c, W, j;
  const X = qe("SMUI:chips:nonInteractive");
  st(t, X, (ne) => n(14, f = ne));
  const k = qe("SMUI:chips:choice");
  st(t, k, (ne) => n(40, a = ne));
  const R = qe("SMUI:chips:chip:index");
  st(t, R, (ne) => n(39, s = ne));
  let { component: V = Nt } = e, { tag: ue = V === Nt ? "div" : void 0 } = e;
  const Ne = Tt(D);
  st(t, Ne, (ne) => n(43, u = ne)), ze("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Ne);
  const Ee = Tt(P);
  st(t, Ee, (ne) => n(42, o = ne)), ze("SMUI:chips:chip:isSelected", Ee);
  const Xe = Tt(v);
  if (st(t, Xe, (ne) => n(41, l = ne)), ze("SMUI:chips:chip:leadingIconClasses", Xe), ze("SMUI:chips:chip:focusable", a && P || s === 0), !S)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  ct(() => {
    n(7, w = new m({
      addClass: Me,
      addClassToLeadingIcon: ie,
      eventTargetHasClass: (Ke, ht) => Ke && "classList" in Ke ? Ke.classList.contains(ht) : !1,
      focusPrimaryAction: () => {
        W && W.focus();
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
      hasClass: Re,
      hasLeadingIcon: () => !!Fe().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Fe()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => j ? j.isNavigable() : !1,
      notifyInteraction: () => Ie(Fe(), "SMUIChip:interaction", { chipId: S }, void 0, !0),
      notifyNavigation: (Ke, ht) => Ie(Fe(), "SMUIChip:navigation", { chipId: S, key: Ke, source: ht }, void 0, !0),
      notifyRemoval: (Ke) => {
        Ie(Fe(), "SMUIChip:removal", { chipId: S, removedAnnouncement: Ke }, void 0, !0);
      },
      notifySelection: (Ke, ht) => Ie(Fe(), "SMUIChip:selection", { chipId: S, selected: Ke, shouldIgnore: ht }, void 0, !0),
      notifyTrailingIconInteraction: () => Ie(Fe(), "SMUIChip:trailingIconInteraction", { chipId: S }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: He,
      removeClassFromLeadingIcon: z,
      removeTrailingActionFocus: () => {
        j && j.removeFocus();
      },
      setPrimaryActionAttr: (Ke, ht) => {
        W && W.addAttr(Ke, ht);
      },
      setStyleProperty: We
    }));
    const ne = {
      chipId: S,
      get selected() {
        return P;
      },
      focusPrimaryAction: Q,
      focusTrailingAction: De,
      removeFocus: je,
      setSelectedFromChipSet: St
    };
    return Ie(Fe(), "SMUIChipsChip:mount", ne), w.init(), () => {
      Ie(Fe(), "SMUIChipsChip:unmount", ne), w.destroy();
    };
  });
  function K(ne) {
    n(12, W = ne.detail);
  }
  function J(ne) {
    n(13, j = ne.detail);
  }
  function Re(ne) {
    return ne in y ? y[ne] : Fe().classList.contains(ne);
  }
  function Me(ne) {
    y[ne] || n(10, y[ne] = !0, y);
  }
  function He(ne) {
    (!(ne in y) || y[ne]) && n(10, y[ne] = !1, y);
  }
  function ie(ne) {
    v[ne] || n(33, v[ne] = !0, v);
  }
  function z(ne) {
    (!(ne in v) || v[ne]) && n(33, v[ne] = !1, v);
  }
  function We(ne, Ke) {
    I[ne] != Ke && (Ke === "" || Ke == null ? (delete I[ne], n(11, I)) : n(11, I[ne] = Ke, I));
  }
  function Ve(ne) {
    return ne in I ? I[ne] : getComputedStyle(Fe()).getPropertyValue(ne);
  }
  function St(ne, Ke) {
    n(8, P = ne), w.setSelectedFromChipSet(P, Ke);
  }
  function Q() {
    w.focusPrimaryAction();
  }
  function De() {
    w.focusTrailingAction();
  }
  function je() {
    w.removeFocus();
  }
  function Fe() {
    return O.getElement();
  }
  function Rt(ne) {
    se[ne ? "unshift" : "push"](() => {
      O = ne, n(9, O);
    });
  }
  const G = () => n(12, W = void 0), le = () => n(13, j = void 0);
  return t.$$set = (ne) => {
    e = q(q({}, e), $e(ne)), n(28, r = he(e, i)), "use" in ne && n(0, p = ne.use), "class" in ne && n(1, E = ne.class), "style" in ne && n(2, b = ne.style), "chip" in ne && n(29, S = ne.chip), "ripple" in ne && n(3, C = ne.ripple), "touch" in ne && n(4, M = ne.touch), "shouldRemoveOnTrailingIconClick" in ne && n(30, D = ne.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in ne && n(31, _ = ne.shouldFocusPrimaryActionOnClick), "component" in ne && n(5, V = ne.component), "tag" in ne && n(6, ue = ne.tag), "$$scope" in ne && n(38, h = ne.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && jt(Ne, u = D, u), t.$$.dirty[0] & /*selected*/
    256 && jt(Ee, o = P, o), t.$$.dirty[1] & /*leadingIconClasses*/
    4 && jt(Xe, l = v, l), t.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && w && w.getShouldRemoveOnTrailingIconClick() !== D && w.setShouldRemoveOnTrailingIconClick(D), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && w && w.setShouldFocusPrimaryActionOnClick(_);
  }, [
    p,
    E,
    b,
    C,
    M,
    V,
    ue,
    w,
    P,
    O,
    y,
    I,
    W,
    j,
    f,
    g,
    T,
    X,
    k,
    R,
    Ne,
    Ee,
    Xe,
    K,
    J,
    Me,
    He,
    We,
    r,
    S,
    D,
    _,
    Fe,
    v,
    d,
    Rt,
    G,
    le,
    h
  ];
}
class Yg extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      Xg,
      Kg,
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
function ea(t, e, n) {
  const i = t.slice();
  return i[37] = e[n], i[39] = n, i;
}
const Zg = (t) => ({ chip: t[0] & /*chips*/
1 }), ta = (t) => ({ chip: (
  /*chip*/
  t[37]
) });
function Qg(t) {
  let e;
  const n = (
    /*#slots*/
    t[25].default
  ), i = Ae(
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
      134217729) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[27],
        e ? ye(
          n,
          /*$$scope*/
          r[27],
          s,
          Zg
        ) : Se(
          /*$$scope*/
          r[27]
        ),
        ta
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Jg(t) {
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
      $$slots: { default: [Qg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe();
    },
    m(r, s) {
      x(e, r, s), B(r, n, s), i = !0;
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
      i || (A(e.$$.fragment, r), i = !0);
    },
    o(r) {
      L(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && U(n), $(e, r);
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
      $$slots: { default: [Jg] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ze(), te(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      B(s, n, a), x(i, s, a), r = !0;
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
      r || (A(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), $(i, s);
    }
  };
}
function xg(t) {
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
    d = q(d, f[h]);
  return {
    c() {
      e = ee("div");
      for (let h = 0; h < n.length; h += 1)
        n[h].c();
      me(e, d);
    },
    m(h, m) {
      B(h, e, m);
      for (let g = 0; g < n.length; g += 1)
        n[g] && n[g].m(e, null);
      t[26](e), a = !0, l || (o = [
        fe(s = Je.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        fe(
          /*forwardEvents*/
          t[9].call(null, e)
        ),
        pe(
          e,
          "SMUIChipsChip:mount",
          /*handleChipMount*/
          t[14]
        ),
        pe(
          e,
          "SMUIChipsChip:unmount",
          /*handleChipUnmount*/
          t[15]
        ),
        pe(
          e,
          "SMUIChip:interaction",
          /*handleChipInteraction*/
          t[16]
        ),
        pe(
          e,
          "SMUIChip:selection",
          /*handleChipSelection*/
          t[17]
        ),
        pe(
          e,
          "SMUIChip:removal",
          /*handleChipRemoval*/
          t[18]
        ),
        pe(
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
      ), Ue(), n = $r(n, m, c, 1, h, u, i, e, xr, na, null, ea), Be()), me(e, d = de(f, [
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
          A(n[m]);
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
      t[26](null), l = !1, Ye(o);
    }
  };
}
function ia(t, e) {
  let n = new Set(t);
  for (let i of e)
    n.delete(i);
  return n;
}
function $g(t, e, n) {
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
  let r = he(e, i), s, a, l, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = ms, f = rt(Qe());
  let { use: d = [] } = e, { class: h = "" } = e, { chips: m = [] } = e, { key: g = (K) => K } = e, { selected: p = void 0 } = e, { nonInteractive: E = !1 } = e, { choice: b = !1 } = e, { filter: S = !1 } = e, { input: C = !1 } = e, M, D, _ = {}, O = /* @__PURE__ */ new WeakMap(), w = m.map((K) => b && p === K || S && p.indexOf(K) !== -1);
  const y = Tt(E);
  st(t, y, (K) => n(31, l = K)), ze("SMUI:chips:nonInteractive", y);
  const v = Tt(b);
  st(t, v, (K) => n(30, a = K)), ze("SMUI:chips:choice", v);
  const I = Tt(S);
  st(t, I, (K) => n(29, s = K)), ze("SMUI:chips:filter", I);
  let T = S ? new Set(p) : p;
  ct(() => {
    if (n(23, D = new c({
      announceMessage: oh,
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
      hasClass: (K) => Ee().classList.contains(K),
      isRTL: () => getComputedStyle(Ee()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (K) => {
        K >= 0 && K < m.length && (b && p === m[K] ? n(21, p = null) : S && p.indexOf(m[K]) !== -1 && (p.splice(p.indexOf(m[K]), 1), n(21, p)), m.splice(K, 1), n(0, m));
      },
      removeFocusFromChipAtIndex: (K) => {
        var J;
        (J = V(m[K])) === null || J === void 0 || J.removeFocus();
      },
      selectChipAtIndex: (K, J, Re) => {
        var Me;
        if (K >= 0 && K < m.length) {
          if (S) {
            const He = p.indexOf(m[K]);
            J && He === -1 ? (p.push(m[K]), n(21, p)) : !J && He !== -1 && (p.splice(He, 1), n(21, p));
          } else
            b && (J || p === m[K]) && n(21, p = J ? m[K] : null);
          (Me = V(m[K])) === null || Me === void 0 || Me.setSelectedFromChipSet(J, Re);
        }
      }
    })), D.init(), b && p != null)
      D.select(p);
    else if (S && p.length)
      for (const K of p)
        D.select(K);
    return () => {
      D.destroy();
    };
  });
  function P(K) {
    const J = K.detail;
    ue(J.chipId, J);
  }
  function W(K) {
    const J = K.detail;
    Ne(J.chipId);
  }
  function j(K) {
    D && D.handleChipInteraction(K.detail);
  }
  function X(K) {
    D && D.handleChipSelection(K.detail);
  }
  function k(K) {
    D && D.handleChipRemoval(K.detail);
  }
  function R(K) {
    D && D.handleChipNavigation(K.detail);
  }
  function V(K) {
    return K instanceof Object ? O.get(K) : _[K];
  }
  function ue(K, J) {
    K instanceof Object ? O.set(K, J) : _[K] = J;
  }
  function Ne(K) {
    K instanceof Object ? O.delete(K) : delete _[K];
  }
  function Ee() {
    return M;
  }
  function Xe(K) {
    se[K ? "unshift" : "push"](() => {
      M = K, n(8, M);
    });
  }
  return t.$$set = (K) => {
    e = q(q({}, e), $e(K)), n(20, r = he(e, i)), "use" in K && n(1, d = K.use), "class" in K && n(2, h = K.class), "chips" in K && n(0, m = K.chips), "key" in K && n(3, g = K.key), "selected" in K && n(21, p = K.selected), "nonInteractive" in K && n(4, E = K.nonInteractive), "choice" in K && n(5, b = K.choice), "filter" in K && n(6, S = K.filter), "input" in K && n(7, C = K.input), "$$scope" in K && n(27, u = K.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*nonInteractive*/
    16 && jt(y, l = E, l), t.$$.dirty[0] & /*choice*/
    32 && jt(v, a = b, a), t.$$.dirty[0] & /*filter*/
    64 && jt(I, s = S, s), t.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && D && b && T !== p && (n(24, T = p), D.select(p)), t.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && D && S) {
      const K = new Set(p), J = ia(T, K), Re = ia(K, T);
      if (J.size || Re.size) {
        n(24, T = K);
        for (let Me of J)
          m.indexOf(Me) !== -1 && D.handleChipSelection({ chipId: Me, selected: !1 });
        for (let Me of Re)
          D.handleChipSelection({ chipId: Me, selected: !0 });
      }
    }
  }, [
    m,
    d,
    h,
    g,
    E,
    b,
    S,
    C,
    M,
    f,
    w,
    y,
    v,
    I,
    P,
    W,
    j,
    X,
    k,
    R,
    r,
    p,
    Ee,
    D,
    T,
    o,
    Xe,
    u
  ];
}
class e_ extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      $g,
      xg,
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
function t_(t) {
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
    u = q(u, o[c]);
  return {
    c() {
      e = ee("span"), n = at("svg"), i = at("path"), N(i, "class", "mdc-chip__checkmark-path"), N(i, "fill", "none"), N(i, "stroke", "black"), N(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), N(n, "class", "mdc-chip__checkmark-svg"), N(n, "viewBox", "-2 -3 30 30"), me(e, u);
    },
    m(c, f) {
      B(c, e, f), Z(e, n), Z(n, i), t[5](e), a || (l = fe(s = Je.call(
        null,
        e,
        /*use*/
        t[0]
      )), a = !0);
    },
    p(c, [f]) {
      me(e, u = de(o, [
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
    i: it,
    o: it,
    d(c) {
      c && U(e), t[5](null), a = !1, l();
    }
  };
}
function n_(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { use: s = [] } = e, { class: a = "" } = e, l;
  function o() {
    return l;
  }
  function u(c) {
    se[c ? "unshift" : "push"](() => {
      l = c, n(2, l);
    });
  }
  return t.$$set = (c) => {
    e = q(q({}, e), $e(c)), n(3, r = he(e, i)), "use" in c && n(0, s = c.use), "class" in c && n(1, a = c.class);
  }, [s, a, l, r, o, u];
}
class i_ extends Le {
  constructor(e) {
    super(), Te(this, e, n_, t_, _e, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function ra(t) {
  let e, n, i = {};
  return e = new i_({ props: i }), t[23](e), {
    c() {
      te(e.$$.fragment);
    },
    m(r, s) {
      x(e, r, s), n = !0;
    },
    p(r, s) {
      const a = {};
      e.$set(a);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[23](null), $(e, r);
    }
  };
}
function r_(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[22].default
  ), a = Ae(
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
    o = q(o, l[u]);
  return {
    c() {
      e = ee("span"), n = ee("span"), a && a.c(), N(n, "class", "mdc-chip__text"), me(e, o);
    },
    m(u, c) {
      B(u, e, c), Z(e, n), a && a.m(n, null), t[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && Ce(
        a,
        s,
        u,
        /*$$scope*/
        u[21],
        r ? ye(
          s,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Se(
          /*$$scope*/
          u[21]
        ),
        null
      ), me(e, o = de(l, [
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
      r || (A(a, u), r = !0);
    },
    o(u) {
      L(a, u), r = !1;
    },
    d(u) {
      u && U(e), a && a.d(u), t[24](null);
    }
  };
}
function s_(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[22].default
  ), r = Ae(
    i,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = ee("span"), r && r.c(), N(e, "class", "mdc-chip__text");
    },
    m(s, a) {
      B(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, a) {
      r && r.p && (!n || a & /*$$scope*/
      2097152) && Ce(
        r,
        i,
        s,
        /*$$scope*/
        s[21],
        n ? ye(
          i,
          /*$$scope*/
          s[21],
          a,
          null
        ) : Se(
          /*$$scope*/
          s[21]
        ),
        null
      );
    },
    i(s) {
      n || (A(r, s), n = !0);
    },
    o(s) {
      L(r, s), n = !1;
    },
    d(s) {
      s && U(e), r && r.d(s);
    }
  };
}
function l_(t) {
  let e, n, i, r, s, a, l, o, u = (
    /*$filter*/
    t[3] && ra(t)
  );
  const c = [s_, r_], f = [];
  function d(h, m) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = d(t), r = f[i] = c[i](t), {
    c() {
      u && u.c(), e = oe(), n = ee("span"), r.c(), N(n, "role", "gridcell");
    },
    m(h, m) {
      u && u.m(h, m), B(h, e, m), B(h, n, m), f[i].m(n, null), t[25](n), a = !0, l || (o = [
        fe(s = Je.call(
          null,
          n,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[11].call(null, n)
        )
      ], l = !0);
    },
    p(h, [m]) {
      /*$filter*/
      h[3] ? u ? (u.p(h, m), m & /*$filter*/
      8 && A(u, 1)) : (u = ra(h), u.c(), A(u, 1), u.m(e.parentNode, e)) : u && (Ue(), L(u, 1, 1, () => {
        u = null;
      }), Be());
      let g = i;
      i = d(h), i === g ? f[i].p(h, m) : (Ue(), L(f[g], 1, 1, () => {
        f[g] = null;
      }), Be(), r = f[i], r ? r.p(h, m) : (r = f[i] = c[i](h), r.c()), A(r, 1), r.m(n, null)), s && ge(s.update) && m & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (A(u), A(r), a = !0);
    },
    o(h) {
      L(u), L(r), a = !1;
    },
    d(h) {
      h && (U(e), U(n)), u && u.d(h), f[i].d(), t[25](null), l = !1, Ye(o);
    }
  };
}
function a_(t, e, n) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let s = he(e, r), a, l, o, u, { $$slots: c = {}, $$scope: f } = e;
  const d = rt(Qe());
  let { use: h = [] } = e, { class: m = "" } = e, { tabindex: g = qe("SMUI:chips:chip:focusable") ? 0 : -1 } = e, p, E, b, S = {};
  const C = qe("SMUI:chips:nonInteractive");
  st(t, C, (j) => n(9, o = j));
  const M = qe("SMUI:chips:choice");
  st(t, M, (j) => n(2, a = j));
  const D = qe("SMUI:chips:filter");
  st(t, D, (j) => n(3, l = j));
  const _ = qe("SMUI:chips:chip:isSelected");
  st(t, _, (j) => n(10, u = j)), ct(() => {
    let j = { focus: y, addAttr: O };
    return Ie(I(), "SMUIChipsChipPrimaryAction:mount", j), () => {
      Ie(I(), "SMUIChipsChipPrimaryAction:unmount", j);
    };
  });
  function O(j, X) {
    S[j] !== X && n(7, S[j] = X, S);
  }
  function w(j) {
    S.tabindex !== p.getAttribute("tabindex") ? Jr().then(j) : j();
  }
  function y() {
    w(() => {
      b && b.focus();
    });
  }
  function v() {
    return E && E.getElement();
  }
  function I() {
    return p;
  }
  function T(j) {
    se[j ? "unshift" : "push"](() => {
      E = j, n(5, E);
    });
  }
  function P(j) {
    se[j ? "unshift" : "push"](() => {
      b = j, n(6, b);
    });
  }
  function W(j) {
    se[j ? "unshift" : "push"](() => {
      p = j, n(4, p);
    });
  }
  return t.$$set = (j) => {
    e = q(q({}, e), $e(j)), n(16, s = he(e, r)), "use" in j && n(0, h = j.use), "class" in j && n(1, m = j.class), "tabindex" in j && n(17, g = j.tabindex), "$$scope" in j && n(21, f = j.$$scope);
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
    E,
    b,
    S,
    i,
    o,
    u,
    d,
    C,
    M,
    D,
    _,
    s,
    g,
    y,
    v,
    I,
    f,
    c,
    T,
    P,
    W
  ];
}
class o_ extends Le {
  constructor(e) {
    super(), Te(this, e, a_, l_, _e, {
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
      e = ee("span"), N(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(n, i) {
      B(n, e, i);
    },
    d(n) {
      n && U(e);
    }
  };
}
function u_(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p = (
    /*touch*/
    t[4] && sa()
  );
  const E = (
    /*#slots*/
    t[23].default
  ), b = Ae(
    E,
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
  for (let _ = 0; _ < S.length; _ += 1)
    C = q(C, S[_]);
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
  for (let _ = 0; _ < M.length; _ += 1)
    D = q(D, M[_]);
  return {
    c() {
      e = ee("button"), n = ee("span"), i = oe(), p && p.c(), r = oe(), s = ee("span"), b && b.c(), N(n, "class", "mdc-deprecated-chip-trailing-action__ripple"), me(s, C), me(e, D);
    },
    m(_, O) {
      B(_, e, O), Z(e, n), Z(e, i), p && p.m(e, null), Z(e, r), Z(e, s), b && b.m(s, null), e.autofocus && e.focus(), t[24](e), h = !0, m || (g = [
        fe(l = Je.call(
          null,
          s,
          /*icon$use*/
          t[6]
        )),
        fe(f = Dt.call(null, e, {
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
        fe(d = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        pe(e, "click", function() {
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
        pe(e, "keydown", function() {
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
    p(_, [O]) {
      t = _, /*touch*/
      t[4] ? p || (p = sa(), p.c(), p.m(e, r)) : p && (p.d(1), p = null), b && b.p && (!h || O & /*$$scope*/
      4194304) && Ce(
        b,
        E,
        t,
        /*$$scope*/
        t[22],
        h ? ye(
          E,
          /*$$scope*/
          t[22],
          O,
          null
        ) : Se(
          /*$$scope*/
          t[22]
        ),
        null
      ), me(s, C = de(S, [
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
      ), me(e, D = de(M, [
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
    i(_) {
      h || (A(b, _), h = !0);
    },
    o(_) {
      L(b, _), h = !1;
    },
    d(_) {
      _ && U(e), p && p.d(), b && b.d(_), t[24](null), m = !1, Ye(g);
    }
  };
}
const la = ([t, e]) => `${t}: ${e};`;
function c_(t, e, n) {
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
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: l } = ms, o = rt(Qe());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { ripple: d = !0 } = e, { touch: h = !1 } = e, { nonNavigable: m = !1 } = e, { icon$use: g = [] } = e, { icon$class: p = "" } = e, E, b, S = {}, C = {}, M = {};
  ct(() => {
    n(9, b = new l({
      focus: () => {
        const k = W();
        v(() => {
          k.focus();
        });
      },
      getAttribute: w,
      notifyInteraction: (k) => Ie(W(), "SMUIChipTrailingAction:interaction", { trigger: k }, void 0, !0),
      notifyNavigation: (k) => {
        Ie(W(), "SMUIChipTrailingAction:navigation", { key: k }, void 0, !0);
      },
      setAttribute: y
    }));
    const X = { isNavigable: I, focus: T, removeFocus: P };
    return Ie(W(), "SMUIChipsChipTrailingAction:mount", X), b.init(), () => {
      Ie(W(), "SMUIChipsChipTrailingAction:unmount", X), b.destroy();
    };
  });
  function D(X) {
    S[X] || n(10, S[X] = !0, S);
  }
  function _(X) {
    (!(X in S) || S[X]) && n(10, S[X] = !1, S);
  }
  function O(X, k) {
    C[X] != k && (k === "" || k == null ? (delete C[X], n(11, C)) : n(11, C[X] = k, C));
  }
  function w(X) {
    var k;
    return X in M ? (k = M[X]) !== null && k !== void 0 ? k : null : W().getAttribute(X);
  }
  function y(X, k) {
    M[X] !== k && n(12, M[X] = k, M);
  }
  function v(X) {
    M.tabindex !== E.getAttribute("tabindex") ? Jr().then(X) : X();
  }
  function I() {
    return b.isNavigable();
  }
  function T() {
    b.focus();
  }
  function P() {
    b.removeFocus();
  }
  function W() {
    return E;
  }
  function j(X) {
    se[X ? "unshift" : "push"](() => {
      E = X, n(8, E);
    });
  }
  return t.$$set = (X) => {
    e = q(q({}, e), $e(X)), n(17, r = he(e, i)), "use" in X && n(0, u = X.use), "class" in X && n(1, c = X.class), "style" in X && n(2, f = X.style), "ripple" in X && n(3, d = X.ripple), "touch" in X && n(4, h = X.touch), "nonNavigable" in X && n(5, m = X.nonNavigable), "icon$use" in X && n(6, g = X.icon$use), "icon$class" in X && n(7, p = X.icon$class), "$$scope" in X && n(22, a = X.$$scope);
  }, [
    u,
    c,
    f,
    d,
    h,
    m,
    g,
    p,
    E,
    b,
    S,
    C,
    M,
    o,
    D,
    _,
    O,
    r,
    I,
    T,
    P,
    W,
    a,
    s,
    j
  ];
}
class f_ extends Le {
  constructor(e) {
    super(), Te(this, e, c_, u_, _e, {
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
function d_(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), r = Ae(
    i,
    t,
    /*$$scope*/
    t[0],
    null
  );
  return {
    c() {
      e = ee("span"), r && r.c(), N(e, "class", "oscd-icon");
    },
    m(s, a) {
      B(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, [a]) {
      r && r.p && (!n || a & /*$$scope*/
      1) && Ce(
        r,
        i,
        s,
        /*$$scope*/
        s[0],
        n ? ye(
          i,
          /*$$scope*/
          s[0],
          a,
          null
        ) : Se(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      n || (A(r, s), n = !0);
    },
    o(s) {
      L(r, s), n = !1;
    },
    d(s) {
      s && U(e), r && r.d(s);
    }
  };
}
function h_(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  return t.$$set = (s) => {
    "$$scope" in s && n(0, r = s.$$scope);
  }, [r, i];
}
class dn extends Le {
  constructor(e) {
    super(), Te(this, e, h_, d_, _e, {});
  }
}
function m_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function p_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [m_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function g_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class __ extends Le {
  constructor(e) {
    super(), Te(this, e, g_, p_, _e, { svgStyles: 0 });
  }
}
function b_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function v_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [b_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function I_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class tu extends Le {
  constructor(e) {
    super(), Te(this, e, I_, v_, _e, { svgStyles: 0 });
  }
}
function E_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function A_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [E_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function y_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class C_ extends Le {
  constructor(e) {
    super(), Te(this, e, y_, A_, _e, { svgStyles: 0 });
  }
}
function S_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function T_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [S_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function L_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class O_ extends Le {
  constructor(e) {
    super(), Te(this, e, L_, T_, _e, { svgStyles: 0 });
  }
}
function R_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e8eaed");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    p: it,
    d(i) {
      i && U(e);
    }
  };
}
function M_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [R_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope*/
      2 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function D_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class k_ extends Le {
  constructor(e) {
    super(), Te(this, e, D_, M_, _e, { svgStyles: 0 });
  }
}
function N_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function P_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [N_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function H_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class F_ extends Le {
  constructor(e) {
    super(), Te(this, e, H_, P_, _e, { svgStyles: 0 });
  }
}
function w_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M200-440v-80h560v80H200Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e3e3e3");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function U_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [w_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function B_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class V_ extends Le {
  constructor(e) {
    super(), Te(this, e, B_, U_, _e, { svgStyles: 0 });
  }
}
function G_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function j_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [G_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function q_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class W_ extends Le {
  constructor(e) {
    super(), Te(this, e, q_, j_, _e, { svgStyles: 0 });
  }
}
function z_(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
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
      i && U(e);
    }
  };
}
function K_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [z_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function X_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Y_ extends Le {
  constructor(e) {
    super(), Te(this, e, X_, K_, _e, { svgStyles: 0 });
  }
}
function Z_(t) {
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
  return e = new f_({
    props: {
      $$slots: { default: [Q_] },
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
      x(e, i, r), n = !0;
    },
    p(i, r) {
      t = i;
      const s = {};
      r & /*$$scope*/
      16 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Q_(t) {
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
      x(e, i, r), n = !0;
    },
    p: it,
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function J_(t) {
  let e, n, i, r;
  e = new o_({
    props: {
      $$slots: { default: [Z_] },
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
      te(e.$$.fragment), n = oe(), s && s.c(), i = Ze();
    },
    m(a, l) {
      x(e, a, l), B(a, n, l), s && s.m(a, l), B(a, i, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, title*/
      17 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? s ? (s.p(a, l), l & /*closeable, disabled*/
      10 && A(s, 1)) : (s = aa(a), s.c(), A(s, 1), s.m(i.parentNode, i)) : s && (Ue(), L(s, 1, 1, () => {
        s = null;
      }), Be());
    },
    i(a) {
      r || (A(e.$$.fragment, a), A(s), r = !0);
    },
    o(a) {
      L(e.$$.fragment, a), L(s), r = !1;
    },
    d(a) {
      a && (U(n), U(i)), $(e, a), s && s.d(a);
    }
  };
}
function x_(t) {
  let e, n;
  return e = new Yg({
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
      $$slots: { default: [J_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
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
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function $_(t, e, n) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: s } = e, { disabled: a = !1 } = e;
  return t.$$set = (l) => {
    "title" in l && n(0, i = l.title), "closeable" in l && n(1, r = l.closeable), "callback" in l && n(2, s = l.callback), "disabled" in l && n(3, a = l.disabled);
  }, [i, r, s, a];
}
class eb extends Le {
  constructor(e) {
    super(), Te(this, e, $_, x_, _e, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
function tb(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = ee("div"), n = ee("input"), i = oe(), r = ee("label"), s = ut(
        /*label*/
        t[1]
      ), a = oe(), l = ee("span"), N(n, "type", "date"), N(n, "id", "datetime-picker"), N(n, "class", "custom-text-field__input svelte-ar6zwk"), N(n, "placeholder", ""), N(r, "for", "datetime-picker"), N(r, "class", "custom-floating-label svelte-ar6zwk"), N(l, "class", "custom-line svelte-ar6zwk"), N(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      B(c, e, f), Z(e, n), xt(
        n,
        /*value*/
        t[0]
      ), Z(e, i), Z(e, r), Z(r, s), Z(e, a), Z(e, l), o || (u = [
        pe(
          n,
          "input",
          /*input_input_handler*/
          t[3]
        ),
        pe(
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
    i: it,
    o: it,
    d(c) {
      c && U(e), o = !1, Ye(u);
    }
  };
}
function nb(t, e, n) {
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
class ib extends Le {
  constructor(e) {
    super(), Te(this, e, nb, tb, _e, { label: 1, value: 0 });
  }
}
const Mt = [];
for (let t = 0; t < 256; ++t)
  Mt.push((t + 256).toString(16).slice(1));
function rb(t, e = 0) {
  return (Mt[t[e + 0]] + Mt[t[e + 1]] + Mt[t[e + 2]] + Mt[t[e + 3]] + "-" + Mt[t[e + 4]] + Mt[t[e + 5]] + "-" + Mt[t[e + 6]] + Mt[t[e + 7]] + "-" + Mt[t[e + 8]] + Mt[t[e + 9]] + "-" + Mt[t[e + 10]] + Mt[t[e + 11]] + Mt[t[e + 12]] + Mt[t[e + 13]] + Mt[t[e + 14]] + Mt[t[e + 15]]).toLowerCase();
}
let kr;
const sb = new Uint8Array(16);
function lb() {
  if (!kr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    kr = crypto.getRandomValues.bind(crypto);
  }
  return kr(sb);
}
const ab = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), oa = { randomUUID: ab };
function nu(t, e, n) {
  var r;
  if (oa.randomUUID && !t)
    return oa.randomUUID();
  t = t || {};
  const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? lb();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, rb(i);
}
const ob = (t) => ({}), ua = (t) => ({});
function ca(t) {
  let e, n, i;
  function r(a) {
    t[16](a);
  }
  let s = { label: "Input" };
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new yp({ props: s }), se.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        x(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
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
    t[1]), e = new fs({ props: l }), se.push(() => gt(e, "value", s)), se.push(() => gt(e, "selectedOptionIndex", a)), {
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
        128 && (f.data = /*getSelectedFilterType*/
        (d = u[7].inputType) == null ? void 0 : d.options), !n && c & /*inputValue*/
        32 && (n = !0, f.value = /*inputValue*/
        u[5], pt(() => n = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, f.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], pt(() => i = !1)), e.$set(f);
      },
      i(u) {
        r || (A(e.$$.fragment, u), r = !0);
      },
      o(u) {
        L(e.$$.fragment, u), r = !1;
      },
      d(u) {
        $(e, u);
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
    t[5]), e = new ib({ props: s }), se.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        x(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
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
    t[5]), e = new Ib({ props: s }), se.push(() => gt(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        x(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function ub(t) {
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
function cb(t) {
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
  return e = new eb({
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
      x(e, r, s), n = !0;
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
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function fb(t) {
  var I, T, P, W, j, X, k, R;
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, E, b, S;
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
  t[6]), r = new fs({ props: M }), se.push(() => gt(r, "value", C));
  let D = (
    /*getSelectedFilterType*/
    ((T = (I = t[7]) == null ? void 0 : I.inputType) == null ? void 0 : T.type) === "string" && ca(t)
  ), _ = (
    /*getSelectedFilterType*/
    ((W = (P = t[7]) == null ? void 0 : P.inputType) == null ? void 0 : W.type) === "select" && fa(t)
  ), O = (
    /*getSelectedFilterType*/
    ((X = (j = t[7]) == null ? void 0 : j.inputType) == null ? void 0 : X.type) === "datepicker" && da(t)
  ), w = (
    /*getSelectedFilterType*/
    ((R = (k = t[7]) == null ? void 0 : k.inputType) == null ? void 0 : R.type) === "timepicker" && ha(t)
  );
  d = new cs({
    props: {
      callback: (
        /*addFilter*/
        t[10]
      ),
      disabled: (
        /*addFilterDisabled*/
        t[8]
      ),
      $$slots: { default: [ub] },
      $$scope: { ctx: t }
    }
  });
  const y = (
    /*#slots*/
    t[14]["filter-controls"]
  ), v = Ae(
    y,
    t,
    /*$$scope*/
    t[22],
    ua
  );
  return b = new e_({
    props: {
      chips: (
        /*activeFilters*/
        t[0]
      ),
      $$slots: {
        default: [
          cb,
          ({ chip: V }) => ({ 25: V }),
          ({ chip: V }) => V ? 33554432 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = ee("div"), n = ee("div"), i = ee("div"), te(r.$$.fragment), a = oe(), D && D.c(), l = oe(), _ && _.c(), o = oe(), O && O.c(), u = oe(), w && w.c(), c = oe(), f = ee("div"), te(d.$$.fragment), h = oe(), v && v.c(), m = oe(), g = ee("div"), p = oe(), E = ee("div"), te(b.$$.fragment), N(i, "class", "filter-input-controls svelte-1tmo1p6"), N(f, "class", "filter-button-controls svelte-1tmo1p6"), N(n, "class", "input-section svelte-1tmo1p6"), N(g, "class", "separator svelte-1tmo1p6"), N(E, "class", "chip-section svelte-1tmo1p6"), N(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(V, ue) {
      B(V, e, ue), Z(e, n), Z(n, i), x(r, i, null), Z(i, a), D && D.m(i, null), Z(i, l), _ && _.m(i, null), Z(i, o), O && O.m(i, null), Z(i, u), w && w.m(i, null), Z(n, c), Z(n, f), x(d, f, null), Z(f, h), v && v.m(f, null), Z(e, m), Z(e, g), Z(e, p), Z(e, E), x(b, E, null), S = !0;
    },
    p(V, ue) {
      var K, J, Re, Me, He, ie, z, We;
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
      ((J = (K = V[7]) == null ? void 0 : K.inputType) == null ? void 0 : J.type) === "string" ? D ? (D.p(V, ue), ue & /*getSelectedFilterType*/
      128 && A(D, 1)) : (D = ca(V), D.c(), A(D, 1), D.m(i, l)) : D && (Ue(), L(D, 1, 1, () => {
        D = null;
      }), Be()), /*getSelectedFilterType*/
      ((Me = (Re = V[7]) == null ? void 0 : Re.inputType) == null ? void 0 : Me.type) === "select" ? _ ? (_.p(V, ue), ue & /*getSelectedFilterType*/
      128 && A(_, 1)) : (_ = fa(V), _.c(), A(_, 1), _.m(i, o)) : _ && (Ue(), L(_, 1, 1, () => {
        _ = null;
      }), Be()), /*getSelectedFilterType*/
      ((ie = (He = V[7]) == null ? void 0 : He.inputType) == null ? void 0 : ie.type) === "datepicker" ? O ? (O.p(V, ue), ue & /*getSelectedFilterType*/
      128 && A(O, 1)) : (O = da(V), O.c(), A(O, 1), O.m(i, u)) : O && (Ue(), L(O, 1, 1, () => {
        O = null;
      }), Be()), /*getSelectedFilterType*/
      ((We = (z = V[7]) == null ? void 0 : z.inputType) == null ? void 0 : We.type) === "timepicker" ? w ? (w.p(V, ue), ue & /*getSelectedFilterType*/
      128 && A(w, 1)) : (w = ha(V), w.c(), A(w, 1), w.m(i, null)) : w && (Ue(), L(w, 1, 1, () => {
        w = null;
      }), Be());
      const Ee = {};
      ue & /*addFilterDisabled*/
      256 && (Ee.disabled = /*addFilterDisabled*/
      V[8]), ue & /*$$scope, addFilterLabel*/
      4194312 && (Ee.$$scope = { dirty: ue, ctx: V }), d.$set(Ee), v && v.p && (!S || ue & /*$$scope*/
      4194304) && Ce(
        v,
        y,
        V,
        /*$$scope*/
        V[22],
        S ? ye(
          y,
          /*$$scope*/
          V[22],
          ue,
          ob
        ) : Se(
          /*$$scope*/
          V[22]
        ),
        ua
      );
      const Xe = {};
      ue & /*activeFilters*/
      1 && (Xe.chips = /*activeFilters*/
      V[0]), ue & /*$$scope, chip*/
      37748736 && (Xe.$$scope = { dirty: ue, ctx: V }), b.$set(Xe);
    },
    i(V) {
      S || (A(r.$$.fragment, V), A(D), A(_), A(O), A(w), A(d.$$.fragment, V), A(v, V), A(b.$$.fragment, V), S = !0);
    },
    o(V) {
      L(r.$$.fragment, V), L(D), L(_), L(O), L(w), L(d.$$.fragment, V), L(v, V), L(b.$$.fragment, V), S = !1;
    },
    d(V) {
      V && U(e), $(r), D && D.d(), _ && _.d(), O && O.d(), w && w.d(), $(d), v && v.d(V), $(b);
    }
  };
}
function db(t) {
  let e, n;
  return e = new Qo({
    props: {
      $$slots: { default: [fb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, activeFilters, addFilterDisabled, addFilterLabel, inputValue, getSelectedFilterType, selectedOptionIndex, disabled, selectFilterLabel, convertTypeToSelection, selectedFilterType*/
      4195327 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function hb(t, e, n) {
  let i, r, s, { $$slots: a = {}, $$scope: l } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: f = -1 } = e, { disabled: d = !1 } = e, { addFilterLabel: h = "Add Filter" } = e, { selectFilterLabel: m = "Filter Types" } = e, g = "", p = "";
  function E() {
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
  function b(I) {
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
  function _(I) {
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
  const v = (I) => b(I.id);
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
    E,
    b,
    o,
    c,
    a,
    M,
    D,
    _,
    O,
    w,
    y,
    v,
    l
  ];
}
class mb extends Le {
  constructor(e) {
    super(), Te(this, e, hb, db, _e, {
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
      e = ee("div"), n = ee("div"), i = ee("div"), r = oe(), s = ee("span"), a = ut(
        /*message*/
        t[1]
      ), N(i, "class", "loading-spinner svelte-quxj5m"), N(s, "class", "loading-message svelte-quxj5m"), N(n, "class", "loading-spinner-container svelte-quxj5m"), N(e, "class", "overlay svelte-quxj5m");
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
function pb(t) {
  let e, n = !/*loadingDone*/
  t[0] && ma(t);
  return {
    c() {
      e = ee("div"), n && n.c();
    },
    m(i, r) {
      B(i, e, r), n && n.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? n && (n.d(1), n = null) : n ? n.p(i, r) : (n = ma(i), n.c(), n.m(e, null));
    },
    i: it,
    o: it,
    d(i) {
      i && U(e), n && n.d();
    }
  };
}
function gb(t, e, n) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return t.$$set = (s) => {
    "loadingDone" in s && n(0, i = s.loadingDone), "message" in s && n(1, r = s.message);
  }, [i, r];
}
class _b extends Le {
  constructor(e) {
    super(), Te(this, e, gb, pb, _e, { loadingDone: 0, message: 1 });
  }
}
function bb(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = ee("div"), n = ee("input"), i = oe(), r = ee("label"), s = ut(
        /*label*/
        t[1]
      ), a = oe(), l = ee("span"), N(n, "type", "datetime-local"), N(n, "id", "datetime-picker"), N(n, "class", "custom-text-field__input svelte-ar6zwk"), N(n, "placeholder", ""), N(r, "for", "datetime-picker"), N(r, "class", "custom-floating-label svelte-ar6zwk"), N(l, "class", "custom-line svelte-ar6zwk"), N(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      B(c, e, f), Z(e, n), xt(
        n,
        /*value*/
        t[0]
      ), Z(e, i), Z(e, r), Z(r, s), Z(e, a), Z(e, l), o || (u = [
        pe(
          n,
          "input",
          /*input_input_handler*/
          t[3]
        ),
        pe(
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
    i: it,
    o: it,
    d(c) {
      c && U(e), o = !1, Ye(u);
    }
  };
}
function vb(t, e, n) {
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
class Ib extends Le {
  constructor(e) {
    super(), Te(this, e, vb, bb, _e, { label: 1, value: 0 });
  }
}
const Eb = (t) => ({}), pa = (t) => ({});
function Ab(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[2].content
  ), o = Ae(
    l,
    t,
    /*$$scope*/
    t[3],
    pa
  );
  return {
    c() {
      e = ee("details"), n = ee("summary"), i = ut(
        /*title*/
        t[0]
      ), r = oe(), s = ee("div"), o && o.c(), N(n, "class", "svelte-l05fgd"), N(s, "class", "expandable-content svelte-l05fgd"), e.open = /*open*/
      t[1], N(e, "class", "svelte-l05fgd");
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
      8) && Ce(
        o,
        l,
        u,
        /*$$scope*/
        u[3],
        a ? ye(
          l,
          /*$$scope*/
          u[3],
          c,
          Eb
        ) : Se(
          /*$$scope*/
          u[3]
        ),
        pa
      ), (!a || c & /*open*/
      2) && (e.open = /*open*/
      u[1]);
    },
    i(u) {
      a || (A(o, u), a = !0);
    },
    o(u) {
      L(o, u), a = !1;
    },
    d(u) {
      u && U(e), o && o.d(u);
    }
  };
}
function yb(t) {
  let e, n;
  return e = new Qo({
    props: {
      $$slots: { default: [Ab] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, open, title*/
      11 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Cb(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { title: s = "" } = e, { open: a = !1 } = e;
  return t.$$set = (l) => {
    "title" in l && n(0, s = l.title), "open" in l && n(1, a = l.open), "$$scope" in l && n(3, r = l.$$scope);
  }, [s, a, i, r];
}
class Sb extends Le {
  constructor(e) {
    super(), Te(this, e, Cb, yb, _e, { title: 0, open: 1 });
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
var Tb = (
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
      var i = "scaleX(" + n + ")", r = typeof window < "u" ? Hp(window, "transform") : "transform";
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
var Lb = (
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
        return es(this, function(n) {
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
const Ob = (t) => ({}), _a = (t) => ({}), Rb = (t) => ({}), ba = (t) => ({});
function va(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[36].progress
  ), l = Ae(
    a,
    t,
    /*$$scope*/
    t[35],
    ba
  );
  return {
    c() {
      e = ee("div"), n = ee("div"), i = oe(), l && l.c(), N(n, "class", "mdc-data-table__scrim"), N(e, "class", "mdc-data-table__progress-indicator"), N(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        t[13]
      ).map(Ia).join(" "));
    },
    m(o, u) {
      B(o, e, u), Z(e, n), Z(e, i), l && l.m(e, null), s = !0;
    },
    p(o, u) {
      l && l.p && (!s || u[1] & /*$$scope*/
      16) && Ce(
        l,
        a,
        o,
        /*$$scope*/
        o[35],
        s ? ye(
          a,
          /*$$scope*/
          o[35],
          u,
          Rb
        ) : Se(
          /*$$scope*/
          o[35]
        ),
        ba
      ), (!s || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Ia).join(" "))) && N(e, "style", r);
    },
    i(o) {
      s || (A(l, o), s = !0);
    },
    o(o) {
      L(l, o), s = !1;
    },
    d(o) {
      o && U(e), l && l.d(o);
    }
  };
}
function Mb(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m;
  const g = (
    /*#slots*/
    t[36].default
  ), p = Ae(
    g,
    t,
    /*$$scope*/
    t[35],
    null
  );
  let E = [
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
  ], b = {};
  for (let y = 0; y < E.length; y += 1)
    b = q(b, E[y]);
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
    C = q(C, S[y]);
  let M = (
    /*$$slots*/
    t[24].progress && va(t)
  );
  const D = (
    /*#slots*/
    t[36].paginate
  ), _ = Ae(
    D,
    t,
    /*$$scope*/
    t[35],
    _a
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
    w = q(w, O[y]);
  return {
    c() {
      e = ee("div"), n = ee("div"), i = ee("table"), p && p.c(), o = oe(), M && M.c(), u = oe(), _ && _.c(), me(i, b), me(n, C), me(e, w);
    },
    m(y, v) {
      B(y, e, v), Z(e, n), Z(n, i), p && p.m(i, null), t[37](n), Z(e, o), M && M.m(e, null), Z(e, u), _ && _.m(e, null), t[38](e), d = !0, h || (m = [
        fe(s = Je.call(
          null,
          i,
          /*table$use*/
          t[5]
        )),
        fe(l = Je.call(
          null,
          n,
          /*container$use*/
          t[3]
        )),
        fe(f = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[15].call(null, e)
        ),
        pe(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          t[39]
        ),
        pe(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          t[19]
        ),
        pe(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          t[40]
        ),
        pe(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          t[20]
        ),
        pe(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          t[41]
        ),
        pe(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          t[42]
        ),
        pe(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          t[22]
        ),
        pe(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          t[23]
        ),
        pe(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          t[21]
        )
      ], h = !0);
    },
    p(y, v) {
      p && p.p && (!d || v[1] & /*$$scope*/
      16) && Ce(
        p,
        g,
        y,
        /*$$scope*/
        y[35],
        d ? ye(
          g,
          /*$$scope*/
          y[35],
          v,
          null
        ) : Se(
          /*$$scope*/
          y[35]
        ),
        null
      ), me(i, b = de(E, [
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
      ), me(n, C = de(S, [
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
      16777216 && A(M, 1)) : (M = va(y), M.c(), A(M, 1), M.m(e, u)) : M && (Ue(), L(M, 1, 1, () => {
        M = null;
      }), Be()), _ && _.p && (!d || v[1] & /*$$scope*/
      16) && Ce(
        _,
        D,
        y,
        /*$$scope*/
        y[35],
        d ? ye(
          D,
          /*$$scope*/
          y[35],
          v,
          Ob
        ) : Se(
          /*$$scope*/
          y[35]
        ),
        _a
      ), me(e, w = de(O, [
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
      d || (A(p, y), A(M), A(_, y), d = !0);
    },
    o(y) {
      L(p, y), L(M), L(_, y), d = !1;
    },
    d(y) {
      y && U(e), p && p.d(y), t[37](null), M && M.d(), _ && _.d(y), t[38](null), h = !1, Ye(m);
    }
  };
}
const Ia = ([t, e]) => `${t}: ${e};`;
function Db(t, e, n) {
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
  let r = he(e, i), s, a, l, { $$slots: o = {}, $$scope: u } = e;
  const c = Zr(o), { closest: f } = Gi, d = rt(Qe());
  let { use: h = [] } = e, { class: m = "" } = e, { stickyHeader: g = !1 } = e, { sortable: p = !1 } = e, { sort: E = null } = e, { sortDirection: b = "ascending" } = e, { sortAscendingAriaLabel: S = "sorted, ascending" } = e, { sortDescendingAriaLabel: C = "sorted, descending" } = e, { container$use: M = [] } = e, { container$class: D = "" } = e, { table$use: _ = [] } = e, { table$class: O = "" } = e, w, y, v, I, T, P = {}, W = { height: "auto", top: "initial" }, j = qe("SMUI:addLayoutListener"), X, k = !1, R = Tt(!1);
  st(t, R, (G) => n(34, s = G));
  let V = Tt(E);
  st(t, V, (G) => n(45, l = G));
  let ue = Tt(b);
  st(t, ue, (G) => n(44, a = G)), ze("SMUI:checkbox:context", "data-table"), ze("SMUI:linear-progress:context", "data-table"), ze("SMUI:linear-progress:closed", R), ze("SMUI:data-table:sortable", p), ze("SMUI:data-table:sort", V), ze("SMUI:data-table:sortDirection", ue), ze("SMUI:data-table:sortAscendingAriaLabel", S), ze("SMUI:data-table:sortDescendingAriaLabel", C), j && (X = j(We));
  let Ne;
  ct(() => (n(7, y = new Lb({
    addClass: J,
    removeClass: Re,
    getHeaderCellElements: () => {
      var G;
      return (G = I == null ? void 0 : I.cells.map((le) => le.element)) !== null && G !== void 0 ? G : [];
    },
    getHeaderCellCount: () => {
      var G;
      return (G = I == null ? void 0 : I.cells.length) !== null && G !== void 0 ? G : 0;
    },
    getAttributeByHeaderCellIndex: (G, le) => {
      var ne;
      return (ne = I == null ? void 0 : I.orderedCells[G].getAttr(le)) !== null && ne !== void 0 ? ne : null;
    },
    setAttributeByHeaderCellIndex: (G, le, ne) => {
      I == null || I.orderedCells[G].addAttr(le, ne);
    },
    setClassNameByHeaderCellIndex: (G, le) => {
      I == null || I.orderedCells[G].addClass(le);
    },
    removeClassNameByHeaderCellIndex: (G, le) => {
      I == null || I.orderedCells[G].removeClass(le);
    },
    notifySortAction: (G) => {
      n(26, E = G.columnId), n(27, b = G.sortValue), Ie(Ve(), "SMUIDataTable:sorted", G, void 0, !0);
    },
    getTableContainerHeight: () => v.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const G = Ve().querySelector(".mdc-data-table__header-row");
      if (!G)
        throw new Error("MDCDataTable: Table header element not found.");
      return G.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (G) => {
      n(13, W = G);
    },
    addClassAtRowIndex: (G, le) => {
      T == null || T.orderedRows[G].addClass(le);
    },
    getRowCount: () => {
      var G;
      return (G = T == null ? void 0 : T.rows.length) !== null && G !== void 0 ? G : 0;
    },
    getRowElements: () => {
      var G;
      return (G = T == null ? void 0 : T.rows.map((le) => le.element)) !== null && G !== void 0 ? G : [];
    },
    getRowIdAtIndex: (G) => {
      var le;
      return (le = T == null ? void 0 : T.orderedRows[G].rowId) !== null && le !== void 0 ? le : null;
    },
    getRowIndexByChildElement: (G) => {
      var le;
      return (le = T == null ? void 0 : T.orderedRows.map((ne) => ne.element).indexOf(f(G, ".mdc-data-table__row"))) !== null && le !== void 0 ? le : -1;
    },
    getSelectedRowCount: () => {
      var G;
      return (G = T == null ? void 0 : T.rows.filter((le) => le.selected).length) !== null && G !== void 0 ? G : 0;
    },
    isCheckboxAtRowIndexChecked: (G) => {
      const le = T == null ? void 0 : T.orderedRows[G].checkbox;
      return le ? le.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const G = I == null ? void 0 : I.checkbox;
      return G ? G.checked : !1;
    },
    isRowsSelectable: () => !!Ve().querySelector(".mdc-data-table__row-checkbox") || !!Ve().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (G) => {
      const le = T == null ? void 0 : T.orderedRows[G.rowIndex];
      le && Ie(
        Ve(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: le.element,
          rowId: le.rowId,
          rowIndex: G.rowIndex,
          selected: G.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Me(!1), Ie(Ve(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Me(!1), Ie(Ve(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (G) => {
      Ie(Ve(), "SMUIDataTable:rowClick", G, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (G, le) => {
      T == null || T.orderedRows[G].removeClass(le);
    },
    setAttributeAtRowIndex: (G, le, ne) => {
      T == null || T.orderedRows[G].addAttr(le, ne);
    },
    setHeaderRowCheckboxChecked: (G) => {
      const le = I == null ? void 0 : I.checkbox;
      le && (le.checked = G);
    },
    setHeaderRowCheckboxIndeterminate: Me,
    setRowCheckboxCheckedAtIndex: (G, le) => {
      const ne = T == null ? void 0 : T.orderedRows[G].checkbox;
      ne && (ne.checked = le);
    },
    setSortStatusLabelByHeaderCellIndex: (G, le) => {
    }
    // Handled automatically.
  })), y.init(), y.layout(), n(14, k = !0), () => {
    y.destroy();
  })), en(() => {
    X && X();
  });
  function Ee(G) {
    n(10, I = G.detail);
  }
  function Xe(G) {
    n(11, T = G.detail);
  }
  function K(G) {
    y && y.handleRowCheckboxChange(G);
  }
  function J(G) {
    P[G] || n(12, P[G] = !0, P);
  }
  function Re(G) {
    (!(G in P) || P[G]) && n(12, P[G] = !1, P);
  }
  function Me(G) {
    const le = I == null ? void 0 : I.checkbox;
    le && (le.indeterminate = G);
  }
  function He(G) {
    if (!y || !G.detail.target)
      return;
    const le = f(G.detail.target, ".mdc-data-table__header-cell--with-sort");
    le && z(le);
  }
  function ie(G) {
    if (!y || !G.detail.target)
      return;
    const le = f(G.detail.target, ".mdc-data-table__row");
    le && y && y.handleRowClick({ rowId: G.detail.rowId, row: le });
  }
  function z(G) {
    var le, ne;
    const Ke = (le = I == null ? void 0 : I.orderedCells) !== null && le !== void 0 ? le : [], ht = Ke.map((et) => et.element).indexOf(G);
    if (ht === -1)
      return;
    const ft = (ne = Ke[ht].columnId) !== null && ne !== void 0 ? ne : null;
    y.handleSortAction({ columnId: ft, columnIndex: ht, headerCell: G });
  }
  function We() {
    return y.layout();
  }
  function Ve() {
    return w;
  }
  function St(G) {
    se[G ? "unshift" : "push"](() => {
      v = G, n(9, v);
    });
  }
  function Q(G) {
    se[G ? "unshift" : "push"](() => {
      w = G, n(8, w);
    });
  }
  const De = () => y && k && y.layout(), je = () => n(10, I = void 0), Fe = () => n(11, T = void 0), Rt = () => y && y.handleHeaderRowCheckboxChange();
  return t.$$set = (G) => {
    e = q(q({}, e), $e(G)), n(25, r = he(e, i)), "use" in G && n(0, h = G.use), "class" in G && n(1, m = G.class), "stickyHeader" in G && n(2, g = G.stickyHeader), "sortable" in G && n(28, p = G.sortable), "sort" in G && n(26, E = G.sort), "sortDirection" in G && n(27, b = G.sortDirection), "sortAscendingAriaLabel" in G && n(29, S = G.sortAscendingAriaLabel), "sortDescendingAriaLabel" in G && n(30, C = G.sortDescendingAriaLabel), "container$use" in G && n(3, M = G.container$use), "container$class" in G && n(4, D = G.container$class), "table$use" in G && n(5, _ = G.table$use), "table$class" in G && n(6, O = G.table$class), "$$scope" in G && n(35, u = G.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sort*/
    67108864 && jt(V, l = E, l), t.$$.dirty[0] & /*sortDirection*/
    134217728 && jt(ue, a = b, a), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && y && Ne !== s && (n(33, Ne = s), s ? y.hideProgress() : y.showProgress());
  }, [
    h,
    m,
    g,
    M,
    D,
    _,
    O,
    y,
    w,
    v,
    I,
    T,
    P,
    W,
    k,
    d,
    R,
    V,
    ue,
    Ee,
    Xe,
    K,
    He,
    ie,
    c,
    r,
    E,
    b,
    p,
    S,
    C,
    We,
    Ve,
    Ne,
    s,
    u,
    o,
    St,
    Q,
    De,
    je,
    Fe,
    Rt
  ];
}
class kb extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      Db,
      Mb,
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
function Nb(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[10].default
  ), l = Ae(
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
    u = q(u, o[c]);
  return {
    c() {
      e = ee("thead"), l && l.c(), me(e, u);
    },
    m(c, f) {
      B(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        fe(n = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        pe(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[4]
        ),
        pe(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[12]
        ),
        pe(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          t[5]
        ),
        pe(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          t[6]
        )
      ], r = !0);
    },
    p(c, [f]) {
      l && l.p && (!i || f & /*$$scope*/
      512) && Ce(
        l,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? ye(
          a,
          /*$$scope*/
          c[9],
          f,
          null
        ) : Se(
          /*$$scope*/
          c[9]
        ),
        null
      ), me(e, u = de(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(l, c), i = !0);
    },
    o(c) {
      L(l, c), i = !1;
    },
    d(c) {
      c && U(e), l && l.d(c), t[11](null), r = !1, Ye(s);
    }
  };
}
function Pb(t, e, n) {
  const i = ["use", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  ze("SMUI:data-table:row:header", !0), ct(() => {
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
    return Ie(E(), "SMUIDataTableHeader:mount", C), () => {
      Ie(E(), "SMUIDataTableHeader:unmount", C);
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
    return [...E().querySelectorAll(".mdc-data-table__header-cell")].map((C) => d.get(C)).filter((C) => C && C._smui_data_table_header_cell_accessor);
  }
  function E() {
    return u;
  }
  function b(C) {
    se[C ? "unshift" : "push"](() => {
      u = C, n(1, u);
    });
  }
  const S = () => n(2, c = void 0);
  return t.$$set = (C) => {
    e = q(q({}, e), $e(C)), n(7, r = he(e, i)), "use" in C && n(0, o = C.use), "$$scope" in C && n(9, a = C.$$scope);
  }, [
    o,
    u,
    c,
    l,
    h,
    m,
    g,
    r,
    E,
    a,
    s,
    b,
    S
  ];
}
class Hb extends Le {
  constructor(e) {
    super(), Te(this, e, Pb, Nb, _e, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Fb(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[9].default
  ), o = Ae(
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
    c = q(c, u[f]);
  return {
    c() {
      e = ee("tbody"), o && o.c(), me(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[10](e), r = !0, s || (a = [
        fe(i = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        pe(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          t[4]
        ),
        pe(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          t[5]
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && Ce(
        o,
        l,
        f,
        /*$$scope*/
        f[8],
        r ? ye(
          l,
          /*$$scope*/
          f[8],
          d,
          null
        ) : Se(
          /*$$scope*/
          f[8]
        ),
        null
      ), me(e, c = de(u, [
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
      r || (A(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[10](null), s = !1, Ye(a);
    }
  };
}
function wb(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  ze("SMUI:data-table:row:header", !1), ct(() => {
    const b = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return g();
      }
    };
    return Ie(p(), "SMUIDataTableBody:mount", b), () => {
      Ie(p(), "SMUIDataTableBody:unmount", b);
    };
  });
  function h(b) {
    f.push(b.detail), d.set(b.detail.element, b.detail), b.stopPropagation();
  }
  function m(b) {
    const S = f.indexOf(b.detail);
    S !== -1 && (f.splice(S, 1), f = f), d.delete(b.detail.element), b.stopPropagation();
  }
  function g() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function E(b) {
    se[b ? "unshift" : "push"](() => {
      c = b, n(2, c);
    });
  }
  return t.$$set = (b) => {
    e = q(q({}, e), $e(b)), n(6, r = he(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "$$scope" in b && n(8, a = b.$$scope);
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
    E
  ];
}
class Ub extends Le {
  constructor(e) {
    super(), Te(this, e, wb, Fb, _e, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Bb(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[15].default
  ), u = Ae(
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
    f = q(f, c[d]);
  return {
    c() {
      e = ee("tr"), u && u.c(), me(e, f);
    },
    m(d, h) {
      B(d, e, h), u && u.m(e, null), t[16](e), s = !0, a || (l = [
        fe(r = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[6].call(null, e)
        ),
        pe(
          e,
          "click",
          /*click_handler*/
          t[17]
        ),
        pe(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[8]
        ),
        pe(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[18]
        )
      ], a = !0);
    },
    p(d, [h]) {
      u && u.p && (!s || h & /*$$scope*/
      16384) && Ce(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        s ? ye(
          o,
          /*$$scope*/
          d[14],
          h,
          null
        ) : Se(
          /*$$scope*/
          d[14]
        ),
        null
      ), me(e, f = de(c, [
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
      s || (A(u, d), s = !0);
    },
    o(d) {
      L(u, d), s = !1;
    },
    d(d) {
      d && U(e), u && u.d(d), t[16](null), a = !1, Ye(l);
    }
  };
}
let Vb = 0;
function Gb(t, e, n) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Vb++ } = e, f, d, h = {}, m = {}, g = qe("SMUI:data-table:row:header");
  ct(() => {
    const v = g ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return _();
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
      addClass: E,
      removeClass: b,
      getAttr: S,
      addAttr: C
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return _();
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
      addClass: E,
      removeClass: b,
      getAttr: S,
      addAttr: C
    };
    return Ie(_(), "SMUIDataTableRow:mount", v), () => {
      Ie(_(), "SMUIDataTableRow:unmount", v);
    };
  });
  function p(v) {
    n(3, d = v.detail);
  }
  function E(v) {
    h[v] || n(4, h[v] = !0, h);
  }
  function b(v) {
    (!(v in h) || h[v]) && n(4, h[v] = !1, h);
  }
  function S(v) {
    var I;
    return v in m ? (I = m[v]) !== null && I !== void 0 ? I : null : _().getAttribute(v);
  }
  function C(v, I) {
    m[v] !== I && n(5, m[v] = I, m);
  }
  function M(v) {
    Ie(_(), "SMUIDataTableHeader:click", v);
  }
  function D(v) {
    Ie(_(), "SMUIDataTableRow:click", { rowId: c, target: v.target });
  }
  function _() {
    return f;
  }
  function O(v) {
    se[v ? "unshift" : "push"](() => {
      f = v, n(2, f);
    });
  }
  const w = (v) => g ? M(v) : D(v), y = () => n(3, d = void 0);
  return t.$$set = (v) => {
    e = q(q({}, e), $e(v)), n(11, r = he(e, i)), "use" in v && n(0, o = v.use), "class" in v && n(1, u = v.class), "rowId" in v && n(12, c = v.rowId), "$$scope" in v && n(14, a = v.$$scope);
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
    _,
    a,
    s,
    O,
    w,
    y
  ];
}
class iu extends Le {
  constructor(e) {
    super(), Te(this, e, Gb, Bb, _e, {
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
function jb(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[22].default
  ), o = Ae(
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
    c = q(c, u[f]);
  return {
    c() {
      e = ee("td"), o && o.c(), me(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[25](e), r = !0, s || (a = [
        fe(i = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        pe(
          e,
          "change",
          /*change_handler_1*/
          t[26]
        )
      ], s = !0);
    },
    p(f, d) {
      o && o.p && (!r || d & /*$$scope*/
      2097152) && Ce(
        o,
        l,
        f,
        /*$$scope*/
        f[21],
        r ? ye(
          l,
          /*$$scope*/
          f[21],
          d,
          null
        ) : Se(
          /*$$scope*/
          f[21]
        ),
        null
      ), me(e, c = de(u, [
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
      r || (A(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[25](null), s = !1, Ye(a);
    }
  };
}
function qb(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [zb, Wb], f = [];
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
    m = q(m, h[g]);
  return {
    c() {
      e = ee("th"), i.c(), me(e, m);
    },
    m(g, p) {
      B(g, e, p), f[n].m(e, null), t[23](e), l = !0, o || (u = [
        fe(a = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        pe(
          e,
          "change",
          /*change_handler*/
          t[24]
        )
      ], o = !0);
    },
    p(g, p) {
      let E = n;
      n = d(g), n === E ? f[n].p(g, p) : (Ue(), L(f[E], 1, 1, () => {
        f[E] = null;
      }), Be(), i = f[n], i ? i.p(g, p) : (i = f[n] = c[n](g), i.c()), A(i, 1), i.m(e, null)), me(e, m = de(h, [
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
      l || (A(i), l = !0);
    },
    o(g) {
      L(i), l = !1;
    },
    d(g) {
      g && U(e), f[n].d(), t[23](null), o = !1, Ye(u);
    }
  };
}
function Wb(t) {
  let e;
  const n = (
    /*#slots*/
    t[22].default
  ), i = Ae(
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
      2097152) && Ce(
        i,
        n,
        r,
        /*$$scope*/
        r[21],
        e ? ye(
          n,
          /*$$scope*/
          r[21],
          s,
          null
        ) : Se(
          /*$$scope*/
          r[21]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function zb(t) {
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
  ), u = Ae(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = ee("div"), u && u.c(), n = oe(), i = ee("div"), s = ut(r), N(i, "class", "mdc-data-table__sort-status-label"), N(i, "aria-hidden", "true"), N(i, "id", a = /*columnId*/
      t[4] + "-status-label"), N(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      B(c, e, f), u && u.m(e, null), Z(e, n), Z(e, i), Z(i, s), l = !0;
    },
    p(c, f) {
      u && u.p && (!l || f & /*$$scope*/
      2097152) && Ce(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        l ? ye(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : Se(
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
      c[4] + "-status-label")) && N(i, "id", a);
    },
    i(c) {
      l || (A(u, c), l = !0);
    },
    o(c) {
      L(u, c), l = !1;
    },
    d(c) {
      c && U(e), u && u.d(c);
    }
  };
}
function Kb(t) {
  let e, n, i, r;
  const s = [qb, jb], a = [];
  function l(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      n.p(o, u);
    },
    i(o) {
      r || (A(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
let Xb = 0;
function Yb(t, e, n) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = he(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt(Qe());
  let c = qe("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: h = !1 } = e, { checkbox: m = !1 } = e, { columnId: g = c ? "SMUI-data-table-column-" + Xb++ : "SMUI-data-table-unused" } = e, { sortable: p = qe("SMUI:data-table:sortable") } = e, E, b = {}, S = {}, C = qe("SMUI:data-table:sort");
  st(t, C, (R) => n(9, s = R));
  let M = qe("SMUI:data-table:sortDirection");
  st(t, M, (R) => n(10, a = R));
  let D = qe("SMUI:data-table:sortAscendingAriaLabel"), _ = qe("SMUI:data-table:sortDescendingAriaLabel");
  p && (ze("SMUI:label:context", "data-table:sortable-header-cell"), ze("SMUI:icon-button:context", "data-table:sortable-header-cell"), ze("SMUI:icon-button:aria-describedby", g + "-status-label")), ct(() => {
    const R = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return P();
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
        return P();
      },
      get columnId() {
      },
      addClass: O,
      removeClass: w,
      getAttr: y,
      addAttr: v
    };
    return Ie(P(), "SMUIDataTableCell:mount", R), () => {
      Ie(P(), "SMUIDataTableCell:unmount", R);
    };
  });
  function O(R) {
    b[R] || n(7, b[R] = !0, b);
  }
  function w(R) {
    (!(R in b) || b[R]) && n(7, b[R] = !1, b);
  }
  function y(R) {
    var V;
    return R in S ? (V = S[R]) !== null && V !== void 0 ? V : null : P().getAttribute(R);
  }
  function v(R, V) {
    S[R] !== V && n(8, S[R] = V, S);
  }
  function I(R) {
    Ie(P(), "SMUIDataTableHeaderCheckbox:change", R);
  }
  function T(R) {
    Ie(P(), "SMUIDataTableBodyCheckbox:change", R);
  }
  function P() {
    return E;
  }
  function W(R) {
    se[R ? "unshift" : "push"](() => {
      E = R, n(6, E);
    });
  }
  const j = (R) => m && I(R);
  function X(R) {
    se[R ? "unshift" : "push"](() => {
      E = R, n(6, E);
    });
  }
  const k = (R) => m && T(R);
  return t.$$set = (R) => {
    e = q(q({}, e), $e(R)), n(19, r = he(e, i)), "use" in R && n(0, f = R.use), "class" in R && n(1, d = R.class), "numeric" in R && n(2, h = R.numeric), "checkbox" in R && n(3, m = R.checkbox), "columnId" in R && n(4, g = R.columnId), "sortable" in R && n(5, p = R.sortable), "$$scope" in R && n(21, o = R.$$scope);
  }, [
    f,
    d,
    h,
    m,
    g,
    p,
    E,
    b,
    S,
    s,
    a,
    u,
    c,
    C,
    M,
    D,
    _,
    I,
    T,
    r,
    P,
    o,
    l,
    W,
    j,
    X,
    k
  ];
}
class ps extends Le {
  constructor(e) {
    super(), Te(this, e, Yb, Kb, _e, {
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
const Zb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Zb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Qb(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, g, p, E, b, S, C, M = [
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
      "aria-valuenow": E = /*indeterminate*/
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
  for (let _ = 0; _ < M.length; _ += 1)
    D = q(D, M[_]);
  return {
    c() {
      e = ee("div"), n = ee("div"), i = ee("div"), s = oe(), a = ee("div"), l = oe(), o = ee("div"), u = ee("span"), f = oe(), d = ee("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', N(i, "class", "mdc-linear-progress__buffer-bar"), N(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        t[11]
      ).map(Ea).join(" ")), N(a, "class", "mdc-linear-progress__buffer-dots"), N(n, "class", "mdc-linear-progress__buffer"), N(u, "class", "mdc-linear-progress__bar-inner"), N(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), N(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        t[12]
      ).map(Aa).join(" ")), N(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), me(e, D);
    },
    m(_, O) {
      B(_, e, O), Z(e, n), Z(n, i), Z(n, s), Z(n, a), Z(e, l), Z(e, o), Z(o, u), Z(e, f), Z(e, d), t[19](e), S || (C = [
        fe(b = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        pe(
          e,
          "transitionend",
          /*transitionend_handler*/
          t[20]
        )
      ], S = !0);
    },
    p(_, [O]) {
      O & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        _[11]
      ).map(Ea).join(" ")) && N(i, "style", r), O & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        _[12]
      ).map(Aa).join(" ")) && N(o, "style", c), me(e, D = de(M, [
        O & /*className, indeterminate, closed, internalClasses*/
        282 && h !== (h = re({
          [
            /*className*/
            _[1]
          ]: !0,
          "mdc-linear-progress": !0,
          "mdc-linear-progress--indeterminate": (
            /*indeterminate*/
            _[3]
          ),
          "mdc-linear-progress--closed": (
            /*closed*/
            _[4]
          ),
          "mdc-data-table__linear-progress": (
            /*context*/
            _[14] === "data-table"
          ),
          .../*internalClasses*/
          _[8]
        })) && { class: h },
        O & /*internalStyles, style*/
        1028 && m !== (m = Object.entries(
          /*internalStyles*/
          _[10]
        ).map(ya).concat([
          /*style*/
          _[2]
        ]).join(" ")) && { style: m },
        { role: "progressbar" },
        {
          "aria-valuemin": g
        },
        {
          "aria-valuemax": p
        },
        O & /*indeterminate, progress*/
        40 && E !== (E = /*indeterminate*/
        _[3] ? void 0 : (
          /*progress*/
          _[5]
        )) && {
          "aria-valuenow": E
        },
        O & /*internalAttrs*/
        512 && /*internalAttrs*/
        _[9],
        O & /*$$restProps*/
        65536 && /*$$restProps*/
        _[16]
      ])), b && ge(b.update) && O & /*use*/
      1 && b.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i: it,
    o: it,
    d(_) {
      _ && U(e), t[19](null), S = !1, Ye(C);
    }
  };
}
const Ea = ([t, e]) => `${t}: ${e};`, Aa = ([t, e]) => `${t}: ${e};`, ya = ([t, e]) => `${t}: ${e};`;
function Jb(t, e, n) {
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
  let r = he(e, i), s;
  const a = rt(Qe());
  let { use: l = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: f = !1 } = e, { progress: d = 0 } = e, { buffer: h = void 0 } = e, m, g, p = {}, E = {}, b = {}, S = {}, C = {}, M = qe("SMUI:linear-progress:context"), D = qe("SMUI:linear-progress:closed");
  st(t, D, (k) => n(21, s = k)), ct(() => (n(6, g = new Tb({
    addClass: O,
    forceLayout: () => {
      W().getBoundingClientRect();
    },
    setBufferBarStyle: T,
    setPrimaryBarStyle: P,
    hasClass: _,
    removeAttribute: v,
    removeClass: w,
    setAttribute: y,
    setStyle: I,
    attachResizeObserver: (k) => {
      const R = window.ResizeObserver;
      if (R) {
        const V = new R(k);
        return V.observe(W()), V;
      }
      return null;
    },
    getWidth: () => W().offsetWidth
  })), g.init(), () => {
    g.destroy();
  }));
  function _(k) {
    return k in p ? p[k] : W().classList.contains(k);
  }
  function O(k) {
    p[k] || n(8, p[k] = !0, p);
  }
  function w(k) {
    (!(k in p) || p[k]) && n(8, p[k] = !1, p);
  }
  function y(k, R) {
    E[k] !== R && n(9, E[k] = R, E);
  }
  function v(k) {
    (!(k in E) || E[k] != null) && n(9, E[k] = void 0, E);
  }
  function I(k, R) {
    b[k] != R && (R === "" || R == null ? (delete b[k], n(10, b)) : n(10, b[k] = R, b));
  }
  function T(k, R) {
    S[k] != R && (R === "" || R == null ? (delete S[k], n(11, S)) : n(11, S[k] = R, S));
  }
  function P(k, R) {
    C[k] != R && (R === "" || R == null ? (delete C[k], n(12, C)) : n(12, C[k] = R, C));
  }
  function W() {
    return m;
  }
  function j(k) {
    se[k ? "unshift" : "push"](() => {
      m = k, n(7, m);
    });
  }
  const X = () => g && g.handleTransitionEnd();
  return t.$$set = (k) => {
    e = q(q({}, e), $e(k)), n(16, r = he(e, i)), "use" in k && n(0, l = k.use), "class" in k && n(1, o = k.class), "style" in k && n(2, u = k.style), "indeterminate" in k && n(3, c = k.indeterminate), "closed" in k && n(4, f = k.closed), "progress" in k && n(5, d = k.progress), "buffer" in k && n(17, h = k.buffer);
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
    E,
    b,
    S,
    C,
    a,
    M,
    D,
    r,
    h,
    W,
    j,
    X
  ];
}
class xb extends Le {
  constructor(e) {
    super(), Te(this, e, Jb, Qb, _e, {
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
      n && n.c(), e = Ze();
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
      return e0;
    if (
      /*$sortDirection*/
      s[7] === "desc"
    )
      return $b;
  }
  let i = n(t), r = i && i(t);
  return {
    c() {
      r && r.c(), e = Ze();
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
function $b(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M12 20l8-8H4l8 8z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 0 24 24"), N(e, "width", "16"), N(e, "height", "16"), N(e, "fill", "currentColor"), N(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      B(i, e, r), Z(e, n);
    },
    d(i) {
      i && U(e);
    }
  };
}
function e0(t) {
  let e, n;
  return {
    c() {
      e = at("svg"), n = at("path"), N(n, "d", "M12 4l-8 8h16l-8-8z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 0 24 24"), N(e, "width", "16"), N(e, "height", "16"), N(e, "fill", "currentColor"), N(e, "class", "svelte-29x22x");
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
      i && i.c(), e = oe(), r && r.c(), n = Ze();
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
      e = ee("input"), N(e, "type", "text"), N(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), N(e, "class", "svelte-29x22x");
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
        pe(e, "input", s),
        pe(
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
      t[28].headerName}`) && N(e, "placeholder", n), l[0] & /*filters, columnDefs*/
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
      a && U(e), i = !1, Ye(r);
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
      e = ee("input"), N(e, "type", "number"), N(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), N(e, "class", "svelte-29x22x");
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
        pe(e, "input", s),
        pe(
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
      t[28].headerName}`) && N(e, "placeholder", n), l[0] & /*filters, columnDefs*/
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
      a && U(e), i = !1, Ye(r);
    }
  };
}
function t0(t) {
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
      e = ee("div"), n = ee("div"), i = ee("span"), s = ut(r), a = oe(), u && u.c(), l = oe(), c && c.c(), o = oe(), N(i, "class", "header-title svelte-29x22x"), N(n, "class", "cell-header svelte-29x22x"), N(e, "class", "custom-cell-container svelte-29x22x"), ki(
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
      4 && ki(
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
  return e = new ps({
    props: {
      style: (
        /*col*/
        t[28].headerStyle
      ),
      $$slots: { default: [t0] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", i), {
    c() {
      te(e.$$.fragment);
    },
    m(r, s) {
      x(e, r, s), n = !0;
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
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function n0(t) {
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
      e = Ze();
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
          r[o] ? (r[o].p(u, l), A(r[o], 1)) : (r[o] = Na(u), r[o].c(), A(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          A(r[l]);
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
      a && U(e), Qr(r, a);
    }
  };
}
function i0(t) {
  let e, n;
  return e = new iu({
    props: {
      class: "header-row",
      $$slots: { default: [n0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function r0(t) {
  let e, n;
  return e = new ps({
    props: {
      numeric: (
        /*col*/
        t[28].numeric
      ),
      style: (
        /*col*/
        t[28].cellStyle
      ),
      $$slots: { default: [o0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
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
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function s0(t) {
  let e, n;
  return e = new ps({
    props: {
      $$slots: { default: [I0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*rowActions, $filteredData*/
      264 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function l0(t) {
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
function a0(t) {
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
function o0(t) {
  let e;
  function n(s, a) {
    return (
      /*col*/
      s[28].valueFormatter ? a0 : l0
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Ze();
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
function u0(t) {
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
  return e = new cs({
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
      $$slots: { default: [v0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, s) {
      x(e, r, s), n = !0;
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
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function c0(t) {
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
  return e = new im({
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
      x(e, r, s), n = !0;
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
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      L(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function f0(t) {
  let e, n;
  return e = new k_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function d0(t) {
  let e, n;
  return e = new Y_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function h0(t) {
  let e, n;
  return e = new W_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function m0(t) {
  let e, n;
  return e = new V_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function p0(t) {
  let e, n;
  return e = new O_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function g0(t) {
  let e, n;
  return e = new C_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function _0(t) {
  let e, n;
  return e = new tu({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function b0(t) {
  let e, n;
  return e = new __({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function v0(t) {
  let e, n, i, r;
  const s = [
    b0,
    _0,
    g0,
    p0,
    m0,
    h0,
    d0,
    f0
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
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e !== c && (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n || (n = a[e] = s[e](o), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (A(n), r = !0);
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
  const s = [c0, u0], a = [];
  function l(o, u) {
    return (
      /*action*/
      o[31].iconComponent ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (A(n), r = !0);
    },
    o(o) {
      L(n), r = !1;
    },
    d(o) {
      o && U(i), a[e].d(o);
    }
  };
}
function I0(t) {
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
      e = ee("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      N(e, "class", "cell-actions svelte-29x22x");
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
          r[o] ? (r[o].p(u, l), A(r[o], 1)) : (r[o] = Pa(u), r[o].c(), A(r[o], 1), r[o].m(e, null));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          A(r[l]);
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
      a && U(e), Qr(r, a);
    }
  };
}
function Ha(t, e) {
  let n, i, r, s, a;
  const l = [s0, r0], o = [];
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
      n = Ze(), r.c(), s = Ze(), this.first = n;
    },
    m(c, f) {
      B(c, n, f), o[i].m(c, f), B(c, s, f), a = !0;
    },
    p(c, f) {
      e = c;
      let d = i;
      i = u(e), i === d ? o[i].p(e, f) : (Ue(), L(o[d], 1, 1, () => {
        o[d] = null;
      }), Be(), r = o[i], r ? r.p(e, f) : (r = o[i] = l[i](e), r.c()), A(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      a || (A(r), a = !0);
    },
    o(c) {
      L(r), a = !1;
    },
    d(c) {
      c && (U(n), U(s)), o[i].d(c);
    }
  };
}
function E0(t) {
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
      ), Ue(), e = $r(e, o, a, 1, l, s, n, i.parentNode, xr, Ha, i, Sa), Be());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          A(e[o]);
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
      $$slots: { default: [E0] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ze(), te(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      B(s, n, a), x(i, s, a), r = !0;
    },
    p(s, a) {
      e = s;
      const l = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      268 | a[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: a, ctx: e }), i.$set(l);
    },
    i(s) {
      r || (A(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), $(i, s);
    }
  };
}
function A0(t) {
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
      i = Ze();
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
      ), Ue(), e = $r(e, o, a, 1, l, s, n, i.parentNode, xr, Fa, i, Ca), Be());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          A(e[o]);
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
function y0(t) {
  let e, n, i, r;
  return e = new Hb({
    props: {
      $$slots: { default: [i0] },
      $$scope: { ctx: t }
    }
  }), i = new Ub({
    props: {
      $$slots: { default: [A0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe(), te(i.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), B(s, n, a), x(i, s, a), r = !0;
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
      r || (A(e.$$.fragment, s), A(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(e.$$.fragment, s), L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), $(e, s), $(i, s);
    }
  };
}
function C0(t) {
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
    t[0]), e = new xb({ props: s }), se.push(() => gt(e, "closed", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, l) {
        x(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l[0] & /*loadingDone*/
        1 && (n = !0, o.closed = /*loadingDone*/
        a[0], pt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        L(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function S0(t) {
  let e, n;
  return e = new kb({
    props: {
      "table$aria-label": (
        /*label*/
        t[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [C0],
        default: [y0]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
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
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function T0(t, e, n) {
  let i, r, s, { loadingDone: a = !0 } = e, { label: l = nu() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: f = [] } = e, { searchInputLabel: d = "Search" } = e, h = { name: "", color: "", number: "" }, m = Tt([]);
  st(t, m, (I) => n(8, s = I));
  let g = Tt(null);
  st(t, g, (I) => n(6, i = I));
  let p = Tt(null);
  st(t, p, (I) => n(7, r = I)), c.store.subscribe((I) => {
    n(14, u = [...I]), E();
  });
  function E() {
    let I = u.filter((T) => o.every((P) => {
      const W = h[P.field], j = T[P.field];
      return W ? P.filterType === "number" ? j == W : j.toString().toLowerCase().includes(W.toLowerCase()) : !0;
    }));
    I = b(I), m.set(I);
  }
  function b(I) {
    let T, P;
    return g.subscribe((W) => T = W), p.subscribe((W) => P = W), !T || !P ? I : I.sort((W, j) => {
      let X = W[T], k = j[T];
      return X == null && (X = ""), k == null && (k = ""), P === "asc" ? X.toString().localeCompare(k.toString()) : k.toString().localeCompare(X.toString());
    });
  }
  function S(I) {
    g.update((T) => {
      if (T === I)
        p.update((P) => P === "asc" ? "desc" : P === "desc" ? null : "asc");
      else
        return p.set("asc"), I;
      return I;
    }), E();
  }
  m.set(u);
  function C(I) {
    a = I, n(0, a);
  }
  function M(I) {
    h[I.field] = this.value, n(5, h);
  }
  const D = () => E();
  function _(I) {
    h[I.field] = Ga(this.value), n(5, h);
  }
  const O = () => E(), w = (I) => I.sortable && S(I.field), y = (I, T) => I.callback(T), v = (I, T) => I.callback(T);
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
    E,
    S,
    u,
    c,
    C,
    M,
    D,
    _,
    O,
    w,
    y,
    v
  ];
}
class ru extends Le {
  constructor(e) {
    super(), Te(
      this,
      e,
      T0,
      S0,
      _e,
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
function L0(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[9].default
  ), o = Ae(
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
    c = q(c, u[f]);
  return {
    c() {
      e = ee("div"), o && o.c(), me(e, c);
    },
    m(f, d) {
      B(f, e, d), o && o.m(e, null), t[10](e), r = !0, s || (a = [
        fe(i = Je.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        fe(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && Ce(
        o,
        l,
        f,
        /*$$scope*/
        f[8],
        r ? ye(
          l,
          /*$$scope*/
          f[8],
          d,
          null
        ) : Se(
          /*$$scope*/
          f[8]
        ),
        null
      ), me(e, c = de(u, [
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
      r || (A(o, f), r = !0);
    },
    o(f) {
      L(o, f), r = !1;
    },
    d(f) {
      f && U(e), o && o.d(f), t[10](null), s = !1, Ye(a);
    }
  };
}
function O0(t, e, n) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { padded: f = !1 } = e, d;
  function h() {
    return d;
  }
  function m(g) {
    se[g ? "unshift" : "push"](() => {
      d = g, n(4, d);
    });
  }
  return t.$$set = (g) => {
    e = q(q({}, e), $e(g)), n(6, r = he(e, i)), "use" in g && n(0, o = g.use), "class" in g && n(1, u = g.class), "variant" in g && n(2, c = g.variant), "padded" in g && n(3, f = g.padded), "$$scope" in g && n(8, a = g.$$scope);
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
class su extends Le {
  constructor(e) {
    super(), Te(this, e, O0, L0, _e, {
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
function R0(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d;
  function h(b) {
    t[15](b);
  }
  function m(b) {
    t[16](b);
  }
  let g = { label: (
    /*$_*/
    t[3]("location")
  ) };
  /*locations*/
  t[4] !== void 0 && (g.data = /*locations*/
  t[4]), /*selectedLocationUUID*/
  t[2] !== void 0 && (g.value = /*selectedLocationUUID*/
  t[2]), n = new fs({ props: g }), se.push(() => gt(n, "data", h)), se.push(() => gt(n, "value", m));
  function p(b) {
    t[18](b);
  }
  let E = {
    title: (
      /*$_*/
      t[3]("search")
    ),
    $$slots: { content: [H0] },
    $$scope: { ctx: t }
  };
  return (
    /*searchOpen*/
    t[5] !== void 0 && (E.open = /*searchOpen*/
    t[5]), l = new Sb({ props: E }), se.push(() => gt(l, "open", p)), l.$on(
      "click",
      /*toggleSearchPanel*/
      t[14]
    ), f = new su({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [F0] },
        $$scope: { ctx: t }
      }
    }), {
      c() {
        e = ee("div"), te(n.$$.fragment), s = oe(), a = ee("div"), te(l.$$.fragment), u = oe(), c = ee("div"), te(f.$$.fragment), N(a, "class", "search-filter svelte-cft5xm"), N(c, "class", "table-container"), N(e, "class", "location-viewer-container");
      },
      m(b, S) {
        B(b, e, S), x(n, e, null), Z(e, s), Z(e, a), x(l, a, null), Z(e, u), Z(e, c), x(f, c, null), d = !0;
      },
      p(b, S) {
        const C = {};
        S & /*$_*/
        8 && (C.label = /*$_*/
        b[3]("location")), !i && S & /*locations*/
        16 && (i = !0, C.data = /*locations*/
        b[4], pt(() => i = !1)), !r && S & /*selectedLocationUUID*/
        4 && (r = !0, C.value = /*selectedLocationUUID*/
        b[2], pt(() => r = !1)), n.$set(C);
        const M = {};
        S & /*$_*/
        8 && (M.title = /*$_*/
        b[3]("search")), S & /*$$scope, searchColumnDefs, searchResourceStore, $_, filtersToSearch*/
        16777866 && (M.$$scope = { dirty: S, ctx: b }), !o && S & /*searchOpen*/
        32 && (o = !0, M.open = /*searchOpen*/
        b[5], pt(() => o = !1)), l.$set(M);
        const D = {};
        S & /*$$scope, locationColumnDefs, locationResourceStore, $_, selectedLocationUUID, locations*/
        16777501 && (D.$$scope = { dirty: S, ctx: b }), f.$set(D);
      },
      i(b) {
        d || (A(n.$$.fragment, b), A(l.$$.fragment, b), A(f.$$.fragment, b), d = !0);
      },
      o(b) {
        L(n.$$.fragment, b), L(l.$$.fragment, b), L(f.$$.fragment, b), d = !1;
      },
      d(b) {
        b && U(e), $(n), $(l), $(f);
      }
    }
  );
}
function M0(t) {
  let e, n;
  return e = new _b({
    props: { loadingDone: !/*loading*/
    t[6] }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*loading*/
      64 && (s.loadingDone = !/*loading*/
      i[6]), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function D0(t) {
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
function k0(t) {
  let e, n, i, r;
  return e = new F_({}), i = new Th({
    props: {
      $$slots: { default: [D0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe(), te(i.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), B(s, n, a), x(i, s, a), r = !0;
    },
    p(s, a) {
      const l = {};
      a & /*$$scope, $_*/
      16777224 && (l.$$scope = { dirty: a, ctx: s }), i.$set(l);
    },
    i(s) {
      r || (A(e.$$.fragment, s), A(i.$$.fragment, s), r = !0);
    },
    o(s) {
      L(e.$$.fragment, s), L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && U(n), $(e, s), $(i, s);
    }
  };
}
function N0(t) {
  let e, n;
  return e = new cs({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        t[13]
      ),
      $$slots: { default: [k0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, $_*/
      16777224 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function P0(t) {
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
      e = ee("h3"), i = ut(n), r = oe(), te(s.$$.fragment), ki(e, "margin-bottom", "1rem");
    },
    m(l, o) {
      B(l, e, o), Z(e, i), B(l, r, o), x(s, l, o), a = !0;
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
      a || (A(s.$$.fragment, l), a = !0);
    },
    o(l) {
      L(s.$$.fragment, l), a = !1;
    },
    d(l) {
      l && (U(e), U(r)), $(s, l);
    }
  };
}
function H0(t) {
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
      "filter-controls": [N0]
    },
    $$scope: { ctx: t }
  };
  return (
    /*filtersToSearch*/
    t[7] !== void 0 && (c.activeFilters = /*filtersToSearch*/
    t[7]), i = new mb({ props: c }), se.push(() => gt(i, "activeFilters", u)), l = new su({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [P0] },
        $$scope: { ctx: t }
      }
    }), {
      c() {
        e = ee("div"), n = ee("div"), te(i.$$.fragment), s = oe(), a = ee("div"), te(l.$$.fragment), N(n, "class", "filter-box svelte-cft5xm"), N(a, "class", "table-container"), N(e, "slot", "content");
      },
      m(f, d) {
        B(f, e, d), Z(e, n), x(i, n, null), Z(e, s), Z(e, a), x(l, a, null), o = !0;
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
        o || (A(i.$$.fragment, f), A(l.$$.fragment, f), o = !0);
      },
      o(f) {
        L(i.$$.fragment, f), L(l.$$.fragment, f), o = !1;
      },
      d(f) {
        f && U(e), $(i), $(l);
      }
    }
  );
}
function F0(t) {
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
      e = ee("h3"), i = ut(n), r = oe(), te(s.$$.fragment), ki(e, "margin-bottom", "1rem");
    },
    m(o, u) {
      B(o, e, u), Z(e, i), B(o, r, u), x(s, o, u), a = !0;
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
      a || (A(s.$$.fragment, o), a = !0);
    },
    o(o) {
      L(s.$$.fragment, o), a = !1;
    },
    d(o) {
      o && (U(e), U(r)), $(s, o);
    }
  };
}
function w0(t) {
  let e, n, i, r;
  const s = [M0, R0], a = [];
  function l(o, u) {
    return (
      /*loading*/
      o[6] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), B(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), L(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (A(n), r = !0);
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
function U0(t) {
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
function B0(t, e, n) {
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
      callback: (v) => b(v),
      disabled: () => !1
    }
  ];
  let E = [];
  function b(v) {
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
    const v = U0(E);
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
  function _(v) {
    o = v, n(2, o);
  }
  function O(v) {
    E = v, n(7, E);
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
    E,
    r,
    i,
    m,
    g,
    p,
    C,
    M,
    D,
    _,
    O,
    w,
    y
  ];
}
class V0 extends Le {
  constructor(e) {
    super(), Te(this, e, B0, w0, _e, {
      locationResourceStore: 0,
      searchResourceStore: 1
    });
  }
}
function Ua(t) {
  let e, n;
  return e = new V0({}), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function G0(t) {
  let e, n, i, r, s, a = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && Ua()
  );
  return {
    c() {
      a && a.c(), e = oe(), n = ee("input"), i = oe(), r = ee("input"), N(n, "type", "hidden"), N(n, "name", "package-name"), n.value = za, N(r, "type", "hidden"), N(r, "name", "package-version"), r.value = Ka;
    },
    m(l, o) {
      a && a.m(l, o), B(l, e, o), B(l, n, o), B(l, i, o), B(l, r, o), s = !0;
    },
    p(l, [o]) {
      /*doc*/
      l[0] || /*dev*/
      l[1] ? a ? o & /*doc, dev*/
      3 && A(a, 1) : (a = Ua(), a.c(), A(a, 1), a.m(e.parentNode, e)) : a && (Ue(), L(a, 1, 1, () => {
        a = null;
      }), Be());
    },
    i(l) {
      s || (A(a), s = !0);
    },
    o(l) {
      L(a), s = !1;
    },
    d(l) {
      l && (U(e), U(n), U(i), U(r)), a && a.d(l);
    }
  };
}
function j0(t, e, n) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return t.$$set = (s) => {
    "doc" in s && n(0, i = s.doc), "dev" in s && n(1, r = s.dev);
  }, [i, r];
}
class q0 extends Le {
  constructor(e) {
    super(), Te(this, e, j0, G0, _e, { doc: 0, dev: 1 });
  }
}
class Q0 extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new q0({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = W0();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function W0() {
  const t = `${za}-v${Ka}-style`, e = z0(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function z0() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  Q0 as default
};
