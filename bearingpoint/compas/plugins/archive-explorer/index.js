var Nu = Object.defineProperty;
var Pu = (t, e, n) => e in t ? Nu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Pr = (t, e, n) => (Pu(t, typeof e != "symbol" ? e + "" : e, n), n), Hu = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var Xt = (t, e, n) => (Hu(t, e, "read from private field"), n ? n.call(t) : e.get(t)), mi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
};
function $e() {
}
function K(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function ho(t) {
  return t();
}
function Us() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(t) {
  t.forEach(ho);
}
function ge(t) {
  return typeof t == "function";
}
function _e(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function wu(t) {
  return Object.keys(t).length === 0;
}
function bs(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return $e;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function vs(t) {
  let e;
  return bs(t, (n) => e = n)(), e;
}
function lt(t, e, n) {
  t.$$.on_destroy.push(bs(e, n));
}
function Se(t, e, n, i) {
  if (t) {
    const r = mo(t, e, n, i);
    return t[0](r);
  }
}
function mo(t, e, n, i) {
  return t[1] && i ? K(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Te(t, e, n, i) {
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
function Le(t, e, n, i, r, s) {
  if (r) {
    const a = mo(e, n, i, s);
    t.p(a, r);
  }
}
function Oe(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function nt(t) {
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
function Is(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Wt(t, e, n) {
  return t.set(n), e;
}
function fe(t) {
  return t && ge(t.destroy) ? t.destroy : $e;
}
const Fu = ["", !0, 1, "true", "contenteditable"], po = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function Q(t, e) {
  t.appendChild(e);
}
function U(t, e, n) {
  t.insertBefore(e, n || null);
}
function F(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Es(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function ee(t) {
  return document.createElement(t);
}
function ot(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ct(t) {
  return document.createTextNode(t);
}
function oe() {
  return ct(" ");
}
function Ke() {
  return ct("");
}
function pe(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function N(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Uu = ["width", "height"];
function me(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Uu.indexOf(i) === -1 ? t[i] = e[i] : N(t, i, e[i]);
}
function Ki(t, e) {
  for (const n in e)
    N(t, n, e[n]);
}
function Bu(t, e) {
  Object.keys(e).forEach((n) => {
    Vu(t, n, e[n]);
  });
}
function Vu(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : N(t, e, n);
}
function Xi(t) {
  return /-/.test(t) ? Bu : me;
}
function go(t) {
  return t === "" ? null : +t;
}
function Gu(t) {
  return Array.from(t.childNodes);
}
function pt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function ju(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function qu(t, e, n) {
  ~Fu.indexOf(n) ? ju(t, e) : pt(t, e);
}
function tn(t, e) {
  t.value = e ?? "";
}
function $r(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function Nt(t, e) {
  return new t(e);
}
let Ai;
function yi(t) {
  Ai = t;
}
function Qe() {
  if (!Ai)
    throw new Error("Function called outside component initialization");
  return Ai;
}
function ut(t) {
  Qe().$$.on_mount.push(t);
}
function rn(t) {
  Qe().$$.on_destroy.push(t);
}
function ze(t, e) {
  return Qe().$$.context.set(t, e), e;
}
function qe(t) {
  return Qe().$$.context.get(t);
}
function ii(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const jn = [], le = [];
let Jn = [];
const es = [], _o = /* @__PURE__ */ Promise.resolve();
let ts = !1;
function bo() {
  ts || (ts = !0, _o.then(vo));
}
function ys() {
  return bo(), _o;
}
function ns(t) {
  Jn.push(t);
}
function vt(t) {
  es.push(t);
}
const Hr = /* @__PURE__ */ new Set();
let Un = 0;
function vo() {
  if (Un !== 0)
    return;
  const t = Ai;
  do {
    try {
      for (; Un < jn.length; ) {
        const e = jn[Un];
        Un++, yi(e), Wu(e.$$);
      }
    } catch (e) {
      throw jn.length = 0, Un = 0, e;
    }
    for (yi(null), jn.length = 0, Un = 0; le.length; )
      le.pop()();
    for (let e = 0; e < Jn.length; e += 1) {
      const n = Jn[e];
      Hr.has(n) || (Hr.add(n), n());
    }
    Jn.length = 0;
  } while (jn.length);
  for (; es.length; )
    es.pop()();
  ts = !1, Hr.clear(), yi(t);
}
function Wu(t) {
  if (t.fragment !== null) {
    t.update(), Ze(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ns);
  }
}
function zu(t) {
  const e = [], n = [];
  Jn.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Jn = e;
}
const qi = /* @__PURE__ */ new Set();
let Dn;
function we() {
  Dn = {
    r: 0,
    c: [],
    p: Dn
    // parent group
  };
}
function Fe() {
  Dn.r || Ze(Dn.c), Dn = Dn.p;
}
function I(t, e) {
  t && t.i && (qi.delete(t), t.i(e));
}
function T(t, e, n, i) {
  if (t && t.o) {
    if (qi.has(t))
      return;
    qi.add(t), Dn.c.push(() => {
      qi.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Pt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Di(t, e) {
  T(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Mi(t, e, n, i, r, s, a, l, o, u, c, f) {
  let d = t.length, h = s.length, m = d;
  const _ = {};
  for (; m--; )
    _[t[m].key] = m;
  const p = [], v = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = [];
  for (m = h; m--; ) {
    const g = f(r, s, m), O = n(g);
    let B = a.get(O);
    B ? C.push(() => B.p(g, e)) : (B = u(O, g), B.c()), v.set(O, p[m] = B), O in _ && b.set(O, Math.abs(m - _[O]));
  }
  const A = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
  function M(g) {
    I(g, 1), g.m(l, c), a.set(g.key, g), c = g.first, h--;
  }
  for (; d && h; ) {
    const g = p[h - 1], O = t[d - 1], B = g.key, y = O.key;
    g === O ? (c = g.first, d--, h--) : v.has(y) ? !a.has(B) || A.has(B) ? M(g) : R.has(y) ? d-- : b.get(B) > b.get(y) ? (R.add(B), M(g)) : (A.add(y), d--) : (o(O, a), d--);
  }
  for (; d--; ) {
    const g = t[d];
    v.has(g.key) || o(g, a);
  }
  for (; h; )
    M(p[h - 1]);
  return Ze(C), p;
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
function It(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function te(t) {
  t && t.c();
}
function x(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), ns(() => {
    const s = t.$$.on_mount.map(ho).filter(ge);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Ze(s), t.$$.on_mount = [];
  }), r.forEach(ns);
}
function $(t, e) {
  const n = t.$$;
  n.fragment !== null && (zu(n.after_update), Ze(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ku(t, e) {
  t.$$.dirty[0] === -1 && (jn.push(t), bo(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ee(t, e, n, i, r, s, a = null, l = [-1]) {
  const o = Ai;
  yi(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: $e,
    not_equal: r,
    bound: Us(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Us(),
    dirty: l,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return u.ctx && r(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && Ku(t, f)), d;
  }) : [], u.update(), c = !0, Ze(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Gu(e.target);
      u.fragment && u.fragment.l(f), f.forEach(F);
    } else
      u.fragment && u.fragment.c();
    e.intro && I(t.$$.fragment), x(t, e.target, e.anchor), vo();
  }
  yi(o);
}
class ye {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Pr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Pr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $(this, 1), this.$destroy = $e;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!ge(n))
      return $e;
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
    this.$$set && !wu(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Xu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Xu);
const Io = "archive-explorer", Eo = "0.0.1", Yu = "Search", Zu = "Filter Types", Qu = "Add Filter", Ju = "No resources found.", xu = "Loading...", $u = {
  search: Yu,
  filter_types: Zu,
  add_filter: Qu,
  no_resources_found: Ju,
  loading: xu
}, ec = "Suche", tc = "Filtertypen", nc = "Filter hinzufügen", ic = "Keine Ressourcen gefunden.", rc = "Loading...", sc = {
  search: ec,
  filter_types: tc,
  add_filter: nc,
  no_resources_found: ic,
  loading: rc
}, Bn = [];
function lc(t, e) {
  return {
    subscribe: dt(t, e).subscribe
  };
}
function dt(t, e = $e) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(l) {
    if (_e(t, l) && (t = l, n)) {
      const o = !Bn.length;
      for (const u of i)
        u[1](), Bn.push(u, t);
      if (o) {
        for (let u = 0; u < Bn.length; u += 2)
          Bn[u][0](Bn[u + 1]);
        Bn.length = 0;
      }
    }
  }
  function s(l) {
    r(l(t));
  }
  function a(l, o = $e) {
    const u = [l, o];
    return i.add(u), i.size === 1 && (n = e(r, s) || $e), l(t), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: a };
}
function ui(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return lc(n, (a, l) => {
    let o = !1;
    const u = [];
    let c = 0, f = $e;
    const d = () => {
      if (c)
        return;
      f();
      const m = e(i ? u[0] : u, a, l);
      s ? a(m) : f = ge(m) ? m : $e;
    }, h = r.map(
      (m, _) => bs(
        m,
        (p) => {
          u[_] = p, c &= ~(1 << _), o && d();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return o = !0, d(), function() {
      Ze(h), f(), o = !1;
    };
  });
}
function ac(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var oc = function(e) {
  return uc(e) && !cc(e);
};
function uc(t) {
  return !!t && typeof t == "object";
}
function cc(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || hc(t);
}
var fc = typeof Symbol == "function" && Symbol.for, dc = fc ? Symbol.for("react.element") : 60103;
function hc(t) {
  return t.$$typeof === dc;
}
function mc(t) {
  return Array.isArray(t) ? [] : {};
}
function Ci(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? ri(mc(t), t, e) : t;
}
function pc(t, e, n) {
  return t.concat(e).map(function(i) {
    return Ci(i, n);
  });
}
function gc(t, e) {
  if (!e.customMerge)
    return ri;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : ri;
}
function _c(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Bs(t) {
  return Object.keys(t).concat(_c(t));
}
function yo(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function bc(t, e) {
  return yo(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function vc(t, e, n) {
  var i = {};
  return n.isMergeableObject(t) && Bs(t).forEach(function(r) {
    i[r] = Ci(t[r], n);
  }), Bs(e).forEach(function(r) {
    bc(t, r) || (yo(t, r) && n.isMergeableObject(e[r]) ? i[r] = gc(r, n)(t[r], e[r], n) : i[r] = Ci(e[r], n));
  }), i;
}
function ri(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || pc, n.isMergeableObject = n.isMergeableObject || oc, n.cloneUnlessOtherwiseSpecified = Ci;
  var i = Array.isArray(e), r = Array.isArray(t), s = i === r;
  return s ? i ? n.arrayMerge(t, e, n) : vc(t, e, n) : Ci(e, n);
}
ri.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(i, r) {
    return ri(i, r, n);
  }, {});
};
var Ic = ri, Ec = Ic;
const yc = /* @__PURE__ */ ac(Ec);
var is = function(t, e) {
  return is = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, is(t, e);
};
function st(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  is(t, e);
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
function Ac(t, e) {
  var n = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++)
      e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
  return n;
}
function As(t, e, n, i) {
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
function Cs(t, e) {
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
function Tt(t) {
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
function In(t, e) {
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
function en(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = e.length, s; i < r; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function xn(t) {
  return this instanceof xn ? (this.v = t, this) : new xn(t);
}
function Cc(t, e, n) {
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
    i[h] && (r[h] = function(_) {
      return new Promise(function(p, v) {
        s.push([h, _, p, v]) > 1 || o(h, _);
      });
    }, m && (r[h] = m(r[h])));
  }
  function o(h, m) {
    try {
      u(i[h](m));
    } catch (_) {
      d(s[0][3], _);
    }
  }
  function u(h) {
    h.value instanceof xn ? Promise.resolve(h.value.v).then(c, f) : d(s[0][2], h);
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
function Sc(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Tt == "function" ? Tt(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
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
function wr(t, e) {
  var n = e && e.cache ? e.cache : kc, i = e && e.serializer ? e.serializer : Dc, r = e && e.strategy ? e.strategy : Oc;
  return r(t, {
    cache: n,
    serializer: i
  });
}
function Tc(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Lc(t, e, n, i) {
  var r = Tc(i) ? i : n(i), s = e.get(r);
  return typeof s > "u" && (s = t.call(this, i), e.set(r, s)), s;
}
function Ao(t, e, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), s = e.get(r);
  return typeof s > "u" && (s = t.apply(this, i), e.set(r, s)), s;
}
function Co(t, e, n, i, r) {
  return n.bind(e, t, i, r);
}
function Oc(t, e) {
  var n = t.length === 1 ? Lc : Ao;
  return Co(t, this, n, e.cache.create(), e.serializer);
}
function Rc(t, e) {
  return Co(t, this, Ao, e.cache.create(), e.serializer);
}
var Dc = function() {
  return JSON.stringify(arguments);
}, Mc = (
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
), kc = {
  create: function() {
    return new Mc();
  }
}, Fr = {
  variadic: Rc
}, tt;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(tt || (tt = {}));
var mt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(mt || (mt = {}));
var si;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(si || (si = {}));
function Vs(t) {
  return t.type === mt.literal;
}
function Nc(t) {
  return t.type === mt.argument;
}
function So(t) {
  return t.type === mt.number;
}
function To(t) {
  return t.type === mt.date;
}
function Lo(t) {
  return t.type === mt.time;
}
function Oo(t) {
  return t.type === mt.select;
}
function Ro(t) {
  return t.type === mt.plural;
}
function Pc(t) {
  return t.type === mt.pound;
}
function Do(t) {
  return t.type === mt.tag;
}
function Mo(t) {
  return !!(t && typeof t == "object" && t.type === si.number);
}
function rs(t) {
  return !!(t && typeof t == "object" && t.type === si.dateTime);
}
var ko = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Hc = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function wc(t) {
  var e = {};
  return t.replace(Hc, function(n) {
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
var Fc = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Uc(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Fc).filter(function(d) {
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
function Bc(t) {
  return t.replace(/^(.*?)-/, "");
}
var Gs = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, No = /^(@+)?(\+|#+)?[rs]?$/g, Vc = /(\*)(0+)|(#+)(0+)|(0+)/g, Po = /^(0+)$/;
function js(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(No, function(n, i, r) {
    return typeof r != "string" ? (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length) : r === "+" ? e.minimumSignificantDigits = i.length : i[0] === "#" ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), e;
}
function Ho(t) {
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
function Gc(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Po.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function qs(t) {
  var e = {}, n = Ho(t);
  return n || e;
}
function jc(t) {
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
        e.style = "unit", e.unit = Bc(r.options[0]);
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
          return ce(ce({}, o), qs(u));
        }, {}));
        continue;
      case "engineering":
        e = ce(ce(ce({}, e), { notation: "engineering" }), r.options.reduce(function(o, u) {
          return ce(ce({}, o), qs(u));
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
        r.options[0].replace(Vc, function(o, u, c, f, d, h) {
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
    if (Po.test(r.stem)) {
      e.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (Gs.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(Gs, function(o, u, c, f, d, h) {
        return c === "*" ? e.minimumFractionDigits = u.length : f && f[0] === "#" ? e.maximumFractionDigits = f.length : d && h ? (e.minimumFractionDigits = d.length, e.maximumFractionDigits = d.length + h.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var s = r.options[0];
      s === "w" ? e = ce(ce({}, e), { trailingZeroDisplay: "stripIfInteger" }) : s && (e = ce(ce({}, e), js(s)));
      continue;
    }
    if (No.test(r.stem)) {
      e = ce(ce({}, e), js(r.stem));
      continue;
    }
    var a = Ho(r.stem);
    a && (e = ce(ce({}, e), a));
    var l = Gc(r.stem);
    l && (e = ce(ce({}, e), l));
  }
  return e;
}
var Fi = {
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
function qc(t, e) {
  for (var n = "", i = 0; i < t.length; i++) {
    var r = t.charAt(i);
    if (r === "j") {
      for (var s = 0; i + 1 < t.length && t.charAt(i + 1) === r; )
        s++, i++;
      var a = 1 + (s & 1), l = s < 2 ? 1 : 3 + (s >> 1), o = "a", u = Wc(e);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        n += o;
      for (; a-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function Wc(t) {
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
  var r = Fi[i || ""] || Fi[n || ""] || Fi["".concat(n, "-001")] || Fi["001"];
  return r[0];
}
var Ur, zc = new RegExp("^".concat(ko.source, "*")), Kc = new RegExp("".concat(ko.source, "*$"));
function it(t, e) {
  return { start: t, end: e };
}
var Xc = !!String.prototype.startsWith && "_a".startsWith("a", 1), Yc = !!String.fromCodePoint, Zc = !!Object.fromEntries, Qc = !!String.prototype.codePointAt, Jc = !!String.prototype.trimStart, xc = !!String.prototype.trimEnd, $c = !!Number.isSafeInteger, ef = $c ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, ss = !0;
try {
  var tf = Fo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ss = ((Ur = tf.exec("a")) === null || Ur === void 0 ? void 0 : Ur[0]) === "a";
} catch {
  ss = !1;
}
var Ws = Xc ? (
  // Native
  function(e, n, i) {
    return e.startsWith(n, i);
  }
) : (
  // For IE11
  function(e, n, i) {
    return e.slice(i, i + n.length) === n;
  }
), ls = Yc ? String.fromCodePoint : (
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
), zs = (
  // native
  Zc ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, i = 0, r = e; i < r.length; i++) {
        var s = r[i], a = s[0], l = s[1];
        n[a] = l;
      }
      return n;
    }
  )
), wo = Qc ? (
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
), nf = Jc ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(zc, "");
  }
), rf = xc ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Kc, "");
  }
);
function Fo(t, e) {
  return new RegExp(t, e);
}
var as;
if (ss) {
  var Ks = Fo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  as = function(e, n) {
    var i;
    Ks.lastIndex = n;
    var r = Ks.exec(e);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  as = function(e, n) {
    for (var i = []; ; ) {
      var r = wo(e, n);
      if (r === void 0 || Uo(r) || of(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return ls.apply(void 0, i);
  };
var sf = (
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
              location: it(l, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(tt.UNMATCHED_CLOSING_TAG, it(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && os(this.peek() || 0)) {
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
            location: it(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(e + 1, n, !0);
        if (s.err)
          return s;
        var a = s.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !os(this.char()))
            return this.error(tt.INVALID_TAG, it(l, this.clonePosition()));
          var o = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(tt.UNMATCHED_CLOSING_TAG, it(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: mt.tag,
              value: r,
              children: a,
              location: it(i, this.clonePosition())
            },
            err: null
          } : this.error(tt.INVALID_TAG, it(l, this.clonePosition())));
        } else
          return this.error(tt.UNCLOSED_TAG, it(i, this.clonePosition()));
      } else
        return this.error(tt.INVALID_TAG, it(i, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && af(this.char()); )
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
      var o = it(i, this.clonePosition());
      return {
        val: { type: mt.literal, value: r, location: o },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !lf(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return ls.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), ls(i));
    }, t.prototype.parseArgument = function(e, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, it(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(tt.EMPTY_ARGUMENT, it(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(tt.MALFORMED_ARGUMENT, it(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, it(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: mt.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: it(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, it(i, this.clonePosition())) : this.parseArgumentOptions(e, n, r, i);
        default:
          return this.error(tt.MALFORMED_ARGUMENT, it(i, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), i = as(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var s = this.clonePosition(), a = it(e, s);
      return { value: i, location: a };
    }, t.prototype.parseArgumentOptions = function(e, n, i, r) {
      var s, a = this.clonePosition(), l = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (l) {
        case "":
          return this.error(tt.EXPECT_ARGUMENT_TYPE, it(a, o));
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
            var d = rf(f.val);
            if (d.length === 0)
              return this.error(tt.EXPECT_ARGUMENT_STYLE, it(this.clonePosition(), this.clonePosition()));
            var h = it(c, this.clonePosition());
            u = { style: d, styleLocation: h };
          }
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var _ = it(r, this.clonePosition());
          if (u && Ws(u == null ? void 0 : u.style, "::", 0)) {
            var p = nf(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(p, u.styleLocation);
              return f.err ? f : {
                val: { type: mt.number, value: i, location: _, style: f.val },
                err: null
              };
            } else {
              if (p.length === 0)
                return this.error(tt.EXPECT_DATE_TIME_SKELETON, _);
              var v = p;
              this.locale && (v = qc(p, this.locale));
              var d = {
                type: si.dateTime,
                pattern: v,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? wc(v) : {}
              }, b = l === "date" ? mt.date : mt.time;
              return {
                val: { type: b, value: i, location: _, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? mt.number : l === "date" ? mt.date : mt.time,
              value: i,
              location: _,
              style: (s = u == null ? void 0 : u.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var C = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(tt.EXPECT_SELECT_ARGUMENT_OPTIONS, it(C, ce({}, C)));
          this.bumpSpace();
          var A = this.parseIdentifierIfPossible(), R = 0;
          if (l !== "select" && A.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, it(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), A = this.parseIdentifierIfPossible(), R = f.val;
          }
          var M = this.tryParsePluralOrSelectOptions(e, l, n, A);
          if (M.err)
            return M;
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var g = it(r, this.clonePosition());
          return l === "select" ? {
            val: {
              type: mt.select,
              value: i,
              options: zs(M.val),
              location: g
            },
            err: null
          } : {
            val: {
              type: mt.plural,
              value: i,
              options: zs(M.val),
              offset: R,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: g
            },
            err: null
          };
        }
        default:
          return this.error(tt.INVALID_ARGUMENT_TYPE, it(a, o));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(tt.EXPECT_ARGUMENT_CLOSING_BRACE, it(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(tt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, it(r, this.clonePosition()));
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
        i = Uc(e);
      } catch {
        return this.error(tt.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: si.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? jc(i) : {}
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
            c = it(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (o.has(u))
          return this.error(n === "select" ? tt.DUPLICATE_SELECT_ARGUMENT_SELECTOR : tt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (a = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? tt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : tt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, it(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(e + 1, n, i);
        if (m.err)
          return m;
        var _ = this.tryParseArgumentClose(h);
        if (_.err)
          return _;
        l.push([
          u,
          {
            value: m.val,
            location: it(h, this.clonePosition())
          }
        ]), o.add(u), this.bumpSpace(), s = this.parseIdentifierIfPossible(), u = s.value, c = s.location;
      }
      return l.length === 0 ? this.error(n === "select" ? tt.EXPECT_SELECT_ARGUMENT_SELECTOR : tt.EXPECT_PLURAL_ARGUMENT_SELECTOR, it(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(tt.MISSING_OTHER_CLAUSE, it(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
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
      var o = it(r, this.clonePosition());
      return s ? (a *= i, ef(a) ? { val: a, err: null } : this.error(n, o)) : this.error(e, o);
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
      var n = wo(this.message, e);
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
      if (Ws(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Uo(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return i ?? null;
    }, t;
  }()
);
function os(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function lf(t) {
  return os(t) || t === 47;
}
function af(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Uo(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function of(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function us(t) {
  t.forEach(function(e) {
    if (delete e.location, Oo(e) || Ro(e))
      for (var n in e.options)
        delete e.options[n].location, us(e.options[n].value);
    else
      So(e) && Mo(e.style) || (To(e) || Lo(e)) && rs(e.style) ? delete e.style.location : Do(e) && us(e.children);
  });
}
function uf(t, e) {
  e === void 0 && (e = {}), e = ce({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new sf(t, e).parse();
  if (n.err) {
    var i = SyntaxError(tt[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || us(n.val), n.val;
}
var li;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(li || (li = {}));
var tr = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, i, r) {
      var s = t.call(this, n) || this;
      return s.code = i, s.originalMessage = r, s;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Xs = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, i, r, s) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), li.INVALID_VALUE, s) || this;
    }
    return e;
  }(tr)
), cf = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, i, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), li.INVALID_VALUE, r) || this;
    }
    return e;
  }(tr)
), ff = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), li.MISSING_VALUE, i) || this;
    }
    return e;
  }(tr)
), wt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(wt || (wt = {}));
function df(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== wt.literal || n.type !== wt.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function hf(t) {
  return typeof t == "function";
}
function Wi(t, e, n, i, r, s, a) {
  if (t.length === 1 && Vs(t[0]))
    return [
      {
        type: wt.literal,
        value: t[0].value
      }
    ];
  for (var l = [], o = 0, u = t; o < u.length; o++) {
    var c = u[o];
    if (Vs(c)) {
      l.push({
        type: wt.literal,
        value: c.value
      });
      continue;
    }
    if (Pc(c)) {
      typeof s == "number" && l.push({
        type: wt.literal,
        value: n.getNumberFormat(e).format(s)
      });
      continue;
    }
    var f = c.value;
    if (!(r && f in r))
      throw new ff(f, a);
    var d = r[f];
    if (Nc(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), l.push({
        type: typeof d == "string" ? wt.literal : wt.object,
        value: d
      });
      continue;
    }
    if (To(c)) {
      var h = typeof c.style == "string" ? i.date[c.style] : rs(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: wt.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if (Lo(c)) {
      var h = typeof c.style == "string" ? i.time[c.style] : rs(c.style) ? c.style.parsedOptions : i.time.medium;
      l.push({
        type: wt.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if (So(c)) {
      var h = typeof c.style == "string" ? i.number[c.style] : Mo(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (d = d * (h.scale || 1)), l.push({
        type: wt.literal,
        value: n.getNumberFormat(e, h).format(d)
      });
      continue;
    }
    if (Do(c)) {
      var m = c.children, _ = c.value, p = r[_];
      if (!hf(p))
        throw new cf(_, "function", a);
      var v = Wi(m, e, n, i, r, s), b = p(v.map(function(R) {
        return R.value;
      }));
      Array.isArray(b) || (b = [b]), l.push.apply(l, b.map(function(R) {
        return {
          type: typeof R == "string" ? wt.literal : wt.object,
          value: R
        };
      }));
    }
    if (Oo(c)) {
      var C = c.options[d] || c.options.other;
      if (!C)
        throw new Xs(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Wi(C.value, e, n, i, r));
      continue;
    }
    if (Ro(c)) {
      var C = c.options["=".concat(d)];
      if (!C) {
        if (!Intl.PluralRules)
          throw new tr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, li.MISSING_INTL_API, a);
        var A = n.getPluralRules(e, { type: c.pluralType }).select(d - (c.offset || 0));
        C = c.options[A] || c.options.other;
      }
      if (!C)
        throw new Xs(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Wi(C.value, e, n, i, r, d - (c.offset || 0)));
      continue;
    }
  }
  return df(l);
}
function mf(t, e) {
  return e ? ce(ce(ce({}, t || {}), e || {}), Object.keys(t).reduce(function(n, i) {
    return n[i] = ce(ce({}, t[i]), e[i] || {}), n;
  }, {})) : t;
}
function pf(t, e) {
  return e ? Object.keys(t).reduce(function(n, i) {
    return n[i] = mf(t[i], e[i]), n;
  }, ce({}, t)) : t;
}
function Br(t) {
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
function gf(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: wr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, en([void 0], n, !1)))();
    }, {
      cache: Br(t.number),
      strategy: Fr.variadic
    }),
    getDateTimeFormat: wr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, en([void 0], n, !1)))();
    }, {
      cache: Br(t.dateTime),
      strategy: Fr.variadic
    }),
    getPluralRules: wr(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, en([void 0], n, !1)))();
    }, {
      cache: Br(t.pluralRules),
      strategy: Fr.variadic
    })
  };
}
var Bo = (
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
          return !f.length || d.type !== wt.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(o) {
        return Wi(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
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
        var l = Ac(a, ["formatters"]);
        this.ast = t.__parse(e, ce(ce({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = pf(t.formats, i), this.formatters = r && r.formatters || gf(this.formatterCache);
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
    }, t.__parse = uf, t.formats = {
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
function _f(t, e) {
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
const bn = {}, bf = (t, e, n) => n && (e in bn || (bn[e] = {}), t in bn[e] || (bn[e][t] = n), n), Vo = (t, e) => {
  if (e == null)
    return;
  if (e in bn && t in bn[e])
    return bn[e][t];
  const n = Ni(e);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], s = If(r, t);
    if (s)
      return bf(t, e, s);
  }
};
let Ss;
const ki = dt({});
function vf(t) {
  return Ss[t] || null;
}
function Go(t) {
  return t in Ss;
}
function If(t, e) {
  if (!Go(t))
    return null;
  const n = vf(t);
  return _f(n, e);
}
function Ef(t) {
  if (t == null)
    return;
  const e = Ni(t);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (Go(i))
      return i;
  }
}
function jo(t, ...e) {
  delete bn[t], ki.update((n) => (n[t] = yc.all([n[t] || {}, ...e]), n));
}
ui(
  [ki],
  ([t]) => Object.keys(t)
);
ki.subscribe((t) => Ss = t);
const zi = {};
function yf(t, e) {
  zi[t].delete(e), zi[t].size === 0 && delete zi[t];
}
function qo(t) {
  return zi[t];
}
function Af(t) {
  return Ni(t).map((e) => {
    const n = qo(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Yi(t) {
  return t == null ? !1 : Ni(t).some(
    (e) => {
      var n;
      return (n = qo(e)) == null ? void 0 : n.size;
    }
  );
}
function Cf(t, e) {
  return Promise.all(
    e.map((i) => (yf(t, i), i().then((r) => r.default || r)))
  ).then((i) => jo(t, ...i));
}
const pi = {};
function Wo(t) {
  if (!Yi(t))
    return t in pi ? pi[t] : Promise.resolve();
  const e = Af(t);
  return pi[t] = Promise.all(
    e.map(
      ([n, i]) => Cf(n, i)
    )
  ).then(() => {
    if (Yi(t))
      return Wo(t);
    delete pi[t];
  }), pi[t];
}
var Ys = Object.getOwnPropertySymbols, Sf = Object.prototype.hasOwnProperty, Tf = Object.prototype.propertyIsEnumerable, Lf = (t, e) => {
  var n = {};
  for (var i in t)
    Sf.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Ys)
    for (var i of Ys(t))
      e.indexOf(i) < 0 && Tf.call(t, i) && (n[i] = t[i]);
  return n;
};
const Of = {
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
function Rf({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ni(
      t
    ).join('", "')}".${Yi(An()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Df = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Of,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, vi = Df;
function ai() {
  return vi;
}
function Mf(t) {
  const e = t, { formats: n } = e, i = Lf(e, ["formats"]);
  let r = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Bo.resolveLocale(t.initialLocale) && (r = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return i.warnOnMissingMessages && (delete i.warnOnMissingMessages, i.handleMissingMessage == null ? i.handleMissingMessage = Rf : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(vi, i, { initialLocale: r }), n && ("number" in n && Object.assign(vi.formats.number, n.number), "date" in n && Object.assign(vi.formats.date, n.date), "time" in n && Object.assign(vi.formats.time, n.time)), Nn.set(r);
}
const Vr = dt(!1);
var kf = Object.defineProperty, Nf = Object.defineProperties, Pf = Object.getOwnPropertyDescriptors, Zs = Object.getOwnPropertySymbols, Hf = Object.prototype.hasOwnProperty, wf = Object.prototype.propertyIsEnumerable, Qs = (t, e, n) => e in t ? kf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Ff = (t, e) => {
  for (var n in e || (e = {}))
    Hf.call(e, n) && Qs(t, n, e[n]);
  if (Zs)
    for (var n of Zs(e))
      wf.call(e, n) && Qs(t, n, e[n]);
  return t;
}, Uf = (t, e) => Nf(t, Pf(e));
let cs;
const Zi = dt(null);
function Js(t) {
  return t.split("-").map((e, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function Ni(t, e = ai().fallbackLocale) {
  const n = Js(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Js(e)])] : n;
}
function An() {
  return cs ?? void 0;
}
Zi.subscribe((t) => {
  cs = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Bf = (t) => {
  if (t && Ef(t) && Yi(t)) {
    const { loadingDelay: e } = ai();
    let n;
    return typeof window < "u" && An() != null && e ? n = window.setTimeout(
      () => Vr.set(!0),
      e
    ) : Vr.set(!0), Wo(t).then(() => {
      Zi.set(t);
    }).finally(() => {
      clearTimeout(n), Vr.set(!1);
    });
  }
  return Zi.set(t);
}, Nn = Uf(Ff({}, Zi), {
  set: Bf
}), Vf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], nr = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in e ? e[r] : e[r] = t(i);
  };
};
var Gf = Object.defineProperty, Qi = Object.getOwnPropertySymbols, zo = Object.prototype.hasOwnProperty, Ko = Object.prototype.propertyIsEnumerable, xs = (t, e, n) => e in t ? Gf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Ts = (t, e) => {
  for (var n in e || (e = {}))
    zo.call(e, n) && xs(t, n, e[n]);
  if (Qi)
    for (var n of Qi(e))
      Ko.call(e, n) && xs(t, n, e[n]);
  return t;
}, ci = (t, e) => {
  var n = {};
  for (var i in t)
    zo.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Qi)
    for (var i of Qi(t))
      e.indexOf(i) < 0 && Ko.call(t, i) && (n[i] = t[i]);
  return n;
};
const Si = (t, e) => {
  const { formats: n } = ai();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, jf = nr(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = ci(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = Si("number", i)), new Intl.NumberFormat(n, r);
  }
), qf = nr(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = ci(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = Si("date", i) : Object.keys(r).length === 0 && (r = Si("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), Wf = nr(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = ci(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = Si("time", i) : Object.keys(r).length === 0 && (r = Si("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), zf = (t = {}) => {
  var e = t, {
    locale: n = An()
  } = e, i = ci(e, [
    "locale"
  ]);
  return jf(Ts({ locale: n }, i));
}, Kf = (t = {}) => {
  var e = t, {
    locale: n = An()
  } = e, i = ci(e, [
    "locale"
  ]);
  return qf(Ts({ locale: n }, i));
}, Xf = (t = {}) => {
  var e = t, {
    locale: n = An()
  } = e, i = ci(e, [
    "locale"
  ]);
  return Wf(Ts({ locale: n }, i));
}, Yf = nr(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = An()) => new Bo(t, e, ai().formats, {
    ignoreTag: ai().ignoreTag
  })
), Zf = (t, e = {}) => {
  var n, i, r, s;
  let a = e;
  typeof t == "object" && (a = t, t = a.id);
  const {
    values: l,
    locale: o = An(),
    default: u
  } = a;
  if (o == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = Vo(t, o);
  if (!c)
    c = (s = (r = (i = (n = ai()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: o, id: t, defaultValue: u })) != null ? r : u) != null ? s : t;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!l)
    return c;
  let f = c;
  try {
    f = Yf(c, o).format(l);
  } catch (d) {
    d instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      d.message
    );
  }
  return f;
}, Qf = (t, e) => Xf(e).format(t), Jf = (t, e) => Kf(e).format(t), xf = (t, e) => zf(e).format(t), $f = (t, e = An()) => Vo(t, e), ed = ui([Nn, ki], () => Zf);
ui([Nn], () => Qf);
ui([Nn], () => Jf);
ui([Nn], () => xf);
ui([Nn, ki], () => $f);
function td(t, e) {
  Object.entries(t).forEach(([s, a]) => {
    jo(s, a);
  });
  const n = localStorage.getItem("language"), i = "en", r = n ?? Vf();
  console.log("Initial: Setting the language to", r), Mf({
    fallbackLocale: i,
    initialLocale: r
  }), window.addEventListener("oscd-language-changed", (s) => {
    const a = s;
    if (!a.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", a.detail.language), Nn.set(a.detail.language);
  });
}
function nd(t, e = {}) {
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
function nn(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const s = n[r], a = s.indexOf("$");
    a !== -1 && e.indexOf(s.substring(0, a + 1)) !== -1 || e.indexOf(s) === -1 && (i[s] = t[s]);
  }
  return i;
}
const $s = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, id = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function rt(t) {
  let e, n = [];
  t.$on = (r, s) => {
    let a = r, l = () => {
    };
    return e ? l = e(a, s) : n.push([a, s]), a.match($s) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
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
      const d = u.match($s), h = u.match(id), m = d || h;
      if (u.match(/^SMUI:\w+:/)) {
        const v = u.split(":");
        let b = "";
        for (let C = 0; C < v.length; C++)
          b += C === v.length - 1 ? ":" + v[C] : v[C].split("-").map((A) => A.slice(0, 1).toUpperCase() + A.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${b.split("$")[0]}.`), u = b;
      }
      if (m) {
        const v = u.split(d ? ":" : "$");
        u = v[0];
        const b = v.slice(1).reduce((C, A) => (C[A] = !0, C), {});
        b.passive && (f = f || {}, f.passive = !0), b.nonpassive && (f = f || {}, f.passive = !1), b.capture && (f = f || {}, f.capture = !0), b.once && (f = f || {}, f.once = !0), b.preventDefault && (c = rd(c)), b.stopPropagation && (c = sd(c)), b.stopImmediatePropagation && (c = ld(c)), b.self && (c = ad(r, c)), b.trusted && (c = od(c));
      }
      const _ = el(r, u, c, f), p = () => {
        _();
        const v = s.indexOf(p);
        v > -1 && s.splice(v, 1);
      };
      return s.push(p), u in a || (a[u] = el(r, u, i)), p;
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
function el(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function rd(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function sd(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function ld(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function ad(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function od(t) {
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
var Ui;
function Xo(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = Ui;
  if (typeof Ui == "boolean" && !e)
    return Ui;
  var r = n && typeof n.supports == "function";
  if (!r)
    return !1;
  var s = n.supports("--css-vars", "yes"), a = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = s || a, e || (Ui = i), i;
}
function ud(t, e, n) {
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
var Lt = (
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
var ir = (
  /** @class */
  function() {
    function t(e, n) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, en([], In(i))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Lt({}));
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
function Ii(t) {
  return t === void 0 && (t = window), cd(t) ? { passive: !0 } : !1;
}
function cd(t) {
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
const Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ii
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
function fd(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Ls(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Ls(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function dd(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: fd,
  estimateScrollWidth: dd,
  matches: Ls
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
var hd = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, md = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, tl = {
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
var nl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], il = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Bi = [], sr = (
  /** @class */
  function(t) {
    st(e, t);
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
        return hd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return md;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return tl;
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
          for (var s = Tt(nl), a = s.next(); !a.done; a = s.next()) {
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
          for (var s = Tt(il), a = s.next(); !a.done; a = s.next()) {
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
        for (var r = Tt(nl), s = r.next(); !s.done; s = r.next()) {
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
        for (var r = Tt(il), s = r.next(); !s.done; s = r.next()) {
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
            var l = n !== void 0 && Bi.length > 0 && Bi.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Bi.push(n.target), this.registerDeactivationHandlers(n)), r.wasElementMadeActive = this.checkElementMadeActive(n), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Bi = [], !r.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(n), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
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
      r ? s = ud(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      }, tl.FG_DEACTIVATION_MS));
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
  }(Lt)
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
var Ji = (
  /** @class */
  function(t) {
    st(e, t);
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
          return Xo(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return n.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, Ii());
        },
        deregisterInteractionHandler: function(i, r) {
          return n.root.removeEventListener(i, r, Ii());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return Ls(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, Ii());
        },
        registerInteractionHandler: function(i, r) {
          return n.root.addEventListener(i, r, Ii());
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
      return new sr(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(ir)
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
var Be = {
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
}, Ft = /* @__PURE__ */ new Set();
Ft.add(Be.BACKSPACE);
Ft.add(Be.ENTER);
Ft.add(Be.SPACEBAR);
Ft.add(Be.PAGE_UP);
Ft.add(Be.PAGE_DOWN);
Ft.add(Be.END);
Ft.add(Be.HOME);
Ft.add(Be.ARROW_LEFT);
Ft.add(Be.ARROW_UP);
Ft.add(Be.ARROW_RIGHT);
Ft.add(Be.ARROW_DOWN);
Ft.add(Be.DELETE);
Ft.add(Be.ESCAPE);
Ft.add(Be.TAB);
var Vt = {
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
}, Ut = /* @__PURE__ */ new Map();
Ut.set(Vt.BACKSPACE, Be.BACKSPACE);
Ut.set(Vt.ENTER, Be.ENTER);
Ut.set(Vt.SPACEBAR, Be.SPACEBAR);
Ut.set(Vt.PAGE_UP, Be.PAGE_UP);
Ut.set(Vt.PAGE_DOWN, Be.PAGE_DOWN);
Ut.set(Vt.END, Be.END);
Ut.set(Vt.HOME, Be.HOME);
Ut.set(Vt.ARROW_LEFT, Be.ARROW_LEFT);
Ut.set(Vt.ARROW_UP, Be.ARROW_UP);
Ut.set(Vt.ARROW_RIGHT, Be.ARROW_RIGHT);
Ut.set(Vt.ARROW_DOWN, Be.ARROW_DOWN);
Ut.set(Vt.DELETE, Be.DELETE);
Ut.set(Vt.ESCAPE, Be.ESCAPE);
Ut.set(Vt.TAB, Be.TAB);
var dn = /* @__PURE__ */ new Set();
dn.add(Be.PAGE_UP);
dn.add(Be.PAGE_DOWN);
dn.add(Be.END);
dn.add(Be.HOME);
dn.add(Be.ARROW_LEFT);
dn.add(Be.ARROW_UP);
dn.add(Be.ARROW_RIGHT);
dn.add(Be.ARROW_DOWN);
function bt(t) {
  var e = t.key;
  if (Ft.has(e))
    return e;
  var n = Ut.get(t.keyCode);
  return n || Be.UNKNOWN;
}
function pd(t) {
  return dn.has(bt(t));
}
const { applyPassive: Vi } = Yo, { matches: gd } = rr;
function kt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: r = !1, color: s, active: a, rippleElement: l, eventTarget: o, activeTarget: u, addClass: c = (m) => t.classList.add(m), removeClass: f = (m) => t.classList.remove(m), addStyle: d = (m, _) => t.style.setProperty(m, _), initPromise: h = Promise.resolve() } = {}) {
  let m, _ = qe("SMUI:addLayoutListener"), p, v = a, b = o, C = u;
  function A() {
    n ? (c("mdc-ripple-surface"), s === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : s === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), m && v !== a && (v = a, a ? m.activate() : a === !1 && m.deactivate()), e && !m ? (m = new sr({
      addClass: c,
      browserSupportsCssVars: () => Xo(window),
      computeBoundingRect: () => (l || t).getBoundingClientRect(),
      containsEventTarget: (M) => t.contains(M),
      deregisterDocumentInteractionHandler: (M, g) => document.documentElement.removeEventListener(M, g, Vi()),
      deregisterInteractionHandler: (M, g) => (o || t).removeEventListener(M, g, Vi()),
      deregisterResizeHandler: (M) => window.removeEventListener("resize", M),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? gd(u || t, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (M, g) => document.documentElement.addEventListener(M, g, Vi()),
      registerInteractionHandler: (M, g) => (o || t).addEventListener(M, g, Vi()),
      registerResizeHandler: (M) => window.addEventListener("resize", M),
      removeClass: f,
      updateCssVariable: d
    }), h.then(() => {
      m && (m.init(), m.setUnbounded(i));
    })) : m && !e && h.then(() => {
      m && (m.destroy(), m = void 0);
    }), m && (b !== o || C !== u) && (b = o, C = u, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  A(), _ && (p = _(R));
  function R() {
    m && m.layout();
  }
  return {
    update(M) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (g) => t.classList.add(g), removeClass: (g) => t.classList.remove(g), addStyle: (g, O) => t.style.setProperty(g, O), initPromise: Promise.resolve() }, M)), A();
    },
    destroy() {
      m && (m.destroy(), m = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function _d(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = Se(
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
      4096) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? Te(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function bd(t) {
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
      $$slots: { default: [_d] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = K(u, de(r, [
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
  return s && (e = Nt(s, a(t)), t[11](e)), {
    c() {
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(l, o)), l[11](e), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[11](null), e && $(e, l);
    }
  };
}
function vd(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: f = Ht } = e, { tag: d = f === Ht ? "span" : void 0 } = e;
  const h = qe("SMUI:label:context"), m = qe("SMUI:label:tabindex");
  function _() {
    return c.getElement();
  }
  function p(v) {
    le[v ? "unshift" : "push"](() => {
      c = v, n(4, c);
    });
  }
  return t.$$set = (v) => {
    e = K(K({}, e), nt(v)), n(8, r = he(e, i)), "use" in v && n(0, o = v.use), "class" in v && n(1, u = v.class), "component" in v && n(2, f = v.component), "tag" in v && n(3, d = v.tag), "$$scope" in v && n(12, a = v.$$scope);
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
    _,
    s,
    p,
    a
  ];
}
class Id extends ye {
  constructor(e) {
    super(), Ee(this, e, vd, bd, _e, {
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
function Ed(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Se(
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
      8192) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? Te(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function yd(t) {
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
      $$slots: { default: [Ed] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (u = K(u, de(r, [
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
  return s && (e = Nt(s, a(t)), t[12](e)), {
    c() {
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      8 && s !== (s = /*component*/
      l[3])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(l, o)), l[12](e), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[12](null), e && $(e, l);
    }
  };
}
function Ad(t, e, n) {
  const i = ["use", "class", "on", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { on: c = !1 } = e, f, { component: d = Ht } = e, { tag: h = d === Ht ? "i" : void 0 } = e;
  const m = d === kd, _ = qe("SMUI:icon:context");
  function p() {
    return f.getElement();
  }
  function v(b) {
    le[b ? "unshift" : "push"](() => {
      f = b, n(5, f);
    });
  }
  return t.$$set = (b) => {
    e = K(K({}, e), nt(b)), n(9, r = he(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "on" in b && n(2, c = b.on), "component" in b && n(3, d = b.component), "tag" in b && n(4, h = b.tag), "$$scope" in b && n(13, a = b.$$scope);
  }, [
    o,
    u,
    c,
    d,
    h,
    f,
    l,
    m,
    _,
    r,
    p,
    s,
    v,
    a
  ];
}
class Cd extends ye {
  constructor(e) {
    super(), Ee(this, e, Ad, yd, _e, {
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
function Sd(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i, r = (
    /*tag*/
    t[1] && Gr(t)
  );
  return {
    c() {
      r && r.c(), n = Ke();
    },
    m(s, a) {
      r && r.m(s, a), U(s, n, a), i = !0;
    },
    p(s, a) {
      /*tag*/
      s[1] ? e ? _e(
        e,
        /*tag*/
        s[1]
      ) ? (r.d(1), r = Gr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : r.p(s, a) : (r = Gr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      s[1]);
    },
    i(s) {
      i || (I(r, s), i = !0);
    },
    o(s) {
      T(r, s), i = !1;
    },
    d(s) {
      s && F(n), r && r.d(s);
    }
  };
}
function Td(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i = (
    /*tag*/
    t[1] && jr(t)
  );
  return {
    c() {
      i && i.c(), n = Ke();
    },
    m(r, s) {
      i && i.m(r, s), U(r, n, s);
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? _e(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = jr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : i.p(r, s) : (i = jr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: $e,
    o: $e,
    d(r) {
      r && F(n), i && i.d(r);
    }
  };
}
function Ld(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Se(
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
    u = K(u, o[c]);
  return {
    c() {
      e = ot("svg"), l && l.c(), Ki(e, u);
    },
    m(c, f) {
      U(c, e, f), l && l.m(e, null), t[9](e), i = !0, r || (s = [
        fe(n = xe.call(
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
      128) && Le(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Te(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), Ki(e, u = de(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (I(l, c), i = !0);
    },
    o(c) {
      T(l, c), i = !1;
    },
    d(c) {
      c && F(e), l && l.d(c), t[9](null), r = !1, Ze(s);
    }
  };
}
function Gr(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Se(
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
    u = K(u, o[c]);
  return {
    c() {
      e = ee(
        /*tag*/
        t[1]
      ), l && l.c(), Xi(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(c, f) {
      U(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        fe(n = xe.call(
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
      128) && Le(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Te(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), Xi(
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
      i || (I(l, c), i = !0);
    },
    o(c) {
      T(l, c), i = !1;
    },
    d(c) {
      c && F(e), l && l.d(c), t[11](null), r = !1, Ze(s);
    }
  };
}
function jr(t) {
  let e, n, i, r, s = [
    /*$$restProps*/
    t[5]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = K(a, s[l]);
  return {
    c() {
      e = ee(
        /*tag*/
        t[1]
      ), Xi(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(l, o) {
      U(l, e, o), t[10](e), i || (r = [
        fe(n = xe.call(
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
      Xi(
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
      l && F(e), t[10](null), i = !1, Ze(r);
    }
  };
}
function Od(t) {
  let e, n, i, r;
  const s = [Ld, Td, Sd], a = [];
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
      n.c(), i = Ke();
    },
    m(o, u) {
      a[e].m(o, u), U(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (we(), T(a[c], 1, 1, () => {
        a[c] = null;
      }), Fe(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), I(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (I(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      o && F(i), a[e].d(o);
    }
  };
}
function Rd(t, e, n) {
  let i;
  const r = ["use", "tag", "getElement"];
  let s = he(e, r), { $$slots: a = {}, $$scope: l } = e, { use: o = [] } = e, { tag: u } = e;
  const c = rt(Qe());
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
  function _(p) {
    le[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  return t.$$set = (p) => {
    e = K(K({}, e), nt(p)), n(5, s = he(e, r)), "use" in p && n(0, o = p.use), "tag" in p && n(1, u = p.tag), "$$scope" in p && n(7, l = p.$$scope);
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
    _
  ];
}
class Ht extends ye {
  constructor(e) {
    super(), Ee(this, e, Rd, Od, _e, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Dd(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[6].default
  ), l = Se(
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
    u = K(u, o[c]);
  return {
    c() {
      e = ot("svg"), l && l.c(), Ki(e, u);
    },
    m(c, f) {
      U(c, e, f), l && l.m(e, null), t[7](e), i = !0, r || (s = [
        fe(n = xe.call(
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
      32) && Le(
        l,
        a,
        c,
        /*$$scope*/
        c[5],
        i ? Te(
          a,
          /*$$scope*/
          c[5],
          f,
          null
        ) : Oe(
          /*$$scope*/
          c[5]
        ),
        null
      ), Ki(e, u = de(o, [f & /*$$restProps*/
      8 && /*$$restProps*/
      c[3]])), n && ge(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (I(l, c), i = !0);
    },
    o(c) {
      T(l, c), i = !1;
    },
    d(c) {
      c && F(e), l && l.d(c), t[7](null), r = !1, Ze(s);
    }
  };
}
function Md(t, e, n) {
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
    le[d ? "unshift" : "push"](() => {
      u = d, n(1, u);
    });
  }
  return t.$$set = (d) => {
    e = K(K({}, e), nt(d)), n(3, r = he(e, i)), "use" in d && n(0, l = d.use), "$$scope" in d && n(5, a = d.$$scope);
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
class kd extends ye {
  constructor(e) {
    super(), Ee(this, e, Md, Dd, _e, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Nd(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = Se(
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
      8) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[3],
        e ? Te(
          n,
          /*$$scope*/
          r[3],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Pd(t, e, n) {
  let i, { $$slots: r = {}, $$scope: s } = e, { key: a } = e, { value: l } = e;
  const o = dt(l);
  return lt(t, o, (u) => n(5, i = u)), ze(a, o), rn(() => {
    o.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, a = u.key), "value" in u && n(2, l = u.value), "$$scope" in u && n(3, s = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && Wt(o, i = l, i);
  }, [o, a, l, s, r];
}
class oi extends ye {
  constructor(e) {
    super(), Ee(this, e, Pd, Nd, _e, { key: 1, value: 2 });
  }
}
function rl(t) {
  let e;
  return {
    c() {
      e = ee("div"), N(e, "class", "mdc-button__touch");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function Hd(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[28].default
  ), a = Se(
    s,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let l = (
    /*touch*/
    t[6] && rl()
  );
  return {
    c() {
      e = ee("div"), n = oe(), a && a.c(), l && l.c(), i = Ke(), N(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      U(o, e, u), U(o, n, u), a && a.m(o, u), l && l.m(o, u), U(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && Le(
        a,
        s,
        o,
        /*$$scope*/
        o[30],
        r ? Te(
          s,
          /*$$scope*/
          o[30],
          u,
          null
        ) : Oe(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? l || (l = rl(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (I(a, o), r = !0);
    },
    o(o) {
      T(a, o), r = !1;
    },
    d(o) {
      o && (F(e), F(n), F(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function wd(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[10]
    ) },
    {
      use: [
        [
          kt,
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
      ).map(qr).concat([
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
      $$slots: { default: [Hd] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = K(u, de(r, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        l[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            kt,
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
        ).map(qr).concat([
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
  return s && (e = Nt(s, a(t)), t[29](e), e.$on(
    "click",
    /*handleClick*/
    t[22]
  )), {
    c() {
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      512 && s !== (s = /*component*/
      l[9])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(l, o)), l[29](e), e.$on(
          "click",
          /*handleClick*/
          l[22]
        ), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
                kt,
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
            ).map(qr).concat([
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[29](null), e && $(e, l);
    }
  };
}
const qr = ([t, e]) => `${t}: ${e};`;
function Fd(t, e, n) {
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
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = "primary" } = e, { variant: p = "text" } = e, { touch: v = !1 } = e, { href: b = void 0 } = e, { action: C = "close" } = e, { defaultAction: A = !1 } = e, { secondary: R = !1 } = e, M, g = {}, O = {}, B = qe("SMUI:button:context"), { component: y = Ht } = e, { tag: S = y === Ht ? b == null ? "button" : "a" : void 0 } = e, E = l.disabled;
  ze("SMUI:label:context", "button"), ze("SMUI:icon:context", "button");
  function L(D) {
    g[D] || n(12, g[D] = !0, g);
  }
  function P(D) {
    (!(D in g) || g[D]) && n(12, g[D] = !1, g);
  }
  function q(D, V) {
    O[D] != V && (V === "" || V == null ? (delete O[D], n(13, O)) : n(13, O[D] = V, O));
  }
  function j() {
    B === "banner" && Ie(X(), R ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function X() {
    return M.getElement();
  }
  function k(D) {
    le[D ? "unshift" : "push"](() => {
      M = D, n(11, M);
    });
  }
  return t.$$set = (D) => {
    n(31, e = K(K({}, e), nt(D))), n(23, l = he(e, a)), "use" in D && n(0, f = D.use), "class" in D && n(1, d = D.class), "style" in D && n(2, h = D.style), "ripple" in D && n(3, m = D.ripple), "color" in D && n(4, _ = D.color), "variant" in D && n(5, p = D.variant), "touch" in D && n(6, v = D.touch), "href" in D && n(7, b = D.href), "action" in D && n(24, C = D.action), "defaultAction" in D && n(25, A = D.defaultAction), "secondary" in D && n(8, R = D.secondary), "component" in D && n(9, y = D.component), "tag" in D && n(10, S = D.tag), "$$scope" in D && n(30, u = D.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = B === "dialog:action" && C != null ? { "data-mdc-dialog-action": C } : { action: e.action }), n(15, r = B === "dialog:action" && A ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, s = B === "banner" ? {} : { secondary: e.secondary }), E !== l.disabled) {
      if (M) {
        const D = X();
        "blur" in D && D.blur();
      }
      n(27, E = l.disabled);
    }
  }, e = nt(e), [
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    R,
    y,
    S,
    M,
    g,
    O,
    s,
    r,
    i,
    c,
    B,
    L,
    P,
    q,
    j,
    l,
    C,
    A,
    X,
    E,
    o,
    k,
    u
  ];
}
class Ud extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      Fd,
      wd,
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
function Bd(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), i = Se(
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
      64) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[6],
        e ? Te(
          n,
          /*$$scope*/
          r[6],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Vd(t) {
  let e, n;
  return e = new Ud({
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
      $$slots: { default: [Bd] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Gd(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: s = () => {
  } } = e, { disabled: a = !1 } = e, { variant: l = "default" } = e, { isAbortAction: o = !1 } = e, { backgroundColor: u = void 0 } = e;
  return t.$$set = (c) => {
    "callback" in c && n(0, s = c.callback), "disabled" in c && n(1, a = c.disabled), "variant" in c && n(2, l = c.variant), "isAbortAction" in c && n(3, o = c.isAbortAction), "backgroundColor" in c && n(4, u = c.backgroundColor), "$$scope" in c && n(6, r = c.$$scope);
  }, [s, a, l, o, u, i, r];
}
class Os extends ye {
  constructor(e) {
    super(), Ee(this, e, Gd, Vd, _e, {
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
var Gi = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, ln = {
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
var jd = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ln;
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
      var n = this.adapter.getAttr(ln.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(ln.DATA_ARIA_LABEL_OFF);
      if (n && i) {
        if (this.adapter.getAttr(ln.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(ln.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Gi.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Gi.ICON_BUTTON_ON) : this.adapter.removeClass(Gi.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(ln.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(ln.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(ln.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(ln.ARIA_PRESSED, "" + n);
    }, e;
  }(Lt)
);
function sl(t) {
  let e;
  return {
    c() {
      e = ee("div"), N(e, "class", "mdc-icon-button__touch");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function qd(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[33].default
  ), a = Se(
    s,
    t,
    /*$$scope*/
    t[37],
    null
  );
  let l = (
    /*touch*/
    t[8] && sl()
  );
  return {
    c() {
      e = ee("div"), n = oe(), a && a.c(), l && l.c(), i = Ke(), N(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      U(o, e, u), U(o, n, u), a && a.m(o, u), l && l.m(o, u), U(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && Le(
        a,
        s,
        o,
        /*$$scope*/
        o[37],
        r ? Te(
          s,
          /*$$scope*/
          o[37],
          u,
          null
        ) : Oe(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? l || (l = sl(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (I(a, o), r = !0);
    },
    o(o) {
      T(a, o), r = !1;
    },
    d(o) {
      o && (F(e), F(n), F(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function Wd(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[14]
    ) },
    {
      use: [
        [
          kt,
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
      ).map(Wr).concat([
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
      $$slots: { default: [qd] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = K(u, de(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        l[14]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            kt,
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
        ).map(Wr).concat([
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
  return s && (e = Nt(s, a(t)), t[34](e), e.$on(
    "click",
    /*click_handler*/
    t[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    t[36]
  )), {
    c() {
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(l, o)), l[34](e), e.$on(
          "click",
          /*click_handler*/
          l[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          l[36]
        ), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
                kt,
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
            ).map(Wr).concat([
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[34](null), e && $(e, l);
    }
  };
}
const Wr = ([t, e]) => `${t}: ${e};`;
function zd(t, e, n) {
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
  function c(W) {
    return W === u;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: m = !0 } = e, { color: _ = void 0 } = e, { toggle: p = !1 } = e, { pressed: v = u } = e, { ariaLabelOn: b = void 0 } = e, { ariaLabelOff: C = void 0 } = e, { touch: A = !1 } = e, { displayFlex: R = !0 } = e, { size: M = "normal" } = e, { href: g = void 0 } = e, { action: O = void 0 } = e, B, y, S = {}, E = {}, L = {}, P = qe("SMUI:icon-button:context"), q = qe("SMUI:icon-button:aria-describedby"), { component: j = Ht } = e, { tag: X = j === Ht ? g == null ? "button" : "a" : void 0 } = e, k = s.disabled;
  ze("SMUI:icon:context", "icon-button");
  let D = null;
  rn(() => {
    y && y.destroy();
  });
  function V(W) {
    return W in S ? S[W] : Re().classList.contains(W);
  }
  function ue(W) {
    S[W] || n(18, S[W] = !0, S);
  }
  function Ne(W) {
    (!(W in S) || S[W]) && n(18, S[W] = !1, S);
  }
  function Ae(W, We) {
    E[W] != We && (We === "" || We == null ? (delete E[W], n(19, E)) : n(19, E[W] = We, E));
  }
  function Ye(W) {
    var We;
    return W in L ? (We = L[W]) !== null && We !== void 0 ? We : null : Re().getAttribute(W);
  }
  function z(W, We) {
    L[W] !== We && n(20, L[W] = We, L);
  }
  function J(W) {
    n(0, v = W.isOn);
  }
  function Re() {
    return B.getElement();
  }
  function De(W) {
    le[W ? "unshift" : "push"](() => {
      B = W, n(16, B);
    });
  }
  const He = () => y && y.handleClick(), ie = () => P === "top-app-bar:navigation" && Ie(Re(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (W) => {
    e = K(K({}, e), nt(W)), n(29, s = he(e, r)), "use" in W && n(1, f = W.use), "class" in W && n(2, d = W.class), "style" in W && n(3, h = W.style), "ripple" in W && n(4, m = W.ripple), "color" in W && n(5, _ = W.color), "toggle" in W && n(30, p = W.toggle), "pressed" in W && n(0, v = W.pressed), "ariaLabelOn" in W && n(6, b = W.ariaLabelOn), "ariaLabelOff" in W && n(7, C = W.ariaLabelOff), "touch" in W && n(8, A = W.touch), "displayFlex" in W && n(9, R = W.displayFlex), "size" in W && n(10, M = W.size), "href" in W && n(11, g = W.href), "action" in W && n(12, O = W.action), "component" in W && n(13, j = W.component), "tag" in W && n(14, X = W.tag), "$$scope" in W && n(37, l = W.$$scope);
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
      if (B) {
        const W = Re();
        "blur" in W && W.blur();
      }
      n(31, k = s.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && B && Re() && p !== D && (p && !y ? (n(17, y = new jd({
      addClass: ue,
      hasClass: V,
      notifyChange: (W) => {
        J(W), Ie(Re(), "SMUIIconButtonToggle:change", W, void 0, !0);
      },
      removeClass: Ne,
      getAttr: Ye,
      setAttr: z
    })), y.init()) : !p && y && (y.destroy(), n(17, y = void 0), n(18, S = {}), n(20, L = {})), n(32, D = p)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && y && !c(v) && y.isOn() !== v && y.toggle(v);
  }, [
    v,
    f,
    d,
    h,
    m,
    _,
    b,
    C,
    A,
    R,
    M,
    g,
    O,
    j,
    X,
    Re,
    B,
    y,
    S,
    E,
    L,
    i,
    o,
    c,
    P,
    q,
    ue,
    Ne,
    Ae,
    s,
    p,
    k,
    D,
    a,
    De,
    He,
    ie,
    l
  ];
}
class Kd extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      zd,
      Wd,
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
function Xd(t) {
  let e;
  return {
    c() {
      e = ct(
        /*icon*/
        t[1]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      2 && pt(
        e,
        /*icon*/
        n[1]
      );
    },
    d(n) {
      n && F(e);
    }
  };
}
function Yd(t) {
  let e, n;
  return e = new Cd({
    props: {
      class: "material-icons",
      $$slots: { default: [Xd] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Zd(t) {
  let e, n;
  return e = new Kd({
    props: {
      disabled: (
        /*disabled*/
        t[2]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Yd] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Qd(t, e, n) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { disabled: s = !1 } = e;
  return t.$$set = (a) => {
    "callback" in a && n(0, i = a.callback), "icon" in a && n(1, r = a.icon), "disabled" in a && n(2, s = a.disabled);
  }, [i, r, s];
}
class Jd extends ye {
  constructor(e) {
    super(), Ee(this, e, Qd, Zd, _e, { callback: 0, icon: 1, disabled: 2 });
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
var xd = {
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
var $d = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xd;
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
  }(Lt)
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
var Tn = {
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
var eh = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Tn;
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
      this.adapter.removeClass(Tn.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Tn.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Tn.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this.adapter.hasClass(Tn.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && i && (this.adapter.removeClass(Tn.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Tn.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Lt)
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
var th = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ll = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, nh = {
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
var ih = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return th;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ll;
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
      n > 0 && (n += ll.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Lt)
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
var zr = {
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
}, rh = {
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
}, al = {
  LABEL_SCALE: 0.75
}, sh = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], lh = [
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
var ol = ["mousedown", "touchstart"], ul = ["click", "keydown"], ah = (
  /** @class */
  function(t) {
    st(e, t);
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
        return rh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return al;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return lh.indexOf(n) >= 0;
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
        for (var a = Tt(ol), l = a.next(); !l.done; l = a.next()) {
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
        for (var u = Tt(ul), c = u.next(); !c.done; c = u.next()) {
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
        for (var a = Tt(ol), l = a.next(); !l.done; l = a.next()) {
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
        for (var u = Tt(ul), c = u.next(); !c.done; c = u.next()) {
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
        return sh.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var i = this.adapter.getLabelWidth() * al.LABEL_SCALE;
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
        s && a ? this.adapter.setInputAttr(zr.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(zr.ARIA_DESCRIBEDBY);
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
  }(Lt)
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
var cl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, oh = {
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
var fl = ["click", "keydown"], uh = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return cl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return oh;
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
        for (var r = Tt(fl), s = r.next(); !s.done; s = r.next()) {
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
        for (var r = Tt(fl), s = r.next(); !s.done; s = r.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", cl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var i = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || i) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Lt)
);
function ch(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[22].default
  ), c = Se(
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
      ).map(hl).concat([
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
    d = K(d, f[h]);
  return {
    c() {
      e = ee("label"), c && c.c(), me(e, d);
    },
    m(h, m) {
      U(h, e, m), c && c.m(e, null), t[24](e), a = !0, l || (o = [
        fe(s = xe.call(
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
      2097152) && Le(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? Te(
          u,
          /*$$scope*/
          h[21],
          m,
          null
        ) : Oe(
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
        ).map(hl).concat([
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
      a || (I(c, h), a = !0);
    },
    o(h) {
      T(c, h), a = !1;
    },
    d(h) {
      h && F(e), c && c.d(h), t[24](null), l = !1, Ze(o);
    }
  };
}
function fh(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[22].default
  ), u = Se(
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
      ).map(dl).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    /*$$restProps*/
    t[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = K(f, c[d]);
  return {
    c() {
      e = ee("span"), u && u.c(), me(e, f);
    },
    m(d, h) {
      U(d, e, h), u && u.m(e, null), t[23](e), s = !0, a || (l = [
        fe(r = xe.call(
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
      2097152) && Le(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        s ? Te(
          o,
          /*$$scope*/
          d[21],
          h,
          null
        ) : Oe(
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
        ).map(dl).concat([
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
      s || (I(u, d), s = !0);
    },
    o(d) {
      T(u, d), s = !1;
    },
    d(d) {
      d && F(e), u && u.d(d), t[23](null), a = !1, Ze(l);
    }
  };
}
function dh(t) {
  let e, n, i, r;
  const s = [fh, ch], a = [];
  function l(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ke();
    },
    m(o, u) {
      a[e].m(o, u), U(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (we(), T(a[c], 1, 1, () => {
        a[c] = null;
      }), Fe(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), I(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (I(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      o && F(i), a[e].d(o);
    }
  };
}
const dl = ([t, e]) => `${t}: ${e};`, hl = ([t, e]) => `${t}: ${e};`;
function hh(t, e, n) {
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
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: h = !1 } = e, { required: m = !1 } = e, { wrapped: _ = !1 } = e, p, v, b = {}, C = {}, A = (l = qe("SMUI:generic:input:props")) !== null && l !== void 0 ? l : {}, R = h, M = m;
  ut(() => {
    n(18, v = new $d({
      addClass: g,
      removeClass: O,
      getWidth: () => {
        var D, V;
        const ue = q(), Ne = ue.cloneNode(!0);
        (D = ue.parentNode) === null || D === void 0 || D.appendChild(Ne), Ne.classList.add("smui-floating-label--remove-transition"), Ne.classList.add("smui-floating-label--force-size"), Ne.classList.remove("mdc-floating-label--float-above");
        const Ae = Ne.scrollWidth;
        return (V = ue.parentNode) === null || V === void 0 || V.removeChild(Ne), Ae;
      },
      registerInteractionHandler: (D, V) => q().addEventListener(D, V),
      deregisterInteractionHandler: (D, V) => q().removeEventListener(D, V)
    }));
    const k = {
      get element() {
        return q();
      },
      addStyle: B,
      removeStyle: y
    };
    return Ie(p, "SMUIFloatingLabel:mount", k), v.init(), () => {
      Ie(p, "SMUIFloatingLabel:unmount", k), v.destroy();
    };
  });
  function g(k) {
    b[k] || n(8, b[k] = !0, b);
  }
  function O(k) {
    (!(k in b) || b[k]) && n(8, b[k] = !1, b);
  }
  function B(k, D) {
    C[k] != D && (D === "" || D == null ? (delete C[k], n(9, C)) : n(9, C[k] = D, C));
  }
  function y(k) {
    k in C && (delete C[k], n(9, C));
  }
  function S(k) {
    v.shake(k);
  }
  function E(k) {
    n(0, h = k);
  }
  function L(k) {
    n(1, m = k);
  }
  function P() {
    return v.getWidth();
  }
  function q() {
    return p;
  }
  function j(k) {
    le[k ? "unshift" : "push"](() => {
      p = k, n(7, p);
    });
  }
  function X(k) {
    le[k ? "unshift" : "push"](() => {
      p = k, n(7, p);
    });
  }
  return t.$$set = (k) => {
    e = K(K({}, e), nt(k)), n(12, r = he(e, i)), "use" in k && n(2, u = k.use), "class" in k && n(3, c = k.class), "style" in k && n(4, f = k.style), "for" in k && n(5, d = k.for), "floatAbove" in k && n(0, h = k.floatAbove), "required" in k && n(1, m = k.required), "wrapped" in k && n(6, _ = k.wrapped), "$$scope" in k && n(21, a = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && v && R !== h && (n(19, R = h), v.float(h)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && v && M !== m && (n(20, M = m), v.setRequired(m));
  }, [
    h,
    m,
    u,
    c,
    f,
    d,
    _,
    p,
    b,
    C,
    o,
    A,
    r,
    S,
    E,
    L,
    P,
    q,
    v,
    R,
    M,
    a,
    s,
    j,
    X
  ];
}
class lr extends ye {
  constructor(e) {
    super(), Ee(this, e, hh, dh, _e, {
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
function mh(t) {
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
      ).map(ml).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*$$restProps*/
    t[8]
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = K(o, l[u]);
  return {
    c() {
      e = ee("div"), me(e, o);
    },
    m(u, c) {
      U(u, e, c), t[13](e), s || (a = [
        fe(r = xe.call(
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
        ).map(ml).concat([
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
    i: $e,
    o: $e,
    d(u) {
      u && F(e), t[13](null), s = !1, Ze(a);
    }
  };
}
const ml = ([t, e]) => `${t}: ${e};`;
function ph(t, e, n) {
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
  ut(() => (f = new eh({
    addClass: _,
    removeClass: p,
    hasClass: m,
    setStyle: v,
    registerEventHandler: (g, O) => R().addEventListener(g, O),
    deregisterEventHandler: (g, O) => R().removeEventListener(g, O)
  }), f.init(), () => {
    f.destroy();
  }));
  function m(g) {
    return g in d ? d[g] : R().classList.contains(g);
  }
  function _(g) {
    d[g] || n(5, d[g] = !0, d);
  }
  function p(g) {
    (!(g in d) || d[g]) && n(5, d[g] = !1, d);
  }
  function v(g, O) {
    h[g] != O && (O === "" || O == null ? (delete h[g], n(6, h)) : n(6, h[g] = O, h));
  }
  function b() {
    f.activate();
  }
  function C() {
    f.deactivate();
  }
  function A(g) {
    f.setRippleCenter(g);
  }
  function R() {
    return c;
  }
  function M(g) {
    le[g ? "unshift" : "push"](() => {
      c = g, n(4, c);
    });
  }
  return t.$$set = (g) => {
    e = K(K({}, e), nt(g)), n(8, r = he(e, i)), "use" in g && n(0, a = g.use), "class" in g && n(1, l = g.class), "style" in g && n(2, o = g.style), "active" in g && n(3, u = g.active);
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
    C,
    A,
    R,
    M
  ];
}
class Zo extends ye {
  constructor(e) {
    super(), Ee(this, e, ph, mh, _e, {
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
function pl(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[15].default
  ), s = Se(
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
      ).map(gl).join(" "));
    },
    m(a, l) {
      U(a, e, l), s && s.m(e, null), i = !0;
    },
    p(a, l) {
      s && s.p && (!i || l & /*$$scope*/
      16384) && Le(
        s,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? Te(
          r,
          /*$$scope*/
          a[14],
          l,
          null
        ) : Oe(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || l & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(gl).join(" "))) && N(e, "style", n);
    },
    i(a) {
      i || (I(s, a), i = !0);
    },
    o(a) {
      T(s, a), i = !1;
    },
    d(a) {
      a && F(e), s && s.d(a);
    }
  };
}
function gh(t) {
  let e, n, i, r, s, a, l, o, u, c, f = !/*noLabel*/
  t[3] && pl(t), d = [
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
    h = K(h, d[m]);
  return {
    c() {
      e = ee("div"), n = ee("div"), i = oe(), f && f.c(), r = oe(), s = ee("div"), N(n, "class", "mdc-notched-outline__leading"), N(s, "class", "mdc-notched-outline__trailing"), me(e, h);
    },
    m(m, _) {
      U(m, e, _), Q(e, n), Q(e, i), f && f.m(e, null), Q(e, r), Q(e, s), t[16](e), o = !0, u || (c = [
        fe(l = xe.call(
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
    p(m, [_]) {
      /*noLabel*/
      m[3] ? f && (we(), T(f, 1, 1, () => {
        f = null;
      }), Fe()) : f ? (f.p(m, _), _ & /*noLabel*/
      8 && I(f, 1)) : (f = pl(m), f.c(), I(f, 1), f.m(e, r)), me(e, h = de(d, [
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
      ])), l && ge(l.update) && _ & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (I(f), o = !0);
    },
    o(m) {
      T(f), o = !1;
    },
    d(m) {
      m && F(e), f && f.d(), t[16](null), u = !1, Ze(c);
    }
  };
}
const gl = ([t, e]) => `${t}: ${e};`;
function _h(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, h, m, _ = {}, p = {};
  ut(() => (h = new ih({
    addClass: b,
    removeClass: C,
    setNotchWidthProperty: (S) => A("width", S + "px"),
    removeNotchWidthProperty: () => R("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function v(S) {
    n(4, m = S.detail);
  }
  function b(S) {
    _[S] || n(6, _[S] = !0, _);
  }
  function C(S) {
    (!(S in _) || _[S]) && n(6, _[S] = !1, _);
  }
  function A(S, E) {
    p[S] != E && (E === "" || E == null ? (delete p[S], n(7, p)) : n(7, p[S] = E, p));
  }
  function R(S) {
    S in p && (delete p[S], n(7, p));
  }
  function M(S) {
    h.notch(S);
  }
  function g() {
    h.closeNotch();
  }
  function O() {
    return d;
  }
  function B(S) {
    le[S ? "unshift" : "push"](() => {
      d = S, n(5, d);
    });
  }
  const y = () => n(4, m = void 0);
  return t.$$set = (S) => {
    e = K(K({}, e), nt(S)), n(10, r = he(e, i)), "use" in S && n(0, o = S.use), "class" in S && n(1, u = S.class), "notched" in S && n(2, c = S.notched), "noLabel" in S && n(3, f = S.noLabel), "$$scope" in S && n(14, a = S.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (m ? (m.addStyle("transition-duration", "0s"), b("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      m && m.removeStyle("transition-duration");
    })) : C("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    m,
    d,
    _,
    p,
    l,
    v,
    r,
    M,
    g,
    O,
    a,
    s,
    B,
    y
  ];
}
class Qo extends ye {
  constructor(e) {
    super(), Ee(this, e, _h, gh, _e, {
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
function bh(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Se(
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
      8192) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? Te(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vh(t) {
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
      $$slots: { default: [bh] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = K(u, de(r, [
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
  return s && (e = Nt(s, a(t)), t[12](e)), {
    c() {
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(l, o)), l[12](e), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[12](null), e && $(e, l);
    }
  };
}
const cn = {
  component: Ht,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Ih(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e, { use: l = [] } = e, { class: o = "" } = e, u;
  const c = cn.class, f = {}, d = [], h = cn.contexts, m = cn.props;
  let { component: _ = cn.component } = e, { tag: p = _ === Ht ? cn.tag : void 0 } = e;
  Object.entries(cn.classMap).forEach(([A, R]) => {
    const M = qe(R);
    M && "subscribe" in M && d.push(M.subscribe((g) => {
      n(5, f[A] = g, f);
    }));
  });
  const v = rt(Qe());
  for (let A in h)
    h.hasOwnProperty(A) && ze(A, h[A]);
  rn(() => {
    for (const A of d)
      A();
  });
  function b() {
    return u.getElement();
  }
  function C(A) {
    le[A ? "unshift" : "push"](() => {
      u = A, n(4, u);
    });
  }
  return t.$$set = (A) => {
    e = K(K({}, e), nt(A)), n(9, r = he(e, i)), "use" in A && n(0, l = A.use), "class" in A && n(1, o = A.class), "component" in A && n(2, _ = A.component), "tag" in A && n(3, p = A.tag), "$$scope" in A && n(13, a = A.$$scope);
  }, [
    l,
    o,
    _,
    p,
    u,
    f,
    c,
    m,
    v,
    r,
    b,
    s,
    C,
    a
  ];
}
class Eh extends ye {
  constructor(e) {
    super(), Ee(this, e, Ih, vh, _e, {
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
const _l = Object.assign({}, cn);
function Dt(t) {
  return new Proxy(Eh, {
    construct: function(e, n) {
      return Object.assign(cn, _l, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(cn, _l, t), e[n];
    }
  });
}
const yh = Dt({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Ah = Dt({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Ch = Dt({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Sh(t) {
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
    l = K(l, a[o]);
  return {
    c() {
      e = ee("input"), me(e, l);
    },
    m(o, u) {
      U(o, e, u), e.autofocus && e.focus(), t[26](e), r || (s = [
        fe(i = xe.call(
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
    i: $e,
    o: $e,
    d(o) {
      o && F(e), t[26](null), r = !1, Ze(s);
    }
  };
}
function Th(t) {
  return t === "" ? Number.NaN : +t;
}
function Lh(t, e, n) {
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
  function l(D) {
    return D === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = a } = e;
  const h = l(d);
  h && (d = "");
  let { files: m = null } = e, { dirty: _ = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: v = !0 } = e, { emptyValueNull: b = d === null } = e;
  h && b && (d = null);
  let { emptyValueUndefined: C = d === void 0 } = e;
  h && C && (d = void 0);
  let A, R = {}, M = {};
  ut(() => {
    v && n(14, p = A.matches(":invalid"));
  });
  function g(D) {
    if (c === "file") {
      n(12, m = D.currentTarget.files);
      return;
    }
    if (D.currentTarget.value === "" && b) {
      n(11, d = null);
      return;
    }
    if (D.currentTarget.value === "" && C) {
      n(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        n(11, d = Th(D.currentTarget.value));
        break;
      default:
        n(11, d = D.currentTarget.value);
        break;
    }
  }
  function O(D) {
    (c === "file" || c === "range") && g(D), n(13, _ = !0), v && n(14, p = A.matches(":invalid"));
  }
  function B(D) {
    var V;
    return D in R ? (V = R[D]) !== null && V !== void 0 ? V : null : P().getAttribute(D);
  }
  function y(D, V) {
    R[D] !== V && n(6, R[D] = V, R);
  }
  function S(D) {
    (!(D in R) || R[D] != null) && n(6, R[D] = void 0, R);
  }
  function E() {
    P().focus();
  }
  function L() {
    P().blur();
  }
  function P() {
    return A;
  }
  function q(D) {
    ii.call(this, t, D);
  }
  function j(D) {
    ii.call(this, t, D);
  }
  function X(D) {
    le[D ? "unshift" : "push"](() => {
      A = D, n(5, A);
    });
  }
  const k = (D) => c !== "file" && g(D);
  return t.$$set = (D) => {
    e = K(K({}, e), nt(D)), n(10, r = he(e, i)), "use" in D && n(0, o = D.use), "class" in D && n(1, u = D.class), "type" in D && n(2, c = D.type), "placeholder" in D && n(3, f = D.placeholder), "value" in D && n(11, d = D.value), "files" in D && n(12, m = D.files), "dirty" in D && n(13, _ = D.dirty), "invalid" in D && n(14, p = D.invalid), "updateInvalid" in D && n(15, v = D.updateInvalid), "emptyValueNull" in D && n(16, b = D.emptyValueNull), "emptyValueUndefined" in D && n(17, C = D.emptyValueUndefined);
  }, t.$$.update = () => {
    t.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete M.value, n(4, M), n(2, c), n(11, d)) : n(4, M.value = d ?? "", M));
  }, [
    o,
    u,
    c,
    f,
    M,
    A,
    R,
    s,
    g,
    O,
    r,
    d,
    m,
    _,
    p,
    v,
    b,
    C,
    B,
    y,
    S,
    E,
    L,
    P,
    q,
    j,
    X,
    k
  ];
}
class Oh extends ye {
  constructor(e) {
    super(), Ee(this, e, Lh, Sh, _e, {
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
function Rh(t) {
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
    o = K(o, l[u]);
  return {
    c() {
      e = ee("textarea"), me(e, o);
    },
    m(u, c) {
      U(u, e, c), e.autofocus && e.focus(), t[21](e), tn(
        e,
        /*value*/
        t[0]
      ), s || (a = [
        fe(r = xe.call(
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
      1 && tn(
        e,
        /*value*/
        u[0]
      );
    },
    i: $e,
    o: $e,
    d(u) {
      u && F(e), t[21](null), s = !1, Ze(a);
    }
  };
}
function Dh(t, e, n) {
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
  let { use: a = [] } = e, { class: l = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: h = !0 } = e, m, _ = {};
  ut(() => {
    d && n(11, f = m.matches(":invalid"));
  });
  function p() {
    n(10, c = !0), d && n(11, f = m.matches(":invalid"));
  }
  function v(S) {
    var E;
    return S in _ ? (E = _[S]) !== null && E !== void 0 ? E : null : M().getAttribute(S);
  }
  function b(S, E) {
    _[S] !== E && n(6, _[S] = E, _);
  }
  function C(S) {
    (!(S in _) || _[S] != null) && n(6, _[S] = void 0, _);
  }
  function A() {
    M().focus();
  }
  function R() {
    M().blur();
  }
  function M() {
    return m;
  }
  function g(S) {
    ii.call(this, t, S);
  }
  function O(S) {
    ii.call(this, t, S);
  }
  function B(S) {
    le[S ? "unshift" : "push"](() => {
      m = S, n(5, m);
    });
  }
  function y() {
    u = this.value, n(0, u);
  }
  return t.$$set = (S) => {
    e = K(K({}, e), nt(S)), n(9, r = he(e, i)), "use" in S && n(1, a = S.use), "class" in S && n(2, l = S.class), "style" in S && n(3, o = S.style), "value" in S && n(0, u = S.value), "dirty" in S && n(10, c = S.dirty), "invalid" in S && n(11, f = S.invalid), "updateInvalid" in S && n(12, d = S.updateInvalid), "resizable" in S && n(4, h = S.resizable);
  }, [
    u,
    a,
    l,
    o,
    h,
    m,
    _,
    s,
    p,
    r,
    c,
    f,
    d,
    v,
    b,
    C,
    A,
    R,
    M,
    g,
    O,
    B,
    y
  ];
}
class Mh extends ye {
  constructor(e) {
    super(), Ee(this, e, Dh, Rh, _e, {
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
const kh = (t) => ({}), bl = (t) => ({}), Nh = (t) => ({}), vl = (t) => ({}), Ph = (t) => ({}), Il = (t) => ({}), Hh = (t) => ({}), El = (t) => ({}), wh = (t) => ({}), yl = (t) => ({}), Fh = (t) => ({}), Al = (t) => ({}), Uh = (t) => ({}), Cl = (t) => ({}), Bh = (t) => ({}), Sl = (t) => ({}), Vh = (t) => ({}), Tl = (t) => ({}), Gh = (t) => ({}), Ll = (t) => ({}), jh = (t) => ({}), Ol = (t) => ({}), qh = (t) => ({}), Rl = (t) => ({});
function Wh(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m;
  const _ = (
    /*#slots*/
    t[56].label
  ), p = Se(
    _,
    t,
    /*$$scope*/
    t[87],
    yl
  );
  i = new oi({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Kh] },
      $$scope: { ctx: t }
    }
  });
  const v = (
    /*#slots*/
    t[56].default
  ), b = Se(
    v,
    t,
    /*$$scope*/
    t[87],
    null
  );
  a = new oi({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Xh] },
      $$scope: { ctx: t }
    }
  });
  const C = (
    /*#slots*/
    t[56].ripple
  ), A = Se(
    C,
    t,
    /*$$scope*/
    t[87],
    vl
  );
  let R = [
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
      ).map(Vl).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    nn(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], M = {};
  for (let g = 0; g < R.length; g += 1)
    M = K(M, R[g]);
  return {
    c() {
      e = ee("div"), p && p.c(), n = oe(), te(i.$$.fragment), r = oe(), b && b.c(), s = oe(), te(a.$$.fragment), l = oe(), A && A.c(), me(e, M);
    },
    m(g, O) {
      U(g, e, O), p && p.m(e, null), Q(e, n), x(i, e, null), Q(e, r), b && b.m(e, null), Q(e, s), x(a, e, null), Q(e, l), A && A.m(e, null), t[82](e), d = !0, h || (m = [
        fe(c = kt.call(null, e, {
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
        fe(f = xe.call(
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
    p(g, O) {
      p && p.p && (!d || O[2] & /*$$scope*/
      33554432) && Le(
        p,
        _,
        g,
        /*$$scope*/
        g[87],
        d ? Te(
          _,
          /*$$scope*/
          g[87],
          O,
          wh
        ) : Oe(
          /*$$scope*/
          g[87]
        ),
        yl
      );
      const B = {};
      O[2] & /*$$scope*/
      33554432 && (B.$$scope = { dirty: O, ctx: g }), i.$set(B), b && b.p && (!d || O[2] & /*$$scope*/
      33554432) && Le(
        b,
        v,
        g,
        /*$$scope*/
        g[87],
        d ? Te(
          v,
          /*$$scope*/
          g[87],
          O,
          null
        ) : Oe(
          /*$$scope*/
          g[87]
        ),
        null
      );
      const y = {};
      O[2] & /*$$scope*/
      33554432 && (y.$$scope = { dirty: O, ctx: g }), a.$set(y), A && A.p && (!d || O[2] & /*$$scope*/
      33554432) && Le(
        A,
        C,
        g,
        /*$$scope*/
        g[87],
        d ? Te(
          C,
          /*$$scope*/
          g[87],
          O,
          Nh
        ) : Oe(
          /*$$scope*/
          g[87]
        ),
        vl
      ), me(e, M = de(R, [
        (!d || O[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | O[1] & /*$$slots*/
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
        (!d || O[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          g[26]
        ).map(Vl).concat([
          /*style*/
          g[10]
        ]).join(" "))) && { style: u },
        O[1] & /*$$restProps*/
        32768 && nn(
          /*$$restProps*/
          g[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && ge(c.update) && O[0] & /*ripple*/
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
      }), f && ge(f.update) && O[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        g[8]
      );
    },
    i(g) {
      d || (I(p, g), I(i.$$.fragment, g), I(b, g), I(a.$$.fragment, g), I(A, g), d = !0);
    },
    o(g) {
      T(p, g), T(i.$$.fragment, g), T(b, g), T(a.$$.fragment, g), T(A, g), d = !1;
    },
    d(g) {
      g && F(e), p && p.d(g), $(i), b && b.d(g), $(a), A && A.d(g), t[82](null), h = !1, Ze(m);
    }
  };
}
function zh(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, _, p, v, b, C = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && Dl(t), A = (
    /*textarea*/
    (t[14] || /*variant*/
    t[15] === "outlined") && Nl(t)
  );
  r = new oi({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Jh] },
      $$scope: { ctx: t }
    }
  });
  const R = (
    /*#slots*/
    t[56].default
  ), M = Se(
    R,
    t,
    /*$$scope*/
    t[87],
    null
  ), g = [$h, xh], O = [];
  function B(L, P) {
    return (
      /*textarea*/
      L[14] && typeof /*value*/
      L[0] == "string" ? 0 : 1
    );
  }
  l = B(t), o = O[l] = g[l](t), c = new oi({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [nm] },
      $$scope: { ctx: t }
    }
  });
  let y = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && /*ripple*/
  t[11] && Fl(t), S = [
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
      ).map(Bl).concat([
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
    nn(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], E = {};
  for (let L = 0; L < S.length; L += 1)
    E = K(E, S[L]);
  return {
    c() {
      e = ee("label"), C && C.c(), n = oe(), A && A.c(), i = oe(), te(r.$$.fragment), s = oe(), M && M.c(), a = oe(), o.c(), u = oe(), te(c.$$.fragment), f = oe(), y && y.c(), me(e, E);
    },
    m(L, P) {
      U(L, e, P), C && C.m(e, null), Q(e, n), A && A.m(e, null), Q(e, i), x(r, e, null), Q(e, s), M && M.m(e, null), Q(e, a), O[l].m(e, null), Q(e, u), x(c, e, null), Q(e, f), y && y.m(e, null), t[78](e), p = !0, v || (b = [
        fe(m = kt.call(null, e, {
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
        fe(_ = xe.call(
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
      ], v = !0);
    },
    p(L, P) {
      !/*textarea*/
      L[14] && /*variant*/
      L[15] !== "outlined" ? C ? (C.p(L, P), P[0] & /*textarea, variant*/
      49152 && I(C, 1)) : (C = Dl(L), C.c(), I(C, 1), C.m(e, n)) : C && (we(), T(C, 1, 1, () => {
        C = null;
      }), Fe()), /*textarea*/
      L[14] || /*variant*/
      L[15] === "outlined" ? A ? (A.p(L, P), P[0] & /*textarea, variant*/
      49152 && I(A, 1)) : (A = Nl(L), A.c(), I(A, 1), A.m(e, i)) : A && (we(), T(A, 1, 1, () => {
        A = null;
      }), Fe());
      const q = {};
      P[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: P, ctx: L }), r.$set(q), M && M.p && (!p || P[2] & /*$$scope*/
      33554432) && Le(
        M,
        R,
        L,
        /*$$scope*/
        L[87],
        p ? Te(
          R,
          /*$$scope*/
          L[87],
          P,
          null
        ) : Oe(
          /*$$scope*/
          L[87]
        ),
        null
      );
      let j = l;
      l = B(L), l === j ? O[l].p(L, P) : (we(), T(O[j], 1, 1, () => {
        O[j] = null;
      }), Fe(), o = O[l], o ? o.p(L, P) : (o = O[l] = g[l](L), o.c()), I(o, 1), o.m(e, u));
      const X = {};
      P[2] & /*$$scope*/
      33554432 && (X.$$scope = { dirty: P, ctx: L }), c.$set(X), !/*textarea*/
      L[14] && /*variant*/
      L[15] !== "outlined" && /*ripple*/
      L[11] ? y ? (y.p(L, P), P[0] & /*textarea, variant, ripple*/
      51200 && I(y, 1)) : (y = Fl(L), y.c(), I(y, 1), y.m(e, null)) : y && (we(), T(y, 1, 1, () => {
        y = null;
      }), Fe()), me(e, E = de(S, [
        (!p || P[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | P[1] & /*$$slots*/
        65536 && d !== (d = re({
          [
            /*className*/
            L[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            L[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            L[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            L[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            L[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            L[15] === "standard" && !/*textarea*/
            L[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            L[16] || /*label*/
            L[17] == null && !/*$$slots*/
            L[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            L[28] || /*value*/
            L[0] != null && /*value*/
            L[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            L[35](
              /*withLeadingIcon*/
              L[22]
            ) ? (
              /*$$slots*/
              L[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              L[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            L[35](
              /*withTrailingIcon*/
              L[23]
            ) ? (
              /*$$slots*/
              L[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              L[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            L[14] && /*$$slots*/
            L[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            L[1]
          ),
          .../*internalClasses*/
          L[25]
        }))) && { class: d },
        (!p || P[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          L[26]
        ).map(Bl).concat([
          /*style*/
          L[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        P[1] & /*$$restProps*/
        32768 && nn(
          /*$$restProps*/
          L[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), m && ge(m.update) && P[0] & /*textarea, variant*/
      49152 | P[1] & /*inputElement*/
      4 && m.update.call(null, {
        ripple: !/*textarea*/
        L[14] && /*variant*/
        L[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          L[43]
        ),
        removeClass: (
          /*removeClass*/
          L[44]
        ),
        addStyle: (
          /*addStyle*/
          L[45]
        ),
        eventTarget: (
          /*inputElement*/
          L[33]
        ),
        activeTarget: (
          /*inputElement*/
          L[33]
        ),
        initPromise: (
          /*initPromise*/
          L[37]
        )
      }), _ && ge(_.update) && P[0] & /*use*/
      256 && _.update.call(
        null,
        /*use*/
        L[8]
      );
    },
    i(L) {
      p || (I(C), I(A), I(r.$$.fragment, L), I(M, L), I(o), I(c.$$.fragment, L), I(y), p = !0);
    },
    o(L) {
      T(C), T(A), T(r.$$.fragment, L), T(M, L), T(o), T(c.$$.fragment, L), T(y), p = !1;
    },
    d(L) {
      L && F(e), C && C.d(), A && A.d(), $(r), M && M.d(L), O[l].d(), $(c), y && y.d(), t[78](null), v = !1, Ze(b);
    }
  };
}
function Kh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Se(
    n,
    t,
    /*$$scope*/
    t[87],
    El
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
      33554432) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Te(
          n,
          /*$$scope*/
          r[87],
          s,
          Hh
        ) : Oe(
          /*$$scope*/
          r[87]
        ),
        El
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Xh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Se(
    n,
    t,
    /*$$scope*/
    t[87],
    Il
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
      33554432) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Te(
          n,
          /*$$scope*/
          r[87],
          s,
          Ph
        ) : Oe(
          /*$$scope*/
          r[87]
        ),
        Il
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Dl(t) {
  let e, n, i, r = (
    /*variant*/
    t[15] === "filled" && Ml()
  ), s = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && kl(t);
  return {
    c() {
      r && r.c(), e = oe(), s && s.c(), n = Ke();
    },
    m(a, l) {
      r && r.m(a, l), U(a, e, l), s && s.m(a, l), U(a, n, l), i = !0;
    },
    p(a, l) {
      /*variant*/
      a[15] === "filled" ? r || (r = Ml(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? s ? (s.p(a, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && I(s, 1)) : (s = kl(a), s.c(), I(s, 1), s.m(n.parentNode, n)) : s && (we(), T(s, 1, 1, () => {
        s = null;
      }), Fe());
    },
    i(a) {
      i || (I(s), i = !0);
    },
    o(a) {
      T(s), i = !1;
    },
    d(a) {
      a && (F(e), F(n)), r && r.d(a), s && s.d(a);
    }
  };
}
function Ml(t) {
  let e;
  return {
    c() {
      e = ee("span"), N(e, "class", "mdc-text-field__ripple");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function kl(t) {
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
    $$slots: { default: [Yh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new lr({ props: r }), t[57](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[57](null), $(e, s);
    }
  };
}
function Yh(t) {
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
  ), s = Se(
    r,
    t,
    /*$$scope*/
    t[87],
    Rl
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      U(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && pt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Le(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Te(
          r,
          /*$$scope*/
          a[87],
          l,
          qh
        ) : Oe(
          /*$$scope*/
          a[87]
        ),
        Rl
      );
    },
    i(a) {
      i || (I(s, a), i = !0);
    },
    o(a) {
      T(s, a), i = !1;
    },
    d(a) {
      a && F(n), s && s.d(a);
    }
  };
}
function Nl(t) {
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
    $$slots: { default: [Qh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new Qo({ props: r }), t[59](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[59](null), $(e, s);
    }
  };
}
function Pl(t) {
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
    $$slots: { default: [Zh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new lr({ props: r }), t[58](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[58](null), $(e, s);
    }
  };
}
function Zh(t) {
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
  ), s = Se(
    r,
    t,
    /*$$scope*/
    t[87],
    Ol
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      U(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && pt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Le(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Te(
          r,
          /*$$scope*/
          a[87],
          l,
          jh
        ) : Oe(
          /*$$scope*/
          a[87]
        ),
        Ol
      );
    },
    i(a) {
      i || (I(s, a), i = !0);
    },
    o(a) {
      T(s, a), i = !1;
    },
    d(a) {
      a && F(n), s && s.d(a);
    }
  };
}
function Qh(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && Pl(t);
  return {
    c() {
      i && i.c(), e = Ke();
    },
    m(r, s) {
      i && i.m(r, s), U(r, e, s), n = !0;
    },
    p(r, s) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && I(i, 1)) : (i = Pl(r), i.c(), I(i, 1), i.m(e.parentNode, e)) : i && (we(), T(i, 1, 1, () => {
        i = null;
      }), Fe());
    },
    i(r) {
      n || (I(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      r && F(e), i && i.d(r);
    }
  };
}
function Jh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Se(
    n,
    t,
    /*$$scope*/
    t[87],
    Ll
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
      33554432) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Te(
          n,
          /*$$scope*/
          r[87],
          s,
          Gh
        ) : Oe(
          /*$$scope*/
          r[87]
        ),
        Ll
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function xh(t) {
  let e, n, i, r, s, a, l, o, u, c;
  const f = (
    /*#slots*/
    t[56].prefix
  ), d = Se(
    f,
    t,
    /*$$scope*/
    t[87],
    Sl
  );
  let h = (
    /*prefix*/
    t[20] != null && Hl(t)
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
  function _(g) {
    t[69](g);
  }
  function p(g) {
    t[70](g);
  }
  function v(g) {
    t[71](g);
  }
  function b(g) {
    t[72](g);
  }
  let C = {};
  for (let g = 0; g < m.length; g += 1)
    C = K(C, m[g]);
  /*value*/
  t[0] !== void 0 && (C.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (C.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (C.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (C.invalid = /*invalid*/
  t[1]), i = new Oh({ props: C }), t[68](i), le.push(() => It(i, "value", _)), le.push(() => It(i, "files", p)), le.push(() => It(i, "dirty", v)), le.push(() => It(i, "invalid", b)), i.$on(
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
    t[21] != null && wl(t)
  );
  const R = (
    /*#slots*/
    t[56].suffix
  ), M = Se(
    R,
    t,
    /*$$scope*/
    t[87],
    Cl
  );
  return {
    c() {
      d && d.c(), e = oe(), h && h.c(), n = oe(), te(i.$$.fragment), o = oe(), A && A.c(), u = oe(), M && M.c();
    },
    m(g, O) {
      d && d.m(g, O), U(g, e, O), h && h.m(g, O), U(g, n, O), x(i, g, O), U(g, o, O), A && A.m(g, O), U(g, u, O), M && M.m(g, O), c = !0;
    },
    p(g, O) {
      d && d.p && (!c || O[2] & /*$$scope*/
      33554432) && Le(
        d,
        f,
        g,
        /*$$scope*/
        g[87],
        c ? Te(
          f,
          /*$$scope*/
          g[87],
          O,
          Bh
        ) : Oe(
          /*$$scope*/
          g[87]
        ),
        Sl
      ), /*prefix*/
      g[20] != null ? h ? (h.p(g, O), O[0] & /*prefix*/
      1048576 && I(h, 1)) : (h = Hl(g), h.c(), I(h, 1), h.m(n.parentNode, n)) : h && (we(), T(h, 1, 1, () => {
        h = null;
      }), Fe());
      const B = O[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | O[1] & /*$$restProps*/
      32768 ? de(m, [
        O[0] & /*type*/
        262144 && { type: (
          /*type*/
          g[18]
        ) },
        O[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          g[12]
        ) },
        O[0] & /*required*/
        8192 && { required: (
          /*required*/
          g[13]
        ) },
        O[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          g[19]
        ) },
        O[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          g[27]
        ) },
        O[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          g[27]
        ) },
        O[0] & /*noLabel, label*/
        196608 && be(
          /*noLabel*/
          g[16] && /*label*/
          g[17] != null ? { placeholder: (
            /*label*/
            g[17]
          ) } : {}
        ),
        O[1] & /*$$restProps*/
        32768 && be(Ge(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !r && O[0] & /*value*/
      1 && (r = !0, B.value = /*value*/
      g[0], vt(() => r = !1)), !s && O[0] & /*files*/
      8 && (s = !0, B.files = /*files*/
      g[3], vt(() => s = !1)), !a && O[0] & /*dirty*/
      16 && (a = !0, B.dirty = /*dirty*/
      g[4], vt(() => a = !1)), !l && O[0] & /*invalid*/
      2 && (l = !0, B.invalid = /*invalid*/
      g[1], vt(() => l = !1)), i.$set(B), /*suffix*/
      g[21] != null ? A ? (A.p(g, O), O[0] & /*suffix*/
      2097152 && I(A, 1)) : (A = wl(g), A.c(), I(A, 1), A.m(u.parentNode, u)) : A && (we(), T(A, 1, 1, () => {
        A = null;
      }), Fe()), M && M.p && (!c || O[2] & /*$$scope*/
      33554432) && Le(
        M,
        R,
        g,
        /*$$scope*/
        g[87],
        c ? Te(
          R,
          /*$$scope*/
          g[87],
          O,
          Uh
        ) : Oe(
          /*$$scope*/
          g[87]
        ),
        Cl
      );
    },
    i(g) {
      c || (I(d, g), I(h), I(i.$$.fragment, g), I(A), I(M, g), c = !0);
    },
    o(g) {
      T(d, g), T(h), T(i.$$.fragment, g), T(A), T(M, g), c = !1;
    },
    d(g) {
      g && (F(e), F(n), F(o), F(u)), d && d.d(g), h && h.d(g), t[68](null), $(i, g), A && A.d(g), M && M.d(g);
    }
  };
}
function $h(t) {
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
    h = K(h, u[p]);
  /*value*/
  t[0] !== void 0 && (h.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (h.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (h.invalid = /*invalid*/
  t[1]), n = new Mh({ props: h }), t[60](n), le.push(() => It(n, "value", c)), le.push(() => It(n, "dirty", f)), le.push(() => It(n, "invalid", d)), n.$on(
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
  ), _ = Se(
    m,
    t,
    /*$$scope*/
    t[87],
    Tl
  );
  return {
    c() {
      e = ee("span"), te(n.$$.fragment), a = oe(), _ && _.c(), N(e, "class", l = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(p, v) {
      U(p, e, v), x(n, e, null), Q(e, a), _ && _.m(e, null), o = !0;
    },
    p(p, v) {
      const b = v[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | v[1] & /*$$restProps*/
      32768 ? de(u, [
        v[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        v[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        v[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        v[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        v[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        v[1] & /*$$restProps*/
        32768 && be(Ge(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && v[0] & /*value*/
      1 && (i = !0, b.value = /*value*/
      p[0], vt(() => i = !1)), !r && v[0] & /*dirty*/
      16 && (r = !0, b.dirty = /*dirty*/
      p[4], vt(() => r = !1)), !s && v[0] & /*invalid*/
      2 && (s = !0, b.invalid = /*invalid*/
      p[1], vt(() => s = !1)), n.$set(b), _ && _.p && (!o || v[2] & /*$$scope*/
      33554432) && Le(
        _,
        m,
        p,
        /*$$scope*/
        p[87],
        o ? Te(
          m,
          /*$$scope*/
          p[87],
          v,
          Vh
        ) : Oe(
          /*$$scope*/
          p[87]
        ),
        Tl
      ), (!o || v[1] & /*$$restProps*/
      32768 && l !== (l = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && N(e, "class", l);
    },
    i(p) {
      o || (I(n.$$.fragment, p), I(_, p), o = !0);
    },
    o(p) {
      T(n.$$.fragment, p), T(_, p), o = !1;
    },
    d(p) {
      p && F(e), t[60](null), $(n), _ && _.d(p);
    }
  };
}
function Hl(t) {
  let e, n;
  return e = new Ah({
    props: {
      $$slots: { default: [em] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function em(t) {
  let e;
  return {
    c() {
      e = ct(
        /*prefix*/
        t[20]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i[0] & /*prefix*/
      1048576 && pt(
        e,
        /*prefix*/
        n[20]
      );
    },
    d(n) {
      n && F(e);
    }
  };
}
function wl(t) {
  let e, n;
  return e = new Ch({
    props: {
      $$slots: { default: [tm] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function tm(t) {
  let e;
  return {
    c() {
      e = ct(
        /*suffix*/
        t[21]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i[0] & /*suffix*/
      2097152 && pt(
        e,
        /*suffix*/
        n[21]
      );
    },
    d(n) {
      n && F(e);
    }
  };
}
function nm(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Se(
    n,
    t,
    /*$$scope*/
    t[87],
    Al
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
      33554432) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Te(
          n,
          /*$$scope*/
          r[87],
          s,
          Fh
        ) : Oe(
          /*$$scope*/
          r[87]
        ),
        Al
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Fl(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[46],
    "ripple$"
  )];
  let r = {};
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new Zo({ props: r }), t[77](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[77](null), $(e, s);
    }
  };
}
function Ul(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [im] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new yh({ props: r }), e.$on(
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      $(e, s);
    }
  };
}
function im(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = Se(
    n,
    t,
    /*$$scope*/
    t[87],
    bl
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
      33554432) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Te(
          n,
          /*$$scope*/
          r[87],
          s,
          kh
        ) : Oe(
          /*$$scope*/
          r[87]
        ),
        bl
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function rm(t) {
  let e, n, i, r, s;
  const a = [zh, Wh], l = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(t), n = l[e] = a[e](t);
  let u = (
    /*$$slots*/
    t[47].helper && Ul(t)
  );
  return {
    c() {
      n.c(), i = oe(), u && u.c(), r = Ke();
    },
    m(c, f) {
      l[e].m(c, f), U(c, i, f), u && u.m(c, f), U(c, r, f), s = !0;
    },
    p(c, f) {
      n.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && I(u, 1)) : (u = Ul(c), u.c(), I(u, 1), u.m(r.parentNode, r)) : u && (we(), T(u, 1, 1, () => {
        u = null;
      }), Fe());
    },
    i(c) {
      s || (I(n), I(u), s = !0);
    },
    o(c) {
      T(n), T(u), s = !1;
    },
    d(c) {
      c && (F(i), F(r)), l[e].d(c), u && u.d(c);
    }
  };
}
const Bl = ([t, e]) => `${t}: ${e};`, Vl = ([t, e]) => `${t}: ${e};`;
function sm(t, e, n) {
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
  const o = Is(a), { applyPassive: u } = Yo, c = rt(Qe());
  let f = () => {
  };
  function d(H) {
    return H === f;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: _ = "" } = e, { ripple: p = !0 } = e, { disabled: v = !1 } = e, { required: b = !1 } = e, { textarea: C = !1 } = e, { variant: A = C ? "outlined" : "standard" } = e, { noLabel: R = !1 } = e, { label: M = void 0 } = e, { type: g = "text" } = e, { value: O = s.input$emptyValueUndefined ? void 0 : f } = e, { files: B = f } = e;
  const y = !d(O) || !d(B);
  d(O) && (O = void 0), d(B) && (B = null);
  let { invalid: S = f } = e, { updateInvalid: E = d(S) } = e;
  d(S) && (S = !1);
  let { dirty: L = !1 } = e, { prefix: P = void 0 } = e, { suffix: q = void 0 } = e, { validateOnValueChange: j = E } = e, { useNativeValidation: X = E } = e, { withLeadingIcon: k = f } = e, { withTrailingIcon: D = f } = e, { input: V = void 0 } = e, { floatingLabel: ue = void 0 } = e, { lineRipple: Ne = void 0 } = e, { notchedOutline: Ae = void 0 } = e, Ye, z, J = {}, Re = {}, De, He = !1, ie = qe("SMUI:addLayoutListener"), W, We, Ve = new Promise((H) => We = H), St, Z, Me, je, Ue = O;
  ie && (W = ie(Y)), ut(() => {
    if (n(54, z = new ah(
      {
        // getRootAdapterMethods_
        addClass: ft,
        removeClass: et,
        hasClass: ht,
        registerTextFieldInteractionHandler: (H, _t) => ve().addEventListener(H, _t),
        deregisterTextFieldInteractionHandler: (H, _t) => ve().removeEventListener(H, _t),
        registerValidationAttributeChangeHandler: (H) => {
          const _t = (di) => di.map((hi) => hi.attributeName).filter((hi) => hi), wi = new MutationObserver((di) => {
            X && H(_t(di));
          }), Nr = { attributes: !0 };
          return V && wi.observe(V.getElement(), Nr), wi;
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
        closeOutline: () => Ae && Ae.closeNotch(),
        hasOutline: () => !!Ae,
        notchOutline: (H) => Ae && Ae.notch(H)
      },
      {
        get helperText() {
          return Me;
        },
        get characterCounter() {
          return je;
        },
        get leadingIcon() {
          return St;
        },
        get trailingIcon() {
          return Z;
        }
      }
    )), y) {
      if (V == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      z.init();
    } else
      ys().then(() => {
        if (V == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        z.init();
      });
    return We(), () => {
      z.destroy();
    };
  }), rn(() => {
    W && W();
  });
  function Ot(H) {
    n(29, St = H.detail);
  }
  function G(H) {
    n(30, Z = H.detail);
  }
  function se(H) {
    n(32, je = H.detail);
  }
  function ne(H) {
    n(27, De = H.detail);
  }
  function Xe(H) {
    n(31, Me = H.detail);
  }
  function ht(H) {
    var _t;
    return H in J ? (_t = J[H]) !== null && _t !== void 0 ? _t : null : ve().classList.contains(H);
  }
  function ft(H) {
    J[H] || n(25, J[H] = !0, J);
  }
  function et(H) {
    (!(H in J) || J[H]) && n(25, J[H] = !1, J);
  }
  function ke(H, _t) {
    Re[H] != _t && (_t === "" || _t == null ? (delete Re[H], n(26, Re)) : n(26, Re[H] = _t, Re));
  }
  function ae() {
    V == null || V.focus();
  }
  function Kt() {
    V == null || V.blur();
  }
  function Y() {
    if (z) {
      const H = z.shouldFloat;
      z.notchOutline(H);
    }
  }
  function ve() {
    return Ye;
  }
  function Ce(H) {
    le[H ? "unshift" : "push"](() => {
      ue = H, n(5, ue);
    });
  }
  function at(H) {
    le[H ? "unshift" : "push"](() => {
      ue = H, n(5, ue);
    });
  }
  function sn(H) {
    le[H ? "unshift" : "push"](() => {
      Ae = H, n(7, Ae);
    });
  }
  function fi(H) {
    le[H ? "unshift" : "push"](() => {
      V = H, n(2, V);
    });
  }
  function fr(H) {
    O = H, n(0, O);
  }
  function dr(H) {
    L = H, n(4, L);
  }
  function hr(H) {
    S = H, n(1, S), n(54, z), n(19, E);
  }
  const mr = () => n(28, He = !1), pr = () => n(28, He = !0), wn = (H) => Ie(Ye, "blur", H), gr = (H) => Ie(Ye, "focus", H);
  function Pi(H) {
    le[H ? "unshift" : "push"](() => {
      V = H, n(2, V);
    });
  }
  function _r(H) {
    O = H, n(0, O);
  }
  function Hi(H) {
    B = H, n(3, B);
  }
  function Fn(H) {
    L = H, n(4, L);
  }
  function br(H) {
    S = H, n(1, S), n(54, z), n(19, E);
  }
  const vr = () => n(28, He = !1), Ir = () => n(28, He = !0), Er = (H) => Ie(Ye, "blur", H), yr = (H) => Ie(Ye, "focus", H);
  function Ar(H) {
    le[H ? "unshift" : "push"](() => {
      Ne = H, n(6, Ne);
    });
  }
  function Cr(H) {
    le[H ? "unshift" : "push"](() => {
      Ye = H, n(24, Ye);
    });
  }
  const Sr = () => n(29, St = void 0), Tr = () => n(30, Z = void 0), Lr = () => n(32, je = void 0);
  function Or(H) {
    le[H ? "unshift" : "push"](() => {
      Ye = H, n(24, Ye);
    });
  }
  const Rr = () => n(29, St = void 0), Dr = () => n(30, Z = void 0), Mr = () => {
    n(27, De = void 0), n(31, Me = void 0);
  }, kr = () => n(32, je = void 0);
  return t.$$set = (H) => {
    e = K(K({}, e), nt(H)), n(46, s = he(e, r)), "use" in H && n(8, h = H.use), "class" in H && n(9, m = H.class), "style" in H && n(10, _ = H.style), "ripple" in H && n(11, p = H.ripple), "disabled" in H && n(12, v = H.disabled), "required" in H && n(13, b = H.required), "textarea" in H && n(14, C = H.textarea), "variant" in H && n(15, A = H.variant), "noLabel" in H && n(16, R = H.noLabel), "label" in H && n(17, M = H.label), "type" in H && n(18, g = H.type), "value" in H && n(0, O = H.value), "files" in H && n(3, B = H.files), "invalid" in H && n(1, S = H.invalid), "updateInvalid" in H && n(19, E = H.updateInvalid), "dirty" in H && n(4, L = H.dirty), "prefix" in H && n(20, P = H.prefix), "suffix" in H && n(21, q = H.suffix), "validateOnValueChange" in H && n(48, j = H.validateOnValueChange), "useNativeValidation" in H && n(49, X = H.useNativeValidation), "withLeadingIcon" in H && n(22, k = H.withLeadingIcon), "withTrailingIcon" in H && n(23, D = H.withTrailingIcon), "input" in H && n(2, V = H.input), "floatingLabel" in H && n(5, ue = H.floatingLabel), "lineRipple" in H && n(6, Ne = H.lineRipple), "notchedOutline" in H && n(7, Ae = H.notchedOutline), "$$scope" in H && n(87, l = H.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = V && V.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && z && z.isValid() !== !S && (E ? n(1, S = !z.isValid()) : z.setValid(!S)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && z && z.getValidateOnValueChange() !== j && z.setValidateOnValueChange(d(j) ? !1 : j), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && z && z.setUseNativeValidation(d(X) ? !0 : X), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && z && z.setDisabled(v), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && z && y && Ue !== O) {
      n(55, Ue = O);
      const H = `${O}`;
      z.getValue() !== H && z.setValue(H);
    }
  }, [
    O,
    S,
    V,
    B,
    L,
    ue,
    Ne,
    Ae,
    h,
    m,
    _,
    p,
    v,
    b,
    C,
    A,
    R,
    M,
    g,
    E,
    P,
    q,
    k,
    D,
    Ye,
    J,
    Re,
    De,
    He,
    St,
    Z,
    Me,
    je,
    i,
    c,
    d,
    y,
    Ve,
    Ot,
    G,
    se,
    ne,
    Xe,
    ft,
    et,
    ke,
    s,
    o,
    j,
    X,
    ae,
    Kt,
    Y,
    ve,
    z,
    Ue,
    a,
    Ce,
    at,
    sn,
    fi,
    fr,
    dr,
    hr,
    mr,
    pr,
    wn,
    gr,
    Pi,
    _r,
    Hi,
    Fn,
    br,
    vr,
    Ir,
    Er,
    yr,
    Ar,
    Cr,
    Sr,
    Tr,
    Lr,
    Or,
    Rr,
    Dr,
    Mr,
    kr,
    l
  ];
}
class Jo extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      sm,
      rm,
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
function lm(t) {
  let e;
  return {
    c() {
      e = ct(
        /*content*/
        t[7]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      128 && pt(
        e,
        /*content*/
        n[7]
      );
    },
    i: $e,
    o: $e,
    d(n) {
      n && F(e);
    }
  };
}
function am(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), i = Se(
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
      16384) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[14],
        e ? Te(
          n,
          /*$$scope*/
          r[14],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function om(t) {
  let e, n, i, r, s, a, l, o, u, c;
  const f = [am, lm], d = [];
  function h(p, v) {
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
  ], _ = {};
  for (let p = 0; p < m.length; p += 1)
    _ = K(_, m[p]);
  return {
    c() {
      e = ee("i"), i.c(), me(e, _);
    },
    m(p, v) {
      U(p, e, v), d[n].m(e, null), t[16](e), o = !0, u || (c = [
        fe(l = xe.call(
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
    p(p, [v]) {
      let b = n;
      n = h(p), n === b ? d[n].p(p, v) : (we(), T(d[b], 1, 1, () => {
        d[b] = null;
      }), Fe(), i = d[n], i ? i.p(p, v) : (i = d[n] = f[n](p), i.c()), I(i, 1), i.m(e, null)), me(e, _ = de(m, [
        (!o || v & /*className*/
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
        (!o || v & /*tabindex*/
        8 && s !== (s = /*tabindex*/
        p[3] === -1 ? "true" : "false")) && { "aria-hidden": s },
        (!o || v & /*role, disabled*/
        20 && a !== (a = /*role*/
        p[2] === "button" ? (
          /*disabled*/
          p[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": a },
        v & /*roleProps*/
        256 && /*roleProps*/
        p[8],
        v & /*internalAttrs*/
        64 && /*internalAttrs*/
        p[6],
        v & /*$$restProps*/
        4096 && /*$$restProps*/
        p[12]
      ])), l && ge(l.update) && v & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (I(i), o = !0);
    },
    o(p) {
      T(i), o = !1;
    },
    d(p) {
      p && F(e), d[n].d(), t[16](null), u = !1, Ze(c);
    }
  };
}
function um(t, e, n) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let s = he(e, r), a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt(Qe());
  let { use: c = [] } = e, { class: f = "" } = e, { role: d = void 0 } = e, { tabindex: h = d === "button" ? 0 : -1 } = e, { disabled: m = !1 } = e, _, p, v = {};
  const b = qe("SMUI:textfield:icon:leading");
  lt(t, b, (y) => n(18, a = y));
  const C = a;
  let A;
  ut(() => (p = new uh({
    getAttr: R,
    setAttr: M,
    removeAttr: g,
    setContent: (y) => {
      n(7, A = y);
    },
    registerInteractionHandler: (y, S) => O().addEventListener(y, S),
    deregisterInteractionHandler: (y, S) => O().removeEventListener(y, S),
    notifyIconAction: () => Ie(O(), "SMUITextField:icon", void 0, void 0, !0)
  }), Ie(
    O(),
    C ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    p
  ), p.init(), () => {
    Ie(
      O(),
      C ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      p
    ), p.destroy();
  }));
  function R(y) {
    var S;
    return y in v ? (S = v[y]) !== null && S !== void 0 ? S : null : O().getAttribute(y);
  }
  function M(y, S) {
    v[y] !== S && n(6, v[y] = S, v);
  }
  function g(y) {
    (!(y in v) || v[y] != null) && n(6, v[y] = void 0, v);
  }
  function O() {
    return _;
  }
  function B(y) {
    le[y ? "unshift" : "push"](() => {
      _ = y, n(5, _);
    });
  }
  return t.$$set = (y) => {
    e = K(K({}, e), nt(y)), n(12, s = he(e, r)), "use" in y && n(0, c = y.use), "class" in y && n(1, f = y.class), "role" in y && n(2, d = y.role), "tabindex" in y && n(3, h = y.tabindex), "disabled" in y && n(4, m = y.disabled), "$$scope" in y && n(14, o = y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, tabindex*/
    12 && n(8, i = { role: d, tabindex: h });
  }, [
    c,
    f,
    d,
    h,
    m,
    _,
    v,
    A,
    i,
    u,
    b,
    C,
    s,
    O,
    o,
    l,
    B
  ];
}
class cm extends ye {
  constructor(e) {
    super(), Ee(this, e, um, om, _e, {
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
function fm(t) {
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
    t[0]), e = new Jo({ props: s }), le.push(() => It(e, "value", r)), {
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
        a[0], vt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (I(e.$$.fragment, a), i = !0);
      },
      o(a) {
        T(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function dm(t) {
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
    $$slots: { leadingIcon: [mm] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new Jo({ props: s }), le.push(() => It(e, "value", r)), {
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
        a[0], vt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (I(e.$$.fragment, a), i = !0);
      },
      o(a) {
        T(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function hm(t) {
  let e;
  return {
    c() {
      e = ct(
        /*icon*/
        t[3]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      8 && pt(
        e,
        /*icon*/
        n[3]
      );
    },
    d(n) {
      n && F(e);
    }
  };
}
function mm(t) {
  let e, n;
  return e = new cm({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [hm] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function pm(t) {
  let e, n, i, r;
  const s = [dm, fm], a = [];
  function l(o, u) {
    return (
      /*icon*/
      o[3] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ke();
    },
    m(o, u) {
      a[e].m(o, u), U(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (we(), T(a[c], 1, 1, () => {
        a[c] = null;
      }), Fe(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), I(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (I(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      o && F(i), a[e].d(o);
    }
  };
}
function gm(t, e, n) {
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
class _m extends ye {
  constructor(e) {
    super(), Ee(this, e, gm, pm, _e, {
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
var bm = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, vm = {
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
}, gi = {
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
}, Ct;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(Ct || (Ct = {}));
var kn;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(kn || (kn = {}));
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
var mn, an, Je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
mn = {}, mn["" + Je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", mn["" + Je.LIST_ITEM_CLASS] = "mdc-list-item", mn["" + Je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", mn["" + Je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", mn["" + Je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", mn["" + Je.ROOT] = "mdc-list";
var Vn = (an = {}, an["" + Je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", an["" + Je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", an["" + Je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", an["" + Je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", an["" + Je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", an["" + Je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", an["" + Je.ROOT] = "mdc-deprecated-list", an), pn = {
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
    .` + Vn[Je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Vn[Je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Je.LIST_ITEM_CLASS + ` a,
    .` + Je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Vn[Je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Vn[Je.LIST_ITEM_CLASS] + ` a,
    .` + Vn[Je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Vn[Je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, yt = {
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
var Im = ["input", "button", "textarea", "select"], Yt = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Im.indexOf(n) === -1 && t.preventDefault();
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
function Em() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function ym(t, e) {
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
function fs(t, e) {
  var n = t.nextChar, i = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, s = t.focusedItemIndex, a = t.skipFocus, l = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    $o(e);
  }, yt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Am(r, s, l, e) : o = Cm(r, l, e), o !== -1 && !a && i(o), o;
}
function Am(t, e, n, i) {
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
function Cm(t, e, n) {
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
function xo(t) {
  return t.typeaheadBuffer.length > 0;
}
function $o(t) {
  t.typeaheadBuffer = "";
}
function Gl(t, e) {
  var n = t.event, i = t.isTargetListItem, r = t.focusedItemIndex, s = t.focusItemAtIndex, a = t.sortedIndexByFirstChar, l = t.isItemAtIndexDisabled, o = bt(n) === "ArrowLeft", u = bt(n) === "ArrowUp", c = bt(n) === "ArrowRight", f = bt(n) === "ArrowDown", d = bt(n) === "Home", h = bt(n) === "End", m = bt(n) === "Enter", _ = bt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || o || u || c || f || d || h || m)
    return -1;
  var p = !_ && n.key.length === 1;
  if (p) {
    Yt(n);
    var v = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return fs(v, e);
  }
  if (!_)
    return -1;
  i && Yt(n);
  var b = i && xo(e);
  if (b) {
    var v = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return fs(v, e);
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
function Sm(t) {
  return t instanceof Array;
}
var Tm = ["Alt", "Control", "Meta", "Shift"];
function jl(t) {
  var e = new Set(t ? Tm.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(i) {
      return e.has(i);
    }) && n.length === e.size;
  };
}
var Lm = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = yt.UNSET_INDEX, i.focusedItemIndex = yt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Em(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return pn;
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
        return yt;
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
      if (n !== yt.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(n, Je.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = yt.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
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
      return this.hasTypeahead && xo(this.typeaheadState);
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
      var s = this, a, l = bt(n) === "ArrowLeft", o = bt(n) === "ArrowUp", u = bt(n) === "ArrowRight", c = bt(n) === "ArrowDown", f = bt(n) === "Home", d = bt(n) === "End", h = bt(n) === "Enter", m = bt(n) === "Spacebar", _ = this.isVertical && c || !this.isVertical && u, p = this.isVertical && o || !this.isVertical && l, v = n.key === "A" || n.key === "a", b = jl(n);
      if (this.adapter.isRootFocused()) {
        if ((p || d) && b([]))
          n.preventDefault(), this.focusLastElement();
        else if ((_ || f) && b([]))
          n.preventDefault(), this.focusFirstElement();
        else if (p && b(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusLastElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (_ && b(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusFirstElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        }
        if (this.hasTypeahead) {
          var A = {
            event: n,
            focusItemAtIndex: function(g) {
              s.focusItemAtIndex(g);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(g) {
              return s.isIndexDisabled(g);
            }
          };
          Gl(A, this.typeaheadState);
        }
        return;
      }
      var R = this.adapter.getFocusedElementIndex();
      if (!(R === -1 && (R = r, R < 0))) {
        if (_ && b([]))
          Yt(n), this.focusNextElement(R);
        else if (p && b([]))
          Yt(n), this.focusPrevElement(R);
        else if (_ && b(["Shift"]) && this.isCheckboxList) {
          Yt(n);
          var C = this.focusNextElement(R);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (p && b(["Shift"]) && this.isCheckboxList) {
          Yt(n);
          var C = this.focusPrevElement(R);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (f && b([]))
          Yt(n), this.focusFirstElement();
        else if (d && b([]))
          Yt(n), this.focusLastElement();
        else if (f && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Yt(n), this.isIndexDisabled(R))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, R, R);
        } else if (d && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (Yt(n), this.isIndexDisabled(R))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(R, this.adapter.getListItemCount() - 1, R);
        } else if (v && b(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || m) && b([])) {
          if (i) {
            var M = n.target;
            if (M && M.tagName === "A" && h || (Yt(n), this.isIndexDisabled(R)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(R, !1), this.adapter.notifyAction(R));
          }
        } else if ((h || m) && b(["Shift"]) && this.isCheckboxList) {
          var M = n.target;
          if (M && M.tagName === "A" && h || (Yt(n), this.isIndexDisabled(R)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : R, R, R), this.adapter.notifyAction(R));
        }
        if (this.hasTypeahead) {
          var A = {
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
          Gl(A, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, i, r) {
      var s, a = jl(r);
      n !== yt.UNSET_INDEX && (this.isIndexDisabled(n) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, i), this.adapter.notifyAction(n)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (i ? (this.adapter.removeClassForElementIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, pn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, pn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === n && !i.forceUpdate)) {
        var r = Je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== yt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== yt.UNSET_INDEX && this.adapter.addClassForElementIndex(n, r), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === yt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, pn.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? pn.ARIA_CURRENT : pn.ARIA_SELECTED;
      if (this.selectedIndex !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), n !== yt.UNSET_INDEX) {
        var s = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, r, s);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? pn.ARIA_SELECTED : pn.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !i.forceUpdate) && (this.selectedIndex !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(n, r, "true"), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, s = i.isUserInteraction ? new Set(r === yt.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), l = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = s == null ? void 0 : s.has(o), c = n.indexOf(o) >= 0;
        c !== u && l.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, a, c ? "true" : "false");
      }
      this.selectedIndex = n, i.isUserInteraction && l.length && this.adapter.notifySelectionChange(l);
    }, e.prototype.toggleCheckboxRange = function(n, i, r) {
      this.lastSelectedIndex = r;
      for (var s = new Set(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex), a = !(s != null && s.has(r)), l = In([n, i].sort(), 2), o = l[0], u = l[1], c = this.getSelectionAttribute(), f = [], d = o; d <= u; d++)
        if (!this.isIndexDisabled(d)) {
          var h = s.has(d);
          a !== h && (f.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, a), this.adapter.setAttributeForElementIndex(d, c, "" + a), a ? s.add(d) : s.delete(d));
        }
      f.length && (this.selectedIndex = en([], In(s)), this.adapter.notifySelectionChange(f));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === yt.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== yt.UNSET_INDEX ? this.selectedIndex : Sm(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, i) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === yt.UNSET_INDEX;
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
      var l = this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return fs(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return ym(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      $o(this.typeaheadState);
    }, e;
  }(Lt)
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
var eu = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = kn.TOP_START, i.originCorner = kn.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return kn;
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
      this.originCorner = this.originCorner ^ Ct.RIGHT;
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
        }, gi.TRANSITION_OPEN_DURATION);
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
          }, gi.TRANSITION_CLOSE_DURATION);
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), s = this.hasBit(i, Ct.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, Ct.RIGHT) ? "right" : "left", l = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, f = u.surfaceSize, d = (n = {}, n[a] = l, n[s] = o, n);
      c.width / f.width > gi.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(a + " " + s), this.adapter.setPosition(d), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, Ct.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, i = this.measurements, r = i.viewportDistance, s = i.anchorSize, a = i.surfaceSize, l = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, Ct.BOTTOM), u, c;
      o ? (u = r.top - l + this.anchorMargin.bottom, c = r.bottom - l - this.anchorMargin.bottom) : (u = r.top - l + this.anchorMargin.top, c = r.bottom - l + s.height - this.anchorMargin.top);
      var f = c - a.height > 0;
      !f && u > c + this.openBottomBias && (n = this.setBit(n, Ct.BOTTOM));
      var d = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, Ct.FLIP_RTL), m = this.hasBit(this.anchorCorner, Ct.RIGHT) || this.hasBit(n, Ct.RIGHT), _ = !1;
      d && h ? _ = !m : _ = m;
      var p, v;
      _ ? (p = r.left + s.width + this.anchorMargin.right, v = r.right - this.anchorMargin.right) : (p = r.left + this.anchorMargin.left, v = r.right + s.width - this.anchorMargin.left);
      var b = p - a.width > 0, C = v - a.width > 0, A = this.hasBit(n, Ct.FLIP_RTL) && this.hasBit(n, Ct.RIGHT);
      return C && A && d || !b && A ? n = this.unsetBit(n, Ct.RIGHT) : (b && _ && d || b && !_ && m || !C && p >= v) && (n = this.setBit(n, Ct.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, s = this.hasBit(n, Ct.BOTTOM), a = this.hasBit(this.anchorCorner, Ct.BOTTOM), l = e.numbers.MARGIN_TO_EDGE;
      return s ? (r = i.top + this.anchorMargin.top - l, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, Ct.RIGHT), s = this.hasBit(this.anchorCorner, Ct.RIGHT);
      if (r) {
        var a = s ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return s ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, Ct.BOTTOM), s = this.hasBit(this.anchorCorner, Ct.BOTTOM), a = 0;
      return r ? a = s ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = s ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var i, r, s = this.measurements, a = s.windowScroll, l = s.viewportDistance, o = s.surfaceSize, u = s.viewportSize, c = Object.keys(n);
      try {
        for (var f = Tt(c), d = f.next(); !d.done; d = f.next()) {
          var h = d.value, m = n[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            n[h] = (u.width - o.width) / 2;
            continue;
          }
          m += l[h], this.isFixedPosition || (h === "top" ? m += a.y : h === "bottom" ? m -= a.y : h === "left" ? m += a.x : m -= a.x), n[h] = m;
        }
      } catch (_) {
        i = { error: _ };
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
      }, gi.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, i) {
      return !!(n & i);
    }, e.prototype.setBit = function(n, i) {
      return n | i;
    }, e.prototype.unsetBit = function(n, i) {
      return n ^ i;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Lt)
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
var ql = {
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
function Om(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Rm(t, e) {
  if (Om(t) && e in ql) {
    var n = t.document.createElement("div"), i = ql[e], r = i.standard, s = i.prefixed, a = r in n.style;
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
var $n = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Gn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Dm = {
  FOCUS_ROOT_INDEX: -1
}, qn;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(qn || (qn = {}));
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
var Mm = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = qn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dm;
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
        var s = this.adapter.getAttributeFromElementAtIndex(r, Gn.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(s), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(n);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, eu.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case qn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case qn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case qn.NONE:
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Gn.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, $n.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, $n.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Gn.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, i) {
      this.validatedIndex(n), i ? (this.adapter.removeClassFromElementAtIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Gn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Gn.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var i = this.adapter.getMenuItemCount(), r = n >= 0 && n < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Lt)
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
var gt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Kr = {
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
}, Ln = {
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
var km = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = Ln.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ln;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Kr;
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
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Ln.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Ln.UNSET_INDEX ? i[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(gt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(gt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(gt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, i = this.adapter.hasClass(gt.FOCUSED), r = n || i, s = this.adapter.hasClass(gt.REQUIRED);
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
      this.adapter.removeClass(gt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(gt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(gt.FOCUSED))) {
        var i = bt(n) === Be.ENTER, r = bt(n) === Be.SPACEBAR, s = bt(n) === Be.ARROW_UP, a = bt(n) === Be.ARROW_DOWN, l = n.ctrlKey || n.metaKey;
        if (!l && (!r && n.key && n.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : n.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !i && !r && !s && !a || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(gt.FOCUSED);
        if (n) {
          var r = Ln.LABEL_SCALE, s = this.adapter.getLabelWidth() * r;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(gt.INVALID), this.adapter.removeMenuClass(gt.MENU_INVALID)) : (this.adapter.addClass(gt.INVALID), this.adapter.addMenuClass(gt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== Ln.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(kn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Kr.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Kr.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Ln.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Lt)
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
var On = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, on = {
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
var Nm = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return on;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return On;
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
      return this.adapter.getAttr(On.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(on.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(on.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(on.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(on.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(on.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(on.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var i = this.adapter.hasClass(on.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(on.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), s = !n || r;
        if (s) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(On.ROLE) : this.adapter.setAttr(On.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(On.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(On.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(On.ARIA_HIDDEN, "true");
    }, e;
  }(Lt)
);
const { document: Pm } = po;
function Hm(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[34].default
  ), c = Se(
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
      ).map(Wl).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { role: "dialog" },
    /*$$restProps*/
    t[12]
  ], d = {};
  for (let h = 0; h < f.length; h += 1)
    d = K(d, f[h]);
  return {
    c() {
      e = oe(), n = ee("div"), c && c.c(), me(n, d);
    },
    m(h, m) {
      U(h, e, m), U(h, n, m), c && c.m(n, null), t[35](n), a = !0, l || (o = [
        pe(
          Pm.body,
          "click",
          /*handleBodyClick*/
          t[11],
          !0
        ),
        fe(s = xe.call(
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
      4) && Le(
        c,
        u,
        t,
        /*$$scope*/
        t[33],
        a ? Te(
          u,
          /*$$scope*/
          t[33],
          m,
          null
        ) : Oe(
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
        ).map(Wl).concat([
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
      a || (I(c, h), a = !0);
    },
    o(h) {
      T(c, h), a = !1;
    },
    d(h) {
      h && (F(e), F(n)), c && c.d(h), t[35](null), l = !1, Ze(o);
    }
  };
}
const Wl = ([t, e]) => `${t}: ${e};`;
function wm(t, e, n) {
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
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { static: m = !1 } = e, { anchor: _ = !0 } = e, { fixed: p = !1 } = e, { open: v = m } = e, { managed: b = !1 } = e, { fullWidth: C = !1 } = e, { quickOpen: A = !1 } = e, { anchorElement: R = void 0 } = e, { anchorCorner: M = void 0 } = e, { anchorMargin: g = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: O = 0 } = e, { horizontallyCenteredOnViewport: B = !1 } = e, { openBottomBias: y = 0 } = e, { neverRestoreFocus: S = !1 } = e, E, L, P = {}, q = {}, j;
  ze("SMUI:list:role", "menu"), ze("SMUI:list:item:role", "menuitem");
  const X = kn;
  ut(() => (n(7, L = new eu({
    addClass: D,
    removeClass: V,
    hasClass: k,
    hasAnchor: () => !!R,
    notifyClose: () => {
      b || n(13, v = m), v || Ie(E, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      b || n(13, v = m), v || Ie(E, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      b || n(13, v = !0), v && Ie(E, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      v || Ie(E, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (W) => E.contains(W),
    isRtl: () => getComputedStyle(E).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (W) => {
      n(9, q["transform-origin"] = W, q);
    },
    isFocused: () => document.activeElement === E,
    saveFocus: () => {
      var W;
      j = (W = document.activeElement) !== null && W !== void 0 ? W : void 0;
    },
    restoreFocus: () => {
      !S && (!E || E.contains(document.activeElement)) && j && document.contains(j) && "focus" in j && j.focus();
    },
    getInnerDimensions: () => ({
      width: E.offsetWidth,
      height: E.offsetHeight
    }),
    getAnchorDimensions: () => R ? R.getBoundingClientRect() : null,
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
  })), Ie(E, "SMUIMenuSurface:mount", {
    get open() {
      return v;
    },
    set open(W) {
      n(13, v = W);
    },
    closeProgrammatic: ue
  }), L.init(), () => {
    var W;
    const We = L.isHoistedElement;
    L.destroy(), We && ((W = E.parentNode) === null || W === void 0 || W.removeChild(E));
  })), rn(() => {
    var ie;
    _ && E && ((ie = E.parentElement) === null || ie === void 0 || ie.classList.remove("mdc-menu-surface--anchor"));
  });
  function k(ie) {
    return ie in P ? P[ie] : De().classList.contains(ie);
  }
  function D(ie) {
    P[ie] || n(8, P[ie] = !0, P);
  }
  function V(ie) {
    (!(ie in P) || P[ie]) && n(8, P[ie] = !1, P);
  }
  function ue(ie) {
    L.close(ie), n(13, v = !1);
  }
  function Ne(ie) {
    L && v && !b && L.handleBodyClick(ie);
  }
  function Ae() {
    return v;
  }
  function Ye(ie) {
    n(13, v = ie);
  }
  function z(ie, W) {
    return L.setAbsolutePosition(ie, W);
  }
  function J(ie) {
    return L.setIsHoisted(ie);
  }
  function Re() {
    return L.isFixed();
  }
  function De() {
    return E;
  }
  function He(ie) {
    le[ie ? "unshift" : "push"](() => {
      E = ie, n(6, E);
    });
  }
  return t.$$set = (ie) => {
    e = K(K({}, e), nt(ie)), n(12, r = he(e, i)), "use" in ie && n(0, f = ie.use), "class" in ie && n(1, d = ie.class), "style" in ie && n(2, h = ie.style), "static" in ie && n(3, m = ie.static), "anchor" in ie && n(15, _ = ie.anchor), "fixed" in ie && n(4, p = ie.fixed), "open" in ie && n(13, v = ie.open), "managed" in ie && n(16, b = ie.managed), "fullWidth" in ie && n(5, C = ie.fullWidth), "quickOpen" in ie && n(17, A = ie.quickOpen), "anchorElement" in ie && n(14, R = ie.anchorElement), "anchorCorner" in ie && n(18, M = ie.anchorCorner), "anchorMargin" in ie && n(19, g = ie.anchorMargin), "maxHeight" in ie && n(20, O = ie.maxHeight), "horizontallyCenteredOnViewport" in ie && n(21, B = ie.horizontallyCenteredOnViewport), "openBottomBias" in ie && n(22, y = ie.openBottomBias), "neverRestoreFocus" in ie && n(23, S = ie.neverRestoreFocus), "$$scope" in ie && n(33, a = ie.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | t.$$.dirty[1] & /*_b, _c*/
    3 && E && _ && !(!(n(30, l = E.parentElement) === null || l === void 0) && l.classList.contains("mdc-menu-surface--anchor")) && (n(31, o = E.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), n(14, R = n(32, u = E.parentElement) !== null && u !== void 0 ? u : void 0)), t.$$.dirty[0] & /*instance, open*/
    8320 && L && L.isOpen() !== v && (v ? L.open() : L.close()), t.$$.dirty[0] & /*instance, quickOpen*/
    131200 && L && L.setQuickOpen(A), t.$$.dirty[0] & /*instance, fixed*/
    144 && L && L.setFixedPosition(p), t.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && L && L.setMaxHeight(O), t.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && L && L.setIsHorizontallyCenteredOnViewport(B), t.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && L && M != null && (typeof M == "string" ? L.setAnchorCorner(X[M]) : L.setAnchorCorner(M)), t.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && L && L.setAnchorMargin(g), t.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && L && L.setOpenBottomBias(y);
  }, [
    f,
    d,
    h,
    m,
    p,
    C,
    E,
    L,
    P,
    q,
    c,
    Ne,
    r,
    v,
    R,
    _,
    b,
    A,
    M,
    g,
    O,
    B,
    y,
    S,
    Ae,
    Ye,
    z,
    J,
    Re,
    De,
    l,
    o,
    u,
    a,
    s,
    He
  ];
}
class Fm extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      wm,
      Hm,
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
function Um(t, { addClass: e = (i) => t.classList.add(i), removeClass: n = (i) => t.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Bm(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].default
  ), i = Se(
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
      4194304) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[22],
        e ? Te(
          n,
          /*$$scope*/
          r[22],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[22]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Vm(t) {
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
    $$slots: { default: [Bm] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = K(a, r[l]);
  return (
    /*open*/
    t[0] !== void 0 && (a.open = /*open*/
    t[0]), e = new Fm({ props: a }), t[18](e), le.push(() => It(e, "open", s)), e.$on(
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
        l[0], vt(() => n = !1)), e.$set(u);
      },
      i(l) {
        i || (I(e.$$.fragment, l), i = !0);
      },
      o(l) {
        T(e.$$.fragment, l), i = !1;
      },
      d(l) {
        t[18](null), $(e, l);
      }
    }
  );
}
function Gm(t, e, n) {
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
  const { closest: o } = rr, u = rt(Qe());
  let { use: c = [] } = e, { class: f = "" } = e, { open: d = !1 } = e, h, m, _, p;
  ut(() => (n(3, m = new Mm({
    addClassToElementAtIndex: (P, q) => {
      p.addClassForElementIndex(P, q);
    },
    removeClassFromElementAtIndex: (P, q) => {
      p.removeClassForElementIndex(P, q);
    },
    addAttributeToElementAtIndex: (P, q, j) => {
      p.setAttributeForElementIndex(P, q, j);
    },
    removeAttributeFromElementAtIndex: (P, q) => {
      p.removeAttributeForElementIndex(P, q);
    },
    getAttributeFromElementAtIndex: (P, q) => p.getAttributeFromElementIndex(P, q),
    elementContainsClass: (P, q) => P.classList.contains(q),
    closeSurface: (P) => {
      _.closeProgrammatic(P), Ie(B(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (P) => p.getOrderedList().map((q) => q.element).indexOf(P),
    notifySelected: (P) => Ie(
      B(),
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
    isSelectableItemAtIndex: (P) => !!o(p.getOrderedList()[P].element, `.${$n.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (P) => {
      const q = p.getOrderedList(), j = o(q[P].element, `.${$n.MENU_SELECTION_GROUP}`), X = j == null ? void 0 : j.querySelector(`.${$n.MENU_SELECTED_LIST_ITEM}`);
      return X ? q.map((k) => k.element).indexOf(X) : -1;
    }
  })), Ie(B(), "SMUIMenu:mount", m), m.init(), () => {
    m.destroy();
  }));
  function v(P) {
    m && m.handleKeydown(P);
  }
  function b(P) {
    _ || (_ = P.detail);
  }
  function C(P) {
    p || n(4, p = P.detail);
  }
  function A() {
    return d;
  }
  function R(P) {
    n(0, d = P);
  }
  function M(P) {
    m.setDefaultFocusState(P);
  }
  function g() {
    return m.getSelectedIndex();
  }
  function O() {
    return h;
  }
  function B() {
    return h.getElement();
  }
  function y(P) {
    le[P ? "unshift" : "push"](() => {
      h = P, n(2, h);
    });
  }
  function S(P) {
    d = P, n(0, d);
  }
  const E = () => m && m.handleMenuSurfaceOpened(), L = (P) => m && m.handleItemAction(p.getOrderedList()[P.detail.index].element);
  return t.$$set = (P) => {
    e = K(K({}, e), nt(P)), n(9, s = he(e, r)), "use" in P && n(10, c = P.use), "class" in P && n(1, f = P.class), "open" in P && n(0, d = P.open), "$$scope" in P && n(22, l = P.$$scope);
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
    v,
    b,
    C,
    s,
    c,
    A,
    R,
    M,
    g,
    O,
    B,
    a,
    y,
    S,
    E,
    L,
    l
  ];
}
class jm extends ye {
  constructor(e) {
    super(), Ee(this, e, Gm, Vm, _e, {
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
function qm(t) {
  let e;
  const n = (
    /*#slots*/
    t[42].default
  ), i = Se(
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
      8192) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[44],
        e ? Te(
          n,
          /*$$scope*/
          r[44],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[44]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Wm(t) {
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
      $$slots: { default: [qm] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = K(u, de(r, [
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
  return s && (e = Nt(s, a(t)), t[43](e), e.$on(
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
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      4096 && s !== (s = /*component*/
      l[12])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(l, o)), l[43](e), e.$on(
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
        ), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[43](null), e && $(e, l);
    }
  };
}
function zm(t, e, n) {
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
  const { closest: o, matches: u } = rr, c = rt(Qe());
  let { use: f = [] } = e, { class: d = "" } = e, { nonInteractive: h = !1 } = e, { dense: m = !1 } = e, { textualList: _ = !1 } = e, { avatarList: p = !1 } = e, { iconList: v = !1 } = e, { imageList: b = !1 } = e, { thumbnailList: C = !1 } = e, { videoList: A = !1 } = e, { twoLine: R = !1 } = e, { threeLine: M = !1 } = e, { vertical: g = !0 } = e, { wrapFocus: O = (l = qe("SMUI:list:wrapFocus")) !== null && l !== void 0 ? l : !1 } = e, { singleSelection: B = !1 } = e, { disabledItemsFocusable: y = !1 } = e, { selectedIndex: S = -1 } = e, { radioList: E = !1 } = e, { checkList: L = !1 } = e, { hasTypeahead: P = !1 } = e, q, j, X = [], k = qe("SMUI:list:role"), D = qe("SMUI:list:nav");
  const V = /* @__PURE__ */ new WeakMap();
  let ue = qe("SMUI:dialog:selection"), Ne = qe("SMUI:addLayoutListener"), Ae, { component: Ye = Ht } = e, { tag: z = Ye === Ht ? D ? "nav" : "ul" : void 0 } = e;
  ze("SMUI:list:nonInteractive", h), ze("SMUI:separator:context", "list"), k || (B ? (k = "listbox", ze("SMUI:list:item:role", "option")) : E ? (k = "radiogroup", ze("SMUI:list:item:role", "radio")) : L ? (k = "group", ze("SMUI:list:item:role", "checkbox")) : (k = "list", ze("SMUI:list:item:role", void 0))), Ne && (Ae = Ne(ne)), ut(() => {
    n(41, j = new Lm({
      addClassForElementIndex: Z,
      focusItemAtIndex: ke,
      getAttributeForElementIndex: (ve, Ce) => {
        var at, sn;
        return (sn = (at = Ve()[ve]) === null || at === void 0 ? void 0 : at.getAttr(Ce)) !== null && sn !== void 0 ? sn : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Ve().map((ve) => ve.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => X.length,
      getPrimaryTextAtIndex: G,
      hasCheckboxAtIndex: (ve) => {
        var Ce, at;
        return (at = (Ce = Ve()[ve]) === null || Ce === void 0 ? void 0 : Ce.hasCheckbox) !== null && at !== void 0 ? at : !1;
      },
      hasRadioAtIndex: (ve) => {
        var Ce, at;
        return (at = (Ce = Ve()[ve]) === null || Ce === void 0 ? void 0 : Ce.hasRadio) !== null && at !== void 0 ? at : !1;
      },
      isCheckboxCheckedAtIndex: (ve) => {
        var Ce;
        const at = Ve()[ve];
        return (Ce = (at == null ? void 0 : at.hasCheckbox) && at.checked) !== null && Ce !== void 0 ? Ce : !1;
      },
      isFocusInsideList: () => q != null && ae() !== document.activeElement && ae().contains(document.activeElement),
      isRootFocused: () => q != null && document.activeElement === ae(),
      listItemAtIndexHasClass: St,
      notifyAction: (ve) => {
        n(26, S = ve), q != null && Ie(ae(), "SMUIList:action", { index: ve }, void 0, !0);
      },
      notifySelectionChange: (ve) => {
        q != null && Ie(ae(), "SMUIList:selectionChange", { changedIndices: ve });
      },
      removeClassForElementIndex: Me,
      setAttributeForElementIndex: je,
      setCheckedCheckboxOrRadioAtIndex: (ve, Ce) => {
        Ve()[ve].checked = Ce;
      },
      setTabIndexForListItemChildren: (ve, Ce) => {
        const at = Ve()[ve];
        Array.prototype.forEach.call(at.element.querySelectorAll("button:not(:disabled), a"), (fi) => {
          fi.setAttribute("tabindex", Ce);
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
      typeaheadMatchItem(ve, Ce) {
        return j.typeaheadMatchItem(
          ve,
          Ce,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Ve,
      focusItemAtIndex: ke,
      addClassForElementIndex: Z,
      removeClassForElementIndex: Me,
      setAttributeForElementIndex: je,
      removeAttributeForElementIndex: Ue,
      getAttributeFromElementIndex: Ot,
      getPrimaryTextAtIndex: G
    };
    return Ie(ae(), "SMUIList:mount", Y), j.init(), j.layout(), () => {
      j.destroy();
    };
  }), rn(() => {
    Ae && Ae();
  });
  function J(Y) {
    X.push(Y.detail), V.set(Y.detail.element, Y.detail), B && Y.detail.selected && n(26, S = se(Y.detail.element)), Y.stopPropagation();
  }
  function Re(Y) {
    var ve;
    const Ce = (ve = Y.detail && X.indexOf(Y.detail)) !== null && ve !== void 0 ? ve : -1;
    Ce !== -1 && (X.splice(Ce, 1), X = X, V.delete(Y.detail.element)), Y.stopPropagation();
  }
  function De(Y) {
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
  function We(Y) {
    if (E || L) {
      const ve = se(Y.target);
      if (ve !== -1) {
        const Ce = Ve()[ve];
        Ce && (E && !Ce.checked || L) && (u(Y.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Ce.checked = !Ce.checked), Ce.activateRipple(), window.requestAnimationFrame(() => {
          Ce.deactivateRipple();
        }));
      }
    }
  }
  function Ve() {
    return q == null ? [] : [...ae().children].map((Y) => V.get(Y)).filter((Y) => Y && Y._smui_list_item_accessor);
  }
  function St(Y, ve) {
    var Ce;
    const at = Ve()[Y];
    return (Ce = at && at.hasClass(ve)) !== null && Ce !== void 0 ? Ce : !1;
  }
  function Z(Y, ve) {
    const Ce = Ve()[Y];
    Ce && Ce.addClass(ve);
  }
  function Me(Y, ve) {
    const Ce = Ve()[Y];
    Ce && Ce.removeClass(ve);
  }
  function je(Y, ve, Ce) {
    const at = Ve()[Y];
    at && at.addAttr(ve, Ce);
  }
  function Ue(Y, ve) {
    const Ce = Ve()[Y];
    Ce && Ce.removeAttr(ve);
  }
  function Ot(Y, ve) {
    const Ce = Ve()[Y];
    return Ce ? Ce.getAttr(ve) : null;
  }
  function G(Y) {
    var ve;
    const Ce = Ve()[Y];
    return (ve = Ce && Ce.getPrimaryText()) !== null && ve !== void 0 ? ve : "";
  }
  function se(Y) {
    const ve = o(Y, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ve && u(ve, ".mdc-deprecated-list-item") ? Ve().map((Ce) => Ce == null ? void 0 : Ce.element).indexOf(ve) : -1;
  }
  function ne() {
    return j.layout();
  }
  function Xe(Y, ve) {
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
    return q.getElement();
  }
  function Kt(Y) {
    le[Y ? "unshift" : "push"](() => {
      q = Y, n(14, q);
    });
  }
  return t.$$set = (Y) => {
    e = K(K({}, e), nt(Y)), n(25, r = he(e, i)), "use" in Y && n(0, f = Y.use), "class" in Y && n(1, d = Y.class), "nonInteractive" in Y && n(2, h = Y.nonInteractive), "dense" in Y && n(3, m = Y.dense), "textualList" in Y && n(4, _ = Y.textualList), "avatarList" in Y && n(5, p = Y.avatarList), "iconList" in Y && n(6, v = Y.iconList), "imageList" in Y && n(7, b = Y.imageList), "thumbnailList" in Y && n(8, C = Y.thumbnailList), "videoList" in Y && n(9, A = Y.videoList), "twoLine" in Y && n(10, R = Y.twoLine), "threeLine" in Y && n(11, M = Y.threeLine), "vertical" in Y && n(27, g = Y.vertical), "wrapFocus" in Y && n(28, O = Y.wrapFocus), "singleSelection" in Y && n(29, B = Y.singleSelection), "disabledItemsFocusable" in Y && n(30, y = Y.disabledItemsFocusable), "selectedIndex" in Y && n(26, S = Y.selectedIndex), "radioList" in Y && n(31, E = Y.radioList), "checkList" in Y && n(32, L = Y.checkList), "hasTypeahead" in Y && n(33, P = Y.hasTypeahead), "component" in Y && n(12, Ye = Y.component), "tag" in Y && n(13, z = Y.tag), "$$scope" in Y && n(44, a = Y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*vertical*/
    134217728 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setVerticalOrientation(g), t.$$.dirty[0] & /*wrapFocus*/
    268435456 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setWrapFocus(O), t.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && j && j.setHasTypeahead(P), t.$$.dirty[0] & /*singleSelection*/
    536870912 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setSingleSelection(B), t.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setDisabledItemsFocusable(y), t.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | t.$$.dirty[1] & /*instance*/
    1024 && j && B && ft() !== S && j.setSelectedIndex(S);
  }, [
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    C,
    A,
    R,
    M,
    Ye,
    z,
    q,
    k,
    c,
    ue,
    J,
    Re,
    De,
    He,
    ie,
    W,
    We,
    r,
    S,
    g,
    O,
    B,
    y,
    E,
    L,
    P,
    ne,
    Xe,
    ht,
    ft,
    et,
    ke,
    ae,
    j,
    s,
    Kt,
    a
  ];
}
class Km extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      zm,
      Wm,
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
function zl(t) {
  let e;
  return {
    c() {
      e = ee("span"), N(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function Xm(t) {
  let e, n, i = (
    /*ripple*/
    t[7] && zl()
  );
  const r = (
    /*#slots*/
    t[34].default
  ), s = Se(
    r,
    t,
    /*$$scope*/
    t[37],
    null
  );
  return {
    c() {
      i && i.c(), e = Ke(), s && s.c();
    },
    m(a, l) {
      i && i.m(a, l), U(a, e, l), s && s.m(a, l), n = !0;
    },
    p(a, l) {
      /*ripple*/
      a[7] ? i || (i = zl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), s && s.p && (!n || l[1] & /*$$scope*/
      64) && Le(
        s,
        r,
        a,
        /*$$scope*/
        a[37],
        n ? Te(
          r,
          /*$$scope*/
          a[37],
          l,
          null
        ) : Oe(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      n || (I(s, a), n = !0);
    },
    o(a) {
      T(s, a), n = !1;
    },
    d(a) {
      a && F(e), i && i.d(a), s && s.d(a);
    }
  };
}
function Ym(t) {
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
            kt,
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
      ).map(Xr).concat([
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
      $$slots: { default: [Xm] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = K(u, de(r, [
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
              kt,
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
        ).map(Xr).concat([
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
  return s && (e = Nt(s, a(t)), t[35](e), e.$on(
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
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(l, o)), l[35](e), e.$on(
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
        ), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
                  kt,
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
            ).map(Xr).concat([
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[35](null), e && $(e, l);
    }
  };
}
let Zm = 0;
const Xr = ([t, e]) => `${t}: ${e};`;
function Qm(t, e, n) {
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
  function f(Z) {
    return Z === c;
  }
  let { use: d = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { color: _ = void 0 } = e, { nonInteractive: p = (o = qe("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  ze("SMUI:list:nonInteractive", void 0);
  let { ripple: v = !p } = e, { wrapper: b = !1 } = e, { activated: C = !1 } = e, { role: A = b ? "presentation" : qe("SMUI:list:item:role") } = e;
  ze("SMUI:list:item:role", void 0);
  let { selected: R = !1 } = e, { disabled: M = !1 } = e, { skipRestoreFocus: g = !1 } = e, { tabindex: O = c } = e, { inputId: B = "SMUI-form-field-list-" + Zm++ } = e, { href: y = void 0 } = e, S, E = {}, L = {}, P = {}, q, j, X = qe("SMUI:list:item:nav"), { component: k = Ht } = e, { tag: D = k === Ht ? X ? y ? "a" : "span" : "li" : void 0 } = e;
  ze("SMUI:generic:input:props", { id: B }), ze("SMUI:separator:context", void 0), ut(() => {
    if (!R && !p) {
      let Me = !0, je = S.getElement();
      for (; je.previousSibling; )
        if (je = je.previousSibling, je.nodeType === 1 && je.classList.contains("mdc-deprecated-list-item") && !je.classList.contains("mdc-deprecated-list-item--disabled")) {
          Me = !1;
          break;
        }
      Me && (j = window.requestAnimationFrame(() => Re(je)));
    }
    const Z = {
      _smui_list_item_accessor: !0,
      get element() {
        return We();
      },
      get selected() {
        return R;
      },
      set selected(Me) {
        n(0, R = Me);
      },
      hasClass: V,
      addClass: ue,
      removeClass: Ne,
      getAttr: Ye,
      addAttr: z,
      removeAttr: J,
      getPrimaryText: W,
      // For inputs within item.
      get checked() {
        var Me;
        return (Me = q && q.checked) !== null && Me !== void 0 ? Me : !1;
      },
      set checked(Me) {
        q && n(16, q.checked = !!Me, q);
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
      set tabindex(Me) {
        n(30, O = Me);
      },
      get disabled() {
        return M;
      },
      get activated() {
        return C;
      },
      set activated(Me) {
        n(1, C = Me);
      }
    };
    return Ie(We(), "SMUIListItem:mount", Z), () => {
      Ie(We(), "SMUIListItem:unmount", Z);
    };
  }), rn(() => {
    j && window.cancelAnimationFrame(j);
  });
  function V(Z) {
    return Z in E ? E[Z] : We().classList.contains(Z);
  }
  function ue(Z) {
    E[Z] || n(18, E[Z] = !0, E);
  }
  function Ne(Z) {
    (!(Z in E) || E[Z]) && n(18, E[Z] = !1, E);
  }
  function Ae(Z, Me) {
    L[Z] != Me && (Me === "" || Me == null ? (delete L[Z], n(19, L)) : n(19, L[Z] = Me, L));
  }
  function Ye(Z) {
    var Me;
    return Z in P ? (Me = P[Z]) !== null && Me !== void 0 ? Me : null : We().getAttribute(Z);
  }
  function z(Z, Me) {
    P[Z] !== Me && n(20, P[Z] = Me, P);
  }
  function J(Z) {
    (!(Z in P) || P[Z] != null) && n(20, P[Z] = void 0, P);
  }
  function Re(Z) {
    let Me = !0;
    for (; Z.nextElementSibling; )
      if (Z = Z.nextElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item")) {
        const je = Z.attributes.getNamedItem("tabindex");
        if (je && je.value === "0") {
          Me = !1;
          break;
        }
      }
    Me && n(21, i = 0);
  }
  function De(Z) {
    const Me = Z.key === "Enter", je = Z.key === "Space";
    (Me || je) && ie(Z);
  }
  function He(Z) {
    ("_smui_checkbox_accessor" in Z.detail || "_smui_radio_accessor" in Z.detail) && n(16, q = Z.detail);
  }
  function ie(Z) {
    M || Ie(We(), "SMUI:action", Z);
  }
  function W() {
    var Z, Me, je;
    const Ue = We(), Ot = Ue.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Ot)
      return (Z = Ot.textContent) !== null && Z !== void 0 ? Z : "";
    const G = Ue.querySelector(".mdc-deprecated-list-item__text");
    return G ? (Me = G.textContent) !== null && Me !== void 0 ? Me : "" : (je = Ue.textContent) !== null && je !== void 0 ? je : "";
  }
  function We() {
    return S.getElement();
  }
  function Ve(Z) {
    le[Z ? "unshift" : "push"](() => {
      S = Z, n(17, S);
    });
  }
  const St = () => n(16, q = void 0);
  return t.$$set = (Z) => {
    e = K(K({}, e), nt(Z)), n(29, s = he(e, r)), "use" in Z && n(2, d = Z.use), "class" in Z && n(3, h = Z.class), "style" in Z && n(4, m = Z.style), "color" in Z && n(5, _ = Z.color), "nonInteractive" in Z && n(6, p = Z.nonInteractive), "ripple" in Z && n(7, v = Z.ripple), "wrapper" in Z && n(8, b = Z.wrapper), "activated" in Z && n(1, C = Z.activated), "role" in Z && n(9, A = Z.role), "selected" in Z && n(0, R = Z.selected), "disabled" in Z && n(10, M = Z.disabled), "skipRestoreFocus" in Z && n(11, g = Z.skipRestoreFocus), "tabindex" in Z && n(30, O = Z.tabindex), "inputId" in Z && n(31, B = Z.inputId), "href" in Z && n(12, y = Z.href), "component" in Z && n(13, k = Z.component), "tag" in Z && n(14, D = Z.tag), "$$scope" in Z && n(37, l = Z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && n(21, i = f(O) ? !p && !M && (R || q && q.checked) ? 0 : -1 : O);
  }, [
    R,
    C,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    A,
    M,
    g,
    y,
    k,
    D,
    ie,
    q,
    S,
    E,
    L,
    P,
    i,
    u,
    X,
    ue,
    Ne,
    Ae,
    De,
    He,
    s,
    O,
    B,
    W,
    We,
    a,
    Ve,
    St,
    l
  ];
}
class Jm extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      Qm,
      Ym,
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
Dt({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Dt({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Dt({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function xm(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[8].default
  ), o = Se(
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
    c = K(c, u[f]);
  return {
    c() {
      e = ee("span"), o && o.c(), me(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), t[9](e), r = !0, s || (a = [
        fe(i = xe.call(
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
      128) && Le(
        o,
        l,
        f,
        /*$$scope*/
        f[7],
        r ? Te(
          l,
          /*$$scope*/
          f[7],
          d,
          null
        ) : Oe(
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
      r || (I(o, f), r = !0);
    },
    o(f) {
      T(o, f), r = !1;
    },
    d(f) {
      f && F(e), o && o.d(f), t[9](null), s = !1, Ze(a);
    }
  };
}
function $m(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = qe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function h(m) {
    le[m ? "unshift" : "push"](() => {
      c = m, n(2, c);
    });
  }
  return t.$$set = (m) => {
    e = K(K({}, e), nt(m)), n(5, r = he(e, i)), "use" in m && n(0, o = m.use), "class" in m && n(1, u = m.class), "$$scope" in m && n(7, a = m.$$scope);
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
class ep extends ye {
  constructor(e) {
    super(), Ee(this, e, $m, xm, _e, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Dt({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Dt({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Dt({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Dt({
  class: "mdc-menu__selection-group-icon",
  component: ep
});
function tp(t) {
  let e;
  return {
    c() {
      e = ct(
        /*content*/
        t[8]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      256 && pt(
        e,
        /*content*/
        n[8]
      );
    },
    i: $e,
    o: $e,
    d(n) {
      n && F(e);
    }
  };
}
function np(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].default
  ), i = Se(
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
      4096) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? Te(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ip(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [np, tp], f = [];
  function d(_, p) {
    return (
      /*content*/
      _[8] == null ? 0 : 1
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
  for (let _ = 0; _ < h.length; _ += 1)
    m = K(m, h[_]);
  return {
    c() {
      e = ee("div"), i.c(), me(e, m);
    },
    m(_, p) {
      U(_, e, p), f[n].m(e, null), t[14](e), l = !0, o || (u = [
        fe(a = xe.call(
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
    p(_, [p]) {
      let v = n;
      n = d(_), n === v ? f[n].p(_, p) : (we(), T(f[v], 1, 1, () => {
        f[v] = null;
      }), Fe(), i = f[n], i ? i.p(_, p) : (i = f[n] = c[n](_), i.c()), I(i, 1), i.m(e, null)), me(e, m = de(h, [
        (!l || p & /*className, validationMsg, persistent, internalClasses*/
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
        (!l || p & /*persistent*/
        8 && s !== (s = /*persistent*/
        _[3] ? void 0 : "true")) && { "aria-hidden": s },
        (!l || p & /*id*/
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
      ])), a && ge(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      l || (I(i), l = !0);
    },
    o(_) {
      T(i), l = !1;
    },
    d(_) {
      _ && F(e), f[n].d(), t[14](null), o = !1, Ze(u);
    }
  };
}
let rp = 0;
function sp(t, e, n) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + rp++ } = e, { persistent: f = !1 } = e, { validationMsg: d = !1 } = e, h, m, _ = {}, p = {}, v;
  ut(() => (m = new Nm({
    addClass: C,
    removeClass: A,
    hasClass: b,
    getAttr: R,
    setAttr: M,
    removeAttr: g,
    setContent: (y) => {
      n(8, v = y);
    }
  }), c.startsWith("SMUI-select-helper-text-") && Ie(O(), "SMUISelectHelperText:id", c), Ie(O(), "SMUISelectHelperText:mount", m), m.init(), () => {
    Ie(O(), "SMUISelectHelperText:unmount", m), m.destroy();
  }));
  function b(y) {
    return y in _ ? _[y] : O().classList.contains(y);
  }
  function C(y) {
    _[y] || n(6, _[y] = !0, _);
  }
  function A(y) {
    (!(y in _) || _[y]) && n(6, _[y] = !1, _);
  }
  function R(y) {
    var S;
    return y in p ? (S = p[y]) !== null && S !== void 0 ? S : null : O().getAttribute(y);
  }
  function M(y, S) {
    p[y] !== S && n(7, p[y] = S, p);
  }
  function g(y) {
    (!(y in p) || p[y] != null) && n(7, p[y] = void 0, p);
  }
  function O() {
    return h;
  }
  function B(y) {
    le[y ? "unshift" : "push"](() => {
      h = y, n(5, h);
    });
  }
  return t.$$set = (y) => {
    e = K(K({}, e), nt(y)), n(10, r = he(e, i)), "use" in y && n(0, o = y.use), "class" in y && n(1, u = y.class), "id" in y && n(2, c = y.id), "persistent" in y && n(3, f = y.persistent), "validationMsg" in y && n(4, d = y.validationMsg), "$$scope" in y && n(12, a = y.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    _,
    p,
    v,
    l,
    r,
    O,
    a,
    s,
    B
  ];
}
class lp extends ye {
  constructor(e) {
    super(), Ee(this, e, sp, ip, _e, {
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
const ap = (t) => ({}), Kl = (t) => ({}), op = (t) => ({}), Xl = (t) => ({}), up = (t) => ({}), Yl = (t) => ({}), cp = (t) => ({}), Zl = (t) => ({});
function Ql(t) {
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
    i = K(i, n[r]);
  return {
    c() {
      e = ee("input"), me(e, i);
    },
    m(r, s) {
      U(r, e, s), e.autofocus && e.focus();
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
      r && F(e);
    }
  };
}
function Jl(t) {
  let e;
  return {
    c() {
      e = ee("span"), N(e, "class", "mdc-select__ripple");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function xl(t) {
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
    $$slots: { default: [fp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new lr({ props: r }), t[67](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[67](null), $(e, s);
    }
  };
}
function fp(t) {
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
  ), s = Se(
    r,
    t,
    /*$$scope*/
    t[87],
    Zl
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      U(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && pt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Le(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Te(
          r,
          /*$$scope*/
          a[87],
          l,
          cp
        ) : Oe(
          /*$$scope*/
          a[87]
        ),
        Zl
      );
    },
    i(a) {
      i || (I(s, a), i = !0);
    },
    o(a) {
      T(s, a), i = !1;
    },
    d(a) {
      a && F(n), s && s.d(a);
    }
  };
}
function $l(t) {
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
    $$slots: { default: [hp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new Qo({ props: r }), t[69](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[69](null), $(e, s);
    }
  };
}
function ea(t) {
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
    $$slots: { default: [dp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new lr({ props: r }), t[68](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[68](null), $(e, s);
    }
  };
}
function dp(t) {
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
  ), s = Se(
    r,
    t,
    /*$$scope*/
    t[87],
    Yl
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      U(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && pt(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Le(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Te(
          r,
          /*$$scope*/
          a[87],
          l,
          up
        ) : Oe(
          /*$$scope*/
          a[87]
        ),
        Yl
      );
    },
    i(a) {
      i || (I(s, a), i = !0);
    },
    o(a) {
      T(s, a), i = !1;
    },
    d(a) {
      a && F(n), s && s.d(a);
    }
  };
}
function hp(t) {
  let e, n, i = !/*noLabel*/
  t[8] && /*label*/
  (t[9] != null || /*$$slots*/
  t[54].label) && ea(t);
  return {
    c() {
      i && i.c(), e = Ke();
    },
    m(r, s) {
      i && i.m(r, s), U(r, e, s), n = !0;
    },
    p(r, s) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, s), s[0] & /*noLabel, label*/
      768 | s[1] & /*$$slots*/
      8388608 && I(i, 1)) : (i = ea(r), i.c(), I(i, 1), i.m(e.parentNode, e)) : i && (we(), T(i, 1, 1, () => {
        i = null;
      }), Fe());
    },
    i(r) {
      n || (I(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      r && F(e), i && i.d(r);
    }
  };
}
function ta(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[53],
    "ripple$"
  )];
  let r = {};
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new Zo({ props: r }), t[70](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[70](null), $(e, s);
    }
  };
}
function mp(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].default
  ), i = Se(
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
      33554432) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Te(
          n,
          /*$$scope*/
          r[87],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[87]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function pp(t) {
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
    $$slots: { default: [mp] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = K(a, r[l]);
  return (
    /*selectedIndex*/
    t[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    t[24]), e = new Km({ props: a }), le.push(() => It(e, "selectedIndex", s)), e.$on(
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
        l[24], vt(() => n = !1)), e.$set(u);
      },
      i(l) {
        i || (I(e.$$.fragment, l), i = !0);
      },
      o(l) {
        T(e.$$.fragment, l), i = !1;
      },
      d(l) {
        $(e, l);
      }
    }
  );
}
function na(t) {
  let e, n;
  const i = [Ge(
    /*$$restProps*/
    t[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [gp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new lp({ props: r }), e.$on(
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      $(e, s);
    }
  };
}
function gp(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].helperText
  ), i = Se(
    n,
    t,
    /*$$scope*/
    t[87],
    Kl
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
      33554432) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Te(
          n,
          /*$$scope*/
          r[87],
          s,
          ap
        ) : Oe(
          /*$$scope*/
          r[87]
        ),
        Kl
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function _p(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, _, p, v, b, C, A, R, M, g, O, B, y, S, E, L, P, q, j, X, k, D, V, ue, Ne, Ae, Ye, z, J = (
    /*hiddenInput*/
    t[12] && Ql(t)
  ), Re = (
    /*variant*/
    t[7] === "filled" && Jl()
  ), De = (
    /*variant*/
    t[7] !== "outlined" && !/*noLabel*/
    t[8] && /*label*/
    (t[9] != null || /*$$slots*/
    t[54].label) && xl(t)
  ), He = (
    /*variant*/
    t[7] === "outlined" && $l(t)
  );
  const ie = (
    /*#slots*/
    t[64].leadingIcon
  ), W = Se(
    ie,
    t,
    /*$$scope*/
    t[87],
    Xl
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
    Ve = K(Ve, We[ke]);
  let St = [
    {
      class: _ = re({
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
  ], Z = {};
  for (let ke = 0; ke < St.length; ke += 1)
    Z = K(Z, St[ke]);
  let Me = [
    {
      class: M = re({
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
  for (let ke = 0; ke < Me.length; ke += 1)
    je = K(je, Me[ke]);
  let Ue = (
    /*variant*/
    t[7] !== "outlined" && /*ripple*/
    t[5] && ta(t)
  ), Ot = [
    {
      class: B = re({
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
      "aria-disabled": S = /*disabled*/
      t[6] ? "true" : void 0
    },
    { "aria-controls": (
      /*menuId*/
      t[45]
    ) },
    {
      "aria-expanded": E = /*menuOpen*/
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
  for (let ke = 0; ke < Ot.length; ke += 1)
    G = K(G, Ot[ke]);
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
  function ne(ke) {
    t[77](ke);
  }
  let Xe = {
    $$slots: { default: [pp] },
    $$scope: { ctx: t }
  };
  for (let ke = 0; ke < se.length; ke += 1)
    Xe = K(Xe, se[ke]);
  /*menuOpen*/
  t[31] !== void 0 && (Xe.open = /*menuOpen*/
  t[31]), q = new jm({ props: Xe }), le.push(() => It(q, "open", ne)), q.$on(
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
      ).map(ia).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    nn(
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
    ft = K(ft, ht[ke]);
  let et = (
    /*$$slots*/
    t[54].helperText && na(t)
  );
  return {
    c() {
      e = ee("div"), J && J.c(), n = oe(), i = ee("div"), Re && Re.c(), r = oe(), De && De.c(), s = oe(), He && He.c(), a = oe(), W && W.c(), l = oe(), o = ee("span"), u = ee("span"), c = ct(
        /*$selectedTextStore*/
        t[42]
      ), v = oe(), b = ee("span"), C = ot("svg"), A = ot("polygon"), R = ot("polygon"), O = oe(), Ue && Ue.c(), P = oe(), te(q.$$.fragment), ue = oe(), et && et.c(), Ne = Ke(), me(u, Ve), me(o, Z), N(A, "class", "mdc-select__dropdown-icon-inactive"), N(A, "stroke", "none"), N(A, "fill-rule", "evenodd"), N(A, "points", "7 10 12 15 17 10"), N(R, "class", "mdc-select__dropdown-icon-active"), N(R, "stroke", "none"), N(R, "fill-rule", "evenodd"), N(R, "points", "7 15 12 10 17 15"), N(C, "class", "mdc-select__dropdown-icon-graphic"), N(C, "viewBox", "7 10 10 5"), N(C, "focusable", "false"), me(b, je), me(i, G), me(e, ft);
    },
    m(ke, ae) {
      U(ke, e, ae), J && J.m(e, null), Q(e, n), Q(e, i), Re && Re.m(i, null), Q(i, r), De && De.m(i, null), Q(i, s), He && He.m(i, null), Q(i, a), W && W.m(i, null), Q(i, l), Q(i, o), Q(o, u), Q(u, c), Q(i, v), Q(i, b), Q(b, C), Q(C, A), Q(C, R), Q(i, O), Ue && Ue.m(i, null), t[71](i), Q(e, P), x(q, e, null), t[82](e), U(ke, ue, ae), et && et.m(ke, ae), U(ke, Ne, ae), Ae = !0, Ye || (z = [
        fe(m = xe.call(
          null,
          u,
          /*selectedText$use*/
          t[18]
        )),
        fe(p = xe.call(
          null,
          o,
          /*selectedTextContainer$use*/
          t[16]
        )),
        fe(g = xe.call(
          null,
          b,
          /*dropdownIcon$use*/
          t[20]
        )),
        fe(L = xe.call(
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
        fe(D = kt.call(null, e, {
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
        fe(Um.call(null, e, {
          addClass: (
            /*addClass*/
            t[50]
          ),
          removeClass: (
            /*removeClass*/
            t[51]
          )
        })),
        fe(V = xe.call(
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
      ], Ye = !0);
    },
    p(ke, ae) {
      t = ke, /*hiddenInput*/
      t[12] ? J ? J.p(t, ae) : (J = Ql(t), J.c(), J.m(e, n)) : J && (J.d(1), J = null), /*variant*/
      t[7] === "filled" ? Re || (Re = Jl(), Re.c(), Re.m(i, r)) : Re && (Re.d(1), Re = null), /*variant*/
      t[7] !== "outlined" && !/*noLabel*/
      t[8] && /*label*/
      (t[9] != null || /*$$slots*/
      t[54].label) ? De ? (De.p(t, ae), ae[0] & /*variant, noLabel, label*/
      896 | ae[1] & /*$$slots*/
      8388608 && I(De, 1)) : (De = xl(t), De.c(), I(De, 1), De.m(i, s)) : De && (we(), T(De, 1, 1, () => {
        De = null;
      }), Fe()), /*variant*/
      t[7] === "outlined" ? He ? (He.p(t, ae), ae[0] & /*variant*/
      128 && I(He, 1)) : (He = $l(t), He.c(), I(He, 1), He.m(i, a)) : He && (we(), T(He, 1, 1, () => {
        He = null;
      }), Fe()), W && W.p && (!Ae || ae[2] & /*$$scope*/
      33554432) && Le(
        W,
        ie,
        t,
        /*$$scope*/
        t[87],
        Ae ? Te(
          ie,
          /*$$scope*/
          t[87],
          ae,
          op
        ) : Oe(
          /*$$scope*/
          t[87]
        ),
        Xl
      ), (!Ae || ae[1] & /*$selectedTextStore*/
      2048) && qu(
        c,
        /*$selectedTextStore*/
        t[42],
        Ve.contenteditable
      ), me(u, Ve = de(We, [
        (!Ae || ae[0] & /*inputId*/
        2048 && f !== (f = /*inputId*/
        t[11] + "-smui-selected-text")) && { id: f },
        (!Ae || ae[0] & /*selectedText$class*/
        524288 && d !== (d = re({
          [
            /*selectedText$class*/
            t[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: d },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!Ae || ae[0] & /*inputId*/
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
      ), me(o, Z = de(St, [
        (!Ae || ae[0] & /*selectedTextContainer$class*/
        131072 && _ !== (_ = re({
          [
            /*selectedTextContainer$class*/
            t[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: _ },
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
      ), me(b, je = de(Me, [
        (!Ae || ae[0] & /*dropdownIcon$class*/
        2097152 && M !== (M = re({
          [
            /*dropdownIcon$class*/
            t[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: M },
        ae[1] & /*$$restProps*/
        4194304 && Ge(
          /*$$restProps*/
          t[53],
          "dropdownIcon$"
        )
      ])), g && ge(g.update) && ae[0] & /*dropdownIcon$use*/
      1048576 && g.update.call(
        null,
        /*dropdownIcon$use*/
        t[20]
      ), /*variant*/
      t[7] !== "outlined" && /*ripple*/
      t[5] ? Ue ? (Ue.p(t, ae), ae[0] & /*variant, ripple*/
      160 && I(Ue, 1)) : (Ue = ta(t), Ue.c(), I(Ue, 1), Ue.m(i, null)) : Ue && (we(), T(Ue, 1, 1, () => {
        Ue = null;
      }), Fe()), me(i, G = de(Ot, [
        (!Ae || ae[0] & /*anchor$class*/
        32768 && B !== (B = re({
          [
            /*anchor$class*/
            t[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: B },
        (!Ae || ae[0] & /*required*/
        1024 && y !== (y = /*required*/
        t[10] ? "true" : void 0)) && {
          "aria-required": y
        },
        (!Ae || ae[0] & /*disabled*/
        64 && S !== (S = /*disabled*/
        t[6] ? "true" : void 0)) && {
          "aria-disabled": S
        },
        { "aria-controls": (
          /*menuId*/
          t[45]
        ) },
        (!Ae || ae[1] & /*menuOpen*/
        1 && E !== (E = /*menuOpen*/
        t[31] ? "true" : "false")) && {
          "aria-expanded": E
        },
        (!Ae || ae[0] & /*helperId*/
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
      ])), L && ge(L.update) && ae[0] & /*anchor$use*/
      16384 && L.update.call(
        null,
        /*anchor$use*/
        t[14]
      );
      const Kt = ae[0] & /*menu$class*/
      4194304 | ae[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? de(se, [
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
        4194304 && be(Ge(
          /*$$restProps*/
          t[53],
          "menu$"
        ))
      ]) : {};
      ae[0] & /*selectedIndex*/
      16777216 | ae[1] & /*wrapFocus, $$restProps, list*/
      4194352 | ae[2] & /*$$scope*/
      33554432 && (Kt.$$scope = { dirty: ae, ctx: t }), !j && ae[1] & /*menuOpen*/
      1 && (j = !0, Kt.open = /*menuOpen*/
      t[31], vt(() => j = !1)), q.$set(Kt), me(e, ft = de(ht, [
        (!Ae || ae[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
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
        (!Ae || ae[0] & /*internalStyles, style*/
        134217744 && k !== (k = Object.entries(
          /*internalStyles*/
          t[27]
        ).map(ia).concat([
          /*style*/
          t[4]
        ]).join(" "))) && { style: k },
        ae[1] & /*$$restProps*/
        4194304 && nn(
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
      ])), D && ge(D.update) && ae[0] & /*variant*/
      128 && D.update.call(null, {
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
      8388608 && I(et, 1)) : (et = na(t), et.c(), I(et, 1), et.m(Ne.parentNode, Ne)) : et && (we(), T(et, 1, 1, () => {
        et = null;
      }), Fe());
    },
    i(ke) {
      Ae || (I(De), I(He), I(W, ke), I(Ue), I(q.$$.fragment, ke), I(et), Ae = !0);
    },
    o(ke) {
      T(De), T(He), T(W, ke), T(Ue), T(q.$$.fragment, ke), T(et), Ae = !1;
    },
    d(ke) {
      ke && (F(e), F(ue), F(Ne)), J && J.d(), Re && Re.d(), De && De.d(), He && He.d(), W && W.d(ke), Ue && Ue.d(), t[71](null), $(q), t[82](null), et && et.d(ke), Ye = !1, Ze(z);
    }
  };
}
let bp = 0;
function vp(t) {
  const e = t.currentTarget.getBoundingClientRect();
  return (Ip(t) ? t.touches[0].clientX : t.clientX) - e.left;
}
function Ip(t) {
  return "touches" in t;
}
const ia = ([t, e]) => `${t}: ${e};`;
function Ep(t, e, n) {
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
  const u = Is(l);
  var c;
  const f = rt(Qe());
  let d = () => {
  };
  function h(w) {
    return w === d;
  }
  let { use: m = [] } = e, { class: _ = "" } = e, { style: p = "" } = e, { ripple: v = !0 } = e, { disabled: b = !1 } = e, { variant: C = "standard" } = e, { noLabel: A = !1 } = e, { label: R = void 0 } = e, { value: M = "" } = e, { key: g = (w) => w } = e, { dirty: O = !1 } = e, { invalid: B = d } = e, { updateInvalid: y = h(B) } = e;
  const S = h(B);
  h(B) && (B = !1);
  let { required: E = !1 } = e, { inputId: L = "SMUI-select-" + bp++ } = e, { hiddenInput: P = !1 } = e, { withLeadingIcon: q = d } = e, { anchor$use: j = [] } = e, { anchor$class: X = "" } = e, { selectedTextContainer$use: k = [] } = e, { selectedTextContainer$class: D = "" } = e, { selectedText$use: V = [] } = e, { selectedText$class: ue = "" } = e, { dropdownIcon$use: Ne = [] } = e, { dropdownIcon$class: Ae = "" } = e, { menu$class: Ye = "" } = e, z, J, Re = {}, De = {}, He, ie = {}, W = -1, We = (c = r.menu$id) !== null && c !== void 0 ? c : L + "-menu", Ve, St = qe("SMUI:addLayoutListener"), Z, Me = !1, je = {}, Ue, Ot, G = !1, se, ne = qe("SMUI:select:context"), Xe, ht, ft, et, ke;
  ze("SMUI:list:role", ""), ze("SMUI:list:nav", !1);
  const ae = dt("");
  lt(t, ae, (w) => n(42, s = w)), ze("SMUI:select:selectedText", ae);
  const Kt = dt(M);
  lt(t, Kt, (w) => n(90, a = w)), ze("SMUI:select:value", Kt);
  let Y = W;
  St && (Z = St(Hi)), ut(() => (n(23, J = new km(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (w) => {
        Wt(ae, s = w, s);
      },
      isSelectAnchorFocused: () => document.activeElement === He,
      getSelectAnchorAttr: hr,
      setSelectAnchorAttr: mr,
      removeSelectAnchorAttr: pr,
      addMenuClass: fr,
      removeMenuClass: dr,
      openMenu: () => {
        n(31, Me = !0);
      },
      closeMenu: () => {
        n(31, Me = !1);
      },
      getAnchorElement: () => He,
      setMenuAnchorElement: (w) => {
        n(33, Ue = w);
      },
      setMenuAnchorCorner: (w) => {
        n(34, Ot = w);
      },
      setMenuWrapFocus: (w) => {
        n(35, G = w);
      },
      getSelectedIndex: () => W,
      setSelectedIndex: (w) => {
        n(63, Y = w), n(24, W = w), n(0, M = wn()[W]);
      },
      focusMenuItemAtIndex: (w) => {
        se.focusItemAtIndex(w);
      },
      getMenuItemCount: () => se.items.length,
      getMenuItemValues: () => wn().map(g),
      getMenuItemTextAtIndex: (w) => se.getPrimaryTextAtIndex(w),
      isTypeaheadInProgress: () => se.typeaheadInProgress,
      typeaheadMatchItem: (w, Gt) => se.typeaheadMatchItem(w, Gt),
      // getCommonAdapterMethods
      addClass: at,
      removeClass: sn,
      hasClass: Ce,
      setRippleCenter: (w) => et && et.setRippleCenter(w),
      activateBottomLine: () => et && et.activate(),
      deactivateBottomLine: () => et && et.deactivate(),
      notifyChange: (w) => {
        n(55, O = !0), y && n(1, B = !J.isValid()), Ie(Fn(), "SMUISelect:change", { value: M, index: W }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!ke,
      notchOutline: (w) => ke && ke.notch(w),
      closeOutline: () => ke && ke.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!ft,
      floatLabel: (w) => ft && ft.float(w),
      getLabelWidth: () => ft ? ft.getWidth() : 0,
      setLabelRequired: (w) => ft && ft.setRequired(w)
    },
    {
      get helperText() {
        return ht;
      },
      get leadingIcon() {
        return Xe;
      }
    }
  )), n(24, W = wn().indexOf(M)), J.init(), Pi(S), () => {
    J.destroy();
  })), rn(() => {
    Z && Z();
  });
  function ve(w) {
    n(37, Xe = w.detail);
  }
  function Ce(w) {
    return w in Re ? Re[w] : Fn().classList.contains(w);
  }
  function at(w) {
    Re[w] || n(26, Re[w] = !0, Re);
  }
  function sn(w) {
    (!(w in Re) || Re[w]) && n(26, Re[w] = !1, Re);
  }
  function fi(w, Gt) {
    De[w] != Gt && (Gt === "" || Gt == null ? (delete De[w], n(27, De)) : n(27, De[w] = Gt, De));
  }
  function fr(w) {
    je[w] || n(32, je[w] = !0, je);
  }
  function dr(w) {
    (!(w in je) || je[w]) && n(32, je[w] = !1, je);
  }
  function hr(w) {
    var Gt;
    return w in ie ? (Gt = ie[w]) !== null && Gt !== void 0 ? Gt : null : Fn().getAttribute(w);
  }
  function mr(w, Gt) {
    ie[w] !== Gt && n(29, ie[w] = Gt, ie);
  }
  function pr(w) {
    (!(w in ie) || ie[w] != null) && n(29, ie[w] = void 0, ie);
  }
  function wn() {
    return se.getOrderedList().map((w) => w.getValue());
  }
  function gr() {
    return J.getUseDefaultValidation();
  }
  function Pi(w) {
    J.setUseDefaultValidation(w);
  }
  function _r() {
    He.focus();
  }
  function Hi() {
    J.layout();
  }
  function Fn() {
    return z;
  }
  function br(w) {
    ii.call(this, t, w);
  }
  function vr(w) {
    ii.call(this, t, w);
  }
  function Ir(w) {
    le[w ? "unshift" : "push"](() => {
      ft = w, n(39, ft);
    });
  }
  function Er(w) {
    le[w ? "unshift" : "push"](() => {
      ft = w, n(39, ft);
    });
  }
  function yr(w) {
    le[w ? "unshift" : "push"](() => {
      ke = w, n(41, ke);
    });
  }
  function Ar(w) {
    le[w ? "unshift" : "push"](() => {
      et = w, n(40, et);
    });
  }
  function Cr(w) {
    le[w ? "unshift" : "push"](() => {
      He = w, n(28, He);
    });
  }
  const Sr = () => J && J.handleFocus(), Tr = () => J && J.handleBlur(), Lr = (w) => {
    He.focus(), J && J.handleClick(vp(w));
  };
  function Or(w) {
    W = w, n(24, W);
  }
  const Rr = (w) => n(36, se = w.detail);
  function Dr(w) {
    Me = w, n(31, Me);
  }
  const Mr = (w) => J && J.handleMenuItemAction(w.detail.index), kr = () => J && J.handleMenuClosing(), H = () => J && J.handleMenuClosed(), _t = () => J && J.handleMenuOpened();
  function wi(w) {
    le[w ? "unshift" : "push"](() => {
      z = w, n(25, z);
    });
  }
  const Nr = () => n(37, Xe = void 0), di = (w) => n(30, Ve = w.detail), hi = (w) => n(38, ht = w.detail), ku = () => {
    n(30, Ve = void 0), n(38, ht = void 0);
  };
  return t.$$set = (w) => {
    e = K(K({}, e), nt(w)), n(53, r = he(e, i)), "use" in w && n(2, m = w.use), "class" in w && n(3, _ = w.class), "style" in w && n(4, p = w.style), "ripple" in w && n(5, v = w.ripple), "disabled" in w && n(6, b = w.disabled), "variant" in w && n(7, C = w.variant), "noLabel" in w && n(8, A = w.noLabel), "label" in w && n(9, R = w.label), "value" in w && n(0, M = w.value), "key" in w && n(56, g = w.key), "dirty" in w && n(55, O = w.dirty), "invalid" in w && n(1, B = w.invalid), "updateInvalid" in w && n(57, y = w.updateInvalid), "required" in w && n(10, E = w.required), "inputId" in w && n(11, L = w.inputId), "hiddenInput" in w && n(12, P = w.hiddenInput), "withLeadingIcon" in w && n(13, q = w.withLeadingIcon), "anchor$use" in w && n(14, j = w.anchor$use), "anchor$class" in w && n(15, X = w.anchor$class), "selectedTextContainer$use" in w && n(16, k = w.selectedTextContainer$use), "selectedTextContainer$class" in w && n(17, D = w.selectedTextContainer$class), "selectedText$use" in w && n(18, V = w.selectedText$use), "selectedText$class" in w && n(19, ue = w.selectedText$class), "dropdownIcon$use" in w && n(20, Ne = w.dropdownIcon$use), "dropdownIcon$class" in w && n(21, Ae = w.dropdownIcon$class), "menu$class" in w && n(22, Ye = w.menu$class), "$$scope" in w && n(87, o = w.$$scope);
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
        const w = wn();
        M !== w[W] && n(0, M = w[W]);
      }
    t.$$.dirty[0] & /*value*/
    1 && Wt(Kt, a = M, a), t.$$.dirty[0] & /*instance, value*/
    8388609 | t.$$.dirty[1] & /*key*/
    33554432 && J && J.getValue() !== g(M) && J.setValue(g(M)), t.$$.dirty[0] & /*instance, disabled*/
    8388672 && J && J.getDisabled() !== b && J.setDisabled(b), t.$$.dirty[0] & /*instance, invalid*/
    8388610 | t.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && J && O && J.isValid() !== !B && (y ? n(1, B = !J.isValid()) : J.setValid(!B)), t.$$.dirty[0] & /*instance, required*/
    8389632 && J && J.getRequired() !== E && J.setRequired(E);
  }, [
    M,
    B,
    m,
    _,
    p,
    v,
    b,
    C,
    A,
    R,
    E,
    L,
    P,
    q,
    j,
    X,
    k,
    D,
    V,
    ue,
    Ne,
    Ae,
    Ye,
    J,
    W,
    z,
    Re,
    De,
    He,
    ie,
    Ve,
    Me,
    je,
    Ue,
    Ot,
    G,
    se,
    Xe,
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
    Kt,
    ve,
    at,
    sn,
    fi,
    r,
    u,
    O,
    g,
    y,
    gr,
    Pi,
    _r,
    Hi,
    Fn,
    Y,
    l,
    br,
    vr,
    Ir,
    Er,
    yr,
    Ar,
    Cr,
    Sr,
    Tr,
    Lr,
    Or,
    Rr,
    Dr,
    Mr,
    kr,
    H,
    _t,
    wi,
    Nr,
    di,
    hi,
    ku,
    o
  ];
}
class yp extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      Ep,
      _p,
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
function Ap(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Se(
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
      8192) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? Te(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Cp(t) {
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
    $$slots: { default: [Ap] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = K(r, i[s]);
  return e = new Jm({ props: r }), t[12](e), {
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
      n || (I(e.$$.fragment, s), n = !0);
    },
    o(s) {
      T(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[12](null), $(e, s);
    }
  };
}
function Sp(t, e, n) {
  let i, r;
  const s = ["use", "class", "value", "getElement"];
  let a = he(e, s), l, o, { $$slots: u = {}, $$scope: c } = e;
  const f = rt(Qe());
  let { use: d = [] } = e;
  const h = "";
  let { value: m = "" } = e, _;
  const p = qe("SMUI:select:selectedText");
  lt(t, p, (R) => n(14, l = R));
  const v = qe("SMUI:select:value");
  lt(t, v, (R) => n(10, o = R)), ze("SMUI:list:item:role", "option"), ut(b), rn(b);
  function b() {
    r && _ && Wt(p, l = _.getPrimaryText(), l);
  }
  function C() {
    return _.getElement();
  }
  function A(R) {
    le[R ? "unshift" : "push"](() => {
      _ = R, n(1, _);
    });
  }
  return t.$$set = (R) => {
    e = K(K({}, e), nt(R)), n(6, a = he(e, s)), "use" in R && n(7, d = R.use), "value" in R && n(0, m = R.value), "$$scope" in R && n(13, c = R.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*use*/
    128 && n(3, i = [f, ...d]), t.$$.dirty & /*value, $selectedValue*/
    1025 && n(2, r = m != null && m !== "" && o === m);
  }, [
    m,
    _,
    r,
    i,
    p,
    v,
    a,
    d,
    h,
    C,
    o,
    u,
    A,
    c
  ];
}
class Tp extends ye {
  constructor(e) {
    super(), Ee(this, e, Sp, Cp, _e, {
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
function ra(t, e, n) {
  const i = t.slice();
  return i[11] = e[n], i[13] = n, i;
}
function Lp(t) {
  let e = (
    /*d*/
    t[11].label + ""
  ), n;
  return {
    c() {
      n = ct(e);
    },
    m(i, r) {
      U(i, n, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && pt(n, e);
    },
    d(i) {
      i && F(n);
    }
  };
}
function sa(t) {
  let e, n;
  return e = new Tp({
    props: {
      value: (
        /*d*/
        t[11].value
      ),
      $$slots: { default: [Lp] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Op(t) {
  let e, n, i = Pt(
    /*data*/
    t[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = sa(ra(t, i, a));
  const s = (a) => T(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Ke();
    },
    m(a, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, l);
      U(a, e, l), n = !0;
    },
    p(a, l) {
      if (l & /*data, setSelectedIndex*/
      34) {
        i = Pt(
          /*data*/
          a[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = ra(a, i, o);
          r[o] ? (r[o].p(u, l), I(r[o], 1)) : (r[o] = sa(u), r[o].c(), I(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (we(), o = i.length; o < r.length; o += 1)
          s(o);
        Fe();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          I(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        T(r[l]);
      n = !1;
    },
    d(a) {
      a && F(e), Es(r, a);
    }
  };
}
function Rp(t) {
  let e, n, i;
  function r(a) {
    t[10](a);
  }
  let s = {
    disabled: (
      /*disabled*/
      t[4]
    ),
    key: Dp,
    label: (
      /*label*/
      t[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      t[3]
    ),
    $$slots: { default: [Op] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new yp({ props: s }), le.push(() => It(e, "value", r)), {
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
        a[0], vt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (I(e.$$.fragment, a), i = !0);
      },
      o(a) {
        T(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
const Dp = (t) => `${t ?? ""}`;
function Mp(t, e, n) {
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
class tu extends ye {
  constructor(e) {
    super(), Ee(this, e, Mp, Rp, _e, {
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
Dt({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Dt({
  class: "mdc-dialog__title",
  tag: "h2"
});
Dt({
  class: "mdc-dialog__content",
  tag: "div"
});
Dt({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
function kp(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[12].default
  ), o = Se(
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
    c = K(c, u[f]);
  return {
    c() {
      e = ee("div"), o && o.c(), me(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), t[13](e), r = !0, s || (a = [
        fe(i = xe.call(
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
      2048) && Le(
        o,
        l,
        f,
        /*$$scope*/
        f[11],
        r ? Te(
          l,
          /*$$scope*/
          f[11],
          d,
          null
        ) : Oe(
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
      r || (I(o, f), r = !0);
    },
    o(f) {
      T(o, f), r = !1;
    },
    d(f) {
      f && F(e), o && o.d(f), t[13](null), s = !1, Ze(a);
    }
  };
}
function Np(t, e, n) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: f = !1 } = e, { color: d = "default" } = e, { elevation: h = 1 } = e, { transition: m = !1 } = e, _;
  function p() {
    return _;
  }
  function v(b) {
    le[b ? "unshift" : "push"](() => {
      _ = b, n(7, _);
    });
  }
  return t.$$set = (b) => {
    e = K(K({}, e), nt(b)), n(9, r = he(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "variant" in b && n(2, c = b.variant), "square" in b && n(3, f = b.square), "color" in b && n(4, d = b.color), "elevation" in b && n(5, h = b.elevation), "transition" in b && n(6, m = b.transition), "$$scope" in b && n(11, a = b.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    m,
    _,
    l,
    r,
    p,
    a,
    s,
    v
  ];
}
class nu extends ye {
  constructor(e) {
    super(), Ee(this, e, Np, kp, _e, {
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
Dt({
  class: "smui-paper__content",
  tag: "div"
});
Dt({
  class: "smui-paper__title",
  tag: "h5"
});
Dt({
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
var ds;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(ds || (ds = {}));
var Pp = "data-mdc-dom-announce";
function Hp(t, e) {
  wp.getInstance().say(t, e);
}
var wp = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var i, r, s = (i = n == null ? void 0 : n.priority) !== null && i !== void 0 ? i : ds.POLITE, a = (r = n == null ? void 0 : n.ownerDocument) !== null && r !== void 0 ? r : document, l = this.getLiveRegion(s, a);
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
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Pp, "true"), n.body.appendChild(i), i;
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
var gn;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(gn || (gn = {}));
var xt = {
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
var iu = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xt;
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
      n.stopPropagation(), this.adapter.notifyInteraction(gn.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var i = bt(n);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (pd(n)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(xt.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(xt.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(xt.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(n) {
      var i = n === Be.ENTER || n === Be.SPACEBAR, r = n === Be.BACKSPACE || n === Be.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Be.SPACEBAR ? gn.SPACEBAR_KEY : n === Be.ENTER ? gn.ENTER_KEY : n === Be.DELETE ? gn.DELETE_KEY : n === Be.BACKSPACE ? gn.BACKSPACE_KEY : gn.UNSPECIFIED;
    }, e;
  }(Lt)
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
var ru = (
  /** @class */
  function(t) {
    st(e, t);
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
        return new Ji(r, s);
      });
      var i = Ji.createAdapter(this);
      this.rippleSurface = n(this.root, new sr(i));
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
            xt.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          n.emit(
            xt.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, s) {
          n.root.setAttribute(r, s);
        }
      };
      return new iu(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(ir)
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
var $t;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})($t || ($t = {}));
var fn;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(fn || (fn = {}));
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
}, Qt = /* @__PURE__ */ new Set();
Qt.add(Pe.ARROW_LEFT_KEY);
Qt.add(Pe.ARROW_RIGHT_KEY);
Qt.add(Pe.ARROW_DOWN_KEY);
Qt.add(Pe.ARROW_UP_KEY);
Qt.add(Pe.END_KEY);
Qt.add(Pe.HOME_KEY);
Qt.add(Pe.IE_ARROW_LEFT_KEY);
Qt.add(Pe.IE_ARROW_RIGHT_KEY);
Qt.add(Pe.IE_ARROW_DOWN_KEY);
Qt.add(Pe.IE_ARROW_UP_KEY);
var Cn = /* @__PURE__ */ new Set();
Cn.add(Pe.ARROW_UP_KEY);
Cn.add(Pe.ARROW_DOWN_KEY);
Cn.add(Pe.HOME_KEY);
Cn.add(Pe.END_KEY);
Cn.add(Pe.IE_ARROW_UP_KEY);
Cn.add(Pe.IE_ARROW_DOWN_KEY);
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
var la = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Wn;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Wn || (Wn = {}));
var Rs = (
  /** @class */
  function(t) {
    st(e, t);
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
            return la;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return la;
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
      Qt.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, fn.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, fn.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Pe.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Wn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Pe.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Pe.TAB_INDEX, "0"), n === Wn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Wn.SHOULD_FOCUS : Wn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, i) {
      var r = this.adapter.isTrailingActionNavigable(), s = this.getDirection(n);
      if (Cn.has(n) || !r) {
        this.adapter.notifyNavigation(n, i);
        return;
      }
      if (i === fn.PRIMARY && s === $t.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === fn.TRAILING && s === $t.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, fn.NONE);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Pe.ARROW_LEFT_KEY || n === Pe.IE_ARROW_LEFT_KEY, s = n === Pe.ARROW_RIGHT_KEY || n === Pe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && s ? $t.LEFT : $t.RIGHT;
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
  }(Lt)
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
var su = (
  /** @class */
  function(t) {
    st(e, t);
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
        return new Ji(l, o);
      }), i === void 0 && (i = function(l) {
        return new ru(l);
      }), this.leadingIcon = this.root.querySelector(Pe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Pe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Pe.PRIMARY_ACTION_SELECTOR);
      var s = this.root.querySelector(Pe.TRAILING_ACTION_SELECTOR);
      s && (this.trailingAction = i(s));
      var a = ce(ce({}, Ji.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new sr(a));
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
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(xt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(xt.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(xt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(xt.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), t.prototype.destroy.call(this);
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
      return new Rs(i);
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
  }(ir)
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
var lu = {
  CHIP_SELECTOR: ".mdc-chip"
}, Ei = {
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
var Ds = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return lu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ei;
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
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(Ei.CHOICE) || this.adapter.hasClass(Ei.FILTER)) && this.toggleSelect(i);
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
      if (!(l === -1 || !Qt.has(r))) {
        var o = this.adapter.isRTL(), u = r === Pe.ARROW_LEFT_KEY || r === Pe.IE_ARROW_LEFT_KEY, c = r === Pe.ARROW_RIGHT_KEY || r === Pe.IE_ARROW_RIGHT_KEY, f = r === Pe.ARROW_DOWN_KEY || r === Pe.IE_ARROW_DOWN_KEY, d = !o && c || o && u || f, h = r === Pe.HOME_KEY, m = r === Pe.END_KEY;
        d ? l++ : h ? l = 0 : m ? l = a : l--, !(l < 0 || l > a) && (this.removeFocusFromChipsExcept(l), this.focusChipAction(l, r, s));
      }
    }, e.prototype.focusChipAction = function(n, i, r) {
      var s = Cn.has(i);
      if (s && r === fn.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (s && r === fn.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var a = this.getDirection(i);
      if (a === $t.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (a === $t.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Pe.ARROW_LEFT_KEY || n === Pe.IE_ARROW_LEFT_KEY, s = n === Pe.ARROW_RIGHT_KEY || n === Pe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && s ? $t.LEFT : $t.RIGHT;
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
        if (this.adapter.hasClass(Ei.CHOICE) && this.selectedChipIds.length > 0) {
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
  }(Lt)
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
var ar = Rs.strings, aa = ar.INTERACTION_EVENT, oa = ar.SELECTION_EVENT, ua = ar.REMOVAL_EVENT, ca = ar.NAVIGATION_EVENT, Fp = Ds.strings.CHIP_SELECTOR, fa = 0, Up = (
  /** @class */
  function(t) {
    st(e, t);
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
        return new su(i);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, i, r = this;
      try {
        for (var s = Tt(this.chipsList), a = s.next(); !a.done; a = s.next()) {
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
      }, this.listen(aa, this.handleChipInteraction), this.listen(oa, this.handleChipSelection), this.listen(ua, this.handleChipRemoval), this.listen(ca, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, i;
      try {
        for (var r = Tt(this.chipsList), s = r.next(); !s.done; s = r.next()) {
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
      this.unlisten(aa, this.handleChipInteraction), this.unlisten(oa, this.handleChipSelection), this.unlisten(ua, this.handleChipRemoval), this.unlisten(ca, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++fa, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        announceMessage: function(r) {
          Hp(r);
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
      return new Ds(i);
    }, e.prototype.instantiateChips = function(n) {
      var i = [].slice.call(this.root.querySelectorAll(Fp));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++fa, n(r);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === n)
          return i;
      return -1;
    }, e;
  }(ir)
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
const Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: su,
  MDCChipFoundation: Rs,
  MDCChipSet: Up,
  MDCChipSetFoundation: Ds,
  MDCChipTrailingAction: ru,
  MDCChipTrailingActionFoundation: iu,
  chipCssClasses: At,
  chipSetCssClasses: Ei,
  chipSetStrings: lu,
  chipStrings: Pe,
  trailingActionStrings: xt
}, Symbol.toStringTag, { value: "Module" }));
function da(t) {
  let e;
  return {
    c() {
      e = ee("div"), N(e, "class", "mdc-chip__ripple");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function ha(t) {
  let e;
  return {
    c() {
      e = ee("div"), N(e, "class", "mdc-chip__touch");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function Bp(t) {
  let e, n, i, r, s = (
    /*ripple*/
    t[3] && !/*$nonInteractive*/
    t[14] && da()
  );
  const a = (
    /*#slots*/
    t[34].default
  ), l = Se(
    a,
    t,
    /*$$scope*/
    t[38],
    null
  );
  let o = (
    /*touch*/
    t[4] && ha()
  );
  return {
    c() {
      s && s.c(), e = oe(), l && l.c(), n = oe(), o && o.c(), i = Ke();
    },
    m(u, c) {
      s && s.m(u, c), U(u, e, c), l && l.m(u, c), U(u, n, c), o && o.m(u, c), U(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? s || (s = da(), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), l && l.p && (!r || c[1] & /*$$scope*/
      128) && Le(
        l,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? Te(
          a,
          /*$$scope*/
          u[38],
          c,
          null
        ) : Oe(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = ha(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (I(l, u), r = !0);
    },
    o(u) {
      T(l, u), r = !1;
    },
    d(u) {
      u && (F(e), F(n), F(i)), s && s.d(u), l && l.d(u), o && o.d(u);
    }
  };
}
function Vp(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[6]
    ) },
    {
      use: [
        [
          kt,
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
      ).map(Yr).concat([
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
      $$slots: { default: [Bp] },
      $$scope: { ctx: l }
    };
    for (let c = 0; c < r.length; c += 1)
      u = K(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = K(u, de(r, [
      o[0] & /*tag*/
      64 && { tag: (
        /*tag*/
        l[6]
      ) },
      o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
      234930185 && {
        use: [
          [
            kt,
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
        ).map(Yr).concat([
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
  return s && (e = Nt(s, a(t)), t[35](e), e.$on("transitionend", function() {
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
      e && te(e.$$.fragment), n = Ke();
    },
    m(l, o) {
      e && x(e, l, o), U(l, n, o), i = !0;
    },
    p(l, o) {
      if (t = l, o[0] & /*component*/
      32 && s !== (s = /*component*/
      t[5])) {
        if (e) {
          we();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            $(u, 1);
          }), Fe();
        }
        s ? (e = Nt(s, a(t, o)), t[35](e), e.$on("transitionend", function() {
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
        ), te(e.$$.fragment), I(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
                kt,
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
            ).map(Yr).concat([
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
      i || (e && I(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(n), t[35](null), e && $(e, l);
    }
  };
}
const Yr = ([t, e]) => `${t}: ${e};`;
function Gp(t, e, n) {
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
  const { MDCChipFoundation: m } = Ms, _ = rt(Qe());
  let { use: p = [] } = e, { class: v = "" } = e, { style: b = "" } = e, { chip: C } = e, { ripple: A = !0 } = e, { touch: R = !1 } = e, { shouldRemoveOnTrailingIconClick: M = !0 } = e, { shouldFocusPrimaryActionOnClick: g = !0 } = e, O, B, y = {}, S = {}, E = {};
  const L = qe("SMUI:chips:chip:initialSelected");
  lt(t, L, (ne) => n(44, c = ne));
  let P = c, q, j;
  const X = qe("SMUI:chips:nonInteractive");
  lt(t, X, (ne) => n(14, f = ne));
  const k = qe("SMUI:chips:choice");
  lt(t, k, (ne) => n(40, a = ne));
  const D = qe("SMUI:chips:chip:index");
  lt(t, D, (ne) => n(39, s = ne));
  let { component: V = Ht } = e, { tag: ue = V === Ht ? "div" : void 0 } = e;
  const Ne = dt(M);
  lt(t, Ne, (ne) => n(43, u = ne)), ze("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Ne);
  const Ae = dt(P);
  lt(t, Ae, (ne) => n(42, o = ne)), ze("SMUI:chips:chip:isSelected", Ae);
  const Ye = dt(S);
  if (lt(t, Ye, (ne) => n(41, l = ne)), ze("SMUI:chips:chip:leadingIconClasses", Ye), ze("SMUI:chips:chip:focusable", a && P || s === 0), !C)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  ut(() => {
    n(7, B = new m({
      addClass: De,
      addClassToLeadingIcon: ie,
      eventTargetHasClass: (Xe, ht) => Xe && "classList" in Xe ? Xe.classList.contains(ht) : !1,
      focusPrimaryAction: () => {
        q && q.focus();
      },
      focusTrailingAction: () => {
        j && j.focus();
      },
      getAttribute: (Xe) => Ue().getAttribute(Xe),
      getCheckmarkBoundingClientRect: () => {
        const Xe = Ue().querySelector(".mdc-chip__checkmark");
        return Xe ? Xe.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Ve,
      getRootBoundingClientRect: () => Ue().getBoundingClientRect(),
      hasClass: Re,
      hasLeadingIcon: () => !!Ue().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Ue()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => j ? j.isNavigable() : !1,
      notifyInteraction: () => Ie(Ue(), "SMUIChip:interaction", { chipId: C }, void 0, !0),
      notifyNavigation: (Xe, ht) => Ie(Ue(), "SMUIChip:navigation", { chipId: C, key: Xe, source: ht }, void 0, !0),
      notifyRemoval: (Xe) => {
        Ie(Ue(), "SMUIChip:removal", { chipId: C, removedAnnouncement: Xe }, void 0, !0);
      },
      notifySelection: (Xe, ht) => Ie(Ue(), "SMUIChip:selection", { chipId: C, selected: Xe, shouldIgnore: ht }, void 0, !0),
      notifyTrailingIconInteraction: () => Ie(Ue(), "SMUIChip:trailingIconInteraction", { chipId: C }, void 0, !0),
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
      setPrimaryActionAttr: (Xe, ht) => {
        q && q.addAttr(Xe, ht);
      },
      setStyleProperty: We
    }));
    const ne = {
      chipId: C,
      get selected() {
        return P;
      },
      focusPrimaryAction: Z,
      focusTrailingAction: Me,
      removeFocus: je,
      setSelectedFromChipSet: St
    };
    return Ie(Ue(), "SMUIChipsChip:mount", ne), B.init(), () => {
      Ie(Ue(), "SMUIChipsChip:unmount", ne), B.destroy();
    };
  });
  function z(ne) {
    n(12, q = ne.detail);
  }
  function J(ne) {
    n(13, j = ne.detail);
  }
  function Re(ne) {
    return ne in y ? y[ne] : Ue().classList.contains(ne);
  }
  function De(ne) {
    y[ne] || n(10, y[ne] = !0, y);
  }
  function He(ne) {
    (!(ne in y) || y[ne]) && n(10, y[ne] = !1, y);
  }
  function ie(ne) {
    S[ne] || n(33, S[ne] = !0, S);
  }
  function W(ne) {
    (!(ne in S) || S[ne]) && n(33, S[ne] = !1, S);
  }
  function We(ne, Xe) {
    E[ne] != Xe && (Xe === "" || Xe == null ? (delete E[ne], n(11, E)) : n(11, E[ne] = Xe, E));
  }
  function Ve(ne) {
    return ne in E ? E[ne] : getComputedStyle(Ue()).getPropertyValue(ne);
  }
  function St(ne, Xe) {
    n(8, P = ne), B.setSelectedFromChipSet(P, Xe);
  }
  function Z() {
    B.focusPrimaryAction();
  }
  function Me() {
    B.focusTrailingAction();
  }
  function je() {
    B.removeFocus();
  }
  function Ue() {
    return O.getElement();
  }
  function Ot(ne) {
    le[ne ? "unshift" : "push"](() => {
      O = ne, n(9, O);
    });
  }
  const G = () => n(12, q = void 0), se = () => n(13, j = void 0);
  return t.$$set = (ne) => {
    e = K(K({}, e), nt(ne)), n(28, r = he(e, i)), "use" in ne && n(0, p = ne.use), "class" in ne && n(1, v = ne.class), "style" in ne && n(2, b = ne.style), "chip" in ne && n(29, C = ne.chip), "ripple" in ne && n(3, A = ne.ripple), "touch" in ne && n(4, R = ne.touch), "shouldRemoveOnTrailingIconClick" in ne && n(30, M = ne.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in ne && n(31, g = ne.shouldFocusPrimaryActionOnClick), "component" in ne && n(5, V = ne.component), "tag" in ne && n(6, ue = ne.tag), "$$scope" in ne && n(38, h = ne.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && Wt(Ne, u = M, u), t.$$.dirty[0] & /*selected*/
    256 && Wt(Ae, o = P, o), t.$$.dirty[1] & /*leadingIconClasses*/
    4 && Wt(Ye, l = S, l), t.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && B && B.getShouldRemoveOnTrailingIconClick() !== M && B.setShouldRemoveOnTrailingIconClick(M), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && B && B.setShouldFocusPrimaryActionOnClick(g);
  }, [
    p,
    v,
    b,
    A,
    R,
    V,
    ue,
    B,
    P,
    O,
    y,
    E,
    q,
    j,
    f,
    _,
    L,
    X,
    k,
    D,
    Ne,
    Ae,
    Ye,
    z,
    J,
    De,
    He,
    We,
    r,
    C,
    M,
    g,
    Ue,
    S,
    d,
    Ot,
    G,
    se,
    h
  ];
}
class jp extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      Gp,
      Vp,
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
function ma(t, e, n) {
  const i = t.slice();
  return i[37] = e[n], i[39] = n, i;
}
const qp = (t) => ({ chip: t[0] & /*chips*/
1 }), pa = (t) => ({ chip: (
  /*chip*/
  t[37]
) });
function Wp(t) {
  let e;
  const n = (
    /*#slots*/
    t[25].default
  ), i = Se(
    n,
    t,
    /*$$scope*/
    t[27],
    pa
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
      134217729) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[27],
        e ? Te(
          n,
          /*$$scope*/
          r[27],
          s,
          qp
        ) : Oe(
          /*$$scope*/
          r[27]
        ),
        pa
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function zp(t) {
  let e, n, i;
  return e = new oi({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        t[10][
          /*i*/
          t[39]
        ]
      ),
      $$slots: { default: [Wp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe();
    },
    m(r, s) {
      x(e, r, s), U(r, n, s), i = !0;
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
      i || (I(e.$$.fragment, r), i = !0);
    },
    o(r) {
      T(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && F(n), $(e, r);
    }
  };
}
function ga(t, e) {
  let n, i, r;
  return i = new oi({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [zp] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ke(), te(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      U(s, n, a), x(i, s, a), r = !0;
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
      r || (I(i.$$.fragment, s), r = !0);
    },
    o(s) {
      T(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && F(n), $(i, s);
    }
  };
}
function Kp(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, s, a, l, o, u = Pt(
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
    let m = ma(t, u, h), _ = c(m);
    i.set(_, n[h] = ga(_, m));
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
    d = K(d, f[h]);
  return {
    c() {
      e = ee("div");
      for (let h = 0; h < n.length; h += 1)
        n[h].c();
      me(e, d);
    },
    m(h, m) {
      U(h, e, m);
      for (let _ = 0; _ < n.length; _ += 1)
        n[_] && n[_].m(e, null);
      t[26](e), a = !0, l || (o = [
        fe(s = xe.call(
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
      134218761 && (u = Pt(
        /*chips*/
        h[0]
      ), we(), n = Mi(n, m, c, 1, h, u, i, e, Di, ga, null, ma), Fe()), me(e, d = de(f, [
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
          I(n[m]);
        a = !0;
      }
    },
    o(h) {
      for (let m = 0; m < n.length; m += 1)
        T(n[m]);
      a = !1;
    },
    d(h) {
      h && F(e);
      for (let m = 0; m < n.length; m += 1)
        n[m].d();
      t[26](null), l = !1, Ze(o);
    }
  };
}
function _a(t, e) {
  let n = new Set(t);
  for (let i of e)
    n.delete(i);
  return n;
}
function Xp(t, e, n) {
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
  const { MDCChipSetFoundation: c } = Ms, f = rt(Qe());
  let { use: d = [] } = e, { class: h = "" } = e, { chips: m = [] } = e, { key: _ = (z) => z } = e, { selected: p = void 0 } = e, { nonInteractive: v = !1 } = e, { choice: b = !1 } = e, { filter: C = !1 } = e, { input: A = !1 } = e, R, M, g = {}, O = /* @__PURE__ */ new WeakMap(), B = m.map((z) => b && p === z || C && p.indexOf(z) !== -1);
  const y = dt(v);
  lt(t, y, (z) => n(31, l = z)), ze("SMUI:chips:nonInteractive", y);
  const S = dt(b);
  lt(t, S, (z) => n(30, a = z)), ze("SMUI:chips:choice", S);
  const E = dt(C);
  lt(t, E, (z) => n(29, s = z)), ze("SMUI:chips:filter", E);
  let L = C ? new Set(p) : p;
  ut(() => {
    if (n(23, M = new c({
      announceMessage: nd,
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
      hasClass: (z) => Ae().classList.contains(z),
      isRTL: () => getComputedStyle(Ae()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (z) => {
        z >= 0 && z < m.length && (b && p === m[z] ? n(21, p = null) : C && p.indexOf(m[z]) !== -1 && (p.splice(p.indexOf(m[z]), 1), n(21, p)), m.splice(z, 1), n(0, m));
      },
      removeFocusFromChipAtIndex: (z) => {
        var J;
        (J = V(m[z])) === null || J === void 0 || J.removeFocus();
      },
      selectChipAtIndex: (z, J, Re) => {
        var De;
        if (z >= 0 && z < m.length) {
          if (C) {
            const He = p.indexOf(m[z]);
            J && He === -1 ? (p.push(m[z]), n(21, p)) : !J && He !== -1 && (p.splice(He, 1), n(21, p));
          } else
            b && (J || p === m[z]) && n(21, p = J ? m[z] : null);
          (De = V(m[z])) === null || De === void 0 || De.setSelectedFromChipSet(J, Re);
        }
      }
    })), M.init(), b && p != null)
      M.select(p);
    else if (C && p.length)
      for (const z of p)
        M.select(z);
    return () => {
      M.destroy();
    };
  });
  function P(z) {
    const J = z.detail;
    ue(J.chipId, J);
  }
  function q(z) {
    const J = z.detail;
    Ne(J.chipId);
  }
  function j(z) {
    M && M.handleChipInteraction(z.detail);
  }
  function X(z) {
    M && M.handleChipSelection(z.detail);
  }
  function k(z) {
    M && M.handleChipRemoval(z.detail);
  }
  function D(z) {
    M && M.handleChipNavigation(z.detail);
  }
  function V(z) {
    return z instanceof Object ? O.get(z) : g[z];
  }
  function ue(z, J) {
    z instanceof Object ? O.set(z, J) : g[z] = J;
  }
  function Ne(z) {
    z instanceof Object ? O.delete(z) : delete g[z];
  }
  function Ae() {
    return R;
  }
  function Ye(z) {
    le[z ? "unshift" : "push"](() => {
      R = z, n(8, R);
    });
  }
  return t.$$set = (z) => {
    e = K(K({}, e), nt(z)), n(20, r = he(e, i)), "use" in z && n(1, d = z.use), "class" in z && n(2, h = z.class), "chips" in z && n(0, m = z.chips), "key" in z && n(3, _ = z.key), "selected" in z && n(21, p = z.selected), "nonInteractive" in z && n(4, v = z.nonInteractive), "choice" in z && n(5, b = z.choice), "filter" in z && n(6, C = z.filter), "input" in z && n(7, A = z.input), "$$scope" in z && n(27, u = z.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*nonInteractive*/
    16 && Wt(y, l = v, l), t.$$.dirty[0] & /*choice*/
    32 && Wt(S, a = b, a), t.$$.dirty[0] & /*filter*/
    64 && Wt(E, s = C, s), t.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && M && b && L !== p && (n(24, L = p), M.select(p)), t.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && M && C) {
      const z = new Set(p), J = _a(L, z), Re = _a(z, L);
      if (J.size || Re.size) {
        n(24, L = z);
        for (let De of J)
          m.indexOf(De) !== -1 && M.handleChipSelection({ chipId: De, selected: !1 });
        for (let De of Re)
          M.handleChipSelection({ chipId: De, selected: !0 });
      }
    }
  }, [
    m,
    d,
    h,
    _,
    v,
    b,
    C,
    A,
    R,
    f,
    B,
    y,
    S,
    E,
    P,
    q,
    j,
    X,
    k,
    D,
    r,
    p,
    Ae,
    M,
    L,
    o,
    Ye,
    u
  ];
}
class Yp extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      Xp,
      Kp,
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
function Zp(t) {
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
    u = K(u, o[c]);
  return {
    c() {
      e = ee("span"), n = ot("svg"), i = ot("path"), N(i, "class", "mdc-chip__checkmark-path"), N(i, "fill", "none"), N(i, "stroke", "black"), N(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), N(n, "class", "mdc-chip__checkmark-svg"), N(n, "viewBox", "-2 -3 30 30"), me(e, u);
    },
    m(c, f) {
      U(c, e, f), Q(e, n), Q(n, i), t[5](e), a || (l = fe(s = xe.call(
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
    i: $e,
    o: $e,
    d(c) {
      c && F(e), t[5](null), a = !1, l();
    }
  };
}
function Qp(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { use: s = [] } = e, { class: a = "" } = e, l;
  function o() {
    return l;
  }
  function u(c) {
    le[c ? "unshift" : "push"](() => {
      l = c, n(2, l);
    });
  }
  return t.$$set = (c) => {
    e = K(K({}, e), nt(c)), n(3, r = he(e, i)), "use" in c && n(0, s = c.use), "class" in c && n(1, a = c.class);
  }, [s, a, l, r, o, u];
}
class Jp extends ye {
  constructor(e) {
    super(), Ee(this, e, Qp, Zp, _e, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function ba(t) {
  let e, n, i = {};
  return e = new Jp({ props: i }), t[23](e), {
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
      n || (I(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[23](null), $(e, r);
    }
  };
}
function xp(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[22].default
  ), a = Se(
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
    o = K(o, l[u]);
  return {
    c() {
      e = ee("span"), n = ee("span"), a && a.c(), N(n, "class", "mdc-chip__text"), me(e, o);
    },
    m(u, c) {
      U(u, e, c), Q(e, n), a && a.m(n, null), t[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && Le(
        a,
        s,
        u,
        /*$$scope*/
        u[21],
        r ? Te(
          s,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Oe(
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
      r || (I(a, u), r = !0);
    },
    o(u) {
      T(a, u), r = !1;
    },
    d(u) {
      u && F(e), a && a.d(u), t[24](null);
    }
  };
}
function $p(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[22].default
  ), r = Se(
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
      U(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, a) {
      r && r.p && (!n || a & /*$$scope*/
      2097152) && Le(
        r,
        i,
        s,
        /*$$scope*/
        s[21],
        n ? Te(
          i,
          /*$$scope*/
          s[21],
          a,
          null
        ) : Oe(
          /*$$scope*/
          s[21]
        ),
        null
      );
    },
    i(s) {
      n || (I(r, s), n = !0);
    },
    o(s) {
      T(r, s), n = !1;
    },
    d(s) {
      s && F(e), r && r.d(s);
    }
  };
}
function eg(t) {
  let e, n, i, r, s, a, l, o, u = (
    /*$filter*/
    t[3] && ba(t)
  );
  const c = [$p, xp], f = [];
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
      u && u.m(h, m), U(h, e, m), U(h, n, m), f[i].m(n, null), t[25](n), a = !0, l || (o = [
        fe(s = xe.call(
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
      8 && I(u, 1)) : (u = ba(h), u.c(), I(u, 1), u.m(e.parentNode, e)) : u && (we(), T(u, 1, 1, () => {
        u = null;
      }), Fe());
      let _ = i;
      i = d(h), i === _ ? f[i].p(h, m) : (we(), T(f[_], 1, 1, () => {
        f[_] = null;
      }), Fe(), r = f[i], r ? r.p(h, m) : (r = f[i] = c[i](h), r.c()), I(r, 1), r.m(n, null)), s && ge(s.update) && m & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (I(u), I(r), a = !0);
    },
    o(h) {
      T(u), T(r), a = !1;
    },
    d(h) {
      h && (F(e), F(n)), u && u.d(h), f[i].d(), t[25](null), l = !1, Ze(o);
    }
  };
}
function tg(t, e, n) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let s = he(e, r), a, l, o, u, { $$slots: c = {}, $$scope: f } = e;
  const d = rt(Qe());
  let { use: h = [] } = e, { class: m = "" } = e, { tabindex: _ = qe("SMUI:chips:chip:focusable") ? 0 : -1 } = e, p, v, b, C = {};
  const A = qe("SMUI:chips:nonInteractive");
  lt(t, A, (j) => n(9, o = j));
  const R = qe("SMUI:chips:choice");
  lt(t, R, (j) => n(2, a = j));
  const M = qe("SMUI:chips:filter");
  lt(t, M, (j) => n(3, l = j));
  const g = qe("SMUI:chips:chip:isSelected");
  lt(t, g, (j) => n(10, u = j)), ut(() => {
    let j = { focus: y, addAttr: O };
    return Ie(E(), "SMUIChipsChipPrimaryAction:mount", j), () => {
      Ie(E(), "SMUIChipsChipPrimaryAction:unmount", j);
    };
  });
  function O(j, X) {
    C[j] !== X && n(7, C[j] = X, C);
  }
  function B(j) {
    C.tabindex !== p.getAttribute("tabindex") ? ys().then(j) : j();
  }
  function y() {
    B(() => {
      b && b.focus();
    });
  }
  function S() {
    return v && v.getElement();
  }
  function E() {
    return p;
  }
  function L(j) {
    le[j ? "unshift" : "push"](() => {
      v = j, n(5, v);
    });
  }
  function P(j) {
    le[j ? "unshift" : "push"](() => {
      b = j, n(6, b);
    });
  }
  function q(j) {
    le[j ? "unshift" : "push"](() => {
      p = j, n(4, p);
    });
  }
  return t.$$set = (j) => {
    e = K(K({}, e), nt(j)), n(16, s = he(e, r)), "use" in j && n(0, h = j.use), "class" in j && n(1, m = j.class), "tabindex" in j && n(17, _ = j.tabindex), "$$scope" in j && n(21, f = j.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*$filter, $choice, tabindex*/
    131084 && n(8, i = {
      role: l ? "checkbox" : a ? "radio" : "button",
      tabindex: _
    });
  }, [
    h,
    m,
    a,
    l,
    p,
    v,
    b,
    C,
    i,
    o,
    u,
    d,
    A,
    R,
    M,
    g,
    s,
    _,
    y,
    S,
    E,
    f,
    c,
    L,
    P,
    q
  ];
}
class ng extends ye {
  constructor(e) {
    super(), Ee(this, e, tg, eg, _e, {
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
function va(t) {
  let e;
  return {
    c() {
      e = ee("span"), N(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(n, i) {
      U(n, e, i);
    },
    d(n) {
      n && F(e);
    }
  };
}
function ig(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, _, p = (
    /*touch*/
    t[4] && va()
  );
  const v = (
    /*#slots*/
    t[23].default
  ), b = Se(
    v,
    t,
    /*$$scope*/
    t[22],
    null
  );
  let C = [
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
  ], A = {};
  for (let g = 0; g < C.length; g += 1)
    A = K(A, C[g]);
  let R = [
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
      ).map(Ia).concat([
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
    nn(
      /*$$restProps*/
      t[17],
      ["icon$"]
    )
  ], M = {};
  for (let g = 0; g < R.length; g += 1)
    M = K(M, R[g]);
  return {
    c() {
      e = ee("button"), n = ee("span"), i = oe(), p && p.c(), r = oe(), s = ee("span"), b && b.c(), N(n, "class", "mdc-deprecated-chip-trailing-action__ripple"), me(s, A), me(e, M);
    },
    m(g, O) {
      U(g, e, O), Q(e, n), Q(e, i), p && p.m(e, null), Q(e, r), Q(e, s), b && b.m(s, null), e.autofocus && e.focus(), t[24](e), h = !0, m || (_ = [
        fe(l = xe.call(
          null,
          s,
          /*icon$use*/
          t[6]
        )),
        fe(f = kt.call(null, e, {
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
        fe(d = xe.call(
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
    p(g, [O]) {
      t = g, /*touch*/
      t[4] ? p || (p = va(), p.c(), p.m(e, r)) : p && (p.d(1), p = null), b && b.p && (!h || O & /*$$scope*/
      4194304) && Le(
        b,
        v,
        t,
        /*$$scope*/
        t[22],
        h ? Te(
          v,
          /*$$scope*/
          t[22],
          O,
          null
        ) : Oe(
          /*$$scope*/
          t[22]
        ),
        null
      ), me(s, A = de(C, [
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
      ), me(e, M = de(R, [
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
        ).map(Ia).concat([
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
        131072 && nn(
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
    i(g) {
      h || (I(b, g), h = !0);
    },
    o(g) {
      T(b, g), h = !1;
    },
    d(g) {
      g && F(e), p && p.d(), b && b.d(g), t[24](null), m = !1, Ze(_);
    }
  };
}
const Ia = ([t, e]) => `${t}: ${e};`;
function rg(t, e, n) {
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
  const { MDCChipTrailingActionFoundation: l } = Ms, o = rt(Qe());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { ripple: d = !0 } = e, { touch: h = !1 } = e, { nonNavigable: m = !1 } = e, { icon$use: _ = [] } = e, { icon$class: p = "" } = e, v, b, C = {}, A = {}, R = {};
  ut(() => {
    n(9, b = new l({
      focus: () => {
        const k = q();
        S(() => {
          k.focus();
        });
      },
      getAttribute: B,
      notifyInteraction: (k) => Ie(q(), "SMUIChipTrailingAction:interaction", { trigger: k }, void 0, !0),
      notifyNavigation: (k) => {
        Ie(q(), "SMUIChipTrailingAction:navigation", { key: k }, void 0, !0);
      },
      setAttribute: y
    }));
    const X = { isNavigable: E, focus: L, removeFocus: P };
    return Ie(q(), "SMUIChipsChipTrailingAction:mount", X), b.init(), () => {
      Ie(q(), "SMUIChipsChipTrailingAction:unmount", X), b.destroy();
    };
  });
  function M(X) {
    C[X] || n(10, C[X] = !0, C);
  }
  function g(X) {
    (!(X in C) || C[X]) && n(10, C[X] = !1, C);
  }
  function O(X, k) {
    A[X] != k && (k === "" || k == null ? (delete A[X], n(11, A)) : n(11, A[X] = k, A));
  }
  function B(X) {
    var k;
    return X in R ? (k = R[X]) !== null && k !== void 0 ? k : null : q().getAttribute(X);
  }
  function y(X, k) {
    R[X] !== k && n(12, R[X] = k, R);
  }
  function S(X) {
    R.tabindex !== v.getAttribute("tabindex") ? ys().then(X) : X();
  }
  function E() {
    return b.isNavigable();
  }
  function L() {
    b.focus();
  }
  function P() {
    b.removeFocus();
  }
  function q() {
    return v;
  }
  function j(X) {
    le[X ? "unshift" : "push"](() => {
      v = X, n(8, v);
    });
  }
  return t.$$set = (X) => {
    e = K(K({}, e), nt(X)), n(17, r = he(e, i)), "use" in X && n(0, u = X.use), "class" in X && n(1, c = X.class), "style" in X && n(2, f = X.style), "ripple" in X && n(3, d = X.ripple), "touch" in X && n(4, h = X.touch), "nonNavigable" in X && n(5, m = X.nonNavigable), "icon$use" in X && n(6, _ = X.icon$use), "icon$class" in X && n(7, p = X.icon$class), "$$scope" in X && n(22, a = X.$$scope);
  }, [
    u,
    c,
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    C,
    A,
    R,
    o,
    M,
    g,
    O,
    r,
    E,
    L,
    P,
    q,
    a,
    s,
    j
  ];
}
class sg extends ye {
  constructor(e) {
    super(), Ee(this, e, rg, ig, _e, {
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
function lg(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), r = Se(
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
      U(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, [a]) {
      r && r.p && (!n || a & /*$$scope*/
      1) && Le(
        r,
        i,
        s,
        /*$$scope*/
        s[0],
        n ? Te(
          i,
          /*$$scope*/
          s[0],
          a,
          null
        ) : Oe(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      n || (I(r, s), n = !0);
    },
    o(s) {
      T(r, s), n = !1;
    },
    d(s) {
      s && F(e), r && r.d(s);
    }
  };
}
function ag(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  return t.$$set = (s) => {
    "$$scope" in s && n(0, r = s.$$scope);
  }, [r, i];
}
class hn extends ye {
  constructor(e) {
    super(), Ee(this, e, ag, lg, _e, {});
  }
}
function og(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e8eaed");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function ug(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [og] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function cg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class fg extends ye {
  constructor(e) {
    super(), Ee(this, e, cg, ug, _e, { svgStyles: 0 });
  }
}
function dg(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function hg(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [dg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function mg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class au extends ye {
  constructor(e) {
    super(), Ee(this, e, mg, hg, _e, { svgStyles: 0 });
  }
}
function pg(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function gg(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [pg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function _g(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class bg extends ye {
  constructor(e) {
    super(), Ee(this, e, _g, gg, _e, { svgStyles: 0 });
  }
}
function vg(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function Ig(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [vg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Eg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class yg extends ye {
  constructor(e) {
    super(), Ee(this, e, Eg, Ig, _e, { svgStyles: 0 });
  }
}
function Ag(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e8eaed");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
    },
    p: $e,
    d(i) {
      i && F(e);
    }
  };
}
function Cg(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [Ag] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Sg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Tg extends ye {
  constructor(e) {
    super(), Ee(this, e, Sg, Cg, _e, { svgStyles: 0 });
  }
}
function Lg(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function Og(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [Lg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Rg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Dg extends ye {
  constructor(e) {
    super(), Ee(this, e, Rg, Og, _e, { svgStyles: 0 });
  }
}
function Mg(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M200-440v-80h560v80H200Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(e, "fill", "#e3e3e3");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function kg(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [Mg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Ng(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Pg extends ye {
  constructor(e) {
    super(), Ee(this, e, Ng, kg, _e, { svgStyles: 0 });
  }
}
function Hg(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function wg(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [Hg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Fg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Ug extends ye {
  constructor(e) {
    super(), Ee(this, e, Fg, wg, _e, { svgStyles: 0 });
  }
}
function Bg(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), N(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
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
      i && F(e);
    }
  };
}
function Vg(t) {
  let e, n;
  return e = new hn({
    props: {
      $$slots: { default: [Bg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Gg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class jg extends ye {
  constructor(e) {
    super(), Ee(this, e, Gg, Vg, _e, { svgStyles: 0 });
  }
}
function qg(t) {
  let e;
  return {
    c() {
      e = ct(
        /*title*/
        t[0]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i & /*title*/
      1 && pt(
        e,
        /*title*/
        n[0]
      );
    },
    d(n) {
      n && F(e);
    }
  };
}
function Ea(t) {
  let e, n;
  return e = new sg({
    props: {
      $$slots: { default: [Wg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Wg(t) {
  let e, n;
  return e = new au({
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
    p: $e,
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function zg(t) {
  let e, n, i, r;
  e = new ng({
    props: {
      $$slots: { default: [qg] },
      $$scope: { ctx: t }
    }
  });
  let s = (
    /*closeable*/
    t[1] && !/*disabled*/
    t[3] && Ea(t)
  );
  return {
    c() {
      te(e.$$.fragment), n = oe(), s && s.c(), i = Ke();
    },
    m(a, l) {
      x(e, a, l), U(a, n, l), s && s.m(a, l), U(a, i, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, title*/
      17 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? s ? (s.p(a, l), l & /*closeable, disabled*/
      10 && I(s, 1)) : (s = Ea(a), s.c(), I(s, 1), s.m(i.parentNode, i)) : s && (we(), T(s, 1, 1, () => {
        s = null;
      }), Fe());
    },
    i(a) {
      r || (I(e.$$.fragment, a), I(s), r = !0);
    },
    o(a) {
      T(e.$$.fragment, a), T(s), r = !1;
    },
    d(a) {
      a && (F(n), F(i)), $(e, a), s && s.d(a);
    }
  };
}
function Kg(t) {
  let e, n;
  return e = new jp({
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
      $$slots: { default: [zg] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Xg(t, e, n) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: s } = e, { disabled: a = !1 } = e;
  return t.$$set = (l) => {
    "title" in l && n(0, i = l.title), "closeable" in l && n(1, r = l.closeable), "callback" in l && n(2, s = l.callback), "disabled" in l && n(3, a = l.disabled);
  }, [i, r, s, a];
}
class Yg extends ye {
  constructor(e) {
    super(), Ee(this, e, Xg, Kg, _e, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
function Zg(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = ee("div"), n = ee("input"), i = oe(), r = ee("label"), s = ct(
        /*label*/
        t[1]
      ), a = oe(), l = ee("span"), N(n, "type", "date"), N(n, "id", "datetime-picker"), N(n, "class", "custom-text-field__input svelte-ar6zwk"), N(n, "placeholder", ""), N(r, "for", "datetime-picker"), N(r, "class", "custom-floating-label svelte-ar6zwk"), N(l, "class", "custom-line svelte-ar6zwk"), N(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      U(c, e, f), Q(e, n), tn(
        n,
        /*value*/
        t[0]
      ), Q(e, i), Q(e, r), Q(r, s), Q(e, a), Q(e, l), o || (u = [
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
      1 && tn(
        n,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && pt(
        s,
        /*label*/
        c[1]
      );
    },
    i: $e,
    o: $e,
    d(c) {
      c && F(e), o = !1, Ze(u);
    }
  };
}
function Qg(t, e, n) {
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
class Jg extends ye {
  constructor(e) {
    super(), Ee(this, e, Qg, Zg, _e, { label: 1, value: 0 });
  }
}
const Rt = [];
for (let t = 0; t < 256; ++t)
  Rt.push((t + 256).toString(16).slice(1));
function xg(t, e = 0) {
  return (Rt[t[e + 0]] + Rt[t[e + 1]] + Rt[t[e + 2]] + Rt[t[e + 3]] + "-" + Rt[t[e + 4]] + Rt[t[e + 5]] + "-" + Rt[t[e + 6]] + Rt[t[e + 7]] + "-" + Rt[t[e + 8]] + Rt[t[e + 9]] + "-" + Rt[t[e + 10]] + Rt[t[e + 11]] + Rt[t[e + 12]] + Rt[t[e + 13]] + Rt[t[e + 14]] + Rt[t[e + 15]]).toLowerCase();
}
let Zr;
const $g = new Uint8Array(16);
function e_() {
  if (!Zr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Zr = crypto.getRandomValues.bind(crypto);
  }
  return Zr($g);
}
const t_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ya = { randomUUID: t_ };
function _n(t, e, n) {
  var r;
  if (ya.randomUUID && !t)
    return ya.randomUUID();
  t = t || {};
  const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? e_();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, xg(i);
}
const n_ = (t) => ({}), Aa = (t) => ({});
function Ca(t) {
  let e, n, i;
  function r(a) {
    t[16](a);
  }
  let s = { label: "Input" };
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new _m({ props: s }), le.push(() => It(e, "value", r)), {
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
        a[5], vt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (I(e.$$.fragment, a), i = !0);
      },
      o(a) {
        T(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function Sa(t) {
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
    t[1]), e = new tu({ props: l }), le.push(() => It(e, "value", s)), le.push(() => It(e, "selectedOptionIndex", a)), {
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
        u[5], vt(() => n = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, f.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], vt(() => i = !1)), e.$set(f);
      },
      i(u) {
        r || (I(e.$$.fragment, u), r = !0);
      },
      o(u) {
        T(e.$$.fragment, u), r = !1;
      },
      d(u) {
        $(e, u);
      }
    }
  );
}
function Ta(t) {
  let e, n, i;
  function r(a) {
    t[19](a);
  }
  let s = {};
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new Jg({ props: s }), le.push(() => It(e, "value", r)), {
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
        a[5], vt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (I(e.$$.fragment, a), i = !0);
      },
      o(a) {
        T(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function La(t) {
  let e, n, i;
  function r(a) {
    t[20](a);
  }
  let s = {};
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new d_({ props: s }), le.push(() => It(e, "value", r)), {
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
        a[5], vt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (I(e.$$.fragment, a), i = !0);
      },
      o(a) {
        T(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function i_(t) {
  let e;
  return {
    c() {
      e = ct(
        /*addFilterLabel*/
        t[3]
      );
    },
    m(n, i) {
      U(n, e, i);
    },
    p(n, i) {
      i & /*addFilterLabel*/
      8 && pt(
        e,
        /*addFilterLabel*/
        n[3]
      );
    },
    d(n) {
      n && F(e);
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
  return e = new Yg({
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
      n || (I(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function s_(t) {
  var E, L, P, q, j, X, k, D;
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, _, p, v, b, C;
  function A(V) {
    t[15](V);
  }
  let R = {
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
  t[6] !== void 0 && (R.value = /*selectedFilterType*/
  t[6]), r = new tu({ props: R }), le.push(() => It(r, "value", A));
  let M = (
    /*getSelectedFilterType*/
    ((L = (E = t[7]) == null ? void 0 : E.inputType) == null ? void 0 : L.type) === "string" && Ca(t)
  ), g = (
    /*getSelectedFilterType*/
    ((q = (P = t[7]) == null ? void 0 : P.inputType) == null ? void 0 : q.type) === "select" && Sa(t)
  ), O = (
    /*getSelectedFilterType*/
    ((X = (j = t[7]) == null ? void 0 : j.inputType) == null ? void 0 : X.type) === "datepicker" && Ta(t)
  ), B = (
    /*getSelectedFilterType*/
    ((D = (k = t[7]) == null ? void 0 : k.inputType) == null ? void 0 : D.type) === "timepicker" && La(t)
  );
  d = new Os({
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
  ), S = Se(
    y,
    t,
    /*$$scope*/
    t[22],
    Aa
  );
  return b = new Yp({
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
      e = ee("div"), n = ee("div"), i = ee("div"), te(r.$$.fragment), a = oe(), M && M.c(), l = oe(), g && g.c(), o = oe(), O && O.c(), u = oe(), B && B.c(), c = oe(), f = ee("div"), te(d.$$.fragment), h = oe(), S && S.c(), m = oe(), _ = ee("div"), p = oe(), v = ee("div"), te(b.$$.fragment), N(i, "class", "filter-input-controls svelte-1tmo1p6"), N(f, "class", "filter-button-controls svelte-1tmo1p6"), N(n, "class", "input-section svelte-1tmo1p6"), N(_, "class", "separator svelte-1tmo1p6"), N(v, "class", "chip-section svelte-1tmo1p6"), N(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(V, ue) {
      U(V, e, ue), Q(e, n), Q(n, i), x(r, i, null), Q(i, a), M && M.m(i, null), Q(i, l), g && g.m(i, null), Q(i, o), O && O.m(i, null), Q(i, u), B && B.m(i, null), Q(n, c), Q(n, f), x(d, f, null), Q(f, h), S && S.m(f, null), Q(e, m), Q(e, _), Q(e, p), Q(e, v), x(b, v, null), C = !0;
    },
    p(V, ue) {
      var z, J, Re, De, He, ie, W, We;
      const Ne = {};
      ue & /*disabled*/
      4 && (Ne.disabled = /*disabled*/
      V[2]), ue & /*selectFilterLabel*/
      16 && (Ne.label = /*selectFilterLabel*/
      V[4]), ue & /*convertTypeToSelection*/
      512 && (Ne.data = /*convertTypeToSelection*/
      V[9]), !s && ue & /*selectedFilterType*/
      64 && (s = !0, Ne.value = /*selectedFilterType*/
      V[6], vt(() => s = !1)), r.$set(Ne), /*getSelectedFilterType*/
      ((J = (z = V[7]) == null ? void 0 : z.inputType) == null ? void 0 : J.type) === "string" ? M ? (M.p(V, ue), ue & /*getSelectedFilterType*/
      128 && I(M, 1)) : (M = Ca(V), M.c(), I(M, 1), M.m(i, l)) : M && (we(), T(M, 1, 1, () => {
        M = null;
      }), Fe()), /*getSelectedFilterType*/
      ((De = (Re = V[7]) == null ? void 0 : Re.inputType) == null ? void 0 : De.type) === "select" ? g ? (g.p(V, ue), ue & /*getSelectedFilterType*/
      128 && I(g, 1)) : (g = Sa(V), g.c(), I(g, 1), g.m(i, o)) : g && (we(), T(g, 1, 1, () => {
        g = null;
      }), Fe()), /*getSelectedFilterType*/
      ((ie = (He = V[7]) == null ? void 0 : He.inputType) == null ? void 0 : ie.type) === "datepicker" ? O ? (O.p(V, ue), ue & /*getSelectedFilterType*/
      128 && I(O, 1)) : (O = Ta(V), O.c(), I(O, 1), O.m(i, u)) : O && (we(), T(O, 1, 1, () => {
        O = null;
      }), Fe()), /*getSelectedFilterType*/
      ((We = (W = V[7]) == null ? void 0 : W.inputType) == null ? void 0 : We.type) === "timepicker" ? B ? (B.p(V, ue), ue & /*getSelectedFilterType*/
      128 && I(B, 1)) : (B = La(V), B.c(), I(B, 1), B.m(i, null)) : B && (we(), T(B, 1, 1, () => {
        B = null;
      }), Fe());
      const Ae = {};
      ue & /*addFilterDisabled*/
      256 && (Ae.disabled = /*addFilterDisabled*/
      V[8]), ue & /*$$scope, addFilterLabel*/
      4194312 && (Ae.$$scope = { dirty: ue, ctx: V }), d.$set(Ae), S && S.p && (!C || ue & /*$$scope*/
      4194304) && Le(
        S,
        y,
        V,
        /*$$scope*/
        V[22],
        C ? Te(
          y,
          /*$$scope*/
          V[22],
          ue,
          n_
        ) : Oe(
          /*$$scope*/
          V[22]
        ),
        Aa
      );
      const Ye = {};
      ue & /*activeFilters*/
      1 && (Ye.chips = /*activeFilters*/
      V[0]), ue & /*$$scope, chip*/
      37748736 && (Ye.$$scope = { dirty: ue, ctx: V }), b.$set(Ye);
    },
    i(V) {
      C || (I(r.$$.fragment, V), I(M), I(g), I(O), I(B), I(d.$$.fragment, V), I(S, V), I(b.$$.fragment, V), C = !0);
    },
    o(V) {
      T(r.$$.fragment, V), T(M), T(g), T(O), T(B), T(d.$$.fragment, V), T(S, V), T(b.$$.fragment, V), C = !1;
    },
    d(V) {
      V && F(e), $(r), M && M.d(), g && g.d(), O && O.d(), B && B.d(), $(d), S && S.d(V), $(b);
    }
  };
}
function l_(t) {
  let e, n;
  return e = new nu({
    props: {
      $$slots: { default: [s_] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function a_(t, e, n) {
  let i, r, s, { $$slots: a = {}, $$scope: l } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: f = -1 } = e, { disabled: d = !1 } = e, { addFilterLabel: h = "Add Filter" } = e, { selectFilterLabel: m = "Filter Types" } = e, _ = "", p = "";
  function v() {
    var E;
    if (!p || !_) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s) {
      console.warn("Filter type not found");
      return;
    }
    let L = [
      ...u,
      {
        id: _n(),
        key: s.label.toLowerCase(),
        value: _,
        operation: "=",
        text: `${p}: ${c && (!((E = s.inputType.options) === null || E === void 0) && E.length) ? s.inputType.options[f].label : _}`,
        disabled: !1
      }
    ];
    n(0, u = L), A(), C();
  }
  function b(E) {
    setTimeout(
      () => {
        n(0, u = u.filter((L) => L.id !== E)), A();
      },
      0
    );
  }
  function C() {
    n(5, _ = ""), n(6, p = void 0);
  }
  function A() {
    const E = [...u];
    E.find((L) => L.key === "uuid") ? E.filter((L) => L.key !== "uuid").forEach((L) => {
      L.disabled = !0;
    }) : E.forEach((L) => {
      L.disabled = !1;
    }), n(0, u = E);
  }
  function R(E) {
    p = E, n(6, p);
  }
  function M(E) {
    _ = E, n(5, _);
  }
  function g(E) {
    _ = E, n(5, _);
  }
  function O(E) {
    f = E, n(1, f);
  }
  function B(E) {
    _ = E, n(5, _);
  }
  function y(E) {
    _ = E, n(5, _);
  }
  const S = (E) => b(E.id);
  return t.$$set = (E) => {
    "filterTypes" in E && n(12, o = E.filterTypes), "activeFilters" in E && n(0, u = E.activeFilters), "useOptionLabelInChipText" in E && n(13, c = E.useOptionLabelInChipText), "selectedOptionIndex" in E && n(1, f = E.selectedOptionIndex), "disabled" in E && n(2, d = E.disabled), "addFilterLabel" in E && n(3, h = E.addFilterLabel), "selectFilterLabel" in E && n(4, m = E.selectFilterLabel), "$$scope" in E && n(22, l = E.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*filterTypes*/
    4096 && n(9, i = o.map((E) => ({ value: E.label, label: E.label }))), t.$$.dirty & /*selectedFilterType, inputValue*/
    96 && n(8, r = !p || !_), t.$$.dirty & /*filterTypes, selectedFilterType*/
    4160 && n(7, s = o.find((E) => E.label === p));
  }, [
    u,
    f,
    d,
    h,
    m,
    _,
    p,
    s,
    r,
    i,
    v,
    b,
    o,
    c,
    a,
    R,
    M,
    g,
    O,
    B,
    y,
    S,
    l
  ];
}
class Oa extends ye {
  constructor(e) {
    super(), Ee(this, e, a_, l_, _e, {
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
function Ra(t) {
  let e, n, i, r, s, a;
  return {
    c() {
      e = ee("div"), n = ee("div"), i = ee("div"), r = oe(), s = ee("span"), a = ct(
        /*message*/
        t[1]
      ), N(i, "class", "loading-spinner svelte-quxj5m"), N(s, "class", "loading-message svelte-quxj5m"), N(n, "class", "loading-spinner-container svelte-quxj5m"), N(e, "class", "overlay svelte-quxj5m");
    },
    m(l, o) {
      U(l, e, o), Q(e, n), Q(n, i), Q(n, r), Q(n, s), Q(s, a);
    },
    p(l, o) {
      o & /*message*/
      2 && pt(
        a,
        /*message*/
        l[1]
      );
    },
    d(l) {
      l && F(e);
    }
  };
}
function o_(t) {
  let e, n = !/*loadingDone*/
  t[0] && Ra(t);
  return {
    c() {
      e = ee("div"), n && n.c();
    },
    m(i, r) {
      U(i, e, r), n && n.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? n && (n.d(1), n = null) : n ? n.p(i, r) : (n = Ra(i), n.c(), n.m(e, null));
    },
    i: $e,
    o: $e,
    d(i) {
      i && F(e), n && n.d();
    }
  };
}
function u_(t, e, n) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return t.$$set = (s) => {
    "loadingDone" in s && n(0, i = s.loadingDone), "message" in s && n(1, r = s.message);
  }, [i, r];
}
class ou extends ye {
  constructor(e) {
    super(), Ee(this, e, u_, o_, _e, { loadingDone: 0, message: 1 });
  }
}
function c_(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = ee("div"), n = ee("input"), i = oe(), r = ee("label"), s = ct(
        /*label*/
        t[1]
      ), a = oe(), l = ee("span"), N(n, "type", "datetime-local"), N(n, "id", "datetime-picker"), N(n, "class", "custom-text-field__input svelte-ar6zwk"), N(n, "placeholder", ""), N(r, "for", "datetime-picker"), N(r, "class", "custom-floating-label svelte-ar6zwk"), N(l, "class", "custom-line svelte-ar6zwk"), N(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      U(c, e, f), Q(e, n), tn(
        n,
        /*value*/
        t[0]
      ), Q(e, i), Q(e, r), Q(r, s), Q(e, a), Q(e, l), o || (u = [
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
      1 && tn(
        n,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && pt(
        s,
        /*label*/
        c[1]
      );
    },
    i: $e,
    o: $e,
    d(c) {
      c && F(e), o = !1, Ze(u);
    }
  };
}
function f_(t, e, n) {
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
class d_ extends ye {
  constructor(e) {
    super(), Ee(this, e, f_, c_, _e, { label: 1, value: 0 });
  }
}
const h_ = (t) => ({}), Da = (t) => ({});
function m_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[2].content
  ), o = Se(
    l,
    t,
    /*$$scope*/
    t[3],
    Da
  );
  return {
    c() {
      e = ee("details"), n = ee("summary"), i = ct(
        /*title*/
        t[0]
      ), r = oe(), s = ee("div"), o && o.c(), N(n, "class", "svelte-l05fgd"), N(s, "class", "expandable-content svelte-l05fgd"), e.open = /*open*/
      t[1], N(e, "class", "svelte-l05fgd");
    },
    m(u, c) {
      U(u, e, c), Q(e, n), Q(n, i), Q(e, r), Q(e, s), o && o.m(s, null), a = !0;
    },
    p(u, c) {
      (!a || c & /*title*/
      1) && pt(
        i,
        /*title*/
        u[0]
      ), o && o.p && (!a || c & /*$$scope*/
      8) && Le(
        o,
        l,
        u,
        /*$$scope*/
        u[3],
        a ? Te(
          l,
          /*$$scope*/
          u[3],
          c,
          h_
        ) : Oe(
          /*$$scope*/
          u[3]
        ),
        Da
      ), (!a || c & /*open*/
      2) && (e.open = /*open*/
      u[1]);
    },
    i(u) {
      a || (I(o, u), a = !0);
    },
    o(u) {
      T(o, u), a = !1;
    },
    d(u) {
      u && F(e), o && o.d(u);
    }
  };
}
function p_(t) {
  let e, n;
  return e = new nu({
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
      r & /*$$scope, open, title*/
      11 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function g_(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { title: s = "" } = e, { open: a = !1 } = e;
  return t.$$set = (l) => {
    "title" in l && n(0, s = l.title), "open" in l && n(1, a = l.open), "$$scope" in l && n(3, r = l.$$scope);
  }, [s, a, i, r];
}
class uu extends ye {
  constructor(e) {
    super(), Ee(this, e, g_, p_, _e, { title: 0, open: 1 });
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
var jt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Jt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, _i = {
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
var __ = (
  /** @class */
  function(t) {
    st(e, t);
    function e(n) {
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return jt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jt;
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
      this.determinate = !this.adapter.hasClass(jt.INDETERMINATE_CLASS), this.adapter.addClass(jt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, s;
        if (!n.determinate)
          try {
            for (var a = Tt(i), l = a.next(); !l.done; l = a.next()) {
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
        this.adapter.removeClass(jt.INDETERMINATE_CLASS), this.adapter.setAttribute(Jt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Jt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Jt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(jt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Jt.ARIA_VALUENOW), this.adapter.removeAttribute(Jt.ARIA_VALUEMAX), this.adapter.removeAttribute(Jt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Jt.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(jt.CLOSED_CLASS), this.adapter.removeClass(jt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Jt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(jt.CLOSED_CLASS), this.adapter.setAttribute(Jt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(jt.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(jt.CLOSED_CLASS) && this.adapter.addClass(jt.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(jt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(jt.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var i = "scaleX(" + n + ")", r = typeof window < "u" ? Rm(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(n) {
      var i = n * 100 + "%";
      this.adapter.setBufferBarStyle(Jt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var i = n * _i.PRIMARY_HALF, r = n * _i.PRIMARY_FULL, s = n * _i.SECONDARY_QUARTER, a = n * _i.SECONDARY_HALF, l = n * _i.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, e;
  }(Lt)
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
var un = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Ma = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Rn = {
  ARIA_SELECTED: Ma.ARIA_SELECTED,
  ARIA_SORT: Ma.ARIA_SORT
}, qt;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(qt || (qt = {}));
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
var b_ = (
  /** @class */
  function(t) {
    st(e, t);
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
      return As(this, void 0, void 0, function() {
        return Cs(this, function(n) {
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
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, un.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, un.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, Rn.ARIA_SORT, qt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, qt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, un.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(r, Rn.ARIA_SORT), o = qt.NONE;
      l === qt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, un.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Rn.ARIA_SORT, qt.DESCENDING), o = qt.DESCENDING) : l === qt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, un.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Rn.ARIA_SORT, qt.ASCENDING), o = qt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, Rn.ARIA_SORT, qt.ASCENDING), o = qt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(un.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(un.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, i) {
      i ? (this.adapter.addClassAtRowIndex(n, un.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Rn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, un.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Rn.ARIA_SELECTED, "false"));
    }, e;
  }(Lt)
);
const v_ = (t) => ({}), ka = (t) => ({}), I_ = (t) => ({}), Na = (t) => ({});
function Pa(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[36].progress
  ), l = Se(
    a,
    t,
    /*$$scope*/
    t[35],
    Na
  );
  return {
    c() {
      e = ee("div"), n = ee("div"), i = oe(), l && l.c(), N(n, "class", "mdc-data-table__scrim"), N(e, "class", "mdc-data-table__progress-indicator"), N(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        t[13]
      ).map(Ha).join(" "));
    },
    m(o, u) {
      U(o, e, u), Q(e, n), Q(e, i), l && l.m(e, null), s = !0;
    },
    p(o, u) {
      l && l.p && (!s || u[1] & /*$$scope*/
      16) && Le(
        l,
        a,
        o,
        /*$$scope*/
        o[35],
        s ? Te(
          a,
          /*$$scope*/
          o[35],
          u,
          I_
        ) : Oe(
          /*$$scope*/
          o[35]
        ),
        Na
      ), (!s || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Ha).join(" "))) && N(e, "style", r);
    },
    i(o) {
      s || (I(l, o), s = !0);
    },
    o(o) {
      T(l, o), s = !1;
    },
    d(o) {
      o && F(e), l && l.d(o);
    }
  };
}
function E_(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m;
  const _ = (
    /*#slots*/
    t[36].default
  ), p = Se(
    _,
    t,
    /*$$scope*/
    t[35],
    null
  );
  let v = [
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
  for (let y = 0; y < v.length; y += 1)
    b = K(b, v[y]);
  let C = [
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
  ], A = {};
  for (let y = 0; y < C.length; y += 1)
    A = K(A, C[y]);
  let R = (
    /*$$slots*/
    t[24].progress && Pa(t)
  );
  const M = (
    /*#slots*/
    t[36].paginate
  ), g = Se(
    M,
    t,
    /*$$scope*/
    t[35],
    ka
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
    nn(
      /*$$restProps*/
      t[25],
      ["container$", "table$"]
    )
  ], B = {};
  for (let y = 0; y < O.length; y += 1)
    B = K(B, O[y]);
  return {
    c() {
      e = ee("div"), n = ee("div"), i = ee("table"), p && p.c(), o = oe(), R && R.c(), u = oe(), g && g.c(), me(i, b), me(n, A), me(e, B);
    },
    m(y, S) {
      U(y, e, S), Q(e, n), Q(n, i), p && p.m(i, null), t[37](n), Q(e, o), R && R.m(e, null), Q(e, u), g && g.m(e, null), t[38](e), d = !0, h || (m = [
        fe(s = xe.call(
          null,
          i,
          /*table$use*/
          t[5]
        )),
        fe(l = xe.call(
          null,
          n,
          /*container$use*/
          t[3]
        )),
        fe(f = xe.call(
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
    p(y, S) {
      p && p.p && (!d || S[1] & /*$$scope*/
      16) && Le(
        p,
        _,
        y,
        /*$$scope*/
        y[35],
        d ? Te(
          _,
          /*$$scope*/
          y[35],
          S,
          null
        ) : Oe(
          /*$$scope*/
          y[35]
        ),
        null
      ), me(i, b = de(v, [
        (!d || S[0] & /*table$class*/
        64 && r !== (r = re({
          [
            /*table$class*/
            y[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        S[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          y[25],
          "table$"
        )
      ])), s && ge(s.update) && S[0] & /*table$use*/
      32 && s.update.call(
        null,
        /*table$use*/
        y[5]
      ), me(n, A = de(C, [
        (!d || S[0] & /*container$class*/
        16 && a !== (a = re({
          [
            /*container$class*/
            y[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        S[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          y[25],
          "container$"
        )
      ])), l && ge(l.update) && S[0] & /*container$use*/
      8 && l.update.call(
        null,
        /*container$use*/
        y[3]
      ), /*$$slots*/
      y[24].progress ? R ? (R.p(y, S), S[0] & /*$$slots*/
      16777216 && I(R, 1)) : (R = Pa(y), R.c(), I(R, 1), R.m(e, u)) : R && (we(), T(R, 1, 1, () => {
        R = null;
      }), Fe()), g && g.p && (!d || S[1] & /*$$scope*/
      16) && Le(
        g,
        M,
        y,
        /*$$scope*/
        y[35],
        d ? Te(
          M,
          /*$$scope*/
          y[35],
          S,
          v_
        ) : Oe(
          /*$$scope*/
          y[35]
        ),
        ka
      ), me(e, B = de(O, [
        (!d || S[0] & /*className, stickyHeader, internalClasses*/
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
        S[0] & /*$$restProps*/
        33554432 && nn(
          /*$$restProps*/
          y[25],
          ["container$", "table$"]
        )
      ])), f && ge(f.update) && S[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        y[0]
      );
    },
    i(y) {
      d || (I(p, y), I(R), I(g, y), d = !0);
    },
    o(y) {
      T(p, y), T(R), T(g, y), d = !1;
    },
    d(y) {
      y && F(e), p && p.d(y), t[37](null), R && R.d(), g && g.d(y), t[38](null), h = !1, Ze(m);
    }
  };
}
const Ha = ([t, e]) => `${t}: ${e};`;
function y_(t, e, n) {
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
  const c = Is(o), { closest: f } = rr, d = rt(Qe());
  let { use: h = [] } = e, { class: m = "" } = e, { stickyHeader: _ = !1 } = e, { sortable: p = !1 } = e, { sort: v = null } = e, { sortDirection: b = "ascending" } = e, { sortAscendingAriaLabel: C = "sorted, ascending" } = e, { sortDescendingAriaLabel: A = "sorted, descending" } = e, { container$use: R = [] } = e, { container$class: M = "" } = e, { table$use: g = [] } = e, { table$class: O = "" } = e, B, y, S, E, L, P = {}, q = { height: "auto", top: "initial" }, j = qe("SMUI:addLayoutListener"), X, k = !1, D = dt(!1);
  lt(t, D, (G) => n(34, s = G));
  let V = dt(v);
  lt(t, V, (G) => n(45, l = G));
  let ue = dt(b);
  lt(t, ue, (G) => n(44, a = G)), ze("SMUI:checkbox:context", "data-table"), ze("SMUI:linear-progress:context", "data-table"), ze("SMUI:linear-progress:closed", D), ze("SMUI:data-table:sortable", p), ze("SMUI:data-table:sort", V), ze("SMUI:data-table:sortDirection", ue), ze("SMUI:data-table:sortAscendingAriaLabel", C), ze("SMUI:data-table:sortDescendingAriaLabel", A), j && (X = j(We));
  let Ne;
  ut(() => (n(7, y = new b_({
    addClass: J,
    removeClass: Re,
    getHeaderCellElements: () => {
      var G;
      return (G = E == null ? void 0 : E.cells.map((se) => se.element)) !== null && G !== void 0 ? G : [];
    },
    getHeaderCellCount: () => {
      var G;
      return (G = E == null ? void 0 : E.cells.length) !== null && G !== void 0 ? G : 0;
    },
    getAttributeByHeaderCellIndex: (G, se) => {
      var ne;
      return (ne = E == null ? void 0 : E.orderedCells[G].getAttr(se)) !== null && ne !== void 0 ? ne : null;
    },
    setAttributeByHeaderCellIndex: (G, se, ne) => {
      E == null || E.orderedCells[G].addAttr(se, ne);
    },
    setClassNameByHeaderCellIndex: (G, se) => {
      E == null || E.orderedCells[G].addClass(se);
    },
    removeClassNameByHeaderCellIndex: (G, se) => {
      E == null || E.orderedCells[G].removeClass(se);
    },
    notifySortAction: (G) => {
      n(26, v = G.columnId), n(27, b = G.sortValue), Ie(Ve(), "SMUIDataTable:sorted", G, void 0, !0);
    },
    getTableContainerHeight: () => S.getBoundingClientRect().height,
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
      L == null || L.orderedRows[G].addClass(se);
    },
    getRowCount: () => {
      var G;
      return (G = L == null ? void 0 : L.rows.length) !== null && G !== void 0 ? G : 0;
    },
    getRowElements: () => {
      var G;
      return (G = L == null ? void 0 : L.rows.map((se) => se.element)) !== null && G !== void 0 ? G : [];
    },
    getRowIdAtIndex: (G) => {
      var se;
      return (se = L == null ? void 0 : L.orderedRows[G].rowId) !== null && se !== void 0 ? se : null;
    },
    getRowIndexByChildElement: (G) => {
      var se;
      return (se = L == null ? void 0 : L.orderedRows.map((ne) => ne.element).indexOf(f(G, ".mdc-data-table__row"))) !== null && se !== void 0 ? se : -1;
    },
    getSelectedRowCount: () => {
      var G;
      return (G = L == null ? void 0 : L.rows.filter((se) => se.selected).length) !== null && G !== void 0 ? G : 0;
    },
    isCheckboxAtRowIndexChecked: (G) => {
      const se = L == null ? void 0 : L.orderedRows[G].checkbox;
      return se ? se.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const G = E == null ? void 0 : E.checkbox;
      return G ? G.checked : !1;
    },
    isRowsSelectable: () => !!Ve().querySelector(".mdc-data-table__row-checkbox") || !!Ve().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (G) => {
      const se = L == null ? void 0 : L.orderedRows[G.rowIndex];
      se && Ie(
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
      De(!1), Ie(Ve(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      De(!1), Ie(Ve(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
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
    removeClassAtRowIndex: (G, se) => {
      L == null || L.orderedRows[G].removeClass(se);
    },
    setAttributeAtRowIndex: (G, se, ne) => {
      L == null || L.orderedRows[G].addAttr(se, ne);
    },
    setHeaderRowCheckboxChecked: (G) => {
      const se = E == null ? void 0 : E.checkbox;
      se && (se.checked = G);
    },
    setHeaderRowCheckboxIndeterminate: De,
    setRowCheckboxCheckedAtIndex: (G, se) => {
      const ne = L == null ? void 0 : L.orderedRows[G].checkbox;
      ne && (ne.checked = se);
    },
    setSortStatusLabelByHeaderCellIndex: (G, se) => {
    }
    // Handled automatically.
  })), y.init(), y.layout(), n(14, k = !0), () => {
    y.destroy();
  })), rn(() => {
    X && X();
  });
  function Ae(G) {
    n(10, E = G.detail);
  }
  function Ye(G) {
    n(11, L = G.detail);
  }
  function z(G) {
    y && y.handleRowCheckboxChange(G);
  }
  function J(G) {
    P[G] || n(12, P[G] = !0, P);
  }
  function Re(G) {
    (!(G in P) || P[G]) && n(12, P[G] = !1, P);
  }
  function De(G) {
    const se = E == null ? void 0 : E.checkbox;
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
    const Xe = (se = E == null ? void 0 : E.orderedCells) !== null && se !== void 0 ? se : [], ht = Xe.map((et) => et.element).indexOf(G);
    if (ht === -1)
      return;
    const ft = (ne = Xe[ht].columnId) !== null && ne !== void 0 ? ne : null;
    y.handleSortAction({ columnId: ft, columnIndex: ht, headerCell: G });
  }
  function We() {
    return y.layout();
  }
  function Ve() {
    return B;
  }
  function St(G) {
    le[G ? "unshift" : "push"](() => {
      S = G, n(9, S);
    });
  }
  function Z(G) {
    le[G ? "unshift" : "push"](() => {
      B = G, n(8, B);
    });
  }
  const Me = () => y && k && y.layout(), je = () => n(10, E = void 0), Ue = () => n(11, L = void 0), Ot = () => y && y.handleHeaderRowCheckboxChange();
  return t.$$set = (G) => {
    e = K(K({}, e), nt(G)), n(25, r = he(e, i)), "use" in G && n(0, h = G.use), "class" in G && n(1, m = G.class), "stickyHeader" in G && n(2, _ = G.stickyHeader), "sortable" in G && n(28, p = G.sortable), "sort" in G && n(26, v = G.sort), "sortDirection" in G && n(27, b = G.sortDirection), "sortAscendingAriaLabel" in G && n(29, C = G.sortAscendingAriaLabel), "sortDescendingAriaLabel" in G && n(30, A = G.sortDescendingAriaLabel), "container$use" in G && n(3, R = G.container$use), "container$class" in G && n(4, M = G.container$class), "table$use" in G && n(5, g = G.table$use), "table$class" in G && n(6, O = G.table$class), "$$scope" in G && n(35, u = G.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sort*/
    67108864 && Wt(V, l = v, l), t.$$.dirty[0] & /*sortDirection*/
    134217728 && Wt(ue, a = b, a), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && y && Ne !== s && (n(33, Ne = s), s ? y.hideProgress() : y.showProgress());
  }, [
    h,
    m,
    _,
    R,
    M,
    g,
    O,
    y,
    B,
    S,
    E,
    L,
    P,
    q,
    k,
    d,
    D,
    V,
    ue,
    Ae,
    Ye,
    z,
    He,
    ie,
    c,
    r,
    v,
    b,
    p,
    C,
    A,
    We,
    Ve,
    Ne,
    s,
    u,
    o,
    St,
    Z,
    Me,
    je,
    Ue,
    Ot
  ];
}
class A_ extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      y_,
      E_,
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
function C_(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[10].default
  ), l = Se(
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
    u = K(u, o[c]);
  return {
    c() {
      e = ee("thead"), l && l.c(), me(e, u);
    },
    m(c, f) {
      U(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        fe(n = xe.call(
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
      512) && Le(
        l,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? Te(
          a,
          /*$$scope*/
          c[9],
          f,
          null
        ) : Oe(
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
      i || (I(l, c), i = !0);
    },
    o(c) {
      T(l, c), i = !1;
    },
    d(c) {
      c && F(e), l && l.d(c), t[11](null), r = !1, Ze(s);
    }
  };
}
function S_(t, e, n) {
  const i = ["use", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  ze("SMUI:data-table:row:header", !0), ut(() => {
    const A = {
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
    return Ie(v(), "SMUIDataTableHeader:mount", A), () => {
      Ie(v(), "SMUIDataTableHeader:unmount", A);
    };
  });
  function h(A) {
    n(2, c = A.detail);
  }
  function m(A) {
    f.push(A.detail), d.set(A.detail.element, A.detail), A.stopPropagation();
  }
  function _(A) {
    const R = f.indexOf(A.detail);
    R !== -1 && (f.splice(R, 1), f = f), d.delete(A.detail.element), A.stopPropagation();
  }
  function p() {
    return [...v().querySelectorAll(".mdc-data-table__header-cell")].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_header_cell_accessor);
  }
  function v() {
    return u;
  }
  function b(A) {
    le[A ? "unshift" : "push"](() => {
      u = A, n(1, u);
    });
  }
  const C = () => n(2, c = void 0);
  return t.$$set = (A) => {
    e = K(K({}, e), nt(A)), n(7, r = he(e, i)), "use" in A && n(0, o = A.use), "$$scope" in A && n(9, a = A.$$scope);
  }, [
    o,
    u,
    c,
    l,
    h,
    m,
    _,
    r,
    v,
    a,
    s,
    b,
    C
  ];
}
class T_ extends ye {
  constructor(e) {
    super(), Ee(this, e, S_, C_, _e, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function L_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[9].default
  ), o = Se(
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
    c = K(c, u[f]);
  return {
    c() {
      e = ee("tbody"), o && o.c(), me(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), t[10](e), r = !0, s || (a = [
        fe(i = xe.call(
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
      256) && Le(
        o,
        l,
        f,
        /*$$scope*/
        f[8],
        r ? Te(
          l,
          /*$$scope*/
          f[8],
          d,
          null
        ) : Oe(
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
      r || (I(o, f), r = !0);
    },
    o(f) {
      T(o, f), r = !1;
    },
    d(f) {
      f && F(e), o && o.d(f), t[10](null), s = !1, Ze(a);
    }
  };
}
function O_(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  ze("SMUI:data-table:row:header", !1), ut(() => {
    const b = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return _();
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
    const C = f.indexOf(b.detail);
    C !== -1 && (f.splice(C, 1), f = f), d.delete(b.detail.element), b.stopPropagation();
  }
  function _() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function v(b) {
    le[b ? "unshift" : "push"](() => {
      c = b, n(2, c);
    });
  }
  return t.$$set = (b) => {
    e = K(K({}, e), nt(b)), n(6, r = he(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "$$scope" in b && n(8, a = b.$$scope);
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
    v
  ];
}
class R_ extends ye {
  constructor(e) {
    super(), Ee(this, e, O_, L_, _e, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function D_(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[15].default
  ), u = Se(
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
    f = K(f, c[d]);
  return {
    c() {
      e = ee("tr"), u && u.c(), me(e, f);
    },
    m(d, h) {
      U(d, e, h), u && u.m(e, null), t[16](e), s = !0, a || (l = [
        fe(r = xe.call(
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
      16384) && Le(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        s ? Te(
          o,
          /*$$scope*/
          d[14],
          h,
          null
        ) : Oe(
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
      s || (I(u, d), s = !0);
    },
    o(d) {
      T(u, d), s = !1;
    },
    d(d) {
      d && F(e), u && u.d(d), t[16](null), a = !1, Ze(l);
    }
  };
}
let M_ = 0;
function k_(t, e, n) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = he(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Qe());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + M_++ } = e, f, d, h = {}, m = {}, _ = qe("SMUI:data-table:row:header");
  ut(() => {
    const S = _ ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return g();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
      },
      get selected() {
        var E;
        return (E = d && d.checked) !== null && E !== void 0 ? E : !1;
      },
      addClass: v,
      removeClass: b,
      getAttr: C,
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return g();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var E;
        return (E = d && d.checked) !== null && E !== void 0 ? E : !1;
      },
      addClass: v,
      removeClass: b,
      getAttr: C,
      addAttr: A
    };
    return Ie(g(), "SMUIDataTableRow:mount", S), () => {
      Ie(g(), "SMUIDataTableRow:unmount", S);
    };
  });
  function p(S) {
    n(3, d = S.detail);
  }
  function v(S) {
    h[S] || n(4, h[S] = !0, h);
  }
  function b(S) {
    (!(S in h) || h[S]) && n(4, h[S] = !1, h);
  }
  function C(S) {
    var E;
    return S in m ? (E = m[S]) !== null && E !== void 0 ? E : null : g().getAttribute(S);
  }
  function A(S, E) {
    m[S] !== E && n(5, m[S] = E, m);
  }
  function R(S) {
    Ie(g(), "SMUIDataTableHeader:click", S);
  }
  function M(S) {
    Ie(g(), "SMUIDataTableRow:click", { rowId: c, target: S.target });
  }
  function g() {
    return f;
  }
  function O(S) {
    le[S ? "unshift" : "push"](() => {
      f = S, n(2, f);
    });
  }
  const B = (S) => _ ? R(S) : M(S), y = () => n(3, d = void 0);
  return t.$$set = (S) => {
    e = K(K({}, e), nt(S)), n(11, r = he(e, i)), "use" in S && n(0, o = S.use), "class" in S && n(1, u = S.class), "rowId" in S && n(12, c = S.rowId), "$$scope" in S && n(14, a = S.$$scope);
  }, [
    o,
    u,
    f,
    d,
    h,
    m,
    l,
    _,
    p,
    R,
    M,
    r,
    c,
    g,
    a,
    s,
    O,
    B,
    y
  ];
}
class cu extends ye {
  constructor(e) {
    super(), Ee(this, e, k_, D_, _e, {
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
function N_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[22].default
  ), o = Se(
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
    c = K(c, u[f]);
  return {
    c() {
      e = ee("td"), o && o.c(), me(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), t[25](e), r = !0, s || (a = [
        fe(i = xe.call(
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
      2097152) && Le(
        o,
        l,
        f,
        /*$$scope*/
        f[21],
        r ? Te(
          l,
          /*$$scope*/
          f[21],
          d,
          null
        ) : Oe(
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
      r || (I(o, f), r = !0);
    },
    o(f) {
      T(o, f), r = !1;
    },
    d(f) {
      f && F(e), o && o.d(f), t[25](null), s = !1, Ze(a);
    }
  };
}
function P_(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [w_, H_], f = [];
  function d(_, p) {
    return (
      /*sortable*/
      _[5] ? 0 : 1
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
  for (let _ = 0; _ < h.length; _ += 1)
    m = K(m, h[_]);
  return {
    c() {
      e = ee("th"), i.c(), me(e, m);
    },
    m(_, p) {
      U(_, e, p), f[n].m(e, null), t[23](e), l = !0, o || (u = [
        fe(a = xe.call(
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
    p(_, p) {
      let v = n;
      n = d(_), n === v ? f[n].p(_, p) : (we(), T(f[v], 1, 1, () => {
        f[v] = null;
      }), Fe(), i = f[n], i ? i.p(_, p) : (i = f[n] = c[n](_), i.c()), I(i, 1), i.m(e, null)), me(e, m = de(h, [
        (!l || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
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
        (!l || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          _[4]
        ) },
        (!l || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && s !== (s = /*sortable*/
        _[5] ? (
          /*$sort*/
          _[9] === /*columnId*/
          _[4] ? (
            /*$sortDirection*/
            _[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": s },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        _[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        _[19]
      ])), a && ge(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      l || (I(i), l = !0);
    },
    o(_) {
      T(i), l = !1;
    },
    d(_) {
      _ && F(e), f[n].d(), t[23](null), o = !1, Ze(u);
    }
  };
}
function H_(t) {
  let e;
  const n = (
    /*#slots*/
    t[22].default
  ), i = Se(
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
      2097152) && Le(
        i,
        n,
        r,
        /*$$scope*/
        r[21],
        e ? Te(
          n,
          /*$$scope*/
          r[21],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[21]
        ),
        null
      );
    },
    i(r) {
      e || (I(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function w_(t) {
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
  ), u = Se(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = ee("div"), u && u.c(), n = oe(), i = ee("div"), s = ct(r), N(i, "class", "mdc-data-table__sort-status-label"), N(i, "aria-hidden", "true"), N(i, "id", a = /*columnId*/
      t[4] + "-status-label"), N(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      U(c, e, f), u && u.m(e, null), Q(e, n), Q(e, i), Q(i, s), l = !0;
    },
    p(c, f) {
      u && u.p && (!l || f & /*$$scope*/
      2097152) && Le(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        l ? Te(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : Oe(
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
      ) : "") + "") && pt(s, r), (!l || f & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && N(i, "id", a);
    },
    i(c) {
      l || (I(u, c), l = !0);
    },
    o(c) {
      T(u, c), l = !1;
    },
    d(c) {
      c && F(e), u && u.d(c);
    }
  };
}
function F_(t) {
  let e, n, i, r;
  const s = [P_, N_], a = [];
  function l(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ke();
    },
    m(o, u) {
      a[e].m(o, u), U(o, i, u), r = !0;
    },
    p(o, [u]) {
      n.p(o, u);
    },
    i(o) {
      r || (I(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      o && F(i), a[e].d(o);
    }
  };
}
let U_ = 0;
function B_(t, e, n) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = he(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt(Qe());
  let c = qe("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: h = !1 } = e, { checkbox: m = !1 } = e, { columnId: _ = c ? "SMUI-data-table-column-" + U_++ : "SMUI-data-table-unused" } = e, { sortable: p = qe("SMUI:data-table:sortable") } = e, v, b = {}, C = {}, A = qe("SMUI:data-table:sort");
  lt(t, A, (D) => n(9, s = D));
  let R = qe("SMUI:data-table:sortDirection");
  lt(t, R, (D) => n(10, a = D));
  let M = qe("SMUI:data-table:sortAscendingAriaLabel"), g = qe("SMUI:data-table:sortDescendingAriaLabel");
  p && (ze("SMUI:label:context", "data-table:sortable-header-cell"), ze("SMUI:icon-button:context", "data-table:sortable-header-cell"), ze("SMUI:icon-button:aria-describedby", _ + "-status-label")), ut(() => {
    const D = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return P();
      },
      get columnId() {
        return _;
      },
      addClass: O,
      removeClass: B,
      getAttr: y,
      addAttr: S
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return P();
      },
      get columnId() {
      },
      addClass: O,
      removeClass: B,
      getAttr: y,
      addAttr: S
    };
    return Ie(P(), "SMUIDataTableCell:mount", D), () => {
      Ie(P(), "SMUIDataTableCell:unmount", D);
    };
  });
  function O(D) {
    b[D] || n(7, b[D] = !0, b);
  }
  function B(D) {
    (!(D in b) || b[D]) && n(7, b[D] = !1, b);
  }
  function y(D) {
    var V;
    return D in C ? (V = C[D]) !== null && V !== void 0 ? V : null : P().getAttribute(D);
  }
  function S(D, V) {
    C[D] !== V && n(8, C[D] = V, C);
  }
  function E(D) {
    Ie(P(), "SMUIDataTableHeaderCheckbox:change", D);
  }
  function L(D) {
    Ie(P(), "SMUIDataTableBodyCheckbox:change", D);
  }
  function P() {
    return v;
  }
  function q(D) {
    le[D ? "unshift" : "push"](() => {
      v = D, n(6, v);
    });
  }
  const j = (D) => m && E(D);
  function X(D) {
    le[D ? "unshift" : "push"](() => {
      v = D, n(6, v);
    });
  }
  const k = (D) => m && L(D);
  return t.$$set = (D) => {
    e = K(K({}, e), nt(D)), n(19, r = he(e, i)), "use" in D && n(0, f = D.use), "class" in D && n(1, d = D.class), "numeric" in D && n(2, h = D.numeric), "checkbox" in D && n(3, m = D.checkbox), "columnId" in D && n(4, _ = D.columnId), "sortable" in D && n(5, p = D.sortable), "$$scope" in D && n(21, o = D.$$scope);
  }, [
    f,
    d,
    h,
    m,
    _,
    p,
    v,
    b,
    C,
    s,
    a,
    u,
    c,
    A,
    R,
    M,
    g,
    E,
    L,
    r,
    P,
    o,
    l,
    q,
    j,
    X,
    k
  ];
}
class ks extends ye {
  constructor(e) {
    super(), Ee(this, e, B_, F_, _e, {
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
const V_ = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
V_.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
const G_ = dt([]);
G_.subscribe;
function j_(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, m, _, p, v, b, C, A, R = [
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
      ).map(Ua).concat([
        /*style*/
        t[2]
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
      "aria-valuenow": v = /*indeterminate*/
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
  for (let g = 0; g < R.length; g += 1)
    M = K(M, R[g]);
  return {
    c() {
      e = ee("div"), n = ee("div"), i = ee("div"), s = oe(), a = ee("div"), l = oe(), o = ee("div"), u = ee("span"), f = oe(), d = ee("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', N(i, "class", "mdc-linear-progress__buffer-bar"), N(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        t[11]
      ).map(wa).join(" ")), N(a, "class", "mdc-linear-progress__buffer-dots"), N(n, "class", "mdc-linear-progress__buffer"), N(u, "class", "mdc-linear-progress__bar-inner"), N(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), N(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        t[12]
      ).map(Fa).join(" ")), N(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), me(e, M);
    },
    m(g, O) {
      U(g, e, O), Q(e, n), Q(n, i), Q(n, s), Q(n, a), Q(e, l), Q(e, o), Q(o, u), Q(e, f), Q(e, d), t[19](e), C || (A = [
        fe(b = xe.call(
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
      ], C = !0);
    },
    p(g, [O]) {
      O & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        g[11]
      ).map(wa).join(" ")) && N(i, "style", r), O & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        g[12]
      ).map(Fa).join(" ")) && N(o, "style", c), me(e, M = de(R, [
        O & /*className, indeterminate, closed, internalClasses*/
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
        O & /*internalStyles, style*/
        1028 && m !== (m = Object.entries(
          /*internalStyles*/
          g[10]
        ).map(Ua).concat([
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
        O & /*indeterminate, progress*/
        40 && v !== (v = /*indeterminate*/
        g[3] ? void 0 : (
          /*progress*/
          g[5]
        )) && {
          "aria-valuenow": v
        },
        O & /*internalAttrs*/
        512 && /*internalAttrs*/
        g[9],
        O & /*$$restProps*/
        65536 && /*$$restProps*/
        g[16]
      ])), b && ge(b.update) && O & /*use*/
      1 && b.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i: $e,
    o: $e,
    d(g) {
      g && F(e), t[19](null), C = !1, Ze(A);
    }
  };
}
const wa = ([t, e]) => `${t}: ${e};`, Fa = ([t, e]) => `${t}: ${e};`, Ua = ([t, e]) => `${t}: ${e};`;
function q_(t, e, n) {
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
  let { use: l = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: f = !1 } = e, { progress: d = 0 } = e, { buffer: h = void 0 } = e, m, _, p = {}, v = {}, b = {}, C = {}, A = {}, R = qe("SMUI:linear-progress:context"), M = qe("SMUI:linear-progress:closed");
  lt(t, M, (k) => n(21, s = k)), ut(() => (n(6, _ = new __({
    addClass: O,
    forceLayout: () => {
      q().getBoundingClientRect();
    },
    setBufferBarStyle: L,
    setPrimaryBarStyle: P,
    hasClass: g,
    removeAttribute: S,
    removeClass: B,
    setAttribute: y,
    setStyle: E,
    attachResizeObserver: (k) => {
      const D = window.ResizeObserver;
      if (D) {
        const V = new D(k);
        return V.observe(q()), V;
      }
      return null;
    },
    getWidth: () => q().offsetWidth
  })), _.init(), () => {
    _.destroy();
  }));
  function g(k) {
    return k in p ? p[k] : q().classList.contains(k);
  }
  function O(k) {
    p[k] || n(8, p[k] = !0, p);
  }
  function B(k) {
    (!(k in p) || p[k]) && n(8, p[k] = !1, p);
  }
  function y(k, D) {
    v[k] !== D && n(9, v[k] = D, v);
  }
  function S(k) {
    (!(k in v) || v[k] != null) && n(9, v[k] = void 0, v);
  }
  function E(k, D) {
    b[k] != D && (D === "" || D == null ? (delete b[k], n(10, b)) : n(10, b[k] = D, b));
  }
  function L(k, D) {
    C[k] != D && (D === "" || D == null ? (delete C[k], n(11, C)) : n(11, C[k] = D, C));
  }
  function P(k, D) {
    A[k] != D && (D === "" || D == null ? (delete A[k], n(12, A)) : n(12, A[k] = D, A));
  }
  function q() {
    return m;
  }
  function j(k) {
    le[k ? "unshift" : "push"](() => {
      m = k, n(7, m);
    });
  }
  const X = () => _ && _.handleTransitionEnd();
  return t.$$set = (k) => {
    e = K(K({}, e), nt(k)), n(16, r = he(e, i)), "use" in k && n(0, l = k.use), "class" in k && n(1, o = k.class), "style" in k && n(2, u = k.style), "indeterminate" in k && n(3, c = k.indeterminate), "closed" in k && n(4, f = k.closed), "progress" in k && n(5, d = k.progress), "buffer" in k && n(17, h = k.buffer);
  }, t.$$.update = () => {
    t.$$.dirty & /*closed*/
    16 && M && Wt(M, s = f, s), t.$$.dirty & /*instance, indeterminate*/
    72 && _ && _.isDeterminate() !== !c && _.setDeterminate(!c), t.$$.dirty & /*instance, progress*/
    96 && _ && _.getProgress() !== d && _.setProgress(d), t.$$.dirty & /*instance, buffer*/
    131136 && _ && (h == null ? _.setBuffer(1) : _.setBuffer(h)), t.$$.dirty & /*instance, closed*/
    80 && _ && (f ? _.close() : _.open());
  }, [
    l,
    o,
    u,
    c,
    f,
    d,
    _,
    m,
    p,
    v,
    b,
    C,
    A,
    a,
    R,
    M,
    r,
    h,
    q,
    j,
    X
  ];
}
class W_ extends ye {
  constructor(e) {
    super(), Ee(this, e, q_, j_, _e, {
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
function Ba(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Va(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i;
}
function Ga(t, e, n) {
  const i = t.slice();
  return i[31] = e[n], i;
}
function ja(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[34] = e, i[35] = n, i;
}
function qa(t) {
  let e, n = (
    /*$sortColumn*/
    t[6] === /*col*/
    t[28].field && /*$sortDirection*/
    t[7] !== null && Wa(t)
  );
  return {
    c() {
      n && n.c(), e = Ke();
    },
    m(i, r) {
      n && n.m(i, r), U(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[6] === /*col*/
      i[28].field && /*$sortDirection*/
      i[7] !== null ? n ? n.p(i, r) : (n = Wa(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && F(e), n && n.d(i);
    }
  };
}
function Wa(t) {
  let e;
  function n(s, a) {
    if (
      /*$sortDirection*/
      s[7] === "asc"
    )
      return K_;
    if (
      /*$sortDirection*/
      s[7] === "desc"
    )
      return z_;
  }
  let i = n(t), r = i && i(t);
  return {
    c() {
      r && r.c(), e = Ke();
    },
    m(s, a) {
      r && r.m(s, a), U(s, e, a);
    },
    p(s, a) {
      i !== (i = n(s)) && (r && r.d(1), r = i && i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(s) {
      s && F(e), r && r.d(s);
    }
  };
}
function z_(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M12 20l8-8H4l8 8z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 0 24 24"), N(e, "width", "16"), N(e, "height", "16"), N(e, "fill", "currentColor"), N(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
    },
    d(i) {
      i && F(e);
    }
  };
}
function K_(t) {
  let e, n;
  return {
    c() {
      e = ot("svg"), n = ot("path"), N(n, "d", "M12 4l-8 8h16l-8-8z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "viewBox", "0 0 24 24"), N(e, "width", "16"), N(e, "height", "16"), N(e, "fill", "currentColor"), N(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
    },
    d(i) {
      i && F(e);
    }
  };
}
function za(t) {
  let e, n, i = (
    /*col*/
    t[28].filterType === "text" && Ka(t)
  ), r = (
    /*col*/
    t[28].filterType === "number" && Xa(t)
  );
  return {
    c() {
      i && i.c(), e = oe(), r && r.c(), n = Ke();
    },
    m(s, a) {
      i && i.m(s, a), U(s, e, a), r && r.m(s, a), U(s, n, a);
    },
    p(s, a) {
      /*col*/
      s[28].filterType === "text" ? i ? i.p(s, a) : (i = Ka(s), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      s[28].filterType === "number" ? r ? r.p(s, a) : (r = Xa(s), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null);
    },
    d(s) {
      s && (F(e), F(n)), i && i.d(s), r && r.d(s);
    }
  };
}
function Ka(t) {
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
      U(a, e, l), tn(
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
      ] && tn(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      );
    },
    d(a) {
      a && F(e), i = !1, Ze(r);
    }
  };
}
function Xa(t) {
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
      U(a, e, l), tn(
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
      36 && go(e.value) !== /*filters*/
      t[5][
        /*col*/
        t[28].field
      ] && tn(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      );
    },
    d(a) {
      a && F(e), i = !1, Ze(r);
    }
  };
}
function X_(t) {
  let e, n, i, r = (
    /*col*/
    t[28].headerName + ""
  ), s, a, l, o, u = (
    /*col*/
    t[28].sortable && qa(t)
  ), c = (
    /*col*/
    t[28].filter && za(t)
  );
  return {
    c() {
      e = ee("div"), n = ee("div"), i = ee("span"), s = ct(r), a = oe(), u && u.c(), l = oe(), c && c.c(), o = oe(), N(i, "class", "header-title svelte-29x22x"), N(n, "class", "cell-header svelte-29x22x"), N(e, "class", "custom-cell-container svelte-29x22x"), $r(
        e,
        "min-width",
        /*col*/
        t[28].minWidth ?? 0
      );
    },
    m(f, d) {
      U(f, e, d), Q(e, n), Q(n, i), Q(i, s), Q(n, a), u && u.m(n, null), Q(e, l), c && c.m(e, null), U(f, o, d);
    },
    p(f, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      f[28].headerName + "") && pt(s, r), /*col*/
      f[28].sortable ? u ? u.p(f, d) : (u = qa(f), u.c(), u.m(n, null)) : u && (u.d(1), u = null), /*col*/
      f[28].filter ? c ? c.p(f, d) : (c = za(f), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d[0] & /*columnDefs*/
      4 && $r(
        e,
        "min-width",
        /*col*/
        f[28].minWidth ?? 0
      );
    },
    d(f) {
      f && (F(e), F(o)), u && u.d(), c && c.d();
    }
  };
}
function Ya(t) {
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
  return e = new ks({
    props: {
      style: (
        /*col*/
        t[28].headerStyle
      ),
      $$slots: { default: [X_] },
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
      n || (I(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function Y_(t) {
  let e, n, i = Pt(
    /*columnDefs*/
    t[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ya(ja(t, i, a));
  const s = (a) => T(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Ke();
    },
    m(a, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, l);
      U(a, e, l), n = !0;
    },
    p(a, l) {
      if (l[0] & /*columnDefs, sortColumnBy, searchInputLabel, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      12532) {
        i = Pt(
          /*columnDefs*/
          a[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = ja(a, i, o);
          r[o] ? (r[o].p(u, l), I(r[o], 1)) : (r[o] = Ya(u), r[o].c(), I(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (we(), o = i.length; o < r.length; o += 1)
          s(o);
        Fe();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          I(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        T(r[l]);
      n = !1;
    },
    d(a) {
      a && F(e), Es(r, a);
    }
  };
}
function Z_(t) {
  let e, n;
  return e = new cu({
    props: {
      class: "header-row",
      $$slots: { default: [Y_] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function Q_(t) {
  let e, n;
  return e = new ks({
    props: {
      numeric: (
        /*col*/
        t[28].numeric
      ),
      style: (
        /*col*/
        t[28].cellStyle
      ),
      $$slots: { default: [eb] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function J_(t) {
  let e, n;
  return e = new ks({
    props: {
      $$slots: { default: [db] },
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function x_(t) {
  let e = (
    /*row*/
    (t[25][
      /*col*/
      t[28].field
    ] ?? "") + ""
  ), n;
  return {
    c() {
      n = ct(e);
    },
    m(i, r) {
      U(i, n, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      260 && e !== (e = /*row*/
      (i[25][
        /*col*/
        i[28].field
      ] ?? "") + "") && pt(n, e);
    },
    d(i) {
      i && F(n);
    }
  };
}
function $_(t) {
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
      n = ct(e);
    },
    m(i, r) {
      U(i, n, r);
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
      ) + "") && pt(n, e);
    },
    d(i) {
      i && F(n);
    }
  };
}
function eb(t) {
  let e;
  function n(s, a) {
    return (
      /*col*/
      s[28].valueFormatter ? $_ : x_
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Ke();
    },
    m(s, a) {
      r.m(s, a), U(s, e, a);
    },
    p(s, a) {
      i === (i = n(s)) && r ? r.p(s, a) : (r.d(1), r = i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(s) {
      s && F(e), r.d(s);
    }
  };
}
function tb(t) {
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
  return e = new Os({
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
      $$slots: { default: [fb] },
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
      n || (I(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function nb(t) {
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
  return e = new Jd({
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
      n || (I(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $(e, r);
    }
  };
}
function ib(t) {
  let e, n;
  return e = new Tg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function rb(t) {
  let e, n;
  return e = new jg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function sb(t) {
  let e, n;
  return e = new Ug({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function lb(t) {
  let e, n;
  return e = new Pg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function ab(t) {
  let e, n;
  return e = new yg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function ob(t) {
  let e, n;
  return e = new bg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function ub(t) {
  let e, n;
  return e = new au({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function cb(t) {
  let e, n;
  return e = new fg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function fb(t) {
  let e, n, i, r;
  const s = [
    cb,
    ub,
    ob,
    ab,
    lb,
    sb,
    rb,
    ib
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
      n.c(), i = Ke();
    },
    m(o, u) {
      a[e].m(o, u), U(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e !== c && (we(), T(a[c], 1, 1, () => {
        a[c] = null;
      }), Fe(), n = a[e], n || (n = a[e] = s[e](o), n.c()), I(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (I(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      o && F(i), a[e].d(o);
    }
  };
}
function Za(t) {
  let e, n, i, r;
  const s = [nb, tb], a = [];
  function l(o, u) {
    return (
      /*action*/
      o[31].iconComponent ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ke();
    },
    m(o, u) {
      a[e].m(o, u), U(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (we(), T(a[c], 1, 1, () => {
        a[c] = null;
      }), Fe(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), I(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (I(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      o && F(i), a[e].d(o);
    }
  };
}
function db(t) {
  let e, n, i = Pt(
    /*rowActions*/
    t[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Za(Ga(t, i, a));
  const s = (a) => T(r[a], 1, 1, () => {
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
      U(a, e, l);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
      n = !0;
    },
    p(a, l) {
      if (l[0] & /*rowActions, $filteredData*/
      264) {
        i = Pt(
          /*rowActions*/
          a[3]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Ga(a, i, o);
          r[o] ? (r[o].p(u, l), I(r[o], 1)) : (r[o] = Za(u), r[o].c(), I(r[o], 1), r[o].m(e, null));
        }
        for (we(), o = i.length; o < r.length; o += 1)
          s(o);
        Fe();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          I(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        T(r[l]);
      n = !1;
    },
    d(a) {
      a && F(e), Es(r, a);
    }
  };
}
function Qa(t, e) {
  let n, i, r, s, a;
  const l = [J_, Q_], o = [];
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
      n = Ke(), r.c(), s = Ke(), this.first = n;
    },
    m(c, f) {
      U(c, n, f), o[i].m(c, f), U(c, s, f), a = !0;
    },
    p(c, f) {
      e = c;
      let d = i;
      i = u(e), i === d ? o[i].p(e, f) : (we(), T(o[d], 1, 1, () => {
        o[d] = null;
      }), Fe(), r = o[i], r ? r.p(e, f) : (r = o[i] = l[i](e), r.c()), I(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      a || (I(r), a = !0);
    },
    o(c) {
      T(r), a = !1;
    },
    d(c) {
      c && (F(n), F(s)), o[i].d(c);
    }
  };
}
function hb(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, s = Pt(
    /*columnDefs*/
    t[2]
  );
  const a = (l) => (
    /*col*/
    l[28].field
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = Va(t, s, l), u = a(o);
    n.set(u, e[l] = Qa(u, o));
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
      U(l, i, o), r = !0;
    },
    p(l, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      268 && (s = Pt(
        /*columnDefs*/
        l[2]
      ), we(), e = Mi(e, o, a, 1, l, s, n, i.parentNode, Di, Qa, i, Va), Fe());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          I(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        T(e[o]);
      r = !1;
    },
    d(l) {
      l && F(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function Ja(t, e) {
  let n, i, r;
  return i = new cu({
    props: {
      $$slots: { default: [hb] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ke(), te(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      U(s, n, a), x(i, s, a), r = !0;
    },
    p(s, a) {
      e = s;
      const l = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      268 | a[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: a, ctx: e }), i.$set(l);
    },
    i(s) {
      r || (I(i.$$.fragment, s), r = !0);
    },
    o(s) {
      T(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && F(n), $(i, s);
    }
  };
}
function mb(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, s = Pt(
    /*$filteredData*/
    t[8]
  );
  const a = (l) => (
    /*index*/
    l[27]
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = Ba(t, s, l), u = a(o);
    n.set(u, e[l] = Ja(u, o));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = Ke();
    },
    m(l, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, o);
      U(l, i, o), r = !0;
    },
    p(l, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      268 && (s = Pt(
        /*$filteredData*/
        l[8]
      ), we(), e = Mi(e, o, a, 1, l, s, n, i.parentNode, Di, Ja, i, Ba), Fe());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          I(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        T(e[o]);
      r = !1;
    },
    d(l) {
      l && F(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function pb(t) {
  let e, n, i, r;
  return e = new T_({
    props: {
      $$slots: { default: [Z_] },
      $$scope: { ctx: t }
    }
  }), i = new R_({
    props: {
      $$slots: { default: [mb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe(), te(i.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), U(s, n, a), x(i, s, a), r = !0;
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
      r || (I(e.$$.fragment, s), I(i.$$.fragment, s), r = !0);
    },
    o(s) {
      T(e.$$.fragment, s), T(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && F(n), $(e, s), $(i, s);
    }
  };
}
function gb(t) {
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
    t[0]), e = new W_({ props: s }), le.push(() => It(e, "closed", r)), {
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
        a[0], vt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (I(e.$$.fragment, a), i = !0);
      },
      o(a) {
        T(e.$$.fragment, a), i = !1;
      },
      d(a) {
        $(e, a);
      }
    }
  );
}
function _b(t) {
  let e, n;
  return e = new A_({
    props: {
      "table$aria-label": (
        /*label*/
        t[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [gb],
        default: [pb]
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function bb(t, e, n) {
  let i, r, s, { loadingDone: a = !0 } = e, { label: l = _n() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: f = [] } = e, { searchInputLabel: d = "Search" } = e, h = { name: "", color: "", number: "" }, m = dt([]);
  lt(t, m, (E) => n(8, s = E));
  let _ = dt(null);
  lt(t, _, (E) => n(6, i = E));
  let p = dt(null);
  lt(t, p, (E) => n(7, r = E)), c.store.subscribe((E) => {
    n(14, u = [...E]), v();
  });
  function v() {
    let E = u.filter((L) => o.every((P) => {
      const q = h[P.field], j = L[P.field];
      return q ? P.filterType === "number" ? j == q : j.toString().toLowerCase().includes(q.toLowerCase()) : !0;
    }));
    E = b(E), m.set(E);
  }
  function b(E) {
    let L, P;
    return _.subscribe((q) => L = q), p.subscribe((q) => P = q), !L || !P ? E : E.sort((q, j) => {
      let X = q[L], k = j[L];
      return X == null && (X = ""), k == null && (k = ""), P === "asc" ? X.toString().localeCompare(k.toString()) : k.toString().localeCompare(X.toString());
    });
  }
  function C(E) {
    _.update((L) => {
      if (L === E)
        p.update((P) => P === "asc" ? "desc" : P === "desc" ? null : "asc");
      else
        return p.set("asc"), E;
      return E;
    }), v();
  }
  m.set(u);
  function A(E) {
    a = E, n(0, a);
  }
  function R(E) {
    h[E.field] = this.value, n(5, h);
  }
  const M = () => v();
  function g(E) {
    h[E.field] = go(this.value), n(5, h);
  }
  const O = () => v(), B = (E) => E.sortable && C(E.field), y = (E, L) => E.callback(L), S = (E, L) => E.callback(L);
  return t.$$set = (E) => {
    "loadingDone" in E && n(0, a = E.loadingDone), "label" in E && n(1, l = E.label), "columnDefs" in E && n(2, o = E.columnDefs), "rowData" in E && n(14, u = E.rowData), "store" in E && n(15, c = E.store), "rowActions" in E && n(3, f = E.rowActions), "searchInputLabel" in E && n(4, d = E.searchInputLabel);
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
    _,
    p,
    v,
    C,
    u,
    c,
    A,
    R,
    M,
    g,
    O,
    B,
    y,
    S
  ];
}
class vb extends ye {
  constructor(e) {
    super(), Ee(
      this,
      e,
      bb,
      _b,
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
function Et(t) {
  return typeof t == "function";
}
function Ns(t) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Qr = Ns(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function hs(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var or = function() {
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
            for (var l = Tt(a), o = l.next(); !o.done; o = l.next()) {
              var u = o.value;
              u.remove(this);
            }
          } catch (_) {
            e = { error: _ };
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
      if (Et(c))
        try {
          c();
        } catch (_) {
          s = _ instanceof Qr ? _.errors : [_];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = Tt(f), h = d.next(); !h.done; h = d.next()) {
            var m = h.value;
            try {
              xa(m);
            } catch (_) {
              s = s ?? [], _ instanceof Qr ? s = en(en([], In(s)), In(_.errors)) : s.push(_);
            }
          }
        } catch (_) {
          i = { error: _ };
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
        throw new Qr(s);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        xa(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && hs(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && hs(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
or.EMPTY;
function fu(t) {
  return t instanceof or || t && "closed" in t && Et(t.remove) && Et(t.add) && Et(t.unsubscribe);
}
function xa(t) {
  Et(t) ? t() : t.unsubscribe();
}
var Ib = {
  Promise: void 0
}, Eb = {
  setTimeout: function(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return setTimeout.apply(void 0, en([t, e], In(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function du(t) {
  Eb.setTimeout(function() {
    throw t;
  });
}
function $a() {
}
function yb(t) {
  t();
}
var Ps = function(t) {
  st(e, t);
  function e(n) {
    var i = t.call(this) || this;
    return i.isStopped = !1, n ? (i.destination = n, fu(n) && n.add(i)) : i.destination = Sb, i;
  }
  return e.create = function(n, i, r) {
    return new ms(n, i, r);
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
}(or), Ab = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (i) {
        ji(i);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (i) {
        ji(i);
      }
    else
      ji(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        ji(n);
      }
  }, t;
}(), ms = function(t) {
  st(e, t);
  function e(n, i, r) {
    var s = t.call(this) || this, a;
    return Et(n) || !n ? a = {
      next: n ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = n, s.destination = new Ab(a), s;
  }
  return e;
}(Ps);
function ji(t) {
  du(t);
}
function Cb(t) {
  throw t;
}
var Sb = {
  closed: !0,
  next: $a,
  error: Cb,
  complete: $a
}, Hs = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ur(t) {
  return t;
}
function Tb(t) {
  return t.length === 0 ? ur : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(i, r) {
      return r(i);
    }, n);
  };
}
var zt = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, i) {
    var r = this, s = Ob(e) ? e : new ms(e, n, i);
    return yb(function() {
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
    return n = eo(n), new n(function(r, s) {
      var a = new ms({
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
  }, t.prototype[Hs] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Tb(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = eo(e), new e(function(i, r) {
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
function eo(t) {
  var e;
  return (e = t ?? Ib.Promise) !== null && e !== void 0 ? e : Promise;
}
function Lb(t) {
  return t && Et(t.next) && Et(t.error) && Et(t.complete);
}
function Ob(t) {
  return t && t instanceof Ps || Lb(t) && fu(t);
}
function Rb(t) {
  return Et(t == null ? void 0 : t.lift);
}
function Sn(t) {
  return function(e) {
    if (Rb(e))
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
function En(t, e, n, i, r) {
  return new Db(t, e, n, i, r);
}
var Db = function(t) {
  st(e, t);
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
}(Ps), Mb = {
  now: function() {
    return Date.now();
  }
}, kb = function(t) {
  st(e, t);
  function e(n, i) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, i) {
    return this;
  }, e;
}(or), to = {
  setInterval: function(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return setInterval.apply(void 0, en([t, e], In(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Nb = function(t) {
  st(e, t);
  function e(n, i) {
    var r = t.call(this, n, i) || this;
    return r.scheduler = n, r.work = i, r.pending = !1, r;
  }
  return e.prototype.schedule = function(n, i) {
    var r;
    if (i === void 0 && (i = 0), this.closed)
      return this;
    this.state = n;
    var s = this.id, a = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(a, s, i)), this.pending = !0, this.delay = i, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(a, this.id, i), this;
  }, e.prototype.requestAsyncId = function(n, i, r) {
    return r === void 0 && (r = 0), to.setInterval(n.flush.bind(n, this), r);
  }, e.prototype.recycleAsyncId = function(n, i, r) {
    if (r === void 0 && (r = 0), r != null && this.delay === r && this.pending === !1)
      return i;
    i != null && to.clearInterval(i);
  }, e.prototype.execute = function(n, i) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var r = this._execute(n, i);
    if (r)
      return r;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, i) {
    var r = !1, s;
    try {
      this.work(n);
    } catch (a) {
      r = !0, s = a || new Error("Scheduled action threw falsy error");
    }
    if (r)
      return this.unsubscribe(), s;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, i = n.id, r = n.scheduler, s = r.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, hs(s, this), i != null && (this.id = this.recycleAsyncId(r, i, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(kb), no = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, i) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(i, n);
  }, t.now = Mb.now, t;
}(), Pb = function(t) {
  st(e, t);
  function e(n, i) {
    i === void 0 && (i = no.now);
    var r = t.call(this, n, i) || this;
    return r.actions = [], r._active = !1, r;
  }
  return e.prototype.flush = function(n) {
    var i = this.actions;
    if (this._active) {
      i.push(n);
      return;
    }
    var r;
    this._active = !0;
    do
      if (r = n.execute(n.state, n.delay))
        break;
    while (n = i.shift());
    if (this._active = !1, r) {
      for (; n = i.shift(); )
        n.unsubscribe();
      throw r;
    }
  }, e;
}(no), hu = new Pb(Nb), Hb = hu, wb = new zt(function(t) {
  return t.complete();
});
function mu(t) {
  return t && Et(t.schedule);
}
function pu(t) {
  return t[t.length - 1];
}
function Fb(t) {
  return Et(pu(t)) ? t.pop() : void 0;
}
function gu(t) {
  return mu(pu(t)) ? t.pop() : void 0;
}
var _u = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function bu(t) {
  return Et(t == null ? void 0 : t.then);
}
function vu(t) {
  return Et(t[Hs]);
}
function Iu(t) {
  return Symbol.asyncIterator && Et(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Eu(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Ub() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var yu = Ub();
function Au(t) {
  return Et(t == null ? void 0 : t[yu]);
}
function Cu(t) {
  return Cc(this, arguments, function() {
    var n, i, r, s;
    return Cs(this, function(a) {
      switch (a.label) {
        case 0:
          n = t.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, xn(n.read())];
        case 3:
          return i = a.sent(), r = i.value, s = i.done, s ? [4, xn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, xn(r)];
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
function Su(t) {
  return Et(t == null ? void 0 : t.getReader);
}
function Pn(t) {
  if (t instanceof zt)
    return t;
  if (t != null) {
    if (vu(t))
      return Bb(t);
    if (_u(t))
      return Vb(t);
    if (bu(t))
      return Gb(t);
    if (Iu(t))
      return Tu(t);
    if (Au(t))
      return jb(t);
    if (Su(t))
      return qb(t);
  }
  throw Eu(t);
}
function Bb(t) {
  return new zt(function(e) {
    var n = t[Hs]();
    if (Et(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Vb(t) {
  return new zt(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Gb(t) {
  return new zt(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, du);
  });
}
function jb(t) {
  return new zt(function(e) {
    var n, i;
    try {
      for (var r = Tt(t), s = r.next(); !s.done; s = r.next()) {
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
function Tu(t) {
  return new zt(function(e) {
    Wb(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function qb(t) {
  return Tu(Cu(t));
}
function Wb(t, e) {
  var n, i, r, s;
  return As(this, void 0, void 0, function() {
    var a, l;
    return Cs(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), n = Sc(t), o.label = 1;
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
function vn(t, e, n, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var s = e.schedule(function() {
    n(), r ? t.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (t.add(s), !r)
    return s;
}
function Lu(t, e) {
  return e === void 0 && (e = 0), Sn(function(n, i) {
    n.subscribe(En(i, function(r) {
      return vn(i, t, function() {
        return i.next(r);
      }, e);
    }, function() {
      return vn(i, t, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return vn(i, t, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function Ou(t, e) {
  return e === void 0 && (e = 0), Sn(function(n, i) {
    i.add(t.schedule(function() {
      return n.subscribe(i);
    }, e));
  });
}
function zb(t, e) {
  return Pn(t).pipe(Ou(e), Lu(e));
}
function Kb(t, e) {
  return Pn(t).pipe(Ou(e), Lu(e));
}
function Xb(t, e) {
  return new zt(function(n) {
    var i = 0;
    return e.schedule(function() {
      i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
    });
  });
}
function Yb(t, e) {
  return new zt(function(n) {
    var i;
    return vn(n, e, function() {
      i = t[yu](), vn(n, e, function() {
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
      return Et(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function Ru(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new zt(function(n) {
    vn(n, e, function() {
      var i = t[Symbol.asyncIterator]();
      vn(n, e, function() {
        i.next().then(function(r) {
          r.done ? n.complete() : n.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function Zb(t, e) {
  return Ru(Cu(t), e);
}
function Qb(t, e) {
  if (t != null) {
    if (vu(t))
      return zb(t, e);
    if (_u(t))
      return Xb(t, e);
    if (bu(t))
      return Kb(t, e);
    if (Iu(t))
      return Ru(t, e);
    if (Au(t))
      return Yb(t, e);
    if (Su(t))
      return Zb(t, e);
  }
  throw Eu(t);
}
function cr(t, e) {
  return e ? Qb(t, e) : Pn(t);
}
function Ti() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = gu(t);
  return cr(t, n);
}
var Jb = Ns(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function xb(t, e) {
  return new Promise(function(n, i) {
    var r = !1, s;
    t.subscribe({
      next: function(a) {
        s = a, r = !0;
      },
      error: i,
      complete: function() {
        r ? n(s) : i(new Jb());
      }
    });
  });
}
function $b(t) {
  return t instanceof Date && !isNaN(t);
}
function Zt(t, e) {
  return Sn(function(n, i) {
    var r = 0;
    n.subscribe(En(i, function(s) {
      i.next(t.call(e, s, r++));
    }));
  });
}
var e0 = Array.isArray;
function t0(t, e) {
  return e0(e) ? t.apply(void 0, en([], In(e))) : t(e);
}
function n0(t) {
  return Zt(function(e) {
    return t0(t, e);
  });
}
var i0 = Array.isArray, r0 = Object.getPrototypeOf, s0 = Object.prototype, l0 = Object.keys;
function a0(t) {
  if (t.length === 1) {
    var e = t[0];
    if (i0(e))
      return { args: e, keys: null };
    if (o0(e)) {
      var n = l0(e);
      return {
        args: n.map(function(i) {
          return e[i];
        }),
        keys: n
      };
    }
  }
  return { args: t, keys: null };
}
function o0(t) {
  return t && typeof t == "object" && r0(t) === s0;
}
function u0(t, e) {
  return t.reduce(function(n, i, r) {
    return n[i] = e[r], n;
  }, {});
}
function c0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = gu(t), i = Fb(t), r = a0(t), s = r.args, a = r.keys;
  if (s.length === 0)
    return cr([], n);
  var l = new zt(f0(s, n, a ? function(o) {
    return u0(a, o);
  } : ur));
  return i ? l.pipe(n0(i)) : l;
}
function f0(t, e, n) {
  return n === void 0 && (n = ur), function(i) {
    io(e, function() {
      for (var r = t.length, s = new Array(r), a = r, l = r, o = function(c) {
        io(e, function() {
          var f = cr(t[c], e), d = !1;
          f.subscribe(En(i, function(h) {
            s[c] = h, d || (d = !0, l--), l || i.next(n(s.slice()));
          }, function() {
            --a || i.complete();
          }));
        }, i);
      }, u = 0; u < r; u++)
        o(u);
    }, i);
  };
}
function io(t, e, n) {
  t ? vn(n, t, e) : e();
}
function d0(t, e, n, i, r, s, a, l) {
  var o = [], u = 0, c = 0, f = !1, d = function() {
    f && !o.length && !u && e.complete();
  }, h = function(_) {
    return u < i ? m(_) : o.push(_);
  }, m = function(_) {
    u++;
    var p = !1;
    Pn(n(_, c++)).subscribe(En(e, function(v) {
      e.next(v);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var v = function() {
            var b = o.shift();
            a || m(b);
          }; o.length && u < i; )
            v();
          d();
        } catch (b) {
          e.error(b);
        }
    }));
  };
  return t.subscribe(En(e, h, function() {
    f = !0, d();
  })), function() {
  };
}
function xi(t, e, n) {
  return n === void 0 && (n = 1 / 0), Et(e) ? xi(function(i, r) {
    return Zt(function(s, a) {
      return e(i, s, r, a);
    })(Pn(t(i, r)));
  }, n) : (typeof e == "number" && (n = e), Sn(function(i, r) {
    return d0(i, r, t, n);
  }));
}
function h0(t, e, n) {
  n === void 0 && (n = Hb);
  var i = -1;
  return e != null && (mu(e) ? n = e : i = e), new zt(function(r) {
    var s = $b(t) ? 500 - n.now() : t;
    s < 0 && (s = 0);
    var a = 0;
    return n.schedule(function() {
      r.closed || (r.next(a++), 0 <= i ? this.schedule(void 0, i) : r.complete());
    }, s);
  });
}
function Li(t) {
  return Sn(function(e, n) {
    var i = null, r = !1, s;
    i = e.subscribe(En(n, void 0, void 0, function(a) {
      s = Pn(t(a, Li(t)(e))), i ? (i.unsubscribe(), i = null, s.subscribe(n)) : r = !0;
    })), r && (i.unsubscribe(), i = null, s.subscribe(n));
  });
}
function m0(t, e) {
  return Et(e) ? xi(t, e, 1) : xi(t, 1);
}
function yn(t) {
  return t <= 0 ? function() {
    return wb;
  } : Sn(function(e, n) {
    var i = 0;
    e.subscribe(En(n, function(r) {
      ++i <= t && (n.next(r), t <= i && n.complete());
    }));
  });
}
function p0(t) {
  return Zt(function() {
    return t;
  });
}
function g0(t, e) {
  return xi(function(n, i) {
    return Pn(t(n, i)).pipe(yn(1), p0(n));
  });
}
function _0(t, e) {
  e === void 0 && (e = hu);
  var n = h0(t, e);
  return g0(function() {
    return n;
  });
}
function b0(t) {
  return Sn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Oi(t, e, n) {
  var i = Et(t) || e || n ? { next: t, error: e, complete: n } : t;
  return i ? Sn(function(r, s) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var l = !0;
    r.subscribe(En(s, function(o) {
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
  }) : ur;
}
function Du(t) {
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
var v0 = /* @__PURE__ */ function() {
  function t(e, n, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = n, this.request = i, this.type = r;
    var s = n.status, a = n.responseType;
    this.status = s ?? 0, this.responseType = a ?? "";
    var l = n.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(c, f) {
      var d = f.indexOf(": ");
      return c[f.slice(0, d)] = f.slice(d + 2), c;
    }, {}) : {}, this.response = Du(n);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return t;
}(), $i = Ns(function(t) {
  return function(n, i, r) {
    this.message = n, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var s;
    try {
      s = Du(i);
    } catch {
      s = i.responseText;
    }
    this.response = s;
  };
}), I0 = function() {
  function t(e, n) {
    return $i.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create($i.prototype), t;
}();
function E0(t, e) {
  return Hn({ method: "GET", url: t, headers: e });
}
function y0(t, e, n) {
  return Hn({ method: "POST", url: t, body: e, headers: n });
}
function A0(t, e) {
  return Hn({ method: "DELETE", url: t, headers: e });
}
function C0(t, e, n) {
  return Hn({ method: "PUT", url: t, body: e, headers: n });
}
function S0(t, e, n) {
  return Hn({ method: "PATCH", url: t, body: e, headers: n });
}
var T0 = Zt(function(t) {
  return t.response;
});
function L0(t, e) {
  return T0(Hn({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Hn = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return R0(n);
  };
  return t.get = E0, t.post = y0, t.delete = A0, t.put = C0, t.patch = S0, t.getJSON = L0, t;
}(), O0 = "upload", ro = "download", Jr = "loadstart", xr = "progress", so = "load";
function R0(t) {
  return new zt(function(e) {
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
    var m = r.withCredentials, _ = r.xsrfCookieName, p = r.xsrfHeaderName;
    if ((m || !h) && _ && p) {
      var v = (i = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && i !== void 0 ? i : "";
      v && (f[p] = v);
    }
    var b = D0(a, f), C = ce(ce({}, r), {
      url: o,
      headers: f,
      body: b
    }), A;
    A = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var R = t.progressSubscriber, M = t.includeDownloadProgress, g = M === void 0 ? !1 : M, O = t.includeUploadProgress, B = O === void 0 ? !1 : O, y = function(X, k) {
        A.addEventListener(X, function() {
          var D, V = k();
          (D = R == null ? void 0 : R.error) === null || D === void 0 || D.call(R, V), e.error(V);
        });
      };
      y("timeout", function() {
        return new I0(A, C);
      }), y("abort", function() {
        return new $i("aborted", A, C);
      });
      var S = function(X, k) {
        return new v0(k, A, C, X + "_" + k.type);
      }, E = function(X, k, D) {
        X.addEventListener(k, function(V) {
          e.next(S(D, V));
        });
      };
      B && [Jr, xr, so].forEach(function(X) {
        return E(A.upload, X, O0);
      }), R && [Jr, xr].forEach(function(X) {
        return A.upload.addEventListener(X, function(k) {
          var D;
          return (D = R == null ? void 0 : R.next) === null || D === void 0 ? void 0 : D.call(R, k);
        });
      }), g && [Jr, xr].forEach(function(X) {
        return E(A, X, ro);
      });
      var L = function(X) {
        var k = "ajax error" + (X ? " " + X : "");
        e.error(new $i(k, A, C));
      };
      A.addEventListener("error", function(X) {
        var k;
        (k = R == null ? void 0 : R.error) === null || k === void 0 || k.call(R, X), L();
      }), A.addEventListener(so, function(X) {
        var k, D, V = A.status;
        if (V < 400) {
          (k = R == null ? void 0 : R.complete) === null || k === void 0 || k.call(R);
          var ue = void 0;
          try {
            ue = S(ro, X);
          } catch (Ne) {
            e.error(Ne);
            return;
          }
          e.next(ue), e.complete();
        } else
          (D = R == null ? void 0 : R.error) === null || D === void 0 || D.call(R, X), L(V);
      });
    }
    var P = C.user, q = C.method, j = C.async;
    P ? A.open(q, o, j, P, C.password) : A.open(q, o, j), j && (A.timeout = C.timeout, A.responseType = C.responseType), "withCredentials" in A && (A.withCredentials = C.withCredentials);
    for (var d in f)
      f.hasOwnProperty(d) && A.setRequestHeader(d, f[d]);
    return b ? A.send(b) : A.send(), function() {
      A && A.readyState !== 4 && A.abort();
    };
  });
}
function D0(t, e) {
  var n;
  if (!t || typeof t == "string" || w0(t) || F0(t) || k0(t) || N0(t) || P0(t) || U0(t))
    return t;
  if (H0(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var M0 = Object.prototype.toString;
function ws(t, e) {
  return M0.call(t) === "[object " + e + "]";
}
function k0(t) {
  return ws(t, "ArrayBuffer");
}
function N0(t) {
  return ws(t, "File");
}
function P0(t) {
  return ws(t, "Blob");
}
function H0(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function w0(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function F0(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function U0(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class B0 {
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
const V0 = new B0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), G0 = [V0], j0 = G0[0].getUrl();
class Fs {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? j0;
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
class Mu {
  constructor(e = new Fs()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(n), i;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((i) => ({ pre: i }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: n, query: i, method: r, headers: s, body: a, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${i && Object.keys(i).length ? `?${q0(i)}` : ""}`,
      method: r,
      headers: s,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => Ti(n).pipe(
      Zt((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      m0(
        (i) => Hn(i).pipe(
          Zt((r) => (this.middleware.filter((s) => s.post).forEach((s) => r = s.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Zt((i) => {
        const { status: r, response: s } = i;
        if (r >= 200 && r < 300)
          return (n == null ? void 0 : n.response) === "raw" ? i : s;
        throw i;
      })
    );
  }
}
const Mt = (t) => encodeURIComponent(`${t}`), q0 = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((i) => `${Mt(e)}=${Mt(i)}`).join("&") : `${Mt(e)}=${Mt(n)}`
).join("&"), Bt = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class W0 extends Mu {
  archiveResource({ id: e, version: n, xAuthor: i, xApprover: r, contentType: s, xFilename: a, body: l }, o) {
    Bt(e, "id", "archiveResource"), Bt(n, "version", "archiveResource");
    const u = {
      "Content-Type": "application/octet-stream",
      ...i != null ? { "X-author": String(i) } : void 0,
      ...r != null ? { "X-approver": String(r) } : void 0,
      ...s != null ? { "Content-Type": String(s) } : void 0,
      ...a != null ? { "X-filename": String(a) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Mt(e)).replace("{version}", Mt(n)),
      method: "POST",
      headers: u,
      body: l
    }, o == null ? void 0 : o.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, i) {
    Bt(e, "id", "archiveSclResource"), Bt(n, "version", "archiveSclResource");
    const r = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Mt(e)).replace("{version}", Mt(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    Bt(e, "id", "retrieveArchivedResourceHistory");
    const i = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Mt(e)),
      method: "GET",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  searchArchivedResources({ archivedResourcesSearch: e }, n) {
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/archive/resources/search",
      method: "POST",
      headers: i,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class z0 extends Mu {
  assignResourceToLocation({ locationId: e, uuid: n }, i) {
    Bt(e, "locationId", "assignResourceToLocation"), Bt(n, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Mt(e)).replace("{uuid}", Mt(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, n) {
    Bt(e, "location", "createLocation");
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
    Bt(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Mt(e)),
      method: "DELETE",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    Bt(e, "locationId", "getLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Mt(e)),
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
    Bt(e, "locationId", "unassignResourceFromLocation"), Bt(n, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Mt(e)).replace("{uuid}", Mt(n)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, i) {
    Bt(e, "locationId", "updateLocation"), Bt(n, "location", "updateLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Mt(e)),
      method: "PUT",
      headers: r,
      body: n
    }, i == null ? void 0 : i.responseOpts);
  }
}
class bi {
  constructor(e, n, i, r, s, a, l, o, u, c, f, d) {
    this._uuid = e, this._name = n, this._note = i, this._author = r, this._approver = s, this._type = a, this._voltage = l, this._modifiedAt = o, this._archivedAt = u, this._contentType = c, this._version = f, this._fields = d;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get version() {
    return this._version;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
  get note() {
    return this._note;
  }
  get approver() {
    return this._approver;
  }
  get voltage() {
    return this._voltage;
  }
  get modifiedAt() {
    return this._modifiedAt;
  }
  get archivedAt() {
    return this._archivedAt;
  }
  get contentType() {
    return this._contentType;
  }
  get fields() {
    return this._fields;
  }
}
class Mn {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new bi(
        _n(),
        "Dummy name",
        "My Note",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "1.0.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID_FROM_FIELD :)" }]
      ),
      new bi(
        _n(),
        "Dummy name 2",
        "My Note 2",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "4.1.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID2_FROM_FIELD :)" }]
      )
    ];
  }
  static getInstance() {
    return Mn.instance || (Mn.instance = new Mn()), Mn.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      yn(1),
      Zt((n) => n.resources),
      Zt(
        (n) => n.map((i) => this.mapToArchiveSearchResult(i))
      ),
      Li(() => Ti(this.dummySearchResults)),
      _0(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      yn(1),
      Zt((n) => n.versions),
      Zt(
        (n) => n.map((i) => this.mapToArchiveSearchResult(i))
      ),
      Li(() => Ti([
        new bi(
          _n(),
          "Dummy name",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: _n() }]
        ),
        new bi(
          _n(),
          "Dummy name",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: _n() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, i) {
    return cr(
      fetch(`${this.baseUrl}/scl/v1/${n}/${e}/${i}`).then((r) => {
        if (r.status >= 200 && r.status < 300)
          return r.blob();
        throw new Error(
          "Unable to download resource: " + r.status + " " + r.statusText
        );
      })
    );
  }
  mapToArchiveSearchResult(e) {
    return new bi(
      e.uuid,
      e.name,
      e.note,
      e.author,
      e.approver,
      e.type,
      e.voltage,
      new Date(e.modifiedAt).toDateString(),
      new Date(e.archivedAt).toDateString(),
      e.contentType,
      e.version,
      e.fields
    );
  }
  formatDate(e) {
    if (!e)
      return "";
    const n = new Date(e);
    return isNaN(n.getTime()) ? "" : Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(n);
  }
  generateApiClient() {
    const e = new Fs({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new W0(e);
  }
}
class zn {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return zn.instance || (zn.instance = new zn()), zn.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      yn(1),
      Li(() => Ti([
        {
          uuid: "912e83a1-f84e-4d0d-9432-b5381e2b9e0d",
          name: "Location 1",
          description: "",
          key: ""
        },
        {
          uuid: "b9d01044-7bc7-4430-93b3-86ff093319e6",
          name: "Location 2",
          description: "",
          key: ""
        },
        {
          uuid: "f8435ba3-0c92-4ea3-ade0-5d72458c95c7",
          name: "Location 3",
          description: "",
          key: ""
        }
      ]))
    );
  }
  generateApiClient() {
    const e = new Fs({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new z0(e);
  }
}
var Ri;
const Xn = class Xn {
  constructor() {
    mi(this, Ri, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Xn.instance || (Xn.instance = new Xn()), Xn.instance;
  }
  get store() {
    return Xt(this, Ri);
  }
  updateData(e) {
    Xt(this, Ri).set(e);
  }
};
Ri = new WeakMap();
let ps = Xn;
var ei;
const Yn = class Yn {
  constructor() {
    mi(this, ei, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Yn.instance || (Yn.instance = new Yn()), Yn.instance;
  }
  get store() {
    return Xt(this, ei);
  }
  updateData(e) {
    Xt(this, ei).set(e);
  }
  getLocationNameByUuid(e) {
    return vs(Xt(this, ei)).get(e);
  }
};
ei = new WeakMap();
let er = Yn;
var ti;
const Zn = class Zn {
  constructor() {
    mi(this, ti, dt([]));
  }
  static getInstance() {
    return Zn.instance || (Zn.instance = new Zn()), Zn.instance;
  }
  get store() {
    return Xt(this, ti);
  }
  get currentData() {
    return vs(Xt(this, ti));
  }
  updateData(e) {
    Xt(this, ti).set(e);
  }
};
ti = new WeakMap();
let gs = Zn;
var ni;
const Qn = class Qn {
  constructor() {
    mi(this, ni, dt([]));
  }
  static getInstance() {
    return Qn.instance || (Qn.instance = new Qn()), Qn.instance;
  }
  get store() {
    return Xt(this, ni);
  }
  get currentData() {
    return vs(Xt(this, ni));
  }
  updateData(e) {
    Xt(this, ni).set(e);
  }
};
ni = new WeakMap();
let _s = Qn;
class Kn {
  constructor() {
    this.locationService = zn.getInstance(), this.archiveExplorerLocationStore = er.getInstance();
  }
  static getInstance() {
    return Kn.instance || (Kn.instance = new Kn()), Kn.instance;
  }
  convertFilterToSearchParams(e) {
    const n = {
      uuid: null,
      type: null,
      contentType: null,
      name: null,
      location: null,
      approver: null,
      voltage: null,
      from: null,
      to: null
    };
    return e.filter((i) => !i.disabled).forEach((i) => {
      console.log("KEY:", i.key), i.key === "from" || i.key === "to" ? n[i.key] = new Date(i.value).toISOString() : n[i.key] = i.value;
    }), n;
  }
  createLocationFilter() {
    return xb(
      this.locationService.listLocations().pipe(
        yn(1),
        Oi((e) => {
          const n = /* @__PURE__ */ new Map();
          e.forEach((i) => {
            n.set(i.uuid, i.name);
          }), this.archiveExplorerLocationStore.updateData(n);
        }),
        Zt((e) => [
          {
            id: 1,
            label: "Location",
            inputType: {
              id: 2,
              type: "select",
              validatorFn: () => !0,
              options: (e == null ? void 0 : e.map((n) => ({
                value: n.uuid,
                label: n.name
              }))) || []
            },
            allowedOperations: ["="]
          }
        ])
      )
    );
  }
  createArchiveFilter() {
    return [
      {
        id: 2,
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
        id: 4,
        label: "Approver",
        inputType: {
          id: 1,
          type: "string",
          validatorFn: () => !0,
          options: []
        },
        allowedOperations: ["="]
      },
      {
        id: 3,
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
      }
      // {
      //   id: 4,
      //   label: 'Type',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: 'Schütz', label: 'Schütz' },
      //       { value: 'Leittechnik', label: 'Leittechnik' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
      // {
      //   id: 5,
      //   label: 'Voltage',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: '380', label: '380' },
      //       { value: '220', label: '220' },
      //       { value: '110', label: '110' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
    ];
  }
}
function K0(t) {
  let e, n;
  return e = new vb({
    props: {
      columnDefs: (
        /*columnDefs*/
        t[2]
      ),
      store: (
        /*dataStore*/
        t[1]
      ),
      loadingDone: (
        /*loadingDone*/
        t[0]
      ),
      rowActions: (
        /*rowActions*/
        t[3]
      )
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
      r & /*loadingDone*/
      1 && (s.loadingDone = /*loadingDone*/
      i[0]), e.$set(s);
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function X0(t) {
  return new Date(t).toLocaleDateString();
}
function Y0(t, e, n) {
  let { searchResult: i } = e;
  const r = Mn.getInstance(), s = { store: dt([]) };
  let a = !1;
  const l = [
    {
      headerName: "Type",
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Content type",
      field: "contentType",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Approver",
      field: "approver",
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
      headerName: "Modifed",
      field: "modifiedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: X0
    },
    {
      headerName: "Note",
      field: "note",
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
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1,
      cellStyle: "font-weight: bold;",
      headerStyle: "font-weight: bold;"
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
  ], o = [
    {
      icon: "download",
      callback: (c) => u(c),
      disabled: () => !1
    }
  ];
  ut(() => {
    i && r.retrieveArchivedResourceHistory(i.uuid).pipe(yn(1), Oi((c) => {
      s.store.set(c), n(0, a = !0);
    })).subscribe();
  });
  function u(c) {
    var f;
    let d;
    c.fields && c.fields.length && (d = (f = c.fields.find((h) => h.key === "SOURCE_RESOURCE_ID")) === null || f === void 0 ? void 0 : f.value), r.findByUUIDAndVersion(d, c.type, c.version).pipe(
      yn(1),
      Oi((h) => {
        const m = window.URL.createObjectURL(h), _ = document.createElement("a");
        _.href = m, _.download = c.filename, _.style.display = "none", document.body.appendChild(_), _.click(), document.body.removeChild(_), window.URL.revokeObjectURL(m);
      }),
      Li((h) => (console.error(h), alert(h), Ti(void 0)))
    ).subscribe();
  }
  return t.$$set = (c) => {
    "searchResult" in c && n(4, i = c.searchResult);
  }, [a, s, l, o, i];
}
class Z0 extends ye {
  constructor(e) {
    super(), Ee(this, e, Y0, K0, _e, { searchResult: 4 });
  }
}
function lo(t, e, n) {
  const i = t.slice();
  return i[2] = e[n], i;
}
function Q0(t) {
  let e, n;
  return {
    c() {
      e = ee("i"), n = ct(
        /*noResourcesLabel*/
        t[1]
      );
    },
    m(i, r) {
      U(i, e, r), Q(e, n);
    },
    p(i, r) {
      r & /*noResourcesLabel*/
      2 && pt(
        n,
        /*noResourcesLabel*/
        i[1]
      );
    },
    i: $e,
    o: $e,
    d(i) {
      i && F(e);
    }
  };
}
function J0(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, s = Pt(
    /*searchResults*/
    t[0]
  );
  const a = (l) => (
    /*searchResult*/
    l[2].uuid
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = lo(t, s, l), u = a(o);
    n.set(u, e[l] = ao(u, o));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = Ke();
    },
    m(l, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, o);
      U(l, i, o), r = !0;
    },
    p(l, o) {
      o & /*searchResults*/
      1 && (s = Pt(
        /*searchResults*/
        l[0]
      ), we(), e = Mi(e, o, a, 1, l, s, n, i.parentNode, Di, ao, i, lo), Fe());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          I(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        T(e[o]);
      r = !1;
    },
    d(l) {
      l && F(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function x0(t) {
  let e, n, i;
  return n = new Z0({
    props: { searchResult: (
      /*searchResult*/
      t[2]
    ) }
  }), {
    c() {
      e = ee("span"), te(n.$$.fragment), N(e, "slot", "content");
    },
    m(r, s) {
      U(r, e, s), x(n, e, null), i = !0;
    },
    p(r, s) {
      const a = {};
      s & /*searchResults*/
      1 && (a.searchResult = /*searchResult*/
      r[2]), n.$set(a);
    },
    i(r) {
      i || (I(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && F(e), $(n);
    }
  };
}
function ao(t, e) {
  let n, i, r, s, a;
  return i = new uu({
    props: {
      title: (
        /*searchResult*/
        e[2].name
      ),
      $$slots: { content: [x0] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ke(), te(i.$$.fragment), r = oe(), s = ee("br"), this.first = n;
    },
    m(l, o) {
      U(l, n, o), x(i, l, o), U(l, r, o), U(l, s, o), a = !0;
    },
    p(l, o) {
      e = l;
      const u = {};
      o & /*searchResults*/
      1 && (u.title = /*searchResult*/
      e[2].name), o & /*$$scope, searchResults*/
      33 && (u.$$scope = { dirty: o, ctx: e }), i.$set(u);
    },
    i(l) {
      a || (I(i.$$.fragment, l), a = !0);
    },
    o(l) {
      T(i.$$.fragment, l), a = !1;
    },
    d(l) {
      l && (F(n), F(r), F(s)), $(i, l);
    }
  };
}
function $0(t) {
  let e, n, i, r, s;
  const a = [J0, Q0], l = [];
  function o(u, c) {
    return (
      /*searchResults*/
      u[0].length ? 0 : 1
    );
  }
  return i = o(t), r = l[i] = a[i](t), {
    c() {
      e = ee("div"), n = ee("div"), r.c(), N(n, "class", "content"), N(e, "class", "result-container");
    },
    m(u, c) {
      U(u, e, c), Q(e, n), l[i].m(n, null), s = !0;
    },
    p(u, [c]) {
      let f = i;
      i = o(u), i === f ? l[i].p(u, c) : (we(), T(l[f], 1, 1, () => {
        l[f] = null;
      }), Fe(), r = l[i], r ? r.p(u, c) : (r = l[i] = a[i](u), r.c()), I(r, 1), r.m(n, null));
    },
    i(u) {
      s || (I(r), s = !0);
    },
    o(u) {
      T(r), s = !1;
    },
    d(u) {
      u && F(e), l[i].d();
    }
  };
}
function e1(t, e, n) {
  let { searchResults: i = [] } = e, { noResourcesLabel: r = "No resources found." } = e;
  return t.$$set = (s) => {
    "searchResults" in s && n(0, i = s.searchResults), "noResourcesLabel" in s && n(1, r = s.noResourcesLabel);
  }, [i, r];
}
class t1 extends ye {
  constructor(e) {
    super(), Ee(this, e, e1, $0, _e, { searchResults: 0, noResourcesLabel: 1 });
  }
}
const { Map: n1 } = po;
function oo(t, e, n) {
  const i = t.slice();
  return i[18] = e[n], i[20] = n, i;
}
function i1(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d;
  n = new ou({
    props: { loadingDone: (
      /*loadingDone*/
      t[5]
    ) }
  });
  function h(b) {
    t[11](b);
  }
  let m = {
    filterTypes: (
      /*locationFilterType*/
      t[2]
    ),
    useOptionLabelInChipText: !0,
    addFilterLabel: (
      /*$_*/
      t[8]("add_filter")
    ),
    selectFilterLabel: (
      /*$_*/
      t[8]("filter_types")
    )
  };
  /*locationFiltersToSearch*/
  t[3] !== void 0 && (m.activeFilters = /*locationFiltersToSearch*/
  t[3]), s = new Oa({ props: m }), le.push(() => It(s, "activeFilters", h));
  function _(b) {
    t[12](b);
  }
  let p = {
    disabled: (
      /*uuidFilterSelected*/
      t[7] || !/*locationFiltersToSearch*/
      t[3].length
    ),
    filterTypes: (
      /*filterTypes*/
      t[1]
    ),
    addFilterLabel: (
      /*$_*/
      t[8]("add_filter")
    ),
    selectFilterLabel: (
      /*$_*/
      t[8]("filter_types")
    ),
    $$slots: {
      "filter-controls": [a1]
    },
    $$scope: { ctx: t }
  };
  /*filtersToSearch*/
  t[0] !== void 0 && (p.activeFilters = /*filtersToSearch*/
  t[0]), o = new Oa({ props: p }), le.push(() => It(o, "activeFilters", _));
  let v = (
    /*searchResults*/
    t[4].size && uo(t)
  );
  return {
    c() {
      e = ee("div"), te(n.$$.fragment), i = oe(), r = ee("div"), te(s.$$.fragment), l = oe(), te(o.$$.fragment), c = oe(), f = ee("div"), v && v.c(), N(r, "class", "search-filter svelte-uwjlgf"), N(f, "class", "content-container svelte-uwjlgf"), N(e, "class", "archive-explorer-container svelte-uwjlgf"), $r(e, "display", "none");
    },
    m(b, C) {
      U(b, e, C), x(n, e, null), Q(e, i), Q(e, r), x(s, r, null), Q(r, l), x(o, r, null), Q(e, c), Q(e, f), v && v.m(f, null), d = !0;
    },
    p(b, C) {
      const A = {};
      C & /*loadingDone*/
      32 && (A.loadingDone = /*loadingDone*/
      b[5]), n.$set(A);
      const R = {};
      C & /*locationFilterType*/
      4 && (R.filterTypes = /*locationFilterType*/
      b[2]), C & /*$_*/
      256 && (R.addFilterLabel = /*$_*/
      b[8]("add_filter")), C & /*$_*/
      256 && (R.selectFilterLabel = /*$_*/
      b[8]("filter_types")), !a && C & /*locationFiltersToSearch*/
      8 && (a = !0, R.activeFilters = /*locationFiltersToSearch*/
      b[3], vt(() => a = !1)), s.$set(R);
      const M = {};
      C & /*uuidFilterSelected, locationFiltersToSearch*/
      136 && (M.disabled = /*uuidFilterSelected*/
      b[7] || !/*locationFiltersToSearch*/
      b[3].length), C & /*filterTypes*/
      2 && (M.filterTypes = /*filterTypes*/
      b[1]), C & /*$_*/
      256 && (M.addFilterLabel = /*$_*/
      b[8]("add_filter")), C & /*$_*/
      256 && (M.selectFilterLabel = /*$_*/
      b[8]("filter_types")), C & /*$$scope, locationFiltersToSearch, $_*/
      2097416 && (M.$$scope = { dirty: C, ctx: b }), !u && C & /*filtersToSearch*/
      1 && (u = !0, M.activeFilters = /*filtersToSearch*/
      b[0], vt(() => u = !1)), o.$set(M), /*searchResults*/
      b[4].size ? v ? (v.p(b, C), C & /*searchResults*/
      16 && I(v, 1)) : (v = uo(b), v.c(), I(v, 1), v.m(f, null)) : v && (we(), T(v, 1, 1, () => {
        v = null;
      }), Fe());
    },
    i(b) {
      d || (I(n.$$.fragment, b), I(s.$$.fragment, b), I(o.$$.fragment, b), I(v), d = !0);
    },
    o(b) {
      T(n.$$.fragment, b), T(s.$$.fragment, b), T(o.$$.fragment, b), T(v), d = !1;
    },
    d(b) {
      b && F(e), $(n), $(s), $(o), v && v.d();
    }
  };
}
function r1(t) {
  let e, n;
  return e = new ou({
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
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function s1(t) {
  let e = (
    /*$_*/
    t[8]("search") + ""
  ), n;
  return {
    c() {
      n = ct(e);
    },
    m(i, r) {
      U(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      256 && e !== (e = /*$_*/
      i[8]("search") + "") && pt(n, e);
    },
    d(i) {
      i && F(n);
    }
  };
}
function l1(t) {
  let e, n, i, r;
  return e = new Dg({}), i = new Id({
    props: {
      $$slots: { default: [s1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      te(e.$$.fragment), n = oe(), te(i.$$.fragment);
    },
    m(s, a) {
      x(e, s, a), U(s, n, a), x(i, s, a), r = !0;
    },
    p(s, a) {
      const l = {};
      a & /*$$scope, $_*/
      2097408 && (l.$$scope = { dirty: a, ctx: s }), i.$set(l);
    },
    i(s) {
      r || (I(e.$$.fragment, s), I(i.$$.fragment, s), r = !0);
    },
    o(s) {
      T(e.$$.fragment, s), T(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && F(n), $(e, s), $(i, s);
    }
  };
}
function a1(t) {
  let e, n;
  return e = new Os({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        t[10]
      ),
      disabled: !/*locationFiltersToSearch*/
      t[3].length,
      $$slots: { default: [l1] },
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
      r & /*locationFiltersToSearch*/
      8 && (s.disabled = !/*locationFiltersToSearch*/
      i[3].length), r & /*$$scope, $_*/
      2097408 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function uo(t) {
  let e = [], n = new n1(), i, r, s = Pt(
    /*searchResults*/
    t[4]
  );
  const a = (l) => (
    /*result*/
    l[18]
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = oo(t, s, l), u = a(o);
    n.set(u, e[l] = co(u, o));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = Ke();
    },
    m(l, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, o);
      U(l, i, o), r = !0;
    },
    p(l, o) {
      o & /*searchResults, archiveExplorerLocationStore, $_*/
      784 && (s = Pt(
        /*searchResults*/
        l[4]
      ), we(), e = Mi(e, o, a, 1, l, s, n, i.parentNode, Di, co, i, oo), Fe());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          I(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        T(e[o]);
      r = !1;
    },
    d(l) {
      l && F(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function o1(t) {
  let e, n, i;
  return n = new t1({
    props: {
      searchResults: (
        /*result*/
        t[18][1]
      ),
      noResourcesLabel: (
        /*$_*/
        t[8]("no_resources_found")
      )
    }
  }), {
    c() {
      e = ee("span"), te(n.$$.fragment), N(e, "slot", "content");
    },
    m(r, s) {
      U(r, e, s), x(n, e, null), i = !0;
    },
    p(r, s) {
      const a = {};
      s & /*searchResults*/
      16 && (a.searchResults = /*result*/
      r[18][1]), s & /*$_*/
      256 && (a.noResourcesLabel = /*$_*/
      r[8]("no_resources_found")), n.$set(a);
    },
    i(r) {
      i || (I(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && F(e), $(n);
    }
  };
}
function co(t, e) {
  let n, i, r, s, a;
  return i = new uu({
    props: {
      open: (
        /*index*/
        e[20] === 0
      ),
      title: (
        /*archiveExplorerLocationStore*/
        e[9].getLocationNameByUuid(
          /*result*/
          e[18][0]
        )
      ),
      $$slots: { content: [o1] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ke(), te(i.$$.fragment), r = oe(), s = ee("div"), N(s, "class", "separator svelte-uwjlgf"), this.first = n;
    },
    m(l, o) {
      U(l, n, o), x(i, l, o), U(l, r, o), U(l, s, o), a = !0;
    },
    p(l, o) {
      e = l;
      const u = {};
      o & /*searchResults*/
      16 && (u.open = /*index*/
      e[20] === 0), o & /*searchResults*/
      16 && (u.title = /*archiveExplorerLocationStore*/
      e[9].getLocationNameByUuid(
        /*result*/
        e[18][0]
      )), o & /*$$scope, searchResults, $_*/
      2097424 && (u.$$scope = { dirty: o, ctx: e }), i.$set(u);
    },
    i(l) {
      a || (I(i.$$.fragment, l), a = !0);
    },
    o(l) {
      T(i.$$.fragment, l), a = !1;
    },
    d(l) {
      l && (F(n), F(r), F(s)), $(i, l);
    }
  };
}
function u1(t) {
  let e, n, i, r;
  const s = [r1, i1], a = [];
  function l(o, u) {
    return (
      /*loading*/
      o[6] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ke();
    },
    m(o, u) {
      a[e].m(o, u), U(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (we(), T(a[c], 1, 1, () => {
        a[c] = null;
      }), Fe(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), I(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (I(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      o && F(i), a[e].d(o);
    }
  };
}
td({ en: $u, de: sc });
function c1(t, e, n) {
  let i, r;
  lt(t, ed, (R) => n(8, r = R));
  const s = Mn.getInstance(), a = Kn.getInstance(), l = ps.getInstance(), o = gs.getInstance(), u = _s.getInstance(), c = er.getInstance();
  let f = [], d = [], h = o.currentData, m = u.currentData, _ = /* @__PURE__ */ new Map(), p = !1, v = !0;
  ut(() => {
    setTimeout(
      () => {
        n(6, v = !1);
      },
      1e3
    );
  }), ut(() => As(void 0, void 0, void 0, function* () {
    n(1, f = a.createArchiveFilter()), n(2, d = yield a.createLocationFilter()), n(5, p = !0);
  }));
  function b() {
    n(5, p = !1);
    const R = [], M = /* @__PURE__ */ new Map();
    m.forEach((g) => {
      const O = a.convertFilterToSearchParams(h);
      O.location = g.value, R.push(s.searchArchive(O).pipe(yn(1), Oi((B) => M.set(g.value, B)), b0(() => n(5, p = !0))));
    }), o.updateData(h), u.updateData(m), c0(R).pipe(Oi(() => {
      l.updateData(M), n(4, _ = M);
    })).subscribe();
  }
  function C(R) {
    m = R, n(3, m);
  }
  function A(R) {
    h = R, n(0, h);
  }
  return t.$$.update = () => {
    t.$$.dirty & /*filtersToSearch*/
    1 && n(7, i = h.length && !!(h != null && h.find((R) => R.key === "uuid")));
  }, [
    h,
    f,
    d,
    m,
    _,
    p,
    v,
    i,
    r,
    c,
    b,
    C,
    A
  ];
}
class f1 extends ye {
  constructor(e) {
    super(), Ee(this, e, c1, u1, _e, {});
  }
}
function fo(t) {
  let e, n;
  return e = new f1({}), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      x(e, i, r), n = !0;
    },
    i(i) {
      n || (I(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $(e, i);
    }
  };
}
function d1(t) {
  let e, n, i, r, s, a = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && fo()
  );
  return {
    c() {
      a && a.c(), e = oe(), n = ee("input"), i = oe(), r = ee("input"), N(n, "type", "hidden"), N(n, "name", "package-name"), n.value = Io, N(r, "type", "hidden"), N(r, "name", "package-version"), r.value = Eo;
    },
    m(l, o) {
      a && a.m(l, o), U(l, e, o), U(l, n, o), U(l, i, o), U(l, r, o), s = !0;
    },
    p(l, [o]) {
      /*doc*/
      l[0] || /*dev*/
      l[1] ? a ? o & /*doc, dev*/
      3 && I(a, 1) : (a = fo(), a.c(), I(a, 1), a.m(e.parentNode, e)) : a && (we(), T(a, 1, 1, () => {
        a = null;
      }), Fe());
    },
    i(l) {
      s || (I(a), s = !0);
    },
    o(l) {
      T(a), s = !1;
    },
    d(l) {
      l && (F(e), F(n), F(i), F(r)), a && a.d(l);
    }
  };
}
function h1(t, e, n) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return t.$$set = (s) => {
    "doc" in s && n(0, i = s.doc), "dev" in s && n(1, r = s.dev);
  }, [i, r];
}
class m1 extends ye {
  constructor(e) {
    super(), Ee(this, e, h1, d1, _e, { doc: 0, dev: 1 });
  }
}
class b1 extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new m1({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = p1();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function p1() {
  const t = `${Io}-v${Eo}-style`, e = g1(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function g1() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  b1 as default
};
